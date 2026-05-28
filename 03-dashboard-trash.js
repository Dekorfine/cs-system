// ════════════════════════════════════════════════════════════════════
// 📈 数据看板 + 🗑 回收站 · fix28-69
// APP_VERSION: 2026.05.27-fix69
// ════════════════════════════════════════════════════════════════════


// ════════════════════════════════════════════════════════════════════
// 🆕 fix52: 客户档案 360° Modal
// 输入一个客户邮箱 → 跨模块查询:跟进 / 拒付 / 售后 / 评价 / 线下单
// 帮客服一眼看清这个客户在系统里的完整历史
// ════════════════════════════════════════════════════════════════════
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
const DashboardModule = ({ user, employees, records }) => {
  const isAdmin = (user.role === 'admin' || user.role === 'super_admin');
  const [scope, setScope] = useState(isAdmin ? 'team' : 'me'); // me | team
  const [selectedEmpId, setSelectedEmpId] = useState(user.id);

  const live = records.filter(r => !r.deleted);

  // 过滤范围
  const scopedRecords = useMemo(() => {
    if (scope === 'me') return live.filter(r => r.ownerId === user.id);
    if (scope === 'one' && selectedEmpId) return live.filter(r => r.ownerId === selectedEmpId);
    return live; // team
  }, [scope, selectedEmpId, live, user.id]);

  const today = todayISO();
  const last7Start = addDays(today, -6);
  const monthStart = today.slice(0, 8) + '01';

  // 时段统计
  const calcRange = (startDate, endDate) => {
    const filtered = scopedRecords.filter(r => r.date >= startDate && r.date <= endDate);
    const totalEmails = filtered.length;
    const totalMins = filtered.reduce((s, r) => s + (r.durationMin || 0), 0);
    const easy = filtered.filter(r => r.difficulty === 'easy').length;
    const mid = filtered.filter(r => r.difficulty === 'mid').length;
    const hard = filtered.filter(r => r.difficulty === 'hard').length;
    const resolved = filtered.filter(r => r.status === 'resolved').length;
    const overdue = filtered.filter(r => r.status !== 'resolved' && r.nextFollowUp && r.nextFollowUp < today).length;
    return { totalEmails, totalMins, easy, mid, hard, resolved, overdue };
  };

  const todayStats = calcRange(today, today);
  const week7Stats = calcRange(last7Start, today);
  const monthStats = calcRange(monthStart, today);

  // 7天每天柱状图数据
  const daily7 = useMemo(() => {
    const arr = [];
    for (let i = 6; i >= 0; i--) {
      const d = addDays(today, -i);
      const recs = scopedRecords.filter(r => r.date === d);
      arr.push({
        date: d,
        label: d.slice(5).replace('-','/'),
        weekday: ['日','一','二','三','四','五','六'][new Date(d).getDay()],
        count: recs.length,
        mins: recs.reduce((s, r) => s + (r.durationMin || 0), 0),
      });
    }
    return arr;
  }, [scopedRecords]);

  const maxCount = Math.max(...daily7.map(d => d.count), 1);

  // 每员工本月排行 (主管视角)
  const empRanking = useMemo(() => {
    if (scope !== 'team') return null;
    return employees.map(e => {
      const recs = live.filter(r => r.ownerId === e.id && r.date >= monthStart);
      const mins = recs.reduce((s, r) => s + (r.durationMin || 0), 0);
      const easy = recs.filter(r => r.difficulty === 'easy').length;
      const mid = recs.filter(r => r.difficulty === 'mid').length;
      const hard = recs.filter(r => r.difficulty === 'hard').length;
      const resolved = recs.filter(r => r.status === 'resolved').length;
      const score = easy + mid * 2 + hard * 3;
      return { ...e, count: recs.length, mins, easy, mid, hard, resolved, score };
    }).sort((a, b) => b.score - a.score);
  }, [scope, employees, live, monthStart]);

  return (
    <div className="space-y-5 fade-in">
      {/* 范围切换 */}
      <div className="paper rounded-2xl p-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Icon name="chart" className="w-5 h-5" style={{color:'var(--accent)'}} />
            <span className="font-display text-base font-bold">数据看板</span>
            <span className="text-[10px] font-mono" style={{color:'var(--ink-4)'}}>
              当天 · 近 7 天 · 本月
            </span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {isAdmin && (
              <>
                <button className={`btn-sec ${scope==='team'?'!bg-[var(--accent)] !text-white !border-[var(--accent)]':''}`} onClick={() => setScope('team')}>全团队</button>
                <button className={`btn-sec ${scope==='one'?'!bg-[var(--accent)] !text-white !border-[var(--accent)]':''}`} onClick={() => setScope('one')}>指定员工</button>
                {scope === 'one' && (
                  <select value={selectedEmpId} onChange={e => setSelectedEmpId(e.target.value)} style={{width:'auto', padding:'5px 10px', fontSize:'12px'}}>
                    {employees.map(e => <option key={e.id} value={e.id}>{e.name}{e.alias && ` (${e.alias})`}</option>)}
                  </select>
                )}
              </>
            )}
            <button className={`btn-sec ${scope==='me'?'!bg-[var(--accent)] !text-white !border-[var(--accent)]':''}`} onClick={() => setScope('me')}>我的</button>
          </div>
        </div>
      </div>

      {/* 三段统计 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <RangeCard title="今日" range={today} stats={todayStats} accent="var(--good)" />
        <RangeCard title="近 7 天" range={`${last7Start.slice(5)} → ${today.slice(5)}`} stats={week7Stats} accent="var(--info)" />
        <RangeCard title="本月" range={`${monthStart.slice(5,7)}月`} stats={monthStats} accent="var(--accent)" />
      </div>

      {/* 7天每天柱状图 */}
      <div className="paper rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="font-display text-sm font-bold">近 7 天工作量趋势</div>
            <div className="text-[10px] font-mono" style={{color:'var(--ink-3)'}}>邮件数 / 工作时长</div>
          </div>
        </div>
        <div className="flex items-end gap-2 h-44">
          {daily7.map(d => {
            const heightPct = (d.count / maxCount) * 100;
            const isToday = d.date === today;
            return (
              <div key={d.date} className="flex-1 flex flex-col items-center gap-1" style={{minWidth:'40px'}}>
                <div className="text-[10px] font-mono font-bold" style={{color: d.count > 0 ? 'var(--ink)' : 'var(--ink-4)'}}>{d.count || ''}</div>
                <div style={{
                  width:'100%',
                  height: Math.max(heightPct, 2) + '%',
                  background: isToday ? 'var(--accent)' : (d.count > 0 ? 'var(--accent-mid)' : 'var(--line-soft)'),
                  borderRadius:'4px 4px 0 0',
                  transition:'all .3s',
                  position:'relative',
                  display:'flex',
                  alignItems:'flex-end',
                  justifyContent:'center',
                }} title={`${d.count} 封 · ${fmtDuration(d.mins)}`}>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-mono font-bold" style={{color: isToday ? 'var(--accent)' : 'var(--ink-2)'}}>{d.label}</div>
                  <div className="text-[9px]" style={{color:'var(--ink-4)'}}>周{d.weekday}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🆕 fix18: 邮件按网站 × 按天 分布 (主管想看每人负责哪些网站,每天回多少) */}
      <SiteDailyBreakdown
        scope={scope} selectedEmpId={selectedEmpId} employees={employees}
        live={live} today={today} last7Start={last7Start} monthStart={monthStart}
      />

      {/* 员工排行 (仅主管/全团队) */}
      {empRanking && (
        <div className="paper rounded-2xl overflow-hidden">
          <div className="p-4 border-b" style={{borderColor:'var(--line)'}}>
            <div className="flex items-center gap-2">
              <Icon name="star" className="w-4 h-4" style={{color:'var(--gold)'}} />
              <span className="font-display text-sm font-bold">本月工作量排行</span>
              <span className="text-[10px] font-mono" style={{color:'var(--ink-3)'}}>简 ×1 + 中 ×2 + 复 ×3 = 加权分</span>
            </div>
          </div>
          <div className="overflow-x-auto scrollbar-thin">
            <table>
              <thead>
                <tr>
                  <th style={{width:'40px'}}>#</th>
                  <th>员工</th>
                  <th>负责网站</th>
                  <th style={{textAlign:'right'}}>邮件数</th>
                  <th style={{textAlign:'right'}}>总时长</th>
                  <th style={{textAlign:'right'}}>简/中/复</th>
                  <th style={{textAlign:'right'}}>已解决</th>
                  <th style={{textAlign:'right'}}>加权分</th>
                </tr>
              </thead>
              <tbody>
                {empRanking.map((e, idx) => (
                  <tr key={e.id}>
                    <td>
                      <span className={`tag ${idx<3?'tag-gold':'tag-neutral'}`}>{idx+1}</span>
                    </td>
                    <td>
                      <div className="font-bold text-xs">{e.name}{e.alias && ` · ${e.alias}`}</div>
                      {(e.role === 'admin' || e.role === 'super_admin') && <div className="text-[10px]" style={{color:'var(--accent)'}}>{e.title || '主管'}</div>}
                    </td>
                    <td><span className="text-[11px]" style={{color:'var(--ink-3)'}}>{e.sites || '—'}</span></td>
                    <td style={{textAlign:'right'}}><span className="font-mono font-bold">{e.count}</span></td>
                    <td style={{textAlign:'right'}}><span className="font-mono">{fmtDuration(e.mins)}</span></td>
                    <td style={{textAlign:'right'}}><span className="font-mono text-[11px]" style={{color:'var(--ink-3)'}}>{e.easy}/{e.mid}/{e.hard}</span></td>
                    <td style={{textAlign:'right'}}><span className="font-mono font-bold" style={{color:'var(--good)'}}>{e.resolved}</span></td>
                    <td style={{textAlign:'right'}}><span className="font-mono font-bold text-base" style={{color:'var(--accent)'}}>{e.score}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

const RangeCard = ({ title, range, stats, accent }) => (
  <div className="paper rounded-2xl p-5" style={{borderLeft:`4px solid ${accent}`}}>
    <div className="flex items-center justify-between mb-3">
      <div>
        <div className="font-display text-base font-bold">{title}</div>
        <div className="text-[10px] font-mono" style={{color:'var(--ink-3)'}}>{range}</div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-3 text-sm">
      <div>
        <div className="text-[10px] font-bold uppercase" style={{color:'var(--ink-3)'}}>邮件数</div>
        <div className="font-mono font-bold text-2xl tabular-nums" style={{color:accent}}>{stats.totalEmails}</div>
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase" style={{color:'var(--ink-3)'}}>总时长</div>
        <div className="font-mono font-bold text-2xl tabular-nums">{fmtDuration(stats.totalMins)}</div>
      </div>
    </div>
    <div className="mt-3 pt-3 border-t space-y-1.5 text-[11px]" style={{borderColor:'var(--line-soft)'}}>
      <div className="flex justify-between"><span style={{color:'var(--ink-3)'}}>简/中/复</span>
        <span className="font-mono"><span style={{color:'var(--good)'}}>{stats.easy}</span>/<span style={{color:'var(--gold)'}}>{stats.mid}</span>/<span style={{color:'var(--bad)'}}>{stats.hard}</span></span>
      </div>
      <div className="flex justify-between"><span style={{color:'var(--ink-3)'}}>已解决</span>
        <span className="font-mono font-bold" style={{color:'var(--good)'}}>{stats.resolved}</span></div>
      <div className="flex justify-between"><span style={{color:'var(--ink-3)'}}>逾期</span>
        <span className="font-mono font-bold" style={{color: stats.overdue > 0 ? 'var(--bad)' : 'var(--ink-4)'}}>{stats.overdue}</span></div>
    </div>
  </div>
);

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

  const permaDelete = (id) => {
    if (!isAdmin) { toast('⚠ 仅主管可永久删除'); return; }
    if (!confirm('确认永久删除？此操作不可撤销！')) return;
    setRecords(prev => prev.filter(r => r.id !== id));
    toast('✗ 已永久删除');
  };

  const clearAll = () => {
    if (!isAdmin) return;
    if (!confirm(`确认永久删除全部 ${deleted.length} 条记录？此操作不可撤销！`)) return;
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
    if (!confirm(`👑 老板权限直接删除\n\n${recordSummary}\n\n确认删除? 此操作会记录到审计日志。`)) return false;
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
      if (!confirm(`⭐ 主管删除当天数据\n\n${recordSummary}\n\n确认删除?`)) return false;
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
    const reason = prompt(`📜 删除历史数据需要老板审批\n\n${recordSummary}\n\n请填写删除理由:`);
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
  const reason = prompt(`📋 申请删除当天数据(需主管批准)\n\n${recordSummary}\n\n请填写删除理由:`);
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
    const note = prompt(`✅ 批准删除\n\n${req.record_summary}\n\n备注(可留空):`, '');
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
    const note = prompt(`❌ 拒绝删除\n\n${req.record_summary}\n\n拒绝理由:`, '');
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
// 📊 主管汇总面板 - 总览所有模块
// ============================================================
const AdminOverviewDashboard = ({ user, employees, toast }) => {
  const [data, setData] = useState({ chargebacks:[], offlineOrders:[], customInquiries:[], photoVerif:[], aftersales:[], refills:[], refunds:[], reviews:[], records:[], deleteReqs:[] });
  const [loading, setLoading] = useState(true);
  const [filterEmployee, setFilterEmployee] = useState('all');
  
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
        CLOUD.list('product_reviews', { limit: 500 }),
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
    } catch(e) { toast('❌ 加载失败: ' + e.message); }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  
  // 按员工筛选
  const filterByEmployee = (list, fields = ['created_by']) => {
    if (filterEmployee === 'all') return list;
    return list.filter(r => fields.some(f => r[f] === filterEmployee));
  };
  
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
  }, [data, filterEmployee]);
  
  if (loading) return <div className="paper rounded-2xl p-12" style={{textAlign:'center'}}>⏳ 加载中...</div>;
  
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
            <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>所有模块总览 · 实时数据</div>
          </div>
          <div style={{display:'flex', gap:6, alignItems:'center'}}>
            <span style={{fontSize:11, color:'var(--ink-3)'}}>👤 按员工筛选:</span>
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
      </div>
      
      {/* 紧急关注 */}
      {(stats.chargebacks.urgent > 0 || stats.refunds.pending > 0 || stats.followups.overdue > 0 || stats.deleteReqs.pending > 0) && (
        <div className="paper rounded-2xl p-4" style={{background:'linear-gradient(90deg, #fef2f2 0%, #fed7aa 100%)', border:'2px solid #f87171'}}>
          <div className="font-display" style={{fontSize:15, fontWeight:700, color:'#991b1b', marginBottom:10}}>🔥 紧急关注</div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:10}}>
            {stats.chargebacks.urgent > 0 && <StatCard icon="🚨" title="紧急拒付" value={stats.chargebacks.urgent} color="#dc2626" sub="7 天内截止 / 已逾期" />}
            {stats.refunds.pending > 0 && <StatCard icon="💰" title="待审退款" value={stats.refunds.pending} color="#d97706" sub="财务审核中" />}
            {stats.followups.overdue > 0 && <StatCard icon="⏰" title="跟进逾期" value={stats.followups.overdue} color="#dc2626" sub="未处理客户跟进" />}
            {stats.deleteReqs.pending > 0 && <StatCard icon="🛡" title="待审删除" value={stats.deleteReqs.pending} color="#7c3aed" sub="员工的删除申请" />}
          </div>
        </div>
      )}
      
      {/* 主业务模块 */}
      <div className="paper rounded-2xl p-4">
        <div className="font-display" style={{fontSize:15, fontWeight:600, marginBottom:10}}>📦 业务模块</div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:10}}>
          <StatCard icon="📞" title="客服跟进" value={stats.followups.total} color="#5e5ce6" 
            sub={`今日 ${stats.followups.today} · 逾期 ${stats.followups.overdue}`} />
          <StatCard icon="🚨" title="拒付管理" value={stats.chargebacks.active} color="#dc2626"
            sub={`总 ${stats.chargebacks.total} · 胜诉 ${stats.chargebacks.won} · 败诉 ${stats.chargebacks.lost}`} />
          <StatCard icon="💳" title="线下单" value={stats.offline.total} color="#0369a1"
            sub={`已收款 $${stats.offline.amount}`} />
          <StatCard icon="🎨" title="定制咨询" value={stats.custom.active} color="#7c3aed"
            sub={`生产/付款中 ${stats.custom.paid} · 总 ${stats.custom.total}`} />
          <StatCard icon="📸" title="实拍核实" value={stats.photo.pending} color="#be185d"
            sub={`待联系 · 总 ${stats.photo.total}`} />
          <StatCard icon="🔧" title="售后" value={stats.aftersales.total} color="#ea580c" sub="历史 + 进行中" />
          <StatCard icon="📦" title="补件" value={stats.refills.total} color="#0891b2" sub="历史 + 进行中" />
          <StatCard icon="💰" title="退款" value={stats.refunds.total} color="#d97706" 
            sub={`待审 ${stats.refunds.pending}`} />
          <StatCard icon="⭐" title="产品评价" value={stats.reviews.active} color="#fbbf24"
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
      const { data } = await CLOUD.client.from('system_settings').select('*').eq('key', 'alert_thresholds').single();
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
  
  const handleResetDefaults = () => {
    if (!confirm('重置为默认阈值?')) return;
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
    if (!confirm(`确认删除自定义网站 "${code}"?\n\n警告:已使用此网站的历史记录会保留代码,但下拉不再出现。`)) return;
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
    if (!confirm(`确认删除 ${p.sku || ''} ${p.name}?`)) return;
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
