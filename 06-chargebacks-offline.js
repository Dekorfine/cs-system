// ════════════════════════════════════════════════════════════════════
// 🚨 拒付 + 💳 线下单 · fix28-67
// APP_VERSION: 2026.05.27-fix67
// ════════════════════════════════════════════════════════════════════



const ChargebacksModule = ({ user, employees, toast }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [filterStatus, setFilterStatus] = useState('active');
  const [search, setSearch] = useState('');
  // 🆕 时间筛选
  const [timeFilter, setTimeFilter] = useState('all');
  const [timeCustom, setTimeCustom] = useState({ start: '', end: '' });
  // 🆕 fix15: 日期范围筛选(新:"创建在范围内"语义,支持本周/本月/任意月第N周)
  const [dateFilter, setDateFilter] = useState({ kind:'all' });
  
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  
  const load = async () => {
    setLoading(true);
    try {
      const data = await CLOUD.list('chargebacks', { order:{col:'deadline', asc:true}, limit:500 });
      const live = (data || []).filter(c => !c.deleted);
      setList(live);
      STORE.set('chargebacks_cache', live);  // 🆕 缓存供 stats 计数用
    } catch(e) { toast('❌ 加载失败: ' + e.message); }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  
  const handleDelete = async (cb) => {
    const summary = `${cb.order_no} · ${cb.currency || 'USD'} ${cb.amount || 0} · ${cb.customer_email || cb.customer_name || '?'}`;
    await requestDelete({
      user, tableName:'chargebacks', moduleLabel:'🚨 拒付',
      record: cb, recordSummary: summary, toast, onSuccess: load,
    });
  };
  
  const filtered = useMemo(() => {
    let l = list;
    if (filterStatus === 'active') l = l.filter(c => c.status !== 'won' && c.status !== 'lost' && c.status !== 'closed');
    else if (filterStatus === 'mine') l = l.filter(c => (c.assigned_to || []).includes(user.id) || c.created_by === user.id);
    else if (filterStatus !== 'all') l = l.filter(c => c.status === filterStatus);
    
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      l = l.filter(c => 
        (c.order_no || '').toLowerCase().includes(q) ||
        (c.customer_email || '').toLowerCase().includes(q) ||
        (c.customer_name || '').toLowerCase().includes(q) ||
        (c.notes || '').toLowerCase().includes(q)
      );
    }
    
    // 🆕 时间筛选
    l = filterByTimeRange(l, timeFilter, timeCustom.start, timeCustom.end, 'created_at');
    // 🆕 fix15: 日期范围筛选(创建在范围内)
    l = filterByDateRange(l, dateFilter, 'created_at');
    
    return l;
  }, [list, filterStatus, search, user.id, timeFilter, timeCustom, dateFilter]);
  
  const stats = useMemo(() => {
    const active = list.filter(c => c.status !== 'won' && c.status !== 'lost' && c.status !== 'closed');
    return {
      total: list.length,
      active: active.length,
      urgent: active.filter(c => { const u = getChargebackUrgency(c); return u && (u.level === 'overdue' || u.level === 'today' || u.level === 'critical' || u.level === 'urgent'); }).length,
      won: list.filter(c => c.status === 'won').length,
      lost: list.filter(c => c.status === 'lost').length,
      mine: list.filter(c => (c.assigned_to || []).includes(user.id) && c.status !== 'won' && c.status !== 'lost' && c.status !== 'closed').length,
    };
  }, [list, user.id]);
  
  return (
    <div className="space-y-4 fade-in">
      <div className="paper rounded-2xl p-4">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12}}>
          <div>
            <div className="font-display" style={{fontSize:18, fontWeight:600}}>🚨 拒付管理</div>
            <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>
              共 <strong>{stats.total}</strong> · 进行中 <strong style={{color:'#dc2626'}}>{stats.active}</strong>
              {stats.urgent > 0 && <span style={{color:'#dc2626', marginLeft:8, fontWeight:600}}> · 🔥 {stats.urgent} 急</span>}
              {stats.mine > 0 && <span style={{color:'#7c3aed', marginLeft:8, fontWeight:600}}> · 👤 我负责 {stats.mine}</span>}
              <span style={{marginLeft:8, color:'#15803d'}}> · 胜诉 {stats.won}</span>
              <span style={{marginLeft:6}}>· 败诉 {stats.lost}</span>
            </div>
          </div>
          <button onClick={() => setEditing('new')} className="btn-pri" style={{padding:'6px 14px', fontSize:12}}>+ 新增拒付</button>
        </div>
        
        <div style={{marginTop:12, display:'flex', gap:6, flexWrap:'wrap'}}>
          {[
            { key:'active', label:'🔥 进行中', cnt: stats.active },
            { key:'mine',   label:'👤 我的',   cnt: stats.mine },
            { key:'pending',label:'⏳ 待证据', cnt: list.filter(c => c.status === 'pending').length },
            { key:'won',    label:'✅ 胜诉',   cnt: stats.won },
            { key:'lost',   label:'❌ 败诉',   cnt: stats.lost },
            { key:'all',    label:'📋 全部',   cnt: stats.total },
          ].map(t => (
            <button key={t.key} onClick={() => setFilterStatus(t.key)}
              style={{
                padding:'4px 11px', borderRadius:14, fontSize:11, cursor:'pointer', fontFamily:'inherit',
                border:'1px solid ' + (filterStatus === t.key ? 'var(--accent)' : 'var(--line)'),
                background: filterStatus === t.key ? 'var(--accent)' : 'white',
                color: filterStatus === t.key ? 'white' : 'var(--ink-2)',
                fontWeight: filterStatus === t.key ? 600 : 400,
              }}>
              {t.label} ({t.cnt})
            </button>
          ))}
        </div>
        
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="🔍 搜索订单号 / 客户邮箱 / 备注..."
          style={{width:'100%', marginTop:10, padding:'6px 12px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
        
        {/* 🆕 时间筛选 */}
        <div style={{marginTop:10, paddingTop:10, borderTop:'1px dashed var(--line)'}}>
          <TimeRangeFilter value={timeFilter} onChange={setTimeFilter}
            customStart={timeCustom.start} customEnd={timeCustom.end}
            onCustomChange={setTimeCustom} label="🕓 超期筛选:"
            records={list} dateField="created_at" />
        </div>
        {/* 🆕 fix15: 创建日期范围筛选(本周/本月/任意月第N周) */}
        <div style={{marginTop:8, display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
          <span style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, whiteSpace:'nowrap'}}>📅 创建时间:</span>
          <AdvancedDateFilter value={dateFilter} onChange={setDateFilter} size="sm" />
        </div>
      </div>
      
      {/* 🆕 fix9b: 拒付金额汇总(时间筛选 + 按网站分布) */}
      <AmountSummaryWidget
        title="拒付金额汇总"
        icon="🚨"
        color="#dc2626"
        items={list}
        statusLabels={{
          pending:        { label:'待证据', color:'#ca8a04', bg:'#fef9c3' },
          submitted:      { label:'已提交', color:'#0369a1', bg:'#e0f2fe' },
          under_review:   { label:'审核中', color:'#7c3aed', bg:'#f5f3ff' },
          won:            { label:'胜诉',   color:'#16a34a', bg:'#dcfce7' },
          lost:           { label:'败诉',   color:'#dc2626', bg:'#fee2e2' },
          closed:         { label:'已关闭', color:'#6b7280', bg:'#f3f4f6' },
        }}
        getSite={c => c.site || c.website || null}
      />
      
      {loading ? (
        <div className="paper rounded-2xl p-10" style={{textAlign:'center'}}>⏳ 加载中...</div>
      ) : filtered.length === 0 ? (
        <div className="paper rounded-2xl p-12" style={{textAlign:'center', color:'var(--ink-3)'}}>
          🎉 暂无拒付 {filterStatus !== 'all' ? '(当前筛选下)' : ''}
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map(cb => (
            <ChargebackCard key={cb.id} cb={cb} employees={employees} user={user} isAdmin={isAdmin}
              onEdit={() => setEditing(cb)} onDelete={() => handleDelete(cb)} onReload={load} toast={toast} />
          ))}
        </div>
      )}
      
      {editing && (
        <ChargebackEditor cb={editing === 'new' ? null : editing} user={user} employees={employees}
          onClose={() => setEditing(null)} onSaved={() => { setEditing(null); load(); }} toast={toast} />
      )}
    </div>
  );
};

const ChargebackCard = ({ cb, employees, user, isAdmin, onEdit, onDelete, onReload, toast }) => {
  const [expanded, setExpanded] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  const urgency = getChargebackUrgency(cb);
  const status = CHARGEBACK_STATUSES.find(s => s.key === cb.status) || CHARGEBACK_STATUSES[0];
  const reason = CHARGEBACK_REASONS.find(r => r.key === cb.reason);
  const evidence = cb.evidence_files || [];
  
  const setStatus = async (newStatus) => {
    const res = await CLOUD.upsert('chargebacks', { ...cb, status: newStatus, updated_at: new Date().toISOString() });
    if (res) { toast('✓ 已更新状态'); onReload(); }
  };
  
  return (
    <div className="paper rounded-2xl fade-in" style={{
      overflow:'hidden',
      border: '1.5px solid ' + (urgency && ['overdue','today','critical'].includes(urgency.level) ? urgency.color : 'var(--line)'),
      background: urgency && ['overdue','today'].includes(urgency.level) ? '#fef2f2' : 'white',
    }}>
      <div style={{padding:'12px 16px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:10, flexWrap:'wrap'}}>
          <div style={{flex:1, minWidth:0}}>
            <div style={{display:'flex', alignItems:'center', gap:6, flexWrap:'wrap', marginBottom:4}}>
              <span style={{padding:'2px 8px', borderRadius:10, fontSize:10, fontWeight:600, background: status.bg, color: status.color}}>{status.label}</span>
              {urgency && urgency.level !== 'normal' && (
                <span style={{padding:'2px 8px', borderRadius:10, fontSize:10, fontWeight:700, background: urgency.bg, color: urgency.color, border:`1px solid ${urgency.color}40`}}>
                  ⏰ {urgency.label}
                </span>
              )}
              {cb.platform && <span style={{padding:'2px 8px', background:'#e0e7ff', color:'#4338ca', borderRadius:10, fontSize:10, fontWeight:600}}>{cb.platform}</span>}
              {cb.site && <span style={{padding:'2px 8px', background:'#f5f5f7', color:'var(--ink-3)', borderRadius:10, fontSize:10, fontWeight:600}}>{cb.site}</span>}
            </div>
            <div style={{fontSize:15, fontWeight:600, marginBottom:3}}>
              {cb.order_no} · 💰 {cb.currency || 'USD'} {cb.amount || 0}
            </div>
            <div style={{fontSize:12, color:'var(--ink-2)'}}>
              📧 {cb.customer_email || '?'}{cb.customer_name ? ` · ${cb.customer_name}` : ''}
            </div>
            <div style={{fontSize:11, color:'var(--ink-3)', marginTop:6, display:'flex', gap:8, flexWrap:'wrap'}}>
              <span>📅 拒付开始 {cb.opened_at} · 截止 <strong style={{color: urgency?.color || 'var(--ink)'}}>{cb.deadline}</strong></span>
              {reason && <span>· {reason.label}</span>}
              {(cb.assigned_to_names || []).length > 0 && (
                <span style={{color:'#7c3aed', fontWeight:600}}>· 👥 {cb.assigned_to_names.join(' + ')}</span>
              )}
              <span>· 录入 {cb.created_by_name}</span>
            </div>
            {cb.reason_detail && (
              <div style={{marginTop:6, padding:'5px 10px', background:'#fef9c3', borderRadius:5, fontSize:12, color:'#713f12'}}>
                💬 {cb.reason_detail}
              </div>
            )}
          </div>
          <div style={{display:'flex', gap:4, flexWrap:'wrap', alignItems:'flex-start'}}>
            {cb.status === 'pending' && (
              <button onClick={() => setStatus('responded')}
                style={{padding:'5px 12px', background:'#0369a1', color:'white', border:'none', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>
                📤 标记已提交证据
              </button>
            )}
            {cb.status === 'responded' && (
              <>
                <button onClick={() => setStatus('won')}
                  style={{padding:'5px 12px', background:'#15803d', color:'white', border:'none', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>
                  ✅ 胜诉
                </button>
                <button onClick={() => setStatus('lost')}
                  style={{padding:'5px 12px', background:'#737373', color:'white', border:'none', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>
                  ❌ 败诉
                </button>
              </>
            )}
            <button onClick={() => setExpanded(v => !v)} className="btn-sec" style={{padding:'5px 10px', fontSize:11}}>
              {expanded ? '收起 ▲' : '详情 ▼'}
            </button>
            <button onClick={onEdit}
              style={{padding:'5px 10px', background:'#e0f2fe', color:'#0369a1', border:'1px solid #7dd3fc', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>✏️</button>
            {(isAdmin || cb.created_by === user.id) && (
              <button onClick={onDelete}
                style={{padding:'5px 10px', background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>🗑</button>
            )}
          </div>
        </div>
        
        {expanded && (
          <div style={{marginTop:10, padding:10, background:'#f5f5f7', borderRadius:8}}>
            {cb.notes && (
              <div style={{marginBottom:8}}>
                <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:3}}>📝 处理记录:</div>
                <div style={{padding:8, background:'white', borderRadius:5, fontSize:12, whiteSpace:'pre-wrap'}}>{cb.notes}</div>
              </div>
            )}
            {cb.resolution && (
              <div style={{marginBottom:8}}>
                <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:3}}>✅ 最终结果:</div>
                <div style={{padding:8, background:'white', borderRadius:5, fontSize:12, whiteSpace:'pre-wrap'}}>{cb.resolution}</div>
              </div>
            )}
            {evidence.length > 0 && (
              <div>
                <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:5}}>📎 证据材料 ({evidence.length}):</div>
                <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(100px, 1fr))', gap:5}}>
                  {evidence.map(a => {
                    const info = getFileTypeInfo(a);
                    return info.kind === 'image' ? (
                      <img key={a.id} src={a.url} onClick={() => setPreviewFile(a)}
                        style={{width:'100%', height:75, objectFit:'contain', borderRadius:5, cursor:'pointer', border:'1px solid var(--line)', background:'var(--bg-elevated)'}} />
                    ) : (
                      <FileChip key={a.id} file={a} onClick={() => setPreviewFile(a)} />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {previewFile && <FilePreviewModal file={previewFile} onClose={() => setPreviewFile(null)} />}
    </div>
  );
};

const ChargebackEditor = ({ cb, user, employees, onClose, onSaved, toast }) => {
  const isEdit = !!cb;
  const today = todayISO();
  const defaultDeadline = (() => {
    const d = new Date(); d.setDate(d.getDate() + 7);
    return d.toISOString().slice(0,10);
  })();
  
  // ✂ 简化版字段:只保留主管要求的最核心字段
  const [orderNo, setOrderNo] = useState(cb?.order_no || '');
  const [customerEmail, setCustomerEmail] = useState(cb?.customer_email || '');
  const [platform, setPlatform] = useState(cb?.platform || 'Stripe');
  const [amount, setAmount] = useState(cb?.amount || '');
  const [currency, setCurrency] = useState(cb?.currency || 'USD');
  const [openedAt, setOpenedAt] = useState(cb?.opened_at || today);
  const [deadline, setDeadline] = useState(cb?.deadline || defaultDeadline);
  const [reason, setReason] = useState(cb?.reason || 'product');  // 🆕 加回拒付原因
  const [notes, setNotes] = useState(cb?.notes || '');
  const [evidence, setEvidence] = useState(cb?.evidence_files || []);
  const [status, setStatus] = useState(cb?.status || 'pending');
  const [saving, setSaving] = useState(false);
  const [autoAssignInfo, setAutoAssignInfo] = useState('');
  const [assignedTo, setAssignedTo] = useState(cb?.assigned_to || []);
  
  // 🔍 从订单编号智能推断网站(例如 VKA-0756 → VK, RD0031 → RD, DF-1234 → DF)
  const inferSiteFromOrderNo = (orderNoStr) => {
    if (!orderNoStr) return '';
    const upper = orderNoStr.trim().toUpperCase();
    // 已知前缀映射
    const prefixMap = {
      'VKA': 'VK', 'VK': 'VK',
      'RD': 'RD',
      'DF': 'DF',
      'MJ': 'MJ',
      'DC': 'DC',
      'LS': 'LS',
      'MO': 'MO',
      'RS': 'RS',
      'PL': 'PL',
      'J': 'J',
      '海服': '海服',
    };
    // 尝试匹配前缀(从长到短)
    const sortedKeys = Object.keys(prefixMap).sort((a,b) => b.length - a.length);
    for (const key of sortedKeys) {
      if (upper.startsWith(key.toUpperCase())) return prefixMap[key];
    }
    return '';
  };
  
  // 🆕 智能自动指派 - 周六/周日分别值班 + 工作日按网站
  const autoAssignByConfig = (siteValue, config) => {
    if (!config) return { ids: [], info: '' };
    const now = new Date();
    const day = now.getDay();
    
    if (day === 0) {
      const sundayUid = config.sunday_owner || config.weekend_owner;
      if (sundayUid) return { ids: [sundayUid], info: '🌙 周日值班' };
    }
    if (day === 6) {
      const saturdayUid = config.saturday_owner || config.weekend_owner;
      if (saturdayUid) return { ids: [saturdayUid], info: '🌅 周六值班' };
    }
    if (siteValue && config.site_owners && config.site_owners[siteValue]) {
      return { ids: [config.site_owners[siteValue]], info: `🌐 ${siteValue} 网站专人` };
    }
    if (config.default_owner) {
      return { ids: [config.default_owner], info: '⚙ 默认负责人' };
    }
    if ((config.user_ids || []).length > 0) {
      return { ids: config.user_ids, info: '已配置专人' };
    }
    return { ids: [], info: '' };
  };
  
  // 新建时,根据订单编号 + 时间自动指派
  useEffect(() => {
    if (isEdit) return;
    if (!orderNo) { setAutoAssignInfo(''); return; }
    (async () => {
      try {
        const inferredSite = inferSiteFromOrderNo(orderNo);
        const { data } = await CLOUD.client.from('system_settings').select('*').eq('key', 'chargeback_owners').single();
        const config = data?.value || {};
        const { ids, info } = autoAssignByConfig(inferredSite, config);
        if (ids.length > 0) {
          setAssignedTo(ids);
          const names = ids.map(uid => {
            const e = employees.find(x => x.id === uid);
            return e ? e.name + (e.alias ? ' ' + e.alias : '') : uid;
          }).join(' + ');
          setAutoAssignInfo(`${info} → ${names}${inferredSite ? ` (推断网站: ${inferredSite})` : ''}`);
        } else {
          setAssignedTo([]);
          setAutoAssignInfo('⚠ 未配置拒付负责人,主管请在 ⚙ 设置 中配置');
        }
      } catch(e) {
        setAutoAssignInfo('');
      }
    })();
  }, [orderNo, isEdit]);
  
  const daysLeft = deadline ? daysUntil(deadline) : null;
  
  const handleSave = async () => {
    // 校验
    if (!orderNo.trim()) { alert('请填写订单编号'); return; }
    if (!customerEmail.trim()) { alert('请填写客户邮箱'); return; }
    if (!amount || parseFloat(amount) <= 0) { alert('请填写金额'); return; }
    if (!openedAt) { alert('请填写拒付日期'); return; }
    if (!deadline) { alert('请填写截止处理日期'); return; }
    
    setSaving(true);
    const userName = user.name + (user.alias ? ' ' + user.alias : '');
    const now = new Date().toISOString();
    const inferredSite = inferSiteFromOrderNo(orderNo);
    
    // 获取自动指派的人员名称
    const assignedNames = assignedTo.map(uid => {
      const e = employees.find(x => x.id === uid);
      return e ? e.name + (e.alias ? ' ' + e.alias : '') : uid;
    });
    
    // 构建 payload - 简化版
    const payload = {
      // 保留原记录的所有字段(编辑时)
      ...(cb || {}),
      // 主要字段
      order_no: orderNo.trim(),
      customer_email: customerEmail.trim(),
      platform: platform || 'Stripe',
      amount: parseFloat(amount),
      currency: currency || 'USD',
      reason: reason || null,  // 🆕 拒付原因
      opened_at: openedAt,
      deadline,
      notes: notes.trim() || null,
      evidence_files: evidence || [],
      // 隐藏字段:从订单编号自动推断网站,自动指派负责人
      site: inferredSite || null,
      assigned_to: assignedTo,
      assigned_to_names: assignedNames,
      // 状态
      status: isEdit ? status : 'pending',
      // 元数据
      updated_at: now,
      // 🆕 fix7: created_by 必须非空 — 旧数据可能 created_by 为 null,导致编辑时被 spread 进 payload 触发数据库 not-null 约束
      // 策略:优先用原记录的 created_by(保留审计追踪),为空则用当前用户兜底
      created_by: cb?.created_by || user.id,
      created_by_name: cb?.created_by_name || userName,
    };
    
    try {
      const res = await CLOUD.upsert('chargebacks', payload);
      if (res) {
        toast(isEdit ? '✓ 已更新拒付' : '✓ 已创建拒付');
        onSaved();
      } else {
        alertSaveError(isEdit ? '更新拒付' : '创建拒付');
      }
    } catch(e) {
      console.error('保存拒付失败:', e);
      alertSaveError(isEdit ? '更新拒付' : '创建拒付');
    }
    setSaving(false);
  };
  
  return ReactDOM.createPortal(
    <div onClick={onClose}
      style={{position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:99999, display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'4vh 16px', overflowY:'auto', overflowX:'hidden'}}>
      <div onClick={e => e.stopPropagation()}
        style={{background:'white', borderRadius:14, maxWidth:560, width:'100%', display:'flex', flexDirection:'column', maxHeight:'92vh', overflow:'hidden', boxShadow:'0 25px 70px rgba(0,0,0,.3)'}}>
        
        {/* Header */}
        <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0, gap:8}}>
          <div className="font-display" style={{fontSize:16, fontWeight:600, color:'#dc2626'}}>
            🚨 {isEdit ? '编辑' : '新增'}拒付
          </div>
          <div style={{display:'flex', gap:6, alignItems:'center'}}>
            {/* 🆕 fix7: 申请主管协助 — 任何角色都可一键升级 */}
            {user && user.role !== 'super_admin' && (
              <button onClick={() => window.__requestSupervisorAssistance?.({
                entityType: '拒付', entityId: cb?.id, entityTitle: cb?.order_no || orderNo || '(新拒付)'
              })}
                style={{padding:'5px 11px', background:'#fef3c7', color:'#92400e', border:'1px solid #fcd34d', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}
                title="把这条拒付交给主管/老板处理">
                {user.role === 'admin' ? '👑 申请老板' : '🚨 申请主管'}
              </button>
            )}
            <button className="btn-sec" onClick={onClose} style={{padding:'4px 12px'}}>×</button>
          </div>
        </div>
        
        {/* Body */}
        <div style={{padding:18, overflowY:'auto', overflowX:'hidden', flex:1, minHeight:0}}>
          
          {/* 自动指派提示 */}
          {!isEdit && autoAssignInfo && (
            <div style={{padding:'10px 12px', background:'#e0f2fe', border:'1px solid #7dd3fc', borderRadius:8, fontSize:12, color:'#075985', marginBottom:14, lineHeight:1.5}}>
              💡 <strong>自动指派负责人</strong>:{autoAssignInfo}
            </div>
          )}
          
          {/* 订单编号 */}
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>
              订单编号 * <span style={{color:'var(--ink-4)', fontWeight:400}}>(系统会从前缀自动识别网站)</span>
            </label>
            <input value={orderNo} onChange={e => setOrderNo(e.target.value)} autoFocus
              placeholder="如:VKA-0756 / RD0091 / DF-1234"
              style={{width:'100%', padding:'8px 12px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'monospace'}} />
          </div>
          
          {/* 客户邮箱 */}
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>客户邮箱 *</label>
            <input type="email" value={customerEmail} onChange={e => setCustomerEmail(e.target.value)}
              placeholder="customer@example.com"
              style={{width:'100%', padding:'8px 12px', border:'1px solid var(--line)', borderRadius:7, fontSize:13}} />
          </div>
          
          {/* 拒付方式 + 金额 */}
          <div style={{display:'grid', gridTemplateColumns:'1.2fr 1fr 80px', gap:8, marginBottom:12}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>拒付方式 *</label>
              <select value={platform} onChange={e => setPlatform(e.target.value)}
                style={{width:'100%', padding:'8px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, background:'white'}}>
                {CHARGEBACK_PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>金额 *</label>
              <input type="number" step="0.01" value={amount} onChange={e => setAmount(e.target.value)}
                placeholder="0.00"
                style={{width:'100%', padding:'8px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'monospace'}} />
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>币种</label>
              <select value={currency} onChange={e => setCurrency(e.target.value)}
                style={{width:'100%', padding:'8px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, background:'white'}}>
                {['USD','EUR','GBP','CAD','AUD','HKD'].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>
          
          {/* 日期: 拒付 + 截止 */}
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:12}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>拒付日期 *</label>
              <input type="date" value={openedAt} onChange={e => setOpenedAt(e.target.value)}
                style={{width:'100%', padding:'8px 12px', border:'1px solid var(--line)', borderRadius:7, fontSize:13}} />
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>
                截止处理日期 *
                {daysLeft !== null && (
                  <span style={{marginLeft:5, color: daysLeft < 0 ? '#dc2626' : daysLeft <= 3 ? '#9a3412' : daysLeft <= 7 ? '#854d0e' : '#15803d', fontWeight:700, fontSize:11}}>
                    ({daysLeft < 0 ? `已逾期 ${Math.abs(daysLeft)}天` : `剩 ${daysLeft}天`})
                  </span>
                )}
              </label>
              <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)}
                style={{width:'100%', padding:'8px 12px', border:'1px solid var(--line)', borderRadius:7, fontSize:13}} />
            </div>
          </div>
          
          {/* 拒付原因 - 简洁下拉 */}
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>
              拒付原因 <span style={{color:'var(--ink-4)', fontWeight:400}}>(客户为何申请拒付)</span>
            </label>
            <select value={reason} onChange={e => setReason(e.target.value)}
              style={{width:'100%', padding:'8px 12px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, background:'white'}}>
              {CHARGEBACK_REASONS.map(r => <option key={r.key} value={r.key}>{r.label}</option>)}
            </select>
          </div>
          
          {/* 状态 (编辑时) */}
          {isEdit && (
            <div style={{marginBottom:12}}>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>状态</label>
              <select value={status} onChange={e => setStatus(e.target.value)}
                style={{width:'100%', padding:'8px 12px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, background:'white'}}>
                {CHARGEBACK_STATUSES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
              </select>
            </div>
          )}
          
          {/* 备注 / 处理记录 - 改为必填详细说明 */}
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>
              详细说明 / 处理记录 <span style={{color:'var(--ink-4)', fontWeight:400}}>(原因细节 + 处理进展)</span>
            </label>
            <textarea value={notes} onChange={e => setNotes(e.target.value)}
              placeholder="例如:&#10;客户称未收到货,但 DHL 显示已签收&#10;5/24 已通过 Stripe 后台提交证据&#10;5/25 客户已回复同意撤回"
              style={{width:'100%', minHeight:90, padding:'8px 12px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'inherit', resize:'vertical'}} />
          </div>
          
          {/* 证据材料 */}
          <div style={{marginBottom:8}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>
              📎 证据材料 <span style={{color:'var(--ink-4)', fontWeight:400}}>(订单截图 / 物流证明 / 邮件 / 发票...)</span>
            </label>
            <MultiFileUploader files={evidence} setFiles={setEvidence} bucket="business-files" maxSize={50} />
            <div style={{fontSize:10, color:'var(--ink-4)', marginTop:4, lineHeight:1.4}}>
              💡 提示:如上传失败,可能是云存储 bucket 未创建。请联系主管在 Supabase 跑 SQL 文件 <strong>13_chargebacks_offline_custom_photos.sql</strong>。
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div style={{padding:'12px 18px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'flex-end', gap:6, flexShrink:0, background:'#fafafa'}}>
          <button onClick={onClose} className="btn-sec" style={{padding:'8px 16px'}}>取消</button>
          <button onClick={handleSave} disabled={saving}
            style={{padding:'8px 20px', background:'#dc2626', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13, opacity: saving ? 0.5 : 1}}>
            {saving ? '保存中...' : (isEdit ? '✓ 保存修改' : '🚨 创建拒付')}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

// ============================================================
// 💳 线下单模块
// ============================================================
const OfflineOrdersModule = ({ user, employees, toast }) => {
  const allSites = useSiteCodes();  // 🆕 fix22 联动 3: 合并 内置 SITES + 自定义网站
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [filterStatus, setFilterStatus] = useState('active');
  const [filterSite, setFilterSite] = useState('all');
  const [search, setSearch] = useState('');
  // 🆕 时间筛选
  const [timeFilter, setTimeFilter] = useState('all');
  const [timeCustom, setTimeCustom] = useState({ start: '', end: '' });
  // 🆕 fix15: 日期范围筛选(本周/本月/任意月第N周)
  const [dateFilter, setDateFilter] = useState({ kind:'all' });
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';

  const load = async () => {
    setLoading(true);
    try {
      const data = await CLOUD.list('offline_orders', { order:{col:'created_at', asc:false}, limit:500 });
      setList((data || []).filter(o => !o.deleted));
    } catch(e) { toast('❌ ' + e.message); }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  const handleDelete = async (o) => {
    const summary = `${o.order_no} · ${o.payment_currency || 'USD'} ${o.payment_amount || 0} · ${o.customer_email || o.customer_name || '?'}`;
    await requestDelete({
      user, tableName:'offline_orders', moduleLabel:'💳 线下单',
      record: o, recordSummary: summary, toast, onSuccess: load,
    });
  };

  const filtered = useMemo(() => {
    let l = list;
    if (filterStatus === 'active') l = l.filter(o => o.status !== 'completed' && o.status !== 'cancelled');
    else if (filterStatus === 'mine') l = l.filter(o => o.created_by === user.id);
    else if (filterStatus !== 'all') l = l.filter(o => o.status === filterStatus);
    if (filterSite !== 'all') l = l.filter(o => o.site === filterSite);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      l = l.filter(o =>
        (o.order_no || '').toLowerCase().includes(q) ||
        (o.customer_email || '').toLowerCase().includes(q) ||
        (o.customer_name || '').toLowerCase().includes(q) ||
        (o.ship_to_name || '').toLowerCase().includes(q));
    }
    // 🆕 时间筛选
    l = filterByTimeRange(l, timeFilter, timeCustom.start, timeCustom.end, 'created_at');
    // 🆕 fix15: 日期范围筛选(创建在范围内)
    l = filterByDateRange(l, dateFilter, 'created_at');
    return l;
  }, [list, filterStatus, filterSite, search, user.id, timeFilter, timeCustom, dateFilter]);

  const stats = useMemo(() => {
    const totalAmount = list.filter(o => ['paid','dispatched','completed'].includes(o.status))
      .reduce((s, o) => s + (parseFloat(o.payment_amount) || 0), 0);
    return {
      total: list.length,
      pending: list.filter(o => o.status === 'pending_payment').length,
      paid: list.filter(o => o.status === 'paid').length,
      dispatched: list.filter(o => o.status === 'dispatched').length,
      totalAmount: totalAmount.toFixed(2),
    };
  }, [list]);

  return (
    <div className="space-y-4 fade-in">
      <div className="paper rounded-2xl p-4">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12}}>
          <div>
            <div className="font-display" style={{fontSize:18, fontWeight:600}}>💳 线下单管理</div>
            <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>
              共 <strong>{stats.total}</strong> · 已收款 <strong style={{color:'#15803d'}}>${stats.totalAmount}</strong>
              · 待付款 {stats.pending} · 已付款 {stats.paid} · 已下单 {stats.dispatched}
            </div>
          </div>
          <button onClick={() => setEditing('new')} className="btn-pri" style={{padding:'6px 14px', fontSize:12}}>+ 新建线下单</button>
        </div>
        <div style={{marginTop:12, display:'flex', gap:6, flexWrap:'wrap', alignItems:'center'}}>
          {[{key:'active',label:'🔥 进行中'},{key:'mine',label:'👤 我的'},{key:'draft',label:'📝 草稿'},
            {key:'pending_payment',label:'⏳ 待付款'},{key:'paid',label:'💰 已付款'},
            {key:'dispatched',label:'🚚 已下单'},{key:'completed',label:'✅ 已完成'},{key:'all',label:'📋 全部'}].map(t => (
            <button key={t.key} onClick={() => setFilterStatus(t.key)}
              style={{padding:'4px 11px', borderRadius:14, fontSize:11, cursor:'pointer', fontFamily:'inherit',
                border:'1px solid ' + (filterStatus === t.key ? 'var(--accent)' : 'var(--line)'),
                background: filterStatus === t.key ? 'var(--accent)' : 'white',
                color: filterStatus === t.key ? 'white' : 'var(--ink-2)',
                fontWeight: filterStatus === t.key ? 600 : 400}}>{t.label}</button>))}
          <select value={filterSite} onChange={e => setFilterSite(e.target.value)}
            style={{padding:'4px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:11, background:'white', fontFamily:'inherit'}}>
            <option value="all">全部网站</option>
            {allSites.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 订单号 / 客户邮箱 / 姓名..."
          style={{width:'100%', marginTop:10, padding:'6px 12px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
        
        {/* 🆕 时间筛选 */}
        <div style={{marginTop:10, paddingTop:10, borderTop:'1px dashed var(--line)'}}>
          <TimeRangeFilter value={timeFilter} onChange={setTimeFilter}
            customStart={timeCustom.start} customEnd={timeCustom.end}
            onCustomChange={setTimeCustom} label="🕓 超期筛选:"
            records={list} dateField="created_at" />
        </div>
        {/* 🆕 fix15: 创建日期范围筛选(本周/本月/任意月第N周) */}
        <div style={{marginTop:8, display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
          <span style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, whiteSpace:'nowrap'}}>📅 创建时间:</span>
          <AdvancedDateFilter value={dateFilter} onChange={setDateFilter} size="sm" />
        </div>
      </div>
      {loading ? <div className="paper rounded-2xl p-10" style={{textAlign:'center'}}>⏳ 加载中...</div>
       : filtered.length === 0 ? <div className="paper rounded-2xl p-12" style={{textAlign:'center', color:'var(--ink-3)'}}>📋 暂无线下单</div>
       : <div className="space-y-2">{filtered.map(o =>
          <OfflineOrderCard key={o.id} order={o} user={user} isAdmin={isAdmin}
            onEdit={() => setEditing(o)} onDelete={() => handleDelete(o)} onReload={load} toast={toast} />)}</div>}
      {editing && <OfflineOrderEditor order={editing === 'new' ? null : editing} user={user} employees={employees}
        onClose={() => setEditing(null)} onSaved={() => { setEditing(null); load(); }} toast={toast} />}
    </div>
  );
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix18: 转单给跟单 modal — 一键把已付款的线下单转给跟单同事
// 自动创建 cross_dept_messages,带订单号 / 收货 / 产品 / 付款凭证
// ════════════════════════════════════════════════════════════════════
const TransferToPoModal = ({ order, user, onClose, onTransferred, toast }) => {
  const [poUserId, setPoUserId] = useState('');
  const [poUserName, setPoUserName] = useState('');
  const [priority, setPriority] = useState('normal');
  const [extraNote, setExtraNote] = useState('');
  const [sending, setSending] = useState(false);
  const [poEmployees, setPoEmployees] = useState([]);
  const [shopOwners, setShopOwners] = useState([]);
  
  // 加载跟单员工(从 shop_owners 表里跟单系统的负责人)
  useEffect(() => {
    (async () => {
      const client = getCdmClient();
      if (!client) return;
      try {
        const { data } = await client.from('shop_owners').select('*').eq('system', 'po');
        const owners = data || [];
        setShopOwners(owners);
        // 去重员工列表
        const uniqueEmps = {};
        owners.forEach(o => {
          if (o.user_id && !uniqueEmps[o.user_id]) uniqueEmps[o.user_id] = { id: o.user_id, name: o.user_name || '未命名' };
        });
        const list = Object.values(uniqueEmps);
        setPoEmployees(list);
        // 根据 order.site 自动推荐
        if (order.site) {
          const matched = owners.find(o => o.shop_name === order.site || (o.shop_name || '').toLowerCase() === order.site.toLowerCase());
          if (matched) {
            setPoUserId(matched.user_id);
            setPoUserName(matched.user_name);
          }
        }
      } catch (e) { console.warn('加载跟单员工失败', e); }
    })();
  }, [order.site]);
  
  const products = order.products || [];
  const dispatchText = order.follow_dispatch_text || generateDispatchText(order, products);
  
  const transfer = async () => {
    const client = getCdmClient();
    if (!client) { alert('消息总线未连接,无法转单'); return; }
    if (!poUserId && !poUserName.trim()) {
      if (!confirm('未指定跟单负责人,确定全跟单部都能看到吗?')) return;
    }
    setSending(true);
    try {
      const userName = user.name + (user.alias ? ' ' + user.alias : '');
      const body = [
        '📦 客服已转单 · 此订单客户已付款,请安排下单',
        '',
        `订单号: ${order.order_no}`,
        `网站: ${order.site || '?'}`,
        `客户: ${order.customer_name || order.customer_email || '?'}${order.customer_email ? ' · ' + order.customer_email : ''}`,
        `付款: ${order.payment_method || '?'} · ${order.payment_currency || 'USD'} ${order.payment_amount || 0}${order.received_amount ? ' (实收 ' + order.received_amount + ')' : ''}`,
        `付款时间: ${order.paid_at || '未填'}`,
        '',
        '📍 收货地址:',
        order.ship_to_name || '',
        order.ship_to_address || '',
        [order.ship_to_city, order.ship_to_state, order.ship_to_zip].filter(Boolean).join(', '),
        order.ship_to_country || '',
        order.ship_to_phone ? '📞 ' + order.ship_to_phone : '',
        '',
        `🛍️ 产品 (${products.length} 件):`,
        ...products.map(p => `  - ${p.sku || ''} ${p.name || ''} × ${p.qty || 1}${p.unit_price ? ' @ ' + p.unit_price : ''}`),
        '',
        extraNote.trim() ? '📝 备注: ' + extraNote.trim() : '',
        '',
        '─────────────',
        '📋 下单指令:',
        dispatchText,
      ].filter(Boolean).join('\n');
      
      // 附件:订单原始附件(付款凭证等)
      const attachments = order.attachments || [];
      
      const msg = {
        from_system: MY_SYSTEM,
        from_user_id: user.id,
        from_user_name: userName,
        to_system: 'po',
        to_user_id: poUserId || null,
        to_user_name: poUserName.trim() || null,
        related_shop: order.site || null,
        watchers: null,
        category: 'general',
        priority,
        title: `[已付款转单] ${order.order_no}${order.site ? ' · ' + order.site : ''} · ${order.payment_currency || 'USD'} ${order.payment_amount || 0}`,
        body,
        attachments,
        related_type: 'order',
        related_ref: order.order_no,
        status: 'pending',
        thread: [],
        read_by: [user.id],
        created_at_ms: Date.now(),
        updated_at: new Date().toISOString(),
      };
      const { error } = await client.from('cross_dept_messages').insert(msg);
      if (error) throw error;
      
      // 同时在订单上记录转单信息
      await CLOUD.upsert('offline_orders', {
        ...order,
        transferred_to_po: true,
        transferred_to_id: poUserId || null,
        transferred_to_name: poUserName.trim() || '跟单部',
        transferred_at: new Date().toISOString(),
        status: order.status === 'paid' ? 'dispatched' : order.status,  // 已付款 → 自动改为已下单
        updated_at: new Date().toISOString(),
      });
      
      toast('✓ 已转给跟单 · 跨部门消息已发送');
      onTransferred && onTransferred();
    } catch (e) { alert('转单失败: ' + (e.message || e)); }
    setSending(false);
  };
  
  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:100000, display:'flex', alignItems:'flex-start', justifyContent:'center', overflow:'auto', padding:'30px 20px'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, width:'100%', maxWidth:620, boxShadow:'0 20px 60px rgba(0,0,0,.25)'}}>
        <div style={{padding:'14px 20px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', background:'linear-gradient(90deg, #dbeafe 0%, #e0f2fe 100%)'}}>
          <div>
            <div className="font-display" style={{fontSize:16, fontWeight:600, color:'#1e40af'}}>📤 转给跟单部</div>
            <div style={{fontSize:11, color:'#1e3a8a', marginTop:2}}>订单 {order.order_no} · 一键创建跟单工单</div>
          </div>
          <button onClick={onClose} style={{background:'transparent', border:'none', cursor:'pointer', fontSize:18}}>×</button>
        </div>
        
        <div style={{padding:'16px 20px', display:'flex', flexDirection:'column', gap:12}}>
          {/* 推荐跟单同事 */}
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>👤 转给谁 (基于网站自动推荐)</label>
            {poEmployees.length > 0 ? (
              <select value={poUserId} onChange={e => {
                const id = e.target.value;
                setPoUserId(id);
                const emp = poEmployees.find(x => x.id === id);
                if (emp) setPoUserName(emp.name);
              }} style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, background:'white', fontFamily:'inherit'}}>
                <option value="">— 不指定 (跟单部全员可见) —</option>
                {poEmployees.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
              </select>
            ) : (
              <input value={poUserName} onChange={e => setPoUserName(e.target.value)} placeholder="跟单同事姓名(选填,留空则跟单部全员可见)"
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'inherit'}} />
            )}
            {order.site && poEmployees.length === 0 && (
              <div style={{fontSize:10, color:'#86868b', marginTop:3}}>💡 主管在跨部门协作里维护了"店铺负责人"映射后,这里会自动推荐</div>
            )}
          </div>
          
          {/* 优先级 */}
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>⚡ 紧急程度</label>
            <div style={{display:'flex', gap:5, flexWrap:'wrap'}}>
              {[
                {id:'urgent', label:'🚨 紧急', color:'#dc2626'},
                {id:'high',   label:'⚡ 重要', color:'#d97706'},
                {id:'normal', label:'· 普通', color:'#86868b'},
                {id:'low',    label:'· 低',   color:'#a8a8a8'},
              ].map(p => {
                const sel = priority === p.id;
                return (
                  <button key={p.id} onClick={() => setPriority(p.id)} type="button"
                    style={{padding:'5px 12px', border:'1px solid '+(sel?p.color:'var(--line)'), background: sel?p.color:'white', color: sel?'white':p.color, borderRadius:6, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* 备注 */}
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>📝 备注 (可选)</label>
            <textarea value={extraNote} onChange={e => setExtraNote(e.target.value)} rows={2}
              placeholder="如:客户要求 3 天内发货 / 易碎品需加固包装..."
              style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, fontFamily:'inherit', resize:'vertical'}} />
          </div>
          
          {/* 自动附带预览 */}
          <div style={{padding:'10px 12px', background:'#f0f9ff', border:'1px solid #bae6fd', borderRadius:8, fontSize:11, color:'#1e40af', lineHeight:1.7}}>
            ✅ <strong>自动附带</strong>:订单号 / 客户信息 / 收货地址 / 产品清单 / 下单指令 / 付款凭证({(order.attachments || []).length} 个)<br/>
            📨 跟单方会在跨部门协作里收到 Realtime 推送
          </div>
        </div>
        
        <div style={{padding:'12px 20px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'flex-end', gap:6, background:'#fafafa'}}>
          <button onClick={onClose} disabled={sending} className="btn-sec" style={{padding:'7px 14px', fontSize:12}}>取消</button>
          <button onClick={transfer} disabled={sending}
            style={{padding:'7px 18px', background:'#1e40af', color:'white', border:'none', borderRadius:7, cursor:sending?'wait':'pointer', fontSize:13, fontWeight:600, fontFamily:'inherit'}}>
            {sending ? '转单中...' : '📤 确认转单'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

const OfflineOrderCard = ({ order, user, isAdmin, onEdit, onDelete, onReload, toast }) => {
  const [expanded, setExpanded] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  const [showTransfer, setShowTransfer] = useState(false);  // 🆕 fix18
  const status = OFFLINE_ORDER_STATUSES.find(s => s.key === order.status) || OFFLINE_ORDER_STATUSES[0];
  const products = order.products || [];
  const attachments = order.attachments || [];

  const setStatus = async (newStatus) => {
    await CLOUD.upsert('offline_orders', { ...order, status: newStatus, updated_at: new Date().toISOString() });
    toast('✓ 已更新'); onReload();
  };
  const copyDispatch = () => {
    const text = order.follow_dispatch_text || generateDispatchText(order, products);
    navigator.clipboard.writeText(text).then(() => toast('✓ 下单指令已复制'));
  };

  return (
    <div className="paper rounded-2xl fade-in" style={{overflow:'hidden', border:'1.5px solid var(--line)'}}>
      <div style={{padding:'12px 16px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:10, flexWrap:'wrap'}}>
          <div style={{flex:1, minWidth:0}}>
            <div style={{display:'flex', alignItems:'center', gap:6, flexWrap:'wrap', marginBottom:4}}>
              <span style={{padding:'2px 8px', borderRadius:10, fontSize:10, fontWeight:600, background: status.bg, color: status.color}}>{status.label}</span>
              {order.site && <span style={{padding:'2px 8px', background:'#f5f5f7', color:'var(--ink-3)', borderRadius:10, fontSize:10, fontWeight:600}}>{order.site}</span>}
              {order.payment_method && <span style={{padding:'2px 8px', background:'#e0e7ff', color:'#4338ca', borderRadius:10, fontSize:10, fontWeight:600}}>{order.payment_method}</span>}
            </div>
            <div style={{fontSize:15, fontWeight:600, marginBottom:3}}>{order.order_no} · 💰 {order.payment_currency || 'USD'} {order.payment_amount || 0}</div>
            <div style={{fontSize:12, color:'var(--ink-2)'}}>📧 {order.customer_email || '?'}{order.customer_name ? ` · ${order.customer_name}` : ''}</div>
            <div style={{fontSize:11, color:'var(--ink-3)', marginTop:6, display:'flex', gap:8, flexWrap:'wrap'}}>
              <span>📍 {order.ship_to_country || ''} {order.ship_to_city || ''}</span>
              {order.paid_at && <span>· 付款 {order.paid_at}</span>}
              {products.length > 0 && <span>· 🛍 {products.length} 件商品</span>}
              <span>· 录入 {order.created_by_name}</span>
            </div>
          </div>
          <div style={{display:'flex', gap:4, flexWrap:'wrap'}}>
            {order.status === 'paid' && !order.transferred_to_po && <button onClick={() => setShowTransfer(true)} style={{padding:'5px 12px', background:'#1e40af', color:'white', border:'none', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}} title="一键转给跟单部 · 自动创建跨部门工单">📤 转给跟单</button>}
            {order.transferred_to_po && <span style={{padding:'5px 10px', background:'#dcfce7', color:'#15803d', border:'1px solid #86efac', borderRadius:5, fontSize:11, fontWeight:600}} title={`已转给 ${order.transferred_to_name || '跟单部'} @ ${(order.transferred_at || '').slice(0,16).replace('T', ' ')}`}>✓ 已转 {order.transferred_to_name || '跟单'}</span>}
            {order.status === 'paid' && <button onClick={() => setStatus('dispatched')} style={{padding:'5px 12px', background:'#0369a1', color:'white', border:'none', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>🚚 标记已下单</button>}
            <button onClick={copyDispatch} style={{padding:'5px 10px', background:'#fef3c7', color:'#854d0e', border:'1px solid #fbbf24', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}} title="复制发跟单的消息">📋 复制下单指令</button>
            <button onClick={() => setExpanded(v => !v)} className="btn-sec" style={{padding:'5px 10px', fontSize:11}}>{expanded ? '收起 ▲' : '详情 ▼'}</button>
            <button onClick={onEdit} style={{padding:'5px 10px', background:'#e0f2fe', color:'#0369a1', border:'1px solid #7dd3fc', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>✏️</button>
            {(isAdmin || order.created_by === user.id) && <button onClick={onDelete} style={{padding:'5px 10px', background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>🗑</button>}
          </div>
        </div>

        {expanded && (
          <div style={{marginTop:10, padding:10, background:'#f5f5f7', borderRadius:8}}>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:10}}>
              <div>
                <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:3}}>📍 收货地址:</div>
                <div style={{padding:8, background:'white', borderRadius:5, fontSize:12, lineHeight:1.5}}>
                  {order.ship_to_name && <div><strong>{order.ship_to_name}</strong></div>}
                  {order.ship_to_address && <div>{order.ship_to_address}</div>}
                  {(order.ship_to_city || order.ship_to_state) && <div>{[order.ship_to_city, order.ship_to_state, order.ship_to_zip].filter(Boolean).join(', ')}</div>}
                  {order.ship_to_country && <div>{order.ship_to_country}</div>}
                  {order.ship_to_phone && <div>📞 {order.ship_to_phone}</div>}
                </div>
              </div>
              <div>
                <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:3}}>💰 付款信息:</div>
                <div style={{padding:8, background:'white', borderRadius:5, fontSize:12, lineHeight:1.7}}>
                  <div>方式: <strong>{order.payment_method || '?'}</strong></div>
                  <div>应收: <strong>{order.payment_currency} {order.payment_amount}</strong></div>
                  {order.received_amount && <div>实收: <strong style={{color:'#15803d'}}>{order.payment_currency} {order.received_amount}</strong></div>}
                  {order.paid_at && <div>付款日: {order.paid_at}</div>}
                </div>
              </div>
            </div>
            {products.length > 0 && (
              <div style={{marginBottom:10}}>
                <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:3}}>🛍 产品清单:</div>
                <div style={{display:'flex', flexDirection:'column', gap:5}}>
                  {products.map((p, i) => (
                    <div key={i} style={{padding:8, background:'white', borderRadius:5, fontSize:12, display:'flex', gap:8, alignItems:'center'}}>
                      {p.image && <img src={p.image} style={{width:40, height:40, objectFit:'cover', borderRadius:4}} />}
                      <div style={{flex:1}}>
                        {p.sku && <span style={{fontFamily:'monospace', color:'var(--ink-3)', marginRight:6}}>{p.sku}</span>}
                        {p.name}
                      </div>
                      <span>x {p.qty || 1}</span>
                      {p.unit_price && <strong>{order.payment_currency} {(parseFloat(p.unit_price) * (p.qty || 1)).toFixed(2)}</strong>}
                    </div>))}
                </div>
              </div>)}
            {(order.quote_no || order.quote_id) && <div style={{padding:8, background:'#dbeafe', borderRadius:5, fontSize:11, color:'#1e3a8a', marginBottom:10}}>🔗 关联报价单: <strong>{order.quote_no || order.quote_id}</strong></div>}
            {order.notes && <div style={{marginBottom:10}}><div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:3}}>📝 备注:</div><div style={{padding:8, background:'white', borderRadius:5, fontSize:12, whiteSpace:'pre-wrap'}}>{order.notes}</div></div>}
            {attachments.length > 0 && (
              <div style={{marginBottom:10}}>
                <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:5}}>📎 附件 ({attachments.length}):</div>
                <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(100px, 1fr))', gap:5}}>
                  {attachments.map(a => {
                    const info = getFileTypeInfo(a);
                    return info.kind === 'image' ?
                      <img key={a.id} src={a.url} onClick={() => setPreviewFile(a)} style={{width:'100%', height:75, objectFit:'contain', borderRadius:5, cursor:'pointer', border:'1px solid var(--line)', background:'var(--bg-elevated)'}} /> :
                      <FileChip key={a.id} file={a} onClick={() => setPreviewFile(a)} />;
                  })}
                </div>
              </div>)}
            <div style={{padding:'8px 10px', background:'#fffbeb', borderRadius:5, fontSize:11, color:'#854d0e', borderLeft:'3px solid #fbbf24'}}>
              💡 <strong>跟单系统 API 对接待开发</strong> — 现在请点上方"📋 复制下单指令"发到跟单群
            </div>
          </div>)}
      </div>
      {previewFile && <FilePreviewModal file={previewFile} onClose={() => setPreviewFile(null)} />}
      {showTransfer && <TransferToPoModal order={order} user={user} onClose={() => setShowTransfer(false)} onTransferred={() => { setShowTransfer(false); onReload && onReload(); }} toast={toast} />}
    </div>
  );
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix18: ProductImageSlot — 产品行的小图片上传/粘贴/拖拽位
// 支持: 点击上传 / Ctrl+V 粘贴 / 拖入文件 / 自动压缩到 600px / 点击放大预览
// ════════════════════════════════════════════════════════════════════
const ProductImageSlot = ({ value, onChange, productName }) => {
  const [zoom, setZoom] = useState(false);
  const [focused, setFocused] = useState(false);
  const fileRef = useRef(null);
  
  // 压缩图片到 600px 宽,质量 0.8 JPEG → data URL
  const compressImage = (file) => new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) { reject(new Error('不是图片文件')); return; }
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const MAX = 600;
        let { width, height } = img;
        if (width > MAX || height > MAX) {
          if (width > height) { height = Math.round(height * MAX / width); width = MAX; }
          else { width = Math.round(width * MAX / height); height = MAX; }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
  
  const handleFiles = async (files) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    try {
      const dataUrl = await compressImage(file);
      onChange(dataUrl);
    } catch (e) { alert('上传失败: ' + (e.message || '不支持的格式')); }
  };
  
  const onPaste = async (e) => {
    const items = e.clipboardData?.items || [];
    for (const it of items) {
      if (it.kind === 'file' && it.type.startsWith('image/')) {
        e.preventDefault();
        const f = it.getAsFile();
        if (f) await handleFiles([f]);
        return;
      }
    }
  };
  const onDrop = async (e) => { e.preventDefault(); setFocused(false); await handleFiles(Array.from(e.dataTransfer.files || [])); };
  const onDragOver = (e) => { e.preventDefault(); setFocused(true); };
  const onDragLeave = () => setFocused(false);
  
  return (
    <>
      <div tabIndex={0}
        onClick={() => { if (value) setZoom(true); else fileRef.current?.click(); }}
        onPaste={onPaste} onDrop={onDrop} onDragOver={onDragOver} onDragLeave={onDragLeave}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        title={value ? `点击放大 · 当前: ${productName || '产品图'}` : '点击上传 / 聚焦后 Ctrl+V 粘贴 / 拖入图片'}
        style={{
          width:48, height:48, borderRadius:6,
          border: focused ? '2px dashed #0071e3' : (value ? '1px solid var(--line)' : '1px dashed var(--line)'),
          background: value ? `url(${value}) center/cover no-repeat` : (focused ? '#eff6ff' : '#fafafa'),
          cursor:'pointer', outline:'none', position:'relative',
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
        {!value && <span style={{fontSize:16, color:'var(--ink-4)'}}>📷</span>}
        {value && (
          <button onClick={(e) => { e.stopPropagation(); onChange(''); }}
            style={{position:'absolute', top:-6, right:-6, width:16, height:16, padding:0, background:'#dc2626', color:'white', border:'2px solid white', borderRadius:'50%', cursor:'pointer', fontSize:9, lineHeight:1, display:'flex', alignItems:'center', justifyContent:'center'}}
            title="移除图片">×</button>
        )}
        <input ref={fileRef} type="file" accept="image/*" onChange={(e) => handleFiles(Array.from(e.target.files || []))} style={{display:'none'}} />
      </div>
      {zoom && value && ReactDOM.createPortal(
        <div onClick={() => setZoom(false)} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.85)', zIndex:100002, display:'flex', alignItems:'center', justifyContent:'center', padding:20, cursor:'zoom-out'}}>
          <div style={{maxWidth:'90%', maxHeight:'90%', textAlign:'center'}}>
            <img src={value} alt={productName} style={{maxWidth:'100%', maxHeight:'80vh', borderRadius:8}} />
            {productName && <div style={{color:'white', marginTop:10, fontSize:14}}>{productName}</div>}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix22 联动 1: ProductAutocomplete — SKU/产品名联想下拉
// 输入时实时匹配 products 主表的 SKU/名称,点击 → 自动填充产品名/图/供应商/价格
// ════════════════════════════════════════════════════════════════════
const ProductAutocomplete = ({ value, onChange, onSelect, products, placeholder, mode = 'sku', style }) => {
  // mode: 'sku' = 按 SKU 主要匹配 / 'name' = 按产品名主要匹配
  const [open, setOpen] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const containerRef = useRef(null);
  
  // 计算匹配项 (按输入实时过滤)
  const matches = useMemo(() => {
    const q = (value || '').trim().toLowerCase();
    if (!q || !products || products.length === 0) return [];
    return products.filter(p => {
      if (mode === 'sku') {
        return (p.sku || '').toLowerCase().includes(q) || (p.name || '').toLowerCase().includes(q);
      }
      return (p.name || '').toLowerCase().includes(q) || (p.sku || '').toLowerCase().includes(q);
    }).slice(0, 8);
  }, [value, products, mode]);
  
  // 点击外部关闭
  useEffect(() => {
    const onClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);
  
  const handleSelect = (p) => {
    onSelect(p);
    setOpen(false);
  };
  
  const handleKey = (e) => {
    if (!open || matches.length === 0) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setHighlighted(h => Math.min(h + 1, matches.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHighlighted(h => Math.max(h - 1, 0)); }
    else if (e.key === 'Enter') { e.preventDefault(); handleSelect(matches[highlighted]); }
    else if (e.key === 'Escape') setOpen(false);
  };
  
  return (
    <div ref={containerRef} style={{position:'relative', flex:1, minWidth:0, ...style}}>
      <input
        value={value || ''}
        onChange={e => { onChange(e.target.value); setOpen(true); setHighlighted(0); }}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKey}
        placeholder={placeholder || (mode === 'sku' ? 'SKU (输入联想)' : '产品名 (输入联想)')}
        style={{padding:'5px 8px', border:'1px solid var(--line)', borderRadius:5, fontSize:12, fontFamily: mode === 'sku' ? 'monospace' : 'inherit', width:'100%', boxSizing:'border-box'}}
      />
      {open && matches.length > 0 && (
        <div style={{
          position:'absolute', top:'100%', left:0, right:0, marginTop:2,
          background:'white', border:'1px solid var(--line)', borderRadius:6,
          boxShadow:'0 8px 24px rgba(0,0,0,.12)', zIndex:9999,
          maxHeight:280, overflowY:'auto',
        }}>
          {matches.map((p, idx) => (
            <div key={p.id}
              onMouseEnter={() => setHighlighted(idx)}
              onClick={() => handleSelect(p)}
              style={{
                padding:'7px 10px', cursor:'pointer',
                background: idx === highlighted ? '#eff6ff' : 'white',
                borderBottom: idx < matches.length - 1 ? '1px solid #f3f4f6' : 'none',
                display:'flex', gap:8, alignItems:'center',
              }}>
              {p.image ? (
                <img src={p.image} alt="" style={{width:32, height:32, objectFit:'cover', borderRadius:4, flexShrink:0}} />
              ) : (
                <span style={{width:32, height:32, background:'#fafafa', borderRadius:4, display:'flex', alignItems:'center', justifyContent:'center', color:'var(--ink-4)', fontSize:14, flexShrink:0}}>📷</span>
              )}
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontSize:11, fontWeight:600, color:'var(--ink)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                  {p.sku && <span style={{fontFamily:'monospace', color:'#0369a1', marginRight:6}}>{p.sku}</span>}
                  {p.name}
                </div>
                <div style={{fontSize:9, color:'var(--ink-3)', marginTop:1, display:'flex', gap:8}}>
                  {p.supplier_name && <span>🏭 {p.supplier_name}</span>}
                  {p.default_unit_price && <span style={{fontFamily:'monospace'}}>{p.default_currency || 'USD'} {p.default_unit_price}</span>}
                  {p.total_aftersales > 0 && <span style={{color: p.total_aftersales >= 5 ? '#dc2626' : '#d97706'}}>🔧 {p.total_aftersales}</span>}
                </div>
              </div>
            </div>
          ))}
          <div style={{padding:'5px 10px', fontSize:9, color:'var(--ink-4)', borderTop:'1px solid #f3f4f6', background:'#fafafa'}}>
            ↑↓ 选择 · Enter 确认 · Esc 关闭
          </div>
        </div>
      )}
    </div>
  );
};

const OfflineOrderEditor = ({ order, user, employees, onClose, onSaved, toast }) => {
  const allSites = useSiteCodes();  // 🆕 fix22 联动 3: 合并 内置 SITES + 自定义网站
  const isEdit = !!order;
  const [orderNo, setOrderNo] = useState(order?.order_no || '');
  const [site, setSite] = useState(order?.site || '');
  const [generating, setGenerating] = useState(false);
  const [customerName, setCustomerName] = useState(order?.customer_name || '');
  const [customerEmail, setCustomerEmail] = useState(order?.customer_email || '');
  const [customerPhone, setCustomerPhone] = useState(order?.customer_phone || '');
  const [shipToName, setShipToName] = useState(order?.ship_to_name || '');
  const [shipToAddress, setShipToAddress] = useState(order?.ship_to_address || '');
  const [shipToCity, setShipToCity] = useState(order?.ship_to_city || '');
  const [shipToState, setShipToState] = useState(order?.ship_to_state || '');
  const [shipToZip, setShipToZip] = useState(order?.ship_to_zip || '');
  const [shipToCountry, setShipToCountry] = useState(order?.ship_to_country || '');
  const [shipToPhone, setShipToPhone] = useState(order?.ship_to_phone || '');
  // 🆕 fix16: 智能地址粘贴
  const [addressPaste, setAddressPaste] = useState('');
  const [parseFeedback, setParseFeedback] = useState('');
  const handleParseAddress = (text) => {
    if (!text || !text.trim()) { setParseFeedback('请先粘贴地址'); return; }
    try {
      const parsed = parseAddressText(text);
      const filledFields = [];
      if (parsed.name)    { setShipToName(parsed.name);       filledFields.push('姓名'); }
      if (parsed.phone)   { setShipToPhone(parsed.phone);     filledFields.push('电话'); }
      if (parsed.street)  { setShipToAddress(parsed.street);  filledFields.push('街道'); }
      if (parsed.city)    { setShipToCity(parsed.city);       filledFields.push('城市'); }
      if (parsed.state)   { setShipToState(parsed.state);     filledFields.push('州/省'); }
      if (parsed.zip)     { setShipToZip(parsed.zip);         filledFields.push('邮编'); }
      if (parsed.country) { setShipToCountry(parsed.country); filledFields.push('国家'); }
      if (filledFields.length === 0) setParseFeedback('⚠ 无法识别 · 请手动填写');
      else setParseFeedback(`✓ 已识别 ${filledFields.length} 项: ${filledFields.join('/')} · 请检查无误`);
      setTimeout(() => setParseFeedback(''), 6000);
    } catch (e) { setParseFeedback('⚠ 解析出错 · ' + (e.message || e)); }
  };
  const [paymentMethod, setPaymentMethod] = useState(order?.payment_method || '银行转账');
  const [paymentAmount, setPaymentAmount] = useState(order?.payment_amount || '');
  const [paymentCurrency, setPaymentCurrency] = useState(order?.payment_currency || 'USD');
  const [receivedAmount, setReceivedAmount] = useState(order?.received_amount || '');
  const [paidAt, setPaidAt] = useState(order?.paid_at || '');
  const [products, setProducts] = useState(order?.products || []);
  const productsList = useProducts();  // 🆕 fix22 联动 1: 产品主表供 SKU 联想
  const [quoteNo, setQuoteNo] = useState(order?.quote_no || '');
  const [attachments, setAttachments] = useState(order?.attachments || []);
  const [notes, setNotes] = useState(order?.notes || '');
  const [status, setStatus] = useState(order?.status || 'draft');
  const [saving, setSaving] = useState(false);
  const [previewNextNo, setPreviewNextNo] = useState(null);  // 🆕 预览下一个编号(扫描历史得出)
  const [autoFilledNo, setAutoFilledNo] = useState('');  // 🆕 已自动填充的编号(用于检测用户是否手改)
  const [showQuoteSearch, setShowQuoteSearch] = useState(false);

  // 🆕 切换网站时,扫描历史 + 显示下一个编号建议
  const handleSiteChange = async (newSite) => {
    setSite(newSite);
    if (!newSite || isEdit) return;
    setGenerating(true);
    try {
      // 预览模式(不更新 sequence)
      const result = await generateOrderNo(newSite, { previewOnly: true });
      setPreviewNextNo(result);
      // 只有 orderNo 为空 或 用户没手动改过时,才自动填充
      const userHasNotEdited = !orderNo.trim() || orderNo === autoFilledNo;
      if (userHasNotEdited) {
        setOrderNo(result.orderNo);
        setAutoFilledNo(result.orderNo);
        toast(`✓ 已扫描历史订单 · 下一个编号: ${result.orderNo} (历史最大 ${result.maxNo})`);
      }
    } catch(e) { 
      toast('⚠ 扫描历史失败,请手动输入: ' + e.message); 
    }
    setGenerating(false);
  };
  
  const handleManualGenerate = async () => {
    if (!site) { alert('请先选择网站'); return; }
    setGenerating(true);
    try {
      const result = await generateOrderNo(site, { previewOnly: true });
      setPreviewNextNo(result);
      setOrderNo(result.orderNo);
      setAutoFilledNo(result.orderNo);
      toast(`✓ 已生成 ${result.orderNo}(历史最大 ${result.maxNo})`);
    } catch(e) { toast('⚠ ' + e.message); }
    setGenerating(false);
  };

  const handleLinkQuote = (quote) => {
    setQuoteNo(quote.pi_no || quote.id || '');
    if (quote.rawData) {
      const d = quote.rawData;
      if (!customerEmail && d.buyer_email) setCustomerEmail(d.buyer_email);
      if (!customerName && d.buyer_info) setCustomerName((d.buyer_info || '').split('\n')[0]);
      if (!shipToAddress && d.shipping_info) setShipToAddress(d.shipping_info);
      if (!shipToPhone && d.shipping_tel) setShipToPhone(d.shipping_tel);
    }
    if (quote.amount && !paymentAmount) setPaymentAmount(quote.amount);
    setShowQuoteSearch(false);
    toast('✓ 已关联报价单 ' + (quote.pi_no || quote.id));
  };

  const addProduct = () => setProducts(prev => [...prev, { sku:'', name:'', qty:1, unit_price:'', image:'' }]);
  const updateProduct = (i, patch) => setProducts(prev => prev.map((p, idx) => idx === i ? { ...p, ...patch } : p));
  const removeProduct = (i) => setProducts(prev => prev.filter((_, idx) => idx !== i));

  const handleSave = async () => {
    if (!orderNo.trim()) { alert('请填写订单编号或选择网站自动生成'); return; }
    if (!site) { alert('请选择网站'); return; }
    
    // 🆕 重复检测(新建时)
    if (!isEdit) {
      try {
        const { data: existing } = await CLOUD.client.from('offline_orders').select('id, order_no').eq('order_no', orderNo.trim()).limit(1);
        if (existing && existing.length > 0) {
          if (!confirm(`⚠ 警告:订单编号 "${orderNo}" 已存在!\n\n继续保存将创建重复编号(可能导致管理混乱)。\n\n建议:点击"🔄 重新扫描+1"获取唯一编号。\n\n仍要继续保存吗?`)) {
            return;
          }
        }
      } catch {}
    }
    
    setSaving(true);
    const userName = user.name + (user.alias ? ' ' + user.alias : '');
    const now = new Date().toISOString();
    
    // 🆕 新建保存成功后:把 sequence 更新到比当前编号大的位置
    if (!isEdit) {
      try {
        // 从编号里提取数字
        const seqConfig = await CLOUD.client.from('site_order_sequences').select('*').eq('site', site).single();
        if (seqConfig.data) {
          const prefix = seqConfig.data.prefix || site;
          const separator = seqConfig.data.separator || '-';
          const m = orderNo.trim().match(new RegExp('^' + prefix + (separator || '') + '?(\\d+)$'));
          if (m) {
            const n = parseInt(m[1], 10);
            if (n > (seqConfig.data.current_no || 0)) {
              await CLOUD.client.from('site_order_sequences').update({
                current_no: n, updated_at: now,
              }).eq('site', site);
            }
          }
        }
      } catch(e) { console.warn('更新 sequence 失败(不影响订单保存):', e); }
    }
    
    const dispatchText = generateDispatchText({
      order_no: orderNo, ship_to_name: shipToName, ship_to_address: shipToAddress,
      ship_to_city: shipToCity, ship_to_state: shipToState, ship_to_country: shipToCountry,
      ship_to_zip: shipToZip, ship_to_phone: shipToPhone,
    }, products);
    const payload = {
      ...(order || {}),
      order_no: orderNo.trim(), site,
      customer_name: customerName.trim() || null,
      customer_email: customerEmail.trim() || null,
      customer_phone: customerPhone.trim() || null,
      ship_to_name: shipToName.trim() || null,
      ship_to_address: shipToAddress.trim() || null,
      ship_to_city: shipToCity.trim() || null,
      ship_to_state: shipToState.trim() || null,
      ship_to_zip: shipToZip.trim() || null,
      ship_to_country: shipToCountry.trim() || null,
      ship_to_phone: shipToPhone.trim() || null,
      payment_method: paymentMethod,
      payment_amount: parseFloat(paymentAmount) || null,
      payment_currency: paymentCurrency,
      received_amount: parseFloat(receivedAmount) || null,
      paid_at: paidAt || null,
      products, quote_no: quoteNo.trim() || null,
      attachments, notes: notes.trim() || null,
      status, follow_dispatch_text: dispatchText, updated_at: now,
      // 🆕 fix7: created_by 必须非空(旧记录可能为 null)
      created_by: order?.created_by || user.id,
      created_by_name: order?.created_by_name || userName,
    };
    const res = await CLOUD.upsert('offline_orders', payload);
    if (res) { toast(isEdit ? '✓ 已更新' : '✓ 已创建线下单'); onSaved(); }
    else { alertSaveError('保存线下单'); }
    setSaving(false);
  };

  return (
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:9999, display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'4vh 20px', overflowY:'auto', overflowX:'hidden'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, maxWidth:880, width:'100%', display:'flex', flexDirection:'column', maxHeight:'92vh', overflowY:'auto', overflowX:'hidden'}}>
        <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', gap:8}}>
          <div className="font-display" style={{fontSize:16, fontWeight:600}}>💳 {isEdit ? '编辑' : '新建'}线下单</div>
          <div style={{display:'flex', gap:6, alignItems:'center'}}>
            {user && user.role !== 'super_admin' && (
              <button onClick={() => window.__requestSupervisorAssistance?.({
                entityType: '线下单', entityId: order?.id, entityTitle: order?.order_no || orderNo || '(新单)'
              })}
                style={{padding:'5px 11px', background:'#fef3c7', color:'#92400e', border:'1px solid #fcd34d', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}
                title="把这条线下单交给主管/老板处理">
                {user.role === 'admin' ? '👑 申请老板' : '🚨 申请主管'}
              </button>
            )}
            <button className="btn-sec" onClick={onClose} style={{padding:'4px 12px'}}>×</button>
          </div>
        </div>
        <div style={{padding:18, overflow:'auto', flex:1}}>
          <div style={{padding:12, background:'#f0f9ff', borderRadius:8, marginBottom:14}}>
            <div style={{fontSize:12, fontWeight:600, color:'#075985', marginBottom:8}}>📋 基本信息</div>
            <div style={{display:'grid', gridTemplateColumns:'120px 1fr 0.8fr', gap:10}}>
              <div>
                <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>网站 *</label>
                <select value={site} onChange={e => handleSiteChange(e.target.value)} disabled={isEdit}
                  style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
                  <option value="">选择</option>
                  {allSites.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>
                  订单编号 * 
                  {!isEdit && (
                    <span style={{marginLeft:6, color:'#15803d', fontWeight:400}}>
                      (可自动生成 / 也可手动输入)
                    </span>
                  )}
                </label>
                <div style={{display:'flex', gap:4}}>
                  <input value={orderNo} onChange={e => setOrderNo(e.target.value)} 
                    placeholder={site ? `例如: ${site}0001` : '选网站后将扫描历史并自动建议'}
                    style={{flex:1, padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'monospace', fontWeight:600}} />
                  {!isEdit && <button onClick={handleManualGenerate} disabled={!site || generating}
                    type="button"
                    style={{padding:'7px 10px', background:'#fef3c7', color:'#854d0e', border:'1px solid #fbbf24', borderRadius:6, cursor:'pointer', fontSize:11, fontFamily:'inherit', whiteSpace:'nowrap'}}>
                    {generating ? '扫描中...' : '🔄 重新扫描+1'}
                  </button>}
                </div>
                {/* 🆕 显示扫描结果 */}
                {!isEdit && previewNextNo && (
                  <div style={{marginTop:5, padding:'5px 9px', background:'#f0fdf4', border:'1px solid #86efac', borderRadius:5, fontSize:10, color:'#14532d', lineHeight:1.4}}>
                    📊 已扫描全部历史订单(线下单/客服/售后/补件/退款/拒付):
                    历史最大 <strong style={{fontFamily:'monospace'}}>{previewNextNo.maxNo > 0 ? previewNextNo.maxNo : '无'}</strong>
                    → 建议下一个 <strong style={{fontFamily:'monospace', color:'#15803d'}}>{previewNextNo.orderNo}</strong>
                  </div>
                )}
                {!isEdit && orderNo && orderNo !== autoFilledNo && (
                  <div style={{marginTop:4, fontSize:10, color:'#854d0e'}}>
                    ✏ 你已手动修改订单编号(保存时将使用此编号)
                  </div>
                )}
              </div>
              <div>
                <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>状态</label>
                <select value={status} onChange={e => setStatus(e.target.value)}
                  style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
                  {OFFLINE_ORDER_STATUSES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
                </select>
              </div>
            </div>
            <div style={{marginTop:10, display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
              <span style={{fontSize:11, color:'var(--ink-2)', fontWeight:600}}>🔗 关联报价单:</span>
              {quoteNo ? <span style={{padding:'4px 10px', background:'#dcfce7', color:'#15803d', borderRadius:14, fontSize:11, fontWeight:600, display:'flex', gap:4, alignItems:'center'}}>
                ✓ {quoteNo}
                <button onClick={() => setQuoteNo('')} style={{background:'transparent', border:'none', color:'#15803d', cursor:'pointer', fontSize:13}}>×</button>
              </span> : null}
              <button onClick={() => setShowQuoteSearch(true)}
                style={{padding:'4px 10px', background:'#e0f2fe', color:'#0369a1', border:'1px solid #7dd3fc', borderRadius:6, cursor:'pointer', fontSize:11, fontFamily:'inherit', fontWeight:600}}>
                🔍 搜索报价单
              </button>
              <span style={{fontSize:10, color:'var(--ink-3)'}}>(输入编号/客户名 · 自动填客户信息)</span>
            </div>
          </div>

          <div style={{padding:12, background:'#fafaf7', borderRadius:8, marginBottom:14}}>
            <div style={{fontSize:12, fontWeight:600, color:'var(--ink)', marginBottom:8}}>👤 客户信息</div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 0.8fr', gap:10}}>
              <input value={customerName} onChange={e => setCustomerName(e.target.value)} placeholder="客户姓名 / 公司"
                style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
              <input type="email" value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} placeholder="邮箱"
                style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
              <input value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} placeholder="电话"
                style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            </div>
          </div>

          <div style={{padding:12, background:'#fefce8', borderRadius:8, marginBottom:14}}>
            <div style={{fontSize:12, fontWeight:600, color:'#854d0e', marginBottom:8, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:6}}>
              <span>📍 收货信息(自动生成跟单消息)</span>
              <span style={{fontSize:10, fontWeight:500, color:'#a16207'}}>💡 粘贴整段地址 → 自动识别 · 支持美国/加拿大/欧洲/澳洲等</span>
            </div>
            {/* 🆕 fix16: 智能地址粘贴板 */}
            <div style={{marginBottom:10}}>
              <textarea
                value={addressPaste}
                onChange={e => {
                  const v = e.target.value;
                  setAddressPaste(v);
                  // 自动解析:如果用户一次性输入/粘贴超过 20 字符 + 含换行或逗号,自动触发
                  if (v.length > 20 && (v.includes('\n') || v.includes(',')) &&
                      v.length - addressPaste.length > 15) {
                    setTimeout(() => handleParseAddress(v), 100);
                  }
                }}
                placeholder={`🪄 粘贴整段地址,自动识别下方字段。\n例如:\nJohn Smith\n123 Main Street, Apt 4B\nLos Angeles, CA 90001\nUnited States\n+1 555-1234`}
                rows={3}
                style={{width:'100%', padding:'8px 10px', border:'1px dashed #d97706', borderRadius:6, fontSize:12, fontFamily:'inherit', resize:'vertical', background:'#fffbeb', boxSizing:'border-box', lineHeight:1.5}}
              />
              <div style={{display:'flex', gap:6, marginTop:6, flexWrap:'wrap', alignItems:'center'}}>
                <button type="button" onClick={() => handleParseAddress(addressPaste)} disabled={!addressPaste.trim()}
                  style={{padding:'5px 14px', background: addressPaste.trim() ? '#d97706' : '#e5e5e5', color:'white', border:'none', borderRadius:6, cursor: addressPaste.trim() ? 'pointer' : 'not-allowed', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
                  🪄 解析填入下方
                </button>
                <button type="button" onClick={() => { setAddressPaste(''); setParseFeedback(''); }} disabled={!addressPaste.trim()}
                  style={{padding:'5px 12px', background:'white', color:'#854d0e', border:'1px solid #fde68a', borderRadius:6, cursor: addressPaste.trim() ? 'pointer' : 'not-allowed', fontSize:11, fontFamily:'inherit'}}>
                  ✕ 清空
                </button>
                {parseFeedback && (
                  <span style={{fontSize:11, color: parseFeedback.startsWith('✓') ? '#15803d' : '#b91c1c', fontWeight:500}}>
                    {parseFeedback}
                  </span>
                )}
              </div>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:8}}>
              <input value={shipToName} onChange={e => setShipToName(e.target.value)} placeholder="收件人姓名"
                style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
              <input value={shipToPhone} onChange={e => setShipToPhone(e.target.value)} placeholder="收件人电话"
                style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            </div>
            <input value={shipToAddress} onChange={e => setShipToAddress(e.target.value)} placeholder="街道地址(Juras iela 32)"
              style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, marginBottom:8}} />
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 0.7fr 1fr', gap:10}}>
              <input value={shipToCity} onChange={e => setShipToCity(e.target.value)} placeholder="城市(Jurmala)"
                style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
              <input value={shipToState} onChange={e => setShipToState(e.target.value)} placeholder="州/省"
                style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
              <input value={shipToZip} onChange={e => setShipToZip(e.target.value)} placeholder="邮编(LV-2015)"
                style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
              <input value={shipToCountry} onChange={e => setShipToCountry(e.target.value)} placeholder="国家(Latvia)"
                style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            </div>
          </div>

          <div style={{padding:12, background:'#f0fdf4', borderRadius:8, marginBottom:14}}>
            <div style={{fontSize:12, fontWeight:600, color:'#15803d', marginBottom:8}}>💰 付款信息</div>
            <div style={{display:'grid', gridTemplateColumns:'1.2fr 1fr 0.7fr 1fr 1fr', gap:10}}>
              <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}
                style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
                {PAYMENT_METHODS.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
              <input type="number" step="0.01" value={paymentAmount} onChange={e => setPaymentAmount(e.target.value)} placeholder="应收金额"
                style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'monospace'}} />
              <select value={paymentCurrency} onChange={e => setPaymentCurrency(e.target.value)}
                style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
                {['USD','EUR','GBP','CAD','AUD','HKD','CNY'].map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <input type="number" step="0.01" value={receivedAmount} onChange={e => setReceivedAmount(e.target.value)} placeholder="实收(扣手续费)"
                style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'monospace'}} />
              <input type="date" value={paidAt} onChange={e => setPaidAt(e.target.value)}
                style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            </div>
          </div>

          <div style={{padding:12, background:'#fafafa', borderRadius:8, marginBottom:14}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
              <div style={{fontSize:12, fontWeight:600}}>🛍 产品清单 ({products.length}) <span style={{color:'var(--ink-3)', fontWeight:400, fontSize:11}}>· 点图片格上传/粘贴/拖拽产品图</span></div>
              <button onClick={addProduct} className="btn-sec" style={{padding:'4px 12px', fontSize:11}}>+ 加产品</button>
            </div>
            {products.map((p, i) => (
              <div key={i} style={{display:'grid', gridTemplateColumns:'52px 0.9fr 2fr 0.5fr 0.8fr 30px', gap:6, marginBottom:6, alignItems:'center'}}>
                <ProductImageSlot value={p.image} onChange={(img) => updateProduct(i, { image: img })} productName={p.name} />
                <ProductAutocomplete
                  value={p.sku || ''}
                  onChange={v => updateProduct(i, { sku: v })}
                  onSelect={prod => updateProduct(i, {
                    sku: prod.sku || '',
                    name: prod.name || p.name,
                    image: prod.image || p.image,
                    unit_price: !p.unit_price && prod.default_unit_price ? String(prod.default_unit_price) : p.unit_price,
                    product_id: prod.id,
                  })}
                  products={productsList}
                  mode="sku"
                  placeholder="SKU (联想)"
                />
                <ProductAutocomplete
                  value={p.name || ''}
                  onChange={v => updateProduct(i, { name: v })}
                  onSelect={prod => updateProduct(i, {
                    sku: !p.sku && prod.sku ? prod.sku : p.sku,
                    name: prod.name || p.name,
                    image: prod.image || p.image,
                    unit_price: !p.unit_price && prod.default_unit_price ? String(prod.default_unit_price) : p.unit_price,
                    product_id: prod.id,
                  })}
                  products={productsList}
                  mode="name"
                  placeholder="产品名 (联想)"
                />
                <input type="number" value={p.qty || 1} onChange={e => updateProduct(i, { qty: parseInt(e.target.value) || 1 })} placeholder="数量"
                  style={{padding:'5px 8px', border:'1px solid var(--line)', borderRadius:5, fontSize:12, textAlign:'center'}} />
                <input type="number" step="0.01" value={p.unit_price || ''} onChange={e => updateProduct(i, { unit_price: e.target.value })} placeholder="单价"
                  style={{padding:'5px 8px', border:'1px solid var(--line)', borderRadius:5, fontSize:12, fontFamily:'monospace'}} />
                <button onClick={() => removeProduct(i)} style={{padding:0, background:'transparent', border:'none', cursor:'pointer', color:'#dc2626', fontSize:16}}>×</button>
              </div>))}
            {products.length === 0 && <div style={{padding:14, textAlign:'center', color:'var(--ink-3)', fontSize:11}}>暂无产品 · 点上方"加产品"开始</div>}
          </div>

          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>备注</label>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="特殊要求、加急等..."
              style={{width:'100%', minHeight:50, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical'}} />
          </div>
          <div style={{marginBottom:8}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>📎 付款凭证 / 订单 PDF / 发票 / 产品图</label>
            <MultiFileUploader files={attachments} setFiles={setAttachments} bucket="business-files" maxSize={50} />
          </div>
        </div>
        <div style={{padding:'12px 18px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'flex-end', gap:6}}>
          <button onClick={onClose} className="btn-sec" style={{padding:'7px 14px'}}>取消</button>
          <button onClick={handleSave} disabled={saving}
            style={{padding:'7px 18px', background:'var(--accent)', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13, opacity: saving ? 0.5 : 1}}>
            {saving ? '保存中...' : (isEdit ? '保存修改' : '💳 创建线下单')}
          </button>
        </div>
      </div>
      {showQuoteSearch && <QuoteSearchModal onClose={() => setShowQuoteSearch(false)} onSelect={handleLinkQuote} toast={toast} />}
    </div>
  );
};

const QuoteSearchModal = ({ onClose, onSelect, toast }) => {
  const [query, setQuery] = useState('');
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showOnlyRecent, setShowOnlyRecent] = useState(false);  // 🆕 只显示最近 30 天
  
  useEffect(() => {
    (async () => {
      try {
        const data = await CLOUD.list('workspace_quotes', { order:{col:'updated_at', asc:false}, limit:1000 });
        setList((data || []).filter(q => !q.trashed));
      } catch(e) { toast('加载报价单失败'); }
      setLoading(false);
    })();
  }, []);
  
  // 🆕 智能模糊匹配 - 分词搜索 + 多字段权重 + 评分排序
  const filtered = useMemo(() => {
    let l = list;
    
    // 时间过滤
    if (showOnlyRecent) {
      const cutoff = addDays(todayISO(), -30);
      l = l.filter(q => {
        const t = (q.updated_at || q.created_at || '').slice(0, 10);
        return !t || t >= cutoff;
      });
    }
    
    if (!query.trim()) {
      return l.slice(0, 100);
    }
    
    // 提取搜索关键词(支持多关键词,空格/逗号分隔)
    const keywords = query.trim().toLowerCase()
      .split(/[\s,，;；]+/)
      .filter(k => k.length > 0);
    
    if (keywords.length === 0) return l.slice(0, 100);
    
    // 评分函数
    const scoreQuote = (q) => {
      const d = q.data || {};
      // 所有可搜索的字段
      const fields = {
        pi_no:        (q.pi_no || '').toLowerCase(),
        order_no:     (q.order_no || '').toLowerCase(),
        buyer_name:   (q.buyer_name || d.buyer_info || '').toLowerCase(),
        buyer_email:  (d.buyer_email || '').toLowerCase(),
        buyer_phone:  (d.buyer_phone || '').toLowerCase(),
        ship_country: (d.shipping_country || '').toLowerCase(),
        ship_address: (d.shipping_info || '').toLowerCase(),
        username:     (q.username || '').toLowerCase(),
        status:       (q.status || '').toLowerCase(),
        notes:        (q.notes || d.notes || '').toLowerCase(),
        amount:       String(q.amount || ''),
        // 产品列表
        products:     ((d.products || d.items || []).map(p => 
          [p.sku, p.product_name, p.name, p.description].filter(Boolean).join(' ')
        ).join(' ')).toLowerCase(),
      };
      
      let totalScore = 0;
      let matchedAllKeywords = true;
      
      for (const kw of keywords) {
        let kwScore = 0;
        // PI 编号精确匹配 - 最高权重
        if (fields.pi_no === kw) kwScore += 1000;
        else if (fields.pi_no.includes(kw)) kwScore += 100;
        // 邮箱精确 - 高权重
        if (fields.buyer_email === kw) kwScore += 500;
        else if (fields.buyer_email.includes(kw)) kwScore += 80;
        // 订单号匹配
        if (fields.order_no.includes(kw)) kwScore += 70;
        // 客户名/手机
        if (fields.buyer_name.includes(kw)) kwScore += 60;
        if (fields.buyer_phone.includes(kw)) kwScore += 60;
        // 地址 / 产品
        if (fields.ship_country.includes(kw)) kwScore += 30;
        if (fields.ship_address.includes(kw)) kwScore += 25;
        if (fields.products.includes(kw)) kwScore += 25;
        // 录入人 / 状态
        if (fields.username.includes(kw)) kwScore += 15;
        if (fields.status.includes(kw)) kwScore += 10;
        // 金额
        if (fields.amount.includes(kw)) kwScore += 20;
        // 备注
        if (fields.notes.includes(kw)) kwScore += 10;
        
        if (kwScore === 0) matchedAllKeywords = false;
        totalScore += kwScore;
      }
      
      // 必须所有关键词都至少匹配一个字段
      return matchedAllKeywords ? totalScore : 0;
    };
    
    return l
      .map(q => ({ q, score: scoreQuote(q) }))
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 100)
      .map(x => x.q);
  }, [query, list, showOnlyRecent]);
  
  // 🆕 高亮匹配关键词
  const highlight = (text, keywords) => {
    if (!text || !keywords || keywords.length === 0) return text;
    const safeText = String(text);
    let result = safeText;
    for (const kw of keywords) {
      if (!kw) continue;
      const regex = new RegExp(`(${kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      result = result.replace(regex, '<mark style="background:#fef08a;color:#854d0e;padding:0 2px;border-radius:2px">$1</mark>');
    }
    return result;
  };
  
  const keywords = query.trim().toLowerCase().split(/[\s,，;；]+/).filter(k => k);
  
  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.7)', zIndex:99999, display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'4vh 16px', overflowY:'auto', overflowX:'hidden'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, maxWidth:720, width:'100%', display:'flex', flexDirection:'column', maxHeight:'90vh', overflow:'hidden', boxShadow:'0 25px 70px rgba(0,0,0,.3)'}}>
        <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)', flexShrink:0}}>
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10}}>
            <div className="font-display" style={{fontSize:16, fontWeight:600}}>🔍 智能搜索报价单</div>
            <button className="btn-sec" onClick={onClose} style={{padding:'4px 12px'}}>×</button>
          </div>
          <input value={query} onChange={e => setQuery(e.target.value)} autoFocus 
            placeholder="🧠 智能搜索:支持 PI 号 / 客户邮箱 / 客户姓名 / 电话 / 国家 / 地址 / 产品 SKU / 录入人 / 金额..."
            style={{width:'100%', padding:'10px 14px', border:'1px solid var(--line)', borderRadius:8, fontSize:13}} />
          <div style={{marginTop:8, display:'flex', alignItems:'center', gap:10, flexWrap:'wrap', fontSize:11, color:'var(--ink-3)'}}>
            <span>💡 提示:</span>
            <span>多个关键词用空格分隔(全部匹配才显示)</span>
            <span>·</span>
            <span>例:<code style={{padding:'1px 5px', background:'#f1f5f9', borderRadius:3}}>VKA Aletta US</code></span>
            <div style={{flex:1}}></div>
            <button onClick={() => setShowOnlyRecent(v => !v)}
              style={{
                padding:'3px 8px', borderRadius:10, fontSize:10, cursor:'pointer', fontFamily:'inherit',
                border:'1px solid ' + (showOnlyRecent ? 'var(--accent)' : 'var(--line)'),
                background: showOnlyRecent ? 'var(--accent)' : 'white',
                color: showOnlyRecent ? 'white' : 'var(--ink-2)',
                fontWeight: showOnlyRecent ? 600 : 400,
              }}>
              {showOnlyRecent ? '✓' : '☐'} 仅最近 30 天
            </button>
          </div>
          {query.trim() && (
            <div style={{marginTop:6, fontSize:11, color:'#0369a1'}}>
              🔍 匹配 {filtered.length} 条 · 按相关度排序
            </div>
          )}
        </div>
        <div style={{padding:10, overflowY:'auto', overflowX:'hidden', flex:1, minHeight:0}}>
          {loading ? <div style={{textAlign:'center', padding:30, color:'var(--ink-3)'}}>⏳ 加载中...</div>
           : filtered.length === 0 ? (
             <div style={{textAlign:'center', padding:40, color:'var(--ink-3)', fontSize:13}}>
               {query.trim() ? (
                 <>
                   <div style={{fontSize:30, marginBottom:8}}>🔍</div>
                   没有匹配的报价单<br/>
                   <span style={{fontSize:11, marginTop:6, display:'block'}}>试试只输入一部分关键词,或者用空格分隔多个</span>
                 </>
               ) : '暂无报价单'}
             </div>
           ) : filtered.map(q => {
            const d = q.data || {};
            const fields = {
              pi_no:    q.pi_no || '(无 PI)',
              buyer:    q.buyer_name || (d.buyer_info || '').split('\n')[0] || '(未填客户)',
              email:    d.buyer_email,
              phone:    d.buyer_phone,
              country:  d.shipping_country,
              amount:   q.amount,
            };
            return (
              <div key={q.id} onClick={() => { onSelect(q); onClose(); }}
                style={{padding:'10px 12px', marginBottom:6, border:'1px solid var(--line)', borderRadius:8, cursor:'pointer', background:'white', transition:'all .12s'}}
                onMouseEnter={e => { e.currentTarget.style.background = '#f0f9ff'; e.currentTarget.style.borderColor = '#7dd3fc'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = 'var(--line)'; }}>
                <div style={{display:'flex', justifyContent:'space-between', gap:6, alignItems:'flex-start'}}>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{fontSize:13, fontWeight:700, color:'var(--ink)'}}
                      dangerouslySetInnerHTML={{__html: highlight(fields.pi_no, keywords)}} />
                    <div style={{fontSize:11, color:'var(--ink-2)', marginTop:3}}>
                      <span style={{color:'var(--ink-3)'}}>👤</span>{' '}
                      <span dangerouslySetInnerHTML={{__html: highlight(fields.buyer, keywords)}} />
                      {fields.email && (
                        <>
                          <span style={{color:'var(--ink-4)'}}> · </span>
                          <span style={{color:'#0369a1'}} dangerouslySetInnerHTML={{__html: '✉ ' + highlight(fields.email, keywords)}} />
                        </>
                      )}
                      {fields.phone && (
                        <>
                          <span style={{color:'var(--ink-4)'}}> · </span>
                          <span dangerouslySetInnerHTML={{__html: '📞 ' + highlight(fields.phone, keywords)}} />
                        </>
                      )}
                    </div>
                    <div style={{fontSize:10, color:'var(--ink-3)', marginTop:3, display:'flex', gap:8, flexWrap:'wrap'}}>
                      {fields.country && <span dangerouslySetInnerHTML={{__html: '🌍 ' + highlight(fields.country, keywords)}} />}
                      {q.status && <span>📋 {q.status}</span>}
                      {q.username && <span dangerouslySetInnerHTML={{__html: '✏ ' + highlight(q.username, keywords)}} />}
                      {q.updated_at && <span>📅 {q.updated_at.slice(0, 10)}</span>}
                    </div>
                    {/* 产品预览 */}
                    {(d.products || d.items || []).length > 0 && (
                      <div style={{marginTop:4, fontSize:10, color:'var(--ink-3)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                        📦 <span dangerouslySetInnerHTML={{__html: highlight(
                          (d.products || d.items || []).slice(0,3).map(p => p.sku || p.product_name || p.name).filter(Boolean).join(', ') + 
                          ((d.products || d.items || []).length > 3 ? '...' : ''),
                          keywords
                        )}} />
                      </div>
                    )}
                  </div>
                  <div style={{textAlign:'right', flexShrink:0}}>
                    <div style={{color:'#15803d', fontSize:14, fontWeight:700}}>${(fields.amount || 0).toFixed(2)}</div>
                  </div>
                </div>
              </div>);
          })}
        </div>
        <div style={{padding:'10px 18px', borderTop:'1px solid var(--line)', flexShrink:0, background:'#fafafa', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div style={{fontSize:10, color:'var(--ink-3)'}}>
            📚 共加载 {list.length} 条报价单 · 显示前 {filtered.length} 条
          </div>
          <button onClick={onClose} className="btn-sec" style={{padding:'6px 14px'}}>取消</button>
        </div>
      </div>
    </div>,
    document.body
  );
};

// ============================================================
// 🎨 定制 & 实拍合并模块
// ============================================================
const CustomPhotoModule = ({ user, employees, toast }) => {
  const [subTab, setSubTab] = useState('custom');
  return (
    <div className="fade-in">
      <div className="paper rounded-2xl p-3" style={{marginBottom:12, display:'flex', gap:6, flexWrap:'wrap'}}>
        <button onClick={() => setSubTab('custom')}
          style={{padding:'6px 16px', borderRadius:8, fontSize:13, cursor:'pointer', fontFamily:'inherit', fontWeight:600,
            border:'1px solid ' + (subTab === 'custom' ? 'var(--accent)' : 'var(--line)'),
            background: subTab === 'custom' ? 'var(--accent)' : 'white',
            color: subTab === 'custom' ? 'white' : 'var(--ink-2)'}}>🎨 定制咨询</button>
        <button onClick={() => setSubTab('photo')}
          style={{padding:'6px 16px', borderRadius:8, fontSize:13, cursor:'pointer', fontFamily:'inherit', fontWeight:600,
            border:'1px solid ' + (subTab === 'photo' ? 'var(--accent)' : 'var(--line)'),
            background: subTab === 'photo' ? 'var(--accent)' : 'white',
            color: subTab === 'photo' ? 'white' : 'var(--ink-2)'}}>📸 实拍核实</button>
      </div>
      {subTab === 'custom' && <CustomInquiriesSubModule user={user} employees={employees} toast={toast} />}
      {subTab === 'photo' && <PhotoVerificationsSubModule user={user} employees={employees} toast={toast} />}
    </div>
  );
};

const CustomInquiriesSubModule = ({ user, employees, toast }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [filterStage, setFilterStage] = useState('active');
  const [search, setSearch] = useState('');
  // 🆕 时间筛选
  const [timeFilter, setTimeFilter] = useState('all');
  const [timeCustom, setTimeCustom] = useState({ start: '', end: '' });
  // 🆕 fix15: 日期范围筛选
  const [dateFilter, setDateFilter] = useState({ kind:'all' });
  const load = async () => {
    setLoading(true);
    try {
      const data = await CLOUD.list('custom_inquiries', { order:{col:'created_at', asc:false}, limit:300 });
      setList((data || []).filter(c => !c.deleted));
    } catch(e) { toast('❌ ' + e.message); }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  const handleDelete = async (c) => {
    const summary = `${c.customer_name || c.customer_email || '?'} · ${(c.requirement || '').slice(0, 50)}`;
    await requestDelete({
      user, tableName:'custom_inquiries', moduleLabel:'🎨 定制咨询',
      record: c, recordSummary: summary, toast, onSuccess: load,
    });
  };
  const filtered = useMemo(() => {
    let l = list;
    if (filterStage === 'active') l = l.filter(c => c.stage !== 'completed' && c.stage !== 'cancelled');
    else if (filterStage === 'mine') l = l.filter(c => c.created_by === user.id);
    else if (filterStage !== 'all') l = l.filter(c => c.stage === filterStage);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      l = l.filter(c => (c.customer_name || '').toLowerCase().includes(q) ||
        (c.customer_email || '').toLowerCase().includes(q) ||
        (c.requirement || '').toLowerCase().includes(q));
    }
    // 🆕 时间筛选
    l = filterByTimeRange(l, timeFilter, timeCustom.start, timeCustom.end, 'created_at');
    // 🆕 fix15: 日期范围筛选
    l = filterByDateRange(l, dateFilter, 'created_at');
    return l;
  }, [list, filterStage, search, user.id, timeFilter, timeCustom, dateFilter]);

  return (
    <div className="space-y-3">
      <div className="paper rounded-2xl p-4">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:10}}>
          <div>
            <div className="font-display" style={{fontSize:17, fontWeight:600}}>🎨 定制咨询</div>
            <div style={{fontSize:11, color:'var(--ink-3)', marginTop:3}}>询单 → 出图 → 报价 → 付款 → 生产 → 实拍 → 完成</div>
          </div>
          <button onClick={() => setEditing('new')} className="btn-pri" style={{padding:'6px 14px', fontSize:12}}>+ 新增定制咨询</button>
        </div>
        <div style={{marginTop:10, display:'flex', gap:5, flexWrap:'wrap'}}>
          {[{key:'active',label:'🔥 进行中'},{key:'mine',label:'👤 我的'},
            ...CUSTOM_STAGES.map(s => ({key:s.key, label:s.label})),{key:'all',label:'全部'}].map(t => (
            <button key={t.key} onClick={() => setFilterStage(t.key)}
              style={{padding:'3px 10px', borderRadius:14, fontSize:11, cursor:'pointer', fontFamily:'inherit',
                border:'1px solid ' + (filterStage === t.key ? 'var(--accent)' : 'var(--line)'),
                background: filterStage === t.key ? 'var(--accent)' : 'white',
                color: filterStage === t.key ? 'white' : 'var(--ink-2)'}}>{t.label}</button>))}
        </div>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 客户 / 需求..."
          style={{width:'100%', marginTop:8, padding:'5px 10px', border:'1px solid var(--line)', borderRadius:5, fontSize:12}} />
        {/* 🆕 时间筛选 */}
        <div style={{marginTop:8, paddingTop:8, borderTop:'1px dashed var(--line)'}}>
          <TimeRangeFilter value={timeFilter} onChange={setTimeFilter}
            customStart={timeCustom.start} customEnd={timeCustom.end}
            onCustomChange={setTimeCustom} label="🕓 超期筛选:"
            records={list} dateField="created_at" />
        </div>
        {/* 🆕 fix15: 创建日期范围筛选(本周/本月/任意月第N周) */}
        <div style={{marginTop:8, display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
          <span style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, whiteSpace:'nowrap'}}>📅 创建时间:</span>
          <AdvancedDateFilter value={dateFilter} onChange={setDateFilter} size="sm" />
        </div>
      </div>
      {loading ? <div className="paper rounded-2xl p-8" style={{textAlign:'center'}}>⏳</div>
       : filtered.length === 0 ? <div className="paper rounded-2xl p-10" style={{textAlign:'center', color:'var(--ink-3)'}}>暂无定制咨询</div>
       : <div className="space-y-2">{filtered.map(c =>
         <CustomInquiryCard key={c.id} item={c} user={user} onEdit={() => setEditing(c)} onDelete={() => handleDelete(c)} onReload={load} toast={toast} />)}</div>}
      {editing && <CustomInquiryEditor item={editing === 'new' ? null : editing} user={user}
        onClose={() => setEditing(null)} onSaved={() => { setEditing(null); load(); }} toast={toast} />}
    </div>
  );
};

const CustomInquiryCard = ({ item, user, onEdit, onDelete, onReload, toast }) => {
  const [expanded, setExpanded] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  const stage = CUSTOM_STAGES.find(s => s.key === item.stage) || CUSTOM_STAGES[0];
  const designs = item.design_files || [];
  const photos = item.final_photos || [];
  const refImgs = item.reference_images || [];
  const advanceStage = async () => {
    const idx = CUSTOM_STAGES.findIndex(s => s.key === item.stage);
    if (idx < 0 || idx >= CUSTOM_STAGES.length - 2) return;
    const nextStage = CUSTOM_STAGES[idx + 1].key;
    const now = new Date().toISOString();
    const timeMap = { sketching:'sketch_at', quoting:'quoted_at', paid:'paid_at', producing:'produced_at', photo:'photo_at', completed:'completed_at' };
    const payload = { ...item, stage: nextStage, [timeMap[nextStage] || 'updated_at']: now, updated_at: now };
    await CLOUD.upsert('custom_inquiries', payload);
    toast('✓ 已推进到:' + CUSTOM_STAGES[idx + 1].label); onReload();
  };

  return (
    <div className="paper rounded-2xl" style={{overflow:'hidden', border:`1.5px solid ${stage.color}40`}}>
      <div style={{padding:'12px 16px'}}>
        <div style={{display:'flex', justifyContent:'space-between', gap:10, flexWrap:'wrap'}}>
          <div style={{flex:1, minWidth:0}}>
            <div style={{display:'flex', gap:6, alignItems:'center', flexWrap:'wrap', marginBottom:4}}>
              <span style={{padding:'2px 8px', borderRadius:10, fontSize:10, fontWeight:600, background:`${stage.color}15`, color:stage.color}}>
                {stage.icon} {stage.label}
              </span>
              {item.site && <span style={{padding:'2px 8px', background:'#f5f5f7', color:'var(--ink-3)', borderRadius:10, fontSize:10, fontWeight:600}}>{item.site}</span>}
            </div>
            <div style={{fontSize:14, fontWeight:600, marginBottom:3}}>{item.customer_name || '(未填客户)'}</div>
            <div style={{fontSize:11, color:'var(--ink-3)', marginBottom:5}}>
              📧 {item.customer_email || '?'}{item.designer_name ? ` · 🎨 设计:${item.designer_name}` : ''} · 录入 {item.created_by_name}
            </div>
            {item.requirement && <div style={{padding:6, background:'#fef9c3', borderRadius:5, fontSize:12, color:'#713f12', whiteSpace:'pre-wrap'}}>
              💬 {item.requirement.slice(0, 200)}{item.requirement.length > 200 ? '...' : ''}
            </div>}
          </div>
          <div style={{display:'flex', gap:4, flexWrap:'wrap'}}>
            {item.stage !== 'completed' && item.stage !== 'cancelled' &&
              <button onClick={advanceStage} style={{padding:'5px 10px', background:stage.color, color:'white', border:'none', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>▶ 推进</button>}
            <button onClick={() => setExpanded(v => !v)} className="btn-sec" style={{padding:'5px 10px', fontSize:11}}>{expanded ? '收起' : '详情'}</button>
            <button onClick={onEdit} style={{padding:'5px 10px', background:'#e0f2fe', color:'#0369a1', border:'1px solid #7dd3fc', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>✏️</button>
            <button onClick={onDelete} style={{padding:'5px 10px', background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>🗑</button>
          </div>
        </div>
        {expanded && (
          <div style={{marginTop:10, padding:10, background:'#fafafa', borderRadius:8}}>
            {(item.quote_no || item.order_no) && (
              <div style={{display:'flex', gap:8, marginBottom:8, flexWrap:'wrap'}}>
                {item.quote_no && <span style={{padding:'4px 8px', background:'#dbeafe', color:'#1e3a8a', borderRadius:5, fontSize:11}}>🔗 报价:{item.quote_no}</span>}
                {item.order_no && <span style={{padding:'4px 8px', background:'#dcfce7', color:'#15803d', borderRadius:5, fontSize:11}}>📦 订单:{item.order_no}</span>}
              </div>)}
            {refImgs.length > 0 && <FileListSection title="📷 客户参考图" files={refImgs} onPreview={setPreviewFile} />}
            {designs.length > 0 && <FileListSection title="✏️ 设计图" files={designs} onPreview={setPreviewFile} />}
            {photos.length > 0 && <FileListSection title="📸 实拍图" files={photos} onPreview={setPreviewFile} />}
            {item.notes && <div style={{marginTop:6}}>
              <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:3}}>📝 备注:</div>
              <div style={{padding:8, background:'white', borderRadius:5, fontSize:12, whiteSpace:'pre-wrap'}}>{item.notes}</div>
            </div>}
          </div>)}
      </div>
      {previewFile && <FilePreviewModal file={previewFile} onClose={() => setPreviewFile(null)} />}
    </div>
  );
};

const FileListSection = ({ title, files, onPreview }) => (
  <div style={{marginBottom:8}}>
    <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:3}}>{title} ({files.length})</div>
    <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(90px, 1fr))', gap:5}}>
      {files.map(a => {
        const info = getFileTypeInfo(a);
        return info.kind === 'image' ?
          <img key={a.id} src={a.url} onClick={() => onPreview(a)}
            style={{width:'100%', height:65, objectFit:'contain', borderRadius:5, cursor:'pointer', border:'1px solid var(--line)', background:'var(--bg-elevated)'}} /> :
          <FileChip key={a.id} file={a} onClick={() => onPreview(a)} />;
      })}
    </div>
  </div>
);

const CustomInquiryEditor = ({ item, user, onClose, onSaved, toast }) => {
  const allSites = useSiteCodes();  // 🆕 fix22 联动 3: 合并 内置 SITES + 自定义网站
  const isEdit = !!item;
  const [customerName, setCustomerName] = useState(item?.customer_name || '');
  const [customerEmail, setCustomerEmail] = useState(item?.customer_email || '');
  const [customerPhone, setCustomerPhone] = useState(item?.customer_phone || '');
  const [site, setSite] = useState(item?.site || '');
  const [requirement, setRequirement] = useState(item?.requirement || '');
  const [stage, setStage] = useState(item?.stage || 'inquiry');
  const [designerName, setDesignerName] = useState(item?.designer_name || '');
  const [quoteNo, setQuoteNo] = useState(item?.quote_no || '');
  const [orderNo, setOrderNo] = useState(item?.order_no || '');
  const [refImages, setRefImages] = useState(item?.reference_images || []);
  const [designFiles, setDesignFiles] = useState(item?.design_files || []);
  const [finalPhotos, setFinalPhotos] = useState(item?.final_photos || []);
  const [notes, setNotes] = useState(item?.notes || '');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!customerName.trim() && !customerEmail.trim()) { alert('请至少填写客户姓名或邮箱'); return; }
    setSaving(true);
    const userName = user.name + (user.alias ? ' ' + user.alias : '');
    const now = new Date().toISOString();
    const payload = {
      ...(item || {}),
      customer_name: customerName.trim() || null,
      customer_email: customerEmail.trim() || null,
      customer_phone: customerPhone.trim() || null,
      site: site || null, requirement: requirement.trim() || null,
      stage, designer_name: designerName.trim() || null,
      quote_no: quoteNo.trim() || null, order_no: orderNo.trim() || null,
      reference_images: refImages, design_files: designFiles, final_photos: finalPhotos,
      notes: notes.trim() || null, updated_at: now,
      // 🆕 fix7: created_by 必须非空(旧记录可能为 null,触发 not-null 约束)
      created_by: item?.created_by || user.id,
      created_by_name: item?.created_by_name || userName,
      inquiry_at: item?.inquiry_at || now,
    };
    const res = await CLOUD.upsert('custom_inquiries', payload);
    if (res) { toast(isEdit ? '✓ 已更新' : '✓ 已创建'); onSaved(); }
    else alertSaveError('保存定制咨询');
    setSaving(false);
  };

  return (
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:9999, display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'4vh 20px', overflowY:'auto', overflowX:'hidden'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, maxWidth:760, width:'100%', display:'flex', flexDirection:'column', maxHeight:'92vh', overflowY:'auto', overflowX:'hidden'}}>
        <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', gap:8}}>
          <div className="font-display" style={{fontSize:16, fontWeight:600}}>🎨 {isEdit ? '编辑' : '新增'}定制咨询</div>
          <div style={{display:'flex', gap:6, alignItems:'center'}}>
            {user && user.role !== 'super_admin' && (
              <button onClick={() => window.__requestSupervisorAssistance?.({
                entityType: '定制咨询', entityId: item?.id, entityTitle: customerName || customerEmail || '(新咨询)'
              })}
                style={{padding:'5px 11px', background:'#fef3c7', color:'#92400e', border:'1px solid #fcd34d', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}
                title="把这条定制咨询交给主管/老板处理">
                {user.role === 'admin' ? '👑 申请老板' : '🚨 申请主管'}
              </button>
            )}
            <button className="btn-sec" onClick={onClose} style={{padding:'4px 12px'}}>×</button>
          </div>
        </div>
        <div style={{padding:18, overflow:'auto', flex:1}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 0.7fr', gap:10, marginBottom:12}}>
            <input value={customerName} onChange={e => setCustomerName(e.target.value)} placeholder="客户姓名" autoFocus
              style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            <input type="email" value={customerEmail} onChange={e => setCustomerEmail(e.target.value)} placeholder="邮箱"
              style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            <select value={site} onChange={e => setSite(e.target.value)}
              style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
              <option value="">网站</option>{allSites.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10, marginBottom:12}}>
            <select value={stage} onChange={e => setStage(e.target.value)}
              style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
              {CUSTOM_STAGES.map(s => <option key={s.key} value={s.key}>{s.icon} {s.label}</option>)}
            </select>
            <input value={designerName} onChange={e => setDesignerName(e.target.value)} placeholder="设计师 / 跟单"
              style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            <input value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} placeholder="客户电话"
              style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:12}}>
            <input value={quoteNo} onChange={e => setQuoteNo(e.target.value)} placeholder="关联报价单编号"
              style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'monospace'}} />
            <input value={orderNo} onChange={e => setOrderNo(e.target.value)} placeholder="关联订单编号"
              style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'monospace'}} />
          </div>
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>客户需求 *</label>
            <textarea value={requirement} onChange={e => setRequirement(e.target.value)}
              placeholder="客户的定制需求,如:大理石材质 60cm 直径吊灯,黑色..."
              style={{width:'100%', minHeight:100, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical', lineHeight:1.5}} />
          </div>
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>📷 客户提供的参考图</label>
            <MultiFileUploader files={refImages} setFiles={setRefImages} bucket="business-files" maxSize={20} />
          </div>
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>✏️ 设计图 / CAD 图纸</label>
            <MultiFileUploader files={designFiles} setFiles={setDesignFiles} bucket="business-files" maxSize={30} />
          </div>
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>📸 实拍图(生产完成后)</label>
            <MultiFileUploader files={finalPhotos} setFiles={setFinalPhotos} bucket="business-files" maxSize={30} />
          </div>
          <div style={{marginBottom:8}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>备注 / 沟通记录</label>
            <textarea value={notes} onChange={e => setNotes(e.target.value)}
              style={{width:'100%', minHeight:60, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical'}} />
          </div>
        </div>
        <div style={{padding:'12px 18px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'flex-end', gap:6}}>
          <button onClick={onClose} className="btn-sec" style={{padding:'7px 14px'}}>取消</button>
          <button onClick={handleSave} disabled={saving}
            style={{padding:'7px 18px', background:'var(--accent)', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13, opacity: saving ? 0.5 : 1}}>
            {saving ? '保存中...' : '保存'}
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 📸 实拍核实子模块
// ============================================================
const PhotoVerificationsSubModule = ({ user, employees, toast }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [filterStatus, setFilterStatus] = useState('active');
  const [search, setSearch] = useState('');
  // 🆕 时间筛选
  const [timeFilter, setTimeFilter] = useState('all');
  const [timeCustom, setTimeCustom] = useState({ start: '', end: '' });
  // 🆕 fix15: 日期范围筛选
  const [dateFilter, setDateFilter] = useState({ kind:'all' });
  const load = async () => {
    setLoading(true);
    try {
      const data = await CLOUD.list('photo_verifications', { order:{col:'created_at', asc:false}, limit:300 });
      setList((data || []).filter(p => !p.deleted));
    } catch(e) { toast('❌ ' + e.message); }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  const handleDelete = async (p) => {
    const summary = `${p.sku || ''} ${p.product_name || ''} · ${p.supplier_name || ''}`;
    await requestDelete({
      user, tableName:'photo_verifications', moduleLabel:'📸 实拍核实',
      record: p, recordSummary: summary, toast, onSuccess: load,
    });
  };
  const filtered = useMemo(() => {
    let l = list;
    if (filterStatus === 'active') l = l.filter(p => !['accepted','rejected','replaced'].includes(p.status));
    else if (filterStatus !== 'all') l = l.filter(p => p.status === filterStatus);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      l = l.filter(p => (p.sku || '').toLowerCase().includes(q) ||
        (p.product_name || '').toLowerCase().includes(q) ||
        (p.supplier_name || '').toLowerCase().includes(q) ||
        (p.difference_detail || '').toLowerCase().includes(q));
    }
    // 🆕 时间筛选
    l = filterByTimeRange(l, timeFilter, timeCustom.start, timeCustom.end, 'created_at');
    // 🆕 fix15: 日期范围筛选
    l = filterByDateRange(l, dateFilter, 'created_at');
    return l;
  }, [list, filterStatus, search, timeFilter, timeCustom, dateFilter]);

  return (
    <div className="space-y-3">
      <div className="paper rounded-2xl p-4">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:10}}>
          <div>
            <div className="font-display" style={{fontSize:17, fontWeight:600}}>📸 实拍核实</div>
            <div style={{fontSize:11, color:'var(--ink-3)', marginTop:3}}>跟单录入差异 → 客服联系客户核实</div>
          </div>
          <button onClick={() => setEditing('new')} className="btn-pri" style={{padding:'6px 14px', fontSize:12}}>+ 新增核实</button>
        </div>
        <div style={{marginTop:10, display:'flex', gap:5, flexWrap:'wrap'}}>
          {[{key:'active',label:'🔥 待处理'},...PHOTO_STATUSES.map(s => ({key:s.key, label:s.label})),{key:'all',label:'全部'}].map(t => (
            <button key={t.key} onClick={() => setFilterStatus(t.key)}
              style={{padding:'3px 10px', borderRadius:14, fontSize:11, cursor:'pointer', fontFamily:'inherit',
                border:'1px solid ' + (filterStatus === t.key ? 'var(--accent)' : 'var(--line)'),
                background: filterStatus === t.key ? 'var(--accent)' : 'white',
                color: filterStatus === t.key ? 'white' : 'var(--ink-2)'}}>{t.label}</button>))}
        </div>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 SKU / 产品 / 供应商..."
          style={{width:'100%', marginTop:8, padding:'5px 10px', border:'1px solid var(--line)', borderRadius:5, fontSize:12}} />
        {/* 🆕 时间筛选 */}
        <div style={{marginTop:8, paddingTop:8, borderTop:'1px dashed var(--line)'}}>
          <TimeRangeFilter value={timeFilter} onChange={setTimeFilter}
            customStart={timeCustom.start} customEnd={timeCustom.end}
            onCustomChange={setTimeCustom} label="🕓 超期筛选:"
            records={list} dateField="created_at" />
        </div>
        {/* 🆕 fix15: 创建日期范围筛选(本周/本月/任意月第N周) */}
        <div style={{marginTop:8, display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
          <span style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, whiteSpace:'nowrap'}}>📅 创建时间:</span>
          <AdvancedDateFilter value={dateFilter} onChange={setDateFilter} size="sm" />
        </div>
      </div>
      {loading ? <div className="paper rounded-2xl p-8" style={{textAlign:'center'}}>⏳</div>
       : filtered.length === 0 ? <div className="paper rounded-2xl p-10" style={{textAlign:'center', color:'var(--ink-3)'}}>暂无实拍核实</div>
       : <div className="space-y-2">{filtered.map(p =>
         <PhotoVerificationCard key={p.id} item={p} user={user} onEdit={() => setEditing(p)} onDelete={() => handleDelete(p)} onReload={load} toast={toast} />)}</div>}
      {editing && <PhotoVerificationEditor item={editing === 'new' ? null : editing} user={user}
        onClose={() => setEditing(null)} onSaved={() => { setEditing(null); load(); }} toast={toast} />}
    </div>
  );
};

const PhotoVerificationCard = ({ item, user, onEdit, onDelete, onReload, toast }) => {
  const [expanded, setExpanded] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  const status = PHOTO_STATUSES.find(s => s.key === item.status) || PHOTO_STATUSES[0];
  const setStatus = async (newStatus) => {
    await CLOUD.upsert('photo_verifications', { ...item, status: newStatus, updated_at: new Date().toISOString() });
    toast('✓ 已更新'); onReload();
  };

  return (
    <div className="paper rounded-2xl" style={{overflow:'hidden', border:'1.5px solid var(--line)'}}>
      <div style={{padding:'12px 16px'}}>
        <div style={{display:'flex', justifyContent:'space-between', gap:10, flexWrap:'wrap'}}>
          <div style={{flex:1, minWidth:0}}>
            <div style={{display:'flex', gap:6, alignItems:'center', flexWrap:'wrap', marginBottom:4}}>
              <span style={{padding:'2px 8px', borderRadius:10, fontSize:10, fontWeight:600, background: status.bg, color: status.color}}>{status.label}</span>
              {item.difference_type && <span style={{padding:'2px 8px', background:'#fef2f2', color:'#dc2626', borderRadius:10, fontSize:10, fontWeight:600}}>差异:{item.difference_type}</span>}
              {item.type === 'normal' && <span style={{padding:'2px 8px', background:'#dcfce7', color:'#15803d', borderRadius:10, fontSize:10, fontWeight:600}}>发货前实拍</span>}
            </div>
            <div style={{fontSize:14, fontWeight:600, marginBottom:3}}>
              {item.sku && <span style={{fontFamily:'monospace', color:'var(--ink-3)', marginRight:6}}>{item.sku}</span>}
              {item.product_name || '(未填产品名)'}
            </div>
            <div style={{fontSize:11, color:'var(--ink-3)'}}>
              {item.supplier_name && <span>🏭 {item.supplier_name}</span>}
              {item.reported_by_name && <span> · 📝 {item.reported_by_name}</span>}
              {(item.affected_orders || []).length > 0 && <span> · 📦 影响 {item.affected_orders.length} 单</span>}
            </div>
            {item.difference_detail && <div style={{marginTop:5, padding:6, background:'#fef9c3', borderRadius:5, fontSize:12, color:'#713f12'}}>💬 {item.difference_detail}</div>}
          </div>
          <div style={{display:'flex', gap:4, flexWrap:'wrap'}}>
            {item.status === 'pending' && <button onClick={() => setStatus('contacted')} style={{padding:'5px 10px', background:'#0369a1', color:'white', border:'none', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>📧 已发邮件</button>}
            {item.status === 'contacted' && <>
              <button onClick={() => setStatus('accepted')} style={{padding:'5px 10px', background:'#15803d', color:'white', border:'none', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>✅ 接受</button>
              <button onClick={() => setStatus('rejected')} style={{padding:'5px 10px', background:'#dc2626', color:'white', border:'none', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>❌ 拒绝</button>
            </>}
            <button onClick={() => setExpanded(v => !v)} className="btn-sec" style={{padding:'5px 10px', fontSize:11}}>{expanded ? '收起' : '详情'}</button>
            <button onClick={onEdit} style={{padding:'5px 10px', background:'#e0f2fe', color:'#0369a1', border:'1px solid #7dd3fc', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>✏️</button>
            <button onClick={onDelete} style={{padding:'5px 10px', background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600}}>🗑</button>
          </div>
        </div>
        {expanded && (
          <div style={{marginTop:10, padding:10, background:'#fafafa', borderRadius:8}}>
            {(item.sales_photos || []).length > 0 && <FileListSection title="🎨 销售展示图(对比)" files={item.sales_photos} onPreview={setPreviewFile} />}
            {(item.actual_photos || []).length > 0 && <FileListSection title="📸 实拍图" files={item.actual_photos} onPreview={setPreviewFile} />}
            {(item.affected_orders || []).length > 0 && (
              <div style={{marginBottom:8}}>
                <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:3}}>📦 影响订单:</div>
                <div style={{display:'flex', flexWrap:'wrap', gap:5}}>
                  {item.affected_orders.map(o => <span key={o} style={{padding:'3px 8px', background:'#dbeafe', color:'#1e3a8a', borderRadius:5, fontSize:11, fontFamily:'monospace'}}>{o}</span>)}
                </div>
              </div>)}
            {item.customer_response && <div style={{padding:8, background:'white', borderRadius:5, fontSize:12, whiteSpace:'pre-wrap'}}>
              <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:3}}>📩 客户回复:</div>{item.customer_response}
            </div>}
          </div>)}
      </div>
      {previewFile && <FilePreviewModal file={previewFile} onClose={() => setPreviewFile(null)} />}
    </div>
  );
};

const PhotoVerificationEditor = ({ item, user, onClose, onSaved, toast }) => {
  const isEdit = !!item;
  const userName = user.name + (user.alias ? ' ' + user.alias : '');
  // 🆕 fix7: 表单字段重新设计
  // - 订单编号 (新字段 order_ref) — 主要字段,替代 SKU 作为主要标识
  // - 产品名 / 核实类型 / 差异类型(颜色等) / 差异说明 — 保留
  // - 录入人自动 = 当前客服(不需要手填)
  // - 客户回复改为留言板形式,支持图片粘贴/拖拽
  // - SKU / 供应商 / 影响订单 — 降级为可选高级字段
  const [orderRef, setOrderRef] = useState(item?.order_ref || (item?.affected_orders?.[0]) || '');
  const [productName, setProductName] = useState(item?.product_name || '');
  const [type, setType] = useState(item?.type || 'mismatch');
  const [differenceType, setDifferenceType] = useState(item?.difference_type || '颜色');
  const [differenceDetail, setDifferenceDetail] = useState(item?.difference_detail || '');
  const [salesPhotos, setSalesPhotos] = useState(item?.sales_photos || []);
  const [actualPhotos, setActualPhotos] = useState(item?.actual_photos || []);
  // 客户回复留言板 — 数组结构,每条 {id, author_id, author_name, content, images:[{path,url}], created_at}
  // 旧记录里只有 customer_response (text) — 自动转成一条 legacy 留言
  const [replies, setReplies] = useState(() => {
    if (Array.isArray(item?.customer_replies)) return item.customer_replies;
    if (item?.customer_response && item.customer_response.trim()) {
      return [{
        id: 'legacy_' + (item.id || Date.now()),
        author_id: item.created_by || null,
        author_name: item.created_by_name || '(旧数据)',
        content: item.customer_response,
        images: [],
        created_at: item.updated_at || item.created_at || new Date().toISOString(),
      }];
    }
    return [];
  });
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [sku, setSku] = useState(item?.sku || '');
  const [supplierName, setSupplierName] = useState(item?.supplier_name || '');
  const [affectedOrders, setAffectedOrders] = useState((item?.affected_orders || []).join(', '));
  const [resolution, setResolution] = useState(item?.resolution || '');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!orderRef.trim()) { alert('请填写订单编号'); return; }
    if (!productName.trim()) { alert('请填写产品名'); return; }
    if (!differenceDetail.trim()) { alert('请填写差异说明'); return; }
    setSaving(true);
    const now = new Date().toISOString();
    // 同步把 orderRef 也存进 affected_orders 兼容老查询
    const mergedOrders = [orderRef.trim(), ...(affectedOrders.split(',').map(s => s.trim()).filter(Boolean))]
      .filter((v, i, a) => v && a.indexOf(v) === i);
    // 最新一条留言写入 customer_response 兼容旧字段
    const latestReply = replies.length > 0 ? replies[replies.length - 1] : null;
    const payload = {
      ...(item || {}),
      order_ref: orderRef.trim(),
      sku: sku.trim() || null,
      product_name: productName.trim() || null,
      supplier_name: supplierName.trim() || null,
      type,
      difference_type: differenceType,
      difference_detail: differenceDetail.trim(),
      affected_orders: mergedOrders,
      sales_photos: salesPhotos,
      actual_photos: actualPhotos,
      // 自动录入人 = 当前客服(item 原录入人保留,没的话用当前)
      reported_by_name: item?.reported_by_name || userName,
      reported_by_id: item?.reported_by_id || user.id,
      customer_replies: replies,
      customer_response: latestReply ? latestReply.content : (item?.customer_response || null),
      resolution: resolution.trim() || null,
      updated_at: now,
      created_by: item?.created_by || user.id,
      created_by_name: item?.created_by_name || userName,
      status: item?.status || 'pending',
    };
    const res = await CLOUD.upsert('photo_verifications', payload);
    if (res) { toast(isEdit ? '✓ 已更新' : '✓ 已创建'); onSaved(); }
    else alertSaveError('保存实拍核实');
    setSaving(false);
  };

  return (
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:9999, display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'4vh 20px', overflowY:'auto', overflowX:'hidden'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, maxWidth:720, width:'100%', display:'flex', flexDirection:'column', maxHeight:'92vh', overflowY:'auto', overflowX:'hidden'}}>
        <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', gap:8}}>
          <div className="font-display" style={{fontSize:16, fontWeight:600}}>📸 {isEdit ? '编辑' : '新增'}实拍核实</div>
          <div style={{display:'flex', gap:6, alignItems:'center'}}>
            {user && user.role !== 'super_admin' && (
              <button onClick={() => window.__requestSupervisorAssistance?.({
                entityType: '实拍核实', entityId: item?.id, entityTitle: orderRef || productName || '(新核实)'
              })}
                style={{padding:'5px 11px', background:'#fef3c7', color:'#92400e', border:'1px solid #fcd34d', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}
                title="把这条实拍核实交给主管/老板处理">
                {user.role === 'admin' ? '👑 申请老板' : '🚨 申请主管'}
              </button>
            )}
            <button className="btn-sec" onClick={onClose} style={{padding:'4px 12px'}}>×</button>
          </div>
        </div>
        <div style={{padding:18, overflow:'auto', flex:1}}>
          {/* 自动录入人 — 只显示,不可改 */}
          <div style={{padding:'8px 12px', background:'#f0f9ff', border:'1px solid #bfdbfe', borderRadius:8, marginBottom:12, fontSize:12, color:'#1e40af'}}>
            👤 <strong>录入人</strong>:{item?.reported_by_name || userName} <span style={{color:'#64748b', fontSize:11}}>(自动填写,无需修改)</span>
          </div>

          {/* 订单编号 + 产品名 */}
          <div style={{display:'grid', gridTemplateColumns:'1fr 1.5fr', gap:10, marginBottom:12}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>订单编号 *</label>
              <input value={orderRef} onChange={e => setOrderRef(e.target.value)} placeholder="V99299" autoFocus
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'monospace'}} />
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>产品名 *</label>
              <input value={productName} onChange={e => setProductName(e.target.value)} placeholder="如:水晶吊灯-米色-60cm"
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            </div>
          </div>

          {/* 类型 + 核实差异(颜色等) */}
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:12}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>类型</label>
              <select value={type} onChange={e => setType(e.target.value)}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
                <option value="mismatch">差异核实</option>
                <option value="normal">发货前实拍</option>
              </select>
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>核实差异(颜色/尺寸/材质等)</label>
              <select value={differenceType} onChange={e => setDifferenceType(e.target.value)}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
                {PHOTO_DIFFERENCE_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          {/* 差异说明 */}
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>差异说明 *</label>
            <textarea value={differenceDetail} onChange={e => setDifferenceDetail(e.target.value)}
              placeholder="例如:销售图为暖白光 3000K,实物是冷白光 6500K;或销售图金色边框,实物是银色"
              style={{width:'100%', minHeight:60, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical'}} />
          </div>

          {/* 销售图 + 实拍图 */}
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:12}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>🎨 销售展示图</label>
              <MultiFileUploader files={salesPhotos} setFiles={setSalesPhotos} bucket="business-files" maxSize={20} />
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>📸 实拍图</label>
              <MultiFileUploader files={actualPhotos} setFiles={setActualPhotos} bucket="business-files" maxSize={20} />
            </div>
          </div>

          {/* 客户回复留言板 */}
          <CustomerRepliesBoard replies={replies} setReplies={setReplies} user={user} />

          {/* 处理结果 — 编辑模式 */}
          {isEdit && (
            <div style={{marginTop:12, marginBottom:8}}>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>✅ 处理结果</label>
              <input value={resolution} onChange={e => setResolution(e.target.value)} placeholder="如:接受发货 / 退款 / 换款 / 退货"
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            </div>
          )}

          {/* 高级字段 — 可折叠 */}
          <div style={{marginTop:14, padding:10, background:'#fafaf7', borderRadius:8, border:'1px dashed var(--line)'}}>
            <button onClick={() => setShowAdvanced(s => !s)}
              style={{background:'transparent', border:'none', cursor:'pointer', fontSize:12, color:'var(--ink-3)', fontFamily:'inherit', padding:0}}>
              {showAdvanced ? '▼' : '▶'} 高级字段 (SKU / 供应商 / 其他影响订单)
            </button>
            {showAdvanced && (
              <div style={{marginTop:10, display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:10}}>
                <input value={sku} onChange={e => setSku(e.target.value)} placeholder="SKU (可选)"
                  style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'monospace'}} />
                <input value={supplierName} onChange={e => setSupplierName(e.target.value)} placeholder="供应商 (可选)"
                  style={{padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
                <input value={affectedOrders} onChange={e => setAffectedOrders(e.target.value)} placeholder="其他影响订单(逗号分隔)"
                  style={{gridColumn:'1 / -1', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'monospace'}} />
              </div>
            )}
          </div>
        </div>
        <div style={{padding:'12px 18px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'flex-end', gap:6}}>
          <button onClick={onClose} className="btn-sec" style={{padding:'7px 14px'}}>取消</button>
          <button onClick={handleSave} disabled={saving}
            style={{padding:'7px 18px', background:'var(--accent)', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13, opacity: saving ? 0.5 : 1}}>
            {saving ? '保存中...' : '保存'}
          </button>
        </div>
      </div>
    </div>
  );
};

// 🆕 fix7: 客户回复留言板组件 — 支持文本 + 图片(粘贴/拖拽/选文件)+ 时间线展示
const CustomerRepliesBoard = ({ replies, setReplies, user }) => {
  const userName = user.name + (user.alias ? ' ' + user.alias : '');
  const [newContent, setNewContent] = useState('');
  const [newImages, setNewImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const dropRef = useRef(null);

  const uploadOneFile = async (file) => {
    if (!file) return null;
    if (file.size > 10 * 1024 * 1024) { alert('图片超过 10MB,请压缩'); return null; }
    setUploading(true);
    try {
      const res = await CLOUD.uploadImage('business-files', file, 'photoverif/reply/');
      if (!res) throw new Error('上传失败');
      return res;
    } catch (e) {
      alert('上传失败: ' + e.message);
      return null;
    } finally {
      setUploading(false);
    }
  };

  const addFiles = async (files) => {
    const list = Array.from(files || []).filter(f => f.type.startsWith('image/'));
    if (list.length === 0) return;
    const uploaded = [];
    for (const f of list) {
      const r = await uploadOneFile(f);
      if (r) uploaded.push(r);
    }
    if (uploaded.length > 0) setNewImages(prev => [...prev, ...uploaded]);
  };

  // 粘贴图片到留言区
  const onPaste = async (e) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    const files = [];
    for (const it of items) {
      if (it.type && it.type.indexOf('image') === 0) {
        const f = it.getAsFile();
        if (f) files.push(f);
      }
    }
    if (files.length > 0) {
      e.preventDefault();
      await addFiles(files);
    }
  };
  const onDrop = async (e) => {
    e.preventDefault();
    dropRef.current?.classList.remove('drag-over');
    if (e.dataTransfer.files?.length) await addFiles(e.dataTransfer.files);
  };

  const send = () => {
    if (!newContent.trim() && newImages.length === 0) {
      alert('请输入留言内容或粘贴图片');
      return;
    }
    const reply = {
      id: 'r_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      author_id: user.id,
      author_name: userName,
      content: newContent.trim(),
      images: newImages,
      created_at: new Date().toISOString(),
    };
    setReplies(prev => [...(prev || []), reply]);
    setNewContent('');
    setNewImages([]);
  };

  const removeReply = (id) => {
    if (!confirm('确认删除这条留言?')) return;
    setReplies(prev => (prev || []).filter(r => r.id !== id));
  };

  const removeNewImage = (idx) => {
    setNewImages(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div style={{marginTop:14, padding:12, background:'#fafaf7', border:'1px solid var(--line)', borderRadius:10}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10}}>
        <div style={{fontSize:13, fontWeight:600, color:'var(--ink)'}}>
          📩 客户回复 / 跟进留言板 ({replies?.length || 0})
        </div>
        <div style={{fontSize:10, color:'var(--ink-4)'}}>所有客服都能看到完整记录</div>
      </div>

      {/* 已有留言列表 */}
      {replies && replies.length > 0 ? (
        <div style={{display:'flex', flexDirection:'column', gap:8, marginBottom:12, maxHeight:300, overflowY:'auto'}}>
          {replies.map((r, idx) => (
            <div key={r.id} style={{padding:'8px 10px', background:'white', border:'1px solid var(--line)', borderRadius:8, fontSize:12}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:4}}>
                <div style={{fontSize:11, fontWeight:600, color:'var(--ink-2)'}}>
                  💬 {r.author_name || '(未知)'} <span style={{color:'var(--ink-4)', fontWeight:400, marginLeft:6}}>{(r.created_at || '').slice(0, 16).replace('T', ' ')}</span>
                </div>
                {r.author_id === user.id && (
                  <button onClick={() => removeReply(r.id)}
                    style={{background:'transparent', border:'none', color:'#dc2626', cursor:'pointer', fontSize:11, fontFamily:'inherit'}}>删除</button>
                )}
              </div>
              {r.content && <div style={{whiteSpace:'pre-wrap', color:'var(--ink)', lineHeight:1.5, marginBottom: r.images?.length ? 6 : 0}}>{r.content}</div>}
              {r.images?.length > 0 && (
                <div style={{display:'flex', flexWrap:'wrap', gap:6}}>
                  {r.images.map((img, i) => (
                    <a key={i} href={img.url} target="_blank" rel="noopener"
                      style={{display:'block', width:80, height:80, borderRadius:6, overflow:'hidden', border:'1px solid var(--line)'}}>
                      <img src={img.url} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div style={{fontSize:12, color:'var(--ink-4)', textAlign:'center', padding:'12px 0', marginBottom:8}}>
          暂无留言 — 收到客户回复后在下方添加,所有客服都能看到
        </div>
      )}

      {/* 新建留言区 */}
      <div ref={dropRef}
        onPaste={onPaste}
        onDragOver={e => { e.preventDefault(); dropRef.current?.classList.add('drag-over'); }}
        onDragLeave={() => dropRef.current?.classList.remove('drag-over')}
        onDrop={onDrop}
        style={{padding:8, background:'white', border:'1px dashed var(--line)', borderRadius:8}}>
        <textarea value={newContent} onChange={e => setNewContent(e.target.value)}
          placeholder="新留言... (可 Ctrl+V 粘贴图片 / 拖入图片)"
          style={{width:'100%', minHeight:60, padding:8, border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical', boxSizing:'border-box'}} />
        {newImages.length > 0 && (
          <div style={{display:'flex', flexWrap:'wrap', gap:6, marginTop:6}}>
            {newImages.map((img, idx) => (
              <div key={idx} style={{position:'relative', width:60, height:60, borderRadius:6, overflow:'hidden', border:'1px solid var(--line)'}}>
                <img src={img.url} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}} />
                <button onClick={() => removeNewImage(idx)}
                  style={{position:'absolute', top:1, right:1, background:'rgba(0,0,0,0.6)', color:'white', border:'none', borderRadius:'50%', width:18, height:18, cursor:'pointer', fontSize:11, lineHeight:1}}>×</button>
              </div>
            ))}
          </div>
        )}
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginTop:8, gap:8, flexWrap:'wrap'}}>
          <div style={{display:'flex', gap:6, alignItems:'center'}}>
            <button onClick={() => fileInputRef.current?.click()} disabled={uploading}
              style={{padding:'5px 10px', background:'white', border:'1px solid var(--line)', borderRadius:6, cursor:'pointer', fontSize:11, fontFamily:'inherit', color:'var(--ink-2)'}}>
              📎 选图片
            </button>
            <input ref={fileInputRef} type="file" multiple accept="image/*" style={{display:'none'}}
              onChange={e => { addFiles(e.target.files); e.target.value = ''; }} />
            {uploading && <span style={{fontSize:11, color:'var(--ink-3)'}}>上传中...</span>}
          </div>
          <button onClick={send} disabled={uploading || (!newContent.trim() && newImages.length === 0)}
            style={{padding:'6px 16px', background:'var(--accent)', color:'white', border:'none', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit', opacity:(uploading || (!newContent.trim() && newImages.length === 0)) ? 0.5 : 1}}>
            ✓ 添加留言
          </button>
        </div>
      </div>
    </div>
  );
};
