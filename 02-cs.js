// ====== cs-system — 02-cs ======
// 版本 2026.06.03-fix149
// 预编译切片
//
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// ====== cs-system — 02-cs ======
// 版本 2026.06.03-fix149
// 预编译切片
//

var CSGridCard = function CSGridCard(_ref) {
  var _employees$find;
  var r = _ref.r,
    employees = _ref.employees,
    getDisplayStatus = _ref.getDisplayStatus,
    onOpen360 = _ref.onOpen360,
    onClickCard = _ref.onClickCard,
    onViewImg = _ref.onViewImg;
  var dispStatus = getDisplayStatus(r);
  var cur = STATUSES.find(function (s) {
    return s.key === dispStatus;
  }) || STATUSES[0];
  var statusStyleMap = {
    pending: {
      bg: '#f5f5f7',
      color: '#525252',
      stripe: '#86868b'
    },
    following: {
      bg: '#fff7ed',
      color: '#9a3412',
      stripe: '#ff9500'
    },
    waiting: {
      bg: '#e0f2fe',
      color: '#075985',
      stripe: '#0071e3'
    },
    resolved: {
      bg: '#dcfce7',
      color: '#14532d',
      stripe: '#34c759'
    },
    transferred: {
      bg: '#fef3c7',
      color: '#854d0e',
      stripe: '#d97706'
    }
  };
  var ss = statusStyleMap[cur.key] || statusStyleMap.pending;
  var ownerName = ((_employees$find = employees.find(function (e) {
    return e.id === r.ownerId;
  })) === null || _employees$find === void 0 ? void 0 : _employees$find.name) || '—';
  var diff = CS_DIFFICULTY_META[r.difficulty];
  var shots = (r.screenshots || []).filter(function (s) {
    return s && s.data;
  });
  var email = (r.customer || '').trim();
  var shopName = (r.site || '').trim();
  var orderRef = (r.orderRef || '').trim();
  var note = (r.note || '').trim();
  var fu = getFollowUpInfo(r); // 🆕 fix65: 跟进逾期信息

  return /*#__PURE__*/React.createElement("div", {
    onClick: onClickCard,
    title: "\u70B9\u51FB\u5207\u56DE\u5217\u8868\u89C6\u56FE\u7F16\u8F91\u8FD9\u6761",
    style: {
      background: 'white',
      border: '1px solid var(--line)',
      borderLeft: "3px solid ".concat(ss.stripe),
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
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      padding: '2px 10px',
      borderRadius: 'var(--radius-pill)',
      background: ss.bg,
      color: ss.color,
      fontWeight: 600
    }
  }, cur.label), diff && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      padding: '2px 8px',
      borderRadius: 'var(--radius-pill)',
      background: diff.bg,
      color: diff.color,
      fontWeight: 600
    }
  }, diff.label), r.category && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      padding: '2px 7px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--bg-elevated)',
      color: 'var(--ink-3)'
    }
  }, r.category), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-4)'
    }
  }, "\uD83D\uDC64 ", ownerName)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      fontSize: 14,
      fontWeight: 600,
      color: email ? 'var(--ink)' : 'var(--ink-4)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, "\uD83D\uDCE7 ", email || '(未填邮箱)'), email && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      onOpen360(email);
    },
    title: "\u5BA2\u6237\u6863\u6848 360\xB0",
    style: {
      padding: '2px 7px',
      fontSize: 10,
      fontWeight: 600,
      background: 'var(--accent-soft)',
      color: 'var(--accent)',
      border: '1px solid var(--accent)',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'inherit',
      flexShrink: 0
    }
  }, "\uD83D\uDD0D 360\xB0")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap',
      fontSize: 12
    }
  }, orderRef && function () {
    var _u = wsOrderAdminUrl(orderRef);
    var _txt = '🧾 ' + (orderRef.length > 28 ? orderRef.slice(0, 28) + '…' : orderRef);
    return _u ? /*#__PURE__*/React.createElement("a", {
      href: _u,
      target: "_blank",
      rel: "noopener noreferrer",
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      title: "\u6253\u5F00\u8BA2\u5355\u540E\u53F0\u9875",
      style: {
        padding: '2px 8px',
        background: 'var(--bg-elevated)',
        borderRadius: 6,
        fontFamily: 'SF Mono,monospace',
        color: 'var(--accent)',
        textDecoration: 'none'
      }
    }, _txt, " \u2197") : /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        background: 'var(--bg-elevated)',
        borderRadius: 6,
        fontFamily: 'SF Mono,monospace',
        color: 'var(--ink-2)'
      }
    }, _txt);
  }(), shopName && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#eef2ff',
      color: '#4338ca',
      borderRadius: 6,
      fontWeight: 500
    }
  }, "\uD83C\uDFEA ", shopName), (r.startTime || r.endTime) && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)'
    }
  }, "\uD83D\uDD50 ", r.startTime || '?', r.endTime ? ' → ' + r.endTime : '')), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      lineHeight: 1.5,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, note), shots.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, shots.slice(0, 4).map(function (s, i) {
    return /*#__PURE__*/React.createElement("img", {
      key: s.id || i,
      src: imgDisplaySrc(s),
      alt: s.name || '',
      className: "img-thumb",
      loading: "lazy",
      onClick: function onClick(e) {
        e.stopPropagation();
        (window.__setPreviewImg || onViewImg || function () {})(s);
      },
      onError: function onError(e) {
        e.currentTarget.style.display = 'none';
      },
      style: {
        width: 56,
        height: 56,
        objectFit: 'contain',
        borderRadius: 8,
        border: '1px solid var(--line)',
        background: 'var(--bg-elevated)',
        cursor: 'zoom-in'
      }
    });
  }), shots.length > 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 8,
      background: 'var(--bg-elevated)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 12,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "+", shots.length - 4)), Array.isArray(r.feedbackShots) && r.feedbackShots.length > 0 && /*#__PURE__*/React.createElement(AttachThumbs, {
    files: r.feedbackShots,
    size: 48,
    max: 6,
    onPreview: window.__setPreviewImg
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 'auto',
      paddingTop: 6,
      borderTop: '1px solid var(--line-soft)',
      fontSize: 11,
      color: 'var(--ink-4)',
      flexWrap: 'wrap'
    }
  }, fu ? /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 9px',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 700,
      fontSize: 11,
      background: fu.bg,
      color: fu.color
    }
  }, fu.label, fu.state !== 'today' && fu.state !== 'upcoming' ? '' : '', " \xB7 ", r.nextFollowUp) : r.nextFollowUp ? /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCC5 \u4E0B\u6B21 ", r.nextFollowUp) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "\u70B9\u51FB\u7F16\u8F91 \u2192")));
};
var CSModule = function CSModule(_ref2) {
  var _STATUSES$find;
  var user = _ref2.user,
    employees = _ref2.employees,
    records = _ref2.records,
    setRecords = _ref2.setRecords,
    onTrash = _ref2.onTrash,
    toast = _ref2.toast,
    cloudOn = _ref2.cloudOn,
    focusId = _ref2.focusId,
    onOpenQuoteTab = _ref2.onOpenQuoteTab;
  var allSites = useSiteCodes(); // 🆕 fix22 联动 3: 合并 内置 SITES + 自定义网站
  var _useState = useState(todayISO()),
    _useState2 = _slicedToArray(_useState, 2),
    viewDate = _useState2[0],
    setViewDate = _useState2[1];
  var _useState3 = useState('all'),
    _useState4 = _slicedToArray(_useState3, 2),
    filterStatus = _useState4[0],
    setFilterStatus = _useState4[1];
  var _useState5 = useState(function () {
      // 主管/总管默认开启"查看所有员工"
      return user.role === 'admin' || user.role === 'super_admin';
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    showAll = _useState6[0],
    setShowAll = _useState6[1];

  // 搜索 + 筛选
  var _useState7 = useState(''),
    _useState8 = _slicedToArray(_useState7, 2),
    search = _useState8[0],
    setSearch = _useState8[1];
  var _useState9 = useState('all'),
    _useState0 = _slicedToArray(_useState9, 2),
    filterSite = _useState0[0],
    setFilterSite = _useState0[1];
  var _useState1 = useState('all'),
    _useState10 = _slicedToArray(_useState1, 2),
    filterCategory = _useState10[0],
    setFilterCategory = _useState10[1];
  var _useState11 = useState('all'),
    _useState12 = _slicedToArray(_useState11, 2),
    filterDifficulty = _useState12[0],
    setFilterDifficulty = _useState12[1];
  var _useState13 = useState('all'),
    _useState14 = _slicedToArray(_useState13, 2),
    filterOwner = _useState14[0],
    setFilterOwner = _useState14[1]; // 仅 admin 用
  // 🆕 fix71: 排序(模仿电脑文件管理器)— updated/created/date/customer/site/status/difficulty/followup
  var _useState15 = useState('updated'),
    _useState16 = _slicedToArray(_useState15, 2),
    sortBy = _useState16[0],
    setSortBy = _useState16[1];
  var _useState17 = useState('desc'),
    _useState18 = _slicedToArray(_useState17, 2),
    sortDir = _useState18[0],
    setSortDir = _useState18[1];
  var _useState19 = useState(true),
    _useState20 = _slicedToArray(_useState19, 2),
    showFilters = _useState20[0],
    setShowFilters = _useState20[1]; // 默认展开,方便快速查询
  var _useState21 = useState('day'),
    _useState22 = _slicedToArray(_useState21, 2),
    dateRange = _useState22[0],
    setDateRange = _useState22[1]; // day | 7d | 30d | range | all
  var _useState23 = useState(todayISO()),
    _useState24 = _slicedToArray(_useState23, 2),
    rangeStart = _useState24[0],
    setRangeStart = _useState24[1];
  var _useState25 = useState(todayISO()),
    _useState26 = _slicedToArray(_useState25, 2),
    rangeEnd = _useState26[0],
    setRangeEnd = _useState26[1];

  // 主管解锁历史日期编辑（仅当前会话有效，刷新或切日重置）
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    adminUnlock = _useState28[0],
    setAdminUnlock = _useState28[1];

  // 🆕 fix52: 客户档案 360° Modal 状态
  var _useState29 = useState(null),
    _useState30 = _slicedToArray(_useState29, 2),
    customer360Email = _useState30[0],
    setCustomer360Email = _useState30[1];
  var _useState31 = useState(null),
    _useState32 = _slicedToArray(_useState31, 2),
    lightboxImg = _useState32[0],
    setLightboxImg = _useState32[1]; // 🆕 fix84: 截图大图预览(网格+列表共用)
  // 🆕 fix61: 列表 / 网格 视图切换(默认列表,存 localStorage)
  var _useState33 = useState(function () {
      try {
        return localStorage.getItem('cs_card_view') || 'list';
      } catch (_unused) {
        return 'list';
      }
    }),
    _useState34 = _slicedToArray(_useState33, 2),
    cardView = _useState34[0],
    setCardView = _useState34[1];
  var setCardViewPersist = function setCardViewPersist(v) {
    setCardView(v);
    try {
      localStorage.setItem('cs_card_view', v);
    } catch (_unused2) {}
  };
  // 🆕 fix145: 从提醒/搜索跳来 → 收窄筛选定位到该条 + 切列表视图 + 滚动高亮;useRef 防重复
  var csFocusRef = useRef(null);
  var _useState35 = useState(null),
    _useState36 = _slicedToArray(_useState35, 2),
    flashId = _useState36[0],
    setFlashId = _useState36[1];
  useEffect(function () {
    if (!focusId || focusId === csFocusRef.current) return;
    var rec = (records || []).find(function (x) {
      return x.id === focusId;
    });
    if (!rec) return; // 数据还没到/找不到 → 不动,等加载好再触发
    csFocusRef.current = focusId;
    setCardViewPersist('list');
    setViewMode('all');
    setDateRange('all');
    setFilterStatus('all');
    setFilterSite('all');
    setFilterCategory('all');
    setSearch(rec.orderRef || rec.customer || ''); // 收窄到该条,绕开分页/日期把它藏掉
    setFlashId(focusId);
  }, [focusId, records]);
  // flash:滚动到该行并高亮一下
  useEffect(function () {
    if (!flashId) return;
    var tries = [120, 400, 900];
    var timers = tries.map(function (ms) {
      return setTimeout(function () {
        var el = document.getElementById('cs-row-' + flashId);
        if (el) {
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
          el.style.transition = 'box-shadow .3s, background .3s';
          el.style.boxShadow = '0 0 0 3px #2563eb, 0 6px 20px rgba(37,99,235,.25)';
          setTimeout(function () {
            el.style.boxShadow = '';
          }, 2200);
        }
      }, ms);
    });
    var clear = setTimeout(function () {
      return setFlashId(null);
    }, 2600);
    return function () {
      timers.forEach(clearTimeout);
      clearTimeout(clear);
    };
  }, [flashId]);
  // 🆕 视图模式：'day' 按当日 | 'all' 跨日期所有记录（分页显示）
  var _useState37 = useState('day'),
    _useState38 = _slicedToArray(_useState37, 2),
    viewMode = _useState38[0],
    setViewMode = _useState38[1];

  // 🆕 分页 state（"全部"模式下生效）
  var _useState39 = useState(1),
    _useState40 = _slicedToArray(_useState39, 2),
    page = _useState40[0],
    setPage = _useState40[1];
  var _useState41 = useState(50),
    _useState42 = _slicedToArray(_useState41, 2),
    pageSize = _useState42[0],
    setPageSize = _useState42[1];

  // 🆕 时间范围筛选(全部模式下) - all/3d/7d/14d/30d/custom
  var _useState43 = useState('all'),
    _useState44 = _slicedToArray(_useState43, 2),
    timeFilter = _useState44[0],
    setTimeFilter = _useState44[1];
  var _useState45 = useState(''),
    _useState46 = _slicedToArray(_useState45, 2),
    customRangeStart = _useState46[0],
    setCustomRangeStart = _useState46[1];
  var _useState47 = useState(''),
    _useState48 = _slicedToArray(_useState47, 2),
    customRangeEnd = _useState48[0],
    setCustomRangeEnd = _useState48[1];
  // 🆕 fix15: 日期范围筛选(本周/本月/任意月第N周)
  var _useState49 = useState({
      kind: 'all'
    }),
    _useState50 = _slicedToArray(_useState49, 2),
    dateFilter = _useState50[0],
    setDateFilter = _useState50[1];
  var _useState51 = useState(false),
    _useState52 = _slicedToArray(_useState51, 2),
    showUnresolvedOnly = _useState52[0],
    setShowUnresolvedOnly = _useState52[1];
  // 🆕 fix65: 跟进逾期筛选 — all / 1(已逾期) / 3 / 5 / 7 / 10 / 14 / 30(≥N 天逾期)
  var _useState53 = useState('all'),
    _useState54 = _slicedToArray(_useState53, 2),
    followUpFilter = _useState54[0],
    setFollowUpFilter = _useState54[1];

  // 🆕 状态下拉菜单当前打开的行 ID（null = 全部关闭）
  var _useState55 = useState(null),
    _useState56 = _slicedToArray(_useState55, 2),
    statusMenuOpen = _useState56[0],
    setStatusMenuOpen = _useState56[1];
  var _useState57 = useState({
      top: 0,
      left: 0,
      width: 110
    }),
    _useState58 = _slicedToArray(_useState57, 2),
    statusDropdownPos = _useState58[0],
    setStatusDropdownPos = _useState58[1];

  // 全局点击关闭下拉
  useEffect(function () {
    if (!statusMenuOpen) return;
    var handler = function handler(e) {
      if (!e.target.closest('.status-dropdown-wrap') && !e.target.closest('.status-dropdown-portal')) setStatusMenuOpen(null);
    };
    var scrollHandler = function scrollHandler() {
      return setStatusMenuOpen(null);
    }; // 滚动时关闭
    document.addEventListener('click', handler);
    window.addEventListener('scroll', scrollHandler, true);
    return function () {
      document.removeEventListener('click', handler);
      window.removeEventListener('scroll', scrollHandler, true);
    };
  }, [statusMenuOpen]);
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';

  // 个人 vs 团队视图
  var visibleRecords = useMemo(function () {
    var list = records.filter(function (r) {
      return !r.deleted;
    });
    if (!isAdmin || !showAll) {
      list = list.filter(function (r) {
        return r.ownerId === user.id;
      });
    }
    return list;
  }, [records, isAdmin, showAll, user.id]);

  // 切日时自动重置主管解锁
  useEffect(function () {
    if (!isPastDate(viewDate)) setAdminUnlock(false);
  }, [viewDate]);

  // 当日记录
  var dayRecords = useMemo(function () {
    return visibleRecords.filter(function (r) {
      return r.date === viewDate;
    });
  }, [visibleRecords, viewDate]);

  // 🆕 视图源（day = 当日记录,all = 跨日期所有记录）
  var sourceRecords = useMemo(function () {
    if (viewMode === 'all') {
      // 全部模式：所有可见记录（排除空白行）按日期倒序排
      return visibleRecords.filter(isRecordMeaningful).slice().sort(function (a, b) {
        return (b.date || '').localeCompare(a.date || '');
      });
    }
    return dayRecords;
  }, [viewMode, dayRecords, visibleRecords]);

  // 表格显示用：当日 + 搜索/筛选（已应用筛选,未分页）
  var tableRecords = useMemo(function () {
    var list = sourceRecords;
    if (search.trim()) {
      var q = search.trim().toLowerCase();
      list = list.filter(function (r) {
        return (r.customer || '').toLowerCase().includes(q) || (r.orderRef || '').toLowerCase().includes(q) || (r.note || '').toLowerCase().includes(q);
      });
    }
    if (filterStatus !== 'all') list = list.filter(function (r) {
      return r.status === filterStatus;
    });
    if (filterSite !== 'all') list = list.filter(function (r) {
      return r.site === filterSite;
    });
    if (filterCategory !== 'all') list = list.filter(function (r) {
      return r.category === filterCategory;
    });
    if (filterDifficulty !== 'all') list = list.filter(function (r) {
      return r.difficulty === filterDifficulty;
    });
    if (showAll && filterOwner !== 'all') list = list.filter(function (r) {
      return r.ownerId === filterOwner;
    });

    // 🆕 时间范围筛选(仅在全部模式生效) - 改用统一函数
    if (viewMode === 'all') {
      list = filterByTimeRange(list, timeFilter, customRangeStart, customRangeEnd, 'date');
      // 🆕 fix15: 日期范围筛选(本周/本月/任意月第N周)
      list = filterByDateRange(list, dateFilter, 'date');
    }

    // 🆕 只看未解决
    if (showUnresolvedOnly) {
      list = list.filter(function (r) {
        return r.status !== 'resolved' && r.status !== 'transferred';
      });
    }

    // 🆕 fix65: 跟进逾期筛选(≥N 天逾期)
    if (followUpFilter !== 'all') {
      var minDays = parseInt(followUpFilter, 10);
      list = list.filter(function (r) {
        var fi = getFollowUpInfo(r);
        return fi && fi.state === 'overdue' && fi.days >= minDays;
      });
    }

    // 🆕 fix71: 排序(模仿电脑文件管理器)
    var STATUS_ORDER = {
      pending: 0,
      following: 1,
      waiting: 2,
      transferred: 3,
      resolved: 4
    };
    var DIFF_ORDER = {
      easy: 0,
      mid: 1,
      hard: 2
    };
    var sortKey = function sortKey(r) {
      var _STATUS_ORDER$r$statu, _DIFF_ORDER$r$difficu;
      switch (sortBy) {
        case 'updated':
          return r.updatedAt || r.createdAt || r.date || '';
        case 'created':
          return r.createdAt || r.date || '';
        case 'date':
          return (r.date || '') + ' ' + (r.startTime || '');
        case 'customer':
          return (r.customer || '').toLowerCase();
        case 'site':
          return (r.site || '').toLowerCase();
        case 'status':
          return (_STATUS_ORDER$r$statu = STATUS_ORDER[r.status]) !== null && _STATUS_ORDER$r$statu !== void 0 ? _STATUS_ORDER$r$statu : 9;
        case 'difficulty':
          return (_DIFF_ORDER$r$difficu = DIFF_ORDER[r.difficulty]) !== null && _DIFF_ORDER$r$difficu !== void 0 ? _DIFF_ORDER$r$difficu : 9;
        case 'followup':
          return r.nextFollowUp || '9999';
        // 无跟进排最后
        default:
          return r.updatedAt || '';
      }
    };
    list = _toConsumableArray(list).sort(function (a, b) {
      var ka = sortKey(a),
        kb = sortKey(b);
      var cmp = typeof ka === 'number' && typeof kb === 'number' ? ka - kb : String(ka).localeCompare(String(kb));
      return sortDir === 'desc' ? -cmp : cmp;
    });
    return list;
  }, [sourceRecords, search, filterStatus, filterSite, filterCategory, filterDifficulty, filterOwner, isAdmin, showAll, viewMode, timeFilter, customRangeStart, customRangeEnd, dateFilter, showUnresolvedOnly, followUpFilter, sortBy, sortDir]);

  // 🆕 分页后的数据（在全部模式下分页,当日模式直接显示）
  var totalPages = Math.max(1, Math.ceil(tableRecords.length / pageSize));
  var safePage = Math.min(page, totalPages);
  var pagedRecords = useMemo(function () {
    if (viewMode !== 'all') return tableRecords; // 当日模式不分页
    var start = (safePage - 1) * pageSize;
    return tableRecords.slice(start, start + pageSize);
  }, [tableRecords, viewMode, safePage, pageSize]);

  // 切换筛选条件时重置到第 1 页
  useEffect(function () {
    setPage(1);
  }, [viewMode, search, filterStatus, filterSite, filterCategory, filterDifficulty, filterOwner, pageSize]);

  // 导出范围：根据 dateRange 决定，跨日期
  var exportRecords = useMemo(function () {
    var today = todayISO();
    var list = visibleRecords.filter(isRecordMeaningful); // 🆕 排除空白行
    if (dateRange === 'day') {
      list = list.filter(function (r) {
        return r.date === viewDate;
      });
    } else if (dateRange === '7d') {
      var start = addDays(today, -6);
      list = list.filter(function (r) {
        return r.date >= start && r.date <= today;
      });
    } else if (dateRange === '30d') {
      var _start = addDays(today, -29);
      list = list.filter(function (r) {
        return r.date >= _start && r.date <= today;
      });
    } else if (dateRange === 'range') {
      list = list.filter(function (r) {
        return r.date >= rangeStart && r.date <= rangeEnd;
      });
    }
    // 同样应用搜索 + 筛选
    if (search.trim()) {
      var q = search.trim().toLowerCase();
      list = list.filter(function (r) {
        return (r.customer || '').toLowerCase().includes(q) || (r.orderRef || '').toLowerCase().includes(q) || (r.note || '').toLowerCase().includes(q);
      });
    }
    if (filterStatus !== 'all') list = list.filter(function (r) {
      return r.status === filterStatus;
    });
    if (filterSite !== 'all') list = list.filter(function (r) {
      return r.site === filterSite;
    });
    if (filterCategory !== 'all') list = list.filter(function (r) {
      return r.category === filterCategory;
    });
    if (filterDifficulty !== 'all') list = list.filter(function (r) {
      return r.difficulty === filterDifficulty;
    });
    if (isAdmin && showAll && filterOwner !== 'all') list = list.filter(function (r) {
      return r.ownerId === filterOwner;
    });
    return list;
  }, [visibleRecords, dateRange, viewDate, rangeStart, rangeEnd, search, filterStatus, filterSite, filterCategory, filterDifficulty, filterOwner, isAdmin, showAll]);

  // 导出 CSV
  var handleExport = function handleExport() {
    if (exportRecords.length === 0) {
      toast('⚠️ 当前筛选无记录');
      return;
    }
    var header = ['日期', '员工', '状态', '客户', '网站', '开始时间', '结束时间', '时长(分钟)', '难度', '咨询事项', '订单号', '备注', '下次跟进', '截图数', '跟进次数', '创建时间', '更新时间'];
    var rows = [header];
    var diffMap = {
      easy: '简单',
      mid: '中等',
      hard: '复杂'
    };
    var statusMap = Object.fromEntries(STATUSES.map(function (s) {
      return [s.key, s.label];
    }));
    exportRecords.forEach(function (r) {
      var emp = employees.find(function (e) {
        return e.id === r.ownerId;
      });
      rows.push([r.date, emp ? emp.name + (emp.alias ? ' ' + emp.alias : '') : '—', statusMap[r.status] || r.status, r.customer || '', r.site || '', r.startTime || '', r.endTime || '', r.durationMin || 0, diffMap[r.difficulty] || '', r.category || '', r.orderRef || '', r.note || '', r.nextFollowUp || '', (r.screenshots || []).length, (r.followUps || []).length, r.createdAt || '', r.updatedAt || '']);
    });
    var tag = dateRange === 'day' ? viewDate : dateRange === '7d' ? '近7天' : dateRange === '30d' ? '近30天' : dateRange === 'range' ? "".concat(rangeStart, "_").concat(rangeEnd) : '全部';
    var filename = "\u5BA2\u670D\u8DDF\u8FDB_".concat(tag, "_").concat(todayISO(), ".csv");
    downloadCSV(rows, filename);
    toast("\u2713 \u5DF2\u5BFC\u51FA ".concat(exportRecords.length, " \u6761\u8BB0\u5F55"));
  };

  // 🆕 导出 PDF (包含截图) - 用 window.print() 让用户保存为 PDF
  var handleExportPDF = function handleExportPDF() {
    if (tableRecords.length === 0) {
      toast('⚠️ 无可导出的记录');
      return;
    }
    var diffMap = {
      easy: '简单',
      mid: '中等',
      hard: '复杂'
    };
    var statusMap = Object.fromEntries(STATUSES.map(function (s) {
      return [s.key, s.label];
    }));
    var esc = function esc(s) {
      return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    };
    var rangeLabel = viewMode === 'day' ? '日期 ' + viewDate : '跨日期 · 全部记录';
    var filterTags = [];
    if (search.trim()) filterTags.push('关键词: "' + search + '"');
    if (filterStatus !== 'all') filterTags.push('状态: ' + statusMap[filterStatus]);
    if (filterSite !== 'all') filterTags.push('网站: ' + filterSite);
    if (filterCategory !== 'all') filterTags.push('事项: ' + filterCategory);
    if (filterDifficulty !== 'all') filterTags.push('难度: ' + diffMap[filterDifficulty]);
    if (isAdmin && showAll && filterOwner !== 'all') {
      var emp = employees.find(function (e) {
        return e.id === filterOwner;
      });
      filterTags.push('员工: ' + (emp ? emp.name : '?'));
    }

    // 用字符串拼接生成 rowsHTML（避免嵌套 template literal）
    var rowsHTML = tableRecords.map(function (r, i) {
      var emp = employees.find(function (e) {
        return e.id === r.ownerId;
      });
      var empName = emp ? emp.name + (emp.alias ? ' ' + emp.alias : '') : '—';
      var shots = (r.screenshots || []).slice(0, 6);
      var moreShots = (r.screenshots || []).length - 6;
      var shotsHTML = '';
      if (shots.length > 0) {
        var imgsHTML = shots.map(function (s) {
          return '<img src="' + esc(s.url || s.data || '') + '" alt="截图" />';
        }).join('');
        var moreLabel = moreShots > 0 ? '<span class="more">+' + moreShots + ' 张</span>' : '';
        shotsHTML = '<div class="shots">' + imgsHTML + moreLabel + '</div>';
      }
      var followups = (r.followUps || []).map(function (f) {
        return '<div class="fu"><span class="fu-time">' + esc((f.time || '').slice(0, 16)) + '</span> ' + esc(f.text || '') + '</div>';
      }).join('');
      var followupsBlock = followups ? '<div class="fu-list">' + followups + '</div>' : '';
      return '<tr>' + '<td class="num">' + (i + 1) + '</td>' + '<td>' + esc(r.date || '') + '</td>' + '<td><span class="status status-' + r.status + '">' + esc(statusMap[r.status] || r.status) + '</span></td>' + '<td>' + esc(r.customer || '') + '</td>' + '<td>' + esc(empName) + '</td>' + '<td>' + esc(r.site || '') + '</td>' + '<td>' + esc(r.startTime || '') + ' ~ ' + esc(r.endTime || '') + '<br><small>' + (r.durationMin || 0) + ' 分钟</small></td>' + '<td>' + esc(diffMap[r.difficulty] || '') + '</td>' + '<td>' + esc(r.category || '') + '</td>' + '<td>' + esc(r.orderRef || '') + '</td>' + '<td>' + esc(r.note || '') + followupsBlock + '</td>' + '<td>' + esc(r.nextFollowUp || '') + '</td>' + '<td class="img-cell">' + shotsHTML + '</td>' + '</tr>';
    }).join('');
    var filterBanner = filterTags.length > 0 ? '<div class="filters">🔍 <strong>已应用筛选：</strong> ' + filterTags.map(esc).join(' · ') + '</div>' : '';
    var exporterName = (user.name || '') + (user.alias ? ' ' + user.alias : '');
    var html = '<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><title>客服记录 - ' + esc(rangeLabel) + '</title>' + '<link rel="preconnect" href="https://fonts.googleapis.com">' + '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' + '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600;700&display=swap" rel="stylesheet">' + '<style>' + '* { box-sizing: border-box; }' + 'body { font-family: "Noto Sans SC", -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans CN", "Noto Sans CJK SC", "WenQuanYi Micro Hei", "Heiti SC", SimHei, sans-serif; padding: 20px; color: #1d1d1f; font-size: 11px; line-height: 1.5; -webkit-print-color-adjust: exact; print-color-adjust: exact; }' + 'h1 { font-size: 20px; margin: 0 0 4px; }' + '.meta { color: #86868b; font-size: 11px; margin-bottom: 12px; }' + '.filters { padding: 8px 12px; background: #fef3c7; border-radius: 6px; font-size: 11px; color: #854d0e; margin-bottom: 12px; }' + '.filters strong { color: #92400e; }' + 'table { width: 100%; border-collapse: collapse; }' + 'th, td { border: 1px solid #d2d2d7; padding: 6px 8px; vertical-align: top; text-align: left; font-size: 11px; }' + 'th { background: #f5f5f7; font-weight: 600; color: #424245; }' + '.num { text-align: center; color: #86868b; }' + '.status { padding: 1px 6px; border-radius: 10px; font-size: 10px; font-weight: 600; white-space: nowrap; }' + '.status-pending { background: #f5f5f7; color: #525252; }' + '.status-following { background: #fff7ed; color: #9a3412; }' + '.status-waiting { background: #e0f2fe; color: #075985; }' + '.status-resolved { background: #dcfce7; color: #14532d; }' + '.status-transferred { background: #fef3c7; color: #854d0e; }' + '.shots { display: flex; flex-wrap: wrap; gap: 3px; }' + '.shots img { width: 80px; height: 60px; object-fit: cover; border-radius: 3px; border: 1px solid #d2d2d7; }' + '.img-cell { min-width: 180px; }' + '.more { font-size: 10px; color: #86868b; align-self: center; padding: 0 4px; }' + '.fu-list { margin-top: 4px; padding-top: 4px; border-top: 1px dashed #e5e5e5; }' + '.fu { font-size: 10px; color: #424245; margin-bottom: 2px; }' + '.fu-time { color: #86868b; margin-right: 4px; }' + 'small { color: #86868b; }' + '@page { size: A3 landscape; margin: 8mm; }' + '@media print { body { padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; } table { page-break-inside: auto; } tr { page-break-inside: avoid; } .no-print { display: none; } }' + '.toolbar { position: fixed; top: 12px; right: 12px; display: flex; gap: 8px; z-index: 100; }' + '.toolbar button { padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 13px; font-family: inherit; border: none; }' + '.btn-print { background: #0071e3; color: white; }' + '.btn-close { background: white; color: #1d1d1f; border: 1px solid #d2d2d7; }' + '</style></head><body>' + '<div class="toolbar no-print">' + '<button class="btn-print" onclick="window.print()">🖨 保存为 PDF</button>' + '<button class="btn-close" onclick="window.close()">✕ 关闭</button>' + '</div>' + '<h1>📋 客服记录</h1>' + '<div class="meta">' + esc(rangeLabel) + ' · 共 <strong>' + tableRecords.length + '</strong> 条记录 · 导出时间：' + new Date().toLocaleString('zh-CN') + ' · 导出人：' + esc(exporterName) + '</div>' + filterBanner + '<table><thead><tr>' + '<th style="width:32px">#</th>' + '<th style="width:78px">日期</th>' + '<th style="width:65px">状态</th>' + '<th style="min-width:140px">客户</th>' + '<th style="width:90px">员工</th>' + '<th style="width:55px">网站</th>' + '<th style="width:95px">时段</th>' + '<th style="width:45px">难度</th>' + '<th style="width:75px">事项</th>' + '<th style="width:90px">订单号</th>' + '<th style="min-width:160px">备注/跟进</th>' + '<th style="width:75px">下次跟进</th>' + '<th>截图</th>' + '</tr></thead><tbody>' + rowsHTML + '</tbody></table>' + '<script>' + 'window.addEventListener("load", function() {' + 'setTimeout(function() {' + 'var imgs = Array.from(document.images);' + 'var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();' + 'var imgsReady = Promise.all(imgs.map(function(img) {' + 'return img.complete ? Promise.resolve() : new Promise(function(res) { img.onload = img.onerror = res; });' + '}));' + 'Promise.all([fontsReady, imgsReady]).then(function() {' + 'setTimeout(function() { window.print(); }, 300);' + '});' + '}, 100);' + '});' + '</' + 'script></body></html>';
    var w = window.open('', '_blank', 'width=1200,height=800');
    if (!w) {
      alert('请允许浏览器弹出窗口才能导出 PDF');
      return;
    }
    w.document.open();
    w.document.write(html);
    w.document.close();
    toast('✓ 已生成 ' + tableRecords.length + ' 条记录的 PDF 预览,请在新窗口点"保存为 PDF"');
  };

  // 跟进提醒 - 主管始终看所有员工（不受"查看所有员工"开关影响）
  var today = todayISO();
  // 🆕 报价单跟进:把报价单里勾了「需跟进」的(quotations.data.need_followup)也并进跟进提醒
  var _useState59 = useState([]),
    _useState60 = _slicedToArray(_useState59, 2),
    quoteReminders = _useState60[0],
    setQuoteReminders = _useState60[1];
  useEffect(function () {
    if (!cloudOn) return;
    var cancelled = false;
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var rows, mapped;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            _context.n = 1;
            return CLOUD.list('quotations', {
              select: 'id,created_by_name,pi_no,buyer_name,amount,currency,status,trashed,need_followup:data->>need_followup,followup_date:data->>followup_date',
              limit: 1000
            });
          case 1:
            rows = _context.v;
            if (!(cancelled || !rows)) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            mapped = rows.map(function (q) {
              var nf = q.need_followup !== undefined ? q.need_followup : q.data && q.data.need_followup;
              var fd = q.followup_date !== undefined ? q.followup_date : q.data && q.data.followup_date;
              return {
                q: q,
                nf: nf === true || nf === 'true',
                fd: (fd || '').trim()
              };
            }).filter(function (x) {
              return x.nf && x.fd && !x.q.trashed && !['won', 'lost', 'archived'].includes(x.q.status);
            }).map(function (_ref4) {
              var q = _ref4.q,
                fd = _ref4.fd;
              var owner = employees.find(function (e) {
                return [e.alias, e.name, ((e.name || '') + ' ' + (e.alias || '')).trim()].includes(q.created_by_name);
              });
              var amt = q.amount != null && q.amount !== '' ? (q.currency || 'USD') + ' ' + Number(q.amount).toLocaleString() : '';
              return {
                id: 'quote_' + q.id,
                isQuote: true,
                quoteId: q.id,
                nextFollowUp: fd,
                status: 'following',
                ownerId: owner ? owner.id : null,
                ownerName: q.created_by_name || '',
                customer: q.buyer_name || '',
                orderRef: q.pi_no || '',
                note: '报价单' + (amt ? ' · ' + amt : ''),
                site: '报价'
              };
            });
            setQuoteReminders(mapped);
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }))();
    return function () {
      cancelled = true;
    };
  }, [cloudOn, employees]);
  var reminders = useMemo(function () {
    var allLive = records.filter(function (r) {
      return !r.deleted && r.status !== 'resolved' && r.nextFollowUp;
    });
    var base = isAdmin ? allLive : allLive.filter(function (r) {
      return r.ownerId === user.id;
    });
    var q = isAdmin ? quoteReminders : quoteReminders.filter(function (r) {
      return r.ownerId === user.id;
    });
    return [].concat(_toConsumableArray(base), _toConsumableArray(q));
  }, [records, isAdmin, user.id, quoteReminders]);
  var overdueCount = reminders.filter(function (r) {
    return r.nextFollowUp < today;
  }).length;
  var todayCount = reminders.filter(function (r) {
    return r.nextFollowUp === today;
  }).length;
  var futureCount = reminders.filter(function (r) {
    return r.nextFollowUp > today;
  }).length;
  var waitingCount = reminders.filter(function (r) {
    return r.status === 'waiting';
  }).length;

  // 统计卡片数据 - 仅统计"有内容"的记录（空白行不算）
  var stats = useMemo(function () {
    var meaningful = dayRecords.filter(isRecordMeaningful);
    var totalEmails = meaningful.length;
    var totalMins = meaningful.reduce(function (s, r) {
      return s + (r.durationMin || 0);
    }, 0);
    var easyN = meaningful.filter(function (r) {
      return r.difficulty === 'easy';
    }).length;
    var midN = meaningful.filter(function (r) {
      return r.difficulty === 'mid';
    }).length;
    var hardN = meaningful.filter(function (r) {
      return r.difficulty === 'hard';
    }).length;
    var followingN = meaningful.filter(function (r) {
      return r.status !== 'resolved';
    }).length;
    return {
      totalEmails: totalEmails,
      totalMins: totalMins,
      easyN: easyN,
      midN: midN,
      hardN: hardN,
      followingN: followingN
    };
  }, [dayRecords]);

  // 添加新行
  var addRow = function addRow() {
    // 🆕 如果当前日期已经有一行完全空白的（用户点过 + 但没填任何东西）
    var emptyRow = dayRecords.find(function (r) {
      return !isRecordMeaningful(r);
    });
    if (emptyRow) {
      // 在"全部"模式下空白行被隐藏,自动切到"当日"让用户看到
      if (viewMode === 'all') {
        setViewMode('day');
        toast('💡 已切到「按当日」模式,有一行空白行待填写');
      } else {
        toast('💡 已经有一个空白行了,请先填写');
      }
      return;
    }
    // 在"全部记录"模式下加新行 → 自动切回当日模式
    if (viewMode === 'all') {
      setViewMode('day');
    }
    var newRec = {
      id: uid(),
      ownerId: user.id,
      date: viewDate,
      createdAt: nowISO(),
      updatedAt: nowISO(),
      status: 'pending',
      customer: '',
      site: '',
      startTime: '',
      endTime: '',
      durationMin: 0,
      difficulty: '',
      diffSuggested: false,
      category: '',
      orderRef: '',
      note: '',
      nextFollowUp: '',
      isFeedback: false,
      // 🆕 fix82: 标记为「问题反馈」
      feedbackNote: '',
      // 🆕 fix82: 问题反馈说明
      feedbackShots: [],
      // 🆕 fix82: 问题反馈截图 [{id,data,name}]
      screenshots: [],
      // [{id, data, name}]
      followUps: [],
      // [{id, time, text, status, screenshots}]
      deleted: false
    };
    setRecords(function (prev) {
      return [].concat(_toConsumableArray(prev), [newRec]);
    });
  };

  // 🆕 自动清理：切换日期/重启时,清除所有未填内容的空白行
  useEffect(function () {
    // 不要立即清,让用户有 30 秒输入时间
    var t = setTimeout(function () {
      setRecords(function (prev) {
        // 仅清理"非当前日期"的空白行（避免清掉用户正在编辑的）
        var cleaned = prev.filter(function (r) {
          return r.date === viewDate ||
          // 当前日期保留
          isRecordMeaningful(r) ||
          // 有内容保留
          r.deleted;
        } // 已删除标记保留
        );
        if (cleaned.length === prev.length) return prev; // 没变化
        return cleaned;
      });
    }, 30000); // 30 秒后才清理
    return function () {
      return clearTimeout(t);
    };
  }, [viewDate]);

  // 更新字段
  var updateRow = function updateRow(id, patch) {
    setRecords(function (prev) {
      return prev.map(function (r) {
        if (r.id !== id) return r;
        var updated = _objectSpread(_objectSpread(_objectSpread({}, r), patch), {}, {
          updatedAt: nowISO()
        });
        // 自动计算时长
        if (patch.startTime !== undefined || patch.endTime !== undefined) {
          updated.durationMin = minutesBetween(updated.startTime, updated.endTime);
          // 时长变动 -> 重新建议难度 (如果还是建议态)
          if (updated.diffSuggested || !updated.difficulty) {
            var sug = suggestDifficulty(updated.category, updated.durationMin);
            updated.difficulty = sug;
            updated.diffSuggested = true;
          }
        }
        // 类别变动 -> 重新建议难度 (如果还是建议态)
        if (patch.category !== undefined && (updated.diffSuggested || !updated.difficulty)) {
          var _sug = suggestDifficulty(patch.category, updated.durationMin);
          updated.difficulty = _sug;
          updated.diffSuggested = true;
        }
        // 设置了 nextFollowUp 自动切换到 following
        if (patch.nextFollowUp && updated.status === 'pending') {
          updated.status = 'following';
        }
        return updated;
      });
    });
  };

  // 删除 (软删除到回收站)
  var deleteRow = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return wsConfirm('确认放入回收站？主管可恢复。');
          case 1:
            if (_context2.v) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2);
          case 2:
            setRecords(function (prev) {
              return prev.map(function (r) {
                return r.id === id ? _objectSpread(_objectSpread({}, r), {}, {
                  deleted: true,
                  deletedAt: nowISO(),
                  deletedBy: user.id
                }) : r;
              });
            });
            toast('✓ 已放入回收站');
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function deleteRow(_x) {
      return _ref5.apply(this, arguments);
    };
  }();

  // 计算状态 (含逾期判定)
  var getDisplayStatus = function getDisplayStatus(r) {
    if (r.status === 'resolved') return 'resolved';
    if (r.nextFollowUp && r.nextFollowUp < today) return 'overdue';
    return r.status;
  };

  // 跟进窗口 modal state
  var _useState61 = useState(null),
    _useState62 = _slicedToArray(_useState61, 2),
    followUpModal = _useState62[0],
    setFollowUpModal = _useState62[1]; // record id or null
  // 跟进提醒展开/折叠
  var _useState63 = useState(false),
    _useState64 = _slicedToArray(_useState63, 2),
    remindersExpanded = _useState64[0],
    setRemindersExpanded = _useState64[1];
  // 🆕 fix104: 跟进提醒视角 — all(全部)/ self(本人)/ <empId>(单独看某人);标星员工持久化到本地
  var _useState65 = useState(isAdmin ? 'all' : 'self'),
    _useState66 = _slicedToArray(_useState65, 2),
    reminderViewer = _useState66[0],
    setReminderViewer = _useState66[1];
  var _useState67 = useState(function () {
      try {
        return JSON.parse(localStorage.getItem('cs_starred_staff') || '[]');
      } catch (e) {
        return [];
      }
    }),
    _useState68 = _slicedToArray(_useState67, 2),
    starredStaff = _useState68[0],
    setStarredStaff = _useState68[1];
  var toggleStar = function toggleStar(id) {
    return setStarredStaff(function (prev) {
      var next = prev.includes(id) ? prev.filter(function (x) {
        return x !== id;
      }) : [].concat(_toConsumableArray(prev), [id]);
      try {
        localStorage.setItem('cs_starred_staff', JSON.stringify(next));
      } catch (e) {}
      return next;
    });
  };
  // 转交 modal
  var _useState69 = useState(null),
    _useState70 = _slicedToArray(_useState69, 2),
    transferModal = _useState70[0],
    setTransferModal = _useState70[1]; // record id
  // 批量转交 modal
  var _useState71 = useState(null),
    _useState72 = _slicedToArray(_useState71, 2),
    batchTransferModal = _useState72[0],
    setBatchTransferModal = _useState72[1]; // {fromUserId: ...} or null
  // 转交通知（首次进入 tab 时检测）
  var _useState73 = useState(false),
    _useState74 = _slicedToArray(_useState73, 2),
    transferNoticeShown = _useState74[0],
    setTransferNoticeShown = _useState74[1];

  // 计算"转给我但还没看的"工作
  var incomingTransfers = useMemo(function () {
    return records.filter(function (r) {
      return !r.deleted && r.transferUnreadFor === user.id && r.ownerId === user.id;
    });
  }, [records, user.id]);

  // 首次进入 tab 时弹通知
  useEffect(function () {
    if (incomingTransfers.length > 0 && !transferNoticeShown) {
      setTransferNoticeShown(true); // 标记已弹过（同一次会话不重复弹）
    }
  }, [incomingTransfers.length, transferNoticeShown]);

  // 排序 reminders: 逾期 → 今日 → 未来
  var sortedReminders = useMemo(function () {
    var list = reminders;
    if (reminderViewer === 'self') list = reminders.filter(function (r) {
      return r.ownerId === user.id;
    });else if (reminderViewer !== 'all') list = reminders.filter(function (r) {
      return r.ownerId === reminderViewer;
    }); // 单独看某人
    return _toConsumableArray(list).sort(function (a, b) {
      var aDate = a.nextFollowUp || '9999-99-99';
      var bDate = b.nextFollowUp || '9999-99-99';
      return aDate.localeCompare(bDate);
    });
  }, [reminders, reminderViewer, user.id]);

  // 🆕 高频投诉客户监控（同邮箱 ≥5 封记录 = 疑似投诉/重要客户）
  var HIGH_FREQ_THRESHOLD = 5;
  var highFreqCustomers = useMemo(function () {
    if (!isAdmin) return []; // 只主管视角看
    var emailMap = {};
    records.filter(function (r) {
      return !r.deleted && r.customer;
    }).forEach(function (r) {
      var email = r.customer.trim().toLowerCase();
      if (!email) return;
      if (!emailMap[email]) emailMap[email] = [];
      emailMap[email].push(r);
    });
    return Object.entries(emailMap).filter(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
        list = _ref7[1];
      return list.length >= HIGH_FREQ_THRESHOLD;
    }).map(function (_ref8) {
      var _ref9 = _slicedToArray(_ref8, 2),
        email = _ref9[0],
        list = _ref9[1];
      var unresolved = list.filter(function (r) {
        return r.status !== 'resolved';
      }).length;
      var owners = _toConsumableArray(new Set(list.map(function (r) {
        return r.ownerId;
      }))).map(function (id) {
        var _employees$find2;
        return (_employees$find2 = employees.find(function (e) {
          return e.id === id;
        })) === null || _employees$find2 === void 0 ? void 0 : _employees$find2.name;
      }).filter(Boolean);
      var latestDate = list.map(function (r) {
        return r.date;
      }).sort().slice(-1)[0];
      return {
        email: email,
        count: list.length,
        unresolved: unresolved,
        owners: owners,
        latestDate: latestDate,
        records: list
      };
    }).sort(function (a, b) {
      return b.unresolved - a.unresolved || b.count - a.count;
    });
  }, [records, isAdmin, employees]);

  // 高频客户面板展开
  var _useState75 = useState(false),
    _useState76 = _slicedToArray(_useState75, 2),
    highFreqExpanded = _useState76[0],
    setHighFreqExpanded = _useState76[1];

  // 🆕 事件管理 (售后/补件/退款) + 供应商
  var _useState77 = useState([]),
    _useState78 = _slicedToArray(_useState77, 2),
    suppliers = _useState78[0],
    setSuppliers = _useState78[1];
  var _useState79 = useState([]),
    _useState80 = _slicedToArray(_useState79, 2),
    aftersales = _useState80[0],
    setAftersales = _useState80[1];
  var _useState81 = useState([]),
    _useState82 = _slicedToArray(_useState81, 2),
    refills = _useState82[0],
    setRefills = _useState82[1];
  var _useState83 = useState([]),
    _useState84 = _slicedToArray(_useState83, 2),
    refunds = _useState84[0],
    setRefunds = _useState84[1];
  var _useState85 = useState(null),
    _useState86 = _slicedToArray(_useState85, 2),
    eventEditor = _useState86[0],
    setEventEditor = _useState86[1]; // { kind, record, existingEvent? }
  var _useState87 = useState(null),
    _useState88 = _slicedToArray(_useState87, 2),
    smartEditor = _useState88[0],
    setSmartEditor = _useState88[1]; // 🆕 { kind:'chargeback'|'custom'|'photo', record }
  // 🆕 fix9b: 6 大事件按钮(售后/补件/退款/拒付/定制/实拍)默认折叠,避免每条记录都一大坨按钮
  // 大部分跟进只是回复客户邮件,不需要这些事件;有需要再展开
  // 已被打标(category=拒付/定制咨询/实拍)的记录默认展开,方便快速进入
  var _useState89 = useState(function () {
      return new Set();
    }),
    _useState90 = _slicedToArray(_useState89, 2),
    expandedEventActions = _useState90[0],
    setExpandedEventActions = _useState90[1];
  var toggleEventActions = function toggleEventActions(id) {
    return setExpandedEventActions(function (prev) {
      var next = new Set(prev);
      if (next.has(id)) next["delete"](id);else next.add(id);
      return next;
    });
  };

  // 启动时加载这些数据
  useEffect(function () {
    if (!cloudOn) return;
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _yield$Promise$all, _yield$Promise$all2, sup, af, rf, rfd, _t;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return Promise.all([CLOUD.list('suppliers', {
              order: {
                col: 'name',
                asc: true
              },
              limit: 1000
            }), CLOUD.list('aftersales', {
              order: {
                col: 'created_at',
                asc: false
              },
              limit: 500
            }), CLOUD.list('refills', {
              order: {
                col: 'created_at',
                asc: false
              },
              limit: 500
            }), CLOUD.list('refunds', {
              order: {
                col: 'created_at',
                asc: false
              },
              limit: 500
            })]);
          case 1:
            _yield$Promise$all = _context3.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 4);
            sup = _yield$Promise$all2[0];
            af = _yield$Promise$all2[1];
            rf = _yield$Promise$all2[2];
            rfd = _yield$Promise$all2[3];
            if (sup) setSuppliers(sup);
            // 🆕 fix9b: 过滤掉软删除的记录(列表不再回弹已删除的) — aftersales/refills/refunds
            if (af) setAftersales(af.filter(function (x) {
              return !x.deleted;
            }));
            if (rf) setRefills(rf.filter(function (x) {
              return !x.deleted;
            }));
            if (rfd) setRefunds(rfd.filter(function (x) {
              return !x.deleted;
            }));
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t = _context3.v;
            console.error('加载事件数据失败:', _t);
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }))();
  }, [cloudOn]);

  // 事件 CRUD
  var handleEventSaved = function handleEventSaved(savedEvent) {
    var nextAftersales = aftersales;
    var nextRefills = refills;
    var nextRefunds = refunds;
    if (eventEditor.kind === 'aftersale') {
      nextAftersales = function () {
        var idx = aftersales.findIndex(function (e) {
          return e.id === savedEvent.id;
        });
        if (idx >= 0) {
          var next = _toConsumableArray(aftersales);
          next[idx] = savedEvent;
          return next;
        }
        return [savedEvent].concat(_toConsumableArray(aftersales));
      }();
      setAftersales(nextAftersales);
    } else if (eventEditor.kind === 'refill') {
      nextRefills = function () {
        var idx = refills.findIndex(function (e) {
          return e.id === savedEvent.id;
        });
        if (idx >= 0) {
          var next = _toConsumableArray(refills);
          next[idx] = savedEvent;
          return next;
        }
        return [savedEvent].concat(_toConsumableArray(refills));
      }();
      setRefills(nextRefills);
    } else if (eventEditor.kind === 'refund') {
      nextRefunds = function () {
        var idx = refunds.findIndex(function (e) {
          return e.id === savedEvent.id;
        });
        if (idx >= 0) {
          var next = _toConsumableArray(refunds);
          next[idx] = savedEvent;
          return next;
        }
        return [savedEvent].concat(_toConsumableArray(refunds));
      }();
      setRefunds(nextRefunds);
    }
    // 同步更新 cache 让顶部徽章实时更新
    STORE.set('events_cache', {
      aftersales: nextAftersales,
      refunds: nextRefunds,
      refills: nextRefills
    });
    toast("\u2713 ".concat(eventEditor.kind === 'aftersale' ? '售后' : eventEditor.kind === 'refill' ? '补件' : '退款', "\u4E8B\u4EF6\u5DF2\u4FDD\u5B58"));
  };

  // 计算某条 record 关联的事件
  var getRecordEvents = function getRecordEvents(recordId) {
    return {
      aftersales: aftersales.filter(function (e) {
        return e.record_id === recordId;
      }),
      refills: refills.filter(function (e) {
        return e.record_id === recordId;
      }),
      refunds: refunds.filter(function (e) {
        return e.record_id === recordId;
      })
    };
  };

  // 🆕 生成日报/周报/团队周报
  var generateReport = function generateReport(mode) {
    var today = todayISO();
    var startDate, endDate, title;
    if (mode === 'day') {
      startDate = endDate = today;
      title = "\uD83D\uDCCB \u5BA2\u670D\u65E5\u62A5 \xB7 ".concat(today);
    } else if (mode === 'week') {
      var t = new Date(today);
      var wd = t.getDay() || 7; // 1=周一 ... 7=周日
      var monday = new Date(t);
      monday.setDate(t.getDate() - wd + 1);
      startDate = monday.toISOString().slice(0, 10);
      endDate = today;
      title = "\uD83D\uDCC5 \u5BA2\u670D\u5468\u62A5 \xB7 ".concat(startDate, " ~ ").concat(endDate);
    } else {
      // team
      var _t2 = new Date(today);
      var _wd = _t2.getDay() || 7;
      var _monday = new Date(_t2);
      _monday.setDate(_t2.getDate() - _wd + 1);
      startDate = _monday.toISOString().slice(0, 10);
      endDate = today;
      title = "\uD83D\uDC65 \u56E2\u961F\u5468\u62A5 \xB7 ".concat(startDate, " ~ ").concat(endDate);
    }
    // 数据范围
    var scope = mode === 'team' ? records.filter(function (r) {
      return !r.deleted;
    }) // 全员
    : records.filter(function (r) {
      return !r.deleted && r.ownerId === user.id;
    }); // 我的
    var inRange = scope.filter(function (r) {
      return r.date >= startDate && r.date <= endDate;
    });
    var report = "".concat(title, "\n");
    report += "\u751F\u6210\u4EBA\uFF1A".concat(user.name).concat(user.alias ? ' ' + user.alias : '', "\n");
    report += "\u751F\u6210\u65F6\u95F4\uFF1A".concat(nowISO().slice(0, 16).replace('T', ' '), "\n");
    report += "".concat('═'.repeat(40), "\n\n");
    if (mode === 'team') {
      // 团队周报 - 按员工分组
      var byOwner = {};
      inRange.forEach(function (r) {
        if (!byOwner[r.ownerId]) byOwner[r.ownerId] = [];
        byOwner[r.ownerId].push(r);
      });
      report += "\uD83D\uDCCA \u672C\u5468\u56E2\u961F\u6574\u4F53\u8868\u73B0\n";
      report += "\u2022 \u603B\u90AE\u4EF6\u6570\uFF1A".concat(inRange.length, " \u5C01\n");
      report += "\u2022 \u603B\u65F6\u957F\uFF1A".concat(fmtDuration(inRange.reduce(function (s, r) {
        return s + (r.durationMin || 0);
      }, 0)), "\n");
      report += "\u2022 \u5DF2\u89E3\u51B3\uFF1A".concat(inRange.filter(function (r) {
        return r.status === 'resolved';
      }).length, " \u5355\n");
      report += "\u2022 \u903E\u671F\u672A\u8DDF\uFF1A".concat(inRange.filter(function (r) {
        return r.status !== 'resolved' && r.nextFollowUp && r.nextFollowUp < today;
      }).length, " \u5355\n");
      report += "\u2022 \u5347\u7EA7\u5230\u4E3B\u7BA1\uFF1A".concat(inRange.filter(function (r) {
        return r.escalated;
      }).length, " \u5355\n\n");
      report += "\uD83D\uDC65 \u5458\u5DE5\u660E\u7EC6\n";
      Object.entries(byOwner).forEach(function (_ref1) {
        var _ref10 = _slicedToArray(_ref1, 2),
          oid = _ref10[0],
          list = _ref10[1];
        var emp = employees.find(function (e) {
          return e.id === oid;
        });
        var resolved = list.filter(function (r) {
          return r.status === 'resolved';
        }).length;
        var mins = list.reduce(function (s, r) {
          return s + (r.durationMin || 0);
        }, 0);
        report += "\n\u2014 ".concat((emp === null || emp === void 0 ? void 0 : emp.name) || '?').concat(emp !== null && emp !== void 0 && emp.alias ? ' ' + emp.alias : '', "\n");
        report += "  \u90AE\u4EF6 ".concat(list.length, " \u5C01 \xB7 \u603B\u65F6\u957F ").concat(fmtDuration(mins), " \xB7 \u5DF2\u89E3\u51B3 ").concat(resolved, " \u5355");
        if (list.filter(function (r) {
          return r.escalated;
        }).length > 0) {
          report += " \xB7 \u5347\u7EA7 ".concat(list.filter(function (r) {
            return r.escalated;
          }).length);
        }
      });
    } else {
      // 日报/周报 - 个人
      var easy = inRange.filter(function (r) {
        return r.difficulty === 'easy';
      }).length;
      var mid = inRange.filter(function (r) {
        return r.difficulty === 'mid';
      }).length;
      var hard = inRange.filter(function (r) {
        return r.difficulty === 'hard';
      }).length;
      var resolved = inRange.filter(function (r) {
        return r.status === 'resolved';
      }).length;
      var escalated = inRange.filter(function (r) {
        return r.escalated;
      }).length;
      report += "\uD83D\uDCCA ".concat(mode === 'day' ? '今日' : '本周', "\u6570\u636E\n");
      report += "\u2022 \u90AE\u4EF6\u603B\u6570\uFF1A".concat(inRange.length, " \u5C01\n");
      report += "\u2022 \u603B\u65F6\u957F\uFF1A".concat(fmtDuration(inRange.reduce(function (s, r) {
        return s + (r.durationMin || 0);
      }, 0)), "\n");
      report += "\u2022 \u96BE\u5EA6\u5206\u5E03\uFF1A\u7B80\u5355 ".concat(easy, " / \u4E2D\u7B49 ").concat(mid, " / \u590D\u6742 ").concat(hard, "\n");
      report += "\u2022 \u5DF2\u89E3\u51B3\uFF1A".concat(resolved, " \u5355\uFF08").concat(inRange.length > 0 ? Math.round(resolved / inRange.length * 100) : 0, "%\uFF09\n");
      if (escalated > 0) report += "\u2022 \u5DF2\u5347\u7EA7\u4E3B\u7BA1\uFF1A".concat(escalated, " \u5355\n");

      // 按网站分类
      var bySite = {};
      inRange.forEach(function (r) {
        if (!r.site) return;
        bySite[r.site] = (bySite[r.site] || 0) + 1;
      });
      if (Object.keys(bySite).length > 0) {
        report += "\n\uD83C\uDF10 \u7F51\u7AD9\u5206\u5E03\n";
        Object.entries(bySite).sort(function (a, b) {
          return b[1] - a[1];
        }).forEach(function (_ref11) {
          var _ref12 = _slicedToArray(_ref11, 2),
            s = _ref12[0],
            n = _ref12[1];
          report += "\u2022 ".concat(s, "\uFF1A").concat(n, " \u5C01\n");
        });
      }

      // 咨询事项分布
      var byCat = {};
      inRange.forEach(function (r) {
        if (!r.category) return;
        byCat[r.category] = (byCat[r.category] || 0) + 1;
      });
      if (Object.keys(byCat).length > 0) {
        report += "\n\uD83D\uDCCB \u54A8\u8BE2\u4E8B\u9879 TOP 5\n";
        Object.entries(byCat).sort(function (a, b) {
          return b[1] - a[1];
        }).slice(0, 5).forEach(function (_ref13) {
          var _ref14 = _slicedToArray(_ref13, 2),
            c = _ref14[0],
            n = _ref14[1];
          report += "\u2022 ".concat(c, "\uFF1A").concat(n, " \u5C01\n");
        });
      }

      // 跟进中工作
      var pendingNext = scope.filter(function (r) {
        return r.status !== 'resolved' && r.nextFollowUp;
      });
      var overdue = pendingNext.filter(function (r) {
        return r.nextFollowUp < today;
      });
      var todayDue = pendingNext.filter(function (r) {
        return r.nextFollowUp === today;
      });
      if (overdue.length + todayDue.length > 0) {
        report += "\n\u26A0 \u5F85\u8DDF\u8FDB\n";
        if (overdue.length > 0) report += "\u2022 \u903E\u671F\uFF1A".concat(overdue.length, " \u5355\n");
        if (todayDue.length > 0) report += "\u2022 \u4ECA\u65E5\u5230\u671F\uFF1A".concat(todayDue.length, " \u5355\n");
      }
    }
    report += "\n".concat('─'.repeat(40), "\n\u751F\u6210\u81EA\u7EDF\u4E00\u5DE5\u4F5C\u53F0");

    // 复制到剪贴板
    var ta = document.createElement('textarea');
    ta.value = report;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      toast('✓ 报告已复制到剪贴板，可粘贴到微信/钉钉/邮件');
    } catch (e) {
      // 失败时弹窗显示
      alert(report);
    }
    document.body.removeChild(ta);
  };

  // 转交工作 - 改 ownerId + 保留历史 + 通知新负责人
  var transferRecord = function transferRecord(recordId, newOwnerId) {
    var r = records.find(function (rr) {
      return rr.id === recordId;
    });
    if (!r) return;
    var oldOwner = employees.find(function (e) {
      return e.id === r.ownerId;
    });
    var newOwner = employees.find(function (e) {
      return e.id === newOwnerId;
    });
    if (!newOwner) return;
    var historyEntry = {
      from: r.ownerId,
      fromName: (oldOwner === null || oldOwner === void 0 ? void 0 : oldOwner.name) + (oldOwner !== null && oldOwner !== void 0 && oldOwner.alias ? ' ' + oldOwner.alias : ''),
      to: newOwnerId,
      toName: newOwner.name + (newOwner.alias ? ' ' + newOwner.alias : ''),
      by: user.id,
      byName: user.name + (user.alias ? ' ' + user.alias : ''),
      at: nowISO()
    };
    updateRow(recordId, {
      ownerId: newOwnerId,
      transferHistory: [].concat(_toConsumableArray(r.transferHistory || []), [historyEntry]),
      transferUnreadFor: newOwnerId // 标记新负责人有未读
    });
    toast("\u2713 \u5DF2\u5C06\u5DE5\u4F5C\u4ECE ".concat((oldOwner === null || oldOwner === void 0 ? void 0 : oldOwner.name) || '?', " \u8F6C\u4EA4\u7ED9 ").concat(newOwner.name).concat(newOwner.alias ? ' ' + newOwner.alias : ''));
    setTransferModal(null);
  };

  // 批量转交
  var batchTransferRecords = function batchTransferRecords(recordIds, newOwnerId) {
    var newOwner = employees.find(function (e) {
      return e.id === newOwnerId;
    });
    if (!newOwner || recordIds.length === 0) return;
    var nowStr = nowISO();
    setRecords(function (prev) {
      return prev.map(function (r) {
        if (!recordIds.includes(r.id)) return r;
        var oldOwner = employees.find(function (e) {
          return e.id === r.ownerId;
        });
        var historyEntry = {
          from: r.ownerId,
          fromName: (oldOwner === null || oldOwner === void 0 ? void 0 : oldOwner.name) + (oldOwner !== null && oldOwner !== void 0 && oldOwner.alias ? ' ' + oldOwner.alias : ''),
          to: newOwnerId,
          toName: newOwner.name + (newOwner.alias ? ' ' + newOwner.alias : ''),
          by: user.id,
          byName: user.name + (user.alias ? ' ' + user.alias : ''),
          at: nowStr
        };
        return _objectSpread(_objectSpread({}, r), {}, {
          ownerId: newOwnerId,
          transferHistory: [].concat(_toConsumableArray(r.transferHistory || []), [historyEntry]),
          transferUnreadFor: newOwnerId,
          updatedAt: nowStr
        });
      });
    });
    toast("\u2713 \u6279\u91CF\u8F6C\u4EA4 ".concat(recordIds.length, " \u5355\u7ED9 ").concat(newOwner.name).concat(newOwner.alias ? ' ' + newOwner.alias : ''));
    setBatchTransferModal(null);
  };

  // 标记转交通知已读
  var markTransferRead = function markTransferRead(recordId) {
    updateRow(recordId, {
      transferUnreadFor: null
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-5"
  }, /*#__PURE__*/React.createElement(DailyGreeting, {
    user: user
  }), /*#__PURE__*/React.createElement(BriefingCard, {
    user: user,
    toast: toast
  }), incomingTransfers.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4 fade-in",
    style: {
      background: '#fef7ec',
      border: '1.5px solid var(--gold)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-3 flex-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "\uD83D\uDCEC"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: '#854d0e'
    }
  }, "\u4F60\u63A5\u5230\u4E86 ", incomingTransfers.length, " \u5355\u8F6C\u4EA4\u5DE5\u4F5C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#a16207',
      marginTop: 2
    }
  }, "\u4EE5\u4E0B\u5DE5\u4F5C\u5DF2\u8F6C\u7ED9\u4F60\uFF0C\u8BF7\u5C3D\u5FEB\u786E\u8BA4\u63A5\u624B\uFF1A", incomingTransfers.slice(0, 3).map(function (r) {
    var last = (r.transferHistory || []).slice(-1)[0];
    return " ".concat(r.orderRef || r.customer || '?', "\uFF08\u6765\u81EA ").concat((last === null || last === void 0 ? void 0 : last.fromName) || '?', "\uFF09");
  }).join('；'), incomingTransfers.length > 3 && " \u7B49 ".concat(incomingTransfers.length, " \u5355")))), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    style: {
      padding: '6px 14px',
      fontSize: 12
    },
    onClick: function onClick() {
      // 一键标记全部已读
      incomingTransfers.forEach(function (r) {
        return markTransferRead(r.id);
      });
      toast("\u2713 \u5DF2\u786E\u8BA4 ".concat(incomingTransfers.length, " \u5355\u8F6C\u4EA4"));
    }
  }, "\u2713 \u786E\u8BA4\u63A5\u624B\u5168\u90E8"))), highFreqCustomers.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl fade-in",
    style: {
      overflow: 'hidden',
      background: '#fef2f2',
      border: '1.5px solid #f87171'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 flex items-center justify-between gap-3 flex-wrap",
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setHighFreqExpanded(function (v) {
        return !v;
      });
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "\uD83C\uDD98"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: '#991b1b'
    }
  }, "\u53D1\u73B0 ", highFreqCustomers.length, " \u4E2A\u9AD8\u9891\u6295\u8BC9/\u91CD\u8981\u5BA2\u6237"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#b91c1c',
      marginTop: 2
    }
  }, "\u8FD9\u4E9B\u90AE\u7BB1\u6709 \u22655 \u5C01\u5386\u53F2\u90AE\u4EF6 \xB7 \u5171 ", highFreqCustomers.reduce(function (s, c) {
    return s + c.unresolved;
  }, 0), " \u5355\u672A\u89E3\u51B3"))), /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost",
    style: {
      padding: '4px 10px',
      fontSize: 11
    }
  }, highFreqExpanded ? '▲ 收起' : '▼ 查看详情')), highFreqExpanded && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #fca5a5',
      maxHeight: 380,
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  }, highFreqCustomers.map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c.email,
      style: {
        padding: '12px 16px',
        borderBottom: '1px solid #fecaca',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontSize: 13,
        background: 'white'
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
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: '#991b1b'
      }
    }, c.email), /*#__PURE__*/React.createElement("span", {
      className: "tag",
      style: {
        background: '#fef2f2',
        color: '#dc2626',
        fontSize: 10,
        padding: '1px 6px',
        border: '1px solid #fca5a5'
      }
    }, "\uD83D\uDCE7 ", c.count, " \u5C01\u5386\u53F2"), c.unresolved > 0 && /*#__PURE__*/React.createElement("span", {
      className: "tag",
      style: {
        background: '#dc2626',
        color: 'white',
        fontSize: 10,
        padding: '1px 6px'
      }
    }, "\u26A0 ", c.unresolved, " \u5355\u672A\u89E3\u51B3")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        marginTop: 2
      }
    }, "\u6700\u540E\u8054\u7CFB\uFF1A", c.latestDate, " \xB7 \u8DDF\u8FDB\u4EBA\uFF1A", c.owners.join(', ') || '?')), /*#__PURE__*/React.createElement("button", {
      className: "btn-sec",
      style: {
        padding: '4px 10px',
        fontSize: 11
      },
      onClick: function onClick() {
        setSearch(c.email);
        setHighFreqExpanded(false);
        toast("\u2713 \u5DF2\u7B5B\u9009 ".concat(c.email, " \u7684\u6240\u6709\u8BB0\u5F55"));
      }
    }, "\uD83D\uDD0D \u67E5\u770B\u5168\u90E8"));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl fade-in",
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 flex items-center justify-between gap-3 flex-wrap",
    style: {
      cursor: 'pointer'
    },
    onClick: function onClick() {
      return setRemindersExpanded(function (v) {
        return !v;
      });
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pin",
    className: "w-5 h-5",
    style: {
      color: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-display text-base font-bold"
  }, "\u8DDF\u8FDB\u63D0\u9192"), /*#__PURE__*/React.createElement("span", {
    className: "tag tag-neutral"
  }, "\u5171 ", reminders.length), isAdmin && /*#__PURE__*/React.createElement("span", {
    className: "flex items-center gap-1.5 flex-wrap",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: reminderViewer,
    onChange: function onChange(e) {
      return setReminderViewer(e.target.value);
    },
    style: {
      fontSize: 11,
      padding: '2px 8px',
      borderRadius: 6,
      border: '1px solid var(--gold)',
      color: 'var(--gold)',
      background: 'rgba(202,138,4,.08)',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\uD83D\uDC51 \u5168\u90E8\u5458\u5DE5"), /*#__PURE__*/React.createElement("option", {
    value: "self"
  }, "\uD83D\uDE4B \u4EC5\u672C\u4EBA"), _toConsumableArray(employees).filter(function (e) {
    return !e.hideFromList && e.role !== 'super_admin';
  }).sort(function (a, b) {
    return (starredStaff.includes(b.id) ? 1 : 0) - (starredStaff.includes(a.id) ? 1 : 0);
  }).map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, starredStaff.includes(e.id) ? '⭐ ' : '', e.name, e.alias ? ' ' + e.alias : '');
  })), reminderViewer !== 'all' && reminderViewer !== 'self' && /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost",
    style: {
      padding: '2px 8px',
      fontSize: 11
    },
    onClick: function onClick() {
      return toggleStar(reminderViewer);
    },
    title: "\u6807\u661F\u6B64\u4EBA,\u6392\u5230\u5217\u8868\u524D / \u5FEB\u901F\u67E5\u770B"
  }, starredStaff.includes(reminderViewer) ? '⭐ 已星标' : '☆ 标星'), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    style: {
      padding: '3px 10px',
      fontSize: 11
    },
    onClick: function onClick(e) {
      e.stopPropagation();
      setBatchTransferModal({
        fromUserId: null
      });
    }
  }, "\uD83D\uDD04 \u6279\u91CF\u8F6C\u4EA4\u5DE5\u4F5C"))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 flex-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs flex items-center gap-1.5",
    style: {
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-2.5 h-2.5 rounded-full",
    style: {
      background: 'var(--bad)'
    }
  }), "\u903E\u671F ", /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-bold"
  }, overdueCount)), /*#__PURE__*/React.createElement("span", {
    className: "text-xs flex items-center gap-1.5",
    style: {
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-2.5 h-2.5 rounded-full",
    style: {
      background: 'var(--gold)'
    }
  }), "\u4ECA\u65E5 ", /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-bold"
  }, todayCount)), /*#__PURE__*/React.createElement("span", {
    className: "text-xs flex items-center gap-1.5",
    style: {
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "inline-block w-2.5 h-2.5 rounded-full",
    style: {
      background: 'var(--info)'
    }
  }), "\u672A\u6765 ", /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-bold"
  }, futureCount)), /*#__PURE__*/React.createElement("span", {
    className: "text-xs flex items-center gap-1.5",
    style: {
      color: 'var(--ink-2)'
    }
  }, "\u231B \u7B49\u5BA2\u6237 ", /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-bold"
  }, waitingCount)), /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost",
    style: {
      padding: '4px 10px',
      fontSize: 11
    },
    onClick: function onClick(e) {
      e.stopPropagation();
      setRemindersExpanded(function (v) {
        return !v;
      });
    }
  }, remindersExpanded ? '▲ 收起' : '▼ 展开详情'))), remindersExpanded && sortedReminders.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      maxHeight: 480,
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  }, sortedReminders.map(function (r) {
    var _lastTransfer$fromNam, _lastTransfer$toName;
    var owner = employees.find(function (e) {
      return e.id === r.ownerId;
    });
    var daysLate = r.nextFollowUp ? Math.floor((new Date(today) - new Date(r.nextFollowUp)) / (1000 * 60 * 60 * 24)) : 0;
    var isOverdue = daysLate > 0;
    var isToday = r.nextFollowUp === today;
    var dot = isOverdue ? 'var(--bad)' : isToday ? 'var(--gold)' : 'var(--info)';
    var customer = (r.customer || '').trim();
    var orderRef = (r.orderRef || '').trim();
    var note = (r.note || '').trim();
    var title = orderRef || customer || '(无订单号/客户)';
    var subtitle = customer && orderRef ? customer : '';
    var statusLabel = r.status === 'waiting' ? '⌛ 等客户' : r.status === 'in_progress' ? '🔄 跟进中' : r.status === 'pending' ? '⏸ 待处理' : r.status;
    var lastTransfer = (r.transferHistory || []).slice(-1)[0];
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      className: "row-hover",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 16px',
        borderBottom: '1px solid var(--line)',
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "inline-block rounded-full",
      style: {
        width: 9,
        height: 9,
        background: dot,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("div", {
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
        fontWeight: 600,
        color: 'var(--ink)'
      }
    }, title), subtitle && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)',
        fontSize: 12
      }
    }, "\xB7 ", subtitle), r.site && /*#__PURE__*/React.createElement("span", {
      className: "tag",
      style: _objectSpread({
        fontSize: 10,
        padding: '1px 6px'
      }, r.isQuote ? {
        background: '#ede9fe',
        color: '#6d28d9',
        fontWeight: 600
      } : {})
    }, r.isQuote ? '📄 报价' : r.site), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)',
        fontSize: 11
      }
    }, "\uD83D\uDC64 ", owner ? owner.name + (owner.alias ? ' ' + owner.alias : '') : r.ownerName || '?'), lastTransfer && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: '#0369a1',
        background: '#e0f2fe',
        padding: '1px 6px',
        borderRadius: 4,
        border: '1px solid #7dd3fc'
      },
      title: "".concat(lastTransfer.byName, " \u5728 ").concat(lastTransfer.at.slice(0, 10), " \u8F6C\u4EA4")
    }, "\uD83D\uDD04 \u539F ", ((_lastTransfer$fromNam = lastTransfer.fromName) === null || _lastTransfer$fromNam === void 0 ? void 0 : _lastTransfer$fromNam.split(' ')[0]) || '?', " \u2192 ", ((_lastTransfer$toName = lastTransfer.toName) === null || _lastTransfer$toName === void 0 ? void 0 : _lastTransfer$toName.split(' ')[0]) || '?'), r.transferUnreadFor && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: '#dc2626',
        background: '#fee2e2',
        padding: '1px 6px',
        borderRadius: 4,
        fontWeight: 600
      }
    }, "NEW"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)',
        fontSize: 11
      }
    }, statusLabel)), note && /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--ink-2)',
        fontSize: 12,
        marginTop: 2,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100%'
      }
    }, "\uD83D\uDCAC ", note)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        flexShrink: 0
      }
    }, isOverdue ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--bad)',
        fontSize: 12,
        fontWeight: 600
      }
    }, "\u903E\u671F ", daysLate, " \u5929") : isToday ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gold)',
        fontSize: 12,
        fontWeight: 600
      }
    }, "\u4ECA\u65E5\u5F85\u8DDF") : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--info)',
        fontSize: 12
      }
    }, r.nextFollowUp)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexShrink: 0
      }
    }, r.isQuote ? /*#__PURE__*/React.createElement("button", {
      className: "btn-sec",
      style: {
        padding: '4px 10px',
        fontSize: 11
      },
      onClick: function onClick() {
        return onOpenQuoteTab && onOpenQuoteTab();
      },
      title: "\u6253\u5F00\u62A5\u4EF7\u5355\u6A21\u5757"
    }, "\uD83D\uDCC4 \u67E5\u770B\u62A5\u4EF7\u5355") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      className: "btn-pri",
      style: {
        padding: '4px 10px',
        fontSize: 11
      },
      onClick: function onClick() {
        return setFollowUpModal(r.id);
      }
    }, "\u5904\u7406"), isAdmin && /*#__PURE__*/React.createElement("button", {
      className: "btn-sec",
      style: {
        padding: '4px 10px',
        fontSize: 11
      },
      onClick: function onClick() {
        return setTransferModal(r.id);
      },
      title: "\u8F6C\u4EA4\u7ED9\u5176\u4ED6\u5458\u5DE5"
    }, "\uD83D\uDD04 \u8F6C\u4EA4"))));
  })), remindersExpanded && sortedReminders.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      padding: '30px',
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, "\uD83C\uDF89 \u6682\u65E0\u5F85\u8DDF\u8FDB\u7684\u5DE5\u4F5C")), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-3 flex-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: function onClick() {
      return setViewDate(addDays(viewDate, -1));
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: viewDate,
    onChange: function onChange(e) {
      return setViewDate(e.target.value);
    },
    style: {
      width: '160px'
    }
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: function onClick() {
      return setViewDate(addDays(viewDate, 1));
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    className: "font-display text-lg font-bold ml-2"
  }, viewDate.slice(5, 7), "\u6708", viewDate.slice(8, 10), "\u65E5"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono",
    style: {
      color: 'var(--ink-4)'
    }
  }, ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][new Date(viewDate).getDay()]), viewDate !== today && /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost text-[11px]",
    onClick: function onClick() {
      return setViewDate(today);
    }
  }, "\u2192 \u4ECA\u5929"), isPastDate(viewDate) && /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: adminUnlock ? 'rgba(202,138,4,0.12)' : 'rgba(168,168,160,0.18)',
      color: adminUnlock ? 'var(--gold)' : 'var(--ink-3)',
      borderColor: adminUnlock ? 'var(--gold)' : 'var(--line)',
      borderWidth: '1px',
      borderStyle: 'solid'
    }
  }, adminUnlock ? '🔓 已解锁' : '🔒 历史只读'), isAdmin && isPastDate(viewDate) && /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost text-[11px]",
    onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            if (adminUnlock) {
              _context4.n = 3;
              break;
            }
            _context4.n = 1;
            return wsConfirm('解锁历史日期编辑？\n\n注意：仅主管可执行此操作。修改历史记录将影响绩效统计与审计追溯，请谨慎操作。');
          case 1:
            if (!_context4.v) {
              _context4.n = 2;
              break;
            }
            setAdminUnlock(true);
            toast('🔓 已临时解锁历史日期，切换日期或刷新后自动恢复锁定');
          case 2:
            _context4.n = 4;
            break;
          case 3:
            setAdminUnlock(false);
            toast('🔒 已重新锁定');
          case 4:
            return _context4.a(2);
        }
      }, _callee4);
    }))
  }, adminUnlock ? '重新锁定' : '主管解锁')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap"
  }, isAdmin && /*#__PURE__*/React.createElement("label", {
    className: "text-xs flex items-center gap-1.5 cursor-pointer"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: showAll,
    onChange: function onChange(e) {
      return setShowAll(e.target.checked);
    }
  }), "\u67E5\u770B\u6240\u6709\u5458\u5DE5")))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative flex-1",
    style: {
      minWidth: '200px',
      maxWidth: '320px'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u641C\u7D22\u5BA2\u6237 / \u8BA2\u5355\u53F7 / \u5907\u6CE8...",
    style: {
      padding: '7px 30px 7px 12px',
      fontSize: '13px',
      width: '100%'
    }
  }), search && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSearch('');
    },
    style: {
      position: 'absolute',
      right: '6px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-3)',
      fontSize: '16px',
      padding: '4px 6px'
    },
    title: "\u6E05\u7A7A"
  }, "\xD7")), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec text-xs",
    onClick: function onClick() {
      return setShowFilters(!showFilters);
    }
  }, showFilters ? '收起筛选' : '展开筛选', (filterStatus !== 'all' || filterSite !== 'all' || filterCategory !== 'all' || filterDifficulty !== 'all' || filterOwner !== 'all' && isAdmin && showAll) && /*#__PURE__*/React.createElement("span", {
    className: "ml-1",
    style: {
      color: 'var(--accent)',
      fontWeight: 'bold'
    }
  }, "\u25CF")), (search || filterStatus !== 'all' || filterSite !== 'all' || filterCategory !== 'all' || filterDifficulty !== 'all' || filterOwner !== 'all') && /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost text-xs",
    onClick: function onClick() {
      setSearch('');
      setFilterStatus('all');
      setFilterSite('all');
      setFilterCategory('all');
      setFilterDifficulty('all');
      setFilterOwner('all');
    }
  }, "\u6E05\u9664\u5168\u90E8"), /*#__PURE__*/React.createElement("div", {
    className: "flex-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 flex-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-mono",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u5BFC\u51FA\u8303\u56F4\uFF1A"), /*#__PURE__*/React.createElement("select", {
    value: dateRange,
    onChange: function onChange(e) {
      return setDateRange(e.target.value);
    },
    style: {
      padding: '5px 8px',
      fontSize: '11px'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "day"
  }, "\u5F53\u65E5 (", viewDate.slice(5), ")"), /*#__PURE__*/React.createElement("option", {
    value: "7d"
  }, "\u8FD1 7 \u5929"), /*#__PURE__*/React.createElement("option", {
    value: "30d"
  }, "\u8FD1 30 \u5929"), /*#__PURE__*/React.createElement("option", {
    value: "range"
  }, "\u81EA\u5B9A\u4E49\u8303\u56F4"), /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8")), dateRange === 'range' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: rangeStart,
    onChange: function onChange(e) {
      return setRangeStart(e.target.value);
    },
    style: {
      padding: '4px 6px',
      fontSize: '11px',
      width: '130px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)'
    }
  }, "~"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: rangeEnd,
    onChange: function onChange(e) {
      return setRangeEnd(e.target.value);
    },
    style: {
      padding: '4px 6px',
      fontSize: '11px',
      width: '130px'
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri text-xs",
    onClick: handleExport,
    title: "\u5BFC\u51FA ".concat(exportRecords.length, " \u6761\u5230 Excel/CSV")
  }, "\uD83D\uDCE5 \u5BFC\u51FA CSV (", exportRecords.length, ")"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return handleExportPDF();
    },
    title: "\u5BFC\u51FA\u5F53\u524D\u7B5B\u9009\u7684 ".concat(tableRecords.length, " \u6761\u4E3A PDF\uFF08\u542B\u622A\u56FE\uFF09"),
    style: {
      padding: '4px 12px',
      fontSize: 11,
      background: '#dc2626',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600
    }
  }, "\uD83D\uDCC4 \u5BFC\u51FA PDF (", tableRecords.length, ")"))), showFilters && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 pt-3 border-t flex items-center gap-2 flex-wrap",
    style: {
      borderColor: 'var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("select", {
    value: filterStatus,
    onChange: function onChange(e) {
      return setFilterStatus(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: '11px'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8"), STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.key,
      value: s.key
    }, s.label);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u7F51\u7AD9"), /*#__PURE__*/React.createElement("select", {
    value: filterSite,
    onChange: function onChange(e) {
      return setFilterSite(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: '11px'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8"), allSites.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s,
      value: s
    }, s);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u7C7B\u522B"), /*#__PURE__*/React.createElement("select", {
    value: filterCategory,
    onChange: function onChange(e) {
      return setFilterCategory(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: '11px'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8"), CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c,
      value: c
    }, c);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u96BE\u5EA6"), /*#__PURE__*/React.createElement("select", {
    value: filterDifficulty,
    onChange: function onChange(e) {
      return setFilterDifficulty(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: '11px'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8"), /*#__PURE__*/React.createElement("option", {
    value: "easy"
  }, "\u7B80\u5355"), /*#__PURE__*/React.createElement("option", {
    value: "mid"
  }, "\u4E2D\u7B49"), /*#__PURE__*/React.createElement("option", {
    value: "hard"
  }, "\u590D\u6742"))), showAll && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDC64 \u5BA2\u670D"), /*#__PURE__*/React.createElement("select", {
    value: filterOwner,
    onChange: function onChange(e) {
      return setFilterOwner(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: '11px'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8"), employees.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.name, e.alias ? " (".concat(e.alias, ")") : '');
  }))), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u2195 \u6392\u5E8F"), /*#__PURE__*/React.createElement("select", {
    value: sortBy,
    onChange: function onChange(e) {
      return setSortBy(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: '11px'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "updated"
  }, "\u4FEE\u6539\u65E5\u671F"), /*#__PURE__*/React.createElement("option", {
    value: "created"
  }, "\u521B\u5EFA\u65E5\u671F"), /*#__PURE__*/React.createElement("option", {
    value: "date"
  }, "\u8BB0\u5F55\u65E5\u671F"), /*#__PURE__*/React.createElement("option", {
    value: "customer"
  }, "\u5BA2\u6237\u540D"), /*#__PURE__*/React.createElement("option", {
    value: "site"
  }, "\u7F51\u7AD9"), /*#__PURE__*/React.createElement("option", {
    value: "status"
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("option", {
    value: "difficulty"
  }, "\u96BE\u5EA6"), /*#__PURE__*/React.createElement("option", {
    value: "followup"
  }, "\u4E0B\u6B21\u8DDF\u8FDB")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSortDir(function (d) {
        return d === 'desc' ? 'asc' : 'desc';
      });
    },
    title: sortDir === 'desc' ? '降序(新→旧 / 大→小)' : '升序(旧→新 / 小→大)',
    style: {
      padding: '4px 9px',
      fontSize: '12px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      background: 'white',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600
    }
  }, sortDir === 'desc' ? '↓' : '↑')))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-5 gap-3 fade-in"
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "\u4ECA\u65E5\u90AE\u4EF6\u6570",
    value: stats.totalEmails,
    unit: "\u5C01",
    color: "var(--info)",
    hint: filterStatus !== 'all' || filterDifficulty !== 'all' || filterSite !== 'all' || filterCategory !== 'all' || search ? '点击清除所有筛选' : '当日总数',
    onClick: filterStatus !== 'all' || filterDifficulty !== 'all' || filterSite !== 'all' || filterCategory !== 'all' || search ? function () {
      setFilterStatus('all');
      setFilterDifficulty('all');
      setFilterSite('all');
      setFilterCategory('all');
      setSearch('');
      toast('已清除筛选');
    } : null,
    active: false
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\u603B\u65F6\u957F",
    value: fmtDuration(stats.totalMins),
    unit: "",
    color: "var(--good)",
    hint: stats.totalEmails > 0 ? "".concat(Math.round(stats.totalMins / Math.max(stats.totalEmails, 1)), "min / \u5355") : '尚未填写'
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\u96BE\u5EA6\u5206\u5E03",
    value: "".concat(stats.easyN, " / ").concat(stats.midN, " / ").concat(stats.hardN),
    unit: "",
    hint: filterDifficulty !== 'all' ? "\u4EC5\u770B".concat(filterDifficulty === 'easy' ? '简单' : filterDifficulty === 'mid' ? '中等' : '复杂') : '简 / 中 / 复',
    color: "var(--gold)",
    onClick: function onClick() {
      var order = ['all', 'easy', 'mid', 'hard'];
      var next = order[(order.indexOf(filterDifficulty) + 1) % 4];
      setFilterDifficulty(next);
      toast(next === 'all' ? '已显示全部难度' : "\u4EC5\u770B".concat(next === 'easy' ? '简单' : next === 'mid' ? '中等' : '复杂'));
    },
    active: filterDifficulty !== 'all'
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\u8DDF\u8FDB\u4E2D",
    value: stats.followingN,
    unit: "\u5355",
    color: "var(--accent)",
    hint: filterStatus !== 'all' ? "\u4EC5\u770B".concat(((_STATUSES$find = STATUSES.find(function (s) {
      return s.key === filterStatus;
    })) === null || _STATUSES$find === void 0 ? void 0 : _STATUSES$find.label) || filterStatus) : '未关闭工单',
    onClick: function onClick() {
      var _STATUSES$find2;
      var next = filterStatus === 'all' ? 'following' : filterStatus === 'following' ? 'waiting' : filterStatus === 'waiting' ? 'pending' : 'all';
      setFilterStatus(next);
      toast(next === 'all' ? '已显示全部状态' : "\u4EC5\u770B".concat(((_STATUSES$find2 = STATUSES.find(function (s) {
        return s.key === next;
      })) === null || _STATUSES$find2 === void 0 ? void 0 : _STATUSES$find2.label) || next));
    },
    active: filterStatus !== 'all'
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "\u903E\u671F / \u4ECA\u65E5",
    value: "".concat(overdueCount, " / ").concat(todayCount),
    unit: "",
    color: overdueCount > 0 ? 'var(--bad)' : 'var(--good)',
    hint: overdueCount + todayCount === 0 ? '一切正常 ✓' : overdueCount > 0 ? "".concat(overdueCount, " \u5355\u5DF2\u903E\u671F") : "".concat(todayCount, " \u5355\u4ECA\u65E5\u5230\u671F"),
    onClick: overdueCount + todayCount > 0 ? function () {
      toast("\uD83D\uDCCB \u63D0\u9192\uFF1A\u903E\u671F ".concat(overdueCount, " \u5355 \xB7 \u4ECA\u65E5 ").concat(todayCount, " \u5355"));
    } : null
  })), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3 fade-in",
    style: {
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
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\uD83D\uDCCA"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, "\u5DE5\u4F5C\u6C47\u62A5"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "\xB7 \u4E00\u952E\u751F\u6210\u6587\u5B57\u6C47\u62A5\uFF08\u590D\u5236\u540E\u53EF\u7C98\u8D34\u5230\u5FAE\u4FE1/\u9489\u9489\uFF09")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    style: {
      padding: '5px 12px',
      fontSize: 12
    },
    onClick: function onClick() {
      return generateReport('day');
    }
  }, "\uD83D\uDCCB \u4ECA\u65E5\u62A5\u544A"), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    style: {
      padding: '5px 12px',
      fontSize: 12
    },
    onClick: function onClick() {
      return generateReport('week');
    }
  }, "\uD83D\uDCC5 \u672C\u5468\u6C47\u603B"), isAdmin && /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    style: {
      padding: '5px 12px',
      fontSize: 12
    },
    onClick: function onClick() {
      return generateReport('team');
    }
  }, "\uD83D\uDC65 \u56E2\u961F\u5468\u62A5"))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3 fade-in",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      flexWrap: 'wrap'
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
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\u663E\u793A\u6A21\u5F0F\uFF1A"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setViewMode('day');
    },
    style: {
      padding: '4px 12px',
      borderRadius: 14,
      fontSize: 12,
      cursor: 'pointer',
      fontFamily: 'inherit',
      border: '1px solid ' + (viewMode === 'day' ? 'var(--accent)' : 'var(--line)'),
      background: viewMode === 'day' ? 'var(--accent)' : 'white',
      color: viewMode === 'day' ? 'white' : 'var(--ink-2)',
      fontWeight: viewMode === 'day' ? 600 : 400
    }
  }, "\uD83D\uDCC5 \u6309\u5F53\u65E5 (", dayRecords.length, ")"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setViewMode('all');
    },
    style: {
      padding: '4px 12px',
      borderRadius: 14,
      fontSize: 12,
      cursor: 'pointer',
      fontFamily: 'inherit',
      border: '1px solid ' + (viewMode === 'all' ? 'var(--accent)' : 'var(--line)'),
      background: viewMode === 'all' ? 'var(--accent)' : 'white',
      color: viewMode === 'all' ? 'white' : 'var(--ink-2)',
      fontWeight: viewMode === 'all' ? 600 : 400
    }
  }, "\uD83D\uDCCB \u5168\u90E8\u8BB0\u5F55 (", visibleRecords.filter(isRecordMeaningful).length, ")"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 18,
      background: 'var(--line)',
      margin: '0 4px'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\u5C55\u793A\uFF1A"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCardViewPersist('list');
    },
    title: "\u5217\u8868\u89C6\u56FE(\u53EF\u5185\u8054\u7F16\u8F91)",
    style: {
      padding: '4px 12px',
      borderRadius: 14,
      fontSize: 12,
      cursor: 'pointer',
      fontFamily: 'inherit',
      border: '1px solid ' + (cardView === 'list' ? 'var(--accent)' : 'var(--line)'),
      background: cardView === 'list' ? 'var(--accent)' : 'white',
      color: cardView === 'list' ? 'white' : 'var(--ink-2)',
      fontWeight: cardView === 'list' ? 600 : 400
    }
  }, "\u2630 \u5217\u8868"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCardViewPersist('grid');
    },
    title: "\u7F51\u683C\u89C6\u56FE(\u7D27\u51D1\u6982\u89C8,\u70B9\u5361\u7247\u56DE\u5217\u8868\u7F16\u8F91)",
    style: {
      padding: '4px 12px',
      borderRadius: 14,
      fontSize: 12,
      cursor: 'pointer',
      fontFamily: 'inherit',
      border: '1px solid ' + (cardView === 'grid' ? 'var(--accent)' : 'var(--line)'),
      background: cardView === 'grid' ? 'var(--accent)' : 'white',
      color: cardView === 'grid' ? 'white' : 'var(--ink-2)',
      fontWeight: cardView === 'grid' ? 600 : 400
    }
  }, "\u25A6 \u7F51\u683C")), viewMode === 'all' && tableRecords.length > pageSize && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "\u7B5B\u9009\u540E ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--accent)'
    }
  }, tableRecords.length), " \u6761 \xB7 \u5F53\u524D\u7B2C ", /*#__PURE__*/React.createElement("strong", null, safePage), "/", totalPages, " \u9875"), canEditRecord({
    date: viewDate
  }, user, adminUnlock) ? /*#__PURE__*/React.createElement("button", {
    onClick: addRow,
    style: {
      padding: '7px 18px',
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 600,
      background: 'var(--accent)',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 2px 6px rgba(0,113,227,.25)',
      fontFamily: 'inherit',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    className: "w-4 h-4"
  }), "\u6DFB\u52A0\u4E00\u884C") : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-4)',
      padding: '4px 10px'
    }
  }, "\uD83D\uDD12 \u5386\u53F2\u65E5\u671F\u4E0D\u53EF\u65B0\u589E")), viewMode === 'all' && function () {
    var today = todayISO();
    // 源数据(在 time filter 前)
    var sourceForTime = function () {
      var l = sourceRecords;
      if (search.trim()) {
        var q = search.trim().toLowerCase();
        l = l.filter(function (r) {
          return (r.customer || '').toLowerCase().includes(q) || (r.orderRef || '').toLowerCase().includes(q) || (r.note || '').toLowerCase().includes(q);
        });
      }
      if (filterStatus !== 'all') l = l.filter(function (r) {
        return r.status === filterStatus;
      });
      if (filterSite !== 'all') l = l.filter(function (r) {
        return r.site === filterSite;
      });
      if (filterCategory !== 'all') l = l.filter(function (r) {
        return r.category === filterCategory;
      });
      if (filterDifficulty !== 'all') l = l.filter(function (r) {
        return r.difficulty === filterDifficulty;
      });
      if (isAdmin && showAll && filterOwner !== 'all') l = l.filter(function (r) {
        return r.ownerId === filterOwner;
      });
      return l;
    }();
    // 计算超期未解决数(>7天)
    var overdueUnresolved = visibleRecords.filter(function (r) {
      if (r.status === 'resolved' || r.status === 'transferred') return false;
      if (!r.date) return false;
      return r.date < addDays(today, -7);
    });

    // 应用了时间筛选后的条数变化
    var beforeFilter = sourceForTime.length;
    var afterFilter = tableRecords.length;
    var isFiltered = timeFilter !== 'all' || showUnresolvedOnly;
    return /*#__PURE__*/React.createElement("div", {
      className: "paper rounded-2xl p-3 fade-in",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(TimeRangeFilter, {
      value: timeFilter,
      onChange: setTimeFilter,
      customStart: customRangeStart,
      customEnd: customRangeEnd,
      onCustomChange: function onCustomChange(_ref16) {
        var start = _ref16.start,
          end = _ref16.end;
        setCustomRangeStart(start);
        setCustomRangeEnd(end);
      },
      records: sourceForTime,
      dateField: "date",
      label: "\uD83D\uDCC5 \u65F6\u95F4\u8303\u56F4:"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setShowUnresolvedOnly(function (v) {
          return !v;
        });
      },
      style: {
        padding: '4px 11px',
        borderRadius: 14,
        fontSize: 11,
        cursor: 'pointer',
        fontFamily: 'inherit',
        border: '1px solid ' + (showUnresolvedOnly ? '#dc2626' : 'var(--line)'),
        background: showUnresolvedOnly ? '#fee2e2' : 'white',
        color: showUnresolvedOnly ? '#991b1b' : 'var(--ink-2)',
        fontWeight: showUnresolvedOnly ? 600 : 400,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        whiteSpace: 'nowrap'
      }
    }, showUnresolvedOnly ? '✓' : '☐', " \u53EA\u770B\u672A\u89E3\u51B3"), overdueUnresolved.length > 0 && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setTimeFilter('all');
        setShowUnresolvedOnly(true);
      },
      style: {
        padding: '4px 11px',
        background: '#fef3c7',
        color: '#92400e',
        border: '1px solid #fbbf24',
        borderRadius: 14,
        fontSize: 11,
        fontWeight: 600,
        fontFamily: 'inherit',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        whiteSpace: 'nowrap'
      },
      title: "\u70B9\u51FB\u7B5B\u9009\u8D85\u8FC7 7 \u5929\u672A\u89E3\u51B3\u7684\u8BB0\u5F55"
    }, "\u26A0 \u8D85 7 \u5929\u672A\u89E3\u51B3: ", overdueUnresolved.length, " \u6761")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap',
        paddingTop: 6,
        borderTop: '1px dashed var(--line)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        fontWeight: 600,
        whiteSpace: 'nowrap'
      }
    }, "\uD83D\uDCC5 \u6309\u6708/\u5468\u7B5B\u9009:"), /*#__PURE__*/React.createElement(AdvancedDateFilter, {
      value: dateFilter,
      onChange: setDateFilter,
      size: "sm"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        flexWrap: 'wrap',
        paddingTop: 6,
        borderTop: '1px dashed var(--line)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        fontWeight: 600,
        whiteSpace: 'nowrap'
      }
    }, "\u23F0 \u8DDF\u8FDB\u903E\u671F:"), function () {
      var overdueRecords = sourceForTime.filter(function (r) {
        var fi = getFollowUpInfo(r);
        return fi && fi.state === 'overdue';
      });
      var countAtLeast = function countAtLeast(n) {
        return overdueRecords.filter(function (r) {
          return getFollowUpInfo(r).days >= n;
        }).length;
      };
      var opts = [{
        v: 'all',
        label: '全部',
        n: null
      }, {
        v: '1',
        label: '已逾期',
        n: 1
      }, {
        v: '3',
        label: '≥3天',
        n: 3
      }, {
        v: '5',
        label: '≥5天',
        n: 5
      }, {
        v: '7',
        label: '≥7天',
        n: 7
      }, {
        v: '10',
        label: '≥10天',
        n: 10
      }, {
        v: '14',
        label: '≥14天',
        n: 14
      }, {
        v: '30',
        label: '≥30天',
        n: 30
      }];
      return opts.map(function (o) {
        var cnt = o.n == null ? null : countAtLeast(o.n);
        var active = followUpFilter === o.v;
        // 逾期档位用对应警示色
        var dangerColor = o.n >= 14 ? '#dc2626' : o.n >= 7 ? '#c2410c' : o.n >= 3 ? '#a16207' : o.n >= 1 ? '#854d0e' : 'var(--accent)';
        return /*#__PURE__*/React.createElement("button", {
          key: o.v,
          onClick: function onClick() {
            return setFollowUpFilter(o.v);
          },
          style: {
            padding: '4px 11px',
            borderRadius: 14,
            fontSize: 11,
            cursor: 'pointer',
            fontFamily: 'inherit',
            border: '1px solid ' + (active ? dangerColor : 'var(--line)'),
            background: active ? dangerColor : 'white',
            color: active ? 'white' : 'var(--ink-2)',
            fontWeight: active ? 600 : 400,
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4
          }
        }, o.label, cnt != null && cnt > 0 && /*#__PURE__*/React.createElement("span", {
          style: {
            padding: '0 5px',
            borderRadius: 8,
            fontSize: 10,
            fontWeight: 700,
            background: active ? 'rgba(255,255,255,.25)' : o.n >= 7 ? '#fee2e2' : '#fef3c7',
            color: active ? 'white' : dangerColor
          }
        }, cnt));
      });
    }()), isFiltered && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '6px 12px',
        background: '#e0f2fe',
        borderRadius: 8,
        fontSize: 11,
        color: '#075985',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDD0D \u5F53\u524D\u7B5B\u9009:"), /*#__PURE__*/React.createElement("strong", {
      style: {
        color: '#0c4a6e'
      }
    }, afterFilter, " \u6761"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#64748b'
      }
    }, "/ \u539F ", beforeFilter, " \u6761"), beforeFilter > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#64748b'
      }
    }, "\xB7 ", Math.round(afterFilter / beforeFilter * 100), "%"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        setTimeFilter('all');
        setShowUnresolvedOnly(false);
      },
      style: {
        marginLeft: 'auto',
        padding: '2px 8px',
        background: 'white',
        border: '1px solid #7dd3fc',
        borderRadius: 6,
        fontSize: 10,
        color: '#0369a1',
        cursor: 'pointer',
        fontFamily: 'inherit'
      }
    }, "\u2715 \u6E05\u9664\u7B5B\u9009")));
  }(), viewMode === 'all' && tableRecords.length > 0 && /*#__PURE__*/React.createElement(Pagination, {
    currentPage: safePage,
    totalPages: totalPages,
    pageSize: pageSize,
    totalItems: tableRecords.length,
    onPageChange: setPage,
    onPageSizeChange: setPageSize,
    position: "top"
  }), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl fade-in",
    style: {
      overflow: 'hidden',
      padding: '14px'
    }
  }, tableRecords.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '50px 12px',
      color: 'var(--ink-3)',
      fontSize: '14px'
    }
  }, sourceRecords.length === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, "\u6682\u65E0\u8BB0\u5F55 \xB7 \u70B9\u51FB\u4E0B\u65B9 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--accent)'
    }
  }, "+ \u6DFB\u52A0\u4E00\u884C"), " \u5F00\u59CB") : "\u65E0\u5339\u914D\u8BB0\u5F55(\u5171 ".concat(sourceRecords.length, " \u6761,\u88AB\u7B5B\u9009\u6761\u4EF6\u8FC7\u6EE4)")) : cardView === 'grid' ?
  /*#__PURE__*/
  /* 🆕 fix61: 网格视图 — 紧凑只读卡片,点击切回列表编辑 */
  React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: 12
    }
  }, pagedRecords.map(function (r) {
    return /*#__PURE__*/React.createElement(CSGridCard, {
      key: r.id,
      r: r,
      employees: employees,
      getDisplayStatus: getDisplayStatus,
      onOpen360: function onOpen360(email) {
        return setCustomer360Email(email);
      },
      onClickCard: function onClickCard() {
        return setCardViewPersist('list');
      },
      onViewImg: setLightboxImg
    });
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7
    }
  }, pagedRecords.map(function (r, localIdx) {
    var _employees$find3, _r$screenshots, _r$screenshots2, _r$followUps, _r$screenshots3;
    var idx = viewMode === 'all' ? (safePage - 1) * pageSize + localIdx : localIdx;
    var dispStatus = getDisplayStatus(r);
    var statusCls = "status-".concat(dispStatus);
    var ownerName = ((_employees$find3 = employees.find(function (e) {
      return e.id === r.ownerId;
    })) === null || _employees$find3 === void 0 ? void 0 : _employees$find3.name) || '—';
    var editable = canEditRecord(r, user, adminUnlock);
    var emailNorm = (r.customer || '').trim().toLowerCase();
    var dupRecords = emailNorm ? visibleRecords.filter(function (rr) {
      return rr.id !== r.id && (rr.customer || '').trim().toLowerCase() === emailNorm;
    }) : [];
    var isDup = dupRecords.length > 0;
    var cur = STATUSES.find(function (s) {
      return s.key === r.status;
    }) || STATUSES[0];
    var statusStyleMap = {
      pending: {
        bg: '#f5f5f7',
        border: '#86868b',
        color: '#525252',
        stripe: '#86868b'
      },
      following: {
        bg: '#fff7ed',
        border: '#ff9500',
        color: '#9a3412',
        stripe: '#ff9500'
      },
      waiting: {
        bg: '#e0f2fe',
        border: '#0071e3',
        color: '#075985',
        stripe: '#0071e3'
      },
      resolved: {
        bg: '#dcfce7',
        border: '#34c759',
        color: '#14532d',
        stripe: '#34c759'
      },
      transferred: {
        bg: '#fef3c7',
        border: '#d97706',
        color: '#854d0e',
        stripe: '#d97706'
      }
    };
    var curStyle = statusStyleMap[cur.key] || statusStyleMap.pending;
    var ev = getRecordEvents(r.id);
    var evCount = ev.aftersales.length + ev.refills.length + ev.refunds.length;
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      id: 'cs-row-' + r.id,
      style: {
        background: 'white',
        border: '1px solid ' + (editable ? '#eeeef0' : '#e5e5e7'),
        borderLeft: '3px solid ' + curStyle.stripe,
        borderRadius: 11,
        padding: '10px 14px',
        opacity: editable ? 1 : 0.85,
        transition: 'all .15s',
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--ink-4)',
        fontFamily: 'monospace',
        fontWeight: 600,
        minWidth: 24
      }
    }, "#", idx + 1), /*#__PURE__*/React.createElement("button", {
      disabled: !editable,
      onClick: function onClick(e) {
        e.stopPropagation();
        if (statusMenuOpen !== r.id) {
          var rect = e.currentTarget.getBoundingClientRect();
          setStatusDropdownPos({
            top: rect.bottom + 4,
            left: rect.left,
            width: Math.max(rect.width, 110)
          });
          setStatusMenuOpen(r.id);
        } else {
          setStatusMenuOpen(null);
        }
      },
      style: {
        padding: '5px 12px',
        fontSize: 12,
        fontWeight: 600,
        borderRadius: 14,
        cursor: editable ? 'pointer' : 'default',
        background: curStyle.bg,
        color: curStyle.color,
        border: '1px solid ' + curStyle.border,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontFamily: 'inherit',
        whiteSpace: 'nowrap',
        opacity: editable ? 1 : 0.6
      }
    }, cur.label, editable && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 8,
        opacity: 0.6
      }
    }, "\u25BC")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: '1 1 200px',
        minWidth: 0,
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("input", {
      disabled: !editable,
      value: r.customer,
      onChange: function onChange(e) {
        return updateRow(r.id, {
          customer: e.target.value
        });
      },
      placeholder: "\uD83D\uDCE7 \u5BA2\u6237\u90AE\u7BB1/\u8054\u7CFB\u65B9\u5F0F",
      style: {
        width: '100%',
        padding: '7px 12px',
        fontSize: '13px',
        fontWeight: 500,
        paddingRight: (r.customer || '').trim() ? isDup ? '78px' : '36px' : '12px',
        background: isDup ? '#fef3c7' : '#fafafa',
        border: '1px solid ' + (isDup ? '#f59e0b' : 'transparent'),
        borderRadius: 8
      },
      title: isDup ? "\u26A0 \u91CD\u590D\u90AE\u7BB1:\u53E6\u6709 ".concat(dupRecords.length, " \u6761\u540C\u90AE\u7BB1\u8BB0\u5F55") : ''
    }), (r.customer || '').trim() && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        setCustomer360Email(r.customer.trim());
      },
      title: "\u5BA2\u6237\u6863\u6848 360\xB0 \u2014 \u770B\u8DDF\u8FDB/\u62D2\u4ED8/\u552E\u540E/\u8BC4\u4EF7/\u7EBF\u4E0B\u5355/\u5B9A\u5236",
      style: {
        position: 'absolute',
        right: isDup ? 42 : 6,
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '3px 7px',
        fontSize: 11,
        fontWeight: 600,
        background: 'var(--accent-soft)',
        color: 'var(--accent)',
        border: '1px solid var(--accent-mid, var(--accent))',
        borderRadius: 6,
        cursor: 'pointer',
        fontFamily: 'inherit',
        lineHeight: 1.2
      }
    }, "\uD83D\uDD0D 360\xB0"), isDup && /*#__PURE__*/React.createElement("span", {
      onClick: function onClick(e) {
        e.stopPropagation();
        setCustomer360Email(r.customer.trim());
      },
      title: "\u70B9\u51FB\u67E5\u770B\u6240\u6709\u540C\u90AE\u7BB1\u8BB0\u5F55(360\xB0 \u6863\u6848)",
      style: {
        position: 'absolute',
        right: 8,
        top: '50%',
        transform: 'translateY(-50%)',
        padding: '2px 7px',
        fontSize: 10,
        fontWeight: 700,
        background: '#f59e0b',
        color: 'white',
        borderRadius: 8,
        cursor: 'pointer'
      }
    }, "\u26A0 x", dupRecords.length + 1)), isAdmin && showAll && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '3px 10px',
        background: '#e0e7ff',
        color: '#4338ca',
        borderRadius: 14,
        fontSize: 11,
        fontWeight: 600,
        whiteSpace: 'nowrap'
      }
    }, "\uD83D\uDC64 ", ownerName), editable ? /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return deleteRow(r.id);
      },
      title: "\u653E\u5165\u56DE\u6536\u7AD9",
      style: {
        padding: '5px 9px',
        background: 'transparent',
        border: '1px solid var(--line)',
        borderRadius: 8,
        cursor: 'pointer',
        color: 'var(--bad)',
        fontSize: 14,
        fontFamily: 'inherit'
      }
    }, "\uD83D\uDDD1") : /*#__PURE__*/React.createElement("span", {
      title: "\u5386\u53F2\u8BB0\u5F55\u5DF2\u9501\u5B9A",
      style: {
        fontSize: 14,
        opacity: 0.4
      }
    }, "\uD83D\uDD12")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 8,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: {
        fontSize: 10,
        fontWeight: 600,
        color: 'var(--ink-3)',
        display: 'block',
        marginBottom: 3
      }
    }, "\uD83C\uDF10 \u7F51\u7AD9", !r.website && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--bad)',
        marginLeft: 3
      }
    }, "\xB7 \u672A\u586B")), /*#__PURE__*/React.createElement("select", {
      disabled: !editable,
      value: r.website,
      onChange: function onChange(e) {
        return updateRow(r.id, {
          website: e.target.value
        });
      },
      style: {
        width: '100%',
        padding: '7px 10px',
        fontSize: 13,
        border: '1px solid ' + (!r.website ? 'var(--bad)' : 'var(--line)'),
        borderRadius: 7,
        background: !r.website ? '#fff5f5' : 'white'
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "\u9009\u62E9\u7F51\u7AD9..."), allSites.map(function (s) {
      return /*#__PURE__*/React.createElement("option", {
        key: s,
        value: s
      }, s);
    })), editable && !r.website && function () {
      var sug = window.__siteFromOrderRef && window.__siteFromOrderRef(r.orderRef) || '';
      return sug ? /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return updateRow(r.id, {
            website: sug
          });
        },
        title: "\u6839\u636E\u8BA2\u5355\u53F7 ".concat(r.orderRef, " \u63A8\u65AD \xB7 \u70B9\u51FB\u586B\u5165"),
        style: {
          marginTop: 4,
          padding: '2px 8px',
          fontSize: 10,
          fontWeight: 600,
          border: '1px dashed var(--accent-mid)',
          background: 'var(--accent-soft)',
          color: 'var(--accent)',
          borderRadius: 8,
          cursor: 'pointer',
          fontFamily: 'inherit'
        }
      }, "\uD83D\uDCA1 \u5EFA\u8BAE: ", sug, " \u2190 \u70B9\u586B\u5165") : null;
    }()), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: {
        fontSize: 10,
        fontWeight: 600,
        color: 'var(--ink-3)',
        display: 'block',
        marginBottom: 3
      }
    }, "\uD83D\uDCCA \u96BE\u5EA6"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 3
      }
    }, ['easy', 'mid', 'hard'].map(function (d) {
      var isActive = r.difficulty === d;
      var isSuggested = isActive && r.diffSuggested;
      var cls = isActive ? d === 'easy' ? 'active-easy' : d === 'mid' ? 'active-mid' : 'active-hard' : '';
      return /*#__PURE__*/React.createElement("button", {
        key: d,
        disabled: !editable,
        className: "diff-btn ".concat(cls, " ").concat(isSuggested ? 'suggested' : ''),
        onClick: function onClick() {
          return updateRow(r.id, {
            difficulty: d,
            diffSuggested: false
          });
        },
        title: isSuggested ? '系统建议 · 点击确认或更改' : '',
        style: {
          flex: 1,
          padding: '6px 0',
          fontSize: 12
        }
      }, d === 'easy' ? '易' : d === 'mid' ? '中' : '复', isSuggested && ' 🤖');
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: {
        fontSize: 10,
        fontWeight: 600,
        color: 'var(--ink-3)',
        display: 'block',
        marginBottom: 3
      }
    }, "\uD83D\uDCCB \u54A8\u8BE2\u4E8B\u9879"), /*#__PURE__*/React.createElement("select", {
      disabled: !editable,
      value: r.category,
      onChange: function onChange(e) {
        return updateRow(r.id, {
          category: e.target.value
        });
      },
      style: {
        width: '100%',
        padding: '7px 10px',
        fontSize: 13,
        border: '1px solid var(--line)',
        borderRadius: 7,
        background: 'white'
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "\u9009\u4E8B\u9879..."), CATEGORIES.map(function (c) {
      return /*#__PURE__*/React.createElement("option", {
        key: c,
        value: c
      }, c);
    }), r.category && !CATEGORIES.includes(r.category) && /*#__PURE__*/React.createElement("option", {
      value: r.category
    }, r.category))), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: 'span 2'
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        fontSize: 10,
        fontWeight: 600,
        color: 'var(--ink-3)',
        display: 'block',
        marginBottom: 3
      }
    }, "\u23F1 \u65F6\u6BB5 ", r.durationMin > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: r.durationMin > 10 ? 'var(--bad)' : r.durationMin >= 5 ? 'var(--gold)' : 'var(--ink-3)',
        fontWeight: 700
      }
    }, "\xB7 ", fmtDuration(r.durationMin))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("input", {
      disabled: !editable,
      type: "time",
      value: r.startTime,
      onChange: function onChange(e) {
        return updateRow(r.id, {
          startTime: e.target.value
        });
      },
      style: {
        flex: 1,
        padding: '7px 10px',
        fontSize: 13,
        border: '1px solid var(--line)',
        borderRadius: 7
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)',
        fontSize: 13
      }
    }, "\u2192"), /*#__PURE__*/React.createElement("input", {
      disabled: !editable,
      type: "time",
      value: r.endTime,
      onChange: function onChange(e) {
        return updateRow(r.id, {
          endTime: e.target.value
        });
      },
      style: {
        flex: 1,
        padding: '7px 10px',
        fontSize: 13,
        border: '1px solid var(--line)',
        borderRadius: 7
      }
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
      style: {
        fontSize: 10,
        fontWeight: 600,
        color: 'var(--ink-3)',
        display: 'block',
        marginBottom: 3
      }
    }, "\uD83D\uDCC5 \u4E0B\u6B21\u8DDF\u8FDB"), /*#__PURE__*/React.createElement("input", {
      disabled: !editable,
      type: "date",
      value: r.nextFollowUp || "",
      onChange: function onChange(e) {
        return updateRow(r.id, {
          nextFollowUp: e.target.value
        });
      },
      style: {
        width: '100%',
        padding: '7px 10px',
        fontSize: 13,
        border: '1px solid var(--line)',
        borderRadius: 7
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        fontSize: 10,
        fontWeight: 600,
        color: 'var(--ink-3)',
        display: 'block',
        marginBottom: 3
      }
    }, "\uD83D\uDCDD \u8BA2\u5355\u53F7 / \u5907\u6CE8"), /*#__PURE__*/React.createElement("input", {
      disabled: !editable,
      value: r.orderRef || '',
      onChange: function onChange(e) {
        return updateRow(r.id, {
          orderRef: e.target.value
        });
      },
      placeholder: "\u8BA2\u5355\u53F7 / \u5907\u6CE8 / \u6C9F\u901A\u8981\u70B9...",
      style: {
        width: '100%',
        padding: '8px 12px',
        fontSize: 13,
        border: '1px solid var(--line)',
        borderRadius: 7
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        paddingTop: 8,
        borderTop: '1px dashed var(--line)',
        flexWrap: 'wrap',
        marginBottom: editable ? 8 : 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn-sec",
      onClick: function onClick() {
        return setFollowUpModal(r.id);
      },
      title: editable ? '打开跟进/截图窗口' : '只读查看',
      style: {
        padding: '5px 12px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ((_r$screenshots = r.screenshots) === null || _r$screenshots === void 0 ? void 0 : _r$screenshots.length) > 0 ? 'image' : 'edit',
      className: "w-3 h-3"
    }), ((_r$screenshots2 = r.screenshots) === null || _r$screenshots2 === void 0 ? void 0 : _r$screenshots2.length) > 0 ? "\u622A\u56FE ".concat(r.screenshots.length) : '加截图/跟进', ((_r$followUps = r.followUps) === null || _r$followUps === void 0 ? void 0 : _r$followUps.length) > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 6px',
        background: '#e0f2fe',
        color: '#075985',
        borderRadius: 8,
        fontSize: 10,
        fontWeight: 600
      }
    }, "\u8DDF\u8FDB ", r.followUps.length)), evCount > 0 && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setFollowUpModal(r.id);
      },
      title: "\u67E5\u770B\u5173\u8054\u7684\u552E\u540E/\u8865\u4EF6/\u9000\u6B3E\u4E8B\u4EF6",
      style: {
        padding: '4px 9px',
        background: '#fef9c3',
        color: '#a16207',
        border: '1px solid #fcd34d',
        borderRadius: 8,
        cursor: 'pointer',
        fontSize: 11,
        fontWeight: 600,
        fontFamily: 'inherit',
        display: 'inline-flex',
        gap: 4,
        whiteSpace: 'nowrap'
      }
    }, ev.aftersales.length > 0 && /*#__PURE__*/React.createElement("span", {
      title: "\u552E\u540E"
    }, "\uD83D\uDD27", ev.aftersales.length), ev.refills.length > 0 && /*#__PURE__*/React.createElement("span", {
      title: "\u8865\u4EF6"
    }, "\uD83D\uDCE6", ev.refills.length), ev.refunds.length > 0 && /*#__PURE__*/React.createElement("span", {
      title: "\u9000\u6B3E"
    }, "\uD83D\uDCB0", ev.refunds.length))), ((_r$screenshots3 = r.screenshots) === null || _r$screenshots3 === void 0 ? void 0 : _r$screenshots3.filter(function (s) {
      return s && s.data;
    }).length) > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap',
        marginBottom: editable ? 8 : 0
      }
    }, r.screenshots.filter(function (s) {
      return s && s.data;
    }).slice(0, 8).map(function (s, i) {
      return /*#__PURE__*/React.createElement("img", {
        key: s.id || i,
        src: s.data,
        alt: s.name || '',
        className: "img-thumb",
        onClick: function onClick() {
          return setLightboxImg(s.data);
        },
        style: {
          width: 44,
          height: 44,
          objectFit: 'cover',
          borderRadius: 6,
          border: '1px solid var(--line)',
          background: 'var(--bg-elevated)'
        }
      });
    })), editable && function () {
      var hasHighlight = r.category === '拒付' || r.category === '定制咨询' || r.category === '实拍';
      var userExpanded = expandedEventActions.has(r.id);
      var isOpen = userExpanded || hasHighlight;
      if (!isOpen) {
        return /*#__PURE__*/React.createElement("button", {
          onClick: function onClick() {
            return toggleEventActions(r.id);
          },
          title: "\u5C55\u5F00\u4E8B\u4EF6\u6309\u94AE(\u552E\u540E/\u8865\u4EF6/\u9000\u6B3E/\u62D2\u4ED8/\u5B9A\u5236/\u5B9E\u62CD)",
          style: {
            marginTop: 6,
            width: '100%',
            padding: '6px 10px',
            background: '#fafaf7',
            color: 'var(--ink-3)',
            border: '1px dashed var(--line)',
            borderRadius: 8,
            cursor: 'pointer',
            fontSize: 11,
            fontWeight: 500,
            fontFamily: 'inherit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
            transition: 'all .15s'
          },
          onMouseEnter: function onMouseEnter(e) {
            e.currentTarget.style.background = 'white';
            e.currentTarget.style.borderStyle = 'solid';
            e.currentTarget.style.color = 'var(--ink-2)';
          },
          onMouseLeave: function onMouseLeave(e) {
            e.currentTarget.style.background = '#fafaf7';
            e.currentTarget.style.borderStyle = 'dashed';
            e.currentTarget.style.color = 'var(--ink-3)';
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            opacity: .7
          }
        }, "\uD83D\uDCCC \u6DFB\u52A0\u4E8B\u4EF6"), /*#__PURE__*/React.createElement("span", {
          style: {
            opacity: .5,
            fontSize: 9
          }
        }, "\u552E\u540E \xB7 \u8865\u4EF6 \xB7 \u9000\u6B3E \xB7 \u62D2\u4ED8 \xB7 \u5B9A\u5236 \xB7 \u5B9E\u62CD"), /*#__PURE__*/React.createElement("span", {
          style: {
            opacity: .7
          }
        }, "\u25BC"));
      }
      return /*#__PURE__*/React.createElement(React.Fragment, null, userExpanded && !hasHighlight && /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: 6
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return toggleEventActions(r.id);
        },
        style: {
          padding: '2px 8px',
          background: 'transparent',
          color: 'var(--ink-4)',
          border: 'none',
          cursor: 'pointer',
          fontSize: 10,
          fontFamily: 'inherit'
        }
      }, "\u25B2 \u6536\u8D77")), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 6,
          marginTop: hasHighlight ? 6 : 2
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setEventEditor({
            kind: 'aftersale',
            record: r
          });
        },
        title: "\u52A0\u552E\u540E\u4E8B\u4EF6",
        style: {
          padding: '8px 0',
          background: '#fff7ed',
          color: '#ea580c',
          border: '1px solid #fdba74',
          borderRadius: 8,
          cursor: 'pointer',
          fontSize: 12,
          fontWeight: 600,
          fontFamily: 'inherit',
          whiteSpace: 'nowrap',
          transition: 'all .15s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2
        },
        onMouseEnter: function onMouseEnter(e) {
          e.currentTarget.style.background = '#ea580c';
          e.currentTarget.style.color = 'white';
        },
        onMouseLeave: function onMouseLeave(e) {
          e.currentTarget.style.background = '#fff7ed';
          e.currentTarget.style.color = '#ea580c';
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 16
        }
      }, "\uD83D\uDD27"), /*#__PURE__*/React.createElement("span", null, "\u552E\u540E")), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setEventEditor({
            kind: 'refill',
            record: r
          });
        },
        title: "\u52A0\u8865\u4EF6\u4E8B\u4EF6",
        style: {
          padding: '8px 0',
          background: '#e0f2fe',
          color: '#0369a1',
          border: '1px solid #7dd3fc',
          borderRadius: 8,
          cursor: 'pointer',
          fontSize: 12,
          fontWeight: 600,
          fontFamily: 'inherit',
          whiteSpace: 'nowrap',
          transition: 'all .15s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2
        },
        onMouseEnter: function onMouseEnter(e) {
          e.currentTarget.style.background = '#0369a1';
          e.currentTarget.style.color = 'white';
        },
        onMouseLeave: function onMouseLeave(e) {
          e.currentTarget.style.background = '#e0f2fe';
          e.currentTarget.style.color = '#0369a1';
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 16
        }
      }, "\uD83D\uDCE6"), /*#__PURE__*/React.createElement("span", null, "\u8865\u4EF6")), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setEventEditor({
            kind: 'refund',
            record: r
          });
        },
        title: "\u52A0\u9000\u6B3E\u4E8B\u4EF6",
        style: {
          padding: '8px 0',
          background: '#fef2f2',
          color: '#dc2626',
          border: '1px solid #fca5a5',
          borderRadius: 8,
          cursor: 'pointer',
          fontSize: 12,
          fontWeight: 600,
          fontFamily: 'inherit',
          whiteSpace: 'nowrap',
          transition: 'all .15s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2
        },
        onMouseEnter: function onMouseEnter(e) {
          e.currentTarget.style.background = '#dc2626';
          e.currentTarget.style.color = 'white';
        },
        onMouseLeave: function onMouseLeave(e) {
          e.currentTarget.style.background = '#fef2f2';
          e.currentTarget.style.color = '#dc2626';
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 16
        }
      }, "\uD83D\uDCB0"), /*#__PURE__*/React.createElement("span", null, "\u9000\u6B3E")), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setSmartEditor({
            kind: 'chargeback',
            record: r
          });
        },
        title: "\u52A0\u62D2\u4ED8\u8BB0\u5F55",
        style: {
          padding: '8px 0',
          background: r.category === '拒付' ? '#dc2626' : '#fef2f2',
          color: r.category === '拒付' ? 'white' : '#dc2626',
          border: '1px solid ' + (r.category === '拒付' ? '#7f1d1d' : '#fca5a5'),
          borderRadius: 8,
          cursor: 'pointer',
          fontSize: 12,
          fontWeight: 700,
          fontFamily: 'inherit',
          whiteSpace: 'nowrap',
          transition: 'all .15s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          position: 'relative'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 16
        }
      }, "\uD83D\uDEA8"), /*#__PURE__*/React.createElement("span", null, "\u62D2\u4ED8"), r.category === '拒付' && /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          top: -6,
          right: -6,
          padding: '1px 5px',
          background: '#fbbf24',
          color: '#78350f',
          borderRadius: 8,
          fontSize: 9,
          fontWeight: 700
        }
      }, "\u2713")), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setSmartEditor({
            kind: 'custom',
            record: r
          });
        },
        title: "\u52A0\u5B9A\u5236\u54A8\u8BE2",
        style: {
          padding: '8px 0',
          background: r.category === '定制咨询' ? '#7c3aed' : '#f5f3ff',
          color: r.category === '定制咨询' ? 'white' : '#7c3aed',
          border: '1px solid ' + (r.category === '定制咨询' ? '#5b21b6' : '#c4b5fd'),
          borderRadius: 8,
          cursor: 'pointer',
          fontSize: 12,
          fontWeight: 700,
          fontFamily: 'inherit',
          whiteSpace: 'nowrap',
          transition: 'all .15s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          position: 'relative'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 16
        }
      }, "\uD83C\uDFA8"), /*#__PURE__*/React.createElement("span", null, "\u5B9A\u5236"), r.category === '定制咨询' && /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          top: -6,
          right: -6,
          padding: '1px 5px',
          background: '#fbbf24',
          color: '#78350f',
          borderRadius: 8,
          fontSize: 9,
          fontWeight: 700
        }
      }, "\u2713")), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setSmartEditor({
            kind: 'photo',
            record: r
          });
        },
        title: "\u52A0\u5B9E\u62CD\u6838\u5B9E",
        style: {
          padding: '8px 0',
          background: r.category === '实拍' ? '#be185d' : '#fdf2f8',
          color: r.category === '实拍' ? 'white' : '#be185d',
          border: '1px solid ' + (r.category === '实拍' ? '#831843' : '#fbcfe8'),
          borderRadius: 8,
          cursor: 'pointer',
          fontSize: 12,
          fontWeight: 700,
          fontFamily: 'inherit',
          whiteSpace: 'nowrap',
          transition: 'all .15s',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          position: 'relative'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 16
        }
      }, "\uD83D\uDCF8"), /*#__PURE__*/React.createElement("span", null, "\u5B9E\u62CD"), r.category === '实拍' && /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          top: -6,
          right: -6,
          padding: '1px 5px',
          background: '#fbbf24',
          color: '#78350f',
          borderRadius: 8,
          fontSize: 9,
          fontWeight: 700
        }
      }, "\u2713"))));
    }());
  })), /*#__PURE__*/React.createElement("div", {
    className: "p-3 border-t",
    style: {
      borderColor: 'var(--line)',
      background: 'var(--bg)'
    }
  }, canEditRecord({
    date: viewDate
  }, user, adminUnlock) ? /*#__PURE__*/React.createElement("button", {
    onClick: addRow,
    className: "w-full py-2 rounded-lg border-2 border-dashed text-sm font-bold flex items-center justify-center gap-2 transition-colors",
    style: {
      borderColor: 'var(--line)',
      color: 'var(--accent)',
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    className: "w-4 h-4"
  }), "\u6DFB\u52A0\u4E00\u884C") : /*#__PURE__*/React.createElement("div", {
    className: "w-full py-2 rounded-lg border-2 border-dashed text-sm flex items-center justify-center gap-2",
    style: {
      borderColor: 'var(--line)',
      color: 'var(--ink-4)',
      background: 'var(--bg)'
    }
  }, "\uD83D\uDD12 \u5386\u53F2\u65E5\u671F\u4E0D\u53EF\u65B0\u589E", isAdmin ? '（如需更正，请点击上方"主管解锁"）' : '（如有遗漏，请联系主管处理）'))), viewMode === 'all' && tableRecords.length > 0 && /*#__PURE__*/React.createElement(Pagination, {
    currentPage: safePage,
    totalPages: totalPages,
    pageSize: pageSize,
    totalItems: tableRecords.length,
    onPageChange: function onPageChange(p) {
      setPage(p);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    onPageSizeChange: setPageSize,
    position: "bottom"
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-mono flex flex-wrap gap-4",
    style: {
      color: 'var(--ink-4)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Tab \u5207\u6362\u5B57\u6BB5"), /*#__PURE__*/React.createElement("span", null, "\uD83E\uDD16 \u96BE\u5EA6\u81EA\u52A8\u5EFA\u8BAE\uFF1A\u22645\u5206\u7B80\u5355 \xB7 5-10\u5206\u4E2D\u7B49 \xB7 >10\u5206\u590D\u6742"), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCF7 \u70B9\u51FB\"\u622A\u56FE/\u8DDF\u8FDB\"\u6309\u94AE\u53EF\u4E0A\u4F20\u5BA2\u6237\u622A\u56FE"), /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFA8 \u884C\u5DE6\u4FA7\u8272\u6761 = \u8DDF\u8FDB\u72B6\u6001")), followUpModal && function () {
    var r = records.find(function (rec) {
      return rec.id === followUpModal;
    });
    if (!r) return null;
    // 用户点开自己的转交记录 → 标记已读
    if (r.transferUnreadFor === user.id) markTransferRead(r.id);
    // 🆕 fix104: 跟进处理弹窗管理的是案件【前向动作】(状态/跟进记录/截图/反馈),
    // 不是影响绩效的原始指标(邮件量/难度/时长——那些只在列表行里改,仍受历史只读保护)。
    // 因此跟进窗对所有人、任何日期都可编辑,解决"逾期跟进点不了已处理 / 旧记录改不了状态"。
    var modalEditable = true;
    var recordEvents = getRecordEvents(r.id);
    return /*#__PURE__*/React.createElement(FollowUpModal, {
      record: r,
      user: user,
      employees: employees,
      cloudOn: cloudOn,
      readonly: !modalEditable,
      onClose: function onClose() {
        return setFollowUpModal(null);
      },
      onUpdate: function onUpdate(patch) {
        return updateRow(followUpModal, patch);
      },
      toast: toast,
      recordEvents: recordEvents,
      onAddEvent: function onAddEvent(kind) {
        // 旧 3 种(事件主线表)→ 用 EventEditorModal
        if (['aftersale', 'refill', 'refund'].includes(kind)) {
          setEventEditor({
            kind: kind,
            record: r
          });
        } else {
          // 新 3 种(拒付/定制/实拍)→ 用 SmartEditor
          setSmartEditor({
            kind: kind,
            record: r
          });
          setFollowUpModal(null); // 关闭跟进窗,焦点切到新弹窗
        }
      },
      onEditEvent: function onEditEvent(kind, evt) {
        return setEventEditor({
          kind: kind,
          record: r,
          existingEvent: evt
        });
      },
      onDeleteEvent: (/*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(kind, evt) {
          var table, label;
          return _regenerator().w(function (_context5) {
            while (1) switch (_context5.n) {
              case 0:
                table = kind === 'aftersale' ? 'aftersales' : kind === 'refill' ? 'refills' : 'refunds';
                label = kind === 'aftersale' ? '🔧 售后' : kind === 'refill' ? '📦 补件' : '💰 退款';
                _context5.n = 1;
                return requestDelete({
                  user: user,
                  tableName: table,
                  moduleLabel: label,
                  record: evt,
                  recordSummary: "".concat(evt.order_ref || r.orderRef || '?', " \xB7 ").concat(evt.product_name || evt.customer || ''),
                  toast: toast,
                  onSuccess: function onSuccess() {
                    if (kind === 'aftersale') setAftersales(function (prev) {
                      return prev.filter(function (a) {
                        return a.id !== evt.id;
                      });
                    });else if (kind === 'refill') setRefills(function (prev) {
                      return prev.filter(function (x) {
                        return x.id !== evt.id;
                      });
                    });else setRefunds(function (prev) {
                      return prev.filter(function (x) {
                        return x.id !== evt.id;
                      });
                    });
                  }
                });
              case 1:
                return _context5.a(2);
            }
          }, _callee5);
        }));
        return function (_x2, _x3) {
          return _ref17.apply(this, arguments);
        };
      }())
    });
  }(), lightboxImg && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setLightboxImg(null);
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.85)',
      zIndex: 100001,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      cursor: 'zoom-out'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: lightboxImg,
    alt: "",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      maxWidth: '92vw',
      maxHeight: '92vh',
      borderRadius: 8,
      boxShadow: '0 10px 40px rgba(0,0,0,.5)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setLightboxImg(null);
    },
    style: {
      position: 'fixed',
      top: 20,
      right: 24,
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'rgba(255,255,255,.15)',
      color: 'white',
      border: 'none',
      fontSize: 22,
      cursor: 'pointer',
      lineHeight: 1
    }
  }, "\u2715")), eventEditor && /*#__PURE__*/React.createElement(EventEditorModal, {
    kind: eventEditor.kind,
    record: eventEditor.record,
    existingEvent: eventEditor.existingEvent,
    suppliers: suppliers,
    user: user,
    onClose: function onClose() {
      return setEventEditor(null);
    },
    onSaved: handleEventSaved
  }), (smartEditor === null || smartEditor === void 0 ? void 0 : smartEditor.kind) === 'chargeback' && function () {
    var r = smartEditor.record;
    var prefill = {
      order_no: r.orderRef || '',
      customer_email: r.customerEmail || '',
      customer_name: r.customer || '',
      site: r.website || '',
      source_record_id: r.id,
      reason_detail: r.note || ''
    };
    return /*#__PURE__*/React.createElement(ChargebackEditor, {
      cb: prefill,
      user: user,
      employees: employees,
      onClose: function onClose() {
        return setSmartEditor(null);
      },
      onSaved: function onSaved() {
        setSmartEditor(null);
        toast('✓ 已创建拒付记录,可在 🚨拒付 tab 查看');
      },
      toast: toast
    });
  }(), (smartEditor === null || smartEditor === void 0 ? void 0 : smartEditor.kind) === 'custom' && function () {
    var r = smartEditor.record;
    var prefill = {
      customer_name: r.customer || '',
      customer_email: r.customerEmail || '',
      site: r.website || '',
      requirement: r.note || '',
      source_record_id: r.id
    };
    return /*#__PURE__*/React.createElement(CustomInquiryEditor, {
      item: prefill,
      user: user,
      onClose: function onClose() {
        return setSmartEditor(null);
      },
      onSaved: function onSaved() {
        setSmartEditor(null);
        toast('✓ 已创建定制咨询,可在 🎨定制&实拍 tab 查看');
      },
      toast: toast
    });
  }(), (smartEditor === null || smartEditor === void 0 ? void 0 : smartEditor.kind) === 'photo' && function () {
    var r = smartEditor.record;
    var prefill = {
      product_name: r.orderRef || '',
      difference_detail: r.note || '',
      affected_orders: r.orderRef ? [r.orderRef] : [],
      source_record_id: r.id
    };
    return /*#__PURE__*/React.createElement(PhotoVerificationEditor, {
      item: prefill,
      user: user,
      onClose: function onClose() {
        return setSmartEditor(null);
      },
      onSaved: function onSaved() {
        setSmartEditor(null);
        toast('✓ 已创建实拍核实,可在 🎨定制&实拍 tab 查看');
      },
      toast: toast
    });
  }(), transferModal && function () {
    var r = records.find(function (rec) {
      return rec.id === transferModal;
    });
    if (!r) return null;
    var currentOwner = employees.find(function (e) {
      return e.id === r.ownerId;
    });
    return /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return setTransferModal(null);
      },
      style: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.5)',
        zIndex: 9999,
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
        borderRadius: 'var(--radius-lg)',
        maxWidth: 560,
        width: '100%',
        maxHeight: '85vh',
        overflowY: 'auto',
        overflowX: 'hidden',
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-3"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "font-display",
      style: {
        fontSize: 18,
        fontWeight: 600,
        letterSpacing: '-.022em'
      }
    }, "\uD83D\uDD04 \u8F6C\u4EA4\u5DE5\u4F5C"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-3)',
        marginTop: 4
      }
    }, "\u628A\u8FD9\u6761\u8DDF\u8FDB\u8BB0\u5F55\u8F6C\u7ED9\u5176\u4ED6\u5458\u5DE5\uFF08\u4E0D\u5F71\u54CD\u5386\u53F2\u8BB0\u5F55\u5F52\u5C5E\uFF09")), /*#__PURE__*/React.createElement("button", {
      className: "btn-sec",
      onClick: function onClick() {
        return setTransferModal(null);
      },
      style: {
        padding: '4px 12px'
      }
    }, "\xD7")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 12,
        background: 'var(--bg-soft)',
        borderRadius: 'var(--radius)',
        marginBottom: 14,
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        marginBottom: 4
      }
    }, r.orderRef || r.customer || '(无订单号)'), r.customer && r.orderRef && /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--ink-3)',
        fontSize: 12
      }
    }, r.customer), r.note && /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--ink-2)',
        fontSize: 12,
        marginTop: 4
      }
    }, "\uD83D\uDCAC ", r.note), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--ink-3)',
        fontSize: 11,
        marginTop: 6
      }
    }, "\u5F53\u524D\u5F52\u5C5E\uFF1A", /*#__PURE__*/React.createElement("strong", null, (currentOwner === null || currentOwner === void 0 ? void 0 : currentOwner.name) || '?', currentOwner !== null && currentOwner !== void 0 && currentOwner.alias ? ' ' + currentOwner.alias : ''), r.nextFollowUp && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 8
      }
    }, "\xB7 \u4E0B\u6B21\u8DDF\u8FDB\uFF1A", r.nextFollowUp))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-3)',
        marginBottom: 8,
        fontWeight: 600
      }
    }, "\u9009\u62E9\u65B0\u7684\u8D1F\u8D23\u4EBA\uFF1A"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
        gap: 8
      }
    }, employees.filter(function (e) {
      return e.role !== 'finance' && e.id !== r.ownerId;
    }).map(function (emp) {
      // 统计该员工当前未完成工作数
      var workload = records.filter(function (rec) {
        return rec.ownerId === emp.id && !rec.deleted && rec.status !== 'resolved';
      }).length;
      return /*#__PURE__*/React.createElement("button", {
        key: emp.id,
        onClick: function onClick() {
          return transferRecord(r.id, emp.id);
        },
        style: {
          padding: '10px 12px',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--line)',
          background: 'white',
          cursor: 'pointer',
          textAlign: 'left',
          transition: 'all .15s',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          fontFamily: 'inherit'
        },
        onMouseEnter: function onMouseEnter(e) {
          e.currentTarget.style.borderColor = 'var(--accent)';
          e.currentTarget.style.background = 'var(--accent-soft)';
        },
        onMouseLeave: function onMouseLeave(e) {
          e.currentTarget.style.borderColor = 'var(--line)';
          e.currentTarget.style.background = 'white';
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 600,
          fontSize: 13,
          color: 'var(--ink)'
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
      }, "\u2B50")), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          color: 'var(--ink-3)'
        }
      }, emp.sites || emp.title || '-'), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 10,
          color: workload > 8 ? 'var(--bad)' : workload > 4 ? 'var(--gold)' : 'var(--ink-4)',
          marginTop: 2
        }
      }, "\u5F53\u524D ", workload, " \u5355\u672A\u5B8C\u6210"));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-4)',
        marginTop: 12,
        lineHeight: 1.5,
        padding: '8px 10px',
        background: '#fef7ec',
        borderRadius: 6
      }
    }, "\uD83D\uDCA1 \u8F6C\u4EA4\u540E\uFF1A\u65B0\u8D1F\u8D23\u4EBA\u4F1A\u5728\u81EA\u5DF1\u7684\u5217\u8868\u91CC\u770B\u5230\u8FD9\u6761\u8DDF\u8FDB\uFF0C\u539F\u8D1F\u8D23\u4EBA\u4E0D\u518D\u770B\u5230\u3002\u4F46\u5386\u53F2\u8BB0\u5F55\uFF08\u4E4B\u524D\u7684\u8DDF\u8FDB\u4FE1\u606F\uFF09\u4FDD\u7559\u5B8C\u6574\u3002")));
  }(), statusMenuOpen && function () {
    var r = (tableRecords || []).find(function (x) {
      return x.id === statusMenuOpen;
    });
    if (!r) return null;
    var styleMap = {
      pending: {
        bg: '#f5f5f7',
        border: '#86868b',
        color: '#525252'
      },
      following: {
        bg: '#fff7ed',
        border: '#ff9500',
        color: '#9a3412'
      },
      waiting: {
        bg: '#e0f2fe',
        border: '#0071e3',
        color: '#075985'
      },
      resolved: {
        bg: '#dcfce7',
        border: '#34c759',
        color: '#14532d'
      },
      transferred: {
        bg: '#fef3c7',
        border: '#d97706',
        color: '#854d0e'
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "status-dropdown-portal",
      style: {
        position: 'fixed',
        top: statusDropdownPos.top,
        left: statusDropdownPos.left,
        minWidth: statusDropdownPos.width,
        zIndex: 9999,
        background: 'white',
        border: '1px solid var(--line)',
        borderRadius: 8,
        boxShadow: '0 12px 32px rgba(0,0,0,.18)',
        overflow: 'hidden'
      }
    }, STATUSES.map(function (s) {
      var ss = styleMap[s.key] || styleMap.pending;
      var active = s.key === r.status;
      return /*#__PURE__*/React.createElement("div", {
        key: s.key,
        onClick: function onClick() {
          updateRow(r.id, {
            status: s.key
          });
          setStatusMenuOpen(null);
        },
        style: {
          padding: '8px 14px',
          fontSize: 13,
          cursor: 'pointer',
          background: active ? ss.bg : 'white',
          color: active ? ss.color : 'var(--ink-2)',
          fontWeight: active ? 600 : 400,
          borderLeft: active ? '3px solid ' + ss.border : '3px solid transparent',
          whiteSpace: 'nowrap',
          transition: 'background .1s'
        },
        onMouseEnter: function onMouseEnter(e) {
          if (!active) e.currentTarget.style.background = '#f5f5f7';
        },
        onMouseLeave: function onMouseLeave(e) {
          if (!active) e.currentTarget.style.background = 'white';
        }
      }, s.label);
    }));
  }(), batchTransferModal && /*#__PURE__*/React.createElement(BatchTransferModal, {
    employees: employees,
    records: records,
    user: user,
    fromUserId: batchTransferModal.fromUserId,
    setFromUserId: function setFromUserId(id) {
      return setBatchTransferModal({
        fromUserId: id
      });
    },
    onClose: function onClose() {
      return setBatchTransferModal(null);
    },
    onTransfer: batchTransferRecords
  }));
};

// ============================================================
// 📄 分页组件 - 首页/上一页/页码/下一页/末页 + 每页条数
// ============================================================
var Pagination = function Pagination(_ref18) {
  var currentPage = _ref18.currentPage,
    totalPages = _ref18.totalPages,
    pageSize = _ref18.pageSize,
    totalItems = _ref18.totalItems,
    onPageChange = _ref18.onPageChange,
    onPageSizeChange = _ref18.onPageSizeChange,
    _ref18$position = _ref18.position,
    position = _ref18$position === void 0 ? 'bottom' : _ref18$position;
  if (totalItems === 0) return null;

  // 生成显示的页码 - 当前页前后各 2 页 + 首尾
  var getPageNumbers = function getPageNumbers() {
    var pages = [];
    var showAround = 2;
    if (totalPages <= 7) {
      // 总页数少 → 全显示
      for (var i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > showAround + 2) pages.push('...');
      var start = Math.max(2, currentPage - showAround);
      var end = Math.min(totalPages - 1, currentPage + showAround);
      for (var _i = start; _i <= end; _i++) pages.push(_i);
      if (currentPage < totalPages - showAround - 1) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };
  var startIdx = (currentPage - 1) * pageSize + 1;
  var endIdx = Math.min(currentPage * pageSize, totalItems);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 10,
      padding: '10px 14px',
      background: 'var(--bg-elevated)',
      borderRadius: 10,
      border: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onPageChange(1);
    },
    disabled: currentPage === 1,
    title: "\u7B2C\u4E00\u9875",
    style: {
      padding: '5px 9px',
      borderRadius: 5,
      border: '1px solid var(--line)',
      background: 'white',
      cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
      fontSize: 12,
      fontFamily: 'inherit',
      color: currentPage === 1 ? '#ccc' : 'var(--ink-2)'
    }
  }, "\xAB \u9996\u9875"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onPageChange(currentPage - 1);
    },
    disabled: currentPage === 1,
    style: {
      padding: '5px 9px',
      borderRadius: 5,
      border: '1px solid var(--line)',
      background: 'white',
      cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
      fontSize: 12,
      fontFamily: 'inherit',
      color: currentPage === 1 ? '#ccc' : 'var(--ink-2)'
    }
  }, "\u2039 \u4E0A\u4E00\u9875"), getPageNumbers().map(function (p, idx) {
    return p === '...' ? /*#__PURE__*/React.createElement("span", {
      key: 'dot_' + idx,
      style: {
        padding: '5px 4px',
        color: 'var(--ink-4)',
        fontSize: 12
      }
    }, "\xB7\xB7\xB7") : /*#__PURE__*/React.createElement("button", {
      key: p,
      onClick: function onClick() {
        return onPageChange(p);
      },
      style: {
        padding: '5px 10px',
        borderRadius: 5,
        border: '1px solid ' + (p === currentPage ? 'var(--accent)' : 'var(--line)'),
        background: p === currentPage ? 'var(--accent)' : 'white',
        color: p === currentPage ? 'white' : 'var(--ink)',
        cursor: 'pointer',
        fontSize: 12,
        fontFamily: 'inherit',
        fontWeight: p === currentPage ? 600 : 400,
        minWidth: 32
      }
    }, p);
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onPageChange(currentPage + 1);
    },
    disabled: currentPage === totalPages,
    style: {
      padding: '5px 9px',
      borderRadius: 5,
      border: '1px solid var(--line)',
      background: 'white',
      cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
      fontSize: 12,
      fontFamily: 'inherit',
      color: currentPage === totalPages ? '#ccc' : 'var(--ink-2)'
    }
  }, "\u4E0B\u4E00\u9875 \u203A"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onPageChange(totalPages);
    },
    disabled: currentPage === totalPages,
    title: "\u6700\u540E\u4E00\u9875",
    style: {
      padding: '5px 9px',
      borderRadius: 5,
      border: '1px solid var(--line)',
      background: 'white',
      cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
      fontSize: 12,
      fontFamily: 'inherit',
      color: currentPage === totalPages ? '#ccc' : 'var(--ink-2)'
    }
  }, "\u672B\u9875 \xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "\u8DF3\u8F6C"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: 1,
    max: totalPages,
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') {
        var p = parseInt(e.target.value);
        if (p >= 1 && p <= totalPages) {
          onPageChange(p);
          e.target.value = '';
        }
      }
    },
    placeholder: String(currentPage),
    style: {
      width: 55,
      padding: '4px 6px',
      border: '1px solid var(--line)',
      borderRadius: 5,
      fontSize: 12,
      textAlign: 'center'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "\u9875"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "\u7B2C ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, startIdx, "-", endIdx), " \u6761 / \u5171 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, totalItems), " \u6761"), /*#__PURE__*/React.createElement("select", {
    value: pageSize,
    onChange: function onChange(e) {
      return onPageSizeChange(parseInt(e.target.value));
    },
    style: {
      padding: '4px 8px',
      border: '1px solid var(--line)',
      borderRadius: 5,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: 50
  }, "50 \u6761/\u9875"), /*#__PURE__*/React.createElement("option", {
    value: 100
  }, "100 \u6761/\u9875"), /*#__PURE__*/React.createElement("option", {
    value: 200
  }, "200 \u6761/\u9875"), /*#__PURE__*/React.createElement("option", {
    value: 500
  }, "500 \u6761/\u9875"))));
};
var StatCard = function StatCard(_ref19) {
  var label = _ref19.label,
    value = _ref19.value,
    unit = _ref19.unit,
    color = _ref19.color,
    hint = _ref19.hint,
    onClick = _ref19.onClick,
    active = _ref19.active;
  var clickable = !!onClick;
  var accent = color || 'var(--accent)';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: active ? 'var(--paper)' : 'var(--bg-elevated)',
      border: active ? "1.5px solid ".concat(accent) : '1px solid transparent',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 20px',
      cursor: clickable ? 'pointer' : 'default',
      transition: 'background .2s, border-color .2s, box-shadow .2s, transform .15s',
      boxShadow: 'none',
      position: 'relative'
    },
    onMouseEnter: clickable ? function (e) {
      if (!active) {
        e.currentTarget.style.background = 'var(--paper)';
        e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      }
    } : null,
    onMouseLeave: clickable ? function (e) {
      if (!active) {
        e.currentTarget.style.background = 'var(--bg-elevated)';
        e.currentTarget.style.boxShadow = 'none';
      }
    } : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: 'var(--ink-3)',
      fontWeight: 500,
      marginBottom: '6px',
      letterSpacing: '-.003em',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), active && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      color: accent,
      fontWeight: 600,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '2px'
    }
  }, "\u25CF \u5DF2\u7B5B\u9009"), clickable && !active && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '10px',
      color: 'var(--ink-4)',
      opacity: .6
    }
  }, "\u70B9\u51FB\u7B5B\u9009")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display tabular-nums",
    style: {
      fontSize: '30px',
      fontWeight: 600,
      letterSpacing: '-.022em',
      color: accent,
      lineHeight: 1.1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: 'var(--ink-3)',
      fontWeight: 400
    }
  }, unit)), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '11px',
      color: 'var(--ink-4)',
      marginTop: '4px',
      minHeight: '14px'
    }
  }, hint));
};

// ============================================================
// 跟进 / 截图 Modal
// ============================================================
// ============================================================
// 批量转交工作 Modal — 主管选源员工 + 多选记录 + 选目标员工
// ============================================================
// ============================================================
// 🆕 多图上传组件（粘贴 / 拖拽 / 点击 + 自动分类标签）
// ============================================================
// ============================================================
// 🆕 文件类型识别 + 工具函数
// ============================================================
var getFileTypeInfo = function getFileTypeInfo(fileObj) {
  var _name$split$pop;
  var name = fileObj.name || '';
  var mime = fileObj.type || fileObj.mime || '';
  var urlStr = (fileObj.url || fileObj.dataUrl || '').toLowerCase();
  var ext = ((_name$split$pop = name.split('.').pop()) === null || _name$split$pop === void 0 ? void 0 : _name$split$pop.toLowerCase()) || '';
  var isImgUrl = /^data:image\//i.test(fileObj.url || fileObj.dataUrl || '') || /\.(jpg|jpeg|png|gif|webp|svg|bmp)(\?|$)/i.test(urlStr);
  var isVidUrl = /\.(mp4|webm|mov|avi|m4v)(\?|$)/i.test(urlStr);
  if (fileObj.kind === 'image' || mime.startsWith('image/') || ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'bmp'].includes(ext) || isImgUrl) {
    return {
      kind: 'image',
      icon: '🖼',
      color: '#0369a1',
      label: '图片'
    };
  }
  if (fileObj.kind === 'video' || mime.startsWith('video/') || ['mp4', 'webm', 'mov', 'avi'].includes(ext) || isVidUrl) {
    return {
      kind: 'video',
      icon: '🎬',
      color: '#7c3aed',
      label: '视频'
    };
  }
  if (mime.startsWith('audio/') || ['mp3', 'wav', 'ogg'].includes(ext)) {
    return {
      kind: 'audio',
      icon: '🎵',
      color: '#0891b2',
      label: '音频'
    };
  }
  if (ext === 'pdf' || mime === 'application/pdf') {
    return {
      kind: 'pdf',
      icon: '📕',
      color: '#dc2626',
      label: 'PDF'
    };
  }
  if (['ppt', 'pptx'].includes(ext) || mime.includes('presentation') || mime.includes('powerpoint')) {
    return {
      kind: 'pptx',
      icon: '📊',
      color: '#d97706',
      label: 'PPT'
    };
  }
  if (['xls', 'xlsx'].includes(ext) || mime.includes('spreadsheet') || mime.includes('excel')) {
    return {
      kind: 'xlsx',
      icon: '📈',
      color: '#16a34a',
      label: 'Excel'
    };
  }
  if (['doc', 'docx'].includes(ext) || mime.includes('wordprocessingml') || mime.includes('msword')) {
    return {
      kind: 'docx',
      icon: '📘',
      color: '#1d4ed8',
      label: 'Word'
    };
  }
  if (['txt', 'csv', 'md'].includes(ext) || mime.startsWith('text/')) {
    return {
      kind: 'text',
      icon: '📄',
      color: '#525252',
      label: '文本'
    };
  }
  if (['zip', 'rar', '7z'].includes(ext)) {
    return {
      kind: 'zip',
      icon: '📦',
      color: '#737373',
      label: '压缩包'
    };
  }
  return {
    kind: 'other',
    icon: '📎',
    color: '#737373',
    label: '文件'
  };
};
var formatFileSize = function formatFileSize(bytes) {
  if (!bytes && bytes !== 0) return '';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / 1048576).toFixed(1) + ' MB';
};

// ============================================================
// 🆕 文件预览 modal - 支持 PDF / Office / 图片 / 视频
// ============================================================
var FilePreviewModal = function FilePreviewModal(_ref20) {
  var file = _ref20.file,
    onClose = _ref20.onClose;
  if (!file) return null;
  var typeInfo = getFileTypeInfo(file);
  var renderPreview = function renderPreview() {
    if (typeInfo.kind === 'image') {
      return /*#__PURE__*/React.createElement("img", {
        src: file.url,
        style: {
          maxWidth: '100%',
          maxHeight: '80vh',
          objectFit: 'contain'
        }
      });
    }
    if (typeInfo.kind === 'video') {
      return /*#__PURE__*/React.createElement("video", {
        src: file.url,
        controls: true,
        autoPlay: true,
        style: {
          maxWidth: '100%',
          maxHeight: '80vh',
          background: 'black'
        }
      });
    }
    if (typeInfo.kind === 'audio') {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 40,
          background: 'white',
          borderRadius: 12,
          minWidth: 400
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 64,
          textAlign: 'center',
          marginBottom: 14
        }
      }, "\uD83C\uDFB5"), /*#__PURE__*/React.createElement("audio", {
        src: file.url,
        controls: true,
        autoPlay: true,
        style: {
          width: '100%'
        }
      }));
    }
    if (typeInfo.kind === 'pdf') {
      return /*#__PURE__*/React.createElement("iframe", {
        src: file.url,
        style: {
          width: '90vw',
          height: '85vh',
          border: 'none',
          borderRadius: 8,
          background: 'white'
        },
        title: "PDF \u9884\u89C8"
      });
    }
    if (['pptx', 'xlsx', 'docx'].includes(typeInfo.kind)) {
      var officeUrl = "https://view.officeapps.live.com/op/embed.aspx?src=".concat(encodeURIComponent(file.url));
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: '92vw',
          height: '85vh',
          background: 'white',
          borderRadius: 8,
          overflow: 'hidden'
        }
      }, /*#__PURE__*/React.createElement("iframe", {
        src: officeUrl,
        style: {
          width: '100%',
          height: '100%',
          border: 'none'
        },
        title: "Office \u9884\u89C8",
        allowFullScreen: true
      }));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 40,
        background: 'white',
        borderRadius: 12,
        textAlign: 'center',
        minWidth: 340
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 64,
        marginBottom: 14
      }
    }, typeInfo.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: 600,
        marginBottom: 6
      }
    }, file.name || '文件'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-3)',
        marginBottom: 16
      }
    }, typeInfo.label, " \xB7 ", formatFileSize(file.size)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: '#854d0e',
        marginBottom: 14,
        padding: 10,
        background: '#fef3c7',
        borderRadius: 6,
        border: '1px solid #fcd34d'
      }
    }, "\uD83D\uDCA1 \u6B64\u7C7B\u578B\u6682\u4E0D\u652F\u6301\u5728\u7EBF\u9884\u89C8\uFF0C\u8BF7\u4E0B\u8F7D\u5230\u672C\u5730\u67E5\u770B"), /*#__PURE__*/React.createElement("a", {
      href: file.url,
      download: file.name,
      target: "_blank",
      rel: "noopener noreferrer",
      style: {
        display: 'inline-block',
        padding: '10px 24px',
        background: 'var(--accent)',
        color: 'white',
        borderRadius: 8,
        textDecoration: 'none',
        fontSize: 13,
        fontWeight: 600
      }
    }, "\uD83D\uDCE5 \u4E0B\u8F7D\u6587\u4EF6"));
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.85)',
      zIndex: 2000000,
      display: 'flex',
      flexDirection: 'column',
      padding: 20,
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, typeInfo.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, file.name || '附件'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      opacity: .7
    }
  }, typeInfo.label, " \xB7 ", formatFileSize(file.size)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: file.url,
    download: file.name,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      padding: '6px 14px',
      background: 'rgba(255,255,255,.15)',
      color: 'white',
      borderRadius: 6,
      textDecoration: 'none',
      fontSize: 12,
      fontWeight: 600
    }
  }, "\uD83D\uDCE5 \u4E0B\u8F7D"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      padding: '6px 14px',
      background: 'rgba(255,255,255,.15)',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\u2715 \u5173\u95ED"))), /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, renderPreview()));
};

// ============================================================
// 🆕 通用多文件上传（支持任意类型）
// ============================================================
var MultiFileUploader = function MultiFileUploader(_ref21) {
  var files = _ref21.files,
    setFiles = _ref21.setFiles,
    _ref21$bucket = _ref21.bucket,
    bucket = _ref21$bucket === void 0 ? 'briefing-files' : _ref21$bucket,
    _ref21$maxSize = _ref21.maxSize,
    maxSize = _ref21$maxSize === void 0 ? 50 : _ref21$maxSize,
    _ref21$accept = _ref21.accept,
    accept = _ref21$accept === void 0 ? '*' : _ref21$accept;
  var fileInputRef = React.useRef(null);
  var dropRef = React.useRef(null);
  var _useState91 = useState(false),
    _useState92 = _slicedToArray(_useState91, 2),
    uploading = _useState92[0],
    setUploading = _useState92[1];
  var _useState93 = useState(null),
    _useState94 = _slicedToArray(_useState93, 2),
    expandedId = _useState94[0],
    setExpandedId = _useState94[1];
  var uploadOne = /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(file) {
      var res, newFile, _t3;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            if (!(file.size > maxSize * 1024 * 1024)) {
              _context6.n = 1;
              break;
            }
            alert("\"".concat(file.name, "\" \u8D85\u8FC7 ").concat(maxSize, "MB \u9650\u5236\uFF0C\u8BF7\u538B\u7F29\u540E\u518D\u4E0A\u4F20"));
            return _context6.a(2);
          case 1:
            setUploading(true);
            _context6.p = 2;
            _context6.n = 3;
            return CLOUD.uploadFile(bucket, file);
          case 3:
            res = _context6.v;
            if (res) {
              _context6.n = 4;
              break;
            }
            alert('上传失败：' + file.name);
            setUploading(false);
            return _context6.a(2);
          case 4:
            newFile = {
              id: 'f_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
              url: res.url,
              path: res.path,
              name: res.name,
              size: res.size,
              type: res.type,
              uploaded_at: new Date().toISOString()
            };
            setFiles([].concat(_toConsumableArray(files || []), [newFile]));
            _context6.n = 6;
            break;
          case 5:
            _context6.p = 5;
            _t3 = _context6.v;
            alert('上传失败: ' + _t3.message);
          case 6:
            setUploading(false);
          case 7:
            return _context6.a(2);
        }
      }, _callee6, null, [[2, 5]]);
    }));
    return function uploadOne(_x4) {
      return _ref22.apply(this, arguments);
    };
  }();
  var handleFiles = /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(fileList) {
      var _i2, _Array$from, f;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            if (fileList) {
              _context7.n = 1;
              break;
            }
            return _context7.a(2);
          case 1:
            _i2 = 0, _Array$from = Array.from(fileList);
          case 2:
            if (!(_i2 < _Array$from.length)) {
              _context7.n = 4;
              break;
            }
            f = _Array$from[_i2];
            _context7.n = 3;
            return uploadOne(f);
          case 3:
            _i2++;
            _context7.n = 2;
            break;
          case 4:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function handleFiles(_x5) {
      return _ref23.apply(this, arguments);
    };
  }();
  useEffect(function () {
    var handler = function handler(e) {
      var _e$clipboardData;
      var items = (_e$clipboardData = e.clipboardData) === null || _e$clipboardData === void 0 ? void 0 : _e$clipboardData.items;
      if (!items) return;
      var _iterator = _createForOfIteratorHelper(items),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var it = _step.value;
          var f = it.getAsFile();
          if (f) {
            uploadOne(f);
            e.preventDefault();
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };
    var el = dropRef.current;
    if (!el) return;
    el.addEventListener('paste', handler);
    return function () {
      return el.removeEventListener('paste', handler);
    };
  }, [files]);
  var removeFile = /*#__PURE__*/function () {
    var _ref24 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(file) {
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            _context8.n = 1;
            return wsConfirm("\u5220\u9664 \"".concat(file.name, "\"\uFF1F"));
          case 1:
            if (_context8.v) {
              _context8.n = 2;
              break;
            }
            return _context8.a(2);
          case 2:
            if (!file.path) {
              _context8.n = 3;
              break;
            }
            _context8.n = 3;
            return CLOUD.deleteImage(bucket, file.path);
          case 3:
            setFiles(files.filter(function (f) {
              return f.id !== file.id;
            }));
          case 4:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    return function removeFile(_x6) {
      return _ref24.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    ref: dropRef,
    tabIndex: 0,
    onClick: function onClick() {
      var _fileInputRef$current;
      return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
    },
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.background = 'var(--accent-soft)';
    },
    onDragLeave: function onDragLeave(e) {
      e.currentTarget.style.borderColor = 'var(--line)';
      e.currentTarget.style.background = '#fafafa';
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      e.currentTarget.style.borderColor = 'var(--line)';
      e.currentTarget.style.background = '#fafafa';
      handleFiles(e.dataTransfer.files);
    },
    style: {
      border: '2px dashed var(--line)',
      borderRadius: 10,
      padding: '16px',
      textAlign: 'center',
      cursor: 'pointer',
      background: '#fafafa',
      transition: 'all .15s',
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-2)',
      fontWeight: 500
    }
  }, uploading ? '⏳ 上传中...' : '📎 拖拽 / 粘贴 / 点击上传文件'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)',
      marginTop: 4
    }
  }, "\u652F\u6301\u56FE\u7247 / PDF / PPT / Excel / Word / \u89C6\u9891\u7B49 \xB7 \u5355\u6587\u4EF6\u6700\u5927 ", maxSize, "MB \xB7 \u53EF\u6279\u91CF"), /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    accept: accept,
    multiple: true,
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      handleFiles(e.target.files);
      e.target.value = '';
    }
  })), files && files.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#15803d',
      fontWeight: 600,
      marginBottom: 6
    }
  }, "\u2705 \u5DF2\u6DFB\u52A0 ", files.length, " \u4E2A\u6587\u4EF6 \xB7 \u4FDD\u5B58\u8868\u5355\u65F6\u81EA\u52A8\u4E00\u5E76\u5B58\u5165 \xB7 \u70B9\u7F29\u7565\u56FE\u539F\u5730\u5C55\u5F00\u770B\u5927\u56FE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, files.map(function (f) {
    var info = getFileTypeInfo(f);
    var isImg = info.kind === 'image';
    var isOpen = expandedId === f.id;
    var toggle = function toggle() {
      if (isImg) setExpandedId(isOpen ? null : f.id);else window.open(f.url, '_blank');
    };
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      style: {
        background: 'white',
        border: '1px solid var(--line)',
        borderRadius: 8,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: 8
      }
    }, isImg ? /*#__PURE__*/React.createElement("img", {
      src: f.url,
      style: {
        width: 40,
        height: 40,
        objectFit: 'cover',
        borderRadius: 5,
        flexShrink: 0,
        cursor: 'pointer'
      },
      onClick: toggle
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        background: info.color + '15',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        flexShrink: 0,
        cursor: 'pointer'
      },
      onClick: toggle
    }, info.icon), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        cursor: 'pointer'
      },
      onClick: toggle
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--ink)',
        fontWeight: 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, f.name || '未命名'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)',
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 5px',
        background: info.color + '15',
        color: info.color,
        borderRadius: 3,
        fontWeight: 600
      }
    }, info.label), ' · ', formatFileSize(f.size))), isImg ? /*#__PURE__*/React.createElement("button", {
      onClick: toggle,
      style: {
        padding: '4px 10px',
        background: '#e0f2fe',
        color: '#0369a1',
        border: '1px solid #7dd3fc',
        borderRadius: 5,
        cursor: 'pointer',
        fontSize: 11,
        fontWeight: 600,
        fontFamily: 'inherit',
        flexShrink: 0
      }
    }, isOpen ? '收起 ▲' : '👁 预览') : /*#__PURE__*/React.createElement("a", {
      href: f.url,
      target: "_blank",
      rel: "noreferrer",
      style: {
        padding: '4px 10px',
        background: '#e0f2fe',
        color: '#0369a1',
        border: '1px solid #7dd3fc',
        borderRadius: 5,
        fontSize: 11,
        fontWeight: 600,
        textDecoration: 'none',
        flexShrink: 0
      }
    }, "\u2197 \u6253\u5F00"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeFile(f);
      },
      style: {
        padding: '4px 8px',
        background: '#fef2f2',
        color: '#dc2626',
        border: '1px solid #fca5a5',
        borderRadius: 5,
        cursor: 'pointer',
        fontSize: 11,
        fontFamily: 'inherit',
        flexShrink: 0
      }
    }, "\u2715")), isOpen && isImg && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 10,
        borderTop: '1px solid var(--line)',
        background: '#111',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: f.url,
      alt: f.name,
      style: {
        maxWidth: '100%',
        maxHeight: 380,
        borderRadius: 6,
        objectFit: 'contain'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return wsOpenImg(f.url);
      },
      style: {
        background: 'none',
        border: 'none',
        fontSize: 11,
        color: '#7dd3fc',
        cursor: 'pointer',
        padding: 0
      }
    }, "\u2197 \u5728\u65B0\u6807\u7B7E\u6253\u5F00\u539F\u56FE"))));
  }))));
};

// ============================================================
// 🆕 文件芯片（列表中紧凑显示一个文件，点击预览）
// ============================================================
var FileChip = function FileChip(_ref25) {
  var file = _ref25.file,
    onClick = _ref25.onClick;
  var info = getFileTypeInfo(file);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 10px',
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 12,
      transition: 'all .15s'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.borderColor = info.color;
      e.currentTarget.style.background = info.color + '08';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.borderColor = 'var(--line)';
      e.currentTarget.style.background = 'white';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      flexShrink: 0
    }
  }, info.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink)',
      fontWeight: 500,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, file.name || '附件'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)'
    }
  }, info.label, " \xB7 ", formatFileSize(file.size))), /*#__PURE__*/React.createElement("span", {
    style: {
      color: info.color,
      fontSize: 11,
      flexShrink: 0,
      fontWeight: 600
    }
  }, "\u9884\u89C8 \u203A"));
};

// ============================================================
// 🆕 每日温暖问候 - 根据时间和姓名生成个性化的一句话
// ============================================================
var GREETINGS_LIB = {
  // 早晨 5-11 点
  morning: ['{name}，早安 ☀️ 今天又是元气满满的一天', '早上好 {name}，慢慢来，一切都来得及', '哈喽 {name}，听说今天会比昨天更好', '{name}，早安！希望今天遇到的客户都很温柔', '嘿 {name}，准备好开始今天的小冒险了吗', '{name}，新的一天，从一杯水开始吧 💧', '早安 {name}，请允许我说一句：你比想象中更厉害', '{name}，深呼吸，从容应对，今天我们一起加油 🌿', '早上好 {name}，愿今天的邮件都好回复', '嗨 {name}，今天的你格外可爱（认真的）', '{name}，新的一天开始啦，记得对自己温柔一点', '早安 {name}，听到没——你今天会很顺利的 ✨', '{name}，请允许我提醒你：你已经做得很好了'],
  // 中午 11-14 点
  noon: ['{name}，午饭好好吃，别忘了喝水', '嗨 {name}，吃点好的吧，下午的力气全靠它了 🍱', '{name}，记得抬头看看外面的阳光哦 🌤', '午安 {name}，再坚持一小会儿就可以吃饭啦', '{name}，给眼睛放个假，不看屏幕 30 秒', '中午好 {name}，给胃一点温柔吧', '{name}，工作再忙，也要好好吃饭哦'],
  // 下午 14-18 点
  afternoon: ['{name}，下午好，一杯咖啡时间到 ☕', '嗨 {name}，最艰难的时候过去了，加油 🌈', '{name}，离下班又近了一步，要不要奖励一下自己', '下午也要好好的 {name}，你已经做得很棒了', '{name}，喝杯水歇一下，不急', '嘿 {name}，下午的阳光是不是温柔了一些', '{name}，记得伸个懒腰，肩颈不要太累'],
  // 晚上 18-22 点
  evening: ['{name}，辛苦了，今天的你很努力 ❤️', '嗨 {name}，到点了，回家吧,今天到此为止', '{name}，今天的工作交给明天的你处理,OK', '累了就早点休息 {name},没什么是睡一觉解决不了的', '{name}，今天你帮了很多人，谢谢你', '辛苦啦 {name},今晚记得吃顿好的 🍲', '{name}，今天又是好好打工的一天,你真棒', '{name} 辛苦了 ❤️ 今天的难都已经过去了', '辛苦了 {name},今天每一封邮件你都认真回了', '{name},一天的疲惫,值得一顿好饭来犒劳', '辛苦 {name},今天处理了那么多事情,真的很厉害', '{name} 别忙太晚,今天的成果已经够漂亮了'],
  // 深夜 22-5 点
  late: ['{name},这么晚还在,注意身体哦 🌙', '{name},再不睡就要变身了,赶紧休息', '嘿 {name},明天再说吧,今晚先好好睡', '{name},世界很大,但你需要先睡个好觉', '夜深了 {name},工作可以慢慢做,身体只有一个', '{name} 辛苦了,这么晚还在岗,记得早点收工', '{name},再坚强的人也需要休息,今天到这里吧'],
  // 周一专属
  monday: ['{name}，新的一周，新的开始 ✨', '周一的 {name}，慢热没关系，给自己一点时间', '{name}，周一好，今天不需要完美，能完成就行'],
  // 周五专属
  friday: ['{name}，撑过今天就是周末啦 🎉', '周五好 {name}，今天也要把笑容带回家', '{name}，今天的你要再坚持一下下'],
  // 周末（在加班）
  weekend: ['{name}，周末还在工作，记得多休息一会儿', '{name}，是元气满满的一天还是想躺平的一天？都可以', '嘿 {name}，工作和生活，今天先选生活吧']
};
var DailyGreeting = function DailyGreeting(_ref26) {
  var user = _ref26.user;
  var now = new Date();
  var today = now.toISOString().slice(0, 10);
  var hour = now.getHours();

  // 🆕 早中晚三段 - 每天每段每个用户最多显示一次（一天最多 3 次）
  // 早: 5-11 点 · 中: 11-18 点 · 晚: 18+ / -5 点
  var timeSlot = hour >= 5 && hour < 11 ? 'morning' : hour >= 11 && hour < 18 ? 'noon' : 'evening';
  var storageKey = "greeting_shown_".concat(user.id, "_").concat(today, "_").concat(timeSlot);
  var _useState95 = useState(function () {
      try {
        return localStorage.getItem(storageKey) === '1';
      } catch (_unused3) {
        return false;
      }
    }),
    _useState96 = _slicedToArray(_useState95, 2),
    hidden = _useState96[0],
    setHidden = _useState96[1];

  // 渲染时立即标记"已显示",避免同一时段刷新页面又出来
  useEffect(function () {
    if (!hidden) {
      try {
        localStorage.setItem(storageKey, '1');
      } catch (_unused4) {}
    }
  }, [storageKey, hidden]);
  if (hidden) return null;

  // 🆕 亲切称呼算法:
  //   1. 有英文别名(alias) → 用 alias(例如 Jane / Nicole / Aletta)
  //   2. 无 alias 但名字含中文 → 去掉姓,只用名(例如 "罗燕秋" → "燕秋","谭燕灵" → "燕灵")
  //   3. 无 alias 且全英文(例如 Martin / Sarah) → 直接用全名(不切第一字符)
  //   4. 单字名 / 复姓不好判断时直接用全名
  var getFriendlyName = function getFriendlyName(u) {
    if (u.alias && u.alias.trim()) return u.alias.trim();
    var fullName = (u.name || '').trim();
    if (!fullName) return '同事';
    // 🆕 fix54: 不是中文名(纯英文/数字/符号)直接整个返回
    // 例如 Martin / Sarah / Mike — 之前被切成 artin / arah / ike,大 bug
    var hasChinese = /[\u4e00-\u9fa5]/.test(fullName);
    if (!hasChinese) return fullName;
    // 复姓列表(常见的)
    var compoundSurnames = ['欧阳', '司马', '上官', '令狐', '诸葛', '慕容', '尉迟', '长孙', '宇文', '皇甫', '东方', '西门', '南宫', '夏侯', '公孙', '轩辕', '赫连'];
    for (var _i3 = 0, _compoundSurnames = compoundSurnames; _i3 < _compoundSurnames.length; _i3++) {
      var cs = _compoundSurnames[_i3];
      if (fullName.startsWith(cs) && fullName.length > cs.length) {
        return fullName.slice(cs.length);
      }
    }
    // 单姓:去掉第一个字(仅当姓名 >= 2 字)
    if (fullName.length >= 2) {
      return fullName.slice(1);
    }
    return fullName;
  };
  var name = getFriendlyName(user);
  var dayOfWeek = now.getDay(); // 0 = 周日

  // 选 bucket - 根据当前时段 + 星期挑选语料
  var bucket;
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    bucket = GREETINGS_LIB.weekend;
  } else if (dayOfWeek === 1 && timeSlot === 'morning') {
    bucket = GREETINGS_LIB.monday;
  } else if (dayOfWeek === 5 && (timeSlot === 'noon' || timeSlot === 'evening')) {
    bucket = GREETINGS_LIB.friday;
  } else if (timeSlot === 'morning') {
    bucket = GREETINGS_LIB.morning;
  } else if (timeSlot === 'noon') {
    // 中段(11-18)再细分一下中午/下午,让语料更准
    bucket = hour < 14 ? GREETINGS_LIB.noon : GREETINGS_LIB.afternoon;
  } else {
    bucket = hour >= 18 && hour < 22 ? GREETINGS_LIB.evening : GREETINGS_LIB.late;
  }

  // 用日期+用户 id+时段 做种子（同时段对同一个人显示同一句）
  var seed = (parseInt(today.replace(/-/g, '')) + user.id.split('').reduce(function (s, c) {
    return s + c.charCodeAt(0);
  }, 0) + timeSlot.charCodeAt(0)) % bucket.length;
  var greeting = bucket[seed].replace('{name}', name);

  // 时段对应的颜色调
  var getColors = function getColors() {
    if (bucket === GREETINGS_LIB.morning || bucket === GREETINGS_LIB.monday) {
      return {
        bg: 'linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)',
        border: '#fbbf24',
        text: '#854d0e',
        accent: '#d97706'
      };
    }
    if (bucket === GREETINGS_LIB.noon) {
      return {
        bg: 'linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)',
        border: '#67e8f9',
        text: '#155e75',
        accent: '#0891b2'
      };
    }
    if (bucket === GREETINGS_LIB.afternoon) {
      return {
        bg: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        border: '#7dd3fc',
        text: '#075985',
        accent: '#0369a1'
      };
    }
    if (bucket === GREETINGS_LIB.evening || bucket === GREETINGS_LIB.friday) {
      return {
        bg: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
        border: '#f9a8d4',
        text: '#831843',
        accent: '#be185d'
      };
    }
    if (bucket === GREETINGS_LIB.late) {
      return {
        bg: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
        border: '#9ca3af',
        text: '#374151',
        accent: '#4b5563'
      };
    }
    return {
      bg: 'linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)',
      border: '#e9d5ff',
      text: '#581c87',
      accent: '#7c3aed'
    };
  };
  var colors = getColors();
  var dismiss = function dismiss() {
    try {
      localStorage.setItem(storageKey, '1');
    } catch (_unused5) {}
    setHidden(true);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in",
    style: {
      padding: '14px 18px',
      borderRadius: 14,
      background: colors.bg,
      border: '1px solid ' + colors.border,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: colors.accent,
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      fontWeight: 600,
      flexShrink: 0,
      boxShadow: '0 2px 8px ' + colors.accent + '40'
    }
  }, (user.name || '?').slice(-1)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: colors.text,
      lineHeight: 1.4
    }
  }, greeting))), /*#__PURE__*/React.createElement("button", {
    onClick: dismiss,
    title: "\u4ECA\u5929\u4E0D\u518D\u663E\u793A",
    style: {
      padding: '4px 10px',
      background: 'transparent',
      color: colors.text,
      border: '1px solid ' + colors.border,
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontFamily: 'inherit',
      flexShrink: 0,
      opacity: .7
    },
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.opacity = '1';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.opacity = '0.7';
    }
  }, "\u2715"));
};
var MultiImageUploader = function MultiImageUploader(_ref27) {
  var attachments = _ref27.attachments,
    setAttachments = _ref27.setAttachments,
    _ref27$defaultLabel = _ref27.defaultLabel,
    defaultLabel = _ref27$defaultLabel === void 0 ? 'product' : _ref27$defaultLabel,
    _ref27$maxSize = _ref27.maxSize,
    maxSize = _ref27$maxSize === void 0 ? 10 : _ref27$maxSize,
    _ref27$acceptVideo = _ref27.acceptVideo,
    acceptVideo = _ref27$acceptVideo === void 0 ? false : _ref27$acceptVideo,
    _ref27$videoMaxSize = _ref27.videoMaxSize,
    videoMaxSize = _ref27$videoMaxSize === void 0 ? 100 : _ref27$videoMaxSize;
  var fileInputRef = React.useRef(null);
  var dropRef = React.useRef(null);
  var _useState97 = useState(false),
    _useState98 = _slicedToArray(_useState97, 2),
    uploading = _useState98[0],
    setUploading = _useState98[1];
  var _useState99 = useState(null),
    _useState100 = _slicedToArray(_useState99, 2),
    previewIdx = _useState100[0],
    setPreviewIdx = _useState100[1];

  // 标签选项
  var LABELS = [{
    key: 'product',
    label: '📦 产品图',
    color: '#0369a1'
  }, {
    key: 'damage',
    label: '💥 损坏图',
    color: '#dc2626'
  }, {
    key: 'communication',
    label: '💬 沟通图',
    color: '#7c3aed'
  }, {
    key: 'notes',
    label: '📝 备注图',
    color: '#525252'
  }, {
    key: 'receipt',
    label: '🧾 凭证',
    color: '#16a34a'
  }].concat(_toConsumableArray(acceptVideo ? [{
    key: 'video',
    label: '🎬 视频',
    color: '#7c3aed'
  }] : []));
  var isVideo = function isVideo(att) {
    if (att.kind === 'video') return true;
    if (att.label === 'video') return true;
    var url = att.url || '';
    return /\.(mp4|webm|mov|avi|m4v)(\?|$)/i.test(url);
  };
  var uploadFile = /*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(file) {
      var label,
        isVid,
        isImg,
        limit,
        res,
        msg,
        sizeHint,
        newAttach,
        _args9 = arguments,
        _t4;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            label = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : defaultLabel;
            isVid = file.type.startsWith('video/');
            isImg = file.type.startsWith('image/');
            if (!(!isImg && !isVid)) {
              _context9.n = 1;
              break;
            }
            alert(acceptVideo ? '只能上传图片或视频' : '只能上传图片');
            return _context9.a(2);
          case 1:
            if (!(isVid && !acceptVideo)) {
              _context9.n = 2;
              break;
            }
            alert('该字段不支持视频');
            return _context9.a(2);
          case 2:
            limit = isVid ? videoMaxSize : maxSize;
            if (!(file.size > limit * 1024 * 1024)) {
              _context9.n = 3;
              break;
            }
            alert("".concat(isVid ? '视频' : '图片', "\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7 ").concat(limit, "MB"));
            return _context9.a(2);
          case 3:
            setUploading(true);
            _context9.p = 4;
            _context9.n = 5;
            return CLOUD.uploadImage('aftersales-images', file);
          case 5:
            res = _context9.v;
            if (res) {
              _context9.n = 6;
              break;
            }
            msg = CLOUD._lastError && CLOUD._lastError.message || '';
            sizeHint = isVid || /size|large|exceed|payload|413|maximum/i.test(msg) ? '\n\n📦 多半是 Supabase 存储桶上限不够(视频较大)。请主管在 Supabase 后台:\n· Storage → aftersales-images 桶 → File size limit 调到 ≥100MB\n· Settings → Storage → 全局 Upload file size limit 调到 ≥100MB\n· 桶的允许 MIME 类型包含 video/*(或不限制)' : '';
            alert('上传失败' + (msg ? ':' + msg : '') + sizeHint);
            setUploading(false);
            return _context9.a(2);
          case 6:
            newAttach = {
              id: 'a_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
              url: res.url,
              path: res.path,
              label: isVid ? 'video' : label,
              kind: isVid ? 'video' : 'image',
              size: file.size,
              mime: file.type,
              name: file.name,
              uploaded_at: new Date().toISOString()
            };
            setAttachments([].concat(_toConsumableArray(attachments || []), [newAttach]));
            _context9.n = 8;
            break;
          case 7:
            _context9.p = 7;
            _t4 = _context9.v;
            alert('上传失败: ' + _t4.message);
          case 8:
            setUploading(false);
          case 9:
            return _context9.a(2);
        }
      }, _callee9, null, [[4, 7]]);
    }));
    return function uploadFile(_x7) {
      return _ref28.apply(this, arguments);
    };
  }();

  // 粘贴(图片)— 视频通常不能从剪贴板粘贴
  useEffect(function () {
    var handler = function handler(e) {
      var _e$clipboardData2;
      var items = (_e$clipboardData2 = e.clipboardData) === null || _e$clipboardData2 === void 0 ? void 0 : _e$clipboardData2.items;
      if (!items) return;
      var _iterator2 = _createForOfIteratorHelper(items),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var it = _step2.value;
          if (it.type.startsWith('image/') || acceptVideo && it.type.startsWith('video/')) {
            var f = it.getAsFile();
            if (f) {
              uploadFile(f);
              e.preventDefault();
              break;
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    };
    var el = dropRef.current;
    if (!el) return;
    el.addEventListener('paste', handler);
    return function () {
      return el.removeEventListener('paste', handler);
    };
  }, [attachments, acceptVideo]);
  var handleFiles = function handleFiles(files) {
    if (!files) return;
    Array.from(files).forEach(function (f) {
      return uploadFile(f);
    });
  };
  var removeAttach = /*#__PURE__*/function () {
    var _ref29 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(att) {
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            _context0.n = 1;
            return wsConfirm(isVideo(att) ? '删除这个视频?' : '删除这张图?');
          case 1:
            if (_context0.v) {
              _context0.n = 2;
              break;
            }
            return _context0.a(2);
          case 2:
            if (!att.path) {
              _context0.n = 3;
              break;
            }
            _context0.n = 3;
            return CLOUD.deleteImage('aftersales-images', att.path);
          case 3:
            setAttachments(attachments.filter(function (a) {
              return a.id !== att.id;
            }));
          case 4:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    return function removeAttach(_x8) {
      return _ref29.apply(this, arguments);
    };
  }();
  var changeLabel = function changeLabel(att, newLabel) {
    setAttachments(attachments.map(function (a) {
      return a.id === att.id ? _objectSpread(_objectSpread({}, a), {}, {
        label: newLabel
      }) : a;
    }));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    ref: dropRef,
    tabIndex: 0,
    onClick: function onClick() {
      var _fileInputRef$current2;
      return (_fileInputRef$current2 = fileInputRef.current) === null || _fileInputRef$current2 === void 0 ? void 0 : _fileInputRef$current2.click();
    },
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.background = 'var(--accent-soft)';
    },
    onDragLeave: function onDragLeave(e) {
      e.currentTarget.style.borderColor = 'var(--line)';
      e.currentTarget.style.background = '#fafafa';
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      e.currentTarget.style.borderColor = 'var(--line)';
      e.currentTarget.style.background = '#fafafa';
      handleFiles(e.dataTransfer.files);
    },
    style: {
      border: '2px dashed var(--line)',
      borderRadius: 10,
      padding: '16px',
      textAlign: 'center',
      cursor: 'pointer',
      background: '#fafafa',
      transition: 'all .15s',
      outline: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-2)',
      fontWeight: 500
    }
  }, uploading ? '⏳ 上传中...' : acceptVideo ? '📷 / 🎬 拖拽 / 粘贴 (Ctrl+V) / 点击上传图片或视频' : '📷 拖拽 / 粘贴 (Ctrl+V) / 点击上传图片'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)',
      marginTop: 4
    }
  }, acceptVideo ? "\u56FE\u7247(JPG/PNG/WebP \u6700\u5927 ".concat(maxSize, "MB)\xB7 \u89C6\u9891(MP4/WebM/MOV \u6700\u5927 ").concat(videoMaxSize, "MB)\xB7 \u53EF\u591A\u4E2A") : "\u652F\u6301\u591A\u5F20 \xB7 JPG/PNG/WebP \xB7 \u6700\u5927 ".concat(maxSize, "MB")), /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    accept: acceptVideo ? "image/*,video/*" : "image/*",
    multiple: true,
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      handleFiles(e.target.files);
      e.target.value = '';
    }
  })), attachments && attachments.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
      gap: 8,
      marginTop: 10
    }
  }, attachments.map(function (att, idx) {
    var labelInfo = LABELS.find(function (l) {
      return l.key === att.label;
    }) || LABELS[0];
    var vid = isVideo(att);
    return /*#__PURE__*/React.createElement("div", {
      key: att.id,
      style: {
        position: 'relative',
        border: '1px solid var(--line)',
        borderRadius: 8,
        overflow: 'hidden',
        background: 'white'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 100,
        position: 'relative',
        background: '#0f0f10',
        overflow: 'hidden',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return setPreviewIdx(idx);
      }
    }, vid ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("video", {
      src: att.url,
      preload: "metadata",
      muted: true,
      playsInline: true,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        background: '#0f0f10'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 36,
        height: 36,
        borderRadius: '50%',
        background: 'rgba(0,0,0,.6)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16
      }
    }, "\u25B6")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 4,
        left: 4,
        background: 'rgba(0,0,0,.65)',
        color: 'white',
        fontSize: 9,
        padding: '1px 5px',
        borderRadius: 3,
        fontWeight: 600
      }
    }, "\u89C6\u9891")) : /*#__PURE__*/React.createElement("img", {
      src: att.url,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(e) {
        e.stopPropagation();
        removeAttach(att);
      },
      style: {
        position: 'absolute',
        top: 4,
        right: 4,
        background: 'rgba(220,38,38,.9)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: 22,
        height: 22,
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, "\xD7")), /*#__PURE__*/React.createElement("select", {
      value: att.label || 'product',
      onChange: function onChange(e) {
        return changeLabel(att, e.target.value);
      },
      style: {
        width: '100%',
        border: 'none',
        borderTop: '1px solid var(--line)',
        padding: '4px 6px',
        fontSize: 10,
        background: labelInfo.color + '20',
        color: labelInfo.color,
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, LABELS.map(function (l) {
      return /*#__PURE__*/React.createElement("option", {
        key: l.key,
        value: l.key
      }, l.label);
    })));
  })), previewIdx !== null && attachments[previewIdx] && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      border: '1px solid var(--line)',
      borderRadius: 10,
      overflow: 'hidden',
      background: '#111'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '6px 10px',
      background: '#1c1c1e'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#d1d5db',
      fontSize: 11
    }
  }, previewIdx + 1, " / ", attachments.length, " \xB7 ", attachments[previewIdx].name || ''), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, attachments.length > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setPreviewIdx((previewIdx - 1 + attachments.length) % attachments.length);
    },
    style: {
      padding: '2px 8px',
      background: 'rgba(255,255,255,.15)',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setPreviewIdx((previewIdx + 1) % attachments.length);
    },
    style: {
      padding: '2px 8px',
      background: 'rgba(255,255,255,.15)',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return wsOpenImg(attachments[previewIdx].url);
    },
    style: {
      background: 'none',
      border: 'none',
      fontSize: 11,
      color: '#7dd3fc',
      cursor: 'pointer',
      padding: 0
    }
  }, "\u2197 \u539F\u56FE"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setPreviewIdx(null);
    },
    style: {
      padding: '2px 9px',
      background: 'rgba(255,255,255,.15)',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11
    }
  }, "\u6536\u8D77 \u25B2"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 10
    }
  }, isVideo(attachments[previewIdx]) ? /*#__PURE__*/React.createElement("video", {
    src: attachments[previewIdx].url,
    controls: true,
    autoPlay: true,
    style: {
      maxWidth: '100%',
      maxHeight: 380,
      background: 'black',
      borderRadius: 6
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: attachments[previewIdx].url,
    alt: "",
    style: {
      maxWidth: '100%',
      maxHeight: 380,
      objectFit: 'contain',
      borderRadius: 6
    }
  }))));
};

// ============================================================
// 🆕 供应商可搜索下拉选择器 (693 家供应商搜索筛选)
// ============================================================
var SupplierSelect = function SupplierSelect(_ref30) {
  var suppliers = _ref30.suppliers,
    value = _ref30.value,
    onChange = _ref30.onChange,
    _ref30$placeholder = _ref30.placeholder,
    placeholder = _ref30$placeholder === void 0 ? '选择供应商...' : _ref30$placeholder;
  var _useState101 = useState(''),
    _useState102 = _slicedToArray(_useState101, 2),
    query = _useState102[0],
    setQuery = _useState102[1];
  var _useState103 = useState(false),
    _useState104 = _slicedToArray(_useState103, 2),
    open = _useState104[0],
    setOpen = _useState104[1];
  var ref = React.useRef(null);
  useEffect(function () {
    var handler = function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return function () {
      return document.removeEventListener('mousedown', handler);
    };
  }, []);
  var filtered = useMemo(function () {
    var q = query.trim().toLowerCase();
    if (!q) return suppliers.slice(0, 50);
    return suppliers.filter(function (s) {
      return (s.name || '').toLowerCase().includes(q) || (s.contact_person || '').toLowerCase().includes(q);
    }).slice(0, 100);
  }, [suppliers, query]);
  var selected = suppliers.find(function (s) {
    return s.id === value || s.id === parseInt(value);
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: placeholder,
    value: open ? query : selected ? selected.name + (selected.contact_person ? ' · ' + selected.contact_person : '') : '',
    onChange: function onChange(e) {
      setQuery(e.target.value);
      setOpen(true);
    },
    onFocus: function onFocus() {
      setQuery('');
      setOpen(true);
    },
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }), selected && !open && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onChange(null);
    },
    style: {
      position: 'absolute',
      right: 6,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'transparent',
      border: 'none',
      color: 'var(--ink-4)',
      cursor: 'pointer',
      fontSize: 14
    }
  }, "\xD7"), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      marginTop: 2,
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 8,
      maxHeight: 300,
      overflowY: 'auto',
      overflowX: 'hidden',
      zIndex: 100,
      boxShadow: '0 8px 20px rgba(0,0,0,.1)'
    }
  }, filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px',
      textAlign: 'center',
      color: 'var(--ink-4)',
      fontSize: 12
    }
  }, query ? "\u6CA1\u627E\u5230 \"".concat(query, "\"") : '加载中...') : filtered.map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      onClick: function onClick() {
        onChange(s.id);
        setOpen(false);
        setQuery('');
      },
      style: {
        padding: '8px 12px',
        cursor: 'pointer',
        borderBottom: '1px solid var(--bg)',
        fontSize: 12,
        transition: 'background .1s'
      },
      onMouseEnter: function onMouseEnter(e) {
        return e.currentTarget.style.background = 'var(--bg)';
      },
      onMouseLeave: function onMouseLeave(e) {
        return e.currentTarget.style.background = 'white';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: 'var(--ink)'
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)',
        marginTop: 1
      }
    }, s.contact_person ? "\uD83D\uDC64 ".concat(s.contact_person) : '', s.alipay ? " \xB7 \uD83D\uDCB3 ".concat(s.alipay) : ''));
  }), filtered.length === 50 && !query && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 12px',
      fontSize: 10,
      color: 'var(--ink-4)',
      textAlign: 'center',
      borderTop: '1px solid var(--line)'
    }
  }, "\u663E\u793A\u524D 50 \u5BB6 \xB7 \u641C\u7D22\u53EF\u770B\u66F4\u591A (\u5171 ", suppliers.length, " \u5BB6)")));
};

// ============================================================
// 🆕 添加事件 Modal - 售后 / 补件 / 退款 统一入口
// ============================================================
var EventEditorModal = function EventEditorModal(_ref31) {
  var kind = _ref31.kind,
    record = _ref31.record,
    suppliers = _ref31.suppliers,
    user = _ref31.user,
    onClose = _ref31.onClose,
    onSaved = _ref31.onSaved,
    _ref31$existingEvent = _ref31.existingEvent,
    existingEvent = _ref31$existingEvent === void 0 ? null : _ref31$existingEvent;
  // kind: 'aftersale' | 'refill' | 'refund'
  var isEdit = !!existingEvent;
  var _useState105 = useState(false),
    _useState106 = _slicedToArray(_useState105, 2),
    saving = _useState106[0],
    setSaving = _useState106[1];

  // 共用字段
  var _useState107 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.order_ref) || (record === null || record === void 0 ? void 0 : record.orderRef) || ''),
    _useState108 = _slicedToArray(_useState107, 2),
    orderRef = _useState108[0],
    setOrderRef = _useState108[1];
  var _useState109 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.customer) || (record === null || record === void 0 ? void 0 : record.customer) || ''),
    _useState110 = _slicedToArray(_useState109, 2),
    customer = _useState110[0],
    setCustomer = _useState110[1];
  var _useState111 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.supplier_id) || null),
    _useState112 = _slicedToArray(_useState111, 2),
    supplierId = _useState112[0],
    setSupplierId = _useState112[1];
  var _useState113 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.attachments) || []),
    _useState114 = _slicedToArray(_useState113, 2),
    attachments = _useState114[0],
    setAttachments = _useState114[1];
  var _useState115 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.notes) || ''),
    _useState116 = _slicedToArray(_useState115, 2),
    notes = _useState116[0],
    setNotes = _useState116[1];

  // 售后专属
  var _useState117 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.issue_type) || 'transport_damage'),
    _useState118 = _slicedToArray(_useState117, 2),
    issueType = _useState118[0],
    setIssueType = _useState118[1];
  var _useState119 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.issue_type_custom) || ''),
    _useState120 = _slicedToArray(_useState119, 2),
    issueTypeCustom = _useState120[0],
    setIssueTypeCustom = _useState120[1];
  var _useState121 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.damaged_part) || ''),
    _useState122 = _slicedToArray(_useState121, 2),
    damagedPart = _useState122[0],
    setDamagedPart = _useState122[1];
  // 🆕 产品改进闭环字段(对齐补发对接表):改进建议 / 沟通图片 / 改进状态
  var _useState123 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.improvement_suggestion) || ''),
    _useState124 = _slicedToArray(_useState123, 2),
    improvementSuggestion = _useState124[0],
    setImprovementSuggestion = _useState124[1];
  var _useState125 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.improvement_status) || ''),
    _useState126 = _slicedToArray(_useState125, 2),
    improvementStatus = _useState126[0],
    setImprovementStatus = _useState126[1];
  var _useState127 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.communication_images) || []),
    _useState128 = _slicedToArray(_useState127, 2),
    commImages = _useState128[0],
    setCommImages = _useState128[1];
  var _useState129 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.product_name) || ''),
    _useState130 = _slicedToArray(_useState129, 2),
    productName = _useState130[0],
    setProductName = _useState130[1];
  var productsList = useProducts(); // 🆕 fix22 联动 1: 售后/补件/退款 productName 联想
  // 🆕 fix117: 一键拉取订单产品(跟单库/Shopify),选对应产品直接填产品名 + 把产品图入附件(免手动上传)
  var _useState131 = useState({
      loading: false,
      products: null,
      meta: null
    }),
    _useState132 = _slicedToArray(_useState131, 2),
    orderPull = _useState132[0],
    setOrderPull = _useState132[1];
  var doPullOrder = /*#__PURE__*/function () {
    var _ref32 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
      var on, v, _t5;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            on = (orderRef || '').trim();
            if (on) {
              _context1.n = 1;
              break;
            }
            alert('请先填订单号');
            return _context1.a(2);
          case 1:
            setOrderPull({
              loading: true,
              products: null,
              meta: null
            });
            _context1.p = 2;
            _context1.n = 3;
            return wsFetchOrderProducts(on);
          case 3:
            v = _context1.v;
            setOrderPull({
              loading: false,
              products: v && v.products || [],
              meta: v || null
            });
            // 🆕 fix119: 自动填充客户(邮箱优先,其次姓名)+ 国家(空时才填,不覆盖已填)
            if (v) {
              if (!(customer || '').trim() && (v.email || v.customerName)) setCustomer(v.email || v.customerName);
              if (!(country || '').trim() && v.country) setCountry(v.country);
            }
            _context1.n = 5;
            break;
          case 4:
            _context1.p = 4;
            _t5 = _context1.v;
            setOrderPull({
              loading: false,
              products: [],
              meta: null
            });
          case 5:
            return _context1.a(2);
        }
      }, _callee1, null, [[2, 4]]);
    }));
    return function doPullOrder() {
      return _ref32.apply(this, arguments);
    };
  }();
  var isProdSaved = function isProdSaved(p) {
    return (attachments || []).some(function (a) {
      return a.url === p.image_url;
    });
  };
  var pickPulledProduct = function pickPulledProduct(p) {
    if (p.title) setProductName(p.title);
    if (p.image_url) {
      if (isProdSaved(p)) {
        setAttachments((attachments || []).filter(function (a) {
          return a.url !== p.image_url;
        })); // 再点取消保存
      } else {
        setAttachments([].concat(_toConsumableArray(attachments || []), [{
          id: 'a_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
          url: p.image_url,
          label: '产品图',
          kind: 'image',
          mime: 'image/jpeg',
          name: (p.title || 'product') + '.jpg',
          from_order: true,
          uploaded_at: new Date().toISOString()
        }]));
      }
    }
    // 不关闭面板,让用户看到"已存"标记,可继续选/取消
  };
  var _useState133 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.issue_detail) || ''),
    _useState134 = _slicedToArray(_useState133, 2),
    issueDetail = _useState134[0],
    setIssueDetail = _useState134[1];
  var _useState135 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.country) || ''),
    _useState136 = _slicedToArray(_useState135, 2),
    country = _useState136[0],
    setCountry = _useState136[1];
  var _useState137 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.packer) || ''),
    _useState138 = _slicedToArray(_useState137, 2),
    packer = _useState138[0],
    setPacker = _useState138[1];
  var _useState139 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.qc) || ''),
    _useState140 = _slicedToArray(_useState139, 2),
    qc = _useState140[0],
    setQc = _useState140[1];
  var _useState141 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.status) || 'pending_remind'),
    _useState142 = _slicedToArray(_useState141, 2),
    aftersaleStatus = _useState142[0],
    setAftersaleStatus = _useState142[1];

  // 补件专属
  var _useState143 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.items) || [{
      item: '',
      qty: 1,
      unit: '套',
      attachments: []
    }]),
    _useState144 = _slicedToArray(_useState143, 2),
    refillItems = _useState144[0],
    setRefillItems = _useState144[1];
  var _useState145 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.expected_ship_date) || ''),
    _useState146 = _slicedToArray(_useState145, 2),
    expectedShipDate = _useState146[0],
    setExpectedShipDate = _useState146[1];
  var _useState147 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.status) || 'pending_order'),
    _useState148 = _slicedToArray(_useState147, 2),
    refillStatus = _useState148[0],
    setRefillStatus = _useState148[1];

  // 退款专属
  var _useState149 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.refund_type) || 'quality_issue'),
    _useState150 = _slicedToArray(_useState149, 2),
    refundType = _useState150[0],
    setRefundType = _useState150[1];
  var _useState151 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.refund_type_custom) || ''),
    _useState152 = _slicedToArray(_useState151, 2),
    refundTypeCustom = _useState152[0],
    setRefundTypeCustom = _useState152[1];
  var _useState153 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.amount) || ''),
    _useState154 = _slicedToArray(_useState153, 2),
    amount = _useState154[0],
    setAmount = _useState154[1];
  var _useState155 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.currency) || 'USD'),
    _useState156 = _slicedToArray(_useState155, 2),
    currency = _useState156[0],
    setCurrency = _useState156[1];
  var _useState157 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.payment_method) || 'shopify_payments'),
    _useState158 = _slicedToArray(_useState157, 2),
    paymentMethod = _useState158[0],
    setPaymentMethod = _useState158[1];
  var _useState159 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.payment_method_custom) || ''),
    _useState160 = _slicedToArray(_useState159, 2),
    paymentMethodCustom = _useState160[0],
    setPaymentMethodCustom = _useState160[1];
  var _useState161 = useState((existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.refund_reason) || ''),
    _useState162 = _slicedToArray(_useState161, 2),
    refundReason = _useState162[0],
    setRefundReason = _useState162[1];
  var supplier = suppliers.find(function (s) {
    return s.id === supplierId;
  });

  // 提交
  var handleSubmit = /*#__PURE__*/function () {
    var _ref33 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
      var now, base, table, payload, validItems, amt, res, allProds, targetName, match, label, _t6, _t7;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            if (orderRef.trim()) {
              _context10.n = 1;
              break;
            }
            alert('请填写订单号');
            return _context10.a(2);
          case 1:
            setSaving(true);
            now = new Date().toISOString();
            base = {
              record_id: (record === null || record === void 0 ? void 0 : record.id) || null,
              order_ref: orderRef.trim(),
              customer: customer.trim() || null,
              supplier_id: supplierId,
              supplier_name: (supplier === null || supplier === void 0 ? void 0 : supplier.name) || null,
              attachments: attachments,
              notes: notes.trim() || null,
              created_by: user.id,
              created_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
              updated_at: now
            };
            if (!(kind === 'aftersale')) {
              _context10.n = 3;
              break;
            }
            table = 'aftersales';
            // "其他" 类型必须填自定义
            if (!(issueType === 'other' && !issueTypeCustom.trim())) {
              _context10.n = 2;
              break;
            }
            alert('问题类型选了"其他"，请填写具体类型');
            setSaving(false);
            return _context10.a(2);
          case 2:
            payload = _objectSpread(_objectSpread({}, base), {}, {
              product_name: productName.trim() || null,
              issue_type: issueType,
              issue_type_custom: issueType === 'other' ? issueTypeCustom.trim() : null,
              damaged_part: damagedPart.trim() || null,
              issue_detail: issueDetail.trim() || null,
              country: country.trim() || null,
              packer: packer.trim() || null,
              qc: qc.trim() || null,
              improvement_suggestion: improvementSuggestion.trim() || null,
              improvement_status: improvementStatus.trim() || null,
              communication_images: commImages,
              status: aftersaleStatus
            });
            _context10.n = 10;
            break;
          case 3:
            if (!(kind === 'refill')) {
              _context10.n = 5;
              break;
            }
            table = 'refills';
            // 过滤掉空的补件项（保留 attachments 字段）
            validItems = refillItems.filter(function (i) {
              return (i.item || '').trim();
            });
            if (!(validItems.length === 0)) {
              _context10.n = 4;
              break;
            }
            alert('请至少填一项补件清单');
            setSaving(false);
            return _context10.a(2);
          case 4:
            payload = _objectSpread(_objectSpread({}, base), {}, {
              items: validItems,
              expected_ship_date: expectedShipDate || null,
              status: refillStatus
            });
            _context10.n = 10;
            break;
          case 5:
            // refund
            table = 'refunds';
            amt = parseFloat(amount);
            if (!(isNaN(amt) || amt <= 0)) {
              _context10.n = 6;
              break;
            }
            alert('请填写正确的退款金额');
            setSaving(false);
            return _context10.a(2);
          case 6:
            if (refundReason.trim()) {
              _context10.n = 7;
              break;
            }
            alert('请填写退款原因详情');
            setSaving(false);
            return _context10.a(2);
          case 7:
            if (!(refundType === 'other' && !refundTypeCustom.trim())) {
              _context10.n = 8;
              break;
            }
            alert('退款类型选了"其他"，请填写具体类型');
            setSaving(false);
            return _context10.a(2);
          case 8:
            if (!(paymentMethod === 'other' && !paymentMethodCustom.trim())) {
              _context10.n = 9;
              break;
            }
            alert('支付方式选了"其他"，请填写具体方式');
            setSaving(false);
            return _context10.a(2);
          case 9:
            payload = _objectSpread(_objectSpread({}, base), {}, {
              product_name: productName.trim() || null,
              refund_type: refundType,
              refund_type_custom: refundType === 'other' ? refundTypeCustom.trim() : null,
              amount: amt,
              currency: currency,
              payment_method: paymentMethod,
              payment_method_custom: paymentMethod === 'other' ? paymentMethodCustom.trim() : null,
              refund_reason: refundReason.trim(),
              status: (existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.status) || 'pending'
            });
          case 10:
            if (isEdit) payload.id = existingEvent.id;else if (!isEdit) payload.created_at = now;
            _context10.p = 11;
            _context10.n = 12;
            return CLOUD.upsert(table, payload);
          case 12:
            res = _context10.v;
            if (!res) {
              _context10.n = 18;
              break;
            }
            // 🔗 自动通知协调员（刘强）— 仅创建时通知，编辑不重复通知
            if (!isEdit) {
              notifyCoordinator(kind, res[0] || payload, user);
            }
            // 🆕 fix22 联动2: 新建售后时,自动累加产品主表的 total_aftersales
            if (!(!isEdit && kind === 'aftersale' && payload.product_name)) {
              _context10.n = 17;
              break;
            }
            _context10.p = 13;
            _context10.n = 14;
            return CLOUD.list('products', {
              limit: 1000
            });
          case 14:
            allProds = _context10.v;
            targetName = (payload.product_name || '').trim().toLowerCase(); // 优先按 SKU(如有) 匹配,否则按精确产品名匹配
            match = (allProds || []).filter(function (p) {
              return !p.deleted;
            }).find(function (p) {
              if (payload.product_sku && p.sku && p.sku.toLowerCase() === payload.product_sku.toLowerCase()) return true;
              return (p.name || '').trim().toLowerCase() === targetName;
            });
            if (!match) {
              _context10.n = 15;
              break;
            }
            _context10.n = 15;
            return CLOUD.upsert('products', _objectSpread(_objectSpread({}, match), {}, {
              total_aftersales: (match.total_aftersales || 0) + 1,
              updated_at: new Date().toISOString()
            }));
          case 15:
            _context10.n = 17;
            break;
          case 16:
            _context10.p = 16;
            _t6 = _context10.v;
            console.warn('[联动2] 累加产品售后次数失败:', _t6);
          case 17:
            onSaved && onSaved(res[0] || payload);
            onClose();
            _context10.n = 19;
            break;
          case 18:
            // 🆕 fix7: 用 alertSaveError 显示详细诊断信息(表名/错误码/原因),而不是"请检查网络"
            label = kind === 'aftersale' ? '保存售后' : kind === 'refill' ? '保存补件' : '保存退款';
            alertSaveError(label);
          case 19:
            _context10.n = 21;
            break;
          case 20:
            _context10.p = 20;
            _t7 = _context10.v;
            alert('保存失败: ' + _t7.message);
          case 21:
            setSaving(false);
          case 22:
            return _context10.a(2);
        }
      }, _callee10, null, [[13, 16], [11, 20]]);
    }));
    return function handleSubmit() {
      return _ref33.apply(this, arguments);
    };
  }();

  // UI 标题 + 颜色
  var titleInfo = {
    aftersale: {
      icon: '🔧',
      title: '售后事件',
      color: '#ea580c'
    },
    refill: {
      icon: '📦',
      title: '补件事件',
      color: '#0369a1'
    },
    refund: {
      icon: '💰',
      title: '退款事件',
      color: '#dc2626'
    }
  }[kind];
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.55)',
      zIndex: 100000,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '5vh 20px',
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
      maxWidth: 680,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '90vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: titleInfo.color,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, titleInfo.icon), isEdit ? '编辑' : '添加', titleInfo.title), record && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "\u5173\u8054\u8DDF\u8FDB\uFF1A", record.customer || record.orderRef || '(无主题)', " \xB7 ", record.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, user && user.role !== 'super_admin' && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _window$__requestSupe, _window;
      return (_window$__requestSupe = (_window = window).__requestSupervisorAssistance) === null || _window$__requestSupe === void 0 ? void 0 : _window$__requestSupe.call(_window, {
        entityType: titleInfo.title,
        entityId: existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.id,
        entityTitle: (existingEvent === null || existingEvent === void 0 ? void 0 : existingEvent.order_ref) || orderRef || '(新事件)'
      });
    },
    style: {
      padding: '5px 11px',
      background: '#fef3c7',
      color: '#92400e',
      border: '1px solid #fcd34d',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit'
    },
    title: "\u628A\u8FD9\u6761\u4E8B\u4EF6\u4EA4\u7ED9\u4E3B\u7BA1/\u8001\u677F\u5904\u7406"
  }, user.role === 'admin' ? '👑 申请老板' : '🚨 申请主管'), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: onClose,
    style: {
      padding: '4px 12px'
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      overflowY: 'auto',
      overflowX: 'hidden',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
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
  }, "\u8BA2\u5355\u53F7 *"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: orderRef,
    onChange: function onChange(e) {
      return setOrderRef(e.target.value);
    },
    placeholder: "V99299",
    style: {
      flex: 1,
      minWidth: 0,
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: doPullOrder,
    disabled: orderPull.loading,
    title: "\u4ECE\u8DDF\u5355\u5E93/Shopify \u62C9\u53D6\u8BE5\u8BA2\u5355\u7684\u4EA7\u54C1,\u9009\u4E00\u4E2A\u76F4\u63A5\u586B\u4EA7\u54C1\u540D+\u4EA7\u54C1\u56FE(\u514D\u624B\u52A8\u4E0A\u4F20)",
    style: {
      whiteSpace: 'nowrap',
      padding: '6px 10px',
      border: 'none',
      borderRadius: 6,
      background: '#0071e3',
      color: 'white',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer',
      flexShrink: 0
    }
  }, orderPull.loading ? '拉取中…' : '🔄 拉取订单')), orderPull.products && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: 8,
      background: '#f8fafc',
      border: '1px solid var(--line)',
      borderRadius: 8
    }
  }, orderPull.products.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-4)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u6CA1\u62C9\u5230\u8BE5\u8BA2\u5355\u7684\u4EA7\u54C1(\u68C0\u67E5\u8BA2\u5355\u53F7/\u7F51\u7AD9\u524D\u7F00,\u6216\u4ECD\u53EF\u624B\u52A8\u4E0A\u4F20\u56FE\u7247)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOrderPull({
        loading: false,
        products: null
      });
    },
    style: {
      border: 'none',
      background: 'none',
      color: 'var(--accent)',
      cursor: 'pointer',
      fontSize: 11
    }
  }, "\u6536\u8D77")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginBottom: 6,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u62C9\u5230 ", orderPull.products.length, " \u4E2A\u4EA7\u54C1 \xB7 \u70B9\u9009 = \u586B\u4EA7\u54C1\u540D\u5E76\u5B58\u5165\u9644\u4EF6(\u518D\u70B9\u53D6\u6D88) \xB7 \u5DF2\u5B58 ", (attachments || []).filter(function (a) {
    return a.from_order;
  }).length, " \u5F20"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOrderPull({
        loading: false,
        products: null,
        meta: null
      });
    },
    style: {
      border: 'none',
      background: 'none',
      color: 'var(--accent)',
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\u5B8C\u6210 \u2713")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(96px,1fr))',
      gap: 8
    }
  }, orderPull.products.map(function (p, i) {
    var saved = isProdSaved(p);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        return pickPulledProduct(p);
      },
      title: p.title || '',
      style: {
        position: 'relative',
        border: saved ? '2px solid #16a34a' : '1px solid var(--line)',
        borderRadius: 8,
        padding: 5,
        cursor: 'pointer',
        textAlign: 'center',
        background: saved ? '#f0fdf4' : 'white'
      }
    }, saved && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -7,
        right: -7,
        width: 20,
        height: 20,
        borderRadius: '50%',
        background: '#16a34a',
        color: 'white',
        fontSize: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        zIndex: 1
      }
    }, "\u2713"), p.image_url ? /*#__PURE__*/React.createElement("img", {
      src: p.image_url,
      alt: "",
      style: {
        width: '100%',
        height: 64,
        objectFit: 'cover',
        borderRadius: 5
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--ink-4)',
        fontSize: 10
      }
    }, "\u65E0\u56FE"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-2)',
        marginTop: 4,
        lineHeight: 1.25,
        maxHeight: 26,
        overflow: 'hidden'
      }
    }, p.title || ''), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: saved ? '#16a34a' : 'var(--ink-4)',
        fontWeight: 600,
        marginTop: 2
      }
    }, saved ? '已存入附件' : '点击存入'));
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u5BA2\u6237\u90AE\u7BB1/\u540D\u5B57"), /*#__PURE__*/React.createElement("input", {
    value: customer,
    onChange: function onChange(e) {
      return setCustomer(e.target.value);
    },
    placeholder: "user@example.com",
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }))), kind === 'aftersale' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
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
  }, "\u95EE\u9898\u7C7B\u578B *"), /*#__PURE__*/React.createElement("select", {
    value: issueType,
    onChange: function onChange(e) {
      return setIssueType(e.target.value);
    },
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }, ISSUE_TYPES.map(function (t) {
    return /*#__PURE__*/React.createElement("option", {
      key: t.key,
      value: t.key
    }, t.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u5F53\u524D\u72B6\u6001"), /*#__PURE__*/React.createElement("select", {
    value: aftersaleStatus,
    onChange: function onChange(e) {
      return setAftersaleStatus(e.target.value);
    },
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }, AFTERSALE_STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.key,
      value: s.key
    }, s.label);
  })))), issueType === 'other' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14,
      padding: 10,
      background: '#fef9c3',
      border: '1px solid #fde68a',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#854d0e',
      display: 'block',
      marginBottom: 4
    }
  }, "\uD83D\uDCA1 \u8BF7\u8BF4\u660E\u5177\u4F53\u662F\u4EC0\u4E48\u7C7B\u578B\u7684\u95EE\u9898 *"), /*#__PURE__*/React.createElement("input", {
    value: issueTypeCustom,
    onChange: function onChange(e) {
      return setIssueTypeCustom(e.target.value);
    },
    placeholder: "\u4F8B\u5982\uFF1A\u5305\u88C5\u6F0F\u6C34\u3001\u914D\u4EF6\u6C27\u5316\u3001\u7535\u6E90\u7EBF\u89C4\u683C\u4E0D\u5339\u914D...",
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid #fcd34d',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
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
  }, "\u4EA7\u54C1\u540D ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--ink-3)'
    }
  }, "(\u8F93\u5165\u8054\u60F3\u4EA7\u54C1\u4E3B\u8868)")), /*#__PURE__*/React.createElement(ProductAutocomplete, {
    value: productName,
    onChange: setProductName,
    onSelect: function onSelect(prod) {
      return setProductName(prod.name || '');
    },
    products: productsList,
    mode: "name",
    placeholder: "Modern Lava Pendant Lamp"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u635F\u574F\u90E8\u4F4D"), /*#__PURE__*/React.createElement("input", {
    value: damagedPart,
    onChange: function onChange(e) {
      return setDamagedPart(e.target.value);
    },
    placeholder: "\u706F\u5934\u7535\u7EBF",
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }))), /*#__PURE__*/React.createElement("div", {
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
  }, "\u95EE\u9898\u8BE6\u7EC6\u63CF\u8FF0"), /*#__PURE__*/React.createElement("textarea", {
    value: issueDetail,
    onChange: function onChange(e) {
      return setIssueDetail(e.target.value);
    },
    placeholder: "\u706F\u5934\u7535\u7EBF\u70E7\u574F\uFF0C\u539F\u5730\u5740\u8865\u53D1\u4E00\u5957\u706F\u5934\u7535\u7EBF",
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
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
  }, "\u56FD\u5BB6"), /*#__PURE__*/React.createElement("input", {
    value: country,
    onChange: function onChange(e) {
      return setCountry(e.target.value);
    },
    placeholder: "US",
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u6253\u5305\u8D23\u4EFB\u4EBA"), /*#__PURE__*/React.createElement("input", {
    value: packer,
    onChange: function onChange(e) {
      return setPacker(e.target.value);
    },
    placeholder: "\u6768\u4E3D\u5206",
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u8D28\u68C0\u8D23\u4EFB\u4EBA"), /*#__PURE__*/React.createElement("input", {
    value: qc,
    onChange: function onChange(e) {
      return setQc(e.target.value);
    },
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      marginBottom: 14,
      padding: '12px',
      background: '#faf5ff',
      border: '1px solid #e9d5ff',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: '#7c3aed',
      marginBottom: 10
    }
  }, "\uD83D\uDEE0 \u4EA7\u54C1\u6539\u8FDB\u95ED\u73AF"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u4EA7\u54C1\u6539\u8FDB\u5EFA\u8BAE"), /*#__PURE__*/React.createElement("textarea", {
    value: improvementSuggestion,
    onChange: function onChange(e) {
      return setImprovementSuggestion(e.target.value);
    },
    placeholder: "\u5982:\u5E95\u5EA7\u914D\u4EF6\u6613\u7F3A\u5931,\u5EFA\u8BAE\u52A0\u56FA\u5305\u88C5 / \u706F\u7F69\u6539\u6728\u7BB1 / \u6539\u5305\u88C5\u2026",
    style: {
      width: '100%',
      minHeight: 56,
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
  }, "\u4EA7\u54C1\u6539\u8FDB\u72B6\u6001"), /*#__PURE__*/React.createElement("input", {
    list: "improvement-status-options",
    value: improvementStatus,
    onChange: function onChange(e) {
      return setImprovementStatus(e.target.value);
    },
    placeholder: "\u5F85\u8DDF\u5355\u5904\u7406",
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("datalist", {
    id: "improvement-status-options"
  }, /*#__PURE__*/React.createElement("option", {
    value: "\u5F85\u8DDF\u5355\u5904\u7406"
  }), /*#__PURE__*/React.createElement("option", {
    value: "\u6253\u6728\u7BB1"
  }), /*#__PURE__*/React.createElement("option", {
    value: "\u6539\u5305\u88C5"
  }), /*#__PURE__*/React.createElement("option", {
    value: "\u53D1\u8D27\u524D\u68C0\u67E5"
  }), /*#__PURE__*/React.createElement("option", {
    value: "\u5DF2\u8F6C\u7F8E\u5DE5\u4FEE\u6539"
  }), /*#__PURE__*/React.createElement("option", {
    value: "\u5DF2\u5B8C\u6210"
  })))), /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u6C9F\u901A\u56FE\u7247 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400,
      fontSize: 10
    }
  }, "\xB7 \u4E0E\u5DE5\u5382/\u4F9B\u5E94\u5546\u6C9F\u901A\u6539\u8FDB\u7684\u622A\u56FE")), /*#__PURE__*/React.createElement(MultiImageUploader, {
    attachments: commImages,
    setAttachments: setCommImages,
    defaultLabel: "\u6C9F\u901A",
    maxSize: 10
  }))), kind === 'refill' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
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
  }, "\u8865\u4EF6\u6E05\u5355 *  ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400,
      fontSize: 10
    }
  }, "\xB7 \u6BCF\u4E00\u9879\u53EF\u5355\u72EC\u4E0A\u4F20\u56FE\u7247")), refillItems.map(function (it, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        marginBottom: 10,
        padding: 10,
        background: '#f8fafc',
        border: '1px solid var(--line)',
        borderRadius: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        marginBottom: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: 'var(--ink-3)',
        width: 24
      }
    }, "#", idx + 1), /*#__PURE__*/React.createElement("input", {
      value: it.item,
      onChange: function onChange(e) {
        var next = _toConsumableArray(refillItems);
        next[idx] = _objectSpread(_objectSpread({}, next[idx]), {}, {
          item: e.target.value
        });
        setRefillItems(next);
      },
      placeholder: "\u914D\u4EF6\u540D\uFF08\u5982\uFF1A\u706F\u5934\u7535\u7EBF\uFF09",
      style: {
        flex: 2,
        padding: '6px 10px',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 13
      }
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: it.qty,
      onChange: function onChange(e) {
        var next = _toConsumableArray(refillItems);
        next[idx] = _objectSpread(_objectSpread({}, next[idx]), {}, {
          qty: parseInt(e.target.value) || 1
        });
        setRefillItems(next);
      },
      min: 1,
      style: {
        width: 60,
        padding: '6px 10px',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 13
      }
    }), /*#__PURE__*/React.createElement("input", {
      value: it.unit || '套',
      onChange: function onChange(e) {
        var next = _toConsumableArray(refillItems);
        next[idx] = _objectSpread(_objectSpread({}, next[idx]), {}, {
          unit: e.target.value
        });
        setRefillItems(next);
      },
      placeholder: "\u5355\u4F4D",
      style: {
        width: 60,
        padding: '6px 10px',
        border: '1px solid var(--line)',
        borderRadius: 6,
        fontSize: 13
      }
    }), refillItems.length > 1 && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setRefillItems(refillItems.filter(function (_, i) {
          return i !== idx;
        }));
      },
      style: {
        padding: '6px 10px',
        background: '#fef2f2',
        color: '#dc2626',
        border: '1px solid #fca5a5',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 13
      }
    }, "\xD7")), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingLeft: 30
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)',
        marginBottom: 4
      }
    }, "\uD83D\uDCF7 / \uD83C\uDFAC \u6B64\u914D\u4EF6\u7684\u56FE\u7247 \xB7 \u89C6\u9891 ", it.attachments && it.attachments.length > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--accent)',
        fontWeight: 600
      }
    }, "(", it.attachments.length, ")")), /*#__PURE__*/React.createElement(MultiImageUploader, {
      attachments: it.attachments || [],
      setAttachments: function setAttachments(atts) {
        var next = _toConsumableArray(refillItems);
        next[idx] = _objectSpread(_objectSpread({}, next[idx]), {}, {
          attachments: atts
        });
        setRefillItems(next);
      },
      acceptVideo: true,
      defaultLabel: "product"
    })));
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setRefillItems([].concat(_toConsumableArray(refillItems), [{
        item: '',
        qty: 1,
        unit: '套',
        attachments: []
      }]));
    },
    style: {
      padding: '8px 10px',
      background: 'var(--bg)',
      border: '1px dashed var(--line)',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 12,
      color: 'var(--ink-2)',
      fontFamily: 'inherit',
      width: '100%'
    }
  }, "+ \u6DFB\u52A0\u4E00\u9879\u914D\u4EF6")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
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
  }, "\u9884\u8BA1\u53D1\u8D27\u65E5\u671F"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: expectedShipDate,
    onChange: function onChange(e) {
      return setExpectedShipDate(e.target.value);
    },
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("select", {
    value: refillStatus,
    onChange: function onChange(e) {
      return setRefillStatus(e.target.value);
    },
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }, REFILL_STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.key,
      value: s.key
    }, s.label);
  }))))), kind === 'refund' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 6
    }
  }, "\u9000\u6B3E\u7C7B\u578B *"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, REFUND_TYPES.map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return setRefundType(t.key);
      },
      style: {
        padding: '5px 12px',
        borderRadius: 14,
        fontSize: 11,
        cursor: 'pointer',
        fontFamily: 'inherit',
        border: '1px solid ' + (refundType === t.key ? t.color : 'var(--line)'),
        background: refundType === t.key ? t.bg : 'white',
        color: refundType === t.key ? t.color : 'var(--ink-3)',
        fontWeight: refundType === t.key ? 600 : 400
      }
    }, t.label);
  })), refundType === 'other' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: 10,
      background: '#fef9c3',
      border: '1px solid #fde68a',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#854d0e',
      display: 'block',
      marginBottom: 4
    }
  }, "\uD83D\uDCA1 \u8BF7\u8BF4\u660E\u5177\u4F53\u9000\u6B3E\u7C7B\u578B *"), /*#__PURE__*/React.createElement("input", {
    value: refundTypeCustom,
    onChange: function onChange(e) {
      return setRefundTypeCustom(e.target.value);
    },
    placeholder: "\u4F8B\u5982\uFF1A\u8D26\u5355\u4E89\u8BAE\u3001\u5BA2\u6237\u6539\u4E3B\u610F\u3001\u5730\u5740\u9519\u8BEF...",
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid #fcd34d',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
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
  }, "\u9000\u6B3E\u91D1\u989D *"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: amount,
    onChange: function onChange(e) {
      return setAmount(e.target.value);
    },
    step: "0.01",
    placeholder: "88.00",
    style: {
      flex: 1,
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("select", {
    value: currency,
    onChange: function onChange(e) {
      return setCurrency(e.target.value);
    },
    style: {
      padding: '6px 8px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white',
      width: 75
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "USD"
  }, "USD"), /*#__PURE__*/React.createElement("option", {
    value: "EUR"
  }, "EUR"), /*#__PURE__*/React.createElement("option", {
    value: "GBP"
  }, "GBP"), /*#__PURE__*/React.createElement("option", {
    value: "CAD"
  }, "CAD"), /*#__PURE__*/React.createElement("option", {
    value: "AUD"
  }, "AUD"), /*#__PURE__*/React.createElement("option", {
    value: "CNY"
  }, "CNY")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u652F\u4ED8\u65B9\u5F0F *"), /*#__PURE__*/React.createElement("select", {
    value: paymentMethod,
    onChange: function onChange(e) {
      return setPaymentMethod(e.target.value);
    },
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }, REFUND_PAYMENT_METHODS.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p.key,
      value: p.key
    }, p.label);
  })))), paymentMethod === 'other' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14,
      padding: 10,
      background: '#fef9c3',
      border: '1px solid #fde68a',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#854d0e',
      display: 'block',
      marginBottom: 4
    }
  }, "\uD83D\uDCA1 \u8BF7\u8BF4\u660E\u5177\u4F53\u652F\u4ED8\u65B9\u5F0F *"), /*#__PURE__*/React.createElement("input", {
    value: paymentMethodCustom,
    onChange: function onChange(e) {
      return setPaymentMethodCustom(e.target.value);
    },
    placeholder: "\u4F8B\u5982\uFF1A\u94F6\u884C\u8F6C\u8D26\u3001Klarna\u3001Affirm\u3001Apple Pay...",
    style: {
      width: '100%',
      padding: '6px 10px',
      border: '1px solid #fcd34d',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
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
  }, "\u4EA7\u54C1\u540D ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--ink-3)'
    }
  }, "(\u8F93\u5165\u8054\u60F3\u4EA7\u54C1\u4E3B\u8868)")), /*#__PURE__*/React.createElement(ProductAutocomplete, {
    value: productName,
    onChange: setProductName,
    onSelect: function onSelect(prod) {
      return setProductName(prod.name || '');
    },
    products: productsList,
    mode: "name",
    placeholder: "Marie Petite Surface Ceiling Lamp"
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
  }, "\u9000\u6B3E\u539F\u56E0\u8BE6\u60C5 *"), /*#__PURE__*/React.createElement("textarea", {
    value: refundReason,
    onChange: function onChange(e) {
      return setRefundReason(e.target.value);
    },
    placeholder: "Marie Petite Surface Ceiling Lamp\u989C\u8272\u592A\u9EC4\u4E86\uFF0C\u5BF9\u8D28\u91CF\u4E5F\u4E0D\u6EE1\uFF0C\u900050% 88USD\u7ED9\u5BA2\u6237",
    style: {
      width: '100%',
      minHeight: 70,
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      background: '#fff7ed',
      border: '1px solid #fdba74',
      borderRadius: 6,
      fontSize: 11,
      color: '#9a3412',
      marginBottom: 14
    }
  }, "\uD83D\uDCA1 \u521B\u5EFA\u540E\u72B6\u6001\u4E3A\u300C\u5F85\u5BA1\u6838\u300D \xB7 \u8D22\u52A1/admin \u89D2\u8272\u4F1A\u5728\u300C\uD83D\uDCB0 \u9000\u6B3E\u7BA1\u7406\u300D\u9762\u677F\u770B\u5230\u6B64\u5355 \xB7 \u5BA1\u6838\u901A\u8FC7\u540E\u64CD\u4F5C Shopify/Stripe \u5B9E\u9645\u9000\u6B3E\uFF0C\u518D\u56DE\u6765\u6807\u8BB0\u4E3A\u300C\u5DF2\u5B8C\u6210\u300D")), /*#__PURE__*/React.createElement("div", {
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
  }, "\u4F9B\u5E94\u5546 ", suppliers.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400
    }
  }, "\uFF08\u5171 ", suppliers.length, " \u5BB6\u53EF\u9009\uFF09")), /*#__PURE__*/React.createElement(SupplierSelect, {
    suppliers: suppliers,
    value: supplierId,
    onChange: setSupplierId
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
      marginBottom: 6
    }
  }, "\uD83D\uDCF7 / \uD83C\uDFAC \u56FE\u7247 \xB7 \u89C6\u9891\u9644\u4EF6 ", attachments.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "(", attachments.length, ")")), /*#__PURE__*/React.createElement(MultiImageUploader, {
    attachments: attachments,
    setAttachments: setAttachments,
    acceptVideo: true,
    defaultLabel: kind === 'refund' ? 'damage' : kind === 'aftersale' ? 'damage' : 'product'
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u5907\u6CE8"), /*#__PURE__*/React.createElement("textarea", {
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
    placeholder: "\u8865\u5145\u4FE1\u606F...",
    style: {
      width: '100%',
      minHeight: 50,
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 22px',
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn-sec",
    style: {
      padding: '8px 18px'
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: handleSubmit,
    disabled: saving,
    style: {
      padding: '8px 22px',
      background: titleInfo.color,
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 13,
      opacity: saving ? 0.6 : 1
    }
  }, saving ? '保存中...' : isEdit ? '✓ 更新' : '✓ 保存事件')))), document.body);
};

// ============================================================
// 批量转交工作 Modal — 主管选源员工 + 多选记录 + 选目标员工
// ============================================================
var BatchTransferModal = function BatchTransferModal(_ref34) {
  var _employees$find5, _employees$find6;
  var employees = _ref34.employees,
    records = _ref34.records,
    user = _ref34.user,
    fromUserId = _ref34.fromUserId,
    setFromUserId = _ref34.setFromUserId,
    onClose = _ref34.onClose,
    onTransfer = _ref34.onTransfer;
  var _useState163 = useState(new Set()),
    _useState164 = _slicedToArray(_useState163, 2),
    selectedIds = _useState164[0],
    setSelectedIds = _useState164[1];
  var _useState165 = useState(''),
    _useState166 = _slicedToArray(_useState165, 2),
    filterSite = _useState166[0],
    setFilterSite = _useState166[1];
  var _useState167 = useState(''),
    _useState168 = _slicedToArray(_useState167, 2),
    targetUserId = _useState168[0],
    setTargetUserId = _useState168[1];
  // 🆕 fix79: 智能搜索 — 员工很多时按名字/拼音/部门搜
  var _useState169 = useState(''),
    _useState170 = _slicedToArray(_useState169, 2),
    fromSearch = _useState170[0],
    setFromSearch = _useState170[1];
  var _useState171 = useState(''),
    _useState172 = _slicedToArray(_useState171, 2),
    targetSearch = _useState172[0],
    setTargetSearch = _useState172[1];

  // 候选源员工列表
  var candidateEmployees = employees.filter(function (e) {
    return e.role !== 'finance';
  });

  // 🆕 fix79: 搜索过滤(支持 name / alias / email / role / title)
  var matchEmp = function matchEmp(e, q) {
    if (!q) return true;
    var s = q.toLowerCase();
    return (e.name || '').toLowerCase().includes(s) || (e.alias || '').toLowerCase().includes(s) || (e.email || '').toLowerCase().includes(s) || (e.title || '').toLowerCase().includes(s) || (e.role || '').toLowerCase().includes(s) || (e.sites || '').toLowerCase().includes(s);
  };
  var sourceFiltered = candidateEmployees.filter(function (e) {
    return matchEmp(e, fromSearch);
  });
  var targetFiltered = candidateEmployees.filter(function (e) {
    return e.id !== fromUserId && matchEmp(e, targetSearch);
  });

  // 当前选中员工的活跃工作
  var sourceRecords = useMemo(function () {
    if (!fromUserId) return [];
    return records.filter(function (r) {
      return r.ownerId === fromUserId && !r.deleted && r.status !== 'resolved';
    }).sort(function (a, b) {
      var aDate = a.nextFollowUp || '9999';
      var bDate = b.nextFollowUp || '9999';
      return aDate.localeCompare(bDate);
    });
  }, [records, fromUserId]);

  // 按 site 分组
  var sites = useMemo(function () {
    return _toConsumableArray(new Set(sourceRecords.map(function (r) {
      return r.site;
    }).filter(Boolean))).sort();
  }, [sourceRecords]);
  var filteredRecords = useMemo(function () {
    if (!filterSite) return sourceRecords;
    return sourceRecords.filter(function (r) {
      return r.site === filterSite;
    });
  }, [sourceRecords, filterSite]);
  var toggleSelect = function toggleSelect(id) {
    setSelectedIds(function (prev) {
      var next = new Set(prev);
      if (next.has(id)) next["delete"](id);else next.add(id);
      return next;
    });
  };
  var toggleAll = function toggleAll() {
    if (selectedIds.size === filteredRecords.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredRecords.map(function (r) {
        return r.id;
      })));
    }
  };

  // 按网站一键全选
  var selectBySite = function selectBySite(site) {
    var ids = sourceRecords.filter(function (r) {
      return r.site === site;
    }).map(function (r) {
      return r.id;
    });
    setSelectedIds(new Set(ids));
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref35 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
      var _employees$find4;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.n) {
          case 0:
            if (targetUserId) {
              _context11.n = 1;
              break;
            }
            alert('请选择目标员工');
            return _context11.a(2);
          case 1:
            if (!(selectedIds.size === 0)) {
              _context11.n = 2;
              break;
            }
            alert('请勾选要转交的记录');
            return _context11.a(2);
          case 2:
            _context11.n = 3;
            return wsConfirm("\u786E\u8BA4\u5C06 ".concat(selectedIds.size, " \u5355\u5DE5\u4F5C\u8F6C\u4EA4\u7ED9 ").concat((_employees$find4 = employees.find(function (e) {
              return e.id === targetUserId;
            })) === null || _employees$find4 === void 0 ? void 0 : _employees$find4.name, "\uFF1F"));
          case 3:
            if (_context11.v) {
              _context11.n = 4;
              break;
            }
            return _context11.a(2);
          case 4:
            onTransfer(_toConsumableArray(selectedIds), targetUserId);
          case 5:
            return _context11.a(2);
        }
      }, _callee11);
    }));
    return function handleSubmit() {
      return _ref35.apply(this, arguments);
    };
  }();
  var today = todayISO();
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.5)',
      zIndex: 9999,
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
      borderRadius: 'var(--radius-lg)',
      maxWidth: 900,
      width: '100%',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 24px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-.022em'
    }
  }, "\uD83D\uDD04 \u6279\u91CF\u8F6C\u4EA4\u5DE5\u4F5C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "\u9009\u62E9\u6E90\u5458\u5DE5 \u2192 \u52FE\u9009\u8981\u8F6C\u7684\u5DE5\u4F5C\uFF08\u53EF\u6309\u7F51\u7AD9\u7B5B\u9009\uFF09\u2192 \u9009\u76EE\u6807\u5458\u5DE5 \u2192 \u4E00\u952E\u8F6C\u4EA4")), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: onClose,
    style: {
      padding: '4px 12px'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px',
      borderBottom: '1px solid var(--line)',
      background: 'var(--bg-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      marginBottom: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-3)'
    }
  }, "Step 1 \xB7 \u9009\u62E9\u6E90\u5458\u5DE5\uFF08\u8981\u8F6C\u51FA\u5DE5\u4F5C\u7684\u4EBA\uFF09"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: fromSearch,
    onChange: function onChange(e) {
      return setFromSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u641C\u7D22\u5458\u5DE5\u540D / \u522B\u540D / \u90E8\u95E8...",
    style: {
      padding: '5px 28px 5px 10px',
      fontSize: 12,
      border: '1px solid var(--line)',
      borderRadius: 6,
      width: 230,
      fontFamily: 'inherit'
    }
  }), fromSearch && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setFromSearch('');
    },
    title: "\u6E05\u7A7A",
    style: {
      position: 'absolute',
      right: 6,
      top: '50%',
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--ink-4)',
      fontSize: 14,
      padding: '0 4px',
      lineHeight: 1
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, sourceFiltered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-4)',
      padding: '8px 0'
    }
  }, "\u65E0\u5339\u914D\u5458\u5DE5 \xB7 \u8BD5\u8BD5\u522B\u7684\u5173\u952E\u5B57") : sourceFiltered.map(function (emp) {
    var workload = records.filter(function (r) {
      return r.ownerId === emp.id && !r.deleted && r.status !== 'resolved';
    }).length;
    var isSelected = fromUserId === emp.id;
    return /*#__PURE__*/React.createElement("button", {
      key: emp.id,
      onClick: function onClick() {
        setFromUserId(emp.id);
        setSelectedIds(new Set());
        setFilterSite('');
      },
      style: {
        padding: '6px 12px',
        borderRadius: 8,
        border: '1px solid ' + (isSelected ? 'var(--accent)' : 'var(--line)'),
        background: isSelected ? 'var(--accent-soft)' : 'white',
        color: isSelected ? 'var(--accent)' : 'var(--ink-2)',
        cursor: 'pointer',
        fontSize: 12,
        fontFamily: 'inherit',
        fontWeight: isSelected ? 600 : 400
      }
    }, emp.name, emp.alias ? ' ' + emp.alias : '', /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: workload > 8 ? 'var(--bad)' : 'var(--ink-4)',
        fontSize: 10
      }
    }, workload, "\u5355"));
  })), fromSearch && sourceFiltered.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)',
      marginTop: 6
    }
  }, "\u663E\u793A ", sourceFiltered.length, " / ", candidateEmployees.length, " \u4EBA")), fromUserId && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 8
    }
  }, "Step 2 \xB7 \u52FE\u9009\u8981\u8F6C\u7684\u5DE5\u4F5C\uFF08\u5171 ", sourceRecords.length, " \u5355\uFF09"), sites.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "\u6309\u7F51\u7AD9\u7B5B\u9009\uFF1A"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setFilterSite('');
    },
    style: {
      padding: '3px 8px',
      borderRadius: 6,
      border: '1px solid ' + (filterSite === '' ? 'var(--accent)' : 'var(--line)'),
      background: filterSite === '' ? 'var(--accent-soft)' : 'white',
      color: 'var(--ink-2)',
      fontSize: 11,
      cursor: 'pointer'
    }
  }, "\u5168\u90E8 (", sourceRecords.length, ")"), sites.map(function (s) {
    var n = sourceRecords.filter(function (r) {
      return r.site === s;
    }).length;
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: function onClick() {
        return setFilterSite(s);
      },
      style: {
        padding: '3px 8px',
        borderRadius: 6,
        border: '1px solid ' + (filterSite === s ? 'var(--accent)' : 'var(--line)'),
        background: filterSite === s ? 'var(--accent-soft)' : 'white',
        color: 'var(--ink-2)',
        fontSize: 11,
        cursor: 'pointer'
      }
    }, s, " (", n, ")", /*#__PURE__*/React.createElement("span", {
      onClick: function onClick(e) {
        e.stopPropagation();
        selectBySite(s);
      },
      style: {
        marginLeft: 6,
        padding: '1px 5px',
        borderRadius: 4,
        background: 'var(--gold)',
        color: 'white',
        fontSize: 9,
        fontWeight: 600
      },
      title: "\u4E00\u952E\u9009\u4E2D\u8FD9\u4E2A\u7F51\u7AD9\u7684\u6240\u6709"
    }, "\u5168\u9009"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleAll,
    style: {
      padding: '4px 10px',
      borderRadius: 6,
      border: '1px solid var(--line)',
      background: 'white',
      color: 'var(--ink-2)',
      fontSize: 11,
      cursor: 'pointer'
    }
  }, selectedIds.size === filteredRecords.length && filteredRecords.length > 0 ? '☑ 取消全选' : '☐ 全选当前列表'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--accent)',
      fontWeight: 600
    }
  }, "\u5DF2\u9009 ", selectedIds.size, " \u5355"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      maxHeight: 350
    }
  }, filteredRecords.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '40px',
      color: 'var(--ink-4)',
      fontSize: 13
    }
  }, sourceRecords.length === 0 ? '该员工没有未完成的工作' : '该网站下没有工作') : filteredRecords.map(function (r) {
    var checked = selectedIds.has(r.id);
    var isOverdue = r.nextFollowUp && r.nextFollowUp < today;
    return /*#__PURE__*/React.createElement("label", {
      key: r.id,
      onClick: function onClick() {
        return toggleSelect(r.id);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '10px 24px',
        borderBottom: '1px solid var(--line)',
        cursor: 'pointer',
        background: checked ? 'var(--accent-soft)' : 'white',
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: checked,
      readOnly: true,
      style: {
        cursor: 'pointer',
        accentColor: 'var(--accent)'
      }
    }), /*#__PURE__*/React.createElement("div", {
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
        fontWeight: 600
      }
    }, r.orderRef || r.customer || '(无订单号)'), r.customer && r.orderRef && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)',
        fontSize: 11
      }
    }, "\xB7 ", r.customer), r.site && /*#__PURE__*/React.createElement("span", {
      className: "tag",
      style: {
        fontSize: 10,
        padding: '1px 6px'
      }
    }, r.site), isOverdue && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--bad)',
        fontSize: 11,
        fontWeight: 600
      }
    }, "\u903E\u671F")), r.note && /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--ink-3)',
        fontSize: 11,
        marginTop: 2,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, "\uD83D\uDCAC ", r.note)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        flexShrink: 0
      }
    }, "\u4E0B\u6B21\u8DDF\u8FDB\uFF1A", r.nextFollowUp || '未设'));
  }))), fromUserId && selectedIds.size > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 24px',
      borderTop: '1px solid var(--line)',
      background: 'var(--bg-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      marginBottom: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-3)'
    }
  }, "Step 3 \xB7 \u9009\u76EE\u6807\u5458\u5DE5"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: targetSearch,
    onChange: function onChange(e) {
      return setTargetSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u641C\u7D22\u5458\u5DE5\u540D / \u522B\u540D / \u90E8\u95E8...",
    style: {
      padding: '5px 28px 5px 10px',
      fontSize: 12,
      border: '1px solid var(--line)',
      borderRadius: 6,
      width: 230,
      fontFamily: 'inherit'
    }
  }), targetSearch && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setTargetSearch('');
    },
    title: "\u6E05\u7A7A",
    style: {
      position: 'absolute',
      right: 6,
      top: '50%',
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--ink-4)',
      fontSize: 14,
      padding: '0 4px',
      lineHeight: 1
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 12
    }
  }, targetFiltered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-4)',
      padding: '8px 0'
    }
  }, "\u65E0\u5339\u914D\u5458\u5DE5 \xB7 \u8BD5\u8BD5\u522B\u7684\u5173\u952E\u5B57") : targetFiltered.map(function (emp) {
    var workload = records.filter(function (r) {
      return r.ownerId === emp.id && !r.deleted && r.status !== 'resolved';
    }).length;
    var isSelected = targetUserId === emp.id;
    return /*#__PURE__*/React.createElement("button", {
      key: emp.id,
      onClick: function onClick() {
        return setTargetUserId(emp.id);
      },
      style: {
        padding: '6px 12px',
        borderRadius: 8,
        border: '1px solid ' + (isSelected ? 'var(--accent)' : 'var(--line)'),
        background: isSelected ? 'var(--accent-soft)' : 'white',
        color: isSelected ? 'var(--accent)' : 'var(--ink-2)',
        cursor: 'pointer',
        fontSize: 12,
        fontFamily: 'inherit',
        fontWeight: isSelected ? 600 : 400
      }
    }, emp.name, emp.alias ? ' ' + emp.alias : '', /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: workload > 8 ? 'var(--bad)' : 'var(--ink-4)',
        fontSize: 10
      }
    }, workload, "\u5355"));
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: handleSubmit,
    disabled: !targetUserId,
    style: {
      width: '100%',
      padding: '10px',
      fontSize: 14,
      fontWeight: 600,
      opacity: targetUserId ? 1 : 0.5
    }
  }, "\u2713 \u628A ", selectedIds.size, " \u5355\u4ECE ", (_employees$find5 = employees.find(function (e) {
    return e.id === fromUserId;
  })) === null || _employees$find5 === void 0 ? void 0 : _employees$find5.name, " \u8F6C\u4EA4\u7ED9 ", targetUserId ? (_employees$find6 = employees.find(function (e) {
    return e.id === targetUserId;
  })) === null || _employees$find6 === void 0 ? void 0 : _employees$find6.name : '...'))));
};
var FollowUpModal = function FollowUpModal(_ref36) {
  var _record$escalatedAt, _record$screenshots, _record$screenshots2, _record$feedbackShots, _record$feedbackShots2, _record$followUps, _record$followUps2;
  var record = _ref36.record,
    onClose = _ref36.onClose,
    onUpdate = _ref36.onUpdate,
    toast = _ref36.toast,
    user = _ref36.user,
    employees = _ref36.employees,
    cloudOn = _ref36.cloudOn,
    _ref36$readonly = _ref36.readonly,
    readonly = _ref36$readonly === void 0 ? false : _ref36$readonly,
    _ref36$recordEvents = _ref36.recordEvents,
    recordEvents = _ref36$recordEvents === void 0 ? null : _ref36$recordEvents,
    onAddEvent = _ref36.onAddEvent,
    onEditEvent = _ref36.onEditEvent,
    onDeleteEvent = _ref36.onDeleteEvent;
  var _useState173 = useState(false),
    _useState174 = _slicedToArray(_useState173, 2),
    escalateModal = _useState174[0],
    setEscalateModal = _useState174[1];
  var _useState175 = useState(''),
    _useState176 = _slicedToArray(_useState175, 2),
    escalateReason = _useState176[0],
    setEscalateReason = _useState176[1];
  var _useState177 = useState('high'),
    _useState178 = _slicedToArray(_useState177, 2),
    escalateUrgency = _useState178[0],
    setEscalateUrgency = _useState178[1];
  // 🆕 fix7: 升级层级 — 'admin'(给主管) / 'boss'(给老板)
  var _useState179 = useState('admin'),
    _useState180 = _slicedToArray(_useState179, 2),
    escalateLevel = _useState180[0],
    setEscalateLevel = _useState180[1];
  var isAdmin = user && (user.role === 'admin' || user.role === 'super_admin');
  var isSuperAdmin = user && user.role === 'super_admin';
  // 🆕 fix7: 当前用户能升级到的层级 — staff/finance → 主管;admin → 老板;super_admin → 不能升级(已在顶)
  // 已升级到主管的也允许 admin 再升级到老板
  var canEscalateToAdmin = !isAdmin; // staff / finance
  var canEscalateToBoss = user && user.role === 'admin'; // admin 可升老板
  var canEscalate = canEscalateToAdmin || canEscalateToBoss;

  // 一键升级 → 自动建工单到 workspace_tickets
  var submitEscalate = /*#__PURE__*/function () {
    var _ref37 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
      var targetRole, candidates, allCandidates, targetUser, levelLabel, ticket, _yield$CLOUD$client$f, error, local, prevHistory, _t8;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            if (escalateReason.trim()) {
              _context12.n = 1;
              break;
            }
            alert('请填写需要主管协助的原因');
            return _context12.a(2);
          case 1:
            targetRole = escalateLevel === 'boss' ? 'super_admin' : 'admin';
            candidates = (employees || []).filter(function (e) {
              return e.role === targetRole && !e.hideFromList;
            }); // 兜底: 找不到 visible 的就找任意
            allCandidates = candidates.length > 0 ? candidates : (employees || []).filter(function (e) {
              return e.role === targetRole;
            });
            if (!(allCandidates.length === 0)) {
              _context12.n = 2;
              break;
            }
            alert("\u6CA1\u6709\u627E\u5230".concat(escalateLevel === 'boss' ? '老板(super_admin)' : '主管(admin)', "\u8D26\u53F7"));
            return _context12.a(2);
          case 2:
            targetUser = allCandidates[0];
            levelLabel = escalateLevel === 'boss' ? '老板' : '主管';
            ticket = {
              id: uid(),
              title: "\uD83D\uDEA8 ".concat(escalateLevel === 'boss' ? '主管' : '客服', "\u5347\u7EA7\u5230").concat(levelLabel, " \xB7 ").concat(record.customer || record.orderRef || '(无标题)'),
              content: "\u5BA2\u6237\uFF1A".concat(record.customer || '-', "\n\u8BA2\u5355\uFF1A").concat(record.orderRef || '-', "\n\u7F51\u7AD9\uFF1A").concat(record.site || '-', "\n\u54A8\u8BE2\u4E8B\u9879\uFF1A").concat(record.category || '-', "\n\u5347\u7EA7\u5C42\u7EA7\uFF1A").concat(levelLabel, "\n\n\u3010\u9700\u8981").concat(levelLabel, "\u534F\u52A9\u7684\u539F\u56E0\u3011\n").concat(escalateReason, "\n\n\u3010\u5DF2\u8DDF\u8FDB\u5907\u6CE8\u3011\n").concat(record.note || '(无)', "\n\n").concat(record.escalateReason ? "\u3010\u4E4B\u524D\u7684\u5347\u7EA7\u5386\u53F2\u3011\n".concat(record.escalateReason, "\n\n") : '', "\u70B9\u8DDF\u8FDB\u8BB0\u5F55 ID\uFF1A").concat(record.id),
              priority: escalateUrgency,
              department: 'service',
              from_id: user.id,
              from_name: user.name + (user.alias ? ' ' + user.alias : ''),
              target_id: targetUser.id,
              target_name: targetUser.name + (targetUser.alias ? ' ' + targetUser.alias : ''),
              status: 'pending',
              record_ref: record.id,
              created_at: nowISO(),
              updated_at: nowISO()
            };
            _context12.p = 3;
            if (!(cloudOn && CLOUD.client)) {
              _context12.n = 6;
              break;
            }
            _context12.n = 4;
            return CLOUD.client.from('workspace_tickets').upsert(ticket);
          case 4:
            _yield$CLOUD$client$f = _context12.v;
            error = _yield$CLOUD$client$f.error;
            if (!error) {
              _context12.n = 5;
              break;
            }
            throw error;
          case 5:
            _context12.n = 7;
            break;
          case 6:
            local = STORE.get('tickets_local', []);
            STORE.set('tickets_local', [ticket].concat(_toConsumableArray(local)));
          case 7:
            // 同时把记录状态改为 escalated（透过 status 字段不能用，加 escalated 字段）
            // 保留之前的升级历史
            prevHistory = record.escalateReason ? "".concat(record.escalateReason, "\n\n---\n") : '';
            onUpdate({
              escalated: true,
              escalatedAt: nowISO(),
              escalateReason: "".concat(prevHistory, "[\u5347\u7EA7\u5230").concat(levelLabel, " \xB7 ").concat(escalateUrgency, "] ").concat(escalateReason),
              escalateLevel: escalateLevel // 'admin' or 'boss'
            });
            toast("\u2713 \u5DF2\u5347\u7EA7\u7ED9".concat(levelLabel, " ").concat(targetUser.name, "\uFF0C\u8BF7\u7B49\u5F85\u5904\u7406"));
            setEscalateModal(false);
            setEscalateReason('');
            _context12.n = 9;
            break;
          case 8:
            _context12.p = 8;
            _t8 = _context12.v;
            alert("\u274C \u5347\u7EA7\u5931\u8D25\uFF1A".concat(_t8.message));
          case 9:
            return _context12.a(2);
        }
      }, _callee12, null, [[3, 8]]);
    }));
    return function submitEscalate() {
      return _ref37.apply(this, arguments);
    };
  }();
  var _useState181 = useState(''),
    _useState182 = _slicedToArray(_useState181, 2),
    newFollowText = _useState182[0],
    setNewFollowText = _useState182[1];
  var _useState183 = useState(record.status),
    _useState184 = _slicedToArray(_useState183, 2),
    newFollowStatus = _useState184[0],
    setNewFollowStatus = _useState184[1];
  var fileInputRef = useRef(null);
  var dropZoneRef = useRef(null);

  // 粘贴图片（只读模式下禁用）
  useEffect(function () {
    if (readonly) return;
    var handlePaste = function handlePaste(e) {
      var _e$clipboardData3;
      var items = (_e$clipboardData3 = e.clipboardData) === null || _e$clipboardData3 === void 0 ? void 0 : _e$clipboardData3.items;
      if (!items) return;
      var _iterator3 = _createForOfIteratorHelper(items),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var it = _step3.value;
          if (it.type.indexOf('image') === 0) {
            var file = it.getAsFile();
            handleFile(file);
            e.preventDefault();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    };
    window.addEventListener('paste', handlePaste);
    return function () {
      return window.removeEventListener('paste', handlePaste);
    };
  }, [record, readonly]);
  var handleFile = function handleFile(file) {
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) {
      toast('⚠ 图片过大 (>3MB)，请压缩后再上传');
      return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      var screenshots = [].concat(_toConsumableArray(record.screenshots || []), [{
        id: uid(),
        data: e.target.result,
        name: file.name || 'screenshot.png',
        time: nowISO()
      }]);
      onUpdate({
        screenshots: screenshots
      });
      toast('✓ 截图已添加');
    };
    reader.readAsDataURL(file);
  };
  var handleDrop = function handleDrop(e) {
    var _dropZoneRef$current, _e$dataTransfer$files;
    e.preventDefault();
    (_dropZoneRef$current = dropZoneRef.current) === null || _dropZoneRef$current === void 0 || _dropZoneRef$current.classList.remove('dragover');
    var file = (_e$dataTransfer$files = e.dataTransfer.files) === null || _e$dataTransfer$files === void 0 ? void 0 : _e$dataTransfer$files[0];
    if (file && file.type.startsWith('image/')) handleFile(file);
  };
  var removeScreenshot = function removeScreenshot(sid) {
    var screenshots = (record.screenshots || []).filter(function (s) {
      return s.id !== sid;
    });
    onUpdate({
      screenshots: screenshots
    });
  };

  // 🆕 fix82: 问题反馈截图
  var handleFeedbackFile = function handleFeedbackFile(file) {
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) {
      toast('⚠ 图片过大 (>3MB)，请压缩后再上传');
      return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      var feedbackShots = [].concat(_toConsumableArray(record.feedbackShots || []), [{
        id: uid(),
        data: e.target.result,
        name: file.name || 'feedback.png',
        time: nowISO()
      }]);
      onUpdate({
        feedbackShots: feedbackShots,
        isFeedback: true
      });
      toast('✓ 问题反馈截图已添加');
    };
    reader.readAsDataURL(file);
  };
  var removeFeedbackShot = function removeFeedbackShot(sid) {
    var feedbackShots = (record.feedbackShots || []).filter(function (s) {
      return s.id !== sid;
    });
    onUpdate({
      feedbackShots: feedbackShots
    });
  };
  var addFollowUp = function addFollowUp() {
    if (!newFollowText.trim()) return;
    var followUps = [].concat(_toConsumableArray(record.followUps || []), [{
      id: uid(),
      time: nowISO(),
      text: newFollowText.trim(),
      status: newFollowStatus
    }]);
    onUpdate({
      followUps: followUps,
      status: newFollowStatus
    });
    setNewFollowText('');
    toast('✓ 跟进记录已保存');
  };
  var _useState185 = useState(null),
    _useState186 = _slicedToArray(_useState185, 2),
    viewingImg = _useState186[0],
    setViewingImg = _useState186[1];
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-card paper p-6 w-full",
    style: {
      maxWidth: '780px'
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display text-lg font-bold"
  }, "\u8DDF\u8FDB & \u622A\u56FE"), readonly && /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: 'rgba(168,168,160,0.18)',
      color: 'var(--ink-3)',
      fontSize: '10px'
    }
  }, "\uD83D\uDD12 \u5386\u53F2\u53EA\u8BFB"), record.escalated && /*#__PURE__*/React.createElement("span", {
    className: "tag",
    style: {
      background: '#fef2f2',
      color: '#dc2626',
      fontSize: '10px',
      border: '1px solid #fca5a5'
    }
  }, "\uD83D\uDEA8 \u5DF2\u5347\u7EA7")), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-mono mt-0.5",
    style: {
      color: 'var(--ink-3)'
    }
  }, record.customer || '未填客户', " \xB7 ", record.category || '未选事项', " \xB7 ", record.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, !readonly && canEscalateToAdmin && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setEscalateLevel('admin');
      setEscalateModal(true);
    },
    title: "\u628A\u8FD9\u5C01\u68D8\u624B\u90AE\u4EF6\u4EA4\u7ED9\u4E3B\u7BA1\u5904\u7406",
    style: {
      padding: '6px 14px',
      background: '#fef2f2',
      color: '#dc2626',
      border: '1px solid #fca5a5',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.background = '#dc2626';
      e.currentTarget.style.color = 'white';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.background = '#fef2f2';
      e.currentTarget.style.color = '#dc2626';
    }
  }, "\uD83D\uDEA8 ", record.escalated ? '再次升级主管' : '升级主管'), !readonly && canEscalateToBoss && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setEscalateLevel('boss');
      setEscalateModal(true);
    },
    title: "\u4E3B\u7BA1\u4E5F\u641E\u4E0D\u5B9A?\u4EA4\u7ED9\u8001\u677F",
    style: {
      padding: '6px 14px',
      background: '#fef3c7',
      color: '#92400e',
      border: '1px solid #fcd34d',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.background = '#92400e';
      e.currentTarget.style.color = 'white';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.background = '#fef3c7';
      e.currentTarget.style.color = '#92400e';
    }
  }, "\uD83D\uDC51 ", record.escalateLevel === 'boss' ? '再次升级老板' : '升级老板'), /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    className: "w-5 h-5"
  })))), record.escalated && record.escalateReason && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      background: '#fef2f2',
      border: '1px solid #fca5a5',
      borderRadius: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#991b1b',
      marginBottom: 4
    }
  }, "\uD83D\uDEA8 \u5DF2\u5728 ", (_record$escalatedAt = record.escalatedAt) === null || _record$escalatedAt === void 0 ? void 0 : _record$escalatedAt.slice(0, 16).replace('T', ' '), " \u5347\u7EA7\u7ED9\u4E3B\u7BA1"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#7f1d1d',
      whiteSpace: 'pre-wrap'
    }
  }, record.escalateReason)), recordEvents && onAddEvent && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      background: '#f8fafc',
      border: '1px solid var(--line)',
      borderRadius: 10,
      marginBottom: 14
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
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, "\uD83D\uDCCB \u5173\u8054\u5DE5\u4F5C\u4E8B\u4EF6 (", recordEvents.aftersales.length + recordEvents.refills.length + recordEvents.refunds.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "\u70B9\u4E0B\u65B9\u4EFB\u4E00\u6309\u94AE\u5FEB\u901F\u6DFB\u52A0")), !readonly && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 6,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onAddEvent('aftersale');
    },
    style: {
      padding: '10px 0',
      background: '#fff7ed',
      color: '#ea580c',
      border: '1px solid #fdba74',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      transition: 'all .15s'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.background = '#ea580c';
      e.currentTarget.style.color = 'white';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.background = '#fff7ed';
      e.currentTarget.style.color = '#ea580c';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\uD83D\uDD27"), /*#__PURE__*/React.createElement("span", null, "\u552E\u540E")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onAddEvent('refill');
    },
    style: {
      padding: '10px 0',
      background: '#e0f2fe',
      color: '#0369a1',
      border: '1px solid #7dd3fc',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      transition: 'all .15s'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.background = '#0369a1';
      e.currentTarget.style.color = 'white';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.background = '#e0f2fe';
      e.currentTarget.style.color = '#0369a1';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\uD83D\uDCE6"), /*#__PURE__*/React.createElement("span", null, "\u8865\u4EF6")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onAddEvent('refund');
    },
    style: {
      padding: '10px 0',
      background: '#fef2f2',
      color: '#dc2626',
      border: '1px solid #fca5a5',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      transition: 'all .15s'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.background = '#dc2626';
      e.currentTarget.style.color = 'white';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.background = '#fef2f2';
      e.currentTarget.style.color = '#dc2626';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\uD83D\uDCB0"), /*#__PURE__*/React.createElement("span", null, "\u9000\u6B3E")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onAddEvent('chargeback');
    },
    style: {
      padding: '10px 0',
      background: '#fee2e2',
      color: '#991b1b',
      border: '1px solid #f87171',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 700,
      fontFamily: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      transition: 'all .15s'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.background = '#991b1b';
      e.currentTarget.style.color = 'white';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.background = '#fee2e2';
      e.currentTarget.style.color = '#991b1b';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\uD83D\uDEA8"), /*#__PURE__*/React.createElement("span", null, "\u62D2\u4ED8")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onAddEvent('custom');
    },
    style: {
      padding: '10px 0',
      background: '#f5f3ff',
      color: '#7c3aed',
      border: '1px solid #c4b5fd',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 700,
      fontFamily: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      transition: 'all .15s'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.background = '#7c3aed';
      e.currentTarget.style.color = 'white';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.background = '#f5f3ff';
      e.currentTarget.style.color = '#7c3aed';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\uD83C\uDFA8"), /*#__PURE__*/React.createElement("span", null, "\u5B9A\u5236")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onAddEvent('photo');
    },
    style: {
      padding: '10px 0',
      background: '#fdf2f8',
      color: '#be185d',
      border: '1px solid #fbcfe8',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 700,
      fontFamily: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3,
      transition: 'all .15s'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.background = '#be185d';
      e.currentTarget.style.color = 'white';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.background = '#fdf2f8';
      e.currentTarget.style.color = '#be185d';
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, "\uD83D\uDCF8"), /*#__PURE__*/React.createElement("span", null, "\u5B9E\u62CD"))), recordEvents.aftersales.length === 0 && recordEvents.refills.length === 0 && recordEvents.refunds.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      textAlign: 'center',
      padding: '8px 0'
    }
  }, "\u6682\u65E0\u4E8B\u4EF6 \xB7 \u70B9\u4E0A\u65B9\u6309\u94AE\u6DFB\u52A0\u552E\u540E / \u8865\u4EF6 / \u9000\u6B3E") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, recordEvents.aftersales.map(function (e) {
    var issue = ISSUE_TYPES.find(function (i) {
      return i.key === e.issue_type;
    });
    var status = AFTERSALE_STATUSES.find(function (s) {
      return s.key === e.status;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: 'a' + e.id,
      onClick: function onClick() {
        return onEditEvent && onEditEvent('aftersale', e);
      },
      style: {
        padding: '6px 10px',
        background: '#fff7ed',
        border: '1px solid #fdba74',
        borderRadius: 6,
        fontSize: 11,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: '#9a3412'
      }
    }, "\uD83D\uDD27 \u552E\u540E"), issue && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: 'var(--ink-2)'
      }
    }, issue.label), e.damaged_part && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: 'var(--ink-3)'
      }
    }, "\xB7 ", e.damaged_part), e.attachments && e.attachments.length > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: 'var(--ink-3)'
      }
    }, "\uD83D\uDCF7 ", e.attachments.length)), status && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 6px',
        borderRadius: 4,
        fontSize: 10,
        fontWeight: 600,
        color: status.color,
        background: status.bg
      }
    }, status.label), !readonly && onDeleteEvent && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(ev) {
        ev.stopPropagation();
        onDeleteEvent('aftersale', e);
      },
      title: "\u5220\u9664\u6B64\u5173\u8054\u4E8B\u4EF6",
      style: {
        flexShrink: 0,
        width: 22,
        height: 22,
        border: 'none',
        background: 'transparent',
        color: '#dc2626',
        cursor: 'pointer',
        fontSize: 15,
        fontWeight: 700,
        borderRadius: 4,
        lineHeight: 1
      }
    }, "\xD7"));
  }), recordEvents.refills.map(function (e) {
    var status = REFILL_STATUSES.find(function (s) {
      return s.key === e.status;
    });
    var itemCount = (e.items || []).length;
    return /*#__PURE__*/React.createElement("div", {
      key: 'rf' + e.id,
      onClick: function onClick() {
        return onEditEvent && onEditEvent('refill', e);
      },
      style: {
        padding: '6px 10px',
        background: '#e0f2fe',
        border: '1px solid #7dd3fc',
        borderRadius: 6,
        fontSize: 11,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: '#075985'
      }
    }, "\uD83D\uDCE6 \u8865\u4EF6"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: 'var(--ink-2)'
      }
    }, itemCount, " \u79CD\u914D\u4EF6"), e.supplier_name && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: 'var(--ink-3)'
      }
    }, "\xB7 ", e.supplier_name), e.attachments && e.attachments.length > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: 'var(--ink-3)'
      }
    }, "\uD83D\uDCF7 ", e.attachments.length)), status && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 6px',
        borderRadius: 4,
        fontSize: 10,
        fontWeight: 600,
        color: status.color,
        background: status.color + '15'
      }
    }, status.label), !readonly && onDeleteEvent && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(ev) {
        ev.stopPropagation();
        onDeleteEvent('refill', e);
      },
      title: "\u5220\u9664\u6B64\u5173\u8054\u4E8B\u4EF6",
      style: {
        flexShrink: 0,
        width: 22,
        height: 22,
        border: 'none',
        background: 'transparent',
        color: '#dc2626',
        cursor: 'pointer',
        fontSize: 15,
        fontWeight: 700,
        borderRadius: 4,
        lineHeight: 1
      }
    }, "\xD7"));
  }), recordEvents.refunds.map(function (e) {
    var type = REFUND_TYPES.find(function (t) {
      return t.key === e.refund_type;
    });
    var status = REFUND_STATUSES.find(function (s) {
      return s.key === e.status;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: 'rd' + e.id,
      onClick: function onClick() {
        return onEditEvent && onEditEvent('refund', e);
      },
      style: {
        padding: '6px 10px',
        background: '#fef2f2',
        border: '1px solid #fca5a5',
        borderRadius: 6,
        fontSize: 11,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: '#991b1b'
      }
    }, "\uD83D\uDCB0 \u9000\u6B3E"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: '#dc2626',
        fontWeight: 600
      }
    }, e.currency, " ", parseFloat(e.amount).toFixed(2)), type && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: 'var(--ink-2)'
      }
    }, "\xB7 ", type.label), e.attachments && e.attachments.length > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: 'var(--ink-3)'
      }
    }, "\uD83D\uDCF7 ", e.attachments.length)), status && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 6px',
        borderRadius: 4,
        fontSize: 10,
        fontWeight: 600,
        color: status.color,
        background: status.bg
      }
    }, status.label), !readonly && onDeleteEvent && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick(ev) {
        ev.stopPropagation();
        onDeleteEvent('refund', e);
      },
      title: "\u5220\u9664\u6B64\u5173\u8054\u4E8B\u4EF6",
      style: {
        flexShrink: 0,
        width: 22,
        height: 22,
        border: 'none',
        background: 'transparent',
        color: '#dc2626',
        cursor: 'pointer',
        fontSize: 15,
        fontWeight: 700,
        borderRadius: 4,
        lineHeight: 1
      }
    }, "\xD7"));
  }))), escalateModal && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setEscalateModal(false);
    },
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.4)',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 12,
      padding: 20,
      maxWidth: 480,
      width: '90%',
      boxShadow: '0 12px 32px rgba(0,0,0,.2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, escalateLevel === 'boss' ? '👑' : '🚨'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 16
    }
  }, "\u5347\u7EA7\u7ED9", escalateLevel === 'boss' ? '老板' : '主管'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, escalateLevel === 'boss' ? '主管也无法解决,把问题交给老板' : '把这封棘手邮件交给主管协助处理'))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, "\u7D27\u6025\u7A0B\u5EA6"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 12
    }
  }, [{
    key: 'normal',
    label: '一般',
    color: '#0ea5e9',
    bg: '#e0f2fe'
  }, {
    key: 'high',
    label: '紧急',
    color: '#ea580c',
    bg: '#fff7ed'
  }, {
    key: 'urgent',
    label: '非常紧急',
    color: '#dc2626',
    bg: '#fef2f2'
  }].map(function (opt) {
    return /*#__PURE__*/React.createElement("button", {
      key: opt.key,
      onClick: function onClick() {
        return setEscalateUrgency(opt.key);
      },
      style: {
        flex: 1,
        padding: '8px',
        borderRadius: 8,
        cursor: 'pointer',
        fontFamily: 'inherit',
        border: '1px solid ' + (escalateUrgency === opt.key ? opt.color : 'var(--line)'),
        background: escalateUrgency === opt.key ? opt.bg : 'white',
        color: escalateUrgency === opt.key ? opt.color : 'var(--ink-3)',
        fontWeight: escalateUrgency === opt.key ? 600 : 400,
        fontSize: 12
      }
    }, opt.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, "\u9700\u8981", escalateLevel === 'boss' ? '老板' : '主管', "\u534F\u52A9\u7684\u539F\u56E0 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#dc2626'
    }
  }, "*")), /*#__PURE__*/React.createElement("textarea", {
    value: escalateReason,
    onChange: function onChange(e) {
      return setEscalateReason(e.target.value);
    },
    placeholder: escalateLevel === 'boss' ? '比如:客户坚持要求公司层面赔偿、媒体投诉风险、需要法律咨询、需要老板审批超额方案...' : '比如：客户要求 100% 全款退款但订单已发出，超出我授权范围；或客户态度激烈要求投诉到老板...',
    style: {
      width: '100%',
      minHeight: 80,
      padding: 8,
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical',
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)',
      marginTop: 6,
      marginBottom: 12
    }
  }, "\uD83D\uDCA1 ", escalateLevel === 'boss' ? '老板' : '主管', "\u4F1A\u5728\u300C\u6C47\u62A5\u5DE5\u5355\u300Dtab \u770B\u5230\u8FD9\u6761\u5347\u7EA7\u5355\uFF0C\u9644\u5E26\u8FD9\u6761\u8DDF\u8FDB\u7684\u5B8C\u6574\u4E0A\u4E0B\u6587"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEscalateModal(false);
    },
    className: "btn-sec",
    style: {
      padding: '8px 16px'
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: submitEscalate,
    disabled: !escalateReason.trim(),
    style: {
      padding: '8px 20px',
      background: escalateLevel === 'boss' ? '#d97706' : '#dc2626',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 13,
      opacity: escalateReason.trim() ? 1 : 0.5
    }
  }, escalateLevel === 'boss' ? '👑 确认升级老板' : '🚨 确认升级')))), /*#__PURE__*/React.createElement("div", {
    className: "mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    className: "w-4 h-4",
    style: {
      color: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-display text-sm font-bold"
  }, "\u5BA2\u6237\u53CD\u9988\u622A\u56FE (", ((_record$screenshots = record.screenshots) === null || _record$screenshots === void 0 ? void 0 : _record$screenshots.length) || 0, ")")), !readonly && /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-mono",
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u652F\u6301: \u7C98\u8D34 / \u62D6\u62FD / \u70B9\u51FB\u4E0A\u4F20")), !readonly && /*#__PURE__*/React.createElement("div", {
    ref: dropZoneRef,
    className: "dropzone",
    onClick: function onClick() {
      var _fileInputRef$current3;
      return (_fileInputRef$current3 = fileInputRef.current) === null || _fileInputRef$current3 === void 0 ? void 0 : _fileInputRef$current3.click();
    },
    onDragOver: function onDragOver(e) {
      var _dropZoneRef$current2;
      e.preventDefault();
      (_dropZoneRef$current2 = dropZoneRef.current) === null || _dropZoneRef$current2 === void 0 || _dropZoneRef$current2.classList.add('dragover');
    },
    onDragLeave: function onDragLeave() {
      var _dropZoneRef$current3;
      return (_dropZoneRef$current3 = dropZoneRef.current) === null || _dropZoneRef$current3 === void 0 ? void 0 : _dropZoneRef$current3.classList.remove('dragover');
    },
    onDrop: handleDrop
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload",
    className: "w-6 h-6 mx-auto mb-1",
    style: {
      color: 'var(--ink-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold",
    style: {
      color: 'var(--ink-2)'
    }
  }, "\u70B9\u51FB\u4E0A\u4F20 \xB7 \u62D6\u62FD\u81F3\u6B64 \xB7 Ctrl+V \u7C98\u8D34"), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] mt-1",
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u652F\u6301 PNG/JPG\uFF0C\u5355\u5F20 \u22643MB"), /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      var _e$target$files;
      return handleFile((_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0]);
    }
  })), readonly && (!record.screenshots || record.screenshots.length === 0) && /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-center py-4",
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u65E0\u622A\u56FE"), ((_record$screenshots2 = record.screenshots) === null || _record$screenshots2 === void 0 ? void 0 : _record$screenshots2.length) > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex gap-2 flex-wrap"
  }, record.screenshots.map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: "relative group"
    }, /*#__PURE__*/React.createElement("img", {
      src: s.data,
      alt: s.name,
      className: "thumb",
      onClick: function onClick() {
        return setViewingImg(s.data);
      }
    }), !readonly && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeScreenshot(s.id);
      },
      className: "absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center opacity-0 group-hover:opacity-100",
      style: {
        background: 'var(--bad)',
        border: '1.5px solid white'
      }
    }, "\xD7"));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mb-5 rounded-xl p-3 border",
    style: {
      borderColor: record.isFeedback ? '#f59e0b' : 'var(--line)',
      background: record.isFeedback ? '#fffbeb' : 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-2 cursor-pointer",
    style: {
      userSelect: 'none'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    disabled: readonly,
    checked: !!record.isFeedback,
    onChange: function onChange(e) {
      return onUpdate({
        isFeedback: e.target.checked
      });
    },
    style: {
      width: 16,
      height: 16,
      cursor: 'pointer'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-display text-sm font-bold"
  }, "\uD83D\uDCE3 \u6807\u8BB0\u4E3A\u95EE\u9898\u53CD\u9988"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, "(\u4E3B\u7BA1\u6309\u6708\u6C47\u603B\u6BCF\u4EBA\u53CD\u9988\u7684\u95EE\u9898\u6570)")), (record.isFeedback || ((_record$feedbackShots = record.feedbackShots) === null || _record$feedbackShots === void 0 ? void 0 : _record$feedbackShots.length) > 0) && /*#__PURE__*/React.createElement("div", {
    className: "mt-3"
  }, !readonly && /*#__PURE__*/React.createElement("textarea", {
    value: record.feedbackNote || '',
    onChange: function onChange(e) {
      return onUpdate({
        feedbackNote: e.target.value
      });
    },
    placeholder: "\u95EE\u9898\u53CD\u9988\u8BF4\u660E,\u4F8B: \u5DE5\u5382\u9891\u7E41\u5EF6\u671F / \u67D0\u4EA7\u54C1\u591A\u6B21\u7834\u635F / \u7269\u6D41\u5546\u6295\u8BC9\u2026",
    rows: "2",
    style: {
      background: 'white',
      fontSize: 13,
      marginBottom: 8
    }
  }), readonly && record.feedbackNote && /*#__PURE__*/React.createElement("div", {
    className: "text-xs leading-relaxed mb-2",
    style: {
      color: 'var(--ink-2)'
    }
  }, record.feedbackNote), !readonly && /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '6px 12px',
      fontSize: 11,
      fontWeight: 600,
      border: '1px dashed #f59e0b',
      color: '#b45309',
      background: '#fffbeb',
      borderRadius: 8,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload",
    className: "w-3.5 h-3.5"
  }), " \u4E0A\u4F20\u95EE\u9898\u53CD\u9988\u622A\u56FE (\u22643MB)", /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      var _e$target$files2;
      handleFeedbackFile((_e$target$files2 = e.target.files) === null || _e$target$files2 === void 0 ? void 0 : _e$target$files2[0]);
      e.target.value = '';
    }
  })), ((_record$feedbackShots2 = record.feedbackShots) === null || _record$feedbackShots2 === void 0 ? void 0 : _record$feedbackShots2.length) > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mt-3 flex gap-2 flex-wrap"
  }, record.feedbackShots.map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      className: "relative group"
    }, /*#__PURE__*/React.createElement("img", {
      src: s.data,
      alt: s.name,
      className: "thumb",
      onClick: function onClick() {
        return setViewingImg(s.data);
      }
    }), !readonly && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeFeedbackShot(s.id);
      },
      className: "absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center opacity-0 group-hover:opacity-100",
      style: {
        background: 'var(--bad)',
        border: '1.5px solid white'
      }
    }, "\xD7"));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mb-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar",
    className: "w-4 h-4",
    style: {
      color: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-display text-sm font-bold"
  }, "\u8DDF\u8FDB\u65F6\u95F4\u7EBF (", ((_record$followUps = record.followUps) === null || _record$followUps === void 0 ? void 0 : _record$followUps.length) || 0, ")")), ((_record$followUps2 = record.followUps) === null || _record$followUps2 === void 0 ? void 0 : _record$followUps2.length) > 0 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 mb-3 max-h-60 overflow-y-auto scrollbar-thin"
  }, record.followUps.map(function (f) {
    var _STATUSES$find3;
    return /*#__PURE__*/React.createElement("div", {
      key: f.id,
      className: "rounded-lg p-3 border",
      style: {
        borderColor: 'var(--line)',
        background: 'var(--bg)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "tag tag-".concat(f.status === 'resolved' ? 'good' : f.status === 'waiting' ? 'info' : 'warn')
    }, ((_STATUSES$find3 = STATUSES.find(function (s) {
      return s.key === f.status;
    })) === null || _STATUSES$find3 === void 0 ? void 0 : _STATUSES$find3.label) || f.status), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-mono",
      style: {
        color: 'var(--ink-4)'
      }
    }, new Date(f.time).toLocaleString('zh-CN', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }))), /*#__PURE__*/React.createElement("div", {
      className: "text-xs leading-relaxed"
    }, f.text));
  })), !readonly && /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3 border-2",
    style: {
      borderColor: 'var(--accent-mid)',
      background: 'var(--accent-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-bold uppercase tracking-wider mb-1.5",
    style: {
      color: 'var(--accent)'
    }
  }, "+ \u6DFB\u52A0\u65B0\u8DDF\u8FDB"), /*#__PURE__*/React.createElement("textarea", {
    value: newFollowText,
    onChange: function onChange(e) {
      return setNewFollowText(e.target.value);
    },
    placeholder: "\u4ECA\u5929\u8054\u7CFB\u5BA2\u6237\u7684\u8FDB\u5C55\uFF0C\u4F8B: \u5DF2\u8054\u7CFB\u4F9B\u5E94\u5546\u7B49\u56DE\u590D / \u5BA2\u6237\u63D0\u4F9B\u4E86\u7167\u7247...",
    rows: "2",
    style: {
      background: 'white'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex items-center gap-2 flex-wrap"
  }, /*#__PURE__*/React.createElement("select", {
    value: newFollowStatus,
    onChange: function onChange(e) {
      return setNewFollowStatus(e.target.value);
    },
    style: {
      width: 'auto',
      padding: '4px 8px',
      fontSize: '11px'
    }
  }, STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.key,
      value: s.key
    }, s.label);
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: addFollowUp,
    disabled: !newFollowText.trim()
  }, "\u4FDD\u5B58\u8DDF\u8FDB")))), /*#__PURE__*/React.createElement("div", {
    className: "pt-4 border-t flex items-center gap-3",
    style: {
      borderColor: 'var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold",
    style: {
      color: 'var(--ink-2)'
    }
  }, "\u4E0B\u6B21\u8DDF\u8FDB\u65E5\u671F:"), /*#__PURE__*/React.createElement("input", {
    disabled: readonly,
    type: "date",
    value: record.nextFollowUp || "",
    onChange: function onChange(e) {
      return onUpdate({
        nextFollowUp: e.target.value
      });
    },
    style: {
      width: '160px'
    }
  }), record.nextFollowUp && !readonly && /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost text-[11px]",
    onClick: function onClick() {
      return onUpdate({
        nextFollowUp: ''
      });
    }
  }, "\u6E05\u9664"), readonly && /*#__PURE__*/React.createElement("span", {
    className: "text-[11px]",
    style: {
      color: 'var(--ink-4)'
    }
  }, "(\u53EA\u8BFB)")), viewingImg && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      border: '1px solid var(--line)',
      borderRadius: 10,
      overflow: 'hidden',
      background: '#111'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '6px 10px',
      background: '#1c1c1e'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#d1d5db',
      fontSize: 11
    }
  }, "\u56FE\u7247\u9884\u89C8"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return wsOpenImg(viewingImg);
    },
    style: {
      background: 'none',
      border: 'none',
      fontSize: 11,
      color: '#7dd3fc',
      cursor: 'pointer',
      padding: 0
    }
  }, "\u2197 \u65B0\u6807\u7B7E\u770B\u539F\u56FE"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setViewingImg(null);
    },
    style: {
      padding: '2px 9px',
      background: 'rgba(255,255,255,.15)',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11
    }
  }, "\u6536\u8D77 \u25B2"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: viewingImg,
    alt: "",
    style: {
      maxWidth: '100%',
      maxHeight: 380,
      objectFit: 'contain',
      borderRadius: 6
    }
  }))))), document.body);
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix18: SiteDailyBreakdown — 邮件按 (员工 × 日期 × 网站) 三维统计
// 主管想知道每人每天回复了哪些网站的多少封邮件
// ════════════════════════════════════════════════════════════════════
var SiteDailyBreakdown = function SiteDailyBreakdown(_ref38) {
  var scope = _ref38.scope,
    selectedEmpId = _ref38.selectedEmpId,
    employees = _ref38.employees,
    live = _ref38.live,
    today = _ref38.today,
    last7Start = _ref38.last7Start,
    monthStart = _ref38.monthStart;
  var _useState187 = useState('7d'),
    _useState188 = _slicedToArray(_useState187, 2),
    view = _useState188[0],
    setView = _useState188[1]; // '7d' | 'month'
  var _useState189 = useState(false),
    _useState190 = _slicedToArray(_useState189, 2),
    showAll = _useState190[0],
    setShowAll = _useState190[1];
  var startDate = view === '7d' ? last7Start : monthStart;

  // 选定的员工列表
  var empList = useMemo(function () {
    if (scope === 'one' && selectedEmpId) return employees.filter(function (e) {
      return e.id === selectedEmpId;
    });
    if (scope === 'me') {
      // 'me' 模式 - 只看当前用户; 但要让主管也能用此组件预览自己
      var me = employees.find(function (e) {
        return e.id === selectedEmpId;
      }) || employees[0];
      return me ? [me] : [];
    }
    // team — 只列有数据的员工
    return employees.filter(function (e) {
      return live.some(function (r) {
        return r.ownerId === e.id && r.date >= startDate;
      });
    });
  }, [scope, selectedEmpId, employees, live, startDate]);

  // 日期范围 - 按天展开
  var days = useMemo(function () {
    var arr = [];
    var start = new Date(startDate);
    var end = new Date(today);
    for (var d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      var iso = d.toISOString().slice(0, 10);
      arr.push({
        iso: iso,
        label: view === '7d' ? iso.slice(5).replace('-', '/') : iso.slice(8),
        // 月模式只显示日号节省空间
        weekday: ['日', '一', '二', '三', '四', '五', '六'][d.getDay()]
      });
    }
    return arr;
  }, [startDate, today, view]);

  // 每员工 × 每天 × 网站 聚合
  var grid = useMemo(function () {
    var m = {};
    empList.forEach(function (e) {
      m[e.id] = {
        emp: e,
        byDay: {},
        sitesTotal: {},
        total: 0
      };
      days.forEach(function (d) {
        m[e.id].byDay[d.iso] = {
          total: 0,
          bySite: {}
        };
      });
    });
    live.forEach(function (r) {
      if (!m[r.ownerId]) return;
      if (r.date < startDate || r.date > today) return;
      var cell = m[r.ownerId].byDay[r.date];
      if (!cell) return;
      var site = (r.site || '').trim() || window.__siteFromOrderRef && window.__siteFromOrderRef(r.orderRef) || '?';
      cell.total++;
      cell.bySite[site] = (cell.bySite[site] || 0) + 1;
      m[r.ownerId].sitesTotal[site] = (m[r.ownerId].sitesTotal[site] || 0) + 1;
      m[r.ownerId].total++;
    });
    return Object.values(m).sort(function (a, b) {
      return b.total - a.total;
    });
  }, [empList, days, live, startDate, today]);
  if (empList.length === 0) return null;

  // 计算热力图色彩 - 单格的颜色深浅取决于本天数量
  var maxPerCell = Math.max.apply(Math, _toConsumableArray(grid.flatMap(function (r) {
    return days.map(function (d) {
      return r.byDay[d.iso].total;
    });
  })).concat([1]));
  var cellColor = function cellColor(n) {
    if (n === 0) return 'transparent';
    var intensity = Math.min(1, 0.15 + n / maxPerCell * 0.85);
    return "rgba(14, 165, 233, ".concat(intensity, ")");
  };

  // 站点 chip 颜色
  var siteColor = function siteColor(site) {
    var palette = ['#dbeafe', '#fce7f3', '#fef3c7', '#dcfce7', '#f3e8ff', '#fee2e2', '#e0f2fe', '#f0fdf4'];
    var hash = site.split('').reduce(function (s, c) {
      return s + c.charCodeAt(0);
    }, 0);
    return palette[hash % palette.length];
  };
  var shownGrid = showAll ? grid : grid.slice(0, 8);
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 border-b",
    style: {
      borderColor: 'var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display text-sm font-bold"
  }, "\uD83D\uDCCA \u90AE\u4EF6\u5206\u5E03:\u5458\u5DE5 \xD7 \u65E5\u671F \xD7 \u7F51\u7AD9"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u989C\u8272\u6DF1\u6D45=\u90AE\u4EF6\u6570\u91CF \xB7 \u6BCF\u683C\u76F4\u63A5\u663E\u793A\u7F51\u7AD9\u5206\u5E03")), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-1"
  }, [{
    k: '7d',
    label: '近 7 天'
  }, {
    k: 'month',
    label: '本月'
  }].map(function (t) {
    var sel = view === t.k;
    return /*#__PURE__*/React.createElement("button", {
      key: t.k,
      onClick: function onClick() {
        return setView(t.k);
      },
      style: {
        padding: '4px 11px',
        fontSize: 11,
        borderRadius: 6,
        border: '1px solid ' + (sel ? '#0071e3' : 'var(--line)'),
        background: sel ? '#0071e3' : 'white',
        color: sel ? 'white' : 'var(--ink-2)',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: sel ? 600 : 500
      }
    }, t.label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      padding: '12px 14px'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      fontSize: 11,
      minWidth: '100%'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 8px',
      textAlign: 'left',
      position: 'sticky',
      left: 0,
      background: 'white',
      zIndex: 2,
      fontWeight: 600,
      color: 'var(--ink-3)',
      minWidth: 120,
      borderBottom: '1px solid var(--line)'
    }
  }, "\u5458\u5DE5"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 8px',
      textAlign: 'left',
      background: 'white',
      fontWeight: 600,
      color: 'var(--ink-3)',
      minWidth: 130,
      borderBottom: '1px solid var(--line)'
    }
  }, "\u8D1F\u8D23\u7F51\u7AD9"), days.map(function (d) {
    return /*#__PURE__*/React.createElement("th", {
      key: d.iso,
      style: {
        padding: '6px 4px',
        textAlign: 'center',
        fontWeight: 600,
        color: 'var(--ink-3)',
        whiteSpace: 'nowrap',
        minWidth: view === '7d' ? 50 : 30,
        borderBottom: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("div", null, d.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'var(--ink-4)',
        fontWeight: 400
      }
    }, "\u5468", d.weekday));
  }), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 8px',
      textAlign: 'right',
      fontWeight: 700,
      color: '#0071e3',
      borderBottom: '1px solid var(--line)',
      minWidth: 50
    }
  }, "\u5408\u8BA1"))), /*#__PURE__*/React.createElement("tbody", null, shownGrid.map(function (row, idx) {
    var sites = Object.entries(row.sitesTotal).sort(function (a, b) {
      return b[1] - a[1];
    });
    return /*#__PURE__*/React.createElement("tr", {
      key: row.emp.id,
      style: {
        background: idx % 2 ? '#fafafa' : 'white'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 8px',
        position: 'sticky',
        left: 0,
        background: idx % 2 ? '#fafafa' : 'white',
        zIndex: 1,
        borderBottom: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, row.emp.name), row.emp.alias && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'var(--ink-3)'
      }
    }, row.emp.alias)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 8px',
        borderBottom: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3
      }
    }, sites.slice(0, 4).map(function (_ref39) {
      var _ref40 = _slicedToArray(_ref39, 2),
        site = _ref40[0],
        count = _ref40[1];
      return /*#__PURE__*/React.createElement("span", {
        key: site,
        style: {
          padding: '1px 6px',
          background: siteColor(site),
          borderRadius: 8,
          fontSize: 9,
          fontWeight: 600,
          color: '#1a1a17'
        },
        title: "".concat(site, ": ").concat(count, " \u5C01")
      }, site, " ", count);
    }), sites.length > 4 && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 5px',
        color: 'var(--ink-3)',
        fontSize: 9
      }
    }, "+", sites.length - 4))), days.map(function (d) {
      var cell = row.byDay[d.iso];
      var tip = cell.total === 0 ? '0 封' : Object.entries(cell.bySite).sort(function (a, b) {
        return b[1] - a[1];
      }).map(function (_ref41) {
        var _ref42 = _slicedToArray(_ref41, 2),
          s = _ref42[0],
          c = _ref42[1];
        return "".concat(s, ": ").concat(c);
      }).join(' · ');
      return /*#__PURE__*/React.createElement("td", {
        key: d.iso,
        style: {
          padding: '4px 4px',
          textAlign: 'center',
          borderBottom: '1px solid var(--line)'
        },
        title: "".concat(d.iso, " \u5468").concat(d.weekday, "\n").concat(tip)
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '4px 0',
          borderRadius: 4,
          background: cellColor(cell.total),
          fontWeight: cell.total > 0 ? 600 : 400,
          color: cell.total > maxPerCell * 0.6 ? 'white' : 'var(--ink)'
        }
      }, cell.total || '-'), cell.total > 0 && /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          alignItems: 'center'
        }
      }, Object.entries(cell.bySite).sort(function (a, b) {
        return b[1] - a[1];
      }).map(function (_ref43) {
        var _ref44 = _slicedToArray(_ref43, 2),
          s = _ref44[0],
          c = _ref44[1];
        return /*#__PURE__*/React.createElement("span", {
          key: s,
          style: {
            fontSize: 8,
            lineHeight: 1.25,
            color: 'var(--ink-2)',
            whiteSpace: 'nowrap'
          }
        }, s, " ", c);
      })));
    }), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 8px',
        textAlign: 'right',
        fontWeight: 700,
        color: '#0071e3',
        borderBottom: '1px solid var(--line)'
      }
    }, row.total));
  }))), grid.length > 8 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowAll(function (v) {
        return !v;
      });
    },
    className: "btn-sec",
    style: {
      padding: '4px 12px',
      fontSize: 11
    }
  }, showAll ? "\u6536\u8D77 (\u663E\u793A\u524D 8 \u540D)" : "\u5C55\u5F00\u5269\u4F59 ".concat(grid.length - 8, " \u4EBA \u25BC")))));
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix52: 客户档案 360° Modal
// 输入一个客户邮箱 → 跨模块查询:跟进 / 拒付 / 售后 / 评价 / 线下单
// 帮客服一眼看清这个客户在系统里的完整历史
// ════════════════════════════════════════════════════════════════════
