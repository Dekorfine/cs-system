// ════════════════════════════════════════════════════════════════════
// ⚙ 设置 + 财务 · fix28-95
// APP_VERSION: 2026.05.29-fix95
// ════════════════════════════════════════════════════════════════════
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// ════════════════════════════════════════════════════════════════════
// ⚙ 设置 + 财务 · fix28-95
// APP_VERSION: 2026.05.29-fix95
// ════════════════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════════════════
// 🆕 fix49: 拍摄部对接配置 — WorkTrack-KPI Supabase URL + Anon Key
// 由 Martin 提供;只有 super_admin / admin 能配置
// 配置成功后,客服系统就能写入 WorkTrack-KPI 的 photo_logs 表
// ════════════════════════════════════════════════════════════════════
var WtkpiConfigSection = function WtkpiConfigSection(_ref) {
  var user = _ref.user,
    toast = _ref.toast;
  var isAdmin = user.role === 'super_admin' || user.role === 'admin';
  // 🆕 fix50: 显示默认值,localStorage 覆盖优先
  var DEFAULT_URL = 'https://xyhbwqugbnowfjuhqhsj.supabase.co';
  var DEFAULT_KEY = 'sb_publishable_Z0dXXZivG5QI-FCbwELxEA_JZBNx2Hn';
  var _useState = useState(function () {
      return localStorage.getItem('wtkpi_url') || DEFAULT_URL;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    url = _useState2[0],
    setUrl = _useState2[1];
  var _useState3 = useState(function () {
      return localStorage.getItem('wtkpi_key') || DEFAULT_KEY;
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    key = _useState4[0],
    setKey = _useState4[1];
  var usingDefaults = !localStorage.getItem('wtkpi_url') && !localStorage.getItem('wtkpi_key');
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    testing = _useState6[0],
    setTesting = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    testResult = _useState8[0],
    setTestResult = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    showKey = _useState0[0],
    setShowKey = _useState0[1];
  var save = function save() {
    if (!isAdmin) {
      toast('只有主管才能配置');
      return;
    }
    if (!url.trim() || !key.trim()) {
      toast('请填写完整 URL 和 Key');
      return;
    }
    if (!/^https:\/\/[\w-]+\.supabase\.co\/?$/.test(url.trim())) {
      if (!confirm('URL 格式好像不对(应该像 https://xxxx.supabase.co),继续保存?')) return;
    }
    localStorage.setItem('wtkpi_url', url.trim());
    localStorage.setItem('wtkpi_key', key.trim());
    toast('✓ 已保存到本机');
    setTestResult(null);
  };
  var testConnection = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var w, client, _yield$client$from$se, data, error, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!(!url.trim() || !key.trim())) {
              _context.n = 1;
              break;
            }
            toast('请先填写 URL 和 Key');
            return _context.a(2);
          case 1:
            // 临时保存让 client 用最新的
            localStorage.setItem('wtkpi_url', url.trim());
            localStorage.setItem('wtkpi_key', key.trim());
            if (typeof window !== 'undefined') {
              // 强制重建 client 实例
              w = window; // 通过调用 getWtkpiClient 重新初始化
            }
            setTesting(true);
            setTestResult(null);
            _context.p = 2;
            client = window.getWtkpiClient();
            if (client) {
              _context.n = 3;
              break;
            }
            throw new Error('client 初始化失败');
          case 3:
            _context.n = 4;
            return client.from('photo_logs').select('id, status').limit(1);
          case 4:
            _yield$client$from$se = _context.v;
            data = _yield$client$from$se.data;
            error = _yield$client$from$se.error;
            if (!error) {
              _context.n = 5;
              break;
            }
            throw error;
          case 5:
            setTestResult({
              ok: true,
              msg: "\u8FDE\u63A5\u6210\u529F \u2713 \u8868\u91CC\u6709 ".concat((data === null || data === void 0 ? void 0 : data.length) || 0, " \u6761\u6837\u672C\u6570\u636E\u53EF\u8BFB")
            });
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            setTestResult({
              ok: false,
              msg: '连接失败:' + (_t.message || JSON.stringify(_t))
            });
          case 7:
            setTesting(false);
          case 8:
            return _context.a(2);
        }
      }, _callee, null, [[2, 6]]);
    }));
    return function testConnection() {
      return _ref2.apply(this, arguments);
    };
  }();
  var clear = function clear() {
    if (!confirm('确认清除自定义配置?(会恢复到默认值)')) return;
    localStorage.removeItem('wtkpi_url');
    localStorage.removeItem('wtkpi_key');
    setUrl(DEFAULT_URL);
    setKey(DEFAULT_KEY);
    setTestResult(null);
    toast('已恢复默认');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-6"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "\uD83D\uDCE8"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-.022em'
    }
  }, "\u62CD\u6444\u90E8\u5BF9\u63A5\u914D\u7F6E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, "\u5BF9\u63A5 WorkTrack-KPI \u7CFB\u7EDF\u7684 ", /*#__PURE__*/React.createElement("code", {
    className: "font-mono"
  }, "photo_logs"), " \u8868"))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3 mt-4",
    style: {
      background: 'var(--good-soft)',
      color: 'var(--good)',
      fontSize: 13,
      lineHeight: 1.65,
      fontWeight: 500
    }
  }, "\u2705 ", /*#__PURE__*/React.createElement("strong", null, "\u9ED8\u8BA4\u914D\u7F6E\u5DF2\u5C31\u4F4D"), " \xB7 \u5BA2\u670D\u53EF\u4EE5\u76F4\u63A5\u7528\u62CD\u6444\u9700\u6C42\u529F\u80FD,\u65E0\u9700\u914D\u7F6E\u3002\u4E0B\u65B9\u4EC5\u5728 Martin \u5207\u6362 Supabase \u9879\u76EE\u65F6\u624D\u9700\u8981\u4FEE\u6539\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3 mt-3",
    style: {
      background: 'var(--accent-soft)',
      color: 'var(--accent)',
      fontSize: 13,
      lineHeight: 1.65
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\uD83D\uDCCB \u914D\u7F6E\u6B65\u9AA4(\u4EC5\u5728\u9700\u8981\u65F6):"), /*#__PURE__*/React.createElement("br", null), "1. Martin / \u62CD\u6444\u90E8\u4E3B\u7BA1\u767B\u5F55 WorkTrack-KPI \u7684 Supabase Dashboard", /*#__PURE__*/React.createElement("br", null), "2. Project Settings \u2192 API \u2192 \u590D\u5236 ", /*#__PURE__*/React.createElement("strong", null, "URL"), " \u548C ", /*#__PURE__*/React.createElement("strong", null, "anon public key"), /*#__PURE__*/React.createElement("br", null), "3. \u628A\u4E24\u4E2A\u503C\u53D1\u7ED9\u4F60 \u2192 \u7C98\u8D34\u5230\u4E0B\u65B9", /*#__PURE__*/React.createElement("br", null), "4. \u70B9 ", /*#__PURE__*/React.createElement("strong", null, "\uD83D\uDD0D \u6D4B\u8BD5\u8FDE\u63A5"), " \u9A8C\u8BC1 \u2192 \u901A\u8FC7\u540E ", /*#__PURE__*/React.createElement("strong", null, "\uD83D\uDCBE \u4FDD\u5B58")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-4 mt-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block mb-1.5",
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)'
    }
  }, "Supabase URL ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bad)'
    }
  }, "*")), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: url,
    onChange: function onChange(e) {
      return setUrl(e.target.value);
    },
    placeholder: "https://xxxxxxxxxxxx.supabase.co",
    disabled: !isAdmin,
    className: "font-mono w-full",
    style: {
      fontSize: 13,
      padding: '10px 12px',
      border: '1px solid var(--line)',
      borderRadius: 10,
      background: isAdmin ? 'white' : 'var(--bg-elevated)'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block mb-1.5",
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)'
    }
  }, "Anon Public Key ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bad)'
    }
  }, "*"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowKey(!showKey);
    },
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--accent)',
      fontSize: 11,
      marginLeft: 8,
      cursor: 'pointer'
    }
  }, showKey ? '👁 隐藏' : '👁 显示')), /*#__PURE__*/React.createElement("textarea", {
    value: key,
    onChange: function onChange(e) {
      return setKey(e.target.value);
    },
    placeholder: "eyJhbGc...(\u957F JWT \u5B57\u7B26\u4E32,\u5E26 .eyJ. \u4E2D\u6BB5\u7684\u90A3\u79CD)",
    disabled: !isAdmin,
    rows: 3,
    className: "font-mono w-full",
    style: {
      fontSize: 12,
      padding: '10px 12px',
      border: '1px solid var(--line)',
      borderRadius: 10,
      background: isAdmin ? 'white' : 'var(--bg-elevated)',
      fontFamily: 'inherit',
      filter: showKey ? 'none' : 'blur(4px)',
      transition: 'filter .2s'
    }
  }))), testResult && /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3 mt-4",
    style: {
      background: testResult.ok ? 'var(--good-soft)' : 'var(--bad-soft)',
      color: testResult.ok ? 'var(--good)' : 'var(--bad)',
      fontSize: 13,
      fontWeight: 500
    }
  }, testResult.ok ? '✓ ' : '✗ ', testResult.msg), isAdmin && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: testConnection,
    disabled: testing
  }, testing ? '⏳ 测试中…' : '🔍 测试连接'), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: save
  }, "\uD83D\uDCBE \u4FDD\u5B58"), /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost",
    onClick: clear,
    style: {
      color: 'var(--bad)'
    }
  }, "\u6E05\u9664\u914D\u7F6E")), !isAdmin && /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3 mt-4",
    style: {
      background: 'var(--bg-elevated)',
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDD12 \u53EA\u6709\u4E3B\u7BA1/\u603B\u7BA1\u80FD\u914D\u7F6E\u3002\u5982\u679C\u9047\u5230\u62CD\u6444\u9700\u6C42\u529F\u80FD\u4E0D\u80FD\u7528,\u8054\u7CFB Miya / Nicole \u914D\u7F6E\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3 mt-3",
    style: {
      background: '#fef3c7',
      fontSize: 12,
      color: '#92400e',
      lineHeight: 1.65
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\uD83D\uDD10 \u5B89\u5168\u8BF4\u660E:"), "\u8FD9\u4E2A Key \u4FDD\u5B58\u5728\u4F60\u7684\u6D4F\u89C8\u5668 localStorage \u91CC(\u4E0D\u4F20\u5230\u4E91\u7AEF)\u3002", /*#__PURE__*/React.createElement("strong", null, "\u6BCF\u4E2A\u4EBA\u90FD\u8981\u81EA\u5DF1\u914D\u4E00\u6B21"), "(\u6216\u8005\u4E3B\u7BA1\u767B\u5F55\u6BCF\u53F0\u7535\u8111\u914D\u4E00\u6B21)\u3002", /*#__PURE__*/React.createElement("strong", null, "\u63A8\u8350\u7528 anon key(\u914D\u5408 RLS \u7B56\u7565)"), ",\u4E0D\u8981\u7528 service_role key,\u6CC4\u9732\u540E\u679C\u4E25\u91CD\u3002"));
};
var AdminModule = function AdminModule(_ref3) {
  var user = _ref3.user,
    employees = _ref3.employees,
    setEmployees = _ref3.setEmployees,
    toast = _ref3.toast,
    cloudCfg = _ref3.cloudCfg,
    setCloudCfg = _ref3.setCloudCfg,
    onCloudApply = _ref3.onCloudApply;
  var _useState1 = useState(null),
    _useState10 = _slicedToArray(_useState1, 2),
    editingId = _useState10[0],
    setEditingId = _useState10[1];
  var _useState11 = useState({
      name: '',
      alias: '',
      sites: '',
      password: '123456',
      role: 'staff'
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    newEmp = _useState12[0],
    setNewEmp = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showNew = _useState14[0],
    setShowNew = _useState14[1];
  var _useState15 = useState('cloud'),
    _useState16 = _slicedToArray(_useState15, 2),
    section = _useState16[0],
    setSection = _useState16[1]; // cloud | employees | gemini

  // Gemini key 配置（直接调用 kb.html 同款 Supabase 表 kb_team_config）
  var _useState17 = useState(''),
    _useState18 = _slicedToArray(_useState17, 2),
    geminiKey = _useState18[0],
    setGeminiKey = _useState18[1];
  var _useState19 = useState('检查中...'),
    _useState20 = _slicedToArray(_useState19, 2),
    geminiStatus = _useState20[0],
    setGeminiStatus = _useState20[1];
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    geminiTesting = _useState22[0],
    setGeminiTesting = _useState22[1];
  var _useState23 = useState(''),
    _useState24 = _slicedToArray(_useState23, 2),
    geminiTestResult = _useState24[0],
    setGeminiTestResult = _useState24[1];

  // 简单加密（与 kb.html 完全一致）
  var _SECRET = 'wk2024-radilum-cs-team';
  var _xorEncrypt = function _xorEncrypt(text) {
    var r = '';
    for (var i = 0; i < text.length; i++) r += String.fromCharCode(text.charCodeAt(i) ^ _SECRET.charCodeAt(i % _SECRET.length));
    return btoa(unescape(encodeURIComponent(r)));
  };
  var _xorDecrypt = function _xorDecrypt(b64) {
    try {
      var s = decodeURIComponent(escape(atob(b64)));
      var r = '';
      for (var i = 0; i < s.length; i++) r += String.fromCharCode(s.charCodeAt(i) ^ _SECRET.charCodeAt(i % _SECRET.length));
      return r;
    } catch (e) {
      return '';
    }
  };
  var loadGeminiKey = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _data$value, _yield$CLOUD$client$f, data, encrypted, decoded, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (CLOUD.client) {
              _context2.n = 1;
              break;
            }
            setGeminiStatus('❌ 云同步未启用');
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            _context2.n = 2;
            return CLOUD.client.from('kb_team_config').select('value').eq('key', 'gemini_api_key').maybeSingle();
          case 2:
            _yield$CLOUD$client$f = _context2.v;
            data = _yield$CLOUD$client$f.data;
            if (data) {
              _context2.n = 3;
              break;
            }
            setGeminiStatus('未配置');
            return _context2.a(2);
          case 3:
            encrypted = ((_data$value = data.value) === null || _data$value === void 0 ? void 0 : _data$value.encrypted) || '';
            decoded = encrypted ? _xorDecrypt(encrypted) : '';
            if (decoded) {
              setGeminiStatus("\u2713 \u5DF2\u914D\u7F6E (".concat(decoded.slice(0, 8), "...)"));
            } else {
              setGeminiStatus('未配置');
            }
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            setGeminiStatus('❌ 读取失败: ' + _t2.message);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 4]]);
    }));
    return function loadGeminiKey() {
      return _ref4.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (section === 'gemini') loadGeminiKey();
  }, [section]);
  var saveGeminiKey = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _verify$value, encrypted, _yield$CLOUD$client$f2, data, error, _yield$CLOUD$client$f3, verify, encryptedBack, decoded, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (geminiKey.trim()) {
              _context3.n = 1;
              break;
            }
            toast('⚠ 请输入 Gemini API key');
            return _context3.a(2);
          case 1:
            if (CLOUD.client) {
              _context3.n = 2;
              break;
            }
            toast('❌ 云同步未启用');
            return _context3.a(2);
          case 2:
            if (geminiKey.trim().startsWith('AIza')) {
              _context3.n = 3;
              break;
            }
            if (confirm('这个 key 看起来不像 Gemini key（通常以 AIza 开头）。继续保存吗？')) {
              _context3.n = 3;
              break;
            }
            return _context3.a(2);
          case 3:
            if (confirm('保存 Gemini API key 到云端？\n会用 XOR 加密后存储到 Supabase，所有团队成员都能使用此 key。')) {
              _context3.n = 4;
              break;
            }
            return _context3.a(2);
          case 4:
            _context3.p = 4;
            encrypted = _xorEncrypt(geminiKey.trim());
            console.log('[GEMINI] saving encrypted key, len=', encrypted.length);
            _context3.n = 5;
            return CLOUD.client.from('kb_team_config').upsert({
              key: 'gemini_api_key',
              value: {
                encrypted: encrypted,
                hint: geminiKey.slice(0, 8) + '...'
              },
              updated_at: new Date().toISOString()
            }, {
              onConflict: 'key'
            }).select();
          case 5:
            _yield$CLOUD$client$f2 = _context3.v;
            data = _yield$CLOUD$client$f2.data;
            error = _yield$CLOUD$client$f2.error;
            if (!error) {
              _context3.n = 6;
              break;
            }
            console.error('[GEMINI] save error:', error);
            alert("\u274C \u4FDD\u5B58\u5931\u8D25\uFF1A".concat(error.message, "\n\n\u9519\u8BEF\u7801: ").concat(error.code || 'unknown', "\n\u8BE6\u60C5: ").concat(error.details || error.hint || '无', "\n\n\u5E38\u89C1\u539F\u56E0\uFF1A\n1. kb_team_config \u8868\u4E0D\u5B58\u5728\uFF08\u8BF7\u8DD1 03_kb_extras.sql\uFF09\n2. RLS \u7B56\u7565\u963B\u6B62\u5199\u5165\n3. \u7F51\u7EDC\u95EE\u9898"));
            return _context3.a(2);
          case 6:
            console.log('[GEMINI] saved, verifying...');
            // 立即读出来验证
            _context3.n = 7;
            return CLOUD.client.from('kb_team_config').select('value').eq('key', 'gemini_api_key').maybeSingle();
          case 7:
            _yield$CLOUD$client$f3 = _context3.v;
            verify = _yield$CLOUD$client$f3.data;
            encryptedBack = (verify === null || verify === void 0 || (_verify$value = verify.value) === null || _verify$value === void 0 ? void 0 : _verify$value.encrypted) || '';
            decoded = encryptedBack ? _xorDecrypt(encryptedBack) : '';
            if (!(decoded !== geminiKey.trim())) {
              _context3.n = 8;
              break;
            }
            alert("\u26A0 \u4FDD\u5B58\u7591\u4F3C\u6210\u529F\u4F46\u9A8C\u8BC1\u5931\u8D25\uFF1A\n\n\u5199\u5165\u7684 key: ".concat(geminiKey.slice(0, 8), "...\n\u8BFB\u56DE\u7684 key: ").concat(decoded.slice(0, 8), "...\n\n\u53EF\u80FD\u662F RLS \u963B\u6B62\u4E86\u8BFB\u53D6\u3002\u8BF7\u53BB Supabase \u68C0\u67E5 kb_team_config \u8868\u7684 Policies\u3002"));
            return _context3.a(2);
          case 8:
            toast('✓ Gemini key 已加密保存 · 知识库可立即使用');
            setGeminiKey('');
            loadGeminiKey();
            // 通知所有 kb iframe 重载 key
            document.querySelectorAll('iframe[title="知识库"]').forEach(function (f) {
              try {
                f.contentWindow.postMessage({
                  type: 'reload-gemini-key'
                }, '*');
              } catch (e) {}
            });
            _context3.n = 10;
            break;
          case 9:
            _context3.p = 9;
            _t3 = _context3.v;
            console.error('[GEMINI] save exception:', _t3);
            alert('❌ 保存异常: ' + _t3.message);
          case 10:
            return _context3.a(2);
        }
      }, _callee3, null, [[4, 9]]);
    }));
    return function saveGeminiKey() {
      return _ref5.apply(this, arguments);
    };
  }();
  var testGemini = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var _j$candidates, key, source, _data$value2, _yield$CLOUD$client$f4, data, encrypted, resp, _err$error, err, j, txt, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            setGeminiTesting(true);
            setGeminiTestResult('');
            _context4.p = 1;
            // 优先用输入框里的 key，否则从云端读
            key = geminiKey.trim();
            source = '输入框';
            if (key) {
              _context4.n = 3;
              break;
            }
            _context4.n = 2;
            return CLOUD.client.from('kb_team_config').select('value').eq('key', 'gemini_api_key').maybeSingle();
          case 2:
            _yield$CLOUD$client$f4 = _context4.v;
            data = _yield$CLOUD$client$f4.data;
            encrypted = (data === null || data === void 0 || (_data$value2 = data.value) === null || _data$value2 === void 0 ? void 0 : _data$value2.encrypted) || '';
            key = encrypted ? _xorDecrypt(encrypted) : '';
            source = '云端';
          case 3:
            if (key) {
              _context4.n = 4;
              break;
            }
            setGeminiTestResult('❌ 请先输入 key 或先点「保存到云端」');
            setGeminiTesting(false);
            return _context4.a(2);
          case 4:
            _context4.n = 5;
            return fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=".concat(key), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                contents: [{
                  parts: [{
                    text: '用一句中文回答：你能听到我吗？'
                  }]
                }]
              })
            });
          case 5:
            resp = _context4.v;
            if (resp.ok) {
              _context4.n = 7;
              break;
            }
            _context4.n = 6;
            return resp.json()["catch"](function () {
              return {};
            });
          case 6:
            err = _context4.v;
            throw new Error(((_err$error = err.error) === null || _err$error === void 0 ? void 0 : _err$error.message) || "HTTP ".concat(resp.status));
          case 7:
            _context4.n = 8;
            return resp.json();
          case 8:
            j = _context4.v;
            txt = ((_j$candidates = j.candidates) === null || _j$candidates === void 0 || (_j$candidates = _j$candidates[0]) === null || _j$candidates === void 0 || (_j$candidates = _j$candidates.content) === null || _j$candidates === void 0 || (_j$candidates = _j$candidates.parts) === null || _j$candidates === void 0 || (_j$candidates = _j$candidates[0]) === null || _j$candidates === void 0 ? void 0 : _j$candidates.text) || '';
            setGeminiTestResult("\u2713 \u8FDE\u901A\u6210\u529F (key \u6765\u81EA".concat(source, "): \"").concat(txt.slice(0, 40).trim(), "...\""));
            _context4.n = 10;
            break;
          case 9:
            _context4.p = 9;
            _t4 = _context4.v;
            setGeminiTestResult('❌ ' + _t4.message);
          case 10:
            setGeminiTesting(false);
          case 11:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 9]]);
    }));
    return function testGemini() {
      return _ref6.apply(this, arguments);
    };
  }();
  var addEmployee = function addEmployee() {
    if (!newEmp.name.trim()) {
      toast('⚠ 姓名必填');
      return;
    }
    if (employees.some(function (e) {
      return e.name === newEmp.name && e.alias === newEmp.alias;
    })) {
      toast('⚠ 该员工已存在');
      return;
    }
    var emp = _objectSpread(_objectSpread({
      id: 'u_' + uid()
    }, newEmp), {}, {
      name: newEmp.name.trim(),
      alias: newEmp.alias.trim(),
      sites: newEmp.sites.trim(),
      password: newEmp.password || '123456'
    });
    setEmployees(function (prev) {
      return [].concat(_toConsumableArray(prev), [emp]);
    });
    setNewEmp({
      name: '',
      alias: '',
      sites: '',
      password: '123456',
      role: 'staff'
    });
    setShowNew(false);
    toast('✓ 已添加员工 ' + emp.name);
  };
  var updateEmp = function updateEmp(id, patch) {
    setEmployees(function (prev) {
      return prev.map(function (e) {
        return e.id === id ? _objectSpread(_objectSpread({}, e), patch) : e;
      });
    });
  };
  var deleteEmp = function deleteEmp(id) {
    if (id === user.id) {
      toast('⚠ 不能删除自己');
      return;
    }
    var e = employees.find(function (x) {
      return x.id === id;
    });
    if (!confirm("\u786E\u8BA4\u5220\u9664\u5458\u5DE5 ".concat(e.name, "\uFF1F\u5386\u53F2\u8BB0\u5F55\u4E0D\u4F1A\u4E22\u5931\uFF0C\u4F46\u8BE5\u5458\u5DE5\u65E0\u6CD5\u518D\u767B\u5F55\u3002"))) return;
    setEmployees(function (prev) {
      return prev.filter(function (e) {
        return e.id !== id;
      });
    });
    toast('✗ 已删除');
  };
  var resetPwd = function resetPwd(id) {
    var newPwd = prompt('请输入新密码 (至少 6 位):', '123456');
    if (!newPwd || newPwd.length < 6) {
      toast('⚠ 密码至少 6 位');
      return;
    }
    updateEmp(id, {
      password: newPwd
    });
    toast('✓ 密码已重置为: ' + newPwd);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-5 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: 'var(--ink-4)',
      marginRight: 4,
      letterSpacing: '.5px'
    }
  }, "\u57FA\u7840\u7EF4\u62A4"), /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(section === 'employees' ? 'active' : ''),
    onClick: function onClick() {
      return setSection('employees');
    }
  }, "\uD83D\uDC65 \u4EBA\u5458 (", employees.length, ")"), /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(section === 'sites' ? 'active' : ''),
    onClick: function onClick() {
      return setSection('sites');
    }
  }, "\uD83C\uDF10 \u7F51\u7AD9"), /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(section === 'products' ? 'active' : ''),
    onClick: function onClick() {
      return setSection('products');
    }
  }, "\uD83D\uDCE6 \u4EA7\u54C1"), /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(section === 'suppliers' ? 'active' : ''),
    onClick: function onClick() {
      return setSection('suppliers');
    }
  }, "\uD83C\uDFED \u4F9B\u5E94\u5546"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: 'var(--line)',
      margin: '0 4px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: 'var(--ink-4)',
      marginRight: 4,
      letterSpacing: '.5px'
    }
  }, "\u4E1A\u52A1\u89C4\u5219"), /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(section === 'chargeback_owners' ? 'active' : ''),
    onClick: function onClick() {
      return setSection('chargeback_owners');
    }
  }, "\uD83D\uDEA8 \u62D2\u4ED8\u4E13\u4EBA"), /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(section === 'refund_processors' ? 'active' : ''),
    onClick: function onClick() {
      return setSection('refund_processors');
    }
  }, "\uD83D\uDCB0 \u9000\u6B3E\u5904\u7406\u4EBA"), /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(section === 'alert_thresholds' ? 'active' : ''),
    onClick: function onClick() {
      return setSection('alert_thresholds');
    }
  }, "\u23F0 \u9884\u8B66\u9608\u503C"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: 'var(--line)',
      margin: '0 4px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: 'var(--ink-4)',
      marginRight: 4,
      letterSpacing: '.5px'
    }
  }, "\u7CFB\u7EDF"), /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(section === 'cloud' ? 'active' : ''),
    onClick: function onClick() {
      return setSection('cloud');
    }
  }, "\u2601 \u4E91\u540C\u6B65"), /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(section === 'gemini' ? 'active' : ''),
    onClick: function onClick() {
      return setSection('gemini');
    }
  }, "\u2728 Gemini AI"), /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(section === 'wtkpi' ? 'active' : ''),
    onClick: function onClick() {
      return setSection('wtkpi');
    }
  }, "\uD83D\uDCE8 \u62CD\u6444\u90E8\u5BF9\u63A5"))), section === 'sites' && /*#__PURE__*/React.createElement(SitesMaintenanceSection, {
    user: user,
    toast: toast
  }), section === 'products' && /*#__PURE__*/React.createElement(ProductsMaintenanceSection, {
    user: user,
    toast: toast
  }), section === 'suppliers' && /*#__PURE__*/React.createElement(SuppliersManagement, {
    toast: toast,
    user: user
  }), section === 'chargeback_owners' && /*#__PURE__*/React.createElement(ChargebackOwnersSettings, {
    employees: employees,
    user: user,
    toast: toast
  }), section === 'refund_processors' && /*#__PURE__*/React.createElement(RefundProcessorsSettings, {
    employees: employees,
    user: user,
    toast: toast
  }), section === 'alert_thresholds' && /*#__PURE__*/React.createElement(AlertThresholdsSettings, {
    user: user,
    toast: toast
  }), section === 'cloud' && /*#__PURE__*/React.createElement(CloudSettingsCard, {
    cfg: cloudCfg,
    setCfg: setCloudCfg,
    toast: toast,
    onApply: onCloudApply
  }), section === 'gemini' && /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-6"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "\u2728"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-.022em'
    }
  }, "Gemini AI \u914D\u7F6E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, "\u77E5\u8BC6\u5E93\u7684 AI \u4E00\u952E\u4F18\u5316\u6A21\u677F\u529F\u80FD\u9700\u8981 Gemini API key"))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3 mt-4",
    style: {
      background: 'var(--accent-soft)',
      color: 'var(--accent)',
      fontSize: 13,
      lineHeight: 1.65
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\uD83D\uDCCB \u7533\u8BF7\u6B65\u9AA4\uFF1A"), /*#__PURE__*/React.createElement("br", null), "1. \u8BBF\u95EE ", /*#__PURE__*/React.createElement("a", {
    href: "https://aistudio.google.com/apikey",
    target: "_blank",
    rel: "noopener",
    style: {
      color: 'var(--accent)',
      textDecoration: 'underline'
    }
  }, "aistudio.google.com/apikey"), /*#__PURE__*/React.createElement("br", null), "2. \u7528 Google \u8D26\u53F7\u767B\u5F55 \u2192 \u70B9 ", /*#__PURE__*/React.createElement("strong", null, "Create API key"), " \u2192 \u9009\u62E9 Google Cloud \u9879\u76EE\uFF08\u6216\u65B0\u5EFA\uFF09", /*#__PURE__*/React.createElement("br", null), "3. \u590D\u5236\u751F\u6210\u7684 key\uFF08\u4EE5 ", /*#__PURE__*/React.createElement("code", {
    className: "font-mono px-1 rounded",
    style: {
      background: 'white'
    }
  }, "AIzaSy..."), " \u5F00\u5934\uFF0C\u7EA6 39 \u5B57\u7B26\uFF09", /*#__PURE__*/React.createElement("br", null), "4. \u7C98\u8D34\u5230\u4E0B\u65B9\u8F93\u5165\u6846 \u2192 \u4FDD\u5B58\u5230\u4E91\u7AEF\uFF08XOR \u52A0\u5BC6\uFF0C\u5168\u56E2\u961F\u5171\u4EAB\uFF09"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-2",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "Gemini API Key"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: geminiKey,
    onChange: function onChange(e) {
      return setGeminiKey(e.target.value);
    },
    placeholder: "AIzaSy...",
    autoComplete: "off",
    name: "gemini-api-key-no-fill",
    "data-lpignore": "true",
    "data-1p-ignore": "true",
    style: {
      fontFamily: 'SF Mono, monospace',
      fontSize: 13
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-2",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u5F53\u524D Key \u72B6\u6001"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--bg-elevated)',
      fontSize: 13,
      color: geminiStatus.startsWith('✓') ? 'var(--good)' : geminiStatus.startsWith('❌') ? 'var(--bad)' : 'var(--ink-3)'
    }
  }, geminiStatus))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: saveGeminiKey,
    disabled: !geminiKey.trim()
  }, "\uD83D\uDD10 \u4FDD\u5B58\u5230\u4E91\u7AEF\uFF08\u52A0\u5BC6\uFF09"), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: testGemini,
    disabled: geminiTesting
  }, geminiTesting ? '⏳ 测试中...' : '🧪 测试连通性'), geminiTestResult && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: geminiTestResult.startsWith('✓') ? 'var(--good)' : 'var(--bad)'
    }
  }, geminiTestResult)), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3 mt-5",
    style: {
      background: 'var(--bg-elevated)',
      fontSize: 12,
      color: 'var(--ink-3)',
      lineHeight: 1.65
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\uD83D\uDD10 \u52A0\u5BC6\u8BF4\u660E\uFF1A"), "API key \u7ECF XOR + Base64 \u52A0\u5BC6\u540E\u5B58\u50A8\u5728 Supabase \u7684 ", /*#__PURE__*/React.createElement("code", {
    className: "font-mono"
  }, "kb_team_config"), " \u8868\u91CC\u3002 \u5373\u4F7F\u6709\u4EBA\u901A\u8FC7\u5F00\u53D1\u8005\u5DE5\u5177\u770B\u5230\u8868\u5185\u5BB9\uFF0C\u4E5F\u53EA\u4F1A\u770B\u5230\u52A0\u5BC6\u5B57\u7B26\u4E32\u3002\u4F46\u8BF7\u6CE8\u610F\uFF1A**\u8FD9\u53EA\u80FD\u9632 plain text \u6CC4\u6F0F\uFF0C\u4E0D\u80FD\u9632\u6709\u5FC3\u4EBA**\u2014\u2014\u6240\u4EE5\u4E00\u5B9A\u4E0D\u8981\u628A key \u5206\u4EAB\u5230\u516C\u5F00\u6E20\u9053\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3 mt-3",
    style: {
      background: '#fef3c7',
      fontSize: 12,
      color: '#92400e',
      lineHeight: 1.65
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\uD83D\uDCA1 \u8C01\u6765\u914D\u7F6E\uFF1F"), "\u5EFA\u8BAE**\u53EA\u8BA9\u4E3B\u7BA1 Miya \u914D\u7F6E\u4E00\u6B21**\u2014\u2014\u914D\u597D\u540E\u5168\u56E2\u961F\u6240\u6709\u4EBA\u5728\u77E5\u8BC6\u5E93\u70B9\u51FB \"\u7528 Gemini \u6539\u5199\" \u90FD\u80FD\u7ACB\u5373\u4F7F\u7528\uFF0C\u65E0\u9700\u5404\u81EA\u914D\u7F6E\u3002")), section === 'wtkpi' && /*#__PURE__*/React.createElement(WtkpiConfigSection, {
    user: user,
    toast: toast
  }), section === 'employees' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-3 flex-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "users",
    className: "w-5 h-5",
    style: {
      color: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-display text-base font-bold"
  }, "\u5458\u5DE5\u7BA1\u7406"), /*#__PURE__*/React.createElement("span", {
    className: "tag tag-neutral"
  }, employees.length, " \u4EBA")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    title: "\u628A\u5BA2\u670D\u90E8\u4EBA\u5458\u53D1\u5E03\u5230\u4E09\u7CFB\u7EDF\u5171\u4EAB\u76EE\u5F55(\u7F8E\u5DE5/\u5BA2\u670D/\u8DDF\u5355\u4E92\u76F8\u53EF\u89C1,\u53D1\u5DE5\u5355\u80FD\u9009\u5230\u5177\u4F53\u4EBA)",
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var n, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            _context5.n = 1;
            return window.publishMyStaff(employees, user.name + (user.alias ? ' ' + user.alias : ''));
          case 1:
            n = _context5.v;
            toast("\u2713 \u5DF2\u540C\u6B65 ".concat(n, " \u540D\u5BA2\u670D\u4EBA\u5458\u5230\u5171\u4EAB\u76EE\u5F55"));
            _context5.n = 3;
            break;
          case 2:
            _context5.p = 2;
            _t5 = _context5.v;
            toast('❌ 同步失败:' + (_t5.message || _t5));
          case 3:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 2]]);
    }))
  }, "\uD83D\uDD04 \u540C\u6B65\u5230\u5171\u4EAB\u76EE\u5F55"), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: function onClick() {
      return setShowNew(!showNew);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    className: "w-4 h-4 inline mr-1"
  }), "\u6DFB\u52A0\u5458\u5DE5")))), showNew && /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-5",
    style: {
      borderColor: 'var(--accent)',
      borderWidth: '2px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-sm font-bold mb-3"
  }, "\u65B0\u589E\u5458\u5DE5"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-bold mb-1",
    style: {
      color: 'var(--ink-2)'
    }
  }, "\u4E2D\u6587\u59D3\u540D *"), /*#__PURE__*/React.createElement("input", {
    value: newEmp.name,
    onChange: function onChange(e) {
      return setNewEmp(_objectSpread(_objectSpread({}, newEmp), {}, {
        name: e.target.value
      }));
    },
    placeholder: "\u5982 \u5F20\u4E09"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-bold mb-1",
    style: {
      color: 'var(--ink-2)'
    }
  }, "\u82F1\u6587\u540D"), /*#__PURE__*/React.createElement("input", {
    value: newEmp.alias,
    onChange: function onChange(e) {
      return setNewEmp(_objectSpread(_objectSpread({}, newEmp), {}, {
        alias: e.target.value
      }));
    },
    placeholder: "\u5982 Sally"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-bold mb-1",
    style: {
      color: 'var(--ink-2)'
    }
  }, "\u8D1F\u8D23\u7F51\u7AD9"), /*#__PURE__*/React.createElement("input", {
    value: newEmp.sites,
    onChange: function onChange(e) {
      return setNewEmp(_objectSpread(_objectSpread({}, newEmp), {}, {
        sites: e.target.value
      }));
    },
    placeholder: "\u5982 VK+DC"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-bold mb-1",
    style: {
      color: 'var(--ink-2)'
    }
  }, "\u521D\u59CB\u5BC6\u7801"), /*#__PURE__*/React.createElement("input", {
    value: newEmp.password,
    onChange: function onChange(e) {
      return setNewEmp(_objectSpread(_objectSpread({}, newEmp), {}, {
        password: e.target.value
      }));
    },
    placeholder: "\u9ED8\u8BA4 123456"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] font-bold mb-1",
    style: {
      color: 'var(--ink-2)'
    }
  }, "\u89D2\u8272"), /*#__PURE__*/React.createElement("select", {
    value: newEmp.role,
    onChange: function onChange(e) {
      return setNewEmp(_objectSpread(_objectSpread({}, newEmp), {}, {
        role: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "staff"
  }, "\u5458\u5DE5"), /*#__PURE__*/React.createElement("option", {
    value: "admin"
  }, "\u4E3B\u7BA1 (\u6709\u5168\u90E8\u6743\u9650)")))), /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: addEmployee
  }, "\u786E\u8BA4\u6DFB\u52A0"), /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost",
    onClick: function onClick() {
      return setShowNew(false);
    }
  }, "\u53D6\u6D88"))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto scrollbar-thin"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "#"), /*#__PURE__*/React.createElement("th", null, "\u59D3\u540D"), /*#__PURE__*/React.createElement("th", null, "\u82F1\u6587\u540D"), /*#__PURE__*/React.createElement("th", null, "\u8D1F\u8D23\u7F51\u7AD9"), /*#__PURE__*/React.createElement("th", null, "\u89D2\u8272"), /*#__PURE__*/React.createElement("th", null, "\u5BC6\u7801"), /*#__PURE__*/React.createElement("th", null, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, employees.filter(function (e) {
    return !e.hideFromList || e.id === user.id;
  }).map(function (e, idx) {
    var isEditing = editingId === e.id;
    return /*#__PURE__*/React.createElement("tr", {
      key: e.id
    }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "font-mono text-[11px]",
      style: {
        color: 'var(--ink-4)'
      }
    }, idx + 1)), /*#__PURE__*/React.createElement("td", null, isEditing ? /*#__PURE__*/React.createElement("input", {
      value: e.name,
      onChange: function onChange(ev) {
        return updateEmp(e.id, {
          name: ev.target.value
        });
      },
      style: {
        padding: '4px 8px',
        fontSize: '12px'
      }
    }) : /*#__PURE__*/React.createElement("span", {
      className: "font-bold"
    }, e.name)), /*#__PURE__*/React.createElement("td", null, isEditing ? /*#__PURE__*/React.createElement("input", {
      value: e.alias,
      onChange: function onChange(ev) {
        return updateEmp(e.id, {
          alias: ev.target.value
        });
      },
      style: {
        padding: '4px 8px',
        fontSize: '12px'
      }
    }) : /*#__PURE__*/React.createElement("span", {
      className: "text-xs"
    }, e.alias || '—')), /*#__PURE__*/React.createElement("td", null, isEditing ? /*#__PURE__*/React.createElement("input", {
      value: e.sites,
      onChange: function onChange(ev) {
        return updateEmp(e.id, {
          sites: ev.target.value
        });
      },
      style: {
        padding: '4px 8px',
        fontSize: '12px'
      }
    }) : /*#__PURE__*/React.createElement("span", {
      className: "text-xs",
      style: {
        color: 'var(--ink-3)'
      }
    }, e.sites || '—')), /*#__PURE__*/React.createElement("td", null, isEditing ? /*#__PURE__*/React.createElement("select", {
      value: e.role,
      onChange: function onChange(ev) {
        return updateEmp(e.id, {
          role: ev.target.value
        });
      },
      style: {
        padding: '4px 8px',
        fontSize: '11px'
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: "staff"
    }, "\u5458\u5DE5"), /*#__PURE__*/React.createElement("option", {
      value: "admin"
    }, "\u4E3B\u7BA1")) : /*#__PURE__*/React.createElement("span", {
      className: "tag ".concat(e.role === 'admin' ? 'tag-gold' : 'tag-neutral')
    }, e.role === 'admin' ? '主管' : '员工')), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "font-mono text-[10px]",
      style: {
        color: 'var(--ink-4)'
      }
    }, "\u2022\u2022\u2022\u2022\u2022\u2022"), /*#__PURE__*/React.createElement("button", {
      className: "btn-ghost ml-2",
      onClick: function onClick() {
        return resetPwd(e.id);
      },
      style: {
        fontSize: '10px'
      }
    }, "\u91CD\u7F6E")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      className: "flex gap-1"
    }, isEditing ? /*#__PURE__*/React.createElement("button", {
      className: "btn-sec",
      onClick: function onClick() {
        return setEditingId(null);
      },
      style: {
        padding: '4px 10px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      className: "w-3 h-3 inline"
    }), " \u5B8C\u6210") : /*#__PURE__*/React.createElement("button", {
      className: "btn-sec",
      onClick: function onClick() {
        return setEditingId(e.id);
      },
      style: {
        padding: '4px 10px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      className: "w-3 h-3 inline"
    }), " \u7F16\u8F91"), e.id !== user.id && /*#__PURE__*/React.createElement("button", {
      className: "btn-danger",
      onClick: function onClick() {
        return deleteEmp(e.id);
      },
      style: {
        padding: '4px 10px'
      }
    }, "\u5220\u9664"))));
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4",
    style: {
      background: 'var(--info-soft)',
      borderColor: 'var(--info)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-xs",
    style: {
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("b", null, "\uD83D\uDCCC \u4E3B\u7BA1\u8BF4\u660E\uFF1A"), /*#__PURE__*/React.createElement("ul", {
    className: "mt-2 ml-4 list-disc space-y-1"
  }, /*#__PURE__*/React.createElement("li", null, "\u6240\u6709\u5458\u5DE5\u7684\u521D\u59CB\u5BC6\u7801\u9ED8\u8BA4\u4E3A ", /*#__PURE__*/React.createElement("code", {
    className: "font-mono px-1 rounded",
    style: {
      background: 'white'
    }
  }, "123456"), "\uFF0C\u4E3B\u7BA1\u5BC6\u7801\u4E3A ", /*#__PURE__*/React.createElement("code", {
    className: "font-mono px-1 rounded",
    style: {
      background: 'white'
    }
  }, "admin123")), /*#__PURE__*/React.createElement("li", null, "\u5EFA\u8BAE\u5458\u5DE5\u9996\u6B21\u767B\u5F55\u540E\u8BA9\u5176\u4FEE\u6539\u5BC6\u7801\uFF08\u70B9\u51FB\"\u91CD\u7F6E\"\u8F93\u5165\u65B0\u5BC6\u7801\uFF09"), /*#__PURE__*/React.createElement("li", null, "\u5220\u9664\u5458\u5DE5\u4E0D\u4F1A\u4E22\u5931\u5386\u53F2\u8BB0\u5F55\uFF0C\u4F46\u8BE5\u5458\u5DE5\u65E0\u6CD5\u518D\u767B\u5F55"), /*#__PURE__*/React.createElement("li", null, "\u4E3B\u7BA1\u53EF\u4EE5\u67E5\u770B\u6240\u6709\u5458\u5DE5\u7684\u6570\u636E\u3001\u56DE\u6536\u7AD9\u8BB0\u5F55\u3001\u6C38\u4E45\u5220\u9664\u7B49\u9AD8\u6743\u9650\u64CD\u4F5C"))))));
};

// ============================================================
// 财务卖价计算器 (简化版 - 核心售价公式)
// ============================================================
var FinanceModule = function FinanceModule(_ref8) {
  var user = _ref8.user,
    toast = _ref8.toast;
  var sameDirUrl = "finance.html";
  var iframeRef = React.useRef(null);
  var _useState25 = useState('calc(100vh - 100px)'),
    _useState26 = _slicedToArray(_useState25, 2),
    iframeHeight = _useState26[0],
    setIframeHeight = _useState26[1];

  // 监听 iframe 内的 postMessage 高度更新（让整页只有一个滚动条）
  useEffect(function () {
    var handler = function handler(e) {
      var _e$data, _e$data2;
      if (((_e$data = e.data) === null || _e$data === void 0 ? void 0 : _e$data.type) === 'iframe-resize' && ((_e$data2 = e.data) === null || _e$data2 === void 0 ? void 0 : _e$data2.source) === 'finance') {
        // iframe 撑满内容高度（外部页面自己滚动，避免双滚动条）
        setIframeHeight(Math.max(600, e.data.height + 20) + 'px');
      }
    };
    window.addEventListener('message', handler);
    return function () {
      return window.removeEventListener('message', handler);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in",
    style: {
      margin: '-20px -24px -20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 24px',
      background: 'var(--bg-elevated)',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, "\uD83D\uDCB0 \u8D22\u52A1\u5BF9\u8D26\u8BA1\u7B97\u5668"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8
    }
  }, "\xB7 13 \u4E2A\u627F\u8FD0\u5546 \xB7 70+ \u56FD\u5BB6\u8D39\u7387 \xB7 \u8FD0\u8D39 / \u4F53\u79EF\u91CD / \u9644\u52A0\u8D39\u5B8C\u6574\u6838\u7B97")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: function onClick() {
      var _iframeRef$current;
      return (_iframeRef$current = iframeRef.current) === null || _iframeRef$current === void 0 || (_iframeRef$current = _iframeRef$current.contentWindow) === null || _iframeRef$current === void 0 || (_iframeRef$current = _iframeRef$current.location) === null || _iframeRef$current === void 0 ? void 0 : _iframeRef$current.reload();
    },
    title: "\u5237\u65B0"
  }, "\uD83D\uDD04"), /*#__PURE__*/React.createElement("a", {
    href: sameDirUrl,
    target: "_blank",
    rel: "noopener",
    className: "btn-sec",
    style: {
      textDecoration: 'none'
    }
  }, "\u2197 \u65B0\u7A97\u53E3\u6253\u5F00"))), /*#__PURE__*/React.createElement("iframe", {
    ref: iframeRef,
    src: sameDirUrl,
    style: {
      width: '100%',
      height: iframeHeight,
      border: 'none',
      background: '#fafaf7',
      display: 'block',
      transition: 'height .15s'
    },
    title: "\u8D22\u52A1\u8BA1\u7B97\u5668",
    scrolling: "no"
  }));
};

// ============================================================
// 运费支付管理模块 - 支付记录 / 快递公司 / 统计汇总
// ============================================================
var FreightModule = function FreightModule(_ref9) {
  var user = _ref9.user,
    toast = _ref9.toast,
    cloudOn = _ref9.cloudOn;
  var _useState27 = useState('payments'),
    _useState28 = _slicedToArray(_useState27, 2),
    section = _useState28[0],
    setSection = _useState28[1];
  var _useState29 = useState([]),
    _useState30 = _slicedToArray(_useState29, 2),
    carriers = _useState30[0],
    setCarriers = _useState30[1];
  var _useState31 = useState([]),
    _useState32 = _slicedToArray(_useState31, 2),
    payments = _useState32[0],
    setPayments = _useState32[1];
  var _useState33 = useState(false),
    _useState34 = _slicedToArray(_useState33, 2),
    loading = _useState34[0],
    setLoading = _useState34[1];
  var _useState35 = useState(function () {
      return new Date().toISOString().slice(0, 7);
    }),
    _useState36 = _slicedToArray(_useState35, 2),
    filterMonth = _useState36[0],
    setFilterMonth = _useState36[1];
  var _useState37 = useState(''),
    _useState38 = _slicedToArray(_useState37, 2),
    filterCarrier = _useState38[0],
    setFilterCarrier = _useState38[1];
  var _useState39 = useState(''),
    _useState40 = _slicedToArray(_useState39, 2),
    filterCategory = _useState40[0],
    setFilterCategory = _useState40[1];
  var _useState41 = useState(''),
    _useState42 = _slicedToArray(_useState41, 2),
    filterMethod = _useState42[0],
    setFilterMethod = _useState42[1];
  var PAYMENT_METHODS = [{
    v: 'bank',
    label: '🏦 银行转账'
  }, {
    v: 'alipay',
    label: '💙 支付宝'
  }, {
    v: 'wechat',
    label: '💚 微信'
  }, {
    v: 'paypal',
    label: '🔵 PayPal'
  }, {
    v: 'pcard',
    label: '💳 P 卡/信用卡'
  }, {
    v: 'cash',
    label: '💵 现金'
  }, {
    v: 'other',
    label: '⚪ 其他'
  }];
  var methodLabel = function methodLabel(v) {
    var _PAYMENT_METHODS$find;
    return ((_PAYMENT_METHODS$find = PAYMENT_METHODS.find(function (m) {
      return m.v === v;
    })) === null || _PAYMENT_METHODS$find === void 0 ? void 0 : _PAYMENT_METHODS$find.label) || v;
  };
  var CATEGORIES = [{
    v: 'express',
    label: '📦 快递'
  }, {
    v: 'air',
    label: '✈️ 空运'
  }, {
    v: 'sea',
    label: '🚢 海运'
  }, {
    v: 'postal',
    label: '📮 邮政'
  }];
  var categoryLabel = function categoryLabel(v) {
    var _CATEGORIES$find;
    return ((_CATEGORIES$find = CATEGORIES.find(function (c) {
      return c.v === v;
    })) === null || _CATEGORIES$find === void 0 ? void 0 : _CATEGORIES$find.label) || v;
  };
  var loadAll = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var _yield$Promise$all, _yield$Promise$all2, r1, r2, msg, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            if (CLOUD.client) {
              _context6.n = 1;
              break;
            }
            toast('⚠ 云同步未启用');
            return _context6.a(2);
          case 1:
            setLoading(true);
            _context6.p = 2;
            _context6.n = 3;
            return Promise.all([CLOUD.client.from('freight_carriers').select('*').order('name'), CLOUD.client.from('freight_payments').select('*').eq('trashed', false).order('payment_date', {
              ascending: false
            }).limit(2000)]);
          case 3:
            _yield$Promise$all = _context6.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            r1 = _yield$Promise$all2[0];
            r2 = _yield$Promise$all2[1];
            if (!r1.error) {
              _context6.n = 4;
              break;
            }
            throw r1.error;
          case 4:
            if (!r2.error) {
              _context6.n = 5;
              break;
            }
            throw r2.error;
          case 5:
            setCarriers(r1.data || []);
            setPayments(r2.data || []);
            _context6.n = 7;
            break;
          case 6:
            _context6.p = 6;
            _t6 = _context6.v;
            msg = _t6.message || '';
            if (msg.includes('schema cache') || msg.includes('does not exist') || msg.includes('PGRST')) {
              toast('⚠ 运费表还没建好，请联系管理员跑 SQL', 'error');
            } else {
              toast('❌ 加载失败: ' + msg);
            }
          case 7:
            setLoading(false);
          case 8:
            return _context6.a(2);
        }
      }, _callee6, null, [[2, 6]]);
    }));
    return function loadAll() {
      return _ref0.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (cloudOn) loadAll();
  }, [cloudOn]);
  var _useState43 = useState({
      carrier_id: '',
      category: 'express',
      amount: '',
      currency: 'CNY',
      payment_method: 'bank',
      payment_date: new Date().toISOString().slice(0, 10),
      invoice_no: '',
      shipment_ref: '',
      notes: ''
    }),
    _useState44 = _slicedToArray(_useState43, 2),
    newPayment = _useState44[0],
    setNewPayment = _useState44[1];
  var _useState45 = useState(null),
    _useState46 = _slicedToArray(_useState45, 2),
    editingPaymentId = _useState46[0],
    setEditingPaymentId = _useState46[1];

  // 📎 附件状态
  var _useState47 = useState([]),
    _useState48 = _slicedToArray(_useState47, 2),
    pendingAttachments = _useState48[0],
    setPendingAttachments = _useState48[1]; // [{name, type, size, url, path, uploading}]
  var fileInputRef = React.useRef(null);
  var dropZoneRef = React.useRef(null);

  // 上传单个文件到 Supabase Storage
  var uploadFile = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(file) {
      var ext, safeName, path, _yield$CLOUD$client$s, data, error, _CLOUD$client$storage, urlData;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            if (CLOUD.client) {
              _context7.n = 1;
              break;
            }
            throw new Error('云同步未启用');
          case 1:
            ext = file.name.split('.').pop() || 'bin';
            safeName = file.name.replace(/[^\w.-]/g, '_').slice(0, 60);
            path = "".concat(new Date().toISOString().slice(0, 7), "/").concat(Date.now(), "_").concat(Math.random().toString(36).slice(2, 8), "_").concat(safeName);
            _context7.n = 2;
            return CLOUD.client.storage.from('freight-receipts').upload(path, file, {
              cacheControl: '3600',
              upsert: false,
              contentType: file.type
            });
          case 2:
            _yield$CLOUD$client$s = _context7.v;
            data = _yield$CLOUD$client$s.data;
            error = _yield$CLOUD$client$s.error;
            if (!error) {
              _context7.n = 3;
              break;
            }
            throw error;
          case 3:
            _CLOUD$client$storage = CLOUD.client.storage.from('freight-receipts').getPublicUrl(path), urlData = _CLOUD$client$storage.data;
            return _context7.a(2, {
              name: file.name,
              type: file.type,
              size: file.size,
              path: path,
              url: urlData.publicUrl
            });
        }
      }, _callee7);
    }));
    return function uploadFile(_x) {
      return _ref1.apply(this, arguments);
    };
  }();
  var handleFiles = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(fileList) {
      var files, placeholders, _loop, i;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            if (!(!fileList || fileList.length === 0)) {
              _context9.n = 1;
              break;
            }
            return _context9.a(2);
          case 1:
            if (CLOUD.client) {
              _context9.n = 2;
              break;
            }
            toast('⚠ 云同步未启用，无法上传附件');
            return _context9.a(2);
          case 2:
            files = Array.from(fileList).filter(function (f) {
              if (f.size > 10 * 1024 * 1024) {
                toast("\u26A0 ".concat(f.name, " \u8D85\u8FC7 10MB \u5DF2\u8DF3\u8FC7"));
                return false;
              }
              if (!f.type.startsWith('image/') && f.type !== 'application/pdf') {
                toast("\u26A0 ".concat(f.name, " \u4E0D\u662F\u56FE\u7247\u6216 PDF"));
                return false;
              }
              return true;
            });
            if (!(files.length === 0)) {
              _context9.n = 3;
              break;
            }
            return _context9.a(2);
          case 3:
            // 先显示 uploading 状态
            placeholders = files.map(function (f) {
              return {
                name: f.name,
                type: f.type,
                size: f.size,
                uploading: true,
                url: URL.createObjectURL(f)
              };
            });
            setPendingAttachments(function (prev) {
              return [].concat(_toConsumableArray(prev), _toConsumableArray(placeholders));
            });

            // 并行上传
            _loop = /*#__PURE__*/_regenerator().m(function _loop(i) {
              var result, _t7;
              return _regenerator().w(function (_context8) {
                while (1) switch (_context8.p = _context8.n) {
                  case 0:
                    _context8.p = 0;
                    _context8.n = 1;
                    return uploadFile(files[i]);
                  case 1:
                    result = _context8.v;
                    setPendingAttachments(function (prev) {
                      var next = _toConsumableArray(prev);
                      var idx = next.findIndex(function (a) {
                        return a.name === files[i].name && a.uploading;
                      });
                      if (idx >= 0) next[idx] = result;
                      return next;
                    });
                    toast("\u2713 ".concat(files[i].name, " \u4E0A\u4F20\u5B8C\u6210"));
                    _context8.n = 3;
                    break;
                  case 2:
                    _context8.p = 2;
                    _t7 = _context8.v;
                    setPendingAttachments(function (prev) {
                      return prev.filter(function (a) {
                        return !(a.name === files[i].name && a.uploading);
                      });
                    });
                    toast("\u274C ".concat(files[i].name, " \u4E0A\u4F20\u5931\u8D25: ").concat(_t7.message));
                  case 3:
                    return _context8.a(2);
                }
              }, _loop, null, [[0, 2]]);
            });
            i = 0;
          case 4:
            if (!(i < files.length)) {
              _context9.n = 6;
              break;
            }
            return _context9.d(_regeneratorValues(_loop(i)), 5);
          case 5:
            i++;
            _context9.n = 4;
            break;
          case 6:
            return _context9.a(2);
        }
      }, _callee8);
    }));
    return function handleFiles(_x2) {
      return _ref10.apply(this, arguments);
    };
  }();

  // 粘贴板事件
  var handlePaste = function handlePaste(e) {
    var _e$clipboardData;
    var items = ((_e$clipboardData = e.clipboardData) === null || _e$clipboardData === void 0 ? void 0 : _e$clipboardData.items) || [];
    var files = [];
    var _iterator = _createForOfIteratorHelper(items),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        if (item.kind === 'file') {
          var f = item.getAsFile();
          if (f) files.push(f);
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (files.length > 0) {
      e.preventDefault();
      handleFiles(files);
    }
  };
  var submitPayment = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var carrier, row, _yield$CLOUD$client$f5, error, _yield$CLOUD$client$f6, _error, msg, _t8;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            if (newPayment.carrier_id) {
              _context0.n = 1;
              break;
            }
            toast('⚠ 请选择快递公司');
            return _context0.a(2);
          case 1:
            if (!(!newPayment.amount || parseFloat(newPayment.amount) <= 0)) {
              _context0.n = 2;
              break;
            }
            toast('⚠ 请填写有效金额');
            return _context0.a(2);
          case 2:
            carrier = carriers.find(function (c) {
              return c.id === parseInt(newPayment.carrier_id);
            });
            if (carrier) {
              _context0.n = 3;
              break;
            }
            toast('⚠ 快递公司不存在');
            return _context0.a(2);
          case 3:
            if (!pendingAttachments.some(function (a) {
              return a.uploading;
            })) {
              _context0.n = 4;
              break;
            }
            toast('⚠ 还有附件正在上传，请稍等');
            return _context0.a(2);
          case 4:
            row = {
              carrier_id: carrier.id,
              carrier_name: carrier.name,
              category: newPayment.category,
              amount: parseFloat(newPayment.amount),
              currency: newPayment.currency,
              payment_method: newPayment.payment_method,
              payment_date: newPayment.payment_date,
              invoice_no: newPayment.invoice_no || null,
              shipment_ref: newPayment.shipment_ref || null,
              paid_by: user.name + (user.alias ? ' ' + user.alias : ''),
              notes: newPayment.notes || null,
              attachments: pendingAttachments.map(function (a) {
                return {
                  name: a.name,
                  type: a.type,
                  size: a.size,
                  path: a.path,
                  url: a.url
                };
              }),
              updated_at: new Date().toISOString()
            };
            _context0.p = 5;
            if (!editingPaymentId) {
              _context0.n = 8;
              break;
            }
            _context0.n = 6;
            return CLOUD.client.from('freight_payments').update(row).eq('id', editingPaymentId);
          case 6:
            _yield$CLOUD$client$f5 = _context0.v;
            error = _yield$CLOUD$client$f5.error;
            if (!error) {
              _context0.n = 7;
              break;
            }
            throw error;
          case 7:
            toast('✓ 已更新支付记录');
            _context0.n = 11;
            break;
          case 8:
            _context0.n = 9;
            return CLOUD.client.from('freight_payments').insert(row);
          case 9:
            _yield$CLOUD$client$f6 = _context0.v;
            _error = _yield$CLOUD$client$f6.error;
            if (!_error) {
              _context0.n = 10;
              break;
            }
            throw _error;
          case 10:
            toast("\u2713 \u5DF2\u5F55\u5165\u652F\u4ED8\u8BB0\u5F55".concat(pendingAttachments.length > 0 ? ' (含 ' + pendingAttachments.length + ' 个凭证)' : ''));
          case 11:
            setNewPayment({
              carrier_id: '',
              category: 'express',
              amount: '',
              currency: 'CNY',
              payment_method: 'bank',
              payment_date: new Date().toISOString().slice(0, 10),
              invoice_no: '',
              shipment_ref: '',
              notes: ''
            });
            setPendingAttachments([]);
            setEditingPaymentId(null);
            loadAll();
            _context0.n = 13;
            break;
          case 12:
            _context0.p = 12;
            _t8 = _context0.v;
            msg = _t8.message || '';
            if (msg.includes('schema cache') || msg.includes('does not exist') || msg.includes('PGRST')) {
              toast('⚠ 运费表还没建好', 'error');
              alert('❌ 保存失败：运费表还没在 Supabase 建好。\n\n请联系管理员（Nicole）：\n1. 打开 Supabase → SQL Editor\n2. 粘贴 freight_all_in_one.sql\n3. 点 ▶ Run\n4. 跑完后刷新此页面再试\n\n详细错误：' + msg);
            } else {
              toast('❌ 保存失败: ' + msg);
            }
          case 13:
            return _context0.a(2);
        }
      }, _callee9, null, [[5, 12]]);
    }));
    return function submitPayment() {
      return _ref11.apply(this, arguments);
    };
  }();
  var editPayment = function editPayment(p) {
    var _document$querySelect;
    setEditingPaymentId(p.id);
    setNewPayment({
      carrier_id: String(p.carrier_id || ''),
      category: p.category,
      amount: String(p.amount),
      currency: p.currency,
      payment_method: p.payment_method,
      payment_date: p.payment_date,
      invoice_no: p.invoice_no || '',
      shipment_ref: p.shipment_ref || '',
      notes: p.notes || ''
    });
    setPendingAttachments(p.attachments || []); // 恢复已上传的附件
    (_document$querySelect = document.querySelector('#freight-form-anchor')) === null || _document$querySelect === void 0 || _document$querySelect.scrollIntoView({
      behavior: 'smooth'
    });
  };
  var deletePayment = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(p) {
      var _yield$CLOUD$client$f7, error, _t9;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            if (confirm("\u786E\u8BA4\u5220\u9664\u8FD9\u7B14 ".concat(p.carrier_name, " ").concat(p.currency, " ").concat(p.amount, " \u7684\u652F\u4ED8\u8BB0\u5F55\uFF1F"))) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2);
          case 1:
            _context1.p = 1;
            _context1.n = 2;
            return CLOUD.client.from('freight_payments').update({
              trashed: true
            }).eq('id', p.id);
          case 2:
            _yield$CLOUD$client$f7 = _context1.v;
            error = _yield$CLOUD$client$f7.error;
            if (!error) {
              _context1.n = 3;
              break;
            }
            throw error;
          case 3:
            toast('✓ 已删除');
            loadAll();
            _context1.n = 5;
            break;
          case 4:
            _context1.p = 4;
            _t9 = _context1.v;
            toast('❌ 删除失败: ' + _t9.message);
          case 5:
            return _context1.a(2);
        }
      }, _callee0, null, [[1, 4]]);
    }));
    return function deletePayment(_x3) {
      return _ref12.apply(this, arguments);
    };
  }();
  var _useState49 = useState({
      name: '',
      category: 'express',
      bank_name: '',
      bank_account: '',
      beneficiary: '',
      alipay: '',
      wechat: '',
      paypal: '',
      pcard: '',
      contact_person: '',
      contact_phone: '',
      notes: ''
    }),
    _useState50 = _slicedToArray(_useState49, 2),
    newCarrier = _useState50[0],
    setNewCarrier = _useState50[1];
  var _useState51 = useState(null),
    _useState52 = _slicedToArray(_useState51, 2),
    editingCarrierId = _useState52[0],
    setEditingCarrierId = _useState52[1];
  var submitCarrier = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
      var row, _yield$CLOUD$client$f8, error, _yield$CLOUD$client$f9, _error2, msg, _t0;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            if (newCarrier.name.trim()) {
              _context10.n = 1;
              break;
            }
            toast('⚠ 请填写公司名');
            return _context10.a(2);
          case 1:
            _context10.p = 1;
            row = _objectSpread(_objectSpread({}, newCarrier), {}, {
              name: newCarrier.name.trim(),
              updated_at: new Date().toISOString()
            });
            if (!editingCarrierId) {
              _context10.n = 4;
              break;
            }
            _context10.n = 2;
            return CLOUD.client.from('freight_carriers').update(row).eq('id', editingCarrierId);
          case 2:
            _yield$CLOUD$client$f8 = _context10.v;
            error = _yield$CLOUD$client$f8.error;
            if (!error) {
              _context10.n = 3;
              break;
            }
            throw error;
          case 3:
            toast('✓ 已更新');
            _context10.n = 7;
            break;
          case 4:
            _context10.n = 5;
            return CLOUD.client.from('freight_carriers').insert(row);
          case 5:
            _yield$CLOUD$client$f9 = _context10.v;
            _error2 = _yield$CLOUD$client$f9.error;
            if (!_error2) {
              _context10.n = 6;
              break;
            }
            throw _error2;
          case 6:
            toast('✓ 已添加 ' + newCarrier.name);
          case 7:
            setNewCarrier({
              name: '',
              category: 'express',
              bank_name: '',
              bank_account: '',
              beneficiary: '',
              alipay: '',
              wechat: '',
              paypal: '',
              pcard: '',
              contact_person: '',
              contact_phone: '',
              notes: ''
            });
            setEditingCarrierId(null);
            loadAll();
            _context10.n = 9;
            break;
          case 8:
            _context10.p = 8;
            _t0 = _context10.v;
            msg = _t0.message || '';
            if (msg.includes('schema cache') || msg.includes('does not exist') || msg.includes('PGRST')) {
              toast('⚠ 运费表还没建好，请先在 Supabase 跑 freight_all_in_one.sql', 'error');
              alert('❌ 保存失败：运费表还没在 Supabase 建好。\n\n请联系管理员（Nicole）：\n1. 打开 Supabase → SQL Editor\n2. 粘贴 freight_all_in_one.sql 内容\n3. 点 ▶ Run\n4. 跑完后刷新此页面再试\n\n详细错误：' + msg);
            } else {
              toast('❌ 保存失败: ' + msg);
            }
          case 9:
            return _context10.a(2);
        }
      }, _callee1, null, [[1, 8]]);
    }));
    return function submitCarrier() {
      return _ref13.apply(this, arguments);
    };
  }();
  var editCarrier = function editCarrier(c) {
    var _document$querySelect2;
    setEditingCarrierId(c.id);
    setNewCarrier(_objectSpread({}, c));
    (_document$querySelect2 = document.querySelector('#carrier-form-anchor')) === null || _document$querySelect2 === void 0 || _document$querySelect2.scrollIntoView({
      behavior: 'smooth'
    });
  };
  var deleteCarrier = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(c) {
      var _yield$CLOUD$client$f0, error, _t1;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            if (confirm("\u786E\u8BA4\u5220\u9664\u5FEB\u9012\u516C\u53F8\u300C".concat(c.name, "\u300D\uFF1F\n\u5386\u53F2\u652F\u4ED8\u8BB0\u5F55\u7684 carrier_name \u4F1A\u4FDD\u7559\u3002"))) {
              _context11.n = 1;
              break;
            }
            return _context11.a(2);
          case 1:
            _context11.p = 1;
            _context11.n = 2;
            return CLOUD.client.from('freight_carriers')["delete"]().eq('id', c.id);
          case 2:
            _yield$CLOUD$client$f0 = _context11.v;
            error = _yield$CLOUD$client$f0.error;
            if (!error) {
              _context11.n = 3;
              break;
            }
            throw error;
          case 3:
            toast('✓ 已删除');
            loadAll();
            _context11.n = 5;
            break;
          case 4:
            _context11.p = 4;
            _t1 = _context11.v;
            toast('❌ 删除失败: ' + _t1.message);
          case 5:
            return _context11.a(2);
        }
      }, _callee10, null, [[1, 4]]);
    }));
    return function deleteCarrier(_x4) {
      return _ref14.apply(this, arguments);
    };
  }();
  var filteredPayments = useMemo(function () {
    return payments.filter(function (p) {
      if (filterMonth && !String(p.payment_date).startsWith(filterMonth)) return false;
      if (filterCarrier && p.carrier_name !== filterCarrier) return false;
      if (filterCategory && p.category !== filterCategory) return false;
      if (filterMethod && p.payment_method !== filterMethod) return false;
      return true;
    });
  }, [payments, filterMonth, filterCarrier, filterCategory, filterMethod]);
  var summary = useMemo(function () {
    var cur = filteredPayments;
    var totalCNY = cur.filter(function (p) {
      return p.currency === 'CNY';
    }).reduce(function (s, p) {
      return s + Number(p.amount);
    }, 0);
    var totalUSD = cur.filter(function (p) {
      return p.currency === 'USD';
    }).reduce(function (s, p) {
      return s + Number(p.amount);
    }, 0);
    var byCarrier = {};
    var byCategory = {
      express: 0,
      air: 0,
      sea: 0,
      postal: 0
    };
    var byMethod = {};
    cur.forEach(function (p) {
      var amt = Number(p.amount);
      byCarrier[p.carrier_name] = (byCarrier[p.carrier_name] || 0) + amt;
      byCategory[p.category] = (byCategory[p.category] || 0) + amt;
      byMethod[p.payment_method] = (byMethod[p.payment_method] || 0) + amt;
    });
    return {
      totalCNY: totalCNY,
      totalUSD: totalUSD,
      byCarrier: byCarrier,
      byCategory: byCategory,
      byMethod: byMethod,
      count: cur.length
    };
  }, [filteredPayments]);
  var carrierNames = useMemo(function () {
    return _toConsumableArray(new Set(payments.map(function (p) {
      return p.carrier_name;
    }))).sort();
  }, [payments]);

  // 凭证查看 modal
  var _useState53 = useState(null),
    _useState54 = _slicedToArray(_useState53, 2),
    viewingAttachments = _useState54[0],
    setViewingAttachments = _useState54[1];

  // 📥 导出 PDF（用 window.print）
  var exportPDF = function exportPDF() {
    var _CATEGORIES$find2, _PAYMENT_METHODS$find2;
    var win = window.open('', '_blank');
    if (!win) {
      toast('⚠ 浏览器拦截了弹窗，请允许');
      return;
    }
    var monthLabel = filterMonth || '全部时间';
    var carrierLabel = filterCarrier || '全部';
    var categoryLabel2 = filterCategory ? (_CATEGORIES$find2 = CATEGORIES.find(function (c) {
      return c.v === filterCategory;
    })) === null || _CATEGORIES$find2 === void 0 ? void 0 : _CATEGORIES$find2.label : '全部';
    var methodLabel2 = filterMethod ? (_PAYMENT_METHODS$find2 = PAYMENT_METHODS.find(function (m) {
      return m.v === filterMethod;
    })) === null || _PAYMENT_METHODS$find2 === void 0 ? void 0 : _PAYMENT_METHODS$find2.label : '全部';
    var rows = filteredPayments.map(function (p) {
      var _p$attachments;
      return "\n      <tr>\n        <td>".concat(p.payment_date, "</td>\n        <td><strong>").concat(p.carrier_name, "</strong></td>\n        <td>").concat(categoryLabel(p.category), "</td>\n        <td style=\"text-align:right;font-family:monospace;color:#0071e3;font-weight:500;\">").concat(p.currency === 'USD' ? '$' : '¥', " ").concat(Number(p.amount).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }), "</td>\n        <td>").concat(methodLabel(p.payment_method), "</td>\n        <td style=\"font-size:11px;font-family:monospace;\">").concat(p.invoice_no || '-', "</td>\n        <td style=\"font-size:11px;font-family:monospace;\">").concat(p.shipment_ref || '-', "</td>\n        <td style=\"font-size:11px;color:#666;\">").concat(p.paid_by, "</td>\n        <td style=\"font-size:10px;color:#888;\">").concat(p.notes ? p.notes.replace(/</g, '&lt;') : '-', "</td>\n        <td style=\"text-align:center;\">").concat((((_p$attachments = p.attachments) === null || _p$attachments === void 0 ? void 0 : _p$attachments.length) || 0) > 0 ? '📎 ' + p.attachments.length : '-', "</td>\n      </tr>\n    ");
    }).join('');

    // 按公司汇总
    var byCarrier = Object.entries(summary.byCarrier).sort(function (a, b) {
      return b[1] - a[1];
    });
    var carrierRows = byCarrier.map(function (_ref15) {
      var _ref16 = _slicedToArray(_ref15, 2),
        n = _ref16[0],
        a = _ref16[1];
      var pct = summary.totalCNY > 0 ? a / summary.totalCNY * 100 : 0;
      return "<tr><td><strong>".concat(n, "</strong></td><td style=\"text-align:right;font-family:monospace;color:#0071e3;\">\xA5 ").concat(a.toFixed(2), "</td><td style=\"text-align:right;\">").concat(pct.toFixed(1), "%</td></tr>");
    }).join('');
    var categoryRows = CATEGORIES.map(function (c) {
      var a = summary.byCategory[c.v] || 0;
      var pct = summary.totalCNY > 0 ? a / summary.totalCNY * 100 : 0;
      return "<tr><td>".concat(c.label, "</td><td style=\"text-align:right;font-family:monospace;\">\xA5 ").concat(a.toFixed(2), "</td><td style=\"text-align:right;\">").concat(pct.toFixed(1), "%</td></tr>");
    }).join('');
    var methodRows = Object.entries(summary.byMethod).sort(function (a, b) {
      return b[1] - a[1];
    }).map(function (_ref17) {
      var _ref18 = _slicedToArray(_ref17, 2),
        m = _ref18[0],
        a = _ref18[1];
      var pct = summary.totalCNY > 0 ? a / summary.totalCNY * 100 : 0;
      return "<tr><td>".concat(methodLabel(m), "</td><td style=\"text-align:right;font-family:monospace;\">\xA5 ").concat(a.toFixed(2), "</td><td style=\"text-align:right;\">").concat(pct.toFixed(1), "%</td></tr>");
    }).join('');
    win.document.write("<!doctype html>\n<html lang=\"zh-CN\"><head><meta charset=\"utf-8\"><title>\u8FD0\u8D39\u652F\u4ED8\u62A5\u8868 ".concat(monthLabel, "</title>\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600;700&display=swap\" rel=\"stylesheet\">\n<style>\n  * { margin:0; padding:0; box-sizing:border-box; }\n  body { font-family: \"Noto Sans SC\", -apple-system, BlinkMacSystemFont, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans CN\", \"Noto Sans CJK SC\", \"WenQuanYi Micro Hei\", \"Heiti SC\", SimHei, sans-serif; color:#1d1d1f; padding:30px; font-size:13px; line-height:1.5; -webkit-print-color-adjust: exact; print-color-adjust: exact; }\n  .header { border-bottom: 2px solid #0071e3; padding-bottom:12px; margin-bottom:20px; }\n  .header h1 { font-size:24px; font-weight:600; letter-spacing:-.5px; }\n  .header .meta { color:#666; font-size:12px; margin-top:6px; }\n  .filters { background:#f5f5f7; padding:10px 14px; border-radius:8px; margin-bottom:20px; font-size:12px; color:#555; }\n  .filters span { margin-right:18px; }\n  .summary { display:grid; grid-template-columns: repeat(3, 1fr); gap:14px; margin-bottom:24px; }\n  .summary-card { background:linear-gradient(135deg,#e8f1fd,#e8f7ec); padding:16px; border-radius:10px; }\n  .summary-card .label { font-size:10px; text-transform:uppercase; letter-spacing:1px; color:#666; }\n  .summary-card .value { font-size:24px; font-weight:600; color:#0071e3; margin-top:4px; }\n  h2 { font-size:15px; margin: 22px 0 10px; padding-bottom:6px; border-bottom:1px solid #e8e6e0; }\n  table { width:100%; border-collapse:collapse; font-size:11px; }\n  th { background:#f5f5f7; padding:7px 8px; text-align:left; font-weight:600; color:#555; border-bottom:1px solid #e8e6e0; }\n  td { padding:7px 8px; border-bottom:1px solid #f0eee8; }\n  .footer { margin-top:30px; padding-top:14px; border-top:1px solid #e8e6e0; font-size:10px; color:#999; text-align:center; }\n  .row-2col { display:grid; grid-template-columns: 1fr 1fr; gap:20px; }\n  @media print { body { padding:15px; } .summary { gap:10px; } }\n</style></head><body>\n\n<div class=\"header\">\n  <h1>\uD83D\uDCCA \u8FD0\u8D39\u652F\u4ED8\u62A5\u8868</h1>\n  <div class=\"meta\">\n    \u7EDF\u8BA1\u5468\u671F\uFF1A<strong>").concat(monthLabel, "</strong> \xB7 \n    \u5BFC\u51FA\u65F6\u95F4\uFF1A").concat(new Date().toLocaleString('zh-CN'), " \xB7 \n    \u64CD\u4F5C\u4EBA\uFF1A").concat(user.name).concat(user.alias ? ' ' + user.alias : '', "\n  </div>\n</div>\n\n<div class=\"filters\">\n  <strong>\u7B5B\u9009\u6761\u4EF6\uFF1A</strong>\n  <span>\uD83D\uDCC5 ").concat(monthLabel, "</span>\n  <span>\uD83D\uDE9B \u5FEB\u9012\u516C\u53F8: ").concat(carrierLabel, "</span>\n  <span>\uD83D\uDCE6 \u8FD0\u8F93\u65B9\u5F0F: ").concat(categoryLabel2, "</span>\n  <span>\uD83D\uDCB3 \u652F\u4ED8\u65B9\u5F0F: ").concat(methodLabel2, "</span>\n</div>\n\n<div class=\"summary\">\n  <div class=\"summary-card\">\n    <div class=\"label\">\u603B\u652F\u51FA CNY</div>\n    <div class=\"value\">\xA5 ").concat(summary.totalCNY.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }), "</div>\n  </div>\n  ").concat(summary.totalUSD > 0 ? "<div class=\"summary-card\">\n    <div class=\"label\">\u603B\u652F\u51FA USD</div>\n    <div class=\"value\">$ ".concat(summary.totalUSD.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }), "</div>\n  </div>") : '', "\n  <div class=\"summary-card\">\n    <div class=\"label\">\u652F\u4ED8\u7B14\u6570</div>\n    <div class=\"value\">").concat(summary.count, "</div>\n  </div>\n</div>\n\n<div class=\"row-2col\">\n  <div>\n    <h2>\uD83D\uDCCA \u6309\u5FEB\u9012\u516C\u53F8</h2>\n    <table>\n      <thead><tr><th>\u516C\u53F8\u540D</th><th style=\"text-align:right;\">\u91D1\u989D</th><th style=\"text-align:right;width:60px;\">\u5360\u6BD4</th></tr></thead>\n      <tbody>").concat(carrierRows || '<tr><td colspan=3 style="text-align:center;color:#999;padding:20px;">暂无数据</td></tr>', "</tbody>\n    </table>\n  </div>\n  <div>\n    <h2>\uD83D\uDE9A \u6309\u8FD0\u8F93\u65B9\u5F0F</h2>\n    <table>\n      <thead><tr><th>\u7C7B\u522B</th><th style=\"text-align:right;\">\u91D1\u989D</th><th style=\"text-align:right;width:60px;\">\u5360\u6BD4</th></tr></thead>\n      <tbody>").concat(categoryRows, "</tbody>\n    </table>\n  </div>\n</div>\n\n<h2>\uD83D\uDCB3 \u6309\u652F\u4ED8\u65B9\u5F0F</h2>\n<table>\n  <thead><tr><th>\u65B9\u5F0F</th><th style=\"text-align:right;\">\u91D1\u989D</th><th style=\"text-align:right;width:60px;\">\u5360\u6BD4</th></tr></thead>\n  <tbody>").concat(methodRows || '<tr><td colspan=3 style="text-align:center;color:#999;padding:20px;">暂无数据</td></tr>', "</tbody>\n</table>\n\n<h2>\uD83D\uDCB8 \u652F\u4ED8\u660E\u7EC6\uFF08").concat(filteredPayments.length, " \u7B14\uFF09</h2>\n<table>\n  <thead><tr>\n    <th>\u65E5\u671F</th><th>\u5FEB\u9012\u516C\u53F8</th><th>\u8FD0\u8F93</th><th style=\"text-align:right;\">\u91D1\u989D</th>\n    <th>\u652F\u4ED8\u65B9\u5F0F</th><th>\u8D26\u5355\u53F7</th><th>\u8BA2\u5355</th><th>\u64CD\u4F5C\u4EBA</th><th>\u5907\u6CE8</th><th>\u51ED\u8BC1</th>\n  </tr></thead>\n  <tbody>").concat(rows || '<tr><td colspan=10 style="text-align:center;color:#999;padding:20px;">暂无支付记录</td></tr>', "</tbody>\n</table>\n\n<div class=\"footer\">\n  \u672C\u62A5\u8868\u7531 <strong>\u7EDF\u4E00\u5DE5\u4F5C\u53F0 \xB7 \u8FD0\u8D39\u652F\u4ED8\u7BA1\u7406</strong> \u81EA\u52A8\u751F\u6210 \xB7 \u6570\u636E\u6765\u6E90 Supabase \u56E2\u961F\u4E91\n</div>\n\n<scr") + "ipt>\n  window.onload = () => {\n    const fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();\n    fontsReady.then(() => setTimeout(() => window.print(), 400));\n  };\n</scr" + "ipt>\n\n</body></html>");
    win.document.close();
    toast('✓ PDF 报表已生成，请在新窗口选择"另存为 PDF"');
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-5 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap mb-3"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(section === 'payments' ? 'active' : ''),
    onClick: function onClick() {
      return setSection('payments');
    }
  }, "\uD83D\uDCB8 \u652F\u4ED8\u8BB0\u5F55 (", payments.length, ")"), /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(section === 'carriers' ? 'active' : ''),
    onClick: function onClick() {
      return setSection('carriers');
    }
  }, "\uD83D\uDE9B \u5FEB\u9012\u516C\u53F8 (", carriers.length, ")"), /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(section === 'summary' ? 'active' : ''),
    onClick: function onClick() {
      return setSection('summary');
    }
  }, "\uD83D\uDCCA \u7EDF\u8BA1\u6C47\u603B"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: loadAll,
    disabled: loading
  }, loading ? '⏳ 加载中…' : '🔄 刷新')), !cloudOn && /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3 text-xs",
    style: {
      background: '#fef3c7',
      color: '#92400e',
      lineHeight: 1.65
    }
  }, "\u26A0 \u6B64\u6A21\u5757\u9700\u8981\u4E91\u540C\u6B65\u3002\u8BF7\u5230 ", /*#__PURE__*/React.createElement("strong", null, "\u8BBE\u7F6E \u2192 \u4E91\u540C\u6B65\u8BBE\u7F6E"), " \u542F\u7528 Supabase \u540C\u6B65\u3002")), section === 'payments' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-6",
    id: "freight-form-anchor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '-.022em',
      marginBottom: 14
    }
  }, editingPaymentId ? '✏️ 编辑支付记录' : '➕ 录入新的支付'), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-4 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u652F\u4ED8\u65E5\u671F *"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: newPayment.payment_date,
    onChange: function onChange(e) {
      return setNewPayment(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          payment_date: e.target.value
        });
      });
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u5FEB\u9012\u516C\u53F8 *"), /*#__PURE__*/React.createElement("select", {
    value: newPayment.carrier_id,
    onChange: function onChange(e) {
      return setNewPayment(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          carrier_id: e.target.value
        });
      });
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "-- \u9009\u62E9 --"), carriers.filter(function (c) {
    return c.active !== false;
  }).map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.id,
      value: c.id
    }, c.name);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u8FD0\u8F93\u65B9\u5F0F *"), /*#__PURE__*/React.createElement("select", {
    value: newPayment.category,
    onChange: function onChange(e) {
      return setNewPayment(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          category: e.target.value
        });
      });
    }
  }, CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.v,
      value: c.v
    }, c.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u652F\u4ED8\u65B9\u5F0F *"), /*#__PURE__*/React.createElement("select", {
    value: newPayment.payment_method,
    onChange: function onChange(e) {
      return setNewPayment(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          payment_method: e.target.value
        });
      });
    }
  }, PAYMENT_METHODS.map(function (m) {
    return /*#__PURE__*/React.createElement("option", {
      key: m.v,
      value: m.v
    }, m.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u91D1\u989D *"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    value: newPayment.amount,
    onChange: function onChange(e) {
      return setNewPayment(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          amount: e.target.value
        });
      });
    },
    placeholder: "0.00",
    autoComplete: "off"
  }), /*#__PURE__*/React.createElement("select", {
    value: newPayment.currency,
    onChange: function onChange(e) {
      return setNewPayment(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          currency: e.target.value
        });
      });
    },
    style: {
      width: 90,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "CNY"
  }, "CNY \xA5"), /*#__PURE__*/React.createElement("option", {
    value: "USD"
  }, "USD $")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u8D26\u5355/\u53D1\u7968\u53F7"), /*#__PURE__*/React.createElement("input", {
    value: newPayment.invoice_no,
    onChange: function onChange(e) {
      return setNewPayment(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          invoice_no: e.target.value
        });
      });
    },
    placeholder: "INV-2025-001",
    autoComplete: "off"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u5173\u8054\u8BA2\u5355/\u6279\u6B21"), /*#__PURE__*/React.createElement("input", {
    value: newPayment.shipment_ref,
    onChange: function onChange(e) {
      return setNewPayment(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          shipment_ref: e.target.value
        });
      });
    },
    placeholder: "PO-1234 / \u6279\u6B212",
    autoComplete: "off"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u64CD\u4F5C\u4EBA"), /*#__PURE__*/React.createElement("input", {
    value: user.name + (user.alias ? ' ' + user.alias : ''),
    disabled: true,
    style: {
      background: 'var(--bg-elevated)',
      color: 'var(--ink-3)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u5907\u6CE8"), /*#__PURE__*/React.createElement("textarea", {
    value: newPayment.notes,
    onChange: function onChange(e) {
      return setNewPayment(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          notes: e.target.value
        });
      });
    },
    placeholder: "\u53EF\u9009",
    rows: 2,
    style: {
      width: '100%',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\uD83D\uDCCE \u4ED8\u6B3E\u51ED\u8BC1 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400,
      marginLeft: 6
    }
  }, "\u652F\u6301\u56FE\u7247/PDF \xB7 \u62D6\u62FD / Ctrl+V \u7C98\u8D34 / \u70B9\u51FB\u4E0A\u4F20")), /*#__PURE__*/React.createElement("div", {
    ref: dropZoneRef,
    onPaste: handlePaste,
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.background = 'var(--accent-soft)';
    },
    onDragLeave: function onDragLeave(e) {
      e.currentTarget.style.borderColor = 'var(--line-strong)';
      e.currentTarget.style.background = 'var(--bg-soft)';
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      e.currentTarget.style.borderColor = 'var(--line-strong)';
      e.currentTarget.style.background = 'var(--bg-soft)';
      handleFiles(e.dataTransfer.files);
    },
    onClick: function onClick() {
      var _fileInputRef$current;
      return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
    },
    tabIndex: 0,
    style: {
      border: '2px dashed var(--line-strong)',
      borderRadius: 'var(--radius)',
      padding: '20px',
      background: 'var(--bg-soft)',
      cursor: 'pointer',
      transition: 'all .15s',
      outline: 'none'
    }
  }, pendingAttachments.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, "\uD83D\uDCE4 \u62D6\u62FD\u6587\u4EF6\u5230\u6B64\u5904", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-4)'
    }
  }, "\u6216\u6309 Ctrl+V \u7C98\u8D34\u622A\u56FE \xB7 \u6216\u70B9\u51FB\u9009\u62E9\u6587\u4EF6")) : /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-4 gap-2"
  }, pendingAttachments.map(function (att, i) {
    var _att$type;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'relative',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        background: 'white',
        border: '1px solid var(--line)'
      }
    }, att.url && (_att$type = att.type) !== null && _att$type !== void 0 && _att$type.startsWith('image/') ? /*#__PURE__*/React.createElement("img", {
      src: att.url,
      alt: att.name,
      style: {
        width: '100%',
        height: 80,
        objectFit: 'contain',
        display: 'block',
        background: 'var(--bg-elevated)'
      }
    }) : att.url && att.type === 'application/pdf' ? /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 20,
        textAlign: 'center',
        background: '#fef0f0',
        color: '#dc2626',
        fontSize: 30
      }
    }, "\uD83D\uDCC4") : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 20,
        textAlign: 'center',
        background: '#f5f5f7',
        color: 'var(--ink-3)',
        fontSize: 24
      }
    }, att.uploading ? '⏳' : '📄'), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 6px',
        fontSize: 10,
        color: 'var(--ink-3)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center'
      }
    }, att.uploading ? '上传中...' : att.name), !att.uploading && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        setPendingAttachments(function (prev) {
          return prev.filter(function (_, j) {
            return j !== i;
          });
        });
      },
      style: {
        position: 'absolute',
        top: 2,
        right: 2,
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: 'rgba(0,0,0,.6)',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: 10,
        lineHeight: 1,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      title: "\u79FB\u9664"
    }, "\xD7"));
  }), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      var _fileInputRef$current2;
      e.stopPropagation();
      (_fileInputRef$current2 = fileInputRef.current) === null || _fileInputRef$current2 === void 0 || _fileInputRef$current2.click();
    },
    style: {
      minHeight: 100,
      border: '1.5px dashed var(--line-strong)',
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--ink-3)',
      fontSize: 11,
      cursor: 'pointer'
    }
  }, "+ \u6DFB\u52A0\u66F4\u591A")), /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    multiple: true,
    accept: "image/*,application/pdf",
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      return handleFiles(e.target.files);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: submitPayment
  }, editingPaymentId ? '💾 更新记录' : '✓ 录入支付'), editingPaymentId && /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: function onClick() {
      setEditingPaymentId(null);
      setNewPayment({
        carrier_id: '',
        category: 'express',
        amount: '',
        currency: 'CNY',
        payment_method: 'bank',
        payment_date: new Date().toISOString().slice(0, 10),
        invoice_no: '',
        shipment_ref: '',
        notes: ''
      });
      setPendingAttachments([]);
    }
  }, "\u53D6\u6D88\u7F16\u8F91"))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-end gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u6708\u4EFD"), /*#__PURE__*/React.createElement("input", {
    type: "month",
    value: filterMonth,
    onChange: function onChange(e) {
      return setFilterMonth(e.target.value);
    },
    style: {
      width: 160
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u5FEB\u9012\u516C\u53F8"), /*#__PURE__*/React.createElement("select", {
    value: filterCarrier,
    onChange: function onChange(e) {
      return setFilterCarrier(e.target.value);
    },
    style: {
      width: 140
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u5168\u90E8"), carrierNames.map(function (n) {
    return /*#__PURE__*/React.createElement("option", {
      key: n,
      value: n
    }, n);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u8FD0\u8F93\u65B9\u5F0F"), /*#__PURE__*/React.createElement("select", {
    value: filterCategory,
    onChange: function onChange(e) {
      return setFilterCategory(e.target.value);
    },
    style: {
      width: 120
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u5168\u90E8"), CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.v,
      value: c.v
    }, c.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u652F\u4ED8\u65B9\u5F0F"), /*#__PURE__*/React.createElement("select", {
    value: filterMethod,
    onChange: function onChange(e) {
      return setFilterMethod(e.target.value);
    },
    style: {
      width: 140
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u5168\u90E8"), PAYMENT_METHODS.map(function (m) {
    return /*#__PURE__*/React.createElement("option", {
      key: m.v,
      value: m.v
    }, m.label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: function onClick() {
      setFilterMonth('');
      setFilterCarrier('');
      setFilterCategory('');
      setFilterMethod('');
    }
  }, "\u6E05\u9664\u7B5B\u9009"))), filteredPayments.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-5",
    style: {
      background: 'linear-gradient(135deg, rgba(0,113,227,.06), rgba(52,199,89,.06))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-baseline gap-6"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.05em'
    }
  }, filterMonth || '全部', " \u603B\u652F\u51FA"), /*#__PURE__*/React.createElement("div", {
    className: "font-display tabular-nums",
    style: {
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--accent)',
      letterSpacing: '-.022em'
    }
  }, "\xA5 ", summary.totalCNY.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }), summary.totalUSD > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ink-3)',
      marginLeft: 10
    }
  }, "+ $ ", summary.totalUSD.toFixed(2)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.05em'
    }
  }, "\u7B14\u6570"), /*#__PURE__*/React.createElement("div", {
    className: "font-display tabular-nums",
    style: {
      fontSize: 24,
      fontWeight: 500,
      color: 'var(--ink)'
    }
  }, summary.count)))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 90
    }
  }, "\u65E5\u671F"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 90
    }
  }, "\u5FEB\u9012\u516C\u53F8"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 80
    }
  }, "\u65B9\u5F0F"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 110,
      textAlign: 'right'
    }
  }, "\u91D1\u989D"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 90
    }
  }, "\u652F\u4ED8"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 60,
      textAlign: 'center'
    }
  }, "\u51ED\u8BC1"), /*#__PURE__*/React.createElement("th", null, "\u8D26\u5355\u53F7"), /*#__PURE__*/React.createElement("th", null, "\u8BA2\u5355/\u6279\u6B21"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 90
    }
  }, "\u64CD\u4F5C\u4EBA"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 90
    }
  }, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, filteredPayments.map(function (p) {
    var _p$attachments2;
    return /*#__PURE__*/React.createElement("tr", {
      key: p.id,
      className: "row-hover"
    }, /*#__PURE__*/React.createElement("td", {
      className: "font-mono tabular-nums"
    }, p.payment_date), /*#__PURE__*/React.createElement("td", {
      style: {
        fontWeight: 500
      }
    }, p.carrier_name), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "tag tag-info"
    }, categoryLabel(p.category))), /*#__PURE__*/React.createElement("td", {
      className: "font-mono tabular-nums",
      style: {
        textAlign: 'right',
        fontWeight: 500,
        color: 'var(--accent)'
      }
    }, p.currency === 'USD' ? '$' : '¥', " ", Number(p.amount).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12
      }
    }, methodLabel(p.payment_method)), /*#__PURE__*/React.createElement("td", {
      style: {
        textAlign: 'center'
      }
    }, (((_p$attachments2 = p.attachments) === null || _p$attachments2 === void 0 ? void 0 : _p$attachments2.length) || 0) > 0 ? /*#__PURE__*/React.createElement("button", {
      className: "btn-ghost",
      onClick: function onClick() {
        return setViewingAttachments(p);
      },
      title: "\u67E5\u770B ".concat(p.attachments.length, " \u4E2A\u51ED\u8BC1"),
      style: {
        padding: '3px 8px',
        color: 'var(--accent)'
      }
    }, "\uD83D\uDCCE ", p.attachments.length) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)'
      }
    }, "\u2014")), /*#__PURE__*/React.createElement("td", {
      className: "font-mono",
      style: {
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, p.invoice_no || '-'), /*#__PURE__*/React.createElement("td", {
      className: "font-mono",
      style: {
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, p.shipment_ref || '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, p.paid_by), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
      className: "btn-ghost",
      onClick: function onClick() {
        return editPayment(p);
      },
      title: "\u7F16\u8F91",
      style: {
        padding: '3px 6px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      className: "w-4 h-4"
    })), /*#__PURE__*/React.createElement("button", {
      className: "btn-ghost",
      onClick: function onClick() {
        return deletePayment(p);
      },
      title: "\u5220\u9664",
      style: {
        padding: '3px 6px',
        color: 'var(--bad)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      className: "w-4 h-4"
    }))));
  }), filteredPayments.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 10,
    style: {
      textAlign: 'center',
      padding: '40px',
      color: 'var(--ink-4)'
    }
  }, loading ? '⏳ 加载中…' : '暂无符合条件的记录'))))))), section === 'carriers' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-6",
    id: "carrier-form-anchor"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: '-.022em',
      marginBottom: 14
    }
  }, editingCarrierId ? '✏️ 编辑快递公司' : '➕ 添加快递公司'), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-3 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u516C\u53F8\u540D *"), /*#__PURE__*/React.createElement("input", {
    value: newCarrier.name,
    onChange: function onChange(e) {
      return setNewCarrier(function (c) {
        return _objectSpread(_objectSpread({}, c), {}, {
          name: e.target.value
        });
      });
    },
    placeholder: "\u5982\uFF1A\u6B63\u77F3\u3001\u660C\u6656",
    autoComplete: "off"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u4E3B\u8981\u4E1A\u52A1"), /*#__PURE__*/React.createElement("select", {
    value: newCarrier.category,
    onChange: function onChange(e) {
      return setNewCarrier(function (c) {
        return _objectSpread(_objectSpread({}, c), {}, {
          category: e.target.value
        });
      });
    }
  }, CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.v,
      value: c.v
    }, c.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u8054\u7CFB\u4EBA"), /*#__PURE__*/React.createElement("input", {
    value: newCarrier.contact_person,
    onChange: function onChange(e) {
      return setNewCarrier(function (c) {
        return _objectSpread(_objectSpread({}, c), {}, {
          contact_person: e.target.value
        });
      });
    },
    placeholder: "\u738B\u7ECF\u7406",
    autoComplete: "off"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u8054\u7CFB\u7535\u8BDD"), /*#__PURE__*/React.createElement("input", {
    value: newCarrier.contact_phone,
    onChange: function onChange(e) {
      return setNewCarrier(function (c) {
        return _objectSpread(_objectSpread({}, c), {}, {
          contact_phone: e.target.value
        });
      });
    },
    placeholder: "138xxxxxxxx",
    autoComplete: "off"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u6536\u6B3E\u4EBA"), /*#__PURE__*/React.createElement("input", {
    value: newCarrier.beneficiary,
    onChange: function onChange(e) {
      return setNewCarrier(function (c) {
        return _objectSpread(_objectSpread({}, c), {}, {
          beneficiary: e.target.value
        });
      });
    },
    placeholder: "\u6DF1\u5733\u5E02XX\u7269\u6D41",
    autoComplete: "off"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u5F00\u6237\u884C"), /*#__PURE__*/React.createElement("input", {
    value: newCarrier.bank_name,
    onChange: function onChange(e) {
      return setNewCarrier(function (c) {
        return _objectSpread(_objectSpread({}, c), {}, {
          bank_name: e.target.value
        });
      });
    },
    placeholder: "\u5DE5\u5546\u94F6\u884CXX\u652F\u884C",
    autoComplete: "off"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: 14,
      background: 'var(--bg-soft)',
      borderRadius: 'var(--radius)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: 'var(--ink-3)',
      marginBottom: 8,
      letterSpacing: '-.003em'
    }
  }, "\uD83D\uDCB0 \u6536\u6B3E\u8D26\u53F7\uFF08\u53EF\u586B\u591A\u79CD\u6E20\u9053\uFF09"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] mb-1",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\uD83C\uDFE6 \u94F6\u884C\u8D26\u53F7"), /*#__PURE__*/React.createElement("input", {
    value: newCarrier.bank_account,
    onChange: function onChange(e) {
      return setNewCarrier(function (c) {
        return _objectSpread(_objectSpread({}, c), {}, {
          bank_account: e.target.value
        });
      });
    },
    placeholder: "6222 0202 ...",
    autoComplete: "off"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] mb-1",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDC99 \u652F\u4ED8\u5B9D"), /*#__PURE__*/React.createElement("input", {
    value: newCarrier.alipay,
    onChange: function onChange(e) {
      return setNewCarrier(function (c) {
        return _objectSpread(_objectSpread({}, c), {}, {
          alipay: e.target.value
        });
      });
    },
    placeholder: "13800138000 / xxx@xxx.com",
    autoComplete: "off"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] mb-1",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDC9A \u5FAE\u4FE1"), /*#__PURE__*/React.createElement("input", {
    value: newCarrier.wechat,
    onChange: function onChange(e) {
      return setNewCarrier(function (c) {
        return _objectSpread(_objectSpread({}, c), {}, {
          wechat: e.target.value
        });
      });
    },
    placeholder: "\u5FAE\u4FE1\u53F7 / \u5546\u6237\u53F7",
    autoComplete: "off"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] mb-1",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDD35 PayPal"), /*#__PURE__*/React.createElement("input", {
    value: newCarrier.paypal,
    onChange: function onChange(e) {
      return setNewCarrier(function (c) {
        return _objectSpread(_objectSpread({}, c), {}, {
          paypal: e.target.value
        });
      });
    },
    placeholder: "paypal@xxx.com",
    autoComplete: "off"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "block text-[11px] mb-1",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDCB3 P \u5361/\u4FE1\u7528\u5361"), /*#__PURE__*/React.createElement("input", {
    value: newCarrier.pcard,
    onChange: function onChange(e) {
      return setNewCarrier(function (c) {
        return _objectSpread(_objectSpread({}, c), {}, {
          pcard: e.target.value
        });
      });
    },
    placeholder: "\u5361\u53F7\u672B 4 \u4F4D",
    autoComplete: "off"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "block text-[12px] mb-1.5",
    style: {
      color: 'var(--ink-3)',
      fontWeight: 500
    }
  }, "\u5907\u6CE8"), /*#__PURE__*/React.createElement("textarea", {
    value: newCarrier.notes,
    onChange: function onChange(e) {
      return setNewCarrier(function (c) {
        return _objectSpread(_objectSpread({}, c), {}, {
          notes: e.target.value
        });
      });
    },
    placeholder: "\u6E20\u9053\u7279\u70B9 / \u4EF7\u683C\u6863\u4F4D / \u914D\u5408\u5EA6",
    rows: 2,
    style: {
      width: '100%',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: submitCarrier
  }, editingCarrierId ? '💾 更新公司' : '✓ 添加公司'), editingCarrierId && /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: function onClick() {
      setEditingCarrierId(null);
      setNewCarrier({
        name: '',
        category: 'express',
        bank_name: '',
        bank_account: '',
        beneficiary: '',
        alipay: '',
        wechat: '',
        paypal: '',
        pcard: '',
        contact_person: '',
        contact_phone: '',
        notes: ''
      });
    }
  }, "\u53D6\u6D88\u7F16\u8F91"))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 120
    }
  }, "\u516C\u53F8\u540D"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 90
    }
  }, "\u4E1A\u52A1"), /*#__PURE__*/React.createElement("th", null, "\u8054\u7CFB\u4EBA"), /*#__PURE__*/React.createElement("th", null, "\u6536\u6B3E\u4EBA / \u5F00\u6237\u884C"), /*#__PURE__*/React.createElement("th", null, "\u6E20\u9053"), /*#__PURE__*/React.createElement("th", null, "\u672C\u6708\u652F\u51FA"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 90
    }
  }, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, carriers.map(function (c) {
    var monthly = payments.filter(function (p) {
      return p.carrier_name === c.name && String(p.payment_date).startsWith(filterMonth || new Date().toISOString().slice(0, 7));
    }).reduce(function (s, p) {
      return s + Number(p.amount);
    }, 0);
    var channels = [c.bank_account && '🏦', c.alipay && '💙', c.wechat && '💚', c.paypal && '🔵', c.pcard && '💳'].filter(Boolean).join(' ');
    return /*#__PURE__*/React.createElement("tr", {
      key: c.id,
      className: "row-hover"
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        fontWeight: 500
      }
    }, c.name), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "tag tag-info"
    }, categoryLabel(c.category))), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12,
        color: 'var(--ink-2)'
      }
    }, c.contact_person && /*#__PURE__*/React.createElement("div", null, c.contact_person), c.contact_phone && /*#__PURE__*/React.createElement("div", {
      className: "font-mono",
      style: {
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, c.contact_phone)), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12,
        color: 'var(--ink-2)'
      }
    }, c.beneficiary && /*#__PURE__*/React.createElement("div", null, c.beneficiary), c.bank_name && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, c.bank_name)), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 14,
        letterSpacing: '3px'
      }
    }, channels || '-'), /*#__PURE__*/React.createElement("td", {
      className: "font-mono tabular-nums",
      style: {
        fontWeight: 500,
        color: monthly > 0 ? 'var(--accent)' : 'var(--ink-4)'
      }
    }, "\xA5 ", monthly.toFixed(2)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("button", {
      className: "btn-ghost",
      onClick: function onClick() {
        return editCarrier(c);
      },
      title: "\u7F16\u8F91",
      style: {
        padding: '3px 6px'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      className: "w-4 h-4"
    })), /*#__PURE__*/React.createElement("button", {
      className: "btn-ghost",
      onClick: function onClick() {
        return deleteCarrier(c);
      },
      title: "\u5220\u9664",
      style: {
        padding: '3px 6px',
        color: 'var(--bad)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "trash",
      className: "w-4 h-4"
    }))));
  }), carriers.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 7,
    style: {
      textAlign: 'center',
      padding: '40px',
      color: 'var(--ink-4)'
    }
  }, loading ? '⏳ 加载中…' : '尚未添加快递公司，点上方表单添加'))))))), section === 'summary' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3"
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, "\u7EDF\u8BA1\u6708\u4EFD\uFF1A"), /*#__PURE__*/React.createElement("input", {
    type: "month",
    value: filterMonth,
    onChange: function onChange(e) {
      return setFilterMonth(e.target.value);
    },
    style: {
      width: 160
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: function onClick() {
      return setFilterMonth('');
    }
  }, "\u5168\u90E8\u65F6\u95F4"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, "\u5171 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, summary.count), " \u7B14\u8BB0\u5F55"))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-6",
    style: {
      background: 'linear-gradient(135deg, rgba(0,113,227,.08), rgba(52,199,89,.08))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '.1em'
    }
  }, filterMonth || '全部时间', " \u603B\u8FD0\u8D39\u652F\u51FA"), /*#__PURE__*/React.createElement("div", {
    className: "font-display tabular-nums",
    style: {
      fontSize: 56,
      fontWeight: 600,
      color: 'var(--accent)',
      letterSpacing: '-.022em',
      lineHeight: 1.1,
      marginTop: 8
    }
  }, "\xA5 ", summary.totalCNY.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })), summary.totalUSD > 0 && /*#__PURE__*/React.createElement("div", {
    className: "font-display tabular-nums",
    style: {
      fontSize: 20,
      color: 'var(--ink-3)',
      marginTop: 6
    }
  }, "+ $ ", summary.totalUSD.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }), " USD"))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: '-.022em',
      marginBottom: 14
    }
  }, "\uD83D\uDCCA \u6309\u5FEB\u9012\u516C\u53F8\u5360\u6BD4"), Object.entries(summary.byCarrier).sort(function (a, b) {
    return b[1] - a[1];
  }).map(function (_ref19) {
    var _ref20 = _slicedToArray(_ref19, 2),
      name = _ref20[0],
      amt = _ref20[1];
    var pct = summary.totalCNY > 0 ? amt / summary.totalCNY * 100 : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: name,
      style: {
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between text-[13px]",
      style: {
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, name), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "font-mono tabular-nums",
      style: {
        color: 'var(--accent)',
        fontWeight: 600
      }
    }, "\xA5 ", amt.toFixed(2)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)',
        marginLeft: 8
      }
    }, pct.toFixed(1), "%"))), /*#__PURE__*/React.createElement("div", {
      className: "bar-track",
      style: {
        height: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bar-fill",
      style: {
        width: pct + '%'
      }
    })));
  }), Object.keys(summary.byCarrier).length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'var(--ink-4)',
      padding: '40px'
    }
  }, "\u6682\u65E0\u6570\u636E")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: '-.022em',
      marginBottom: 14
    }
  }, "\uD83D\uDE9A \u6309\u8FD0\u8F93\u65B9\u5F0F"), CATEGORIES.map(function (c) {
    var amt = summary.byCategory[c.v] || 0;
    var pct = summary.totalCNY > 0 ? amt / summary.totalCNY * 100 : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: c.v,
      style: {
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between text-[13px]",
      style: {
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", null, c.label), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "font-mono tabular-nums",
      style: {
        color: 'var(--accent)',
        fontWeight: 600
      }
    }, "\xA5 ", amt.toFixed(2)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)',
        marginLeft: 8
      }
    }, pct.toFixed(1), "%"))), /*#__PURE__*/React.createElement("div", {
      className: "bar-track",
      style: {
        height: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bar-fill",
      style: {
        width: pct + '%'
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-6"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: '-.022em',
      marginBottom: 14
    }
  }, "\uD83D\uDCB3 \u6309\u652F\u4ED8\u65B9\u5F0F"), Object.entries(summary.byMethod).sort(function (a, b) {
    return b[1] - a[1];
  }).map(function (_ref21) {
    var _ref22 = _slicedToArray(_ref21, 2),
      m = _ref22[0],
      amt = _ref22[1];
    var pct = summary.totalCNY > 0 ? amt / summary.totalCNY * 100 : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: m,
      style: {
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between text-[13px]",
      style: {
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", null, methodLabel(m)), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      className: "font-mono tabular-nums",
      style: {
        color: 'var(--accent)',
        fontWeight: 600
      }
    }, "\xA5 ", amt.toFixed(2)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)',
        marginLeft: 8
      }
    }, pct.toFixed(1), "%"))), /*#__PURE__*/React.createElement("div", {
      className: "bar-track",
      style: {
        height: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "bar-fill",
      style: {
        width: pct + '%'
      }
    })));
  }), Object.keys(summary.byMethod).length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'var(--ink-4)',
      padding: '40px'
    }
  }, "\u6682\u65E0\u6570\u636E"))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4 text-center",
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: exportPDF
  }, "\uD83D\uDDA8\uFE0F \u5BFC\u51FA PDF \u62A5\u8868\uFF08\u542B\u56FE\u8868\u6C47\u603B\uFF09"), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: function onClick() {
      var rows = [['日期', '快递公司', '运输方式', '金额', '货币', '支付方式', '账单号', '订单', '操作人', '备注', '凭证数']];
      filteredPayments.forEach(function (p) {
        var _p$attachments3;
        return rows.push([p.payment_date, p.carrier_name, categoryLabel(p.category), p.amount, p.currency, methodLabel(p.payment_method), p.invoice_no || '', p.shipment_ref || '', p.paid_by, p.notes || '', ((_p$attachments3 = p.attachments) === null || _p$attachments3 === void 0 ? void 0 : _p$attachments3.length) || 0]);
      });
      var csv = rows.map(function (r) {
        return r.map(function (c) {
          return "\"".concat(String(c).replace(/"/g, '""'), "\"");
        }).join(',');
      }).join('\n');
      var blob = new Blob(["\uFEFF" + csv], {
        type: 'text/csv;charset=utf-8'
      });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = "\u8FD0\u8D39\u652F\u4ED8_".concat(filterMonth || 'all', ".csv");
      a.click();
      URL.revokeObjectURL(url);
      toast('✓ CSV 已导出');
    }
  }, "\uD83D\uDCCA \u5BFC\u51FA CSV\uFF08Excel \u53EF\u6253\u5F00\uFF09"))), viewingAttachments && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setViewingAttachments(null);
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.7)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 'var(--radius-lg)',
      maxWidth: 1000,
      width: '100%',
      maxHeight: '90vh',
      overflowY: 'auto',
      overflowX: 'hidden',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-.022em'
    }
  }, "\uD83D\uDCCE \u4ED8\u6B3E\u51ED\u8BC1 - ", viewingAttachments.carrier_name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, viewingAttachments.payment_date, " \xB7 ", viewingAttachments.currency === 'USD' ? '$' : '¥', " ", Number(viewingAttachments.amount).toLocaleString(), " \xB7 ", methodLabel(viewingAttachments.payment_method))), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: function onClick() {
      return setViewingAttachments(null);
    },
    style: {
      padding: '4px 12px'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-3"
  }, (viewingAttachments.attachments || []).map(function (att, i) {
    var _att$type2;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        background: 'var(--bg-soft)'
      }
    }, (_att$type2 = att.type) !== null && _att$type2 !== void 0 && _att$type2.startsWith('image/') ? /*#__PURE__*/React.createElement("a", {
      href: att.url,
      target: "_blank",
      rel: "noopener"
    }, /*#__PURE__*/React.createElement("img", {
      src: att.url,
      alt: att.name,
      style: {
        width: '100%',
        maxHeight: 400,
        objectFit: 'contain',
        background: 'white',
        display: 'block'
      }
    })) : att.type === 'application/pdf' ? /*#__PURE__*/React.createElement("iframe", {
      src: att.url,
      title: att.name,
      style: {
        width: '100%',
        height: 500,
        border: 'none',
        display: 'block'
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 40,
        textAlign: 'center',
        color: 'var(--ink-3)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 40,
        marginBottom: 8
      }
    }, "\uD83D\uDCC4"), /*#__PURE__*/React.createElement("a", {
      href: att.url,
      target: "_blank",
      rel: "noopener",
      style: {
        color: 'var(--accent)'
      }
    }, "\u4E0B\u8F7D\u67E5\u770B")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 12px',
        fontSize: 12,
        color: 'var(--ink-3)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, att.name), /*#__PURE__*/React.createElement("a", {
      href: att.url,
      download: att.name,
      target: "_blank",
      rel: "noopener",
      className: "btn-sec",
      style: {
        padding: '2px 8px',
        fontSize: 11,
        textDecoration: 'none'
      }
    }, "\u4E0B\u8F7D \u2193")));
  })))));
};
