// ════════════════════════════════════════════════════════════════════
// 📋 工作主线 + 📊 主管汇总 · fix28-55
// APP_VERSION: 2026.05.27-fix55
// ════════════════════════════════════════════════════════════════════


const EventsModule = ({ user, employees, records, toast, cloudOn }) => {
  const [subTab, setSubTab] = useState('aftersales');  // aftersales | refills | refunds | summary
  const [suppliers, setSuppliers] = useState([]);
  const [aftersales, setAftersales] = useState([]);
  const [refills, setRefills] = useState([]);
  const [refunds, setRefunds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editEvent, setEditEvent] = useState(null);  // { kind, event }
  const [exportPanel, setExportPanel] = useState(false);
  const [refundReview, setRefundReview] = useState(null);  // 审核 modal
  
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  const isFinance = user.role === 'finance' || isAdmin;  // 财务+admin 都能管退款
  
  // 加载全部数据
  const loadAll = async () => {
    if (!cloudOn) { setLoading(false); return; }
    setLoading(true);
    try {
      const [sup, af, rf, rfd] = await Promise.all([
        CLOUD.list('suppliers', { order:{col:'name', asc:true}, limit:1000 }),
        CLOUD.list('aftersales', { order:{col:'created_at', asc:false}, limit:2000 }),
        CLOUD.list('refills', { order:{col:'created_at', asc:false}, limit:2000 }),
        CLOUD.list('refunds', { order:{col:'created_at', asc:false}, limit:2000 }),
      ]);
      setSuppliers(sup || []);
      // 🆕 fix9b: 必须过滤软删除的(老板删除后刷新会回弹的根因 — 之前 loadAll 没过滤)
      const afLive = (af || []).filter(x => !x.deleted);
      const rfLive = (rf || []).filter(x => !x.deleted);
      const rfdLive = (rfd || []).filter(x => !x.deleted);
      setAftersales(afLive);
      setRefills(rfLive);
      setRefunds(rfdLive);
      // 🆕 写 cache 给顶部徽章用
      STORE.set('events_cache', { aftersales: afLive, refunds: rfdLive, refills: rfLive });
    } catch(e) { toast('❌ 加载失败: ' + e.message); }
    setLoading(false);
  };
  useEffect(() => { loadAll(); }, [cloudOn]);
  
  // 筛选 state - 公用
  const [filterMonth, setFilterMonth] = useState(() => new Date().toISOString().slice(0, 7));  // YYYY-MM
  const [filterSupplier, setFilterSupplier] = useState('');  // supplier id
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterIssue, setFilterIssue] = useState('all');
  const [filterRefundType, setFilterRefundType] = useState('all');
  const [filterOwner, setFilterOwner] = useState('all');
  const [search, setSearch] = useState('');
  
  // 月份范围
  const monthRange = useMemo(() => {
    if (!filterMonth) return { start: null, end: null };
    const [y, m] = filterMonth.split('-').map(Number);
    const start = `${y}-${String(m).padStart(2,'0')}-01`;
    const lastDay = new Date(y, m, 0).getDate();
    const end = `${y}-${String(m).padStart(2,'0')}-${String(lastDay).padStart(2,'0')}`;
    return { start, end };
  }, [filterMonth]);
  
  // 过滤函数（共用）
  const inMonth = (e) => {
    if (!monthRange.start) return true;
    const created = (e.created_at || '').slice(0, 10);
    return created >= monthRange.start && created <= monthRange.end;
  };
  const matchSupplier = (e) => !filterSupplier || e.supplier_id === parseInt(filterSupplier);
  const matchOwner    = (e) => filterOwner === 'all' || e.created_by === filterOwner;
  const matchSearch   = (e) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return [e.order_ref, e.customer, e.product_name, e.notes, e.damaged_part, e.refund_reason, e.supplier_name]
      .filter(Boolean).join(' ').toLowerCase().includes(q);
  };
  
  const filteredAftersales = useMemo(() => aftersales.filter(e => 
    inMonth(e) && matchSupplier(e) && matchOwner(e) && matchSearch(e) &&
    (filterStatus === 'all' || e.status === filterStatus) &&
    (filterIssue === 'all' || e.issue_type === filterIssue)
  ), [aftersales, filterMonth, filterSupplier, filterStatus, filterIssue, filterOwner, search]);
  
  const filteredRefills = useMemo(() => refills.filter(e =>
    inMonth(e) && matchSupplier(e) && matchOwner(e) && matchSearch(e) &&
    (filterStatus === 'all' || e.status === filterStatus)
  ), [refills, filterMonth, filterSupplier, filterStatus, filterOwner, search]);
  
  const filteredRefunds = useMemo(() => refunds.filter(e =>
    inMonth(e) && matchSupplier(e) && matchOwner(e) && matchSearch(e) &&
    (filterStatus === 'all' || e.status === filterStatus) &&
    (filterRefundType === 'all' || e.refund_type === filterRefundType)
  ), [refunds, filterMonth, filterSupplier, filterStatus, filterRefundType, filterOwner, search]);
  
  // 月度统计
  const monthlyStats = useMemo(() => {
    // 售后
    const asInMonth = aftersales.filter(inMonth);
    const asBySupplier = {};
    const asByIssue = {};
    asInMonth.forEach(e => {
      const s = e.supplier_name || '(未指定)';
      asBySupplier[s] = (asBySupplier[s] || 0) + 1;
      const i = ISSUE_TYPES.find(t => t.key === e.issue_type)?.label || e.issue_type || '(未指定)';
      asByIssue[i] = (asByIssue[i] || 0) + 1;
    });
    
    // 退款（已完成的算金额）
    const rdInMonth = refunds.filter(inMonth);
    const rdCompleted = rdInMonth.filter(r => r.status === 'completed' || r.status === 'approved');
    const totalAmount = rdCompleted.reduce((s, r) => {
      // 简单按 USD 算（实际多币种需汇率，这里展示用）
      return s + parseFloat(r.amount || 0);
    }, 0);
    const rdByType = {};
    const rdByTypeAmount = {};
    rdCompleted.forEach(r => {
      const t = REFUND_TYPES.find(x => x.key === r.refund_type)?.label || r.refund_type;
      rdByType[t] = (rdByType[t] || 0) + 1;
      rdByTypeAmount[t] = (rdByTypeAmount[t] || 0) + parseFloat(r.amount || 0);
    });
    
    // 补件
    const rfInMonth = refills.filter(inMonth);
    
    return {
      aftersales: { total: asInMonth.length, bySupplier: asBySupplier, byIssue: asByIssue },
      refunds: { total: rdInMonth.length, completed: rdCompleted.length, totalAmount, byType: rdByType, byTypeAmount: rdByTypeAmount, pending: rdInMonth.filter(r => r.status === 'pending').length },
      refills: { total: rfInMonth.length, byStatus: rfInMonth.reduce((acc, e) => { acc[e.status] = (acc[e.status] || 0) + 1; return acc; }, {}) },
    };
  }, [aftersales, refunds, refills, monthRange]);
  
  // 售后状态更新
  const updateAftersaleStatus = async (id, status, extraFields = {}) => {
    const item = aftersales.find(a => a.id === id);
    if (!item) return;
    const updated = { ...item, status, ...extraFields, updated_at: new Date().toISOString() };
    const res = await CLOUD.upsert('aftersales', updated);
      if (!res) { alertSaveError('保存售后'); setSaving(false); return; }
    if (res) {
      setAftersales(prev => prev.map(a => a.id === id ? (res[0] || updated) : a));
      toast('✓ 状态已更新');
    } else toast('❌ 更新失败');
  };
  
  // 补件状态更新
  const updateRefillStatus = async (id, status) => {
    const item = refills.find(r => r.id === id);
    if (!item) return;
    const updated = { ...item, status, updated_at: new Date().toISOString() };
    if (status === 'shipped' && !item.actual_ship_date) updated.actual_ship_date = new Date().toISOString().slice(0,10);
    const res = await CLOUD.upsert('refills', updated);
      if (!res) { alertSaveError('保存补件'); setSaving(false); return; }
    if (res) {
      setRefills(prev => prev.map(r => r.id === id ? (res[0] || updated) : r));
      toast('✓ 状态已更新');
    } else toast('❌ 更新失败');
  };
  
  // 退款审核 + 完成
  const reviewRefund = async (refund, action, notes = '', extraFields = {}) => {
    const now = new Date().toISOString();
    let payload;
    if (action === 'approve') {
      payload = { ...refund, status:'approved', approved_by:user.id, approved_by_name:user.name + (user.alias ? ' ' + user.alias : ''), approved_at:now, approval_notes:notes, updated_at:now };
    } else if (action === 'reject') {
      payload = { ...refund, status:'rejected', approved_by:user.id, approved_by_name:user.name + (user.alias ? ' ' + user.alias : ''), approved_at:now, approval_notes:notes, updated_at:now };
    } else if (action === 'complete') {
      payload = { ...refund, status:'completed', processed_by:user.id, processed_by_name:user.name + (user.alias ? ' ' + user.alias : ''), processed_at:now, processing_notes:notes, external_refund_id:extraFields.external_refund_id || null, updated_at:now };
    }
    const res = await CLOUD.upsert('refunds', payload);
      if (!res) { alertSaveError('保存退款'); setSaving(false); return; }
    if (res) {
      setRefunds(prev => prev.map(r => r.id === refund.id ? (res[0] || payload) : r));
      toast(`✓ ${action === 'approve' ? '已批准' : action === 'reject' ? '已拒绝' : '已完成'}退款`);
      setRefundReview(null);
    } else toast('❌ 操作失败');
  };
  
  // 删除事件 - 走审批流程
  const deleteEvent = async (kind, id) => {
    const table = kind === 'aftersale' ? 'aftersales' : kind === 'refill' ? 'refills' : 'refunds';
    const moduleLabel = kind === 'aftersale' ? '🔧 售后' : kind === 'refill' ? '📦 补件' : '💰 退款';
    const list = kind === 'aftersale' ? aftersales : kind === 'refill' ? refills : refunds;
    const rec = list.find(r => r.id === id);
    if (!rec) return;
    const summary = `${rec.order_ref || '?'} · ${rec.customer || '?'} · ${rec.product_name || ''}`;
    const ok = await requestDelete({
      user, tableName: table, moduleLabel,
      record: rec, recordSummary: summary, toast,
      onSuccess: () => {
        if (kind === 'aftersale') setAftersales(prev => prev.filter(a => a.id !== id));
        else if (kind === 'refill') setRefills(prev => prev.filter(r => r.id !== id));
        else if (kind === 'refund') setRefunds(prev => prev.filter(r => r.id !== id));
      },
    });
  };
  
  if (loading) return <div style={{padding:40, textAlign:'center', color:'var(--ink-3)'}}>⏳ 加载中...</div>;
  
  // 当前在哪个 sub-tab 决定渲染哪个表格
  return (
    <div className="space-y-4">
      {/* Sub-tab 切换栏 */}
      <div className="paper rounded-2xl p-3 fade-in" style={{display:'flex', flexWrap:'wrap', gap:6, alignItems:'center'}}>
        {[
          { key:'aftersales', label:'🔧 售后清单', count: filteredAftersales.length, color:'#ea580c' },
          { key:'refills',    label:'📦 补件追踪', count: filteredRefills.length, color:'#0369a1' },
          { key:'refunds',    label:'💰 退款管理', count: filteredRefunds.length, color:'#dc2626' },
          { key:'summary',    label:'📊 月度汇总', count: null, color:'#16a34a' },
        ].filter(t => !t.restrict).map(t => (
          <button key={t.key} onClick={() => setSubTab(t.key)}
            style={{
              padding:'7px 14px', borderRadius:8,
              border:'1px solid ' + (subTab === t.key ? t.color : 'var(--line)'),
              background: subTab === t.key ? t.color + '15' : 'white',
              color: subTab === t.key ? t.color : 'var(--ink-2)',
              cursor:'pointer', fontSize:13, fontFamily:'inherit',
              fontWeight: subTab === t.key ? 600 : 500,
              display:'flex', alignItems:'center', gap:6,
            }}>
            {t.label}
            {t.count !== null && (
              <span style={{padding:'1px 6px', background: subTab === t.key ? t.color : 'var(--bg)', color: subTab === t.key ? 'white' : 'var(--ink-3)', borderRadius:10, fontSize:10, fontWeight:600}}>
                {t.count}
              </span>
            )}
          </button>
        ))}
        <div style={{marginLeft:'auto', display:'flex', gap:6}}>
          <button onClick={loadAll} className="btn-sec" style={{padding:'5px 12px', fontSize:12}}>🔄 刷新</button>
          <button onClick={() => setExportPanel(true)} className="btn-pri" style={{padding:'5px 14px', fontSize:12}}>📥 导出报表</button>
        </div>
      </div>
      
      {/* 筛选区 */}
      {subTab !== 'summary' && (
        <div className="paper rounded-2xl p-3 fade-in" style={{display:'flex', flexWrap:'wrap', gap:8, alignItems:'center'}}>
          <input type="month" value={filterMonth} onChange={e => setFilterMonth(e.target.value)}
            style={{padding:'5px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:12}} />
          
          {/* 🆕 可搜索的供应商筛选 */}
          <SearchableSupplierSelect 
            value={filterSupplier}
            onChange={setFilterSupplier}
            suppliers={suppliers}
            placeholder="全部供应商"
          />
          
          {subTab === 'aftersales' && (
            <>
              <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
                style={{padding:'5px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:12}}>
                <option value="all">全部状态</option>
                {AFTERSALE_STATUSES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
              </select>
              <select value={filterIssue} onChange={e => setFilterIssue(e.target.value)}
                style={{padding:'5px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:12}}>
                <option value="all">全部问题类型</option>
                {ISSUE_TYPES.map(i => <option key={i.key} value={i.key}>{i.label}</option>)}
              </select>
            </>
          )}
          {subTab === 'refills' && (
            <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
              style={{padding:'5px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:12}}>
              <option value="all">全部状态</option>
              {REFILL_STATUSES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
            </select>
          )}
          {subTab === 'refunds' && (
            <>
              <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
                style={{padding:'5px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:12}}>
                <option value="all">全部状态</option>
                {REFUND_STATUSES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
              </select>
              <select value={filterRefundType} onChange={e => setFilterRefundType(e.target.value)}
                style={{padding:'5px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:12}}>
                <option value="all">全部退款类型</option>
                {REFUND_TYPES.map(t => <option key={t.key} value={t.key}>{t.label}</option>)}
              </select>
            </>
          )}
          
          {isAdmin && (
            <select value={filterOwner} onChange={e => setFilterOwner(e.target.value)}
              style={{padding:'5px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:12}}>
              <option value="all">全部员工</option>
              {employees.filter(e => e.role !== 'finance').map(e => <option key={e.id} value={e.id}>{e.name}{e.alias ? ' ' + e.alias : ''}</option>)}
            </select>
          )}
          
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 搜索订单/客户/产品/备注..."
            style={{flex:1, minWidth:180, padding:'5px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:12}} />
          
          {(filterSupplier || filterStatus !== 'all' || filterIssue !== 'all' || filterRefundType !== 'all' || filterOwner !== 'all' || search) && (
            <button onClick={() => { setFilterSupplier(''); setFilterStatus('all'); setFilterIssue('all'); setFilterRefundType('all'); setFilterOwner('all'); setSearch(''); }}
              className="btn-ghost" style={{padding:'5px 10px', fontSize:11}}>清除筛选</button>
          )}
        </div>
      )}
      
      {/* 内容区 */}
      {subTab === 'aftersales' && (
        <>
          <CompletionStatsBanner
            items={aftersales}
            title="售后完成统计"
            icon="🔧"
            color="#ea580c"
            completedStatuses={['returned', 'customer_refund', 'closed']}
          />
          <AftersalesTable items={filteredAftersales} employees={employees} suppliers={suppliers} user={user} isAdmin={isAdmin}
            onEdit={(e) => setEditEvent({ kind:'aftersale', event:e })}
            onDelete={(id) => deleteEvent('aftersale', id)}
            onUpdateStatus={updateAftersaleStatus} />
        </>
      )}
      {subTab === 'refills' && (
        <>
          <CompletionStatsBanner
            items={refills}
            title="补件完成统计"
            icon="📦"
            color="#0369a1"
            completedStatuses={['delivered']}
          />
          <RefillsTable items={filteredRefills} employees={employees} suppliers={suppliers} user={user} isAdmin={isAdmin}
            onEdit={(e) => setEditEvent({ kind:'refill', event:e })}
            onDelete={(id) => deleteEvent('refill', id)}
            onUpdateStatus={updateRefillStatus} />
        </>
      )}
      {subTab === 'refunds' && (
        <>
          {/* 🆕 fix9b: 退款金额汇总(时间筛选 + 按网站分布) */}
          <AmountSummaryWidget
            title="退款金额汇总"
            icon="💰"
            color="#dc2626"
            items={refunds}
            statusLabels={{
              pending:   { label:'待审核',  color:'#ca8a04', bg:'#fef9c3' },
              approved:  { label:'已审核·待退', color:'#0369a1', bg:'#e0f2fe' },
              completed: { label:'已完成',  color:'#16a34a', bg:'#dcfce7' },
              rejected:  { label:'已拒绝',  color:'#6b7280', bg:'#f3f4f6' },
            }}
            getSite={r => r.site || r.website || null}
          />
          <RefundsTable items={filteredRefunds} employees={employees} suppliers={suppliers} user={user} isFinance={isFinance}
            canRefundReview={isFinance || (typeof window !== 'undefined' && window.__canProcessRefund?.(user))}
            onEdit={(e) => setEditEvent({ kind:'refund', event:e })}
            onDelete={(id) => deleteEvent('refund', id)}
            onReview={(refund) => setRefundReview(refund)} />
        </>
      )}
      {subTab === 'summary' && (
        <SummaryPanel stats={monthlyStats} filterMonth={filterMonth} setFilterMonth={setFilterMonth} 
          aftersales={aftersales} refunds={refunds} refills={refills} suppliers={suppliers} />
      )}
      
      {/* 事件编辑器 */}
      {editEvent && (
        <EventEditorModal
          kind={editEvent.kind}
          record={null}
          existingEvent={editEvent.event}
          suppliers={suppliers}
          user={user}
          onClose={() => setEditEvent(null)}
          onSaved={(saved) => {
            if (editEvent.kind === 'aftersale') setAftersales(prev => prev.map(a => a.id === saved.id ? saved : a));
            else if (editEvent.kind === 'refill') setRefills(prev => prev.map(r => r.id === saved.id ? saved : r));
            else setRefunds(prev => prev.map(r => r.id === saved.id ? saved : r));
            toast('✓ 已更新');
          }}
        />
      )}
      
      {/* 退款审核 modal */}
      {refundReview && (
        <RefundReviewModal refund={refundReview} user={user} onClose={() => setRefundReview(null)} onSubmit={reviewRefund} />
      )}
      
      {/* 导出报表 */}
      {exportPanel && (
        <ExportPanel onClose={() => setExportPanel(false)}
          aftersales={filteredAftersales} refills={filteredRefills} refunds={filteredRefunds}
          suppliers={suppliers} employees={employees}
          subTab={subTab} filterMonth={filterMonth} toast={toast} />
      )}
    </div>
  );
};

// ============================================================
// 售后清单表格
// ============================================================
const AftersalesTable = ({ items, employees, suppliers, user, isAdmin, onEdit, onDelete, onUpdateStatus }) => {
  const [openImageId, setOpenImageId] = useState(null);
  
  if (items.length === 0) return (
    <div className="paper rounded-2xl p-12 fade-in" style={{textAlign:'center', color:'var(--ink-3)', fontSize:13}}>
      🎉 暂无符合条件的售后记录
    </div>
  );
  
  return (
    <>
      <div className="paper rounded-2xl overflow-hidden fade-in">
        <div className="overflow-x-auto">
          <table style={{minWidth:'1200px'}}>
            <thead>
              <tr>
                <th style={{width:'36px'}}>#</th>
                <th style={{width:'85px'}}>日期</th>
                <th style={{width:'120px'}}>订单号</th>
                <th style={{width:'100px'}}>供应商</th>
                <th>售后原因</th>
                <th style={{width:'100px'}}>图片</th>
                <th style={{width:'100px'}}>已处理日期</th>
                <th style={{width:'90px'}}>创建人</th>
                <th style={{width:'110px'}}>状态</th>
                <th style={{width:'80px'}}>操作</th>
              </tr>
            </thead>
            <tbody>
              {items.map((e, idx) => {
                const issue = ISSUE_TYPES.find(i => i.key === e.issue_type);
                const status = AFTERSALE_STATUSES.find(s => s.key === e.status);
                const creator = employees.find(emp => emp.id === e.created_by);
                const dispDate = (e.created_at || '').slice(5, 10).replace('-', '.');
                const remindDate = e.last_remind_date ? `${e.last_remind_date.slice(5).replace('-', '.')}已催` : '';
                const returnDate = e.return_date ? `${e.return_date.slice(5).replace('-', '.')}已回` : '';
                return (
                  <tr key={e.id}>
                    <td>{idx + 1}</td>
                    <td style={{fontSize:12}}>{dispDate}</td>
                    <td style={{fontSize:12, fontWeight:600, color:'var(--ink)'}}>{e.order_ref}</td>
                    <td style={{fontSize:12}}>{e.supplier_name || '-'}</td>
                    <td style={{fontSize:12, lineHeight:1.4}}>
                      {issue && <span style={{padding:'1px 5px', background: issue.color + '15', color: issue.color, borderRadius:3, fontSize:10, fontWeight:600, marginRight:4}}>{issue.label}{e.issue_type === 'other' && e.issue_type_custom ? `: ${e.issue_type_custom}` : ''}</span>}
                      {e.damaged_part && <span style={{color:'var(--ink-3)', marginRight:4}}>· {e.damaged_part}</span>}
                      {e.issue_detail && <div style={{color:'var(--ink-2)', marginTop:2, fontSize:11, maxWidth:'400px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{e.issue_detail}</div>}
                    </td>
                    <td>
                      {e.attachments && e.attachments.length > 0 ? (
                        <button onClick={() => setOpenImageId(e.id)}
                          style={{display:'flex', alignItems:'center', gap:4, padding:'3px 6px', background:'#f0f9ff', color:'#0369a1', border:'1px solid #7dd3fc', borderRadius:5, cursor:'pointer', fontFamily:'inherit', fontSize:11, fontWeight:600}}>
                          📷 {e.attachments.length}
                        </button>
                      ) : '-'}
                    </td>
                    <td style={{fontSize:11, color:'var(--ink-2)'}}>
                      {remindDate && <div>{remindDate}</div>}
                      {returnDate && <div style={{color:'#16a34a'}}>{returnDate}</div>}
                    </td>
                    <td style={{fontSize:11, color:'var(--ink-3)'}}>{creator?.name || e.created_by_name || '?'}</td>
                    <td>
                      <select value={e.status} onChange={ev => onUpdateStatus(e.id, ev.target.value, ev.target.value === 'reminded' ? { last_remind_date: new Date().toISOString().slice(0,10) } : ev.target.value === 'returned' ? { return_date: new Date().toISOString().slice(0,10) } : {})}
                        style={{padding:'3px 6px', fontSize:11, border:'1px solid ' + (status?.color || 'var(--line)'), borderRadius:4, background: status?.bg || 'white', color: status?.color || 'var(--ink-2)', fontWeight:600, cursor:'pointer'}}>
                        {AFTERSALE_STATUSES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
                      </select>
                    </td>
                    <td>
                      <div style={{display:'flex', gap:2}}>
                        {/* 🆕 fix9b: 快捷标记已完成 — 一键设为 closed(售后) */}
                        {e.status !== 'closed' && e.status !== 'customer_refund' && (
                          <button onClick={() => {
                            if (confirm(`将「${e.order_ref}」标记为已完成?`)) onUpdateStatus(e.id, 'closed');
                          }} className="btn-ghost" style={{padding:'3px 6px', fontSize:11, color:'#16a34a'}} title="标记已完成">✓</button>
                        )}
                        <button onClick={() => onEdit(e)} className="btn-ghost" style={{padding:'3px 6px', fontSize:11}} title="编辑">✏️</button>
                        {(isAdmin || e.created_by === user.id) && (
                          <button onClick={() => onDelete(e.id)} className="btn-ghost" style={{padding:'3px 6px', fontSize:11, color:'var(--bad)'}} title="删除">🗑</button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {openImageId && (
        <ImageGalleryModal event={items.find(e => e.id === openImageId)} onClose={() => setOpenImageId(null)} />
      )}
    </>
  );
};

// ============================================================
// 补件追踪表格
// ============================================================
const RefillsTable = ({ items, employees, suppliers, user, isAdmin, onEdit, onDelete, onUpdateStatus }) => {
  const [openImageId, setOpenImageId] = useState(null);
  if (items.length === 0) return (
    <div className="paper rounded-2xl p-12 fade-in" style={{textAlign:'center', color:'var(--ink-3)', fontSize:13}}>
      📦 暂无符合条件的补件记录
    </div>
  );
  return (
    <>
      <div className="paper rounded-2xl overflow-hidden fade-in">
        <div className="overflow-x-auto">
          <table style={{minWidth:'1100px'}}>
            <thead>
              <tr>
                <th style={{width:'36px'}}>#</th>
                <th style={{width:'85px'}}>日期</th>
                <th style={{width:'120px'}}>订单号</th>
                <th style={{width:'100px'}}>供应商</th>
                <th>补件清单</th>
                <th style={{width:'80px'}}>图片</th>
                <th style={{width:'95px'}}>预计发货</th>
                <th style={{width:'95px'}}>实际发货</th>
                <th style={{width:'90px'}}>创建人</th>
                <th style={{width:'95px'}}>状态</th>
                <th style={{width:'80px'}}>操作</th>
              </tr>
            </thead>
            <tbody>
              {items.map((e, idx) => {
                const status = REFILL_STATUSES.find(s => s.key === e.status);
                const creator = employees.find(emp => emp.id === e.created_by);
                const dispDate = (e.created_at || '').slice(5, 10).replace('-', '.');
                const itemsList = (e.items || []).map(it => `${it.item || '?'} × ${it.qty || 1}${it.unit || ''}`).join('，');
                return (
                  <tr key={e.id}>
                    <td>{idx + 1}</td>
                    <td style={{fontSize:12}}>{dispDate}</td>
                    <td style={{fontSize:12, fontWeight:600}}>{e.order_ref}</td>
                    <td style={{fontSize:12}}>{e.supplier_name || '-'}</td>
                    <td style={{fontSize:12, lineHeight:1.4}}>{itemsList || '-'}</td>
                    <td>
                      {e.attachments && e.attachments.length > 0 ? (
                        <button onClick={() => setOpenImageId(e.id)}
                          style={{padding:'3px 6px', background:'#f0f9ff', color:'#0369a1', border:'1px solid #7dd3fc', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
                          📷 {e.attachments.length}
                        </button>
                      ) : '-'}
                    </td>
                    <td style={{fontSize:11, color:'var(--ink-2)'}}>{e.expected_ship_date || '-'}</td>
                    <td style={{fontSize:11, color:'#16a34a', fontWeight:e.actual_ship_date ? 600 : 400}}>{e.actual_ship_date || '-'}</td>
                    <td style={{fontSize:11, color:'var(--ink-3)'}}>{creator?.name || e.created_by_name || '?'}</td>
                    <td>
                      <select value={e.status} onChange={ev => onUpdateStatus(e.id, ev.target.value)}
                        style={{padding:'3px 6px', fontSize:11, border:'1px solid ' + (status?.color || 'var(--line)'), borderRadius:4, background: (status?.color || 'gray') + '15', color: status?.color || 'var(--ink-2)', fontWeight:600, cursor:'pointer'}}>
                        {REFILL_STATUSES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
                      </select>
                    </td>
                    <td>
                      <div style={{display:'flex', gap:2}}>
                        {/* 🆕 fix9b: 快捷标记已签收 — 一键设为 delivered(补件完成) */}
                        {e.status !== 'delivered' && e.status !== 'cancelled' && (
                          <button onClick={() => {
                            if (confirm(`将「${e.order_ref}」标记为已签收?`)) onUpdateStatus(e.id, 'delivered');
                          }} className="btn-ghost" style={{padding:'3px 6px', fontSize:11, color:'#16a34a'}} title="标记已签收(完成)">✓</button>
                        )}
                        <button onClick={() => onEdit(e)} className="btn-ghost" style={{padding:'3px 6px', fontSize:11}}>✏️</button>
                        {(isAdmin || e.created_by === user.id) && (
                          <button onClick={() => onDelete(e.id)} className="btn-ghost" style={{padding:'3px 6px', fontSize:11, color:'var(--bad)'}}>🗑</button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {openImageId && (
        <ImageGalleryModal event={items.find(e => e.id === openImageId)} onClose={() => setOpenImageId(null)} />
      )}
    </>
  );
};

// ============================================================
// 退款管理表格 + 两步审核
// ============================================================
const RefundsTable = ({ items, employees, suppliers, user, isFinance, canRefundReview, onEdit, onDelete, onReview }) => {
  const [openImageId, setOpenImageId] = useState(null);
  // 顶部汇总
  const summary = useMemo(() => {
    const byStatus = items.reduce((acc, r) => { acc[r.status] = (acc[r.status] || 0) + 1; return acc; }, {});
    const totalPending = items.filter(r => r.status === 'pending').reduce((s,r) => s + parseFloat(r.amount || 0), 0);
    const totalCompleted = items.filter(r => r.status === 'completed').reduce((s,r) => s + parseFloat(r.amount || 0), 0);
    return { byStatus, totalPending, totalCompleted };
  }, [items]);
  
  if (items.length === 0) return (
    <div className="paper rounded-2xl p-12 fade-in" style={{textAlign:'center', color:'var(--ink-3)', fontSize:13}}>
      💰 暂无符合条件的退款记录
    </div>
  );
  return (
    <>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:8, marginBottom:8}}>
        <div className="paper rounded-xl p-3" style={{background:'#fef9c3', border:'1px solid #fde68a'}}>
          <div style={{fontSize:11, color:'#854d0e'}}>待审核</div>
          <div style={{fontSize:20, fontWeight:700, color:'#a16207'}}>{summary.byStatus.pending || 0}</div>
          <div style={{fontSize:11, color:'#854d0e'}}>USD {summary.totalPending.toFixed(2)}</div>
        </div>
        <div className="paper rounded-xl p-3" style={{background:'#e0f2fe', border:'1px solid #bae6fd'}}>
          <div style={{fontSize:11, color:'#075985'}}>已审核（待退）</div>
          <div style={{fontSize:20, fontWeight:700, color:'#0369a1'}}>{summary.byStatus.approved || 0}</div>
        </div>
        <div className="paper rounded-xl p-3" style={{background:'#dcfce7', border:'1px solid #86efac'}}>
          <div style={{fontSize:11, color:'#14532d'}}>已完成</div>
          <div style={{fontSize:20, fontWeight:700, color:'#15803d'}}>{summary.byStatus.completed || 0}</div>
          <div style={{fontSize:11, color:'#14532d'}}>USD {summary.totalCompleted.toFixed(2)}</div>
        </div>
        <div className="paper rounded-xl p-3" style={{background:'#fef2f2', border:'1px solid #fca5a5'}}>
          <div style={{fontSize:11, color:'#7f1d1d'}}>已拒绝</div>
          <div style={{fontSize:20, fontWeight:700, color:'#991b1b'}}>{summary.byStatus.rejected || 0}</div>
        </div>
      </div>
      <div className="paper rounded-2xl overflow-hidden fade-in">
        <div className="overflow-x-auto">
          <table style={{minWidth:'1200px'}}>
            <thead>
              <tr>
                <th style={{width:'36px'}}>#</th>
                <th style={{width:'85px'}}>日期</th>
                <th style={{width:'110px'}}>订单号</th>
                <th style={{width:'90px'}}>创建人</th>
                <th>退款原因</th>
                <th style={{width:'100px'}}>类型</th>
                <th style={{width:'90px'}}>金额</th>
                <th style={{width:'130px'}}>支付方式</th>
                <th style={{width:'70px'}}>图片</th>
                <th style={{width:'95px'}}>状态</th>
                <th style={{width:'110px'}}>操作</th>
              </tr>
            </thead>
            <tbody>
              {items.map((r, idx) => {
                const type = REFUND_TYPES.find(t => t.key === r.refund_type);
                const status = REFUND_STATUSES.find(s => s.key === r.status);
                const pay = REFUND_PAYMENT_METHODS.find(p => p.key === r.payment_method);
                const creator = employees.find(emp => emp.id === r.created_by);
                const dispDate = (r.created_at || '').slice(5, 10).replace('-', '.');
                return (
                  <tr key={r.id}>
                    <td>{idx + 1}</td>
                    <td style={{fontSize:12}}>{dispDate}</td>
                    <td style={{fontSize:12, fontWeight:600}}>{r.order_ref}</td>
                    <td style={{fontSize:11, color:'var(--ink-3)'}}>{creator?.name || r.created_by_name || '?'}</td>
                    <td style={{fontSize:12, lineHeight:1.4}}>
                      {r.product_name && <div style={{fontWeight:600, color:'var(--ink-2)'}}>{r.product_name}</div>}
                      <div style={{color:'var(--ink-2)', fontSize:11, maxWidth:'400px', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{r.refund_reason}</div>
                    </td>
                    <td>
                      {type && <span style={{padding:'2px 8px', background: type.bg, color: type.color, borderRadius:10, fontSize:10, fontWeight:600}}>{type.label}{r.refund_type === 'other' && r.refund_type_custom ? `: ${r.refund_type_custom}` : ''}</span>}
                    </td>
                    <td style={{fontSize:13, fontWeight:600, color:'#dc2626'}}>{r.currency} {parseFloat(r.amount).toFixed(2)}</td>
                    <td style={{fontSize:11}}>
                      {pay && <span style={{color: pay.color, fontWeight:500}}>{pay.label}{r.payment_method === 'other' && r.payment_method_custom ? `: ${r.payment_method_custom}` : ''}</span>}
                    </td>
                    <td>
                      {r.attachments && r.attachments.length > 0 ? (
                        <button onClick={() => setOpenImageId(r.id)}
                          style={{padding:'3px 6px', background:'#f0f9ff', color:'#0369a1', border:'1px solid #7dd3fc', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
                          📷 {r.attachments.length}
                        </button>
                      ) : '-'}
                    </td>
                    <td>
                      <span style={{padding:'3px 8px', background: status?.bg, color: status?.color, borderRadius:5, fontSize:11, fontWeight:600}}>
                        {status?.label}
                      </span>
                    </td>
                    <td>
                      <div style={{display:'flex', gap:2, flexWrap:'wrap'}}>
                        {(canRefundReview ?? isFinance) && r.status === 'pending' && (
                          <button onClick={() => onReview(r)} className="btn-pri" style={{padding:'3px 8px', fontSize:11}} title="审核">审核</button>
                        )}
                        {(canRefundReview ?? isFinance) && r.status === 'approved' && (
                          <button onClick={() => onReview(r)} className="btn-pri" style={{padding:'3px 8px', fontSize:11, background:'#16a34a'}} title="标记已完成">✓ 完成</button>
                        )}
                        <button onClick={() => onEdit(r)} className="btn-ghost" style={{padding:'3px 6px', fontSize:11}}>✏️</button>
                        {(isFinance || r.created_by === user.id) && r.status === 'pending' && (
                          <button onClick={() => onDelete(r.id)} className="btn-ghost" style={{padding:'3px 6px', fontSize:11, color:'var(--bad)'}}>🗑</button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {openImageId && (
        <ImageGalleryModal event={items.find(e => e.id === openImageId)} onClose={() => setOpenImageId(null)} />
      )}
    </>
  );
};

// ============================================================
// 退款审核 modal (财务审批 + 完成)
// ============================================================
const RefundReviewModal = ({ refund, user, onClose, onSubmit }) => {
  const [notes, setNotes] = useState('');
  const [externalRefundId, setExternalRefundId] = useState('');
  const isApproveStage = refund.status === 'pending';
  const isCompleteStage = refund.status === 'approved';
  const type = REFUND_TYPES.find(t => t.key === refund.refund_type);
  const pay = REFUND_PAYMENT_METHODS.find(p => p.key === refund.payment_method);
  
  return (
    <div onClick={onClose}
      style={{position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center', padding:20}}>
      <div onClick={e => e.stopPropagation()}
        style={{background:'white', borderRadius:14, maxWidth:540, width:'100%', padding:22, maxHeight:'90vh', overflowY:'auto', overflowX:'hidden'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14}}>
          <div className="font-display" style={{fontSize:17, fontWeight:600, color:'#dc2626'}}>
            💰 {isApproveStage ? '审核退款' : '标记退款完成'}
          </div>
          <button className="btn-sec" onClick={onClose} style={{padding:'4px 12px'}}>×</button>
        </div>
        
        {/* 退款信息预览 */}
        <div style={{padding:12, background:'#fef2f2', border:'1px solid #fca5a5', borderRadius:8, marginBottom:14, fontSize:12}}>
          <div style={{display:'flex', justifyContent:'space-between', marginBottom:6}}>
            <span style={{fontWeight:600, color:'#7f1d1d'}}>订单：{refund.order_ref}</span>
            <span style={{fontSize:16, fontWeight:700, color:'#dc2626'}}>{refund.currency} {parseFloat(refund.amount).toFixed(2)}</span>
          </div>
          {refund.product_name && <div style={{color:'var(--ink-2)', marginBottom:4}}>{refund.product_name}</div>}
          <div style={{display:'flex', gap:6, flexWrap:'wrap', marginBottom:6}}>
            {type && <span style={{padding:'2px 8px', background:type.bg, color:type.color, borderRadius:10, fontSize:10, fontWeight:600}}>{type.label}</span>}
            {pay && <span style={{padding:'2px 8px', background:pay.color + '20', color:pay.color, borderRadius:10, fontSize:10, fontWeight:600}}>{pay.label}</span>}
          </div>
          <div style={{color:'#7f1d1d', whiteSpace:'pre-wrap', lineHeight:1.5}}>{refund.refund_reason}</div>
          <div style={{fontSize:10, color:'var(--ink-3)', marginTop:6, borderTop:'1px dashed #fca5a5', paddingTop:6}}>
            创建人：{refund.created_by_name} · {(refund.created_at || '').slice(0,10)}
          </div>
        </div>
        
        {/* 审核备注 */}
        <div style={{marginBottom:14}}>
          <label style={{fontSize:12, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:6}}>
            {isApproveStage ? '审核备注（拒绝时必填原因）' : '完成备注'}
          </label>
          <textarea value={notes} onChange={e => setNotes(e.target.value)}
            placeholder={isApproveStage ? '可以填写审核意见或拒绝原因...' : '可以填写实际退款日期、备注等...'}
            style={{width:'100%', minHeight:70, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical'}} />
        </div>
        
        {/* 完成阶段：外部退款单号 */}
        {isCompleteStage && (
          <div style={{marginBottom:14}}>
            <label style={{fontSize:12, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:6}}>
              外部平台退款单号（如 Shopify/Stripe 的退款 ID）
            </label>
            <input value={externalRefundId} onChange={e => setExternalRefundId(e.target.value)}
              placeholder="re_xxxxxxxxxx"
              style={{width:'100%', padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
          </div>
        )}
        
        {/* 操作按钮 */}
        <div style={{display:'flex', gap:8, justifyContent:'flex-end'}}>
          <button onClick={onClose} className="btn-sec" style={{padding:'8px 16px'}}>取消</button>
          {isApproveStage && (
            <>
              <button onClick={() => onSubmit(refund, 'reject', notes)}
                disabled={!notes.trim()}
                style={{padding:'8px 16px', background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13, opacity: notes.trim() ? 1 : 0.5}}>
                ✗ 拒绝
              </button>
              <button onClick={() => onSubmit(refund, 'approve', notes)}
                style={{padding:'8px 16px', background:'#0369a1', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13}}>
                ✓ 审核通过
              </button>
            </>
          )}
          {isCompleteStage && (
            <button onClick={() => onSubmit(refund, 'complete', notes, { external_refund_id: externalRefundId })}
              style={{padding:'8px 16px', background:'#16a34a', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13}}>
              ✓ 标记退款完成
            </button>
          )}
        </div>
        
        <div style={{fontSize:10, color:'var(--ink-4)', marginTop:12, lineHeight:1.5, padding:'8px 10px', background:'#f9fafb', borderRadius:6}}>
          💡 {isApproveStage 
            ? '审核通过后，请到 Shopify/Stripe 后台实际操作退款，完成后回到这里点 "✓ 完成"' 
            : '标记完成后，本笔退款将计入月度统计。请确保 Shopify/Stripe 后台已经实际完成退款。'}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 图片图廊 modal (点击图片缩略图后弹出大图浏览)
// ============================================================
const ImageGalleryModal = ({ event, onClose }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  if (!event || !event.attachments || event.attachments.length === 0) return null;
  const imgs = event.attachments;
  const current = imgs[activeIdx];
  
  return (
    <div onClick={onClose}
      style={{position:'fixed', inset:0, background:'rgba(0,0,0,.85)', zIndex:10000, display:'flex', alignItems:'center', justifyContent:'center', padding:20}}>
      <div onClick={e => e.stopPropagation()} style={{maxWidth:'90vw', maxHeight:'90vh', display:'flex', flexDirection:'column', gap:10}}>
        <div style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', position:'relative', minHeight:0}}>
          {imgs.length > 1 && (
            <button onClick={() => setActiveIdx((activeIdx - 1 + imgs.length) % imgs.length)}
              style={{position:'absolute', left:-50, top:'50%', transform:'translateY(-50%)', background:'rgba(255,255,255,.2)', color:'white', border:'none', width:40, height:40, borderRadius:'50%', cursor:'pointer', fontSize:20}}>‹</button>
          )}
          <img src={current.url} style={{maxWidth:'100%', maxHeight:'80vh', objectFit:'contain'}} />
          {imgs.length > 1 && (
            <button onClick={() => setActiveIdx((activeIdx + 1) % imgs.length)}
              style={{position:'absolute', right:-50, top:'50%', transform:'translateY(-50%)', background:'rgba(255,255,255,.2)', color:'white', border:'none', width:40, height:40, borderRadius:'50%', cursor:'pointer', fontSize:20}}>›</button>
          )}
        </div>
        {imgs.length > 1 && (
          <div style={{display:'flex', gap:6, justifyContent:'center', flexWrap:'wrap'}}>
            {imgs.map((im, i) => (
              <img key={i} src={im.url} onClick={() => setActiveIdx(i)}
                style={{width:50, height:50, objectFit:'cover', borderRadius:4, cursor:'pointer', border: i === activeIdx ? '2px solid white' : '2px solid transparent', opacity: i === activeIdx ? 1 : 0.6}} />
            ))}
          </div>
        )}
        <div style={{textAlign:'center', color:'rgba(255,255,255,.8)', fontSize:12}}>
          {activeIdx + 1} / {imgs.length} · {current.label || ''}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 🆕 fix9b: 金额汇总组件 (退款 / 拒付)
// 时间筛选: 3/7/14/30/90 天 + 季度 + 年 + 自定义
// 显示: 总金额, 件数, 按网站分布, 按状态分布
// ============================================================
const AmountSummaryWidget = ({ title, icon, color, items, statusLabels, statusKey = 'status', amountKey = 'amount', getSite }) => {
  const [range, setRange] = useState('7');  // 字符串: '3'/'7'/'14'/'30'/'90'/'quarter'/'year'/'all'
  
  // 计算时间筛选范围
  const cutoffDate = useMemo(() => {
    const now = new Date();
    if (range === 'all') return null;
    if (range === 'year') {
      return new Date(now.getFullYear(), 0, 1);  // 本年 1 月 1 日
    }
    if (range === 'quarter') {
      const q = Math.floor(now.getMonth() / 3);
      return new Date(now.getFullYear(), q * 3, 1);  // 本季度起始
    }
    const days = parseInt(range, 10);
    const d = new Date(now);
    d.setDate(d.getDate() - days);
    return d;
  }, [range]);
  
  const filtered = useMemo(() => {
    if (!cutoffDate) return items || [];
    return (items || []).filter(it => {
      if (!it.created_at) return false;
      return new Date(it.created_at) >= cutoffDate;
    });
  }, [items, cutoffDate]);
  
  // 按货币累加(主要 USD,可能有 CNY/EUR 等)
  const totalsByCurrency = useMemo(() => {
    const m = {};
    filtered.forEach(it => {
      const cur = (it.currency || 'USD').toUpperCase();
      const amt = parseFloat(it[amountKey] || 0) || 0;
      if (!m[cur]) m[cur] = 0;
      m[cur] += amt;
    });
    return m;
  }, [filtered, amountKey]);
  
  // 按网站分布
  const byWebsite = useMemo(() => {
    const m = {};
    filtered.forEach(it => {
      const site = (getSite ? getSite(it) : it.site) || '(未填)';
      const amt = parseFloat(it[amountKey] || 0) || 0;
      const cur = (it.currency || 'USD').toUpperCase();
      if (!m[site]) m[site] = { count: 0, totals: {} };
      m[site].count++;
      if (!m[site].totals[cur]) m[site].totals[cur] = 0;
      m[site].totals[cur] += amt;
    });
    return Object.entries(m)
      .map(([site, v]) => ({ site, ...v }))
      .sort((a, b) => b.count - a.count);
  }, [filtered, amountKey, getSite]);
  
  // 按状态分布
  const byStatus = useMemo(() => {
    const m = {};
    filtered.forEach(it => {
      const s = it[statusKey] || '(未填)';
      if (!m[s]) m[s] = 0;
      m[s]++;
    });
    return Object.entries(m).map(([k, v]) => ({ status: k, count: v }));
  }, [filtered, statusKey]);
  
  const formatAmount = (cur, amt) => {
    const sym = cur === 'USD' ? '$' : cur === 'EUR' ? '€' : cur === 'CNY' ? '¥' : cur === 'GBP' ? '£' : '';
    return `${sym}${amt.toFixed(2)}${sym ? '' : ' ' + cur}`;
  };
  
  const rangeButtons = [
    { key:'3',       label:'3 天' },
    { key:'7',       label:'7 天' },
    { key:'14',      label:'14 天' },
    { key:'30',      label:'30 天' },
    { key:'90',      label:'90 天' },
    { key:'quarter', label:'本季度' },
    { key:'year',    label:'本年度' },
    { key:'all',     label:'全部' },
  ];
  
  // 计算 cutoff 描述文字
  const rangeDesc = (() => {
    if (range === 'all') return '全部历史';
    if (range === 'year') return `${new Date().getFullYear()} 年至今`;
    if (range === 'quarter') {
      const q = Math.floor(new Date().getMonth() / 3) + 1;
      return `${new Date().getFullYear()} 年 Q${q} 至今`;
    }
    return `最近 ${range} 天`;
  })();
  
  return (
    <div className="paper rounded-2xl p-4 fade-in" style={{borderLeft: `4px solid ${color}`, marginBottom:12}}>
      {/* 顶部 - 标题 + 时间筛选 */}
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:10, marginBottom:12}}>
        <div>
          <div className="font-display" style={{fontSize:15, fontWeight:600, color, display:'flex', alignItems:'center', gap:6}}>
            <span style={{fontSize:18}}>{icon}</span>{title}
          </div>
          <div style={{fontSize:11, color:'var(--ink-3)', marginTop:2}}>{rangeDesc} · 共 {filtered.length} 笔</div>
        </div>
        <div style={{display:'flex', gap:4, flexWrap:'wrap'}}>
          {rangeButtons.map(b => (
            <button key={b.key} onClick={() => setRange(b.key)}
              style={{
                padding:'4px 10px', fontSize:11, fontFamily:'inherit', cursor:'pointer',
                borderRadius:6, border:'1px solid ' + (range === b.key ? color : 'var(--line)'),
                background: range === b.key ? color : 'white',
                color: range === b.key ? 'white' : 'var(--ink-2)',
                fontWeight: range === b.key ? 600 : 500,
              }}>
              {b.label}
            </button>
          ))}
        </div>
      </div>
      
      {filtered.length === 0 ? (
        <div style={{padding:'18px 10px', textAlign:'center', color:'var(--ink-4)', fontSize:13, background:'#fafaf7', borderRadius:8}}>
          {rangeDesc}内没有数据
        </div>
      ) : (
        <>
          {/* 大金额展示 - 按货币 */}
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:8, marginBottom:12}}>
            {Object.entries(totalsByCurrency).map(([cur, amt]) => (
              <div key={cur} style={{padding:'12px 14px', background:`${color}10`, border:`1px solid ${color}40`, borderRadius:10}}>
                <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:500}}>{cur} 累计</div>
                <div style={{fontSize:22, fontWeight:700, color, marginTop:2, letterSpacing:.2}}>
                  {formatAmount(cur, amt)}
                </div>
                <div style={{fontSize:10, color:'var(--ink-4)', marginTop:1}}>
                  {filtered.filter(f => (f.currency || 'USD').toUpperCase() === cur).length} 笔
                </div>
              </div>
            ))}
          </div>
          
          {/* 网站分布 */}
          {byWebsite.length > 0 && (
            <div style={{marginBottom:10}}>
              <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:6}}>📍 按网站分布</div>
              <div style={{display:'flex', flexWrap:'wrap', gap:6}}>
                {byWebsite.map(w => (
                  <div key={w.site} style={{padding:'5px 10px', background:'white', border:'1px solid var(--line)', borderRadius:14, fontSize:11, display:'flex', alignItems:'center', gap:6}}>
                    <span style={{fontWeight:700, color:'var(--ink)'}}>{w.site}</span>
                    <span style={{padding:'1px 5px', background:`${color}20`, color, borderRadius:8, fontWeight:600}}>{w.count}</span>
                    <span style={{color:'var(--ink-3)', fontSize:10}}>
                      {Object.entries(w.totals).map(([c, a]) => formatAmount(c, a)).join(' · ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* 状态分布 */}
          {byStatus.length > 0 && statusLabels && (
            <div>
              <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:6}}>🏷 按状态分布</div>
              <div style={{display:'flex', flexWrap:'wrap', gap:6}}>
                {byStatus.map(s => {
                  const lab = statusLabels[s.status] || { label: s.status, color:'#6b7280', bg:'#f3f4f6' };
                  return (
                    <div key={s.status} style={{padding:'5px 10px', background: lab.bg || '#f3f4f6', border:'1px solid var(--line)', borderRadius:14, fontSize:11, display:'flex', alignItems:'center', gap:6}}>
                      <span style={{color: lab.color, fontWeight:600}}>{lab.label}</span>
                      <span style={{padding:'1px 5px', background:'white', color: lab.color, borderRadius:8, fontWeight:600}}>{s.count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

// ============================================================
// 🆕 fix9b: 完成率统计 banner (售后 / 补件)
// 展示最近 3/7/14/30/60 天的总数 + 已完成 + 完成率
// ============================================================
const CompletionStatsBanner = ({ items, title, icon, color, completedStatuses, onQuickComplete }) => {
  const ranges = [3, 7, 14, 30, 60];
  
  const calcStats = (days) => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    const inRange = (items || []).filter(it => it.created_at && new Date(it.created_at) >= cutoff);
    const completed = inRange.filter(it => completedStatuses.includes(it.status));
    return { total: inRange.length, completed: completed.length, pending: inRange.length - completed.length };
  };
  
  return (
    <div className="paper rounded-2xl fade-in" style={{padding:12, borderLeft:`4px solid ${color}`, marginBottom:10}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8, marginBottom:8}}>
        <div className="font-display" style={{fontSize:13, fontWeight:600, color, display:'flex', alignItems:'center', gap:6}}>
          <span style={{fontSize:16}}>{icon}</span>{title}
        </div>
        <div style={{fontSize:10, color:'var(--ink-4)'}}>已完成状态: {completedStatuses.join(' / ')}</div>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:6}}>
        {ranges.map(d => {
          const s = calcStats(d);
          const pct = s.total === 0 ? 0 : Math.round(s.completed / s.total * 100);
          return (
            <div key={d} style={{padding:'8px 6px', background:'white', border:'1px solid var(--line)', borderRadius:8, textAlign:'center'}}>
              <div style={{fontSize:10, color:'var(--ink-3)', fontWeight:500}}>最近 {d} 天</div>
              <div style={{fontSize:20, fontWeight:700, color, marginTop:3, lineHeight:1}}>{s.total}</div>
              <div style={{display:'flex', justifyContent:'center', gap:4, marginTop:4, fontSize:10}}>
                <span style={{color:'#16a34a'}}>✓{s.completed}</span>
                {s.pending > 0 && <span style={{color:'#ca8a04'}}>⏳{s.pending}</span>}
              </div>
              <div style={{
                marginTop:4, height:3, background:'#f3f4f6', borderRadius:2, overflow:'hidden',
              }}>
                <div style={{
                  height:'100%',
                  width: `${pct}%`,
                  background: pct >= 80 ? '#16a34a' : pct >= 50 ? '#ca8a04' : '#dc2626',
                  transition:'width .25s',
                }} />
              </div>
              <div style={{fontSize:9, color:'var(--ink-4)', marginTop:2}}>{pct}% 完成</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ============================================================
// 月度汇总面板 + 图表
// ============================================================
const SummaryPanel = ({ stats, filterMonth, setFilterMonth, aftersales, refunds, refills, suppliers }) => {
  // 计算供应商问题排行（按售后数 + 退款金额）
  const supplierRanking = useMemo(() => {
    const map = {};
    aftersales.filter(e => {
      if (!filterMonth) return true;
      return (e.created_at || '').slice(0, 7) === filterMonth;
    }).forEach(e => {
      const k = e.supplier_name || '(未指定)';
      if (!map[k]) map[k] = { name: k, aftersales: 0, refundAmount: 0 };
      map[k].aftersales++;
    });
    refunds.filter(e => {
      if (!filterMonth) return true;
      return (e.created_at || '').slice(0, 7) === filterMonth;
    }).forEach(e => {
      if (e.status !== 'completed' && e.status !== 'approved') return;
      const k = e.supplier_name || '(未指定)';
      if (!map[k]) map[k] = { name: k, aftersales: 0, refundAmount: 0 };
      map[k].refundAmount += parseFloat(e.amount || 0);
    });
    return Object.values(map).sort((a, b) => (b.aftersales + b.refundAmount/100) - (a.aftersales + a.refundAmount/100)).slice(0, 15);
  }, [aftersales, refunds, filterMonth]);
  
  // 🆕 fix17: 产品售后排行 - 哪款产品售后次数最多
  const productRanking = useMemo(() => {
    const map = {};
    const monthFilter = (e) => !filterMonth || (e.created_at || '').slice(0, 7) === filterMonth;
    aftersales.filter(monthFilter).forEach(e => {
      const k = (e.product_name || '').trim() || '(未填产品)';
      if (!map[k]) map[k] = { name: k, aftersales: 0, refills: 0, refundAmount: 0, refundCount: 0, suppliers: new Set() };
      map[k].aftersales++;
      if (e.supplier_name) map[k].suppliers.add(e.supplier_name);
    });
    refills.filter(monthFilter).forEach(e => {
      const k = (e.product_name || '').trim() || '(未填产品)';
      if (!map[k]) map[k] = { name: k, aftersales: 0, refills: 0, refundAmount: 0, refundCount: 0, suppliers: new Set() };
      map[k].refills++;
      if (e.supplier_name) map[k].suppliers.add(e.supplier_name);
    });
    refunds.filter(monthFilter).forEach(e => {
      if (e.status !== 'completed' && e.status !== 'approved') return;
      const k = (e.product_name || '').trim() || '(未填产品)';
      if (!map[k]) map[k] = { name: k, aftersales: 0, refills: 0, refundAmount: 0, refundCount: 0, suppliers: new Set() };
      map[k].refundAmount += parseFloat(e.amount || 0);
      map[k].refundCount++;
      if (e.supplier_name) map[k].suppliers.add(e.supplier_name);
    });
    return Object.values(map)
      .map(p => ({ ...p, suppliers: Array.from(p.suppliers), total: p.aftersales + p.refills + p.refundCount }))
      .sort((a, b) => b.total - a.total || b.refundAmount - a.refundAmount)
      .slice(0, 20);
  }, [aftersales, refills, refunds, filterMonth]);
  
  return (
    <div className="space-y-4">
      <div className="paper rounded-2xl p-4 fade-in">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:10}}>
          <div>
            <div className="font-display" style={{fontSize:17, fontWeight:600}}>📊 月度汇总</div>
            <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>
              统计月份：<input type="month" value={filterMonth} onChange={e => setFilterMonth(e.target.value)}
                style={{padding:'3px 8px', border:'1px solid var(--line)', borderRadius:4, fontSize:12}} />
            </div>
          </div>
        </div>
      </div>
      
      {/* 3 大类总览 */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:10}}>
        <div className="paper rounded-2xl p-4 fade-in" style={{borderTop:'3px solid #ea580c'}}>
          <div style={{fontSize:12, color:'var(--ink-3)', fontWeight:600}}>🔧 售后总数</div>
          <div style={{fontSize:32, fontWeight:700, color:'#ea580c', marginTop:4}}>{stats.aftersales.total}</div>
          <div style={{fontSize:11, color:'var(--ink-3)', marginTop:4}}>本月新建售后事件</div>
        </div>
        <div className="paper rounded-2xl p-4 fade-in" style={{borderTop:'3px solid #0369a1'}}>
          <div style={{fontSize:12, color:'var(--ink-3)', fontWeight:600}}>📦 补件总数</div>
          <div style={{fontSize:32, fontWeight:700, color:'#0369a1', marginTop:4}}>{stats.refills.total}</div>
          <div style={{fontSize:11, color:'var(--ink-3)', marginTop:4}}>本月新建补件事件</div>
        </div>
        <div className="paper rounded-2xl p-4 fade-in" style={{borderTop:'3px solid #dc2626'}}>
          <div style={{fontSize:12, color:'var(--ink-3)', fontWeight:600}}>💰 退款金额</div>
          <div style={{fontSize:32, fontWeight:700, color:'#dc2626', marginTop:4}}>${stats.refunds.totalAmount.toFixed(2)}</div>
          <div style={{fontSize:11, color:'var(--ink-3)', marginTop:4}}>{stats.refunds.completed} 笔已审批 · {stats.refunds.pending} 笔待审</div>
        </div>
      </div>
      
      {/* 售后问题类型 + 退款类型 双柱 */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(320px, 1fr))', gap:10}}>
        <div className="paper rounded-2xl p-4 fade-in">
          <div className="font-display" style={{fontSize:14, fontWeight:600, marginBottom:10}}>🔧 售后问题分布</div>
          {Object.keys(stats.aftersales.byIssue).length === 0 ? (
            <div style={{fontSize:12, color:'var(--ink-3)', textAlign:'center', padding:'20px 0'}}>本月暂无数据</div>
          ) : (
            Object.entries(stats.aftersales.byIssue).sort((a,b) => b[1] - a[1]).map(([k, n]) => {
              const max = Math.max(...Object.values(stats.aftersales.byIssue));
              const pct = (n / max) * 100;
              return (
                <div key={k} style={{marginBottom:8}}>
                  <div style={{display:'flex', justifyContent:'space-between', fontSize:12, marginBottom:3}}>
                    <span>{k}</span>
                    <span style={{fontWeight:600}}>{n} 单</span>
                  </div>
                  <div style={{height:6, background:'var(--bg)', borderRadius:3, overflow:'hidden'}}>
                    <div style={{height:'100%', width:`${pct}%`, background:'#ea580c', borderRadius:3, transition:'width .3s'}} />
                  </div>
                </div>
              );
            })
          )}
        </div>
        
        <div className="paper rounded-2xl p-4 fade-in">
          <div className="font-display" style={{fontSize:14, fontWeight:600, marginBottom:10}}>💰 退款类型分布（按金额）</div>
          {Object.keys(stats.refunds.byTypeAmount).length === 0 ? (
            <div style={{fontSize:12, color:'var(--ink-3)', textAlign:'center', padding:'20px 0'}}>本月暂无数据</div>
          ) : (
            Object.entries(stats.refunds.byTypeAmount).sort((a,b) => b[1] - a[1]).map(([k, amt]) => {
              const max = Math.max(...Object.values(stats.refunds.byTypeAmount));
              const pct = (amt / max) * 100;
              const count = stats.refunds.byType[k] || 0;
              return (
                <div key={k} style={{marginBottom:8}}>
                  <div style={{display:'flex', justifyContent:'space-between', fontSize:12, marginBottom:3}}>
                    <span>{k} <span style={{color:'var(--ink-4)', fontSize:10}}>({count} 笔)</span></span>
                    <span style={{fontWeight:600, color:'#dc2626'}}>${amt.toFixed(2)}</span>
                  </div>
                  <div style={{height:6, background:'var(--bg)', borderRadius:3, overflow:'hidden'}}>
                    <div style={{height:'100%', width:`${pct}%`, background:'#dc2626', borderRadius:3, transition:'width .3s'}} />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      
      {/* 供应商排行 */}
      <div className="paper rounded-2xl p-4 fade-in">
        <div className="font-display" style={{fontSize:14, fontWeight:600, marginBottom:10}}>🏭 供应商问题排行 TOP 15</div>
        {supplierRanking.length === 0 ? (
          <div style={{fontSize:12, color:'var(--ink-3)', textAlign:'center', padding:'20px 0'}}>本月暂无数据</div>
        ) : (
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:8}}>
            {supplierRanking.map((s, idx) => (
              <div key={s.name} style={{padding:10, background:'var(--bg)', borderRadius:8, display:'flex', alignItems:'center', gap:10}}>
                <span style={{width:24, height:24, background: idx < 3 ? '#dc2626' : 'var(--ink-3)', color:'white', borderRadius:'50%', fontSize:11, fontWeight:600, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>
                  {idx + 1}
                </span>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontSize:12, fontWeight:600, color:'var(--ink)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{s.name}</div>
                  <div style={{fontSize:10, color:'var(--ink-3)', marginTop:2}}>
                    🔧 {s.aftersales} 单
                    {s.refundAmount > 0 && <span style={{marginLeft:6, color:'#dc2626'}}>· 💰 ${s.refundAmount.toFixed(0)}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* 🆕 fix17: 产品售后排行 TOP 20 — 知道哪款产品问题最多 */}
      <div className="paper rounded-2xl p-4 fade-in">
        <div className="font-display" style={{fontSize:14, fontWeight:600, marginBottom:10, display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
          🛍️ 产品问题排行 TOP 20
          <span style={{fontSize:11, fontWeight:400, color:'var(--ink-3)'}}>· 按 售后+补件+退款 总次数排序</span>
          {productRanking.length > 0 && (
            <span style={{marginLeft:'auto', fontSize:11, color:'var(--ink-3)', fontWeight:400}}>共 {productRanking.length} 款产品涉及问题</span>
          )}
        </div>
        {productRanking.length === 0 ? (
          <div style={{fontSize:12, color:'var(--ink-3)', textAlign:'center', padding:'20px 0'}}>本月暂无产品级数据 · 录入售后/补件/退款时填写"产品名"即可参与统计</div>
        ) : (
          <div style={{display:'flex', flexDirection:'column', gap:6}}>
            {productRanking.map((p, idx) => {
              const isTop = idx < 3;
              return (
                <div key={p.name} style={{padding:'10px 12px', background: isTop ? '#fef2f2' : 'var(--bg)', borderRadius:8, display:'flex', alignItems:'center', gap:10, borderLeft: isTop ? '3px solid #dc2626' : '3px solid transparent'}}>
                  <span style={{width:28, height:28, background: isTop ? '#dc2626' : 'var(--ink-3)', color:'white', borderRadius:'50%', fontSize:12, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>
                    {idx + 1}
                  </span>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{fontSize:13, fontWeight:600, color:'var(--ink)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}} title={p.name}>{p.name}</div>
                    <div style={{fontSize:11, color:'var(--ink-3)', marginTop:3, display:'flex', gap:10, flexWrap:'wrap'}}>
                      {p.aftersales > 0 && <span style={{color:'#ea580c'}}>🔧 售后 {p.aftersales}</span>}
                      {p.refills > 0 && <span style={{color:'#0369a1'}}>📦 补件 {p.refills}</span>}
                      {p.refundCount > 0 && <span style={{color:'#dc2626'}}>💰 退款 {p.refundCount} 笔 ${p.refundAmount.toFixed(0)}</span>}
                      {p.suppliers.length > 0 && <span style={{color:'var(--ink-3)'}}>· 供应商: {p.suppliers.slice(0, 3).join(', ')}{p.suppliers.length > 3 ? `, +${p.suppliers.length - 3}` : ''}</span>}
                    </div>
                  </div>
                  <div style={{flexShrink:0, textAlign:'right'}}>
                    <div style={{fontSize:18, fontWeight:700, color: isTop ? '#dc2626' : 'var(--ink)'}}>{p.total}</div>
                    <div style={{fontSize:9, color:'var(--ink-3)'}}>问题总数</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================
// 导出报表 modal (Excel + PDF, 含图片)
// ============================================================
const ExportPanel = ({ onClose, aftersales, refills, refunds, suppliers, employees, subTab, filterMonth, toast }) => {
  const [exporting, setExporting] = useState(false);
  const [includeImages, setIncludeImages] = useState(true);
  const [exportType, setExportType] = useState(subTab === 'summary' ? 'all' : subTab);
  const [format, setFormat] = useState('excel');
  
  // Excel 导出
  const exportExcel = async () => {
    setExporting(true);
    try {
      if (!window.XLSX) {
        // 动态加载 SheetJS
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }
      const XLSX = window.XLSX;
      const wb = XLSX.utils.book_new();
      
      const addSheet = (data, name) => {
        if (data.length === 0) data = [{ '提示': '当前筛选条件下暂无数据' }];
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, name);
      };
      
      if (exportType === 'aftersales' || exportType === 'all') {
        addSheet(aftersales.map(e => ({
          '日期': (e.created_at || '').slice(0,10),
          '订单号': e.order_ref || '',
          '客户': e.customer || '',
          '产品': e.product_name || '',
          '问题类型': ISSUE_TYPES.find(i => i.key === e.issue_type)?.label || e.issue_type,
          '损坏部位': e.damaged_part || '',
          '详细描述': e.issue_detail || '',
          '供应商': e.supplier_name || '',
          '状态': AFTERSALE_STATUSES.find(s => s.key === e.status)?.label || e.status,
          '催货日期': e.last_remind_date || '',
          '回货日期': e.return_date || '',
          '打包责任人': e.packer || '',
          '质检责任人': e.qc || '',
          '创建人': e.created_by_name || '',
          '图片数量': (e.attachments || []).length,
          '图片链接': (e.attachments || []).map(a => a.url).join('\n'),
          '备注': e.notes || '',
        })), '售后清单');
      }
      
      if (exportType === 'refills' || exportType === 'all') {
        addSheet(refills.map(e => ({
          '日期': (e.created_at || '').slice(0,10),
          '订单号': e.order_ref || '',
          '客户': e.customer || '',
          '补件清单': (e.items || []).map(it => `${it.item || '?'} × ${it.qty || 1}${it.unit || ''}`).join('，'),
          '供应商': e.supplier_name || '',
          '预计发货': e.expected_ship_date || '',
          '实际发货': e.actual_ship_date || '',
          '状态': REFILL_STATUSES.find(s => s.key === e.status)?.label || e.status,
          '物流单号': e.tracking_number || '',
          '创建人': e.created_by_name || '',
          '图片数量': (e.attachments || []).length,
          '图片链接': (e.attachments || []).map(a => a.url).join('\n'),
          '备注': e.notes || '',
        })), '补件追踪');
      }
      
      if (exportType === 'refunds' || exportType === 'all') {
        addSheet(refunds.map(r => ({
          '日期': (r.created_at || '').slice(0,10),
          '订单号': r.order_ref || '',
          '客户': r.customer || '',
          '产品': r.product_name || '',
          '退款类型': REFUND_TYPES.find(t => t.key === r.refund_type)?.label || r.refund_type,
          '退款原因': r.refund_reason || '',
          '金额': parseFloat(r.amount).toFixed(2),
          '货币': r.currency,
          '支付方式': REFUND_PAYMENT_METHODS.find(p => p.key === r.payment_method)?.label || r.payment_method,
          '供应商': r.supplier_name || '',
          '状态': REFUND_STATUSES.find(s => s.key === r.status)?.label || r.status,
          '创建人': r.created_by_name || '',
          '审核人': r.approved_by_name || '',
          '审核时间': (r.approved_at || '').slice(0, 16).replace('T', ' '),
          '审核备注': r.approval_notes || '',
          '处理人': r.processed_by_name || '',
          '处理时间': (r.processed_at || '').slice(0, 16).replace('T', ' '),
          '外部退款单号': r.external_refund_id || '',
          '图片数量': (r.attachments || []).length,
          '图片链接': (r.attachments || []).map(a => a.url).join('\n'),
        })), '退款管理');
      }
      
      const fname = `客服报表_${filterMonth || '全部'}_${exportType}_${new Date().toISOString().slice(0,10)}.xlsx`;
      XLSX.writeFile(wb, fname);
      toast('✓ Excel 已下载');
      setExporting(false);
      setTimeout(onClose, 500);
    } catch(e) {
      toast('❌ 导出失败：' + e.message);
      setExporting(false);
    }
  };
  
  // PDF 导出 (含图片) - 用 window.print + HTML 模板
  const exportPDF = () => {
    setExporting(true);
    const win = window.open('', '_blank', 'width=900,height=700');
    if (!win) { toast('❌ 浏览器拦截了弹窗，请允许'); setExporting(false); return; }
    
    const title = `客服月度报表 · ${filterMonth || '全部时段'} · ${exportType === 'aftersales' ? '售后清单' : exportType === 'refills' ? '补件追踪' : exportType === 'refunds' ? '退款管理' : '完整报表'}`;
    
    const renderImages = (atts) => {
      if (!includeImages || !atts || atts.length === 0) return '';
      return `<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;">${atts.map(a => `<img src="${a.url}" style="max-width:80px;max-height:80px;object-fit:cover;border:1px solid #ccc;border-radius:4px;" />`).join('')}</div>`;
    };
    
    let html = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><title>${title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  body { font-family: "Noto Sans SC", -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans CN', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', 'Heiti SC', SimHei, sans-serif; padding:20px; color:#333; font-size:11px; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  h1 { color:#0071e3; border-bottom:2px solid #0071e3; padding-bottom:8px; }
  h2 { color:#333; margin-top:30px; border-bottom:1px solid #ddd; padding-bottom:6px; }
  table { width:100%; border-collapse:collapse; margin:12px 0; font-size:10px; }
  th,td { border:1px solid #ddd; padding:6px 8px; text-align:left; vertical-align:top; }
  th { background:#f5f5f7; font-weight:600; }
  tr:nth-child(even) { background:#fafafa; }
  .tag { display:inline-block; padding:2px 6px; border-radius:8px; font-size:9px; font-weight:600; }
  .amount { font-weight:600; color:#dc2626; }
  .header-info { color:#666; font-size:11px; margin:8px 0 20px; }
  @media print { body { padding:8px; } }
</style></head><body>
<h1>${title}</h1>
<div class="header-info">导出时间：${new Date().toLocaleString('zh-CN')} · 数据条数：售后 ${aftersales.length} · 补件 ${refills.length} · 退款 ${refunds.length}</div>`;
    
    if (exportType === 'aftersales' || exportType === 'all') {
      html += `<h2>🔧 售后清单 (${aftersales.length} 条)</h2><table>
<thead><tr><th>#</th><th>日期</th><th>订单号</th><th>供应商</th><th>问题/部位</th><th>详细</th><th>图片</th><th>状态</th></tr></thead><tbody>`;
      aftersales.forEach((e, idx) => {
        const issue = ISSUE_TYPES.find(i => i.key === e.issue_type);
        const status = AFTERSALE_STATUSES.find(s => s.key === e.status);
        html += `<tr>
<td>${idx+1}</td>
<td>${(e.created_at||'').slice(5,10)}</td>
<td>${e.order_ref || '-'}</td>
<td>${e.supplier_name || '-'}</td>
<td><span class="tag" style="background:${issue?.color||'gray'}20;color:${issue?.color||'gray'};">${issue?.label||'-'}</span>${e.damaged_part ? '<br/>'+e.damaged_part : ''}</td>
<td>${(e.issue_detail || '').substring(0, 100)}</td>
<td>${renderImages(e.attachments)}</td>
<td><span class="tag" style="background:${status?.bg||'#eee'};color:${status?.color||'#333'};">${status?.label||'-'}</span></td>
</tr>`;
      });
      html += '</tbody></table>';
    }
    
    if (exportType === 'refills' || exportType === 'all') {
      html += `<h2>📦 补件追踪 (${refills.length} 条)</h2><table>
<thead><tr><th>#</th><th>日期</th><th>订单号</th><th>供应商</th><th>补件清单</th><th>图片</th><th>预计/实际</th><th>状态</th></tr></thead><tbody>`;
      refills.forEach((e, idx) => {
        const status = REFILL_STATUSES.find(s => s.key === e.status);
        const itemsList = (e.items || []).map(it => `${it.item}×${it.qty}${it.unit||''}`).join('，');
        html += `<tr>
<td>${idx+1}</td>
<td>${(e.created_at||'').slice(5,10)}</td>
<td>${e.order_ref || '-'}</td>
<td>${e.supplier_name || '-'}</td>
<td>${itemsList || '-'}</td>
<td>${renderImages(e.attachments)}</td>
<td>${e.expected_ship_date || '-'}<br/><span style="color:#16a34a;">${e.actual_ship_date || '-'}</span></td>
<td><span class="tag" style="background:${status?.color||'gray'}20;color:${status?.color||'gray'};">${status?.label||'-'}</span></td>
</tr>`;
      });
      html += '</tbody></table>';
    }
    
    if (exportType === 'refunds' || exportType === 'all') {
      const total = refunds.reduce((s,r) => s + (r.status === 'completed' || r.status === 'approved' ? parseFloat(r.amount||0) : 0), 0);
      html += `<h2>💰 退款管理 (${refunds.length} 条 · 已审/已完成共 $${total.toFixed(2)})</h2><table>
<thead><tr><th>#</th><th>日期</th><th>订单号</th><th>退款原因</th><th>类型</th><th>金额</th><th>支付方式</th><th>图片</th><th>状态</th></tr></thead><tbody>`;
      refunds.forEach((r, idx) => {
        const type = REFUND_TYPES.find(t => t.key === r.refund_type);
        const status = REFUND_STATUSES.find(s => s.key === r.status);
        const pay = REFUND_PAYMENT_METHODS.find(p => p.key === r.payment_method);
        html += `<tr>
<td>${idx+1}</td>
<td>${(r.created_at||'').slice(5,10)}</td>
<td>${r.order_ref || '-'}</td>
<td>${r.product_name ? '<strong>'+r.product_name+'</strong><br/>' : ''}${(r.refund_reason || '').substring(0, 120)}</td>
<td><span class="tag" style="background:${type?.bg||'#eee'};color:${type?.color||'#333'};">${type?.label||'-'}</span></td>
<td class="amount">${r.currency} ${parseFloat(r.amount).toFixed(2)}</td>
<td>${pay?.label || '-'}</td>
<td>${renderImages(r.attachments)}</td>
<td><span class="tag" style="background:${status?.bg||'#eee'};color:${status?.color||'#333'};">${status?.label||'-'}</span></td>
</tr>`;
      });
      html += '</tbody></table>';
    }
    
    html += `<div style="margin-top:30px;text-align:center;color:#999;font-size:10px;">生成自统一工作台 · ${new Date().toLocaleString()}</div>
</body></html>`;
    
    win.document.write(html);
    win.document.close();
    // 等字体 + 图片加载完才打印
    setTimeout(() => {
      try {
        const fontsReady = win.document.fonts && win.document.fonts.ready ? win.document.fonts.ready : Promise.resolve();
        const imgsReady = Promise.all(Array.from(win.document.images || []).map(img => 
          img.complete ? Promise.resolve() : new Promise(res => { img.onload = img.onerror = res; })
        ));
        Promise.all([fontsReady, imgsReady]).then(() => {
          win.print();
          setExporting(false);
          toast('💡 选择"另存为 PDF"保存到本地');
          setTimeout(onClose, 800);
        });
      } catch(e) {
        win.print();
        setExporting(false);
        setTimeout(onClose, 800);
      }
    }, 800);
  };
  
  return (
    <div onClick={onClose}
      style={{position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center', padding:20}}>
      <div onClick={e => e.stopPropagation()}
        style={{background:'white', borderRadius:14, maxWidth:480, width:'100%', padding:22}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14}}>
          <div className="font-display" style={{fontSize:17, fontWeight:600}}>📥 导出月度报表</div>
          <button className="btn-sec" onClick={onClose} style={{padding:'4px 12px'}}>×</button>
        </div>
        
        <div style={{marginBottom:14}}>
          <label style={{fontSize:12, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:6}}>导出类型</label>
          <div style={{display:'flex', flexWrap:'wrap', gap:6}}>
            {[
              { k:'aftersales', l:'🔧 售后清单', n: aftersales.length },
              { k:'refills',    l:'📦 补件追踪', n: refills.length },
              { k:'refunds',    l:'💰 退款管理', n: refunds.length },
              { k:'all',        l:'📊 全部', n: aftersales.length + refills.length + refunds.length },
            ].map(o => (
              <button key={o.k} onClick={() => setExportType(o.k)}
                style={{
                  padding:'6px 12px', borderRadius:8,
                  border:'1px solid ' + (exportType === o.k ? 'var(--accent)' : 'var(--line)'),
                  background: exportType === o.k ? 'var(--accent-soft)' : 'white',
                  color: exportType === o.k ? 'var(--accent)' : 'var(--ink-2)',
                  cursor:'pointer', fontSize:12, fontFamily:'inherit',
                  fontWeight: exportType === o.k ? 600 : 400,
                }}>
                {o.l} <span style={{fontSize:10, opacity:0.7}}>({o.n})</span>
              </button>
            ))}
          </div>
        </div>
        
        <div style={{marginBottom:14}}>
          <label style={{fontSize:12, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:6}}>导出格式</label>
          <div style={{display:'flex', gap:8}}>
            <button onClick={() => setFormat('excel')}
              style={{
                flex:1, padding:'10px', borderRadius:8,
                border:'1px solid ' + (format === 'excel' ? '#16a34a' : 'var(--line)'),
                background: format === 'excel' ? '#dcfce7' : 'white',
                color: format === 'excel' ? '#14532d' : 'var(--ink-2)',
                cursor:'pointer', fontFamily:'inherit', fontWeight: format === 'excel' ? 600 : 400, fontSize:13,
              }}>
              📊 Excel
              <div style={{fontSize:10, color:'var(--ink-3)', marginTop:2, fontWeight:400}}>含图片链接</div>
            </button>
            <button onClick={() => setFormat('pdf')}
              style={{
                flex:1, padding:'10px', borderRadius:8,
                border:'1px solid ' + (format === 'pdf' ? '#dc2626' : 'var(--line)'),
                background: format === 'pdf' ? '#fef2f2' : 'white',
                color: format === 'pdf' ? '#991b1b' : 'var(--ink-2)',
                cursor:'pointer', fontFamily:'inherit', fontWeight: format === 'pdf' ? 600 : 400, fontSize:13,
              }}>
              📄 PDF
              <div style={{fontSize:10, color:'var(--ink-3)', marginTop:2, fontWeight:400}}>嵌入图片</div>
            </button>
          </div>
        </div>
        
        {format === 'pdf' && (
          <label style={{display:'flex', alignItems:'center', gap:6, fontSize:12, padding:8, background:'var(--bg)', borderRadius:6, marginBottom:14, cursor:'pointer'}}>
            <input type="checkbox" checked={includeImages} onChange={e => setIncludeImages(e.target.checked)} />
            <span>包含图片缩略图</span>
            <span style={{color:'var(--ink-4)', fontSize:10, marginLeft:'auto'}}>(关掉可加速)</span>
          </label>
        )}
        
        <div style={{display:'flex', gap:8, justifyContent:'flex-end'}}>
          <button onClick={onClose} className="btn-sec" style={{padding:'8px 16px'}}>取消</button>
          <button onClick={format === 'excel' ? exportExcel : exportPDF} disabled={exporting}
            style={{padding:'8px 20px', background:'var(--accent)', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13, opacity: exporting ? 0.5 : 1}}>
            {exporting ? '⏳ 生成中...' : '📥 立即导出'}
          </button>
        </div>
      </div>
    </div>
  );
};


// ============================================================
// 汇报工单 Module - 员工汇报问题 / 主管处理
// ============================================================
const ReportModule = ({ user, employees, toast, cloudOn }) => {
  const [tab, setTab] = useState('inbox');  // inbox | mine | new | all (admin)
  const [tickets, setTickets] = useState([]);
  const [openTicket, setOpenTicket] = useState(null);
  const [draft, setDraft] = useState(null);

  const isAdmin = (user.role === 'admin' || user.role === 'super_admin');

  // 加载工单（云端优先）
  const loadTickets = async () => {
    if (cloudOn && CLOUD.client) {
      const cloud = await CLOUD.list('workspace_tickets', { order:{col:'updated_at', asc:false}, limit:500 });
      if (cloud !== null) { setTickets(cloud); return; }
    }
    setTickets(STORE.get('tickets_local', []));
  };

  useEffect(() => { loadTickets(); }, [cloudOn]);

  // 保存工单
  const saveTicket = async (ticket) => {
    const now = nowISO();
    const record = { ...ticket, id: ticket.id || uid(), updated_at: now, created_at: ticket.created_at || now };
    if (cloudOn && CLOUD.client) {
      const saved = await CLOUD.upsert('workspace_tickets', record);
      if (saved) { await loadTickets(); return record; }
      toast('⚠ 云端保存失败，已存至本地');
    }
    const local = STORE.get('tickets_local', []);
    const idx = local.findIndex(t => t.id === record.id);
    if (idx >= 0) local[idx] = record; else local.unshift(record);
    STORE.set('tickets_local', local);
    setTickets(local);
    return record;
  };

  // 新建工单
  const createTicket = async (t) => {
    const record = {
      ...t,
      created_by_id: user.id,
      created_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
      status: 'pending',
      comments: [],
      attachments: t.attachments || [],
    };
    await saveTicket(record);
    setDraft(null);
    toast('✓ 工单已提交');
    setTab('mine');
  };

  // 状态变更
  const updateStatus = async (ticket, newStatus) => {
    const comment = {
      id: uid(),
      by_id: user.id,
      by_name: user.name + (user.alias ? ' ' + user.alias : ''),
      time: nowISO(),
      type: 'status',
      content: `状态变更为「${TICKET_STATUS.find(s=>s.key===newStatus)?.label}」`,
      from: ticket.status,
      to: newStatus,
    };
    const updated = { ...ticket, status: newStatus, comments: [...(ticket.comments||[]), comment] };
    if (newStatus === 'resolved' || newStatus === 'rejected') updated.resolved_at = nowISO();
    const saved = await saveTicket(updated);
    setOpenTicket(saved);
    toast(`✓ ${comment.content}`);
  };

  // 添加评论
  const addComment = async (ticket, text) => {
    if (!text.trim()) return;
    const comment = { id: uid(), by_id: user.id, by_name: user.name + (user.alias ? ' ' + user.alias : ''), time: nowISO(), type: 'comment', content: text.trim() };
    const updated = { ...ticket, comments: [...(ticket.comments||[]), comment] };
    const saved = await saveTicket(updated);
    setOpenTicket(saved);
  };

  // 删除（仅创建人或主管）
  const deleteTicket = async (id) => {
    if (!confirm('永久删除此工单？')) return;
    if (cloudOn && CLOUD.client) {
      const ok = await CLOUD.del('workspace_tickets', id);
      if (ok) await loadTickets();
    } else {
      const local = STORE.get('tickets_local', []).filter(t => t.id !== id);
      STORE.set('tickets_local', local);
      setTickets(local);
    }
    setOpenTicket(null);
    toast('已删除');
  };

  // 筛选
  const inbox = tickets.filter(t =>
    (isAdmin && t.target_id === user.id) || (isAdmin && !t.target_id && t.assignee === 'admin') ||
    (t.target_id === user.id)
  );
  const mine = tickets.filter(t => t.created_by_id === user.id);
  const all = tickets;

  const list = tab === 'inbox' ? inbox : tab === 'mine' ? mine : tab === 'all' ? all : [];
  const pendingCount = inbox.filter(t => t.status === 'pending' || t.status === 'accepted').length;
  const myPendingCount = mine.filter(t => t.status === 'pending' || t.status === 'accepted' || t.status === 'processing').length;

  return (
    <div className="space-y-5 fade-in">
      <div className="paper rounded-2xl p-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <button className={`tab-btn ${tab==='inbox'?'active':''}`} onClick={() => setTab('inbox')}>
              📥 我的收件箱 {pendingCount > 0 && <span className="badge">{pendingCount}</span>}
            </button>
            <button className={`tab-btn ${tab==='mine'?'active':''}`} onClick={() => setTab('mine')}>
              📤 我发起的 {myPendingCount > 0 && <span className="badge" style={{background:'var(--gold)'}}>{myPendingCount}</span>}
            </button>
            {isAdmin && (
              <button className={`tab-btn ${tab==='all'?'active':''}`} onClick={() => setTab('all')}>
                🗂 全部工单 ({tickets.length})
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className={`cloud-status ${cloudOn?'ok':'local'}`}>
              <span className="dot"></span>
              {cloudOn ? '云端协同' : '本地'}
            </span>
            <button className="btn-pri" onClick={() => setDraft({
              title:'', department:'merchandiser', priority:'mid', related_order:'',
              target_id: isAdmin ? '' : (employees.find(e => (e.role === 'admin' || e.role === 'super_admin'))?.id || ''),
              target_name:'', description:'', attachments:[]
            })}>+ 新建工单</button>
          </div>
        </div>
      </div>

      {/* 工单列表 */}
      <div className="paper rounded-2xl overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin">
          <table style={{minWidth:'900px'}}>
            <thead>
              <tr>
                <th style={{width:50}}>优先级</th>
                <th style={{width:80}}>状态</th>
                <th style={{minWidth:240}}>标题</th>
                <th style={{width:90}}>对接部门</th>
                <th style={{width:100}}>发起人</th>
                <th style={{width:100}}>接收人</th>
                <th style={{width:120}}>更新时间</th>
                <th style={{width:50}}></th>
              </tr>
            </thead>
            <tbody>
              {list.length === 0 ? (
                <tr><td colSpan={8} style={{textAlign:'center', padding:'40px', color:'var(--ink-3)'}}>
                  {tab === 'inbox' ? '收件箱为空 ✨' : tab === 'mine' ? '你还没发起过工单 · 点击右上"+ 新建工单"' : '暂无工单'}
                </td></tr>
              ) : list.map(t => {
                const dept = DEPARTMENTS.find(d => d.key === t.department);
                const st = TICKET_STATUS.find(s => s.key === t.status);
                const pri = TICKET_PRIORITY.find(p => p.key === t.priority);
                return (
                  <tr key={t.id} style={{cursor:'pointer'}} onClick={() => setOpenTicket(t)}>
                    <td><span className={`tag ${pri?.cls}`} style={{fontSize:10}}>{pri?.label}</span></td>
                    <td><span className={`tag ${st?.cls}`} style={{fontSize:10}}>{st?.label}</span></td>
                    <td className="font-bold text-xs">{t.title}{t.related_order && <span className="font-mono ml-2 text-[10px]" style={{color:'var(--ink-4)'}}>· {t.related_order}</span>}</td>
                    <td className="text-xs">{dept?.icon} {dept?.label}</td>
                    <td className="text-xs" style={{color:'var(--ink-3)'}}>{t.created_by_name}</td>
                    <td className="text-xs" style={{color:'var(--ink-3)'}}>{t.target_name || '主管'}</td>
                    <td className="text-[10px] font-mono" style={{color:'var(--ink-4)'}}>{new Date(t.updated_at).toLocaleString('zh-CN', {month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit'})}</td>
                    <td>{(t.comments?.length||0) > 0 && <span className="text-[10px]" style={{color:'var(--ink-3)'}}>💬{t.comments.length}</span>}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 新建 modal */}
      {draft && (
        <TicketDraftModal
          draft={draft}
          setDraft={setDraft}
          employees={employees}
          user={user}
          onCancel={() => setDraft(null)}
          onSubmit={createTicket}
        />
      )}

      {/* 查看 modal */}
      {openTicket && (
        <TicketDetailModal
          ticket={openTicket}
          user={user}
          employees={employees}
          onClose={() => setOpenTicket(null)}
          onUpdateStatus={(s) => updateStatus(openTicket, s)}
          onAddComment={(t) => addComment(openTicket, t)}
          onDelete={() => deleteTicket(openTicket.id)}
        />
      )}
    </div>
  );
};

const TicketDraftModal = ({ draft, setDraft, employees, user, onCancel, onSubmit }) => {
  const fileInputRef = useRef(null);
  const handleFile = (file) => {
    if (!file) return;
    if (file.size > 2*1024*1024) { alert('图片需小于 2MB'); return; }
    const r = new FileReader();
    r.onload = e => setDraft({ ...draft, attachments:[...(draft.attachments||[]), { id:uid(), data:e.target.result, name:file.name, time:nowISO() }] });
    r.readAsDataURL(file);
  };
  useEffect(() => {
    const onPaste = (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const it of items) if (it.type.startsWith('image')) handleFile(it.getAsFile());
    };
    window.addEventListener('paste', onPaste);
    return () => window.removeEventListener('paste', onPaste);
  }, [draft]);

  const canSubmit = draft.title.trim() && draft.description.trim() && draft.target_id;

  return (
    <div className="modal-backdrop" onClick={onCancel}>
      <div className="modal-card paper p-6 w-full" style={{maxWidth:680}} onClick={e=>e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <div className="font-display text-lg font-bold">📝 新建跨部门工单</div>
          <button className="btn-ghost" onClick={onCancel}><Icon name="x" className="w-5 h-5" /></button>
        </div>
        <div className="space-y-3">
          <div>
            <label className="text-[10px] font-bold uppercase" style={{color:'var(--ink-3)'}}>标题 *</label>
            <input value={draft.title} onChange={e => setDraft({...draft, title:e.target.value})} placeholder="例：VK6080 工厂未按时出货，客户在线追问" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="text-[10px] font-bold uppercase" style={{color:'var(--ink-3)'}}>对接部门 *</label>
              <select value={draft.department} onChange={e => setDraft({...draft, department:e.target.value})}>
                {DEPARTMENTS.map(d => <option key={d.key} value={d.key}>{d.icon} {d.label}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase" style={{color:'var(--ink-3)'}}>优先级</label>
              <select value={draft.priority} onChange={e => setDraft({...draft, priority:e.target.value})}>
                {TICKET_PRIORITY.map(p => <option key={p.key} value={p.key}>{p.label}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[10px] font-bold uppercase" style={{color:'var(--ink-3)'}}>关联订单号</label>
              <input value={draft.related_order} onChange={e => setDraft({...draft, related_order:e.target.value})} placeholder="可选" />
            </div>
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase" style={{color:'var(--ink-3)'}}>接收人 * (默认发给主管)</label>
            <select value={draft.target_id} onChange={e => {
              const emp = employees.find(em => em.id === e.target.value);
              setDraft({...draft, target_id:e.target.value, target_name: emp ? emp.name + (emp.alias?' '+emp.alias:'') : ''});
            }}>
              <option value="">— 请选择 —</option>
              {employees.filter(e => (e.role === 'admin' || e.role === 'super_admin')).map(e => <option key={e.id} value={e.id}>👑 {e.name}{e.alias?` ${e.alias}`:''} (主管)</option>)}
              <optgroup label="员工">
                {employees.filter(e => e.role !== 'admin' && e.id !== user.id).map(e => <option key={e.id} value={e.id}>{e.name}{e.alias?` ${e.alias}`:''}</option>)}
              </optgroup>
            </select>
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase" style={{color:'var(--ink-3)'}}>详细描述 * (问题是什么，需要哪个部门怎么配合)</label>
            <textarea rows="5" value={draft.description} onChange={e => setDraft({...draft, description:e.target.value})} placeholder="例：&#10;1. VK6080 这单订单已经下单 20 天，工厂一直没出货&#10;2. 客户已发邮件三次催问，态度越来越急&#10;3. 需要跟单部门帮忙催工厂，最迟本周五出货&#10;4. 如有问题，请回复给我转告客户" />
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase mb-1 block" style={{color:'var(--ink-3)'}}>截图附件（粘贴 / 拖拽 / 点击）</label>
            <div className="dropzone" onClick={() => fileInputRef.current?.click()} onDragOver={e => {e.preventDefault();}} onDrop={e => {e.preventDefault(); const f=e.dataTransfer.files?.[0]; if(f) handleFile(f);}}>
              <Icon name="upload" className="w-5 h-5 mx-auto mb-1" style={{color:'var(--ink-4)'}} />
              <div className="text-xs font-bold" style={{color:'var(--ink-2)'}}>添加截图（Ctrl+V 粘贴最快）</div>
              <input ref={fileInputRef} type="file" accept="image/*" style={{display:'none'}} onChange={e => handleFile(e.target.files?.[0])} />
            </div>
            {draft.attachments?.length > 0 && (
              <div className="mt-2 flex gap-2 flex-wrap">
                {draft.attachments.map(a => (
                  <div key={a.id} className="relative group">
                    <img src={a.data} className="thumb" />
                    <button onClick={() => setDraft({...draft, attachments: draft.attachments.filter(x => x.id !== a.id)})}
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center opacity-0 group-hover:opacity-100"
                      style={{background:'var(--bad)', border:'1.5px solid white'}}>×</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 pt-3 border-t flex justify-end gap-2" style={{borderColor:'var(--line)'}}>
          <button className="btn-ghost" onClick={onCancel}>取消</button>
          <button className="btn-pri" disabled={!canSubmit} onClick={() => onSubmit(draft)}>📨 提交工单</button>
        </div>
      </div>
    </div>
  );
};

const TicketDetailModal = ({ ticket, user, employees, onClose, onUpdateStatus, onAddComment, onDelete }) => {
  const [newComment, setNewComment] = useState('');
  const [viewImg, setViewImg] = useState(null);
  const dept = DEPARTMENTS.find(d => d.key === ticket.department);
  const st = TICKET_STATUS.find(s => s.key === ticket.status);
  const pri = TICKET_PRIORITY.find(p => p.key === ticket.priority);
  const isCreator = ticket.created_by_id === user.id;
  const isTarget = ticket.target_id === user.id;
  const isAdmin = (user.role === 'admin' || user.role === 'super_admin');
  const canChangeStatus = isTarget || isAdmin;
  const canDelete = isCreator || isAdmin;

  const allowedTransitions = ticket.status === 'pending' ? ['accepted', 'rejected']
    : ticket.status === 'accepted' ? ['processing', 'rejected']
    : ticket.status === 'processing' ? ['resolved', 'rejected']
    : [];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card paper p-6 w-full" style={{maxWidth:760}} onClick={e=>e.stopPropagation()}>
        <div className="flex items-start justify-between mb-4 gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className={`tag ${pri?.cls}`}>{pri?.label}</span>
              <span className={`tag ${st?.cls}`}>{st?.label}</span>
              <span className="text-xs" style={{color:'var(--ink-3)'}}>{dept?.icon} {dept?.label}</span>
              {ticket.related_order && <span className="font-mono text-[11px]" style={{color:'var(--accent)'}}>📦 {ticket.related_order}</span>}
            </div>
            <div className="font-display text-lg font-bold">{ticket.title}</div>
            <div className="text-[11px] font-mono mt-1" style={{color:'var(--ink-4)'}}>
              发起人 {ticket.created_by_name} → 接收人 {ticket.target_name || '主管'} · {new Date(ticket.created_at).toLocaleString('zh-CN')}
            </div>
          </div>
          <button className="btn-ghost" onClick={onClose}><Icon name="x" className="w-5 h-5" /></button>
        </div>

        <div className="rounded-lg p-3 mb-3" style={{background:'var(--bg)', whiteSpace:'pre-line', fontSize:13, lineHeight:1.65}}>
          {ticket.description}
        </div>

        {ticket.attachments?.length > 0 && (
          <div className="mb-3 flex gap-2 flex-wrap">
            {ticket.attachments.map(a => (
              <img key={a.id} src={a.data} className="thumb" onClick={() => setViewImg(a.data)} />
            ))}
          </div>
        )}

        {/* 状态变更按钮 */}
        {canChangeStatus && allowedTransitions.length > 0 && (
          <div className="rounded-lg p-3 mb-3 border-2" style={{borderColor:'var(--accent-mid)', background:'var(--accent-soft)'}}>
            <div className="text-[10px] font-bold uppercase mb-2" style={{color:'var(--accent)'}}>变更状态 (作为接收人)</div>
            <div className="flex flex-wrap gap-2">
              {allowedTransitions.map(s => {
                const trans = TICKET_STATUS.find(x => x.key === s);
                return <button key={s} className={`tab-btn`} onClick={() => onUpdateStatus(s)}>→ {trans.label}</button>;
              })}
            </div>
          </div>
        )}

        {/* 评论时间线 */}
        <div className="mb-3">
          <div className="text-[10px] font-bold uppercase mb-2" style={{color:'var(--ink-3)'}}>💬 沟通记录 ({ticket.comments?.length || 0})</div>
          {ticket.comments?.length > 0 ? (
            <div className="space-y-2 max-h-60 overflow-y-auto scrollbar-thin">
              {ticket.comments.map(c => (
                <div key={c.id} className="rounded-lg p-2 border" style={{borderColor:'var(--line)', background: c.type==='status' ? 'var(--bg)' : 'white'}}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold" style={{color: c.type==='status' ? 'var(--accent)' : 'var(--ink-2)'}}>
                      {c.type==='status' && '🔄 '}{c.by_name}
                    </span>
                    <span className="text-[10px] font-mono" style={{color:'var(--ink-4)'}}>{new Date(c.time).toLocaleString('zh-CN', {month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit'})}</span>
                  </div>
                  <div className="text-xs" style={{color:c.type==='status' ? 'var(--ink-3)' : 'var(--ink)'}}>{c.content}</div>
                </div>
              ))}
            </div>
          ) : <div className="text-xs text-center py-3" style={{color:'var(--ink-4)'}}>暂无沟通</div>}
        </div>

        <div className="rounded-lg p-3 border-2" style={{borderColor:'var(--line)', background:'var(--bg)'}}>
          <textarea rows="2" value={newComment} onChange={e => setNewComment(e.target.value)} placeholder="补充进展、提供信息、追问..." />
          <div className="mt-2 flex justify-between items-center">
            {canDelete && <button className="btn-ghost text-[11px]" onClick={onDelete} style={{color:'var(--bad)'}}>🗑 删除工单</button>}
            <button className="btn-pri text-xs" disabled={!newComment.trim()} onClick={() => { onAddComment(newComment); setNewComment(''); }}>💬 发送</button>
          </div>
        </div>

        {viewImg && (
          <div className="modal-backdrop" style={{zIndex:60}} onClick={() => setViewImg(null)}>
            <img src={viewImg} style={{maxWidth:'90vw', maxHeight:'90vh', borderRadius:8}} />
          </div>
        )}
      </div>
    </div>
  );
};
