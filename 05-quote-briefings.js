// ════════════════════════════════════════════════════════════════════
// 📝 报价 + 纪要 · fix28-96
// APP_VERSION: 2026.05.29-fix96
// ════════════════════════════════════════════════════════════════════
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
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
// 📝 报价 + 纪要 · fix28-96
// APP_VERSION: 2026.05.29-fix96
// ════════════════════════════════════════════════════════════════════

var QuoteModule = function QuoteModule(_ref) {
  var user = _ref.user,
    toast = _ref.toast;
  var userParam = encodeURIComponent((user.name || '') + (user.alias ? ' ' + user.alias : ''));
  var sameDirUrl = "quotation.html#user=".concat(userParam);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    openExternal = _useState2[0],
    setOpenExternal = _useState2[1];
  var iframeRef = React.useRef(null);
  var _useState3 = useState('calc(100vh - 100px)'),
    _useState4 = _slicedToArray(_useState3, 2),
    iframeHeight = _useState4[0],
    setIframeHeight = _useState4[1];
  useEffect(function () {
    var handler = function handler(e) {
      var _e$data, _e$data2;
      if (((_e$data = e.data) === null || _e$data === void 0 ? void 0 : _e$data.type) === 'iframe-resize' && ((_e$data2 = e.data) === null || _e$data2 === void 0 ? void 0 : _e$data2.source) === 'quotation') {
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
  }, "\uD83D\uDCC4 \u62A5\u4EF7\u5355"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8
    }
  }, "\xB7 12 \u5BB6\u516C\u53F8\u9884\u8BBE \xB7 7 \u79CD\u8BED\u8A00 \xB7 4 \u79CD\u6587\u6863 \xB7 \u6570\u636E\u4E91\u540C\u6B65")), /*#__PURE__*/React.createElement("div", {
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
      background: '#fff',
      display: 'block',
      transition: 'height .15s',
      minHeight: 600
    },
    title: "\u62A5\u4EF7\u5355",
    allow: "clipboard-read; clipboard-write"
  }));
};

// ============================================================
// 🆕 EventsModule - 工作主线管理中心（售后/补件/退款汇总 + 导出）
// ============================================================
// ============================================================
// 📢 BriefingCard - 员工首页展示本周会议要点卡片
// ============================================================
var BriefingCard = function BriefingCard(_ref2) {
  var user = _ref2.user,
    toast = _ref2.toast;
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    briefing = _useState6[0],
    setBriefing = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    expanded = _useState8[0],
    setExpanded = _useState8[1];
  var _useState9 = useState(true),
    _useState0 = _slicedToArray(_useState9, 2),
    loading = _useState0[0],
    setLoading = _useState0[1];
  var _useState1 = useState(null),
    _useState10 = _slicedToArray(_useState1, 2),
    previewFile = _useState10[0],
    setPreviewFile = _useState10[1];

  // 加载最新已发布的会议纪要（置顶优先 + 最新）
  var loadLatest = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _yield$CLOUD$client$f, data, error, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (CLOUD.client) {
              _context.n = 1;
              break;
            }
            setLoading(false);
            return _context.a(2);
          case 1:
            _context.p = 1;
            _context.n = 2;
            return CLOUD.client.from('weekly_briefings').select('*').eq('published', true).order('pinned', {
              ascending: false
            }).order('created_at', {
              ascending: false
            }).limit(1);
          case 2:
            _yield$CLOUD$client$f = _context.v;
            data = _yield$CLOUD$client$f.data;
            error = _yield$CLOUD$client$f.error;
            if (!error && data && data.length > 0) setBriefing(data[0]);
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.warn('加载会议要点失败', _t);
          case 4:
            setLoading(false);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function loadLatest() {
      return _ref3.apply(this, arguments);
    };
  }();
  useEffect(function () {
    loadLatest();
  }, []);

  // 标记已读
  var markRead = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var readBy, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (briefing) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            readBy = _objectSpread(_objectSpread({}, briefing.read_by || {}), {}, _defineProperty({}, user.id, new Date().toISOString()));
            _context2.p = 2;
            _context2.n = 3;
            return CLOUD.client.from('weekly_briefings').update({
              read_by: readBy
            }).eq('id', briefing.id);
          case 3:
            setBriefing(_objectSpread(_objectSpread({}, briefing), {}, {
              read_by: readBy
            }));
            _context2.n = 5;
            break;
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            console.warn('标记已读失败', _t2);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[2, 4]]);
    }));
    return function markRead() {
      return _ref4.apply(this, arguments);
    };
  }();
  if (loading) return null;
  if (!briefing) return null; // 没有发布的纪要就不显示

  var isRead = briefing.read_by && briefing.read_by[user.id];
  var highlights = briefing.highlights || [];
  var workPlans = briefing.work_plans || [];
  var attachments = briefing.attachments || [];
  var myPlans = workPlans.filter(function (p) {
    return p.assignee_id === user.id;
  });
  var otherPlans = workPlans.filter(function (p) {
    return p.assignee_id !== user.id;
  });

  // 计算几天前发布
  var daysAgo = briefing.published_at ? Math.floor((Date.now() - new Date(briefing.published_at).getTime()) / 86400000) : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl fade-in",
    style: {
      overflow: 'hidden',
      background: briefing.pinned ? 'linear-gradient(135deg, #fef9c3 0%, #fef3c7 100%)' : 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
      border: '1.5px solid ' + (briefing.pinned ? '#fbbf24' : '#7dd3fc')
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    },
    onClick: function onClick() {
      return setExpanded(function (v) {
        return !v;
      });
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      flexShrink: 0
    }
  }, briefing.pinned ? '📌' : '📢'), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: briefing.pinned ? '#854d0e' : '#075985'
    }
  }, briefing.week_label), !isRead && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '1px 6px',
      background: '#dc2626',
      color: 'white',
      borderRadius: 8,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u672A\u8BFB"), myPlans.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '1px 6px',
      background: '#dc2626',
      color: 'white',
      borderRadius: 8,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u6211\u6709 ", myPlans.length, " \u9879\u4EFB\u52A1"), daysAgo !== null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: briefing.pinned ? '#a16207' : '#0369a1'
    }
  }, daysAgo === 0 ? '今天' : daysAgo === 1 ? '昨天' : "".concat(daysAgo, " \u5929\u524D"), "\u53D1\u5E03")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: briefing.pinned ? '#7c2d12' : '#0c4a6e',
      marginTop: 3,
      lineHeight: 1.3,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: expanded ? 'normal' : 'nowrap'
    }
  }, briefing.title))), /*#__PURE__*/React.createElement("button", {
    style: {
      padding: '5px 12px',
      background: briefing.pinned ? '#fbbf24' : '#0369a1',
      color: briefing.pinned ? '#7c2d12' : 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, expanded ? '▲ 收起' : '▼ 查看详情')), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 18px 18px',
      borderTop: '1px solid ' + (briefing.pinned ? '#fcd34d' : '#bae6fd')
    }
  }, myPlans.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: 12,
      background: 'rgba(220,38,38,.06)',
      border: '1px solid #fca5a5',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#991b1b',
      marginBottom: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, "\uD83C\uDFAF \u6211\u7684\u5DE5\u4F5C\u4EFB\u52A1\uFF08", myPlans.length, "\uFF09"), myPlans.map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        padding: '6px 0',
        borderBottom: '1px dashed #fca5a5',
        fontSize: 13,
        color: '#7f1d1d',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        marginTop: 2
      }
    }, p.done ? '✅' : '⬜'), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, p.text, p.deadline && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        fontSize: 11,
        color: '#dc2626',
        fontWeight: 600
      }
    }, "\xB7 \u622A\u6B62 ", p.deadline)));
  })), highlights.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: briefing.pinned ? '#7c2d12' : '#0c4a6e',
      marginBottom: 6
    }
  }, "\u2B50 \u672C\u5468\u91CD\u70B9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, highlights.map(function (h, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: h.id || i,
      style: {
        padding: '7px 10px',
        background: 'white',
        borderRadius: 6,
        fontSize: 13,
        color: 'var(--ink)',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 8,
        borderLeft: '3px solid ' + (h.priority === 'high' ? '#dc2626' : briefing.pinned ? '#fbbf24' : '#0369a1')
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        fontWeight: 600,
        color: h.priority === 'high' ? '#dc2626' : 'var(--ink-3)'
      }
    }, h.priority === 'high' ? '🔥' : '•'), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, h.tag && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 6px',
        background: briefing.pinned ? '#fef3c7' : '#e0f2fe',
        color: briefing.pinned ? '#854d0e' : '#075985',
        borderRadius: 4,
        fontSize: 10,
        fontWeight: 600,
        marginRight: 6
      }
    }, h.tag), h.text));
  }))), otherPlans.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: briefing.pinned ? '#7c2d12' : '#0c4a6e',
      marginBottom: 6
    }
  }, "\uD83D\uDCCB \u56E2\u961F\u5DE5\u4F5C\u5206\u914D\uFF08", otherPlans.length, "\uFF09"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, otherPlans.map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        padding: '5px 10px',
        background: 'rgba(255,255,255,.6)',
        borderRadius: 5,
        fontSize: 12,
        color: 'var(--ink-2)',
        display: 'flex',
        alignItems: 'flex-start',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flexShrink: 0,
        marginTop: 1
      }
    }, p.done ? '✅' : '⬜'), /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 6px',
        background: briefing.pinned ? '#fef3c7' : '#e0f2fe',
        color: briefing.pinned ? '#854d0e' : '#075985',
        borderRadius: 4,
        fontSize: 10,
        fontWeight: 600,
        flexShrink: 0
      }
    }, p.assignee_name || '未分配'), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, p.text, p.deadline && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        fontSize: 10,
        color: 'var(--ink-3)'
      }
    }, "\xB7 ", p.deadline)));
  }))), briefing.content && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: briefing.pinned ? '#7c2d12' : '#0c4a6e',
      marginBottom: 6
    }
  }, "\uD83D\uDCDD \u4F1A\u8BAE\u8BE6\u60C5"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: 'white',
      borderRadius: 6,
      fontSize: 13,
      color: 'var(--ink-2)',
      whiteSpace: 'pre-wrap',
      lineHeight: 1.6
    }
  }, briefing.content)), attachments.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: briefing.pinned ? '#7c2d12' : '#0c4a6e',
      marginBottom: 6
    }
  }, "\uD83D\uDCCE \u9644\u4EF6 (", attachments.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: 6
    }
  }, attachments.map(function (a, i) {
    return /*#__PURE__*/React.createElement(FileChip, {
      key: a.id || i,
      file: a,
      onClick: function onClick() {
        return setPreviewFile(a);
      }
    });
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      paddingTop: 10,
      borderTop: '1px dashed ' + (briefing.pinned ? '#fcd34d' : '#bae6fd'),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: briefing.pinned ? '#a16207' : '#0369a1'
    }
  }, "\u53D1\u5E03\u4EBA\uFF1A", briefing.created_by_name, " \xB7 ", (briefing.published_at || briefing.created_at || '').slice(0, 16).replace('T', ' '), briefing.read_by && Object.keys(briefing.read_by).length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8
    }
  }, "\xB7 \u5DF2\u8BFB ", Object.keys(briefing.read_by).length, " \u4EBA")), !isRead && /*#__PURE__*/React.createElement("button", {
    onClick: markRead,
    style: {
      padding: '4px 12px',
      background: 'white',
      color: briefing.pinned ? '#854d0e' : '#0369a1',
      border: '1px solid ' + (briefing.pinned ? '#fcd34d' : '#7dd3fc'),
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\u2713 \u6807\u8BB0\u5DF2\u8BFB"))), previewFile && /*#__PURE__*/React.createElement(FilePreviewModal, {
    file: previewFile,
    onClose: function onClose() {
      return setPreviewFile(null);
    }
  }));
};

// ============================================================
// 📢 BriefingsModule - 主管管理会议要点 + 员工查看历史
// ============================================================
var BriefingsModule = function BriefingsModule(_ref5) {
  var user = _ref5.user,
    employees = _ref5.employees,
    toast = _ref5.toast,
    cloudOn = _ref5.cloudOn;
  var _useState11 = useState([]),
    _useState12 = _slicedToArray(_useState11, 2),
    briefings = _useState12[0],
    setBriefings = _useState12[1];
  var _useState13 = useState(true),
    _useState14 = _slicedToArray(_useState13, 2),
    loading = _useState14[0],
    setLoading = _useState14[1];
  var _useState15 = useState(null),
    _useState16 = _slicedToArray(_useState15, 2),
    editing = _useState16[0],
    setEditing = _useState16[1]; // briefing 对象或 'new'
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var loadAll = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var list, visible, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            setLoading(true);
            _context3.p = 1;
            _context3.n = 2;
            return CLOUD.list('weekly_briefings', {
              order: {
                col: 'created_at',
                asc: false
              },
              limit: 200
            });
          case 2:
            list = _context3.v;
            // admin 看全部，员工只看已发布
            visible = isAdmin ? list || [] : (list || []).filter(function (b) {
              return b.published;
            });
            setBriefings(visible);
            _context3.n = 4;
            break;
          case 3:
            _context3.p = 3;
            _t3 = _context3.v;
            toast('❌ 加载失败：' + _t3.message);
          case 4:
            setLoading(false);
          case 5:
            return _context3.a(2);
        }
      }, _callee3, null, [[1, 3]]);
    }));
    return function loadAll() {
      return _ref6.apply(this, arguments);
    };
  }();
  useEffect(function () {
    loadAll();
  }, []);
  var handleDelete = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(id) {
      var ok;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            if (confirm('确认删除此会议纪要？')) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            _context4.n = 2;
            return CLOUD.del('weekly_briefings', id);
          case 2:
            ok = _context4.v;
            if (ok) {
              toast('✓ 已删除');
              loadAll();
            }
          case 3:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function handleDelete(_x) {
      return _ref7.apply(this, arguments);
    };
  }();
  var togglePinned = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(b) {
      var res;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return CLOUD.upsert('weekly_briefings', _objectSpread(_objectSpread({}, b), {}, {
              pinned: !b.pinned
            }));
          case 1:
            res = _context5.v;
            if (res) {
              toast(b.pinned ? '✓ 已取消置顶' : '✓ 已置顶');
              loadAll();
            }
          case 2:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function togglePinned(_x2) {
      return _ref8.apply(this, arguments);
    };
  }();
  var togglePublished = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(b) {
      var now, updates, res;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            now = new Date().toISOString();
            updates = _objectSpread(_objectSpread({}, b), {}, {
              published: !b.published
            });
            if (!b.published) updates.published_at = b.published_at || now;
            _context6.n = 1;
            return CLOUD.upsert('weekly_briefings', updates);
          case 1:
            res = _context6.v;
            if (res) {
              toast(b.published ? '✓ 已撤回（员工看不到了）' : '✓ 已发布（所有员工首页可见）');
              loadAll();
            }
          case 2:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function togglePublished(_x3) {
      return _ref9.apply(this, arguments);
    };
  }();

  // 🆕 fix9b: 主管快捷标记会议纪要为"已处理"
  var toggleHandled = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(b) {
      var now, userName, updates, res;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            now = new Date().toISOString();
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            updates = b.handled_at ? _objectSpread(_objectSpread({}, b), {}, {
              handled_at: null,
              handled_by: null,
              handled_by_name: null
            }) : _objectSpread(_objectSpread({}, b), {}, {
              handled_at: now,
              handled_by: user.id,
              handled_by_name: userName
            });
            _context7.n = 1;
            return CLOUD.upsert('weekly_briefings', updates);
          case 1:
            res = _context7.v;
            if (res) {
              toast(b.handled_at ? '↩ 已撤销「已处理」' : '✓ 已标记处理完毕');
              loadAll();
            } else alertSaveError('标记会议纪要');
          case 2:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function toggleHandled(_x4) {
      return _ref0.apply(this, arguments);
    };
  }();
  if (loading) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center'
    }
  }, "\u23F3 \u52A0\u8F7D\u4E2D...");
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4 fade-in"
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
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, "\uD83D\uDCE2 \u4F1A\u8BAE\u7EAA\u8981 / \u5DE5\u4F5C\u8BA1\u5212"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, isAdmin ? "\u5171 ".concat(briefings.length, " \u6761 \xB7 \u5DF2\u53D1\u5E03 ").concat(briefings.filter(function (b) {
    return b.published;
  }).length, " \u6761 \xB7 \u4E3B\u7BA1\u53EF\u521B\u5EFA/\u7F16\u8F91/\u53D1\u5E03") : "\u5171 ".concat(briefings.length, " \u6761\u5DF2\u53D1\u5E03\u7EAA\u8981 \xB7 \u70B9\u51FB\u67E5\u770B\u5B8C\u6574\u5185\u5BB9"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: loadAll,
    className: "btn-sec",
    style: {
      padding: '6px 12px',
      fontSize: 12
    }
  }, "\uD83D\uDD04 \u5237\u65B0"), isAdmin && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEditing('new');
    },
    className: "btn-pri",
    style: {
      padding: '6px 14px',
      fontSize: 12
    }
  }, "+ \u65B0\u5EFA\u4F1A\u8BAE\u8981\u70B9")))), briefings.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-12 fade-in",
    style: {
      textAlign: 'center',
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDCCB \u6682\u65E0\u4F1A\u8BAE\u7EAA\u8981", isAdmin && ' · 点右上角"新建会议要点"开始') : /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, briefings.map(function (b) {
    return /*#__PURE__*/React.createElement(BriefingItem, {
      key: b.id,
      briefing: b,
      user: user,
      isAdmin: isAdmin,
      onEdit: function onEdit() {
        return setEditing(b);
      },
      onDelete: function onDelete() {
        return handleDelete(b.id);
      },
      onTogglePin: function onTogglePin() {
        return togglePinned(b);
      },
      onTogglePub: function onTogglePub() {
        return togglePublished(b);
      },
      onToggleHandled: function onToggleHandled() {
        return toggleHandled(b);
      }
    });
  })), editing && /*#__PURE__*/React.createElement(BriefingEditor, {
    briefing: editing === 'new' ? null : editing,
    user: user,
    employees: employees,
    onClose: function onClose() {
      return setEditing(null);
    },
    onSaved: function onSaved() {
      setEditing(null);
      loadAll();
    },
    toast: toast
  }));
};

// 会议纪要列表项
var BriefingItem = function BriefingItem(_ref1) {
  var briefing = _ref1.briefing,
    user = _ref1.user,
    isAdmin = _ref1.isAdmin,
    onEdit = _ref1.onEdit,
    onDelete = _ref1.onDelete,
    onTogglePin = _ref1.onTogglePin,
    onTogglePub = _ref1.onTogglePub,
    onToggleHandled = _ref1.onToggleHandled;
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    expanded = _useState18[0],
    setExpanded = _useState18[1];
  var _useState19 = useState(null),
    _useState20 = _slicedToArray(_useState19, 2),
    itemPreview = _useState20[0],
    setItemPreview = _useState20[1];
  var highlights = briefing.highlights || [];
  var workPlans = briefing.work_plans || [];
  var attachments = briefing.attachments || [];
  var myPlans = workPlans.filter(function (p) {
    return p.assignee_id === user.id;
  });
  var isRead = briefing.read_by && briefing.read_by[user.id];
  var isHandled = !!briefing.handled_at; // 🆕 fix9b

  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl fade-in",
    style: {
      overflow: 'hidden',
      border: '1.5px solid ' + (isHandled ? '#86efac' : briefing.pinned ? '#fbbf24' : briefing.published ? '#7dd3fc' : '#e5e5e5'),
      background: isHandled ? '#f0fdf4' : briefing.pinned ? '#fffbeb' : briefing.published ? 'white' : '#fafafa',
      opacity: briefing.published ? isHandled ? 0.85 : 1 : 0.7
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 10
    },
    onClick: function onClick() {
      return setExpanded(function (v) {
        return !v;
      });
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, isHandled && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      padding: '2px 8px',
      background: '#16a34a',
      color: 'white',
      borderRadius: 10,
      fontWeight: 600
    }
  }, "\u2713 \u5DF2\u5904\u7406"), briefing.pinned && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "\uD83D\uDCCC"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: briefing.pinned ? '#854d0e' : 'var(--ink)'
    }
  }, briefing.week_label), !briefing.published && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '1px 6px',
      background: '#e5e5e5',
      color: '#666',
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u8349\u7A3F"), briefing.published && !isRead && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '1px 6px',
      background: '#dc2626',
      color: 'white',
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u672A\u8BFB"), myPlans.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '1px 6px',
      background: '#fef2f2',
      color: '#dc2626',
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u6211 ", myPlans.length, " \u9879")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink)',
      marginTop: 3,
      textDecoration: isHandled ? 'line-through' : 'none',
      opacity: isHandled ? 0.7 : 1
    }
  }, briefing.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, briefing.created_by_name, " \xB7 ", (briefing.published_at || briefing.created_at || '').slice(0, 10), ' · ', highlights.length, " \u8981\u70B9 \xB7 ", workPlans.length, " \u4EFB\u52A1 \xB7 ", attachments.length, " \u9644\u4EF6", briefing.read_by && Object.keys(briefing.read_by).length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 \u5DF2\u8BFB ", Object.keys(briefing.read_by).length, " \u4EBA"), isHandled && /*#__PURE__*/React.createElement(React.Fragment, null, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#16a34a',
      fontWeight: 600
    }
  }, briefing.handled_by_name, " \u5DF2\u5904\u7406\u4E8E ", briefing.handled_at.slice(0, 10))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      alignItems: 'center',
      flexShrink: 0
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, isAdmin && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: onToggleHandled,
    title: isHandled ? '撤销已处理' : '标记已处理(主管确认这次会议要点都跟进了)',
    style: {
      padding: '4px 10px',
      background: isHandled ? '#dcfce7' : '#16a34a',
      color: isHandled ? '#15803d' : 'white',
      border: '1px solid ' + (isHandled ? '#86efac' : '#16a34a'),
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, isHandled ? '↩ 撤销' : '✓ 已处理'), /*#__PURE__*/React.createElement("button", {
    onClick: onTogglePub,
    title: briefing.published ? '撤回发布' : '发布给员工',
    style: {
      padding: '4px 10px',
      background: briefing.published ? '#dcfce7' : '#0369a1',
      color: briefing.published ? '#15803d' : 'white',
      border: '1px solid ' + (briefing.published ? '#86efac' : '#0369a1'),
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, briefing.published ? '✓ 已发布' : '📢 发布'), /*#__PURE__*/React.createElement("button", {
    onClick: onTogglePin,
    title: briefing.pinned ? '取消置顶' : '置顶',
    style: {
      padding: '4px 8px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: 14
    }
  }, briefing.pinned ? '📌' : '📍'), /*#__PURE__*/React.createElement("button", {
    onClick: onEdit,
    className: "btn-ghost",
    style: {
      padding: '4px 8px',
      fontSize: 11
    }
  }, "\u270F\uFE0F"), /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    className: "btn-ghost",
    style: {
      padding: '4px 8px',
      fontSize: 11,
      color: 'var(--bad)'
    }
  }, "\uD83D\uDDD1")), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    style: {
      padding: '4px 10px',
      fontSize: 11
    }
  }, expanded ? '▲' : '▼'))), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      padding: '14px 16px',
      background: 'rgba(255,255,255,.6)'
    }
  }, highlights.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 6
    }
  }, "\u2B50 \u672C\u5468\u91CD\u70B9"), highlights.map(function (h, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: h.id || i,
      style: {
        padding: '6px 10px',
        background: 'white',
        borderRadius: 5,
        fontSize: 13,
        marginBottom: 4,
        borderLeft: '3px solid ' + (h.priority === 'high' ? '#dc2626' : '#0369a1')
      }
    }, h.priority === 'high' && '🔥 ', h.tag && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 5px',
        background: '#e0f2fe',
        color: '#075985',
        borderRadius: 3,
        fontSize: 10,
        marginRight: 6
      }
    }, h.tag), h.text);
  })), workPlans.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 6
    }
  }, "\uD83D\uDCCB \u5DE5\u4F5C\u8BA1\u5212"), workPlans.map(function (p, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id || i,
      style: {
        padding: '6px 10px',
        background: 'white',
        borderRadius: 5,
        fontSize: 13,
        marginBottom: 4,
        display: 'flex',
        gap: 6,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("span", null, p.done ? '✅' : '⬜'), p.assignee_name && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 5px',
        background: '#fef3c7',
        color: '#854d0e',
        borderRadius: 3,
        fontSize: 10,
        flexShrink: 0
      }
    }, p.assignee_name), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, p.text), p.deadline && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: '#dc2626',
        flexShrink: 0
      }
    }, "\u622A\u6B62 ", p.deadline));
  })), briefing.content && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      background: 'white',
      borderRadius: 6,
      fontSize: 13,
      whiteSpace: 'pre-wrap',
      lineHeight: 1.6,
      marginBottom: 12
    }
  }, briefing.content), attachments.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: 6
    }
  }, attachments.map(function (a, i) {
    return /*#__PURE__*/React.createElement(FileChip, {
      key: a.id || i,
      file: a,
      onClick: function onClick() {
        return setItemPreview(a);
      }
    });
  }))), itemPreview && /*#__PURE__*/React.createElement(FilePreviewModal, {
    file: itemPreview,
    onClose: function onClose() {
      return setItemPreview(null);
    }
  }));
};

// 会议纪要编辑器
// 🆕 fix30: 期号格式改成 "2026年6月份 第一周" (自然月分周,跟 getDateRange 的 week_of_month 一致)
var CN_WEEK_NUMS = ['', '一', '二', '三', '四', '五'];
function getMonthWeekLabel(date) {
  var d = date instanceof Date ? date : new Date(date);
  if (isNaN(d.getTime())) return '';
  var y = d.getFullYear();
  var m = d.getMonth() + 1;
  var day = d.getDate();
  var w = Math.ceil(day / 7); // 1-5,匹配 1-7 / 8-14 / 15-21 / 22-28 / 29-end
  return "".concat(y, "\u5E74").concat(m, "\u6708\u4EFD \u7B2C").concat(CN_WEEK_NUMS[w] || w, "\u5468");
}
var BriefingEditor = function BriefingEditor(_ref10) {
  var briefing = _ref10.briefing,
    user = _ref10.user,
    employees = _ref10.employees,
    onClose = _ref10.onClose,
    onSaved = _ref10.onSaved,
    toast = _ref10.toast;
  var isEdit = !!briefing;
  var _useState21 = useState((briefing === null || briefing === void 0 ? void 0 : briefing.week_label) || getMonthWeekLabel(new Date())),
    _useState22 = _slicedToArray(_useState21, 2),
    weekLabel = _useState22[0],
    setWeekLabel = _useState22[1];
  var _useState23 = useState((briefing === null || briefing === void 0 ? void 0 : briefing.title) || ''),
    _useState24 = _slicedToArray(_useState23, 2),
    title = _useState24[0],
    setTitle = _useState24[1];
  var _useState25 = useState((briefing === null || briefing === void 0 ? void 0 : briefing.content) || ''),
    _useState26 = _slicedToArray(_useState25, 2),
    content = _useState26[0],
    setContent = _useState26[1];
  var _useState27 = useState((briefing === null || briefing === void 0 ? void 0 : briefing.highlights) || []),
    _useState28 = _slicedToArray(_useState27, 2),
    highlights = _useState28[0],
    setHighlights = _useState28[1];
  var _useState29 = useState((briefing === null || briefing === void 0 ? void 0 : briefing.work_plans) || []),
    _useState30 = _slicedToArray(_useState29, 2),
    workPlans = _useState30[0],
    setWorkPlans = _useState30[1];
  var _useState31 = useState((briefing === null || briefing === void 0 ? void 0 : briefing.attachments) || []),
    _useState32 = _slicedToArray(_useState31, 2),
    attachments = _useState32[0],
    setAttachments = _useState32[1];
  var _useState33 = useState((briefing === null || briefing === void 0 ? void 0 : briefing.pinned) || false),
    _useState34 = _slicedToArray(_useState33, 2),
    pinned = _useState34[0],
    setPinned = _useState34[1];
  var _useState35 = useState(false),
    _useState36 = _slicedToArray(_useState35, 2),
    saving = _useState36[0],
    setSaving = _useState36[1];
  var addHighlight = function addHighlight() {
    return setHighlights([].concat(_toConsumableArray(highlights), [{
      id: 'h_' + Date.now().toString(36),
      text: '',
      priority: 'normal',
      tag: ''
    }]));
  };
  var addWorkPlan = function addWorkPlan() {
    return setWorkPlans([].concat(_toConsumableArray(workPlans), [{
      id: 'p_' + Date.now().toString(36),
      text: '',
      assignee_id: '',
      assignee_name: '',
      deadline: '',
      done: false
    }]));
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var publishNow,
        now,
        payload,
        res,
        _args8 = arguments,
        _t4;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            publishNow = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : false;
            if (title.trim()) {
              _context8.n = 1;
              break;
            }
            alert('请填写会议标题');
            return _context8.a(2);
          case 1:
            if (weekLabel.trim()) {
              _context8.n = 2;
              break;
            }
            alert('请填写期号/标题');
            return _context8.a(2);
          case 2:
            setSaving(true);
            now = new Date().toISOString();
            payload = {
              week_label: weekLabel.trim(),
              title: title.trim(),
              content: content.trim() || null,
              highlights: highlights.filter(function (h) {
                return (h.text || '').trim();
              }),
              work_plans: workPlans.filter(function (p) {
                return (p.text || '').trim();
              }),
              attachments: attachments,
              pinned: pinned,
              published: publishNow || (briefing === null || briefing === void 0 ? void 0 : briefing.published) || false,
              published_at: publishNow || briefing !== null && briefing !== void 0 && briefing.published ? (briefing === null || briefing === void 0 ? void 0 : briefing.published_at) || now : null,
              created_by: (briefing === null || briefing === void 0 ? void 0 : briefing.created_by) || user.id,
              created_by_name: (briefing === null || briefing === void 0 ? void 0 : briefing.created_by_name) || user.name + (user.alias ? ' ' + user.alias : ''),
              created_at: (briefing === null || briefing === void 0 ? void 0 : briefing.created_at) || now,
              updated_at: now
            };
            if (isEdit) payload.id = briefing.id;
            if (briefing !== null && briefing !== void 0 && briefing.read_by) payload.read_by = briefing.read_by;
            _context8.p = 3;
            _context8.n = 4;
            return CLOUD.upsert('weekly_briefings', payload);
          case 4:
            res = _context8.v;
            if (res) {
              toast(publishNow ? '✓ 已保存并发布给所有员工' : '✓ 已保存草稿');
              onSaved();
            } else {
              alert('保存失败');
            }
            _context8.n = 6;
            break;
          case 5:
            _context8.p = 5;
            _t4 = _context8.v;
            alert('保存失败：' + _t4.message);
          case 6:
            setSaving(false);
          case 7:
            return _context8.a(2);
        }
      }, _callee8, null, [[3, 5]]);
    }));
    return function handleSubmit() {
      return _ref11.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.55)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '3vh 20px',
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
      maxWidth: 780,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '94vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: '#0369a1'
    }
  }, "\uD83D\uDCE2 ", isEdit ? '编辑' : '新建', "\u4F1A\u8BAE\u7EAA\u8981"), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: onClose,
    style: {
      padding: '4px 12px'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      overflow: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u671F\u53F7 / \u65E5\u671F *"), /*#__PURE__*/React.createElement("input", {
    value: weekLabel,
    onChange: function onChange(e) {
      return setWeekLabel(e.target.value);
    },
    placeholder: "2026\u5E745\u6708\u4EFD \u7B2C\u56DB\u5468",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      marginTop: 6,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setWeekLabel(getMonthWeekLabel(new Date(Date.now() - 7 * 86400000)));
    },
    style: {
      padding: '3px 8px',
      border: '1px solid var(--line)',
      background: 'white',
      borderRadius: 4,
      fontSize: 11,
      cursor: 'pointer',
      fontFamily: 'inherit'
    },
    title: "\u4E0A\u5468"
  }, "\u2190 \u4E0A\u5468"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setWeekLabel(getMonthWeekLabel(new Date()));
    },
    style: {
      padding: '3px 8px',
      border: '1px solid var(--accent)',
      background: 'var(--accent)',
      color: 'white',
      borderRadius: 4,
      fontSize: 11,
      cursor: 'pointer',
      fontFamily: 'inherit'
    },
    title: "\u672C\u5468"
  }, "\u672C\u5468"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setWeekLabel(getMonthWeekLabel(new Date(Date.now() + 7 * 86400000)));
    },
    style: {
      padding: '3px 8px',
      border: '1px solid var(--line)',
      background: 'white',
      borderRadius: 4,
      fontSize: 11,
      cursor: 'pointer',
      fontFamily: 'inherit'
    },
    title: "\u4E0B\u5468"
  }, "\u4E0B\u5468 \u2192"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    onChange: function onChange(e) {
      if (e.target.value) setWeekLabel(getMonthWeekLabel(new Date(e.target.value + 'T12:00')));
    },
    title: "\u9009\u5177\u4F53\u65E5\u671F \u2192 \u81EA\u52A8\u751F\u6210\u671F\u53F7",
    style: {
      padding: '2px 6px',
      border: '1px solid var(--line)',
      borderRadius: 4,
      fontSize: 11,
      color: 'var(--ink-3)',
      cursor: 'pointer'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u4F1A\u8BAE\u6807\u9898 *"), /*#__PURE__*/React.createElement("input", {
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    placeholder: "\u4F8B\uFF1A\u672C\u5468\u5BA2\u670D\u6D41\u7A0B\u4F18\u5316 + \u552E\u540E\u5904\u7406\u89C4\u8303",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)'
    }
  }, "\u2B50 \u672C\u5468\u91CD\u70B9\uFF08", highlights.length, "\uFF09"), /*#__PURE__*/React.createElement("button", {
    onClick: addHighlight,
    className: "btn-sec",
    style: {
      padding: '3px 10px',
      fontSize: 11
    }
  }, "+ \u52A0\u8981\u70B9")), highlights.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      background: '#f9fafb',
      border: '1px dashed var(--line)',
      borderRadius: 6,
      fontSize: 11,
      color: 'var(--ink-3)',
      textAlign: 'center'
    }
  }, "\u6682\u65E0\u8981\u70B9\uFF0C\u70B9\u4E0A\u65B9\"+ \u52A0\u8981\u70B9\"\u5F00\u59CB") : highlights.map(function (h, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: h.id,
      style: {
        display: 'flex',
        gap: 6,
        marginBottom: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("select", {
      value: h.priority || 'normal',
      onChange: function onChange(e) {
        var next = _toConsumableArray(highlights);
        next[idx] = _objectSpread(_objectSpread({}, h), {}, {
          priority: e.target.value
        });
        setHighlights(next);
      },
      style: {
        width: 90,
        padding: '6px 8px',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 12,
        background: 'white'
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: "normal"
    }, "\uD83D\uDCCD \u4E00\u822C"), /*#__PURE__*/React.createElement("option", {
      value: "high"
    }, "\uD83D\uDD25 \u91CD\u8981")), /*#__PURE__*/React.createElement("input", {
      value: h.tag || '',
      onChange: function onChange(e) {
        var next = _toConsumableArray(highlights);
        next[idx] = _objectSpread(_objectSpread({}, h), {}, {
          tag: e.target.value
        });
        setHighlights(next);
      },
      placeholder: "\u5206\u7C7B\u6807\u7B7E\uFF08\u9009\u586B\uFF09",
      style: {
        width: 110,
        padding: '6px 8px',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 12
      }
    }), /*#__PURE__*/React.createElement("input", {
      value: h.text,
      onChange: function onChange(e) {
        var next = _toConsumableArray(highlights);
        next[idx] = _objectSpread(_objectSpread({}, h), {}, {
          text: e.target.value
        });
        setHighlights(next);
      },
      placeholder: "\u91CD\u70B9\u5185\u5BB9...",
      style: {
        flex: 1,
        padding: '6px 8px',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 12
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setHighlights(highlights.filter(function (_, i) {
          return i !== idx;
        }));
      },
      style: {
        padding: '6px 8px',
        background: '#fef2f2',
        color: '#dc2626',
        border: '1px solid #fca5a5',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 12
      }
    }, "\xD7"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)'
    }
  }, "\uD83D\uDCCB \u5DE5\u4F5C\u8BA1\u5212 / \u4EFB\u52A1\u5206\u914D\uFF08", workPlans.length, "\uFF09"), /*#__PURE__*/React.createElement("button", {
    onClick: addWorkPlan,
    className: "btn-sec",
    style: {
      padding: '3px 10px',
      fontSize: 11
    }
  }, "+ \u52A0\u4EFB\u52A1")), workPlans.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      background: '#f9fafb',
      border: '1px dashed var(--line)',
      borderRadius: 6,
      fontSize: 11,
      color: 'var(--ink-3)',
      textAlign: 'center'
    }
  }, "\u6682\u65E0\u4EFB\u52A1") : workPlans.map(function (p, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: 'flex',
        gap: 6,
        marginBottom: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("select", {
      value: p.assignee_id || '',
      onChange: function onChange(e) {
        var emp = employees.find(function (em) {
          return em.id === e.target.value;
        });
        var next = _toConsumableArray(workPlans);
        next[idx] = _objectSpread(_objectSpread({}, p), {}, {
          assignee_id: e.target.value,
          assignee_name: emp ? emp.name + (emp.alias ? ' ' + emp.alias : '') : ''
        });
        setWorkPlans(next);
      },
      style: {
        width: 130,
        padding: '6px 8px',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 12,
        background: 'white'
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "\u6240\u6709\u4EBA"), employees.map(function (emp) {
      return /*#__PURE__*/React.createElement("option", {
        key: emp.id,
        value: emp.id
      }, emp.name, emp.alias ? ' ' + emp.alias : '');
    })), /*#__PURE__*/React.createElement("input", {
      value: p.text,
      onChange: function onChange(e) {
        var next = _toConsumableArray(workPlans);
        next[idx] = _objectSpread(_objectSpread({}, p), {}, {
          text: e.target.value
        });
        setWorkPlans(next);
      },
      placeholder: "\u4EFB\u52A1\u5185\u5BB9...",
      style: {
        flex: 1,
        padding: '6px 8px',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 12
      }
    }), /*#__PURE__*/React.createElement("input", {
      type: "date",
      value: p.deadline || '',
      onChange: function onChange(e) {
        var next = _toConsumableArray(workPlans);
        next[idx] = _objectSpread(_objectSpread({}, p), {}, {
          deadline: e.target.value
        });
        setWorkPlans(next);
      },
      title: "\u622A\u6B62\u65E5\u671F",
      style: {
        width: 130,
        padding: '6px 8px',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 12
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setWorkPlans(workPlans.filter(function (_, i) {
          return i !== idx;
        }));
      },
      style: {
        padding: '6px 8px',
        background: '#fef2f2',
        color: '#dc2626',
        border: '1px solid #fca5a5',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 12
      }
    }, "\xD7"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\uD83D\uDCDD \u4F1A\u8BAE\u8BE6\u7EC6\u5185\u5BB9\uFF08\u9009\u586B\uFF09"), /*#__PURE__*/React.createElement("textarea", {
    value: content,
    onChange: function onChange(e) {
      return setContent(e.target.value);
    },
    placeholder: "\u5F00\u4F1A\u7684\u8BE6\u7EC6\u7B14\u8BB0 / \u6D41\u7A0B\u8BF4\u660E / \u6CE8\u610F\u4E8B\u9879...",
    style: {
      width: '100%',
      minHeight: 120,
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical',
      lineHeight: 1.6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\uD83D\uDCCE \u9644\u4EF6\u6587\u4EF6\uFF08\u9009\u586B \xB7 \u652F\u6301 PDF / PPT / Excel / Word / \u56FE\u7247 / \u89C6\u9891\uFF09"), /*#__PURE__*/React.createElement(MultiFileUploader, {
    files: attachments,
    setFiles: setAttachments,
    bucket: "briefing-files",
    maxSize: 50
  })), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: 8,
      background: '#fef9c3',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      color: '#854d0e'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: pinned,
    onChange: function onChange(e) {
      return setPinned(e.target.checked);
    }
  }), "\uD83D\uDCCC \u7F6E\u9876\uFF08\u5458\u5DE5\u9996\u9875\u6C38\u4E45\u663E\u793A\u5728\u6700\u524D\uFF09")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDCA1 \u300C\u4FDD\u5B58\u8349\u7A3F\u300D\u5458\u5DE5\u770B\u4E0D\u5230\uFF0C\u300C\u53D1\u5E03\u300D\u540E\u6240\u6709\u5458\u5DE5\u9996\u9875\u7ACB\u5373\u663E\u793A"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn-sec",
    style: {
      padding: '8px 16px'
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return handleSubmit(false);
    },
    disabled: saving,
    className: "btn-sec",
    style: {
      padding: '8px 18px',
      fontWeight: 600
    }
  }, "\uD83D\uDCBE \u4FDD\u5B58\u8349\u7A3F"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return handleSubmit(true);
    },
    disabled: saving,
    style: {
      padding: '8px 22px',
      background: '#0369a1',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 13,
      opacity: saving ? 0.5 : 1
    }
  }, saving ? '保存中...' : '📢 保存并发布')))));
};

// ============================================================
// 🔍 全局智能搜索 - 跨平台所有数据
// ============================================================
var GlobalSearch = function GlobalSearch(_ref12) {
  var open = _ref12.open,
    onClose = _ref12.onClose,
    user = _ref12.user,
    employees = _ref12.employees,
    records = _ref12.records,
    setActiveTab = _ref12.setActiveTab,
    onJumpToRecord = _ref12.onJumpToRecord;
  var _useState37 = useState(''),
    _useState38 = _slicedToArray(_useState37, 2),
    query = _useState38[0],
    setQuery = _useState38[1];
  var _useState39 = useState(false),
    _useState40 = _slicedToArray(_useState39, 2),
    loading = _useState40[0],
    setLoading = _useState40[1];
  var _useState41 = useState({
      suppliers: [],
      aftersales: [],
      refills: [],
      refunds: [],
      briefings: [],
      kb: [],
      tickets: []
    }),
    _useState42 = _slicedToArray(_useState41, 2),
    extraData = _useState42[0],
    setExtraData = _useState42[1];
  var _useState43 = useState(0),
    _useState44 = _slicedToArray(_useState43, 2),
    selectedIdx = _useState44[0],
    setSelectedIdx = _useState44[1];
  var inputRef = React.useRef(null);

  // 打开时加载额外数据 + 自动聚焦
  useEffect(function () {
    if (!open) return;
    setQuery('');
    setSelectedIdx(0);
    setTimeout(function () {
      var _inputRef$current;
      return (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
    }, 50);
    setLoading(true);
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var _yield$Promise$all, _yield$Promise$all2, sup, af, rf, rfd, bf, kb, tk, rev, cb, oo, ci, pv, _t5;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            _context9.n = 1;
            return Promise.all([CLOUD.list('suppliers', {
              limit: 1000
            }), CLOUD.list('aftersales', {
              limit: 500
            }), CLOUD.list('refills', {
              limit: 500
            }), CLOUD.list('refunds', {
              limit: 500
            }), CLOUD.list('weekly_briefings', {
              limit: 50
            }), CLOUD.list('workspace_kb', {
              limit: 500
            }), CLOUD.list('workspace_tickets', {
              limit: 300
            }), CLOUD.list('product_reviews', {
              limit: 500
            }), CLOUD.list('chargebacks', {
              limit: 300
            }), CLOUD.list('offline_orders', {
              limit: 300
            }), CLOUD.list('custom_inquiries', {
              limit: 300
            }), CLOUD.list('photo_verifications', {
              limit: 300
            })]);
          case 1:
            _yield$Promise$all = _context9.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 12);
            sup = _yield$Promise$all2[0];
            af = _yield$Promise$all2[1];
            rf = _yield$Promise$all2[2];
            rfd = _yield$Promise$all2[3];
            bf = _yield$Promise$all2[4];
            kb = _yield$Promise$all2[5];
            tk = _yield$Promise$all2[6];
            rev = _yield$Promise$all2[7];
            cb = _yield$Promise$all2[8];
            oo = _yield$Promise$all2[9];
            ci = _yield$Promise$all2[10];
            pv = _yield$Promise$all2[11];
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
              photo_verifications: pv || []
            });
            _context9.n = 3;
            break;
          case 2:
            _context9.p = 2;
            _t5 = _context9.v;
            console.warn('加载搜索数据失败', _t5);
          case 3:
            setLoading(false);
          case 4:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 2]]);
    }))();
  }, [open]);

  // 键盘快捷键
  useEffect(function () {
    if (!open) return;
    var handler = function handler(e) {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return function () {
      return document.removeEventListener('keydown', handler);
    };
  }, [open, onClose]);

  // 搜索结果（分类）
  var results = useMemo(function () {
    if (!query.trim()) return [];
    var q = query.trim().toLowerCase();
    var all = [];

    // 1. 客服记录
    (records || []).filter(function (r) {
      return !r.deleted;
    }).forEach(function (r) {
      var _employees$find;
      var hay = [r.customer, r.orderRef, r.note, r.category, r.site, r.date, (_employees$find = employees.find(function (e) {
        return e.id === r.ownerId;
      })) === null || _employees$find === void 0 ? void 0 : _employees$find.name].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        var _employees$find2;
        all.push({
          kind: 'record',
          icon: '📧',
          label: '客服记录',
          color: '#0369a1',
          title: r.customer || '(无邮箱)',
          desc: "".concat(r.date, " \xB7 ").concat(r.category || '未选事项', " \xB7 ").concat(r.orderRef || ''),
          extra: r.note,
          owner: (_employees$find2 = employees.find(function (e) {
            return e.id === r.ownerId;
          })) === null || _employees$find2 === void 0 ? void 0 : _employees$find2.name,
          target: {
            tab: 'cs',
            recordId: r.id
          },
          data: r
        });
      }
    });

    // 2. 售后事件
    (extraData.aftersales || []).forEach(function (a) {
      var hay = [a.order_ref, a.customer, a.product_name, a.issue_detail, a.damaged_part, a.supplier_name, a.notes, a.issue_type_custom].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        var issue = ISSUE_TYPES.find(function (i) {
          return i.key === a.issue_type;
        });
        var status = AFTERSALE_STATUSES.find(function (s) {
          return s.key === a.status;
        });
        all.push({
          kind: 'aftersale',
          icon: '🔧',
          label: '售后事件',
          color: '#ea580c',
          title: "".concat(a.order_ref || '?', " \xB7 ").concat(a.product_name || ''),
          desc: "".concat((issue === null || issue === void 0 ? void 0 : issue.label) || '').concat(a.damaged_part ? ' · ' + a.damaged_part : '', " \xB7 ").concat(a.supplier_name || ''),
          extra: a.issue_detail,
          status: status === null || status === void 0 ? void 0 : status.label,
          target: {
            tab: 'events',
            subTab: 'aftersales'
          },
          data: a
        });
      }
    });

    // 3. 补件
    (extraData.refills || []).forEach(function (r) {
      var itemsStr = (r.items || []).map(function (i) {
        return i.item;
      }).join(' ');
      var hay = [r.order_ref, r.customer, itemsStr, r.supplier_name, r.notes, r.tracking_number].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        var status = REFILL_STATUSES.find(function (s) {
          return s.key === r.status;
        });
        all.push({
          kind: 'refill',
          icon: '📦',
          label: '补件事件',
          color: '#0369a1',
          title: "".concat(r.order_ref || '?', " \xB7 ").concat(itemsStr.slice(0, 40)),
          desc: "".concat(r.supplier_name || '', " \xB7 \u5171 ").concat((r.items || []).length, " \u9879"),
          extra: r.notes,
          status: status === null || status === void 0 ? void 0 : status.label,
          target: {
            tab: 'events',
            subTab: 'refills'
          },
          data: r
        });
      }
    });

    // 4. 退款
    (extraData.refunds || []).forEach(function (r) {
      var hay = [r.order_ref, r.customer, r.product_name, r.refund_reason, r.supplier_name, r.refund_type_custom, r.payment_method_custom, r.external_refund_id].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        var type = REFUND_TYPES.find(function (t) {
          return t.key === r.refund_type;
        });
        var status = REFUND_STATUSES.find(function (s) {
          return s.key === r.status;
        });
        all.push({
          kind: 'refund',
          icon: '💰',
          label: '退款',
          color: '#dc2626',
          title: "".concat(r.order_ref || '?', " \xB7 ").concat(r.currency, " ").concat(parseFloat(r.amount).toFixed(2)),
          desc: "".concat((type === null || type === void 0 ? void 0 : type.label) || '', " \xB7 ").concat(r.payment_method || ''),
          extra: r.refund_reason,
          status: status === null || status === void 0 ? void 0 : status.label,
          target: {
            tab: 'events',
            subTab: 'refunds'
          },
          data: r
        });
      }
    });

    // 5. 供应商
    (extraData.suppliers || []).forEach(function (s) {
      var hay = [s.name, s.contact_person, s.alipay, s.category, s.notes].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        all.push({
          kind: 'supplier',
          icon: '🏭',
          label: '供应商',
          color: '#16a34a',
          title: s.name,
          desc: "".concat(s.contact_person ? '👤 ' + s.contact_person : '', " ").concat(s.alipay ? '· 💳 ' + s.alipay : ''),
          extra: "\u552E\u540E ".concat(s.total_aftersales || 0, " \u5355"),
          target: {
            tab: 'suppliers'
          },
          data: s
        });
      }
    });

    // 6. 知识库
    (extraData.kb || []).forEach(function (k) {
      var hay = [k.title, k.content, k.category, k.tags && (Array.isArray(k.tags) ? k.tags.join(' ') : k.tags)].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        all.push({
          kind: 'kb',
          icon: '📚',
          label: '知识库',
          color: '#7c3aed',
          title: k.title || '(无标题)',
          desc: "".concat(k.category || ''),
          extra: (k.content || '').slice(0, 150),
          target: {
            tab: 'kb'
          },
          data: k
        });
      }
    });

    // 7. 会议纪要
    (extraData.briefings || []).filter(function (b) {
      return b.published;
    }).forEach(function (b) {
      var highlightsStr = (b.highlights || []).map(function (h) {
        return h.text;
      }).join(' ');
      var plansStr = (b.work_plans || []).map(function (p) {
        return p.text;
      }).join(' ');
      var hay = [b.title, b.week_label, b.content, highlightsStr, plansStr].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        all.push({
          kind: 'briefing',
          icon: '📢',
          label: '会议纪要',
          color: '#0891b2',
          title: b.title,
          desc: "".concat(b.week_label, " \xB7 ").concat((b.highlights || []).length, " \u8981\u70B9 \xB7 ").concat((b.work_plans || []).length, " \u4EFB\u52A1"),
          extra: b.content,
          target: {
            tab: 'briefings'
          },
          data: b
        });
      }
    });

    // 8. 工单
    (extraData.tickets || []).forEach(function (t) {
      var hay = [t.title, t.content, t.from_name, t.target_name].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        all.push({
          kind: 'ticket',
          icon: '📋',
          label: '工单',
          color: '#d97706',
          title: t.title || '(无标题)',
          desc: "".concat(t.from_name, " \u2192 ").concat(t.target_name, " \xB7 ").concat(t.status || ''),
          extra: t.content,
          target: {
            tab: 'report'
          },
          data: t
        });
      }
    });

    // 8.5. 🆕 产品评价任务
    (extraData.reviews || []).forEach(function (r) {
      var hay = [r.product_name, r.product_url, r.site, r.notes, r.work_notes, r.review_text, r.reviewer_alias, r.created_by_name, r.claimed_by_name].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        var statusObj = REVIEW_STATUSES.find(function (s) {
          return s.key === r.status;
        });
        all.push({
          kind: 'review',
          icon: '⭐',
          label: '产品评价',
          color: '#fbbf24',
          title: r.product_name || (r.product_url || '').slice(0, 60),
          desc: "".concat(r.site || '').concat(r.platform ? ' · ' + r.platform : '', " \xB7 \u53D1\u5E03: ").concat(r.created_by_name || '?').concat(r.claimed_by_name ? ' · 接单: ' + r.claimed_by_name : '', " \xB7 ").concat(statusObj && statusObj.label || r.status),
          extra: r.notes || r.work_notes,
          target: {
            tab: 'reviews'
          },
          data: r
        });
      }
    });

    // 8.6. 🆕 拒付
    (extraData.chargebacks || []).filter(function (c) {
      return !c.deleted;
    }).forEach(function (c) {
      var hay = [c.order_no, c.customer_email, c.customer_name, c.platform, c.notes, c.reason_detail, c.resolution, (c.assigned_to_names || []).join(' ')].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        var statusObj = CHARGEBACK_STATUSES.find(function (s) {
          return s.key === c.status;
        });
        var urgency = getChargebackUrgency(c);
        all.push({
          kind: 'chargeback',
          icon: '🚨',
          label: '拒付',
          color: '#dc2626',
          title: "".concat(c.order_no, " \xB7 ").concat(c.currency || 'USD', " ").concat(c.amount || 0),
          desc: "".concat(c.platform || '', " \xB7 ").concat(c.customer_email || '').concat((c.assigned_to_names || []).length > 0 ? ' · 👥 ' + c.assigned_to_names.join('/') : ''),
          extra: urgency ? "\u23F0 ".concat(urgency.label, " \xB7 \u622A\u6B62 ").concat(c.deadline) : "\u622A\u6B62 ".concat(c.deadline),
          status: statusObj === null || statusObj === void 0 ? void 0 : statusObj.label,
          target: {
            tab: 'chargebacks'
          },
          data: c
        });
      }
    });

    // 8.7. 🆕 线下单
    (extraData.offline_orders || []).filter(function (o) {
      return !o.deleted;
    }).forEach(function (o) {
      var hay = [o.order_no, o.customer_email, o.customer_name, o.ship_to_name, o.ship_to_country, o.notes, o.payment_method, o.site, o.quote_no].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        var statusObj = OFFLINE_ORDER_STATUSES.find(function (s) {
          return s.key === o.status;
        });
        all.push({
          kind: 'offline_order',
          icon: '💳',
          label: '线下单',
          color: '#0369a1',
          title: "".concat(o.order_no, " \xB7 ").concat(o.payment_currency || 'USD', " ").concat(o.payment_amount || 0),
          desc: "".concat(o.site || '', " \xB7 ").concat(o.payment_method || '', " \xB7 ").concat(o.customer_email || o.customer_name || ''),
          extra: "\uD83D\uDCCD ".concat(o.ship_to_country || '', " ").concat(o.ship_to_city || ''),
          status: statusObj === null || statusObj === void 0 ? void 0 : statusObj.label,
          target: {
            tab: 'offline_orders'
          },
          data: o
        });
      }
    });

    // 8.8. 🆕 定制咨询
    (extraData.custom_inquiries || []).filter(function (c) {
      return !c.deleted;
    }).forEach(function (c) {
      var hay = [c.customer_name, c.customer_email, c.requirement, c.designer_name, c.quote_no, c.order_no, c.notes].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        var stage = CUSTOM_STAGES.find(function (s) {
          return s.key === c.stage;
        });
        all.push({
          kind: 'custom_inquiry',
          icon: '🎨',
          label: '定制咨询',
          color: '#7c3aed',
          title: c.customer_name || c.customer_email || '(未填客户)',
          desc: "".concat(stage && stage.label || c.stage, " \xB7 ").concat(c.site || '').concat(c.designer_name ? ' · 设计:' + c.designer_name : ''),
          extra: (c.requirement || '').slice(0, 150),
          target: {
            tab: 'custom_photo'
          },
          data: c
        });
      }
    });

    // 8.9. 🆕 实拍核实
    (extraData.photo_verifications || []).filter(function (p) {
      return !p.deleted;
    }).forEach(function (p) {
      var hay = [p.sku, p.product_name, p.supplier_name, p.difference_detail, p.customer_response, p.resolution, (p.affected_orders || []).join(' ')].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        var statusObj = PHOTO_STATUSES.find(function (s) {
          return s.key === p.status;
        });
        all.push({
          kind: 'photo_verification',
          icon: '📸',
          label: '实拍核实',
          color: '#be185d',
          title: "".concat(p.sku || '', " ").concat(p.product_name || '').trim() || '(未填产品)',
          desc: "".concat(p.supplier_name || '').concat(p.difference_type ? ' · 差异:' + p.difference_type : '').concat((p.affected_orders || []).length > 0 ? ' · 影响 ' + p.affected_orders.length + ' 单' : ''),
          extra: (p.difference_detail || '').slice(0, 150),
          status: statusObj === null || statusObj === void 0 ? void 0 : statusObj.label,
          target: {
            tab: 'custom_photo'
          },
          data: p
        });
      }
    });

    // 9. 员工
    employees.filter(function (e) {
      return !e.hideFromList || e.id === user.id;
    }).forEach(function (emp) {
      var hay = [emp.name, emp.alias, emp.sites, emp.title].filter(Boolean).join(' ').toLowerCase();
      if (hay.includes(q)) {
        all.push({
          kind: 'employee',
          icon: '👤',
          label: '员工',
          color: '#5e5ce6',
          title: "".concat(emp.name).concat(emp.alias ? ' ' + emp.alias : ''),
          desc: "".concat(emp.title || '', " \xB7 ").concat(emp.sites || ''),
          target: null,
          data: emp
        });
      }
    });

    // 10. 平台功能（"如何"类搜索）
    var features = [{
      keys: ['售后', '补件', '退款', '事件'],
      title: '📋 工作主线',
      desc: '查看所有售后/补件/退款事件',
      target: {
        tab: 'events'
      }
    }, {
      keys: ['拒付', 'chargeback', 'dispute'],
      title: '🚨 拒付管理',
      desc: '7/3/1 天提醒 · 按网站自动分配',
      target: {
        tab: 'chargebacks'
      }
    }, {
      keys: ['线下单', '银行', 'paypal', '转账', 'offline'],
      title: '💳 线下单',
      desc: '自动生成订单编号 · 复制下单指令',
      target: {
        tab: 'offline_orders'
      }
    }, {
      keys: ['定制', '实拍', 'custom', 'sketch'],
      title: '🎨 定制 & 实拍',
      desc: '定制咨询 + 实拍核实',
      target: {
        tab: 'custom_photo'
      }
    }, {
      keys: ['主管', '汇总', '总览', 'overview'],
      title: '📊 主管汇总',
      desc: '所有模块数据总览(主管/老板可见)',
      target: {
        tab: 'admin_overview'
      }
    }, {
      keys: ['删除审批', '审批', 'approval', '批准'],
      title: '🛡 删除审批',
      desc: '员工的删除申请审批中心',
      target: {
        tab: 'delete_approvals'
      }
    }, {
      keys: ['供应商', '工厂'],
      title: '🏭 供应商管理',
      desc: '693 家供应商搜索 + 新增',
      target: {
        tab: 'suppliers'
      }
    }, {
      keys: ['知识', '回复', '模板'],
      title: '📚 知识库',
      desc: '280+ 客服回复模板',
      target: {
        tab: 'kb'
      }
    }, {
      keys: ['报价', 'quote', 'pi'],
      title: '📝 报价单',
      desc: '生成报价单',
      target: {
        tab: 'quote'
      }
    }, {
      keys: ['看板', '统计', '报表'],
      title: '📊 数据看板',
      desc: '团队数据统计',
      target: {
        tab: 'dashboard'
      }
    }, {
      keys: ['工单', '汇报'],
      title: '💬 汇报工单',
      desc: '员工汇报问题',
      target: {
        tab: 'report'
      }
    }, {
      keys: ['会议', '纪要', '要点'],
      title: '📢 会议纪要',
      desc: '主管发布的会议要点',
      target: {
        tab: 'briefings'
      }
    }, {
      keys: ['回收', '删除'],
      title: '🗑 回收站',
      desc: '恢复删除的数据',
      target: {
        tab: 'trash'
      }
    }, {
      keys: ['设置', '配置', '员工管理'],
      title: '⚙ 设置',
      desc: '云配置 / 员工管理',
      target: {
        tab: 'admin'
      }
    }];
    features.forEach(function (f) {
      if (f.keys.some(function (k) {
        return k.toLowerCase().includes(q) || q.includes(k.toLowerCase());
      })) {
        all.push({
          kind: 'feature',
          icon: '⚡',
          label: '功能',
          color: '#525252',
          title: f.title,
          desc: f.desc,
          target: f.target,
          data: f
        });
      }
    });
    return all.slice(0, 80); // 最多 80 条
  }, [query, records, extraData, employees, user]);

  // 按 kind 分组
  var grouped = useMemo(function () {
    var g = {};
    results.forEach(function (r) {
      if (!g[r.kind]) g[r.kind] = {
        label: r.label,
        icon: r.icon,
        color: r.color,
        items: []
      };
      g[r.kind].items.push(r);
    });
    return g;
  }, [results]);
  var handleClick = function handleClick(item) {
    if (item.target && item.target.tab) {
      setActiveTab(item.target.tab);
      if (item.target.recordId && onJumpToRecord) onJumpToRecord(item.target.recordId);
    }
    onClose();
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.45)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '8vh 20px'
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
      maxHeight: '80vh',
      boxShadow: '0 24px 64px rgba(0,0,0,.3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, "\uD83D\uDD0D"), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    placeholder: "\u641C\u7D22\u5BA2\u6237\u90AE\u7BB1 / \u8BA2\u5355\u53F7 / \u4F9B\u5E94\u5546 / \u9000\u6B3E / \u77E5\u8BC6\u5E93 / \u529F\u80FD...",
    style: {
      flex: 1,
      padding: '8px 0',
      border: 'none',
      outline: 'none',
      fontSize: 15,
      fontFamily: 'inherit'
    }
  }), query && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setQuery('');
    },
    style: {
      padding: '4px 10px',
      background: 'var(--bg)',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "\u6E05\u7A7A"), /*#__PURE__*/React.createElement("kbd", {
    style: {
      padding: '3px 8px',
      background: 'var(--bg)',
      borderRadius: 5,
      fontSize: 11,
      color: 'var(--ink-3)',
      border: '1px solid var(--line)'
    }
  }, "ESC")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: query ? 8 : 24
    }
  }, !query.trim() ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '24px 0',
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      marginBottom: 10
    }
  }, "\uD83D\uDD0D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 6,
      color: 'var(--ink-2)',
      fontSize: 14
    }
  }, "\u667A\u80FD\u641C\u7D22\u5168\u5E73\u53F0"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, "\u53EF\u4EE5\u641C\u7D22\u4EFB\u610F\u5BA2\u6237\u90AE\u7BB1\u3001\u8BA2\u5355\u53F7\u3001\u4F9B\u5E94\u5546\u3001\u9000\u6B3E\u3001\u77E5\u8BC6\u5E93\u3001\u529F\u80FD\u9875\u9762"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      justifyContent: 'center',
      maxWidth: 500,
      margin: '0 auto'
    }
  }, ['john@', 'V99299', '品诚', '退款', '运输损坏', '会议', '供应商', '报价'].map(function (s) {
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: function onClick() {
        return setQuery(s);
      },
      style: {
        padding: '5px 12px',
        background: 'var(--bg)',
        border: '1px solid var(--line)',
        borderRadius: 14,
        cursor: 'pointer',
        fontSize: 11,
        fontFamily: 'inherit',
        color: 'var(--ink-2)'
      }
    }, s);
  }))) : loading && results.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 30,
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, "\u23F3 \u641C\u7D22\u4E2D...") : results.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 40,
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      marginBottom: 8
    }
  }, "\uD83D\uDD0D"), "\u6CA1\u6709\u627E\u5230\u5305\u542B \"", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink-2)'
    }
  }, query), "\" \u7684\u5185\u5BB9") : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      padding: '4px 10px',
      marginBottom: 6
    }
  }, "\u627E\u5230 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, results.length), " \u6761\u7ED3\u679C"), Object.entries(grouped).map(function (_ref14) {
    var _ref15 = _slicedToArray(_ref14, 2),
      kind = _ref15[0],
      group = _ref15[1];
    return /*#__PURE__*/React.createElement("div", {
      key: kind,
      style: {
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 10px',
        fontSize: 11,
        fontWeight: 600,
        color: group.color,
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", null, group.icon), /*#__PURE__*/React.createElement("span", null, group.label, " (", group.items.length, ")")), group.items.map(function (item, idx) {
      return /*#__PURE__*/React.createElement("div", {
        key: kind + '_' + idx,
        onClick: function onClick() {
          return handleClick(item);
        },
        style: {
          padding: '8px 12px',
          borderRadius: 8,
          cursor: 'pointer',
          marginBottom: 2,
          borderLeft: '3px solid ' + group.color,
          background: 'white',
          transition: 'background .1s'
        },
        onMouseEnter: function onMouseEnter(e) {
          return e.currentTarget.style.background = group.color + '08';
        },
        onMouseLeave: function onMouseLeave(e) {
          return e.currentTarget.style.background = 'white';
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 3
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--ink)',
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }, highlightMatch(item.title, query)), item.status && /*#__PURE__*/React.createElement("span", {
        style: {
          padding: '1px 6px',
          background: group.color + '15',
          color: group.color,
          borderRadius: 4,
          fontSize: 10,
          fontWeight: 600,
          flexShrink: 0
        }
      }, item.status), item.owner && /*#__PURE__*/React.createElement("span", {
        style: {
          padding: '1px 6px',
          background: 'var(--bg)',
          color: 'var(--ink-3)',
          borderRadius: 4,
          fontSize: 10,
          flexShrink: 0
        }
      }, item.owner)), item.desc && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          color: 'var(--ink-3)',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }, highlightMatch(item.desc, query)), item.extra && item.kind !== 'feature' && /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          color: 'var(--ink-3)',
          marginTop: 3,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          opacity: .8
        }
      }, highlightMatch(String(item.extra).slice(0, 100), query)));
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 18px',
      borderTop: '1px solid var(--line)',
      background: 'var(--bg)',
      fontSize: 10,
      color: 'var(--ink-3)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, "\uD83D\uDCA1 \u63D0\u793A\uFF1A\u53EF\u4EE5\u641C\u90AE\u7BB1\u3001\u8BA2\u5355\u53F7\u3001\u4F9B\u5E94\u5546\u540D\u3001\u9000\u6B3E\u539F\u56E0\u3001\u4F1A\u8BAE\u8981\u70B9"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("kbd", {
    style: {
      padding: '1px 5px',
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 3,
      fontSize: 10
    }
  }, "Ctrl+K"), " \u6253\u5F00\u641C\u7D22"))));
};

// 高亮匹配文字
var highlightMatch = function highlightMatch(text, query) {
  if (!text || !query) return text;
  var txt = String(text);
  var q = query.trim();
  if (!q) return txt;
  var lower = txt.toLowerCase();
  var qLower = q.toLowerCase();
  var idx = lower.indexOf(qLower);
  if (idx < 0) return txt;
  return /*#__PURE__*/React.createElement(React.Fragment, null, txt.slice(0, idx), /*#__PURE__*/React.createElement("span", {
    style: {
      background: '#fef3c7',
      color: '#854d0e',
      fontWeight: 600,
      padding: '0 2px',
      borderRadius: 2
    }
  }, txt.slice(idx, idx + q.length)), txt.slice(idx + q.length));
};

// ============================================================
// 🔍 可搜索的供应商选择器（693 家供应商不用一个个翻）
// ============================================================
var SearchableSupplierSelect = function SearchableSupplierSelect(_ref16) {
  var value = _ref16.value,
    onChange = _ref16.onChange,
    suppliers = _ref16.suppliers,
    _ref16$placeholder = _ref16.placeholder,
    placeholder = _ref16$placeholder === void 0 ? '选择供应商' : _ref16$placeholder,
    _ref16$allowClear = _ref16.allowClear,
    allowClear = _ref16$allowClear === void 0 ? true : _ref16$allowClear,
    _ref16$width = _ref16.width,
    width = _ref16$width === void 0 ? 200 : _ref16$width;
  var _useState45 = useState(false),
    _useState46 = _slicedToArray(_useState45, 2),
    open = _useState46[0],
    setOpen = _useState46[1];
  var _useState47 = useState(''),
    _useState48 = _slicedToArray(_useState47, 2),
    search = _useState48[0],
    setSearch = _useState48[1];
  var wrapRef = React.useRef(null);
  useEffect(function () {
    if (!open) return;
    var handler = function handler(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return function () {
      return document.removeEventListener('mousedown', handler);
    };
  }, [open]);
  var selected = value ? suppliers.find(function (s) {
    return String(s.id) === String(value);
  }) : null;
  var filtered = useMemo(function () {
    if (!search.trim()) return suppliers.slice(0, 100); // 不搜索时只显示前 100
    var q = search.toLowerCase();
    return suppliers.filter(function (s) {
      return (s.name || '').toLowerCase().includes(q) || (s.contact_person || '').toLowerCase().includes(q) || (s.alipay || '').toLowerCase().includes(q) || (s.category || '').toLowerCase().includes(q);
    }).slice(0, 100);
  }, [search, suppliers]);
  return /*#__PURE__*/React.createElement("div", {
    ref: wrapRef,
    style: {
      position: 'relative',
      display: 'inline-block',
      width: width
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setOpen(function (v) {
        return !v;
      });
    },
    style: {
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12,
      background: 'white',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 6,
      minHeight: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      color: selected ? 'var(--ink)' : 'var(--ink-4)'
    }
  }, selected ? selected.name + (selected.contact_person ? ' · ' + selected.contact_person : '') : placeholder), selected && allowClear && /*#__PURE__*/React.createElement("span", {
    onClick: function onClick(e) {
      e.stopPropagation();
      onChange('');
      setSearch('');
    },
    style: {
      cursor: 'pointer',
      color: 'var(--ink-4)',
      fontSize: 14,
      padding: '0 4px'
    }
  }, "\xD7"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9,
      color: 'var(--ink-4)'
    }
  }, "\u25BC")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      left: 0,
      right: 0,
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 8,
      boxShadow: '0 8px 24px rgba(0,0,0,.12)',
      zIndex: 100,
      minWidth: width,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u641C\u7D22 ".concat(suppliers.length, " \u5BB6\u4F9B\u5E94\u5546..."),
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    },
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 5,
      fontSize: 12,
      fontFamily: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 320,
      overflowY: 'auto'
    }
  }, allowClear && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      onChange('');
      setOpen(false);
      setSearch('');
    },
    style: {
      padding: '7px 12px',
      fontSize: 12,
      cursor: 'pointer',
      color: 'var(--ink-3)',
      borderBottom: '1px solid var(--line)'
    },
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.background = '#f5f5f7';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.background = 'white';
    }
  }, placeholder, "\uFF08\u4E0D\u9650\uFF09"), filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 12px',
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, "\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u4F9B\u5E94\u5546") : filtered.map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      onClick: function onClick() {
        onChange(s.id);
        setOpen(false);
        setSearch('');
      },
      style: {
        padding: '7px 12px',
        fontSize: 12,
        cursor: 'pointer',
        borderLeft: String(value) === String(s.id) ? '3px solid var(--accent)' : '3px solid transparent',
        background: String(value) === String(s.id) ? '#e0f2fe' : 'white'
      },
      onMouseEnter: function onMouseEnter(e) {
        if (String(value) !== String(s.id)) e.currentTarget.style.background = '#f5f5f7';
      },
      onMouseLeave: function onMouseLeave(e) {
        if (String(value) !== String(s.id)) e.currentTarget.style.background = 'white';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, s.name), (s.contact_person || s.category) && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)',
        marginTop: 2
      }
    }, s.contact_person && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDC64 ", s.contact_person), s.category && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6
      }
    }, "\uD83D\uDCE6 ", s.category)));
  }), !search.trim() && suppliers.length > 100 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      fontSize: 10,
      color: 'var(--ink-3)',
      textAlign: 'center',
      background: '#fef9c3'
    }
  }, "\u53EA\u663E\u793A\u524D 100 \u5BB6 \xB7 \u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22\u66F4\u7CBE\u786E"))));
};

// ============================================================
// ⭐ 产品评价任务系统
// ============================================================
var REVIEW_PRIORITIES = [{
  key: 'high',
  label: '🔥 紧急',
  bg: '#fef2f2',
  color: '#dc2626',
  border: '#fca5a5'
}, {
  key: 'normal',
  label: '📍 正常',
  bg: '#f0f9ff',
  color: '#0369a1',
  border: '#7dd3fc'
}, {
  key: 'low',
  label: '⬇ 不急',
  bg: '#f5f5f7',
  color: '#525252',
  border: '#d4d4d4'
}];
var REVIEW_PLATFORMS = ['Shopify', 'Trustpilot', 'Google', 'Amazon', 'Etsy', 'Wayfair', 'Facebook', '其他'];
var REVIEW_STATUSES = [{
  key: 'pending',
  label: '待领取',
  bg: '#fef3c7',
  color: '#854d0e'
}, {
  key: 'in_progress',
  label: '进行中',
  bg: '#e0f2fe',
  color: '#075985'
}, {
  key: 'completed',
  label: '已完成',
  bg: '#dcfce7',
  color: '#15803d'
}, {
  key: 'cancelled',
  label: '已取消',
  bg: '#f5f5f7',
  color: '#737373'
}];

// 从产品 URL 自动提取产品名（slug 转可读）
var extractProductNameFromURL = function extractProductNameFromURL(url) {
  if (!url) return '';
  try {
    var parsed = new URL(url);
    var path = parsed.pathname;
    // /products/eleanor-beam-pendant-lamp → eleanor-beam-pendant-lamp
    var match = path.match(/\/products\/([^/?]+)/);
    if (match) {
      return match[1].replace(/-/g, ' ').replace(/\b\w/g, function (c) {
        return c.toUpperCase();
      });
    }
    // 最后一段
    var segments = path.split('/').filter(Boolean);
    if (segments.length > 0) {
      return segments[segments.length - 1].replace(/-/g, ' ').replace(/\b\w/g, function (c) {
        return c.toUpperCase();
      });
    }
  } catch (_unused) {}
  return '';
};

// 从 URL 提取网站
var extractSiteFromURL = function extractSiteFromURL(url) {
  if (!url) return '';
  try {
    var host = new URL(url).hostname.toLowerCase();
    if (host.includes('vakkerlight')) return 'VK';
    if (host.includes('dekorfine')) return 'DF';
    if (host.includes('radilum')) return 'RD';
    if (host.includes('moooi') || host.includes('mojohome')) return 'MO';
    if (host.includes('myjewelry')) return 'MJ';
    if (host.includes('decora')) return 'DC';
    if (host.includes('lampstore')) return 'LS';
    return '';
  } catch (_unused2) {
    return '';
  }
};

// ============================================================
// 🚨💳🎨📸 业务模块 - 拒付 / 线下单 / 定制咨询 / 实拍核实
// ============================================================

var CHARGEBACK_REASONS = [{
  key: 'product',
  label: '产品问题'
}, {
  key: 'shipping',
  label: '物流/未收到'
}, {
  key: 'fraud',
  label: '欺诈/盗刷'
}, {
  key: 'unauthorized',
  label: '未授权交易'
}, {
  key: 'duplicate',
  label: '重复扣款'
}, {
  key: 'not_described',
  label: '与描述不符'
}, {
  key: 'other',
  label: '其他'
}];
var CHARGEBACK_PLATFORMS = ['Stripe', 'PayPal', 'Shopify Payments', 'Klarna', 'Bank', '信用卡', '其他'];
var CHARGEBACK_STATUSES = [{
  key: 'pending',
  label: '待提交证据',
  bg: '#fef2f2',
  color: '#dc2626'
}, {
  key: 'responded',
  label: '已提交证据',
  bg: '#fef3c7',
  color: '#854d0e'
}, {
  key: 'won',
  label: '胜诉',
  bg: '#dcfce7',
  color: '#15803d'
}, {
  key: 'lost',
  label: '败诉',
  bg: '#f5f5f7',
  color: '#525252'
}, {
  key: 'closed',
  label: '已关闭',
  bg: '#f5f5f7',
  color: '#737373'
}];
var PAYMENT_METHODS = ['银行转账', 'PayPal', 'Wise', 'Stripe', 'Western Union', '其他'];
var OFFLINE_ORDER_STATUSES = [{
  key: 'draft',
  label: '草稿',
  bg: '#f5f5f7',
  color: '#737373'
}, {
  key: 'pending_payment',
  label: '待付款',
  bg: '#fef3c7',
  color: '#854d0e'
}, {
  key: 'paid',
  label: '已付款',
  bg: '#dcfce7',
  color: '#15803d'
}, {
  key: 'dispatched',
  label: '已下单',
  bg: '#e0f2fe',
  color: '#075985'
}, {
  key: 'completed',
  label: '已完成',
  bg: '#dbeafe',
  color: '#1e3a8a'
}, {
  key: 'cancelled',
  label: '已取消',
  bg: '#fee2e2',
  color: '#991b1b'
}];
var CUSTOM_STAGES = [{
  key: 'inquiry',
  label: '1. 询单',
  icon: '📝',
  color: '#737373'
}, {
  key: 'sketching',
  label: '2. 出图',
  icon: '✏️',
  color: '#0369a1'
}, {
  key: 'quoting',
  label: '3. 报价',
  icon: '💰',
  color: '#854d0e'
}, {
  key: 'paid',
  label: '4. 已付款',
  icon: '💳',
  color: '#15803d'
}, {
  key: 'producing',
  label: '5. 生产中',
  icon: '🏭',
  color: '#7c3aed'
}, {
  key: 'photo',
  label: '6. 实拍确认',
  icon: '📸',
  color: '#be185d'
}, {
  key: 'completed',
  label: '7. 已完成',
  icon: '✅',
  color: '#1e3a8a'
}, {
  key: 'cancelled',
  label: '已取消',
  icon: '✕',
  color: '#525252'
}];
var PHOTO_DIFFERENCE_TYPES = ['颜色', '尺寸', '材质', '做工', '包装', '配件缺失', '其他'];
var PHOTO_STATUSES = [{
  key: 'pending',
  label: '待联系客户',
  bg: '#fef3c7',
  color: '#854d0e'
}, {
  key: 'contacted',
  label: '已发邮件',
  bg: '#e0f2fe',
  color: '#075985'
}, {
  key: 'accepted',
  label: '客户接受',
  bg: '#dcfce7',
  color: '#15803d'
}, {
  key: 'rejected',
  label: '客户拒绝',
  bg: '#fee2e2',
  color: '#991b1b'
}, {
  key: 'replaced',
  label: '已换款',
  bg: '#dbeafe',
  color: '#1e3a8a'
}];

// 计算距离日期还有多少天(负数表示已过期)
var daysUntil = function daysUntil(dateStr) {
  if (!dateStr) return null;
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  var target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target - today) / (1000 * 60 * 60 * 24));
};

// 拒付紧迫度计算
var getChargebackUrgency = function getChargebackUrgency(cb) {
  if (cb.status === 'won' || cb.status === 'lost' || cb.status === 'closed') return null;
  var days = daysUntil(cb.deadline);
  if (days === null) return null;
  if (days < 0) return {
    level: 'overdue',
    days: days,
    label: "\u5DF2\u903E\u671F ".concat(Math.abs(days), " \u5929"),
    color: '#7f1d1d',
    bg: '#fef2f2'
  };
  if (days === 0) return {
    level: 'today',
    days: days,
    label: '今天截止!',
    color: '#991b1b',
    bg: '#fee2e2'
  };
  if (days <= 1) return {
    level: 'critical',
    days: days,
    label: "\u4EC5\u5269 ".concat(days, " \u5929"),
    color: '#991b1b',
    bg: '#fee2e2'
  };
  if (days <= 3) return {
    level: 'urgent',
    days: days,
    label: "\u4EC5\u5269 ".concat(days, " \u5929"),
    color: '#9a3412',
    bg: '#fed7aa'
  };
  if (days <= 7) return {
    level: 'warning',
    days: days,
    label: "\u8FD8\u6709 ".concat(days, " \u5929"),
    color: '#854d0e',
    bg: '#fef3c7'
  };
  return {
    level: 'normal',
    days: days,
    label: "".concat(days, " \u5929\u540E\u622A\u6B62"),
    color: '#15803d',
    bg: '#dcfce7'
  };
};

// 🆕 智能生成订单编号 - 扫描所有历史订单的实际最大编号 +1
// 优先级:
//   1. 扫描 offline_orders 中 site=X 的所有订单,找到最大编号
//   2. 扫描旧的 records / aftersales 等表中的 order_no 字段,提取符合该网站前缀的
//   3. 使用 site_order_sequences 中的 current_no(兜底)
//   4. 全没有就从 1 开始
var generateOrderNo = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(site) {
    var options,
      previewOnly,
      _yield$CLOUD$client$f2,
      seq,
      prefix,
      separator,
      padding,
      maxNo,
      _yield$CLOUD$client$f3,
      offlineOrders,
      _yield$CLOUD$client$f4,
      csRecords,
      _i,
      _arr,
      tbl,
      _yield$CLOUD$client$f5,
      rows,
      newNo,
      padded,
      orderNo,
      _args0 = arguments,
      _t6,
      _t7,
      _t8,
      _t9;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.p = _context0.n) {
        case 0:
          options = _args0.length > 1 && _args0[1] !== undefined ? _args0[1] : {};
          previewOnly = options.previewOnly; // previewOnly 为 true 时只预览不更新 sequence
          _context0.p = 1;
          _context0.n = 2;
          return CLOUD.client.from('site_order_sequences').select('*').eq('site', site).single();
        case 2:
          _yield$CLOUD$client$f2 = _context0.v;
          seq = _yield$CLOUD$client$f2.data;
          if (seq) {
            _context0.n = 3;
            break;
          }
          throw new Error('未配置 ' + site + ' 的编号规则,请联系主管在数据库 site_order_sequences 表中添加');
        case 3:
          prefix = seq.prefix || site;
          separator = seq.separator || '-';
          padding = seq.padding || 4; // 2. 扫描历史最大编号(从多个表收集)
          maxNo = seq.current_no || 0; // 2a. 扫描 offline_orders
          _context0.p = 4;
          _context0.n = 5;
          return CLOUD.client.from('offline_orders').select('order_no').eq('site', site);
        case 5:
          _yield$CLOUD$client$f3 = _context0.v;
          offlineOrders = _yield$CLOUD$client$f3.data;
          if (offlineOrders && offlineOrders.length > 0) {
            offlineOrders.forEach(function (o) {
              if (!o.order_no) return;
              // 解析订单编号:RD0091 / VKA-0756 / DC0023 等
              // 匹配前缀 + (可选分隔符) + 数字
              var m = o.order_no.match(new RegExp('^' + prefix + (separator || '') + '?(\\d+)$'));
              if (m) {
                var n = parseInt(m[1], 10);
                if (!isNaN(n) && n > maxNo) maxNo = n;
              }
            });
          }
          _context0.n = 7;
          break;
        case 6:
          _context0.p = 6;
          _t6 = _context0.v;
          console.warn('扫描 offline_orders 失败:', _t6);
        case 7:
          _context0.p = 7;
          _context0.n = 8;
          return CLOUD.client.from('workspace_records').select('orderRef').not('orderRef', 'is', null).limit(2000);
        case 8:
          _yield$CLOUD$client$f4 = _context0.v;
          csRecords = _yield$CLOUD$client$f4.data;
          if (csRecords) {
            csRecords.forEach(function (r) {
              if (!r.orderRef) return;
              // orderRef 可能含多个,用空格/逗号分隔
              var tokens = r.orderRef.split(/[\s,;、；，]+/);
              tokens.forEach(function (t) {
                var m = t.match(new RegExp('^' + prefix + (separator || '') + '?(\\d+)$'));
                if (m) {
                  var n = parseInt(m[1], 10);
                  if (!isNaN(n) && n > maxNo) maxNo = n;
                }
              });
            });
          }
          _context0.n = 10;
          break;
        case 9:
          _context0.p = 9;
          _t7 = _context0.v;
          console.warn('扫描 workspace_records 失败:', _t7);
        case 10:
          _i = 0, _arr = ['aftersales', 'refills', 'refunds', 'chargebacks'];
        case 11:
          if (!(_i < _arr.length)) {
            _context0.n = 16;
            break;
          }
          tbl = _arr[_i];
          _context0.p = 12;
          _context0.n = 13;
          return CLOUD.client.from(tbl).select('order_no, order_ref');
        case 13:
          _yield$CLOUD$client$f5 = _context0.v;
          rows = _yield$CLOUD$client$f5.data;
          if (rows) {
            rows.forEach(function (r) {
              var candidate = r.order_no || r.order_ref;
              if (!candidate) return;
              var m = candidate.match(new RegExp('^' + prefix + (separator || '') + '?(\\d+)$'));
              if (m) {
                var n = parseInt(m[1], 10);
                if (!isNaN(n) && n > maxNo) maxNo = n;
              }
            });
          }
          _context0.n = 15;
          break;
        case 14:
          _context0.p = 14;
          _t8 = _context0.v;
        case 15:
          _i++;
          _context0.n = 11;
          break;
        case 16:
          // 3. 生成新编号
          newNo = maxNo + 1;
          padded = String(newNo).padStart(padding, '0');
          orderNo = prefix + separator + padded; // 4. 更新 sequence(预览模式不更新)
          if (previewOnly) {
            _context0.n = 17;
            break;
          }
          _context0.n = 17;
          return CLOUD.client.from('site_order_sequences').update({
            current_no: newNo,
            updated_at: new Date().toISOString()
          }).eq('site', site);
        case 17:
          return _context0.a(2, {
            orderNo: orderNo,
            maxNo: maxNo,
            newNo: newNo,
            scanned: true
          });
        case 18:
          _context0.p = 18;
          _t9 = _context0.v;
          console.error('订单编号生成失败:', _t9);
          throw _t9;
        case 19:
          return _context0.a(2);
      }
    }, _callee0, null, [[12, 14], [7, 9], [4, 6], [1, 18]]);
  }));
  return function generateOrderNo(_x5) {
    return _ref17.apply(this, arguments);
  };
}();

// 生成跟单发群消息(自动化客服 Yulia 那种格式)
var generateDispatchText = function generateDispatchText(order, productList) {
  var lines = [];
  var country = order.ship_to_country || '';
  var city = order.ship_to_city || '';
  lines.push("delivery to the final destination".concat(city || country ? ' - ' + [city, country].filter(Boolean).join(', ') : '', ":"));
  lines.push('');
  lines.push('Address:');
  if (order.ship_to_address) lines.push(order.ship_to_address + ',');
  if (city || order.ship_to_state) lines.push([city, order.ship_to_state].filter(Boolean).join(', ') + (order.ship_to_country ? ',' : ''));
  if (order.ship_to_country) lines.push(order.ship_to_country);
  if (order.ship_to_zip) lines.push(order.ship_to_zip);
  if (order.ship_to_name) lines.push('');
  if (order.ship_to_name) lines.push("Contact Person : ".concat(order.ship_to_name));
  if (order.ship_to_phone) lines.push(order.ship_to_phone);
  lines.push('');
  lines.push("".concat(order.order_no, " \u53EF\u4EE5\u4E0B\u5355"));
  if (productList && productList.length > 0) {
    lines.push('');
    lines.push('产品清单:');
    productList.forEach(function (p) {
      lines.push("- ".concat(p.sku || '', " ").concat(p.name || '', " x ").concat(p.qty || 1));
    });
  }
  return lines.join('\n');
};

// ============================================================
// 🚨 拒付提醒横幅 - 顶部红色警告(7/3/1 天 + 逾期)
// ============================================================
var ChargebackReminderBanner = function ChargebackReminderBanner(_ref18) {
  var user = _ref18.user,
    employees = _ref18.employees,
    onJumpTo = _ref18.onJumpTo;
  var _useState49 = useState([]),
    _useState50 = _slicedToArray(_useState49, 2),
    urgent = _useState50[0],
    setUrgent = _useState50[1];
  var _useState51 = useState(function () {
      try {
        return new Set(JSON.parse(sessionStorage.getItem('cb_banner_dismissed') || '[]'));
      } catch (_unused4) {
        return new Set();
      }
    }),
    _useState52 = _slicedToArray(_useState51, 2),
    dismissed = _useState52[0],
    setDismissed = _useState52[1];
  var _useState53 = useState({
      user_ids: [],
      user_names: []
    }),
    _useState54 = _slicedToArray(_useState53, 2),
    owners = _useState54[0],
    setOwners = _useState54[1];

  // 拒付专人配置 + 数据
  var load = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
      var _yield$CLOUD$client$f6, settingRow, config, list, live, isAdmin, isOwner, filtered, _t0;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            if (CLOUD.client) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2);
          case 1:
            _context1.p = 1;
            _context1.n = 2;
            return CLOUD.client.from('system_settings').select('*').eq('key', 'chargeback_owners').single();
          case 2:
            _yield$CLOUD$client$f6 = _context1.v;
            settingRow = _yield$CLOUD$client$f6.data;
            config = (settingRow === null || settingRow === void 0 ? void 0 : settingRow.value) || {
              user_ids: [],
              user_names: []
            };
            setOwners(config);
            _context1.n = 3;
            return CLOUD.list('chargebacks', {
              order: {
                col: 'deadline',
                asc: true
              },
              limit: 500
            });
          case 3:
            list = _context1.v;
            live = (list || []).filter(function (c) {
              return !c.deleted && c.status !== 'won' && c.status !== 'lost' && c.status !== 'closed';
            }); // 只显示与当前用户相关的(负责人 / 主管 / 创建人)
            isAdmin = user.role === 'admin' || user.role === 'super_admin';
            isOwner = (config.user_ids || []).includes(user.id);
            filtered = live.filter(function (c) {
              var urgency = getChargebackUrgency(c);
              if (!urgency) return false;
              if (urgency.level === 'normal') return false;
              // 主管 + 拒付专人看所有 · 其他人只看自己创建/自己负责的
              if (isAdmin || isOwner) return true;
              if ((c.assigned_to || []).includes(user.id)) return true;
              if (c.created_by === user.id) return true;
              return false;
            });
            setUrgent(filtered.sort(function (a, b) {
              return (a.deadline || '').localeCompare(b.deadline || '');
            }));
            _context1.n = 5;
            break;
          case 4:
            _context1.p = 4;
            _t0 = _context1.v;
            console.warn('拒付提醒加载失败', _t0);
          case 5:
            return _context1.a(2);
        }
      }, _callee1, null, [[1, 4]]);
    }));
    return function load() {
      return _ref19.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
    var t = setInterval(load, 5 * 60 * 1000); // 5 分钟自动刷新
    return function () {
      return clearInterval(t);
    };
  }, [user.id]);

  // 桌面通知(每天最多一次)
  useEffect(function () {
    var _Notification;
    if (((_Notification = Notification) === null || _Notification === void 0 ? void 0 : _Notification.permission) !== 'granted') return;
    var today = new Date().toISOString().slice(0, 10);
    var notifKey = "cb_notif_".concat(user.id, "_").concat(today);
    if (sessionStorage.getItem(notifKey)) return;
    var criticalOnes = urgent.filter(function (c) {
      var _getChargebackUrgency;
      return ['overdue', 'today', 'critical'].includes((_getChargebackUrgency = getChargebackUrgency(c)) === null || _getChargebackUrgency === void 0 ? void 0 : _getChargebackUrgency.level);
    });
    if (criticalOnes.length > 0) {
      try {
        new Notification('⚠️ 紧急拒付提醒', {
          body: "".concat(criticalOnes.length, " \u4E2A\u62D2\u4ED8\u5373\u5C06\u5230\u671F/\u5DF2\u903E\u671F,\u8BF7\u7ACB\u5373\u5904\u7406!"),
          icon: '/favicon.ico',
          tag: 'chargeback-urgent',
          requireInteraction: true
        });
        sessionStorage.setItem(notifKey, '1');
      } catch (_unused5) {}
    }
  }, [urgent.length, user.id]);
  var visible = urgent.filter(function (c) {
    return !dismissed.has(c.id);
  });
  if (visible.length === 0) return null;
  var dismissOne = function dismissOne(id) {
    var next = new Set(dismissed);
    next.add(id);
    setDismissed(next);
    try {
      sessionStorage.setItem('cb_banner_dismissed', JSON.stringify(_toConsumableArray(next)));
    } catch (_unused6) {}
  };
  var top3 = visible.slice(0, 3);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      marginBottom: 12
    }
  }, top3.map(function (cb) {
    var u = getChargebackUrgency(cb);
    if (!u) return null;
    var isBlink = u.level === 'today' || u.level === 'critical' || u.level === 'overdue';
    return /*#__PURE__*/React.createElement("div", {
      key: cb.id,
      className: isBlink ? 'pulse-soft' : '',
      style: {
        padding: '10px 14px',
        borderRadius: 10,
        background: u.bg,
        border: "2px solid ".concat(u.color),
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, u.level === 'overdue' ? '🔥' : '⚠️'), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 200
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: u.color
      }
    }, u.label, " \xB7 \u62D2\u4ED8 ", cb.order_no, " \xB7 ", cb.customer_email || cb.customer_name || '?'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: u.color,
        opacity: .85,
        marginTop: 2
      }
    }, "\uD83D\uDCB0 ", cb.currency || 'USD', " ", cb.amount || 0, " \xB7 ", cb.platform || '', " \xB7 \u622A\u6B62 ", cb.deadline, (cb.assigned_to_names || []).length > 0 && " \xB7 \uD83D\uDC65 ".concat(cb.assigned_to_names.join('/')))), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onJumpTo && onJumpTo(cb);
      },
      style: {
        padding: '6px 14px',
        background: u.color,
        color: 'white',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: 600,
        fontFamily: 'inherit'
      }
    }, "\u7ACB\u5373\u5904\u7406 \u2192"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return dismissOne(cb.id);
      },
      title: "\u672C\u6B21\u4F1A\u8BDD\u6682\u65F6\u5FFD\u7565",
      style: {
        padding: '4px 8px',
        background: 'transparent',
        border: "1px solid ".concat(u.color),
        color: u.color,
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 11,
        fontFamily: 'inherit'
      }
    }, "\xD7"));
  }), visible.length > 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontSize: 11,
      color: '#991b1b',
      fontWeight: 600
    }
  }, "+ \u8FD8\u6709 ", visible.length - 3, " \u6761\u62D2\u4ED8\u9700\u8981\u5904\u7406"));
};

// ============================================================
// 🚨 拒付管理模块
// ============================================================
// ============================================================
// 🆕 TimeRangeFilter - 通用时间范围筛选组件
// 升级:支持传入 records 自动统计每个范围的条数 + 显示筛选反馈
// ============================================================
var TimeRangeFilter = function TimeRangeFilter(_ref20) {
  var value = _ref20.value,
    onChange = _ref20.onChange,
    customStart = _ref20.customStart,
    customEnd = _ref20.customEnd,
    onCustomChange = _ref20.onCustomChange,
    label = _ref20.label,
    records = _ref20.records,
    dateField = _ref20.dateField;
  // 🆕 计算每个时间范围匹配的条数
  var counts = useMemo(function () {
    if (!records || !Array.isArray(records)) return null;
    var c = {
      all: records.length
    };
    ['3d', '7d', '14d', '30d'].forEach(function (k) {
      c[k] = filterByTimeRange(records, k, null, null, dateField).length;
    });
    return c;
  }, [records, dateField]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      whiteSpace: 'nowrap'
    }
  }, label || '🕓 超期筛选:'), [{
    key: 'all',
    label: '全部'
  }, {
    key: '3d',
    label: '超 3 天未处理'
  }, {
    key: '7d',
    label: '超 7 天未处理'
  }, {
    key: '14d',
    label: '超 14 天未处理'
  }, {
    key: '30d',
    label: '超 30 天未处理'
  }, {
    key: 'custom',
    label: '📆 自定义日期'
  }].map(function (t) {
    var cnt = counts ? counts[t.key] : null;
    var isActive = value === t.key;
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return onChange(t.key);
      },
      style: {
        padding: '4px 11px',
        borderRadius: 14,
        fontSize: 11,
        cursor: 'pointer',
        fontFamily: 'inherit',
        border: '1px solid ' + (isActive ? 'var(--accent)' : 'var(--line)'),
        background: isActive ? 'var(--accent)' : 'white',
        color: isActive ? 'white' : 'var(--ink-2)',
        fontWeight: isActive ? 600 : 400,
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, t.label, cnt !== null && cnt !== undefined && t.key !== 'custom' && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 6px',
        borderRadius: 8,
        fontSize: 10,
        fontWeight: 700,
        background: isActive ? 'rgba(255,255,255,.25)' : cnt > 0 ? '#fef3c7' : '#f5f5f7',
        color: isActive ? 'white' : cnt > 0 ? '#854d0e' : 'var(--ink-4)',
        minWidth: 18,
        textAlign: 'center'
      }
    }, cnt));
  }), value === 'custom' && onCustomChange && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: customStart || '',
    onChange: function onChange(e) {
      return onCustomChange({
        start: e.target.value,
        end: customEnd
      });
    },
    style: {
      padding: '4px 8px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontFamily: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontSize: 11
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: customEnd || '',
    onChange: function onChange(e) {
      return onCustomChange({
        start: customStart,
        end: e.target.value
      });
    },
    style: {
      padding: '4px 8px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontFamily: 'inherit'
    }
  })));
};

// 🛡 全局时间筛选 - 语义: "超 N 天未处理"
// 🆕 fix15: filterByDateRange — 按"创建/更新在范围内"筛选 (语义跟 cross-dept / 反馈中心一致)
// 配合 AdvancedDateFilter 用 · 区别于上面的 filterByTimeRange("超 N 天未跟进"的老语义)
// 用法: filterByDateRange(list, dateFilter, 'created_at')
var filterByDateRange = function filterByDateRange(list, dateFilter, dateField) {
  if (!list || list.length === 0) return list;
  if (!dateFilter || dateFilter.kind === 'all') return list;
  var range = getDateRange(dateFilter);
  if (range.start <= 0 && range.end >= Infinity) return list;
  return list.filter(function (r) {
    // 优先使用传入的 dateField,再 fallback 到常见字段
    var candidates = [r[dateField], r.created_at_ms, r.updated_at, r.created_at, r.createdAt, r.date].filter(function (v) {
      return v !== undefined && v !== null && v !== '';
    });
    if (candidates.length === 0) return true; // 无日期字段 — 包含
    var ts = 0;
    var _iterator = _createForOfIteratorHelper(candidates),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var c = _step.value;
        var t = 0;
        if (typeof c === 'number') t = c;else if (typeof c === 'string') t = Date.parse(c) || 0;else if (c instanceof Date) t = c.getTime();
        if (t > ts) ts = t;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
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
var COUNTRY_MAP = {
  // 英文名 -> 标准化国家名
  'usa': 'United States',
  'us': 'United States',
  'u.s.': 'United States',
  'u.s.a': 'United States',
  'america': 'United States',
  'united states': 'United States',
  'united states of america': 'United States',
  'canada': 'Canada',
  'ca': 'Canada',
  'uk': 'United Kingdom',
  'u.k.': 'United Kingdom',
  'united kingdom': 'United Kingdom',
  'england': 'United Kingdom',
  'britain': 'United Kingdom',
  'great britain': 'United Kingdom',
  'scotland': 'United Kingdom',
  'wales': 'United Kingdom',
  'northern ireland': 'United Kingdom',
  'australia': 'Australia',
  'au': 'Australia',
  'aus': 'Australia',
  'new zealand': 'New Zealand',
  'nz': 'New Zealand',
  'germany': 'Germany',
  'deutschland': 'Germany',
  'de': 'Germany',
  'france': 'France',
  'fr': 'France',
  'italy': 'Italy',
  'italia': 'Italy',
  'it': 'Italy',
  'spain': 'Spain',
  'españa': 'Spain',
  'es': 'Spain',
  'netherlands': 'Netherlands',
  'holland': 'Netherlands',
  'nederland': 'Netherlands',
  'nl': 'Netherlands',
  'belgium': 'Belgium',
  'be': 'Belgium',
  'switzerland': 'Switzerland',
  'ch': 'Switzerland',
  'austria': 'Austria',
  'at': 'Austria',
  'sweden': 'Sweden',
  'se': 'Sweden',
  'norway': 'Norway',
  'no': 'Norway',
  'denmark': 'Denmark',
  'dk': 'Denmark',
  'finland': 'Finland',
  'fi': 'Finland',
  'poland': 'Poland',
  'polska': 'Poland',
  'pl': 'Poland',
  'ireland': 'Ireland',
  'ie': 'Ireland',
  'portugal': 'Portugal',
  'pt': 'Portugal',
  'greece': 'Greece',
  'gr': 'Greece',
  'czech republic': 'Czech Republic',
  'czechia': 'Czech Republic',
  'cz': 'Czech Republic',
  'japan': 'Japan',
  'jp': 'Japan',
  'south korea': 'South Korea',
  'korea': 'South Korea',
  'kr': 'South Korea',
  'china': 'China',
  'cn': 'China',
  'hong kong': 'Hong Kong',
  'hk': 'Hong Kong',
  'singapore': 'Singapore',
  'sg': 'Singapore',
  'mexico': 'Mexico',
  'méxico': 'Mexico',
  'mx': 'Mexico',
  'brazil': 'Brazil',
  'brasil': 'Brazil',
  'br': 'Brazil',
  'argentina': 'Argentina',
  'ar': 'Argentina',
  'chile': 'Chile',
  'cl': 'Chile',
  'india': 'India',
  'in': 'India',
  'south africa': 'South Africa',
  'za': 'South Africa',
  'israel': 'Israel',
  'il': 'Israel',
  'uae': 'United Arab Emirates',
  'united arab emirates': 'United Arab Emirates',
  'ae': 'United Arab Emirates',
  'saudi arabia': 'Saudi Arabia',
  'sa': 'Saudi Arabia',
  'turkey': 'Turkey',
  'türkiye': 'Turkey',
  'tr': 'Turkey',
  'russia': 'Russia',
  'ru': 'Russia',
  'ukraine': 'Ukraine',
  'ua': 'Ukraine',
  'latvia': 'Latvia',
  'lv': 'Latvia',
  'lithuania': 'Lithuania',
  'lt': 'Lithuania',
  'estonia': 'Estonia',
  'ee': 'Estonia'
};
var US_STATES = {
  'AL': 'Alabama',
  'AK': 'Alaska',
  'AZ': 'Arizona',
  'AR': 'Arkansas',
  'CA': 'California',
  'CO': 'Colorado',
  'CT': 'Connecticut',
  'DE': 'Delaware',
  'FL': 'Florida',
  'GA': 'Georgia',
  'HI': 'Hawaii',
  'ID': 'Idaho',
  'IL': 'Illinois',
  'IN': 'Indiana',
  'IA': 'Iowa',
  'KS': 'Kansas',
  'KY': 'Kentucky',
  'LA': 'Louisiana',
  'ME': 'Maine',
  'MD': 'Maryland',
  'MA': 'Massachusetts',
  'MI': 'Michigan',
  'MN': 'Minnesota',
  'MS': 'Mississippi',
  'MO': 'Missouri',
  'MT': 'Montana',
  'NE': 'Nebraska',
  'NV': 'Nevada',
  'NH': 'New Hampshire',
  'NJ': 'New Jersey',
  'NM': 'New Mexico',
  'NY': 'New York',
  'NC': 'North Carolina',
  'ND': 'North Dakota',
  'OH': 'Ohio',
  'OK': 'Oklahoma',
  'OR': 'Oregon',
  'PA': 'Pennsylvania',
  'RI': 'Rhode Island',
  'SC': 'South Carolina',
  'SD': 'South Dakota',
  'TN': 'Tennessee',
  'TX': 'Texas',
  'UT': 'Utah',
  'VT': 'Vermont',
  'VA': 'Virginia',
  'WA': 'Washington',
  'WV': 'West Virginia',
  'WI': 'Wisconsin',
  'WY': 'Wyoming',
  'DC': 'District of Columbia',
  'PR': 'Puerto Rico'
};
var CA_PROVINCES = {
  'AB': 'Alberta',
  'BC': 'British Columbia',
  'MB': 'Manitoba',
  'NB': 'New Brunswick',
  'NL': 'Newfoundland and Labrador',
  'NS': 'Nova Scotia',
  'NT': 'Northwest Territories',
  'NU': 'Nunavut',
  'ON': 'Ontario',
  'PE': 'Prince Edward Island',
  'QC': 'Quebec',
  'SK': 'Saskatchewan',
  'YT': 'Yukon'
};
var AU_STATES = {
  'NSW': 'New South Wales',
  'VIC': 'Victoria',
  'QLD': 'Queensland',
  'WA': 'Western Australia',
  'SA': 'South Australia',
  'TAS': 'Tasmania',
  'ACT': 'Australian Capital Territory',
  'NT': 'Northern Territory'
};
function parseAddressText(text) {
  if (!text || typeof text !== 'string') return {};
  // 标准化: 去 label 前缀 / 拆行 / 去空
  var cleaned = text.replace(/^\s*(name|姓名|recipient|联系人|attn|attention)\s*[::]\s*/gim, '').replace(/^\s*(phone|tel|mobile|电话|手机|联系电话)\s*[::]\s*/gim, '').replace(/^\s*(address|地址|street|street address)\s*[::]\s*/gim, '').replace(/^\s*(city|城市)\s*[::]\s*/gim, '').replace(/^\s*(state|province|州|省)\s*[::]\s*/gim, '').replace(/^\s*(zip|postcode|postal code|邮编|邮政编码)\s*[::]\s*/gim, '').replace(/^\s*(country|国家)\s*[::]\s*/gim, '');
  var lines = cleaned.split(/[\n\r]+/).map(function (l) {
    return l.trim();
  }).filter(Boolean);
  // 处理逗号分隔单行的情况(常见于客户复制 google maps)
  if (lines.length === 1 && lines[0].includes(',')) {
    lines = lines[0].split(',').map(function (l) {
      return l.trim();
    }).filter(Boolean);
  }
  if (lines.length === 0) return {};
  var result = {
    name: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  };
  var remaining = _toConsumableArray(lines);

  // 1) 电话 - 7+ 数字, 可有 + - ( ) 空格 . 但纯数字组合
  var phoneIdx = remaining.findIndex(function (l) {
    var digits = l.replace(/[\s+()\-.x扩分机]/gi, '').replace(/[^\d]/g, '');
    if (digits.length < 7 || digits.length > 16) return false;
    // 要求至少 50% 是数字才算电话(避免错把地址当电话)
    var digitRatio = digits.length / l.length;
    return digitRatio > 0.5;
  });
  if (phoneIdx >= 0) {
    result.phone = remaining[phoneIdx].trim();
    remaining.splice(phoneIdx, 1);
  }

  // 2) 国家 - 通常在最后,匹配国家名单
  for (var i = remaining.length - 1; i >= 0; i--) {
    var lower = remaining[i].toLowerCase().trim().replace(/[.,;]$/, '');
    if (COUNTRY_MAP[lower]) {
      result.country = COUNTRY_MAP[lower];
      remaining.splice(i, 1);
      break;
    }
  }

  // 3) 城市+州+邮编 - 找形如 "City, ST ZIP" / "ZIP City" 的行
  // US/CA 模式: "Anytown, CA 90210" 或 "Toronto, ON M5V 3A8"
  for (var _i2 = remaining.length - 1; _i2 >= 0; _i2--) {
    var line = remaining[_i2];
    // US 模式: City, STATE ZIP (5-digit 或 5+4)
    var m = line.match(/^(.+?),\s*([A-Z]{2})\s+(\d{5}(?:-\d{4})?)\s*$/);
    if (m) {
      result.city = m[1].trim();
      result.state = m[2];
      result.zip = m[3];
      if (!result.country && US_STATES[m[2]]) result.country = 'United States';
      remaining.splice(_i2, 1);
      break;
    }
    // CA 模式: City, ON M5V 3A8
    m = line.match(/^(.+?),\s*([A-Z]{2})\s+([A-Z]\d[A-Z]\s*\d[A-Z]\d)\s*$/i);
    if (m) {
      result.city = m[1].trim();
      result.state = m[2].toUpperCase();
      result.zip = m[3].toUpperCase();
      if (!result.country && CA_PROVINCES[m[2].toUpperCase()]) result.country = 'Canada';
      remaining.splice(_i2, 1);
      break;
    }
    // AU 模式: Melbourne VIC 3000  (no comma)
    m = line.match(/^(.+?)\s+(NSW|VIC|QLD|WA|SA|TAS|ACT|NT)\s+(\d{4})\s*$/i);
    if (m) {
      result.city = m[1].trim();
      result.state = m[2].toUpperCase();
      result.zip = m[3];
      if (!result.country) result.country = 'Australia';
      remaining.splice(_i2, 1);
      break;
    }
    // UK 模式: City, POSTCODE (如 London SW1A 2AA)
    m = line.match(/^(.+?)\s+([A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2})\s*$/i);
    if (m) {
      result.city = m[1].trim();
      result.zip = m[2].toUpperCase().replace(/\s+/g, ' ');
      if (!result.country) result.country = 'United Kingdom';
      remaining.splice(_i2, 1);
      break;
    }
    // 欧洲模式: PostalCode CityName 如 "10115 Berlin" / "75001 Paris" / "1011 Amsterdam"
    m = line.match(/^(\d{4,6}(?:[\s-]\d+)?)\s+(.+)$/);
    if (m && m[2].length >= 2 && !/^\d/.test(m[2].trim().charAt(0))) {
      result.zip = m[1].trim();
      result.city = m[2].trim();
      remaining.splice(_i2, 1);
      break;
    }
    // 拉脱维亚类: City LV-2015
    m = line.match(/^(.+?),?\s+([A-Z]{1,3}-\d{3,5})\s*$/);
    if (m) {
      result.city = m[1].trim();
      result.zip = m[2];
      remaining.splice(_i2, 1);
      break;
    }
    // 通用回退: City, ZIP   或   City ZIP
    m = line.match(/^(.+?)[,\s]+(\d{4,6})\s*$/);
    if (m && /[a-zA-Z\u4e00-\u9fa5]/.test(m[1])) {
      result.city = m[1].trim().replace(/,$/, '');
      result.zip = m[2];
      remaining.splice(_i2, 1);
      break;
    }
  }

  // 4) 剩余行: 第一行通常是名字,后面是街道
  if (remaining.length > 0) {
    // 如果第一行看起来像街道(以数字开头或包含 street/road/avenue 等),那名字可能缺失
    var first = remaining[0];
    var looksLikeStreet = /^\d/.test(first) || /\b(st|street|rd|road|ave|avenue|blvd|boulevard|lane|ln|drive|dr|way|court|ct|place|pl|square|sq|plaza|plz|alley|terrace|highway|hwy|route|rt|路|街|道|巷|号|室|栋|号楼|大道|街道)\b/i.test(first) || /^(unit|apt|apartment|suite|ste|室|房|楼|号)/i.test(first);
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
var filterByTimeRange = function filterByTimeRange(list, timeFilter, customStart, customEnd, dateField) {
  if (!list || list.length === 0) return list;
  if (timeFilter === 'all') return list;
  var today = todayISO();

  // 自定义日期范围:保留旧语义(范围内创建/更新的)
  if (timeFilter === 'custom') {
    if (!customStart) return list;
    var cutoffStart = customStart;
    var cutoffEnd = customEnd || today;
    var tryFields = [dateField, 'updated_at', 'created_at', 'createdAt', 'date', 'created'].filter(Boolean);
    return list.filter(function (r) {
      var raw = null;
      var _iterator2 = _createForOfIteratorHelper(tryFields),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var f = _step2.value;
          if (r[f]) {
            raw = r[f];
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (!raw) return true;
      var dateStr;
      if (typeof raw === 'string') dateStr = raw.slice(0, 10);else if (raw instanceof Date) dateStr = raw.toISOString().slice(0, 10);else if (typeof raw === 'number') dateStr = new Date(raw).toISOString().slice(0, 10);else return true;
      return dateStr >= cutoffStart && dateStr <= cutoffEnd;
    });
  }

  // "超 N 天未处理" 语义
  var staleDays = null;
  if (timeFilter === '3d') staleDays = 3;else if (timeFilter === '7d') staleDays = 7;else if (timeFilter === '14d') staleDays = 14;else if (timeFilter === '30d') staleDays = 30;
  if (staleDays === null) return list;

  // 阈值: 最后处理时间 <= cutoff 的算"超 N 天未处理"
  var cutoff = addDays(today, -staleDays);
  return list.filter(function (r) {
    // 优先级:updated_at(最后修改) > 传入的 dateField > created_at > date
    // 取最新的一个(代表"最后一次被处理的时间")
    var candidates = [r.updated_at, r[dateField], r.created_at, r.createdAt, r.date].filter(Boolean);
    if (candidates.length === 0) return false; // 无日期 → 不算超期(因为不知道何时建的)

    // 取最新的一次更新时间
    var latest = '';
    var _iterator3 = _createForOfIteratorHelper(candidates),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var c = _step3.value;
        var cs = typeof c === 'string' ? c.slice(0, 19) : c instanceof Date ? c.toISOString().slice(0, 19) : typeof c === 'number' ? new Date(c).toISOString().slice(0, 19) : '';
        if (cs > latest) latest = cs;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (!latest) return false;
    var latestDate = latest.slice(0, 10);
    return latestDate <= cutoff; // 超 N 天没被处理过
  });
};

// 🔍 全局调试工具(在浏览器控制台输入 window.__debugTimeFilter(records,'7d','date'))
if (typeof window !== 'undefined') {
  window.__debugTimeFilter = function (list, timeFilter, dateField) {
    var today = todayISO();
    var staleDays = null;
    if (timeFilter === '3d') staleDays = 3;else if (timeFilter === '7d') staleDays = 7;else if (timeFilter === '14d') staleDays = 14;else if (timeFilter === '30d') staleDays = 30;
    var cutoff = staleDays ? addDays(today, -staleDays) : null;
    console.log("\uD83D\uDD0D \u8D85\u671F\u7B5B\u9009\u8BCA\u65AD:\n  \u4ECA\u5929: ".concat(today, "\n  \u7B5B\u9009: \"\u8D85 ").concat(staleDays, " \u5929\u672A\u5904\u7406\" (\u9608\u503C: \u6700\u540E\u5904\u7406 \u2264 ").concat(cutoff, ")\n  \u5B57\u6BB5: ").concat(dateField || '默认顺序', "\n  \u8F93\u5165\u603B\u6570: ").concat((list === null || list === void 0 ? void 0 : list.length) || 0));
    if (list && list.length > 0) {
      var sample = list.slice(0, 8).map(function (r) {
        var candidates = [r.updated_at, r[dateField], r.created_at, r.createdAt, r.date].filter(Boolean);
        var latest = '';
        var _iterator4 = _createForOfIteratorHelper(candidates),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var c = _step4.value;
            var cs = typeof c === 'string' ? c.slice(0, 19) : '';
            if (cs > latest) latest = cs;
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        var days = latest ? Math.floor((new Date(today) - new Date(latest.slice(0, 10))) / 86400000) : null;
        return {
          id: r.id,
          latest: latest.slice(0, 10) || '(无日期)',
          天数: days === null ? '?' : days + ' 天',
          匹配: cutoff && latest ? latest.slice(0, 10) <= cutoff ? '✓ 超 ' + staleDays + ' 天' : '✗' : '?'
        };
      });
      console.table(sample);
    }
    var filtered = filterByTimeRange(list, timeFilter, null, null, dateField);
    console.log("  \u7B5B\u9009\u540E: ".concat(filtered.length, " \u6761(\u8D85 ").concat(staleDays, " \u5929\u672A\u5904\u7406)"));
    return filtered;
  };
}

// ============================================================
// 🆕 WorkSnapshotPanel - 今日工作快照(上班第一眼看到的醒目卡片)
// 涉及: 客服跟进逾期 / 拒付紧急 / 线下单待发货 / 定制无进展 / 实拍无回复 / 退款待审
// ============================================================
var WorkSnapshotPanel = function WorkSnapshotPanel(_ref21) {
  var user = _ref21.user,
    employees = _ref21.employees,
    records = _ref21.records,
    onJumpTo = _ref21.onJumpTo;
  var _useState55 = useState({
      chargebacks: [],
      offline: [],
      custom: [],
      photo: [],
      refunds: [],
      aftersales: [],
      refills: []
    }),
    _useState56 = _slicedToArray(_useState55, 2),
    data = _useState56[0],
    setData = _useState56[1];
  var _useState57 = useState({
      cs_followup: 7,
      chargeback: 3,
      offline_order: 5,
      custom_inquiry: 7,
      photo_verif: 5,
      aftersale: 14,
      refill: 14,
      refund: 7
    }),
    _useState58 = _slicedToArray(_useState57, 2),
    thresholds = _useState58[0],
    setThresholds = _useState58[1];
  var _useState59 = useState(true),
    _useState60 = _slicedToArray(_useState59, 2),
    loading = _useState60[0],
    setLoading = _useState60[1];
  var isAdminRole = user && (user.role === 'admin' || user.role === 'super_admin');
  var load = /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
      var _yield$CLOUD$client$f7, th, _yield$Promise$all3, _yield$Promise$all4, cb, oo, ci, pv, rfd, af, rf, _t1, _t10;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            setLoading(true);
            _context10.p = 1;
            _context10.p = 2;
            _context10.n = 3;
            return CLOUD.client.from('system_settings').select('*').eq('key', 'alert_thresholds').single();
          case 3:
            _yield$CLOUD$client$f7 = _context10.v;
            th = _yield$CLOUD$client$f7.data;
            if (th !== null && th !== void 0 && th.value) setThresholds(function (prev) {
              return _objectSpread(_objectSpread({}, prev), th.value);
            });
            _context10.n = 5;
            break;
          case 4:
            _context10.p = 4;
            _t1 = _context10.v;
          case 5:
            _context10.n = 6;
            return Promise.all([CLOUD.list('chargebacks', {
              limit: 300
            }), CLOUD.list('offline_orders', {
              limit: 300
            }), CLOUD.list('custom_inquiries', {
              limit: 300
            }), CLOUD.list('photo_verifications', {
              limit: 300
            }), CLOUD.list('refunds', {
              limit: 300
            }), CLOUD.list('aftersales', {
              limit: 300
            }), CLOUD.list('refills', {
              limit: 300
            })]);
          case 6:
            _yield$Promise$all3 = _context10.v;
            _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 7);
            cb = _yield$Promise$all4[0];
            oo = _yield$Promise$all4[1];
            ci = _yield$Promise$all4[2];
            pv = _yield$Promise$all4[3];
            rfd = _yield$Promise$all4[4];
            af = _yield$Promise$all4[5];
            rf = _yield$Promise$all4[6];
            setData({
              chargebacks: (cb || []).filter(function (x) {
                return !x.deleted;
              }),
              offline: (oo || []).filter(function (x) {
                return !x.deleted;
              }),
              custom: (ci || []).filter(function (x) {
                return !x.deleted;
              }),
              photo: (pv || []).filter(function (x) {
                return !x.deleted;
              }),
              refunds: (rfd || []).filter(function (x) {
                return !x.deleted;
              }),
              aftersales: (af || []).filter(function (x) {
                return !x.deleted;
              }),
              refills: (rf || []).filter(function (x) {
                return !x.deleted;
              })
            });
            _context10.n = 8;
            break;
          case 7:
            _context10.p = 7;
            _t10 = _context10.v;
            console.warn('快照加载失败', _t10);
          case 8:
            setLoading(false);
          case 9:
            return _context10.a(2);
        }
      }, _callee10, null, [[2, 4], [1, 7]]);
    }));
    return function load() {
      return _ref22.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
  }, []);

  // 计算"我"的或"全员"的未完成工作(按超期天数)
  var stats = useMemo(function () {
    var _window$__canProcessR, _window;
    var today = todayISO();
    var isMine = function isMine(r) {
      var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['created_by', 'ownerId', 'owner_id'];
      if (isAdminRole) return true; // 主管看全部
      return fields.some(function (f) {
        return r[f] === user.id;
      });
    };

    // 客服跟进 - 超 N 天未解决
    var csOverdue = (records || []).filter(function (r) {
      return !r.deleted && isRecordMeaningful(r) && r.status !== 'resolved' && r.status !== 'transferred' && r.date && r.date < addDays(today, -thresholds.cs_followup) && isMine(r);
    });
    // 今日到期跟进
    var csDueToday = (records || []).filter(function (r) {
      return !r.deleted && isMine(r) && r.status !== 'resolved' && r.nextFollowUp === today;
    });

    // 拒付 - 7天内截止 或 已逾期
    var cbUrgent = data.chargebacks.filter(function (c) {
      return isMine(c, ['created_by']) && !['won', 'lost', 'closed'].includes(c.status);
    }).filter(function (c) {
      var u = getChargebackUrgency(c);
      return u && ['overdue', 'today', 'critical', 'urgent'].includes(u.level);
    });

    // 线下单 - 待付款/已付款超 N 天未发货
    var offlineStuck = data.offline.filter(function (o) {
      return isMine(o) && ['pending_payment', 'paid'].includes(o.status) && o.created_at && o.created_at.slice(0, 10) < addDays(today, -thresholds.offline_order);
    });

    // 定制咨询 - 询单/出图/报价 阶段超 N 天无进展
    var customStuck = data.custom.filter(function (c) {
      return isMine(c) && ['inquiry', 'sketch', 'quoted'].includes(c.stage) && c.updated_at && c.updated_at.slice(0, 10) < addDays(today, -thresholds.custom_inquiry);
    });

    // 实拍核实 - 待联系/已发邮件 超 N 天无回复
    var photoStuck = data.photo.filter(function (p) {
      return isMine(p) && ['pending_contact', 'emailed'].includes(p.status) && p.created_at && p.created_at.slice(0, 10) < addDays(today, -thresholds.photo_verif);
    });

    // 退款 - 待审超 N 天
    var refundStuck = data.refunds.filter(function (r) {
      return isMine(r) && r.status === 'pending' && r.created_at && r.created_at.slice(0, 10) < addDays(today, -thresholds.refund);
    });

    // 🆕 fix9: 退款处理人专属视图 — 显示所有(不限于"我创建的")待审/待完成的退款
    // 让 Miya / Nicole / Yulia 能在第一眼看到今天有多少要处理
    var isRefundProcessor = typeof window !== 'undefined' && ((_window$__canProcessR = (_window = window).__canProcessRefund) === null || _window$__canProcessR === void 0 ? void 0 : _window$__canProcessR.call(_window, user));
    var refundPendingForProcessor = isRefundProcessor ? data.refunds.filter(function (r) {
      return r.status === 'pending';
    }) // 全员的待审
    : [];
    var refundApprovedForProcessor = isRefundProcessor ? data.refunds.filter(function (r) {
      return r.status === 'approved';
    }) // 全员的待完成(已批准但还没标记完成)
    : [];

    // 售后 - 未完成超 N 天
    var aftersaleStuck = data.aftersales.filter(function (a) {
      return isMine(a) && a.status !== 'completed' && a.status !== 'closed' && a.created_at && a.created_at.slice(0, 10) < addDays(today, -thresholds.aftersale);
    });

    // 补件 - 未完成超 N 天
    var refillStuck = data.refills.filter(function (r) {
      return isMine(r) && r.status !== 'completed' && r.created_at && r.created_at.slice(0, 10) < addDays(today, -thresholds.refill);
    });
    return {
      csOverdue: csOverdue,
      csDueToday: csDueToday,
      cbUrgent: cbUrgent,
      offlineStuck: offlineStuck,
      customStuck: customStuck,
      photoStuck: photoStuck,
      refundStuck: refundStuck,
      aftersaleStuck: aftersaleStuck,
      refillStuck: refillStuck,
      refundPendingForProcessor: refundPendingForProcessor,
      refundApprovedForProcessor: refundApprovedForProcessor,
      isRefundProcessor: isRefundProcessor
    };
  }, [data, records, thresholds, user, isAdminRole]);
  var totalAlerts = stats.csOverdue.length + stats.csDueToday.length + stats.cbUrgent.length + stats.offlineStuck.length + stats.customStuck.length + stats.photoStuck.length + stats.refundStuck.length + stats.aftersaleStuck.length + stats.refillStuck.length + stats.refundPendingForProcessor.length + stats.refundApprovedForProcessor.length;
  if (loading) return null;
  if (totalAlerts === 0) return null; // 没有未完成 → 不显示

  var AlertCell = function AlertCell(_ref23) {
    var icon = _ref23.icon,
      label = _ref23.label,
      count = _ref23.count,
      threshold = _ref23.threshold,
      color = _ref23.color,
      onClick = _ref23.onClick,
      urgent = _ref23.urgent;
    return count === 0 ? null : /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      style: {
        padding: '10px 12px',
        background: 'white',
        border: "2px solid ".concat(color),
        borderRadius: 10,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        transition: 'all .15s',
        minWidth: 0
      },
      onMouseEnter: function onMouseEnter(e) {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = "0 4px 14px ".concat(color, "30");
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        lineHeight: 1,
        flexShrink: 0
      }
    }, icon), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22,
        fontWeight: 700,
        color: color,
        lineHeight: 1
      }
    }, count), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, "\u6761"), urgent && /*#__PURE__*/React.createElement("span", {
      className: "pulse-soft",
      style: {
        fontSize: 9,
        padding: '1px 5px',
        background: '#dc2626',
        color: 'white',
        borderRadius: 6,
        fontWeight: 700
      }
    }, "\u6025")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-2)',
        fontWeight: 500,
        marginTop: 2
      }
    }, label), threshold && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-4)',
        marginTop: 1
      }
    }, "\u8D85 ", threshold, " \u5929\u672A\u5904\u7406")));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl fade-in",
    style: {
      padding: 14,
      marginBottom: 14,
      background: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 100%)',
      border: '2px solid #fbbf24'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: '#78350f',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, "\uD83D\uDD25 \u4ECA\u65E5\u5DE5\u4F5C\u5FEB\u7167 \xB7 \u5F85\u89E3\u51B3 ", totalAlerts, " \u6761"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#92400e',
      marginTop: 2
    }
  }, isAdminRole ? '👑 主管视角:全员未完成工作' : '👤 你的未完成工作', " \xB7 \u70B9\u51FB\u4EFB\u4E00\u5361\u7247\u76F4\u63A5\u8DF3\u8F6C")), isAdminRole && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onJumpTo && onJumpTo('admin', {
        section: 'alert_thresholds'
      });
    },
    style: {
      padding: '4px 10px',
      background: 'white',
      color: '#78350f',
      border: '1px solid #fbbf24',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\u2699 \u8C03\u6574\u9608\u503C")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 8
    }
  }, stats.isRefundProcessor && stats.refundPendingForProcessor.length > 0 && /*#__PURE__*/React.createElement(AlertCell, {
    icon: "\uD83D\uDCB0",
    label: "\u4ECA\u5929\u8981\u5BA1\u6838\u7684\u9000\u6B3E",
    count: stats.refundPendingForProcessor.length,
    color: "#dc2626",
    urgent: true,
    threshold: "\u5168\u5458\u7533\u8BF7 \xB7 \u4F60\u9700\u5904\u7406",
    onClick: function onClick() {
      return onJumpTo && onJumpTo('events');
    }
  }), stats.isRefundProcessor && stats.refundApprovedForProcessor.length > 0 && /*#__PURE__*/React.createElement(AlertCell, {
    icon: "\u2705",
    label: "\u4ECA\u5929\u8981\u6253\u6B3E\u7684\u9000\u6B3E",
    count: stats.refundApprovedForProcessor.length,
    color: "#16a34a",
    urgent: true,
    threshold: "\u5DF2\u5BA1\u6838 \xB7 \u5F85\u4F60\u6253\u6B3E\u4E0A\u4F20\u622A\u56FE",
    onClick: function onClick() {
      return onJumpTo && onJumpTo('events');
    }
  }), /*#__PURE__*/React.createElement(AlertCell, {
    icon: "\u23F0",
    label: "\u8DDF\u8FDB\u903E\u671F/\u4ECA\u65E5\u5230\u671F",
    count: stats.csOverdue.length + stats.csDueToday.length,
    color: "#dc2626",
    threshold: "\u8D85 ".concat(thresholds.cs_followup, " \u5929 / \u4ECA\u65E5"),
    urgent: true,
    onClick: function onClick() {
      return onJumpTo && onJumpTo('cs');
    }
  }), /*#__PURE__*/React.createElement(AlertCell, {
    icon: "\uD83D\uDEA8",
    label: "\u62D2\u4ED8\u7D27\u6025",
    count: stats.cbUrgent.length,
    color: "#dc2626",
    urgent: true,
    threshold: "7 \u5929\u5185\u622A\u6B62",
    onClick: function onClick() {
      return onJumpTo && onJumpTo('chargebacks');
    }
  }), /*#__PURE__*/React.createElement(AlertCell, {
    icon: "\uD83D\uDCB3",
    label: "\u7EBF\u4E0B\u5355\u5F85\u53D1\u8D27",
    count: stats.offlineStuck.length,
    color: "#0369a1",
    threshold: thresholds.offline_order,
    onClick: function onClick() {
      return onJumpTo && onJumpTo('offline_orders');
    }
  }), /*#__PURE__*/React.createElement(AlertCell, {
    icon: "\uD83C\uDFA8",
    label: "\u5B9A\u5236\u65E0\u8FDB\u5C55",
    count: stats.customStuck.length,
    color: "#7c3aed",
    threshold: thresholds.custom_inquiry,
    onClick: function onClick() {
      return onJumpTo && onJumpTo('custom_photo');
    }
  }), /*#__PURE__*/React.createElement(AlertCell, {
    icon: "\uD83D\uDCF8",
    label: "\u5B9E\u62CD\u5F85\u56DE\u590D",
    count: stats.photoStuck.length,
    color: "#be185d",
    threshold: thresholds.photo_verif,
    onClick: function onClick() {
      return onJumpTo && onJumpTo('custom_photo');
    }
  }), /*#__PURE__*/React.createElement(AlertCell, {
    icon: "\uD83D\uDCB0",
    label: "\u6211\u7684\u9000\u6B3E\u5F85\u5BA1",
    count: stats.refundStuck.length,
    color: "#d97706",
    threshold: thresholds.refund,
    onClick: function onClick() {
      return onJumpTo && onJumpTo('events');
    }
  }), /*#__PURE__*/React.createElement(AlertCell, {
    icon: "\uD83D\uDD27",
    label: "\u552E\u540E\u6302\u8D77",
    count: stats.aftersaleStuck.length,
    color: "#ea580c",
    threshold: thresholds.aftersale,
    onClick: function onClick() {
      return onJumpTo && onJumpTo('events');
    }
  }), /*#__PURE__*/React.createElement(AlertCell, {
    icon: "\uD83D\uDCE6",
    label: "\u8865\u4EF6\u6302\u8D77",
    count: stats.refillStuck.length,
    color: "#0891b2",
    threshold: thresholds.refill,
    onClick: function onClick() {
      return onJumpTo && onJumpTo('events');
    }
  })));
};
