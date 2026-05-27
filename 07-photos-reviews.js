// ════════════════════════════════════════════════════════════════════
// 🎨 定制&实拍 + ⭐ 产品评价 · 含 fix28-46 全部累积修复
// APP_VERSION: 2026.05.27-fix46 · 拆自 workspace.html 行号 14606-15650
// ════════════════════════════════════════════════════════════════════




const ReviewsModule = ({ user, employees, toast }) => {
  const allSites = useSiteCodes();  // 🆕 fix22 联动 3: 合并 内置 SITES + 自定义网站
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);  // 'new' or review object
  const [completing, setCompleting] = useState(null);
  const [exportOpen, setExportOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState('active');  // 'all' | 'active' | 'pending' | 'in_progress' | 'completed' | 'mine'
  const [filterSite, setFilterSite] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [search, setSearch] = useState('');
  // 🆕 fix11: 任务接单后直接在同页面打开 AI 评价生成(传产品信息给美工 iframe)
  const [aiPanelReview, setAiPanelReview] = useState(null);
  
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  
  const load = async () => {
    setLoading(true);
    try {
      const list = await CLOUD.list('product_reviews', { order:{col:'created_at', asc:false}, limit:500 });
      const live = (list || []).filter(r => !r.deleted);
      setReviews(live);
      // 写 cache 给顶部 tab 徽章用
      STORE.set('reviews_cache', live);
    } catch(e) { toast('❌ 加载失败: ' + e.message); }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  
  const handleDelete = async (id) => {
    if (!confirm('确定要删除此评价任务？删除后无法恢复。')) return;
    const r = reviews.find(x => x.id === id);
    if (!r) return;
    const res = await CLOUD.upsert('product_reviews', { ...r, deleted:true, updated_at: new Date().toISOString() });
    if (res) { toast('✓ 已删除'); load(); }
  };
  
  const handleClaim = async (review) => {
    const userName = user.name + (user.alias ? ' ' + user.alias : '');
    const now = new Date().toISOString();
    const payload = {
      ...review,
      claimed_by: user.id,
      claimed_by_name: userName,
      claimed_at: now,
      status: 'in_progress',
      updated_at: now,
    };
    const res = await CLOUD.upsert('product_reviews', payload);
    if (res) { toast('✓ 已接单！记得完成后点"标记完成"'); load(); }
  };
  
  const handleUnclaim = async (review) => {
    if (!confirm('放弃这个任务？其他人将可以接')) return;
    const payload = {
      ...review,
      claimed_by: null,
      claimed_by_name: null,
      claimed_at: null,
      status: 'pending',
      updated_at: new Date().toISOString(),
    };
    const res = await CLOUD.upsert('product_reviews', payload);
    if (res) { toast('✓ 已放弃,可被他人领取'); load(); }
  };
  
  const filtered = useMemo(() => {
    let list = reviews;
    
    // 状态筛选
    if (filterStatus === 'active') list = list.filter(r => r.status !== 'completed' && r.status !== 'cancelled');
    else if (filterStatus === 'mine') {
      list = list.filter(r => 
        r.claimed_by === user.id || 
        r.assigned_to === user.id ||
        (r.status === 'pending' && (!r.assigned_to || r.assigned_to === user.id))
      );
    }
    else if (filterStatus !== 'all') list = list.filter(r => r.status === filterStatus);
    
    if (filterSite !== 'all') list = list.filter(r => r.site === filterSite);
    if (filterPriority !== 'all') list = list.filter(r => r.priority === filterPriority);
    
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(r => 
        (r.product_name || '').toLowerCase().includes(q) ||
        (r.product_url || '').toLowerCase().includes(q) ||
        (r.notes || '').toLowerCase().includes(q) ||
        (r.work_notes || '').toLowerCase().includes(q)
      );
    }
    return list;
  }, [reviews, filterStatus, filterSite, filterPriority, search, user.id]);
  
  const stats = useMemo(() => ({
    total: reviews.length,
    pending: reviews.filter(r => r.status === 'pending').length,
    inProgress: reviews.filter(r => r.status === 'in_progress').length,
    completed: reviews.filter(r => r.status === 'completed').length,
    myTasks: reviews.filter(r => 
      (r.claimed_by === user.id || r.assigned_to === user.id) && r.status !== 'completed'
    ).length,
  }), [reviews, user.id]);
  
  return (
    <div className="space-y-4 fade-in">
      {/* 头部统计 */}
      <div className="paper rounded-2xl p-4">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12}}>
          <div>
            <div className="font-display" style={{fontSize:18, fontWeight:600}}>⭐ 产品评价任务</div>
            <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>
              共 <strong>{stats.total}</strong> 个 · 
              <span style={{color:'#854d0e', marginLeft:4}}>待领取 <strong>{stats.pending}</strong></span> · 
              <span style={{color:'#075985', marginLeft:4}}>进行中 <strong>{stats.inProgress}</strong></span> · 
              <span style={{color:'#15803d', marginLeft:4}}>已完成 <strong>{stats.completed}</strong></span>
              {stats.myTasks > 0 && <span style={{color:'#dc2626', marginLeft:8, fontWeight:600}}>· 我有 {stats.myTasks} 个任务</span>}
            </div>
          </div>
          <div style={{display:'flex', gap:6, flexWrap:'wrap'}}>
            <button onClick={() => setAiPanelReview({ id: null, product_name: null, product_url: null, _adhoc: true })}
              title="不绑定特定任务,直接打开 AI 评价生成工具(美工系统)"
              style={{padding:'6px 14px', background:'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)', color:'white', border:'none', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit', boxShadow:'0 1px 3px rgba(124,58,237,.25)'}}>
              🤖 AI 评价工具
            </button>
            <button onClick={() => setExportOpen(true)} className="btn-sec" style={{padding:'6px 12px', fontSize:12}}>📊 导出</button>
            <button onClick={load} className="btn-sec" style={{padding:'6px 12px', fontSize:12}}>🔄 刷新</button>
            <button onClick={() => setEditing('new')} className="btn-pri" style={{padding:'6px 14px', fontSize:12}}>+ 发布评价任务</button>
          </div>
        </div>
        
        {/* 筛选 */}
        <div style={{marginTop:14, display:'flex', gap:8, flexWrap:'wrap', alignItems:'center'}}>
          <div style={{display:'flex', gap:4, flexWrap:'wrap'}}>
            {[
              { key:'active', label:'🔥 进行中', count: stats.pending + stats.inProgress },
              { key:'mine', label:'👤 我的任务', count: stats.myTasks },
              { key:'pending', label:'⏳ 待领取', count: stats.pending },
              { key:'in_progress', label:'🔧 进行中', count: stats.inProgress },
              { key:'completed', label:'✅ 已完成', count: stats.completed },
              { key:'all', label:'📋 全部', count: stats.total },
            ].map(t => (
              <button key={t.key} onClick={() => setFilterStatus(t.key)}
                style={{
                  padding:'4px 11px', borderRadius:14, fontSize:11, cursor:'pointer', fontFamily:'inherit',
                  border:'1px solid ' + (filterStatus === t.key ? 'var(--accent)' : 'var(--line)'),
                  background: filterStatus === t.key ? 'var(--accent)' : 'white',
                  color: filterStatus === t.key ? 'white' : 'var(--ink-2)',
                  fontWeight: filterStatus === t.key ? 600 : 400,
                }}>
                {t.label} ({t.count})
              </button>
            ))}
          </div>
        </div>
        
        <div style={{marginTop:10, display:'flex', gap:8, flexWrap:'wrap'}}>
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="🔍 搜索产品名 / 链接 / 备注..."
            style={{flex:1, minWidth:180, padding:'5px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:12}} />
          <select value={filterSite} onChange={e => setFilterSite(e.target.value)}
            style={{padding:'5px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:12, background:'white'}}>
            <option value="all">全部网站</option>
            {allSites.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={filterPriority} onChange={e => setFilterPriority(e.target.value)}
            style={{padding:'5px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:12, background:'white'}}>
            <option value="all">全部优先级</option>
            {REVIEW_PRIORITIES.map(p => <option key={p.key} value={p.key}>{p.label}</option>)}
          </select>
        </div>
      </div>
      
      {/* 列表 */}
      {loading ? (
        <div className="paper rounded-2xl p-10" style={{textAlign:'center', color:'var(--ink-3)'}}>⏳ 加载中...</div>
      ) : filtered.length === 0 ? (
        <div className="paper rounded-2xl p-12" style={{textAlign:'center', color:'var(--ink-3)'}}>
          📋 暂无评价任务 {filterStatus !== 'all' ? '(当前筛选下)' : ''}
          <div style={{marginTop:10, fontSize:11}}>点上方"+ 发布评价任务"开始</div>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(r => (
            <ReviewTaskCard key={r.id} review={r} user={user} employees={employees} isAdmin={isAdmin}
              onEdit={() => setEditing(r)}
              onDelete={() => handleDelete(r.id)}
              onClaim={() => handleClaim(r)}
              onUnclaim={() => handleUnclaim(r)}
              onComplete={() => setCompleting(r)}
              onOpenAi={() => setAiPanelReview(r)}
              onReload={load} />
          ))}
        </div>
      )}
      
      {/* 🆕 fix11: AI 评价生成全屏面板 — 接单后直接在同页面工作
           🚀 fix11-hotfix3: 永久挂载 + 后台预加载 → 首次打开后切换瞬间无感 */}
      <ReviewAiPanel
        visible={!!aiPanelReview}
        review={aiPanelReview}
        user={user}
        onClose={() => setAiPanelReview(null)}
        onComplete={() => { 
          if (aiPanelReview?._adhoc) {
            setAiPanelReview(null);
            return;
          }
          const r = aiPanelReview;
          setAiPanelReview(null);
          setCompleting(r);
        }}
      />
      
      {editing && (
        <ReviewEditor review={editing === 'new' ? null : editing} user={user} employees={employees}
          onClose={() => setEditing(null)}
          onSaved={() => { setEditing(null); load(); }}
          toast={toast} />
      )}
      {completing && (
        <ReviewCompleteModal review={completing} user={user}
          onClose={() => setCompleting(null)}
          onSaved={() => { setCompleting(null); load(); }}
          toast={toast} />
      )}
      {exportOpen && (
        <ReviewExportModal reviews={filtered} allReviews={reviews} user={user} employees={employees}
          onClose={() => setExportOpen(false)} toast={toast} />
      )}
    </div>
  );
};

// 任务卡
const ReviewTaskCard = ({ review, user, employees, isAdmin, onEdit, onDelete, onClaim, onUnclaim, onComplete, onOpenAi, onReload }) => {
  const [expanded, setExpanded] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  const status = REVIEW_STATUSES.find(s => s.key === review.status) || REVIEW_STATUSES[0];
  const priority = REVIEW_PRIORITIES.find(p => p.key === review.priority) || REVIEW_PRIORITIES[1];
  const isMine = review.claimed_by === user.id;
  const isCreator = review.created_by === user.id;
  const canClaim = review.status === 'pending' && (!review.assigned_to || review.assigned_to === user.id);
  const canComplete = isMine && review.status === 'in_progress';
  // 🆕 fix11: 我接的任务 → 可直接打开 AI 工具(in_progress 或 pending 等待我接)
  const canUseAi = (isMine && review.status === 'in_progress') || canClaim;
  const canEdit = isCreator || isAdmin;
  const canDelete = isCreator || isAdmin;
  const attachments = review.attachments || [];
  
  return (
    <div className="paper rounded-2xl fade-in" style={{
      overflow:'hidden',
      border: '1.5px solid ' + (review.status === 'completed' ? '#86efac' : review.priority === 'high' ? '#fca5a5' : 'var(--line)'),
      background: review.status === 'completed' ? '#f0fdf4' : 'white',
    }}>
      <div style={{padding:'12px 16px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:10, flexWrap:'wrap'}}>
          <div style={{flex:1, minWidth:0}}>
            <div style={{display:'flex', alignItems:'center', gap:6, flexWrap:'wrap', marginBottom:4}}>
              <span style={{padding:'2px 8px', borderRadius:10, fontSize:10, fontWeight:600, background: status.bg, color: status.color, border:'1px solid ' + (status.color + '40')}}>
                {status.label}
              </span>
              <span style={{padding:'2px 8px', borderRadius:10, fontSize:10, fontWeight:600, background: priority.bg, color: priority.color, border:'1px solid ' + priority.border}}>
                {priority.label}
              </span>
              {review.site && <span style={{padding:'2px 8px', background:'#f5f5f7', color:'var(--ink-3)', borderRadius:10, fontSize:10, fontWeight:600}}>{review.site}</span>}
              {review.platform && <span style={{padding:'2px 8px', background:'#e0e7ff', color:'#4338ca', borderRadius:10, fontSize:10, fontWeight:600}}>{review.platform}</span>}
              {isMine && <span style={{padding:'2px 8px', background:'#fef2f2', color:'#dc2626', borderRadius:10, fontSize:10, fontWeight:600}}>👤 我的任务</span>}
            </div>
            <div style={{fontSize:15, fontWeight:600, color:'var(--ink)', marginBottom:3}}>
              {review.product_name || '(未命名产品)'}
            </div>
            <a href={review.product_url} target="_blank" rel="noopener noreferrer"
              style={{fontSize:11, color:'#0369a1', textDecoration:'none', wordBreak:'break-all'}}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}>
              🔗 {review.product_url}
            </a>
            <div style={{fontSize:11, color:'var(--ink-3)', marginTop:6, display:'flex', gap:8, flexWrap:'wrap'}}>
              <span>📋 发布:{review.created_by_name} · {(review.created_at || '').slice(5, 16).replace('T', ' ')}</span>
              {review.assigned_to_name && (
                <span style={{color:'#7c3aed', fontWeight:500}}>· 🎯 指派给 {review.assigned_to_name}</span>
              )}
              {review.claimed_by_name && (
                <span style={{color:'#0369a1', fontWeight:500}}>· 👤 接单 {review.claimed_by_name}</span>
              )}
              {review.completed_by_name && (
                <span style={{color:'#15803d', fontWeight:500}}>· ✅ 完成 {review.completed_by_name}</span>
              )}
            </div>
            {review.notes && (
              <div style={{marginTop:8, padding:'6px 10px', background:'#fefce8', border:'1px solid #fde047', borderRadius:6, fontSize:12, color:'#854d0e'}}>
                💬 {review.notes}
              </div>
            )}
          </div>
          
          {/* 操作按钮 */}
          <div style={{display:'flex', gap:4, flexWrap:'wrap', alignItems:'flex-start'}}>
            {canClaim && (
              <button onClick={onClaim}
                style={{padding:'6px 14px', background:'var(--accent)', color:'white', border:'none', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}>
                👤 接此任务
              </button>
            )}
            {/* 🆕 fix11: 我的进行中任务 → 一键打开 AI 生成面板,产品信息自动传给美工 iframe */}
            {isMine && review.status === 'in_progress' && (
              <button onClick={onOpenAi}
                style={{padding:'6px 14px', background:'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)', color:'white', border:'none', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit', boxShadow:'0 1px 3px rgba(124,58,237,.25)'}}
                title="在当前页打开 AI 评价生成工具,产品信息已自动填好">
                🤖 AI 生成评价
              </button>
            )}
            {canComplete && (
              <button onClick={onComplete}
                style={{padding:'6px 14px', background:'#16a34a', color:'white', border:'none', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}>
                ✅ 标记完成
              </button>
            )}
            {isMine && review.status === 'in_progress' && (
              <button onClick={onUnclaim} className="btn-sec" style={{padding:'5px 10px', fontSize:11}}>
                放弃
              </button>
            )}
            {(review.status === 'completed' || expanded) && (review.work_notes || attachments.length > 0) && (
              <button onClick={() => setExpanded(v => !v)} className="btn-sec" style={{padding:'5px 10px', fontSize:11}}>
                {expanded ? '收起 ▲' : '查看详情 ▼'}
              </button>
            )}
            {!expanded && review.status === 'completed' && (review.work_notes || attachments.length > 0) && (
              <button onClick={() => setExpanded(true)} className="btn-sec" style={{padding:'5px 10px', fontSize:11}}>
                查看详情 ▼
              </button>
            )}
            {canEdit && (
              <button onClick={onEdit}
                style={{padding:'5px 10px', background:'#e0f2fe', color:'#0369a1', border:'1px solid #7dd3fc', borderRadius:6, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
                ✏️
              </button>
            )}
            {canDelete && (
              <button onClick={onDelete}
                style={{padding:'5px 10px', background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:6, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
                🗑
              </button>
            )}
          </div>
        </div>
        
        {/* 完成详情 */}
        {expanded && (
          <div style={{marginTop:12, padding:'10px 12px', background:'#f0fdf4', border:'1px solid #86efac', borderRadius:8}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8, gap:8, flexWrap:'wrap'}}>
              <div style={{fontSize:11, color:'#15803d', fontWeight:600}}>
                ✅ 完成详情 · {review.completed_at ? new Date(review.completed_at).toLocaleString('zh-CN') : ''}
              </div>
              {review.rating && (
                <div style={{fontSize:13}}>
                  {'⭐'.repeat(review.rating)}<span style={{color:'var(--ink-4)'}}>{'☆'.repeat(5 - review.rating)}</span>
                </div>
              )}
            </div>
            {review.reviewer_alias && (
              <div style={{fontSize:11, color:'var(--ink-2)', marginBottom:6}}>
                <strong>评价人名:</strong> {review.reviewer_alias}
              </div>
            )}
            {review.review_date && (
              <div style={{fontSize:11, color:'var(--ink-2)', marginBottom:6}}>
                <strong>评价日期:</strong> {review.review_date}
              </div>
            )}
            {review.review_text && (
              <div style={{marginBottom:8}}>
                <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:3}}>📝 评价内容:</div>
                <div style={{padding:8, background:'white', borderRadius:5, fontSize:12, whiteSpace:'pre-wrap', lineHeight:1.5}}>{review.review_text}</div>
              </div>
            )}
            {review.work_notes && (
              <div style={{marginBottom:8}}>
                <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:3}}>📋 工作详情:</div>
                <div style={{padding:8, background:'white', borderRadius:5, fontSize:12, whiteSpace:'pre-wrap', lineHeight:1.5, color:'var(--ink-2)'}}>{review.work_notes}</div>
              </div>
            )}
            {attachments.length > 0 && (
              <div>
                <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginBottom:5}}>📎 截图附件 ({attachments.length})</div>
                <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(110px, 1fr))', gap:5}}>
                  {attachments.map(a => {
                    const info = getFileTypeInfo(a);
                    return info.kind === 'image' ? (
                      <img key={a.id} src={a.url} onClick={() => setPreviewFile(a)}
                        style={{width:'100%', height:80, objectFit:'cover', borderRadius:5, cursor:'pointer', border:'1px solid var(--line)'}} />
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

// ============================================================
// 🆕 fix11: 评价任务 + AI 生成 全屏面板 (合二为一)
// 🚀 fix11-hotfix3: 性能优化 — iframe 持久挂载 + 稳定 URL + postMessage 传任务上下文
//    1. iframe 在 ReviewsModule mount 时就开始后台加载
//    2. URL 只含 cs_user_* (不随任务变),首次加载后不再 reload
//    3. 任务信息通过 postMessage 推过去 (美工 v22-CQ+ 可以监听 message 事件自动填表)
//    4. 关闭面板时只 display:none,iframe 状态全保留,再开瞬间显示
// ============================================================
const ReviewAiPanel = ({ visible, review, user, onClose, onComplete }) => {
  const isAdhoc = !!review?._adhoc;
  const hasTask = !!review && !isAdhoc;
  const iframeRef = useRef(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // 🚀 稳定 URL — 只含用户信息,不带任务参数,所以永不重新加载
  const iframeSrc = useMemo(() => {
    const params = new URLSearchParams();
    params.set('embed', 'cs-reviews');
    params.set('cs_user_id', user.id || 'cs_unknown');
    params.set('cs_user_name', (user.name || '客服') + (user.alias ? ' ' + user.alias : ''));
    params.set('cs_user_alias', user.alias || '');
    return `https://dekorfine.github.io/worktrack-kpi/?${params.toString()}`;
  }, [user.id, user.name, user.alias]);

  // 🚀 任务上下文 → postMessage 推给美工 iframe
  // 美工 v22-CQ+ 可监听 message 事件,type='cs-task-context' 时自动填表
  // 如果美工还没实现监听器也无害 — 用户能从面板头部看到任务信息,手动复制即可
  useEffect(() => {
    if (!visible || !hasTask || !iframeLoaded) return;
    const payload = {
      type: 'cs-task-context',
      task: {
        id: review.id,
        product_url: review.product_url || '',
        product_name: review.product_name || '',
        site: review.site || '',
        platform: review.platform || '',
        priority: review.priority || '',
        target_count: review.target_count || null,
        notes: review.notes || '',
      },
    };
    // 多发几次,iframe 内部可能还在路由 / 初始化
    let attempts = 0;
    const send = () => {
      try {
        iframeRef.current?.contentWindow?.postMessage(payload, 'https://dekorfine.github.io');
      } catch {}
      attempts++;
    };
    send();
    const intervalId = setInterval(() => {
      send();
      if (attempts >= 5) clearInterval(intervalId);
    }, 500);
    return () => clearInterval(intervalId);
  }, [visible, hasTask, iframeLoaded, review?.id]);

  // Esc 关闭 (只在可见时绑定)
  useEffect(() => {
    if (!visible) return;
    const onEsc = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [visible, onClose]);

  const copy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      window.dispatchEvent(new CustomEvent('show-toast', { detail: `✓ 已复制 ${label || ''}` }));
    } catch {}
  };

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed', inset: 0, background: '#fafaf7', zIndex: 99998,
      display: visible ? 'flex' : 'none',
      flexDirection: 'column',
    }}>
      {/* 头部 - 只在可见时渲染(review 可能是 null 的预加载状态) */}
      {visible && review && (
        <div style={{
          padding: '10px 16px', background: 'white',
          borderBottom: '1px solid var(--line)',
          display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
          boxShadow: '0 1px 3px rgba(0,0,0,.04)',
          flexShrink: 0,
        }}>
          <div style={{display: 'flex', flexDirection: 'column', flex: 1, minWidth: 200}}>
            <div style={{display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 3}}>
              <span style={{padding: '2px 8px', background: '#f3e8ff', color: '#7c3aed', borderRadius: 10, fontSize: 10, fontWeight: 700}}>🤖 AI 评价生成</span>
              {isAdhoc ? (
                <span style={{padding: '2px 8px', background: '#f5f5f7', color: 'var(--ink-3)', borderRadius: 10, fontSize: 10, fontWeight: 600}}>✨ 临时使用 · 不绑定任务</span>
              ) : (
                <>
                  <span style={{padding: '2px 8px', background: '#dbeafe', color: '#1e40af', borderRadius: 10, fontSize: 10, fontWeight: 600}}>👤 我接的任务</span>
                  {review.site && <span style={{padding: '2px 8px', background: '#f5f5f7', color: 'var(--ink-3)', borderRadius: 10, fontSize: 10, fontWeight: 600}}>{review.site}</span>}
                  {review.priority === 'high' && <span style={{padding: '2px 8px', background: '#fee2e2', color: '#dc2626', borderRadius: 10, fontSize: 10, fontWeight: 600}}>🔥 高优先</span>}
                </>
              )}
            </div>
            <div style={{fontSize: 14, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.3, marginBottom: 2}}>
              {isAdhoc ? 'AI 评价生成工具 (临时模式)' : (review.product_name || '(未命名产品)')}
            </div>
            {!isAdhoc && review.product_url && (
              <div style={{fontSize: 10, color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 6}}>
                <a href={review.product_url} target="_blank" rel="noopener noreferrer"
                  style={{color: '#0369a1', textDecoration: 'none', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 460}}>
                  🔗 {review.product_url}
                </a>
                <button onClick={() => copy(review.product_url, '链接')} title="复制链接"
                  style={{padding: '1px 6px', background: '#f5f5f7', border: '1px solid var(--line)', borderRadius: 4, cursor: 'pointer', fontSize: 10, fontFamily: 'inherit', color: 'var(--ink-3)'}}>
                  复制
                </button>
              </div>
            )}
            {isAdhoc && (
              <div style={{fontSize: 10, color: 'var(--ink-3)'}}>
                直接打开美工系统的评价生成工具,不与任何评价任务绑定 — 完成后无需"标记完成"
              </div>
            )}
            {!isAdhoc && review.notes && (
              <div style={{fontSize: 11, color: '#854d0e', marginTop: 4, padding: '4px 8px', background: '#fefce8', borderRadius: 4, border: '1px solid #fde047', maxWidth: 720}}>
                💬 任务备注: {review.notes}
              </div>
            )}
          </div>
          <div style={{display: 'flex', gap: 6, flexShrink: 0}}>
            {!iframeLoaded && (
              <div style={{padding: '6px 10px', background: '#fef3c7', color: '#854d0e', borderRadius: 6, fontSize: 11, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4}}>
                <span className="spinner" style={{display: 'inline-block', width: 10, height: 10, border: '1.5px solid #854d0e', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.7s linear infinite'}}></span>
                工具加载中...
              </div>
            )}
            {!isAdhoc && review.target_count && (
              <div style={{padding: '6px 10px', background: '#f5f5f7', borderRadius: 6, fontSize: 12, color: 'var(--ink-2)', display: 'flex', alignItems: 'center', gap: 4}}>
                <span style={{fontSize: 11, color: 'var(--ink-3)'}}>目标:</span>
                <strong style={{color: 'var(--ink)'}}>{review.target_count} 条</strong>
              </div>
            )}
            {!isAdhoc && (
              <button onClick={onComplete}
                style={{padding: '7px 14px', background: '#16a34a', color: 'white', border: 'none', borderRadius: 6, cursor: 'pointer', fontSize: 12, fontWeight: 600, fontFamily: 'inherit'}}
                title="生成完成后标记任务完成">
                ✅ 已完成评价
              </button>
            )}
            <button onClick={onClose}
              style={{padding: '7px 14px', background: 'white', color: 'var(--ink-2)', border: '1px solid var(--line)', borderRadius: 6, cursor: 'pointer', fontSize: 12, fontWeight: 600, fontFamily: 'inherit'}}
              title="关闭,返回任务列表(Esc) — 工具状态会保留,下次打开瞬间显示">
              ← 返回任务列表
            </button>
          </div>
        </div>
      )}

      {/* iframe 永久挂载 — 即使面板不可见也在后台加载,关闭再开瞬间显示 */}
      <div style={{flex: 1, padding: visible ? '8px' : 0, background: '#fafaf7', minHeight: 0}}>
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          onLoad={() => setIframeLoaded(true)}
          loading="eager"
          style={{
            width: '100%', height: '100%',
            border: 'none', borderRadius: visible ? 10 : 0,
            background: 'white',
            boxShadow: visible ? '0 1px 3px rgba(0,0,0,.06)' : 'none',
            display: 'block',
          }}
          title="AI 评价生成工具"
          allow="clipboard-read; clipboard-write"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads allow-modals allow-popups-to-escape-sandbox"
        />
      </div>
    </div>,
    document.body
  );
};

// 编辑器（发布 + 编辑）
const ReviewEditor = ({ review, user, employees, onClose, onSaved, toast }) => {
  const allSites = useSiteCodes();  // 🆕 fix22 联动 3: 合并 内置 SITES + 自定义网站
  const isEdit = !!review;
  const [productUrl, setProductUrl] = useState(review?.product_url || '');
  const [productName, setProductName] = useState(review?.product_name || '');
  const [site, setSite] = useState(review?.site || '');
  const [platform, setPlatform] = useState(review?.platform || 'Shopify');
  const [priority, setPriority] = useState(review?.priority || 'normal');
  const [notes, setNotes] = useState(review?.notes || '');
  const [assignedTo, setAssignedTo] = useState(review?.assigned_to || '');
  const [batchCount, setBatchCount] = useState(1);  // 一次创建多少个相同任务（每个 = 1 条评价）
  const [saving, setSaving] = useState(false);
  
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  
  // 粘贴 URL 时自动识别产品名 + 网站
  const handleUrlChange = (url) => {
    setProductUrl(url);
    if (url && !productName) setProductName(extractProductNameFromURL(url));
    if (url && !site) setSite(extractSiteFromURL(url));
  };
  
  const handleSubmit = async () => {
    if (!productUrl.trim()) { alert('请填写产品链接'); return; }
    setSaving(true);
    const now = new Date().toISOString();
    const userName = user.name + (user.alias ? ' ' + user.alias : '');
    const assignedEmp = assignedTo ? employees.find(e => e.id === assignedTo) : null;
    
    if (isEdit) {
      // 编辑模式
      const payload = {
        ...review,
        product_url: productUrl.trim(),
        product_name: productName.trim() || null,
        site: site || null,
        platform: platform || null,
        priority,
        notes: notes.trim() || null,
        assigned_to: assignedTo || null,
        assigned_to_name: assignedEmp ? (assignedEmp.name + (assignedEmp.alias ? ' ' + assignedEmp.alias : '')) : null,
        assigned_at: assignedTo && !review.assigned_at ? now : review.assigned_at,
        assigned_by_name: assignedTo && !review.assigned_by_name ? userName : review.assigned_by_name,
        updated_at: now,
      };
      const res = await CLOUD.upsert('product_reviews', payload);
      if (res) { toast('✓ 已更新'); onSaved(); }
      else { alertSaveError('保存产品评价'); }
    } else {
      // 新建（可批量）
      const count = Math.max(1, Math.min(20, parseInt(batchCount) || 1));
      const payloads = [];
      for (let i = 0; i < count; i++) {
        payloads.push({
          product_url: productUrl.trim(),
          product_name: productName.trim() || null,
          site: site || null,
          platform: platform || null,
          priority,
          notes: notes.trim() || null,
          created_by: user.id,
          created_by_name: userName,
          created_at: now,
          assigned_to: assignedTo || null,
          assigned_to_name: assignedEmp ? (assignedEmp.name + (assignedEmp.alias ? ' ' + assignedEmp.alias : '')) : null,
          assigned_at: assignedTo ? now : null,
          assigned_by_name: assignedTo ? userName : null,
          status: 'pending',
          updated_at: now,
        });
      }
      try {
        const { error } = await CLOUD.client.from('product_reviews').insert(payloads);
        if (error) throw error;
        toast(count > 1 ? `✓ 已批量发布 ${count} 个任务` : '✓ 已发布任务');
        onSaved();
      } catch(e) { alert('保存失败: ' + e.message); }
    }
    setSaving(false);
  };
  
  return (
    <div onClick={onClose}
      style={{position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:9999, display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'4vh 20px', overflowY:'auto', overflowX:'hidden'}}>
      <div onClick={e => e.stopPropagation()}
        style={{background:'white', borderRadius:14, maxWidth:600, width:'100%', display:'flex', flexDirection:'column', maxHeight:'92vh', overflowY:'auto', overflowX:'hidden'}}>
        <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div className="font-display" style={{fontSize:16, fontWeight:600}}>
            ⭐ {isEdit ? '编辑' : '发布'}评价任务
          </div>
          <button className="btn-sec" onClick={onClose} style={{padding:'4px 12px'}}>×</button>
        </div>
        
        <div style={{padding:18, overflow:'auto', flex:1}}>
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>产品链接 *</label>
            <input value={productUrl} onChange={e => handleUrlChange(e.target.value)} autoFocus
              placeholder="https://vakkerlight.com/products/eleanor-beam-pendant-lamp"
              style={{width:'100%', padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'monospace'}} />
            <div style={{fontSize:10, color:'var(--ink-3)', marginTop:3}}>💡 粘贴产品 URL 会自动识别产品名和网站</div>
          </div>
          
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:12}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>产品名</label>
              <input value={productName} onChange={e => setProductName(e.target.value)}
                placeholder="自动识别 / 手动输入"
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>网站</label>
              <select value={site} onChange={e => setSite(e.target.value)}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
                <option value="">(选填)</option>
                {allSites.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
          
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10, marginBottom:12}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>评价平台</label>
              <select value={platform} onChange={e => setPlatform(e.target.value)}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
                {REVIEW_PLATFORMS.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>优先级</label>
              <select value={priority} onChange={e => setPriority(e.target.value)}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
                {REVIEW_PRIORITIES.map(p => <option key={p.key} value={p.key}>{p.label}</option>)}
              </select>
            </div>
            {!isEdit && (
              <div>
                <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>需要几条评价</label>
                <input type="number" min={1} max={20} value={batchCount} onChange={e => setBatchCount(e.target.value)}
                  style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
              </div>
            )}
          </div>
          
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>
              指派给（选填,默认所有人可领取）
              {isAdmin ? '' : ' · ⭐ 仅主管可指定他人'}
            </label>
            <select value={assignedTo} onChange={e => setAssignedTo(e.target.value)} disabled={!isAdmin && !isEdit}
              style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
              <option value="">不指定（所有人可领）</option>
              {employees.filter(em => !em.hideFromList || em.id === user.id).map(em => (
                <option key={em.id} value={em.id}>{em.name}{em.alias ? ' ' + em.alias : ''}</option>
              ))}
            </select>
          </div>
          
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>任务说明 / 评价方向（选填）</label>
            <textarea value={notes} onChange={e => setNotes(e.target.value)}
              placeholder="例如:&#10;- 评价方向:质量好、安装方便&#10;- 评价时间:5/25 之前完成&#10;- 注意事项:用不同 IP, 用不同账号"
              style={{width:'100%', minHeight:80, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical', lineHeight:1.5}} />
          </div>
        </div>
        
        <div style={{padding:'12px 18px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', gap:8}}>
          <div style={{fontSize:10, color:'var(--ink-3)'}}>
            {!isEdit && batchCount > 1 && <>💡 将创建 <strong>{batchCount}</strong> 个独立任务</>}
          </div>
          <div style={{display:'flex', gap:6}}>
            <button onClick={onClose} className="btn-sec" style={{padding:'7px 14px'}}>取消</button>
            <button onClick={handleSubmit} disabled={saving}
              style={{padding:'7px 18px', background:'var(--accent)', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13, opacity: saving ? 0.5 : 1}}>
              {saving ? '保存中...' : (isEdit ? '保存修改' : `📢 ${batchCount > 1 ? '批量' : ''}发布${batchCount > 1 ? ' (' + batchCount + ' 个)' : ''}`)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// 完成 modal
const ReviewCompleteModal = ({ review, user, onClose, onSaved, toast }) => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);
  const [reviewerAlias, setReviewerAlias] = useState('');
  const [reviewDate, setReviewDate] = useState(new Date().toISOString().slice(0, 10));
  const [workNotes, setWorkNotes] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [saving, setSaving] = useState(false);
  
  const handleSubmit = async () => {
    if (!workNotes.trim() && attachments.length === 0 && !reviewText.trim()) {
      if (!confirm('没填写任何工作详情或上传截图,确定标记完成吗?')) return;
    }
    setSaving(true);
    const now = new Date().toISOString();
    const userName = user.name + (user.alias ? ' ' + user.alias : '');
    const payload = {
      ...review,
      status: 'completed',
      completed_at: now,
      completed_by: user.id,
      completed_by_name: userName,
      work_notes: workNotes.trim() || null,
      review_text: reviewText.trim() || null,
      rating: rating || null,
      reviewer_alias: reviewerAlias.trim() || null,
      review_date: reviewDate || null,
      attachments,
      updated_at: now,
    };
    const res = await CLOUD.upsert('product_reviews', payload);
    if (res) { toast('✅ 任务已完成！'); onSaved(); }
    else { alertSaveError('完成产品评价'); }
    setSaving(false);
  };
  
  return (
    <div onClick={onClose}
      style={{position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:9999, display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'4vh 20px', overflowY:'auto', overflowX:'hidden'}}>
      <div onClick={e => e.stopPropagation()}
        style={{background:'white', borderRadius:14, maxWidth:640, width:'100%', display:'flex', flexDirection:'column', maxHeight:'92vh', overflowY:'auto', overflowX:'hidden'}}>
        <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>
            <div className="font-display" style={{fontSize:16, fontWeight:600, color:'#16a34a'}}>✅ 标记完成</div>
            <div style={{fontSize:11, color:'var(--ink-3)', marginTop:2}}>{review.product_name || review.product_url.slice(0, 60)}</div>
          </div>
          <button className="btn-sec" onClick={onClose} style={{padding:'4px 12px'}}>×</button>
        </div>
        
        <div style={{padding:18, overflow:'auto', flex:1}}>
          <div style={{padding:10, background:'#f0fdf4', border:'1px solid #86efac', borderRadius:8, marginBottom:14, fontSize:11, color:'#15803d'}}>
            💡 填写真实的工作细节,主管会查看 · 上传截图证明评价已发出
          </div>
          
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:12}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>评价用名 / 账号</label>
              <input value={reviewerAlias} onChange={e => setReviewerAlias(e.target.value)}
                placeholder="如:Sarah K."
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>评价发布日期</label>
              <input type="date" value={reviewDate} onChange={e => setReviewDate(e.target.value)}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            </div>
          </div>
          
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>评分</label>
            <div style={{display:'flex', gap:4}}>
              {[1,2,3,4,5].map(n => (
                <button key={n} onClick={() => setRating(n)}
                  style={{padding:'5px 12px', background: rating >= n ? '#fef3c7' : 'white', border:'1px solid ' + (rating >= n ? '#fbbf24' : 'var(--line)'), borderRadius:6, cursor:'pointer', fontSize:16, fontFamily:'inherit'}}>
                  {rating >= n ? '⭐' : '☆'}
                </button>
              ))}
              <span style={{padding:'5px 10px', fontSize:12, color:'var(--ink-3)', alignSelf:'center'}}>{rating} 星</span>
            </div>
          </div>
          
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>评价内容（可选,复制粘贴你写的评论）</label>
            <textarea value={reviewText} onChange={e => setReviewText(e.target.value)}
              placeholder="贴一下你写的评论内容..."
              style={{width:'100%', minHeight:80, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical', lineHeight:1.5}} />
          </div>
          
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>工作详情 *</label>
            <textarea value={workNotes} onChange={e => setWorkNotes(e.target.value)}
              placeholder="说明操作细节:&#10;- 时间:今天 14:30&#10;- 用什么账号 / 邮箱&#10;- 用 IP 地区 / 设备&#10;- 遇到的问题等"
              style={{width:'100%', minHeight:100, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical', lineHeight:1.5}} />
          </div>
          
          <div style={{marginBottom:8}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>📷 截图附件（强烈建议上传 · 支持拖拽 + 粘贴）</label>
            <MultiFileUploader files={attachments} setFiles={setAttachments} bucket="briefing-files" maxSize={20} />
          </div>
        </div>
        
        <div style={{padding:'12px 18px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'flex-end', gap:6}}>
          <button onClick={onClose} className="btn-sec" style={{padding:'7px 14px'}}>取消</button>
          <button onClick={handleSubmit} disabled={saving}
            style={{padding:'7px 18px', background:'#16a34a', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13, opacity: saving ? 0.5 : 1}}>
            {saving ? '保存中...' : '✅ 确认完成'}
          </button>
        </div>
      </div>
    </div>
  );
};

// 导出 modal
const ReviewExportModal = ({ reviews, allReviews, user, employees, onClose, toast }) => {
  const [scope, setScope] = useState('filtered');  // filtered / all / completed
  const [format, setFormat] = useState('pdf');     // pdf / csv
  const [includeAttachments, setIncludeAttachments] = useState(true);
  
  const dataToExport = useMemo(() => {
    if (scope === 'filtered') return reviews;
    if (scope === 'completed') return allReviews.filter(r => r.status === 'completed');
    return allReviews;
  }, [scope, reviews, allReviews]);
  
  const exportCSV = () => {
    const headers = ['#', '状态', '优先级', '产品名', '产品链接', '网站', '平台', '发布人', '发布时间', '接单人', '完成人', '完成时间', '评分', '评价人名', '评价日期', '评价内容', '工作详情', '附件数', '任务说明'];
    const rows = dataToExport.map((r, i) => {
      const status = REVIEW_STATUSES.find(s => s.key === r.status)?.label || r.status;
      const prio = REVIEW_PRIORITIES.find(p => p.key === r.priority)?.label || '';
      return [
        i + 1, status, prio,
        r.product_name || '', r.product_url || '',
        r.site || '', r.platform || '',
        r.created_by_name || '', (r.created_at || '').slice(0, 16).replace('T', ' '),
        r.claimed_by_name || '', r.completed_by_name || '',
        (r.completed_at || '').slice(0, 16).replace('T', ' '),
        r.rating || '', r.reviewer_alias || '', r.review_date || '',
        r.review_text || '', r.work_notes || '',
        (r.attachments || []).length, r.notes || '',
      ];
    });
    downloadCSV([headers, ...rows], `产品评价_${todayISO()}.csv`);
    toast('✓ 已导出 ' + dataToExport.length + ' 条');
    onClose();
  };
  
  const exportPDF = () => {
    const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    const rowsHTML = dataToExport.map((r, i) => {
      const status = REVIEW_STATUSES.find(s => s.key === r.status);
      const prio = REVIEW_PRIORITIES.find(p => p.key === r.priority);
      const shots = includeAttachments ? (r.attachments || []).filter(a => getFileTypeInfo(a).kind === 'image').slice(0, 4) : [];
      const shotsHTML = shots.length > 0 
        ? '<div class="shots">' + shots.map(s => '<img src="' + esc(s.url) + '" />').join('') + '</div>'
        : '';
      const fullScreenshots = (r.attachments || []).length;
      return '<tr>' +
        '<td>' + (i + 1) + '</td>' +
        '<td><span class="status">' + esc(status?.label || '') + '</span></td>' +
        '<td>' + esc(prio?.label || '') + '</td>' +
        '<td><strong>' + esc(r.product_name || '') + '</strong><br><a href="' + esc(r.product_url) + '" style="font-size:9px;color:#0369a1;word-break:break-all;">' + esc(r.product_url) + '</a></td>' +
        '<td>' + esc(r.site || '') + (r.platform ? '<br><small>' + esc(r.platform) + '</small>' : '') + '</td>' +
        '<td>' + esc(r.created_by_name || '') + '<br><small>' + esc((r.created_at || '').slice(5, 16).replace('T', ' ')) + '</small></td>' +
        '<td>' + esc(r.completed_by_name || '-') + (r.completed_at ? '<br><small>' + esc(r.completed_at.slice(5, 16).replace('T', ' ')) + '</small>' : '') + '</td>' +
        '<td>' + (r.rating ? '⭐'.repeat(r.rating) : '-') + (r.reviewer_alias ? '<br><small>' + esc(r.reviewer_alias) + '</small>' : '') + '</td>' +
        '<td>' + esc(r.work_notes || '') + (r.review_text ? '<br><em>"' + esc(r.review_text) + '"</em>' : '') + '</td>' +
        '<td>' + shotsHTML + (fullScreenshots > shots.length ? '<small>+' + (fullScreenshots - shots.length) + ' 张</small>' : '') + '</td>' +
      '</tr>';
    }).join('');
    
    const html = '<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><title>产品评价任务报表</title>' +
      '<link rel="preconnect" href="https://fonts.googleapis.com">' +
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
      '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600;700&display=swap" rel="stylesheet">' +
      '<style>' +
        'body { font-family: "Noto Sans SC", -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif; padding:20px; font-size:11px; -webkit-print-color-adjust: exact; print-color-adjust: exact; }' +
        'h1 { font-size:20px; margin:0 0 4px; }' +
        '.meta { color:#86868b; font-size:11px; margin-bottom:12px; }' +
        'table { width:100%; border-collapse: collapse; }' +
        'th, td { border:1px solid #d2d2d7; padding:6px 8px; text-align:left; vertical-align:top; font-size:11px; }' +
        'th { background:#f5f5f7; font-weight:600; }' +
        '.status { padding:1px 6px; border-radius:8px; background:#e0f2fe; color:#075985; font-size:10px; font-weight:600; }' +
        '.shots { display:flex; gap:3px; flex-wrap:wrap; }' +
        '.shots img { width:60px; height:50px; object-fit:cover; border:1px solid #d2d2d7; border-radius:3px; }' +
        '.toolbar { position:fixed; top:12px; right:12px; display:flex; gap:8px; z-index:100; }' +
        '.toolbar button { padding:8px 16px; border-radius:6px; cursor:pointer; font-size:13px; border:none; font-family:inherit; }' +
        '@page { size: A3 landscape; margin: 8mm; }' +
        '@media print { .no-print { display:none; } }' +
      '</style></head><body>' +
      '<div class="toolbar no-print">' +
        '<button onclick="window.print()" style="background:#0071e3;color:white;">🖨 保存为 PDF</button>' +
        '<button onclick="window.close()" style="background:white;border:1px solid #d2d2d7;">✕ 关闭</button>' +
      '</div>' +
      '<h1>⭐ 产品评价任务报表</h1>' +
      '<div class="meta">共 <strong>' + dataToExport.length + '</strong> 条 · 导出时间: ' + new Date().toLocaleString('zh-CN') + ' · 导出人: ' + esc((user.name || '') + (user.alias ? ' ' + user.alias : '')) + '</div>' +
      '<table><thead><tr>' +
        '<th>#</th><th>状态</th><th>优先级</th><th>产品</th><th>网站</th>' +
        '<th>发布</th><th>完成</th><th>评分</th><th>工作详情</th><th>截图</th>' +
      '</tr></thead><tbody>' + rowsHTML + '</tbody></table>' +
      '<script>window.addEventListener("load", function() { setTimeout(function() { var imgs = Array.from(document.images); var fr = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve(); Promise.all([fr, Promise.all(imgs.map(function(img) { return img.complete ? Promise.resolve() : new Promise(function(res) { img.onload = img.onerror = res; }); }))]).then(function() { setTimeout(function() { window.print(); }, 300); }); }, 100); });</' + 'script>' +
      '</body></html>';
    
    const w = window.open('', '_blank', 'width=1200,height=800');
    if (!w) { alert('请允许浏览器弹窗'); return; }
    w.document.write(html);
    w.document.close();
    toast('✓ 已生成 ' + dataToExport.length + ' 条 PDF');
    onClose();
  };
  
  return (
    <div onClick={onClose}
      style={{position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center', padding:20}}>
      <div onClick={e => e.stopPropagation()}
        style={{background:'white', borderRadius:14, maxWidth:500, width:'100%', padding:22}}>
        <div className="font-display" style={{fontSize:17, fontWeight:600, marginBottom:14}}>📊 导出产品评价任务</div>
        
        <div style={{marginBottom:14}}>
          <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:6}}>导出范围</label>
          <div style={{display:'flex', flexDirection:'column', gap:6}}>
            <label style={{display:'flex', alignItems:'center', gap:8, padding:8, border:'1px solid ' + (scope === 'filtered' ? 'var(--accent)' : 'var(--line)'), borderRadius:6, cursor:'pointer', background: scope === 'filtered' ? '#f0f9ff' : 'white'}}>
              <input type="radio" checked={scope === 'filtered'} onChange={() => setScope('filtered')} />
              <span style={{fontSize:13}}>当前筛选 ({reviews.length} 条)</span>
            </label>
            <label style={{display:'flex', alignItems:'center', gap:8, padding:8, border:'1px solid ' + (scope === 'completed' ? 'var(--accent)' : 'var(--line)'), borderRadius:6, cursor:'pointer', background: scope === 'completed' ? '#f0fdf4' : 'white'}}>
              <input type="radio" checked={scope === 'completed'} onChange={() => setScope('completed')} />
              <span style={{fontSize:13}}>仅已完成任务 ({allReviews.filter(r => r.status === 'completed').length} 条)</span>
            </label>
            <label style={{display:'flex', alignItems:'center', gap:8, padding:8, border:'1px solid ' + (scope === 'all' ? 'var(--accent)' : 'var(--line)'), borderRadius:6, cursor:'pointer', background: scope === 'all' ? '#fafafa' : 'white'}}>
              <input type="radio" checked={scope === 'all'} onChange={() => setScope('all')} />
              <span style={{fontSize:13}}>全部任务 ({allReviews.length} 条)</span>
            </label>
          </div>
        </div>
        
        <div style={{marginBottom:14}}>
          <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:6}}>导出格式</label>
          <div style={{display:'flex', gap:6}}>
            <button onClick={() => setFormat('pdf')}
              style={{flex:1, padding:'10px', background: format === 'pdf' ? '#dc2626' : 'white', color: format === 'pdf' ? 'white' : 'var(--ink-2)', border:'1px solid ' + (format === 'pdf' ? '#dc2626' : 'var(--line)'), borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13}}>
              📄 PDF（含截图）
            </button>
            <button onClick={() => setFormat('csv')}
              style={{flex:1, padding:'10px', background: format === 'csv' ? '#16a34a' : 'white', color: format === 'csv' ? 'white' : 'var(--ink-2)', border:'1px solid ' + (format === 'csv' ? '#16a34a' : 'var(--line)'), borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13}}>
              📊 CSV（Excel）
            </button>
          </div>
        </div>
        
        {format === 'pdf' && (
          <label style={{display:'flex', alignItems:'center', gap:6, padding:8, background:'#fef9c3', borderRadius:6, fontSize:12, cursor:'pointer', marginBottom:14}}>
            <input type="checkbox" checked={includeAttachments} onChange={e => setIncludeAttachments(e.target.checked)} />
            包含截图缩略图（每条最多 4 张）
          </label>
        )}
        
        <div style={{display:'flex', gap:8, justifyContent:'flex-end'}}>
          <button onClick={onClose} className="btn-sec" style={{padding:'8px 16px'}}>取消</button>
          <button onClick={format === 'pdf' ? exportPDF : exportCSV}
            style={{padding:'8px 20px', background:'var(--accent)', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13}}>
            导出 {dataToExport.length} 条
          </button>
        </div>
      </div>
    </div>
  );
};
