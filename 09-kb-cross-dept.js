// ====== cs-system — 09-kb-cross-dept ======
// 版本 2026.06.05-fix366
// 预编译切片
//
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
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
// ====== cs-system — 09-kb-cross-dept ======
// 版本 2026.06.05-fix276
// 预编译切片
//

var KbModule = function KbModule(_ref) {
  var user = _ref.user,
    toast = _ref.toast;
  // 🆕 用 query string 而不是 hash,更稳定;同时加 timestamp 防缓存
  var userParam = encodeURIComponent((user.name || '') + (user.alias ? ' ' + user.alias : ''));
  var userAlias = encodeURIComponent(user.alias || user.name || '');
  // 同时支持 hash 和 query 两种,确保 kb.html 能识别
  var isAdminKb = user.role === 'admin' || user.role === 'super_admin';
  // 🆕 fix246:把角色/主管标志传进 kb.html(原来只传名字,kb.html 不知道是不是主管 → 主管也编辑不了)
  var sameDirUrl = "kb.html?user=".concat(userParam, "&alias=").concat(userAlias, "&role=").concat(encodeURIComponent(user.role || 'staff'), "&admin=").concat(isAdminKb ? 1 : 0, "#user=").concat(userParam);
  var iframeRef = React.useRef(null);
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var _useState = useState('calc(100vh - 100px)'),
    _useState2 = _slicedToArray(_useState, 2),
    iframeHeight = _useState2[0],
    setIframeHeight = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showNewEntry = _useState4[0],
    setShowNewEntry = _useState4[1];

  // 🆕 加载诊断状态
  var _useState5 = useState('loading'),
    _useState6 = _slicedToArray(_useState5, 2),
    loadStatus = _useState6[0],
    setLoadStatus = _useState6[1]; // loading / loaded / error / timeout
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    errorMsg = _useState8[0],
    setErrorMsg = _useState8[1];
  var _useState9 = useState(null),
    _useState0 = _slicedToArray(_useState9, 2),
    iframeLoadedAt = _useState0[0],
    setIframeLoadedAt = _useState0[1];

  // 🆕 检测 iframe 是否加载完成(5 秒内还在 loading → 视为加载失败)
  useEffect(function () {
    var timer = setTimeout(function () {
      if (loadStatus === 'loading') {
        setLoadStatus('timeout');
        setErrorMsg('iframe 5 秒内未发送数据信号 - 可能 kb.html 没有部署成功');
      }
    }, 5000);
    return function () {
      return clearTimeout(timer);
    };
  }, [loadStatus, iframeLoadedAt]);
  useEffect(function () {
    // 🆕 fix6: 把当前可视区位置传给 iframe (用于 modal-backdrop 定位)
    var sendKbPosition = function sendKbPosition() {
      if (!iframeRef.current || !iframeRef.current.contentWindow) return;
      var rect = iframeRef.current.getBoundingClientRect();
      // 用户视口顶部相对 iframe 顶部的偏移 (用户向下滚动了多少 iframe 内容)
      var scrollY = Math.max(0, -rect.top);
      try {
        iframeRef.current.contentWindow.postMessage({
          type: 'kb-position-info',
          scrollY: scrollY,
          viewportHeight: window.innerHeight
        }, '*');
      } catch (e) {/* ignore */}
    };

    // 用 rAF 节流滚动事件
    var scrollRafId = null;
    var onScroll = function onScroll() {
      if (scrollRafId) return;
      scrollRafId = requestAnimationFrame(function () {
        sendKbPosition();
        scrollRafId = null;
      });
    };
    var handler = function handler(e) {
      var _e$data, _e$data2, _e$data3, _e$data4, _e$data5, _e$data6, _e$data7, _e$data8;
      if (((_e$data = e.data) === null || _e$data === void 0 ? void 0 : _e$data.type) === 'iframe-resize' && ((_e$data2 = e.data) === null || _e$data2 === void 0 ? void 0 : _e$data2.source) === 'kb') {
        // 🆕 fix8: 不再撑大 iframe 到内容高度!
        // 原因:iframe 内容高度=4500px+,会让 position:fixed 的 modal 铆在 iframe 顶部,用户向下滚动后看不到
        // 之前用户曾要求"删除上下滑动模块"(撑大 iframe 来消除内部滚动条),但那破坏了 modal 弹窗
        // 经重新评估,正确做法是:保留 iframe 自己的滚动条 (viewport-bound),让 position:fixed 在 iframe 内正常工作
        // 副作用:iframe 内会有滚动条 (这是必要的代价,确保 modal 弹窗可见)
        // setIframeHeight(Math.max(600, e.data.height + 20) + 'px');  ← 已禁用 (撑大会破坏 modal)
        setLoadStatus('loaded');
      }
      if (((_e$data3 = e.data) === null || _e$data3 === void 0 ? void 0 : _e$data3.type) === 'iframe-modal-open' && ((_e$data4 = e.data) === null || _e$data4 === void 0 ? void 0 : _e$data4.source) === 'kb') {
        // fix6 残留:即便 iframe 现在 viewport-bound 不再需要 absolute 定位 backdrop,但发位置信息无害
        document.body.style.overflow = 'hidden';
        sendKbPosition();
      }
      if (((_e$data5 = e.data) === null || _e$data5 === void 0 ? void 0 : _e$data5.type) === 'iframe-modal-close' && ((_e$data6 = e.data) === null || _e$data6 === void 0 ? void 0 : _e$data6.source) === 'kb') {
        document.body.style.overflow = '';
      }
      if (((_e$data7 = e.data) === null || _e$data7 === void 0 ? void 0 : _e$data7.type) === 'kb-request-position' && ((_e$data8 = e.data) === null || _e$data8 === void 0 ? void 0 : _e$data8.source) === 'kb') {
        sendKbPosition();
      }
    };
    window.addEventListener('message', handler);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', sendKbPosition);
    return function () {
      window.removeEventListener('message', handler);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', sendKbPosition);
      if (scrollRafId) cancelAnimationFrame(scrollRafId);
      // 安全起见,如果模块卸载时还锁着滚动,解锁
      if (document.body.style.overflow === 'hidden') document.body.style.overflow = '';
    };
  }, []);
  var refreshIframe = function refreshIframe() {
    setLoadStatus('loading');
    setErrorMsg('');
    setIframeLoadedAt(Date.now());
    if (iframeRef.current) {
      // 加时间戳防缓存
      var url = sameDirUrl + '&_t=' + Date.now();
      iframeRef.current.src = url;
    }
  };
  var handleIframeLoad = function handleIframeLoad() {
    // iframe 的 onload 触发 - 至少 HTML 加载了。设个短超时等 iframe 内 JS 发 postMessage
    setTimeout(function () {
      if (loadStatus === 'loading') {
        // 没收到 postMessage,但 iframe 加载了 → 可能是密码门 / 数据没渲染
        setLoadStatus('loaded_no_data');
      }
    }, 2000);
  };
  var handleIframeError = function handleIframeError() {
    setLoadStatus('error');
    setErrorMsg('iframe 加载失败 - kb.html 可能不存在或路径错误');
  };

  // 🆕 诊断工具:测试 kb.html 是否可访问
  var diagnoseKb = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var testUrl, resp, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setErrorMsg('正在诊断 kb.html 状态...');
            _context.p = 1;
            testUrl = 'kb.html?_diagnose=1&_t=' + Date.now();
            _context.n = 2;
            return fetch(testUrl, {
              method: 'HEAD',
              cache: 'no-store'
            });
          case 2:
            resp = _context.v;
            if (resp.ok) {
              setErrorMsg("\u2713 kb.html \u6587\u4EF6\u53EF\u8BBF\u95EE(HTTP ".concat(resp.status, ")\u3002\u95EE\u9898\u53EF\u80FD\u662F iframe \u5185 JS \u9519\u8BEF\u6216\u5BC6\u7801\u95E8\u62E6\u622A\u3002\n\n\u5EFA\u8BAE:\n1. \u70B9\u51FB\u300C\u2197 \u65B0\u7A97\u53E3\u6253\u5F00\u300D\u76F4\u63A5\u5728\u65B0\u9875\u9762\u8BBF\u95EE\n2. \u5982\u679C\u65B0\u9875\u9762\u4E5F\u770B\u4E0D\u5230\u6570\u636E,F12 \u67E5\u770B kb.html \u7684\u63A7\u5236\u53F0\u9519\u8BEF"));
            } else {
              setErrorMsg("\u274C kb.html HTTP ".concat(resp.status, " - \u6587\u4EF6\u53EF\u80FD\u672A\u90E8\u7F72\u5230\u670D\u52A1\u5668!\n\n\u8BF7\u786E\u4FDD kb.html \u5DF2\u4E0A\u4F20\u5230 GitHub Pages \u540C\u76EE\u5F55(").concat(window.location.pathname.replace(/[^/]+$/, ''), "kb.html)"));
            }
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            setErrorMsg("\u274C \u65E0\u6CD5\u8BBF\u95EE kb.html: ".concat(_t.message, "\n\n\u8FD9\u610F\u5473\u7740 kb.html \u4E0D\u5728\u5F53\u524D\u9875\u9762\u540C\u76EE\u5F55\u3002\u8BF7\u5C06 kb.html \u4E0A\u4F20\u5230\u4E0E\u672C\u5DE5\u4F5C\u53F0\u76F8\u540C\u7684 GitHub Pages \u76EE\u5F55\u3002"));
          case 4:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function diagnoseKb() {
      return _ref2.apply(this, arguments);
    };
  }();
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
      borderBottom: '1px solid var(--line)',
      flexWrap: 'wrap',
      gap: 8
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
  }, "\uD83D\uDCDA \u77E5\u8BC6\u5E93"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8
    }
  }, "\xB7 280+ Q&A \xB7 \u667A\u80FD\u641C\u7D22 \xB7 Gemini AI \xB7 \u56E2\u961F\u534F\u540C"), isAdmin && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "\xB7 \uD83D\uDC51 \u4E3B\u7BA1\u6A21\u5F0F"), loadStatus === 'loading' && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      color: '#0369a1'
    }
  }, "\xB7 \u23F3 \u52A0\u8F7D\u4E2D..."), loadStatus === 'loaded' && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      color: '#15803d'
    }
  }, "\xB7 \u2713 \u5DF2\u52A0\u8F7D"), (loadStatus === 'error' || loadStatus === 'timeout' || loadStatus === 'loaded_no_data') && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      color: '#dc2626',
      fontWeight: 600
    }
  }, "\xB7 \u26A0 \u52A0\u8F7D\u5F02\u5E38")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, isAdmin && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowNewEntry(true);
    },
    style: {
      padding: '5px 14px',
      background: 'var(--accent)',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 12,
      fontFamily: 'inherit',
      fontWeight: 600
    },
    title: "\u65B0\u5EFA\u4E00\u6761 Q&A \u6A21\u677F"
  }, "+ \u65B0\u5EFA\u77E5\u8BC6"), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: refreshIframe,
    title: "\u5237\u65B0"
  }, "\uD83D\uDD04"), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: diagnoseKb,
    title: "\u8BCA\u65AD kb.html \u72B6\u6001"
  }, "\uD83E\uDE7A \u8BCA\u65AD"), /*#__PURE__*/React.createElement("a", {
    href: sameDirUrl,
    target: "_blank",
    rel: "noopener",
    className: "btn-sec",
    style: {
      textDecoration: 'none'
    }
  }, "\u2197 \u65B0\u7A97\u53E3\u6253\u5F00"))), (loadStatus === 'error' || loadStatus === 'timeout' || loadStatus === 'loaded_no_data' || errorMsg) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px',
      background: '#fef3c7',
      borderBottom: '1px solid #fbbf24',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, "\u26A0"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: '#78350f',
      whiteSpace: 'pre-wrap',
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\u77E5\u8BC6\u5E93\u52A0\u8F7D\u72B6\u6001:", loadStatus), errorMsg && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, errorMsg), loadStatus === 'loaded_no_data' && !errorMsg && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, "iframe HTML \u52A0\u8F7D\u4E86\u4F46\u5185\u5BB9\u672A\u6E32\u67D3\u3002\u53EF\u80FD\u539F\u56E0:", /*#__PURE__*/React.createElement("br", null), "1. kb.html \u5185\u90E8 JS \u62A5\u9519(\u8BF7\u6309\u4E0B\u65B9\u6309\u94AE\u8BCA\u65AD)", /*#__PURE__*/React.createElement("br", null), "2. \u5BC6\u7801\u95E8\u62E6\u622A(\u70B9\u300C\u2197 \u65B0\u7A97\u53E3\u6253\u5F00\u300D\u76F4\u63A5\u8BBF\u95EE\u53EF\u9A8C\u8BC1)", /*#__PURE__*/React.createElement("br", null), "3. iframe \u9AD8\u5EA6\u8BA1\u7B97\u9519\u8BEF"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: diagnoseKb,
    style: {
      padding: '4px 10px',
      background: 'white',
      color: '#78350f',
      border: '1px solid #fbbf24',
      borderRadius: 5,
      fontSize: 11,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600
    }
  }, "\uD83E\uDE7A \u68C0\u6D4B kb.html \u6587\u4EF6"), /*#__PURE__*/React.createElement("a", {
    href: sameDirUrl,
    target: "_blank",
    rel: "noopener",
    style: {
      padding: '4px 10px',
      background: 'white',
      color: '#78350f',
      border: '1px solid #fbbf24',
      borderRadius: 5,
      fontSize: 11,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "\u2197 \u5728\u65B0\u7A97\u53E3\u76F4\u63A5\u8BBF\u95EE"), /*#__PURE__*/React.createElement("button", {
    onClick: refreshIframe,
    style: {
      padding: '4px 10px',
      background: 'white',
      color: '#78350f',
      border: '1px solid #fbbf24',
      borderRadius: 5,
      fontSize: 11,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600
    }
  }, "\uD83D\uDD04 \u91CD\u65B0\u52A0\u8F7D")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 11,
      color: '#92400e'
    }
  }, "\u5F53\u524D iframe URL: ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'white',
      padding: '1px 5px',
      borderRadius: 3
    }
  }, sameDirUrl))))), /*#__PURE__*/React.createElement("iframe", {
    ref: iframeRef,
    src: sameDirUrl,
    onLoad: handleIframeLoad,
    onError: handleIframeError,
    style: {
      width: '100%',
      height: iframeHeight,
      border: 'none',
      background: '#fff',
      display: 'block',
      transition: 'height .15s',
      minHeight: 600
    },
    title: "\u77E5\u8BC6\u5E93"
  }), showNewEntry && /*#__PURE__*/React.createElement(KBNewEntryModal, {
    user: user,
    toast: toast,
    onClose: function onClose() {
      return setShowNewEntry(false);
    },
    onSaved: function onSaved() {
      setShowNewEntry(false);
      refreshIframe();
    }
  }));
};

// 🆕 新建知识库条目 modal
var KBNewEntryModal = function KBNewEntryModal(_ref3) {
  var _KB_CATEGORIES$find;
  var user = _ref3.user,
    toast = _ref3.toast,
    onClose = _ref3.onClose,
    onSaved = _ref3.onSaved;
  var _useState1 = useState('售前问题'),
    _useState10 = _slicedToArray(_useState1, 2),
    catCn = _useState10[0],
    setCatCn = _useState10[1];
  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    qCn = _useState12[0],
    setQCn = _useState12[1];
  var _useState13 = useState(''),
    _useState14 = _slicedToArray(_useState13, 2),
    aCn = _useState14[0],
    setACn = _useState14[1];
  var _useState15 = useState(''),
    _useState16 = _slicedToArray(_useState15, 2),
    qEn = _useState16[0],
    setQEn = _useState16[1];
  var _useState17 = useState(''),
    _useState18 = _slicedToArray(_useState17, 2),
    aEn = _useState18[0],
    setAEn = _useState18[1];
  var _useState19 = useState([]),
    _useState20 = _slicedToArray(_useState19, 2),
    images = _useState20[0],
    setImages = _useState20[1]; // 🆕 fix73: base64 图片数组
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    saving = _useState22[0],
    setSaving = _useState22[1];
  var fileInputRef = React.useRef(null);

  // 🆕 压缩成 base64(约 50-150KB/张)
  var fileToBase64 = function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var img = new Image();
        img.onload = function () {
          var canvas = document.createElement('canvas');
          var w = img.width,
            h = img.height;
          if (w > 1000) {
            h = h * 1000 / w;
            w = 1000;
          }
          canvas.width = w;
          canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', 0.8));
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };
  var addFiles = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(fileList) {
      var files, _iterator, _step, _loop, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            files = Array.from(fileList || []).filter(function (f) {
              return f.type.startsWith('image/');
            });
            _iterator = _createForOfIteratorHelper(files);
            _context3.p = 1;
            _loop = /*#__PURE__*/_regenerator().m(function _loop() {
              var f, b64, _t2;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.p = _context2.n) {
                  case 0:
                    f = _step.value;
                    _context2.p = 1;
                    _context2.n = 2;
                    return fileToBase64(f);
                  case 2:
                    b64 = _context2.v;
                    setImages(function (prev) {
                      return prev.length >= 6 ? prev : [].concat(_toConsumableArray(prev), [b64]);
                    });
                    _context2.n = 4;
                    break;
                  case 3:
                    _context2.p = 3;
                    _t2 = _context2.v;
                    toast('图片处理失败');
                  case 4:
                    return _context2.a(2);
                }
              }, _loop, null, [[1, 3]]);
            });
            _iterator.s();
          case 2:
            if ((_step = _iterator.n()).done) {
              _context3.n = 4;
              break;
            }
            return _context3.d(_regeneratorValues(_loop()), 3);
          case 3:
            _context3.n = 2;
            break;
          case 4:
            _context3.n = 6;
            break;
          case 5:
            _context3.p = 5;
            _t3 = _context3.v;
            _iterator.e(_t3);
          case 6:
            _context3.p = 6;
            _iterator.f();
            return _context3.f(6);
          case 7:
            return _context3.a(2);
        }
      }, _callee2, null, [[1, 5, 6, 7]]);
    }));
    return function addFiles(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  var onPaste = function onPaste(e) {
    var _e$clipboardData;
    var items = Array.from(((_e$clipboardData = e.clipboardData) === null || _e$clipboardData === void 0 ? void 0 : _e$clipboardData.items) || []).filter(function (it) {
      return it.type.startsWith('image/');
    });
    if (items.length) {
      e.preventDefault();
      addFiles(items.map(function (it) {
        return it.getAsFile();
      }).filter(Boolean));
    }
  };
  var KB_CATEGORIES = [{
    cn: '售前问题',
    en: 'Pre-sales'
  }, {
    cn: '售中问题',
    en: 'During Order'
  }, {
    cn: '产品问题',
    en: 'Product'
  }, {
    cn: '物流问题',
    en: 'Logistics'
  }, {
    cn: '售后问题',
    en: 'After-sales'
  }];
  var currentCatEn = ((_KB_CATEGORIES$find = KB_CATEGORIES.find(function (c) {
    return c.cn === catCn;
  })) === null || _KB_CATEGORIES$find === void 0 ? void 0 : _KB_CATEGORIES$find.en) || 'Other';
  var handleSave = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _yield$CLOUD$client$f, maxRow, newId, payload, _yield$CLOUD$client$f2, error, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (!(!qCn.trim() || !aCn.trim())) {
              _context4.n = 1;
              break;
            }
            alert('请至少填写中文问题 + 中文回复');
            return _context4.a(2);
          case 1:
            setSaving(true);
            _context4.p = 2;
            _context4.n = 3;
            return CLOUD.client.from('workspace_kb').select('id').order('id', {
              ascending: false
            }).limit(1);
          case 3:
            _yield$CLOUD$client$f = _context4.v;
            maxRow = _yield$CLOUD$client$f.data;
            newId = (maxRow && maxRow[0] ? maxRow[0].id : 0) + 1;
            payload = {
              id: newId,
              cat_cn: catCn,
              cat_en: currentCatEn,
              category: catCn,
              q_cn: qCn.trim(),
              q_en: qEn.trim() || qCn.trim(),
              a_cn: aCn.trim(),
              a_en: aEn.trim() || aCn.trim(),
              images: images // 🆕 fix73: base64 图片数组
            };
            _context4.n = 4;
            return CLOUD.client.from('workspace_kb').insert(payload);
          case 4:
            _yield$CLOUD$client$f2 = _context4.v;
            error = _yield$CLOUD$client$f2.error;
            if (!error) {
              _context4.n = 5;
              break;
            }
            throw error;
          case 5:
            toast('✓ 已添加到知识库 (id: ' + newId + ')');
            onSaved();
            _context4.n = 7;
            break;
          case 6:
            _context4.p = 6;
            _t4 = _context4.v;
            alert('保存失败: ' + (_t4.message || _t4));
          case 7:
            setSaving(false);
          case 8:
            return _context4.a(2);
        }
      }, _callee3, null, [[2, 6]]);
    }));
    return function handleSave() {
      return _ref5.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.55)',
      zIndex: 99999,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '4vh 20px',
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 14,
      maxWidth: 720,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '92vh',
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "\uD83D\uDCDA \u65B0\u5EFA\u77E5\u8BC6\u5E93\u6761\u76EE"), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: onClose,
    style: {
      padding: '4px 12px'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      overflow: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u5206\u7C7B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, KB_CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("button", {
      key: c.cn,
      onClick: function onClick() {
        return setCatCn(c.cn);
      },
      style: {
        padding: '5px 12px',
        borderRadius: 14,
        fontSize: 12,
        cursor: 'pointer',
        fontFamily: 'inherit',
        border: '1px solid ' + (catCn === c.cn ? 'var(--accent)' : 'var(--line)'),
        background: catCn === c.cn ? 'var(--accent)' : 'white',
        color: catCn === c.cn ? 'white' : 'var(--ink-2)'
      }
    }, c.cn, " / ", c.en);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u5BA2\u6237\u95EE\u9898 (\u4E2D\u6587) *"), /*#__PURE__*/React.createElement("textarea", {
    value: qCn,
    onChange: function onChange(e) {
      return setQCn(e.target.value);
    },
    placeholder: "\u4F8B\u5982:\u5BA2\u6237\u8BE2\u95EE\u4EA7\u54C1\u662F\u5426\u4E3A\u590D\u5236\u54C1",
    style: {
      width: '100%',
      minHeight: 60,
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "Customer Question (English)"), /*#__PURE__*/React.createElement("textarea", {
    value: qEn,
    onChange: function onChange(e) {
      return setQEn(e.target.value);
    },
    placeholder: "Customer asks if the product is a replica",
    style: {
      width: '100%',
      minHeight: 60,
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u56DE\u590D\u6A21\u677F (\u4E2D\u6587) *"), /*#__PURE__*/React.createElement("textarea", {
    value: aCn,
    onChange: function onChange(e) {
      return setACn(e.target.value);
    },
    placeholder: "Hi [\u5BA2\u6237\u59D3\u540D]\uFF0C \u611F\u8C22\u60A8\u7684\u8BE2\u95EE\u3002\u6211\u4EEC\u7684\u4EA7\u54C1...",
    style: {
      width: '100%',
      minHeight: 200,
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical',
      lineHeight: 1.5
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "Reply Template (English)"), /*#__PURE__*/React.createElement("textarea", {
    value: aEn,
    onChange: function onChange(e) {
      return setAEn(e.target.value);
    },
    placeholder: "Hi [Customer Name], Thank you for reaching out. Our products...",
    style: {
      width: '100%',
      minHeight: 200,
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical',
      lineHeight: 1.5
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 12px',
      background: '#fef9c3',
      border: '1px solid #fde047',
      borderRadius: 6,
      fontSize: 11,
      color: '#713f12'
    }
  }, "\uD83D\uDCA1 \u5360\u4F4D\u7B26\u53EF\u4EE5\u7528 ", /*#__PURE__*/React.createElement("code", null, "[\u5BA2\u6237\u59D3\u540D]"), " \xB7 ", /*#__PURE__*/React.createElement("code", null, "[\u8BA2\u5355\u53F7]"), " \xB7 ", /*#__PURE__*/React.createElement("code", null, "[Customer Name]"), " \u7B49,\u5BA2\u670D\u5728\u7528\u65F6\u76F4\u63A5\u66FF\u6362"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    },
    onPaste: onPaste,
    tabIndex: 0
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\uD83D\uDDBC \u573A\u666F\u56FE\u7247(\u9009\u586B \xB7 \u6700\u591A 6 \u5F20 \xB7 \u81EA\u52A8\u538B\u7F29)"), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      var _fileInputRef$current;
      return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
    },
    style: {
      border: '2px dashed var(--line)',
      borderRadius: 8,
      padding: '14px',
      textAlign: 'center',
      cursor: 'pointer',
      background: '#fafafa',
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDCCE \u70B9\u51FB\u9009\u56FE\u7247 / \u805A\u7126\u6B64\u533A\u540E Ctrl+V \u7C98\u8D34\u622A\u56FE / \u62D6\u5165\u56FE\u7247"), /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    accept: "image/*",
    multiple: true,
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      addFiles(e.target.files);
      e.target.value = '';
    }
  }), images.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 10
    }
  }, images.map(function (src, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'relative',
        width: 72,
        height: 72
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: 8,
        border: '1px solid var(--line)'
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setImages(function (prev) {
          return prev.filter(function (_, idx) {
            return idx !== i;
          });
        });
      },
      style: {
        position: 'absolute',
        top: -7,
        right: -7,
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: 'var(--bad)',
        color: 'white',
        border: '2px solid white',
        cursor: 'pointer',
        fontSize: 11,
        lineHeight: 1,
        padding: 0
      }
    }, "\xD7"));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px',
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn-sec",
    style: {
      padding: '7px 14px'
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    disabled: saving,
    style: {
      padding: '7px 18px',
      background: 'var(--accent)',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 13,
      opacity: saving ? 0.5 : 1
    }
  }, saving ? '保存中...' : '✓ 保存到知识库'))));
};

// ============================================================
// 云同步设置模块（嵌入员工管理顶部）
// ============================================================
// ============================================================
// 🏭 供应商管理 - 所有人可新增/编辑/搜索，仅 admin 可删除
// ============================================================
var SuppliersManagement = function SuppliersManagement(_ref6) {
  var toast = _ref6.toast,
    user = _ref6.user;
  var isAdmin = user && (user.role === 'admin' || user.role === 'super_admin');
  var _useState23 = useState([]),
    _useState24 = _slicedToArray(_useState23, 2),
    suppliers = _useState24[0],
    setSuppliers = _useState24[1];
  var _useState25 = useState(false),
    _useState26 = _slicedToArray(_useState25, 2),
    showFullInfo = _useState26[0],
    setShowFullInfo = _useState26[1]; // 是否显示收款人/支付宝列(默认隐藏,这些字段对客服日常没用)
  var _useState27 = useState(true),
    _useState28 = _slicedToArray(_useState27, 2),
    loading = _useState28[0],
    setLoading = _useState28[1];
  var _useState29 = useState(''),
    _useState30 = _slicedToArray(_useState29, 2),
    search = _useState30[0],
    setSearch = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    showNew = _useState32[0],
    setShowNew = _useState32[1];
  var _useState33 = useState({
      name: '',
      contact_person: '',
      alipay: '',
      category: '',
      notes: ''
    }),
    _useState34 = _slicedToArray(_useState33, 2),
    newSupplier = _useState34[0],
    setNewSupplier = _useState34[1];
  var _useState35 = useState(null),
    _useState36 = _slicedToArray(_useState35, 2),
    editingId = _useState36[0],
    setEditingId = _useState36[1];
  var _useState37 = useState({}),
    _useState38 = _slicedToArray(_useState37, 2),
    editForm = _useState38[0],
    setEditForm = _useState38[1];
  var loadSuppliers = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var list, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            setLoading(true);
            _context5.p = 1;
            _context5.n = 2;
            return CLOUD.list('suppliers', {
              order: {
                col: 'name',
                asc: true
              },
              limit: 2000
            });
          case 2:
            list = _context5.v;
            setSuppliers(list || []);
            _context5.n = 4;
            break;
          case 3:
            _context5.p = 3;
            _t5 = _context5.v;
            toast('❌ 加载失败: ' + _t5.message);
          case 4:
            setLoading(false);
          case 5:
            return _context5.a(2);
        }
      }, _callee4, null, [[1, 3]]);
    }));
    return function loadSuppliers() {
      return _ref7.apply(this, arguments);
    };
  }();
  useEffect(function () {
    loadSuppliers();
  }, []);
  var handleCreate = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var payload, res;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (newSupplier.name.trim()) {
              _context6.n = 1;
              break;
            }
            alert('请填写供应商名');
            return _context6.a(2);
          case 1:
            if (!suppliers.some(function (s) {
              return s.name === newSupplier.name.trim();
            })) {
              _context6.n = 2;
              break;
            }
            alert("\u4F9B\u5E94\u5546 \"".concat(newSupplier.name.trim(), "\" \u5DF2\u5B58\u5728"));
            return _context6.a(2);
          case 2:
            payload = {
              name: newSupplier.name.trim(),
              contact_person: newSupplier.contact_person.trim() || null,
              alipay: newSupplier.alipay.trim() || null,
              category: newSupplier.category.trim() || null,
              notes: newSupplier.notes.trim() || '手动新增',
              active: true
            };
            _context6.n = 3;
            return CLOUD.upsert('suppliers', payload);
          case 3:
            res = _context6.v;
            if (res) {
              toast('✓ 已新增供应商');
              setNewSupplier({
                name: '',
                contact_person: '',
                alipay: '',
                category: '',
                notes: ''
              });
              setShowNew(false);
              loadSuppliers();
            } else {
              toast('❌ 新增失败');
            }
          case 4:
            return _context6.a(2);
        }
      }, _callee5);
    }));
    return function handleCreate() {
      return _ref8.apply(this, arguments);
    };
  }();
  var startEdit = function startEdit(s) {
    setEditingId(s.id);
    setEditForm(_objectSpread({}, s));
  };
  var saveEdit = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var _editForm$name;
      var payload, res;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            if ((_editForm$name = editForm.name) !== null && _editForm$name !== void 0 && _editForm$name.trim()) {
              _context7.n = 1;
              break;
            }
            alert('请填写供应商名');
            return _context7.a(2);
          case 1:
            payload = _objectSpread(_objectSpread({}, editForm), {}, {
              name: editForm.name.trim(),
              contact_person: (editForm.contact_person || '').trim() || null,
              alipay: (editForm.alipay || '').trim() || null,
              category: (editForm.category || '').trim() || null
            });
            _context7.n = 2;
            return CLOUD.upsert('suppliers', payload);
          case 2:
            res = _context7.v;
            if (res) {
              toast('✓ 已更新');
              setEditingId(null);
              loadSuppliers();
            } else {
              toast('❌ 更新失败');
            }
          case 3:
            return _context7.a(2);
        }
      }, _callee6);
    }));
    return function saveEdit() {
      return _ref9.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(s) {
      var ok;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            if (!(s.total_aftersales > 0)) {
              _context8.n = 3;
              break;
            }
            _context8.n = 1;
            return wsConfirm("\u4F9B\u5E94\u5546 \"".concat(s.name, "\" \u6709 ").concat(s.total_aftersales, " \u5355\u552E\u540E\u5386\u53F2\uFF0C\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F\n\n\u5EFA\u8BAE\u6539\u4E3A\u505C\u7528\u800C\u975E\u5220\u9664\u3002"));
          case 1:
            if (_context8.v) {
              _context8.n = 2;
              break;
            }
            return _context8.a(2);
          case 2:
            _context8.n = 5;
            break;
          case 3:
            _context8.n = 4;
            return wsConfirm("\u786E\u8BA4\u5220\u9664\u4F9B\u5E94\u5546 \"".concat(s.name, "\"\uFF1F"));
          case 4:
            if (_context8.v) {
              _context8.n = 5;
              break;
            }
            return _context8.a(2);
          case 5:
            _context8.n = 6;
            return CLOUD.del('suppliers', s.id);
          case 6:
            ok = _context8.v;
            if (ok) {
              toast('✓ 已删除');
              loadSuppliers();
            } else {
              toast('❌ 删除失败（可能有关联的售后/退款记录）');
            }
          case 7:
            return _context8.a(2);
        }
      }, _callee7);
    }));
    return function handleDelete(_x2) {
      return _ref0.apply(this, arguments);
    };
  }();
  var toggleActive = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(s) {
      var res;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            _context9.n = 1;
            return CLOUD.upsert('suppliers', _objectSpread(_objectSpread({}, s), {}, {
              active: !s.active
            }));
          case 1:
            res = _context9.v;
            if (res) {
              loadSuppliers();
              toast(s.active ? '✓ 已停用' : '✓ 已启用');
            }
          case 2:
            return _context9.a(2);
        }
      }, _callee8);
    }));
    return function toggleActive(_x3) {
      return _ref1.apply(this, arguments);
    };
  }();
  var filtered = useMemo(function () {
    if (!search.trim()) return suppliers;
    var q = search.toLowerCase();
    return suppliers.filter(function (s) {
      return (s.name || '').toLowerCase().includes(q) || (s.contact_person || '').toLowerCase().includes(q) || (s.alipay || '').toLowerCase().includes(q) || (s.category || '').toLowerCase().includes(q);
    });
  }, [suppliers, search]);
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-5"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14,
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 17,
      fontWeight: 600
    }
  }, "\uD83C\uDFED \u4F9B\u5E94\u5546\u7BA1\u7406"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "\u5171 ", suppliers.length, " \u5BB6\u4F9B\u5E94\u5546 \xB7 \u663E\u793A ", filtered.length, " \u5BB6", filtered.filter(function (s) {
    return !s.active;
  }).length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)'
    }
  }, " \xB7 ", filtered.filter(function (s) {
    return !s.active;
  }).length, " \u5BB6\u5DF2\u505C\u7528"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowFullInfo(function (v) {
        return !v;
      });
    },
    style: {
      padding: '5px 12px',
      fontSize: 12,
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'inherit',
      border: '1px solid var(--line)',
      background: showFullInfo ? '#e0f2fe' : 'white',
      color: showFullInfo ? '#0369a1' : 'var(--ink-2)'
    }
  }, showFullInfo ? '👁 隐藏收款信息' : '💳 显示收款信息'), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: loadSuppliers,
    style: {
      padding: '5px 12px',
      fontSize: 12
    }
  }, "\uD83D\uDD04 \u5237\u65B0"), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: function onClick() {
      return setShowNew(true);
    },
    style: {
      padding: '5px 14px',
      fontSize: 12
    }
  }, "+ \u65B0\u589E\u4F9B\u5E94\u5546"))), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u641C\u7D22\u4F9B\u5E94\u5546\u540D / \u6536\u6B3E\u4EBA / \u652F\u4ED8\u5B9D / \u7C7B\u522B...",
    style: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 13,
      marginBottom: 14
    }
  }), showNew && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      background: '#f0fdf4',
      border: '1px solid #86efac',
      borderRadius: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#14532d',
      marginBottom: 10
    }
  }, "+ \u65B0\u589E\u4F9B\u5E94\u5546"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: newSupplier.name,
    onChange: function onChange(e) {
      return setNewSupplier(_objectSpread(_objectSpread({}, newSupplier), {}, {
        name: e.target.value
      }));
    },
    placeholder: "\u4F9B\u5E94\u5546\u540D *\uFF08\u5982\uFF1A\u4E09\u6D2A\uFF09",
    style: {
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: newSupplier.contact_person,
    onChange: function onChange(e) {
      return setNewSupplier(_objectSpread(_objectSpread({}, newSupplier), {}, {
        contact_person: e.target.value
      }));
    },
    placeholder: "\u6536\u6B3E\u4EBA\u59D3\u540D",
    style: {
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: newSupplier.alipay,
    onChange: function onChange(e) {
      return setNewSupplier(_objectSpread(_objectSpread({}, newSupplier), {}, {
        alipay: e.target.value
      }));
    },
    placeholder: "\u652F\u4ED8\u5B9D\u8D26\u53F7\uFF08\u624B\u673A/\u90AE\u7BB1\uFF09",
    style: {
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: newSupplier.category,
    onChange: function onChange(e) {
      return setNewSupplier(_objectSpread(_objectSpread({}, newSupplier), {}, {
        category: e.target.value
      }));
    },
    placeholder: "\u4E3B\u8425\u7C7B\u522B\uFF08\u540A\u706F/\u5438\u9876/\u58C1\u706F...\uFF09",
    style: {
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  })), /*#__PURE__*/React.createElement("input", {
    value: newSupplier.notes,
    onChange: function onChange(e) {
      return setNewSupplier(_objectSpread(_objectSpread({}, newSupplier), {}, {
        notes: e.target.value
      }));
    },
    placeholder: "\u5907\u6CE8\uFF08\u9009\u586B\uFF09",
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: function onClick() {
      setShowNew(false);
      setNewSupplier({
        name: '',
        contact_person: '',
        alipay: '',
        category: '',
        notes: ''
      });
    },
    style: {
      padding: '5px 12px',
      fontSize: 12
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: handleCreate,
    style: {
      padding: '5px 14px',
      fontSize: 12
    }
  }, "\u2713 \u65B0\u589E"))), loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 30,
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, "\u23F3 \u52A0\u8F7D\u4E2D...") : filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 30,
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, "\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u4F9B\u5E94\u5546") : /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto",
    style: {
      maxHeight: 600,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      minWidth: showFullInfo ? '800px' : '600px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("thead", {
    style: {
      position: 'sticky',
      top: 0,
      background: 'var(--bg-elevated)',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: '36px'
    }
  }, "#"), /*#__PURE__*/React.createElement("th", {
    style: {
      minWidth: '160px'
    }
  }, "\u4F9B\u5E94\u5546\u540D"), showFullInfo && /*#__PURE__*/React.createElement("th", {
    style: {
      width: '120px'
    }
  }, "\u6536\u6B3E\u4EBA"), showFullInfo && /*#__PURE__*/React.createElement("th", {
    style: {
      width: '180px'
    }
  }, "\u652F\u4ED8\u5B9D"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '140px'
    }
  }, "\u4E3B\u8425\u7C7B\u522B"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '70px'
    }
  }, "\u552E\u540E\u6570"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '90px'
    }
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '160px'
    }
  }, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(function (s, idx) {
    return editingId === s.id ? /*#__PURE__*/React.createElement("tr", {
      key: s.id,
      style: {
        background: '#fef9c3'
      }
    }, /*#__PURE__*/React.createElement("td", null, idx + 1), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      value: editForm.name || '',
      onChange: function onChange(e) {
        return setEditForm(_objectSpread(_objectSpread({}, editForm), {}, {
          name: e.target.value
        }));
      },
      style: {
        width: '100%',
        padding: '4px 6px',
        fontSize: 12,
        border: '1px solid var(--line)',
        borderRadius: 4
      }
    })), showFullInfo && /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      value: editForm.contact_person || '',
      onChange: function onChange(e) {
        return setEditForm(_objectSpread(_objectSpread({}, editForm), {}, {
          contact_person: e.target.value
        }));
      },
      style: {
        width: '100%',
        padding: '4px 6px',
        fontSize: 12,
        border: '1px solid var(--line)',
        borderRadius: 4
      }
    })), showFullInfo && /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      value: editForm.alipay || '',
      onChange: function onChange(e) {
        return setEditForm(_objectSpread(_objectSpread({}, editForm), {}, {
          alipay: e.target.value
        }));
      },
      style: {
        width: '100%',
        padding: '4px 6px',
        fontSize: 12,
        border: '1px solid var(--line)',
        borderRadius: 4
      }
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("input", {
      value: editForm.category || '',
      onChange: function onChange(e) {
        return setEditForm(_objectSpread(_objectSpread({}, editForm), {}, {
          category: e.target.value
        }));
      },
      style: {
        width: '100%',
        padding: '4px 6px',
        fontSize: 12,
        border: '1px solid var(--line)',
        borderRadius: 4
      }
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12,
        textAlign: 'center'
      }
    }, s.total_aftersales || 0), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("label", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        fontSize: 11
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: editForm.active !== false,
      onChange: function onChange(e) {
        return setEditForm(_objectSpread(_objectSpread({}, editForm), {}, {
          active: e.target.checked
        }));
      }
    }), " \u542F\u7528")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn-pri",
      onClick: saveEdit,
      style: {
        padding: '3px 8px',
        fontSize: 11
      }
    }, "\u2713 \u4FDD\u5B58"), /*#__PURE__*/React.createElement("button", {
      className: "btn-sec",
      onClick: function onClick() {
        return setEditingId(null);
      },
      style: {
        padding: '3px 8px',
        fontSize: 11
      }
    }, "\u53D6\u6D88")))) : /*#__PURE__*/React.createElement("tr", {
      key: s.id,
      style: {
        opacity: s.active === false ? 0.5 : 1
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 11,
        color: 'var(--ink-4)'
      }
    }, idx + 1), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, s.name), showFullInfo && /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12,
        color: 'var(--ink-2)'
      }
    }, s.contact_person || '-'), showFullInfo && /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        fontFamily: 'monospace'
      }
    }, s.alipay || '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12,
        color: 'var(--ink-3)'
      }
    }, s.category || '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12,
        textAlign: 'center',
        color: s.total_aftersales > 10 ? '#dc2626' : 'var(--ink-3)',
        fontWeight: s.total_aftersales > 0 ? 600 : 400
      }
    }, s.total_aftersales || 0), /*#__PURE__*/React.createElement("td", null, isAdmin ? /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return toggleActive(s);
      },
      style: {
        padding: '2px 8px',
        fontSize: 10,
        fontWeight: 600,
        borderRadius: 10,
        cursor: 'pointer',
        fontFamily: 'inherit',
        background: s.active !== false ? '#dcfce7' : '#f5f5f5',
        color: s.active !== false ? '#15803d' : '#666',
        border: '1px solid ' + (s.active !== false ? '#86efac' : '#ddd')
      }
    }, s.active !== false ? '● 启用' : '○ 停用') : /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        fontSize: 10,
        fontWeight: 600,
        borderRadius: 10,
        fontFamily: 'inherit',
        background: s.active !== false ? '#dcfce7' : '#f5f5f5',
        color: s.active !== false ? '#15803d' : '#666',
        border: '1px solid ' + (s.active !== false ? '#86efac' : '#ddd')
      }
    }, s.active !== false ? '● 启用' : '○ 停用')), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return startEdit(s);
      },
      style: {
        padding: '4px 10px',
        fontSize: 11,
        background: '#e0f2fe',
        color: '#0369a1',
        border: '1px solid #7dd3fc',
        borderRadius: 5,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: 600
      },
      title: "\u7F16\u8F91\u4F9B\u5E94\u5546\u4FE1\u606F"
    }, "\u270F\uFE0F \u7F16\u8F91"), isAdmin && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return handleDelete(s);
      },
      style: {
        padding: '4px 10px',
        fontSize: 11,
        background: '#fef2f2',
        color: '#dc2626',
        border: '1px solid #fca5a5',
        borderRadius: 5,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: 600
      },
      title: "\u5220\u9664\u4F9B\u5E94\u5546\uFF08\u4EC5\u4E3B\u7BA1\u53EF\u89C1 \xB7 \u4E0D\u53EF\u6062\u590D\uFF09",
      onMouseEnter: function onMouseEnter(e) {
        e.currentTarget.style.background = '#dc2626';
        e.currentTarget.style.color = 'white';
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.background = '#fef2f2';
        e.currentTarget.style.color = '#dc2626';
      }
    }, "\uD83D\uDDD1 \u5220\u9664"))));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: 10,
      background: '#f0f9ff',
      border: '1px solid #bae6fd',
      borderRadius: 8,
      fontSize: 11,
      color: '#075985'
    }
  }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("strong", null, "\u8BF4\u660E\uFF1A"), " \u6240\u6709\u5BA2\u670D\u90FD\u53EF\u4EE5\u65B0\u589E\u548C\u7F16\u8F91\u4F9B\u5E94\u5546\uFF0C\u5220\u9664/\u505C\u7528\u529F\u80FD\u4EC5\u4E3B\u7BA1\u53EF\u7528\uFF08\u4FDD\u62A4\u5386\u53F2\u6570\u636E\u5B8C\u6574\u6027\uFF09\u3002\u6240\u6709\u5BA2\u670D\u5728\u300C\uD83D\uDCCB \u5DE5\u4F5C\u4E3B\u7EBF\u300D\u521B\u5EFA\u4E8B\u4EF6\u65F6\u90FD\u80FD\u5728\u4E0B\u62C9\u4E2D\u641C\u7D22\u5230\u4F9B\u5E94\u5546\u3002"));
};
var CloudSettingsCard = function CloudSettingsCard(_ref10) {
  var cfg = _ref10.cfg,
    setCfg = _ref10.setCfg,
    toast = _ref10.toast,
    onApply = _ref10.onApply;
  var _useState39 = useState(cfg.url || DEFAULT_SB_URL),
    _useState40 = _slicedToArray(_useState39, 2),
    url = _useState40[0],
    setUrl = _useState40[1];
  var _useState41 = useState(cfg.key || ''),
    _useState42 = _slicedToArray(_useState41, 2),
    key = _useState42[0],
    setKey = _useState42[1];
  var _useState43 = useState(cfg.enabled || false),
    _useState44 = _slicedToArray(_useState43, 2),
    enabled = _useState44[0],
    setEnabled = _useState44[1];
  var _useState45 = useState(false),
    _useState46 = _slicedToArray(_useState45, 2),
    testing = _useState46[0],
    setTesting = _useState46[1];
  var _useState47 = useState(null),
    _useState48 = _slicedToArray(_useState47, 2),
    testResult = _useState48[0],
    setTestResult = _useState48[1];
  var handleTest = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var ok, res;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            setTesting(true);
            setTestResult(null);
            ok = CLOUD.init(url.trim(), key.trim());
            if (ok) {
              _context0.n = 1;
              break;
            }
            setTestResult({
              ok: false,
              msg: CLOUD.lastError || '初始化失败'
            });
            setTesting(false);
            return _context0.a(2);
          case 1:
            _context0.n = 2;
            return CLOUD.ping();
          case 2:
            res = _context0.v;
            setTestResult(res);
            setTesting(false);
          case 3:
            return _context0.a(2);
        }
      }, _callee9);
    }));
    return function handleTest() {
      return _ref11.apply(this, arguments);
    };
  }();
  var handleSave = function handleSave() {
    var nextCfg = {
      url: url.trim(),
      key: key.trim(),
      enabled: enabled
    };
    STORE.set('cloud_config', nextCfg);
    setCfg(nextCfg);
    if (enabled && url && key) {
      var ok = CLOUD.init(url.trim(), key.trim());
      if (ok) toast('☁ 云同步已启用');else toast('⚠ 云同步配置错误');
    } else {
      CLOUD.client = null;
      CLOUD.enabled = false;
      CLOUD.status = 'local';
      toast('已切换为本地模式');
    }
    onApply();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-5 mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-base font-bold",
    style: {
      color: 'var(--accent)'
    }
  }, "\u2601 \u4E91\u540C\u6B65\u8BBE\u7F6E"), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] mt-1",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u542F\u7528\u540E\u5BA2\u670D\u8BB0\u5F55\u3001\u62A5\u4EF7\u5355\u3001\u6C47\u62A5\u5DE5\u5355\u3001\u77E5\u8BC6\u5E93\u5747\u5728 Supabase \u4E91\u7AEF\u534F\u540C")), /*#__PURE__*/React.createElement("span", {
    className: "cloud-status ".concat(CLOUD.status)
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), CLOUD.status === 'ok' ? '已连接' : CLOUD.status === 'err' ? '错误' : '本地模式')), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[10px] font-bold uppercase",
    style: {
      color: 'var(--ink-3)'
    }
  }, "Supabase URL"), /*#__PURE__*/React.createElement("input", {
    value: url,
    onChange: function onChange(e) {
      return setUrl(e.target.value);
    },
    placeholder: "https://xxx.supabase.co",
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 12
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[10px] font-bold uppercase",
    style: {
      color: 'var(--ink-3)'
    }
  }, "Anon / Publishable Key"), /*#__PURE__*/React.createElement("input", {
    value: key,
    onChange: function onChange(e) {
      return setKey(e.target.value);
    },
    placeholder: "sb_publishable_xxx \u6216 eyJ...",
    style: {
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 12
    },
    type: "password"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between"
  }, /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 cursor-pointer text-sm"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: enabled,
    onChange: function onChange(e) {
      return setEnabled(e.target.checked);
    }
  }), "\u542F\u7528\u4E91\u540C\u6B65\uFF08\u5173\u95ED\u540E\u6240\u6709\u64CD\u4F5C\u4EC5\u672C\u5730\uFF09"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-sec text-xs",
    onClick: handleTest,
    disabled: testing || !url || !key
  }, testing ? '测试中...' : '🔌 测试连接'), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri text-xs",
    onClick: handleSave
  }, "\uD83D\uDCBE \u4FDD\u5B58\u5E76\u5E94\u7528"))), testResult && /*#__PURE__*/React.createElement("div", {
    className: "p-2 rounded text-xs ".concat(testResult.ok ? 'tag-good' : 'tag-warn'),
    style: {
      background: testResult.ok ? '#dcfce7' : '#fee2e2',
      color: testResult.ok ? '#166534' : '#991b1b'
    }
  }, testResult.ok ? '✓ ' : '✗ ', testResult.msg), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] rounded p-2",
    style: {
      background: 'var(--bg)',
      color: 'var(--ink-3)',
      lineHeight: 1.65
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\uD83D\uDCCB \u9996\u6B21\u4F7F\u7528\u6B65\u9AA4\uFF1A"), /*#__PURE__*/React.createElement("ol", {
    style: {
      listStyle: 'decimal',
      paddingLeft: 18,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("li", null, "\u5728 Supabase \u4EEA\u8868\u677F \u2192 SQL Editor \u8FD0\u884C\u9644\u5E26\u7684 ", /*#__PURE__*/React.createElement("code", null, "supabase_init.sql")), /*#__PURE__*/React.createElement("li", null, "\u628A ", /*#__PURE__*/React.createElement("code", null, "knowledge_base.json"), " \u5BFC\u5165 ", /*#__PURE__*/React.createElement("code", null, "workspace_kb"), " \u8868\uFF08\u8BE6\u89C1 SQL \u672B\u5C3E\u8BF4\u660E\uFF09"), /*#__PURE__*/React.createElement("li", null, "\u5728\u6B64\u586B\u5165 URL + Publishable Key \u2192 \u6D4B\u8BD5\u8FDE\u63A5 \u2192 \u4FDD\u5B58"), /*#__PURE__*/React.createElement("li", null, "\u56E2\u961F\u6210\u5458\u53EA\u9700\u590D\u5236\u672C HTML + \u5728\u6B64\u586B\u540C\u6837\u914D\u7F6E\u5373\u53EF\u5171\u4EAB\u6570\u636E")))));
};

// ============================================================
// 🆕 fix10: 左侧导航栏 (IDE 风格)
// 显示 layoutPrefs.topKeys 之外的所有 tabs,按 group 分区
// 可折叠到 icon-only 模式(52px 宽)
// ============================================================
var NavSidebar = function NavSidebar(_ref12) {
  var tabs = _ref12.tabs,
    activeTab = _ref12.activeTab,
    setActiveTab = _ref12.setActiveTab,
    collapsed = _ref12.collapsed,
    onToggleCollapse = _ref12.onToggleCollapse,
    onOpenCustomize = _ref12.onOpenCustomize;
  // 🆕 fix18: 自动按点击次数排序 (常用功能浮到组内顶部)
  // localStorage key: 'cs_tab_usage' = { tabKey: clickCount, ... }
  var _useState49 = useState(function () {
      try {
        var raw = localStorage.getItem('cs_tab_usage');
        return raw ? JSON.parse(raw) : {};
      } catch (_unused) {
        return {};
      }
    }),
    _useState50 = _slicedToArray(_useState49, 2),
    usage = _useState50[0],
    setUsage = _useState50[1];
  var _useState51 = useState(function () {
      try {
        return localStorage.getItem('cs_tab_autosort') !== 'off';
      } // 默认开
      catch (_unused2) {
        return true;
      }
    }),
    _useState52 = _slicedToArray(_useState51, 2),
    autoSort = _useState52[0],
    setAutoSort = _useState52[1];

  // 点击计数 (在 setActiveTab 调用之前调一次)
  var recordClick = function recordClick(tabKey) {
    setUsage(function (prev) {
      var next = _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, tabKey, (prev[tabKey] || 0) + 1));
      try {
        localStorage.setItem('cs_tab_usage', JSON.stringify(next));
      } catch (_unused3) {}
      return next;
    });
  };
  var toggleAutoSort = function toggleAutoSort() {
    setAutoSort(function (v) {
      var next = !v;
      try {
        localStorage.setItem('cs_tab_autosort', next ? 'on' : 'off');
      } catch (_unused4) {}
      return next;
    });
  };

  // 按分组拆开 — 如果开启自动排序,按 usage 降序
  var grouped = useMemo(function () {
    var m = {
      main: [],
      resources: [],
      collab: [],
      admin: []
    };
    // 保留原始顺序索引,用于平局时稳定排序
    var origIdx = {};
    tabs.forEach(function (t, i) {
      origIdx[t.key] = i;
    });
    tabs.forEach(function (t) {
      if (m[t.group]) m[t.group].push(t);
    });
    if (autoSort) {
      Object.keys(m).forEach(function (g) {
        m[g] = _toConsumableArray(m[g]).sort(function (a, b) {
          var ua = usage[a.key] || 0;
          var ub = usage[b.key] || 0;
          if (ua !== ub) return ub - ua; // 点击多的在前
          return origIdx[a.key] - origIdx[b.key]; // 平局按原始顺序
        });
      });
    }
    return m;
  }, [tabs, autoSort, usage]);
  var groupTitles = {
    main: '📌 主功能',
    resources: '📚 资源工具',
    collab: '💬 协作',
    admin: '⚙ 管理'
  };
  var width = collapsed ? 56 : 200;
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: width,
      flexShrink: 0,
      borderRight: '1px solid var(--line)',
      background: 'rgba(251,251,253,.7)',
      backdropFilter: 'saturate(180%) blur(10px)',
      WebkitBackdropFilter: 'saturate(180%) blur(10px)',
      transition: 'width .2s ease',
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'flex-start',
      position: 'sticky',
      top: 56,
      maxHeight: 'calc(100vh - 56px)',
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 8px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: collapsed ? 'center' : 'space-between',
      alignItems: 'center',
      gap: 4
    }
  }, !collapsed && /*#__PURE__*/React.createElement("button", {
    onClick: toggleAutoSort,
    title: autoSort ? '当前按使用频率自动排序 · 点击关闭' : '当前按原始顺序 · 点击启用自动排序',
    style: {
      padding: '4px 8px',
      background: autoSort ? 'var(--accent-soft)' : 'transparent',
      border: '1px solid ' + (autoSort ? 'var(--accent)' : 'var(--line)'),
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 10,
      color: autoSort ? 'var(--accent)' : 'var(--ink-3)',
      fontFamily: 'inherit',
      fontWeight: autoSort ? 600 : 400
    }
  }, autoSort ? '⭐ 自动排序' : '☐ 自动排序'), /*#__PURE__*/React.createElement("button", {
    onClick: onToggleCollapse,
    title: collapsed ? '展开侧边栏' : '折叠侧边栏',
    style: {
      padding: '4px 8px',
      background: 'transparent',
      border: '1px solid var(--line)',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      color: 'var(--ink-3)',
      fontFamily: 'inherit'
    }
  }, collapsed ? '▶' : '◀ 折叠')), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '8px 6px'
    }
  }, ['main', 'resources', 'collab', 'admin'].map(function (g) {
    var items = grouped[g];
    if (!items || items.length === 0) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: g,
      style: {
        marginBottom: 12
      }
    }, !collapsed && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        color: 'var(--ink-4)',
        padding: '4px 8px',
        marginBottom: 2,
        letterSpacing: '.5px'
      }
    }, groupTitles[g]), collapsed && g !== 'main' && /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid var(--line)',
        margin: '4px 8px'
      }
    }), items.map(function (t) {
      var isActive = activeTab === t.key;
      return /*#__PURE__*/React.createElement("a", {
        key: t.key,
        href: "#tab=".concat(t.key),
        onClick: function onClick(e) {
          // 🆕 fix11: 让 ctrl/cmd/shift/中键走浏览器默认 → 右键也能"新标签打开"
          if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return;
          e.preventDefault();
          recordClick(t.key); // 🆕 fix18: 记录点击,自动排序据此
          setActiveTab(t.key);
        },
        title: collapsed ? t.label.replace(/^.\s*/, '') : undefined,
        style: {
          width: '100%',
          padding: collapsed ? '8px 0' : '7px 10px',
          marginBottom: 2,
          display: 'flex',
          alignItems: 'center',
          gap: collapsed ? 0 : 8,
          justifyContent: collapsed ? 'center' : 'flex-start',
          background: isActive ? 'var(--accent-soft)' : 'transparent',
          color: isActive ? 'var(--accent)' : 'var(--ink-2)',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 12.5,
          fontWeight: isActive ? 600 : 500,
          position: 'relative',
          textAlign: 'left',
          textDecoration: 'none',
          transition: 'background .12s, color .12s',
          boxSizing: 'border-box'
        },
        onMouseEnter: function onMouseEnter(e) {
          if (!isActive) e.currentTarget.style.background = 'var(--bg-elevated)';
        },
        onMouseLeave: function onMouseLeave(e) {
          if (!isActive) e.currentTarget.style.background = 'transparent';
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 16,
          flexShrink: 0,
          lineHeight: 1
        }
      }, t.icon), !collapsed && /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }, t.label.replace(/^.\s*/, '').trim()), t.badge > 0 && /*#__PURE__*/React.createElement("span", {
        style: {
          position: collapsed ? 'absolute' : 'static',
          top: collapsed ? 3 : undefined,
          right: collapsed ? 3 : undefined,
          minWidth: 16,
          height: 16,
          padding: '0 4px',
          background: t.badgeColor || 'var(--bad)',
          color: 'white',
          borderRadius: 8,
          fontSize: 9,
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          lineHeight: 1,
          flexShrink: 0
        }
      }, t.badge));
    }));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 6px',
      borderTop: '1px solid var(--line)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onOpenCustomize,
    title: collapsed ? '自定义导航布局' : undefined,
    style: {
      width: '100%',
      padding: collapsed ? '8px 0' : '8px 10px',
      display: 'flex',
      alignItems: 'center',
      gap: collapsed ? 0 : 8,
      justifyContent: collapsed ? 'center' : 'flex-start',
      background: 'transparent',
      color: 'var(--ink-3)',
      border: '1px dashed var(--line)',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 12,
      fontWeight: 500
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      flexShrink: 0
    }
  }, "\u2699"), !collapsed && /*#__PURE__*/React.createElement("span", null, "\u81EA\u5B9A\u4E49\u5E03\u5C40"))));
};

// ============================================================
// 🆕 fix10: 自定义布局弹窗 — 选哪些 tab 钉到顶部 + 拖动排序
// ============================================================
var LayoutCustomizeModal = function LayoutCustomizeModal(_ref13) {
  var allTabs = _ref13.allTabs,
    layoutPrefs = _ref13.layoutPrefs,
    defaultTopKeys = _ref13.defaultTopKeys,
    onSave = _ref13.onSave,
    onClose = _ref13.onClose;
  var _useState53 = useState(layoutPrefs.topKeys || defaultTopKeys),
    _useState54 = _slicedToArray(_useState53, 2),
    topKeys = _useState54[0],
    setTopKeys = _useState54[1];
  // 🆕 fix28: 侧栏自定义顺序(用户拖动后的) — 默认 null = 用 allTabs 原顺序
  var _useState55 = useState(layoutPrefs.sidebarOrder || []),
    _useState56 = _slicedToArray(_useState55, 2),
    sidebarOrder = _useState56[0],
    setSidebarOrder = _useState56[1];
  var toggleTop = function toggleTop(key) {
    setTopKeys(function (prev) {
      return prev.includes(key) ? prev.filter(function (k) {
        return k !== key;
      }) : [].concat(_toConsumableArray(prev), [key]);
    });
  };
  var moveUp = function moveUp(key) {
    setTopKeys(function (prev) {
      var idx = prev.indexOf(key);
      if (idx <= 0) return prev;
      var next = _toConsumableArray(prev);
      var _ref14 = [next[idx], next[idx - 1]];
      next[idx - 1] = _ref14[0];
      next[idx] = _ref14[1];
      return next;
    });
  };
  var moveDown = function moveDown(key) {
    setTopKeys(function (prev) {
      var idx = prev.indexOf(key);
      if (idx === -1 || idx >= prev.length - 1) return prev;
      var next = _toConsumableArray(prev);
      var _ref15 = [next[idx], next[idx + 1]];
      next[idx + 1] = _ref15[0];
      next[idx] = _ref15[1];
      return next;
    });
  };

  // 🆕 fix28: 下方"其他功能"区的 ↑↓ 排序(同组内交换)
  var moveOtherUp = function moveOtherUp(key, group) {
    setSidebarOrder(function (prev) {
      var _otherItemsByGroup$gr;
      // 当前同组的所有 key (按 otherItemsByGroup 实际顺序)
      var groupKeys = ((_otherItemsByGroup$gr = otherItemsByGroup[group]) === null || _otherItemsByGroup$gr === void 0 ? void 0 : _otherItemsByGroup$gr.map(function (t) {
        return t.key;
      })) || [];
      var idx = groupKeys.indexOf(key);
      if (idx <= 0) return prev;
      // 交换组内位置
      var newGroupKeys = _toConsumableArray(groupKeys);
      // 合并到全局 sidebarOrder:其他组的 key 保留,该组用新顺序
      var _ref16 = [newGroupKeys[idx], newGroupKeys[idx - 1]];
      newGroupKeys[idx - 1] = _ref16[0];
      newGroupKeys[idx] = _ref16[1];
      var otherGroupKeys = otherItems.filter(function (t) {
        return t.group !== group;
      }).map(function (t) {
        return t.key;
      });
      // 把所有组的 key 按 ['main','resources','collab','admin'] 顺序串起来
      var all = [];
      ['main', 'resources', 'collab', 'admin'].forEach(function (g) {
        if (g === group) all.push.apply(all, _toConsumableArray(newGroupKeys));else all.push.apply(all, _toConsumableArray(otherItems.filter(function (t) {
          return t.group === g;
        }).map(function (t) {
          return t.key;
        })));
      });
      return all;
    });
  };
  var moveOtherDown = function moveOtherDown(key, group) {
    setSidebarOrder(function (prev) {
      var _otherItemsByGroup$gr2;
      var groupKeys = ((_otherItemsByGroup$gr2 = otherItemsByGroup[group]) === null || _otherItemsByGroup$gr2 === void 0 ? void 0 : _otherItemsByGroup$gr2.map(function (t) {
        return t.key;
      })) || [];
      var idx = groupKeys.indexOf(key);
      if (idx === -1 || idx >= groupKeys.length - 1) return prev;
      var newGroupKeys = _toConsumableArray(groupKeys);
      var _ref17 = [newGroupKeys[idx], newGroupKeys[idx + 1]];
      newGroupKeys[idx + 1] = _ref17[0];
      newGroupKeys[idx] = _ref17[1];
      var all = [];
      ['main', 'resources', 'collab', 'admin'].forEach(function (g) {
        if (g === group) all.push.apply(all, _toConsumableArray(newGroupKeys));else all.push.apply(all, _toConsumableArray(otherItems.filter(function (t) {
          return t.group === g;
        }).map(function (t) {
          return t.key;
        })));
      });
      return all;
    });
  };
  var reset = function reset() {
    setTopKeys(defaultTopKeys);
    setSidebarOrder([]);
  };
  var save = function save() {
    onSave({
      topKeys: topKeys,
      sidebarOrder: sidebarOrder
    });
    onClose();
  };

  // 🆕 fix77: HTML5 拖拽 — 上下拖动调整位置
  var _useState57 = useState(null),
    _useState58 = _slicedToArray(_useState57, 2),
    dragKey = _useState58[0],
    setDragKey = _useState58[1];
  var reorderTop = function reorderTop(src, target) {
    if (!src || src === target) return;
    setTopKeys(function (prev) {
      var without = prev.filter(function (k) {
        return k !== src;
      });
      var ti = without.indexOf(target);
      if (ti === -1) return prev;
      var next = [].concat(_toConsumableArray(without.slice(0, ti)), [src], _toConsumableArray(without.slice(ti)));
      return next;
    });
  };
  var reorderOther = function reorderOther(src, target, group) {
    var _otherItemsByGroup$gr3;
    if (!src || src === target) return;
    var groupKeys = ((_otherItemsByGroup$gr3 = otherItemsByGroup[group]) === null || _otherItemsByGroup$gr3 === void 0 ? void 0 : _otherItemsByGroup$gr3.map(function (t) {
      return t.key;
    })) || [];
    var without = groupKeys.filter(function (k) {
      return k !== src;
    });
    var ti = without.indexOf(target);
    if (ti === -1) return;
    var newGroupKeys = [].concat(_toConsumableArray(without.slice(0, ti)), [src], _toConsumableArray(without.slice(ti)));
    var all = [];
    ['main', 'resources', 'collab', 'admin'].forEach(function (g) {
      if (g === group) all.push.apply(all, _toConsumableArray(newGroupKeys));else all.push.apply(all, _toConsumableArray(otherItems.filter(function (t) {
        return t.group === g;
      }).map(function (t) {
        return t.key;
      })));
    });
    setSidebarOrder(all);
  };
  var dragRowProps = function dragRowProps(key, onDropFn) {
    return {
      draggable: true,
      onDragStart: function onDragStart(e) {
        setDragKey(key);
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', key);
      },
      onDragOver: function onDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
      },
      onDrop: function onDrop(e) {
        e.preventDefault();
        var src = dragKey || e.dataTransfer.getData('text/plain');
        if (src && src !== key) onDropFn(src, key);
        setDragKey(null);
      },
      onDragEnd: function onDragEnd() {
        return setDragKey(null);
      },
      style: {
        cursor: 'grab',
        userSelect: 'none'
      }
    };
  };

  // 当前选中的(按顺序) + 未选中的(按分组)
  var topItems = topKeys.map(function (k) {
    return allTabs.find(function (t) {
      return t.key === k;
    });
  }).filter(Boolean);
  // 🆕 fix28: otherItems 按 sidebarOrder 排序 (没在 order 里的项追加到末尾)
  var otherItems = useMemo(function () {
    var nonPinned = allTabs.filter(function (t) {
      return !topKeys.includes(t.key);
    });
    if (!sidebarOrder || sidebarOrder.length === 0) return nonPinned;
    var orderMap = new Map(sidebarOrder.map(function (k, i) {
      return [k, i];
    }));
    return _toConsumableArray(nonPinned).sort(function (a, b) {
      var ia = orderMap.has(a.key) ? orderMap.get(a.key) : 99999;
      var ib = orderMap.has(b.key) ? orderMap.get(b.key) : 99999;
      return ia - ib;
    });
  }, [allTabs, topKeys, sidebarOrder]);

  // 🆕 fix28: 按 group 预分组,用于 ↑↓ 内部排序计算
  var otherItemsByGroup = useMemo(function () {
    var map = {};
    otherItems.forEach(function (t) {
      if (!map[t.group]) map[t.group] = [];
      map[t.group].push(t);
    });
    return map;
  }, [otherItems]);
  var groupTitles = {
    main: '主功能',
    resources: '资源工具',
    collab: '协作',
    admin: '管理'
  };
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.5)',
      zIndex: 100000,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '5vh 20px',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 14,
      width: '100%',
      maxWidth: 660,
      boxShadow: '0 20px 60px rgba(0,0,0,.25)',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '90vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "\u2699 \u81EA\u5B9A\u4E49\u5BFC\u822A\u5E03\u5C40"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, "\u6BCF\u4E2A\u5458\u5DE5\u72EC\u7ACB\u914D\u7F6E \xB7 \u81EA\u52A8\u4FDD\u5B58")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18,
      color: 'var(--ink-3)',
      padding: 0,
      width: 28,
      height: 28
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      overflowY: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: '#eff6ff',
      border: '1px solid #bfdbfe',
      borderRadius: 8,
      fontSize: 12,
      color: '#1e40af',
      marginBottom: 14,
      lineHeight: 1.6
    }
  }, "\uD83D\uDCA1 \u9009\u4E2D\u7684\u529F\u80FD\"\u9489\"\u5728", /*#__PURE__*/React.createElement("strong", null, "\u9876\u90E8\u5BFC\u822A\u680F"), "(\u65E5\u5E38\u5207\u6362\u6700\u5FEB) \u2014 \u672A\u9009\u4E2D\u7684\u4F1A\u51FA\u73B0\u5728", /*#__PURE__*/React.createElement("strong", null, "\u5DE6\u4FA7\u4FA7\u8FB9\u680F"), "(\u6309\u5206\u7EC4\u5206\u7C7B)\u3002", /*#__PURE__*/React.createElement("br", null), "\uD83D\uDDB1 ", /*#__PURE__*/React.createElement("strong", null, "\u6293\u4F4F\u6BCF\u884C\u5DE6\u4FA7\u7684 \u22EE\u22EE \u4E0A\u4E0B\u62D6\u52A8"), "\u8C03\u6574\u4F4D\u7F6E \xB7 \u5EFA\u8BAE\u9876\u90E8\u653E ", /*#__PURE__*/React.createElement("strong", null, "3~6 \u4E2A"), "\u6700\u5E38\u7528\u7684,\u8FC7\u591A\u4F1A\u62E5\u6324\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--ink-2)'
    }
  }, "\uD83D\uDCCC \u9876\u90E8\u5BFC\u822A (", topItems.length, " \u4E2A)", topItems.length > 6 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#d97706',
      marginLeft: 6,
      fontSize: 10
    }
  }, "\xB7 \u7565\u591A,\u5EFA\u8BAE\u7CBE\u7B80")), /*#__PURE__*/React.createElement("button", {
    onClick: reset,
    style: {
      padding: '3px 10px',
      background: 'transparent',
      border: '1px solid var(--line)',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      color: 'var(--ink-3)',
      fontFamily: 'inherit'
    }
  }, "\u21BB \u6062\u590D\u9ED8\u8BA4")), topItems.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      background: '#fafaf7',
      borderRadius: 8,
      fontSize: 12,
      color: 'var(--ink-4)',
      textAlign: 'center',
      marginBottom: 16
    }
  }, "\u9876\u90E8\u8FD8\u6CA1\u9489\u4EFB\u4F55\u529F\u80FD \u2014 \u4ECE\u4E0B\u9762\"\u5168\u90E8\u529F\u80FD\"\u5217\u8868\u91CC\u70B9 \uD83D\uDCCC \u9489\u4E00\u4E2A") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      marginBottom: 16
    }
  }, topItems.map(function (t, i) {
    var drag = dragRowProps(t.key, reorderTop);
    var isDragging = dragKey === t.key;
    return /*#__PURE__*/React.createElement("div", _extends({
      key: t.key
    }, drag, {
      style: _objectSpread({
        padding: '7px 10px',
        background: 'var(--accent-soft)',
        border: '1px solid var(--accent)',
        borderRadius: 7,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        opacity: isDragging ? 0.35 : 1
      }, drag.style)
    }), /*#__PURE__*/React.createElement("span", {
      title: "\u62D6\u52A8\u8C03\u6574\u987A\u5E8F",
      style: {
        color: 'var(--accent)',
        fontSize: 14,
        lineHeight: 1,
        cursor: 'grab',
        padding: '0 3px'
      }
    }, "\u22EE\u22EE"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--accent)',
        fontWeight: 600,
        width: 18,
        textAlign: 'center'
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        lineHeight: 1
      }
    }, t.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 13,
        color: 'var(--accent)',
        fontWeight: 600
      }
    }, t.label.replace(/^.\s*/, '').trim()), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return toggleTop(t.key);
      },
      title: "\u79FB\u56DE\u4FA7\u8FB9\u680F",
      style: {
        padding: '2px 9px',
        background: 'white',
        border: '1px solid var(--line)',
        borderRadius: 4,
        cursor: 'pointer',
        fontSize: 11,
        color: 'var(--ink-3)',
        fontFamily: 'inherit'
      }
    }, "\u2197 \u79FB\u8D70"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, "\uD83D\uDCDA \u5176\u4ED6\u529F\u80FD (\u5C06\u51FA\u73B0\u5728\u5DE6\u4FA7\u680F)"), ['main', 'resources', 'collab', 'admin'].map(function (grp) {
    var items = otherItemsByGroup[grp] || [];
    if (items.length === 0) return null;
    return /*#__PURE__*/React.createElement("div", {
      key: grp,
      style: {
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        fontWeight: 700,
        color: 'var(--ink-4)',
        marginBottom: 4,
        paddingLeft: 2,
        letterSpacing: '.5px'
      }
    }, groupTitles[grp]), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }
    }, items.map(function (t, idx) {
      var drag = dragRowProps(t.key, function (s, target) {
        return reorderOther(s, target, grp);
      });
      var isDragging = dragKey === t.key;
      return /*#__PURE__*/React.createElement("div", _extends({
        key: t.key
      }, drag, {
        style: _objectSpread({
          padding: '7px 10px',
          background: 'white',
          border: '1px solid var(--line)',
          borderRadius: 7,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          opacity: isDragging ? 0.35 : 1
        }, drag.style)
      }), /*#__PURE__*/React.createElement("span", {
        title: "\u62D6\u52A8\u8C03\u6574\u987A\u5E8F",
        style: {
          color: 'var(--ink-4)',
          fontSize: 14,
          lineHeight: 1,
          cursor: 'grab',
          padding: '0 3px'
        }
      }, "\u22EE\u22EE"), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 15,
          lineHeight: 1
        }
      }, t.icon), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          fontSize: 13,
          color: 'var(--ink)'
        }
      }, t.label.replace(/^.\s*/, '').trim()), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return toggleTop(t.key);
        },
        style: {
          padding: '4px 10px',
          background: 'var(--accent)',
          color: 'white',
          border: 'none',
          borderRadius: 5,
          cursor: 'pointer',
          fontSize: 11,
          fontFamily: 'inherit',
          fontWeight: 600
        }
      }, "\uD83D\uDCCC \u9489\u5230\u9876\u90E8"));
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 22px',
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0,
      background: '#fafafa'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-4)'
    }
  }, "\u8BBE\u7F6E\u4FDD\u5B58\u5230\u672C\u5730\u6D4F\u89C8\u5668 \xB7 \u6BCF\u4E2A\u5458\u5DE5\u72EC\u7ACB"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      padding: '7px 16px',
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 7,
      cursor: 'pointer',
      fontSize: 13,
      fontFamily: 'inherit'
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: save,
    style: {
      padding: '7px 18px',
      background: '#0071e3',
      color: 'white',
      border: 'none',
      borderRadius: 7,
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\u2713 \u4FDD\u5B58"))))), document.body);
};

// ============================================================
// 🤖 fix9c: AI 评价生成 — iframe 嵌入美工系统的 cs-reviews 精简模式
// 跟客服系统完全无关联,只是把美工 worktrack-kpi 上已发布的工具嵌进来用
// URL 必须含 ?embed=cs-reviews 让美工那边进入嵌入模式(隐藏顶部 nav 等)
// 同时传 cs_user_id / cs_user_name / cs_user_alias,美工那边用这个身份记操作日志
// ============================================================
var AiReviewsIframeModule = function AiReviewsIframeModule(_ref18) {
  var user = _ref18.user;
  var iframeSrc = "https://dekorfine.github.io/worktrack-kpi/?embed=cs-reviews&cs_user_id=".concat(encodeURIComponent(user.id || 'cs_unknown'), "&cs_user_name=").concat(encodeURIComponent((user.name || '客服') + (user.alias ? ' ' + user.alias : '')), "&cs_user_alias=").concat(encodeURIComponent(user.alias || ''));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'calc(100vh - 110px)',
      background: '#fff',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid rgba(0,0,0,.085)'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    src: iframeSrc,
    style: {
      width: '100%',
      height: '100%',
      border: 'none',
      display: 'block'
    },
    title: "AI \u8BC4\u4EF7\u751F\u6210\u5DE5\u5177",
    allow: "clipboard-read; clipboard-write",
    sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-downloads allow-modals allow-popups-to-escape-sandbox"
  }));
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix57: 📧 邮件模板库
// 15 个跨境电商灯具高频场景预置 + 自定义模板 + 一键复制
// 占位符:{{customer_name}} {{order_no}} {{product_name}} {{tracking_no}} 等
// ════════════════════════════════════════════════════════════════════
var EmailTemplatesModule = function EmailTemplatesModule(_ref19) {
  var user = _ref19.user,
    toast = _ref19.toast;
  var _useState59 = useState(function () {
      try {
        return JSON.parse(localStorage.getItem('email_templates_custom') || '[]');
      } catch (_unused5) {
        return [];
      }
    }),
    _useState60 = _slicedToArray(_useState59, 2),
    customTpls = _useState60[0],
    setCustomTpls = _useState60[1];
  var _useState61 = useState(''),
    _useState62 = _slicedToArray(_useState61, 2),
    search = _useState62[0],
    setSearch = _useState62[1];
  var _useState63 = useState('all'),
    _useState64 = _slicedToArray(_useState63, 2),
    filterCat = _useState64[0],
    setFilterCat = _useState64[1];
  var _useState65 = useState(null),
    _useState66 = _slicedToArray(_useState65, 2),
    detailItem = _useState66[0],
    setDetailItem = _useState66[1];
  var _useState67 = useState(null),
    _useState68 = _slicedToArray(_useState67, 2),
    editItem = _useState68[0],
    setEditItem = _useState68[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var allTemplates = useMemo(function () {
    return [].concat(_toConsumableArray(EMAIL_TEMPLATE_PRESETS.map(function (t) {
      return _objectSpread(_objectSpread({}, t), {}, {
        isBuiltin: true
      });
    })), _toConsumableArray(customTpls.map(function (t) {
      return _objectSpread(_objectSpread({}, t), {}, {
        isBuiltin: false
      });
    })));
  }, [customTpls]);
  var visible = allTemplates.filter(function (t) {
    if (filterCat !== 'all' && t.category !== filterCat) return false;
    if (!search.trim()) return true;
    var q = search.trim().toLowerCase();
    return (t.title + ' ' + t.subject + ' ' + t.body).toLowerCase().includes(q);
  });
  var saveCustomTpls = function saveCustomTpls(tpls) {
    setCustomTpls(tpls);
    localStorage.setItem('email_templates_custom', JSON.stringify(tpls));
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(id) {
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            _context1.n = 1;
            return wsConfirm('确定删除这个模板?(预置模板不能删,只能改自定义)');
          case 1:
            if (_context1.v) {
              _context1.n = 2;
              break;
            }
            return _context1.a(2);
          case 2:
            saveCustomTpls(customTpls.filter(function (t) {
              return t.id !== id;
            }));
            toast('✓ 已删除');
          case 3:
            return _context1.a(2);
        }
      }, _callee0);
    }));
    return function handleDelete(_x4) {
      return _ref20.apply(this, arguments);
    };
  }();
  var handleSave = function handleSave(tpl) {
    if (tpl.isBuiltin && !tpl.id.startsWith('user_')) {
      var newTpl = _objectSpread(_objectSpread({}, tpl), {}, {
        id: 'user_' + Date.now().toString(36),
        isBuiltin: false,
        basedOn: tpl.id
      });
      saveCustomTpls([].concat(_toConsumableArray(customTpls), [newTpl]));
      toast('✓ 已保存为自定义模板(预置版未变)');
    } else if (tpl.id) {
      var idx = customTpls.findIndex(function (t) {
        return t.id === tpl.id;
      });
      if (idx >= 0) {
        var next = _toConsumableArray(customTpls);
        next[idx] = tpl;
        saveCustomTpls(next);
      } else {
        saveCustomTpls([].concat(_toConsumableArray(customTpls), [tpl]));
      }
      toast('✓ 已保存');
    } else {
      saveCustomTpls([].concat(_toConsumableArray(customTpls), [_objectSpread(_objectSpread({}, tpl), {}, {
        id: 'user_' + Date.now().toString(36)
      })]));
      toast('✓ 已添加');
    }
    setEditItem(null);
  };
  var counts = {
    all: allTemplates.length,
    builtin: EMAIL_TEMPLATE_PRESETS.length,
    custom: customTpls.length
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-.022em',
      flex: 1
    }
  }, "\uD83D\uDCE7 \u90AE\u4EF6\u6A21\u677F\u5E93", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 400,
      color: 'var(--ink-3)',
      marginLeft: 8
    }
  }, counts.all, " \u4E2A \xB7 \u9884\u7F6E ", counts.builtin, " + \u81EA\u5B9A\u4E49 ", counts.custom)), isAdmin && /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: function onClick() {
      return setEditItem({});
    }
  }, "+ \u65B0\u5EFA\u6A21\u677F")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--accent-soft)',
      padding: '10px 14px',
      borderRadius: 10,
      marginBottom: 14,
      fontSize: 12,
      lineHeight: 1.6,
      color: 'var(--ink-2)'
    }
  }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("strong", null, "\u7528\u6CD5"), ":\u70B9 [\uD83D\uDCCB \u590D\u5236] \u2192 \u90AE\u7BB1\u7C98\u8D34 \u2192 \u66FF\u6362 ", /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'white',
      padding: '1px 4px',
      borderRadius: 3
    }
  }, '{{customer_name}}'), " \u7B49\u5360\u4F4D\u7B26 \u2192 \u53D1\u9001\u3002\u5E38\u7528:", /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'white',
      padding: '1px 4px',
      borderRadius: 3,
      marginLeft: 4
    }
  }, '{{order_no}}'), /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'white',
      padding: '1px 4px',
      borderRadius: 3,
      marginLeft: 4
    }
  }, '{{tracking_no}}'), /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'white',
      padding: '1px 4px',
      borderRadius: 3,
      marginLeft: 4
    }
  }, '{{product_name}}'), /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'white',
      padding: '1px 4px',
      borderRadius: 3,
      marginLeft: 4
    }
  }, '{{refund_amount}}'), /*#__PURE__*/React.createElement("code", {
    style: {
      background: 'white',
      padding: '1px 4px',
      borderRadius: 3,
      marginLeft: 4
    }
  }, '{{my_name}}')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 12,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u641C\u7D22\u6807\u9898 / \u4E3B\u9898 / \u5185\u5BB9",
    style: {
      flex: '1 1 240px',
      padding: '7px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(filterCat === 'all' ? 'active' : ''),
    onClick: function onClick() {
      return setFilterCat('all');
    }
  }, "\u5168\u90E8 (", allTemplates.length, ")"), EMAIL_TEMPLATE_CATEGORIES.map(function (c) {
    var n = allTemplates.filter(function (t) {
      return t.category === c.id;
    }).length;
    if (n === 0) return null;
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      className: "tab-btn ".concat(filterCat === c.id ? 'active' : ''),
      onClick: function onClick() {
        return setFilterCat(c.id);
      }
    }, c.label, " (", n, ")");
  })), visible.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '48px 20px',
      color: 'var(--ink-3)',
      fontSize: 14,
      background: 'var(--bg-elevated)',
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 42,
      marginBottom: 8,
      opacity: .4
    }
  }, "\uD83D\uDCED"), "\u6CA1\u6709\u5339\u914D\u7684\u6A21\u677F") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: 12
    }
  }, visible.map(function (t) {
    return /*#__PURE__*/React.createElement(EmailTemplateCard, {
      key: t.id,
      item: t,
      isAdmin: isAdmin,
      onView: function onView() {
        return setDetailItem(t);
      },
      onCopy: function onCopy() {
        var full = "Subject: ".concat(t.subject, "\n\n").concat(t.body);
        navigator.clipboard.writeText(full).then(function () {
          return toast("\u2713 \u5DF2\u590D\u5236\u300C".concat(t.title, "\u300D"));
        });
      },
      onEdit: function onEdit() {
        return setEditItem(t);
      },
      onDelete: function onDelete() {
        return handleDelete(t.id);
      }
    });
  }))), detailItem && /*#__PURE__*/React.createElement(EmailTemplateDetailModal, {
    item: detailItem,
    onClose: function onClose() {
      return setDetailItem(null);
    },
    onCopy: function onCopy(body) {
      navigator.clipboard.writeText(body).then(function () {
        return toast('✓ 已复制内容');
      });
    }
  }), editItem && /*#__PURE__*/React.createElement(EmailTemplateEditModal, {
    item: editItem,
    user: user,
    toast: toast,
    onClose: function onClose() {
      return setEditItem(null);
    },
    onSave: handleSave
  }));
};
var EmailTemplateCard = function EmailTemplateCard(_ref21) {
  var item = _ref21.item,
    isAdmin = _ref21.isAdmin,
    onView = _ref21.onView,
    onCopy = _ref21.onCopy,
    onEdit = _ref21.onEdit,
    onDelete = _ref21.onDelete;
  var cat = EMAIL_TEMPLATE_CATEGORIES.find(function (c) {
    return c.id === item.category;
  }) || EMAIL_TEMPLATE_CATEGORIES[7];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onView,
    style: {
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 14,
      padding: 14,
      cursor: 'pointer',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform .15s, box-shadow .15s',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      padding: '2px 8px',
      borderRadius: 'var(--radius-pill)',
      background: cat.bg,
      color: cat.color,
      fontWeight: 600
    }
  }, cat.label), !item.isBuiltin && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      padding: '2px 6px',
      background: 'var(--accent-soft)',
      color: 'var(--accent)',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 600
    }
  }, "\u81EA\u5B9A\u4E49")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink)',
      letterSpacing: '-.012em',
      lineHeight: 1.35
    }
  }, item.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      fontStyle: 'italic',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, item.subject), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      lineHeight: 1.5,
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, item.body.slice(0, 180), "\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 'auto',
      paddingTop: 6,
      borderTop: '1px solid var(--line-soft)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      onCopy();
    },
    className: "btn-pri",
    style: {
      padding: '5px 12px',
      fontSize: 12
    }
  }, "\uD83D\uDCCB \u590D\u5236"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), isAdmin && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      onEdit();
    },
    style: {
      padding: '5px 10px',
      fontSize: 11,
      background: 'var(--bg-elevated)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      color: 'var(--ink-2)',
      fontFamily: 'inherit'
    }
  }, "\u270F\uFE0F ", item.isBuiltin ? '改' : '编辑'), !item.isBuiltin && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      onDelete();
    },
    style: {
      padding: '5px 10px',
      fontSize: 11,
      background: 'var(--bad-soft)',
      border: '1px solid var(--bad)',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      color: 'var(--bad)',
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDDD1"))));
};
var EmailTemplateDetailModal = function EmailTemplateDetailModal(_ref22) {
  var item = _ref22.item,
    onClose = _ref22.onClose,
    onCopy = _ref22.onCopy;
  var cat = EMAIL_TEMPLATE_CATEGORIES.find(function (c) {
    return c.id === item.category;
  }) || EMAIL_TEMPLATE_CATEGORIES[7];
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      if (e.target === e.currentTarget) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.55)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 18,
      maxWidth: 680,
      width: '100%',
      maxHeight: '92vh',
      overflow: 'auto',
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingRight: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      marginBottom: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      padding: '2px 8px',
      borderRadius: 'var(--radius-pill)',
      background: cat.bg,
      color: cat.color,
      fontWeight: 600
    }
  }, cat.label)), /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: '-.022em',
      lineHeight: 1.3
    }
  }, item.title)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      fontSize: 22,
      cursor: 'pointer',
      color: 'var(--ink-3)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-elevated)',
      padding: '12px 14px',
      borderRadius: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginBottom: 4,
      fontWeight: 600
    }
  }, "\u4E3B\u9898 Subject"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: 'var(--ink)',
      fontWeight: 500
    }
  }, item.subject)), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-elevated)',
      padding: '14px 16px',
      borderRadius: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginBottom: 6,
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u6B63\u6587 Body"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onCopy(item.body);
    },
    style: {
      fontSize: 11,
      padding: '3px 10px',
      background: 'var(--accent)',
      color: 'white',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 500
    }
  }, "\uD83D\uDCCB \u53EA\u590D\u5236\u6B63\u6587")), /*#__PURE__*/React.createElement("pre", {
    style: {
      fontSize: 13,
      color: 'var(--ink)',
      lineHeight: 1.65,
      whiteSpace: 'pre-wrap',
      fontFamily: 'inherit',
      margin: 0
    }
  }, item.body)), /*#__PURE__*/React.createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-modal-cancel",
    onClick: onClose
  }, "\u5173\u95ED"), /*#__PURE__*/React.createElement("button", {
    className: "btn-modal-primary",
    onClick: function onClick() {
      return onCopy("Subject: ".concat(item.subject, "\n\n").concat(item.body));
    }
  }, "\uD83D\uDCCB \u590D\u5236\u5168\u90E8(\u4E3B\u9898 + \u6B63\u6587)")))), document.body);
};
var EmailTemplateEditModal = function EmailTemplateEditModal(_ref23) {
  var item = _ref23.item,
    user = _ref23.user,
    toast = _ref23.toast,
    onClose = _ref23.onClose,
    onSave = _ref23.onSave;
  var isNew = !item.id;
  var _useState69 = useState(item.title || ''),
    _useState70 = _slicedToArray(_useState69, 2),
    title = _useState70[0],
    setTitle = _useState70[1];
  var _useState71 = useState(item.category || 'custom'),
    _useState72 = _slicedToArray(_useState71, 2),
    category = _useState72[0],
    setCategory = _useState72[1];
  var _useState73 = useState(item.subject || ''),
    _useState74 = _slicedToArray(_useState73, 2),
    subject = _useState74[0],
    setSubject = _useState74[1];
  var _useState75 = useState(item.body || ''),
    _useState76 = _slicedToArray(_useState75, 2),
    body = _useState76[0],
    setBody = _useState76[1];
  var save = function save() {
    if (!title.trim()) {
      toast('标题不能空');
      return;
    }
    if (!body.trim()) {
      toast('正文不能空');
      return;
    }
    onSave(_objectSpread(_objectSpread({}, item), {}, {
      title: title.trim(),
      category: category,
      subject: subject.trim(),
      body: body.trim(),
      updated_at: new Date().toISOString(),
      updated_by: user.name + (user.alias ? ' ' + user.alias : '')
    }));
  };
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      if (e.target === e.currentTarget) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.55)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 18,
      maxWidth: 720,
      width: '100%',
      maxHeight: '92vh',
      overflow: 'auto',
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: '-.022em'
    }
  }, isNew ? '+ 新建模板' : '✏️ 编辑模板'), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      fontSize: 22,
      cursor: 'pointer',
      color: 'var(--ink-3)'
    }
  }, "\u2715")), item.isBuiltin && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fffbeb',
      border: '1px solid #fbbf24',
      borderRadius: 8,
      padding: '8px 12px',
      fontSize: 12,
      color: '#92400e',
      marginBottom: 14
    }
  }, "\u26A0 \u8FD9\u662F\u9884\u7F6E\u6A21\u677F,\u4F60\u7684\u4FEE\u6539\u4F1A\u53E6\u5B58\u4E3A", /*#__PURE__*/React.createElement("strong", null, "\u81EA\u5B9A\u4E49\u6A21\u677F"), ",\u539F\u7248\u4E0D\u53D8\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 4
    }
  }, "\u6807\u9898 *"), /*#__PURE__*/React.createElement("input", {
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    placeholder: "\u4F8B:\u8BA2\u5355\u786E\u8BA4 \xB7 Order Confirmation",
    style: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 4
    }
  }, "\u5206\u7C7B"), /*#__PURE__*/React.createElement("select", {
    value: category,
    onChange: function onChange(e) {
      return setCategory(e.target.value);
    },
    style: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  }, EMAIL_TEMPLATE_CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.id,
      value: c.id
    }, c.label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 4
    }
  }, "\u4E3B\u9898 Subject"), /*#__PURE__*/React.createElement("input", {
    value: subject,
    onChange: function onChange(e) {
      return setSubject(e.target.value);
    },
    placeholder: "\u4F8B:Order #{{order_no}} confirmed",
    style: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 4
    }
  }, "\u6B63\u6587 Body * ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--ink-4)'
    }
  }, "(\u652F\u6301\u5360\u4F4D\u7B26 ", '{{customer_name}}', " \u7B49)")), /*#__PURE__*/React.createElement("textarea", {
    value: body,
    onChange: function onChange(e) {
      return setBody(e.target.value);
    },
    rows: 14,
    placeholder: "Hi {{customer_name}}, ...",
    style: {
      width: '100%',
      padding: '10px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical',
      lineHeight: 1.6
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-modal-cancel",
    onClick: onClose
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    className: "btn-modal-primary",
    onClick: save
  }, "\uD83D\uDCBE \u4FDD\u5B58")))), document.body);
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix58: 🚚 运费精算器(iframe 嵌入新版 freight-calc.html)
// 支持渠道:昌晖加班船/小货 · 明扬加班船/小货 · 正石 · 澳洲海派 · 阿联酋海运/空运
//          沙特海运/空运 · 加拿大信源/河池/正石海运 · 云鼎超大件
// 整套逻辑在独立 freight-calc.html 内,改公式 / 规则只动那个文件
//
// ════════════════════════════════════════════════════════════════════
// 🆕 库存查询(iframe 嵌入只读库存页 inventory-view.html)
// 实时查跟单库 pyfmuknvjqfwcqvbrsvw 的 products 库存(SKU/名/图/库存数 · 充足/低/缺货)
// 客服承诺货期前先查;只读,不改库存。inventory-view.html 须与 index.html 同目录部署
// ════════════════════════════════════════════════════════════════════
var InventoryModule = function InventoryModule(_ref24) {
  var user = _ref24.user,
    toast = _ref24.toast;
  var _useState77 = useState('loading'),
    _useState78 = _slicedToArray(_useState77, 2),
    loadStatus = _useState78[0],
    setLoadStatus = _useState78[1];
  var _useState79 = useState(function () {
      return "inventory-view.html?t=".concat(Date.now().toString(36));
    }),
    _useState80 = _slicedToArray(_useState79, 2),
    iframeUrl = _useState80[0],
    setIframeUrl = _useState80[1];
  useEffect(function () {
    var timer = setTimeout(function () {
      return setLoadStatus(function (s) {
        return s === 'loading' ? 'timeout' : s;
      });
    }, 8000);
    return function () {
      return clearTimeout(timer);
    };
  }, [iframeUrl]);
  var reload = function reload() {
    setLoadStatus('loading');
    setIframeUrl("inventory-view.html?t=".concat(Date.now().toString(36)));
  };
  var _ff = useFillHeight(); var fillRef = _ff[0], fillH = _ff[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl",
    ref: fillRef,
    style: {
      padding: '14px 14px 14px',
      overflow: 'hidden',
      height: fillH ? fillH + 'px' : 'calc(100vh - 160px)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10,
      padding: '0 4px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-.022em',
      flex: 1,
      minWidth: 180
    }
  }, "\uD83D\uDCE6 \u5E93\u5B58\u67E5\u8BE2", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 400,
      color: 'var(--ink-3)',
      marginLeft: 8
    }
  }, "\u5B9E\u65F6\u67E5\u8DDF\u5355\u5E93\u5B58 \xB7 \u53EA\u8BFB \xB7 \u627F\u8BFA\u8D27\u671F\u524D\u5148\u67E5")), /*#__PURE__*/React.createElement("button", {
    onClick: reload,
    className: "btn-sec",
    style: {
      padding: '5px 12px',
      fontSize: 12
    }
  }, "\uD83D\uDD04 \u91CD\u8F7D"), /*#__PURE__*/React.createElement("a", {
    href: iframeUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-sec",
    style: {
      padding: '5px 12px',
      fontSize: 12,
      textDecoration: 'none',
      display: 'inline-block'
    }
  }, "\u2197 \u65B0\u7A97\u53E3\u6253\u5F00")), loadStatus === 'timeout' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fef3c7',
      border: '1px solid #f59e0b',
      borderRadius: 10,
      padding: '12px 14px',
      marginBottom: 10,
      fontSize: 13,
      color: '#92400e',
      lineHeight: 1.6
    }
  }, "\u26A0 ", /*#__PURE__*/React.createElement("strong", null, "\u5E93\u5B58\u9875\u52A0\u8F7D\u8D85\u65F6"), "(8 \u79D2\u5185\u672A\u54CD\u5E94)", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 12
    }
  }, "\u53EF\u80FD\u539F\u56E0:inventory-view.html \u6CA1\u6709\u8DDF index.html \u4E00\u8D77\u90E8\u7F72\u3002\u8BF7\u786E\u8BA4 GitHub Pages \u4ED3\u5E93\u6839\u76EE\u5F55\u6709 inventory-view.html \u8FD9\u4E2A\u6587\u4EF6\u3002"), /*#__PURE__*/React.createElement("button", {
    onClick: reload,
    style: {
      marginTop: 8,
      padding: '5px 12px',
      fontSize: 12,
      background: '#f59e0b',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDD04 \u518D\u8BD5\u4E00\u6B21")), /*#__PURE__*/React.createElement("iframe", {
    key: iframeUrl,
    src: iframeUrl,
    title: "\u5E93\u5B58\u67E5\u8BE2",
    onLoad: function onLoad() {
      return setLoadStatus('loaded');
    },
    style: {
      width: '100%',
      flex: '1 1 auto',
      minHeight: 0,
      border: 'none',
      borderRadius: 12,
      background: '#fafafa',
      display: 'block'
    }
  }));
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix250: 📦 数量核实跟进(iframe 嵌入 qty-confirm.html)
// SKU≥2 自动核实流程的跟进台:列表/筛选/统计 + 改状态回写 Shopify 标签 + 跟单视图。
// 数据在 po-system 库 pyfmuknvjqfwcqvbrsvw 的 qty_confirmations,逻辑全在独立 qty-confirm.html。
// qty-confirm.html 须与 index.html 同目录部署。带 ?me= 把当前客服名预填进 handler。
// ════════════════════════════════════════════════════════════════════
var QtyConfirmModule = function QtyConfirmModule(_ref24b) {
  var user = _ref24b.user,
    toast = _ref24b.toast;
  var _meQC = encodeURIComponent(user && (user.name || user.username) || '');
  var _qcUrl = function _qcUrl() {
    return "qty-confirm.html?me=" + _meQC + "&t=" + Date.now().toString(36);
  };
  var _useStateQC = useState(_qcUrl),
    _useStateQC2 = _slicedToArray(_useStateQC, 2),
    iframeUrl = _useStateQC2[0],
    setIframeUrl = _useStateQC2[1];
  var _useStateQC3 = useState('loading'),
    _useStateQC4 = _slicedToArray(_useStateQC3, 2),
    loadStatus = _useStateQC4[0],
    setLoadStatus = _useStateQC4[1];
  useEffect(function () {
    var timer = setTimeout(function () {
      return setLoadStatus(function (s) {
        return s === 'loading' ? 'timeout' : s;
      });
    }, 8000);
    return function () {
      return clearTimeout(timer);
    };
  }, [iframeUrl]);
  var reload = function reload() {
    setLoadStatus('loading');
    setIframeUrl(_qcUrl());
  };
  var _ff = useFillHeight(); var fillRef = _ff[0], fillH = _ff[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl",
    ref: fillRef,
    style: {
      padding: '14px',
      overflow: 'hidden',
      height: fillH ? fillH + 'px' : 'calc(100vh - 160px)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10,
      padding: '0 4px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-.022em',
      flex: 1,
      minWidth: 180
    }
  }, "\uD83D\uDCE6 \u6570\u91CF\u6838\u5B9E\u8DDF\u8FDB", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 400,
      color: 'var(--ink-3)',
      marginLeft: 8
    }
  }, "SKU\u22652 \u81EA\u52A8\u6838\u5B9E \xB7 \u6539\u72B6\u6001\u56DE\u5199 Shopify \u6807\u7B7E")), /*#__PURE__*/React.createElement("button", {
    onClick: reload,
    className: "btn-sec",
    style: {
      padding: '5px 12px',
      fontSize: 12
    }
  }, "\uD83D\uDD04 \u91CD\u8F7D"), /*#__PURE__*/React.createElement("a", {
    href: iframeUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-sec",
    style: {
      padding: '5px 12px',
      fontSize: 12,
      textDecoration: 'none',
      display: 'inline-block'
    }
  }, "\u2197 \u65B0\u7A97\u53E3\u6253\u5F00")), loadStatus === 'timeout' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fef3c7',
      border: '1px solid #f59e0b',
      borderRadius: 10,
      padding: '12px 14px',
      marginBottom: 10,
      fontSize: 13,
      color: '#92400e',
      lineHeight: 1.6
    }
  }, "\u26A0 ", /*#__PURE__*/React.createElement("strong", null, "\u9875\u9762\u52A0\u8F7D\u8D85\u65F6"), "\u3002\u8BF7\u786E\u8BA4 GitHub Pages \u4ED3\u5E93\u6839\u76EE\u5F55\u6709 qty-confirm.html \u8FD9\u4E2A\u6587\u4EF6\u3002", /*#__PURE__*/React.createElement("button", {
    onClick: reload,
    style: {
      marginLeft: 8,
      padding: '4px 10px',
      fontSize: 12,
      background: '#f59e0b',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "\u91CD\u8BD5")), /*#__PURE__*/React.createElement("iframe", {
    key: iframeUrl,
    src: iframeUrl,
    title: "\u6570\u91CF\u6838\u5B9E\u8DDF\u8FDB",
    onLoad: function onLoad() {
      return setLoadStatus('loaded');
    },
    style: {
      width: '100%',
      flex: '1 1 auto',
      minHeight: 0,
      border: 'none',
      borderRadius: 12,
      background: '#fafafa',
      display: 'block'
    }
  }));
};

// 🆕 fix63 根因修复:彻底放弃"iframe 高度自适应内容"模式!
// 之前 bug:iframe 内有 min-h-screen(=100vh),父根据内容高度反向设 iframe 高度
//   → iframe 视口变高 → 100vh 元素跟着变高 → body 更高 → 上报更大 → 父再设更高
//   → 正反馈死循环 → 无限下滑 / 滚动条无限拉长
// 解法:iframe 固定高度(撑满工作台可视区)+ iframe 内部自己滚动
//   完全不监听 resize 消息、不动态改高度 → 没有反馈源 → 数学上不可能循环
// ════════════════════════════════════════════════════════════════════
var FreightCalcModule = function FreightCalcModule(_ref25) {
  var user = _ref25.user,
    toast = _ref25.toast;
  var iframeRef = React.useRef(null);
  var _useState81 = useState('loading'),
    _useState82 = _slicedToArray(_useState81, 2),
    loadStatus = _useState82[0],
    setLoadStatus = _useState82[1]; // loading / loaded / timeout

  // iframeUrl 只在 mount 时生成一次(惰性初始化,避免每次 render 变)
  var _useState83 = useState(function () {
      return "freight-calc.html?t=".concat(Date.now().toString(36));
    }),
    _useState84 = _slicedToArray(_useState83, 2),
    iframeUrl = _useState84[0],
    setIframeUrl = _useState84[1];

  // 加载检测:用 iframe 的 onLoad 事件(不再依赖 resize 消息)
  useEffect(function () {
    var timer = setTimeout(function () {
      setLoadStatus(function (s) {
        return s === 'loading' ? 'timeout' : s;
      });
    }, 8000);
    return function () {
      return clearTimeout(timer);
    };
  }, [iframeUrl]);

  // 重载 = 换新 timestamp
  var reload = function reload() {
    setLoadStatus('loading');
    setIframeUrl("freight-calc.html?t=".concat(Date.now().toString(36)));
  };
  var _ff = useFillHeight(); var fillRef = _ff[0], fillH = _ff[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl",
    ref: fillRef,
    style: {
      padding: '14px 14px 14px',
      overflow: 'hidden',
      height: fillH ? fillH + 'px' : 'calc(100vh - 160px)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10,
      padding: '0 4px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-.022em',
      flex: 1,
      minWidth: 180
    }
  }, "\uD83D\uDE9A \u8FD0\u8D39\u7CBE\u7B97\u5668", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 400,
      color: 'var(--ink-3)',
      marginLeft: 8
    }
  }, "14 \u6761\u6E20\u9053 \xB7 \u81EA\u52A8\u5224\u533A \xB7 \u5408\u7BB1\u63A8\u6F14 \xB7 \u5019\u9009\u5BF9\u6BD4")), /*#__PURE__*/React.createElement("button", {
    onClick: reload,
    className: "btn-sec",
    style: {
      padding: '5px 12px',
      fontSize: 12
    }
  }, "\uD83D\uDD04 \u91CD\u8F7D"), /*#__PURE__*/React.createElement("a", {
    href: iframeUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-sec",
    style: {
      padding: '5px 12px',
      fontSize: 12,
      textDecoration: 'none',
      display: 'inline-block'
    }
  }, "\u2197 \u65B0\u7A97\u53E3\u6253\u5F00")), loadStatus === 'timeout' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fef3c7',
      border: '1px solid #f59e0b',
      borderRadius: 10,
      padding: '12px 14px',
      marginBottom: 10,
      fontSize: 13,
      color: '#92400e',
      lineHeight: 1.6
    }
  }, "\u26A0 ", /*#__PURE__*/React.createElement("strong", null, "\u8FD0\u8D39\u8BA1\u7B97\u5668\u52A0\u8F7D\u8D85\u65F6"), "(8 \u79D2\u5185\u672A\u54CD\u5E94)", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 12
    }
  }, "\u53EF\u80FD\u539F\u56E0:freight-calc.html \u6CA1\u6709\u8DDF index.html \u4E00\u8D77\u90E8\u7F72\u3002\u8BF7\u786E\u8BA4 GitHub Pages \u4ED3\u5E93\u6839\u76EE\u5F55\u6709 freight-calc.html \u8FD9\u4E2A\u6587\u4EF6\u3002"), /*#__PURE__*/React.createElement("button", {
    onClick: reload,
    style: {
      marginTop: 8,
      padding: '5px 12px',
      fontSize: 12,
      background: '#f59e0b',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDD04 \u518D\u8BD5\u4E00\u6B21")), /*#__PURE__*/React.createElement("iframe", {
    key: iframeUrl,
    ref: iframeRef,
    src: iframeUrl,
    title: "\u8FD0\u8D39\u7CBE\u7B97\u5668",
    onLoad: function onLoad() {
      return setLoadStatus('loaded');
    },
    style: {
      width: '100%',
      flex: '1 1 auto',
      minHeight: 0,
      border: 'none',
      borderRadius: 12,
      background: '#fafafa',
      display: 'block'
    }
  }));
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix348:iframe 工具填满视口测量 hook —— 测自身到视口顶的真实距离,动态算高度,
//   resize / 顶部横幅(拒付提醒)出现消失都自适应,根治「页面+iframe」双重滚动。
function useFillHeight() {
  var ref = React.useRef(null);
  var s = React.useState(null),
    h = s[0],
    setH = s[1];
  React.useEffect(function () {
    var measure = function measure() {
      var el = ref.current;
      if (!el) return;
      var top = el.getBoundingClientRect().top;
      var nh = Math.max(320, Math.floor(window.innerHeight - top - 10));
      setH(nh);
    };
    measure();
    window.addEventListener('resize', measure);
    var ro = null;
    try { ro = new ResizeObserver(measure); ro.observe(document.body); } catch (e) {}
    var t1 = setTimeout(measure, 200),
      t2 = setTimeout(measure, 700);
    return function () {
      window.removeEventListener('resize', measure);
      if (ro) { try { ro.disconnect(); } catch (e) {} }
      clearTimeout(t1); clearTimeout(t2);
    };
  }, []);
  return [ref, h];
}

// 🆕 fix112: 📋 绩效考核打分器(iframe 嵌入独立 kpi-scorer.html)
// 完整 KPI 模型(业绩75 + 能力25 + 11项奖惩 + 等级 S/A/B/C/D)· 自评+主管评分 · 每项扣分/加分依据+图片 · 日报/月报
// 数据经 window.storage 垫片存 cs CLOUD 的 kpi_kv 表(团队共享/永久)· 整套逻辑在 kpi-scorer.html
// ════════════════════════════════════════════════════════════════════
// ════════════════════════════════════════════════════════════════════
// 🆕 fix327: 绩效奖惩自动填充 —— 从日常工作按事件日期写入 kpi_kv(不碰打分器压缩包)
//   仅 2 项有客观事件源:bp1 产品优化奖(workspace_records.isProductOpt by ownerId)
//   / bp3 拒付失误(chargebacks.cs_fault by cs_fault_emp|created_by)。
//   名字键 = name+' '+alias(与打分器 Qe 一致);按「姓名:日期」合并写入,只改 count,保留主管已填 reason/images。
// ════════════════════════════════════════════════════════════════════
var KpiAutoFillPanel = function KpiAutoFillPanel(_refKAF) {
  var toast = _refKAF.toast,
    onDone = _refKAF.onDone;
  var _kafM = useState(function () {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
  });
  var month = _kafM[0],
    setMonth = _kafM[1];
  var _kafS = useState('idle');
  var stage = _kafS[0],
    setStage = _kafS[1]; // idle | computing | empty | preview | writing
  var _kafP = useState(null);
  var preview = _kafP[0],
    setPreview = _kafP[1];
  var _kafE = useState('');
  var errMsg = _kafE[0],
    setErrMsg = _kafE[1];

  var compute = async function compute() {
    setStage('computing');
    setErrMsg('');
    setPreview(null);
    try {
      var accs = (await CLOUD.list('cs_accounts', { limit: 500 })) || [];
      var recs = (await CLOUD.list('workspace_records', { limit: 8000 })) || [];
      var cbs = (await CLOUD.list('chargebacks', { limit: 3000 })) || [];
      var idToName = {};
      accs.forEach(function (a) {
        if (a && a.id != null) idToName[a.id] = (a.name || '') + (a.alias ? ' ' + a.alias : '');
      });
      var dayMap = {};
      var unmatched = 0;
      var add = function add(empId, day, k) {
        if (!empId || !day || day.slice(0, 7) !== month) return;
        var nm = idToName[empId];
        if (!nm) {
          unmatched++;
          return;
        }
        if (!dayMap[nm]) dayMap[nm] = {};
        if (!dayMap[nm][day]) dayMap[nm][day] = { bp1: 0, bp3: 0 };
        dayMap[nm][day][k]++;
      };
      recs.forEach(function (r) {
        if (!r || r.deleted || !r.isProductOpt) return;
        var day = (r.productOptMarkedAt || r.date || r.created_at || '').toString().slice(0, 10);
        add(r.ownerId, day, 'bp1');
      });
      cbs.forEach(function (c) {
        if (!c || c.deleted || !c.cs_fault) return;
        var day = (c.created_at || c.deadline || c.updated_at || '').toString().slice(0, 10);
        add(c.cs_fault_emp || c.created_by, day, 'bp3');
      });
      var rows = {};
      var days = [];
      Object.keys(dayMap).forEach(function (nm) {
        Object.keys(dayMap[nm]).forEach(function (day) {
          var c = dayMap[nm][day];
          days.push({ nameKey: nm, day: day, bp1: c.bp1, bp3: c.bp3 });
          if (!rows[nm]) rows[nm] = { nameKey: nm, bp1: 0, bp3: 0 };
          rows[nm].bp1 += c.bp1;
          rows[nm].bp3 += c.bp3;
        });
      });
      var rowArr = Object.keys(rows).map(function (k) {
        return rows[k];
      }).sort(function (a, b) {
        return b.bp1 + Math.abs(b.bp3) - (a.bp1 + Math.abs(a.bp3));
      });
      setPreview({ rows: rowArr, days: days, unmatched: unmatched });
      setStage(rowArr.length ? 'preview' : 'empty');
    } catch (e) {
      setErrMsg('统计失败:' + (e && e.message ? e.message : e));
      setStage('idle');
    }
  };

  var write = async function write() {
    if (!preview || !preview.days.length) return;
    setStage('writing');
    setErrMsg('');
    var ok = 0,
      fail = 0;
    for (var i = 0; i < preview.days.length; i++) {
      var d = preview.days[i];
      var key = 'record:' + encodeURIComponent(d.nameKey) + ':' + d.day;
      try {
        var existing = null;
        var r = await CLOUD.client.from('kpi_kv').select('v').eq('k', key).maybeSingle();
        if (r && r.data && r.data.v) {
          try {
            existing = JSON.parse(r.data.v);
          } catch (_e) {
            existing = null;
          }
        }
        var rec = existing || { scores: {}, notes: '', employeeSign: '', supervisorSign: '', headSign: '', signDate: '' };
        if (!rec.scores) rec.scores = {};
        var b1 = rec.scores.bp1 || { count: 0, reason: '', images: [] };
        var b3 = rec.scores.bp3 || { count: 0, reason: '', images: [] };
        rec.scores.bp1 = { count: d.bp1, reason: b1.reason || '', images: b1.images || [] };
        rec.scores.bp3 = { count: d.bp3, reason: b3.reason || '', images: b3.images || [] };
        var up = await CLOUD.client.from('kpi_kv').upsert({ k: key, v: JSON.stringify(rec), updated_at: new Date().toISOString() }, { onConflict: 'k' });
        if (up && up.error) throw up.error;
        ok++;
      } catch (e2) {
        fail++;
      }
    }
    setStage('idle');
    setPreview(null);
    if (toast) toast('✓ 已写入 ' + ok + ' 天记录' + (fail ? ' · 失败 ' + fail : ''));
    if (onDone) onDone();
  };

  return /*#__PURE__*/React.createElement("div", {
    style: { border: '1px solid var(--line)', borderRadius: 10, padding: '10px 12px', marginBottom: 10, background: '#fff' }
  }, /*#__PURE__*/React.createElement("div", {
    style: { display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }
  }, /*#__PURE__*/React.createElement("span", {
    style: { fontWeight: 600, fontSize: 13 }
  }, "📊 从日常工作自动填充奖惩"), /*#__PURE__*/React.createElement("span", {
    style: { fontSize: 11, color: 'var(--ink-3)' }
  }, "仅 产品优化奖 + 拒付失误 · 按事件日期写入当天 · 合并不覆盖手填项"), /*#__PURE__*/React.createElement("span", {
    style: { flex: 1 }
  }), /*#__PURE__*/React.createElement("input", {
    type: 'month',
    value: month,
    onChange: function onChange(e) {
      setMonth(e.target.value);
    },
    style: { padding: '4px 8px', fontSize: 12, border: '1px solid var(--line)', borderRadius: 6 }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: compute,
    disabled: stage === 'computing' || stage === 'writing',
    className: "btn-sec",
    style: { padding: '5px 12px', fontSize: 12 }
  }, stage === 'computing' ? '统计中…' : '🔍 统计')), errMsg ? /*#__PURE__*/React.createElement("div", {
    style: { marginTop: 8, fontSize: 12, color: 'var(--bad)' }
  }, errMsg) : null, stage === 'empty' ? /*#__PURE__*/React.createElement("div", {
    style: { marginTop: 8, fontSize: 12, color: 'var(--ink-3)' }
  }, month + " 本月无可填充的产品优化/拒付失误事件。") : null, (stage === 'preview' || stage === 'writing') && preview ? /*#__PURE__*/React.createElement("div", {
    style: { marginTop: 10 }
  }, /*#__PURE__*/React.createElement("table", {
    style: { width: '100%', borderCollapse: 'collapse', fontSize: 12 }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: { textAlign: 'left', color: 'var(--ink-3)' }
  }, /*#__PURE__*/React.createElement("th", { style: { padding: '4px 6px' } }, "姓名"), /*#__PURE__*/React.createElement("th", { style: { padding: '4px 6px', textAlign: 'center' } }, "产品优化"), /*#__PURE__*/React.createElement("th", { style: { padding: '4px 6px', textAlign: 'center' } }, "拒付失误"))), /*#__PURE__*/React.createElement("tbody", null, preview.rows.map(function (row) {
    return /*#__PURE__*/React.createElement("tr", {
      key: row.nameKey,
      style: { borderTop: '1px solid var(--line)' }
    }, /*#__PURE__*/React.createElement("td", { style: { padding: '4px 6px' } }, row.nameKey), /*#__PURE__*/React.createElement("td", { style: { padding: '4px 6px', textAlign: 'center', color: '#16a34a', fontWeight: 600 } }, row.bp1 || '-'), /*#__PURE__*/React.createElement("td", { style: { padding: '4px 6px', textAlign: 'center', color: 'var(--bad)', fontWeight: 600 } }, row.bp3 || '-'));
  }))), /*#__PURE__*/React.createElement("div", {
    style: { marginTop: 8, fontSize: 11, color: 'var(--ink-3)' }
  }, "共 " + preview.rows.length + " 人 · " + preview.days.length + " 天记录" + (preview.unmatched ? ' · ⚠ ' + preview.unmatched + ' 条未匹配到账号(已跳过)' : '')), /*#__PURE__*/React.createElement("div", {
    style: { marginTop: 8, display: 'flex', gap: 8 }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: write,
    disabled: stage === 'writing',
    style: { padding: '6px 14px', fontSize: 12, background: '#0071e3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontFamily: 'inherit' }
  }, stage === 'writing' ? '写入中…' : '✓ 确认写入 kpi_kv'), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setPreview(null);
      setStage('idle');
    },
    className: "btn-sec",
    style: { padding: '6px 14px', fontSize: 12 }
  }, "取消"))) : null);
};

var KpiScorerModule = function KpiScorerModule(_ref26) {
  var user = _ref26.user,
    toast = _ref26.toast;
  var _useState85 = useState('loading'),
    _useState86 = _slicedToArray(_useState85, 2),
    loadStatus = _useState86[0],
    setLoadStatus = _useState86[1];
  var _useState87 = useState(function () {
      return "kpi-scorer.html?t=".concat(Date.now().toString(36));
    }),
    _useState88 = _slicedToArray(_useState87, 2),
    iframeUrl = _useState88[0],
    setIframeUrl = _useState88[1];
  useEffect(function () {
    var timer = setTimeout(function () {
      return setLoadStatus(function (s) {
        return s === 'loading' ? 'timeout' : s;
      });
    }, 8000);
    return function () {
      return clearTimeout(timer);
    };
  }, [iframeUrl]);
  var reload = function reload() {
    setLoadStatus('loading');
    setIframeUrl("kpi-scorer.html?t=".concat(Date.now().toString(36)));
  };
  var _ff = useFillHeight(); var fillRef = _ff[0], fillH = _ff[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl",
    ref: fillRef,
    style: {
      padding: '14px 14px 14px',
      overflow: 'hidden',
      height: fillH ? fillH + 'px' : 'calc(100vh - 160px)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10,
      padding: '0 4px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-.022em',
      flex: 1,
      minWidth: 180
    }
  }, "\uD83D\uDCCB \u7EE9\u6548\u8003\u6838\u6253\u5206\u5668", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 400,
      color: 'var(--ink-3)',
      marginLeft: 8
    }
  }, "\u4E1A\u7EE975 + \u80FD\u529B25 + \u5956\u60E9 \xB7 \u81EA\u8BC4/\u4E3B\u7BA1\u8BC4\u5206 \xB7 \u6BCF\u9879\u4F9D\u636E+\u56FE\u7247 \xB7 \u65E5\u62A5/\u6708\u62A5")), /*#__PURE__*/React.createElement("button", {
    onClick: reload,
    className: "btn-sec",
    style: {
      padding: '5px 12px',
      fontSize: 12
    }
  }, "\uD83D\uDD04 \u91CD\u8F7D"), /*#__PURE__*/React.createElement("a", {
    href: iframeUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-sec",
    style: {
      padding: '5px 12px',
      fontSize: 12,
      textDecoration: 'none',
      display: 'inline-block'
    }
  }, "\u2197 \u65B0\u7A97\u53E3\u6253\u5F00")), loadStatus === 'timeout' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fef3c7',
      border: '1px solid #f59e0b',
      borderRadius: 10,
      padding: '12px 14px',
      marginBottom: 10,
      fontSize: 13,
      color: '#92400e',
      lineHeight: 1.6
    }
  }, "\u26A0 ", /*#__PURE__*/React.createElement("strong", null, "\u7EE9\u6548\u6253\u5206\u5668\u52A0\u8F7D\u8D85\u65F6"), "(8 \u79D2\u5185\u672A\u54CD\u5E94)", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 12
    }
  }, "\u53EF\u80FD\u539F\u56E0:kpi-scorer.html \u6CA1\u6709\u8DDF index.html \u4E00\u8D77\u90E8\u7F72\u3002\u8BF7\u786E\u8BA4 GitHub Pages \u4ED3\u5E93\u6839\u76EE\u5F55\u6709 kpi-scorer.html\u3002"), /*#__PURE__*/React.createElement("button", {
    onClick: reload,
    style: {
      marginTop: 8,
      padding: '5px 12px',
      fontSize: 12,
      background: '#f59e0b',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDD04 \u518D\u8BD5\u4E00\u6B21")), /*#__PURE__*/React.createElement(KpiAutoFillPanel, {
    toast: toast,
    onDone: reload
  }), /*#__PURE__*/React.createElement("iframe", {
    key: iframeUrl,
    src: iframeUrl,
    title: "\u7EE9\u6548\u8003\u6838\u6253\u5206\u5668",
    onLoad: function onLoad() {
      return setLoadStatus('loaded');
    },
    style: {
      width: '100%',
      flex: '1 1 auto',
      minHeight: 0,
      border: 'none',
      borderRadius: 12,
      background: '#fafafa',
      display: 'block'
    }
  }));
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix69: 📦 快递发票制作(iframe 嵌入 express-invoice.html)
// 节点②制作发票(搜单→套昌晖模板→在线编辑→导出73列Excel)+ 节点③收货对账(导入北简表)
// 订单数据来自跟单系统 Supabase · 整套逻辑在独立 express-invoice.html
// 固定高度 + iframe 内部滚动(规避无限下滑)
// ════════════════════════════════════════════════════════════════════
var ExpressInvoiceModule = function ExpressInvoiceModule(_ref27) {
  var user = _ref27.user,
    toast = _ref27.toast;
  var _useState89 = useState('loading'),
    _useState90 = _slicedToArray(_useState89, 2),
    loadStatus = _useState90[0],
    setLoadStatus = _useState90[1];
  var _useState91 = useState(function () {
      return "express-invoice.html?t=".concat(Date.now().toString(36));
    }),
    _useState92 = _slicedToArray(_useState91, 2),
    iframeUrl = _useState92[0],
    setIframeUrl = _useState92[1];
  useEffect(function () {
    var timer = setTimeout(function () {
      return setLoadStatus(function (s) {
        return s === 'loading' ? 'timeout' : s;
      });
    }, 8000);
    return function () {
      return clearTimeout(timer);
    };
  }, [iframeUrl]);
  var reload = function reload() {
    setLoadStatus('loading');
    setIframeUrl("express-invoice.html?t=".concat(Date.now().toString(36)));
  };
  var _ff = useFillHeight(); var fillRef = _ff[0], fillH = _ff[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl",
    ref: fillRef,
    style: {
      padding: '14px',
      overflow: 'hidden',
      height: fillH ? fillH + 'px' : 'calc(100vh - 160px)',
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10,
      padding: '0 4px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-.022em',
      flex: 1
    }
  }, "\uD83D\uDCE6 \u5FEB\u9012\u53D1\u7968\u5236\u4F5C", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 400,
      color: 'var(--ink-3)',
      marginLeft: 8
    }
  }, "\u641C\u8BA2\u5355 \u2192 \u5957\u6A21\u677F \u2192 \u5BFC\u51FA Excel \xB7 \u6536\u8D27\u5BF9\u8D26")), /*#__PURE__*/React.createElement("button", {
    onClick: reload,
    className: "btn-sec",
    style: {
      padding: '5px 12px',
      fontSize: 12
    }
  }, "\uD83D\uDD04 \u91CD\u8F7D"), /*#__PURE__*/React.createElement("a", {
    href: iframeUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn-sec",
    style: {
      padding: '5px 12px',
      fontSize: 12,
      textDecoration: 'none',
      display: 'inline-block'
    }
  }, "\u2197 \u65B0\u7A97\u53E3\u6253\u5F00")), loadStatus === 'timeout' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fef3c7',
      border: '1px solid #f59e0b',
      borderRadius: 10,
      padding: '12px 14px',
      marginBottom: 10,
      fontSize: 13,
      color: '#92400e',
      lineHeight: 1.6
    }
  }, "\u26A0 ", /*#__PURE__*/React.createElement("strong", null, "\u52A0\u8F7D\u8D85\u65F6"), " \u2014 \u786E\u8BA4 express-invoice.html \u5DF2\u8DDF index.html \u4E00\u8D77\u90E8\u7F72\u5230 GitHub Pages \u6839\u76EE\u5F55\u3002", /*#__PURE__*/React.createElement("button", {
    onClick: reload,
    style: {
      marginLeft: 8,
      padding: '4px 10px',
      fontSize: 12,
      background: '#f59e0b',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDD04 \u518D\u8BD5")), /*#__PURE__*/React.createElement("iframe", {
    key: iframeUrl,
    src: iframeUrl,
    title: "\u5FEB\u9012\u53D1\u7968\u5236\u4F5C",
    onLoad: function onLoad() {
      return setLoadStatus('loaded');
    },
    style: {
      width: '100%',
      flex: '1 1 auto',
      minHeight: 0,
      border: 'none',
      borderRadius: 12,
      background: '#fafafa',
      display: 'block'
    }
  }));
};

// ============================================================
// 📋 工作流 / SOP 模块 (fix102) — 新人友好的步骤向导(只读参考,主管后续可改为可编辑)
// 试点 3 个:拒付处理 / 快递发票(昌晖·云鼎)/ 退款
// 每步可含:说明 desc · 核对清单 checklist · 判断分叉 branches · 提示 note;流程可跳转对应工具 link
// ============================================================
var WORKFLOWS = [{
  id: 'chargeback',
  icon: '🚨',
  title: '拒付处理',
  color: '#dc2626',
  bg: '#fef2f2',
  linkTab: 'chargebacks',
  linkLabel: '去拒付模块',
  summary: '收到拒付通知 → 记时限 → 判断类型 → 取证 → 时限内应诉 → 跟进结果',
  warning: '⏰ 拒付有应诉时限(常见 7–10 天,以支付平台通知为准)。逾期 = 自动判输,务必当天处理、第一时间告知主管。',
  steps: [{
    n: 1,
    title: '确认拒付通知 + 记录时限',
    desc: '收到拒付(Chargeback / Dispute)通知后立刻处理,先把关键信息记下来。',
    checklist: ['记录拒付金额 + 原因代码(Reason Code)', '查清应诉截止日期(Respond by)', '在「客服跟进」把该订单标记为「拒付」分类', '立即告知主管']
  }, {
    n: 2,
    title: '判断拒付类型(决定取证方向)',
    desc: '不同类型要准备不同证据,先判断属于哪一种:',
    branches: [{
      cond: '未收到货 (Product Not Received)',
      action: '取证:物流单号 + 全程轨迹 + 签收/妥投证明 + 投递定位'
    }, {
      cond: '货不对板 / 有损 (Not as Described)',
      action: '取证:产品页描述与图片截图 + 与客户沟通记录 + 实拍对比;若确属质量问题,考虑直接退款止损'
    }, {
      cond: '未授权 / 欺诈 (Fraudulent)',
      action: '取证:AVS/CVV 匹配、账单地址=收货地址、下单 IP/设备、客户下单及收货确认记录'
    }, {
      cond: '重复扣款 (Duplicate)',
      action: '核对是否真重复:是 → 主动退一笔并举证;否 → 举证两笔为不同订单'
    }, {
      cond: '已取消未退款 (Credit Not Processed)',
      action: '查退款记录:已退 → 举证退款凭证;漏退 → 立即退款并说明'
    }]
  }, {
    n: 3,
    title: '收集证据材料(通用清单)',
    desc: '无论哪种类型,这些都尽量备齐:',
    checklist: ['订单详情:下单时间 / 邮箱 / 下单 IP', '物流全程轨迹 + 签收/妥投证明', '与客户的全部沟通记录(邮件/消息)', '产品页与实物一致的证明(描述/图片)', '退款/物流政策客户已知悉或同意的截图']
  }, {
    n: 4,
    title: '在支付平台 / Shopify 提交应诉',
    desc: '在截止日前提交。材料齐全、按时间线简明陈述事实,附上上一步的证据。',
    note: '具体提交入口按公司用的支付平台 [按公司规定填:如 Shopify Payments / PayPal / Stripe]。拿不准就先问主管。'
  }, {
    n: 5,
    title: '跟进结果 + 复盘',
    desc: '记录应诉结果(赢/输)。输了分析原因;同一类拒付高发时,把原因反馈给运营/产品改进(如物流时效、产品描述)。',
    checklist: ['在系统记录最终结果', '输了 → 记录原因', '高发原因 → 反馈运营/产品']
  }]
}, {
  id: 'express_invoice',
  icon: '📦',
  title: '快递发票(昌晖 / 云鼎)',
  color: '#c2410c',
  bg: '#fff7ed',
  linkTab: 'express_invoice',
  linkLabel: '去快递发票模块',
  summary: '选渠道 → 从对应表导入 / 单查 → 建票 → 逐张核对 → 导出给快递',
  warning: '昌晖和云鼎是两套不同流程。先看货实际走哪个快递,再选渠道——选错了表和模板都不对。',
  steps: [{
    n: 1,
    title: '选渠道',
    desc: '在「快递发票」工具顶部「快递公司」下拉,选这批货实际走的快递。',
    branches: [{
      cond: '昌晖',
      action: '走「北简表」导入。客户订单号列填客户参考号(XM8T,快递核对用),我方单号写进运单备注'
    }, {
      cond: '云鼎(YL-洛杉矶直送超大件卡派)',
      action: '走「交接清单」导入。每个订单生成一个独立 Excel,文件名=订单号 1票N件'
    }]
  }, {
    n: 2,
    title: '导入建票 / 单票查询',
    desc: '两种方式:批量上传,或单个查。',
    branches: [{
      cond: '批量 · 昌晖',
      action: '上传北简表(已手填「订单编号」)→ 自动查库建票'
    }, {
      cond: '批量 · 云鼎',
      action: '上传交接清单 → 按「单号」建票;DF17280/DF17392 自动合并成一单、K114157-1 子单自动处理'
    }, {
      cond: '单票',
      action: '用顶部「🔎 快速查单」输订单号 → 弹窗核对细节 + 图片 → 加入发票篮'
    }]
  }, {
    n: 3,
    title: '逐张核对(最关键)',
    desc: '建好票后,在发票篮里逐张检查:',
    checklist: ['收件人信息完整:名称/电话/邮编/城市/省州/地址1(云鼎不超 35 字符)/邮箱', '只保留真实灯具(OrderArmor 等保险已自动剔除)', '申报灯型对(壁灯 Wall Lamp / 吊灯 Pendant / 枝形吊灯 Chandelier… 按真实灯型,逐行可改)', '云鼎:选中数量 = 交接清单「件数」;只发部分的(如 K..-1 发6件)调数量或取消勾选', '同款多 SKU 已合并成一行、数量累加']
  }, {
    n: 4,
    title: '导出',
    desc: '核对无误(篮子显示「必齐」)后导出。',
    branches: [{
      cond: '昌晖',
      action: '导出一个大 Excel(每单一行)'
    }, {
      cond: '云鼎',
      action: '每单一个 Excel(文件名=订单号 1票N件),多单自动打包 ZIP,产品图自动嵌入框内'
    }]
  }, {
    n: 5,
    title: '交付快递公司',
    desc: '把导出的发票文件发给对应快递公司(昌晖 / 云鼎)。云鼎产品图嵌不进的(个别跨域),导出后检查一下框内有没有图。'
  }]
}, {
  id: 'refund',
  icon: '💰',
  title: '退款',
  color: '#15803d',
  bg: '#f0fdf4',
  linkTab: 'cs',
  linkLabel: '去客服跟进',
  summary: '核实原因 → 判断全退/部分退/改补件 → 走审批 → 执行 → 通知并记录',
  warning: '金额、审批门槛、原路退回都按公司财务规定来 [按公司规定填具体门槛]。拿不准先问主管,不要自行决定大额退款。',
  steps: [{
    n: 1,
    title: '核实退款原因 + 是否符合政策',
    desc: '先确认订单状态、退款原因(质量/物流/客户主观),以及是否在退款窗口内、是否符合公司退款政策。',
    checklist: ['查订单当前状态(已发/未发/已签收)', '明确退款原因', '确认是否在退款时效内 [按公司规定]']
  }, {
    n: 2,
    title: '判断退款方式',
    desc: '根据情况选处理方式:',
    branches: [{
      cond: '全额退 (Full)',
      action: '常见:未发货取消 / 重大质量问题 / 物流确认丢件'
    }, {
      cond: '部分退 (Partial)',
      action: '轻微瑕疵客户愿留用 / 补偿性折让 / 运费差额'
    }, {
      cond: '不退,改补件或换货',
      action: '缺件或可修复 → 走「补件」流程,不走退款'
    }]
  }, {
    n: 3,
    title: '走审批',
    desc: '按金额走审批流程。',
    note: '[按公司规定:小额客服可自处理 / 超过 X 金额需主管审批]。审批通过后在系统记录审批人。'
  }, {
    n: 4,
    title: '执行退款',
    desc: '在 Shopify / 支付平台原路退回到客户原支付方式。',
    checklist: ['原路退回(不要换渠道转账)', '记录退款单号 / 金额 / 日期']
  }, {
    n: 5,
    title: '通知客户 + 记录归档',
    desc: '告知客户退款已发起,并在系统留痕。',
    checklist: ['邮件/消息通知客户(到账约 3–5 个工作日,以银行为准)', '在「客服跟进」标记「退款」分类', '备注金额 / 原因 / 审批人']
  }]
}];
var WorkflowModule = function WorkflowModule(_ref28) {
  var goTab = _ref28.goTab;
  var _useState93 = useState(null),
    _useState94 = _slicedToArray(_useState93, 2),
    sel = _useState94[0],
    setSel = _useState94[1];
  if (sel) {
    var wf = WORKFLOWS.find(function (w) {
      return w.id === sel;
    });
    if (!wf) {
      setSel(null);
      return null;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "max-w-4xl mx-auto"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSel(null);
      },
      className: "text-sm text-stone-500 hover:text-stone-700 mb-3"
    }, "\u2190 \u8FD4\u56DE\u5DE5\u4F5C\u6D41\u5217\u8868"), /*#__PURE__*/React.createElement("div", {
      className: "rounded-xl p-4 mb-4",
      style: {
        background: wf.bg
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 flex-wrap"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-2xl"
    }, wf.icon), /*#__PURE__*/React.createElement("h2", {
      className: "text-xl font-bold",
      style: {
        color: wf.color
      }
    }, wf.title), goTab && wf.linkTab && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return goTab(wf.linkTab);
      },
      className: "ml-auto text-sm px-3 py-1.5 rounded-lg bg-white border border-stone-200 hover:border-stone-300"
    }, "\uD83D\uDC49 ", wf.linkLabel)), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-stone-600 mt-1"
    }, wf.summary), wf.warning && /*#__PURE__*/React.createElement("div", {
      className: "mt-3 text-sm bg-white/70 border-l-4 rounded px-3 py-2",
      style: {
        borderColor: wf.color,
        color: '#7c2d12'
      }
    }, wf.warning)), wf.steps.map(function (step) {
      return /*#__PURE__*/React.createElement("div", {
        key: step.n,
        className: "border border-stone-200 rounded-xl p-4 mb-3 bg-white"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-start gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-7 h-7 rounded-full text-white flex items-center justify-center text-sm font-bold flex-shrink-0",
        style: {
          background: wf.color
        }
      }, step.n), /*#__PURE__*/React.createElement("div", {
        className: "flex-1 min-w-0"
      }, /*#__PURE__*/React.createElement("div", {
        className: "font-bold text-stone-800"
      }, step.title), step.desc && /*#__PURE__*/React.createElement("div", {
        className: "text-sm text-stone-600 mt-1 leading-relaxed"
      }, step.desc), step.checklist && /*#__PURE__*/React.createElement("ul", {
        className: "mt-2 space-y-1"
      }, step.checklist.map(function (c, i) {
        return /*#__PURE__*/React.createElement("li", {
          key: i,
          className: "text-sm text-stone-700 flex gap-2"
        }, /*#__PURE__*/React.createElement("span", {
          className: "text-stone-300"
        }, "\u2610"), /*#__PURE__*/React.createElement("span", null, c));
      })), step.branches && /*#__PURE__*/React.createElement("div", {
        className: "mt-2 space-y-1.5"
      }, step.branches.map(function (b, i) {
        return /*#__PURE__*/React.createElement("div", {
          key: i,
          className: "bg-amber-50 border-l-2 border-amber-400 px-3 py-1.5 rounded text-sm text-stone-700"
        }, /*#__PURE__*/React.createElement("b", {
          className: "text-amber-900"
        }, b.cond), " \u2192 ", b.action);
      })), step.note && /*#__PURE__*/React.createElement("div", {
        className: "mt-2 text-xs text-stone-500 bg-stone-50 rounded px-2.5 py-1.5"
      }, "\uD83D\uDCA1 ", step.note))));
    }), /*#__PURE__*/React.createElement("div", {
      className: "text-xs text-stone-400 text-center mt-4 mb-2"
    }, "\u6807 [\u6309\u516C\u53F8\u89C4\u5B9A] \u7684\u5730\u65B9\u6309\u4F60\u4EEC\u5B9E\u9645\u653F\u7B56\u586B \xB7 \u6D41\u7A0B\u6709\u53D8\u5316\u544A\u8BC9\u6211\u968F\u65F6\u66F4\u65B0"));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-5xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 mb-1 flex-wrap"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold text-stone-800"
  }, "\uD83D\uDCCB \u5DE5\u4F5C\u6D41 / SOP"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-stone-400"
  }, "\u65B0\u4EBA\u53CB\u597D \xB7 \u6309\u6B65\u9AA4\u8D70\u7684\u5907\u7528\u6307\u5F15")), /*#__PURE__*/React.createElement("div", {
    className: "text-sm text-stone-500 mb-4"
  }, "\u70B9\u5F00\u4EFB\u4E00\u6D41\u7A0B,\u6309\u7F16\u53F7\u6B65\u9AA4\u64CD\u4F5C\u3002\u542B\u5224\u65AD\u5206\u53C9\u3001\u6838\u5BF9\u6E05\u5355,\u53EF\u76F4\u63A5\u8DF3\u8F6C\u5230\u5BF9\u5E94\u5DE5\u5177\u3002"), /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3",
    style: {
      gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))'
    }
  }, WORKFLOWS.map(function (wf) {
    return /*#__PURE__*/React.createElement("button", {
      key: wf.id,
      onClick: function onClick() {
        return setSel(wf.id);
      },
      className: "text-left rounded-xl p-4 border border-stone-200 hover:shadow-md transition bg-white"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-2 mb-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-xl"
    }, wf.icon), /*#__PURE__*/React.createElement("span", {
      className: "font-bold",
      style: {
        color: wf.color
      }
    }, wf.title), /*#__PURE__*/React.createElement("span", {
      className: "ml-auto text-xs text-stone-400"
    }, wf.steps.length, " \u6B65")), /*#__PURE__*/React.createElement("div", {
      className: "text-sm text-stone-600 leading-relaxed"
    }, wf.summary));
  })), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-400 mt-5"
  }, "\u66F4\u591A\u6D41\u7A0B(\u5B9A\u5236\u5168\u6D41\u7A0B / \u8DE8\u90E8\u95E8\u627E\u5BF9\u4EBA / \u552E\u540E\u5206\u8BCA\u2026)\u53EF\u6309\u9700\u7EE7\u7EED\u52A0\u3002"));
};

// ============================================================
// ✨ 影响者合作 (Influencer / KOC Brief) 模块 — 客服侧主操作 (fix99)
// 跨部门库 influencer_briefs (与美工 WorkTrack 共享同表) · getCdmClient()
// 多平台 platforms 数组 + 兼容单值 platform · 全串 UUID · created_at_ms 毫秒
// 本版:多平台表单 + 列表/卡片 + 流水线Kanban(下拉改状态) + 存取 + Realtime
// 待做:ROI仪表盘 + Brief Sheet一键生成 + 寄样照/内容截图上传
// ============================================================
var INF_PLATFORMS = [{
  v: 'instagram',
  label: 'Instagram',
  emoji: '📷'
}, {
  v: 'tiktok',
  label: 'TikTok',
  emoji: '🎵'
}, {
  v: 'youtube',
  label: 'YouTube',
  emoji: '▶️'
}, {
  v: 'pinterest',
  label: 'Pinterest',
  emoji: '📌'
}, {
  v: 'xiaohongshu',
  label: '小红书',
  emoji: '📕'
}, {
  v: 'facebook',
  label: 'Facebook',
  emoji: '👥'
}, {
  v: 'other',
  label: '其他',
  emoji: '🌐'
}];
var INF_STATUSES = [{
  v: 'contacted',
  label: '接触中',
  emoji: '✉️',
  color: '#78716c',
  bg: '#f5f5f4'
}, {
  v: 'agreed',
  label: '已同意',
  emoji: '🤝',
  color: '#1d4ed8',
  bg: '#dbeafe'
}, {
  v: 'sample_sent',
  label: '已寄样',
  emoji: '📦',
  color: '#c2410c',
  bg: '#ffedd5'
}, {
  v: 'content_received',
  label: '收到内容',
  emoji: '📸',
  color: '#7c3aed',
  bg: '#ede9fe'
}, {
  v: 'posted',
  label: '已发布',
  emoji: '🚀',
  color: '#0891b2',
  bg: '#cffafe'
}, {
  v: 'completed',
  label: '已完成',
  emoji: '✅',
  color: '#15803d',
  bg: '#dcfce7'
}, {
  v: 'declined',
  label: '已拒绝',
  emoji: '❌',
  color: '#dc2626',
  bg: '#fee2e2'
}];
var INF_REGIONS = ['US', 'UAE', 'AU', 'SA', 'FR', 'UK', 'other'];
var INF_COLLAB = [{
  v: 'gifted',
  label: '🎁 Gifted 寄样'
}, {
  v: 'paid',
  label: '💵 Paid 付费'
}, {
  v: 'affiliate',
  label: '🔗 Affiliate 联盟'
}];
var INF_RATINGS = ['S', 'A', 'B', 'C'];
var infPlat = function infPlat(v) {
  return INF_PLATFORMS.find(function (p) {
    return p.v === v;
  }) || {
    v: v,
    label: v,
    emoji: '🌐'
  };
};
var infStat = function infStat(v) {
  return INF_STATUSES.find(function (s) {
    return s.v === v;
  }) || INF_STATUSES[0];
};
var infSafeArr = function infSafeArr(v) {
  return Array.isArray(v) ? v : typeof v === 'string' && v.trim().startsWith('[') ? function () {
    try {
      return JSON.parse(v);
    } catch (e) {
      return [];
    }
  }() : [];
};
var infSafeObj = function infSafeObj(v) {
  return v && _typeof(v) === 'object' && !Array.isArray(v) ? v : typeof v === 'string' && v.trim().startsWith('{') ? function () {
    try {
      return JSON.parse(v);
    } catch (e) {
      return {};
    }
  }() : {};
};
var INF_INP = 'px-3 py-2 text-sm border border-stone-300 rounded-lg w-full focus:border-pink-400 outline-none';
var InfL = function InfL(_ref29) {
  var label = _ref29.label,
    children = _ref29.children,
    full = _ref29.full;
  return /*#__PURE__*/React.createElement("label", {
    className: 'block ' + (full ? 'col-span-2' : '')
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-stone-500 block mb-0.5"
  }, label), children);
};
var InfCard = function InfCard(_ref30) {
  var b = _ref30.b,
    onOpen = _ref30.onOpen,
    onStatus = _ref30.onStatus,
    onDel = _ref30.onDel,
    compact = _ref30.compact;
  var st = infStat(b.status);
  var emojis = (b.platforms || []).map(function (p) {
    return infPlat(p).emoji;
  }).join(' ');
  var spend = (b.sampleCost || 0) + (b.shippingCost || 0) + (b.fee || 0);
  var m = b.metrics || {};
  return /*#__PURE__*/React.createElement("div", {
    className: "border border-stone-200 rounded-xl bg-white p-3 hover:shadow-md transition"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start gap-2"
  }, b.productImage ? /*#__PURE__*/React.createElement("img", {
    src: b.productImage,
    alt: "",
    className: "w-12 h-12 rounded object-cover flex-shrink-0 border border-stone-100"
  }) : /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded bg-stone-100 flex items-center justify-center flex-shrink-0 text-lg"
  }, "\uD83D\uDCA1"), /*#__PURE__*/React.createElement("div", {
    className: "min-w-0 flex-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-semibold text-stone-800 truncate cursor-pointer hover:text-pink-600",
    onClick: onOpen
  }, emojis, " ", b.influencerName), /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-500 truncate"
  }, b.handle || '', b.followerCount ? ' · ' + Number(b.followerCount).toLocaleString() + ' 粉' : '', b.region ? ' · ' + b.region : ''), b.productName && /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-600 truncate mt-0.5"
  }, "\uD83D\uDCE6 ", b.productName))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mt-2 flex-wrap"
  }, /*#__PURE__*/React.createElement("select", {
    value: b.status,
    onChange: function onChange(e) {
      return onStatus(e.target.value);
    },
    className: "text-xs px-1.5 py-1 rounded border outline-none",
    style: {
      background: st.bg,
      color: st.color,
      borderColor: st.color + '55'
    }
  }, INF_STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.v,
      value: s.v
    }, s.emoji, " ", s.label);
  })), spend > 0 && /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-stone-400"
  }, "\xA5", spend.toLocaleString()), b.discountCode && /*#__PURE__*/React.createElement("span", {
    className: "text-xs px-1.5 py-0.5 rounded bg-amber-50 text-amber-700"
  }, b.discountCode), !compact && /*#__PURE__*/React.createElement("span", {
    className: "flex-1"
  }), !compact && /*#__PURE__*/React.createElement("button", {
    onClick: onOpen,
    className: "text-xs text-blue-600 hover:underline"
  }, "\u7F16\u8F91"), !compact && onDel && /*#__PURE__*/React.createElement("button", {
    onClick: onDel,
    className: "text-xs text-red-400 hover:underline"
  }, "\u5220")), !compact && (m.views || m.likes || m.sales || m.clicks) ? /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-400 mt-1.5 flex gap-3"
  }, m.views ? /*#__PURE__*/React.createElement("span", null, "\uD83D\uDC41 ", Number(m.views).toLocaleString()) : null, m.likes ? /*#__PURE__*/React.createElement("span", null, "\u2764\uFE0F ", Number(m.likes).toLocaleString()) : null, m.clicks ? /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD17 ", m.clicks) : null, m.sales ? /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCB0 ", m.sales, " \u5355") : null) : null, compact && b.deadline ? /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-stone-400 mt-1"
  }, "\uD83D\uDCC5 ", b.deadline) : null);
};
var InfForm = function InfForm(_ref31) {
  var initial = _ref31.initial,
    onCancel = _ref31.onCancel,
    onSave = _ref31.onSave,
    saving = _ref31.saving,
    toast = _ref31.toast;
  var _useState95 = useState(_objectSpread({}, initial)),
    _useState96 = _slicedToArray(_useState95, 2),
    f = _useState96[0],
    setF = _useState96[1];
  var up = function up(k, v) {
    return setF(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, _defineProperty({}, k, v));
    });
  };
  var togglePlat = function togglePlat(v) {
    var cur = f.platforms || [];
    up('platforms', cur.includes(v) ? cur.filter(function (x) {
      return x !== v;
    }) : [].concat(_toConsumableArray(cur), [v]));
  };
  var upMetric = function upMetric(k, v) {
    return up('metrics', _objectSpread(_objectSpread({}, f.metrics || {}), {}, _defineProperty({}, k, Number(v) || 0)));
  };
  var m = f.metrics || {};
  var FIN = 'w-full text-sm py-1.5 px-2 rounded-md border border-stone-300 focus:border-pink-400 outline-none';
  var Fld = function Fld(_ref32) {
    var label = _ref32.label,
      span = _ref32.span,
      children = _ref32.children;
    return /*#__PURE__*/React.createElement("div", {
      className: span === 4 ? 'col-span-4' : span === 3 ? 'col-span-3' : span === 2 ? 'col-span-2' : ''
    }, /*#__PURE__*/React.createElement("label", {
      className: "text-[11px] font-medium text-stone-600 mb-0.5 block"
    }, label), children);
  };
  var briefSheet = function briefSheet() {
    var plats = (f.platforms || []).map(function (p) {
      var d = INF_PLATFORMS.find(function (x) {
        return x.v === p;
      });
      return d ? d.label : p;
    }).join(' + ');
    var txt = ["\u2728 VAKKERLIGHT \xD7 ".concat(f.influencerName || '', " \u2014 Collaboration Brief"), '', "Product: ".concat(f.productName || '').concat(f.productSku ? " (".concat(f.productSku, ")") : ''), plats ? "Platform: ".concat(plats) : '', f.region ? "Region: ".concat(f.region) : '', "Collab Type: ".concat(f.collabType || 'gifted'), '', (f.briefPoints || []).length ? '═══ Brief Points ═══' : ''].concat(_toConsumableArray((f.briefPoints || []).map(function (b) {
      return "\u2022 ".concat(b);
    })), ['', '═══ Posting ═══', f.postingRequirements ? "- ".concat(f.postingRequirements) : '', f.deadline ? "- Post by ".concat(f.deadline) : '', f.hashtags ? "- Hashtags: ".concat(f.hashtags) : '', f.discountCode ? "- Discount code: ".concat(f.discountCode) : '', f.dosDonts ? "\n\u2550\u2550\u2550 Do's & Don'ts \u2550\u2550\u2550\n".concat(f.dosDonts) : '']).filter(function (x) {
      return x !== '';
    }).join('\n');
    try {
      navigator.clipboard.writeText(txt);
      toast && toast('✓ Brief Sheet 已复制,可直接粘给博主');
    } catch (e) {
      window.prompt('复制 Brief Sheet:', txt);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-black/40 flex items-start justify-center z-50 p-4 overflow-y-auto",
    onClick: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-white rounded-2xl w-[92vw] max-w-[1200px] my-4 p-5 shadow-2xl",
    style: {
      maxHeight: '92vh',
      overflow: 'auto'
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3 sticky top-0 bg-white pb-2 z-10"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-bold text-stone-800"
  }, f.id ? '编辑合作' : '✨ 新建影响者合作'), /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    className: "text-stone-400 text-2xl leading-none hover:text-stone-600"
  }, "\xD7")), /*#__PURE__*/React.createElement("fieldset", {
    className: "border border-stone-200 rounded-lg p-3 mb-3"
  }, /*#__PURE__*/React.createElement("legend", {
    className: "text-xs font-bold text-stone-700 px-1"
  }, "\uD83D\uDC64 \u57FA\u672C\u4FE1\u606F"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 gap-2"
  }, /*#__PURE__*/React.createElement(Fld, {
    label: "\u535A\u4E3B\u540D *"
  }, /*#__PURE__*/React.createElement("input", {
    className: FIN,
    value: f.influencerName || '',
    onChange: function onChange(e) {
      return up('influencerName', e.target.value);
    },
    placeholder: "Lana Smith"
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "Handle"
  }, /*#__PURE__*/React.createElement("input", {
    className: FIN,
    value: f.handle || '',
    onChange: function onChange(e) {
      return up('handle', e.target.value);
    },
    placeholder: "@lana_decor"
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u7C89\u4E1D\u6570"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: FIN,
    value: f.followerCount || '',
    onChange: function onChange(e) {
      return up('followerCount', e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u533A\u57DF"
  }, /*#__PURE__*/React.createElement("select", {
    className: FIN,
    value: f.region || '',
    onChange: function onChange(e) {
      return up('region', e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014"), INF_REGIONS.map(function (r) {
    return /*#__PURE__*/React.createElement("option", {
      key: r,
      value: r
    }, r);
  }))), /*#__PURE__*/React.createElement(Fld, {
    label: "\u4E3B\u9875 URL",
    span: 2
  }, /*#__PURE__*/React.createElement("input", {
    className: FIN,
    value: f.profileUrl || '',
    onChange: function onChange(e) {
      return up('profileUrl', e.target.value);
    },
    placeholder: "https://instagram.com/..."
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u9886\u57DF niche"
  }, /*#__PURE__*/React.createElement("input", {
    className: FIN,
    value: f.niche || '',
    onChange: function onChange(e) {
      return up('niche', e.target.value);
    },
    placeholder: "home decor"
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u8054\u7CFB\u65B9\u5F0F"
  }, /*#__PURE__*/React.createElement("input", {
    className: FIN,
    value: f.contact || '',
    onChange: function onChange(e) {
      return up('contact', e.target.value);
    },
    placeholder: "email / WhatsApp"
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u5E73\u53F0 *(\u53EF\u591A\u9009)",
    span: 4
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-1"
  }, INF_PLATFORMS.map(function (p) {
    var on = (f.platforms || []).includes(p.v);
    return /*#__PURE__*/React.createElement("button", {
      key: p.v,
      type: "button",
      onClick: function onClick() {
        return togglePlat(p.v);
      },
      className: 'px-2 py-0.5 text-xs rounded-md border ' + (on ? 'bg-pink-100 border-pink-400 text-pink-800 font-semibold' : 'bg-white border-stone-300 text-stone-500')
    }, on ? '✓' : '', p.emoji, " ", p.label);
  }))))), /*#__PURE__*/React.createElement("fieldset", {
    className: "border border-stone-200 rounded-lg p-3 mb-3"
  }, /*#__PURE__*/React.createElement("legend", {
    className: "text-xs font-bold text-stone-700 px-1"
  }, "\uD83D\uDCE6 \u4EA7\u54C1 + \u5408\u4F5C"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 gap-2"
  }, /*#__PURE__*/React.createElement(Fld, {
    label: "\u4EA7\u54C1\u540D",
    span: 2
  }, /*#__PURE__*/React.createElement("input", {
    className: FIN,
    value: f.productName || '',
    onChange: function onChange(e) {
      return up('productName', e.target.value);
    },
    placeholder: "Glimmering Wall Sconce"
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u4EA7\u54C1 SKU"
  }, /*#__PURE__*/React.createElement("input", {
    className: FIN,
    value: f.productSku || '',
    onChange: function onChange(e) {
      return up('productSku', e.target.value);
    },
    placeholder: "VKW7-25109-01"
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u5408\u4F5C\u7C7B\u578B"
  }, /*#__PURE__*/React.createElement("select", {
    className: FIN,
    value: f.collabType || 'gifted',
    onChange: function onChange(e) {
      return up('collabType', e.target.value);
    }
  }, INF_COLLAB.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.v,
      value: c.v
    }, c.label);
  }))), /*#__PURE__*/React.createElement(Fld, {
    label: "\u4EA7\u54C1\u4E3B\u56FE URL",
    span: 2
  }, /*#__PURE__*/React.createElement("input", {
    className: FIN,
    value: f.productImage || '',
    onChange: function onChange(e) {
      return up('productImage', e.target.value);
    },
    placeholder: "https://cdn.shopify.com/..."
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u4ED8\u8D39\u91D1\u989D \xA5"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: FIN,
    value: f.fee || '',
    onChange: function onChange(e) {
      return up('fee', e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u4EA7\u54C1\u6210\u672C \xA5"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: FIN,
    value: f.sampleCost || '',
    onChange: function onChange(e) {
      return up('sampleCost', e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u8FD0\u8D39 \xA5"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: FIN,
    value: f.shippingCost || '',
    onChange: function onChange(e) {
      return up('shippingCost', e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u6298\u6263\u7801"
  }, /*#__PURE__*/React.createElement("input", {
    className: FIN,
    value: f.discountCode || '',
    onChange: function onChange(e) {
      return up('discountCode', e.target.value);
    },
    placeholder: "LANA15"
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u7269\u6D41\u5355\u53F7"
  }, /*#__PURE__*/React.createElement("input", {
    className: FIN,
    value: f.shippingTracking || '',
    onChange: function onChange(e) {
      return up('shippingTracking', e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u5BC4\u51FA\u65E5\u671F"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: FIN,
    value: f.sentDate || '',
    onChange: function onChange(e) {
      return up('sentDate', e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u53D1\u5E03\u622A\u6B62"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    className: FIN,
    value: f.deadline || '',
    onChange: function onChange(e) {
      return up('deadline', e.target.value);
    }
  })))), /*#__PURE__*/React.createElement("fieldset", {
    className: "border border-stone-200 rounded-lg p-3 mb-3"
  }, /*#__PURE__*/React.createElement("legend", {
    className: "text-xs font-bold text-stone-700 px-1"
  }, "\uD83D\uDCDD Brief \u5185\u5BB9"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 gap-2"
  }, /*#__PURE__*/React.createElement(Fld, {
    label: "\u72B6\u6001"
  }, /*#__PURE__*/React.createElement("select", {
    className: FIN,
    value: f.status || 'contacted',
    onChange: function onChange(e) {
      return up('status', e.target.value);
    }
  }, INF_STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.v,
      value: s.v
    }, s.emoji, " ", s.label);
  }))), /*#__PURE__*/React.createElement(Fld, {
    label: "\u5185\u5BB9\u8BC4\u7EA7"
  }, /*#__PURE__*/React.createElement("select", {
    className: FIN,
    value: f.contentRating || '',
    onChange: function onChange(e) {
      return up('contentRating', e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014"), INF_RATINGS.map(function (r) {
    return /*#__PURE__*/React.createElement("option", {
      key: r,
      value: r
    }, r);
  }))), /*#__PURE__*/React.createElement(Fld, {
    label: "Hashtags",
    span: 2
  }, /*#__PURE__*/React.createElement("input", {
    className: FIN,
    value: f.hashtags || '',
    onChange: function onChange(e) {
      return up('hashtags', e.target.value);
    },
    placeholder: "#vakkerlight #homedecor"
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u53D1\u5E03\u8981\u6C42",
    span: 4
  }, /*#__PURE__*/React.createElement("input", {
    className: FIN,
    value: f.postingRequirements || '',
    onChange: function onChange(e) {
      return up('postingRequirements', e.target.value);
    },
    placeholder: "Reel 30 \u79D2\u4EE5\u4E0A"
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "Brief \u8981\u70B9(\u6BCF\u884C\u4E00\u6761)",
    span: 2
  }, /*#__PURE__*/React.createElement("textarea", {
    className: FIN,
    rows: 3,
    value: (f.briefPoints || []).join('\n'),
    onChange: function onChange(e) {
      return up('briefPoints', e.target.value.split('\n').map(function (s) {
        return s.trim();
      }).filter(Boolean));
    },
    placeholder: '拍开灯效果\n近景拍材质纹理'
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "Do's & Don'ts",
    span: 2
  }, /*#__PURE__*/React.createElement("textarea", {
    className: FIN,
    rows: 3,
    value: f.dosDonts || '',
    onChange: function onChange(e) {
      return up('dosDonts', e.target.value);
    },
    placeholder: "\u2713 \u5F00\u706F\u62CD  \u2717 \u4E0D\u8981\u52A0\u7B2C\u4E09\u65B9\u6EE4\u955C"
  })))), /*#__PURE__*/React.createElement("fieldset", {
    className: "border border-stone-200 rounded-lg p-3 mb-1"
  }, /*#__PURE__*/React.createElement("legend", {
    className: "text-xs font-bold text-stone-700 px-1"
  }, "\uD83D\uDCCA \u53D1\u5E03\u540E\u6570\u636E(\u5B8C\u6210\u65F6\u586B)"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-4 gap-2"
  }, /*#__PURE__*/React.createElement(Fld, {
    label: "\u5DF2\u53D1\u5E03\u5185\u5BB9\u94FE\u63A5(\u6BCF\u884C\u4E00\u6761)",
    span: 2
  }, /*#__PURE__*/React.createElement("textarea", {
    className: FIN,
    rows: 2,
    value: (f.contentUrls || []).join('\n'),
    onChange: function onChange(e) {
      return up('contentUrls', e.target.value.split('\n').map(function (s) {
        return s.trim();
      }).filter(Boolean));
    },
    placeholder: "https://instagram.com/p/..."
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u5907\u6CE8",
    span: 2
  }, /*#__PURE__*/React.createElement("textarea", {
    className: FIN,
    rows: 2,
    value: f.notes || '',
    onChange: function onChange(e) {
      return up('notes', e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\uD83D\uDC41 \u6D4F\u89C8"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: FIN,
    value: m.views || '',
    onChange: function onChange(e) {
      return upMetric('views', e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\u2764\uFE0F \u70B9\u8D5E"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: FIN,
    value: m.likes || '',
    onChange: function onChange(e) {
      return upMetric('likes', e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\uD83D\uDD17 \u70B9\u51FB"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: FIN,
    value: m.clicks || '',
    onChange: function onChange(e) {
      return upMetric('clicks', e.target.value);
    }
  })), /*#__PURE__*/React.createElement(Fld, {
    label: "\uD83D\uDCB0 \u8F6C\u5316(\u5355)"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    className: FIN,
    value: m.sales || '',
    onChange: function onChange(e) {
      return upMetric('sales', e.target.value);
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mt-3 pt-3 border-t border-stone-200 sticky bottom-0 bg-white"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: briefSheet,
    className: "text-sm text-pink-600 hover:text-pink-700 font-medium"
  }, "\uD83D\uDCCB Brief Sheet \u9884\u89C8/\u590D\u5236"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCancel,
    className: "px-4 py-2 rounded-lg border border-stone-300 text-stone-600"
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onSave(f);
    },
    disabled: saving,
    className: "px-4 py-2 rounded-lg bg-pink-600 text-white disabled:opacity-50"
  }, saving ? '保存中…' : '保存')))));
};
var InfluencerModule = function InfluencerModule(_ref33) {
  var user = _ref33.user,
    _ref33$employees = _ref33.employees,
    employees = _ref33$employees === void 0 ? [] : _ref33$employees,
    toast = _ref33.toast;
  var _useState97 = useState([]),
    _useState98 = _slicedToArray(_useState97, 2),
    briefs = _useState98[0],
    setBriefs = _useState98[1];
  var _useState99 = useState(true),
    _useState100 = _slicedToArray(_useState99, 2),
    loading = _useState100[0],
    setLoading = _useState100[1];
  var _useState101 = useState('pipeline'),
    _useState102 = _slicedToArray(_useState101, 2),
    view = _useState102[0],
    setView = _useState102[1]; // 'pipeline' | 'list'
  var _useState103 = useState('all'),
    _useState104 = _slicedToArray(_useState103, 2),
    fStatus = _useState104[0],
    setFStatus = _useState104[1];
  var _useState105 = useState('all'),
    _useState106 = _slicedToArray(_useState105, 2),
    fPlatform = _useState106[0],
    setFPlatform = _useState106[1];
  var _useState107 = useState(''),
    _useState108 = _slicedToArray(_useState107, 2),
    search = _useState108[0],
    setSearch = _useState108[1];
  var _useState109 = useState(null),
    _useState110 = _slicedToArray(_useState109, 2),
    editing = _useState110[0],
    setEditing = _useState110[1];
  var _useState111 = useState(false),
    _useState112 = _slicedToArray(_useState111, 2),
    saving = _useState112[0],
    setSaving = _useState112[1];
  var blankForm = function blankForm() {
    return {
      platforms: [],
      collabType: 'gifted',
      status: 'contacted',
      followerCount: 0,
      sampleCost: 0,
      shippingCost: 0,
      fee: 0,
      briefPoints: [],
      contentUrls: [],
      metrics: {}
    };
  };
  var load = /*#__PURE__*/function () {
    var _ref34 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
      var c, _yield$c$from$select$, data, error, mapped, _t6;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            c = getCdmClient();
            if (c) {
              _context10.n = 1;
              break;
            }
            setLoading(false);
            toast && toast('⚠️ 消息总线未连接');
            return _context10.a(2);
          case 1:
            setLoading(true);
            _context10.p = 2;
            _context10.n = 3;
            return c.from('influencer_briefs').select('*').order('created_at_ms', {
              ascending: false
            }).limit(1000);
          case 3:
            _yield$c$from$select$ = _context10.v;
            data = _yield$c$from$select$.data;
            error = _yield$c$from$select$.error;
            if (!error) {
              _context10.n = 4;
              break;
            }
            throw error;
          case 4:
            mapped = (data || []).map(function (r) {
              return {
                id: r.id,
                influencerName: r.influencer_name,
                platforms: infSafeArr(r.platforms).length ? infSafeArr(r.platforms) : r.platform ? [r.platform] : [],
                handle: r.handle,
                profileUrl: r.profile_url,
                followerCount: r.follower_count || 0,
                region: r.region,
                niche: r.niche,
                contact: r.contact,
                productSku: r.product_sku,
                productName: r.product_name,
                productImage: r.product_image,
                sampleCost: Number(r.sample_cost) || 0,
                shippingCost: Number(r.shipping_cost) || 0,
                shippingTracking: r.shipping_tracking,
                sentDate: r.sent_date,
                collabType: r.collab_type || 'gifted',
                fee: Number(r.fee) || 0,
                discountCode: r.discount_code,
                briefPoints: infSafeArr(r.brief_points),
                hashtags: r.hashtags,
                postingRequirements: r.posting_requirements,
                deadline: r.deadline,
                dosDonts: r.dos_donts,
                status: r.status || 'contacted',
                contentUrls: infSafeArr(r.content_urls),
                metrics: infSafeObj(r.metrics),
                contentRating: r.content_rating,
                notes: r.notes,
                attachments: infSafeArr(r.attachments),
                createdById: r.created_by_id,
                createdByName: r.created_by_name,
                createdAtMs: r.created_at_ms
              };
            });
            setBriefs(mapped);
            _context10.n = 6;
            break;
          case 5:
            _context10.p = 5;
            _t6 = _context10.v;
            console.error('[influencer] load', _t6);
            toast && toast('⚠️ 加载影响者数据失败');
          case 6:
            setLoading(false);
          case 7:
            return _context10.a(2);
        }
      }, _callee1, null, [[2, 5]]);
    }));
    return function load() {
      return _ref34.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
  }, []);
  useEffect(function () {
    var c = getCdmClient();
    if (!c) return;
    var ch = c.channel('influencer-realtime').on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'influencer_briefs'
    }, function () {
      return load();
    }).subscribe();
    return function () {
      try {
        c.removeChannel(ch);
      } catch (e) {}
    };
  }, []);
  var save = /*#__PURE__*/function () {
    var _ref35 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(b) {
      var c, platformsArr, row, _yield$c$from$upsert, error, _t7;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            if (!(!b.influencerName || !b.influencerName.trim())) {
              _context11.n = 1;
              break;
            }
            toast && toast('⚠️ 请填博主名');
            return _context11.a(2);
          case 1:
            setSaving(true);
            c = getCdmClient();
            if (c) {
              _context11.n = 2;
              break;
            }
            setSaving(false);
            toast && toast('⚠️ 未连接');
            return _context11.a(2);
          case 2:
            platformsArr = Array.isArray(b.platforms) && b.platforms.length ? b.platforms : b.platform ? [b.platform] : [];
            row = {
              id: b.id || crypto.randomUUID(),
              influencer_name: b.influencerName.trim(),
              platforms: platformsArr,
              platform: platformsArr[0] || null,
              handle: b.handle || null,
              profile_url: b.profileUrl || null,
              follower_count: Number(b.followerCount) || 0,
              region: b.region || null,
              niche: b.niche || null,
              contact: b.contact || null,
              product_sku: b.productSku || null,
              product_name: b.productName || null,
              product_image: b.productImage || null,
              sample_cost: Number(b.sampleCost) || 0,
              shipping_cost: Number(b.shippingCost) || 0,
              shipping_tracking: b.shippingTracking || null,
              sent_date: b.sentDate || null,
              collab_type: b.collabType || 'gifted',
              fee: Number(b.fee) || 0,
              discount_code: b.discountCode || null,
              brief_points: Array.isArray(b.briefPoints) ? b.briefPoints : [],
              hashtags: b.hashtags || null,
              posting_requirements: b.postingRequirements || null,
              deadline: b.deadline || null,
              dos_donts: b.dosDonts || null,
              status: b.status || 'contacted',
              content_urls: Array.isArray(b.contentUrls) ? b.contentUrls : [],
              metrics: b.metrics || {},
              content_rating: b.contentRating || null,
              notes: b.notes || null,
              attachments: Array.isArray(b.attachments) ? b.attachments : [],
              created_by_id: b.createdById || user.id,
              created_by_name: b.createdByName || user.name || null,
              created_at_ms: b.createdAtMs || Date.now(),
              updated_at: new Date().toISOString()
            };
            _context11.p = 3;
            _context11.n = 4;
            return c.from('influencer_briefs').upsert(row);
          case 4:
            _yield$c$from$upsert = _context11.v;
            error = _yield$c$from$upsert.error;
            if (!error) {
              _context11.n = 5;
              break;
            }
            throw error;
          case 5:
            toast && toast('✓ 已保存');
            setEditing(null);
            load();
            _context11.n = 7;
            break;
          case 6:
            _context11.p = 6;
            _t7 = _context11.v;
            console.error('[influencer] save', _t7);
            toast && toast('⚠️ 保存失败:' + (_t7.message || ''));
          case 7:
            setSaving(false);
          case 8:
            return _context11.a(2);
        }
      }, _callee10, null, [[3, 6]]);
    }));
    return function save(_x5) {
      return _ref35.apply(this, arguments);
    };
  }();
  var changeStatus = /*#__PURE__*/function () {
    var _ref36 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(b, st) {
      var c, _yield$c$from$update$, error, _t8;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            c = getCdmClient();
            if (c) {
              _context12.n = 1;
              break;
            }
            return _context12.a(2);
          case 1:
            setBriefs(function (prev) {
              return prev.map(function (x) {
                return x.id === b.id ? _objectSpread(_objectSpread({}, x), {}, {
                  status: st
                }) : x;
              });
            });
            _context12.p = 2;
            _context12.n = 3;
            return c.from('influencer_briefs').update({
              status: st,
              updated_at: new Date().toISOString()
            }).eq('id', b.id);
          case 3:
            _yield$c$from$update$ = _context12.v;
            error = _yield$c$from$update$.error;
            if (!error) {
              _context12.n = 4;
              break;
            }
            throw error;
          case 4:
            toast && toast('✓ 状态 → ' + infStat(st).emoji + ' ' + infStat(st).label);
            _context12.n = 6;
            break;
          case 5:
            _context12.p = 5;
            _t8 = _context12.v;
            toast && toast('⚠️ 改状态失败');
            load();
          case 6:
            return _context12.a(2);
        }
      }, _callee11, null, [[2, 5]]);
    }));
    return function changeStatus(_x6, _x7) {
      return _ref36.apply(this, arguments);
    };
  }();
  var del = /*#__PURE__*/function () {
    var _ref37 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(b) {
      var c, _yield$c$from$delete$, error, _t9;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            _context13.n = 1;
            return wsConfirm('确定删除「' + b.influencerName + '」这条合作?不可恢复');
          case 1:
            if (_context13.v) {
              _context13.n = 2;
              break;
            }
            return _context13.a(2);
          case 2:
            c = getCdmClient();
            if (c) {
              _context13.n = 3;
              break;
            }
            return _context13.a(2);
          case 3:
            _context13.p = 3;
            _context13.n = 4;
            return c.from('influencer_briefs')["delete"]().eq('id', b.id);
          case 4:
            _yield$c$from$delete$ = _context13.v;
            error = _yield$c$from$delete$.error;
            if (!error) {
              _context13.n = 5;
              break;
            }
            throw error;
          case 5:
            setBriefs(function (prev) {
              return prev.filter(function (x) {
                return x.id !== b.id;
              });
            });
            toast && toast('✓ 已删除');
            _context13.n = 7;
            break;
          case 6:
            _context13.p = 6;
            _t9 = _context13.v;
            toast && toast('⚠️ 删除失败');
          case 7:
            return _context13.a(2);
        }
      }, _callee12, null, [[3, 6]]);
    }));
    return function del(_x8) {
      return _ref37.apply(this, arguments);
    };
  }();
  var filtered = briefs.filter(function (b) {
    if (fStatus !== 'all' && b.status !== fStatus) return false;
    if (fPlatform !== 'all' && !(b.platforms || []).includes(fPlatform)) return false;
    if (search.trim()) {
      var q = search.toLowerCase();
      var hay = ((b.influencerName || '') + ' ' + (b.handle || '') + ' ' + (b.productName || '') + ' ' + (b.discountCode || '') + ' ' + (b.niche || '')).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-3 mb-4"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-bold text-stone-800"
  }, "\u2728 \u5F71\u54CD\u8005\u5408\u4F5C"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs px-2 py-0.5 rounded-full bg-pink-100 text-pink-700"
  }, briefs.length, " \u6761"), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-stone-400"
  }, "\u4E0E\u7F8E\u5DE5 WorkTrack \u5171\u4EAB \xB7 \u5B9E\u65F6\u540C\u6B65"), /*#__PURE__*/React.createElement("span", {
    className: "flex-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex rounded-lg overflow-hidden border border-stone-300"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setView('pipeline');
    },
    className: 'px-3 py-1.5 text-sm ' + (view === 'pipeline' ? 'bg-pink-600 text-white' : 'bg-white text-stone-600')
  }, "\uD83C\uDFAC \u6D41\u6C34\u7EBF"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setView('list');
    },
    className: 'px-3 py-1.5 text-sm ' + (view === 'list' ? 'bg-pink-600 text-white' : 'bg-white text-stone-600')
  }, "\uD83D\uDCCB \u5217\u8868")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEditing(blankForm());
    },
    className: "px-3 py-1.5 text-sm rounded-lg bg-stone-800 text-white"
  }, "+ \u65B0\u5EFA\u5408\u4F5C")), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap items-center gap-2 mb-4"
  }, /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u535A\u4E3B / \u4EA7\u54C1 / \u6298\u6263\u7801 / niche",
    className: "px-3 py-1.5 text-sm border border-stone-300 rounded-lg",
    style: {
      minWidth: 200
    }
  }), /*#__PURE__*/React.createElement("select", {
    value: fStatus,
    onChange: function onChange(e) {
      return setFStatus(e.target.value);
    },
    className: "px-2 py-1.5 text-sm border border-stone-300 rounded-lg"
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u72B6\u6001"), INF_STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.v,
      value: s.v
    }, s.emoji, " ", s.label);
  })), /*#__PURE__*/React.createElement("select", {
    value: fPlatform,
    onChange: function onChange(e) {
      return setFPlatform(e.target.value);
    },
    className: "px-2 py-1.5 text-sm border border-stone-300 rounded-lg"
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u5E73\u53F0"), INF_PLATFORMS.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p.v,
      value: p.v
    }, p.emoji, " ", p.label);
  })), /*#__PURE__*/React.createElement("span", {
    className: "text-xs text-stone-400"
  }, "\u663E\u793A ", filtered.length, " / ", briefs.length)), loading ? /*#__PURE__*/React.createElement("div", {
    className: "text-center text-stone-400 py-12"
  }, "\u52A0\u8F7D\u4E2D\u2026") : view === 'pipeline' ? /*#__PURE__*/React.createElement("div", {
    className: "grid gap-1.5",
    style: {
      gridTemplateColumns: 'repeat(7,minmax(0,1fr))'
    }
  }, INF_STATUSES.map(function (col) {
    var items = filtered.filter(function (b) {
      return b.status === col.v;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: col.v,
      className: "bg-stone-50 rounded-lg p-1.5",
      style: {
        minHeight: 380
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-xs font-bold mb-2 px-1.5 py-1 rounded flex items-center justify-between",
      style: {
        background: col.bg,
        color: col.color
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "truncate"
    }, col.emoji, " ", col.label), /*#__PURE__*/React.createElement("span", {
      className: "opacity-60 ml-1"
    }, items.length)), /*#__PURE__*/React.createElement("div", {
      className: "space-y-1.5"
    }, items.map(function (b) {
      var emojis = (b.platforms || []).map(function (p) {
        return infPlat(p).emoji;
      }).join('');
      return /*#__PURE__*/React.createElement("button", {
        key: b.id,
        onClick: function onClick() {
          return setEditing(b);
        },
        className: "w-full text-left bg-white rounded-md p-1.5 border border-stone-200 hover:border-pink-300"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-[11px] font-bold truncate text-stone-800"
      }, emojis, " ", b.influencerName), /*#__PURE__*/React.createElement("div", {
        className: "text-[10px] text-stone-500 truncate"
      }, b.productName || '—'), (b.followerCount > 0 || b.sampleCost + b.shippingCost + b.fee > 0) && /*#__PURE__*/React.createElement("div", {
        className: "text-[9px] text-stone-400 truncate"
      }, b.followerCount > 0 ? b.followerCount >= 1000 ? Math.round(b.followerCount / 100) / 10 + 'k 粉' : b.followerCount + ' 粉' : '', b.sampleCost + b.shippingCost + b.fee > 0 ? " \xB7 \xA5".concat(b.sampleCost + b.shippingCost + b.fee) : ''));
    }), items.length === 0 && /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-stone-300 text-center py-3 border border-dashed border-stone-200 rounded"
    }, "\u2014")));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "grid gap-3",
    style: {
      gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))'
    }
  }, filtered.map(function (b) {
    return /*#__PURE__*/React.createElement(InfCard, {
      key: b.id,
      b: b,
      onOpen: function onOpen() {
        return setEditing(b);
      },
      onStatus: function onStatus(st) {
        return changeStatus(b, st);
      },
      onDel: function onDel() {
        return del(b);
      }
    });
  }), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "text-stone-400 py-8 col-span-full text-center"
  }, "\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5408\u4F5C \xB7 \u70B9\u300C+ \u65B0\u5EFA\u5408\u4F5C\u300D\u5F00\u59CB")), editing && /*#__PURE__*/React.createElement(InfForm, {
    initial: editing,
    onCancel: function onCancel() {
      return setEditing(null);
    },
    onSave: save,
    saving: saving,
    toast: toast
  }));
};

// ============================================================
// 📨 fix9c: 跨部门协作模块 (CrossDeptModule)
// 美工/客服/跟单 三系统共享消息总线 (cross_dept_messages 表)
// 数据由 App 注入(loadCdmMessages + cdmMessages),realtime 在 App 层订阅
// ============================================================
// 🆕 fix136: 跨部门图片发送前压缩(缩到 1280 + JPEG 0.8),避免原图 base64 撑爆共享表
function cdmCompressImg(dataUrl) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1280;
  var quality = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.8;
  return new Promise(function (resolve) {
    try {
      if (!/^data:image\//i.test(dataUrl || '')) {
        resolve(dataUrl);
        return;
      }
      var img = new Image();
      img.onload = function () {
        try {
          var w = img.naturalWidth || img.width,
            h = img.naturalHeight || img.height;
          if (w > max || h > max) {
            var s = max / Math.max(w, h);
            w = Math.round(w * s);
            h = Math.round(h * s);
          }
          var c = document.createElement('canvas');
          c.width = w;
          c.height = h;
          var ctx = c.getContext('2d');
          ctx.fillStyle = '#fff';
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);
          resolve(c.toDataURL('image/jpeg', quality));
        } catch (e) {
          resolve(dataUrl);
        }
      };
      img.onerror = function () {
        return resolve(dataUrl);
      };
      img.src = dataUrl;
    } catch (e) {
      resolve(dataUrl);
    }
  });
}
// 🆕 fix123: 附件是否图片 —— 不只看 mime(跨系统传来的附件常缺 mime),也按文件名后缀 / data:image 判断
var cdmIsImg = function cdmIsImg(a) {
  if (!a) return false;
  if ((a.mime || '').startsWith('image/')) return true;
  if (/^data:image\//i.test(a.dataUrl || a.url || '')) return true;
  return /\.(png|jpe?g|gif|webp|bmp|svg)(\?|$)/i.test((a.name || a.url || a.dataUrl || '').toLowerCase());
};
var CrossDeptModule = function CrossDeptModule(_ref38) {
  var user = _ref38.user,
    employees = _ref38.employees,
    messages = _ref38.messages,
    loading = _ref38.loading,
    onReload = _ref38.onReload,
    toast = _ref38.toast,
    _ref38$shopOwners = _ref38.shopOwners,
    shopOwners = _ref38$shopOwners === void 0 ? [] : _ref38$shopOwners,
    _ref38$cdmTimeoutConf = _ref38.cdmTimeoutConfig,
    cdmTimeoutConfig = _ref38$cdmTimeoutConf === void 0 ? {} : _ref38$cdmTimeoutConf;
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  // 🆕 v22-CV/CW: 4 个 tab — inbox / assigned-to-me / overdue / sent
  var _useState113 = useState('inbox'),
    _useState114 = _slicedToArray(_useState113, 2),
    tab = _useState114[0],
    setTab = _useState114[1];
  // 🆕 fix15: 升级为 AdvancedDateFilter (本周/上周/本月/任意月份/任意月份的第N周)
  var _useState115 = useState({
      kind: 'days',
      n: 30
    }),
    _useState116 = _slicedToArray(_useState115, 2),
    dateFilter = _useState116[0],
    setDateFilter = _useState116[1];
  var _useState117 = useState('all'),
    _useState118 = _slicedToArray(_useState117, 2),
    filterStatus = _useState118[0],
    setFilterStatus = _useState118[1];
  var _useState119 = useState('all'),
    _useState120 = _slicedToArray(_useState119, 2),
    filterCategory = _useState120[0],
    setFilterCategory = _useState120[1];
  var _useState121 = useState('all'),
    _useState122 = _slicedToArray(_useState121, 2),
    filterPriority = _useState122[0],
    setFilterPriority = _useState122[1];
  var _useState123 = useState('all'),
    _useState124 = _slicedToArray(_useState123, 2),
    filterFrom = _useState124[0],
    setFilterFrom = _useState124[1];
  var _useState125 = useState(''),
    _useState126 = _slicedToArray(_useState125, 2),
    search = _useState126[0],
    setSearch = _useState126[1];
  var _useState127 = useState(1),
    _useState128 = _slicedToArray(_useState127, 2),
    page = _useState128[0],
    setPage = _useState128[1];
  // 🆕 v22-CV/CW: 分页支持 20/50/100
  var _useState129 = useState(50),
    _useState130 = _slicedToArray(_useState129, 2),
    pageSize = _useState130[0],
    setPageSize = _useState130[1];
  var _useState131 = useState(false),
    _useState132 = _slicedToArray(_useState131, 2),
    showNew = _useState132[0],
    setShowNew = _useState132[1];
  var _useState133 = useState(null),
    _useState134 = _slicedToArray(_useState133, 2),
    openMsgId = _useState134[0],
    setOpenMsgId = _useState134[1];
  // 🆕 v22-CW Round 3b: 主管管理面板
  var _useState135 = useState(false),
    _useState136 = _slicedToArray(_useState135, 2),
    showShopOwners = _useState136[0],
    setShowShopOwners = _useState136[1];
  var _useState137 = useState(false),
    _useState138 = _slicedToArray(_useState137, 2),
    showTimeoutSettings = _useState138[0],
    setShowTimeoutSettings = _useState138[1];
  var openMsgBase = useMemo(function () {
    return openMsgId ? messages.find(function (m) {
      return m.id === openMsgId;
    }) : null;
  }, [openMsgId, messages]);
  // 🆕 fix136: 详情按需补取 attachments/thread(列表已不带,避免巨型 base64 拖慢)
  var _useState139 = useState(null),
    _useState140 = _slicedToArray(_useState139, 2),
    openMsgExtra = _useState140[0],
    setOpenMsgExtra = _useState140[1];
  useEffect(function () {
    setOpenMsgExtra(null);
    if (!openMsgId) return;
    var alive = true;
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
      var c, _yield$c$from$select$2, data, _t0;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            _context14.p = 0;
            c = getCdmClient();
            if (c) {
              _context14.n = 1;
              break;
            }
            return _context14.a(2);
          case 1:
            _context14.n = 2;
            return c.from('cross_dept_messages').select('attachments,thread').eq('id', openMsgId).maybeSingle();
          case 2:
            _yield$c$from$select$2 = _context14.v;
            data = _yield$c$from$select$2.data;
            if (alive && data) setOpenMsgExtra(data);
            _context14.n = 4;
            break;
          case 3:
            _context14.p = 3;
            _t0 = _context14.v;
          case 4:
            return _context14.a(2);
        }
      }, _callee13, null, [[0, 3]]);
    }))();
    return function () {
      alive = false;
    };
  }, [openMsgId]);
  var openMsg = useMemo(function () {
    if (!openMsgBase) return null;
    return _objectSpread(_objectSpread({}, openMsgBase), {}, {
      attachments: openMsgExtra && openMsgExtra.attachments || openMsgBase.attachments || [],
      thread: openMsgExtra && openMsgExtra.thread || openMsgBase.thread || []
    });
  }, [openMsgBase, openMsgExtra]);

  // 🆕 v22-CV/CW: 进入页面时尝试申请浏览器通知权限
  useEffect(function () {
    try {
      if (typeof Notification !== 'undefined' && Notification.permission === 'default') {
        Notification.requestPermission();
      }
    } catch (e) {}
  }, []);

  // 🆕 fix15: 时间范围 (start ≤ created_at_ms < end)
  var dateRange = useMemo(function () {
    return getDateRange(dateFilter);
  }, [dateFilter]);

  // 🆕 v22-CV/CW: canSee — 收件箱可以看到 to_system=cs 或自己是 watcher 的工单
  var canSee = function canSee(m) {
    if (m.to_system === MY_SYSTEM) return true;
    if (Array.isArray(m.watchers) && m.watchers.includes(user.id)) return true;
    return false;
  };

  // 🆕 v22-CV/CW: 4 个 tab — inbox / assigned-to-me / overdue / sent
  var tabFiltered = useMemo(function () {
    if (tab === 'inbox') return messages.filter(canSee);
    if (tab === 'assigned-to-me') return messages.filter(function (m) {
      return m.assigned_to_id === user.id;
    });
    if (tab === 'overdue') return messages.filter(function (m) {
      return canSee(m) && isOverdue(m, cdmTimeoutConfig);
    });
    if (tab === 'all') return messages;
    // sent
    return messages.filter(function (m) {
      return m.from_user_id === user.id && m.from_system === MY_SYSTEM;
    });
  }, [messages, tab, user.id, cdmTimeoutConfig]);
  var filtered = useMemo(function () {
    var arr = tabFiltered;
    // 🆕 fix15: 用 start/end 范围筛选 (支持本周/上周/本月/任意月份/任意月份的第N周)
    if (dateRange.start > 0 || dateRange.end < Infinity) {
      arr = arr.filter(function (m) {
        var t = m.created_at_ms || 0;
        return t >= dateRange.start && t < dateRange.end;
      });
    }
    if (filterStatus !== 'all') arr = arr.filter(function (m) {
      return m.status === filterStatus;
    });
    if (filterCategory !== 'all') arr = arr.filter(function (m) {
      return m.category === filterCategory;
    });
    if (filterPriority !== 'all') arr = arr.filter(function (m) {
      return m.priority === filterPriority;
    });
    if (tab === 'inbox' && filterFrom !== 'all') arr = arr.filter(function (m) {
      return m.from_system === filterFrom;
    });
    if (search.trim()) {
      var kws = search.toLowerCase().split(/\s+/).filter(Boolean);
      arr = arr.filter(function (m) {
        var hay = [m.title, m.body, m.from_user_name, m.to_user_name, m.related_ref, m.category, m.priority, m.related_shop, m.assigned_to_name].concat(_toConsumableArray((m.thread || []).map(function (t) {
          return t.content;
        }))).filter(Boolean).join(' ').toLowerCase();
        return kws.every(function (kw) {
          return hay.includes(kw);
        });
      });
    }
    // 🆕 v22-CV/CW: 排序 — 超时 > 紧急 > 时间
    arr = _toConsumableArray(arr).sort(function (a, b) {
      var aOverdue = isOverdue(a, cdmTimeoutConfig) ? 1 : 0;
      var bOverdue = isOverdue(b, cdmTimeoutConfig) ? 1 : 0;
      if (aOverdue !== bOverdue) return bOverdue - aOverdue;
      var pri = {
        urgent: 4,
        high: 3,
        normal: 2,
        low: 1
      };
      var aP = pri[a.priority] || 0;
      var bP = pri[b.priority] || 0;
      if (aP !== bP) return bP - aP;
      return (b.created_at_ms || 0) - (a.created_at_ms || 0);
    });
    return arr;
  }, [tabFiltered, dateRange, filterStatus, filterCategory, filterPriority, filterFrom, search, tab, cdmTimeoutConfig]);

  // 🆕 v22-CV/CW: 统计 — 收件箱基础 + overdue + assigned-to-me
  var stats = useMemo(function () {
    var inbox = messages.filter(canSee);
    return {
      total: inbox.length,
      unread: inbox.filter(function (m) {
        return !(m.read_by || []).includes(user.id) && m.from_user_id !== user.id;
      }).length,
      pending: inbox.filter(function (m) {
        return m.status === 'pending';
      }).length,
      urgent: inbox.filter(function (m) {
        return m.priority === 'urgent' && m.status !== 'done' && m.status !== 'cancelled';
      }).length,
      overdue: inbox.filter(function (m) {
        return isOverdue(m, cdmTimeoutConfig);
      }).length,
      assignedToMe: messages.filter(function (m) {
        return m.assigned_to_id === user.id && m.status !== 'done' && m.status !== 'cancelled';
      }).length
    };
  }, [messages, user.id, cdmTimeoutConfig]);
  var totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  var safePage = Math.min(page, totalPages);
  var pageItems = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  // 切换 tab / filter 时重置页码
  useEffect(function () {
    setPage(1);
  }, [tab, dateFilter, filterStatus, filterCategory, filterPriority, filterFrom, search, pageSize]);

  // 🆕 fix15: 旧的 timeChips 已被 <AdvancedDateFilter> 取代

  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 17,
      fontWeight: 600
    }
  }, "\uD83D\uDCE8 \u8DE8\u90E8\u95E8\u534F\u4F5C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "\u548C \uD83C\uDFA8 \u7F8E\u5DE5 / \uD83D\uDCCB \u8DDF\u5355 \u5B9E\u65F6\u4E92\u901A \xB7 \u6D88\u606F\u603B\u7EBF \xB7 \u652F\u6301\u56FE\u7247\u9644\u4EF6")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, isAdmin && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowShopOwners(true);
    },
    className: "btn-sec",
    style: {
      padding: '6px 12px',
      fontSize: 12
    },
    title: "\u7EF4\u62A4\u5E97\u94FA-\u8D1F\u8D23\u4EBA\u6620\u5C04(\u4E09\u65B9\u5171\u4EAB)"
  }, "\uD83C\uDF10 \u5E97\u94FA\u8D1F\u8D23\u4EBA (", shopOwners.filter(function (s) {
    return s.system === MY_SYSTEM;
  }).length, ")"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowTimeoutSettings(true);
    },
    className: "btn-sec",
    style: {
      padding: '6px 12px',
      fontSize: 12
    },
    title: "\u81EA\u5B9A\u4E49\u5BA2\u670D\u90E8\u5404\u5206\u7C7B\u7684\u8D85\u65F6\u9608\u503C"
  }, "\u23F0 \u8D85\u65F6\u9608\u503C")), /*#__PURE__*/React.createElement("button", {
    onClick: onReload,
    disabled: loading,
    className: "btn-sec",
    style: {
      padding: '6px 12px',
      fontSize: 12
    }
  }, loading ? '⏳' : '🔄', " \u5237\u65B0"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowNew(true);
    },
    style: {
      padding: '6px 16px',
      background: '#0071e3',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "+ \u65B0\u5EFA\u6D88\u606F")))), (stats.urgent > 0 || stats.overdue > 0 || isAdmin && stats.pending > 0) && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(90deg, #fef2f2 0%, #fff7ed 100%)',
      border: '2px solid #fca5a5',
      borderRadius: 14,
      padding: '10px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 9,
      background: '#dc2626',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontSize: 18,
      animation: 'pulse 2s ease-in-out infinite'
    }
  }, "\uD83D\uDEA8"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 200,
      fontSize: 12,
      color: '#7f1d1d',
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13
    }
  }, "\u26A0\uFE0F \u8FD8\u6709\u5DE5\u5355\u9700\u8981\u5904\u7406 \xB7 \u522B\u8BA9\u6D88\u606F\u88AB\u7FA4\u91CC\u5237\u4E0B\u53BB"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2
    }
  }, stats.urgent > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 12
    }
  }, "\uD83D\uDEA8 \u7D27\u6025 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#b91c1c'
    }
  }, stats.urgent), " \u6761"), stats.overdue > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 12
    }
  }, "\u23F0 \u8D85\u65F6 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#b91c1c'
    }
  }, stats.overdue), " \u6761"), isAdmin && stats.pending > 0 && /*#__PURE__*/React.createElement("span", null, "\u23F3 \u5F85\u5904\u7406 ", /*#__PURE__*/React.createElement("strong", null, stats.pending), " \u6761"))), stats.overdue > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setTab('overdue');
    },
    style: {
      padding: '7px 14px',
      background: '#dc2626',
      color: 'white',
      border: 'none',
      borderRadius: 7,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 700,
      fontFamily: 'inherit',
      flexShrink: 0
    }
  }, "\u67E5\u770B\u8D85\u65F6")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3",
    style: {
      borderLeft: '4px solid #0071e3'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83D\uDCE5 \u6536\u4EF6\u603B\u6570"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: '#0071e3',
      marginTop: 2
    }
  }, stats.total)), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3",
    style: {
      borderLeft: '4px solid #dc2626'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83D\uDD35 \u672A\u8BFB"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: stats.unread > 0 ? '#dc2626' : 'var(--ink-3)',
      marginTop: 2
    }
  }, stats.unread)), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3",
    style: {
      borderLeft: '4px solid #d97706'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\u23F3 \u5F85\u5904\u7406"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: '#d97706',
      marginTop: 2
    }
  }, stats.pending)), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3",
    style: {
      borderLeft: '4px solid ' + (stats.urgent > 0 ? '#dc2626' : '#86868b')
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83D\uDEA8 \u7D27\u6025\u672A\u5B8C\u6210"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: stats.urgent > 0 ? '#dc2626' : 'var(--ink-3)',
      marginTop: 2
    }
  }, stats.urgent)), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return stats.overdue > 0 && setTab('overdue');
    },
    className: "paper rounded-2xl p-3",
    style: {
      borderLeft: '4px solid ' + (stats.overdue > 0 ? '#dc2626' : '#86868b'),
      cursor: stats.overdue > 0 ? 'pointer' : 'default',
      background: stats.overdue > 0 ? 'linear-gradient(180deg, #fef2f2 0%, white 100%)' : 'white',
      animation: stats.overdue > 0 ? 'pulse 2s ease-in-out infinite' : 'none',
      transition: 'transform .12s'
    },
    onMouseEnter: function onMouseEnter(e) {
      if (stats.overdue > 0) e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: stats.overdue > 0 ? '#b91c1c' : 'var(--ink-3)',
      fontWeight: 700
    }
  }, "\u23F0 \u8D85\u65F6"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: stats.overdue > 0 ? '#b91c1c' : 'var(--ink-3)',
      marginTop: 2
    }
  }, stats.overdue))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 10,
      flexWrap: 'wrap'
    }
  }, [{
    key: 'inbox',
    label: '📥 收件箱',
    count: messages.filter(canSee).length
  }, {
    key: 'assigned-to-me',
    label: '📌 分派给我',
    count: stats.assignedToMe,
    highlight: stats.assignedToMe > 0
  }, {
    key: 'overdue',
    label: '⏰ 超时',
    count: stats.overdue,
    highlight: stats.overdue > 0,
    danger: true
  }, {
    key: 'sent',
    label: '📤 我发起的',
    count: messages.filter(function (m) {
      return m.from_user_id === user.id && m.from_system === MY_SYSTEM;
    }).length
  }, {
    key: 'all',
    label: '\uD83C\uDF10 \u5168\u90E8',
    count: messages.length
  }].map(function (t) {
    var active = tab === t.key;
    var bgColor = active ? t.danger ? '#dc2626' : '#0071e3' : 'white';
    var borderColor = active ? t.danger ? '#dc2626' : '#0071e3' : t.highlight ? t.danger ? '#fca5a5' : '#fbbf24' : 'var(--line)';
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return setTab(t.key);
      },
      style: {
        padding: '7px 14px',
        borderRadius: 8,
        border: '1px solid ' + borderColor,
        background: bgColor,
        color: active ? 'white' : t.highlight ? t.danger ? '#b91c1c' : '#92400e' : 'var(--ink-2)',
        cursor: 'pointer',
        fontSize: 13,
        fontWeight: active ? 600 : t.highlight ? 600 : 500,
        fontFamily: 'inherit',
        animation: !active && t.danger && t.highlight ? 'pulse 2.4s ease-in-out infinite' : 'none'
      }
    }, t.label, ' ', /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 6px',
        background: active ? 'rgba(255,255,255,.25)' : t.highlight ? t.danger ? '#fee2e2' : '#fef3c7' : '#f5f5f7',
        color: active ? 'white' : t.highlight ? t.danger ? '#b91c1c' : '#92400e' : 'var(--ink-3)',
        borderRadius: 8,
        marginLeft: 2,
        fontSize: 10,
        fontWeight: 700
      }
    }, t.count));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginRight: 4
    }
  }, "\u23F1 \u65F6\u95F4:"), /*#__PURE__*/React.createElement(AdvancedDateFilter, {
    value: dateFilter,
    onChange: setDateFilter,
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: 6,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: filterStatus,
    onChange: function onChange(e) {
      return setFilterStatus(e.target.value);
    },
    style: {
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u72B6\u6001"), CDM_STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, s.label);
  })), /*#__PURE__*/React.createElement("select", {
    value: filterCategory,
    onChange: function onChange(e) {
      return setFilterCategory(e.target.value);
    },
    style: {
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u5206\u7C7B"), CDM_CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.id,
      value: c.id
    }, c.label);
  })), /*#__PURE__*/React.createElement("select", {
    value: filterPriority,
    onChange: function onChange(e) {
      return setFilterPriority(e.target.value);
    },
    style: {
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u4F18\u5148\u7EA7"), CDM_PRIORITIES.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p.id,
      value: p.id
    }, p.label);
  })), tab === 'inbox' && /*#__PURE__*/React.createElement("select", {
    value: filterFrom,
    onChange: function onChange(e) {
      return setFilterFrom(e.target.value);
    },
    style: {
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u6765\u6E90"), CDM_SYSTEMS.filter(function (s) {
    return s.id !== 'cs';
  }).map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, s.label);
  }))), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u641C\u7D22 \u6807\u9898 / \u63CF\u8FF0 / \u5173\u8054\u53F7 / \u5BF9\u8BDD\u5185\u5BB9(\u591A\u4E2A\u5173\u952E\u8BCD\u7A7A\u683C\u5206\u5F00)",
    style: {
      width: '100%',
      padding: '7px 12px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      fontFamily: 'inherit',
      background: 'white'
    }
  })), totalPages > 1 && /*#__PURE__*/React.createElement(CdmPager, {
    page: safePage,
    total: totalPages,
    count: filtered.length,
    pageSize: pageSize,
    setPageSize: setPageSize,
    onChange: setPage
  }), loading && messages.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-10",
    style: {
      textAlign: 'center',
      color: 'var(--ink-3)'
    }
  }, "\u23F3 \u52A0\u8F7D\u4E2D...") : pageItems.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-12",
    style: {
      textAlign: 'center',
      color: 'var(--ink-3)'
    }
  }, "\uD83C\uDF89 ", tab === 'inbox' ? '收件箱' : tab === 'all' ? '全部' : '发件箱', "\u6682\u65E0\u6D88\u606F", (dateFilter === null || dateFilter === void 0 ? void 0 : dateFilter.kind) !== 'all' || search.trim() || filterStatus !== 'all' || filterCategory !== 'all' || filterPriority !== 'all' || filterFrom !== 'all' ? '(当前筛选下)' : '') : /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, pageItems.map(function (m) {
    return /*#__PURE__*/React.createElement(CdmMessageCard, {
      key: m.id,
      msg: m,
      user: user,
      tab: tab,
      cdmTimeoutConfig: cdmTimeoutConfig,
      onReload: onReload,
      onOpen: function onOpen() {
        return setOpenMsgId(m.id);
      }
    });
  })), totalPages > 1 && /*#__PURE__*/React.createElement(CdmPager, {
    page: safePage,
    total: totalPages,
    count: filtered.length,
    pageSize: pageSize,
    setPageSize: setPageSize,
    onChange: setPage
  }), showNew && /*#__PURE__*/React.createElement(CdmNewMessageModal, {
    user: user,
    employees: employees,
    shopOwners: shopOwners,
    onClose: function onClose() {
      return setShowNew(false);
    },
    onSent: function onSent() {
      setShowNew(false);
      onReload();
      toast('✓ 已发送');
    },
    toast: toast
  }), openMsg && /*#__PURE__*/React.createElement(CdmDetailModal, {
    msg: openMsg,
    user: user,
    employees: employees,
    shopOwners: shopOwners,
    cdmTimeoutConfig: cdmTimeoutConfig,
    onClose: function onClose() {
      return setOpenMsgId(null);
    },
    onChanged: onReload,
    toast: toast
  }), showShopOwners && /*#__PURE__*/React.createElement(ShopOwnersManager, {
    user: user,
    employees: employees,
    shopOwners: shopOwners,
    onClose: function onClose() {
      return setShowShopOwners(false);
    },
    toast: toast
  }), showTimeoutSettings && /*#__PURE__*/React.createElement(TimeoutSettingsModal, {
    user: user,
    cdmTimeoutConfig: cdmTimeoutConfig,
    onClose: function onClose() {
      return setShowTimeoutSettings(false);
    },
    toast: toast
  }));
};

// 简单分页器 — 🆕 v22-CV/CW: 支持 20/50/100 每页切换
var CdmPager = function CdmPager(_ref40) {
  var page = _ref40.page,
    total = _ref40.total,
    count = _ref40.count,
    pageSize = _ref40.pageSize,
    setPageSize = _ref40.setPageSize,
    onChange = _ref40.onChange;
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl",
    style: {
      padding: '8px 12px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 11,
      color: 'var(--ink-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u5171 ", count, " \u6761 \xB7 \u7B2C ", page, " / ", total, " \u9875"), setPageSize && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u6BCF\u9875:"), [20, 50, 100].map(function (n) {
    return /*#__PURE__*/React.createElement("button", {
      key: n,
      onClick: function onClick() {
        return setPageSize(n);
      },
      style: {
        padding: '2px 8px',
        fontSize: 11,
        borderRadius: 5,
        border: '1px solid ' + (pageSize === n ? '#0071e3' : 'var(--line)'),
        background: pageSize === n ? '#0071e3' : 'white',
        color: pageSize === n ? 'white' : 'var(--ink-2)',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: pageSize === n ? 600 : 500
      }
    }, n);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onChange(1);
    },
    disabled: page === 1,
    className: "btn-ghost",
    style: {
      padding: '3px 10px',
      fontSize: 12,
      opacity: page === 1 ? 0.4 : 1
    }
  }, "\xAB"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onChange(Math.max(1, page - 1));
    },
    disabled: page === 1,
    className: "btn-ghost",
    style: {
      padding: '3px 10px',
      fontSize: 12,
      opacity: page === 1 ? 0.4 : 1
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onChange(Math.min(total, page + 1));
    },
    disabled: page === total,
    className: "btn-ghost",
    style: {
      padding: '3px 10px',
      fontSize: 12,
      opacity: page === total ? 0.4 : 1
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onChange(total);
    },
    disabled: page === total,
    className: "btn-ghost",
    style: {
      padding: '3px 10px',
      fontSize: 12,
      opacity: page === total ? 0.4 : 1
    }
  }, "\xBB")));
};

// 消息卡片
// 🆕 v22-CV/CW: 显示 超时角标 / 关联网站 / 分派给 / watcher 数 / 截止剩余天数
var CdmMessageCard = function CdmMessageCard(_ref41) {
  var msg = _ref41.msg,
    user = _ref41.user,
    tab = _ref41.tab,
    onOpen = _ref41.onOpen,
    cdmTimeoutConfig = _ref41.cdmTimeoutConfig,
    onReload = _ref41.onReload;
  var cat = getCategoryDef(msg.category); // 用 getCategoryDef 而非 findCdm — 旧分类(website_fix 等)自动映射到新分类
  var pri = findCdm(CDM_PRIORITIES, msg.priority);
  var st = findCdm(CDM_STATUSES, msg.status);
  var peerSystem = tab === 'inbox' ? msg.from_system : msg.to_system;
  var peer = findCdm(CDM_SYSTEMS, peerSystem);
  var peerName = tab === 'inbox' ? msg.from_user_name || '?' : msg.to_user_name || '整个部门';
  // 🆕 fix62 v5: 发件箱明确区分"具体人 vs 整个部门"
  var peerIcon = tab === 'inbox' ? '👤' : msg.to_user_id || msg.to_user_name ? '👤' : '📢';
  var isUnread = tab === 'inbox' && !(msg.read_by || []).includes(user.id) && msg.from_user_id !== user.id;
  var threadCount = (msg.thread || []).length;
  var attCount = (msg.attachments || []).length + (msg.thread || []).reduce(function (s, t) {
    return s + (t.attachments || []).length;
  }, 0);
  var dateStr = msg.created_at_ms ? new Date(msg.created_at_ms).toLocaleString('zh-CN', {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  }) : '';
  // 🆕 超时判定
  var overdue = isOverdue(msg, cdmTimeoutConfig);
  var dueAt = getDueAt(msg, cdmTimeoutConfig);
  var dueDays = Math.round((dueAt - Date.now()) / 86400000);
  var watcherCount = Array.isArray(msg.watchers) ? msg.watchers.length : 0;
  // 🆕 任何客服都可删除(共享消息,软删除可恢复)
  var canDelete = true;
  var delMsg = /*#__PURE__*/function () {
    var _ref42 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(e) {
      var c, _yield$c$from$update$2, error, r, _t1;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.p = _context15.n) {
          case 0:
            e.stopPropagation();
            _context15.n = 1;
            return wsConfirm('删除跨部门消息「' + (msg.title || String(msg.body || msg.content || '').slice(0, 24) || '无标题') + '」(ID ' + msg.id + ')?\n所有部门都不再显示。软删除,可在回收站恢复。', { title: '🗑 删除跨部门消息?', okText: '删除', cancelText: '取消' });
          case 1:
            if (!_context15.v) { return _context15.a(2); }
            c = getCdmClient();
            if (c) {
              _context15.n = 2;
              break;
            }
            alert('消息总线未连接');
            return _context15.a(2);
          case 2:
            _context15.p = 2;
            _context15.n = 3;
            return c.from('cross_dept_messages').update({
              deleted: true,
              updated_at: new Date().toISOString()
            }).eq('id', msg.id);
          case 3:
            _yield$c$from$update$2 = _context15.v;
            error = _yield$c$from$update$2.error;
            if (!(error && /deleted/i.test(error.message || ''))) {
              _context15.n = 5;
              break;
            }
            _context15.n = 4;
            return c.from('cross_dept_messages')["delete"]().eq('id', msg.id);
          case 4:
            r = _context15.v;
            error = r.error;
          case 5:
            if (!error) {
              _context15.n = 6;
              break;
            }
            throw error;
          case 6:
            onReload && onReload();
            _context15.n = 8;
            break;
          case 7:
            _context15.p = 7;
            _t1 = _context15.v;
            alert('删除失败: ' + (_t1.message || _t1));
          case 8:
            return _context15.a(2);
        }
      }, _callee14, null, [[2, 7]]);
    }));
    return function delMsg(_x9) {
      return _ref42.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      padding: '12px 14px',
      background: overdue ? '#fef2f2' : 'white',
      border: '1.5px solid ' + (overdue ? '#fca5a5' : isUnread ? '#0071e3' : 'var(--line)'),
      borderRadius: 12,
      cursor: 'pointer',
      position: 'relative',
      transition: 'all .12s'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.boxShadow = overdue ? '0 2px 12px rgba(220,38,38,.18)' : '0 2px 12px rgba(0,113,227,.15)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, isUnread && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: -5,
      width: 10,
      height: 10,
      background: '#0071e3',
      borderRadius: 5,
      boxShadow: '0 0 0 3px white'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, overdue && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#dc2626',
      color: 'white',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 700,
      animation: 'pulse 1.8s ease-in-out infinite'
    }
  }, "\u23F0 \u8D85\u65F6"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: cat.bg,
      color: cat.color,
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, cat.label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: pri.bg,
      color: pri.color,
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, pri.label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: st.bg,
      color: st.color,
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, st.label), msg.related_shop && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#d1fae5',
      color: '#065f46',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\uD83C\uDF10 ", msg.related_shop), msg.assigned_to_name && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#dbeafe',
      color: '#1e40af',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\uD83D\uDCCC ", msg.assigned_to_name), tab === 'inbox' && (msg.to_user_id === user.id ? /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#16a34a',
      color: 'white',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 700,
      animation: 'pulse 1.8s ease-in-out infinite'
    }
  }, "\uD83D\uDC64 \u6307\u6D3E\u7ED9\u4F60") : msg.to_user_id || msg.to_user_name ? /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#f3e8ff',
      color: '#6b21a8',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\uD83D\uDC64 ", msg.to_user_name) : /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#f5f5f7',
      color: '#86868b',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\uD83D\uDCE2 \u6574\u4E2A\u90E8\u95E8"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", null, tab === 'inbox' ? '来自' : '发给'), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '1px 7px',
      background: '#f5f5f7',
      borderRadius: 8,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, peer.label), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-2)'
    }
  }, "\xB7 ", peerIcon, " ", peerName), canDelete && /*#__PURE__*/React.createElement("button", {
    onClick: delMsg,
    title: "\u5220\u9664\u6B64\u6D88\u606F(\u6240\u6709\u90E8\u95E8\u4E0D\u518D\u663E\u793A)",
    style: {
      marginLeft: 4,
      padding: '1px 7px',
      background: 'transparent',
      border: '1px solid #fecaca',
      color: '#dc2626',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDDD1 \u5220\u9664"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: isUnread ? 700 : 600,
      color: 'var(--ink)',
      marginBottom: 3,
      lineHeight: 1.4
    }
  }, msg.title), msg.body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      lineHeight: 1.4,
      marginBottom: 6,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, msg.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 10,
      color: 'var(--ink-4)',
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD50 ", dateStr), !overdue && msg.status !== 'done' && msg.status !== 'cancelled' && /*#__PURE__*/React.createElement("span", {
    style: {
      color: dueDays <= 1 ? '#b45309' : 'var(--ink-4)',
      fontWeight: dueDays <= 1 ? 700 : 400
    }
  }, "\xB7 ", dueDays <= 0 ? '今日截止' : "\u8FD8\u5269 ".concat(dueDays, " \u5929")), overdue && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#b91c1c',
      fontWeight: 700
    }
  }, "\xB7 \u5DF2\u903E\u671F ", Math.abs(dueDays), " \u5929"), msg.related_ref && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD17 ", msg.related_ref), threadCount > 0 && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCAC ", threadCount, " \u56DE\u590D"), attCount > 0 && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCE ", attCount, " \u9644\u4EF6"), watcherCount > 0 && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDC41 ", watcherCount, " \u5173\u6CE8")));
};

// 新建消息 modal
var CdmNewMessageModal = function CdmNewMessageModal(_ref43) {
  var user = _ref43.user,
    employees = _ref43.employees,
    _ref43$shopOwners = _ref43.shopOwners,
    shopOwners = _ref43$shopOwners === void 0 ? [] : _ref43$shopOwners,
    onClose = _ref43.onClose,
    onSent = _ref43.onSent,
    toast = _ref43.toast;
  var _useState141 = useState('design'),
    _useState142 = _slicedToArray(_useState141, 2),
    toSystem = _useState142[0],
    setToSystem = _useState142[1];
  var _useState143 = useState(''),
    _useState144 = _slicedToArray(_useState143, 2),
    toUserId = _useState144[0],
    setToUserId = _useState144[1]; // 🆕 v22-CW
  var _useState145 = useState(''),
    _useState146 = _slicedToArray(_useState145, 2),
    toUserName = _useState146[0],
    setToUserName = _useState146[1];
  var _useState147 = useState(''),
    _useState148 = _slicedToArray(_useState147, 2),
    relatedShop = _useState148[0],
    setRelatedShop = _useState148[1]; // 🆕 v22-CW
  var _useState149 = useState(''),
    _useState150 = _slicedToArray(_useState149, 2),
    customShop = _useState150[0],
    setCustomShop = _useState150[1]; // 🆕 v22-CY: 选"其他"时手填
  var _useState151 = useState([]),
    _useState152 = _slicedToArray(_useState151, 2),
    watchers = _useState152[0],
    setWatchers = _useState152[1]; // 🆕 v22-CW
  var _useState153 = useState([]),
    _useState154 = _slicedToArray(_useState153, 2),
    alsoSystems = _useState154[0],
    setAlsoSystems = _useState154[1]; // 🆕 fix178: 同时抄送给的其他部门(整部门各发一条)
  var _useState155 = useState('general'),
    _useState156 = _slicedToArray(_useState155, 2),
    category = _useState156[0],
    setCategory = _useState156[1];
  var _useState157 = useState('normal'),
    _useState158 = _slicedToArray(_useState157, 2),
    priority = _useState158[0],
    setPriority = _useState158[1];
  var _useState159 = useState(''),
    _useState160 = _slicedToArray(_useState159, 2),
    title = _useState160[0],
    setTitle = _useState160[1];
  var _useState161 = useState(''),
    _useState162 = _slicedToArray(_useState161, 2),
    body = _useState162[0],
    setBody = _useState162[1];
  var _useState163 = useState('order'),
    _useState164 = _slicedToArray(_useState163, 2),
    relatedType = _useState164[0],
    setRelatedType = _useState164[1];
  var _useState165 = useState(''),
    _useState166 = _slicedToArray(_useState165, 2),
    relatedRef = _useState166[0],
    setRelatedRef = _useState166[1];
  var _useState167 = useState([]),
    _useState168 = _slicedToArray(_useState167, 2),
    attachments = _useState168[0],
    setAttachments = _useState168[1];
  var _useState169 = useState(false),
    _useState170 = _slicedToArray(_useState169, 2),
    sending = _useState170[0],
    setSending = _useState170[1];
  var fileInputRef = useRef(null);
  // 🆕 fix62 v5: 共享人员目录(发工单选具体人)
  var _useState171 = useState([]),
    _useState172 = _slicedToArray(_useState171, 2),
    orgDir = _useState172[0],
    setOrgDir = _useState172[1];
  useEffect(function () {
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15() {
      var _t10, _t11;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.p = _context16.n) {
          case 0:
            _context16.p = 0;
            _t10 = setOrgDir;
            _context16.n = 1;
            return window.loadOrgDirectory();
          case 1:
            _t10(_context16.v);
            _context16.n = 3;
            break;
          case 2:
            _context16.p = 2;
            _t11 = _context16.v;
            console.error('[org] 加载失败', _t11);
          case 3:
            return _context16.a(2);
        }
      }, _callee15, null, [[0, 2]]);
    }))();
  }, []);
  // 目标部门的人(active)· 🆕 fix138: org_directory 为空时从 shopOwners 兜底取人(财务/客服都能选到美工团队)
  var recipientOptions = useMemo(function () {
    var fromDir = orgDir.filter(function (p) {
      return p.system === toSystem && p.active;
    }).sort(function (a, b) {
      return (a.sortOrder || 0) - (b.sortOrder || 0);
    });
    if (fromDir.length) return fromDir;
    var seen = new Set();
    var out = [];
    (shopOwners || []).filter(function (s) {
      return s.system === toSystem && s.userId && s.userName;
    }).forEach(function (s) {
      if (!seen.has(s.userId)) {
        seen.add(s.userId);
        out.push({
          id: s.userId,
          staffId: s.userId,
          name: s.userName,
          role: '',
          system: toSystem,
          active: true
        });
      }
    });
    return out.sort(function (a, b) {
      return (a.name || '').localeCompare(b.name || '');
    });
  }, [orgDir, toSystem, shopOwners]);

  // 🆕 v22-CY: 可选网站列表直接用预设(不再从 shopOwners 提取 — 避免拼写不一致)
  var availableShops = SHOPS_SELECTABLE;

  // 🆕 v22-CW: 选了网站 + 目标部门 → 自动建议负责人
  // 🆕 v22-CY: "__other__" 不触发自动建议
  // 🆕 fix23: 客服系统更完整 fallback — primary → night → escalation → backup → manager → 第一个
  useEffect(function () {
    if (!relatedShop || relatedShop === '__other__' || !toSystem) return;
    var candidates = (shopOwners || []).filter(function (s) {
      return s.shopName === relatedShop && s.system === toSystem;
    });
    // 按业务优先级 fallback (适用于客服派单 / 跟单分配等)
    var fallbackOrder = ['primary', 'night', 'escalation', 'backup', 'manager'];
    var chosen = null;
    var _loop2 = function _loop2() {
      var r = _fallbackOrder[_i];
      chosen = candidates.find(function (c) {
        return c.role === r;
      });
      if (chosen) return 1; // break
    };
    for (var _i = 0, _fallbackOrder = fallbackOrder; _i < _fallbackOrder.length; _i++) {
      if (_loop2()) break;
    }
    chosen = chosen || candidates[0];
    if (chosen && !toUserId) {
      setToUserId(chosen.userId);
      setToUserName(chosen.userName);
    }
  }, [relatedShop, toSystem, shopOwners]);

  // 🆕 v22-CW: 网站候选负责人列表 (供 UI 显示给用户选)
  var shopCandidates = useMemo(function () {
    if (!relatedShop || relatedShop === '__other__' || !toSystem) return [];
    return (shopOwners || []).filter(function (s) {
      return s.shopName === relatedShop && s.system === toSystem;
    });
  }, [relatedShop, toSystem, shopOwners]);

  // 🆕 v22-CW: watcher 候选列表 (目标部门里所有店铺负责人,去掉接收人本人)
  var watcherCandidates = useMemo(function () {
    var seen = new Set();
    return (shopOwners || []).filter(function (s) {
      return s.system === toSystem && s.userId !== toUserId;
    }).filter(function (s) {
      if (seen.has(s.userId)) return false;
      seen.add(s.userId);
      return true;
    });
  }, [shopOwners, toSystem, toUserId]);
  var toggleWatcher = function toggleWatcher(uid) {
    setWatchers(function (prev) {
      return prev.includes(uid) ? prev.filter(function (x) {
        return x !== uid;
      }) : [].concat(_toConsumableArray(prev), [uid]);
    });
  };
  var readFiles = /*#__PURE__*/function () {
    var _ref45 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(files) {
      var arr, _iterator2, _step2, _loop3, _t12;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            arr = [];
            _iterator2 = _createForOfIteratorHelper(files);
            _context18.p = 1;
            _loop3 = /*#__PURE__*/_regenerator().m(function _loop3() {
              var f, dataUrl, du;
              return _regenerator().w(function (_context17) {
                while (1) switch (_context17.n) {
                  case 0:
                    f = _step2.value;
                    if (!(f.size > 5 * 1024 * 1024)) {
                      _context17.n = 1;
                      break;
                    }
                    alert("\u6587\u4EF6 \"".concat(f.name, "\" \u8D85\u8FC7 5MB"));
                    return _context17.a(2, 1);
                  case 1:
                    _context17.n = 2;
                    return new Promise(function (res, rej) {
                      var r = new FileReader();
                      r.onload = function () {
                        return res(r.result);
                      };
                      r.onerror = rej;
                      r.readAsDataURL(f);
                    });
                  case 2:
                    dataUrl = _context17.v;
                    du = dataUrl;
                    if (!((f.type || '').startsWith('image/') || /^data:image\//i.test(dataUrl))) {
                      _context17.n = 4;
                      break;
                    }
                    _context17.n = 3;
                    return cdmCompressImg(dataUrl);
                  case 3:
                    du = _context17.v;
                  case 4:
                    arr.push({
                      name: f.name,
                      mime: f.type || 'image/jpeg',
                      dataUrl: du,
                      size: du && du.length || f.size
                    });
                  case 5:
                    return _context17.a(2);
                }
              }, _loop3);
            });
            _iterator2.s();
          case 2:
            if ((_step2 = _iterator2.n()).done) {
              _context18.n = 5;
              break;
            }
            return _context18.d(_regeneratorValues(_loop3()), 3);
          case 3:
            if (!_context18.v) {
              _context18.n = 4;
              break;
            }
            return _context18.a(3, 4);
          case 4:
            _context18.n = 2;
            break;
          case 5:
            _context18.n = 7;
            break;
          case 6:
            _context18.p = 6;
            _t12 = _context18.v;
            _iterator2.e(_t12);
          case 7:
            _context18.p = 7;
            _iterator2.f();
            return _context18.f(7);
          case 8:
            if (arr.length) setAttachments(function (prev) {
              return [].concat(_toConsumableArray(prev), arr);
            });
          case 9:
            return _context18.a(2);
        }
      }, _callee16, null, [[1, 6, 7, 8]]);
    }));
    return function readFiles(_x0) {
      return _ref45.apply(this, arguments);
    };
  }();

  // 监听粘贴(截图)
  useEffect(function () {
    var onPaste = /*#__PURE__*/function () {
      var _ref46 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(e) {
        var _e$clipboardData2;
        var items, files, _iterator3, _step3, it, f;
        return _regenerator().w(function (_context19) {
          while (1) switch (_context19.n) {
            case 0:
              items = ((_e$clipboardData2 = e.clipboardData) === null || _e$clipboardData2 === void 0 ? void 0 : _e$clipboardData2.items) || [];
              files = [];
              _iterator3 = _createForOfIteratorHelper(items);
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  it = _step3.value;
                  if (it.kind === 'file') {
                    f = it.getAsFile();
                    if (f) files.push(f);
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              if (!files.length) {
                _context19.n = 1;
                break;
              }
              _context19.n = 1;
              return readFiles(files);
            case 1:
              return _context19.a(2);
          }
        }, _callee17);
      }));
      return function onPaste(_x1) {
        return _ref46.apply(this, arguments);
      };
    }();
    window.addEventListener('paste', onPaste);
    return function () {
      return window.removeEventListener('paste', onPaste);
    };
  }, []);
  var onDrop = function onDrop(e) {
    e.preventDefault();
    var files = Array.from(e.dataTransfer.files || []);
    if (files.length) readFiles(files);
  };
  var onDragOver = function onDragOver(e) {
    return e.preventDefault();
  };
  var send = /*#__PURE__*/function () {
    var _ref47 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
      var client, finalShop, userName, msg, targets, _i2, _targets, t, m, _yield$client$from$in, error, _t13;
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.p = _context20.n) {
          case 0:
            if (title.trim()) {
              _context20.n = 1;
              break;
            }
            alert('请填写标题');
            return _context20.a(2);
          case 1:
            client = getCdmClient();
            if (client) {
              _context20.n = 2;
              break;
            }
            alert('消息总线未连接,无法发送');
            return _context20.a(2);
          case 2:
            // 🆕 v22-CY: 解析 "__other__" → customShop
            finalShop = relatedShop || null;
            if (finalShop === '__other__') {
              finalShop = customShop.trim() || null;
            }
            setSending(true);
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            msg = {
              from_system: MY_SYSTEM,
              from_user_id: user.id,
              from_user_name: userName,
              to_system: toSystem,
              to_user_id: toUserId || null,
              // 🆕 v22-CW
              to_user_name: toUserName.trim() || null,
              related_shop: finalShop,
              // 🆕 v22-CW/CY
              watchers: watchers.length ? watchers : null,
              // 🆕 v22-CW
              category: category,
              priority: priority,
              title: title.trim(),
              body: body.trim() || null,
              attachments: attachments,
              related_type: relatedType,
              related_ref: relatedRef.trim() || null,
              status: 'pending',
              thread: [],
              read_by: [user.id],
              created_at_ms: Date.now(),
              updated_at: new Date().toISOString()
            };
            _context20.p = 3;
            // 🆕 fix178: 主送 toSystem(可指定人)+ 同时抄送给 alsoSystems 各部门(整部门各发一条)
            targets = [{
              sys: toSystem,
              uid: toUserId || null,
              uname: toUserName.trim() || null
            }];
            (alsoSystems || []).forEach(function (sid) {
              if (sid && sid !== toSystem && !targets.some(function (t) {
                return t.sys === sid;
              })) targets.push({
                sys: sid,
                uid: null,
                uname: null
              });
            });
            _i2 = 0, _targets = targets;
          case 4:
            if (!(_i2 < _targets.length)) {
              _context20.n = 7;
              break;
            }
            t = _targets[_i2];
            m = _objectSpread(_objectSpread({}, msg), {}, {
              to_system: t.sys,
              to_user_id: t.uid,
              to_user_name: t.uname,
              created_at_ms: Date.now(),
              updated_at: new Date().toISOString()
            });
            _context20.n = 5;
            return client.from('cross_dept_messages').insert(m);
          case 5:
            _yield$client$from$in = _context20.v;
            error = _yield$client$from$in.error;
            if (!error) {
              _context20.n = 6;
              break;
            }
            throw error;
          case 6:
            _i2++;
            _context20.n = 4;
            break;
          case 7:
            onSent();
            _context20.n = 9;
            break;
          case 8:
            _context20.p = 8;
            _t13 = _context20.v;
            alert('发送失败: ' + (_t13.message || _t13));
          case 9:
            setSending(false);
          case 10:
            return _context20.a(2);
        }
      }, _callee18, null, [[3, 8]]);
    }));
    return function send() {
      return _ref47.apply(this, arguments);
    };
  }();
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.5)',
      zIndex: 100000,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      overflow: 'auto',
      padding: '40px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    onDrop: onDrop,
    onDragOver: onDragOver,
    style: {
      background: 'white',
      borderRadius: 14,
      width: '100%',
      maxWidth: 680,
      boxShadow: '0 20px 60px rgba(0,0,0,.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "\uD83D\uDCE8 \u65B0\u5EFA\u8DE8\u90E8\u95E8\u6D88\u606F"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18,
      color: 'var(--ink-3)'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u53D1\u7ED9\u54EA\u4E2A\u90E8\u95E8 *"), /*#__PURE__*/React.createElement("select", {
    value: toSystem,
    onChange: function onChange(e) {
      setToSystem(e.target.value);
      setToUserId('');
      setToUserName('');
      setWatchers([]);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, CDM_SYSTEMS.filter(function (s) {
    return s.id !== 'cs';
  }).map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, s.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u6307\u5B9A\u63A5\u6536\u4EBA (\u9009\u586B)"), recipientOptions.length > 0 ? /*#__PURE__*/React.createElement("select", {
    value: toUserId,
    onChange: function onChange(e) {
      var sid = e.target.value;
      setToUserId(sid);
      var p = recipientOptions.find(function (x) {
        return x.staffId === sid;
      });
      setToUserName(p ? p.name : '');
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 \u6574\u4E2A\u90E8\u95E8(\u4E0D\u6307\u5B9A)\u2014"), recipientOptions.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p.id,
      value: p.staffId
    }, p.name, p.role ? ' · ' + p.role : '');
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    value: toUserName,
    onChange: function onChange(e) {
      setToUserName(e.target.value);
      setToUserId('');
    },
    list: CDM_FALLBACK_ROSTER[toSystem] ? 'recip-roster-' + toSystem : undefined,
    placeholder: CDM_FALLBACK_ROSTER[toSystem] ? '选或填:' + CDM_FALLBACK_ROSTER[toSystem].join(' / ') + ' · 留空=整部门' : '对方部门未发布名单 · 可手填',
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  }), CDM_FALLBACK_ROSTER[toSystem] && /*#__PURE__*/React.createElement("datalist", {
    id: 'recip-roster-' + toSystem
  }, CDM_FALLBACK_ROSTER[toSystem].map(function (n) {
    return /*#__PURE__*/React.createElement("option", {
      key: n,
      value: n
    });
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u540C\u65F6\u6284\u9001\u7ED9 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400
    }
  }, "\xB7 \u9009\u586B,\u53EF\u591A\u9009\u5176\u4ED6\u90E8\u95E8(\u6574\u90E8\u95E8\u5404\u53D1\u4E00\u6761),\u4F8B:\u53D1\u5B89\u88C5\u8BF4\u660E\u7ED9\u5BA2\u670D + \u540C\u65F6\u901A\u77E5\u7F8E\u5DE5\u90E8\u66F4\u65B0\u7F51\u7AD9")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, CDM_SYSTEMS.filter(function (s) {
    return s.id !== MY_SYSTEM && s.id !== toSystem;
  }).map(function (s) {
    var on = alsoSystems.includes(s.id);
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      type: "button",
      onClick: function onClick() {
        return setAlsoSystems(on ? alsoSystems.filter(function (x) {
          return x !== s.id;
        }) : [].concat(_toConsumableArray(alsoSystems), [s.id]));
      },
      style: {
        padding: '5px 12px',
        borderRadius: 14,
        fontSize: 12,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: on ? 700 : 500,
        border: '1px solid ' + (on ? 'var(--accent)' : 'var(--line)'),
        background: on ? 'var(--accent)' : 'white',
        color: on ? 'white' : 'var(--ink-2)'
      }
    }, on ? '✓ ' : '+ ', s.label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\uD83C\uDF10 \u5173\u8054\u7F51\u7AD9 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400
    }
  }, "\xB7 \u9009\u540E\u81EA\u52A8\u6D3E\u8D1F\u8D23\u4EBA")), /*#__PURE__*/React.createElement("select", {
    value: relatedShop,
    onChange: function onChange(e) {
      setRelatedShop(e.target.value);
      setToUserId('');
      setToUserName('');
      if (e.target.value !== '__other__') setCustomShop('');
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 \u4E0D\u5173\u8054(\u901A\u7528\u5DE5\u5355)\u2014"), /*#__PURE__*/React.createElement("optgroup", {
    label: "\uD83D\uDCE6 \u72EC\u7ACB\u7AD9"
  }, SHOPS_SELECTABLE.filter(function (s) {
    return s.category === '独立站';
  }).map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.label
    }, s.label);
  })), /*#__PURE__*/React.createElement("optgroup", {
    label: "\uD83D\uDED2 \u5E73\u53F0"
  }, SHOPS_SELECTABLE.filter(function (s) {
    return s.category === '平台';
  }).map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.label
    }, s.label);
  })), /*#__PURE__*/React.createElement("optgroup", {
    label: "\uD83C\uDFE2 \u5B9E\u4F53\u516C\u53F8"
  }, SHOPS_SELECTABLE.filter(function (s) {
    return s.category === '实体公司';
  }).map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.label
    }, s.label);
  })), /*#__PURE__*/React.createElement("option", {
    value: "__other__"
  }, "\uD83D\uDCDD \u5176\u4ED6 (\u624B\u586B\u5907\u6CE8)")), relatedShop === '__other__' && /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: customShop,
    onChange: function onChange(e) {
      return setCustomShop(e.target.value);
    },
    placeholder: "\u8F93\u5165\u7F51\u7AD9\u540D \xB7 \u4EC5\u4F5C\u5907\u6CE8(\u4E0D\u4F1A\u81EA\u52A8\u6D3E\u5355)",
    style: {
      marginTop: 5,
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      fontFamily: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u5EFA\u8BAE\u8D1F\u8D23\u4EBA ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400
    }
  }, "\xB7 \u70B9\u9009\u5207\u6362")), !relatedShop ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '7px 10px',
      background: '#fafafa',
      border: '1px dashed var(--line)',
      borderRadius: 7,
      fontSize: 11,
      color: 'var(--ink-4)'
    }
  }, "\u9009\u7F51\u7AD9\u540E\u81EA\u52A8\u5EFA\u8BAE") : relatedShop === '__other__' ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '7px 10px',
      background: '#fef3c7',
      border: '1px solid #fde047',
      borderRadius: 7,
      fontSize: 11,
      color: '#854d0e'
    }
  }, "\uD83D\uDCDD \u5176\u4ED6\u7F51\u7AD9 \xB7 \u4E0D\u81EA\u52A8\u6D3E\u5355 \xB7 \u8BF7\u624B\u52A8\u6307\u5B9A\u63A5\u6536\u4EBA") : shopCandidates.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '7px 10px',
      background: '#fafafa',
      border: '1px dashed var(--line)',
      borderRadius: 7,
      fontSize: 11,
      color: 'var(--ink-4)'
    }
  }, "\u5BF9\u65B9\u90E8\u95E8\u5C1A\u672A\u6CE8\u518C\u8BE5\u7F51\u7AD9\u8D1F\u8D23\u4EBA") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, shopCandidates.map(function (c) {
    var isSel = toUserId === c.userId;
    var roleEmoji = c.role === 'primary' ? '★' : c.role === 'manager' ? '👑' : c.role === 'designer' ? '🎨' : '·';
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      type: "button",
      onClick: function onClick() {
        setToUserId(c.userId);
        setToUserName(c.userName);
      },
      style: {
        padding: '5px 9px',
        background: isSel ? '#0071e3' : 'white',
        color: isSel ? 'white' : 'var(--ink-2)',
        border: '1px solid ' + (isSel ? '#0071e3' : 'var(--line)'),
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 11,
        fontFamily: 'inherit',
        fontWeight: isSel ? 600 : 500
      },
      title: "".concat(c.role).concat(c.notes ? ' · ' + c.notes : '')
    }, roleEmoji, " ", c.userName);
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\uD83D\uDC41 \u989D\u5916\u901A\u77E5 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400
    }
  }, "\xB7 \u8FD9\u4E9B\u4EBA\u5728\u6536\u4EF6\u7BB1\u4E5F\u80FD\u770B\u5230\u6B64\u5DE5\u5355(\u53EF\u4E0D\u9009)")), watcherCandidates.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '7px 10px',
      background: '#fafafa',
      border: '1px dashed var(--line)',
      borderRadius: 7,
      fontSize: 11,
      color: 'var(--ink-4)'
    }
  }, "\u5BF9\u65B9\u90E8\u95E8\u672A\u6CE8\u518C\u5176\u4ED6\u5E97\u94FA\u8D1F\u8D23\u4EBA") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, watcherCandidates.map(function (c) {
    var isSel = watchers.includes(c.userId);
    return /*#__PURE__*/React.createElement("button", {
      key: c.userId,
      type: "button",
      onClick: function onClick() {
        return toggleWatcher(c.userId);
      },
      style: {
        padding: '5px 9px',
        background: isSel ? '#7c3aed' : 'white',
        color: isSel ? 'white' : 'var(--ink-2)',
        border: '1px solid ' + (isSel ? '#7c3aed' : 'var(--line)'),
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 11,
        fontFamily: 'inherit',
        fontWeight: isSel ? 600 : 500
      }
    }, isSel ? '✓' : '+', " ", c.userName);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u5206\u7C7B *"), /*#__PURE__*/React.createElement("select", {
    value: category,
    onChange: function onChange(e) {
      return setCategory(e.target.value);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, CDM_CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.id,
      value: c.id
    }, c.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u4F18\u5148\u7EA7 *"), /*#__PURE__*/React.createElement("select", {
    value: priority,
    onChange: function onChange(e) {
      return setPriority(e.target.value);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, CDM_PRIORITIES.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p.id,
      value: p.id
    }, p.label);
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u6807\u9898 *"), /*#__PURE__*/React.createElement("input", {
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    placeholder: "\u4E00\u53E5\u8BDD\u8BF4\u6E05\u695A\u8981\u89E3\u51B3\u4EC0\u4E48",
    style: {
      width: '100%',
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 14,
      fontFamily: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u8BE6\u7EC6\u63CF\u8FF0"), /*#__PURE__*/React.createElement("textarea", {
    value: body,
    onChange: function onChange(e) {
      return setBody(e.target.value);
    },
    rows: 4,
    placeholder: "\u8BE6\u7EC6\u8BF4\u660E,\u53EF\u4EE5\u8D34\u5BF9\u8BDD\u622A\u56FE(Ctrl+V) / \u62D6\u62FD\u6587\u4EF6\u5230\u8FD9\u91CC",
    style: {
      width: '100%',
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '140px 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u5173\u8054\u7C7B\u578B"), /*#__PURE__*/React.createElement("select", {
    value: relatedType,
    onChange: function onChange(e) {
      return setRelatedType(e.target.value);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, CDM_RELATED_TYPES.map(function (t) {
    return /*#__PURE__*/React.createElement("option", {
      key: t.id,
      value: t.id
    }, t.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u5173\u8054\u53F7 / SKU / URL"), /*#__PURE__*/React.createElement("input", {
    value: relatedRef,
    onChange: function onChange(e) {
      return setRelatedRef(e.target.value);
    },
    placeholder: "\u5982 VK-001234 / SKU-A12 / https://...",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u9644\u4EF6 (", attachments.length, ")"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400
    }
  }, "\u652F\u6301\u622A\u56FE\u7C98\u8D34 / \u62D6\u62FD / \u70B9\u51FB\u4E0A\u4F20 \xB7 \u5355\u6587\u4EF6 \u22645MB")), /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    multiple: true,
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      return readFiles(Array.from(e.target.files || []));
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _fileInputRef$current2;
      return (_fileInputRef$current2 = fileInputRef.current) === null || _fileInputRef$current2 === void 0 ? void 0 : _fileInputRef$current2.click();
    },
    type: "button",
    style: {
      padding: '8px 14px',
      background: 'white',
      border: '1px dashed var(--line)',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 12,
      color: 'var(--ink-2)',
      width: '100%',
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDCCE \u70B9\u51FB\u9009\u62E9\u6587\u4EF6 / \u76F4\u63A5 Ctrl+V \u7C98\u8D34\u622A\u56FE"), attachments.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 8
    }
  }, attachments.map(function (a, i) {
    var _a$mime;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: '4px 8px 4px 4px',
        background: '#f5f5f7',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 11
      }
    }, (_a$mime = a.mime) !== null && _a$mime !== void 0 && _a$mime.startsWith('image/') ? /*#__PURE__*/React.createElement("img", {
      src: a.dataUrl,
      alt: a.name,
      style: {
        width: 28,
        height: 28,
        objectFit: 'cover',
        borderRadius: 4
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16
      }
    }, "\uD83D\uDCC4"), /*#__PURE__*/React.createElement("span", {
      style: {
        maxWidth: 140,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, a.name), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setAttachments(function (p) {
          return p.filter(function (_, j) {
            return j !== i;
          });
        });
      },
      type: "button",
      style: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--ink-4)',
        padding: 0,
        fontSize: 14,
        lineHeight: 1
      }
    }, "\xD7"));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px',
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    disabled: sending,
    className: "btn-sec",
    style: {
      padding: '7px 16px',
      fontSize: 13
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    disabled: sending || !title.trim(),
    style: {
      padding: '7px 20px',
      background: sending || !title.trim() ? '#9ca3af' : '#0071e3',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: sending || !title.trim() ? 'not-allowed' : 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, sending ? '发送中...' : '📨 发送')))), document.body);
};

// 详情 modal
// 🆕 v22-CW: 加 分派 / watcher 管理 / 完成时桌面通知
var CdmDetailModal = function CdmDetailModal(_ref48) {
  var _findCdm;
  var msg = _ref48.msg,
    user = _ref48.user,
    _ref48$employees = _ref48.employees,
    employees = _ref48$employees === void 0 ? [] : _ref48$employees,
    _ref48$shopOwners = _ref48.shopOwners,
    shopOwners = _ref48$shopOwners === void 0 ? [] : _ref48$shopOwners,
    _ref48$cdmTimeoutConf = _ref48.cdmTimeoutConfig,
    cdmTimeoutConfig = _ref48$cdmTimeoutConf === void 0 ? {} : _ref48$cdmTimeoutConf,
    onClose = _ref48.onClose,
    onChanged = _ref48.onChanged,
    toast = _ref48.toast;
  var _useState173 = useState(''),
    _useState174 = _slicedToArray(_useState173, 2),
    replyText = _useState174[0],
    setReplyText = _useState174[1];
  var _useState175 = useState([]),
    _useState176 = _slicedToArray(_useState175, 2),
    replyAttachments = _useState176[0],
    setReplyAttachments = _useState176[1];
  var _useState177 = useState(false),
    _useState178 = _slicedToArray(_useState177, 2),
    sending = _useState178[0],
    setSending = _useState178[1];
  var _useState179 = useState(null),
    _useState180 = _slicedToArray(_useState179, 2),
    imgPreview = _useState180[0],
    setImgPreview = _useState180[1];
  var _useState181 = useState(false),
    _useState182 = _slicedToArray(_useState181, 2),
    showAssign = _useState182[0],
    setShowAssign = _useState182[1]; // 🆕 v22-CW
  var fileInputRef = useRef(null);
  var cat = getCategoryDef(msg.category); // 🆕 用 getCategoryDef 兼容老分类
  var pri = findCdm(CDM_PRIORITIES, msg.priority);
  var st = findCdm(CDM_STATUSES, msg.status);
  var fromSys = findCdm(CDM_SYSTEMS, msg.from_system);
  var toSys = findCdm(CDM_SYSTEMS, msg.to_system);
  var isReceiver = msg.to_system === MY_SYSTEM;
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  // 🆕 v22-CW: 主管 + 接收方可分派
  var canAssign = isReceiver && isAdmin;
  // 🆕 v22-CW: 当前部门员工列表(用于分派 + 加 watcher)
  var myDeptUsers = useMemo(function () {
    return (employees || []).filter(function (e) {
      return !e.hideFromList;
    });
  }, [employees]);
  // 🆕 超时判定
  var overdue = isOverdue(msg, cdmTimeoutConfig);
  var dueAt = getDueAt(msg, cdmTimeoutConfig);
  var dueDays = Math.round((dueAt - Date.now()) / 86400000);

  // 打开时标记已读
  useEffect(function () {
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19() {
      var client, readBy, next, _t14;
      return _regenerator().w(function (_context21) {
        while (1) switch (_context21.p = _context21.n) {
          case 0:
            client = getCdmClient();
            if (client) {
              _context21.n = 1;
              break;
            }
            return _context21.a(2);
          case 1:
            readBy = msg.read_by || [];
            if (!(!readBy.includes(user.id) && msg.from_user_id !== user.id)) {
              _context21.n = 5;
              break;
            }
            _context21.p = 2;
            next = [].concat(_toConsumableArray(readBy), [user.id]);
            _context21.n = 3;
            return client.from('cross_dept_messages').update({
              read_by: next
            }).eq('id', msg.id);
          case 3:
            onChanged && onChanged();
            _context21.n = 5;
            break;
          case 4:
            _context21.p = 4;
            _t14 = _context21.v;
            console.warn('[CDM] 标记已读失败', _t14);
          case 5:
            return _context21.a(2);
        }
      }, _callee19, null, [[2, 4]]);
    }))();
    // eslint-disable-next-line
  }, [msg.id]);
  var readFiles = /*#__PURE__*/function () {
    var _ref50 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(files) {
      var arr, _iterator4, _step4, _loop4, _t15;
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.p = _context23.n) {
          case 0:
            arr = [];
            _iterator4 = _createForOfIteratorHelper(files);
            _context23.p = 1;
            _loop4 = /*#__PURE__*/_regenerator().m(function _loop4() {
              var f, dataUrl, du;
              return _regenerator().w(function (_context22) {
                while (1) switch (_context22.n) {
                  case 0:
                    f = _step4.value;
                    if (!(f.size > 5 * 1024 * 1024)) {
                      _context22.n = 1;
                      break;
                    }
                    alert("\u6587\u4EF6 \"".concat(f.name, "\" \u8D85\u8FC7 5MB"));
                    return _context22.a(2, 1);
                  case 1:
                    _context22.n = 2;
                    return new Promise(function (res, rej) {
                      var r = new FileReader();
                      r.onload = function () {
                        return res(r.result);
                      };
                      r.onerror = rej;
                      r.readAsDataURL(f);
                    });
                  case 2:
                    dataUrl = _context22.v;
                    du = dataUrl;
                    if (!((f.type || '').startsWith('image/') || /^data:image\//i.test(dataUrl))) {
                      _context22.n = 4;
                      break;
                    }
                    _context22.n = 3;
                    return cdmCompressImg(dataUrl);
                  case 3:
                    du = _context22.v;
                  case 4:
                    arr.push({
                      name: f.name,
                      mime: f.type || 'image/jpeg',
                      dataUrl: du,
                      size: du && du.length || f.size
                    });
                  case 5:
                    return _context22.a(2);
                }
              }, _loop4);
            });
            _iterator4.s();
          case 2:
            if ((_step4 = _iterator4.n()).done) {
              _context23.n = 5;
              break;
            }
            return _context23.d(_regeneratorValues(_loop4()), 3);
          case 3:
            if (!_context23.v) {
              _context23.n = 4;
              break;
            }
            return _context23.a(3, 4);
          case 4:
            _context23.n = 2;
            break;
          case 5:
            _context23.n = 7;
            break;
          case 6:
            _context23.p = 6;
            _t15 = _context23.v;
            _iterator4.e(_t15);
          case 7:
            _context23.p = 7;
            _iterator4.f();
            return _context23.f(7);
          case 8:
            if (arr.length) setReplyAttachments(function (prev) {
              return [].concat(_toConsumableArray(prev), arr);
            });
          case 9:
            return _context23.a(2);
        }
      }, _callee20, null, [[1, 6, 7, 8]]);
    }));
    return function readFiles(_x10) {
      return _ref50.apply(this, arguments);
    };
  }();

  // 🆕 v22-CY+ : 回复框支持 Ctrl+V 粘贴图片(截图工作流)
  useEffect(function () {
    var onPaste = /*#__PURE__*/function () {
      var _ref51 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(e) {
        var _e$clipboardData3;
        var items, files, _iterator5, _step5, it, f;
        return _regenerator().w(function (_context24) {
          while (1) switch (_context24.n) {
            case 0:
              items = ((_e$clipboardData3 = e.clipboardData) === null || _e$clipboardData3 === void 0 ? void 0 : _e$clipboardData3.items) || [];
              files = [];
              _iterator5 = _createForOfIteratorHelper(items);
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  it = _step5.value;
                  if (it.kind === 'file') {
                    f = it.getAsFile();
                    if (f) files.push(f);
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
              if (!files.length) {
                _context24.n = 1;
                break;
              }
              _context24.n = 1;
              return readFiles(files);
            case 1:
              return _context24.a(2);
          }
        }, _callee21);
      }));
      return function onPaste(_x11) {
        return _ref51.apply(this, arguments);
      };
    }();
    window.addEventListener('paste', onPaste);
    return function () {
      return window.removeEventListener('paste', onPaste);
    };
  }, []);

  // 🆕 v22-CY+ : 回复框支持拖拽
  var onReplyDrop = function onReplyDrop(e) {
    e.preventDefault();
    var files = Array.from(e.dataTransfer.files || []);
    if (files.length) readFiles(files);
  };
  var onReplyDragOver = function onReplyDragOver(e) {
    return e.preventDefault();
  };
  var reply = /*#__PURE__*/function () {
    var _ref52 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22() {
      var client, _yield$client$from$se, latest, fetchErr, userName, newThread, _yield$client$from$up, error, _t16;
      return _regenerator().w(function (_context25) {
        while (1) switch (_context25.p = _context25.n) {
          case 0:
            if (!(!replyText.trim() && replyAttachments.length === 0)) {
              _context25.n = 1;
              break;
            }
            return _context25.a(2);
          case 1:
            client = getCdmClient();
            if (client) {
              _context25.n = 2;
              break;
            }
            alert('消息总线未连接');
            return _context25.a(2);
          case 2:
            setSending(true);
            _context25.p = 3;
            _context25.n = 4;
            return client.from('cross_dept_messages').select('thread').eq('id', msg.id).single();
          case 4:
            _yield$client$from$se = _context25.v;
            latest = _yield$client$from$se.data;
            fetchErr = _yield$client$from$se.error;
            if (!fetchErr) {
              _context25.n = 5;
              break;
            }
            throw fetchErr;
          case 5:
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            newThread = [].concat(_toConsumableArray((latest === null || latest === void 0 ? void 0 : latest.thread) || []), [{
              user_id: user.id,
              user_name: userName,
              system: MY_SYSTEM,
              content: replyText.trim(),
              attachments: replyAttachments,
              ts: Date.now()
            }]);
            _context25.n = 6;
            return client.from('cross_dept_messages').update({
              thread: newThread,
              updated_at: new Date().toISOString()
            }).eq('id', msg.id);
          case 6:
            _yield$client$from$up = _context25.v;
            error = _yield$client$from$up.error;
            if (!error) {
              _context25.n = 7;
              break;
            }
            throw error;
          case 7:
            setReplyText('');
            setReplyAttachments([]);
            toast('✓ 已回复');
            onChanged && onChanged();
            _context25.n = 9;
            break;
          case 8:
            _context25.p = 8;
            _t16 = _context25.v;
            alert('回复失败: ' + (_t16.message || _t16));
          case 9:
            setSending(false);
          case 10:
            return _context25.a(2);
        }
      }, _callee22, null, [[3, 8]]);
    }));
    return function reply() {
      return _ref52.apply(this, arguments);
    };
  }();
  var setStatus = /*#__PURE__*/function () {
    var _ref53 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(newStatus) {
      var client, userName, updates, _yield$client$from$se2, latest, curThread, topAtts, threadAtts, seen, merged, attNames, _yield$client$from$up2, error, _t17, _t18;
      return _regenerator().w(function (_context26) {
        while (1) switch (_context26.p = _context26.n) {
          case 0:
            client = getCdmClient();
            if (client) {
              _context26.n = 1;
              break;
            }
            alert('消息总线未连接');
            return _context26.a(2);
          case 1:
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            updates = {
              status: newStatus,
              updated_at: new Date().toISOString()
            };
            if (!(newStatus === 'done')) {
              _context26.n = 6;
              break;
            }
            updates.completed_at_ms = Date.now();
            updates.completed_by_id = user.id;
            updates.completed_by_name = userName;
            // 🆕 跨部门完成协议(对齐美工/跟单):聚合本系统在 thread 里发过的附件到顶层 attachments + thread 追加完成说明
            _context26.p = 2;
            _context26.n = 3;
            return client.from('cross_dept_messages').select('thread, attachments').eq('id', msg.id).maybeSingle();
          case 3:
            _yield$client$from$se2 = _context26.v;
            latest = _yield$client$from$se2.data;
            curThread = latest && Array.isArray(latest.thread) ? latest.thread : Array.isArray(msg.thread) ? msg.thread : [];
            topAtts = latest && Array.isArray(latest.attachments) ? latest.attachments : Array.isArray(msg.attachments) ? msg.attachments : [];
            threadAtts = [];
            curThread.forEach(function (t) {
              if (t && t.system === MY_SYSTEM && Array.isArray(t.attachments)) threadAtts.push.apply(threadAtts, _toConsumableArray(t.attachments));
            });
            seen = new Set();
            merged = [];
            [].concat(_toConsumableArray(topAtts), threadAtts).forEach(function (a) {
              var u = a && (a.url || a.dataUrl);
              if (u && !seen.has(u)) {
                seen.add(u);
                merged.push(a);
              }
            });
            updates.attachments = merged;
            attNames = merged.map(function (a) {
              return a && (a.name || '附件');
            }).filter(Boolean);
            updates.thread = [].concat(_toConsumableArray(curThread), [{
              user_id: user.id,
              user_name: userName,
              system: MY_SYSTEM,
              ts: Date.now(),
              content: '✅ 已完成' + (attNames.length ? ' · 详见附件:' + attNames.join('、') : '')
            }]);
            _context26.n = 5;
            break;
          case 4:
            _context26.p = 4;
            _t17 = _context26.v;
            console.warn('[CDM] 完成聚合失败', _t17);
          case 5:
            _context26.n = 7;
            break;
          case 6:
            // 撤销完成 — 清空完成字段
            updates.completed_at_ms = null;
            updates.completed_by_id = null;
            updates.completed_by_name = null;
          case 7:
            _context26.p = 7;
            _context26.n = 8;
            return client.from('cross_dept_messages').update(updates).eq('id', msg.id);
          case 8:
            _yield$client$from$up2 = _context26.v;
            error = _yield$client$from$up2.error;
            if (!error) {
              _context26.n = 9;
              break;
            }
            throw error;
          case 9:
            toast("\u2713 \u72B6\u6001\u5DF2\u66F4\u65B0\u4E3A ".concat(findCdm(CDM_STATUSES, newStatus).label));
            // 🆕 v22-CW: 完成时 → 桌面通知(给当前操作者本人,确认完成动作)
            if (newStatus === 'done') {
              try {
                if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
                  new Notification("\u2705 \u5DE5\u5355\u5DF2\u5B8C\u6210: ".concat(msg.title), {
                    body: "\u7531 ".concat(userName, " \u5B8C\u6210"),
                    tag: 'cdm-done-' + msg.id
                  });
                }
              } catch (_unused6) {}
            }
            onChanged && onChanged();
            _context26.n = 11;
            break;
          case 10:
            _context26.p = 10;
            _t18 = _context26.v;
            alert('更新失败: ' + (_t18.message || _t18));
          case 11:
            return _context26.a(2);
        }
      }, _callee23, null, [[7, 10], [2, 4]]);
    }));
    return function setStatus(_x12) {
      return _ref53.apply(this, arguments);
    };
  }();

  // 🆕 v22-CW: 主管分派工单给手下
  var assignTo = /*#__PURE__*/function () {
    var _ref54 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24(userId, userName) {
      var client, myName, _yield$client$from$se3, latest, newThread, _t19;
      return _regenerator().w(function (_context27) {
        while (1) switch (_context27.p = _context27.n) {
          case 0:
            client = getCdmClient();
            if (client) {
              _context27.n = 1;
              break;
            }
            alert('消息总线未连接');
            return _context27.a(2);
          case 1:
            _context27.p = 1;
            myName = user.name + (user.alias ? ' ' + user.alias : '');
            _context27.n = 2;
            return client.from('cross_dept_messages').update({
              assigned_to_id: userId,
              assigned_to_name: userName,
              assigned_by_id: user.id,
              assigned_by_name: myName,
              assigned_at_ms: Date.now(),
              status: msg.status === 'pending' ? 'in_progress' : msg.status,
              updated_at: new Date().toISOString()
            }).eq('id', msg.id);
          case 2:
            _context27.n = 3;
            return client.from('cross_dept_messages').select('thread').eq('id', msg.id).maybeSingle();
          case 3:
            _yield$client$from$se3 = _context27.v;
            latest = _yield$client$from$se3.data;
            newThread = [].concat(_toConsumableArray((latest === null || latest === void 0 ? void 0 : latest.thread) || []), [{
              user_id: user.id,
              user_name: myName,
              system: MY_SYSTEM,
              content: "\uD83D\uDCCC \u5206\u6D3E\u7ED9\u300C".concat(userName, "\u300D\u5904\u7406"),
              ts: Date.now()
            }]);
            _context27.n = 4;
            return client.from('cross_dept_messages').update({
              thread: newThread
            }).eq('id', msg.id);
          case 4:
            toast("\u2713 \u5DF2\u5206\u6D3E\u7ED9 ".concat(userName));
            setShowAssign(false);
            onChanged && onChanged();
            _context27.n = 6;
            break;
          case 5:
            _context27.p = 5;
            _t19 = _context27.v;
            alert('分派失败: ' + (_t19.message || _t19));
          case 6:
            return _context27.a(2);
        }
      }, _callee24, null, [[1, 5]]);
    }));
    return function assignTo(_x13, _x14) {
      return _ref54.apply(this, arguments);
    };
  }();

  // 🆕 v22-CW: 切换 watcher (加/移除关注人)
  var toggleWatcher = /*#__PURE__*/function () {
    var _ref55 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25(uid, uname) {
      var client, _yield$client$from$se4, latest, current, isWatching, next, _t20;
      return _regenerator().w(function (_context28) {
        while (1) switch (_context28.p = _context28.n) {
          case 0:
            client = getCdmClient();
            if (client) {
              _context28.n = 1;
              break;
            }
            alert('消息总线未连接');
            return _context28.a(2);
          case 1:
            _context28.p = 1;
            _context28.n = 2;
            return client.from('cross_dept_messages').select('watchers').eq('id', msg.id).maybeSingle();
          case 2:
            _yield$client$from$se4 = _context28.v;
            latest = _yield$client$from$se4.data;
            current = (latest === null || latest === void 0 ? void 0 : latest.watchers) || [];
            isWatching = current.includes(uid);
            next = isWatching ? current.filter(function (x) {
              return x !== uid;
            }) : [].concat(_toConsumableArray(current), [uid]);
            _context28.n = 3;
            return client.from('cross_dept_messages').update({
              watchers: next.length ? next : null,
              updated_at: new Date().toISOString()
            }).eq('id', msg.id);
          case 3:
            toast(isWatching ? "\u2713 \u5DF2\u79FB\u9664 ".concat(uname || '', " \u5173\u6CE8") : "\u2713 \u5DF2\u6DFB\u52A0 ".concat(uname || '', " \u4E3A\u5173\u6CE8\u4EBA"));
            onChanged && onChanged();
            _context28.n = 5;
            break;
          case 4:
            _context28.p = 4;
            _t20 = _context28.v;
            alert('更新失败: ' + (_t20.message || _t20));
          case 5:
            return _context28.a(2);
        }
      }, _callee25, null, [[1, 4]]);
    }));
    return function toggleWatcher(_x15, _x16) {
      return _ref55.apply(this, arguments);
    };
  }();
  var isSender = msg.from_system === MY_SYSTEM && (msg.from_user_id === user.id || isAdmin);
  var canDelete = true; // 🆕 任何客服都可删除(共享消息,软删除可恢复)
  var deleteMsg = /*#__PURE__*/function () {
    var _ref56 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26() {
      var client, _yield$client$from$up3, error, r, _t21;
      return _regenerator().w(function (_context29) {
        while (1) switch (_context29.p = _context29.n) {
          case 0:
            if (canDelete) {
              _context29.n = 1;
              break;
            }
            return _context29.a(2);
          case 1:
            _context29.n = 2;
            return wsConfirm('删除跨部门消息「' + (msg.title || String(msg.body || msg.content || '').slice(0, 24) || '无标题') + '」(ID ' + msg.id + ')?\n所有部门都不再显示。软删除,可在回收站恢复。', { title: '🗑 删除跨部门消息?', okText: '删除', cancelText: '取消' });
          case 2:
            if (!_context29.v) { return _context29.a(2); }
            client = getCdmClient();
            if (client) {
              _context29.n = 3;
              break;
            }
            alert('消息总线未连接');
            return _context29.a(2);
          case 3:
            _context29.p = 3;
            _context29.n = 4;
            return client.from('cross_dept_messages').update({
              deleted: true,
              updated_at: new Date().toISOString()
            }).eq('id', msg.id);
          case 4:
            _yield$client$from$up3 = _context29.v;
            error = _yield$client$from$up3.error;
            if (!(error && /deleted/i.test(error.message || ''))) {
              _context29.n = 6;
              break;
            }
            _context29.n = 5;
            return client.from('cross_dept_messages')["delete"]().eq('id', msg.id);
          case 5:
            r = _context29.v;
            error = r.error;
          case 6:
            if (!error) {
              _context29.n = 7;
              break;
            }
            throw error;
          case 7:
            toast('✓ 已删除该消息');
            onChanged && onChanged();
            onClose && onClose();
            _context29.n = 9;
            break;
          case 8:
            _context29.p = 8;
            _t21 = _context29.v;
            alert('删除失败: ' + (_t21.message || _t21));
          case 9:
            return _context29.a(2);
        }
      }, _callee26, null, [[3, 8]]);
    }));
    return function deleteMsg() {
      return _ref56.apply(this, arguments);
    };
  }();
  var formatTs = function formatTs(ts) {
    return ts ? new Date(ts).toLocaleString('zh-CN', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }) : '';
  };
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.5)',
      zIndex: 100000,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      overflow: 'auto',
      padding: '30px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 14,
      width: '100%',
      maxWidth: 760,
      boxShadow: '0 20px 60px rgba(0,0,0,.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: cat.bg,
      color: cat.color,
      borderRadius: 10,
      fontSize: 11,
      fontWeight: 600
    }
  }, cat.label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: pri.bg,
      color: pri.color,
      borderRadius: 10,
      fontSize: 11,
      fontWeight: 600
    }
  }, pri.label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: st.bg,
      color: st.color,
      borderRadius: 10,
      fontSize: 11,
      fontWeight: 600
    }
  }, st.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, canDelete && /*#__PURE__*/React.createElement("button", {
    onClick: deleteMsg,
    title: "\u5220\u9664\u6B64\u6D88\u606F \u2014 \u6240\u6709\u90E8\u95E8\u90FD\u4E0D\u518D\u663E\u793A(\u8F6F\u5220\u9664)",
    style: {
      background: 'transparent',
      border: '1px solid #fecaca',
      color: '#dc2626',
      cursor: 'pointer',
      fontSize: 12,
      borderRadius: 6,
      padding: '3px 9px',
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDDD1 \u5220\u9664"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18,
      color: 'var(--ink-3)'
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 17,
      fontWeight: 600,
      marginBottom: 6,
      lineHeight: 1.4
    }
  }, msg.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      alignItems: 'center',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, fromSys.label), " \xB7 ", msg.from_user_name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, toSys.label), msg.to_user_id || msg.to_user_name ? ' · 👤 ' + msg.to_user_name : ' · 📢 整个部门'), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      color: 'var(--ink-4)'
    }
  }, formatTs(msg.created_at_ms))), (msg.related_shop || msg.assigned_to_name || overdue || msg.status !== 'done' && msg.status !== 'cancelled') && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 10,
      alignItems: 'center'
    }
  }, msg.related_shop && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 10px',
      background: '#d1fae5',
      color: '#065f46',
      borderRadius: 7,
      fontSize: 11,
      fontWeight: 600
    }
  }, "\uD83C\uDF10 \u5173\u8054\u7F51\u7AD9: ", /*#__PURE__*/React.createElement("strong", null, msg.related_shop)), msg.assigned_to_name && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 10px',
      background: '#dbeafe',
      color: '#1e40af',
      borderRadius: 7,
      fontSize: 11,
      fontWeight: 600
    }
  }, "\uD83D\uDCCC \u5DF2\u5206\u6D3E\u7ED9 ", /*#__PURE__*/React.createElement("strong", null, msg.assigned_to_name), msg.assigned_by_name && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400
    }
  }, " \xB7 \u7531 ", msg.assigned_by_name), msg.assigned_at_ms && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400
    }
  }, " \xB7 ", formatTs(msg.assigned_at_ms))), overdue && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 10px',
      background: '#fee2e2',
      color: '#b91c1c',
      borderRadius: 7,
      fontSize: 11,
      fontWeight: 700,
      animation: 'pulse 2s ease-in-out infinite'
    }
  }, "\u23F0 \u5DF2\u903E\u671F ", Math.abs(dueDays), " \u5929"), !overdue && msg.status !== 'done' && msg.status !== 'cancelled' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 10px',
      background: '#f5f5f7',
      color: 'var(--ink-3)',
      borderRadius: 7,
      fontSize: 11
    }
  }, "\u23F3 ", dueDays <= 0 ? '今日截止' : "\u8FD8\u5269 ".concat(dueDays, " \u5929"))), msg.related_ref && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      marginBottom: 8,
      padding: '4px 10px',
      background: '#f5f5f7',
      borderRadius: 6,
      display: 'inline-block'
    }
  }, "\uD83D\uDD17 ", ((_findCdm = findCdm(CDM_RELATED_TYPES, msg.related_type)) === null || _findCdm === void 0 ? void 0 : _findCdm.label) || '关联', ": ", /*#__PURE__*/React.createElement("strong", null, msg.related_ref)), msg.body && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: '#fafaf7',
      borderRadius: 8,
      fontSize: 13,
      lineHeight: 1.55,
      whiteSpace: 'pre-wrap',
      marginBottom: 10
    }
  }, msg.body), (msg.attachments || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 10
    }
  }, (msg.attachments || []).map(function (a, i) {
    return cdmIsImg(a) ? /*#__PURE__*/React.createElement("img", {
      key: i,
      src: a.dataUrl || a.url,
      alt: a.name,
      onClick: function onClick() {
        return setImgPreview(a.dataUrl || a.url);
      },
      style: {
        width: 90,
        height: 90,
        objectFit: 'contain',
        borderRadius: 8,
        cursor: 'pointer',
        border: '1px solid var(--line)',
        background: 'var(--bg-elevated)'
      }
    }) : /*#__PURE__*/React.createElement("a", {
      key: i,
      href: a.dataUrl || a.url,
      download: a.name,
      target: "_blank",
      rel: "noreferrer",
      style: {
        padding: '6px 10px',
        background: '#f5f5f7',
        borderRadius: 8,
        fontSize: 12,
        color: 'var(--ink-2)',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 4
      }
    }, "\uD83D\uDCC4 ", a.name);
  })), isReceiver && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px',
      background: '#eff6ff',
      border: '1px solid #bfdbfe',
      borderRadius: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#1e40af',
      marginBottom: 6
    }
  }, "\uD83D\uDCCC \u4F60\u662F\u63A5\u6536\u65B9,\u53EF\u5207\u6362\u72B6\u6001:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, CDM_STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: function onClick() {
        return setStatus(s.id);
      },
      disabled: s.id === msg.status,
      style: {
        padding: '4px 12px',
        background: s.id === msg.status ? s.color : 'white',
        color: s.id === msg.status ? 'white' : s.color,
        border: "1px solid ".concat(s.color),
        borderRadius: 6,
        cursor: s.id === msg.status ? 'default' : 'pointer',
        fontSize: 11,
        fontWeight: 600,
        fontFamily: 'inherit',
        opacity: s.id === msg.status ? 0.65 : 1
      }
    }, s.label, s.id === msg.status && ' (当前)');
  })), msg.completed_by_name && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      marginTop: 6
    }
  }, "\u5B8C\u6210\u4E8E ", formatTs(msg.completed_at_ms), " by ", msg.completed_by_name)), canAssign && msg.status !== 'done' && msg.status !== 'cancelled' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: '#eff6ff',
      border: '1px solid #bfdbfe',
      borderRadius: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#1e40af'
    }
  }, "\uD83D\uDCCC \u5DE5\u5355\u5206\u6D3E", msg.assigned_to_name && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      marginLeft: 6,
      color: '#1e3a8a'
    }
  }, "\xB7 \u5F53\u524D: ", /*#__PURE__*/React.createElement("strong", null, msg.assigned_to_name))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowAssign(function (v) {
        return !v;
      });
    },
    style: {
      padding: '4px 10px',
      background: 'white',
      border: '1px solid #93c5fd',
      color: '#1e40af',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, showAssign ? '收起' : msg.assigned_to_id ? '✏️ 重新分派' : '📌 分派给手下处理')), showAssign && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gap: 5,
      marginTop: 8
    }
  }, myDeptUsers.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-4)'
    }
  }, "\u6682\u65E0\u5458\u5DE5\u5217\u8868") : myDeptUsers.map(function (u) {
    var uname = u.name + (u.alias ? ' ' + u.alias : '');
    var isCurrent = msg.assigned_to_id === u.id;
    return /*#__PURE__*/React.createElement("button", {
      key: u.id,
      onClick: function onClick() {
        return assignTo(u.id, uname);
      },
      disabled: isCurrent,
      style: {
        padding: '5px 8px',
        background: isCurrent ? '#93c5fd' : 'white',
        border: '1px solid ' + (isCurrent ? '#93c5fd' : '#bfdbfe'),
        color: isCurrent ? 'white' : '#1e40af',
        borderRadius: 5,
        cursor: isCurrent ? 'not-allowed' : 'pointer',
        fontSize: 11,
        fontWeight: isCurrent ? 600 : 500,
        fontFamily: 'inherit',
        opacity: isCurrent ? 0.7 : 1
      }
    }, isCurrent && '✓ ', "\uD83D\uDC64 ", uname);
  }))), (canAssign || msg.watchers && msg.watchers.length > 0) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: '#faf5ff',
      border: '1px solid #e9d5ff',
      borderRadius: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#6b21a8',
      marginBottom: 6
    }
  }, "\uD83D\uDC41 \u5173\u6CE8\u4EBA (", (msg.watchers || []).length, ") ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: '#7c3aed'
    }
  }, "\xB7 \u5728\u4ED6\u4EEC\u6536\u4EF6\u7BB1\u4E5F\u80FD\u770B\u5230")), (msg.watchers || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      flexWrap: 'wrap',
      marginBottom: canAssign ? 8 : 0
    }
  }, (msg.watchers || []).map(function (wid) {
    var _shopOwners$find, _myDeptUsers$find;
    // 查名字 — 先 shopOwners,再 employees
    var name = ((_shopOwners$find = shopOwners.find(function (s) {
      return s.userId === wid;
    })) === null || _shopOwners$find === void 0 ? void 0 : _shopOwners$find.userName) || ((_myDeptUsers$find = myDeptUsers.find(function (u) {
      return u.id === wid;
    })) === null || _myDeptUsers$find === void 0 ? void 0 : _myDeptUsers$find.name) || wid;
    return /*#__PURE__*/React.createElement("span", {
      key: wid,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: '3px 9px',
        background: 'white',
        color: '#6b21a8',
        border: '1px solid #d8b4fe',
        borderRadius: 14,
        fontSize: 11,
        fontWeight: 500
      }
    }, "\uD83D\uDC41 ", name, canAssign && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return toggleWatcher(wid, name);
      },
      style: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: '#a78bfa',
        padding: 0,
        marginLeft: 2,
        fontSize: 13,
        lineHeight: 1
      },
      title: "\u79FB\u9664\u5173\u6CE8"
    }, "\xD7"));
  })), canAssign && function () {
    var candidates = myDeptUsers.filter(function (u) {
      return !(msg.watchers || []).includes(u.id) && u.id !== msg.assigned_to_id && u.id !== msg.to_user_id;
    });
    if (candidates.length === 0) return /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-4)'
      }
    }, "\u672C\u90E8\u95E8\u5458\u5DE5\u90FD\u5DF2\u662F\u5173\u6CE8\u4EBA / \u63A5\u6536\u4EBA / \u5206\u6D3E\u5BF9\u8C61");
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)',
        marginBottom: 4
      }
    }, "+ \u6DFB\u52A0\u672C\u90E8\u95E8\u5173\u6CE8\u4EBA:"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 4,
        flexWrap: 'wrap'
      }
    }, candidates.map(function (u) {
      var uname = u.name + (u.alias ? ' ' + u.alias : '');
      return /*#__PURE__*/React.createElement("button", {
        key: u.id,
        onClick: function onClick() {
          return toggleWatcher(u.id, uname);
        },
        style: {
          padding: '3px 9px',
          background: 'white',
          color: '#7c3aed',
          border: '1px solid #e9d5ff',
          borderRadius: 14,
          cursor: 'pointer',
          fontSize: 11,
          fontFamily: 'inherit',
          fontWeight: 500
        }
      }, "+ ", uname);
    })));
  }()), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      margin: '14px 0 8px'
    }
  }, "\uD83D\uDCAC \u6C9F\u901A\u7EBF\u7A0B (", (msg.thread || []).length, " \u6761)"), (msg.thread || []).length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 10px',
      textAlign: 'center',
      color: 'var(--ink-4)',
      fontSize: 12,
      background: '#fafaf7',
      borderRadius: 8
    }
  }, "\u6682\u65E0\u56DE\u590D") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, (msg.thread || []).map(function (t, i) {
    var sys = findCdm(CDM_SYSTEMS, t.system);
    var isMine = t.user_id === user.id;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        flexDirection: isMine ? 'row-reverse' : 'row',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '78%',
        padding: '8px 12px',
        background: isMine ? '#0071e3' : 'white',
        color: isMine ? 'white' : 'var(--ink)',
        border: '1px solid ' + (isMine ? '#0071e3' : 'var(--line)'),
        borderRadius: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        opacity: .85,
        marginBottom: 3,
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 5px',
        background: isMine ? 'rgba(255,255,255,.2)' : sys.id === 'design' ? '#fce7f3' : sys.id === 'po' ? '#fef3c7' : '#dbeafe',
        color: isMine ? 'white' : sys.id === 'design' ? '#9d174d' : sys.id === 'po' ? '#854d0e' : '#1e40af',
        borderRadius: 5,
        fontWeight: 600
      }
    }, sys["short"]), /*#__PURE__*/React.createElement("span", null, t.user_name || '?'), /*#__PURE__*/React.createElement("span", {
      style: {
        opacity: .7
      }
    }, formatTs(t.ts))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        lineHeight: 1.5,
        whiteSpace: 'pre-wrap'
      }
    }, t.content || ''), (t.attachments || []).length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 4,
        marginTop: 6
      }
    }, (t.attachments || []).map(function (a, j) {
      return cdmIsImg(a) ? /*#__PURE__*/React.createElement("img", {
        key: j,
        src: a.dataUrl || a.url,
        alt: a.name,
        onClick: function onClick() {
          return setImgPreview(a.dataUrl || a.url);
        },
        style: {
          width: 62,
          height: 62,
          objectFit: 'contain',
          borderRadius: 5,
          cursor: 'pointer',
          background: 'var(--bg-elevated)'
        }
      }) : /*#__PURE__*/React.createElement("a", {
        key: j,
        href: a.dataUrl || a.url,
        download: a.name,
        target: "_blank",
        rel: "noreferrer",
        style: {
          padding: '3px 7px',
          background: isMine ? 'rgba(255,255,255,.2)' : '#f5f5f7',
          borderRadius: 5,
          fontSize: 10,
          color: isMine ? 'white' : 'var(--ink-2)',
          textDecoration: 'none'
        }
      }, "\uD83D\uDCC4 ", a.name);
    }))));
  }))), /*#__PURE__*/React.createElement("div", {
    onDrop: onReplyDrop,
    onDragOver: onReplyDragOver,
    style: {
      padding: '12px 20px',
      borderTop: '1px solid var(--line)',
      background: '#fafaf7'
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: replyText,
    onChange: function onChange(e) {
      return setReplyText(e.target.value);
    },
    placeholder: "\u56DE\u590D...(Ctrl+Enter \u53D1\u9001 \xB7 \u652F\u6301 Ctrl+V \u7C98\u8D34\u622A\u56FE)",
    onKeyDown: function onKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') reply();
    },
    rows: 2,
    style: {
      width: '100%',
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical',
      background: 'white'
    }
  }), replyAttachments.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 4,
      marginTop: 6
    }
  }, replyAttachments.map(function (a, i) {
    var _a$mime2;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: '3px 6px 3px 3px',
        background: 'white',
        border: '1px solid var(--line)',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        fontSize: 11
      }
    }, (_a$mime2 = a.mime) !== null && _a$mime2 !== void 0 && _a$mime2.startsWith('image/') ? /*#__PURE__*/React.createElement("img", {
      src: a.dataUrl,
      alt: a.name,
      style: {
        width: 20,
        height: 20,
        objectFit: 'cover',
        borderRadius: 3
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14
      }
    }, "\uD83D\uDCC4"), /*#__PURE__*/React.createElement("span", {
      style: {
        maxWidth: 100,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, a.name), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setReplyAttachments(function (p) {
          return p.filter(function (_, j) {
            return j !== i;
          });
        });
      },
      type: "button",
      style: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--ink-4)',
        padding: 0,
        fontSize: 13,
        lineHeight: 1
      }
    }, "\xD7"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    multiple: true,
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      return readFiles(Array.from(e.target.files || []));
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _fileInputRef$current3;
      return (_fileInputRef$current3 = fileInputRef.current) === null || _fileInputRef$current3 === void 0 ? void 0 : _fileInputRef$current3.click();
    },
    type: "button",
    className: "btn-ghost",
    style: {
      padding: '5px 10px',
      fontSize: 12
    }
  }, "\uD83D\uDCCE \u52A0\u9644\u4EF6")), /*#__PURE__*/React.createElement("button", {
    onClick: reply,
    disabled: sending || !replyText.trim() && replyAttachments.length === 0,
    style: {
      padding: '6px 16px',
      background: sending || !replyText.trim() && replyAttachments.length === 0 ? '#9ca3af' : '#0071e3',
      color: 'white',
      border: 'none',
      borderRadius: 7,
      cursor: sending || !replyText.trim() && replyAttachments.length === 0 ? 'not-allowed' : 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, sending ? '发送中...' : '📤 回复')))), imgPreview && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setImgPreview(null);
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.85)',
      zIndex: 100020,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
      cursor: 'zoom-out'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: imgPreview,
    alt: "\u9884\u89C8",
    style: {
      maxWidth: '90%',
      maxHeight: '90%',
      borderRadius: 8,
      boxShadow: '0 20px 60px rgba(0,0,0,.5)'
    }
  }))), document.body);
};

// ════════════════════════════════════════════════════════════════════
// 🆕 v22-CW Round 3b: 店铺负责人管理 (主管/admin)
// ════════════════════════════════════════════════════════════════════
var CDM_OWNER_ROLES = [{
  id: 'primary',
  label: '★ 主负责',
  color: '#0071e3',
  desc: '日常接所有询盘'
}, {
  id: 'night',
  label: '🌙 夜班',
  color: '#7c3aed',
  desc: '晚 6 点后美区询盘'
}, {
  id: 'escalation',
  label: '🚨 升级处理',
  color: '#dc2626',
  desc: '投诉 / 退款纠纷'
}, {
  id: 'backup',
  label: '· 备用',
  color: '#86868b',
  desc: '主负责不在时兜底'
}, {
  id: 'manager',
  label: '👑 主管',
  color: '#d97706',
  desc: '最终决策人'
}, {
  id: 'designer',
  label: '🎨 设计师',
  color: '#ec4899',
  desc: '(美工系统专用)'
}];
var ShopOwnersManager = function ShopOwnersManager(_ref57) {
  var user = _ref57.user,
    employees = _ref57.employees,
    _ref57$shopOwners = _ref57.shopOwners,
    shopOwners = _ref57$shopOwners === void 0 ? [] : _ref57$shopOwners,
    onClose = _ref57.onClose,
    toast = _ref57.toast;
  var _useState183 = useState(null),
    _useState184 = _slicedToArray(_useState183, 2),
    editing = _useState184[0],
    setEditing = _useState184[1]; // { shopName, userId, userName, role, notes, id? }
  var _useState185 = useState(false),
    _useState186 = _slicedToArray(_useState185, 2),
    showNew = _useState186[0],
    setShowNew = _useState186[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  // 🆕 fix67: 三方数据对齐诊断 — 加载 org_directory 统计
  var _useState187 = useState(null),
    _useState188 = _slicedToArray(_useState187, 2),
    orgDir = _useState188[0],
    setOrgDir = _useState188[1];
  useEffect(function () {
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27() {
      var _t22, _t23;
      return _regenerator().w(function (_context30) {
        while (1) switch (_context30.p = _context30.n) {
          case 0:
            _context30.p = 0;
            _t22 = setOrgDir;
            _context30.n = 1;
            return window.loadOrgDirectory();
          case 1:
            _t22(_context30.v);
            _context30.n = 3;
            break;
          case 2:
            _context30.p = 2;
            _t23 = _context30.v;
            setOrgDir([]);
          case 3:
            return _context30.a(2);
        }
      }, _callee27, null, [[0, 2]]);
    }))();
  }, []);
  // shop_owners 三方分布(从 prop,已含全部门)
  var ownerStats = useMemo(function () {
    var s = {
      cs: 0,
      design: 0,
      po: 0
    };
    (shopOwners || []).forEach(function (o) {
      if (s[o.system] != null) s[o.system]++;
    });
    return s;
  }, [shopOwners]);
  var dirStats = useMemo(function () {
    if (!orgDir) return null;
    var s = {
      cs: 0,
      design: 0,
      po: 0
    };
    orgDir.forEach(function (d) {
      if (s[d.system] != null && d.active) s[d.system]++;
    });
    return s;
  }, [orgDir]);

  // 按店铺分组
  var grouped = useMemo(function () {
    var m = new Map();
    (shopOwners || []).forEach(function (o) {
      if (!m.has(o.shopName)) m.set(o.shopName, []);
      m.get(o.shopName).push(o);
    });
    return Array.from(m.entries()).sort(function (a, b) {
      return a[0].localeCompare(b[0]);
    });
  }, [shopOwners]);

  // 客服部 owner 数量 (页面顶部统计)
  var csOwnerCount = (shopOwners || []).filter(function (s) {
    return s.system === MY_SYSTEM;
  }).length;

  // 可选员工 (排除已 hide 的)
  var availableEmployees = useMemo(function () {
    return (employees || []).filter(function (e) {
      return !e.hideFromList;
    });
  }, [employees]);
  var saveOwner = /*#__PURE__*/function () {
    var _ref59 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28(record) {
      var client, row, _yield$client$from$up4, error, _t24;
      return _regenerator().w(function (_context31) {
        while (1) switch (_context31.p = _context31.n) {
          case 0:
            client = getCdmClient();
            if (client) {
              _context31.n = 1;
              break;
            }
            alert('消息总线未连接');
            return _context31.a(2);
          case 1:
            _context31.p = 1;
            row = {
              id: record.id || (crypto.randomUUID ? crypto.randomUUID() : 'so_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8)),
              shop_name: record.shopName.trim(),
              system: MY_SYSTEM,
              // 强制本部门 — 不让客服改其他部门的数据
              user_id: record.userId,
              user_name: record.userName,
              role: record.role || 'primary',
              notes: (record.notes || '').trim() || null,
              created_at_ms: record.createdAtMs || Date.now(),
              updated_at: new Date().toISOString()
            };
            _context31.n = 2;
            return client.from('shop_owners').upsert(row);
          case 2:
            _yield$client$from$up4 = _context31.v;
            error = _yield$client$from$up4.error;
            if (!error) {
              _context31.n = 3;
              break;
            }
            throw error;
          case 3:
            toast(record.id ? '✓ 已更新' : '✓ 已添加');
            setEditing(null);
            setShowNew(false);
            _context31.n = 5;
            break;
          case 4:
            _context31.p = 4;
            _t24 = _context31.v;
            alert('保存失败: ' + (_t24.message || _t24));
          case 5:
            return _context31.a(2);
        }
      }, _callee28, null, [[1, 4]]);
    }));
    return function saveOwner(_x17) {
      return _ref59.apply(this, arguments);
    };
  }();

  // 🆕 fix23: 批量矩阵添加 — N 网站 × M 人 × 1 角色 = N*M 条记录,自动去重
  var saveOwnersBatch = /*#__PURE__*/function () {
    var _ref61 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee29(_ref60) {
      var shopNames, userIds, role, notes, client, existingKeys, rows, skipped, _yield$client$from$in2, error, _t25;
      return _regenerator().w(function (_context32) {
        while (1) switch (_context32.p = _context32.n) {
          case 0:
            shopNames = _ref60.shopNames, userIds = _ref60.userIds, role = _ref60.role, notes = _ref60.notes;
            client = getCdmClient();
            if (client) {
              _context32.n = 1;
              break;
            }
            alert('消息总线未连接');
            return _context32.a(2);
          case 1:
            _context32.p = 1;
            existingKeys = new Set((shopOwners || []).filter(function (s) {
              return s.system === MY_SYSTEM;
            }).map(function (s) {
              return "".concat(s.shopName, "__").concat(s.userId, "__").concat(s.role);
            }));
            rows = [];
            skipped = 0;
            shopNames.forEach(function (shopName) {
              userIds.forEach(function (userId) {
                var emp = employees.find(function (e) {
                  return e.id === userId;
                });
                if (!emp) return;
                var userName = emp.name + (emp.alias ? ' ' + emp.alias : '');
                var key = "".concat(shopName.trim(), "__").concat(userId, "__").concat(role);
                if (existingKeys.has(key)) {
                  skipped++;
                  return;
                }
                rows.push({
                  id: crypto.randomUUID ? crypto.randomUUID() : 'so_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8),
                  shop_name: shopName.trim(),
                  system: MY_SYSTEM,
                  user_id: userId,
                  user_name: userName,
                  role: role,
                  notes: (notes || '').trim() || null,
                  created_at_ms: Date.now(),
                  updated_at: new Date().toISOString()
                });
              });
            });
            if (!(rows.length === 0)) {
              _context32.n = 2;
              break;
            }
            toast("\u26A0 ".concat(skipped, " \u6761\u5168\u90E8\u5DF2\u5B58\u5728,\u65E0\u9700\u91CD\u590D\u6DFB\u52A0"));
            setShowNew(false);
            return _context32.a(2);
          case 2:
            _context32.n = 3;
            return client.from('shop_owners').insert(rows);
          case 3:
            _yield$client$from$in2 = _context32.v;
            error = _yield$client$from$in2.error;
            if (!error) {
              _context32.n = 4;
              break;
            }
            throw error;
          case 4:
            toast("\u2713 \u6DFB\u52A0 ".concat(rows.length, " \u6761").concat(skipped > 0 ? " \xB7 \u8DF3\u8FC7 ".concat(skipped, " \u6761\u91CD\u590D") : ''));
            setShowNew(false);
            _context32.n = 6;
            break;
          case 5:
            _context32.p = 5;
            _t25 = _context32.v;
            alert('批量保存失败: ' + (_t25.message || _t25));
          case 6:
            return _context32.a(2);
        }
      }, _callee29, null, [[1, 5]]);
    }));
    return function saveOwnersBatch(_x18) {
      return _ref61.apply(this, arguments);
    };
  }();
  var deleteOwner = /*#__PURE__*/function () {
    var _ref62 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee30(owner) {
      var client, _yield$client$from$de, error, _t26;
      return _regenerator().w(function (_context33) {
        while (1) switch (_context33.p = _context33.n) {
          case 0:
            if (!(owner.system !== MY_SYSTEM)) {
              _context33.n = 1;
              break;
            }
            alert('只能删除本部门(客服)的记录');
            return _context33.a(2);
          case 1:
            _context33.n = 2;
            return wsConfirm("\u5220\u9664\u300C".concat(owner.shopName, " - ").concat(owner.userName, "\u300D?"));
          case 2:
            if (_context33.v) {
              _context33.n = 3;
              break;
            }
            return _context33.a(2);
          case 3:
            client = getCdmClient();
            if (client) {
              _context33.n = 4;
              break;
            }
            alert('消息总线未连接');
            return _context33.a(2);
          case 4:
            _context33.p = 4;
            _context33.n = 5;
            return client.from('shop_owners')["delete"]().eq('id', owner.id);
          case 5:
            _yield$client$from$de = _context33.v;
            error = _yield$client$from$de.error;
            if (!error) {
              _context33.n = 6;
              break;
            }
            throw error;
          case 6:
            toast('✓ 已删除');
            _context33.n = 8;
            break;
          case 7:
            _context33.p = 7;
            _t26 = _context33.v;
            alert('删除失败: ' + (_t26.message || _t26));
          case 8:
            return _context33.a(2);
        }
      }, _callee30, null, [[4, 7]]);
    }));
    return function deleteOwner(_x19) {
      return _ref62.apply(this, arguments);
    };
  }();
  var systemLabel = function systemLabel(sys) {
    return findCdm(CDM_SYSTEMS, sys)["short"];
  };
  var systemBg = function systemBg(sys) {
    return sys === 'cs' ? '#dbeafe' : sys === 'design' ? '#fce7f3' : '#fef3c7';
  };
  var systemColor = function systemColor(sys) {
    return sys === 'cs' ? '#1e40af' : sys === 'design' ? '#9d174d' : '#92400e';
  };
  var roleDef = function roleDef(r) {
    return CDM_OWNER_ROLES.find(function (x) {
      return x.id === r;
    }) || CDM_OWNER_ROLES[1];
  };
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.5)',
      zIndex: 100000,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      overflow: 'auto',
      padding: '30px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 14,
      width: '100%',
      maxWidth: 820,
      boxShadow: '0 20px 60px rgba(0,0,0,.25)',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '90vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "\uD83C\uDF10 \u5E97\u94FA\u8D1F\u8D23\u4EBA\u7BA1\u7406"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, "\u4E09\u65B9\u5171\u4EAB\u6570\u636E \xB7 \u5BA2\u670D\u90E8\u5F53\u524D ", csOwnerCount, " \u4E2A \xB7 \u53EA\u80FD\u7F16\u8F91\u672C\u90E8\u95E8")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, isAdmin && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowNew(true);
    },
    style: {
      padding: '6px 14px',
      background: '#0071e3',
      color: 'white',
      border: 'none',
      borderRadius: 7,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "+ \u65B0\u589E\u6620\u5C04"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      padding: '4px 12px',
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 13
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px',
      borderBottom: '1px solid var(--line)',
      background: '#f8fafc',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 8
    }
  }, "\uD83D\uDCCA \u4E09\u65B9\u6570\u636E\u5BF9\u9F50\u68C0\u67E5"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, [{
    title: '店铺负责人 (shop_owners)',
    stats: ownerStats
  }, {
    title: '人员目录 (org_directory)',
    stats: dirStats
  }].map(function (blk, bi) {
    return /*#__PURE__*/React.createElement("div", {
      key: bi,
      style: {
        background: 'white',
        border: '1px solid var(--line)',
        borderRadius: 8,
        padding: '8px 10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)',
        marginBottom: 6
      }
    }, blk.title), blk.stats === null ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-4)'
      }
    }, "\u52A0\u8F7D\u4E2D\u2026") : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, [{
      sys: 'cs',
      label: '客服',
      bg: '#dbeafe',
      color: '#1e40af'
    }, {
      sys: 'design',
      label: '美工',
      bg: '#fce7f3',
      color: '#9d174d'
    }, {
      sys: 'po',
      label: '跟单',
      bg: '#fef3c7',
      color: '#92400e'
    }].map(function (d) {
      var n = blk.stats[d.sys] || 0;
      var zero = n === 0;
      return /*#__PURE__*/React.createElement("span", {
        key: d.sys,
        style: {
          padding: '3px 9px',
          borderRadius: 8,
          fontSize: 11,
          fontWeight: 600,
          background: zero ? '#fef2f2' : d.bg,
          color: zero ? '#dc2626' : d.color,
          border: zero ? '1px solid #fca5a5' : '1px solid transparent'
        }
      }, zero ? '⚠ ' : '', d.label, " ", n);
    })));
  })), function () {
    var missing = [];
    if (ownerStats.cs === 0) missing.push('客服未录入店铺负责人(点右上"+新增映射")');
    if (ownerStats.po === 0) missing.push('跟单未录入店铺负责人(让 Martin 在跟单系统补)');
    if (ownerStats.design === 0) missing.push('美工未录入店铺负责人');
    if (dirStats && dirStats.cs === 0) missing.push('客服未发布人员目录(去 ⚙设置→员工管理→🔄同步)');
    if (dirStats && dirStats.po === 0) missing.push('跟单未发布人员目录');
    if (missing.length === 0) return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        fontSize: 11,
        color: '#15803d'
      }
    }, "\u2713 \u4E09\u65B9\u6570\u636E\u9F50\u5168");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        fontSize: 11,
        color: '#b45309',
        lineHeight: 1.6
      }
    }, missing.map(function (m, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i
      }, "\u26A0 ", m);
    }));
  }()), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      overflowY: 'auto',
      flex: 1
    }
  }, grouped.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px 14px',
      textAlign: 'center',
      color: 'var(--ink-4)',
      fontSize: 13
    }
  }, "\u6682\u65E0\u5E97\u94FA\u6620\u5C04 \xB7 \u70B9\u53F3\u4E0A\"+ \u65B0\u589E\u6620\u5C04\"\u6DFB\u52A0\u7B2C\u4E00\u4E2A") : grouped.map(function (_ref63) {
    var _ref64 = _slicedToArray(_ref63, 2),
      shopName = _ref64[0],
      owners = _ref64[1];
    return /*#__PURE__*/React.createElement("div", {
      key: shopName,
      style: {
        marginBottom: 12,
        border: '1px solid var(--line)',
        borderRadius: 10,
        background: '#fafaf7',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 12px',
        background: 'white',
        borderBottom: '1px solid var(--line)',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--ink)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\uD83C\uDF10 ", shopName), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)',
        fontWeight: 400
      }
    }, owners.length, " \u4E2A\u8D1F\u8D23\u4EBA")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: 5
      }
    }, owners.map(function (o) {
      var canEdit = o.system === MY_SYSTEM && isAdmin;
      var role = roleDef(o.role);
      return /*#__PURE__*/React.createElement("div", {
        key: o.id,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 10px',
          background: 'white',
          border: '1px solid var(--line)',
          borderRadius: 7,
          flexWrap: 'wrap'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          padding: '2px 7px',
          background: systemBg(o.system),
          color: systemColor(o.system),
          borderRadius: 8,
          fontSize: 10,
          fontWeight: 700
        }
      }, systemLabel(o.system)), /*#__PURE__*/React.createElement("span", {
        style: {
          padding: '2px 7px',
          background: 'white',
          color: role.color,
          border: '1px solid ' + role.color + '40',
          borderRadius: 8,
          fontSize: 10,
          fontWeight: 600
        }
      }, role.label), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          fontWeight: 500,
          color: 'var(--ink)'
        }
      }, o.userName), o.notes && /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 10,
          color: 'var(--ink-3)',
          fontStyle: 'italic'
        }
      }, "\xB7 ", o.notes), /*#__PURE__*/React.createElement("div", {
        style: {
          marginLeft: 'auto',
          display: 'flex',
          gap: 4
        }
      }, canEdit ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setEditing(o);
        },
        style: {
          padding: '3px 8px',
          background: 'white',
          border: '1px solid var(--line)',
          borderRadius: 5,
          cursor: 'pointer',
          fontSize: 11,
          fontFamily: 'inherit'
        }
      }, "\u7F16\u8F91"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return deleteOwner(o);
        },
        style: {
          padding: '3px 8px',
          background: 'white',
          border: '1px solid #fca5a5',
          color: '#dc2626',
          borderRadius: 5,
          cursor: 'pointer',
          fontSize: 11,
          fontFamily: 'inherit'
        }
      }, "\u5220\u9664")) : /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 10,
          color: 'var(--ink-4)'
        }
      }, "\u5176\u4ED6\u90E8\u95E8 \xB7 \u53EA\u8BFB")));
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 20px',
      borderTop: '1px solid var(--line)',
      background: '#fafafa',
      flexShrink: 0,
      fontSize: 10,
      color: 'var(--ink-4)'
    }
  }, "\uD83D\uDCA1 \u6570\u636E\u4E09\u65B9\u5B9E\u65F6\u540C\u6B65 \xB7 \u6DFB\u52A0\u540E\u7F8E\u5DE5/\u8DDF\u5355\u7ACB\u5373\u770B\u5230 \xB7 role: \u2605\u4E3B\u8D1F\u8D23 / \xB7\u5907\u7528 / \uD83D\uDC51\u4E3B\u7BA1 / \uD83C\uDFA8\u8BBE\u8BA1\u5E08")), (showNew || editing) && /*#__PURE__*/React.createElement(ShopOwnerEditor, {
    record: editing || {
      shopName: '',
      userId: '',
      userName: '',
      role: 'primary',
      notes: ''
    },
    employees: availableEmployees,
    existingShopNames: Array.from(new Set((shopOwners || []).map(function (s) {
      return s.shopName;
    }))).sort(),
    onSave: saveOwner,
    onSaveBatch: saveOwnersBatch,
    onClose: function onClose() {
      setEditing(null);
      setShowNew(false);
    }
  })), document.body);
};

// 子表单
// 🆕 v22-CY: 网站名改用 SHOPS_PRESET 预设下拉(防止拼写不一致)
// 🆕 fix23: 新增模式可切换 batch (矩阵批量) — N 网站 × M 人 × 1 角色
var ShopOwnerEditor = function ShopOwnerEditor(_ref65) {
  var record = _ref65.record,
    employees = _ref65.employees,
    existingShopNames = _ref65.existingShopNames,
    onSave = _ref65.onSave,
    onSaveBatch = _ref65.onSaveBatch,
    onClose = _ref65.onClose;
  var isEdit = !!record.id;
  // 🆕 fix23: 批量模式 (仅新增时可用)
  var _useState189 = useState(false),
    _useState190 = _slicedToArray(_useState189, 2),
    batchMode = _useState190[0],
    setBatchMode = _useState190[1];
  // 判断初始 shopName 是否在预设里
  var initIsPreset = !isEdit ? false : SHOPS_SELECTABLE.some(function (s) {
    return s.label === record.shopName;
  });
  var initShopVal = isEdit ? initIsPreset ? record.shopName : '__other__' : '';
  var _useState191 = useState(initShopVal),
    _useState192 = _slicedToArray(_useState191, 2),
    shopName = _useState192[0],
    setShopName = _useState192[1];
  var _useState193 = useState(isEdit && !initIsPreset ? record.shopName || '' : ''),
    _useState194 = _slicedToArray(_useState193, 2),
    customShopName = _useState194[0],
    setCustomShopName = _useState194[1];
  var _useState195 = useState(record.userId || ''),
    _useState196 = _slicedToArray(_useState195, 2),
    userId = _useState196[0],
    setUserId = _useState196[1];
  var _useState197 = useState(record.role || 'primary'),
    _useState198 = _slicedToArray(_useState197, 2),
    role = _useState198[0],
    setRole = _useState198[1];
  var _useState199 = useState(record.notes || ''),
    _useState200 = _slicedToArray(_useState199, 2),
    notes = _useState200[0],
    setNotes = _useState200[1];
  var _useState201 = useState(false),
    _useState202 = _slicedToArray(_useState201, 2),
    saving = _useState202[0],
    setSaving = _useState202[1];

  // 🆕 fix23: 批量模式专用 state
  var _useState203 = useState([]),
    _useState204 = _slicedToArray(_useState203, 2),
    batchShops = _useState204[0],
    setBatchShops = _useState204[1]; // 选中的 shopName 数组
  var _useState205 = useState([]),
    _useState206 = _slicedToArray(_useState205, 2),
    batchUserIds = _useState206[0],
    setBatchUserIds = _useState206[1]; // 选中的员工 id 数组
  var _useState207 = useState(''),
    _useState208 = _slicedToArray(_useState207, 2),
    batchCustomShop = _useState208[0],
    setBatchCustomShop = _useState208[1];
  var _useState209 = useState(false),
    _useState210 = _slicedToArray(_useState209, 2),
    batchIncludeCustom = _useState210[0],
    setBatchIncludeCustom = _useState210[1];
  var selectedEmp = employees.find(function (e) {
    return e.id === userId;
  });
  var submit = /*#__PURE__*/function () {
    var _ref66 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee31() {
      var finalShopName;
      return _regenerator().w(function (_context34) {
        while (1) switch (_context34.n) {
          case 0:
            finalShopName = shopName;
            if (!(shopName === '__other__')) {
              _context34.n = 2;
              break;
            }
            finalShopName = customShopName.trim();
            if (finalShopName) {
              _context34.n = 1;
              break;
            }
            alert('请填写"其他"网站的名称');
            return _context34.a(2);
          case 1:
            _context34.n = 3;
            break;
          case 2:
            if (finalShopName) {
              _context34.n = 3;
              break;
            }
            alert('请选择网站');
            return _context34.a(2);
          case 3:
            if (!(!userId || !selectedEmp)) {
              _context34.n = 4;
              break;
            }
            alert('请选员工');
            return _context34.a(2);
          case 4:
            setSaving(true);
            _context34.n = 5;
            return onSave(_objectSpread(_objectSpread({}, record), {}, {
              shopName: finalShopName,
              userId: userId,
              userName: selectedEmp.name + (selectedEmp.alias ? ' ' + selectedEmp.alias : ''),
              role: role,
              notes: notes
            }));
          case 5:
            setSaving(false);
          case 6:
            return _context34.a(2);
        }
      }, _callee31);
    }));
    return function submit() {
      return _ref66.apply(this, arguments);
    };
  }();

  // 🆕 fix23: 批量保存
  var submitBatch = /*#__PURE__*/function () {
    var _ref67 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee32() {
      var shops;
      return _regenerator().w(function (_context35) {
        while (1) switch (_context35.n) {
          case 0:
            shops = _toConsumableArray(batchShops);
            if (batchIncludeCustom && batchCustomShop.trim()) shops.push(batchCustomShop.trim());
            if (!(shops.length === 0)) {
              _context35.n = 1;
              break;
            }
            alert('请至少勾选一个网站');
            return _context35.a(2);
          case 1:
            if (!(batchUserIds.length === 0)) {
              _context35.n = 2;
              break;
            }
            alert('请至少勾选一位员工');
            return _context35.a(2);
          case 2:
            setSaving(true);
            _context35.n = 3;
            return onSaveBatch({
              shopNames: shops,
              userIds: batchUserIds,
              role: role,
              notes: notes
            });
          case 3:
            setSaving(false);
          case 4:
            return _context35.a(2);
        }
      }, _callee32);
    }));
    return function submitBatch() {
      return _ref67.apply(this, arguments);
    };
  }();
  var toggleShop = function toggleShop(label) {
    return setBatchShops(function (prev) {
      return prev.includes(label) ? prev.filter(function (s) {
        return s !== label;
      }) : [].concat(_toConsumableArray(prev), [label]);
    });
  };
  var toggleUser = function toggleUser(uid) {
    return setBatchUserIds(function (prev) {
      return prev.includes(uid) ? prev.filter(function (u) {
        return u !== uid;
      }) : [].concat(_toConsumableArray(prev), [uid]);
    });
  };
  var previewCount = batchShops.length * batchUserIds.length + (batchIncludeCustom && batchCustomShop.trim() ? batchUserIds.length : 0);
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.5)',
      zIndex: 100001,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 12,
      width: '100%',
      maxWidth: 480,
      boxShadow: '0 20px 60px rgba(0,0,0,.3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, isEdit ? '✏️ 编辑店铺负责人' : '+ 新增店铺负责人'), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, !isEdit && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      padding: 4,
      background: '#f5f5f7',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setBatchMode(false);
    },
    type: "button",
    style: {
      flex: 1,
      padding: '6px 10px',
      background: !batchMode ? 'white' : 'transparent',
      color: !batchMode ? '#0071e3' : 'var(--ink-3)',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit',
      boxShadow: !batchMode ? '0 1px 3px rgba(0,0,0,.08)' : 'none'
    }
  }, "\uD83D\uDCDD \u5355\u6761\u6DFB\u52A0"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setBatchMode(true);
    },
    type: "button",
    style: {
      flex: 1,
      padding: '6px 10px',
      background: batchMode ? 'white' : 'transparent',
      color: batchMode ? '#7c3aed' : 'var(--ink-3)',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit',
      boxShadow: batchMode ? '0 1px 3px rgba(0,0,0,.08)' : 'none'
    }
  }, "\uD83D\uDD22 \u77E9\u9635\u6279\u91CF")), batchMode && !isEdit ?
  /*#__PURE__*/
  /* ━━━━━━━━━━━━━━ 🆕 fix23: 批量矩阵模式 ━━━━━━━━━━━━━━ */
  React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 12px',
      background: '#f3e8ff',
      border: '1px solid #d8b4fe',
      borderRadius: 7,
      fontSize: 11,
      color: '#6b21a8'
    }
  }, "\uD83D\uDCA1 \u52FE\u9009\u591A\u4E2A\u7F51\u7AD9 + \u591A\u4E2A\u5458\u5DE5 + \u4E00\u4E2A\u89D2\u8272 = \u4E00\u6B21\u6027\u6DFB\u52A0 ", /*#__PURE__*/React.createElement("strong", null, previewCount || 0), " \u6761\u8BB0\u5F55(\u91CD\u590D\u81EA\u52A8\u8DF3\u8FC7)"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 6
    }
  }, "\u7F51\u7AD9 * ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--ink-4)'
    }
  }, "\u5DF2\u9009 ", batchShops.length + (batchIncludeCustom && batchCustomShop.trim() ? 1 : 0))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
      gap: 5
    }
  }, SHOPS_SELECTABLE.map(function (s) {
    var checked = batchShops.includes(s.label);
    return /*#__PURE__*/React.createElement("label", {
      key: s.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        padding: '6px 9px',
        border: '1px solid ' + (checked ? '#7c3aed' : 'var(--line)'),
        borderRadius: 6,
        cursor: 'pointer',
        background: checked ? '#faf5ff' : 'white',
        fontSize: 11
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: checked,
      onChange: function onChange() {
        return toggleShop(s.label);
      },
      style: {
        margin: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: checked ? 600 : 400
      }
    }, s.label));
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 6,
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: batchIncludeCustom,
    onChange: function onChange(e) {
      return setBatchIncludeCustom(e.target.checked);
    }
  }), "\uD83D\uDCDD \u542B\u81EA\u5B9A\u4E49\u7F51\u7AD9"), batchIncludeCustom && /*#__PURE__*/React.createElement("input", {
    value: batchCustomShop,
    onChange: function onChange(e) {
      return setBatchCustomShop(e.target.value);
    },
    placeholder: "\u5982 Singapore Outlet",
    style: {
      marginTop: 5,
      width: '100%',
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12,
      fontFamily: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 6
    }
  }, "\u5458\u5DE5 * ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--ink-4)'
    }
  }, "\u5DF2\u9009 ", batchUserIds.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
      gap: 5,
      maxHeight: 220,
      overflowY: 'auto',
      padding: 4,
      background: '#fafafa',
      borderRadius: 6
    }
  }, employees.map(function (e) {
    var checked = batchUserIds.includes(e.id);
    var tag = e.role === 'admin' ? '主管' : e.role === 'super_admin' ? '总管' : e.role === 'finance' ? '财务' : '';
    return /*#__PURE__*/React.createElement("label", {
      key: e.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        padding: '5px 8px',
        border: '1px solid ' + (checked ? '#7c3aed' : 'var(--line)'),
        borderRadius: 6,
        cursor: 'pointer',
        background: checked ? '#faf5ff' : 'white',
        fontSize: 11
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: checked,
      onChange: function onChange() {
        return toggleUser(e.id);
      },
      style: {
        margin: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: checked ? 600 : 400,
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, e.name, e.alias ? ' ' + e.alias : ''), tag && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: 'var(--ink-4)'
      }
    }, "\xB7", tag));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u89D2\u8272 (\u5355\u9009,\u9002\u7528\u4E8E\u6240\u6709\u52FE\u9009\u7EC4\u5408)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, CDM_OWNER_ROLES.filter(function (r) {
    return r.id !== 'designer';
  }).map(function (r) {
    var sel = role === r.id;
    return /*#__PURE__*/React.createElement("button", {
      key: r.id,
      type: "button",
      onClick: function onClick() {
        return setRole(r.id);
      },
      style: {
        padding: '5px 11px',
        background: sel ? r.color : 'white',
        color: sel ? 'white' : r.color,
        border: '1px solid ' + r.color,
        borderRadius: 7,
        cursor: 'pointer',
        fontSize: 11,
        fontWeight: 600,
        fontFamily: 'inherit'
      },
      title: r.desc || ''
    }, r.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u5907\u6CE8 (\u9009\u586B,\u6240\u6709\u8BB0\u5F55\u5171\u4EAB)"), /*#__PURE__*/React.createElement("input", {
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
    placeholder: "\u5982 \u5468\u672B\u73ED / \u4E34\u65F6\u5B89\u6392 / \u4E3B\u8981\u5904\u7406\u552E\u524D...",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  }))) :
  /*#__PURE__*/
  /* ━━━━━━━━━━━━━━ 单条添加 / 编辑模式 (原样保留) ━━━━━━━━━━━━━━ */
  React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u7F51\u7AD9 *"), /*#__PURE__*/React.createElement("select", {
    value: shopName,
    onChange: function onChange(e) {
      return setShopName(e.target.value);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 \u9009\u62E9\u7F51\u7AD9 \u2014"), /*#__PURE__*/React.createElement("optgroup", {
    label: "\uD83D\uDCE6 \u72EC\u7ACB\u7AD9"
  }, SHOPS_SELECTABLE.filter(function (s) {
    return s.category === '独立站';
  }).map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.label
    }, s.label);
  })), /*#__PURE__*/React.createElement("optgroup", {
    label: "\uD83D\uDED2 \u5E73\u53F0"
  }, SHOPS_SELECTABLE.filter(function (s) {
    return s.category === '平台';
  }).map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.label
    }, s.label);
  })), /*#__PURE__*/React.createElement("optgroup", {
    label: "\uD83C\uDFE2 \u5B9E\u4F53\u516C\u53F8"
  }, SHOPS_SELECTABLE.filter(function (s) {
    return s.category === '实体公司';
  }).map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.label
    }, s.label);
  })), /*#__PURE__*/React.createElement("option", {
    value: "__other__"
  }, "\uD83D\uDCDD \u5176\u4ED6 (\u624B\u586B\u5907\u6CE8)")), shopName === '__other__' && /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: customShopName,
    onChange: function onChange(e) {
      return setCustomShopName(e.target.value);
    },
    placeholder: "\u8F93\u5165\u7F51\u7AD9\u540D",
    style: {
      marginTop: 6,
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 10,
      color: 'var(--ink-4)'
    }
  }, "\uD83D\uDCA1 \u7528\u9884\u8BBE\u53EF\u907F\u514D\u62FC\u5199\u4E0D\u4E00\u81F4\u5BFC\u81F4\u81EA\u52A8\u6D3E\u5355\u5931\u6548")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u5458\u5DE5 *"), /*#__PURE__*/React.createElement("select", {
    value: userId,
    onChange: function onChange(e) {
      return setUserId(e.target.value);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 \u9009\u5458\u5DE5 \u2014"), employees.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.name, e.alias ? ' ' + e.alias : '', " ", e.role === 'admin' ? '· 主管' : e.role === 'super_admin' ? '· 总管' : e.role === 'finance' ? '· 财务' : '');
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u89D2\u8272"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, CDM_OWNER_ROLES.map(function (r) {
    var sel = role === r.id;
    return /*#__PURE__*/React.createElement("button", {
      key: r.id,
      type: "button",
      onClick: function onClick() {
        return setRole(r.id);
      },
      style: {
        padding: '5px 11px',
        background: sel ? r.color : 'white',
        color: sel ? 'white' : r.color,
        border: '1px solid ' + r.color,
        borderRadius: 7,
        cursor: 'pointer',
        fontSize: 11,
        fontWeight: 600,
        fontFamily: 'inherit'
      },
      title: r.desc || ''
    }, r.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u5907\u6CE8 (\u9009\u586B)"), /*#__PURE__*/React.createElement("input", {
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
    placeholder: "\u5982 \u5468\u672B / \u4E34\u65F6 / \u4E3B\u7BA1\u4EE3\u73ED...",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 18px',
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    disabled: saving,
    className: "btn-sec",
    style: {
      padding: '7px 14px',
      fontSize: 12
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: batchMode && !isEdit ? submitBatch : submit,
    disabled: saving,
    style: {
      padding: '7px 16px',
      background: batchMode && !isEdit ? '#7c3aed' : '#0071e3',
      color: 'white',
      border: 'none',
      borderRadius: 7,
      cursor: saving ? 'wait' : 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, saving ? '保存中...' : batchMode && !isEdit ? "\u2713 \u6DFB\u52A0 ".concat(previewCount, " \u6761") : '✓ 保存')))), document.body);
};

// ════════════════════════════════════════════════════════════════════
// 🆕 v22-CW Round 3b: 超时阈值设置 (主管/admin)
// 配置 cdm_timeout_config[MY_SYSTEM][category][priority] 自定义天数
// 只能改本部门 — 不覆盖其他部门 (读最新 + merge + upsert)
// ════════════════════════════════════════════════════════════════════
var TimeoutSettingsModal = function TimeoutSettingsModal(_ref68) {
  var user = _ref68.user,
    _ref68$cdmTimeoutConf = _ref68.cdmTimeoutConfig,
    cdmTimeoutConfig = _ref68$cdmTimeoutConf === void 0 ? {} : _ref68$cdmTimeoutConf,
    onClose = _ref68.onClose,
    toast = _ref68.toast;
  // 当前 cs 部门的配置(只编辑这部分)
  var _useState211 = useState(function () {
      return _objectSpread({}, cdmTimeoutConfig[MY_SYSTEM] || {});
    }),
    _useState212 = _slicedToArray(_useState211, 2),
    config = _useState212[0],
    setConfig = _useState212[1];
  var _useState213 = useState(CDM_CATEGORIES[0].id),
    _useState214 = _slicedToArray(_useState213, 2),
    activeCat = _useState214[0],
    setActiveCat = _useState214[1];
  var _useState215 = useState(false),
    _useState216 = _slicedToArray(_useState215, 2),
    saving = _useState216[0],
    setSaving = _useState216[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  if (!isAdmin) return null;
  var catDef = CDM_CATEGORIES.find(function (c) {
    return c.id === activeCat;
  }) || CDM_CATEGORIES[0];
  var setVal = function setVal(cat, pri, val) {
    setConfig(function (prev) {
      var next = _objectSpread({}, prev);
      var catCfg = _objectSpread({}, next[cat] || {});
      var n = parseInt(val, 10);
      if (isNaN(n) || n <= 0) {
        delete catCfg[pri]; // 删除 = 恢复默认
      } else if (n > 365) {
        return prev; // 超出范围拒绝
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
  var resetCategory = function resetCategory() {
    setConfig(function (prev) {
      var next = _objectSpread({}, prev);
      delete next[activeCat];
      return next;
    });
    toast('✓ 此分类已恢复默认');
  };
  var resetAll = /*#__PURE__*/function () {
    var _ref69 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee33() {
      return _regenerator().w(function (_context36) {
        while (1) switch (_context36.n) {
          case 0:
            _context36.n = 1;
            return wsConfirm('确定要把客服部所有分类的超时阈值都恢复默认?');
          case 1:
            if (_context36.v) {
              _context36.n = 2;
              break;
            }
            return _context36.a(2);
          case 2:
            setConfig({});
            toast('✓ 全部已恢复默认');
          case 3:
            return _context36.a(2);
        }
      }, _callee33);
    }));
    return function resetAll() {
      return _ref69.apply(this, arguments);
    };
  }();
  var save = /*#__PURE__*/function () {
    var _ref70 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee34() {
      var client, _yield$client$from$se5, data, latest, merged, _yield$client$from$up5, error, _t27;
      return _regenerator().w(function (_context37) {
        while (1) switch (_context37.p = _context37.n) {
          case 0:
            client = getCdmClient();
            if (client) {
              _context37.n = 1;
              break;
            }
            alert('消息总线未连接');
            return _context37.a(2);
          case 1:
            setSaving(true);
            _context37.p = 2;
            _context37.n = 3;
            return client.from('app_config').select('value').eq('key', 'cdm_timeout_config').maybeSingle();
          case 3:
            _yield$client$from$se5 = _context37.v;
            data = _yield$client$from$se5.data;
            latest = (data === null || data === void 0 ? void 0 : data.value) || {};
            merged = _objectSpread(_objectSpread({}, latest), {}, _defineProperty({}, MY_SYSTEM, config));
            _context37.n = 4;
            return client.from('app_config').upsert({
              key: 'cdm_timeout_config',
              value: merged
            });
          case 4:
            _yield$client$from$up5 = _context37.v;
            error = _yield$client$from$up5.error;
            if (!error) {
              _context37.n = 5;
              break;
            }
            throw error;
          case 5:
            toast('✓ 已保存 · 全系统生效');
            onClose();
            _context37.n = 7;
            break;
          case 6:
            _context37.p = 6;
            _t27 = _context37.v;
            alert('保存失败: ' + (_t27.message || _t27));
          case 7:
            setSaving(false);
          case 8:
            return _context37.a(2);
        }
      }, _callee34, null, [[2, 6]]);
    }));
    return function save() {
      return _ref70.apply(this, arguments);
    };
  }();
  var customCount = Object.keys(config).length;
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.5)',
      zIndex: 100000,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      overflow: 'auto',
      padding: '30px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 14,
      width: '100%',
      maxWidth: 760,
      boxShadow: '0 20px 60px rgba(0,0,0,.25)',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '90vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "\u23F0 \u8D85\u65F6\u9608\u503C\u8BBE\u7F6E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, "\u5BA2\u670D\u90E8 \xB7 \u81EA\u5B9A\u4E49 ", customCount, " \u4E2A\u5206\u7C7B \xB7 \u5176\u4ED6\u90E8\u95E8\u914D\u7F6E\u4E0D\u53D8")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: resetAll,
    style: {
      padding: '6px 12px',
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 7,
      cursor: 'pointer',
      fontSize: 11,
      fontFamily: 'inherit'
    }
  }, "\u21BB \u5168\u90E8\u6062\u590D\u9ED8\u8BA4"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      padding: '4px 12px',
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 13
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      minHeight: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180,
      borderRight: '1px solid var(--line)',
      overflowY: 'auto',
      background: '#fafafa',
      flexShrink: 0
    }
  }, CDM_CATEGORIES.map(function (c) {
    var sel = activeCat === c.id;
    var hasCustom = !!config[c.id];
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      onClick: function onClick() {
        return setActiveCat(c.id);
      },
      style: {
        width: '100%',
        padding: '9px 12px',
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        background: sel ? 'white' : 'transparent',
        border: 'none',
        borderLeft: '3px solid ' + (sel ? '#0071e3' : 'transparent'),
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 12,
        color: sel ? 'var(--ink)' : 'var(--ink-2)',
        fontWeight: sel ? 600 : 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, c.label), hasCustom && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: '#dc2626',
        fontWeight: 700
      }
    }, "\u25CF"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '18px 22px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6,
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: catDef.color
    }
  }, catDef.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, catDef.desc)), config[activeCat] && /*#__PURE__*/React.createElement("button", {
    onClick: resetCategory,
    style: {
      padding: '4px 10px',
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      color: 'var(--ink-3)',
      fontFamily: 'inherit'
    }
  }, "\u21BB \u6062\u590D\u6B64\u5206\u7C7B\u9ED8\u8BA4")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginTop: 14
    }
  }, CDM_PRIORITIES.map(function (p) {
    var _config$activeCat, _catDef$defaultTimeou, _catDef$defaultTimeou2;
    var customVal = (_config$activeCat = config[activeCat]) === null || _config$activeCat === void 0 ? void 0 : _config$activeCat[p.id];
    var defaultVal = (_catDef$defaultTimeou = (_catDef$defaultTimeou2 = catDef.defaultTimeout) === null || _catDef$defaultTimeou2 === void 0 ? void 0 : _catDef$defaultTimeou2[p.id]) !== null && _catDef$defaultTimeou !== void 0 ? _catDef$defaultTimeou : 7;
    var isCustom = typeof customVal === 'number' && customVal > 0;
    var displayVal = isCustom ? customVal : '';
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '9px 12px',
        background: isCustom ? '#fef2f2' : '#fafaf7',
        border: '1px solid ' + (isCustom ? '#fca5a5' : 'var(--line)'),
        borderRadius: 9
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        background: p.bg,
        color: p.color,
        borderRadius: 9,
        fontSize: 11,
        fontWeight: 600,
        minWidth: 60,
        textAlign: 'center'
      }
    }, p.label), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: 1,
      max: 365,
      value: displayVal,
      placeholder: "\u9ED8\u8BA4 ".concat(defaultVal),
      onChange: function onChange(e) {
        return setVal(activeCat, p.id, e.target.value);
      },
      style: {
        width: 80,
        padding: '5px 8px',
        border: '1px solid ' + (isCustom ? '#fca5a5' : 'var(--line)'),
        borderRadius: 6,
        fontSize: 13,
        fontFamily: 'inherit',
        textAlign: 'center'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'var(--ink-3)'
      }
    }, "\u5929"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        fontSize: 11,
        color: isCustom ? '#b91c1c' : 'var(--ink-4)',
        fontWeight: isCustom ? 600 : 400
      }
    }, isCustom ? '(已自定义)' : "(\u9ED8\u8BA4 ".concat(defaultVal, " \u5929)")));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: '10px 12px',
      background: '#eff6ff',
      border: '1px solid #bfdbfe',
      borderRadius: 8,
      fontSize: 11,
      color: '#1e40af',
      lineHeight: 1.6
    }
  }, "\uD83D\uDCA1 \u7559\u7A7A = \u6062\u590D\u9ED8\u8BA4 \xB7 \u6539\u5B8C\u540E\u6240\u6709 11 \u4E2A\u5206\u7C7B \xD7 4 \u4E2A\u4F18\u5148\u7EA7\u5171 44 \u4E2A\u7EC4\u5408\u90FD\u6309\u8FD9\u91CC\u7684\u8BBE\u7F6E\u7B97\u8D85\u65F6", /*#__PURE__*/React.createElement("br", null), "\uD83D\uDCA1 \u6539\u7684\u662F", /*#__PURE__*/React.createElement("strong", null, "\u5BA2\u670D\u90E8\u63A5\u5230\u7684\u5DE5\u5355"), "\u7684\u8D85\u65F6(`to_system=cs`)\xB7 \u4E0D\u5F71\u54CD\u5176\u4ED6\u90E8\u95E8"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px',
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    disabled: saving,
    className: "btn-sec",
    style: {
      padding: '7px 16px',
      fontSize: 13
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: save,
    disabled: saving,
    style: {
      padding: '7px 18px',
      background: '#0071e3',
      color: 'white',
      border: 'none',
      borderRadius: 7,
      cursor: saving ? 'wait' : 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, saving ? '保存中...' : '✓ 保存 (全系统生效)')))), document.body);
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix49: 拍摄需求中心模块 (PhotoRequestsModule)
// 对接 WorkTrack-KPI 的 photo_logs 表
// 客服 / 跟单 提需求 → 拍摄部接手 → 全程透明可追溯
// ════════════════════════════════════════════════════════════════════
var PHOTO_STATUS_MAP = {
  draft: {
    label: '📦 已提交',
    color: '#475569',
    bg: '#f1f5f9',
    desc: '等拍摄部接手'
  },
  shooting: {
    label: '📷 拍摄中',
    color: '#0369a1',
    bg: '#dbeafe',
    desc: '拍摄部已接'
  },
  shot: {
    label: '✓ 已拍完',
    color: '#16a34a',
    bg: '#dcfce7',
    desc: '等剪辑'
  },
  editing: {
    label: '🎬 剪辑中',
    color: '#a855f7',
    bg: '#f3e8ff',
    desc: '美工剪辑中'
  },
  edited: {
    label: '✓ 已剪辑',
    color: '#16a34a',
    bg: '#dcfce7',
    desc: '等上传'
  },
  uploading: {
    label: '⬆️ 上传中',
    color: '#ea580c',
    bg: '#fed7aa',
    desc: '上传到店铺'
  },
  done: {
    label: '✅ 完成',
    color: '#16a34a',
    bg: '#dcfce7',
    desc: '已上线'
  }
};

// 🆕 fix59 v4: 拍摄仓库 — 入库原因 + helper 工具函数
var WAREHOUSE_REASON_META = {
  '无货': {
    icon: '📦',
    notify: true
  },
  '供应商缺料': {
    icon: '🏭',
    notify: true
  },
  '维修中': {
    icon: '🔧',
    notify: false
  },
  '客户取消': {
    icon: '❌',
    notify: false
  },
  '等下批货': {
    icon: '🚚',
    notify: true
  },
  '样品丢失': {
    icon: '❓',
    notify: true
  },
  '质量问题': {
    icon: '⚠️',
    notify: true
  },
  '其他': {
    icon: '📋',
    notify: false
  }
};
var getWarehouseInfo = function getWarehouseInfo(log) {
  return log.warehouse_info || log.warehouseInfo || null;
};
var isWarehoused = function isWarehoused(log) {
  return !!getWarehouseInfo(log);
};
var getWarehouseAge = function getWarehouseAge(log) {
  var w = getWarehouseInfo(log);
  if (!w) return null;
  return Math.floor((Date.now() - w.at_ms) / (24 * 3600 * 1000));
};
var daysAgoText = function daysAgoText(ms) {
  var days = Math.floor((Date.now() - ms) / (24 * 3600 * 1000));
  if (days === 0) return '今天';
  if (days === 1) return '昨天';
  if (days < 7) return "".concat(days, " \u5929\u524D");
  if (days < 30) return "".concat(Math.floor(days / 7), " \u5468\u524D");
  return "".concat(Math.floor(days / 30), " \u6708\u524D");
};
var shouldNotifyCustomer = function shouldNotifyCustomer(reason) {
  var _WAREHOUSE_REASON_MET;
  return ((_WAREHOUSE_REASON_MET = WAREHOUSE_REASON_META[reason]) === null || _WAREHOUSE_REASON_MET === void 0 ? void 0 : _WAREHOUSE_REASON_MET.notify) === true;
};
// 客户通知话术(入库)
var buildWarehouseCustomerScript = function buildWarehouseCustomerScript(log) {
  var w = getWarehouseInfo(log);
  if (!w) return '';
  var detail = w.reason_detail ? w.reason_detail : '等我们这边确认时间后';
  return "Hi,\n\n\u5173\u4E8E\u60A8\u4E4B\u524D\u54A8\u8BE2\u7684\u300C".concat(log.product_name || '该产品', "\u300D,\u6211\u4EEC\u76EE\u524D\u9047\u5230\u300C").concat(w.reason, "\u300D\u7684\u60C5\u51B5\u3002\n\n\u9884\u8BA1 ").concat(detail, " \u53EF\u4EE5\u91CD\u65B0\u5B89\u6392\u62CD\u6444/\u53D1\u8D27\u3002\u6211\u4EEC\u4F1A\u6301\u7EED\u8DDF\u8FDB,\u4E00\u6709\u8FDB\u5C55\u4F1A\u7B2C\u4E00\u65F6\u95F4\u544A\u8BC9\u60A8\u3002\n\n\u975E\u5E38\u62B1\u6B49\u7ED9\u60A8\u5E26\u6765\u4E0D\u4FBF,\u611F\u8C22\u60A8\u7684\u8010\u5FC3\u7B49\u5F85\u3002");
};

// 🆕 fix53 v3: 来源徽章 — 5 类来源不同颜色
var SOURCE_BADGE_MAP = {
  '客服': {
    icon: '📨',
    label: '客服',
    bg: '#dbeafe',
    color: '#1e40af'
  },
  // 蓝
  '跟单': {
    icon: '📋',
    label: '跟单',
    bg: '#f3e8ff',
    color: '#6b21a8'
  },
  // 紫
  '销售': {
    icon: '💰',
    label: '销售',
    bg: '#fed7aa',
    color: '#9a3412'
  },
  // 橙
  '美工': {
    icon: '🎨',
    label: '美工',
    bg: '#cffafe',
    color: '#155e75'
  },
  // 青
  '自发': {
    icon: '📷',
    label: '拍摄部',
    bg: '#f5f5f4',
    color: '#44403c'
  } // 灰
};

// 🆕 fix53 v3: 渲染状态行(展开全部 sub-state)
var renderStatusLine = function renderStatusLine(log) {
  var _log$pre_shoot_review, _log$review;
  var lines = [];
  var st = PHOTO_STATUS_MAP[log.status];
  if (st) lines.push(st.label + ' · ' + st.desc);
  if (log.photographer_name) lines.push("\uD83D\uDCF7 \u6444\u5F71:".concat(log.photographer_name));
  if (log.editor_name) lines.push("\uD83C\uDFAC \u526A\u8F91:".concat(log.editor_name));
  if (log.uploader_name) lines.push("\u2B06\uFE0F \u4E0A\u4F20:".concat(log.uploader_name));
  if ((_log$pre_shoot_review = log.pre_shoot_review) !== null && _log$pre_shoot_review !== void 0 && _log$pre_shoot_review.status) {
    var psr = {
      pending: '⏳ 美工预审中',
      approved: '✅ 美工预审通过',
      rejected: '⚠️ 美工反馈问题'
    }[log.pre_shoot_review.status];
    if (psr) lines.push(psr + (log.pre_shoot_review.decision_by_name ? " (".concat(log.pre_shoot_review.decision_by_name, ")") : ''));
  }
  if ((_log$review = log.review) !== null && _log$review !== void 0 && _log$review.status) {
    var rv = {
      pending: '🎬 视频审核中',
      approved: '✅ 视频审核通过',
      rejected: '⚠️ 视频被反馈'
    }[log.review.status];
    if (rv) lines.push(rv + (log.review.decision_by_name ? " (".concat(log.review.decision_by_name, ")") : ''));
  }
  if (log.pending_reason && (log.status === 'draft' || log.status === 'shooting')) {
    lines.push("\uD83D\uDCCC \u5361\u4F4F:".concat(log.pending_reason));
  }
  if (log.embed_status === 'embedded') {
    lines.push('🌐 已嵌入独立站' + (log.url_xiaohongshu ? ' · 📕 小红书已发' : ''));
  }
  return lines;
};
var PhotoRequestsModule = function PhotoRequestsModule(_ref71) {
  var _window$isWtkpiConfig, _window;
  var user = _ref71.user,
    toast = _ref71.toast;
  // 🆕 fix53 v3: 默认 sub-tab = 'all-activities' (全部工作动态)
  var _useState217 = useState('all-activities'),
    _useState218 = _slicedToArray(_useState217, 2),
    filter = _useState218[0],
    setFilter = _useState218[1];
  var _useState219 = useState('all'),
    _useState220 = _slicedToArray(_useState219, 2),
    ageFilter = _useState220[0],
    setAgeFilter = _useState220[1]; // 🆕 fix227:停留天数(未完成的工单等待了多久)
  var _useState221 = useState({
      from: '',
      to: ''
    }),
    _useState222 = _slicedToArray(_useState221, 2),
    ageCustom = _useState222[0],
    setAgeCustom = _useState222[1];
  var _useState223 = useState(''),
    _useState224 = _slicedToArray(_useState223, 2),
    prcSearch = _useState224[0],
    setPrcSearch = _useState224[1]; // 🆕 fix227:智能搜索
  var _useState225 = useState(false),
    _useState226 = _slicedToArray(_useState225, 2),
    loading = _useState226[0],
    setLoading = _useState226[1];
  var _useState227 = useState([]),
    _useState228 = _slicedToArray(_useState227, 2),
    list = _useState228[0],
    setList = _useState228[1];
  var _useState229 = useState(false),
    _useState230 = _slicedToArray(_useState229, 2),
    showNew = _useState230[0],
    setShowNew = _useState230[1];
  var _useState231 = useState(false),
    _useState232 = _slicedToArray(_useState231, 2),
    showBatch = _useState232[0],
    setShowBatch = _useState232[1];
  var _useState233 = useState(null),
    _useState234 = _slicedToArray(_useState233, 2),
    detailItem = _useState234[0],
    setDetailItem = _useState234[1];
  var _useState235 = useState(null),
    _useState236 = _slicedToArray(_useState235, 2),
    editItem = _useState236[0],
    setEditItem = _useState236[1];
  var _useState237 = useState(((_window$isWtkpiConfig = (_window = window).isWtkpiConfigured) === null || _window$isWtkpiConfig === void 0 ? void 0 : _window$isWtkpiConfig.call(_window)) || false),
    _useState238 = _slicedToArray(_useState237, 2),
    configured = _useState238[0],
    setConfigured = _useState238[1];
  var lastRefreshRef = useRef(0);
  // 🆕 fix140: 分页 — 默认 150 条,「加载更多」每次 +150。refresh 重拉「当前已加载量」,
  //           保证客户端 sub-tab 筛选语义不变(在已加载集上过滤),且不再一次性全表拉。
  var PHOTO_PAGE = 150;
  var _useState239 = useState(PHOTO_PAGE),
    _useState240 = _slicedToArray(_useState239, 2),
    loadedCount = _useState240[0],
    setLoadedCount = _useState240[1];
  var _useState241 = useState(false),
    _useState242 = _slicedToArray(_useState241, 2),
    hasMore = _useState242[0],
    setHasMore = _useState242[1];
  var _useState243 = useState(false),
    _useState244 = _slicedToArray(_useState243, 2),
    loadingMore = _useState244[0],
    setLoadingMore = _useState244[1];
  var refresh = /*#__PURE__*/function () {
    var _ref72 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee35(count) {
      var _window$isWtkpiConfig2, _window2;
      var want, data, _t28;
      return _regenerator().w(function (_context38) {
        while (1) switch (_context38.p = _context38.n) {
          case 0:
            if ((_window$isWtkpiConfig2 = (_window2 = window).isWtkpiConfigured) !== null && _window$isWtkpiConfig2 !== void 0 && _window$isWtkpiConfig2.call(_window2)) {
              _context38.n = 1;
              break;
            }
            setConfigured(false);
            setList([]);
            return _context38.a(2);
          case 1:
            setConfigured(true);
            setLoading(true);
            _context38.p = 2;
            want = count || loadedCount || PHOTO_PAGE; // 重拉当前已加载量(分页 range),不再一次性全拉
            _context38.n = 3;
            return window.listPhotoRequests({
              limit: want
            });
          case 3:
            data = _context38.v;
            setList(data || []);
            setHasMore((data || []).length >= want); // 拉满即可能还有更多
            setLoadedCount(want);
            lastRefreshRef.current = Date.now();
            _context38.n = 5;
            break;
          case 4:
            _context38.p = 4;
            _t28 = _context38.v;
            console.error('[PhotoReq] 加载失败', _t28);
            toast('加载拍摄需求失败:' + (_t28.message || ''));
          case 5:
            setLoading(false);
          case 6:
            return _context38.a(2);
        }
      }, _callee35, null, [[2, 4]]);
    }));
    return function refresh(_x20) {
      return _ref72.apply(this, arguments);
    };
  }();
  var loadMore = /*#__PURE__*/function () {
    var _ref73 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee36() {
      var next, data, _t29;
      return _regenerator().w(function (_context39) {
        while (1) switch (_context39.p = _context39.n) {
          case 0:
            if (!loadingMore) {
              _context39.n = 1;
              break;
            }
            return _context39.a(2);
          case 1:
            setLoadingMore(true);
            _context39.p = 2;
            next = loadedCount + PHOTO_PAGE;
            _context39.n = 3;
            return window.listPhotoRequests({
              limit: next
            });
          case 3:
            data = _context39.v;
            setList(data || []);
            setHasMore((data || []).length >= next);
            setLoadedCount(next);
            _context39.n = 5;
            break;
          case 4:
            _context39.p = 4;
            _t29 = _context39.v;
            console.error('[PhotoReq] 加载更多失败', _t29);
          case 5:
            setLoadingMore(false);
          case 6:
            return _context39.a(2);
        }
      }, _callee36, null, [[2, 4]]);
    }));
    return function loadMore() {
      return _ref73.apply(this, arguments);
    };
  }();
  useEffect(function () {
    refresh(PHOTO_PAGE);
  }, []);

  // 🆕 fix53 v3 (Q3-C) + fix59 v4: 实时订阅 — 状态变化 + 入库/唤醒事件
  useEffect(function () {
    var _window$getWtkpiClien, _window3;
    if (!configured) return;
    var client = (_window$getWtkpiClien = (_window3 = window).getWtkpiClient) === null || _window$getWtkpiClien === void 0 ? void 0 : _window$getWtkpiClien.call(_window3);
    if (!client) return;
    var channel = client.channel('cs-photo-logs-' + user.id) /* 🆕 fix216:频道名固定,单例 */.on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'photo_logs'
    }, function (payload) {
      var _newRow$external_requ;
      var eventType = payload.eventType,
        newRow = payload["new"],
        oldRow = payload.old;
      // 列表自动刷新(🆕 fix140: 节流 1s→3s,且只重拉已加载量,削减全表 refresh 风暴)
      if (Date.now() - lastRefreshRef.current > 3000) refresh();
      var isMine = (newRow === null || newRow === void 0 || (_newRow$external_requ = newRow.external_request) === null || _newRow$external_requ === void 0 ? void 0 : _newRow$external_requ.from_user_id) === user.id;
      if (eventType === 'UPDATE' && isMine) {
        // 🆕 fix59 v4: 入库通知(原来没 warehouse_info,现在有了)
        if (!(oldRow !== null && oldRow !== void 0 && oldRow.warehouse_info) && newRow !== null && newRow !== void 0 && newRow.warehouse_info) {
          var w = newRow.warehouse_info;
          toast("\uD83D\uDCE6 \u4F60\u63D0\u7684\u300C".concat(newRow.product_name, "\u300D\u5DF2\u5165\u5E93 \u2014 \u539F\u56E0:").concat(w.reason, "(").concat(w.by_name || '拍摄部', ")"));
          return;
        }
        // 🆕 fix59 v4: 唤醒通知(原来有,现在没了)
        if (oldRow !== null && oldRow !== void 0 && oldRow.warehouse_info && !(newRow !== null && newRow !== void 0 && newRow.warehouse_info)) {
          toast("\u2728 \u4F60\u63D0\u7684\u300C".concat(newRow.product_name, "\u300D\u5DF2\u5524\u9192\u51FA\u5E93 \u2014 \u8D27\u5230\u4F4D\u4E86,\u62CD\u6444\u90E8\u7EE7\u7EED\u8DDF\u8FDB"));
          return;
        }
        // 状态变化
        if ((oldRow === null || oldRow === void 0 ? void 0 : oldRow.status) !== (newRow === null || newRow === void 0 ? void 0 : newRow.status)) {
          var labels = {
            shooting: '📷 拍摄部已接',
            shot: '✓ 已拍完',
            editing: '🎬 剪辑中',
            done: '✅ 完成 · 已上线'
          };
          if (labels[newRow.status]) {
            toast("\u4F60\u63D0\u7684\u300C".concat(newRow.product_name, "\u300D \u2192 ").concat(labels[newRow.status]));
          }
        }
      }
    }).subscribe();
    return function () {
      client.removeChannel(channel);
    };
  }, [configured, user.id]);

  // 🆕 fix59 v4: 客户端筛选(默认排除在仓库的)
  var visible = list.filter(function (r) {
    var _r$external_request, _r$external_request2;
    var warehoused = isWarehoused(r);
    if (filter === 'warehouse') return warehoused; // 仓库 tab:只看在仓库的
    if (filter === 'all-with-warehouse') return true; // 全部含仓库:都显示
    // 其他所有 tab 默认排除仓库中的
    if (warehoused) return false;
    if (filter === 'all-activities') return true;
    if (filter === 'mine') return ((_r$external_request = r.external_request) === null || _r$external_request === void 0 ? void 0 : _r$external_request.from_user_id) === user.id;
    if (filter === 'urgent') return (r.priority === 'urgent' || ((_r$external_request2 = r.external_request) === null || _r$external_request2 === void 0 ? void 0 : _r$external_request2.urgency) === 'urgent') && r.status !== 'done';
    if (filter === 'in-progress') return ['shooting', 'shot', 'editing', 'edited', 'uploading'].includes(r.status);
    if (filter === 'done') return r.status === 'done';
    return true;
  }).filter(function (r) {
    // 🆕 fix227:智能搜索(产品名/SKU/店铺/链接/提需求人/原因)
    var q = prcSearch.trim().toLowerCase();
    if (q) {
      var _r$external_request3, _r$external_request4;
      var hay = [r.product_name, r.sku, (r.applicable_shops || []).join(' '), r.reason, (_r$external_request3 = r.external_request) === null || _r$external_request3 === void 0 ? void 0 : _r$external_request3.reason, (_r$external_request4 = r.external_request) === null || _r$external_request4 === void 0 ? void 0 : _r$external_request4.from_name, r.created_by_name, (r.attachments || []).map(function (a) {
        return a && a.url;
      }).join(' ')].filter(Boolean).join(' ').toLowerCase();
      if (!q.split(/\s+/).every(function (w) {
        return hay.includes(w);
      })) return false;
    }
    // 🆕 fix227:按"停留天数"筛(只对未完成工单有意义 —— 已完成/仓库不算逾期)
    if (ageFilter !== 'all') {
      var _r$external_request5;
      var ms = r.created_at_ms || ((_r$external_request5 = r.external_request) === null || _r$external_request5 === void 0 ? void 0 : _r$external_request5.created_at_ms) || (r.created_at ? Date.parse(r.created_at) : 0);
      if (!ms) return false;
      var days = (Date.now() - ms) / 86400000;
      var pending = !['done', 'cancelled'].includes(r.status);
      if (ageFilter === 'custom') {
        var f = ageCustom.from ? Date.parse(ageCustom.from) : null;
        var t = ageCustom.to ? Date.parse(ageCustom.to) + 86400000 : null;
        if (f && ms < f) return false;
        if (t && ms > t) return false;
      } else {
        var n = parseInt(ageFilter, 10); // 7 / 14 / 30 / 60
        if (!(pending && days >= n)) return false;
      }
    }
    return true;
  });

  // 🆕 fix59 v4: 我提的且在仓库的(用于顶部横幅)
  var myWarehoused = list.filter(function (r) {
    var _r$external_request6;
    return ((_r$external_request6 = r.external_request) === null || _r$external_request6 === void 0 ? void 0 : _r$external_request6.from_user_id) === user.id && isWarehoused(r);
  });
  if (!configured) {
    return /*#__PURE__*/React.createElement("div", {
      className: "paper rounded-2xl",
      style: {
        padding: '48px 32px',
        textAlign: 'center',
        maxWidth: 520,
        margin: '40px auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 48,
        marginBottom: 12
      }
    }, "\uD83D\uDCE8"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 600,
        marginBottom: 8,
        letterSpacing: '-.022em'
      }
    }, "\u62CD\u6444\u9700\u6C42\u4E2D\u5FC3\u672A\u914D\u7F6E"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--ink-3)',
        lineHeight: 1.65,
        marginBottom: 24
      }
    }, "\u9700\u8981\u4E3B\u7BA1\u5148\u53BB ", /*#__PURE__*/React.createElement("strong", null, "\u2699 \u8BBE\u7F6E\u4E2D\u5FC3 \u2192 \u62CD\u6444\u90E8\u5BF9\u63A5"), " \u586B\u5199 WorkTrack-KPI \u7684 Supabase URL \u548C anon key\u3002"), /*#__PURE__*/React.createElement("button", {
      className: "btn-pri",
      onClick: function onClick() {
        var _window$isWtkpiConfig3, _window4, _window$isWtkpiConfig4, _window5;
        setConfigured(((_window$isWtkpiConfig3 = (_window4 = window).isWtkpiConfigured) === null || _window$isWtkpiConfig3 === void 0 ? void 0 : _window$isWtkpiConfig3.call(_window4)) || false);
        if ((_window$isWtkpiConfig4 = (_window5 = window).isWtkpiConfigured) !== null && _window$isWtkpiConfig4 !== void 0 && _window$isWtkpiConfig4.call(_window5)) refresh();
      }
    }, "\uD83D\uDD04 \u68C0\u6D4B\u914D\u7F6E / \u5237\u65B0"));
  }

  // 各 sub-tab 计数(🆕 fix59 v4: 活跃统计排除仓库中的)
  var activeList = list.filter(function (r) {
    return !isWarehoused(r);
  });
  var counts = {
    all: activeList.length,
    allWithWarehouse: list.length,
    mine: activeList.filter(function (r) {
      var _r$external_request7;
      return ((_r$external_request7 = r.external_request) === null || _r$external_request7 === void 0 ? void 0 : _r$external_request7.from_user_id) === user.id;
    }).length,
    urgent: activeList.filter(function (r) {
      var _r$external_request8;
      return (r.priority === 'urgent' || ((_r$external_request8 = r.external_request) === null || _r$external_request8 === void 0 ? void 0 : _r$external_request8.urgency) === 'urgent') && r.status !== 'done';
    }).length,
    inProgress: activeList.filter(function (r) {
      return ['shooting', 'shot', 'editing', 'edited', 'uploading'].includes(r.status);
    }).length,
    done: activeList.filter(function (r) {
      return r.status === 'done';
    }).length,
    warehouse: list.filter(function (r) {
      return isWarehoused(r);
    }).length
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-.022em',
      flex: 1
    }
  }, "\uD83D\uDCE8 \u62CD\u6444\u9700\u6C42\u4E2D\u5FC3", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 400,
      color: 'var(--ink-3)',
      marginLeft: 8
    }
  }, "v4 \xB7 \u5168\u91CF\u53EF\u89C1 + \u534F\u4F5C\u7F16\u8F91 + \u62CD\u6444\u4ED3\u5E93")), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: refresh,
    disabled: loading,
    title: "\u5237\u65B0\u5217\u8868"
  }, loading ? '⏳' : '🔄', " \u5237\u65B0"), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: function onClick() {
      return setShowBatch(true);
    },
    title: "\u4E00\u6B21\u63D0\u4EA4\u591A\u6761\u9700\u6C42"
  }, "\uD83D\uDCE5 \u6279\u91CF"), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: function onClick() {
      return setShowNew(true);
    }
  }, "+ \u65B0\u5EFA\u9700\u6C42")), myWarehoused.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fffbeb',
      border: '1px solid #fbbf24',
      borderRadius: 12,
      padding: '12px 16px',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: '#92400e'
    }
  }, "\uD83D\uDCE6 \u4F60\u63D0\u7684 ", myWarehoused.length, " \u6761\u9700\u6C42\u5F53\u524D\u5728\u62CD\u6444\u4ED3\u5E93 \xB7 \u7B49\u8D27\u56DE\u6765"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setFilter('warehouse');
    },
    style: {
      fontSize: 12,
      padding: '4px 12px',
      background: '#f59e0b',
      color: 'white',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 500
    }
  }, "\u67E5\u770B\u4ED3\u5E93 \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#78350f',
      lineHeight: 1.7
    }
  }, myWarehoused.slice(0, 3).map(function (r, i) {
    var w = getWarehouseInfo(r);
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, "\xB7 ", r.product_name, "(", w.reason, " \xB7 ", daysAgoText(w.at_ms), ")");
  }), myWarehoused.length > 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#a16207'
    }
  }, "\u2026 \u8FD8\u6709 ", myWarehoused.length - 3, " \u6761"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
      gap: 8,
      marginBottom: 14
    }
  }, [{
    fid: 'all-activities',
    label: '活跃工单',
    val: counts.all,
    color: 'var(--ink-2)',
    bg: 'var(--bg-elevated)'
  }, {
    fid: 'mine',
    label: '我提的',
    val: counts.mine,
    color: 'var(--accent)',
    bg: 'var(--accent-soft)'
  }, {
    fid: 'urgent',
    label: '🚨 加急未完',
    val: counts.urgent,
    color: 'var(--bad)',
    bg: 'var(--bad-soft)'
  }, {
    fid: 'in-progress',
    label: '🔄 进行中',
    val: counts.inProgress,
    color: '#0369a1',
    bg: '#dbeafe'
  }, {
    fid: 'done',
    label: '✅ 已完成',
    val: counts.done,
    color: 'var(--good)',
    bg: 'var(--good-soft)'
  }, {
    fid: 'warehouse',
    label: '📦 在仓库',
    val: counts.warehouse,
    color: '#92400e',
    bg: '#fef3c7'
  }].map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        return setFilter(s.fid);
      },
      title: '点击筛选:' + s.label,
      style: {
        padding: '10px 12px',
        borderRadius: 10,
        background: s.bg,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        cursor: 'pointer',
        transition: 'all .12s',
        outline: filter === s.fid ? '2px solid ' + s.color : '2px solid transparent',
        boxShadow: filter === s.fid ? '0 2px 8px rgba(0,0,0,.12)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        fontWeight: 500
      }
    }, s.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 20,
        fontWeight: 700,
        color: s.color,
        letterSpacing: '-.022em'
      }
    }, s.val));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 14,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDC46 \u70B9\u4E0A\u65B9\u5361\u7247\u7B5B\u9009"), /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(filter === 'all-with-warehouse' ? 'active' : ''),
    onClick: function onClick() {
      return setFilter('all-with-warehouse');
    },
    style: {
      fontSize: 12
    }
  }, "\u5168\u90E8\u542B\u4ED3\u5E93 (".concat(counts.allWithWarehouse, ")"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: prcSearch,
    onChange: function onChange(e) {
      return setPrcSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u641C\u4EA7\u54C1\u540D / SKU / \u5E97\u94FA / \u94FE\u63A5 / \u63D0\u9700\u6C42\u4EBA\u2026",
    style: {
      flex: '1 1 280px',
      minWidth: 200,
      padding: '7px 12px',
      fontSize: 13,
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontFamily: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\u23F1 \u505C\u7559:"), [['all', '全部'], ['7', '超7天未拍'], ['14', '超14天'], ['30', '超30天'], ['60', '超2个月'], ['custom', '自定义']].map(function (_ref74) {
    var _ref75 = _slicedToArray(_ref74, 2),
      v = _ref75[0],
      lb = _ref75[1];
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setAgeFilter(v);
      },
      style: {
        padding: '4px 11px',
        fontSize: 11.5,
        borderRadius: 999,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: 600,
        border: '1px solid ' + (ageFilter === v ? 'var(--accent)' : 'var(--line)'),
        background: ageFilter === v ? 'var(--accent)' : '#fff',
        color: ageFilter === v ? '#fff' : 'var(--ink-3)'
      }
    }, lb);
  }), ageFilter === 'custom' && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: ageCustom.from,
    onChange: function onChange(e) {
      return setAgeCustom(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          from: e.target.value
        });
      });
    },
    style: {
      padding: '4px 6px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontFamily: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "~"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: ageCustom.to,
    onChange: function onChange(e) {
      return setAgeCustom(function (s) {
        return _objectSpread(_objectSpread({}, s), {}, {
          to: e.target.value
        });
      });
    },
    style: {
      padding: '4px 6px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontFamily: 'inherit'
    }
  }))), visible.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '64px 20px',
      color: 'var(--ink-3)',
      fontSize: 14,
      background: 'var(--bg-elevated)',
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 48,
      marginBottom: 12,
      opacity: .4
    }
  }, "\uD83D\uDCED"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      marginBottom: 6,
      color: 'var(--ink-2)'
    }
  }, loading ? '⏳ 加载中…' : filter === 'mine' ? '你还没提过需求' : filter === 'urgent' ? '没有加急的需求' : filter === 'in-progress' ? '没有进行中的工单' : filter === 'done' ? '还没有已完成的需求' : '系统里没有任何拍摄工单'), !loading && filter !== 'done' && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-4)',
      marginBottom: 14
    }
  }, filter === 'urgent' ? '🎉 一切平静' : filter === 'mine' ? '需要拍摄部协助时,点右上"+ 新建"开始' : '点右上"+ 新建"或"📥 批量"开始'), !loading && (filter === 'mine' || filter === 'all-activities') && counts.all === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 8,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: function onClick() {
      return setShowNew(true);
    }
  }, "+ \u65B0\u5EFA\u7B2C\u4E00\u6761"), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: function onClick() {
      return setShowBatch(true);
    }
  }, "\uD83D\uDCE5 \u6279\u91CF\u5F55\u5165"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: 12
    }
  }, visible.map(function (r) {
    return /*#__PURE__*/React.createElement(PhotoRequestCard, {
      key: r.id,
      item: r,
      currentUserId: user.id,
      onOpen: function onOpen() {
        return setDetailItem(r);
      },
      onEdit: function onEdit() {
        return setEditItem(r);
      },
      toast: toast
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: '12px 16px',
      background: 'var(--bg-elevated)',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontSize: 12,
      color: 'var(--ink-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCA \u5F53\u524D\u663E\u793A ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-2)'
    }
  }, visible.length), " / \u5171 ", list.length, " \u6761", hasMore ? '+' : ''), filter !== 'all-activities' && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setFilter('all-activities');
    },
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--accent)',
      cursor: 'pointer',
      fontSize: 12,
      padding: 0,
      fontFamily: 'inherit'
    }
  }, "\u5207\u56DE\u300C\u5168\u90E8\u300D \u2192"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), hasMore ? /*#__PURE__*/React.createElement("button", {
    onClick: loadMore,
    disabled: loadingMore,
    className: "btn-sec",
    style: {
      fontSize: 12,
      padding: '5px 14px'
    }
  }, loadingMore ? '加载中…' : "\u52A0\u8F7D\u66F4\u591A (+".concat(PHOTO_PAGE, ")")) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u2014\u2014 \u5DF2\u5230\u5E95\u90E8 \u2014\u2014")))), showNew && /*#__PURE__*/React.createElement(PhotoRequestNewModal, {
    user: user,
    toast: toast,
    onClose: function onClose() {
      return setShowNew(false);
    },
    onSuccess: function onSuccess() {
      setShowNew(false);
      refresh();
    }
  }), showBatch && /*#__PURE__*/React.createElement(PhotoRequestBatchModal, {
    user: user,
    toast: toast,
    onClose: function onClose() {
      return setShowBatch(false);
    },
    onSuccess: function onSuccess() {
      setShowBatch(false);
      refresh();
    }
  }), detailItem && /*#__PURE__*/React.createElement(PhotoRequestDetailModal, {
    item: detailItem,
    onClose: function onClose() {
      return setDetailItem(null);
    },
    onEdit: function onEdit() {
      setEditItem(detailItem);
      setDetailItem(null);
    }
  }), editItem && /*#__PURE__*/React.createElement(PhotoRequestEditModal, {
    item: editItem,
    user: user,
    toast: toast,
    onClose: function onClose() {
      return setEditItem(null);
    },
    onSuccess: function onSuccess() {
      setEditItem(null);
      refresh();
    }
  }));
};
var PhotoRequestCard = function PhotoRequestCard(_ref76) {
  var _item$applicable_shop, _PHOTO_STATUS_MAP$wh$;
  var item = _ref76.item,
    currentUserId = _ref76.currentUserId,
    onOpen = _ref76.onOpen,
    onEdit = _ref76.onEdit,
    toast = _ref76.toast;
  var st = PHOTO_STATUS_MAP[item.status] || {
    label: item.status,
    color: '#999',
    bg: '#eee'
  };
  var isUrgent = item.priority === 'urgent';
  var ext = item.external_request || {};
  var attachCount = (ext.attachments || []).length;
  var reasonPreview = (ext.reason || '').slice(0, 100);
  var ago = item.created_at_ms ? humanAgoMs(Date.now() - item.created_at_ms) : '';
  var isMine = ext.from_user_id === currentUserId;
  // 🆕 fix53 v3: 来源徽章
  var sourceKey = ext.source || '自发';
  var sourceBadge = SOURCE_BADGE_MAP[sourceKey] || SOURCE_BADGE_MAP['自发'];
  // 🆕 fix53 v3: 状态行展开
  var statusLines = renderStatusLine(item);
  // 🆕 fix59 v4: 仓库判定
  var wh = getWarehouseInfo(item);
  var inWarehouse = !!wh;
  var whReasonMeta = wh ? WAREHOUSE_REASON_META[wh.reason] || WAREHOUSE_REASON_META['其他'] : null;
  var canNotify = wh && shouldNotifyCustomer(wh.reason);
  var copyCustomerScript = function copyCustomerScript(e) {
    e.stopPropagation();
    var script = buildWarehouseCustomerScript(item);
    navigator.clipboard.writeText(script).then(function () {
      return toast && toast('✓ 已复制客户通知话术');
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      background: inWarehouse ? 'var(--bg-soft)' : 'white',
      border: "1px solid ".concat(inWarehouse ? '#fbbf24' : isUrgent ? 'var(--bad)' : 'var(--line)'),
      borderRadius: 14,
      padding: 14,
      cursor: 'pointer',
      boxShadow: 'var(--shadow-sm)',
      transition: 'transform .15s, box-shadow .15s',
      opacity: inWarehouse ? 0.92 : 1
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 8,
      flexWrap: 'wrap'
    }
  }, isUrgent && !inWarehouse && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      padding: '2px 8px',
      background: 'var(--bad)',
      color: 'white',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 600
    }
  }, "\uD83D\uDEA8 \u52A0\u6025"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      padding: '2px 8px',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 600,
      background: sourceBadge.bg,
      color: sourceBadge.color
    }
  }, sourceBadge.icon, " ", sourceBadge.label, ext.from_name ? ' · ' + ext.from_name : ''), isMine && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      padding: '2px 6px',
      background: 'var(--accent-soft)',
      color: 'var(--accent)',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 600
    }
  }, "\u6211\u63D0\u7684"), inWarehouse && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      padding: '2px 8px',
      background: '#fef3c7',
      color: '#92400e',
      border: '1px solid #fbbf24',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 700
    }
  }, "\uD83D\uDCE6 \u4ED3\u5E93 ", daysAgoText(wh.at_ms)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-4)'
    }
  }, ago)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 10
    }
  }, item.product_image && /*#__PURE__*/React.createElement("img", {
    src: item.product_image,
    style: {
      width: 80,
      height: 80,
      objectFit: 'contain',
      borderRadius: 8,
      flexShrink: 0,
      border: '1px solid var(--line)',
      background: 'var(--bg-elevated)',
      padding: 2,
      filter: inWarehouse ? 'grayscale(.4)' : 'none'
    },
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--ink)',
      marginBottom: 2,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, item.product_name || '未命名产品'), item.sku && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-4)',
      fontFamily: 'SF Mono,monospace',
      marginBottom: 4
    }
  }, item.sku), ((_item$applicable_shop = item.applicable_shops) === null || _item$applicable_shop === void 0 ? void 0 : _item$applicable_shop.length) > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      flexWrap: 'wrap',
      marginBottom: 4
    }
  }, item.applicable_shops.slice(0, 4).map(function (s, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        fontSize: 10,
        padding: '1px 6px',
        background: 'var(--bg-elevated)',
        color: 'var(--ink-3)',
        borderRadius: 'var(--radius-pill)'
      }
    }, "\uD83C\uDFEA ", s);
  }), item.applicable_shops.length > 4 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)'
    }
  }, "+", item.applicable_shops.length - 4)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      lineHeight: 1.45,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, reasonPreview || '(无描述)'))), inWarehouse ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fffbeb',
      border: '1px solid #fde68a',
      borderRadius: 8,
      padding: '8px 10px',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#92400e',
      fontWeight: 600,
      marginBottom: 2
    }
  }, whReasonMeta === null || whReasonMeta === void 0 ? void 0 : whReasonMeta.icon, " \u5165\u5E93 ", daysAgoText(wh.at_ms), " \xB7 ", wh.by_name || '拍摄部', " \xB7 ", wh.reason), wh.reason_detail && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#78350f',
      lineHeight: 1.5
    }
  }, "\uD83D\uDCAC ", wh.reason_detail), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: '#a16207',
      marginTop: 3
    }
  }, "\u23F8\uFE0F \u5165\u5E93\u524D\u72B6\u6001:", ((_PHOTO_STATUS_MAP$wh$ = PHOTO_STATUS_MAP[wh.prev_status]) === null || _PHOTO_STATUS_MAP$wh$ === void 0 ? void 0 : _PHOTO_STATUS_MAP$wh$.label) || wh.prev_status || 'draft', " \xB7 \u5524\u9192\u540E\u6062\u590D")) :
  /*#__PURE__*/
  /* 🆕 fix53 v3: 状态行展开 */
  React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line-soft)',
      paddingTop: 8,
      marginTop: 4
    }
  }, statusLines.map(function (line, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        fontSize: 11,
        color: i === 0 ? 'var(--ink-2)' : 'var(--ink-3)',
        lineHeight: 1.5,
        marginBottom: 2
      }
    }, line);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 10,
      fontSize: 11,
      color: 'var(--ink-4)',
      flexWrap: 'wrap'
    }
  }, attachCount > 0 && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCE ", attachCount, " \u56FE"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), inWarehouse && canNotify && /*#__PURE__*/React.createElement("button", {
    onClick: copyCustomerScript,
    title: "\u590D\u5236\u901A\u77E5\u5BA2\u6237\u7684\u8BDD\u672F",
    style: {
      background: '#fef2f2',
      border: '1px solid #fecaca',
      color: '#b91c1c',
      padding: '3px 10px',
      fontSize: 11,
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 500
    }
  }, "\uD83D\uDCAC \u901A\u77E5\u5BA2\u6237"), onEdit && (inWarehouse ? /*#__PURE__*/React.createElement("button", {
    disabled: true,
    title: "\u5728\u4ED3\u5E93\u4E2D\u6682\u505C \xB7 \u7B49\u62CD\u6444\u90E8\u5524\u9192\u540E\u624D\u80FD\u6539",
    style: {
      background: 'var(--bg-elevated)',
      border: '1px solid var(--line)',
      color: 'var(--ink-4)',
      padding: '3px 10px',
      fontSize: 11,
      borderRadius: 'var(--radius-pill)',
      cursor: 'not-allowed',
      fontFamily: 'inherit',
      fontWeight: 500
    }
  }, "\uD83D\uDD12 \u4ED3\u5E93\u4E2D") : /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      onEdit();
    },
    title: "\u534F\u4F5C\u7F16\u8F91\u4EA7\u54C1\u57FA\u7840\u5B57\u6BB5",
    style: {
      background: 'var(--bg-elevated)',
      border: '1px solid var(--line)',
      color: 'var(--ink-2)',
      padding: '3px 10px',
      fontSize: 11,
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 500
    }
  }, "\u270F\uFE0F \u7F16\u8F91"))));
};
var humanAgoMs = function humanAgoMs(ms) {
  if (ms < 60000) return '刚刚';
  if (ms < 3600000) return Math.floor(ms / 60000) + ' 分钟前';
  if (ms < 86400000) return Math.floor(ms / 3600000) + ' 小时前';
  if (ms < 7 * 86400000) return Math.floor(ms / 86400000) + ' 天前';
  return Math.floor(ms / (7 * 86400000)) + ' 周前';
};
var PhotoRequestNewModal = function PhotoRequestNewModal(_ref77) {
  var user = _ref77.user,
    toast = _ref77.toast,
    onClose = _ref77.onClose,
    onSuccess = _ref77.onSuccess,
    _ref77$prefill = _ref77.prefill,
    prefill = _ref77$prefill === void 0 ? {} : _ref77$prefill;
  var _useState245 = useState(prefill.productName || ''),
    _useState246 = _slicedToArray(_useState245, 2),
    productName = _useState246[0],
    setProductName = _useState246[1];
  var _useState247 = useState(prefill.sku || ''),
    _useState248 = _slicedToArray(_useState247, 2),
    sku = _useState248[0],
    setSku = _useState248[1];
  var _useState249 = useState(prefill.shops || []),
    _useState250 = _slicedToArray(_useState249, 2),
    shops = _useState250[0],
    setShops = _useState250[1];
  var _useState251 = useState(prefill.reason || ''),
    _useState252 = _slicedToArray(_useState251, 2),
    reason = _useState252[0],
    setReason = _useState252[1];
  var _useState253 = useState('normal'),
    _useState254 = _slicedToArray(_useState253, 2),
    urgency = _useState254[0],
    setUrgency = _useState254[1];
  var _useState255 = useState([]),
    _useState256 = _slicedToArray(_useState255, 2),
    attachments = _useState256[0],
    setAttachments = _useState256[1];
  var _useState257 = useState(false),
    _useState258 = _slicedToArray(_useState257, 2),
    uploading = _useState258[0],
    setUploading = _useState258[1];
  var _useState259 = useState(false),
    _useState260 = _slicedToArray(_useState259, 2),
    submitting = _useState260[0],
    setSubmitting = _useState260[1];
  var _useState261 = useState(false),
    _useState262 = _slicedToArray(_useState261, 2),
    dragOver = _useState262[0],
    setDragOver = _useState262[1]; // 🆕 fix83: 拖拽高亮
  var externalRefId = prefill.externalRefId || null;
  var toggleShop = function toggleShop(label) {
    setShops(function (prev) {
      return prev.includes(label) ? prev.filter(function (s) {
        return s !== label;
      }) : [].concat(_toConsumableArray(prev), [label]);
    });
  };
  var uploadFiles = /*#__PURE__*/function () {
    var _ref78 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee37(files) {
      var imgs, newAttachments, _iterator6, _step6, f, a, _t30, _t31;
      return _regenerator().w(function (_context40) {
        while (1) switch (_context40.p = _context40.n) {
          case 0:
            imgs = Array.from(files || []).filter(function (f) {
              return f && (f.type || '').startsWith('image/');
            });
            if (!(imgs.length === 0)) {
              _context40.n = 1;
              break;
            }
            return _context40.a(2);
          case 1:
            setUploading(true);
            newAttachments = [];
            _iterator6 = _createForOfIteratorHelper(imgs);
            _context40.p = 2;
            _iterator6.s();
          case 3:
            if ((_step6 = _iterator6.n()).done) {
              _context40.n = 8;
              break;
            }
            f = _step6.value;
            _context40.p = 4;
            _context40.n = 5;
            return window.uploadAttachmentToWtkpi(f);
          case 5:
            a = _context40.v;
            newAttachments.push(a);
            _context40.n = 7;
            break;
          case 6:
            _context40.p = 6;
            _t30 = _context40.v;
            toast('上传 ' + (f.name || '图片') + ' 失败:' + _t30.message);
          case 7:
            _context40.n = 3;
            break;
          case 8:
            _context40.n = 10;
            break;
          case 9:
            _context40.p = 9;
            _t31 = _context40.v;
            _iterator6.e(_t31);
          case 10:
            _context40.p = 10;
            _iterator6.f();
            return _context40.f(10);
          case 11:
            setAttachments(function (prev) {
              return [].concat(_toConsumableArray(prev), newAttachments);
            });
            setUploading(false);
          case 12:
            return _context40.a(2);
        }
      }, _callee37, null, [[4, 6], [2, 9, 10, 11]]);
    }));
    return function uploadFiles(_x21) {
      return _ref78.apply(this, arguments);
    };
  }();
  var handleFiles = /*#__PURE__*/function () {
    var _ref79 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee38(e) {
      return _regenerator().w(function (_context41) {
        while (1) switch (_context41.n) {
          case 0:
            _context41.n = 1;
            return uploadFiles(e.target.files);
          case 1:
            e.target.value = '';
          case 2:
            return _context41.a(2);
        }
      }, _callee38);
    }));
    return function handleFiles(_x22) {
      return _ref79.apply(this, arguments);
    };
  }();

  // 🆕 fix83: Ctrl+V 粘贴图片(弹窗打开期间生效)
  useEffect(function () {
    var onPaste = function onPaste(e) {
      var items = e.clipboardData && e.clipboardData.items || [];
      var files = [];
      var _iterator7 = _createForOfIteratorHelper(items),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var it = _step7.value;
          if (it.kind === 'file' && (it.type || '').startsWith('image/')) {
            var f = it.getAsFile();
            if (f) files.push(f);
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      if (files.length) {
        e.preventDefault();
        uploadFiles(files);
      }
    };
    window.addEventListener('paste', onPaste);
    return function () {
      return window.removeEventListener('paste', onPaste);
    };
  }, []);
  var handleDrop = function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    uploadFiles(e.dataTransfer && e.dataTransfer.files);
  };
  var removeAttachment = function removeAttachment(idx) {
    setAttachments(function (prev) {
      return prev.filter(function (_, i) {
        return i !== idx;
      });
    });
  };
  var submit = /*#__PURE__*/function () {
    var _ref80 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee39() {
      var _t32;
      return _regenerator().w(function (_context42) {
        while (1) switch (_context42.p = _context42.n) {
          case 0:
            if (productName.trim()) {
              _context42.n = 1;
              break;
            }
            toast('请填产品名');
            return _context42.a(2);
          case 1:
            if (reason.trim()) {
              _context42.n = 2;
              break;
            }
            toast('请填详细原因 — 告诉拍摄部你要他们做什么');
            return _context42.a(2);
          case 2:
            if (!(shops.length === 0)) {
              _context42.n = 4;
              break;
            }
            _context42.n = 3;
            return wsConfirm('没选店铺,拍摄部可能不知道用在哪。继续提交?');
          case 3:
            if (_context42.v) {
              _context42.n = 4;
              break;
            }
            return _context42.a(2);
          case 4:
            setSubmitting(true);
            _context42.p = 5;
            _context42.n = 6;
            return window.submitPhotoRequest({
              productName: productName.trim(),
              sku: sku.trim(),
              productImage: prefill.productImage || null,
              applicableShops: shops,
              currentUser: user,
              reason: reason.trim(),
              urgency: urgency,
              attachments: attachments,
              externalRefId: externalRefId
            });
          case 6:
            toast('✅ 已提交 · 已进入拍摄部「待拍摄」队列');
            onSuccess === null || onSuccess === void 0 || onSuccess();
            _context42.n = 8;
            break;
          case 7:
            _context42.p = 7;
            _t32 = _context42.v;
            console.error('[PhotoReq] 提交失败', _t32);
            alert('提交失败:\n\n' + (_t32.message || JSON.stringify(_t32)) + '\n\n常见原因:\n• 配置的 URL/Key 错了\n• Supabase RLS 拒绝写入 (联系拍摄部主管配 policy)\n• 网络问题');
          case 8:
            setSubmitting(false);
          case 9:
            return _context42.a(2);
        }
      }, _callee39, null, [[5, 7]]);
    }));
    return function submit() {
      return _ref80.apply(this, arguments);
    };
  }();
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      if (e.target === e.currentTarget) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.55)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 18,
      maxWidth: 680,
      width: '100%',
      maxHeight: '92vh',
      overflow: 'auto',
      padding: '28px 32px',
      boxShadow: '0 20px 60px rgba(0,0,0,.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-.022em'
    }
  }, "\uD83D\uDCE8 \u65B0\u5EFA\u62CD\u6444\u9700\u6C42"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      fontSize: 22,
      cursor: 'pointer',
      color: 'var(--ink-3)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, "\u4EA7\u54C1\u540D\u79F0 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bad)'
    }
  }, "*")), /*#__PURE__*/React.createElement("input", {
    value: productName,
    onChange: function onChange(e) {
      return setProductName(e.target.value);
    },
    placeholder: "\u4F8B:Milk Table Lamp - \u9910\u5385\u706F\u5177",
    style: {
      width: '100%',
      padding: '10px 12px',
      border: '1px solid var(--line)',
      borderRadius: 10,
      fontSize: 14
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, "SKU ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400
    }
  }, "(\u9009\u586B,\u4F46\u5F3A\u70C8\u5EFA\u8BAE)")), /*#__PURE__*/React.createElement("input", {
    value: sku,
    onChange: function onChange(e) {
      return setSku(e.target.value);
    },
    placeholder: "\u4F8B:DCT-24118-5",
    style: {
      width: '100%',
      padding: '10px 12px',
      border: '1px solid var(--line)',
      borderRadius: 10,
      fontSize: 14,
      fontFamily: 'SF Mono,monospace'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, "\u9002\u7528\u5E97\u94FA(\u591A\u9009)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, (typeof SHOPS_PRESET !== 'undefined' ? SHOPS_PRESET : []).map(function (s) {
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      type: "button",
      onClick: function onClick() {
        return toggleShop(s.label);
      },
      style: {
        padding: '5px 12px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        border: '1px solid ' + (shops.includes(s.label) ? 'var(--accent)' : 'var(--line)'),
        background: shops.includes(s.label) ? 'var(--accent)' : 'white',
        color: shops.includes(s.label) ? 'white' : 'var(--ink-2)',
        fontSize: 12,
        fontWeight: shops.includes(s.label) ? 600 : 400,
        fontFamily: 'inherit',
        transition: 'all .15s'
      }
    }, s.label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, "\u8BE6\u7EC6\u539F\u56E0 / \u62CD\u6444\u8981\u6C42 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bad)'
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", {
    value: reason,
    onChange: function onChange(e) {
      return setReason(e.target.value);
    },
    placeholder: "\u4F8B:\n\u5BA2\u6237\u53CD\u9988\u62FF\u5230\u7684\u5438\u9876\u706F\u5B9E\u9645\u662F\u51B7\u767D\u5149,\u6211\u4EEC\u5356\u7684\u63CF\u8FF0\u662F\u6696\u767D\u5149\n\u8981\u6C42\u62CD 3 \u5F20\u5B9E\u7269\u56FE:\u5F00\u706F / \u5173\u706F / \u706F\u6CE1\u7279\u5199,\u8BA9\u5BA2\u6237\u5BF9\u6BD4\n\u7D27\u6025 - \u5BA2\u6237\u5728 PayPal \u5F00\u4E86 dispute,2 \u5929\u5185\u8981\u7ED9\u7B54\u590D",
    rows: 5,
    style: {
      width: '100%',
      padding: '10px 12px',
      border: '1px solid var(--line)',
      borderRadius: 10,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, "\u7D27\u6025\u7A0B\u5EA6"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setUrgency('normal');
    },
    style: {
      flex: 1,
      padding: '10px',
      borderRadius: 10,
      border: '1px solid ' + (urgency === 'normal' ? 'var(--accent)' : 'var(--line)'),
      background: urgency === 'normal' ? 'var(--accent-soft)' : 'white',
      color: urgency === 'normal' ? 'var(--accent)' : 'var(--ink-2)',
      fontSize: 13,
      fontWeight: urgency === 'normal' ? 600 : 400,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "\xB7 \u666E\u901A"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setUrgency('urgent');
    },
    style: {
      flex: 1,
      padding: '10px',
      borderRadius: 10,
      border: '1px solid ' + (urgency === 'urgent' ? 'var(--bad)' : 'var(--line)'),
      background: urgency === 'urgent' ? 'var(--bad-soft)' : 'white',
      color: urgency === 'urgent' ? 'var(--bad)' : 'var(--ink-2)',
      fontSize: 13,
      fontWeight: urgency === 'urgent' ? 600 : 400,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDEA8 \u52A0\u6025")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-4)',
      marginTop: 5
    }
  }, "\u52A0\u6025\u7684\u5DE5\u5355\u4F1A\u5728\u62CD\u6444\u90E8\u9996\u9875\u7F6E\u9876,\u663E\u793A \uD83D\uDEA8 \u7EA2\u6807 \u2014 \u8BF7\u614E\u7528")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, "\u9644\u4EF6(\u5BA2\u6237\u804A\u5929\u622A\u56FE / \u5BF9\u6BD4\u56FE\u7B49)"), attachments.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 8
    }
  }, attachments.map(function (a, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'relative',
        width: 70,
        height: 70
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: a.url,
      alt: a.name,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        borderRadius: 8,
        border: '1px solid var(--line)',
        background: 'var(--bg-elevated)'
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeAttachment(i);
      },
      style: {
        position: 'absolute',
        top: -6,
        right: -6,
        width: 20,
        height: 20,
        background: 'var(--bad)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: 11,
        lineHeight: 1,
        fontFamily: 'inherit'
      }
    }, "\u2715"));
  })), /*#__PURE__*/React.createElement("label", {
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      setDragOver(true);
    },
    onDragLeave: function onDragLeave(e) {
      e.preventDefault();
      setDragOver(false);
    },
    onDrop: handleDrop,
    style: {
      display: 'block',
      cursor: 'pointer',
      textAlign: 'center',
      padding: '16px 12px',
      borderRadius: 10,
      border: '1.5px dashed ' + (dragOver ? 'var(--accent)' : 'var(--line)'),
      background: dragOver ? 'var(--accent-soft)' : 'var(--bg-elevated)',
      transition: 'all .15s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink-2)'
    }
  }, "\uD83D\uDCCE \u70B9\u51FB\u4E0A\u4F20 \xB7 \u62D6\u62FD\u5230\u6B64 \xB7 Ctrl+V \u7C98\u8D34"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-4)',
      marginTop: 3
    }
  }, "\u652F\u6301\u591A\u5F20\u56FE\u7247 \xB7 \u81EA\u52A8\u538B\u7F29 \u22641600px"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    multiple: true,
    onChange: handleFiles,
    disabled: uploading,
    style: {
      display: 'none'
    }
  })), uploading && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--accent)',
      marginTop: 5
    }
  }, "\u23F3 \u4E0A\u4F20\u4E2D\u2026(\u5DF2\u81EA\u52A8\u538B\u7F29 \u22641600px)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: onClose
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: submit,
    disabled: submitting || uploading
  }, submitting ? '⏳ 提交中…' : '✓ 提交给拍摄部')))), document.body);
};
var PhotoRequestDetailModal = function PhotoRequestDetailModal(_ref81) {
  var _item$applicable_shop2, _PHOTO_STATUS_MAP$wh$2, _ext$attachments;
  var item = _ref81.item,
    onClose = _ref81.onClose,
    onEdit = _ref81.onEdit;
  var ext = item.external_request || {};
  var st = PHOTO_STATUS_MAP[item.status] || {
    label: item.status,
    color: '#999',
    bg: '#eee'
  };
  var isUrgent = item.priority === 'urgent';
  var statusLines = renderStatusLine(item);
  var sourceKey = ext.source || '自发';
  var sourceBadge = SOURCE_BADGE_MAP[sourceKey] || SOURCE_BADGE_MAP['自发'];
  // 🆕 fix59 v4: 仓库信息
  var wh = getWarehouseInfo(item);
  var inWarehouse = !!wh;
  var whMeta = wh ? WAREHOUSE_REASON_META[wh.reason] || WAREHOUSE_REASON_META['其他'] : null;
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      if (e.target === e.currentTarget) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.55)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 18,
      maxWidth: 680,
      width: '100%',
      maxHeight: '92vh',
      overflow: 'auto',
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, isUrgent && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      padding: '3px 10px',
      background: 'var(--bad)',
      color: 'white',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 600
    }
  }, "\uD83D\uDEA8 \u52A0\u6025"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 600,
      background: sourceBadge.bg,
      color: sourceBadge.color
    }
  }, sourceBadge.icon, " ", sourceBadge.label, ext.from_name ? ' · ' + ext.from_name : '')), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      fontSize: 22,
      cursor: 'pointer',
      color: 'var(--ink-3)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 20,
      fontWeight: 600,
      marginBottom: 4,
      letterSpacing: '-.022em'
    }
  }, item.product_name || '未命名产品'), item.sku && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      fontFamily: 'SF Mono,monospace',
      marginBottom: 14
    }
  }, item.sku), ((_item$applicable_shop2 = item.applicable_shops) === null || _item$applicable_shop2 === void 0 ? void 0 : _item$applicable_shop2.length) > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap',
      marginBottom: 14
    }
  }, item.applicable_shops.map(function (s, i) {
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        fontSize: 11,
        padding: '2px 8px',
        background: 'var(--bg-elevated)',
        color: 'var(--ink-2)',
        borderRadius: 'var(--radius-pill)'
      }
    }, "\uD83C\uDFEA ", s);
  })), inWarehouse && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fffbeb',
      border: '1px solid #fbbf24',
      padding: 14,
      borderRadius: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#92400e',
      marginBottom: 6
    }
  }, whMeta === null || whMeta === void 0 ? void 0 : whMeta.icon, " \u5728\u62CD\u6444\u4ED3\u5E93 \xB7 \u5DF2\u5165\u5E93 ", getWarehouseAge(item), " \u5929"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#78350f',
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("div", null, "\uD83D\uDCE6 \u5165\u5E93\u539F\u56E0:", wh.reason), wh.reason_detail && /*#__PURE__*/React.createElement("div", null, "\uD83D\uDCAC \u8BE6\u7EC6:", wh.reason_detail), /*#__PURE__*/React.createElement("div", null, "\uD83D\uDC64 \u64CD\u4F5C\u4EBA:", wh.by_name || '拍摄部'), /*#__PURE__*/React.createElement("div", null, "\uD83D\uDD50 \u5165\u5E93\u65F6\u95F4:", new Date(wh.at_ms).toLocaleString('zh-CN')), /*#__PURE__*/React.createElement("div", null, "\u23F8\uFE0F \u5165\u5E93\u524D\u72B6\u6001:", ((_PHOTO_STATUS_MAP$wh$2 = PHOTO_STATUS_MAP[wh.prev_status]) === null || _PHOTO_STATUS_MAP$wh$2 === void 0 ? void 0 : _PHOTO_STATUS_MAP$wh$2.label) || wh.prev_status || 'draft', "(\u5524\u9192\u540E\u6062\u590D)")), shouldNotifyCustomer(wh.reason) && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      navigator.clipboard.writeText(buildWarehouseCustomerScript(item));
    },
    style: {
      marginTop: 10,
      padding: '6px 14px',
      fontSize: 12,
      background: '#fef2f2',
      color: '#b91c1c',
      border: '1px solid #fecaca',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 500
    }
  }, "\uD83D\uDCAC \u590D\u5236\u8BDD\u672F \u2192 \u901A\u77E5\u5BA2\u6237"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#a16207',
      marginTop: 10,
      paddingTop: 8,
      borderTop: '1px dashed #fde68a'
    }
  }, "\u2139\uFE0F \u5728\u4ED3\u5E93\u671F\u95F4\u8FD9\u6761\u8BB0\u5F55\u6682\u505C \xB7 \u53EA\u6709\u62CD\u6444\u90E8\u80FD\u5524\u9192\u51FA\u5E93 \xB7 \u5BA2\u670D/\u8DDF\u5355\u6682\u4E0D\u80FD\u7F16\u8F91")), !inWarehouse && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--accent-soft)',
      padding: 12,
      borderRadius: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--accent)',
      marginBottom: 6,
      fontWeight: 600
    }
  }, "\u5F53\u524D\u8FDB\u5EA6"), statusLines.map(function (line, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        fontSize: 13,
        color: i === 0 ? 'var(--ink)' : 'var(--ink-2)',
        lineHeight: 1.6,
        marginBottom: 2,
        fontWeight: i === 0 ? 600 : 400
      }
    }, line);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-elevated)',
      padding: 14,
      borderRadius: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginBottom: 6,
      fontWeight: 600
    }
  }, "\u539F\u56E0 / \u62CD\u6444\u8981\u6C42"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.65,
      whiteSpace: 'pre-wrap',
      color: 'var(--ink)'
    }
  }, ext.reason || '(无)')), item.product_notes && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-elevated)',
      padding: 14,
      borderRadius: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginBottom: 6,
      fontWeight: 600
    }
  }, "\u4EA7\u54C1\u5907\u6CE8"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.65,
      whiteSpace: 'pre-wrap',
      color: 'var(--ink)'
    }
  }, item.product_notes)), ((_ext$attachments = ext.attachments) === null || _ext$attachments === void 0 ? void 0 : _ext$attachments.length) > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-2)',
      fontWeight: 600,
      marginBottom: 8
    }
  }, "\uD83D\uDCCE \u9644\u4EF6 (", ext.attachments.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
      gap: 8
    }
  }, ext.attachments.map(function (a, i) {
    return /*#__PURE__*/React.createElement("a", {
      key: i,
      href: a.url,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: a.url,
      alt: a.name,
      className: "img-thumb",
      style: {
        width: '100%',
        aspectRatio: '3/4',
        objectFit: 'contain',
        borderRadius: 8,
        border: '1px solid var(--line)',
        background: 'var(--bg-elevated)'
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      borderTop: '1px solid var(--line)',
      paddingTop: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDC64 \u63D0\u4EA4\u4EBA:", ext.from_name || item.created_by_name), item.created_at_ms && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD50 ", new Date(item.created_at_ms).toLocaleString('zh-CN'))), onEdit && /*#__PURE__*/React.createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-modal-cancel",
    onClick: onClose
  }, "\u5173\u95ED"), inWarehouse ? /*#__PURE__*/React.createElement("button", {
    className: "btn-modal-primary",
    disabled: true,
    style: {
      opacity: .4,
      cursor: 'not-allowed'
    },
    title: "\u5728\u4ED3\u5E93\u4E2D\u6682\u505C \xB7 \u7B49\u62CD\u6444\u90E8\u5524\u9192\u540E\u624D\u80FD\u6539"
  }, "\uD83D\uDD12 \u4ED3\u5E93\u4E2D\u6682\u505C\u7F16\u8F91") : /*#__PURE__*/React.createElement("button", {
    className: "btn-modal-primary",
    onClick: onEdit
  }, "\u270F\uFE0F \u534F\u4F5C\u7F16\u8F91")))), document.body);
};
if (typeof window !== 'undefined') {
  window.PhotoRequestNewModal = PhotoRequestNewModal;
}

// ════════════════════════════════════════════════════════════════════
// 🆕 fix53 v3: 协作编辑 Modal — 任何人可改基础字段(merge,不覆盖)
// 拍摄部填的字段(status / photographer / review 等)灰底只读
// ════════════════════════════════════════════════════════════════════
var PhotoRequestEditModal = function PhotoRequestEditModal(_ref82) {
  var item = _ref82.item,
    user = _ref82.user,
    toast = _ref82.toast,
    onClose = _ref82.onClose,
    onSuccess = _ref82.onSuccess;
  var ext = item.external_request || {};
  var _useState263 = useState(item.product_name || ''),
    _useState264 = _slicedToArray(_useState263, 2),
    productName = _useState264[0],
    setProductName = _useState264[1];
  var _useState265 = useState(item.sku || ''),
    _useState266 = _slicedToArray(_useState265, 2),
    sku = _useState266[0],
    setSku = _useState266[1];
  var _useState267 = useState(item.applicable_shops || []),
    _useState268 = _slicedToArray(_useState267, 2),
    shops = _useState268[0],
    setShops = _useState268[1];
  var _useState269 = useState(item.product_type || '常规产品'),
    _useState270 = _slicedToArray(_useState269, 2),
    productType = _useState270[0],
    setProductType = _useState270[1];
  var _useState271 = useState(item.product_notes || ''),
    _useState272 = _slicedToArray(_useState271, 2),
    productNotes = _useState272[0],
    setProductNotes = _useState272[1];
  var _useState273 = useState(''),
    _useState274 = _slicedToArray(_useState273, 2),
    reasonAppend = _useState274[0],
    setReasonAppend = _useState274[1];
  var _useState275 = useState([]),
    _useState276 = _slicedToArray(_useState275, 2),
    newAttachments = _useState276[0],
    setNewAttachments = _useState276[1];
  var _useState277 = useState(false),
    _useState278 = _slicedToArray(_useState277, 2),
    uploading = _useState278[0],
    setUploading = _useState278[1];
  var _useState279 = useState(false),
    _useState280 = _slicedToArray(_useState279, 2),
    saving = _useState280[0],
    setSaving = _useState280[1];
  var toggleShop = function toggleShop(label) {
    setShops(function (prev) {
      return prev.includes(label) ? prev.filter(function (s) {
        return s !== label;
      }) : [].concat(_toConsumableArray(prev), [label]);
    });
  };
  var handleFiles = /*#__PURE__*/function () {
    var _ref83 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee40(e) {
      var files, news, _i3, _files, f, a, _t33;
      return _regenerator().w(function (_context43) {
        while (1) switch (_context43.p = _context43.n) {
          case 0:
            files = Array.from(e.target.files || []);
            if (!(files.length === 0)) {
              _context43.n = 1;
              break;
            }
            return _context43.a(2);
          case 1:
            setUploading(true);
            news = [];
            _i3 = 0, _files = files;
          case 2:
            if (!(_i3 < _files.length)) {
              _context43.n = 7;
              break;
            }
            f = _files[_i3];
            _context43.p = 3;
            _context43.n = 4;
            return window.uploadAttachmentToWtkpi(f);
          case 4:
            a = _context43.v;
            news.push(a);
            _context43.n = 6;
            break;
          case 5:
            _context43.p = 5;
            _t33 = _context43.v;
            toast('上传 ' + f.name + ' 失败:' + _t33.message);
          case 6:
            _i3++;
            _context43.n = 2;
            break;
          case 7:
            setNewAttachments(function (prev) {
              return [].concat(_toConsumableArray(prev), news);
            });
            setUploading(false);
            e.target.value = '';
          case 8:
            return _context43.a(2);
        }
      }, _callee40, null, [[3, 5]]);
    }));
    return function handleFiles(_x23) {
      return _ref83.apply(this, arguments);
    };
  }();
  var save = /*#__PURE__*/function () {
    var _ref84 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee41() {
      var _t34;
      return _regenerator().w(function (_context44) {
        while (1) switch (_context44.p = _context44.n) {
          case 0:
            if (productName.trim()) {
              _context44.n = 1;
              break;
            }
            toast('产品名不能空');
            return _context44.a(2);
          case 1:
            setSaving(true);
            _context44.p = 2;
            _context44.n = 3;
            return window.updatePhotoRequestBasics(item.id, {
              product_name: productName.trim(),
              sku: sku.trim() || null,
              applicable_shops: shops,
              product_type: productType,
              product_notes: productNotes.trim() || null
            });
          case 3:
            if (!(reasonAppend.trim() || newAttachments.length > 0)) {
              _context44.n = 4;
              break;
            }
            _context44.n = 4;
            return window.appendToPhotoRequest(item.id, {
              reason_append: reasonAppend.trim(),
              attachments: newAttachments,
              editor_name: user.name + (user.alias ? ' ' + user.alias : '')
            });
          case 4:
            toast('✓ 已保存');
            onSuccess === null || onSuccess === void 0 || onSuccess();
            _context44.n = 6;
            break;
          case 5:
            _context44.p = 5;
            _t34 = _context44.v;
            console.error('[PhotoReq Edit] 保存失败', _t34);
            alert('保存失败:\n\n' + (_t34.message || JSON.stringify(_t34)));
          case 6:
            setSaving(false);
          case 7:
            return _context44.a(2);
        }
      }, _callee41, null, [[2, 5]]);
    }));
    return function save() {
      return _ref84.apply(this, arguments);
    };
  }();
  var statusLines = renderStatusLine(item);
  var isMine = ext.from_user_id === user.id;
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      if (e.target === e.currentTarget) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.55)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 18,
      maxWidth: 680,
      width: '100%',
      maxHeight: '92vh',
      overflow: 'auto',
      padding: '24px 28px',
      boxShadow: '0 20px 60px rgba(0,0,0,.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: '-.022em'
    }
  }, "\u270F\uFE0F \u534F\u4F5C\u7F16\u8F91", !isMine && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 400,
      color: 'var(--ink-3)',
      marginLeft: 8
    }
  }, "(\u539F\u4F5C\u8005:", ext.from_name, ")")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      fontSize: 22,
      cursor: 'pointer',
      color: 'var(--ink-3)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginBottom: 16
    }
  }, "\u57FA\u7840\u5B57\u6BB5(\u4EA7\u54C1\u540D / SKU / \u5E97\u94FA / \u5907\u6CE8 / \u539F\u56E0)\u53EF\u6539 \xB7 \u62CD\u6444\u90E8\u586B\u7684\u5B57\u6BB5\u53EA\u8BFB"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fffbeb',
      border: '1px solid #fbbf24',
      borderRadius: 10,
      padding: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#92400e',
      marginBottom: 10,
      letterSpacing: '.5px'
    }
  }, "\u270F\uFE0F \u4F60\u53EF\u4EE5\u7F16\u8F91\u8FD9\u4E9B"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 4
    }
  }, "\uD83D\uDCDD \u4EA7\u54C1\u540D ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--bad)'
    }
  }, "*")), /*#__PURE__*/React.createElement("input", {
    value: productName,
    onChange: function onChange(e) {
      return setProductName(e.target.value);
    },
    style: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 13,
      background: 'white'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 4
    }
  }, "\uD83C\uDFF7 SKU"), /*#__PURE__*/React.createElement("input", {
    value: sku,
    onChange: function onChange(e) {
      return setSku(e.target.value);
    },
    placeholder: "DCT-24118-5",
    style: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 13,
      fontFamily: 'SF Mono,monospace',
      background: 'white'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 4
    }
  }, "\uD83C\uDFEA \u9002\u7528\u5E97\u94FA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, (typeof SHOPS_PRESET !== 'undefined' ? SHOPS_PRESET : []).map(function (s) {
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      type: "button",
      onClick: function onClick() {
        return toggleShop(s.label);
      },
      style: {
        padding: '4px 10px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        border: '1px solid ' + (shops.includes(s.label) ? 'var(--accent)' : 'var(--line)'),
        background: shops.includes(s.label) ? 'var(--accent)' : 'white',
        color: shops.includes(s.label) ? 'white' : 'var(--ink-2)',
        fontSize: 11,
        fontWeight: shops.includes(s.label) ? 600 : 400,
        fontFamily: 'inherit'
      }
    }, s.label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 4
    }
  }, "\uD83D\uDCCB \u4EA7\u54C1\u7C7B\u578B"), /*#__PURE__*/React.createElement("select", {
    value: productType,
    onChange: function onChange(e) {
      return setProductType(e.target.value);
    },
    style: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 13,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "\u5E38\u89C4\u4EA7\u54C1"
  }, "\u5E38\u89C4\u4EA7\u54C1"), /*#__PURE__*/React.createElement("option", {
    value: "\u6837\u54C1"
  }, "\u6837\u54C1"), /*#__PURE__*/React.createElement("option", {
    value: "\u65B0\u6B3E"
  }, "\u65B0\u6B3E"), /*#__PURE__*/React.createElement("option", {
    value: "\u73B0\u8D27\u6B3E"
  }, "\u73B0\u8D27\u6B3E"), /*#__PURE__*/React.createElement("option", {
    value: "\u8BD5\u62CD"
  }, "\u8BD5\u62CD"), /*#__PURE__*/React.createElement("option", {
    value: "\u5BA2\u670D\u9700\u6C42"
  }, "\u5BA2\u670D\u9700\u6C42"), /*#__PURE__*/React.createElement("option", {
    value: "\u8DDF\u5355\u9700\u6C42"
  }, "\u8DDF\u5355\u9700\u6C42"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 4
    }
  }, "\uD83D\uDCDD \u4EA7\u54C1\u5907\u6CE8(\u6750\u8D28 / \u5C3A\u5BF8 / \u7279\u6B8A\u63D0\u9192)"), /*#__PURE__*/React.createElement("textarea", {
    value: productNotes,
    onChange: function onChange(e) {
      return setProductNotes(e.target.value);
    },
    rows: 3,
    placeholder: "\u4F8B:\u9EC4\u94DC\u8272 \xB7 \u9AD8\u5EA6 1.5m \xB7 \u5BA2\u6237\u8981\u6C42\u4E0D\u8981\u62CD\u7279\u5199",
    style: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical',
      background: 'white'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 4
    }
  }, "\uD83D\uDCCC \u8865\u5145\u539F\u56E0 / \u8FFD\u52A0\u8BF4\u660E(\u4F1A\u8FFD\u52A0\u5230\u539F\u6765\u7684\u63CF\u8FF0\u4E4B\u540E)"), /*#__PURE__*/React.createElement("textarea", {
    value: reasonAppend,
    onChange: function onChange(e) {
      return setReasonAppend(e.target.value);
    },
    rows: 2,
    placeholder: "\u4F8B:\u5BA2\u6237\u53C8\u53D1\u6765\u65B0\u90AE\u4EF6 \xB7 \u8BF4\u8981\u62CD\u5E95\u5EA7\u7684\u7EC6\u8282",
    style: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical',
      background: 'white'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 4
    }
  }, "\uD83D\uDCCE \u8FFD\u52A0\u9644\u4EF6(\u4F1A\u52A0\u5230\u73B0\u6709\u9644\u4EF6\u540E)"), newAttachments.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginBottom: 6
    }
  }, newAttachments.map(function (a, i) {
    return /*#__PURE__*/React.createElement("img", {
      key: i,
      src: a.url,
      alt: a.name,
      style: {
        width: 60,
        height: 60,
        objectFit: 'contain',
        borderRadius: 6,
        border: '1px solid var(--line)',
        background: 'var(--bg-elevated)',
        padding: 2
      }
    });
  })), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    multiple: true,
    onChange: handleFiles,
    disabled: uploading,
    style: {
      fontSize: 11
    }
  }), uploading && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--accent)',
      marginTop: 4
    }
  }, "\u23F3 \u4E0A\u4F20\u4E2D\u2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-elevated)',
      borderRadius: 10,
      padding: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 10,
      letterSpacing: '.5px'
    }
  }, "\uD83D\uDD12 \u4EE5\u4E0B\u7531\u62CD\u6444\u90E8\u586B \xB7 \u4F60\u53EA\u80FD\u770B"), statusLines.map(function (line, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        fontSize: 12,
        color: 'var(--ink-2)',
        lineHeight: 1.6,
        marginBottom: 2
      }
    }, line);
  })), /*#__PURE__*/React.createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-modal-cancel",
    onClick: onClose
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    className: "btn-modal-primary",
    onClick: save,
    disabled: saving || uploading
  }, saving ? '⏳ 保存中…' : '💾 保存修改')))), document.body);
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix53 v3: 批量录入 Modal — 一次提交多条拍摄需求
// 适合客服汇总员场景:周末整理一批待拍产品
// ════════════════════════════════════════════════════════════════════
// 🆕 fix56: 批量录入单行的附件组件 — 支持点击 / 粘贴 / 拖拽上传 + 缩略图预览
var RowAttachments = function RowAttachments(_ref85) {
  var items = _ref85.items,
    onChange = _ref85.onChange,
    toast = _ref85.toast;
  var _useState281 = useState(false),
    _useState282 = _slicedToArray(_useState281, 2),
    uploading = _useState282[0],
    setUploading = _useState282[1];
  var _useState283 = useState(false),
    _useState284 = _slicedToArray(_useState283, 2),
    dragOver = _useState284[0],
    setDragOver = _useState284[1];
  var _useState285 = useState(false),
    _useState286 = _slicedToArray(_useState285, 2),
    focused = _useState286[0],
    setFocused = _useState286[1]; // 🆕 fix64: 聚焦提示
  var _useState287 = useState(null),
    _useState288 = _slicedToArray(_useState287, 2),
    preview = _useState288[0],
    setPreview = _useState288[1]; // 🆕 fix64: 放大预览 lightbox
  var fileInputRef = useRef(null);
  var handleFiles = /*#__PURE__*/function () {
    var _ref86 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee42(files) {
      var list, news, _iterator8, _step8, f, a, _t35, _t36;
      return _regenerator().w(function (_context45) {
        while (1) switch (_context45.p = _context45.n) {
          case 0:
            list = Array.from(files || []).filter(function (f) {
              return f.type.startsWith('image/');
            });
            if (!(list.length === 0)) {
              _context45.n = 1;
              break;
            }
            return _context45.a(2);
          case 1:
            setUploading(true);
            news = [];
            _iterator8 = _createForOfIteratorHelper(list);
            _context45.p = 2;
            _iterator8.s();
          case 3:
            if ((_step8 = _iterator8.n()).done) {
              _context45.n = 8;
              break;
            }
            f = _step8.value;
            _context45.p = 4;
            _context45.n = 5;
            return window.uploadAttachmentToWtkpi(f);
          case 5:
            a = _context45.v;
            news.push(a);
            _context45.n = 7;
            break;
          case 6:
            _context45.p = 6;
            _t35 = _context45.v;
            toast('上传 ' + f.name + ' 失败:' + (_t35.message || ''));
          case 7:
            _context45.n = 3;
            break;
          case 8:
            _context45.n = 10;
            break;
          case 9:
            _context45.p = 9;
            _t36 = _context45.v;
            _iterator8.e(_t36);
          case 10:
            _context45.p = 10;
            _iterator8.f();
            return _context45.f(10);
          case 11:
            if (news.length > 0) {
              onChange([].concat(_toConsumableArray(items), news));
              toast("\u2713 \u5DF2\u6DFB\u52A0 ".concat(news.length, " \u5F20\u56FE"));
            }
            setUploading(false);
          case 12:
            return _context45.a(2);
        }
      }, _callee42, null, [[4, 6], [2, 9, 10, 11]]);
    }));
    return function handleFiles(_x24) {
      return _ref86.apply(this, arguments);
    };
  }();
  var handlePaste = /*#__PURE__*/function () {
    var _ref87 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee43(e) {
      var _e$clipboardData4;
      var clipItems, imageFiles;
      return _regenerator().w(function (_context46) {
        while (1) switch (_context46.n) {
          case 0:
            clipItems = Array.from(((_e$clipboardData4 = e.clipboardData) === null || _e$clipboardData4 === void 0 ? void 0 : _e$clipboardData4.items) || []);
            imageFiles = clipItems.filter(function (it) {
              return it.type && it.type.startsWith('image/');
            }).map(function (it) {
              return it.getAsFile();
            }).filter(Boolean);
            if (!(imageFiles.length > 0)) {
              _context46.n = 2;
              break;
            }
            e.preventDefault();
            _context46.n = 1;
            return handleFiles(imageFiles);
          case 1:
            _context46.n = 3;
            break;
          case 2:
            toast('剪贴板里没有图片 — 先截图/复制图片再粘贴');
          case 3:
            return _context46.a(2);
        }
      }, _callee43);
    }));
    return function handlePaste(_x25) {
      return _ref87.apply(this, arguments);
    };
  }();
  var handleDrop = /*#__PURE__*/function () {
    var _ref88 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee44(e) {
      var _e$dataTransfer;
      return _regenerator().w(function (_context47) {
        while (1) switch (_context47.n) {
          case 0:
            e.preventDefault();
            setDragOver(false);
            _context47.n = 1;
            return handleFiles((_e$dataTransfer = e.dataTransfer) === null || _e$dataTransfer === void 0 ? void 0 : _e$dataTransfer.files);
          case 1:
            return _context47.a(2);
        }
      }, _callee44);
    }));
    return function handleDrop(_x26) {
      return _ref88.apply(this, arguments);
    };
  }();
  var removeAt = function removeAt(idx) {
    return onChange(items.filter(function (_, i) {
      return i !== idx;
    }));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    tabIndex: 0,
    onPaste: handlePaste,
    onDrop: handleDrop,
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      setDragOver(true);
    },
    onDragLeave: function onDragLeave() {
      return setDragOver(false);
    },
    onFocus: function onFocus() {
      return setFocused(true);
    },
    onBlur: function onBlur() {
      return setFocused(false);
    },
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 5,
      alignItems: 'center',
      minHeight: 48,
      padding: 5,
      borderRadius: 8,
      cursor: 'text',
      background: dragOver ? 'var(--accent-soft)' : focused ? '#f0f9ff' : 'transparent',
      border: dragOver ? '1px dashed var(--accent)' : focused ? '1px solid var(--accent)' : '1px dashed var(--line)',
      outline: 'none',
      transition: 'all .12s',
      position: 'relative'
    },
    title: "\u70B9\u8FD9\u91CC\u6FC0\u6D3B \u2192 \u7136\u540E Ctrl+V \u7C98\u8D34 / \u62D6\u62FD / \u70B9 \uD83D\uDCCE \u9009\u56FE"
  }, items.map(function (a, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'relative',
        width: 48,
        height: 48
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: a.url,
      alt: a.name,
      onClick: function onClick(e) {
        e.stopPropagation();
        setPreview(a);
      },
      title: "\u70B9\u51FB\u653E\u5927\u9884\u89C8",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        borderRadius: 6,
        border: '1px solid var(--line)',
        background: 'var(--bg-elevated)',
        cursor: 'zoom-in'
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        removeAt(i);
      },
      title: "\u5220\u9664",
      style: {
        position: 'absolute',
        top: -6,
        right: -6,
        width: 17,
        height: 17,
        background: 'var(--bad)',
        color: 'white',
        border: '2px solid white',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: 9,
        lineHeight: 1,
        fontFamily: 'inherit',
        padding: 0
      }
    }, "\u2715"));
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      var _fileInputRef$current4;
      return (_fileInputRef$current4 = fileInputRef.current) === null || _fileInputRef$current4 === void 0 ? void 0 : _fileInputRef$current4.click();
    },
    disabled: uploading,
    title: "\u9009\u56FE / \u4E5F\u53EF\u7C98\u8D34 Ctrl+V / \u62D6\u62FD\u8FDB\u6765",
    style: {
      width: 48,
      height: 48,
      border: '1px dashed var(--line)',
      borderRadius: 6,
      background: 'white',
      cursor: uploading ? 'wait' : 'pointer',
      fontSize: 14,
      color: 'var(--ink-3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'inherit',
      padding: 0,
      flexShrink: 0
    }
  }, uploading ? '⏳' : '📎+'), focused && items.length === 0 && !uploading && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--accent)',
      fontWeight: 500,
      whiteSpace: 'nowrap'
    }
  }, "\uD83D\uDCCB \u73B0\u5728\u53EF Ctrl+V \u7C98\u8D34"), /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    accept: "image/*",
    multiple: true,
    onChange: function onChange(e) {
      handleFiles(e.target.files);
      e.target.value = '';
    },
    style: {
      display: 'none'
    }
  })), preview && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setPreview(null);
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.8)',
      zIndex: 100001,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 30,
      cursor: 'zoom-out'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: preview.url,
    alt: preview.name,
    style: {
      maxWidth: '90vw',
      maxHeight: '90vh',
      objectFit: 'contain',
      borderRadius: 10,
      boxShadow: '0 20px 60px rgba(0,0,0,.5)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setPreview(null);
    },
    style: {
      position: 'fixed',
      top: 24,
      right: 30,
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.15)',
      color: 'white',
      border: 'none',
      fontSize: 22,
      cursor: 'pointer'
    }
  }, "\u2715")), document.body));
};
var PhotoRequestBatchModal = function PhotoRequestBatchModal(_ref89) {
  var user = _ref89.user,
    toast = _ref89.toast,
    onClose = _ref89.onClose,
    onSuccess = _ref89.onSuccess;
  var _useState289 = useState([{
      productName: '',
      sku: '',
      urgency: 'normal',
      reason: '',
      attachments: []
    }, {
      productName: '',
      sku: '',
      urgency: 'normal',
      reason: '',
      attachments: []
    }, {
      productName: '',
      sku: '',
      urgency: 'normal',
      reason: '',
      attachments: []
    }]),
    _useState290 = _slicedToArray(_useState289, 2),
    rows = _useState290[0],
    setRows = _useState290[1];
  var _useState291 = useState([]),
    _useState292 = _slicedToArray(_useState291, 2),
    defaultShops = _useState292[0],
    setDefaultShops = _useState292[1];
  var _useState293 = useState('normal'),
    _useState294 = _slicedToArray(_useState293, 2),
    defaultUrgency = _useState294[0],
    setDefaultUrgency = _useState294[1];
  var _useState295 = useState(''),
    _useState296 = _slicedToArray(_useState295, 2),
    reasonPrefix = _useState296[0],
    setReasonPrefix = _useState296[1];
  var _useState297 = useState(false),
    _useState298 = _slicedToArray(_useState297, 2),
    submitting = _useState298[0],
    setSubmitting = _useState298[1];
  var addRow = function addRow() {
    return setRows([].concat(_toConsumableArray(rows), [{
      productName: '',
      sku: '',
      urgency: 'normal',
      reason: '',
      attachments: []
    }]));
  };
  var removeRow = function removeRow(i) {
    return setRows(rows.filter(function (_, idx) {
      return idx !== i;
    }));
  };
  var updateRow = function updateRow(i, field, val) {
    return setRows(rows.map(function (r, idx) {
      return idx === i ? _objectSpread(_objectSpread({}, r), {}, _defineProperty({}, field, val)) : r;
    }));
  };
  var toggleDefaultShop = function toggleDefaultShop(label) {
    setDefaultShops(function (prev) {
      return prev.includes(label) ? prev.filter(function (s) {
        return s !== label;
      }) : [].concat(_toConsumableArray(prev), [label]);
    });
  };
  var valid = rows.filter(function (r) {
    return r.productName.trim();
  });
  var totalImages = rows.reduce(function (sum, r) {
    var _r$attachments;
    return sum + (((_r$attachments = r.attachments) === null || _r$attachments === void 0 ? void 0 : _r$attachments.length) || 0);
  }, 0);
  var submit = /*#__PURE__*/function () {
    var _ref90 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee45() {
      var result, _t37;
      return _regenerator().w(function (_context48) {
        while (1) switch (_context48.p = _context48.n) {
          case 0:
            if (!(valid.length === 0)) {
              _context48.n = 1;
              break;
            }
            toast('至少要填 1 条产品名');
            return _context48.a(2);
          case 1:
            _context48.n = 2;
            return wsConfirm("\u786E\u8BA4\u6279\u91CF\u63D0\u4EA4 ".concat(valid.length, " \u6761\u9700\u6C42?\n\n").concat(totalImages > 0 ? "(\u5305\u542B ".concat(totalImages, " \u5F20\u56FE\u7247)") : '(无图片)'));
          case 2:
            if (_context48.v) {
              _context48.n = 3;
              break;
            }
            return _context48.a(2);
          case 3:
            setSubmitting(true);
            _context48.p = 4;
            _context48.n = 5;
            return window.batchSubmitPhotoRequests(valid, {
              applicableShops: defaultShops,
              urgency: defaultUrgency,
              reasonPrefix: reasonPrefix.trim()
            }, user);
          case 5:
            result = _context48.v;
            if (result.failed === 0) {
              toast("\u2713 \u5168\u90E8 ".concat(result.succeeded, " \u6761\u5DF2\u63D0\u4EA4"));
            } else {
              alert("\u90E8\u5206\u6210\u529F:\n\n\u6210\u529F:".concat(result.succeeded, " \u6761\n\u5931\u8D25:").concat(result.failed, " \u6761\n\n\u9519\u8BEF:\n").concat(result.errors.slice(0, 3).join('\n')));
            }
            onSuccess === null || onSuccess === void 0 || onSuccess();
            _context48.n = 7;
            break;
          case 6:
            _context48.p = 6;
            _t37 = _context48.v;
            console.error('[PhotoReq Batch] 失败', _t37);
            alert('批量提交失败:\n\n' + (_t37.message || JSON.stringify(_t37)));
          case 7:
            setSubmitting(false);
          case 8:
            return _context48.a(2);
        }
      }, _callee45, null, [[4, 6]]);
    }));
    return function submit() {
      return _ref90.apply(this, arguments);
    };
  }();
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      if (e.target === e.currentTarget) onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.55)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 18,
      maxWidth: 1100,
      width: '100%',
      maxHeight: '92vh',
      overflow: 'auto',
      padding: '24px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-.022em'
    }
  }, "\uD83D\uDCE5 \u6279\u91CF\u5F55\u5165\u5F85\u62CD\u4EA7\u54C1"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      fontSize: 22,
      cursor: 'pointer',
      color: 'var(--ink-3)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginBottom: 16
    }
  }, "\u4E00\u884C\u4E00\u4E2A\u4EA7\u54C1 \xB7 \u5171\u6709\u5B57\u6BB5(\u5E97\u94FA / \u7D27\u6025\u5EA6 / \u524D\u7F00)\u5728\u4E0B\u65B9\u7EDF\u4E00\u8BBE\u7F6E \xB7 ", /*#__PURE__*/React.createElement("strong", null, "\u6BCF\u884C\u652F\u6301\u70B9 \uD83D\uDCCE+ / \u7C98\u8D34 Ctrl+V / \u62D6\u62FD \u4E0A\u4F20\u56FE\u7247")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-elevated)',
      padding: 14,
      borderRadius: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 8
    }
  }, "\uD83D\uDCCB \u7EDF\u4E00\u5E94\u7528\u5230\u6240\u6709\u884C"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u9ED8\u8BA4\u5E97\u94FA(\u6BCF\u884C\u53EF\u5355\u72EC\u8986\u76D6)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, (typeof SHOPS_PRESET !== 'undefined' ? SHOPS_PRESET : []).map(function (s) {
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      type: "button",
      onClick: function onClick() {
        return toggleDefaultShop(s.label);
      },
      style: {
        padding: '3px 9px',
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        border: '1px solid ' + (defaultShops.includes(s.label) ? 'var(--accent)' : 'var(--line)'),
        background: defaultShops.includes(s.label) ? 'var(--accent)' : 'white',
        color: defaultShops.includes(s.label) ? 'white' : 'var(--ink-2)',
        fontSize: 11,
        fontFamily: 'inherit'
      }
    }, s.label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "\u7EDF\u4E00\u7D27\u6025\u5EA6:"), /*#__PURE__*/React.createElement("select", {
    value: defaultUrgency,
    onChange: function onChange(e) {
      return setDefaultUrgency(e.target.value);
    },
    style: {
      padding: '4px 8px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12,
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "normal"
  }, "\xB7 \u666E\u901A"), /*#__PURE__*/React.createElement("option", {
    value: "urgent"
  }, "\uD83D\uDEA8 \u52A0\u6025")), /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginLeft: 14
    }
  }, "\u7EDF\u4E00\u539F\u56E0\u524D\u7F00:"), /*#__PURE__*/React.createElement("input", {
    value: reasonPrefix,
    onChange: function onChange(e) {
      return setReasonPrefix(e.target.value);
    },
    placeholder: "\u4F8B:\u672C\u5468\u65B0\u54C1\u6C47\u603B",
    style: {
      flex: '1 1 200px',
      padding: '4px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--bg-soft)'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 6px',
      textAlign: 'left',
      fontWeight: 600,
      fontSize: 11,
      width: 30
    }
  }, "#"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 6px',
      textAlign: 'left',
      fontWeight: 600,
      fontSize: 11,
      minWidth: 150
    }
  }, "\u4EA7\u54C1\u540D *"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 6px',
      textAlign: 'left',
      fontWeight: 600,
      fontSize: 11,
      minWidth: 120
    }
  }, "SKU"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 6px',
      textAlign: 'left',
      fontWeight: 600,
      fontSize: 11,
      width: 85
    }
  }, "\u7D27\u6025\u5EA6"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 6px',
      textAlign: 'left',
      fontWeight: 600,
      fontSize: 11,
      minWidth: 170
    }
  }, "\u539F\u56E0 / \u5907\u6CE8"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 6px',
      textAlign: 'left',
      fontWeight: 600,
      fontSize: 11,
      minWidth: 180
    }
  }, "\uD83D\uDCCE \u9644\u4EF6"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 6px',
      width: 30
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(function (r, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i,
      style: {
        borderBottom: '1px solid var(--line-soft)'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 6px',
        color: 'var(--ink-3)',
        verticalAlign: 'middle'
      }
    }, i + 1), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 6px',
        verticalAlign: 'middle'
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: r.productName,
      onChange: function onChange(e) {
        return updateRow(i, 'productName', e.target.value);
      },
      placeholder: "\u5FC5\u586B",
      style: {
        width: '100%',
        padding: '5px 8px',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 12,
        fontFamily: 'inherit'
      }
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 6px',
        verticalAlign: 'middle'
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: r.sku,
      onChange: function onChange(e) {
        return updateRow(i, 'sku', e.target.value);
      },
      style: {
        width: '100%',
        padding: '5px 8px',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 12,
        fontFamily: 'SF Mono,monospace'
      }
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 6px',
        verticalAlign: 'middle'
      }
    }, /*#__PURE__*/React.createElement("select", {
      value: r.urgency,
      onChange: function onChange(e) {
        return updateRow(i, 'urgency', e.target.value);
      },
      style: {
        width: '100%',
        padding: '5px 6px',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 12,
        fontFamily: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: "normal"
    }, "\u666E\u901A"), /*#__PURE__*/React.createElement("option", {
      value: "urgent"
    }, "\uD83D\uDEA8 \u52A0\u6025"))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 6px',
        verticalAlign: 'middle'
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: r.reason,
      onChange: function onChange(e) {
        return updateRow(i, 'reason', e.target.value);
      },
      style: {
        width: '100%',
        padding: '5px 8px',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 12,
        fontFamily: 'inherit'
      }
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 6px',
        verticalAlign: 'middle'
      }
    }, /*#__PURE__*/React.createElement(RowAttachments, {
      items: r.attachments || [],
      onChange: function onChange(news) {
        return updateRow(i, 'attachments', news);
      },
      toast: toast
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 6px',
        textAlign: 'center',
        verticalAlign: 'middle'
      }
    }, rows.length > 1 && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeRow(i);
      },
      style: {
        background: 'none',
        border: 'none',
        color: 'var(--bad)',
        cursor: 'pointer',
        fontSize: 14,
        padding: 0
      },
      title: "\u5220\u9664\u6B64\u884C"
    }, "\u2715")));
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: addRow,
    style: {
      padding: '7px 14px',
      background: 'var(--accent-soft)',
      color: 'var(--accent)',
      border: '1px dashed var(--accent)',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 12,
      fontFamily: 'inherit',
      fontWeight: 600,
      marginBottom: 14
    }
  }, "+ \u52A0\u4E00\u884C"), /*#__PURE__*/React.createElement("div", {
    className: "modal-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-modal-cancel",
    onClick: onClose
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    className: "btn-modal-primary",
    onClick: submit,
    disabled: submitting || valid.length === 0
  }, submitting ? '⏳ 提交中…' : "\uD83D\uDCBE \u6279\u91CF\u63D0\u4EA4 ".concat(valid.length, " \u6761").concat(totalImages > 0 ? " (\u542B ".concat(totalImages, " \u56FE)") : ''))))), document.body);
};

// ════════════════════════════════════════════════════════════════════
// 📌 任务分派模块 (fix19) — 临时任务派给某人,主管看是否处理
// 工作流: 创建者 → 派给 X → X 接手/标处理中 → 完成 · 主管全局可见 · Realtime 推送
// ════════════════════════════════════════════════════════════════════


// ════════════════════════════════════════════════════════════════════
// 🆕 fix265: 🛠️ 操作客服工作台(内联模块,取代独立 iframe 页)
//   与客服跟进同套逻辑:CLOUD.upsert 保存(自动剥离缺失列)、内联渲染(单一滚动)。
//   标准清单全内置:智能搜索 / 分类筛选 / 列排序 / 顶底分页 / 单一滚动 / 主管自定义工作内容。
//   数据:workspace_records 里 record_kind='ops_task';与支持记录共表但互不污染。
// ════════════════════════════════════════════════════════════════════
var OPS_BASE_WC = ['昌晖对数据', '昌晖做发票', '昌晖填转单号', '明扬对数据', '明扬填转单号', '正石对数据', '正石填转单号', '做报关资料', '云鼎对数据', '云鼎做发票', '云鼎群里的派送通知和签收通知·发邮件给客户', '填已发', '打单', '宏杉对数据', '宏杉填转单号', '河池对数据', '河池做发票', '河池填转单号', '信源对数据', '信源做发票', '信源填转单号', '亿俐缇对数据', '亿俐缇做发票', '速联达对数据', '速联达下单·备注运费细节到订单', '速联达填转单号', '改单·改件数', '汇智通对数据', '汇智通做发票', '汇智通填转单号', '做评价', '空运发货算运费·讲价', '退款·记录', '处理各对接群的反馈问题', '催单·跟进各网站订单', '检查是否漏发渠道·漏填转单号', '清货', '检查', '处理快递公司退回的包裹', '收藏艺彩实拍图', '处理并跟进补发配件', '打印安装说明书', '跟进各快递公司的渠道更改', '做备货清单', '下单工厂物料', '发各网站渠道'];
var OPS_OTHER_WC = '其他';
var OPS_COMP = { done: '已完成', doing: '进行中', undone: '未完成' };
function _opsToday() { var d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
function _opsHHMM() { var d = new Date(); return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); }
function _opsMinutes(s, e) { if (!s || !e) return null; var a = s.split(':').map(Number), b = e.split(':').map(Number); var m = (b[0] * 60 + b[1]) - (a[0] * 60 + a[1]); if (m < 0) m += 1440; return m; }

function OpsModule(props) {
  var user = props.user, toast = props.toast;
  var isSup = !!(user && (user.role === 'admin' || user.role === 'super_admin'));
  var h = React.createElement;

  var s_rows = useState([]); var rows = s_rows[0], setRows = s_rows[1];
  var s_loading = useState(true); var loading = s_loading[0], setLoading = s_loading[1];
  var s_custom = useState([]); var customWC = s_custom[0], setCustomWC = s_custom[1];
  // 表单
  var s_wc = useState(OPS_BASE_WC[0]); var fWC = s_wc[0], setFWC = s_wc[1];
  var s_shop = useState(''); var fShop = s_shop[0], setFShop = s_shop[1];
  var s_qty = useState(''); var fQty = s_qty[0], setFQty = s_qty[1];
  var s_date = useState(_opsToday()); var fDate = s_date[0], setFDate = s_date[1];
  var s_start = useState(''); var fStart = s_start[0], setFStart = s_start[1];
  var s_end = useState(''); var fEnd = s_end[0], setFEnd = s_end[1];
  var s_comp = useState('done'); var comp = s_comp[0], setComp = s_comp[1];
  var s_reason = useState(''); var fReason = s_reason[0], setFReason = s_reason[1];
  var s_follow = useState(''); var fFollow = s_follow[0], setFFollow = s_follow[1];
  var s_remind = useState(''); var fRemind = s_remind[0], setFRemind = s_remind[1];
  var s_note = useState(''); var fNote = s_note[0], setFNote = s_note[1];
  var s_editing = useState(null); var editingId = s_editing[0], setEditingId = s_editing[1];
  var s_timer = useState(false); var timing = s_timer[0], setTiming = s_timer[1];
  var s_saving = useState(false); var saving = s_saving[0], setSaving = s_saving[1];
  var s_wcnew = useState(''); var wcNew = s_wcnew[0], setWcNew = s_wcnew[1];
  // 列表控件
  var s_q = useState(''); var q = s_q[0], setQ = s_q[1];
  var s_fp = useState(''); var filPerson = s_fp[0], setFilPerson = s_fp[1];
  var s_fwc = useState(''); var filWC = s_fwc[0], setFilWC = s_fwc[1];
  var s_fc = useState(''); var filComp = s_fc[0], setFilComp = s_fc[1];
  var s_ff = useState(''); var filFrom = s_ff[0], setFilFrom = s_ff[1];
  var s_ft = useState(''); var filTo = s_ft[0], setFilTo = s_ft[1];
  var s_sk = useState('work_date'); var sortKey = s_sk[0], setSortKey = s_sk[1];
  var s_sd = useState('desc'); var sortDir = s_sd[0], setSortDir = s_sd[1];
  var s_pg = useState(1); var page = s_pg[0], setPage = s_pg[1];
  var s_ps = useState(20); var pageSize = s_ps[0], setPageSize = s_ps[1];
  // 🆕 fix272: 回收站
  var s_trash = useState(false); var showTrash = s_trash[0], setShowTrash = s_trash[1];
  var s_trashRows = useState([]); var trashRows = s_trashRows[0], setTrashRows = s_trashRows[1];

  function load() {
    if (!CLOUD.client) { setTimeout(load, 300); return; } // 🆕 fix275: 云未就绪时等待重试,避免 CLOUD.client.from 读 null 白屏
    setLoading(true);
    CLOUD.client.from('workspace_records').select('*').eq('record_kind', 'ops_task').order('work_date', { ascending: false }).limit(5000).then(function (res) {
      var data = (res && res.data) || [];
      // 🆕 fix308:非管理员只看自己的记录(管理人/主管看全部)
      if (!isSup) {
        data = data.filter(function (r) { return r && (r.staff_id === user.id || r.ownerId === user.id); });
      }
      setRows(data.filter(function (r) { return r && !r.deleted; }));
      setTrashRows(data.filter(function (r) { return r && r.deleted; })); // 🆕 fix272
      setLoading(false);
    });
  }
  function loadCustom() {
    if (!CLOUD.client) { setTimeout(loadCustom, 300); return; } // 🆕 fix275: 同上
    CLOUD.client.from('app_config').select('value').eq('key', 'ops_work_contents').maybeSingle().then(function (res) {
      var v = res && res.data && res.data.value;
      setCustomWC(Array.isArray(v) ? v.filter(Boolean) : []);
    });
  }
  useEffect(function () { load(); loadCustom(); }, []);

  function wcAll() { return OPS_BASE_WC.concat(customWC, [OPS_OTHER_WC]); }

  function saveCustom(next) {
    if (!CLOUD.client) { toast('云未就绪,请稍后再试'); return Promise.resolve(false); }
    return CLOUD.client.from('app_config').upsert({ key: 'ops_work_contents', value: next }).then(function (res) {
      if (res && res.error) { toast('保存失败:' + res.error.message); return false; }
      return true;
    });
  }
  function addCustom() {
    var v = (wcNew || '').trim();
    if (!v) return;
    if (OPS_BASE_WC.indexOf(v) >= 0 || customWC.indexOf(v) >= 0 || v === OPS_OTHER_WC) { toast('已存在该工作内容'); return; }
    var next = customWC.concat([v]);
    saveCustom(next).then(function (ok) { if (ok) { setCustomWC(next); setWcNew(''); toast('✓ 已添加并同步全员'); } });
  }
  function removeCustom(i) {
    var next = customWC.slice(); next.splice(i, 1);
    saveCustom(next).then(function (ok) { if (ok) { setCustomWC(next); toast('已删除并同步'); } });
  }

  function resetForm(keepWC) {
    setEditingId(null); if (!keepWC) setFWC(myWcStats.lastWC || OPS_BASE_WC[0]); setFShop(''); setFQty(''); setFDate(_opsToday());
    setFStart(''); setFEnd(''); setComp('done'); setFReason(''); setFFollow(''); setFRemind(''); setFNote(''); setTiming(false);
  }
  function toggleTimer() {
    if (!timing) { setFStart(_opsHHMM()); setFEnd(''); setTiming(true); }
    else { setFEnd(_opsHHMM()); setTiming(false); }
  }

  function save() {
    if (!fWC) { toast('请选工作内容'); return; }
    setSaving(true);
    var iso = new Date().toISOString();
    var workDate = fDate || _opsToday();
    var minutes = _opsMinutes(fStart, fEnd);
    var orig = editingId ? rows.find(function (r) { return r.id === editingId; }) : null;
    var rec = {
      id: editingId || ('ops_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6)),
      ownerId: user.id, date: workDate,
      createdAt: orig ? (orig.createdAt || iso) : iso, updatedAt: iso,
      status: 'resolved', customer: '', site: fShop.trim() || '',
      startTime: fStart || '', endTime: fEnd || '', durationMin: minutes || 0,
      difficulty: '', category: fWC, orderRef: '', note: fNote.trim() || '',
      nextFollowUp: fFollow || null, deleted: false,
      record_kind: 'ops_task', staff_type: 'ops', staff_id: user.id, staff_name: user.name || '',
      work_date: workDate, work_content: fWC, work_shop: fShop.trim() || null,
      work_qty: fQty === '' ? null : parseInt(fQty, 10),
      ops_start: fStart || null, ops_end: fEnd || null, ops_minutes: minutes,
      ops_note: fNote.trim() || null, completion: comp,
      incomplete_reason: comp === 'undone' ? (fReason.trim() || null) : null,
      ops_followup: fFollow || null, ops_remind: fRemind || null,
      ops_created: orig ? (orig.ops_created || iso) : iso, ops_updated: iso
    };
    CLOUD.upsert('workspace_records', rec).then(function (ok) {
      setSaving(false);
      if (ok === null) { toast('保存失败:' + ((CLOUD._lastError && CLOUD._lastError.message) || '未知')); return; }
      toast('✓ 已保存'); resetForm(true); load();
    });
  }
  function editRow(r) {
    setEditingId(r.id); setFWC(r.work_content || OPS_BASE_WC[0]); setFShop(r.work_shop || '');
    setFQty(r.work_qty == null ? '' : String(r.work_qty)); setFDate(r.work_date || _opsToday());
    setFStart(r.ops_start || ''); setFEnd(r.ops_end || ''); setComp(r.completion || 'done');
    setFReason(r.incomplete_reason || ''); setFFollow(r.ops_followup || ''); setFRemind(r.ops_remind || '');
    setFNote(r.ops_note || ''); setTiming(false);
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  function delRow(r) {
    if (!CLOUD.client) { toast('云未就绪,请稍后再试'); return; }
    // 🆕 fix271: 软删必须用 .update() 只改指定列。
    // 不能用 CLOUD.upsert 传部分字段 —— upsert=INSERT...ON CONFLICT,Postgres 先按这几个字段构造 INSERT 行,
    // workspace_records 的 ownerId 等 NOT NULL 列没给值 → NOT NULL 违约 → 400(非缺列,自动剥离救不了)。
    CLOUD.client.from('workspace_records').update({ deleted: true, ops_updated: new Date().toISOString() }).eq('id', r.id).then(function (res) {
      if (res && res.error) { toast('删除失败:' + res.error.message); return; }
      toast('已移入回收站'); load();
    });
  }
  // 🆕 fix272: 回收站 — 恢复 / 彻底删除 / 清空
  function restoreRow(r) {
    if (!CLOUD.client) { toast('云未就绪,请稍后再试'); return; }
    CLOUD.client.from('workspace_records').update({ deleted: false, ops_updated: new Date().toISOString() }).eq('id', r.id).then(function (res) {
      if (res && res.error) { toast('恢复失败:' + res.error.message); return; }
      toast('✓ 已恢复'); load();
    });
  }
  function purgeRow(r) {
    if (!CLOUD.client) { toast('云未就绪,请稍后再试'); return; }
    wsConfirm('彻底删除这条记录?删除后不可恢复。').then(function (ok) {
      if (!ok) return;
      CLOUD.client.from('workspace_records').delete().eq('id', r.id).then(function (res) {
        if (res && res.error) { toast('删除失败:' + res.error.message); return; }
        toast('已彻底删除'); load();
      });
    });
  }
  function purgeAll() {
    if (!trashRows.length) return;
    if (!CLOUD.client) { toast('云未就绪,请稍后再试'); return; }
    wsConfirm('清空回收站?将彻底删除 ' + trashRows.length + ' 条记录,不可恢复。').then(function (ok) {
      if (!ok) return;
      var ids = trashRows.map(function (r) { return r.id; });
      CLOUD.client.from('workspace_records').delete().in('id', ids).then(function (res) {
        if (res && res.error) { toast('清空失败:' + res.error.message); return; }
        toast('✓ 回收站已清空'); load();
      });
    });
  }

  var persons = useMemo(function () { var s = {}; rows.forEach(function (r) { if (r.staff_name) s[r.staff_name] = 1; }); return Object.keys(s).sort(); }, [rows]);

  // 🆕 fix274: 工作内容记忆 —— 从「该客服自己的历史记录」算常用度 + 上次选择(无需新存储)
  var myWcStats = useMemo(function () {
    // 🆕 fix277: 最近高频加权 —— 每次使用按距今天数做指数衰减(半衰期14天),最近用得多的排最前;cnt 仍存原始次数用于显示
    var cnt = {}, score = {}, lastWC = null, lastT = '';
    var HALF = 14, nowMs = Date.now();
    rows.forEach(function (r) {
      if (r.staff_id !== user.id && r.staff_name !== user.name) return;
      var w = r.work_content; if (!w) return;
      cnt[w] = (cnt[w] || 0) + 1;
      var d = r.work_date || (r.ops_updated || r.ops_created || '').slice(0, 10);
      var days = 9999;
      if (d) { var dm = new Date(d).getTime(); if (!isNaN(dm)) days = Math.max(0, (nowMs - dm) / 86400000); }
      score[w] = (score[w] || 0) + Math.pow(0.5, days / HALF);
      var t = r.ops_updated || r.ops_created || r.work_date || '';
      if (t >= lastT) { lastT = t; lastWC = w; }
    });
    var ordered = Object.keys(score).sort(function (a, b) { return score[b] - score[a]; });
    return { cnt: cnt, score: score, ordered: ordered, lastWC: lastWC };
  }, [rows, user.id, user.name]);
  // 默认选上次用的(仅首次、非编辑态)
  var didInitWC = useRef(false);
  useEffect(function () {
    if (!didInitWC.current && !editingId && myWcStats.lastWC) {
      didInitWC.current = true;
      setFWC(myWcStats.lastWC);
    }
  }, [myWcStats.lastWC]);

  var filtered = useMemo(function () {
    var qq = q.trim().toLowerCase();
    return rows.filter(function (r) {
      if (filPerson && r.staff_name !== filPerson) return false;
      if (filWC && r.work_content !== filWC) return false;
      if (filComp && r.completion !== filComp) return false;
      if (filFrom && (r.work_date || '') < filFrom) return false;
      if (filTo && (r.work_date || '') > filTo) return false;
      if (qq) {
        var hay = ((r.work_content || '') + ' ' + (r.work_shop || '') + ' ' + (r.staff_name || '') + ' ' + (r.ops_note || '')).toLowerCase();
        if (hay.indexOf(qq) < 0) return false;
      }
      return true;
    });
  }, [rows, q, filPerson, filWC, filComp, filFrom, filTo]);

  var sorted = useMemo(function () {
    var arr = filtered.slice();
    arr.sort(function (a, b) {
      var av = (a[sortKey] == null ? '' : a[sortKey]) + '', bv = (b[sortKey] == null ? '' : b[sortKey]) + '';
      if (sortKey === 'work_qty' || sortKey === 'ops_minutes') { var na = parseFloat(av) || 0, nb = parseFloat(bv) || 0; return sortDir === 'asc' ? na - nb : nb - na; }
      if (av < bv) return sortDir === 'asc' ? -1 : 1;
      if (av > bv) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
    return arr;
  }, [filtered, sortKey, sortDir]);

  var stats = useMemo(function () {
    var cnt = filtered.length, done = 0, qty = 0, mins = 0, byC = {};
    filtered.forEach(function (r) {
      if (r.completion === 'done') done++;
      qty += parseInt(r.work_qty, 10) || 0;
      mins += parseInt(r.ops_minutes, 10) || 0;
      var k = r.work_content || '其他';
      if (!byC[k]) byC[k] = { cnt: 0, qty: 0, mins: 0 };
      byC[k].cnt++; byC[k].qty += parseInt(r.work_qty, 10) || 0; byC[k].mins += parseInt(r.ops_minutes, 10) || 0;
    });
    var byArr = Object.keys(byC).map(function (k) { return { wc: k, cnt: byC[k].cnt, qty: byC[k].qty, mins: byC[k].mins }; }).sort(function (a, b) { return b.cnt - a.cnt; });
    return { cnt: cnt, done: done, rate: cnt ? Math.round(done / cnt * 100) : 0, qty: qty, mins: mins, byArr: byArr };
  }, [filtered]);

  var totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  var curPage = Math.min(page, totalPages);
  var paged = sorted.slice((curPage - 1) * pageSize, curPage * pageSize);

  function toggleSort(k) { if (sortKey === k) setSortDir(sortDir === 'asc' ? 'desc' : 'asc'); else { setSortKey(k); setSortDir('asc'); } setPage(1); }
  function clearFilters() { setQ(''); setFilPerson(''); setFilWC(''); setFilComp(''); setFilFrom(''); setFilTo(''); setPage(1); }

  var C = { ink: 'var(--ink-1,#1c1a17)', sec: 'var(--ink-3,#6b6660)', line: 'var(--line,#e7e5e0)', accent: 'var(--accent,#2563eb)', ok: '#16a34a', danger: '#dc2626', doing: '#7c3aed' };
  function inp() { return { padding: '7px 10px', fontSize: 13, border: '1px solid ' + C.line, borderRadius: 8, background: '#fff', color: C.ink, fontFamily: 'inherit', width: '100%' }; }
  function fl(t) { return h('label', { style: { display: 'block', fontSize: 11, color: C.sec, marginBottom: 3, fontWeight: 600 } }, t); }
  function pgBtn(d) { return { padding: '6px 12px', fontSize: 12, border: '1px solid ' + C.line, borderRadius: 8, background: d ? '#f5f5f4' : '#fff', color: d ? '#bbb' : C.ink, cursor: d ? 'default' : 'pointer', fontFamily: 'inherit' }; }
  function pager(key) {
    return h('div', { key: key, style: { display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', padding: '8px 0', justifyContent: 'flex-end' } },
      h('span', { style: { fontSize: 12, color: C.sec, marginRight: 'auto' } }, '共 ' + sorted.length + ' 条 · 第 ' + curPage + '/' + totalPages + ' 页'),
      h('select', { value: pageSize, onChange: function (e) { setPageSize(parseInt(e.target.value, 10)); setPage(1); }, style: { padding: '6px 8px', fontSize: 12, border: '1px solid ' + C.line, borderRadius: 8, fontFamily: 'inherit' } }, [10, 20, 50, 100].map(function (n) { return h('option', { key: n, value: n }, n + ' 条/页'); })),
      h('button', { onClick: function () { setPage(1); }, disabled: curPage <= 1, style: pgBtn(curPage <= 1) }, '«'),
      h('button', { onClick: function () { setPage(Math.max(1, curPage - 1)); }, disabled: curPage <= 1, style: pgBtn(curPage <= 1) }, '‹ 上一页'),
      h('button', { onClick: function () { setPage(Math.min(totalPages, curPage + 1)); }, disabled: curPage >= totalPages, style: pgBtn(curPage >= totalPages) }, '下一页 ›'),
      h('button', { onClick: function () { setPage(totalPages); }, disabled: curPage >= totalPages, style: pgBtn(curPage >= totalPages) }, '»'));
  }
  function th(label, key) {
    var active = sortKey === key;
    return h('th', { onClick: function () { toggleSort(key); }, style: { padding: '8px 10px', textAlign: 'left', fontSize: 12, color: active ? C.accent : C.sec, cursor: 'pointer', whiteSpace: 'nowrap', borderBottom: '2px solid ' + C.line, userSelect: 'none' } }, label, active ? (sortDir === 'asc' ? ' ▲' : ' ▼') : '');
  }
  function compSeg() {
    return h('div', { style: { display: 'flex', width: '100%', border: '1px solid ' + C.line, borderRadius: 9, overflow: 'hidden' } },
      ['done', 'doing', 'undone'].map(function (k, i) {
        var on = comp === k; var bg = on ? (k === 'done' ? C.ok : k === 'doing' ? C.doing : C.danger) : '#fff';
        return h('button', { key: k, onClick: function () { setComp(k); }, style: { flex: 1, padding: '8px 2px', fontSize: 12, border: 'none', borderRight: i < 2 ? '1px solid ' + C.line : 'none', background: bg, color: on ? '#fff' : C.sec, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' } }, OPS_COMP[k]);
      }));
  }
  function wcOptions() {
    var all = wcAll();
    var used = myWcStats.ordered.filter(function (w) { return all.indexOf(w) >= 0; });
    if (!used.length) return all.map(function (w) { return h('option', { key: w, value: w }, w); });
    var usedSet = {}; used.forEach(function (w) { usedSet[w] = 1; });
    var rest = all.filter(function (w) { return !usedSet[w]; });
    return [
      h('optgroup', { key: '_used', label: '⭐ 常用(最近高频优先)' }, used.map(function (w) { return h('option', { key: 'u_' + w, value: w }, w + '（' + myWcStats.cnt[w] + '次）'); })),
      h('optgroup', { key: '_all', label: '全部工作内容' }, rest.map(function (w) { return h('option', { key: 'a_' + w, value: w }, w); }))
    ];
  }
  // 🆕 fix272: 回收站面板
  var opsTrashPanel = h('div', { style: { border: '1px solid ' + C.line, borderRadius: 12, padding: 14 } },
    h('div', { style: { display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 10 } },
      h('div', { style: { fontWeight: 600, fontSize: 15 } }, '🗑️ 回收站 (' + trashRows.length + ')'),
      h('span', { style: { fontSize: 12, color: C.sec, marginRight: 'auto' } }, '删除的记录在这里 · 可恢复;彻底删除后不可找回'),
      trashRows.length > 0 ? h('button', { onClick: purgeAll, style: { padding: '6px 12px', fontSize: 12, border: '1px solid #fca5a5', borderRadius: 8, background: '#fff', color: C.danger, cursor: 'pointer', fontFamily: 'inherit' } }, '清空回收站') : null),
    trashRows.length === 0
      ? h('div', { style: { padding: 28, textAlign: 'center', color: C.sec } }, '回收站是空的')
      : h('div', { style: { overflowX: 'auto', border: '1px solid ' + C.line, borderRadius: 10 } },
        h('table', { style: { width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 760 } },
          h('thead', null, h('tr', { style: { background: '#fafafa' } },
            ['日期', '工作内容', '店铺', '数量', '录入人', '删除时间', '操作'].map(function (t, i) {
              return h('th', { key: i, style: { padding: '8px 10px', textAlign: i === 6 ? 'center' : 'left', fontSize: 12, color: C.sec, borderBottom: '2px solid ' + C.line, whiteSpace: 'nowrap' } }, t);
            }))),
          h('tbody', null, trashRows.map(function (r) {
            return h('tr', { key: r.id, style: { borderBottom: '1px solid ' + C.line } },
              h('td', { style: { padding: '8px 10px', whiteSpace: 'nowrap', color: C.sec } }, r.work_date || '—'),
              h('td', { style: { padding: '8px 10px', fontWeight: 600 } }, r.work_content || '—'),
              h('td', { style: { padding: '8px 10px', whiteSpace: 'nowrap' } }, r.work_shop || '—'),
              h('td', { style: { padding: '8px 10px', textAlign: 'right' } }, r.work_qty == null ? '—' : r.work_qty),
              h('td', { style: { padding: '8px 10px', whiteSpace: 'nowrap' } }, r.staff_name || '—'),
              h('td', { style: { padding: '8px 10px', whiteSpace: 'nowrap', color: C.sec } }, (r.ops_updated || '').slice(0, 16).replace('T', ' ') || '—'),
              h('td', { style: { padding: '8px 10px', whiteSpace: 'nowrap', textAlign: 'center' } },
                h('button', { onClick: function () { restoreRow(r); }, style: { padding: '4px 9px', fontSize: 12, border: '1px solid ' + C.ok, borderRadius: 7, background: '#fff', color: C.ok, cursor: 'pointer', marginRight: 5, fontFamily: 'inherit' } }, '↩️ 恢复'),
                h('button', { onClick: function () { purgeRow(r); }, style: { padding: '4px 9px', fontSize: 12, border: '1px solid #fca5a5', borderRadius: 7, background: '#fff', color: C.danger, cursor: 'pointer', fontFamily: 'inherit' } }, '彻底删除')));
          })))));

  return h('div', { className: 'paper rounded-2xl', style: { padding: '16px 18px' } },
    // 标题
    h('div', { style: { display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 4 } },
      h('div', { className: 'font-display', style: { fontSize: 20, fontWeight: 600, flex: 1, minWidth: 200 } }, '🛠️ 操作客服工作台',
        h('span', { style: { fontSize: 12, fontWeight: 400, color: C.sec, marginLeft: 8 } }, '打单 / 录尺寸 / 跟进发货 等任务型日常记录 · 与支持客服分开统计')),
      h('span', { style: { fontSize: 12, color: C.accent, fontWeight: 600 } }, '记录人:' + (user.name || '')),
      h('button', { onClick: load, style: { padding: '6px 12px', fontSize: 12, border: '1px solid ' + C.line, borderRadius: 8, background: '#fff', cursor: 'pointer', fontFamily: 'inherit' } }, '🔄 刷新'),
      h('button', { onClick: function () { setShowTrash(!showTrash); }, style: { padding: '6px 12px', fontSize: 12, border: '1px solid ' + (showTrash ? C.danger : C.line), borderRadius: 8, background: showTrash ? '#fef2f2' : '#fff', color: showTrash ? C.danger : C.ink, cursor: 'pointer', fontFamily: 'inherit', fontWeight: showTrash ? 600 : 400 } }, showTrash ? '← 返回列表' : ('🗑️ 回收站' + (trashRows.length ? ' (' + trashRows.length + ')' : '')))),
    // 录入表单
    !showTrash && h(React.Fragment, null, h('div', { style: { border: '1px solid ' + C.line, borderRadius: 12, padding: 14, marginTop: 12, marginBottom: 12 } },
      h('div', { style: { fontWeight: 600, marginBottom: 10 } }, editingId ? '✏️ 编辑记录' : '➕ 记录一项工作'),
      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '13px 14px', alignItems: 'end' } },
        h('div', null, fl('工作内容 *'), h('select', { value: fWC, onChange: function (e) { setFWC(e.target.value); }, style: inp() }, wcOptions())),
        h('div', null, fl('店铺(打单填,如 VK/DC/DF)'), h('input', { type: 'text', value: fShop, onChange: function (e) { setFShop(e.target.value); }, placeholder: '可空', style: inp() })),
        h('div', null, fl('工作数量(如打单 90)'), h('input', { type: 'number', min: '0', value: fQty, onChange: function (e) { setFQty(e.target.value); }, placeholder: '可空', style: inp() })),
        h('div', null, fl('日期'), h('input', { type: 'date', value: fDate, onChange: function (e) { setFDate(e.target.value); }, style: inp() })),
        h('div', { style: { gridColumn: 'span 2' } }, fl('开始 / 结束(可手填或计时)'),
          h('div', { style: { display: 'flex', gap: 5, alignItems: 'center' } },
            h('input', { type: 'time', value: fStart, onChange: function (e) { setFStart(e.target.value); }, style: Object.assign(inp(), { flex: '1 1 64px', minWidth: 64 }) }),
            h('span', { style: { color: C.sec } }, '→'),
            h('input', { type: 'time', value: fEnd, onChange: function (e) { setFEnd(e.target.value); }, style: Object.assign(inp(), { flex: '1 1 64px', minWidth: 64 }) }),
            h('button', { onClick: toggleTimer, title: '开始/停止计时', style: { padding: '7px 9px', fontSize: 13, border: 'none', borderRadius: 8, cursor: 'pointer', color: '#fff', background: timing ? C.danger : C.ok, flex: 'none' } }, timing ? '■' : '▶'))),
        h('div', null, fl('完成情况 *'), compSeg()),
        h('div', null, fl('次日跟进(日期)'), h('input', { type: 'date', value: fFollow, onChange: function (e) { setFFollow(e.target.value); }, style: inp() })),
        h('div', null, fl('⏰ 需提醒(日期)'), h('input', { type: 'date', value: fRemind, onChange: function (e) { setFRemind(e.target.value); }, style: inp() })),
        comp === 'undone' ? h('div', null, fl('未完成原因'), h('input', { type: 'text', value: fReason, onChange: function (e) { setFReason(e.target.value); }, placeholder: '为什么没完成', style: inp() })) : null),
      h('div', { style: { marginTop: 10 } }, fl('备注 / 说明'), h('textarea', { value: fNote, onChange: function (e) { setFNote(e.target.value); }, placeholder: '一句话说明本项工作', style: Object.assign(inp(), { minHeight: 38, resize: 'vertical' }) })),
      h('div', { style: { display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 12 } },
        editingId ? h('button', { onClick: resetForm, style: { padding: '7px 14px', fontSize: 13, border: '1px solid ' + C.line, borderRadius: 8, background: '#fafafa', cursor: 'pointer', fontFamily: 'inherit' } }, '取消编辑') : null,
        h('button', { onClick: save, disabled: saving, style: { padding: '7px 18px', fontSize: 13, border: 'none', borderRadius: 8, background: C.accent, color: '#fff', cursor: saving ? 'default' : 'pointer', fontFamily: 'inherit', opacity: saving ? 0.6 : 1 } }, saving ? '保存中…' : (editingId ? '保存修改' : '添加记录')))),
    // 主管:自定义工作内容
    isSup ? h('div', { style: { border: '1px solid ' + C.line, borderRadius: 12, padding: 14, marginBottom: 12 } },
      h('div', { style: { fontWeight: 600, marginBottom: 10 } }, '⚙ 工作内容管理 ', h('span', { style: { fontSize: 12, fontWeight: 400, color: C.sec } }, '· 仅主管可见 · 添加后所有客服同步')),
      h('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 } },
        h('input', { type: 'text', value: wcNew, onChange: function (e) { setWcNew(e.target.value); }, onKeyDown: function (e) { if (e.key === 'Enter') addCustom(); }, placeholder: '输入新工作内容,回车或点添加', style: Object.assign(inp(), { flex: 1, minWidth: 240 }) }),
        h('button', { onClick: addCustom, style: { padding: '7px 16px', fontSize: 13, border: 'none', borderRadius: 8, background: C.accent, color: '#fff', cursor: 'pointer', fontFamily: 'inherit' } }, '+ 添加')),
      h('div', { style: { fontSize: 12, lineHeight: 1.9 } }, customWC.length === 0
        ? h('span', { style: { color: C.sec } }, '暂无自定义项 · 基础清单已有 ' + OPS_BASE_WC.length + ' 项。')
        : customWC.map(function (w, i) { return h('span', { key: i, style: { display: 'inline-block', background: '#f1f5f9', border: '1px solid ' + C.line, borderRadius: 14, padding: '3px 6px 3px 10px', margin: 3, fontSize: 12 } }, w, ' ', h('a', { onClick: function () { removeCustom(i); }, style: { color: '#ef4444', cursor: 'pointer', fontWeight: 700 } }, '✕')); }))) : null,
    // 统计
    h('div', { style: { border: '1px solid ' + C.line, borderRadius: 12, padding: 14, marginBottom: 12 } },
      h('div', { style: { fontWeight: 600, marginBottom: 10 } }, '📊 操作客服统计(按当前筛选)'),
      h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(110px,1fr))', gap: 10, marginBottom: 10 } },
        [['条数', stats.cnt], ['已完成', stats.done], ['完成率', stats.rate + '%'], ['数量合计', stats.qty], ['时长合计', (stats.mins / 60).toFixed(1) + ' h']].map(function (it, i) {
          return h('div', { key: i, style: { border: '1px solid ' + C.line, borderRadius: 10, padding: '10px 12px' } }, h('div', { style: { fontSize: 22, fontWeight: 700 } }, it[1]), h('div', { style: { fontSize: 11, color: C.sec } }, it[0]));
        })),
      stats.byArr.length ? h('div', { style: { overflowX: 'auto' } }, h('table', { style: { width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 460 } },
        h('thead', null, h('tr', { style: { background: '#fafafa' } }, ['工作内容', '条数', '数量合计', '时长(分)'].map(function (t, i) { return h('th', { key: i, style: { padding: '6px 10px', textAlign: i ? 'right' : 'left', fontSize: 12, color: C.sec, borderBottom: '1px solid ' + C.line } }, t); }))),
        h('tbody', null, stats.byArr.map(function (b, i) {
          return h('tr', { key: i, style: { borderBottom: '1px solid ' + C.line } },
            h('td', { style: { padding: '6px 10px' } }, b.wc),
            h('td', { style: { padding: '6px 10px', textAlign: 'right' } }, b.cnt),
            h('td', { style: { padding: '6px 10px', textAlign: 'right' } }, b.qty || '—'),
            h('td', { style: { padding: '6px 10px', textAlign: 'right' } }, b.mins || '—'));
        })))) : null),
    // 列表
    h('div', { style: { border: '1px solid ' + C.line, borderRadius: 12, padding: 14 } },
      h('div', { style: { fontWeight: 600, marginBottom: 10 } }, '📋 记录列表'),
      h('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', marginBottom: 6 } },
        h('input', { type: 'text', value: q, onChange: function (e) { setQ(e.target.value); setPage(1); }, placeholder: '🔍 搜 工作内容 / 店铺 / 录入人 / 备注', style: Object.assign(inp(), { flex: 1, minWidth: 200, borderRadius: 16, width: 'auto' }) }),
        h('select', { value: filPerson, onChange: function (e) { setFilPerson(e.target.value); setPage(1); }, style: { padding: '7px 10px', fontSize: 13, border: '1px solid ' + C.line, borderRadius: 8, fontFamily: 'inherit' } }, [h('option', { key: '', value: '' }, '全部录入人')].concat(persons.map(function (p) { return h('option', { key: p, value: p }, p); }))),
        h('select', { value: filWC, onChange: function (e) { setFilWC(e.target.value); setPage(1); }, style: { padding: '7px 10px', fontSize: 13, border: '1px solid ' + C.line, borderRadius: 8, fontFamily: 'inherit', maxWidth: 180 } }, [h('option', { key: '', value: '' }, '全部工作内容')].concat(wcAll().map(function (w) { return h('option', { key: w, value: w }, w); }))),
        h('select', { value: filComp, onChange: function (e) { setFilComp(e.target.value); setPage(1); }, style: { padding: '7px 10px', fontSize: 13, border: '1px solid ' + C.line, borderRadius: 8, fontFamily: 'inherit' } }, [h('option', { key: '', value: '' }, '全部状态'), h('option', { value: 'done' }, '已完成'), h('option', { value: 'doing' }, '进行中'), h('option', { value: 'undone' }, '未完成')]),
        h('input', { type: 'date', value: filFrom, onChange: function (e) { setFilFrom(e.target.value); setPage(1); }, style: { padding: '6px 8px', fontSize: 13, border: '1px solid ' + C.line, borderRadius: 8, fontFamily: 'inherit' } }),
        h('span', { style: { color: C.sec } }, '~'),
        h('input', { type: 'date', value: filTo, onChange: function (e) { setFilTo(e.target.value); setPage(1); }, style: { padding: '6px 8px', fontSize: 13, border: '1px solid ' + C.line, borderRadius: 8, fontFamily: 'inherit' } }),
        h('button', { onClick: clearFilters, style: { padding: '6px 12px', fontSize: 12, border: '1px solid ' + C.line, borderRadius: 8, background: '#fafafa', cursor: 'pointer', fontFamily: 'inherit' } }, '清空筛选')),
      pager('top'),
      h('div', { style: { overflowX: 'auto', border: '1px solid ' + C.line, borderRadius: 10 } },
        h('table', { style: { width: '100%', borderCollapse: 'collapse', fontSize: 13, minWidth: 880 } },
          h('thead', null, h('tr', { style: { background: '#fafafa' } },
            th('日期', 'work_date'), th('工作内容', 'work_content'), th('店铺', 'work_shop'), th('数量', 'work_qty'),
            h('th', { style: { padding: '8px 10px', textAlign: 'left', fontSize: 12, color: C.sec, borderBottom: '2px solid ' + C.line } }, '时段'),
            th('时长', 'ops_minutes'), th('状态', 'completion'), th('录入人', 'staff_name'),
            h('th', { style: { padding: '8px 10px', textAlign: 'left', fontSize: 12, color: C.sec, borderBottom: '2px solid ' + C.line } }, '备注'),
            h('th', { style: { padding: '8px 10px', textAlign: 'center', fontSize: 12, color: C.sec, borderBottom: '2px solid ' + C.line } }, '操作'))),
          h('tbody', null, loading
            ? h('tr', null, h('td', { colSpan: 10, style: { padding: 24, textAlign: 'center', color: C.sec } }, '加载中…'))
            : (paged.length === 0
              ? h('tr', null, h('td', { colSpan: 10, style: { padding: 24, textAlign: 'center', color: C.sec } }, '没有匹配的记录'))
              : paged.map(function (r) {
                var cc = r.completion === 'done' ? C.ok : r.completion === 'doing' ? C.doing : C.danger;
                return h('tr', { key: r.id, style: { borderBottom: '1px solid ' + C.line } },
                  h('td', { style: { padding: '8px 10px', whiteSpace: 'nowrap', color: C.sec } }, r.work_date || '—'),
                  h('td', { style: { padding: '8px 10px', fontWeight: 600 } }, r.work_content || '—'),
                  h('td', { style: { padding: '8px 10px', whiteSpace: 'nowrap' } }, r.work_shop || '—'),
                  h('td', { style: { padding: '8px 10px', textAlign: 'right' } }, r.work_qty == null ? '—' : r.work_qty),
                  h('td', { style: { padding: '8px 10px', whiteSpace: 'nowrap', color: C.sec } }, (r.ops_start || '--:--') + ' ~ ' + (r.ops_end || '--:--')),
                  h('td', { style: { padding: '8px 10px', textAlign: 'right' } }, r.ops_minutes == null ? '—' : r.ops_minutes),
                  h('td', { style: { padding: '8px 10px', whiteSpace: 'nowrap' } }, h('span', { style: { fontSize: 11, padding: '2px 8px', borderRadius: 10, background: cc, color: '#fff' } }, OPS_COMP[r.completion] || r.completion || '—')),
                  h('td', { style: { padding: '8px 10px', whiteSpace: 'nowrap' } }, r.staff_name || '—'),
                  h('td', { style: { padding: '8px 10px', color: C.sec, maxWidth: 220 } }, r.ops_note || '—'),
                  h('td', { style: { padding: '8px 10px', whiteSpace: 'nowrap', textAlign: 'center' } },
                    h('button', { onClick: function () { editRow(r); }, style: { padding: '4px 9px', fontSize: 12, border: '1px solid ' + C.line, borderRadius: 7, background: '#fff', cursor: 'pointer', marginRight: 5, fontFamily: 'inherit' } }, '编辑'),
                    h('button', { onClick: function () { delRow(r); }, style: { padding: '4px 9px', fontSize: 12, border: '1px solid #fca5a5', borderRadius: 7, background: '#fff', color: C.danger, cursor: 'pointer', fontFamily: 'inherit' } }, '删除')));
              })))
        )),
      pager('bottom'))),
    showTrash && opsTrashPanel
  );
}


// ════════════════════════════════════════════════════════════════════
// 🆕 fix267: 📦 库存查询(内联模块,取代 inventory-view.html iframe)
//   只读 po-system products 表;内联渲染(单一滚动)+ 标准列表(搜索/筛选/排序/顶底分页)+ 内联灯箱。
// ════════════════════════════════════════════════════════════════════
var __poClient = null;
function poClient() {
  if (!__poClient && typeof window !== 'undefined' && window.supabase) {
    __poClient = window.supabase.createClient('https://pyfmuknvjqfwcqvbrsvw.supabase.co', 'sb_publishable_dFjk1WN_Hc0Te6IhXZysZg_SXvKQU4C');
  }
  return __poClient;
}
function _invAgeDays(p) { if (!p || !p.stock_in_at) return null; return Math.floor((Date.now() - new Date(p.stock_in_at).getTime()) / 86400000); }

function InventoryModuleInline(props) {
  var toast = props.toast || function (m) { try { window.__toast && window.__toast(m); } catch (e) {} };
  var user = props.user || null;
  var h = React.createElement;

  var s_rows = useState([]); var rows = s_rows[0], setRows = s_rows[1];
  var s_trash = useState(null); var trashRows = s_trash[0], setTrashRows = s_trash[1]; // null=未加载
  var s_loading = useState(true); var loading = s_loading[0], setLoading = s_loading[1];
  var s_err = useState(''); var err = s_err[0], setErr = s_err[1];
  var s_q = useState(''); var q = s_q[0], setQ = s_q[1];
  var s_f = useState('all'); var filt = s_f[0], setFilt = s_f[1];
  var s_age = useState('any'); var ageFilt = s_age[0], setAgeFilt = s_age[1];
  var s_shop = useState(''); var shopFilt = s_shop[0], setShopFilt = s_shop[1];
  var s_sk = useState('stock_qty'); var sortKey = s_sk[0], setSortKey = s_sk[1];
  var s_sd = useState('asc'); var sortDir = s_sd[0], setSortDir = s_sd[1];
  var s_pg = useState(1); var page = s_pg[0], setPage = s_pg[1];
  var s_ps = useState(48); var pageSize = s_ps[0], setPageSize = s_ps[1];
  var s_lb = useState(null); var lb = s_lb[0], setLb = s_lb[1];
  var s_tab = useState('list'); var tab = s_tab[0], setTab = s_tab[1];             // list | outbound
  var s_moves = useState(null); var moves = s_moves[0], setMoves = s_moves[1];     // 出库流水
  var s_today = useState(null); var todayIds = s_today[0], setTodayIds = s_today[1]; // 今日消耗 product_id 集
  var s_edit = useState(null); var editP = s_edit[0], setEditP = s_edit[1];        // 编辑弹窗产品
  var s_trace = useState(null); var trace = s_trace[0], setTrace = s_trace[1];     // 该SKU操作留痕
  var s_eWh = useState('overseas'); var eWh = s_eWh[0], setEWh = s_eWh[1];
  var s_eOp = useState('inbound'); var eOp = s_eOp[0], setEOp = s_eOp[1];
  var s_eQty = useState(''); var eQty = s_eQty[0], setEQty = s_eQty[1];
  var s_busy = useState(false); var busy = s_busy[0], setBusy = s_busy[1];

  var COLS = 'id,sku,name_cn,name_en,image_url,stock_qty,stock_qty_domestic,stock_qty_overseas,stock_qty_in_transit,overseas_lead_days,price_usd,color_temp,variant_color,pkg_single,weight_single,pkg_carton,weight_carton,qty_per_carton,carton_count,label_large,label_small,product_url,stock_alert_threshold,default_supplier,platform_skus,stock_in_at';

  function load() {
    var c = poClient();
    if (!c) { setErr('Supabase 未就绪'); setLoading(false); return; }
    setLoading(true); setErr('');
    c.from('products').select(COLS).eq('is_inventory_item', true).is('deleted_at', null).order('stock_qty', { ascending: true }).limit(5000)
      .then(function (res) {
        if (res && res.error) { setErr('加载失败:' + (res.error.message || res.error)); setRows([]); }
        else { setRows((res && res.data) || []); }
        setLoading(false);
      });
  }
  function loadToday() {
    var c = poClient(); if (!c) return;
    var start = new Date(); start.setHours(0, 0, 0, 0);
    c.from('inventory_movements').select('product_id').eq('movement_type', 'order_deduct').gte('created_at', start.toISOString()).limit(5000)
      .then(function (res) {
        var set = {}; (((res && res.data) || [])).forEach(function (m) { if (m && m.product_id) set[m.product_id] = 1; });
        setTodayIds(set);
      }, function () { setTodayIds({}); });
  }
  function loadTrash() {
    var c = poClient(); if (!c) return; setTrashRows([]);
    c.from('products').select(COLS).eq('is_inventory_item', true).not('deleted_at', 'is', null).order('stock_qty', { ascending: true }).limit(2000)
      .then(function (res) { setTrashRows((res && res.data) || []); }, function () { setTrashRows([]); });
  }
  function loadMoves() {
    var c = poClient(); if (!c) return; setMoves(null);
    c.from('stock_movements').select('*').order('moved_at', { ascending: false }).limit(500)
      .then(function (res) { setMoves((res && res.data) || []); }, function () { setMoves([]); });
  }
  function loadTrace(sku) {
    setTrace(null);
    var c = poClient(); if (!c) return;
    c.from('inventory_movements').select('movement_type,qty_change,qty_after,operator,note,created_at,ref_id').eq('internal_sku', sku).order('created_at', { ascending: false }).limit(50)
      .then(function (res) { setTrace((res && res.data) || []); }, function () { setTrace([]); });
  }
  useEffect(function () { load(); loadToday(); }, []);

  var C = { ink: 'var(--ink-1,#1c1a17)', sec: 'var(--ink-3,#6b6660)', line: 'var(--line,#e7e5e0)', accent: 'var(--accent,#2563eb)' };

  function openEdit(p) {
    setEditP(p);
    setEOp('inbound');
    setEWh(Number(p.stock_qty_overseas || 0) > 0 || Number(p.stock_qty_domestic || 0) <= 0 ? 'overseas' : 'domestic');
    setEQty('');
    loadTrace(p.sku);
  }

  // 入库 / 出库 / 调整(分仓 + 总量 + 写 inventory_movements 留痕;防并发先读最新)
  function applyStockOp(p, opType, warehouse, amount) {
    var c = poClient(); if (!c) { toast('库存库未连接', 'error'); return; }
    var csName = (user && (user.name || user.alias)) || '客服';
    setBusy(true);
    Promise.resolve(c.from('products').select('id,sku,name_cn,stock_qty,stock_qty_domestic,stock_qty_overseas').eq('id', p.id).single()).then(function (r) {
      var prod = r && r.data; if (!prod) { setBusy(false); toast('读取最新库存失败', 'error'); return; }
      var dom = Number(prod.stock_qty_domestic || 0), ovs = Number(prod.stock_qty_overseas || 0);
      var cur = warehouse === 'overseas' ? ovs : dom;
      var whName = warehouse === 'overseas' ? '海外' : '国内';
      var newWh, delta;
      if (opType === 'inbound') { newWh = cur + amount; delta = amount; }
      else if (opType === 'outbound') {
        if (amount > cur) { setBusy(false); toast(whName + '仓只剩 ' + cur + ',不够出 ' + amount, 'error'); return; }
        newWh = cur - amount; delta = -amount;
      } else { newWh = amount; delta = amount - cur; } // adjust: amount=绝对值
      if (newWh < 0) newWh = 0;
      var newDom = warehouse === 'overseas' ? dom : newWh;
      var newOvs = warehouse === 'overseas' ? newWh : ovs;
      var newTotal = newDom + newOvs;
      var upd = { stock_qty: newTotal, stock_qty_domestic: newDom, stock_qty_overseas: newOvs };
      Promise.resolve(c.from('products').update(upd).eq('id', prod.id)).then(function (u) {
        if (u && u.error) { setBusy(false); toast('写入失败:' + (u.error.message || u.error) + ' · 若RLS请在跟单库放行 products', 'error'); return; }
        var mt = opType === 'inbound' ? 'inbound' : 'manual_adjust';
        var note = opType === 'inbound' ? ('客服' + whName + '仓入库') : opType === 'outbound' ? ('客服' + whName + '仓出库') : ('客服调整' + whName + '仓 ' + cur + '→' + newWh);
        Promise.resolve(c.from('inventory_movements').insert({
          product_id: prod.id, internal_sku: prod.sku, movement_type: mt,
          qty_change: delta, qty_after: newTotal, ref_type: 'manual', operator: csName, note: note
        })).then(function () {
          setBusy(false);
          toast('✓ 已更新 · ' + whName + '仓 ' + cur + '→' + newWh + ' · 总 ' + newTotal);
          setRows(function (prev) { return prev.map(function (x) { return x.id === prod.id ? Object.assign({}, x, upd) : x; }); });
          setEditP(function (cur2) { return cur2 ? Object.assign({}, cur2, upd) : cur2; });
          setEQty('');
          loadTrace(prod.sku);
        }, function () { setBusy(false); toast('留痕写入失败(库存数已改)', 'error'); loadTrace(prod.sku); });
      }, function (e) { setBusy(false); toast('写入异常:' + ((e && e.message) || e), 'error'); });
    }, function () { setBusy(false); toast('读取最新库存失败', 'error'); });
  }

  function restoreItem(p) {
    var c = poClient(); if (!c) return;
    Promise.resolve(c.from('products').update({ deleted_at: null }).eq('id', p.id)).then(function (u) {
      if (u && u.error) { toast('恢复失败:' + (u.error.message || u.error), 'error'); return; }
      toast('✓ 已恢复出回收站');
      setTrashRows(function (prev) { return (prev || []).filter(function (x) { return x.id !== p.id; }); });
      load();
    }, function () { toast('恢复失败', 'error'); });
  }

  // ── 数据派生 ──
  var shopList = useMemo(function () {
    var set = {};
    rows.forEach(function (p) { (Array.isArray(p.platform_skus) ? p.platform_skus : []).forEach(function (ps) { var l = ps && (ps.shop_label || ps.shop); if (l) set[l] = 1; }); });
    return Object.keys(set).sort();
  }, [rows]);

  var summary = useMemo(function () {
    var dom = 0, ovs = 0, domN = 0, ovsN = 0;
    rows.forEach(function (p) {
      var d = Number(p.stock_qty_domestic || 0), o = Number(p.stock_qty_overseas || 0);
      dom += d; ovs += o; if (d > 0) domN++; if (o > 0) ovsN++;
    });
    return { dom: dom, ovs: ovs, domN: domN, ovsN: ovsN };
  }, [rows]);

  var base = filt === 'trash' ? (trashRows || []) : rows;

  var byQ = useMemo(function () {
    var qq = q.trim().toLowerCase();
    var arr = base;
    if (qq) arr = arr.filter(function (p) {
      if ((p.sku || '').toLowerCase().indexOf(qq) >= 0) return true;
      if ((p.name_cn || '').toLowerCase().indexOf(qq) >= 0) return true;
      if ((p.name_en || '').toLowerCase().indexOf(qq) >= 0) return true;
      if ((p.default_supplier || '').toLowerCase().indexOf(qq) >= 0) return true;
      if ((p.variant_color || '').toLowerCase().indexOf(qq) >= 0) return true;
      return Array.isArray(p.platform_skus) && p.platform_skus.some(function (ps) { return (ps && ps.sku || '').toLowerCase().indexOf(qq) >= 0; });
    });
    return arr;
  }, [base, q]);

  var scoped = useMemo(function () {
    var ageMin = { any: 0, '30': 30, '60': 60, '90': 90, '180': 180, '365': 365 }[ageFilt] || 0;
    return byQ.filter(function (p) {
      if (shopFilt) {
        var hit = Array.isArray(p.platform_skus) && p.platform_skus.some(function (ps) { return ps && (ps.shop_label === shopFilt || ps.shop === shopFilt); });
        if (!hit) return false;
      }
      if (ageMin > 0) { var a = _invAgeDays(p); if (a == null || a < ageMin) return false; }
      return true;
    });
  }, [byQ, shopFilt, ageFilt]);

  var counts = useMemo(function () {
    var c = { all: scoped.length, domestic: 0, overseas: 0, low: 0, out: 0, restock: 0, today: 0, unbound: 0 };
    scoped.forEach(function (p) {
      var s = Number(p.stock_qty || 0), thr = Number(p.stock_alert_threshold || 5), it = Number(p.stock_qty_in_transit || 0);
      if (Number(p.stock_qty_domestic || 0) > 0) c.domestic++;
      if (Number(p.stock_qty_overseas || 0) > 0) c.overseas++;
      if (s > 0 && s <= thr) c.low++;
      if (s <= 0) c.out++;
      if (s <= thr && it <= 0) c.restock++;
      if (todayIds && todayIds[p.id]) c.today++;
      if (!(Array.isArray(p.platform_skus) && p.platform_skus.length)) c.unbound++;
    });
    return c;
  }, [scoped, todayIds]);

  var filtered = useMemo(function () {
    if (filt === 'trash') return scoped;
    return scoped.filter(function (p) {
      var s = Number(p.stock_qty || 0), thr = Number(p.stock_alert_threshold || 5), it = Number(p.stock_qty_in_transit || 0);
      if (filt === 'domestic') return Number(p.stock_qty_domestic || 0) > 0;
      if (filt === 'overseas') return Number(p.stock_qty_overseas || 0) > 0;
      if (filt === 'low') return s > 0 && s <= thr;
      if (filt === 'out') return s <= 0;
      if (filt === 'restock') return s <= thr && it <= 0;
      if (filt === 'today') return todayIds && todayIds[p.id];
      if (filt === 'unbound') return !(Array.isArray(p.platform_skus) && p.platform_skus.length);
      return true;
    });
  }, [scoped, filt, todayIds]);

  var sorted = useMemo(function () {
    var arr = filtered.slice();
    arr.sort(function (a, b) {
      var av, bv;
      if (sortKey === 'age') { av = _invAgeDays(a); bv = _invAgeDays(b); av = av == null ? -1 : av; bv = bv == null ? -1 : bv; return sortDir === 'asc' ? av - bv : bv - av; }
      if (sortKey === 'stock_qty') { av = Number(a.stock_qty || 0); bv = Number(b.stock_qty || 0); return sortDir === 'asc' ? av - bv : bv - av; }
      av = (a[sortKey] == null ? '' : a[sortKey]) + ''; bv = (b[sortKey] == null ? '' : b[sortKey]) + '';
      if (av < bv) return sortDir === 'asc' ? -1 : 1;
      if (av > bv) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
    return arr;
  }, [filtered, sortKey, sortDir]);

  var totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  var curPage = Math.min(page, totalPages);
  var paged = sorted.slice((curPage - 1) * pageSize, curPage * pageSize);

  function setFiltSafe(key) {
    setTab('list'); setFilt(key); setPage(1);
    if (key === 'trash' && trashRows == null) loadTrash();
  }

  function chip(key, label, special) {
    var on = tab === 'list' && filt === key;
    var n = key === 'trash' ? (trashRows == null ? '' : trashRows.length) : (counts[key] != null ? counts[key] : '');
    return h('button', { key: key, onClick: function () { setFiltSafe(key); }, style: { padding: '6px 13px', fontSize: 12.5, border: '1px solid ' + (on ? C.accent : C.line), background: on ? 'rgba(37,99,235,.08)' : (special ? '#fff7ed' : '#fff'), color: on ? C.accent : (special ? '#b45309' : C.sec), borderRadius: 16, cursor: 'pointer', fontFamily: 'inherit', fontWeight: on ? 600 : 400, whiteSpace: 'nowrap' } }, label + (n !== '' ? ' ' + n : ''));
  }

  function pgBtn(d) { return { padding: '6px 12px', fontSize: 12, border: '1px solid ' + C.line, borderRadius: 8, background: d ? '#f5f5f4' : '#fff', color: d ? '#bbb' : C.ink, cursor: d ? 'default' : 'pointer', fontFamily: 'inherit' }; }
  function pager(key) {
    return h('div', { key: key, style: { display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', padding: '8px 0', justifyContent: 'flex-end' } },
      h('span', { style: { fontSize: 12, color: C.sec, marginRight: 'auto' } }, '共 ' + sorted.length + ' 款 · 第 ' + curPage + '/' + totalPages + ' 页'),
      h('select', { value: pageSize, onChange: function (e) { setPageSize(parseInt(e.target.value, 10)); setPage(1); }, style: { padding: '6px 8px', fontSize: 12, border: '1px solid ' + C.line, borderRadius: 8, fontFamily: 'inherit' } }, [24, 48, 96, 200].map(function (n) { return h('option', { key: n, value: n }, n + ' 款/页'); })),
      h('button', { onClick: function () { setPage(1); }, disabled: curPage <= 1, style: pgBtn(curPage <= 1) }, '«'),
      h('button', { onClick: function () { setPage(Math.max(1, curPage - 1)); }, disabled: curPage <= 1, style: pgBtn(curPage <= 1) }, '‹ 上一页'),
      h('button', { onClick: function () { setPage(Math.min(totalPages, curPage + 1)); }, disabled: curPage >= totalPages, style: pgBtn(curPage >= totalPages) }, '下一页 ›'),
      h('button', { onClick: function () { setPage(totalPages); }, disabled: curPage >= totalPages, style: pgBtn(curPage >= totalPages) }, '»'));
  }

  function sumCard(key, icon, label, total, n, color) {
    var on = tab === 'list' && filt === key;
    return h('div', { onClick: function () { setFiltSafe(on ? 'all' : key); }, style: { flex: '1 1 220px', minWidth: 200, border: '1px solid ' + (on ? color : C.line), background: on ? (color + '14') : '#fff', borderRadius: 12, padding: '12px 16px', cursor: 'pointer' } },
      h('div', { style: { fontSize: 12, color: C.sec } }, icon + ' ' + label + ' · 点击只看该仓'),
      h('div', { style: { display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 2 } },
        h('span', { style: { fontSize: 26, fontWeight: 700, color: color } }, total),
        h('span', { style: { fontSize: 12, color: C.sec } }, n + ' 款')));
  }

  function card(p) {
    var s = Number(p.stock_qty || 0), thr = Number(p.stock_alert_threshold || 5);
    var col = '#16a34a', txt = '充足';
    if (s <= 0) { col = '#dc2626'; txt = '缺货'; } else if (s <= thr) { col = '#f59e0b'; txt = '低'; }
    var age = _invAgeDays(p);
    var plat = Array.isArray(p.platform_skus) ? p.platform_skus : [];
    var stale = s > 0 && age != null && age >= 90;
    var isTrash = filt === 'trash';
    return h('div', { key: p.id, style: { border: '1px solid ' + C.line, borderRadius: 12, overflow: 'hidden', background: '#fff', display: 'flex', flexDirection: 'column' } },
      h('div', { style: { position: 'relative', aspectRatio: '1/1', background: '#faf9f7', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
        p.image_url
          ? h('img', { src: (window.__imgThumb ? window.__imgThumb(p.image_url, 300, 58) : p.image_url), 'data-full': p.image_url, loading: 'lazy', onClick: function () { setLb({ url: p.image_url, cap: (p.name_cn || '') + ' ' + (p.sku || '') }); }, style: { width: '100%', height: '100%', objectFit: 'cover', cursor: 'zoom-in', display: 'block' } })
          : h('span', { style: { fontSize: 30, color: '#9c9690' } }, '📦'),
        h('span', { style: { position: 'absolute', top: 6, left: 6, background: col, color: '#fff', fontSize: 11, padding: '2px 8px', borderRadius: 10, fontWeight: 600 } }, txt + ' ' + s)),
      h('div', { style: { padding: '8px 10px 10px' } },
        h('div', { style: { fontSize: 13, fontWeight: 600, lineHeight: 1.35, color: C.ink, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }, title: p.name_cn || '' }, p.name_cn || '(无名)'),
        h('div', { style: { fontSize: 11.5, color: C.sec, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, '内部 SKU:' + (p.sku || '-')),
        age != null ? h('div', { style: { fontSize: 11.5, marginTop: 2, color: stale ? '#b45309' : C.sec } }, (stale ? '🐢 ' : '库龄 ') + age + '天') : null,
        h('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4, fontSize: 11.5, fontWeight: 600 } },
          h('span', { style: { color: '#0369a1' }, title: '国内仓' }, '🏠 国内 ' + (p.stock_qty_domestic != null ? p.stock_qty_domestic : '-')),
          h('span', { style: { color: '#7c3aed' }, title: '海外仓' }, '✈️ 海外 ' + (p.stock_qty_overseas != null ? p.stock_qty_overseas : '-')),
          Number(p.stock_qty_in_transit || 0) > 0 ? h('span', { style: { color: '#b45309' }, title: '在途(已下单未到仓)' }, '🚚 在途 ' + p.stock_qty_in_transit) : null),
        !plat.length ? h('div', { style: { fontSize: 11, marginTop: 4, color: '#b45309' } }, '🔗 未绑定平台SKU · 下单不会自动扣减') : null,
        (p.price_usd != null && p.price_usd !== '' || p.variant_color || p.color_temp)
          ? h('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 3, fontSize: 11, alignItems: 'center' } },
              p.price_usd != null && p.price_usd !== '' ? h('span', { style: { color: '#16a34a', fontWeight: 600 } }, '$ ' + p.price_usd) : null,
              p.variant_color ? h('span', { style: { color: C.sec, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '55%' }, title: p.variant_color }, '🎨 ' + p.variant_color) : null,
              p.color_temp ? h('span', { style: { color: C.sec, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '55%' }, title: p.color_temp }, '💡 ' + p.color_temp) : null)
          : null,
        h('div', { style: { display: 'flex', gap: 6, marginTop: 8 } },
          isTrash
            ? h('button', { onClick: function () { restoreItem(p); }, style: { flex: 1, padding: '6px 0', fontSize: 12, border: '1px solid ' + C.line, borderRadius: 8, background: '#fff', color: '#0369a1', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600 } }, '♻️ 恢复')
            : h('button', { onClick: function () { openEdit(p); }, style: { flex: 1, padding: '6px 0', fontSize: 12, border: 'none', borderRadius: 8, background: C.accent, color: '#fff', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 600 } }, '✏️ 入库/出库/调整'))));
  }

  // ── 编辑弹窗 ──
  function editModal() {
    if (!editP) return null;
    var p = editP;
    var dom = Number(p.stock_qty_domestic || 0), ovs = Number(p.stock_qty_overseas || 0);
    var input = { width: '100%', padding: '8px 10px', fontSize: 13, border: '1px solid ' + C.line, borderRadius: 8, fontFamily: 'inherit', boxSizing: 'border-box' };
    function whBtn(w, label, val) {
      var on = eWh === w;
      return h('button', { onClick: function () { setEWh(w); }, style: { flex: 1, padding: '8px 0', fontSize: 12.5, border: '1px solid ' + (on ? C.accent : C.line), background: on ? 'rgba(37,99,235,.08)' : '#fff', color: on ? C.accent : C.sec, borderRadius: 8, cursor: 'pointer', fontFamily: 'inherit', fontWeight: on ? 600 : 400 } }, label + ' (' + val + ')');
    }
    function opBtn(o, label) {
      var on = eOp === o;
      var clr = o === 'inbound' ? '#16a34a' : o === 'outbound' ? '#dc2626' : '#7c3aed';
      return h('button', { onClick: function () { setEOp(o); setEQty(''); }, style: { flex: 1, padding: '8px 0', fontSize: 13, border: '1px solid ' + (on ? clr : C.line), background: on ? (clr + '14') : '#fff', color: on ? clr : C.sec, borderRadius: 8, cursor: 'pointer', fontFamily: 'inherit', fontWeight: on ? 700 : 400 } }, label);
    }
    var traceTypeLabel = { inbound: '➕入库', order_deduct: '🛒订单扣减', manual_adjust: '✏️调整/出库' };
    return h('div', { onClick: function (e) { if (e.target === e.currentTarget) setEditP(null); }, style: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,.45)', zIndex: 2147483600, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '40px 16px', overflowY: 'auto' } },
      h('div', { style: { background: '#fff', borderRadius: 14, width: 'min(560px,100%)', boxShadow: '0 12px 40px rgba(0,0,0,.2)', overflow: 'hidden' } },
        h('div', { style: { padding: '14px 18px', borderBottom: '1px solid ' + C.line, display: 'flex', alignItems: 'center', gap: 10 } },
          p.image_url ? h('img', { src: (window.__imgThumb ? window.__imgThumb(p.image_url, 120, 44) : p.image_url), style: { width: 44, height: 44, borderRadius: 8, objectFit: 'cover' } }) : h('span', { style: { fontSize: 26 } }, '📦'),
          h('div', { style: { flex: 1, minWidth: 0 } },
            h('div', { style: { fontSize: 15, fontWeight: 700, color: C.ink, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, p.name_cn || '(无名)'),
            h('div', { style: { fontSize: 12, color: C.sec } }, '内部 SKU:' + (p.sku || '-'))),
          h('button', { onClick: function () { setEditP(null); }, style: { border: 'none', background: 'transparent', fontSize: 20, cursor: 'pointer', color: C.sec } }, '×')),
        h('div', { style: { padding: '16px 18px' } },
          h('div', { style: { display: 'flex', gap: 14, marginBottom: 12, fontSize: 14, fontWeight: 700 } },
            h('span', { style: { color: '#0369a1' } }, '🏠 国内 ' + dom),
            h('span', { style: { color: '#7c3aed' } }, '✈️ 海外 ' + ovs),
            h('span', { style: { color: C.sec, fontWeight: 400, marginLeft: 'auto', fontSize: 12 } }, '总 ' + Number(p.stock_qty || 0) + (Number(p.stock_qty_in_transit || 0) > 0 ? ' · 在途 ' + p.stock_qty_in_transit : ''))),
          h('div', { style: { fontSize: 12, color: C.sec, marginBottom: 4 } }, '① 操作'),
          h('div', { style: { display: 'flex', gap: 8, marginBottom: 12 } }, opBtn('inbound', '➕ 入库'), opBtn('outbound', '➖ 出库'), opBtn('adjust', '✏️ 调整为')),
          h('div', { style: { fontSize: 12, color: C.sec, marginBottom: 4 } }, '② 仓库'),
          h('div', { style: { display: 'flex', gap: 8, marginBottom: 12 } }, whBtn('overseas', '✈️ 海外仓', ovs), whBtn('domestic', '🏠 国内仓', dom)),
          h('div', { style: { fontSize: 12, color: C.sec, marginBottom: 4 } }, eOp === 'adjust' ? '③ 把该仓库存改为' : '③ 数量'),
          h('div', { style: { display: 'flex', gap: 8, alignItems: 'center', marginBottom: 14 } },
            h('input', { type: 'number', min: 0, value: eQty, onChange: function (e) { setEQty(e.target.value); }, placeholder: eOp === 'adjust' ? '新的库存数' : '数量', style: Object.assign({}, input, { flex: 1 }) }),
            h('button', { disabled: busy, onClick: function () {
              var amt = parseInt(eQty, 10);
              if (isNaN(amt) || amt < 0) { toast('请输入数量', 'error'); return; }
              if (eOp !== 'adjust' && amt <= 0) { toast('数量要大于 0', 'error'); return; }
              applyStockOp(p, eOp, eWh, amt);
            }, style: { padding: '8px 18px', fontSize: 13, border: 'none', borderRadius: 8, background: busy ? '#94a3b8' : C.accent, color: '#fff', cursor: busy ? 'default' : 'pointer', fontFamily: 'inherit', fontWeight: 700 } }, busy ? '处理中…' : '确认')),
          h('div', { style: { fontSize: 12, color: C.sec, margin: '4px 0 6px', borderTop: '1px solid ' + C.line, paddingTop: 10 } }, '🕓 操作留痕(近 50 条)'),
          trace == null
            ? h('div', { style: { fontSize: 12, color: C.sec, padding: '8px 0' } }, '加载中…')
            : (trace.length === 0
              ? h('div', { style: { fontSize: 12, color: C.sec, padding: '8px 0' } }, '暂无记录')
              : h('div', { style: { maxHeight: 200, overflowY: 'auto', border: '1px solid ' + C.line, borderRadius: 8 } },
                  trace.map(function (m, i) {
                    return h('div', { key: i, style: { display: 'flex', gap: 8, alignItems: 'center', padding: '6px 10px', borderBottom: i < trace.length - 1 ? '1px solid #f1f1f1' : 'none', fontSize: 12 } },
                      h('span', { style: { width: 96, color: C.sec } }, (traceTypeLabel[m.movement_type] || m.movement_type || '')),
                      h('span', { style: { width: 52, fontWeight: 700, color: Number(m.qty_change) >= 0 ? '#16a34a' : '#dc2626' } }, (Number(m.qty_change) >= 0 ? '+' : '') + m.qty_change),
                      h('span', { style: { width: 60, color: C.sec } }, '→' + m.qty_after),
                      h('span', { style: { flex: 1, color: C.sec, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }, title: (m.operator || '') + ' ' + (m.note || '') }, '👤' + (m.operator || '-') + (m.note ? ' · ' + m.note : '')),
                      h('span', { style: { color: '#aaa', whiteSpace: 'nowrap' } }, (m.created_at || '').slice(5, 16).replace('T', ' ')));
                  }))))));
  }

  // ── 出库流水页(stock_movements)──
  function outboundView() {
    var list = moves || [];
    var sumOvs = 0, sumDom = 0, sumNone = 0;
    list.forEach(function (m) { var qn = Number(m.qty || 0); if (m.warehouse === 'overseas') sumOvs += qn; else if (m.warehouse === 'domestic') sumDom += qn; else sumNone += qn; });
    var th = { textAlign: 'left', padding: '8px 10px', fontSize: 12, color: C.sec, fontWeight: 600, borderBottom: '1px solid ' + C.line, whiteSpace: 'nowrap' };
    var tdS = { padding: '8px 10px', fontSize: 12.5, borderBottom: '1px solid #f1f1f1', verticalAlign: 'top' };
    return h('div', null,
      h('div', { style: { display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 10 } },
        h('span', { style: { fontSize: 13, color: '#7c3aed', fontWeight: 600 } }, '✈️ 海外出库 ' + sumOvs),
        h('span', { style: { fontSize: 13, color: '#0369a1', fontWeight: 600 } }, '🏠 国内出库 ' + sumDom),
        sumNone ? h('span', { style: { fontSize: 13, color: '#b45309', fontWeight: 600 } }, '⏳ 待标仓 ' + sumNone) : null,
        h('span', { style: { fontSize: 12, color: C.sec, marginLeft: 'auto' } }, '共 ' + list.length + ' 条(近 500)')),
      moves == null
        ? h('div', { style: { padding: 40, textAlign: 'center', color: C.sec } }, '加载中…')
        : (list.length === 0
          ? h('div', { style: { padding: 40, textAlign: 'center', color: C.sec } }, '📤 暂无出库记录')
          : h('div', { style: { overflowX: 'auto', border: '1px solid ' + C.line, borderRadius: 10 } },
              h('table', { style: { width: '100%', borderCollapse: 'collapse', minWidth: 720 } },
                h('thead', null, h('tr', null,
                  h('th', { style: th }, '产品 (内部SKU ← 平台SKU)'), h('th', { style: th }, '店铺'), h('th', { style: th }, '订单号'), h('th', { style: th }, '数量'), h('th', { style: th }, '出库仓'), h('th', { style: th }, '操作人'), h('th', { style: th }, '时间'))),
                h('tbody', null, list.map(function (m, i) {
                  return h('tr', { key: m.id || i },
                    h('td', { style: tdS }, h('div', { style: { fontWeight: 600, color: C.ink } }, m.product_name || ''), h('div', { style: { color: C.sec, fontSize: 11.5 } }, (m.internal_sku || '') + (m.platform_sku && m.platform_sku !== m.internal_sku ? ' ← ' + m.platform_sku : ''))),
                    h('td', { style: tdS }, m.store_label || m.shop_domain || '—'),
                    h('td', { style: tdS }, m.order_no || '—'),
                    h('td', { style: Object.assign({}, tdS, { fontWeight: 700, color: '#dc2626' }) }, '-' + (m.qty || 0)),
                    h('td', { style: tdS }, m.warehouse === 'overseas' ? '✈️ 海外' : m.warehouse === 'domestic' ? '🏠 国内' : '⏳ 待标'),
                    h('td', { style: tdS }, m.created_by || '—'),
                    h('td', { style: Object.assign({}, tdS, { color: '#aaa', whiteSpace: 'nowrap' }) }, (m.moved_at || '').slice(0, 16).replace('T', ' ')));
                })))))); 
  }

  return h('div', { className: 'paper rounded-2xl', style: { padding: '16px 18px' } },
    h('div', { style: { display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 12 } },
      h('div', { className: 'font-display', style: { fontSize: 20, fontWeight: 600, flex: 1, minWidth: 160 } }, '📦 库存仓库',
        h('span', { style: { fontSize: 12, fontWeight: 400, color: C.sec, marginLeft: 8 } }, '多店同款绑一个内部SKU · 分国内/海外仓 · 数据与跟单同源')),
      h('button', { onClick: function () { load(); loadToday(); if (tab === 'outbound') loadMoves(); if (filt === 'trash') loadTrash(); }, style: { padding: '6px 12px', fontSize: 12, border: '1px solid ' + C.line, borderRadius: 8, background: '#fff', cursor: 'pointer', fontFamily: 'inherit' } }, '🔄 刷新')),

    // 仓库合计卡
    h('div', { style: { display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 12 } },
      sumCard('domestic', '🏠', '国内仓合计', summary.dom, summary.domN, '#0369a1'),
      sumCard('overseas', '✈️', '海外仓合计', summary.ovs, summary.ovsN, '#7c3aed')),

    // chip 行
    h('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', marginBottom: 8 } },
      chip('all', '全部'),
      chip('restock', '📊 备货建议', true),
      h('button', { onClick: function () { setTab('outbound'); if (moves == null) loadMoves(); }, style: { padding: '6px 13px', fontSize: 12.5, border: '1px solid ' + (tab === 'outbound' ? C.accent : C.line), background: tab === 'outbound' ? 'rgba(37,99,235,.08)' : '#fff', color: tab === 'outbound' ? C.accent : C.sec, borderRadius: 16, cursor: 'pointer', fontFamily: 'inherit', fontWeight: tab === 'outbound' ? 600 : 400, whiteSpace: 'nowrap' } }, '📤 出库流水'),
      chip('domestic', '🏠 有国内仓'), chip('overseas', '✈️ 有海外仓'),
      chip('low', '⚠️ 低库存'), chip('out', '🔴 缺货'),
      chip('today', '📅 今日消耗'), chip('unbound', '🔗 未绑定平台SKU'),
      chip('trash', '🗑 回收站')),

    // 搜索 + 店铺 + 库龄 + 排序
    tab === 'list' ? h('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', marginBottom: 8 } },
      h('input', { type: 'text', value: q, onChange: function (e) { setQ(e.target.value); setPage(1); }, placeholder: '🔍 搜 SKU / 名称 / 供应商 / 平台SKU', style: { flex: 1, minWidth: 200, padding: '8px 12px', fontSize: 13, border: '1px solid ' + C.line, borderRadius: 18, fontFamily: 'inherit' } }),
      h('select', { value: shopFilt, onChange: function (e) { setShopFilt(e.target.value); setPage(1); }, style: { padding: '7px 10px', fontSize: 12.5, border: '1px solid ' + C.line, borderRadius: 8, fontFamily: 'inherit' } },
        [h('option', { key: '_all', value: '' }, '🏪 全部店铺')].concat(shopList.map(function (s) { return h('option', { key: s, value: s }, s); }))),
      h('select', { value: sortKey + ':' + sortDir, onChange: function (e) { var v = e.target.value.split(':'); setSortKey(v[0]); setSortDir(v[1]); setPage(1); }, style: { padding: '7px 10px', fontSize: 12.5, border: '1px solid ' + C.line, borderRadius: 8, fontFamily: 'inherit' } },
        h('option', { value: 'stock_qty:asc' }, '库存 少→多'),
        h('option', { value: 'stock_qty:desc' }, '库存 多→少'),
        h('option', { value: 'age:desc' }, '库龄 久→新'),
        h('option', { value: 'age:asc' }, '库龄 新→久'),
        h('option', { value: 'sku:asc' }, 'SKU 升序'),
        h('option', { value: 'name_cn:asc' }, '名称 升序'),
        h('option', { value: 'default_supplier:asc' }, '供应商 升序'))) : null,

    // 库龄 chip
    tab === 'list' ? h('div', { style: { display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center', marginBottom: 10 } },
      h('span', { style: { fontSize: 12, color: C.sec, marginRight: 2 } }, '库龄:'),
      [['any', '不限'], ['30', '>30天'], ['60', '>60天'], ['90', '>90天'], ['180', '>半年'], ['365', '>1年']].map(function (a) {
        var on = ageFilt === a[0];
        return h('button', { key: a[0], onClick: function () { setAgeFilt(a[0]); setPage(1); }, style: { padding: '5px 11px', fontSize: 12, border: '1px solid ' + (on ? C.accent : C.line), background: on ? 'rgba(37,99,235,.08)' : '#fff', color: on ? C.accent : C.sec, borderRadius: 14, cursor: 'pointer', fontFamily: 'inherit', fontWeight: on ? 600 : 400 } }, a[1]);
      })) : null,

    err ? h('div', { style: { padding: 14, color: '#dc2626', fontSize: 13 } }, err) : null,

    tab === 'outbound'
      ? outboundView()
      : h('div', null,
          filt === 'restock' ? h('div', { style: { fontSize: 12, color: '#b45309', background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 8, padding: '8px 12px', marginBottom: 8 } }, '📊 备货建议:库存 ≤ 预警线 且 无在途补货的产品(销量驱动版待跟单提供 shopify_orders 字段后接入)') : null,
          pager('top'),
          loading
            ? h('div', { style: { padding: 40, textAlign: 'center', color: C.sec } }, '加载中…')
            : (paged.length === 0
              ? h('div', { style: { padding: 40, textAlign: 'center', color: C.sec } }, '📦 没有匹配的库存')
              : h('div', { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr))', gap: 12 } }, paged.map(card))),
          pager('bottom')),

    editModal(),
    lb ? h('div', { onClick: function () { setLb(null); }, style: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,.85)', zIndex: 2147483647, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: 24, cursor: 'zoom-out' } },
      h('img', { src: (window.__imgFull ? window.__imgFull(lb.url) : lb.url), onClick: function (e) { e.stopPropagation(); }, style: { maxWidth: '92vw', maxHeight: '82vh', objectFit: 'contain', borderRadius: 8 } }),
      h('div', { style: { color: '#fff', fontSize: 13, marginTop: 12 } }, lb.cap || ''),
      h('div', { style: { color: '#bbb', fontSize: 12, marginTop: 4 } }, '点击任意处关闭')) : null);
}
