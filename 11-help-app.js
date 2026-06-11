// ====== cs-system — 11-help-app ======
// 版本 2026.06.05-fix216
// 预编译切片
//
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
// ====== cs-system — 11-help-app ======
// 版本 2026.06.05-fix216
// 预编译切片
//

var HelpCenterModule = function HelpCenterModule(_ref) {
  var user = _ref.user;
  var _useState = useState('intro'),
    _useState2 = _slicedToArray(_useState, 2),
    section = _useState2[0],
    setSection = _useState2[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var sections = [{
    key: 'intro',
    label: '🚀 新人入门',
    desc: '3 分钟上手'
  }, {
    key: 'modules',
    label: '📚 模块详解',
    desc: '19 个模块功能说明'
  }, {
    key: 'roles',
    label: '👥 角色权限',
    desc: '4 种角色能做什么'
  }, {
    key: 'shortcuts',
    label: '⌨ 快捷操作',
    desc: '右键 / 粘贴 / 多窗口'
  }, {
    key: 'bugs',
    label: '🐛 报告 Bug',
    desc: '怎么发问题给 AI 修'
  }, {
    key: 'history',
    label: '📦 版本日志',
    desc: "".concat(VERSION_HISTORY.length, " \u4E2A\u7248\u672C\u8BB0\u5F55")
  }, {
    key: 'ai',
    label: '🤖 AI 能力清单',
    desc: 'Claude 能做什么'
  }, {
    key: 'roadmap',
    label: '🛣 待开发路线图',
    desc: '还可以加什么'
  }, {
    key: 'philosophy',
    label: '💡 设计哲学',
    desc: '为什么这么设计'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-5",
    style: {
      marginBottom: 12,
      background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #ddd6fe 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 20,
      fontWeight: 600,
      color: '#5b21b6'
    }
  }, "\uD83D\uDCD6 \u4F7F\u7528\u624B\u518C / \u5E2E\u52A9\u4E2D\u5FC3"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#6b21a8',
      marginTop: 4
    }
  }, "\u65B0\u4EBA\u5165\u804C\u5FC5\u8BFB \xB7 \u8001\u5458\u5DE5\u67E5\u9605\u624B\u518C \xB7 \u53CD\u9988 Bug \xB7 \u5F53\u524D\u7248\u672C ", /*#__PURE__*/React.createElement("strong", null, APP_VERSION))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 10px',
      background: 'white',
      borderRadius: 14,
      fontSize: 11,
      color: '#6b21a8',
      fontWeight: 600
    }
  }, "\u5171 ", sections.length, " \u4E2A\u7AE0\u8282"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 10px',
      background: 'white',
      borderRadius: 14,
      fontSize: 11,
      color: '#6b21a8',
      fontWeight: 600
    }
  }, VERSION_HISTORY.length, " \u4E2A\u7248\u672C")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-2",
    style: {
      position: 'sticky',
      top: 80
    }
  }, sections.map(function (s) {
    var isSel = section === s.key;
    return /*#__PURE__*/React.createElement("button", {
      key: s.key,
      onClick: function onClick() {
        return setSection(s.key);
      },
      style: {
        width: '100%',
        textAlign: 'left',
        padding: '9px 12px',
        marginBottom: 2,
        background: isSel ? 'var(--accent-soft)' : 'transparent',
        color: isSel ? 'var(--accent)' : 'var(--ink-2)',
        border: 'none',
        borderRadius: 7,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 12.5,
        fontWeight: isSel ? 600 : 500,
        transition: 'background .12s'
      },
      onMouseEnter: function onMouseEnter(e) {
        if (!isSel) e.currentTarget.style.background = 'var(--bg-elevated)';
      },
      onMouseLeave: function onMouseLeave(e) {
        if (!isSel) e.currentTarget.style.background = 'transparent';
      }
    }, /*#__PURE__*/React.createElement("div", null, s.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: isSel ? 'var(--accent)' : 'var(--ink-4)',
        marginTop: 1,
        fontWeight: 400
      }
    }, s.desc));
  })), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-6",
    style: {
      minHeight: 600
    }
  }, section === 'intro' && /*#__PURE__*/React.createElement(HelpSectionIntro, {
    user: user
  }), section === 'modules' && /*#__PURE__*/React.createElement(HelpSectionModules, {
    user: user,
    isAdmin: isAdmin
  }), section === 'roles' && /*#__PURE__*/React.createElement(HelpSectionRoles, null), section === 'shortcuts' && /*#__PURE__*/React.createElement(HelpSectionShortcuts, null), section === 'bugs' && /*#__PURE__*/React.createElement(HelpSectionBugs, null), section === 'history' && /*#__PURE__*/React.createElement(HelpSectionHistory, null), section === 'ai' && /*#__PURE__*/React.createElement(HelpSectionAi, null), section === 'roadmap' && /*#__PURE__*/React.createElement(HelpSectionRoadmap, null), section === 'philosophy' && /*#__PURE__*/React.createElement(HelpSectionPhilosophy, null))));
};

// 共用样式组件
var HelpH1 = function HelpH1(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--ink)',
      marginBottom: 12,
      paddingBottom: 8,
      borderBottom: '1px solid var(--line)'
    }
  }, children);
};
var HelpH2 = function HelpH2(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink)',
      marginTop: 18,
      marginBottom: 8
    }
  }, children);
};
var HelpP = function HelpP(_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-2)',
      lineHeight: 1.7,
      marginBottom: 8
    }
  }, children);
};
var HelpUL = function HelpUL(_ref5) {
  var items = _ref5.items;
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      fontSize: 12.5,
      color: 'var(--ink-2)',
      lineHeight: 1.8,
      paddingLeft: 20,
      marginBottom: 8
    }
  }, items.map(function (t, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        marginBottom: 2
      }
    }, t);
  }));
};
var HelpCode = function HelpCode(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/React.createElement("code", {
    style: {
      padding: '2px 6px',
      background: '#f5f5f7',
      border: '1px solid var(--line)',
      borderRadius: 4,
      fontSize: 11,
      fontFamily: 'ui-monospace, monospace',
      color: '#7c3aed'
    }
  }, children);
};
var HelpNote = function HelpNote(_ref7) {
  var children = _ref7.children,
    _ref7$kind = _ref7.kind,
    kind = _ref7$kind === void 0 ? 'info' : _ref7$kind;
  var c = kind === 'warn' ? {
    bg: '#fef3c7',
    bd: '#fde047',
    tx: '#854d0e'
  } : kind === 'danger' ? {
    bg: '#fee2e2',
    bd: '#fca5a5',
    tx: '#b91c1c'
  } : kind === 'good' ? {
    bg: '#dcfce7',
    bd: '#86efac',
    tx: '#15803d'
  } : {
    bg: '#eff6ff',
    bd: '#bfdbfe',
    tx: '#1e40af'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: c.bg,
      border: '1px solid ' + c.bd,
      borderRadius: 8,
      fontSize: 12,
      color: c.tx,
      lineHeight: 1.6,
      marginBottom: 10
    }
  }, children);
};

// ════════════════ Section: 新人入门 ════════════════
var HelpSectionIntro = function HelpSectionIntro(_ref8) {
  var user = _ref8.user;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HelpH1, null, "\uD83D\uDE80 3 \u5206\u949F\u4E0A\u624B \u2014 \u65B0\u4EBA\u5FC5\u8BFB"), /*#__PURE__*/React.createElement(HelpP, null, "\u6B22\u8FCE\u4F7F\u7528 ", /*#__PURE__*/React.createElement("strong", null, "Dekorfine \u7EDF\u4E00\u5DE5\u4F5C\u53F0"), " \u2014 \u516C\u53F8\u5BA2\u670D + \u8D22\u52A1 + \u62A5\u4EF7\u7684\u5168\u6D41\u7A0B\u7CFB\u7EDF\u3002"), /*#__PURE__*/React.createElement(HelpH2, null, "\u7B2C\u4E00\u6B65:\u8BA4\u8BC6\u4F60\u7684\u89D2\u8272"), /*#__PURE__*/React.createElement(HelpUL, {
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HelpCode, null, "\u5458\u5DE5 staff"), " \u2014 \u666E\u901A\u5BA2\u670D,\u5904\u7406\u81EA\u5DF1\u7684\u5BA2\u6237\u3001\u8BA2\u5355"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HelpCode, null, "\u4E3B\u7BA1 admin"), " \u2014 \u770B\u6240\u6709\u5458\u5DE5\u7684\u5DE5\u5355 + \u5BA1\u6279 + \u914D\u7F6E\u6743\u9650"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HelpCode, null, "\u603B\u7BA1 super_admin"), " \u2014 \u5168\u90E8\u6743\u9650(\u8001\u677F)"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HelpCode, null, "\u8D22\u52A1 finance"), " \u2014 \u4E13\u8D23\u9000\u6B3E / \u8FD0\u8D39\u5BF9\u8D26")]
  }), /*#__PURE__*/React.createElement(HelpP, null, "\u4F60\u73B0\u5728\u7684\u8EAB\u4EFD:", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--accent)'
    }
  }, user.name, " ", user.alias ? '· ' + user.alias : '', " \xB7 ", user.role === 'super_admin' ? '总管' : user.role === 'admin' ? '主管' : user.role === 'finance' ? '财务' : '员工')), /*#__PURE__*/React.createElement(HelpH2, null, "\u7B2C\u4E8C\u6B65:\u8BA4\u8BC6\u4F60\u7684\u5DE5\u4F5C\u53F0"), /*#__PURE__*/React.createElement(HelpUL, {
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "\u9876\u90E8 6 \u4E2A tab"), " \u2014 \u4F60\u6700\u5E38\u7528\u7684\u529F\u80FD(\u53EF\u5728 ", /*#__PURE__*/React.createElement(HelpCode, null, "\u2699 \u5E03\u5C40"), " \u81EA\u5B9A\u4E49)"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "\u5DE6\u4FA7\u680F"), " \u2014 \u5176\u4ED6\u5DE5\u5177\u6309\"\u4E3B\u529F\u80FD/\u8D44\u6E90/\u534F\u4F5C/\u7BA1\u7406\"4 \u7EC4\u5206\u7C7B"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "\u53F3\u4E0A\u89D2\u5FBD\u7AE0"), " \u2014 \u7EA2\u8272=\u7D27\u6025/\u8D85\u65F6,\u84DD\u8272=\u5F85\u529E,\u7EFF\u8272=\u5B8C\u6210"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "\u5E95\u90E8\"\u81EA\u5B9A\u4E49\u5E03\u5C40\""), " \u2014 \u628A\u4F60\u4E0D\u7528\u7684\u529F\u80FD\u4ECE\u9876\u90E8\u632A\u5230\u4FA7\u8FB9\u680F(\u6BCF\u4E2A\u5458\u5DE5\u72EC\u7ACB)")]
  }), /*#__PURE__*/React.createElement(HelpH2, null, "\u7B2C\u4E09\u6B65:\u6BCF\u5929\u8FDB\u7CFB\u7EDF\u7684\"\u5DE5\u4F5C\u5FEB\u7167\""), /*#__PURE__*/React.createElement(HelpP, null, "\u8FDB ", /*#__PURE__*/React.createElement(HelpCode, null, "\uD83D\uDCDE \u5BA2\u670D\u8DDF\u8FDB"), " \u7B2C\u4E00\u773C\u770B\u5230\u7684\u5361\u7247\u5C31\u662F\"\u4ECA\u5929\u8BE5\u5E72\u4EC0\u4E48\":"), /*#__PURE__*/React.createElement(HelpUL, {
    items: ['🔴 逾期未跟进的客户(数字 = 几个)', '🟡 今天要跟进的客户', '🟢 已完成的本日任务', /*#__PURE__*/React.createElement(React.Fragment, null, "\u9000\u6B3E\u5904\u7406\u4EBA\u7279\u6743:\u770B\u5230 ", /*#__PURE__*/React.createElement("strong", null, "\u4ECA\u5929\u8981\u5BA1\u6838\u7684\u9000\u6B3E"), " + ", /*#__PURE__*/React.createElement("strong", null, "\u4ECA\u5929\u8981\u6253\u6B3E\u7684\u9000\u6B3E"))]
  }), /*#__PURE__*/React.createElement(HelpH2, null, "\u7B2C\u56DB\u6B65:\u5E38\u89C1\u64CD\u4F5C"), /*#__PURE__*/React.createElement(HelpUL, {
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "\u53F3\u952E"), "\u4EFB\u610F tab \u2192 \"\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00\" \u2192 \u591A\u7A97\u53E3\u5DE5\u4F5C"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Ctrl+V"), " \u622A\u56FE\u76F4\u63A5\u7C98\u8D34\u5230\u4EFB\u4F55\u9644\u4EF6\u533A(\u77E5\u8BC6\u5E93/\u8DDF\u8FDB/\u62D2\u4ED8/\u5DE5\u5355)"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Esc"), " \u5173\u95ED\u6A21\u6001\u6846 / AI \u8BC4\u4EF7\u9762\u677F"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Ctrl+Enter"), " \u5728\u56DE\u590D\u6846 = \u53D1\u9001")]
  }), /*#__PURE__*/React.createElement(HelpH2, null, "\u7B2C\u4E94\u6B65:\u9047\u5230\u95EE\u9898"), /*#__PURE__*/React.createElement(HelpNote, null, /*#__PURE__*/React.createElement("strong", null, "\u6240\u6709 bug / \u65B0\u9700\u6C42"), " \u2192 \u8FDB\u5DE6\u4FA7 ", /*#__PURE__*/React.createElement(HelpCode, null, "\uD83D\uDC1B \u62A5\u544A Bug"), " \u7AE0\u8282,\u6309\u6A21\u677F\u63D0\u4EA4\u7ED9\u4E3B\u7BA1(Nicole/Miya)\u3002 \u4E0D\u8981\u76F4\u63A5\u8BF4\"\u4E0D\u5DE5\u4F5C\u4E86\" \u2014 \u6CA1\u6709\u4FE1\u606F\u6CA1\u6CD5\u4FEE\u3002"));
};

// ════════════════ Section: 模块详解 ════════════════
var HelpSectionModules = function HelpSectionModules(_ref9) {
  var user = _ref9.user,
    isAdmin = _ref9.isAdmin;
  var MODS = [{
    key: 'cs',
    icon: '📞',
    name: '客服跟进',
    summary: '客户跟进总控台',
    what: '记录每个客户的咨询、订单状态、提醒。',
    why: '之前用 Excel 跟客户,信息分散容易漏。把它做成 Web 表格,多人协同 + 不丢数据。',
    how: ['顶部 + 新增客户 创建客户卡片', '填客户基本信息 + 订单号 + 沟通要点', '设置"下次跟进时间" → 到点出现在徽章计数', '工作快照面板看今天该跟进的人', '客户解决了 → 标记"已完成"'],
    tips: ['时间智能筛选 (今天 / 3 天 / 一周)', '模板回复联动知识库', '工单升级到主管 / 老板', '软删除 + 回收站']
  }, {
    key: 'chargebacks',
    icon: '🚨',
    name: '拒付',
    summary: 'Stripe/PayPal 拒付争议管理',
    what: '录入拒付通知,上传证据(订单截图/物流/邮件/聊天),按剩余时间排序。',
    why: '拒付有严格时限,过期就输。需要专人盯 + 自动提醒。',
    how: ['接到拒付通知 → 这里录入', '上传证据(可粘贴截图)', '系统按"剩余时间"自动排序,临近的红色高亮', '财务/主管审核胜诉率'],
    tips: ['金额汇总按货币/网站/状态分布', '专人接拒付任务']
  }, {
    key: 'offline_orders',
    icon: '💳',
    name: '线下单',
    summary: '非 Shopify 订单(WhatsApp/邮件/阿里巴巴)',
    what: '统一录入非 Shopify 的订单,跟正常订单一样跟踪。',
    why: '这类订单数据散在邮箱里,没法对账。集中后可以跟 Shopify 一样跟踪 + 财务对账。',
    how: ['收到线下询价/下单 → + 新建', '录入产品(SKU/单价/数量)+ 客户信息 + 收件地址', '状态推进:报价 → 客户确认 → 已付 → 已发', '财务月底导出对账']
  }, {
    key: 'custom_photo',
    icon: '🎨',
    name: '定制 & 实拍',
    summary: '客户改产品 / 上传实拍照核实',
    what: '客户定制咨询 + 实拍核实(销售图 vs 客户实物)。',
    why: '美工接到定制需求经常信息不全 → 来回沟通慢。这里强制必填字段。',
    how: ['定制咨询:产品 + 客户预算 + 期望日期 + 设计参考图', '实拍核实:订单编号 + 销售图 + 实物对比 + 客户留言板(图文+时间线)']
  }, {
    key: 'events',
    icon: '📋',
    name: '工作主线',
    summary: '7 大事件类型统一管理',
    what: '售后/补件/拒付/退款/定制/实拍/自定义 — 跨模块汇总。',
    why: '之前每种事件都在自己的 tab,跨 tab 同步麻烦。这里看全部按时间/紧急排序。',
    how: ['每条客户记录里都可以 + 加事件', '在这里能看到所有员工/所有客户的事件汇总', '按状态/类型/时间筛选', '一键 ✓ 完成']
  }, {
    key: 'reviews',
    icon: '⭐',
    name: '产品评价',
    summary: '评价任务调度 + 嵌入式 AI 工具',
    what: '老板派评价任务 → 客服接单 → 用嵌入的美工 AI 工具生成 → 完成。',
    why: '以前要切两个系统(任务在 CS,生成工具在美工)。现在一个页面搞定。',
    how: ['老板 + 发布评价任务(产品链接 + 目标 N 条 + 优先级)', '客服看到任务 → 👤 接单', '接单后出现紫色 🤖 AI 生成评价 按钮 → 全屏面板打开 AI 工具', '在 AI 工具里生成评价 + 导出 Judge.me CSV', '回来点 ✅ 标记完成'],
    tips: ['顶部紫色"🤖 AI 评价工具"按钮:不绑定任务也能直接打开', 'iframe 永久挂载,关闭再开瞬间显示']
  }, {
    key: 'suppliers',
    icon: '🏭',
    name: '供应商',
    summary: '693 家供应商集中管理',
    what: '联系方式 + 评分 + 备注 + 历史合作记录。',
    why: '工厂联系信息散在每个客服的微信里,新人入职接不上。'
  }, {
    key: 'kb',
    icon: '📚',
    name: '知识库',
    summary: '280+ 客服回复模板',
    what: '分类的客服回复模板 + AI 优化建议。',
    why: '减少重复打字 + 保证回复一致 + AI 优化模板。',
    how: ['按问题分类找模板 → 复制 → 改个性化部分 → 发客户', '主管可以编辑模板,普通员工只读']
  }, {
    key: 'quote',
    icon: '📝',
    name: '报价单',
    summary: '生成正式报价单',
    what: '给客户生成标准格式的报价单。',
    why: '之前用 Word,格式不一致。'
  }, {
    key: 'cross_dept',
    icon: '📨',
    name: '跨部门协作',
    summary: '美工/客服/跟单 三部门消息总线',
    what: '三方共享同一份 Supabase 数据 + Realtime 实时同步。',
    why: '客服跟美工以前靠群消息沟通,关键工单被刷下去就漏。这里:有状态、有超时、有分派、有关注人。',
    how: ['收件箱:别人发给客服的工单', '分派给我:主管把工单分给了我', '⏰ 超时:还没处理超过截止时间的(红色脉冲)', '我发起的:我发出去的', '新建工单时:选关联网站 → 自动建议负责人 + 选 watcher 多人收到通知'],
    tips: ['主管特权:🌐 店铺负责人(维护客服员工 ↔ 网站映射,对方部门也能看)', '主管特权:⏰ 超时阈值(自定义客服部 11 类 × 4 优先级超时天数)', '详情里 📌 分派给手下 + 👁 关注人管理', '完成时弹桌面通知']
  }, {
    key: 'briefings',
    icon: '📢',
    name: '会议纪要',
    summary: '主管发布要点 + 员工确认',
    what: '书面化的会议要点 + 员工标记已读已处理。',
    why: '周会内容靠记忆容易漏。'
  }, isAdmin && {
    key: 'admin_overview',
    icon: '📊',
    name: '主管汇总 (admin)',
    summary: '所有模块一屏看全',
    what: '团队当日所有模块的进度仪表盘。',
    why: '主管要看团队全局,不用切多个 tab。'
  }, {
    key: 'dashboard',
    icon: '📈',
    name: '数据看板',
    summary: '团队数据 + 个人 KPI',
    what: '统计图表 + 员工绩效。'
  }, isAdmin && {
    key: 'delete_approvals',
    icon: '🛡',
    name: '删除审批 (admin)',
    summary: '员工删除申请待审批',
    what: '员工发起的删除申请待主管审批。',
    why: '防止误删/恶意删除关键数据,主管把关。'
  }, {
    key: 'trash',
    icon: '🗑',
    name: '回收站',
    summary: '软删除数据可还原',
    what: '所有"删除"操作都是软删,这里可还原。'
  }, isAdmin && {
    key: 'admin',
    icon: '⚙',
    name: '设置 (admin)',
    summary: '员工 / 拒付专人 / Gemini / 退款处理人',
    what: '系统配置全集。'
  }].filter(Boolean);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HelpH1, null, "\uD83D\uDCDA \u6A21\u5757\u8BE6\u89E3 \u2014 19 \u4E2A\u6A21\u5757,\u6BCF\u4E2A\u90FD\u505A\u4EC0\u4E48"), /*#__PURE__*/React.createElement(HelpP, null, "\u4E0B\u9762\u6BCF\u4E2A\u6A21\u5757\u90FD\u5305\u542B 3 \u4EF6\u4E8B:", /*#__PURE__*/React.createElement("strong", null, "\u662F\u4EC0\u4E48"), " \xB7 ", /*#__PURE__*/React.createElement("strong", null, "\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u8BBE\u8BA1"), " \xB7 ", /*#__PURE__*/React.createElement("strong", null, "\u600E\u4E48\u7528"), "\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 14
    }
  }, MODS.map(function (m) {
    return /*#__PURE__*/React.createElement("div", {
      key: m.key,
      style: {
        padding: '14px 16px',
        background: '#fafaf7',
        border: '1px solid var(--line)',
        borderRadius: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22
      }
    }, m.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--ink)'
      }
    }, m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, m.summary)), /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        background: 'white',
        border: '1px solid var(--line)',
        borderRadius: 8,
        fontSize: 10,
        color: 'var(--ink-3)',
        fontFamily: 'ui-monospace'
      }
    }, "tab: ", m.key)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-2)',
        lineHeight: 1.6,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: '#0369a1'
      }
    }, "\uD83D\uDCCC \u662F\u4EC0\u4E48:"), " ", m.what), m.why && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 3
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: '#7c3aed'
      }
    }, "\uD83D\uDCAD \u4E3A\u4EC0\u4E48:"), " ", m.why), m.how && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 5
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: '#16a34a'
      }
    }, "\uD83C\uDFAF \u600E\u4E48\u7528:"), /*#__PURE__*/React.createElement("ol", {
      style: {
        paddingLeft: 20,
        margin: '3px 0 0 0'
      }
    }, m.how.map(function (h, i) {
      return /*#__PURE__*/React.createElement("li", {
        key: i,
        style: {
          marginBottom: 1
        }
      }, h);
    }))), m.tips && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 5,
        padding: '6px 9px',
        background: '#fef3c7',
        border: '1px solid #fde047',
        borderRadius: 6
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: '#854d0e'
      }
    }, "\uD83D\uDCA1 \u9AD8\u7EA7\u6280\u5DE7:"), /*#__PURE__*/React.createElement("ul", {
      style: {
        paddingLeft: 18,
        margin: '2px 0 0 0',
        listStyle: 'disc'
      }
    }, m.tips.map(function (t, i) {
      return /*#__PURE__*/React.createElement("li", {
        key: i,
        style: {
          marginBottom: 1,
          color: '#854d0e'
        }
      }, t);
    })))));
  })));
};

// ════════════════ Section: 角色权限 ════════════════
var HelpSectionRoles = function HelpSectionRoles() {
  var matrix = [{
    op: '查看自己的客户',
    staff: '✓',
    finance: '✓',
    admin: '✓',
    super_admin: '✓'
  }, {
    op: '查看所有员工的客户',
    staff: '✗',
    finance: '✗',
    admin: '✓',
    super_admin: '✓'
  }, {
    op: '录入退款 / 拒付 / 售后',
    staff: '✓',
    finance: '✓',
    admin: '✓',
    super_admin: '✓'
  }, {
    op: '审批退款',
    staff: '仅退款处理人',
    finance: '仅退款处理人',
    admin: '✓',
    super_admin: '✓'
  }, {
    op: '删除数据',
    staff: '需申请',
    finance: '需申请',
    admin: '直接',
    super_admin: '直接'
  }, {
    op: '审批删除申请',
    staff: '✗',
    finance: '✗',
    admin: '✓',
    super_admin: '✓'
  }, {
    op: '查看 / 编辑员工',
    staff: '✗',
    finance: '✗',
    admin: '✓',
    super_admin: '✓'
  }, {
    op: '看财务模块',
    staff: '✗',
    finance: '✓',
    admin: '✓',
    super_admin: '✓'
  }, {
    op: '跨部门协作 - 工单分派',
    staff: '✗',
    finance: '✗',
    admin: '✓',
    super_admin: '✓'
  }, {
    op: '跨部门协作 - 编辑 watcher',
    staff: '✗',
    finance: '✗',
    admin: '✓',
    super_admin: '✓'
  }, {
    op: '编辑超时阈值',
    staff: '✗',
    finance: '✗',
    admin: '✓',
    super_admin: '✓'
  }, {
    op: '店铺负责人 - 维护',
    staff: '✗',
    finance: '✗',
    admin: '✓',
    super_admin: '✓'
  }, {
    op: '店铺负责人 - 编辑其他部门记录',
    staff: '✗',
    finance: '✗',
    admin: '✗',
    super_admin: '✗'
  }, {
    op: '升级到主管',
    staff: '✓',
    finance: '✓',
    admin: '-',
    super_admin: '-'
  }, {
    op: '升级到老板',
    staff: '-',
    finance: '-',
    admin: '✓',
    super_admin: '-'
  }];
  var cellStyle = function cellStyle(v) {
    if (v === '✓' || v === '直接') return {
      color: '#15803d',
      fontWeight: 600
    };
    if (v === '✗') return {
      color: '#b91c1c',
      fontWeight: 600
    };
    if (v === '-') return {
      color: 'var(--ink-4)'
    };
    return {
      color: '#b45309',
      fontWeight: 500,
      fontSize: 10
    };
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HelpH1, null, "\uD83D\uDC65 \u89D2\u8272\u6743\u9650\u901F\u67E5\u8868"), /*#__PURE__*/React.createElement(HelpP, null, "\u7CFB\u7EDF\u6709 4 \u79CD\u89D2\u8272,\u6BCF\u79CD\u89D2\u8272\u80FD\u505A\u7684\u4E0D\u4E00\u6837\u3002\u4E0B\u9762\u8FD9\u5F20\u8868\u662F", /*#__PURE__*/React.createElement("strong", null, "\u5B8C\u6574\u6743\u9650\u901F\u67E5"), ":"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      fontSize: 12,
      borderCollapse: 'collapse',
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: '#f5f5f7'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'left',
      borderBottom: '1px solid var(--line)',
      fontWeight: 600
    }
  }, "\u64CD\u4F5C"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center',
      borderBottom: '1px solid var(--line)',
      fontWeight: 600
    }
  }, "\u5458\u5DE5"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center',
      borderBottom: '1px solid var(--line)',
      fontWeight: 600
    }
  }, "\u8D22\u52A1"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center',
      borderBottom: '1px solid var(--line)',
      fontWeight: 600
    }
  }, "\u4E3B\u7BA1"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center',
      borderBottom: '1px solid var(--line)',
      fontWeight: 600
    }
  }, "\u603B\u7BA1"))), /*#__PURE__*/React.createElement("tbody", null, matrix.map(function (r, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: i,
      style: {
        borderBottom: '1px solid var(--line-soft)'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '7px 10px'
      }
    }, r.op), /*#__PURE__*/React.createElement("td", {
      style: _objectSpread({
        padding: '7px 10px',
        textAlign: 'center'
      }, cellStyle(r.staff))
    }, r.staff), /*#__PURE__*/React.createElement("td", {
      style: _objectSpread({
        padding: '7px 10px',
        textAlign: 'center'
      }, cellStyle(r.finance))
    }, r.finance), /*#__PURE__*/React.createElement("td", {
      style: _objectSpread({
        padding: '7px 10px',
        textAlign: 'center'
      }, cellStyle(r.admin))
    }, r.admin), /*#__PURE__*/React.createElement("td", {
      style: _objectSpread({
        padding: '7px 10px',
        textAlign: 'center'
      }, cellStyle(r.super_admin))
    }, r.super_admin));
  })))), /*#__PURE__*/React.createElement(HelpNote, {
    kind: "info"
  }, /*#__PURE__*/React.createElement("strong", null, "\"\u9000\u6B3E\u5904\u7406\u4EBA\""), " \u5728 ", /*#__PURE__*/React.createElement(HelpCode, null, "\u2699 \u8BBE\u7F6E \u2192 \uD83D\uDCB0 \u9000\u6B3E\u5904\u7406\u4EBA"), " \u914D\u7F6E(\u76EE\u524D\u662F Miya / Nicole / Yulia \u5468\u672B\u9876\u73ED)\u3002"));
};

// ════════════════ Section: 快捷操作 ════════════════
var HelpSectionShortcuts = function HelpSectionShortcuts() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HelpH1, null, "\u2328 \u5FEB\u6377\u64CD\u4F5C \u2014 \u63D0\u901F 10 \u500D"), /*#__PURE__*/React.createElement(HelpH2, null, "\uD83D\uDDB1 \u9F20\u6807\u5FEB\u6377"), /*#__PURE__*/React.createElement(HelpUL, {
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "\u53F3\u952E"), "\u4EFB\u610F tab \u2192 \"\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00\"(\u652F\u6301\u591A\u7A97\u53E3\u540C\u65F6\u5DE5\u4F5C)"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Ctrl+\u70B9\u51FB"), "(Mac: Cmd+\u70B9\u51FB)\u2192 \u540E\u53F0\u65B0\u6807\u7B7E\u6253\u5F00"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "Shift+\u70B9\u51FB"), " \u2192 \u65B0\u7A97\u53E3\u6253\u5F00"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "\u4E2D\u952E\u70B9\u51FB"), " \u2192 \u540E\u53F0\u65B0\u6807\u7B7E")]
  }), /*#__PURE__*/React.createElement(HelpNote, {
    kind: "good"
  }, "\u5B9E\u6218:", /*#__PURE__*/React.createElement("strong", null, "\u540C\u65F6\u76EF"), " \u5BA2\u670D\u8DDF\u8FDB + \u62D2\u4ED8 + \u5DE5\u4F5C\u4E3B\u7EBF \u4E09\u4E2A\u7A97\u53E3,\u4E0D\u7528\u53CD\u590D\u5207 tab\u3002"), /*#__PURE__*/React.createElement(HelpH2, null, "\uD83D\uDCCB \u7C98\u8D34 / \u62D6\u62FD\u56FE\u7247(8 \u5904\u5168\u90E8\u652F\u6301)"), /*#__PURE__*/React.createElement(HelpUL, {
    items: ['Win+Shift+S 截图 → 在系统任何附件区直接 Ctrl+V', '从文件夹拖图直接丢到附件区(批量)', '支持的位置:跟进附件 / 拒付证据 / 线下单图 / 定制设计稿 / 实拍核实 / 工单草稿 / 跨部门工单 / 跨部门回复']
  }), /*#__PURE__*/React.createElement(HelpNote, null, "\u591A\u6570\u5730\u65B9\u6709\"\u4E0A\u4F20\u533A\"focus \u540E\u624D\u80FD\u7C98\u8D34 \u2014 \u5148\u70B9\u4E00\u4E0B\u865A\u7EBF\u6846,\u518D Ctrl+V\u3002", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "\u8DE8\u90E8\u95E8\u534F\u4F5C"), " + ", /*#__PURE__*/React.createElement("strong", null, "\u77E5\u8BC6\u5E93"), " \u662F\"\u5168\u5C40\u7C98\u8D34\",\u5728\u6A21\u6001\u6846\u4EFB\u4F55\u4F4D\u7F6E\u90FD\u53EF\u4EE5 Ctrl+V\u3002"), /*#__PURE__*/React.createElement(HelpH2, null, "\u2328 \u952E\u76D8\u5FEB\u6377"), /*#__PURE__*/React.createElement(HelpUL, {
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HelpCode, null, "Esc"), " \u5173\u95ED\u6A21\u6001\u6846 / AI \u8BC4\u4EF7\u9762\u677F"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HelpCode, null, "Ctrl+Enter"), " \u56DE\u590D\u6846\u53D1\u9001"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HelpCode, null, "Ctrl+Shift+R"), " \u5F3A\u5237(\u6E05\u9664\u7F13\u5B58,\u90E8\u7F72\u65B0\u7248\u540E\u5FC5\u505A)"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HelpCode, null, "F12"), " \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177(\u62A5 bug \u5FC5\u987B\u7528)")]
  }), /*#__PURE__*/React.createElement(HelpH2, null, "\uD83C\uDFAF \u627E\u4E1C\u897F"), /*#__PURE__*/React.createElement(HelpUL, {
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, "\u9876\u90E8 ", /*#__PURE__*/React.createElement("strong", null, "\uD83D\uDD0D \u5168\u5C40\u641C\u7D22"), ":\u8DE8\u6A21\u5757\u627E\u5BA2\u6237 / \u8BA2\u5355 / SKU / \u90AE\u7BB1"), '每个列表都有"智能搜索":空格分多个关键词,AND 匹配(都包含才显示)', /*#__PURE__*/React.createElement(React.Fragment, null, "\u6BCF\u4E2A\u5217\u8868\u90FD\u6709", /*#__PURE__*/React.createElement("strong", null, "\u65F6\u95F4\u7B5B\u9009 chips"), ":\u4ECA\u5929 / 3 \u5929 / 7 \u5929 / 14 \u5929 / 30 \u5929 / 90 \u5929 / \u5168\u90E8")]
  }), /*#__PURE__*/React.createElement(HelpH2, null, "\uD83C\uDFA8 \u81EA\u5B9A\u4E49\u5E03\u5C40"), /*#__PURE__*/React.createElement(HelpUL, {
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, "\u53F3\u4E0A\u89D2 ", /*#__PURE__*/React.createElement(HelpCode, null, "\u2699 \u5E03\u5C40"), " \u6309\u94AE \u2192 \u628A\u4E0D\u5E38\u7528\u7684 tab \u4ECE\u9876\u90E8\u79FB\u5230\u4FA7\u680F"), /*#__PURE__*/React.createElement(React.Fragment, null, "\u4FA7\u8FB9\u680F\u5DE6\u4E0A ", /*#__PURE__*/React.createElement(HelpCode, null, "\u25C0 \u6298\u53E0"), " \u6309\u94AE \u2192 \u6536\u8D77\u5230 icon-only(56px \u5BBD)"), '每个员工独立配置 · 自动保存到本地浏览器(切账号自动还原)']
  }));
};

// ════════════════ Section: 报告 Bug ════════════════
var HelpSectionBugs = function HelpSectionBugs() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HelpH1, null, "\uD83D\uDC1B \u62A5\u544A Bug \u2014 \u8BA9 AI \u5728 5 \u5206\u949F\u5185\u4FEE\u597D"), /*#__PURE__*/React.createElement(HelpNote, {
    kind: "warn"
  }, /*#__PURE__*/React.createElement("strong", null, "\u597D\u7684 Bug \u62A5\u544A = 1 \u5206\u949F\u770B\u61C2 + 5 \u5206\u949F\u4FEE\u597D\u3002"), /*#__PURE__*/React.createElement("br", null), "\u574F\u7684 Bug \u62A5\u544A:\"\u4E0D\u5DE5\u4F5C\u4E86\",\"\u767D\u5C4F\",\"\u4FDD\u5B58\u4E0D\u4E86\" \u2192 AI \u770B\u4E0D\u61C2,\u53EA\u80FD\u731C,\u53EF\u80FD\u8981\u6765\u56DE 3-5 \u8F6E\u624D\u80FD\u5B9A\u4F4D,\u4E25\u91CD\u5F71\u54CD\u5DE5\u4F5C\u3002"), /*#__PURE__*/React.createElement(HelpH2, null, "\u7B2C\u4E00\u6B65:\u51C6\u5907\u8FD9 4 \u6837\u4E1C\u897F"), /*#__PURE__*/React.createElement(HelpUL, {
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "1. \u7248\u672C\u53F7"), " \u2014 F12 \u2192 Console \u2192 \u627E\u5230 ", /*#__PURE__*/React.createElement(HelpCode, null, "\uD83D\uDCE6 \u7EDF\u4E00\u5DE5\u4F5C\u53F0 v2026.XX.XX-XXX \u5DF2\u52A0\u8F7D")), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "2. \u622A\u56FE"), " \u2014 F12 Console \u7EA2\u8272\u62A5\u9519\u5806\u6808\u622A\u56FE(\u4E0D\u662F\u6587\u5B57!\u8981\u770B\u5806\u6808)+ UI \u5F02\u5E38\u622A\u56FE"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "3. \u590D\u73B0\u6B65\u9AA4"), " \u2014 \u4ECE\u767B\u5F55\u5230\u51FA bug \u6BCF\u4E00\u6B65\u64CD\u4F5C\u7684\u6E05\u5355"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "4. \u73AF\u5883"), " \u2014 \u8C01\u767B\u5F55\u7684(\u89D2\u8272)/ \u54EA\u4E2A\u6D4F\u89C8\u5668 / \u64CD\u4F5C\u7CFB\u7EDF")]
  }), /*#__PURE__*/React.createElement(HelpH2, null, "\u7B2C\u4E8C\u6B65:\u7528\u8FD9\u4E2A\u6A21\u677F"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      background: '#1a1a17',
      color: '#e0e0e0',
      borderRadius: 8,
      fontSize: 12,
      fontFamily: 'ui-monospace, monospace',
      lineHeight: 1.7,
      whiteSpace: 'pre-wrap',
      marginBottom: 10
    }
  }, "\u7248\u672C\u53F7: 2026.05.25-fix13   \u2190 \u4ECE F12 Console \u770B\u5230\u7684\n\u73AF\u5883: Chrome 130 / Windows 11\n\u8D26\u53F7: Miya \xB7 admin\n\n\u590D\u73B0\u6B65\u9AA4:\n1. \u8FDB\u3010\u62D2\u4ED8\u3011tab\n2. \u70B9\u3010+ \u65B0\u5EFA\u62D2\u4ED8\u3011\n3. \u586B\u597D\u6240\u6709\u5B57\u6BB5\n4. \u70B9\u3010\u4FDD\u5B58\u3011\n\n\u671F\u671B\u7ED3\u679C:\n\u4FDD\u5B58\u6210\u529F,\u5173\u95ED\u5F39\u7A97,\u5217\u8868\u91CC\u51FA\u73B0\u65B0\u6761\u76EE\n\n\u5B9E\u9645\u7ED3\u679C:\n\u5F39\u51FA\u9519\u8BEF \"NULL not allowed in column created_by\"\nconsole \u62A5\u7EA2\u8272\u9519\u8BEF(\u622A\u56FE\u89C1\u9644\u4EF6)\n\u5217\u8868\u6CA1\u5237\u65B0\n\n\u622A\u56FE:\n[\u8D34 console \u62A5\u9519\u622A\u56FE]\n[\u8D34 UI \u622A\u56FE]"), /*#__PURE__*/React.createElement(HelpH2, null, "\u7B2C\u4E09\u6B65:\u4E0D\u8981\u8FD9\u6837\u63CF\u8FF0"), /*#__PURE__*/React.createElement(HelpUL, {
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#b91c1c'
      }
    }, "\u274C"), " \"\u4FDD\u5B58\u4E0D\u4E86\" \u2014 \u54EA\u4E2A\u4FDD\u5B58?\u62A5\u9519\u662F\u4EC0\u4E48?"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#b91c1c'
      }
    }, "\u274C"), " \"\u767D\u5C4F\u4E86\" \u2014 Console \u6709\u4EC0\u4E48?\u54EA\u4E2A tab?"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#b91c1c'
      }
    }, "\u274C"), " \"\u521A\u624D\u4E0D\u884C\u4E86\" \u2014 \u54EA\u4E2A\u7248\u672C?\u4EC0\u4E48\u64CD\u4F5C?"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#b91c1c'
      }
    }, "\u274C"), " \"\u909D\u96C5\u7426\u53CD\u9988\u8BF4\u6709\u95EE\u9898\" \u2014 \u4EC0\u4E48\u95EE\u9898?\u62A5\u9519\u622A\u56FE\u5462?"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#15803d'
      }
    }, "\u2705"), " \"fix13 \u7248\u672C,Miya \u767B\u5F55,\u70B9\u3010\u62D2\u4ED8\u3011\u2192\u3010+\u65B0\u5EFA\u3011\u2192\u3010\u4FDD\u5B58\u3011,\u5F39\u51FA 'NULL not allowed in column created_by',\u622A\u56FE\u9644\u4E0A\"")]
  }), /*#__PURE__*/React.createElement(HelpH2, null, "\u7B2C\u56DB\u6B65:\u53D1\u5230\u54EA\u91CC"), /*#__PURE__*/React.createElement(HelpNote, {
    kind: "good"
  }, /*#__PURE__*/React.createElement("strong", null, "\u5458\u5DE5 \u2192 \u4E3B\u7BA1(Nicole / Miya)\u2192 AI \u52A9\u624B(Claude)"), /*#__PURE__*/React.createElement("br", null), "\u4E3B\u7BA1\u6536\u5230\u8BE6\u7EC6 bug \u62A5\u544A\u540E,\u8D34\u5230\u8DDF Claude \u7684\u5BF9\u8BDD\u7A97\u53E3\u91CC\u3002AI \u770B\u4EE3\u7801\u5B9A\u4F4D\u3001\u4FEE\u590D\u3001\u8F93\u51FA\u65B0 HTML\u3002", /*#__PURE__*/React.createElement("br", null), "\u4F60 Ctrl+Shift+R \u5F3A\u5237\u5373\u751F\u6548\u3002", /*#__PURE__*/React.createElement("br", null), "\u5982\u679C\u662F\u6570\u636E\u5E93\u6539\u52A8(\u5F88\u5C11),AI \u4F1A\u9644 SQL \u6587\u4EF6,\u9700\u8981\u5728 Supabase \u8DD1\u4E00\u4E0B\u3002"), /*#__PURE__*/React.createElement(HelpH2, null, "\u600E\u4E48\u622A\u56FE F12 Console \u62A5\u9519?"), /*#__PURE__*/React.createElement(HelpUL, {
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, "1. \u6309 ", /*#__PURE__*/React.createElement(HelpCode, null, "F12"), " \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177"), /*#__PURE__*/React.createElement(React.Fragment, null, "2. \u5207\u5230 ", /*#__PURE__*/React.createElement(HelpCode, null, "Console"), " \u6807\u7B7E"), /*#__PURE__*/React.createElement(React.Fragment, null, "3. \u627E", /*#__PURE__*/React.createElement("strong", null, "\u7EA2\u8272"), "\u7684 Error \u884C(\u53EF\u80FD\u6709 \u25B6 \u53EF\u4EE5\u70B9\u5F00\u770B\u5806\u6808)"), /*#__PURE__*/React.createElement(React.Fragment, null, "4. \u70B9\u5F00 \u25B6 \u770B\u5B8C\u6574\u5806\u6808"), /*#__PURE__*/React.createElement(React.Fragment, null, "5. \u622A\u56FE(Win+Shift+S \u6846\u9009)"), /*#__PURE__*/React.createElement(React.Fragment, null, "6. \u628A\u56FE\u7247", /*#__PURE__*/React.createElement("strong", null, "\u7C98\u8D34"), "\u5230\u7ED9\u4E3B\u7BA1\u7684\u6D88\u606F\u91CC")]
  }));
};

// ════════════════ Section: 版本日志 ════════════════
var HelpSectionHistory = function HelpSectionHistory() {
  var typeBadge = function typeBadge(type) {
    var M = {
      feature: {
        label: '✨ 新功能',
        bg: '#dcfce7',
        color: '#15803d'
      },
      fix: {
        label: '🔧 修复',
        bg: '#fee2e2',
        color: '#b91c1c'
      },
      refactor: {
        label: '♻ 重构',
        bg: '#fef3c7',
        color: '#854d0e'
      },
      perf: {
        label: '⚡ 性能',
        bg: '#dbeafe',
        color: '#1e40af'
      },
      data: {
        label: '📦 数据',
        bg: '#f3e8ff',
        color: '#7c3aed'
      }
    };
    var d = M[type] || M.feature;
    return /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 6px',
        background: d.bg,
        color: d.color,
        borderRadius: 6,
        fontSize: 9,
        fontWeight: 700,
        flexShrink: 0,
        marginRight: 6
      }
    }, d.label);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HelpH1, null, "\uD83D\uDCE6 \u7248\u672C\u65E5\u5FD7 \u2014 ", VERSION_HISTORY.length, " \u4E2A\u8FED\u4EE3\u7248\u672C"), /*#__PURE__*/React.createElement(HelpP, null, "\u6BCF\u6B21\u5347\u7EA7\u90FD\u4F1A\u5728\u8FD9\u91CC\u7559\u75D5\u3002\u6700\u65B0\u7248\u5728\u6700\u4E0A\u9762\u3002"), /*#__PURE__*/React.createElement(HelpNote, null, "\u5F53\u524D\u7248\u672C:", /*#__PURE__*/React.createElement(HelpCode, null, APP_VERSION)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 14
    }
  }, VERSION_HISTORY.map(function (v, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: v.version,
      style: {
        padding: '12px 14px',
        background: i === 0 ? '#f0f9ff' : '#fafaf7',
        border: '1px solid ' + (i === 0 ? '#bae6fd' : 'var(--line)'),
        borderRadius: 9
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 6,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("code", {
      style: {
        padding: '2px 8px',
        background: 'white',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 11,
        fontFamily: 'ui-monospace, monospace',
        color: i === 0 ? '#0369a1' : 'var(--ink)',
        fontWeight: 600
      }
    }, v.version), i === 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        background: '#0369a1',
        color: 'white',
        borderRadius: 6,
        fontSize: 10,
        fontWeight: 600
      }
    }, "\u5F53\u524D"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, "\uD83D\uDCC5 ", v.date), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--ink)'
      }
    }, "\xB7 ", v.title)), /*#__PURE__*/React.createElement("ul", {
      style: {
        paddingLeft: 0,
        listStyle: 'none',
        margin: 0
      }
    }, v.changes.map(function (c, j) {
      return /*#__PURE__*/React.createElement("li", {
        key: j,
        style: {
          padding: '3px 0',
          fontSize: 12,
          color: 'var(--ink-2)',
          display: 'flex',
          alignItems: 'flex-start',
          lineHeight: 1.5
        }
      }, typeBadge(c.type), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1
        }
      }, c.text));
    })));
  })));
};

// ════════════════ Section: AI 能力清单 ════════════════
var HelpSectionAi = function HelpSectionAi() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HelpH1, null, "\uD83E\uDD16 AI (Claude) \u80FD\u505A\u4EC0\u4E48"), /*#__PURE__*/React.createElement(HelpP, null, "\u8FD9\u4E2A\u7CFB\u7EDF\u6240\u6709\u4EE3\u7801\u90FD\u662F AI \u5199\u7684,\u6240\u6709 bug \u4FEE\u590D + \u65B0\u529F\u80FD\u4E5F\u90FD\u9760 AI\u3002\u4E0B\u9762\u662F AI \u5DF2\u5B9E\u73B0\u7684\u80FD\u529B + \u505A\u4E0D\u4E86\u7684\u4E8B\u3002"), /*#__PURE__*/React.createElement(HelpH2, null, "\u2705 \u5DF2\u5B9E\u73B0\u80FD\u529B(\u76F4\u63A5\u53EF\u7528)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, [{
    i: '🔧',
    t: '修代码 Bug',
    d: '你给截图,AI 定位+修(已修过 200+ 次)'
  }, {
    i: '✨',
    t: '加新功能',
    d: '你描述需求,AI 开发(本系统积累 13 个大版本)'
  }, {
    i: '🎨',
    t: '改 UI',
    d: '布局调整 / 颜色 / 字体 / 排版'
  }, {
    i: '📦',
    t: '加新模块',
    d: '从零设计一个全新功能模块'
  }, {
    i: '🗄',
    t: '数据库改造',
    d: 'Schema 改 / SQL 迁移 / Realtime 订阅'
  }, {
    i: '🔗',
    t: '跨系统集成',
    d: 'iframe / postMessage / 三方共享 Supabase'
  }, {
    i: '⚡',
    t: '性能优化',
    d: '加载速度 / 持久挂载 / 缓存策略'
  }, {
    i: '📊',
    t: '导入导出',
    d: 'CSV / Excel / PDF'
  }, {
    i: '🖼',
    t: '图片处理',
    d: '粘贴 / 拖拽 / 压缩 / 预览'
  }, {
    i: '🪟',
    t: '多窗口支持',
    d: '右键新标签 / 中键 / Ctrl+点击'
  }, {
    i: '🔐',
    t: '权限管理',
    d: '不同角色不同视图(已 4 种角色)'
  }, {
    i: '🌐',
    t: '实时同步',
    d: 'Supabase Realtime · 多端实时刷新'
  }, {
    i: '🎯',
    t: '智能搜索',
    d: '多关键词 AND 匹配 + 跨字段'
  }, {
    i: '📅',
    t: '时间智能',
    d: '今天 / 3 天 / 7 天 chips + 截止判定'
  }].map(function (c, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: '10px 12px',
        background: '#f0fdf4',
        border: '1px solid #86efac',
        borderRadius: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, c.i), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: '#15803d'
      }
    }, c.t)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-2)',
        lineHeight: 1.4
      }
    }, c.d));
  })), /*#__PURE__*/React.createElement(HelpH2, null, "\u274C \u505A\u4E0D\u4E86\u7684\u4E8B"), /*#__PURE__*/React.createElement(HelpUL, {
    items: [/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "\u76F4\u63A5\u8BBF\u95EE\u786C\u4EF6"), " \u2014 \u6444\u50CF\u5934 / \u6253\u5370\u673A / \u84DD\u7259(\u6D4F\u89C8\u5668\u6C99\u7BB1\u9650\u5236,\u53EA\u80FD\u901A\u8FC7 Web API)"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "\u4E0D\u53EF\u9006\u64CD\u4F5C\u7684\u81EA\u52A8\u5316"), " \u2014 \u6279\u91CF\u5220\u9664\u751F\u4EA7\u6570\u636E\u9700\u8981\u4EBA\u5DE5\u9010\u9879\u786E\u8BA4"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "\u7269\u7406\u51FA\u8D27"), " \u2014 \u5DE5\u5382 / \u7269\u6D41\u8FFD\u8E2A\u9700\u8981\u5BF9\u63A5\u5916\u90E8 API,\u4E0D\u5728\u672C\u7CFB\u7EDF\u5185"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "3D \u6E32\u67D3 / AI \u56FE\u50CF\u751F\u6210"), " \u2014 \u8FD9\u662F", /*#__PURE__*/React.createElement("strong", null, "\u7F8E\u5DE5\u90E8 worktrack-kpi \u7CFB\u7EDF"), "\u7684\u4E8B,\u5BA2\u670D\u4FA7\u901A\u8FC7 iframe \u5D4C\u5165\u8C03\u7528"), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("strong", null, "\u66FF\u4F60\u505A\u51B3\u7B56"), " \u2014 AI \u53EA\u6267\u884C\u4F60\u7684\u9700\u6C42,\u4E0D\u4F1A\u81EA\u5DF1\u5224\u65AD\"\u8BE5\u4E0D\u8BE5\u9000\u6B3E\"")]
  }), /*#__PURE__*/React.createElement(HelpH2, null, "\uD83D\uDCAC \u600E\u4E48\u627E AI?"), /*#__PURE__*/React.createElement(HelpNote, {
    kind: "info"
  }, /*#__PURE__*/React.createElement("strong", null, "\u5458\u5DE5\u4E0D\u76F4\u63A5\u627E AI"), "\u3002Nicole / Miya \u5728\u8DDF AI \u5BF9\u8BDD\u7684\u7A97\u53E3\u91CC\u3002\u4F60\u628A bug \u62A5\u544A / \u65B0\u9700\u6C42", /*#__PURE__*/React.createElement("strong", null, "\u7ED9\u4E3B\u7BA1"), ",\u4E3B\u7BA1\u7C98\u5230\u5BF9\u8BDD\u91CC,AI \u4F1A:", /*#__PURE__*/React.createElement("ol", {
    style: {
      paddingLeft: 20,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("li", null, "\u770B\u4EE3\u7801\u5B9A\u4F4D\u95EE\u9898"), /*#__PURE__*/React.createElement("li", null, "\u5199\u4FEE\u590D / \u65B0\u529F\u80FD"), /*#__PURE__*/React.createElement("li", null, "\u8F93\u51FA\u65B0\u7248 HTML(\u53EF\u80FD\u9644 SQL)"), /*#__PURE__*/React.createElement("li", null, "\u4F60 Ctrl+Shift+R \u5F3A\u5237\u751F\u6548"))));
};

// ════════════════ Section: 路线图 ════════════════
var HelpSectionRoadmap = function HelpSectionRoadmap() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HelpH1, null, "\uD83D\uDEE3 \u5F85\u5F00\u53D1\u8DEF\u7EBF\u56FE"), /*#__PURE__*/React.createElement(HelpP, null, "\u4E0B\u9762\u662F", /*#__PURE__*/React.createElement("strong", null, "\u8FD8\u6CA1\u505A\u4F46 AI \u80FD\u505A"), "\u7684\u4E8B\u3002\u5982\u679C\u4F60\u89C9\u5F97\u67D0\u9879\u6709\u4EF7\u503C,\u544A\u8BC9\u4E3B\u7BA1,\u6211\u4E0B\u4E00\u8F6E\u52A0\u4E0A\u3002"), /*#__PURE__*/React.createElement(HelpH2, null, "\uD83D\uDCF1 \u4F53\u9A8C\u4F18\u5316(\u4E2D\u7B49\u4F18\u5148)"), /*#__PURE__*/React.createElement(HelpUL, {
    items: ['手机响应式 — 左侧栏在手机变成抽屉', '暗黑模式 — 跟随系统切换', '批量操作 — 评价任务 / 工单批量改状态']
  }), /*#__PURE__*/React.createElement(HelpH2, null, "\uD83D\uDCCA \u6570\u636E\u6D1E\u5BDF(\u4E2D\u7B49\u4F18\u5148)"), /*#__PURE__*/React.createElement(HelpUL, {
    items: ['数据看板增强 — 更多图表 / 个人 KPI 趋势 / 团队对比', '客户档案合并 — 重复客户记录智能合并', '订单全生命周期视图 — 一个客户的所有事件时间线']
  }), /*#__PURE__*/React.createElement(HelpH2, null, "\uD83D\uDD14 \u5B9E\u65F6\u589E\u5F3A(\u4F4E\u4F18\u5148)"), /*#__PURE__*/React.createElement(HelpUL, {
    items: ['桌面通知 — 跨部门协作 watchers 完成时也通知(spec 说"下批做")', '离线模式 — 断网仍能写入,联网后同步', '@提及 — 跨部门工单里 @某人,他能在收件箱看到高亮']
  }), /*#__PURE__*/React.createElement(HelpH2, null, "\uD83C\uDF10 \u56FD\u9645\u5316(\u4F4E\u4F18\u5148)"), /*#__PURE__*/React.createElement(HelpUL, {
    items: ['多语言 — 界面英文版(给外籍员工)', '多时区 — 显示时间用员工所在时区']
  }), /*#__PURE__*/React.createElement(HelpH2, null, "\uD83D\uDCB0 \u8D22\u52A1\u589E\u5F3A(\u8D22\u52A1\u90E8\u9700\u6C42)"), /*#__PURE__*/React.createElement(HelpUL, {
    items: ['上海单独报关件 350元/票 — 计算器加全局复选框', '更多承运商(spec 来) — 新增/调整报价', '账单批量对账 — 上传承运商账单 Excel 自动核账']
  }), /*#__PURE__*/React.createElement(HelpH2, null, "\uD83C\uDFAF \u5BA2\u670D\u589E\u5F3A(\u5BA2\u670D\u90E8\u9700\u6C42)"), /*#__PURE__*/React.createElement(HelpUL, {
    items: ['邮件模板 — 知识库里加邮件正文模板(目前只有聊天模板)', 'WhatsApp 集成 — 一键发回复模板到 WhatsApp(需要外部 API)', '智能下次跟进时间 — AI 根据沟通内容建议时间']
  }), /*#__PURE__*/React.createElement(HelpNote, {
    kind: "warn"
  }, /*#__PURE__*/React.createElement("strong", null, "\u8BF4\u660E"), ":\u8FD9\u4E9B\u90FD\u662F\u6280\u672F\u4E0A AI \u80FD\u505A\u7684,\u4F46", /*#__PURE__*/React.createElement("strong", null, "\u6392\u4E0D\u6392\u4E0A\u65E5\u7A0B\u53D6\u51B3\u4E8E\u4E1A\u52A1\u4F18\u5148\u7EA7"), "\u3002\u4E3B\u7BA1\u548C\u8001\u677F\u51B3\u5B9A\u5148\u505A\u54EA\u4E2A\u3002"));
};

// ════════════════ Section: 设计哲学 ════════════════
var HelpSectionPhilosophy = function HelpSectionPhilosophy() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(HelpH1, null, "\uD83D\uDCA1 \u8BBE\u8BA1\u54F2\u5B66 \u2014 \u4E3A\u4EC0\u4E48\u8FD9\u4E48\u8BBE\u8BA1"), /*#__PURE__*/React.createElement(HelpP, null, "\u65B0\u4EBA\u7406\u89E3\u4E86\"\u4E3A\u4EC0\u4E48\",\u624D\u80FD\u907F\u514D\u8BEF\u7528\u3002\u4E0B\u9762\u662F\u8FD9\u4E2A\u7CFB\u7EDF\u7684 7 \u6761\u8BBE\u8BA1\u539F\u5219\u3002"), /*#__PURE__*/React.createElement(HelpH2, null, "1. \u4E0D\u8981\u91CD\u65B0\u53D1\u660E\u8F6E\u5B50"), /*#__PURE__*/React.createElement(HelpP, null, "\u4FDD\u7559\u4F60\u4EEC\u539F\u6709\u7684 Excel/\u7EB8\u8D28\u6D41\u7A0B,\u53EA\u662F\u628A\u5B83", /*#__PURE__*/React.createElement("strong", null, "\u6570\u5B57\u5316 + \u591A\u4EBA\u534F\u540C"), "\u3002\u6240\u4EE5\u4F60\u4F1A\u770B\u5230\u5F88\u591A\u529F\u80FD\u662F\"\u5F55\u5165 \u2192 \u8DDF\u8FDB \u2192 \u5B8C\u6210\"\u4E09\u6B65\u5F0F,\u8DDF\u7EB8\u8D28\u5DE5\u4F5C\u6D41\u4E00\u81F4\u3002"), /*#__PURE__*/React.createElement(HelpH2, null, "2. \u9632\u5446\u8BBE\u8BA1 > \u5F3A\u5236\u7EA6\u675F"), /*#__PURE__*/React.createElement(HelpUL, {
    items: ['关键字段不能漏(创建人/创建时间/状态自动填,不让人填错)', '删除走"软删除 + 回收站",误操作可还原', '重要操作(退款 / 大额支付)要主管审批,不让人误删', '错误提示告诉"怎么解决",不只是"出错了"']
  }), /*#__PURE__*/React.createElement(HelpH2, null, "3. \u901F\u5EA6 > \u7F8E\u89C2"), /*#__PURE__*/React.createElement(HelpUL, {
    items: ['所有按钮 1 秒内响应', '切换 tab 不重新加载(visitedTabs 机制 + iframe 持久挂载)', '大列表自动分页 + 智能搜索', 'AI 评价工具 preconnect 提前握手,打开瞬间显示']
  }), /*#__PURE__*/React.createElement(HelpH2, null, "4. \u4FE1\u606F\u5BC6\u5EA6\u9AD8,\u4F46\u4E0D\u6742\u4E71"), /*#__PURE__*/React.createElement(HelpUL, {
    items: ['苹果风格:大量空白 + 关键信息突出', '颜色编码:🔴红=紧急/超时/拒付 · 🟢绿=完成 · 🔵蓝=进行中 · 🟡橙=待处理', 'emoji 做标签:📞 客服跟进 比 "客户跟进表" 更快识别', 'badge 数字:让你不用进 tab 就知道有几个待办']
  }), /*#__PURE__*/React.createElement(HelpH2, null, "5. \u6BCF\u4E2A\u4EBA\u90FD\u662F\u4E3B\u89D2"), /*#__PURE__*/React.createElement(HelpUL, {
    items: ['每个员工独立的导航布局(⚙ 布局,保存到本地)', '工作快照面板:登录第一眼看"今天我该干什么"', '个人 KPI(数据看板)', '退款处理人专属红卡 / 主管特权按钮 / 财务专属财务模块']
  }), /*#__PURE__*/React.createElement(HelpH2, null, "6. \u4E3B\u7BA1\u4E0D\u88AB\u56F0\u5728\u5BA1\u6279\u91CC"), /*#__PURE__*/React.createElement(HelpUL, {
    items: ['软删除审批 / 退款审批 / 工单升级 — 主管有徽章提醒', '不阻塞日常工作 — 主管自己也是员工,先干自己的活,空了再批', '紧急横幅:有超时/紧急任务时,主页顶部红色震动 + 一键跳转']
  }), /*#__PURE__*/React.createElement(HelpH2, null, "7. \u8DE8\u90E8\u95E8\u662F\u534F\u4F5C\u4E0D\u662F\u7529\u9505"), /*#__PURE__*/React.createElement(HelpUL, {
    items: ['跨部门协作:有状态/超时/分派/关注人', '三方共享同一份数据,谁都改不了对方的(system === MY_SYSTEM 强制约束)', '工单完成时双方都收到桌面通知 + Realtime 实时刷新', '"店铺负责人"映射:选了 Vakkerlight 自动派对方部门的负责人,不用问"谁负责"']
  }), /*#__PURE__*/React.createElement(HelpNote, {
    kind: "info"
  }, /*#__PURE__*/React.createElement("strong", null, "\u5E95\u7EBF\u89C4\u5219"), ":\u4EFB\u4F55\u8BA9\u7528\u6237\u591A\u70B9 1 \u6B21\u3001\u591A\u8F93 1 \u4E2A\u5B57\u3001\u591A\u7B49 1 \u79D2\u7684\u529F\u80FD \u2014 \u91CD\u65B0\u8BBE\u8BA1\u3002"));
};

// ============================================================
// 主 App (Shell + 路由)
// ============================================================
var App = function App() {
  // 🆕 fix22: 联动 1+3 — 全局加载产品主表 + 自定义网站,Context 注入到所有模块
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    customSites = _useState4[0],
    setCustomSites = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    productsList = _useState6[0],
    setProductsList = _useState6[1];
  // 🆕 fix141: App 级单例图片预览。任意卡片缩略图点击 → window.__setPreviewImg(图)
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    previewImg = _useState8[0],
    setPreviewImg = _useState8[1];
  useEffect(function () {
    window.__setPreviewImg = setPreviewImg;
    return function () {
      if (window.__setPreviewImg === setPreviewImg) window.__setPreviewImg = null;
    };
  }, []);

  // 🆕 fix92: 全局图片点击看大图(任何 img 都生效,拦截新标签打开,不改各组件)
  useEffect(function () {
    var overlay = document.getElementById('__img_lightbox__');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = '__img_lightbox__';
      overlay.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.85);display:none;align-items:center;justify-content:center;padding:4vh 4vw;cursor:zoom-out;';
      overlay.innerHTML = '<img style="max-width:100%;max-height:92vh;object-fit:contain;border-radius:8px;box-shadow:0 8px 40px rgba(0,0,0,.5)"/><div style="position:fixed;top:14px;right:20px;color:#fff;font-size:30px;line-height:1;cursor:pointer">✕</div>';
      overlay.addEventListener('click', function () {
        overlay.style.display = 'none';
      });
      document.body.appendChild(overlay);
    }
    var imgEl = overlay.querySelector('img');
    var onClick = function onClick(e) {
      var t = e.target;
      if (!t || t.tagName !== 'IMG') return;
      if (t.closest('#__img_lightbox__') || t.closest('button') || t.closest('[data-no-zoom]')) return;
      var src = t.currentSrc || t.src;
      if (!src || src.startsWith('data:image/svg')) return;
      var rect = t.getBoundingClientRect();
      if (rect.width && rect.width < 30) return; // 极小图标/头像跳过
      e.preventDefault();
      e.stopPropagation();
      imgEl.src = src;
      overlay.style.display = 'flex';
    };
    document.addEventListener('click', onClick, true); // 捕获阶段,先于组件自身/超链接
    return function () {
      document.removeEventListener('click', onClick, true);
    };
  }, []);
  var loadCustomSites = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var _data$value, _yield$CLOUD$client$f, data, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          if (CLOUD.client) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          _context.n = 2;
          return CLOUD.client.from('system_settings').select('value').eq('key', 'custom_sites').maybeSingle();
        case 2:
          _yield$CLOUD$client$f = _context.v;
          data = _yield$CLOUD$client$f.data;
          setCustomSites((data === null || data === void 0 || (_data$value = data.value) === null || _data$value === void 0 ? void 0 : _data$value.sites) || []);
          _context.n = 4;
          break;
        case 3:
          _context.p = 3;
          _t = _context.v;
          console.warn('[联动3] 加载自定义网站失败', _t);
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[0, 3]]);
  })), []);
  var loadProductsList = useCallback(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var list, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return CLOUD.list('products', {
            limit: 2000
          });
        case 1:
          list = _context2.v;
          setProductsList((list || []).filter(function (p) {
            return !p.deleted;
          }));
          _context2.n = 3;
          break;
        case 2:
          _context2.p = 2;
          _t2 = _context2.v;
          console.warn('[联动1] 加载产品主表失败', _t2);
        case 3:
          return _context2.a(2);
      }
    }, _callee2, null, [[0, 2]]);
  })), []);
  useEffect(function () {
    // 延迟加载,等 CLOUD 初始化完
    var t = setTimeout(function () {
      loadCustomSites();
      loadProductsList();
    }, 1500);
    return function () {
      return clearTimeout(t);
    };
  }, []);

  // 监听 Realtime — 产品/自定义网站变了立刻刷新
  useEffect(function () {
    if (!CLOUD.isOn || !CLOUD.supabase) return;
    var ch1 = null,
      ch2 = null;
    try {
      // 🆕 fix216:products 退出 realtime(批量同步会风暴),改 5 分钟轮询
      ch2 = CLOUD.supabase.channel('settings_global').on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'system_settings',
        filter: 'key=eq.custom_sites'
      }, function () {
        return loadCustomSites();
      }).subscribe();
    } catch (e) {
      console.warn('Realtime 订阅失败', e);
    }
    var pIv = setInterval(function () {
      if (document.visibilityState === 'visible') loadProductsList();
    }, 300000);
    return function () {
      clearInterval(pIv);
      try {
        if (ch1) CLOUD.supabase.removeChannel(ch1);
        if (ch2) CLOUD.supabase.removeChannel(ch2);
      } catch (_unused) {}
    };
  }, [loadProductsList, loadCustomSites]);

  // 合并的网站代码 — 内置 + 启用的自定义
  var mergedSiteCodes = useMemo(function () {
    var activeCustom = customSites.filter(function (s) {
      return s.active !== false;
    }).map(function (s) {
      return s.code;
    });
    return [].concat(_toConsumableArray(SITES), _toConsumableArray(activeCustom.filter(function (c) {
      return !SITES.includes(c);
    })));
  }, [customSites]);
  var sitesContextValue = useMemo(function () {
    return {
      siteCodes: mergedSiteCodes,
      customSites: customSites,
      refresh: loadCustomSites
    };
  }, [mergedSiteCodes, customSites, loadCustomSites]);
  var productsContextValue = useMemo(function () {
    return {
      products: productsList,
      refresh: loadProductsList
    };
  }, [productsList, loadProductsList]);

  // 员工 (localStorage + 云同步备份) - 加版本号机制，代码里改了 INITIAL_EMPLOYEES 后能自动覆盖
  var EMPLOYEES_VERSION = 8; // 🆕 加入 13 个北简客服
  var _useState9 = useState(function () {
      var storedVer = STORE.get('employees_version', 0);
      var stored = STORE.get('employees', []);

      // 🆕 保险机制:即使版本号已经是最新,也检查 INITIAL_EMPLOYEES 里有没有缺失的(比如用户曾经删除过)
      var missingInitials = INITIAL_EMPLOYEES.filter(function (i) {
        return !stored.some(function (s) {
          return s.id === i.id;
        });
      });
      var needsUpdate = storedVer < EMPLOYEES_VERSION || missingInitials.length > 0;
      if (needsUpdate) {
        // 版本升级 / 补全缺失员工 → 合并 INITIAL_EMPLOYEES 的新数据（按 id），但保留用户自己添加的员工
        var merged = INITIAL_EMPLOYEES.map(function (initial) {
          var old = stored.find(function (e) {
            return e.id === initial.id;
          });
          // 强制用 INITIAL_EMPLOYEES 的 name/alias/sites/role（覆盖 localStorage），但保留用户改过的密码
          return old ? _objectSpread(_objectSpread({}, initial), {}, {
            password: old.password || initial.password
          }) : initial;
        });
        // 加上用户自己添加的（不在 INITIAL_EMPLOYEES 里的）
        var extras = stored.filter(function (e) {
          return !INITIAL_EMPLOYEES.some(function (i) {
            return i.id === e.id;
          });
        });
        STORE.set('employees_version', EMPLOYEES_VERSION);
        if (missingInitials.length > 0) {
          console.log('[员工补充] 自动补入缺失的内置账号:', missingInitials.map(function (e) {
            return e.name;
          }).join(', '));
        }
        return [].concat(_toConsumableArray(merged), _toConsumableArray(extras));
      }
      return stored.length > 0 ? stored : INITIAL_EMPLOYEES;
    }),
    _useState0 = _slicedToArray(_useState9, 2),
    employees = _useState0[0],
    setEmployees = _useState0[1];
  useEffect(function () {
    STORE.set('employees', employees);
  }, [employees]);

  // 云同步配置（默认启用 + 版本号机制：URL 变化时强制更新）
  var CLOUD_CFG_VERSION = 3; // 客服项目正确配置后的版本
  var _useState1 = useState(function () {
      var saved = STORE.get('cloud_config', null);
      var savedVer = STORE.get('cloud_config_version', 0);
      // 版本号过期 / URL 不匹配 → 强制用默认（避免 PO 项目旧配置残留）
      if (!saved || savedVer < CLOUD_CFG_VERSION || saved.url !== DEFAULT_SB_URL) {
        var fresh = {
          url: DEFAULT_SB_URL,
          key: DEFAULT_SB_KEY,
          enabled: true
        };
        STORE.set('cloud_config', fresh);
        STORE.set('cloud_config_version', CLOUD_CFG_VERSION);
        return fresh;
      }
      // 即使保留旧 cfg，也强制 enabled = true（数据必须能同步）
      if (saved.enabled === false) {
        var fixed = _objectSpread(_objectSpread({}, saved), {}, {
          enabled: true
        });
        STORE.set('cloud_config', fixed);
        return fixed;
      }
      return saved;
    }),
    _useState10 = _slicedToArray(_useState1, 2),
    cloudCfg = _useState10[0],
    setCloudCfg = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    cloudOn = _useState12[0],
    setCloudOn = _useState12[1];
  var _useState13 = useState(0),
    _useState14 = _slicedToArray(_useState13, 2),
    cloudVersion = _useState14[0],
    setCloudVersion = _useState14[1]; // 用于强制重新加载

  // 初始化云连接
  useEffect(function () {
    if (cloudCfg.enabled && cloudCfg.url && cloudCfg.key) {
      var ok = CLOUD.init(cloudCfg.url, cloudCfg.key);
      setCloudOn(ok);
      if (ok) {
        // 后台 ping
        CLOUD.ping().then(function (r) {
          if (!r.ok) setCloudOn(false);
        });
      }
    } else {
      setCloudOn(false);
    }
  }, [cloudCfg]);

  // 🆕 fix146: 云端就绪后拉账号表 → 登录名单以云端为准(任何设备/新人都能登录)
  var accountsLoadedRef = useRef(false);
  useEffect(function () {
    if (!cloudOn || accountsLoadedRef.current) return;
    accountsLoadedRef.current = true;
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var cloud, byId;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            _context3.n = 1;
            return loadCloudAccounts();
          case 1:
            cloud = _context3.v;
            if (!(cloud === null)) {
              _context3.n = 2;
              break;
            }
            console.warn('[账号] 云端 cs_accounts 未就绪(表未建?)→ 暂用本地名单;建表后会自动播种');
            accountsLoadedRef.current = false; // 允许重试(下次 cloudOn 变化)
            return _context3.a(2);
          case 2:
            if (!(cloud.length === 0)) {
              _context3.n = 4;
              break;
            }
            _context3.n = 3;
            return seedCloudAccounts(employees);
          case 3:
            return _context3.a(2);
          case 4:
            // 云端为准;补上云端没有的内置账号;本机有而云端没有的(离线新增)推到云端
            byId = new Map(cloud.map(function (e) {
              return [e.id, e];
            }));
            INITIAL_EMPLOYEES.forEach(function (i) {
              if (!byId.has(i.id)) {
                byId.set(i.id, i);
                saveCloudAccount(i);
              }
            });
            employees.forEach(function (e) {
              if (!byId.has(e.id)) {
                byId.set(e.id, e);
                saveCloudAccount(e);
              }
            });
            setEmployees(Array.from(byId.values()));
            console.log('[账号] 已从云端加载', byId.size, '个账号');
          case 5:
            return _context3.a(2);
        }
      }, _callee3);
    }))();
  }, [cloudOn]);

  // 当前登录用户
  var _useState15 = useState(function () {
      var stored = STORE.get('current_user', null);
      if (!stored) return null;
      var emp = STORE.get('employees', INITIAL_EMPLOYEES).find(function (e) {
        return e.id === stored.id;
      });
      return emp || null;
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    user = _useState16[0],
    setUser = _useState16[1];

  // 所有客服记录 (localStorage + 云同步)
  var _useState17 = useState(function () {
      // 🆕 fix203:启动自检 —— 主键空/损坏时,从文本备份键恢复,避免"刷新后全没了"
      var main = [];
      try {
        main = STORE.get('cs_records', []) || [];
      } catch (e) {
        main = [];
      }
      if (!Array.isArray(main)) main = [];
      if (main.length === 0) {
        try {
          var bak = STORE.get('cs_records_bak', []);
          if (Array.isArray(bak) && bak.length) {
            console.warn('[recover] cs_records 为空,从备份恢复', bak.length, '条');
            main = bak;
          }
        } catch (e) {}
      }
      return main.map(recomputeDuration);
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    records = _useState18[0],
    setRecords = _useState18[1];
  // 写入 localStorage（永久兜底）：先存完整(含图);超配额再退化为剥图版(图仍在云端 Supabase)
  useEffect(function () {
    // 🆕 fix199:逐级降级保存 —— 配额满时绝不让记录"文本"丢失(图在云端,大不了本地不存图)。
    var key = STORE.k('cs_records');
    // 🆕 fix203:每次都写一份极小的"文本备份键"(无图,永远存得下),主键万一损坏/被清可自动恢复
    try {
      localStorage.setItem(STORE.k('cs_records_bak'), JSON.stringify(minimalRecords(records)));
    } catch (e) {}
    try {
      localStorage.setItem(key, JSON.stringify(records));
      return;
    } catch (e) {}
    try {
      localStorage.setItem(key, JSON.stringify(slimRecordsForCache(records)));
      return;
    } catch (e) {} // 剥图版
    try {
      // 最后兜底:只留核心字段(无图无附件),保证刷新后记录还在,不再"凭空消失"
      localStorage.setItem(key, JSON.stringify(minimalRecords(records)));
    } catch (e) {
      console.error('[cs_records] 本地保存失败(配额已满,连无图版都存不下)', e);
    }
  }, [records]);

  // 云同步：启用时把云端记录拉下来覆盖本地视图（首次加载）
  useEffect(function () {
    if (!cloudOn || !user) return;
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var cloud, localMeaningful, localRecords, cloudById, localOnly, localNewer, merged, mx, toResync;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.n = 1;
            return CLOUD.list('workspace_records', {
              order: {
                col: 'updated_at',
                asc: false
              },
              limit: 1000
            });
          case 1:
            cloud = _context4.v;
            if (!(Array.isArray(cloud) && cloud.length === 0)) {
              _context4.n = 2;
              break;
            }
            localMeaningful = (recordsRef.current || []).filter(function (r) {
              return r && isRecordMeaningful(r) && !r.deleted;
            });
            if (!(localMeaningful.length > 0)) {
              _context4.n = 2;
              break;
            }
            console.warn('[sync] 云端返回 0 条但本地有', localMeaningful.length, '条 → 跳过覆盖,改为补传本地,防止误清空');
            // 🆕 fix216:不再清基线全量重传(那会触发百万级重写风暴);内容比对会让真正缺的行自然补传
            setTimeout(function () {
              try {
                syncChangedRecords();
              } catch (e) {}
            }, 500);
            return _context4.a(2);
          case 2:
            if (cloud !== null) {
              // 🆕 fix7: 不能简单云端覆盖! 用户可能有未同步的本地记录(网络断 / 跨日 / 上次同步失败)
              // 旧版策略导致数据丢失: 用户工作一天,本地有 N 条,刷新后被云端覆盖 → 全没了
              // 新策略: 智能合并
              //   1. 本地有但云端无 → 保留本地(待同步)
              //   2. 本地比云端新 → 保留本地(待同步)
              //   3. 其他 → 用云端
              // 然后立即触发重新同步,把保留的本地记录补传到云端
              localRecords = recordsRef.current || STORE.get('cs_records', []);
              cloudById = new Map((cloud || []).map(function (r) {
                return [r.id, r];
              }));
              localOnly = [];
              localNewer = [];
              (localRecords || []).forEach(function (local) {
                if (!local || !local.id) return;
                // 跳过完全空白且非删除的"未填"行
                if (!isRecordMeaningful(local) && !local.deleted) return;
                var remote = cloudById.get(local.id);
                if (!remote) {
                  // 本地独有 — 从未同步过
                  localOnly.push(local);
                } else {
                  // 两边都有 — 比较时间戳(🆕 fix211:两边都 updatedAt 优先,与 recordSig/变更检测一致;
                  //   否则本地用驼峰、云端用下划线,值不一样会让"较新的本地跟进"被旧云端覆盖 → Aletta 早上的跟进消失、记录回退逾期)
                  var localTs = new Date(local.updatedAt || local.updated_at || local.createdAt || 0).getTime();
                  var remoteTs = new Date(remote.updatedAt || remote.updated_at || remote.created_at || 0).getTime();
                  if (localTs > remoteTs + 1000) {
                    // 1秒容差避免时钟漂移
                    localNewer.push(local);
                  }
                }
              });

              // 🆕 fix181: 恢复防丢失合并 —— 高频录入时,本地还没上传成功的行不能在刷新时被云端覆盖丢掉!
              //   cloud 为底 + 本地独有(未同步)保留 + 本地更新版优先;然后把保留的本地记录补传云端。
              merged = new Map((cloud || []).map(function (r) {
                return [r.id, r];
              }));
              localOnly.forEach(function (l) {
                if (l && l.id) merged.set(l.id, l);
              }); // 本地独有 → 保留(待补传)
              localNewer.forEach(function (l) {
                if (l && l.id) merged.set(l.id, l);
              }); // 本地更新 → 用本地版
              setRecords(Array.from(merged.values()).map(recomputeDuration));
              // 🆕 fix208:记录拉取高水位(云端最大 updated_at),之后自动拉取只增量取更新过的
              try {
                mx = lastPullRef.current || '';
                (cloud || []).forEach(function (r) {
                  var u = r && (r.updatedAt || r.updated_at) || '';
                  if (u > mx) mx = u;
                });
                if (mx) lastPullRef.current = mx;
              } catch (e) {}
              // 🆕 fix181b: 云端来的记录标为"已同步"(增量同步基线),本地独有/更新的不标 → 会被补传
              // 🆕 fix210:基线必须与 recordSig 用完全一样的算法(都 updatedAt 优先),否则每条都被误判"已改"→几千条全重传。
              try {
                (cloud || []).forEach(function (r) {
                  if (r && r.id) {
                    lastSyncedRef.current.set(r.id, recordSig(r));
                    cloudSigRef.current.set(r.id, recordContentSig(r));
                  }
                });
              } catch (e) {}
              // 把保留的本地记录补传到云端(防止永久丢失)
              toResync = [].concat(localOnly, localNewer).filter(function (r) {
                return isRecordMeaningful(r) || r.deleted;
              });
              if (toResync.length > 0) {
                setTimeout(function () {
                  try {
                    uploadRecordsWithRetry(toResync);
                  } catch (e) {
                    console.warn('补传失败', e);
                  }
                }, 800);
              }
            }
          case 3:
            return _context4.a(2);
        }
      }, _callee4);
    }))();
  }, [cloudOn, user, cloudVersion]);

  // 🛠 清理 record 上传前的空字符串日期 → null（Postgres 不接受 ""）
  // 🛠 已知"风险字段" - 如果云端 schema 没建会触发 "Could not find the X column" 错误
  // 这些字段是渐进式加上来的，老 schema 可能没有
  var RISKY_FIELDS = ['escalated', 'escalatedAt', 'escalateReason', 'transferUnreadFor', 'transferHistory'];

  // 跟踪上次失败的字段名集合，避免反复重试
  var skipFieldsRef = useRef(new Set());
  var sanitizeRecordForCloud = function sanitizeRecordForCloud(r) {
    var cleaned = _objectSpread({}, r);
    // 这些字段如果是 "" 必须改 null，否则 Postgres 报错
    ['nextFollowUp', 'date', 'deletedAt', 'createdAt', 'updatedAt', 'escalatedAt', 'transferUnreadFor'].forEach(function (k) {
      if (cleaned[k] === '' || cleaned[k] === undefined) cleaned[k] = null;
    });
    // 这些字段如果是 undefined 必须填值（boolean 类型）
    if (cleaned.escalated === undefined) cleaned.escalated = false;
    if (cleaned.escalateReason === undefined) cleaned.escalateReason = null;
    // status 不能空
    if (!cleaned.status) cleaned.status = 'pending';
    // 🆕 IO优化:截图已传 Storage(有 url)的,云端只存 url,不再存 base64(行体积大幅缩小,Disk IO 降)
    var slimShot = function slimShot(s) {
      return s && s.data ? _objectSpread(_objectSpread({}, s), {}, {
        data: ''
      }) : s;
    }; // 🆕 fix204:入库一律剥 base64(无论有无url),行不超大→记录必能同步;图由 Storage 单独传,传上了才有 url
    if (Array.isArray(cleaned.screenshots)) cleaned.screenshots = cleaned.screenshots.map(slimShot);
    if (Array.isArray(cleaned.feedbackShots)) cleaned.feedbackShots = cleaned.feedbackShots.map(slimShot);
    if (Array.isArray(cleaned.productOptShots)) cleaned.productOptShots = cleaned.productOptShots.map(slimShot); // 🆕 fix179
    if (Array.isArray(cleaned.followUps)) cleaned.followUps = cleaned.followUps.map(function (f) {
      return f && Array.isArray(f.screenshots) ? _objectSpread(_objectSpread({}, f), {}, {
        screenshots: f.screenshots.map(slimShot)
      }) : f;
    });
    // 🆕 剥离已被云端拒绝的字段（schema cache 不识别的）
    skipFieldsRef.current.forEach(function (field) {
      delete cleaned[field];
    });
    return cleaned;
  };

  // 🆕 IO优化:把记录里的 base64 截图上传到 Storage,记下 url(本会话保留 data 供显示;入库由 sanitize 剥 base64)
  var ensureRecordShotsUploaded = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(records) {
      var uploadShot, _iterator, _step, r, _iterator2, _step2, s, _iterator3, _step3, _s, _iterator4, _step4, _s2, _iterator5, _step5, f, _iterator6, _step6, _s3, _t4, _t5, _t6, _t7, _t8, _t9;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            uploadShot = /*#__PURE__*/function () {
              var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(s) {
                var dataUrl, blob, file, res, _t3;
                return _regenerator().w(function (_context5) {
                  while (1) switch (_context5.p = _context5.n) {
                    case 0:
                      if (!(!s || s.url || !s.data)) {
                        _context5.n = 1;
                        break;
                      }
                      return _context5.a(2);
                    case 1:
                      _context5.p = 1;
                      dataUrl = /^data:/i.test(s.data) ? s.data : 'data:' + (s.mime || s.type || 'image/png') + ';base64,' + s.data;
                      _context5.n = 2;
                      return fetch(dataUrl);
                    case 2:
                      _context5.n = 3;
                      return _context5.v.blob();
                    case 3:
                      blob = _context5.v;
                      file = new File([blob], s.name || 'shot.png', {
                        type: blob.type || 'image/png'
                      });
                      _context5.n = 4;
                      return CLOUD.uploadImage('business-files', file, 'cs-records/');
                    case 4:
                      res = _context5.v;
                      if (res && res.url) {
                        s.url = res.url;
                        s.path = res.path;
                      }
                      _context5.n = 6;
                      break;
                    case 5:
                      _context5.p = 5;
                      _t3 = _context5.v;
                      console.warn('截图传Storage失败,保留base64', _t3);
                    case 6:
                      return _context5.a(2);
                  }
                }, _callee5, null, [[1, 5]]);
              }));
              return function uploadShot(_x2) {
                return _ref13.apply(this, arguments);
              };
            }();
            _iterator = _createForOfIteratorHelper(records || []);
            _context6.p = 1;
            _iterator.s();
          case 2:
            if ((_step = _iterator.n()).done) {
              _context6.n = 37;
              break;
            }
            r = _step.value;
            if (!Array.isArray(r.screenshots)) {
              _context6.n = 9;
              break;
            }
            _iterator2 = _createForOfIteratorHelper(r.screenshots);
            _context6.p = 3;
            _iterator2.s();
          case 4:
            if ((_step2 = _iterator2.n()).done) {
              _context6.n = 6;
              break;
            }
            s = _step2.value;
            _context6.n = 5;
            return uploadShot(s);
          case 5:
            _context6.n = 4;
            break;
          case 6:
            _context6.n = 8;
            break;
          case 7:
            _context6.p = 7;
            _t4 = _context6.v;
            _iterator2.e(_t4);
          case 8:
            _context6.p = 8;
            _iterator2.f();
            return _context6.f(8);
          case 9:
            if (!Array.isArray(r.feedbackShots)) {
              _context6.n = 16;
              break;
            }
            _iterator3 = _createForOfIteratorHelper(r.feedbackShots);
            _context6.p = 10;
            _iterator3.s();
          case 11:
            if ((_step3 = _iterator3.n()).done) {
              _context6.n = 13;
              break;
            }
            _s = _step3.value;
            _context6.n = 12;
            return uploadShot(_s);
          case 12:
            _context6.n = 11;
            break;
          case 13:
            _context6.n = 15;
            break;
          case 14:
            _context6.p = 14;
            _t5 = _context6.v;
            _iterator3.e(_t5);
          case 15:
            _context6.p = 15;
            _iterator3.f();
            return _context6.f(15);
          case 16:
            if (!Array.isArray(r.productOptShots)) {
              _context6.n = 23;
              break;
            }
            _iterator4 = _createForOfIteratorHelper(r.productOptShots);
            _context6.p = 17;
            _iterator4.s();
          case 18:
            if ((_step4 = _iterator4.n()).done) {
              _context6.n = 20;
              break;
            }
            _s2 = _step4.value;
            _context6.n = 19;
            return uploadShot(_s2);
          case 19:
            _context6.n = 18;
            break;
          case 20:
            _context6.n = 22;
            break;
          case 21:
            _context6.p = 21;
            _t6 = _context6.v;
            _iterator4.e(_t6);
          case 22:
            _context6.p = 22;
            _iterator4.f();
            return _context6.f(22);
          case 23:
            if (!Array.isArray(r.followUps)) {
              _context6.n = 36;
              break;
            }
            _iterator5 = _createForOfIteratorHelper(r.followUps);
            _context6.p = 24;
            _iterator5.s();
          case 25:
            if ((_step5 = _iterator5.n()).done) {
              _context6.n = 33;
              break;
            }
            f = _step5.value;
            if (!(f && Array.isArray(f.screenshots))) {
              _context6.n = 32;
              break;
            }
            _iterator6 = _createForOfIteratorHelper(f.screenshots);
            _context6.p = 26;
            _iterator6.s();
          case 27:
            if ((_step6 = _iterator6.n()).done) {
              _context6.n = 29;
              break;
            }
            _s3 = _step6.value;
            _context6.n = 28;
            return uploadShot(_s3);
          case 28:
            _context6.n = 27;
            break;
          case 29:
            _context6.n = 31;
            break;
          case 30:
            _context6.p = 30;
            _t7 = _context6.v;
            _iterator6.e(_t7);
          case 31:
            _context6.p = 31;
            _iterator6.f();
            return _context6.f(31);
          case 32:
            _context6.n = 25;
            break;
          case 33:
            _context6.n = 35;
            break;
          case 34:
            _context6.p = 34;
            _t8 = _context6.v;
            _iterator5.e(_t8);
          case 35:
            _context6.p = 35;
            _iterator5.f();
            return _context6.f(35);
          case 36:
            _context6.n = 2;
            break;
          case 37:
            _context6.n = 39;
            break;
          case 38:
            _context6.p = 38;
            _t9 = _context6.v;
            _iterator.e(_t9);
          case 39:
            _context6.p = 39;
            _iterator.f();
            return _context6.f(39);
          case 40:
            return _context6.a(2);
        }
      }, _callee6, null, [[26, 30, 31, 32], [24, 34, 35, 36], [17, 21, 22, 23], [10, 14, 15, 16], [3, 7, 8, 9], [1, 38, 39, 40]]);
    }));
    return function ensureRecordShotsUploaded(_x) {
      return _ref12.apply(this, arguments);
    };
  }();

  // 单批 upsert + schema 自动剥离重试。成功→true;非 schema 错误→false(上层逐条隔离)
  var upsertBatchWithSchemaRetry = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(batch) {
      var maxRetries,
        attempt,
        cleaned,
        _yield$CLOUD$client$f2,
        error,
        match,
        missingField,
        variants,
        _args7 = arguments;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            maxRetries = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : 5;
            attempt = 0;
          case 1:
            if (!(attempt < maxRetries)) {
              _context7.n = 5;
              break;
            }
            cleaned = batch.map(sanitizeRecordForCloud);
            _context7.n = 2;
            return CLOUD.client.from('workspace_records').upsert(cleaned);
          case 2:
            _yield$CLOUD$client$f2 = _context7.v;
            error = _yield$CLOUD$client$f2.error;
            if (error) {
              _context7.n = 3;
              break;
            }
            return _context7.a(2, true);
          case 3:
            match = (error.message || '').match(/Could not find the '([^']+)' column/i);
            if (!match) {
              _context7.n = 4;
              break;
            }
            missingField = match[1];
            variants = [missingField, missingField.toLowerCase(), missingField.replace(/_([a-z])/g, function (_, c) {
              return c.toUpperCase();
            })];
            variants.forEach(function (v) {
              return skipFieldsRef.current.add(v);
            });
            console.warn("[schema-retry] workspace_records \u7F3A\u5C11\u5217 \"".concat(missingField, "\",\u5DF2\u81EA\u52A8\u5265\u79BB\u91CD\u8BD5"));
            attempt++;
            return _context7.a(3, 1);
          case 4:
            console.warn('[upsert] 本批上传失败(非schema):', error.message);
            lastUpsertErrRef.current = error.message || '未知错误'; // 🆕 fix212:记下真实错误,供同步自检显示
            return _context7.a(2, false);
          case 5:
            return _context7.a(2, false);
        }
      }, _callee7);
    }));
    return function upsertBatchWithSchemaRetry(_x3) {
      return _ref14.apply(this, arguments);
    };
  }();

  // 🆕 fix184 深度修复"老板看到的记录变少":分小批上传 + 单条隔离。
  //   原来一次性 upsert 整批 → 只要一条记录有问题就整批失败、整批传不上,老板(云端)永远缺那几条。
  //   现在每 25 条一批;某批失败就逐条重试,只隔离真正出问题的那条,其余全部进服务器。
  //   返回 { ok, succeededIds, failedIds } —— 调用方据此只把"成功的"标记为已同步,失败的下次继续重试。
  var uploadRecordsWithRetry = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(recordsToUpload) {
      var maxRetries,
        okGo,
        meaningful,
        CHUNK,
        succeededIds,
        failedIds,
        i,
        batch,
        ok,
        _iterator7,
        _step7,
        one,
        okOne,
        _args8 = arguments,
        _t0,
        _t1;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            maxRetries = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : 5;
            if (!((recordsToUpload || []).length > 500)) {
              _context8.n = 2;
              break;
            }
            _context8.n = 1;
            return wsConfirm('⚠ 写入熔断:本次将写入 ' + recordsToUpload.length + ' 行到云端。\n正常同步不应出现这么大的批量,可能是异常重传。\n确认继续?');
          case 1:
            okGo = _context8.v;
            if (okGo) {
              _context8.n = 2;
              break;
            }
            console.warn('[fix216熔断] 管理员取消了 ' + recordsToUpload.length + ' 行的批量写入');
            return _context8.a(2, {
              ok: false,
              succeededIds: [],
              failedIds: (recordsToUpload || []).map(function (r) {
                return r.id;
              })
            });
          case 2:
            upsertCountRef.current += (recordsToUpload || []).length;
            if (upsertCountRef.current > 5000) console.warn('[fix216自检] 本会话已 upsert ' + upsertCountRef.current + ' 行(>5000),请检查是否有异常重传');
            if (CLOUD.client) {
              _context8.n = 3;
              break;
            }
            throw new Error('云端未连接');
          case 3:
            meaningful = (recordsToUpload || []).filter(function (r) {
              return r.deleted || isRecordMeaningful(r);
            });
            if (!(meaningful.length === 0)) {
              _context8.n = 4;
              break;
            }
            return _context8.a(2, {
              ok: true,
              succeededIds: [],
              failedIds: [],
              skipped: (recordsToUpload === null || recordsToUpload === void 0 ? void 0 : recordsToUpload.length) || 0
            });
          case 4:
            _context8.p = 4;
            _context8.n = 5;
            return ensureRecordShotsUploaded(meaningful);
          case 5:
            _context8.n = 7;
            break;
          case 6:
            _context8.p = 6;
            _t0 = _context8.v;
            console.warn('图片传Storage部分失败,继续', _t0);
          case 7:
            CHUNK = 25;
            succeededIds = [];
            failedIds = [];
            i = 0;
          case 8:
            if (!(i < meaningful.length)) {
              _context8.n = 19;
              break;
            }
            batch = meaningful.slice(i, i + CHUNK);
            _context8.n = 9;
            return upsertBatchWithSchemaRetry(batch, maxRetries);
          case 9:
            ok = _context8.v;
            if (!ok) {
              _context8.n = 10;
              break;
            }
            batch.forEach(function (r) {
              return succeededIds.push(r.id);
            });
            _context8.n = 18;
            break;
          case 10:
            // 整批失败 → 逐条上传,把好的救出来,坏的单独标记
            _iterator7 = _createForOfIteratorHelper(batch);
            _context8.p = 11;
            _iterator7.s();
          case 12:
            if ((_step7 = _iterator7.n()).done) {
              _context8.n = 15;
              break;
            }
            one = _step7.value;
            _context8.n = 13;
            return upsertBatchWithSchemaRetry([one], maxRetries);
          case 13:
            okOne = _context8.v;
            if (okOne) {
              succeededIds.push(one.id);
              syncErrorsRef.current["delete"](one.id);
            } else {
              failedIds.push(one.id);
              syncErrorsRef.current.set(one.id, lastUpsertErrRef.current || '未知错误');
              console.error('[upsert] 这条记录上传失败:', one.id, one.customer, one.order_no || one.orderRef, '·', lastUpsertErrRef.current);
            }
          case 14:
            _context8.n = 12;
            break;
          case 15:
            _context8.n = 17;
            break;
          case 16:
            _context8.p = 16;
            _t1 = _context8.v;
            _iterator7.e(_t1);
          case 17:
            _context8.p = 17;
            _iterator7.f();
            return _context8.f(17);
          case 18:
            i += CHUNK;
            _context8.n = 8;
            break;
          case 19:
            return _context8.a(2, {
              ok: failedIds.length === 0,
              succeededIds: succeededIds,
              failedIds: failedIds
            });
        }
      }, _callee8, null, [[11, 16, 17, 18], [4, 6]]);
    }));
    return function uploadRecordsWithRetry(_x4) {
      return _ref15.apply(this, arguments);
    };
  }();

  // 写入云端 · fix181b: 增量同步 —— 只上传"改动过的记录"(不再每次整包传 ~980 条),又快又稳,确保每条录入都进服务器
  var recordsRef = useRef(records);
  recordsRef.current = records;
  var _useState19 = useState(null),
    _useState20 = _slicedToArray(_useState19, 2),
    cloudSyncError = _useState20[0],
    setCloudSyncError = _useState20[1];
  var _useState21 = useState(0),
    _useState22 = _slicedToArray(_useState21, 2),
    unsyncedCount = _useState22[0],
    setUnsyncedCount = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    syncStuck = _useState24[0],
    setSyncStuck = _useState24[1]; // 🆕 fix200:未同步持续超 8 秒 → 弹醒目角标(正常录入 1-2 秒就同步上,不会一闪一闪)
  var lastSyncedRef = useRef(new Map()); // id → 已同步签名(updatedAt + 删除态)
  var lastPullRef = useRef(null); // 🆕 fix208:自动拉取高水位(只增量拉"更新过"的)
  var syncErrorsRef = useRef(new Map()); // 🆕 fix212:id → 最近一次上传失败的真实错误
  var lastUpsertErrRef = useRef('');
  var _useState25 = useState(null),
    _useState26 = _slicedToArray(_useState25, 2),
    syncDiag = _useState26[0],
    setSyncDiag = _useState26[1]; // 🆕 fix212:同步自检结果(null=未开;对象=显示弹窗)
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    syncDiagBusy = _useState28[0],
    setSyncDiagBusy = _useState28[1];
  var recordSig = function recordSig(r) {
    return (r.updatedAt || r.updated_at || '') + (r.deleted ? '·del' : '');
  };
  // 🆕 fix216:内容签名 —— 排除 updatedAt/updated_at/syncedAt/version/createdAt 等易变字段,只看业务内容
  var recordContentSig = function recordContentSig(r) {
    if (!r) return '';
    var VOLATILE = {
      updatedAt: 1,
      updated_at: 1,
      syncedAt: 1,
      synced_at: 1,
      version: 1,
      createdAt: 1,
      created_at: 1,
      markedAt: 1
    };
    var keys = Object.keys(r).filter(function (k) {
      return !VOLATILE[k];
    }).sort();
    var s = '';
    var _iterator8 = _createForOfIteratorHelper(keys),
      _step8;
    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var k = _step8.value;
        var v = r[k];
        if (v === undefined || v === null || v === '') continue;
        s += k + '=' + (_typeof(v) === 'object' ? JSON.stringify(v) : String(v)) + '|';
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }
    var h = 5381;
    for (var i = 0; i < s.length; i++) {
      h = (h << 5) + h + s.charCodeAt(i) | 0;
    }
    return String(h) + ':' + s.length;
  };
  var cloudSigRef = useRef(new Map()); // id → 云端已知内容签名(写前比对,内容没变就不写)
  var upsertCountRef = useRef(0); // 🆕 自检计数:本会话 upsert 行数
  useEffect(function () {
    try {
      // 🆕 签名自测:同行两次相等,改业务字段后不等
      var a = {
          id: 't',
          note: 'x',
          updatedAt: '1'
        },
        b = {
          id: 't',
          note: 'x',
          updatedAt: '2'
        },
        c = {
          id: 't',
          note: 'y',
          updatedAt: '1'
        };
      console.assert(recordContentSig(a) === recordContentSig(b), '[fix216自测失败] 易变字段影响了签名');
      console.assert(recordContentSig(a) !== recordContentSig(c), '[fix216自测失败] 业务字段未影响签名');
    } catch (e) {}
  }, []);
  var computeChangedRecords = function computeChangedRecords() {
    return (recordsRef.current || []).filter(function (r) {
      if (!r || !r.id) return false;
      if (!isRecordMeaningful(r) && !r.deleted) return false; // 完全空白行不传
      if (cloudSigRef.current.get(r.id) === recordContentSig(r)) return false; // 🆕 fix216:内容与云端一致 → 不写(根因去重)
      return lastSyncedRef.current.get(r.id) !== recordSig(r); // 新增或内容变了
    });
  };
  var syncChangedRecords = /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var changed, res, failed, _t10;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            if (!(!cloudOn || !user || !CLOUD.client)) {
              _context9.n = 1;
              break;
            }
            return _context9.a(2);
          case 1:
            changed = computeChangedRecords();
            if (!(changed.length === 0)) {
              _context9.n = 2;
              break;
            }
            setUnsyncedCount(0);
            setCloudSyncError(null);
            return _context9.a(2);
          case 2:
            setUnsyncedCount(changed.length);
            _context9.p = 3;
            _context9.n = 4;
            return uploadRecordsWithRetry(changed);
          case 4:
            res = _context9.v;
            // 分批+单条隔离
            failed = new Set(res.failedIds || []); // 只把"成功上传的"标记为已同步;失败的不标 → 下次/兜底自动重试
            changed.forEach(function (r) {
              if (!failed.has(r.id)) {
                lastSyncedRef.current.set(r.id, recordSig(r));
                cloudSigRef.current.set(r.id, recordContentSig(r));
              }
            });
            setCloudSyncError(failed.size > 0 ? "".concat(failed.size, " \u6761\u8BB0\u5F55\u4E0A\u4F20\u5931\u8D25(\u5176\u4F59\u5DF2\u8FDB\u670D\u52A1\u5668),\u5C06\u81EA\u52A8\u91CD\u8BD5") : null);
            setUnsyncedCount(computeChangedRecords().length);
            // 🆕 fix203:截图已传云存储(有 url),本地丢掉 base64 只留 url,释放本机空间。无变化则不触发更新(不会循环)。
            setRecords(function (prev) {
              var next = prev.map(stripRecordUploadedShots);
              return next.some(function (r, i) {
                return r !== prev[i];
              }) ? next : prev;
            });
            _context9.n = 6;
            break;
          case 5:
            _context9.p = 5;
            _t10 = _context9.v;
            console.error('云端写入失败(将自动重试)', _t10);
            setCloudSyncError(_t10.message);
          case 6:
            return _context9.a(2);
        }
      }, _callee9, null, [[3, 5]]);
    }));
    return function syncChangedRecords() {
      return _ref16.apply(this, arguments);
    };
  }();

  // 改动后 debounce 同步(只传变化的)
  useEffect(function () {
    if (!cloudOn || !user) return;
    var t = setTimeout(syncChangedRecords, 1200);
    return function () {
      return clearTimeout(t);
    };
  }, [records, cloudOn, user]);

  // 定时兜底:每 15 秒把仍未同步的改动补传一次(防止某次失败后永远卡在本地)
  useEffect(function () {
    if (!cloudOn || !user) return;
    var iv = setInterval(function () {
      if (document.visibilityState === 'visible') syncChangedRecords();
    }, 60000); // 🆕 fix216:60s 批量窗口,页面不可见不跑
    return function () {
      return clearInterval(iv);
    };
  }, [cloudOn, user]);

  // 🆕 fix208(重构·双向实时同步的"拉"这一半):workspace_records 此前只在登录时拉一次 → 主管/同事看不到彼此的新数据,
  //   被迫手动刷新。现在每 12 秒增量拉取云端"自上次拉取后更新过"的记录并合并进来,自动、无需任何手动操作。
  //   合并规则与加载时一致:本地有未推送的改动 → 保留本地(它会被推上去);否则云端更新更晚 → 采用云端。
  useEffect(function () {
    if (!cloudOn || !user || !CLOUD.client) return;
    var stopped = false;
    var pull = /*#__PURE__*/function () {
      var _ref17 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        var sinceMs, since, res, _res, data, error, mx, _t11;
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.p = _context0.n) {
            case 0:
              if (!(stopped || !CLOUD.client || document.visibilityState === 'hidden')) {
                _context0.n = 1;
                break;
              }
              return _context0.a(2);
            case 1:
              _context0.p = 1;
              // 优先用 updatedAt(应用每次编辑必更新);若该列不可过滤则回退 updated_at,保证自动拉取永不静默失效
              // 🆕 fix213:高水位回退 5 分钟再过滤 —— 各台电脑时钟可能不同步,若同事的 updatedAt 比本机高水位略小会被漏掉;
              //   留 5 分钟安全窗(重叠重拉极少量、合并幂等无副作用),保证别人的跟进/改动一定被拉到。
              sinceMs = lastPullRef.current ? Date.parse(lastPullRef.current) : NaN;
              since = isNaN(sinceMs) ? null : new Date(sinceMs - 5000).toISOString(); // 🆕 fix216:服务端时间戳-5秒重叠,按 id 去重合并
              _context0.n = 2;
              return function () {
                var q = CLOUD.client.from('workspace_records').select('*').order('updatedAt', {
                  ascending: false
                }).limit(1000);
                if (since) q = q.gt('updatedAt', since);
                return q;
              }();
            case 2:
              res = _context0.v;
              if (!res.error) {
                _context0.n = 4;
                break;
              }
              _context0.n = 3;
              return function () {
                var q = CLOUD.client.from('workspace_records').select('*').order('updated_at', {
                  ascending: false
                }).limit(1000);
                if (since) q = q.gt('updated_at', since);
                return q;
              }();
            case 3:
              res = _context0.v;
            case 4:
              _res = res, data = _res.data, error = _res.error;
              if (!(error || !Array.isArray(data) || data.length === 0)) {
                _context0.n = 5;
                break;
              }
              return _context0.a(2);
            case 5:
              mx = lastPullRef.current || '';
              data.forEach(function (r) {
                var u = r.updatedAt || r.updated_at || '';
                if (u > mx) mx = u;
              });
              if (mx) lastPullRef.current = mx;
              setRecords(function (prev) {
                var byId = new Map(prev.map(function (r) {
                  return [r.id, r];
                }));
                var changed = false;
                data.forEach(function (cr) {
                  if (!cr || !cr.id) return;
                  var lr = byId.get(cr.id);
                  if (!lr) {
                    // 本地没有 → 别人/主管新建的,加进来
                    byId.set(cr.id, recomputeDuration(cr));
                    lastSyncedRef.current.set(cr.id, recordSig(cr));
                    cloudSigRef.current.set(cr.id, recordContentSig(cr));
                    changed = true;
                    return;
                  }
                  if (lastSyncedRef.current.get(lr.id) !== recordSig(lr)) return; // 本地有未推送改动 → 保留本地
                  var lts = new Date(lr.updatedAt || lr.updated_at || 0).getTime();
                  var cts = new Date(cr.updated_at || cr.updatedAt || 0).getTime();
                  if (cts > lts) {
                    byId.set(cr.id, recomputeDuration(cr));
                    lastSyncedRef.current.set(cr.id, recordSig(cr));
                    cloudSigRef.current.set(cr.id, recordContentSig(cr));
                    changed = true;
                  }
                });
                return changed ? Array.from(byId.values()) : prev;
              });
              _context0.n = 7;
              break;
            case 6:
              _context0.p = 6;
              _t11 = _context0.v;
            case 7:
              return _context0.a(2);
          }
        }, _callee0, null, [[1, 6]]);
      }));
      return function pull() {
        return _ref17.apply(this, arguments);
      };
    }();
    var iv = setInterval(pull, 30000); // 🆕 fix216:30s 轮询(REST,不计 Realtime)
    var t = setTimeout(pull, 3500); // 登录后先拉一次(等首次加载合并完成)
    var onShow = function onShow() {
      if (document.visibilityState === 'visible') pull();
    }; // 切回页面立刻拉一次
    document.addEventListener('visibilitychange', onShow);
    return function () {
      stopped = true;
      clearInterval(iv);
      clearTimeout(t);
      document.removeEventListener('visibilitychange', onShow);
    };
  }, [cloudOn, user]);

  // 🆕 fix216:已移除 workspace_records 的 realtime 订阅(消息风暴源);同步靠 30s 增量轮询 + 60s 批量写,Realtime 消息归零。

  // 🆕 fix199:离开页面前立即补传 —— 切到别的标签/最小化/锁屏/关闭时马上把未同步改动推上去,
  //   避免"录完就走人、还没到 15 秒就被丢"的窗口(Aletta 中午离开后记录消失的根因之一)。
  useEffect(function () {
    if (!cloudOn || !user) return;
    var flush = function flush() {
      if (document.visibilityState === 'hidden') {
        try {
          syncChangedRecords();
        } catch (e) {}
      }
    };
    document.addEventListener('visibilitychange', flush);
    window.addEventListener('pagehide', flush);
    return function () {
      document.removeEventListener('visibilitychange', flush);
      window.removeEventListener('pagehide', flush);
    };
  }, [cloudOn, user]);

  // 🆕 fix200:未同步持续超过 8 秒才点亮醒目角标(避免正常录入时一闪一闪)
  useEffect(function () {
    if (!cloudOn || !user || unsyncedCount <= 0) {
      setSyncStuck(false);
      return;
    }
    var t = setTimeout(function () {
      return setSyncStuck(true);
    }, 8000);
    return function () {
      return clearTimeout(t);
    };
  }, [unsyncedCount, cloudOn, user]);

  // 🆕 fix182: 手动「全部上传到服务器」—— 把本地所有有内容的记录强制推到云端(用于把之前没传上的旧数据一次性补上)
  // 🆕 fix212:同步自检 —— 直接读真实云端,把"本地 vs 云端"摊开,定位到底是"没上云"还是"归属不符"。
  var runSyncDiag = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
      var targetId, targetName, localAll, localMine, unsynced, unsyncedMine, noOwner, cloudMine, cloudErr, q, stuck, _t12;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            if (!(!CLOUD.client || syncDiagBusy)) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2);
          case 1:
            setSyncDiagBusy(true);
            _context1.p = 2;
            // 目标范围:主管选了某客服→看那个人;否则看当前登录人
            targetId = isAdmin && showAll && filterOwner !== 'all' ? filterOwner : user.id;
            targetName = (employees.find(function (e) {
              return e.id === targetId;
            }) || {}).name || (targetId === user.id ? user.name || '我' : targetId);
            localAll = (recordsRef.current || []).filter(function (r) {
              return r && r.id && !r.deleted && isRecordMeaningful(r);
            });
            localMine = localAll.filter(function (r) {
              return r.ownerId === targetId;
            });
            unsynced = (recordsRef.current || []).filter(function (r) {
              return r && r.id && (isRecordMeaningful(r) || r.deleted) && lastSyncedRef.current.get(r.id) !== recordSig(r);
            });
            unsyncedMine = unsynced.filter(function (r) {
              return r.ownerId === targetId;
            });
            noOwner = localAll.filter(function (r) {
              return !r.ownerId;
            }); // 没有归属的本地记录(会让主管按人筛选时漏算)
            // 云端:该 ownerId 的非删除记录数
            cloudMine = null, cloudErr = null;
            _context1.p = 3;
            _context1.n = 4;
            return CLOUD.client.from('workspace_records').select('id', {
              count: 'exact',
              head: true
            }).eq('ownerId', targetId).or('deleted.is.null,deleted.eq.false');
          case 4:
            q = _context1.v;
            if (q.error) cloudErr = q.error.message;else cloudMine = q.count;
            _context1.n = 6;
            break;
          case 5:
            _context1.p = 5;
            _t12 = _context1.v;
            cloudErr = String(_t12.message || _t12);
          case 6:
            // 列出未上云的明细(带真实错误)
            stuck = unsyncedMine.slice(0, 12).map(function (r) {
              return {
                id: r.id,
                who: r.customer || '(无客户)',
                date: r.date,
                err: syncErrorsRef.current.get(r.id) || '尚未上传(将自动重试)'
              };
            });
            setSyncDiag({
              targetName: targetName,
              localCount: localMine.length,
              cloudCount: cloudMine,
              cloudErr: cloudErr,
              unsyncedCount: unsyncedMine.length,
              noOwnerCount: noOwner.length,
              stuck: stuck,
              totalLocal: localAll.length
            });
          case 7:
            _context1.p = 7;
            setSyncDiagBusy(false);
            return _context1.f(7);
          case 8:
            return _context1.a(2);
        }
      }, _callee1, null, [[3, 5], [2,, 7, 8]]);
    }));
    return function runSyncDiag() {
      return _ref18.apply(this, arguments);
    };
  }();
  var _useState29 = useState(false),
    _useState30 = _slicedToArray(_useState29, 2),
    forcingSync = _useState30[0],
    setForcingSync = _useState30[1];
  var forceSyncAll = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
      var all, diff, res, failed, _t13;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            if (!(!cloudOn || !user || !CLOUD.client || forcingSync)) {
              _context10.n = 1;
              break;
            }
            return _context10.a(2);
          case 1:
            all = (recordsRef.current || []).filter(function (r) {
              return r && r.id && (isRecordMeaningful(r) || r.deleted);
            });
            if (!(all.length === 0)) {
              _context10.n = 2;
              break;
            }
            toast('没有需要上传的记录');
            return _context10.a(2);
          case 2:
            setForcingSync(true);
            toast("\u23F3 \u6B63\u5728\u628A ".concat(all.length, " \u6761\u5168\u90E8\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u2026"));
            _context10.p = 3;
            // 🆕 fix216:diff-only —— 只传与云端内容有差异的行;0 行直接结束,不发任何请求
            diff = all.filter(function (r) {
              return cloudSigRef.current.get(r.id) !== recordContentSig(r);
            });
            if (!(diff.length === 0)) {
              _context10.n = 4;
              break;
            }
            toast('✓ 云端已一致,无需上传');
            setForcingSync(false);
            return _context10.a(2);
          case 4:
            _context10.n = 5;
            return wsConfirm('将上传 ' + diff.length + ' 行有差异的记录(共 ' + all.length + ' 行,其余与云端一致)。继续?');
          case 5:
            if (_context10.v) {
              _context10.n = 6;
              break;
            }
            setForcingSync(false);
            return _context10.a(2);
          case 6:
            _context10.n = 7;
            return uploadRecordsWithRetry(diff);
          case 7:
            res = _context10.v;
            failed = new Set(res.failedIds || []);
            diff.forEach(function (r) {
              if (!failed.has(r.id)) {
                lastSyncedRef.current.set(r.id, recordSig(r));
                cloudSigRef.current.set(r.id, recordContentSig(r));
              }
            });
            setCloudSyncError(failed.size > 0 ? "".concat(failed.size, " \u6761\u4E0A\u4F20\u5931\u8D25,\u81EA\u52A8\u91CD\u8BD5\u4E2D") : null);
            setUnsyncedCount(computeChangedRecords().length);
            toast(failed.size > 0 ? "\u5DF2\u4E0A\u4F20 ".concat(diff.length - failed.size, "/").concat(diff.length, " \u6761,").concat(failed.size, " \u6761\u5931\u8D25(\u81EA\u52A8\u91CD\u8BD5)") : "\u2713 \u5DF2\u4E0A\u4F20 ".concat(diff.length, " \u6761\u5DEE\u5F02\u8BB0\u5F55"));
            _context10.n = 9;
            break;
          case 8:
            _context10.p = 8;
            _t13 = _context10.v;
            setCloudSyncError(_t13.message);
            alert('部分上传失败,稍后会自动重试。错误:' + (_t13.message || _t13));
          case 9:
            setForcingSync(false);
          case 10:
            return _context10.a(2);
        }
      }, _callee10, null, [[3, 8]]);
    }));
    return function forceSyncAll() {
      return _ref19.apply(this, arguments);
    };
  }();

  // 🆕 一次性瘦身:把历史记录里残留的 base64 截图迁移到云存储(库里只留 URL),列表加载提速
  //    纯增量:只上传"有 data 无 url"的图;确认 url 后才剥 base64;不删任何记录、不丢数据
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    migrating = _useState32[0],
    setMigrating = _useState32[1];
  var migrateRecordImages = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
      var all, hasB64, needs, done, imgs, upOne, slim, BATCH, i, batch, _iterator9, _step9, r, _iterator0, _step0, s, _iterator1, _step1, _s4, _iterator10, _step10, _s5, _iterator11, _step11, f, _iterator12, _step12, _s6, cleaned, _t15, _t16, _t17, _t18, _t19, _t20, _t21;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            if (!(!CLOUD.client || migrating)) {
              _context12.n = 1;
              break;
            }
            return _context12.a(2);
          case 1:
            if (window.confirm('把历史记录里的图片迁移到云存储(只上传、不删数据)。\n\n迁移后列表加载会明显变快。期间请勿关闭页面。\n\n现在开始?')) {
              _context12.n = 2;
              break;
            }
            return _context12.a(2);
          case 2:
            setMigrating(true);
            _context12.p = 3;
            toast('⏳ 正在加载全部记录…');
            _context12.n = 4;
            return CLOUD.list('workspace_records', {
              order: {
                col: 'updated_at',
                asc: false
              },
              limit: 5000
            });
          case 4:
            all = _context12.v;
            if (all) {
              _context12.n = 5;
              break;
            }
            alert('加载失败,请稍后重试');
            setMigrating(false);
            return _context12.a(2);
          case 5:
            hasB64 = function hasB64(arr) {
              return Array.isArray(arr) && arr.some(function (s) {
                return s && s.data && !s.url;
              });
            };
            needs = all.filter(function (r) {
              return hasB64(r.screenshots) || hasB64(r.feedbackShots) || hasB64(r.productOptShots) || Array.isArray(r.followUps) && r.followUps.some(function (f) {
                return f && hasB64(f.screenshots);
              });
            });
            if (!(needs.length === 0)) {
              _context12.n = 6;
              break;
            }
            alert('✓ 没有需要迁移的历史图片 — 已经是最优状态。');
            setMigrating(false);
            return _context12.a(2);
          case 6:
            done = 0, imgs = 0;
            upOne = /*#__PURE__*/function () {
              var _ref21 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(s) {
                var dataUrl, blob, file, res, _t14;
                return _regenerator().w(function (_context11) {
                  while (1) switch (_context11.p = _context11.n) {
                    case 0:
                      if (!(!s || s.url || !s.data)) {
                        _context11.n = 1;
                        break;
                      }
                      return _context11.a(2);
                    case 1:
                      _context11.p = 1;
                      dataUrl = /^data:/i.test(s.data) ? s.data : 'data:' + (s.mime || s.type || 'image/png') + ';base64,' + s.data;
                      _context11.n = 2;
                      return fetch(dataUrl);
                    case 2:
                      _context11.n = 3;
                      return _context11.v.blob();
                    case 3:
                      blob = _context11.v;
                      file = new File([blob], s.name || 'shot.png', {
                        type: blob.type || 'image/png'
                      });
                      _context11.n = 4;
                      return CLOUD.uploadImage('business-files', file, 'cs-records/');
                    case 4:
                      res = _context11.v;
                      if (res && res.url) {
                        s.url = res.url;
                        s.path = res.path;
                        imgs++;
                      }
                      _context11.n = 6;
                      break;
                    case 5:
                      _context11.p = 5;
                      _t14 = _context11.v;
                      console.warn('迁移图片失败,保留base64', _t14);
                    case 6:
                      return _context11.a(2);
                  }
                }, _callee11, null, [[1, 5]]);
              }));
              return function upOne(_x5) {
                return _ref21.apply(this, arguments);
              };
            }();
            slim = function slim(s) {
              return s && s.data ? _objectSpread(_objectSpread({}, s), {}, {
                data: ''
              }) : s;
            }; // 🆕 fix204:入库一律剥 base64
            BATCH = 15;
            i = 0;
          case 7:
            if (!(i < needs.length)) {
              _context12.n = 51;
              break;
            }
            batch = needs.slice(i, i + BATCH);
            _iterator9 = _createForOfIteratorHelper(batch);
            _context12.p = 8;
            _iterator9.s();
          case 9:
            if ((_step9 = _iterator9.n()).done) {
              _context12.n = 45;
              break;
            }
            r = _step9.value;
            if (!Array.isArray(r.screenshots)) {
              _context12.n = 16;
              break;
            }
            _iterator0 = _createForOfIteratorHelper(r.screenshots);
            _context12.p = 10;
            _iterator0.s();
          case 11:
            if ((_step0 = _iterator0.n()).done) {
              _context12.n = 13;
              break;
            }
            s = _step0.value;
            _context12.n = 12;
            return upOne(s);
          case 12:
            _context12.n = 11;
            break;
          case 13:
            _context12.n = 15;
            break;
          case 14:
            _context12.p = 14;
            _t15 = _context12.v;
            _iterator0.e(_t15);
          case 15:
            _context12.p = 15;
            _iterator0.f();
            return _context12.f(15);
          case 16:
            if (!Array.isArray(r.feedbackShots)) {
              _context12.n = 23;
              break;
            }
            _iterator1 = _createForOfIteratorHelper(r.feedbackShots);
            _context12.p = 17;
            _iterator1.s();
          case 18:
            if ((_step1 = _iterator1.n()).done) {
              _context12.n = 20;
              break;
            }
            _s4 = _step1.value;
            _context12.n = 19;
            return upOne(_s4);
          case 19:
            _context12.n = 18;
            break;
          case 20:
            _context12.n = 22;
            break;
          case 21:
            _context12.p = 21;
            _t16 = _context12.v;
            _iterator1.e(_t16);
          case 22:
            _context12.p = 22;
            _iterator1.f();
            return _context12.f(22);
          case 23:
            if (!Array.isArray(r.productOptShots)) {
              _context12.n = 30;
              break;
            }
            _iterator10 = _createForOfIteratorHelper(r.productOptShots);
            _context12.p = 24;
            _iterator10.s();
          case 25:
            if ((_step10 = _iterator10.n()).done) {
              _context12.n = 27;
              break;
            }
            _s5 = _step10.value;
            _context12.n = 26;
            return upOne(_s5);
          case 26:
            _context12.n = 25;
            break;
          case 27:
            _context12.n = 29;
            break;
          case 28:
            _context12.p = 28;
            _t17 = _context12.v;
            _iterator10.e(_t17);
          case 29:
            _context12.p = 29;
            _iterator10.f();
            return _context12.f(29);
          case 30:
            if (!Array.isArray(r.followUps)) {
              _context12.n = 43;
              break;
            }
            _iterator11 = _createForOfIteratorHelper(r.followUps);
            _context12.p = 31;
            _iterator11.s();
          case 32:
            if ((_step11 = _iterator11.n()).done) {
              _context12.n = 40;
              break;
            }
            f = _step11.value;
            if (!(f && Array.isArray(f.screenshots))) {
              _context12.n = 39;
              break;
            }
            _iterator12 = _createForOfIteratorHelper(f.screenshots);
            _context12.p = 33;
            _iterator12.s();
          case 34:
            if ((_step12 = _iterator12.n()).done) {
              _context12.n = 36;
              break;
            }
            _s6 = _step12.value;
            _context12.n = 35;
            return upOne(_s6);
          case 35:
            _context12.n = 34;
            break;
          case 36:
            _context12.n = 38;
            break;
          case 37:
            _context12.p = 37;
            _t18 = _context12.v;
            _iterator12.e(_t18);
          case 38:
            _context12.p = 38;
            _iterator12.f();
            return _context12.f(38);
          case 39:
            _context12.n = 32;
            break;
          case 40:
            _context12.n = 42;
            break;
          case 41:
            _context12.p = 41;
            _t19 = _context12.v;
            _iterator11.e(_t19);
          case 42:
            _context12.p = 42;
            _iterator11.f();
            return _context12.f(42);
          case 43:
            done++;
          case 44:
            _context12.n = 9;
            break;
          case 45:
            _context12.n = 47;
            break;
          case 46:
            _context12.p = 46;
            _t20 = _context12.v;
            _iterator9.e(_t20);
          case 47:
            _context12.p = 47;
            _iterator9.f();
            return _context12.f(47);
          case 48:
            cleaned = batch.map(function (r) {
              var c = _objectSpread({}, r);
              if (Array.isArray(c.screenshots)) c.screenshots = c.screenshots.map(slim);
              if (Array.isArray(c.feedbackShots)) c.feedbackShots = c.feedbackShots.map(slim);
              if (Array.isArray(c.followUps)) c.followUps = c.followUps.map(function (f) {
                return f && Array.isArray(f.screenshots) ? _objectSpread(_objectSpread({}, f), {}, {
                  screenshots: f.screenshots.map(slim)
                }) : f;
              });
              return c;
            });
            _context12.n = 49;
            return CLOUD.client.from('workspace_records').upsert(cleaned);
          case 49:
            toast("\u23F3 \u8FC1\u79FB\u4E2D ".concat(done, "/").concat(needs.length, " \u6761\u2026"));
          case 50:
            i += BATCH;
            _context12.n = 7;
            break;
          case 51:
            alert("\u2713 \u8FC1\u79FB\u5B8C\u6210!\n\n\u5904\u7406 ".concat(needs.length, " \u6761\u8BB0\u5F55\u3001").concat(imgs, " \u5F20\u56FE\u7247\u5DF2\u8F6C\u4E91\u5B58\u50A8\u3002\n\u5E93\u91CC\u4E0D\u518D\u5E26 base64,\u52A0\u8F7D\u4F1A\u5FEB\u5F88\u591A\u3002\n\n\u8BF7\u5F3A\u5237\u9875\u9762(Ctrl+Shift+R)\u4F53\u9A8C\u3002"));
            _context12.n = 53;
            break;
          case 52:
            _context12.p = 52;
            _t21 = _context12.v;
            alert('迁移出错: ' + (_t21.message || _t21));
          case 53:
            setMigrating(false);
          case 54:
            return _context12.a(2);
        }
      }, _callee12, null, [[33, 37, 38, 39], [31, 41, 42, 43], [24, 28, 29, 30], [17, 21, 22, 23], [10, 14, 15, 16], [8, 46, 47, 48], [3, 52]]);
    }));
    return function migrateRecordImages() {
      return _ref20.apply(this, arguments);
    };
  }();

  // tab - 持久化到 localStorage，刷新后保留
  var _useState33 = useState(function () {
      // URL hash 优先 (#tab=kb)，其次 localStorage，最后按角色默认
      // 🆕 fix11: 正则允许下划线,匹配 cross_dept / delete_approvals / ai_reviews / admin_overview / offline_orders / custom_photo 等
      var hashMatch = window.location.hash.match(/tab=([a-z_]+)/);
      var initialTab = null;
      if (hashMatch) initialTab = hashMatch[1];else {
        var saved = localStorage.getItem('ws_active_tab');
        if (saved) initialTab = saved;
      }
      // 🆕 fix11-hotfix2: ai_reviews 已废弃 → 重定向到 reviews (产品评价内部包含了 AI 工具)
      if (initialTab === 'ai_reviews') initialTab = 'reviews';
      // 🆕 fix11-hotfix4: report 已废弃 → 重定向到 cross_dept (跨部门协作取代了汇报工单)
      if (initialTab === 'report') initialTab = 'cross_dept';
      if (initialTab) return initialTab;
      // 财务人员默认进入财务 tab（user 可能为 null - 未登录状态）
      if (user && user.role === 'finance') return 'freight_calc'; // 财务计算器/运费支付已迁出,财务默认进运费精算器
      if (user && user.role === 'hr') return 'admin_overview'; // 🆕 fix113: 人事默认进绩效总览
      return 'cs';
    }),
    _useState34 = _slicedToArray(_useState33, 2),
    activeTab = _useState34[0],
    setActiveTab = _useState34[1];
  // tab 切换时写入 localStorage + URL hash
  useEffect(function () {
    localStorage.setItem('ws_active_tab', activeTab);
    // 仅当 tab 不是默认才写 hash，避免普通用户看到难看的 hash
    if (activeTab !== 'cs') {
      window.history.replaceState(null, '', "#tab=".concat(activeTab));
    } else if (window.location.hash.includes('tab=')) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [activeTab]);

  // 🆕 fix145: 跳转并聚焦某条记录 —— setActiveTab + 把目标 id 存进 navFocus,目标页用 useEffect+useRef 自动打开。
  //            id 为空 = 只切 tab(「查看全部」类按钮),不聚焦。
  var _useState35 = useState(null),
    _useState36 = _slicedToArray(_useState35, 2),
    navFocus = _useState36[0],
    setNavFocus = _useState36[1]; // { tab, id, sub, t } | null
  var goFocus = useCallback(function (tab, id, sub) {
    if (!tab) return;
    setActiveTab(tab);
    setNavFocus(id ? {
      tab: tab,
      id: id,
      sub: sub || null,
      t: Date.now()
    } : null);
  }, []);
  var focusFor = function focusFor(tab) {
    return navFocus && navFocus.tab === tab ? navFocus.id : null;
  };

  // 🆕 fix11: 监听 URL hash 变化 (浏览器 back/forward + 右键新窗口都会触发) → 同步 activeTab
  useEffect(function () {
    var onHashChange = function onHashChange() {
      var m = window.location.hash.match(/tab=([a-z_]+)/);
      if (m && m[1] !== activeTab) setActiveTab(m[1]);
    };
    window.addEventListener('hashchange', onHashChange);
    return function () {
      return window.removeEventListener('hashchange', onHashChange);
    };
  }, [activeTab]);

  // 跟踪访问过的 iframe tab —— 让 iframe 保持挂载，避免切 tab 时丢数据
  var _useState37 = useState(function () {
      var s = new Set();
      // 如果初始 tab 是 iframe 类，也算访问过
      if (['quote', 'kb', 'ai_reviews'].includes(activeTab)) s.add(activeTab);
      return s;
    }),
    _useState38 = _slicedToArray(_useState37, 2),
    visitedTabs = _useState38[0],
    setVisitedTabs = _useState38[1];
  useEffect(function () {
    if (['quote', 'kb', 'ai_reviews'].includes(activeTab) && !visitedTabs.has(activeTab)) {
      setVisitedTabs(function (prev) {
        return new Set([].concat(_toConsumableArray(prev), [activeTab]));
      });
    }
  }, [activeTab]);

  // Toast
  var _useToast = useToast(),
    _useToast2 = _slicedToArray(_useToast, 2),
    toast = _useToast2[0],
    toastNode = _useToast2[1];

  // 🆕 fix7: 全局申请主管协助 helper — 任何编辑器都可调用 window.__requestSupervisorAssistance(...)
  // 避免给每个 editor 都加 employees / cloudOn / toast props
  useEffect(function () {
    window.__requestSupervisorAssistance = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
      var _ref23,
        entityType,
        entityId,
        entityTitle,
        level,
        autoLevel,
        reason,
        targetRole,
        candidates,
        allCandidates,
        target,
        targetLabel,
        ticket,
        _yield$CLOUD$client$f3,
        error,
        _args13 = arguments,
        _t22;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            _ref23 = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : {}, entityType = _ref23.entityType, entityId = _ref23.entityId, entityTitle = _ref23.entityTitle, level = _ref23.level;
            if (user) {
              _context13.n = 1;
              break;
            }
            alert('请先登录');
            return _context13.a(2);
          case 1:
            // 默认根据角色判断升级目标:staff/finance → admin,admin → super_admin,super_admin 已在顶
            autoLevel = level || (user.role === 'admin' ? 'boss' : 'admin');
            if (!(user.role === 'super_admin')) {
              _context13.n = 2;
              break;
            }
            alert('你已是最高级别(老板),无需升级');
            return _context13.a(2);
          case 2:
            _context13.n = 3;
            return wsPrompt("\uD83D\uDCBC \u7533\u8BF7".concat(autoLevel === 'boss' ? '老板' : '主管', "\u534F\u52A9\n\n\u8BF7\u586B\u5199\u9700\u8981\u5904\u7406\u7684\u539F\u56E0 (\u5C06\u521B\u5EFA\u5DE5\u5355):"), '');
          case 3:
            reason = _context13.v;
            if (!(reason === null)) {
              _context13.n = 4;
              break;
            }
            return _context13.a(2);
          case 4:
            if (reason.trim()) {
              _context13.n = 5;
              break;
            }
            alert('请填写原因');
            return _context13.a(2);
          case 5:
            targetRole = autoLevel === 'boss' ? 'super_admin' : 'admin';
            candidates = (employees || []).filter(function (e) {
              return e.role === targetRole && !e.hideFromList;
            });
            allCandidates = candidates.length > 0 ? candidates : (employees || []).filter(function (e) {
              return e.role === targetRole;
            });
            if (!(allCandidates.length === 0)) {
              _context13.n = 6;
              break;
            }
            alert("\u6CA1\u6709\u627E\u5230".concat(autoLevel === 'boss' ? '老板' : '主管', "\u8D26\u53F7"));
            return _context13.a(2);
          case 6:
            target = allCandidates[0];
            targetLabel = autoLevel === 'boss' ? '老板' : '主管';
            ticket = {
              id: uid(),
              title: "\uD83D\uDEA8 ".concat(entityType || '工单', "\u7533\u8BF7").concat(targetLabel, "\u534F\u52A9 \xB7 ").concat(entityTitle || '(无标题)'),
              content: "\u7C7B\u578B: ".concat(entityType || '?', "\nID: ").concat(entityId || '?', "\n\u6765\u6E90: ").concat(user.name).concat(user.alias ? ' ' + user.alias : '', "\n\u5347\u7EA7\u5230: ").concat(targetLabel, "\n\n\u3010\u539F\u56E0\u3011\n").concat(reason.trim()),
              priority: 'high',
              department: 'service',
              from_id: user.id,
              from_name: user.name + (user.alias ? ' ' + user.alias : ''),
              target_id: target.id,
              target_name: target.name + (target.alias ? ' ' + target.alias : ''),
              status: 'pending',
              entity_type: entityType || null,
              entity_id: entityId || null,
              record_ref: entityId || null,
              created_at: nowISO(),
              updated_at: nowISO()
            };
            _context13.p = 7;
            if (!(cloudOn && CLOUD.client)) {
              _context13.n = 10;
              break;
            }
            _context13.n = 8;
            return CLOUD.client.from('workspace_tickets').upsert(ticket);
          case 8:
            _yield$CLOUD$client$f3 = _context13.v;
            error = _yield$CLOUD$client$f3.error;
            if (!error) {
              _context13.n = 9;
              break;
            }
            throw error;
          case 9:
            _context13.n = 11;
            break;
          case 10:
            STORE.set('tickets_local', [ticket].concat(_toConsumableArray(STORE.get('tickets_local', []))));
          case 11:
            toast("\u2713 \u5DF2\u7533\u8BF7".concat(targetLabel, " ").concat(target.name, " \u534F\u52A9"));
            _context13.n = 13;
            break;
          case 12:
            _context13.p = 12;
            _t22 = _context13.v;
            alert("\u274C \u7533\u8BF7\u5931\u8D25: ".concat(_t22.message, "\n\n\u5EFA\u8BAE:\u5DE5\u5355\u53EF\u80FD\u672A\u5728\u4E91\u7AEF\u521B\u5EFA,\u4F46\u672C\u5730\u5DF2\u8BB0\u5F55"));
            STORE.set('tickets_local', [ticket].concat(_toConsumableArray(STORE.get('tickets_local', []))));
          case 13:
            return _context13.a(2);
        }
      }, _callee13, null, [[7, 12]]);
    }));
    return function () {
      delete window.__requestSupervisorAssistance;
    };
  }, [user, employees, cloudOn, toast]);

  // 🆕 fix9: 退款处理人员配置 (Miya / Nicole / Yulia 三人默认 — 主管可在设置改)
  // 业务场景: 所有客服可记录退款,但"批准/完成/上传截图"由名单中的人执行
  // 默认值:从 INITIAL_EMPLOYEES 推断 (u_miya/u_nicole/u_yulia),云端有配置时优先用云端
  var _useState39 = useState(function () {
      return STORE.get('refund_processors_cache', ['u_miya', 'u_nicole', 'u_yulia']);
    }),
    _useState40 = _slicedToArray(_useState39, 2),
    refundProcessors = _useState40[0],
    setRefundProcessors = _useState40[1];
  useEffect(function () {
    if (!cloudOn || !CLOUD.client) return;
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
      var _data$value2, _yield$CLOUD$client$f4, data, ids, _t23;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            _context14.p = 0;
            _context14.n = 1;
            return CLOUD.client.from('system_settings').select('*').eq('key', 'refund_processors').single();
          case 1:
            _yield$CLOUD$client$f4 = _context14.v;
            data = _yield$CLOUD$client$f4.data;
            ids = data === null || data === void 0 || (_data$value2 = data.value) === null || _data$value2 === void 0 ? void 0 : _data$value2.user_ids;
            if (Array.isArray(ids) && ids.length > 0) {
              setRefundProcessors(ids);
              STORE.set('refund_processors_cache', ids);
            }
            _context14.n = 3;
            break;
          case 2:
            _context14.p = 2;
            _t23 = _context14.v;
          case 3:
            return _context14.a(2);
        }
      }, _callee14, null, [[0, 2]]);
    }))();
  }, [cloudOn]);

  // 🆕 提供全局可调用的权限检查 (避免 prop drilling)
  useEffect(function () {
    window.__canProcessRefund = function (u) {
      var target = u || user;
      if (!target) return false;
      if (target.role === 'super_admin') return true; // 老板永远可处理
      return refundProcessors.includes(target.id);
    };
    window.__refundProcessors = refundProcessors;
    window.__setRefundProcessors = /*#__PURE__*/function () {
      var _ref25 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(newIds, currentUserName) {
        var userNames, _yield$CLOUD$client$f5, error, _t24;
        return _regenerator().w(function (_context15) {
          while (1) switch (_context15.p = _context15.n) {
            case 0:
              if (!(!cloudOn || !CLOUD.client)) {
                _context15.n = 1;
                break;
              }
              alert('云端未连接,无法保存');
              return _context15.a(2, false);
            case 1:
              _context15.p = 1;
              userNames = newIds.map(function (id) {
                var e = (employees || []).find(function (em) {
                  return em.id === id;
                });
                return e ? e.name + (e.alias ? ' ' + e.alias : '') : id;
              });
              _context15.n = 2;
              return CLOUD.client.from('system_settings').upsert({
                key: 'refund_processors',
                value: {
                  user_ids: newIds,
                  user_names: userNames
                },
                updated_at: new Date().toISOString(),
                updated_by_name: currentUserName || (user === null || user === void 0 ? void 0 : user.name) || 'unknown'
              });
            case 2:
              _yield$CLOUD$client$f5 = _context15.v;
              error = _yield$CLOUD$client$f5.error;
              if (!error) {
                _context15.n = 3;
                break;
              }
              throw error;
            case 3:
              setRefundProcessors(newIds);
              STORE.set('refund_processors_cache', newIds);
              return _context15.a(2, true);
            case 4:
              _context15.p = 4;
              _t24 = _context15.v;
              alert('保存退款处理人配置失败: ' + (_t24.message || _t24));
              return _context15.a(2, false);
          }
        }, _callee15, null, [[1, 4]]);
      }));
      return function (_x6, _x7) {
        return _ref25.apply(this, arguments);
      };
    }();
    return function () {
      delete window.__canProcessRefund;
      delete window.__refundProcessors;
      delete window.__setRefundProcessors;
    };
  }, [refundProcessors, user, employees, cloudOn]);

  // ══════════════════════════════════════════════════════════════
  // 📨 fix9c: 跨部门协作消息 — 美工/客服/跟单 三系统共用消息总线
  // ══════════════════════════════════════════════════════════════
  var _useState41 = useState([]),
    _useState42 = _slicedToArray(_useState41, 2),
    cdmMessages = _useState42[0],
    setCdmMessages = _useState42[1];
  var _useState43 = useState(false),
    _useState44 = _slicedToArray(_useState43, 2),
    cdmLoading = _useState44[0],
    setCdmLoading = _useState44[1];
  var cdmLoadingRef = useRef(false);
  // 🆕 fix140: 最大 created_at_ms 水位,realtime 兜底增量补拉用(只取新于水位的行)
  var cdmMaxCreatedRef = useRef(0);
  var cdmCatchupTimer = useRef(null);
  // 🆕 v22-CV/CW: 店铺-负责人映射 + 超时阈值配置 (三方共享)
  var _useState45 = useState([]),
    _useState46 = _slicedToArray(_useState45, 2),
    shopOwners = _useState46[0],
    setShopOwners = _useState46[1];
  var _useState47 = useState({}),
    _useState48 = _slicedToArray(_useState47, 2),
    cdmTimeoutConfig = _useState48[0],
    setCdmTimeoutConfig = _useState48[1];

  // 🆕 fix140: 列表轻量列(不含 attachments/thread 巨型 base64)— 初拉与增量补拉共用
  var CDM_LIST_COLS = 'id,from_system,from_user_id,from_user_name,to_system,to_user_id,to_user_name,category,priority,title,body,related_ref,related_type,related_shop,assigned_to_id,assigned_to_name,assigned_by_id,assigned_by_name,assigned_at_ms,watchers,status,read_by,created_at_ms,updated_at';
  // 列表态永远不留大列(详情按需取,详情态在各 Modal 局部 state 里)
  var cdmLight = function cdmLight(m) {
    return _objectSpread(_objectSpread({}, m), {}, {
      attachments: [],
      thread: []
    });
  };
  var cdmBumpWatermark = function cdmBumpWatermark(rows) {
    var mx = cdmMaxCreatedRef.current;
    (rows || []).forEach(function (r) {
      var v = +(r.created_at_ms || 0);
      if (v > mx) mx = v;
    });
    cdmMaxCreatedRef.current = mx;
  };
  var loadCdmMessages = /*#__PURE__*/function () {
    var _ref26 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
      var client, cutoffMs, _yield$client$from$se, data, error, fb, _t25;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.p = _context16.n) {
          case 0:
            if (!cdmLoadingRef.current) {
              _context16.n = 1;
              break;
            }
            return _context16.a(2);
          case 1:
            // 防止重复请求
            client = getCdmClient();
            if (client) {
              _context16.n = 2;
              break;
            }
            return _context16.a(2);
          case 2:
            cdmLoadingRef.current = true;
            setCdmLoading(true);
            _context16.p = 3;
            // 拉最近 90 天 500 条 · 🆕 fix136: 列表只取轻量列(不含 attachments/thread 巨型 base64),详情再按需取
            cutoffMs = Date.now() - 90 * 24 * 3600 * 1000;
            _context16.n = 4;
            return client.from('cross_dept_messages').select(CDM_LIST_COLS).gte('created_at_ms', cutoffMs).order('created_at_ms', {
              ascending: false
            }).limit(500);
          case 4:
            _yield$client$from$se = _context16.v;
            data = _yield$client$from$se.data;
            error = _yield$client$from$se.error;
            if (!error) {
              _context16.n = 6;
              break;
            }
            console.warn('[CDM] 轻量列查询失败,回退 select(*):', error.message || error);
            _context16.n = 5;
            return client.from('cross_dept_messages').select('*').gte('created_at_ms', cutoffMs).order('created_at_ms', {
              ascending: false
            }).limit(500);
          case 5:
            fb = _context16.v;
            data = fb.data;
            error = fb.error;
          case 6:
            if (!error) {
              _context16.n = 7;
              break;
            }
            throw error;
          case 7:
            cdmBumpWatermark(data); // 🆕 fix140
            // 🆕 fix137: 列表项补 attachments/thread 空数组(轻量列不含它们),避免消费方读 .length/.filter 报错导致整页崩
            setCdmMessages((data || []).filter(function (m) {
              return !m.deleted;
            }).map(function (m) {
              return _objectSpread(_objectSpread({}, m), {}, {
                attachments: Array.isArray(m.attachments) ? m.attachments : [],
                thread: Array.isArray(m.thread) ? m.thread : []
              });
            })); // 🆕 过滤已删除
            _context16.n = 9;
            break;
          case 8:
            _context16.p = 8;
            _t25 = _context16.v;
            console.warn('[CDM] 加载消息失败', _t25);
          case 9:
            cdmLoadingRef.current = false;
            setCdmLoading(false);
          case 10:
            return _context16.a(2);
        }
      }, _callee16, null, [[3, 8]]);
    }));
    return function loadCdmMessages() {
      return _ref26.apply(this, arguments);
    };
  }();

  // 🆕 fix140: realtime 兜底 — payload 不完整时,按时间水位只增量补拉新行(正常返回 0 行,极轻)
  var cdmIncrementalFetch = /*#__PURE__*/function () {
    var _ref27 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17() {
      var client, since, _yield$client$from$se2, data, error, _t26;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.p = _context17.n) {
          case 0:
            client = getCdmClient();
            if (client) {
              _context17.n = 1;
              break;
            }
            return _context17.a(2);
          case 1:
            since = cdmMaxCreatedRef.current;
            if (since) {
              _context17.n = 2;
              break;
            }
            return _context17.a(2, loadCdmMessages());
          case 2:
            _context17.p = 2;
            _context17.n = 3;
            return client.from('cross_dept_messages').select(CDM_LIST_COLS).gt('created_at_ms', since).order('created_at_ms', {
              ascending: false
            }).limit(200);
          case 3:
            _yield$client$from$se2 = _context17.v;
            data = _yield$client$from$se2.data;
            error = _yield$client$from$se2.error;
            if (!(error || !data || !data.length)) {
              _context17.n = 4;
              break;
            }
            return _context17.a(2);
          case 4:
            cdmBumpWatermark(data);
            setCdmMessages(function (prev) {
              var ids = new Set(prev.map(function (m) {
                return m.id;
              }));
              var fresh = data.filter(function (m) {
                return !ids.has(m.id) && !m.deleted;
              }).map(cdmLight); // 🆕 过滤已删除
              return fresh.length ? [].concat(_toConsumableArray(fresh), _toConsumableArray(prev)) : prev;
            });
            _context17.n = 6;
            break;
          case 5:
            _context17.p = 5;
            _t26 = _context17.v;
          case 6:
            return _context17.a(2);
        }
      }, _callee17, null, [[2, 5]]);
    }));
    return function cdmIncrementalFetch() {
      return _ref27.apply(this, arguments);
    };
  }();
  var scheduleCdmCatchup = function scheduleCdmCatchup() {
    clearTimeout(cdmCatchupTimer.current);
    cdmCatchupTimer.current = setTimeout(function () {
      return cdmIncrementalFetch();
    }, 1500); // 防抖 1.5s,合并突发
  };

  // 🆕 v22-CV/CW: 加载 shop_owners 和 cdm_timeout_config
  var loadShopOwners = /*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
      var client, _yield$client$from$se3, data, error, _t27;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            client = getCdmClient();
            if (client) {
              _context18.n = 1;
              break;
            }
            return _context18.a(2);
          case 1:
            _context18.p = 1;
            _context18.n = 2;
            return client.from('shop_owners').select('*').order('shop_name');
          case 2:
            _yield$client$from$se3 = _context18.v;
            data = _yield$client$from$se3.data;
            error = _yield$client$from$se3.error;
            if (!error) {
              _context18.n = 3;
              break;
            }
            throw error;
          case 3:
            setShopOwners((data || []).map(function (r) {
              return {
                id: r.id,
                shopName: r.shop_name,
                system: r.system,
                userId: r.user_id,
                userName: r.user_name,
                role: r.role || 'primary',
                notes: r.notes || null,
                createdAtMs: r.created_at_ms
              };
            }));
            _context18.n = 5;
            break;
          case 4:
            _context18.p = 4;
            _t27 = _context18.v;
            console.warn('[CDM] 加载 shop_owners 失败', _t27);
          case 5:
            return _context18.a(2);
        }
      }, _callee18, null, [[1, 4]]);
    }));
    return function loadShopOwners() {
      return _ref28.apply(this, arguments);
    };
  }();
  var loadCdmTimeoutConfig = /*#__PURE__*/function () {
    var _ref29 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19() {
      var client, _yield$client$from$se4, data, error, _t28;
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.p = _context19.n) {
          case 0:
            client = getCdmClient();
            if (client) {
              _context19.n = 1;
              break;
            }
            return _context19.a(2);
          case 1:
            _context19.p = 1;
            _context19.n = 2;
            return client.from('app_config').select('value').eq('key', 'cdm_timeout_config').maybeSingle();
          case 2:
            _yield$client$from$se4 = _context19.v;
            data = _yield$client$from$se4.data;
            error = _yield$client$from$se4.error;
            if (!error) {
              _context19.n = 3;
              break;
            }
            throw error;
          case 3:
            setCdmTimeoutConfig((data === null || data === void 0 ? void 0 : data.value) || {});
            _context19.n = 5;
            break;
          case 4:
            _context19.p = 4;
            _t28 = _context19.v;
            console.warn('[CDM] 加载 cdm_timeout_config 失败', _t28);
          case 5:
            return _context19.a(2);
        }
      }, _callee19, null, [[1, 4]]);
    }));
    return function loadCdmTimeoutConfig() {
      return _ref29.apply(this, arguments);
    };
  }();
  useEffect(function () {
    if (!user) return;
    loadCdmMessages();
    loadShopOwners();
    loadCdmTimeoutConfig();
  }, [user === null || user === void 0 ? void 0 : user.id]);

  // 🆕 v22-CV/CW: shop_owners + app_config Realtime 订阅
  useEffect(function () {
    if (!user) return;
    var client = getCdmClient();
    if (!client) return;
    var channel;
    try {
      channel = client.channel('cdm_v22cw_cs_' + user.id).on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'shop_owners'
      }, function () {
        loadShopOwners();
      }).on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'app_config'
      }, function (payload) {
        var _payload$new;
        if ((payload === null || payload === void 0 || (_payload$new = payload["new"]) === null || _payload$new === void 0 ? void 0 : _payload$new.key) === 'cdm_timeout_config') {
          setCdmTimeoutConfig(payload["new"].value || {});
        }
      }).subscribe();
    } catch (e) {
      console.warn('[CDM v22-CW] Realtime 订阅失败', e);
    }
    return function () {
      try {
        if (channel) client.removeChannel(channel);
      } catch (_unused2) {}
    };
  }, [user === null || user === void 0 ? void 0 : user.id]);

  // Realtime 订阅 — 🆕 fix140: 不再每条变更全表重拉 500 行(29 人团队 read_by/回复高频触发 = IO 第一杀手),
  // 改为用 payload 增量 patch 内存列表(剥离大列);payload 不完整时才防抖增量补拉。桌面通知逻辑保留。
  useEffect(function () {
    if (!user) return;
    var client = getCdmClient();
    if (!client) return;
    var channelName = 'cdm_realtime_cs_' + user.id;
    var channel;
    try {
      channel = client.channel(channelName).on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'cross_dept_messages'
      }, function (payload) {
        var ev = payload === null || payload === void 0 ? void 0 : payload.eventType;
        if (ev === 'INSERT' && payload["new"]) {
          var row = cdmLight(payload["new"]);
          cdmBumpWatermark([payload["new"]]);
          setCdmMessages(function (prev) {
            return prev.some(function (m) {
              return m.id === row.id;
            }) ? prev : [row].concat(_toConsumableArray(prev));
          });
          // 新消息且发给客服部 → 桌面通知
          if (payload["new"].to_system === 'cs' && payload["new"].from_user_id !== user.id) {
            if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
              try {
                var cat = findCdm(CDM_CATEGORIES, payload["new"].category);
                new Notification("\uD83D\uDCE8 ".concat(cat.label), {
                  body: payload["new"].title + ' — ' + (payload["new"].from_user_name || '?'),
                  tag: 'cdm-' + payload["new"].id
                });
              } catch (_unused3) {}
            }
          }
        } else if (ev === 'UPDATE' && payload["new"]) {
          var _row = cdmLight(payload["new"]); // 仅合并轻量字段(状态/read_by/指派等),大列恒为 []
          setCdmMessages(function (prev) {
            var hit = false;
            var next = prev.map(function (m) {
              if (m.id === _row.id) {
                hit = true;
                return _objectSpread(_objectSpread({}, m), _row);
              }
              return m;
            });
            return hit ? next : prev; // 不在当前窗口的更新 → 忽略(兜底补拉会捞新行)
          });
        } else if (ev === 'DELETE' && payload.old) {
          setCdmMessages(function (prev) {
            return prev.filter(function (m) {
              return m.id !== payload.old.id;
            });
          });
        } else {
          scheduleCdmCatchup(); // payload 不完整 → 防抖增量补拉
        }
      }).subscribe();
    } catch (e) {
      console.warn('[CDM] Realtime 订阅失败', e);
    }
    return function () {
      try {
        if (channel) client.removeChannel(channel);
      } catch (_unused4) {}
    };
  }, [user === null || user === void 0 ? void 0 : user.id]);

  // 计算未读数(给顶部铃铛用) — 收件箱里 to_system=cs 且 user 不在 read_by 里
  var cdmUnreadCount = useMemo(function () {
    if (!user) return 0;
    return cdmMessages.filter(function (m) {
      return m.to_system === 'cs' && m.from_user_id !== user.id && !(m.read_by || []).includes(user.id);
    }).length;
  }, [cdmMessages, user === null || user === void 0 ? void 0 : user.id]);
  var cdmUrgentUnread = useMemo(function () {
    if (!user) return 0;
    return cdmMessages.filter(function (m) {
      return m.to_system === 'cs' && m.priority === 'urgent' && m.status !== 'done' && m.status !== 'cancelled' && !(m.read_by || []).includes(user.id);
    }).length;
  }, [cdmMessages, user === null || user === void 0 ? void 0 : user.id]);

  // ══════════════════════════════════════════════════════════════
  // 🆕 fix10: 导航布局自定义 — IDE 风格(顶部常用 + 左侧不常用)
  // 每个用户独立保存,localStorage 键 nav_layout_${user.id}
  // ══════════════════════════════════════════════════════════════
  // 主管账号默认顶部第 1 位放 📊 数据看板,然后业务模块
  // 普通客服默认不显示 dashboard 在顶部(只在侧栏可点)
  var isAdmin = (user === null || user === void 0 ? void 0 : user.role) === 'admin' || (user === null || user === void 0 ? void 0 : user.role) === 'super_admin';
  var DEFAULT_TOP_KEYS = isAdmin ? ['dashboard', 'cs', 'chargebacks', 'offline_orders', 'custom_photo', 'events'] : ['cs', 'chargebacks', 'offline_orders', 'custom_photo', 'events', 'reviews'];
  var _useState49 = useState({
      topKeys: DEFAULT_TOP_KEYS,
      sidebarOrder: [],
      sidebarCollapsed: false
    }),
    _useState50 = _slicedToArray(_useState49, 2),
    layoutPrefs = _useState50[0],
    setLayoutPrefs = _useState50[1];
  // 登录或切换账号时重新加载该用户的布局
  useEffect(function () {
    if (!user) return;
    var saved = STORE.get("nav_layout_".concat(user.id), null);
    if (saved && Array.isArray(saved.topKeys)) {
      setLayoutPrefs({
        topKeys: saved.topKeys,
        sidebarOrder: Array.isArray(saved.sidebarOrder) ? saved.sidebarOrder : [],
        // 🆕 fix28
        sidebarCollapsed: !!saved.sidebarCollapsed
      });
    } else {
      setLayoutPrefs({
        topKeys: DEFAULT_TOP_KEYS,
        sidebarOrder: [],
        sidebarCollapsed: false
      });
    }
  }, [user === null || user === void 0 ? void 0 : user.id]);
  // 保存
  useEffect(function () {
    if (!user) return;
    STORE.set("nav_layout_".concat(user.id), layoutPrefs);
  }, [layoutPrefs, user === null || user === void 0 ? void 0 : user.id]);
  var _useState51 = useState(false),
    _useState52 = _slicedToArray(_useState51, 2),
    customizeOpen = _useState52[0],
    setCustomizeOpen = _useState52[1];

  // 计算完整 tabs 列表 — 单一数据源,TopNav 和 Sidebar 都从这里拿
  // 🆕 fix11-hotfix1: stats 在函数体后面才定义 → 用 ?. 防御性访问,首渲染时 stats 是 undefined 不崩
  var allTabs = useMemo(function () {
    if (!user) return [];
    var isAdmin = user.role === 'admin' || user.role === 'super_admin';
    var isFinanceVisible = user.role === 'finance' || isAdmin;
    var tabs = [
    // 主功能
    {
      key: 'cs',
      label: '📞 客服跟进',
      icon: '📞',
      badge: stats === null || stats === void 0 ? void 0 : stats.overdue,
      group: 'main'
    }, {
      key: 'chargebacks',
      label: '🚨 拒付',
      icon: '🚨',
      badge: stats === null || stats === void 0 ? void 0 : stats.urgentChargebacks,
      badgeColor: '#dc2626',
      group: 'main'
    }, {
      key: 'offline_orders',
      label: '💳 线下单',
      icon: '💳',
      group: 'main'
    }, {
      key: 'custom_photo',
      label: '🎨 定制&实拍',
      icon: '🎨',
      group: 'main'
    }, {
      key: 'events',
      label: '📋 工作主线',
      icon: '📋',
      badge: stats === null || stats === void 0 ? void 0 : stats.pendingEvents,
      group: 'main'
    }, {
      key: 'reviews',
      label: '⭐ 产品评价',
      icon: '⭐',
      badge: stats === null || stats === void 0 ? void 0 : stats.pendingReviews,
      group: 'main'
    },
    // 资源工具
    {
      key: 'suppliers',
      label: '🏭 供应商',
      icon: '🏭',
      group: 'resources'
    }, {
      key: 'kb',
      label: '📚 知识库',
      icon: '📚',
      group: 'resources'
    }, {
      key: 'email_templates',
      label: '📧 邮件模板',
      icon: '📧',
      group: 'resources'
    }, {
      key: 'quote',
      label: '📝 报价单',
      icon: '📝',
      group: 'resources'
    }, {
      key: 'help',
      label: '📖 使用手册',
      icon: '📖',
      group: 'resources'
    },
    // 🆕 fix13: 帮助中心
    {
      key: 'feedback',
      label: '🐛 反馈中心',
      icon: '🐛',
      group: 'resources'
    },
    // 🆕 fix14: bug 反馈
    // 🆕 fix11-hotfix2: ai_reviews 不再作为独立 tab — 已合并进 ⭐ 产品评价 内部
    {
      key: 'freight_calc',
      label: '🚚 运费精算器',
      icon: '🚚',
      group: 'resources'
    }, {
      key: 'kpi_scorer',
      label: '📋 绩效考核',
      icon: '📋',
      group: 'resources'
    }, {
      key: 'express_invoice',
      label: '📦 快递发票',
      icon: '📦',
      group: 'resources'
    }, {
      key: 'inventory',
      label: '📦 库存查询',
      icon: '📦',
      group: 'resources'
    },
    // 协作
    {
      key: 'tasks',
      label: '📌 任务分派',
      icon: '📌',
      group: 'collab'
    },
    // 🆕 fix19
    {
      key: 'cross_dept',
      label: '📨 跨部门协作',
      icon: '📨',
      badge: cdmUnreadCount,
      badgeColor: cdmUrgentUnread > 0 ? '#dc2626' : '#0071e3',
      group: 'collab'
    }, {
      key: 'influencers',
      label: '✨ 影响者合作',
      icon: '✨',
      group: 'collab'
    }, {
      key: 'workflows',
      label: '📋 工作流/SOP',
      icon: '📋',
      group: 'resources'
    }, {
      key: 'photo_requests',
      label: '📷 拍摄需求',
      icon: '📷',
      group: 'collab'
    },
    // 🆕 fix49
    {
      key: 'briefings',
      label: '📢 会议纪要',
      icon: '📢',
      group: 'collab'
    }].concat(_toConsumableArray(isAdmin ? [{
      key: 'admin_overview',
      label: '📊 主管汇总',
      icon: '📊',
      group: 'admin'
    }, {
      key: 'dashboard',
      label: '📈 数据看板',
      icon: '📈',
      group: 'admin'
    }, {
      key: 'delete_approvals',
      label: '🛡 删除审批',
      icon: '🛡',
      badge: stats === null || stats === void 0 ? void 0 : stats.pendingDeleteReqs,
      badgeColor: '#dc2626',
      group: 'admin'
    }, {
      key: 'trash',
      label: '🗑 回收站',
      icon: '🗑',
      badge: stats === null || stats === void 0 ? void 0 : stats.trashCount,
      badgeColor: '#86868b',
      group: 'admin'
    }, {
      key: 'admin',
      label: '⚙ 设置',
      icon: '⚙',
      group: 'admin'
    }] : (user === null || user === void 0 ? void 0 : user.role) === 'hr' ? [{
      key: 'admin_overview',
      label: '📊 绩效总览',
      icon: '📊',
      group: 'admin'
    }, {
      key: 'dashboard',
      label: '📈 数据看板',
      icon: '📈',
      group: 'admin'
    }] : [{
      key: 'dashboard',
      label: '📈 数据看板',
      icon: '📈',
      group: 'admin'
    }, {
      key: 'trash',
      label: '🗑 回收站',
      icon: '🗑',
      badge: stats === null || stats === void 0 ? void 0 : stats.trashCount,
      badgeColor: '#86868b',
      group: 'admin'
    }]));
    // 🆕 fix113: 人事(HR)只读聚焦视图 — 仅绩效总览 / 绩效考核 / 数据看板,不参与日常操作
    if (user && user.role === 'hr') {
      var hrAllow = ['admin_overview', 'kpi_scorer', 'dashboard'];
      return tabs.filter(function (t) {
        return hrAllow.includes(t.key);
      });
    }
    return tabs;
  }, [user === null || user === void 0 ? void 0 : user.id, user === null || user === void 0 ? void 0 : user.role, stats, cdmUnreadCount, cdmUrgentUnread]);

  // 拆成顶部 vs 侧边栏
  var topTabs = useMemo(function () {
    if (!allTabs.length) return [];
    // 按 layoutPrefs.topKeys 的顺序排列
    return layoutPrefs.topKeys.map(function (k) {
      return allTabs.find(function (t) {
        return t.key === k;
      });
    }).filter(Boolean);
  }, [allTabs, layoutPrefs.topKeys]);
  var sidebarTabs = useMemo(function () {
    if (!allTabs.length) return [];
    var nonPinned = allTabs.filter(function (t) {
      return !layoutPrefs.topKeys.includes(t.key);
    });
    // 🆕 fix28: 按用户自定义 sidebarOrder 排序;没在 order 里的项保持 allTabs 原顺序
    var order = layoutPrefs.sidebarOrder || [];
    if (order.length === 0) return nonPinned;
    var orderMap = new Map(order.map(function (k, i) {
      return [k, i];
    }));
    return _toConsumableArray(nonPinned).sort(function (a, b) {
      var ia = orderMap.has(a.key) ? orderMap.get(a.key) : 99999;
      var ib = orderMap.has(b.key) ? orderMap.get(b.key) : 99999;
      return ia - ib;
    });
  }, [allTabs, layoutPrefs.topKeys, layoutPrefs.sidebarOrder]);

  // 通知权限
  var _useState53 = useState(function () {
      if (typeof Notification === 'undefined') return 'unsupported';
      return Notification.permission;
    }),
    _useState54 = _slicedToArray(_useState53, 2),
    notifPerm = _useState54[0],
    setNotifPerm = _useState54[1];
  var requestNotifPerm = function requestNotifPerm() {
    if (typeof Notification === 'undefined') {
      toast('⚠️ 当前浏览器不支持桌面通知');
      return;
    }
    if (Notification.permission === 'denied') {
      toast('⚠️ 通知已被浏览器禁用，请在浏览器设置中开启');
      return;
    }
    Notification.requestPermission().then(function (p) {
      setNotifPerm(p);
      if (p === 'granted') {
        sendDesktopNotification('统一工作台', '✅ 桌面通知已开启', 'workspace-test');
        toast('✓ 桌面通知已开启');
      } else toast('已取消授权');
    });
  };

  // 登录
  var onLogin = function onLogin(emp) {
    setUser(emp);
    STORE.set('current_user', {
      id: emp.id
    });
    toast("\u2713 \u6B22\u8FCE\u56DE\u6765, ".concat(emp.name));
    // 登录后若用户尚未做选择，温和地引导一次（不强弹，由用户主动点）
  };

  // 🆕 fix45: 登录后注册"返回拦截器",防止误触浏览器返回退出工作台
  useEffect(function () {
    if (!user) return;
    // 登录后,history 加一个标记 entry,这样按返回会触发我们的 popstate handler
    if (!window.history.state || !window.history.state._wsGuard) {
      window.history.pushState({
        _wsGuard: true
      }, '', window.location.href);
    }
    var onPop = function onPop(e) {
      // 弹原生 confirm:留在工作台 OR 真的离开
      var stay = !confirm('确定要离开工作台?\n\n(账号仍是登录状态,下次打开会自动恢复)');
      if (stay) {
        // 用户选"取消" → 再 push 一个 entry 回来,留在原页
        window.history.pushState({
          _wsGuard: true
        }, '', window.location.href);
      }
      // 用户选"确定" → 不阻止,浏览器继续导航走
    };
    window.addEventListener('popstate', onPop);
    return function () {
      return window.removeEventListener('popstate', onPop);
    };
  }, [user]);
  var onLogout = /*#__PURE__*/function () {
    var _ref30 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20() {
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.n) {
          case 0:
            _context20.n = 1;
            return wsConfirm('确认退出登录？');
          case 1:
            if (_context20.v) {
              _context20.n = 2;
              break;
            }
            return _context20.a(2);
          case 2:
            setUser(null);
            STORE.del('current_user');
            STORE.del('impersonate_origin'); // 清除模拟身份
          case 3:
            return _context20.a(2);
        }
      }, _callee20);
    }));
    return function onLogout() {
      return _ref30.apply(this, arguments);
    };
  }();

  // 🆕 切换账号 - 主管/老板免密查看模式
  var switchAccount = /*#__PURE__*/function () {
    var _ref31 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(targetEmployee) {
      var isAdminViewer, ok, origin, _newUser, password, newUser;
      return _regenerator().w(function (_context21) {
        while (1) switch (_context21.n) {
          case 0:
            isAdminViewer = user && (user.role === 'admin' || user.role === 'super_admin'); // 主管/老板:无需密码,以查看模式切换
            if (!(isAdminViewer && targetEmployee.id !== user.id)) {
              _context21.n = 3;
              break;
            }
            _context21.n = 1;
            return wsConfirm("\uD83D\uDC41 \u4EE5 ".concat(targetEmployee.name).concat(targetEmployee.alias ? ' ' + targetEmployee.alias : '', " \u7684\u8EAB\u4EFD\u67E5\u770B\n\n") + "\u8FD9\u662F\u67E5\u770B\u6A21\u5F0F \u2014 \u4F60\u53EF\u4EE5\u770B\u5230\u8BE5\u5458\u5DE5\u7684\u6240\u6709\u6570\u636E,\u9876\u90E8\u4F1A\u663E\u793A\u660E\u663E\u6807\u8BC6,\u968F\u65F6\u53EF\u4E00\u952E\u5207\u56DE\u3002\n\n" + "\u7EE7\u7EED\u5417?");
          case 1:
            ok = _context21.v;
            if (ok) {
              _context21.n = 2;
              break;
            }
            return _context21.a(2);
          case 2:
            // 记录原始身份(切回用)
            origin = STORE.get('impersonate_origin', null);
            if (!origin) {
              STORE.set('impersonate_origin', {
                id: user.id,
                name: user.name,
                alias: user.alias,
                role: user.role
              });
            }
            _newUser = _objectSpread(_objectSpread({}, targetEmployee), {}, {
              _impersonating: true
            });
            setUser(_newUser);
            STORE.set('current_user', _newUser);
            toast("\uD83D\uDC41 \u5DF2\u5207\u6362\u5230 ".concat(_newUser.name, " \u89C6\u89D2 \xB7 \u9876\u90E8\u53EF\u4E00\u952E\u5207\u56DE"));
            return _context21.a(2);
          case 3:
            _context21.n = 4;
            return wsPrompt("\u5207\u6362\u5230 ".concat(targetEmployee.name).concat(targetEmployee.alias ? ' ' + targetEmployee.alias : '', " \u7684\u8D26\u53F7\n\n\u8BF7\u8F93\u5165\u8BE5\u8D26\u53F7\u7684\u5BC6\u7801\uFF1A"));
          case 4:
            password = _context21.v;
            if (!(password === null)) {
              _context21.n = 5;
              break;
            }
            return _context21.a(2);
          case 5:
            if (password) {
              _context21.n = 6;
              break;
            }
            alert('密码不能为空');
            return _context21.a(2);
          case 6:
            if (!(password !== targetEmployee.password)) {
              _context21.n = 7;
              break;
            }
            alert('❌ 密码错误');
            return _context21.a(2);
          case 7:
            newUser = _objectSpread({}, targetEmployee);
            setUser(newUser);
            STORE.set('current_user', newUser);
            STORE.del('impersonate_origin');
            toast("\u2713 \u5DF2\u5207\u6362\u5230 ".concat(newUser.name).concat(newUser.alias ? ' ' + newUser.alias : ''));
          case 8:
            return _context21.a(2);
        }
      }, _callee21);
    }));
    return function switchAccount(_x8) {
      return _ref31.apply(this, arguments);
    };
  }();

  // 🆕 切回原始身份
  var restoreOriginalUser = function restoreOriginalUser() {
    var origin = STORE.get('impersonate_origin', null);
    if (!origin) return;
    var original = INITIAL_EMPLOYEES.find(function (e) {
      return e.id === origin.id;
    }) || employees.find(function (e) {
      return e.id === origin.id;
    });
    if (!original) {
      alert('原账号找不到了,请重新登录');
      return;
    }
    setUser(original);
    STORE.set('current_user', original);
    STORE.del('impersonate_origin');
    toast("\u2713 \u5DF2\u5207\u56DE ".concat(original.name).concat(original.alias ? ' ' + original.alias : ''));
  };

  // 统计 badge
  var today = todayISO();
  var stats = useMemo(function () {
    if (!user) return {
      overdue: 0,
      dueToday: 0,
      trashCount: 0,
      ticketInbox: 0,
      pendingEvents: 0,
      pendingReviews: 0,
      urgentChargebacks: 0,
      pendingDeleteReqs: 0
    };
    var live = records.filter(function (r) {
      return !r.deleted;
    });
    var mine = user.role === 'admin' || user.role === 'super_admin' ? live : live.filter(function (r) {
      return r.ownerId === user.id;
    });
    var overdue = mine.filter(function (r) {
      return r.status !== 'resolved' && r.nextFollowUp && r.nextFollowUp < today;
    }).length;
    var dueToday = mine.filter(function (r) {
      return r.status !== 'resolved' && r.nextFollowUp === today;
    }).length;
    var trash = user.role === 'admin' || user.role === 'super_admin' ? records.filter(function (r) {
      return r.deleted && isRecordMeaningful(r);
    }).length : records.filter(function (r) {
      return r.deleted && (r.deletedBy === user.id || r.ownerId === user.id) && isRecordMeaningful(r);
    }).length;
    // 工单收件箱（本地缓存计数，准确数字在 ReportModule 内）
    var tickets = STORE.get('tickets_local', []);
    var ticketInbox = tickets.filter(function (t) {
      return t.target_id === user.id && (t.status === 'pending' || t.status === 'accepted');
    }).length;
    // 🆕 待处理事件徽章 (财务/admin 看待审退款，其他人看自己创建的所有未关闭事件)
    var isFinance = user.role === 'finance' || user.role === 'admin' || user.role === 'super_admin';
    var evCache = STORE.get('events_cache', {
      aftersales: [],
      refunds: [],
      refills: []
    });
    var pendingEvents = 0;
    if (isFinance) {
      pendingEvents = (evCache.refunds || []).filter(function (r) {
        return r.status === 'pending';
      }).length;
    }
    // 🆕 我的待领取 + 指派给我的评价任务
    var reviewsCache = STORE.get('reviews_cache', []);
    var pendingReviews = reviewsCache.filter(function (r) {
      return !r.deleted && r.status !== 'completed' && r.status !== 'cancelled' && (r.assigned_to === user.id || r.claimed_by === user.id);
    }).length;
    // 🆕 紧急拒付计数 (7 天内即将到期 + 已逾期)
    var cbCache = STORE.get('chargebacks_cache', []);
    var urgentChargebacks = cbCache.filter(function (c) {
      if (c.deleted) return false;
      if (c.status === 'won' || c.status === 'lost' || c.status === 'closed') return false;
      if (!c.deadline) return false;
      var d = daysUntil(c.deadline);
      return d !== null && d <= 7;
    }).length;
    // 🆕 待审批删除请求数 (主管 = approver_role='admin' 的; 老板 = 全部 pending)
    var drCache = STORE.get('delete_requests_cache', []);
    var isSuperAdmin = user.role === 'super_admin';
    var isAdminRole = user.role === 'admin' || user.role === 'super_admin';
    var pendingDeleteReqs = 0;
    if (isAdminRole) {
      pendingDeleteReqs = drCache.filter(function (r) {
        return r.status === 'pending' && (isSuperAdmin || r.approver_role === 'admin');
      }).length;
    }
    return {
      overdue: overdue,
      dueToday: dueToday,
      trashCount: trash,
      ticketInbox: ticketInbox,
      pendingEvents: pendingEvents,
      pendingReviews: pendingReviews,
      urgentChargebacks: urgentChargebacks,
      pendingDeleteReqs: pendingDeleteReqs
    };
  }, [records, user, today]);

  // 🆕 主管/老板:后台轮询删除审批数据(每 2 分钟,更新徽章)
  useEffect(function () {
    if (!user) return;
    var isAdminRole = user.role === 'admin' || user.role === 'super_admin';
    if (!isAdminRole) return;
    var fetchDR = /*#__PURE__*/function () {
      var _ref32 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22() {
        var data, _t29;
        return _regenerator().w(function (_context22) {
          while (1) switch (_context22.p = _context22.n) {
            case 0:
              _context22.p = 0;
              _context22.n = 1;
              return CLOUD.list('delete_requests', {
                order: {
                  col: 'requested_at',
                  asc: false
                },
                limit: 200
              });
            case 1:
              data = _context22.v;
              STORE.set('delete_requests_cache', data || []);
              _context22.n = 3;
              break;
            case 2:
              _context22.p = 2;
              _t29 = _context22.v;
            case 3:
              return _context22.a(2);
          }
        }, _callee22, null, [[0, 2]]);
      }));
      return function fetchDR() {
        return _ref32.apply(this, arguments);
      };
    }();
    fetchDR();
    var t = setInterval(fetchDR, 2 * 60 * 1000);
    return function () {
      return clearInterval(t);
    };
  }, [user]);

  // 🆕 全局禁用浏览器自动填充 - 除登录页外所有 input 都不允许 Chrome 自动填(账号密码/历史邮箱)
  useEffect(function () {
    if (!user) return; // 未登录时(LoginScreen)不处理,允许浏览器记住账号密码

    var disableAutofill = function disableAutofill() {
      // input / textarea / select 都处理
      document.querySelectorAll('input, textarea').forEach(function (el) {
        // 跳过显式标注允许自动填充的(data-keep-autofill 属性)
        if (el.dataset.keepAutofill !== undefined) return;
        // 跳过 LoginScreen 内的(以防万一)
        if (el.closest('[data-login-screen]')) return;
        // 设置为 new-password(Chrome 唯一会严格遵守的禁填值)
        if (el.getAttribute('autocomplete') !== 'new-password') {
          el.setAttribute('autocomplete', 'new-password');
        }
        // 还可加 spell-check 关闭
        if (!el.hasAttribute('spellcheck')) {
          el.setAttribute('spellcheck', 'false');
        }
        // 防止 Edge / 1Password 等密码管理器加图标
        if (!el.dataset.lpignore) {
          el.setAttribute('data-lpignore', 'true');
          el.setAttribute('data-1p-ignore', 'true');
        }
      });
    };
    disableAutofill();

    // 监听 DOM 变化(新增的 input 也处理)
    var observer = new MutationObserver(function (mutations) {
      var hasNewNodes = mutations.some(function (m) {
        return m.addedNodes.length > 0;
      });
      if (hasNewNodes) disableAutofill();
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return function () {
      return observer.disconnect();
    };
  }, [user]);

  // 标题栏徽章: (N) 统一工作台
  useEffect(function () {
    var n = stats.overdue + stats.dueToday;
    document.title = (n > 0 ? "(".concat(n, ") ") : '') + '统一工作台';
  }, [stats.overdue, stats.dueToday]);

  // 桌面通知 - 定时检查
  useEffect(function () {
    if (!user) return;
    if (notifPerm !== 'granted') return;

    // 会话内已通知 ID（sessionStorage 保证刷新后重发）
    var notifiedKey = 'workspace_notified_ids';
    var getNotified = function getNotified() {
      try {
        return new Set(JSON.parse(sessionStorage.getItem(notifiedKey) || '[]'));
      } catch (e) {
        return new Set();
      }
    };
    var saveNotified = function saveNotified(set) {
      try {
        sessionStorage.setItem(notifiedKey, JSON.stringify(_toConsumableArray(set)));
      } catch (e) {}
    };
    var check = function check() {
      var today = todayISO();
      var notified = getNotified();
      var live = records.filter(function (r) {
        return !r.deleted;
      });
      var mine = user.role === 'admin' || user.role === 'super_admin' ? live : live.filter(function (r) {
        return r.ownerId === user.id;
      });

      // 逾期
      var overdue = mine.filter(function (r) {
        return r.status !== 'resolved' && r.nextFollowUp && r.nextFollowUp < today && !notified.has('over_' + r.id);
      });
      // 今日到期
      var dueToday = mine.filter(function (r) {
        return r.status !== 'resolved' && r.nextFollowUp === today && !notified.has('today_' + r.id);
      });
      if (overdue.length > 0) {
        var r = overdue[0];
        var more = overdue.length > 1 ? "\uFF08\u53E6\u6709 ".concat(overdue.length - 1, " \u5355\u672A\u8DDF\u8FDB\uFF09") : '';
        sendDesktopNotification("\u23F0 \u8DDF\u8FDB\u5DF2\u903E\u671F\uFF1A".concat(r.customer || '未填客户'), "\u4E8B\u9879\uFF1A".concat(r.category || '—', "\uFF5C\u539F\u5B9A ").concat(r.nextFollowUp, " \u8DDF\u8FDB").concat(more), 'overdue_' + r.id);
        overdue.forEach(function (o) {
          return notified.add('over_' + o.id);
        });
      } else if (dueToday.length > 0) {
        var _r = dueToday[0];
        var _more = dueToday.length > 1 ? "\uFF08\u4ECA\u65E5\u53E6\u6709 ".concat(dueToday.length - 1, " \u5355\uFF09") : '';
        sendDesktopNotification("\uD83D\uDCCC \u4ECA\u65E5\u8DDF\u8FDB\u63D0\u9192\uFF1A".concat(_r.customer || '未填客户'), "\u4E8B\u9879\uFF1A".concat(_r.category || '—', "\uFF5C\u8BF7\u5C3D\u65E9\u8DDF\u8FDB").concat(_more), 'today_' + _r.id);
        dueToday.forEach(function (o) {
          return notified.add('today_' + o.id);
        });
      }

      // 🆕 主管/老板专属:超 7 天未解决的预警(每日只通知一次)
      var isAdminRole = user.role === 'admin' || user.role === 'super_admin';
      if (isAdminRole) {
        var cutoff7d = addDays(today, -7);
        var stale = live.filter(function (r) {
          return r.status !== 'resolved' && r.status !== 'transferred' && r.date && r.date < cutoff7d && isRecordMeaningful(r);
        });
        var dailyKey = 'stale_warn_' + today;
        if (stale.length > 0 && !notified.has(dailyKey)) {
          var ownerCount = new Set(stale.map(function (r) {
            return r.ownerId;
          })).size;
          sendDesktopNotification("\u26A0\uFE0F \u8D85 7 \u5929\u672A\u89E3\u51B3:".concat(stale.length, " \u6761"), "\u6D89\u53CA ".concat(ownerCount, " \u4F4D\u5458\u5DE5 \xB7 \u70B9\u51FB\u5DE5\u4F5C\u53F0\u67E5\u770B"), 'stale_' + today);
          notified.add(dailyKey);
        }
      }
      saveNotified(notified);
    };

    // 启动后 3 秒检查一次（避免登录瞬间打扰），之后每 5 分钟检查
    var t1 = setTimeout(check, 3000);
    var t2 = setInterval(check, 5 * 60 * 1000);
    return function () {
      clearTimeout(t1);
      clearInterval(t2);
    };
  }, [user, records, notifPerm]);

  // 🔍 全局智能搜索（必须在条件 return 之前定义,符合 React Rules of Hooks）
  var _useState55 = useState(false),
    _useState56 = _slicedToArray(_useState55, 2),
    searchOpen = _useState56[0],
    setSearchOpen = _useState56[1];
  useEffect(function () {
    var handler = function handler(e) {
      var _document$activeEleme, _document$activeEleme2;
      // Ctrl+K / Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
      // 斜杠快捷键（如果焦点不在输入框）
      if (e.key === '/' && ((_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 ? void 0 : _document$activeEleme.tagName) !== 'INPUT' && ((_document$activeEleme2 = document.activeElement) === null || _document$activeEleme2 === void 0 ? void 0 : _document$activeEleme2.tagName) !== 'TEXTAREA') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener('keydown', handler);
    return function () {
      return document.removeEventListener('keydown', handler);
    };
  }, []);
  if (!user) {
    return /*#__PURE__*/React.createElement(LoginScreen, {
      employees: employees,
      onLogin: onLogin
    });
  }
  return /*#__PURE__*/React.createElement(SitesContext.Provider, {
    value: sitesContextValue
  }, /*#__PURE__*/React.createElement(ProductsContext.Provider, {
    value: productsContextValue
  }, /*#__PURE__*/React.createElement("div", {
    className: "min-h-screen"
  }, /*#__PURE__*/React.createElement(ImgPreviewModal, {
    img: previewImg,
    onClose: function onClose() {
      return setPreviewImg(null);
    }
  }), /*#__PURE__*/React.createElement(TopNav, {
    user: user,
    activeTab: activeTab,
    setActiveTab: setActiveTab,
    onLogout: onLogout,
    stats: stats,
    notifPerm: notifPerm,
    requestNotifPerm: requestNotifPerm,
    cloudOn: cloudOn,
    employees: employees,
    switchAccount: switchAccount,
    onOpenSearch: function onOpenSearch() {
      return setSearchOpen(true);
    },
    cdmUnreadCount: cdmUnreadCount,
    cdmUrgentUnread: cdmUrgentUnread,
    topTabs: topTabs,
    sidebarHiddenCount: sidebarTabs.length,
    onOpenCustomize: function onOpenCustomize() {
      return setCustomizeOpen(true);
    }
  }), function () {
    var origin = STORE.get('impersonate_origin', null);
    if (!origin || !user) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'linear-gradient(90deg, #fef3c7 0%, #fde68a 100%)',
        borderBottom: '2px solid #f59e0b',
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        flexWrap: 'wrap',
        fontSize: 13,
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 2px 8px rgba(245,158,11,.2)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, "\uD83D\uDC41"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#78350f'
      }
    }, /*#__PURE__*/React.createElement("strong", null, "\u6B63\u5728\u4EE5 ", user.name, user.alias ? ' ' + user.alias : '', " \u7684\u8EAB\u4EFD\u67E5\u770B"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: '#92400e'
      }
    }, "\xB7 \u4F60\u7684\u771F\u5B9E\u8EAB\u4EFD\u662F ", /*#__PURE__*/React.createElement("strong", null, origin.name, origin.alias ? ' ' + origin.alias : ''))), /*#__PURE__*/React.createElement("button", {
      onClick: restoreOriginalUser,
      style: {
        padding: '6px 14px',
        background: '#f59e0b',
        color: 'white',
        border: 'none',
        borderRadius: 8,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: 700,
        fontSize: 12
      }
    }, "\u2190 \u5207\u56DE ", origin.name));
  }(), user && cloudOn && cloudSyncError && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 18,
      bottom: 18,
      zIndex: 2147483000,
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      background: '#fff7ed',
      border: '2px solid #f59e0b',
      borderRadius: 12,
      padding: '11px 15px',
      boxShadow: '0 8px 28px rgba(245,158,11,.4)',
      maxWidth: '92vw'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, "\u26A0"), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 800,
      color: '#b45309'
    }
  }, "\u90E8\u5206\u8BB0\u5F55\u4E0A\u4F20\u5931\u8D25"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: '#92400e'
    }
  }, cloudSyncError)), /*#__PURE__*/React.createElement("button", {
    onClick: forceSyncAll,
    disabled: forcingSync,
    style: {
      padding: '8px 15px',
      fontSize: 13,
      fontWeight: 800,
      background: forcingSync ? '#e5e7eb' : '#f59e0b',
      color: forcingSync ? '#6b7280' : 'white',
      border: 'none',
      borderRadius: 9,
      cursor: forcingSync ? 'default' : 'pointer',
      fontFamily: 'inherit',
      whiteSpace: 'nowrap'
    }
  }, forcingSync ? '⏳ 上传中…' : '☁ 立即上传')), user && cloudOn && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 8,
      padding: '4px 20px 0'
    }
  }, unsyncedCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#1d4ed8',
      fontWeight: 600
    }
  }, "\u5F85\u540C\u6B65 ", unsyncedCount, " \u6761"), /*#__PURE__*/React.createElement("button", {
    onClick: runSyncDiag,
    disabled: syncDiagBusy,
    title: "\u5BF9\u6BD4\u672C\u5730\u4E0E\u670D\u52A1\u5668\u7684\u771F\u5B9E\u6570\u636E,\u5B9A\u4F4D\u4E3A\u4EC0\u4E48\u4E3B\u7BA1\u7AEF\u770B\u5230\u7684\u4E0D\u4E00\u81F4",
    style: {
      padding: '3px 10px',
      fontSize: 11,
      background: '#f5f3ff',
      color: '#7c3aed',
      border: '1px solid #ddd6fe',
      borderRadius: 6,
      cursor: syncDiagBusy ? 'default' : 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600
    }
  }, syncDiagBusy ? '⏳ 检测中…' : '🔧 同步自检'), /*#__PURE__*/React.createElement("button", {
    onClick: forceSyncAll,
    disabled: forcingSync,
    title: "\u628A\u672C\u5730\u6240\u6709\u8BB0\u5F55\u5F3A\u5236\u4E0A\u4F20\u5230\u670D\u52A1\u5668(\u7528\u4E8E\u628A\u4E4B\u524D\u6CA1\u4F20\u4E0A\u7684\u6570\u636E\u4E00\u6B21\u6027\u8865\u4E0A)",
    style: {
      padding: '3px 10px',
      fontSize: 11,
      background: forcingSync ? '#e5e7eb' : '#eff6ff',
      color: '#1d4ed8',
      border: '1px solid #bfdbfe',
      borderRadius: 6,
      cursor: forcingSync ? 'default' : 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600
    }
  }, forcingSync ? '⏳ 上传中…' : '☁ 全部上传到服务器')), syncDiag && function () {
    var d = syncDiag;
    var inSync = d.cloudCount != null && d.cloudCount >= d.localCount;
    var verdict = d.cloudErr ? "\u8BFB\u53D6\u4E91\u7AEF\u5931\u8D25:".concat(d.cloudErr) : inSync ? "\u2713 \u672C\u5730\u4E0E\u4E91\u7AEF\u4E00\u81F4(\u672C\u5730 ".concat(d.localCount, " \xB7 \u4E91\u7AEF ").concat(d.cloudCount, ")\u3002\u6570\u636E\u5DF2\u540C\u6B65\u3002") : "\u26A0 \u672C\u5730 ".concat(d.localCount, " \u6761,\u4E91\u7AEF\u53EA\u6709 ").concat(d.cloudCount, " \u6761 \u2192 \u6709 ").concat(d.localCount - d.cloudCount, " \u6761\u8FD8\u6CA1\u4E0A\u5230\u670D\u52A1\u5668\u3002");
    return /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return setSyncDiag(null);
      },
      style: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.4)',
        zIndex: 2147483600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      style: {
        background: '#fff',
        borderRadius: 14,
        maxWidth: 560,
        width: '100%',
        maxHeight: '82vh',
        overflow: 'auto',
        padding: '22px 24px',
        boxShadow: '0 20px 60px rgba(0,0,0,.3)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: 800
      }
    }, "\uD83D\uDD27 \u540C\u6B65\u81EA\u68C0 \xB7 ", d.targetName), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSyncDiag(null);
      },
      style: {
        border: 'none',
        background: 'transparent',
        fontSize: 20,
        cursor: 'pointer',
        color: 'var(--ink-3)'
      }
    }, "\xD7")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        fontWeight: 700,
        color: d.cloudErr ? '#b45309' : inSync ? '#16a34a' : '#dc2626',
        marginBottom: 12,
        lineHeight: 1.5
      }
    }, verdict), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: 'var(--ink-2)',
        lineHeight: 1.9,
        background: '#f9fafb',
        borderRadius: 10,
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", null, "\u672C\u5730\u8BE5\u5458\u5DE5\u6709\u6548\u8BB0\u5F55:", /*#__PURE__*/React.createElement("b", null, d.localCount), " \u6761", d.totalLocal !== d.localCount ? "(\u672C\u673A\u5171 ".concat(d.totalLocal, " \u6761)") : ''), /*#__PURE__*/React.createElement("div", null, "\u4E91\u7AEF\u8BE5\u5458\u5DE5\u8BB0\u5F55:", /*#__PURE__*/React.createElement("b", null, d.cloudCount == null ? '—' : d.cloudCount), " \u6761"), /*#__PURE__*/React.createElement("div", null, "\u672C\u5730\u8FD8\u6CA1\u4E0A\u4E91:", /*#__PURE__*/React.createElement("b", {
      style: {
        color: d.unsyncedCount > 0 ? '#dc2626' : 'inherit'
      }
    }, d.unsyncedCount), " \u6761"), d.noOwnerCount > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#b45309'
      }
    }, "\u26A0 \u672C\u673A\u6709 ", /*#__PURE__*/React.createElement("b", null, d.noOwnerCount), " \u6761\u6CA1\u6709\u5F52\u5C5E(\u4E3B\u7BA1\u6309\u4EBA\u7B5B\u9009\u4F1A\u6F0F\u7B97)")), d.stuck.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        marginBottom: 6
      }
    }, "\u672A\u4E0A\u4E91\u660E\u7EC6(\u6700\u591A\u5217 12 \u6761):"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        lineHeight: 1.6,
        maxHeight: 200,
        overflow: 'auto',
        border: '1px solid var(--line)',
        borderRadius: 8
      }
    }, d.stuck.map(function (s) {
      return /*#__PURE__*/React.createElement("div", {
        key: s.id,
        style: {
          padding: '7px 10px',
          borderBottom: '1px solid #f1f5f9'
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, s.who), " \xB7 ", s.date), /*#__PURE__*/React.createElement("div", {
        style: {
          color: '#dc2626'
        }
      }, "\u539F\u56E0:", s.err));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        display: 'flex',
        gap: 10,
        justifyContent: 'flex-end'
      }
    }, d.unsyncedCount > 0 && /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23() {
        return _regenerator().w(function (_context23) {
          while (1) switch (_context23.n) {
            case 0:
              _context23.n = 1;
              return forceSyncAll();
            case 1:
              _context23.n = 2;
              return runSyncDiag();
            case 2:
              return _context23.a(2);
          }
        }, _callee23);
      })),
      disabled: forcingSync,
      style: {
        padding: '8px 16px',
        fontSize: 13,
        fontWeight: 700,
        background: '#f59e0b',
        color: '#fff',
        border: 'none',
        borderRadius: 9,
        cursor: 'pointer',
        fontFamily: 'inherit'
      }
    }, forcingSync ? '⏳ 上传中…' : '☁ 立即补传未上云的'), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setSyncDiag(null);
      },
      style: {
        padding: '8px 16px',
        fontSize: 13,
        fontWeight: 600,
        background: '#f3f4f6',
        color: 'var(--ink-2)',
        border: 'none',
        borderRadius: 9,
        cursor: 'pointer',
        fontFamily: 'inherit'
      }
    }, "\u5173\u95ED")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        fontSize: 10.5,
        color: 'var(--ink-4)',
        lineHeight: 1.5
      }
    }, "\u8BF4\u660E:\u82E5\u672C\u5730=\u4E91\u7AEF\u5374\u8FD8\u8BF4\"\u4E0D\u540C\u6B65\",\u95EE\u9898\u5728\u3010\u6309\u4EBA\u7B5B\u9009\u7684\u5F52\u5C5E\u3011\u4E0D\u5728\u540C\u6B65\u2014\u2014\u628A\u4E0A\u9762\"\u65E0\u5F52\u5C5E\"\u6216\u5F52\u5C5E\u5F02\u5E38\u7684\u8BB0\u5F55\u544A\u8BC9\u6211\u5373\u53EF\u6821\u6B63\u3002")));
  }(), user && user.role === 'super_admin' && cloudOn && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: 8,
      padding: '4px 20px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: migrateRecordImages,
    disabled: migrating,
    title: "\u628A\u5386\u53F2\u8BB0\u5F55\u91CC\u6B8B\u7559\u7684\u56FE\u7247\u8FC1\u79FB\u5230\u4E91\u5B58\u50A8,\u8BA9\u5217\u8868\u52A0\u8F7D\u66F4\u5FEB\u3002\u4E00\u6B21\u6027\u3001\u5B89\u5168\u3001\u4E0D\u4E22\u6570\u636E\u3002",
    style: {
      padding: '3px 10px',
      fontSize: 11,
      background: migrating ? '#e5e7eb' : '#f1f5f9',
      color: '#475569',
      border: '1px solid #cbd5e1',
      borderRadius: 6,
      cursor: migrating ? 'default' : 'pointer',
      fontFamily: 'inherit'
    }
  }, migrating ? '⏳ 迁移中,请勿关页…' : '🗜 瘦身加速(迁移历史图片)')), /*#__PURE__*/React.createElement(GlobalSearch, {
    open: searchOpen,
    onClose: function onClose() {
      return setSearchOpen(false);
    },
    user: user,
    employees: employees,
    records: records,
    setActiveTab: setActiveTab,
    onJumpToRecord: function onJumpToRecord(target) {
      return goFocus(target.tab, target.recordId, target.subTab);
    }
  }), cloudOn === false && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fef2f2',
      borderBottom: '1.5px solid #ef4444',
      padding: '10px 20px',
      textAlign: 'center',
      fontSize: 13,
      color: '#991b1b'
    }
  }, "\u26A0 ", /*#__PURE__*/React.createElement("strong", null, "\u4E91\u540C\u6B65\u672A\u8FDE\u63A5"), " \xB7 \u4F60\u7684\u6570\u636E\u53EA\u5B58\u5728\u672C\u5730\u6D4F\u89C8\u5668\uFF0C\u6362\u6D4F\u89C8\u5668/\u7535\u8111\u4F1A\u770B\u4E0D\u5230 \xB7", /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCloudVersion(function (v) {
        return v + 1;
      });
    },
    style: {
      marginLeft: 8,
      padding: '3px 10px',
      background: '#dc2626',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 12
    }
  }, "\uD83D\uDD04 \u91CD\u8BD5\u8FDE\u63A5")), cloudOn && cloudSyncError && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fef3c7',
      borderBottom: '1.5px solid #f59e0b',
      padding: '10px 20px',
      textAlign: 'center',
      fontSize: 13,
      color: '#854d0e'
    }
  }, "\u26A0 ", /*#__PURE__*/React.createElement("strong", null, "\u4E91\u7AEF\u5199\u5165\u5931\u8D25"), "\uFF1A", cloudSyncError.slice(0, 100), " \xB7 \u6570\u636E\u53EF\u80FD\u672A\u540C\u6B65\u5230\u4E91\u7AEF \xB7", /*#__PURE__*/React.createElement("button", {
    onClick: forceSyncAll,
    disabled: forcingSync,
    style: {
      marginLeft: 8,
      padding: '3px 10px',
      background: '#d97706',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 12
    }
  }, "\uD83D\uDD04 \u5F3A\u5236\u4E0A\u4F20 (", records.length, " \u6761)")), cloudOn && !cloudSyncError && unsyncedCount > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#eff6ff',
      borderBottom: '1px solid #bfdbfe',
      padding: '5px 20px',
      textAlign: 'center',
      fontSize: 12,
      color: '#1d4ed8'
    }
  }, "\u23F3 \u6B63\u5728\u540C\u6B65\u5230\u670D\u52A1\u5668 \xB7 \u5F85\u540C\u6B65 ", unsyncedCount, " \u6761\u2026(\u53EF\u653E\u5FC3\u7EE7\u7EED\u5F55\u5165,\u4F1A\u81EA\u52A8\u4E0A\u4F20)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      minHeight: 'calc(100vh - 56px)'
    }
  }, /*#__PURE__*/React.createElement(NavSidebar, {
    tabs: sidebarTabs,
    activeTab: activeTab,
    setActiveTab: setActiveTab,
    collapsed: layoutPrefs.sidebarCollapsed,
    onToggleCollapse: function onToggleCollapse() {
      return setLayoutPrefs(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          sidebarCollapsed: !p.sidebarCollapsed
        });
      });
    },
    onOpenCustomize: function onOpenCustomize() {
      return setCustomizeOpen(true);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-4 sm:px-6 py-6"
  }, user && cloudOn && activeTab !== 'chargebacks' && /*#__PURE__*/React.createElement(ChargebackReminderBanner, {
    user: user,
    employees: employees,
    onJumpTo: function onJumpTo(cb) {
      return goFocus('chargebacks', cb && cb.id);
    }
  }), activeTab === 'cs' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CSModule, {
    user: user,
    employees: employees,
    records: records,
    setRecords: setRecords,
    toast: toast,
    cloudOn: cloudOn,
    focusId: focusFor('cs'),
    onOpenQuoteTab: function onOpenQuoteTab() {
      return setActiveTab('quote');
    }
  })), activeTab === 'chargebacks' && /*#__PURE__*/React.createElement(ChargebacksModule, {
    user: user,
    employees: employees,
    toast: toast,
    focusId: focusFor('chargebacks')
  }), activeTab === 'offline_orders' && /*#__PURE__*/React.createElement(OfflineOrdersModule, {
    user: user,
    employees: employees,
    toast: toast
  }), activeTab === 'custom_photo' && /*#__PURE__*/React.createElement(CustomPhotoModule, {
    user: user,
    employees: employees,
    toast: toast
  }), activeTab === 'briefings' && /*#__PURE__*/React.createElement(BriefingsModule, {
    user: user,
    employees: employees,
    toast: toast,
    cloudOn: cloudOn
  }), activeTab === 'cross_dept' && /*#__PURE__*/React.createElement(CrossDeptModule, {
    user: user,
    employees: employees,
    messages: cdmMessages,
    loading: cdmLoading,
    onReload: loadCdmMessages,
    toast: toast,
    shopOwners: shopOwners,
    cdmTimeoutConfig: cdmTimeoutConfig
  }), activeTab === 'influencers' && /*#__PURE__*/React.createElement(InfluencerModule, {
    user: user,
    employees: employees,
    toast: toast
  }), activeTab === 'workflows' && /*#__PURE__*/React.createElement(WorkflowModule, {
    goTab: setActiveTab
  }), activeTab === 'events' && /*#__PURE__*/React.createElement(EventsModule, {
    user: user,
    employees: employees,
    records: records,
    toast: toast,
    cloudOn: cloudOn,
    focusId: focusFor('events'),
    focusSub: navFocus && navFocus.tab === 'events' ? navFocus.sub : null
  }), activeTab === 'reviews' && /*#__PURE__*/React.createElement(ReviewsModule, {
    user: user,
    employees: employees,
    toast: toast
  }), activeTab === 'suppliers' && /*#__PURE__*/React.createElement(SuppliersManagement, {
    toast: toast,
    user: user
  }), visitedTabs.has('quote') && /*#__PURE__*/React.createElement("div", {
    style: {
      display: activeTab === 'quote' ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement(QuoteModule, {
    user: user,
    employees: employees,
    toast: toast,
    cloudOn: cloudOn
  })), visitedTabs.has('kb') && /*#__PURE__*/React.createElement("div", {
    style: {
      display: activeTab === 'kb' ? 'block' : 'none'
    }
  }, /*#__PURE__*/React.createElement(KbModule, {
    user: user,
    toast: toast,
    cloudOn: cloudOn
  })), activeTab === 'email_templates' && /*#__PURE__*/React.createElement(EmailTemplatesModule, {
    user: user,
    toast: toast
  }), activeTab === 'freight_calc' && /*#__PURE__*/React.createElement(FreightCalcModule, {
    user: user,
    toast: toast
  }), activeTab === 'kpi_scorer' && /*#__PURE__*/React.createElement(KpiScorerModule, {
    user: user,
    toast: toast
  }), activeTab === 'express_invoice' && /*#__PURE__*/React.createElement(ExpressInvoiceModule, {
    user: user,
    toast: toast
  }), activeTab === 'inventory' && /*#__PURE__*/React.createElement(InventoryModule, {
    user: user,
    toast: toast
  }), activeTab === 'help' && /*#__PURE__*/React.createElement(HelpCenterModule, {
    user: user
  }), activeTab === 'tasks' && /*#__PURE__*/React.createElement(TasksModule, {
    user: user,
    employees: employees,
    toast: toast
  }), activeTab === 'photo_requests' && /*#__PURE__*/React.createElement(PhotoRequestsModule, {
    user: user,
    toast: toast
  }), activeTab === 'feedback' && /*#__PURE__*/React.createElement(BugReportsModule, {
    user: user,
    employees: employees,
    toast: toast
  }), activeTab === 'report' && /*#__PURE__*/React.createElement(ReportModule, {
    user: user,
    employees: employees,
    toast: toast,
    cloudOn: cloudOn
  }), activeTab === 'dashboard' && /*#__PURE__*/React.createElement(DashboardModule, {
    user: user,
    employees: employees,
    records: records
  }), activeTab === 'admin_overview' && (user.role === 'admin' || user.role === 'super_admin' || user.role === 'hr') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WorkSnapshotPanel, {
    user: user,
    employees: employees,
    records: records,
    onJumpTo: function onJumpTo(tab) {
      return setActiveTab(tab);
    }
  }), /*#__PURE__*/React.createElement(AdminOverviewDashboard, {
    user: user,
    employees: employees,
    toast: toast
  })), activeTab === 'delete_approvals' && (user.role === 'admin' || user.role === 'super_admin') && /*#__PURE__*/React.createElement(DeleteApprovalCenter, {
    user: user,
    toast: toast
  }), activeTab === 'trash' && /*#__PURE__*/React.createElement(TrashModule, {
    user: user,
    employees: employees,
    records: records,
    setRecords: setRecords,
    toast: toast
  }), activeTab === 'admin' && (user.role === 'admin' || user.role === 'super_admin') && /*#__PURE__*/React.createElement(AdminModule, {
    user: user,
    employees: employees,
    setEmployees: setEmployees,
    toast: toast,
    cloudCfg: cloudCfg,
    setCloudCfg: setCloudCfg,
    onCloudApply: function onCloudApply() {
      return setCloudVersion(function (v) {
        return v + 1;
      });
    }
  })))), /*#__PURE__*/React.createElement("footer", {
    style: {
      textAlign: 'center',
      padding: '40px 20px',
      color: 'var(--ink-4)',
      fontSize: 12,
      fontWeight: 400
    }
  }, "\u7EDF\u4E00\u5DE5\u4F5C\u53F0 \xB7 v2.1 \xB7 ", cloudOn ? '☁ Supabase 云端协同' : '💾 本地模式'), customizeOpen && /*#__PURE__*/React.createElement(LayoutCustomizeModal, {
    allTabs: allTabs,
    layoutPrefs: layoutPrefs,
    defaultTopKeys: DEFAULT_TOP_KEYS,
    onSave: function onSave(_ref34) {
      var newTopKeys = _ref34.topKeys,
        newSidebarOrder = _ref34.sidebarOrder;
      return setLayoutPrefs(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          topKeys: newTopKeys,
          sidebarOrder: newSidebarOrder || []
        });
      });
    },
    onClose: function onClose() {
      return setCustomizeOpen(false);
    }
  }), toastNode)));
};

// 📦 版本日志 - 用户用来确认加载的是哪个版本
var APP_VERSION = '2026.06.05-fix216';

// ════════════════════════════════════════════════════════════════════
// 📦 版本历史 (数据驱动 · 用于帮助中心展示)
// 添加新版本只需在数组开头加一项即可
// 字段: version 版本号 / date 日期 / title 一句话概要 / changes 详细改动列表
// type: 'feature' 新功能 / 'fix' 修复 / 'refactor' 重构 / 'perf' 性能 / 'data' 数据
// ════════════════════════════════════════════════════════════════════
var VERSION_HISTORY = [{
  version: '2026.05.26-fix32',
  date: '2026.05.26',
  title: '🚀 速度大优化 — 预编译版,启动速度提升 5-10 倍',
  changes: [{
    type: 'perf',
    text: '整个工作台从"浏览器跑 Babel 实时转译 8 秒"改成"预编译后直接执行" — 首屏从 ~10s 降到 ~1.5s'
  }, {
    type: 'perf',
    text: '不再下载 Babel CDN (节省 3 MB 流量) + 不占用 CPU 编译时间'
  }, {
    type: 'perf',
    text: '切 tab 流畅度提升:AI 评价、知识库等模块点击响应明显变快'
  }, {
    type: 'feature',
    text: '部署方式简化:从 11 个 .js 文件 → 1 个 app.compiled.js + index.html (2 个文件)'
  }]
}, {
  version: '2026.05.25-fix31',
  date: '2026.05.25',
  title: '📝 报价单 — iframe 内部恢复滚动条 + 📚 KB 升级主管默认到 Miya',
  changes: [{
    type: 'fix',
    text: '报价单 iframe 删除 scrolling="no" — 之前 fix29 让 iframe 不再撑大,但同时禁用了内部滚动,导致用户看不到下面的 PDF 预览'
  }, {
    type: 'fix',
    text: '现在 iframe 锁定 viewport 高度 + 内部自己有滚动条 (跟 KB iframe 一样的设置) → 用户可以滚 iframe 看预览'
  }, {
    type: 'feature',
    text: 'KB(独立 kb.html):升级主管按钮点击后,自动创建跨部门消息,默认派给 Miya(u_miya)'
  }]
}, {
  version: '2026.05.25-fix30',
  date: '2026.05.25',
  title: '📢 会议纪要 — 期号改成"2026年6月份 第一周" + 快速切上下周',
  changes: [{
    type: 'feature',
    text: '期号格式:从 "2026 第 22 周" → "2026年6月份 第二周" — 用自然月分周 (1-7/8-14/15-21/22-28/29-end),跟数据筛选模块一致'
  }, {
    type: 'feature',
    text: '新增 3 个快捷按钮:← 上周 / 本周(高亮) / 下周 →,一键切换'
  }, {
    type: 'feature',
    text: '新增日期选择器:点 📅 → 选任意日期 → 自动生成对应期号,适合写历史/未来纪要'
  }, {
    type: 'feature',
    text: '输入框仍允许手动改 — 如果客户的期号惯例不一样可以自定义'
  }]
}, {
  version: '2026.05.25-fix29',
  date: '2026.05.25',
  title: '📝 报价单 — 修复"无限下滑"(应用 KB 的 fix8 方案)',
  changes: [{
    type: 'fix',
    text: '报价单 iframe 不再撑大 — 跟知识库 fix8 同样的处理,iframe 保持 calc(100vh - 100px),自己有滚动条'
  }, {
    type: 'fix',
    text: '根因:之前 iframe 撑到内容高度(~3000px),workspace 主页面也变巨高 → "无限下滑"'
  }, {
    type: 'fix',
    text: '副效:position:fixed 的 modal(❓ 使用手册)不再锚到 iframe 顶部,而是锁在 iframe viewport — 点 ❓ 就在你眼前出现'
  }, {
    type: 'fix',
    text: '移除 iframe-modal-open 的 scrollIntoView 旧逻辑 (这是真正触发"页面平滑滑动到顶"的元凶)'
  }]
}, {
  version: '2026.05.25-fix28',
  date: '2026.05.25',
  title: '⚙ 侧栏自定义 — 其他功能也支持手动 ↑↓ 排序',
  changes: [{
    type: 'feature',
    text: '侧栏自定义弹窗:下方"其他功能"区每个 tab 项加 ↑↓ 按钮,可手动调整组内顺序'
  }, {
    type: 'feature',
    text: '排序规则:在 同组内 (主功能 / 资源工具 / 协作 / 管理) 上下交换,不跨组'
  }, {
    type: 'feature',
    text: '用户自定义顺序保存在 layoutPrefs.sidebarOrder · 每个员工独立,不影响他人'
  }, {
    type: 'fix',
    text: '重置按钮:同时清掉 topKeys + sidebarOrder,恢复完全默认'
  }]
}, {
  version: '2026.05.25-fix23',
  date: '2026.05.25',
  title: '🌐 店铺负责人 — 新角色 + 矩阵批量添加 + 智能派单',
  changes: [{
    type: 'feature',
    text: 'CDM_OWNER_ROLES 新增 2 个客服角色:🌙 夜班(晚 6 点后美区询盘)/ 🚨 升级处理(投诉退款纠纷)'
  }, {
    type: 'feature',
    text: '店铺负责人维护新增"🔢 矩阵批量"模式:N 网站 × M 员工 × 1 角色 → 一键添加 N×M 条记录'
  }, {
    type: 'feature',
    text: '批量模式自动去重:(shop, user, role) 已存在的跳过,只插入新组合 · 提示"添加 X 条 · 跳过 Y 条重复"'
  }, {
    type: 'feature',
    text: '批量模式支持自定义网站(临时添加非预设网站)'
  }, {
    type: 'feature',
    text: '跨部门消息自动派单 fallback 升级:primary → night → escalation → backup → manager → 第一个 · 更适合客服业务'
  }, {
    type: 'feature',
    text: '角色按钮带 tooltip 说明:每个角色 hover 显示职责'
  }]
}, {
  version: '2026.05.25-fix22',
  date: '2026.05.25',
  title: '🔗 三大联动 — SKU 联想 + 售后自动统计 + 网站全局生效',
  changes: [{
    type: 'feature',
    text: '🔗 联动 1: 线下单产品行 / 售后产品名 / 退款产品名 输入时自动联想产品主表 — 显示缩略图/SKU/供应商/默认价/历史售后次数'
  }, {
    type: 'feature',
    text: '选中产品自动填:SKU + 产品名 + 缩略图 + 默认单价(单价为空时)+ 关联 product_id 字段'
  }, {
    type: 'feature',
    text: '联想支持 ↑↓ 选择 / Enter 确认 / Esc 关闭 · 实时模糊匹配 SKU 和产品名'
  }, {
    type: 'feature',
    text: '🔗 联动 2: 新建售后事件时,自动给产品主表的 total_aftersales 计数 +1 — 哪款产品问题多自动统计'
  }, {
    type: 'feature',
    text: '按 product_name 精确匹配 +(若填了)product_sku 匹配 · 失败静默不阻塞保存'
  }, {
    type: 'feature',
    text: '🔗 联动 3: 自定义网站(⚙ 设置 → 🌐 网站 添加的)自动加进所有网站下拉 — 筛选/录入/编辑全场景'
  }, {
    type: 'feature',
    text: '共改造 10 处 SITES.map → allSites.map,涉及 7 个模块 · Realtime 监听自定义网站变更立即生效'
  }, {
    type: 'refactor',
    text: '新增 React Context:SitesContext + ProductsContext · App 启动时加载并通过 Provider 分发 · 各模块用 useSiteCodes() / useProducts() Hook 消费'
  }]
}, {
  version: '2026.05.25-fix21',
  date: '2026.05.25',
  title: '⚙ 统一设置中心 — 网站 + 产品 + 人员 一处维护',
  changes: [{
    type: 'feature',
    text: '⚙ 设置 重新分组:基础维护(人员/网站/产品/供应商)/ 业务规则 / 系统 — 视觉分隔更清晰'
  }, {
    type: 'feature',
    text: '🌐 网站维护:11 个内置网站可见 + 主管可添加自定义站点(代码/名称/品牌/域名/订单前缀/主题色)'
  }, {
    type: 'feature',
    text: '📦 产品维护:全新产品主表 — SKU/名称/分类/供应商/默认价/产品图/URL/标签/描述/备注'
  }, {
    type: 'feature',
    text: '产品图支持点击/粘贴/拖拽上传,自动压缩 · 售后次数高亮(≥5 红 / 1-4 黄)'
  }, {
    type: 'data',
    text: '新增 Supabase 表 products + Realtime · 自定义网站复用 system_settings 表'
  }]
}, {
  version: '2026.05.25-fix20',
  date: '2026.05.25',
  title: '📦 模块化重构 — 1.32MB 单文件拆成 11 个 JS 模块',
  changes: [{
    type: 'refactor',
    text: 'workspace.html 从 23k 行单文件拆成 21KB 壳 + 11 个独立 JS 文件,加载更快,维护更清晰'
  }, {
    type: 'refactor',
    text: '按功能归类:核心工具 / 客服跟进 / 看板回收站 / 设置财务 / 报价会议 / 拒付线下单 / 实拍评价 / 工作主线 / 知识库跨部门 / 任务反馈 / 帮助主入口'
  }, {
    type: 'perf',
    text: '拆 11 文件按需缓存,改一个模块只刷该文件,CDN 命中率更高'
  }]
}, {
  version: '2026.05.25-fix19',
  date: '2026.05.25',
  title: '📌 任务分派 — 临时工作派给同事,主管全局可见',
  changes: [{
    type: 'feature',
    text: '新增 📌 任务分派 tab (协作组),临时性工作派给某个人,主管随时看进度'
  }, {
    type: 'feature',
    text: '4 个 tab:📥 我的待办 / 📤 我派的 / ⚠ 已超期 / 🌐 全部任务 (主管)'
  }, {
    type: 'feature',
    text: '6 个状态:⏳ 待处理 / 🔧 处理中 / ⛔ 卡住 / ✅ 已完成 / ❌ 已取消 + 加 ⚠ 超期标识'
  }, {
    type: 'feature',
    text: '4 级优先级:🚨 紧急 / ⚡ 重要 / · 普通 / · 低 (按优先级 + 截止日 + 卡住状态排序)'
  }, {
    type: 'feature',
    text: '快速操作按钮:卡片上直接 ▶ 接手 / ✓ 完成 / ⛔ 卡住,不用进详情'
  }, {
    type: 'feature',
    text: '详情区:任务说明 / 时间线(派发→接手→完成)/ 状态切换 / 对话区 / 编辑 / 删除'
  }, {
    type: 'feature',
    text: '实时推送:派给你时浏览器通知 + Toast · 任务有变化主管实时刷新'
  }, {
    type: 'feature',
    text: '统计卡:待处理 / 处理中 / 卡住 / 已超期 / 已完成 / 总任务 — 一眼看全'
  }, {
    type: 'feature',
    text: '紧急任务横幅:你有 N 个紧急任务待办时头部红色提醒,带脉动动画'
  }, {
    type: 'feature',
    text: '承接人改派:创建人/主管可在详情里编辑承接人 + 截止日 + 优先级'
  }, {
    type: 'feature',
    text: '支持 AdvancedDateFilter(本周/本月/任意月第N周) + 状态/优先级/承接人/全文搜索'
  }, {
    type: 'data',
    text: '新增 Supabase 表 tasks + Realtime 订阅'
  }]
}, {
  version: '2026.05.25-fix18',
  date: '2026.05.25',
  title: '🎯 4 大痛点一次性处理 — 转单/产品图/邮件分布/侧边栏自动排序',
  changes: [{
    type: 'feature',
    text: '📤 转给跟单 — 线下单"已付款"状态自动出现按钮,一键创建跨部门工单到跟单部'
  }, {
    type: 'feature',
    text: '转单时自动附带:订单号 / 客户 / 收货 / 产品清单 / 付款凭证 / 下单指令 · 跟单方 Realtime 推送'
  }, {
    type: 'feature',
    text: '根据 order.site 自动从店铺-负责人映射推荐跟单同事 · 支持紧急程度 + 备注'
  }, {
    type: 'feature',
    text: '订单卡显示"✓ 已转 [跟单姓名]"标签,避免重复转单'
  }, {
    type: 'feature',
    text: '🖼️ 产品图片粘贴 — 线下单产品清单每行多了 48×48 缩略图位'
  }, {
    type: 'feature',
    text: '图片支持:点击上传 / 聚焦后 Ctrl+V 粘贴 / 拖拽 / 自动压缩到 600px(0.8 JPEG)/ 点击放大'
  }, {
    type: 'feature',
    text: '转单时跟单方看到的消息里含产品图,一眼就懂是什么产品'
  }, {
    type: 'feature',
    text: '📊 数据看板新增"员工×日期×网站"热力图 — 颜色深浅=邮件量,每格悬停看网站分布'
  }, {
    type: 'feature',
    text: '支持近 7 天 / 本月切换 · 旁边附"负责网站"前 4 大标签 · 默认显示前 8 人,可展开全部'
  }, {
    type: 'feature',
    text: '⭐ 侧边栏自动按使用频率排序 — 你常点的功能自动上浮,顶部 chip 可关闭'
  }, {
    type: 'feature',
    text: '点击次数本地保存(localStorage),按用户独立 · 默认开启'
  }]
}, {
  version: '2026.05.25-fix17',
  date: '2026.05.25',
  title: '🏆 产品售后 TOP + 反馈 KPI 绩效分',
  changes: [{
    type: 'feature',
    text: '月度汇总新增 🛍️ 产品问题排行 TOP 20 — 按 售后+补件+退款 总次数排序,知道哪款产品问题最多'
  }, {
    type: 'feature',
    text: '产品级排行附带:涉及供应商列表 + 退款金额(美元),一眼看出问题源头'
  }, {
    type: 'feature',
    text: '反馈中心新增 📊 KPI 视图(主管/admin 专属)— 按提交人 × 月份汇总,直接看绩效分'
  }, {
    type: 'feature',
    text: 'KPI 表显示:总提交 / Bug / 功能 / 改进 / 疑问 / 紧急 / 已修复 / 处理中 / 拒绝 / 🏆 绩效分'
  }, {
    type: 'feature',
    text: '绩效计分公式:bug=3 / 功能=2 / 改进=2 / 疑问=1 · 已修复 ×1.5 · 拒绝/重复 ×0.3 · 紧急 ×1.2 · 重要 ×1.1'
  }, {
    type: 'feature',
    text: 'KPI 视图复用 AdvancedDateFilter,支持本月 / 上月 / 任意月份精确统计'
  }]
}, {
  version: '2026.05.25-fix16',
  date: '2026.05.25',
  title: '🪄 线下单智能地址识别 — 粘贴整段地址自动填字段',
  changes: [{
    type: 'feature',
    text: '线下单 "📍 收货信息" 区顶部新增智能粘贴板:粘贴整段地址,自动识别 7 个字段(姓名/电话/街道/城市/州/邮编/国家)'
  }, {
    type: 'feature',
    text: '支持美国(City, ST ZIP) / 加拿大(City, ON M5V 3A8) / 英国(SW1A 2AA) / 欧洲(10115 Berlin) / 澳洲(Melbourne VIC 3000) / 拉脱维亚(LV-2015) 等主流格式'
  }, {
    type: 'feature',
    text: '国家识别支持 50+ 国家名 + 简写(USA/US/UK/AU/DE/FR ...)'
  }, {
    type: 'feature',
    text: '自动跳过标签前缀(Name: / Phone: / Address: / 姓名: / 地址: 等)'
  }, {
    type: 'feature',
    text: '识别后字段仍可手动修改,绿色反馈条提示识别了哪几项'
  }, {
    type: 'feature',
    text: '粘贴时自动触发解析(超 20 字符且含换行/逗号),也可点 🪄 按钮手动触发'
  }]
}, {
  version: '2026.05.25-fix15',
  date: '2026.05.25',
  title: '📅 增强日期筛选 — 本周/本月/任意月份的第N周',
  changes: [{
    type: 'feature',
    text: '新增全局组件 <AdvancedDateFilter> 和辅助函数 getDateRange() / filterByDateRange()'
  }, {
    type: 'feature',
    text: '支持快捷选项:今天 / 昨天 / 本周 / 上周 / 本月 / 上月 / 全部 / 近 3-90 天'
  }, {
    type: 'feature',
    text: '支持按年份/月份精确选择:2026 年 + 12 月份网格 + 整月按钮'
  }, {
    type: 'feature',
    text: '支持按月份的"第 N 周"精确筛选:1-7 号 / 8-14 号 / 15-21 号 / 22-28 号 / 29 号-月底'
  }, {
    type: 'feature',
    text: '跨部门协作 / 反馈中心列表 + 导出模态 升级使用新筛选器'
  }, {
    type: 'feature',
    text: '客户跟进 / 拒付 / 线下单 / 定制咨询 / 实拍核实 加新筛选行(与原"超 N 天未处理"过滤器并存)'
  }, {
    type: 'feature',
    text: '文件名自动带时间范围(如 bug反馈_待修复_2026年6月第2周_5条_...)'
  }]
}, {
  version: '2026.05.25-fix14b',
  date: '2026.05.25',
  title: '📥 反馈中心导出 4 种格式',
  changes: [{
    type: 'feature',
    text: '反馈中心头部新增 📥 下载导出按钮 (主管/admin 专属)'
  }, {
    type: 'feature',
    text: '4 种格式:📝 Markdown · 🖨 PDF (浏览器打印) · 🌐 HTML · 📊 CSV'
  }, {
    type: 'feature',
    text: '筛选导出:仅待修复 / 仅已修复 / 全部 · 时间范围 · 类别'
  }, {
    type: 'feature',
    text: '内容选项:截图开关 / 主管回复 / 对话历史'
  }, {
    type: 'feature',
    text: '文件名自动含范围+数量+时间戳 (如 bug反馈_待修复_7条_20260525_1430.md)'
  }, {
    type: 'feature',
    text: 'CSV 带 UTF-8 BOM,Excel 直接打开中文不乱码'
  }, {
    type: 'feature',
    text: 'PDF 通过浏览器原生打印对话框,排版优雅,带分页防截断'
  }]
}, {
  version: '2026.05.25-fix14',
  date: '2026.05.25',
  title: '🐛 内置反馈中心 + AI 自助 handoff',
  changes: [{
    type: 'feature',
    text: '新增 🐛 反馈中心 模块 — 用户自助提交 bug/需求 → Supabase → 主管查阅 → AI 一键导出修复'
  }, {
    type: 'feature',
    text: '提交表单:类别 + 优先级 + 模块 + 描述 + 复现步骤 + 期望/实际 + 截图(粘贴/拖拽/上传 最多 8 张)'
  }, {
    type: 'feature',
    text: '自动收集版本号 + 浏览器信息 + 操作系统 + 视口尺寸,免去手填'
  }, {
    type: 'feature',
    text: '主管特权:🤖 导出给 AI 按钮 — 一键生成结构化文本摘要,直接粘到 Claude 对话窗'
  }, {
    type: 'feature',
    text: '状态机:新提交 → 已查阅 → 已排期 → 修复中 → 已修复(自动填当前版本号)'
  }, {
    type: 'feature',
    text: '对话区:用户 ↔ 主管可在反馈下持续沟通,减少信息丢失'
  }, {
    type: 'data',
    text: '新增 Supabase 表 bug_reports + Realtime 订阅(任何人提交主管实时收到)'
  }]
}, {
  version: '2026.05.25-fix13',
  date: '2026.05.25',
  title: '内置帮助中心 + 版本日志',
  changes: [{
    type: 'feature',
    text: '新增 📖 使用手册 模块 — 一站式新人指南、模块说明、设计意图、Bug 报告流程'
  }, {
    type: 'feature',
    text: '内置版本日志(从 fix12 起完整记录,以后每次升级都自动归档)'
  }, {
    type: 'feature',
    text: '文档化 Claude AI 能力清单 + 未来路线图(让团队知道还能改什么)'
  }]
}, {
  version: '2026.05.25-financefix1',
  date: '2026.05.25',
  title: '财务计算器:明扬加班船报价更新',
  changes: [{
    type: 'data',
    text: '明扬加班船 报价改为 美东19 / 美中18 / 美西17 元/kg(12-99kg)+ 15/14/13 元/kg(100kg+)'
  }, {
    type: 'data',
    text: '明扬加班船 附加费按图 3 spec 重写:单边 / 第二边 / 实重 / 围长 6 档'
  }, {
    type: 'feature',
    text: '超规自动标"不接收":实重>68kg / 单边>300cm / 围长>420cm'
  }]
}, {
  version: '2026.05.25-fix12-r5-paste-audit',
  date: '2026.05.25',
  title: '全局图片上传粘贴审计',
  changes: [{
    type: 'fix',
    text: 'CdmDetailModal 回复框补上 Ctrl+V 粘贴 + 拖拽支持(漏的)'
  }, {
    type: 'data',
    text: '8 处图片上传位置完整审计,全部支持粘贴'
  }]
}, {
  version: '2026.05.25-fix12-r4-cy',
  date: '2026.05.25',
  title: 'v22-CY 预设网站列表',
  changes: [{
    type: 'data',
    text: '新增 SHOPS_PRESET:13 个公司网站(10 独立站 + 阿里巴巴 + Radilum INC + 其他)'
  }, {
    type: 'feature',
    text: 'ShopOwnersManager 和 ComposeModal 都改用预设下拉,杜绝拼写不一致'
  }, {
    type: 'feature',
    text: '"其他"选项支持手填备注模式(不参与自动派单)'
  }]
}, {
  version: '2026.05.25-fix12-r3b',
  date: '2026.05.25',
  title: 'v22-CW Round 3b:主管管理面板',
  changes: [{
    type: 'feature',
    text: '新增 ShopOwnersManager(店铺-负责人维护,三方共享 + 只能编辑本部门)'
  }, {
    type: 'feature',
    text: '新增 TimeoutSettingsModal(主管自定义客服部 11 类 × 4 优先级超时阈值)'
  }]
}, {
  version: '2026.05.25-fix12-r2-r3a',
  date: '2026.05.25',
  title: 'v22-CW Round 2+3a:UI 重排 + 工单升级',
  changes: [{
    type: 'feature',
    text: '跨部门协作 4 tab(收件箱/分派给我/超时/我发起的)+ 超时优先排序'
  }, {
    type: 'feature',
    text: '顶部红色震动横幅(超时/紧急/主管视角)+ 5 张统计卡(加 ⏰ 超时)'
  }, {
    type: 'feature',
    text: '分页支持 20/50/100 切换'
  }, {
    type: 'feature',
    text: 'ComposeModal:关联网站 + 自动建议负责人 + 多选 watchers'
  }, {
    type: 'feature',
    text: 'DetailModal:工单分派(主管)+ watcher 管理 + 完成时桌面通知'
  }]
}, {
  version: '2026.05.25-fix12-r1',
  date: '2026.05.25',
  title: 'v22-CV/CW Round 1:基础设施',
  changes: [{
    type: 'data',
    text: 'CDM_CATEGORIES 从 7 类升级到 11 类(修改产品/改卖价/下架/上新品/做评价/3D 渲染/安装图/非标定制/售后/表单/其他)'
  }, {
    type: 'feature',
    text: '工具函数 getCategoryDef/getTimeoutDays/isOverdue/getDueAt 全局暴露 window.__cdmHelpers'
  }, {
    type: 'feature',
    text: 'shopOwners + cdmTimeoutConfig state 加载 + Realtime 实时同步'
  }, {
    type: 'feature',
    text: '工单卡片增强:超时角标 / 关联网站 / 分派给 / watcher 数 / 截止剩余天数'
  }, {
    type: 'feature',
    text: '进入跨部门协作时自动询问浏览器通知权限'
  }]
}, {
  version: '2026.05.25-fix11-hotfix4',
  date: '2026.05.25',
  title: '去重 — 删除汇报工单 tab',
  changes: [{
    type: 'refactor',
    text: '汇报工单功能已被跨部门协作完全取代,从导航中移除(代码保留可回滚)'
  }]
}, {
  version: '2026.05.25-fix11-hotfix3',
  date: '2026.05.25',
  title: 'AI 评价工具加载速度优化',
  changes: [{
    type: 'perf',
    text: '<link rel="preconnect"> 提前 DNS+TLS 握手美工域名'
  }, {
    type: 'perf',
    text: 'iframe 永久挂载 + display 切换,关闭再开瞬间显示'
  }, {
    type: 'perf',
    text: '稳定 URL(只含用户身份)+ postMessage 推任务上下文,iframe 不再重 load'
  }, {
    type: 'feature',
    text: '头部加"工具加载中..."橙色提示芯片(iframe onLoad 触发后消失)'
  }]
}, {
  version: '2026.05.25-fix11-hotfix2',
  date: '2026.05.25',
  title: 'AI 评价生成合并到产品评价 tab',
  changes: [{
    type: 'refactor',
    text: '移除 🤖 AI 评价生成 独立 tab,合并进 ⭐ 产品评价 内部'
  }, {
    type: 'feature',
    text: '产品评价顶部加"🤖 AI 评价工具"按钮(ad-hoc 临时模式)'
  }, {
    type: 'feature',
    text: '任务卡上 in_progress 时显示紫色"🤖 AI 生成评价"按钮'
  }]
}, {
  version: '2026.05.25-fix11-hotfix1',
  date: '2026.05.25',
  title: 'fix11 hotfix:stats 变量提升 bug',
  changes: [{
    type: 'fix',
    text: 'allTabs useMemo 引用 stats.X 时 stats 还是 undefined(Babel hoisting)→ 改 stats?.X 防御'
  }]
}, {
  version: '2026.05.25-fix11',
  date: '2026.05.25',
  title: '右键新窗口 + 评价 AI 合并',
  changes: [{
    type: 'feature',
    text: 'tab 改为 <a href="#tab=...">,支持右键"在新标签打开"/中键/Ctrl+点击'
  }, {
    type: 'feature',
    text: 'hashchange 监听同步 activeTab(浏览器后退/前进/外部链接)'
  }, {
    type: 'feature',
    text: '评价任务卡接单后出现紫色"🤖 AI 生成评价",全屏面板内嵌美工 iframe'
  }]
}, {
  version: '2026.05.25-fix10',
  date: '2026.05.25',
  title: 'IDE 风格侧边栏布局 + 自定义弹窗',
  changes: [{
    type: 'feature',
    text: '顶部常用 tab + 左侧栏不常用 tab 分组(主功能/资源/协作/管理)'
  }, {
    type: 'feature',
    text: '侧边栏可折叠到 icon-only(56px)'
  }, {
    type: 'feature',
    text: '⚙ 自定义布局 弹窗,每个员工独立保存(localStorage `nav_layout_${user.id}`)'
  }]
}, {
  version: '2026.05.25-fix9c',
  date: '2026.05.25',
  title: '跨部门协作初版 + AI 评价 iframe',
  changes: [{
    type: 'feature',
    text: '跨部门协作模块(美工/客服/跟单 三系统共用消息总线 Supabase)'
  }, {
    type: 'feature',
    text: 'AI 评价生成 iframe 嵌入美工 worktrack-kpi 的 ?embed=cs-reviews 精简模式'
  }]
}, {
  version: '2026.05.25-fix9b',
  date: '2026.05.25',
  title: '事件按钮折叠 + 完成率统计',
  changes: [{
    type: 'feature',
    text: '6 个事件按钮折叠成"📌 添加事件 ▼",节省横向空间'
  }, {
    type: 'feature',
    text: '退款管理 + 拒付加金额汇总组件(按货币/网站/状态分布)'
  }, {
    type: 'feature',
    text: '售后/补件加完成率横幅(3/7/14/30/60 天)'
  }, {
    type: 'feature',
    text: '售后/补件行加 ✓ 一键完成按钮'
  }]
}, {
  version: '2026.05.25-fix9',
  date: '2026.05.25',
  title: '老板删除 bug + 退款权限模型',
  changes: [{
    type: 'fix',
    text: 'aftersales/refills/refunds 三张表 deleted 列缺失 SQL 加上'
  }, {
    type: 'fix',
    text: 'loadAll 没过滤 !deleted 导致软删除回弹 → 补 .filter(!x.deleted)'
  }, {
    type: 'feature',
    text: '退款处理人模型:system_settings.refund_processors,只有授权人才能审批退款'
  }, {
    type: 'feature',
    text: 'WorkSnapshotPanel 退款处理人专属 2 张红卡(今天审核 / 今天打款)'
  }]
}, {
  version: '2026.05.25-fix8',
  date: '2026.05.25',
  title: 'CLOUD.upsert 自动 schema-retry',
  changes: [{
    type: 'perf',
    text: 'PGRST204 "column not found" → 自动剥离该列重试(最多 5 次),缓存到 CLOUD._missingColumns'
  }, {
    type: 'fix',
    text: 'kb.html iframe modal 显示修复(viewport-bound 检测)'
  }]
}, {
  version: '2026.05.25-fix7',
  date: '2026.05.25',
  title: '保存兜底 + 同步保护 + 升级按钮',
  changes: [{
    type: 'fix',
    text: '所有 Editor 加 created_by 兜底(防止 NULL 约束报错)'
  }, {
    type: 'feature',
    text: '多级升级按钮:staff/finance → admin → super_admin'
  }, {
    type: 'feature',
    text: '实拍核实表单重写:订单编号 + CustomerRepliesBoard 留言板(文图时间线)'
  }]
}];
console.log('%c📦 统一工作台 v' + APP_VERSION + ' 已加载\n' + '%c如看到旧 bug,请强刷 Ctrl+Shift+R 清除缓存\n' + '调试工具:window.CLOUD / window.__debugTimeFilter', 'color:#0369a1; font-weight:bold; font-size:14px; background:#e0f2fe; padding:4px 8px; border-radius:4px', 'color:#64748b; font-size:11px');

// 暴露调试入口
if (typeof window !== 'undefined') {
  window.CLOUD = CLOUD;
  window.APP_VERSION = APP_VERSION;
}
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
