// ════════════════════════════════════════════════════════════════════
// 📷 拍摄 + 任务 + 反馈 · fix28-79
// APP_VERSION: 2026.05.27-fix79
// ════════════════════════════════════════════════════════════════════


// ════════════════════════════════════════════════════════════════════
// 📌 任务分派模块 (fix19) — 临时任务派给某人,主管看是否处理
// 工作流: 创建者 → 派给 X → X 接手/标处理中 → 完成 · 主管全局可见 · Realtime 推送
// ════════════════════════════════════════════════════════════════════
const TASK_PRIORITIES = [
  { id:'urgent', label:'🚨 紧急', desc:'立刻办', color:'#dc2626', bg:'#fee2e2' },
  { id:'high',   label:'⚡ 重要', desc:'今天搞', color:'#d97706', bg:'#fef3c7' },
  { id:'normal', label:'· 普通', desc:'近期完成', color:'#86868b', bg:'#f5f5f7' },
  { id:'low',    label:'· 低',   desc:'有空再办', color:'#a8a8a8', bg:'#fafafa' },
];
const TASK_STATUSES = [
  { id:'pending',     label:'⏳ 待处理',  color:'#d97706', bg:'#fef3c7' },
  { id:'in_progress', label:'🔧 处理中',  color:'#0369a1', bg:'#dbeafe' },
  { id:'done',        label:'✅ 已完成',  color:'#15803d', bg:'#dcfce7' },
  { id:'blocked',     label:'⛔ 卡住',    color:'#dc2626', bg:'#fee2e2' },
  { id:'cancelled',   label:'❌ 已取消',  color:'#86868b', bg:'#f5f5f7' },
];
const findTask = (arr, id) => arr.find(x => x.id === id) || arr[0];

const TasksModule = ({ user, employees, toast }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [openId, setOpenId] = useState(null);
  const [tab, setTab] = useState('inbox');  // inbox / sent / overdue / all
  const [filterStatus, setFilterStatus] = useState('active');
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterAssignee, setFilterAssignee] = useState('all');
  const [dateFilter, setDateFilter] = useState({ kind:'all' });
  const [search, setSearch] = useState('');
  
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  const dateRange = useMemo(() => getDateRange(dateFilter), [dateFilter]);
  
  const load = async () => {
    setLoading(true);
    try {
      const list = await CLOUD.list('tasks', { order:{col:'created_at_ms', asc:false}, limit:500 });
      setTasks((list || []).filter(t => !t.deleted));
    } catch (e) { toast('❌ 加载任务失败: ' + (e.message || e)); }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);
  
  // Realtime 订阅 — 新任务派给我 / 我派的任务被更新都实时刷新
  useEffect(() => {
    if (!CLOUD.isOn || !CLOUD.supabase) return;
    let channel = null;
    try {
      channel = CLOUD.supabase
        .channel('tasks_' + user.id)
        .on('postgres_changes', { event:'*', schema:'public', table:'tasks' }, (payload) => {
          // 如果是新建,且派给当前用户 → 浏览器通知
          if (payload.eventType === 'INSERT' && payload.new && payload.new.assigned_to_id === user.id && payload.new.created_by !== user.id) {
            try {
              if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
                new Notification('📌 新任务派给你', { body: payload.new.title, icon: '/favicon.ico' });
              }
            } catch {}
            toast('📌 新任务: ' + (payload.new.title || ''));
          }
          load();
        })
        .subscribe();
    } catch (e) { console.warn('tasks realtime 订阅失败:', e); }
    return () => { try { if (channel) CLOUD.supabase.removeChannel(channel); } catch {} };
  }, [user.id]);
  
  // 各 tab 分组
  const tabFiltered = useMemo(() => {
    const isOverdue = (t) => {
      if (!t.due_date) return false;
      if (t.status === 'done' || t.status === 'cancelled') return false;
      return t.due_date < new Date().toISOString().slice(0, 10);
    };
    if (tab === 'inbox')   return tasks.filter(t => t.assigned_to_id === user.id);
    if (tab === 'sent')    return tasks.filter(t => t.created_by === user.id);
    if (tab === 'overdue') return tasks.filter(isOverdue);
    return tasks;  // all (admin)
  }, [tasks, tab, user.id]);
  
  const filtered = useMemo(() => {
    let arr = tabFiltered;
    if (filterStatus === 'active') arr = arr.filter(t => t.status !== 'done' && t.status !== 'cancelled');
    else if (filterStatus !== 'all') arr = arr.filter(t => t.status === filterStatus);
    if (filterPriority !== 'all') arr = arr.filter(t => t.priority === filterPriority);
    if (filterAssignee !== 'all') arr = arr.filter(t => t.assigned_to_id === filterAssignee);
    if (dateRange.start > 0 || dateRange.end < Infinity) {
      arr = arr.filter(t => {
        const ts = t.created_at_ms || 0;
        return ts >= dateRange.start && ts < dateRange.end;
      });
    }
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      arr = arr.filter(t => [t.title, t.description, t.assigned_to_name, t.created_by_name, t.tags].filter(Boolean).join(' ').toLowerCase().includes(q));
    }
    // 排序: 卡住/紧急在前 · 截止日近的在前 · 创建新的在前
    return [...arr].sort((a, b) => {
      if (a.status === 'blocked' && b.status !== 'blocked') return -1;
      if (b.status === 'blocked' && a.status !== 'blocked') return 1;
      const pri = { urgent:4, high:3, normal:2, low:1 };
      const pA = pri[a.priority] || 0, pB = pri[b.priority] || 0;
      if (pA !== pB) return pB - pA;
      if (a.due_date && b.due_date && a.due_date !== b.due_date) return a.due_date.localeCompare(b.due_date);
      return (b.created_at_ms || 0) - (a.created_at_ms || 0);
    });
  }, [tabFiltered, filterStatus, filterPriority, filterAssignee, dateRange, search]);
  
  const stats = useMemo(() => {
    const isOverdue = (t) => t.due_date && t.status !== 'done' && t.status !== 'cancelled' && t.due_date < new Date().toISOString().slice(0, 10);
    return {
      total:      tasks.length,
      inbox:      tasks.filter(t => t.assigned_to_id === user.id && t.status !== 'done' && t.status !== 'cancelled').length,
      sent:       tasks.filter(t => t.created_by === user.id).length,
      pending:    tasks.filter(t => t.status === 'pending').length,
      inProgress: tasks.filter(t => t.status === 'in_progress').length,
      done:       tasks.filter(t => t.status === 'done').length,
      blocked:    tasks.filter(t => t.status === 'blocked').length,
      overdue:    tasks.filter(isOverdue).length,
      myInboxUrgent: tasks.filter(t => t.assigned_to_id === user.id && t.priority === 'urgent' && t.status !== 'done' && t.status !== 'cancelled').length,
    };
  }, [tasks, user.id]);
  
  const openTask = openId ? tasks.find(t => t.id === openId) : null;
  
  const TABS = [
    { key:'inbox',   label:'📥 我的待办', count: stats.inbox, color:'#dc2626' },
    { key:'sent',    label:'📤 我派的',   count: stats.sent,  color:'#0071e3' },
    { key:'overdue', label:'⚠ 已超期',   count: stats.overdue, color:'#dc2626' },
    ...(isAdmin ? [{ key:'all', label:'🌐 全部任务', count: stats.total, color:'#7c3aed' }] : []),
  ];
  
  return (
    <div className="fade-in">
      {/* 头部 */}
      <div className="paper rounded-2xl p-5" style={{marginBottom:12, background:'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 60%, #f5f3ff 100%)'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:10}}>
          <div>
            <div className="font-display" style={{fontSize:20, fontWeight:600, color:'#1e3a8a'}}>📌 任务分派</div>
            <div style={{fontSize:12, color:'#3730a3', marginTop:4}}>
              临时性工作派给同事 → 实时通知 → 主管全局可见处理进度
              {stats.myInboxUrgent > 0 && <span style={{marginLeft:8, padding:'2px 8px', background:'#dc2626', color:'white', borderRadius:8, fontSize:11, fontWeight:600, animation:'pulse 2s ease-in-out infinite'}}>🚨 你有 {stats.myInboxUrgent} 个紧急任务</span>}
            </div>
          </div>
          <div style={{display:'flex', gap:6, alignItems:'center', flexWrap:'wrap'}}>
            <button onClick={load} disabled={loading} className="btn-sec" style={{padding:'6px 12px', fontSize:12}}>
              {loading ? '⏳' : '🔄'} 刷新
            </button>
            <button onClick={() => setShowCreate(true)}
              style={{padding:'6px 16px', background:'#1e40af', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontSize:13, fontWeight:600, fontFamily:'inherit'}}>
              + 派任务
            </button>
          </div>
        </div>
      </div>
      
      {/* 统计卡 */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(130px, 1fr))', gap:8, marginBottom:12}}>
        {[
          { label:'⏳ 待处理',   val: stats.pending,    color:'#d97706' },
          { label:'🔧 处理中',   val: stats.inProgress, color:'#0369a1' },
          { label:'⛔ 卡住',     val: stats.blocked,    color:'#dc2626' },
          { label:'⚠ 已超期',   val: stats.overdue,    color:'#dc2626' },
          { label:'✅ 已完成',   val: stats.done,       color:'#15803d' },
          { label:'📋 总任务',   val: stats.total,      color:'#7c3aed' },
        ].map(s => (
          <div key={s.label} className="paper rounded-2xl p-3" style={{borderLeft:'4px solid '+s.color}}>
            <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600}}>{s.label}</div>
            <div style={{fontSize:24, fontWeight:700, color:s.color, marginTop:2}}>{s.val}</div>
          </div>
        ))}
      </div>
      
      {/* Tab + 筛选 */}
      <div className="paper rounded-2xl p-4" style={{marginBottom:10}}>
        <div style={{display:'flex', gap:6, marginBottom:8, flexWrap:'wrap'}}>
          {TABS.map(t => {
            const sel = tab === t.key;
            return (
              <button key={t.key} onClick={() => setTab(t.key)}
                style={{padding:'6px 12px', borderRadius:7, border:'1px solid '+(sel?t.color:'var(--line)'), background: sel?t.color:'white', color: sel?'white':'var(--ink-2)', cursor:'pointer', fontSize:12, fontWeight: sel?600:500, fontFamily:'inherit'}}>
                {t.label} <span style={{padding:'1px 6px', background: sel?'rgba(255,255,255,.25)':'#f5f5f7', borderRadius:8, marginLeft:2, fontSize:10, fontWeight:700}}>{t.count}</span>
              </button>
            );
          })}
        </div>
        <div style={{display:'flex', gap:6, flexWrap:'wrap', alignItems:'center', marginBottom:8}}>
          <span style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginRight:4}}>⏱ 时间:</span>
          <AdvancedDateFilter value={dateFilter} onChange={setDateFilter} size="sm" />
        </div>
        <div style={{display:'flex', gap:6, flexWrap:'wrap', alignItems:'center'}}>
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{padding:'5px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, background:'white', fontFamily:'inherit'}}>
            <option value="active">未完成</option>
            <option value="all">所有状态</option>
            {TASK_STATUSES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
          <select value={filterPriority} onChange={e => setFilterPriority(e.target.value)} style={{padding:'5px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, background:'white', fontFamily:'inherit'}}>
            <option value="all">所有优先级</option>
            {TASK_PRIORITIES.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
          </select>
          {(tab === 'all' || tab === 'sent') && (
            <select value={filterAssignee} onChange={e => setFilterAssignee(e.target.value)} style={{padding:'5px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, background:'white', fontFamily:'inherit'}}>
              <option value="all">所有承接人</option>
              {employees && employees.map(e => <option key={e.id} value={e.id}>{e.name}{e.alias ? ' '+e.alias : ''}</option>)}
            </select>
          )}
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 搜索标题/描述/承接人..."
            style={{flex:1, minWidth:180, padding:'5px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, fontFamily:'inherit'}} />
        </div>
      </div>
      
      {/* 列表 */}
      {loading ? (
        <div style={{padding:'40px 14px', textAlign:'center', color:'var(--ink-4)'}}>加载中...</div>
      ) : filtered.length === 0 ? (
        <div className="paper rounded-2xl" style={{padding:'40px 14px', textAlign:'center', color:'var(--ink-4)', fontSize:13}}>
          {tasks.length === 0 ? '还没有任务 · 点右上"+ 派任务"开始' : '当前筛选下没有任务'}
        </div>
      ) : (
        <div style={{display:'flex', flexDirection:'column', gap:8}}>
          {filtered.map(t => (
            <TaskCard key={t.id} task={t} user={user} onOpen={() => setOpenId(t.id)} onReload={load} toast={toast} />
          ))}
        </div>
      )}
      
      {/* Modals */}
      {showCreate && (
        <TaskCreateModal user={user} employees={employees}
          onClose={() => setShowCreate(false)}
          onCreated={() => { setShowCreate(false); load(); toast('✓ 任务已派发'); }}
          toast={toast} />
      )}
      {openTask && (
        <TaskDetailModal task={openTask} user={user} employees={employees}
          onClose={() => setOpenId(null)} onChanged={load} toast={toast} />
      )}
    </div>
  );
};

// 任务卡片
const TaskCard = ({ task, user, onOpen, onReload, toast }) => {
  const pri = findTask(TASK_PRIORITIES, task.priority);
  const st = findTask(TASK_STATUSES, task.status);
  const isMine = task.assigned_to_id === user.id;
  const isCreator = task.created_by === user.id;
  const today = new Date().toISOString().slice(0, 10);
  const isOverdue = task.due_date && task.status !== 'done' && task.status !== 'cancelled' && task.due_date < today;
  const isDueToday = task.due_date === today && task.status !== 'done' && task.status !== 'cancelled';
  const ageDays = Math.floor((Date.now() - (task.created_at_ms || 0)) / 86400000);
  
  const quickAction = async (newStatus, e) => {
    e.stopPropagation();
    if (!isMine && task.created_by !== user.id && user.role !== 'admin' && user.role !== 'super_admin') {
      toast('只有承接人/创建人/主管能操作'); return;
    }
    const updates = { ...task, status: newStatus, updated_at: new Date().toISOString() };
    if (newStatus === 'in_progress' && !task.started_at_ms) updates.started_at_ms = Date.now();
    if (newStatus === 'done') {
      updates.completed_at_ms = Date.now();
      updates.completed_by_id = user.id;
      updates.completed_by_name = user.name + (user.alias ? ' ' + user.alias : '');
    }
    await CLOUD.upsert('tasks', updates);
    toast('✓ 已更新');
    onReload && onReload();
  };
  
  return (
    <div onClick={onOpen}
      style={{padding:'12px 14px', background:'white', border:'1px solid '+(isOverdue?'#fca5a5':(isDueToday?'#fbbf24':'var(--line)')), borderRadius:10, cursor:'pointer', transition:'transform .12s, box-shadow .12s'}}
      onMouseEnter={e => { e.currentTarget.style.transform='translateY(-1px)'; e.currentTarget.style.boxShadow='0 4px 14px rgba(0,0,0,.06)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}>
      <div style={{display:'flex', alignItems:'center', gap:6, flexWrap:'wrap', marginBottom:6}}>
        <span style={{padding:'2px 8px', background:pri.bg, color:pri.color, borderRadius:6, fontSize:10, fontWeight:600}}>{pri.label}</span>
        <span style={{padding:'2px 8px', background:st.bg, color:st.color, borderRadius:6, fontSize:10, fontWeight:600}}>{st.label}</span>
        {isMine && <span style={{padding:'2px 8px', background:'#fee2e2', color:'#b91c1c', borderRadius:6, fontSize:10, fontWeight:600}}>📥 派给我</span>}
        {isCreator && !isMine && <span style={{padding:'2px 8px', background:'#dbeafe', color:'#1e40af', borderRadius:6, fontSize:10, fontWeight:600}}>📤 我派的</span>}
        {isOverdue && <span style={{padding:'2px 8px', background:'#dc2626', color:'white', borderRadius:6, fontSize:10, fontWeight:700, animation:'pulse 2s ease-in-out infinite'}}>⚠ 超期</span>}
        {isDueToday && !isOverdue && <span style={{padding:'2px 8px', background:'#fef3c7', color:'#92400e', borderRadius:6, fontSize:10, fontWeight:700}}>📅 今天截止</span>}
        <span style={{marginLeft:'auto', fontSize:10, color:'var(--ink-4)'}}>
          {ageDays === 0 ? '刚刚' : ageDays + ' 天前'}
        </span>
      </div>
      <div style={{fontSize:14, fontWeight:600, color:'var(--ink)', marginBottom:4}}>{task.title}</div>
      {task.description && (
        <div style={{fontSize:12, color:'var(--ink-2)', lineHeight:1.5, marginBottom:5, overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical'}}>
          {task.description}
        </div>
      )}
      <div style={{display:'flex', alignItems:'center', gap:10, fontSize:11, color:'var(--ink-3)', flexWrap:'wrap'}}>
        <span>📤 {task.created_by_name || '?'}</span>
        <span style={{color:'#86868b'}}>→</span>
        <span style={{color:'#1e40af', fontWeight:600}}>👤 {task.assigned_to_name || '未指定'}</span>
        {task.due_date && <span style={{color: isOverdue ? '#dc2626' : (isDueToday ? '#d97706' : 'var(--ink-3)'), fontWeight: (isOverdue||isDueToday) ? 600 : 400}}>📅 {task.due_date}</span>}
        {(task.thread || []).length > 0 && <span>💬 {(task.thread || []).length}</span>}
        {task.completed_at_ms && <span style={{color:'#15803d'}}>✓ {task.completed_by_name}</span>}
        {/* 快速操作按钮 */}
        <div style={{marginLeft:'auto', display:'flex', gap:4}}>
          {isMine && task.status === 'pending' && (
            <button onClick={(e) => quickAction('in_progress', e)} style={{padding:'3px 9px', background:'#0369a1', color:'white', border:'none', borderRadius:5, cursor:'pointer', fontSize:10, fontWeight:600}}>▶ 接手</button>
          )}
          {isMine && task.status === 'in_progress' && (
            <button onClick={(e) => quickAction('done', e)} style={{padding:'3px 9px', background:'#15803d', color:'white', border:'none', borderRadius:5, cursor:'pointer', fontSize:10, fontWeight:600}}>✓ 完成</button>
          )}
          {isMine && (task.status === 'pending' || task.status === 'in_progress') && (
            <button onClick={(e) => quickAction('blocked', e)} style={{padding:'3px 9px', background:'#fee2e2', color:'#b91c1c', border:'1px solid #fca5a5', borderRadius:5, cursor:'pointer', fontSize:10, fontWeight:600}}>⛔ 卡住</button>
          )}
        </div>
      </div>
    </div>
  );
};

// 派任务 modal
const TaskCreateModal = ({ user, employees, onClose, onCreated, toast }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('normal');
  const [assignedId, setAssignedId] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [sending, setSending] = useState(false);
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  // 默认派给自己 (个人备忘录) - 但主管派别人是主要场景
  
  const submit = async () => {
    if (!title.trim()) { alert('请填写任务标题'); return; }
    if (!assignedId) { alert('请选择承接人'); return; }
    setSending(true);
    try {
      const assignedEmp = (employees || []).find(e => e.id === assignedId);
      const userName = user.name + (user.alias ? ' ' + user.alias : '');
      const id = (crypto.randomUUID ? crypto.randomUUID() : ('task_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8)));
      const record = {
        id,
        title: title.trim(),
        description: description.trim() || null,
        priority,
        status: 'pending',
        assigned_to_id: assignedId,
        assigned_to_name: assignedEmp ? (assignedEmp.name + (assignedEmp.alias ? ' ' + assignedEmp.alias : '')) : '',
        due_date: dueDate || null,
        created_by: user.id,
        created_by_name: userName,
        created_by_role: user.role,
        created_at_ms: Date.now(),
        updated_at: new Date().toISOString(),
        thread: [],
      };
      const ok = await CLOUD.upsert('tasks', record);
      if (!ok) throw new Error('保存失败');
      onCreated();
    } catch (e) { alert('派单失败: ' + (e.message || e)); }
    setSending(false);
  };
  
  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:100000, display:'flex', alignItems:'flex-start', justifyContent:'center', overflow:'auto', padding:'20px'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, width:'100%', maxWidth:600, boxShadow:'0 20px 60px rgba(0,0,0,.25)'}}>
        <div style={{padding:'14px 20px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', background:'linear-gradient(90deg, #eff6ff 0%, #e0e7ff 100%)'}}>
          <div>
            <div className="font-display" style={{fontSize:16, fontWeight:600, color:'#1e40af'}}>📌 派发任务</div>
            <div style={{fontSize:11, color:'#1e3a8a', marginTop:2}}>临时性工作 · 实时推送给承接人</div>
          </div>
          <button onClick={onClose} style={{background:'transparent', border:'none', cursor:'pointer', fontSize:18}}>×</button>
        </div>
        
        <div style={{padding:'16px 20px', display:'flex', flexDirection:'column', gap:12}}>
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>任务标题 *</label>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="如:核对昨天 VK 网站 5 个订单的发货状态"
              style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'inherit'}} />
          </div>
          
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>详细说明 (可选)</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3}
              placeholder="为什么要做 / 要做到什么程度 / 注意事项..."
              style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'inherit', resize:'vertical'}} />
          </div>
          
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>派给谁 *</label>
              <select value={assignedId} onChange={e => setAssignedId(e.target.value)}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, background:'white', fontFamily:'inherit'}}>
                <option value="">— 选择承接人 —</option>
                {(employees || []).filter(e => !e.deleted && !e.deactivated).map(e => (
                  <option key={e.id} value={e.id}>{e.name}{e.alias ? ' ' + e.alias : ''}{e.role === 'admin' || e.role === 'super_admin' ? ' (主管)' : ''}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>截止日期 (可选)</label>
              <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'inherit'}} />
            </div>
          </div>
          
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>优先级</label>
            <div style={{display:'flex', gap:5, flexWrap:'wrap'}}>
              {TASK_PRIORITIES.map(p => {
                const sel = priority === p.id;
                return (
                  <button key={p.id} onClick={() => setPriority(p.id)} type="button"
                    style={{padding:'5px 12px', border:'1px solid '+(sel?p.color:'var(--line)'), background: sel?p.bg:'white', color: sel?p.color:'var(--ink-2)', borderRadius:6, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
                    {p.label} <span style={{fontWeight:400, fontSize:10, color:'var(--ink-3)'}}>{p.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        
        <div style={{padding:'12px 20px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'flex-end', gap:6, background:'#fafafa'}}>
          <button onClick={onClose} disabled={sending} className="btn-sec" style={{padding:'7px 14px', fontSize:12}}>取消</button>
          <button onClick={submit} disabled={sending}
            style={{padding:'7px 18px', background:'#1e40af', color:'white', border:'none', borderRadius:7, cursor:sending?'wait':'pointer', fontSize:13, fontWeight:600, fontFamily:'inherit'}}>
            {sending ? '派发中...' : '📌 派发任务'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

// 任务详情 modal
const TaskDetailModal = ({ task, user, employees, onClose, onChanged, toast }) => {
  const [replyText, setReplyText] = useState('');
  const [editing, setEditing] = useState(false);
  const [editPriority, setEditPriority] = useState(task.priority);
  const [editDueDate, setEditDueDate] = useState(task.due_date || '');
  const [editAssignedId, setEditAssignedId] = useState(task.assigned_to_id || '');
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  const isMine = task.assigned_to_id === user.id;
  const isCreator = task.created_by === user.id;
  const canEdit = isCreator || isAdmin;
  const pri = findTask(TASK_PRIORITIES, task.priority);
  const st = findTask(TASK_STATUSES, task.status);
  
  const setStatus = async (newStatus) => {
    const updates = { ...task, status: newStatus, updated_at: new Date().toISOString() };
    if (newStatus === 'in_progress' && !task.started_at_ms) updates.started_at_ms = Date.now();
    if (newStatus === 'done') {
      updates.completed_at_ms = Date.now();
      updates.completed_by_id = user.id;
      updates.completed_by_name = user.name + (user.alias ? ' ' + user.alias : '');
    }
    if (newStatus === 'cancelled') {
      updates.cancelled_at_ms = Date.now();
    }
    const ok = await CLOUD.upsert('tasks', updates);
    if (ok) { toast('✓ 状态已更新'); onChanged && onChanged(); }
  };
  
  const saveEdit = async () => {
    const assignedEmp = (employees || []).find(e => e.id === editAssignedId);
    const updates = {
      ...task,
      priority: editPriority,
      due_date: editDueDate || null,
      assigned_to_id: editAssignedId,
      assigned_to_name: assignedEmp ? (assignedEmp.name + (assignedEmp.alias ? ' ' + assignedEmp.alias : '')) : task.assigned_to_name,
      updated_at: new Date().toISOString(),
    };
    const ok = await CLOUD.upsert('tasks', updates);
    if (ok) { toast('✓ 已保存'); setEditing(false); onChanged && onChanged(); }
  };
  
  const addReply = async () => {
    if (!replyText.trim()) return;
    const userName = user.name + (user.alias ? ' ' + user.alias : '');
    const newThread = [...(task.thread || []), {
      user_id: user.id, user_name: userName, role: user.role,
      content: replyText.trim(), ts: Date.now(),
    }];
    const ok = await CLOUD.upsert('tasks', { ...task, thread: newThread, updated_at: new Date().toISOString() });
    if (ok) { setReplyText(''); toast('✓ 已回复'); onChanged && onChanged(); }
  };
  
  const handleDelete = async () => {
    if (!confirm('确认删除此任务?')) return;
    const ok = await CLOUD.upsert('tasks', { ...task, deleted: true, deleted_at: Date.now(), deleted_by: user.id });
    if (ok) { toast('✓ 已删除'); onChanged && onChanged(); onClose(); }
  };
  
  const formatTs = (ms) => ms ? new Date(ms).toLocaleString('zh-CN', { month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit' }) : '';
  
  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:100000, display:'flex', alignItems:'flex-start', justifyContent:'center', overflow:'auto', padding:'20px'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, width:'100%', maxWidth:680, boxShadow:'0 20px 60px rgba(0,0,0,.25)', display:'flex', flexDirection:'column', maxHeight:'92vh'}}>
        <div style={{padding:'14px 20px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexShrink:0, gap:8}}>
          <div style={{flex:1}}>
            <div style={{display:'flex', alignItems:'center', gap:6, flexWrap:'wrap', marginBottom:4}}>
              <span style={{padding:'2px 8px', background:pri.bg, color:pri.color, borderRadius:6, fontSize:10, fontWeight:700}}>{pri.label}</span>
              <span style={{padding:'2px 8px', background:st.bg, color:st.color, borderRadius:6, fontSize:10, fontWeight:700}}>{st.label}</span>
            </div>
            <div className="font-display" style={{fontSize:16, fontWeight:600, lineHeight:1.3}}>{task.title}</div>
            <div style={{fontSize:11, color:'var(--ink-3)', marginTop:4}}>
              📤 {task.created_by_name || '?'} · {formatTs(task.created_at_ms)} → 👤 <strong>{task.assigned_to_name || '未指定'}</strong>
              {task.due_date && <span> · 📅 截止 {task.due_date}</span>}
            </div>
          </div>
          <button onClick={onClose} style={{background:'transparent', border:'none', cursor:'pointer', fontSize:18, padding:0, lineHeight:1}}>×</button>
        </div>
        
        <div style={{padding:'14px 20px', overflowY:'auto', flex:1}}>
          {task.description && (
            <div style={{marginBottom:14}}>
              <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', marginBottom:4}}>📝 任务说明</div>
              <div style={{padding:'10px 12px', background:'#fafaf7', borderRadius:8, fontSize:13, color:'var(--ink-2)', lineHeight:1.6, whiteSpace:'pre-wrap'}}>{task.description}</div>
            </div>
          )}
          
          {/* 时间线 */}
          <div style={{marginBottom:14, padding:'10px 12px', background:'#f0f9ff', border:'1px solid #bae6fd', borderRadius:8, fontSize:11, lineHeight:1.8}}>
            <div>📤 <strong>{task.created_by_name || '?'}</strong> 派发于 {formatTs(task.created_at_ms)}</div>
            {task.started_at_ms && <div>▶ 接手于 {formatTs(task.started_at_ms)}</div>}
            {task.completed_at_ms && <div style={{color:'#15803d', fontWeight:600}}>✓ {task.completed_by_name || '?'} 完成于 {formatTs(task.completed_at_ms)}</div>}
            {task.cancelled_at_ms && <div style={{color:'#86868b'}}>❌ 取消于 {formatTs(task.cancelled_at_ms)}</div>}
          </div>
          
          {/* 编辑面板 */}
          {editing && canEdit && (
            <div style={{marginBottom:14, padding:'12px', background:'#fffbeb', border:'1px solid #fcd34d', borderRadius:8}}>
              <div style={{fontSize:11, fontWeight:600, color:'#92400e', marginBottom:8}}>✏️ 编辑任务</div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:8}}>
                <div>
                  <div style={{fontSize:10, color:'var(--ink-3)', marginBottom:3}}>承接人</div>
                  <select value={editAssignedId} onChange={e => setEditAssignedId(e.target.value)}
                    style={{width:'100%', padding:'6px 9px', border:'1px solid var(--line)', borderRadius:6, fontSize:12, background:'white', fontFamily:'inherit'}}>
                    {(employees || []).filter(e => !e.deleted).map(e => (
                      <option key={e.id} value={e.id}>{e.name}{e.alias ? ' ' + e.alias : ''}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <div style={{fontSize:10, color:'var(--ink-3)', marginBottom:3}}>截止日期</div>
                  <input type="date" value={editDueDate} onChange={e => setEditDueDate(e.target.value)}
                    style={{width:'100%', padding:'6px 9px', border:'1px solid var(--line)', borderRadius:6, fontSize:12, fontFamily:'inherit'}} />
                </div>
              </div>
              <div style={{display:'flex', gap:4, flexWrap:'wrap', marginBottom:8}}>
                {TASK_PRIORITIES.map(p => {
                  const sel = editPriority === p.id;
                  return (
                    <button key={p.id} onClick={() => setEditPriority(p.id)}
                      style={{padding:'4px 10px', border:'1px solid '+(sel?p.color:'var(--line)'), background: sel?p.bg:'white', color:p.color, borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
                      {p.label}
                    </button>
                  );
                })}
              </div>
              <div style={{display:'flex', gap:6, justifyContent:'flex-end'}}>
                <button onClick={() => setEditing(false)} className="btn-sec" style={{padding:'5px 12px', fontSize:11}}>取消</button>
                <button onClick={saveEdit} style={{padding:'5px 12px', background:'#d97706', color:'white', border:'none', borderRadius:6, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>💾 保存</button>
              </div>
            </div>
          )}
          
          {/* 状态切换 */}
          <div style={{marginBottom:14, padding:'10px', background:'#fafaf7', border:'1px solid var(--line)', borderRadius:8}}>
            <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', marginBottom:6}}>🔄 更改状态</div>
            <div style={{display:'flex', gap:4, flexWrap:'wrap'}}>
              {TASK_STATUSES.map(s => {
                const sel = task.status === s.id;
                return (
                  <button key={s.id} onClick={() => setStatus(s.id)} disabled={sel}
                    style={{padding:'5px 11px', background: sel?s.color:'white', color: sel?'white':s.color, border:'1px solid '+s.color, borderRadius:6, cursor: sel?'default':'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit', opacity: sel?0.8:1}}>
                    {sel && '✓ '}{s.label}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* 对话 */}
          {(task.thread || []).length > 0 && (
            <div style={{marginBottom:12}}>
              <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', marginBottom:4}}>💬 对话 ({(task.thread || []).length})</div>
              <div style={{display:'flex', flexDirection:'column', gap:5}}>
                {(task.thread || []).map((m, i) => {
                  const isMineMsg = m.user_id === user.id;
                  return (
                    <div key={i} style={{display:'flex', justifyContent: isMineMsg ? 'flex-end' : 'flex-start'}}>
                      <div style={{maxWidth:'80%', padding:'7px 11px', background: isMineMsg ? '#dcfce7' : 'white', border:'1px solid '+(isMineMsg?'#86efac':'var(--line)'), borderRadius:9, fontSize:12, color:'var(--ink-2)', lineHeight:1.5}}>
                        <div style={{fontSize:10, color:'var(--ink-3)', marginBottom:2, fontWeight:600}}>{m.user_name} · {formatTs(m.ts)}</div>
                        <div style={{whiteSpace:'pre-wrap'}}>{m.content}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {/* 回复输入框 */}
          <div>
            <div style={{display:'flex', gap:6}}>
              <textarea value={replyText} onChange={e => setReplyText(e.target.value)} rows={2}
                placeholder="补充信息 / 反馈进度 / 请示主管..."
                onKeyDown={e => { if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') addReply(); }}
                style={{flex:1, padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, fontFamily:'inherit', resize:'vertical'}} />
              <button onClick={addReply} disabled={!replyText.trim()}
                style={{padding:'7px 14px', background:'#0369a1', color:'white', border:'none', borderRadius:7, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit', alignSelf:'flex-start', opacity: replyText.trim()?1:0.4}}>
                发送
              </button>
            </div>
          </div>
        </div>
        
        {canEdit && (
          <div style={{padding:'10px 20px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0, background:'#fafafa'}}>
            <button onClick={handleDelete} style={{padding:'6px 12px', background:'transparent', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:6, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
              🗑 删除任务
            </button>
            <button onClick={() => setEditing(v => !v)} style={{padding:'6px 14px', background: editing?'#86868b':'#d97706', color:'white', border:'none', borderRadius:6, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
              {editing ? '取消编辑' : '✏️ 编辑'}
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

// ════════════════════════════════════════════════════════════════════
// 🐛 Bug反馈 / 需求模块 (fix14)
// 用户自助提交 → 直接录入 Supabase → 主管确认 → AI 一键导出摘要 → 修复 → 标版本号
// 支持: 截图粘贴 / 文字描述 / 自动收集浏览器+版本信息
// ════════════════════════════════════════════════════════════════════
const BUG_CATEGORIES = [
  { id:'bug',         label:'🐛 Bug',     desc:'功能不正常,出错,报错',   color:'#dc2626', bg:'#fee2e2' },
  { id:'feature',     label:'✨ 新功能',  desc:'希望增加什么功能',       color:'#7c3aed', bg:'#f3e8ff' },
  { id:'improvement', label:'💡 改进',    desc:'已有功能想优化',         color:'#0369a1', bg:'#dbeafe' },
  { id:'question',    label:'❓ 疑问',    desc:'用法不清楚 / 想确认',     color:'#86868b', bg:'#f5f5f7' },
];
const BUG_PRIORITIES = [
  { id:'urgent', label:'🚨 紧急', desc:'影响工作 · 马上修', color:'#dc2626', bg:'#fee2e2' },
  { id:'high',   label:'⚡ 重要', desc:'尽快修',           color:'#d97706', bg:'#fef3c7' },
  { id:'normal', label:'· 普通',  desc:'有空就修',         color:'#86868b', bg:'#f5f5f7' },
  { id:'low',    label:'· 低',    desc:'有空再说',         color:'#a8a8a8', bg:'#fafafa' },
];
const BUG_STATUSES = [
  { id:'new',         label:'🆕 待查阅',     color:'#0369a1', bg:'#dbeafe' },
  { id:'reviewed',    label:'👀 已查阅',     color:'#7c3aed', bg:'#f3e8ff' },
  { id:'planned',     label:'📅 已排期',     color:'#d97706', bg:'#fef3c7' },
  { id:'in_progress', label:'🔧 修复中',     color:'#0369a1', bg:'#dbeafe' },
  { id:'done',        label:'✅ 已修复',     color:'#15803d', bg:'#dcfce7' },
  { id:'rejected',    label:'❌ 已拒绝',     color:'#86868b', bg:'#f5f5f7' },
  { id:'duplicate',   label:'🔁 重复',       color:'#86868b', bg:'#f5f5f7' },
];
const findBug = (arr, id) => arr.find(x => x.id === id) || arr[0];
// 模块列表 (与 allTabs 一致 — 用于"出问题在哪个模块")
const BUG_MODULES = [
  { id:'cs',               label:'📞 客服跟进' },
  { id:'chargebacks',      label:'🚨 拒付' },
  { id:'offline_orders',   label:'💳 线下单' },
  { id:'custom_photo',     label:'🎨 定制&实拍' },
  { id:'events',           label:'📋 工作主线' },
  { id:'reviews',          label:'⭐ 产品评价 (含 AI 评价工具)' },
  { id:'suppliers',        label:'🏭 供应商' },
  { id:'kb',               label:'📚 知识库' },
  { id:'email_templates',  label:'📧 邮件模板' },
  { id:'quote',            label:'📝 报价单' },
  { id:'finance',          label:'🧮 财务计算器' },
  { id:'freight',          label:'🚚 运费支付' },
  { id:'freight_calc',     label:'🚚 运费精算器' },
  { id:'express_invoice',  label:'📦 快递发票' },
  { id:'cross_dept',       label:'📨 跨部门协作' },
  { id:'briefings',        label:'📢 会议纪要' },
  { id:'dashboard',        label:'📈 数据看板' },
  { id:'admin_overview',   label:'📊 主管汇总' },
  { id:'delete_approvals', label:'🛡 删除审批' },
  { id:'trash',            label:'🗑 回收站' },
  { id:'admin',            label:'⚙ 设置' },
  { id:'help',             label:'📖 使用手册' },
  { id:'feedback',         label:'🐛 反馈中心' },
  { id:'other',            label:'· 其他 / 跨模块' },
];

// 主模块
const BugReportsModule = ({ user, employees, toast }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSubmit, setShowSubmit] = useState(false);
  const [openId, setOpenId] = useState(null);
  const [showAiSummary, setShowAiSummary] = useState(false);
  const [showExport, setShowExport] = useState(false);  // 🆕 fix14b: 导出模态
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterScope, setFilterScope] = useState('all');  // 'all' | 'mine' (员工 default mine, 主管 default all)
  const [dateFilter, setDateFilter] = useState({ kind:'all' });  // 🆕 fix15
  const [search, setSearch] = useState('');
  const [view, setView] = useState('list');  // 🆕 fix17: 'list' | 'kpi' (KPI 按提交人月度汇总)

  const isAdmin = user.role === 'admin' || user.role === 'super_admin';

  // 🆕 fix15
  const dateRange = useMemo(() => getDateRange(dateFilter), [dateFilter]);

  // 员工只看到自己的反馈 (但能看进度); 主管看全部
  useEffect(() => {
    if (!isAdmin && filterScope === 'all') setFilterScope('mine');
  }, [isAdmin]);

  const load = async () => {
    setLoading(true);
    try {
      const list = await CLOUD.list('bug_reports', { order:{col:'created_at_ms', asc:false}, limit:500 });
      const live = (list || []).filter(r => !r.deleted);
      setReports(live);
    } catch(e) { toast('❌ 加载反馈失败: ' + (e.message || e)); }
    setLoading(false);
  };
  useEffect(() => { load(); }, []);

  // Realtime: 任何人提交新反馈 → 所有人(尤其主管)实时刷新
  useEffect(() => {
    if (!CLOUD.isOn || !CLOUD.supabase) return;
    let channel = null;
    try {
      channel = CLOUD.supabase
        .channel('bug_reports_' + user.id)
        .on('postgres_changes', { event: '*', schema: 'public', table: 'bug_reports' }, () => load())
        .subscribe();
    } catch (e) { console.warn('bug_reports realtime 订阅失败:', e); }
    return () => {
      try { if (channel) CLOUD.supabase.removeChannel(channel); } catch {}
    };
  }, [user.id]);

  // 过滤
  const filtered = useMemo(() => {
    let arr = reports;
    if (filterScope === 'mine') arr = arr.filter(r => r.created_by === user.id);
    if (filterStatus !== 'all') arr = arr.filter(r => r.status === filterStatus);
    if (filterCategory !== 'all') arr = arr.filter(r => r.category === filterCategory);
    // 🆕 fix15: 日期范围
    if (dateRange.start > 0 || dateRange.end < Infinity) {
      arr = arr.filter(r => {
        const t = r.created_at_ms || 0;
        return t >= dateRange.start && t < dateRange.end;
      });
    }
    if (search.trim()) {
      const kws = search.toLowerCase().split(/\s+/).filter(Boolean);
      arr = arr.filter(r => {
        const hay = [r.title, r.description, r.reproduce_steps, r.expected_behavior, r.actual_behavior, r.created_by_name, r.module, r.admin_response].filter(Boolean).join(' ').toLowerCase();
        return kws.every(kw => hay.includes(kw));
      });
    }
    return arr;
  }, [reports, filterScope, filterStatus, filterCategory, dateRange, search, user.id]);

  // 统计
  const stats = useMemo(() => {
    const allMine = reports.filter(r => r.created_by === user.id);
    return {
      total: reports.length,
      mine: allMine.length,
      new: reports.filter(r => r.status === 'new').length,
      urgent: reports.filter(r => r.priority === 'urgent' && r.status !== 'done' && r.status !== 'rejected' && r.status !== 'duplicate').length,
      doing: reports.filter(r => r.status === 'in_progress' || r.status === 'planned' || r.status === 'reviewed').length,
      done: reports.filter(r => r.status === 'done').length,
      pendingForAi: reports.filter(r => r.status === 'new' || r.status === 'reviewed' || r.status === 'planned').length,
    };
  }, [reports, user.id]);

  // 🆕 fix17: KPI 按提交人月度汇总 - 用于绩效计分
  // 计分规则: bug=3 / feature=2 / improvement=2 / question=1 分
  //          status=done 额外 +50% 加成 · rejected/duplicate × 0.3 折扣
  const kpiData = useMemo(() => {
    const SCORE = { bug:3, feature:2, improvement:2, question:1 };
    const liveReports = reports.filter(r => !r.deleted);
    // 应用 dateRange 筛选(KPI 也跟着月份选择走)
    const filtered = dateRange.start > 0 || dateRange.end < Infinity
      ? liveReports.filter(r => {
          const t = r.created_at_ms || 0;
          return t >= dateRange.start && t < dateRange.end;
        })
      : liveReports;
    
    // 按 user × month 聚合
    const map = {};
    filtered.forEach(r => {
      const uid = r.created_by || 'unknown';
      const uname = r.created_by_name || '匿名';
      const urole = r.created_by_role || '';
      const d = new Date(r.created_at_ms || Date.now());
      const monthKey = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
      const k = `${uid}__${monthKey}`;
      if (!map[k]) map[k] = {
        userId: uid, userName: uname, userRole: urole, month: monthKey,
        total: 0, byCat: { bug:0, feature:0, improvement:0, question:0 },
        byStatus: { done:0, in_progress:0, planned:0, reviewed:0, new:0, rejected:0, duplicate:0 },
        byPriority: { urgent:0, high:0, normal:0, low:0 },
        score: 0,
      };
      const row = map[k];
      row.total++;
      const cat = r.category || 'question';
      const status = r.status || 'new';
      const pri = r.priority || 'normal';
      row.byCat[cat] = (row.byCat[cat] || 0) + 1;
      row.byStatus[status] = (row.byStatus[status] || 0) + 1;
      row.byPriority[pri] = (row.byPriority[pri] || 0) + 1;
      // 计分
      let pts = SCORE[cat] || 1;
      if (status === 'done') pts *= 1.5;
      else if (status === 'rejected' || status === 'duplicate') pts *= 0.3;
      // 紧急/重要 +20% / +10%
      if (pri === 'urgent') pts *= 1.2;
      else if (pri === 'high') pts *= 1.1;
      row.score += pts;
    });
    // 转数组、按 month desc 分组、组内按 score desc
    const rows = Object.values(map).sort((a, b) => {
      if (a.month !== b.month) return b.month.localeCompare(a.month);
      return b.score - a.score;
    });
    // 按月份分组
    const groupedByMonth = {};
    rows.forEach(r => {
      if (!groupedByMonth[r.month]) groupedByMonth[r.month] = [];
      groupedByMonth[r.month].push(r);
    });
    // 月份排序(降序)
    const months = Object.keys(groupedByMonth).sort((a, b) => b.localeCompare(a));
    return { rows, groupedByMonth, months };
  }, [reports, dateRange]);

  const openReport = openId ? reports.find(r => r.id === openId) : null;

  return (
    <div className="fade-in">
      {/* 头部 */}
      <div className="paper rounded-2xl p-5" style={{marginBottom:12, background:'linear-gradient(135deg, #fef2f2 0%, #fef3c7 60%, #fef9c3 100%)'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:10}}>
          <div>
            <div className="font-display" style={{fontSize:20, fontWeight:600, color:'#7c2d12'}}>🐛 反馈中心 / 需求池</div>
            <div style={{fontSize:12, color:'#92400e', marginTop:4}}>
              发现 bug? 想要新功能? 在这里反馈 → 主管确认 → AI 下版本自动修复 · 当前版本 <strong>{APP_VERSION}</strong>
            </div>
          </div>
          <div style={{display:'flex', gap:6, alignItems:'center', flexWrap:'wrap'}}>
            {isAdmin && (
              <>
                <button onClick={() => setView(v => v === 'kpi' ? 'list' : 'kpi')}
                  style={{padding:'6px 14px', background: view === 'kpi' ? '#15803d' : '#0369a1', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}
                  title="按提交人 × 月份汇总 · 用于绩效计分">
                  {view === 'kpi' ? '📋 返回列表' : '📊 KPI 视图'}
                </button>
                <button onClick={() => setShowExport(true)}
                  style={{padding:'6px 14px', background:'#d97706', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}
                  title="下载所有反馈 · PDF/Markdown/HTML/CSV 四种格式 · 一次性发给 AI">
                  📥 下载导出 ({reports.length})
                </button>
                {stats.pendingForAi > 0 && (
                  <button onClick={() => setShowAiSummary(true)}
                    style={{padding:'6px 14px', background:'#7c3aed', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}
                    title="生成 AI 摘要文本,复制粘贴到 Claude 对话">
                    🤖 复制给 AI ({stats.pendingForAi})
                  </button>
                )}
              </>
            )}
            <button onClick={load} disabled={loading} className="btn-sec" style={{padding:'6px 12px', fontSize:12}}>
              {loading ? '⏳' : '🔄'} 刷新
            </button>
            <button onClick={() => setShowSubmit(true)}
              style={{padding:'6px 16px', background:'#dc2626', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontSize:13, fontWeight:600, fontFamily:'inherit'}}>
              + 提交反馈
            </button>
          </div>
        </div>
      </div>

      {/* 统计卡 */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(140px, 1fr))', gap:10, marginBottom:12}}>
        <div className="paper rounded-2xl p-3" style={{borderLeft:'4px solid #0369a1'}}>
          <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600}}>📥 全部</div>
          <div style={{fontSize:26, fontWeight:700, color:'#0369a1', marginTop:2}}>{stats.total}</div>
        </div>
        <div className="paper rounded-2xl p-3" style={{borderLeft:'4px solid #86868b'}}>
          <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600}}>👤 我提交的</div>
          <div style={{fontSize:26, fontWeight:700, color:'var(--ink)', marginTop:2}}>{stats.mine}</div>
        </div>
        <div className="paper rounded-2xl p-3" style={{borderLeft:'4px solid ' + (stats.new > 0 ? '#dc2626' : '#86868b'), cursor: stats.new > 0 ? 'pointer' : 'default'}}
          onClick={() => stats.new > 0 && setFilterStatus('new')}>
          <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600}}>🆕 待主管查阅</div>
          <div style={{fontSize:26, fontWeight:700, color: stats.new > 0 ? '#dc2626' : 'var(--ink-3)', marginTop:2}}>{stats.new}</div>
        </div>
        <div className="paper rounded-2xl p-3" style={{borderLeft:'4px solid ' + (stats.urgent > 0 ? '#dc2626' : '#86868b'),
          animation: stats.urgent > 0 ? 'pulse 2s ease-in-out infinite' : 'none',
          background: stats.urgent > 0 ? 'linear-gradient(180deg, #fef2f2 0%, white 100%)' : 'white'}}>
          <div style={{fontSize:11, color: stats.urgent > 0 ? '#b91c1c' : 'var(--ink-3)', fontWeight:600}}>🚨 紧急未修</div>
          <div style={{fontSize:26, fontWeight:700, color: stats.urgent > 0 ? '#b91c1c' : 'var(--ink-3)', marginTop:2}}>{stats.urgent}</div>
        </div>
        <div className="paper rounded-2xl p-3" style={{borderLeft:'4px solid #d97706'}}>
          <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600}}>🔧 处理中</div>
          <div style={{fontSize:26, fontWeight:700, color:'#d97706', marginTop:2}}>{stats.doing}</div>
        </div>
        <div className="paper rounded-2xl p-3" style={{borderLeft:'4px solid #15803d'}}>
          <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600}}>✅ 已修复</div>
          <div style={{fontSize:26, fontWeight:700, color:'#15803d', marginTop:2}}>{stats.done}</div>
        </div>
      </div>

      {/* 🆕 fix17: KPI 视图 vs 列表视图 切换渲染 */}
      {view === 'kpi' ? (
        <div className="space-y-3">
          {/* KPI 时间筛选 */}
          <div className="paper rounded-2xl p-4">
            <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
              <span style={{fontSize:12, fontWeight:600, color:'var(--ink-2)'}}>⏱ 统计时间:</span>
              <AdvancedDateFilter value={dateFilter} onChange={setDateFilter} size="sm" />
              <span style={{marginLeft:'auto', fontSize:11, color:'var(--ink-3)'}}>
                💡 计分: bug=3 · 功能=2 · 改进=2 · 疑问=1 分 · 已修复 ×1.5 · 已拒绝/重复 ×0.3 · 紧急 ×1.2
              </span>
            </div>
          </div>

          {/* 各月份 KPI 表 */}
          {kpiData.rows.length === 0 ? (
            <div className="paper rounded-2xl" style={{padding:'40px 14px', textAlign:'center', color:'var(--ink-4)', fontSize:13}}>
              当前筛选下没有 KPI 数据
            </div>
          ) : (
            kpiData.months.map(month => {
              const monthRows = kpiData.groupedByMonth[month];
              const monthTotal = monthRows.reduce((s, r) => s + r.total, 0);
              const monthScore = monthRows.reduce((s, r) => s + r.score, 0);
              return (
                <div key={month} className="paper rounded-2xl p-4">
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10, flexWrap:'wrap', gap:8}}>
                    <div className="font-display" style={{fontSize:16, fontWeight:600, color:'#0369a1'}}>
                      📅 {month.replace('-', ' 年 ')} 月
                    </div>
                    <div style={{fontSize:11, color:'var(--ink-3)'}}>
                      <strong style={{color:'var(--ink)'}}>{monthRows.length}</strong> 人参与 · 共 <strong style={{color:'var(--ink)'}}>{monthTotal}</strong> 条 · 总分 <strong style={{color:'#15803d'}}>{monthScore.toFixed(1)}</strong>
                    </div>
                  </div>
                  <div style={{overflowX:'auto'}}>
                    <table style={{width:'100%', borderCollapse:'collapse', fontSize:12}}>
                      <thead>
                        <tr style={{background:'#f8fafc', color:'var(--ink-3)'}}>
                          <th style={{padding:'8px 10px', textAlign:'left', fontWeight:600, borderBottom:'1px solid var(--line)', whiteSpace:'nowrap'}}>排名</th>
                          <th style={{padding:'8px 10px', textAlign:'left', fontWeight:600, borderBottom:'1px solid var(--line)', whiteSpace:'nowrap'}}>提交人</th>
                          <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', whiteSpace:'nowrap'}}>总条数</th>
                          <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', whiteSpace:'nowrap', color:'#dc2626'}}>🐛 Bug</th>
                          <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', whiteSpace:'nowrap', color:'#7c3aed'}}>✨ 功能</th>
                          <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', whiteSpace:'nowrap', color:'#0369a1'}}>💡 改进</th>
                          <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', whiteSpace:'nowrap'}}>❓ 疑问</th>
                          <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', whiteSpace:'nowrap', color:'#dc2626'}}>🚨 紧急</th>
                          <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', whiteSpace:'nowrap', color:'#15803d'}}>✅ 已修复</th>
                          <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', whiteSpace:'nowrap', color:'#d97706'}}>🔧 处理中</th>
                          <th style={{padding:'8px 10px', textAlign:'center', fontWeight:600, borderBottom:'1px solid var(--line)', whiteSpace:'nowrap', color:'var(--ink-3)'}}>❌ 拒绝</th>
                          <th style={{padding:'8px 10px', textAlign:'center', fontWeight:700, borderBottom:'1px solid var(--line)', whiteSpace:'nowrap', color:'#15803d', background:'#f0fdf4'}}>🏆 绩效分</th>
                        </tr>
                      </thead>
                      <tbody>
                        {monthRows.map((r, idx) => (
                          <tr key={r.userId} style={{background: idx % 2 ? 'white' : '#fafafa', transition:'background .15s'}}
                            onMouseEnter={e => e.currentTarget.style.background = '#eff6ff'}
                            onMouseLeave={e => e.currentTarget.style.background = idx % 2 ? 'white' : '#fafafa'}>
                            <td style={{padding:'8px 10px', borderBottom:'1px solid var(--line)'}}>
                              <span style={{width:22, height:22, background: idx < 3 ? '#15803d' : 'var(--ink-3)', color:'white', borderRadius:'50%', fontSize:10, fontWeight:700, display:'inline-flex', alignItems:'center', justifyContent:'center'}}>{idx + 1}</span>
                            </td>
                            <td style={{padding:'8px 10px', borderBottom:'1px solid var(--line)'}}>
                              <div style={{fontWeight:600}}>{r.userName}</div>
                              <div style={{fontSize:10, color:'var(--ink-3)'}}>{r.userRole === 'admin' || r.userRole === 'super_admin' ? '主管' : r.userRole === 'finance' ? '财务' : '客服'}</div>
                            </td>
                            <td style={{padding:'8px 10px', textAlign:'center', borderBottom:'1px solid var(--line)', fontWeight:600}}>{r.total}</td>
                            <td style={{padding:'8px 10px', textAlign:'center', borderBottom:'1px solid var(--line)', color: r.byCat.bug > 0 ? '#dc2626' : 'var(--ink-4)'}}>{r.byCat.bug || '-'}</td>
                            <td style={{padding:'8px 10px', textAlign:'center', borderBottom:'1px solid var(--line)', color: r.byCat.feature > 0 ? '#7c3aed' : 'var(--ink-4)'}}>{r.byCat.feature || '-'}</td>
                            <td style={{padding:'8px 10px', textAlign:'center', borderBottom:'1px solid var(--line)', color: r.byCat.improvement > 0 ? '#0369a1' : 'var(--ink-4)'}}>{r.byCat.improvement || '-'}</td>
                            <td style={{padding:'8px 10px', textAlign:'center', borderBottom:'1px solid var(--line)', color: r.byCat.question > 0 ? 'var(--ink-2)' : 'var(--ink-4)'}}>{r.byCat.question || '-'}</td>
                            <td style={{padding:'8px 10px', textAlign:'center', borderBottom:'1px solid var(--line)', color: r.byPriority.urgent > 0 ? '#dc2626' : 'var(--ink-4)', fontWeight: r.byPriority.urgent > 0 ? 700 : 400}}>{r.byPriority.urgent || '-'}</td>
                            <td style={{padding:'8px 10px', textAlign:'center', borderBottom:'1px solid var(--line)', color: r.byStatus.done > 0 ? '#15803d' : 'var(--ink-4)', fontWeight: r.byStatus.done > 0 ? 600 : 400}}>{r.byStatus.done || '-'}</td>
                            <td style={{padding:'8px 10px', textAlign:'center', borderBottom:'1px solid var(--line)', color:'var(--ink-3)'}}>{(r.byStatus.in_progress || 0) + (r.byStatus.planned || 0) + (r.byStatus.reviewed || 0) || '-'}</td>
                            <td style={{padding:'8px 10px', textAlign:'center', borderBottom:'1px solid var(--line)', color: (r.byStatus.rejected + r.byStatus.duplicate) > 0 ? 'var(--ink-3)' : 'var(--ink-4)'}}>{(r.byStatus.rejected + r.byStatus.duplicate) || '-'}</td>
                            <td style={{padding:'8px 10px', textAlign:'center', borderBottom:'1px solid var(--line)', background:'#f0fdf4', fontWeight:700, color:'#15803d', fontSize:14}}>{r.score.toFixed(1)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })
          )}
          
          <div className="paper rounded-2xl p-3" style={{background:'#eff6ff', border:'1px solid #bfdbfe'}}>
            <div style={{fontSize:11, color:'#1e40af', lineHeight:1.6}}>
              💡 <strong>绩效分计算说明</strong><br/>
              • 基础分: 提 1 个 Bug = 3 分 · 1 个新功能 = 2 分 · 1 个改进 = 2 分 · 1 个疑问 = 1 分<br/>
              • 状态加成: 状态变成"✅ 已修复"时,该条得分 ×1.5(鼓励质量) · "❌ 拒绝/重复"时 ×0.3(扣分但不归零)<br/>
              • 优先级加成: 🚨 紧急 ×1.2 · ⚡ 重要 ×1.1 · 其他 ×1.0(鼓励关注真正影响工作的问题)
            </div>
          </div>
        </div>
      ) : (
      <>

      {/* 筛选区 */}
      <div className="paper rounded-2xl p-4" style={{marginBottom:10}}>
        <div style={{display:'flex', gap:6, marginBottom:8, flexWrap:'wrap'}}>
          {[
            { key:'all',  label:'全部',     count: reports.length },
            { key:'mine', label:'我提交的', count: stats.mine },
          ].map(t => {
            const sel = filterScope === t.key;
            return (
              <button key={t.key} onClick={() => setFilterScope(t.key)}
                style={{padding:'6px 12px', borderRadius:7, border:'1px solid '+(sel?'#0369a1':'var(--line)'), background: sel?'#0369a1':'white', color: sel?'white':'var(--ink-2)', cursor:'pointer', fontSize:12, fontWeight: sel?600:500, fontFamily:'inherit'}}>
                {t.label} <span style={{padding:'1px 6px', background: sel?'rgba(255,255,255,.25)':'#f5f5f7', borderRadius:8, marginLeft:2, fontSize:10}}>{t.count}</span>
              </button>
            );
          })}
        </div>
        <div style={{display:'flex', gap:6, flexWrap:'wrap', alignItems:'center', marginBottom:8}}>
          <span style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginRight:4}}>⏱ 时间:</span>
          <AdvancedDateFilter value={dateFilter} onChange={setDateFilter} size="sm" />
        </div>
        <div style={{display:'flex', gap:6, flexWrap:'wrap', alignItems:'center'}}>
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{padding:'5px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, background:'white', fontFamily:'inherit'}}>
            <option value="all">所有状态</option>
            {BUG_STATUSES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
          <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} style={{padding:'5px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, background:'white', fontFamily:'inherit'}}>
            <option value="all">所有类别</option>
            {BUG_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 搜索标题/描述/报告人..."
            style={{flex:1, minWidth:180, padding:'5px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, fontFamily:'inherit'}} />
        </div>
      </div>

      {/* 列表 */}
      {loading ? (
        <div style={{padding:'40px 14px', textAlign:'center', color:'var(--ink-4)'}}>加载中...</div>
      ) : filtered.length === 0 ? (
        <div className="paper rounded-2xl" style={{padding:'40px 14px', textAlign:'center', color:'var(--ink-4)', fontSize:13}}>
          {reports.length === 0 ? '还没有人提交反馈 · 点右上"+ 提交反馈"开始' : '当前筛选下没有反馈'}
        </div>
      ) : (
        <div style={{display:'flex', flexDirection:'column', gap:8}}>
          {filtered.map(r => (
            <BugReportCard key={r.id} report={r} user={user} onOpen={() => setOpenId(r.id)} />
          ))}
        </div>
      )}
      </>
      )}

      {/* Modals */}
      {showSubmit && (
        <BugReportSubmitModal user={user} onClose={() => setShowSubmit(false)} onSubmitted={() => { setShowSubmit(false); load(); toast('✓ 反馈已提交 · 主管会尽快查阅'); }} toast={toast} />
      )}
      {openReport && (
        <BugReportDetailModal report={openReport} user={user} employees={employees}
          onClose={() => setOpenId(null)} onChanged={load} toast={toast} />
      )}
      {showAiSummary && (
        <BugAiSummaryModal reports={reports} onClose={() => setShowAiSummary(false)} toast={toast} />
      )}
      {showExport && (
        <BugExportModal reports={reports} employees={employees} onClose={() => setShowExport(false)} toast={toast} />
      )}
    </div>
  );
};

// 反馈卡片
const BugReportCard = ({ report, user, onOpen }) => {
  const cat = findBug(BUG_CATEGORIES, report.category);
  const pri = findBug(BUG_PRIORITIES, report.priority);
  const st  = findBug(BUG_STATUSES,  report.status);
  const mod = (BUG_MODULES.find(m => m.id === report.module) || BUG_MODULES.find(m => m.id === 'other'));
  const isMine = report.created_by === user.id;
  const isUrgent = report.priority === 'urgent' && report.status !== 'done' && report.status !== 'rejected';
  const shotsCount = (report.screenshots || []).length;
  const ageDays = Math.floor((Date.now() - (report.created_at_ms || 0)) / 86400000);

  return (
    <div onClick={onOpen}
      style={{
        padding:'12px 14px', background:'white', border:'1px solid '+(isUrgent?'#fca5a5':'var(--line)'), borderRadius:10, cursor:'pointer',
        transition:'transform .12s, box-shadow .12s',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform='translateY(-1px)'; e.currentTarget.style.boxShadow='0 4px 14px rgba(0,0,0,.06)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}>
      <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'wrap', marginBottom:5}}>
        <span style={{padding:'2px 8px', background:cat.bg, color:cat.color, borderRadius:6, fontSize:10, fontWeight:600}}>{cat.label}</span>
        <span style={{padding:'2px 8px', background:pri.bg, color:pri.color, borderRadius:6, fontSize:10, fontWeight:600, animation: isUrgent?'pulse 2.4s ease-in-out infinite':'none'}}>{pri.label}</span>
        <span style={{padding:'2px 8px', background:st.bg, color:st.color, borderRadius:6, fontSize:10, fontWeight:600}}>{st.label}</span>
        <span style={{padding:'2px 8px', background:'#f5f5f7', color:'var(--ink-3)', borderRadius:6, fontSize:10}}>{mod.label}</span>
        {isMine && <span style={{padding:'2px 8px', background:'#eff6ff', color:'#1e40af', borderRadius:6, fontSize:10, fontWeight:600}}>👤 我提交的</span>}
        {report.version_fixed && <span style={{padding:'2px 8px', background:'#dcfce7', color:'#15803d', borderRadius:6, fontSize:10, fontWeight:600, fontFamily:'ui-monospace'}}>修复于 {report.version_fixed}</span>}
        <span style={{marginLeft:'auto', fontSize:10, color:'var(--ink-4)'}}>{ageDays === 0 ? '今天' : `${ageDays} 天前`}</span>
      </div>
      <div style={{fontSize:14, fontWeight:600, color:'var(--ink)', marginBottom:3}}>{report.title}</div>
      {report.description && (
        <div style={{fontSize:12, color:'var(--ink-2)', lineHeight:1.5, marginBottom:5, overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical'}}>
          {report.description}
        </div>
      )}
      <div style={{display:'flex', alignItems:'center', gap:10, fontSize:10, color:'var(--ink-3)', flexWrap:'wrap'}}>
        <span>📝 {report.created_by_name || '匿名'}</span>
        {shotsCount > 0 && <span>📷 {shotsCount} 张截图</span>}
        {report.app_version && <span style={{fontFamily:'ui-monospace'}}>📦 {report.app_version}</span>}
        {report.admin_response && <span style={{color:'#7c3aed', fontWeight:600}}>💬 主管已回复</span>}
        {(report.thread || []).length > 0 && <span style={{color:'#0369a1'}}>💬 {(report.thread || []).length} 条对话</span>}
      </div>
    </div>
  );
};

// 提交反馈表单
const BugReportSubmitModal = ({ user, onClose, onSubmitted, toast }) => {
  const [category, setCategory] = useState('bug');
  const [priority, setPriority] = useState('normal');
  const [module, setModule] = useState('cs');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [reproduceSteps, setReproduceSteps] = useState('');
  const [expectedBehavior, setExpectedBehavior] = useState('');
  const [actualBehavior, setActualBehavior] = useState('');
  const [screenshots, setScreenshots] = useState([]);
  const [sending, setSending] = useState(false);
  const fileInputRef = useRef(null);

  // 自动收集浏览器信息
  const browserInfo = useMemo(() => {
    const ua = navigator.userAgent || '';
    let browser = 'Unknown';
    if (/Chrome\/(\d+)/.test(ua)) browser = 'Chrome ' + RegExp.$1;
    else if (/Firefox\/(\d+)/.test(ua)) browser = 'Firefox ' + RegExp.$1;
    else if (/Safari\/(\d+)/.test(ua) && !/Chrome/.test(ua)) browser = 'Safari ' + (ua.match(/Version\/(\d+)/) ? RegExp.$1 : '');
    else if (/Edg\/(\d+)/.test(ua)) browser = 'Edge ' + RegExp.$1;
    let os = 'Unknown';
    if (/Windows NT 10/.test(ua)) os = 'Windows 10/11';
    else if (/Windows/.test(ua)) os = 'Windows';
    else if (/Mac OS X (\d+[._]\d+)/.test(ua)) os = 'macOS ' + RegExp.$1.replace('_', '.');
    else if (/Android (\d+)/.test(ua)) os = 'Android ' + RegExp.$1;
    else if (/iPhone OS (\d+)/.test(ua)) os = 'iOS ' + RegExp.$1;
    else if (/Linux/.test(ua)) os = 'Linux';
    return `${browser} · ${os} · ${window.innerWidth}×${window.innerHeight}`;
  }, []);

  const readFiles = async (files) => {
    if ((screenshots.length + files.length) > 8) {
      alert('最多 8 张截图,请删除一些');
      return;
    }
    const arr = [];
    for (const f of files) {
      if (f.size > 3 * 1024 * 1024) { alert(`截图 "${f.name}" 超过 3MB,请压缩`); continue; }
      const dataUrl = await new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(r.result);
        r.onerror = rej;
        r.readAsDataURL(f);
      });
      arr.push({ name: f.name || 'screenshot.png', mime: f.type, dataUrl, size: f.size });
    }
    if (arr.length) setScreenshots(prev => [...prev, ...arr]);
  };

  // 全局粘贴(打开模态期间任何位置 Ctrl+V 都可)
  useEffect(() => {
    const onPaste = async (e) => {
      const items = e.clipboardData?.items || [];
      const files = [];
      for (const it of items) {
        if (it.kind === 'file') {
          const f = it.getAsFile();
          if (f) files.push(f);
        }
      }
      if (files.length) await readFiles(files);
    };
    window.addEventListener('paste', onPaste);
    return () => window.removeEventListener('paste', onPaste);
  }, [screenshots.length]);

  const submit = async () => {
    if (!title.trim()) { alert('请填写"标题"'); return; }
    if (!description.trim() && !reproduceSteps.trim()) { alert('请至少填写"描述"或"复现步骤"其中一项'); return; }
    setSending(true);
    try {
      const userName = user.name + (user.alias ? ' ' + user.alias : '');
      const id = (crypto.randomUUID ? crypto.randomUUID() : ('bug_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8)));
      const record = {
        id,
        title: title.trim(),
        description: description.trim() || null,
        category, priority, status: 'new',
        module,
        reproduce_steps: reproduceSteps.trim() || null,
        expected_behavior: expectedBehavior.trim() || null,
        actual_behavior: actualBehavior.trim() || null,
        screenshots,
        app_version: APP_VERSION,
        browser_info: browserInfo,
        created_by: user.id,
        created_by_name: userName,
        created_by_role: user.role,
        created_at_ms: Date.now(),
        updated_at: new Date().toISOString(),
        thread: [],
      };
      const ok = await CLOUD.upsert('bug_reports', record);
      if (!ok) throw new Error('保存失败');
      onSubmitted();
    } catch (e) { alert('提交失败: ' + (e.message || e)); }
    setSending(false);
  };

  const onDrop = (e) => { e.preventDefault(); const files = Array.from(e.dataTransfer.files || []); if (files.length) readFiles(files); };
  const onDragOver = (e) => e.preventDefault();

  const isBug = category === 'bug';

  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:100000, display:'flex', alignItems:'flex-start', justifyContent:'center', overflow:'auto', padding:'20px'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, width:'100%', maxWidth:680, boxShadow:'0 20px 60px rgba(0,0,0,.25)', display:'flex', flexDirection:'column', maxHeight:'90vh'}}>
        {/* 头部 */}
        <div style={{padding:'14px 20px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0}}>
          <div>
            <div className="font-display" style={{fontSize:16, fontWeight:600}}>🐛 提交反馈</div>
            <div style={{fontSize:11, color:'var(--ink-3)', marginTop:2}}>支持 Ctrl+V 粘贴截图 · 自动记录版本+浏览器</div>
          </div>
          <button onClick={onClose} style={{background:'transparent', border:'none', cursor:'pointer', fontSize:18}}>×</button>
        </div>

        <div style={{padding:'16px 20px', overflowY:'auto', flex:1, display:'flex', flexDirection:'column', gap:12}}>
          {/* 类别 */}
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:5}}>类别 *</label>
            <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:6}}>
              {BUG_CATEGORIES.map(c => {
                const sel = category === c.id;
                return (
                  <button key={c.id} type="button" onClick={() => setCategory(c.id)}
                    style={{padding:'8px 10px', background: sel ? c.bg : 'white', border:'1px solid '+(sel?c.color:'var(--line)'), borderRadius:7, cursor:'pointer', fontFamily:'inherit', textAlign:'left'}}>
                    <div style={{fontSize:12, fontWeight:600, color: sel ? c.color : 'var(--ink)'}}>{c.label}</div>
                    <div style={{fontSize:10, color: sel ? c.color : 'var(--ink-3)', marginTop:1}}>{c.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 标题 */}
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>标题 * <span style={{color:'var(--ink-4)', fontWeight:400}}>· 一句话概括</span></label>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder={isBug ? '如: 保存客户后列表不刷新' : '如: 希望在评价模块加批量删除'}
              style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'inherit'}} />
          </div>

          {/* 模块 + 优先级 */}
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>哪个模块 *</label>
              <select value={module} onChange={e => setModule(e.target.value)}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, background:'white', fontFamily:'inherit'}}>
                {BUG_MODULES.map(m => <option key={m.id} value={m.id}>{m.label}</option>)}
              </select>
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>优先级 *</label>
              <select value={priority} onChange={e => setPriority(e.target.value)}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, background:'white', fontFamily:'inherit'}}>
                {BUG_PRIORITIES.map(p => <option key={p.id} value={p.id}>{p.label} · {p.desc}</option>)}
              </select>
            </div>
          </div>

          {/* 描述 */}
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>{isBug ? '描述问题' : '描述需求'} *</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} rows={3}
              placeholder={isBug ? '简单描述发生了什么 · 任何细节都有用' : '详细描述你希望系统怎么改'}
              style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'inherit', resize:'vertical'}} />
          </div>

          {/* Bug 才显示这 3 个字段 */}
          {isBug && (
            <>
              <div>
                <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>复现步骤 <span style={{color:'var(--ink-4)', fontWeight:400}}>· 强烈建议填写,5 分钟修好 vs 5 轮来回</span></label>
                <textarea value={reproduceSteps} onChange={e => setReproduceSteps(e.target.value)} rows={3}
                  placeholder={`1. 进【客服跟进】tab\n2. 点【+ 新增客户】\n3. 填好客户名 / 邮箱保存\n4. ...`}
                  style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, fontFamily:'ui-monospace, monospace', resize:'vertical'}} />
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>期望结果</label>
                  <textarea value={expectedBehavior} onChange={e => setExpectedBehavior(e.target.value)} rows={2}
                    placeholder="应该发生什么"
                    style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, fontFamily:'inherit', resize:'vertical'}} />
                </div>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>实际结果</label>
                  <textarea value={actualBehavior} onChange={e => setActualBehavior(e.target.value)} rows={2}
                    placeholder="实际发生了什么"
                    style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, fontFamily:'inherit', resize:'vertical'}} />
                </div>
              </div>
            </>
          )}

          {/* 截图区 */}
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>
              📷 截图 ({screenshots.length}/8) <span style={{color:'var(--ink-4)', fontWeight:400}}>· Ctrl+V 粘贴 / 拖拽 / 点击上传</span>
            </label>
            <div onDrop={onDrop} onDragOver={onDragOver} onClick={() => fileInputRef.current?.click()}
              style={{padding:'14px', border:'2px dashed var(--line)', borderRadius:8, background:'#fafafa', cursor:'pointer', textAlign:'center', fontSize:12, color:'var(--ink-3)'}}>
              📋 点这里上传 / 拖拽截图到此 / 任意位置 Ctrl+V 粘贴
            </div>
            <input ref={fileInputRef} type="file" multiple accept="image/*" style={{display:'none'}}
              onChange={e => { readFiles(Array.from(e.target.files || [])); e.target.value = ''; }} />
            {screenshots.length > 0 && (
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(100px, 1fr))', gap:6, marginTop:8}}>
                {screenshots.map((s, i) => (
                  <div key={i} style={{position:'relative', border:'1px solid var(--line)', borderRadius:6, overflow:'hidden'}}>
                    <img src={s.dataUrl} alt={s.name} style={{width:'100%', height:80, objectFit:'contain', display:'block', background:'var(--bg-elevated)'}} />
                    <button onClick={() => setScreenshots(prev => prev.filter((_, j) => j !== i))}
                      style={{position:'absolute', top:3, right:3, width:20, height:20, borderRadius:10, background:'rgba(0,0,0,.6)', color:'white', border:'none', cursor:'pointer', fontSize:11, lineHeight:'18px', padding:0}}>×</button>
                    <div style={{padding:'2px 4px', fontSize:9, color:'var(--ink-3)', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', background:'white'}} title={s.name}>{s.name}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 自动收集的信息(只读展示) */}
          <div style={{padding:'8px 10px', background:'#f0f9ff', border:'1px solid #bae6fd', borderRadius:7, fontSize:10, color:'#1e40af', lineHeight:1.6}}>
            🔍 <strong>自动记录</strong>(无需手填):<br/>
            版本 <code style={{padding:'1px 4px', background:'white', borderRadius:3}}>{APP_VERSION}</code> · 浏览器 <code style={{padding:'1px 4px', background:'white', borderRadius:3}}>{browserInfo}</code>
          </div>
        </div>

        {/* 底部 */}
        <div style={{padding:'10px 20px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', gap:8, flexShrink:0}}>
          <div style={{fontSize:10, color:'var(--ink-3)'}}>提交后主管会看到并尽快处理 · 你可以在列表里跟进进度</div>
          <div style={{display:'flex', gap:6}}>
            <button onClick={onClose} disabled={sending} className="btn-sec" style={{padding:'7px 14px', fontSize:12}}>取消</button>
            <button onClick={submit} disabled={sending}
              style={{padding:'7px 18px', background:'#dc2626', color:'white', border:'none', borderRadius:7, cursor:sending?'wait':'pointer', fontSize:13, fontWeight:600, fontFamily:'inherit'}}>
              {sending ? '提交中...' : '✓ 提交反馈'}
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

// 详情 modal — 主管能改状态/回复, 普通用户只能看
const BugReportDetailModal = ({ report, user, employees, onClose, onChanged, toast }) => {
  const [replyText, setReplyText] = useState('');
  const [adminResponse, setAdminResponse] = useState(report.admin_response || '');
  const [versionFixed, setVersionFixed] = useState(report.version_fixed || '');
  const [imgPreview, setImgPreview] = useState(null);
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  const isOwner = report.created_by === user.id;
  const cat = findBug(BUG_CATEGORIES, report.category);
  const pri = findBug(BUG_PRIORITIES, report.priority);
  const st  = findBug(BUG_STATUSES,  report.status);
  const mod = (BUG_MODULES.find(m => m.id === report.module) || BUG_MODULES.find(m => m.id === 'other'));

  const setStatus = async (newStatus) => {
    if (!isAdmin) return;
    try {
      const userName = user.name + (user.alias ? ' ' + user.alias : '');
      const updates = {
        ...report,
        status: newStatus,
        updated_at: new Date().toISOString(),
      };
      if (newStatus === 'reviewed' && !report.assigned_to_id) {
        updates.assigned_to_id = user.id;
        updates.assigned_to_name = userName;
      }
      if (newStatus === 'done' && !versionFixed.trim()) {
        // 自动填当前版本
        updates.version_fixed = APP_VERSION;
        setVersionFixed(APP_VERSION);
      }
      const ok = await CLOUD.upsert('bug_reports', updates);
      if (ok) { toast(`✓ 状态改为 ${findBug(BUG_STATUSES, newStatus).label}`); onChanged && onChanged(); }
    } catch (e) { alert('更新失败: ' + (e.message || e)); }
  };

  const saveAdminResponse = async () => {
    if (!isAdmin) return;
    try {
      const ok = await CLOUD.upsert('bug_reports', {
        ...report,
        admin_response: adminResponse.trim() || null,
        version_fixed: versionFixed.trim() || null,
        updated_at: new Date().toISOString(),
      });
      if (ok) { toast('✓ 已保存主管回复'); onChanged && onChanged(); }
    } catch (e) { alert('保存失败: ' + (e.message || e)); }
  };

  const addReply = async () => {
    if (!replyText.trim()) return;
    try {
      const userName = user.name + (user.alias ? ' ' + user.alias : '');
      const newThread = [...(report.thread || []), {
        user_id: user.id, user_name: userName, role: user.role,
        content: replyText.trim(), ts: Date.now(),
      }];
      const ok = await CLOUD.upsert('bug_reports', {
        ...report,
        thread: newThread,
        updated_at: new Date().toISOString(),
      });
      if (ok) { setReplyText(''); toast('✓ 已回复'); onChanged && onChanged(); }
    } catch (e) { alert('回复失败: ' + (e.message || e)); }
  };

  const formatTs = (ms) => {
    if (!ms) return '';
    const d = new Date(ms);
    return d.toLocaleString('zh-CN', { month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit' });
  };

  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:100000, display:'flex', alignItems:'flex-start', justifyContent:'center', overflow:'auto', padding:'20px'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, width:'100%', maxWidth:760, boxShadow:'0 20px 60px rgba(0,0,0,.25)', display:'flex', flexDirection:'column', maxHeight:'92vh'}}>
        {/* 头部 */}
        <div style={{padding:'14px 20px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexShrink:0, gap:8}}>
          <div style={{flex:1}}>
            <div style={{display:'flex', alignItems:'center', gap:6, flexWrap:'wrap', marginBottom:4}}>
              <span style={{padding:'2px 8px', background:cat.bg, color:cat.color, borderRadius:6, fontSize:10, fontWeight:700}}>{cat.label}</span>
              <span style={{padding:'2px 8px', background:pri.bg, color:pri.color, borderRadius:6, fontSize:10, fontWeight:700}}>{pri.label}</span>
              <span style={{padding:'2px 8px', background:st.bg, color:st.color, borderRadius:6, fontSize:10, fontWeight:700}}>{st.label}</span>
              <span style={{padding:'2px 8px', background:'#f5f5f7', color:'var(--ink-3)', borderRadius:6, fontSize:10}}>{mod.label}</span>
            </div>
            <div className="font-display" style={{fontSize:16, fontWeight:600, lineHeight:1.3}}>{report.title}</div>
            <div style={{fontSize:11, color:'var(--ink-3)', marginTop:3}}>
              {report.created_by_name} {report.created_by_role === 'admin' || report.created_by_role === 'super_admin' ? '(主管)' : report.created_by_role === 'finance' ? '(财务)' : ''} · {formatTs(report.created_at_ms)}
            </div>
          </div>
          <button onClick={onClose} style={{background:'transparent', border:'none', cursor:'pointer', fontSize:18, padding:0, lineHeight:1}}>×</button>
        </div>

        <div style={{padding:'14px 20px', overflowY:'auto', flex:1}}>
          {/* 自动信息 */}
          <div style={{display:'flex', gap:8, flexWrap:'wrap', fontSize:11, color:'var(--ink-3)', marginBottom:14, padding:'8px 10px', background:'#fafaf7', borderRadius:8}}>
            {report.app_version && <span>📦 <strong>版本</strong>: <code style={{fontFamily:'ui-monospace'}}>{report.app_version}</code></span>}
            {report.browser_info && <span>· 🖥 <strong>环境</strong>: {report.browser_info}</span>}
            {report.version_fixed && <span style={{color:'#15803d', fontWeight:600}}>· ✅ 修复于 <code style={{fontFamily:'ui-monospace'}}>{report.version_fixed}</code></span>}
          </div>

          {/* 描述 */}
          {report.description && (
            <div style={{marginBottom:12}}>
              <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', marginBottom:4}}>📝 描述</div>
              <div style={{padding:'10px 12px', background:'#fafaf7', borderRadius:8, fontSize:13, color:'var(--ink-2)', lineHeight:1.6, whiteSpace:'pre-wrap'}}>{report.description}</div>
            </div>
          )}

          {report.reproduce_steps && (
            <div style={{marginBottom:12}}>
              <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', marginBottom:4}}>🔁 复现步骤</div>
              <div style={{padding:'10px 12px', background:'#fef3c7', border:'1px solid #fde047', borderRadius:8, fontSize:12, color:'#7c2d12', lineHeight:1.6, whiteSpace:'pre-wrap', fontFamily:'ui-monospace, monospace'}}>{report.reproduce_steps}</div>
            </div>
          )}

          {(report.expected_behavior || report.actual_behavior) && (
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:12}}>
              {report.expected_behavior && (
                <div>
                  <div style={{fontSize:11, fontWeight:600, color:'#15803d', marginBottom:4}}>✓ 期望</div>
                  <div style={{padding:'8px 10px', background:'#dcfce7', borderRadius:7, fontSize:12, color:'#15803d', lineHeight:1.5, whiteSpace:'pre-wrap'}}>{report.expected_behavior}</div>
                </div>
              )}
              {report.actual_behavior && (
                <div>
                  <div style={{fontSize:11, fontWeight:600, color:'#b91c1c', marginBottom:4}}>✗ 实际</div>
                  <div style={{padding:'8px 10px', background:'#fee2e2', borderRadius:7, fontSize:12, color:'#b91c1c', lineHeight:1.5, whiteSpace:'pre-wrap'}}>{report.actual_behavior}</div>
                </div>
              )}
            </div>
          )}

          {/* 截图 */}
          {(report.screenshots || []).length > 0 && (
            <div style={{marginBottom:12}}>
              <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', marginBottom:4}}>📷 截图 ({(report.screenshots || []).length})</div>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(110px, 1fr))', gap:6}}>
                {(report.screenshots || []).map((s, i) => (
                  <div key={i} onClick={() => setImgPreview(s.dataUrl)}
                    style={{position:'relative', border:'1px solid var(--line)', borderRadius:6, overflow:'hidden', cursor:'pointer', background:'white'}}>
                    <img src={s.dataUrl} alt={s.name} style={{width:'100%', height:90, objectFit:'contain', display:'block', background:'var(--bg-elevated)'}} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 主管回复 */}
          {(report.admin_response || isAdmin) && (
            <div style={{marginBottom:12, padding:'12px', background:'#f0f9ff', border:'1px solid #bae6fd', borderRadius:8}}>
              <div style={{fontSize:11, fontWeight:600, color:'#0369a1', marginBottom:6}}>💬 主管回复</div>
              {isAdmin ? (
                <>
                  <textarea value={adminResponse} onChange={e => setAdminResponse(e.target.value)} rows={3}
                    placeholder="给提交人的回复(如:已记入路线图,下版本修复 / 暂不计划 / 重复 #abc,见那条..)"
                    style={{width:'100%', padding:'7px 10px', border:'1px solid #bae6fd', borderRadius:7, fontSize:12, fontFamily:'inherit', resize:'vertical', background:'white'}} />
                  <div style={{display:'flex', alignItems:'center', gap:8, marginTop:8, flexWrap:'wrap'}}>
                    <label style={{fontSize:11, color:'#0369a1', fontWeight:600}}>修复版本:</label>
                    <input value={versionFixed} onChange={e => setVersionFixed(e.target.value)} placeholder={`如 ${APP_VERSION.replace(/-fix\d+.*$/, '-fix14')} 或留空`}
                      style={{padding:'5px 8px', border:'1px solid #bae6fd', borderRadius:6, fontSize:11, fontFamily:'ui-monospace, monospace', minWidth:200}} />
                    <button onClick={saveAdminResponse}
                      style={{padding:'5px 12px', background:'#0369a1', color:'white', border:'none', borderRadius:6, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
                      💾 保存回复
                    </button>
                  </div>
                </>
              ) : (
                <div style={{fontSize:13, color:'#1e40af', whiteSpace:'pre-wrap', lineHeight:1.6}}>{report.admin_response || <em style={{color:'var(--ink-4)'}}>主管还没回复</em>}</div>
              )}
            </div>
          )}

          {/* 状态切换(主管 only) */}
          {isAdmin && (
            <div style={{marginBottom:12, padding:'12px', background:'#fafaf7', border:'1px solid var(--line)', borderRadius:8}}>
              <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', marginBottom:6}}>🔄 改状态</div>
              <div style={{display:'flex', gap:4, flexWrap:'wrap'}}>
                {BUG_STATUSES.map(s => {
                  const sel = report.status === s.id;
                  return (
                    <button key={s.id} onClick={() => setStatus(s.id)} disabled={sel}
                      style={{padding:'5px 10px', background: sel ? s.color : 'white', color: sel ? 'white' : s.color, border:'1px solid '+s.color, borderRadius:6, cursor: sel?'default':'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit', opacity: sel?0.8:1}}>
                      {sel && '✓ '}{s.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 对话区 */}
          {(report.thread || []).length > 0 && (
            <div style={{marginBottom:12}}>
              <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', marginBottom:4}}>💬 对话 ({(report.thread || []).length})</div>
              <div style={{display:'flex', flexDirection:'column', gap:5}}>
                {(report.thread || []).map((m, i) => {
                  const isMine = m.user_id === user.id;
                  const isAdminMsg = m.role === 'admin' || m.role === 'super_admin';
                  return (
                    <div key={i} style={{display:'flex', justifyContent: isMine ? 'flex-end':'flex-start'}}>
                      <div style={{maxWidth:'80%', padding:'7px 11px', background: isAdminMsg ? '#dbeafe' : (isMine ? '#dcfce7' : 'white'), border:'1px solid '+(isAdminMsg?'#bfdbfe':(isMine?'#86efac':'var(--line)')), borderRadius:9, fontSize:12, color:'var(--ink-2)', lineHeight:1.5}}>
                        <div style={{fontSize:10, color: isAdminMsg ? '#1e40af' : 'var(--ink-3)', marginBottom:2, fontWeight:600}}>
                          {isAdminMsg && '👑 '}{m.user_name} · {formatTs(m.ts)}
                        </div>
                        <div style={{whiteSpace:'pre-wrap'}}>{m.content}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 回复输入框 */}
          {(isOwner || isAdmin) && (
            <div>
              <div style={{display:'flex', gap:6}}>
                <textarea value={replyText} onChange={e => setReplyText(e.target.value)} rows={2}
                  placeholder={isAdmin ? '回复用户...(说说预期修复时间)' : '补充信息 / 跟主管对话...'}
                  onKeyDown={e => { if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') addReply(); }}
                  style={{flex:1, padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, fontFamily:'inherit', resize:'vertical'}} />
                <button onClick={addReply} disabled={!replyText.trim()}
                  style={{padding:'7px 14px', background:'#0369a1', color:'white', border:'none', borderRadius:7, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit', alignSelf:'flex-start', opacity: replyText.trim()?1:0.4}}>
                  发送
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 图片预览 */}
      {imgPreview && (
        <div onClick={() => setImgPreview(null)} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.9)', zIndex:100001, display:'flex', alignItems:'center', justifyContent:'center', padding:20}}>
          <img src={imgPreview} alt="" style={{maxWidth:'100%', maxHeight:'100%'}} />
        </div>
      )}
    </div>,
    document.body
  );
};

// ════════════════════════════════════════════════════════════════════
// 📥 导出反馈 modal — 主管/老板下载所有反馈,支持 Markdown / HTML / CSV / PDF 四种格式
// 主要用途:把所有 bug 打包给 AI 一次性修复(替代手动复制粘贴)
// ════════════════════════════════════════════════════════════════════
const BugExportModal = ({ reports, employees, onClose, toast }) => {
  const [filterStatus, setFilterStatus] = useState('pending');  // 'all' | 'pending' | 'done'
  // 🆕 fix15: 升级为对象格式 (兼容旧 '7'/'30'/'90')
  const [dateFilter, setDateFilter] = useState({ kind:'all' });
  const dateRange = useMemo(() => getDateRange(dateFilter), [dateFilter]);
  const [filterCategory, setFilterCategory] = useState('all');
  const [includeScreenshots, setIncludeScreenshots] = useState(true);
  const [includeThread, setIncludeThread] = useState(true);
  const [includeResponse, setIncludeResponse] = useState(true);
  const [exporting, setExporting] = useState(false);

  // 应用筛选
  const filtered = useMemo(() => {
    let arr = reports.filter(r => !r.deleted);
    if (filterStatus === 'pending') arr = arr.filter(r => r.status === 'new' || r.status === 'reviewed' || r.status === 'planned' || r.status === 'in_progress');
    else if (filterStatus === 'done') arr = arr.filter(r => r.status === 'done');
    // 🆕 fix15: 日期范围筛选
    if (dateRange.start > 0 || dateRange.end < Infinity) {
      arr = arr.filter(r => {
        const t = r.created_at_ms || 0;
        return t >= dateRange.start && t < dateRange.end;
      });
    }
    if (filterCategory !== 'all') arr = arr.filter(r => r.category === filterCategory);
    // 排序:紧急 + 新 在前
    arr = [...arr].sort((a, b) => {
      const pri = { urgent:4, high:3, normal:2, low:1 };
      const pA = pri[a.priority] || 0, pB = pri[b.priority] || 0;
      if (pA !== pB) return pB - pA;
      return (b.created_at_ms || 0) - (a.created_at_ms || 0);
    });
    return arr;
  }, [reports, filterStatus, dateRange, filterCategory]);

  // 文件名前缀(含时间戳)
  const filenamePrefix = () => {
    const d = new Date();
    const stamp = `${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}_${String(d.getHours()).padStart(2,'0')}${String(d.getMinutes()).padStart(2,'0')}`;
    const scope = filterStatus === 'pending' ? '待修复' : filterStatus === 'done' ? '已修复' : '全部';
    // 🆕 fix15: 文件名也带上时间范围(如 6月第2周)
    const dateLabel = dateFilter?.kind === 'all' ? '' : ('_' + formatDateFilterLabel(dateFilter).replace(/\s/g, ''));
    return `bug反馈_${scope}${dateLabel}_${filtered.length}条_${stamp}`;
  };

  const formatTs = (ms) => {
    if (!ms) return '';
    return new Date(ms).toLocaleString('zh-CN', { year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit' });
  };
  const csvEscape = (v) => {
    if (v === null || v === undefined) return '';
    const s = String(v).replace(/"/g, '""');
    return /[",\n\r]/.test(s) ? `"${s}"` : s;
  };
  const fileSave = (blob, filename) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
  };

  // ──────────────────── Markdown 导出 ────────────────────
  const exportMarkdown = () => {
    setExporting(true);
    try {
      const lines = [];
      lines.push(`# 🐛 客服系统反馈摘要`);
      lines.push('');
      lines.push(`> 生成时间: ${new Date().toLocaleString('zh-CN')}  `);
      lines.push(`> 当前版本: \`${APP_VERSION}\`  `);
      lines.push(`> 筛选范围: ${filterStatus === 'pending' ? '待修复' : filterStatus === 'done' ? '已修复' : '全部'} · ${filtered.length} 条`);
      lines.push('');
      lines.push('---');
      lines.push('');
      lines.push('## 📋 给 AI 的话');
      lines.push('');
      lines.push('请你 (Claude) 分析以下反馈,对每条:');
      lines.push('1. 简短分析问题原因 (代码层面)');
      lines.push('2. 提出修复方案');
      lines.push('3. 标记下个版本号');
      lines.push('');
      lines.push('我确认后,你直接出新 HTML。');
      lines.push('');
      lines.push('---');
      lines.push('');

      filtered.forEach((r, i) => {
        const cat = findBug(BUG_CATEGORIES, r.category);
        const pri = findBug(BUG_PRIORITIES, r.priority);
        const st  = findBug(BUG_STATUSES,  r.status);
        const mod = (BUG_MODULES.find(m => m.id === r.module) || { label: r.module || '未指定' });
        lines.push(`## ${i+1}. ${r.title}`);
        lines.push('');
        lines.push(`**ID**: \`${r.id.slice(0, 8)}\` · **${cat.label}** · **${pri.label}** · **${st.label}** · ${mod.label}`);
        lines.push('');
        lines.push(`- **报告人**: ${r.created_by_name || '匿名'}${r.created_by_role === 'admin' || r.created_by_role === 'super_admin' ? ' (主管)' : r.created_by_role === 'finance' ? ' (财务)' : ''}`);
        lines.push(`- **时间**: ${formatTs(r.created_at_ms)}`);
        if (r.app_version) lines.push(`- **版本**: \`${r.app_version}\``);
        if (r.browser_info) lines.push(`- **环境**: ${r.browser_info}`);
        if (r.version_fixed) lines.push(`- **已修复于**: \`${r.version_fixed}\` ✅`);
        lines.push('');
        if (r.description) {
          lines.push('### 描述');
          lines.push(r.description);
          lines.push('');
        }
        if (r.reproduce_steps) {
          lines.push('### 复现步骤');
          lines.push('```');
          lines.push(r.reproduce_steps);
          lines.push('```');
          lines.push('');
        }
        if (r.expected_behavior) {
          lines.push('### ✓ 期望结果');
          lines.push(r.expected_behavior);
          lines.push('');
        }
        if (r.actual_behavior) {
          lines.push('### ✗ 实际结果');
          lines.push(r.actual_behavior);
          lines.push('');
        }
        if (includeScreenshots && (r.screenshots || []).length > 0) {
          lines.push(`### 📷 截图 (${(r.screenshots || []).length} 张)`);
          (r.screenshots || []).forEach((s, j) => {
            lines.push(`![${s.name || `screenshot_${j+1}`}](${s.dataUrl})`);
            lines.push('');
          });
        }
        if (includeResponse && r.admin_response) {
          lines.push('### 💬 主管回复');
          lines.push(`> ${r.admin_response.split('\n').join('\n> ')}`);
          lines.push('');
        }
        if (includeThread && (r.thread || []).length > 0) {
          lines.push(`### 💬 对话历史 (${(r.thread || []).length} 条)`);
          (r.thread || []).forEach(m => {
            const tag = m.role === 'admin' || m.role === 'super_admin' ? '**主管**' : '**用户**';
            lines.push(`- ${tag} ${m.user_name} · ${formatTs(m.ts)}:`);
            lines.push(`  ${m.content.split('\n').join('\n  ')}`);
          });
          lines.push('');
        }
        lines.push('---');
        lines.push('');
      });
      const blob = new Blob([lines.join('\n')], { type:'text/markdown;charset=utf-8' });
      fileSave(blob, `${filenamePrefix()}.md`);
      toast('✓ Markdown 已下载 · 可直接拖到 Claude 对话');
    } catch (e) { alert('导出失败: ' + (e.message || e)); }
    setExporting(false);
  };

  // ──────────────────── HTML 导出 ────────────────────
  const buildHtml = (forPrint = false) => {
    const css = `
      * { box-sizing: border-box; }
      body { font-family: -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif; margin: 0; padding: 30px 40px; color: #1a1a17; background: white; line-height: 1.6; font-size: 13px; }
      h1 { font-size: 22px; color: #7c2d12; margin: 0 0 6px 0; padding-bottom: 10px; border-bottom: 2px solid #e8e6e0; }
      h2 { font-size: 17px; color: #1a1a17; margin: 26px 0 10px 0; padding: 6px 10px; background: linear-gradient(90deg, #fef3c7 0%, transparent 100%); border-left: 4px solid #d97706; }
      h3 { font-size: 13px; color: #3a3a35; margin: 14px 0 6px 0; }
      .meta { color: #7a7a72; font-size: 11px; margin-bottom: 14px; }
      .meta strong { color: #1a1a17; }
      .tags { display: flex; gap: 5px; flex-wrap: wrap; margin: 6px 0 10px 0; }
      .tag { padding: 2px 8px; border-radius: 6px; font-size: 10px; font-weight: 600; }
      .tag.cat-bug { background: #fee2e2; color: #b91c1c; }
      .tag.cat-feature { background: #f3e8ff; color: #7c3aed; }
      .tag.cat-improvement { background: #dbeafe; color: #0369a1; }
      .tag.cat-question { background: #f5f5f7; color: #86868b; }
      .tag.pri-urgent { background: #fee2e2; color: #b91c1c; }
      .tag.pri-high { background: #fef3c7; color: #d97706; }
      .tag.pri-normal { background: #f5f5f7; color: #86868b; }
      .tag.pri-low { background: #fafafa; color: #a8a8a8; }
      .tag.st-new { background: #dbeafe; color: #0369a1; }
      .tag.st-reviewed, .tag.st-planned { background: #fef3c7; color: #d97706; }
      .tag.st-in_progress { background: #dbeafe; color: #0369a1; }
      .tag.st-done { background: #dcfce7; color: #15803d; }
      .tag.st-rejected, .tag.st-duplicate { background: #f5f5f7; color: #86868b; }
      .tag.mod { background: #f5f5f7; color: #3a3a35; }
      .info-box { padding: 8px 12px; background: #fafaf7; border: 1px solid #e8e6e0; border-radius: 8px; font-size: 11px; color: #7a7a72; margin-bottom: 12px; }
      .info-box code { font-family: ui-monospace, "Cascadia Code", monospace; padding: 1px 6px; background: white; border-radius: 3px; }
      .repro { padding: 10px 12px; background: #fef3c7; border: 1px solid #fde047; border-radius: 8px; font-family: ui-monospace, monospace; font-size: 11px; white-space: pre-wrap; color: #7c2d12; }
      .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
      .grid2 .col-ok { padding: 8px 10px; background: #dcfce7; border: 1px solid #86efac; border-radius: 7px; color: #15803d; white-space: pre-wrap; }
      .grid2 .col-bad { padding: 8px 10px; background: #fee2e2; border: 1px solid #fca5a5; border-radius: 7px; color: #b91c1c; white-space: pre-wrap; }
      .grid2 .col-ok strong, .grid2 .col-bad strong { display: block; font-size: 11px; margin-bottom: 4px; }
      .desc { padding: 10px 12px; background: #fafaf7; border-radius: 8px; white-space: pre-wrap; color: #3a3a35; }
      .response { padding: 10px 12px; background: #eff6ff; border: 1px solid #bae6fd; border-radius: 8px; color: #1e40af; white-space: pre-wrap; }
      .screenshots { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 8px; margin-top: 6px; }
      .screenshots img { width: 100%; max-height: 240px; object-fit: contain; border: 1px solid #e8e6e0; border-radius: 6px; background: #fafafa; display: block; }
      .thread { padding: 10px 12px; background: #fafaf7; border-radius: 8px; }
      .thread-item { padding: 6px 0; border-bottom: 1px dashed #e8e6e0; font-size: 12px; }
      .thread-item:last-child { border: none; }
      .thread-who { color: #7a7a72; font-size: 10px; margin-bottom: 2px; }
      .report-block { padding: 18px 20px; border: 1px solid #e8e6e0; border-radius: 10px; margin-bottom: 16px; background: white; page-break-inside: avoid; }
      .report-title { font-size: 16px; font-weight: 600; margin: 6px 0; }
      .footer { margin-top: 30px; padding-top: 16px; border-top: 1px solid #e8e6e0; font-size: 10px; color: #a8a8a8; text-align: center; }
      @media print {
        body { padding: 15px 20px; }
        .report-block { page-break-inside: avoid; box-shadow: none; }
        .screenshots img { max-height: 200px; }
        h2 { page-break-after: avoid; }
        h3 { page-break-after: avoid; }
      }
    `;
    const html = [];
    html.push('<!DOCTYPE html>');
    html.push('<html lang="zh"><head><meta charset="UTF-8">');
    html.push(`<title>${filenamePrefix()}</title>`);
    html.push(`<style>${css}</style>`);
    html.push('</head><body>');
    html.push(`<h1>🐛 客服系统反馈摘要</h1>`);
    html.push(`<div class="meta">`);
    html.push(`<strong>生成时间</strong>: ${new Date().toLocaleString('zh-CN')} · `);
    html.push(`<strong>当前版本</strong>: <code>${APP_VERSION}</code> · `);
    html.push(`<strong>筛选范围</strong>: ${filterStatus === 'pending' ? '待修复' : filterStatus === 'done' ? '已修复' : '全部'} · `);
    html.push(`<strong>共 ${filtered.length} 条</strong>`);
    html.push(`</div>`);

    // 统计概要
    const byCategory = {};
    const byPriority = {};
    filtered.forEach(r => {
      byCategory[r.category] = (byCategory[r.category] || 0) + 1;
      byPriority[r.priority] = (byPriority[r.priority] || 0) + 1;
    });
    html.push('<div class="info-box">');
    html.push('<strong>按类别</strong>: ');
    html.push(BUG_CATEGORIES.filter(c => byCategory[c.id]).map(c => `${c.label} ${byCategory[c.id]}`).join(' · '));
    html.push(' &nbsp;|&nbsp; <strong>按优先级</strong>: ');
    html.push(BUG_PRIORITIES.filter(p => byPriority[p.id]).map(p => `${p.label} ${byPriority[p.id]}`).join(' · '));
    html.push('</div>');

    filtered.forEach((r, i) => {
      const cat = findBug(BUG_CATEGORIES, r.category);
      const pri = findBug(BUG_PRIORITIES, r.priority);
      const st  = findBug(BUG_STATUSES,  r.status);
      const mod = (BUG_MODULES.find(m => m.id === r.module) || { label: r.module || '未指定' });
      html.push('<div class="report-block">');
      html.push(`<h2>#${i+1} ${r.title}</h2>`);
      html.push('<div class="tags">');
      html.push(`<span class="tag cat-${r.category}">${cat.label}</span>`);
      html.push(`<span class="tag pri-${r.priority}">${pri.label}</span>`);
      html.push(`<span class="tag st-${r.status}">${st.label}</span>`);
      html.push(`<span class="tag mod">${mod.label}</span>`);
      if (r.version_fixed) html.push(`<span class="tag st-done">修复于 ${r.version_fixed}</span>`);
      html.push('</div>');
      html.push('<div class="info-box">');
      html.push(`<strong>ID</strong>: <code>${r.id.slice(0,8)}</code> · `);
      html.push(`<strong>报告人</strong>: ${r.created_by_name || '匿名'}${r.created_by_role === 'admin' || r.created_by_role === 'super_admin' ? ' (主管)' : r.created_by_role === 'finance' ? ' (财务)' : ''} · `);
      html.push(`<strong>时间</strong>: ${formatTs(r.created_at_ms)}`);
      if (r.app_version) html.push(` · <strong>版本</strong>: <code>${r.app_version}</code>`);
      if (r.browser_info) html.push(` · <strong>环境</strong>: ${r.browser_info}`);
      html.push('</div>');

      if (r.description) {
        html.push('<h3>📝 描述</h3>');
        html.push(`<div class="desc">${(r.description || '').replace(/</g, '&lt;')}</div>`);
      }
      if (r.reproduce_steps) {
        html.push('<h3>🔁 复现步骤</h3>');
        html.push(`<div class="repro">${(r.reproduce_steps || '').replace(/</g, '&lt;')}</div>`);
      }
      if (r.expected_behavior || r.actual_behavior) {
        html.push('<div class="grid2" style="margin-top: 10px;">');
        if (r.expected_behavior) html.push(`<div class="col-ok"><strong>✓ 期望</strong>${(r.expected_behavior || '').replace(/</g, '&lt;')}</div>`);
        if (r.actual_behavior) html.push(`<div class="col-bad"><strong>✗ 实际</strong>${(r.actual_behavior || '').replace(/</g, '&lt;')}</div>`);
        html.push('</div>');
      }
      if (includeScreenshots && (r.screenshots || []).length > 0) {
        html.push(`<h3>📷 截图 (${(r.screenshots || []).length} 张)</h3>`);
        html.push('<div class="screenshots">');
        (r.screenshots || []).forEach(s => {
          html.push(`<img src="${s.dataUrl}" alt="${(s.name || '').replace(/"/g, '&quot;')}" />`);
        });
        html.push('</div>');
      }
      if (includeResponse && r.admin_response) {
        html.push('<h3>💬 主管回复</h3>');
        html.push(`<div class="response">${(r.admin_response || '').replace(/</g, '&lt;')}</div>`);
      }
      if (includeThread && (r.thread || []).length > 0) {
        html.push(`<h3>💬 对话 (${(r.thread || []).length})</h3>`);
        html.push('<div class="thread">');
        (r.thread || []).forEach(m => {
          const isAdminMsg = m.role === 'admin' || m.role === 'super_admin';
          html.push('<div class="thread-item">');
          html.push(`<div class="thread-who">${isAdminMsg ? '👑 ' : ''}${m.user_name} · ${formatTs(m.ts)}</div>`);
          html.push(`<div>${(m.content || '').replace(/</g, '&lt;').replace(/\n/g, '<br/>')}</div>`);
          html.push('</div>');
        });
        html.push('</div>');
      }
      html.push('</div>');  // /report-block
    });

    html.push(`<div class="footer">Dekorfine 客服系统 · ${APP_VERSION} · 共 ${filtered.length} 条反馈</div>`);
    if (forPrint) html.push(`<script>window.addEventListener('load', () => setTimeout(() => window.print(), 400));<\/script>`);
    html.push('</body></html>');
    return html.join('\n');
  };

  const exportHtml = () => {
    setExporting(true);
    try {
      const blob = new Blob([buildHtml(false)], { type:'text/html;charset=utf-8' });
      fileSave(blob, `${filenamePrefix()}.html`);
      toast('✓ HTML 已下载 · 可双击打开或用 Word 打开');
    } catch (e) { alert('导出失败: ' + (e.message || e)); }
    setExporting(false);
  };

  const exportPdf = () => {
    setExporting(true);
    try {
      const html = buildHtml(true);
      const w = window.open('', '_blank', 'width=900,height=900');
      if (!w) { alert('请允许浏览器弹窗,然后重试'); setExporting(false); return; }
      w.document.write(html);
      w.document.close();
      toast('✓ 已打开打印对话框 · 选"另存为 PDF"');
    } catch (e) { alert('导出失败: ' + (e.message || e)); }
    setExporting(false);
  };

  // ──────────────────── CSV 导出 ────────────────────
  const exportCsv = () => {
    setExporting(true);
    try {
      const headers = ['ID','标题','类别','优先级','状态','模块','报告人','报告人角色','报告时间','版本','环境','描述','复现步骤','期望','实际','截图数','主管回复','修复版本','对话数'];
      const rows = [headers.map(csvEscape).join(',')];
      filtered.forEach(r => {
        const cat = findBug(BUG_CATEGORIES, r.category);
        const pri = findBug(BUG_PRIORITIES, r.priority);
        const st  = findBug(BUG_STATUSES,  r.status);
        const mod = (BUG_MODULES.find(m => m.id === r.module) || { label: r.module || '' });
        rows.push([
          r.id.slice(0,8),
          r.title || '',
          cat.label,
          pri.label,
          st.label,
          mod.label,
          r.created_by_name || '',
          r.created_by_role || '',
          formatTs(r.created_at_ms),
          r.app_version || '',
          r.browser_info || '',
          r.description || '',
          r.reproduce_steps || '',
          r.expected_behavior || '',
          r.actual_behavior || '',
          (r.screenshots || []).length,
          r.admin_response || '',
          r.version_fixed || '',
          (r.thread || []).length,
        ].map(csvEscape).join(','));
      });
      // BOM 让 Excel 正确识别 UTF-8 中文
      const blob = new Blob(['\ufeff' + rows.join('\n')], { type:'text/csv;charset=utf-8' });
      fileSave(blob, `${filenamePrefix()}.csv`);
      toast('✓ CSV 已下载 · 用 Excel 打开');
    } catch (e) { alert('导出失败: ' + (e.message || e)); }
    setExporting(false);
  };

  // 估算文件大小
  const sizeEstimate = useMemo(() => {
    let shotsBytes = 0;
    if (includeScreenshots) {
      filtered.forEach(r => {
        (r.screenshots || []).forEach(s => { shotsBytes += (s.size || 0); });
      });
    }
    const textBytes = filtered.length * 500;
    const total = textBytes + shotsBytes;
    if (total < 1024) return `${total} B`;
    if (total < 1024*1024) return `${(total/1024).toFixed(0)} KB`;
    return `${(total/1024/1024).toFixed(1)} MB`;
  }, [filtered, includeScreenshots]);

  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:100000, display:'flex', alignItems:'flex-start', justifyContent:'center', overflow:'auto', padding:'20px'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, width:'100%', maxWidth:720, boxShadow:'0 20px 60px rgba(0,0,0,.25)', display:'flex', flexDirection:'column', maxHeight:'90vh'}}>
        {/* 头部 */}
        <div style={{padding:'14px 20px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0, background:'linear-gradient(90deg, #fef3c7 0%, #fde047 100%)'}}>
          <div>
            <div className="font-display" style={{fontSize:16, fontWeight:600, color:'#7c2d12'}}>📥 导出反馈</div>
            <div style={{fontSize:11, color:'#92400e', marginTop:2}}>下载所有 bug 反馈 · 4 种格式 · 一次性发给 AI 修复</div>
          </div>
          <button onClick={onClose} style={{background:'transparent', border:'none', cursor:'pointer', fontSize:18}}>×</button>
        </div>

        <div style={{padding:'16px 20px', overflowY:'auto', flex:1}}>
          {/* 筛选 */}
          <div style={{marginBottom:14}}>
            <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', marginBottom:6}}>🎯 筛选范围</div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8}}>
              <div>
                <div style={{fontSize:10, color:'var(--ink-4)', marginBottom:3}}>状态</div>
                <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
                  style={{width:'100%', padding:'6px 9px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, background:'white', fontFamily:'inherit'}}>
                  <option value="pending">🔧 仅待修复</option>
                  <option value="done">✅ 仅已修复</option>
                  <option value="all">📥 全部</option>
                </select>
              </div>
              <div>
                <div style={{fontSize:10, color:'var(--ink-4)', marginBottom:3}}>类别</div>
                <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)}
                  style={{width:'100%', padding:'6px 9px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, background:'white', fontFamily:'inherit'}}>
                  <option value="all">全部类别</option>
                  {BUG_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                </select>
              </div>
              <div style={{gridColumn:'1 / -1'}}>
                <div style={{fontSize:10, color:'var(--ink-4)', marginBottom:5}}>⏱ 时间范围 (本周/本月/任意月份/任意月份的第N周)</div>
                <AdvancedDateFilter value={dateFilter} onChange={setDateFilter} size="sm" />
              </div>
            </div>
          </div>

          {/* 内容选项 */}
          <div style={{marginBottom:14}}>
            <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', marginBottom:6}}>📋 包含内容</div>
            <div style={{display:'flex', gap:14, flexWrap:'wrap'}}>
              {[
                { key:'shots', label:'📷 截图', val: includeScreenshots, set: setIncludeScreenshots, hint:'(关闭可大幅减小文件)' },
                { key:'resp',  label:'💬 主管回复', val: includeResponse, set: setIncludeResponse },
                { key:'thread',label:'💬 对话历史', val: includeThread, set: setIncludeThread },
              ].map(o => (
                <label key={o.key} style={{display:'flex', alignItems:'center', gap:5, fontSize:12, color:'var(--ink-2)', cursor:'pointer'}}>
                  <input type="checkbox" checked={o.val} onChange={e => o.set(e.target.checked)} style={{cursor:'pointer'}} />
                  {o.label} {o.hint && <span style={{fontSize:10, color:'var(--ink-4)'}}>{o.hint}</span>}
                </label>
              ))}
            </div>
          </div>

          {/* 预览统计 */}
          <div style={{padding:'10px 12px', background:'#fafaf7', border:'1px solid var(--line)', borderRadius:8, marginBottom:14}}>
            <div style={{fontSize:12, color:'var(--ink-2)', display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:6}}>
              <span>📊 命中 <strong style={{color:'var(--ink)', fontSize:14}}>{filtered.length}</strong> 条反馈</span>
              <span style={{color:'var(--ink-3)'}}>预估大小: ~{sizeEstimate}</span>
            </div>
            {filtered.length === 0 && (
              <div style={{marginTop:6, fontSize:11, color:'#b91c1c'}}>当前筛选下没有数据 · 试着放宽条件</div>
            )}
          </div>

          {/* 格式选择 */}
          <div>
            <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', marginBottom:8}}>📁 选择格式下载</div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
              {[
                { key:'md',   icon:'📝', name:'Markdown (.md)',   desc:'最适合直接给 AI · 带截图(data URL)', action: exportMarkdown, color:'#7c3aed' },
                { key:'pdf',  icon:'🖨', name:'PDF (打印对话框)',   desc:'浏览器打印 → 另存为 PDF · 排版好',   action: exportPdf,      color:'#dc2626' },
                { key:'html', icon:'🌐', name:'网页 (.html)',      desc:'双击可看 · Word 也能打开 · 含截图',  action: exportHtml,     color:'#0369a1' },
                { key:'csv',  icon:'📊', name:'CSV 表格 (.csv)',   desc:'用 Excel 打开 · 无截图 · 只文字',     action: exportCsv,      color:'#15803d' },
              ].map(f => (
                <button key={f.key} onClick={f.action} disabled={exporting || filtered.length === 0}
                  style={{padding:'14px', background:'white', border:'2px solid '+(exporting||filtered.length===0?'var(--line)':f.color), borderRadius:9, cursor: (exporting||filtered.length===0)?'not-allowed':'pointer', fontFamily:'inherit', textAlign:'left', opacity: (exporting||filtered.length===0)?0.5:1, transition:'all .15s'}}
                  onMouseEnter={e => { if (!exporting && filtered.length > 0) e.currentTarget.style.background = '#fafafa'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'white'; }}>
                  <div style={{display:'flex', alignItems:'center', gap:6, marginBottom:4}}>
                    <span style={{fontSize:18}}>{f.icon}</span>
                    <span style={{fontSize:13, fontWeight:600, color: (exporting||filtered.length===0)?'var(--ink-3)':f.color}}>{f.name}</span>
                  </div>
                  <div style={{fontSize:10, color:'var(--ink-3)', lineHeight:1.4}}>{f.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div style={{marginTop:14, padding:'10px 12px', background:'#eff6ff', border:'1px solid #bfdbfe', borderRadius:8, fontSize:11, color:'#1e40af', lineHeight:1.6}}>
            💡 <strong>推荐工作流</strong>:勾选"📷 截图" → 选 <strong>Markdown (.md)</strong> 下载 → 把 .md 文件<strong>拖到 Claude 对话窗口</strong>。<br/>
            AI 能直接读 Markdown 文字 + 看截图,一次性分析所有反馈、给出修复方案、出新 HTML。
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

// AI 摘要导出 modal — 主管点"导出给 AI",生成结构化文本可复制给 Claude
const BugAiSummaryModal = ({ reports, onClose, toast }) => {
  const [copied, setCopied] = useState(false);

  const summary = useMemo(() => {
    const pending = reports.filter(r => r.status === 'new' || r.status === 'reviewed' || r.status === 'planned')
                          .sort((a, b) => {
                            const pri = { urgent:4, high:3, normal:2, low:1 };
                            const pA = pri[a.priority] || 0, pB = pri[b.priority] || 0;
                            if (pA !== pB) return pB - pA;
                            return (b.created_at_ms || 0) - (a.created_at_ms || 0);
                          });
    if (pending.length === 0) return '当前没有待处理的反馈。';

    const lines = [];
    lines.push('═══════════════════════════════════════════════');
    lines.push('🐛 客服系统待修复反馈摘要 (导出给 Claude)');
    lines.push('═══════════════════════════════════════════════');
    lines.push(`生成时间: ${new Date().toLocaleString('zh-CN')}`);
    lines.push(`当前版本: ${APP_VERSION}`);
    lines.push(`待处理反馈: ${pending.length} 条`);
    lines.push('');
    lines.push('请你 (Claude) 分析以下反馈,提出修复方案。');
    lines.push('对每条:');
    lines.push('  1. 简短分析问题原因 (代码层面)');
    lines.push('  2. 提出修复方案');
    lines.push('  3. 标记下个版本号 (如 fix14)');
    lines.push('我确认后,你直接出新 HTML。');
    lines.push('');
    lines.push('═══════════════════════════════════════════════');
    lines.push('');

    // 按类别+优先级分组
    const grouped = { urgent_bug:[], urgent_other:[], high:[], normal:[], low:[] };
    pending.forEach(r => {
      if (r.priority === 'urgent' && r.category === 'bug') grouped.urgent_bug.push(r);
      else if (r.priority === 'urgent') grouped.urgent_other.push(r);
      else if (r.priority === 'high') grouped.high.push(r);
      else if (r.priority === 'low') grouped.low.push(r);
      else grouped.normal.push(r);
    });

    const renderGroup = (title, items) => {
      if (items.length === 0) return;
      lines.push(`【${title} - 共 ${items.length} 条】`);
      lines.push('');
      items.forEach((r, i) => {
        const cat = findBug(BUG_CATEGORIES, r.category);
        const pri = findBug(BUG_PRIORITIES, r.priority);
        const st  = findBug(BUG_STATUSES,  r.status);
        const mod = (BUG_MODULES.find(m => m.id === r.module) || { label: r.module });
        const ageDays = Math.floor((Date.now() - (r.created_at_ms || 0)) / 86400000);
        const shotsCount = (r.screenshots || []).length;

        lines.push(`#${i+1} [${r.id.slice(0, 8)}] ${cat.label} ${pri.label} ${st.label}`);
        lines.push(`标题: ${r.title}`);
        lines.push(`模块: ${mod.label}`);
        lines.push(`报告人: ${r.created_by_name || '匿名'}${r.created_by_role === 'admin' ? ' (主管)' : r.created_by_role === 'finance' ? ' (财务)' : ''} · ${ageDays === 0 ? '今天' : ageDays + ' 天前'}`);
        lines.push(`版本: ${r.app_version || '未记录'}`);
        if (r.browser_info) lines.push(`环境: ${r.browser_info}`);
        if (r.description) {
          lines.push('');
          lines.push('描述:');
          lines.push(r.description);
        }
        if (r.reproduce_steps) {
          lines.push('');
          lines.push('复现步骤:');
          lines.push(r.reproduce_steps);
        }
        if (r.expected_behavior) lines.push(`\n期望: ${r.expected_behavior}`);
        if (r.actual_behavior) lines.push(`实际: ${r.actual_behavior}`);
        if (shotsCount > 0) lines.push(`\n截图: ${shotsCount} 张 (在客服系统 bug_reports 表 id=${r.id} 的 screenshots 字段中,如需我看请单独贴出来)`);
        if (r.admin_response) {
          lines.push('');
          lines.push(`主管批注: ${r.admin_response}`);
        }
        if ((r.thread || []).length > 0) {
          lines.push('');
          lines.push('对话历史:');
          (r.thread || []).forEach(m => {
            lines.push(`  [${m.role === 'admin' || m.role === 'super_admin' ? '主管' : '用户'} ${m.user_name}]: ${m.content}`);
          });
        }
        lines.push('');
        lines.push('───────────────────────────');
        lines.push('');
      });
    };

    renderGroup('🚨 紧急 Bug', grouped.urgent_bug);
    renderGroup('🚨 紧急 其他', grouped.urgent_other);
    renderGroup('⚡ 重要', grouped.high);
    renderGroup('· 普通', grouped.normal);
    renderGroup('· 低优先级', grouped.low);

    lines.push('═══════════════════════════════════════════════');
    lines.push('以上为本次迭代的全部待处理反馈。');
    lines.push('请输出: 1) 每条的分析与方案 2) 建议的下版本号 3) 优先做哪些');
    lines.push('═══════════════════════════════════════════════');

    return lines.join('\n');
  }, [reports]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      toast('✓ 已复制 · 粘贴到 Claude 对话窗口');
      setTimeout(() => setCopied(false), 3000);
    } catch (e) {
      // 兜底:用旧 API
      try {
        const ta = document.createElement('textarea');
        ta.value = summary;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        setCopied(true);
        toast('✓ 已复制');
        setTimeout(() => setCopied(false), 3000);
      } catch (e2) { alert('复制失败,请手动选中文本框 → Ctrl+A → Ctrl+C'); }
    }
  };

  const pendingCount = reports.filter(r => r.status === 'new' || r.status === 'reviewed' || r.status === 'planned').length;

  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:100000, display:'flex', alignItems:'flex-start', justifyContent:'center', overflow:'auto', padding:'20px'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, width:'100%', maxWidth:820, boxShadow:'0 20px 60px rgba(0,0,0,.25)', display:'flex', flexDirection:'column', maxHeight:'90vh'}}>
        {/* 头部 */}
        <div style={{padding:'14px 20px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0, background:'linear-gradient(90deg, #f3e8ff 0%, #ede9fe 100%)'}}>
          <div>
            <div className="font-display" style={{fontSize:16, fontWeight:600, color:'#5b21b6'}}>🤖 导出给 AI · {pendingCount} 条待处理</div>
            <div style={{fontSize:11, color:'#6b21a8', marginTop:2}}>复制下面的文本 → 粘贴到 Claude 对话 → AI 自动分析提出方案</div>
          </div>
          <button onClick={onClose} style={{background:'transparent', border:'none', cursor:'pointer', fontSize:18}}>×</button>
        </div>

        {/* 文本预览 */}
        <div style={{padding:'14px 20px', flex:1, overflowY:'auto'}}>
          <textarea readOnly value={summary} rows={20}
            onClick={e => e.target.select()}
            style={{width:'100%', padding:'10px 12px', border:'1px solid var(--line)', borderRadius:8, fontSize:11, fontFamily:'ui-monospace, "Cascadia Code", monospace', resize:'vertical', background:'#1a1a17', color:'#e0e0e0', minHeight:400, lineHeight:1.6}} />
        </div>

        {/* 操作区 */}
        <div style={{padding:'12px 20px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', gap:8, flexShrink:0, background:'#fafafa'}}>
          <div style={{fontSize:10, color:'var(--ink-3)', lineHeight:1.5}}>
            💡 工作流:复制 → 粘贴到 Claude → AI 分析 → 你确认 → AI 出新 HTML → 你强刷生效<br/>
            💡 截图需要 AI 看的话:在反馈详情里把截图复制出来,粘到 Claude 对话(图比文字更直接)
          </div>
          <button onClick={copy}
            style={{padding:'8px 18px', background: copied ? '#15803d' : '#7c3aed', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontSize:13, fontWeight:600, fontFamily:'inherit', whiteSpace:'nowrap', flexShrink:0, transition:'background .2s'}}>
            {copied ? '✓ 已复制' : '📋 复制全部'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

// ════════════════════════════════════════════════════════════════════
// 📖 帮助中心模块 (fix13)
// 包含:入门指南 / 模块详解 / 角色权限 / 快捷操作 / 报告 Bug / 版本日志 / AI 能力 / 路线图 / 设计哲学
// ════════════════════════════════════════════════════════════════════
const HelpCenterModule = ({ user }) => {
  const [section, setSection] = useState('intro');
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';

  const sections = [
    { key:'intro',     label:'🚀 新人入门',     desc:'3 分钟上手' },
    { key:'modules',   label:'📚 模块详解',     desc:'19 个模块功能说明' },
    { key:'roles',     label:'👥 角色权限',     desc:'4 种角色能做什么' },
    { key:'shortcuts', label:'⌨ 快捷操作',     desc:'右键 / 粘贴 / 多窗口' },
    { key:'bugs',      label:'🐛 报告 Bug',     desc:'怎么发问题给 AI 修' },
    { key:'history',   label:'📦 版本日志',     desc:`${VERSION_HISTORY.length} 个版本记录` },
    { key:'ai',        label:'🤖 AI 能力清单',  desc:'Claude 能做什么' },
    { key:'roadmap',   label:'🛣 待开发路线图', desc:'还可以加什么' },
    { key:'philosophy',label:'💡 设计哲学',     desc:'为什么这么设计' },
  ];

  return (
    <div className="fade-in">
      {/* 头部 */}
      <div className="paper rounded-2xl p-5" style={{marginBottom:12, background:'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #ddd6fe 100%)'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:10}}>
          <div>
            <div className="font-display" style={{fontSize:20, fontWeight:600, color:'#5b21b6'}}>📖 使用手册 / 帮助中心</div>
            <div style={{fontSize:12, color:'#6b21a8', marginTop:4}}>
              新人入职必读 · 老员工查阅手册 · 反馈 Bug · 当前版本 <strong>{APP_VERSION}</strong>
            </div>
          </div>
          <div style={{display:'flex', gap:6, alignItems:'center'}}>
            <span style={{padding:'4px 10px', background:'white', borderRadius:14, fontSize:11, color:'#6b21a8', fontWeight:600}}>共 {sections.length} 个章节</span>
            <span style={{padding:'4px 10px', background:'white', borderRadius:14, fontSize:11, color:'#6b21a8', fontWeight:600}}>{VERSION_HISTORY.length} 个版本</span>
          </div>
        </div>
      </div>

      {/* 主体:左侧栏 + 右侧内容 */}
      <div style={{display:'grid', gridTemplateColumns:'200px 1fr', gap:12, alignItems:'flex-start'}}>
        {/* 左:章节导航 */}
        <div className="paper rounded-2xl p-2" style={{position:'sticky', top:80}}>
          {sections.map(s => {
            const isSel = section === s.key;
            return (
              <button key={s.key} onClick={() => setSection(s.key)}
                style={{
                  width:'100%', textAlign:'left',
                  padding:'9px 12px', marginBottom:2,
                  background: isSel ? 'var(--accent-soft)' : 'transparent',
                  color: isSel ? 'var(--accent)' : 'var(--ink-2)',
                  border:'none', borderRadius:7, cursor:'pointer',
                  fontFamily:'inherit', fontSize:12.5,
                  fontWeight: isSel ? 600 : 500,
                  transition:'background .12s',
                }}
                onMouseEnter={e => { if (!isSel) e.currentTarget.style.background = 'var(--bg-elevated)'; }}
                onMouseLeave={e => { if (!isSel) e.currentTarget.style.background = 'transparent'; }}>
                <div>{s.label}</div>
                <div style={{fontSize:10, color: isSel ? 'var(--accent)' : 'var(--ink-4)', marginTop:1, fontWeight:400}}>{s.desc}</div>
              </button>
            );
          })}
        </div>

        {/* 右:内容 */}
        <div className="paper rounded-2xl p-6" style={{minHeight:600}}>
          {section === 'intro'      && <HelpSectionIntro user={user} />}
          {section === 'modules'    && <HelpSectionModules user={user} isAdmin={isAdmin} />}
          {section === 'roles'      && <HelpSectionRoles />}
          {section === 'shortcuts'  && <HelpSectionShortcuts />}
          {section === 'bugs'       && <HelpSectionBugs />}
          {section === 'history'    && <HelpSectionHistory />}
          {section === 'ai'         && <HelpSectionAi />}
          {section === 'roadmap'    && <HelpSectionRoadmap />}
          {section === 'philosophy' && <HelpSectionPhilosophy />}
        </div>
      </div>
    </div>
  );
};

// 共用样式组件
const HelpH1 = ({ children }) => (
  <div className="font-display" style={{fontSize:18, fontWeight:600, color:'var(--ink)', marginBottom:12, paddingBottom:8, borderBottom:'1px solid var(--line)'}}>{children}</div>
);
const HelpH2 = ({ children }) => (
  <div style={{fontSize:14, fontWeight:600, color:'var(--ink)', marginTop:18, marginBottom:8}}>{children}</div>
);
const HelpP = ({ children }) => (
  <div style={{fontSize:13, color:'var(--ink-2)', lineHeight:1.7, marginBottom:8}}>{children}</div>
);
const HelpUL = ({ items }) => (
  <ul style={{fontSize:12.5, color:'var(--ink-2)', lineHeight:1.8, paddingLeft:20, marginBottom:8}}>
    {items.map((t, i) => <li key={i} style={{marginBottom:2}}>{t}</li>)}
  </ul>
);
const HelpCode = ({ children }) => (
  <code style={{padding:'2px 6px', background:'#f5f5f7', border:'1px solid var(--line)', borderRadius:4, fontSize:11, fontFamily:'ui-monospace, monospace', color:'#7c3aed'}}>{children}</code>
);
const HelpNote = ({ children, kind = 'info' }) => {
  const c = kind === 'warn' ? { bg:'#fef3c7', bd:'#fde047', tx:'#854d0e' } :
            kind === 'danger' ? { bg:'#fee2e2', bd:'#fca5a5', tx:'#b91c1c' } :
            kind === 'good' ? { bg:'#dcfce7', bd:'#86efac', tx:'#15803d' } :
            { bg:'#eff6ff', bd:'#bfdbfe', tx:'#1e40af' };
  return (
    <div style={{padding:'10px 12px', background:c.bg, border:'1px solid '+c.bd, borderRadius:8, fontSize:12, color:c.tx, lineHeight:1.6, marginBottom:10}}>{children}</div>
  );
};

// ════════════════ Section: 新人入门 ════════════════
const HelpSectionIntro = ({ user }) => (
  <div>
    <HelpH1>🚀 3 分钟上手 — 新人必读</HelpH1>
    <HelpP>欢迎使用 <strong>Dekorfine 统一工作台</strong> — 公司客服 + 财务 + 报价的全流程系统。</HelpP>

    <HelpH2>第一步:认识你的角色</HelpH2>
    <HelpUL items={[
      <><HelpCode>员工 staff</HelpCode> — 普通客服,处理自己的客户、订单</>,
      <><HelpCode>主管 admin</HelpCode> — 看所有员工的工单 + 审批 + 配置权限</>,
      <><HelpCode>总管 super_admin</HelpCode> — 全部权限(老板)</>,
      <><HelpCode>财务 finance</HelpCode> — 专责退款 / 运费对账</>,
    ]} />
    <HelpP>你现在的身份:<strong style={{color:'var(--accent)'}}>{user.name} {user.alias ? '· ' + user.alias : ''} · {user.role === 'super_admin' ? '总管' : user.role === 'admin' ? '主管' : user.role === 'finance' ? '财务' : '员工'}</strong></HelpP>

    <HelpH2>第二步:认识你的工作台</HelpH2>
    <HelpUL items={[
      <><strong>顶部 6 个 tab</strong> — 你最常用的功能(可在 <HelpCode>⚙ 布局</HelpCode> 自定义)</>,
      <><strong>左侧栏</strong> — 其他工具按"主功能/资源/协作/管理"4 组分类</>,
      <><strong>右上角徽章</strong> — 红色=紧急/超时,蓝色=待办,绿色=完成</>,
      <><strong>底部"自定义布局"</strong> — 把你不用的功能从顶部挪到侧边栏(每个员工独立)</>,
    ]} />

    <HelpH2>第三步:每天进系统的"工作快照"</HelpH2>
    <HelpP>进 <HelpCode>📞 客服跟进</HelpCode> 第一眼看到的卡片就是"今天该干什么":</HelpP>
    <HelpUL items={[
      '🔴 逾期未跟进的客户(数字 = 几个)',
      '🟡 今天要跟进的客户',
      '🟢 已完成的本日任务',
      <>退款处理人特权:看到 <strong>今天要审核的退款</strong> + <strong>今天要打款的退款</strong></>,
    ]} />

    <HelpH2>第四步:常见操作</HelpH2>
    <HelpUL items={[
      <><strong>右键</strong>任意 tab → "在新标签页中打开" → 多窗口工作</>,
      <><strong>Ctrl+V</strong> 截图直接粘贴到任何附件区(知识库/跟进/拒付/工单)</>,
      <><strong>Esc</strong> 关闭模态框 / AI 评价面板</>,
      <><strong>Ctrl+Enter</strong> 在回复框 = 发送</>,
    ]} />

    <HelpH2>第五步:遇到问题</HelpH2>
    <HelpNote>
      <strong>所有 bug / 新需求</strong> → 进左侧 <HelpCode>🐛 报告 Bug</HelpCode> 章节,按模板提交给主管(Nicole/Miya)。
      不要直接说"不工作了" — 没有信息没法修。
    </HelpNote>
  </div>
);

// ════════════════ Section: 模块详解 ════════════════
const HelpSectionModules = ({ user, isAdmin }) => {
  const MODS = [
    { key:'cs', icon:'📞', name:'客服跟进', summary:'客户跟进总控台',
      what:'记录每个客户的咨询、订单状态、提醒。',
      why:'之前用 Excel 跟客户,信息分散容易漏。把它做成 Web 表格,多人协同 + 不丢数据。',
      how:[
        '顶部 + 新增客户 创建客户卡片',
        '填客户基本信息 + 订单号 + 沟通要点',
        '设置"下次跟进时间" → 到点出现在徽章计数',
        '工作快照面板看今天该跟进的人',
        '客户解决了 → 标记"已完成"',
      ],
      tips:['时间智能筛选 (今天 / 3 天 / 一周)', '模板回复联动知识库', '工单升级到主管 / 老板', '软删除 + 回收站'],
    },
    { key:'chargebacks', icon:'🚨', name:'拒付', summary:'Stripe/PayPal 拒付争议管理',
      what:'录入拒付通知,上传证据(订单截图/物流/邮件/聊天),按剩余时间排序。',
      why:'拒付有严格时限,过期就输。需要专人盯 + 自动提醒。',
      how:[
        '接到拒付通知 → 这里录入',
        '上传证据(可粘贴截图)',
        '系统按"剩余时间"自动排序,临近的红色高亮',
        '财务/主管审核胜诉率',
      ],
      tips:['金额汇总按货币/网站/状态分布', '专人接拒付任务'],
    },
    { key:'offline_orders', icon:'💳', name:'线下单', summary:'非 Shopify 订单(WhatsApp/邮件/阿里巴巴)',
      what:'统一录入非 Shopify 的订单,跟正常订单一样跟踪。',
      why:'这类订单数据散在邮箱里,没法对账。集中后可以跟 Shopify 一样跟踪 + 财务对账。',
      how:[
        '收到线下询价/下单 → + 新建',
        '录入产品(SKU/单价/数量)+ 客户信息 + 收件地址',
        '状态推进:报价 → 客户确认 → 已付 → 已发',
        '财务月底导出对账',
      ],
    },
    { key:'custom_photo', icon:'🎨', name:'定制 & 实拍', summary:'客户改产品 / 上传实拍照核实',
      what:'客户定制咨询 + 实拍核实(销售图 vs 客户实物)。',
      why:'美工接到定制需求经常信息不全 → 来回沟通慢。这里强制必填字段。',
      how:[
        '定制咨询:产品 + 客户预算 + 期望日期 + 设计参考图',
        '实拍核实:订单编号 + 销售图 + 实物对比 + 客户留言板(图文+时间线)',
      ],
    },
    { key:'events', icon:'📋', name:'工作主线', summary:'7 大事件类型统一管理',
      what:'售后/补件/拒付/退款/定制/实拍/自定义 — 跨模块汇总。',
      why:'之前每种事件都在自己的 tab,跨 tab 同步麻烦。这里看全部按时间/紧急排序。',
      how:[
        '每条客户记录里都可以 + 加事件',
        '在这里能看到所有员工/所有客户的事件汇总',
        '按状态/类型/时间筛选',
        '一键 ✓ 完成',
      ],
    },
    { key:'reviews', icon:'⭐', name:'产品评价', summary:'评价任务调度 + 嵌入式 AI 工具',
      what:'老板派评价任务 → 客服接单 → 用嵌入的美工 AI 工具生成 → 完成。',
      why:'以前要切两个系统(任务在 CS,生成工具在美工)。现在一个页面搞定。',
      how:[
        '老板 + 发布评价任务(产品链接 + 目标 N 条 + 优先级)',
        '客服看到任务 → 👤 接单',
        '接单后出现紫色 🤖 AI 生成评价 按钮 → 全屏面板打开 AI 工具',
        '在 AI 工具里生成评价 + 导出 Judge.me CSV',
        '回来点 ✅ 标记完成',
      ],
      tips:['顶部紫色"🤖 AI 评价工具"按钮:不绑定任务也能直接打开', 'iframe 永久挂载,关闭再开瞬间显示'],
    },
    { key:'suppliers', icon:'🏭', name:'供应商', summary:'693 家供应商集中管理',
      what:'联系方式 + 评分 + 备注 + 历史合作记录。',
      why:'工厂联系信息散在每个客服的微信里,新人入职接不上。',
    },
    { key:'kb', icon:'📚', name:'知识库', summary:'280+ 客服回复模板',
      what:'分类的客服回复模板 + AI 优化建议。',
      why:'减少重复打字 + 保证回复一致 + AI 优化模板。',
      how:[
        '按问题分类找模板 → 复制 → 改个性化部分 → 发客户',
        '主管可以编辑模板,普通员工只读',
      ],
    },
    { key:'quote', icon:'📝', name:'报价单', summary:'生成正式报价单',
      what:'给客户生成标准格式的报价单。',
      why:'之前用 Word,格式不一致。',
    },
    { key:'finance', icon:'🧮', name:'财务计算器', summary:'13 承运商 + 售价建议 + 对账',
      what:'输入产品尺寸+实重+目的国 → 13 承运商对比 → 建议售价 → 账单对账。',
      why:'选错承运商一单亏几百;算错售价一批货亏几千。这里集中计算 + 推演运费保证售价稳定。',
      how:[
        '输入产品尺寸 + 实重 + 数量 + 目的国',
        '看 13 个承运商对比(价格 + 节省 + 利润率)',
        '选 #1 推荐的发货',
        '月底用"实际承运商账单"对账,验证没被多收',
      ],
      tips:['明扬加班船最近改为 19/18/17 元/kg(美东/中/西)', '超规(>68kg 或 >300cm 单边 或 >420cm 围长)自动标"不接收"'],
    },
    { key:'freight', icon:'🚚', name:'运费支付', summary:'财务对账 + 快递公司管理 (财务/主管)',
      what:'支付记录 + 快递公司管理 + 月度统计。',
      why:'对账过程留痕,避免重复支付。',
    },
    { key:'cross_dept', icon:'📨', name:'跨部门协作', summary:'美工/客服/跟单 三部门消息总线',
      what:'三方共享同一份 Supabase 数据 + Realtime 实时同步。',
      why:'客服跟美工以前靠群消息沟通,关键工单被刷下去就漏。这里:有状态、有超时、有分派、有关注人。',
      how:[
        '收件箱:别人发给客服的工单',
        '分派给我:主管把工单分给了我',
        '⏰ 超时:还没处理超过截止时间的(红色脉冲)',
        '我发起的:我发出去的',
        '新建工单时:选关联网站 → 自动建议负责人 + 选 watcher 多人收到通知',
      ],
      tips:[
        '主管特权:🌐 店铺负责人(维护客服员工 ↔ 网站映射,对方部门也能看)',
        '主管特权:⏰ 超时阈值(自定义客服部 11 类 × 4 优先级超时天数)',
        '详情里 📌 分派给手下 + 👁 关注人管理',
        '完成时弹桌面通知',
      ],
    },
    { key:'briefings', icon:'📢', name:'会议纪要', summary:'主管发布要点 + 员工确认',
      what:'书面化的会议要点 + 员工标记已读已处理。',
      why:'周会内容靠记忆容易漏。',
    },
    isAdmin && { key:'admin_overview', icon:'📊', name:'主管汇总 (admin)', summary:'所有模块一屏看全',
      what:'团队当日所有模块的进度仪表盘。',
      why:'主管要看团队全局,不用切多个 tab。',
    },
    { key:'dashboard', icon:'📈', name:'数据看板', summary:'团队数据 + 个人 KPI',
      what:'统计图表 + 员工绩效。',
    },
    isAdmin && { key:'delete_approvals', icon:'🛡', name:'删除审批 (admin)', summary:'员工删除申请待审批',
      what:'员工发起的删除申请待主管审批。',
      why:'防止误删/恶意删除关键数据,主管把关。',
    },
    { key:'trash', icon:'🗑', name:'回收站', summary:'软删除数据可还原',
      what:'所有"删除"操作都是软删,这里可还原。',
    },
    isAdmin && { key:'admin', icon:'⚙', name:'设置 (admin)', summary:'员工 / 拒付专人 / Gemini / 退款处理人',
      what:'系统配置全集。',
    },
  ].filter(Boolean);

  return (
    <div>
      <HelpH1>📚 模块详解 — 19 个模块,每个都做什么</HelpH1>
      <HelpP>下面每个模块都包含 3 件事:<strong>是什么</strong> · <strong>为什么这么设计</strong> · <strong>怎么用</strong>。</HelpP>
      <div style={{display:'flex', flexDirection:'column', gap:14, marginTop:14}}>
        {MODS.map(m => (
          <div key={m.key} style={{padding:'14px 16px', background:'#fafaf7', border:'1px solid var(--line)', borderRadius:10}}>
            <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:6}}>
              <span style={{fontSize:22}}>{m.icon}</span>
              <div style={{flex:1}}>
                <div style={{fontSize:15, fontWeight:600, color:'var(--ink)'}}>{m.name}</div>
                <div style={{fontSize:11, color:'var(--ink-3)'}}>{m.summary}</div>
              </div>
              <span style={{padding:'2px 8px', background:'white', border:'1px solid var(--line)', borderRadius:8, fontSize:10, color:'var(--ink-3)', fontFamily:'ui-monospace'}}>tab: {m.key}</span>
            </div>
            <div style={{fontSize:12, color:'var(--ink-2)', lineHeight:1.6, marginTop:4}}>
              <div><strong style={{color:'#0369a1'}}>📌 是什么:</strong> {m.what}</div>
              {m.why && <div style={{marginTop:3}}><strong style={{color:'#7c3aed'}}>💭 为什么:</strong> {m.why}</div>}
              {m.how && (
                <div style={{marginTop:5}}>
                  <strong style={{color:'#16a34a'}}>🎯 怎么用:</strong>
                  <ol style={{paddingLeft:20, margin:'3px 0 0 0'}}>{m.how.map((h,i) => <li key={i} style={{marginBottom:1}}>{h}</li>)}</ol>
                </div>
              )}
              {m.tips && (
                <div style={{marginTop:5, padding:'6px 9px', background:'#fef3c7', border:'1px solid #fde047', borderRadius:6}}>
                  <strong style={{color:'#854d0e'}}>💡 高级技巧:</strong>
                  <ul style={{paddingLeft:18, margin:'2px 0 0 0', listStyle:'disc'}}>{m.tips.map((t,i) => <li key={i} style={{marginBottom:1, color:'#854d0e'}}>{t}</li>)}</ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ════════════════ Section: 角色权限 ════════════════
const HelpSectionRoles = () => {
  const matrix = [
    { op:'查看自己的客户',           staff:'✓', finance:'✓', admin:'✓', super_admin:'✓' },
    { op:'查看所有员工的客户',       staff:'✗', finance:'✗', admin:'✓', super_admin:'✓' },
    { op:'录入退款 / 拒付 / 售后',   staff:'✓', finance:'✓', admin:'✓', super_admin:'✓' },
    { op:'审批退款',                 staff:'仅退款处理人', finance:'仅退款处理人', admin:'✓', super_admin:'✓' },
    { op:'删除数据',                 staff:'需申请', finance:'需申请', admin:'直接', super_admin:'直接' },
    { op:'审批删除申请',             staff:'✗', finance:'✗', admin:'✓', super_admin:'✓' },
    { op:'查看 / 编辑员工',          staff:'✗', finance:'✗', admin:'✓', super_admin:'✓' },
    { op:'看财务模块',               staff:'✗', finance:'✓', admin:'✓', super_admin:'✓' },
    { op:'跨部门协作 - 工单分派',    staff:'✗', finance:'✗', admin:'✓', super_admin:'✓' },
    { op:'跨部门协作 - 编辑 watcher',staff:'✗', finance:'✗', admin:'✓', super_admin:'✓' },
    { op:'编辑超时阈值',             staff:'✗', finance:'✗', admin:'✓', super_admin:'✓' },
    { op:'店铺负责人 - 维护',        staff:'✗', finance:'✗', admin:'✓', super_admin:'✓' },
    { op:'店铺负责人 - 编辑其他部门记录', staff:'✗', finance:'✗', admin:'✗', super_admin:'✗' },
    { op:'升级到主管',               staff:'✓', finance:'✓', admin:'-', super_admin:'-' },
    { op:'升级到老板',               staff:'-', finance:'-', admin:'✓', super_admin:'-' },
  ];
  const cellStyle = (v) => {
    if (v === '✓' || v === '直接') return { color:'#15803d', fontWeight:600 };
    if (v === '✗') return { color:'#b91c1c', fontWeight:600 };
    if (v === '-') return { color:'var(--ink-4)' };
    return { color:'#b45309', fontWeight:500, fontSize:10 };
  };
  return (
    <div>
      <HelpH1>👥 角色权限速查表</HelpH1>
      <HelpP>系统有 4 种角色,每种角色能做的不一样。下面这张表是<strong>完整权限速查</strong>:</HelpP>
      <div style={{overflowX:'auto', marginTop:10}}>
        <table style={{width:'100%', fontSize:12, borderCollapse:'collapse', background:'white'}}>
          <thead>
            <tr style={{background:'#f5f5f7'}}>
              <th style={{padding:'8px 10px', textAlign:'left', borderBottom:'1px solid var(--line)', fontWeight:600}}>操作</th>
              <th style={{padding:'8px 10px', textAlign:'center', borderBottom:'1px solid var(--line)', fontWeight:600}}>员工</th>
              <th style={{padding:'8px 10px', textAlign:'center', borderBottom:'1px solid var(--line)', fontWeight:600}}>财务</th>
              <th style={{padding:'8px 10px', textAlign:'center', borderBottom:'1px solid var(--line)', fontWeight:600}}>主管</th>
              <th style={{padding:'8px 10px', textAlign:'center', borderBottom:'1px solid var(--line)', fontWeight:600}}>总管</th>
            </tr>
          </thead>
          <tbody>
            {matrix.map((r, i) => (
              <tr key={i} style={{borderBottom:'1px solid var(--line-soft)'}}>
                <td style={{padding:'7px 10px'}}>{r.op}</td>
                <td style={{padding:'7px 10px', textAlign:'center', ...cellStyle(r.staff)}}>{r.staff}</td>
                <td style={{padding:'7px 10px', textAlign:'center', ...cellStyle(r.finance)}}>{r.finance}</td>
                <td style={{padding:'7px 10px', textAlign:'center', ...cellStyle(r.admin)}}>{r.admin}</td>
                <td style={{padding:'7px 10px', textAlign:'center', ...cellStyle(r.super_admin)}}>{r.super_admin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <HelpNote kind="info">
        <strong>"退款处理人"</strong> 在 <HelpCode>⚙ 设置 → 💰 退款处理人</HelpCode> 配置(目前是 Miya / Nicole / Yulia 周末顶班)。
      </HelpNote>
    </div>
  );
};

// ════════════════ Section: 快捷操作 ════════════════
const HelpSectionShortcuts = () => (
  <div>
    <HelpH1>⌨ 快捷操作 — 提速 10 倍</HelpH1>

    <HelpH2>🖱 鼠标快捷</HelpH2>
    <HelpUL items={[
      <><strong>右键</strong>任意 tab → "在新标签页中打开"(支持多窗口同时工作)</>,
      <><strong>Ctrl+点击</strong>(Mac: Cmd+点击)→ 后台新标签打开</>,
      <><strong>Shift+点击</strong> → 新窗口打开</>,
      <><strong>中键点击</strong> → 后台新标签</>,
    ]} />
    <HelpNote kind="good">
      实战:<strong>同时盯</strong> 客服跟进 + 拒付 + 工作主线 三个窗口,不用反复切 tab。
    </HelpNote>

    <HelpH2>📋 粘贴 / 拖拽图片(8 处全部支持)</HelpH2>
    <HelpUL items={[
      'Win+Shift+S 截图 → 在系统任何附件区直接 Ctrl+V',
      '从文件夹拖图直接丢到附件区(批量)',
      '支持的位置:跟进附件 / 拒付证据 / 线下单图 / 定制设计稿 / 实拍核实 / 工单草稿 / 跨部门工单 / 跨部门回复',
    ]} />
    <HelpNote>
      多数地方有"上传区"focus 后才能粘贴 — 先点一下虚线框,再 Ctrl+V。<br/>
      <strong>跨部门协作</strong> + <strong>知识库</strong> 是"全局粘贴",在模态框任何位置都可以 Ctrl+V。
    </HelpNote>

    <HelpH2>⌨ 键盘快捷</HelpH2>
    <HelpUL items={[
      <><HelpCode>Esc</HelpCode> 关闭模态框 / AI 评价面板</>,
      <><HelpCode>Ctrl+Enter</HelpCode> 回复框发送</>,
      <><HelpCode>Ctrl+Shift+R</HelpCode> 强刷(清除缓存,部署新版后必做)</>,
      <><HelpCode>F12</HelpCode> 打开开发者工具(报 bug 必须用)</>,
    ]} />

    <HelpH2>🎯 找东西</HelpH2>
    <HelpUL items={[
      <>顶部 <strong>🔍 全局搜索</strong>:跨模块找客户 / 订单 / SKU / 邮箱</>,
      '每个列表都有"智能搜索":空格分多个关键词,AND 匹配(都包含才显示)',
      <>每个列表都有<strong>时间筛选 chips</strong>:今天 / 3 天 / 7 天 / 14 天 / 30 天 / 90 天 / 全部</>,
    ]} />

    <HelpH2>🎨 自定义布局</HelpH2>
    <HelpUL items={[
      <>右上角 <HelpCode>⚙ 布局</HelpCode> 按钮 → 把不常用的 tab 从顶部移到侧栏</>,
      <>侧边栏左上 <HelpCode>◀ 折叠</HelpCode> 按钮 → 收起到 icon-only(56px 宽)</>,
      '每个员工独立配置 · 自动保存到本地浏览器(切账号自动还原)',
    ]} />
  </div>
);

// ════════════════ Section: 报告 Bug ════════════════
const HelpSectionBugs = () => (
  <div>
    <HelpH1>🐛 报告 Bug — 让 AI 在 5 分钟内修好</HelpH1>
    <HelpNote kind="warn">
      <strong>好的 Bug 报告 = 1 分钟看懂 + 5 分钟修好。</strong><br/>
      坏的 Bug 报告:"不工作了","白屏","保存不了" → AI 看不懂,只能猜,可能要来回 3-5 轮才能定位,严重影响工作。
    </HelpNote>

    <HelpH2>第一步:准备这 4 样东西</HelpH2>
    <HelpUL items={[
      <><strong>1. 版本号</strong> — F12 → Console → 找到 <HelpCode>📦 统一工作台 v2026.XX.XX-XXX 已加载</HelpCode></>,
      <><strong>2. 截图</strong> — F12 Console 红色报错堆栈截图(不是文字!要看堆栈)+ UI 异常截图</>,
      <><strong>3. 复现步骤</strong> — 从登录到出 bug 每一步操作的清单</>,
      <><strong>4. 环境</strong> — 谁登录的(角色)/ 哪个浏览器 / 操作系统</>,
    ]} />

    <HelpH2>第二步:用这个模板</HelpH2>
    <div style={{padding:'14px 16px', background:'#1a1a17', color:'#e0e0e0', borderRadius:8, fontSize:12, fontFamily:'ui-monospace, monospace', lineHeight:1.7, whiteSpace:'pre-wrap', marginBottom:10}}>
{`版本号: 2026.05.25-fix13   ← 从 F12 Console 看到的
环境: Chrome 130 / Windows 11
账号: Miya · admin

复现步骤:
1. 进【拒付】tab
2. 点【+ 新建拒付】
3. 填好所有字段
4. 点【保存】

期望结果:
保存成功,关闭弹窗,列表里出现新条目

实际结果:
弹出错误 "NULL not allowed in column created_by"
console 报红色错误(截图见附件)
列表没刷新

截图:
[贴 console 报错截图]
[贴 UI 截图]`}</div>

    <HelpH2>第三步:不要这样描述</HelpH2>
    <HelpUL items={[
      <><span style={{color:'#b91c1c'}}>❌</span> "保存不了" — 哪个保存?报错是什么?</>,
      <><span style={{color:'#b91c1c'}}>❌</span> "白屏了" — Console 有什么?哪个 tab?</>,
      <><span style={{color:'#b91c1c'}}>❌</span> "刚才不行了" — 哪个版本?什么操作?</>,
      <><span style={{color:'#b91c1c'}}>❌</span> "邝雅琦反馈说有问题" — 什么问题?报错截图呢?</>,
      <><span style={{color:'#15803d'}}>✅</span> "fix13 版本,Miya 登录,点【拒付】→【+新建】→【保存】,弹出 'NULL not allowed in column created_by',截图附上"</>,
    ]} />

    <HelpH2>第四步:发到哪里</HelpH2>
    <HelpNote kind="good">
      <strong>员工 → 主管(Nicole / Miya)→ AI 助手(Claude)</strong><br/>
      主管收到详细 bug 报告后,贴到跟 Claude 的对话窗口里。AI 看代码定位、修复、输出新 HTML。<br/>
      你 Ctrl+Shift+R 强刷即生效。<br/>
      如果是数据库改动(很少),AI 会附 SQL 文件,需要在 Supabase 跑一下。
    </HelpNote>

    <HelpH2>怎么截图 F12 Console 报错?</HelpH2>
    <HelpUL items={[
      <>1. 按 <HelpCode>F12</HelpCode> 打开开发者工具</>,
      <>2. 切到 <HelpCode>Console</HelpCode> 标签</>,
      <>3. 找<strong>红色</strong>的 Error 行(可能有 ▶ 可以点开看堆栈)</>,
      <>4. 点开 ▶ 看完整堆栈</>,
      <>5. 截图(Win+Shift+S 框选)</>,
      <>6. 把图片<strong>粘贴</strong>到给主管的消息里</>,
    ]} />
  </div>
);

// ════════════════ Section: 版本日志 ════════════════
const HelpSectionHistory = () => {
  const typeBadge = (type) => {
    const M = {
      feature:  { label:'✨ 新功能', bg:'#dcfce7', color:'#15803d' },
      fix:      { label:'🔧 修复',   bg:'#fee2e2', color:'#b91c1c' },
      refactor: { label:'♻ 重构',    bg:'#fef3c7', color:'#854d0e' },
      perf:     { label:'⚡ 性能',   bg:'#dbeafe', color:'#1e40af' },
      data:     { label:'📦 数据',   bg:'#f3e8ff', color:'#7c3aed' },
    };
    const d = M[type] || M.feature;
    return <span style={{padding:'2px 6px', background:d.bg, color:d.color, borderRadius:6, fontSize:9, fontWeight:700, flexShrink:0, marginRight:6}}>{d.label}</span>;
  };
  return (
    <div>
      <HelpH1>📦 版本日志 — {VERSION_HISTORY.length} 个迭代版本</HelpH1>
      <HelpP>每次升级都会在这里留痕。最新版在最上面。</HelpP>
      <HelpNote>
        当前版本:<HelpCode>{APP_VERSION}</HelpCode>
      </HelpNote>
      <div style={{display:'flex', flexDirection:'column', gap:10, marginTop:14}}>
        {VERSION_HISTORY.map((v, i) => (
          <div key={v.version} style={{padding:'12px 14px', background: i === 0 ? '#f0f9ff' : '#fafaf7', border:'1px solid '+(i===0?'#bae6fd':'var(--line)'), borderRadius:9}}>
            <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:6, flexWrap:'wrap'}}>
              <code style={{padding:'2px 8px', background:'white', border:'1px solid var(--line)', borderRadius:6, fontSize:11, fontFamily:'ui-monospace, monospace', color: i === 0 ? '#0369a1' : 'var(--ink)', fontWeight:600}}>{v.version}</code>
              {i === 0 && <span style={{padding:'2px 8px', background:'#0369a1', color:'white', borderRadius:6, fontSize:10, fontWeight:600}}>当前</span>}
              <span style={{fontSize:11, color:'var(--ink-3)'}}>📅 {v.date}</span>
              <span style={{fontSize:13, fontWeight:600, color:'var(--ink)'}}>· {v.title}</span>
            </div>
            <ul style={{paddingLeft:0, listStyle:'none', margin:0}}>
              {v.changes.map((c, j) => (
                <li key={j} style={{padding:'3px 0', fontSize:12, color:'var(--ink-2)', display:'flex', alignItems:'flex-start', lineHeight:1.5}}>
                  {typeBadge(c.type)}
                  <span style={{flex:1}}>{c.text}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
