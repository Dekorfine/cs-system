/* =====================================================================
 * cs-ai-helper.js —— 客服 AI 邮件助手(一期 · 粘贴版)
 * ---------------------------------------------------------------------
 * 复用 worktrack 的 LLM 直连(浏览器直连三家官方 API,共享加密密钥在
 * MESSAGEBUS app_config)。叠加:店铺对照表 + 两步走主提示词 + KB 模板
 * 检索注入 + 一个自包含 DOM 面板。
 *
 * 对外只暴露:
 *   window.initCsAi()                  -> { ask, askFull, has }
 *   window.__openCsAiAssistant(ctx)    -> 打开 AI 邮件助手面板
 *     ctx = { kind, orderRef, customer, productName, issueType,
 *             amount, currency, reason, notes }
 * ===================================================================== */
(function () {
  'use strict';

  /* ============== 0. 共享密钥所在的 Supabase 项目(MESSAGEBUS)============== */
  var CS_AI_SB_URL = 'https://xyhbwqugbnowfjuhqhsj.supabase.co';
  var CS_AI_SB_KEY = 'sb_publishable_Z0dXXZivG5QI-FCbwELxEA_JZBNx2Hn';

  /* ============== 1. 密钥解密(与 worktrack 完全一致)============== */
  async function _aesKey() {
    var enc = new TextEncoder();
    var km = await crypto.subtle.importKey('raw', enc.encode('wt_dekorfine_gem_v1_2026'),
      { name: 'PBKDF2' }, false, ['deriveKey']);
    return crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt: enc.encode('wt_gem_salt_v1'), iterations: 100000, hash: 'SHA-256' },
      km, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
  }
  async function _decKey(encoded) {
    if (!encoded) return '';
    if (encoded.indexOf('enc:') !== 0) return encoded;
    try {
      var key = await _aesKey();
      var combined = Uint8Array.from(atob(encoded.slice(4)), function (c) { return c.charCodeAt(0); });
      var iv = combined.slice(0, 12), ct = combined.slice(12);
      var pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: iv }, key, ct);
      return new TextDecoder().decode(pt);
    } catch (e) { console.error('[cs-ai] 解密失败', e); return ''; }
  }

  /* ============== 2. 三家官方 API · 浏览器直连 ============== */
  async function _callClaude(o) {
    if (!o.apiKey) throw new Error('未配置 Claude 密钥');
    var body = { model: o.model || 'claude-sonnet-4-5-20250929', max_tokens: o.maxTokens || 4096,
      temperature: o.temperature == null ? 0.6 : o.temperature, messages: [{ role: 'user', content: o.prompt }] };
    if (o.systemPrompt) body.system = o.systemPrompt;
    var resp = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': o.apiKey, 'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true' }, body: JSON.stringify(body) });
    if (!resp.ok) { var d = ''; try { var j = await resp.json(); d = (j.error && j.error.message) || JSON.stringify(j); } catch (e) { d = await resp.text(); } throw new Error('Claude ' + resp.status + ': ' + d); }
    var data = await resp.json();
    return { text: (data.content || []).map(function (c) { return c.text || ''; }).join(''), usage: data.usage };
  }
  async function _callOpenAI(o) {
    if (!o.apiKey) throw new Error('未配置 OpenAI 密钥');
    var msgs = []; if (o.systemPrompt) msgs.push({ role: 'system', content: o.systemPrompt }); msgs.push({ role: 'user', content: o.prompt });
    var resp = await fetch('https://api.openai.com/v1/chat/completions', { method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + o.apiKey },
      body: JSON.stringify({ model: o.model || 'gpt-4o-mini', max_tokens: o.maxTokens || 4096, temperature: o.temperature == null ? 0.6 : o.temperature, messages: msgs }) });
    if (!resp.ok) { var d = ''; try { var j = await resp.json(); d = (j.error && j.error.message) || JSON.stringify(j); } catch (e) { d = await resp.text(); } throw new Error('OpenAI ' + resp.status + ': ' + d); }
    var data = await resp.json();
    return { text: (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || '', usage: data.usage };
  }
  async function _callGemini(o) {
    if (!o.apiKey) throw new Error('未配置 Gemini 密钥');
    var url = 'https://generativelanguage.googleapis.com/v1beta/models/' + (o.model || 'gemini-2.5-flash') + ':generateContent?key=' + encodeURIComponent(o.apiKey);
    var body = { contents: [{ role: 'user', parts: [{ text: o.prompt }] }], generationConfig: { maxOutputTokens: o.maxTokens || 4096, temperature: o.temperature == null ? 0.6 : o.temperature } };
    if (o.systemPrompt) body.systemInstruction = { parts: [{ text: o.systemPrompt }] };
    var resp = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (!resp.ok) { var d = ''; try { var j = await resp.json(); d = (j.error && j.error.message) || JSON.stringify(j); } catch (e) { d = await resp.text(); } throw new Error('Gemini ' + resp.status + ': ' + d); }
    var data = await resp.json();
    var cand = data.candidates && data.candidates[0];
    return { text: (cand && cand.content && cand.content.parts ? cand.content.parts.map(function (p) { return p.text || ''; }).join('') : ''), usage: data.usageMetadata };
  }

  /* ============== 3. initCsAi:读+解密共享密钥 ============== */
  async function initCsAi() {
    if (!window.supabase || !window.supabase.createClient) throw new Error('supabase-js 未加载');
    var sb = window.supabase.createClient(CS_AI_SB_URL, CS_AI_SB_KEY);
    var r = await sb.from('app_config').select('value').eq('key', 'main').maybeSingle();
    if (r.error) throw new Error('读取 app_config 失败: ' + r.error.message);
    var cfg = (r.data && r.data.value) || {};
    var arr = await Promise.all([_decKey(cfg.claudeApiKeyEnc || ''), _decKey(cfg.openaiApiKeyEnc || ''), _decKey(cfg.geminiApiKeyEnc || '')]);
    var keys = { claude: arr[0], openai: arr[1], gemini: arr[2] };
    var defaultModels = { claude: cfg.claudeDefaultModel || 'claude-sonnet-4-5-20250929', openai: cfg.openaiDefaultModel || 'gpt-4o-mini',
      gemini: (cfg.geminiDefaultModel && !/image/.test(cfg.geminiDefaultModel)) ? cfg.geminiDefaultModel : 'gemini-2.5-flash' };
    var fns = { claude: _callClaude, openai: _callOpenAI, gemini: _callGemini };
    function pick(p) { return p || (keys.claude ? 'claude' : keys.openai ? 'openai' : 'gemini'); }
    return {
      keys: keys, defaultModels: defaultModels,
      has: function (p) { return !!keys[p]; },
      async ask(opt) { var p = pick(opt.provider); if (!fns[p]) throw new Error('未知 provider ' + p); if (!keys[p]) throw new Error('未配置 ' + p + ' 密钥(去 worktrack 设置里填)'); var r2 = await fns[p](Object.assign({ apiKey: keys[p], model: opt.model || defaultModels[p] }, opt)); return r2.text; },
      async askFull(opt) { var p = pick(opt.provider); return fns[p](Object.assign({ apiKey: keys[p], model: opt.model || defaultModels[p] }, opt)); }
    };
  }
  window.initCsAi = initCsAi;

  /* ============== 4. 店铺对照表(brand → 收件箱/签名/handle/前缀/语气)============== */
  var V_VAKKER = 'Editorial luxury — warm, confident, understated. Use em-dashes; words like "edition" and "catalogue". No exclamation marks. Concise, never groveling, never robotic.';
  var V_DEFAULT = 'Warm, professional, concise and human — like a top brand (Apple / Muji). Minimal apology, no rambling, clear and confident, never robotic.';
  var STORES = [
    { brand: 'Vakkerlight', handle: 'vakkerlighting', inbox: 'info@vakkerlight.com', website: 'vakkerlight.com', signer: 'Ling / Abby', prefixes: ['VK', 'VL', 'V', 'K'], voice: V_VAKKER },
    { brand: 'Radilum', handle: 'vakkerge', inbox: 'support@radilum.com', website: 'radilum.com', signer: 'Yulia', prefixes: ['RD'], voice: V_DEFAULT },
    { brand: 'Docos', handle: 'docolight', inbox: 'info@docos.us', website: 'docos.us', signer: 'Hazelle', prefixes: ['DC'], voice: V_DEFAULT },
    { brand: 'Dekorfine', handle: 'dekorfine', inbox: 'support@dekorfine.com', website: 'www.dekorfine.com', signer: 'Sally', prefixes: ['DF'], voice: V_DEFAULT },
    { brand: 'Mooijane', handle: 'janedecor', inbox: 'support@mooijane.com', website: 'mooijane.com', signer: 'Sally', prefixes: ['MJ'], voice: V_DEFAULT },
    { brand: 'Mooiehome', handle: 'vkwholesale', inbox: 'support@mooiehome.com', website: 'mooiehome.com', signer: 'Sally', prefixes: ['MH'], voice: V_DEFAULT },
    { brand: 'Pinlighting', handle: 'vkfrench', inbox: 'info@pinlighting.com', website: 'pinlighting.com', signer: 'Hannah', prefixes: ['PL'], voice: V_DEFAULT },
    { brand: 'Lumioshine', handle: 'docolamp', inbox: 'service@lumioshine.com', website: 'lumioshine.com', signer: 'Sally', prefixes: ['LS'], voice: V_DEFAULT },
    { brand: 'Rayonshine', handle: 'decormote', inbox: 'support@rayonshine.com', website: 'rayonshine.com', signer: 'Sally', prefixes: ['RS'], voice: V_DEFAULT }
  ];
  var _flatPrefixes = [];
  STORES.forEach(function (s) { s.prefixes.forEach(function (p) { _flatPrefixes.push({ p: p, s: s }); }); });
  _flatPrefixes.sort(function (a, b) { return b.p.length - a.p.length; });
  function detectStore(orderRef) {
    var o = ((orderRef || '') + '').toUpperCase().replace(/^[^A-Z]*/, '');
    for (var i = 0; i < _flatPrefixes.length; i++) { if (o.indexOf(_flatPrefixes[i].p) === 0) return _flatPrefixes[i].s; }
    return null;
  }

  /* ============== 5. 两步走主提示词(策略已按确认烧进)============== */
  function buildSystemPrompt(store) {
    var brand = store.brand, signer = store.signer, inbox = store.inbox, voice = store.voice || V_DEFAULT;
    return [
'你是 ' + brand + ' 的资深售后专家(收件箱 ' + inbox + '),专门处理棘手/已升级的客户邮件:长期往来、情绪激动、要求退款退货、可能拒付或差评。',
'你的优先级依次为:(1) 让客户满意、把人留住;(2) 避免全额退款、守住利润;(3) 守住品牌口碑与评价。',
'你给客户的回信用英文,给内部客服的简报用中文。客户邮件署名为:' + signer + '。',
'',
'【工作方式 —— 先提方案、确认后再写信(两步走)】',
'不要直接写客户回信。永远先做 PASS 1。',
'PASS 1(中文,给客服看):读完整往来 + 订单信息 + 下面的知识库参考模板。总结:客户诉求、真实原因、我们已承诺/已沟通过什么、卡在哪、客户情绪、风险(拒付/差评/升级)。给出本轮建议:走哪一档让步或哪个非退款方案,带理由 + 1~2 个备选;给出底线与升级触发点。结尾固定写:「建议执行以上方案?可调整阶梯或措辞。」然后停下等客服确认。',
'PASS 2(英文,客服确认/调整后才写):产出可直接复制发送的英文回信,落实已确认的那一步;只让一个步;一个清晰的下一步;署名 ' + signer + ', ' + brand + ' Customer Service Team。',
'',
'【退款/退货协商阶梯】目标:部分退款 + 客户留货。逐步加码,绝不一上来给到顶。',
'- 第0步:共情,确认真实原因;若称质量/破损,先要照片再谈补偿。',
'- 第1步 10%:部分退款留货,讲清好处(退货慢又费,退款即时,东西还留着)。',
'- 第2步 15%(被拒后)。第3步 20%(再被拒)。',
'- 超过 20% / 换货 / 补发配件 / 重发:仅限高货值、确属质量问题、或已升级的案子;包装成"一次性特批"。**任何超过 20% 的让步必须在 PASS 1 标注「申请主管/老板审批」,未经确认不得在英文回信里给出。**',
'- 底线:客户实在坚持可支持退货,但务必先尝试部分退款留货。',
'',
'【货值分档 —— 不要套死规则,参考知识库判断】低货值小单可以更快给到留货折扣以省沟通成本,高货值则慢慢谈 10→15→20;但**具体档位与措辞要参考下面注入的知识库范例里类似案子是怎么处理的**,据此给出合理建议,而不是机械套用固定百分比。',
'',
'【退货运费】非质量问题(尺寸/颜色/改主意等)由客户承担运费;确属质量问题/破损/发错货由我方承担。算账说服客户留货时用这个口径。',
'',
'【可用的非退款筹码】补发配件、重发漏件/破损件、部分退款留货、store credit(可比现金多给一点)、加急重发、换货 —— 这些我们都能做,按合适场景使用。',
'',
'【降级与边界】威胁拒付/差评:先认情绪、为"体验"担责、给一个具体下一步,并在 PASS 1 标「建议主管介入」。长期停滞:真诚地为等待致歉一次,然后向前推进,别翻旧账。已承诺过的:兑现,绝不反悔。确属质量/破损:先照片→再补发或部分退款,尽量别让客户寄回又重又易碎的东西。改主意/买家反悔:主推留货+部分退款;定制件若退货受限,如实说明,绝不编造政策。',
'',
'【语气 ' + brand + '】' + voice,
'',
'【硬规则】不编造政策/价格/时效/做不到的承诺。不向客户透露内部折扣阶梯或内部备注。确切百分比只写在中文方案里,英文回信用自然说法("a 15% partial refund")。未经审批不得在回信里超过 20%。信息缺失或不确定时,在 PASS 1 里说明并问客服,绝不在回信里猜。',
'',
'【输出格式】',
'PASS 1:',
'【案情分析(中文)】',
'- 客户诉求 / 真实原因:',
'- 已沟通 / 已承诺:',
'- 情绪与风险:',
'- 建议方案(本轮阶梯 + 理由 + 1~2 备选):',
'- 底线 / 升级触发:',
'建议执行以上方案?可调整阶梯或措辞。',
'',
'PASS 2(确认后):',
'[English reply — ready to send]'
    ].join('\n');
  }

  /* ============== 6. KB 检索(中文 bigram + 英文词 + 分类加权)============== */
  function _tok(s) {
    s = ((s || '') + '').toLowerCase();
    var en = s.match(/[a-z0-9]{3,}/g) || [];
    var cn = s.match(/[\u4e00-\u9fa5]/g) || [];
    var bi = []; for (var i = 0; i < cn.length - 1; i++) bi.push(cn[i] + cn[i + 1]);
    return en.concat(bi);
  }
  function pickKbEntries(ctx, entries, n) {
    n = n || 4;
    if (!entries || !entries.length) return [];
    var qTokArr = _tok([ctx.issueLabel, ctx.productName, ctx.reason, ctx.notes].join(' '));
    var qSet = {}; qTokArr.forEach(function (t) { qSet[t] = 1; }); var qTok = Object.keys(qSet);
    var isLog = /物流|运输|快递|tracking|shipping|delay|发货|到港/i.test([ctx.issueLabel, ctx.reason, ctx.notes].join(' '));
    var targetCat = isLog ? '物流问题' : '售后问题';
    var related = ['售后问题', '物流问题', '产品问题'];
    var scored = entries.map(function (e) {
      var et = _tok([e.q_cn, e.q_en, (e.tags || []).join(' '), (e.scenarios || []).join(' ')].join(' '));
      var es = {}; et.forEach(function (t) { es[t] = 1; });
      var hits = 0; qTok.forEach(function (t) { if (es[t]) hits++; });
      var catB = e.cat_cn === targetCat ? 3 : (related.indexOf(e.cat_cn) >= 0 ? 1 : 0);
      return { e: e, score: hits + catB };
    });
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.filter(function (x) { return x.score > 0; }).slice(0, n).map(function (x) { return x.e; });
  }
  var _kbPromise = null;
  function ensureKb() {
    if (window.CS_KB_ENTRIES) return Promise.resolve(window.CS_KB_ENTRIES);
    if (_kbPromise) return _kbPromise;
    _kbPromise = new Promise(function (res) {
      var s = document.createElement('script');
      s.src = 'cs-kb-data.js?v=' + (window.APP_VERSION || '1');
      s.onload = function () { res(window.CS_KB_ENTRIES || []); };
      s.onerror = function () { res([]); };
      document.head.appendChild(s);
    });
    return _kbPromise;
  }

  /* ============== 7. 提示词组装 ============== */
  var ISSUE_LABELS = { transport_damage: '运输破损 / transit damage', product_quality: '产品质量 / product quality', quality_issue: '产品质量 / product quality', wrong_item: '发错货 / wrong item', missing_parts: '缺件 / missing parts', size_mismatch: '尺寸不适合 / size mismatch', color_mismatch: '颜色不符 / color mismatch', customer_cancel: '客户主动取消 / customer cancelled', resell: '转售 / resell', discount: '折扣 / discount', logistics: '物流问题 / logistics', other: '其他 / other' };
  function issueLabel(ctx) { return ISSUE_LABELS[ctx.issueType] || ctx.issueType || ''; }
  function ctxBlock(ctx, store) {
    var L = [];
    L.push('店铺/Store: ' + store.brand + ' (' + store.website + ')  收件箱: ' + store.inbox + '  签名: ' + store.signer);
    if (ctx.orderRef) L.push('订单号/Order: ' + ctx.orderRef + '   后台搜单: https://admin.shopify.com/store/' + store.handle + '/orders?query=' + encodeURIComponent(ctx.orderRef));
    if (ctx.customer) L.push('客户/Customer: ' + ctx.customer);
    if (ctx.productName) L.push('产品/Product: ' + ctx.productName);
    L.push('事件类型/Type: ' + (ctx.kind || '') + '  ' + ctx._issueLabel);
    if (ctx.amount) L.push('金额/Amount: ' + ctx.amount + ' ' + (ctx.currency || '') + '(退款档位参考)');
    if (ctx.reason) L.push('客服已填原因/Reason: ' + ctx.reason);
    if (ctx.notes) L.push('备注/Notes: ' + ctx.notes);
    return L.join('\n');
  }
  function kbBlock(entries) {
    if (!entries.length) return '(无匹配模板)';
    return entries.map(function (e, i) {
      return '--- 模板' + (i + 1) + ' [' + e.cat_cn + ' · ' + e.q_cn + '] ---\n中文范例:\n' + e.a_cn + '\nEN 范例:\n' + e.a_en;
    }).join('\n\n');
  }
  function pass1Prompt(ctx, store, entries, thread) {
    return ['【订单 / 客户上下文】', ctxBlock(ctx, store), '',
      '【知识库参考模板 / KB reference templates】(参考这些过往处理与措辞,据此判断本案合理的让步与档位)', kbBlock(entries), '',
      '【客户邮件往来 / Customer email thread】', (thread && thread.trim()) || '(客服未提供完整往来,请基于上面信息分析并在缺信息处提示客服补充)', '',
      '现在执行 PASS 1(中文方案)。'].join('\n');
  }
  function pass2Prompt(ctx, store, entries, thread, pass1Text, adjust) {
    return ['【订单 / 客户上下文】', ctxBlock(ctx, store), '',
      '【知识库参考模板】', kbBlock(entries), '',
      '【客户邮件往来】', (thread && thread.trim()) || '(无)', '',
      '【已确认的方案 PASS 1】', pass1Text || '(无)', '',
      '【客服调整 / Agent adjustment】', (adjust && adjust.trim()) || '(无,照方案执行)', '',
      '现在执行 PASS 2:产出可直接发送的英文回信,落实上面已确认的方案,署名 ' + store.signer + ', ' + store.brand + ' Customer Service Team。只输出英文回信本体。'].join('\n');
  }

  /* ============== 8. 轻提示 + DOM 工具 ============== */
  function toast(msg, type) {
    if (typeof window._toast === 'function') { try { window._toast(msg, type); return; } catch (e) {} }
    var d = document.createElement('div');
    d.textContent = msg;
    d.style.cssText = 'position:fixed;left:50%;bottom:32px;transform:translateX(-50%);z-index:2147483646;padding:9px 16px;border-radius:8px;font-size:13px;color:#fff;background:' + (type === 'error' ? '#dc2626' : type === 'success' ? '#16a34a' : '#374151') + ';box-shadow:0 4px 14px rgba(0,0,0,.2)';
    document.body.appendChild(d); setTimeout(function () { d.style.opacity = '0'; d.style.transition = 'opacity .3s'; }, 1800); setTimeout(function () { d.remove(); }, 2200);
  }
  function el(tag, css, txt) { var e = document.createElement(tag); if (css) e.style.cssText = css; if (txt != null) e.textContent = txt; return e; }

  /* ============== 9. 面板 UI ============== */
  function openAssistant(ctx) {
    ctx = ctx || {};
    ctx._issueLabel = issueLabel(ctx);
    ctx.issueLabel = ctx._issueLabel;

    var overlay = el('div', 'position:fixed;inset:0;z-index:2147483200;background:rgba(15,15,20,.55);display:flex;align-items:flex-start;justify-content:center;padding:24px;overflow:auto;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif');
    var panel = el('div', 'background:#fff;width:100%;max-width:920px;border-radius:14px;box-shadow:0 16px 50px rgba(0,0,0,.3);overflow:hidden;margin:auto');
    overlay.appendChild(panel);
    function close() { document.body.style.overflow = ''; overlay.remove(); }
    overlay.addEventListener('mousedown', function (e) { if (e.target === overlay) close(); });
    document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); } });
    document.body.style.overflow = 'hidden';

    /* 头部 */
    var head = el('div', 'display:flex;align-items:center;justify-content:space-between;padding:14px 18px;background:#4f46e5;color:#fff');
    head.appendChild(el('div', 'font-size:15px;font-weight:600', '🤖 AI 邮件助手 · 两步走'));
    var xbtn = el('button', 'background:rgba(255,255,255,.18);border:none;color:#fff;width:28px;height:28px;border-radius:7px;cursor:pointer;font-size:16px', '×');
    xbtn.onclick = close; head.appendChild(xbtn); panel.appendChild(head);

    var body = el('div', 'padding:16px 18px;max-height:calc(100vh - 130px);overflow:auto'); panel.appendChild(body);

    /* 店铺选择(自动识别 + 可改) */
    var detected = detectStore(ctx.orderRef);
    var row1 = el('div', 'display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-bottom:10px');
    row1.appendChild(el('span', 'font-size:12px;color:#6b7280', '店铺'));
    var storeSel = el('select', 'padding:6px 8px;border:1px solid #d1d5db;border-radius:7px;font-size:13px');
    STORES.forEach(function (s) { var op = el('option', '', s.brand + ' · ' + s.inbox); op.value = s.brand; storeSel.appendChild(op); });
    if (detected) storeSel.value = detected.brand;
    row1.appendChild(storeSel);
    row1.appendChild(el('span', 'font-size:11px;color:' + (detected ? '#16a34a' : '#d97706'), detected ? ('按订单号自动识别 ' + (ctx.orderRef || '')) : '未能按订单号识别,请手动选择'));
    body.appendChild(row1);

    /* AI 提供方 */
    var row2 = el('div', 'display:flex;gap:14px;align-items:center;margin-bottom:10px;flex-wrap:wrap');
    row2.appendChild(el('span', 'font-size:12px;color:#6b7280', 'AI'));
    var provWrap = el('div', 'display:flex;gap:12px'); row2.appendChild(provWrap); body.appendChild(row2);

    /* 上下文摘要 */
    var ctxBox = el('div', 'background:#f9fafb;border:1px solid #eee;border-radius:8px;padding:9px 11px;font-size:12px;color:#374151;line-height:1.7;margin-bottom:10px;white-space:pre-wrap');
    ctxBox.textContent = '订单 ' + (ctx.orderRef || '—') + ' · 客户 ' + (ctx.customer || '—') + ' · 产品 ' + (ctx.productName || '—') + '\n类型 ' + (ctx._issueLabel || ctx.kind || '—') + (ctx.amount ? ' · 金额 ' + ctx.amount + ' ' + (ctx.currency || '') : '') + (ctx.reason ? '\n原因 ' + ctx.reason : '');
    body.appendChild(ctxBox);

    /* 邮件往来粘贴 */
    body.appendChild(el('div', 'font-size:12px;color:#374151;margin-bottom:4px', '粘贴客户邮件往来(整段,中英都行)'));
    var thread = el('textarea', 'width:100%;box-sizing:border-box;min-height:120px;border:1px solid #d1d5db;border-radius:8px;padding:9px;font-size:13px;font-family:inherit;resize:vertical;margin-bottom:10px');
    thread.placeholder = '把客户来往邮件粘到这里…(二期会按客户邮箱自动从 Gmail 拉取,这一期先手动粘)';
    body.appendChild(thread);

    /* KB 命中显示 */
    var kbInfo = el('div', 'font-size:11px;color:#6b7280;margin-bottom:10px', '');
    body.appendChild(kbInfo);

    /* PASS1 按钮 */
    var btn1 = el('button', 'background:#4f46e5;color:#fff;border:none;padding:9px 16px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer', '① 分析方案(中文 PASS 1)');
    body.appendChild(btn1);

    /* PASS1 结果 */
    var p1wrap = el('div', 'display:none;margin-top:14px');
    var p1box = el('div', 'background:#f8fafc;border:1px solid #e5e7eb;border-radius:8px;padding:12px;font-size:13px;line-height:1.7;white-space:pre-wrap;color:#1f2937');
    p1wrap.appendChild(el('div', 'font-size:12px;color:#4f46e5;font-weight:600;margin-bottom:6px', '案情分析 / 建议方案'));
    p1wrap.appendChild(p1box);
    var adjust = el('input', 'width:100%;box-sizing:border-box;margin-top:10px;border:1px solid #d1d5db;border-radius:8px;padding:8px;font-size:13px;font-family:inherit');
    adjust.placeholder = '可调整:换档位 / 改措辞 / 加备选… 留空=照方案';
    p1wrap.appendChild(adjust);
    var btn2 = el('button', 'margin-top:10px;background:#16a34a;color:#fff;border:none;padding:9px 16px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer', '② 写英文回信(PASS 2)');
    p1wrap.appendChild(btn2);
    body.appendChild(p1wrap);

    /* PASS2 结果 */
    var p2wrap = el('div', 'display:none;margin-top:14px');
    var p2head = el('div', 'display:flex;align-items:center;justify-content:space-between;margin-bottom:6px');
    p2head.appendChild(el('div', 'font-size:12px;color:#16a34a;font-weight:600', '英文回信(可直接发送)'));
    var copyBtn = el('button', 'background:#16a34a;color:#fff;border:none;padding:5px 12px;border-radius:6px;font-size:12px;cursor:pointer', '复制');
    p2head.appendChild(copyBtn);
    var p2box = el('div', 'background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:12px;font-size:13px;line-height:1.7;white-space:pre-wrap;color:#14532d');
    p2wrap.appendChild(p2head); p2wrap.appendChild(p2box); body.appendChild(p2wrap);

    /* 错误条 */
    var errBox = el('div', 'display:none;margin-top:12px;background:#fef2f2;border:1px solid #fecaca;color:#b91c1c;border-radius:8px;padding:9px 11px;font-size:12px;white-space:pre-wrap');
    body.appendChild(errBox);
    function showErr(m) { errBox.style.display = 'block'; errBox.textContent = '⚠ ' + m; }
    function clearErr() { errBox.style.display = 'none'; }

    /* ---- 初始化 AI + KB ---- */
    var AI = null, KB = [], curProvider = null, lastEntries = [], lastPass1 = '';
    provWrap.appendChild(el('span', 'font-size:12px;color:#9ca3af', '连接中…'));
    Promise.all([initCsAi(), ensureKb()]).then(function (res) {
      AI = res[0]; KB = res[1] || [];
      provWrap.innerHTML = '';
      var avail = ['claude', 'openai', 'gemini'].filter(function (p) { return AI.has(p); });
      if (!avail.length) { showErr('未检测到任何已配置的 API 密钥,请先在 worktrack 设置里填好 Claude / GPT / Gemini 的密钥。'); btn1.disabled = true; btn1.style.opacity = '.5'; return; }
      var labels = { claude: 'Claude', openai: 'GPT', gemini: 'Gemini' };
      curProvider = avail[0];
      avail.forEach(function (p) {
        var lab = el('label', 'display:flex;align-items:center;gap:4px;font-size:13px;color:#374151;cursor:pointer');
        var radio = document.createElement('input'); radio.type = 'radio'; radio.name = 'csai_prov'; radio.value = p; if (p === curProvider) radio.checked = true;
        radio.onchange = function () { curProvider = p; };
        lab.appendChild(radio); lab.appendChild(document.createTextNode(labels[p])); provWrap.appendChild(lab);
      });
    }).catch(function (e) { provWrap.innerHTML = ''; showErr('初始化失败:' + e.message); btn1.disabled = true; btn1.style.opacity = '.5'; });

    function currentStore() { var b = storeSel.value; for (var i = 0; i < STORES.length; i++) if (STORES[i].brand === b) return STORES[i]; return STORES[0]; }

    /* ---- PASS 1 ---- */
    btn1.onclick = function () {
      clearErr(); if (!AI) { showErr('AI 还没连上,请稍候'); return; }
      var store = currentStore();
      lastEntries = pickKbEntries(ctx, KB, 4);
      kbInfo.textContent = lastEntries.length ? ('参考了 ' + lastEntries.length + ' 条知识库模板:' + lastEntries.map(function (e) { return e.q_cn; }).join(' / ')) : '未匹配到知识库模板(将基于上下文分析)';
      btn1.disabled = true; btn1.textContent = '分析中…'; p1wrap.style.display = 'none'; p2wrap.style.display = 'none';
      AI.ask({ provider: curProvider, systemPrompt: buildSystemPrompt(store), prompt: pass1Prompt(ctx, store, lastEntries, thread.value), maxTokens: 2200 })
        .then(function (txt) { lastPass1 = txt; p1box.textContent = txt; p1wrap.style.display = 'block'; })
        .catch(function (e) { showErr(e.message); })
        .then(function () { btn1.disabled = false; btn1.textContent = '① 分析方案(中文 PASS 1)'; });
    };

    /* ---- PASS 2 ---- */
    btn2.onclick = function () {
      clearErr(); if (!AI) return; var store = currentStore();
      btn2.disabled = true; btn2.textContent = '写信中…'; p2wrap.style.display = 'none';
      AI.ask({ provider: curProvider, systemPrompt: buildSystemPrompt(store), prompt: pass2Prompt(ctx, store, lastEntries, thread.value, lastPass1, adjust.value), maxTokens: 1800 })
        .then(function (txt) { p2box.textContent = txt; p2wrap.style.display = 'block'; })
        .catch(function (e) { showErr(e.message); })
        .then(function () { btn2.disabled = false; btn2.textContent = '② 写英文回信(PASS 2)'; });
    };

    copyBtn.onclick = function () { try { navigator.clipboard.writeText(p2box.textContent); toast('已复制英文回信', 'success'); } catch (e) { toast('复制失败,请手动选择', 'error'); } };

    document.body.appendChild(overlay);
  }
  window.__openCsAiAssistant = openAssistant;
})();
