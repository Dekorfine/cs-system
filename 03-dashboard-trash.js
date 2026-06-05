// ====== cs-system — 03-dashboard-trash ======
// 版本 2026.06.05-fix152
// 预编译切片
//

const Customer360Modal = ({ email, records, onClose, onOpenRecord }) => {
  const [loading, setLoading] = useState(true);
  const [chargebacks, setChargebacks] = useState([]);
  const [events, setEvents] = useState([]);  // 售后 / 补发 / 退款
  const [reviews, setReviews] = useState([]);
  const [offlineOrders, setOfflineOrders] = useState([]);
  const [customInq, setCustomInq] = useState([]);
  
  const emailNorm = (email || '').trim().toLowerCase();
  
  // 同邮箱的跟进记录(从 props 取,已经在内存里)
  const myRecords = records.filter(r => (r.customer || '').trim().toLowerCase() === emailNorm);
  
  // 跨模块查询
  useEffect(() => {
    if (!emailNorm) return;
    let canceled = false;
    (async () => {
      setLoading(true);
      try {
        const queries = await Promise.allSettled([
          CLOUD.list('workspace_chargebacks', { limit: 200 }),
          CLOUD.list('workspace_events', { limit: 200 }),
          CLOUD.list('workspace_reviews', { limit: 200 }),
          CLOUD.list('workspace_offline_orders', { limit: 200 }),
          CLOUD.list('custom_inquiries', { limit: 100 }),
        ]);
        if (canceled) return;
        const [cb, ev, rv, oo, ci] = queries.map(q => q.status === 'fulfilled' && q.value ? q.value : []);
        const matchEmail = (x) => ((x.customer_email || x.customerEmail || '').trim().toLowerCase() === emailNorm);
        setChargebacks(cb.filter(matchEmail));
        setEvents(ev.filter(matchEmail));
        setReviews(rv.filter(matchEmail));
        setOfflineOrders(oo.filter(matchEmail));
        setCustomInq(ci.filter(matchEmail));
      } catch (e) {
        console.error('[Customer360] 查询失败', e);
      }
      setLoading(false);
    })();
    return () => { canceled = true; };
  }, [emailNorm]);
  
  const fmtDate = (d) => {
    if (!d) return '';
    const t = typeof d === 'number' ? d : new Date(d).getTime();
    if (!t) return '';
    return new Date(t).toLocaleDateString('zh-CN');
  };
  
  const totalCount = myRecords.length + chargebacks.length + events.length + reviews.length + offlineOrders.length + customInq.length;
  
  return ReactDOM.createPortal(
    <div onClick={e => { if (e.target === e.currentTarget) onClose(); }} style={{
      position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:10000,
      display:'flex', alignItems:'center', justifyContent:'center', padding:20,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background:'white', borderRadius:18, maxWidth:760, width:'100%', maxHeight:'90vh', overflow:'auto',
        padding:'24px 28px', boxShadow:'0 20px 60px rgba(0,0,0,.25)',
      }}>
        {/* Header */}
        <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:16}}>
          <div>
            <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', letterSpacing:'.5px', textTransform:'uppercase', marginBottom:3}}>客户档案 360°</div>
            <div className="font-display" style={{fontSize:19, fontWeight:600, letterSpacing:'-.022em', wordBreak:'break-all'}}>
              📧 {email || '(未填邮箱)'}
            </div>
            <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>
              {loading ? '⏳ 跨模块查询中…' : `共 ${totalCount} 条历史记录`}
            </div>
          </div>
          <button onClick={onClose} style={{background:'none', border:'none', fontSize:22, cursor:'pointer', color:'var(--ink-3)'}}>✕</button>
        </div>
        
        {/* 5 个分区 */}
        <Section360
          icon="📞" title="客服跟进" count={myRecords.length} 
          items={myRecords.map(r => ({
            id: r.id,
            primary: `${r.site || ''} · ${(STATUSES.find(s => s.key === r.status) || {}).label || r.status}`,
            secondary: r.summary || r.followups?.[0]?.note || '',
            date: r.date || r.created_at,
            onClick: onOpenRecord ? () => { onOpenRecord(r.id); onClose(); } : null,
          }))}
        />
        
        <Section360
          icon="🚨" title="拒付/Dispute" count={chargebacks.length}
          items={chargebacks.map(c => ({
            id: c.id,
            primary: `订单 ${c.order_no} · ${c.currency || 'USD'} ${c.amount || 0}`,
            secondary: `${c.platform || ''} · ${c.status || ''}${c.reason_detail ? ' · ' + c.reason_detail.slice(0, 40) : ''}`,
            date: c.created_at,
          }))}
        />
        
        <Section360
          icon="📋" title="售后/补发/退款" count={events.length}
          items={events.map(e => ({
            id: e.id,
            primary: `${e.type || '事件'} · 订单 ${e.order_no || '?'}`,
            secondary: `${e.status || ''}${e.notes ? ' · ' + e.notes.slice(0, 40) : ''}`,
            date: e.created_at,
          }))}
        />
        
        <Section360
          icon="💳" title="线下单" count={offlineOrders.length}
          items={offlineOrders.map(o => ({
            id: o.id,
            primary: `${o.site || ''} · ${o.payment_method || ''} · ${o.currency || 'USD'} ${o.amount || 0}`,
            secondary: `订单 ${o.order_no || '?'} → ${o.ship_to_country || ''}`,
            date: o.created_at,
          }))}
        />
        
        <Section360
          icon="🎨" title="定制咨询" count={customInq.length}
          items={customInq.map(c => ({
            id: c.id,
            primary: c.requirement?.slice(0, 60) || '(无需求描述)',
            secondary: `${c.designer_name ? '设计:' + c.designer_name : ''} ${c.quote_no ? '· 报价 ' + c.quote_no : ''}`,
            date: c.created_at,
          }))}
        />
        
        <Section360
          icon="⭐" title="产品评价" count={reviews.length}
          items={reviews.map(r => ({
            id: r.id,
            primary: `${r.product_name || '未填产品'} · ${'⭐'.repeat(r.rating || 0)}`,
            secondary: (r.review_text || '').slice(0, 60),
            date: r.created_at,
          }))}
        />
        
        {totalCount === 0 && !loading && (
          <div style={{textAlign:'center', padding:'32px 20px', color:'var(--ink-3)', fontSize:13}}>
            没有找到这个邮箱的其他历史记录 — 是新客户
          </div>
        )}
        
        <div style={{borderTop:'1px solid var(--line)', marginTop:18, paddingTop:14, fontSize:11, color:'var(--ink-4)', lineHeight:1.6}}>
          💡 这个视图只展示**云端**的数据。如果你看到 "0 条" 但实际有历史,可能是云同步未启用或数据未同步。
        </div>
      </div>
    </div>,
    document.body
  );
};

// 一个分区(可折叠卡片样式)
const Section360 = ({ icon, title, count, items }) => {
  const [open, setOpen] = useState(count > 0);  // 有内容默认展开
  if (count === 0) {
    return (
      <div style={{padding:'8px 12px', marginBottom:6, background:'var(--bg-elevated)', borderRadius:8, fontSize:12, color:'var(--ink-4)', display:'flex', alignItems:'center', gap:8}}>
        <span>{icon}</span>
        <span style={{flex:1}}>{title}</span>
        <span>0</span>
      </div>
    );
  }
  return (
    <div style={{marginBottom:10, border:'1px solid var(--line)', borderRadius:10, overflow:'hidden'}}>
      <div onClick={() => setOpen(!open)} style={{
        padding:'10px 14px', background:'var(--bg-soft)', cursor:'pointer',
        display:'flex', alignItems:'center', gap:10, fontSize:13, fontWeight:600,
      }}>
        <span style={{fontSize:16}}>{icon}</span>
        <span style={{flex:1, color:'var(--ink)'}}>{title}</span>
        <span style={{
          padding:'2px 8px', borderRadius:'var(--radius-pill)',
          background:'var(--accent)', color:'white', fontSize:11, fontWeight:700,
        }}>{count}</span>
        <span style={{color:'var(--ink-3)', fontSize:12, transform: open ? 'rotate(180deg)' : 'none', transition:'transform .15s'}}>▼</span>
      </div>
      {open && (
        <div style={{borderTop:'1px solid var(--line)'}}>
          {items.map((it, i) => (
            <div key={it.id || i}
              onClick={it.onClick}
              style={{
                padding:'10px 14px', borderTop: i > 0 ? '1px solid var(--line-soft)' : 'none',
                cursor: it.onClick ? 'pointer' : 'default',
                transition:'background .15s',
              }}
              onMouseEnter={e => { if (it.onClick) e.currentTarget.style.background = 'var(--bg-elevated)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = ''; }}
            >
              <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:2}}>
                <div style={{flex:1, fontSize:13, color:'var(--ink)', fontWeight:500, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                  {it.primary}
                </div>
                {it.date && <div style={{fontSize:11, color:'var(--ink-4)', flexShrink:0}}>{new Date(it.date).toLocaleDateString('zh-CN')}</div>}
              </div>
              {it.secondary && (
                <div style={{fontSize:12, color:'var(--ink-3)', lineHeight:1.45, overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical'}}>
                  {it.secondary}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


// ============================================================
// 数据看板 - 当天/7天/本月
// ============================================================
// ============================================================
// 📊 数据看板 (fix78 重做) — 主管深度视角
// ============================================================
// 时间维度:今日/本周/本月/本季/本年/自定义
// 4 层视图:概览卡 + 分布图 + 未解决清单 + 4 独立模块整合
// ============================================================

const DashboardModule = ({ user, employees, records }) => {
  const isAdmin = (user.role === 'admin' || user.role === 'super_admin');
  const [timeRange, setTimeRange] = useState('today');
  const [customStart, setCustomStart] = useState('');
  const [customEnd, setCustomEnd] = useState('');
  const [scope, setScope] = useState(isAdmin ? 'team' : 'me');
  const [selectedEmpId, setSelectedEmpId] = useState(user.id);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [expandedSite, setExpandedSite] = useState(null);
  const [expandedEmp, setExpandedEmp] = useState(null);
  const [unresolvedFilter, setUnresolvedFilter] = useState({ owner:'all', cat:'all', site:'all', status:'all', overdueOnly:false, noFollowOnly:false });
  const [detailRecord, setDetailRecord] = useState(null);
  const [kpiDetail, setKpiDetail] = useState(null);  // 🆕 fix80: KPI 卡详情弹窗
  
  // ========== 独立模块数据加载 ==========
  const [extra, setExtra] = useState({ chargebacks:[], offlineOrders:[], customInquiries:[], photoVerif:[] });
  const [extraLoading, setExtraLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      setExtraLoading(true);
      try {
        const [cb, oo, ci, pv] = await Promise.all([
          CLOUD.list('chargebacks', { limit: 1000 }),
          CLOUD.list('offline_orders', { limit: 1000 }),
          CLOUD.list('custom_inquiries', { limit: 1000 }),
          CLOUD.list('photo_verifications', { limit: 1000 }),
        ]);
        setExtra({
          chargebacks: (cb || []).filter(x => !x.deleted),
          offlineOrders: (oo || []).filter(x => !x.deleted),
          customInquiries: (ci || []).filter(x => !x.deleted),
          photoVerif: (pv || []).filter(x => !x.deleted),
        });
      } catch(e) { console.error('[Dashboard] 独立模块加载失败:', e); }
      setExtraLoading(false);
    })();
  }, []);
  
  // ========== 时间范围解析 ==========
  const today = todayISO();
  const timeMeta = useMemo(() => {
    const d = new Date(today);
    let start = today, end = today, label = '今日', prevStart, prevEnd;
    if (timeRange === 'today') {
      start = today; end = today; label = '今日';
      prevStart = addDays(today, -1); prevEnd = addDays(today, -1);
    } else if (timeRange === 'week') {
      const dow = d.getDay() === 0 ? 6 : d.getDay() - 1;
      start = addDays(today, -dow); end = today;
      label = `本周 (${start.slice(5)} → ${end.slice(5)})`;
      prevStart = addDays(start, -7); prevEnd = addDays(end, -7);
    } else if (timeRange === 'month') {
      start = today.slice(0, 8) + '01'; end = today;
      label = `${today.slice(0, 7)}`;
      const lm = new Date(start + 'T00:00:00');
      lm.setMonth(lm.getMonth() - 1);
      prevStart = lm.toISOString().slice(0, 10);
      lm.setMonth(lm.getMonth() + 1); lm.setDate(0);
      prevEnd = lm.toISOString().slice(0, 10);
    } else if (timeRange === 'quarter') {
      const m = d.getMonth();
      const qStart = Math.floor(m / 3) * 3;
      start = `${today.slice(0,4)}-${String(qStart+1).padStart(2,'0')}-01`;
      end = today;
      label = `${today.slice(0,4)} Q${Math.floor(m/3)+1}`;
      const py = qStart === 0 ? d.getFullYear() - 1 : d.getFullYear();
      const pm = qStart === 0 ? 9 : qStart - 3;
      prevStart = `${py}-${String(pm+1).padStart(2,'0')}-01`;
      const pe = new Date(py, pm + 3, 0);
      prevEnd = `${pe.getFullYear()}-${String(pe.getMonth()+1).padStart(2,'0')}-${String(pe.getDate()).padStart(2,'0')}`;
    } else if (timeRange === 'year') {
      start = today.slice(0,4) + '-01-01'; end = today;
      label = `${today.slice(0,4)} 年`;
      const py = parseInt(today.slice(0,4)) - 1;
      prevStart = `${py}-01-01`; prevEnd = `${py}-12-31`;
    } else if (timeRange === 'custom') {
      start = customStart || today; end = customEnd || today;
      label = customStart && customEnd ? `${customStart} → ${customEnd}` : '请选范围';
      if (customStart && customEnd) {
        const ds = new Date(start + 'T00:00:00'), de = new Date(end + 'T00:00:00');
        const days = Math.round((de - ds) / 86400000) + 1;
        prevStart = addDays(start, -days); prevEnd = addDays(end, -days);
      }
    }
    return { startDate: start, endDate: end, rangeLabel: label, prevStartDate: prevStart, prevEndDate: prevEnd };
  }, [timeRange, customStart, customEnd, today]);
  
  const { startDate, endDate, rangeLabel, prevStartDate, prevEndDate } = timeMeta;
  
  // ========== 客服 records 过滤 ==========
  const liveRecords = useMemo(() => records.filter(r => !r.deleted), [records]);
  const scopedRecords = useMemo(() => {
    if (scope === 'me') return liveRecords.filter(r => r.ownerId === user.id);
    if (scope === 'one' && selectedEmpId) return liveRecords.filter(r => r.ownerId === selectedEmpId);
    return liveRecords;
  }, [scope, selectedEmpId, liveRecords, user.id]);
  
  const inRange = (date) => date && date >= startDate && date <= endDate;
  const inPrevRange = (date) => date && prevStartDate && prevEndDate && date >= prevStartDate && date <= prevEndDate;
  
  const periodRecords = useMemo(() => scopedRecords.filter(r => inRange(r.date)), [scopedRecords, startDate, endDate]);
  const prevPeriodRecords = useMemo(() => scopedRecords.filter(r => inPrevRange(r.date)), [scopedRecords, prevStartDate, prevEndDate]);
  
  // ========== 核心指标 ==========
  const UNRESOLVED_STATUSES = ['pending', 'following', 'waiting'];
  const totalCount = periodRecords.length;
  const prevTotalCount = prevPeriodRecords.length;
  const diffPct = prevTotalCount > 0 ? Math.round((totalCount - prevTotalCount) / prevTotalCount * 100) : null;
  
  const resolved = periodRecords.filter(r => r.status === 'resolved');
  const unresolved = periodRecords.filter(r => UNRESOLVED_STATUSES.includes(r.status));
  const overdue = unresolved.filter(r => r.nextFollowUp && r.nextFollowUp < today);
  const noFollowUpSet = unresolved.filter(r => !r.nextFollowUp);
  const activeEmps = new Set(periodRecords.map(r => r.ownerId)).size;
  
  // ========== 独立模块计数 ==========
  const cbActive = extra.chargebacks.filter(c => !['won','lost','closed'].includes(c.status));
  const ooActive = extra.offlineOrders.filter(o => !['completed','cancelled'].includes(o.status));
  const ciActive = extra.customInquiries.filter(c => !['completed','cancelled'].includes(c.stage));
  const pvPending = extra.photoVerif.filter(p => !['accepted','rejected','replaced'].includes(p.status));
  
  const cbInRange = extra.chargebacks.filter(c => inRange((c.created_at || '').slice(0, 10)));
  const ooInRange = extra.offlineOrders.filter(o => inRange((o.created_at || '').slice(0, 10)));
  const ciInRange = extra.customInquiries.filter(c => inRange((c.created_at || '').slice(0, 10)));
  const pvInRange = extra.photoVerif.filter(p => inRange((p.created_at || '').slice(0, 10)));
  
  // ========== 按问题分类分布 ==========
  const categoryStats = useMemo(() => {
    const map = new Map();
    periodRecords.forEach(r => {
      const cat = r.category || '(未分类)';
      if (!map.has(cat)) map.set(cat, { name: cat, total: 0, unresolved: 0, resolved: 0, records: [] });
      const item = map.get(cat);
      item.total++;
      item.records.push(r);
      if (UNRESOLVED_STATUSES.includes(r.status)) item.unresolved++;
      if (r.status === 'resolved') item.resolved++;
    });
    return Array.from(map.values()).sort((a, b) => b.total - a.total);
  }, [periodRecords]);
  
  // ========== 按网站分布 ==========
  const siteStats = useMemo(() => {
    const map = new Map();
    periodRecords.forEach(r => {
      const site = r.site || (window.__siteFromOrderRef && window.__siteFromOrderRef(r.orderRef)) || '(未填)';  // 🆕 fix92: 无 site 时按订单号前缀推断
      if (!map.has(site)) map.set(site, { name: site, total: 0, unresolved: 0, resolved: 0, records: [] });
      const item = map.get(site);
      item.total++;
      item.records.push(r);
      if (UNRESOLVED_STATUSES.includes(r.status)) item.unresolved++;
      if (r.status === 'resolved') item.resolved++;
    });
    return Array.from(map.values()).sort((a, b) => b.total - a.total);
  }, [periodRecords]);
  
  // ========== 🆕 fix82: 问题反馈统计(每人本期标记数) ==========
  const feedbackStats = useMemo(() => {
    return employees.map(e => ({
      ...e,
      count: periodRecords.filter(r => r.ownerId === e.id && r.isFeedback).length,
    })).filter(e => e.count > 0).sort((a, b) => b.count - a.count);
  }, [employees, periodRecords]);
  const feedbackRecords = useMemo(() => periodRecords.filter(r => r.isFeedback), [periodRecords]);

  // ========== 按客服分布 ==========
  const empStats = useMemo(() => {
    return employees.map(e => {
      const recs = periodRecords.filter(r => r.ownerId === e.id);
      return {
        ...e,
        total: recs.length,
        unresolved: recs.filter(r => UNRESOLVED_STATUSES.includes(r.status)).length,
        resolved: recs.filter(r => r.status === 'resolved').length,
        overdue: recs.filter(r => UNRESOLVED_STATUSES.includes(r.status) && r.nextFollowUp && r.nextFollowUp < today).length,
        noFollow: recs.filter(r => UNRESOLVED_STATUSES.includes(r.status) && !r.nextFollowUp).length,
        easy: recs.filter(r => r.difficulty === 'easy').length,
        mid: recs.filter(r => r.difficulty === 'mid').length,
        hard: recs.filter(r => r.difficulty === 'hard').length,
        mins: recs.reduce((s, r) => s + (r.durationMin || 0), 0),
        records: recs,
      };
    }).filter(e => e.total > 0 || (scope === 'team')).sort((a, b) => b.total - a.total);
  }, [employees, periodRecords, today, scope]);
  
  // ========== 未解决清单(可筛选) ==========
  const unresolvedList = useMemo(() => {
    let l = unresolved;
    if (unresolvedFilter.owner !== 'all') l = l.filter(r => r.ownerId === unresolvedFilter.owner);
    if (unresolvedFilter.cat !== 'all') l = l.filter(r => r.category === unresolvedFilter.cat);
    if (unresolvedFilter.site !== 'all') l = l.filter(r => r.site === unresolvedFilter.site);
    if (unresolvedFilter.status !== 'all') l = l.filter(r => r.status === unresolvedFilter.status);
    if (unresolvedFilter.overdueOnly) l = l.filter(r => r.nextFollowUp && r.nextFollowUp < today);
    if (unresolvedFilter.noFollowOnly) l = l.filter(r => !r.nextFollowUp);
    return [...l].sort((a, b) => (a.date || '9999').localeCompare(b.date || '9999'));
  }, [unresolved, unresolvedFilter, today]);
  
  const daysAgo = (date) => {
    if (!date) return null;
    const d1 = new Date(today + 'T00:00:00'), d2 = new Date(date + 'T00:00:00');
    return Math.round((d1 - d2) / 86400000);
  };
  
  // 高优先级问题分类(标红)
  const URGENT_CATS = ['拒付','售后','退货','补发','取消订单','质量问题'];
  
  return (
    <div className="space-y-5 fade-in">
      {/* ① 时间维度 + 范围切换 */}
      <div className="paper rounded-2xl p-4">
        <div className="flex items-center gap-3 flex-wrap mb-3">
          <div className="flex items-center gap-2">
            <Icon name="chart" className="w-5 h-5" style={{color:'var(--accent)'}} />
            <span className="font-display text-base font-bold">📊 数据看板</span>
            <span className="text-[11px]" style={{color:'var(--ink-3)'}}>· {rangeLabel}</span>
          </div>
          <div style={{flex:1}}></div>
          {isAdmin && (
            <div className="flex items-center gap-1">
              <button className={`btn-sec ${scope==='team'?'!bg-[var(--accent)] !text-white !border-[var(--accent)]':''}`}
                onClick={() => setScope('team')} style={{padding:'5px 12px', fontSize:12}}>全团队</button>
              <button className={`btn-sec ${scope==='one'?'!bg-[var(--accent)] !text-white !border-[var(--accent)]':''}`}
                onClick={() => setScope('one')} style={{padding:'5px 12px', fontSize:12}}>指定员工</button>
              {scope === 'one' && (
                <select value={selectedEmpId} onChange={e => setSelectedEmpId(e.target.value)} style={{padding:'4px 8px', fontSize:12, border:'1px solid var(--line)', borderRadius:6}}>
                  {employees.map(e => <option key={e.id} value={e.id}>{e.name}{e.alias?` (${e.alias})`:''}</option>)}
                </select>
              )}
            </div>
          )}
          <button className={`btn-sec ${scope==='me'?'!bg-[var(--accent)] !text-white !border-[var(--accent)]':''}`}
            onClick={() => setScope('me')} style={{padding:'5px 12px', fontSize:12}}>我的</button>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-bold" style={{color:'var(--ink-3)'}}>📅 时间</span>
          {[['today','今日'],['week','本周'],['month','本月'],['quarter','本季'],['year','本年'],['custom','自定义']].map(([k,l]) => (
            <button key={k} className={`btn-sec ${timeRange===k?'!bg-[var(--accent)] !text-white !border-[var(--accent)]':''}`}
              onClick={() => setTimeRange(k)} style={{padding:'5px 14px', fontSize:12, fontWeight: timeRange===k?600:500}}>{l}</button>
          ))}
          {timeRange === 'custom' && (
            <div className="flex items-center gap-2 ml-2">
              <input type="date" value={customStart} onChange={e => setCustomStart(e.target.value)}
                style={{padding:'4px 8px', fontSize:12, border:'1px solid var(--line)', borderRadius:6}} />
              <span style={{color:'var(--ink-3)'}}>→</span>
              <input type="date" value={customEnd} onChange={e => setCustomEnd(e.target.value)}
                style={{padding:'4px 8px', fontSize:12, border:'1px solid var(--line)', borderRadius:6}} />
            </div>
          )}
        </div>
      </div>
      
      {/* ② 6 张概览卡 — 全部可点击查看详情 */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
        <KpiCard title="📧 处理总数" value={totalCount}
          sub={diffPct !== null ? `${diffPct >= 0 ? '↑' : '↓'} ${Math.abs(diffPct)}% vs 上期` : '上期无数据'}
          subColor={diffPct === null ? 'var(--ink-4)' : (diffPct >= 0 ? 'var(--good)' : 'var(--bad)')}
          accent="var(--accent)"
          onClick={totalCount > 0 ? () => setKpiDetail({ type:'records', title:'📧 处理总数', records: periodRecords, accent:'var(--accent)' }) : undefined} />
        <KpiCard title="✅ 已解决" value={resolved.length}
          sub={totalCount > 0 ? `${Math.round(resolved.length / totalCount * 100)}% 解决率` : '—'}
          accent="var(--good)"
          onClick={resolved.length > 0 ? () => setKpiDetail({ type:'records', title:'✅ 已解决', records: resolved, accent:'var(--good)' }) : undefined} />
        <KpiCard title="⏳ 未解决" value={unresolved.length}
          sub={overdue.length > 0 ? `🔴 ${overdue.length} 已超期` : (noFollowUpSet.length > 0 ? `🟡 ${noFollowUpSet.length} 未设跟进` : '✓ 状态正常')}
          subColor={overdue.length > 0 ? 'var(--bad)' : (noFollowUpSet.length > 0 ? 'var(--warn)' : 'var(--ink-4)')}
          accent="var(--warn)" highlight={overdue.length > 0}
          onClick={unresolved.length > 0 ? () => setKpiDetail({ type:'records', title:'⏳ 未解决', records: unresolved, accent:'var(--warn)' }) : undefined} />
        <KpiCard title="👥 活跃客服" value={activeEmps}
          sub={`/ ${employees.length} 总人数`} accent="#5e5ce6"
          onClick={activeEmps > 0 ? () => setKpiDetail({ type:'employees', title:'👥 活跃客服', records: empStats.filter(e => e.total > 0), accent:'#5e5ce6' }) : undefined} />
        <KpiCard title="🚨 拒付待处理" value={cbActive.length}
          sub={cbInRange.length > 0 ? `本期新增 ${cbInRange.length}` : '本期无新增'}
          accent="var(--bad)" highlight={cbActive.length > 5}
          onClick={cbActive.length > 0 ? () => setKpiDetail({ type:'chargebacks', title:'🚨 拒付待处理', records: cbActive, accent:'var(--bad)' }) : undefined} />
        <KpiCard title="💳 工单待处理" value={ooActive.length + ciActive.length + pvPending.length}
          sub={`线下 ${ooActive.length} · 定制 ${ciActive.length} · 实拍 ${pvPending.length}`}
          accent="#af52de"
          onClick={(ooActive.length + ciActive.length + pvPending.length) > 0 ? () => setKpiDetail({ type:'tickets', title:'💳 工单待处理', tickets: { offline: ooActive, custom: ciActive, photo: pvPending }, accent:'#af52de' }) : undefined} />
      </div>
      
      {/* ③ 三个分布(并排) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <CategoryDistribution items={categoryStats} expanded={expandedCategory} onExpand={setExpandedCategory}
          urgentKeys={URGENT_CATS} onClickRecord={setDetailRecord} employees={employees} />
        <SiteDistribution items={siteStats} expanded={expandedSite} onExpand={setExpandedSite}
          onClickRecord={setDetailRecord} employees={employees} />
        <EmployeeDistribution items={empStats} expanded={expandedEmp} onExpand={setExpandedEmp}
          onClickRecord={setDetailRecord} />
      </div>
      
      {/* 🆕 fix82: 邮件分布 员工×日期×网站(接入原孤儿组件) */}
      <SiteDailyBreakdown
        scope={scope}
        selectedEmpId={scope === 'me' ? user.id : selectedEmpId}
        employees={employees}
        live={liveRecords}
        today={today}
        last7Start={addDays(today, -6)}
        monthStart={today.slice(0, 8) + '01'} />

      {/* 🆕 fix82: 问题反馈汇总 */}
      <div className="paper rounded-2xl p-4">
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="font-display text-sm font-bold">📣 问题反馈</span>
            <span className="text-[10px]" style={{color:'var(--ink-3)'}}>{rangeLabel} · 客服标记的问题</span>
          </div>
          <span style={{fontWeight:800, fontSize:20, color:'#b45309'}}>{feedbackRecords.length}<span style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', marginLeft:3}}>条</span></span>
        </div>
        {feedbackStats.length > 0 ? (
          <div className="flex flex-wrap gap-2 mb-3">
            {feedbackStats.map(e => (
              <span key={e.id} style={{padding:'3px 10px', background:'#fffbeb', border:'1px solid #fcd34d', borderRadius:10, fontSize:12, fontWeight:600, color:'#92400e'}}>
                {e.name}{e.alias ? ' ' + e.alias : ''} · {e.count}
              </span>
            ))}
          </div>
        ) : (
          <div className="text-xs py-2" style={{color:'var(--ink-4)'}}>本期还没有标记的问题反馈 · 客服在「跟进 &amp; 截图」弹窗里勾选「📣 标记为问题反馈」即可</div>
        )}
        {feedbackRecords.length > 0 && (
          <div className="space-y-1 max-h-52 overflow-y-auto scrollbar-thin">
            {feedbackRecords.map(r => (
              <div key={r.id} onClick={() => setDetailRecord(r)}
                className="flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer hover:bg-[var(--bg-elevated)]"
                style={{fontSize:12, borderBottom:'1px solid var(--line)'}}>
                <span style={{padding:'1px 6px', background:'var(--bg-elevated)', borderRadius:6, fontSize:10}}>{r.site || (window.__siteFromOrderRef && window.__siteFromOrderRef(r.orderRef)) || '?'}</span>
                <span style={{fontWeight:600, minWidth:80}}>{r.customer || '(无客户名)'}</span>
                <span style={{color:'var(--ink-3)', fontFamily:'monospace', fontSize:11}}>{r.orderRef || ''}</span>
                <span style={{color:'var(--ink-2)', flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{r.feedbackNote || r.note || ''}</span>
                {r.feedbackShots?.length > 0 && <span style={{fontSize:10, color:'var(--ink-3)'}}>📷{r.feedbackShots.length}</span>}
                <span style={{fontSize:10, color:'var(--ink-4)'}}>{r.date}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ④ 未解决清单 */}
      <UnresolvedList
        records={unresolvedList}
        totalUnresolved={unresolved.length}
        overdueCount={overdue.length}
        noFollowCount={noFollowUpSet.length}
        filter={unresolvedFilter}
        setFilter={setUnresolvedFilter}
        employees={employees}
        today={today}
        daysAgo={daysAgo}
        onClickRecord={setDetailRecord}
        isAdmin={isAdmin}
      />
      
      {/* ⑤ 独立模块整合 */}
      <ModuleIntegrationPanel
        chargebacks={extra.chargebacks} chargebacksInRange={cbInRange}
        offlineOrders={extra.offlineOrders} offlineInRange={ooInRange}
        customInquiries={extra.customInquiries} ciInRange={ciInRange}
        photoVerif={extra.photoVerif} pvInRange={pvInRange}
        rangeLabel={rangeLabel} loading={extraLoading} employees={employees}
      />
      
      {/* 记录详情弹窗 */}
      {detailRecord && (
        <RecordDetailModal record={detailRecord} employees={employees} onClose={() => setDetailRecord(null)} />
      )}
      
      {/* 🆕 fix80: KPI 卡详情弹窗 */}
      {kpiDetail && (
        <KpiDetailModal kpi={kpiDetail} employees={employees}
          onClose={() => setKpiDetail(null)}
          onClickRecord={(r) => { setKpiDetail(null); setDetailRecord(r); }} />
      )}
    </div>
  );
};

// ============================================================
// KPI 卡片(可点击展开详情)
// ============================================================
const KpiCard = ({ title, value, sub, subColor, accent, highlight, onClick }) => (
  <div onClick={onClick} className={onClick ? 'kpi-clickable' : ''} style={{
    background:'white', border:'1px solid var(--line)', borderRadius:16, padding:'14px 16px',
    borderLeft: `4px solid ${accent}`,
    boxShadow: highlight ? `0 0 0 2px ${accent}33` : '0 1px 2px rgba(0,0,0,.03)',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all .15s',
    position: 'relative',
  }}
    onMouseEnter={onClick ? (e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 4px 12px rgba(0,0,0,.08), 0 0 0 1px ${accent}44`; } : undefined}
    onMouseLeave={onClick ? (e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = highlight ? `0 0 0 2px ${accent}33` : '0 1px 2px rgba(0,0,0,.03)'; } : undefined}
  >
    <div className="text-[11px] font-bold" style={{color:'var(--ink-3)'}}>{title}</div>
    <div className="font-mono font-bold text-3xl tabular-nums mt-1" style={{color: accent}}>{value}</div>
    <div className="text-[10px] mt-1" style={{color: subColor || 'var(--ink-4)'}}>{sub}</div>
    {onClick && value > 0 && (
      <div style={{position:'absolute', top:10, right:10, fontSize:10, color:'var(--ink-4)', opacity:.6}}>
        点击查看 →
      </div>
    )}
  </div>
);

// ============================================================
// 按分类分布
// ============================================================
const CategoryDistribution = ({ items, expanded, onExpand, urgentKeys, onClickRecord, employees }) => {
  const maxV = Math.max(1, ...items.map(it => it.total));
  const top10 = items.slice(0, 10);
  return (
    <div className="paper rounded-2xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="font-display text-sm font-bold">🏷 按问题类型 TOP 10</div>
        <span className="text-[10px]" style={{color:'var(--ink-4)'}}>{items.length} 类</span>
      </div>
      {top10.length === 0 ? (
        <div className="text-center py-8 text-xs" style={{color:'var(--ink-4)'}}>本期无数据</div>
      ) : (
        <div className="space-y-1.5">
          {top10.map(it => {
            const pct = it.total / maxV * 100;
            const isUrgent = urgentKeys.includes(it.name);
            const isOpen = expanded === it.name;
            return (
              <div key={it.name}>
                <button onClick={() => onExpand(isOpen ? null : it.name)}
                  className="w-full text-left flex items-center gap-2 py-1 px-2 rounded hover:bg-[var(--bg-elevated)] transition"
                  style={{background: isOpen ? 'var(--accent-soft)' : 'transparent'}}>
                  <span className="text-[11px] font-bold w-20 truncate" style={{color: isUrgent ? 'var(--bad)' : 'var(--ink)'}}>
                    {isUrgent && '🔴 '}{it.name}
                  </span>
                  <div className="flex-1 h-4 rounded overflow-hidden" style={{background:'var(--bg-elevated)'}}>
                    <div style={{
                      width: pct + '%', height: '100%',
                      background: isUrgent ? 'var(--bad)' : 'var(--accent)',
                      transition: 'width .3s',
                    }} />
                  </div>
                  <span className="text-[11px] font-mono font-bold w-8 text-right">{it.total}</span>
                  {it.unresolved > 0 && (
                    <span className="text-[10px] font-mono w-12 text-right" style={{color:'var(--warn)'}}>⏳{it.unresolved}</span>
                  )}
                  <span style={{color:'var(--ink-4)'}}>{isOpen ? '▾' : '▸'}</span>
                </button>
                {isOpen && (
                  <div className="ml-2 mt-1 mb-2 p-2 rounded" style={{background:'var(--bg-soft)', maxHeight:240, overflowY:'auto'}}>
                    {it.records.slice(0, 50).map(r => (
                      <div key={r.id} onClick={() => onClickRecord(r)}
                        className="py-1.5 px-2 text-[11px] cursor-pointer rounded hover:bg-white"
                        style={{borderBottom:'1px solid var(--line-soft)'}}>
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{r.customer || '(无客户名)'}</span>
                          <span style={{color:'var(--ink-4)'}}>{r.orderRef || ''}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded" style={{background:'var(--bg-elevated)', color:'var(--ink-3)'}}>{r.site}</span>
                          <div style={{flex:1}}/>
                          <span className="text-[10px]" style={{color:'var(--ink-4)'}}>{r.date}</span>
                          <StatusTag status={r.status} />
                        </div>
                        {r.note && <div className="text-[10px] mt-0.5 truncate" style={{color:'var(--ink-3)'}}>{r.note}</div>}
                      </div>
                    ))}
                    {it.records.length > 50 && <div className="text-[10px] text-center pt-1" style={{color:'var(--ink-4)'}}>共 {it.records.length} 条,只显示前 50</div>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// ============================================================
// 按网站分布
// ============================================================
const SiteDistribution = ({ items, expanded, onExpand, onClickRecord, employees }) => {
  const maxV = Math.max(1, ...items.map(it => it.total));
  return (
    <div className="paper rounded-2xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="font-display text-sm font-bold">🌐 按网站分布</div>
        <span className="text-[10px]" style={{color:'var(--ink-4)'}}>{items.length} 站</span>
      </div>
      {items.length === 0 ? (
        <div className="text-center py-8 text-xs" style={{color:'var(--ink-4)'}}>本期无数据</div>
      ) : (
        <div className="space-y-1.5">
          {items.map(it => {
            const pct = it.total / maxV * 100;
            const isOpen = expanded === it.name;
            return (
              <div key={it.name}>
                <button onClick={() => onExpand(isOpen ? null : it.name)}
                  className="w-full text-left flex items-center gap-2 py-1 px-2 rounded hover:bg-[var(--bg-elevated)] transition"
                  style={{background: isOpen ? 'var(--accent-soft)' : 'transparent'}}>
                  <span className="text-[11px] font-bold w-14 truncate">{it.name}</span>
                  <div className="flex-1 h-4 rounded overflow-hidden" style={{background:'var(--bg-elevated)'}}>
                    <div style={{width: pct + '%', height: '100%', background:'#5e5ce6', transition: 'width .3s'}} />
                  </div>
                  <span className="text-[11px] font-mono font-bold w-8 text-right">{it.total}</span>
                  {it.unresolved > 0 && (
                    <span className="text-[10px] font-mono w-12 text-right" style={{color:'var(--warn)'}}>⏳{it.unresolved}</span>
                  )}
                  <span style={{color:'var(--ink-4)'}}>{isOpen ? '▾' : '▸'}</span>
                </button>
                {isOpen && (
                  <div className="ml-2 mt-1 mb-2 p-2 rounded" style={{background:'var(--bg-soft)', maxHeight:240, overflowY:'auto'}}>
                    {it.records.slice(0, 50).map(r => (
                      <div key={r.id} onClick={() => onClickRecord(r)}
                        className="py-1.5 px-2 text-[11px] cursor-pointer rounded hover:bg-white"
                        style={{borderBottom:'1px solid var(--line-soft)'}}>
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{r.customer || '(无客户名)'}</span>
                          <span style={{color:'var(--ink-4)'}}>{r.orderRef || ''}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded" style={{background:'var(--bg-elevated)', color:'var(--ink-3)'}}>{r.category}</span>
                          <div style={{flex:1}}/>
                          <span className="text-[10px]" style={{color:'var(--ink-4)'}}>{r.date}</span>
                          <StatusTag status={r.status} />
                        </div>
                      </div>
                    ))}
                    {it.records.length > 50 && <div className="text-[10px] text-center pt-1" style={{color:'var(--ink-4)'}}>共 {it.records.length} 条,只显示前 50</div>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// ============================================================
// 按客服分布
// ============================================================
const EmployeeDistribution = ({ items, expanded, onExpand, onClickRecord }) => {
  return (
    <div className="paper rounded-2xl p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="font-display text-sm font-bold">👤 按客服分布</div>
        <span className="text-[10px]" style={{color:'var(--ink-4)'}}>{items.length} 人</span>
      </div>
      {items.length === 0 ? (
        <div className="text-center py-8 text-xs" style={{color:'var(--ink-4)'}}>本期无数据</div>
      ) : (
        <div className="space-y-1.5" style={{maxHeight:520, overflowY:'auto'}}>
          {items.map((e, idx) => {
            const isOpen = expanded === e.id;
            return (
              <div key={e.id}>
                <button onClick={() => onExpand(isOpen ? null : e.id)}
                  className="w-full text-left flex items-center gap-2 py-1.5 px-2 rounded hover:bg-[var(--bg-elevated)] transition"
                  style={{background: isOpen ? 'var(--accent-soft)' : 'transparent'}}>
                  <span className={`text-[10px] font-bold w-5 text-center px-1 rounded ${idx<3?'tag-gold':''}`}
                    style={idx >= 3 ? {color:'var(--ink-4)'} : {}}>{idx+1}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-bold truncate">{e.name}{e.alias?` · ${e.alias}`:''}</div>
                    <div className="text-[10px] flex items-center gap-1.5 flex-wrap" style={{color:'var(--ink-3)'}}>
                      <span>📧 <b>{e.total}</b></span>
                      <span style={{color:'var(--good)'}}>✓ {e.resolved}</span>
                      {e.unresolved > 0 && <span style={{color:'var(--warn)'}}>⏳ {e.unresolved}</span>}
                      {e.overdue > 0 && <span style={{color:'var(--bad)'}}>🔴 {e.overdue}</span>}
                      {e.noFollow > 0 && <span style={{color:'#b45309'}}>🟡 {e.noFollow}未设</span>}
                    </div>
                  </div>
                  <span style={{color:'var(--ink-4)'}}>{isOpen ? '▾' : '▸'}</span>
                </button>
                {isOpen && (
                  <div className="ml-2 mt-1 mb-2 p-2 rounded" style={{background:'var(--bg-soft)', maxHeight:240, overflowY:'auto'}}>
                    <div className="text-[10px] mb-2" style={{color:'var(--ink-3)'}}>
                      简 <b style={{color:'var(--good)'}}>{e.easy}</b> · 中 <b style={{color:'var(--gold)'}}>{e.mid}</b> · 复 <b style={{color:'var(--bad)'}}>{e.hard}</b> · 共 {fmtDuration(e.mins)}
                    </div>
                    {e.records.slice(0, 50).map(r => (
                      <div key={r.id} onClick={() => onClickRecord(r)}
                        className="py-1.5 px-2 text-[11px] cursor-pointer rounded hover:bg-white"
                        style={{borderBottom:'1px solid var(--line-soft)'}}>
                        <div className="flex items-center gap-2">
                          <span className="font-bold">{r.customer || '(无客户名)'}</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded" style={{background:'var(--bg-elevated)', color:'var(--ink-3)'}}>{r.category}</span>
                          <div style={{flex:1}}/>
                          <StatusTag status={r.status} />
                        </div>
                      </div>
                    ))}
                    {e.records.length > 50 && <div className="text-[10px] text-center pt-1" style={{color:'var(--ink-4)'}}>共 {e.records.length} 条,只显示前 50</div>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// ============================================================
// 状态 Tag
// ============================================================
const StatusTag = ({ status }) => {
  const map = {
    pending:     { label:'待处理', bg:'#fef3c7', color:'#92400e' },
    following:   { label:'跟进中', bg:'#dbeafe', color:'#1e40af' },
    waiting:     { label:'等客户', bg:'#fce7f3', color:'#9d174d' },
    resolved:    { label:'已解决', bg:'#dcfce7', color:'#15803d' },
    transferred: { label:'已转交', bg:'#e5e5e7', color:'#6e6e73' },
  };
  const m = map[status] || { label: status || '?', bg:'#f5f5f7', color:'#86868b' };
  return <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background:m.bg, color:m.color}}>{m.label}</span>;
};

// ============================================================
// 未解决清单
// ============================================================
const UnresolvedList = ({ records, totalUnresolved, overdueCount, noFollowCount, filter, setFilter, employees, today, daysAgo, onClickRecord, isAdmin }) => {
  return (
    <div className="paper rounded-2xl overflow-hidden">
      <div className="p-4 border-b" style={{borderColor:'var(--line)', background:'linear-gradient(to right, #fef3c7, transparent)'}}>
        <div className="flex items-center gap-3 flex-wrap">
          <Icon name="alert" className="w-5 h-5" style={{color:'var(--warn)'}} />
          <span className="font-display text-base font-bold">⏳ 未解决清单</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full font-mono font-bold" style={{background:'var(--warn-soft)', color:'#92400e'}}>
            {records.length} / {totalUnresolved} 条
          </span>
          {overdueCount > 0 && (
            <span className="text-[11px] px-2 py-0.5 rounded-full font-mono font-bold" style={{background:'var(--bad-soft)', color:'var(--bad)'}}>
              🔴 {overdueCount} 已超期
            </span>
          )}
          {noFollowCount > 0 && (
            <span className="text-[11px] px-2 py-0.5 rounded-full font-mono font-bold" style={{background:'#fef9c3', color:'#854d0e'}}>
              🟡 {noFollowCount} 未设跟进日
            </span>
          )}
        </div>
        <div className="text-[11px] mt-2" style={{color:'var(--ink-3)'}}>
          状态 ∈ {'{待处理, 跟进中, 等客户}'} · 按拖延天数倒序 · 点击任意行查看完整内容
        </div>
        <div className="flex items-center gap-2 flex-wrap mt-3">
          <select value={filter.owner} onChange={e => setFilter(f => ({...f, owner:e.target.value}))}
            style={{padding:'4px 8px', fontSize:11, border:'1px solid var(--line)', borderRadius:6}}>
            <option value="all">全部客服</option>
            {employees.map(e => <option key={e.id} value={e.id}>{e.name}</option>)}
          </select>
          <select value={filter.cat} onChange={e => setFilter(f => ({...f, cat:e.target.value}))}
            style={{padding:'4px 8px', fontSize:11, border:'1px solid var(--line)', borderRadius:6}}>
            <option value="all">全部分类</option>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={filter.site} onChange={e => setFilter(f => ({...f, site:e.target.value}))}
            style={{padding:'4px 8px', fontSize:11, border:'1px solid var(--line)', borderRadius:6}}>
            <option value="all">全部网站</option>
            {SITES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={filter.status} onChange={e => setFilter(f => ({...f, status:e.target.value}))}
            style={{padding:'4px 8px', fontSize:11, border:'1px solid var(--line)', borderRadius:6}}>
            <option value="all">全部状态</option>
            <option value="pending">待处理</option>
            <option value="following">跟进中</option>
            <option value="waiting">等客户</option>
          </select>
          <label className="flex items-center gap-1 text-[11px]" style={{color:'var(--bad)', fontWeight:600}}>
            <input type="checkbox" checked={filter.overdueOnly} onChange={e => setFilter(f => ({...f, overdueOnly:e.target.checked}))} />
            🔴 只看超期
          </label>
          <label className="flex items-center gap-1 text-[11px]" style={{color:'#b45309', fontWeight:600}}>
            <input type="checkbox" checked={filter.noFollowOnly} onChange={e => setFilter(f => ({...f, noFollowOnly:e.target.checked}))} />
            🟡 只看未设跟进
          </label>
        </div>
      </div>
      
      {records.length === 0 ? (
        <div className="text-center py-12 text-sm" style={{color:'var(--ink-4)'}}>✓ 当前筛选条件下无未解决记录</div>
      ) : (
        <div className="overflow-x-auto" style={{maxHeight:600, overflowY:'auto'}}>
          <table>
            <thead>
              <tr>
                <th style={{width:60}}>拖延</th>
                <th>客户</th>
                <th>网站</th>
                <th>订单号</th>
                <th>分类</th>
                <th>客服</th>
                <th>状态</th>
                <th>难度</th>
                <th>跟进日</th>
              </tr>
            </thead>
            <tbody>
              {records.slice(0, 200).map(r => {
                const da = daysAgo(r.date);
                const isOverdue = r.nextFollowUp && r.nextFollowUp < today;
                const noFollow = !r.nextFollowUp;
                let color = 'var(--good)';
                let label = `${da}天`;
                if (da == null) { color = 'var(--ink-4)'; label = '-'; }
                else if (da > 7) color = 'var(--bad)';
                else if (da > 3) color = 'var(--warn)';
                const emp = employees.find(e => e.id === r.ownerId);
                return (
                  <tr key={r.id} onClick={() => onClickRecord(r)} style={{cursor:'pointer'}}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-soft)'}
                    onMouseLeave={e => e.currentTarget.style.background = ''}>
                    <td><span className="text-[11px] font-mono font-bold" style={{color}}>{da > 7 ? '🔴 ' : (da > 3 ? '🟡 ' : '')}{label}</span></td>
                    <td className="text-[12px]">{r.customer || <span style={{color:'var(--ink-4)'}}>—</span>}</td>
                    <td><span className="text-[10px] px-1.5 py-0.5 rounded" style={{background:'var(--bg-elevated)'}}>{r.site || '—'}</span></td>
                    <td className="text-[11px] font-mono" style={{color:'var(--ink-3)'}}>{r.orderRef || '—'}</td>
                    <td><span className="text-[11px]">{r.category || '—'}</span></td>
                    <td className="text-[11px]">{emp ? emp.name : <span style={{color:'var(--ink-4)'}}>—</span>}</td>
                    <td><StatusTag status={r.status} /></td>
                    <td><span className="text-[10px] font-mono">{r.difficulty || '—'}</span></td>
                    <td>
                      {noFollow ? (
                        <span className="text-[10px] font-bold" style={{color:'#b45309'}}>🟡 未设</span>
                      ) : (
                        <span className="text-[10px] font-mono" style={{color: isOverdue ? 'var(--bad)' : 'var(--ink-3)', fontWeight: isOverdue ? 600 : 400}}>
                          {isOverdue && '🔴 '}{r.nextFollowUp}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {records.length > 200 && (
            <div className="text-[11px] text-center py-2" style={{color:'var(--ink-4)'}}>共 {records.length} 条,只显示前 200,请用筛选缩小范围</div>
          )}
        </div>
      )}
    </div>
  );
};

// ============================================================
// 独立模块整合
// ============================================================
const ModuleIntegrationPanel = ({ chargebacks, chargebacksInRange, offlineOrders, offlineInRange, customInquiries, ciInRange, photoVerif, pvInRange, rangeLabel, loading, employees }) => {
  if (loading) return <div className="paper rounded-2xl p-6 text-center text-xs" style={{color:'var(--ink-4)'}}>⏳ 加载独立模块数据中...</div>;
  
  // 拒付分析
  const cbActive = chargebacks.filter(c => !['won','lost','closed'].includes(c.status));
  const cbWon = chargebacks.filter(c => c.status === 'won').length;
  const cbLost = chargebacks.filter(c => c.status === 'lost').length;
  const cbAmount = chargebacksInRange.reduce((s, c) => s + (parseFloat(c.amount) || 0), 0);
  
  // 线下单分析
  const ooAmount = offlineInRange.filter(o => ['paid','dispatched','completed'].includes(o.status))
    .reduce((s, o) => s + (parseFloat(o.payment_amount) || 0), 0);
  const ooPending = offlineOrders.filter(o => o.status === 'pending_payment').length;
  
  // 定制分析
  const ciNew = customInquiries.filter(c => c.stage === 'new').length;
  const ciQuoted = customInquiries.filter(c => c.stage === 'quoted').length;
  const ciProducing = customInquiries.filter(c => c.stage === 'producing').length;
  
  // 实拍分析
  const pvPending = photoVerif.filter(p => p.status === 'pending').length;
  const pvSent = photoVerif.filter(p => p.status === 'sent').length;
  const pvRejected = photoVerif.filter(p => p.status === 'rejected').length;
  
  return (
    <div className="paper rounded-2xl p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="font-display text-base font-bold">🔗 独立工单深度分析</span>
        <span className="text-[10px]" style={{color:'var(--ink-4)'}}>· {rangeLabel}</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
        {/* 拒付 */}
        <div className="rounded-xl p-3" style={{border:'1px solid var(--bad-soft)', background:'#fff5f5'}}>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-base">🚨</span>
            <span className="text-[12px] font-bold">拒付 Chargebacks</span>
          </div>
          <div className="font-mono font-bold text-2xl tabular-nums mb-2" style={{color:'var(--bad)'}}>{cbActive.length}</div>
          <div className="text-[10px] space-y-0.5" style={{color:'var(--ink-3)'}}>
            <div>本期新增: <b>{chargebacksInRange.length}</b> 起 · ${cbAmount.toFixed(0)}</div>
            <div>已赢: <b style={{color:'var(--good)'}}>{cbWon}</b> · 已输: <b style={{color:'var(--bad)'}}>{cbLost}</b></div>
            {chargebacks.length > 0 && <div>胜率: <b>{Math.round(cbWon / (cbWon + cbLost || 1) * 100)}%</b></div>}
          </div>
        </div>
        
        {/* 线下单 */}
        <div className="rounded-xl p-3" style={{border:'1px solid #c7d2fe', background:'#eef2ff'}}>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-base">💳</span>
            <span className="text-[12px] font-bold">线下单 Offline</span>
          </div>
          <div className="font-mono font-bold text-2xl tabular-nums mb-2" style={{color:'#4338ca'}}>{ooPending}</div>
          <div className="text-[10px] space-y-0.5" style={{color:'var(--ink-3)'}}>
            <div>本期新增: <b>{offlineInRange.length}</b> 单</div>
            <div>本期成交额: <b>${ooAmount.toFixed(0)}</b></div>
            <div>待付款: <b style={{color:'var(--warn)'}}>{ooPending}</b></div>
          </div>
        </div>
        
        {/* 定制咨询 */}
        <div className="rounded-xl p-3" style={{border:'1px solid #fde68a', background:'#fffbeb'}}>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-base">🎨</span>
            <span className="text-[12px] font-bold">定制咨询 Custom</span>
          </div>
          <div className="font-mono font-bold text-2xl tabular-nums mb-2" style={{color:'#b45309'}}>{ciNew + ciQuoted + ciProducing}</div>
          <div className="text-[10px] space-y-0.5" style={{color:'var(--ink-3)'}}>
            <div>本期新增: <b>{ciInRange.length}</b> 单</div>
            <div>新询单: <b>{ciNew}</b> · 已报价: <b>{ciQuoted}</b></div>
            <div>生产中: <b style={{color:'var(--info)'}}>{ciProducing}</b></div>
          </div>
        </div>
        
        {/* 实拍核实 */}
        <div className="rounded-xl p-3" style={{border:'1px solid #d8b4fe', background:'#faf5ff'}}>
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-base">📸</span>
            <span className="text-[12px] font-bold">实拍核实 Photo</span>
          </div>
          <div className="font-mono font-bold text-2xl tabular-nums mb-2" style={{color:'#7e22ce'}}>{pvPending + pvSent}</div>
          <div className="text-[10px] space-y-0.5" style={{color:'var(--ink-3)'}}>
            <div>本期新增: <b>{pvInRange.length}</b> 个</div>
            <div>待发: <b>{pvPending}</b> · 已发待回: <b>{pvSent}</b></div>
            <div>被拒: <b style={{color:'var(--bad)'}}>{pvRejected}</b></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 🆕 fix80: KPI 卡详情弹窗 — 4 种类型(records/employees/chargebacks/tickets)
// ============================================================
const KpiDetailModal = ({ kpi, employees, onClose, onClickRecord }) => {
  const [search, setSearch] = useState('');
  const today = todayISO();
  
  // 通用筛选
  const filterBySearch = (items, getText) => {
    const q = search.trim().toLowerCase();
    if (!q) return items;
    return items.filter(it => getText(it).toLowerCase().includes(q));
  };
  
  const empName = (id) => employees.find(e => e.id === id)?.name || '?';
  
  return (
    <div onClick={onClose} style={{
      position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:1100,
      display:'flex', alignItems:'center', justifyContent:'center', padding:20,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background:'white', borderRadius:16, maxWidth:1000, width:'100%',
        maxHeight:'88vh', display:'flex', flexDirection:'column',
        boxShadow:'0 24px 60px rgba(0,0,0,.25)', overflow:'hidden',
      }}>
        {/* 头部 */}
        <div style={{padding:'18px 24px', borderBottom:'1px solid var(--line)', display:'flex', alignItems:'center', gap:12, borderLeft:`6px solid ${kpi.accent}`}}>
          <div className="font-display" style={{fontSize:18, fontWeight:600}}>{kpi.title}</div>
          <span className="font-mono font-bold" style={{fontSize:24, color: kpi.accent}}>
            {kpi.type === 'tickets' ? (kpi.tickets.offline.length + kpi.tickets.custom.length + kpi.tickets.photo.length) : (kpi.records?.length || 0)}
          </span>
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="🔍 搜索客户 / 订单号 / 备注..."
            style={{flex:1, marginLeft:12, padding:'6px 12px', border:'1px solid var(--line)', borderRadius:8, fontSize:13, fontFamily:'inherit'}} />
          <button onClick={onClose} className="btn-sec" style={{padding:'5px 14px'}}>✕ 关闭</button>
        </div>
        
        {/* 内容 — 根据 type 渲染 */}
        <div style={{flex:1, overflowY:'auto', padding:'12px 0'}}>
          {kpi.type === 'records' && (
            <KpiRecordsTable records={filterBySearch(kpi.records, r => `${r.customer||''} ${r.orderRef||''} ${r.note||''} ${r.category||''}`)}
              employees={employees} onClickRecord={onClickRecord} today={today} />
          )}
          {kpi.type === 'employees' && (
            <KpiEmployeesTable items={filterBySearch(kpi.records, e => `${e.name||''} ${e.alias||''}`)}
              onClickRecord={onClickRecord} />
          )}
          {kpi.type === 'chargebacks' && (
            <KpiChargebacksTable records={filterBySearch(kpi.records, c => `${c.customer_name||''} ${c.customer_email||''} ${c.order_no||''} ${c.notes||''}`)}
              empName={empName} />
          )}
          {kpi.type === 'tickets' && (
            <KpiTicketsTable tickets={kpi.tickets}
              search={search} empName={empName} />
          )}
        </div>
        
        {/* 底部提示 */}
        <div style={{padding:'10px 24px', borderTop:'1px solid var(--line)', background:'var(--bg-soft)', fontSize:11, color:'var(--ink-3)'}}>
          💡 点击任意行查看完整内容 · ESC 关闭
        </div>
      </div>
    </div>
  );
};

// 客服记录表(records 类型)
const KpiRecordsTable = ({ records, employees, onClickRecord, today }) => {
  if (records.length === 0) return <div style={{textAlign:'center', padding:60, color:'var(--ink-4)', fontSize:13}}>无匹配记录</div>;
  return (
    <table>
      <thead>
        <tr>
          <th>客户</th>
          <th>网站</th>
          <th>订单号</th>
          <th>分类</th>
          <th>客服</th>
          <th>状态</th>
          <th>日期</th>
          <th>跟进日</th>
        </tr>
      </thead>
      <tbody>
        {records.slice(0, 300).map(r => {
          const emp = employees.find(e => e.id === r.ownerId);
          const isOverdue = r.nextFollowUp && r.nextFollowUp < today;
          return (
            <tr key={r.id} onClick={() => onClickRecord(r)} style={{cursor:'pointer'}}
              onMouseEnter={e => e.currentTarget.style.background='var(--accent-soft)'}
              onMouseLeave={e => e.currentTarget.style.background=''}>
              <td className="text-[12px]">{r.customer || <span style={{color:'var(--ink-4)'}}>—</span>}</td>
              <td><span className="text-[10px] px-1.5 py-0.5 rounded" style={{background:'var(--bg-elevated)'}}>{r.site || '—'}</span></td>
              <td className="text-[11px] font-mono" style={{color:'var(--ink-3)'}}>{r.orderRef || '—'}</td>
              <td className="text-[11px]">{r.category || '—'}</td>
              <td className="text-[11px]">{emp ? emp.name : '—'}</td>
              <td><StatusTag status={r.status} /></td>
              <td className="text-[10px]" style={{color:'var(--ink-4)'}}>{r.date}</td>
              <td>
                {!r.nextFollowUp ? (
                  <span className="text-[10px] font-bold" style={{color:'#b45309'}}>🟡 未设</span>
                ) : (
                  <span className="text-[10px] font-mono" style={{color: isOverdue ? 'var(--bad)' : 'var(--ink-3)', fontWeight: isOverdue ? 600 : 400}}>
                    {isOverdue && '🔴 '}{r.nextFollowUp}
                  </span>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// 活跃客服表
const KpiEmployeesTable = ({ items, onClickRecord }) => {
  const [expanded, setExpanded] = useState(null);
  if (items.length === 0) return <div style={{textAlign:'center', padding:60, color:'var(--ink-4)', fontSize:13}}>无活跃客服</div>;
  return (
    <div style={{padding:'0 24px'}}>
      {items.map((e, idx) => {
        const isOpen = expanded === e.id;
        return (
          <div key={e.id} style={{borderBottom:'1px solid var(--line-soft)', padding:'10px 4px'}}>
            <div onClick={() => setExpanded(isOpen ? null : e.id)}
              style={{display:'flex', alignItems:'center', gap:12, cursor:'pointer'}}>
              <span className="font-mono text-[11px] font-bold" style={{color: idx<3?'var(--gold)':'var(--ink-4)', width:24}}>#{idx+1}</span>
              <div style={{flex:1}}>
                <div className="text-[13px] font-bold">{e.name}{e.alias?` · ${e.alias}`:''}</div>
                <div className="text-[11px] flex gap-2" style={{color:'var(--ink-3)'}}>
                  <span>📧 处理 <b>{e.total}</b></span>
                  <span style={{color:'var(--good)'}}>✓ {e.resolved}</span>
                  {e.unresolved > 0 && <span style={{color:'var(--warn)'}}>⏳ {e.unresolved}</span>}
                  {e.overdue > 0 && <span style={{color:'var(--bad)'}}>🔴 {e.overdue}</span>}
                  {e.noFollow > 0 && <span style={{color:'#b45309'}}>🟡 {e.noFollow}</span>}
                  <span>· 时长 {fmtDuration(e.mins)}</span>
                </div>
              </div>
              <span style={{color:'var(--ink-4)'}}>{isOpen ? '▾' : '▸'}</span>
            </div>
            {isOpen && (
              <div style={{marginTop:8, paddingLeft:36, maxHeight:280, overflowY:'auto'}}>
                {e.records.map(r => (
                  <div key={r.id} onClick={() => onClickRecord(r)}
                    style={{display:'flex', alignItems:'center', gap:8, padding:'6px 10px', borderRadius:6, cursor:'pointer', fontSize:11, borderBottom:'1px solid var(--line-soft)'}}
                    onMouseEnter={ev => ev.currentTarget.style.background='var(--accent-soft)'}
                    onMouseLeave={ev => ev.currentTarget.style.background=''}>
                    <span className="font-bold">{r.customer || '(无客户)'}</span>
                    <span style={{color:'var(--ink-3)'}}>{r.orderRef || ''}</span>
                    <span style={{background:'var(--bg-elevated)', padding:'1px 6px', borderRadius:4, fontSize:10}}>{r.category}</span>
                    <div style={{flex:1}}/>
                    <StatusTag status={r.status} />
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

// 拒付表
const KpiChargebacksTable = ({ records, empName }) => {
  if (records.length === 0) return <div style={{textAlign:'center', padding:60, color:'var(--ink-4)', fontSize:13}}>无匹配拒付记录</div>;
  const statusColor = (s) => ({
    pending:'#92400e', evidence:'#1e40af', submitted:'#7e22ce',
    won:'#15803d', lost:'#b91c1c', closed:'#6e6e73'
  })[s] || '#6e6e73';
  const statusLabel = (s) => ({
    pending:'待处理', evidence:'收集证据', submitted:'已提交',
    won:'已赢', lost:'已输', closed:'已关闭'
  })[s] || s;
  return (
    <table>
      <thead>
        <tr>
          <th>客户</th>
          <th>订单号</th>
          <th>金额</th>
          <th>状态</th>
          <th>负责</th>
          <th>截止</th>
          <th>创建</th>
        </tr>
      </thead>
      <tbody>
        {records.slice(0, 300).map(c => {
          const isOverdue = c.deadline && c.deadline < todayISO();
          return (
            <tr key={c.id}>
              <td className="text-[12px]">
                <div className="font-bold">{c.customer_name || '—'}</div>
                {c.customer_email && <div className="text-[10px]" style={{color:'var(--ink-4)'}}>{c.customer_email}</div>}
              </td>
              <td className="text-[11px] font-mono" style={{color:'var(--ink-3)'}}>{c.order_no || '—'}</td>
              <td className="text-[11px] font-mono font-bold" style={{color:'var(--bad)'}}>${c.amount || '0'}</td>
              <td>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{background: statusColor(c.status)+'22', color: statusColor(c.status)}}>
                  {statusLabel(c.status)}
                </span>
              </td>
              <td className="text-[11px]">{empName(c.created_by)}</td>
              <td className="text-[10px] font-mono" style={{color: isOverdue ? 'var(--bad)' : 'var(--ink-3)', fontWeight: isOverdue ? 600 : 400}}>
                {isOverdue && '🔴 '}{c.deadline || '—'}
              </td>
              <td className="text-[10px]" style={{color:'var(--ink-4)'}}>{(c.created_at || '').slice(0, 10)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// 工单表(线下/定制/实拍)
const KpiTicketsTable = ({ tickets, search, empName }) => {
  const q = search.trim().toLowerCase();
  const filterFn = (text) => !q || text.toLowerCase().includes(q);
  const oo = tickets.offline.filter(o => filterFn(`${o.customer_name||''} ${o.customer_email||''} ${o.order_no||''}`));
  const ci = tickets.custom.filter(c => filterFn(`${c.customer_name||''} ${c.customer_email||''} ${c.order_no||''} ${c.requirement||''}`));
  const pv = tickets.photo.filter(p => filterFn(`${p.sku||''} ${p.product_name||''} ${p.supplier_name||''}`));
  
  if (oo.length === 0 && ci.length === 0 && pv.length === 0) {
    return <div style={{textAlign:'center', padding:60, color:'var(--ink-4)', fontSize:13}}>无匹配工单</div>;
  }
  
  return (
    <div style={{padding:'0 24px'}}>
      {oo.length > 0 && (
        <div style={{marginBottom:18}}>
          <div className="text-[12px] font-bold mb-2" style={{color:'#4338ca'}}>💳 线下单({oo.length})</div>
          <table>
            <thead><tr><th>客户</th><th>订单号</th><th>网站</th><th>金额</th><th>状态</th><th>负责</th></tr></thead>
            <tbody>
              {oo.slice(0, 100).map(o => (
                <tr key={o.id}>
                  <td className="text-[12px]">{o.customer_name || '—'}</td>
                  <td className="text-[11px] font-mono">{o.order_no || '—'}</td>
                  <td className="text-[10px]"><span className="px-1.5 py-0.5 rounded" style={{background:'var(--bg-elevated)'}}>{o.site || '—'}</span></td>
                  <td className="text-[11px] font-mono font-bold">{o.payment_currency || '$'}{o.payment_amount || 0}</td>
                  <td className="text-[10px]">{o.status}</td>
                  <td className="text-[11px]">{empName(o.created_by)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {ci.length > 0 && (
        <div style={{marginBottom:18}}>
          <div className="text-[12px] font-bold mb-2" style={{color:'#b45309'}}>🎨 定制咨询({ci.length})</div>
          <table>
            <thead><tr><th>客户</th><th>订单/报价</th><th>网站</th><th>阶段</th><th>需求</th><th>负责</th></tr></thead>
            <tbody>
              {ci.slice(0, 100).map(c => (
                <tr key={c.id}>
                  <td className="text-[12px]">{c.customer_name || '—'}</td>
                  <td className="text-[11px] font-mono">{c.order_no || c.quote_no || '—'}</td>
                  <td className="text-[10px]"><span className="px-1.5 py-0.5 rounded" style={{background:'var(--bg-elevated)'}}>{c.site || '—'}</span></td>
                  <td className="text-[10px]">{c.stage}</td>
                  <td className="text-[11px] truncate" style={{maxWidth:240, color:'var(--ink-3)'}}>{c.requirement || '—'}</td>
                  <td className="text-[11px]">{empName(c.created_by)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {pv.length > 0 && (
        <div style={{marginBottom:18}}>
          <div className="text-[12px] font-bold mb-2" style={{color:'#7e22ce'}}>📸 实拍核实({pv.length})</div>
          <table>
            <thead><tr><th>SKU</th><th>产品</th><th>供应商</th><th>状态</th><th>差异</th><th>负责</th></tr></thead>
            <tbody>
              {pv.slice(0, 100).map(p => (
                <tr key={p.id}>
                  <td className="text-[11px] font-mono">{p.sku || '—'}</td>
                  <td className="text-[12px]">{p.product_name || '—'}</td>
                  <td className="text-[11px]" style={{color:'var(--ink-3)'}}>{p.supplier_name || '—'}</td>
                  <td className="text-[10px]">{p.status}</td>
                  <td className="text-[11px] truncate" style={{maxWidth:240, color:'var(--ink-3)'}}>{p.difference_detail || '—'}</td>
                  <td className="text-[11px]">{empName(p.created_by)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// ============================================================
// 记录详情弹窗
// ============================================================
const RecordDetailModal = ({ record, employees, onClose }) => {
  const emp = employees.find(e => e.id === record.ownerId);
  const r = record;
  return (
    <div onClick={onClose} style={{
      position:'fixed', inset:0, background:'rgba(0,0,0,.4)', zIndex:1000,
      display:'flex', alignItems:'center', justifyContent:'center', padding:20,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background:'white', borderRadius:16, padding:24, maxWidth:680, width:'100%',
        maxHeight:'85vh', overflowY:'auto', boxShadow:'0 24px 48px rgba(0,0,0,.2)',
      }}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="font-display text-lg font-bold">{r.customer || '(无客户名)'}</span>
              <StatusTag status={r.status} />
              <span className="text-[10px] px-1.5 py-0.5 rounded" style={{background:'var(--bg-elevated)'}}>{r.site}</span>
              {r.difficulty && <span className="text-[10px] px-1.5 py-0.5 rounded" style={{background:'var(--accent-soft)', color:'var(--accent)'}}>{r.difficulty}</span>}
            </div>
            <div className="text-[12px]" style={{color:'var(--ink-3)'}}>{r.category} · {r.orderRef || '无订单号'}</div>
          </div>
          <button onClick={onClose} className="btn-sec" style={{padding:'4px 12px'}}>✕</button>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-4 text-[11px]" style={{color:'var(--ink-3)'}}>
          <div><b>客服:</b> {emp ? emp.name : '?'}</div>
          <div><b>日期:</b> {r.date}</div>
          <div><b>开始:</b> {r.startTime || '-'} → {r.endTime || '-'}</div>
          <div><b>时长:</b> {fmtDuration(r.durationMin || 0)}</div>
          <div><b>下次跟进:</b> {r.nextFollowUp || <span style={{color:'#b45309'}}>🟡 未设(主管请提醒客服补上)</span>}</div>
          <div><b>网站:</b> {r.website || r.site}</div>
        </div>
        {r.note && (
          <div className="mb-3">
            <div className="text-[11px] font-bold mb-1" style={{color:'var(--ink-3)'}}>📝 备注</div>
            <div className="text-[12px] p-3 rounded whitespace-pre-wrap" style={{background:'var(--bg-soft)'}}>{r.note}</div>
          </div>
        )}
        {Array.isArray(r.followUps) && r.followUps.length > 0 && (
          <div className="mb-3">
            <div className="text-[11px] font-bold mb-1" style={{color:'var(--ink-3)'}}>💬 跟进记录 ({r.followUps.length})</div>
            <div className="space-y-1.5 max-h-48 overflow-y-auto">
              {r.followUps.map((f, i) => (
                <div key={i} className="text-[11px] p-2 rounded" style={{background:'var(--bg-soft)'}}>
                  <div className="text-[10px]" style={{color:'var(--ink-4)'}}>{f.at || f.time || ''}</div>
                  <div className="whitespace-pre-wrap mt-0.5">{f.text || f.content || ''}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {Array.isArray(r.screenshots) && r.screenshots.length > 0 && (
          <div className="mb-3">
            <div className="text-[11px] font-bold mb-1" style={{color:'var(--ink-3)'}}>📷 截图 ({r.screenshots.length})</div>
            <div className="flex gap-2 flex-wrap">
              {r.screenshots.map((s, i) => (
                <img key={i} src={typeof s === 'string' ? s : (s.url || s.data || '')} alt="" 
                  style={{maxWidth:120, maxHeight:120, borderRadius:6, border:'1px solid var(--line)', cursor:'zoom-in'}}
                  onClick={(e) => { window.open(e.target.src, '_blank'); }} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


// ============================================================
// 回收站
// ============================================================
const TrashModule = ({ user, employees, records, setRecords, toast }) => {
  const isAdmin = (user.role === 'admin' || user.role === 'super_admin');
  const deleted = records.filter(r => r.deleted);

  // 员工只能看自己删除的
  const visible = isAdmin ? deleted : deleted.filter(r => r.deletedBy === user.id || r.ownerId === user.id);

  const restore = (id) => {
    setRecords(prev => prev.map(r => r.id === id ? { ...r, deleted: false, deletedAt: null, deletedBy: null } : r));
    toast('✓ 已恢复');
  };

  const permaDelete = async (id) => {
    if (!isAdmin) { toast('⚠ 仅主管可永久删除'); return; }
    if (!await wsConfirm('确认永久删除？此操作不可撤销！')) return;
    setRecords(prev => prev.filter(r => r.id !== id));
    toast('✗ 已永久删除');
  };

  const clearAll = async () => {
    if (!isAdmin) return;
    if (!await wsConfirm(`确认永久删除全部 ${deleted.length} 条记录？此操作不可撤销！`)) return;
    setRecords(prev => prev.filter(r => !r.deleted));
    toast('✗ 已清空回收站');
  };

  return (
    <div className="space-y-5 fade-in">
      <div className="paper rounded-2xl p-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Icon name="trash" className="w-5 h-5" style={{color:'var(--ink-3)'}} />
            <span className="font-display text-base font-bold">回收站</span>
            <span className="tag tag-neutral">{visible.length} 条</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px]" style={{color:'var(--ink-3)'}}>
              {isAdmin ? '主管视角 · 可恢复或永久删除全部记录' : '仅显示你删除的记录 · 永久删除需主管操作'}
            </span>
            {isAdmin && visible.length > 0 && (
              <button className="btn-danger" onClick={clearAll}>清空回收站</button>
            )}
          </div>
        </div>
      </div>

      <div className="paper rounded-2xl overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin">
          <table>
            <thead>
              <tr>
                <th>原日期</th>
                <th>员工</th>
                <th>客户</th>
                <th>事项</th>
                <th>备注</th>
                <th>删除时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {visible.length === 0 ? (
                <tr><td colSpan="7" style={{textAlign:'center', padding:'30px', color:'var(--ink-3)'}}>回收站为空</td></tr>
              ) : visible.map(r => {
                const owner = employees.find(e => e.id === r.ownerId);
                return (
                  <tr key={r.id}>
                    <td><span className="font-mono text-xs">{r.date}</span></td>
                    <td>{owner?.name || '—'}</td>
                    <td><span className="text-xs">{r.customer || '—'}</span></td>
                    <td><span className="tag tag-neutral">{r.category || '—'}</span></td>
                    <td><span className="text-xs" style={{color:'var(--ink-3)'}}>{r.orderRef || r.note || '—'}</span></td>
                    <td><span className="font-mono text-[10px]" style={{color:'var(--ink-4)'}}>
                      {r.deletedAt ? new Date(r.deletedAt).toLocaleString('zh-CN', {month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit'}) : '—'}
                    </span></td>
                    <td>
                      <div className="flex gap-1">
                        <button className="btn-sec" onClick={() => restore(r.id)} title="恢复">
                          <Icon name="restore" className="w-3 h-3 inline mr-1" />恢复
                        </button>
                        {isAdmin && (
                          <button className="btn-danger" onClick={() => permaDelete(r.id)} title="永久删除">永久删除</button>
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
    </div>
  );
};

// ============================================================
// 员工管理 (仅主管)
// ============================================================
// 🚨 拒付专人配置组件
// ============================================================
// 🛡 删除审批流程 - 防离职员工恶意删除
// ============================================================

// 判断是否当天数据
const isSameDay = (record) => {
  const created = record.created_at || record.createdAt || record.create_time;
  if (!created) return false;
  const d = new Date(created);
  const today = new Date();
  return d.getFullYear() === today.getFullYear() && 
         d.getMonth() === today.getMonth() && 
         d.getDate() === today.getDate();
};

// 通用删除请求 - 替代直接 deleted=true
// 主管/老板:仍可直接删除(会有审计日志)
// 普通客服:必须走审批
const requestDelete = async ({ user, tableName, moduleLabel, record, recordSummary, toast, onSuccess }) => {
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  const isSuperAdmin = user.role === 'super_admin';
  const sameDay = isSameDay(record);
  const isOwner = record.created_by === user.id || record.ownerId === user.id;
  
  // 老板:直接删除(权限最大)
  if (isSuperAdmin) {
    if (!await wsConfirm(`👑 老板权限直接删除\n\n${recordSummary}\n\n确认删除? 此操作会记录到审计日志。`)) return false;
    try {
      const res = await CLOUD.upsert(tableName, { ...record, deleted: true, updated_at: new Date().toISOString() });
      if (res) {
        // 🆕 fix9b: 验证 deleted=true 真的写入了 — 如果 CLOUD.upsert 的 schema-retry 把 deleted 字段剥离了(因为表没这一列),
        // upsert 会"成功"但记录其实没标记删除 → 刷新后又会回来。这种情况下提示用户跑 SQL 而不是冒充已删除。
        const savedRow = Array.isArray(res) ? res[0] : res;
        const actuallyDeleted = savedRow && savedRow.deleted === true;
        if (!actuallyDeleted) {
          alert(`⚠ 删除可能未生效\n\n数据库的 ${tableName} 表可能还没有 deleted 列(响应里 deleted=${savedRow?.deleted}).\n\n请主管在 Supabase SQL Editor 执行最新的 16_fix7_photo_replies.sql 然后强刷页面。\n\n刷新后这条记录还会出现,直到列建好.`);
          return false;
        }
        // 记录审计
        try {
          await CLOUD.client.from('delete_requests').insert({
            table_name: tableName,
            record_id: String(record.id),
            record_summary: recordSummary,
            module_label: moduleLabel,
            reason: '老板直接删除',
            requested_by: user.id,
            requested_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
            is_same_day: sameDay,
            created_at_original: record.created_at || null,
            approver_role: 'super_admin',
            status: 'approved',
            approver_id: user.id,
            approver_name: user.name,
            approved_at: new Date().toISOString(),
            approval_note: '总管直接删除(无需审批)',
          });
        } catch {}
        toast('✓ 已删除');
        if (onSuccess) onSuccess();
        return true;
      } else {
        // 🆕 fix8: 之前这里默默 return false,用户看不到错误
        // 实际可能是:1) 数据库无 deleted 列(aftersales/refills/refunds 旧 schema) 2) RLS 拒绝 3) 列名拼写错
        alertSaveError('删除');
        return false;
      }
    } catch(e) { alert('删除失败: ' + e.message); }
    return false;
  }
  
  // 主管:
  // - 当天客服申请的可以批准(在审批中心做)
  // - 主动删除当天数据:可直接删
  // - 主动删除历史数据:申请,需老板批准
  if (isAdmin) {
    if (sameDay) {
      if (!await wsConfirm(`⭐ 主管删除当天数据\n\n${recordSummary}\n\n确认删除?`)) return false;
      try {
        const res = await CLOUD.upsert(tableName, { ...record, deleted: true, updated_at: new Date().toISOString() });
        if (res) {
          try {
            await CLOUD.client.from('delete_requests').insert({
              table_name: tableName,
              record_id: String(record.id),
              record_summary: recordSummary,
              module_label: moduleLabel,
              reason: '主管删除当天数据',
              requested_by: user.id,
              requested_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
              is_same_day: true,
              created_at_original: record.created_at || null,
              approver_role: 'admin',
              status: 'approved',
              approver_id: user.id,
              approver_name: user.name,
              approved_at: new Date().toISOString(),
              approval_note: '主管直接删除当天数据',
            });
          } catch {}
          toast('✓ 已删除');
          if (onSuccess) onSuccess();
          return true;
        }
      } catch(e) { alert('删除失败: ' + e.message); }
      return false;
    }
    // 历史数据:主管也要老板批准
    const reason = await wsPrompt(`📜 删除历史数据需要老板审批\n\n${recordSummary}\n\n请填写删除理由:`);
    if (!reason || !reason.trim()) return false;
    try {
      await CLOUD.client.from('delete_requests').insert({
        table_name: tableName,
        record_id: String(record.id),
        record_summary: recordSummary,
        module_label: moduleLabel,
        reason: reason.trim(),
        requested_by: user.id,
        requested_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
        is_same_day: false,
        created_at_original: record.created_at || null,
        approver_role: 'super_admin',
        status: 'pending',
      });
      toast('✓ 已提交老板审批,等待批准');
      return true;
    } catch(e) { alert('提交失败: ' + e.message); return false; }
  }
  
  // 客服:
  if (!isOwner) {
    alert('❌ 你不能删除别人的数据');
    return false;
  }
  if (!sameDay) {
    alert('❌ 历史数据(非当天)只有主管/老板能删除\n\n请联系主管');
    return false;
  }
  // 当天 + 是自己的:提交主管审批
  const reason = await wsPrompt(`📋 申请删除当天数据(需主管批准)\n\n${recordSummary}\n\n请填写删除理由:`);
  if (!reason || !reason.trim()) return false;
  try {
    await CLOUD.client.from('delete_requests').insert({
      table_name: tableName,
      record_id: String(record.id),
      record_summary: recordSummary,
      module_label: moduleLabel,
      reason: reason.trim(),
      requested_by: user.id,
      requested_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
      is_same_day: true,
      created_at_original: record.created_at || null,
      approver_role: 'admin',
      status: 'pending',
    });
    toast('✓ 删除申请已提交,等待主管批准');
    return true;
  } catch(e) { alert('提交失败: ' + e.message); return false; }
};


// 📋 删除审批中心 - 主管/老板用
const DeleteApprovalCenter = ({ user, toast }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('pending');
  
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  const isSuperAdmin = user.role === 'super_admin';
  
  const load = async () => {
    setLoading(true);
    try {
      const data = await CLOUD.list('delete_requests', { order:{col:'requested_at', asc:false}, limit:500 });
      setList(data || []);
      STORE.set('delete_requests_cache', data || []);
    } catch(e) { toast('❌ 加载失败: ' + e.message); }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  
  // 当前用户能批准的请求
  const filtered = useMemo(() => {
    let l = list;
    // 主管:能批准 approver_role=admin
    // 老板:能批准所有
    if (!isSuperAdmin) {
      l = l.filter(r => r.approver_role === 'admin');
    }
    if (filterStatus !== 'all') l = l.filter(r => r.status === filterStatus);
    return l;
  }, [list, filterStatus, isSuperAdmin]);
  
  const approve = async (req) => {
    const note = await wsPrompt(`✅ 批准删除\n\n${req.record_summary}\n\n备注(可留空):`, '');
    if (note === null) return;
    try {
      // 1. 标记审批
      await CLOUD.client.from('delete_requests').update({
        status: 'approved',
        approver_id: user.id,
        approver_name: user.name + (user.alias ? ' ' + user.alias : ''),
        approved_at: new Date().toISOString(),
        approval_note: note || null,
      }).eq('id', req.id);
      // 2. 实际删除目标记录
      const { data: orig } = await CLOUD.client.from(req.table_name).select('*').eq('id', req.record_id).single();
      if (orig) {
        await CLOUD.client.from(req.table_name).update({
          deleted: true,
          updated_at: new Date().toISOString(),
        }).eq('id', req.record_id);
      }
      toast('✓ 已批准并删除');
      load();
    } catch(e) { alert('操作失败: ' + e.message); }
  };
  
  const reject = async (req) => {
    const note = await wsPrompt(`❌ 拒绝删除\n\n${req.record_summary}\n\n拒绝理由:`, '');
    if (note === null) return;
    if (!note.trim()) { alert('请填写拒绝理由'); return; }
    try {
      await CLOUD.client.from('delete_requests').update({
        status: 'rejected',
        approver_id: user.id,
        approver_name: user.name + (user.alias ? ' ' + user.alias : ''),
        approved_at: new Date().toISOString(),
        approval_note: note.trim(),
      }).eq('id', req.id);
      toast('✓ 已拒绝');
      load();
    } catch(e) { alert('操作失败: ' + e.message); }
  };
  
  const pendingCount = list.filter(r => r.status === 'pending' && (isSuperAdmin || r.approver_role === 'admin')).length;
  
  return (
    <div className="space-y-4 fade-in">
      <div className="paper rounded-2xl p-4">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12}}>
          <div>
            <div className="font-display" style={{fontSize:18, fontWeight:600}}>🛡 删除审批中心</div>
            <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>
              {isSuperAdmin ? '老板视角:可批准所有删除请求' : '主管视角:可批准当天客服删除申请,历史数据需老板批准'}
              {pendingCount > 0 && <span style={{marginLeft:8, color:'#dc2626', fontWeight:600}}>· 待你审批 {pendingCount}</span>}
            </div>
          </div>
        </div>
        <div style={{marginTop:12, display:'flex', gap:6, flexWrap:'wrap'}}>
          {[
            { key:'pending',  label:'⏳ 待审批' },
            { key:'approved', label:'✅ 已批准' },
            { key:'rejected', label:'❌ 已拒绝' },
            { key:'all',      label:'📋 全部' },
          ].map(t => (
            <button key={t.key} onClick={() => setFilterStatus(t.key)}
              style={{padding:'4px 11px', borderRadius:14, fontSize:11, cursor:'pointer', fontFamily:'inherit',
                border:'1px solid ' + (filterStatus === t.key ? 'var(--accent)' : 'var(--line)'),
                background: filterStatus === t.key ? 'var(--accent)' : 'white',
                color: filterStatus === t.key ? 'white' : 'var(--ink-2)',
                fontWeight: filterStatus === t.key ? 600 : 400}}>
              {t.label}
            </button>
          ))}
        </div>
      </div>
      
      {loading ? <div className="paper rounded-2xl p-10" style={{textAlign:'center'}}>⏳ 加载中...</div>
       : filtered.length === 0 ? <div className="paper rounded-2xl p-12" style={{textAlign:'center', color:'var(--ink-3)'}}>🎉 没有待审批的删除请求</div>
       : <div className="space-y-2">
        {filtered.map(req => {
          const statusStyle = req.status === 'pending' ? { bg:'#fef3c7', color:'#854d0e' }
            : req.status === 'approved' ? { bg:'#dcfce7', color:'#15803d' }
            : { bg:'#fee2e2', color:'#991b1b' };
          const statusLabel = req.status === 'pending' ? '⏳ 待审批' : req.status === 'approved' ? '✅ 已批准' : '❌ 已拒绝';
          const canApprove = req.status === 'pending' && (isSuperAdmin || req.approver_role === 'admin');
          
          return (
            <div key={req.id} className="paper rounded-2xl" style={{padding:'12px 16px', border:'1.5px solid var(--line)'}}>
              <div style={{display:'flex', justifyContent:'space-between', gap:10, flexWrap:'wrap'}}>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{display:'flex', gap:6, alignItems:'center', flexWrap:'wrap', marginBottom:4}}>
                    <span style={{padding:'2px 8px', borderRadius:10, fontSize:10, fontWeight:600, background: statusStyle.bg, color: statusStyle.color}}>{statusLabel}</span>
                    <span style={{padding:'2px 8px', background:'#f5f5f7', color:'var(--ink-3)', borderRadius:10, fontSize:10, fontWeight:600}}>{req.module_label || req.table_name}</span>
                    {req.is_same_day ? <span style={{padding:'2px 8px', background:'#dbeafe', color:'#1e3a8a', borderRadius:10, fontSize:10, fontWeight:600}}>📅 当天</span>
                      : <span style={{padding:'2px 8px', background:'#fef3c7', color:'#854d0e', borderRadius:10, fontSize:10, fontWeight:600}}>📜 历史</span>}
                    {req.approver_role === 'super_admin' && <span style={{padding:'2px 8px', background:'#fef2f2', color:'#dc2626', borderRadius:10, fontSize:10, fontWeight:600}}>👑 需老板批准</span>}
                  </div>
                  <div style={{fontSize:13, fontWeight:600, marginBottom:3}}>{req.record_summary || '(无摘要)'}</div>
                  <div style={{fontSize:11, color:'var(--ink-3)', marginTop:3}}>
                    申请人: <strong style={{color:'var(--ink-2)'}}>{req.requested_by_name}</strong>
                    {req.requested_at && <span> · {new Date(req.requested_at).toLocaleString('zh-CN')}</span>}
                  </div>
                  {req.reason && <div style={{marginTop:5, padding:'5px 10px', background:'#fef9c3', borderRadius:5, fontSize:12, color:'#713f12'}}>💬 理由:{req.reason}</div>}
                  {req.approval_note && (
                    <div style={{marginTop:5, padding:'5px 10px', background:'#f0fdf4', borderRadius:5, fontSize:11, color:'#15803d'}}>
                      {req.status === 'approved' ? '✓ 批准' : '✗ 拒绝'}: {req.approver_name} · {req.approval_note}
                    </div>
                  )}
                </div>
                {canApprove && (
                  <div style={{display:'flex', gap:6, flexShrink:0}}>
                    <button onClick={() => approve(req)} style={{padding:'6px 14px', background:'#15803d', color:'white', border:'none', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}>
                      ✓ 批准
                    </button>
                    <button onClick={() => reject(req)} style={{padding:'6px 14px', background:'#dc2626', color:'white', border:'none', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}>
                      ✗ 拒绝
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>}
    </div>
  );
};



// ============================================================
// 🆕 fix92: 绩效考核半自动打分板 — 客观项自动统计,主观项主管手填,实时总分,存 system_settings
const KPI_ITEMS = [
  { key:'q1', dim:'业绩', label:'邮件质量+时效', max:20 },
  { key:'q2', dim:'业绩', label:'询价跟进转化', max:15 },
  { key:'q3', dim:'业绩', label:'订单问题跟进', max:10 },
  { key:'q4', dim:'业绩', label:'售后与纠纷', max:15 },
  { key:'q5', dim:'业绩', label:'求助风控意识', max:15 },
  { key:'a1', dim:'态度', label:'培训运用执行', max:10 },
  { key:'a2', dim:'态度', label:'轮休协作纪律', max:10 },
  { key:'a3', dim:'态度', label:'企业文化管理', max:5 },
];
// 🆕 fix118: 奖惩自动计数权重(对应绩效打分器附加奖惩项)
const KPI_BONUS_WEIGHTS = { major: 1, optimize: 0.3, normal: 1, cbFault: -3, refill: -2, photo: -1 };
// 问题反馈关键词分类(可继续补充):命中"重大"→重大反馈(+1);否则命中"产品优化"→产品优化奖(+0.3);其余=普通发现问题反馈(+1)
const KPI_FB_MAJOR_KW = ['重大','严重','批量','普遍','系统性','大量','多个客户','反复','重复出现','高频','集中性','安全隐患','起火','触电','漏电','召回','重大质量','大面积'];
const KPI_FB_OPTIMIZE_KW = ['优化','改进','改良','建议改','设计建议','工艺','包装改进','结构','产品建议','改善','提升体验','优化建议','质量改进','流程优化'];
const kpiClassifyFeedback = (rec) => {
  const t = ((rec.note || '') + ' ' + (rec.category || '') + ' ' + (rec.feedbackNote || '') + ' ' + (rec.escalateReason || '')).toLowerCase();
  if (KPI_FB_MAJOR_KW.some(k => t.includes(k.toLowerCase()))) return 'major';
  if (KPI_FB_OPTIMIZE_KW.some(k => t.includes(k.toLowerCase()))) return 'optimize';
  return 'normal';
};
const KPIScoreboard = ({ employees, records, toast, readOnly, chargebacks = [], refills = [], photos = [] }) => {
  const [month, setMonth] = useState(new Date().toISOString().slice(0,7));
  const [scores, setScores] = useState({});
  const [saving, setSaving] = useState(false);
  const today = new Date().toISOString().slice(0,10);
  const storeKey = 'kpi_scores_' + month;
  useEffect(() => {
    (async () => {
      try {
        if (!CLOUD.client) { setScores({}); return; }
        const { data } = await CLOUD.client.from('system_settings').select('value').eq('key', storeKey).maybeSingle();
        setScores((data && data.value) || {});
      } catch(e) { setScores({}); }
    })();
  }, [month]);
  const monRecs = useMemo(() => (records||[]).filter(r => (r.date||'').slice(0,7) === month), [records, month]);
  const metrics = useMemo(() => {
    const m = {};
    // 🆕 fix104: 主管/老板要能看到并给【全员】打分 —— 列出所有在职客服(排除隐藏的老板账号),
    // 本月没记录的也出现(指标显示 0),不再 skip,解决"主管看不到所有人绩效"。
    const staff = (employees||[]).filter(e => !e.hideFromList && e.role !== 'super_admin' && e.role !== 'hr' && e.role !== 'finance');
    // 🆕 fix118: 本月的拒付失误标记 / 补件 / 实拍(按人月归集到奖惩)
    const monCb = (chargebacks || []).filter(c => c.cs_fault && ((c.created_at || c.deadline || c.updated_at || '').slice(0,7) === month));
    const monRf = (refills || []).filter(r => (r.created_at || '').slice(0,7) === month);
    const monPh = (photos || []).filter(p => (p.created_at || '').slice(0,7) === month);
    staff.forEach(e => {
      const recs = monRecs.filter(r => r.ownerId === e.id);
      const un = recs.filter(r => r.status !== 'resolved');
      const ov = un.filter(r => r.nextFollowUp && r.nextFollowUp < today);
      const nf = un.filter(r => !r.nextFollowUp);
      const fb = recs.filter(r => r.isFeedback);
      // 🆕 fix118: 问题反馈分类(重大/产品优化/普通)+ 拒付失误/补件/实拍 按人月计数 → 自动奖惩
      const fbMajor = fb.filter(r => kpiClassifyFeedback(r) === 'major');
      const fbOpt = fb.filter(r => kpiClassifyFeedback(r) === 'optimize' && !fbMajor.includes(r));
      const fbNorm = fb.filter(r => !fbMajor.includes(r) && !fbOpt.includes(r));
      const cbFault = monCb.filter(c => (c.cs_fault_emp || c.created_by) === e.id);
      const myRf = monRf.filter(r => r.created_by === e.id);
      const myPh = monPh.filter(p => p.created_by === e.id);
      const bonusAuto = fbMajor.length * KPI_BONUS_WEIGHTS.major + fbOpt.length * KPI_BONUS_WEIGHTS.optimize
        + fbNorm.length * KPI_BONUS_WEIGHTS.normal + cbFault.length * KPI_BONUS_WEIGHTS.cbFault
        + myRf.length * KPI_BONUS_WEIGHTS.refill + myPh.length * KPI_BONUS_WEIGHTS.photo;
      m[e.id] = { emp:e, total:recs.length, unresolved:un.length,
        overdue: ov.length, noFollow: nf.length, feedback: fb.length,
        avgMin: recs.length ? Math.round(recs.reduce((s,r)=>s+(r.durationMin||0),0) / recs.length) : 0,
        _recs: recs, _un: un, _ov: ov, _nf: nf, _fb: fb,
        _fbMajor: fbMajor, _fbOpt: fbOpt, _fbNorm: fbNorm, _cbFault: cbFault, _rf: myRf, _ph: myPh,
        bonusAuto: Math.round(bonusAuto * 10) / 10 };  // 🆕 fix118
    });
    return m;
  }, [employees, monRecs, today, chargebacks, refills, photos, month]);
  const rows = Object.values(metrics).sort((a,b)=>b.total-a.total);
  const [drill, setDrill] = useState(null);  // 🆕 fix117: 客观项点击 → 明细弹窗 {title, records}
  const getScore = (id, key, dflt) => { const s = scores[id] || {}; return (s[key] !== undefined && s[key] !== '') ? s[key] : dflt; };
  const setScore = (id, key, val) => setScores(prev => ({ ...prev, [id]: { ...(prev[id]||{}), [key]: val } }));
  const total = (m) => { let t = 0; KPI_ITEMS.forEach(it => { t += Number(getScore(m.emp.id, it.key, 0)) || 0; }); t += Number(getScore(m.emp.id, 'bonus', m.bonusAuto)) || 0; return t; };
  // 🆕 fix117: 自动建议(只填可量化的客观项 q1 邮件质量+时效 + bonus 问题反馈;主观项仍人工)
  // q1 = 20 分起,按 逾期率/无跟进率 扣;公式透明,主管可再手动调整后保存。
  const suggestObjective = () => {
    if (readOnly) return;
    setScores(prev => {
      const next = { ...prev };
      rows.forEach(m => {
        const cur = { ...(next[m.emp.id] || {}) };
        const tot = m.total || 0;
        const ovR = tot ? m.overdue / tot : 0;
        const nfR = tot ? m.noFollow / tot : 0;
        let q1 = Math.round(20 * (1 - 0.5 * ovR - 0.5 * nfR));
        q1 = Math.max(0, Math.min(20, tot === 0 ? 0 : q1));
        cur.q1 = q1;
        cur.bonus = m.bonusAuto;  // 🆕 fix118: 奖惩=自动计数(反馈分级 + 拒付失误 + 补件 + 实拍)
        next[m.emp.id] = cur;
      });
      return next;
    });
    toast && toast('🪄 已按工作明细建议「邮件质量+时效」与「奖惩」(反馈分级/拒付失误/补件/实拍)· 主观项仍需人工 · 确认后点保存');
  };
  const save = async () => {
    setSaving(true);
    try { await CLOUD.client.from('system_settings').upsert({ key: storeKey, value: scores }, { onConflict: 'key' }); toast && toast('✓ 绩效评分已保存 (' + month + ')'); }
    catch(e) { toast && toast('❌ 保存失败: ' + e.message); }
    setSaving(false);
  };
  return (
    <div className="paper rounded-2xl p-4">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:10, marginBottom:12}}>
        <div className="font-display" style={{fontSize:15, fontWeight:600}}>📋 绩效考核打分 <span style={{fontSize:11, color:'var(--ink-3)', fontWeight:400}}>· 客观项自动算 / 主观项手填 / 满分100+奖惩</span></div>
        <div style={{display:'flex', gap:8, alignItems:'center'}}>
          <input type="month" value={month} onChange={e=>setMonth(e.target.value)} style={{padding:'5px 8px', border:'1px solid var(--line)', borderRadius:6, fontSize:12, fontFamily:'inherit'}}/>
          {readOnly
            ? <span style={{padding:'5px 10px', fontSize:11, background:'#f3e8ff', color:'#7c3aed', borderRadius:6, fontWeight:600}}>🧑‍💼 人事只读</span>
            : <>
                <button onClick={suggestObjective} title="按本月工作明细自动建议可量化的客观项(邮件质量+时效、问题反馈奖),主观项仍需人工,可再调整后保存" style={{padding:'5px 10px', fontSize:12, border:'1px solid #c4b5fd', borderRadius:6, background:'#f5f3ff', color:'#6d28d9', cursor:'pointer', fontWeight:600}}>🪄 自动建议</button>
                <button onClick={save} disabled={saving} className="btn-pri" style={{padding:'5px 12px', fontSize:12}}>{saving?'保存中…':'💾 保存评分'}</button>
              </>}
        </div>
      </div>
      {rows.length === 0 ? (
        <div style={{padding:24, textAlign:'center', color:'var(--ink-3)', fontSize:13}}>本月暂无客服记录</div>
      ) : (
        <div style={{overflowX:'auto'}}>
          <table style={{borderCollapse:'collapse', fontSize:12, width:'100%', minWidth:920}}>
            <thead>
              <tr style={{color:'var(--ink-3)', textAlign:'left'}}>
                <th style={{padding:'6px 8px', position:'sticky', left:0, background:'white'}}>客服</th>
                <th style={{padding:'6px 8px'}}>客观参考(自动)</th>
                {KPI_ITEMS.map(it => <th key={it.key} style={{padding:'6px 4px', textAlign:'center', minWidth:60}} title={it.dim+'·满'+it.max+'分'}>{it.label}<div style={{fontSize:9, color:'var(--ink-4)'}}>/{it.max}</div></th>)}
                <th style={{padding:'6px 4px', textAlign:'center', minWidth:56}}>奖惩 ±</th>
                <th style={{padding:'6px 8px', textAlign:'right', color:'#0071e3'}}>总分</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((m, idx) => (
                <tr key={m.emp.id} style={{background: idx%2?'#fafafa':'white', borderTop:'1px solid var(--line)'}}>
                  <td style={{padding:'8px', position:'sticky', left:0, background: idx%2?'#fafafa':'white', fontWeight:600}}>{m.emp.name}{m.emp.alias?<div style={{fontSize:9,color:'var(--ink-3)'}}>{m.emp.alias}</div>:null}</td>
                  <td style={{padding:'8px', fontSize:10, color:'var(--ink-2)', lineHeight:1.8, minWidth:210}}>
                    {(() => { const ds = (label, list) => ({ cursor: list.length ? 'pointer' : 'default', textDecoration: list.length ? 'underline dotted' : 'none', textUnderlineOffset: 2 }); const open = (label, list) => { if (list.length) setDrill({ title: `${m.emp.name} · ${label} (${month})`, records: list }); }; return (<>
                      邮件 <b style={ds('邮件', m._recs)} onClick={() => open('全部邮件记录', m._recs)} title="点击查看明细">{m.total}</b> · <span style={ds('未解决', m._un)} onClick={() => open('未解决', m._un)} title="点击查看明细">未解决 {m.unresolved}</span> · <span style={{...ds('逾期', m._ov), color: m.overdue?'#dc2626':'inherit'}} onClick={() => open('逾期', m._ov)} title="点击查看明细">逾期 {m.overdue}</span> · <span style={ds('无跟进', m._nf)} onClick={() => open('无跟进', m._nf)} title="点击查看明细">无跟进 {m.noFollow}</span><br/>
                      问题反馈 <b style={{...ds('问题反馈', m._fb), color:'#059669'}} onClick={() => open('问题反馈', m._fb)} title="点击查看明细">{m.feedback}</b> · 均时长 {m.avgMin}min<br/>
                      <span style={{color:'var(--ink-4)'}}>奖惩自动:</span> <span style={ds('重大反馈', m._fbMajor)} onClick={() => open('重大反馈 +1', m._fbMajor)} title="命中重大关键词">重大{m._fbMajor.length}</span>·<span style={ds('产品优化', m._fbOpt)} onClick={() => open('产品优化 +0.3', m._fbOpt)} title="命中优化关键词">优化{m._fbOpt.length}</span>·<span style={ds('普通反馈', m._fbNorm)} onClick={() => open('普通反馈 +1', m._fbNorm)}>普通{m._fbNorm.length}</span>·<span style={{...ds('拒付失误', m._cbFault), color: m._cbFault.length?'#dc2626':'inherit'}} onClick={() => open('拒付失误 -3', m._cbFault)} title="拒付被标记客服失误">拒付失误{m._cbFault.length}</span>·<span style={{...ds('补件', m._rf), color: m._rf.length?'#ea580c':'inherit'}} onClick={() => open('补发配件 -2', m._rf)}>补件{m._rf.length}</span>·<span style={{...ds('实拍', m._ph), color: m._ph.length?'#be185d':'inherit'}} onClick={() => open('实拍发货 -1', m._ph)}>实拍{m._ph.length}</span> = <b style={{color: m.bonusAuto>=0?'#059669':'#dc2626'}}>{m.bonusAuto>=0?'+':''}{m.bonusAuto}</b>
                    </>); })()}
                  </td>
                  {KPI_ITEMS.map(it => (
                    <td key={it.key} style={{padding:'4px', textAlign:'center'}}>
                      <input type="number" min="0" max={it.max} value={getScore(m.emp.id, it.key, 0)} onChange={e=>setScore(m.emp.id, it.key, e.target.value)} disabled={readOnly}
                        style={{width:46, padding:'3px', textAlign:'center', border:'1px solid var(--line)', borderRadius:5, fontSize:12, fontFamily:'inherit'}}/>
                    </td>
                  ))}
                  <td style={{padding:'4px', textAlign:'center'}}>
                    <input type="number" value={getScore(m.emp.id, 'bonus', m.bonusAuto)} onChange={e=>setScore(m.emp.id, 'bonus', e.target.value)} disabled={readOnly}
                      style={{width:46, padding:'3px', textAlign:'center', border:'1px solid var(--line)', borderRadius:5, fontSize:12, fontFamily:'inherit'}}/>
                  </td>
                  <td style={{padding:'8px', textAlign:'right', fontWeight:700, fontSize:15, color:'#0071e3'}}>{total(m)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{fontSize:10, color:'var(--ink-3)', marginTop:8, lineHeight:1.6}}>
            客观项(邮件量/逾期/无跟进/反馈/时长)由系统按本月记录自动统计 · 点数字可查明细;各项默认 0 分,主管按实际打分;「奖惩」默认=问题反馈奖(+反馈数),可手填(售后扣分 / 互助加分等)。
          </div>
        </div>
      )}
      {drill && (
        <div onClick={() => setDrill(null)} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:100005, display:'flex', alignItems:'center', justifyContent:'center', padding:16}}>
          <div onClick={e => e.stopPropagation()} className="paper rounded-2xl" style={{width:'100%', maxWidth:680, maxHeight:'84vh', display:'flex', flexDirection:'column', overflow:'hidden'}}>
            <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div style={{fontSize:15, fontWeight:700}}>{drill.title} · {drill.records.length} 条</div>
              <button onClick={() => setDrill(null)} className="btn-sec" style={{padding:'3px 10px'}}>×</button>
            </div>
            <div style={{overflowY:'auto', padding:'8px 0'}}>
              {drill.records.length === 0 ? <div style={{padding:24, textAlign:'center', color:'var(--ink-3)', fontSize:13}}>无记录</div> : (
                <table style={{width:'100%', fontSize:12, borderCollapse:'collapse'}}>
                  <thead><tr style={{color:'var(--ink-3)', textAlign:'left'}}>
                    <th style={{padding:'6px 12px'}}>日期</th><th style={{padding:'6px 8px'}}>订单号</th><th style={{padding:'6px 8px'}}>客户</th><th style={{padding:'6px 8px'}}>事项</th><th style={{padding:'6px 8px'}}>状态</th><th style={{padding:'6px 8px'}}>下次跟进</th>
                  </tr></thead>
                  <tbody>
                    {drill.records.map((r, i) => (
                      <tr key={r.id || i} style={{borderTop:'1px solid var(--line)'}}>
                        <td style={{padding:'6px 12px', whiteSpace:'nowrap'}}>{((r.date||r.created_at||'')+'').slice(5,10)}</td>
                        <td style={{padding:'6px 8px', fontWeight:600}}>{(r.orderRef || r.order_no || r.order_ref) ? <OrderRefLink orderNo={r.orderRef || r.order_no || r.order_ref} /> : '-'}</td>
                        <td style={{padding:'6px 8px', maxWidth:140, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{r.customer || r.customer_email || r.customer_name || '-'}</td>
                        <td style={{padding:'6px 8px'}}>{r.category || r.product_name || r.issue_type || '-'}</td>
                        <td style={{padding:'6px 8px'}}>{r.status === 'resolved' ? <span style={{color:'#16a34a'}}>已解决</span> : (r.status ? <span style={{color:'#ca8a04'}}>{r.status}</span> : '-')}</td>
                        <td style={{padding:'6px 8px', color: (r.nextFollowUp && r.nextFollowUp < today) ? '#dc2626' : 'var(--ink-3)', whiteSpace:'nowrap'}}>{r.nextFollowUp || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// 📊 主管汇总面板 - 总览所有模块
// ============================================================
const AdminOverviewDashboard = ({ user, employees, toast }) => {
  const [data, setData] = useState({ chargebacks:[], offlineOrders:[], customInquiries:[], photoVerif:[], aftersales:[], refills:[], refunds:[], reviews:[], records:[], deleteReqs:[], crossDept:[] });
  const [loading, setLoading] = useState(true);
  const [filterEmployee, setFilterEmployee] = useState('all');
  const [range, setRange] = useState('month');           // 🆕 fix132 today/week/month/quarter/year/all/custom
  const [cFrom, setCFrom] = useState('');
  const [cTo, setCTo] = useState('');
  const [drill, setDrill] = useState(null);  // 🆕 fix94: 点统计卡看明细 { title, rows }
  const openDrill = (title, rows) => setDrill({ title, rows: rows || [] });
  const inTime = (r) => {
    if (range === 'all') return true;
    const ds = (r.created_at || r.date || r.createdAt || r.created || '').toString().slice(0, 10);
    if (!ds) return false;
    if (range === 'custom') { if (cFrom && ds < cFrom) return false; if (cTo && ds > cTo) return false; return true; }
    const today = new Date().toISOString().slice(0, 10);
    if (range === 'today') return ds === today;
    const dt = new Date(ds), c = new Date();
    if (range === 'week') c.setDate(c.getDate() - 7);
    else if (range === 'month') c.setMonth(c.getMonth() - 1);
    else if (range === 'quarter') c.setMonth(c.getMonth() - 3);
    else if (range === 'year') c.setFullYear(c.getFullYear() - 1);
    return dt >= c;
  };
  
  const load = async () => {
    setLoading(true);
    try {
      const [cb, oo, ci, pv, af, rf, rfd, rev, rec, dr] = await Promise.all([
        CLOUD.list('chargebacks', { limit: 500 }),
        CLOUD.list('offline_orders', { limit: 500 }),
        CLOUD.list('custom_inquiries', { limit: 500 }),
        CLOUD.list('photo_verifications', { limit: 500 }),
        CLOUD.list('aftersales', { limit: 500 }),
        CLOUD.list('refills', { limit: 500 }),
        CLOUD.list('refunds', { limit: 500 }),
        prReviewsList({ limit: 500 }),
        CLOUD.list('workspace_records', { limit: 500 }),
        CLOUD.list('delete_requests', { limit: 200 }),
      ]);
      setData({
        chargebacks: (cb || []).filter(x => !x.deleted),
        offlineOrders: (oo || []).filter(x => !x.deleted),
        customInquiries: (ci || []).filter(x => !x.deleted),
        photoVerif: (pv || []).filter(x => !x.deleted),
        aftersales: (af || []).filter(x => !x.deleted),
        refills: (rf || []).filter(x => !x.deleted),
        refunds: (rfd || []).filter(x => !x.deleted),
        reviews: (rev || []).filter(x => !x.deleted),
        records: (rec || []).filter(x => !x.deleted),
        deleteReqs: dr || [],
      });
      // 🆕 fix134: 跨部门工单量(不同库,best-effort)
      try {
        const cdm = typeof getCdmClient === 'function' ? getCdmClient() : null;
        if (cdm) {
          const { data: cd } = await cdm.from('cross_dept_messages').select('id,created_at,status,deleted').limit(1000);
          setData(d => ({ ...d, crossDept: (cd || []).filter(x => !x.deleted) }));
        }
      } catch (e) {}
    } catch(e) { toast('❌ 加载失败: ' + e.message); }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  
  // 按员工 + 时间筛选
  const filterByEmployee = (list, fields = ['created_by']) => {
    let l = (list || []).filter(inTime);
    if (filterEmployee !== 'all') l = l.filter(r => fields.some(f => r[f] === filterEmployee));
    return l;
  };
  // 🆕 fix133: 本期/上期窗口(环比)
  const fmtD = (d) => d.toISOString().slice(0, 10);
  const periodBounds = useMemo(() => {
    if (range === 'all') return {};
    if (range === 'custom') {
      if (cFrom && cTo) { const days = Math.round((new Date(cTo) - new Date(cFrom)) / 86400000) + 1; const pf = new Date(cFrom); pf.setDate(pf.getDate() - days); const pt = new Date(cFrom); pt.setDate(pt.getDate() - 1); return { prevFrom: fmtD(pf), prevTo: fmtD(pt) }; }
      return {};
    }
    const p = new Date(), pt = new Date();
    if (range === 'today') { p.setDate(p.getDate() - 1); return { prevFrom: fmtD(p), prevTo: fmtD(p) }; }
    if (range === 'week') { p.setDate(p.getDate() - 14); pt.setDate(pt.getDate() - 7); }
    else if (range === 'month') { p.setMonth(p.getMonth() - 2); pt.setMonth(pt.getMonth() - 1); }
    else if (range === 'quarter') { p.setMonth(p.getMonth() - 6); pt.setMonth(pt.getMonth() - 3); }
    else if (range === 'year') { p.setFullYear(p.getFullYear() - 2); pt.setFullYear(pt.getFullYear() - 1); }
    return { prevFrom: fmtD(p), prevTo: fmtD(pt) };
  }, [range, cFrom, cTo]);
  const dDate = (r) => (r.created_at || r.date || r.createdAt || r.created || '').toString().slice(0, 10);
  const inPrev = (r) => { const d = dDate(r); if (!d || !periodBounds.prevFrom) return false; return d >= periodBounds.prevFrom && d <= periodBounds.prevTo; };
  const filterPrev = (list, fields = ['created_by']) => { let l = (list || []).filter(inPrev); if (filterEmployee !== 'all') l = l.filter(r => fields.some(f => r[f] === filterEmployee)); return l; };

  // 统计
  const stats = useMemo(() => {
    const cb = filterByEmployee(data.chargebacks);
    const cbActive = cb.filter(c => !['won','lost','closed'].includes(c.status));
    const cbUrgent = cbActive.filter(c => { const u = getChargebackUrgency(c); return u && ['overdue','today','critical','urgent'].includes(u.level); });
    
    const oo = filterByEmployee(data.offlineOrders);
    const ooAmount = oo.filter(o => ['paid','dispatched','completed'].includes(o.status)).reduce((s, o) => s + (parseFloat(o.payment_amount) || 0), 0);
    
    const ci = filterByEmployee(data.customInquiries);
    const ciActive = ci.filter(c => !['completed','cancelled'].includes(c.stage));
    
    const pv = filterByEmployee(data.photoVerif);
    const pvPending = pv.filter(p => !['accepted','rejected','replaced'].includes(p.status));
    
    const af = filterByEmployee(data.aftersales);
    const rf = filterByEmployee(data.refills);
    const rfd = filterByEmployee(data.refunds);
    const rfdPending = rfd.filter(r => r.status === 'pending').length;
    
    const reviews = filterByEmployee(data.reviews, ['created_by','claimed_by']);
    const reviewsActive = reviews.filter(r => !['completed','cancelled'].includes(r.status));
    
    const records = filterByEmployee(data.records, ['ownerId']);
    const today = new Date().toISOString().slice(0,10);
    const recordsOverdue = records.filter(r => r.status !== 'resolved' && r.nextFollowUp && r.nextFollowUp < today).length;
    const recordsToday = records.filter(r => r.status !== 'resolved' && r.nextFollowUp === today).length;
    
    const drPending = data.deleteReqs.filter(r => r.status === 'pending').length;
    
    return {
      chargebacks: { total: cb.length, active: cbActive.length, urgent: cbUrgent.length, won: cb.filter(c => c.status === 'won').length, lost: cb.filter(c => c.status === 'lost').length },
      offline: { total: oo.length, amount: ooAmount.toFixed(2), pending: oo.filter(o => o.status === 'pending_payment').length, dispatched: oo.filter(o => o.status === 'dispatched').length },
      custom: { total: ci.length, active: ciActive.length, paid: ci.filter(c => c.stage === 'paid' || c.stage === 'producing' || c.stage === 'photo').length },
      photo: { total: pv.length, pending: pvPending.length },
      aftersales: { total: af.length },
      refills: { total: rf.length },
      refunds: { total: rfd.length, pending: rfdPending },
      reviews: { total: reviews.length, active: reviewsActive.length },
      followups: { total: records.length, overdue: recordsOverdue, today: recordsToday },
      deleteReqs: { pending: drPending },
    };
  }, [data, filterEmployee, range, cFrom, cTo]);
  
  // 🆕 fix94: 各统计卡对应的明细列表(点卡片弹窗用)
  const drillLists = useMemo(() => {
    const cb = filterByEmployee(data.chargebacks);
    const cbActive = cb.filter(c => !['won','lost','closed'].includes(c.status));
    const cbUrgent = cbActive.filter(c => { const u = getChargebackUrgency(c); return u && ['overdue','today','critical','urgent'].includes(u.level); });
    const oo = filterByEmployee(data.offlineOrders);
    const ci = filterByEmployee(data.customInquiries); const ciActive = ci.filter(c => !['completed','cancelled'].includes(c.stage));
    const pv = filterByEmployee(data.photoVerif); const pvPending = pv.filter(p => !['accepted','rejected','replaced'].includes(p.status));
    const af = filterByEmployee(data.aftersales);
    const rf = filterByEmployee(data.refills);
    const rfd = filterByEmployee(data.refunds); const rfdPending = rfd.filter(r => r.status === 'pending');
    const reviews = filterByEmployee(data.reviews, ['created_by','claimed_by']); const reviewsActive = reviews.filter(r => !['completed','cancelled'].includes(r.status));
    const records = filterByEmployee(data.records, ['ownerId']);
    const today = new Date().toISOString().slice(0,10);
    const recordsOverdue = records.filter(r => r.status !== 'resolved' && r.nextFollowUp && r.nextFollowUp < today);
    const drPending = data.deleteReqs.filter(r => r.status === 'pending');
    return { cbActive, cbUrgent, oo, ciActive, pvPending, af, rf, rfd, rfdPending, reviews, reviewsActive, records, recordsOverdue, drPending };
  }, [data, filterEmployee, range, cFrom, cTo]);

  // 🆕 fix133: 分析大屏 — KPI + 环比 + 客服排行 + 网站/类型分布
  const TYPE_DEFS = [
    ['跟进', data.records, ['ownerId']],
    ['售后', data.aftersales, ['created_by']],
    ['补件', data.refills, ['created_by']],
    ['退款', data.refunds, ['created_by']],
    ['拒付', data.chargebacks, ['created_by', 'cs_fault_emp']],
    ['定制', data.customInquiries, ['created_by']],
    ['实拍', data.photoVerif, ['created_by']],
    ['评价', data.reviews, ['created_by', 'claimed_by']],
  ];
  const analytics = useMemo(() => {
    const build = (ff) => {
      const items = [];
      TYPE_DEFS.forEach(([type, list, fields]) => {
        ff(list || [], fields).forEach(r => items.push({
          type, raw: r, date: dDate(r),
          who: r.created_by || r.ownerId || r.claimed_by || '(未知)',
          site: r.site || (typeof wsOrderSite === 'function' ? wsOrderSite(r.order_ref || r.order_no) : '') || '(未知)',
        }));
      });
      return items;
    };
    const cur = build(filterByEmployee), prev = build(filterPrev);
    const byType = (arr) => arr.reduce((m, x) => (m[x.type] = (m[x.type] || 0) + 1, m), {});
    const curT = byType(cur), prevT = byType(prev);
    const sum = (list, f, cond) => filterByEmployee(list || []).filter(cond || (() => true)).reduce((s, r) => s + (parseFloat(r[f]) || 0), 0);
    const cbAmt = sum(data.chargebacks, 'amount');
    const cbLost = sum(data.chargebacks, 'amount', r => r.status === 'lost' || r.cs_fault);
    const rfdAmt = sum(data.refunds, 'amount', r => ['completed', 'approved'].includes(r.status));
    const ooAmt = sum(data.offlineOrders, 'payment_amount', r => ['paid', 'dispatched', 'completed'].includes(r.status));
    const reviewsDone = filterByEmployee(data.reviews, ['created_by', 'claimed_by']).filter(r => r.status === 'completed').length;
    const reviewsDonePrev = filterPrev(data.reviews, ['created_by', 'claimed_by']).filter(r => r.status === 'completed').length;
    // 客服排行
    const csMap = {};
    cur.forEach(x => { if (!csMap[x.who]) csMap[x.who] = { who: x.who, count: 0, byType: {}, _list: [] }; csMap[x.who].count++; csMap[x.who].byType[x.type] = (csMap[x.who].byType[x.type] || 0) + 1; csMap[x.who]._list.push(x.raw); });
    const csRanking = Object.values(csMap).sort((a, b) => b.count - a.count);
    // 网站分布 / 类型分布
    const dist = (arr, key) => { const m = {}; arr.forEach(x => { const k = x[key] || '(未知)'; if (!m[k]) m[k] = { name: k, count: 0, _list: [] }; m[k].count++; m[k]._list.push(x.raw); }); return Object.values(m).sort((a, b) => b.count - a.count); };
    // 🆕 fix134: 趋势分桶(堆叠柱)
    let gran = 'day';
    if (range === 'quarter' || range === 'year' || range === 'all') gran = 'month';
    if (range === 'custom' && cFrom && cTo) gran = ((new Date(cTo) - new Date(cFrom)) / 86400000) > 62 ? 'month' : 'day';
    const tmap = {};
    cur.forEach(x => { if (!x.date) return; const key = gran === 'month' ? x.date.slice(0, 7) : x.date; if (!tmap[key]) tmap[key] = { key, total: 0, byType: {} }; tmap[key].total++; tmap[key].byType[x.type] = (tmap[key].byType[x.type] || 0) + 1; });
    let trend = Object.values(tmap).sort((a, b) => a.key < b.key ? -1 : 1);
    if (trend.length > 31) trend = trend.slice(-31);
    const typesPresent = TYPE_DEFS.map(d => d[0]).filter(t => cur.some(x => x.type === t));
    return {
      total: cur.length, prevTotal: prev.length,
      curT, prevT, cbAmt, cbLost, rfdAmt, ooAmt, reviewsDone, reviewsDonePrev,
      hasPrev: !!periodBounds.prevFrom,
      csRanking, siteDist: dist(cur, 'site'), typeDist: dist(cur, 'type'),
      trend, typesPresent, gran,
    };
  }, [data, filterEmployee, range, cFrom, cTo]);

  const empName = (id) => { const e = employees.find(x => x.id === id); return e ? (e.name + (e.alias ? ' ' + e.alias : '')) : (id === '(未知)' ? '(未知)' : id); };
  const pctChg = (cur, prev) => { if (!analytics.hasPrev) return null; if (!prev) return cur ? 100 : 0; return Math.round((cur - prev) / prev * 100); };
  const PIE_COLORS = ['#0071e3', '#ea580c', '#16a34a', '#7c3aed', '#dc2626', '#d97706', '#0891b2', '#be185d', '#65a30d', '#9333ea'];
  const Pie = ({ data: pdata, onSlice }) => {
    const tot = pdata.reduce((s, d) => s + d.count, 0);
    if (!tot) return <div style={{ fontSize: 12, color: 'var(--ink-3)', textAlign: 'center', padding: '20px 0' }}>暂无数据</div>;
    let acc = 0; const R = 70, C = 80;
    const arc = (f0, f1) => { const a0 = 2 * Math.PI * f0 - Math.PI / 2, a1 = 2 * Math.PI * f1 - Math.PI / 2; const x0 = C + R * Math.cos(a0), y0 = C + R * Math.sin(a0), x1 = C + R * Math.cos(a1), y1 = C + R * Math.sin(a1); const lg = (f1 - f0) > 0.5 ? 1 : 0; return `M${C},${C} L${x0},${y0} A${R},${R} 0 ${lg} 1 ${x1},${y1} Z`; };
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
        <svg width="150" height="160" viewBox="0 0 160 160" style={{ flexShrink: 0 }}>
          {pdata.map((d, i) => { const f0 = acc / tot; acc += d.count; const f1 = acc / tot; return (
            <path key={i} d={arc(f0, f1)} fill={PIE_COLORS[i % PIE_COLORS.length]} stroke="white" strokeWidth="1.5" style={{ cursor: onSlice ? 'pointer' : 'default' }} onClick={() => onSlice && onSlice(d)}><title>{d.name}: {d.count}</title></path>
          ); })}
        </svg>
        <div style={{ flex: 1, minWidth: 130 }}>
          {pdata.slice(0, 8).map((d, i) => (
            <div key={i} onClick={() => onSlice && onSlice(d)} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, padding: '3px 0', cursor: onSlice ? 'pointer' : 'default' }}>
              <span style={{ width: 11, height: 11, borderRadius: 3, background: PIE_COLORS[i % PIE_COLORS.length], flexShrink: 0 }} />
              <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{d.name}</span>
              <span style={{ fontWeight: 600 }}>{d.count}</span>
              <span style={{ color: 'var(--ink-4)', width: 36, textAlign: 'right' }}>{Math.round(d.count / tot * 100)}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const KpiCard = ({ label, value, prev, money, color, icon }) => {
    const chg = pctChg(typeof value === 'number' ? value : 0, prev);
    const tint = color || '#0071e3';
    return (
      <div style={{ position: 'relative', background: '#fff', border: '1px solid var(--line)', borderRadius: 14, padding: '15px 16px', overflow: 'hidden', boxShadow: '0 1px 3px rgba(15,23,42,.05)' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${tint}, ${tint}99)` }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ width: 28, height: 28, borderRadius: 9, background: tint + '15', color: tint, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>{icon || '📊'}</span>
          <span style={{ fontSize: 11.5, color: 'var(--ink-3)', fontWeight: 600, letterSpacing: '.01em' }}>{label}</span>
        </div>
        <div style={{ fontSize: 27, fontWeight: 800, letterSpacing: '-.025em', color: 'var(--ink)', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{money ? '$' : ''}{typeof value === 'number' ? value.toLocaleString() : value}</div>
        {chg !== null && (
          <div style={{ marginTop: 9, display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 20, background: chg > 0 ? '#dcfce7' : chg < 0 ? '#fee2e2' : '#f1f5f9', color: chg > 0 ? '#15803d' : chg < 0 ? '#b91c1c' : 'var(--ink-4)' }}>{chg > 0 ? '▲' : chg < 0 ? '▼' : '■'} {Math.abs(chg)}%</span>
            <span style={{ fontSize: 10, color: 'var(--ink-4)' }}>vs 上期</span>
          </div>
        )}
      </div>
    );
  };
  const SectionTitle = ({ icon, title, sub, accent = '#0071e3' }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
      <span style={{ width: 4, height: 18, borderRadius: 4, background: accent }} />
      <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{icon} {title}</span>
      {sub && <span style={{ fontSize: 11, fontWeight: 400, color: 'var(--ink-4)' }}>· {sub}</span>}
    </div>
  );
  // 🆕 fix134: 堆叠柱趋势图(既看趋势,又看各模块占比)
  const StackedBar = ({ trend, types }) => {
    if (!trend || !trend.length) return <div style={{ fontSize: 12, color: 'var(--ink-3)', textAlign: 'center', padding: '24px 0' }}>该时段暂无数据</div>;
    const max = Math.max(...trend.map(b => b.total), 1);
    const colorOf = (t) => PIE_COLORS[Math.max(0, types.indexOf(t)) % PIE_COLORS.length];
    const gap = trend.length > 20 ? 2 : 4;
    const every = Math.ceil(trend.length / 12);
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap, height: 170, padding: '4px 0' }}>
          {trend.map((b) => (
            <div key={b.key} title={`${b.key} · 共 ${b.total}`} style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'flex-end' }}>
              <div style={{ width: '100%', height: `${b.total / max * 100}%`, minHeight: b.total ? 3 : 0, display: 'flex', flexDirection: 'column-reverse', borderRadius: '3px 3px 0 0', overflow: 'hidden' }}>
                {types.filter(t => b.byType[t]).map(t => (
                  <div key={t} style={{ background: colorOf(t), height: `${b.byType[t] / b.total * 100}%` }} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap, marginTop: 4 }}>
          {trend.map((b, i) => (<div key={b.key} style={{ flex: 1, fontSize: 9, color: 'var(--ink-4)', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>{i % every === 0 ? (b.key.length > 7 ? b.key.slice(5) : b.key) : ''}</div>))}
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 10 }}>
          {types.map(t => <span key={t} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--ink-2)' }}><span style={{ width: 10, height: 10, borderRadius: 2, background: colorOf(t) }} />{t}</span>)}
        </div>
      </div>
    );
  };
  
  const StatCard = ({ icon, title, value, color, sub, onClick }) => (
    <div onClick={onClick}
      style={{
        padding:14, background:'white', borderRadius:12,
        border:`1.5px solid ${color}30`,
        cursor: onClick ? 'pointer' : 'default',
        transition:'all .15s',
      }}
      onMouseEnter={e => { if (onClick) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,.08)'; }}}
      onMouseLeave={e => { if (onClick) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}}>
      <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:6}}>
        <span style={{fontSize:20}}>{icon}</span>
        <div style={{fontSize:12, color:'var(--ink-3)', fontWeight:600}}>{title}</div>
      </div>
      <div style={{fontSize:24, fontWeight:700, color, lineHeight:1}}>{value}</div>
      {sub && <div style={{fontSize:10, color:'var(--ink-3)', marginTop:5}}>{sub}</div>}
    </div>
  );
  
  return (
    <div className="space-y-4 fade-in">
      <div className="paper rounded-2xl p-4">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12}}>
          <div>
            <div className="font-display" style={{fontSize:18, fontWeight:600}}>📊 主管汇总面板</div>
            <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>所有模块总览 · {range==='all'?'全部时间':range==='custom'?`${cFrom||'…'} ~ ${cTo||'…'}`:({today:'今天',week:'近7天',month:'近一月',quarter:'近一季度',year:'近一年'}[range])} · 实时数据</div>
          </div>
          <div style={{display:'flex', gap:6, alignItems:'center', flexWrap:'wrap'}}>
            <span style={{fontSize:11, color:'var(--ink-3)'}}>👤</span>
            <select value={filterEmployee} onChange={e => setFilterEmployee(e.target.value)}
              style={{padding:'5px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:12, background:'white', fontFamily:'inherit'}}>
              <option value="all">全部员工</option>
              {employees.filter(em => !em.hideFromList).map(em => (
                <option key={em.id} value={em.id}>{em.name}{em.alias ? ' ' + em.alias : ''}</option>
              ))}
            </select>
            <button onClick={load} className="btn-sec" style={{padding:'5px 10px', fontSize:11}}>🔄 刷新</button>
          </div>
        </div>
        {/* 🆕 fix132: 时间范围筛选(月/季/自定义) */}
        <div style={{display:'flex', gap:6, alignItems:'center', flexWrap:'wrap', marginTop:12, paddingTop:12, borderTop:'1px solid var(--line)'}}>
          <span style={{fontSize:11, color:'var(--ink-3)', fontWeight:600}}>📅 时间范围:</span>
          {[['today','今天'],['week','本周'],['month','本月'],['quarter','本季度'],['year','本年'],['all','全部'],['custom','自定义']].map(([k,lb]) => (
            <button key={k} onClick={() => setRange(k)} style={{padding:'4px 11px', fontSize:12, borderRadius:7, cursor:'pointer', fontWeight:600,
              border:'1px solid ' + (range===k?'#0071e3':'var(--line)'), background: range===k?'#0071e3':'white', color: range===k?'white':'var(--ink-2)'}}>{lb}</button>
          ))}
          {range==='custom' && (
            <span style={{display:'inline-flex', gap:6, alignItems:'center'}}>
              <input type="date" value={cFrom} onChange={e=>setCFrom(e.target.value)} style={{padding:'3px 7px', border:'1px solid var(--line)', borderRadius:6, fontSize:12}} />
              <span style={{color:'var(--ink-4)'}}>~</span>
              <input type="date" value={cTo} onChange={e=>setCTo(e.target.value)} style={{padding:'3px 7px', border:'1px solid var(--line)', borderRadius:6, fontSize:12}} />
            </span>
          )}
        </div>
      </div>

      {/* 🆕 fix133: 分析大屏 — KPI 概览条(环比) */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(140px, 1fr))', gap:12}}>
        <KpiCard label="总工作量" icon="📋" value={analytics.total} prev={analytics.prevTotal} color="#0071e3" />
        <KpiCard label="售后总数" icon="🛠" value={analytics.curT['售后']||0} prev={analytics.prevT['售后']||0} color="#ea580c" />
        <KpiCard label="拒付笔数" icon="🚨" value={analytics.curT['拒付']||0} prev={analytics.prevT['拒付']||0} color="#dc2626" />
        <KpiCard label="拒付金额" icon="💳" value={Math.round(analytics.cbAmt)} money color="#dc2626" />
        <KpiCard label="退款金额" icon="💰" value={Math.round(analytics.rfdAmt)} money color="#d97706" />
        <KpiCard label="补件" icon="📦" value={analytics.curT['补件']||0} prev={analytics.prevT['补件']||0} color="#0891b2" />
        <KpiCard label="实拍" icon="📷" value={analytics.curT['实拍']||0} prev={analytics.prevT['实拍']||0} color="#7c3aed" />
        <KpiCard label="评价完成" icon="⭐" value={analytics.reviewsDone} prev={analytics.reviewsDonePrev} color="#16a34a" />
      </div>

      {/* 客服排行 + 网站/类型分布 */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:12}}>
        <div className="paper rounded-2xl p-4">
          <SectionTitle icon="👥" title="客服处理量排行" sub="点击看明细" accent="#0071e3" />
          {analytics.csRanking.length===0 ? <div style={{fontSize:12, color:'var(--ink-3)', textAlign:'center', padding:'18px 0'}}>暂无数据</div> : (
            <div style={{display:'flex', flexDirection:'column', gap:6}}>
              {analytics.csRanking.map((c, idx) => {
                const tops = Object.entries(c.byType).sort((a,b)=>b[1]-a[1]).slice(0,4);
                const isTop = idx<3;
                return (
                  <div key={c.who} onClick={()=>openDrill(`${empName(c.who)} · 本期工作明细`, c._list)} style={{padding:'9px 12px', background:isTop?'#eff6ff':'var(--bg)', borderRadius:8, display:'flex', alignItems:'center', gap:10, cursor:'pointer', borderLeft:'3px solid '+(isTop?'#0071e3':'transparent')}}>
                    <span style={{width:26, height:26, background:isTop?'#0071e3':'var(--ink-3)', color:'white', borderRadius:'50%', fontSize:12, fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0}}>{idx+1}</span>
                    <div style={{flex:1, minWidth:0}}>
                      <div style={{fontSize:13, fontWeight:600, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{empName(c.who)}</div>
                      <div style={{fontSize:11, color:'var(--ink-3)', marginTop:2, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{tops.map(([k,n])=>`${k}${n}`).join(' · ')}</div>
                    </div>
                    <div style={{flexShrink:0, textAlign:'right'}}><div style={{fontSize:18, fontWeight:700, color:isTop?'#0071e3':'var(--ink)'}}>{c.count}</div><div style={{fontSize:9, color:'var(--ink-3)'}}>件</div></div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div className="paper rounded-2xl p-4">
          <SectionTitle icon="🌐" title="按网站分布" sub="点击看明细" accent="#16a34a" />
          <Pie data={analytics.siteDist} onSlice={(d)=>openDrill(`网站 ${d.name} · 本期明细`, d._list)} />
        </div>
        <div className="paper rounded-2xl p-4">
          <SectionTitle icon="🥧" title="按工作类型分布" sub="点击看明细" accent="#7c3aed" />
          <Pie data={analytics.typeDist} onSlice={(d)=>openDrill(`${d.name} · 本期明细`, d._list)} />
        </div>
      </div>

      {/* 🆕 fix134: 总工作量趋势(堆叠柱 = 趋势 + 各模块占比) */}
      <div className="paper rounded-2xl p-4">
        <SectionTitle icon="📈" title="工作量趋势" sub={`按${analytics.gran==='month'?'月':'天'}分桶 · 色块=各模块占比`} accent="#ea580c" />
        <StackedBar trend={analytics.trend} types={analytics.typesPresent} />
      </div>

      {/* 🆕 fix134: 老板金额 / 工单视图 */}
      <div className="paper rounded-2xl p-4" style={{background:'linear-gradient(90deg,#f8fafc,#eff6ff)'}}>
        <SectionTitle icon="💼" title="金额 / 工单总览" sub="本期" accent="#dc2626" />
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(150px, 1fr))', gap:10}}>
          <KpiCard label="拒付金额(总)" value={Math.round(analytics.cbAmt)} money color="#dc2626" />
          <KpiCard label="拒付损失(判输/失误)" value={Math.round(analytics.cbLost)} money color="#b91c1c" />
          <KpiCard label="退款金额(已批)" value={Math.round(analytics.rfdAmt)} money color="#d97706" />
          <KpiCard label="线下单收款" value={Math.round(analytics.ooAmt)} money color="#16a34a" />
          <KpiCard label="跨部门工单量" value={(data.crossDept||[]).filter(inTime).length} color="#7c3aed" />
          <KpiCard label="评价完成" value={analytics.reviewsDone} prev={analytics.reviewsDonePrev} color="#0891b2" />
        </div>
        <div style={{fontSize:11, color:'var(--ink-3)', marginTop:8}}>💡 绩效联动见下方「绩效考核打分板」(随员工/时间筛选)。</div>
      </div>


      {/* 紧急关注 */}
      {(stats.chargebacks.urgent > 0 || stats.refunds.pending > 0 || stats.followups.overdue > 0 || stats.deleteReqs.pending > 0) && (
        <div className="paper rounded-2xl p-4" style={{background:'linear-gradient(90deg, #fef2f2 0%, #fed7aa 100%)', border:'2px solid #f87171'}}>
          <div className="font-display" style={{fontSize:15, fontWeight:700, color:'#991b1b', marginBottom:10}}>🔥 紧急关注</div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:10}}>
            {stats.chargebacks.urgent > 0 && <StatCard icon="🚨" title="紧急拒付" value={stats.chargebacks.urgent} color="#dc2626" sub="7 天内截止 / 已逾期" onClick={() => openDrill('紧急拒付', drillLists.cbUrgent)} />}
            {stats.refunds.pending > 0 && <StatCard icon="💰" title="待审退款" value={stats.refunds.pending} color="#d97706" sub="财务审核中" onClick={() => openDrill('待审退款', drillLists.rfdPending)} />}
            {stats.followups.overdue > 0 && <StatCard icon="⏰" title="跟进逾期" value={stats.followups.overdue} color="#dc2626" sub="未处理客户跟进" onClick={() => openDrill('跟进逾期', drillLists.recordsOverdue)} />}
            {stats.deleteReqs.pending > 0 && <StatCard icon="🛡" title="待审删除" value={stats.deleteReqs.pending} color="#7c3aed" sub="员工的删除申请" onClick={() => openDrill('待审删除', drillLists.drPending)} />}
          </div>
        </div>
      )}
      
      {/* 主业务模块 */}
      <div className="paper rounded-2xl p-4">
        <div className="font-display" style={{fontSize:15, fontWeight:600, marginBottom:10}}>📦 业务模块 <span style={{fontSize:11, color:'var(--ink-3)', fontWeight:400}}>· 点卡片看明细</span></div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:10}}>
          <StatCard icon="📞" title="客服跟进" value={stats.followups.total} color="#5e5ce6" onClick={() => openDrill('客服跟进', drillLists.records)}
            sub={`今日 ${stats.followups.today} · 逾期 ${stats.followups.overdue}`} />
          <StatCard icon="🚨" title="拒付管理" value={stats.chargebacks.active} color="#dc2626" onClick={() => openDrill('拒付管理(进行中)', drillLists.cbActive)}
            sub={`总 ${stats.chargebacks.total} · 胜诉 ${stats.chargebacks.won} · 败诉 ${stats.chargebacks.lost}`} />
          <StatCard icon="💳" title="线下单" value={stats.offline.total} color="#0369a1" onClick={() => openDrill('线下单', drillLists.oo)}
            sub={`已收款 $${stats.offline.amount}`} />
          <StatCard icon="🎨" title="定制咨询" value={stats.custom.active} color="#7c3aed" onClick={() => openDrill('定制咨询(进行中)', drillLists.ciActive)}
            sub={`生产/付款中 ${stats.custom.paid} · 总 ${stats.custom.total}`} />
          <StatCard icon="📸" title="实拍核实" value={stats.photo.pending} color="#be185d" onClick={() => openDrill('实拍核实(待处理)', drillLists.pvPending)}
            sub={`待联系 · 总 ${stats.photo.total}`} />
          <StatCard icon="🔧" title="售后" value={stats.aftersales.total} color="#ea580c" sub="历史 + 进行中" onClick={() => openDrill('售后', drillLists.af)} />
          <StatCard icon="📦" title="补件" value={stats.refills.total} color="#0891b2" sub="历史 + 进行中" onClick={() => openDrill('补件', drillLists.rf)} />
          <StatCard icon="💰" title="退款" value={stats.refunds.total} color="#d97706" onClick={() => openDrill('退款', drillLists.rfd)}
            sub={`待审 ${stats.refunds.pending}`} />
          <StatCard icon="⭐" title="产品评价" value={stats.reviews.active} color="#fbbf24" onClick={() => openDrill('产品评价(进行中)', drillLists.reviewsActive)}
            sub={`总 ${stats.reviews.total}`} />
        </div>
      </div>
      
      {/* 各员工活跃度 (按 filterEmployee==='all' 时显示) */}
      {filterEmployee === 'all' && (
        <div className="paper rounded-2xl p-4">
          <div className="font-display" style={{fontSize:15, fontWeight:600, marginBottom:10}}>👥 员工活跃度(各模块的录入数)</div>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%', fontSize:12, borderCollapse:'collapse'}}>
              <thead>
                <tr style={{background:'#f5f5f7', textAlign:'left'}}>
                  <th style={{padding:'8px 10px'}}>员工</th>
                  <th style={{padding:'8px 10px', textAlign:'center'}}>📞 跟进</th>
                  <th style={{padding:'8px 10px', textAlign:'center'}}>🚨 拒付</th>
                  <th style={{padding:'8px 10px', textAlign:'center'}}>💳 线下单</th>
                  <th style={{padding:'8px 10px', textAlign:'center'}}>🎨 定制</th>
                  <th style={{padding:'8px 10px', textAlign:'center'}}>📸 实拍</th>
                  <th style={{padding:'8px 10px', textAlign:'center'}}>🔧 售后</th>
                  <th style={{padding:'8px 10px', textAlign:'center'}}>📦 补件</th>
                  <th style={{padding:'8px 10px', textAlign:'center'}}>💰 退款</th>
                  <th style={{padding:'8px 10px', textAlign:'center'}}>⭐ 评价</th>
                </tr>
              </thead>
              <tbody>
                {employees.filter(em => !em.hideFromList && em.role !== 'super_admin').map((em, idx) => {
                  const cnt = (list, field='created_by') => list.filter(r => r[field] === em.id).length;
                  return (
                    <tr key={em.id} style={{borderBottom:'1px solid #f5f5f7', background: idx % 2 ? '#fafafa' : 'white'}}>
                      <td style={{padding:'8px 10px', fontWeight:600}}>
                        {em.name}{em.alias ? ' ' + em.alias : ''}
                        {em.role === 'admin' && <span style={{marginLeft:4, fontSize:10, color:'var(--accent)'}}>⭐</span>}
                      </td>
                      <td style={{padding:'8px 10px', textAlign:'center'}}>{cnt(data.records, 'ownerId')}</td>
                      <td style={{padding:'8px 10px', textAlign:'center'}}>{cnt(data.chargebacks)}</td>
                      <td style={{padding:'8px 10px', textAlign:'center'}}>{cnt(data.offlineOrders)}</td>
                      <td style={{padding:'8px 10px', textAlign:'center'}}>{cnt(data.customInquiries)}</td>
                      <td style={{padding:'8px 10px', textAlign:'center'}}>{cnt(data.photoVerif)}</td>
                      <td style={{padding:'8px 10px', textAlign:'center'}}>{cnt(data.aftersales)}</td>
                      <td style={{padding:'8px 10px', textAlign:'center'}}>{cnt(data.refills)}</td>
                      <td style={{padding:'8px 10px', textAlign:'center'}}>{cnt(data.refunds)}</td>
                      <td style={{padding:'8px 10px', textAlign:'center'}}>{cnt(data.reviews)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 🆕 fix94: 统计卡明细弹窗 — 点任意统计卡看具体记录 */}
      {drill && (
        <div onClick={() => setDrill(null)} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.4)', zIndex:1000, display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'6vh 16px', overflowY:'auto'}}>
          <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, maxWidth:760, width:'100%', maxHeight:'84vh', overflowY:'auto', padding:18}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:12}}>
              <div className="font-display" style={{fontSize:16, fontWeight:600}}>{drill.title} · {drill.rows.length} 条</div>
              <button onClick={() => setDrill(null)} className="btn-sec" style={{padding:'4px 12px', fontSize:12}}>关闭</button>
            </div>
            {drill.rows.length === 0 ? (
              <div style={{padding:28, textAlign:'center', color:'var(--ink-3)', fontSize:13}}>暂无记录</div>
            ) : (
              <div style={{display:'flex', flexDirection:'column', gap:8}}>
                {drill.rows.map((r, i) => {
                  const ref = r.order_ref || r.orderRef || r.pi_no || r.product_name || r.customer || r.buyer_email || r.id || '-';
                  const cust = r.customer || r.customer_name || r.buyer_email || r.email || '';
                  const st = r.status || r.stage || '';
                  const amt = r.amount || r.payment_amount || r.refund_amount || '';
                  const date = String(r.created_at || r.date || r.createdAt || '').slice(0, 10);
                  const note = r.note || r.reason || r.issue_detail || r.notes || '';
                  return (
                    <div key={r.id || i} style={{border:'1px solid var(--line)', borderRadius:10, padding:'10px 12px', fontSize:12, lineHeight:1.6}}>
                      <div style={{display:'flex', gap:8, flexWrap:'wrap', alignItems:'center'}}>
                        <strong>{String(ref)}</strong>
                        {cust && <span style={{color:'var(--ink-2)'}}>· {cust}</span>}
                        {st && <span style={{padding:'1px 7px', background:'var(--bg-elevated)', borderRadius:6, fontSize:11}}>{String(st)}</span>}
                        {amt && <span style={{color:'#0369a1', fontWeight:600}}>${amt}</span>}
                        <div style={{flex:1}}/>
                        {date && <span style={{color:'var(--ink-3)', fontSize:11}}>{date}</span>}
                      </div>
                      {note && <div style={{color:'var(--ink-2)', marginTop:4, whiteSpace:'pre-wrap', maxHeight:64, overflow:'hidden'}}>{String(note).slice(0, 220)}</div>}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


// ============================================================
// ⏰ 预警阈值配置 - 主管可调整每个模块的"超 N 天预警"
// ============================================================
const AlertThresholdsSettings = ({ user, toast }) => {
  const [thresholds, setThresholds] = useState({
    cs_followup: 7,     // 客服跟进超期天数
    chargeback: 3,      // 拒付截止前预警天数
    offline_order: 5,   // 线下单未发货天数
    custom_inquiry: 7,  // 定制咨询无进展天数
    photo_verif: 5,     // 实拍核实无回复天数
    aftersale: 14,      // 售后挂起天数
    refill: 14,         // 补件挂起天数
    refund: 7,          // 退款待审天数
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const load = async () => {
    if (!CLOUD.client) { setLoading(false); return; }
    try {
      const { data } = await CLOUD.client.from('system_settings').select('*').eq('key', 'alert_thresholds').maybeSingle();
      if (data?.value) setThresholds(prev => ({ ...prev, ...data.value }));
    } catch {}
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  
  const handleSave = async () => {
    setSaving(true);
    try {
      const { error } = await CLOUD.client.from('system_settings').upsert({
        key: 'alert_thresholds',
        value: thresholds,
        updated_at: new Date().toISOString(),
        updated_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
      });
      if (error) throw error;
      toast('✓ 已保存预警阈值');
    } catch(e) { alert('保存失败: ' + e.message); }
    setSaving(false);
  };
  
  const handleResetDefaults = async () => {
    if (!await wsConfirm('重置为默认阈值?')) return;
    setThresholds({
      cs_followup: 7, chargeback: 3, offline_order: 5, custom_inquiry: 7, photo_verif: 5,
      aftersale: 14, refill: 14, refund: 7,
    });
  };
  
  const ThresholdInput = ({ icon, title, desc, value, onChange, min, max }) => (
    <div style={{padding:'12px 14px', background:'white', border:'1px solid var(--line)', borderRadius:10}}>
      <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:8}}>
        <span style={{fontSize:22}}>{icon}</span>
        <div style={{flex:1, minWidth:0}}>
          <div style={{fontWeight:600, fontSize:13}}>{title}</div>
          <div style={{fontSize:11, color:'var(--ink-3)', marginTop:1}}>{desc}</div>
        </div>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:6}}>
        <input type="range" min={min || 1} max={max || 30} value={value} onChange={e => onChange(parseInt(e.target.value, 10))}
          style={{flex:1, accentColor:'var(--accent)'}} />
        <div style={{display:'flex', alignItems:'baseline', gap:2, minWidth:54, justifyContent:'flex-end'}}>
          <input type="number" min={min || 1} max={max || 365} value={value} onChange={e => onChange(parseInt(e.target.value, 10) || 1)}
            style={{width:50, padding:'4px 6px', fontSize:13, fontWeight:700, color:'var(--accent)', border:'1px solid var(--line)', borderRadius:5, textAlign:'center'}} />
          <span style={{fontSize:11, color:'var(--ink-3)'}}>天</span>
        </div>
      </div>
    </div>
  );
  
  if (loading) return <div className="paper rounded-2xl p-10" style={{textAlign:'center'}}>⏳ 加载中...</div>;
  
  return (
    <div className="paper rounded-2xl p-6">
      <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:6}}>
        <span style={{fontSize:24}}>⏰</span>
        <div style={{flex:1}}>
          <div className="font-display" style={{fontSize:18, fontWeight:600, letterSpacing:'-.022em'}}>预警阈值配置</div>
          <div style={{fontSize:13, color:'var(--ink-3)'}}>调整各模块"超 N 天未处理"的阈值 · 影响今日工作快照 + 桌面通知</div>
        </div>
        <button onClick={handleResetDefaults} className="btn-sec" style={{padding:'4px 10px', fontSize:11}}>↺ 恢复默认</button>
      </div>
      
      <div className="rounded-lg p-3 mt-4" style={{background:'#e0f2fe', color:'#075985', fontSize:12, lineHeight:1.6}}>
        💡 <strong>用法:</strong> 这些阈值决定"今日工作快照"上的卡片何时出现红色警示,也决定主管收到桌面通知的时机。<br/>
        例如:客服跟进设为 <strong>7 天</strong> → 超过 7 天还没解决的问题会在「今日工作快照」上突出显示。
      </div>
      
      <div style={{marginTop:18, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(290px, 1fr))', gap:12}}>
        <ThresholdInput icon="📞" title="客服跟进超期" desc="跟进创建后超 N 天未解决"
          value={thresholds.cs_followup} onChange={v => setThresholds(p => ({...p, cs_followup: v}))} min={1} max={30} />
        <ThresholdInput icon="🚨" title="拒付截止预警" desc="距截止日 N 天内开始预警"
          value={thresholds.chargeback} onChange={v => setThresholds(p => ({...p, chargeback: v}))} min={1} max={14} />
        <ThresholdInput icon="💳" title="线下单未发货" desc="付款后超 N 天未下单/发货"
          value={thresholds.offline_order} onChange={v => setThresholds(p => ({...p, offline_order: v}))} min={1} max={30} />
        <ThresholdInput icon="🎨" title="定制咨询无进展" desc="询单/出图/报价阶段卡 N 天"
          value={thresholds.custom_inquiry} onChange={v => setThresholds(p => ({...p, custom_inquiry: v}))} min={1} max={30} />
        <ThresholdInput icon="📸" title="实拍核实无回复" desc="客服联系后 N 天无客户回复"
          value={thresholds.photo_verif} onChange={v => setThresholds(p => ({...p, photo_verif: v}))} min={1} max={30} />
        <ThresholdInput icon="💰" title="退款待审超期" desc="提交后超 N 天财务未审核"
          value={thresholds.refund} onChange={v => setThresholds(p => ({...p, refund: v}))} min={1} max={30} />
        <ThresholdInput icon="🔧" title="售后挂起" desc="售后单超 N 天未完成"
          value={thresholds.aftersale} onChange={v => setThresholds(p => ({...p, aftersale: v}))} min={1} max={60} />
        <ThresholdInput icon="📦" title="补件挂起" desc="补件单超 N 天未完成"
          value={thresholds.refill} onChange={v => setThresholds(p => ({...p, refill: v}))} min={1} max={60} />
      </div>
      
      <button onClick={handleSave} disabled={saving}
        style={{padding:'10px 24px', background:'var(--accent)', color:'white', border:'none', borderRadius:10, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:14, marginTop:18, opacity: saving ? 0.5 : 1}}>
        {saving ? '保存中...' : '✓ 保存配置'}
      </button>
    </div>
  );
};


const ChargebackOwnersSettings = ({ employees, user, toast }) => {
  const allSites = useSiteCodes();  // 🆕 fix22 联动 3: 合并 内置 SITES + 自定义网站
  // 按网站映射 + 周六值班 + 周日值班
  const [siteOwners, setSiteOwners] = useState({});  // site -> uid
  const [defaultOwner, setDefaultOwner] = useState('');  // 其他网站默认负责人
  const [saturdayOwner, setSaturdayOwner] = useState('');  // 🆕 周六值班
  const [sundayOwner, setSundayOwner] = useState('');      // 🆕 周日值班
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const visibleEmployees = employees.filter(em => !em.hideFromList);
  
  const load = async () => {
    if (!CLOUD.client) { setLoading(false); return; }
    try {
      const { data } = await CLOUD.client.from('system_settings').select('*').eq('key', 'chargeback_owners').single();
      const cfg = data?.value || {};
      // 新格式: { site_owners, default_owner, saturday_owner, sunday_owner }
      // 旧格式: { weekend_owner } (周六/日都用同一个)
      // 更旧格式: { user_ids:[] }
      if (cfg.site_owners || cfg.default_owner || cfg.saturday_owner || cfg.sunday_owner || cfg.weekend_owner) {
        setSiteOwners(cfg.site_owners || {});
        setDefaultOwner(cfg.default_owner || '');
        setSaturdayOwner(cfg.saturday_owner || cfg.weekend_owner || '');
        setSundayOwner(cfg.sunday_owner || cfg.weekend_owner || '');
      } else if ((cfg.user_ids || []).length > 0) {
        setDefaultOwner(cfg.user_ids[0]);
      }
    } catch(e) { console.warn('加载拒付专人失败', e); }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  
  const handleSave = async () => {
    setSaving(true);
    const userName = user.name + (user.alias ? ' ' + user.alias : '');
    
    // 兼容旧版 user_ids 字段(为了 ChargebackReminderBanner 旧逻辑能用)
    const allUids = [...new Set([
      ...Object.values(siteOwners).filter(Boolean),
      defaultOwner,
      saturdayOwner,
      sundayOwner,
    ].filter(Boolean))];
    const allNames = allUids.map(uid => {
      const e = employees.find(x => x.id === uid);
      return e ? e.name + (e.alias ? ' ' + e.alias : '') : uid;
    });
    
    try {
      const { error } = await CLOUD.client.from('system_settings').upsert({
        key: 'chargeback_owners',
        value: {
          site_owners: siteOwners,
          default_owner: defaultOwner,
          saturday_owner: saturdayOwner,
          sunday_owner: sundayOwner,
          // 旧格式兼容
          user_ids: allUids,
          user_names: allNames,
        },
        updated_at: new Date().toISOString(),
        updated_by_name: userName,
      });
      if (error) throw error;
      toast('✓ 已保存拒付负责人配置');
    } catch(e) {
      alert('保存失败: ' + (e.message || e));
    }
    setSaving(false);
  };
  
  const renderEmployeeSelect = (value, onChange, placeholder) => (
    <select value={value} onChange={e => onChange(e.target.value)}
      style={{width:'100%', padding:'8px 12px', border:'1px solid var(--line)', borderRadius:8, fontSize:13, background:'white', fontFamily:'inherit'}}>
      <option value="">{placeholder}</option>
      {visibleEmployees.map(em => (
        <option key={em.id} value={em.id}>
          {em.name}{em.alias ? ' ' + em.alias : ''}
          {em.role === 'admin' ? ' (主管)' : em.role === 'super_admin' ? ' (总管)' : em.role === 'finance' ? ' (财务)' : ''}
          {em.sites ? ' · ' + em.sites : ''}
        </option>
      ))}
    </select>
  );
  
  if (loading) return <div className="paper rounded-2xl p-10" style={{textAlign:'center'}}>⏳ 加载中...</div>;
  
  const getEmployeeLabel = (uid) => {
    if (!uid) return null;
    const e = visibleEmployees.find(x => x.id === uid);
    return e ? e.name + (e.alias ? ' ' + e.alias : '') : null;
  };
  
  return (
    <div className="paper rounded-2xl p-6">
      <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:6}}>
        <span style={{fontSize:24}}>🚨</span>
        <div>
          <div className="font-display" style={{fontSize:18, fontWeight:600, letterSpacing:'-.022em'}}>拒付负责人配置</div>
          <div style={{fontSize:13, color:'var(--ink-3)'}}>按网站指派 · 周六/周日各自值班 · 创建拒付时自动指派</div>
        </div>
      </div>
      
      <div className="rounded-lg p-3 mt-4" style={{background:'#fef3c7', color:'#854d0e', fontSize:13, lineHeight:1.7}}>
        <strong>💡 工作机制：</strong><br/>
        · <strong>工作日</strong>(周一至周五):根据网站自动指派,例如 VK → Tammy / 其他网站 → Aletta<br/>
        · <strong>周六</strong>:由"周六值班人"接手所有网站的新拒付<br/>
        · <strong>周日</strong>:由"周日值班人"接手所有网站的新拒付<br/>
        · 两位拒付负责人都能看到对方的拒付(协同工作),只是自动指派会区分<br/>
        · 截止前 <strong>7/3/1 天</strong> 触发桌面通知 + 顶部红色横幅给负责人 + 主管<br/>
        · 逾期持续告警,直到状态改为「胜诉/败诉/已关闭」
      </div>
      
      <div style={{marginTop:18}}>
        <div style={{fontSize:14, fontWeight:600, marginBottom:10, color:'var(--ink)'}}>① 工作日 · 按网站指派</div>
        {allSites.map(site => (
          <div key={site} style={{display:'grid', gridTemplateColumns:'80px 1fr', gap:10, marginBottom:8, alignItems:'center'}}>
            <div style={{fontWeight:600, fontSize:13, color:'#dc2626', padding:'5px 12px', background:'#fef2f2', borderRadius:6, textAlign:'center'}}>{site}</div>
            {renderEmployeeSelect(
              siteOwners[site] || '',
              (uid) => setSiteOwners(prev => ({ ...prev, [site]: uid })),
              `选择 ${site} 网站的拒付负责人(可留空使用默认)`
            )}
          </div>
        ))}
      </div>
      
      <div style={{marginTop:24, padding:'16px', background:'#f5f3ff', borderRadius:10, border:'1px solid #c4b5fd'}}>
        <div style={{fontSize:14, fontWeight:600, marginBottom:10, color:'#5b21b6'}}>② 默认负责人(未在网站指派表里的网站,例如:DF / DC / LS / MO ...)</div>
        {renderEmployeeSelect(defaultOwner, setDefaultOwner, '选择默认负责人(建议:Aletta)')}
      </div>
      
      <div style={{marginTop:16, display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
        <div style={{padding:'16px', background:'#fffbeb', borderRadius:10, border:'1px solid #fbbf24'}}>
          <div style={{fontSize:14, fontWeight:600, marginBottom:6, color:'#854d0e'}}>③ 周六值班 🌅</div>
          <div style={{fontSize:11, color:'#92400e', marginBottom:10}}>周六创建的所有拒付,无论网站,都指派给此人</div>
          {renderEmployeeSelect(saturdayOwner, setSaturdayOwner, '选择周六值班(例如:Aletta)')}
        </div>
        <div style={{padding:'16px', background:'#eef2ff', borderRadius:10, border:'1px solid #818cf8'}}>
          <div style={{fontSize:14, fontWeight:600, marginBottom:6, color:'#3730a3'}}>④ 周日值班 🌙</div>
          <div style={{fontSize:11, color:'#3730a3', marginBottom:10}}>周日创建的所有拒付,无论网站,都指派给此人</div>
          {renderEmployeeSelect(sundayOwner, setSundayOwner, '选择周日值班(例如:Tammy)')}
        </div>
      </div>
      
      <div style={{marginTop:20, padding:'12px 16px', background:'#f0f9ff', borderRadius:8, fontSize:12, color:'#075985'}}>
        <strong>👀 当前配置预览:</strong><br/>
        {allSites.map(s => {
          const ownerId = siteOwners[s];
          const owner = ownerId ? visibleEmployees.find(e => e.id === ownerId) : null;
          if (!owner && !defaultOwner) return null;
          const fallback = defaultOwner ? visibleEmployees.find(e => e.id === defaultOwner) : null;
          return (
            <div key={s} style={{marginTop:3}}>
              <strong>{s}</strong> → {owner ? owner.name + (owner.alias ? ' ' + owner.alias : '') : `(默认: ${fallback ? fallback.name + (fallback.alias ? ' ' + fallback.alias : '') : '未指派'})`}
            </div>
          );
        })}
        {(saturdayOwner || sundayOwner) && (
          <div style={{marginTop:8, paddingTop:8, borderTop:'1px dashed #93c5fd'}}>
            {saturdayOwner && <div style={{color:'#854d0e'}}><strong>🌅 周六值班</strong> → {getEmployeeLabel(saturdayOwner) || '?'}(覆盖所有网站)</div>}
            {sundayOwner && <div style={{color:'#3730a3', marginTop:3}}><strong>🌙 周日值班</strong> → {getEmployeeLabel(sundayOwner) || '?'}(覆盖所有网站)</div>}
          </div>
        )}
      </div>
      
      <button onClick={handleSave} disabled={saving}
        style={{padding:'10px 24px', background:'#dc2626', color:'white', border:'none', borderRadius:10, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:14, marginTop:18, opacity: saving ? 0.5 : 1}}>
        {saving ? '保存中...' : '✓ 保存配置'}
      </button>
    </div>
  );
};


// 🆕 fix9: 退款处理人配置 — 谁能审核/完成/上传退款截图
// 默认 Miya (主管) / Nicole (总管) / Yulia (周末顶班)
// 主管在 设置 → 退款处理人 改名单;名单里的人才能点退款表里的"审核 / 完成"按钮
const RefundProcessorsSettings = ({ employees, user, toast }) => {
  const [selectedIds, setSelectedIds] = useState(['u_miya', 'u_nicole', 'u_yulia']);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const visibleEmployees = (employees || []).filter(em => !em.hideFromList);

  useEffect(() => {
    (async () => {
      if (!CLOUD.client) { setLoading(false); return; }
      try {
        const { data } = await CLOUD.client.from('system_settings').select('*').eq('key', 'refund_processors').single();
        const ids = data?.value?.user_ids;
        if (Array.isArray(ids) && ids.length > 0) setSelectedIds(ids);
      } catch (e) { /* 用默认 */ }
      setLoading(false);
    })();
  }, []);

  const toggle = (id) => {
    setSelectedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const handleSave = async () => {
    if (selectedIds.length === 0) { alert('至少选 1 个退款处理人'); return; }
    setSaving(true);
    const userName = user.name + (user.alias ? ' ' + user.alias : '');
    const ok = await (window.__setRefundProcessors?.(selectedIds, userName));
    if (ok !== false) toast('✓ 已保存退款处理人配置');
    setSaving(false);
  };

  if (loading) return <div className="paper rounded-2xl p-10" style={{textAlign:'center'}}>⏳ 加载中...</div>;

  const getLabel = (em) => {
    let suffix = '';
    if (em.role === 'super_admin') suffix = ' (老板)';
    else if (em.role === 'admin') suffix = ' (主管)';
    else if (em.role === 'finance') suffix = ' (财务)';
    return `${em.name}${em.alias ? ' ' + em.alias : ''}${suffix}${em.sites ? ' · ' + em.sites : ''}`;
  };

  // 分组排序: 已选的放前面,主管/老板/财务居中,其他靠后
  const sortedEmployees = [...visibleEmployees].sort((a, b) => {
    const aSel = selectedIds.includes(a.id) ? 0 : 1;
    const bSel = selectedIds.includes(b.id) ? 0 : 1;
    if (aSel !== bSel) return aSel - bSel;
    const roleOrder = { super_admin: 0, admin: 1, finance: 2, staff: 3 };
    return (roleOrder[a.role] ?? 9) - (roleOrder[b.role] ?? 9);
  });

  return (
    <div className="paper rounded-2xl p-6">
      <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:6}}>
        <span style={{fontSize:24}}>💰</span>
        <div>
          <div className="font-display" style={{fontSize:17, fontWeight:600}}>退款处理人员配置</div>
          <div style={{fontSize:12, color:'var(--ink-3)', marginTop:2}}>谁能审核退款 / 标记完成 / 上传打款截图</div>
        </div>
      </div>
      <div style={{padding:'10px 12px', background:'#fef3c7', border:'1px solid #fcd34d', borderRadius:8, fontSize:12, color:'#78350f', marginTop:12, marginBottom:14, lineHeight:1.6}}>
        💡 <strong>业务规则</strong>:所有客服都可以查看退款 + 录入待处理退款。<br/>
        但只有名单上的人可以点 <strong>「审核」 / 「✓ 完成」</strong> 按钮(执行实际退款 + 上传 Shopify/Stripe 截图)。<br/>
        老板 (super_admin) 永远在权限内,无论是否在名单上。<br/>
        <strong>默认配置</strong>:Miya 邱琴方 + Nicole 李彬桦 + Yulia 陶艳巧(周末顶班)。
      </div>

      <div style={{fontSize:12, fontWeight:600, color:'var(--ink-2)', marginBottom:8}}>
        当前选中 <strong style={{color:'#dc2626'}}>{selectedIds.length}</strong> 人:
      </div>
      <div style={{display:'flex', flexWrap:'wrap', gap:6, marginBottom:14, padding:10, background:'#fafaf7', borderRadius:8, minHeight:40}}>
        {selectedIds.length === 0 ? (
          <span style={{fontSize:12, color:'var(--ink-4)'}}>未选中任何人 — 请至少勾选一位</span>
        ) : selectedIds.map(id => {
          const em = visibleEmployees.find(e => e.id === id);
          return (
            <div key={id} style={{padding:'4px 10px', background:'#dc2626', color:'white', borderRadius:14, fontSize:12, display:'flex', alignItems:'center', gap:6}}>
              {em ? getLabel(em) : `${id} (账号不存在)`}
              <button onClick={() => toggle(id)} style={{background:'transparent', border:'none', color:'white', cursor:'pointer', fontSize:14, padding:0, lineHeight:1}}>×</button>
            </div>
          );
        })}
      </div>

      <div style={{fontSize:12, fontWeight:600, color:'var(--ink-2)', marginBottom:6}}>
        全部员工 (点击勾选/取消):
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:6}}>
        {sortedEmployees.map(em => {
          const checked = selectedIds.includes(em.id);
          return (
            <label key={em.id} style={{
              display:'flex', alignItems:'center', gap:8, padding:'8px 10px',
              border:`1px solid ${checked ? '#dc2626' : 'var(--line)'}`,
              background: checked ? '#fef2f2' : 'white',
              borderRadius:7, cursor:'pointer', fontSize:13,
            }}>
              <input type="checkbox" checked={checked} onChange={() => toggle(em.id)} style={{margin:0}} />
              <span style={{flex:1, color:checked ? '#7f1d1d' : 'var(--ink)', fontWeight:checked ? 600 : 400}}>
                {getLabel(em)}
              </span>
            </label>
          );
        })}
      </div>

      <button onClick={handleSave} disabled={saving || selectedIds.length === 0}
        style={{padding:'10px 24px', background:'#dc2626', color:'white', border:'none', borderRadius:10, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:14, marginTop:18, opacity: (saving || selectedIds.length === 0) ? 0.5 : 1}}>
        {saving ? '保存中...' : '✓ 保存配置'}
      </button>
    </div>
  );
};


// ════════════════════════════════════════════════════════════════════
// 🆕 fix21: 网站维护 (SitesMaintenanceSection)
// 存储:Supabase system_settings 表,key='custom_sites',value=JSONB 数组
// 默认显示内置 SITES + 已添加的自定义站点 · 可新增/编辑/停用
// ════════════════════════════════════════════════════════════════════
const SitesMaintenanceSection = ({ user, toast }) => {
  const [customSites, setCustomSites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showNew, setShowNew] = useState(false);
  const [editing, setEditing] = useState(null);
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  
  const load = async () => {
    setLoading(true);
    try {
      if (CLOUD.client) {
        const { data } = await CLOUD.client.from('system_settings').select('value').eq('key', 'custom_sites').maybeSingle();
        setCustomSites((data?.value?.sites) || []);
      }
    } catch (e) { console.warn('加载自定义网站失败', e); }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  
  const saveCustomSites = async (newList) => {
    if (!CLOUD.client) { toast('❌ 云同步未启用'); return false; }
    try {
      await CLOUD.client.from('system_settings').upsert({
        key: 'custom_sites',
        value: { sites: newList },
        updated_at: new Date().toISOString(),
      }, { onConflict: 'key' });
      setCustomSites(newList);
      return true;
    } catch (e) { toast('❌ 保存失败: ' + e.message); return false; }
  };
  
  const addSite = async (site) => {
    if (!isAdmin) { toast('仅主管可添加网站'); return; }
    const exists = SITES.includes(site.code) || customSites.some(s => s.code === site.code);
    if (exists) { toast('⚠ 该代码已存在'); return; }
    const ok = await saveCustomSites([...customSites, { ...site, isBuiltin: false, active: true, created_at: new Date().toISOString() }]);
    if (ok) { setShowNew(false); toast('✓ 网站已添加'); }
  };
  
  const updateSite = async (code, patch) => {
    if (!isAdmin) { toast('仅主管可修改'); return; }
    const next = customSites.map(s => s.code === code ? { ...s, ...patch } : s);
    const ok = await saveCustomSites(next);
    if (ok) { setEditing(null); toast('✓ 已更新'); }
  };
  
  const deleteSite = async (code) => {
    if (!isAdmin) { toast('仅主管可删除'); return; }
    if (!await wsConfirm(`确认删除自定义网站 "${code}"?\n\n警告:已使用此网站的历史记录会保留代码,但下拉不再出现。`)) return;
    const ok = await saveCustomSites(customSites.filter(s => s.code !== code));
    if (ok) toast('✓ 已删除');
  };
  
  // 合并内置 + 自定义,用于显示
  const builtinSites = SITES.map(code => ({ code, name: getShopFromSiteCode(code), brand: '', color: '', isBuiltin: true, active: true }));
  const allSites = [...builtinSites, ...customSites];
  
  return (
    <div className="paper rounded-2xl p-4">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14, flexWrap:'wrap', gap:8}}>
        <div>
          <div className="font-display" style={{fontSize:17, fontWeight:600}}>🌐 网站维护</div>
          <div style={{fontSize:11, color:'var(--ink-3)', marginTop:3}}>
            共 {allSites.length} 个网站 · {builtinSites.length} 个内置 + {customSites.length} 个自定义
          </div>
        </div>
        {isAdmin && (
          <button onClick={() => setShowNew(true)}
            style={{padding:'7px 14px', background:'#1e40af', color:'white', border:'none', borderRadius:7, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}>
            + 添加自定义网站
          </button>
        )}
      </div>
      
      {loading ? (
        <div style={{padding:'30px', textAlign:'center', color:'var(--ink-3)'}}>加载中...</div>
      ) : (
        <div style={{overflowX:'auto'}}>
          <table style={{width:'100%', borderCollapse:'collapse', fontSize:12}}>
            <thead>
              <tr style={{background:'#f8fafc', color:'var(--ink-3)'}}>
                <th style={{padding:'8px 10px', textAlign:'left', fontWeight:600, borderBottom:'1px solid var(--line)', width:80}}>代码</th>
                <th style={{padding:'8px 10px', textAlign:'left', fontWeight:600, borderBottom:'1px solid var(--line)'}}>名称 / 品牌</th>
                <th style={{padding:'8px 10px', textAlign:'left', fontWeight:600, borderBottom:'1px solid var(--line)'}}>域名</th>
                <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', width:80}}>类型</th>
                <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', width:80}}>状态</th>
                <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', width:120}}>操作</th>
              </tr>
            </thead>
            <tbody>
              {allSites.map(s => (
                <tr key={s.code} style={{borderBottom:'1px solid var(--line)'}}>
                  <td style={{padding:'8px 10px', fontWeight:700, fontFamily:'monospace'}}>{s.code}</td>
                  <td style={{padding:'8px 10px'}}>
                    <div style={{fontWeight:600}}>{s.name || s.code}</div>
                    {s.brand && <div style={{fontSize:10, color:'var(--ink-3)'}}>{s.brand}</div>}
                  </td>
                  <td style={{padding:'8px 10px', color:'var(--ink-3)', fontFamily:'monospace', fontSize:11}}>{s.domain || '-'}</td>
                  <td style={{padding:'8px 10px', textAlign:'center'}}>
                    <span style={{padding:'2px 8px', background: s.isBuiltin ? '#f3e8ff' : '#fef3c7', color: s.isBuiltin ? '#7c3aed' : '#92400e', borderRadius:8, fontSize:10, fontWeight:600}}>
                      {s.isBuiltin ? '内置' : '自定义'}
                    </span>
                  </td>
                  <td style={{padding:'8px 10px', textAlign:'center'}}>
                    <span style={{padding:'2px 8px', background: s.active !== false ? '#dcfce7' : '#f5f5f7', color: s.active !== false ? '#15803d' : '#86868b', borderRadius:8, fontSize:10, fontWeight:600}}>
                      {s.active !== false ? '✓ 启用' : '✕ 停用'}
                    </span>
                  </td>
                  <td style={{padding:'8px 10px', textAlign:'center'}}>
                    {!s.isBuiltin && isAdmin && (
                      <>
                        <button onClick={() => setEditing(s)} style={{padding:'3px 8px', background:'#e0f2fe', color:'#0369a1', border:'1px solid #7dd3fc', borderRadius:4, cursor:'pointer', fontSize:10, fontWeight:600, marginRight:3}}>✏️</button>
                        <button onClick={() => updateSite(s.code, { active: s.active === false })} style={{padding:'3px 8px', background:'#fef3c7', color:'#92400e', border:'1px solid #fbbf24', borderRadius:4, cursor:'pointer', fontSize:10, fontWeight:600, marginRight:3}}>{s.active === false ? '启用' : '停用'}</button>
                        <button onClick={() => deleteSite(s.code)} style={{padding:'3px 8px', background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:4, cursor:'pointer', fontSize:10, fontWeight:600}}>🗑</button>
                      </>
                    )}
                    {s.isBuiltin && <span style={{fontSize:10, color:'var(--ink-4)'}}>—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div style={{marginTop:12, padding:'10px 12px', background:'#eff6ff', border:'1px solid #bfdbfe', borderRadius:8, fontSize:11, color:'#1e40af', lineHeight:1.6}}>
        💡 <strong>说明</strong>:内置网站(VK/RD/DC/MJ/DF/LS/RS/J/PL/MO/海服)是代码里写死的,所有客服系统都能用。<br/>
        自定义网站存在 Supabase <code>system_settings</code> 表,所有客服共享,可后台动态增删改。
      </div>
      
      {showNew && (
        <SiteEditorModal site={null} onSave={addSite} onClose={() => setShowNew(false)} />
      )}
      {editing && (
        <SiteEditorModal site={editing} onSave={(s) => updateSite(editing.code, s)} onClose={() => setEditing(null)} />
      )}
    </div>
  );
};

const SiteEditorModal = ({ site, onSave, onClose }) => {
  const [code, setCode] = useState(site?.code || '');
  const [name, setName] = useState(site?.name || '');
  const [brand, setBrand] = useState(site?.brand || '');
  const [domain, setDomain] = useState(site?.domain || '');
  const [color, setColor] = useState(site?.color || '#0369a1');
  const [prefix, setPrefix] = useState(site?.prefix || '');
  const isEdit = !!site;
  
  const handleSave = () => {
    if (!code.trim() || !name.trim()) { alert('代码和名称必填'); return; }
    if (code.length > 12) { alert('代码不超过 12 个字符'); return; }
    onSave({ code: code.trim().toUpperCase(), name: name.trim(), brand: brand.trim(), domain: domain.trim(), color, prefix: prefix.trim().toUpperCase() });
  };
  
  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:100000, display:'flex', alignItems:'flex-start', justifyContent:'center', overflow:'auto', padding:'30px 20px'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, width:'100%', maxWidth:520, boxShadow:'0 20px 60px rgba(0,0,0,.25)'}}>
        <div style={{padding:'14px 20px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div className="font-display" style={{fontSize:16, fontWeight:600}}>🌐 {isEdit ? '编辑网站' : '添加自定义网站'}</div>
          <button onClick={onClose} style={{background:'transparent', border:'none', cursor:'pointer', fontSize:18}}>×</button>
        </div>
        <div style={{padding:'16px 20px', display:'flex', flexDirection:'column', gap:11}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>代码 *</label>
              <input value={code} onChange={e => setCode(e.target.value)} placeholder="如 SG / GMV" disabled={isEdit} maxLength={12}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'monospace', textTransform:'uppercase', background: isEdit ? '#f5f5f7' : 'white'}} />
              <div style={{fontSize:10, color:'var(--ink-4)', marginTop:2}}>2-12 字符 · 大写 · 不可重复</div>
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>名称 *</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="如 Singapore Outlet"
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit'}} />
            </div>
          </div>
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>品牌全称</label>
            <input value={brand} onChange={e => setBrand(e.target.value)} placeholder="如 Vakkerlight Singapore"
              style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit'}} />
          </div>
          <div style={{display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:10}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>域名</label>
              <input value={domain} onChange={e => setDomain(e.target.value)} placeholder="如 vakkerlight.sg"
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'monospace'}} />
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>订单前缀</label>
              <input value={prefix} onChange={e => setPrefix(e.target.value)} placeholder="VKS" maxLength={6}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'monospace', textTransform:'uppercase'}} />
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>主题色</label>
              <input type="color" value={color} onChange={e => setColor(e.target.value)}
                style={{width:'100%', height:33, padding:0, border:'1px solid var(--line)', borderRadius:6, cursor:'pointer'}} />
            </div>
          </div>
        </div>
        <div style={{padding:'12px 20px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'flex-end', gap:6, background:'#fafafa'}}>
          <button onClick={onClose} className="btn-sec" style={{padding:'7px 14px', fontSize:12}}>取消</button>
          <button onClick={handleSave}
            style={{padding:'7px 18px', background:'#1e40af', color:'white', border:'none', borderRadius:7, cursor:'pointer', fontSize:13, fontWeight:600, fontFamily:'inherit'}}>
            {isEdit ? '💾 保存修改' : '+ 添加'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

// 内置网站代码 → 名称(从 SHOP_CONFIGS 推断)
const getShopFromSiteCode = (code) => {
  const map = {
    // 🆕 fix51: 网站全称统一为美工/拍摄部 SHOPS_PRESET 标准命名
    VK: 'Vakkerlight', RD: 'Radilum', DC: 'Docos.us', MJ: 'Mooijane',
    DF: 'Dekorfine', LS: 'Lumioshine', RS: 'Rayonshine',
    MH: 'Mooiehome', PL: 'Pinlighting', MO: 'Mooielight',
    '海服': '海服', SH: '上海',
    // 旧代码兼容(数据库里可能有历史值)
    J: 'Mooiehome',
  };
  return map[code] || code;
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix21: 产品维护 (ProductsMaintenanceSection)
// 存储:Supabase products 表 · 完整 CRUD + 搜索 + 适用网站标签
// 将来在线下单 / 售后录入时可联想推荐
// ════════════════════════════════════════════════════════════════════
const ProductsMaintenanceSection = ({ user, toast }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterSupplier, setFilterSupplier] = useState('all');
  const [editing, setEditing] = useState(null);   // null | 'new' | productObj
  const [suppliers, setSuppliers] = useState([]);
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  
  const load = async () => {
    setLoading(true);
    try {
      const list = await CLOUD.list('products', { order:{col:'updated_at', asc:false}, limit:1000 });
      setProducts((list || []).filter(p => !p.deleted));
      const supps = await CLOUD.list('suppliers', { order:{col:'name', asc:true}, limit:500 });
      setSuppliers((supps || []).filter(s => !s.deleted));
    } catch (e) { toast('❌ 加载失败: ' + (e.message || e)); }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  
  const handleDelete = async (p) => {
    if (!isAdmin) { toast('仅主管可删除'); return; }
    if (!await wsConfirm(`确认删除 ${p.sku || ''} ${p.name}?`)) return;
    const ok = await CLOUD.upsert('products', { ...p, deleted: true, deleted_at: Date.now(), deleted_by: user.id });
    if (ok) { toast('✓ 已删除'); load(); }
  };
  
  const filtered = useMemo(() => {
    let arr = products;
    if (filterCategory !== 'all') arr = arr.filter(p => p.category === filterCategory);
    if (filterSupplier !== 'all') arr = arr.filter(p => p.supplier_id === filterSupplier);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      arr = arr.filter(p => [p.sku, p.name, p.supplier_name, p.tags, p.description, p.notes].filter(Boolean).join(' ').toLowerCase().includes(q));
    }
    return arr;
  }, [products, search, filterCategory, filterSupplier]);
  
  const PRODUCT_CATEGORIES = [
    { id:'lighting',    label:'💡 灯具' },
    { id:'furniture',   label:'🪑 家具' },
    { id:'accessories', label:'🔧 配件' },
    { id:'lampshade',   label:'灯罩' },
    { id:'parts',       label:'零件' },
    { id:'other',       label:'其他' },
  ];
  
  return (
    <div className="paper rounded-2xl p-4">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14, flexWrap:'wrap', gap:8}}>
        <div>
          <div className="font-display" style={{fontSize:17, fontWeight:600}}>📦 产品维护</div>
          <div style={{fontSize:11, color:'var(--ink-3)', marginTop:3}}>
            共 {products.length} 款产品 · 当前显示 {filtered.length}
          </div>
        </div>
        <button onClick={() => setEditing('new')}
          style={{padding:'7px 14px', background:'#1e40af', color:'white', border:'none', borderRadius:7, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}>
          + 新建产品
        </button>
      </div>
      
      {/* 筛选 */}
      <div style={{display:'flex', gap:6, flexWrap:'wrap', alignItems:'center', marginBottom:12}}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 SKU / 产品名 / 供应商 / 标签..."
          style={{flex:1, minWidth:220, padding:'6px 11px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, fontFamily:'inherit'}} />
        <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)}
          style={{padding:'6px 11px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, background:'white', fontFamily:'inherit'}}>
          <option value="all">所有分类</option>
          {PRODUCT_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
        </select>
        <select value={filterSupplier} onChange={e => setFilterSupplier(e.target.value)}
          style={{padding:'6px 11px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, background:'white', fontFamily:'inherit', maxWidth:160}}>
          <option value="all">所有供应商</option>
          {suppliers.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>
      </div>
      
      {/* 列表 */}
      {loading ? (
        <div style={{padding:'30px', textAlign:'center', color:'var(--ink-3)'}}>加载中...</div>
      ) : filtered.length === 0 ? (
        <div style={{padding:'40px 14px', textAlign:'center', color:'var(--ink-4)', fontSize:12}}>
          {products.length === 0 ? '还没有产品 · 点右上"+ 新建产品"开始' : '当前筛选下没有产品'}
        </div>
      ) : (
        <div style={{overflowX:'auto'}}>
          <table style={{width:'100%', borderCollapse:'collapse', fontSize:12}}>
            <thead>
              <tr style={{background:'#f8fafc', color:'var(--ink-3)'}}>
                <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', width:60}}>图</th>
                <th style={{padding:'8px 10px', textAlign:'left', fontWeight:600, borderBottom:'1px solid var(--line)', width:130}}>SKU</th>
                <th style={{padding:'8px 10px', textAlign:'left', fontWeight:600, borderBottom:'1px solid var(--line)'}}>产品名</th>
                <th style={{padding:'8px 10px', textAlign:'left', fontWeight:600, borderBottom:'1px solid var(--line)', width:140}}>供应商</th>
                <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', width:90}}>分类</th>
                <th style={{padding:'8px 10px', textAlign:'right', fontWeight:600, borderBottom:'1px solid var(--line)', width:100}}>默认价</th>
                <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', width:80}}>售后</th>
                <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', width:90}}>操作</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => {
                const cat = PRODUCT_CATEGORIES.find(c => c.id === p.category);
                return (
                  <tr key={p.id} style={{borderBottom:'1px solid var(--line)', transition:'background .12s'}}
                    onMouseEnter={e => e.currentTarget.style.background = '#fafafa'}
                    onMouseLeave={e => e.currentTarget.style.background = 'white'}>
                    <td style={{padding:'6px 10px', textAlign:'center'}}>
                      {p.image ? (
                        <img src={p.image} style={{width:40, height:40, objectFit:'cover', borderRadius:5, cursor:'pointer'}}
                          onClick={() => window.open(p.image, '_blank')} title="点击查看大图" />
                      ) : (
                        <span style={{color:'var(--ink-4)', fontSize:14}}>📷</span>
                      )}
                    </td>
                    <td style={{padding:'8px 10px', fontFamily:'monospace', fontWeight:600}}>{p.sku || '-'}</td>
                    <td style={{padding:'8px 10px'}}>
                      <div style={{fontWeight:600}}>{p.name}</div>
                      {p.tags && <div style={{fontSize:10, color:'var(--ink-3)'}}>{p.tags}</div>}
                    </td>
                    <td style={{padding:'8px 10px', color:'var(--ink-2)'}}>{p.supplier_name || '-'}</td>
                    <td style={{padding:'8px 10px', textAlign:'center'}}>
                      {cat ? <span style={{padding:'2px 7px', background:'#f3e8ff', color:'#7c3aed', borderRadius:8, fontSize:10, fontWeight:600}}>{cat.label}</span> : '-'}
                    </td>
                    <td style={{padding:'8px 10px', textAlign:'right', fontFamily:'monospace'}}>
                      {p.default_unit_price ? `${p.default_currency || 'USD'} ${p.default_unit_price}` : '-'}
                    </td>
                    <td style={{padding:'8px 10px', textAlign:'center'}}>
                      {p.total_aftersales > 0 ? (
                        <span style={{padding:'2px 7px', background: p.total_aftersales >= 5 ? '#fee2e2' : '#fef3c7', color: p.total_aftersales >= 5 ? '#b91c1c' : '#92400e', borderRadius:8, fontSize:10, fontWeight:700}}>
                          🔧 {p.total_aftersales}
                        </span>
                      ) : <span style={{color:'var(--ink-4)'}}>-</span>}
                    </td>
                    <td style={{padding:'6px 10px', textAlign:'center'}}>
                      <button onClick={() => setEditing(p)} style={{padding:'3px 8px', background:'#e0f2fe', color:'#0369a1', border:'1px solid #7dd3fc', borderRadius:4, cursor:'pointer', fontSize:10, fontWeight:600, marginRight:3}}>✏️</button>
                      {isAdmin && <button onClick={() => handleDelete(p)} style={{padding:'3px 8px', background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:4, cursor:'pointer', fontSize:10, fontWeight:600}}>🗑</button>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      
      <div style={{marginTop:12, padding:'10px 12px', background:'#f0fdf4', border:'1px solid #86efac', borderRadius:8, fontSize:11, color:'#15803d', lineHeight:1.6}}>
        💡 <strong>用途</strong>:产品主表是公司的"产品字典"。将来在线下单 / 售后 / 退款录入时,可输入 SKU 自动填充产品名 + 图 + 供应商,大幅减少重复输入。<br/>
        售后次数会在 fix22 自动统计(基于售后记录的 product_name 匹配),目前仍可手动维护。
      </div>
      
      {editing && (
        <ProductEditorModal
          product={editing === 'new' ? null : editing}
          suppliers={suppliers}
          user={user}
          categories={PRODUCT_CATEGORIES}
          onClose={() => setEditing(null)}
          onSaved={() => { setEditing(null); load(); toast('✓ 已保存'); }}
        />
      )}
    </div>
  );
};

const ProductEditorModal = ({ product, suppliers, user, categories, onClose, onSaved }) => {
  const [sku, setSku] = useState(product?.sku || '');
  const [name, setName] = useState(product?.name || '');
  const [category, setCategory] = useState(product?.category || 'lighting');
  const [supplierId, setSupplierId] = useState(product?.supplier_id || '');
  const [defaultPrice, setDefaultPrice] = useState(product?.default_unit_price || '');
  const [defaultCurrency, setDefaultCurrency] = useState(product?.default_currency || 'USD');
  const [image, setImage] = useState(product?.image || '');
  const [url, setUrl] = useState(product?.url || '');
  const [description, setDescription] = useState(product?.description || '');
  const [tags, setTags] = useState(product?.tags || '');
  const [notes, setNotes] = useState(product?.notes || '');
  const [saving, setSaving] = useState(false);
  const isEdit = !!product;
  
  const handleSave = async () => {
    if (!name.trim()) { alert('产品名必填'); return; }
    setSaving(true);
    try {
      const supplier = suppliers.find(s => s.id === supplierId);
      const userName = user.name + (user.alias ? ' ' + user.alias : '');
      const id = product?.id || (crypto.randomUUID ? crypto.randomUUID() : ('prod_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8)));
      const record = {
        id,
        sku: sku.trim() || null,
        name: name.trim(),
        category,
        supplier_id: supplierId || null,
        supplier_name: supplier ? supplier.name : null,
        default_unit_price: defaultPrice ? parseFloat(defaultPrice) : null,
        default_currency: defaultCurrency,
        image: image || null,
        url: url.trim() || null,
        description: description.trim() || null,
        tags: tags.trim() || null,
        notes: notes.trim() || null,
        total_aftersales: product?.total_aftersales || 0,
        created_by: product?.created_by || user.id,
        created_by_name: product?.created_by_name || userName,
        created_at_ms: product?.created_at_ms || Date.now(),
        updated_at: new Date().toISOString(),
      };
      const ok = await CLOUD.upsert('products', record);
      if (!ok) throw new Error('保存失败');
      onSaved();
    } catch (e) { alert('保存失败: ' + (e.message || e)); }
    setSaving(false);
  };
  
  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:100000, display:'flex', alignItems:'flex-start', justifyContent:'center', overflow:'auto', padding:'30px 20px'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, width:'100%', maxWidth:720, boxShadow:'0 20px 60px rgba(0,0,0,.25)'}}>
        <div style={{padding:'14px 20px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div className="font-display" style={{fontSize:16, fontWeight:600}}>📦 {isEdit ? '编辑产品' : '新建产品'}</div>
          <button onClick={onClose} style={{background:'transparent', border:'none', cursor:'pointer', fontSize:18}}>×</button>
        </div>
        <div style={{padding:'16px 20px', display:'flex', flexDirection:'column', gap:11, maxHeight:'70vh', overflowY:'auto'}}>
          <div style={{display:'grid', gridTemplateColumns:'120px 1fr', gap:14}}>
            {/* 产品图 */}
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>产品图</label>
              <ProductImageSlot value={image} onChange={setImage} productName={name} />
              <div style={{fontSize:9, color:'var(--ink-4)', marginTop:3, lineHeight:1.4}}>点击 · Ctrl+V · 拖入</div>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:8}}>
              <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:10}}>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>SKU</label>
                  <input value={sku} onChange={e => setSku(e.target.value)} placeholder="如 VKL-0042"
                    style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'monospace'}} />
                </div>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>产品名 *</label>
                  <input value={name} onChange={e => setName(e.target.value)} placeholder="如 8-Light Bohemian Chandelier"
                    style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit'}} />
                </div>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>分类</label>
                  <select value={category} onChange={e => setCategory(e.target.value)}
                    style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white', fontFamily:'inherit'}}>
                    {categories.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>供应商</label>
                  <select value={supplierId} onChange={e => setSupplierId(e.target.value)}
                    style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white', fontFamily:'inherit'}}>
                    <option value="">— 不指定 —</option>
                    {suppliers.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{display:'grid', gridTemplateColumns:'1fr 80px', gap:8}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>默认单价</label>
              <input type="number" step="0.01" value={defaultPrice} onChange={e => setDefaultPrice(e.target.value)} placeholder="0.00"
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'monospace'}} />
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>币种</label>
              <select value={defaultCurrency} onChange={e => setDefaultCurrency(e.target.value)}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white', fontFamily:'inherit'}}>
                <option value="USD">USD</option>
                <option value="CNY">CNY</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </div>
          </div>
          
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>产品 URL</label>
            <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://vakkerlight.com/products/..."
              style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'monospace'}} />
          </div>
          
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>标签 (用逗号或空格分隔)</label>
            <input value={tags} onChange={e => setTags(e.target.value)} placeholder="如 黄铜, 古典, 客厅"
              style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit'}} />
          </div>
          
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>产品描述</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} rows={2}
              placeholder="规格 / 材质 / 尺寸..."
              style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical'}} />
          </div>
          
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>内部备注</label>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={2}
              placeholder="易碎注意事项 / 物流要求 / 历史问题..."
              style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical'}} />
          </div>
        </div>
        <div style={{padding:'12px 20px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'flex-end', gap:6, background:'#fafafa'}}>
          <button onClick={onClose} disabled={saving} className="btn-sec" style={{padding:'7px 14px', fontSize:12}}>取消</button>
          <button onClick={handleSave} disabled={saving}
            style={{padding:'7px 18px', background:'#1e40af', color:'white', border:'none', borderRadius:7, cursor:saving?'wait':'pointer', fontSize:13, fontWeight:600, fontFamily:'inherit'}}>
            {saving ? '保存中...' : (isEdit ? '💾 保存修改' : '+ 创建')}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix49: 拍摄部对接配置 — WorkTrack-KPI Supabase URL + Anon Key
// 由 Martin 提供;只有 super_admin / admin 能配置
// 配置成功后,客服系统就能写入 WorkTrack-KPI 的 photo_logs 表
// ════════════════════════════════════════════════════════════════════
