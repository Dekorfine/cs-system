// ====== cs-system — 04-admin-finance ======
// 版本 2026.06.05-fix152
// 预编译切片
//

const WtkpiConfigSection = ({ user, toast }) => {
  const isAdmin = user.role === 'super_admin' || user.role === 'admin';
  // 🆕 fix50: 显示默认值,localStorage 覆盖优先
  const DEFAULT_URL = 'https://xyhbwqugbnowfjuhqhsj.supabase.co';
  const DEFAULT_KEY = 'sb_publishable_Z0dXXZivG5QI-FCbwELxEA_JZBNx2Hn';
  const [url, setUrl] = useState(() => localStorage.getItem('wtkpi_url') || DEFAULT_URL);
  const [key, setKey] = useState(() => localStorage.getItem('wtkpi_key') || DEFAULT_KEY);
  const usingDefaults = !localStorage.getItem('wtkpi_url') && !localStorage.getItem('wtkpi_key');
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [showKey, setShowKey] = useState(false);

  const save = async () => {
    if (!isAdmin) { toast('只有主管才能配置'); return; }
    if (!url.trim() || !key.trim()) { toast('请填写完整 URL 和 Key'); return; }
    if (!/^https:\/\/[\w-]+\.supabase\.co\/?$/.test(url.trim())) {
      if (!await wsConfirm('URL 格式好像不对(应该像 https://xxxx.supabase.co),继续保存?')) return;
    }
    localStorage.setItem('wtkpi_url', url.trim());
    localStorage.setItem('wtkpi_key', key.trim());
    toast('✓ 已保存到本机');
    setTestResult(null);
  };

  const testConnection = async () => {
    if (!url.trim() || !key.trim()) { toast('请先填写 URL 和 Key'); return; }
    // 临时保存让 client 用最新的
    localStorage.setItem('wtkpi_url', url.trim());
    localStorage.setItem('wtkpi_key', key.trim());
    if (typeof window !== 'undefined') {
      // 强制重建 client 实例
      const w = window;
      // 通过调用 getWtkpiClient 重新初始化
    }
    setTesting(true);
    setTestResult(null);
    try {
      const client = window.getWtkpiClient();
      if (!client) throw new Error('client 初始化失败');
      const { data, error } = await client.from('photo_logs').select('id, status').limit(1);
      if (error) throw error;
      setTestResult({ ok: true, msg: `连接成功 ✓ 表里有 ${data?.length || 0} 条样本数据可读` });
    } catch (e) {
      setTestResult({ ok: false, msg: '连接失败:' + (e.message || JSON.stringify(e)) });
    }
    setTesting(false);
  };

  const clear = async () => {
    if (!await wsConfirm('确认清除自定义配置?(会恢复到默认值)')) return;
    localStorage.removeItem('wtkpi_url');
    localStorage.removeItem('wtkpi_key');
    setUrl(DEFAULT_URL); setKey(DEFAULT_KEY); setTestResult(null);
    toast('已恢复默认');
  };

  return (
    <div className="paper rounded-2xl p-6">
      <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:8}}>
        <span style={{fontSize:24}}>📨</span>
        <div>
          <div className="font-display" style={{fontSize:18, fontWeight:600, letterSpacing:'-.022em'}}>拍摄部对接配置</div>
          <div style={{fontSize:13, color:'var(--ink-3)'}}>对接 WorkTrack-KPI 系统的 <code className="font-mono">photo_logs</code> 表</div>
        </div>
      </div>

      <div className="rounded-lg p-3 mt-4" style={{background:'var(--good-soft)', color:'var(--good)', fontSize:13, lineHeight:1.65, fontWeight:500}}>
        ✅ <strong>默认配置已就位</strong> · 客服可以直接用拍摄需求功能,无需配置。下方仅在 Martin 切换 Supabase 项目时才需要修改。
      </div>

      <div className="rounded-lg p-3 mt-3" style={{background:'var(--accent-soft)', color:'var(--accent)', fontSize:13, lineHeight:1.65}}>
        <strong>📋 配置步骤(仅在需要时):</strong><br/>
        1. Martin / 拍摄部主管登录 WorkTrack-KPI 的 Supabase Dashboard<br/>
        2. Project Settings → API → 复制 <strong>URL</strong> 和 <strong>anon public key</strong><br/>
        3. 把两个值发给你 → 粘贴到下方<br/>
        4. 点 <strong>🔍 测试连接</strong> 验证 → 通过后 <strong>💾 保存</strong>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-5">
        <div>
          <label className="block mb-1.5" style={{fontSize:12, fontWeight:600, color:'var(--ink-2)'}}>
            Supabase URL <span style={{color:'var(--bad)'}}>*</span>
          </label>
          <input
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="https://xxxxxxxxxxxx.supabase.co"
            disabled={!isAdmin}
            className="font-mono w-full"
            style={{fontSize:13, padding:'10px 12px', border:'1px solid var(--line)', borderRadius:10, background: isAdmin ? 'white' : 'var(--bg-elevated)'}}
          />
        </div>
        <div>
          <label className="block mb-1.5" style={{fontSize:12, fontWeight:600, color:'var(--ink-2)'}}>
            Anon Public Key <span style={{color:'var(--bad)'}}>*</span>
            <button onClick={() => setShowKey(!showKey)} style={{background:'none', border:'none', color:'var(--accent)', fontSize:11, marginLeft:8, cursor:'pointer'}}>
              {showKey ? '👁 隐藏' : '👁 显示'}
            </button>
          </label>
          <textarea
            value={key}
            onChange={e => setKey(e.target.value)}
            placeholder="eyJhbGc...(长 JWT 字符串,带 .eyJ. 中段的那种)"
            disabled={!isAdmin}
            rows={3}
            className="font-mono w-full"
            style={{
              fontSize:12, padding:'10px 12px', border:'1px solid var(--line)', borderRadius:10,
              background: isAdmin ? 'white' : 'var(--bg-elevated)',
              fontFamily:'inherit',
              filter: showKey ? 'none' : 'blur(4px)',
              transition: 'filter .2s'
            }}
          />
        </div>
      </div>

      {testResult && (
        <div className="rounded-lg p-3 mt-4" style={{
          background: testResult.ok ? 'var(--good-soft)' : 'var(--bad-soft)',
          color: testResult.ok ? 'var(--good)' : 'var(--bad)',
          fontSize:13, fontWeight:500,
        }}>
          {testResult.ok ? '✓ ' : '✗ '}{testResult.msg}
        </div>
      )}

      {isAdmin && (
        <div style={{display:'flex', gap:8, marginTop:18, flexWrap:'wrap'}}>
          <button className="btn-sec" onClick={testConnection} disabled={testing}>
            {testing ? '⏳ 测试中…' : '🔍 测试连接'}
          </button>
          <button className="btn-pri" onClick={save}>💾 保存</button>
          <button className="btn-ghost" onClick={clear} style={{color:'var(--bad)'}}>清除配置</button>
        </div>
      )}

      {!isAdmin && (
        <div className="rounded-lg p-3 mt-4" style={{background:'var(--bg-elevated)', fontSize:12, color:'var(--ink-3)'}}>
          🔒 只有主管/总管能配置。如果遇到拍摄需求功能不能用,联系 Miya / Nicole 配置。
        </div>
      )}

      <div className="rounded-lg p-3 mt-3" style={{background:'#fef3c7', fontSize:12, color:'#92400e', lineHeight:1.65}}>
        <strong>🔐 安全说明:</strong>这个 Key 保存在你的浏览器 localStorage 里(不传到云端)。
        <strong>每个人都要自己配一次</strong>(或者主管登录每台电脑配一次)。
        <strong>推荐用 anon key(配合 RLS 策略)</strong>,不要用 service_role key,泄露后果严重。
      </div>
    </div>
  );
};

const AdminModule = ({ user, employees, setEmployees, toast, cloudCfg, setCloudCfg, onCloudApply }) => {
  const [editingId, setEditingId] = useState(null);
  const [newEmp, setNewEmp] = useState({ name:'', alias:'', sites:'', password:'123456', role:'staff' });
  const [showNew, setShowNew] = useState(false);
  const [section, setSection] = useState('cloud');  // cloud | employees | gemini
  
  // Gemini key 配置（直接调用 kb.html 同款 Supabase 表 kb_team_config）
  const [geminiKey, setGeminiKey] = useState('');
  const [geminiStatus, setGeminiStatus] = useState('检查中...');
  const [geminiTesting, setGeminiTesting] = useState(false);
  const [geminiTestResult, setGeminiTestResult] = useState('');
  
  // 简单加密（与 kb.html 完全一致）
  const _SECRET = 'wk2024-radilum-cs-team';
  const _xorEncrypt = (text) => {
    let r = '';
    for (let i = 0; i < text.length; i++) r += String.fromCharCode(text.charCodeAt(i) ^ _SECRET.charCodeAt(i % _SECRET.length));
    return btoa(unescape(encodeURIComponent(r)));
  };
  const _xorDecrypt = (b64) => {
    try {
      const s = decodeURIComponent(escape(atob(b64)));
      let r = '';
      for (let i = 0; i < s.length; i++) r += String.fromCharCode(s.charCodeAt(i) ^ _SECRET.charCodeAt(i % _SECRET.length));
      return r;
    } catch(e) { return ''; }
  };
  
  const loadGeminiKey = async () => {
    if (!CLOUD.client) { setGeminiStatus('❌ 云同步未启用'); return; }
    try {
      const { data } = await CLOUD.client.from('kb_team_config').select('value').eq('key', 'gemini_api_key').maybeSingle();
      if (!data) { setGeminiStatus('未配置'); return; }
      const encrypted = data.value?.encrypted || '';
      const decoded = encrypted ? _xorDecrypt(encrypted) : '';
      if (decoded) {
        setGeminiStatus(`✓ 已配置 (${decoded.slice(0,8)}...)`);
      } else {
        setGeminiStatus('未配置');
      }
    } catch(e) { setGeminiStatus('❌ 读取失败: ' + e.message); }
  };
  
  useEffect(() => { if (section === 'gemini') loadGeminiKey(); }, [section]);
  
  const saveGeminiKey = async () => {
    if (!geminiKey.trim()) { toast('⚠ 请输入 Gemini API key'); return; }
    if (!CLOUD.client) { toast('❌ 云同步未启用'); return; }
    if (!geminiKey.trim().startsWith('AIza')) {
      if (!await wsConfirm('这个 key 看起来不像 Gemini key（通常以 AIza 开头）。继续保存吗？')) return;
    }
    if (!await wsConfirm('保存 Gemini API key 到云端？\n会用 XOR 加密后存储到 Supabase，所有团队成员都能使用此 key。')) return;
    try {
      const encrypted = _xorEncrypt(geminiKey.trim());
      console.log('[GEMINI] saving encrypted key, len=', encrypted.length);
      const { data, error } = await CLOUD.client.from('kb_team_config').upsert({
        key: 'gemini_api_key',
        value: { encrypted, hint: geminiKey.slice(0,8) + '...' },
        updated_at: new Date().toISOString(),
      }, { onConflict: 'key' }).select();
      if (error) {
        console.error('[GEMINI] save error:', error);
        alert(`❌ 保存失败：${error.message}\n\n错误码: ${error.code || 'unknown'}\n详情: ${error.details || error.hint || '无'}\n\n常见原因：\n1. kb_team_config 表不存在（请跑 03_kb_extras.sql）\n2. RLS 策略阻止写入\n3. 网络问题`);
        return;
      }
      console.log('[GEMINI] saved, verifying...');
      // 立即读出来验证
      const { data: verify } = await CLOUD.client.from('kb_team_config').select('value').eq('key', 'gemini_api_key').maybeSingle();
      const encryptedBack = verify?.value?.encrypted || '';
      const decoded = encryptedBack ? _xorDecrypt(encryptedBack) : '';
      if (decoded !== geminiKey.trim()) {
        alert(`⚠ 保存疑似成功但验证失败：\n\n写入的 key: ${geminiKey.slice(0,8)}...\n读回的 key: ${decoded.slice(0,8)}...\n\n可能是 RLS 阻止了读取。请去 Supabase 检查 kb_team_config 表的 Policies。`);
        return;
      }
      toast('✓ Gemini key 已加密保存 · 知识库可立即使用');
      setGeminiKey('');
      loadGeminiKey();
      // 通知所有 kb iframe 重载 key
      document.querySelectorAll('iframe[title="知识库"]').forEach(f => {
        try { f.contentWindow.postMessage({ type:'reload-gemini-key' }, '*'); } catch(e) {}
      });
    } catch(e) {
      console.error('[GEMINI] save exception:', e);
      alert('❌ 保存异常: ' + e.message);
    }
  };
  
  const testGemini = async () => {
    setGeminiTesting(true);
    setGeminiTestResult('');
    try {
      // 优先用输入框里的 key，否则从云端读
      let key = geminiKey.trim();
      let source = '输入框';
      if (!key) {
        const { data } = await CLOUD.client.from('kb_team_config').select('value').eq('key', 'gemini_api_key').maybeSingle();
        const encrypted = data?.value?.encrypted || '';
        key = encrypted ? _xorDecrypt(encrypted) : '';
        source = '云端';
      }
      if (!key) { setGeminiTestResult('❌ 请先输入 key 或先点「保存到云端」'); setGeminiTesting(false); return; }
      const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ contents:[{parts:[{text:'用一句中文回答：你能听到我吗？'}]}] }),
      });
      if (!resp.ok) {
        const err = await resp.json().catch(()=>({}));
        throw new Error(err.error?.message || `HTTP ${resp.status}`);
      }
      const j = await resp.json();
      const txt = j.candidates?.[0]?.content?.parts?.[0]?.text || '';
      setGeminiTestResult(`✓ 连通成功 (key 来自${source}): "${txt.slice(0,40).trim()}..."`);
    } catch(e) { setGeminiTestResult('❌ ' + e.message); }
    setGeminiTesting(false);
  };

  const addEmployee = () => {
    if (!newEmp.name.trim()) { toast('⚠ 姓名必填'); return; }
    if (employees.some(e => e.name === newEmp.name && e.alias === newEmp.alias)) {
      toast('⚠ 该员工已存在');
      return;
    }
    const emp = {
      id: 'u_' + uid(),
      ...newEmp,
      name: newEmp.name.trim(),
      alias: newEmp.alias.trim(),
      sites: newEmp.sites.trim(),
      password: newEmp.password || '123456',
    };
    setEmployees(prev => [...prev, emp]);
    saveCloudAccount(emp);  // 🆕 fix146: 同步到云端,新人任何设备都能登录
    setNewEmp({ name:'', alias:'', sites:'', password:'123456', role:'staff' });
    setShowNew(false);
    toast('✓ 已添加 ' + emp.name + ' · 账号:' + accountFor(emp) + ' · 密码:' + emp.password);
  };

  const updateEmp = (id, patch) => {
    setEmployees(prev => prev.map(e => e.id === id ? { ...e, ...patch } : e));
    const cur = employees.find(e => e.id === id);
    if (cur) saveCloudAccount({ ...cur, ...patch });  // 🆕 fix146: 改动同步云端
  };

  const deleteEmp = async (id) => {
    if (id === user.id) { toast('⚠ 不能删除自己'); return; }
    const e = employees.find(x => x.id === id);
    if (!await wsConfirm(`确认删除员工 ${e.name}？历史记录不会丢失，但该员工无法再登录。`)) return;
    setEmployees(prev => prev.filter(e => e.id !== id));
    deleteCloudAccount(id);  // 🆕 fix146: 云端同步删除
    toast('✗ 已删除');
  };

  const resetPwd = async (id) => {
    const newPwd = await wsPrompt('请输入新密码 (至少 6 位):', '123456');
    if (!newPwd || newPwd.length < 6) { toast('⚠ 密码至少 6 位'); return; }
    updateEmp(id, { password: newPwd });
    toast('✓ 密码已重置为: ' + newPwd);
  };

  return (
    <div className="space-y-5 fade-in">
      <div className="paper rounded-2xl p-4">
        <div style={{display:'flex', alignItems:'center', gap:6, flexWrap:'wrap'}}>
          {/* 🆕 fix21: 分组 — 基础维护 */}
          <span style={{fontSize:10, fontWeight:700, color:'var(--ink-4)', marginRight:4, letterSpacing:'.5px'}}>基础维护</span>
          <button className={`tab-btn ${section==='employees'?'active':''}`} onClick={() => setSection('employees')}>👥 人员 ({employees.length})</button>
          <button className={`tab-btn ${section==='sites'?'active':''}`} onClick={() => setSection('sites')}>🌐 网站</button>
          <button className={`tab-btn ${section==='products'?'active':''}`} onClick={() => setSection('products')}>📦 产品</button>
          <button className={`tab-btn ${section==='suppliers'?'active':''}`} onClick={() => setSection('suppliers')}>🏭 供应商</button>
          
          <span style={{width:1, height:18, background:'var(--line)', margin:'0 4px'}} />
          
          {/* 业务规则 */}
          <span style={{fontSize:10, fontWeight:700, color:'var(--ink-4)', marginRight:4, letterSpacing:'.5px'}}>业务规则</span>
          <button className={`tab-btn ${section==='chargeback_owners'?'active':''}`} onClick={() => setSection('chargeback_owners')}>🚨 拒付专人</button>
          <button className={`tab-btn ${section==='refund_processors'?'active':''}`} onClick={() => setSection('refund_processors')}>💰 退款处理人</button>
          <button className={`tab-btn ${section==='alert_thresholds'?'active':''}`} onClick={() => setSection('alert_thresholds')}>⏰ 预警阈值</button>
          
          <span style={{width:1, height:18, background:'var(--line)', margin:'0 4px'}} />
          
          {/* 系统 */}
          <span style={{fontSize:10, fontWeight:700, color:'var(--ink-4)', marginRight:4, letterSpacing:'.5px'}}>系统</span>
          <button className={`tab-btn ${section==='cloud'?'active':''}`} onClick={() => setSection('cloud')}>☁ 云同步</button>
          <button className={`tab-btn ${section==='gemini'?'active':''}`} onClick={() => setSection('gemini')}>✨ Gemini AI</button>
          {/* 🆕 fix49: 拍摄部对接配置 */}
          <button className={`tab-btn ${section==='wtkpi'?'active':''}`} onClick={() => setSection('wtkpi')}>📨 拍摄部对接</button>
        </div>
      </div>
      
      {/* 🆕 fix21: 网站维护 */}
      {section === 'sites' && (
        <SitesMaintenanceSection user={user} toast={toast} />
      )}
      
      {/* 🆕 fix21: 产品维护 */}
      {section === 'products' && (
        <ProductsMaintenanceSection user={user} toast={toast} />
      )}
      
      {section === 'suppliers' && (
        <SuppliersManagement toast={toast} user={user} />
      )}
      
      {section === 'chargeback_owners' && (
        <ChargebackOwnersSettings employees={employees} user={user} toast={toast} />
      )}
      
      {section === 'refund_processors' && (
        <RefundProcessorsSettings employees={employees} user={user} toast={toast} />
      )}
      
      {section === 'alert_thresholds' && (
        <AlertThresholdsSettings user={user} toast={toast} />
      )}

      {section === 'cloud' && (
        <CloudSettingsCard cfg={cloudCfg} setCfg={setCloudCfg} toast={toast} onApply={onCloudApply} />
      )}

      {section === 'gemini' && (
        <div className="paper rounded-2xl p-6">
          <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:8}}>
            <span style={{fontSize:24}}>✨</span>
            <div>
              <div className="font-display" style={{fontSize:18, fontWeight:600, letterSpacing:'-.022em'}}>Gemini AI 配置</div>
              <div style={{fontSize:13, color:'var(--ink-3)'}}>知识库的 AI 一键优化模板功能需要 Gemini API key</div>
            </div>
          </div>
          
          <div className="rounded-lg p-3 mt-4" style={{background:'var(--accent-soft)', color:'var(--accent)', fontSize:13, lineHeight:1.65}}>
            <strong>📋 申请步骤：</strong><br/>
            1. 访问 <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener" style={{color:'var(--accent)', textDecoration:'underline'}}>aistudio.google.com/apikey</a><br/>
            2. 用 Google 账号登录 → 点 <strong>Create API key</strong> → 选择 Google Cloud 项目（或新建）<br/>
            3. 复制生成的 key（以 <code className="font-mono px-1 rounded" style={{background:'white'}}>AIzaSy...</code> 开头，约 39 字符）<br/>
            4. 粘贴到下方输入框 → 保存到云端（XOR 加密，全团队共享）
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
            <div>
              <label className="block text-[12px] mb-2" style={{color:'var(--ink-3)', fontWeight:500}}>Gemini API Key</label>
              <input
                type="password"
                value={geminiKey}
                onChange={e => setGeminiKey(e.target.value)}
                placeholder="AIzaSy..."
                autoComplete="off"
                name="gemini-api-key-no-fill"
                data-lpignore="true"
                data-1p-ignore="true"
                style={{fontFamily:'SF Mono, monospace', fontSize:13}}
              />
            </div>
            <div>
              <label className="block text-[12px] mb-2" style={{color:'var(--ink-3)', fontWeight:500}}>当前 Key 状态</label>
              <div style={{padding:'10px 14px', borderRadius:'var(--radius-sm)', background:'var(--bg-elevated)', fontSize:13, color: geminiStatus.startsWith('✓') ? 'var(--good)' : (geminiStatus.startsWith('❌') ? 'var(--bad)' : 'var(--ink-3)')}}>
                {geminiStatus}
              </div>
            </div>
          </div>

          <div style={{display:'flex', gap:10, marginTop:18, alignItems:'center', flexWrap:'wrap'}}>
            <button className="btn-pri" onClick={saveGeminiKey} disabled={!geminiKey.trim()}>
              🔐 保存到云端（加密）
            </button>
            <button className="btn-sec" onClick={testGemini} disabled={geminiTesting}>
              {geminiTesting ? '⏳ 测试中...' : '🧪 测试连通性'}
            </button>
            {geminiTestResult && (
              <span style={{fontSize:13, color: geminiTestResult.startsWith('✓') ? 'var(--good)' : 'var(--bad)'}}>
                {geminiTestResult}
              </span>
            )}
          </div>

          <div className="rounded-lg p-3 mt-5" style={{background:'var(--bg-elevated)', fontSize:12, color:'var(--ink-3)', lineHeight:1.65}}>
            <strong>🔐 加密说明：</strong>API key 经 XOR + Base64 加密后存储在 Supabase 的 <code className="font-mono">kb_team_config</code> 表里。
            即使有人通过开发者工具看到表内容，也只会看到加密字符串。但请注意：**这只能防 plain text 泄漏，不能防有心人**——所以一定不要把 key 分享到公开渠道。
          </div>

          <div className="rounded-lg p-3 mt-3" style={{background:'#fef3c7', fontSize:12, color:'#92400e', lineHeight:1.65}}>
            <strong>💡 谁来配置？</strong>建议**只让主管 Miya 配置一次**——配好后全团队所有人在知识库点击 "用 Gemini 改写" 都能立即使用，无需各自配置。
          </div>
        </div>
      )}

      {/* 🆕 fix49: 拍摄部对接配置 (WorkTrack-KPI Supabase) */}
      {section === 'wtkpi' && (
        <WtkpiConfigSection user={user} toast={toast} />
      )}

      {section === 'employees' && (
      <>
      <div className="paper rounded-2xl p-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Icon name="users" className="w-5 h-5" style={{color:'var(--accent)'}} />
            <span className="font-display text-base font-bold">员工管理</span>
            <span className="tag tag-neutral">{employees.length} 人</span>
          </div>
          <div className="flex items-center gap-2">
            {/* 🆕 fix62 v5: 同步到共享人员目录 */}
            <button className="btn-sec" title="把客服部人员发布到三系统共享目录(美工/客服/跟单互相可见,发工单能选到具体人)"
              onClick={async () => {
                try {
                  const n = await window.publishMyStaff(employees, user.name + (user.alias ? ' ' + user.alias : ''));
                  const okAcc = await seedCloudAccounts(employees);  // 🆕 fix146: 同时把全部登录账号推到 cs_accounts
                  toast(`✓ 已同步 ${n} 名到共享目录` + (okAcc ? ` · ${employees.length} 个登录账号已上云` : ' · ⚠登录账号未上云(cs_accounts 表?)'));
                } catch (e) {
                  toast('❌ 同步失败:' + (e.message || e));
                }
              }}>
              🔄 同步到共享目录
            </button>
            <button className="btn-pri" onClick={() => setShowNew(!showNew)}>
              <Icon name="plus" className="w-4 h-4 inline mr-1" />
              添加员工
            </button>
          </div>
        </div>
      </div>

      {showNew && (
        <div className="paper rounded-2xl p-5" style={{borderColor:'var(--accent)', borderWidth:'2px'}}>
          <div className="font-display text-sm font-bold mb-3">新增员工</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div>
              <label className="block text-[11px] font-bold mb-1" style={{color:'var(--ink-2)'}}>中文姓名 *</label>
              <input value={newEmp.name} onChange={e => setNewEmp({...newEmp, name:e.target.value})} placeholder="如 张三" />
            </div>
            <div>
              <label className="block text-[11px] font-bold mb-1" style={{color:'var(--ink-2)'}}>英文名</label>
              <input value={newEmp.alias} onChange={e => setNewEmp({...newEmp, alias:e.target.value})} placeholder="如 Sally" />
            </div>
            <div>
              <label className="block text-[11px] font-bold mb-1" style={{color:'var(--ink-2)'}}>负责网站</label>
              <input value={newEmp.sites} onChange={e => setNewEmp({...newEmp, sites:e.target.value})} placeholder="如 VK+DC" />
            </div>
            <div>
              <label className="block text-[11px] font-bold mb-1" style={{color:'var(--ink-2)'}}>初始密码</label>
              <input value={newEmp.password} onChange={e => setNewEmp({...newEmp, password:e.target.value})} placeholder="默认 123456" />
            </div>
            <div>
              <label className="block text-[11px] font-bold mb-1" style={{color:'var(--ink-2)'}}>角色</label>
              <select value={newEmp.role} onChange={e => setNewEmp({...newEmp, role:e.target.value})}>
                <option value="staff">员工</option>
                <option value="admin">主管 (有全部权限)</option>
              </select>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <button className="btn-pri" onClick={addEmployee}>确认添加</button>
            <button className="btn-ghost" onClick={() => setShowNew(false)}>取消</button>
          </div>
        </div>
      )}

      <div className="paper rounded-2xl overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>英文名</th>
                <th>负责网站</th>
                <th>角色</th>
                <th>密码</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {employees.filter(e => !e.hideFromList || e.id === user.id).map((e, idx) => {
                const isEditing = editingId === e.id;
                return (
                  <tr key={e.id}>
                    <td><span className="font-mono text-[11px]" style={{color:'var(--ink-4)'}}>{idx+1}</span></td>
                    <td>
                      {isEditing ? (
                        <input value={e.name} onChange={ev => updateEmp(e.id, {name:ev.target.value})} style={{padding:'4px 8px', fontSize:'12px'}} />
                      ) : (
                        <span className="font-bold">{e.name}</span>
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <input value={e.alias} onChange={ev => updateEmp(e.id, {alias:ev.target.value})} style={{padding:'4px 8px', fontSize:'12px'}} />
                      ) : (
                        <span className="text-xs">{e.alias || '—'}</span>
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <input value={e.sites} onChange={ev => updateEmp(e.id, {sites:ev.target.value})} style={{padding:'4px 8px', fontSize:'12px'}} />
                      ) : (
                        <span className="text-xs" style={{color:'var(--ink-3)'}}>{e.sites || '—'}</span>
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <select value={e.role} onChange={ev => updateEmp(e.id, {role:ev.target.value})} style={{padding:'4px 8px', fontSize:'11px'}}>
                          <option value="staff">员工</option>
                          <option value="admin">主管</option>
                        </select>
                      ) : (
                        <span className={`tag ${e.role==='admin'?'tag-gold':'tag-neutral'}`}>
                          {e.role==='admin' ? '主管' : '员工'}
                        </span>
                      )}
                    </td>
                    <td>
                      <span className="font-mono text-[10px]" style={{color:'var(--ink-4)'}}>••••••</span>
                      <button className="btn-ghost ml-2" onClick={() => resetPwd(e.id)} style={{fontSize:'10px'}}>重置</button>
                    </td>
                    <td>
                      <div className="flex gap-1">
                        {isEditing ? (
                          <button className="btn-sec" onClick={() => setEditingId(null)} style={{padding:'4px 10px'}}>
                            <Icon name="check" className="w-3 h-3 inline" /> 完成
                          </button>
                        ) : (
                          <button className="btn-sec" onClick={() => setEditingId(e.id)} style={{padding:'4px 10px'}}>
                            <Icon name="edit" className="w-3 h-3 inline" /> 编辑
                          </button>
                        )}
                        {e.id !== user.id && (
                          <button className="btn-danger" onClick={() => deleteEmp(e.id)} style={{padding:'4px 10px'}}>删除</button>
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

      <div className="paper rounded-2xl p-4" style={{background:'var(--info-soft)', borderColor:'var(--info)'}}>
        <div className="text-xs" style={{color:'var(--ink-2)'}}>
          <b>📌 主管说明：</b>
          <ul className="mt-2 ml-4 list-disc space-y-1">
            <li>所有员工的初始密码默认为 <code className="font-mono px-1 rounded" style={{background:'white'}}>123456</code>，主管密码为 <code className="font-mono px-1 rounded" style={{background:'white'}}>admin123</code></li>
            <li>建议员工首次登录后让其修改密码（点击"重置"输入新密码）</li>
            <li>删除员工不会丢失历史记录，但该员工无法再登录</li>
            <li>主管可以查看所有员工的数据、回收站记录、永久删除等高权限操作</li>
          </ul>
        </div>
      </div>
      </>
      )}
    </div>
  );
};


