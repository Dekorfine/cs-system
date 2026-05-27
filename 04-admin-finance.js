// ════════════════════════════════════════════════════════════════════
// ⚙ 设置中心 + 🧮 财务计算器 · 含 fix28-46 全部累积修复
// APP_VERSION: 2026.05.27-fix46 · 拆自 workspace.html 行号 8107-9613
// ════════════════════════════════════════════════════════════════════


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
      if (!confirm('这个 key 看起来不像 Gemini key（通常以 AIza 开头）。继续保存吗？')) return;
    }
    if (!confirm('保存 Gemini API key 到云端？\n会用 XOR 加密后存储到 Supabase，所有团队成员都能使用此 key。')) return;
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
    setNewEmp({ name:'', alias:'', sites:'', password:'123456', role:'staff' });
    setShowNew(false);
    toast('✓ 已添加员工 ' + emp.name);
  };

  const updateEmp = (id, patch) => {
    setEmployees(prev => prev.map(e => e.id === id ? { ...e, ...patch } : e));
  };

  const deleteEmp = (id) => {
    if (id === user.id) { toast('⚠ 不能删除自己'); return; }
    const e = employees.find(x => x.id === id);
    if (!confirm(`确认删除员工 ${e.name}？历史记录不会丢失，但该员工无法再登录。`)) return;
    setEmployees(prev => prev.filter(e => e.id !== id));
    toast('✗ 已删除');
  };

  const resetPwd = (id) => {
    const newPwd = prompt('请输入新密码 (至少 6 位):', '123456');
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

      {section === 'employees' && (
      <>
      <div className="paper rounded-2xl p-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <Icon name="users" className="w-5 h-5" style={{color:'var(--accent)'}} />
            <span className="font-display text-base font-bold">员工管理</span>
            <span className="tag tag-neutral">{employees.length} 人</span>
          </div>
          <button className="btn-pri" onClick={() => setShowNew(!showNew)}>
            <Icon name="plus" className="w-4 h-4 inline mr-1" />
            添加员工
          </button>
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


// ============================================================
// 财务卖价计算器 (简化版 - 核心售价公式)
// ============================================================
const FinanceModule = ({ user, toast }) => {
  const sameDirUrl = `finance.html`;
  const iframeRef = React.useRef(null);
  const [iframeHeight, setIframeHeight] = useState('calc(100vh - 100px)');

  // 监听 iframe 内的 postMessage 高度更新（让整页只有一个滚动条）
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === 'iframe-resize' && e.data?.source === 'finance') {
        // iframe 撑满内容高度（外部页面自己滚动，避免双滚动条）
        setIframeHeight(Math.max(600, e.data.height + 20) + 'px');
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <div className="fade-in" style={{margin:'-20px -24px -20px'}}>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 24px', background:'var(--bg-elevated)', borderBottom:'1px solid var(--line)'}}>
        <div style={{fontSize:13, color:'var(--ink-3)'}}>
          <strong style={{color:'var(--ink)'}}>💰 财务对账计算器</strong>
          <span style={{marginLeft:8}}>· 13 个承运商 · 70+ 国家费率 · 运费 / 体积重 / 附加费完整核算</span>
        </div>
        <div style={{display:'flex', gap:8}}>
          <button className="btn-sec" onClick={() => iframeRef.current?.contentWindow?.location?.reload()} title="刷新">🔄</button>
          <a href={sameDirUrl} target="_blank" rel="noopener" className="btn-sec" style={{textDecoration:'none'}}>↗ 新窗口打开</a>
        </div>
      </div>
      <iframe
        ref={iframeRef}
        src={sameDirUrl}
        style={{width:'100%', height:iframeHeight, border:'none', background:'#fafaf7', display:'block', transition:'height .15s'}}
        title="财务计算器"
        scrolling="no"
      />
    </div>
  );
};

// ============================================================
// 运费支付管理模块 - 支付记录 / 快递公司 / 统计汇总
// ============================================================
const FreightModule = ({ user, toast, cloudOn }) => {
  const [section, setSection] = useState('payments');
  const [carriers, setCarriers] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterMonth, setFilterMonth] = useState(() => new Date().toISOString().slice(0,7));
  const [filterCarrier, setFilterCarrier] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterMethod, setFilterMethod] = useState('');

  const PAYMENT_METHODS = [
    { v:'bank',    label:'🏦 银行转账' },
    { v:'alipay',  label:'💙 支付宝' },
    { v:'wechat',  label:'💚 微信' },
    { v:'paypal',  label:'🔵 PayPal' },
    { v:'pcard',   label:'💳 P 卡/信用卡' },
    { v:'cash',    label:'💵 现金' },
    { v:'other',   label:'⚪ 其他' },
  ];
  const methodLabel = (v) => PAYMENT_METHODS.find(m => m.v === v)?.label || v;

  const CATEGORIES = [
    { v:'express', label:'📦 快递' },
    { v:'air',     label:'✈️ 空运' },
    { v:'sea',     label:'🚢 海运' },
    { v:'postal',  label:'📮 邮政' },
  ];
  const categoryLabel = (v) => CATEGORIES.find(c => c.v === v)?.label || v;

  const loadAll = async () => {
    if (!CLOUD.client) { toast('⚠ 云同步未启用'); return; }
    setLoading(true);
    try {
      const [r1, r2] = await Promise.all([
        CLOUD.client.from('freight_carriers').select('*').order('name'),
        CLOUD.client.from('freight_payments').select('*').eq('trashed', false).order('payment_date', { ascending: false }).limit(2000),
      ]);
      if (r1.error) throw r1.error;
      if (r2.error) throw r2.error;
      setCarriers(r1.data || []);
      setPayments(r2.data || []);
    } catch(e) {
      const msg = e.message || '';
      if (msg.includes('schema cache') || msg.includes('does not exist') || msg.includes('PGRST')) {
        toast('⚠ 运费表还没建好，请联系管理员跑 SQL', 'error');
      } else {
        toast('❌ 加载失败: ' + msg);
      }
    }
    setLoading(false);
  };

  useEffect(() => { if (cloudOn) loadAll(); }, [cloudOn]);

  const [newPayment, setNewPayment] = useState({
    carrier_id: '', category: 'express', amount: '', currency: 'CNY',
    payment_method: 'bank', payment_date: new Date().toISOString().slice(0,10),
    invoice_no: '', shipment_ref: '', notes: '',
  });
  const [editingPaymentId, setEditingPaymentId] = useState(null);
  
  // 📎 附件状态
  const [pendingAttachments, setPendingAttachments] = useState([]);  // [{name, type, size, url, path, uploading}]
  const fileInputRef = React.useRef(null);
  const dropZoneRef = React.useRef(null);
  
  // 上传单个文件到 Supabase Storage
  const uploadFile = async (file) => {
    if (!CLOUD.client) throw new Error('云同步未启用');
    const ext = file.name.split('.').pop() || 'bin';
    const safeName = file.name.replace(/[^\w.-]/g, '_').slice(0, 60);
    const path = `${new Date().toISOString().slice(0,7)}/${Date.now()}_${Math.random().toString(36).slice(2,8)}_${safeName}`;
    const { data, error } = await CLOUD.client.storage.from('freight-receipts').upload(path, file, {
      cacheControl: '3600', upsert: false, contentType: file.type,
    });
    if (error) throw error;
    const { data: urlData } = CLOUD.client.storage.from('freight-receipts').getPublicUrl(path);
    return { name: file.name, type: file.type, size: file.size, path, url: urlData.publicUrl };
  };
  
  const handleFiles = async (fileList) => {
    if (!fileList || fileList.length === 0) return;
    if (!CLOUD.client) { toast('⚠ 云同步未启用，无法上传附件'); return; }
    const files = Array.from(fileList).filter(f => {
      if (f.size > 10 * 1024 * 1024) { toast(`⚠ ${f.name} 超过 10MB 已跳过`); return false; }
      if (!f.type.startsWith('image/') && f.type !== 'application/pdf') { toast(`⚠ ${f.name} 不是图片或 PDF`); return false; }
      return true;
    });
    if (files.length === 0) return;
    
    // 先显示 uploading 状态
    const placeholders = files.map(f => ({ name: f.name, type: f.type, size: f.size, uploading: true, url: URL.createObjectURL(f) }));
    setPendingAttachments(prev => [...prev, ...placeholders]);
    
    // 并行上传
    for (let i = 0; i < files.length; i++) {
      try {
        const result = await uploadFile(files[i]);
        setPendingAttachments(prev => {
          const next = [...prev];
          const idx = next.findIndex(a => a.name === files[i].name && a.uploading);
          if (idx >= 0) next[idx] = result;
          return next;
        });
        toast(`✓ ${files[i].name} 上传完成`);
      } catch(e) {
        setPendingAttachments(prev => prev.filter(a => !(a.name === files[i].name && a.uploading)));
        toast(`❌ ${files[i].name} 上传失败: ${e.message}`);
      }
    }
  };
  
  // 粘贴板事件
  const handlePaste = (e) => {
    const items = e.clipboardData?.items || [];
    const files = [];
    for (const item of items) {
      if (item.kind === 'file') {
        const f = item.getAsFile();
        if (f) files.push(f);
      }
    }
    if (files.length > 0) {
      e.preventDefault();
      handleFiles(files);
    }
  };

  const submitPayment = async () => {
    if (!newPayment.carrier_id) { toast('⚠ 请选择快递公司'); return; }
    if (!newPayment.amount || parseFloat(newPayment.amount) <= 0) { toast('⚠ 请填写有效金额'); return; }
    const carrier = carriers.find(c => c.id === parseInt(newPayment.carrier_id));
    if (!carrier) { toast('⚠ 快递公司不存在'); return; }
    
    // 检查是否还有附件在上传
    if (pendingAttachments.some(a => a.uploading)) {
      toast('⚠ 还有附件正在上传，请稍等');
      return;
    }
    
    const row = {
      carrier_id: carrier.id, carrier_name: carrier.name,
      category: newPayment.category, amount: parseFloat(newPayment.amount),
      currency: newPayment.currency, payment_method: newPayment.payment_method,
      payment_date: newPayment.payment_date,
      invoice_no: newPayment.invoice_no || null,
      shipment_ref: newPayment.shipment_ref || null,
      paid_by: user.name + (user.alias ? ' ' + user.alias : ''),
      notes: newPayment.notes || null,
      attachments: pendingAttachments.map(a => ({ name: a.name, type: a.type, size: a.size, path: a.path, url: a.url })),
      updated_at: new Date().toISOString(),
    };
    try {
      if (editingPaymentId) {
        const { error } = await CLOUD.client.from('freight_payments').update(row).eq('id', editingPaymentId);
        if (error) throw error;
        toast('✓ 已更新支付记录');
      } else {
        const { error } = await CLOUD.client.from('freight_payments').insert(row);
        if (error) throw error;
        toast(`✓ 已录入支付记录${pendingAttachments.length > 0 ? ' (含 ' + pendingAttachments.length + ' 个凭证)' : ''}`);
      }
      setNewPayment({ carrier_id:'', category:'express', amount:'', currency:'CNY',
        payment_method:'bank', payment_date:new Date().toISOString().slice(0,10),
        invoice_no:'', shipment_ref:'', notes:'' });
      setPendingAttachments([]);
      setEditingPaymentId(null);
      loadAll();
    } catch(e) {
      const msg = e.message || '';
      if (msg.includes('schema cache') || msg.includes('does not exist') || msg.includes('PGRST')) {
        toast('⚠ 运费表还没建好', 'error');
        alert('❌ 保存失败：运费表还没在 Supabase 建好。\n\n请联系管理员（Nicole）：\n1. 打开 Supabase → SQL Editor\n2. 粘贴 freight_all_in_one.sql\n3. 点 ▶ Run\n4. 跑完后刷新此页面再试\n\n详细错误：' + msg);
      } else {
        toast('❌ 保存失败: ' + msg);
      }
    }
  };

  const editPayment = (p) => {
    setEditingPaymentId(p.id);
    setNewPayment({
      carrier_id: String(p.carrier_id || ''), category: p.category,
      amount: String(p.amount), currency: p.currency,
      payment_method: p.payment_method, payment_date: p.payment_date,
      invoice_no: p.invoice_no || '', shipment_ref: p.shipment_ref || '',
      notes: p.notes || '',
    });
    setPendingAttachments(p.attachments || []);  // 恢复已上传的附件
    document.querySelector('#freight-form-anchor')?.scrollIntoView({ behavior:'smooth' });
  };

  const deletePayment = async (p) => {
    if (!confirm(`确认删除这笔 ${p.carrier_name} ${p.currency} ${p.amount} 的支付记录？`)) return;
    try {
      const { error } = await CLOUD.client.from('freight_payments').update({ trashed: true }).eq('id', p.id);
      if (error) throw error;
      toast('✓ 已删除');
      loadAll();
    } catch(e) { toast('❌ 删除失败: ' + e.message); }
  };

  const [newCarrier, setNewCarrier] = useState({
    name:'', category:'express', bank_name:'', bank_account:'', beneficiary:'',
    alipay:'', wechat:'', paypal:'', pcard:'',
    contact_person:'', contact_phone:'', notes:'',
  });
  const [editingCarrierId, setEditingCarrierId] = useState(null);

  const submitCarrier = async () => {
    if (!newCarrier.name.trim()) { toast('⚠ 请填写公司名'); return; }
    try {
      const row = { ...newCarrier, name: newCarrier.name.trim(), updated_at: new Date().toISOString() };
      if (editingCarrierId) {
        const { error } = await CLOUD.client.from('freight_carriers').update(row).eq('id', editingCarrierId);
        if (error) throw error;
        toast('✓ 已更新');
      } else {
        const { error } = await CLOUD.client.from('freight_carriers').insert(row);
        if (error) throw error;
        toast('✓ 已添加 ' + newCarrier.name);
      }
      setNewCarrier({ name:'', category:'express', bank_name:'', bank_account:'', beneficiary:'',
        alipay:'', wechat:'', paypal:'', pcard:'',
        contact_person:'', contact_phone:'', notes:'' });
      setEditingCarrierId(null);
      loadAll();
    } catch(e) {
      const msg = e.message || '';
      if (msg.includes('schema cache') || msg.includes('does not exist') || msg.includes('PGRST')) {
        toast('⚠ 运费表还没建好，请先在 Supabase 跑 freight_all_in_one.sql', 'error');
        alert('❌ 保存失败：运费表还没在 Supabase 建好。\n\n请联系管理员（Nicole）：\n1. 打开 Supabase → SQL Editor\n2. 粘贴 freight_all_in_one.sql 内容\n3. 点 ▶ Run\n4. 跑完后刷新此页面再试\n\n详细错误：' + msg);
      } else {
        toast('❌ 保存失败: ' + msg);
      }
    }
  };

  const editCarrier = (c) => {
    setEditingCarrierId(c.id);
    setNewCarrier({ ...c });
    document.querySelector('#carrier-form-anchor')?.scrollIntoView({ behavior:'smooth' });
  };

  const deleteCarrier = async (c) => {
    if (!confirm(`确认删除快递公司「${c.name}」？\n历史支付记录的 carrier_name 会保留。`)) return;
    try {
      const { error } = await CLOUD.client.from('freight_carriers').delete().eq('id', c.id);
      if (error) throw error;
      toast('✓ 已删除');
      loadAll();
    } catch(e) { toast('❌ 删除失败: ' + e.message); }
  };

  const filteredPayments = useMemo(() => {
    return payments.filter(p => {
      if (filterMonth && !String(p.payment_date).startsWith(filterMonth)) return false;
      if (filterCarrier && p.carrier_name !== filterCarrier) return false;
      if (filterCategory && p.category !== filterCategory) return false;
      if (filterMethod && p.payment_method !== filterMethod) return false;
      return true;
    });
  }, [payments, filterMonth, filterCarrier, filterCategory, filterMethod]);

  const summary = useMemo(() => {
    const cur = filteredPayments;
    const totalCNY = cur.filter(p => p.currency === 'CNY').reduce((s, p) => s + Number(p.amount), 0);
    const totalUSD = cur.filter(p => p.currency === 'USD').reduce((s, p) => s + Number(p.amount), 0);
    const byCarrier = {};
    const byCategory = { express: 0, air: 0, sea: 0, postal: 0 };
    const byMethod = {};
    cur.forEach(p => {
      const amt = Number(p.amount);
      byCarrier[p.carrier_name] = (byCarrier[p.carrier_name] || 0) + amt;
      byCategory[p.category] = (byCategory[p.category] || 0) + amt;
      byMethod[p.payment_method] = (byMethod[p.payment_method] || 0) + amt;
    });
    return { totalCNY, totalUSD, byCarrier, byCategory, byMethod, count: cur.length };
  }, [filteredPayments]);

  const carrierNames = useMemo(() => [...new Set(payments.map(p => p.carrier_name))].sort(), [payments]);
  
  // 凭证查看 modal
  const [viewingAttachments, setViewingAttachments] = useState(null);
  
  // 📥 导出 PDF（用 window.print）
  const exportPDF = () => {
    const win = window.open('', '_blank');
    if (!win) { toast('⚠ 浏览器拦截了弹窗，请允许'); return; }
    const monthLabel = filterMonth || '全部时间';
    const carrierLabel = filterCarrier || '全部';
    const categoryLabel2 = filterCategory ? CATEGORIES.find(c => c.v === filterCategory)?.label : '全部';
    const methodLabel2 = filterMethod ? PAYMENT_METHODS.find(m => m.v === filterMethod)?.label : '全部';
    const rows = filteredPayments.map(p => `
      <tr>
        <td>${p.payment_date}</td>
        <td><strong>${p.carrier_name}</strong></td>
        <td>${categoryLabel(p.category)}</td>
        <td style="text-align:right;font-family:monospace;color:#0071e3;font-weight:500;">${p.currency === 'USD' ? '$' : '¥'} ${Number(p.amount).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}</td>
        <td>${methodLabel(p.payment_method)}</td>
        <td style="font-size:11px;font-family:monospace;">${p.invoice_no || '-'}</td>
        <td style="font-size:11px;font-family:monospace;">${p.shipment_ref || '-'}</td>
        <td style="font-size:11px;color:#666;">${p.paid_by}</td>
        <td style="font-size:10px;color:#888;">${p.notes ? p.notes.replace(/</g, '&lt;') : '-'}</td>
        <td style="text-align:center;">${(p.attachments?.length || 0) > 0 ? '📎 ' + p.attachments.length : '-'}</td>
      </tr>
    `).join('');
    
    // 按公司汇总
    const byCarrier = Object.entries(summary.byCarrier).sort((a,b) => b[1] - a[1]);
    const carrierRows = byCarrier.map(([n, a]) => {
      const pct = summary.totalCNY > 0 ? (a / summary.totalCNY * 100) : 0;
      return `<tr><td><strong>${n}</strong></td><td style="text-align:right;font-family:monospace;color:#0071e3;">¥ ${a.toFixed(2)}</td><td style="text-align:right;">${pct.toFixed(1)}%</td></tr>`;
    }).join('');
    
    const categoryRows = CATEGORIES.map(c => {
      const a = summary.byCategory[c.v] || 0;
      const pct = summary.totalCNY > 0 ? (a / summary.totalCNY * 100) : 0;
      return `<tr><td>${c.label}</td><td style="text-align:right;font-family:monospace;">¥ ${a.toFixed(2)}</td><td style="text-align:right;">${pct.toFixed(1)}%</td></tr>`;
    }).join('');
    
    const methodRows = Object.entries(summary.byMethod).sort((a,b) => b[1] - a[1]).map(([m, a]) => {
      const pct = summary.totalCNY > 0 ? (a / summary.totalCNY * 100) : 0;
      return `<tr><td>${methodLabel(m)}</td><td style="text-align:right;font-family:monospace;">¥ ${a.toFixed(2)}</td><td style="text-align:right;">${pct.toFixed(1)}%</td></tr>`;
    }).join('');
    
    win.document.write(`<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><title>运费支付报表 ${monthLabel}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600;700&display=swap" rel="stylesheet">
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { font-family: "Noto Sans SC", -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans CN", "Noto Sans CJK SC", "WenQuanYi Micro Hei", "Heiti SC", SimHei, sans-serif; color:#1d1d1f; padding:30px; font-size:13px; line-height:1.5; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .header { border-bottom: 2px solid #0071e3; padding-bottom:12px; margin-bottom:20px; }
  .header h1 { font-size:24px; font-weight:600; letter-spacing:-.5px; }
  .header .meta { color:#666; font-size:12px; margin-top:6px; }
  .filters { background:#f5f5f7; padding:10px 14px; border-radius:8px; margin-bottom:20px; font-size:12px; color:#555; }
  .filters span { margin-right:18px; }
  .summary { display:grid; grid-template-columns: repeat(3, 1fr); gap:14px; margin-bottom:24px; }
  .summary-card { background:linear-gradient(135deg,#e8f1fd,#e8f7ec); padding:16px; border-radius:10px; }
  .summary-card .label { font-size:10px; text-transform:uppercase; letter-spacing:1px; color:#666; }
  .summary-card .value { font-size:24px; font-weight:600; color:#0071e3; margin-top:4px; }
  h2 { font-size:15px; margin: 22px 0 10px; padding-bottom:6px; border-bottom:1px solid #e8e6e0; }
  table { width:100%; border-collapse:collapse; font-size:11px; }
  th { background:#f5f5f7; padding:7px 8px; text-align:left; font-weight:600; color:#555; border-bottom:1px solid #e8e6e0; }
  td { padding:7px 8px; border-bottom:1px solid #f0eee8; }
  .footer { margin-top:30px; padding-top:14px; border-top:1px solid #e8e6e0; font-size:10px; color:#999; text-align:center; }
  .row-2col { display:grid; grid-template-columns: 1fr 1fr; gap:20px; }
  @media print { body { padding:15px; } .summary { gap:10px; } }
</style></head><body>

<div class="header">
  <h1>📊 运费支付报表</h1>
  <div class="meta">
    统计周期：<strong>${monthLabel}</strong> · 
    导出时间：${new Date().toLocaleString('zh-CN')} · 
    操作人：${user.name}${user.alias ? ' ' + user.alias : ''}
  </div>
</div>

<div class="filters">
  <strong>筛选条件：</strong>
  <span>📅 ${monthLabel}</span>
  <span>🚛 快递公司: ${carrierLabel}</span>
  <span>📦 运输方式: ${categoryLabel2}</span>
  <span>💳 支付方式: ${methodLabel2}</span>
</div>

<div class="summary">
  <div class="summary-card">
    <div class="label">总支出 CNY</div>
    <div class="value">¥ ${summary.totalCNY.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}</div>
  </div>
  ${summary.totalUSD > 0 ? `<div class="summary-card">
    <div class="label">总支出 USD</div>
    <div class="value">$ ${summary.totalUSD.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}</div>
  </div>` : ''}
  <div class="summary-card">
    <div class="label">支付笔数</div>
    <div class="value">${summary.count}</div>
  </div>
</div>

<div class="row-2col">
  <div>
    <h2>📊 按快递公司</h2>
    <table>
      <thead><tr><th>公司名</th><th style="text-align:right;">金额</th><th style="text-align:right;width:60px;">占比</th></tr></thead>
      <tbody>${carrierRows || '<tr><td colspan=3 style="text-align:center;color:#999;padding:20px;">暂无数据</td></tr>'}</tbody>
    </table>
  </div>
  <div>
    <h2>🚚 按运输方式</h2>
    <table>
      <thead><tr><th>类别</th><th style="text-align:right;">金额</th><th style="text-align:right;width:60px;">占比</th></tr></thead>
      <tbody>${categoryRows}</tbody>
    </table>
  </div>
</div>

<h2>💳 按支付方式</h2>
<table>
  <thead><tr><th>方式</th><th style="text-align:right;">金额</th><th style="text-align:right;width:60px;">占比</th></tr></thead>
  <tbody>${methodRows || '<tr><td colspan=3 style="text-align:center;color:#999;padding:20px;">暂无数据</td></tr>'}</tbody>
</table>

<h2>💸 支付明细（${filteredPayments.length} 笔）</h2>
<table>
  <thead><tr>
    <th>日期</th><th>快递公司</th><th>运输</th><th style="text-align:right;">金额</th>
    <th>支付方式</th><th>账单号</th><th>订单</th><th>操作人</th><th>备注</th><th>凭证</th>
  </tr></thead>
  <tbody>${rows || '<tr><td colspan=10 style="text-align:center;color:#999;padding:20px;">暂无支付记录</td></tr>'}</tbody>
</table>

<div class="footer">
  本报表由 <strong>统一工作台 · 运费支付管理</strong> 自动生成 · 数据来源 Supabase 团队云
</div>

<scr` + `ipt>
  window.onload = () => {
    const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    fontsReady.then(() => setTimeout(() => window.print(), 400));
  };
</scr` + `ipt>

</body></html>`);
    win.document.close();
    toast('✓ PDF 报表已生成，请在新窗口选择"另存为 PDF"');
  };

  return (
    <div className="space-y-5 fade-in">
      <div className="paper rounded-2xl p-4">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <button className={`tab-btn ${section==='payments'?'active':''}`} onClick={() => setSection('payments')}>
            💸 支付记录 ({payments.length})
          </button>
          <button className={`tab-btn ${section==='carriers'?'active':''}`} onClick={() => setSection('carriers')}>
            🚛 快递公司 ({carriers.length})
          </button>
          <button className={`tab-btn ${section==='summary'?'active':''}`} onClick={() => setSection('summary')}>
            📊 统计汇总
          </button>
          <div style={{flex:1}}/>
          <button className="btn-sec" onClick={loadAll} disabled={loading}>
            {loading ? '⏳ 加载中…' : '🔄 刷新'}
          </button>
        </div>
        {!cloudOn && (
          <div className="rounded-lg p-3 text-xs" style={{background:'#fef3c7', color:'#92400e', lineHeight:1.65}}>
            ⚠ 此模块需要云同步。请到 <strong>设置 → 云同步设置</strong> 启用 Supabase 同步。
          </div>
        )}
      </div>

      {section === 'payments' && (
        <>
          <div className="paper rounded-2xl p-6" id="freight-form-anchor">
            <div className="font-display" style={{fontSize:17, fontWeight:600, letterSpacing:'-.022em', marginBottom:14}}>
              {editingPaymentId ? '✏️ 编辑支付记录' : '➕ 录入新的支付'}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>支付日期 *</label>
                <input type="date" value={newPayment.payment_date} onChange={e => setNewPayment(p => ({...p, payment_date:e.target.value}))} />
              </div>
              <div>
                <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>快递公司 *</label>
                <select value={newPayment.carrier_id} onChange={e => setNewPayment(p => ({...p, carrier_id:e.target.value}))}>
                  <option value="">-- 选择 --</option>
                  {carriers.filter(c => c.active !== false).map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>运输方式 *</label>
                <select value={newPayment.category} onChange={e => setNewPayment(p => ({...p, category:e.target.value}))}>
                  {CATEGORIES.map(c => <option key={c.v} value={c.v}>{c.label}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>支付方式 *</label>
                <select value={newPayment.payment_method} onChange={e => setNewPayment(p => ({...p, payment_method:e.target.value}))}>
                  {PAYMENT_METHODS.map(m => <option key={m.v} value={m.v}>{m.label}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>金额 *</label>
                <div style={{display:'flex', gap:6}}>
                  <input type="number" step="0.01" value={newPayment.amount} onChange={e => setNewPayment(p => ({...p, amount:e.target.value}))} placeholder="0.00" autoComplete="off" />
                  <select value={newPayment.currency} onChange={e => setNewPayment(p => ({...p, currency:e.target.value}))} style={{width:90, flexShrink:0}}>
                    <option value="CNY">CNY ¥</option>
                    <option value="USD">USD $</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>账单/发票号</label>
                <input value={newPayment.invoice_no} onChange={e => setNewPayment(p => ({...p, invoice_no:e.target.value}))} placeholder="INV-2025-001" autoComplete="off" />
              </div>
              <div>
                <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>关联订单/批次</label>
                <input value={newPayment.shipment_ref} onChange={e => setNewPayment(p => ({...p, shipment_ref:e.target.value}))} placeholder="PO-1234 / 批次2" autoComplete="off" />
              </div>
              <div>
                <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>操作人</label>
                <input value={user.name + (user.alias ? ' ' + user.alias : '')} disabled style={{background:'var(--bg-elevated)', color:'var(--ink-3)'}} />
              </div>
            </div>
            <div style={{marginTop:12}}>
              <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>备注</label>
              <textarea value={newPayment.notes} onChange={e => setNewPayment(p => ({...p, notes:e.target.value}))} placeholder="可选" rows={2} style={{width:'100%', resize:'vertical'}} />
            </div>
            
            {/* 📎 付款凭证 - 支持拖拽 / 粘贴 / 点击上传 */}
            <div style={{marginTop:14}}>
              <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>
                📎 付款凭证 <span style={{color:'var(--ink-4)', fontWeight:400, marginLeft:6}}>支持图片/PDF · 拖拽 / Ctrl+V 粘贴 / 点击上传</span>
              </label>
              <div
                ref={dropZoneRef}
                onPaste={handlePaste}
                onDragOver={(e) => { e.preventDefault(); e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-soft)'; }}
                onDragLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line-strong)'; e.currentTarget.style.background = 'var(--bg-soft)'; }}
                onDrop={(e) => {
                  e.preventDefault();
                  e.currentTarget.style.borderColor = 'var(--line-strong)';
                  e.currentTarget.style.background = 'var(--bg-soft)';
                  handleFiles(e.dataTransfer.files);
                }}
                onClick={() => fileInputRef.current?.click()}
                tabIndex={0}
                style={{
                  border: '2px dashed var(--line-strong)',
                  borderRadius: 'var(--radius)',
                  padding: '20px',
                  background: 'var(--bg-soft)',
                  cursor: 'pointer',
                  transition: 'all .15s',
                  outline: 'none',
                }}
              >
                {pendingAttachments.length === 0 ? (
                  <div style={{textAlign:'center', color:'var(--ink-3)', fontSize:13}}>
                    📤 拖拽文件到此处<br/>
                    <span style={{fontSize:11, color:'var(--ink-4)'}}>或按 Ctrl+V 粘贴截图 · 或点击选择文件</span>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {pendingAttachments.map((att, i) => (
                      <div key={i} style={{position:'relative', borderRadius:'var(--radius-sm)', overflow:'hidden', background:'white', border:'1px solid var(--line)'}}>
                        {att.url && att.type?.startsWith('image/') ? (
                          <img src={att.url} alt={att.name} style={{width:'100%', height:80, objectFit:'cover', display:'block'}} />
                        ) : att.url && att.type === 'application/pdf' ? (
                          <div style={{padding:20, textAlign:'center', background:'#fef0f0', color:'#dc2626', fontSize:30}}>📄</div>
                        ) : (
                          <div style={{padding:20, textAlign:'center', background:'#f5f5f7', color:'var(--ink-3)', fontSize:24}}>
                            {att.uploading ? '⏳' : '📄'}
                          </div>
                        )}
                        <div style={{padding:'4px 6px', fontSize:10, color:'var(--ink-3)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', textAlign:'center'}}>
                          {att.uploading ? '上传中...' : att.name}
                        </div>
                        {!att.uploading && (
                          <button onClick={(e) => { e.stopPropagation(); setPendingAttachments(prev => prev.filter((_, j) => j !== i)); }}
                            style={{position:'absolute', top:2, right:2, width:18, height:18, borderRadius:'50%', background:'rgba(0,0,0,.6)', color:'white', border:'none', cursor:'pointer', fontSize:10, lineHeight:1, padding:0, display:'flex', alignItems:'center', justifyContent:'center'}}
                            title="移除">×</button>
                        )}
                      </div>
                    ))}
                    <div onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                      style={{minHeight:100, border:'1.5px dashed var(--line-strong)', borderRadius:'var(--radius-sm)', display:'flex', alignItems:'center', justifyContent:'center', color:'var(--ink-3)', fontSize:11, cursor:'pointer'}}>
                      + 添加更多
                    </div>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*,application/pdf"
                  style={{display:'none'}}
                  onChange={(e) => handleFiles(e.target.files)}
                />
              </div>
            </div>
            
            <div style={{display:'flex', gap:10, marginTop:14}}>
              <button className="btn-pri" onClick={submitPayment}>
                {editingPaymentId ? '💾 更新记录' : '✓ 录入支付'}
              </button>
              {editingPaymentId && (
                <button className="btn-sec" onClick={() => {
                  setEditingPaymentId(null);
                  setNewPayment({ carrier_id:'', category:'express', amount:'', currency:'CNY',
                    payment_method:'bank', payment_date:new Date().toISOString().slice(0,10),
                    invoice_no:'', shipment_ref:'', notes:'' });
                  setPendingAttachments([]);
                }}>取消编辑</button>
              )}
            </div>
          </div>

          <div className="paper rounded-2xl p-4">
            <div className="flex flex-wrap items-end gap-3">
              <div>
                <label className="block text-[11px]" style={{color:'var(--ink-3)'}}>月份</label>
                <input type="month" value={filterMonth} onChange={e => setFilterMonth(e.target.value)} style={{width:160}} />
              </div>
              <div>
                <label className="block text-[11px]" style={{color:'var(--ink-3)'}}>快递公司</label>
                <select value={filterCarrier} onChange={e => setFilterCarrier(e.target.value)} style={{width:140}}>
                  <option value="">全部</option>
                  {carrierNames.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[11px]" style={{color:'var(--ink-3)'}}>运输方式</label>
                <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} style={{width:120}}>
                  <option value="">全部</option>
                  {CATEGORIES.map(c => <option key={c.v} value={c.v}>{c.label}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[11px]" style={{color:'var(--ink-3)'}}>支付方式</label>
                <select value={filterMethod} onChange={e => setFilterMethod(e.target.value)} style={{width:140}}>
                  <option value="">全部</option>
                  {PAYMENT_METHODS.map(m => <option key={m.v} value={m.v}>{m.label}</option>)}
                </select>
              </div>
              <div style={{flex:1}}/>
              <button className="btn-sec" onClick={() => {
                setFilterMonth(''); setFilterCarrier(''); setFilterCategory(''); setFilterMethod('');
              }}>清除筛选</button>
            </div>
          </div>

          {filteredPayments.length > 0 && (
            <div className="paper rounded-2xl p-5" style={{background:'linear-gradient(135deg, rgba(0,113,227,.06), rgba(52,199,89,.06))'}}>
              <div className="flex flex-wrap items-baseline gap-6">
                <div>
                  <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:500, textTransform:'uppercase', letterSpacing:'.05em'}}>
                    {filterMonth || '全部'} 总支出
                  </div>
                  <div className="font-display tabular-nums" style={{fontSize:30, fontWeight:600, color:'var(--accent)', letterSpacing:'-.022em'}}>
                    ¥ {summary.totalCNY.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}
                    {summary.totalUSD > 0 && <span style={{fontSize:14, color:'var(--ink-3)', marginLeft:10}}>+ $ {summary.totalUSD.toFixed(2)}</span>}
                  </div>
                </div>
                <div>
                  <div style={{fontSize:11, color:'var(--ink-3)', fontWeight:500, textTransform:'uppercase', letterSpacing:'.05em'}}>笔数</div>
                  <div className="font-display tabular-nums" style={{fontSize:24, fontWeight:500, color:'var(--ink)'}}>{summary.count}</div>
                </div>
              </div>
            </div>
          )}

          <div className="paper rounded-2xl overflow-hidden">
            <div style={{overflow:'auto'}}>
              <table>
                <thead>
                  <tr>
                    <th style={{width:90}}>日期</th>
                    <th style={{width:90}}>快递公司</th>
                    <th style={{width:80}}>方式</th>
                    <th style={{width:110, textAlign:'right'}}>金额</th>
                    <th style={{width:90}}>支付</th>
                    <th style={{width:60, textAlign:'center'}}>凭证</th>
                    <th>账单号</th>
                    <th>订单/批次</th>
                    <th style={{width:90}}>操作人</th>
                    <th style={{width:90}}>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPayments.map(p => (
                    <tr key={p.id} className="row-hover">
                      <td className="font-mono tabular-nums">{p.payment_date}</td>
                      <td style={{fontWeight:500}}>{p.carrier_name}</td>
                      <td><span className="tag tag-info">{categoryLabel(p.category)}</span></td>
                      <td className="font-mono tabular-nums" style={{textAlign:'right', fontWeight:500, color:'var(--accent)'}}>
                        {p.currency === 'USD' ? '$' : '¥'} {Number(p.amount).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}
                      </td>
                      <td style={{fontSize:12}}>{methodLabel(p.payment_method)}</td>
                      <td style={{textAlign:'center'}}>
                        {(p.attachments?.length || 0) > 0 ? (
                          <button className="btn-ghost" onClick={() => setViewingAttachments(p)} title={`查看 ${p.attachments.length} 个凭证`} style={{padding:'3px 8px', color:'var(--accent)'}}>
                            📎 {p.attachments.length}
                          </button>
                        ) : (
                          <span style={{color:'var(--ink-4)'}}>—</span>
                        )}
                      </td>
                      <td className="font-mono" style={{fontSize:11, color:'var(--ink-3)'}}>{p.invoice_no || '-'}</td>
                      <td className="font-mono" style={{fontSize:11, color:'var(--ink-3)'}}>{p.shipment_ref || '-'}</td>
                      <td style={{fontSize:11, color:'var(--ink-3)'}}>{p.paid_by}</td>
                      <td>
                        <button className="btn-ghost" onClick={() => editPayment(p)} title="编辑" style={{padding:'3px 6px'}}><Icon name="edit" className="w-4 h-4"/></button>
                        <button className="btn-ghost" onClick={() => deletePayment(p)} title="删除" style={{padding:'3px 6px', color:'var(--bad)'}}><Icon name="trash" className="w-4 h-4"/></button>
                      </td>
                    </tr>
                  ))}
                  {filteredPayments.length === 0 && (
                    <tr><td colSpan={10} style={{textAlign:'center', padding:'40px', color:'var(--ink-4)'}}>
                      {loading ? '⏳ 加载中…' : '暂无符合条件的记录'}
                    </td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {section === 'carriers' && (
        <>
          <div className="paper rounded-2xl p-6" id="carrier-form-anchor">
            <div className="font-display" style={{fontSize:17, fontWeight:600, letterSpacing:'-.022em', marginBottom:14}}>
              {editingCarrierId ? '✏️ 编辑快递公司' : '➕ 添加快递公司'}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>公司名 *</label>
                <input value={newCarrier.name} onChange={e => setNewCarrier(c => ({...c, name:e.target.value}))} placeholder="如：正石、昌晖" autoComplete="off" />
              </div>
              <div>
                <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>主要业务</label>
                <select value={newCarrier.category} onChange={e => setNewCarrier(c => ({...c, category:e.target.value}))}>
                  {CATEGORIES.map(c => <option key={c.v} value={c.v}>{c.label}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>联系人</label>
                <input value={newCarrier.contact_person} onChange={e => setNewCarrier(c => ({...c, contact_person:e.target.value}))} placeholder="王经理" autoComplete="off" />
              </div>
              <div>
                <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>联系电话</label>
                <input value={newCarrier.contact_phone} onChange={e => setNewCarrier(c => ({...c, contact_phone:e.target.value}))} placeholder="138xxxxxxxx" autoComplete="off" />
              </div>
              <div>
                <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>收款人</label>
                <input value={newCarrier.beneficiary} onChange={e => setNewCarrier(c => ({...c, beneficiary:e.target.value}))} placeholder="深圳市XX物流" autoComplete="off" />
              </div>
              <div>
                <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>开户行</label>
                <input value={newCarrier.bank_name} onChange={e => setNewCarrier(c => ({...c, bank_name:e.target.value}))} placeholder="工商银行XX支行" autoComplete="off" />
              </div>
            </div>
            <div style={{marginTop:14, padding:14, background:'var(--bg-soft)', borderRadius:'var(--radius)'}}>
              <div style={{fontSize:11, fontWeight:500, color:'var(--ink-3)', marginBottom:8, letterSpacing:'-.003em'}}>💰 收款账号（可填多种渠道）</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] mb-1" style={{color:'var(--ink-3)'}}>🏦 银行账号</label>
                  <input value={newCarrier.bank_account} onChange={e => setNewCarrier(c => ({...c, bank_account:e.target.value}))} placeholder="6222 0202 ..." autoComplete="off" />
                </div>
                <div>
                  <label className="block text-[11px] mb-1" style={{color:'var(--ink-3)'}}>💙 支付宝</label>
                  <input value={newCarrier.alipay} onChange={e => setNewCarrier(c => ({...c, alipay:e.target.value}))} placeholder="13800138000 / xxx@xxx.com" autoComplete="off" />
                </div>
                <div>
                  <label className="block text-[11px] mb-1" style={{color:'var(--ink-3)'}}>💚 微信</label>
                  <input value={newCarrier.wechat} onChange={e => setNewCarrier(c => ({...c, wechat:e.target.value}))} placeholder="微信号 / 商户号" autoComplete="off" />
                </div>
                <div>
                  <label className="block text-[11px] mb-1" style={{color:'var(--ink-3)'}}>🔵 PayPal</label>
                  <input value={newCarrier.paypal} onChange={e => setNewCarrier(c => ({...c, paypal:e.target.value}))} placeholder="paypal@xxx.com" autoComplete="off" />
                </div>
                <div>
                  <label className="block text-[11px] mb-1" style={{color:'var(--ink-3)'}}>💳 P 卡/信用卡</label>
                  <input value={newCarrier.pcard} onChange={e => setNewCarrier(c => ({...c, pcard:e.target.value}))} placeholder="卡号末 4 位" autoComplete="off" />
                </div>
              </div>
            </div>
            <div style={{marginTop:12}}>
              <label className="block text-[12px] mb-1.5" style={{color:'var(--ink-3)', fontWeight:500}}>备注</label>
              <textarea value={newCarrier.notes} onChange={e => setNewCarrier(c => ({...c, notes:e.target.value}))} placeholder="渠道特点 / 价格档位 / 配合度" rows={2} style={{width:'100%', resize:'vertical'}} />
            </div>
            <div style={{display:'flex', gap:10, marginTop:14}}>
              <button className="btn-pri" onClick={submitCarrier}>
                {editingCarrierId ? '💾 更新公司' : '✓ 添加公司'}
              </button>
              {editingCarrierId && (
                <button className="btn-sec" onClick={() => {
                  setEditingCarrierId(null);
                  setNewCarrier({ name:'', category:'express', bank_name:'', bank_account:'', beneficiary:'',
                    alipay:'', wechat:'', paypal:'', pcard:'',
                    contact_person:'', contact_phone:'', notes:'' });
                }}>取消编辑</button>
              )}
            </div>
          </div>

          <div className="paper rounded-2xl overflow-hidden">
            <div style={{overflow:'auto'}}>
              <table>
                <thead>
                  <tr>
                    <th style={{width:120}}>公司名</th>
                    <th style={{width:90}}>业务</th>
                    <th>联系人</th>
                    <th>收款人 / 开户行</th>
                    <th>渠道</th>
                    <th>本月支出</th>
                    <th style={{width:90}}>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {carriers.map(c => {
                    const monthly = payments
                      .filter(p => p.carrier_name === c.name && String(p.payment_date).startsWith(filterMonth || new Date().toISOString().slice(0,7)))
                      .reduce((s, p) => s + Number(p.amount), 0);
                    const channels = [
                      c.bank_account && '🏦',
                      c.alipay && '💙',
                      c.wechat && '💚',
                      c.paypal && '🔵',
                      c.pcard && '💳',
                    ].filter(Boolean).join(' ');
                    return (
                      <tr key={c.id} className="row-hover">
                        <td style={{fontWeight:500}}>{c.name}</td>
                        <td><span className="tag tag-info">{categoryLabel(c.category)}</span></td>
                        <td style={{fontSize:12, color:'var(--ink-2)'}}>
                          {c.contact_person && <div>{c.contact_person}</div>}
                          {c.contact_phone && <div className="font-mono" style={{fontSize:11, color:'var(--ink-3)'}}>{c.contact_phone}</div>}
                        </td>
                        <td style={{fontSize:12, color:'var(--ink-2)'}}>
                          {c.beneficiary && <div>{c.beneficiary}</div>}
                          {c.bank_name && <div style={{fontSize:11, color:'var(--ink-3)'}}>{c.bank_name}</div>}
                        </td>
                        <td style={{fontSize:14, letterSpacing:'3px'}}>{channels || '-'}</td>
                        <td className="font-mono tabular-nums" style={{fontWeight:500, color: monthly > 0 ? 'var(--accent)' : 'var(--ink-4)'}}>
                          ¥ {monthly.toFixed(2)}
                        </td>
                        <td>
                          <button className="btn-ghost" onClick={() => editCarrier(c)} title="编辑" style={{padding:'3px 6px'}}><Icon name="edit" className="w-4 h-4"/></button>
                          <button className="btn-ghost" onClick={() => deleteCarrier(c)} title="删除" style={{padding:'3px 6px', color:'var(--bad)'}}><Icon name="trash" className="w-4 h-4"/></button>
                        </td>
                      </tr>
                    );
                  })}
                  {carriers.length === 0 && (
                    <tr><td colSpan={7} style={{textAlign:'center', padding:'40px', color:'var(--ink-4)'}}>
                      {loading ? '⏳ 加载中…' : '尚未添加快递公司，点上方表单添加'}
                    </td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {section === 'summary' && (
        <>
          <div className="paper rounded-2xl p-4">
            <div className="flex flex-wrap items-center gap-3">
              <label style={{fontSize:13, color:'var(--ink-3)'}}>统计月份：</label>
              <input type="month" value={filterMonth} onChange={e => setFilterMonth(e.target.value)} style={{width:160}} />
              <button className="btn-sec" onClick={() => setFilterMonth('')}>全部时间</button>
              <div style={{flex:1}}/>
              <div style={{fontSize:13, color:'var(--ink-3)'}}>共 <strong style={{color:'var(--ink)'}}>{summary.count}</strong> 笔记录</div>
            </div>
          </div>

          <div className="paper rounded-2xl p-6" style={{background:'linear-gradient(135deg, rgba(0,113,227,.08), rgba(52,199,89,.08))'}}>
            <div className="text-center">
              <div style={{fontSize:12, color:'var(--ink-3)', fontWeight:500, textTransform:'uppercase', letterSpacing:'.1em'}}>
                {filterMonth || '全部时间'} 总运费支出
              </div>
              <div className="font-display tabular-nums" style={{fontSize:56, fontWeight:600, color:'var(--accent)', letterSpacing:'-.022em', lineHeight:1.1, marginTop:8}}>
                ¥ {summary.totalCNY.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})}
              </div>
              {summary.totalUSD > 0 && (
                <div className="font-display tabular-nums" style={{fontSize:20, color:'var(--ink-3)', marginTop:6}}>
                  + $ {summary.totalUSD.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2})} USD
                </div>
              )}
            </div>
          </div>

          <div className="paper rounded-2xl p-6">
            <div className="font-display" style={{fontSize:16, fontWeight:600, letterSpacing:'-.022em', marginBottom:14}}>
              📊 按快递公司占比
            </div>
            {Object.entries(summary.byCarrier).sort((a,b) => b[1] - a[1]).map(([name, amt]) => {
              const pct = summary.totalCNY > 0 ? (amt / summary.totalCNY) * 100 : 0;
              return (
                <div key={name} style={{marginBottom:12}}>
                  <div className="flex items-center justify-between text-[13px]" style={{marginBottom:4}}>
                    <span style={{fontWeight:500}}>{name}</span>
                    <span>
                      <span className="font-mono tabular-nums" style={{color:'var(--accent)', fontWeight:600}}>¥ {amt.toFixed(2)}</span>
                      <span style={{color:'var(--ink-3)', marginLeft:8}}>{pct.toFixed(1)}%</span>
                    </span>
                  </div>
                  <div className="bar-track" style={{height:8}}>
                    <div className="bar-fill" style={{width: pct + '%'}}/>
                  </div>
                </div>
              );
            })}
            {Object.keys(summary.byCarrier).length === 0 && (
              <div style={{textAlign:'center', color:'var(--ink-4)', padding:'40px'}}>暂无数据</div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="paper rounded-2xl p-6">
              <div className="font-display" style={{fontSize:16, fontWeight:600, letterSpacing:'-.022em', marginBottom:14}}>
                🚚 按运输方式
              </div>
              {CATEGORIES.map(c => {
                const amt = summary.byCategory[c.v] || 0;
                const pct = summary.totalCNY > 0 ? (amt / summary.totalCNY) * 100 : 0;
                return (
                  <div key={c.v} style={{marginBottom:12}}>
                    <div className="flex items-center justify-between text-[13px]" style={{marginBottom:4}}>
                      <span>{c.label}</span>
                      <span>
                        <span className="font-mono tabular-nums" style={{color:'var(--accent)', fontWeight:600}}>¥ {amt.toFixed(2)}</span>
                        <span style={{color:'var(--ink-3)', marginLeft:8}}>{pct.toFixed(1)}%</span>
                      </span>
                    </div>
                    <div className="bar-track" style={{height:6}}>
                      <div className="bar-fill" style={{width: pct + '%'}}/>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="paper rounded-2xl p-6">
              <div className="font-display" style={{fontSize:16, fontWeight:600, letterSpacing:'-.022em', marginBottom:14}}>
                💳 按支付方式
              </div>
              {Object.entries(summary.byMethod).sort((a,b) => b[1] - a[1]).map(([m, amt]) => {
                const pct = summary.totalCNY > 0 ? (amt / summary.totalCNY) * 100 : 0;
                return (
                  <div key={m} style={{marginBottom:12}}>
                    <div className="flex items-center justify-between text-[13px]" style={{marginBottom:4}}>
                      <span>{methodLabel(m)}</span>
                      <span>
                        <span className="font-mono tabular-nums" style={{color:'var(--accent)', fontWeight:600}}>¥ {amt.toFixed(2)}</span>
                        <span style={{color:'var(--ink-3)', marginLeft:8}}>{pct.toFixed(1)}%</span>
                      </span>
                    </div>
                    <div className="bar-track" style={{height:6}}>
                      <div className="bar-fill" style={{width: pct + '%'}}/>
                    </div>
                  </div>
                );
              })}
              {Object.keys(summary.byMethod).length === 0 && (
                <div style={{textAlign:'center', color:'var(--ink-4)', padding:'40px'}}>暂无数据</div>
              )}
            </div>
          </div>

          <div className="paper rounded-2xl p-4 text-center" style={{display:'flex', gap:10, justifyContent:'center', flexWrap:'wrap'}}>
            <button className="btn-pri" onClick={exportPDF}>
              🖨️ 导出 PDF 报表（含图表汇总）
            </button>
            <button className="btn-sec" onClick={() => {
              const rows = [['日期','快递公司','运输方式','金额','货币','支付方式','账单号','订单','操作人','备注','凭证数']];
              filteredPayments.forEach(p => rows.push([
                p.payment_date, p.carrier_name, categoryLabel(p.category),
                p.amount, p.currency, methodLabel(p.payment_method),
                p.invoice_no||'', p.shipment_ref||'', p.paid_by, p.notes||'',
                p.attachments?.length || 0,
              ]));
              const csv = rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
              const blob = new Blob(['\uFEFF' + csv], { type:'text/csv;charset=utf-8' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url; a.download = `运费支付_${filterMonth || 'all'}.csv`; a.click();
              URL.revokeObjectURL(url);
              toast('✓ CSV 已导出');
            }}>📊 导出 CSV（Excel 可打开）</button>
          </div>
        </>
      )}
      
      {/* 凭证查看 Modal */}
      {viewingAttachments && (
        <div onClick={() => setViewingAttachments(null)}
          style={{position:'fixed', inset:0, background:'rgba(0,0,0,.7)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center', padding:24}}>
          <div onClick={e => e.stopPropagation()}
            style={{background:'white', borderRadius:'var(--radius-lg)', maxWidth:1000, width:'100%', maxHeight:'90vh', overflowY:'auto', overflowX:'hidden', padding:24}}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16}}>
              <div>
                <div className="font-display" style={{fontSize:18, fontWeight:600, letterSpacing:'-.022em'}}>
                  📎 付款凭证 - {viewingAttachments.carrier_name}
                </div>
                <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>
                  {viewingAttachments.payment_date} · {viewingAttachments.currency === 'USD' ? '$' : '¥'} {Number(viewingAttachments.amount).toLocaleString()} · {methodLabel(viewingAttachments.payment_method)}
                </div>
              </div>
              <button className="btn-sec" onClick={() => setViewingAttachments(null)} style={{padding:'4px 12px'}}>×</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {(viewingAttachments.attachments || []).map((att, i) => (
                <div key={i} style={{border:'1px solid var(--line)', borderRadius:'var(--radius)', overflow:'hidden', background:'var(--bg-soft)'}}>
                  {att.type?.startsWith('image/') ? (
                    <a href={att.url} target="_blank" rel="noopener">
                      <img src={att.url} alt={att.name} style={{width:'100%', maxHeight:400, objectFit:'contain', background:'white', display:'block'}} />
                    </a>
                  ) : att.type === 'application/pdf' ? (
                    <iframe src={att.url} title={att.name} style={{width:'100%', height:500, border:'none', display:'block'}} />
                  ) : (
                    <div style={{padding:40, textAlign:'center', color:'var(--ink-3)'}}>
                      <div style={{fontSize:40, marginBottom:8}}>📄</div>
                      <a href={att.url} target="_blank" rel="noopener" style={{color:'var(--accent)'}}>下载查看</a>
                    </div>
                  )}
                  <div style={{padding:'8px 12px', fontSize:12, color:'var(--ink-3)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <span style={{whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{att.name}</span>
                    <a href={att.url} download={att.name} target="_blank" rel="noopener" className="btn-sec" style={{padding:'2px 8px', fontSize:11, textDecoration:'none'}}>下载 ↓</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
