// ====== cs-system — 01-core ======
// 版本 2026.06.05-fix154
// 预编译切片
//
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// ====== cs-system — 01-core ======
// 版本 2026.06.05-fix154
// 预编译切片
//

var _React = React,
  useState = _React.useState,
  useMemo = _React.useMemo,
  useEffect = _React.useEffect,
  useRef = _React.useRef,
  useCallback = _React.useCallback,
  useContext = _React.useContext,
  createContext = _React.createContext;

// 🆕 fix129: 通用自定义弹窗 UI —— 替换浏览器原生 alert(丑陋警告弹窗)。
// 直接挂在 document.body、超高 z-index、无 backdrop-filter → 不会被任何表单/弹窗压住。
(function () {
  if (window.__wsDialogInstalled) return;
  window.__wsDialogInstalled = true;
  function injectStyle() {
    if (document.getElementById('ws-dialog-style')) return;
    var st = document.createElement('style');
    st.id = 'ws-dialog-style';
    st.textContent = '.wsdlg-mask{position:fixed;inset:0;background:rgba(15,23,42,.45);z-index:2147483600;display:flex;align-items:center;justify-content:center;padding:20px;animation:wsdlgFade .12s ease}' + '@keyframes wsdlgFade{from{opacity:0}to{opacity:1}}' + '@keyframes wsdlgPop{from{transform:scale(.94);opacity:.6}to{transform:scale(1);opacity:1}}' + '.wsdlg-box{background:#fff;border-radius:16px;max-width:400px;width:100%;box-shadow:0 24px 70px rgba(0,0,0,.3);overflow:hidden;animation:wsdlgPop .14s ease;font-family:inherit}' + '.wsdlg-top{display:flex;gap:12px;align-items:flex-start;padding:22px 22px 8px}' + '.wsdlg-ic{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:21px;flex-shrink:0}' + '.wsdlg-msg{flex:1;font-size:14px;line-height:1.6;color:#1e293b;white-space:pre-wrap;word-break:break-word;padding-top:7px}' + '.wsdlg-ttl{font-size:15px;font-weight:700;color:#0f172a;margin-bottom:4px}' + '.wsdlg-inp{width:100%;margin:6px 22px 0;width:calc(100% - 44px);padding:9px 11px;border:1px solid #d1d5db;border-radius:9px;font-size:14px;font-family:inherit;box-sizing:border-box}' + '.wsdlg-bar{display:flex;gap:8px;justify-content:flex-end;padding:16px 22px 20px}' + '.wsdlg-btn{padding:9px 20px;border-radius:9px;font-size:14px;font-weight:600;cursor:pointer;border:none;font-family:inherit}' + '.wsdlg-ok{background:#0071e3;color:#fff}.wsdlg-ok:hover{background:#0060c0}' + '.wsdlg-cancel{background:#f1f5f9;color:#334155}.wsdlg-cancel:hover{background:#e2e8f0}' + '.wsdlg-ok.danger{background:#dc2626}.wsdlg-ok.danger:hover{background:#b91c1c}';
    document.head.appendChild(st);
  }
  function classify(msg) {
    var m = String(msg || '');
    if (/(失败|错误|不能|无法|超过|出错|异常|禁止|必须|请先|不可|拒绝|error|fail)/i.test(m)) return {
      ic: '⚠️',
      bg: '#fef2f2',
      color: '#dc2626',
      danger: true
    };
    if (/(成功|已完成|已保存|已删除|已更新|已发送|搞定|完成|✓|✅)/i.test(m)) return {
      ic: '✅',
      bg: '#f0fdf4',
      color: '#16a34a',
      danger: false
    };
    return {
      ic: 'ℹ️',
      bg: '#eff6ff',
      color: '#0369a1',
      danger: false
    };
  }
  // mode: 'alert' | 'confirm' | 'prompt'
  function show(msg, opts) {
    injectStyle();
    opts = opts || {};
    var mode = opts.mode || 'alert';
    var info = classify(msg);
    var mask = document.createElement('div');
    mask.className = 'wsdlg-mask';
    var box = document.createElement('div');
    box.className = 'wsdlg-box';
    var top = document.createElement('div');
    top.className = 'wsdlg-top';
    var ic = document.createElement('div');
    ic.className = 'wsdlg-ic';
    ic.style.background = info.bg;
    ic.textContent = info.ic;
    var msgEl = document.createElement('div');
    msgEl.className = 'wsdlg-msg';
    if (opts.title) {
      var t = document.createElement('div');
      t.className = 'wsdlg-ttl';
      t.textContent = opts.title;
      msgEl.appendChild(t);
    }
    var txt = document.createElement('span');
    txt.textContent = String(msg == null ? '' : msg);
    msgEl.appendChild(txt);
    top.appendChild(ic);
    top.appendChild(msgEl);
    box.appendChild(top);
    var input = null;
    if (mode === 'prompt') {
      input = document.createElement('input');
      input.className = 'wsdlg-inp';
      input.value = opts.def == null ? '' : String(opts.def);
      box.appendChild(input);
    }
    var bar = document.createElement('div');
    bar.className = 'wsdlg-bar';
    var done = function done(val) {
      if (mask.parentNode) mask.parentNode.removeChild(mask);
      document.removeEventListener('keydown', onKey);
      if (opts.onResult) opts.onResult(val);
    };
    if (mode !== 'alert') {
      var cancel = document.createElement('button');
      cancel.className = 'wsdlg-btn wsdlg-cancel';
      cancel.textContent = opts.cancelText || '取消';
      cancel.onclick = function () {
        done(mode === 'prompt' ? null : false);
      };
      bar.appendChild(cancel);
    }
    var ok = document.createElement('button');
    ok.className = 'wsdlg-btn wsdlg-ok' + (info.danger ? ' danger' : '');
    ok.textContent = opts.okText || (mode === 'alert' ? '知道了' : '确定');
    ok.onclick = function () {
      done(mode === 'prompt' ? input ? input.value : '' : mode === 'confirm' ? true : undefined);
    };
    bar.appendChild(ok);
    box.appendChild(bar);
    mask.appendChild(box);
    mask.onclick = function (e) {
      if (e.target === mask && mode === 'alert') done(undefined);
    };
    function onKey(e) {
      if (e.key === 'Escape') done(mode === 'prompt' ? null : mode === 'confirm' ? false : undefined);else if (e.key === 'Enter' && mode !== 'prompt') {
        e.preventDefault();
        ok.click();
      }
    }
    document.addEventListener('keydown', onKey);
    document.body.appendChild(mask);
    setTimeout(function () {
      (input || ok).focus();
    }, 30);
  }
  // 覆盖原生 alert(无返回值,完美替换)
  window.alert = function (m) {
    show(m, {
      mode: 'alert'
    });
  };
  // 自定义异步 confirm / prompt(需 await:用于逐步替换原生 confirm/prompt)
  window.wsAlert = function (m, o) {
    show(m, Object.assign({
      mode: 'alert'
    }, o || {}));
  };
  window.wsConfirm = function (m, o) {
    return new Promise(function (res) {
      show(m, Object.assign({
        mode: 'confirm'
      }, o || {}, {
        onResult: res
      }));
    });
  };
  window.wsPrompt = function (m, def, o) {
    return new Promise(function (res) {
      show(m, Object.assign({
        mode: 'prompt',
        def: def
      }, o || {}, {
        onResult: res
      }));
    });
  };
})();

// ============================================================
// 工具
// ============================================================
// 🆕 本地时间的"今天"日期(避免 toISOString 的 UTC 时区偏移)
var todayISO = function todayISO() {
  var d = new Date();
  var y = d.getFullYear();
  var m = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0');
  return "".concat(y, "-").concat(m, "-").concat(day);
};
var nowISO = function nowISO() {
  return new Date().toISOString();
};
var fmt = function fmt(n) {
  return isFinite(n) ? Math.round(n).toLocaleString() : '-';
};
var fmt2 = function fmt2(n) {
  return isFinite(n) ? n.toFixed(2) : '-';
};
var uid = function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
};
var daysBetween = function daysBetween(a, b) {
  var da = new Date(a),
    db = new Date(b);
  return Math.round((db - da) / 86400000);
};
// 🆕 用本地时间计算避免时区偏差(toISOString 会用 UTC,跨时区会差 1 天)
var addDays = function addDays(iso, days) {
  // iso 格式: "2026-05-25"
  var _iso$split$map = iso.split('-').map(Number),
    _iso$split$map2 = _slicedToArray(_iso$split$map, 3),
    y = _iso$split$map2[0],
    m = _iso$split$map2[1],
    d = _iso$split$map2[2];
  var dt = new Date(y, m - 1, d); // 本地时间 0 点
  dt.setDate(dt.getDate() + days);
  // 返回本地日期(不用 toISOString,避免再次转 UTC)
  var yy = dt.getFullYear();
  var mm = String(dt.getMonth() + 1).padStart(2, '0');
  var dd = String(dt.getDate()).padStart(2, '0');
  return "".concat(yy, "-").concat(mm, "-").concat(dd);
};
var minutesBetween = function minutesBetween(start, end) {
  if (!start || !end) return 0;
  var _start$split$map = start.split(':').map(Number),
    _start$split$map2 = _slicedToArray(_start$split$map, 2),
    sh = _start$split$map2[0],
    sm = _start$split$map2[1];
  var _end$split$map = end.split(':').map(Number),
    _end$split$map2 = _slicedToArray(_end$split$map, 2),
    eh = _end$split$map2[0],
    em = _end$split$map2[1];
  var diff = eh * 60 + em - (sh * 60 + sm);
  if (diff < 0) diff += 24 * 60;
  return diff;
};
var fmtDuration = function fmtDuration(mins) {
  if (!mins) return '0min';
  if (mins < 60) return mins + 'min';
  var h = Math.floor(mins / 60),
    m = mins % 60;
  return m ? "".concat(h, "h").concat(m, "m") : "".concat(h, "h");
};

// 是否为过去日期（早于今天）
var isPastDate = function isPastDate(iso) {
  return iso && iso < new Date().toISOString().slice(0, 10);
};

// 综合判定记录是否可编辑：当天 = 可编辑；过去 = 仅主管解锁后可编辑
var canEditRecord = function canEditRecord(record, user, adminUnlock) {
  if (!record) return false;
  if (!isPastDate(record.date)) return true; // 当天/未来日期始终可编辑
  if ((user.role === 'admin' || user.role === 'super_admin') && adminUnlock) return true; // 主管解锁
  return false;
};

// CSV 导出工具
var csvEscape = function csvEscape(val) {
  if (val === null || val === undefined) return '';
  var s = String(val);
  if (s.includes(',') || s.includes('"') || s.includes('\n') || s.includes('\r')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
};
var downloadCSV = function downloadCSV(rows, filename) {
  // 加 BOM 确保 Excel 中文不乱码
  var csv = "\uFEFF" + rows.map(function (r) {
    return r.map(csvEscape).join(',');
  }).join('\r\n');
  var blob = new Blob([csv], {
    type: 'text/csv;charset=utf-8;'
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function () {
    return URL.revokeObjectURL(url);
  }, 100);
};

// 桌面通知封装（安全调用，浏览器不支持时静默失败）
var sendDesktopNotification = function sendDesktopNotification(title, body, tag) {
  try {
    if (typeof Notification === 'undefined') return false;
    if (Notification.permission !== 'granted') return false;
    new Notification(title, {
      body: body,
      tag: tag,
      icon: undefined
    });
    return true;
  } catch (e) {
    return false;
  }
};

// ============================================================
// 存储层 (localStorage 命名空间)
// ============================================================
var STORE = {
  k: function k(s) {
    return 'workspace_v1_' + s;
  },
  get: function get(key, def) {
    try {
      var v = localStorage.getItem(this.k(key));
      return v ? JSON.parse(v) : def;
    } catch (e) {
      return def;
    }
  },
  set: function set(key, val) {
    try {
      localStorage.setItem(this.k(key), JSON.stringify(val));
    } catch (e) {
      if (e && (e.name === 'QuotaExceededError' || /quota/i.test(e.message || ''))) {
        // 超过 localStorage 容量:清掉该键(避免残留旧大值连累其它写入),数据仍在云端
        try {
          localStorage.removeItem(this.k(key));
        } catch (_unused) {}
        console.warn('[STORE] ' + key + ' 超出 localStorage 容量,已跳过本地缓存(数据仍在云端 Supabase)');
      } else console.error(e);
    }
  },
  del: function del(key) {
    try {
      localStorage.removeItem(this.k(key));
    } catch (e) {}
  }
};

// 🆕 缓存瘦身:把客服记录写入 localStorage 前剥掉 base64 截图(图在云端,避免撑爆 5MB 配额)
function slimRecordsForCache(records) {
  var stripShots = function stripShots(arr) {
    return (arr || []).map(function (s) {
      return s && s.data ? _objectSpread(_objectSpread({}, s), {}, {
        data: '',
        _cloud: true
      }) : s;
    });
  };
  return (records || []).map(function (r) {
    if (!r || _typeof(r) !== 'object') return r;
    var o = _objectSpread({}, r);
    if (Array.isArray(o.screenshots)) o.screenshots = stripShots(o.screenshots);
    if (Array.isArray(o.followUps)) o.followUps = o.followUps.map(function (f) {
      return f && Array.isArray(f.screenshots) ? _objectSpread(_objectSpread({}, f), {}, {
        screenshots: stripShots(f.screenshots)
      }) : f;
    });
    return o;
  });
}

// ============================================================
// 云同步层 (Supabase)
// ============================================================
// 已预埋默认配置，团队成员打开即用，无需各自填写
var DEFAULT_SB_URL = 'https://kwrajryhwyytkjkkidor.supabase.co';
var DEFAULT_SB_KEY = 'sb_publishable_6j-rSrv1V95FROe-iX6Yew_unE_Y6n9';
var CLOUD = {
  client: null,
  // 🛡 安全获取 from 链(若 client 为 null 返回 null,避免崩溃)
  safeFrom: function safeFrom(table) {
    if (!this.client) return null;
    return this.client.from(table);
  },
  enabled: false,
  status: 'local',
  // 'local' | 'ok' | 'err'
  lastError: '',
  init: function init(url, key) {
    if (!url || !key) {
      this.enabled = false;
      this.status = 'local';
      return false;
    }
    try {
      if (!window.supabase || !window.supabase.createClient) {
        this.status = 'err';
        this.lastError = 'Supabase SDK 未加载';
        return false;
      }
      this.client = window.supabase.createClient(url, key);
      this.enabled = true;
      this.status = 'ok';
      return true;
    } catch (e) {
      this.enabled = false;
      this.status = 'err';
      this.lastError = e.message;
      return false;
    }
  },
  ping: function ping() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _yield$_this$client$f, error, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (_this.client) {
              _context.n = 1;
              break;
            }
            return _context.a(2, {
              ok: false,
              msg: '未配置'
            });
          case 1:
            _context.p = 1;
            _context.n = 2;
            return _this.client.from('workspace_records').select('id', {
              count: 'exact',
              head: true
            }).limit(1);
          case 2:
            _yield$_this$client$f = _context.v;
            error = _yield$_this$client$f.error;
            if (!(error && error.code !== 'PGRST116')) {
              _context.n = 3;
              break;
            }
            // table not found is also an error
            _this.status = 'err';
            _this.lastError = error.message;
            return _context.a(2, {
              ok: false,
              msg: error.message
            });
          case 3:
            _this.status = 'ok';
            return _context.a(2, {
              ok: true,
              msg: '连接正常'
            });
          case 4:
            _context.p = 4;
            _t = _context.v;
            _this.status = 'err';
            _this.lastError = _t.message;
            return _context.a(2, {
              ok: false,
              msg: _t.message
            });
        }
      }, _callee, null, [[1, 4]]);
    }))();
  },
  // 通用 CRUD
  list: function list(table) {
    var _arguments = arguments,
      _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var opts, HEAVY, sel, runQuery, _yield$runQuery, data, error, _yield$runQuery2, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            opts = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : {};
            if (_this2.client) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2, null);
          case 1:
            // 🆕 fix139: 重表默认排除大体积列(图片 base64),列表秒开;详情/展开再按需取
            HEAVY = {
              chargebacks: 'id,amount,currency,status,site,order_no,customer_name,customer_email,platform,reason,reason_detail,resolution,notes,deadline,opened_at,created_at,updated_at,created_by,created_by_name,assigned_to,assigned_to_names,assigned_at,resolved_at,cs_fault,cs_fault_emp,deleted'
            };
            sel = opts.select || !opts.full && HEAVY[table] || '*';
            runQuery = /*#__PURE__*/function () {
              var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(selStr) {
                var q;
                return _regenerator().w(function (_context2) {
                  while (1) switch (_context2.n) {
                    case 0:
                      q = _this2.client.from(table).select(selStr);
                      if (opts.order) q = q.order(opts.order.col, {
                        ascending: opts.order.asc !== false
                      });
                      if (opts.eq) Object.entries(opts.eq).forEach(function (_ref2) {
                        var _ref3 = _slicedToArray(_ref2, 2),
                          k = _ref3[0],
                          v = _ref3[1];
                        return q = q.eq(k, v);
                      });
                      if (opts.limit) q = q.limit(opts.limit);
                      _context2.n = 1;
                      return q;
                    case 1:
                      return _context2.a(2, _context2.v);
                  }
                }, _callee2);
              }));
              return function runQuery(_x) {
                return _ref.apply(this, arguments);
              };
            }();
            _context3.p = 2;
            _context3.n = 3;
            return runQuery(sel);
          case 3:
            _yield$runQuery = _context3.v;
            data = _yield$runQuery.data;
            error = _yield$runQuery.error;
            if (!(error && sel !== '*')) {
              _context3.n = 5;
              break;
            }
            // 精简列出错(列名不符等)→ 回退全列,绝不让列表崩
            console.warn('[fix139] list ' + table + ' 精简列失败,回退 select(*)', error.message);
            _context3.n = 4;
            return runQuery('*');
          case 4:
            _yield$runQuery2 = _context3.v;
            data = _yield$runQuery2.data;
            error = _yield$runQuery2.error;
          case 5:
            if (!error) {
              _context3.n = 6;
              break;
            }
            throw error;
          case 6:
            return _context3.a(2, data || []);
          case 7:
            _context3.p = 7;
            _t2 = _context3.v;
            console.error('CLOUD.list', table, _t2);
            return _context3.a(2, null);
        }
      }, _callee3, null, [[2, 7]]);
    }))();
  },
  _lastError: null,
  // 🆕 保留最后一次操作的错误,供调用方读取
  // 🆕 fix8: 每个表跟踪 schema 缓存里缺失的字段,避免反复重试
  // 🆕 fix140: 会话级持久化(sessionStorage)→ 同会话内重载不再重复触发剥离重试(写操作不翻倍)。
  //           故意只用 sessionStorage 不跨会话:主管在 Supabase 补列后,关掉标签页即重新学习,不会被永久剥离。
  _missingColumns: function () {
    try {
      var s = typeof sessionStorage !== 'undefined' && sessionStorage.getItem('cloud_missing_cols');
      if (s) {
        var o = JSON.parse(s);
        var r = {};
        Object.keys(o).forEach(function (k) {
          r[k] = new Set(o[k] || []);
        });
        return r;
      }
    } catch (e) {}
    return {};
  }(),
  // { table: Set<column> }
  _retryStats: {
    total: 0,
    byTable: {}
  },
  // 🆕 fix140: 诊断 — 控制台看 CLOUD._retryStats 即知重试频率
  _persistMissing: function _persistMissing() {
    var _this3 = this;
    try {
      if (typeof sessionStorage === 'undefined') return;
      var o = {};
      Object.keys(this._missingColumns).forEach(function (k) {
        o[k] = _toConsumableArray(_this3._missingColumns[k]);
      });
      sessionStorage.setItem('cloud_missing_cols', JSON.stringify(o));
    } catch (e) {}
  },
  clearMissingColumns: function clearMissingColumns(table) {
    // 🆕 fix140: 主管补列后调用 CLOUD.clearMissingColumns() 清空,恢复写入该列
    if (table) delete this._missingColumns[table];else this._missingColumns = {};
    try {
      if (typeof sessionStorage !== 'undefined') sessionStorage.removeItem('cloud_missing_cols');
    } catch (e) {}
  },
  upsert: function upsert(table, row) {
    var _arguments2 = arguments,
      _this4 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var _retryCount, known, cleanRow, _yield$_this4$client$, data, error, colMatch, missing, stripped, _t3;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            _retryCount = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : 0;
            if (_this4.client) {
              _context4.n = 1;
              break;
            }
            _this4._lastError = {
              message: '云同步未配置或离线模式',
              table: table
            };
            return _context4.a(2, null);
          case 1:
            // 先剥离已知该表缺失的字段
            known = _this4._missingColumns[table];
            cleanRow = row;
            if (known && known.size > 0) {
              cleanRow = _objectSpread({}, row);
              known.forEach(function (col) {
                delete cleanRow[col];
              });
            }
            _context4.p = 2;
            _context4.n = 3;
            return _this4.client.from(table).upsert(cleanRow).select();
          case 3:
            _yield$_this4$client$ = _context4.v;
            data = _yield$_this4$client$.data;
            error = _yield$_this4$client$.error;
            if (!error) {
              _context4.n = 5;
              break;
            }
            // 🆕 fix8: 检测 "Could not find the 'X' column of 'TABLE' in the schema cache" (PGRST204)
            // 自动剥离该字段重试 (最多 5 次,避免死循环)
            colMatch = (error.message || '').match(/Could not find the '([^']+)' column/i);
            if (!(colMatch && _retryCount < 5)) {
              _context4.n = 4;
              break;
            }
            missing = colMatch[1];
            if (!_this4._missingColumns[table]) _this4._missingColumns[table] = new Set();
            _this4._missingColumns[table].add(missing);
            _this4._persistMissing(); // 🆕 fix140: 持久化到本会话,重载后直接剥离不再重试
            _this4._retryStats.total++; // 🆕 fix140: 诊断计数
            _this4._retryStats.byTable[table] = (_this4._retryStats.byTable[table] || 0) + 1;
            console.warn("[fix8 schema-retry] \u8868 \"".concat(table, "\" \u7F3A\u5C11\u5217 \"").concat(missing, "\",\u81EA\u52A8\u5265\u79BB\u91CD\u8BD5 (\u7B2C ").concat(_retryCount + 1, "/5 \u6B21)"));
            return _context4.a(2, _this4.upsert(table, row, _retryCount + 1));
          case 4:
            // 详细错误信息保留
            _this4._lastError = {
              message: error.message || '未知错误',
              code: error.code,
              details: error.details,
              hint: error.hint,
              table: table,
              row_keys: Object.keys(row || {}).join(', ')
            };
            console.error('❌ CLOUD.upsert 失败:', {
              table: table,
              error: error,
              row: row
            });
            throw error;
          case 5:
            _this4._lastError = null;
            // 🆕 fix8: 成功了但用了剥离 → 在 toast 提示一下,方便主管看到要补 schema
            if (cleanRow !== row) {
              stripped = _toConsumableArray(_this4._missingColumns[table] || []).join(', ');
              console.warn("[fix8 schema-retry] \u5DF2\u4FDD\u5B58\u5230 \"".concat(table, "\",\u4F46\u5265\u79BB\u4E86\u4E91\u7AEF\u4E0D\u8BC6\u522B\u7684\u5B57\u6BB5: ").concat(stripped, "\u3002\u5EFA\u8BAE\u4E3B\u7BA1\u5728 Supabase SQL Editor \u8865\u5EFA\u76F8\u5E94\u5217\u3002"));
            }
            return _context4.a(2, data);
          case 6:
            _context4.p = 6;
            _t3 = _context4.v;
            if (!_this4._lastError) {
              _this4._lastError = {
                message: _t3.message || String(_t3),
                table: table
              };
            }
            console.error('CLOUD.upsert', table, _t3);
            return _context4.a(2, null);
        }
      }, _callee4, null, [[2, 6]]);
    }))();
  },
  del: function del(table, id) {
    var _this5 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var _yield$_this5$client$, error, _t4;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            if (_this5.client) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, false);
          case 1:
            _context5.p = 1;
            _context5.n = 2;
            return _this5.client.from(table)["delete"]().eq('id', id);
          case 2:
            _yield$_this5$client$ = _context5.v;
            error = _yield$_this5$client$.error;
            if (!error) {
              _context5.n = 3;
              break;
            }
            throw error;
          case 3:
            return _context5.a(2, true);
          case 4:
            _context5.p = 4;
            _t4 = _context5.v;
            console.error('CLOUD.del', table, _t4);
            return _context5.a(2, false);
        }
      }, _callee5, null, [[1, 4]]);
    }))();
  },
  // 🆕 Storage 上传到 aftersales-images bucket
  uploadImage: function uploadImage(bucket, file) {
    var _arguments3 = arguments,
      _this6 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var prefix, _file$name, ext, fname, _yield$_this6$client$, data, error, _this6$client$storage, urlData, _t5;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            prefix = _arguments3.length > 2 && _arguments3[2] !== undefined ? _arguments3[2] : '';
            if (_this6.client) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2, null);
          case 1:
            _context6.p = 1;
            ext = (((_file$name = file.name) === null || _file$name === void 0 ? void 0 : _file$name.split('.').pop()) || 'png').toLowerCase();
            fname = "".concat(prefix).concat(Date.now(), "_").concat(Math.random().toString(36).slice(2, 7), ".").concat(ext);
            _context6.n = 2;
            return _this6.client.storage.from(bucket).upload(fname, file, {
              upsert: false,
              contentType: file.type || 'image/png'
            });
          case 2:
            _yield$_this6$client$ = _context6.v;
            data = _yield$_this6$client$.data;
            error = _yield$_this6$client$.error;
            if (!error) {
              _context6.n = 3;
              break;
            }
            throw error;
          case 3:
            _this6$client$storage = _this6.client.storage.from(bucket).getPublicUrl(data.path), urlData = _this6$client$storage.data;
            return _context6.a(2, {
              path: data.path,
              url: urlData.publicUrl
            });
          case 4:
            _context6.p = 4;
            _t5 = _context6.v;
            console.error('CLOUD.uploadImage', _t5);
            _this6._lastError = _t5;
            return _context6.a(2, null);
        }
      }, _callee6, null, [[1, 4]]);
    }))();
  },
  deleteImage: function deleteImage(bucket, path) {
    var _this7 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var _yield$_this7$client$, error, _t6;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            if (_this7.client) {
              _context7.n = 1;
              break;
            }
            return _context7.a(2, false);
          case 1:
            _context7.p = 1;
            _context7.n = 2;
            return _this7.client.storage.from(bucket).remove([path]);
          case 2:
            _yield$_this7$client$ = _context7.v;
            error = _yield$_this7$client$.error;
            if (!error) {
              _context7.n = 3;
              break;
            }
            throw error;
          case 3:
            return _context7.a(2, true);
          case 4:
            _context7.p = 4;
            _t6 = _context7.v;
            console.error('CLOUD.deleteImage', _t6);
            return _context7.a(2, false);
        }
      }, _callee7, null, [[1, 4]]);
    }))();
  },
  // 🆕 通用文件上传 (支持 PDF / PPT / XLSX / DOCX / 图片 / 视频 等)
  uploadFile: function uploadFile(bucket, file) {
    var _arguments4 = arguments,
      _this8 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var prefix, safeName, fname, _yield$_this8$client$, data, error, _this8$client$storage, urlData, _t7;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            prefix = _arguments4.length > 2 && _arguments4[2] !== undefined ? _arguments4[2] : '';
            if (_this8.client) {
              _context8.n = 1;
              break;
            }
            return _context8.a(2, null);
          case 1:
            _context8.p = 1;
            safeName = (file.name || 'file').replace(/[^\w\u4e00-\u9fa5.-]/g, '_').slice(0, 80);
            fname = "".concat(prefix).concat(Date.now(), "_").concat(Math.random().toString(36).slice(2, 7), "_").concat(safeName);
            _context8.n = 2;
            return _this8.client.storage.from(bucket).upload(fname, file, {
              upsert: false,
              contentType: file.type || 'application/octet-stream'
            });
          case 2:
            _yield$_this8$client$ = _context8.v;
            data = _yield$_this8$client$.data;
            error = _yield$_this8$client$.error;
            if (!error) {
              _context8.n = 3;
              break;
            }
            throw error;
          case 3:
            _this8$client$storage = _this8.client.storage.from(bucket).getPublicUrl(data.path), urlData = _this8$client$storage.data;
            return _context8.a(2, {
              path: data.path,
              url: urlData.publicUrl,
              name: file.name,
              size: file.size,
              type: file.type || 'application/octet-stream'
            });
          case 4:
            _context8.p = 4;
            _t7 = _context8.v;
            console.error('CLOUD.uploadFile', _t7);
            return _context8.a(2, null);
        }
      }, _callee8, null, [[1, 4]]);
    }))();
  }
};

// 🆕 全局保存失败提示 - 所有 editor 共用
// 用法: const res = await CLOUD.upsert(...); if (!res) { alertSaveError('保存'); return; }
var alertSaveError = function alertSaveError() {
  var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '保存';
  var err = CLOUD._lastError;
  if (!err) {
    alert("\u274C ".concat(action, "\u5931\u8D25:\u672A\u77E5\u9519\u8BEF\n\n\u5EFA\u8BAE:\n1. \u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\n2. F12 \u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F\n3. \u5F3A\u5237\u9875\u9762\u540E\u91CD\u8BD5"));
    return;
  }

  // 根据错误码给出针对性建议
  var code = err.code || '';
  var hint = '';
  if (code === 'PGRST204' || (err.message || '').includes('not find') || (err.message || '').includes('does not exist')) {
    hint = "\n\n\uD83D\uDD27 \u53EF\u80FD\u539F\u56E0:\u6570\u636E\u5E93\u8868/\u5B57\u6BB5\u4E0D\u5B58\u5728\n\u5EFA\u8BAE:\u8BA9\u4E3B\u7BA1\u5728 Supabase SQL Editor \u8DD1\u76F8\u5E94\u7684 SQL \u6587\u4EF6:\n  - \u62D2\u4ED8/\u7EBF\u4E0B\u5355/\u5B9A\u5236/\u5B9E\u62CD \u2192 13_chargebacks_offline_custom_photos.sql + 15_fix_chargeback_storage.sql\n  - \u552E\u540E/\u8865\u4EF6/\u9000\u6B3E \u2192 05_aftersales_refills_refunds.sql\n  - \u4EA7\u54C1\u8BC4\u4EF7 \u2192 12_product_reviews.sql\n  - \u5220\u9664\u5BA1\u6279 \u2192 14_delete_requests.sql";
  } else if ((err.message || '').toLowerCase().includes('row-level security') || code === '42501') {
    hint = "\n\n\uD83D\uDD27 \u53EF\u80FD\u539F\u56E0:\u6570\u636E\u5E93 RLS \u7B56\u7565\u963B\u6B62\u5199\u5165\n\u5EFA\u8BAE:\u8BA9\u4E3B\u7BA1\u8DD1 15_fix_chargeback_storage.sql \u4FEE\u590D\u7B56\u7565";
  } else if ((err.message || '').toLowerCase().includes('network') || (err.message || '').includes('fetch')) {
    hint = "\n\n\uD83D\uDD27 \u53EF\u80FD\u539F\u56E0:\u7F51\u7EDC\u95EE\u9898\n\u5EFA\u8BAE:\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u540E\u91CD\u8BD5";
  } else if ((err.message || '').toLowerCase().includes('duplicate') || code === '23505') {
    hint = "\n\n\uD83D\uDD27 \u53EF\u80FD\u539F\u56E0:\u91CD\u590D\u952E(\u8BA2\u5355\u53F7\u5DF2\u5B58\u5728\u7B49)\n\u5EFA\u8BAE:\u6362\u4E00\u4E2A\u552F\u4E00\u7F16\u53F7";
  } else if ((err.message || '').toLowerCase().includes('null value') || code === '23502') {
    hint = "\n\n\uD83D\uDD27 \u53EF\u80FD\u539F\u56E0:\u5FC5\u586B\u5B57\u6BB5\u4E3A\u7A7A\n\u5EFA\u8BAE:\u68C0\u67E5\u6240\u6709 * \u6807\u8BB0\u7684\u5B57\u6BB5\u662F\u5426\u586B\u5199";
  }
  alert("\u274C ".concat(action, "\u5931\u8D25\n\n") + "\u8868: ".concat(err.table || '?', "\n") + "\u9519\u8BEF: ".concat(err.message || '未知', "\n") + (err.code ? "\u4EE3\u7801: ".concat(err.code, "\n") : '') + (err.details ? "\u8BE6\u60C5: ".concat(err.details, "\n") : '') + (err.hint ? "\u63D0\u793A: ".concat(err.hint, "\n") : '') + hint + "\n\nF12 \u63A7\u5236\u53F0\u5DF2\u8BB0\u5F55\u5B8C\u6574\u9519\u8BEF\u65E5\u5FD7");
};

// 🔗 协调员配置 - 接收所有事件的"对接人"
var COORDINATOR_IDS = ['u_liuqiang']; // 谁是协调员，未来可加更多

// 🔗 自动给协调员发工单通知（事件创建时）
function notifyCoordinator(_x2, _x3, _x4) {
  return _notifyCoordinator.apply(this, arguments);
} // ============================================================
// 初始员工数据
// ============================================================
function _notifyCoordinator() {
  _notifyCoordinator = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(kind, eventData, creator) {
    var kindLabel, targetId, summary, _ISSUE_TYPES$find, issue, itemsList, _REFUND_TYPES$find, type, ticket, _t8;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.p = _context9.n) {
        case 0:
          if (CLOUD.client) {
            _context9.n = 1;
            break;
          }
          return _context9.a(2);
        case 1:
          // 离线模式跳过
          kindLabel = kind === 'aftersale' ? '🔧 售后' : kind === 'refill' ? '📦 补件' : '💰 退款';
          targetId = COORDINATOR_IDS[0];
          summary = '';
          if (kind === 'aftersale') {
            issue = ((_ISSUE_TYPES$find = ISSUE_TYPES.find(function (i) {
              return i.key === eventData.issue_type;
            })) === null || _ISSUE_TYPES$find === void 0 ? void 0 : _ISSUE_TYPES$find.label) || eventData.issue_type;
            summary = "\u95EE\u9898\uFF1A".concat(issue).concat(eventData.damaged_part ? ' · ' + eventData.damaged_part : '', "\n").concat(eventData.issue_detail || '');
          } else if (kind === 'refill') {
            itemsList = (eventData.items || []).map(function (it) {
              return "".concat(it.item || '?', " \xD7 ").concat(it.qty || 1).concat(it.unit || '');
            }).join('，');
            summary = "\u8865\u4EF6\u6E05\u5355\uFF1A".concat(itemsList);
          } else if (kind === 'refund') {
            type = ((_REFUND_TYPES$find = REFUND_TYPES.find(function (t) {
              return t.key === eventData.refund_type;
            })) === null || _REFUND_TYPES$find === void 0 ? void 0 : _REFUND_TYPES$find.label) || eventData.refund_type;
            summary = "".concat(type, " \xB7 ").concat(eventData.currency, " ").concat(parseFloat(eventData.amount).toFixed(2), "\n").concat(eventData.refund_reason || '');
          }
          ticket = {
            id: 'tk_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
            title: "".concat(kindLabel, " \xB7 ").concat(eventData.order_ref || '').concat(eventData.supplier_name ? ' · ' + eventData.supplier_name : ''),
            content: "\u3010\u81EA\u52A8\u540C\u6B65\u3011".concat(creator.name).concat(creator.alias ? ' ' + creator.alias : '', " \u521B\u5EFA\u4E86\u4E00\u6761").concat(kindLabel, "\u4E8B\u4EF6\n\n\u8BA2\u5355\u53F7\uFF1A").concat(eventData.order_ref || '-', "\n\u5BA2\u6237\uFF1A").concat(eventData.customer || '-', "\n\u4F9B\u5E94\u5546\uFF1A").concat(eventData.supplier_name || '-', "\n\n").concat(summary, "\n\n\uD83D\uDCA1 \u70B9\u51FB\u300C\uD83D\uDCCB \u5DE5\u4F5C\u4E3B\u7EBF\u300Dtab \u67E5\u770B\u5B8C\u6574\u4E8B\u4EF6\uFF08\u542B\u56FE\u7247\uFF09"),
            priority: kind === 'refund' ? 'high' : 'normal',
            department: 'coordination',
            from_id: creator.id,
            from_name: creator.name + (creator.alias ? ' ' + creator.alias : ''),
            target_id: targetId,
            target_name: '刘强',
            status: 'pending',
            event_ref: eventData.id ? "".concat(kind, ":").concat(eventData.id) : null,
            auto_synced: true,
            // 标记为自动同步，方便筛选
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
          _context9.p = 2;
          if (CLOUD.client) {
            _context9.n = 3;
            break;
          }
          return _context9.a(2);
        case 3:
          _context9.n = 4;
          return CLOUD.client.from('workspace_tickets').upsert(ticket);
        case 4:
          _context9.n = 6;
          break;
        case 5:
          _context9.p = 5;
          _t8 = _context9.v;
          console.warn('自动通知协调员失败:', _t8.message);
          // 不阻塞主流程
        case 6:
          return _context9.a(2);
      }
    }, _callee9, null, [[2, 5]]);
  }));
  return _notifyCoordinator.apply(this, arguments);
}
var INITIAL_EMPLOYEES = [
// 👑 客服部总管 (super_admin) — 管所有客服人员包括 Miya
{
  id: 'u_nicole',
  name: '李彬桦',
  alias: 'Nicole',
  sites: '全部门',
  role: 'super_admin',
  password: 'admin123',
  title: '客服部主管'
},
// 客服主管
{
  id: 'u_miya',
  name: '邱琴方',
  alias: 'Miya',
  sites: 'VK',
  role: 'admin',
  password: 'admin123',
  title: '客服主管'
},
// 客服员工
{
  id: 'u_hazelle',
  name: '杨佳欢',
  alias: 'Hazelle',
  sites: 'DC+海服',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_tan',
  name: '谭燕灵',
  alias: '',
  sites: 'VK',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_sally',
  name: '区栩灵',
  alias: 'Sally',
  sites: 'J+DF+LS+RS',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_aletta',
  name: '冯恩桐',
  alias: 'Aletta',
  sites: '处理拒付+VK',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_tammy',
  name: '伍家家',
  alias: 'Tammy',
  sites: '处理拒付+VK',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_yulia',
  name: '陶艳巧',
  alias: 'Yulia',
  sites: 'RD, PL, MO',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_ashley',
  name: '侯泳珊',
  alias: 'Ashley',
  sites: '',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_abby',
  name: '张宣霞',
  alias: 'Abby',
  sites: 'VK',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_luna',
  name: '杨甜',
  alias: 'Luna',
  sites: '',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_hannah',
  name: '聂诗俣',
  alias: 'Hannah',
  sites: '',
  role: 'staff',
  password: '123456'
},
// 💰 财务部 — 运费对账岗位
{
  id: 'u_kuang',
  name: '邝雅琦',
  alias: '',
  sites: '财务·运费对账',
  role: 'finance',
  password: 'finance123',
  title: '财务·运费对账'
}, {
  id: 'u_jiang',
  name: '江春芸',
  alias: '',
  sites: '财务·运费对账',
  role: 'finance',
  password: 'finance123',
  title: '财务·运费对账'
},
// 🔗 协调员 — 对接工厂/客服/跟单/供应商，所有功能全开放
{
  id: 'u_liuqiang',
  name: '刘强',
  alias: '',
  sites: '对接工厂·客服',
  role: 'admin',
  password: 'admin123',
  title: '对接工厂·客服'
},
// 🆕 北简客服团队 (13 人) — 默认 staff,所有基础权限默认打开,主管可后期调整
{
  id: 'u_bj_vinnie',
  name: '孙倩',
  alias: 'Vinnie',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_lily',
  name: '林燕清',
  alias: 'Lily',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_diana',
  name: '吴晓琳',
  alias: 'Diana',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_jenny',
  name: '区嘉怡',
  alias: 'Jenny',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_sine',
  name: '刘惜真',
  alias: 'Sine',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_lianzi',
  name: '罗桓连',
  alias: 'Lianzi',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_echo',
  name: '侯成',
  alias: 'Echo',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_joyce',
  name: '李淑婷',
  alias: 'Joyce',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_madison',
  name: '冯家颖',
  alias: 'Madison',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_vera',
  name: '陈慧容',
  alias: 'Vera',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_selina',
  name: '陈美娟',
  alias: 'Selina',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_jane',
  name: '陈洁嫦',
  alias: 'Jane',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_chenliqiong',
  name: '陈丽琼',
  alias: 'BJ_PD',
  sites: '北简·产品',
  role: 'staff',
  password: '123456',
  team: '北简',
  title: '北简 BJ_PD · 产品'
},
// 🧑‍💼 fix113: 人事(HR)— 跨团队绩效查看 + 设月度目标 · 不参与客服考核/不进排名
{
  id: 'u_hr_zhaoxin',
  name: '赵欣',
  alias: '',
  sites: '人事',
  role: 'hr',
  password: 'hr2026',
  title: '人事 · HR',
  department: '人事'
},
// 🔒 老板 1（不在登录列表显示，需要从右下角"🔐 管理员"入口登录）
{
  id: 'u_martin',
  name: 'Martin',
  alias: '',
  sites: 'CEO',
  role: 'super_admin',
  password: 'qq923923',
  title: 'CEO · 创始人',
  hideFromList: true
},
// 🔒 老板 2（不在登录列表显示，需要从右下角"🔐 管理员"入口登录 · 与 Martin 同权）
{
  id: 'u_luoyanqiu',
  name: '罗燕秋',
  alias: '',
  sites: '老板',
  role: 'super_admin',
  password: 'qq923923',
  title: '老板 · 角色管理',
  hideFromList: true
}];
var CATEGORIES = ['咨询', '物流', '查单', '核实', '安装说明', '改地址', '退货', '报价', '售后', '补发', '取消订单', '定制咨询', '实拍', '拒付', '加急', '邮件查询', '价格', '运费', '定金', '库存', '工厂进度', '质量问题', '图片提供', '样品', '促销活动'];
var SITES = ['MJ', 'DC', 'VK', 'DF', 'LS', 'RS', 'MH', 'PL', 'MO', 'RD', '海服']; // 🆕 fix51: J → MH (Mooiehome 取代 JaneDecor)

// 🆕 fix82: 订单号前缀 → 网站 兜底映射
// 客服常只填订单号(如 RD16893 / MJ6099 / V105171)忘了选网站下拉,
// 这张表让看板/统计能从订单号前缀自动推断网站。**前缀含义请核对**(尤其 V)。
// 注意:仅用于显示/统计兜底,不会覆盖已保存的 website 字段。
var ORDER_PREFIX_TO_SITE = {
  RD: 'RD',
  MJ: 'MJ',
  VK: 'VK',
  DC: 'DC',
  DF: 'DF',
  LS: 'LS',
  RS: 'RS',
  MH: 'MH',
  PL: 'PL',
  MO: 'MO',
  V: 'VK',
  K: 'VK' // 🆕 fix92: V / K 前缀 = VK 网站
};
// 从订单号/备注里抽取开头连续字母,优先匹配 2 字母前缀,再退 1 字母
function siteFromOrderRef(ref) {
  if (!ref) return '';
  var m = String(ref).trim().match(/^([A-Za-z]{1,3})/);
  if (!m) return '';
  var letters = m[1].toUpperCase();
  if (ORDER_PREFIX_TO_SITE[letters]) return ORDER_PREFIX_TO_SITE[letters];
  if (letters.length >= 2 && ORDER_PREFIX_TO_SITE[letters.slice(0, 2)]) return ORDER_PREFIX_TO_SITE[letters.slice(0, 2)];
  if (ORDER_PREFIX_TO_SITE[letters[0]]) return ORDER_PREFIX_TO_SITE[letters[0]];
  return '';
}
// 全局 helper(切片后跨 .js 可用)
if (typeof window !== 'undefined') window.__siteFromOrderRef = siteFromOrderRef;

// 🆕 fix22 联动 3: 网站 Context — 让自定义网站出现在所有下拉里
// 内置 SITES 永远在前,自定义网站按代码追加
var SitesContext = createContext({
  siteCodes: SITES,
  customSites: [],
  refresh: function refresh() {}
});
var useSiteCodes = function useSiteCodes() {
  return useContext(SitesContext).siteCodes;
};
var useCustomSites = function useCustomSites() {
  return useContext(SitesContext).customSites;
};

// 🆕 fix22 联动 1: 产品 Context — 让产品主表全局可访问,用于 SKU 联想
var ProductsContext = createContext({
  products: [],
  refresh: function refresh() {}
});
var useProducts = function useProducts() {
  return useContext(ProductsContext).products;
};
var STATUSES = [{
  key: 'pending',
  label: '待处理',
  cls: 'status-pending'
}, {
  key: 'following',
  label: '跟进中',
  cls: 'status-following'
}, {
  key: 'waiting',
  label: '等客户',
  cls: 'status-waiting'
}, {
  key: 'resolved',
  label: '已解决',
  cls: 'status-resolved'
}, {
  key: 'transferred',
  label: '已转交',
  cls: 'status-resolved'
}];

// 🆕 判断记录是否"有内容"（避免空白行被自动保存/统计）
var isRecordMeaningful = function isRecordMeaningful(r) {
  if (!r) return false;
  return !!((r.customer || '').trim() || (r.orderRef || '').trim() || (r.note || '').trim() || (r.startTime || '').trim() || (r.endTime || '').trim() || (r.category || '').trim() || (r.nextFollowUp || '').trim() || (r.site || '').trim() || r.screenshots && r.screenshots.length > 0 || r.followUps && r.followUps.length > 0 || r.escalated || r.transferHistory && r.transferHistory.length > 0);
};

// 🆕 售后问题类型
var ISSUE_TYPES = [{
  key: 'transport_damage',
  label: '运输损坏',
  color: '#dc2626'
}, {
  key: 'functional_defect',
  label: '功能性缺陷',
  color: '#ea580c'
}, {
  key: 'appearance_flaw',
  label: '外观瑕疵',
  color: '#ca8a04'
}, {
  key: 'missing_parts',
  label: '缺件',
  color: '#7c3aed'
}, {
  key: 'wrong_shipment',
  label: '错发',
  color: '#0369a1'
}, {
  key: 'color_diff',
  label: '颜色色差',
  color: '#db2777'
}, {
  key: 'size_issue',
  label: '尺寸问题',
  color: '#0891b2'
}, {
  key: 'other',
  label: '其他',
  color: '#525252'
}];

// ============================================================
// 📨 跨部门协作 (Cross-Dept Messages) — 共享消息总线
// 美工 / 客服 / 跟单 三系统共用美工的 Supabase 项目 (xyhbwqugbnowfjuhqhsj)
// 客服系统本地 Supabase 不动,仅额外加一个 cdmClient 专门读写 cross_dept_messages
// ============================================================
var MESSAGEBUS_URL = "https://xyhbwqugbnowfjuhqhsj.supabase.co";
var MESSAGEBUS_KEY = "sb_publishable_Z0dXXZivG5QI-FCbwELxEA_JZBNx2Hn";

// 懒加载 — 第一次用的时候才 createClient,避免页面加载时同时建两个 client
var _cdmClient = null;
var getCdmClient = function getCdmClient() {
  if (_cdmClient) return _cdmClient;
  if (typeof window === 'undefined' || !window.supabase) return null;
  try {
    _cdmClient = window.supabase.createClient(MESSAGEBUS_URL, MESSAGEBUS_KEY);
    return _cdmClient;
  } catch (e) {
    console.error('[CDM] 初始化消息总线 client 失败', e);
    return null;
  }
};

// 🆕 产品评价任务存在【共享库 xyhbwqugbnowfjuhqhsj】的 product_reviews(worktrack/美工读这里,不是客服 CLOUD 库)
function prReviewsList() {
  return _prReviewsList.apply(this, arguments);
}
function _prReviewsList() {
  _prReviewsList = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
    var opts,
      c,
      q,
      _yield$q,
      data,
      error,
      _args0 = arguments,
      _t9;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          opts = _args0.length > 0 && _args0[0] !== undefined ? _args0[0] : {};
          c = getCdmClient();
          if (c) {
            _context0.n = 1;
            break;
          }
          return _context0.a(2, null);
        case 1:
          _context0.p = 1;
          q = c.from('product_reviews').select('*');
          if (opts.order) q = q.order(opts.order.col, {
            ascending: opts.order.asc !== false
          });
          if (opts.limit) q = q.limit(opts.limit);
          _context0.n = 2;
          return q;
        case 2:
          _yield$q = _context0.v;
          data = _yield$q.data;
          error = _yield$q.error;
          if (!error) {
            _context0.n = 3;
            break;
          }
          console.error('[product_reviews] list 失败', error);
          return _context0.a(2, null);
        case 3:
          return _context0.a(2, data || []);
        case 4:
          _context0.p = 4;
          _t9 = _context0.v;
          console.error('[product_reviews] list 异常', _t9);
          return _context0.a(2, null);
      }
    }, _callee0, null, [[1, 4]]);
  }));
  return _prReviewsList.apply(this, arguments);
}
function prReviewUpsert(_x5) {
  return _prReviewUpsert.apply(this, arguments);
}
function _prReviewUpsert() {
  _prReviewUpsert = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(row) {
    var c, _yield$c$from$upsert$, data, error, _t0;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.p = _context1.n) {
        case 0:
          c = getCdmClient();
          if (c) {
            _context1.n = 1;
            break;
          }
          return _context1.a(2, null);
        case 1:
          _context1.p = 1;
          _context1.n = 2;
          return c.from('product_reviews').upsert(row).select();
        case 2:
          _yield$c$from$upsert$ = _context1.v;
          data = _yield$c$from$upsert$.data;
          error = _yield$c$from$upsert$.error;
          if (!error) {
            _context1.n = 3;
            break;
          }
          console.error('[product_reviews] upsert 失败', error);
          return _context1.a(2, null);
        case 3:
          return _context1.a(2, data);
        case 4:
          _context1.p = 4;
          _t0 = _context1.v;
          console.error('[product_reviews] upsert 异常', _t0);
          return _context1.a(2, null);
      }
    }, _callee1, null, [[1, 4]]);
  }));
  return _prReviewUpsert.apply(this, arguments);
}
function prReviewInsert(_x6) {
  return _prReviewInsert.apply(this, arguments);
} // ════════════════════════════════════════════════════════════════════
// 🆕 fix62 v5: 三系统共享人员目录 org_directory(跟 cross_dept_messages 同库)
// 客服系统 system='cs' · 发布本系统人员 + 读全部门人员做接收人下拉
// ════════════════════════════════════════════════════════════════════
function _prReviewInsert() {
  _prReviewInsert = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(rows) {
    var c, _yield$c$from$insert, error;
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          c = getCdmClient();
          if (c) {
            _context10.n = 1;
            break;
          }
          throw new Error('共享库(消息总线)未初始化');
        case 1:
          _context10.n = 2;
          return c.from('product_reviews').insert(rows);
        case 2:
          _yield$c$from$insert = _context10.v;
          error = _yield$c$from$insert.error;
          if (!error) {
            _context10.n = 3;
            break;
          }
          throw error;
        case 3:
          return _context10.a(2);
      }
    }, _callee10);
  }));
  return _prReviewInsert.apply(this, arguments);
}
var ORG_SYSTEM = 'cs'; // 客服系统标识(跟单系统改 'po')

// 发布本系统人员到共享目录(upsert,不删人用 active=false)
function publishMyStaff(_x7, _x8) {
  return _publishMyStaff.apply(this, arguments);
} // 读共享目录(全部门所有人)
// 🆕 fix140: 客户端缓存 — org_directory 基本静态(几十行),5 分钟内多组件/重渲染共用一份,不再每次重拉。
//           force=true 强制刷新(发布后/手动刷新用)。
function _publishMyStaff() {
  _publishMyStaff = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(staffList, updatedBy) {
    var client, rows, _yield$client$from$up, error;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          client = getCdmClient();
          if (client) {
            _context11.n = 1;
            break;
          }
          throw new Error('消息总线未初始化');
        case 1:
          rows = staffList.filter(function (s) {
            return s.role !== 'hr';
          }).map(function (s, i) {
            var cn = s.name || ''; // 中文名
            var en = s.alias || ''; // 英文名(alias)
            var displayName = en && cn && en !== cn ? "".concat(en, "(").concat(cn, ")") : en || cn || s.name; // 🆕 双显:Nicole(李彬桦)
            // 🆕 fix116: HR(赵欣)由 HR/跟单侧统一发布(hr_zhaoxin · system='hr'),客服侧过滤掉 role='hr' 不重复发
            var sysVal = ORG_SYSTEM;
            var idVal = "".concat(ORG_SYSTEM, "_").concat(s.id);
            return {
              id: idVal,
              staff_id: s.id,
              name: displayName,
              // name 也存双显,兼容旧读法
              chinese_name: cn,
              // 🆕
              english_name: en,
              // 🆕
              display_name: displayName,
              // 🆕
              system: sysVal,
              role: s.title || (s.role === 'super_admin' ? '客服部主管' : s.role === 'admin' ? '客服主管' : s.role === 'finance' ? '财务' : '客服'),
              department: s.team || s.sites || null,
              active: s.active !== false && !s.disabled,
              sort_order: i,
              updated_at: new Date().toISOString(),
              updated_by: updatedBy || 'system'
            };
          });
          _context11.n = 2;
          return client.from('org_directory').upsert(rows, {
            onConflict: 'id'
          });
        case 2:
          _yield$client$from$up = _context11.v;
          error = _yield$client$from$up.error;
          if (!error) {
            _context11.n = 3;
            break;
          }
          throw error;
        case 3:
          _orgDirCache = {
            ts: 0,
            data: null
          }; // 🆕 fix140: 发布后失效缓存,下次 load 拿最新
          return _context11.a(2, rows.length);
      }
    }, _callee11);
  }));
  return _publishMyStaff.apply(this, arguments);
}
var _orgDirCache = {
  ts: 0,
  data: null
};
var ORG_DIR_TTL = 5 * 60 * 1000;
function loadOrgDirectory() {
  return _loadOrgDirectory.apply(this, arguments);
}
function _loadOrgDirectory() {
  _loadOrgDirectory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
    var force,
      now,
      client,
      _yield$client$from$se,
      data,
      error,
      mapped,
      _args12 = arguments;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.n) {
        case 0:
          force = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : false;
          now = Date.now();
          if (!(!force && _orgDirCache.data && now - _orgDirCache.ts < ORG_DIR_TTL)) {
            _context12.n = 1;
            break;
          }
          return _context12.a(2, _orgDirCache.data);
        case 1:
          client = getCdmClient();
          if (client) {
            _context12.n = 2;
            break;
          }
          return _context12.a(2, _orgDirCache.data || []);
        case 2:
          _context12.n = 3;
          return client.from('org_directory').select('*').order('sort_order', {
            ascending: true
          });
        case 3:
          _yield$client$from$se = _context12.v;
          data = _yield$client$from$se.data;
          error = _yield$client$from$se.error;
          if (!error) {
            _context12.n = 4;
            break;
          }
          console.error('[org_directory] 读取失败', error);
          return _context12.a(2, _orgDirCache.data || []);
        case 4:
          mapped = (data || []).map(function (r) {
            return {
              id: r.id,
              staffId: r.staff_id,
              name: r.display_name || r.name,
              // 🆕 优先双显名
              displayName: r.display_name || r.name,
              // 🆕
              chineseName: r.chinese_name || '',
              englishName: r.english_name || '',
              system: r.system,
              role: r.role,
              department: r.department,
              active: r.active !== false,
              sortOrder: r.sort_order
            };
          });
          _orgDirCache = {
            ts: now,
            data: mapped
          }; // 🆕 fix140
          return _context12.a(2, mapped);
      }
    }, _callee12);
  }));
  return _loadOrgDirectory.apply(this, arguments);
}
if (typeof window !== 'undefined') {
  window.publishMyStaff = publishMyStaff;
  window.loadOrgDirectory = loadOrgDirectory;
}

// ════════════════════════════════════════════════════════════════════
// 🆕 fix146: 云端账号表 cs_accounts(客服库)— 账号+密码登录,全设备共享。
// 解决「主管在自己机器加的员工,换设备登不进」:账号从云端拉,不再只靠本机 localStorage。
// account = 英文名(alias)小写;无英文名 → 用 id 去 u_ 前缀兜底。全唯一。
function accountFor(e) {
  if (e && e.account) return String(e.account).toLowerCase().trim();
  var a = (e && e.alias || '').trim().toLowerCase().replace(/\s+/g, '');
  return a || String(e && e.id || '').replace(/^u_/, '').toLowerCase();
}
function empToAccountRow(e) {
  return {
    id: e.id,
    account: accountFor(e),
    password: e.password || '123456',
    name: e.name || '',
    alias: e.alias || '',
    sites: e.sites || '',
    role: e.role || 'staff',
    title: e.title || '',
    team: e.team || '',
    hide_from_list: !!e.hideFromList,
    active: e.active !== false && !e.disabled,
    updated_at: new Date().toISOString()
  };
}
function accountRowToEmp(r) {
  return {
    id: r.id,
    account: r.account,
    password: r.password,
    name: r.name,
    alias: r.alias,
    sites: r.sites,
    role: r.role,
    title: r.title || '',
    team: r.team || '',
    hideFromList: !!r.hide_from_list,
    disabled: r.active === false
  };
}
// 拉云端账号:成功→数组;失败(表不存在/未连)→null(调用方回退本地)
function loadCloudAccounts() {
  return _loadCloudAccounts.apply(this, arguments);
}
function _loadCloudAccounts() {
  _loadCloudAccounts = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
    var rows;
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.n) {
        case 0:
          _context13.n = 1;
          return CLOUD.list('cs_accounts', {
            limit: 1000,
            full: true
          });
        case 1:
          rows = _context13.v;
          if (rows) {
            _context13.n = 2;
            break;
          }
          return _context13.a(2, null);
        case 2:
          return _context13.a(2, rows.map(accountRowToEmp));
      }
    }, _callee13);
  }));
  return _loadCloudAccounts.apply(this, arguments);
}
function saveCloudAccount(_x9) {
  return _saveCloudAccount.apply(this, arguments);
}
function _saveCloudAccount() {
  _saveCloudAccount = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(e) {
    var _t1;
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.p = _context14.n) {
        case 0:
          _context14.p = 0;
          _context14.n = 1;
          return CLOUD.upsert('cs_accounts', empToAccountRow(e));
        case 1:
          return _context14.a(2, _context14.v);
        case 2:
          _context14.p = 2;
          _t1 = _context14.v;
          return _context14.a(2, null);
      }
    }, _callee14, null, [[0, 2]]);
  }));
  return _saveCloudAccount.apply(this, arguments);
}
function deleteCloudAccount(_x0) {
  return _deleteCloudAccount.apply(this, arguments);
} // 首次播种:把名单批量写入空表(直接用 client 批量 upsert)
function _deleteCloudAccount() {
  _deleteCloudAccount = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(id) {
    var _t10;
    return _regenerator().w(function (_context15) {
      while (1) switch (_context15.p = _context15.n) {
        case 0:
          _context15.p = 0;
          if (!CLOUD.client) {
            _context15.n = 1;
            break;
          }
          _context15.n = 1;
          return CLOUD.client.from('cs_accounts')["delete"]().eq('id', id);
        case 1:
          _context15.n = 3;
          break;
        case 2:
          _context15.p = 2;
          _t10 = _context15.v;
        case 3:
          return _context15.a(2);
      }
    }, _callee15, null, [[0, 2]]);
  }));
  return _deleteCloudAccount.apply(this, arguments);
}
function seedCloudAccounts(_x1) {
  return _seedCloudAccounts.apply(this, arguments);
}
function _seedCloudAccounts() {
  _seedCloudAccounts = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(list) {
    var rows, _yield$CLOUD$client$f, error, _t11;
    return _regenerator().w(function (_context16) {
      while (1) switch (_context16.p = _context16.n) {
        case 0:
          _context16.p = 0;
          if (CLOUD.client) {
            _context16.n = 1;
            break;
          }
          return _context16.a(2, false);
        case 1:
          rows = (list || []).map(empToAccountRow);
          _context16.n = 2;
          return CLOUD.client.from('cs_accounts').upsert(rows, {
            onConflict: 'id'
          });
        case 2:
          _yield$CLOUD$client$f = _context16.v;
          error = _yield$CLOUD$client$f.error;
          if (!error) {
            _context16.n = 3;
            break;
          }
          console.error('[账号播种] 失败', error);
          return _context16.a(2, false);
        case 3:
          console.log('[账号播种] 已写入', rows.length, '个账号到云端 cs_accounts');
          return _context16.a(2, true);
        case 4:
          _context16.p = 4;
          _t11 = _context16.v;
          console.error('[账号播种] 异常', _t11);
          return _context16.a(2, false);
      }
    }, _callee16, null, [[0, 4]]);
  }));
  return _seedCloudAccounts.apply(this, arguments);
}
if (typeof window !== 'undefined') {
  window.loadCloudAccounts = loadCloudAccounts;
  window.saveCloudAccount = saveCloudAccount;
  window.accountFor = accountFor;
}

// ════════════════════════════════════════════════════════════════════
// 🆕 fix49: WorkTrack-KPI 跨系统 client(对接拍摄部 photo_logs 表)
// 默认配置已硬编码 (Martin 提供的 publishable key,安全靠 RLS)
// ⚙ 设置中心可覆盖(若 Martin 换 key)
// ════════════════════════════════════════════════════════════════════
var WTKPI_DEFAULT_URL = 'https://xyhbwqugbnowfjuhqhsj.supabase.co';
var WTKPI_DEFAULT_KEY = 'sb_publishable_Z0dXXZivG5QI-FCbwELxEA_JZBNx2Hn';
var _wtkpiClient = null;
var _wtkpiClientKey = null; // 用于检测配置变化
var getWtkpiClient = function getWtkpiClient() {
  // 优先 localStorage 覆盖,否则用默认
  var lsUrl = typeof localStorage !== 'undefined' && localStorage.getItem('wtkpi_url') || '';
  var lsKey = typeof localStorage !== 'undefined' && localStorage.getItem('wtkpi_key') || '';
  var url = lsUrl || WTKPI_DEFAULT_URL;
  var key = lsKey || WTKPI_DEFAULT_KEY;
  if (!url || !key) return null;
  var cacheKey = url + '|' + key;
  if (_wtkpiClient && _wtkpiClientKey === cacheKey) return _wtkpiClient;
  if (typeof window === 'undefined' || !window.supabase) return null;
  try {
    _wtkpiClient = window.supabase.createClient(url, key);
    _wtkpiClientKey = cacheKey;
    return _wtkpiClient;
  } catch (e) {
    console.error('[WTKPI] 初始化拍摄部 client 失败', e);
    return null;
  }
};
var isWtkpiConfigured = function isWtkpiConfigured() {
  // 有默认值就永远算"已配置"
  return !!(WTKPI_DEFAULT_URL && WTKPI_DEFAULT_KEY);
};

// 🆕 fix107: 工作台共享 —— 按订单号实时拉产品图(复用跟单订单库 Edge Function,与发票同口径)
var ORDERS_KEY_WS = 'sb_publishable_dFjk1WN_Hc0Te6IhXZysZg_SXvKQU4C';
var EDGE_BASE_WS = 'https://pyfmuknvjqfwcqvbrsvw.supabase.co/functions/v1';
var PREFIX_TO_DOMAIN_WS = {
  V: 'vakkerlighting.myshopify.com',
  VK: 'vakkerlighting.myshopify.com',
  K: 'vakkerlighting.myshopify.com',
  PL: 'vkfrench.myshopify.com',
  DF: 'dekorfine.myshopify.com',
  DC: 'docolight.myshopify.com',
  MH: 'vkwholesale.myshopify.com',
  LS: 'docolamp.myshopify.com',
  RD: 'vakkerge.myshopify.com',
  RS: 'decormote.myshopify.com',
  JD: 'janedecor.myshopify.com',
  MJ: 'janedecor.myshopify.com',
  ML: 'mooielight.com'
};
function wsGuessDomain(no) {
  var m = String(no || '').toUpperCase().match(/^([A-Z]+)/);
  if (!m) return null;
  var p = m[1];
  return PREFIX_TO_DOMAIN_WS[p] || PREFIX_TO_DOMAIN_WS[p.slice(0, 2)] || PREFIX_TO_DOMAIN_WS[p.slice(0, 1)] || null;
}
// 🆕 fix111: 订单号前缀 → 网站简称(与发票 SHOP_PREFIX_MAP 同一套规则,客服团队通用)
var PREFIX_TO_SITE_WS = {
  VK: 'vakkerlight',
  V: 'vakkerlight',
  K: 'vakkerlight',
  RD: 'Radium',
  ML: 'Mooielight',
  MO: 'Mooielight',
  MJ: 'Mooijane',
  JD: 'Mooijane',
  DC: 'Docos',
  DF: 'dekorfine',
  LS: 'Lumioshine',
  RS: 'Rayonshine',
  MH: 'Mooiehome',
  PL: 'Pinlighting'
};
// 🆕 fix128: 全局"在新标签看原图" —— 不用任何浮层,物理上不可能被表单/弹窗压住(适配所有表单)
function wsOpenImg(src) {
  if (!src) return;
  try {
    if (/^data:/i.test(src)) {
      var arr = String(src).split(',');
      var mime = (arr[0].match(/:(.*?);/) || [])[1] || 'image/png';
      var bstr = atob(arr[1] || '');
      var n = bstr.length;
      var u8 = new Uint8Array(n);
      while (n--) u8[n] = bstr.charCodeAt(n);
      var url = URL.createObjectURL(new Blob([u8], {
        type: mime
      }));
      var w = window.open(url, '_blank');
      if (!w) {
        location.href = url;
      }
      setTimeout(function () {
        try {
          URL.revokeObjectURL(url);
        } catch (e) {}
      }, 60000);
    } else {
      window.open(src, '_blank', 'noopener');
    }
  } catch (e) {
    try {
      window.open(src, '_blank');
    } catch (e2) {}
  }
}
try {
  window.wsOpenImg = wsOpenImg;
} catch (e) {}

// ====== fix141: 所见即所得截图展示(对齐拍摄 worktrack) ======
// 统一取图函数:字符串原样;JSON 字符串 parse;对象取 url/dataUrl/data/image_url/base64;数组取首张。
// 所有 <img src> 一律过它,杜绝 [object Object] 裂图。
function imgDisplaySrc(v) {
  if (!v) return '';
  if (typeof v === 'string') {
    var s = v.trim();
    if (!s) return '';
    if (s[0] === '{' || s[0] === '[') {
      try {
        return imgDisplaySrc(JSON.parse(s));
      } catch (e) {
        return s;
      }
    }
    return s; // URL 或 dataURL 原样
  }
  if (Array.isArray(v)) return v.length ? imgDisplaySrc(v[0]) : '';
  if (_typeof(v) === 'object') {
    var direct = v.url || v.dataUrl || v.dataURL || v.data || v.image_url || v.imageUrl || v.src || v.publicUrl;
    if (direct && typeof direct === 'string') return imgDisplaySrc(direct);
    if (v.base64) return /^data:/i.test(v.base64) ? v.base64 : 'data:' + (v.mime || v.type || 'image/png') + ';base64,' + v.base64;
  }
  return '';
}
// mime/类型判定:image/* → 缩略图;其它(PDF/文档) → 文件,不当图
function attMimeKind(a) {
  var m = a && (a.mime || a.type) || '';
  if (/^image\//i.test(m)) return 'image';
  var src = imgDisplaySrc(a);
  if (/^data:image\//i.test(src)) return 'image';
  if (/\.(png|jpe?g|gif|webp|bmp|svg)(\?|$)/i.test(src)) return 'image';
  if (/^application\/pdf/i.test(m) || /\.pdf(\?|$)/i.test(src)) return 'file';
  if (m && !/^image\//i.test(m)) return 'file';
  return src ? 'image' : 'file'; // 有 src 无 mime → 当图试渲染,裂图由 onError 兜底
}
function attName(a) {
  if (a && _typeof(a) === 'object') return a.name || a.filename || a.title || '附件';
  return '附件';
}
try {
  window.imgDisplaySrc = imgDisplaySrc;
  window.attMimeKind = attMimeKind;
} catch (e) {}

// 缩略图行:image/* 铺 48×48,其它显 📄 文件名。点击 onPreview(全屏看大图),stopPropagation 防触发卡片点击。
var AttachThumbs = function AttachThumbs(_ref4) {
  var files = _ref4.files,
    _ref4$size = _ref4.size,
    size = _ref4$size === void 0 ? 48 : _ref4$size,
    _ref4$max = _ref4.max,
    max = _ref4$max === void 0 ? 0 : _ref4$max,
    onPreview = _ref4.onPreview;
  var list = Array.isArray(files) ? files.filter(Boolean) : files ? [files] : [];
  if (!list.length) return null;
  var show = max > 0 ? list.slice(0, max) : list;
  var more = max > 0 ? Math.max(0, list.length - max) : 0;
  var preview = onPreview || typeof window !== 'undefined' && window.__setPreviewImg || function () {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 4,
      marginTop: 4
    }
  }, show.map(function (a, i) {
    var kind = attMimeKind(a);
    if (kind === 'image') {
      var src = imgDisplaySrc(a);
      return /*#__PURE__*/React.createElement("img", {
        key: i,
        src: src,
        alt: "",
        loading: "lazy",
        onClick: function onClick(e) {
          e.stopPropagation();
          preview(a);
        },
        onError: function onError(e) {
          e.currentTarget.style.display = 'none';
        },
        title: "\u70B9\u51FB\u770B\u5927\u56FE",
        style: {
          width: size,
          height: size,
          objectFit: 'cover',
          borderRadius: 6,
          border: '1px solid var(--line, #e5e7eb)',
          cursor: 'zoom-in',
          background: 'var(--bg-2, #f3f4f6)'
        }
      });
    }
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: imgDisplaySrc(a) || '#',
      target: "_blank",
      rel: "noopener",
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      title: attName(a),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        height: size,
        padding: '0 8px',
        borderRadius: 6,
        border: '1px solid var(--line, #e5e7eb)',
        fontSize: 11,
        color: 'var(--ink-2, #374151)',
        textDecoration: 'none',
        maxWidth: 140,
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }
    }, "\uD83D\uDCC4 ", /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, attName(a)));
  }), more > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 6,
      border: '1px dashed var(--line, #e5e7eb)',
      fontSize: 11,
      color: 'var(--ink-3, #6b7280)'
    }
  }, "+", more));
};
try {
  window.AttachThumbs = AttachThumbs;
} catch (e) {}

// App 级单例:全屏预览弹窗。点击任意处关闭;支持 dataURL/URL/对象,均过 imgDisplaySrc。
var ImgPreviewModal = function ImgPreviewModal(_ref5) {
  var img = _ref5.img,
    onClose = _ref5.onClose;
  if (!img) return null;
  var src = imgDisplaySrc(img);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      background: 'rgba(0,0,0,0.82)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'zoom-out',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      maxWidth: '94vw',
      maxHeight: '90vh',
      objectFit: 'contain',
      borderRadius: 8,
      boxShadow: '0 12px 48px rgba(0,0,0,0.5)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      position: 'fixed',
      top: 16,
      right: 20,
      background: 'rgba(255,255,255,0.92)',
      border: 'none',
      borderRadius: 20,
      width: 40,
      height: 40,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: '40px'
    }
  }, "\u2715"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      wsOpenImg(src);
    },
    style: {
      position: 'fixed',
      bottom: 18,
      right: 20,
      background: 'rgba(255,255,255,0.92)',
      border: 'none',
      borderRadius: 8,
      padding: '7px 14px',
      fontSize: 12,
      cursor: 'pointer'
    }
  }, "\u2197 \u539F\u56FE\u65B0\u6807\u7B7E"));
};
try {
  window.ImgPreviewModal = ImgPreviewModal;
} catch (e) {}

// ====== fix143: 流程步骤条(对齐拍摄 worktrack 清晰展示)======
// 人名哈希成固定颜色 —— 同一个人到处同色,一眼认人。
var NAME_PALETTE = ['#dc2626', '#ea580c', '#d97706', '#65a30d', '#059669', '#0d9488', '#0891b2', '#2563eb', '#4f46e5', '#7c3aed', '#9333ea', '#c026d3', '#db2777', '#e11d48', '#b45309', '#0f766e'];
function nameColor(name) {
  if (!name) return '#78716c';
  var h = 0;
  for (var i = 0; i < name.length; i++) h = h * 31 + name.charCodeAt(i) >>> 0;
  return NAME_PALETTE[h % NAME_PALETTE.length];
}
// 日期短显示 MM-DD(吃 ISO 串/日期串/时间戳)
function fmtStepDate(v) {
  if (!v) return '';
  try {
    var d = new Date(typeof v === 'number' ? v : String(v));
    if (!isNaN(d.getTime())) return String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  } catch (e) {}
  var s = String(v);
  return s.length >= 10 ? s.slice(5, 10) : s;
}
try {
  window.nameColor = nameColor;
  window.fmtStepDate = fmtStepDate;
} catch (e) {}

// 横向步骤条:steps = [{ id, label, icon, who, when, done, color }]
// 圆圈:已完成=主题色填充+白icon+柔投影;未完成=灰底+序号。下三行:阶段名 / 人名(nameColor上色, 已指派未做=「待 X」灰, 无人=—) / 日期。
// 连接线:下一阶段已完成→点亮成下一阶段色,否则浅灰。给步骤条单独占一行、留足横向空间。
var ProcessStepper = function ProcessStepper(_ref6) {
  var steps = _ref6.steps;
  if (!Array.isArray(steps) || steps.length === 0) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      marginTop: 8,
      width: '100%'
    }
  }, steps.map(function (s, i) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: s.id || i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        flexShrink: 0,
        width: 84
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        height: 44,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        color: '#fff',
        background: s.done ? s.color : '#e7e5e4',
        boxShadow: s.done ? "0 3px 8px ".concat(s.color, "66") : 'none'
      }
    }, s.done ? s.icon : /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#a8a29e',
        fontSize: 15,
        fontWeight: 700
      }
    }, i + 1)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        marginTop: 6,
        lineHeight: 1.2,
        fontWeight: 700,
        color: s.done ? '#1c1917' : '#a8a29e'
      }
    }, i + 1, ". ", s.label), s.who ? s.done ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        lineHeight: 1.2,
        fontWeight: 700,
        color: nameColor(s.who),
        maxWidth: 80,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      title: s.who
    }, s.who) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        lineHeight: 1.2,
        color: '#a8a29e',
        maxWidth: 80,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      title: '待 ' + s.who
    }, "\u5F85 ", s.who) : /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        lineHeight: 1.2,
        color: '#d6d3d1'
      }
    }, "\u2014"), s.when && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: '#a8a29e',
        marginTop: 1,
        lineHeight: 1.3
      }
    }, s.when)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        height: 4,
        borderRadius: 2,
        flex: '1 1 0%',
        minWidth: 14,
        marginTop: 20,
        background: steps[i + 1].done ? steps[i + 1].color : '#e7e5e4'
      }
    }));
  }));
};
try {
  window.ProcessStepper = ProcessStepper;
} catch (e) {}
function wsOrderSite(no) {
  var m = String(no || '').toUpperCase().match(/^([A-Z]+)/);
  if (!m) return null;
  var p = m[1];
  return PREFIX_TO_SITE_WS[p] || PREFIX_TO_SITE_WS[p.slice(0, 2)] || PREFIX_TO_SITE_WS[p.slice(0, 1)] || null;
}
function wsNormKey(no) {
  // 去 # / 取主号(忽略 /子单、-补发后缀)
  return String(no || '').trim().replace(/^#/, '').split(/[\/\s]/)[0].replace(/-\d+$/, '').replace(/BU.*$/i, '').trim();
}
function wsPickImg(li) {
  if (!li) return '';
  var cands = [li.image_url, li.imageUrl, li.img, li.img_url, li.thumbnail, li.product_image, li.featured_image, li.image];
  for (var _i = 0, _cands = cands; _i < _cands.length; _i++) {
    var c = _cands[_i];
    if (typeof c === 'string' && c.trim()) return c.trim();
    if (c && _typeof(c) === 'object') {
      var s = c.src || c.url || c.image_url;
      if (s) return s;
    }
  }
  return '';
}
// 订单后台搜索链接(无需额外请求,直接拼 Shopify admin 搜索)
function wsOrderAdminUrl(no) {
  var d = wsGuessDomain(no);
  if (!d || /mooielight/i.test(d)) return '';
  return "https://".concat(d, "/admin/orders?query=").concat(encodeURIComponent(wsNormKey(no)));
}
var _wsOrderCache = {};
function wsFetchOrderProducts(_x10) {
  return _wsFetchOrderProducts.apply(this, arguments);
} // 🆕 fix49: 上传附件到 WorkTrack-KPI Storage `attachments` bucket;fix106: 只压缩图片,视频/其他文件原样上传
function _wsFetchOrderProducts() {
  _wsFetchOrderProducts = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(orderNo) {
    var base, domain, ck, hit, isWoo, _i2, _arr, nm, body, res, json, arr, _o$total_price_set, _o$total_price_set2, o, li, products, oid, orderUrl, cust, bill, email, cname, total, currency, country, _v, v, _t12;
    return _regenerator().w(function (_context17) {
      while (1) switch (_context17.p = _context17.n) {
        case 0:
          base = wsNormKey(orderNo);
          if (base) {
            _context17.n = 1;
            break;
          }
          return _context17.a(2, null);
        case 1:
          domain = wsGuessDomain(base);
          if (domain) {
            _context17.n = 2;
            break;
          }
          return _context17.a(2, null);
        case 2:
          ck = domain + '|' + base;
          hit = _wsOrderCache[ck];
          if (!(hit && Date.now() - hit.ts < 5 * 60 * 1000)) {
            _context17.n = 3;
            break;
          }
          return _context17.a(2, hit.v);
        case 3:
          isWoo = /mooielight/i.test(domain);
          _context17.p = 4;
          _i2 = 0, _arr = [base, '#' + base];
        case 5:
          if (!(_i2 < _arr.length)) {
            _context17.n = 10;
            break;
          }
          nm = _arr[_i2];
          body = isWoo ? {
            store_id: 'mooielight',
            action: 'list_orders',
            params: {
              search: nm,
              per_page: 5
            }
          } : {
            shop: domain,
            action: 'list_orders',
            params: {
              name: nm,
              status: 'any',
              limit: 5,
              auto_save: false
            }
          };
          _context17.n = 6;
          return fetch(EDGE_BASE_WS + '/' + (isWoo ? 'woo-api' : 'shopify-api'), {
            method: 'POST',
            headers: {
              'Authorization': 'Bearer ' + ORDERS_KEY_WS,
              'apikey': ORDERS_KEY_WS,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
          });
        case 6:
          res = _context17.v;
          if (res.ok) {
            _context17.n = 7;
            break;
          }
          return _context17.a(3, 9);
        case 7:
          _context17.n = 8;
          return res.json()["catch"](function () {
            return null;
          });
        case 8:
          json = _context17.v;
          arr = json && (json.orders || json.data || []);
          if (!(json && json.ok !== false && Array.isArray(arr) && arr.length)) {
            _context17.n = 9;
            break;
          }
          o = arr[0];
          li = o.line_items || o.raw_payload && o.raw_payload.line_items || [];
          products = li.map(function (it) {
            return {
              title: it.title || it.name || '',
              image_url: wsPickImg(it),
              quantity: it.quantity || 1
            };
          }).filter(function (p) {
            return p.image_url || p.title;
          });
          oid = o.id || o.shopify_order_id;
          orderUrl = oid && !isWoo ? "https://".concat(domain, "/admin/orders/").concat(oid) : wsOrderAdminUrl(orderNo); // 🆕 fix119: 一并带回客户邮箱/名字 + 金额 + 币种(供表单自动填充)
          cust = o.customer || {};
          bill = o.billing || o.raw_payload && o.raw_payload.billing || {};
          email = o.email || cust.email || bill.email || '';
          cname = [cust.first_name || bill.first_name, cust.last_name || bill.last_name].filter(Boolean).join(' ').trim() || o.name || [bill.first_name, bill.last_name].filter(Boolean).join(' ').trim() || '';
          total = o.current_total_price || o.total_price || o.total || ((_o$total_price_set = o.total_price_set) === null || _o$total_price_set === void 0 || (_o$total_price_set = _o$total_price_set.shop_money) === null || _o$total_price_set === void 0 ? void 0 : _o$total_price_set.amount) || '';
          currency = o.currency || o.presentment_currency || ((_o$total_price_set2 = o.total_price_set) === null || _o$total_price_set2 === void 0 || (_o$total_price_set2 = _o$total_price_set2.shop_money) === null || _o$total_price_set2 === void 0 ? void 0 : _o$total_price_set2.currency_code) || 'USD';
          country = o.shipping_address && o.shipping_address.country_code || cust.default_address && cust.default_address.country_code || bill.country || '' || '';
          _v = {
            products: products,
            orderUrl: orderUrl,
            domain: domain,
            email: email,
            customerName: cname,
            total: total ? String(total) : '',
            currency: currency,
            country: country
          };
          _wsOrderCache[ck] = {
            ts: Date.now(),
            v: _v
          };
          return _context17.a(2, _v);
        case 9:
          _i2++;
          _context17.n = 5;
          break;
        case 10:
          _context17.n = 12;
          break;
        case 11:
          _context17.p = 11;
          _t12 = _context17.v;
          console.warn('wsFetchOrderProducts', orderNo, _t12);
        case 12:
          v = {
            products: [],
            orderUrl: wsOrderAdminUrl(orderNo),
            domain: domain
          };
          _wsOrderCache[ck] = {
            ts: Date.now(),
            v: v
          };
          return _context17.a(2, v);
      }
    }, _callee17, null, [[4, 11]]);
  }));
  return _wsFetchOrderProducts.apply(this, arguments);
}
function uploadAttachmentToWtkpi(_x11) {
  return _uploadAttachmentToWtkpi.apply(this, arguments);
} // 🆕 fix49: 通用图片压缩(类似 quotation 的 compressImageFile,但通用)
function _uploadAttachmentToWtkpi() {
  _uploadAttachmentToWtkpi = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(file) {
    var client, isImage, payload, ext, path, _yield$client$storage, error, _client$storage$from$, publicUrl, _t13;
    return _regenerator().w(function (_context18) {
      while (1) switch (_context18.n) {
        case 0:
          client = getWtkpiClient();
          if (client) {
            _context18.n = 1;
            break;
          }
          throw new Error('拍摄部 Supabase 未配置 — 请进 ⚙ 设置中心配置');
        case 1:
          isImage = (file.type || '').startsWith('image/'); // 🆕 fix106: 之前视频也被强行走 canvas 图片压缩 → new Image() 无法加载视频 → 失败。现在只有图片压缩,视频原样传。
          if (!isImage) {
            _context18.n = 3;
            break;
          }
          _context18.n = 2;
          return compressImageForUpload(file, 1600, 0.85);
        case 2:
          _t13 = _context18.v;
          _context18.n = 4;
          break;
        case 3:
          _t13 = file;
        case 4:
          payload = _t13;
          ext = (file.name || (isImage ? 'img.png' : 'file.bin')).split('.').pop() || (isImage ? 'png' : 'bin');
          path = "cs-requests/".concat(Date.now(), "-").concat(crypto.randomUUID().slice(0, 8), ".").concat(ext);
          _context18.n = 5;
          return client.storage.from('attachments').upload(path, payload, {
            upsert: false,
            contentType: payload.type || file.type || (isImage ? 'image/jpeg' : 'application/octet-stream')
          });
        case 5:
          _yield$client$storage = _context18.v;
          error = _yield$client$storage.error;
          if (!error) {
            _context18.n = 6;
            break;
          }
          throw error;
        case 6:
          _client$storage$from$ = client.storage.from('attachments').getPublicUrl(path), publicUrl = _client$storage$from$.data.publicUrl;
          return _context18.a(2, {
            name: file.name || (isImage ? 'screenshot.png' : 'attachment'),
            url: publicUrl,
            mime: payload.type || file.type || (isImage ? 'image/jpeg' : 'application/octet-stream'),
            // 🆕 fix72: 三方统一附件结构需要 mime
            size: payload.size || file.size || 0,
            uploaded_at_ms: Date.now()
          });
      }
    }, _callee18);
  }));
  return _uploadAttachmentToWtkpi.apply(this, arguments);
}
function compressImageForUpload(_x12, _x13, _x14) {
  return _compressImageForUpload.apply(this, arguments);
} // 🆕 fix49: 提交一个拍摄需求 — 写入 photo_logs 表
function _compressImageForUpload() {
  _compressImageForUpload = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(file, maxWidth, quality) {
    return _regenerator().w(function (_context19) {
      while (1) switch (_context19.n) {
        case 0:
          return _context19.a(2, new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function (e) {
              var img = new Image();
              img.onload = function () {
                var canvas = document.createElement('canvas');
                var w = img.width,
                  h = img.height;
                if (w > maxWidth) {
                  h = h * maxWidth / w;
                  w = maxWidth;
                }
                canvas.width = w;
                canvas.height = h;
                canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                canvas.toBlob(function (blob) {
                  if (blob) resolve(new File([blob], file.name, {
                    type: 'image/jpeg'
                  }));else reject(new Error('压缩失败'));
                }, 'image/jpeg', quality);
              };
              img.onerror = function () {
                return reject(new Error('图片加载失败'));
              };
              img.src = e.target.result;
            };
            reader.onerror = function () {
              return reject(new Error('文件读取失败'));
            };
            reader.readAsDataURL(file);
          }));
      }
    }, _callee19);
  }));
  return _compressImageForUpload.apply(this, arguments);
}
function submitPhotoRequest(_x15) {
  return _submitPhotoRequest.apply(this, arguments);
} // 🆕 fix49: 列出当前用户提的所有需求 / 全部需求(主管视角)
// 🆕 fix53 v3: 列出全部 photo_logs(不过滤 source),客户端按 sub-tab 筛选
// 🆕 fix140: 分页 — 不再一次性 limit:500 全拉;默认拉最近 150 条(配 updated_at 索引),消费方「加载更多」按需追加。
function _submitPhotoRequest() {
  _submitPhotoRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(_ref7) {
    var productName, sku, productImage, applicableShops, currentUser, reason, urgency, attachments, externalRefId, client, now, row, _yield$client$from$in, data, error;
    return _regenerator().w(function (_context20) {
      while (1) switch (_context20.n) {
        case 0:
          productName = _ref7.productName, sku = _ref7.sku, productImage = _ref7.productImage, applicableShops = _ref7.applicableShops, currentUser = _ref7.currentUser, reason = _ref7.reason, urgency = _ref7.urgency, attachments = _ref7.attachments, externalRefId = _ref7.externalRefId;
          client = getWtkpiClient();
          if (client) {
            _context20.n = 1;
            break;
          }
          throw new Error('拍摄部 Supabase 未配置');
        case 1:
          now = Date.now();
          row = {
            id: crypto.randomUUID(),
            // 🚨 关键:必须 UUID,不能用短串
            product_name: productName,
            sku: sku || null,
            product_image: productImage || null,
            applicable_shops: applicableShops || [],
            product_type: '客服需求',
            product_notes: null,
            status: 'draft',
            priority: urgency === 'urgent' ? 'urgent' : 'normal',
            notes: null,
            external_request: {
              source: '客服',
              from_name: currentUser.name + (currentUser.alias ? ' ' + currentUser.alias : ''),
              from_user_id: currentUser.id,
              from_dept: '客服部',
              reason: reason,
              urgency: urgency || 'normal',
              attachments: attachments || [],
              created_at_ms: now,
              external_ref_id: externalRefId || null
            },
            // 🚨 关键:NOT NULL 审计字段,不能漏
            created_by_id: currentUser.id,
            created_by_name: currentUser.name + (currentUser.alias ? ' ' + currentUser.alias : ''),
            created_at_ms: now,
            updated_at: new Date().toISOString()
          };
          _context20.n = 2;
          return client.from('photo_logs').insert(row).select().single();
        case 2:
          _yield$client$from$in = _context20.v;
          data = _yield$client$from$in.data;
          error = _yield$client$from$in.error;
          if (!error) {
            _context20.n = 3;
            break;
          }
          throw error;
        case 3:
          return _context20.a(2, data);
      }
    }, _callee20);
  }));
  return _submitPhotoRequest.apply(this, arguments);
}
function listPhotoRequests() {
  return _listPhotoRequests.apply(this, arguments);
} // 🆕 fix53 v3: 协作编辑产品基础字段(merge,不覆盖)
function _listPhotoRequests() {
  _listPhotoRequests = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21() {
    var opts,
      client,
      limit,
      offset,
      _yield$client$from$se2,
      data,
      error,
      _args21 = arguments;
    return _regenerator().w(function (_context21) {
      while (1) switch (_context21.n) {
        case 0:
          opts = _args21.length > 0 && _args21[0] !== undefined ? _args21[0] : {};
          client = getWtkpiClient();
          if (client) {
            _context21.n = 1;
            break;
          }
          return _context21.a(2, []);
        case 1:
          limit = opts.limit || 150;
          offset = opts.offset || 0;
          _context21.n = 2;
          return client.from('photo_logs').select('*').order('updated_at', {
            ascending: false
          }).range(offset, offset + limit - 1);
        case 2:
          _yield$client$from$se2 = _context21.v;
          data = _yield$client$from$se2.data;
          error = _yield$client$from$se2.error;
          if (!error) {
            _context21.n = 3;
            break;
          }
          console.error('[WTKPI] 拉需求列表失败', error);
          return _context21.a(2, []);
        case 3:
          return _context21.a(2, data || []);
      }
    }, _callee21);
  }));
  return _listPhotoRequests.apply(this, arguments);
}
function updatePhotoRequestBasics(_x16, _x17) {
  return _updatePhotoRequestBasics.apply(this, arguments);
} // 🆕 fix53 v3: 追加附件/补充原因(merge external_request,不覆盖)
function _updatePhotoRequestBasics() {
  _updatePhotoRequestBasics = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22(logId, basics) {
    var client, allowed, clean, _i3, _allowed, k, _yield$client$from$up2, error;
    return _regenerator().w(function (_context22) {
      while (1) switch (_context22.n) {
        case 0:
          client = getWtkpiClient();
          if (client) {
            _context22.n = 1;
            break;
          }
          throw new Error('拍摄部 Supabase 未配置');
        case 1:
          allowed = ['product_name', 'sku', 'product_image', 'applicable_shops', 'product_type', 'product_notes'];
          clean = {};
          for (_i3 = 0, _allowed = allowed; _i3 < _allowed.length; _i3++) {
            k = _allowed[_i3];
            if (basics[k] !== undefined) clean[k] = basics[k];
          }
          clean.updated_at = new Date().toISOString();
          _context22.n = 2;
          return client.from('photo_logs').update(clean).eq('id', logId);
        case 2:
          _yield$client$from$up2 = _context22.v;
          error = _yield$client$from$up2.error;
          if (!error) {
            _context22.n = 3;
            break;
          }
          throw error;
        case 3:
          return _context22.a(2);
      }
    }, _callee22);
  }));
  return _updatePhotoRequestBasics.apply(this, arguments);
}
function appendToPhotoRequest(_x18, _x19) {
  return _appendToPhotoRequest.apply(this, arguments);
} // 🆕 fix53 v3: 批量录入 — 客服汇总员一次提交多条
function _appendToPhotoRequest() {
  _appendToPhotoRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(logId, additions) {
    var _additions$attachment;
    var client, _yield$client$from$se3, row, e1, current, merged, _yield$client$from$up3, e2;
    return _regenerator().w(function (_context23) {
      while (1) switch (_context23.n) {
        case 0:
          client = getWtkpiClient();
          if (client) {
            _context23.n = 1;
            break;
          }
          throw new Error('拍摄部 Supabase 未配置');
        case 1:
          _context23.n = 2;
          return client.from('photo_logs').select('external_request').eq('id', logId).single();
        case 2:
          _yield$client$from$se3 = _context23.v;
          row = _yield$client$from$se3.data;
          e1 = _yield$client$from$se3.error;
          if (!e1) {
            _context23.n = 3;
            break;
          }
          throw e1;
        case 3:
          current = row.external_request || {};
          merged = _objectSpread({}, current);
          if ((_additions$attachment = additions.attachments) !== null && _additions$attachment !== void 0 && _additions$attachment.length) {
            merged.attachments = [].concat(_toConsumableArray(current.attachments || []), _toConsumableArray(additions.attachments));
          }
          if (additions.reason_append) {
            merged.reason = (current.reason || '') + "\n\n--- ".concat(new Date().toLocaleDateString('zh-CN'), " \u8865\u5145(").concat(additions.editor_name || '', ") ---\n") + additions.reason_append;
          }
          if (additions.urgency) merged.urgency = additions.urgency;
          _context23.n = 4;
          return client.from('photo_logs').update({
            external_request: merged,
            updated_at: new Date().toISOString()
          }).eq('id', logId);
        case 4:
          _yield$client$from$up3 = _context23.v;
          e2 = _yield$client$from$up3.error;
          if (!e2) {
            _context23.n = 5;
            break;
          }
          throw e2;
        case 5:
          return _context23.a(2);
      }
    }, _callee23);
  }));
  return _appendToPhotoRequest.apply(this, arguments);
}
function batchSubmitPhotoRequests(_x20, _x21, _x22) {
  return _batchSubmitPhotoRequests.apply(this, arguments);
} // 暴露到 window,方便 React 组件调用
function _batchSubmitPhotoRequests() {
  _batchSubmitPhotoRequests = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24(rows, defaults, currentUser) {
    var client, now, batchId, inserts, results, succeeded, failed, errors;
    return _regenerator().w(function (_context24) {
      while (1) switch (_context24.n) {
        case 0:
          client = getWtkpiClient();
          if (client) {
            _context24.n = 1;
            break;
          }
          throw new Error('拍摄部 Supabase 未配置');
        case 1:
          now = Date.now();
          batchId = crypto.randomUUID();
          inserts = rows.map(function (r) {
            var _rowAttachments$;
            var rowAttachments = Array.isArray(r.attachments) ? r.attachments : [];
            return {
              id: crypto.randomUUID(),
              product_name: r.productName || '(未填)',
              sku: r.sku || null,
              // 🆕 fix56: 如果该行有图,第一张作为 product_image 缩略图(便于列表显示)
              product_image: ((_rowAttachments$ = rowAttachments[0]) === null || _rowAttachments$ === void 0 ? void 0 : _rowAttachments$.url) || null,
              applicable_shops: r.applicableShops || defaults.applicableShops || [],
              product_type: '客服需求',
              status: 'draft',
              priority: (r.urgency || defaults.urgency) === 'urgent' ? 'urgent' : 'normal',
              external_request: {
                source: '客服',
                from_name: currentUser.name + (currentUser.alias ? ' ' + currentUser.alias : ''),
                from_user_id: currentUser.id,
                from_dept: '客服部',
                reason: (defaults.reasonPrefix ? defaults.reasonPrefix + ' · ' : '') + (r.reason || ''),
                urgency: r.urgency || defaults.urgency || 'normal',
                // 🆕 fix56: 把该行所有附件传过去
                attachments: rowAttachments,
                created_at_ms: now,
                external_ref_id: null,
                batch_id: batchId
              },
              created_by_id: currentUser.id,
              created_by_name: currentUser.name + (currentUser.alias ? ' ' + currentUser.alias : ''),
              created_at_ms: now,
              updated_at: new Date().toISOString()
            };
          });
          _context24.n = 2;
          return Promise.allSettled(inserts.map(function (row) {
            return client.from('photo_logs').insert(row);
          }));
        case 2:
          results = _context24.v;
          succeeded = results.filter(function (r) {
            return r.status === 'fulfilled' && !r.value.error;
          }).length;
          failed = results.length - succeeded;
          errors = results.filter(function (r) {
            var _r$value;
            return r.status === 'rejected' || ((_r$value = r.value) === null || _r$value === void 0 ? void 0 : _r$value.error);
          }).map(function (r) {
            var _r$reason, _r$value2;
            return ((_r$reason = r.reason) === null || _r$reason === void 0 ? void 0 : _r$reason.message) || ((_r$value2 = r.value) === null || _r$value2 === void 0 || (_r$value2 = _r$value2.error) === null || _r$value2 === void 0 ? void 0 : _r$value2.message) || 'unknown';
          });
          return _context24.a(2, {
            succeeded: succeeded,
            failed: failed,
            errors: errors,
            batchId: batchId
          });
      }
    }, _callee24);
  }));
  return _batchSubmitPhotoRequests.apply(this, arguments);
}
if (typeof window !== 'undefined') {
  window.getWtkpiClient = getWtkpiClient;
  window.isWtkpiConfigured = isWtkpiConfigured;
  window.uploadAttachmentToWtkpi = uploadAttachmentToWtkpi;
  window.submitPhotoRequest = submitPhotoRequest;
  window.listPhotoRequests = listPhotoRequests;
  window.updatePhotoRequestBasics = updatePhotoRequestBasics;
  window.appendToPhotoRequest = appendToPhotoRequest;
  window.batchSubmitPhotoRequests = batchSubmitPhotoRequests;
}

// ════════════════════════════════════════════════════════════════════
// 🆕 v22-CY: 公司预设网站列表 (13 个 + 其他)
// 三方系统共用 — 避免手输导致 "Vakkerlight" / "vakkerlight" / "vakker light" 拼写不一致
// label 是写入数据库的标准名称
// ════════════════════════════════════════════════════════════════════
var SHOPS_PRESET = [{
  id: 'vakkerlight',
  label: 'Vakkerlight',
  category: '独立站'
}, {
  id: 'docos',
  label: 'Docos.us',
  category: '独立站'
}, {
  id: 'mooijane',
  label: 'Mooijane',
  category: '独立站'
}, {
  id: 'mooiehome',
  label: 'Mooiehome',
  category: '独立站'
}, {
  id: 'radilum',
  label: 'Radilum',
  category: '独立站'
}, {
  id: 'mooielight',
  label: 'Mooielight',
  category: '独立站'
}, {
  id: 'dekorfine',
  label: 'Dekorfine',
  category: '独立站'
}, {
  id: 'pinlighting',
  label: 'Pinlighting',
  category: '独立站'
}, {
  id: 'lumioshine',
  label: 'Lumioshine',
  category: '独立站'
}, {
  id: 'rayonshine',
  label: 'Rayonshine',
  category: '独立站'
}, {
  id: 'alibaba',
  label: '阿里巴巴国际站',
  category: '平台'
}, {
  id: 'radilum-inc',
  label: 'Radilum INC',
  category: '实体公司'
}, {
  id: 'other',
  label: '其他(手填备注)',
  category: '其他'
}];
// 给主管/admin 用的可选网站(去掉"其他"那行 - "其他"是 sentinel 值)
var SHOPS_SELECTABLE = SHOPS_PRESET.filter(function (s) {
  return s.id !== 'other';
});

// 🆕 评价任务 site 统一用【公开域名】(与美工 AI 提示词、worktrack 配置一致)
var REVIEW_DOMAINS = ['vakkerlight.com', 'radium.com', 'pinlighting.com', 'dekorfine.com', 'docos.us', 'mooiehome.com', 'lumioshine.com', 'rayonshine.com', 'mooijane.com', 'mooielight.com'];
// 订单代码 / 品牌名 / 内部店铺名 → 公开域名(别名,大小写无关)
var SITE_ALIAS_DOMAIN = {
  vk: 'vakkerlight.com',
  v: 'vakkerlight.com',
  k: 'vakkerlight.com',
  vakkerlight: 'vakkerlight.com',
  vakkerlighting: 'vakkerlight.com',
  rd: 'radium.com',
  radium: 'radium.com',
  radilum: 'radium.com',
  vakkerge: 'radium.com',
  pl: 'pinlighting.com',
  pinlighting: 'pinlighting.com',
  vkfrench: 'pinlighting.com',
  df: 'dekorfine.com',
  dekorfine: 'dekorfine.com',
  dc: 'docos.us',
  docos: 'docos.us',
  docolight: 'docos.us',
  decora: 'docos.us',
  mh: 'mooiehome.com',
  mooiehome: 'mooiehome.com',
  vkwholesale: 'mooiehome.com',
  ls: 'lumioshine.com',
  lumioshine: 'lumioshine.com',
  docolamp: 'lumioshine.com',
  rs: 'rayonshine.com',
  rayonshine: 'rayonshine.com',
  decormote: 'rayonshine.com',
  mj: 'mooijane.com',
  jd: 'mooijane.com',
  mooijane: 'mooijane.com',
  janedecor: 'mooijane.com',
  myjewelry: 'mooijane.com',
  ml: 'mooielight.com',
  mo: 'mooielight.com',
  mooielight: 'mooielight.com'
};
// 把任意写法(产品链接 / 代码 / 品牌 / 域名)规范成公开域名
var siteToDomain = function siteToDomain(raw, url) {
  if (url) {
    try {
      var h = new URL(url).hostname.toLowerCase().replace(/^www\./, '');
      var hit = REVIEW_DOMAINS.find(function (d) {
        return h === d || h.endsWith('.' + d);
      });
      if (hit) return hit;
      var key = Object.keys(SITE_ALIAS_DOMAIN).find(function (k) {
        return k.length >= 3 && h.includes(k);
      });
      if (key) return SITE_ALIAS_DOMAIN[key];
    } catch (e) {}
  }
  var r = (raw || '').trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/.*$/, '');
  if (!r) return '';
  if (REVIEW_DOMAINS.includes(r)) return r;
  return SITE_ALIAS_DOMAIN[r] || (raw || '').trim();
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix57: 邮件模板预置库 — 跨境电商灯具客服 15 个高频场景
// 占位符约定:{{customer_name}} {{order_no}} {{tracking_no}} {{product_name}}
//             {{ship_date}} {{est_delivery}} {{refund_amount}} {{store_name}} {{my_name}}
// ════════════════════════════════════════════════════════════════════
var EMAIL_TEMPLATE_CATEGORIES = [{
  id: 'shipping',
  label: '📦 发货 / 物流',
  color: '#0369a1',
  bg: '#dbeafe'
}, {
  id: 'delay',
  label: '⏰ 延迟 / 缺货',
  color: '#d97706',
  bg: '#fef3c7'
}, {
  id: 'return',
  label: '↩️ 退货 / 退款',
  color: '#a855f7',
  bg: '#f3e8ff'
}, {
  id: 'damage',
  label: '📦 损坏 / 丢失',
  color: '#dc2626',
  bg: '#fee2e2'
}, {
  id: 'inquiry',
  label: '💬 咨询 / 售前',
  color: '#0284c7',
  bg: '#e0f2fe'
}, {
  id: 'thanks',
  label: '❤️ 感谢 / 复购',
  color: '#16a34a',
  bg: '#dcfce7'
}, {
  id: 'review',
  label: '⭐ 评价邀请',
  color: '#ca8a04',
  bg: '#fef9c3'
}, {
  id: 'custom',
  label: '🎨 自定义',
  color: '#86868b',
  bg: '#f5f5f7'
}];
var EMAIL_TEMPLATE_PRESETS = [{
  id: 'tpl_order_confirm',
  category: 'shipping',
  title: '订单确认 · Order Confirmation',
  subject: 'Order #{{order_no}} confirmed — Thanks for choosing {{store_name}}!',
  body: "Hi {{customer_name}},\n\nThanks so much for your order from {{store_name}}! We've received your order #{{order_no}} and our team is preparing it for shipment.\n\nOrder details:\n- {{product_name}}\n- Estimated shipping: within 3-5 business days\n\nYou'll get another email with tracking information as soon as your package ships. If you have any questions in the meantime, just reply to this email \u2014 I'm happy to help.\n\nWarm regards,\n{{my_name}}\n{{store_name}} Customer Care"
}, {
  id: 'tpl_shipped',
  category: 'shipping',
  title: '已发货通知 · Shipped Notification',
  subject: 'Good news — Your order #{{order_no}} is on its way 📦',
  body: "Hi {{customer_name}},\n\nGreat news! Your order #{{order_no}} from {{store_name}} has shipped today ({{ship_date}}).\n\nTracking number: {{tracking_no}}\nEstimated delivery: {{est_delivery}}\n\nYou can track your package here:\n[Tracking link]\n\nPlease allow 24-48 hours for the tracking information to update. If you don't see movement after that, just reply to this email and I'll look into it right away.\n\nThanks for choosing {{store_name}}!\n\n{{my_name}}"
}, {
  id: 'tpl_delay_apology',
  category: 'delay',
  title: '物流延迟道歉 · Shipping Delay',
  subject: 'A quick update on your order #{{order_no}}',
  body: "Hi {{customer_name}},\n\nI want to personally apologize \u2014 your order #{{order_no}} is experiencing an unexpected delay in shipping. I know how frustrating this is, especially when you've been looking forward to receiving your {{product_name}}.\n\nHere's what's happening:\n[Briefly explain the cause \u2014 carrier delay / customs / warehouse]\n\nUpdated estimated delivery: {{est_delivery}}\n\nAs a small thank-you for your patience, I'd like to offer you [discount code / partial refund / free upgrade]. Please let me know if there's anything else I can do to make this right.\n\nSincerely,\n{{my_name}}\n{{store_name}} Customer Care"
}, {
  id: 'tpl_out_of_stock',
  category: 'delay',
  title: '缺货通知 · Out of Stock',
  subject: 'Important update on your order #{{order_no}}',
  body: "Hi {{customer_name}},\n\nThanks so much for your order #{{order_no}}. I'm reaching out because the {{product_name}} you ordered is currently out of stock, and our next shipment isn't expected until {{est_delivery}}.\n\nI want to give you a few options:\n1. Wait for restock \u2014 we'll prioritize your order as soon as inventory arrives\n2. Switch to a similar item \u2014 I can recommend a few alternatives\n3. Full refund \u2014 no questions asked, processed within 24 hours\n\nWhatever works best for you, just let me know and I'll handle it right away.\n\nI'm really sorry for the inconvenience.\n\n{{my_name}}"
}, {
  id: 'tpl_return_approved',
  category: 'return',
  title: '退货已批准 · Return Approved',
  subject: 'Your return request for order #{{order_no}} is approved',
  body: "Hi {{customer_name}},\n\nYour return request for order #{{order_no}} has been approved. Here's what to do next:\n\n1. Pack the {{product_name}} in its original packaging (if available)\n2. Use the prepaid return label attached to this email\n3. Drop off at any [carrier] location\n\nOnce we receive and inspect the item (usually 2-3 business days), your refund of {{refund_amount}} will be processed to your original payment method. Refunds typically appear within 5-10 business days.\n\nIf you have any questions, just reply here.\n\nThanks for being patient,\n{{my_name}}"
}, {
  id: 'tpl_refund_processed',
  category: 'return',
  title: '退款已处理 · Refund Processed',
  subject: 'Your refund of {{refund_amount}} has been processed',
  body: "Hi {{customer_name}},\n\nI'm following up to confirm that your refund of {{refund_amount}} for order #{{order_no}} has been processed today.\n\nDepending on your bank, the funds typically appear in 5-10 business days. If you don't see them after 10 days, please let me know \u2014 sometimes a quick check with your bank helps locate the deposit.\n\nWe really appreciate your patience throughout this process, and I'm sorry the {{product_name}} didn't work out. We hope to have another chance to serve you in the future.\n\nBest,\n{{my_name}}\n{{store_name}}"
}, {
  id: 'tpl_damaged',
  category: 'damage',
  title: '包裹损坏处理 · Damaged Package',
  subject: 'So sorry about your damaged package — let me fix this',
  body: "Hi {{customer_name}},\n\nI'm really sorry to hear that your {{product_name}} arrived damaged. That's definitely not the experience we want for you.\n\nTo resolve this quickly, could you please send a few photos showing:\n1. The outer packaging (if you still have it)\n2. The damaged area on the product\n3. The shipping label\n\nOnce I have those, I can offer you either:\n- A free replacement (we'll ship within 24 hours)\n- A full refund of {{refund_amount}}\n\nWhichever you prefer is fine \u2014 just let me know.\n\nAgain, my sincere apologies,\n{{my_name}}"
}, {
  id: 'tpl_lost_package',
  category: 'damage',
  title: '包裹丢失 · Lost Package',
  subject: 'Looking into your missing package — order #{{order_no}}',
  body: "Hi {{customer_name}},\n\nThanks for letting me know that your package (order #{{order_no}}) hasn't arrived. I checked the tracking and I can see it shows {{tracking_no}} stuck at [last scan location] since [date].\n\nI've opened an investigation with the carrier \u2014 they'll typically respond within 5-7 business days. In the meantime, I want to make sure you're not left waiting, so I'm going to:\n\n[Option A \u2014 ship replacement now]\nShip a replacement of your {{product_name}} today. If the original turns up, you can keep it as a thank-you for your patience.\n\n[Option B \u2014 refund]\nProcess a full refund of {{refund_amount}} now while we investigate.\n\nJust reply with which one you'd prefer.\n\nTruly sorry for the trouble,\n{{my_name}}"
}, {
  id: 'tpl_product_inquiry',
  category: 'inquiry',
  title: '产品咨询回复 · Product Inquiry',
  subject: 'Re: Your question about {{product_name}}',
  body: "Hi {{customer_name}},\n\nThanks so much for reaching out about the {{product_name}}! I'd love to help you decide if it's the right fit.\n\nHere are the key specs:\n- Dimensions: [W \xD7 H \xD7 D]\n- Material: [brass / iron / glass / fabric]\n- Bulb: [E26 / E12 / included or not]\n- Voltage: 110V (US/Canada)\n- Dimmable: [yes/no \u2014 works with standard dimmers]\n\nA few customer favorites:\n- [most common use case]\n- [popular pairing or matching item]\n\nIf you have any other questions \u2014 about installation, dimensions, or matching pieces \u2014 I'm here to help. Just hit reply.\n\nWarm regards,\n{{my_name}}"
}, {
  id: 'tpl_shipping_cost',
  category: 'inquiry',
  title: '运费咨询 · Shipping Cost Question',
  subject: 'Re: Shipping to your address',
  body: "Hi {{customer_name}},\n\nThanks for your question! Here's a quick breakdown of shipping for your area:\n\n- Standard shipping (5-8 business days): Free on orders over $99 (or $9.99 below that)\n- Expedited shipping (2-3 business days): $24.99\n- Priority shipping (1-2 business days): $39.99\n\nAll orders ship from our [California / fulfillment center] and include full tracking. We'll send you the tracking number as soon as your order leaves the warehouse.\n\nIf you're shopping for a specific date \u2014 like a housewarming or move-in \u2014 let me know and I can recommend the best option.\n\nBest,\n{{my_name}}"
}, {
  id: 'tpl_customs',
  category: 'inquiry',
  title: '关税说明 · Customs / Duties',
  subject: 'About customs and duties for your order',
  body: "Hi {{customer_name}},\n\nGreat question about customs! Here's what you need to know:\n\nFor shipments to [Canada / EU / UK / Australia]:\n- Most orders under [threshold] are duty-free\n- Above that, the carrier (UPS/FedEx/DHL) collects duties on delivery\n- We unfortunately can't prepay these on your behalf\n\nThe good news: duty amounts are typically small \u2014 usually under [X%] of the order value. The carrier will let you know the exact amount before delivery.\n\nIf you have any other questions about international shipping, I'm happy to help.\n\nCheers,\n{{my_name}}"
}, {
  id: 'tpl_thank_you',
  category: 'thanks',
  title: '购买感谢 · Thank You',
  subject: 'Just wanted to say thank you 💛',
  body: "Hi {{customer_name}},\n\nI just wanted to take a moment to say thanks for choosing {{store_name}}. As a [small / family-owned] business, every order really does mean a lot to us.\n\nYour {{product_name}} should be arriving soon \u2014 and we hope it brings you years of warm light and good memories.\n\nIf you ever need anything \u2014 installation tips, matching pieces, or just have a question \u2014 feel free to reply here directly. I personally read every message.\n\nWarmly,\n{{my_name}}\n{{store_name}}"
}, {
  id: 'tpl_review_request',
  category: 'review',
  title: '邀请评价 · Review Request',
  subject: 'How are you liking your {{product_name}}?',
  body: "Hi {{customer_name}},\n\nIt's been about a week since your {{product_name}} arrived, and I wanted to check in \u2014 how is it working out for you?\n\nIf you're loving it, I'd be so grateful if you could share a quick review \u2014 even one sentence and a photo helps other shoppers a lot. Here's where to leave one:\n\n[Review link]\n\nAnd if there's anything that's not quite right, please let me know and I'll personally make sure we fix it.\n\nThanks so much,\n{{my_name}}\n{{store_name}}"
}, {
  id: 'tpl_repurchase_discount',
  category: 'thanks',
  title: '老客户回购折扣 · Repurchase Discount',
  subject: 'A little thank-you from {{store_name}} 💝',
  body: "Hi {{customer_name}},\n\nI noticed you ordered from us a while back, and I just wanted to reach out personally to say thanks for supporting our shop.\n\nAs a small thank-you, I'd love to offer you 15% off your next order with code: WELCOME15\n\nIt's good on anything in the store \u2014 no minimum, no expiration on items already in your cart.\n\nIf there's something specific you've been eyeing, just hit reply and I can help you with sizing, finishes, or matching pieces.\n\nCheers,\n{{my_name}}"
}, {
  id: 'tpl_dispute_response',
  category: 'return',
  title: 'PayPal Dispute 回复 · Dispute Response',
  subject: 'Re: PayPal case for order #{{order_no}}',
  body: "Hi {{customer_name}},\n\nI noticed you opened a PayPal case for order #{{order_no}}. I want to make sure we resolve this directly \u2014 no need to wait for the PayPal process.\n\nCould you let me know specifically what went wrong? Was it a delivery issue, a product issue, or something else? Once I understand what happened, I can typically resolve it within 24 hours \u2014 usually with a refund, replacement, or partial credit.\n\nIf you can close the PayPal case and just reply to this email, that's the fastest path. Otherwise, I'll respond directly through PayPal \u2014 but the process there usually takes 2-3 weeks longer.\n\nEither way, I'm here to fix this.\n\nBest,\n{{my_name}}\n{{store_name}}"
}];

// ════════════════════════════════════════════════════════════════════
// 🆕 v22-CV/CW: 11 类分类 + 默认超时阈值
// 三方系统 (cs/design/po) 共享同一份分类定义,改一处必须同时改三处
// ════════════════════════════════════════════════════════════════════
var CDM_CATEGORIES = [{
  id: 'product_fix',
  label: '🛠 修改产品',
  color: '#92400e',
  bg: '#fef3c7',
  desc: '颜色/尺寸/字母/参数/SKU/视频/图片/可控硅调光 等错误',
  defaultTimeout: {
    urgent: 1,
    high: 2,
    normal: 5,
    low: 14
  }
}, {
  id: 'price_fix',
  label: '💰 改卖价',
  color: '#991b1b',
  bg: '#fee2e2',
  desc: '价格错误 · 通常紧急',
  defaultTimeout: {
    urgent: 1,
    high: 1,
    normal: 3,
    low: 7
  }
}, {
  id: 'product_remove',
  label: '🗑️ 下架删除',
  color: '#374151',
  bg: '#f3f4f6',
  desc: '产品下架 / 删除',
  defaultTimeout: {
    urgent: 1,
    high: 2,
    normal: 5,
    low: 14
  }
}, {
  id: 'new_product',
  label: '🆕 上新品',
  color: '#1e40af',
  bg: '#dbeafe',
  desc: '新品上架 / 客户定制 / 选网站自动派负责美工',
  defaultTimeout: {
    urgent: 2,
    high: 5,
    normal: 10,
    low: 21
  }
}, {
  id: 'reviews',
  label: '⭐ 做评价',
  color: '#92400e',
  bg: '#fde68a',
  desc: '产品评价生成(美工协助)',
  defaultTimeout: {
    urgent: 2,
    high: 5,
    normal: 7,
    low: 14
  }
}, {
  id: 'design_3d',
  label: '🎨 3D 渲染',
  color: '#5b21b6',
  bg: '#ede9fe',
  desc: '产品 3D 渲染 · 派给绑定网站的设计师',
  defaultTimeout: {
    urgent: 3,
    high: 7,
    normal: 14,
    low: 21
  }
}, {
  id: 'install_manual',
  label: '📐 安装说明书',
  color: '#0e7490',
  bg: '#cffafe',
  desc: '安装说明书 / 安装图 · 派给设计师',
  defaultTimeout: {
    urgent: 3,
    high: 7,
    normal: 14,
    low: 21
  }
}, {
  id: 'custom_lamp',
  label: '💡 非标定制',
  color: '#9d174d',
  bg: '#fce7f3',
  desc: '非标定制灯具 · 派给设计师',
  defaultTimeout: {
    urgent: 5,
    high: 10,
    normal: 21,
    low: 30
  }
}, {
  id: 'aftersales',
  label: '📞 售后处理',
  color: '#166534',
  bg: '#dcfce7',
  desc: '售后问题 / 退换货 / 投诉',
  defaultTimeout: {
    urgent: 1,
    high: 3,
    normal: 7,
    low: 14
  }
}, {
  id: 'form_feedback',
  label: '📋 表单反馈',
  color: '#334155',
  bg: '#f1f5f9',
  desc: '订单 / 合箱单 / 报价单等表单数据问题',
  defaultTimeout: {
    urgent: 2,
    high: 5,
    normal: 7,
    low: 14
  }
}, {
  id: 'general',
  label: '💬 其他',
  color: '#3730a3',
  bg: '#e0e7ff',
  desc: '其他需求 / 网站问题 / 一般沟通',
  defaultTimeout: {
    urgent: 2,
    high: 5,
    normal: 7,
    low: 14
  }
}];
// 旧分类 → 新分类映射(老数据自动兼容)
var CDM_LEGACY_CATEGORY_MAP = {
  'website_fix': 'product_fix',
  'price_error': 'price_fix',
  // new_product 同名
  // aftersales 同名
  'review': 'reviews',
  'design': 'design_3d'
  // general 同名
};
var CDM_PRIORITIES = [{
  id: 'urgent',
  label: '🚨 紧急',
  color: '#dc2626',
  bg: '#fee2e2'
}, {
  id: 'high',
  label: '⚡ 重要',
  color: '#f59e0b',
  bg: '#fef3c7'
}, {
  id: 'normal',
  label: '· 普通',
  color: '#57534e',
  bg: '#f5f5f4'
}, {
  id: 'low',
  label: '· 一般',
  color: '#78716c',
  bg: '#fafaf9'
}];
var CDM_STATUSES = [{
  id: 'pending',
  label: '⏳ 待处理',
  color: '#d97706',
  bg: '#fef3c7'
}, {
  id: 'in_progress',
  label: '🔄 处理中',
  color: '#2563eb',
  bg: '#dbeafe'
}, {
  id: 'done',
  label: '✅ 已完成',
  color: '#16a34a',
  bg: '#dcfce7'
}, {
  id: 'cancelled',
  label: '❌ 已取消',
  color: '#78716c',
  bg: '#f5f5f4'
}];
var CDM_SYSTEMS = [{
  id: 'design',
  label: '🎨 美工部',
  "short": '美工'
}, {
  id: 'cs',
  label: '📞 客服部',
  "short": '客服'
}, {
  id: 'po',
  label: '📋 跟单部',
  "short": '跟单'
}];
var CDM_RELATED_TYPES = [{
  id: 'order',
  label: '订单'
}, {
  id: 'product',
  label: '产品 SKU'
}, {
  id: 'customer',
  label: '客户'
}, {
  id: 'review',
  label: '评价'
}, {
  id: 'url',
  label: '网页 URL'
}];

// 当前客服系统的标识 — 三方系统共享 cross_dept_messages 表时区分自己
var MY_SYSTEM = 'cs';
var findCdm = function findCdm(arr, id) {
  return arr.find(function (x) {
    return x.id === id;
  }) || arr[arr.length - 1];
};

// ════════════════════════════════════════════════════════════════════
// 🆕 v22-CV/CW: 超时判定工具函数
// ════════════════════════════════════════════════════════════════════
function getCategoryDef(catId) {
  // 老分类自动映射到新分类
  var mapped = CDM_LEGACY_CATEGORY_MAP[catId] || catId;
  return CDM_CATEGORIES.find(function (c) {
    return c.id === mapped;
  }) || CDM_CATEGORIES[CDM_CATEGORIES.length - 1];
}
function getTimeoutDays(category, priority, system, timeoutOverride) {
  var _cat$defaultTimeout$p, _cat$defaultTimeout;
  try {
    var _timeoutOverride$syst;
    var o = timeoutOverride === null || timeoutOverride === void 0 || (_timeoutOverride$syst = timeoutOverride[system]) === null || _timeoutOverride$syst === void 0 || (_timeoutOverride$syst = _timeoutOverride$syst[category]) === null || _timeoutOverride$syst === void 0 ? void 0 : _timeoutOverride$syst[priority];
    if (typeof o === 'number' && o > 0) return o;
  } catch (e) {}
  var cat = getCategoryDef(category);
  return (_cat$defaultTimeout$p = (_cat$defaultTimeout = cat.defaultTimeout) === null || _cat$defaultTimeout === void 0 ? void 0 : _cat$defaultTimeout[priority]) !== null && _cat$defaultTimeout$p !== void 0 ? _cat$defaultTimeout$p : 7;
}
function isOverdue(message, timeoutOverride) {
  if (!message) return false;
  var status = message.status || 'pending';
  if (status === 'done' || status === 'cancelled') return false;
  var days = getTimeoutDays(message.category, message.priority, message.to_system, timeoutOverride);
  var createdAt = message.created_at_ms || 0;
  return Date.now() > createdAt + days * 86400000;
}
function getDueAt(message, timeoutOverride) {
  var days = getTimeoutDays(message.category, message.priority, message.to_system, timeoutOverride);
  return (message.created_at_ms || 0) + days * 86400000;
}
// 全局暴露,方便调试
if (typeof window !== 'undefined') {
  window.__cdmHelpers = {
    getCategoryDef: getCategoryDef,
    getTimeoutDays: getTimeoutDays,
    isOverdue: isOverdue,
    getDueAt: getDueAt
  };
}

// ════════════════════════════════════════════════════════════════════
// 📅 增强日期筛选系统 (fix15)
// 统一所有模块的日期筛选:本周/上周/本月/上月/任意月份/任意月份的第N周
// 用法: const [df, setDf] = useState({kind:'days', n:30});
//       const { start, end } = getDateRange(df);
//       arr.filter(x => x.created_at_ms >= start && x.created_at_ms < end);
//       <AdvancedDateFilter value={df} onChange={setDf} />
// ════════════════════════════════════════════════════════════════════

// 周划分按"自然月内的 1-7 / 8-14 / 15-21 / 22-28 / 29-月底"
// 这样老板说"6月第一周"= 6月1-7号 直观
function getDateRange(filter, nowMs) {
  if (typeof nowMs !== 'number') nowMs = Date.now();
  var now = new Date(nowMs);
  var today0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var todayStart = today0.getTime();
  var tomorrowStart = todayStart + 86400000;
  var getMondayMs = function getMondayMs(d) {
    var dt = new Date(d);
    var day = dt.getDay() || 7; // Sunday = 7
    return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() - (day - 1)).getTime();
  };
  var f = filter || {
    kind: 'all'
  };
  switch (f.kind) {
    case 'all':
      return {
        start: 0,
        end: Infinity
      };
    case 'today':
      return {
        start: todayStart,
        end: tomorrowStart
      };
    case 'yesterday':
      return {
        start: todayStart - 86400000,
        end: todayStart
      };
    case 'this_week':
      {
        var mon = getMondayMs(now);
        return {
          start: mon,
          end: mon + 7 * 86400000
        };
      }
    case 'last_week':
      {
        var _mon = getMondayMs(now);
        return {
          start: _mon - 7 * 86400000,
          end: _mon
        };
      }
    case 'this_month':
      {
        var s = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
        var e = new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime();
        return {
          start: s,
          end: e
        };
      }
    case 'last_month':
      {
        var _s = new Date(now.getFullYear(), now.getMonth() - 1, 1).getTime();
        var _e = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
        return {
          start: _s,
          end: _e
        };
      }
    case 'days':
      {
        var n = Math.max(1, parseInt(f.n, 10) || 7);
        return {
          start: todayStart - (n - 1) * 86400000,
          end: tomorrowStart
        };
      }
    case 'month':
      {
        var y = f.year,
          m = f.month; // month 1-12
        var _s2 = new Date(y, m - 1, 1).getTime();
        var _e2 = new Date(y, m, 1).getTime();
        return {
          start: _s2,
          end: _e2
        };
      }
    case 'week_of_month':
      {
        var _y = f.year,
          _m = f.month,
          w = f.week; // week 1-5
        var startDay = (w - 1) * 7 + 1; // 1, 8, 15, 22, 29
        var lastDayOfMonth = new Date(_y, _m, 0).getDate();
        var endDay = Math.min(w * 7, lastDayOfMonth); // 7, 14, 21, 28, last
        var _s3 = new Date(_y, _m - 1, startDay).getTime();
        var _e3 = new Date(_y, _m - 1, endDay + 1).getTime();
        return {
          start: _s3,
          end: _e3
        };
      }
    case 'year':
      {
        var _y2 = f.year;
        var _s4 = new Date(_y2, 0, 1).getTime();
        var _e4 = new Date(_y2 + 1, 0, 1).getTime();
        return {
          start: _s4,
          end: _e4
        };
      }
    case 'custom':
      return {
        start: f.startMs || 0,
        end: f.endMs || Infinity
      };
    default:
      return {
        start: 0,
        end: Infinity
      };
  }
}
function formatDateFilterLabel(filter) {
  var f = filter || {
    kind: 'all'
  };
  switch (f.kind) {
    case 'all':
      return '全部时间';
    case 'today':
      return '今天';
    case 'yesterday':
      return '昨天';
    case 'this_week':
      return '本周';
    case 'last_week':
      return '上周';
    case 'this_month':
      return '本月';
    case 'last_month':
      return '上月';
    case 'days':
      return "\u8FD1 ".concat(f.n, " \u5929");
    case 'month':
      return "".concat(f.year, " \u5E74 ").concat(f.month, " \u6708");
    case 'week_of_month':
      return "".concat(f.year, "\u5E74").concat(f.month, "\u6708\u7B2C").concat(f.week, "\u5468");
    case 'year':
      return "".concat(f.year, " \u5E74");
    case 'custom':
      {
        var _fmt = function _fmt(ms) {
          var d = new Date(ms);
          return "".concat(d.getFullYear(), "/").concat(d.getMonth() + 1, "/").concat(d.getDate());
        };
        return "".concat(f.startMs ? _fmt(f.startMs) : '开始', " - ").concat(f.endMs ? _fmt(f.endMs - 1) : '结束');
      }
    default:
      return '全部时间';
  }
}

// 全局暴露
if (typeof window !== 'undefined') {
  window.__dateHelpers = {
    getDateRange: getDateRange,
    formatDateFilterLabel: formatDateFilterLabel
  };
}

// 📅 增强日期筛选 UI 组件
// 支持:今天/本周/本月/全部 4 个快捷 chip + 更多弹窗(年月周精确选择)
var AdvancedDateFilter = function AdvancedDateFilter(_ref8) {
  var value = _ref8.value,
    onChange = _ref8.onChange,
    _ref8$size = _ref8.size,
    size = _ref8$size === void 0 ? 'sm' : _ref8$size,
    _ref8$extraChips = _ref8.extraChips,
    extraChips = _ref8$extraChips === void 0 ? null : _ref8$extraChips;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var popoverRef = useRef(null);
  var buttonRef = useRef(null);
  var now = new Date();
  var _useState3 = useState((value === null || value === void 0 ? void 0 : value.year) || now.getFullYear()),
    _useState4 = _slicedToArray(_useState3, 2),
    pickerYear = _useState4[0],
    setPickerYear = _useState4[1];
  var _useState5 = useState((value === null || value === void 0 ? void 0 : value.month) || now.getMonth() + 1),
    _useState6 = _slicedToArray(_useState5, 2),
    pickerMonth = _useState6[0],
    setPickerMonth = _useState6[1];

  // 点击外部关闭
  useEffect(function () {
    if (!open) return;
    var handler = function handler(e) {
      if (popoverRef.current && !popoverRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return function () {
      return document.removeEventListener('mousedown', handler);
    };
  }, [open]);
  var apply = function apply(newVal) {
    onChange(newVal);
    setOpen(false);
  };
  var QUICK_CHIPS = [{
    kind: 'today',
    label: '今天'
  }, {
    kind: 'this_week',
    label: '本周'
  }, {
    kind: 'this_month',
    label: '本月'
  }, {
    kind: 'all',
    label: '全部'
  }];
  var isSelected = function isSelected(kind) {
    return (value === null || value === void 0 ? void 0 : value.kind) === kind && !(value !== null && value !== void 0 && value.year) && !(value !== null && value !== void 0 && value.month);
  };
  var chipPad = size === 'md' ? '5px 12px' : '3px 10px';
  var chipFontSize = size === 'md' ? 12 : 11;
  var currentLabel = formatDateFilterLabel(value);
  // 是否当前选中的是更复杂选项(不是 4 个快捷之一)
  var isAdvancedSelected = value && !['today', 'this_week', 'this_month', 'all'].includes(value.kind);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 4,
      alignItems: 'center',
      flexWrap: 'wrap',
      position: 'relative'
    }
  }, QUICK_CHIPS.map(function (c) {
    var sel = isSelected(c.kind);
    return /*#__PURE__*/React.createElement("button", {
      key: c.kind,
      onClick: function onClick() {
        return apply({
          kind: c.kind
        });
      },
      type: "button",
      style: {
        padding: chipPad,
        fontSize: chipFontSize,
        borderRadius: 6,
        border: '1px solid ' + (sel ? '#0071e3' : 'var(--line)'),
        background: sel ? '#0071e3' : 'white',
        color: sel ? 'white' : 'var(--ink-2)',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: sel ? 600 : 500,
        whiteSpace: 'nowrap'
      }
    }, c.label);
  }), /*#__PURE__*/React.createElement("button", {
    ref: buttonRef,
    onClick: function onClick() {
      return setOpen(function (v) {
        return !v;
      });
    },
    type: "button",
    style: {
      padding: chipPad,
      fontSize: chipFontSize,
      borderRadius: 6,
      border: '1px solid ' + (isAdvancedSelected ? '#7c3aed' : 'var(--line)'),
      background: isAdvancedSelected ? '#7c3aed' : 'white',
      color: isAdvancedSelected ? 'white' : 'var(--ink-2)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: isAdvancedSelected ? 600 : 500,
      whiteSpace: 'nowrap'
    },
    title: "\u6309\u5468/\u6309\u6708/\u6309\u5E74\u7CBE\u786E\u7B5B\u9009"
  }, "\uD83D\uDCC5 ", isAdvancedSelected ? currentLabel : '更多', " ", open ? '▴' : '▾'), extraChips, open && /*#__PURE__*/React.createElement("div", {
    ref: popoverRef,
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      left: 0,
      zIndex: 1000,
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 10,
      boxShadow: '0 8px 24px rgba(0,0,0,.12)',
      padding: '12px 14px',
      width: 340,
      maxWidth: 'calc(100vw - 40px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 5,
      textTransform: 'uppercase'
    }
  }, "\u5E38\u7528"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, [{
    kind: 'yesterday',
    label: '昨天'
  }, {
    kind: 'last_week',
    label: '上周'
  }, {
    kind: 'last_month',
    label: '上月'
  }, {
    kind: 'days',
    n: 3,
    label: '近 3 天'
  }, {
    kind: 'days',
    n: 7,
    label: '近 7 天'
  }, {
    kind: 'days',
    n: 14,
    label: '近 14 天'
  }, {
    kind: 'days',
    n: 30,
    label: '近 30 天'
  }, {
    kind: 'days',
    n: 90,
    label: '近 90 天'
  }].map(function (c) {
    var sel = c.kind === 'days' ? (value === null || value === void 0 ? void 0 : value.kind) === 'days' && (value === null || value === void 0 ? void 0 : value.n) === c.n : (value === null || value === void 0 ? void 0 : value.kind) === c.kind;
    var next = c.kind === 'days' ? {
      kind: 'days',
      n: c.n
    } : {
      kind: c.kind
    };
    return /*#__PURE__*/React.createElement("button", {
      key: c.label,
      type: "button",
      onClick: function onClick() {
        return apply(next);
      },
      style: {
        padding: '4px 10px',
        fontSize: 11,
        borderRadius: 5,
        border: '1px solid ' + (sel ? '#0071e3' : 'var(--line)'),
        background: sel ? '#0071e3' : 'white',
        color: sel ? 'white' : 'var(--ink-2)',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: sel ? 600 : 500
      }
    }, c.label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 5,
      textTransform: 'uppercase'
    }
  }, "\u6309\u6708\u4EFD / \u6309\u5468\u7CBE\u786E\u9009\u62E9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setPickerYear(function (y) {
        return y - 1;
      });
    },
    style: {
      padding: '2px 8px',
      border: '1px solid var(--line)',
      borderRadius: 5,
      background: 'white',
      cursor: 'pointer',
      fontSize: 11,
      fontFamily: 'inherit'
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      minWidth: 50,
      textAlign: 'center'
    }
  }, pickerYear, " \u5E74"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setPickerYear(function (y) {
        return y + 1;
      });
    },
    style: {
      padding: '2px 8px',
      border: '1px solid var(--line)',
      borderRadius: 5,
      background: 'white',
      cursor: 'pointer',
      fontSize: 11,
      fontFamily: 'inherit'
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return apply({
        kind: 'year',
        year: pickerYear
      });
    },
    style: {
      marginLeft: 'auto',
      padding: '2px 9px',
      fontSize: 11,
      border: '1px solid ' + ((value === null || value === void 0 ? void 0 : value.kind) === 'year' && (value === null || value === void 0 ? void 0 : value.year) === pickerYear ? '#0071e3' : 'var(--line)'),
      background: (value === null || value === void 0 ? void 0 : value.kind) === 'year' && (value === null || value === void 0 ? void 0 : value.year) === pickerYear ? '#0071e3' : 'white',
      color: (value === null || value === void 0 ? void 0 : value.kind) === 'year' && (value === null || value === void 0 ? void 0 : value.year) === pickerYear ? 'white' : 'var(--ink-2)',
      borderRadius: 5,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600
    }
  }, "\u6574\u5E74 ", pickerYear)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 3,
      marginBottom: 8
    }
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (m) {
    var sel = pickerMonth === m;
    var isCurrent = (value === null || value === void 0 ? void 0 : value.kind) === 'month' && (value === null || value === void 0 ? void 0 : value.year) === pickerYear && (value === null || value === void 0 ? void 0 : value.month) === m;
    return /*#__PURE__*/React.createElement("button", {
      key: m,
      type: "button",
      onClick: function onClick() {
        return setPickerMonth(m);
      },
      style: {
        padding: '5px 0',
        fontSize: 11,
        border: '1px solid ' + (isCurrent ? '#0071e3' : sel ? '#7c3aed' : 'var(--line)'),
        background: isCurrent ? '#0071e3' : sel ? '#f3e8ff' : 'white',
        color: isCurrent ? 'white' : sel ? '#7c3aed' : 'var(--ink-2)',
        borderRadius: 5,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: sel || isCurrent ? 600 : 500
      }
    }, m, "\u6708");
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return apply({
        kind: 'month',
        year: pickerYear,
        month: pickerMonth
      });
    },
    style: {
      width: '100%',
      padding: '6px 10px',
      fontSize: 11,
      border: '1px solid #0071e3',
      background: '#0071e3',
      color: 'white',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      marginBottom: 6
    }
  }, "\u2713 \u6574\u6708: ", pickerYear, " \u5E74 ", pickerMonth, " \u6708"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      marginBottom: 3
    }
  }, "\u6216\u9009\u67D0\u4E00\u5468(1-7\u53F7 / 8-14\u53F7 / 15-21\u53F7 / 22-28\u53F7 / 29\u53F7-\u6708\u5E95):"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 3
    }
  }, [1, 2, 3, 4, 5].map(function (w) {
    var sel = (value === null || value === void 0 ? void 0 : value.kind) === 'week_of_month' && (value === null || value === void 0 ? void 0 : value.year) === pickerYear && (value === null || value === void 0 ? void 0 : value.month) === pickerMonth && (value === null || value === void 0 ? void 0 : value.week) === w;
    return /*#__PURE__*/React.createElement("button", {
      key: w,
      type: "button",
      onClick: function onClick() {
        return apply({
          kind: 'week_of_month',
          year: pickerYear,
          month: pickerMonth,
          week: w
        });
      },
      style: {
        padding: '5px 0',
        fontSize: 10,
        border: '1px solid ' + (sel ? '#0071e3' : 'var(--line)'),
        background: sel ? '#0071e3' : 'white',
        color: sel ? 'white' : 'var(--ink-2)',
        borderRadius: 5,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: sel ? 600 : 500
      }
    }, "\u7B2C ", w, " \u5468");
  })))));
};

// 🆕 售后状态
var AFTERSALE_STATUSES = [{
  key: 'pending_remind',
  label: '待催货',
  color: '#ca8a04',
  bg: '#fef9c3'
}, {
  key: 'reminded',
  label: '已催货',
  color: '#ea580c',
  bg: '#fff7ed'
}, {
  key: 'pending_return',
  label: '待回货',
  color: '#0369a1',
  bg: '#e0f2fe'
}, {
  key: 'returned',
  label: '已回货',
  color: '#16a34a',
  bg: '#dcfce7'
}, {
  key: 'customer_refund',
  label: '客户退款',
  color: '#dc2626',
  bg: '#fef2f2'
}, {
  key: 'closed',
  label: '关闭',
  color: '#525252',
  bg: '#f5f5f5'
}];

// 🆕 补件状态
var REFILL_STATUSES = [{
  key: 'pending_order',
  label: '待下单',
  color: '#ca8a04'
}, {
  key: 'ordered',
  label: '已下单',
  color: '#0369a1'
}, {
  key: 'shipped',
  label: '已发货',
  color: '#7c3aed'
}, {
  key: 'delivered',
  label: '已签收',
  color: '#16a34a'
}, {
  key: 'cancelled',
  label: '取消',
  color: '#525252'
}];

// 🆕 退款类型
var REFUND_TYPES = [{
  key: 'resale',
  label: '转售',
  color: '#ca8a04',
  bg: '#fef9c3'
}, {
  key: 'size_mismatch',
  label: '尺寸不适合',
  color: '#0891b2',
  bg: '#e0f2fe'
}, {
  key: 'quality_issue',
  label: '产品质量问题',
  color: '#16a34a',
  bg: '#dcfce7'
}, {
  key: 'color_mismatch',
  label: '颜色不符',
  color: '#db2777',
  bg: '#fce7f3'
}, {
  key: 'customer_cancel',
  label: '客户主动取消',
  color: '#525252',
  bg: '#f5f5f5'
}, {
  key: 'logistics',
  label: '物流问题',
  color: '#ea580c',
  bg: '#fff7ed'
}, {
  key: 'other',
  label: '其他',
  color: '#7c3aed',
  bg: '#ede9fe'
}];

// 🆕 退款支付方式
var REFUND_PAYMENT_METHODS = [{
  key: 'shopify_payments',
  label: 'Shopify Payments',
  color: '#5b3aff'
}, {
  key: 'stripe_card',
  label: 'Stripe Card',
  color: '#7c3aed'
}, {
  key: 'paypal',
  label: 'PayPal',
  color: '#0070ba'
}, {
  key: 'wire_transfer',
  label: 'Wire Transfer',
  color: '#16a34a'
}, {
  key: 'other',
  label: '其他',
  color: '#525252'
}];

// 🆕 退款审核状态
var REFUND_STATUSES = [{
  key: 'pending',
  label: '待审核',
  color: '#ca8a04',
  bg: '#fef9c3'
}, {
  key: 'approved',
  label: '已审核',
  color: '#0369a1',
  bg: '#e0f2fe'
}, {
  key: 'completed',
  label: '已完成',
  color: '#16a34a',
  bg: '#dcfce7'
}, {
  key: 'rejected',
  label: '拒绝',
  color: '#dc2626',
  bg: '#fef2f2'
}];

// ============================================================
// 报价单 - 多公司预设 (基于历史业务配置)
// 🆕 fix51: 公司全称按美工/拍摄部 SHOPS_PRESET 标准统一
// ============================================================
var SELLER_PRESETS = {
  radilum: {
    name: 'Radilum',
    prefix: 'RD',
    address: '177 Joe Routt Blvd, College Station, TX 77840',
    phone: '+1 800-761-1037',
    website: 'radilum.com',
    email: 'support@radilum.com',
    desc: '美国 Radilum (radilum.com) - 网站对客户报价'
  },
  jiangmen_radilum: {
    name: 'Radilum Inc',
    prefix: 'RDI',
    address: 'Building 5, No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'radilum.com',
    email: 'export@radilum.com',
    desc: '江门 Radilum Inc - 内部出口公司'
  },
  vakkerlight: {
    name: 'Vakkerlight',
    prefix: 'VK',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'vakkerlight.com',
    email: 'support@vakkerlight.com',
    desc: 'Vakkerlight 主品牌'
  },
  dekorfine: {
    name: 'Dekorfine',
    prefix: 'DF',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'dekorfine.com',
    email: 'support@dekorfine.com',
    desc: 'Dekorfine 品牌'
  },
  mooijane: {
    name: 'Mooijane',
    prefix: 'MJ',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'mooijane.com',
    email: 'support@mooijane.com',
    desc: 'Mooijane 品牌'
  },
  docos: {
    name: 'Docos.us',
    prefix: 'DC',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'docos.us',
    email: 'support@docos.us',
    desc: 'Docos.us 品牌'
  },
  lumioshine: {
    name: 'Lumioshine',
    prefix: 'LS',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'lumioshine.com',
    email: 'support@lumioshine.com',
    desc: 'Lumioshine 品牌'
  },
  rayonshine: {
    name: 'Rayonshine',
    prefix: 'RS',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'rayonshine.com',
    email: 'support@rayonshine.com',
    desc: 'Rayonshine 品牌'
  },
  mooiehome: {
    name: 'Mooiehome',
    prefix: 'MH',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'mooiehome.com',
    email: 'support@mooiehome.com',
    desc: 'Mooiehome 品牌'
  },
  pinlighting: {
    name: 'Pinlighting',
    prefix: 'PL',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'pinlighting.com',
    email: 'support@pinlighting.com',
    desc: 'Pinlighting 品牌'
  },
  mooielight: {
    name: 'Mooielight',
    prefix: 'MO',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'mooielight.com',
    email: 'support@mooielight.com',
    desc: 'Mooielight 品牌'
  }
};

// 银行/买家自动填充 - 仅 Radilum 系列
var RADILUM_BANK = {
  bank_name: 'China Merchants Bank Co., Ltd., Zhongshan Guzhen Branch',
  bank_address: 'No. 17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong Province',
  account_name: 'Radilum INC',
  account_number: '76090192D632009',
  swift_code: 'CMBCCNBSXXX'
};
var RADILUM_DEFAULT_BUYER = 'JANEDECOR INC\n424 LINDSEY LN, TYLER, TX 75701-1590\nUnited States';
var DOC_TYPES = [{
  key: 'quotation',
  label: 'Quotation 报价单',
  desc: '对客户出价'
}, {
  key: 'pi',
  label: 'Proforma Invoice (PI) 形式发票',
  desc: '确认订单 + 收款'
}, {
  key: 'po',
  label: 'Purchase Order (PO) 采购单',
  desc: '对供应商'
}];
var QUOTE_TERMS_PRESET = "1. Prices are quoted in USD and valid for 30 days from issue date.\n2. Payment terms: 50% deposit upon order confirmation, balance before shipment.\n3. Lead time: approximately 25-35 working days after deposit received.\n4. Shipping: FOB Shenzhen / EXW Zhongshan unless otherwise specified.\n5. Warranty: 12 months from delivery date for manufacturing defects.\n6. Custom orders are non-refundable once production begins.";

// ============================================================
// 汇报系统 - 部门 + 优先级
// ============================================================
var DEPARTMENTS = [{
  key: 'merchandiser',
  label: '跟单',
  icon: '📋'
}, {
  key: 'finance',
  label: '财务',
  icon: '💰'
}, {
  key: 'design',
  label: '设计',
  icon: '🎨'
}, {
  key: 'art',
  label: '美工',
  icon: '🖼️'
}, {
  key: 'factory',
  label: '工厂',
  icon: '🏭'
}, {
  key: 'photo',
  label: '拍摄',
  icon: '📷'
}, {
  key: 'customer_service',
  label: '客服',
  icon: '💬'
}, {
  key: 'logistics',
  label: '物流',
  icon: '🚚'
}, {
  key: 'other',
  label: '其他',
  icon: '📌'
}];
var TICKET_STATUS = [{
  key: 'pending',
  label: '待处理',
  cls: 'ticket-status-pending'
}, {
  key: 'accepted',
  label: '已接收',
  cls: 'ticket-status-accepted'
}, {
  key: 'processing',
  label: '处理中',
  cls: 'ticket-status-processing'
}, {
  key: 'resolved',
  label: '已解决',
  cls: 'ticket-status-resolved'
}, {
  key: 'rejected',
  label: '已驳回',
  cls: 'ticket-status-rejected'
}];
var TICKET_PRIORITY = [{
  key: 'low',
  label: '一般',
  cls: 'ticket-pri-low'
}, {
  key: 'mid',
  label: '重要',
  cls: 'ticket-pri-mid'
}, {
  key: 'high',
  label: '紧急',
  cls: 'ticket-pri-high'
}];

// ============================================================
// 知识库分类
// ============================================================
var KB_CATEGORIES = [{
  key: 'pre-sales',
  label_cn: '售前问题',
  label_en: 'Pre-sales',
  color: '#1d4ed8'
}, {
  key: 'product',
  label_cn: '产品问题',
  label_en: 'Product Questions',
  color: '#7c2d12'
}, {
  key: 'logistics',
  label_cn: '物流问题',
  label_en: 'Logistics Issues',
  color: '#b45309'
}, {
  key: 'after-sales',
  label_cn: '售后问题',
  label_en: 'After-sales',
  color: '#b91c1c'
}, {
  key: 'during-sale',
  label_cn: '售中问题',
  label_en: 'During-sale',
  color: '#7e22ce'
}];

// 难度自动建议
var suggestDifficulty = function suggestDifficulty(cat, durationMin) {
  // 时长优先
  if (durationMin > 0) {
    if (durationMin > 10) return 'hard';
    if (durationMin >= 5) return 'mid';
    return 'easy';
  }
  // 类别兜底
  if (['拒付', '加急'].includes(cat)) return 'hard';
  if (['退货', '报价', '售后', '补发', '取消订单', '定制咨询', '实拍'].includes(cat)) return 'mid';
  return 'easy';
};

// ============================================================
// 图标 (内联 SVG)
// ============================================================
var Icon = function Icon(_ref9) {
  var name = _ref9.name,
    _ref9$className = _ref9.className,
    className = _ref9$className === void 0 ? 'w-4 h-4' : _ref9$className,
    style = _ref9.style;
  var paths = {
    cs: 'M7 8h10M7 12h7m-7 4h4m1 5l-4-4H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-5l-4 4z',
    cash: 'M12 8c-1.66 0-3 .67-3 1.5S10.34 11 12 11s3-.67 3-1.5S13.66 8 12 8zm0 0V6m0 6v6m-9-3a9 9 0 1118 0 9 9 0 01-18 0z',
    doc: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    chart: 'M3 3v18h18M9 17V9m4 8V5m4 12v-6',
    trash: 'M6 7h12m-9 4v6m6-6v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M10 7V4a1 1 0 011-1h2a1 1 0 011 1v3',
    users: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    plus: 'M12 4v16m8-8H4',
    check: 'M5 13l4 4L19 7',
    x: 'M6 18L18 6M6 6l12 12',
    logout: 'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1',
    edit: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    copy: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
    eye: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    image: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    upload: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
    restore: 'M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6',
    pin: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z',
    calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    star: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    chevron: 'M19 9l-7 7-7-7',
    arrow: 'M14 5l7 7m0 0l-7 7m7-7H3',
    truck: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0',
    print: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z',
    download: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
  };
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "2",
    style: style
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: paths[name] || paths.doc
  }));
};

// ============================================================
// Toast 通知 hook
// ============================================================
var useToast = function useToast() {
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    msg = _useState8[0],
    setMsg = _useState8[1];
  var show = useCallback(function (m) {
    setMsg(m);
    setTimeout(function () {
      return setMsg(null);
    }, 2200);
  }, []);
  var node = msg ? /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, msg) : null;
  return [show, node];
};

// ============================================================
// 登录 / Session
// ============================================================
var LoginScreen = function LoginScreen(_ref0) {
  var employees = _ref0.employees,
    onLogin = _ref0.onLogin;
  var _useState9 = useState(''),
    _useState0 = _slicedToArray(_useState9, 2),
    account = _useState0[0],
    setAccount = _useState0[1];
  var _useState1 = useState(''),
    _useState10 = _slicedToArray(_useState1, 2),
    password = _useState10[0],
    setPassword = _useState10[1];
  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    error = _useState12[0],
    setError = _useState12[1];
  var acctRef = useRef(null);
  useEffect(function () {
    setTimeout(function () {
      return acctRef.current && acctRef.current.focus();
    }, 120);
  }, []);
  var tryLogin = function tryLogin() {
    var acc = account.trim().toLowerCase();
    if (!acc) {
      setError('请输入账号');
      return;
    }
    // 账号匹配(含隐藏老板):account 字段 / 英文名 / id 去 u_ 前缀,全部小写比对
    var sel = employees.find(function (e) {
      return accountFor(e) === acc;
    }) || employees.find(function (e) {
      return (e.alias || '').trim().toLowerCase() === acc;
    }) || employees.find(function (e) {
      return String(e.id || '').replace(/^u_/, '').toLowerCase() === acc;
    });
    if (!sel) {
      setError('账号不存在 — 请联系主管确认你的账号');
      return;
    }
    if ((sel.password || '') !== password) {
      console.warn('[登录失败] 账号:', acc, '· 密码长度', password.length);
      setError('密码不正确 — 如忘记请联系主管重设');
      return;
    }
    console.log('[登录成功] 账号:', acc, '· 用户:', sel.name, '· 角色:', sel.role);
    onLogin(sel);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "login-bg",
    "data-login-screen": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-card fade-in",
    style: {
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 44px 22px',
      textAlign: 'center',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: '38px',
      fontWeight: 600,
      letterSpacing: '-.022em',
      marginBottom: '6px'
    }
  }, "\u7EDF\u4E00\u5DE5\u4F5C\u53F0"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-3)',
      fontSize: '15px',
      fontWeight: 400
    }
  }, "\u8F93\u5165\u8D26\u53F7\u548C\u5BC6\u7801\u767B\u5F55")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 44px 34px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, "\u8D26\u53F7"), /*#__PURE__*/React.createElement("input", {
    ref: acctRef,
    value: account,
    autoCapitalize: "off",
    autoCorrect: "off",
    spellCheck: false,
    onChange: function onChange(e) {
      setAccount(e.target.value);
      setError('');
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') {
        var p = document.getElementById('login-pwd');
        if (p) p.focus();
      }
    },
    placeholder: "\u4F60\u7684\u8D26\u53F7(\u82F1\u6587\u540D\u5C0F\u5199,\u5982 nicole)",
    style: {
      fontSize: 15,
      padding: '12px 14px',
      borderRadius: 10,
      width: '100%',
      border: '1px solid var(--line)',
      outline: 'none',
      fontFamily: 'inherit',
      marginBottom: 16,
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, "\u5BC6\u7801"), /*#__PURE__*/React.createElement("input", {
    id: "login-pwd",
    type: "password",
    value: password,
    onChange: function onChange(e) {
      setPassword(e.target.value);
      setError('');
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && tryLogin();
    },
    placeholder: "\u8F93\u5165\u5BC6\u7801",
    className: error ? 'input-error' : '',
    style: {
      fontSize: 15,
      padding: '12px 14px',
      borderRadius: 10,
      width: '100%',
      border: '1px solid var(--line)',
      outline: 'none',
      fontFamily: 'inherit',
      boxSizing: 'border-box'
    }
  }), error && /*#__PURE__*/React.createElement("div", {
    className: "fade-in",
    style: {
      marginTop: 14,
      padding: '10px 14px',
      borderRadius: 10,
      background: '#fef2f2',
      border: '1px solid #fca5a5',
      fontSize: 13,
      color: '#991b1b',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u26A0\uFE0F"), /*#__PURE__*/React.createElement("span", null, error)), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: tryLogin,
    style: {
      width: '100%',
      marginTop: 20,
      padding: '13px 24px',
      fontSize: 15,
      fontWeight: 600
    }
  }, "\u767B\u5F55 \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 12,
      color: 'var(--ink-4)',
      textAlign: 'center',
      lineHeight: 1.7
    }
  }, "\u8D26\u53F7\u4E00\u822C\u662F\u4F60\u7684\u82F1\u6587\u540D\u5C0F\u5199(\u5982 ", /*#__PURE__*/React.createElement("b", null, "nicole"), " / ", /*#__PURE__*/React.createElement("b", null, "sally"), ")\u3002", /*#__PURE__*/React.createElement("br", null), "\u627E\u4E0D\u5230\u8D26\u53F7\u6216\u5FD8\u8BB0\u5BC6\u7801?\u8054\u7CFB\u4E3B\u7BA1\u3002"))));
};

// ============================================================
// 顶部导航
// ============================================================
var TopNav = function TopNav(_ref1) {
  var user = _ref1.user,
    activeTab = _ref1.activeTab,
    setActiveTab = _ref1.setActiveTab,
    onLogout = _ref1.onLogout,
    stats = _ref1.stats,
    notifPerm = _ref1.notifPerm,
    requestNotifPerm = _ref1.requestNotifPerm,
    cloudOn = _ref1.cloudOn,
    employees = _ref1.employees,
    switchAccount = _ref1.switchAccount,
    onOpenSearch = _ref1.onOpenSearch,
    _ref1$cdmUnreadCount = _ref1.cdmUnreadCount,
    cdmUnreadCount = _ref1$cdmUnreadCount === void 0 ? 0 : _ref1$cdmUnreadCount,
    _ref1$cdmUrgentUnread = _ref1.cdmUrgentUnread,
    cdmUrgentUnread = _ref1$cdmUrgentUnread === void 0 ? 0 : _ref1$cdmUrgentUnread,
    _ref1$topTabs = _ref1.topTabs,
    topTabs = _ref1$topTabs === void 0 ? [] : _ref1$topTabs,
    _ref1$sidebarHiddenCo = _ref1.sidebarHiddenCount,
    sidebarHiddenCount = _ref1$sidebarHiddenCo === void 0 ? 0 : _ref1$sidebarHiddenCo,
    onOpenCustomize = _ref1.onOpenCustomize;
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    switchModalOpen = _useState14[0],
    setSwitchModalOpen = _useState14[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var isFinanceVisible = user.role === 'finance' || user.role === 'admin' || user.role === 'super_admin';

  // 🆕 fix10: tabs 不再在 TopNav 内部计算了 — 由 App 传入 topTabs(已根据用户布局偏好筛选)

  var bellTotal = (stats.overdue || 0) + (stats.dueToday || 0);
  var bellLabel = notifPerm === 'granted' ? "\u684C\u9762\u901A\u77E5\u5DF2\u5F00\u542F".concat(bellTotal > 0 ? " \xB7 ".concat(stats.overdue, " \u903E\u671F + ").concat(stats.dueToday, " \u4ECA\u65E5\u5230\u671F") : ' · 暂无到期') : notifPerm === 'denied' ? '通知已被浏览器禁用' : '点击开启桌面通知';

  // 头像配色
  var avatarColors = ['#0071e3', '#34c759', '#ff9500', '#ff3b30', '#5e5ce6', '#af52de', '#ff2d55', '#5ac8fa', '#ffcc00', '#a2845e', '#8e8e93'];
  var idx = (user.name || '').charCodeAt(0) % avatarColors.length;
  var avatarColor = avatarColors[idx];
  var initials = (user.name || '?').slice(-1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--line)',
      background: 'rgba(251,251,253,.85)',
      backdropFilter: 'saturate(180%) blur(20px)',
      WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-6 flex items-center justify-between gap-4",
    style: {
      height: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: '19px',
      fontWeight: 600,
      letterSpacing: '-.022em'
    }
  }, "\u7EDF\u4E00\u5DE5\u4F5C\u53F0"), /*#__PURE__*/React.createElement("span", {
    className: "cloud-status ".concat(cloudOn ? 'ok' : 'local')
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), cloudOn ? '云端' : '本地')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onOpenSearch,
    title: "\u641C\u7D22\u4EFB\u4F55\u5185\u5BB9 (Ctrl+K)",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 10px 5px 10px',
      background: 'var(--bg-elevated)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 12,
      color: 'var(--ink-3)',
      transition: 'all .15s'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.color = 'var(--accent)';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.borderColor = 'var(--line)';
      e.currentTarget.style.color = 'var(--ink-3)';
    }
  }, "\uD83D\uDD0D ", /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline"
  }, "\u641C\u7D22"), /*#__PURE__*/React.createElement("kbd", {
    style: {
      padding: '1px 5px',
      background: 'var(--bg)',
      borderRadius: 3,
      fontSize: 10,
      marginLeft: 2,
      border: '1px solid var(--line)'
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
    onClick: requestNotifPerm,
    title: bellLabel,
    style: {
      position: 'relative',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: '50%',
      transition: 'background .15s',
      fontSize: '17px',
      filter: notifPerm === 'granted' ? 'none' : 'grayscale(70%) opacity(0.55)'
    },
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.background = 'var(--bg-elevated)';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.background = 'transparent';
    }
  }, "\uD83D\uDD14", bellTotal > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '2px',
      right: '2px',
      background: 'var(--bad)',
      color: 'white',
      borderRadius: '50%',
      fontSize: '9px',
      fontWeight: 600,
      minWidth: '15px',
      height: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1.5px solid rgba(251,251,253,1)',
      lineHeight: 1
    }
  }, bellTotal)), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSwitchModalOpen(true);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '4px 12px 4px 4px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--bg-elevated)',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit'
    },
    title: "\u70B9\u51FB\u5207\u6362\u8D26\u53F7"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: avatarColor,
      color: 'white',
      fontWeight: 600,
      fontSize: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, initials), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--ink)',
      lineHeight: 1.1,
      textAlign: 'left'
    }
  }, user.name, user.alias && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      fontWeight: 400,
      marginLeft: 3
    }
  }, user.alias), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)',
      fontWeight: 400,
      marginTop: 1
    }
  }, user.title ? "".concat(user.title, " \xB7 \u70B9\u51FB\u5207\u6362") : user.role === 'super_admin' ? '总管 · 点击切换' : user.role === 'admin' ? '主管 · 点击切换' : user.role === 'finance' ? '财务 · 点击切换' : '员工 · 点击切换'))), switchModalOpen && employees && function () {
    var isAdminViewer = user.role === 'admin' || user.role === 'super_admin';
    return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return setSwitchModalOpen(false);
      },
      style: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.5)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '4vh 16px',
        overflowY: 'auto',
        overflowX: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      style: {
        background: 'white',
        borderRadius: 'var(--radius-lg)',
        maxWidth: 520,
        width: '100%',
        maxHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        // 让子元素自己处理滚动
        boxShadow: '0 25px 70px rgba(0,0,0,.3)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 22px',
        borderBottom: '1px solid var(--line)',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-display",
      style: {
        fontSize: 16,
        fontWeight: 600
      }
    }, isAdminViewer ? '👁 切换账号 / 查看员工视角' : '🔄 切换账号'), /*#__PURE__*/React.createElement("button", {
      className: "btn-sec",
      onClick: function onClick() {
        return setSwitchModalOpen(false);
      },
      style: {
        padding: '4px 12px'
      }
    }, "\xD7")), isAdminViewer && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 12px',
        background: '#fef3c7',
        border: '1px solid #fbbf24',
        borderRadius: 6,
        fontSize: 11,
        color: '#854d0e',
        marginTop: 10,
        lineHeight: 1.5
      }
    }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("strong", null, "\u4E3B\u7BA1/\u8001\u677F\u6743\u9650"), ":\u9009\u62E9\u5458\u5DE5 \u2192 \u65E0\u9700\u5BC6\u7801\u76F4\u63A5\u4EE5\u67E5\u770B\u6A21\u5F0F\u8FDB\u5165", /*#__PURE__*/React.createElement("br", null), "\u6240\u6709\u64CD\u4F5C\u7684\"\u521B\u5EFA\u4EBA\"\u4ECD\u662F\u8BE5\u5458\u5DE5 \xB7 \u9876\u90E8\u4F1A\u6709\u9EC4\u8272\u6A2A\u5E45 \xB7 \u53EF\u4E00\u952E\u5207\u56DE"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        marginTop: 8
      }
    }, "\u5F53\u524D\uFF1A", /*#__PURE__*/React.createElement("strong", null, user.name, user.alias && ' ' + user.alias), " \xB7 \u9009\u62E9\u8981\u5207\u6362\u5230\u7684\u8D26\u53F7\uFF1A")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 22px',
        overflowY: 'auto',
        overflowX: 'hidden',
        flex: 1,
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 8
      }
    }, employees.filter(function (e) {
      return e.id !== user.id && !e.hideFromList;
    }).map(function (emp) {
      return /*#__PURE__*/React.createElement("button", {
        key: emp.id,
        onClick: function onClick() {
          switchAccount && switchAccount(emp);
          setSwitchModalOpen(false);
        },
        style: {
          padding: '10px 12px',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--line)',
          background: 'white',
          cursor: 'pointer',
          textAlign: 'left',
          fontFamily: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          transition: 'all .12s'
        },
        onMouseEnter: function onMouseEnter(e) {
          e.currentTarget.style.background = 'var(--bg-elevated)';
          e.currentTarget.style.borderColor = 'var(--accent)';
        },
        onMouseLeave: function onMouseLeave(e) {
          e.currentTarget.style.background = 'white';
          e.currentTarget.style.borderColor = 'var(--line)';
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 600,
          fontSize: 13
        }
      }, emp.name, emp.alias ? ' ' + emp.alias : '', emp.role === 'super_admin' && /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--accent)',
          marginLeft: 4,
          fontSize: 10
        }
      }, "\uD83D\uDC51"), emp.role === 'admin' && /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--accent)',
          marginLeft: 4,
          fontSize: 10
        }
      }, "\u2B50"), emp.role === 'finance' && /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--accent)',
          marginLeft: 4,
          fontSize: 10
        }
      }, "\uD83D\uDCB0")), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 10,
          color: 'var(--ink-3)'
        }
      }, emp.sites || emp.title || '—'));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 22px',
        borderTop: '1px solid var(--line)',
        flexShrink: 0,
        background: '#fafafa'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-4)',
        lineHeight: 1.5
      }
    }, isAdminViewer ? '👁 主管/老板模式:无需密码,以查看模式进入' : '💡 切换账号后会要求重新输入密码确认')))), document.body);
  }(), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      background: 'transparent',
      border: 'none',
      color: 'var(--ink-3)',
      cursor: 'pointer',
      padding: '6px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 13,
      transition: 'all .15s',
      fontFamily: 'inherit'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.background = 'var(--bg-elevated)';
      e.currentTarget.style.color = 'var(--ink)';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--ink-3)';
    }
  }, "\u9000\u51FA"))), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-6",
    style: {
      borderTop: '1px solid var(--line)',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabs-row",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      flexWrap: 'nowrap',
      overflowX: 'auto'
    }
  }, topTabs.map(function (t) {
    return /*#__PURE__*/React.createElement("a", {
      key: t.key,
      href: "#tab=".concat(t.key),
      className: "nav-tab ".concat(activeTab === t.key ? 'active' : ''),
      onClick: function onClick(e) {
        // Ctrl/Cmd/Shift/中键 → 浏览器默认行为(新窗口/新标签)
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        setActiveTab(t.key);
      },
      style: {
        whiteSpace: 'nowrap',
        flexShrink: 0,
        textDecoration: 'none'
      }
    }, t.label, t.badge > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 18,
        height: 18,
        padding: '0 6px',
        background: t.badgeColor || 'var(--bad)',
        color: 'white',
        borderRadius: 9,
        fontSize: 10,
        fontWeight: 600,
        marginLeft: 4
      }
    }, t.badge));
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenCustomize,
    title: "\u81EA\u5B9A\u4E49\u5BFC\u822A\u5E03\u5C40 \u2014 \u8C03\u6574\u54EA\u4E9B tab \u663E\u793A\u5728\u9876\u90E8",
    style: {
      marginLeft: 'auto',
      padding: '5px 12px',
      background: 'transparent',
      color: 'var(--ink-3)',
      border: '1px dashed var(--line)',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11.5,
      fontFamily: 'inherit',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      transition: 'all .15s'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.background = 'var(--bg-elevated)';
      e.currentTarget.style.borderStyle = 'solid';
      e.currentTarget.style.color = 'var(--ink-2)';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.borderStyle = 'dashed';
      e.currentTarget.style.color = 'var(--ink-3)';
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2699"), /*#__PURE__*/React.createElement("span", null, "\u5E03\u5C40"), sidebarHiddenCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '1px 6px',
      background: 'var(--bg)',
      color: 'var(--ink-3)',
      borderRadius: 8,
      fontSize: 9,
      fontWeight: 600
    }
  }, "+", sidebarHiddenCount)))));
};

// 🆕 fix10: NavGroupDropdown 不再使用 (左侧栏取代),保留空 stub 以防引用残留
var NavGroupDropdown = function NavGroupDropdown() {
  return null;
};

// ============================================================
// 客服跟进表 - 主模块
// ============================================================
// 🆕 事件添加下拉菜单 - 把 6 个按钮折叠成一个,节省横向空间
var EventActionDropdown = function EventActionDropdown(_ref10) {
  var record = _ref10.record,
    onAftersale = _ref10.onAftersale,
    onRefill = _ref10.onRefill,
    onRefund = _ref10.onRefund,
    onChargeback = _ref10.onChargeback,
    onCustom = _ref10.onCustom,
    onPhoto = _ref10.onPhoto;
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    open = _useState16[0],
    setOpen = _useState16[1];
  var btnRef = React.useRef(null);
  var menuRef = React.useRef(null);
  var _useState17 = useState({
      top: 0,
      left: 0
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    menuPos = _useState18[0],
    setMenuPos = _useState18[1];
  useEffect(function () {
    if (!open) return;
    var onDocClick = function onDocClick(e) {
      var _btnRef$current, _menuRef$current;
      if ((_btnRef$current = btnRef.current) !== null && _btnRef$current !== void 0 && _btnRef$current.contains(e.target)) return;
      if ((_menuRef$current = menuRef.current) !== null && _menuRef$current !== void 0 && _menuRef$current.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return function () {
      return document.removeEventListener('mousedown', onDocClick);
    };
  }, [open]);

  // 计算位置(避免被表格遮挡)
  var handleOpen = function handleOpen() {
    if (btnRef.current) {
      var rect = btnRef.current.getBoundingClientRect();
      setMenuPos({
        top: rect.bottom + window.scrollY + 4,
        left: Math.max(8, rect.right + window.scrollX - 200) // 200 = menu width
      });
    }
    setOpen(function (v) {
      return !v;
    });
  };
  var items = [{
    key: 'aftersale',
    label: '售后',
    icon: '🔧',
    color: '#ea580c',
    bg: '#fff7ed',
    onClick: onAftersale
  }, {
    key: 'refill',
    label: '补件',
    icon: '📦',
    color: '#0369a1',
    bg: '#e0f2fe',
    onClick: onRefill
  }, {
    key: 'refund',
    label: '退款',
    icon: '💰',
    color: '#dc2626',
    bg: '#fef2f2',
    onClick: onRefund
  }, {
    key: 'chargeback',
    label: '拒付',
    icon: '🚨',
    color: '#dc2626',
    bg: '#fef2f2',
    onClick: onChargeback,
    highlight: record.category === '拒付'
  }, {
    key: 'custom',
    label: '定制',
    icon: '🎨',
    color: '#7c3aed',
    bg: '#f5f3ff',
    onClick: onCustom,
    highlight: record.category === '定制咨询'
  }, {
    key: 'photo',
    label: '实拍',
    icon: '📸',
    color: '#be185d',
    bg: '#fdf2f8',
    onClick: onPhoto,
    highlight: record.category === '实拍'
  }];

  // 高亮的事项类型(根据 category)
  var highlightedItem = items.find(function (i) {
    return i.highlight;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    ref: btnRef,
    onClick: handleOpen,
    style: {
      width: '100%',
      padding: '4px 8px',
      background: highlightedItem ? highlightedItem.color : 'white',
      color: highlightedItem ? 'white' : 'var(--ink-2)',
      border: '1px solid ' + (highlightedItem ? highlightedItem.color : 'var(--line)'),
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      whiteSpace: 'nowrap'
    },
    title: highlightedItem ? "".concat(highlightedItem.icon, " \u8DDF\u8FDB\u4E8B\u9879\u662F").concat(highlightedItem.label, ",\u70B9\u51FB\u6DFB\u52A0") : '添加事件'
  }, highlightedItem ? /*#__PURE__*/React.createElement(React.Fragment, null, highlightedItem.icon, " ", highlightedItem.label, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7,
      marginLeft: 2
    }
  }, "\u25BE")) : /*#__PURE__*/React.createElement(React.Fragment, null, "\uD83D\uDCCC \u6DFB\u52A0\u4E8B\u4EF6 \u25BE")), open && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'absolute',
      top: menuPos.top,
      left: menuPos.left,
      width: 200,
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 10,
      boxShadow: '0 8px 24px rgba(0,0,0,.12)',
      padding: 4,
      zIndex: 9998
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 10px 4px',
      fontSize: 10,
      color: 'var(--ink-3)',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)',
      marginBottom: 4
    }
  }, "\u9009\u62E9\u4E8B\u4EF6\u7C7B\u578B"), items.map(function (item) {
    return /*#__PURE__*/React.createElement("button", {
      key: item.key,
      onClick: function onClick() {
        item.onClick();
        setOpen(false);
      },
      style: {
        width: '100%',
        padding: '8px 10px',
        background: item.highlight ? item.bg : 'transparent',
        color: item.color,
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: item.highlight ? 700 : 500,
        fontFamily: 'inherit',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        textAlign: 'left',
        transition: 'all .12s'
      },
      onMouseEnter: function onMouseEnter(e) {
        e.currentTarget.style.background = item.bg;
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.background = item.highlight ? item.bg : 'transparent';
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14
      }
    }, item.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, item.label), item.highlight && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        padding: '1px 6px',
        background: item.color,
        color: 'white',
        borderRadius: 8
      }
    }, "\u5DF2\u9009"));
  })), document.body));
};

// 🆕 fix65: 跟进逾期分级(基于 nextFollowUp 距今天数)
// 用于卡片彩色标记 + 逾期筛选。已解决/已转交的不算逾期。
var FOLLOWUP_DUE_LEVELS = [{
  min: 30,
  bg: '#7f1d1d',
  color: '#ffffff',
  tag: '🔴 严重逾期'
}, {
  min: 14,
  bg: '#dc2626',
  color: '#ffffff',
  tag: '🔴 逾期'
}, {
  min: 10,
  bg: '#fecaca',
  color: '#991b1b',
  tag: '⚠ 逾期'
}, {
  min: 7,
  bg: '#ffedd5',
  color: '#c2410c',
  tag: '⚠ 逾期'
}, {
  min: 3,
  bg: '#fef3c7',
  color: '#a16207',
  tag: '⏰ 逾期'
}, {
  min: 1,
  bg: '#fefce8',
  color: '#854d0e',
  tag: '⏰ 逾期'
}];
var getFollowUpInfo = function getFollowUpInfo(r) {
  if (!r || !r.nextFollowUp) return null;
  if (r.status === 'resolved' || r.status === 'transferred') return null;
  var today = todayISO();
  var overdue = Math.round((new Date(today) - new Date(r.nextFollowUp)) / 86400000);
  if (isNaN(overdue)) return null;
  if (overdue < 0) return {
    state: 'upcoming',
    days: -overdue,
    label: "\uD83D\uDCC5 ".concat(-overdue, " \u5929\u540E\u8DDF\u8FDB"),
    bg: '#f0fdf4',
    color: '#15803d'
  };
  if (overdue === 0) return {
    state: 'today',
    days: 0,
    label: '📅 今天跟进',
    bg: '#dbeafe',
    color: '#1e40af'
  };
  var lv = FOLLOWUP_DUE_LEVELS.find(function (l) {
    return overdue >= l.min;
  }) || FOLLOWUP_DUE_LEVELS[FOLLOWUP_DUE_LEVELS.length - 1];
  return {
    state: 'overdue',
    days: overdue,
    label: "".concat(lv.tag, " ").concat(overdue, " \u5929"),
    bg: lv.bg,
    color: lv.color
  };
};

// 🆕 fix61: 客服跟进 — 网格视图卡片(紧凑只读概览)
// 优先展示:邮箱地址 → 订单编号 → 店铺;有图自适应;点卡片切回列表编辑
var CS_DIFFICULTY_META = {
  easy: {
    label: '易',
    bg: '#dcfce7',
    color: '#15803d'
  },
  mid: {
    label: '中',
    bg: '#fef3c7',
    color: '#854d0e'
  },
  hard: {
    label: '复',
    bg: '#fee2e2',
    color: '#b91c1c'
  }
};
