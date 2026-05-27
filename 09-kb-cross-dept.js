// ════════════════════════════════════════════════════════════════════
// 📚 知识库 + 📨 跨部门 + 📷 拍摄需求(fix49) · 含 fix28-49
// APP_VERSION: 2026.05.27-fix49 · 行号 17959-21310
// ════════════════════════════════════════════════════════════════════

// ============================================================
// ============================================================
// 知识库模块 - 跳转到独立 kb.html (Supabase + Gemini + 智能搜索 + 编辑同步)
// ============================================================
const KbModule = ({ user, toast }) => {
  // 🆕 用 query string 而不是 hash,更稳定;同时加 timestamp 防缓存
  const userParam = encodeURIComponent((user.name || '') + (user.alias ? ' ' + user.alias : ''));
  const userAlias = encodeURIComponent(user.alias || user.name || '');
  // 同时支持 hash 和 query 两种,确保 kb.html 能识别
  const sameDirUrl = `kb.html?user=${userParam}&alias=${userAlias}#user=${userParam}`;
  
  const iframeRef = React.useRef(null);
  const isAdmin = (user.role === 'admin' || user.role === 'super_admin');
  const [iframeHeight, setIframeHeight] = useState('calc(100vh - 100px)');
  const [showNewEntry, setShowNewEntry] = useState(false);
  
  // 🆕 加载诊断状态
  const [loadStatus, setLoadStatus] = useState('loading');  // loading / loaded / error / timeout
  const [errorMsg, setErrorMsg] = useState('');
  const [iframeLoadedAt, setIframeLoadedAt] = useState(null);
  
  // 🆕 检测 iframe 是否加载完成(5 秒内还在 loading → 视为加载失败)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loadStatus === 'loading') {
        setLoadStatus('timeout');
        setErrorMsg('iframe 5 秒内未发送数据信号 - 可能 kb.html 没有部署成功');
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [loadStatus, iframeLoadedAt]);

  useEffect(() => {
    // 🆕 fix6: 把当前可视区位置传给 iframe (用于 modal-backdrop 定位)
    const sendKbPosition = () => {
      if (!iframeRef.current || !iframeRef.current.contentWindow) return;
      const rect = iframeRef.current.getBoundingClientRect();
      // 用户视口顶部相对 iframe 顶部的偏移 (用户向下滚动了多少 iframe 内容)
      const scrollY = Math.max(0, -rect.top);
      try {
        iframeRef.current.contentWindow.postMessage({
          type: 'kb-position-info',
          scrollY,
          viewportHeight: window.innerHeight
        }, '*');
      } catch(e) { /* ignore */ }
    };
    
    // 用 rAF 节流滚动事件
    let scrollRafId = null;
    const onScroll = () => {
      if (scrollRafId) return;
      scrollRafId = requestAnimationFrame(() => {
        sendKbPosition();
        scrollRafId = null;
      });
    };
    
    const handler = (e) => {
      if (e.data?.type === 'iframe-resize' && e.data?.source === 'kb') {
        // 🆕 fix8: 不再撑大 iframe 到内容高度!
        // 原因:iframe 内容高度=4500px+,会让 position:fixed 的 modal 铆在 iframe 顶部,用户向下滚动后看不到
        // 之前用户曾要求"删除上下滑动模块"(撑大 iframe 来消除内部滚动条),但那破坏了 modal 弹窗
        // 经重新评估,正确做法是:保留 iframe 自己的滚动条 (viewport-bound),让 position:fixed 在 iframe 内正常工作
        // 副作用:iframe 内会有滚动条 (这是必要的代价,确保 modal 弹窗可见)
        // setIframeHeight(Math.max(600, e.data.height + 20) + 'px');  ← 已禁用 (撑大会破坏 modal)
        setLoadStatus('loaded');
      }
      if (e.data?.type === 'iframe-modal-open' && e.data?.source === 'kb') {
        // fix6 残留:即便 iframe 现在 viewport-bound 不再需要 absolute 定位 backdrop,但发位置信息无害
        document.body.style.overflow = 'hidden';
        sendKbPosition();
      }
      if (e.data?.type === 'iframe-modal-close' && e.data?.source === 'kb') {
        document.body.style.overflow = '';
      }
      if (e.data?.type === 'kb-request-position' && e.data?.source === 'kb') {
        sendKbPosition();
      }
    };
    window.addEventListener('message', handler);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', sendKbPosition);
    return () => {
      window.removeEventListener('message', handler);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', sendKbPosition);
      if (scrollRafId) cancelAnimationFrame(scrollRafId);
      // 安全起见,如果模块卸载时还锁着滚动,解锁
      if (document.body.style.overflow === 'hidden') document.body.style.overflow = '';
    };
  }, []);
  
  const refreshIframe = () => {
    setLoadStatus('loading');
    setErrorMsg('');
    setIframeLoadedAt(Date.now());
    if (iframeRef.current) {
      // 加时间戳防缓存
      const url = sameDirUrl + '&_t=' + Date.now();
      iframeRef.current.src = url;
    }
  };
  
  const handleIframeLoad = () => {
    // iframe 的 onload 触发 - 至少 HTML 加载了。设个短超时等 iframe 内 JS 发 postMessage
    setTimeout(() => {
      if (loadStatus === 'loading') {
        // 没收到 postMessage,但 iframe 加载了 → 可能是密码门 / 数据没渲染
        setLoadStatus('loaded_no_data');
      }
    }, 2000);
  };
  
  const handleIframeError = () => {
    setLoadStatus('error');
    setErrorMsg('iframe 加载失败 - kb.html 可能不存在或路径错误');
  };
  
  // 🆕 诊断工具:测试 kb.html 是否可访问
  const diagnoseKb = async () => {
    setErrorMsg('正在诊断 kb.html 状态...');
    try {
      const testUrl = 'kb.html?_diagnose=1&_t=' + Date.now();
      const resp = await fetch(testUrl, { method:'HEAD', cache:'no-store' });
      if (resp.ok) {
        setErrorMsg(`✓ kb.html 文件可访问(HTTP ${resp.status})。问题可能是 iframe 内 JS 错误或密码门拦截。\n\n建议:\n1. 点击「↗ 新窗口打开」直接在新页面访问\n2. 如果新页面也看不到数据,F12 查看 kb.html 的控制台错误`);
      } else {
        setErrorMsg(`❌ kb.html HTTP ${resp.status} - 文件可能未部署到服务器!\n\n请确保 kb.html 已上传到 GitHub Pages 同目录(${window.location.pathname.replace(/[^/]+$/, '')}kb.html)`);
      }
    } catch(e) {
      setErrorMsg(`❌ 无法访问 kb.html: ${e.message}\n\n这意味着 kb.html 不在当前页面同目录。请将 kb.html 上传到与本工作台相同的 GitHub Pages 目录。`);
    }
  };

  return (
    <div className="fade-in" style={{margin:'-20px -24px -20px'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 24px', background:'var(--bg-elevated)', borderBottom:'1px solid var(--line)', flexWrap:'wrap', gap:8}}>
        <div style={{fontSize:13, color:'var(--ink-3)'}}>
          <strong style={{color:'var(--ink)'}}>📚 知识库</strong>
          <span style={{marginLeft:8}}>· 280+ Q&A · 智能搜索 · Gemini AI · 团队协同</span>
          {isAdmin && <span style={{marginLeft:8, color:'var(--accent)', fontWeight:600}}>· 👑 主管模式</span>}
          {/* 🆕 状态指示 */}
          {loadStatus === 'loading' && <span style={{marginLeft:8, color:'#0369a1'}}>· ⏳ 加载中...</span>}
          {loadStatus === 'loaded' && <span style={{marginLeft:8, color:'#15803d'}}>· ✓ 已加载</span>}
          {(loadStatus === 'error' || loadStatus === 'timeout' || loadStatus === 'loaded_no_data') && (
            <span style={{marginLeft:8, color:'#dc2626', fontWeight:600}}>· ⚠ 加载异常</span>
          )}
        </div>
        <div style={{display:'flex', gap:6}}>
          {isAdmin && (
            <button onClick={() => setShowNewEntry(true)}
              style={{padding:'5px 14px', background:'var(--accent)', color:'white', border:'none', borderRadius:6, cursor:'pointer', fontSize:12, fontFamily:'inherit', fontWeight:600}}
              title="新建一条 Q&A 模板">
              + 新建知识
            </button>
          )}
          <button className="btn-sec" onClick={refreshIframe} title="刷新">🔄</button>
          <button className="btn-sec" onClick={diagnoseKb} title="诊断 kb.html 状态">🩺 诊断</button>
          <a href={sameDirUrl} target="_blank" rel="noopener" className="btn-sec" style={{textDecoration:'none'}}>↗ 新窗口打开</a>
        </div>
      </div>
      
      {/* 🆕 错误信息显示 */}
      {(loadStatus === 'error' || loadStatus === 'timeout' || loadStatus === 'loaded_no_data' || errorMsg) && (
        <div style={{padding:'14px 24px', background:'#fef3c7', borderBottom:'1px solid #fbbf24', fontSize:13}}>
          <div style={{display:'flex', alignItems:'flex-start', gap:10}}>
            <span style={{fontSize:20}}>⚠</span>
            <div style={{flex:1, color:'#78350f', whiteSpace:'pre-wrap', lineHeight:1.6}}>
              <strong>知识库加载状态:{loadStatus}</strong>
              {errorMsg && <div style={{marginTop:4}}>{errorMsg}</div>}
              {loadStatus === 'loaded_no_data' && !errorMsg && (
                <div style={{marginTop:6}}>
                  iframe HTML 加载了但内容未渲染。可能原因:<br/>
                  1. kb.html 内部 JS 报错(请按下方按钮诊断)<br/>
                  2. 密码门拦截(点「↗ 新窗口打开」直接访问可验证)<br/>
                  3. iframe 高度计算错误
                </div>
              )}
              <div style={{marginTop:8, display:'flex', gap:6, flexWrap:'wrap'}}>
                <button onClick={diagnoseKb}
                  style={{padding:'4px 10px', background:'white', color:'#78350f', border:'1px solid #fbbf24', borderRadius:5, fontSize:11, cursor:'pointer', fontFamily:'inherit', fontWeight:600}}>
                  🩺 检测 kb.html 文件
                </button>
                <a href={sameDirUrl} target="_blank" rel="noopener"
                  style={{padding:'4px 10px', background:'white', color:'#78350f', border:'1px solid #fbbf24', borderRadius:5, fontSize:11, cursor:'pointer', fontFamily:'inherit', fontWeight:600, textDecoration:'none'}}>
                  ↗ 在新窗口直接访问
                </a>
                <button onClick={refreshIframe}
                  style={{padding:'4px 10px', background:'white', color:'#78350f', border:'1px solid #fbbf24', borderRadius:5, fontSize:11, cursor:'pointer', fontFamily:'inherit', fontWeight:600}}>
                  🔄 重新加载
                </button>
              </div>
              <div style={{marginTop:6, fontSize:11, color:'#92400e'}}>
                当前 iframe URL: <code style={{background:'white', padding:'1px 5px', borderRadius:3}}>{sameDirUrl}</code>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <iframe
        ref={iframeRef}
        src={sameDirUrl}
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        style={{width:'100%', height:iframeHeight, border:'none', background:'#fff', display:'block', transition:'height .15s', minHeight:600}}
        title="知识库"
      />
      {showNewEntry && (
        <KBNewEntryModal user={user} toast={toast}
          onClose={() => setShowNewEntry(false)}
          onSaved={() => { setShowNewEntry(false); refreshIframe(); }} />
      )}
    </div>
  );
};

// 🆕 新建知识库条目 modal
const KBNewEntryModal = ({ user, toast, onClose, onSaved }) => {
  const [catCn, setCatCn] = useState('售前问题');
  const [qCn, setQCn] = useState('');
  const [aCn, setACn] = useState('');
  const [qEn, setQEn] = useState('');
  const [aEn, setAEn] = useState('');
  const [saving, setSaving] = useState(false);
  
  const KB_CATEGORIES = [
    { cn:'售前问题', en:'Pre-sales' },
    { cn:'售中问题', en:'During Order' },
    { cn:'产品问题', en:'Product' },
    { cn:'物流问题', en:'Logistics' },
    { cn:'售后问题', en:'After-sales' },
  ];
  
  const currentCatEn = KB_CATEGORIES.find(c => c.cn === catCn)?.en || 'Other';
  
  const handleSave = async () => {
    if (!qCn.trim() || !aCn.trim()) { alert('请至少填写中文问题 + 中文回复'); return; }
    setSaving(true);
    try {
      // 取当前最大 id + 1
      const { data: maxRow } = await CLOUD.client.from('workspace_kb').select('id').order('id', { ascending:false }).limit(1);
      const newId = (maxRow && maxRow[0] ? maxRow[0].id : 0) + 1;
      
      const payload = {
        id: newId,
        cat_cn: catCn,
        cat_en: currentCatEn,
        category: catCn,
        q_cn: qCn.trim(),
        q_en: qEn.trim() || qCn.trim(),
        a_cn: aCn.trim(),
        a_en: aEn.trim() || aCn.trim(),
      };
      const { error } = await CLOUD.client.from('workspace_kb').insert(payload);
      if (error) throw error;
      toast('✓ 已添加到知识库 (id: ' + newId + ')');
      onSaved();
    } catch(e) {
      alert('保存失败: ' + (e.message || e));
    }
    setSaving(false);
  };
  
  return (
    <div onClick={onClose}
      style={{position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:99999, display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'4vh 20px', overflowY:'auto', overflowX:'hidden'}}>
      <div onClick={e => e.stopPropagation()}
        style={{background:'white', borderRadius:14, maxWidth:720, width:'100%', display:'flex', flexDirection:'column', maxHeight:'92vh', overflowY:'auto', overflowX:'hidden'}}>
        <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div className="font-display" style={{fontSize:16, fontWeight:600}}>📚 新建知识库条目</div>
          <button className="btn-sec" onClick={onClose} style={{padding:'4px 12px'}}>×</button>
        </div>
        
        <div style={{padding:18, overflow:'auto', flex:1}}>
          <div style={{marginBottom:12}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>分类</label>
            <div style={{display:'flex', gap:6, flexWrap:'wrap'}}>
              {KB_CATEGORIES.map(c => (
                <button key={c.cn} onClick={() => setCatCn(c.cn)}
                  style={{
                    padding:'5px 12px', borderRadius:14, fontSize:12, cursor:'pointer', fontFamily:'inherit',
                    border:'1px solid ' + (catCn === c.cn ? 'var(--accent)' : 'var(--line)'),
                    background: catCn === c.cn ? 'var(--accent)' : 'white',
                    color: catCn === c.cn ? 'white' : 'var(--ink-2)',
                  }}>
                  {c.cn} / {c.en}
                </button>
              ))}
            </div>
          </div>
          
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:12}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>客户问题 (中文) *</label>
              <textarea value={qCn} onChange={e => setQCn(e.target.value)}
                placeholder="例如:客户询问产品是否为复制品"
                style={{width:'100%', minHeight:60, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical'}} />
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>Customer Question (English)</label>
              <textarea value={qEn} onChange={e => setQEn(e.target.value)}
                placeholder="Customer asks if the product is a replica"
                style={{width:'100%', minHeight:60, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical'}} />
            </div>
          </div>
          
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:8}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>回复模板 (中文) *</label>
              <textarea value={aCn} onChange={e => setACn(e.target.value)}
                placeholder="Hi [客户姓名]，&#10;&#10;感谢您的询问。我们的产品..."
                style={{width:'100%', minHeight:200, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical', lineHeight:1.5}} />
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>Reply Template (English)</label>
              <textarea value={aEn} onChange={e => setAEn(e.target.value)}
                placeholder="Hi [Customer Name],&#10;&#10;Thank you for reaching out. Our products..."
                style={{width:'100%', minHeight:200, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical', lineHeight:1.5}} />
            </div>
          </div>
          
          <div style={{padding:'8px 12px', background:'#fef9c3', border:'1px solid #fde047', borderRadius:6, fontSize:11, color:'#713f12'}}>
            💡 占位符可以用 <code>[客户姓名]</code> · <code>[订单号]</code> · <code>[Customer Name]</code> 等,客服在用时直接替换
          </div>
        </div>
        
        <div style={{padding:'12px 18px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'flex-end', gap:6}}>
          <button onClick={onClose} className="btn-sec" style={{padding:'7px 14px'}}>取消</button>
          <button onClick={handleSave} disabled={saving}
            style={{padding:'7px 18px', background:'var(--accent)', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13, opacity: saving ? 0.5 : 1}}>
            {saving ? '保存中...' : '✓ 保存到知识库'}
          </button>
        </div>
      </div>
    </div>
  );
};


// ============================================================
// 云同步设置模块（嵌入员工管理顶部）
// ============================================================
// ============================================================
// 🏭 供应商管理 - 所有人可新增/编辑/搜索，仅 admin 可删除
// ============================================================
const SuppliersManagement = ({ toast, user }) => {
  const isAdmin = user && (user.role === 'admin' || user.role === 'super_admin');
  const [suppliers, setSuppliers] = useState([]);
  const [showFullInfo, setShowFullInfo] = useState(false);  // 是否显示收款人/支付宝列(默认隐藏,这些字段对客服日常没用)
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [showNew, setShowNew] = useState(false);
  const [newSupplier, setNewSupplier] = useState({ name:'', contact_person:'', alipay:'', category:'', notes:'' });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  
  const loadSuppliers = async () => {
    setLoading(true);
    try {
      const list = await CLOUD.list('suppliers', { order:{col:'name', asc:true}, limit:2000 });
      setSuppliers(list || []);
    } catch(e) { toast('❌ 加载失败: ' + e.message); }
    setLoading(false);
  };
  useEffect(() => { loadSuppliers(); }, []);
  
  const handleCreate = async () => {
    if (!newSupplier.name.trim()) { alert('请填写供应商名'); return; }
    // 检查重名
    if (suppliers.some(s => s.name === newSupplier.name.trim())) {
      alert(`供应商 "${newSupplier.name.trim()}" 已存在`);
      return;
    }
    const payload = {
      name: newSupplier.name.trim(),
      contact_person: newSupplier.contact_person.trim() || null,
      alipay: newSupplier.alipay.trim() || null,
      category: newSupplier.category.trim() || null,
      notes: newSupplier.notes.trim() || '手动新增',
      active: true,
    };
    const res = await CLOUD.upsert('suppliers', payload);
    if (res) {
      toast('✓ 已新增供应商');
      setNewSupplier({ name:'', contact_person:'', alipay:'', category:'', notes:'' });
      setShowNew(false);
      loadSuppliers();
    } else {
      toast('❌ 新增失败');
    }
  };
  
  const startEdit = (s) => {
    setEditingId(s.id);
    setEditForm({ ...s });
  };
  
  const saveEdit = async () => {
    if (!editForm.name?.trim()) { alert('请填写供应商名'); return; }
    const payload = {
      ...editForm,
      name: editForm.name.trim(),
      contact_person: (editForm.contact_person || '').trim() || null,
      alipay: (editForm.alipay || '').trim() || null,
      category: (editForm.category || '').trim() || null,
    };
    const res = await CLOUD.upsert('suppliers', payload);
    if (res) {
      toast('✓ 已更新');
      setEditingId(null);
      loadSuppliers();
    } else {
      toast('❌ 更新失败');
    }
  };
  
  const handleDelete = async (s) => {
    if (s.total_aftersales > 0) {
      if (!confirm(`供应商 "${s.name}" 有 ${s.total_aftersales} 单售后历史，确定要删除吗？\n\n建议改为停用而非删除。`)) return;
    } else {
      if (!confirm(`确认删除供应商 "${s.name}"？`)) return;
    }
    const ok = await CLOUD.del('suppliers', s.id);
    if (ok) {
      toast('✓ 已删除');
      loadSuppliers();
    } else {
      toast('❌ 删除失败（可能有关联的售后/退款记录）');
    }
  };
  
  const toggleActive = async (s) => {
    const res = await CLOUD.upsert('suppliers', { ...s, active: !s.active });
    if (res) { loadSuppliers(); toast(s.active ? '✓ 已停用' : '✓ 已启用'); }
  };
  
  const filtered = useMemo(() => {
    if (!search.trim()) return suppliers;
    const q = search.toLowerCase();
    return suppliers.filter(s => 
      (s.name || '').toLowerCase().includes(q) || 
      (s.contact_person || '').toLowerCase().includes(q) ||
      (s.alipay || '').toLowerCase().includes(q) ||
      (s.category || '').toLowerCase().includes(q)
    );
  }, [suppliers, search]);
  
  return (
    <div className="paper rounded-2xl p-5">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:14, flexWrap:'wrap', gap:8}}>
        <div>
          <div className="font-display" style={{fontSize:17, fontWeight:600}}>🏭 供应商管理</div>
          <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>
            共 {suppliers.length} 家供应商 · 显示 {filtered.length} 家
            {filtered.filter(s => !s.active).length > 0 && <span style={{color:'var(--ink-4)'}}> · {filtered.filter(s => !s.active).length} 家已停用</span>}
          </div>
        </div>
        <div style={{display:'flex', gap:6, flexWrap:'wrap'}}>
          <button onClick={() => setShowFullInfo(v => !v)}
            style={{padding:'5px 12px', fontSize:12, borderRadius:6, cursor:'pointer', fontFamily:'inherit', border:'1px solid var(--line)', background: showFullInfo ? '#e0f2fe' : 'white', color: showFullInfo ? '#0369a1' : 'var(--ink-2)'}}>
            {showFullInfo ? '👁 隐藏收款信息' : '💳 显示收款信息'}
          </button>
          <button className="btn-sec" onClick={loadSuppliers} style={{padding:'5px 12px', fontSize:12}}>🔄 刷新</button>
          <button className="btn-pri" onClick={() => setShowNew(true)} style={{padding:'5px 14px', fontSize:12}}>+ 新增供应商</button>
        </div>
      </div>
      
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="🔍 搜索供应商名 / 收款人 / 支付宝 / 类别..."
        style={{width:'100%', padding:'8px 12px', border:'1px solid var(--line)', borderRadius:8, fontSize:13, marginBottom:14}} />
      
      {showNew && (
        <div style={{padding:14, background:'#f0fdf4', border:'1px solid #86efac', borderRadius:10, marginBottom:14}}>
          <div style={{fontSize:13, fontWeight:600, color:'#14532d', marginBottom:10}}>+ 新增供应商</div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:8}}>
            <input value={newSupplier.name} onChange={e => setNewSupplier({...newSupplier, name:e.target.value})}
              placeholder="供应商名 *（如：三洪）"
              style={{padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            <input value={newSupplier.contact_person} onChange={e => setNewSupplier({...newSupplier, contact_person:e.target.value})}
              placeholder="收款人姓名"
              style={{padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            <input value={newSupplier.alipay} onChange={e => setNewSupplier({...newSupplier, alipay:e.target.value})}
              placeholder="支付宝账号（手机/邮箱）"
              style={{padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            <input value={newSupplier.category} onChange={e => setNewSupplier({...newSupplier, category:e.target.value})}
              placeholder="主营类别（吊灯/吸顶/壁灯...）"
              style={{padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
          </div>
          <input value={newSupplier.notes} onChange={e => setNewSupplier({...newSupplier, notes:e.target.value})}
            placeholder="备注（选填）"
            style={{width:'100%', padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, marginBottom:8}} />
          <div style={{display:'flex', gap:6, justifyContent:'flex-end'}}>
            <button className="btn-sec" onClick={() => { setShowNew(false); setNewSupplier({ name:'', contact_person:'', alipay:'', category:'', notes:'' }); }} style={{padding:'5px 12px', fontSize:12}}>取消</button>
            <button className="btn-pri" onClick={handleCreate} style={{padding:'5px 14px', fontSize:12}}>✓ 新增</button>
          </div>
        </div>
      )}
      
      {loading ? (
        <div style={{padding:30, textAlign:'center', color:'var(--ink-3)', fontSize:13}}>⏳ 加载中...</div>
      ) : filtered.length === 0 ? (
        <div style={{padding:30, textAlign:'center', color:'var(--ink-3)', fontSize:13}}>没有符合条件的供应商</div>
      ) : (
        <div className="overflow-x-auto" style={{maxHeight:600, overflowY:'auto'}}>
          <table style={{minWidth: showFullInfo ? '800px' : '600px', width:'100%'}}>
            <thead style={{position:'sticky', top:0, background:'var(--bg-elevated)', zIndex:1}}>
              <tr>
                <th style={{width:'36px'}}>#</th>
                <th style={{minWidth:'160px'}}>供应商名</th>
                {showFullInfo && <th style={{width:'120px'}}>收款人</th>}
                {showFullInfo && <th style={{width:'180px'}}>支付宝</th>}
                <th style={{width:'140px'}}>主营类别</th>
                <th style={{width:'70px'}}>售后数</th>
                <th style={{width:'90px'}}>状态</th>
                <th style={{width:'160px'}}>操作</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, idx) => editingId === s.id ? (
                <tr key={s.id} style={{background:'#fef9c3'}}>
                  <td>{idx + 1}</td>
                  <td><input value={editForm.name || ''} onChange={e => setEditForm({...editForm, name:e.target.value})} style={{width:'100%', padding:'4px 6px', fontSize:12, border:'1px solid var(--line)', borderRadius:4}} /></td>
                  {showFullInfo && <td><input value={editForm.contact_person || ''} onChange={e => setEditForm({...editForm, contact_person:e.target.value})} style={{width:'100%', padding:'4px 6px', fontSize:12, border:'1px solid var(--line)', borderRadius:4}} /></td>}
                  {showFullInfo && <td><input value={editForm.alipay || ''} onChange={e => setEditForm({...editForm, alipay:e.target.value})} style={{width:'100%', padding:'4px 6px', fontSize:12, border:'1px solid var(--line)', borderRadius:4}} /></td>}
                  <td><input value={editForm.category || ''} onChange={e => setEditForm({...editForm, category:e.target.value})} style={{width:'100%', padding:'4px 6px', fontSize:12, border:'1px solid var(--line)', borderRadius:4}} /></td>
                  <td style={{fontSize:12, textAlign:'center'}}>{s.total_aftersales || 0}</td>
                  <td><label style={{display:'flex', alignItems:'center', gap:4, fontSize:11}}><input type="checkbox" checked={editForm.active !== false} onChange={e => setEditForm({...editForm, active:e.target.checked})} /> 启用</label></td>
                  <td>
                    <div style={{display:'flex', gap:3}}>
                      <button className="btn-pri" onClick={saveEdit} style={{padding:'3px 8px', fontSize:11}}>✓ 保存</button>
                      <button className="btn-sec" onClick={() => setEditingId(null)} style={{padding:'3px 8px', fontSize:11}}>取消</button>
                    </div>
                  </td>
                </tr>
              ) : (
                <tr key={s.id} style={{opacity: s.active === false ? 0.5 : 1}}>
                  <td style={{fontSize:11, color:'var(--ink-4)'}}>{idx + 1}</td>
                  <td style={{fontSize:13, fontWeight:600}}>{s.name}</td>
                  {showFullInfo && <td style={{fontSize:12, color:'var(--ink-2)'}}>{s.contact_person || '-'}</td>}
                  {showFullInfo && <td style={{fontSize:11, color:'var(--ink-3)', fontFamily:'monospace'}}>{s.alipay || '-'}</td>}
                  <td style={{fontSize:12, color:'var(--ink-3)'}}>{s.category || '-'}</td>
                  <td style={{fontSize:12, textAlign:'center', color: s.total_aftersales > 10 ? '#dc2626' : 'var(--ink-3)', fontWeight: s.total_aftersales > 0 ? 600 : 400}}>
                    {s.total_aftersales || 0}
                  </td>
                  <td>
                    {isAdmin ? (
                      <button onClick={() => toggleActive(s)}
                        style={{padding:'2px 8px', fontSize:10, fontWeight:600, borderRadius:10, cursor:'pointer', fontFamily:'inherit',
                          background: s.active !== false ? '#dcfce7' : '#f5f5f5',
                          color: s.active !== false ? '#15803d' : '#666',
                          border: '1px solid ' + (s.active !== false ? '#86efac' : '#ddd'),
                        }}>
                        {s.active !== false ? '● 启用' : '○ 停用'}
                      </button>
                    ) : (
                      <span style={{padding:'2px 8px', fontSize:10, fontWeight:600, borderRadius:10, fontFamily:'inherit',
                        background: s.active !== false ? '#dcfce7' : '#f5f5f5',
                        color: s.active !== false ? '#15803d' : '#666',
                        border: '1px solid ' + (s.active !== false ? '#86efac' : '#ddd'),
                      }}>
                        {s.active !== false ? '● 启用' : '○ 停用'}
                      </span>
                    )}
                  </td>
                  <td>
                    <div style={{display:'flex', gap:4}}>
                      <button onClick={() => startEdit(s)} 
                        style={{padding:'4px 10px', fontSize:11, background:'#e0f2fe', color:'#0369a1', border:'1px solid #7dd3fc', borderRadius:5, cursor:'pointer', fontFamily:'inherit', fontWeight:600}}
                        title="编辑供应商信息">
                        ✏️ 编辑
                      </button>
                      {isAdmin && (
                        <button onClick={() => handleDelete(s)} 
                          style={{padding:'4px 10px', fontSize:11, background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:5, cursor:'pointer', fontFamily:'inherit', fontWeight:600}}
                          title="删除供应商（仅主管可见 · 不可恢复）"
                          onMouseEnter={e => { e.currentTarget.style.background = '#dc2626'; e.currentTarget.style.color = 'white'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = '#fef2f2'; e.currentTarget.style.color = '#dc2626'; }}>
                          🗑 删除
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div style={{marginTop:14, padding:10, background:'#f0f9ff', border:'1px solid #bae6fd', borderRadius:8, fontSize:11, color:'#075985'}}>
        💡 <strong>说明：</strong> 所有客服都可以新增和编辑供应商，删除/停用功能仅主管可用（保护历史数据完整性）。所有客服在「📋 工作主线」创建事件时都能在下拉中搜索到供应商。
      </div>
    </div>
  );
};

const CloudSettingsCard = ({ cfg, setCfg, toast, onApply }) => {
  const [url, setUrl] = useState(cfg.url || DEFAULT_SB_URL);
  const [key, setKey] = useState(cfg.key || '');
  const [enabled, setEnabled] = useState(cfg.enabled || false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const handleTest = async () => {
    setTesting(true);
    setTestResult(null);
    const ok = CLOUD.init(url.trim(), key.trim());
    if (!ok) { setTestResult({ok:false, msg:CLOUD.lastError || '初始化失败'}); setTesting(false); return; }
    const res = await CLOUD.ping();
    setTestResult(res);
    setTesting(false);
  };

  const handleSave = () => {
    const nextCfg = { url: url.trim(), key: key.trim(), enabled };
    STORE.set('cloud_config', nextCfg);
    setCfg(nextCfg);
    if (enabled && url && key) {
      const ok = CLOUD.init(url.trim(), key.trim());
      if (ok) toast('☁ 云同步已启用'); else toast('⚠ 云同步配置错误');
    } else {
      CLOUD.client = null; CLOUD.enabled = false; CLOUD.status = 'local';
      toast('已切换为本地模式');
    }
    onApply();
  };

  return (
    <div className="paper rounded-2xl p-5 mb-5">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="font-display text-base font-bold" style={{color:'var(--accent)'}}>☁ 云同步设置</div>
          <div className="text-[11px] mt-1" style={{color:'var(--ink-3)'}}>启用后客服记录、报价单、汇报工单、知识库均在 Supabase 云端协同</div>
        </div>
        <span className={`cloud-status ${CLOUD.status}`}><span className="dot"></span>{CLOUD.status === 'ok' ? '已连接' : CLOUD.status === 'err' ? '错误' : '本地模式'}</span>
      </div>
      <div className="space-y-3">
        <div>
          <label className="text-[10px] font-bold uppercase" style={{color:'var(--ink-3)'}}>Supabase URL</label>
          <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://xxx.supabase.co" style={{fontFamily:'JetBrains Mono, monospace', fontSize:12}} />
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase" style={{color:'var(--ink-3)'}}>Anon / Publishable Key</label>
          <input value={key} onChange={e => setKey(e.target.value)} placeholder="sb_publishable_xxx 或 eyJ..." style={{fontFamily:'JetBrains Mono, monospace', fontSize:12}} type="password" />
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input type="checkbox" checked={enabled} onChange={e => setEnabled(e.target.checked)} />
            启用云同步（关闭后所有操作仅本地）
          </label>
          <div className="flex gap-2">
            <button className="btn-sec text-xs" onClick={handleTest} disabled={testing || !url || !key}>{testing ? '测试中...' : '🔌 测试连接'}</button>
            <button className="btn-pri text-xs" onClick={handleSave}>💾 保存并应用</button>
          </div>
        </div>
        {testResult && (
          <div className={`p-2 rounded text-xs ${testResult.ok ? 'tag-good' : 'tag-warn'}`} style={{background: testResult.ok ? '#dcfce7' : '#fee2e2', color: testResult.ok ? '#166534' : '#991b1b'}}>
            {testResult.ok ? '✓ ' : '✗ '}{testResult.msg}
          </div>
        )}
        <div className="text-[10px] rounded p-2" style={{background:'var(--bg)', color:'var(--ink-3)', lineHeight:1.65}}>
          <strong>📋 首次使用步骤：</strong>
          <ol style={{listStyle:'decimal', paddingLeft:18, marginTop:4}}>
            <li>在 Supabase 仪表板 → SQL Editor 运行附带的 <code>supabase_init.sql</code></li>
            <li>把 <code>knowledge_base.json</code> 导入 <code>workspace_kb</code> 表（详见 SQL 末尾说明）</li>
            <li>在此填入 URL + Publishable Key → 测试连接 → 保存</li>
            <li>团队成员只需复制本 HTML + 在此填同样配置即可共享数据</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

// ============================================================
// 🆕 fix10: 左侧导航栏 (IDE 风格)
// 显示 layoutPrefs.topKeys 之外的所有 tabs,按 group 分区
// 可折叠到 icon-only 模式(52px 宽)
// ============================================================
const NavSidebar = ({ tabs, activeTab, setActiveTab, collapsed, onToggleCollapse, onOpenCustomize }) => {
  // 🆕 fix18: 自动按点击次数排序 (常用功能浮到组内顶部)
  // localStorage key: 'cs_tab_usage' = { tabKey: clickCount, ... }
  const [usage, setUsage] = useState(() => {
    try {
      const raw = localStorage.getItem('cs_tab_usage');
      return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
  });
  const [autoSort, setAutoSort] = useState(() => {
    try { return localStorage.getItem('cs_tab_autosort') !== 'off'; }  // 默认开
    catch { return true; }
  });
  
  // 点击计数 (在 setActiveTab 调用之前调一次)
  const recordClick = (tabKey) => {
    setUsage(prev => {
      const next = { ...prev, [tabKey]: (prev[tabKey] || 0) + 1 };
      try { localStorage.setItem('cs_tab_usage', JSON.stringify(next)); } catch {}
      return next;
    });
  };
  const toggleAutoSort = () => {
    setAutoSort(v => {
      const next = !v;
      try { localStorage.setItem('cs_tab_autosort', next ? 'on' : 'off'); } catch {}
      return next;
    });
  };
  
  // 按分组拆开 — 如果开启自动排序,按 usage 降序
  const grouped = useMemo(() => {
    const m = { main: [], resources: [], collab: [], admin: [] };
    // 保留原始顺序索引,用于平局时稳定排序
    const origIdx = {};
    tabs.forEach((t, i) => { origIdx[t.key] = i; });
    tabs.forEach(t => { if (m[t.group]) m[t.group].push(t); });
    if (autoSort) {
      Object.keys(m).forEach(g => {
        m[g] = [...m[g]].sort((a, b) => {
          const ua = usage[a.key] || 0;
          const ub = usage[b.key] || 0;
          if (ua !== ub) return ub - ua;       // 点击多的在前
          return origIdx[a.key] - origIdx[b.key];  // 平局按原始顺序
        });
      });
    }
    return m;
  }, [tabs, autoSort, usage]);
  
  const groupTitles = {
    main:      '📌 主功能',
    resources: '📚 资源工具',
    collab:    '💬 协作',
    admin:     '⚙ 管理',
  };
  
  const width = collapsed ? 56 : 200;
  
  return (
    <aside style={{
      width,
      flexShrink: 0,
      borderRight: '1px solid var(--line)',
      background: 'rgba(251,251,253,.7)',
      backdropFilter: 'saturate(180%) blur(10px)',
      WebkitBackdropFilter: 'saturate(180%) blur(10px)',
      transition: 'width .2s ease',
      display: 'flex', flexDirection: 'column',
      alignSelf: 'flex-start',
      position: 'sticky', top: 56,
      maxHeight: 'calc(100vh - 56px)',
      overflowY: 'auto', overflowX: 'hidden',
    }}>
      {/* Collapse toggle */}
      <div style={{padding: '6px 8px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: collapsed ? 'center' : 'space-between', alignItems:'center', gap:4}}>
        {!collapsed && (
          <button onClick={toggleAutoSort} title={autoSort ? '当前按使用频率自动排序 · 点击关闭' : '当前按原始顺序 · 点击启用自动排序'}
            style={{padding: '4px 8px', background: autoSort ? 'var(--accent-soft)' : 'transparent', border: '1px solid '+(autoSort ? 'var(--accent)' : 'var(--line)'), borderRadius: 5, cursor: 'pointer', fontSize: 10, color: autoSort ? 'var(--accent)' : 'var(--ink-3)', fontFamily: 'inherit', fontWeight: autoSort ? 600 : 400}}>
            {autoSort ? '⭐ 自动排序' : '☐ 自动排序'}
          </button>
        )}
        <button onClick={onToggleCollapse} title={collapsed ? '展开侧边栏' : '折叠侧边栏'}
          style={{padding: '4px 8px', background: 'transparent', border: '1px solid var(--line)', borderRadius: 5, cursor: 'pointer', fontSize: 11, color: 'var(--ink-3)', fontFamily: 'inherit'}}>
          {collapsed ? '▶' : '◀ 折叠'}
        </button>
      </div>
      
      {/* Groups */}
      <div style={{flex: 1, padding: '8px 6px'}}>
        {['main', 'resources', 'collab', 'admin'].map(g => {
          const items = grouped[g];
          if (!items || items.length === 0) return null;
          return (
            <div key={g} style={{marginBottom: 12}}>
              {!collapsed && (
                <div style={{
                  fontSize: 10, fontWeight: 700, color: 'var(--ink-4)',
                  padding: '4px 8px', marginBottom: 2,
                  letterSpacing: '.5px',
                }}>{groupTitles[g]}</div>
              )}
              {collapsed && g !== 'main' && (
                <div style={{borderTop: '1px solid var(--line)', margin: '4px 8px'}} />
              )}
              {items.map(t => {
                const isActive = activeTab === t.key;
                return (
                  <a key={t.key}
                    href={`#tab=${t.key}`}
                    onClick={(e) => {
                      // 🆕 fix11: 让 ctrl/cmd/shift/中键走浏览器默认 → 右键也能"新标签打开"
                      if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return;
                      e.preventDefault();
                      recordClick(t.key);  // 🆕 fix18: 记录点击,自动排序据此
                      setActiveTab(t.key);
                    }}
                    title={collapsed ? t.label.replace(/^.\s*/, '') : undefined}
                    style={{
                      width: '100%',
                      padding: collapsed ? '8px 0' : '7px 10px',
                      marginBottom: 2,
                      display: 'flex', alignItems: 'center',
                      gap: collapsed ? 0 : 8,
                      justifyContent: collapsed ? 'center' : 'flex-start',
                      background: isActive ? 'var(--accent-soft)' : 'transparent',
                      color: isActive ? 'var(--accent)' : 'var(--ink-2)',
                      border: 'none', borderRadius: 6, cursor: 'pointer',
                      fontFamily: 'inherit', fontSize: 12.5,
                      fontWeight: isActive ? 600 : 500,
                      position: 'relative',
                      textAlign: 'left',
                      textDecoration: 'none',
                      transition: 'background .12s, color .12s',
                      boxSizing: 'border-box',
                    }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'var(--bg-elevated)'; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}>
                    <span style={{fontSize: 16, flexShrink: 0, lineHeight: 1}}>{t.icon}</span>
                    {!collapsed && (
                      <span style={{flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                        {t.label.replace(/^.\s*/, '').trim()}
                      </span>
                    )}
                    {t.badge > 0 && (
                      <span style={{
                        position: collapsed ? 'absolute' : 'static',
                        top: collapsed ? 3 : undefined,
                        right: collapsed ? 3 : undefined,
                        minWidth: 16, height: 16, padding: '0 4px',
                        background: t.badgeColor || 'var(--bad)', color: 'white',
                        borderRadius: 8, fontSize: 9, fontWeight: 700,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        lineHeight: 1, flexShrink: 0,
                      }}>{t.badge}</span>
                    )}
                  </a>
                );
              })}
            </div>
          );
        })}
      </div>
      
      {/* Footer: customize button */}
      <div style={{padding: '8px 6px', borderTop: '1px solid var(--line)', flexShrink: 0}}>
        <button onClick={onOpenCustomize}
          title={collapsed ? '自定义导航布局' : undefined}
          style={{
            width: '100%',
            padding: collapsed ? '8px 0' : '8px 10px',
            display: 'flex', alignItems: 'center',
            gap: collapsed ? 0 : 8,
            justifyContent: collapsed ? 'center' : 'flex-start',
            background: 'transparent', color: 'var(--ink-3)',
            border: '1px dashed var(--line)', borderRadius: 6,
            cursor: 'pointer', fontFamily: 'inherit', fontSize: 12,
            fontWeight: 500,
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-elevated)'; e.currentTarget.style.borderStyle = 'solid'; e.currentTarget.style.color = 'var(--ink-2)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderStyle = 'dashed'; e.currentTarget.style.color = 'var(--ink-3)'; }}>
          <span style={{fontSize: 14, flexShrink: 0}}>⚙</span>
          {!collapsed && <span>自定义布局</span>}
        </button>
      </div>
    </aside>
  );
};

// ============================================================
// 🆕 fix10: 自定义布局弹窗 — 选哪些 tab 钉到顶部 + 拖动排序
// ============================================================
const LayoutCustomizeModal = ({ allTabs, layoutPrefs, defaultTopKeys, onSave, onClose }) => {
  const [topKeys, setTopKeys] = useState(layoutPrefs.topKeys || defaultTopKeys);
  // 🆕 fix28: 侧栏自定义顺序(用户拖动后的) — 默认 null = 用 allTabs 原顺序
  const [sidebarOrder, setSidebarOrder] = useState(layoutPrefs.sidebarOrder || []);
  
  const toggleTop = (key) => {
    setTopKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
  };
  const moveUp = (key) => {
    setTopKeys(prev => {
      const idx = prev.indexOf(key);
      if (idx <= 0) return prev;
      const next = [...prev];
      [next[idx-1], next[idx]] = [next[idx], next[idx-1]];
      return next;
    });
  };
  const moveDown = (key) => {
    setTopKeys(prev => {
      const idx = prev.indexOf(key);
      if (idx === -1 || idx >= prev.length - 1) return prev;
      const next = [...prev];
      [next[idx+1], next[idx]] = [next[idx], next[idx+1]];
      return next;
    });
  };
  
  // 🆕 fix28: 下方"其他功能"区的 ↑↓ 排序(同组内交换)
  const moveOtherUp = (key, group) => {
    setSidebarOrder(prev => {
      // 当前同组的所有 key (按 otherItemsByGroup 实际顺序)
      const groupKeys = otherItemsByGroup[group]?.map(t => t.key) || [];
      const idx = groupKeys.indexOf(key);
      if (idx <= 0) return prev;
      // 交换组内位置
      const newGroupKeys = [...groupKeys];
      [newGroupKeys[idx-1], newGroupKeys[idx]] = [newGroupKeys[idx], newGroupKeys[idx-1]];
      // 合并到全局 sidebarOrder:其他组的 key 保留,该组用新顺序
      const otherGroupKeys = otherItems.filter(t => t.group !== group).map(t => t.key);
      // 把所有组的 key 按 ['main','resources','collab','admin'] 顺序串起来
      const all = [];
      ['main','resources','collab','admin'].forEach(g => {
        if (g === group) all.push(...newGroupKeys);
        else all.push(...otherItems.filter(t => t.group === g).map(t => t.key));
      });
      return all;
    });
  };
  const moveOtherDown = (key, group) => {
    setSidebarOrder(prev => {
      const groupKeys = otherItemsByGroup[group]?.map(t => t.key) || [];
      const idx = groupKeys.indexOf(key);
      if (idx === -1 || idx >= groupKeys.length - 1) return prev;
      const newGroupKeys = [...groupKeys];
      [newGroupKeys[idx+1], newGroupKeys[idx]] = [newGroupKeys[idx], newGroupKeys[idx+1]];
      const all = [];
      ['main','resources','collab','admin'].forEach(g => {
        if (g === group) all.push(...newGroupKeys);
        else all.push(...otherItems.filter(t => t.group === g).map(t => t.key));
      });
      return all;
    });
  };
  
  const reset = () => { setTopKeys(defaultTopKeys); setSidebarOrder([]); };
  const save = () => { onSave({ topKeys, sidebarOrder }); onClose(); };
  
  // 当前选中的(按顺序) + 未选中的(按分组)
  const topItems = topKeys.map(k => allTabs.find(t => t.key === k)).filter(Boolean);
  // 🆕 fix28: otherItems 按 sidebarOrder 排序 (没在 order 里的项追加到末尾)
  const otherItems = useMemo(() => {
    const nonPinned = allTabs.filter(t => !topKeys.includes(t.key));
    if (!sidebarOrder || sidebarOrder.length === 0) return nonPinned;
    const orderMap = new Map(sidebarOrder.map((k, i) => [k, i]));
    return [...nonPinned].sort((a, b) => {
      const ia = orderMap.has(a.key) ? orderMap.get(a.key) : 99999;
      const ib = orderMap.has(b.key) ? orderMap.get(b.key) : 99999;
      return ia - ib;
    });
  }, [allTabs, topKeys, sidebarOrder]);
  
  // 🆕 fix28: 按 group 预分组,用于 ↑↓ 内部排序计算
  const otherItemsByGroup = useMemo(() => {
    const map = {};
    otherItems.forEach(t => {
      if (!map[t.group]) map[t.group] = [];
      map[t.group].push(t);
    });
    return map;
  }, [otherItems]);
  
  const groupTitles = {
    main:      '主功能',
    resources: '资源工具',
    collab:    '协作',
    admin:     '管理',
  };
  
  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)', zIndex: 100000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '5vh 20px', overflow: 'auto'}}>
      <div onClick={e => e.stopPropagation()} style={{background: 'white', borderRadius: 14, width: '100%', maxWidth: 660, boxShadow: '0 20px 60px rgba(0,0,0,.25)', display: 'flex', flexDirection: 'column', maxHeight: '90vh'}}>
        {/* Header */}
        <div style={{padding: '16px 22px', borderBottom: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0}}>
          <div>
            <div className="font-display" style={{fontSize: 16, fontWeight: 600}}>⚙ 自定义导航布局</div>
            <div style={{fontSize: 11, color: 'var(--ink-3)', marginTop: 2}}>每个员工独立配置 · 自动保存</div>
          </div>
          <button onClick={onClose} style={{background: 'transparent', border: 'none', cursor: 'pointer', fontSize: 18, color: 'var(--ink-3)', padding: 0, width: 28, height: 28}}>×</button>
        </div>
        
        {/* Body */}
        <div style={{padding: '18px 22px', overflowY: 'auto', flex: 1}}>
          <div style={{padding: '10px 12px', background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 8, fontSize: 12, color: '#1e40af', marginBottom: 14, lineHeight: 1.6}}>
            💡 选中的功能"钉"在<strong>顶部导航栏</strong>(日常切换最快) — 未选中的会出现在<strong>左侧侧边栏</strong>(按分组分类)。<br/>
            建议顶部放 <strong>3~6 个</strong>最常用的,过多会拥挤。
          </div>
          
          {/* 顶部已钉 */}
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>
            <div style={{fontSize: 12, fontWeight: 700, color: 'var(--ink-2)'}}>
              📌 顶部导航 ({topItems.length} 个){topItems.length > 6 && <span style={{color: '#d97706', marginLeft: 6, fontSize: 10}}>· 略多,建议精简</span>}
            </div>
            <button onClick={reset} style={{padding: '3px 10px', background: 'transparent', border: '1px solid var(--line)', borderRadius: 5, cursor: 'pointer', fontSize: 11, color: 'var(--ink-3)', fontFamily: 'inherit'}}>↻ 恢复默认</button>
          </div>
          
          {topItems.length === 0 ? (
            <div style={{padding: 16, background: '#fafaf7', borderRadius: 8, fontSize: 12, color: 'var(--ink-4)', textAlign: 'center', marginBottom: 16}}>
              顶部还没钉任何功能 — 从下面"全部功能"列表里点 📌 钉一个
            </div>
          ) : (
            <div style={{display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 16}}>
              {topItems.map((t, i) => (
                <div key={t.key} style={{padding: '7px 10px', background: 'var(--accent-soft)', border: '1px solid var(--accent)', borderRadius: 7, display: 'flex', alignItems: 'center', gap: 6}}>
                  <span style={{fontSize: 11, color: 'var(--accent)', fontWeight: 600, width: 18, textAlign: 'center'}}>{i + 1}</span>
                  <span style={{fontSize: 15, lineHeight: 1}}>{t.icon}</span>
                  <span style={{flex: 1, fontSize: 13, color: 'var(--accent)', fontWeight: 600}}>{t.label.replace(/^.\s*/, '').trim()}</span>
                  <button onClick={() => moveUp(t.key)} disabled={i === 0} title="上移"
                    style={{padding: '2px 7px', background: 'white', border: '1px solid var(--line)', borderRadius: 4, cursor: i === 0 ? 'not-allowed' : 'pointer', fontSize: 11, opacity: i === 0 ? 0.4 : 1, fontFamily: 'inherit'}}>↑</button>
                  <button onClick={() => moveDown(t.key)} disabled={i === topItems.length - 1} title="下移"
                    style={{padding: '2px 7px', background: 'white', border: '1px solid var(--line)', borderRadius: 4, cursor: i === topItems.length - 1 ? 'not-allowed' : 'pointer', fontSize: 11, opacity: i === topItems.length - 1 ? 0.4 : 1, fontFamily: 'inherit'}}>↓</button>
                  <button onClick={() => toggleTop(t.key)} title="移回侧边栏"
                    style={{padding: '2px 9px', background: 'white', border: '1px solid var(--line)', borderRadius: 4, cursor: 'pointer', fontSize: 11, color: 'var(--ink-3)', fontFamily: 'inherit'}}>↗ 移走</button>
                </div>
              ))}
            </div>
          )}
          
          {/* 未钉 - 按分组展示 */}
          <div style={{fontSize: 12, fontWeight: 700, color: 'var(--ink-2)', marginBottom: 6}}>
            📚 其他功能 (将出现在左侧栏)
          </div>
          {['main', 'resources', 'collab', 'admin'].map(grp => {
            const items = otherItemsByGroup[grp] || [];
            if (items.length === 0) return null;
            return (
              <div key={grp} style={{marginBottom: 10}}>
                <div style={{fontSize: 10, fontWeight: 700, color: 'var(--ink-4)', marginBottom: 4, paddingLeft: 2, letterSpacing: '.5px'}}>{groupTitles[grp]}</div>
                <div style={{display: 'flex', flexDirection: 'column', gap: 3}}>
                  {items.map((t, idx) => (
                    <div key={t.key} style={{padding: '7px 10px', background: 'white', border: '1px solid var(--line)', borderRadius: 7, display: 'flex', alignItems: 'center', gap: 8}}>
                      <span style={{fontSize: 15, lineHeight: 1}}>{t.icon}</span>
                      <span style={{flex: 1, fontSize: 13, color: 'var(--ink)'}}>{t.label.replace(/^.\s*/, '').trim()}</span>
                      {/* 🆕 fix28: 组内 ↑↓ 排序 */}
                      <button onClick={() => moveOtherUp(t.key, grp)} disabled={idx === 0}
                        title="上移" 
                        style={{padding:'3px 7px', background: idx === 0 ? '#f5f5f7' : 'white', color: idx === 0 ? 'var(--ink-4)' : 'var(--ink-2)', border:'1px solid var(--line)', borderRadius:4, cursor: idx === 0 ? 'not-allowed' : 'pointer', fontSize:11, fontFamily:'inherit'}}>↑</button>
                      <button onClick={() => moveOtherDown(t.key, grp)} disabled={idx === items.length - 1}
                        title="下移"
                        style={{padding:'3px 7px', background: idx === items.length - 1 ? '#f5f5f7' : 'white', color: idx === items.length - 1 ? 'var(--ink-4)' : 'var(--ink-2)', border:'1px solid var(--line)', borderRadius:4, cursor: idx === items.length - 1 ? 'not-allowed' : 'pointer', fontSize:11, fontFamily:'inherit'}}>↓</button>
                      <button onClick={() => toggleTop(t.key)}
                        style={{padding: '4px 10px', background: 'var(--accent)', color: 'white', border: 'none', borderRadius: 5, cursor: 'pointer', fontSize: 11, fontFamily: 'inherit', fontWeight: 600}}>📌 钉到顶部</button>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Footer */}
        <div style={{padding: '12px 22px', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0, background: '#fafafa'}}>
          <div style={{fontSize: 11, color: 'var(--ink-4)'}}>设置保存到本地浏览器 · 每个员工独立</div>
          <div style={{display: 'flex', gap: 8}}>
            <button onClick={onClose} style={{padding: '7px 16px', background: 'white', border: '1px solid var(--line)', borderRadius: 7, cursor: 'pointer', fontSize: 13, fontFamily: 'inherit'}}>取消</button>
            <button onClick={save} style={{padding: '7px 18px', background: '#0071e3', color: 'white', border: 'none', borderRadius: 7, cursor: 'pointer', fontSize: 13, fontWeight: 600, fontFamily: 'inherit'}}>✓ 保存</button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

// ============================================================
// 🤖 fix9c: AI 评价生成 — iframe 嵌入美工系统的 cs-reviews 精简模式
// 跟客服系统完全无关联,只是把美工 worktrack-kpi 上已发布的工具嵌进来用
// URL 必须含 ?embed=cs-reviews 让美工那边进入嵌入模式(隐藏顶部 nav 等)
// 同时传 cs_user_id / cs_user_name / cs_user_alias,美工那边用这个身份记操作日志
// ============================================================
const AiReviewsIframeModule = ({ user }) => {
  const iframeSrc = `https://dekorfine.github.io/worktrack-kpi/?embed=cs-reviews&cs_user_id=${encodeURIComponent(user.id || 'cs_unknown')}&cs_user_name=${encodeURIComponent((user.name || '客服') + (user.alias ? ' ' + user.alias : ''))}&cs_user_alias=${encodeURIComponent(user.alias || '')}`;
  return (
    <div style={{
      height: 'calc(100vh - 110px)',
      background: '#fff',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid rgba(0,0,0,.085)',
    }}>
      <iframe
        src={iframeSrc}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="AI 评价生成工具"
        allow="clipboard-read; clipboard-write"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-downloads allow-modals allow-popups-to-escape-sandbox"
      />
    </div>
  );
};

// ============================================================
// 📨 fix9c: 跨部门协作模块 (CrossDeptModule)
// 美工/客服/跟单 三系统共享消息总线 (cross_dept_messages 表)
// 数据由 App 注入(loadCdmMessages + cdmMessages),realtime 在 App 层订阅
// ============================================================
const CrossDeptModule = ({ user, employees, messages, loading, onReload, toast, shopOwners = [], cdmTimeoutConfig = {} }) => {
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  // 🆕 v22-CV/CW: 4 个 tab — inbox / assigned-to-me / overdue / sent
  const [tab, setTab] = useState('inbox');
  // 🆕 fix15: 升级为 AdvancedDateFilter (本周/上周/本月/任意月份/任意月份的第N周)
  const [dateFilter, setDateFilter] = useState({ kind:'days', n:30 });
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [filterFrom, setFilterFrom] = useState('all');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  // 🆕 v22-CV/CW: 分页支持 20/50/100
  const [pageSize, setPageSize] = useState(50);
  const [showNew, setShowNew] = useState(false);
  const [openMsgId, setOpenMsgId] = useState(null);
  // 🆕 v22-CW Round 3b: 主管管理面板
  const [showShopOwners, setShowShopOwners] = useState(false);
  const [showTimeoutSettings, setShowTimeoutSettings] = useState(false);
  const openMsg = useMemo(() => (openMsgId ? messages.find(m => m.id === openMsgId) : null), [openMsgId, messages]);

  // 🆕 v22-CV/CW: 进入页面时尝试申请浏览器通知权限
  useEffect(() => {
    try {
      if (typeof Notification !== 'undefined' && Notification.permission === 'default') {
        Notification.requestPermission();
      }
    } catch (e) {}
  }, []);

  // 🆕 fix15: 时间范围 (start ≤ created_at_ms < end)
  const dateRange = useMemo(() => getDateRange(dateFilter), [dateFilter]);

  // 🆕 v22-CV/CW: canSee — 收件箱可以看到 to_system=cs 或自己是 watcher 的工单
  const canSee = (m) => {
    if (m.to_system === MY_SYSTEM) return true;
    if (Array.isArray(m.watchers) && m.watchers.includes(user.id)) return true;
    return false;
  };

  // 🆕 v22-CV/CW: 4 个 tab — inbox / assigned-to-me / overdue / sent
  const tabFiltered = useMemo(() => {
    if (tab === 'inbox') return messages.filter(canSee);
    if (tab === 'assigned-to-me') return messages.filter(m => m.assigned_to_id === user.id);
    if (tab === 'overdue') return messages.filter(m => canSee(m) && isOverdue(m, cdmTimeoutConfig));
    // sent
    return messages.filter(m => m.from_user_id === user.id && m.from_system === MY_SYSTEM);
  }, [messages, tab, user.id, cdmTimeoutConfig]);

  const filtered = useMemo(() => {
    let arr = tabFiltered;
    // 🆕 fix15: 用 start/end 范围筛选 (支持本周/上周/本月/任意月份/任意月份的第N周)
    if (dateRange.start > 0 || dateRange.end < Infinity) {
      arr = arr.filter(m => {
        const t = m.created_at_ms || 0;
        return t >= dateRange.start && t < dateRange.end;
      });
    }
    if (filterStatus !== 'all')   arr = arr.filter(m => m.status === filterStatus);
    if (filterCategory !== 'all') arr = arr.filter(m => m.category === filterCategory);
    if (filterPriority !== 'all') arr = arr.filter(m => m.priority === filterPriority);
    if (tab === 'inbox' && filterFrom !== 'all') arr = arr.filter(m => m.from_system === filterFrom);
    if (search.trim()) {
      const kws = search.toLowerCase().split(/\s+/).filter(Boolean);
      arr = arr.filter(m => {
        const hay = [
          m.title, m.body, m.from_user_name, m.to_user_name, m.related_ref, m.category, m.priority, m.related_shop, m.assigned_to_name,
          ...(m.thread || []).map(t => t.content),
        ].filter(Boolean).join(' ').toLowerCase();
        return kws.every(kw => hay.includes(kw));
      });
    }
    // 🆕 v22-CV/CW: 排序 — 超时 > 紧急 > 时间
    arr = [...arr].sort((a, b) => {
      const aOverdue = isOverdue(a, cdmTimeoutConfig) ? 1 : 0;
      const bOverdue = isOverdue(b, cdmTimeoutConfig) ? 1 : 0;
      if (aOverdue !== bOverdue) return bOverdue - aOverdue;
      const pri = { urgent:4, high:3, normal:2, low:1 };
      const aP = pri[a.priority] || 0;
      const bP = pri[b.priority] || 0;
      if (aP !== bP) return bP - aP;
      return (b.created_at_ms || 0) - (a.created_at_ms || 0);
    });
    return arr;
  }, [tabFiltered, dateRange, filterStatus, filterCategory, filterPriority, filterFrom, search, tab, cdmTimeoutConfig]);

  // 🆕 v22-CV/CW: 统计 — 收件箱基础 + overdue + assigned-to-me
  const stats = useMemo(() => {
    const inbox = messages.filter(canSee);
    return {
      total:    inbox.length,
      unread:   inbox.filter(m => !(m.read_by || []).includes(user.id) && m.from_user_id !== user.id).length,
      pending:  inbox.filter(m => m.status === 'pending').length,
      urgent:   inbox.filter(m => m.priority === 'urgent' && m.status !== 'done' && m.status !== 'cancelled').length,
      overdue:  inbox.filter(m => isOverdue(m, cdmTimeoutConfig)).length,
      assignedToMe: messages.filter(m => m.assigned_to_id === user.id && m.status !== 'done' && m.status !== 'cancelled').length,
    };
  }, [messages, user.id, cdmTimeoutConfig]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const pageItems = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  // 切换 tab / filter 时重置页码
  useEffect(() => { setPage(1); }, [tab, dateFilter, filterStatus, filterCategory, filterPriority, filterFrom, search, pageSize]);

  // 🆕 fix15: 旧的 timeChips 已被 <AdvancedDateFilter> 取代

  return (
    <div className="space-y-4 fade-in">
      {/* 头部 */}
      <div className="paper rounded-2xl p-4">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:10}}>
          <div>
            <div className="font-display" style={{fontSize:17, fontWeight:600}}>📨 跨部门协作</div>
            <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>
              和 🎨 美工 / 📋 跟单 实时互通 · 消息总线 · 支持图片附件
            </div>
          </div>
          <div style={{display:'flex', gap:6, flexWrap:'wrap'}}>
            {/* 🆕 v22-CW Round 3b: 主管/admin 入口 */}
            {isAdmin && (
              <>
                <button onClick={() => setShowShopOwners(true)} className="btn-sec" style={{padding:'6px 12px', fontSize:12}} title="维护店铺-负责人映射(三方共享)">
                  🌐 店铺负责人 ({shopOwners.filter(s => s.system === MY_SYSTEM).length})
                </button>
                <button onClick={() => setShowTimeoutSettings(true)} className="btn-sec" style={{padding:'6px 12px', fontSize:12}} title="自定义客服部各分类的超时阈值">
                  ⏰ 超时阈值
                </button>
              </>
            )}
            <button onClick={onReload} disabled={loading} className="btn-sec" style={{padding:'6px 12px', fontSize:12}}>
              {loading ? '⏳' : '🔄'} 刷新
            </button>
            <button onClick={() => setShowNew(true)} style={{padding:'6px 16px', background:'#0071e3', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontSize:13, fontWeight:600, fontFamily:'inherit'}}>
              + 新建消息
            </button>
          </div>
        </div>
      </div>

      {/* 🆕 v22-CV/CW: 持续提醒横幅 — 防止群消息把工单刷下去 */}
      {(stats.urgent > 0 || stats.overdue > 0 || (isAdmin && stats.pending > 0)) && (
        <div style={{
          background:'linear-gradient(90deg, #fef2f2 0%, #fff7ed 100%)',
          border:'2px solid #fca5a5', borderRadius:14, padding:'10px 14px',
          display:'flex', alignItems:'center', gap:12, flexWrap:'wrap',
        }}>
          <div style={{width:38, height:38, borderRadius:9, background:'#dc2626', color:'white', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontSize:18, animation:'pulse 2s ease-in-out infinite'}}>🚨</div>
          <div style={{flex:1, minWidth:200, fontSize:12, color:'#7f1d1d', lineHeight:1.5}}>
            <div style={{fontWeight:700, fontSize:13}}>⚠️ 还有工单需要处理 · 别让消息被群里刷下去</div>
            <div style={{marginTop:2}}>
              {stats.urgent > 0 && <span style={{marginRight:12}}>🚨 紧急 <strong style={{color:'#b91c1c'}}>{stats.urgent}</strong> 条</span>}
              {stats.overdue > 0 && <span style={{marginRight:12}}>⏰ 超时 <strong style={{color:'#b91c1c'}}>{stats.overdue}</strong> 条</span>}
              {isAdmin && stats.pending > 0 && <span>⏳ 待处理 <strong>{stats.pending}</strong> 条</span>}
            </div>
          </div>
          {stats.overdue > 0 && (
            <button onClick={() => setTab('overdue')}
              style={{padding:'7px 14px', background:'#dc2626', color:'white', border:'none', borderRadius:7, cursor:'pointer', fontSize:12, fontWeight:700, fontFamily:'inherit', flexShrink:0}}>
              查看超时
            </button>
          )}
        </div>
      )}

      {/* 统计卡片 — 5 张 */}
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(140px, 1fr))', gap:10}}>
        <div className="paper rounded-2xl p-3" style={{borderLeft:'4px solid #0071e3'}}>
          <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600}}>📥 收件总数</div>
          <div style={{fontSize:26, fontWeight:700, color:'#0071e3', marginTop:2}}>{stats.total}</div>
        </div>
        <div className="paper rounded-2xl p-3" style={{borderLeft:'4px solid #dc2626'}}>
          <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600}}>🔵 未读</div>
          <div style={{fontSize:26, fontWeight:700, color: stats.unread > 0 ? '#dc2626' : 'var(--ink-3)', marginTop:2}}>{stats.unread}</div>
        </div>
        <div className="paper rounded-2xl p-3" style={{borderLeft:'4px solid #d97706'}}>
          <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600}}>⏳ 待处理</div>
          <div style={{fontSize:26, fontWeight:700, color:'#d97706', marginTop:2}}>{stats.pending}</div>
        </div>
        <div className="paper rounded-2xl p-3" style={{borderLeft:'4px solid ' + (stats.urgent > 0 ? '#dc2626' : '#86868b')}}>
          <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:600}}>🚨 紧急未完成</div>
          <div style={{fontSize:26, fontWeight:700, color: stats.urgent > 0 ? '#dc2626' : 'var(--ink-3)', marginTop:2}}>{stats.urgent}</div>
        </div>
        {/* 🆕 v22-CV/CW: 超时 卡片 (点击直接跳 overdue tab) */}
        <div onClick={() => stats.overdue > 0 && setTab('overdue')}
          className="paper rounded-2xl p-3"
          style={{
            borderLeft:'4px solid ' + (stats.overdue > 0 ? '#dc2626' : '#86868b'),
            cursor: stats.overdue > 0 ? 'pointer' : 'default',
            background: stats.overdue > 0 ? 'linear-gradient(180deg, #fef2f2 0%, white 100%)' : 'white',
            animation: stats.overdue > 0 ? 'pulse 2s ease-in-out infinite' : 'none',
            transition:'transform .12s',
          }}
          onMouseEnter={e => { if (stats.overdue > 0) e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}>
          <div style={{fontSize:11, color: stats.overdue > 0 ? '#b91c1c' : 'var(--ink-3)', fontWeight:700}}>⏰ 超时</div>
          <div style={{fontSize:26, fontWeight:700, color: stats.overdue > 0 ? '#b91c1c' : 'var(--ink-3)', marginTop:2}}>{stats.overdue}</div>
        </div>
      </div>

      {/* Tab + 筛选区 */}
      <div className="paper rounded-2xl p-4">
        {/* 🆕 v22-CV/CW: 4 tab — inbox / assigned-to-me / overdue / sent */}
        <div style={{display:'flex', gap:6, marginBottom:10, flexWrap:'wrap'}}>
          {[
            { key:'inbox',           label:'📥 收件箱',     count: messages.filter(canSee).length },
            { key:'assigned-to-me',  label:'📌 分派给我',   count: stats.assignedToMe, highlight: stats.assignedToMe > 0 },
            { key:'overdue',         label:'⏰ 超时',       count: stats.overdue, highlight: stats.overdue > 0, danger: true },
            { key:'sent',            label:'📤 我发起的',   count: messages.filter(m => m.from_user_id === user.id && m.from_system === MY_SYSTEM).length },
          ].map(t => {
            const active = tab === t.key;
            const bgColor = active ? (t.danger ? '#dc2626' : '#0071e3') : 'white';
            const borderColor = active ? (t.danger ? '#dc2626' : '#0071e3') : (t.highlight ? (t.danger ? '#fca5a5' : '#fbbf24') : 'var(--line)');
            return (
              <button key={t.key} onClick={() => setTab(t.key)}
                style={{padding:'7px 14px', borderRadius:8, border:'1px solid ' + borderColor, background: bgColor, color: active ? 'white' : (t.highlight ? (t.danger ? '#b91c1c' : '#92400e') : 'var(--ink-2)'), cursor:'pointer', fontSize:13, fontWeight: active ? 600 : (t.highlight ? 600 : 500), fontFamily:'inherit', animation: (!active && t.danger && t.highlight) ? 'pulse 2.4s ease-in-out infinite' : 'none'}}>
                {t.label}{' '}
                <span style={{padding:'1px 6px', background: active ? 'rgba(255,255,255,.25)' : (t.highlight ? (t.danger ? '#fee2e2' : '#fef3c7') : '#f5f5f7'), color: active ? 'white' : (t.highlight ? (t.danger ? '#b91c1c' : '#92400e') : 'var(--ink-3)'), borderRadius:8, marginLeft:2, fontSize:10, fontWeight:700}}>{t.count}</span>
              </button>
            );
          })}
        </div>

        {/* 🆕 fix15: 时间筛选 — 升级为 AdvancedDateFilter (本周/上周/本月/任意月份/任意月份的第N周) */}
        <div style={{display:'flex', flexWrap:'wrap', gap:6, marginBottom:10, alignItems:'center'}}>
          <span style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, marginRight:4}}>⏱ 时间:</span>
          <AdvancedDateFilter value={dateFilter} onChange={setDateFilter} size="sm" />
        </div>

        {/* 下拉筛选 + 搜索 */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(140px, 1fr))', gap:6, marginBottom:8}}>
          <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)}
            style={{padding:'6px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, background:'white', fontFamily:'inherit'}}>
            <option value="all">全部状态</option>
            {CDM_STATUSES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
          <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)}
            style={{padding:'6px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, background:'white', fontFamily:'inherit'}}>
            <option value="all">全部分类</option>
            {CDM_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
          </select>
          <select value={filterPriority} onChange={e => setFilterPriority(e.target.value)}
            style={{padding:'6px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, background:'white', fontFamily:'inherit'}}>
            <option value="all">全部优先级</option>
            {CDM_PRIORITIES.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
          </select>
          {tab === 'inbox' && (
            <select value={filterFrom} onChange={e => setFilterFrom(e.target.value)}
              style={{padding:'6px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, background:'white', fontFamily:'inherit'}}>
              <option value="all">全部来源</option>
              {CDM_SYSTEMS.filter(s => s.id !== 'cs').map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
            </select>
          )}
        </div>
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="🔍 搜索 标题 / 描述 / 关联号 / 对话内容(多个关键词空格分开)"
          style={{width:'100%', padding:'7px 12px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, fontFamily:'inherit', background:'white'}} />
      </div>

      {/* 分页器 上 */}
      {totalPages > 1 && (
        <CdmPager page={safePage} total={totalPages} count={filtered.length} pageSize={pageSize} setPageSize={setPageSize} onChange={setPage} />
      )}

      {/* 列表 */}
      {loading && messages.length === 0 ? (
        <div className="paper rounded-2xl p-10" style={{textAlign:'center', color:'var(--ink-3)'}}>⏳ 加载中...</div>
      ) : pageItems.length === 0 ? (
        <div className="paper rounded-2xl p-12" style={{textAlign:'center', color:'var(--ink-3)'}}>
          🎉 {tab === 'inbox' ? '收件箱' : '发件箱'}暂无消息{(dateFilter?.kind!=='all' || search.trim() || filterStatus!=='all' || filterCategory!=='all' || filterPriority!=='all' || filterFrom!=='all') ? '(当前筛选下)' : ''}
        </div>
      ) : (
        <div className="space-y-2">
          {pageItems.map(m => (
            <CdmMessageCard key={m.id} msg={m} user={user} tab={tab}
              cdmTimeoutConfig={cdmTimeoutConfig}
              onOpen={() => setOpenMsgId(m.id)} />
          ))}
        </div>
      )}

      {/* 分页器 下 */}
      {totalPages > 1 && (
        <CdmPager page={safePage} total={totalPages} count={filtered.length} pageSize={pageSize} setPageSize={setPageSize} onChange={setPage} />
      )}

      {/* 新建消息 modal */}
      {showNew && (
        <CdmNewMessageModal user={user} employees={employees}
          shopOwners={shopOwners}
          onClose={() => setShowNew(false)}
          onSent={() => { setShowNew(false); onReload(); toast('✓ 已发送'); }}
          toast={toast} />
      )}

      {/* 详情 modal */}
      {openMsg && (
        <CdmDetailModal msg={openMsg} user={user} employees={employees}
          shopOwners={shopOwners} cdmTimeoutConfig={cdmTimeoutConfig}
          onClose={() => setOpenMsgId(null)}
          onChanged={onReload}
          toast={toast} />
      )}

      {/* 🆕 v22-CW Round 3b: 主管管理面板 */}
      {showShopOwners && (
        <ShopOwnersManager user={user} employees={employees} shopOwners={shopOwners}
          onClose={() => setShowShopOwners(false)} toast={toast} />
      )}
      {showTimeoutSettings && (
        <TimeoutSettingsModal user={user} cdmTimeoutConfig={cdmTimeoutConfig}
          onClose={() => setShowTimeoutSettings(false)} toast={toast} />
      )}
    </div>
  );
};

// 简单分页器 — 🆕 v22-CV/CW: 支持 20/50/100 每页切换
const CdmPager = ({ page, total, count, pageSize, setPageSize, onChange }) => (
  <div className="paper rounded-2xl" style={{padding:'8px 12px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:8, flexWrap:'wrap'}}>
    <div style={{display:'flex', alignItems:'center', gap:10, fontSize:11, color:'var(--ink-3)', flexWrap:'wrap'}}>
      <span>共 {count} 条 · 第 {page} / {total} 页</span>
      {setPageSize && (
        <div style={{display:'flex', alignItems:'center', gap:4}}>
          <span style={{color:'var(--ink-4)'}}>每页:</span>
          {[20, 50, 100].map(n => (
            <button key={n} onClick={() => setPageSize(n)}
              style={{padding:'2px 8px', fontSize:11, borderRadius:5, border:'1px solid ' + (pageSize === n ? '#0071e3' : 'var(--line)'), background: pageSize === n ? '#0071e3' : 'white', color: pageSize === n ? 'white' : 'var(--ink-2)', cursor:'pointer', fontFamily:'inherit', fontWeight: pageSize === n ? 600 : 500}}>
              {n}
            </button>
          ))}
        </div>
      )}
    </div>
    <div style={{display:'flex', gap:4}}>
      <button onClick={() => onChange(1)} disabled={page === 1} className="btn-ghost" style={{padding:'3px 10px', fontSize:12, opacity: page===1?0.4:1}}>«</button>
      <button onClick={() => onChange(Math.max(1, page - 1))} disabled={page === 1} className="btn-ghost" style={{padding:'3px 10px', fontSize:12, opacity: page===1?0.4:1}}>‹</button>
      <button onClick={() => onChange(Math.min(total, page + 1))} disabled={page === total} className="btn-ghost" style={{padding:'3px 10px', fontSize:12, opacity: page===total?0.4:1}}>›</button>
      <button onClick={() => onChange(total)} disabled={page === total} className="btn-ghost" style={{padding:'3px 10px', fontSize:12, opacity: page===total?0.4:1}}>»</button>
    </div>
  </div>
);

// 消息卡片
// 🆕 v22-CV/CW: 显示 超时角标 / 关联网站 / 分派给 / watcher 数 / 截止剩余天数
const CdmMessageCard = ({ msg, user, tab, onOpen, cdmTimeoutConfig }) => {
  const cat = getCategoryDef(msg.category);  // 用 getCategoryDef 而非 findCdm — 旧分类(website_fix 等)自动映射到新分类
  const pri = findCdm(CDM_PRIORITIES, msg.priority);
  const st  = findCdm(CDM_STATUSES, msg.status);
  const peerSystem = tab === 'inbox' ? msg.from_system : msg.to_system;
  const peer = findCdm(CDM_SYSTEMS, peerSystem);
  const peerName = tab === 'inbox' ? (msg.from_user_name || '?') : (msg.to_user_name || '整个部门');
  const isUnread = tab === 'inbox' && !(msg.read_by || []).includes(user.id) && msg.from_user_id !== user.id;
  const threadCount = (msg.thread || []).length;
  const attCount = (msg.attachments || []).length + (msg.thread || []).reduce((s, t) => s + (t.attachments || []).length, 0);
  const dateStr = msg.created_at_ms ? new Date(msg.created_at_ms).toLocaleString('zh-CN', { month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit' }) : '';
  // 🆕 超时判定
  const overdue = isOverdue(msg, cdmTimeoutConfig);
  const dueAt = getDueAt(msg, cdmTimeoutConfig);
  const dueDays = Math.round((dueAt - Date.now()) / 86400000);
  const watcherCount = Array.isArray(msg.watchers) ? msg.watchers.length : 0;
  
  return (
    <div onClick={onOpen}
      style={{
        padding:'12px 14px',
        background: overdue ? '#fef2f2' : 'white',
        border: '1.5px solid ' + (overdue ? '#fca5a5' : (isUnread ? '#0071e3' : 'var(--line)')),
        borderRadius:12, cursor:'pointer',
        position:'relative', transition:'all .12s',
      }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = overdue ? '0 2px 12px rgba(220,38,38,.18)' : '0 2px 12px rgba(0,113,227,.15)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}>
      {isUnread && (
        <span style={{position:'absolute', top:14, left:-5, width:10, height:10, background:'#0071e3', borderRadius:5, boxShadow:'0 0 0 3px white'}} />
      )}
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:8, flexWrap:'wrap', marginBottom:6}}>
        <div style={{display:'flex', gap:4, alignItems:'center', flexWrap:'wrap'}}>
          {overdue && <span style={{padding:'2px 8px', background:'#dc2626', color:'white', borderRadius:10, fontSize:10, fontWeight:700, animation:'pulse 1.8s ease-in-out infinite'}}>⏰ 超时</span>}
          <span style={{padding:'2px 8px', background: cat.bg, color: cat.color, borderRadius:10, fontSize:10, fontWeight:600}}>{cat.label}</span>
          <span style={{padding:'2px 8px', background: pri.bg, color: pri.color, borderRadius:10, fontSize:10, fontWeight:600}}>{pri.label}</span>
          <span style={{padding:'2px 8px', background: st.bg, color: st.color, borderRadius:10, fontSize:10, fontWeight:600}}>{st.label}</span>
          {msg.related_shop && <span style={{padding:'2px 8px', background:'#d1fae5', color:'#065f46', borderRadius:10, fontSize:10, fontWeight:600}}>🌐 {msg.related_shop}</span>}
          {msg.assigned_to_name && <span style={{padding:'2px 8px', background:'#dbeafe', color:'#1e40af', borderRadius:10, fontSize:10, fontWeight:600}}>📌 {msg.assigned_to_name}</span>}
        </div>
        <div style={{fontSize:11, color:'var(--ink-3)', display:'flex', gap:4, alignItems:'center'}}>
          <span>{tab === 'inbox' ? '来自' : '发给'}</span>
          <span style={{padding:'1px 7px', background:'#f5f5f7', borderRadius:8, fontWeight:600, color:'var(--ink)'}}>{peer.label}</span>
          <span style={{color:'var(--ink-2)'}}>· {peerName}</span>
        </div>
      </div>
      <div style={{fontSize:14, fontWeight: isUnread ? 700 : 600, color:'var(--ink)', marginBottom:3, lineHeight:1.4}}>
        {msg.title}
      </div>
      {msg.body && (
        <div style={{fontSize:12, color:'var(--ink-3)', lineHeight:1.4, marginBottom:6, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden'}}>
          {msg.body}
        </div>
      )}
      <div style={{display:'flex', gap:10, fontSize:10, color:'var(--ink-4)', flexWrap:'wrap', alignItems:'center'}}>
        <span>🕐 {dateStr}</span>
        {/* 🆕 截止时间 */}
        {!overdue && msg.status !== 'done' && msg.status !== 'cancelled' && (
          <span style={{color: dueDays <= 1 ? '#b45309' : 'var(--ink-4)', fontWeight: dueDays <= 1 ? 700 : 400}}>
            · {dueDays <= 0 ? '今日截止' : `还剩 ${dueDays} 天`}
          </span>
        )}
        {overdue && <span style={{color:'#b91c1c', fontWeight:700}}>· 已逾期 {Math.abs(dueDays)} 天</span>}
        {msg.related_ref && <span>🔗 {msg.related_ref}</span>}
        {threadCount > 0 && <span>💬 {threadCount} 回复</span>}
        {attCount > 0 && <span>📎 {attCount} 附件</span>}
        {watcherCount > 0 && <span>👁 {watcherCount} 关注</span>}
      </div>
    </div>
  );
};

// 新建消息 modal
const CdmNewMessageModal = ({ user, employees, shopOwners = [], onClose, onSent, toast }) => {
  const [toSystem, setToSystem] = useState('design');
  const [toUserId, setToUserId] = useState('');  // 🆕 v22-CW
  const [toUserName, setToUserName] = useState('');
  const [relatedShop, setRelatedShop] = useState('');  // 🆕 v22-CW
  const [customShop, setCustomShop] = useState('');  // 🆕 v22-CY: 选"其他"时手填
  const [watchers, setWatchers] = useState([]);  // 🆕 v22-CW
  const [category, setCategory] = useState('general');
  const [priority, setPriority] = useState('normal');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [relatedType, setRelatedType] = useState('order');
  const [relatedRef, setRelatedRef] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [sending, setSending] = useState(false);
  const fileInputRef = useRef(null);

  // 🆕 v22-CY: 可选网站列表直接用预设(不再从 shopOwners 提取 — 避免拼写不一致)
  const availableShops = SHOPS_SELECTABLE;

  // 🆕 v22-CW: 选了网站 + 目标部门 → 自动建议负责人
  // 🆕 v22-CY: "__other__" 不触发自动建议
  // 🆕 fix23: 客服系统更完整 fallback — primary → night → escalation → backup → manager → 第一个
  useEffect(() => {
    if (!relatedShop || relatedShop === '__other__' || !toSystem) return;
    const candidates = (shopOwners || []).filter(s => s.shopName === relatedShop && s.system === toSystem);
    // 按业务优先级 fallback (适用于客服派单 / 跟单分配等)
    const fallbackOrder = ['primary', 'night', 'escalation', 'backup', 'manager'];
    let chosen = null;
    for (const r of fallbackOrder) {
      chosen = candidates.find(c => c.role === r);
      if (chosen) break;
    }
    chosen = chosen || candidates[0];
    if (chosen && !toUserId) {
      setToUserId(chosen.userId);
      setToUserName(chosen.userName);
    }
  }, [relatedShop, toSystem, shopOwners]);

  // 🆕 v22-CW: 网站候选负责人列表 (供 UI 显示给用户选)
  const shopCandidates = useMemo(() => {
    if (!relatedShop || relatedShop === '__other__' || !toSystem) return [];
    return (shopOwners || []).filter(s => s.shopName === relatedShop && s.system === toSystem);
  }, [relatedShop, toSystem, shopOwners]);

  // 🆕 v22-CW: watcher 候选列表 (目标部门里所有店铺负责人,去掉接收人本人)
  const watcherCandidates = useMemo(() => {
    const seen = new Set();
    return (shopOwners || [])
      .filter(s => s.system === toSystem && s.userId !== toUserId)
      .filter(s => { if (seen.has(s.userId)) return false; seen.add(s.userId); return true; });
  }, [shopOwners, toSystem, toUserId]);
  const toggleWatcher = (uid) => {
    setWatchers(prev => prev.includes(uid) ? prev.filter(x => x !== uid) : [...prev, uid]);
  };

  const readFiles = async (files) => {
    const arr = [];
    for (const f of files) {
      if (f.size > 5 * 1024 * 1024) { alert(`文件 "${f.name}" 超过 5MB`); continue; }
      const dataUrl = await new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(r.result);
        r.onerror = rej;
        r.readAsDataURL(f);
      });
      arr.push({ name: f.name, mime: f.type, dataUrl, size: f.size });
    }
    if (arr.length) setAttachments(prev => [...prev, ...arr]);
  };

  // 监听粘贴(截图)
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
  }, []);

  const onDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files || []);
    if (files.length) readFiles(files);
  };
  const onDragOver = (e) => e.preventDefault();

  const send = async () => {
    if (!title.trim()) { alert('请填写标题'); return; }
    const client = getCdmClient();
    if (!client) { alert('消息总线未连接,无法发送'); return; }
    // 🆕 v22-CY: 解析 "__other__" → customShop
    let finalShop = relatedShop || null;
    if (finalShop === '__other__') {
      finalShop = customShop.trim() || null;
    }
    setSending(true);
    const userName = user.name + (user.alias ? ' ' + user.alias : '');
    const msg = {
      from_system: MY_SYSTEM,
      from_user_id: user.id,
      from_user_name: userName,
      to_system: toSystem,
      to_user_id: toUserId || null,         // 🆕 v22-CW
      to_user_name: toUserName.trim() || null,
      related_shop: finalShop,              // 🆕 v22-CW/CY
      watchers: watchers.length ? watchers : null,  // 🆕 v22-CW
      category, priority,
      title: title.trim(),
      body: body.trim() || null,
      attachments,
      related_type: relatedType,
      related_ref: relatedRef.trim() || null,
      status: 'pending',
      thread: [],
      read_by: [user.id],
      created_at_ms: Date.now(),
      updated_at: new Date().toISOString(),
    };
    try {
      const { error } = await client.from('cross_dept_messages').insert(msg);
      if (error) throw error;
      onSent();
    } catch (e) { alert('发送失败: ' + (e.message || e)); }
    setSending(false);
  };

  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:100000, display:'flex', alignItems:'flex-start', justifyContent:'center', overflow:'auto', padding:'40px 20px'}}>
      <div onClick={e => e.stopPropagation()} onDrop={onDrop} onDragOver={onDragOver}
        style={{background:'white', borderRadius:14, width:'100%', maxWidth:680, boxShadow:'0 20px 60px rgba(0,0,0,.25)'}}>
        <div style={{padding:'16px 20px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div className="font-display" style={{fontSize:16, fontWeight:600}}>📨 新建跨部门消息</div>
          <button onClick={onClose} style={{background:'transparent', border:'none', cursor:'pointer', fontSize:18, color:'var(--ink-3)'}}>×</button>
        </div>
        <div style={{padding:'18px 20px', display:'flex', flexDirection:'column', gap:12}}>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>发给哪个部门 *</label>
              <select value={toSystem} onChange={e => { setToSystem(e.target.value); setToUserId(''); setToUserName(''); setWatchers([]); }}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, background:'white', fontFamily:'inherit'}}>
                {CDM_SYSTEMS.filter(s => s.id !== 'cs').map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>指定接收人 (选填)</label>
              <input value={toUserName} onChange={e => { setToUserName(e.target.value); setToUserId(''); }}
                placeholder="留空 = 整个部门可见"
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'inherit'}} />
            </div>
          </div>
          {/* 🆕 v22-CW + v22-CY: 关联网站(预设下拉) + 自动建议负责人 */}
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>
                🌐 关联网站 <span style={{color:'var(--ink-4)', fontWeight:400}}>· 选后自动派负责人</span>
              </label>
              <select value={relatedShop} onChange={e => {
                setRelatedShop(e.target.value);
                setToUserId('');
                setToUserName('');
                if (e.target.value !== '__other__') setCustomShop('');
              }}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, background:'white', fontFamily:'inherit'}}>
                <option value="">— 不关联(通用工单)—</option>
                <optgroup label="📦 独立站">
                  {SHOPS_SELECTABLE.filter(s => s.category === '独立站').map(s => (
                    <option key={s.id} value={s.label}>{s.label}</option>
                  ))}
                </optgroup>
                <optgroup label="🛒 平台">
                  {SHOPS_SELECTABLE.filter(s => s.category === '平台').map(s => (
                    <option key={s.id} value={s.label}>{s.label}</option>
                  ))}
                </optgroup>
                <optgroup label="🏢 实体公司">
                  {SHOPS_SELECTABLE.filter(s => s.category === '实体公司').map(s => (
                    <option key={s.id} value={s.label}>{s.label}</option>
                  ))}
                </optgroup>
                <option value="__other__">📝 其他 (手填备注)</option>
              </select>
              {relatedShop === '__other__' && (
                <input type="text" value={customShop} onChange={e => setCustomShop(e.target.value)}
                  placeholder="输入网站名 · 仅作备注(不会自动派单)"
                  style={{marginTop:5, width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:12, fontFamily:'inherit'}} />
              )}
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>
                建议负责人 <span style={{color:'var(--ink-4)', fontWeight:400}}>· 点选切换</span>
              </label>
              {!relatedShop ? (
                <div style={{padding:'7px 10px', background:'#fafafa', border:'1px dashed var(--line)', borderRadius:7, fontSize:11, color:'var(--ink-4)'}}>
                  选网站后自动建议
                </div>
              ) : relatedShop === '__other__' ? (
                <div style={{padding:'7px 10px', background:'#fef3c7', border:'1px solid #fde047', borderRadius:7, fontSize:11, color:'#854d0e'}}>
                  📝 其他网站 · 不自动派单 · 请手动指定接收人
                </div>
              ) : shopCandidates.length === 0 ? (
                <div style={{padding:'7px 10px', background:'#fafafa', border:'1px dashed var(--line)', borderRadius:7, fontSize:11, color:'var(--ink-4)'}}>
                  对方部门尚未注册该网站负责人
                </div>
              ) : (
                <div style={{display:'flex', gap:4, flexWrap:'wrap'}}>
                  {shopCandidates.map(c => {
                    const isSel = toUserId === c.userId;
                    const roleEmoji = c.role === 'primary' ? '★' : c.role === 'manager' ? '👑' : c.role === 'designer' ? '🎨' : '·';
                    return (
                      <button key={c.id} type="button"
                        onClick={() => { setToUserId(c.userId); setToUserName(c.userName); }}
                        style={{padding:'5px 9px', background: isSel ? '#0071e3' : 'white', color: isSel ? 'white' : 'var(--ink-2)', border:'1px solid ' + (isSel ? '#0071e3' : 'var(--line)'), borderRadius:6, cursor:'pointer', fontSize:11, fontFamily:'inherit', fontWeight: isSel ? 600 : 500}}
                        title={`${c.role}${c.notes ? ' · ' + c.notes : ''}`}>
                        {roleEmoji} {c.userName}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          {/* 🆕 v22-CW: watcher 多选 — 额外通知谁,会出现在他们的收件箱 */}
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>
              👁 额外通知 <span style={{color:'var(--ink-4)', fontWeight:400}}>· 这些人在收件箱也能看到此工单(可不选)</span>
            </label>
            {watcherCandidates.length === 0 ? (
              <div style={{padding:'7px 10px', background:'#fafafa', border:'1px dashed var(--line)', borderRadius:7, fontSize:11, color:'var(--ink-4)'}}>
                对方部门未注册其他店铺负责人
              </div>
            ) : (
              <div style={{display:'flex', gap:4, flexWrap:'wrap'}}>
                {watcherCandidates.map(c => {
                  const isSel = watchers.includes(c.userId);
                  return (
                    <button key={c.userId} type="button" onClick={() => toggleWatcher(c.userId)}
                      style={{padding:'5px 9px', background: isSel ? '#7c3aed' : 'white', color: isSel ? 'white' : 'var(--ink-2)', border:'1px solid ' + (isSel ? '#7c3aed' : 'var(--line)'), borderRadius:6, cursor:'pointer', fontSize:11, fontFamily:'inherit', fontWeight: isSel ? 600 : 500}}>
                      {isSel ? '✓' : '+'} {c.userName}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>分类 *</label>
              <select value={category} onChange={e => setCategory(e.target.value)}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, background:'white', fontFamily:'inherit'}}>
                {CDM_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
              </select>
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>优先级 *</label>
              <select value={priority} onChange={e => setPriority(e.target.value)}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, background:'white', fontFamily:'inherit'}}>
                {CDM_PRIORITIES.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>标题 *</label>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="一句话说清楚要解决什么"
              style={{width:'100%', padding:'8px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:14, fontFamily:'inherit'}} />
          </div>
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>详细描述</label>
            <textarea value={body} onChange={e => setBody(e.target.value)} rows={4} placeholder="详细说明,可以贴对话截图(Ctrl+V) / 拖拽文件到这里"
              style={{width:'100%', padding:'8px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'inherit', resize:'vertical'}} />
          </div>
          <div style={{display:'grid', gridTemplateColumns:'140px 1fr', gap:10}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>关联类型</label>
              <select value={relatedType} onChange={e => setRelatedType(e.target.value)}
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, background:'white', fontFamily:'inherit'}}>
                {CDM_RELATED_TYPES.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
              </select>
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>关联号 / SKU / URL</label>
              <input value={relatedRef} onChange={e => setRelatedRef(e.target.value)} placeholder="如 VK-001234 / SKU-A12 / https://..."
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'inherit'}} />
            </div>
          </div>
          {/* 附件 */}
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'flex', justifyContent:'space-between', marginBottom:4}}>
              <span>附件 ({attachments.length})</span>
              <span style={{color:'var(--ink-4)', fontWeight:400}}>支持截图粘贴 / 拖拽 / 点击上传 · 单文件 ≤5MB</span>
            </label>
            <input ref={fileInputRef} type="file" multiple style={{display:'none'}}
              onChange={e => readFiles(Array.from(e.target.files || []))} />
            <button onClick={() => fileInputRef.current?.click()} type="button"
              style={{padding:'8px 14px', background:'white', border:'1px dashed var(--line)', borderRadius:8, cursor:'pointer', fontSize:12, color:'var(--ink-2)', width:'100%', fontFamily:'inherit'}}>
              📎 点击选择文件 / 直接 Ctrl+V 粘贴截图
            </button>
            {attachments.length > 0 && (
              <div style={{display:'flex', flexWrap:'wrap', gap:6, marginTop:8}}>
                {attachments.map((a, i) => (
                  <div key={i} style={{padding:'4px 8px 4px 4px', background:'#f5f5f7', borderRadius:8, display:'flex', alignItems:'center', gap:6, fontSize:11}}>
                    {a.mime?.startsWith('image/') ? (
                      <img src={a.dataUrl} alt={a.name} style={{width:28, height:28, objectFit:'cover', borderRadius:4}} />
                    ) : <span style={{fontSize:16}}>📄</span>}
                    <span style={{maxWidth:140, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{a.name}</span>
                    <button onClick={() => setAttachments(p => p.filter((_, j) => j !== i))} type="button"
                      style={{background:'transparent', border:'none', cursor:'pointer', color:'var(--ink-4)', padding:0, fontSize:14, lineHeight:1}}>×</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div style={{padding:'12px 20px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'flex-end', gap:8}}>
          <button onClick={onClose} disabled={sending} className="btn-sec" style={{padding:'7px 16px', fontSize:13}}>取消</button>
          <button onClick={send} disabled={sending || !title.trim()}
            style={{padding:'7px 20px', background: (sending || !title.trim()) ? '#9ca3af' : '#0071e3', color:'white', border:'none', borderRadius:8, cursor: (sending || !title.trim()) ? 'not-allowed' : 'pointer', fontSize:13, fontWeight:600, fontFamily:'inherit'}}>
            {sending ? '发送中...' : '📨 发送'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

// 详情 modal
// 🆕 v22-CW: 加 分派 / watcher 管理 / 完成时桌面通知
const CdmDetailModal = ({ msg, user, employees = [], shopOwners = [], cdmTimeoutConfig = {}, onClose, onChanged, toast }) => {
  const [replyText, setReplyText] = useState('');
  const [replyAttachments, setReplyAttachments] = useState([]);
  const [sending, setSending] = useState(false);
  const [imgPreview, setImgPreview] = useState(null);
  const [showAssign, setShowAssign] = useState(false);  // 🆕 v22-CW
  const fileInputRef = useRef(null);
  const cat = getCategoryDef(msg.category);  // 🆕 用 getCategoryDef 兼容老分类
  const pri = findCdm(CDM_PRIORITIES, msg.priority);
  const st  = findCdm(CDM_STATUSES, msg.status);
  const fromSys = findCdm(CDM_SYSTEMS, msg.from_system);
  const toSys = findCdm(CDM_SYSTEMS, msg.to_system);
  const isReceiver = msg.to_system === MY_SYSTEM;
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  // 🆕 v22-CW: 主管 + 接收方可分派
  const canAssign = isReceiver && isAdmin;
  // 🆕 v22-CW: 当前部门员工列表(用于分派 + 加 watcher)
  const myDeptUsers = useMemo(() => (employees || []).filter(e => !e.hideFromList), [employees]);
  // 🆕 超时判定
  const overdue = isOverdue(msg, cdmTimeoutConfig);
  const dueAt = getDueAt(msg, cdmTimeoutConfig);
  const dueDays = Math.round((dueAt - Date.now()) / 86400000);

  // 打开时标记已读
  useEffect(() => {
    (async () => {
      const client = getCdmClient();
      if (!client) return;
      const readBy = msg.read_by || [];
      if (!readBy.includes(user.id) && msg.from_user_id !== user.id) {
        try {
          const next = [...readBy, user.id];
          await client.from('cross_dept_messages').update({ read_by: next }).eq('id', msg.id);
          onChanged && onChanged();
        } catch (e) { console.warn('[CDM] 标记已读失败', e); }
      }
    })();
    // eslint-disable-next-line
  }, [msg.id]);

  const readFiles = async (files) => {
    const arr = [];
    for (const f of files) {
      if (f.size > 5 * 1024 * 1024) { alert(`文件 "${f.name}" 超过 5MB`); continue; }
      const dataUrl = await new Promise((res, rej) => {
        const r = new FileReader();
        r.onload = () => res(r.result);
        r.onerror = rej;
        r.readAsDataURL(f);
      });
      arr.push({ name: f.name, mime: f.type, dataUrl, size: f.size });
    }
    if (arr.length) setReplyAttachments(prev => [...prev, ...arr]);
  };

  // 🆕 v22-CY+ : 回复框支持 Ctrl+V 粘贴图片(截图工作流)
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
  }, []);

  // 🆕 v22-CY+ : 回复框支持拖拽
  const onReplyDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files || []);
    if (files.length) readFiles(files);
  };
  const onReplyDragOver = (e) => e.preventDefault();

  const reply = async () => {
    if (!replyText.trim() && replyAttachments.length === 0) return;
    const client = getCdmClient();
    if (!client) { alert('消息总线未连接'); return; }
    setSending(true);
    try {
      // 拉最新 thread 再 append(避免并发覆盖)
      const { data: latest, error: fetchErr } = await client.from('cross_dept_messages').select('thread').eq('id', msg.id).single();
      if (fetchErr) throw fetchErr;
      const userName = user.name + (user.alias ? ' ' + user.alias : '');
      const newThread = [...(latest?.thread || []), {
        user_id: user.id,
        user_name: userName,
        system: MY_SYSTEM,
        content: replyText.trim(),
        attachments: replyAttachments,
        ts: Date.now(),
      }];
      const { error } = await client.from('cross_dept_messages').update({
        thread: newThread,
        updated_at: new Date().toISOString(),
      }).eq('id', msg.id);
      if (error) throw error;
      setReplyText('');
      setReplyAttachments([]);
      toast('✓ 已回复');
      onChanged && onChanged();
    } catch (e) { alert('回复失败: ' + (e.message || e)); }
    setSending(false);
  };

  const setStatus = async (newStatus) => {
    const client = getCdmClient();
    if (!client) { alert('消息总线未连接'); return; }
    const userName = user.name + (user.alias ? ' ' + user.alias : '');
    const updates = { status: newStatus, updated_at: new Date().toISOString() };
    if (newStatus === 'done') {
      updates.completed_at_ms = Date.now();
      updates.completed_by_id = user.id;
      updates.completed_by_name = userName;
    } else {
      // 撤销完成 — 清空完成字段
      updates.completed_at_ms = null;
      updates.completed_by_id = null;
      updates.completed_by_name = null;
    }
    try {
      const { error } = await client.from('cross_dept_messages').update(updates).eq('id', msg.id);
      if (error) throw error;
      toast(`✓ 状态已更新为 ${findCdm(CDM_STATUSES, newStatus).label}`);
      // 🆕 v22-CW: 完成时 → 桌面通知(给当前操作者本人,确认完成动作)
      if (newStatus === 'done') {
        try {
          if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
            new Notification(`✅ 工单已完成: ${msg.title}`, {
              body: `由 ${userName} 完成`,
              tag: 'cdm-done-' + msg.id,
            });
          }
        } catch {}
      }
      onChanged && onChanged();
    } catch (e) { alert('更新失败: ' + (e.message || e)); }
  };

  // 🆕 v22-CW: 主管分派工单给手下
  const assignTo = async (userId, userName) => {
    const client = getCdmClient();
    if (!client) { alert('消息总线未连接'); return; }
    try {
      const myName = user.name + (user.alias ? ' ' + user.alias : '');
      await client.from('cross_dept_messages').update({
        assigned_to_id: userId,
        assigned_to_name: userName,
        assigned_by_id: user.id,
        assigned_by_name: myName,
        assigned_at_ms: Date.now(),
        status: msg.status === 'pending' ? 'in_progress' : msg.status,
        updated_at: new Date().toISOString(),
      }).eq('id', msg.id);
      // 加 thread 留痕
      const { data: latest } = await client.from('cross_dept_messages').select('thread').eq('id', msg.id).maybeSingle();
      const newThread = [...(latest?.thread || []), {
        user_id: user.id, user_name: myName, system: MY_SYSTEM,
        content: `📌 分派给「${userName}」处理`,
        ts: Date.now(),
      }];
      await client.from('cross_dept_messages').update({ thread: newThread }).eq('id', msg.id);
      toast(`✓ 已分派给 ${userName}`);
      setShowAssign(false);
      onChanged && onChanged();
    } catch (e) { alert('分派失败: ' + (e.message || e)); }
  };

  // 🆕 v22-CW: 切换 watcher (加/移除关注人)
  const toggleWatcher = async (uid, uname) => {
    const client = getCdmClient();
    if (!client) { alert('消息总线未连接'); return; }
    try {
      // 先拉最新避免并发覆盖
      const { data: latest } = await client.from('cross_dept_messages').select('watchers').eq('id', msg.id).maybeSingle();
      const current = (latest?.watchers || []);
      const isWatching = current.includes(uid);
      const next = isWatching ? current.filter(x => x !== uid) : [...current, uid];
      await client.from('cross_dept_messages').update({
        watchers: next.length ? next : null,
        updated_at: new Date().toISOString(),
      }).eq('id', msg.id);
      toast(isWatching ? `✓ 已移除 ${uname || ''} 关注` : `✓ 已添加 ${uname || ''} 为关注人`);
      onChanged && onChanged();
    } catch (e) { alert('更新失败: ' + (e.message || e)); }
  };

  const formatTs = (ts) => ts ? new Date(ts).toLocaleString('zh-CN', { month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit' }) : '';

  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:100000, display:'flex', alignItems:'flex-start', justifyContent:'center', overflow:'auto', padding:'30px 20px'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, width:'100%', maxWidth:760, boxShadow:'0 20px 60px rgba(0,0,0,.25)'}}>
        {/* 头部 */}
        <div style={{padding:'14px 20px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div style={{display:'flex', gap:6, alignItems:'center', flexWrap:'wrap'}}>
            <span style={{padding:'2px 8px', background: cat.bg, color: cat.color, borderRadius:10, fontSize:11, fontWeight:600}}>{cat.label}</span>
            <span style={{padding:'2px 8px', background: pri.bg, color: pri.color, borderRadius:10, fontSize:11, fontWeight:600}}>{pri.label}</span>
            <span style={{padding:'2px 8px', background: st.bg, color: st.color, borderRadius:10, fontSize:11, fontWeight:600}}>{st.label}</span>
          </div>
          <button onClick={onClose} style={{background:'transparent', border:'none', cursor:'pointer', fontSize:18, color:'var(--ink-3)'}}>×</button>
        </div>

        {/* 主信息 */}
        <div style={{padding:'18px 20px'}}>
          <div className="font-display" style={{fontSize:17, fontWeight:600, marginBottom:6, lineHeight:1.4}}>{msg.title}</div>
          <div style={{fontSize:12, color:'var(--ink-3)', display:'flex', flexWrap:'wrap', gap:10, alignItems:'center', marginBottom:10}}>
            <span><strong style={{color:'var(--ink)'}}>{fromSys.label}</strong> · {msg.from_user_name}</span>
            <span style={{color:'var(--ink-4)'}}>→</span>
            <span><strong style={{color:'var(--ink)'}}>{toSys.label}</strong>{msg.to_user_name ? ' · ' + msg.to_user_name : ' (整个部门)'}</span>
            <span style={{marginLeft:'auto', color:'var(--ink-4)'}}>{formatTs(msg.created_at_ms)}</span>
          </div>
          {/* 🆕 v22-CV/CW: 头部信息块 — 关联网站 / 已分派给 / 超时状态 */}
          {(msg.related_shop || msg.assigned_to_name || overdue || (msg.status !== 'done' && msg.status !== 'cancelled')) && (
            <div style={{display:'flex', flexWrap:'wrap', gap:8, marginBottom:10, alignItems:'center'}}>
              {msg.related_shop && (
                <div style={{padding:'4px 10px', background:'#d1fae5', color:'#065f46', borderRadius:7, fontSize:11, fontWeight:600}}>
                  🌐 关联网站: <strong>{msg.related_shop}</strong>
                </div>
              )}
              {msg.assigned_to_name && (
                <div style={{padding:'4px 10px', background:'#dbeafe', color:'#1e40af', borderRadius:7, fontSize:11, fontWeight:600}}>
                  📌 已分派给 <strong>{msg.assigned_to_name}</strong>
                  {msg.assigned_by_name && <span style={{fontWeight:400}}> · 由 {msg.assigned_by_name}</span>}
                  {msg.assigned_at_ms && <span style={{fontWeight:400}}> · {formatTs(msg.assigned_at_ms)}</span>}
                </div>
              )}
              {overdue && (
                <div style={{padding:'4px 10px', background:'#fee2e2', color:'#b91c1c', borderRadius:7, fontSize:11, fontWeight:700, animation:'pulse 2s ease-in-out infinite'}}>
                  ⏰ 已逾期 {Math.abs(dueDays)} 天
                </div>
              )}
              {!overdue && msg.status !== 'done' && msg.status !== 'cancelled' && (
                <div style={{padding:'4px 10px', background:'#f5f5f7', color:'var(--ink-3)', borderRadius:7, fontSize:11}}>
                  ⏳ {dueDays <= 0 ? '今日截止' : `还剩 ${dueDays} 天`}
                </div>
              )}
            </div>
          )}
          {msg.related_ref && (
            <div style={{fontSize:12, marginBottom:8, padding:'4px 10px', background:'#f5f5f7', borderRadius:6, display:'inline-block'}}>
              🔗 {findCdm(CDM_RELATED_TYPES, msg.related_type)?.label || '关联'}: <strong>{msg.related_ref}</strong>
            </div>
          )}
          {msg.body && (
            <div style={{padding:'10px 12px', background:'#fafaf7', borderRadius:8, fontSize:13, lineHeight:1.55, whiteSpace:'pre-wrap', marginBottom:10}}>
              {msg.body}
            </div>
          )}
          {/* 附件墙 */}
          {(msg.attachments || []).length > 0 && (
            <div style={{display:'flex', flexWrap:'wrap', gap:6, marginBottom:10}}>
              {(msg.attachments || []).map((a, i) => (
                a.mime?.startsWith('image/') ? (
                  <img key={i} src={a.dataUrl || a.url} alt={a.name}
                    onClick={() => setImgPreview(a.dataUrl || a.url)}
                    style={{width:90, height:90, objectFit:'cover', borderRadius:8, cursor:'pointer', border:'1px solid var(--line)'}} />
                ) : (
                  <a key={i} href={a.dataUrl || a.url} download={a.name} target="_blank" rel="noreferrer"
                    style={{padding:'6px 10px', background:'#f5f5f7', borderRadius:8, fontSize:12, color:'var(--ink-2)', textDecoration:'none', display:'flex', alignItems:'center', gap:4}}>
                    📄 {a.name}
                  </a>
                )
              ))}
            </div>
          )}

          {/* 状态切换(仅接收方) */}
          {isReceiver && (
            <div style={{padding:'8px 10px', background:'#eff6ff', border:'1px solid #bfdbfe', borderRadius:8, marginBottom:12}}>
              <div style={{fontSize:11, fontWeight:600, color:'#1e40af', marginBottom:6}}>📌 你是接收方,可切换状态:</div>
              <div style={{display:'flex', gap:6, flexWrap:'wrap'}}>
                {CDM_STATUSES.map(s => (
                  <button key={s.id} onClick={() => setStatus(s.id)} disabled={s.id === msg.status}
                    style={{padding:'4px 12px', background: s.id === msg.status ? s.color : 'white', color: s.id === msg.status ? 'white' : s.color, border:`1px solid ${s.color}`, borderRadius:6, cursor: s.id === msg.status ? 'default' : 'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit', opacity: s.id === msg.status ? 0.65 : 1}}>
                    {s.label}{s.id === msg.status && ' (当前)'}
                  </button>
                ))}
              </div>
              {msg.completed_by_name && (
                <div style={{fontSize:10, color:'var(--ink-3)', marginTop:6}}>
                  完成于 {formatTs(msg.completed_at_ms)} by {msg.completed_by_name}
                </div>
              )}
            </div>
          )}

          {/* 🆕 v22-CW: 工单分派 (仅主管 + 接收方可见) */}
          {canAssign && msg.status !== 'done' && msg.status !== 'cancelled' && (
            <div style={{padding:'10px 12px', background:'#eff6ff', border:'1px solid #bfdbfe', borderRadius:8, marginBottom:12}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:8, flexWrap:'wrap'}}>
                <div style={{fontSize:12, fontWeight:600, color:'#1e40af'}}>
                  📌 工单分派
                  {msg.assigned_to_name && <span style={{fontWeight:400, marginLeft:6, color:'#1e3a8a'}}>· 当前: <strong>{msg.assigned_to_name}</strong></span>}
                </div>
                <button onClick={() => setShowAssign(v => !v)}
                  style={{padding:'4px 10px', background:'white', border:'1px solid #93c5fd', color:'#1e40af', borderRadius:6, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}>
                  {showAssign ? '收起' : (msg.assigned_to_id ? '✏️ 重新分派' : '📌 分派给手下处理')}
                </button>
              </div>
              {showAssign && (
                <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(100px, 1fr))', gap:5, marginTop:8}}>
                  {myDeptUsers.length === 0 ? (
                    <div style={{fontSize:11, color:'var(--ink-4)'}}>暂无员工列表</div>
                  ) : myDeptUsers.map(u => {
                    const uname = u.name + (u.alias ? ' ' + u.alias : '');
                    const isCurrent = msg.assigned_to_id === u.id;
                    return (
                      <button key={u.id} onClick={() => assignTo(u.id, uname)} disabled={isCurrent}
                        style={{padding:'5px 8px', background: isCurrent ? '#93c5fd' : 'white', border:'1px solid ' + (isCurrent ? '#93c5fd' : '#bfdbfe'), color: isCurrent ? 'white' : '#1e40af', borderRadius:5, cursor: isCurrent ? 'not-allowed' : 'pointer', fontSize:11, fontWeight: isCurrent ? 600 : 500, fontFamily:'inherit', opacity: isCurrent ? 0.7 : 1}}>
                        {isCurrent && '✓ '}👤 {uname}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* 🆕 v22-CW: 关注人 (watchers) — 主管可编辑,其他人只读 */}
          {(canAssign || (msg.watchers && msg.watchers.length > 0)) && (
            <div style={{padding:'10px 12px', background:'#faf5ff', border:'1px solid #e9d5ff', borderRadius:8, marginBottom:12}}>
              <div style={{fontSize:12, fontWeight:600, color:'#6b21a8', marginBottom:6}}>
                👁 关注人 ({(msg.watchers || []).length}) <span style={{fontWeight:400, color:'#7c3aed'}}>· 在他们收件箱也能看到</span>
              </div>
              {(msg.watchers || []).length > 0 && (
                <div style={{display:'flex', gap:5, flexWrap:'wrap', marginBottom: canAssign ? 8 : 0}}>
                  {(msg.watchers || []).map(wid => {
                    // 查名字 — 先 shopOwners,再 employees
                    const name = (shopOwners.find(s => s.userId === wid)?.userName)
                              || (myDeptUsers.find(u => u.id === wid)?.name)
                              || wid;
                    return (
                      <span key={wid}
                        style={{display:'inline-flex', alignItems:'center', gap:4, padding:'3px 9px', background:'white', color:'#6b21a8', border:'1px solid #d8b4fe', borderRadius:14, fontSize:11, fontWeight:500}}>
                        👁 {name}
                        {canAssign && (
                          <button onClick={() => toggleWatcher(wid, name)}
                            style={{background:'transparent', border:'none', cursor:'pointer', color:'#a78bfa', padding:0, marginLeft:2, fontSize:13, lineHeight:1}}
                            title="移除关注">×</button>
                        )}
                      </span>
                    );
                  })}
                </div>
              )}
              {canAssign && (() => {
                const candidates = myDeptUsers.filter(u =>
                  !(msg.watchers || []).includes(u.id) &&
                  u.id !== msg.assigned_to_id &&
                  u.id !== msg.to_user_id
                );
                if (candidates.length === 0) return (
                  <div style={{fontSize:10, color:'var(--ink-4)'}}>本部门员工都已是关注人 / 接收人 / 分派对象</div>
                );
                return (
                  <div>
                    <div style={{fontSize:10, color:'var(--ink-3)', marginBottom:4}}>+ 添加本部门关注人:</div>
                    <div style={{display:'flex', gap:4, flexWrap:'wrap'}}>
                      {candidates.map(u => {
                        const uname = u.name + (u.alias ? ' ' + u.alias : '');
                        return (
                          <button key={u.id} onClick={() => toggleWatcher(u.id, uname)}
                            style={{padding:'3px 9px', background:'white', color:'#7c3aed', border:'1px solid #e9d5ff', borderRadius:14, cursor:'pointer', fontSize:11, fontFamily:'inherit', fontWeight:500}}>
                            + {uname}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* 沟通线程 */}
          <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', margin:'14px 0 8px'}}>💬 沟通线程 ({(msg.thread || []).length} 条)</div>
          {(msg.thread || []).length === 0 ? (
            <div style={{padding:'14px 10px', textAlign:'center', color:'var(--ink-4)', fontSize:12, background:'#fafaf7', borderRadius:8}}>暂无回复</div>
          ) : (
            <div style={{display:'flex', flexDirection:'column', gap:8}}>
              {(msg.thread || []).map((t, i) => {
                const sys = findCdm(CDM_SYSTEMS, t.system);
                const isMine = t.user_id === user.id;
                return (
                  <div key={i} style={{display:'flex', flexDirection: isMine ? 'row-reverse' : 'row', gap:8}}>
                    <div style={{maxWidth:'78%', padding:'8px 12px', background: isMine ? '#0071e3' : 'white', color: isMine ? 'white' : 'var(--ink)', border: '1px solid ' + (isMine ? '#0071e3' : 'var(--line)'), borderRadius:10}}>
                      <div style={{fontSize:10, opacity:.85, marginBottom:3, display:'flex', gap:6, alignItems:'center'}}>
                        <span style={{padding:'1px 5px', background: isMine ? 'rgba(255,255,255,.2)' : sys.id === 'design' ? '#fce7f3' : sys.id === 'po' ? '#fef3c7' : '#dbeafe', color: isMine ? 'white' : sys.id === 'design' ? '#9d174d' : sys.id === 'po' ? '#854d0e' : '#1e40af', borderRadius:5, fontWeight:600}}>{sys.short}</span>
                        <span>{t.user_name || '?'}</span>
                        <span style={{opacity:.7}}>{formatTs(t.ts)}</span>
                      </div>
                      <div style={{fontSize:13, lineHeight:1.5, whiteSpace:'pre-wrap'}}>{t.content || ''}</div>
                      {(t.attachments || []).length > 0 && (
                        <div style={{display:'flex', flexWrap:'wrap', gap:4, marginTop:6}}>
                          {(t.attachments || []).map((a, j) => (
                            a.mime?.startsWith('image/') ? (
                              <img key={j} src={a.dataUrl || a.url} alt={a.name}
                                onClick={() => setImgPreview(a.dataUrl || a.url)}
                                style={{width:62, height:62, objectFit:'cover', borderRadius:5, cursor:'pointer'}} />
                            ) : (
                              <a key={j} href={a.dataUrl || a.url} download={a.name} target="_blank" rel="noreferrer"
                                style={{padding:'3px 7px', background: isMine ? 'rgba(255,255,255,.2)' : '#f5f5f7', borderRadius:5, fontSize:10, color: isMine ? 'white' : 'var(--ink-2)', textDecoration:'none'}}>📄 {a.name}</a>
                            )
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 回复框 — 🆕 v22-CY+: 支持 Ctrl+V 粘贴截图 + 拖拽文件 */}
        <div onDrop={onReplyDrop} onDragOver={onReplyDragOver}
          style={{padding:'12px 20px', borderTop:'1px solid var(--line)', background:'#fafaf7'}}>
          <textarea value={replyText} onChange={e => setReplyText(e.target.value)}
            placeholder="回复...(Ctrl+Enter 发送 · 支持 Ctrl+V 粘贴截图)"
            onKeyDown={e => { if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') reply(); }}
            rows={2}
            style={{width:'100%', padding:'8px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'inherit', resize:'vertical', background:'white'}} />
          {replyAttachments.length > 0 && (
            <div style={{display:'flex', flexWrap:'wrap', gap:4, marginTop:6}}>
              {replyAttachments.map((a, i) => (
                <div key={i} style={{padding:'3px 6px 3px 3px', background:'white', border:'1px solid var(--line)', borderRadius:6, display:'flex', alignItems:'center', gap:4, fontSize:11}}>
                  {a.mime?.startsWith('image/') ? <img src={a.dataUrl} alt={a.name} style={{width:20, height:20, objectFit:'cover', borderRadius:3}} /> : <span style={{fontSize:14}}>📄</span>}
                  <span style={{maxWidth:100, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{a.name}</span>
                  <button onClick={() => setReplyAttachments(p => p.filter((_, j) => j !== i))} type="button" style={{background:'transparent', border:'none', cursor:'pointer', color:'var(--ink-4)', padding:0, fontSize:13, lineHeight:1}}>×</button>
                </div>
              ))}
            </div>
          )}
          <div style={{display:'flex', gap:6, justifyContent:'space-between', alignItems:'center', marginTop:8}}>
            <div>
              <input ref={fileInputRef} type="file" multiple style={{display:'none'}}
                onChange={e => readFiles(Array.from(e.target.files || []))} />
              <button onClick={() => fileInputRef.current?.click()} type="button" className="btn-ghost" style={{padding:'5px 10px', fontSize:12}}>
                📎 加附件
              </button>
            </div>
            <button onClick={reply} disabled={sending || (!replyText.trim() && replyAttachments.length === 0)}
              style={{padding:'6px 16px', background: (sending || (!replyText.trim() && replyAttachments.length === 0)) ? '#9ca3af' : '#0071e3', color:'white', border:'none', borderRadius:7, cursor: (sending || (!replyText.trim() && replyAttachments.length === 0)) ? 'not-allowed' : 'pointer', fontSize:13, fontWeight:600, fontFamily:'inherit'}}>
              {sending ? '发送中...' : '📤 回复'}
            </button>
          </div>
        </div>
      </div>
      {/* 图片预览 */}
      {imgPreview && (
        <div onClick={() => setImgPreview(null)} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.85)', zIndex:100001, display:'flex', alignItems:'center', justifyContent:'center', padding:30}}>
          <img src={imgPreview} alt="预览" style={{maxWidth:'90%', maxHeight:'90%', borderRadius:8, boxShadow:'0 20px 60px rgba(0,0,0,.5)'}} />
        </div>
      )}
    </div>,
    document.body
  );
};

// ════════════════════════════════════════════════════════════════════
// 🆕 v22-CW Round 3b: 店铺负责人管理 (主管/admin)
// ════════════════════════════════════════════════════════════════════
const CDM_OWNER_ROLES = [
  { id:'primary',    label:'★ 主负责',     color:'#0071e3', desc:'日常接所有询盘' },
  { id:'night',      label:'🌙 夜班',      color:'#7c3aed', desc:'晚 6 点后美区询盘' },
  { id:'escalation', label:'🚨 升级处理',  color:'#dc2626', desc:'投诉 / 退款纠纷' },
  { id:'backup',     label:'· 备用',       color:'#86868b', desc:'主负责不在时兜底' },
  { id:'manager',    label:'👑 主管',      color:'#d97706', desc:'最终决策人' },
  { id:'designer',   label:'🎨 设计师',    color:'#ec4899', desc:'(美工系统专用)' },
];

const ShopOwnersManager = ({ user, employees, shopOwners = [], onClose, toast }) => {
  const [editing, setEditing] = useState(null);  // { shopName, userId, userName, role, notes, id? }
  const [showNew, setShowNew] = useState(false);
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';

  // 按店铺分组
  const grouped = useMemo(() => {
    const m = new Map();
    (shopOwners || []).forEach(o => {
      if (!m.has(o.shopName)) m.set(o.shopName, []);
      m.get(o.shopName).push(o);
    });
    return Array.from(m.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, [shopOwners]);

  // 客服部 owner 数量 (页面顶部统计)
  const csOwnerCount = (shopOwners || []).filter(s => s.system === MY_SYSTEM).length;

  // 可选员工 (排除已 hide 的)
  const availableEmployees = useMemo(() => (employees || []).filter(e => !e.hideFromList), [employees]);

  const saveOwner = async (record) => {
    const client = getCdmClient();
    if (!client) { alert('消息总线未连接'); return; }
    try {
      const row = {
        id: record.id || (crypto.randomUUID ? crypto.randomUUID() : ('so_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8))),
        shop_name: record.shopName.trim(),
        system: MY_SYSTEM,  // 强制本部门 — 不让客服改其他部门的数据
        user_id: record.userId,
        user_name: record.userName,
        role: record.role || 'primary',
        notes: (record.notes || '').trim() || null,
        created_at_ms: record.createdAtMs || Date.now(),
        updated_at: new Date().toISOString(),
      };
      const { error } = await client.from('shop_owners').upsert(row);
      if (error) throw error;
      toast(record.id ? '✓ 已更新' : '✓ 已添加');
      setEditing(null);
      setShowNew(false);
    } catch (e) { alert('保存失败: ' + (e.message || e)); }
  };

  // 🆕 fix23: 批量矩阵添加 — N 网站 × M 人 × 1 角色 = N*M 条记录,自动去重
  const saveOwnersBatch = async ({ shopNames, userIds, role, notes }) => {
    const client = getCdmClient();
    if (!client) { alert('消息总线未连接'); return; }
    try {
      const existingKeys = new Set(
        (shopOwners || [])
          .filter(s => s.system === MY_SYSTEM)
          .map(s => `${s.shopName}__${s.userId}__${s.role}`)
      );
      const rows = [];
      let skipped = 0;
      shopNames.forEach(shopName => {
        userIds.forEach(userId => {
          const emp = employees.find(e => e.id === userId);
          if (!emp) return;
          const userName = emp.name + (emp.alias ? ' ' + emp.alias : '');
          const key = `${shopName.trim()}__${userId}__${role}`;
          if (existingKeys.has(key)) { skipped++; return; }
          rows.push({
            id: (crypto.randomUUID ? crypto.randomUUID() : ('so_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8))),
            shop_name: shopName.trim(),
            system: MY_SYSTEM,
            user_id: userId,
            user_name: userName,
            role,
            notes: (notes || '').trim() || null,
            created_at_ms: Date.now(),
            updated_at: new Date().toISOString(),
          });
        });
      });
      if (rows.length === 0) { toast(`⚠ ${skipped} 条全部已存在,无需重复添加`); setShowNew(false); return; }
      const { error } = await client.from('shop_owners').insert(rows);
      if (error) throw error;
      toast(`✓ 添加 ${rows.length} 条${skipped > 0 ? ` · 跳过 ${skipped} 条重复` : ''}`);
      setShowNew(false);
    } catch (e) { alert('批量保存失败: ' + (e.message || e)); }
  };

  const deleteOwner = async (owner) => {
    if (owner.system !== MY_SYSTEM) { alert('只能删除本部门(客服)的记录'); return; }
    if (!confirm(`删除「${owner.shopName} - ${owner.userName}」?`)) return;
    const client = getCdmClient();
    if (!client) { alert('消息总线未连接'); return; }
    try {
      const { error } = await client.from('shop_owners').delete().eq('id', owner.id);
      if (error) throw error;
      toast('✓ 已删除');
    } catch (e) { alert('删除失败: ' + (e.message || e)); }
  };

  const systemLabel = (sys) => findCdm(CDM_SYSTEMS, sys).short;
  const systemBg = (sys) => sys === 'cs' ? '#dbeafe' : sys === 'design' ? '#fce7f3' : '#fef3c7';
  const systemColor = (sys) => sys === 'cs' ? '#1e40af' : sys === 'design' ? '#9d174d' : '#92400e';
  const roleDef = (r) => CDM_OWNER_ROLES.find(x => x.id === r) || CDM_OWNER_ROLES[1];

  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:100000, display:'flex', alignItems:'flex-start', justifyContent:'center', overflow:'auto', padding:'30px 20px'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, width:'100%', maxWidth:820, boxShadow:'0 20px 60px rgba(0,0,0,.25)', display:'flex', flexDirection:'column', maxHeight:'90vh'}}>
        {/* 头部 */}
        <div style={{padding:'14px 20px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0}}>
          <div>
            <div className="font-display" style={{fontSize:16, fontWeight:600}}>🌐 店铺负责人管理</div>
            <div style={{fontSize:11, color:'var(--ink-3)', marginTop:2}}>
              三方共享数据 · 客服部当前 {csOwnerCount} 个 · 只能编辑本部门
            </div>
          </div>
          <div style={{display:'flex', gap:6}}>
            {isAdmin && (
              <button onClick={() => setShowNew(true)}
                style={{padding:'6px 14px', background:'#0071e3', color:'white', border:'none', borderRadius:7, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}>
                + 新增映射
              </button>
            )}
            <button onClick={onClose} style={{padding:'4px 12px', background:'white', border:'1px solid var(--line)', borderRadius:6, cursor:'pointer', fontSize:13}}>×</button>
          </div>
        </div>

        {/* 列表 */}
        <div style={{padding:'14px 20px', overflowY:'auto', flex:1}}>
          {grouped.length === 0 ? (
            <div style={{padding:'30px 14px', textAlign:'center', color:'var(--ink-4)', fontSize:13}}>
              暂无店铺映射 · 点右上"+ 新增映射"添加第一个
            </div>
          ) : grouped.map(([shopName, owners]) => (
            <div key={shopName} style={{marginBottom:12, border:'1px solid var(--line)', borderRadius:10, background:'#fafaf7', overflow:'hidden'}}>
              <div style={{padding:'8px 12px', background:'white', borderBottom:'1px solid var(--line)', fontSize:13, fontWeight:600, color:'var(--ink)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <span>🌐 {shopName}</span>
                <span style={{fontSize:10, color:'var(--ink-3)', fontWeight:400}}>{owners.length} 个负责人</span>
              </div>
              <div style={{padding:'8px 10px', display:'flex', flexDirection:'column', gap:5}}>
                {owners.map(o => {
                  const canEdit = o.system === MY_SYSTEM && isAdmin;
                  const role = roleDef(o.role);
                  return (
                    <div key={o.id} style={{display:'flex', alignItems:'center', gap:8, padding:'6px 10px', background:'white', border:'1px solid var(--line)', borderRadius:7, flexWrap:'wrap'}}>
                      <span style={{padding:'2px 7px', background: systemBg(o.system), color: systemColor(o.system), borderRadius:8, fontSize:10, fontWeight:700}}>{systemLabel(o.system)}</span>
                      <span style={{padding:'2px 7px', background:'white', color: role.color, border: '1px solid ' + role.color + '40', borderRadius:8, fontSize:10, fontWeight:600}}>{role.label}</span>
                      <span style={{fontSize:13, fontWeight:500, color:'var(--ink)'}}>{o.userName}</span>
                      {o.notes && <span style={{fontSize:10, color:'var(--ink-3)', fontStyle:'italic'}}>· {o.notes}</span>}
                      <div style={{marginLeft:'auto', display:'flex', gap:4}}>
                        {canEdit ? (
                          <>
                            <button onClick={() => setEditing(o)}
                              style={{padding:'3px 8px', background:'white', border:'1px solid var(--line)', borderRadius:5, cursor:'pointer', fontSize:11, fontFamily:'inherit'}}>编辑</button>
                            <button onClick={() => deleteOwner(o)}
                              style={{padding:'3px 8px', background:'white', border:'1px solid #fca5a5', color:'#dc2626', borderRadius:5, cursor:'pointer', fontSize:11, fontFamily:'inherit'}}>删除</button>
                          </>
                        ) : (
                          <span style={{fontSize:10, color:'var(--ink-4)'}}>其他部门 · 只读</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* 底部说明 */}
        <div style={{padding:'8px 20px', borderTop:'1px solid var(--line)', background:'#fafafa', flexShrink:0, fontSize:10, color:'var(--ink-4)'}}>
          💡 数据三方实时同步 · 添加后美工/跟单立即看到 · role: ★主负责 / ·备用 / 👑主管 / 🎨设计师
        </div>
      </div>

      {/* 新增 / 编辑 子 modal */}
      {(showNew || editing) && (
        <ShopOwnerEditor
          record={editing || { shopName:'', userId:'', userName:'', role:'primary', notes:'' }}
          employees={availableEmployees}
          existingShopNames={Array.from(new Set((shopOwners || []).map(s => s.shopName))).sort()}
          onSave={saveOwner}
          onSaveBatch={saveOwnersBatch}
          onClose={() => { setEditing(null); setShowNew(false); }}
        />
      )}
    </div>,
    document.body
  );
};

// 子表单
// 🆕 v22-CY: 网站名改用 SHOPS_PRESET 预设下拉(防止拼写不一致)
// 🆕 fix23: 新增模式可切换 batch (矩阵批量) — N 网站 × M 人 × 1 角色
const ShopOwnerEditor = ({ record, employees, existingShopNames, onSave, onSaveBatch, onClose }) => {
  const isEdit = !!record.id;
  // 🆕 fix23: 批量模式 (仅新增时可用)
  const [batchMode, setBatchMode] = useState(false);
  // 判断初始 shopName 是否在预设里
  const initIsPreset = !isEdit ? false : SHOPS_SELECTABLE.some(s => s.label === record.shopName);
  const initShopVal = isEdit ? (initIsPreset ? record.shopName : '__other__') : '';
  const [shopName, setShopName] = useState(initShopVal);
  const [customShopName, setCustomShopName] = useState(isEdit && !initIsPreset ? (record.shopName || '') : '');
  const [userId, setUserId] = useState(record.userId || '');
  const [role, setRole] = useState(record.role || 'primary');
  const [notes, setNotes] = useState(record.notes || '');
  const [saving, setSaving] = useState(false);
  
  // 🆕 fix23: 批量模式专用 state
  const [batchShops, setBatchShops] = useState([]);     // 选中的 shopName 数组
  const [batchUserIds, setBatchUserIds] = useState([]); // 选中的员工 id 数组
  const [batchCustomShop, setBatchCustomShop] = useState('');
  const [batchIncludeCustom, setBatchIncludeCustom] = useState(false);

  const selectedEmp = employees.find(e => e.id === userId);

  const submit = async () => {
    let finalShopName = shopName;
    if (shopName === '__other__') {
      finalShopName = customShopName.trim();
      if (!finalShopName) { alert('请填写"其他"网站的名称'); return; }
    } else if (!finalShopName) {
      alert('请选择网站'); return;
    }
    if (!userId || !selectedEmp) { alert('请选员工'); return; }
    setSaving(true);
    await onSave({
      ...record,
      shopName: finalShopName,
      userId,
      userName: selectedEmp.name + (selectedEmp.alias ? ' ' + selectedEmp.alias : ''),
      role,
      notes,
    });
    setSaving(false);
  };

  // 🆕 fix23: 批量保存
  const submitBatch = async () => {
    const shops = [...batchShops];
    if (batchIncludeCustom && batchCustomShop.trim()) shops.push(batchCustomShop.trim());
    if (shops.length === 0) { alert('请至少勾选一个网站'); return; }
    if (batchUserIds.length === 0) { alert('请至少勾选一位员工'); return; }
    setSaving(true);
    await onSaveBatch({ shopNames: shops, userIds: batchUserIds, role, notes });
    setSaving(false);
  };

  const toggleShop = (label) => setBatchShops(prev => prev.includes(label) ? prev.filter(s => s !== label) : [...prev, label]);
  const toggleUser = (uid) => setBatchUserIds(prev => prev.includes(uid) ? prev.filter(u => u !== uid) : [...prev, uid]);
  
  const previewCount = batchShops.length * batchUserIds.length + (batchIncludeCustom && batchCustomShop.trim() ? batchUserIds.length : 0);

  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:100001, display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:12, width:'100%', maxWidth:480, boxShadow:'0 20px 60px rgba(0,0,0,.3)'}}>
        <div style={{padding:'14px 18px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div className="font-display" style={{fontSize:14, fontWeight:600}}>{isEdit ? '✏️ 编辑店铺负责人' : '+ 新增店铺负责人'}</div>
          <button onClick={onClose} style={{background:'transparent', border:'none', cursor:'pointer', fontSize:18}}>×</button>
        </div>
        <div style={{padding:'16px 18px', display:'flex', flexDirection:'column', gap:11}}>
          {/* 🆕 fix23: 模式切换 (新增模式才显示) */}
          {!isEdit && (
            <div style={{display:'flex', gap:4, padding:4, background:'#f5f5f7', borderRadius:8}}>
              <button onClick={() => setBatchMode(false)} type="button"
                style={{flex:1, padding:'6px 10px', background: !batchMode ? 'white' : 'transparent', color: !batchMode ? '#0071e3' : 'var(--ink-3)', border:'none', borderRadius:6, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit', boxShadow: !batchMode ? '0 1px 3px rgba(0,0,0,.08)' : 'none'}}>
                📝 单条添加
              </button>
              <button onClick={() => setBatchMode(true)} type="button"
                style={{flex:1, padding:'6px 10px', background: batchMode ? 'white' : 'transparent', color: batchMode ? '#7c3aed' : 'var(--ink-3)', border:'none', borderRadius:6, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit', boxShadow: batchMode ? '0 1px 3px rgba(0,0,0,.08)' : 'none'}}>
                🔢 矩阵批量
              </button>
            </div>
          )}
          
          {batchMode && !isEdit ? (
          /* ━━━━━━━━━━━━━━ 🆕 fix23: 批量矩阵模式 ━━━━━━━━━━━━━━ */
          <>
            <div style={{padding:'8px 12px', background:'#f3e8ff', border:'1px solid #d8b4fe', borderRadius:7, fontSize:11, color:'#6b21a8'}}>
              💡 勾选多个网站 + 多个员工 + 一个角色 = 一次性添加 <strong>{previewCount || 0}</strong> 条记录(重复自动跳过)
            </div>
            
            {/* 多选网站 */}
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:6}}>
                网站 * <span style={{fontWeight:400, color:'var(--ink-4)'}}>已选 {batchShops.length + (batchIncludeCustom && batchCustomShop.trim() ? 1 : 0)}</span>
              </label>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(140px, 1fr))', gap:5}}>
                {SHOPS_SELECTABLE.map(s => {
                  const checked = batchShops.includes(s.label);
                  return (
                    <label key={s.id} style={{display:'flex', alignItems:'center', gap:5, padding:'6px 9px', border:'1px solid '+(checked?'#7c3aed':'var(--line)'), borderRadius:6, cursor:'pointer', background: checked?'#faf5ff':'white', fontSize:11}}>
                      <input type="checkbox" checked={checked} onChange={() => toggleShop(s.label)} style={{margin:0}} />
                      <span style={{fontWeight: checked ? 600 : 400}}>{s.label}</span>
                    </label>
                  );
                })}
              </div>
              <label style={{display:'flex', alignItems:'center', gap:6, marginTop:6, fontSize:11, color:'var(--ink-3)'}}>
                <input type="checkbox" checked={batchIncludeCustom} onChange={e => setBatchIncludeCustom(e.target.checked)} />
                📝 含自定义网站
              </label>
              {batchIncludeCustom && (
                <input value={batchCustomShop} onChange={e => setBatchCustomShop(e.target.value)} placeholder="如 Singapore Outlet"
                  style={{marginTop:5, width:'100%', padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:12, fontFamily:'inherit'}} />
              )}
            </div>
            
            {/* 多选员工 */}
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:6}}>
                员工 * <span style={{fontWeight:400, color:'var(--ink-4)'}}>已选 {batchUserIds.length}</span>
              </label>
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(140px, 1fr))', gap:5, maxHeight:220, overflowY:'auto', padding:4, background:'#fafafa', borderRadius:6}}>
                {employees.map(e => {
                  const checked = batchUserIds.includes(e.id);
                  const tag = e.role === 'admin' ? '主管' : e.role === 'super_admin' ? '总管' : e.role === 'finance' ? '财务' : '';
                  return (
                    <label key={e.id} style={{display:'flex', alignItems:'center', gap:5, padding:'5px 8px', border:'1px solid '+(checked?'#7c3aed':'var(--line)'), borderRadius:6, cursor:'pointer', background: checked?'#faf5ff':'white', fontSize:11}}>
                      <input type="checkbox" checked={checked} onChange={() => toggleUser(e.id)} style={{margin:0}} />
                      <span style={{fontWeight: checked ? 600 : 400, flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{e.name}{e.alias ? ' '+e.alias : ''}</span>
                      {tag && <span style={{fontSize:9, color:'var(--ink-4)'}}>·{tag}</span>}
                    </label>
                  );
                })}
              </div>
            </div>
            
            {/* 角色 (单选) */}
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>角色 (单选,适用于所有勾选组合)</label>
              <div style={{display:'flex', gap:4, flexWrap:'wrap'}}>
                {CDM_OWNER_ROLES.filter(r => r.id !== 'designer').map(r => {
                  const sel = role === r.id;
                  return (
                    <button key={r.id} type="button" onClick={() => setRole(r.id)}
                      style={{padding:'5px 11px', background: sel ? r.color : 'white', color: sel ? 'white' : r.color, border:'1px solid ' + r.color, borderRadius:7, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}
                      title={r.desc || ''}>
                      {r.label}
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* 备注 */}
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>备注 (选填,所有记录共享)</label>
              <input value={notes} onChange={e => setNotes(e.target.value)} placeholder="如 周末班 / 临时安排 / 主要处理售前..."
                style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'inherit'}} />
            </div>
          </>
          ) : (
          /* ━━━━━━━━━━━━━━ 单条添加 / 编辑模式 (原样保留) ━━━━━━━━━━━━━━ */
          <>
          {/* 🆕 v22-CY: 网站名预设下拉 */}
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>网站 *</label>
            <select value={shopName} onChange={e => setShopName(e.target.value)}
              style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, background:'white', fontFamily:'inherit'}}>
              <option value="">— 选择网站 —</option>
              <optgroup label="📦 独立站">
                {SHOPS_SELECTABLE.filter(s => s.category === '独立站').map(s => (
                  <option key={s.id} value={s.label}>{s.label}</option>
                ))}
              </optgroup>
              <optgroup label="🛒 平台">
                {SHOPS_SELECTABLE.filter(s => s.category === '平台').map(s => (
                  <option key={s.id} value={s.label}>{s.label}</option>
                ))}
              </optgroup>
              <optgroup label="🏢 实体公司">
                {SHOPS_SELECTABLE.filter(s => s.category === '实体公司').map(s => (
                  <option key={s.id} value={s.label}>{s.label}</option>
                ))}
              </optgroup>
              <option value="__other__">📝 其他 (手填备注)</option>
            </select>
            {shopName === '__other__' && (
              <input type="text" value={customShopName} onChange={e => setCustomShopName(e.target.value)}
                placeholder="输入网站名"
                style={{marginTop:6, width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'inherit'}} />
            )}
            <div style={{marginTop:4, fontSize:10, color:'var(--ink-4)'}}>💡 用预设可避免拼写不一致导致自动派单失效</div>
          </div>
          {/* 员工 */}
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>员工 *</label>
            <select value={userId} onChange={e => setUserId(e.target.value)}
              style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, background:'white', fontFamily:'inherit'}}>
              <option value="">— 选员工 —</option>
              {employees.map(e => <option key={e.id} value={e.id}>{e.name}{e.alias ? ' ' + e.alias : ''} {e.role === 'admin' ? '· 主管' : e.role === 'super_admin' ? '· 总管' : e.role === 'finance' ? '· 财务' : ''}</option>)}
            </select>
          </div>
          {/* 角色 */}
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>角色</label>
            <div style={{display:'flex', gap:4, flexWrap:'wrap'}}>
              {CDM_OWNER_ROLES.map(r => {
                const sel = role === r.id;
                return (
                  <button key={r.id} type="button" onClick={() => setRole(r.id)}
                    style={{padding:'5px 11px', background: sel ? r.color : 'white', color: sel ? 'white' : r.color, border:'1px solid ' + r.color, borderRadius:7, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit'}}
                    title={r.desc || ''}>
                    {r.label}
                  </button>
                );
              })}
            </div>
          </div>
          {/* 备注 */}
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:4}}>备注 (选填)</label>
            <input value={notes} onChange={e => setNotes(e.target.value)} placeholder="如 周末 / 临时 / 主管代班..."
              style={{width:'100%', padding:'7px 10px', border:'1px solid var(--line)', borderRadius:7, fontSize:13, fontFamily:'inherit'}} />
          </div>
          </>
          )}
        </div>
        <div style={{padding:'10px 18px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'flex-end', gap:6}}>
          <button onClick={onClose} disabled={saving} className="btn-sec" style={{padding:'7px 14px', fontSize:12}}>取消</button>
          <button onClick={batchMode && !isEdit ? submitBatch : submit} disabled={saving}
            style={{padding:'7px 16px', background: batchMode && !isEdit ? '#7c3aed' : '#0071e3', color:'white', border:'none', borderRadius:7, cursor:saving?'wait':'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}>
            {saving ? '保存中...' : (batchMode && !isEdit ? `✓ 添加 ${previewCount} 条` : '✓ 保存')}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

// ════════════════════════════════════════════════════════════════════
// 🆕 v22-CW Round 3b: 超时阈值设置 (主管/admin)
// 配置 cdm_timeout_config[MY_SYSTEM][category][priority] 自定义天数
// 只能改本部门 — 不覆盖其他部门 (读最新 + merge + upsert)
// ════════════════════════════════════════════════════════════════════
const TimeoutSettingsModal = ({ user, cdmTimeoutConfig = {}, onClose, toast }) => {
  // 当前 cs 部门的配置(只编辑这部分)
  const [config, setConfig] = useState(() => ({ ...(cdmTimeoutConfig[MY_SYSTEM] || {}) }));
  const [activeCat, setActiveCat] = useState(CDM_CATEGORIES[0].id);
  const [saving, setSaving] = useState(false);
  const isAdmin = user.role === 'admin' || user.role === 'super_admin';
  if (!isAdmin) return null;

  const catDef = CDM_CATEGORIES.find(c => c.id === activeCat) || CDM_CATEGORIES[0];
  const setVal = (cat, pri, val) => {
    setConfig(prev => {
      const next = { ...prev };
      const catCfg = { ...(next[cat] || {}) };
      const n = parseInt(val, 10);
      if (isNaN(n) || n <= 0) {
        delete catCfg[pri];  // 删除 = 恢复默认
      } else if (n > 365) {
        return prev;  // 超出范围拒绝
      } else {
        catCfg[pri] = n;
      }
      if (Object.keys(catCfg).length === 0) {
        delete next[cat];
      } else {
        next[cat] = catCfg;
      }
      return next;
    });
  };
  const resetCategory = () => {
    setConfig(prev => {
      const next = { ...prev };
      delete next[activeCat];
      return next;
    });
    toast('✓ 此分类已恢复默认');
  };
  const resetAll = () => {
    if (!confirm('确定要把客服部所有分类的超时阈值都恢复默认?')) return;
    setConfig({});
    toast('✓ 全部已恢复默认');
  };
  const save = async () => {
    const client = getCdmClient();
    if (!client) { alert('消息总线未连接'); return; }
    setSaving(true);
    try {
      // 先读最新 — 避免覆盖其他部门(美工/跟单)的配置
      const { data } = await client.from('app_config').select('value').eq('key', 'cdm_timeout_config').maybeSingle();
      const latest = data?.value || {};
      const merged = { ...latest, [MY_SYSTEM]: config };
      const { error } = await client.from('app_config').upsert({ key: 'cdm_timeout_config', value: merged });
      if (error) throw error;
      toast('✓ 已保存 · 全系统生效');
      onClose();
    } catch (e) { alert('保存失败: ' + (e.message || e)); }
    setSaving(false);
  };

  const customCount = Object.keys(config).length;

  return ReactDOM.createPortal(
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:100000, display:'flex', alignItems:'flex-start', justifyContent:'center', overflow:'auto', padding:'30px 20px'}}>
      <div onClick={e => e.stopPropagation()} style={{background:'white', borderRadius:14, width:'100%', maxWidth:760, boxShadow:'0 20px 60px rgba(0,0,0,.25)', display:'flex', flexDirection:'column', maxHeight:'90vh'}}>
        {/* 头部 */}
        <div style={{padding:'14px 20px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0}}>
          <div>
            <div className="font-display" style={{fontSize:16, fontWeight:600}}>⏰ 超时阈值设置</div>
            <div style={{fontSize:11, color:'var(--ink-3)', marginTop:2}}>
              客服部 · 自定义 {customCount} 个分类 · 其他部门配置不变
            </div>
          </div>
          <div style={{display:'flex', gap:6}}>
            <button onClick={resetAll}
              style={{padding:'6px 12px', background:'white', border:'1px solid var(--line)', borderRadius:7, cursor:'pointer', fontSize:11, fontFamily:'inherit'}}>
              ↻ 全部恢复默认
            </button>
            <button onClick={onClose} style={{padding:'4px 12px', background:'white', border:'1px solid var(--line)', borderRadius:6, cursor:'pointer', fontSize:13}}>×</button>
          </div>
        </div>

        {/* 主体 — 左侧分类 tab, 右侧配置 */}
        <div style={{display:'flex', flex:1, minHeight:0, overflow:'hidden'}}>
          <div style={{width:180, borderRight:'1px solid var(--line)', overflowY:'auto', background:'#fafafa', flexShrink:0}}>
            {CDM_CATEGORIES.map(c => {
              const sel = activeCat === c.id;
              const hasCustom = !!config[c.id];
              return (
                <button key={c.id} onClick={() => setActiveCat(c.id)}
                  style={{
                    width:'100%', padding:'9px 12px', textAlign:'left', display:'flex', alignItems:'center', gap:6,
                    background: sel ? 'white' : 'transparent',
                    border:'none', borderLeft: '3px solid ' + (sel ? '#0071e3' : 'transparent'),
                    cursor:'pointer', fontFamily:'inherit', fontSize:12,
                    color: sel ? 'var(--ink)' : 'var(--ink-2)',
                    fontWeight: sel ? 600 : 500,
                  }}>
                  <span style={{flex:1}}>{c.label}</span>
                  {hasCustom && <span style={{fontSize:9, color:'#dc2626', fontWeight:700}}>●</span>}
                </button>
              );
            })}
          </div>
          <div style={{flex:1, padding:'18px 22px', overflowY:'auto'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:6, flexWrap:'wrap', gap:8}}>
              <div>
                <div style={{fontSize:14, fontWeight:600, color: catDef.color}}>{catDef.label}</div>
                <div style={{fontSize:11, color:'var(--ink-3)', marginTop:2}}>{catDef.desc}</div>
              </div>
              {config[activeCat] && (
                <button onClick={resetCategory}
                  style={{padding:'4px 10px', background:'white', border:'1px solid var(--line)', borderRadius:6, cursor:'pointer', fontSize:11, color:'var(--ink-3)', fontFamily:'inherit'}}>
                  ↻ 恢复此分类默认
                </button>
              )}
            </div>

            <div style={{display:'flex', flexDirection:'column', gap:8, marginTop:14}}>
              {CDM_PRIORITIES.map(p => {
                const customVal = config[activeCat]?.[p.id];
                const defaultVal = catDef.defaultTimeout?.[p.id] ?? 7;
                const isCustom = typeof customVal === 'number' && customVal > 0;
                const displayVal = isCustom ? customVal : '';
                return (
                  <div key={p.id} style={{display:'flex', alignItems:'center', gap:10, padding:'9px 12px', background: isCustom ? '#fef2f2' : '#fafaf7', border:'1px solid ' + (isCustom ? '#fca5a5' : 'var(--line)'), borderRadius:9}}>
                    <span style={{padding:'2px 8px', background: p.bg, color: p.color, borderRadius:9, fontSize:11, fontWeight:600, minWidth:60, textAlign:'center'}}>
                      {p.label}
                    </span>
                    <input type="number" min={1} max={365} value={displayVal} placeholder={`默认 ${defaultVal}`}
                      onChange={e => setVal(activeCat, p.id, e.target.value)}
                      style={{width:80, padding:'5px 8px', border:'1px solid ' + (isCustom ? '#fca5a5' : 'var(--line)'), borderRadius:6, fontSize:13, fontFamily:'inherit', textAlign:'center'}} />
                    <span style={{fontSize:12, color:'var(--ink-3)'}}>天</span>
                    <span style={{marginLeft:'auto', fontSize:11, color: isCustom ? '#b91c1c' : 'var(--ink-4)', fontWeight: isCustom ? 600 : 400}}>
                      {isCustom ? '(已自定义)' : `(默认 ${defaultVal} 天)`}
                    </span>
                  </div>
                );
              })}
            </div>

            <div style={{marginTop:18, padding:'10px 12px', background:'#eff6ff', border:'1px solid #bfdbfe', borderRadius:8, fontSize:11, color:'#1e40af', lineHeight:1.6}}>
              💡 留空 = 恢复默认 · 改完后所有 11 个分类 × 4 个优先级共 44 个组合都按这里的设置算超时<br/>
              💡 改的是<strong>客服部接到的工单</strong>的超时(`to_system=cs`)· 不影响其他部门
            </div>
          </div>
        </div>

        {/* 底部 */}
        <div style={{padding:'12px 20px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'flex-end', gap:8, flexShrink:0}}>
          <button onClick={onClose} disabled={saving} className="btn-sec" style={{padding:'7px 16px', fontSize:13}}>取消</button>
          <button onClick={save} disabled={saving}
            style={{padding:'7px 18px', background:'#0071e3', color:'white', border:'none', borderRadius:7, cursor:saving?'wait':'pointer', fontSize:13, fontWeight:600, fontFamily:'inherit'}}>
            {saving ? '保存中...' : '✓ 保存 (全系统生效)'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix49: 拍摄需求中心模块 (PhotoRequestsModule)
// 对接 WorkTrack-KPI 的 photo_logs 表
// 客服 / 跟单 提需求 → 拍摄部接手 → 全程透明可追溯
// ════════════════════════════════════════════════════════════════════
const PHOTO_STATUS_MAP = {
  draft:     { label: '📦 已提交',  color: '#475569', bg: '#f1f5f9', desc: '等拍摄部接手' },
  shooting:  { label: '📷 拍摄中',  color: '#0369a1', bg: '#dbeafe', desc: '拍摄部已接' },
  shot:      { label: '✓ 已拍完',  color: '#16a34a', bg: '#dcfce7', desc: '等剪辑' },
  editing:   { label: '🎬 剪辑中',  color: '#a855f7', bg: '#f3e8ff', desc: '美工剪辑中' },
  edited:    { label: '✓ 已剪辑',  color: '#16a34a', bg: '#dcfce7', desc: '等上传' },
  uploading: { label: '⬆️ 上传中',  color: '#ea580c', bg: '#fed7aa', desc: '上传到店铺' },
  done:      { label: '✅ 完成',    color: '#16a34a', bg: '#dcfce7', desc: '已上线' },
};

const PhotoRequestsModule = ({ user, toast }) => {
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [showNew, setShowNew] = useState(false);
  const [detailItem, setDetailItem] = useState(null);
  const [configured, setConfigured] = useState(window.isWtkpiConfigured?.() || false);

  const refresh = async () => {
    if (!window.isWtkpiConfigured?.()) { setConfigured(false); setList([]); return; }
    setConfigured(true);
    setLoading(true);
    try {
      const data = await window.listPhotoRequests({ myUserId: user.id, allRequests: filter !== 'mine' });
      setList(data || []);
    } catch (e) {
      console.error('[PhotoReq] 加载失败', e);
      toast('加载拍摄需求失败:' + (e.message || ''));
    }
    setLoading(false);
  };

  useEffect(() => { refresh(); }, [filter]);

  const visible = list.filter(r => {
    if (filter === 'all') return true;
    if (filter === 'mine') return r.external_request?.from_user_id === user.id;
    if (filter === 'urgent') return r.priority === 'urgent' || r.external_request?.urgency === 'urgent';
    if (filter === 'done') return r.status === 'done';
    return true;
  });

  if (!configured) {
    return (
      <div className="paper rounded-2xl" style={{padding:'48px 32px', textAlign:'center', maxWidth:520, margin:'40px auto'}}>
        <div style={{fontSize:48, marginBottom:12}}>📨</div>
        <div style={{fontSize:20, fontWeight:600, marginBottom:8, letterSpacing:'-.022em'}}>拍摄需求中心未配置</div>
        <div style={{fontSize:14, color:'var(--ink-3)', lineHeight:1.65, marginBottom:24}}>
          需要主管先去 <strong>⚙ 设置中心 → 拍摄部对接</strong> 填写 WorkTrack-KPI 的 Supabase URL 和 anon key。
          配置完成后所有客服都能用此功能向拍摄部提需求。
        </div>
        <button className="btn-pri" onClick={() => {
          setConfigured(window.isWtkpiConfigured?.() || false);
          if (window.isWtkpiConfigured?.()) refresh();
        }}>
          🔄 检测配置 / 刷新
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="paper rounded-2xl p-4">
        <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:14, flexWrap:'wrap'}}>
          <div className="font-display" style={{fontSize:20, fontWeight:600, letterSpacing:'-.022em', flex:1}}>
            📨 拍摄需求中心
          </div>
          <button className="btn-sec" onClick={refresh} disabled={loading} title="刷新列表">
            {loading ? '⏳' : '🔄'} 刷新
          </button>
          <button className="btn-pri" onClick={() => setShowNew(true)}>
            + 新建需求
          </button>
        </div>

        <div style={{display:'flex', gap:8, marginBottom:14, flexWrap:'wrap'}}>
          {[
            { id:'all',    label:`全部 (${list.length})` },
            { id:'mine',   label:`我提的 (${list.filter(r => r.external_request?.from_user_id === user.id).length})` },
            { id:'urgent', label:`🚨 加急 (${list.filter(r => r.priority === 'urgent' || r.external_request?.urgency === 'urgent').length})` },
            { id:'done',   label:`✅ 完成 (${list.filter(r => r.status === 'done').length})` },
          ].map(t => (
            <button key={t.id} className={`tab-btn ${filter === t.id ? 'active' : ''}`} onClick={() => setFilter(t.id)}>
              {t.label}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <div style={{textAlign:'center', padding:'48px 20px', color:'var(--ink-3)', fontSize:14}}>
            {loading ? '⏳ 加载中…' :
              filter === 'mine' ? '你还没提过需求 — 点右上 "+ 新建" 开始' :
              filter === 'urgent' ? '没有加急的需求 🎉' :
              filter === 'done' ? '还没有已完成的需求' :
              '没有需求 — 点右上 "+ 新建" 创建一个'}
          </div>
        ) : (
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:12}}>
            {visible.map(r => <PhotoRequestCard key={r.id} item={r} onOpen={() => setDetailItem(r)} />)}
          </div>
        )}
      </div>

      {showNew && (
        <PhotoRequestNewModal user={user} toast={toast}
          onClose={() => setShowNew(false)}
          onSuccess={() => { setShowNew(false); refresh(); }}/>
      )}

      {detailItem && <PhotoRequestDetailModal item={detailItem} onClose={() => setDetailItem(null)} />}
    </>
  );
};

const PhotoRequestCard = ({ item, onOpen }) => {
  const st = PHOTO_STATUS_MAP[item.status] || { label: item.status, color:'#999', bg:'#eee' };
  const isUrgent = item.priority === 'urgent';
  const ext = item.external_request || {};
  const attachCount = (ext.attachments || []).length;
  const reasonPreview = (ext.reason || '').slice(0, 100);
  const ago = item.created_at_ms ? humanAgoMs(Date.now() - item.created_at_ms) : '';
  return (
    <div onClick={onOpen} style={{
      background:'white', border:`1px solid ${isUrgent ? 'var(--bad)' : 'var(--line)'}`,
      borderRadius:14, padding:14, cursor:'pointer', boxShadow:'var(--shadow-sm)',
      transition:'transform .15s, box-shadow .15s',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}>
      <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:8, flexWrap:'wrap'}}>
        {isUrgent && <span style={{fontSize:11, padding:'2px 8px', background:'var(--bad)', color:'white', borderRadius:'var(--radius-pill)', fontWeight:600}}>🚨 加急</span>}
        <span style={{fontSize:11, padding:'2px 8px', background:st.bg, color:st.color, borderRadius:'var(--radius-pill)', fontWeight:600}}>{st.label}</span>
        <div style={{flex:1}}/>
        <span style={{fontSize:11, color:'var(--ink-4)'}}>{ago}</span>
      </div>
      <div style={{display:'flex', gap:10}}>
        {item.product_image && (
          <img src={item.product_image} style={{width:60, height:60, objectFit:'cover', borderRadius:8, flexShrink:0, border:'1px solid var(--line)'}} alt=""/>
        )}
        <div style={{flex:1, minWidth:0}}>
          <div style={{fontWeight:600, fontSize:14, color:'var(--ink)', marginBottom:2, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
            {item.product_name || '未命名产品'}
          </div>
          {item.sku && <div style={{fontSize:11, color:'var(--ink-4)', fontFamily:'SF Mono,monospace', marginBottom:4}}>{item.sku}</div>}
          <div style={{fontSize:12, color:'var(--ink-3)', lineHeight:1.45, display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical', overflow:'hidden'}}>
            {reasonPreview || '(无描述)'}
          </div>
        </div>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:10, marginTop:10, fontSize:11, color:'var(--ink-4)'}}>
        {attachCount > 0 && <span>📎 {attachCount} 图</span>}
        {ext.from_name && <span>👤 {ext.from_name}</span>}
      </div>
    </div>
  );
};

const humanAgoMs = (ms) => {
  if (ms < 60000) return '刚刚';
  if (ms < 3600000) return Math.floor(ms / 60000) + ' 分钟前';
  if (ms < 86400000) return Math.floor(ms / 3600000) + ' 小时前';
  if (ms < 7 * 86400000) return Math.floor(ms / 86400000) + ' 天前';
  return Math.floor(ms / (7 * 86400000)) + ' 周前';
};

const PhotoRequestNewModal = ({ user, toast, onClose, onSuccess, prefill = {} }) => {
  const [productName, setProductName] = useState(prefill.productName || '');
  const [sku, setSku] = useState(prefill.sku || '');
  const [shops, setShops] = useState(prefill.shops || []);
  const [reason, setReason] = useState(prefill.reason || '');
  const [urgency, setUrgency] = useState('normal');
  const [attachments, setAttachments] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const externalRefId = prefill.externalRefId || null;

  const toggleShop = (label) => {
    setShops(prev => prev.includes(label) ? prev.filter(s => s !== label) : [...prev, label]);
  };

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    setUploading(true);
    const newAttachments = [];
    for (const f of files) {
      try {
        const a = await window.uploadAttachmentToWtkpi(f);
        newAttachments.push(a);
      } catch (err) {
        toast('上传 ' + f.name + ' 失败:' + err.message);
      }
    }
    setAttachments(prev => [...prev, ...newAttachments]);
    setUploading(false);
    e.target.value = '';
  };

  const removeAttachment = (idx) => {
    setAttachments(prev => prev.filter((_, i) => i !== idx));
  };

  const submit = async () => {
    if (!productName.trim()) { toast('请填产品名'); return; }
    if (!reason.trim()) { toast('请填详细原因 — 告诉拍摄部你要他们做什么'); return; }
    if (shops.length === 0) {
      if (!confirm('没选店铺,拍摄部可能不知道用在哪。继续提交?')) return;
    }
    setSubmitting(true);
    try {
      await window.submitPhotoRequest({
        productName: productName.trim(),
        sku: sku.trim(),
        productImage: prefill.productImage || null,
        applicableShops: shops,
        currentUser: user,
        reason: reason.trim(),
        urgency, attachments, externalRefId,
      });
      toast('✓ 已提交给拍摄部');
      onSuccess?.();
    } catch (e) {
      console.error('[PhotoReq] 提交失败', e);
      alert('提交失败:\n\n' + (e.message || JSON.stringify(e)) + '\n\n常见原因:\n• 配置的 URL/Key 错了\n• Supabase RLS 拒绝写入 (联系拍摄部主管配 policy)\n• 网络问题');
    }
    setSubmitting(false);
  };

  return ReactDOM.createPortal(
    <div onClick={e => { if (e.target === e.currentTarget) onClose(); }} style={{
      position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:10000,
      display:'flex', alignItems:'center', justifyContent:'center', padding:20,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background:'white', borderRadius:18, maxWidth:680, width:'100%', maxHeight:'92vh', overflow:'auto',
        padding:'28px 32px', boxShadow:'0 20px 60px rgba(0,0,0,.25)',
      }}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14}}>
          <div className="font-display" style={{fontSize:20, fontWeight:600, letterSpacing:'-.022em'}}>📨 新建拍摄需求</div>
          <button onClick={onClose} style={{background:'none', border:'none', fontSize:22, cursor:'pointer', color:'var(--ink-3)'}}>✕</button>
        </div>
        <div style={{marginBottom:14}}>
          <label style={{display:'block', fontSize:12, fontWeight:600, color:'var(--ink-2)', marginBottom:6}}>
            产品名称 <span style={{color:'var(--bad)'}}>*</span>
          </label>
          <input value={productName} onChange={e => setProductName(e.target.value)}
            placeholder="例:Milk Table Lamp - 餐厅灯具"
            style={{width:'100%', padding:'10px 12px', border:'1px solid var(--line)', borderRadius:10, fontSize:14}}/>
        </div>
        <div style={{marginBottom:14}}>
          <label style={{display:'block', fontSize:12, fontWeight:600, color:'var(--ink-2)', marginBottom:6}}>
            SKU <span style={{color:'var(--ink-4)', fontWeight:400}}>(选填,但强烈建议)</span>
          </label>
          <input value={sku} onChange={e => setSku(e.target.value)}
            placeholder="例:DCT-24118-5"
            style={{width:'100%', padding:'10px 12px', border:'1px solid var(--line)', borderRadius:10, fontSize:14, fontFamily:'SF Mono,monospace'}}/>
        </div>
        <div style={{marginBottom:14}}>
          <label style={{display:'block', fontSize:12, fontWeight:600, color:'var(--ink-2)', marginBottom:6}}>
            适用店铺(多选)
          </label>
          <div style={{display:'flex', gap:6, flexWrap:'wrap'}}>
            {(typeof SHOPS_PRESET !== 'undefined' ? SHOPS_PRESET : []).map(s => (
              <button key={s.id} type="button" onClick={() => toggleShop(s.label)} style={{
                padding:'5px 12px', borderRadius:'var(--radius-pill)', cursor:'pointer',
                border:'1px solid ' + (shops.includes(s.label) ? 'var(--accent)' : 'var(--line)'),
                background: shops.includes(s.label) ? 'var(--accent)' : 'white',
                color: shops.includes(s.label) ? 'white' : 'var(--ink-2)',
                fontSize:12, fontWeight: shops.includes(s.label) ? 600 : 400,
                fontFamily:'inherit', transition:'all .15s',
              }}>{s.label}</button>
            ))}
          </div>
        </div>
        <div style={{marginBottom:14}}>
          <label style={{display:'block', fontSize:12, fontWeight:600, color:'var(--ink-2)', marginBottom:6}}>
            详细原因 / 拍摄要求 <span style={{color:'var(--bad)'}}>*</span>
          </label>
          <textarea value={reason} onChange={e => setReason(e.target.value)}
            placeholder="例:&#10;客户反馈拿到的吸顶灯实际是冷白光,我们卖的描述是暖白光&#10;要求拍 3 张实物图:开灯 / 关灯 / 灯泡特写,让客户对比&#10;紧急 - 客户在 PayPal 开了 dispute,2 天内要给答复"
            rows={5}
            style={{width:'100%', padding:'10px 12px', border:'1px solid var(--line)', borderRadius:10, fontSize:13, fontFamily:'inherit', resize:'vertical'}}/>
        </div>
        <div style={{marginBottom:14}}>
          <label style={{display:'block', fontSize:12, fontWeight:600, color:'var(--ink-2)', marginBottom:6}}>
            紧急程度
          </label>
          <div style={{display:'flex', gap:8}}>
            <button type="button" onClick={() => setUrgency('normal')} style={{
              flex:1, padding:'10px', borderRadius:10,
              border:'1px solid ' + (urgency === 'normal' ? 'var(--accent)' : 'var(--line)'),
              background: urgency === 'normal' ? 'var(--accent-soft)' : 'white',
              color: urgency === 'normal' ? 'var(--accent)' : 'var(--ink-2)',
              fontSize:13, fontWeight: urgency === 'normal' ? 600 : 400,
              cursor:'pointer', fontFamily:'inherit',
            }}>· 普通</button>
            <button type="button" onClick={() => setUrgency('urgent')} style={{
              flex:1, padding:'10px', borderRadius:10,
              border:'1px solid ' + (urgency === 'urgent' ? 'var(--bad)' : 'var(--line)'),
              background: urgency === 'urgent' ? 'var(--bad-soft)' : 'white',
              color: urgency === 'urgent' ? 'var(--bad)' : 'var(--ink-2)',
              fontSize:13, fontWeight: urgency === 'urgent' ? 600 : 400,
              cursor:'pointer', fontFamily:'inherit',
            }}>🚨 加急</button>
          </div>
          <div style={{fontSize:11, color:'var(--ink-4)', marginTop:5}}>
            加急的工单会在拍摄部首页置顶,显示 🚨 红标 — 请慎用
          </div>
        </div>
        <div style={{marginBottom:18}}>
          <label style={{display:'block', fontSize:12, fontWeight:600, color:'var(--ink-2)', marginBottom:6}}>
            附件(客户聊天截图 / 对比图等)
          </label>
          {attachments.length > 0 && (
            <div style={{display:'flex', gap:8, flexWrap:'wrap', marginBottom:8}}>
              {attachments.map((a, i) => (
                <div key={i} style={{position:'relative', width:70, height:70}}>
                  <img src={a.url} alt={a.name} style={{width:'100%', height:'100%', objectFit:'cover', borderRadius:8, border:'1px solid var(--line)'}}/>
                  <button onClick={() => removeAttachment(i)} style={{
                    position:'absolute', top:-6, right:-6, width:20, height:20,
                    background:'var(--bad)', color:'white', border:'none', borderRadius:'50%',
                    cursor:'pointer', fontSize:11, lineHeight:1, fontFamily:'inherit',
                  }}>✕</button>
                </div>
              ))}
            </div>
          )}
          <input type="file" accept="image/*" multiple onChange={handleFiles} disabled={uploading} style={{fontSize:12}}/>
          {uploading && <div style={{fontSize:12, color:'var(--accent)', marginTop:5}}>⏳ 上传中…(已自动压缩 ≤1600px)</div>}
        </div>
        <div style={{display:'flex', gap:10, justifyContent:'flex-end'}}>
          <button className="btn-sec" onClick={onClose}>取消</button>
          <button className="btn-pri" onClick={submit} disabled={submitting || uploading}>
            {submitting ? '⏳ 提交中…' : '✓ 提交给拍摄部'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

const PhotoRequestDetailModal = ({ item, onClose }) => {
  const ext = item.external_request || {};
  const st = PHOTO_STATUS_MAP[item.status] || { label: item.status, color:'#999', bg:'#eee' };
  const isUrgent = item.priority === 'urgent';
  return ReactDOM.createPortal(
    <div onClick={e => { if (e.target === e.currentTarget) onClose(); }} style={{
      position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:10000,
      display:'flex', alignItems:'center', justifyContent:'center', padding:20,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background:'white', borderRadius:18, maxWidth:680, width:'100%', maxHeight:'92vh', overflow:'auto',
        padding:'24px 28px',
      }}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14}}>
          <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
            {isUrgent && <span style={{fontSize:11, padding:'3px 10px', background:'var(--bad)', color:'white', borderRadius:'var(--radius-pill)', fontWeight:600}}>🚨 加急</span>}
            <span style={{fontSize:11, padding:'3px 10px', background:st.bg, color:st.color, borderRadius:'var(--radius-pill)', fontWeight:600}}>{st.label} · {st.desc}</span>
          </div>
          <button onClick={onClose} style={{background:'none', border:'none', fontSize:22, cursor:'pointer', color:'var(--ink-3)'}}>✕</button>
        </div>
        <div className="font-display" style={{fontSize:20, fontWeight:600, marginBottom:4, letterSpacing:'-.022em'}}>
          {item.product_name || '未命名产品'}
        </div>
        {item.sku && <div style={{fontSize:12, color:'var(--ink-3)', fontFamily:'SF Mono,monospace', marginBottom:14}}>{item.sku}</div>}
        {item.applicable_shops?.length > 0 && (
          <div style={{display:'flex', gap:4, flexWrap:'wrap', marginBottom:14}}>
            {item.applicable_shops.map((s, i) => (
              <span key={i} style={{fontSize:11, padding:'2px 8px', background:'var(--bg-elevated)', color:'var(--ink-2)', borderRadius:'var(--radius-pill)'}}>🏪 {s}</span>
            ))}
          </div>
        )}
        <div style={{background:'var(--bg-elevated)', padding:14, borderRadius:10, marginBottom:14}}>
          <div style={{fontSize:11, color:'var(--ink-3)', marginBottom:6, fontWeight:600}}>客服原因</div>
          <div style={{fontSize:14, lineHeight:1.65, whiteSpace:'pre-wrap', color:'var(--ink)'}}>{ext.reason || '(无)'}</div>
        </div>
        {ext.attachments?.length > 0 && (
          <div style={{marginBottom:14}}>
            <div style={{fontSize:12, color:'var(--ink-2)', fontWeight:600, marginBottom:8}}>📎 附件 ({ext.attachments.length})</div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(120px, 1fr))', gap:8}}>
              {ext.attachments.map((a, i) => (
                <a key={i} href={a.url} target="_blank" rel="noopener noreferrer" style={{display:'block'}}>
                  <img src={a.url} alt={a.name} style={{width:'100%', aspectRatio:'1', objectFit:'cover', borderRadius:8, border:'1px solid var(--line)'}}/>
                </a>
              ))}
            </div>
          </div>
        )}
        <div style={{fontSize:12, color:'var(--ink-3)', display:'flex', gap:14, flexWrap:'wrap', borderTop:'1px solid var(--line)', paddingTop:12}}>
          <span>👤 提交人:{ext.from_name || item.created_by_name}</span>
          {item.created_at_ms && <span>🕐 提交时间:{new Date(item.created_at_ms).toLocaleString('zh-CN')}</span>}
          {item.photographer_name && <span>📷 摄影:{item.photographer_name}</span>}
          {item.editor_name && <span>🎬 剪辑:{item.editor_name}</span>}
        </div>
      </div>
    </div>,
    document.body
  );
};

if (typeof window !== 'undefined') {
  window.PhotoRequestNewModal = PhotoRequestNewModal;
}

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
