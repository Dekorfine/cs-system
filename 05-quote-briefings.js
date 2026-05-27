// ════════════════════════════════════════════════════════════════════
// 📝 报价单 + 📢 会议纪要 · fix28-55
// APP_VERSION: 2026.05.27-fix55
// ════════════════════════════════════════════════════════════════════


const QuoteModule = ({ user, toast }) => {
  const userParam = encodeURIComponent((user.name || '') + (user.alias ? ' ' + user.alias : ''));
  const sameDirUrl = `quotation.html#user=${userParam}`;
  const [openExternal, setOpenExternal] = useState(false);
  const iframeRef = React.useRef(null);
  const [iframeHeight, setIframeHeight] = useState('calc(100vh - 100px)');

  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === 'iframe-resize' && e.data?.source === 'quotation') {
        // 🆕 fix29 (参考 KB fix8): 不再撑大 iframe 到内容高度!
        // 原因 — 跟 KB 一样的问题:
        //   • iframe 内容高度 ~3000px,撑大后 workspace 主页面也变巨高,出现"无限下滑"
        //   • position:fixed 的 modal(❓ 使用说明)会铆在 iframe 顶部,用户向下滚后看不到
        //   • 用户感受到的"自动下滑"其实是 iframe 撑大后页面太长导致的副作用
        // 正确做法:保持 iframe = viewport-bound (calc(100vh - 100px)),iframe 自己有滚动条
        // setIframeHeight(Math.max(600, e.data.height + 20) + 'px');  ← 已禁用 (撑大破坏 modal + 无限下滑)
      }
      // 🆕 fix29: 移除 iframe-modal-open 的 scrollIntoView (这是真正的"自动下滑"罪魁)
      // 旧逻辑会让父页面平滑滚到 iframe 顶,改成不做任何事
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <div className="fade-in" style={{margin:'-20px -24px -20px'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 24px', background:'var(--bg-elevated)', borderBottom:'1px solid var(--line)'}}>
        <div style={{fontSize:13, color:'var(--ink-3)'}}>
          <strong style={{color:'var(--ink)'}}>📄 报价单</strong>
          <span style={{marginLeft:8}}>· 12 家公司预设 · 7 种语言 · 4 种文档 · 数据云同步</span>
        </div>
        <div style={{display:'flex', gap:8}}>
          <button className="btn-sec" onClick={() => iframeRef.current?.contentWindow?.location?.reload()} title="刷新">🔄</button>
          <a href={sameDirUrl} target="_blank" rel="noopener" className="btn-sec" style={{textDecoration:'none'}}>↗ 新窗口打开</a>
        </div>
      </div>
      <iframe
        ref={iframeRef}
        src={sameDirUrl}
        style={{width:'100%', height:iframeHeight, border:'none', background:'#fff', display:'block', transition:'height .15s', minHeight:600}}
        title="报价单"
        allow="clipboard-read; clipboard-write"
      />
      {/* 🆕 fix31: 移除 scrolling="no" — 之前禁用了 iframe 内部滚动,导致用户看不到下面的 PDF 预览区
                   现在跟 KB iframe 一样,允许 iframe 自己有滚动条,内容超长就在 iframe 内滚 */}
    </div>
  );
};

// ============================================================
// 🆕 EventsModule - 工作主线管理中心（售后/补件/退款汇总 + 导出）
// ============================================================
// ============================================================
// 📢 BriefingCard - 员工首页展示本周会议要点卡片
// ============================================================
const BriefingCard = ({ user, toast }) => {
  const [briefing, setBriefing] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [previewFile, setPreviewFile] = useState(null);
  
  // 加载最新已发布的会议纪要（置顶优先 + 最新）
  const loadLatest = async () => {
    if (!CLOUD.client) { setLoading(false); return; }
    try {
      const { data, error } = await CLOUD.client
        .from('weekly_briefings')
        .select('*')
        .eq('published', true)
        .order('pinned', { ascending: false })
        .order('created_at', { ascending: false })
        .limit(1);
      if (!error && data && data.length > 0) setBriefing(data[0]);
    } catch(e) { console.warn('加载会议要点失败', e); }
    setLoading(false);
  };
  useEffect(() => { loadLatest(); }, []);
  
  // 标记已读
  const markRead = async () => {
    if (!briefing) return;
    const readBy = { ...(briefing.read_by || {}), [user.id]: new Date().toISOString() };
    try {
      await CLOUD.client.from('weekly_briefings').update({ read_by: readBy }).eq('id', briefing.id);
      setBriefing({ ...briefing, read_by: readBy });
    } catch(e) { console.warn('标记已读失败', e); }
  };
  
  if (loading) return null;
  if (!briefing) return null;  // 没有发布的纪要就不显示
  
  const isRead = briefing.read_by && briefing.read_by[user.id];
  const highlights = briefing.highlights || [];
  const workPlans = briefing.work_plans || [];
  const attachments = briefing.attachments || [];
  const myPlans = workPlans.filter(p => p.assignee_id === user.id);
  const otherPlans = workPlans.filter(p => p.assignee_id !== user.id);
  
  // 计算几天前发布
  const daysAgo = briefing.published_at ? Math.floor((Date.now() - new Date(briefing.published_at).getTime()) / 86400000) : null;
  
  return (
    <div className="paper rounded-2xl fade-in" style={{
      overflow:'hidden',
      background: briefing.pinned ? 'linear-gradient(135deg, #fef9c3 0%, #fef3c7 100%)' : 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
      border: '1.5px solid ' + (briefing.pinned ? '#fbbf24' : '#7dd3fc'),
    }}>
      {/* 头部 */}
      <div style={{padding:'14px 18px', cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center', gap:10, flexWrap:'wrap'}}
        onClick={() => setExpanded(v => !v)}>
        <div style={{display:'flex', alignItems:'center', gap:10, flex:1, minWidth:0}}>
          <div style={{fontSize:28, flexShrink:0}}>{briefing.pinned ? '📌' : '📢'}</div>
          <div style={{flex:1, minWidth:0}}>
            <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
              <span style={{fontSize:14, fontWeight:600, color: briefing.pinned ? '#854d0e' : '#075985'}}>{briefing.week_label}</span>
              {!isRead && (
                <span style={{padding:'1px 6px', background:'#dc2626', color:'white', borderRadius:8, fontSize:10, fontWeight:600}}>未读</span>
              )}
              {myPlans.length > 0 && (
                <span style={{padding:'1px 6px', background:'#dc2626', color:'white', borderRadius:8, fontSize:10, fontWeight:600}}>
                  我有 {myPlans.length} 项任务
                </span>
              )}
              {daysAgo !== null && (
                <span style={{fontSize:10, color: briefing.pinned ? '#a16207' : '#0369a1'}}>
                  {daysAgo === 0 ? '今天' : daysAgo === 1 ? '昨天' : `${daysAgo} 天前`}发布
                </span>
              )}
            </div>
            <div style={{fontSize:15, fontWeight:700, color: briefing.pinned ? '#7c2d12' : '#0c4a6e', marginTop:3, lineHeight:1.3, overflow:'hidden', textOverflow:'ellipsis', whiteSpace: expanded ? 'normal' : 'nowrap'}}>
              {briefing.title}
            </div>
          </div>
        </div>
        <button style={{padding:'5px 12px', background: briefing.pinned ? '#fbbf24' : '#0369a1', color: briefing.pinned ? '#7c2d12' : 'white', border:'none', borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}>
          {expanded ? '▲ 收起' : '▼ 查看详情'}
        </button>
      </div>
      
      {/* 展开内容 */}
      {expanded && (
        <div style={{padding:'0 18px 18px', borderTop:'1px solid ' + (briefing.pinned ? '#fcd34d' : '#bae6fd')}}>
          {/* 我的任务（高亮显示） */}
          {myPlans.length > 0 && (
            <div style={{marginTop:14, padding:12, background:'rgba(220,38,38,.06)', border:'1px solid #fca5a5', borderRadius:8}}>
              <div style={{fontSize:12, fontWeight:600, color:'#991b1b', marginBottom:8, display:'flex', alignItems:'center', gap:6}}>
                🎯 我的工作任务（{myPlans.length}）
              </div>
              {myPlans.map(p => (
                <div key={p.id} style={{padding:'6px 0', borderBottom:'1px dashed #fca5a5', fontSize:13, color:'#7f1d1d', display:'flex', alignItems:'flex-start', gap:8}}>
                  <span style={{flexShrink:0, marginTop:2}}>{p.done ? '✅' : '⬜'}</span>
                  <div style={{flex:1}}>
                    {p.text}
                    {p.deadline && <span style={{marginLeft:6, fontSize:11, color:'#dc2626', fontWeight:600}}>· 截止 {p.deadline}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* 重点要点 */}
          {highlights.length > 0 && (
            <div style={{marginTop:14}}>
              <div style={{fontSize:12, fontWeight:600, color: briefing.pinned ? '#7c2d12' : '#0c4a6e', marginBottom:6}}>⭐ 本周重点</div>
              <div style={{display:'flex', flexDirection:'column', gap:5}}>
                {highlights.map((h, i) => (
                  <div key={h.id || i} style={{padding:'7px 10px', background:'white', borderRadius:6, fontSize:13, color:'var(--ink)', display:'flex', alignItems:'flex-start', gap:8, borderLeft:'3px solid ' + (h.priority === 'high' ? '#dc2626' : briefing.pinned ? '#fbbf24' : '#0369a1')}}>
                    <span style={{flexShrink:0, fontWeight:600, color: h.priority === 'high' ? '#dc2626' : 'var(--ink-3)'}}>
                      {h.priority === 'high' ? '🔥' : '•'}
                    </span>
                    <div style={{flex:1}}>
                      {h.tag && <span style={{padding:'1px 6px', background: briefing.pinned ? '#fef3c7' : '#e0f2fe', color: briefing.pinned ? '#854d0e' : '#075985', borderRadius:4, fontSize:10, fontWeight:600, marginRight:6}}>{h.tag}</span>}
                      {h.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* 其他人的工作计划（仅 admin 看完整版，员工看一个概览） */}
          {otherPlans.length > 0 && (
            <div style={{marginTop:14}}>
              <div style={{fontSize:12, fontWeight:600, color: briefing.pinned ? '#7c2d12' : '#0c4a6e', marginBottom:6}}>📋 团队工作分配（{otherPlans.length}）</div>
              <div style={{display:'flex', flexDirection:'column', gap:4}}>
                {otherPlans.map(p => (
                  <div key={p.id} style={{padding:'5px 10px', background:'rgba(255,255,255,.6)', borderRadius:5, fontSize:12, color:'var(--ink-2)', display:'flex', alignItems:'flex-start', gap:8}}>
                    <span style={{flexShrink:0, marginTop:1}}>{p.done ? '✅' : '⬜'}</span>
                    <span style={{padding:'1px 6px', background: briefing.pinned ? '#fef3c7' : '#e0f2fe', color: briefing.pinned ? '#854d0e' : '#075985', borderRadius:4, fontSize:10, fontWeight:600, flexShrink:0}}>{p.assignee_name || '未分配'}</span>
                    <div style={{flex:1}}>
                      {p.text}
                      {p.deadline && <span style={{marginLeft:6, fontSize:10, color:'var(--ink-3)'}}>· {p.deadline}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* 详细内容正文 */}
          {briefing.content && (
            <div style={{marginTop:14}}>
              <div style={{fontSize:12, fontWeight:600, color: briefing.pinned ? '#7c2d12' : '#0c4a6e', marginBottom:6}}>📝 会议详情</div>
              <div style={{padding:'10px 12px', background:'white', borderRadius:6, fontSize:13, color:'var(--ink-2)', whiteSpace:'pre-wrap', lineHeight:1.6}}>
                {briefing.content}
              </div>
            </div>
          )}
          
          {/* 附件 - 支持多种格式预览 */}
          {attachments.length > 0 && (
            <div style={{marginTop:14}}>
              <div style={{fontSize:12, fontWeight:600, color: briefing.pinned ? '#7c2d12' : '#0c4a6e', marginBottom:6}}>📎 附件 ({attachments.length})</div>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:6}}>
                {attachments.map((a, i) => (
                  <FileChip key={a.id || i} file={a} onClick={() => setPreviewFile(a)} />
                ))}
              </div>
            </div>
          )}
          
          {/* 底部信息 + 操作 */}
          <div style={{marginTop:14, paddingTop:10, borderTop:'1px dashed ' + (briefing.pinned ? '#fcd34d' : '#bae6fd'), display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:6}}>
            <div style={{fontSize:10, color: briefing.pinned ? '#a16207' : '#0369a1'}}>
              发布人：{briefing.created_by_name} · {(briefing.published_at || briefing.created_at || '').slice(0,16).replace('T', ' ')}
              {briefing.read_by && Object.keys(briefing.read_by).length > 0 && (
                <span style={{marginLeft:8}}>· 已读 {Object.keys(briefing.read_by).length} 人</span>
              )}
            </div>
            {!isRead && (
              <button onClick={markRead}
                style={{padding:'4px 12px', background:'white', color: briefing.pinned ? '#854d0e' : '#0369a1', border:'1px solid ' + (briefing.pinned ? '#fcd34d' : '#7dd3fc'), borderRadius:6, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
                ✓ 标记已读
              </button>
            )}
          </div>
        </div>
      )}
      
      {/* 文件预览 (支持 PDF/PPT/Excel/图片/视频等) */}
      {previewFile && <FilePreviewModal file={previewFile} onClose={() => setPreviewFile(null)} />}
    </div>
  );
};

// ============================================================
// 📢 BriefingsModule - 主管管理会议要点 + 员工查看历史
// ============================================================
const BriefingsModule = ({ user, employees, toast, cloudOn }) => {
  const [briefings, setBriefings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);  // briefing 对象或 'new'
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  
  const loadAll = async () => {
    setLoading(true);
    try {
      const list = await CLOUD.list('weekly_briefings', { order:{col:'created_at', asc:false}, limit:200 });
      // admin 看全部，员工只看已发布
      const visible = isAdmin ? (list || []) : (list || []).filter(b => b.published);
      setBriefings(visible);
    } catch(e) { toast('❌ 加载失败：' + e.message); }
    setLoading(false);
  };
  useEffect(() => { loadAll(); }, []);
  
  const handleDelete = async (id) => {
    if (!confirm('确认删除此会议纪要？')) return;
    const ok = await CLOUD.del('weekly_briefings', id);
    if (ok) { toast('✓ 已删除'); loadAll(); }
  };
  
  const togglePinned = async (b) => {
    const res = await CLOUD.upsert('weekly_briefings', { ...b, pinned: !b.pinned });
    if (res) { toast(b.pinned ? '✓ 已取消置顶' : '✓ 已置顶'); loadAll(); }
  };
  
  const togglePublished = async (b) => {
    const now = new Date().toISOString();
    const updates = { ...b, published: !b.published };
    if (!b.published) updates.published_at = b.published_at || now;
    const res = await CLOUD.upsert('weekly_briefings', updates);
    if (res) { toast(b.published ? '✓ 已撤回（员工看不到了）' : '✓ 已发布（所有员工首页可见）'); loadAll(); }
  };
  
  // 🆕 fix9b: 主管快捷标记会议纪要为"已处理"
  const toggleHandled = async (b) => {
    const now = new Date().toISOString();
    const userName = user.name + (user.alias ? ' ' + user.alias : '');
    const updates = b.handled_at
      ? { ...b, handled_at: null, handled_by: null, handled_by_name: null }
      : { ...b, handled_at: now, handled_by: user.id, handled_by_name: userName };
    const res = await CLOUD.upsert('weekly_briefings', updates);
    if (res) { toast(b.handled_at ? '↩ 已撤销「已处理」' : '✓ 已标记处理完毕'); loadAll(); }
    else alertSaveError('标记会议纪要');
  };
  
  if (loading) return <div style={{padding:40, textAlign:'center'}}>⏳ 加载中...</div>;
  
  return (
    <div className="space-y-4">
      <div className="paper rounded-2xl p-4 fade-in">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:10}}>
          <div>
            <div className="font-display" style={{fontSize:17, fontWeight:600, color:'var(--ink)'}}>📢 会议纪要 / 工作计划</div>
            <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>
              {isAdmin 
                ? `共 ${briefings.length} 条 · 已发布 ${briefings.filter(b => b.published).length} 条 · 主管可创建/编辑/发布`
                : `共 ${briefings.length} 条已发布纪要 · 点击查看完整内容`}
            </div>
          </div>
          <div style={{display:'flex', gap:6}}>
            <button onClick={loadAll} className="btn-sec" style={{padding:'6px 12px', fontSize:12}}>🔄 刷新</button>
            {isAdmin && (
              <button onClick={() => setEditing('new')} className="btn-pri" style={{padding:'6px 14px', fontSize:12}}>+ 新建会议要点</button>
            )}
          </div>
        </div>
      </div>
      
      {briefings.length === 0 ? (
        <div className="paper rounded-2xl p-12 fade-in" style={{textAlign:'center', color:'var(--ink-3)'}}>
          📋 暂无会议纪要{isAdmin && ' · 点右上角"新建会议要点"开始'}
        </div>
      ) : (
        <div className="space-y-3">
          {briefings.map(b => (
            <BriefingItem key={b.id} briefing={b} user={user} isAdmin={isAdmin}
              onEdit={() => setEditing(b)}
              onDelete={() => handleDelete(b.id)}
              onTogglePin={() => togglePinned(b)}
              onTogglePub={() => togglePublished(b)}
              onToggleHandled={() => toggleHandled(b)} />
          ))}
        </div>
      )}
      
      {editing && (
        <BriefingEditor briefing={editing === 'new' ? null : editing} user={user} employees={employees}
          onClose={() => setEditing(null)}
          onSaved={() => { setEditing(null); loadAll(); }}
          toast={toast} />
      )}
    </div>
  );
};

// 会议纪要列表项
const BriefingItem = ({ briefing, user, isAdmin, onEdit, onDelete, onTogglePin, onTogglePub, onToggleHandled }) => {
  const [expanded, setExpanded] = useState(false);
  const [itemPreview, setItemPreview] = useState(null);
  const highlights = briefing.highlights || [];
  const workPlans = briefing.work_plans || [];
  const attachments = briefing.attachments || [];
  const myPlans = workPlans.filter(p => p.assignee_id === user.id);
  const isRead = briefing.read_by && briefing.read_by[user.id];
  const isHandled = !!briefing.handled_at;  // 🆕 fix9b
  
  return (
    <div className="paper rounded-2xl fade-in" style={{
      overflow:'hidden',
      border: '1.5px solid ' + (isHandled ? '#86efac' : briefing.pinned ? '#fbbf24' : briefing.published ? '#7dd3fc' : '#e5e5e5'),
      background: isHandled ? '#f0fdf4' : briefing.pinned ? '#fffbeb' : briefing.published ? 'white' : '#fafafa',
      opacity: briefing.published ? (isHandled ? 0.85 : 1) : 0.7,
    }}>
      <div style={{padding:'12px 16px', cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center', gap:10}}
        onClick={() => setExpanded(v => !v)}>
        <div style={{flex:1, minWidth:0}}>
          <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
            {isHandled && <span style={{fontSize:12, padding:'2px 8px', background:'#16a34a', color:'white', borderRadius:10, fontWeight:600}}>✓ 已处理</span>}
            {briefing.pinned && <span style={{fontSize:14}}>📌</span>}
            <span style={{fontSize:13, fontWeight:600, color: briefing.pinned ? '#854d0e' : 'var(--ink)'}}>{briefing.week_label}</span>
            {!briefing.published && <span style={{padding:'1px 6px', background:'#e5e5e5', color:'#666', borderRadius:6, fontSize:10, fontWeight:600}}>草稿</span>}
            {briefing.published && !isRead && <span style={{padding:'1px 6px', background:'#dc2626', color:'white', borderRadius:6, fontSize:10, fontWeight:600}}>未读</span>}
            {myPlans.length > 0 && <span style={{padding:'1px 6px', background:'#fef2f2', color:'#dc2626', borderRadius:6, fontSize:10, fontWeight:600}}>我 {myPlans.length} 项</span>}
          </div>
          <div style={{fontSize:14, fontWeight:600, color:'var(--ink)', marginTop:3, textDecoration: isHandled ? 'line-through' : 'none', opacity: isHandled ? 0.7 : 1}}>{briefing.title}</div>
          <div style={{fontSize:11, color:'var(--ink-3)', marginTop:3}}>
            {briefing.created_by_name} · {(briefing.published_at || briefing.created_at || '').slice(0,10)}
            {' · '}{highlights.length} 要点 · {workPlans.length} 任务 · {attachments.length} 附件
            {briefing.read_by && Object.keys(briefing.read_by).length > 0 && <> · 已读 {Object.keys(briefing.read_by).length} 人</>}
            {isHandled && <> · <span style={{color:'#16a34a', fontWeight:600}}>{briefing.handled_by_name} 已处理于 {briefing.handled_at.slice(0,10)}</span></>}
          </div>
        </div>
        <div style={{display:'flex', gap:4, alignItems:'center', flexShrink:0}} onClick={e => e.stopPropagation()}>
          {isAdmin && (
            <>
              {/* 🆕 fix9b: 快捷标记已处理 — 跟 onTogglePub 一样的 admin-only 工具栏 */}
              <button onClick={onToggleHandled} title={isHandled ? '撤销已处理' : '标记已处理(主管确认这次会议要点都跟进了)'}
                style={{padding:'4px 10px', background: isHandled ? '#dcfce7' : '#16a34a', color: isHandled ? '#15803d' : 'white', border:'1px solid ' + (isHandled ? '#86efac' : '#16a34a'), borderRadius:6, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
                {isHandled ? '↩ 撤销' : '✓ 已处理'}
              </button>
              <button onClick={onTogglePub} title={briefing.published ? '撤回发布' : '发布给员工'}
                style={{padding:'4px 10px', background: briefing.published ? '#dcfce7' : '#0369a1', color: briefing.published ? '#15803d' : 'white', border:'1px solid ' + (briefing.published ? '#86efac' : '#0369a1'), borderRadius:6, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
                {briefing.published ? '✓ 已发布' : '📢 发布'}
              </button>
              <button onClick={onTogglePin} title={briefing.pinned ? '取消置顶' : '置顶'}
                style={{padding:'4px 8px', background:'transparent', border:'none', cursor:'pointer', fontSize:14}}>
                {briefing.pinned ? '📌' : '📍'}
              </button>
              <button onClick={onEdit} className="btn-ghost" style={{padding:'4px 8px', fontSize:11}}>✏️</button>
              <button onClick={onDelete} className="btn-ghost" style={{padding:'4px 8px', fontSize:11, color:'var(--bad)'}}>🗑</button>
            </>
          )}
          <button className="btn-sec" style={{padding:'4px 10px', fontSize:11}}>
            {expanded ? '▲' : '▼'}
          </button>
        </div>
      </div>
      {expanded && (
        <div style={{borderTop:'1px solid var(--line)', padding:'14px 16px', background:'rgba(255,255,255,.6)'}}>
          {highlights.length > 0 && (
            <div style={{marginBottom:12}}>
              <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', marginBottom:6}}>⭐ 本周重点</div>
              {highlights.map((h, i) => (
                <div key={h.id || i} style={{padding:'6px 10px', background:'white', borderRadius:5, fontSize:13, marginBottom:4, borderLeft:'3px solid ' + (h.priority === 'high' ? '#dc2626' : '#0369a1')}}>
                  {h.priority === 'high' && '🔥 '}{h.tag && <span style={{padding:'1px 5px', background:'#e0f2fe', color:'#075985', borderRadius:3, fontSize:10, marginRight:6}}>{h.tag}</span>}{h.text}
                </div>
              ))}
            </div>
          )}
          {workPlans.length > 0 && (
            <div style={{marginBottom:12}}>
              <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', marginBottom:6}}>📋 工作计划</div>
              {workPlans.map((p, i) => (
                <div key={p.id || i} style={{padding:'6px 10px', background:'white', borderRadius:5, fontSize:13, marginBottom:4, display:'flex', gap:6, alignItems:'flex-start'}}>
                  <span>{p.done ? '✅' : '⬜'}</span>
                  {p.assignee_name && <span style={{padding:'1px 5px', background:'#fef3c7', color:'#854d0e', borderRadius:3, fontSize:10, flexShrink:0}}>{p.assignee_name}</span>}
                  <span style={{flex:1}}>{p.text}</span>
                  {p.deadline && <span style={{fontSize:10, color:'#dc2626', flexShrink:0}}>截止 {p.deadline}</span>}
                </div>
              ))}
            </div>
          )}
          {briefing.content && (
            <div style={{padding:10, background:'white', borderRadius:6, fontSize:13, whiteSpace:'pre-wrap', lineHeight:1.6, marginBottom:12}}>
              {briefing.content}
            </div>
          )}
          {attachments.length > 0 && (
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:6}}>
              {attachments.map((a, i) => (
                <FileChip key={a.id || i} file={a} onClick={() => setItemPreview(a)} />
              ))}
            </div>
          )}
        </div>
      )}
      {itemPreview && <FilePreviewModal file={itemPreview} onClose={() => setItemPreview(null)} />}
    </div>
  );
};

// 会议纪要编辑器
// 🆕 fix30: 期号格式改成 "2026年6月份 第一周" (自然月分周,跟 getDateRange 的 week_of_month 一致)
const CN_WEEK_NUMS = ['', '一', '二', '三', '四', '五'];
function getMonthWeekLabel(date) {
  const d = date instanceof Date ? date : new Date(date);
  if (isNaN(d.getTime())) return '';
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const day = d.getDate();
  const w = Math.ceil(day / 7);  // 1-5,匹配 1-7 / 8-14 / 15-21 / 22-28 / 29-end
  return `${y}年${m}月份 第${CN_WEEK_NUMS[w] || w}周`;
}
const BriefingEditor = ({ briefing, user, employees, onClose, onSaved, toast }) => {
  const isEdit = !!briefing;
  const [weekLabel, setWeekLabel] = useState(briefing?.week_label || getMonthWeekLabel(new Date()));
  const [title, setTitle] = useState(briefing?.title || '');
  const [content, setContent] = useState(briefing?.content || '');
  const [highlights, setHighlights] = useState(briefing?.highlights || []);
  const [workPlans, setWorkPlans] = useState(briefing?.work_plans || []);
  const [attachments, setAttachments] = useState(briefing?.attachments || []);
  const [pinned, setPinned] = useState(briefing?.pinned || false);
  const [saving, setSaving] = useState(false);
  
  const addHighlight = () => setHighlights([...highlights, { id: 'h_' + Date.now().toString(36), text:'', priority:'normal', tag:'' }]);
  const addWorkPlan = () => setWorkPlans([...workPlans, { id: 'p_' + Date.now().toString(36), text:'', assignee_id:'', assignee_name:'', deadline:'', done:false }]);
  
  const handleSubmit = async (publishNow = false) => {
    if (!title.trim()) { alert('请填写会议标题'); return; }
    if (!weekLabel.trim()) { alert('请填写期号/标题'); return; }
    setSaving(true);
    const now = new Date().toISOString();
    const payload = {
      week_label: weekLabel.trim(),
      title: title.trim(),
      content: content.trim() || null,
      highlights: highlights.filter(h => (h.text || '').trim()),
      work_plans: workPlans.filter(p => (p.text || '').trim()),
      attachments: attachments,
      pinned,
      published: publishNow || briefing?.published || false,
      published_at: (publishNow || briefing?.published) ? (briefing?.published_at || now) : null,
      created_by: briefing?.created_by || user.id,
      created_by_name: briefing?.created_by_name || (user.name + (user.alias ? ' ' + user.alias : '')),
      created_at: briefing?.created_at || now,
      updated_at: now,
    };
    if (isEdit) payload.id = briefing.id;
    if (briefing?.read_by) payload.read_by = briefing.read_by;
    
    try {
      const res = await CLOUD.upsert('weekly_briefings', payload);
      if (res) {
        toast(publishNow ? '✓ 已保存并发布给所有员工' : '✓ 已保存草稿');
        onSaved();
      } else {
        alert('保存失败');
      }
    } catch(e) { alert('保存失败：' + e.message); }
    setSaving(false);
  };
  
  return (
    <div onClick={onClose}
      style={{position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:9999, display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'3vh 20px', overflowY:'auto', overflowX:'hidden'}}>
      <div onClick={e => e.stopPropagation()}
        style={{background:'white', borderRadius:14, maxWidth:780, width:'100%', display:'flex', flexDirection:'column', maxHeight:'94vh'}}>
        <div style={{padding:'16px 20px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0}}>
          <div className="font-display" style={{fontSize:17, fontWeight:600, color:'#0369a1'}}>
            📢 {isEdit ? '编辑' : '新建'}会议纪要
          </div>
          <button className="btn-sec" onClick={onClose} style={{padding:'4px 12px'}}>×</button>
        </div>
        
        <div style={{padding:20, overflow:'auto', flex:1}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 2fr', gap:10, marginBottom:14}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>期号 / 日期 *</label>
              <input value={weekLabel} onChange={e => setWeekLabel(e.target.value)} placeholder="2026年5月份 第四周"
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
              {/* 🆕 fix30: 快速切上下周 + 自定义日期 */}
              <div style={{display:'flex', gap:4, marginTop:6, flexWrap:'wrap', alignItems:'center'}}>
                <button type="button" onClick={() => setWeekLabel(getMonthWeekLabel(new Date(Date.now() - 7*86400000)))}
                  style={{padding:'3px 8px', border:'1px solid var(--line)', background:'white', borderRadius:4, fontSize:11, cursor:'pointer', fontFamily:'inherit'}} title="上周">← 上周</button>
                <button type="button" onClick={() => setWeekLabel(getMonthWeekLabel(new Date()))}
                  style={{padding:'3px 8px', border:'1px solid var(--accent)', background:'var(--accent)', color:'white', borderRadius:4, fontSize:11, cursor:'pointer', fontFamily:'inherit'}} title="本周">本周</button>
                <button type="button" onClick={() => setWeekLabel(getMonthWeekLabel(new Date(Date.now() + 7*86400000)))}
                  style={{padding:'3px 8px', border:'1px solid var(--line)', background:'white', borderRadius:4, fontSize:11, cursor:'pointer', fontFamily:'inherit'}} title="下周">下周 →</button>
                <input type="date" onChange={e => { if (e.target.value) setWeekLabel(getMonthWeekLabel(new Date(e.target.value + 'T12:00'))); }}
                  title="选具体日期 → 自动生成期号"
                  style={{padding:'2px 6px', border:'1px solid var(--line)', borderRadius:4, fontSize:11, color:'var(--ink-3)', cursor:'pointer'}} />
              </div>
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>会议标题 *</label>
              <input value={title} onChange={e => setTitle(e.target.value)} placeholder="例：本周客服流程优化 + 售后处理规范"
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            </div>
          </div>
          
          {/* 重点要点 */}
          <div style={{marginBottom:14}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:6}}>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)'}}>⭐ 本周重点（{highlights.length}）</label>
              <button onClick={addHighlight} className="btn-sec" style={{padding:'3px 10px', fontSize:11}}>+ 加要点</button>
            </div>
            {highlights.length === 0 ? (
              <div style={{padding:10, background:'#f9fafb', border:'1px dashed var(--line)', borderRadius:6, fontSize:11, color:'var(--ink-3)', textAlign:'center'}}>暂无要点，点上方"+ 加要点"开始</div>
            ) : (
              highlights.map((h, idx) => (
                <div key={h.id} style={{display:'flex', gap:6, marginBottom:6, alignItems:'center'}}>
                  <select value={h.priority || 'normal'} onChange={e => { const next = [...highlights]; next[idx] = {...h, priority:e.target.value}; setHighlights(next); }}
                    style={{width:90, padding:'6px 8px', border:'1px solid var(--line)', borderRadius:6, fontSize:12, background:'white'}}>
                    <option value="normal">📍 一般</option>
                    <option value="high">🔥 重要</option>
                  </select>
                  <input value={h.tag || ''} onChange={e => { const next = [...highlights]; next[idx] = {...h, tag:e.target.value}; setHighlights(next); }} placeholder="分类标签（选填）"
                    style={{width:110, padding:'6px 8px', border:'1px solid var(--line)', borderRadius:6, fontSize:12}} />
                  <input value={h.text} onChange={e => { const next = [...highlights]; next[idx] = {...h, text:e.target.value}; setHighlights(next); }} placeholder="重点内容..."
                    style={{flex:1, padding:'6px 8px', border:'1px solid var(--line)', borderRadius:6, fontSize:12}} />
                  <button onClick={() => setHighlights(highlights.filter((_, i) => i !== idx))}
                    style={{padding:'6px 8px', background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:6, cursor:'pointer', fontSize:12}}>×</button>
                </div>
              ))
            )}
          </div>
          
          {/* 工作计划 */}
          <div style={{marginBottom:14}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:6}}>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)'}}>📋 工作计划 / 任务分配（{workPlans.length}）</label>
              <button onClick={addWorkPlan} className="btn-sec" style={{padding:'3px 10px', fontSize:11}}>+ 加任务</button>
            </div>
            {workPlans.length === 0 ? (
              <div style={{padding:10, background:'#f9fafb', border:'1px dashed var(--line)', borderRadius:6, fontSize:11, color:'var(--ink-3)', textAlign:'center'}}>暂无任务</div>
            ) : (
              workPlans.map((p, idx) => (
                <div key={p.id} style={{display:'flex', gap:6, marginBottom:6, alignItems:'center'}}>
                  <select value={p.assignee_id || ''} onChange={e => {
                    const emp = employees.find(em => em.id === e.target.value);
                    const next = [...workPlans]; next[idx] = {...p, assignee_id:e.target.value, assignee_name: emp ? emp.name + (emp.alias ? ' ' + emp.alias : '') : ''};
                    setWorkPlans(next);
                  }}
                    style={{width:130, padding:'6px 8px', border:'1px solid var(--line)', borderRadius:6, fontSize:12, background:'white'}}>
                    <option value="">所有人</option>
                    {employees.map(emp => <option key={emp.id} value={emp.id}>{emp.name}{emp.alias ? ' ' + emp.alias : ''}</option>)}
                  </select>
                  <input value={p.text} onChange={e => { const next = [...workPlans]; next[idx] = {...p, text:e.target.value}; setWorkPlans(next); }} placeholder="任务内容..."
                    style={{flex:1, padding:'6px 8px', border:'1px solid var(--line)', borderRadius:6, fontSize:12}} />
                  <input type="date" value={p.deadline || ''} onChange={e => { const next = [...workPlans]; next[idx] = {...p, deadline:e.target.value}; setWorkPlans(next); }} title="截止日期"
                    style={{width:130, padding:'6px 8px', border:'1px solid var(--line)', borderRadius:6, fontSize:12}} />
                  <button onClick={() => setWorkPlans(workPlans.filter((_, i) => i !== idx))}
                    style={{padding:'6px 8px', background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:6, cursor:'pointer', fontSize:12}}>×</button>
                </div>
              ))
            )}
          </div>
          
          {/* 详细正文 */}
          <div style={{marginBottom:14}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>📝 会议详细内容（选填）</label>
            <textarea value={content} onChange={e => setContent(e.target.value)}
              placeholder="开会的详细笔记 / 流程说明 / 注意事项..."
              style={{width:'100%', minHeight:120, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical', lineHeight:1.6}} />
          </div>
          
          {/* 附件 - 支持 PDF/PPT/Excel/Word/图片/视频 */}
          <div style={{marginBottom:14}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>📎 附件文件（选填 · 支持 PDF / PPT / Excel / Word / 图片 / 视频）</label>
            <MultiFileUploader files={attachments} setFiles={setAttachments} bucket="briefing-files" maxSize={50} />
          </div>
          
          {/* 置顶选项 */}
          <label style={{display:'flex', alignItems:'center', gap:6, padding:8, background:'#fef9c3', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, color:'#854d0e'}}>
            <input type="checkbox" checked={pinned} onChange={e => setPinned(e.target.checked)} />
            📌 置顶（员工首页永久显示在最前）
          </label>
        </div>
        
        <div style={{padding:'14px 20px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0, gap:8}}>
          <div style={{fontSize:10, color:'var(--ink-3)'}}>
            💡 「保存草稿」员工看不到，「发布」后所有员工首页立即显示
          </div>
          <div style={{display:'flex', gap:8}}>
            <button onClick={onClose} className="btn-sec" style={{padding:'8px 16px'}}>取消</button>
            <button onClick={() => handleSubmit(false)} disabled={saving} className="btn-sec" style={{padding:'8px 18px', fontWeight:600}}>
              💾 保存草稿
            </button>
            <button onClick={() => handleSubmit(true)} disabled={saving}
              style={{padding:'8px 22px', background:'#0369a1', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13, opacity: saving ? 0.5 : 1}}>
              {saving ? '保存中...' : '📢 保存并发布'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 🔍 全局智能搜索 - 跨平台所有数据
// ============================================================
const GlobalSearch = ({ open, onClose, user, employees, records, setActiveTab, onJumpToRecord }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [extraData, setExtraData] = useState({ suppliers:[], aftersales:[], refills:[], refunds:[], briefings:[], kb:[], tickets:[] });
  const [selectedIdx, setSelectedIdx] = useState(0);
  const inputRef = React.useRef(null);
  
  // 打开时加载额外数据 + 自动聚焦
  useEffect(() => {
    if (!open) return;
    setQuery('');
    setSelectedIdx(0);
    setTimeout(() => inputRef.current?.focus(), 50);
    setLoading(true);
    (async () => {
      try {
        const [sup, af, rf, rfd, bf, kb, tk, rev, cb, oo, ci, pv] = await Promise.all([
          CLOUD.list('suppliers', { limit:1000 }),
          CLOUD.list('aftersales', { limit:500 }),
          CLOUD.list('refills', { limit:500 }),
          CLOUD.list('refunds', { limit:500 }),
          CLOUD.list('weekly_briefings', { limit:50 }),
          CLOUD.list('workspace_kb', { limit:500 }),
          CLOUD.list('workspace_tickets', { limit:300 }),
          CLOUD.list('product_reviews', { limit:500 }),
          CLOUD.list('chargebacks', { limit:300 }),
          CLOUD.list('offline_orders', { limit:300 }),
          CLOUD.list('custom_inquiries', { limit:300 }),
          CLOUD.list('photo_verifications', { limit:300 }),
        ]);
        setExtraData({
          suppliers: sup || [],
          aftersales: af || [],
          refills: rf || [],
          refunds: rfd || [],
          briefings: bf || [],
          kb: kb || [],
          tickets: tk || [],
          reviews: rev || [],
          chargebacks: cb || [],
          offline_orders: oo || [],
          custom_inquiries: ci || [],
          photo_verifications: pv || [],
        });
      } catch(e) { console.warn('加载搜索数据失败', e); }
      setLoading(false);
    })();
  }, [open]);
  
  // 键盘快捷键
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);
  
  // 搜索结果（分类）
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    const all = [];
    
    // 1. 客服记录
    (records || []).filter(r => !r.deleted).forEach(r => {
      const hay = [r.customer, r.orderRef, r.note, r.category, r.site, r.date, employees.find(e=>e.id===r.ownerId)?.name].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        all.push({
          kind:'record', icon:'📧', label:'客服记录', color:'#0369a1',
          title: r.customer || '(无邮箱)',
          desc: `${r.date} · ${r.category || '未选事项'} · ${r.orderRef || ''}`,
          extra: r.note,
          owner: employees.find(e => e.id === r.ownerId)?.name,
          target: { tab:'cs', recordId: r.id },
          data: r,
        });
      }
    });
    
    // 2. 售后事件
    (extraData.aftersales || []).forEach(a => {
      const hay = [a.order_ref, a.customer, a.product_name, a.issue_detail, a.damaged_part, a.supplier_name, a.notes, a.issue_type_custom].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        const issue = ISSUE_TYPES.find(i => i.key === a.issue_type);
        const status = AFTERSALE_STATUSES.find(s => s.key === a.status);
        all.push({
          kind:'aftersale', icon:'🔧', label:'售后事件', color:'#ea580c',
          title: `${a.order_ref || '?'} · ${a.product_name || ''}`,
          desc: `${issue?.label || ''}${a.damaged_part ? ' · ' + a.damaged_part : ''} · ${a.supplier_name || ''}`,
          extra: a.issue_detail,
          status: status?.label,
          target: { tab:'events', subTab:'aftersales' },
          data: a,
        });
      }
    });
    
    // 3. 补件
    (extraData.refills || []).forEach(r => {
      const itemsStr = (r.items || []).map(i => i.item).join(' ');
      const hay = [r.order_ref, r.customer, itemsStr, r.supplier_name, r.notes, r.tracking_number].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        const status = REFILL_STATUSES.find(s => s.key === r.status);
        all.push({
          kind:'refill', icon:'📦', label:'补件事件', color:'#0369a1',
          title: `${r.order_ref || '?'} · ${itemsStr.slice(0, 40)}`,
          desc: `${r.supplier_name || ''} · 共 ${(r.items || []).length} 项`,
          extra: r.notes,
          status: status?.label,
          target: { tab:'events', subTab:'refills' },
          data: r,
        });
      }
    });
    
    // 4. 退款
    (extraData.refunds || []).forEach(r => {
      const hay = [r.order_ref, r.customer, r.product_name, r.refund_reason, r.supplier_name, r.refund_type_custom, r.payment_method_custom, r.external_refund_id].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        const type = REFUND_TYPES.find(t => t.key === r.refund_type);
        const status = REFUND_STATUSES.find(s => s.key === r.status);
        all.push({
          kind:'refund', icon:'💰', label:'退款', color:'#dc2626',
          title: `${r.order_ref || '?'} · ${r.currency} ${parseFloat(r.amount).toFixed(2)}`,
          desc: `${type?.label || ''} · ${r.payment_method || ''}`,
          extra: r.refund_reason,
          status: status?.label,
          target: { tab:'events', subTab:'refunds' },
          data: r,
        });
      }
    });
    
    // 5. 供应商
    (extraData.suppliers || []).forEach(s => {
      const hay = [s.name, s.contact_person, s.alipay, s.category, s.notes].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        all.push({
          kind:'supplier', icon:'🏭', label:'供应商', color:'#16a34a',
          title: s.name,
          desc: `${s.contact_person ? '👤 ' + s.contact_person : ''} ${s.alipay ? '· 💳 ' + s.alipay : ''}`,
          extra: `售后 ${s.total_aftersales || 0} 单`,
          target: { tab:'suppliers' },
          data: s,
        });
      }
    });
    
    // 6. 知识库
    (extraData.kb || []).forEach(k => {
      const hay = [k.title, k.content, k.category, k.tags && (Array.isArray(k.tags) ? k.tags.join(' ') : k.tags)].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        all.push({
          kind:'kb', icon:'📚', label:'知识库', color:'#7c3aed',
          title: k.title || '(无标题)',
          desc: `${k.category || ''}`,
          extra: (k.content || '').slice(0, 150),
          target: { tab:'kb' },
          data: k,
        });
      }
    });
    
    // 7. 会议纪要
    (extraData.briefings || []).filter(b => b.published).forEach(b => {
      const highlightsStr = (b.highlights || []).map(h => h.text).join(' ');
      const plansStr = (b.work_plans || []).map(p => p.text).join(' ');
      const hay = [b.title, b.week_label, b.content, highlightsStr, plansStr].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        all.push({
          kind:'briefing', icon:'📢', label:'会议纪要', color:'#0891b2',
          title: b.title,
          desc: `${b.week_label} · ${(b.highlights || []).length} 要点 · ${(b.work_plans || []).length} 任务`,
          extra: b.content,
          target: { tab:'briefings' },
          data: b,
        });
      }
    });
    
    // 8. 工单
    (extraData.tickets || []).forEach(t => {
      const hay = [t.title, t.content, t.from_name, t.target_name].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        all.push({
          kind:'ticket', icon:'📋', label:'工单', color:'#d97706',
          title: t.title || '(无标题)',
          desc: `${t.from_name} → ${t.target_name} · ${t.status || ''}`,
          extra: t.content,
          target: { tab:'report' },
          data: t,
        });
      }
    });
    
    // 8.5. 🆕 产品评价任务
    (extraData.reviews || []).forEach(r => {
      const hay = [r.product_name, r.product_url, r.site, r.notes, r.work_notes, r.review_text, r.reviewer_alias, r.created_by_name, r.claimed_by_name].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        const statusObj = REVIEW_STATUSES.find(s => s.key === r.status);
        all.push({
          kind:'review', icon:'⭐', label:'产品评价', color:'#fbbf24',
          title: r.product_name || (r.product_url || '').slice(0, 60),
          desc: `${r.site || ''}${r.platform ? ' · ' + r.platform : ''} · 发布: ${r.created_by_name || '?'}${r.claimed_by_name ? ' · 接单: ' + r.claimed_by_name : ''} · ${(statusObj && statusObj.label) || r.status}`,
          extra: r.notes || r.work_notes,
          target: { tab:'reviews' },
          data: r,
        });
      }
    });
    
    // 8.6. 🆕 拒付
    (extraData.chargebacks || []).filter(c => !c.deleted).forEach(c => {
      const hay = [c.order_no, c.customer_email, c.customer_name, c.platform, c.notes, c.reason_detail, c.resolution, (c.assigned_to_names || []).join(' ')].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        const statusObj = CHARGEBACK_STATUSES.find(s => s.key === c.status);
        const urgency = getChargebackUrgency(c);
        all.push({
          kind:'chargeback', icon:'🚨', label:'拒付', color:'#dc2626',
          title: `${c.order_no} · ${c.currency || 'USD'} ${c.amount || 0}`,
          desc: `${c.platform || ''} · ${c.customer_email || ''}${(c.assigned_to_names || []).length > 0 ? ' · 👥 ' + c.assigned_to_names.join('/') : ''}`,
          extra: urgency ? `⏰ ${urgency.label} · 截止 ${c.deadline}` : `截止 ${c.deadline}`,
          status: statusObj?.label,
          target: { tab:'chargebacks' },
          data: c,
        });
      }
    });
    
    // 8.7. 🆕 线下单
    (extraData.offline_orders || []).filter(o => !o.deleted).forEach(o => {
      const hay = [o.order_no, o.customer_email, o.customer_name, o.ship_to_name, o.ship_to_country, o.notes, o.payment_method, o.site, o.quote_no].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        const statusObj = OFFLINE_ORDER_STATUSES.find(s => s.key === o.status);
        all.push({
          kind:'offline_order', icon:'💳', label:'线下单', color:'#0369a1',
          title: `${o.order_no} · ${o.payment_currency || 'USD'} ${o.payment_amount || 0}`,
          desc: `${o.site || ''} · ${o.payment_method || ''} · ${o.customer_email || o.customer_name || ''}`,
          extra: `📍 ${o.ship_to_country || ''} ${o.ship_to_city || ''}`,
          status: statusObj?.label,
          target: { tab:'offline_orders' },
          data: o,
        });
      }
    });
    
    // 8.8. 🆕 定制咨询
    (extraData.custom_inquiries || []).filter(c => !c.deleted).forEach(c => {
      const hay = [c.customer_name, c.customer_email, c.requirement, c.designer_name, c.quote_no, c.order_no, c.notes].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        const stage = CUSTOM_STAGES.find(s => s.key === c.stage);
        all.push({
          kind:'custom_inquiry', icon:'🎨', label:'定制咨询', color:'#7c3aed',
          title: c.customer_name || c.customer_email || '(未填客户)',
          desc: `${(stage && stage.label) || c.stage} · ${c.site || ''}${c.designer_name ? ' · 设计:' + c.designer_name : ''}`,
          extra: (c.requirement || '').slice(0, 150),
          target: { tab:'custom_photo' },
          data: c,
        });
      }
    });
    
    // 8.9. 🆕 实拍核实
    (extraData.photo_verifications || []).filter(p => !p.deleted).forEach(p => {
      const hay = [p.sku, p.product_name, p.supplier_name, p.difference_detail, p.customer_response, p.resolution, (p.affected_orders || []).join(' ')].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        const statusObj = PHOTO_STATUSES.find(s => s.key === p.status);
        all.push({
          kind:'photo_verification', icon:'📸', label:'实拍核实', color:'#be185d',
          title: `${p.sku || ''} ${p.product_name || ''}`.trim() || '(未填产品)',
          desc: `${p.supplier_name || ''}${p.difference_type ? ' · 差异:' + p.difference_type : ''}${(p.affected_orders || []).length > 0 ? ' · 影响 ' + p.affected_orders.length + ' 单' : ''}`,
          extra: (p.difference_detail || '').slice(0, 150),
          status: statusObj?.label,
          target: { tab:'custom_photo' },
          data: p,
        });
      }
    });
    
    // 9. 员工
    employees.filter(e => !e.hideFromList || e.id === user.id).forEach(emp => {
      const hay = [emp.name, emp.alias, emp.sites, emp.title].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        all.push({
          kind:'employee', icon:'👤', label:'员工', color:'#5e5ce6',
          title: `${emp.name}${emp.alias ? ' ' + emp.alias : ''}`,
          desc: `${emp.title || ''} · ${emp.sites || ''}`,
          target: null,
          data: emp,
        });
      }
    });
    
    // 10. 平台功能（"如何"类搜索）
    const features = [
      { keys:['售后','补件','退款','事件'], title:'📋 工作主线', desc:'查看所有售后/补件/退款事件', target:{tab:'events'} },
      { keys:['拒付','chargeback','dispute'], title:'🚨 拒付管理', desc:'7/3/1 天提醒 · 按网站自动分配', target:{tab:'chargebacks'} },
      { keys:['线下单','银行','paypal','转账','offline'], title:'💳 线下单', desc:'自动生成订单编号 · 复制下单指令', target:{tab:'offline_orders'} },
      { keys:['定制','实拍','custom','sketch'], title:'🎨 定制 & 实拍', desc:'定制咨询 + 实拍核实', target:{tab:'custom_photo'} },
      { keys:['主管','汇总','总览','overview'], title:'📊 主管汇总', desc:'所有模块数据总览(主管/老板可见)', target:{tab:'admin_overview'} },
      { keys:['删除审批','审批','approval','批准'], title:'🛡 删除审批', desc:'员工的删除申请审批中心', target:{tab:'delete_approvals'} },
      { keys:['供应商','工厂'], title:'🏭 供应商管理', desc:'693 家供应商搜索 + 新增', target:{tab:'suppliers'} },
      { keys:['知识','回复','模板'], title:'📚 知识库', desc:'280+ 客服回复模板', target:{tab:'kb'} },
      { keys:['报价','quote','pi'], title:'📝 报价单', desc:'生成报价单', target:{tab:'quote'} },
      { keys:['财务','计算器'], title:'🧮 财务计算器', desc:'订单财务计算', target:{tab:'finance'} },
      { keys:['运费','物流'], title:'🚚 运费支付', desc:'运费对账', target:{tab:'freight'} },
      { keys:['看板','统计','报表'], title:'📊 数据看板', desc:'团队数据统计', target:{tab:'dashboard'} },
      { keys:['工单','汇报'], title:'💬 汇报工单', desc:'员工汇报问题', target:{tab:'report'} },
      { keys:['会议','纪要','要点'], title:'📢 会议纪要', desc:'主管发布的会议要点', target:{tab:'briefings'} },
      { keys:['回收','删除'], title:'🗑 回收站', desc:'恢复删除的数据', target:{tab:'trash'} },
      { keys:['设置','配置','员工管理'], title:'⚙ 设置', desc:'云配置 / 员工管理', target:{tab:'admin'} },
    ];
    features.forEach(f => {
      if (f.keys.some(k => k.toLowerCase().includes(q) || q.includes(k.toLowerCase()))) {
        all.push({
          kind:'feature', icon:'⚡', label:'功能', color:'#525252',
          title: f.title,
          desc: f.desc,
          target: f.target,
          data: f,
        });
      }
    });
    
    return all.slice(0, 80);  // 最多 80 条
  }, [query, records, extraData, employees, user]);
  
  // 按 kind 分组
  const grouped = useMemo(() => {
    const g = {};
    results.forEach(r => {
      if (!g[r.kind]) g[r.kind] = { label: r.label, icon: r.icon, color: r.color, items: [] };
      g[r.kind].items.push(r);
    });
    return g;
  }, [results]);
  
  const handleClick = (item) => {
    if (item.target && item.target.tab) {
      setActiveTab(item.target.tab);
      if (item.target.recordId && onJumpToRecord) onJumpToRecord(item.target.recordId);
    }
    onClose();
  };
  
  if (!open) return null;
  
  return (
    <div onClick={onClose}
      style={{position:'fixed', inset:0, background:'rgba(0,0,0,.45)', zIndex:9999, display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'8vh 20px'}}>
      <div onClick={e => e.stopPropagation()}
        style={{background:'white', borderRadius:14, maxWidth:720, width:'100%', display:'flex', flexDirection:'column', maxHeight:'80vh', boxShadow:'0 24px 64px rgba(0,0,0,.3)'}}>
        {/* 搜索框 */}
        <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)', display:'flex', alignItems:'center', gap:10}}>
          <span style={{fontSize:20}}>🔍</span>
          <input ref={inputRef}
            value={query} onChange={e => setQuery(e.target.value)}
            placeholder="搜索客户邮箱 / 订单号 / 供应商 / 退款 / 知识库 / 功能..."
            style={{flex:1, padding:'8px 0', border:'none', outline:'none', fontSize:15, fontFamily:'inherit'}} />
          {query && (
            <button onClick={() => setQuery('')} style={{padding:'4px 10px', background:'var(--bg)', border:'none', borderRadius:6, cursor:'pointer', fontSize:11, color:'var(--ink-3)'}}>清空</button>
          )}
          <kbd style={{padding:'3px 8px', background:'var(--bg)', borderRadius:5, fontSize:11, color:'var(--ink-3)', border:'1px solid var(--line)'}}>ESC</kbd>
        </div>
        
        {/* 结果区 */}
        <div style={{flex:1, overflow:'auto', padding: query ? 8 : 24}}>
          {!query.trim() ? (
            <div style={{textAlign:'center', padding:'24px 0', color:'var(--ink-3)', fontSize:13}}>
              <div style={{fontSize:36, marginBottom:10}}>🔍</div>
              <div style={{fontWeight:600, marginBottom:6, color:'var(--ink-2)', fontSize:14}}>智能搜索全平台</div>
              <div style={{marginBottom:16}}>可以搜索任意客户邮箱、订单号、供应商、退款、知识库、功能页面</div>
              <div style={{display:'flex', flexWrap:'wrap', gap:8, justifyContent:'center', maxWidth:500, margin:'0 auto'}}>
                {['john@', 'V99299', '品诚', '退款', '运输损坏', '会议', '供应商', '报价'].map(s => (
                  <button key={s} onClick={() => setQuery(s)}
                    style={{padding:'5px 12px', background:'var(--bg)', border:'1px solid var(--line)', borderRadius:14, cursor:'pointer', fontSize:11, fontFamily:'inherit', color:'var(--ink-2)'}}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : loading && results.length === 0 ? (
            <div style={{textAlign:'center', padding:30, color:'var(--ink-3)', fontSize:13}}>⏳ 搜索中...</div>
          ) : results.length === 0 ? (
            <div style={{textAlign:'center', padding:40, color:'var(--ink-3)', fontSize:13}}>
              <div style={{fontSize:36, marginBottom:8}}>🔍</div>
              没有找到包含 "<strong style={{color:'var(--ink-2)'}}>{query}</strong>" 的内容
            </div>
          ) : (
            <div>
              <div style={{fontSize:11, color:'var(--ink-3)', padding:'4px 10px', marginBottom:6}}>
                找到 <strong style={{color:'var(--ink)'}}>{results.length}</strong> 条结果
              </div>
              {Object.entries(grouped).map(([kind, group]) => (
                <div key={kind} style={{marginBottom:14}}>
                  <div style={{padding:'4px 10px', fontSize:11, fontWeight:600, color: group.color, display:'flex', alignItems:'center', gap:6}}>
                    <span>{group.icon}</span>
                    <span>{group.label} ({group.items.length})</span>
                  </div>
                  {group.items.map((item, idx) => (
                    <div key={kind + '_' + idx} onClick={() => handleClick(item)}
                      style={{
                        padding:'8px 12px', borderRadius:8, cursor:'pointer', marginBottom:2,
                        borderLeft:'3px solid ' + group.color,
                        background:'white', transition:'background .1s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = group.color + '08'}
                      onMouseLeave={e => e.currentTarget.style.background = 'white'}>
                      <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:3}}>
                        <span style={{fontSize:13, fontWeight:600, color:'var(--ink)', flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                          {highlightMatch(item.title, query)}
                        </span>
                        {item.status && (
                          <span style={{padding:'1px 6px', background: group.color + '15', color: group.color, borderRadius:4, fontSize:10, fontWeight:600, flexShrink:0}}>{item.status}</span>
                        )}
                        {item.owner && (
                          <span style={{padding:'1px 6px', background:'var(--bg)', color:'var(--ink-3)', borderRadius:4, fontSize:10, flexShrink:0}}>{item.owner}</span>
                        )}
                      </div>
                      {item.desc && (
                        <div style={{fontSize:11, color:'var(--ink-3)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                          {highlightMatch(item.desc, query)}
                        </div>
                      )}
                      {item.extra && item.kind !== 'feature' && (
                        <div style={{fontSize:11, color:'var(--ink-3)', marginTop:3, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', opacity:.8}}>
                          {highlightMatch(String(item.extra).slice(0, 100), query)}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* 底部 */}
        <div style={{padding:'10px 18px', borderTop:'1px solid var(--line)', background:'var(--bg)', fontSize:10, color:'var(--ink-3)', display:'flex', justifyContent:'space-between'}}>
          <div>💡 提示：可以搜邮箱、订单号、供应商名、退款原因、会议要点</div>
          <div>
            <kbd style={{padding:'1px 5px', background:'white', border:'1px solid var(--line)', borderRadius:3, fontSize:10}}>Ctrl+K</kbd> 打开搜索
          </div>
        </div>
      </div>
    </div>
  );
};

// 高亮匹配文字
const highlightMatch = (text, query) => {
  if (!text || !query) return text;
  const txt = String(text);
  const q = query.trim();
  if (!q) return txt;
  const lower = txt.toLowerCase();
  const qLower = q.toLowerCase();
  const idx = lower.indexOf(qLower);
  if (idx < 0) return txt;
  return (
    <>
      {txt.slice(0, idx)}
      <span style={{background:'#fef3c7', color:'#854d0e', fontWeight:600, padding:'0 2px', borderRadius:2}}>{txt.slice(idx, idx + q.length)}</span>
      {txt.slice(idx + q.length)}
    </>
  );
};

// ============================================================
// 🔍 可搜索的供应商选择器（693 家供应商不用一个个翻）
// ============================================================
const SearchableSupplierSelect = ({ value, onChange, suppliers, placeholder = '选择供应商', allowClear = true, width = 200 }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const wrapRef = React.useRef(null);
  
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);
  
  const selected = value ? suppliers.find(s => String(s.id) === String(value)) : null;
  const filtered = useMemo(() => {
    if (!search.trim()) return suppliers.slice(0, 100);  // 不搜索时只显示前 100
    const q = search.toLowerCase();
    return suppliers.filter(s => 
      (s.name || '').toLowerCase().includes(q) ||
      (s.contact_person || '').toLowerCase().includes(q) ||
      (s.alipay || '').toLowerCase().includes(q) ||
      (s.category || '').toLowerCase().includes(q)
    ).slice(0, 100);
  }, [search, suppliers]);
  
  return (
    <div ref={wrapRef} style={{position:'relative', display:'inline-block', width}}>
      <div onClick={() => setOpen(v => !v)}
        style={{
          padding:'5px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:12,
          background:'white', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'space-between', gap:6,
          minHeight:28,
        }}>
        <span style={{flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', color: selected ? 'var(--ink)' : 'var(--ink-4)'}}>
          {selected ? (selected.name + (selected.contact_person ? ' · ' + selected.contact_person : '')) : placeholder}
        </span>
        {selected && allowClear && (
          <span onClick={(e) => { e.stopPropagation(); onChange(''); setSearch(''); }}
            style={{cursor:'pointer', color:'var(--ink-4)', fontSize:14, padding:'0 4px'}}>×</span>
        )}
        <span style={{fontSize:9, color:'var(--ink-4)'}}>▼</span>
      </div>
      
      {open && (
        <div style={{
          position:'absolute', top:'calc(100% + 4px)', left:0, right:0,
          background:'white', border:'1px solid var(--line)', borderRadius:8,
          boxShadow:'0 8px 24px rgba(0,0,0,.12)', zIndex:100,
          minWidth: width, maxWidth: 320,
        }}>
          <div style={{padding:8, borderBottom:'1px solid var(--line)'}}>
            <input autoFocus value={search} onChange={e => setSearch(e.target.value)}
              placeholder={`🔍 搜索 ${suppliers.length} 家供应商...`}
              onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); } }}
              style={{width:'100%', padding:'6px 10px', border:'1px solid var(--line)', borderRadius:5, fontSize:12, fontFamily:'inherit'}} />
          </div>
          <div style={{maxHeight:320, overflowY:'auto'}}>
            {allowClear && (
              <div onClick={() => { onChange(''); setOpen(false); setSearch(''); }}
                style={{padding:'7px 12px', fontSize:12, cursor:'pointer', color:'var(--ink-3)', borderBottom:'1px solid var(--line)'}}
                onMouseEnter={e => e.currentTarget.style.background = '#f5f5f7'}
                onMouseLeave={e => e.currentTarget.style.background = 'white'}>
                {placeholder}（不限）
              </div>
            )}
            {filtered.length === 0 ? (
              <div style={{padding:'14px 12px', textAlign:'center', fontSize:12, color:'var(--ink-3)'}}>
                没有找到匹配的供应商
              </div>
            ) : filtered.map(s => (
              <div key={s.id} onClick={() => { onChange(s.id); setOpen(false); setSearch(''); }}
                style={{
                  padding:'7px 12px', fontSize:12, cursor:'pointer',
                  borderLeft: String(value) === String(s.id) ? '3px solid var(--accent)' : '3px solid transparent',
                  background: String(value) === String(s.id) ? '#e0f2fe' : 'white',
                }}
                onMouseEnter={e => { if (String(value) !== String(s.id)) e.currentTarget.style.background = '#f5f5f7'; }}
                onMouseLeave={e => { if (String(value) !== String(s.id)) e.currentTarget.style.background = 'white'; }}>
                <div style={{fontWeight:600}}>{s.name}</div>
                {(s.contact_person || s.category) && (
                  <div style={{fontSize:10, color:'var(--ink-3)', marginTop:2}}>
                    {s.contact_person && <span>👤 {s.contact_person}</span>}
                    {s.category && <span style={{marginLeft:6}}>📦 {s.category}</span>}
                  </div>
                )}
              </div>
            ))}
            {!search.trim() && suppliers.length > 100 && (
              <div style={{padding:8, fontSize:10, color:'var(--ink-3)', textAlign:'center', background:'#fef9c3'}}>
                只显示前 100 家 · 输入关键词搜索更精确
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================
// ⭐ 产品评价任务系统
// ============================================================
const REVIEW_PRIORITIES = [
  { key:'high', label:'🔥 紧急', bg:'#fef2f2', color:'#dc2626', border:'#fca5a5' },
  { key:'normal', label:'📍 正常', bg:'#f0f9ff', color:'#0369a1', border:'#7dd3fc' },
  { key:'low', label:'⬇ 不急', bg:'#f5f5f7', color:'#525252', border:'#d4d4d4' },
];

const REVIEW_PLATFORMS = ['Shopify', 'Trustpilot', 'Google', 'Amazon', 'Etsy', 'Wayfair', 'Facebook', '其他'];

const REVIEW_STATUSES = [
  { key:'pending',     label:'待领取', bg:'#fef3c7', color:'#854d0e' },
  { key:'in_progress', label:'进行中', bg:'#e0f2fe', color:'#075985' },
  { key:'completed',   label:'已完成', bg:'#dcfce7', color:'#15803d' },
  { key:'cancelled',   label:'已取消', bg:'#f5f5f7', color:'#737373' },
];

// 从产品 URL 自动提取产品名（slug 转可读）
const extractProductNameFromURL = (url) => {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    const path = parsed.pathname;
    // /products/eleanor-beam-pendant-lamp → eleanor-beam-pendant-lamp
    const match = path.match(/\/products\/([^/?]+)/);
    if (match) {
      return match[1].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    }
    // 最后一段
    const segments = path.split('/').filter(Boolean);
    if (segments.length > 0) {
      return segments[segments.length - 1].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    }
  } catch {}
  return '';
};

// 从 URL 提取网站
const extractSiteFromURL = (url) => {
  if (!url) return '';
  try {
    const host = new URL(url).hostname.toLowerCase();
    if (host.includes('vakkerlight')) return 'VK';
    if (host.includes('dekorfine')) return 'DF';
    if (host.includes('radilum')) return 'RD';
    if (host.includes('moooi') || host.includes('mojohome')) return 'MO';
    if (host.includes('myjewelry')) return 'MJ';
    if (host.includes('decora')) return 'DC';
    if (host.includes('lampstore')) return 'LS';
    return '';
  } catch { return ''; }
};

// ============================================================
// 🚨💳🎨📸 业务模块 - 拒付 / 线下单 / 定制咨询 / 实拍核实
// ============================================================

const CHARGEBACK_REASONS = [
  { key:'product', label:'产品问题' },
  { key:'shipping', label:'物流/未收到' },
  { key:'fraud', label:'欺诈/盗刷' },
  { key:'unauthorized', label:'未授权交易' },
  { key:'duplicate', label:'重复扣款' },
  { key:'not_described', label:'与描述不符' },
  { key:'other', label:'其他' },
];

const CHARGEBACK_PLATFORMS = ['Stripe', 'PayPal', 'Shopify Payments', 'Klarna', 'Bank', '信用卡', '其他'];

const CHARGEBACK_STATUSES = [
  { key:'pending',   label:'待提交证据', bg:'#fef2f2', color:'#dc2626' },
  { key:'responded', label:'已提交证据', bg:'#fef3c7', color:'#854d0e' },
  { key:'won',       label:'胜诉',       bg:'#dcfce7', color:'#15803d' },
  { key:'lost',      label:'败诉',       bg:'#f5f5f7', color:'#525252' },
  { key:'closed',    label:'已关闭',     bg:'#f5f5f7', color:'#737373' },
];

const PAYMENT_METHODS = ['银行转账', 'PayPal', 'Wise', 'Stripe', 'Western Union', '其他'];

const OFFLINE_ORDER_STATUSES = [
  { key:'draft',           label:'草稿',     bg:'#f5f5f7', color:'#737373' },
  { key:'pending_payment', label:'待付款',   bg:'#fef3c7', color:'#854d0e' },
  { key:'paid',            label:'已付款',   bg:'#dcfce7', color:'#15803d' },
  { key:'dispatched',      label:'已下单',   bg:'#e0f2fe', color:'#075985' },
  { key:'completed',       label:'已完成',   bg:'#dbeafe', color:'#1e3a8a' },
  { key:'cancelled',       label:'已取消',   bg:'#fee2e2', color:'#991b1b' },
];

const CUSTOM_STAGES = [
  { key:'inquiry',   label:'1. 询单',     icon:'📝', color:'#737373' },
  { key:'sketching', label:'2. 出图',     icon:'✏️', color:'#0369a1' },
  { key:'quoting',   label:'3. 报价',     icon:'💰', color:'#854d0e' },
  { key:'paid',      label:'4. 已付款',   icon:'💳', color:'#15803d' },
  { key:'producing', label:'5. 生产中',   icon:'🏭', color:'#7c3aed' },
  { key:'photo',     label:'6. 实拍确认', icon:'📸', color:'#be185d' },
  { key:'completed', label:'7. 已完成',   icon:'✅', color:'#1e3a8a' },
  { key:'cancelled', label:'已取消',     icon:'✕', color:'#525252' },
];

const PHOTO_DIFFERENCE_TYPES = ['颜色', '尺寸', '材质', '做工', '包装', '配件缺失', '其他'];
const PHOTO_STATUSES = [
  { key:'pending',   label:'待联系客户', bg:'#fef3c7', color:'#854d0e' },
  { key:'contacted', label:'已发邮件',   bg:'#e0f2fe', color:'#075985' },
  { key:'accepted',  label:'客户接受',   bg:'#dcfce7', color:'#15803d' },
  { key:'rejected',  label:'客户拒绝',   bg:'#fee2e2', color:'#991b1b' },
  { key:'replaced',  label:'已换款',     bg:'#dbeafe', color:'#1e3a8a' },
];

// 计算距离日期还有多少天(负数表示已过期)
const daysUntil = (dateStr) => {
  if (!dateStr) return null;
  const today = new Date(); today.setHours(0,0,0,0);
  const target = new Date(dateStr); target.setHours(0,0,0,0);
  return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
};

// 拒付紧迫度计算
const getChargebackUrgency = (cb) => {
  if (cb.status === 'won' || cb.status === 'lost' || cb.status === 'closed') return null;
  const days = daysUntil(cb.deadline);
  if (days === null) return null;
  if (days < 0) return { level:'overdue',  days, label:`已逾期 ${Math.abs(days)} 天`,    color:'#7f1d1d', bg:'#fef2f2' };
  if (days === 0) return { level:'today',   days, label:'今天截止!',                       color:'#991b1b', bg:'#fee2e2' };
  if (days <= 1) return { level:'critical', days, label:`仅剩 ${days} 天`,                color:'#991b1b', bg:'#fee2e2' };
  if (days <= 3) return { level:'urgent',   days, label:`仅剩 ${days} 天`,                color:'#9a3412', bg:'#fed7aa' };
  if (days <= 7) return { level:'warning',  days, label:`还有 ${days} 天`,                color:'#854d0e', bg:'#fef3c7' };
  return { level:'normal', days, label:`${days} 天后截止`, color:'#15803d', bg:'#dcfce7' };
};

// 🆕 智能生成订单编号 - 扫描所有历史订单的实际最大编号 +1
// 优先级:
//   1. 扫描 offline_orders 中 site=X 的所有订单,找到最大编号
//   2. 扫描旧的 records / aftersales 等表中的 order_no 字段,提取符合该网站前缀的
//   3. 使用 site_order_sequences 中的 current_no(兜底)
//   4. 全没有就从 1 开始
const generateOrderNo = async (site, options = {}) => {
  const { previewOnly } = options;  // previewOnly 为 true 时只预览不更新 sequence
  try {
    // 1. 加载序列配置(获取 prefix/separator/padding)
    const { data: seq } = await CLOUD.client.from('site_order_sequences').select('*').eq('site', site).single();
    if (!seq) throw new Error('未配置 ' + site + ' 的编号规则,请联系主管在数据库 site_order_sequences 表中添加');
    
    const prefix = seq.prefix || site;
    const separator = seq.separator || '-';
    const padding = seq.padding || 4;
    
    // 2. 扫描历史最大编号(从多个表收集)
    let maxNo = seq.current_no || 0;
    
    // 2a. 扫描 offline_orders
    try {
      const { data: offlineOrders } = await CLOUD.client.from('offline_orders').select('order_no').eq('site', site);
      if (offlineOrders && offlineOrders.length > 0) {
        offlineOrders.forEach(o => {
          if (!o.order_no) return;
          // 解析订单编号:RD0091 / VKA-0756 / DC0023 等
          // 匹配前缀 + (可选分隔符) + 数字
          const m = o.order_no.match(new RegExp('^' + prefix + (separator || '') + '?(\\d+)$'));
          if (m) {
            const n = parseInt(m[1], 10);
            if (!isNaN(n) && n > maxNo) maxNo = n;
          }
        });
      }
    } catch(e) {
      console.warn('扫描 offline_orders 失败:', e);
    }
    
    // 2b. 扫描 workspace_records (客服跟进中可能存了订单号在 orderRef 字段)
    try {
      const { data: csRecords } = await CLOUD.client.from('workspace_records')
        .select('orderRef').not('orderRef', 'is', null).limit(2000);
      if (csRecords) {
        csRecords.forEach(r => {
          if (!r.orderRef) return;
          // orderRef 可能含多个,用空格/逗号分隔
          const tokens = r.orderRef.split(/[\s,;、；，]+/);
          tokens.forEach(t => {
            const m = t.match(new RegExp('^' + prefix + (separator || '') + '?(\\d+)$'));
            if (m) {
              const n = parseInt(m[1], 10);
              if (!isNaN(n) && n > maxNo) maxNo = n;
            }
          });
        });
      }
    } catch(e) {
      console.warn('扫描 workspace_records 失败:', e);
    }
    
    // 2c. 扫描其他表 (aftersales/refills/refunds/chargebacks)
    for (const tbl of ['aftersales', 'refills', 'refunds', 'chargebacks']) {
      try {
        const { data: rows } = await CLOUD.client.from(tbl).select('order_no, order_ref');
        if (rows) {
          rows.forEach(r => {
            const candidate = r.order_no || r.order_ref;
            if (!candidate) return;
            const m = candidate.match(new RegExp('^' + prefix + (separator || '') + '?(\\d+)$'));
            if (m) {
              const n = parseInt(m[1], 10);
              if (!isNaN(n) && n > maxNo) maxNo = n;
            }
          });
        }
      } catch {}
    }
    
    // 3. 生成新编号
    const newNo = maxNo + 1;
    const padded = String(newNo).padStart(padding, '0');
    const orderNo = prefix + separator + padded;
    
    // 4. 更新 sequence(预览模式不更新)
    if (!previewOnly) {
      await CLOUD.client.from('site_order_sequences').update({
        current_no: newNo, updated_at: new Date().toISOString()
      }).eq('site', site);
    }
    
    return { orderNo, maxNo, newNo, scanned: true };
  } catch(e) {
    console.error('订单编号生成失败:', e);
    throw e;
  }
};

// 生成跟单发群消息(自动化客服 Yulia 那种格式)
const generateDispatchText = (order, productList) => {
  const lines = [];
  const country = order.ship_to_country || '';
  const city = order.ship_to_city || '';
  
  lines.push(`delivery to the final destination${city || country ? ' - ' + [city, country].filter(Boolean).join(', ') : ''}:`);
  lines.push('');
  lines.push('Address:');
  if (order.ship_to_address) lines.push(order.ship_to_address + ',');
  if (city || order.ship_to_state) lines.push([city, order.ship_to_state].filter(Boolean).join(', ') + (order.ship_to_country ? ',' : ''));
  if (order.ship_to_country) lines.push(order.ship_to_country);
  if (order.ship_to_zip) lines.push(order.ship_to_zip);
  if (order.ship_to_name) lines.push('');
  if (order.ship_to_name) lines.push(`Contact Person : ${order.ship_to_name}`);
  if (order.ship_to_phone) lines.push(order.ship_to_phone);
  lines.push('');
  lines.push(`${order.order_no} 可以下单`);
  
  if (productList && productList.length > 0) {
    lines.push('');
    lines.push('产品清单:');
    productList.forEach(p => {
      lines.push(`- ${p.sku || ''} ${p.name || ''} x ${p.qty || 1}`);
    });
  }
  
  return lines.join('\n');
};

// ============================================================
// 🚨 拒付提醒横幅 - 顶部红色警告(7/3/1 天 + 逾期)
// ============================================================
const ChargebackReminderBanner = ({ user, employees, onJumpTo }) => {
  const [urgent, setUrgent] = useState([]);
  const [dismissed, setDismissed] = useState(() => {
    try { return new Set(JSON.parse(sessionStorage.getItem('cb_banner_dismissed') || '[]')); }
    catch { return new Set(); }
  });
  const [owners, setOwners] = useState({ user_ids: [], user_names: [] });
  
  // 拒付专人配置 + 数据
  const load = async () => {
    if (!CLOUD.client) return;  // 🆕 云未初始化时直接退出,避免 null 错误
    try {
      const { data: settingRow } = await CLOUD.client.from('system_settings').select('*').eq('key', 'chargeback_owners').single();
      const config = settingRow?.value || { user_ids:[], user_names:[] };
      setOwners(config);
      
      const list = await CLOUD.list('chargebacks', { order:{col:'deadline', asc:true}, limit:500 });
      const live = (list || []).filter(c => !c.deleted && c.status !== 'won' && c.status !== 'lost' && c.status !== 'closed');
      
      // 只显示与当前用户相关的(负责人 / 主管 / 创建人)
      const isAdmin = user.role === 'admin' || user.role === 'super_admin';
      const isOwner = (config.user_ids || []).includes(user.id);
      
      const filtered = live.filter(c => {
        const urgency = getChargebackUrgency(c);
        if (!urgency) return false;
        if (urgency.level === 'normal') return false;
        // 主管 + 拒付专人看所有 · 其他人只看自己创建/自己负责的
        if (isAdmin || isOwner) return true;
        if ((c.assigned_to || []).includes(user.id)) return true;
        if (c.created_by === user.id) return true;
        return false;
      });
      setUrgent(filtered.sort((a, b) => (a.deadline || '').localeCompare(b.deadline || '')));
    } catch(e) { console.warn('拒付提醒加载失败', e); }
  };
  
  useEffect(() => {
    load();
    const t = setInterval(load, 5 * 60 * 1000);  // 5 分钟自动刷新
    return () => clearInterval(t);
  }, [user.id]);
  
  // 桌面通知(每天最多一次)
  useEffect(() => {
    if (Notification?.permission !== 'granted') return;
    const today = new Date().toISOString().slice(0,10);
    const notifKey = `cb_notif_${user.id}_${today}`;
    if (sessionStorage.getItem(notifKey)) return;
    
    const criticalOnes = urgent.filter(c => ['overdue','today','critical'].includes(getChargebackUrgency(c)?.level));
    if (criticalOnes.length > 0) {
      try {
        new Notification('⚠️ 紧急拒付提醒', {
          body: `${criticalOnes.length} 个拒付即将到期/已逾期,请立即处理!`,
          icon: '/favicon.ico',
          tag: 'chargeback-urgent',
          requireInteraction: true,
        });
        sessionStorage.setItem(notifKey, '1');
      } catch {}
    }
  }, [urgent.length, user.id]);
  
  const visible = urgent.filter(c => !dismissed.has(c.id));
  if (visible.length === 0) return null;
  
  const dismissOne = (id) => {
    const next = new Set(dismissed); next.add(id);
    setDismissed(next);
    try { sessionStorage.setItem('cb_banner_dismissed', JSON.stringify([...next])); } catch {}
  };
  
  const top3 = visible.slice(0, 3);
  
  return (
    <div style={{display:'flex', flexDirection:'column', gap:6, marginBottom:12}}>
      {top3.map(cb => {
        const u = getChargebackUrgency(cb);
        if (!u) return null;
        const isBlink = u.level === 'today' || u.level === 'critical' || u.level === 'overdue';
        return (
          <div key={cb.id} className={isBlink ? 'pulse-soft' : ''}
            style={{
              padding:'10px 14px', borderRadius:10,
              background: u.bg, border:`2px solid ${u.color}`,
              display:'flex', alignItems:'center', gap:10, flexWrap:'wrap',
            }}>
            <span style={{fontSize:18}}>{u.level === 'overdue' ? '🔥' : '⚠️'}</span>
            <div style={{flex:1, minWidth:200}}>
              <div style={{fontSize:13, fontWeight:700, color: u.color}}>
                {u.label} · 拒付 {cb.order_no} · {cb.customer_email || cb.customer_name || '?'}
              </div>
              <div style={{fontSize:11, color: u.color, opacity:.85, marginTop:2}}>
                💰 {cb.currency || 'USD'} {cb.amount || 0} · {cb.platform || ''} · 截止 {cb.deadline}
                {(cb.assigned_to_names || []).length > 0 && ` · 👥 ${cb.assigned_to_names.join('/')}`}
              </div>
            </div>
            <button onClick={() => onJumpTo && onJumpTo(cb)}
              style={{padding:'6px 14px', background: u.color, color:'white', border:'none', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}>
              立即处理 →
            </button>
            <button onClick={() => dismissOne(cb.id)} title="本次会话暂时忽略"
              style={{padding:'4px 8px', background:'transparent', border:`1px solid ${u.color}`, color: u.color, borderRadius:6, cursor:'pointer', fontSize:11, fontFamily:'inherit'}}>
              ×
            </button>
          </div>
        );
      })}
      {visible.length > 3 && (
        <div style={{textAlign:'center', fontSize:11, color:'#991b1b', fontWeight:600}}>
          + 还有 {visible.length - 3} 条拒付需要处理
        </div>
      )}
    </div>
  );
};


// ============================================================
// 🚨 拒付管理模块
// ============================================================
// ============================================================
// 🆕 TimeRangeFilter - 通用时间范围筛选组件
// 升级:支持传入 records 自动统计每个范围的条数 + 显示筛选反馈
// ============================================================
const TimeRangeFilter = ({ value, onChange, customStart, customEnd, onCustomChange, label, records, dateField }) => {
  // 🆕 计算每个时间范围匹配的条数
  const counts = useMemo(() => {
    if (!records || !Array.isArray(records)) return null;
    const c = { all: records.length };
    ['3d', '7d', '14d', '30d'].forEach(k => {
      c[k] = filterByTimeRange(records, k, null, null, dateField).length;
    });
    return c;
  }, [records, dateField]);
  
  return (
    <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
      <span style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, whiteSpace:'nowrap'}}>
        {label || '🕓 超期筛选:'}
      </span>
      {[
        { key:'all',  label:'全部'           },
        { key:'3d',   label:'超 3 天未处理'  },
        { key:'7d',   label:'超 7 天未处理'  },
        { key:'14d',  label:'超 14 天未处理' },
        { key:'30d',  label:'超 30 天未处理' },
        { key:'custom', label:'📆 自定义日期' },
      ].map(t => {
        const cnt = counts ? counts[t.key] : null;
        const isActive = value === t.key;
        return (
          <button key={t.key} onClick={() => onChange(t.key)}
            style={{
              padding:'4px 11px', borderRadius:14, fontSize:11, cursor:'pointer', fontFamily:'inherit',
              border:'1px solid ' + (isActive ? 'var(--accent)' : 'var(--line)'),
              background: isActive ? 'var(--accent)' : 'white',
              color: isActive ? 'white' : 'var(--ink-2)',
              fontWeight: isActive ? 600 : 400,
              whiteSpace:'nowrap',
              display:'inline-flex', alignItems:'center', gap:4,
            }}>
            {t.label}
            {cnt !== null && cnt !== undefined && t.key !== 'custom' && (
              <span style={{
                padding:'1px 6px', borderRadius:8, fontSize:10, fontWeight:700,
                background: isActive ? 'rgba(255,255,255,.25)' : (cnt > 0 ? '#fef3c7' : '#f5f5f7'),
                color: isActive ? 'white' : (cnt > 0 ? '#854d0e' : 'var(--ink-4)'),
                minWidth:18, textAlign:'center',
              }}>{cnt}</span>
            )}
          </button>
        );
      })}
      {value === 'custom' && onCustomChange && (
        <div style={{display:'flex', gap:6, alignItems:'center'}}>
          <input type="date" value={customStart || ''} onChange={e => onCustomChange({ start: e.target.value, end: customEnd })}
            style={{padding:'4px 8px', fontSize:11, border:'1px solid var(--line)', borderRadius:6, fontFamily:'inherit'}} />
          <span style={{color:'var(--ink-4)', fontSize:11}}>→</span>
          <input type="date" value={customEnd || ''} onChange={e => onCustomChange({ start: customStart, end: e.target.value })}
            style={{padding:'4px 8px', fontSize:11, border:'1px solid var(--line)', borderRadius:6, fontFamily:'inherit'}} />
        </div>
      )}
    </div>
  );
};

// 🛡 全局时间筛选 - 语义: "超 N 天未处理"
// 🆕 fix15: filterByDateRange — 按"创建/更新在范围内"筛选 (语义跟 cross-dept / 反馈中心一致)
// 配合 AdvancedDateFilter 用 · 区别于上面的 filterByTimeRange("超 N 天未跟进"的老语义)
// 用法: filterByDateRange(list, dateFilter, 'created_at')
const filterByDateRange = (list, dateFilter, dateField) => {
  if (!list || list.length === 0) return list;
  if (!dateFilter || dateFilter.kind === 'all') return list;
  const range = getDateRange(dateFilter);
  if (range.start <= 0 && range.end >= Infinity) return list;
  return list.filter(r => {
    // 优先使用传入的 dateField,再 fallback 到常见字段
    const candidates = [r[dateField], r.created_at_ms, r.updated_at, r.created_at, r.createdAt, r.date]
      .filter(v => v !== undefined && v !== null && v !== '');
    if (candidates.length === 0) return true;  // 无日期字段 — 包含
    let ts = 0;
    for (const c of candidates) {
      let t = 0;
      if (typeof c === 'number') t = c;
      else if (typeof c === 'string') t = Date.parse(c) || 0;
      else if (c instanceof Date) t = c.getTime();
      if (t > ts) ts = t;
    }
    return ts >= range.start && ts < range.end;
  });
};

// ════════════════════════════════════════════════════════════════════
// 🪄 智能地址解析器 (fix16) — 粘贴整段地址,自动识别 姓名/电话/街道/城市/州/邮编/国家
// 支持: 美国 / 加拿大 / 英国 / 欧洲 / 澳洲 / 新西兰 / 亚洲 等主流格式
// 用法: const parsed = parseAddressText(rawText);
//       parsed = { name, phone, street, city, state, zip, country }
// 任何字段都可能为空 - 用户可手动补齐
// ════════════════════════════════════════════════════════════════════
const COUNTRY_MAP = {
  // 英文名 -> 标准化国家名
  'usa': 'United States', 'us': 'United States', 'u.s.': 'United States', 'u.s.a': 'United States',
  'america': 'United States', 'united states': 'United States', 'united states of america': 'United States',
  'canada': 'Canada', 'ca': 'Canada',
  'uk': 'United Kingdom', 'u.k.': 'United Kingdom', 'united kingdom': 'United Kingdom',
  'england': 'United Kingdom', 'britain': 'United Kingdom', 'great britain': 'United Kingdom',
  'scotland': 'United Kingdom', 'wales': 'United Kingdom', 'northern ireland': 'United Kingdom',
  'australia': 'Australia', 'au': 'Australia', 'aus': 'Australia',
  'new zealand': 'New Zealand', 'nz': 'New Zealand',
  'germany': 'Germany', 'deutschland': 'Germany', 'de': 'Germany',
  'france': 'France', 'fr': 'France',
  'italy': 'Italy', 'italia': 'Italy', 'it': 'Italy',
  'spain': 'Spain', 'españa': 'Spain', 'es': 'Spain',
  'netherlands': 'Netherlands', 'holland': 'Netherlands', 'nederland': 'Netherlands', 'nl': 'Netherlands',
  'belgium': 'Belgium', 'be': 'Belgium',
  'switzerland': 'Switzerland', 'ch': 'Switzerland',
  'austria': 'Austria', 'at': 'Austria',
  'sweden': 'Sweden', 'se': 'Sweden',
  'norway': 'Norway', 'no': 'Norway',
  'denmark': 'Denmark', 'dk': 'Denmark',
  'finland': 'Finland', 'fi': 'Finland',
  'poland': 'Poland', 'polska': 'Poland', 'pl': 'Poland',
  'ireland': 'Ireland', 'ie': 'Ireland',
  'portugal': 'Portugal', 'pt': 'Portugal',
  'greece': 'Greece', 'gr': 'Greece',
  'czech republic': 'Czech Republic', 'czechia': 'Czech Republic', 'cz': 'Czech Republic',
  'japan': 'Japan', 'jp': 'Japan',
  'south korea': 'South Korea', 'korea': 'South Korea', 'kr': 'South Korea',
  'china': 'China', 'cn': 'China',
  'hong kong': 'Hong Kong', 'hk': 'Hong Kong',
  'singapore': 'Singapore', 'sg': 'Singapore',
  'mexico': 'Mexico', 'méxico': 'Mexico', 'mx': 'Mexico',
  'brazil': 'Brazil', 'brasil': 'Brazil', 'br': 'Brazil',
  'argentina': 'Argentina', 'ar': 'Argentina',
  'chile': 'Chile', 'cl': 'Chile',
  'india': 'India', 'in': 'India',
  'south africa': 'South Africa', 'za': 'South Africa',
  'israel': 'Israel', 'il': 'Israel',
  'uae': 'United Arab Emirates', 'united arab emirates': 'United Arab Emirates', 'ae': 'United Arab Emirates',
  'saudi arabia': 'Saudi Arabia', 'sa': 'Saudi Arabia',
  'turkey': 'Turkey', 'türkiye': 'Turkey', 'tr': 'Turkey',
  'russia': 'Russia', 'ru': 'Russia',
  'ukraine': 'Ukraine', 'ua': 'Ukraine',
  'latvia': 'Latvia', 'lv': 'Latvia',
  'lithuania': 'Lithuania', 'lt': 'Lithuania',
  'estonia': 'Estonia', 'ee': 'Estonia',
};
const US_STATES = {
  'AL':'Alabama','AK':'Alaska','AZ':'Arizona','AR':'Arkansas','CA':'California',
  'CO':'Colorado','CT':'Connecticut','DE':'Delaware','FL':'Florida','GA':'Georgia',
  'HI':'Hawaii','ID':'Idaho','IL':'Illinois','IN':'Indiana','IA':'Iowa',
  'KS':'Kansas','KY':'Kentucky','LA':'Louisiana','ME':'Maine','MD':'Maryland',
  'MA':'Massachusetts','MI':'Michigan','MN':'Minnesota','MS':'Mississippi','MO':'Missouri',
  'MT':'Montana','NE':'Nebraska','NV':'Nevada','NH':'New Hampshire','NJ':'New Jersey',
  'NM':'New Mexico','NY':'New York','NC':'North Carolina','ND':'North Dakota','OH':'Ohio',
  'OK':'Oklahoma','OR':'Oregon','PA':'Pennsylvania','RI':'Rhode Island','SC':'South Carolina',
  'SD':'South Dakota','TN':'Tennessee','TX':'Texas','UT':'Utah','VT':'Vermont',
  'VA':'Virginia','WA':'Washington','WV':'West Virginia','WI':'Wisconsin','WY':'Wyoming',
  'DC':'District of Columbia','PR':'Puerto Rico'
};
const CA_PROVINCES = { 'AB':'Alberta','BC':'British Columbia','MB':'Manitoba','NB':'New Brunswick','NL':'Newfoundland and Labrador','NS':'Nova Scotia','NT':'Northwest Territories','NU':'Nunavut','ON':'Ontario','PE':'Prince Edward Island','QC':'Quebec','SK':'Saskatchewan','YT':'Yukon' };
const AU_STATES = { 'NSW':'New South Wales','VIC':'Victoria','QLD':'Queensland','WA':'Western Australia','SA':'South Australia','TAS':'Tasmania','ACT':'Australian Capital Territory','NT':'Northern Territory' };

function parseAddressText(text) {
  if (!text || typeof text !== 'string') return {};
  // 标准化: 去 label 前缀 / 拆行 / 去空
  const cleaned = text
    .replace(/^\s*(name|姓名|recipient|联系人|attn|attention)\s*[::]\s*/gim, '')
    .replace(/^\s*(phone|tel|mobile|电话|手机|联系电话)\s*[::]\s*/gim, '')
    .replace(/^\s*(address|地址|street|street address)\s*[::]\s*/gim, '')
    .replace(/^\s*(city|城市)\s*[::]\s*/gim, '')
    .replace(/^\s*(state|province|州|省)\s*[::]\s*/gim, '')
    .replace(/^\s*(zip|postcode|postal code|邮编|邮政编码)\s*[::]\s*/gim, '')
    .replace(/^\s*(country|国家)\s*[::]\s*/gim, '');
  let lines = cleaned.split(/[\n\r]+/).map(l => l.trim()).filter(Boolean);
  // 处理逗号分隔单行的情况(常见于客户复制 google maps)
  if (lines.length === 1 && lines[0].includes(',')) {
    lines = lines[0].split(',').map(l => l.trim()).filter(Boolean);
  }
  if (lines.length === 0) return {};

  const result = { name:'', phone:'', street:'', city:'', state:'', zip:'', country:'' };
  let remaining = [...lines];

  // 1) 电话 - 7+ 数字, 可有 + - ( ) 空格 . 但纯数字组合
  const phoneIdx = remaining.findIndex(l => {
    const digits = l.replace(/[\s+()\-.x扩分机]/gi, '').replace(/[^\d]/g, '');
    if (digits.length < 7 || digits.length > 16) return false;
    // 要求至少 50% 是数字才算电话(避免错把地址当电话)
    const digitRatio = digits.length / l.length;
    return digitRatio > 0.5;
  });
  if (phoneIdx >= 0) {
    result.phone = remaining[phoneIdx].trim();
    remaining.splice(phoneIdx, 1);
  }

  // 2) 国家 - 通常在最后,匹配国家名单
  for (let i = remaining.length - 1; i >= 0; i--) {
    const lower = remaining[i].toLowerCase().trim().replace(/[.,;]$/, '');
    if (COUNTRY_MAP[lower]) {
      result.country = COUNTRY_MAP[lower];
      remaining.splice(i, 1);
      break;
    }
  }

  // 3) 城市+州+邮编 - 找形如 "City, ST ZIP" / "ZIP City" 的行
  // US/CA 模式: "Anytown, CA 90210" 或 "Toronto, ON M5V 3A8"
  for (let i = remaining.length - 1; i >= 0; i--) {
    const line = remaining[i];
    // US 模式: City, STATE ZIP (5-digit 或 5+4)
    let m = line.match(/^(.+?),\s*([A-Z]{2})\s+(\d{5}(?:-\d{4})?)\s*$/);
    if (m) {
      result.city = m[1].trim();
      result.state = m[2];
      result.zip = m[3];
      if (!result.country && US_STATES[m[2]]) result.country = 'United States';
      remaining.splice(i, 1);
      break;
    }
    // CA 模式: City, ON M5V 3A8
    m = line.match(/^(.+?),\s*([A-Z]{2})\s+([A-Z]\d[A-Z]\s*\d[A-Z]\d)\s*$/i);
    if (m) {
      result.city = m[1].trim();
      result.state = m[2].toUpperCase();
      result.zip = m[3].toUpperCase();
      if (!result.country && CA_PROVINCES[m[2].toUpperCase()]) result.country = 'Canada';
      remaining.splice(i, 1);
      break;
    }
    // AU 模式: Melbourne VIC 3000  (no comma)
    m = line.match(/^(.+?)\s+(NSW|VIC|QLD|WA|SA|TAS|ACT|NT)\s+(\d{4})\s*$/i);
    if (m) {
      result.city = m[1].trim();
      result.state = m[2].toUpperCase();
      result.zip = m[3];
      if (!result.country) result.country = 'Australia';
      remaining.splice(i, 1);
      break;
    }
    // UK 模式: City, POSTCODE (如 London SW1A 2AA)
    m = line.match(/^(.+?)\s+([A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2})\s*$/i);
    if (m) {
      result.city = m[1].trim();
      result.zip = m[2].toUpperCase().replace(/\s+/g, ' ');
      if (!result.country) result.country = 'United Kingdom';
      remaining.splice(i, 1);
      break;
    }
    // 欧洲模式: PostalCode CityName 如 "10115 Berlin" / "75001 Paris" / "1011 Amsterdam"
    m = line.match(/^(\d{4,6}(?:[\s-]\d+)?)\s+(.+)$/);
    if (m && m[2].length >= 2 && !/^\d/.test(m[2].trim().charAt(0))) {
      result.zip = m[1].trim();
      result.city = m[2].trim();
      remaining.splice(i, 1);
      break;
    }
    // 拉脱维亚类: City LV-2015
    m = line.match(/^(.+?),?\s+([A-Z]{1,3}-\d{3,5})\s*$/);
    if (m) {
      result.city = m[1].trim();
      result.zip = m[2];
      remaining.splice(i, 1);
      break;
    }
    // 通用回退: City, ZIP   或   City ZIP
    m = line.match(/^(.+?)[,\s]+(\d{4,6})\s*$/);
    if (m && /[a-zA-Z\u4e00-\u9fa5]/.test(m[1])) {
      result.city = m[1].trim().replace(/,$/, '');
      result.zip = m[2];
      remaining.splice(i, 1);
      break;
    }
  }

  // 4) 剩余行: 第一行通常是名字,后面是街道
  if (remaining.length > 0) {
    // 如果第一行看起来像街道(以数字开头或包含 street/road/avenue 等),那名字可能缺失
    const first = remaining[0];
    const looksLikeStreet = /^\d/.test(first) || 
      /\b(st|street|rd|road|ave|avenue|blvd|boulevard|lane|ln|drive|dr|way|court|ct|place|pl|square|sq|plaza|plz|alley|terrace|highway|hwy|route|rt|路|街|道|巷|号|室|栋|号楼|大道|街道)\b/i.test(first) ||
      /^(unit|apt|apartment|suite|ste|室|房|楼|号)/i.test(first);
    
    if (looksLikeStreet) {
      result.street = remaining.join(', ');
    } else {
      // 第一行是名字
      result.name = remaining[0];
      if (remaining.length > 1) {
        result.street = remaining.slice(1).join(', ');
      }
    }
  }
  return result;
}

// 全局暴露用于调试
if (typeof window !== 'undefined') {
  window.__parseAddress = parseAddressText;
}

// 用法: filterByTimeRange(records, '7d', null, null, 'date')
//       筛出"上次更新时间已超过 7 天"的记录(陈年未跟进)
// custom 模式: 筛出"创建/更新时间在自定义日期范围内"
const filterByTimeRange = (list, timeFilter, customStart, customEnd, dateField) => {
  if (!list || list.length === 0) return list;
  if (timeFilter === 'all') return list;
  const today = todayISO();
  
  // 自定义日期范围:保留旧语义(范围内创建/更新的)
  if (timeFilter === 'custom') {
    if (!customStart) return list;
    const cutoffStart = customStart;
    const cutoffEnd = customEnd || today;
    const tryFields = [dateField, 'updated_at', 'created_at', 'createdAt', 'date', 'created'].filter(Boolean);
    return list.filter(r => {
      let raw = null;
      for (const f of tryFields) { if (r[f]) { raw = r[f]; break; } }
      if (!raw) return true;
      let dateStr;
      if (typeof raw === 'string') dateStr = raw.slice(0, 10);
      else if (raw instanceof Date) dateStr = raw.toISOString().slice(0, 10);
      else if (typeof raw === 'number') dateStr = new Date(raw).toISOString().slice(0, 10);
      else return true;
      return dateStr >= cutoffStart && dateStr <= cutoffEnd;
    });
  }
  
  // "超 N 天未处理" 语义
  let staleDays = null;
  if (timeFilter === '3d')   staleDays = 3;
  else if (timeFilter === '7d')   staleDays = 7;
  else if (timeFilter === '14d')  staleDays = 14;
  else if (timeFilter === '30d')  staleDays = 30;
  if (staleDays === null) return list;
  
  // 阈值: 最后处理时间 <= cutoff 的算"超 N 天未处理"
  const cutoff = addDays(today, -staleDays);
  
  return list.filter(r => {
    // 优先级:updated_at(最后修改) > 传入的 dateField > created_at > date
    // 取最新的一个(代表"最后一次被处理的时间")
    const candidates = [r.updated_at, r[dateField], r.created_at, r.createdAt, r.date]
      .filter(Boolean);
    if (candidates.length === 0) return false;  // 无日期 → 不算超期(因为不知道何时建的)
    
    // 取最新的一次更新时间
    let latest = '';
    for (const c of candidates) {
      const cs = typeof c === 'string' ? c.slice(0, 19) : 
                 (c instanceof Date ? c.toISOString().slice(0, 19) :
                  (typeof c === 'number' ? new Date(c).toISOString().slice(0, 19) : ''));
      if (cs > latest) latest = cs;
    }
    if (!latest) return false;
    
    const latestDate = latest.slice(0, 10);
    return latestDate <= cutoff;  // 超 N 天没被处理过
  });
};

// 🔍 全局调试工具(在浏览器控制台输入 window.__debugTimeFilter(records,'7d','date'))
if (typeof window !== 'undefined') {
  window.__debugTimeFilter = (list, timeFilter, dateField) => {
    const today = todayISO();
    let staleDays = null;
    if (timeFilter === '3d') staleDays = 3;
    else if (timeFilter === '7d') staleDays = 7;
    else if (timeFilter === '14d') staleDays = 14;
    else if (timeFilter === '30d') staleDays = 30;
    const cutoff = staleDays ? addDays(today, -staleDays) : null;
    
    console.log(`🔍 超期筛选诊断:
  今天: ${today}
  筛选: "超 ${staleDays} 天未处理" (阈值: 最后处理 ≤ ${cutoff})
  字段: ${dateField || '默认顺序'}
  输入总数: ${list?.length || 0}`);
    
    if (list && list.length > 0) {
      const sample = list.slice(0, 8).map(r => {
        const candidates = [r.updated_at, r[dateField], r.created_at, r.createdAt, r.date].filter(Boolean);
        let latest = '';
        for (const c of candidates) {
          const cs = typeof c === 'string' ? c.slice(0, 19) : '';
          if (cs > latest) latest = cs;
        }
        const days = latest ? Math.floor((new Date(today) - new Date(latest.slice(0,10))) / 86400000) : null;
        return {
          id: r.id, 
          latest: latest.slice(0, 10) || '(无日期)',
          天数: days === null ? '?' : days + ' 天',
          匹配: cutoff && latest ? (latest.slice(0,10) <= cutoff ? '✓ 超 ' + staleDays + ' 天' : '✗') : '?',
        };
      });
      console.table(sample);
    }
    const filtered = filterByTimeRange(list, timeFilter, null, null, dateField);
    console.log(`  筛选后: ${filtered.length} 条(超 ${staleDays} 天未处理)`);
    return filtered;
  };
}


// ============================================================
// 🆕 WorkSnapshotPanel - 今日工作快照(上班第一眼看到的醒目卡片)
// 涉及: 客服跟进逾期 / 拒付紧急 / 线下单待发货 / 定制无进展 / 实拍无回复 / 退款待审
// ============================================================
const WorkSnapshotPanel = ({ user, employees, records, onJumpTo }) => {
  const [data, setData] = useState({ chargebacks:[], offline:[], custom:[], photo:[], refunds:[], aftersales:[], refills:[] });
  const [thresholds, setThresholds] = useState({
    cs_followup: 7, chargeback: 3, offline_order: 5, custom_inquiry: 7, photo_verif: 5,
    aftersale: 14, refill: 14, refund: 7,
  });
  const [loading, setLoading] = useState(true);
  
  const isAdminRole = user && (user.role === 'admin' || user.role === 'super_admin');
  
  const load = async () => {
    setLoading(true);
    try {
      // 加载阈值配置
      try {
        const { data: th } = await CLOUD.client.from('system_settings').select('*').eq('key', 'alert_thresholds').single();
        if (th?.value) setThresholds(prev => ({ ...prev, ...th.value }));
      } catch {}
      
      const [cb, oo, ci, pv, rfd, af, rf] = await Promise.all([
        CLOUD.list('chargebacks', { limit:300 }),
        CLOUD.list('offline_orders', { limit:300 }),
        CLOUD.list('custom_inquiries', { limit:300 }),
        CLOUD.list('photo_verifications', { limit:300 }),
        CLOUD.list('refunds', { limit:300 }),
        CLOUD.list('aftersales', { limit:300 }),
        CLOUD.list('refills', { limit:300 }),
      ]);
      setData({
        chargebacks: (cb || []).filter(x => !x.deleted),
        offline: (oo || []).filter(x => !x.deleted),
        custom: (ci || []).filter(x => !x.deleted),
        photo: (pv || []).filter(x => !x.deleted),
        refunds: (rfd || []).filter(x => !x.deleted),
        aftersales: (af || []).filter(x => !x.deleted),
        refills: (rf || []).filter(x => !x.deleted),
      });
    } catch(e) { console.warn('快照加载失败', e); }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  
  // 计算"我"的或"全员"的未完成工作(按超期天数)
  const stats = useMemo(() => {
    const today = todayISO();
    const isMine = (r, fields = ['created_by', 'ownerId', 'owner_id']) => {
      if (isAdminRole) return true;  // 主管看全部
      return fields.some(f => r[f] === user.id);
    };
    
    // 客服跟进 - 超 N 天未解决
    const csOverdue = (records || []).filter(r => 
      !r.deleted && isRecordMeaningful(r) &&
      r.status !== 'resolved' && r.status !== 'transferred' &&
      r.date && r.date < addDays(today, -thresholds.cs_followup) &&
      isMine(r)
    );
    // 今日到期跟进
    const csDueToday = (records || []).filter(r =>
      !r.deleted && isMine(r) &&
      r.status !== 'resolved' && r.nextFollowUp === today
    );
    
    // 拒付 - 7天内截止 或 已逾期
    const cbUrgent = data.chargebacks.filter(c => 
      isMine(c, ['created_by']) &&
      !['won','lost','closed'].includes(c.status)
    ).filter(c => {
      const u = getChargebackUrgency(c);
      return u && ['overdue','today','critical','urgent'].includes(u.level);
    });
    
    // 线下单 - 待付款/已付款超 N 天未发货
    const offlineStuck = data.offline.filter(o =>
      isMine(o) &&
      ['pending_payment','paid'].includes(o.status) &&
      o.created_at && o.created_at.slice(0,10) < addDays(today, -thresholds.offline_order)
    );
    
    // 定制咨询 - 询单/出图/报价 阶段超 N 天无进展
    const customStuck = data.custom.filter(c =>
      isMine(c) &&
      ['inquiry','sketch','quoted'].includes(c.stage) &&
      c.updated_at && c.updated_at.slice(0,10) < addDays(today, -thresholds.custom_inquiry)
    );
    
    // 实拍核实 - 待联系/已发邮件 超 N 天无回复
    const photoStuck = data.photo.filter(p =>
      isMine(p) &&
      ['pending_contact','emailed'].includes(p.status) &&
      p.created_at && p.created_at.slice(0,10) < addDays(today, -thresholds.photo_verif)
    );
    
    // 退款 - 待审超 N 天
    const refundStuck = data.refunds.filter(r =>
      isMine(r) &&
      r.status === 'pending' &&
      r.created_at && r.created_at.slice(0,10) < addDays(today, -thresholds.refund)
    );
    
    // 🆕 fix9: 退款处理人专属视图 — 显示所有(不限于"我创建的")待审/待完成的退款
    // 让 Miya / Nicole / Yulia 能在第一眼看到今天有多少要处理
    const isRefundProcessor = typeof window !== 'undefined' && window.__canProcessRefund?.(user);
    const refundPendingForProcessor = isRefundProcessor 
      ? data.refunds.filter(r => r.status === 'pending')   // 全员的待审
      : [];
    const refundApprovedForProcessor = isRefundProcessor
      ? data.refunds.filter(r => r.status === 'approved')  // 全员的待完成(已批准但还没标记完成)
      : [];
    
    // 售后 - 未完成超 N 天
    const aftersaleStuck = data.aftersales.filter(a =>
      isMine(a) &&
      a.status !== 'completed' && a.status !== 'closed' &&
      a.created_at && a.created_at.slice(0,10) < addDays(today, -thresholds.aftersale)
    );
    
    // 补件 - 未完成超 N 天
    const refillStuck = data.refills.filter(r =>
      isMine(r) &&
      r.status !== 'completed' &&
      r.created_at && r.created_at.slice(0,10) < addDays(today, -thresholds.refill)
    );
    
    return { csOverdue, csDueToday, cbUrgent, offlineStuck, customStuck, photoStuck, refundStuck, aftersaleStuck, refillStuck,
      refundPendingForProcessor, refundApprovedForProcessor, isRefundProcessor };
  }, [data, records, thresholds, user, isAdminRole]);
  
  const totalAlerts = stats.csOverdue.length + stats.csDueToday.length + 
    stats.cbUrgent.length + stats.offlineStuck.length + stats.customStuck.length + 
    stats.photoStuck.length + stats.refundStuck.length + stats.aftersaleStuck.length + stats.refillStuck.length +
    stats.refundPendingForProcessor.length + stats.refundApprovedForProcessor.length;
  
  if (loading) return null;
  if (totalAlerts === 0) return null;  // 没有未完成 → 不显示
  
  const AlertCell = ({ icon, label, count, threshold, color, onClick, urgent }) => count === 0 ? null : (
    <div onClick={onClick}
      style={{
        padding:'10px 12px', background:'white',
        border:`2px solid ${color}`,
        borderRadius:10, cursor:'pointer',
        display:'flex', alignItems:'center', gap:10,
        transition:'all .15s',
        minWidth:0,
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 4px 14px ${color}30`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
      <div style={{fontSize:28, lineHeight:1, flexShrink:0}}>{icon}</div>
      <div style={{flex:1, minWidth:0}}>
        <div style={{display:'flex', alignItems:'baseline', gap:6}}>
          <span style={{fontSize:22, fontWeight:700, color, lineHeight:1}}>{count}</span>
          <span style={{fontSize:11, color:'var(--ink-3)'}}>条</span>
          {urgent && <span className="pulse-soft" style={{fontSize:9, padding:'1px 5px', background:'#dc2626', color:'white', borderRadius:6, fontWeight:700}}>急</span>}
        </div>
        <div style={{fontSize:11, color:'var(--ink-2)', fontWeight:500, marginTop:2}}>{label}</div>
        {threshold && <div style={{fontSize:10, color:'var(--ink-4)', marginTop:1}}>超 {threshold} 天未处理</div>}
      </div>
    </div>
  );
  
  return (
    <div className="paper rounded-2xl fade-in" style={{padding:14, marginBottom:14, background:'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)', border:'2px solid #fbbf24'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10, flexWrap:'wrap', gap:8}}>
        <div>
          <div className="font-display" style={{fontSize:16, fontWeight:700, color:'#78350f', display:'flex', alignItems:'center', gap:6}}>
            🔥 今日工作快照 · 待解决 {totalAlerts} 条
          </div>
          <div style={{fontSize:11, color:'#92400e', marginTop:2}}>
            {isAdminRole ? '👑 主管视角:全员未完成工作' : '👤 你的未完成工作'} · 点击任一卡片直接跳转
          </div>
        </div>
        {isAdminRole && (
          <button onClick={() => onJumpTo && onJumpTo('admin', { section: 'alert_thresholds' })}
            style={{padding:'4px 10px', background:'white', color:'#78350f', border:'1px solid #fbbf24', borderRadius:6, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
            ⚙ 调整阈值
          </button>
        )}
      </div>
      
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:8}}>
        {/* 🆕 fix9: 退款处理人专属卡片(Miya/Nicole/Yulia)— 显示全员的待退款,排在最前面 */}
        {stats.isRefundProcessor && stats.refundPendingForProcessor.length > 0 && (
          <AlertCell icon="💰" label="今天要审核的退款" count={stats.refundPendingForProcessor.length} color="#dc2626" urgent
            threshold="全员申请 · 你需处理"
            onClick={() => onJumpTo && onJumpTo('events')} />
        )}
        {stats.isRefundProcessor && stats.refundApprovedForProcessor.length > 0 && (
          <AlertCell icon="✅" label="今天要打款的退款" count={stats.refundApprovedForProcessor.length} color="#16a34a" urgent
            threshold="已审核 · 待你打款上传截图"
            onClick={() => onJumpTo && onJumpTo('events')} />
        )}
        <AlertCell icon="⏰" label="跟进逾期/今日到期" count={stats.csOverdue.length + stats.csDueToday.length} color="#dc2626"
          threshold={`超 ${thresholds.cs_followup} 天 / 今日`} urgent
          onClick={() => onJumpTo && onJumpTo('cs')} />
        <AlertCell icon="🚨" label="拒付紧急" count={stats.cbUrgent.length} color="#dc2626" urgent
          threshold="7 天内截止"
          onClick={() => onJumpTo && onJumpTo('chargebacks')} />
        <AlertCell icon="💳" label="线下单待发货" count={stats.offlineStuck.length} color="#0369a1"
          threshold={thresholds.offline_order}
          onClick={() => onJumpTo && onJumpTo('offline_orders')} />
        <AlertCell icon="🎨" label="定制无进展" count={stats.customStuck.length} color="#7c3aed"
          threshold={thresholds.custom_inquiry}
          onClick={() => onJumpTo && onJumpTo('custom_photo')} />
        <AlertCell icon="📸" label="实拍待回复" count={stats.photoStuck.length} color="#be185d"
          threshold={thresholds.photo_verif}
          onClick={() => onJumpTo && onJumpTo('custom_photo')} />
        <AlertCell icon="💰" label="我的退款待审" count={stats.refundStuck.length} color="#d97706"
          threshold={thresholds.refund}
          onClick={() => onJumpTo && onJumpTo('events')} />
        <AlertCell icon="🔧" label="售后挂起" count={stats.aftersaleStuck.length} color="#ea580c"
          threshold={thresholds.aftersale}
          onClick={() => onJumpTo && onJumpTo('events')} />
        <AlertCell icon="📦" label="补件挂起" count={stats.refillStuck.length} color="#0891b2"
          threshold={thresholds.refill}
          onClick={() => onJumpTo && onJumpTo('events')} />
      </div>
    </div>
  );
};
