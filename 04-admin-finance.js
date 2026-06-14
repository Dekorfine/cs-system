// ====== cs-system — 04-admin-finance ======
// 版本 2026.06.05-fix239
// 预编译切片
//
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
// ====== cs-system — 04-admin-finance ======
// 版本 2026.06.05-fix239
// 预编译切片
//

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
  var save = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            if (isAdmin) {
              _context.n = 1;
              break;
            }
            toast('只有主管才能配置');
            return _context.a(2);
          case 1:
            if (!(!url.trim() || !key.trim())) {
              _context.n = 2;
              break;
            }
            toast('请填写完整 URL 和 Key');
            return _context.a(2);
          case 2:
            if (/^https:\/\/[\w-]+\.supabase\.co\/?$/.test(url.trim())) {
              _context.n = 4;
              break;
            }
            _context.n = 3;
            return wsConfirm('URL 格式好像不对(应该像 https://xxxx.supabase.co),继续保存?');
          case 3:
            if (_context.v) {
              _context.n = 4;
              break;
            }
            return _context.a(2);
          case 4:
            localStorage.setItem('wtkpi_url', url.trim());
            localStorage.setItem('wtkpi_key', key.trim());
            toast('✓ 已保存到本机');
            setTestResult(null);
          case 5:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function save() {
      return _ref2.apply(this, arguments);
    };
  }();
  var testConnection = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var w, client, _yield$client$from$se, data, error, _t;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!(!url.trim() || !key.trim())) {
              _context2.n = 1;
              break;
            }
            toast('请先填写 URL 和 Key');
            return _context2.a(2);
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
            _context2.p = 2;
            client = window.getWtkpiClient();
            if (client) {
              _context2.n = 3;
              break;
            }
            throw new Error('client 初始化失败');
          case 3:
            _context2.n = 4;
            return client.from('photo_logs').select('id, status').limit(1);
          case 4:
            _yield$client$from$se = _context2.v;
            data = _yield$client$from$se.data;
            error = _yield$client$from$se.error;
            if (!error) {
              _context2.n = 5;
              break;
            }
            throw error;
          case 5:
            setTestResult({
              ok: true,
              msg: "\u8FDE\u63A5\u6210\u529F \u2713 \u8868\u91CC\u6709 ".concat((data === null || data === void 0 ? void 0 : data.length) || 0, " \u6761\u6837\u672C\u6570\u636E\u53EF\u8BFB")
            });
            _context2.n = 7;
            break;
          case 6:
            _context2.p = 6;
            _t = _context2.v;
            setTestResult({
              ok: false,
              msg: '连接失败:' + (_t.message || JSON.stringify(_t))
            });
          case 7:
            setTesting(false);
          case 8:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 6]]);
    }));
    return function testConnection() {
      return _ref3.apply(this, arguments);
    };
  }();
  var clear = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return wsConfirm('确认清除自定义配置?(会恢复到默认值)');
          case 1:
            if (_context3.v) {
              _context3.n = 2;
              break;
            }
            return _context3.a(2);
          case 2:
            localStorage.removeItem('wtkpi_url');
            localStorage.removeItem('wtkpi_key');
            setUrl(DEFAULT_URL);
            setKey(DEFAULT_KEY);
            setTestResult(null);
            toast('已恢复默认');
          case 3:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function clear() {
      return _ref4.apply(this, arguments);
    };
  }();
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
var AdminModule = function AdminModule(_ref5) {
  var user = _ref5.user,
    employees = _ref5.employees,
    setEmployees = _ref5.setEmployees,
    toast = _ref5.toast,
    cloudCfg = _ref5.cloudCfg,
    setCloudCfg = _ref5.setCloudCfg,
    onCloudApply = _ref5.onCloudApply;
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
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var _data$value, _yield$CLOUD$client$f, data, encrypted, decoded, _t2;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (CLOUD.client) {
              _context4.n = 1;
              break;
            }
            setGeminiStatus('❌ 云同步未启用');
            return _context4.a(2);
          case 1:
            _context4.p = 1;
            _context4.n = 2;
            return CLOUD.client.from('kb_team_config').select('value').eq('key', 'gemini_api_key').maybeSingle();
          case 2:
            _yield$CLOUD$client$f = _context4.v;
            data = _yield$CLOUD$client$f.data;
            if (data) {
              _context4.n = 3;
              break;
            }
            setGeminiStatus('未配置');
            return _context4.a(2);
          case 3:
            encrypted = ((_data$value = data.value) === null || _data$value === void 0 ? void 0 : _data$value.encrypted) || '';
            decoded = encrypted ? _xorDecrypt(encrypted) : '';
            if (decoded) {
              setGeminiStatus("\u2713 \u5DF2\u914D\u7F6E (".concat(decoded.slice(0, 8), "...)"));
            } else {
              setGeminiStatus('未配置');
            }
            _context4.n = 5;
            break;
          case 4:
            _context4.p = 4;
            _t2 = _context4.v;
            setGeminiStatus('❌ 读取失败: ' + _t2.message);
          case 5:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 4]]);
    }));
    return function loadGeminiKey() {
      return _ref6.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (section === 'gemini') loadGeminiKey();
  }, [section]);
  var saveGeminiKey = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var _verify$value, encrypted, _yield$CLOUD$client$f2, data, error, _yield$CLOUD$client$f3, verify, encryptedBack, decoded, _t3;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            if (geminiKey.trim()) {
              _context5.n = 1;
              break;
            }
            toast('⚠ 请输入 Gemini API key');
            return _context5.a(2);
          case 1:
            if (CLOUD.client) {
              _context5.n = 2;
              break;
            }
            toast('❌ 云同步未启用');
            return _context5.a(2);
          case 2:
            if (geminiKey.trim().startsWith('AIza')) {
              _context5.n = 4;
              break;
            }
            _context5.n = 3;
            return wsConfirm('这个 key 看起来不像 Gemini key（通常以 AIza 开头）。继续保存吗？');
          case 3:
            if (_context5.v) {
              _context5.n = 4;
              break;
            }
            return _context5.a(2);
          case 4:
            _context5.n = 5;
            return wsConfirm('保存 Gemini API key 到云端？\n会用 XOR 加密后存储到 Supabase，所有团队成员都能使用此 key。');
          case 5:
            if (_context5.v) {
              _context5.n = 6;
              break;
            }
            return _context5.a(2);
          case 6:
            _context5.p = 6;
            encrypted = _xorEncrypt(geminiKey.trim());
            console.log('[GEMINI] saving encrypted key, len=', encrypted.length);
            _context5.n = 7;
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
          case 7:
            _yield$CLOUD$client$f2 = _context5.v;
            data = _yield$CLOUD$client$f2.data;
            error = _yield$CLOUD$client$f2.error;
            if (!error) {
              _context5.n = 8;
              break;
            }
            console.error('[GEMINI] save error:', error);
            alert("\u274C \u4FDD\u5B58\u5931\u8D25\uFF1A".concat(error.message, "\n\n\u9519\u8BEF\u7801: ").concat(error.code || 'unknown', "\n\u8BE6\u60C5: ").concat(error.details || error.hint || '无', "\n\n\u5E38\u89C1\u539F\u56E0\uFF1A\n1. kb_team_config \u8868\u4E0D\u5B58\u5728\uFF08\u8BF7\u8DD1 03_kb_extras.sql\uFF09\n2. RLS \u7B56\u7565\u963B\u6B62\u5199\u5165\n3. \u7F51\u7EDC\u95EE\u9898"));
            return _context5.a(2);
          case 8:
            console.log('[GEMINI] saved, verifying...');
            // 立即读出来验证
            _context5.n = 9;
            return CLOUD.client.from('kb_team_config').select('value').eq('key', 'gemini_api_key').maybeSingle();
          case 9:
            _yield$CLOUD$client$f3 = _context5.v;
            verify = _yield$CLOUD$client$f3.data;
            encryptedBack = (verify === null || verify === void 0 || (_verify$value = verify.value) === null || _verify$value === void 0 ? void 0 : _verify$value.encrypted) || '';
            decoded = encryptedBack ? _xorDecrypt(encryptedBack) : '';
            if (!(decoded !== geminiKey.trim())) {
              _context5.n = 10;
              break;
            }
            alert("\u26A0 \u4FDD\u5B58\u7591\u4F3C\u6210\u529F\u4F46\u9A8C\u8BC1\u5931\u8D25\uFF1A\n\n\u5199\u5165\u7684 key: ".concat(geminiKey.slice(0, 8), "...\n\u8BFB\u56DE\u7684 key: ").concat(decoded.slice(0, 8), "...\n\n\u53EF\u80FD\u662F RLS \u963B\u6B62\u4E86\u8BFB\u53D6\u3002\u8BF7\u53BB Supabase \u68C0\u67E5 kb_team_config \u8868\u7684 Policies\u3002"));
            return _context5.a(2);
          case 10:
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
            _context5.n = 12;
            break;
          case 11:
            _context5.p = 11;
            _t3 = _context5.v;
            console.error('[GEMINI] save exception:', _t3);
            alert('❌ 保存异常: ' + _t3.message);
          case 12:
            return _context5.a(2);
        }
      }, _callee5, null, [[6, 11]]);
    }));
    return function saveGeminiKey() {
      return _ref7.apply(this, arguments);
    };
  }();
  var testGemini = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var _j$candidates, key, source, _data$value2, _yield$CLOUD$client$f4, data, encrypted, resp, _err$error, err, j, txt, _t4;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            setGeminiTesting(true);
            setGeminiTestResult('');
            _context6.p = 1;
            // 优先用输入框里的 key，否则从云端读
            key = geminiKey.trim();
            source = '输入框';
            if (key) {
              _context6.n = 3;
              break;
            }
            _context6.n = 2;
            return CLOUD.client.from('kb_team_config').select('value').eq('key', 'gemini_api_key').maybeSingle();
          case 2:
            _yield$CLOUD$client$f4 = _context6.v;
            data = _yield$CLOUD$client$f4.data;
            encrypted = (data === null || data === void 0 || (_data$value2 = data.value) === null || _data$value2 === void 0 ? void 0 : _data$value2.encrypted) || '';
            key = encrypted ? _xorDecrypt(encrypted) : '';
            source = '云端';
          case 3:
            if (key) {
              _context6.n = 4;
              break;
            }
            setGeminiTestResult('❌ 请先输入 key 或先点「保存到云端」');
            setGeminiTesting(false);
            return _context6.a(2);
          case 4:
            _context6.n = 5;
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
            resp = _context6.v;
            if (resp.ok) {
              _context6.n = 7;
              break;
            }
            _context6.n = 6;
            return resp.json()["catch"](function () {
              return {};
            });
          case 6:
            err = _context6.v;
            throw new Error(((_err$error = err.error) === null || _err$error === void 0 ? void 0 : _err$error.message) || "HTTP ".concat(resp.status));
          case 7:
            _context6.n = 8;
            return resp.json();
          case 8:
            j = _context6.v;
            txt = ((_j$candidates = j.candidates) === null || _j$candidates === void 0 || (_j$candidates = _j$candidates[0]) === null || _j$candidates === void 0 || (_j$candidates = _j$candidates.content) === null || _j$candidates === void 0 || (_j$candidates = _j$candidates.parts) === null || _j$candidates === void 0 || (_j$candidates = _j$candidates[0]) === null || _j$candidates === void 0 ? void 0 : _j$candidates.text) || '';
            setGeminiTestResult("\u2713 \u8FDE\u901A\u6210\u529F (key \u6765\u81EA".concat(source, "): \"").concat(txt.slice(0, 40).trim(), "...\""));
            _context6.n = 10;
            break;
          case 9:
            _context6.p = 9;
            _t4 = _context6.v;
            setGeminiTestResult('❌ ' + _t4.message);
          case 10:
            setGeminiTesting(false);
          case 11:
            return _context6.a(2);
        }
      }, _callee6, null, [[1, 9]]);
    }));
    return function testGemini() {
      return _ref8.apply(this, arguments);
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
    saveCloudAccount(emp); // 🆕 fix146: 同步到云端,新人任何设备都能登录
    setNewEmp({
      name: '',
      alias: '',
      sites: '',
      password: '123456',
      role: 'staff'
    });
    setShowNew(false);
    toast('✓ 已添加 ' + emp.name + ' · 账号:' + accountFor(emp) + ' · 密码:' + emp.password);
  };
  var updateEmp = function updateEmp(id, patch) {
    setEmployees(function (prev) {
      return prev.map(function (e) {
        return e.id === id ? _objectSpread(_objectSpread({}, e), patch) : e;
      });
    });
    var cur = employees.find(function (e) {
      return e.id === id;
    });
    if (cur) saveCloudAccount(_objectSpread(_objectSpread({}, cur), patch)); // 🆕 fix146: 改动同步云端
  };
  var deleteEmp = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(id) {
      var e;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            if (!(id === user.id)) {
              _context7.n = 1;
              break;
            }
            toast('⚠ 不能删除自己');
            return _context7.a(2);
          case 1:
            e = employees.find(function (x) {
              return x.id === id;
            });
            _context7.n = 2;
            return wsConfirm("\u786E\u8BA4\u5220\u9664\u5458\u5DE5 ".concat(e.name, "\uFF1F\u5386\u53F2\u8BB0\u5F55\u4E0D\u4F1A\u4E22\u5931\uFF0C\u4F46\u8BE5\u5458\u5DE5\u65E0\u6CD5\u518D\u767B\u5F55\u3002"));
          case 2:
            if (_context7.v) {
              _context7.n = 3;
              break;
            }
            return _context7.a(2);
          case 3:
            setEmployees(function (prev) {
              return prev.filter(function (e) {
                return e.id !== id;
              });
            });
            deleteCloudAccount(id); // 🆕 fix146: 云端同步删除
            toast('✗ 已删除');
          case 4:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function deleteEmp(_x) {
      return _ref9.apply(this, arguments);
    };
  }();
  var resetPwd = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(id) {
      var newPwd;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            _context8.n = 1;
            return wsPrompt('请输入新密码 (至少 6 位):', '123456');
          case 1:
            newPwd = _context8.v;
            if (!(!newPwd || newPwd.length < 6)) {
              _context8.n = 2;
              break;
            }
            toast('⚠ 密码至少 6 位');
            return _context8.a(2);
          case 2:
            updateEmp(id, {
              password: newPwd
            });
            toast('✓ 密码已重置为: ' + newPwd);
          case 3:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    return function resetPwd(_x2) {
      return _ref0.apply(this, arguments);
    };
  }();
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
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var n, okAcc, _t5;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            _context9.n = 1;
            return window.publishMyStaff(employees, user.name + (user.alias ? ' ' + user.alias : ''));
          case 1:
            n = _context9.v;
            _context9.n = 2;
            return seedCloudAccounts(employees);
          case 2:
            okAcc = _context9.v;
            // 🆕 fix146: 同时把全部登录账号推到 cs_accounts
            toast("\u2713 \u5DF2\u540C\u6B65 ".concat(n, " \u540D\u5230\u5171\u4EAB\u76EE\u5F55") + (okAcc ? " \xB7 ".concat(employees.length, " \u4E2A\u767B\u5F55\u8D26\u53F7\u5DF2\u4E0A\u4E91") : ' · ⚠登录账号未上云(cs_accounts 表?)'));
            _context9.n = 4;
            break;
          case 3:
            _context9.p = 3;
            _t5 = _context9.v;
            toast('❌ 同步失败:' + (_t5.message || _t5));
          case 4:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 3]]);
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
