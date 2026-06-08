// ====== cs-system — 03-dashboard-trash ======
// 版本 2026.06.05-fix179
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
// ====== cs-system — 03-dashboard-trash ======
// 版本 2026.06.05-fix179
// 预编译切片
//

var Customer360Modal = function Customer360Modal(_ref) {
  var email = _ref.email,
    records = _ref.records,
    onClose = _ref.onClose,
    onOpenRecord = _ref.onOpenRecord;
  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    chargebacks = _useState4[0],
    setChargebacks = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    events = _useState6[0],
    setEvents = _useState6[1]; // 售后 / 补发 / 退款
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    reviews = _useState8[0],
    setReviews = _useState8[1];
  var _useState9 = useState([]),
    _useState0 = _slicedToArray(_useState9, 2),
    offlineOrders = _useState0[0],
    setOfflineOrders = _useState0[1];
  var _useState1 = useState([]),
    _useState10 = _slicedToArray(_useState1, 2),
    customInq = _useState10[0],
    setCustomInq = _useState10[1];
  var emailNorm = (email || '').trim().toLowerCase();

  // 同邮箱的跟进记录(从 props 取,已经在内存里)
  var myRecords = records.filter(function (r) {
    return (r.customer || '').trim().toLowerCase() === emailNorm;
  });

  // 跨模块查询
  useEffect(function () {
    if (!emailNorm) return;
    var canceled = false;
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var queries, _queries$map, _queries$map2, cb, ev, rv, oo, ci, matchEmail, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setLoading(true);
            _context.p = 1;
            _context.n = 2;
            return Promise.allSettled([CLOUD.list('workspace_chargebacks', {
              limit: 200
            }), CLOUD.list('workspace_events', {
              limit: 200
            }), CLOUD.list('workspace_reviews', {
              limit: 200
            }), CLOUD.list('workspace_offline_orders', {
              limit: 200
            }), CLOUD.list('custom_inquiries', {
              limit: 100
            })]);
          case 2:
            queries = _context.v;
            if (!canceled) {
              _context.n = 3;
              break;
            }
            return _context.a(2);
          case 3:
            _queries$map = queries.map(function (q) {
              return q.status === 'fulfilled' && q.value ? q.value : [];
            }), _queries$map2 = _slicedToArray(_queries$map, 5), cb = _queries$map2[0], ev = _queries$map2[1], rv = _queries$map2[2], oo = _queries$map2[3], ci = _queries$map2[4];
            matchEmail = function matchEmail(x) {
              return (x.customer_email || x.customerEmail || '').trim().toLowerCase() === emailNorm;
            };
            setChargebacks(cb.filter(matchEmail));
            setEvents(ev.filter(matchEmail));
            setReviews(rv.filter(matchEmail));
            setOfflineOrders(oo.filter(matchEmail));
            setCustomInq(ci.filter(matchEmail));
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error('[Customer360] 查询失败', _t);
          case 5:
            setLoading(false);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[1, 4]]);
    }))();
    return function () {
      canceled = true;
    };
  }, [emailNorm]);
  var fmtDate = function fmtDate(d) {
    if (!d) return '';
    var t = typeof d === 'number' ? d : new Date(d).getTime();
    if (!t) return '';
    return new Date(t).toLocaleDateString('zh-CN');
  };
  var totalCount = myRecords.length + chargebacks.length + events.length + reviews.length + offlineOrders.length + customInq.length;
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
      maxWidth: 760,
      width: '100%',
      maxHeight: '90vh',
      overflow: 'auto',
      padding: '24px 28px',
      boxShadow: '0 20px 60px rgba(0,0,0,.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      letterSpacing: '.5px',
      textTransform: 'uppercase',
      marginBottom: 3
    }
  }, "\u5BA2\u6237\u6863\u6848 360\xB0"), /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: '-.022em',
      wordBreak: 'break-all'
    }
  }, "\uD83D\uDCE7 ", email || '(未填邮箱)'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, loading ? '⏳ 跨模块查询中…' : "\u5171 ".concat(totalCount, " \u6761\u5386\u53F2\u8BB0\u5F55"))), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      fontSize: 22,
      cursor: 'pointer',
      color: 'var(--ink-3)'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement(Section360, {
    icon: "\uD83D\uDCDE",
    title: "\u5BA2\u670D\u8DDF\u8FDB",
    count: myRecords.length,
    items: myRecords.map(function (r) {
      var _r$followups;
      return {
        id: r.id,
        primary: "".concat(r.site || '', " \xB7 ").concat((STATUSES.find(function (s) {
          return s.key === r.status;
        }) || {}).label || r.status),
        secondary: r.summary || ((_r$followups = r.followups) === null || _r$followups === void 0 || (_r$followups = _r$followups[0]) === null || _r$followups === void 0 ? void 0 : _r$followups.note) || '',
        date: r.date || r.created_at,
        onClick: onOpenRecord ? function () {
          onOpenRecord(r.id);
          onClose();
        } : null
      };
    })
  }), /*#__PURE__*/React.createElement(Section360, {
    icon: "\uD83D\uDEA8",
    title: "\u62D2\u4ED8/Dispute",
    count: chargebacks.length,
    items: chargebacks.map(function (c) {
      return {
        id: c.id,
        primary: "\u8BA2\u5355 ".concat(c.order_no, " \xB7 ").concat(c.currency || 'USD', " ").concat(c.amount || 0),
        secondary: "".concat(c.platform || '', " \xB7 ").concat(c.status || '').concat(c.reason_detail ? ' · ' + c.reason_detail.slice(0, 40) : ''),
        date: c.created_at
      };
    })
  }), /*#__PURE__*/React.createElement(Section360, {
    icon: "\uD83D\uDCCB",
    title: "\u552E\u540E/\u8865\u53D1/\u9000\u6B3E",
    count: events.length,
    items: events.map(function (e) {
      return {
        id: e.id,
        primary: "".concat(e.type || '事件', " \xB7 \u8BA2\u5355 ").concat(e.order_no || '?'),
        secondary: "".concat(e.status || '').concat(e.notes ? ' · ' + e.notes.slice(0, 40) : ''),
        date: e.created_at
      };
    })
  }), /*#__PURE__*/React.createElement(Section360, {
    icon: "\uD83D\uDCB3",
    title: "\u7EBF\u4E0B\u5355",
    count: offlineOrders.length,
    items: offlineOrders.map(function (o) {
      return {
        id: o.id,
        primary: "".concat(o.site || '', " \xB7 ").concat(o.payment_method || '', " \xB7 ").concat(o.currency || 'USD', " ").concat(o.amount || 0),
        secondary: "\u8BA2\u5355 ".concat(o.order_no || '?', " \u2192 ").concat(o.ship_to_country || ''),
        date: o.created_at
      };
    })
  }), /*#__PURE__*/React.createElement(Section360, {
    icon: "\uD83C\uDFA8",
    title: "\u5B9A\u5236\u54A8\u8BE2",
    count: customInq.length,
    items: customInq.map(function (c) {
      var _c$requirement;
      return {
        id: c.id,
        primary: ((_c$requirement = c.requirement) === null || _c$requirement === void 0 ? void 0 : _c$requirement.slice(0, 60)) || '(无需求描述)',
        secondary: "".concat(c.designer_name ? '设计:' + c.designer_name : '', " ").concat(c.quote_no ? '· 报价 ' + c.quote_no : ''),
        date: c.created_at
      };
    })
  }), /*#__PURE__*/React.createElement(Section360, {
    icon: "\u2B50",
    title: "\u4EA7\u54C1\u8BC4\u4EF7",
    count: reviews.length,
    items: reviews.map(function (r) {
      return {
        id: r.id,
        primary: "".concat(r.product_name || '未填产品', " \xB7 ").concat('⭐'.repeat(r.rating || 0)),
        secondary: (r.review_text || '').slice(0, 60),
        date: r.created_at
      };
    })
  }), totalCount === 0 && !loading && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '32px 20px',
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, "\u6CA1\u6709\u627E\u5230\u8FD9\u4E2A\u90AE\u7BB1\u7684\u5176\u4ED6\u5386\u53F2\u8BB0\u5F55 \u2014 \u662F\u65B0\u5BA2\u6237"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      marginTop: 18,
      paddingTop: 14,
      fontSize: 11,
      color: 'var(--ink-4)',
      lineHeight: 1.6
    }
  }, "\uD83D\uDCA1 \u8FD9\u4E2A\u89C6\u56FE\u53EA\u5C55\u793A**\u4E91\u7AEF**\u7684\u6570\u636E\u3002\u5982\u679C\u4F60\u770B\u5230 \"0 \u6761\" \u4F46\u5B9E\u9645\u6709\u5386\u53F2,\u53EF\u80FD\u662F\u4E91\u540C\u6B65\u672A\u542F\u7528\u6216\u6570\u636E\u672A\u540C\u6B65\u3002"))), document.body);
};

// 一个分区(可折叠卡片样式)
var Section360 = function Section360(_ref3) {
  var icon = _ref3.icon,
    title = _ref3.title,
    count = _ref3.count,
    items = _ref3.items;
  var _useState11 = useState(count > 0),
    _useState12 = _slicedToArray(_useState11, 2),
    open = _useState12[0],
    setOpen = _useState12[1]; // 有内容默认展开
  if (count === 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 12px',
        marginBottom: 6,
        background: 'var(--bg-elevated)',
        borderRadius: 8,
        fontSize: 12,
        color: 'var(--ink-4)',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", null, icon), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, title), /*#__PURE__*/React.createElement("span", null, "0"));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10,
      border: '1px solid var(--line)',
      borderRadius: 10,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setOpen(!open);
    },
    style: {
      padding: '10px 14px',
      background: 'var(--bg-soft)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'var(--ink)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--accent)',
      color: 'white',
      fontSize: 11,
      fontWeight: 700
    }
  }, count), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      fontSize: 12,
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform .15s'
    }
  }, "\u25BC")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)'
    }
  }, items.map(function (it, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: it.id || i,
      onClick: it.onClick,
      style: {
        padding: '10px 14px',
        borderTop: i > 0 ? '1px solid var(--line-soft)' : 'none',
        cursor: it.onClick ? 'pointer' : 'default',
        transition: 'background .15s'
      },
      onMouseEnter: function onMouseEnter(e) {
        if (it.onClick) e.currentTarget.style.background = 'var(--bg-elevated)';
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.background = '';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        fontSize: 13,
        color: 'var(--ink)',
        fontWeight: 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, it.primary), it.date && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-4)',
        flexShrink: 0
      }
    }, new Date(it.date).toLocaleDateString('zh-CN'))), it.secondary && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-3)',
        lineHeight: 1.45,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical'
      }
    }, it.secondary));
  })));
};

// ============================================================
// 数据看板 - 当天/7天/本月
// ============================================================
// ============================================================
// 📊 数据看板 (fix78 重做) — 主管深度视角
// ============================================================
// 时间维度:今日/本周/本月/本季/本年/自定义
// 4 层视图:概览卡 + 分布图 + 未解决清单 + 4 独立模块整合
// ============================================================

var DashboardModule = function DashboardModule(_ref4) {
  var user = _ref4.user,
    employees = _ref4.employees,
    records = _ref4.records;
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var _useState13 = useState('today'),
    _useState14 = _slicedToArray(_useState13, 2),
    timeRange = _useState14[0],
    setTimeRange = _useState14[1];
  var _useState15 = useState(''),
    _useState16 = _slicedToArray(_useState15, 2),
    customStart = _useState16[0],
    setCustomStart = _useState16[1];
  var _useState17 = useState(''),
    _useState18 = _slicedToArray(_useState17, 2),
    customEnd = _useState18[0],
    setCustomEnd = _useState18[1];
  var _useState19 = useState(isAdmin ? 'team' : 'me'),
    _useState20 = _slicedToArray(_useState19, 2),
    scope = _useState20[0],
    setScope = _useState20[1];
  var _useState21 = useState(user.id),
    _useState22 = _slicedToArray(_useState21, 2),
    selectedEmpId = _useState22[0],
    setSelectedEmpId = _useState22[1];
  var _useState23 = useState(null),
    _useState24 = _slicedToArray(_useState23, 2),
    expandedCategory = _useState24[0],
    setExpandedCategory = _useState24[1];
  var _useState25 = useState(null),
    _useState26 = _slicedToArray(_useState25, 2),
    expandedSite = _useState26[0],
    setExpandedSite = _useState26[1];
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    expandedEmp = _useState28[0],
    setExpandedEmp = _useState28[1];
  var _useState29 = useState({
      owner: 'all',
      cat: 'all',
      site: 'all',
      status: 'all',
      overdueOnly: false,
      noFollowOnly: false
    }),
    _useState30 = _slicedToArray(_useState29, 2),
    unresolvedFilter = _useState30[0],
    setUnresolvedFilter = _useState30[1];
  var _useState31 = useState(null),
    _useState32 = _slicedToArray(_useState31, 2),
    detailRecord = _useState32[0],
    setDetailRecord = _useState32[1];
  var _useState33 = useState(null),
    _useState34 = _slicedToArray(_useState33, 2),
    kpiDetail = _useState34[0],
    setKpiDetail = _useState34[1]; // 🆕 fix80: KPI 卡详情弹窗

  // ========== 独立模块数据加载 ==========
  var _useState35 = useState({
      chargebacks: [],
      offlineOrders: [],
      customInquiries: [],
      photoVerif: []
    }),
    _useState36 = _slicedToArray(_useState35, 2),
    extra = _useState36[0],
    setExtra = _useState36[1];
  var _useState37 = useState(true),
    _useState38 = _slicedToArray(_useState37, 2),
    extraLoading = _useState38[0],
    setExtraLoading = _useState38[1];
  useEffect(function () {
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _yield$Promise$all, _yield$Promise$all2, cb, oo, ci, pv, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            setExtraLoading(true);
            _context2.p = 1;
            _context2.n = 2;
            return Promise.all([CLOUD.list('chargebacks', {
              limit: 1000
            }), CLOUD.list('offline_orders', {
              limit: 1000
            }), CLOUD.list('custom_inquiries', {
              limit: 1000
            }), CLOUD.list('photo_verifications', {
              limit: 1000
            })]);
          case 2:
            _yield$Promise$all = _context2.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 4);
            cb = _yield$Promise$all2[0];
            oo = _yield$Promise$all2[1];
            ci = _yield$Promise$all2[2];
            pv = _yield$Promise$all2[3];
            setExtra({
              chargebacks: (cb || []).filter(function (x) {
                return !x.deleted;
              }),
              offlineOrders: (oo || []).filter(function (x) {
                return !x.deleted;
              }),
              customInquiries: (ci || []).filter(function (x) {
                return !x.deleted;
              }),
              photoVerif: (pv || []).filter(function (x) {
                return !x.deleted;
              })
            });
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.error('[Dashboard] 独立模块加载失败:', _t2);
          case 4:
            setExtraLoading(false);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }))();
  }, []);

  // ========== 时间范围解析 ==========
  var today = todayISO();
  var timeMeta = useMemo(function () {
    var d = new Date(today);
    var start = today,
      end = today,
      label = '今日',
      prevStart,
      prevEnd;
    if (timeRange === 'today') {
      start = today;
      end = today;
      label = '今日';
      prevStart = addDays(today, -1);
      prevEnd = addDays(today, -1);
    } else if (timeRange === 'week') {
      var dow = d.getDay() === 0 ? 6 : d.getDay() - 1;
      start = addDays(today, -dow);
      end = today;
      label = "\u672C\u5468 (".concat(start.slice(5), " \u2192 ").concat(end.slice(5), ")");
      prevStart = addDays(start, -7);
      prevEnd = addDays(end, -7);
    } else if (timeRange === 'month') {
      start = today.slice(0, 8) + '01';
      end = today;
      label = "".concat(today.slice(0, 7));
      var lm = new Date(start + 'T00:00:00');
      lm.setMonth(lm.getMonth() - 1);
      prevStart = lm.toISOString().slice(0, 10);
      lm.setMonth(lm.getMonth() + 1);
      lm.setDate(0);
      prevEnd = lm.toISOString().slice(0, 10);
    } else if (timeRange === 'quarter') {
      var m = d.getMonth();
      var qStart = Math.floor(m / 3) * 3;
      start = "".concat(today.slice(0, 4), "-").concat(String(qStart + 1).padStart(2, '0'), "-01");
      end = today;
      label = "".concat(today.slice(0, 4), " Q").concat(Math.floor(m / 3) + 1);
      var py = qStart === 0 ? d.getFullYear() - 1 : d.getFullYear();
      var pm = qStart === 0 ? 9 : qStart - 3;
      prevStart = "".concat(py, "-").concat(String(pm + 1).padStart(2, '0'), "-01");
      var pe = new Date(py, pm + 3, 0);
      prevEnd = "".concat(pe.getFullYear(), "-").concat(String(pe.getMonth() + 1).padStart(2, '0'), "-").concat(String(pe.getDate()).padStart(2, '0'));
    } else if (timeRange === 'year') {
      start = today.slice(0, 4) + '-01-01';
      end = today;
      label = "".concat(today.slice(0, 4), " \u5E74");
      var _py = parseInt(today.slice(0, 4)) - 1;
      prevStart = "".concat(_py, "-01-01");
      prevEnd = "".concat(_py, "-12-31");
    } else if (timeRange === 'custom') {
      start = customStart || today;
      end = customEnd || today;
      label = customStart && customEnd ? "".concat(customStart, " \u2192 ").concat(customEnd) : '请选范围';
      if (customStart && customEnd) {
        var ds = new Date(start + 'T00:00:00'),
          de = new Date(end + 'T00:00:00');
        var days = Math.round((de - ds) / 86400000) + 1;
        prevStart = addDays(start, -days);
        prevEnd = addDays(end, -days);
      }
    }
    return {
      startDate: start,
      endDate: end,
      rangeLabel: label,
      prevStartDate: prevStart,
      prevEndDate: prevEnd
    };
  }, [timeRange, customStart, customEnd, today]);
  var startDate = timeMeta.startDate,
    endDate = timeMeta.endDate,
    rangeLabel = timeMeta.rangeLabel,
    prevStartDate = timeMeta.prevStartDate,
    prevEndDate = timeMeta.prevEndDate;

  // ========== 客服 records 过滤 ==========
  var liveRecords = useMemo(function () {
    return records.filter(function (r) {
      return !r.deleted;
    });
  }, [records]);
  var scopedRecords = useMemo(function () {
    if (scope === 'me') return liveRecords.filter(function (r) {
      return r.ownerId === user.id;
    });
    if (scope === 'one' && selectedEmpId) return liveRecords.filter(function (r) {
      return r.ownerId === selectedEmpId;
    });
    return liveRecords;
  }, [scope, selectedEmpId, liveRecords, user.id]);
  var inRange = function inRange(date) {
    return date && date >= startDate && date <= endDate;
  };
  var inPrevRange = function inPrevRange(date) {
    return date && prevStartDate && prevEndDate && date >= prevStartDate && date <= prevEndDate;
  };
  var periodRecords = useMemo(function () {
    return scopedRecords.filter(function (r) {
      return inRange(r.date);
    });
  }, [scopedRecords, startDate, endDate]);
  var prevPeriodRecords = useMemo(function () {
    return scopedRecords.filter(function (r) {
      return inPrevRange(r.date);
    });
  }, [scopedRecords, prevStartDate, prevEndDate]);

  // ========== 核心指标 ==========
  var UNRESOLVED_STATUSES = ['pending', 'following', 'waiting'];
  var totalCount = periodRecords.length;
  var prevTotalCount = prevPeriodRecords.length;
  var diffPct = prevTotalCount > 0 ? Math.round((totalCount - prevTotalCount) / prevTotalCount * 100) : null;
  var resolved = periodRecords.filter(function (r) {
    return r.status === 'resolved';
  });
  var unresolved = periodRecords.filter(function (r) {
    return UNRESOLVED_STATUSES.includes(r.status);
  });
  var overdue = unresolved.filter(function (r) {
    return r.nextFollowUp && r.nextFollowUp < today;
  });
  var noFollowUpSet = unresolved.filter(function (r) {
    return !r.nextFollowUp;
  });
  var activeEmps = new Set(periodRecords.map(function (r) {
    return r.ownerId;
  })).size;

  // ========== 独立模块计数 ==========
  var cbActive = extra.chargebacks.filter(function (c) {
    return !['won', 'lost', 'closed'].includes(c.status);
  });
  var ooActive = extra.offlineOrders.filter(function (o) {
    return !['completed', 'cancelled'].includes(o.status);
  });
  var ciActive = extra.customInquiries.filter(function (c) {
    return !['completed', 'cancelled'].includes(c.stage);
  });
  var pvPending = extra.photoVerif.filter(function (p) {
    return !['accepted', 'rejected', 'replaced'].includes(p.status);
  });
  var cbInRange = extra.chargebacks.filter(function (c) {
    return inRange((c.created_at || '').slice(0, 10));
  });
  var ooInRange = extra.offlineOrders.filter(function (o) {
    return inRange((o.created_at || '').slice(0, 10));
  });
  var ciInRange = extra.customInquiries.filter(function (c) {
    return inRange((c.created_at || '').slice(0, 10));
  });
  var pvInRange = extra.photoVerif.filter(function (p) {
    return inRange((p.created_at || '').slice(0, 10));
  });

  // ========== 按问题分类分布 ==========
  var categoryStats = useMemo(function () {
    var map = new Map();
    periodRecords.forEach(function (r) {
      var cat = r.category || '(未分类)';
      if (!map.has(cat)) map.set(cat, {
        name: cat,
        total: 0,
        unresolved: 0,
        resolved: 0,
        records: []
      });
      var item = map.get(cat);
      item.total++;
      item.records.push(r);
      if (UNRESOLVED_STATUSES.includes(r.status)) item.unresolved++;
      if (r.status === 'resolved') item.resolved++;
    });
    return Array.from(map.values()).sort(function (a, b) {
      return b.total - a.total;
    });
  }, [periodRecords]);

  // ========== 按网站分布 ==========
  var siteStats = useMemo(function () {
    var map = new Map();
    periodRecords.forEach(function (r) {
      var site = r.site || window.__siteFromOrderRef && window.__siteFromOrderRef(r.orderRef) || '(未填)'; // 🆕 fix92: 无 site 时按订单号前缀推断
      if (!map.has(site)) map.set(site, {
        name: site,
        total: 0,
        unresolved: 0,
        resolved: 0,
        records: []
      });
      var item = map.get(site);
      item.total++;
      item.records.push(r);
      if (UNRESOLVED_STATUSES.includes(r.status)) item.unresolved++;
      if (r.status === 'resolved') item.resolved++;
    });
    return Array.from(map.values()).sort(function (a, b) {
      return b.total - a.total;
    });
  }, [periodRecords]);

  // ========== 🆕 fix82: 问题反馈统计 — 显示全部"未解决"的标记(不按日期筛,标记的问题没解决就一直显示给主管) ==========
  var feedbackStats = useMemo(function () {
    return employees.map(function (e) {
      return _objectSpread(_objectSpread({}, e), {}, {
        count: scopedRecords.filter(function (r) {
          return r.ownerId === e.id && r.isFeedback && r.status !== 'resolved';
        }).length
      });
    }).filter(function (e) {
      return e.count > 0;
    }).sort(function (a, b) {
      return b.count - a.count;
    });
  }, [employees, scopedRecords]);
  var feedbackRecords = useMemo(function () {
    return scopedRecords.filter(function (r) {
      return r.isFeedback && r.status !== 'resolved';
    });
  }, [scopedRecords]);

  // 🆕 fix174: 产品优化标记统计(对应 WorkTrack 绩效「产品优化奖」)
  var productOptStats = useMemo(function () {
    return employees.map(function (e) {
      return _objectSpread(_objectSpread({}, e), {}, {
        count: scopedRecords.filter(function (r) {
          return r.ownerId === e.id && r.isProductOpt;
        }).length
      });
    }).filter(function (e) {
      return e.count > 0;
    }).sort(function (a, b) {
      return b.count - a.count;
    });
  }, [employees, scopedRecords]);
  var productOptRecords = useMemo(function () {
    return scopedRecords.filter(function (r) {
      return r.isProductOpt;
    });
  }, [scopedRecords]);

  // ========== 按客服分布 ==========
  var empStats = useMemo(function () {
    return employees.map(function (e) {
      var recs = periodRecords.filter(function (r) {
        return r.ownerId === e.id;
      });
      return _objectSpread(_objectSpread({}, e), {}, {
        total: recs.length,
        unresolved: recs.filter(function (r) {
          return UNRESOLVED_STATUSES.includes(r.status);
        }).length,
        resolved: recs.filter(function (r) {
          return r.status === 'resolved';
        }).length,
        overdue: recs.filter(function (r) {
          return UNRESOLVED_STATUSES.includes(r.status) && r.nextFollowUp && r.nextFollowUp < today;
        }).length,
        noFollow: recs.filter(function (r) {
          return UNRESOLVED_STATUSES.includes(r.status) && !r.nextFollowUp;
        }).length,
        easy: recs.filter(function (r) {
          return r.difficulty === 'easy';
        }).length,
        mid: recs.filter(function (r) {
          return r.difficulty === 'mid';
        }).length,
        hard: recs.filter(function (r) {
          return r.difficulty === 'hard';
        }).length,
        mins: recs.reduce(function (s, r) {
          return s + (r.durationMin || 0);
        }, 0),
        records: recs
      });
    }).filter(function (e) {
      return e.total > 0 || scope === 'team';
    }).sort(function (a, b) {
      return b.total - a.total;
    });
  }, [employees, periodRecords, today, scope]);

  // ========== 未解决清单(可筛选) ==========
  var unresolvedList = useMemo(function () {
    var l = unresolved;
    if (unresolvedFilter.owner !== 'all') l = l.filter(function (r) {
      return r.ownerId === unresolvedFilter.owner;
    });
    if (unresolvedFilter.cat !== 'all') l = l.filter(function (r) {
      return r.category === unresolvedFilter.cat;
    });
    if (unresolvedFilter.site !== 'all') l = l.filter(function (r) {
      return r.site === unresolvedFilter.site;
    });
    if (unresolvedFilter.status !== 'all') l = l.filter(function (r) {
      return r.status === unresolvedFilter.status;
    });
    if (unresolvedFilter.overdueOnly) l = l.filter(function (r) {
      return r.nextFollowUp && r.nextFollowUp < today;
    });
    if (unresolvedFilter.noFollowOnly) l = l.filter(function (r) {
      return !r.nextFollowUp;
    });
    return _toConsumableArray(l).sort(function (a, b) {
      return (a.date || '9999').localeCompare(b.date || '9999');
    });
  }, [unresolved, unresolvedFilter, today]);
  var daysAgo = function daysAgo(date) {
    if (!date) return null;
    var d1 = new Date(today + 'T00:00:00'),
      d2 = new Date(date + 'T00:00:00');
    return Math.round((d1 - d2) / 86400000);
  };

  // 高优先级问题分类(标红)
  var URGENT_CATS = ['拒付', '售后', '退货', '补发', '取消订单', '质量问题'];
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-5 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 flex-wrap mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chart",
    className: "w-5 h-5",
    style: {
      color: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-display text-base font-bold"
  }, "\uD83D\uDCCA \u6570\u636E\u770B\u677F"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\xB7 ", rangeLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), isAdmin && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-sec ".concat(scope === 'team' ? '!bg-[var(--accent)] !text-white !border-[var(--accent)]' : ''),
    onClick: function onClick() {
      return setScope('team');
    },
    style: {
      padding: '5px 12px',
      fontSize: 12
    }
  }, "\u5168\u56E2\u961F"), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec ".concat(scope === 'one' ? '!bg-[var(--accent)] !text-white !border-[var(--accent)]' : ''),
    onClick: function onClick() {
      return setScope('one');
    },
    style: {
      padding: '5px 12px',
      fontSize: 12
    }
  }, "\u6307\u5B9A\u5458\u5DE5"), scope === 'one' && /*#__PURE__*/React.createElement("select", {
    value: selectedEmpId,
    onChange: function onChange(e) {
      return setSelectedEmpId(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: 12,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }, employees.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.name, e.alias ? " (".concat(e.alias, ")") : '');
  }))), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec ".concat(scope === 'me' ? '!bg-[var(--accent)] !text-white !border-[var(--accent)]' : ''),
    onClick: function onClick() {
      return setScope('me');
    },
    style: {
      padding: '5px 12px',
      fontSize: 12
    }
  }, "\u6211\u7684")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] font-bold",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDCC5 \u65F6\u95F4"), [['today', '今日'], ['week', '本周'], ['month', '本月'], ['quarter', '本季'], ['year', '本年'], ['custom', '自定义']].map(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
      k = _ref7[0],
      l = _ref7[1];
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      className: "btn-sec ".concat(timeRange === k ? '!bg-[var(--accent)] !text-white !border-[var(--accent)]' : ''),
      onClick: function onClick() {
        return setTimeRange(k);
      },
      style: {
        padding: '5px 14px',
        fontSize: 12,
        fontWeight: timeRange === k ? 600 : 500
      }
    }, l);
  }), timeRange === 'custom' && /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 ml-2"
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: customStart,
    onChange: function onChange(e) {
      return setCustomStart(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: 12,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: customEnd,
    onChange: function onChange(e) {
      return setCustomEnd(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: 12,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 lg:grid-cols-6 gap-3"
  }, /*#__PURE__*/React.createElement(KpiCard, {
    title: "\uD83D\uDCE7 \u5904\u7406\u603B\u6570",
    value: totalCount,
    sub: diffPct !== null ? "".concat(diffPct >= 0 ? '↑' : '↓', " ").concat(Math.abs(diffPct), "% vs \u4E0A\u671F") : '上期无数据',
    subColor: diffPct === null ? 'var(--ink-4)' : diffPct >= 0 ? 'var(--good)' : 'var(--bad)',
    accent: "var(--accent)",
    onClick: totalCount > 0 ? function () {
      return setKpiDetail({
        type: 'records',
        title: '📧 处理总数',
        records: periodRecords,
        accent: 'var(--accent)'
      });
    } : undefined
  }), /*#__PURE__*/React.createElement(KpiCard, {
    title: "\u2705 \u5DF2\u89E3\u51B3",
    value: resolved.length,
    sub: totalCount > 0 ? "".concat(Math.round(resolved.length / totalCount * 100), "% \u89E3\u51B3\u7387") : '—',
    accent: "var(--good)",
    onClick: resolved.length > 0 ? function () {
      return setKpiDetail({
        type: 'records',
        title: '✅ 已解决',
        records: resolved,
        accent: 'var(--good)'
      });
    } : undefined
  }), /*#__PURE__*/React.createElement(KpiCard, {
    title: "\u23F3 \u672A\u89E3\u51B3",
    value: unresolved.length,
    sub: overdue.length > 0 ? "\uD83D\uDD34 ".concat(overdue.length, " \u5DF2\u8D85\u671F") : noFollowUpSet.length > 0 ? "\uD83D\uDFE1 ".concat(noFollowUpSet.length, " \u672A\u8BBE\u8DDF\u8FDB") : '✓ 状态正常',
    subColor: overdue.length > 0 ? 'var(--bad)' : noFollowUpSet.length > 0 ? 'var(--warn)' : 'var(--ink-4)',
    accent: "var(--warn)",
    highlight: overdue.length > 0,
    onClick: unresolved.length > 0 ? function () {
      return setKpiDetail({
        type: 'records',
        title: '⏳ 未解决',
        records: unresolved,
        accent: 'var(--warn)'
      });
    } : undefined
  }), /*#__PURE__*/React.createElement(KpiCard, {
    title: "\uD83D\uDC65 \u6D3B\u8DC3\u5BA2\u670D",
    value: activeEmps,
    sub: "/ ".concat(employees.length, " \u603B\u4EBA\u6570"),
    accent: "#5e5ce6",
    onClick: activeEmps > 0 ? function () {
      return setKpiDetail({
        type: 'employees',
        title: '👥 活跃客服',
        records: empStats.filter(function (e) {
          return e.total > 0;
        }),
        accent: '#5e5ce6'
      });
    } : undefined
  }), /*#__PURE__*/React.createElement(KpiCard, {
    title: "\uD83D\uDEA8 \u62D2\u4ED8\u5F85\u5904\u7406",
    value: cbActive.length,
    sub: cbInRange.length > 0 ? "\u672C\u671F\u65B0\u589E ".concat(cbInRange.length) : '本期无新增',
    accent: "var(--bad)",
    highlight: cbActive.length > 5,
    onClick: cbActive.length > 0 ? function () {
      return setKpiDetail({
        type: 'chargebacks',
        title: '🚨 拒付待处理',
        records: cbActive,
        accent: 'var(--bad)'
      });
    } : undefined
  }), /*#__PURE__*/React.createElement(KpiCard, {
    title: "\uD83D\uDCB3 \u5DE5\u5355\u5F85\u5904\u7406",
    value: ooActive.length + ciActive.length + pvPending.length,
    sub: "\u7EBF\u4E0B ".concat(ooActive.length, " \xB7 \u5B9A\u5236 ").concat(ciActive.length, " \xB7 \u5B9E\u62CD ").concat(pvPending.length),
    accent: "#af52de",
    onClick: ooActive.length + ciActive.length + pvPending.length > 0 ? function () {
      return setKpiDetail({
        type: 'tickets',
        title: '💳 工单待处理',
        tickets: {
          offline: ooActive,
          custom: ciActive,
          photo: pvPending
        },
        accent: '#af52de'
      });
    } : undefined
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-3 gap-4"
  }, /*#__PURE__*/React.createElement(CategoryDistribution, {
    items: categoryStats,
    expanded: expandedCategory,
    onExpand: setExpandedCategory,
    urgentKeys: URGENT_CATS,
    onClickRecord: setDetailRecord,
    employees: employees
  }), /*#__PURE__*/React.createElement(SiteDistribution, {
    items: siteStats,
    expanded: expandedSite,
    onExpand: setExpandedSite,
    onClickRecord: setDetailRecord,
    employees: employees
  }), /*#__PURE__*/React.createElement(EmployeeDistribution, {
    items: empStats,
    expanded: expandedEmp,
    onExpand: setExpandedEmp,
    onClickRecord: setDetailRecord
  })), /*#__PURE__*/React.createElement(SiteDailyBreakdown, {
    scope: scope,
    selectedEmpId: scope === 'me' ? user.id : selectedEmpId,
    employees: employees,
    live: liveRecords,
    today: today,
    last7Start: addDays(today, -6),
    monthStart: today.slice(0, 8) + '01'
  }), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3 flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display text-sm font-bold"
  }, "\uD83D\uDCE3 \u95EE\u9898\u53CD\u9988"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u672A\u89E3\u51B3 \xB7 \u5BA2\u670D\u6807\u8BB0\u7684\u95EE\u9898(\u5168\u90E8,\u4E0D\u9650\u5F53\u5929)")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 20,
      color: '#b45309'
    }
  }, feedbackRecords.length, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginLeft: 3
    }
  }, "\u6761"))), feedbackStats.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-3"
  }, feedbackStats.map(function (e) {
    return /*#__PURE__*/React.createElement("span", {
      key: e.id,
      style: {
        padding: '3px 10px',
        background: '#fffbeb',
        border: '1px solid #fcd34d',
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 600,
        color: '#92400e'
      }
    }, e.name, e.alias ? ' ' + e.alias : '', " \xB7 ", e.count);
  })) : /*#__PURE__*/React.createElement("div", {
    className: "text-xs py-2",
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u672C\u671F\u8FD8\u6CA1\u6709\u6807\u8BB0\u7684\u95EE\u9898\u53CD\u9988 \xB7 \u5BA2\u670D\u5728\u300C\u8DDF\u8FDB & \u622A\u56FE\u300D\u5F39\u7A97\u91CC\u52FE\u9009\u300C\uD83D\uDCE3 \u6807\u8BB0\u4E3A\u95EE\u9898\u53CD\u9988\u300D\u5373\u53EF"), feedbackRecords.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 max-h-52 overflow-y-auto scrollbar-thin"
  }, feedbackRecords.map(function (r) {
    var _employees$find, _r$feedbackShots;
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      onClick: function onClick() {
        return setDetailRecord(r);
      },
      className: "flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer hover:bg-[var(--bg-elevated)]",
      style: {
        fontSize: 12,
        borderBottom: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 6px',
        background: 'var(--bg-elevated)',
        borderRadius: 6,
        fontSize: 10
      }
    }, r.site || window.__siteFromOrderRef && window.__siteFromOrderRef(r.orderRef) || '?'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 11,
        color: '#92400e',
        minWidth: 60,
        whiteSpace: 'nowrap'
      }
    }, ((_employees$find = employees.find(function (e) {
      return e.id === r.ownerId;
    })) === null || _employees$find === void 0 ? void 0 : _employees$find.name) || r.ownerName || '?'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        minWidth: 74
      }
    }, r.customer || '(无客户名)'), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)',
        fontFamily: 'monospace',
        fontSize: 11
      }
    }, r.orderRef || ''), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-2)',
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, r.feedbackNote || r.note || ''), ((_r$feedbackShots = r.feedbackShots) === null || _r$feedbackShots === void 0 ? void 0 : _r$feedbackShots.length) > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)'
      }
    }, "\uD83D\uDCF7", r.feedbackShots.length), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--ink-4)',
        whiteSpace: 'nowrap'
      }
    }, (r.feedbackMarkedAt || '').slice(5, 16).replace('T', ' ') || r.date));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3 flex-wrap gap-2"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display text-sm font-bold"
  }, "\uD83D\uDEE0 \u4EA7\u54C1\u4F18\u5316"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u5BA2\u670D\u4E3B\u52A8\u53D1\u73B0\u5E76\u53CD\u9988\u66F4\u6B63\u7684\u4EA7\u54C1\u95EE\u9898(\u8BA1\u7EE9\u6548\xB7\u4EA7\u54C1\u4F18\u5316\u5956)")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 20,
      color: '#16a34a'
    }
  }, productOptRecords.length, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginLeft: 3
    }
  }, "\u6761"))), productOptStats.length > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-3"
  }, productOptStats.map(function (e) {
    return /*#__PURE__*/React.createElement("span", {
      key: e.id,
      style: {
        padding: '3px 10px',
        background: '#f0fdf4',
        border: '1px solid #86efac',
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 600,
        color: '#15803d'
      }
    }, e.name, e.alias ? ' ' + e.alias : '', " \xB7 ", e.count);
  })) : /*#__PURE__*/React.createElement("div", {
    className: "text-xs py-2",
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u8FD8\u6CA1\u6709\u6807\u8BB0\u7684\u4EA7\u54C1\u4F18\u5316 \xB7 \u5BA2\u670D\u5728\u300C\u8DDF\u8FDB & \u622A\u56FE\u300D\u5F39\u7A97\u91CC\u52FE\u9009\u300C\uD83D\uDEE0 \u6807\u8BB0\u4E3A\u4EA7\u54C1\u4F18\u5316\u300D\u5373\u53EF"), productOptRecords.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "space-y-1 max-h-52 overflow-y-auto scrollbar-thin"
  }, productOptRecords.map(function (r) {
    var _employees$find2, _r$productOptShots;
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      onClick: function onClick() {
        return setDetailRecord(r);
      },
      className: "flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer hover:bg-[var(--bg-elevated)]",
      style: {
        fontSize: 12,
        borderBottom: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 6px',
        background: 'var(--bg-elevated)',
        borderRadius: 6,
        fontSize: 10
      }
    }, r.site || window.__siteFromOrderRef && window.__siteFromOrderRef(r.orderRef) || '?'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 11,
        color: '#15803d',
        minWidth: 60,
        whiteSpace: 'nowrap'
      }
    }, ((_employees$find2 = employees.find(function (e) {
      return e.id === r.ownerId;
    })) === null || _employees$find2 === void 0 ? void 0 : _employees$find2.name) || r.ownerName || '?'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        minWidth: 74
      }
    }, r.customer || '(无客户名)'), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)',
        fontFamily: 'monospace',
        fontSize: 11
      }
    }, r.orderRef || ''), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-2)',
        flex: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, r.productOptNote || r.note || ''), ((_r$productOptShots = r.productOptShots) === null || _r$productOptShots === void 0 ? void 0 : _r$productOptShots.length) > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)'
      }
    }, "\uD83D\uDCF7", r.productOptShots.length), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--ink-4)',
        whiteSpace: 'nowrap'
      }
    }, (r.productOptMarkedAt || '').slice(5, 16).replace('T', ' ') || r.date));
  }))), /*#__PURE__*/React.createElement(UnresolvedList, {
    records: unresolvedList,
    totalUnresolved: unresolved.length,
    overdueCount: overdue.length,
    noFollowCount: noFollowUpSet.length,
    filter: unresolvedFilter,
    setFilter: setUnresolvedFilter,
    employees: employees,
    today: today,
    daysAgo: daysAgo,
    onClickRecord: setDetailRecord,
    isAdmin: isAdmin
  }), /*#__PURE__*/React.createElement(ModuleIntegrationPanel, {
    chargebacks: extra.chargebacks,
    chargebacksInRange: cbInRange,
    offlineOrders: extra.offlineOrders,
    offlineInRange: ooInRange,
    customInquiries: extra.customInquiries,
    ciInRange: ciInRange,
    photoVerif: extra.photoVerif,
    pvInRange: pvInRange,
    rangeLabel: rangeLabel,
    loading: extraLoading,
    employees: employees
  }), detailRecord && /*#__PURE__*/React.createElement(RecordDetailModal, {
    record: detailRecord,
    employees: employees,
    onClose: function onClose() {
      return setDetailRecord(null);
    }
  }), kpiDetail && /*#__PURE__*/React.createElement(KpiDetailModal, {
    kpi: kpiDetail,
    employees: employees,
    onClose: function onClose() {
      return setKpiDetail(null);
    },
    onClickRecord: function onClickRecord(r) {
      setKpiDetail(null);
      setDetailRecord(r);
    }
  }));
};

// ============================================================
// KPI 卡片(可点击展开详情)
// ============================================================
var KpiCard = function KpiCard(_ref8) {
  var title = _ref8.title,
    value = _ref8.value,
    sub = _ref8.sub,
    subColor = _ref8.subColor,
    accent = _ref8.accent,
    highlight = _ref8.highlight,
    onClick = _ref8.onClick;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    className: onClick ? 'kpi-clickable' : '',
    style: {
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 16,
      padding: '14px 16px',
      borderLeft: "4px solid ".concat(accent),
      boxShadow: highlight ? "0 0 0 2px ".concat(accent, "33") : '0 1px 2px rgba(0,0,0,.03)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all .15s',
      position: 'relative'
    },
    onMouseEnter: onClick ? function (e) {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,.08), 0 0 0 1px ".concat(accent, "44");
    } : undefined,
    onMouseLeave: onClick ? function (e) {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.boxShadow = highlight ? "0 0 0 2px ".concat(accent, "33") : '0 1px 2px rgba(0,0,0,.03)';
    } : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-bold",
    style: {
      color: 'var(--ink-3)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "font-mono font-bold text-3xl tabular-nums mt-1",
    style: {
      color: accent
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] mt-1",
    style: {
      color: subColor || 'var(--ink-4)'
    }
  }, sub), onClick && value > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      fontSize: 10,
      color: 'var(--ink-4)',
      opacity: .6
    }
  }, "\u70B9\u51FB\u67E5\u770B \u2192"));
};

// ============================================================
// 按分类分布
// ============================================================
var CategoryDistribution = function CategoryDistribution(_ref9) {
  var items = _ref9.items,
    expanded = _ref9.expanded,
    onExpand = _ref9.onExpand,
    urgentKeys = _ref9.urgentKeys,
    onClickRecord = _ref9.onClickRecord,
    employees = _ref9.employees;
  var maxV = Math.max.apply(Math, [1].concat(_toConsumableArray(items.map(function (it) {
    return it.total;
  }))));
  var top10 = items.slice(0, 10);
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-sm font-bold"
  }, "\uD83C\uDFF7 \u6309\u95EE\u9898\u7C7B\u578B TOP 10"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px]",
    style: {
      color: 'var(--ink-4)'
    }
  }, items.length, " \u7C7B")), top10.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-8 text-xs",
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u672C\u671F\u65E0\u6570\u636E") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5"
  }, top10.map(function (it) {
    var pct = it.total / maxV * 100;
    var isUrgent = urgentKeys.includes(it.name);
    var isOpen = expanded === it.name;
    return /*#__PURE__*/React.createElement("div", {
      key: it.name
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onExpand(isOpen ? null : it.name);
      },
      className: "w-full text-left flex items-center gap-2 py-1 px-2 rounded hover:bg-[var(--bg-elevated)] transition",
      style: {
        background: isOpen ? 'var(--accent-soft)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] font-bold w-20 truncate",
      style: {
        color: isUrgent ? 'var(--bad)' : 'var(--ink)'
      }
    }, isUrgent && '🔴 ', it.name), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 h-4 rounded overflow-hidden",
      style: {
        background: 'var(--bg-elevated)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + '%',
        height: '100%',
        background: isUrgent ? 'var(--bad)' : 'var(--accent)',
        transition: 'width .3s'
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] font-mono font-bold w-8 text-right"
    }, it.total), it.unresolved > 0 && /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-mono w-12 text-right",
      style: {
        color: 'var(--warn)'
      }
    }, "\u23F3", it.unresolved), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)'
      }
    }, isOpen ? '▾' : '▸')), isOpen && /*#__PURE__*/React.createElement("div", {
      className: "ml-2 mt-1 mb-2 p-2 rounded",
      style: {
        background: 'var(--bg-soft)',
        maxHeight: 240,
        overflowY: 'auto'
      }
    }, it.records.slice(0, 50).map(function (r) {
      return /*#__PURE__*/React.createElement("div", {
        key: r.id,
        onClick: function onClick() {
          return onClickRecord(r);
        },
        className: "py-1.5 px-2 text-[11px] cursor-pointer rounded hover:bg-white",
        style: {
          borderBottom: '1px solid var(--line-soft)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "font-bold"
      }, r.customer || '(无客户名)'), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--ink-4)'
        }
      }, r.orderRef || ''), /*#__PURE__*/React.createElement("span", {
        className: "text-[10px] px-1.5 py-0.5 rounded",
        style: {
          background: 'var(--bg-elevated)',
          color: 'var(--ink-3)'
        }
      }, r.site), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-[10px]",
        style: {
          color: 'var(--ink-4)'
        }
      }, r.date), /*#__PURE__*/React.createElement(StatusTag, {
        status: r.status
      })), r.note && /*#__PURE__*/React.createElement("div", {
        className: "text-[10px] mt-0.5 truncate",
        style: {
          color: 'var(--ink-3)'
        }
      }, r.note));
    }), it.records.length > 50 && /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-center pt-1",
      style: {
        color: 'var(--ink-4)'
      }
    }, "\u5171 ", it.records.length, " \u6761,\u53EA\u663E\u793A\u524D 50")));
  })));
};

// ============================================================
// 按网站分布
// ============================================================
var SiteDistribution = function SiteDistribution(_ref0) {
  var items = _ref0.items,
    expanded = _ref0.expanded,
    onExpand = _ref0.onExpand,
    onClickRecord = _ref0.onClickRecord,
    employees = _ref0.employees;
  var maxV = Math.max.apply(Math, [1].concat(_toConsumableArray(items.map(function (it) {
    return it.total;
  }))));
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-sm font-bold"
  }, "\uD83C\uDF10 \u6309\u7F51\u7AD9\u5206\u5E03"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px]",
    style: {
      color: 'var(--ink-4)'
    }
  }, items.length, " \u7AD9")), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-8 text-xs",
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u672C\u671F\u65E0\u6570\u636E") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5"
  }, items.map(function (it) {
    var pct = it.total / maxV * 100;
    var isOpen = expanded === it.name;
    return /*#__PURE__*/React.createElement("div", {
      key: it.name
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onExpand(isOpen ? null : it.name);
      },
      className: "w-full text-left flex items-center gap-2 py-1 px-2 rounded hover:bg-[var(--bg-elevated)] transition",
      style: {
        background: isOpen ? 'var(--accent-soft)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] font-bold w-14 truncate"
    }, it.name), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 h-4 rounded overflow-hidden",
      style: {
        background: 'var(--bg-elevated)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + '%',
        height: '100%',
        background: '#5e5ce6',
        transition: 'width .3s'
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] font-mono font-bold w-8 text-right"
    }, it.total), it.unresolved > 0 && /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-mono w-12 text-right",
      style: {
        color: 'var(--warn)'
      }
    }, "\u23F3", it.unresolved), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)'
      }
    }, isOpen ? '▾' : '▸')), isOpen && /*#__PURE__*/React.createElement("div", {
      className: "ml-2 mt-1 mb-2 p-2 rounded",
      style: {
        background: 'var(--bg-soft)',
        maxHeight: 240,
        overflowY: 'auto'
      }
    }, it.records.slice(0, 50).map(function (r) {
      return /*#__PURE__*/React.createElement("div", {
        key: r.id,
        onClick: function onClick() {
          return onClickRecord(r);
        },
        className: "py-1.5 px-2 text-[11px] cursor-pointer rounded hover:bg-white",
        style: {
          borderBottom: '1px solid var(--line-soft)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "font-bold"
      }, r.customer || '(无客户名)'), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--ink-4)'
        }
      }, r.orderRef || ''), /*#__PURE__*/React.createElement("span", {
        className: "text-[10px] px-1.5 py-0.5 rounded",
        style: {
          background: 'var(--bg-elevated)',
          color: 'var(--ink-3)'
        }
      }, r.category), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-[10px]",
        style: {
          color: 'var(--ink-4)'
        }
      }, r.date), /*#__PURE__*/React.createElement(StatusTag, {
        status: r.status
      })));
    }), it.records.length > 50 && /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-center pt-1",
      style: {
        color: 'var(--ink-4)'
      }
    }, "\u5171 ", it.records.length, " \u6761,\u53EA\u663E\u793A\u524D 50")));
  })));
};

// ============================================================
// 按客服分布
// ============================================================
var EmployeeDistribution = function EmployeeDistribution(_ref1) {
  var items = _ref1.items,
    expanded = _ref1.expanded,
    onExpand = _ref1.onExpand,
    onClickRecord = _ref1.onClickRecord;
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-sm font-bold"
  }, "\uD83D\uDC64 \u6309\u5BA2\u670D\u5206\u5E03"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px]",
    style: {
      color: 'var(--ink-4)'
    }
  }, items.length, " \u4EBA")), items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-8 text-xs",
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u672C\u671F\u65E0\u6570\u636E") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5",
    style: {
      maxHeight: 520,
      overflowY: 'auto'
    }
  }, items.map(function (e, idx) {
    var isOpen = expanded === e.id;
    return /*#__PURE__*/React.createElement("div", {
      key: e.id
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onExpand(isOpen ? null : e.id);
      },
      className: "w-full text-left flex items-center gap-2 py-1.5 px-2 rounded hover:bg-[var(--bg-elevated)] transition",
      style: {
        background: isOpen ? 'var(--accent-soft)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-bold w-5 text-center px-1 rounded ".concat(idx < 3 ? 'tag-gold' : ''),
      style: idx >= 3 ? {
        color: 'var(--ink-4)'
      } : {}
    }, idx + 1), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 min-w-0"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[12px] font-bold truncate"
    }, e.name, e.alias ? " \xB7 ".concat(e.alias) : ''), /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] flex items-center gap-1.5 flex-wrap",
      style: {
        color: 'var(--ink-3)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCE7 ", /*#__PURE__*/React.createElement("b", null, e.total)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--good)'
      }
    }, "\u2713 ", e.resolved), e.unresolved > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--warn)'
      }
    }, "\u23F3 ", e.unresolved), e.overdue > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--bad)'
      }
    }, "\uD83D\uDD34 ", e.overdue), e.noFollow > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#b45309'
      }
    }, "\uD83D\uDFE1 ", e.noFollow, "\u672A\u8BBE"))), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)'
      }
    }, isOpen ? '▾' : '▸')), isOpen && /*#__PURE__*/React.createElement("div", {
      className: "ml-2 mt-1 mb-2 p-2 rounded",
      style: {
        background: 'var(--bg-soft)',
        maxHeight: 240,
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] mb-2",
      style: {
        color: 'var(--ink-3)'
      }
    }, "\u7B80 ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--good)'
      }
    }, e.easy), " \xB7 \u4E2D ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--gold)'
      }
    }, e.mid), " \xB7 \u590D ", /*#__PURE__*/React.createElement("b", {
      style: {
        color: 'var(--bad)'
      }
    }, e.hard), " \xB7 \u5171 ", fmtDuration(e.mins)), e.records.slice(0, 50).map(function (r) {
      return /*#__PURE__*/React.createElement("div", {
        key: r.id,
        onClick: function onClick() {
          return onClickRecord(r);
        },
        className: "py-1.5 px-2 text-[11px] cursor-pointer rounded hover:bg-white",
        style: {
          borderBottom: '1px solid var(--line-soft)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "font-bold"
      }, r.customer || '(无客户名)'), /*#__PURE__*/React.createElement("span", {
        className: "text-[10px] px-1.5 py-0.5 rounded",
        style: {
          background: 'var(--bg-elevated)',
          color: 'var(--ink-3)'
        }
      }, r.category), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }), /*#__PURE__*/React.createElement(StatusTag, {
        status: r.status
      })));
    }), e.records.length > 50 && /*#__PURE__*/React.createElement("div", {
      className: "text-[10px] text-center pt-1",
      style: {
        color: 'var(--ink-4)'
      }
    }, "\u5171 ", e.records.length, " \u6761,\u53EA\u663E\u793A\u524D 50")));
  })));
};

// ============================================================
// 状态 Tag
// ============================================================
var StatusTag = function StatusTag(_ref10) {
  var status = _ref10.status;
  var map = {
    pending: {
      label: '待处理',
      bg: '#fef3c7',
      color: '#92400e'
    },
    following: {
      label: '跟进中',
      bg: '#dbeafe',
      color: '#1e40af'
    },
    waiting: {
      label: '等客户',
      bg: '#fce7f3',
      color: '#9d174d'
    },
    resolved: {
      label: '已解决',
      bg: '#dcfce7',
      color: '#15803d'
    },
    transferred: {
      label: '已转交',
      bg: '#e5e5e7',
      color: '#6e6e73'
    }
  };
  var m = map[status] || {
    label: status || '?',
    bg: '#f5f5f7',
    color: '#86868b'
  };
  return /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] font-bold px-1.5 py-0.5 rounded",
    style: {
      background: m.bg,
      color: m.color
    }
  }, m.label);
};

// ============================================================
// 未解决清单
// ============================================================
var UnresolvedList = function UnresolvedList(_ref11) {
  var records = _ref11.records,
    totalUnresolved = _ref11.totalUnresolved,
    overdueCount = _ref11.overdueCount,
    noFollowCount = _ref11.noFollowCount,
    filter = _ref11.filter,
    setFilter = _ref11.setFilter,
    employees = _ref11.employees,
    today = _ref11.today,
    daysAgo = _ref11.daysAgo,
    onClickRecord = _ref11.onClickRecord,
    isAdmin = _ref11.isAdmin;
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-4 border-b",
    style: {
      borderColor: 'var(--line)',
      background: 'linear-gradient(to right, #fef3c7, transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3 flex-wrap"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "alert",
    className: "w-5 h-5",
    style: {
      color: 'var(--warn)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-display text-base font-bold"
  }, "\u23F3 \u672A\u89E3\u51B3\u6E05\u5355"), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] px-2 py-0.5 rounded-full font-mono font-bold",
    style: {
      background: 'var(--warn-soft)',
      color: '#92400e'
    }
  }, records.length, " / ", totalUnresolved, " \u6761"), overdueCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] px-2 py-0.5 rounded-full font-mono font-bold",
    style: {
      background: 'var(--bad-soft)',
      color: 'var(--bad)'
    }
  }, "\uD83D\uDD34 ", overdueCount, " \u5DF2\u8D85\u671F"), noFollowCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] px-2 py-0.5 rounded-full font-mono font-bold",
    style: {
      background: '#fef9c3',
      color: '#854d0e'
    }
  }, "\uD83D\uDFE1 ", noFollowCount, " \u672A\u8BBE\u8DDF\u8FDB\u65E5")), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] mt-2",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u72B6\u6001 \u2208 ", '{待处理, 跟进中, 等客户}', " \xB7 \u6309\u62D6\u5EF6\u5929\u6570\u5012\u5E8F \xB7 \u70B9\u51FB\u4EFB\u610F\u884C\u67E5\u770B\u5B8C\u6574\u5185\u5BB9"), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap mt-3"
  }, /*#__PURE__*/React.createElement("select", {
    value: filter.owner,
    onChange: function onChange(e) {
      return setFilter(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          owner: e.target.value
        });
      });
    },
    style: {
      padding: '4px 8px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u5BA2\u670D"), employees.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.name);
  })), /*#__PURE__*/React.createElement("select", {
    value: filter.cat,
    onChange: function onChange(e) {
      return setFilter(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          cat: e.target.value
        });
      });
    },
    style: {
      padding: '4px 8px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u5206\u7C7B"), CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c,
      value: c
    }, c);
  })), /*#__PURE__*/React.createElement("select", {
    value: filter.site,
    onChange: function onChange(e) {
      return setFilter(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          site: e.target.value
        });
      });
    },
    style: {
      padding: '4px 8px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u7F51\u7AD9"), SITES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s,
      value: s
    }, s);
  })), /*#__PURE__*/React.createElement("select", {
    value: filter.status,
    onChange: function onChange(e) {
      return setFilter(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          status: e.target.value
        });
      });
    },
    style: {
      padding: '4px 8px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u72B6\u6001"), /*#__PURE__*/React.createElement("option", {
    value: "pending"
  }, "\u5F85\u5904\u7406"), /*#__PURE__*/React.createElement("option", {
    value: "following"
  }, "\u8DDF\u8FDB\u4E2D"), /*#__PURE__*/React.createElement("option", {
    value: "waiting"
  }, "\u7B49\u5BA2\u6237")), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-1 text-[11px]",
    style: {
      color: 'var(--bad)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: filter.overdueOnly,
    onChange: function onChange(e) {
      return setFilter(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          overdueOnly: e.target.checked
        });
      });
    }
  }), "\uD83D\uDD34 \u53EA\u770B\u8D85\u671F"), /*#__PURE__*/React.createElement("label", {
    className: "flex items-center gap-1 text-[11px]",
    style: {
      color: '#b45309',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: filter.noFollowOnly,
    onChange: function onChange(e) {
      return setFilter(function (f) {
        return _objectSpread(_objectSpread({}, f), {}, {
          noFollowOnly: e.target.checked
        });
      });
    }
  }), "\uD83D\uDFE1 \u53EA\u770B\u672A\u8BBE\u8DDF\u8FDB"))), records.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "text-center py-12 text-sm",
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u2713 \u5F53\u524D\u7B5B\u9009\u6761\u4EF6\u4E0B\u65E0\u672A\u89E3\u51B3\u8BB0\u5F55") : /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto",
    style: {
      maxHeight: 600,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 60
    }
  }, "\u62D6\u5EF6"), /*#__PURE__*/React.createElement("th", null, "\u5BA2\u6237"), /*#__PURE__*/React.createElement("th", null, "\u7F51\u7AD9"), /*#__PURE__*/React.createElement("th", null, "\u8BA2\u5355\u53F7"), /*#__PURE__*/React.createElement("th", null, "\u5206\u7C7B"), /*#__PURE__*/React.createElement("th", null, "\u5BA2\u670D"), /*#__PURE__*/React.createElement("th", null, "\u72B6\u6001"), /*#__PURE__*/React.createElement("th", null, "\u96BE\u5EA6"), /*#__PURE__*/React.createElement("th", null, "\u8DDF\u8FDB\u65E5"))), /*#__PURE__*/React.createElement("tbody", null, records.slice(0, 200).map(function (r) {
    var da = daysAgo(r.date);
    var isOverdue = r.nextFollowUp && r.nextFollowUp < today;
    var noFollow = !r.nextFollowUp;
    var color = 'var(--good)';
    var label = "".concat(da, "\u5929");
    if (da == null) {
      color = 'var(--ink-4)';
      label = '-';
    } else if (da > 7) color = 'var(--bad)';else if (da > 3) color = 'var(--warn)';
    var emp = employees.find(function (e) {
      return e.id === r.ownerId;
    });
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id,
      onClick: function onClick() {
        return onClickRecord(r);
      },
      style: {
        cursor: 'pointer'
      },
      onMouseEnter: function onMouseEnter(e) {
        return e.currentTarget.style.background = 'var(--accent-soft)';
      },
      onMouseLeave: function onMouseLeave(e) {
        return e.currentTarget.style.background = '';
      }
    }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] font-mono font-bold",
      style: {
        color: color
      }
    }, da > 7 ? '🔴 ' : da > 3 ? '🟡 ' : '', label)), /*#__PURE__*/React.createElement("td", {
      className: "text-[12px]"
    }, r.customer || /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)'
      }
    }, "\u2014")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] px-1.5 py-0.5 rounded",
      style: {
        background: 'var(--bg-elevated)'
      }
    }, r.site || '—')), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px] font-mono",
      style: {
        color: 'var(--ink-3)'
      }
    }, r.orderRef || '—'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "text-[11px]"
    }, r.category || '—')), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px]"
    }, emp ? emp.name : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)'
      }
    }, "\u2014")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusTag, {
      status: r.status
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-mono"
    }, r.difficulty || '—')), /*#__PURE__*/React.createElement("td", null, noFollow ? /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-bold",
      style: {
        color: '#b45309'
      }
    }, "\uD83D\uDFE1 \u672A\u8BBE") : /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-mono",
      style: {
        color: isOverdue ? 'var(--bad)' : 'var(--ink-3)',
        fontWeight: isOverdue ? 600 : 400
      }
    }, isOverdue && '🔴 ', r.nextFollowUp)));
  }))), records.length > 200 && /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] text-center py-2",
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u5171 ", records.length, " \u6761,\u53EA\u663E\u793A\u524D 200,\u8BF7\u7528\u7B5B\u9009\u7F29\u5C0F\u8303\u56F4")));
};

// ============================================================
// 独立模块整合
// ============================================================
var ModuleIntegrationPanel = function ModuleIntegrationPanel(_ref12) {
  var chargebacks = _ref12.chargebacks,
    chargebacksInRange = _ref12.chargebacksInRange,
    offlineOrders = _ref12.offlineOrders,
    offlineInRange = _ref12.offlineInRange,
    customInquiries = _ref12.customInquiries,
    ciInRange = _ref12.ciInRange,
    photoVerif = _ref12.photoVerif,
    pvInRange = _ref12.pvInRange,
    rangeLabel = _ref12.rangeLabel,
    loading = _ref12.loading,
    employees = _ref12.employees;
  if (loading) return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-6 text-center text-xs",
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u23F3 \u52A0\u8F7D\u72EC\u7ACB\u6A21\u5757\u6570\u636E\u4E2D...");

  // 拒付分析
  var cbActive = chargebacks.filter(function (c) {
    return !['won', 'lost', 'closed'].includes(c.status);
  });
  var cbWon = chargebacks.filter(function (c) {
    return c.status === 'won';
  }).length;
  var cbLost = chargebacks.filter(function (c) {
    return c.status === 'lost';
  }).length;
  var cbAmount = chargebacksInRange.reduce(function (s, c) {
    return s + (parseFloat(c.amount) || 0);
  }, 0);

  // 线下单分析
  var ooAmount = offlineInRange.filter(function (o) {
    return ['paid', 'dispatched', 'completed'].includes(o.status);
  }).reduce(function (s, o) {
    return s + (parseFloat(o.payment_amount) || 0);
  }, 0);
  var ooPending = offlineOrders.filter(function (o) {
    return o.status === 'pending_payment';
  }).length;

  // 定制分析
  var ciNew = customInquiries.filter(function (c) {
    return c.stage === 'new';
  }).length;
  var ciQuoted = customInquiries.filter(function (c) {
    return c.stage === 'quoted';
  }).length;
  var ciProducing = customInquiries.filter(function (c) {
    return c.stage === 'producing';
  }).length;

  // 实拍分析
  var pvPending = photoVerif.filter(function (p) {
    return p.status === 'pending';
  }).length;
  var pvSent = photoVerif.filter(function (p) {
    return p.status === 'sent';
  }).length;
  var pvRejected = photoVerif.filter(function (p) {
    return p.status === 'rejected';
  }).length;
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display text-base font-bold"
  }, "\uD83D\uDD17 \u72EC\u7ACB\u5DE5\u5355\u6DF1\u5EA6\u5206\u6790"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px]",
    style: {
      color: 'var(--ink-4)'
    }
  }, "\xB7 ", rangeLabel)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 lg:grid-cols-4 gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl p-3",
    style: {
      border: '1px solid var(--bad-soft)',
      background: '#fff5f5'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base"
  }, "\uD83D\uDEA8"), /*#__PURE__*/React.createElement("span", {
    className: "text-[12px] font-bold"
  }, "\u62D2\u4ED8 Chargebacks")), /*#__PURE__*/React.createElement("div", {
    className: "font-mono font-bold text-2xl tabular-nums mb-2",
    style: {
      color: 'var(--bad)'
    }
  }, cbActive.length), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] space-y-0.5",
    style: {
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u672C\u671F\u65B0\u589E: ", /*#__PURE__*/React.createElement("b", null, chargebacksInRange.length), " \u8D77 \xB7 $", cbAmount.toFixed(0)), /*#__PURE__*/React.createElement("div", null, "\u5DF2\u8D62: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--good)'
    }
  }, cbWon), " \xB7 \u5DF2\u8F93: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--bad)'
    }
  }, cbLost)), chargebacks.length > 0 && /*#__PURE__*/React.createElement("div", null, "\u80DC\u7387: ", /*#__PURE__*/React.createElement("b", null, Math.round(cbWon / (cbWon + cbLost || 1) * 100), "%")))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl p-3",
    style: {
      border: '1px solid #c7d2fe',
      background: '#eef2ff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base"
  }, "\uD83D\uDCB3"), /*#__PURE__*/React.createElement("span", {
    className: "text-[12px] font-bold"
  }, "\u7EBF\u4E0B\u5355 Offline")), /*#__PURE__*/React.createElement("div", {
    className: "font-mono font-bold text-2xl tabular-nums mb-2",
    style: {
      color: '#4338ca'
    }
  }, ooPending), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] space-y-0.5",
    style: {
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u672C\u671F\u65B0\u589E: ", /*#__PURE__*/React.createElement("b", null, offlineInRange.length), " \u5355"), /*#__PURE__*/React.createElement("div", null, "\u672C\u671F\u6210\u4EA4\u989D: ", /*#__PURE__*/React.createElement("b", null, "$", ooAmount.toFixed(0))), /*#__PURE__*/React.createElement("div", null, "\u5F85\u4ED8\u6B3E: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--warn)'
    }
  }, ooPending)))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl p-3",
    style: {
      border: '1px solid #fde68a',
      background: '#fffbeb'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base"
  }, "\uD83C\uDFA8"), /*#__PURE__*/React.createElement("span", {
    className: "text-[12px] font-bold"
  }, "\u5B9A\u5236\u54A8\u8BE2 Custom")), /*#__PURE__*/React.createElement("div", {
    className: "font-mono font-bold text-2xl tabular-nums mb-2",
    style: {
      color: '#b45309'
    }
  }, ciNew + ciQuoted + ciProducing), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] space-y-0.5",
    style: {
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u672C\u671F\u65B0\u589E: ", /*#__PURE__*/React.createElement("b", null, ciInRange.length), " \u5355"), /*#__PURE__*/React.createElement("div", null, "\u65B0\u8BE2\u5355: ", /*#__PURE__*/React.createElement("b", null, ciNew), " \xB7 \u5DF2\u62A5\u4EF7: ", /*#__PURE__*/React.createElement("b", null, ciQuoted)), /*#__PURE__*/React.createElement("div", null, "\u751F\u4EA7\u4E2D: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--info)'
    }
  }, ciProducing)))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-xl p-3",
    style: {
      border: '1px solid #d8b4fe',
      background: '#faf5ff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-1.5 mb-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-base"
  }, "\uD83D\uDCF8"), /*#__PURE__*/React.createElement("span", {
    className: "text-[12px] font-bold"
  }, "\u5B9E\u62CD\u6838\u5B9E Photo")), /*#__PURE__*/React.createElement("div", {
    className: "font-mono font-bold text-2xl tabular-nums mb-2",
    style: {
      color: '#7e22ce'
    }
  }, pvPending + pvSent), /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] space-y-0.5",
    style: {
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u672C\u671F\u65B0\u589E: ", /*#__PURE__*/React.createElement("b", null, pvInRange.length), " \u4E2A"), /*#__PURE__*/React.createElement("div", null, "\u5F85\u53D1: ", /*#__PURE__*/React.createElement("b", null, pvPending), " \xB7 \u5DF2\u53D1\u5F85\u56DE: ", /*#__PURE__*/React.createElement("b", null, pvSent)), /*#__PURE__*/React.createElement("div", null, "\u88AB\u62D2: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--bad)'
    }
  }, pvRejected))))));
};

// ============================================================
// 🆕 fix80: KPI 卡详情弹窗 — 4 种类型(records/employees/chargebacks/tickets)
// ============================================================
var KpiDetailModal = function KpiDetailModal(_ref13) {
  var _kpi$records;
  var kpi = _ref13.kpi,
    employees = _ref13.employees,
    onClose = _ref13.onClose,
    onClickRecord = _ref13.onClickRecord;
  var _useState39 = useState(''),
    _useState40 = _slicedToArray(_useState39, 2),
    search = _useState40[0],
    setSearch = _useState40[1];
  var today = todayISO();

  // 通用筛选
  var filterBySearch = function filterBySearch(items, getText) {
    var q = search.trim().toLowerCase();
    if (!q) return items;
    return items.filter(function (it) {
      return getText(it).toLowerCase().includes(q);
    });
  };
  var empName = function empName(id) {
    var _employees$find3;
    return ((_employees$find3 = employees.find(function (e) {
      return e.id === id;
    })) === null || _employees$find3 === void 0 ? void 0 : _employees$find3.name) || '?';
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.5)',
      zIndex: 1100,
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
      borderRadius: 16,
      maxWidth: 1000,
      width: '100%',
      maxHeight: '88vh',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 24px 60px rgba(0,0,0,.25)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 24px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderLeft: "6px solid ".concat(kpi.accent)
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 18,
      fontWeight: 600
    }
  }, kpi.title), /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-bold",
    style: {
      fontSize: 24,
      color: kpi.accent
    }
  }, kpi.type === 'tickets' ? kpi.tickets.offline.length + kpi.tickets.custom.length + kpi.tickets.photo.length : ((_kpi$records = kpi.records) === null || _kpi$records === void 0 ? void 0 : _kpi$records.length) || 0), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u641C\u7D22\u5BA2\u6237 / \u8BA2\u5355\u53F7 / \u5907\u6CE8...",
    style: {
      flex: 1,
      marginLeft: 12,
      padding: '6px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn-sec",
    style: {
      padding: '5px 14px'
    }
  }, "\u2715 \u5173\u95ED")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '12px 0'
    }
  }, kpi.type === 'records' && /*#__PURE__*/React.createElement(KpiRecordsTable, {
    records: filterBySearch(kpi.records, function (r) {
      return "".concat(r.customer || '', " ").concat(r.orderRef || '', " ").concat(r.note || '', " ").concat(r.category || '');
    }),
    employees: employees,
    onClickRecord: onClickRecord,
    today: today
  }), kpi.type === 'employees' && /*#__PURE__*/React.createElement(KpiEmployeesTable, {
    items: filterBySearch(kpi.records, function (e) {
      return "".concat(e.name || '', " ").concat(e.alias || '');
    }),
    onClickRecord: onClickRecord
  }), kpi.type === 'chargebacks' && /*#__PURE__*/React.createElement(KpiChargebacksTable, {
    records: filterBySearch(kpi.records, function (c) {
      return "".concat(c.customer_name || '', " ").concat(c.customer_email || '', " ").concat(c.order_no || '', " ").concat(c.notes || '');
    }),
    empName: empName
  }), kpi.type === 'tickets' && /*#__PURE__*/React.createElement(KpiTicketsTable, {
    tickets: kpi.tickets,
    search: search,
    empName: empName
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 24px',
      borderTop: '1px solid var(--line)',
      background: 'var(--bg-soft)',
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDCA1 \u70B9\u51FB\u4EFB\u610F\u884C\u67E5\u770B\u5B8C\u6574\u5185\u5BB9 \xB7 ESC \u5173\u95ED")));
};

// 客服记录表(records 类型)
var KpiRecordsTable = function KpiRecordsTable(_ref14) {
  var records = _ref14.records,
    employees = _ref14.employees,
    onClickRecord = _ref14.onClickRecord,
    today = _ref14.today;
  if (records.length === 0) return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 60,
      color: 'var(--ink-4)',
      fontSize: 13
    }
  }, "\u65E0\u5339\u914D\u8BB0\u5F55");
  return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u5BA2\u6237"), /*#__PURE__*/React.createElement("th", null, "\u7F51\u7AD9"), /*#__PURE__*/React.createElement("th", null, "\u8BA2\u5355\u53F7"), /*#__PURE__*/React.createElement("th", null, "\u5206\u7C7B"), /*#__PURE__*/React.createElement("th", null, "\u5BA2\u670D"), /*#__PURE__*/React.createElement("th", null, "\u72B6\u6001"), /*#__PURE__*/React.createElement("th", null, "\u65E5\u671F"), /*#__PURE__*/React.createElement("th", null, "\u8DDF\u8FDB\u65E5"))), /*#__PURE__*/React.createElement("tbody", null, records.slice(0, 300).map(function (r) {
    var emp = employees.find(function (e) {
      return e.id === r.ownerId;
    });
    var isOverdue = r.nextFollowUp && r.nextFollowUp < today;
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id,
      onClick: function onClick() {
        return onClickRecord(r);
      },
      style: {
        cursor: 'pointer'
      },
      onMouseEnter: function onMouseEnter(e) {
        return e.currentTarget.style.background = 'var(--accent-soft)';
      },
      onMouseLeave: function onMouseLeave(e) {
        return e.currentTarget.style.background = '';
      }
    }, /*#__PURE__*/React.createElement("td", {
      className: "text-[12px]"
    }, r.customer || /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)'
      }
    }, "\u2014")), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] px-1.5 py-0.5 rounded",
      style: {
        background: 'var(--bg-elevated)'
      }
    }, r.site || '—')), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px] font-mono",
      style: {
        color: 'var(--ink-3)'
      }
    }, r.orderRef || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px]"
    }, r.category || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px]"
    }, emp ? emp.name : '—'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(StatusTag, {
      status: r.status
    })), /*#__PURE__*/React.createElement("td", {
      className: "text-[10px]",
      style: {
        color: 'var(--ink-4)'
      }
    }, r.date), /*#__PURE__*/React.createElement("td", null, !r.nextFollowUp ? /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-bold",
      style: {
        color: '#b45309'
      }
    }, "\uD83D\uDFE1 \u672A\u8BBE") : /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-mono",
      style: {
        color: isOverdue ? 'var(--bad)' : 'var(--ink-3)',
        fontWeight: isOverdue ? 600 : 400
      }
    }, isOverdue && '🔴 ', r.nextFollowUp)));
  })));
};

// 活跃客服表
var KpiEmployeesTable = function KpiEmployeesTable(_ref15) {
  var items = _ref15.items,
    onClickRecord = _ref15.onClickRecord;
  var _useState41 = useState(null),
    _useState42 = _slicedToArray(_useState41, 2),
    expanded = _useState42[0],
    setExpanded = _useState42[1];
  if (items.length === 0) return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 60,
      color: 'var(--ink-4)',
      fontSize: 13
    }
  }, "\u65E0\u6D3B\u8DC3\u5BA2\u670D");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px'
    }
  }, items.map(function (e, idx) {
    var isOpen = expanded === e.id;
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      style: {
        borderBottom: '1px solid var(--line-soft)',
        padding: '10px 4px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return setExpanded(isOpen ? null : e.id);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "font-mono text-[11px] font-bold",
      style: {
        color: idx < 3 ? 'var(--gold)' : 'var(--ink-4)',
        width: 24
      }
    }, "#", idx + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[13px] font-bold"
    }, e.name, e.alias ? " \xB7 ".concat(e.alias) : ''), /*#__PURE__*/React.createElement("div", {
      className: "text-[11px] flex gap-2",
      style: {
        color: 'var(--ink-3)'
      }
    }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCE7 \u5904\u7406 ", /*#__PURE__*/React.createElement("b", null, e.total)), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--good)'
      }
    }, "\u2713 ", e.resolved), e.unresolved > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--warn)'
      }
    }, "\u23F3 ", e.unresolved), e.overdue > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--bad)'
      }
    }, "\uD83D\uDD34 ", e.overdue), e.noFollow > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#b45309'
      }
    }, "\uD83D\uDFE1 ", e.noFollow), /*#__PURE__*/React.createElement("span", null, "\xB7 \u65F6\u957F ", fmtDuration(e.mins)))), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)'
      }
    }, isOpen ? '▾' : '▸')), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 8,
        paddingLeft: 36,
        maxHeight: 280,
        overflowY: 'auto'
      }
    }, e.records.map(function (r) {
      return /*#__PURE__*/React.createElement("div", {
        key: r.id,
        onClick: function onClick() {
          return onClickRecord(r);
        },
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 10px',
          borderRadius: 6,
          cursor: 'pointer',
          fontSize: 11,
          borderBottom: '1px solid var(--line-soft)'
        },
        onMouseEnter: function onMouseEnter(ev) {
          return ev.currentTarget.style.background = 'var(--accent-soft)';
        },
        onMouseLeave: function onMouseLeave(ev) {
          return ev.currentTarget.style.background = '';
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "font-bold"
      }, r.customer || '(无客户)'), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--ink-3)'
        }
      }, r.orderRef || ''), /*#__PURE__*/React.createElement("span", {
        style: {
          background: 'var(--bg-elevated)',
          padding: '1px 6px',
          borderRadius: 4,
          fontSize: 10
        }
      }, r.category), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1
        }
      }), /*#__PURE__*/React.createElement(StatusTag, {
        status: r.status
      }));
    })));
  }));
};

// 拒付表
var KpiChargebacksTable = function KpiChargebacksTable(_ref16) {
  var records = _ref16.records,
    empName = _ref16.empName;
  if (records.length === 0) return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 60,
      color: 'var(--ink-4)',
      fontSize: 13
    }
  }, "\u65E0\u5339\u914D\u62D2\u4ED8\u8BB0\u5F55");
  var statusColor = function statusColor(s) {
    return {
      pending: '#92400e',
      evidence: '#1e40af',
      submitted: '#7e22ce',
      won: '#15803d',
      lost: '#b91c1c',
      closed: '#6e6e73'
    }[s] || '#6e6e73';
  };
  var statusLabel = function statusLabel(s) {
    return {
      pending: '待处理',
      evidence: '收集证据',
      submitted: '已提交',
      won: '已赢',
      lost: '已输',
      closed: '已关闭'
    }[s] || s;
  };
  return /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u5BA2\u6237"), /*#__PURE__*/React.createElement("th", null, "\u8BA2\u5355\u53F7"), /*#__PURE__*/React.createElement("th", null, "\u91D1\u989D"), /*#__PURE__*/React.createElement("th", null, "\u72B6\u6001"), /*#__PURE__*/React.createElement("th", null, "\u8D1F\u8D23"), /*#__PURE__*/React.createElement("th", null, "\u622A\u6B62"), /*#__PURE__*/React.createElement("th", null, "\u521B\u5EFA"))), /*#__PURE__*/React.createElement("tbody", null, records.slice(0, 300).map(function (c) {
    var isOverdue = c.deadline && c.deadline < todayISO();
    return /*#__PURE__*/React.createElement("tr", {
      key: c.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "text-[12px]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-bold"
    }, c.customer_name || '—'), c.customer_email && /*#__PURE__*/React.createElement("div", {
      className: "text-[10px]",
      style: {
        color: 'var(--ink-4)'
      }
    }, c.customer_email)), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px] font-mono",
      style: {
        color: 'var(--ink-3)'
      }
    }, c.order_no || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px] font-mono font-bold",
      style: {
        color: 'var(--bad)'
      }
    }, "$", c.amount || '0'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-bold px-1.5 py-0.5 rounded",
      style: {
        background: statusColor(c.status) + '22',
        color: statusColor(c.status)
      }
    }, statusLabel(c.status))), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px]"
    }, empName(c.created_by)), /*#__PURE__*/React.createElement("td", {
      className: "text-[10px] font-mono",
      style: {
        color: isOverdue ? 'var(--bad)' : 'var(--ink-3)',
        fontWeight: isOverdue ? 600 : 400
      }
    }, isOverdue && '🔴 ', c.deadline || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[10px]",
      style: {
        color: 'var(--ink-4)'
      }
    }, (c.created_at || '').slice(0, 10)));
  })));
};

// 工单表(线下/定制/实拍)
var KpiTicketsTable = function KpiTicketsTable(_ref17) {
  var tickets = _ref17.tickets,
    search = _ref17.search,
    empName = _ref17.empName;
  var q = search.trim().toLowerCase();
  var filterFn = function filterFn(text) {
    return !q || text.toLowerCase().includes(q);
  };
  var oo = tickets.offline.filter(function (o) {
    return filterFn("".concat(o.customer_name || '', " ").concat(o.customer_email || '', " ").concat(o.order_no || ''));
  });
  var ci = tickets.custom.filter(function (c) {
    return filterFn("".concat(c.customer_name || '', " ").concat(c.customer_email || '', " ").concat(c.order_no || '', " ").concat(c.requirement || ''));
  });
  var pv = tickets.photo.filter(function (p) {
    return filterFn("".concat(p.sku || '', " ").concat(p.product_name || '', " ").concat(p.supplier_name || ''));
  });
  if (oo.length === 0 && ci.length === 0 && pv.length === 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'center',
        padding: 60,
        color: 'var(--ink-4)',
        fontSize: 13
      }
    }, "\u65E0\u5339\u914D\u5DE5\u5355");
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 24px'
    }
  }, oo.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[12px] font-bold mb-2",
    style: {
      color: '#4338ca'
    }
  }, "\uD83D\uDCB3 \u7EBF\u4E0B\u5355(", oo.length, ")"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u5BA2\u6237"), /*#__PURE__*/React.createElement("th", null, "\u8BA2\u5355\u53F7"), /*#__PURE__*/React.createElement("th", null, "\u7F51\u7AD9"), /*#__PURE__*/React.createElement("th", null, "\u91D1\u989D"), /*#__PURE__*/React.createElement("th", null, "\u72B6\u6001"), /*#__PURE__*/React.createElement("th", null, "\u8D1F\u8D23"))), /*#__PURE__*/React.createElement("tbody", null, oo.slice(0, 100).map(function (o) {
    return /*#__PURE__*/React.createElement("tr", {
      key: o.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "text-[12px]"
    }, o.customer_name || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px] font-mono"
    }, o.order_no || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[10px]"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-1.5 py-0.5 rounded",
      style: {
        background: 'var(--bg-elevated)'
      }
    }, o.site || '—')), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px] font-mono font-bold"
    }, o.payment_currency || '$', o.payment_amount || 0), /*#__PURE__*/React.createElement("td", {
      className: "text-[10px]"
    }, o.status), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px]"
    }, empName(o.created_by)));
  })))), ci.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[12px] font-bold mb-2",
    style: {
      color: '#b45309'
    }
  }, "\uD83C\uDFA8 \u5B9A\u5236\u54A8\u8BE2(", ci.length, ")"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u5BA2\u6237"), /*#__PURE__*/React.createElement("th", null, "\u8BA2\u5355/\u62A5\u4EF7"), /*#__PURE__*/React.createElement("th", null, "\u7F51\u7AD9"), /*#__PURE__*/React.createElement("th", null, "\u9636\u6BB5"), /*#__PURE__*/React.createElement("th", null, "\u9700\u6C42"), /*#__PURE__*/React.createElement("th", null, "\u8D1F\u8D23"))), /*#__PURE__*/React.createElement("tbody", null, ci.slice(0, 100).map(function (c) {
    return /*#__PURE__*/React.createElement("tr", {
      key: c.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "text-[12px]"
    }, c.customer_name || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px] font-mono"
    }, c.order_no || c.quote_no || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[10px]"
    }, /*#__PURE__*/React.createElement("span", {
      className: "px-1.5 py-0.5 rounded",
      style: {
        background: 'var(--bg-elevated)'
      }
    }, c.site || '—')), /*#__PURE__*/React.createElement("td", {
      className: "text-[10px]"
    }, c.stage), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px] truncate",
      style: {
        maxWidth: 240,
        color: 'var(--ink-3)'
      }
    }, c.requirement || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px]"
    }, empName(c.created_by)));
  })))), pv.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[12px] font-bold mb-2",
    style: {
      color: '#7e22ce'
    }
  }, "\uD83D\uDCF8 \u5B9E\u62CD\u6838\u5B9E(", pv.length, ")"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "SKU"), /*#__PURE__*/React.createElement("th", null, "\u4EA7\u54C1"), /*#__PURE__*/React.createElement("th", null, "\u4F9B\u5E94\u5546"), /*#__PURE__*/React.createElement("th", null, "\u72B6\u6001"), /*#__PURE__*/React.createElement("th", null, "\u5DEE\u5F02"), /*#__PURE__*/React.createElement("th", null, "\u8D1F\u8D23"))), /*#__PURE__*/React.createElement("tbody", null, pv.slice(0, 100).map(function (p) {
    return /*#__PURE__*/React.createElement("tr", {
      key: p.id
    }, /*#__PURE__*/React.createElement("td", {
      className: "text-[11px] font-mono"
    }, p.sku || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[12px]"
    }, p.product_name || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px]",
      style: {
        color: 'var(--ink-3)'
      }
    }, p.supplier_name || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[10px]"
    }, p.status), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px] truncate",
      style: {
        maxWidth: 240,
        color: 'var(--ink-3)'
      }
    }, p.difference_detail || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px]"
    }, empName(p.created_by)));
  })))));
};

// ============================================================
// 记录详情弹窗
// ============================================================
var RecordDetailModal = function RecordDetailModal(_ref18) {
  var record = _ref18.record,
    employees = _ref18.employees,
    onClose = _ref18.onClose;
  var emp = employees.find(function (e) {
    return e.id === record.ownerId;
  });
  var r = record;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.4)',
      zIndex: 1000,
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
      borderRadius: 16,
      padding: 24,
      maxWidth: 680,
      width: '100%',
      maxHeight: '85vh',
      overflowY: 'auto',
      boxShadow: '0 24px 48px rgba(0,0,0,.2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between gap-4 mb-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap mb-1"
  }, /*#__PURE__*/React.createElement("span", {
    className: "font-display text-lg font-bold"
  }, r.customer || '(无客户名)'), /*#__PURE__*/React.createElement(StatusTag, {
    status: r.status
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] px-1.5 py-0.5 rounded",
    style: {
      background: 'var(--bg-elevated)'
    }
  }, r.site), r.difficulty && /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] px-1.5 py-0.5 rounded",
    style: {
      background: 'var(--accent-soft)',
      color: 'var(--accent)'
    }
  }, r.difficulty)), /*#__PURE__*/React.createElement("div", {
    className: "text-[12px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, r.category, " \xB7 ", r.orderRef || '无订单号')), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn-sec",
    style: {
      padding: '4px 12px'
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-2 gap-3 mb-4 text-[11px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "\u5BA2\u670D:"), " ", emp ? emp.name : '?'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "\u65E5\u671F:"), " ", r.date), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "\u5F00\u59CB:"), " ", r.startTime || '-', " \u2192 ", r.endTime || '-'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "\u65F6\u957F:"), " ", fmtDuration(r.durationMin || 0)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "\u4E0B\u6B21\u8DDF\u8FDB:"), " ", r.nextFollowUp || /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#b45309'
    }
  }, "\uD83D\uDFE1 \u672A\u8BBE(\u4E3B\u7BA1\u8BF7\u63D0\u9192\u5BA2\u670D\u8865\u4E0A)")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "\u7F51\u7AD9:"), " ", r.website || r.site)), r.note && /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-bold mb-1",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDCDD \u5907\u6CE8"), /*#__PURE__*/React.createElement("div", {
    className: "text-[12px] p-3 rounded whitespace-pre-wrap",
    style: {
      background: 'var(--bg-soft)'
    }
  }, r.note)), Array.isArray(r.followUps) && r.followUps.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-bold mb-1",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDCAC \u8DDF\u8FDB\u8BB0\u5F55 (", r.followUps.length, ")"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-1.5 max-h-48 overflow-y-auto"
  }, r.followUps.map(function (f, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "text-[11px] p-2 rounded",
      style: {
        background: 'var(--bg-soft)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-[10px]",
      style: {
        color: 'var(--ink-4)'
      }
    }, f.at || f.time || ''), /*#__PURE__*/React.createElement("div", {
      className: "whitespace-pre-wrap mt-0.5"
    }, f.text || f.content || ''));
  }))), Array.isArray(r.screenshots) && r.screenshots.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-bold mb-1",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDCF7 \u622A\u56FE (", r.screenshots.length, ")"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 flex-wrap"
  }, r.screenshots.map(function (s, i) {
    return /*#__PURE__*/React.createElement("img", {
      key: i,
      src: typeof s === 'string' ? s : s.url || s.data || '',
      alt: "",
      style: {
        maxWidth: 120,
        maxHeight: 120,
        borderRadius: 6,
        border: '1px solid var(--line)',
        cursor: 'zoom-in'
      },
      onClick: function onClick(e) {
        window.open(e.target.src, '_blank');
      }
    });
  })))));
};

// ============================================================
// 回收站
// ============================================================
var TrashModule = function TrashModule(_ref19) {
  var user = _ref19.user,
    employees = _ref19.employees,
    records = _ref19.records,
    setRecords = _ref19.setRecords,
    toast = _ref19.toast;
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var deleted = records.filter(function (r) {
    return r.deleted;
  });

  // 员工只能看自己删除的
  var visible = isAdmin ? deleted : deleted.filter(function (r) {
    return r.deletedBy === user.id || r.ownerId === user.id;
  });
  var restore = function restore(id) {
    setRecords(function (prev) {
      return prev.map(function (r) {
        return r.id === id ? _objectSpread(_objectSpread({}, r), {}, {
          deleted: false,
          deletedAt: null,
          deletedBy: null
        }) : r;
      });
    });
    toast('✓ 已恢复');
  };
  var permaDelete = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(id) {
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (isAdmin) {
              _context3.n = 1;
              break;
            }
            toast('⚠ 仅主管可永久删除');
            return _context3.a(2);
          case 1:
            _context3.n = 2;
            return wsConfirm('确认永久删除？此操作不可撤销！');
          case 2:
            if (_context3.v) {
              _context3.n = 3;
              break;
            }
            return _context3.a(2);
          case 3:
            setRecords(function (prev) {
              return prev.filter(function (r) {
                return r.id !== id;
              });
            });
            toast('✗ 已永久删除');
          case 4:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function permaDelete(_x) {
      return _ref20.apply(this, arguments);
    };
  }();
  var clearAll = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            if (isAdmin) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2);
          case 1:
            _context4.n = 2;
            return wsConfirm("\u786E\u8BA4\u6C38\u4E45\u5220\u9664\u5168\u90E8 ".concat(deleted.length, " \u6761\u8BB0\u5F55\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\uFF01"));
          case 2:
            if (_context4.v) {
              _context4.n = 3;
              break;
            }
            return _context4.a(2);
          case 3:
            setRecords(function (prev) {
              return prev.filter(function (r) {
                return !r.deleted;
              });
            });
            toast('✗ 已清空回收站');
          case 4:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function clearAll() {
      return _ref21.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-5 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-3 flex-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    className: "w-5 h-5",
    style: {
      color: 'var(--ink-3)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "font-display text-base font-bold"
  }, "\u56DE\u6536\u7AD9"), /*#__PURE__*/React.createElement("span", {
    className: "tag tag-neutral"
  }, visible.length, " \u6761")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[11px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, isAdmin ? '主管视角 · 可恢复或永久删除全部记录' : '仅显示你删除的记录 · 永久删除需主管操作'), isAdmin && visible.length > 0 && /*#__PURE__*/React.createElement("button", {
    className: "btn-danger",
    onClick: clearAll
  }, "\u6E05\u7A7A\u56DE\u6536\u7AD9")))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto scrollbar-thin"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "\u539F\u65E5\u671F"), /*#__PURE__*/React.createElement("th", null, "\u5458\u5DE5"), /*#__PURE__*/React.createElement("th", null, "\u5BA2\u6237"), /*#__PURE__*/React.createElement("th", null, "\u4E8B\u9879"), /*#__PURE__*/React.createElement("th", null, "\u5907\u6CE8"), /*#__PURE__*/React.createElement("th", null, "\u5220\u9664\u65F6\u95F4"), /*#__PURE__*/React.createElement("th", null, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, visible.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "7",
    style: {
      textAlign: 'center',
      padding: '30px',
      color: 'var(--ink-3)'
    }
  }, "\u56DE\u6536\u7AD9\u4E3A\u7A7A")) : visible.map(function (r) {
    var owner = employees.find(function (e) {
      return e.id === r.ownerId;
    });
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id
    }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "font-mono text-xs"
    }, r.date)), /*#__PURE__*/React.createElement("td", null, (owner === null || owner === void 0 ? void 0 : owner.name) || '—'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "text-xs"
    }, r.customer || '—')), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "tag tag-neutral"
    }, r.category || '—')), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "text-xs",
      style: {
        color: 'var(--ink-3)'
      }
    }, r.orderRef || r.note || '—')), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "font-mono text-[10px]",
      style: {
        color: 'var(--ink-4)'
      }
    }, r.deletedAt ? new Date(r.deletedAt).toLocaleString('zh-CN', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }) : '—')), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      className: "flex gap-1"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn-sec",
      onClick: function onClick() {
        return restore(r.id);
      },
      title: "\u6062\u590D"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "restore",
      className: "w-3 h-3 inline mr-1"
    }), "\u6062\u590D"), isAdmin && /*#__PURE__*/React.createElement("button", {
      className: "btn-danger",
      onClick: function onClick() {
        return permaDelete(r.id);
      },
      title: "\u6C38\u4E45\u5220\u9664"
    }, "\u6C38\u4E45\u5220\u9664"))));
  }))))));
};

// ============================================================
// 员工管理 (仅主管)
// ============================================================
// 🚨 拒付专人配置组件
// ============================================================
// 🛡 删除审批流程 - 防离职员工恶意删除
// ============================================================

// 判断是否当天数据
var isSameDay = function isSameDay(record) {
  var created = record.created_at || record.createdAt || record.create_time;
  if (!created) return false;
  var d = new Date(created);
  var today = new Date();
  return d.getFullYear() === today.getFullYear() && d.getMonth() === today.getMonth() && d.getDate() === today.getDate();
};

// 通用删除请求 - 替代直接 deleted=true
// 主管/老板:仍可直接删除(会有审计日志)
// 普通客服:必须走审批
var requestDelete = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(_ref22) {
    var user, tableName, moduleLabel, record, recordSummary, toast, onSuccess, isAdmin, isSuperAdmin, sameDay, isOwner, res, savedRow, actuallyDeleted, _yield$CLOUD$client$f, delErr, stillActive, _yield$CLOUD$client$f2, chk, chkErr, _yield$CLOUD$client$f3, chk2, _res, _savedRow, _yield$CLOUD$client$f4, _delErr, _reason, reason, _t3, _t4, _t5, _t6, _t7, _t8, _t9;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          user = _ref22.user, tableName = _ref22.tableName, moduleLabel = _ref22.moduleLabel, record = _ref22.record, recordSummary = _ref22.recordSummary, toast = _ref22.toast, onSuccess = _ref22.onSuccess;
          isAdmin = user.role === 'admin' || user.role === 'super_admin';
          isSuperAdmin = user.role === 'super_admin';
          sameDay = isSameDay(record);
          isOwner = record.created_by === user.id || record.ownerId === user.id; // 老板:直接删除(权限最大)
          if (!isSuperAdmin) {
            _context5.n = 21;
            break;
          }
          _context5.n = 1;
          return wsConfirm("\uD83D\uDC51 \u8001\u677F\u6743\u9650\u76F4\u63A5\u5220\u9664\n\n".concat(recordSummary, "\n\n\u786E\u8BA4\u5220\u9664? \u6B64\u64CD\u4F5C\u4F1A\u8BB0\u5F55\u5230\u5BA1\u8BA1\u65E5\u5FD7\u3002"));
        case 1:
          if (_context5.v) {
            _context5.n = 2;
            break;
          }
          return _context5.a(2, false);
        case 2:
          _context5.p = 2;
          _context5.n = 3;
          return CLOUD.upsert(tableName, _objectSpread(_objectSpread({}, record), {}, {
            deleted: true,
            updated_at: new Date().toISOString()
          }));
        case 3:
          res = _context5.v;
          if (!res) {
            _context5.n = 17;
            break;
          }
          // 🆕 fix9b: 验证 deleted=true 真的写入了 — 如果 CLOUD.upsert 的 schema-retry 把 deleted 字段剥离了(因为表没这一列),
          // upsert 会"成功"但记录其实没标记删除 → 刷新后又会回来。这种情况下提示用户跑 SQL 而不是冒充已删除。
          savedRow = Array.isArray(res) ? res[0] : res;
          actuallyDeleted = savedRow && savedRow.deleted === true;
          if (actuallyDeleted) {
            _context5.n = 5;
            break;
          }
          _context5.n = 4;
          return CLOUD.client.from(tableName)["delete"]().eq('id', record.id);
        case 4:
          _yield$CLOUD$client$f = _context5.v;
          delErr = _yield$CLOUD$client$f.error;
          if (!delErr) {
            _context5.n = 5;
            break;
          }
          alert("\u5220\u9664\u5931\u8D25: ".concat(delErr.message || delErr, "\n\n(\u8F6F\u5220\u9664\u672A\u751F\u6548\u3001\u786C\u5220\u9664\u4E5F\u5931\u8D25 \u2014 \u53EF\u80FD\u662F RLS \u6743\u9650\u6216\u8868\u540D\u95EE\u9898)"));
          return _context5.a(2, false);
        case 5:
          // 🆕 真删验证:确认这条真的没了 / 真的标记 deleted 了,否则别假报"已删除"
          stillActive = false;
          _context5.p = 6;
          _context5.n = 7;
          return CLOUD.client.from(tableName).select('id,deleted').eq('id', record.id).maybeSingle();
        case 7:
          _yield$CLOUD$client$f2 = _context5.v;
          chk = _yield$CLOUD$client$f2.data;
          chkErr = _yield$CLOUD$client$f2.error;
          if (!chkErr) {
            _context5.n = 9;
            break;
          }
          _context5.n = 8;
          return CLOUD.client.from(tableName).select('id').eq('id', record.id).maybeSingle();
        case 8:
          _yield$CLOUD$client$f3 = _context5.v;
          chk2 = _yield$CLOUD$client$f3.data;
          stillActive = !!(chk2 && chk2.id);
          _context5.n = 10;
          break;
        case 9:
          stillActive = !!(chk && chk.deleted !== true);
        case 10:
          _context5.n = 12;
          break;
        case 11:
          _context5.p = 11;
          _t3 = _context5.v;
          stillActive = false;
        case 12:
          if (!stillActive) {
            _context5.n = 13;
            break;
          }
          alert("\u26A0 \u5220\u9664\u6CA1\u6709\u751F\u6548(\u6570\u636E\u5E93\u91CC\u8FD9\u6761\u8FD8\u5728)\n\n\u6700\u53EF\u80FD\u539F\u56E0:".concat(tableName, " \u8868\u7F3A\u5C11 deleted \u5217,\u4E14 RLS \u4E0D\u5141\u8BB8\u524D\u7AEF\u76F4\u63A5\u5220\u884C \u2192 \u5220\u9664\u88AB\u9759\u9ED8\u62E6\u622A\u3002\n\n\u89E3\u51B3(\u5728 Supabase \u9879\u76EE kwrajryhwyytkjkkidor \u7684 SQL Editor \u8DD1\u4E00\u6B21):\nALTER TABLE ").concat(tableName, " ADD COLUMN IF NOT EXISTS deleted boolean NOT NULL DEFAULT false;\n\n\u8DD1\u5B8C\u5F3A\u5237\u9875\u9762\u518D\u5220 \u2014 \u4F1A\u8D70\u8F6F\u5220\u9664(\u53EF\u5728\u56DE\u6536\u7AD9\u6062\u590D)\u3002"));
          return _context5.a(2, false);
        case 13:
          _context5.p = 13;
          _context5.n = 14;
          return CLOUD.client.from('delete_requests').insert({
            table_name: tableName,
            record_id: String(record.id),
            record_summary: recordSummary,
            module_label: moduleLabel,
            reason: '老板直接删除',
            requested_by: user.id,
            requested_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
            is_same_day: sameDay,
            created_at_original: record.created_at || null,
            approver_role: 'super_admin',
            status: 'approved',
            approver_id: user.id,
            approver_name: user.name,
            approved_at: new Date().toISOString(),
            approval_note: '总管直接删除(无需审批)'
          });
        case 14:
          _context5.n = 16;
          break;
        case 15:
          _context5.p = 15;
          _t4 = _context5.v;
        case 16:
          toast('✓ 已删除');
          if (onSuccess) onSuccess();
          return _context5.a(2, true);
        case 17:
          // 🆕 fix8: 之前这里默默 return false,用户看不到错误
          // 实际可能是:1) 数据库无 deleted 列(aftersales/refills/refunds 旧 schema) 2) RLS 拒绝 3) 列名拼写错
          alertSaveError('删除');
          return _context5.a(2, false);
        case 18:
          _context5.n = 20;
          break;
        case 19:
          _context5.p = 19;
          _t5 = _context5.v;
          alert('删除失败: ' + _t5.message);
        case 20:
          return _context5.a(2, false);
        case 21:
          if (!isAdmin) {
            _context5.n = 38;
            break;
          }
          if (!sameDay) {
            _context5.n = 33;
            break;
          }
          _context5.n = 22;
          return wsConfirm("\u2B50 \u4E3B\u7BA1\u5220\u9664\u5F53\u5929\u6570\u636E\n\n".concat(recordSummary, "\n\n\u786E\u8BA4\u5220\u9664?"));
        case 22:
          if (_context5.v) {
            _context5.n = 23;
            break;
          }
          return _context5.a(2, false);
        case 23:
          _context5.p = 23;
          _context5.n = 24;
          return CLOUD.upsert(tableName, _objectSpread(_objectSpread({}, record), {}, {
            deleted: true,
            updated_at: new Date().toISOString()
          }));
        case 24:
          _res = _context5.v;
          if (!_res) {
            _context5.n = 30;
            break;
          }
          // 🆕 软删除没真正写入(表无 deleted 列,如 chargebacks)→ 自动硬删除
          _savedRow = Array.isArray(_res) ? _res[0] : _res;
          if (_savedRow && _savedRow.deleted === true) {
            _context5.n = 26;
            break;
          }
          _context5.n = 25;
          return CLOUD.client.from(tableName)["delete"]().eq('id', record.id);
        case 25:
          _yield$CLOUD$client$f4 = _context5.v;
          _delErr = _yield$CLOUD$client$f4.error;
          if (!_delErr) {
            _context5.n = 26;
            break;
          }
          alert("\u5220\u9664\u5931\u8D25: ".concat(_delErr.message || _delErr));
          return _context5.a(2, false);
        case 26:
          _context5.p = 26;
          _context5.n = 27;
          return CLOUD.client.from('delete_requests').insert({
            table_name: tableName,
            record_id: String(record.id),
            record_summary: recordSummary,
            module_label: moduleLabel,
            reason: '主管删除当天数据',
            requested_by: user.id,
            requested_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
            is_same_day: true,
            created_at_original: record.created_at || null,
            approver_role: 'admin',
            status: 'approved',
            approver_id: user.id,
            approver_name: user.name,
            approved_at: new Date().toISOString(),
            approval_note: '主管直接删除当天数据'
          });
        case 27:
          _context5.n = 29;
          break;
        case 28:
          _context5.p = 28;
          _t6 = _context5.v;
        case 29:
          toast('✓ 已删除');
          if (onSuccess) onSuccess();
          return _context5.a(2, true);
        case 30:
          _context5.n = 32;
          break;
        case 31:
          _context5.p = 31;
          _t7 = _context5.v;
          alert('删除失败: ' + _t7.message);
        case 32:
          return _context5.a(2, false);
        case 33:
          _context5.n = 34;
          return wsPrompt("\uD83D\uDCDC \u5220\u9664\u5386\u53F2\u6570\u636E\u9700\u8981\u8001\u677F\u5BA1\u6279\n\n".concat(recordSummary, "\n\n\u8BF7\u586B\u5199\u5220\u9664\u7406\u7531:"));
        case 34:
          _reason = _context5.v;
          if (!(!_reason || !_reason.trim())) {
            _context5.n = 35;
            break;
          }
          return _context5.a(2, false);
        case 35:
          _context5.p = 35;
          _context5.n = 36;
          return CLOUD.client.from('delete_requests').insert({
            table_name: tableName,
            record_id: String(record.id),
            record_summary: recordSummary,
            module_label: moduleLabel,
            reason: _reason.trim(),
            requested_by: user.id,
            requested_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
            is_same_day: false,
            created_at_original: record.created_at || null,
            approver_role: 'super_admin',
            status: 'pending'
          });
        case 36:
          toast('✓ 已提交老板审批,等待批准');
          return _context5.a(2, true);
        case 37:
          _context5.p = 37;
          _t8 = _context5.v;
          alert('提交失败: ' + _t8.message);
          return _context5.a(2, false);
        case 38:
          if (isOwner) {
            _context5.n = 39;
            break;
          }
          alert('❌ 你不能删除别人的数据');
          return _context5.a(2, false);
        case 39:
          if (sameDay) {
            _context5.n = 40;
            break;
          }
          alert('❌ 历史数据(非当天)只有主管/老板能删除\n\n请联系主管');
          return _context5.a(2, false);
        case 40:
          _context5.n = 41;
          return wsPrompt("\uD83D\uDCCB \u7533\u8BF7\u5220\u9664\u5F53\u5929\u6570\u636E(\u9700\u4E3B\u7BA1\u6279\u51C6)\n\n".concat(recordSummary, "\n\n\u8BF7\u586B\u5199\u5220\u9664\u7406\u7531:"));
        case 41:
          reason = _context5.v;
          if (!(!reason || !reason.trim())) {
            _context5.n = 42;
            break;
          }
          return _context5.a(2, false);
        case 42:
          _context5.p = 42;
          _context5.n = 43;
          return CLOUD.client.from('delete_requests').insert({
            table_name: tableName,
            record_id: String(record.id),
            record_summary: recordSummary,
            module_label: moduleLabel,
            reason: reason.trim(),
            requested_by: user.id,
            requested_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
            is_same_day: true,
            created_at_original: record.created_at || null,
            approver_role: 'admin',
            status: 'pending'
          });
        case 43:
          toast('✓ 删除申请已提交,等待主管批准');
          return _context5.a(2, true);
        case 44:
          _context5.p = 44;
          _t9 = _context5.v;
          alert('提交失败: ' + _t9.message);
          return _context5.a(2, false);
      }
    }, _callee5, null, [[42, 44], [35, 37], [26, 28], [23, 31], [13, 15], [6, 11], [2, 19]]);
  }));
  return function requestDelete(_x2) {
    return _ref23.apply(this, arguments);
  };
}();

// 📋 删除审批中心 - 主管/老板用
var DeleteApprovalCenter = function DeleteApprovalCenter(_ref24) {
  var user = _ref24.user,
    toast = _ref24.toast;
  var _useState43 = useState([]),
    _useState44 = _slicedToArray(_useState43, 2),
    list = _useState44[0],
    setList = _useState44[1];
  var _useState45 = useState(true),
    _useState46 = _slicedToArray(_useState45, 2),
    loading = _useState46[0],
    setLoading = _useState46[1];
  var _useState47 = useState('pending'),
    _useState48 = _slicedToArray(_useState47, 2),
    filterStatus = _useState48[0],
    setFilterStatus = _useState48[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var isSuperAdmin = user.role === 'super_admin';
  var load = /*#__PURE__*/function () {
    var _ref25 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var data, _t0;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            setLoading(true);
            _context6.p = 1;
            _context6.n = 2;
            return CLOUD.list('delete_requests', {
              order: {
                col: 'requested_at',
                asc: false
              },
              limit: 500
            });
          case 2:
            data = _context6.v;
            setList(data || []);
            STORE.set('delete_requests_cache', data || []);
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t0 = _context6.v;
            toast('❌ 加载失败: ' + _t0.message);
          case 4:
            setLoading(false);
          case 5:
            return _context6.a(2);
        }
      }, _callee6, null, [[1, 3]]);
    }));
    return function load() {
      return _ref25.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
  }, []);

  // 当前用户能批准的请求
  var filtered = useMemo(function () {
    var l = list;
    // 主管:能批准 approver_role=admin
    // 老板:能批准所有
    if (!isSuperAdmin) {
      l = l.filter(function (r) {
        return r.approver_role === 'admin';
      });
    }
    if (filterStatus !== 'all') l = l.filter(function (r) {
      return r.status === filterStatus;
    });
    return l;
  }, [list, filterStatus, isSuperAdmin]);
  var approve = /*#__PURE__*/function () {
    var _ref26 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(req) {
      var note, _yield$CLOUD$client$f5, orig, _yield$CLOUD$client$f6, upErr, _yield$CLOUD$client$f7, delErr, _t1;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            _context7.n = 1;
            return wsPrompt("\u2705 \u6279\u51C6\u5220\u9664\n\n".concat(req.record_summary, "\n\n\u5907\u6CE8(\u53EF\u7559\u7A7A):"), '');
          case 1:
            note = _context7.v;
            if (!(note === null)) {
              _context7.n = 2;
              break;
            }
            return _context7.a(2);
          case 2:
            _context7.p = 2;
            _context7.n = 3;
            return CLOUD.client.from('delete_requests').update({
              status: 'approved',
              approver_id: user.id,
              approver_name: user.name + (user.alias ? ' ' + user.alias : ''),
              approved_at: new Date().toISOString(),
              approval_note: note || null
            }).eq('id', req.id);
          case 3:
            _context7.n = 4;
            return CLOUD.client.from(req.table_name).select('*').eq('id', req.record_id).single();
          case 4:
            _yield$CLOUD$client$f5 = _context7.v;
            orig = _yield$CLOUD$client$f5.data;
            if (!orig) {
              _context7.n = 7;
              break;
            }
            _context7.n = 5;
            return CLOUD.client.from(req.table_name).update({
              deleted: true,
              updated_at: new Date().toISOString()
            }).eq('id', req.record_id);
          case 5:
            _yield$CLOUD$client$f6 = _context7.v;
            upErr = _yield$CLOUD$client$f6.error;
            if (!upErr) {
              _context7.n = 7;
              break;
            }
            _context7.n = 6;
            return CLOUD.client.from(req.table_name)["delete"]().eq('id', req.record_id);
          case 6:
            _yield$CLOUD$client$f7 = _context7.v;
            delErr = _yield$CLOUD$client$f7.error;
            if (!delErr) {
              _context7.n = 7;
              break;
            }
            alert('删除失败: ' + (delErr.message || delErr));
            return _context7.a(2);
          case 7:
            toast('✓ 已批准并删除');
            load();
            _context7.n = 9;
            break;
          case 8:
            _context7.p = 8;
            _t1 = _context7.v;
            alert('操作失败: ' + _t1.message);
          case 9:
            return _context7.a(2);
        }
      }, _callee7, null, [[2, 8]]);
    }));
    return function approve(_x3) {
      return _ref26.apply(this, arguments);
    };
  }();
  var reject = /*#__PURE__*/function () {
    var _ref27 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(req) {
      var note, _t10;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.n = 1;
            return wsPrompt("\u274C \u62D2\u7EDD\u5220\u9664\n\n".concat(req.record_summary, "\n\n\u62D2\u7EDD\u7406\u7531:"), '');
          case 1:
            note = _context8.v;
            if (!(note === null)) {
              _context8.n = 2;
              break;
            }
            return _context8.a(2);
          case 2:
            if (note.trim()) {
              _context8.n = 3;
              break;
            }
            alert('请填写拒绝理由');
            return _context8.a(2);
          case 3:
            _context8.p = 3;
            _context8.n = 4;
            return CLOUD.client.from('delete_requests').update({
              status: 'rejected',
              approver_id: user.id,
              approver_name: user.name + (user.alias ? ' ' + user.alias : ''),
              approved_at: new Date().toISOString(),
              approval_note: note.trim()
            }).eq('id', req.id);
          case 4:
            toast('✓ 已拒绝');
            load();
            _context8.n = 6;
            break;
          case 5:
            _context8.p = 5;
            _t10 = _context8.v;
            alert('操作失败: ' + _t10.message);
          case 6:
            return _context8.a(2);
        }
      }, _callee8, null, [[3, 5]]);
    }));
    return function reject(_x4) {
      return _ref27.apply(this, arguments);
    };
  }();
  var pendingCount = list.filter(function (r) {
    return r.status === 'pending' && (isSuperAdmin || r.approver_role === 'admin');
  }).length;
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
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 18,
      fontWeight: 600
    }
  }, "\uD83D\uDEE1 \u5220\u9664\u5BA1\u6279\u4E2D\u5FC3"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, isSuperAdmin ? '老板视角:可批准所有删除请求' : '主管视角:可批准当天客服删除申请,历史数据需老板批准', pendingCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      color: '#dc2626',
      fontWeight: 600
    }
  }, "\xB7 \u5F85\u4F60\u5BA1\u6279 ", pendingCount)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, [{
    key: 'pending',
    label: '⏳ 待审批'
  }, {
    key: 'approved',
    label: '✅ 已批准'
  }, {
    key: 'rejected',
    label: '❌ 已拒绝'
  }, {
    key: 'all',
    label: '📋 全部'
  }].map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return setFilterStatus(t.key);
      },
      style: {
        padding: '4px 11px',
        borderRadius: 14,
        fontSize: 11,
        cursor: 'pointer',
        fontFamily: 'inherit',
        border: '1px solid ' + (filterStatus === t.key ? 'var(--accent)' : 'var(--line)'),
        background: filterStatus === t.key ? 'var(--accent)' : 'white',
        color: filterStatus === t.key ? 'white' : 'var(--ink-2)',
        fontWeight: filterStatus === t.key ? 600 : 400
      }
    }, t.label);
  }))), loading ? /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-10",
    style: {
      textAlign: 'center'
    }
  }, "\u23F3 \u52A0\u8F7D\u4E2D...") : filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-12",
    style: {
      textAlign: 'center',
      color: 'var(--ink-3)'
    }
  }, "\uD83C\uDF89 \u6CA1\u6709\u5F85\u5BA1\u6279\u7684\u5220\u9664\u8BF7\u6C42") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, filtered.map(function (req) {
    var statusStyle = req.status === 'pending' ? {
      bg: '#fef3c7',
      color: '#854d0e'
    } : req.status === 'approved' ? {
      bg: '#dcfce7',
      color: '#15803d'
    } : {
      bg: '#fee2e2',
      color: '#991b1b'
    };
    var statusLabel = req.status === 'pending' ? '⏳ 待审批' : req.status === 'approved' ? '✅ 已批准' : '❌ 已拒绝';
    var canApprove = req.status === 'pending' && (isSuperAdmin || req.approver_role === 'admin');
    return /*#__PURE__*/React.createElement("div", {
      key: req.id,
      className: "paper rounded-2xl",
      style: {
        padding: '12px 16px',
        border: '1.5px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        alignItems: 'center',
        flexWrap: 'wrap',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        borderRadius: 10,
        fontSize: 10,
        fontWeight: 600,
        background: statusStyle.bg,
        color: statusStyle.color
      }
    }, statusLabel), /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        background: '#f5f5f7',
        color: 'var(--ink-3)',
        borderRadius: 10,
        fontSize: 10,
        fontWeight: 600
      }
    }, req.module_label || req.table_name), req.is_same_day ? /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        background: '#dbeafe',
        color: '#1e3a8a',
        borderRadius: 10,
        fontSize: 10,
        fontWeight: 600
      }
    }, "\uD83D\uDCC5 \u5F53\u5929") : /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        background: '#fef3c7',
        color: '#854d0e',
        borderRadius: 10,
        fontSize: 10,
        fontWeight: 600
      }
    }, "\uD83D\uDCDC \u5386\u53F2"), req.approver_role === 'super_admin' && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        background: '#fef2f2',
        color: '#dc2626',
        borderRadius: 10,
        fontSize: 10,
        fontWeight: 600
      }
    }, "\uD83D\uDC51 \u9700\u8001\u677F\u6279\u51C6")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        marginBottom: 3
      }
    }, req.record_summary || '(无摘要)'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        marginTop: 3
      }
    }, "\u7533\u8BF7\u4EBA: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--ink-2)'
      }
    }, req.requested_by_name), req.requested_at && /*#__PURE__*/React.createElement("span", null, " \xB7 ", new Date(req.requested_at).toLocaleString('zh-CN'))), req.reason && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 5,
        padding: '5px 10px',
        background: '#fef9c3',
        borderRadius: 5,
        fontSize: 12,
        color: '#713f12'
      }
    }, "\uD83D\uDCAC \u7406\u7531:", req.reason), req.approval_note && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 5,
        padding: '5px 10px',
        background: '#f0fdf4',
        borderRadius: 5,
        fontSize: 11,
        color: '#15803d'
      }
    }, req.status === 'approved' ? '✓ 批准' : '✗ 拒绝', ": ", req.approver_name, " \xB7 ", req.approval_note)), canApprove && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return approve(req);
      },
      style: {
        padding: '6px 14px',
        background: '#15803d',
        color: 'white',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: 600,
        fontFamily: 'inherit'
      }
    }, "\u2713 \u6279\u51C6"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return reject(req);
      },
      style: {
        padding: '6px 14px',
        background: '#dc2626',
        color: 'white',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: 600,
        fontFamily: 'inherit'
      }
    }, "\u2717 \u62D2\u7EDD"))));
  })));
};

// ============================================================
// 🆕 fix92: 绩效考核半自动打分板 — 客观项自动统计,主观项主管手填,实时总分,存 system_settings
var KPI_ITEMS = [{
  key: 'q1',
  dim: '业绩',
  label: '邮件质量+时效',
  max: 20
}, {
  key: 'q2',
  dim: '业绩',
  label: '询价跟进转化',
  max: 15
}, {
  key: 'q3',
  dim: '业绩',
  label: '订单问题跟进',
  max: 10
}, {
  key: 'q4',
  dim: '业绩',
  label: '售后与纠纷',
  max: 15
}, {
  key: 'q5',
  dim: '业绩',
  label: '求助风控意识',
  max: 15
}, {
  key: 'a1',
  dim: '态度',
  label: '培训运用执行',
  max: 10
}, {
  key: 'a2',
  dim: '态度',
  label: '轮休协作纪律',
  max: 10
}, {
  key: 'a3',
  dim: '态度',
  label: '企业文化管理',
  max: 5
}];
// 🆕 fix118: 奖惩自动计数权重(对应绩效打分器附加奖惩项)
var KPI_BONUS_WEIGHTS = {
  major: 1,
  optimize: 0.3,
  normal: 1,
  cbFault: -3,
  refill: -2,
  photo: -1
};
// 问题反馈关键词分类(可继续补充):命中"重大"→重大反馈(+1);否则命中"产品优化"→产品优化奖(+0.3);其余=普通发现问题反馈(+1)
var KPI_FB_MAJOR_KW = ['重大', '严重', '批量', '普遍', '系统性', '大量', '多个客户', '反复', '重复出现', '高频', '集中性', '安全隐患', '起火', '触电', '漏电', '召回', '重大质量', '大面积'];
var KPI_FB_OPTIMIZE_KW = ['优化', '改进', '改良', '建议改', '设计建议', '工艺', '包装改进', '结构', '产品建议', '改善', '提升体验', '优化建议', '质量改进', '流程优化'];
var kpiClassifyFeedback = function kpiClassifyFeedback(rec) {
  var t = ((rec.note || '') + ' ' + (rec.category || '') + ' ' + (rec.feedbackNote || '') + ' ' + (rec.escalateReason || '')).toLowerCase();
  if (KPI_FB_MAJOR_KW.some(function (k) {
    return t.includes(k.toLowerCase());
  })) return 'major';
  if (KPI_FB_OPTIMIZE_KW.some(function (k) {
    return t.includes(k.toLowerCase());
  })) return 'optimize';
  return 'normal';
};
var KPIScoreboard = function KPIScoreboard(_ref28) {
  var employees = _ref28.employees,
    records = _ref28.records,
    toast = _ref28.toast,
    readOnly = _ref28.readOnly,
    _ref28$chargebacks = _ref28.chargebacks,
    chargebacks = _ref28$chargebacks === void 0 ? [] : _ref28$chargebacks,
    _ref28$refills = _ref28.refills,
    refills = _ref28$refills === void 0 ? [] : _ref28$refills,
    _ref28$photos = _ref28.photos,
    photos = _ref28$photos === void 0 ? [] : _ref28$photos;
  var _useState49 = useState(new Date().toISOString().slice(0, 7)),
    _useState50 = _slicedToArray(_useState49, 2),
    month = _useState50[0],
    setMonth = _useState50[1];
  var _useState51 = useState({}),
    _useState52 = _slicedToArray(_useState51, 2),
    scores = _useState52[0],
    setScores = _useState52[1];
  var _useState53 = useState(false),
    _useState54 = _slicedToArray(_useState53, 2),
    saving = _useState54[0],
    setSaving = _useState54[1];
  var today = new Date().toISOString().slice(0, 10);
  var storeKey = 'kpi_scores_' + month;
  useEffect(function () {
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var _yield$CLOUD$client$f8, data, _t11;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            _context9.p = 0;
            if (CLOUD.client) {
              _context9.n = 1;
              break;
            }
            setScores({});
            return _context9.a(2);
          case 1:
            _context9.n = 2;
            return CLOUD.client.from('system_settings').select('value').eq('key', storeKey).maybeSingle();
          case 2:
            _yield$CLOUD$client$f8 = _context9.v;
            data = _yield$CLOUD$client$f8.data;
            setScores(data && data.value || {});
            _context9.n = 4;
            break;
          case 3:
            _context9.p = 3;
            _t11 = _context9.v;
            setScores({});
          case 4:
            return _context9.a(2);
        }
      }, _callee9, null, [[0, 3]]);
    }))();
  }, [month]);
  var monRecs = useMemo(function () {
    return (records || []).filter(function (r) {
      return (r.date || '').slice(0, 7) === month;
    });
  }, [records, month]);
  var metrics = useMemo(function () {
    var m = {};
    // 🆕 fix104: 主管/老板要能看到并给【全员】打分 —— 列出所有在职客服(排除隐藏的老板账号),
    // 本月没记录的也出现(指标显示 0),不再 skip,解决"主管看不到所有人绩效"。
    var staff = (employees || []).filter(function (e) {
      return !e.hideFromList && e.role !== 'super_admin' && e.role !== 'hr' && e.role !== 'finance';
    });
    // 🆕 fix118: 本月的拒付失误标记 / 补件 / 实拍(按人月归集到奖惩)
    var monCb = (chargebacks || []).filter(function (c) {
      return c.cs_fault && (c.created_at || c.deadline || c.updated_at || '').slice(0, 7) === month;
    });
    var monRf = (refills || []).filter(function (r) {
      return (r.created_at || '').slice(0, 7) === month;
    });
    var monPh = (photos || []).filter(function (p) {
      return (p.created_at || '').slice(0, 7) === month;
    });
    staff.forEach(function (e) {
      var recs = monRecs.filter(function (r) {
        return r.ownerId === e.id;
      });
      var un = recs.filter(function (r) {
        return r.status !== 'resolved';
      });
      var ov = un.filter(function (r) {
        return r.nextFollowUp && r.nextFollowUp < today;
      });
      var nf = un.filter(function (r) {
        return !r.nextFollowUp;
      });
      var fb = recs.filter(function (r) {
        return r.isFeedback;
      });
      // 🆕 fix118: 问题反馈分类(重大/产品优化/普通)+ 拒付失误/补件/实拍 按人月计数 → 自动奖惩
      var fbMajor = fb.filter(function (r) {
        return kpiClassifyFeedback(r) === 'major';
      });
      var fbOpt = fb.filter(function (r) {
        return kpiClassifyFeedback(r) === 'optimize' && !fbMajor.includes(r);
      });
      var fbNorm = fb.filter(function (r) {
        return !fbMajor.includes(r) && !fbOpt.includes(r);
      });
      var cbFault = monCb.filter(function (c) {
        return (c.cs_fault_emp || c.created_by) === e.id;
      });
      var myRf = monRf.filter(function (r) {
        return r.created_by === e.id;
      });
      var myPh = monPh.filter(function (p) {
        return p.created_by === e.id;
      });
      var bonusAuto = fbMajor.length * KPI_BONUS_WEIGHTS.major + fbOpt.length * KPI_BONUS_WEIGHTS.optimize + fbNorm.length * KPI_BONUS_WEIGHTS.normal + cbFault.length * KPI_BONUS_WEIGHTS.cbFault + myRf.length * KPI_BONUS_WEIGHTS.refill + myPh.length * KPI_BONUS_WEIGHTS.photo;
      m[e.id] = {
        emp: e,
        total: recs.length,
        unresolved: un.length,
        overdue: ov.length,
        noFollow: nf.length,
        feedback: fb.length,
        avgMin: recs.length ? Math.round(recs.reduce(function (s, r) {
          return s + (r.durationMin || 0);
        }, 0) / recs.length) : 0,
        _recs: recs,
        _un: un,
        _ov: ov,
        _nf: nf,
        _fb: fb,
        _fbMajor: fbMajor,
        _fbOpt: fbOpt,
        _fbNorm: fbNorm,
        _cbFault: cbFault,
        _rf: myRf,
        _ph: myPh,
        bonusAuto: Math.round(bonusAuto * 10) / 10
      }; // 🆕 fix118
    });
    return m;
  }, [employees, monRecs, today, chargebacks, refills, photos, month]);
  var rows = Object.values(metrics).sort(function (a, b) {
    return b.total - a.total;
  });
  var _useState55 = useState(null),
    _useState56 = _slicedToArray(_useState55, 2),
    drill = _useState56[0],
    setDrill = _useState56[1]; // 🆕 fix117: 客观项点击 → 明细弹窗 {title, records}
  var getScore = function getScore(id, key, dflt) {
    var s = scores[id] || {};
    return s[key] !== undefined && s[key] !== '' ? s[key] : dflt;
  };
  var setScore = function setScore(id, key, val) {
    return setScores(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, id, _objectSpread(_objectSpread({}, prev[id] || {}), {}, _defineProperty({}, key, val))));
    });
  };
  var total = function total(m) {
    var t = 0;
    KPI_ITEMS.forEach(function (it) {
      t += Number(getScore(m.emp.id, it.key, 0)) || 0;
    });
    t += Number(getScore(m.emp.id, 'bonus', m.bonusAuto)) || 0;
    return t;
  };
  // 🆕 fix117: 自动建议(只填可量化的客观项 q1 邮件质量+时效 + bonus 问题反馈;主观项仍人工)
  // q1 = 20 分起,按 逾期率/无跟进率 扣;公式透明,主管可再手动调整后保存。
  var suggestObjective = function suggestObjective() {
    if (readOnly) return;
    setScores(function (prev) {
      var next = _objectSpread({}, prev);
      rows.forEach(function (m) {
        var cur = _objectSpread({}, next[m.emp.id] || {});
        var tot = m.total || 0;
        var ovR = tot ? m.overdue / tot : 0;
        var nfR = tot ? m.noFollow / tot : 0;
        var q1 = Math.round(20 * (1 - 0.5 * ovR - 0.5 * nfR));
        q1 = Math.max(0, Math.min(20, tot === 0 ? 0 : q1));
        cur.q1 = q1;
        cur.bonus = m.bonusAuto; // 🆕 fix118: 奖惩=自动计数(反馈分级 + 拒付失误 + 补件 + 实拍)
        next[m.emp.id] = cur;
      });
      return next;
    });
    toast && toast('🪄 已按工作明细建议「邮件质量+时效」与「奖惩」(反馈分级/拒付失误/补件/实拍)· 主观项仍需人工 · 确认后点保存');
  };
  var save = /*#__PURE__*/function () {
    var _ref30 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
      var _t12;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            setSaving(true);
            _context0.p = 1;
            _context0.n = 2;
            return CLOUD.client.from('system_settings').upsert({
              key: storeKey,
              value: scores
            }, {
              onConflict: 'key'
            });
          case 2:
            toast && toast('✓ 绩效评分已保存 (' + month + ')');
            _context0.n = 4;
            break;
          case 3:
            _context0.p = 3;
            _t12 = _context0.v;
            toast && toast('❌ 保存失败: ' + _t12.message);
          case 4:
            setSaving(false);
          case 5:
            return _context0.a(2);
        }
      }, _callee0, null, [[1, 3]]);
    }));
    return function save() {
      return _ref30.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 15,
      fontWeight: 600
    }
  }, "\uD83D\uDCCB \u7EE9\u6548\u8003\u6838\u6253\u5206 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 400
    }
  }, "\xB7 \u5BA2\u89C2\u9879\u81EA\u52A8\u7B97 / \u4E3B\u89C2\u9879\u624B\u586B / \u6EE1\u5206100+\u5956\u60E9")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "month",
    value: month,
    onChange: function onChange(e) {
      return setMonth(e.target.value);
    },
    style: {
      padding: '5px 8px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12,
      fontFamily: 'inherit'
    }
  }), readOnly ? /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '5px 10px',
      fontSize: 11,
      background: '#f3e8ff',
      color: '#7c3aed',
      borderRadius: 6,
      fontWeight: 600
    }
  }, "\uD83E\uDDD1\u200D\uD83D\uDCBC \u4EBA\u4E8B\u53EA\u8BFB") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: suggestObjective,
    title: "\u6309\u672C\u6708\u5DE5\u4F5C\u660E\u7EC6\u81EA\u52A8\u5EFA\u8BAE\u53EF\u91CF\u5316\u7684\u5BA2\u89C2\u9879(\u90AE\u4EF6\u8D28\u91CF+\u65F6\u6548\u3001\u95EE\u9898\u53CD\u9988\u5956),\u4E3B\u89C2\u9879\u4ECD\u9700\u4EBA\u5DE5,\u53EF\u518D\u8C03\u6574\u540E\u4FDD\u5B58",
    style: {
      padding: '5px 10px',
      fontSize: 12,
      border: '1px solid #c4b5fd',
      borderRadius: 6,
      background: '#f5f3ff',
      color: '#6d28d9',
      cursor: 'pointer',
      fontWeight: 600
    }
  }, "\uD83E\uDE84 \u81EA\u52A8\u5EFA\u8BAE"), /*#__PURE__*/React.createElement("button", {
    onClick: save,
    disabled: saving,
    className: "btn-pri",
    style: {
      padding: '5px 12px',
      fontSize: 12
    }
  }, saving ? '保存中…' : '💾 保存评分')))), rows.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, "\u672C\u6708\u6682\u65E0\u5BA2\u670D\u8BB0\u5F55") : /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      borderCollapse: 'collapse',
      fontSize: 12,
      width: '100%',
      minWidth: 920
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      color: 'var(--ink-3)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 8px',
      position: 'sticky',
      left: 0,
      background: 'white'
    }
  }, "\u5BA2\u670D"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 8px'
    }
  }, "\u5BA2\u89C2\u53C2\u8003(\u81EA\u52A8)"), KPI_ITEMS.map(function (it) {
    return /*#__PURE__*/React.createElement("th", {
      key: it.key,
      style: {
        padding: '6px 4px',
        textAlign: 'center',
        minWidth: 60
      },
      title: it.dim + '·满' + it.max + '分'
    }, it.label, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'var(--ink-4)'
      }
    }, "/", it.max));
  }), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 4px',
      textAlign: 'center',
      minWidth: 56
    }
  }, "\u5956\u60E9 \xB1"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 8px',
      textAlign: 'right',
      color: '#0071e3'
    }
  }, "\u603B\u5206"))), /*#__PURE__*/React.createElement("tbody", null, rows.map(function (m, idx) {
    return /*#__PURE__*/React.createElement("tr", {
      key: m.emp.id,
      style: {
        background: idx % 2 ? '#fafafa' : 'white',
        borderTop: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px',
        position: 'sticky',
        left: 0,
        background: idx % 2 ? '#fafafa' : 'white',
        fontWeight: 600
      }
    }, m.emp.name, m.emp.alias ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'var(--ink-3)'
      }
    }, m.emp.alias) : null), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px',
        fontSize: 10,
        color: 'var(--ink-2)',
        lineHeight: 1.8,
        minWidth: 210
      }
    }, function () {
      var ds = function ds(label, list) {
        return {
          cursor: list.length ? 'pointer' : 'default',
          textDecoration: list.length ? 'underline dotted' : 'none',
          textUnderlineOffset: 2
        };
      };
      var open = function open(label, list) {
        if (list.length) setDrill({
          title: "".concat(m.emp.name, " \xB7 ").concat(label, " (").concat(month, ")"),
          records: list
        });
      };
      return /*#__PURE__*/React.createElement(React.Fragment, null, "\u90AE\u4EF6 ", /*#__PURE__*/React.createElement("b", {
        style: ds('邮件', m._recs),
        onClick: function onClick() {
          return open('全部邮件记录', m._recs);
        },
        title: "\u70B9\u51FB\u67E5\u770B\u660E\u7EC6"
      }, m.total), " \xB7 ", /*#__PURE__*/React.createElement("span", {
        style: ds('未解决', m._un),
        onClick: function onClick() {
          return open('未解决', m._un);
        },
        title: "\u70B9\u51FB\u67E5\u770B\u660E\u7EC6"
      }, "\u672A\u89E3\u51B3 ", m.unresolved), " \xB7 ", /*#__PURE__*/React.createElement("span", {
        style: _objectSpread(_objectSpread({}, ds('逾期', m._ov)), {}, {
          color: m.overdue ? '#dc2626' : 'inherit'
        }),
        onClick: function onClick() {
          return open('逾期', m._ov);
        },
        title: "\u70B9\u51FB\u67E5\u770B\u660E\u7EC6"
      }, "\u903E\u671F ", m.overdue), " \xB7 ", /*#__PURE__*/React.createElement("span", {
        style: ds('无跟进', m._nf),
        onClick: function onClick() {
          return open('无跟进', m._nf);
        },
        title: "\u70B9\u51FB\u67E5\u770B\u660E\u7EC6"
      }, "\u65E0\u8DDF\u8FDB ", m.noFollow), /*#__PURE__*/React.createElement("br", null), "\u95EE\u9898\u53CD\u9988 ", /*#__PURE__*/React.createElement("b", {
        style: _objectSpread(_objectSpread({}, ds('问题反馈', m._fb)), {}, {
          color: '#059669'
        }),
        onClick: function onClick() {
          return open('问题反馈', m._fb);
        },
        title: "\u70B9\u51FB\u67E5\u770B\u660E\u7EC6"
      }, m.feedback), " \xB7 \u5747\u65F6\u957F ", m.avgMin, "min", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--ink-4)'
        }
      }, "\u5956\u60E9\u81EA\u52A8:"), " ", /*#__PURE__*/React.createElement("span", {
        style: ds('重大反馈', m._fbMajor),
        onClick: function onClick() {
          return open('重大反馈 +1', m._fbMajor);
        },
        title: "\u547D\u4E2D\u91CD\u5927\u5173\u952E\u8BCD"
      }, "\u91CD\u5927", m._fbMajor.length), "\xB7", /*#__PURE__*/React.createElement("span", {
        style: ds('产品优化', m._fbOpt),
        onClick: function onClick() {
          return open('产品优化 +0.3', m._fbOpt);
        },
        title: "\u547D\u4E2D\u4F18\u5316\u5173\u952E\u8BCD"
      }, "\u4F18\u5316", m._fbOpt.length), "\xB7", /*#__PURE__*/React.createElement("span", {
        style: ds('普通反馈', m._fbNorm),
        onClick: function onClick() {
          return open('普通反馈 +1', m._fbNorm);
        }
      }, "\u666E\u901A", m._fbNorm.length), "\xB7", /*#__PURE__*/React.createElement("span", {
        style: _objectSpread(_objectSpread({}, ds('拒付失误', m._cbFault)), {}, {
          color: m._cbFault.length ? '#dc2626' : 'inherit'
        }),
        onClick: function onClick() {
          return open('拒付失误 -3', m._cbFault);
        },
        title: "\u62D2\u4ED8\u88AB\u6807\u8BB0\u5BA2\u670D\u5931\u8BEF"
      }, "\u62D2\u4ED8\u5931\u8BEF", m._cbFault.length), "\xB7", /*#__PURE__*/React.createElement("span", {
        style: _objectSpread(_objectSpread({}, ds('补件', m._rf)), {}, {
          color: m._rf.length ? '#ea580c' : 'inherit'
        }),
        onClick: function onClick() {
          return open('补发配件 -2', m._rf);
        }
      }, "\u8865\u4EF6", m._rf.length), "\xB7", /*#__PURE__*/React.createElement("span", {
        style: _objectSpread(_objectSpread({}, ds('实拍', m._ph)), {}, {
          color: m._ph.length ? '#be185d' : 'inherit'
        }),
        onClick: function onClick() {
          return open('实拍发货 -1', m._ph);
        }
      }, "\u5B9E\u62CD", m._ph.length), " = ", /*#__PURE__*/React.createElement("b", {
        style: {
          color: m.bonusAuto >= 0 ? '#059669' : '#dc2626'
        }
      }, m.bonusAuto >= 0 ? '+' : '', m.bonusAuto));
    }()), KPI_ITEMS.map(function (it) {
      return /*#__PURE__*/React.createElement("td", {
        key: it.key,
        style: {
          padding: '4px',
          textAlign: 'center'
        }
      }, /*#__PURE__*/React.createElement("input", {
        type: "number",
        min: "0",
        max: it.max,
        value: getScore(m.emp.id, it.key, 0),
        onChange: function onChange(e) {
          return setScore(m.emp.id, it.key, e.target.value);
        },
        disabled: readOnly,
        style: {
          width: 46,
          padding: '3px',
          textAlign: 'center',
          border: '1px solid var(--line)',
          borderRadius: 5,
          fontSize: 12,
          fontFamily: 'inherit'
        }
      }));
    }), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '4px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: getScore(m.emp.id, 'bonus', m.bonusAuto),
      onChange: function onChange(e) {
        return setScore(m.emp.id, 'bonus', e.target.value);
      },
      disabled: readOnly,
      style: {
        width: 46,
        padding: '3px',
        textAlign: 'center',
        border: '1px solid var(--line)',
        borderRadius: 5,
        fontSize: 12,
        fontFamily: 'inherit'
      }
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px',
        textAlign: 'right',
        fontWeight: 700,
        fontSize: 15,
        color: '#0071e3'
      }
    }, total(m)));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      marginTop: 8,
      lineHeight: 1.6
    }
  }, "\u5BA2\u89C2\u9879(\u90AE\u4EF6\u91CF/\u903E\u671F/\u65E0\u8DDF\u8FDB/\u53CD\u9988/\u65F6\u957F)\u7531\u7CFB\u7EDF\u6309\u672C\u6708\u8BB0\u5F55\u81EA\u52A8\u7EDF\u8BA1 \xB7 \u70B9\u6570\u5B57\u53EF\u67E5\u660E\u7EC6;\u5404\u9879\u9ED8\u8BA4 0 \u5206,\u4E3B\u7BA1\u6309\u5B9E\u9645\u6253\u5206;\u300C\u5956\u60E9\u300D\u9ED8\u8BA4=\u95EE\u9898\u53CD\u9988\u5956(+\u53CD\u9988\u6570),\u53EF\u624B\u586B(\u552E\u540E\u6263\u5206 / \u4E92\u52A9\u52A0\u5206\u7B49)\u3002")), drill && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setDrill(null);
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.5)',
      zIndex: 100005,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    className: "paper rounded-2xl",
    style: {
      width: '100%',
      maxWidth: 680,
      maxHeight: '84vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
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
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, drill.title, " \xB7 ", drill.records.length, " \u6761"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setDrill(null);
    },
    className: "btn-sec",
    style: {
      padding: '3px 10px'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowY: 'auto',
      padding: '8px 0'
    }
  }, drill.records.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, "\u65E0\u8BB0\u5F55") : /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      fontSize: 12,
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      color: 'var(--ink-3)',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 12px'
    }
  }, "\u65E5\u671F"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 8px'
    }
  }, "\u8BA2\u5355\u53F7"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 8px'
    }
  }, "\u5BA2\u6237"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 8px'
    }
  }, "\u4E8B\u9879"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 8px'
    }
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 8px'
    }
  }, "\u4E0B\u6B21\u8DDF\u8FDB"))), /*#__PURE__*/React.createElement("tbody", null, drill.records.map(function (r, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id || i,
      style: {
        borderTop: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 12px',
        whiteSpace: 'nowrap'
      }
    }, ((r.date || r.created_at || '') + '').slice(5, 10)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 8px',
        fontWeight: 600
      }
    }, r.orderRef || r.order_no || r.order_ref ? /*#__PURE__*/React.createElement(OrderRefLink, {
      orderNo: r.orderRef || r.order_no || r.order_ref
    }) : '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 8px',
        maxWidth: 140,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, r.customer || r.customer_email || r.customer_name || '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 8px'
      }
    }, r.category || r.product_name || r.issue_type || '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 8px'
      }
    }, r.status === 'resolved' ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#16a34a'
      }
    }, "\u5DF2\u89E3\u51B3") : r.status ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#ca8a04'
      }
    }, r.status) : '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 8px',
        color: r.nextFollowUp && r.nextFollowUp < today ? '#dc2626' : 'var(--ink-3)',
        whiteSpace: 'nowrap'
      }
    }, r.nextFollowUp || '—'));
  })))))));
};

// 📊 主管汇总面板 - 总览所有模块
// ============================================================
var AdminOverviewDashboard = function AdminOverviewDashboard(_ref31) {
  var user = _ref31.user,
    employees = _ref31.employees,
    toast = _ref31.toast;
  var _useState57 = useState({
      chargebacks: [],
      offlineOrders: [],
      customInquiries: [],
      photoVerif: [],
      aftersales: [],
      refills: [],
      refunds: [],
      reviews: [],
      records: [],
      deleteReqs: [],
      crossDept: []
    }),
    _useState58 = _slicedToArray(_useState57, 2),
    data = _useState58[0],
    setData = _useState58[1];
  var _useState59 = useState(true),
    _useState60 = _slicedToArray(_useState59, 2),
    loading = _useState60[0],
    setLoading = _useState60[1];
  var _useState61 = useState('all'),
    _useState62 = _slicedToArray(_useState61, 2),
    filterEmployee = _useState62[0],
    setFilterEmployee = _useState62[1];
  var _useState63 = useState('month'),
    _useState64 = _slicedToArray(_useState63, 2),
    range = _useState64[0],
    setRange = _useState64[1]; // 🆕 fix132 today/week/month/quarter/year/all/custom
  var _useState65 = useState(''),
    _useState66 = _slicedToArray(_useState65, 2),
    cFrom = _useState66[0],
    setCFrom = _useState66[1];
  var _useState67 = useState(''),
    _useState68 = _slicedToArray(_useState67, 2),
    cTo = _useState68[0],
    setCTo = _useState68[1];
  var _useState69 = useState(null),
    _useState70 = _slicedToArray(_useState69, 2),
    drill = _useState70[0],
    setDrill = _useState70[1]; // 🆕 fix94: 点统计卡看明细 { title, rows }
  var openDrill = function openDrill(title, rows) {
    return setDrill({
      title: title,
      rows: rows || []
    });
  };
  var inTime = function inTime(r) {
    if (range === 'all') return true;
    var ds = (r.created_at || r.date || r.createdAt || r.created || '').toString().slice(0, 10);
    if (!ds) return false;
    if (range === 'custom') {
      if (cFrom && ds < cFrom) return false;
      if (cTo && ds > cTo) return false;
      return true;
    }
    var today = new Date().toISOString().slice(0, 10);
    if (range === 'today') return ds === today;
    var dt = new Date(ds),
      c = new Date();
    if (range === 'week') c.setDate(c.getDate() - 7);else if (range === 'month') c.setMonth(c.getMonth() - 1);else if (range === 'quarter') c.setMonth(c.getMonth() - 3);else if (range === 'year') c.setFullYear(c.getFullYear() - 1);
    return dt >= c;
  };
  var load = /*#__PURE__*/function () {
    var _ref32 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
      var _yield$Promise$all3, _yield$Promise$all4, cb, oo, ci, pv, af, rf, rfd, rev, rec, dr, cdm, _yield$cdm$from$selec, cd, _t13, _t14;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            setLoading(true);
            _context1.p = 1;
            _context1.n = 2;
            return Promise.all([CLOUD.list('chargebacks', {
              limit: 500
            }), CLOUD.list('offline_orders', {
              limit: 500
            }), CLOUD.list('custom_inquiries', {
              limit: 500
            }), CLOUD.list('photo_verifications', {
              limit: 500
            }), CLOUD.list('aftersales', {
              limit: 500
            }), CLOUD.list('refills', {
              limit: 500
            }), CLOUD.list('refunds', {
              limit: 500
            }), prReviewsList({
              limit: 500
            }), CLOUD.list('workspace_records', {
              limit: 500
            }), CLOUD.list('delete_requests', {
              limit: 200
            })]);
          case 2:
            _yield$Promise$all3 = _context1.v;
            _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 10);
            cb = _yield$Promise$all4[0];
            oo = _yield$Promise$all4[1];
            ci = _yield$Promise$all4[2];
            pv = _yield$Promise$all4[3];
            af = _yield$Promise$all4[4];
            rf = _yield$Promise$all4[5];
            rfd = _yield$Promise$all4[6];
            rev = _yield$Promise$all4[7];
            rec = _yield$Promise$all4[8];
            dr = _yield$Promise$all4[9];
            setData({
              chargebacks: (cb || []).filter(function (x) {
                return !x.deleted;
              }),
              offlineOrders: (oo || []).filter(function (x) {
                return !x.deleted;
              }),
              customInquiries: (ci || []).filter(function (x) {
                return !x.deleted;
              }),
              photoVerif: (pv || []).filter(function (x) {
                return !x.deleted;
              }),
              aftersales: (af || []).filter(function (x) {
                return !x.deleted;
              }),
              refills: (rf || []).filter(function (x) {
                return !x.deleted;
              }),
              refunds: (rfd || []).filter(function (x) {
                return !x.deleted;
              }),
              reviews: (rev || []).filter(function (x) {
                return !x.deleted;
              }),
              records: (rec || []).filter(function (x) {
                return !x.deleted;
              }),
              deleteReqs: dr || []
            });
            // 🆕 fix134: 跨部门工单量(不同库,best-effort)
            _context1.p = 3;
            cdm = typeof getCdmClient === 'function' ? getCdmClient() : null;
            if (!cdm) {
              _context1.n = 5;
              break;
            }
            _context1.n = 4;
            return cdm.from('cross_dept_messages').select('id,created_at,status,deleted').limit(1000);
          case 4:
            _yield$cdm$from$selec = _context1.v;
            cd = _yield$cdm$from$selec.data;
            setData(function (d) {
              return _objectSpread(_objectSpread({}, d), {}, {
                crossDept: (cd || []).filter(function (x) {
                  return !x.deleted;
                })
              });
            });
          case 5:
            _context1.n = 7;
            break;
          case 6:
            _context1.p = 6;
            _t13 = _context1.v;
          case 7:
            _context1.n = 9;
            break;
          case 8:
            _context1.p = 8;
            _t14 = _context1.v;
            toast('❌ 加载失败: ' + _t14.message);
          case 9:
            setLoading(false);
          case 10:
            return _context1.a(2);
        }
      }, _callee1, null, [[3, 6], [1, 8]]);
    }));
    return function load() {
      return _ref32.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
  }, []);

  // 按员工 + 时间筛选
  var filterByEmployee = function filterByEmployee(list) {
    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['created_by'];
    var l = (list || []).filter(inTime);
    if (filterEmployee !== 'all') l = l.filter(function (r) {
      return fields.some(function (f) {
        return r[f] === filterEmployee;
      });
    });
    return l;
  };
  // 🆕 fix133: 本期/上期窗口(环比)
  var fmtD = function fmtD(d) {
    return d.toISOString().slice(0, 10);
  };
  var periodBounds = useMemo(function () {
    if (range === 'all') return {};
    if (range === 'custom') {
      if (cFrom && cTo) {
        var days = Math.round((new Date(cTo) - new Date(cFrom)) / 86400000) + 1;
        var pf = new Date(cFrom);
        pf.setDate(pf.getDate() - days);
        var _pt = new Date(cFrom);
        _pt.setDate(_pt.getDate() - 1);
        return {
          prevFrom: fmtD(pf),
          prevTo: fmtD(_pt)
        };
      }
      return {};
    }
    var p = new Date(),
      pt = new Date();
    if (range === 'today') {
      p.setDate(p.getDate() - 1);
      return {
        prevFrom: fmtD(p),
        prevTo: fmtD(p)
      };
    }
    if (range === 'week') {
      p.setDate(p.getDate() - 14);
      pt.setDate(pt.getDate() - 7);
    } else if (range === 'month') {
      p.setMonth(p.getMonth() - 2);
      pt.setMonth(pt.getMonth() - 1);
    } else if (range === 'quarter') {
      p.setMonth(p.getMonth() - 6);
      pt.setMonth(pt.getMonth() - 3);
    } else if (range === 'year') {
      p.setFullYear(p.getFullYear() - 2);
      pt.setFullYear(pt.getFullYear() - 1);
    }
    return {
      prevFrom: fmtD(p),
      prevTo: fmtD(pt)
    };
  }, [range, cFrom, cTo]);
  var dDate = function dDate(r) {
    return (r.created_at || r.date || r.createdAt || r.created || '').toString().slice(0, 10);
  };
  var inPrev = function inPrev(r) {
    var d = dDate(r);
    if (!d || !periodBounds.prevFrom) return false;
    return d >= periodBounds.prevFrom && d <= periodBounds.prevTo;
  };
  var filterPrev = function filterPrev(list) {
    var fields = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['created_by'];
    var l = (list || []).filter(inPrev);
    if (filterEmployee !== 'all') l = l.filter(function (r) {
      return fields.some(function (f) {
        return r[f] === filterEmployee;
      });
    });
    return l;
  };

  // 统计
  var stats = useMemo(function () {
    var cb = filterByEmployee(data.chargebacks);
    var cbActive = cb.filter(function (c) {
      return !['won', 'lost', 'closed'].includes(c.status);
    });
    var cbUrgent = cbActive.filter(function (c) {
      var u = getChargebackUrgency(c);
      return u && ['overdue', 'today', 'critical', 'urgent'].includes(u.level);
    });
    var oo = filterByEmployee(data.offlineOrders);
    var ooAmount = oo.filter(function (o) {
      return ['paid', 'dispatched', 'completed'].includes(o.status);
    }).reduce(function (s, o) {
      return s + (parseFloat(o.payment_amount) || 0);
    }, 0);
    var ci = filterByEmployee(data.customInquiries);
    var ciActive = ci.filter(function (c) {
      return !['completed', 'cancelled'].includes(c.stage);
    });
    var pv = filterByEmployee(data.photoVerif);
    var pvPending = pv.filter(function (p) {
      return !['accepted', 'rejected', 'replaced'].includes(p.status);
    });
    var af = filterByEmployee(data.aftersales);
    var rf = filterByEmployee(data.refills);
    var rfd = filterByEmployee(data.refunds);
    var rfdPending = rfd.filter(function (r) {
      return r.status === 'pending';
    }).length;
    var reviews = filterByEmployee(data.reviews, ['created_by', 'claimed_by']);
    var reviewsActive = reviews.filter(function (r) {
      return !['completed', 'cancelled'].includes(r.status);
    });
    var records = filterByEmployee(data.records, ['ownerId']);
    var today = new Date().toISOString().slice(0, 10);
    var recordsOverdue = records.filter(function (r) {
      return r.status !== 'resolved' && r.nextFollowUp && r.nextFollowUp < today;
    }).length;
    var recordsToday = records.filter(function (r) {
      return r.status !== 'resolved' && r.nextFollowUp === today;
    }).length;
    var drPending = data.deleteReqs.filter(function (r) {
      return r.status === 'pending';
    }).length;
    return {
      chargebacks: {
        total: cb.length,
        active: cbActive.length,
        urgent: cbUrgent.length,
        won: cb.filter(function (c) {
          return c.status === 'won';
        }).length,
        lost: cb.filter(function (c) {
          return c.status === 'lost';
        }).length
      },
      offline: {
        total: oo.length,
        amount: ooAmount.toFixed(2),
        pending: oo.filter(function (o) {
          return o.status === 'pending_payment';
        }).length,
        dispatched: oo.filter(function (o) {
          return o.status === 'dispatched';
        }).length
      },
      custom: {
        total: ci.length,
        active: ciActive.length,
        paid: ci.filter(function (c) {
          return c.stage === 'paid' || c.stage === 'producing' || c.stage === 'photo';
        }).length
      },
      photo: {
        total: pv.length,
        pending: pvPending.length
      },
      aftersales: {
        total: af.length
      },
      refills: {
        total: rf.length
      },
      refunds: {
        total: rfd.length,
        pending: rfdPending
      },
      reviews: {
        total: reviews.length,
        active: reviewsActive.length
      },
      followups: {
        total: records.length,
        overdue: recordsOverdue,
        today: recordsToday
      },
      deleteReqs: {
        pending: drPending
      }
    };
  }, [data, filterEmployee, range, cFrom, cTo]);

  // 🆕 fix94: 各统计卡对应的明细列表(点卡片弹窗用)
  var drillLists = useMemo(function () {
    var cb = filterByEmployee(data.chargebacks);
    var cbActive = cb.filter(function (c) {
      return !['won', 'lost', 'closed'].includes(c.status);
    });
    var cbUrgent = cbActive.filter(function (c) {
      var u = getChargebackUrgency(c);
      return u && ['overdue', 'today', 'critical', 'urgent'].includes(u.level);
    });
    var oo = filterByEmployee(data.offlineOrders);
    var ci = filterByEmployee(data.customInquiries);
    var ciActive = ci.filter(function (c) {
      return !['completed', 'cancelled'].includes(c.stage);
    });
    var pv = filterByEmployee(data.photoVerif);
    var pvPending = pv.filter(function (p) {
      return !['accepted', 'rejected', 'replaced'].includes(p.status);
    });
    var af = filterByEmployee(data.aftersales);
    var rf = filterByEmployee(data.refills);
    var rfd = filterByEmployee(data.refunds);
    var rfdPending = rfd.filter(function (r) {
      return r.status === 'pending';
    });
    var reviews = filterByEmployee(data.reviews, ['created_by', 'claimed_by']);
    var reviewsActive = reviews.filter(function (r) {
      return !['completed', 'cancelled'].includes(r.status);
    });
    var records = filterByEmployee(data.records, ['ownerId']);
    var today = new Date().toISOString().slice(0, 10);
    var recordsOverdue = records.filter(function (r) {
      return r.status !== 'resolved' && r.nextFollowUp && r.nextFollowUp < today;
    });
    var drPending = data.deleteReqs.filter(function (r) {
      return r.status === 'pending';
    });
    return {
      cbActive: cbActive,
      cbUrgent: cbUrgent,
      oo: oo,
      ciActive: ciActive,
      pvPending: pvPending,
      af: af,
      rf: rf,
      rfd: rfd,
      rfdPending: rfdPending,
      reviews: reviews,
      reviewsActive: reviewsActive,
      records: records,
      recordsOverdue: recordsOverdue,
      drPending: drPending
    };
  }, [data, filterEmployee, range, cFrom, cTo]);

  // 🆕 fix133: 分析大屏 — KPI + 环比 + 客服排行 + 网站/类型分布
  var TYPE_DEFS = [['跟进', data.records, ['ownerId']], ['售后', data.aftersales, ['created_by']], ['补件', data.refills, ['created_by']], ['退款', data.refunds, ['created_by']], ['拒付', data.chargebacks, ['created_by', 'cs_fault_emp']], ['定制', data.customInquiries, ['created_by']], ['实拍', data.photoVerif, ['created_by']], ['评价', data.reviews, ['created_by', 'claimed_by']]];
  var analytics = useMemo(function () {
    var build = function build(ff) {
      var items = [];
      TYPE_DEFS.forEach(function (_ref33) {
        var _ref34 = _slicedToArray(_ref33, 3),
          type = _ref34[0],
          list = _ref34[1],
          fields = _ref34[2];
        ff(list || [], fields).forEach(function (r) {
          return items.push({
            type: type,
            raw: r,
            date: dDate(r),
            who: r.created_by || r.ownerId || r.claimed_by || '(未知)',
            site: r.site || (typeof wsOrderSite === 'function' ? wsOrderSite(r.order_ref || r.order_no) : '') || '(未知)'
          });
        });
      });
      return items;
    };
    var cur = build(filterByEmployee),
      prev = build(filterPrev);
    var byType = function byType(arr) {
      return arr.reduce(function (m, x) {
        return m[x.type] = (m[x.type] || 0) + 1, m;
      }, {});
    };
    var curT = byType(cur),
      prevT = byType(prev);
    var sum = function sum(list, f, cond) {
      return filterByEmployee(list || []).filter(cond || function () {
        return true;
      }).reduce(function (s, r) {
        return s + (parseFloat(r[f]) || 0);
      }, 0);
    };
    var cbAmt = sum(data.chargebacks, 'amount');
    var cbLost = sum(data.chargebacks, 'amount', function (r) {
      return r.status === 'lost' || r.cs_fault;
    });
    var rfdAmt = sum(data.refunds, 'amount', function (r) {
      return ['completed', 'approved'].includes(r.status);
    });
    var ooAmt = sum(data.offlineOrders, 'payment_amount', function (r) {
      return ['paid', 'dispatched', 'completed'].includes(r.status);
    });
    var reviewsDone = filterByEmployee(data.reviews, ['created_by', 'claimed_by']).filter(function (r) {
      return r.status === 'completed';
    }).length;
    var reviewsDonePrev = filterPrev(data.reviews, ['created_by', 'claimed_by']).filter(function (r) {
      return r.status === 'completed';
    }).length;
    // 客服排行
    var csMap = {};
    cur.forEach(function (x) {
      if (!csMap[x.who]) csMap[x.who] = {
        who: x.who,
        count: 0,
        byType: {},
        _list: []
      };
      csMap[x.who].count++;
      csMap[x.who].byType[x.type] = (csMap[x.who].byType[x.type] || 0) + 1;
      csMap[x.who]._list.push(x.raw);
    });
    var csRanking = Object.values(csMap).sort(function (a, b) {
      return b.count - a.count;
    });
    // 网站分布 / 类型分布
    var dist = function dist(arr, key) {
      var m = {};
      arr.forEach(function (x) {
        var k = x[key] || '(未知)';
        if (!m[k]) m[k] = {
          name: k,
          count: 0,
          _list: []
        };
        m[k].count++;
        m[k]._list.push(x.raw);
      });
      return Object.values(m).sort(function (a, b) {
        return b.count - a.count;
      });
    };
    // 🆕 fix134: 趋势分桶(堆叠柱)
    var gran = 'day';
    if (range === 'quarter' || range === 'year' || range === 'all') gran = 'month';
    if (range === 'custom' && cFrom && cTo) gran = (new Date(cTo) - new Date(cFrom)) / 86400000 > 62 ? 'month' : 'day';
    var tmap = {};
    cur.forEach(function (x) {
      if (!x.date) return;
      var key = gran === 'month' ? x.date.slice(0, 7) : x.date;
      if (!tmap[key]) tmap[key] = {
        key: key,
        total: 0,
        byType: {}
      };
      tmap[key].total++;
      tmap[key].byType[x.type] = (tmap[key].byType[x.type] || 0) + 1;
    });
    var trend = Object.values(tmap).sort(function (a, b) {
      return a.key < b.key ? -1 : 1;
    });
    if (trend.length > 31) trend = trend.slice(-31);
    var typesPresent = TYPE_DEFS.map(function (d) {
      return d[0];
    }).filter(function (t) {
      return cur.some(function (x) {
        return x.type === t;
      });
    });
    return {
      total: cur.length,
      prevTotal: prev.length,
      curT: curT,
      prevT: prevT,
      cbAmt: cbAmt,
      cbLost: cbLost,
      rfdAmt: rfdAmt,
      ooAmt: ooAmt,
      reviewsDone: reviewsDone,
      reviewsDonePrev: reviewsDonePrev,
      hasPrev: !!periodBounds.prevFrom,
      csRanking: csRanking,
      siteDist: dist(cur, 'site'),
      typeDist: dist(cur, 'type'),
      trend: trend,
      typesPresent: typesPresent,
      gran: gran
    };
  }, [data, filterEmployee, range, cFrom, cTo]);
  var empName = function empName(id) {
    var e = employees.find(function (x) {
      return x.id === id;
    });
    return e ? e.name + (e.alias ? ' ' + e.alias : '') : id === '(未知)' ? '(未知)' : id;
  };
  var pctChg = function pctChg(cur, prev) {
    if (!analytics.hasPrev) return null;
    if (!prev) return cur ? 100 : 0;
    return Math.round((cur - prev) / prev * 100);
  };
  var PIE_COLORS = ['#0071e3', '#ea580c', '#16a34a', '#7c3aed', '#dc2626', '#d97706', '#0891b2', '#be185d', '#65a30d', '#9333ea'];
  var Pie = function Pie(_ref35) {
    var pdata = _ref35.data,
      onSlice = _ref35.onSlice;
    var tot = pdata.reduce(function (s, d) {
      return s + d.count;
    }, 0);
    if (!tot) return /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-3)',
        textAlign: 'center',
        padding: '20px 0'
      }
    }, "\u6682\u65E0\u6570\u636E");
    var acc = 0;
    var R = 70,
      C = 80;
    var arc = function arc(f0, f1) {
      var a0 = 2 * Math.PI * f0 - Math.PI / 2,
        a1 = 2 * Math.PI * f1 - Math.PI / 2;
      var x0 = C + R * Math.cos(a0),
        y0 = C + R * Math.sin(a0),
        x1 = C + R * Math.cos(a1),
        y1 = C + R * Math.sin(a1);
      var lg = f1 - f0 > 0.5 ? 1 : 0;
      return "M".concat(C, ",").concat(C, " L").concat(x0, ",").concat(y0, " A").concat(R, ",").concat(R, " 0 ").concat(lg, " 1 ").concat(x1, ",").concat(y1, " Z");
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "150",
      height: "160",
      viewBox: "0 0 160 160",
      style: {
        flexShrink: 0
      }
    }, pdata.map(function (d, i) {
      var f0 = acc / tot;
      acc += d.count;
      var f1 = acc / tot;
      return /*#__PURE__*/React.createElement("path", {
        key: i,
        d: arc(f0, f1),
        fill: PIE_COLORS[i % PIE_COLORS.length],
        stroke: "white",
        strokeWidth: "1.5",
        style: {
          cursor: onSlice ? 'pointer' : 'default'
        },
        onClick: function onClick() {
          return onSlice && onSlice(d);
        }
      }, /*#__PURE__*/React.createElement("title", null, d.name, ": ", d.count));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 130
      }
    }, pdata.slice(0, 8).map(function (d, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        onClick: function onClick() {
          return onSlice && onSlice(d);
        },
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 12,
          padding: '3px 0',
          cursor: onSlice ? 'pointer' : 'default'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 11,
          height: 11,
          borderRadius: 3,
          background: PIE_COLORS[i % PIE_COLORS.length],
          flexShrink: 0
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }, d.name), /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600
        }
      }, d.count), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--ink-4)',
          width: 36,
          textAlign: 'right'
        }
      }, Math.round(d.count / tot * 100), "%"));
    })));
  };
  var KpiCard = function KpiCard(_ref36) {
    var label = _ref36.label,
      value = _ref36.value,
      prev = _ref36.prev,
      money = _ref36.money,
      color = _ref36.color,
      icon = _ref36.icon;
    var chg = pctChg(typeof value === 'number' ? value : 0, prev);
    var tint = color || '#0071e3';
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        background: '#fff',
        border: '1px solid var(--line)',
        borderRadius: 14,
        padding: '15px 16px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(15,23,42,.05)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: "linear-gradient(90deg, ".concat(tint, ", ").concat(tint, "99)")
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: 9,
        background: tint + '15',
        color: tint,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 15
      }
    }, icon || '📊'), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        color: 'var(--ink-3)',
        fontWeight: 600,
        letterSpacing: '.01em'
      }
    }, label)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 27,
        fontWeight: 800,
        letterSpacing: '-.025em',
        color: 'var(--ink)',
        lineHeight: 1,
        fontVariantNumeric: 'tabular-nums'
      }
    }, money ? '$' : '', typeof value === 'number' ? value.toLocaleString() : value), chg !== null && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 9,
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 3,
        fontSize: 11,
        fontWeight: 700,
        padding: '2px 8px',
        borderRadius: 20,
        background: chg > 0 ? '#dcfce7' : chg < 0 ? '#fee2e2' : '#f1f5f9',
        color: chg > 0 ? '#15803d' : chg < 0 ? '#b91c1c' : 'var(--ink-4)'
      }
    }, chg > 0 ? '▲' : chg < 0 ? '▼' : '■', " ", Math.abs(chg), "%"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--ink-4)'
      }
    }, "vs \u4E0A\u671F")));
  };
  var SectionTitle = function SectionTitle(_ref37) {
    var icon = _ref37.icon,
      title = _ref37.title,
      sub = _ref37.sub,
      _ref37$accent = _ref37.accent,
      accent = _ref37$accent === void 0 ? '#0071e3' : _ref37$accent;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 18,
        borderRadius: 4,
        background: accent
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, icon, " ", title), sub && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 400,
        color: 'var(--ink-4)'
      }
    }, "\xB7 ", sub));
  };
  // 🆕 fix134: 堆叠柱趋势图(既看趋势,又看各模块占比)
  var StackedBar = function StackedBar(_ref38) {
    var trend = _ref38.trend,
      types = _ref38.types;
    if (!trend || !trend.length) return /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-3)',
        textAlign: 'center',
        padding: '24px 0'
      }
    }, "\u8BE5\u65F6\u6BB5\u6682\u65E0\u6570\u636E");
    var max = Math.max.apply(Math, _toConsumableArray(trend.map(function (b) {
      return b.total;
    })).concat([1]));
    var colorOf = function colorOf(t) {
      return PIE_COLORS[Math.max(0, types.indexOf(t)) % PIE_COLORS.length];
    };
    var gap = trend.length > 20 ? 2 : 4;
    var every = Math.ceil(trend.length / 12);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: gap,
        height: 170,
        padding: '4px 0'
      }
    }, trend.map(function (b) {
      return /*#__PURE__*/React.createElement("div", {
        key: b.key,
        title: "".concat(b.key, " \xB7 \u5171 ").concat(b.total),
        style: {
          flex: 1,
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: '100%',
          height: "".concat(b.total / max * 100, "%"),
          minHeight: b.total ? 3 : 0,
          display: 'flex',
          flexDirection: 'column-reverse',
          borderRadius: '3px 3px 0 0',
          overflow: 'hidden'
        }
      }, types.filter(function (t) {
        return b.byType[t];
      }).map(function (t) {
        return /*#__PURE__*/React.createElement("div", {
          key: t,
          style: {
            background: colorOf(t),
            height: "".concat(b.byType[t] / b.total * 100, "%")
          }
        });
      })));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: gap,
        marginTop: 4
      }
    }, trend.map(function (b, i) {
      return /*#__PURE__*/React.createElement("div", {
        key: b.key,
        style: {
          flex: 1,
          fontSize: 9,
          color: 'var(--ink-4)',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }
      }, i % every === 0 ? b.key.length > 7 ? b.key.slice(5) : b.key : '');
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        marginTop: 10
      }
    }, types.map(function (t) {
      return /*#__PURE__*/React.createElement("span", {
        key: t,
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          gap: 5,
          fontSize: 11,
          color: 'var(--ink-2)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 10,
          height: 10,
          borderRadius: 2,
          background: colorOf(t)
        }
      }), t);
    })));
  };
  var StatCard = function StatCard(_ref39) {
    var icon = _ref39.icon,
      title = _ref39.title,
      value = _ref39.value,
      color = _ref39.color,
      sub = _ref39.sub,
      onClick = _ref39.onClick;
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      style: {
        padding: 14,
        background: 'white',
        borderRadius: 12,
        border: "1.5px solid ".concat(color, "30"),
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all .15s'
      },
      onMouseEnter: function onMouseEnter(e) {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,.08)';
        }
      },
      onMouseLeave: function onMouseLeave(e) {
        if (onClick) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }
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
        fontSize: 20
      }
    }, icon), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--ink-3)',
        fontWeight: 600
      }
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 700,
        color: color,
        lineHeight: 1
      }
    }, value), sub && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)',
        marginTop: 5
      }
    }, sub));
  };
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
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 18,
      fontWeight: 600
    }
  }, "\uD83D\uDCCA \u4E3B\u7BA1\u6C47\u603B\u9762\u677F"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "\u6240\u6709\u6A21\u5757\u603B\u89C8 \xB7 ", range === 'all' ? '全部时间' : range === 'custom' ? "".concat(cFrom || '…', " ~ ").concat(cTo || '…') : {
    today: '今天',
    week: '近7天',
    month: '近一月',
    quarter: '近一季度',
    year: '近一年'
  }[range], " \xB7 \u5B9E\u65F6\u6570\u636E")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDC64"), /*#__PURE__*/React.createElement("select", {
    value: filterEmployee,
    onChange: function onChange(e) {
      return setFilterEmployee(e.target.value);
    },
    style: {
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u5458\u5DE5"), employees.filter(function (em) {
    return !em.hideFromList;
  }).map(function (em) {
    return /*#__PURE__*/React.createElement("option", {
      key: em.id,
      value: em.id
    }, em.name, em.alias ? ' ' + em.alias : '');
  })), /*#__PURE__*/React.createElement("button", {
    onClick: load,
    className: "btn-sec",
    style: {
      padding: '5px 10px',
      fontSize: 11
    }
  }, "\uD83D\uDD04 \u5237\u65B0"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      flexWrap: 'wrap',
      marginTop: 12,
      paddingTop: 12,
      borderTop: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83D\uDCC5 \u65F6\u95F4\u8303\u56F4:"), [['today', '今天'], ['week', '本周'], ['month', '本月'], ['quarter', '本季度'], ['year', '本年'], ['all', '全部'], ['custom', '自定义']].map(function (_ref40) {
    var _ref41 = _slicedToArray(_ref40, 2),
      k = _ref41[0],
      lb = _ref41[1];
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: function onClick() {
        return setRange(k);
      },
      style: {
        padding: '4px 11px',
        fontSize: 12,
        borderRadius: 7,
        cursor: 'pointer',
        fontWeight: 600,
        border: '1px solid ' + (range === k ? '#0071e3' : 'var(--line)'),
        background: range === k ? '#0071e3' : 'white',
        color: range === k ? 'white' : 'var(--ink-2)'
      }
    }, lb);
  }), range === 'custom' && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: cFrom,
    onChange: function onChange(e) {
      return setCFrom(e.target.value);
    },
    style: {
      padding: '3px 7px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)'
    }
  }, "~"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: cTo,
    onChange: function onChange(e) {
      return setCTo(e.target.value);
    },
    style: {
      padding: '3px 7px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u603B\u5DE5\u4F5C\u91CF",
    icon: "\uD83D\uDCCB",
    value: analytics.total,
    prev: analytics.prevTotal,
    color: "#0071e3"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u552E\u540E\u603B\u6570",
    icon: "\uD83D\uDEE0",
    value: analytics.curT['售后'] || 0,
    prev: analytics.prevT['售后'] || 0,
    color: "#ea580c"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u62D2\u4ED8\u7B14\u6570",
    icon: "\uD83D\uDEA8",
    value: analytics.curT['拒付'] || 0,
    prev: analytics.prevT['拒付'] || 0,
    color: "#dc2626"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u62D2\u4ED8\u91D1\u989D",
    icon: "\uD83D\uDCB3",
    value: Math.round(analytics.cbAmt),
    money: true,
    color: "#dc2626"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u9000\u6B3E\u91D1\u989D",
    icon: "\uD83D\uDCB0",
    value: Math.round(analytics.rfdAmt),
    money: true,
    color: "#d97706"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u8865\u4EF6",
    icon: "\uD83D\uDCE6",
    value: analytics.curT['补件'] || 0,
    prev: analytics.prevT['补件'] || 0,
    color: "#0891b2"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u5B9E\u62CD",
    icon: "\uD83D\uDCF7",
    value: analytics.curT['实拍'] || 0,
    prev: analytics.prevT['实拍'] || 0,
    color: "#7c3aed"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u8BC4\u4EF7\u5B8C\u6210",
    icon: "\u2B50",
    value: analytics.reviewsDone,
    prev: analytics.reviewsDonePrev,
    color: "#16a34a"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    icon: "\uD83D\uDC65",
    title: "\u5BA2\u670D\u5904\u7406\u91CF\u6392\u884C",
    sub: "\u70B9\u51FB\u770B\u660E\u7EC6",
    accent: "#0071e3"
  }), analytics.csRanking.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      textAlign: 'center',
      padding: '18px 0'
    }
  }, "\u6682\u65E0\u6570\u636E") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, analytics.csRanking.map(function (c, idx) {
    var tops = Object.entries(c.byType).sort(function (a, b) {
      return b[1] - a[1];
    }).slice(0, 4);
    var isTop = idx < 3;
    return /*#__PURE__*/React.createElement("div", {
      key: c.who,
      onClick: function onClick() {
        return openDrill("".concat(empName(c.who), " \xB7 \u672C\u671F\u5DE5\u4F5C\u660E\u7EC6"), c._list);
      },
      style: {
        padding: '9px 12px',
        background: isTop ? '#eff6ff' : 'var(--bg)',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        borderLeft: '3px solid ' + (isTop ? '#0071e3' : 'transparent')
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        background: isTop ? '#0071e3' : 'var(--ink-3)',
        color: 'white',
        borderRadius: '50%',
        fontSize: 12,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }
    }, idx + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, empName(c.who)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        marginTop: 2,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, tops.map(function (_ref42) {
      var _ref43 = _slicedToArray(_ref42, 2),
        k = _ref43[0],
        n = _ref43[1];
      return "".concat(k).concat(n);
    }).join(' · '))), /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: isTop ? '#0071e3' : 'var(--ink)'
      }
    }, c.count), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'var(--ink-3)'
      }
    }, "\u4EF6")));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    icon: "\uD83C\uDF10",
    title: "\u6309\u7F51\u7AD9\u5206\u5E03",
    sub: "\u70B9\u51FB\u770B\u660E\u7EC6",
    accent: "#16a34a"
  }), /*#__PURE__*/React.createElement(Pie, {
    data: analytics.siteDist,
    onSlice: function onSlice(d) {
      return openDrill("\u7F51\u7AD9 ".concat(d.name, " \xB7 \u672C\u671F\u660E\u7EC6"), d._list);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    icon: "\uD83E\uDD67",
    title: "\u6309\u5DE5\u4F5C\u7C7B\u578B\u5206\u5E03",
    sub: "\u70B9\u51FB\u770B\u660E\u7EC6",
    accent: "#7c3aed"
  }), /*#__PURE__*/React.createElement(Pie, {
    data: analytics.typeDist,
    onSlice: function onSlice(d) {
      return openDrill("".concat(d.name, " \xB7 \u672C\u671F\u660E\u7EC6"), d._list);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    icon: "\uD83D\uDCC8",
    title: "\u5DE5\u4F5C\u91CF\u8D8B\u52BF",
    sub: "\u6309".concat(analytics.gran === 'month' ? '月' : '天', "\u5206\u6876 \xB7 \u8272\u5757=\u5404\u6A21\u5757\u5360\u6BD4"),
    accent: "#ea580c"
  }), /*#__PURE__*/React.createElement(StackedBar, {
    trend: analytics.trend,
    types: analytics.typesPresent
  })), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4",
    style: {
      background: 'linear-gradient(90deg,#f8fafc,#eff6ff)'
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    icon: "\uD83D\uDCBC",
    title: "\u91D1\u989D / \u5DE5\u5355\u603B\u89C8",
    sub: "\u672C\u671F",
    accent: "#dc2626"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u62D2\u4ED8\u91D1\u989D(\u603B)",
    value: Math.round(analytics.cbAmt),
    money: true,
    color: "#dc2626"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u62D2\u4ED8\u635F\u5931(\u5224\u8F93/\u5931\u8BEF)",
    value: Math.round(analytics.cbLost),
    money: true,
    color: "#b91c1c"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u9000\u6B3E\u91D1\u989D(\u5DF2\u6279)",
    value: Math.round(analytics.rfdAmt),
    money: true,
    color: "#d97706"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u7EBF\u4E0B\u5355\u6536\u6B3E",
    value: Math.round(analytics.ooAmt),
    money: true,
    color: "#16a34a"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u8DE8\u90E8\u95E8\u5DE5\u5355\u91CF",
    value: (data.crossDept || []).filter(inTime).length,
    color: "#7c3aed"
  }), /*#__PURE__*/React.createElement(KpiCard, {
    label: "\u8BC4\u4EF7\u5B8C\u6210",
    value: analytics.reviewsDone,
    prev: analytics.reviewsDonePrev,
    color: "#0891b2"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 8
    }
  }, "\uD83D\uDCA1 \u7EE9\u6548\u8054\u52A8\u89C1\u4E0B\u65B9\u300C\u7EE9\u6548\u8003\u6838\u6253\u5206\u677F\u300D(\u968F\u5458\u5DE5/\u65F6\u95F4\u7B5B\u9009)\u3002")), (stats.chargebacks.urgent > 0 || stats.refunds.pending > 0 || stats.followups.overdue > 0 || stats.deleteReqs.pending > 0) && /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4",
    style: {
      background: 'linear-gradient(90deg, #fef2f2 0%, #fed7aa 100%)',
      border: '2px solid #f87171'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: '#991b1b',
      marginBottom: 10
    }
  }, "\uD83D\uDD25 \u7D27\u6025\u5173\u6CE8"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 10
    }
  }, stats.chargebacks.urgent > 0 && /*#__PURE__*/React.createElement(StatCard, {
    icon: "\uD83D\uDEA8",
    title: "\u7D27\u6025\u62D2\u4ED8",
    value: stats.chargebacks.urgent,
    color: "#dc2626",
    sub: "7 \u5929\u5185\u622A\u6B62 / \u5DF2\u903E\u671F",
    onClick: function onClick() {
      return openDrill('紧急拒付', drillLists.cbUrgent);
    }
  }), stats.refunds.pending > 0 && /*#__PURE__*/React.createElement(StatCard, {
    icon: "\uD83D\uDCB0",
    title: "\u5F85\u5BA1\u9000\u6B3E",
    value: stats.refunds.pending,
    color: "#d97706",
    sub: "\u8D22\u52A1\u5BA1\u6838\u4E2D",
    onClick: function onClick() {
      return openDrill('待审退款', drillLists.rfdPending);
    }
  }), stats.followups.overdue > 0 && /*#__PURE__*/React.createElement(StatCard, {
    icon: "\u23F0",
    title: "\u8DDF\u8FDB\u903E\u671F",
    value: stats.followups.overdue,
    color: "#dc2626",
    sub: "\u672A\u5904\u7406\u5BA2\u6237\u8DDF\u8FDB",
    onClick: function onClick() {
      return openDrill('跟进逾期', drillLists.recordsOverdue);
    }
  }), stats.deleteReqs.pending > 0 && /*#__PURE__*/React.createElement(StatCard, {
    icon: "\uD83D\uDEE1",
    title: "\u5F85\u5BA1\u5220\u9664",
    value: stats.deleteReqs.pending,
    color: "#7c3aed",
    sub: "\u5458\u5DE5\u7684\u5220\u9664\u7533\u8BF7",
    onClick: function onClick() {
      return openDrill('待审删除', drillLists.drPending);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 15,
      fontWeight: 600,
      marginBottom: 10
    }
  }, "\uD83D\uDCE6 \u4E1A\u52A1\u6A21\u5757 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 400
    }
  }, "\xB7 \u70B9\u5361\u7247\u770B\u660E\u7EC6")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    icon: "\uD83D\uDCDE",
    title: "\u5BA2\u670D\u8DDF\u8FDB",
    value: stats.followups.total,
    color: "#5e5ce6",
    onClick: function onClick() {
      return openDrill('客服跟进', drillLists.records);
    },
    sub: "\u4ECA\u65E5 ".concat(stats.followups.today, " \xB7 \u903E\u671F ").concat(stats.followups.overdue)
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "\uD83D\uDEA8",
    title: "\u62D2\u4ED8\u7BA1\u7406",
    value: stats.chargebacks.active,
    color: "#dc2626",
    onClick: function onClick() {
      return openDrill('拒付管理(进行中)', drillLists.cbActive);
    },
    sub: "\u603B ".concat(stats.chargebacks.total, " \xB7 \u80DC\u8BC9 ").concat(stats.chargebacks.won, " \xB7 \u8D25\u8BC9 ").concat(stats.chargebacks.lost)
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "\uD83D\uDCB3",
    title: "\u7EBF\u4E0B\u5355",
    value: stats.offline.total,
    color: "#0369a1",
    onClick: function onClick() {
      return openDrill('线下单', drillLists.oo);
    },
    sub: "\u5DF2\u6536\u6B3E $".concat(stats.offline.amount)
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "\uD83C\uDFA8",
    title: "\u5B9A\u5236\u54A8\u8BE2",
    value: stats.custom.active,
    color: "#7c3aed",
    onClick: function onClick() {
      return openDrill('定制咨询(进行中)', drillLists.ciActive);
    },
    sub: "\u751F\u4EA7/\u4ED8\u6B3E\u4E2D ".concat(stats.custom.paid, " \xB7 \u603B ").concat(stats.custom.total)
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "\uD83D\uDCF8",
    title: "\u5B9E\u62CD\u6838\u5B9E",
    value: stats.photo.pending,
    color: "#be185d",
    onClick: function onClick() {
      return openDrill('实拍核实(待处理)', drillLists.pvPending);
    },
    sub: "\u5F85\u8054\u7CFB \xB7 \u603B ".concat(stats.photo.total)
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "\uD83D\uDD27",
    title: "\u552E\u540E",
    value: stats.aftersales.total,
    color: "#ea580c",
    sub: "\u5386\u53F2 + \u8FDB\u884C\u4E2D",
    onClick: function onClick() {
      return openDrill('售后', drillLists.af);
    }
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "\uD83D\uDCE6",
    title: "\u8865\u4EF6",
    value: stats.refills.total,
    color: "#0891b2",
    sub: "\u5386\u53F2 + \u8FDB\u884C\u4E2D",
    onClick: function onClick() {
      return openDrill('补件', drillLists.rf);
    }
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "\uD83D\uDCB0",
    title: "\u9000\u6B3E",
    value: stats.refunds.total,
    color: "#d97706",
    onClick: function onClick() {
      return openDrill('退款', drillLists.rfd);
    },
    sub: "\u5F85\u5BA1 ".concat(stats.refunds.pending)
  }), /*#__PURE__*/React.createElement(StatCard, {
    icon: "\u2B50",
    title: "\u4EA7\u54C1\u8BC4\u4EF7",
    value: stats.reviews.active,
    color: "#fbbf24",
    onClick: function onClick() {
      return openDrill('产品评价(进行中)', drillLists.reviewsActive);
    },
    sub: "\u603B ".concat(stats.reviews.total)
  }))), filterEmployee === 'all' && /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 15,
      fontWeight: 600,
      marginBottom: 10
    }
  }, "\uD83D\uDC65 \u5458\u5DE5\u6D3B\u8DC3\u5EA6(\u5404\u6A21\u5757\u7684\u5F55\u5165\u6570)"), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      fontSize: 12,
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: '#f5f5f7',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px'
    }
  }, "\u5458\u5DE5"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center'
    }
  }, "\uD83D\uDCDE \u8DDF\u8FDB"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center'
    }
  }, "\uD83D\uDEA8 \u62D2\u4ED8"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center'
    }
  }, "\uD83D\uDCB3 \u7EBF\u4E0B\u5355"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center'
    }
  }, "\uD83C\uDFA8 \u5B9A\u5236"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center'
    }
  }, "\uD83D\uDCF8 \u5B9E\u62CD"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center'
    }
  }, "\uD83D\uDD27 \u552E\u540E"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center'
    }
  }, "\uD83D\uDCE6 \u8865\u4EF6"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center'
    }
  }, "\uD83D\uDCB0 \u9000\u6B3E"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center'
    }
  }, "\u2B50 \u8BC4\u4EF7"))), /*#__PURE__*/React.createElement("tbody", null, employees.filter(function (em) {
    return !em.hideFromList && em.role !== 'super_admin';
  }).map(function (em, idx) {
    var cnt = function cnt(list) {
      var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'created_by';
      return list.filter(function (r) {
        return r[field] === em.id;
      }).length;
    };
    return /*#__PURE__*/React.createElement("tr", {
      key: em.id,
      style: {
        borderBottom: '1px solid #f5f5f7',
        background: idx % 2 ? '#fafafa' : 'white'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        fontWeight: 600
      }
    }, em.name, em.alias ? ' ' + em.alias : '', em.role === 'admin' && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 4,
        fontSize: 10,
        color: 'var(--accent)'
      }
    }, "\u2B50")), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        textAlign: 'center'
      }
    }, cnt(data.records, 'ownerId')), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        textAlign: 'center'
      }
    }, cnt(data.chargebacks)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        textAlign: 'center'
      }
    }, cnt(data.offlineOrders)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        textAlign: 'center'
      }
    }, cnt(data.customInquiries)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        textAlign: 'center'
      }
    }, cnt(data.photoVerif)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        textAlign: 'center'
      }
    }, cnt(data.aftersales)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        textAlign: 'center'
      }
    }, cnt(data.refills)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        textAlign: 'center'
      }
    }, cnt(data.refunds)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        textAlign: 'center'
      }
    }, cnt(data.reviews)));
  }))))), drill && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setDrill(null);
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.4)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '6vh 16px',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 14,
      maxWidth: 760,
      width: '100%',
      maxHeight: '84vh',
      overflowY: 'auto',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, drill.title, " \xB7 ", drill.rows.length, " \u6761"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setDrill(null);
    },
    className: "btn-sec",
    style: {
      padding: '4px 12px',
      fontSize: 12
    }
  }, "\u5173\u95ED")), drill.rows.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28,
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, "\u6682\u65E0\u8BB0\u5F55") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, drill.rows.map(function (r, i) {
    var ref = r.order_ref || r.orderRef || r.pi_no || r.product_name || r.customer || r.buyer_email || r.id || '-';
    var cust = r.customer || r.customer_name || r.buyer_email || r.email || '';
    var st = r.status || r.stage || '';
    var amt = r.amount || r.payment_amount || r.refund_amount || '';
    var date = String(r.created_at || r.date || r.createdAt || '').slice(0, 10);
    var note = r.note || r.reason || r.issue_detail || r.notes || '';
    return /*#__PURE__*/React.createElement("div", {
      key: r.id || i,
      style: {
        border: '1px solid var(--line)',
        borderRadius: 10,
        padding: '10px 12px',
        fontSize: 12,
        lineHeight: 1.6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("strong", null, String(ref)), cust && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-2)'
      }
    }, "\xB7 ", cust), st && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 7px',
        background: 'var(--bg-elevated)',
        borderRadius: 6,
        fontSize: 11
      }
    }, String(st)), amt && /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#0369a1',
        fontWeight: 600
      }
    }, "$", amt), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), date && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)',
        fontSize: 11
      }
    }, date)), note && /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--ink-2)',
        marginTop: 4,
        whiteSpace: 'pre-wrap',
        maxHeight: 64,
        overflow: 'hidden'
      }
    }, String(note).slice(0, 220)));
  })))));
};

// ============================================================
// ⏰ 预警阈值配置 - 主管可调整每个模块的"超 N 天预警"
// ============================================================
var AlertThresholdsSettings = function AlertThresholdsSettings(_ref44) {
  var user = _ref44.user,
    toast = _ref44.toast;
  var _useState71 = useState({
      cs_followup: 7,
      // 客服跟进超期天数
      chargeback: 3,
      // 拒付截止前预警天数
      offline_order: 5,
      // 线下单未发货天数
      custom_inquiry: 7,
      // 定制咨询无进展天数
      photo_verif: 5,
      // 实拍核实无回复天数
      aftersale: 14,
      // 售后挂起天数
      refill: 14,
      // 补件挂起天数
      refund: 7 // 退款待审天数
    }),
    _useState72 = _slicedToArray(_useState71, 2),
    thresholds = _useState72[0],
    setThresholds = _useState72[1];
  var _useState73 = useState(true),
    _useState74 = _slicedToArray(_useState73, 2),
    loading = _useState74[0],
    setLoading = _useState74[1];
  var _useState75 = useState(false),
    _useState76 = _slicedToArray(_useState75, 2),
    saving = _useState76[0],
    setSaving = _useState76[1];
  var load = /*#__PURE__*/function () {
    var _ref45 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
      var _yield$CLOUD$client$f9, data, _t15;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            if (CLOUD.client) {
              _context10.n = 1;
              break;
            }
            setLoading(false);
            return _context10.a(2);
          case 1:
            _context10.p = 1;
            _context10.n = 2;
            return CLOUD.client.from('system_settings').select('*').eq('key', 'alert_thresholds').maybeSingle();
          case 2:
            _yield$CLOUD$client$f9 = _context10.v;
            data = _yield$CLOUD$client$f9.data;
            if (data !== null && data !== void 0 && data.value) setThresholds(function (prev) {
              return _objectSpread(_objectSpread({}, prev), data.value);
            });
            _context10.n = 4;
            break;
          case 3:
            _context10.p = 3;
            _t15 = _context10.v;
          case 4:
            setLoading(false);
          case 5:
            return _context10.a(2);
        }
      }, _callee10, null, [[1, 3]]);
    }));
    return function load() {
      return _ref45.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
  }, []);
  var handleSave = /*#__PURE__*/function () {
    var _ref46 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
      var _yield$CLOUD$client$f0, error, _t16;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            setSaving(true);
            _context11.p = 1;
            _context11.n = 2;
            return CLOUD.client.from('system_settings').upsert({
              key: 'alert_thresholds',
              value: thresholds,
              updated_at: new Date().toISOString(),
              updated_by_name: user.name + (user.alias ? ' ' + user.alias : '')
            });
          case 2:
            _yield$CLOUD$client$f0 = _context11.v;
            error = _yield$CLOUD$client$f0.error;
            if (!error) {
              _context11.n = 3;
              break;
            }
            throw error;
          case 3:
            toast('✓ 已保存预警阈值');
            _context11.n = 5;
            break;
          case 4:
            _context11.p = 4;
            _t16 = _context11.v;
            alert('保存失败: ' + _t16.message);
          case 5:
            setSaving(false);
          case 6:
            return _context11.a(2);
        }
      }, _callee11, null, [[1, 4]]);
    }));
    return function handleSave() {
      return _ref46.apply(this, arguments);
    };
  }();
  var handleResetDefaults = /*#__PURE__*/function () {
    var _ref47 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
          case 0:
            _context12.n = 1;
            return wsConfirm('重置为默认阈值?');
          case 1:
            if (_context12.v) {
              _context12.n = 2;
              break;
            }
            return _context12.a(2);
          case 2:
            setThresholds({
              cs_followup: 7,
              chargeback: 3,
              offline_order: 5,
              custom_inquiry: 7,
              photo_verif: 5,
              aftersale: 14,
              refill: 14,
              refund: 7
            });
          case 3:
            return _context12.a(2);
        }
      }, _callee12);
    }));
    return function handleResetDefaults() {
      return _ref47.apply(this, arguments);
    };
  }();
  var ThresholdInput = function ThresholdInput(_ref48) {
    var icon = _ref48.icon,
      title = _ref48.title,
      desc = _ref48.desc,
      value = _ref48.value,
      _onChange = _ref48.onChange,
      min = _ref48.min,
      max = _ref48.max;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 14px',
        background: 'white',
        border: '1px solid var(--line)',
        borderRadius: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 22
      }
    }, icon), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        marginTop: 1
      }
    }, desc))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "range",
      min: min || 1,
      max: max || 30,
      value: value,
      onChange: function onChange(e) {
        return _onChange(parseInt(e.target.value, 10));
      },
      style: {
        flex: 1,
        accentColor: 'var(--accent)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 2,
        minWidth: 54,
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: min || 1,
      max: max || 365,
      value: value,
      onChange: function onChange(e) {
        return _onChange(parseInt(e.target.value, 10) || 1);
      },
      style: {
        width: 50,
        padding: '4px 6px',
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--accent)',
        border: '1px solid var(--line)',
        borderRadius: 5,
        textAlign: 'center'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, "\u5929"))));
  };
  if (loading) return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-10",
    style: {
      textAlign: 'center'
    }
  }, "\u23F3 \u52A0\u8F7D\u4E2D...");
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-6"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "\u23F0"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-.022em'
    }
  }, "\u9884\u8B66\u9608\u503C\u914D\u7F6E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, "\u8C03\u6574\u5404\u6A21\u5757\"\u8D85 N \u5929\u672A\u5904\u7406\"\u7684\u9608\u503C \xB7 \u5F71\u54CD\u4ECA\u65E5\u5DE5\u4F5C\u5FEB\u7167 + \u684C\u9762\u901A\u77E5")), /*#__PURE__*/React.createElement("button", {
    onClick: handleResetDefaults,
    className: "btn-sec",
    style: {
      padding: '4px 10px',
      fontSize: 11
    }
  }, "\u21BA \u6062\u590D\u9ED8\u8BA4")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3 mt-4",
    style: {
      background: '#e0f2fe',
      color: '#075985',
      fontSize: 12,
      lineHeight: 1.6
    }
  }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("strong", null, "\u7528\u6CD5:"), " \u8FD9\u4E9B\u9608\u503C\u51B3\u5B9A\"\u4ECA\u65E5\u5DE5\u4F5C\u5FEB\u7167\"\u4E0A\u7684\u5361\u7247\u4F55\u65F6\u51FA\u73B0\u7EA2\u8272\u8B66\u793A,\u4E5F\u51B3\u5B9A\u4E3B\u7BA1\u6536\u5230\u684C\u9762\u901A\u77E5\u7684\u65F6\u673A\u3002", /*#__PURE__*/React.createElement("br", null), "\u4F8B\u5982:\u5BA2\u670D\u8DDF\u8FDB\u8BBE\u4E3A ", /*#__PURE__*/React.createElement("strong", null, "7 \u5929"), " \u2192 \u8D85\u8FC7 7 \u5929\u8FD8\u6CA1\u89E3\u51B3\u7684\u95EE\u9898\u4F1A\u5728\u300C\u4ECA\u65E5\u5DE5\u4F5C\u5FEB\u7167\u300D\u4E0A\u7A81\u51FA\u663E\u793A\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ThresholdInput, {
    icon: "\uD83D\uDCDE",
    title: "\u5BA2\u670D\u8DDF\u8FDB\u8D85\u671F",
    desc: "\u8DDF\u8FDB\u521B\u5EFA\u540E\u8D85 N \u5929\u672A\u89E3\u51B3",
    value: thresholds.cs_followup,
    onChange: function onChange(v) {
      return setThresholds(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          cs_followup: v
        });
      });
    },
    min: 1,
    max: 30
  }), /*#__PURE__*/React.createElement(ThresholdInput, {
    icon: "\uD83D\uDEA8",
    title: "\u62D2\u4ED8\u622A\u6B62\u9884\u8B66",
    desc: "\u8DDD\u622A\u6B62\u65E5 N \u5929\u5185\u5F00\u59CB\u9884\u8B66",
    value: thresholds.chargeback,
    onChange: function onChange(v) {
      return setThresholds(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          chargeback: v
        });
      });
    },
    min: 1,
    max: 14
  }), /*#__PURE__*/React.createElement(ThresholdInput, {
    icon: "\uD83D\uDCB3",
    title: "\u7EBF\u4E0B\u5355\u672A\u53D1\u8D27",
    desc: "\u4ED8\u6B3E\u540E\u8D85 N \u5929\u672A\u4E0B\u5355/\u53D1\u8D27",
    value: thresholds.offline_order,
    onChange: function onChange(v) {
      return setThresholds(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          offline_order: v
        });
      });
    },
    min: 1,
    max: 30
  }), /*#__PURE__*/React.createElement(ThresholdInput, {
    icon: "\uD83C\uDFA8",
    title: "\u5B9A\u5236\u54A8\u8BE2\u65E0\u8FDB\u5C55",
    desc: "\u8BE2\u5355/\u51FA\u56FE/\u62A5\u4EF7\u9636\u6BB5\u5361 N \u5929",
    value: thresholds.custom_inquiry,
    onChange: function onChange(v) {
      return setThresholds(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          custom_inquiry: v
        });
      });
    },
    min: 1,
    max: 30
  }), /*#__PURE__*/React.createElement(ThresholdInput, {
    icon: "\uD83D\uDCF8",
    title: "\u5B9E\u62CD\u6838\u5B9E\u65E0\u56DE\u590D",
    desc: "\u5BA2\u670D\u8054\u7CFB\u540E N \u5929\u65E0\u5BA2\u6237\u56DE\u590D",
    value: thresholds.photo_verif,
    onChange: function onChange(v) {
      return setThresholds(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          photo_verif: v
        });
      });
    },
    min: 1,
    max: 30
  }), /*#__PURE__*/React.createElement(ThresholdInput, {
    icon: "\uD83D\uDCB0",
    title: "\u9000\u6B3E\u5F85\u5BA1\u8D85\u671F",
    desc: "\u63D0\u4EA4\u540E\u8D85 N \u5929\u8D22\u52A1\u672A\u5BA1\u6838",
    value: thresholds.refund,
    onChange: function onChange(v) {
      return setThresholds(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          refund: v
        });
      });
    },
    min: 1,
    max: 30
  }), /*#__PURE__*/React.createElement(ThresholdInput, {
    icon: "\uD83D\uDD27",
    title: "\u552E\u540E\u6302\u8D77",
    desc: "\u552E\u540E\u5355\u8D85 N \u5929\u672A\u5B8C\u6210",
    value: thresholds.aftersale,
    onChange: function onChange(v) {
      return setThresholds(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          aftersale: v
        });
      });
    },
    min: 1,
    max: 60
  }), /*#__PURE__*/React.createElement(ThresholdInput, {
    icon: "\uD83D\uDCE6",
    title: "\u8865\u4EF6\u6302\u8D77",
    desc: "\u8865\u4EF6\u5355\u8D85 N \u5929\u672A\u5B8C\u6210",
    value: thresholds.refill,
    onChange: function onChange(v) {
      return setThresholds(function (p) {
        return _objectSpread(_objectSpread({}, p), {}, {
          refill: v
        });
      });
    },
    min: 1,
    max: 60
  })), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    disabled: saving,
    style: {
      padding: '10px 24px',
      background: 'var(--accent)',
      color: 'white',
      border: 'none',
      borderRadius: 10,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 14,
      marginTop: 18,
      opacity: saving ? 0.5 : 1
    }
  }, saving ? '保存中...' : '✓ 保存配置'));
};
var ChargebackOwnersSettings = function ChargebackOwnersSettings(_ref49) {
  var employees = _ref49.employees,
    user = _ref49.user,
    toast = _ref49.toast;
  var allSites = useSiteCodes(); // 🆕 fix22 联动 3: 合并 内置 SITES + 自定义网站
  // 按网站映射 + 周六值班 + 周日值班
  var _useState77 = useState({}),
    _useState78 = _slicedToArray(_useState77, 2),
    siteOwners = _useState78[0],
    setSiteOwners = _useState78[1]; // site -> uid
  var _useState79 = useState(''),
    _useState80 = _slicedToArray(_useState79, 2),
    defaultOwner = _useState80[0],
    setDefaultOwner = _useState80[1]; // 其他网站默认负责人
  var _useState81 = useState(''),
    _useState82 = _slicedToArray(_useState81, 2),
    saturdayOwner = _useState82[0],
    setSaturdayOwner = _useState82[1]; // 🆕 周六值班
  var _useState83 = useState(''),
    _useState84 = _slicedToArray(_useState83, 2),
    sundayOwner = _useState84[0],
    setSundayOwner = _useState84[1]; // 🆕 周日值班
  var _useState85 = useState(true),
    _useState86 = _slicedToArray(_useState85, 2),
    loading = _useState86[0],
    setLoading = _useState86[1];
  var _useState87 = useState(false),
    _useState88 = _slicedToArray(_useState87, 2),
    saving = _useState88[0],
    setSaving = _useState88[1];
  var visibleEmployees = employees.filter(function (em) {
    return !em.hideFromList;
  });
  var load = /*#__PURE__*/function () {
    var _ref50 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
      var _yield$CLOUD$client$f1, data, cfg, _t17;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            if (CLOUD.client) {
              _context13.n = 1;
              break;
            }
            setLoading(false);
            return _context13.a(2);
          case 1:
            _context13.p = 1;
            _context13.n = 2;
            return CLOUD.client.from('system_settings').select('*').eq('key', 'chargeback_owners').single();
          case 2:
            _yield$CLOUD$client$f1 = _context13.v;
            data = _yield$CLOUD$client$f1.data;
            cfg = (data === null || data === void 0 ? void 0 : data.value) || {}; // 新格式: { site_owners, default_owner, saturday_owner, sunday_owner }
            // 旧格式: { weekend_owner } (周六/日都用同一个)
            // 更旧格式: { user_ids:[] }
            if (cfg.site_owners || cfg.default_owner || cfg.saturday_owner || cfg.sunday_owner || cfg.weekend_owner) {
              setSiteOwners(cfg.site_owners || {});
              setDefaultOwner(cfg.default_owner || '');
              setSaturdayOwner(cfg.saturday_owner || cfg.weekend_owner || '');
              setSundayOwner(cfg.sunday_owner || cfg.weekend_owner || '');
            } else if ((cfg.user_ids || []).length > 0) {
              setDefaultOwner(cfg.user_ids[0]);
            }
            _context13.n = 4;
            break;
          case 3:
            _context13.p = 3;
            _t17 = _context13.v;
            console.warn('加载拒付专人失败', _t17);
          case 4:
            setLoading(false);
          case 5:
            return _context13.a(2);
        }
      }, _callee13, null, [[1, 3]]);
    }));
    return function load() {
      return _ref50.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
  }, []);
  var handleSave = /*#__PURE__*/function () {
    var _ref51 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14() {
      var userName, allUids, allNames, _yield$CLOUD$client$f10, error, _t18;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            setSaving(true);
            userName = user.name + (user.alias ? ' ' + user.alias : ''); // 兼容旧版 user_ids 字段(为了 ChargebackReminderBanner 旧逻辑能用)
            allUids = _toConsumableArray(new Set([].concat(_toConsumableArray(Object.values(siteOwners).filter(Boolean)), [defaultOwner, saturdayOwner, sundayOwner]).filter(Boolean)));
            allNames = allUids.map(function (uid) {
              var e = employees.find(function (x) {
                return x.id === uid;
              });
              return e ? e.name + (e.alias ? ' ' + e.alias : '') : uid;
            });
            _context14.p = 1;
            _context14.n = 2;
            return CLOUD.client.from('system_settings').upsert({
              key: 'chargeback_owners',
              value: {
                site_owners: siteOwners,
                default_owner: defaultOwner,
                saturday_owner: saturdayOwner,
                sunday_owner: sundayOwner,
                // 旧格式兼容
                user_ids: allUids,
                user_names: allNames
              },
              updated_at: new Date().toISOString(),
              updated_by_name: userName
            });
          case 2:
            _yield$CLOUD$client$f10 = _context14.v;
            error = _yield$CLOUD$client$f10.error;
            if (!error) {
              _context14.n = 3;
              break;
            }
            throw error;
          case 3:
            toast('✓ 已保存拒付负责人配置');
            _context14.n = 5;
            break;
          case 4:
            _context14.p = 4;
            _t18 = _context14.v;
            alert('保存失败: ' + (_t18.message || _t18));
          case 5:
            setSaving(false);
          case 6:
            return _context14.a(2);
        }
      }, _callee14, null, [[1, 4]]);
    }));
    return function handleSave() {
      return _ref51.apply(this, arguments);
    };
  }();
  var renderEmployeeSelect = function renderEmployeeSelect(value, _onChange2, placeholder) {
    return /*#__PURE__*/React.createElement("select", {
      value: value,
      onChange: function onChange(e) {
        return _onChange2(e.target.value);
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
      value: ""
    }, placeholder), visibleEmployees.map(function (em) {
      return /*#__PURE__*/React.createElement("option", {
        key: em.id,
        value: em.id
      }, em.name, em.alias ? ' ' + em.alias : '', em.role === 'admin' ? ' (主管)' : em.role === 'super_admin' ? ' (总管)' : em.role === 'finance' ? ' (财务)' : '', em.sites ? ' · ' + em.sites : '');
    }));
  };
  if (loading) return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-10",
    style: {
      textAlign: 'center'
    }
  }, "\u23F3 \u52A0\u8F7D\u4E2D...");
  var getEmployeeLabel = function getEmployeeLabel(uid) {
    if (!uid) return null;
    var e = visibleEmployees.find(function (x) {
      return x.id === uid;
    });
    return e ? e.name + (e.alias ? ' ' + e.alias : '') : null;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-6"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "\uD83D\uDEA8"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-.022em'
    }
  }, "\u62D2\u4ED8\u8D1F\u8D23\u4EBA\u914D\u7F6E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, "\u6309\u7F51\u7AD9\u6307\u6D3E \xB7 \u5468\u516D/\u5468\u65E5\u5404\u81EA\u503C\u73ED \xB7 \u521B\u5EFA\u62D2\u4ED8\u65F6\u81EA\u52A8\u6307\u6D3E"))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3 mt-4",
    style: {
      background: '#fef3c7',
      color: '#854d0e',
      fontSize: 13,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\uD83D\uDCA1 \u5DE5\u4F5C\u673A\u5236\uFF1A"), /*#__PURE__*/React.createElement("br", null), "\xB7 ", /*#__PURE__*/React.createElement("strong", null, "\u5DE5\u4F5C\u65E5"), "(\u5468\u4E00\u81F3\u5468\u4E94):\u6839\u636E\u7F51\u7AD9\u81EA\u52A8\u6307\u6D3E,\u4F8B\u5982 VK \u2192 Tammy / \u5176\u4ED6\u7F51\u7AD9 \u2192 Aletta", /*#__PURE__*/React.createElement("br", null), "\xB7 ", /*#__PURE__*/React.createElement("strong", null, "\u5468\u516D"), ":\u7531\"\u5468\u516D\u503C\u73ED\u4EBA\"\u63A5\u624B\u6240\u6709\u7F51\u7AD9\u7684\u65B0\u62D2\u4ED8", /*#__PURE__*/React.createElement("br", null), "\xB7 ", /*#__PURE__*/React.createElement("strong", null, "\u5468\u65E5"), ":\u7531\"\u5468\u65E5\u503C\u73ED\u4EBA\"\u63A5\u624B\u6240\u6709\u7F51\u7AD9\u7684\u65B0\u62D2\u4ED8", /*#__PURE__*/React.createElement("br", null), "\xB7 \u4E24\u4F4D\u62D2\u4ED8\u8D1F\u8D23\u4EBA\u90FD\u80FD\u770B\u5230\u5BF9\u65B9\u7684\u62D2\u4ED8(\u534F\u540C\u5DE5\u4F5C),\u53EA\u662F\u81EA\u52A8\u6307\u6D3E\u4F1A\u533A\u5206", /*#__PURE__*/React.createElement("br", null), "\xB7 \u622A\u6B62\u524D ", /*#__PURE__*/React.createElement("strong", null, "7/3/1 \u5929"), " \u89E6\u53D1\u684C\u9762\u901A\u77E5 + \u9876\u90E8\u7EA2\u8272\u6A2A\u5E45\u7ED9\u8D1F\u8D23\u4EBA + \u4E3B\u7BA1", /*#__PURE__*/React.createElement("br", null), "\xB7 \u903E\u671F\u6301\u7EED\u544A\u8B66,\u76F4\u5230\u72B6\u6001\u6539\u4E3A\u300C\u80DC\u8BC9/\u8D25\u8BC9/\u5DF2\u5173\u95ED\u300D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 10,
      color: 'var(--ink)'
    }
  }, "\u2460 \u5DE5\u4F5C\u65E5 \xB7 \u6309\u7F51\u7AD9\u6307\u6D3E"), allSites.map(function (site) {
    return /*#__PURE__*/React.createElement("div", {
      key: site,
      style: {
        display: 'grid',
        gridTemplateColumns: '80px 1fr',
        gap: 10,
        marginBottom: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13,
        color: '#dc2626',
        padding: '5px 12px',
        background: '#fef2f2',
        borderRadius: 6,
        textAlign: 'center'
      }
    }, site), renderEmployeeSelect(siteOwners[site] || '', function (uid) {
      return setSiteOwners(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, site, uid));
      });
    }, "\u9009\u62E9 ".concat(site, " \u7F51\u7AD9\u7684\u62D2\u4ED8\u8D1F\u8D23\u4EBA(\u53EF\u7559\u7A7A\u4F7F\u7528\u9ED8\u8BA4)")));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      padding: '16px',
      background: '#f5f3ff',
      borderRadius: 10,
      border: '1px solid #c4b5fd'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 10,
      color: '#5b21b6'
    }
  }, "\u2461 \u9ED8\u8BA4\u8D1F\u8D23\u4EBA(\u672A\u5728\u7F51\u7AD9\u6307\u6D3E\u8868\u91CC\u7684\u7F51\u7AD9,\u4F8B\u5982:DF / DC / LS / MO ...)"), renderEmployeeSelect(defaultOwner, setDefaultOwner, '选择默认负责人(建议:Aletta)')), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px',
      background: '#fffbeb',
      borderRadius: 10,
      border: '1px solid #fbbf24'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 6,
      color: '#854d0e'
    }
  }, "\u2462 \u5468\u516D\u503C\u73ED \uD83C\uDF05"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#92400e',
      marginBottom: 10
    }
  }, "\u5468\u516D\u521B\u5EFA\u7684\u6240\u6709\u62D2\u4ED8,\u65E0\u8BBA\u7F51\u7AD9,\u90FD\u6307\u6D3E\u7ED9\u6B64\u4EBA"), renderEmployeeSelect(saturdayOwner, setSaturdayOwner, '选择周六值班(例如:Aletta)')), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px',
      background: '#eef2ff',
      borderRadius: 10,
      border: '1px solid #818cf8'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 6,
      color: '#3730a3'
    }
  }, "\u2463 \u5468\u65E5\u503C\u73ED \uD83C\uDF19"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#3730a3',
      marginBottom: 10
    }
  }, "\u5468\u65E5\u521B\u5EFA\u7684\u6240\u6709\u62D2\u4ED8,\u65E0\u8BBA\u7F51\u7AD9,\u90FD\u6307\u6D3E\u7ED9\u6B64\u4EBA"), renderEmployeeSelect(sundayOwner, setSundayOwner, '选择周日值班(例如:Tammy)'))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      padding: '12px 16px',
      background: '#f0f9ff',
      borderRadius: 8,
      fontSize: 12,
      color: '#075985'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\uD83D\uDC40 \u5F53\u524D\u914D\u7F6E\u9884\u89C8:"), /*#__PURE__*/React.createElement("br", null), allSites.map(function (s) {
    var ownerId = siteOwners[s];
    var owner = ownerId ? visibleEmployees.find(function (e) {
      return e.id === ownerId;
    }) : null;
    if (!owner && !defaultOwner) return null;
    var fallback = defaultOwner ? visibleEmployees.find(function (e) {
      return e.id === defaultOwner;
    }) : null;
    return /*#__PURE__*/React.createElement("div", {
      key: s,
      style: {
        marginTop: 3
      }
    }, /*#__PURE__*/React.createElement("strong", null, s), " \u2192 ", owner ? owner.name + (owner.alias ? ' ' + owner.alias : '') : "(\u9ED8\u8BA4: ".concat(fallback ? fallback.name + (fallback.alias ? ' ' + fallback.alias : '') : '未指派', ")"));
  }), (saturdayOwner || sundayOwner) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      paddingTop: 8,
      borderTop: '1px dashed #93c5fd'
    }
  }, saturdayOwner && /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#854d0e'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\uD83C\uDF05 \u5468\u516D\u503C\u73ED"), " \u2192 ", getEmployeeLabel(saturdayOwner) || '?', "(\u8986\u76D6\u6240\u6709\u7F51\u7AD9)"), sundayOwner && /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#3730a3',
      marginTop: 3
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\uD83C\uDF19 \u5468\u65E5\u503C\u73ED"), " \u2192 ", getEmployeeLabel(sundayOwner) || '?', "(\u8986\u76D6\u6240\u6709\u7F51\u7AD9)"))), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    disabled: saving,
    style: {
      padding: '10px 24px',
      background: '#dc2626',
      color: 'white',
      border: 'none',
      borderRadius: 10,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 14,
      marginTop: 18,
      opacity: saving ? 0.5 : 1
    }
  }, saving ? '保存中...' : '✓ 保存配置'));
};

// 🆕 fix9: 退款处理人配置 — 谁能审核/完成/上传退款截图
// 默认 Miya (主管) / Nicole (总管) / Yulia (周末顶班)
// 主管在 设置 → 退款处理人 改名单;名单里的人才能点退款表里的"审核 / 完成"按钮
var RefundProcessorsSettings = function RefundProcessorsSettings(_ref52) {
  var employees = _ref52.employees,
    user = _ref52.user,
    toast = _ref52.toast;
  var _useState89 = useState(['u_miya', 'u_nicole', 'u_yulia']),
    _useState90 = _slicedToArray(_useState89, 2),
    selectedIds = _useState90[0],
    setSelectedIds = _useState90[1];
  var _useState91 = useState(true),
    _useState92 = _slicedToArray(_useState91, 2),
    loading = _useState92[0],
    setLoading = _useState92[1];
  var _useState93 = useState(false),
    _useState94 = _slicedToArray(_useState93, 2),
    saving = _useState94[0],
    setSaving = _useState94[1];
  var visibleEmployees = (employees || []).filter(function (em) {
    return !em.hideFromList;
  });
  useEffect(function () {
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15() {
      var _data$value, _yield$CLOUD$client$f11, data, ids, _t19;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.p = _context15.n) {
          case 0:
            if (CLOUD.client) {
              _context15.n = 1;
              break;
            }
            setLoading(false);
            return _context15.a(2);
          case 1:
            _context15.p = 1;
            _context15.n = 2;
            return CLOUD.client.from('system_settings').select('*').eq('key', 'refund_processors').single();
          case 2:
            _yield$CLOUD$client$f11 = _context15.v;
            data = _yield$CLOUD$client$f11.data;
            ids = data === null || data === void 0 || (_data$value = data.value) === null || _data$value === void 0 ? void 0 : _data$value.user_ids;
            if (Array.isArray(ids) && ids.length > 0) setSelectedIds(ids);
            _context15.n = 4;
            break;
          case 3:
            _context15.p = 3;
            _t19 = _context15.v;
          case 4:
            setLoading(false);
          case 5:
            return _context15.a(2);
        }
      }, _callee15, null, [[1, 3]]);
    }))();
  }, []);
  var toggle = function toggle(id) {
    setSelectedIds(function (prev) {
      return prev.includes(id) ? prev.filter(function (x) {
        return x !== id;
      }) : [].concat(_toConsumableArray(prev), [id]);
    });
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref54 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16() {
      var _window$__setRefundPr, _window;
      var userName, ok;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.n) {
          case 0:
            if (!(selectedIds.length === 0)) {
              _context16.n = 1;
              break;
            }
            alert('至少选 1 个退款处理人');
            return _context16.a(2);
          case 1:
            setSaving(true);
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            _context16.n = 2;
            return (_window$__setRefundPr = (_window = window).__setRefundProcessors) === null || _window$__setRefundPr === void 0 ? void 0 : _window$__setRefundPr.call(_window, selectedIds, userName);
          case 2:
            ok = _context16.v;
            if (ok !== false) toast('✓ 已保存退款处理人配置');
            setSaving(false);
          case 3:
            return _context16.a(2);
        }
      }, _callee16);
    }));
    return function handleSave() {
      return _ref54.apply(this, arguments);
    };
  }();
  if (loading) return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-10",
    style: {
      textAlign: 'center'
    }
  }, "\u23F3 \u52A0\u8F7D\u4E2D...");
  var getLabel = function getLabel(em) {
    var suffix = '';
    if (em.role === 'super_admin') suffix = ' (老板)';else if (em.role === 'admin') suffix = ' (主管)';else if (em.role === 'finance') suffix = ' (财务)';
    return "".concat(em.name).concat(em.alias ? ' ' + em.alias : '').concat(suffix).concat(em.sites ? ' · ' + em.sites : '');
  };

  // 分组排序: 已选的放前面,主管/老板/财务居中,其他靠后
  var sortedEmployees = _toConsumableArray(visibleEmployees).sort(function (a, b) {
    var _roleOrder$a$role, _roleOrder$b$role;
    var aSel = selectedIds.includes(a.id) ? 0 : 1;
    var bSel = selectedIds.includes(b.id) ? 0 : 1;
    if (aSel !== bSel) return aSel - bSel;
    var roleOrder = {
      super_admin: 0,
      admin: 1,
      finance: 2,
      staff: 3
    };
    return ((_roleOrder$a$role = roleOrder[a.role]) !== null && _roleOrder$a$role !== void 0 ? _roleOrder$a$role : 9) - ((_roleOrder$b$role = roleOrder[b.role]) !== null && _roleOrder$b$role !== void 0 ? _roleOrder$b$role : 9);
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-6"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, "\uD83D\uDCB0"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 17,
      fontWeight: 600
    }
  }, "\u9000\u6B3E\u5904\u7406\u4EBA\u5458\u914D\u7F6E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, "\u8C01\u80FD\u5BA1\u6838\u9000\u6B3E / \u6807\u8BB0\u5B8C\u6210 / \u4E0A\u4F20\u6253\u6B3E\u622A\u56FE"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: '#fef3c7',
      border: '1px solid #fcd34d',
      borderRadius: 8,
      fontSize: 12,
      color: '#78350f',
      marginTop: 12,
      marginBottom: 14,
      lineHeight: 1.6
    }
  }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("strong", null, "\u4E1A\u52A1\u89C4\u5219"), ":\u6240\u6709\u5BA2\u670D\u90FD\u53EF\u4EE5\u67E5\u770B\u9000\u6B3E + \u5F55\u5165\u5F85\u5904\u7406\u9000\u6B3E\u3002", /*#__PURE__*/React.createElement("br", null), "\u4F46\u53EA\u6709\u540D\u5355\u4E0A\u7684\u4EBA\u53EF\u4EE5\u70B9 ", /*#__PURE__*/React.createElement("strong", null, "\u300C\u5BA1\u6838\u300D / \u300C\u2713 \u5B8C\u6210\u300D"), " \u6309\u94AE(\u6267\u884C\u5B9E\u9645\u9000\u6B3E + \u4E0A\u4F20 Shopify/Stripe \u622A\u56FE)\u3002", /*#__PURE__*/React.createElement("br", null), "\u8001\u677F (super_admin) \u6C38\u8FDC\u5728\u6743\u9650\u5185,\u65E0\u8BBA\u662F\u5426\u5728\u540D\u5355\u4E0A\u3002", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", null, "\u9ED8\u8BA4\u914D\u7F6E"), ":Miya \u90B1\u7434\u65B9 + Nicole \u674E\u5F6C\u6866 + Yulia \u9676\u8273\u5DE7(\u5468\u672B\u9876\u73ED)\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 8
    }
  }, "\u5F53\u524D\u9009\u4E2D ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#dc2626'
    }
  }, selectedIds.length), " \u4EBA:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginBottom: 14,
      padding: 10,
      background: '#fafaf7',
      borderRadius: 8,
      minHeight: 40
    }
  }, selectedIds.length === 0 ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--ink-4)'
    }
  }, "\u672A\u9009\u4E2D\u4EFB\u4F55\u4EBA \u2014 \u8BF7\u81F3\u5C11\u52FE\u9009\u4E00\u4F4D") : selectedIds.map(function (id) {
    var em = visibleEmployees.find(function (e) {
      return e.id === id;
    });
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      style: {
        padding: '4px 10px',
        background: '#dc2626',
        color: 'white',
        borderRadius: 14,
        fontSize: 12,
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, em ? getLabel(em) : "".concat(id, " (\u8D26\u53F7\u4E0D\u5B58\u5728)"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return toggle(id);
      },
      style: {
        background: 'transparent',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        fontSize: 14,
        padding: 0,
        lineHeight: 1
      }
    }, "\xD7"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, "\u5168\u90E8\u5458\u5DE5 (\u70B9\u51FB\u52FE\u9009/\u53D6\u6D88):"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: 6
    }
  }, sortedEmployees.map(function (em) {
    var checked = selectedIds.includes(em.id);
    return /*#__PURE__*/React.createElement("label", {
      key: em.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 10px',
        border: "1px solid ".concat(checked ? '#dc2626' : 'var(--line)'),
        background: checked ? '#fef2f2' : 'white',
        borderRadius: 7,
        cursor: 'pointer',
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: checked,
      onChange: function onChange() {
        return toggle(em.id);
      },
      style: {
        margin: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: checked ? '#7f1d1d' : 'var(--ink)',
        fontWeight: checked ? 600 : 400
      }
    }, getLabel(em)));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    disabled: saving || selectedIds.length === 0,
    style: {
      padding: '10px 24px',
      background: '#dc2626',
      color: 'white',
      border: 'none',
      borderRadius: 10,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 14,
      marginTop: 18,
      opacity: saving || selectedIds.length === 0 ? 0.5 : 1
    }
  }, saving ? '保存中...' : '✓ 保存配置'));
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix21: 网站维护 (SitesMaintenanceSection)
// 存储:Supabase system_settings 表,key='custom_sites',value=JSONB 数组
// 默认显示内置 SITES + 已添加的自定义站点 · 可新增/编辑/停用
// ════════════════════════════════════════════════════════════════════
var SitesMaintenanceSection = function SitesMaintenanceSection(_ref55) {
  var user = _ref55.user,
    toast = _ref55.toast;
  var _useState95 = useState([]),
    _useState96 = _slicedToArray(_useState95, 2),
    customSites = _useState96[0],
    setCustomSites = _useState96[1];
  var _useState97 = useState(true),
    _useState98 = _slicedToArray(_useState97, 2),
    loading = _useState98[0],
    setLoading = _useState98[1];
  var _useState99 = useState(false),
    _useState100 = _slicedToArray(_useState99, 2),
    showNew = _useState100[0],
    setShowNew = _useState100[1];
  var _useState101 = useState(null),
    _useState102 = _slicedToArray(_useState101, 2),
    editing = _useState102[0],
    setEditing = _useState102[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var load = /*#__PURE__*/function () {
    var _ref56 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17() {
      var _data$value2, _yield$CLOUD$client$f12, data, _t20;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.p = _context17.n) {
          case 0:
            setLoading(true);
            _context17.p = 1;
            if (!CLOUD.client) {
              _context17.n = 3;
              break;
            }
            _context17.n = 2;
            return CLOUD.client.from('system_settings').select('value').eq('key', 'custom_sites').maybeSingle();
          case 2:
            _yield$CLOUD$client$f12 = _context17.v;
            data = _yield$CLOUD$client$f12.data;
            setCustomSites((data === null || data === void 0 || (_data$value2 = data.value) === null || _data$value2 === void 0 ? void 0 : _data$value2.sites) || []);
          case 3:
            _context17.n = 5;
            break;
          case 4:
            _context17.p = 4;
            _t20 = _context17.v;
            console.warn('加载自定义网站失败', _t20);
          case 5:
            setLoading(false);
          case 6:
            return _context17.a(2);
        }
      }, _callee17, null, [[1, 4]]);
    }));
    return function load() {
      return _ref56.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
  }, []);
  var saveCustomSites = /*#__PURE__*/function () {
    var _ref57 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(newList) {
      var _t21;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            if (CLOUD.client) {
              _context18.n = 1;
              break;
            }
            toast('❌ 云同步未启用');
            return _context18.a(2, false);
          case 1:
            _context18.p = 1;
            _context18.n = 2;
            return CLOUD.client.from('system_settings').upsert({
              key: 'custom_sites',
              value: {
                sites: newList
              },
              updated_at: new Date().toISOString()
            }, {
              onConflict: 'key'
            });
          case 2:
            setCustomSites(newList);
            return _context18.a(2, true);
          case 3:
            _context18.p = 3;
            _t21 = _context18.v;
            toast('❌ 保存失败: ' + _t21.message);
            return _context18.a(2, false);
        }
      }, _callee18, null, [[1, 3]]);
    }));
    return function saveCustomSites(_x5) {
      return _ref57.apply(this, arguments);
    };
  }();
  var addSite = /*#__PURE__*/function () {
    var _ref58 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19(site) {
      var exists, ok;
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.n) {
          case 0:
            if (isAdmin) {
              _context19.n = 1;
              break;
            }
            toast('仅主管可添加网站');
            return _context19.a(2);
          case 1:
            exists = SITES.includes(site.code) || customSites.some(function (s) {
              return s.code === site.code;
            });
            if (!exists) {
              _context19.n = 2;
              break;
            }
            toast('⚠ 该代码已存在');
            return _context19.a(2);
          case 2:
            _context19.n = 3;
            return saveCustomSites([].concat(_toConsumableArray(customSites), [_objectSpread(_objectSpread({}, site), {}, {
              isBuiltin: false,
              active: true,
              created_at: new Date().toISOString()
            })]));
          case 3:
            ok = _context19.v;
            if (ok) {
              setShowNew(false);
              toast('✓ 网站已添加');
            }
          case 4:
            return _context19.a(2);
        }
      }, _callee19);
    }));
    return function addSite(_x6) {
      return _ref58.apply(this, arguments);
    };
  }();
  var updateSite = /*#__PURE__*/function () {
    var _ref59 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20(code, patch) {
      var next, ok;
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.n) {
          case 0:
            if (isAdmin) {
              _context20.n = 1;
              break;
            }
            toast('仅主管可修改');
            return _context20.a(2);
          case 1:
            next = customSites.map(function (s) {
              return s.code === code ? _objectSpread(_objectSpread({}, s), patch) : s;
            });
            _context20.n = 2;
            return saveCustomSites(next);
          case 2:
            ok = _context20.v;
            if (ok) {
              setEditing(null);
              toast('✓ 已更新');
            }
          case 3:
            return _context20.a(2);
        }
      }, _callee20);
    }));
    return function updateSite(_x7, _x8) {
      return _ref59.apply(this, arguments);
    };
  }();
  var deleteSite = /*#__PURE__*/function () {
    var _ref60 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(code) {
      var ok;
      return _regenerator().w(function (_context21) {
        while (1) switch (_context21.n) {
          case 0:
            if (isAdmin) {
              _context21.n = 1;
              break;
            }
            toast('仅主管可删除');
            return _context21.a(2);
          case 1:
            _context21.n = 2;
            return wsConfirm("\u786E\u8BA4\u5220\u9664\u81EA\u5B9A\u4E49\u7F51\u7AD9 \"".concat(code, "\"?\n\n\u8B66\u544A:\u5DF2\u4F7F\u7528\u6B64\u7F51\u7AD9\u7684\u5386\u53F2\u8BB0\u5F55\u4F1A\u4FDD\u7559\u4EE3\u7801,\u4F46\u4E0B\u62C9\u4E0D\u518D\u51FA\u73B0\u3002"));
          case 2:
            if (_context21.v) {
              _context21.n = 3;
              break;
            }
            return _context21.a(2);
          case 3:
            _context21.n = 4;
            return saveCustomSites(customSites.filter(function (s) {
              return s.code !== code;
            }));
          case 4:
            ok = _context21.v;
            if (ok) toast('✓ 已删除');
          case 5:
            return _context21.a(2);
        }
      }, _callee21);
    }));
    return function deleteSite(_x9) {
      return _ref60.apply(this, arguments);
    };
  }();

  // 合并内置 + 自定义,用于显示
  var builtinSites = SITES.map(function (code) {
    return {
      code: code,
      name: getShopFromSiteCode(code),
      brand: '',
      color: '',
      isBuiltin: true,
      active: true
    };
  });
  var allSites = [].concat(_toConsumableArray(builtinSites), _toConsumableArray(customSites));
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
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
  }, "\uD83C\uDF10 \u7F51\u7AD9\u7EF4\u62A4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, "\u5171 ", allSites.length, " \u4E2A\u7F51\u7AD9 \xB7 ", builtinSites.length, " \u4E2A\u5185\u7F6E + ", customSites.length, " \u4E2A\u81EA\u5B9A\u4E49")), isAdmin && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowNew(true);
    },
    style: {
      padding: '7px 14px',
      background: '#1e40af',
      color: 'white',
      border: 'none',
      borderRadius: 7,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "+ \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7F51\u7AD9")), loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px',
      textAlign: 'center',
      color: 'var(--ink-3)'
    }
  }, "\u52A0\u8F7D\u4E2D...") : /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: '#f8fafc',
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'left',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)',
      width: 80
    }
  }, "\u4EE3\u7801"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'left',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)'
    }
  }, "\u540D\u79F0 / \u54C1\u724C"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'left',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)'
    }
  }, "\u57DF\u540D"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)',
      width: 80
    }
  }, "\u7C7B\u578B"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)',
      width: 80
    }
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)',
      width: 120
    }
  }, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, allSites.map(function (s) {
    return /*#__PURE__*/React.createElement("tr", {
      key: s.code,
      style: {
        borderBottom: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        fontWeight: 700,
        fontFamily: 'monospace'
      }
    }, s.code), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, s.name || s.code), s.brand && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)'
      }
    }, s.brand)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        color: 'var(--ink-3)',
        fontFamily: 'monospace',
        fontSize: 11
      }
    }, s.domain || '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        background: s.isBuiltin ? '#f3e8ff' : '#fef3c7',
        color: s.isBuiltin ? '#7c3aed' : '#92400e',
        borderRadius: 8,
        fontSize: 10,
        fontWeight: 600
      }
    }, s.isBuiltin ? '内置' : '自定义')), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        background: s.active !== false ? '#dcfce7' : '#f5f5f7',
        color: s.active !== false ? '#15803d' : '#86868b',
        borderRadius: 8,
        fontSize: 10,
        fontWeight: 600
      }
    }, s.active !== false ? '✓ 启用' : '✕ 停用')), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        textAlign: 'center'
      }
    }, !s.isBuiltin && isAdmin && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setEditing(s);
      },
      style: {
        padding: '3px 8px',
        background: '#e0f2fe',
        color: '#0369a1',
        border: '1px solid #7dd3fc',
        borderRadius: 4,
        cursor: 'pointer',
        fontSize: 10,
        fontWeight: 600,
        marginRight: 3
      }
    }, "\u270F\uFE0F"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return updateSite(s.code, {
          active: s.active === false
        });
      },
      style: {
        padding: '3px 8px',
        background: '#fef3c7',
        color: '#92400e',
        border: '1px solid #fbbf24',
        borderRadius: 4,
        cursor: 'pointer',
        fontSize: 10,
        fontWeight: 600,
        marginRight: 3
      }
    }, s.active === false ? '启用' : '停用'), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return deleteSite(s.code);
      },
      style: {
        padding: '3px 8px',
        background: '#fef2f2',
        color: '#dc2626',
        border: '1px solid #fca5a5',
        borderRadius: 4,
        cursor: 'pointer',
        fontSize: 10,
        fontWeight: 600
      }
    }, "\uD83D\uDDD1")), s.isBuiltin && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--ink-4)'
      }
    }, "\u2014")));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: '10px 12px',
      background: '#eff6ff',
      border: '1px solid #bfdbfe',
      borderRadius: 8,
      fontSize: 11,
      color: '#1e40af',
      lineHeight: 1.6
    }
  }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("strong", null, "\u8BF4\u660E"), ":\u5185\u7F6E\u7F51\u7AD9(VK/RD/DC/MJ/DF/LS/RS/J/PL/MO/\u6D77\u670D)\u662F\u4EE3\u7801\u91CC\u5199\u6B7B\u7684,\u6240\u6709\u5BA2\u670D\u7CFB\u7EDF\u90FD\u80FD\u7528\u3002", /*#__PURE__*/React.createElement("br", null), "\u81EA\u5B9A\u4E49\u7F51\u7AD9\u5B58\u5728 Supabase ", /*#__PURE__*/React.createElement("code", null, "system_settings"), " \u8868,\u6240\u6709\u5BA2\u670D\u5171\u4EAB,\u53EF\u540E\u53F0\u52A8\u6001\u589E\u5220\u6539\u3002"), showNew && /*#__PURE__*/React.createElement(SiteEditorModal, {
    site: null,
    onSave: addSite,
    onClose: function onClose() {
      return setShowNew(false);
    }
  }), editing && /*#__PURE__*/React.createElement(SiteEditorModal, {
    site: editing,
    onSave: function onSave(s) {
      return updateSite(editing.code, s);
    },
    onClose: function onClose() {
      return setEditing(null);
    }
  }));
};
var SiteEditorModal = function SiteEditorModal(_ref61) {
  var site = _ref61.site,
    onSave = _ref61.onSave,
    onClose = _ref61.onClose;
  var _useState103 = useState((site === null || site === void 0 ? void 0 : site.code) || ''),
    _useState104 = _slicedToArray(_useState103, 2),
    code = _useState104[0],
    setCode = _useState104[1];
  var _useState105 = useState((site === null || site === void 0 ? void 0 : site.name) || ''),
    _useState106 = _slicedToArray(_useState105, 2),
    name = _useState106[0],
    setName = _useState106[1];
  var _useState107 = useState((site === null || site === void 0 ? void 0 : site.brand) || ''),
    _useState108 = _slicedToArray(_useState107, 2),
    brand = _useState108[0],
    setBrand = _useState108[1];
  var _useState109 = useState((site === null || site === void 0 ? void 0 : site.domain) || ''),
    _useState110 = _slicedToArray(_useState109, 2),
    domain = _useState110[0],
    setDomain = _useState110[1];
  var _useState111 = useState((site === null || site === void 0 ? void 0 : site.color) || '#0369a1'),
    _useState112 = _slicedToArray(_useState111, 2),
    color = _useState112[0],
    setColor = _useState112[1];
  var _useState113 = useState((site === null || site === void 0 ? void 0 : site.prefix) || ''),
    _useState114 = _slicedToArray(_useState113, 2),
    prefix = _useState114[0],
    setPrefix = _useState114[1];
  var isEdit = !!site;
  var handleSave = function handleSave() {
    if (!code.trim() || !name.trim()) {
      alert('代码和名称必填');
      return;
    }
    if (code.length > 12) {
      alert('代码不超过 12 个字符');
      return;
    }
    onSave({
      code: code.trim().toUpperCase(),
      name: name.trim(),
      brand: brand.trim(),
      domain: domain.trim(),
      color: color,
      prefix: prefix.trim().toUpperCase()
    });
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
      maxWidth: 520,
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
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "\uD83C\uDF10 ", isEdit ? '编辑网站' : '添加自定义网站'), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 11
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
      marginBottom: 3
    }
  }, "\u4EE3\u7801 *"), /*#__PURE__*/React.createElement("input", {
    value: code,
    onChange: function onChange(e) {
      return setCode(e.target.value);
    },
    placeholder: "\u5982 SG / GMV",
    disabled: isEdit,
    maxLength: 12,
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'monospace',
      textTransform: 'uppercase',
      background: isEdit ? '#f5f5f7' : 'white'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)',
      marginTop: 2
    }
  }, "2-12 \u5B57\u7B26 \xB7 \u5927\u5199 \xB7 \u4E0D\u53EF\u91CD\u590D")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 3
    }
  }, "\u540D\u79F0 *"), /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    placeholder: "\u5982 Singapore Outlet",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 3
    }
  }, "\u54C1\u724C\u5168\u79F0"), /*#__PURE__*/React.createElement("input", {
    value: brand,
    onChange: function onChange(e) {
      return setBrand(e.target.value);
    },
    placeholder: "\u5982 Vakkerlight Singapore",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 3
    }
  }, "\u57DF\u540D"), /*#__PURE__*/React.createElement("input", {
    value: domain,
    onChange: function onChange(e) {
      return setDomain(e.target.value);
    },
    placeholder: "\u5982 vakkerlight.sg",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'monospace'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 3
    }
  }, "\u8BA2\u5355\u524D\u7F00"), /*#__PURE__*/React.createElement("input", {
    value: prefix,
    onChange: function onChange(e) {
      return setPrefix(e.target.value);
    },
    placeholder: "VKS",
    maxLength: 6,
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'monospace',
      textTransform: 'uppercase'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 3
    }
  }, "\u4E3B\u9898\u8272"), /*#__PURE__*/React.createElement("input", {
    type: "color",
    value: color,
    onChange: function onChange(e) {
      return setColor(e.target.value);
    },
    style: {
      width: '100%',
      height: 33,
      padding: 0,
      border: '1px solid var(--line)',
      borderRadius: 6,
      cursor: 'pointer'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px',
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 6,
      background: '#fafafa'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn-sec",
    style: {
      padding: '7px 14px',
      fontSize: 12
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    style: {
      padding: '7px 18px',
      background: '#1e40af',
      color: 'white',
      border: 'none',
      borderRadius: 7,
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, isEdit ? '💾 保存修改' : '+ 添加')))), document.body);
};

// 内置网站代码 → 名称(从 SHOP_CONFIGS 推断)
var getShopFromSiteCode = function getShopFromSiteCode(code) {
  var map = {
    // 🆕 fix51: 网站全称统一为美工/拍摄部 SHOPS_PRESET 标准命名
    VK: 'Vakkerlight',
    RD: 'Radilum',
    DC: 'Docos.us',
    MJ: 'Mooijane',
    DF: 'Dekorfine',
    LS: 'Lumioshine',
    RS: 'Rayonshine',
    MH: 'Mooiehome',
    PL: 'Pinlighting',
    MO: 'Mooielight',
    '海服': '海服',
    SH: '上海',
    // 旧代码兼容(数据库里可能有历史值)
    J: 'Mooiehome'
  };
  return map[code] || code;
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix21: 产品维护 (ProductsMaintenanceSection)
// 存储:Supabase products 表 · 完整 CRUD + 搜索 + 适用网站标签
// 将来在线下单 / 售后录入时可联想推荐
// ════════════════════════════════════════════════════════════════════
var ProductsMaintenanceSection = function ProductsMaintenanceSection(_ref62) {
  var user = _ref62.user,
    toast = _ref62.toast;
  var _useState115 = useState([]),
    _useState116 = _slicedToArray(_useState115, 2),
    products = _useState116[0],
    setProducts = _useState116[1];
  var _useState117 = useState(true),
    _useState118 = _slicedToArray(_useState117, 2),
    loading = _useState118[0],
    setLoading = _useState118[1];
  var _useState119 = useState(''),
    _useState120 = _slicedToArray(_useState119, 2),
    search = _useState120[0],
    setSearch = _useState120[1];
  var _useState121 = useState('all'),
    _useState122 = _slicedToArray(_useState121, 2),
    filterCategory = _useState122[0],
    setFilterCategory = _useState122[1];
  var _useState123 = useState('all'),
    _useState124 = _slicedToArray(_useState123, 2),
    filterSupplier = _useState124[0],
    setFilterSupplier = _useState124[1];
  var _useState125 = useState(null),
    _useState126 = _slicedToArray(_useState125, 2),
    editing = _useState126[0],
    setEditing = _useState126[1]; // null | 'new' | productObj
  var _useState127 = useState([]),
    _useState128 = _slicedToArray(_useState127, 2),
    suppliers = _useState128[0],
    setSuppliers = _useState128[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var load = /*#__PURE__*/function () {
    var _ref63 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22() {
      var list, supps, _t22;
      return _regenerator().w(function (_context22) {
        while (1) switch (_context22.p = _context22.n) {
          case 0:
            setLoading(true);
            _context22.p = 1;
            _context22.n = 2;
            return CLOUD.list('products', {
              order: {
                col: 'updated_at',
                asc: false
              },
              limit: 1000
            });
          case 2:
            list = _context22.v;
            setProducts((list || []).filter(function (p) {
              return !p.deleted;
            }));
            _context22.n = 3;
            return CLOUD.list('suppliers', {
              order: {
                col: 'name',
                asc: true
              },
              limit: 500
            });
          case 3:
            supps = _context22.v;
            setSuppliers((supps || []).filter(function (s) {
              return !s.deleted;
            }));
            _context22.n = 5;
            break;
          case 4:
            _context22.p = 4;
            _t22 = _context22.v;
            toast('❌ 加载失败: ' + (_t22.message || _t22));
          case 5:
            setLoading(false);
          case 6:
            return _context22.a(2);
        }
      }, _callee22, null, [[1, 4]]);
    }));
    return function load() {
      return _ref63.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
  }, []);
  var handleDelete = /*#__PURE__*/function () {
    var _ref64 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23(p) {
      var ok;
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.n) {
          case 0:
            if (isAdmin) {
              _context23.n = 1;
              break;
            }
            toast('仅主管可删除');
            return _context23.a(2);
          case 1:
            _context23.n = 2;
            return wsConfirm("\u786E\u8BA4\u5220\u9664 ".concat(p.sku || '', " ").concat(p.name, "?"));
          case 2:
            if (_context23.v) {
              _context23.n = 3;
              break;
            }
            return _context23.a(2);
          case 3:
            _context23.n = 4;
            return CLOUD.upsert('products', _objectSpread(_objectSpread({}, p), {}, {
              deleted: true,
              deleted_at: Date.now(),
              deleted_by: user.id
            }));
          case 4:
            ok = _context23.v;
            if (ok) {
              toast('✓ 已删除');
              load();
            }
          case 5:
            return _context23.a(2);
        }
      }, _callee23);
    }));
    return function handleDelete(_x0) {
      return _ref64.apply(this, arguments);
    };
  }();
  var filtered = useMemo(function () {
    var arr = products;
    if (filterCategory !== 'all') arr = arr.filter(function (p) {
      return p.category === filterCategory;
    });
    if (filterSupplier !== 'all') arr = arr.filter(function (p) {
      return p.supplier_id === filterSupplier;
    });
    if (search.trim()) {
      var q = search.trim().toLowerCase();
      arr = arr.filter(function (p) {
        return [p.sku, p.name, p.supplier_name, p.tags, p.description, p.notes].filter(Boolean).join(' ').toLowerCase().includes(q);
      });
    }
    return arr;
  }, [products, search, filterCategory, filterSupplier]);
  var PRODUCT_CATEGORIES = [{
    id: 'lighting',
    label: '💡 灯具'
  }, {
    id: 'furniture',
    label: '🪑 家具'
  }, {
    id: 'accessories',
    label: '🔧 配件'
  }, {
    id: 'lampshade',
    label: '灯罩'
  }, {
    id: 'parts',
    label: '零件'
  }, {
    id: 'other',
    label: '其他'
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
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
  }, "\uD83D\uDCE6 \u4EA7\u54C1\u7EF4\u62A4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, "\u5171 ", products.length, " \u6B3E\u4EA7\u54C1 \xB7 \u5F53\u524D\u663E\u793A ", filtered.length)), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEditing('new');
    },
    style: {
      padding: '7px 14px',
      background: '#1e40af',
      color: 'white',
      border: 'none',
      borderRadius: 7,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "+ \u65B0\u5EFA\u4EA7\u54C1")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D SKU / \u4EA7\u54C1\u540D / \u4F9B\u5E94\u5546 / \u6807\u7B7E...",
    style: {
      flex: 1,
      minWidth: 220,
      padding: '6px 11px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      fontFamily: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("select", {
    value: filterCategory,
    onChange: function onChange(e) {
      return setFilterCategory(e.target.value);
    },
    style: {
      padding: '6px 11px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u6240\u6709\u5206\u7C7B"), PRODUCT_CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.id,
      value: c.id
    }, c.label);
  })), /*#__PURE__*/React.createElement("select", {
    value: filterSupplier,
    onChange: function onChange(e) {
      return setFilterSupplier(e.target.value);
    },
    style: {
      padding: '6px 11px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit',
      maxWidth: 160
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u6240\u6709\u4F9B\u5E94\u5546"), suppliers.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, s.name);
  }))), loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '30px',
      textAlign: 'center',
      color: 'var(--ink-3)'
    }
  }, "\u52A0\u8F7D\u4E2D...") : filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 14px',
      textAlign: 'center',
      color: 'var(--ink-4)',
      fontSize: 12
    }
  }, products.length === 0 ? '还没有产品 · 点右上"+ 新建产品"开始' : '当前筛选下没有产品') : /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: '#f8fafc',
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)',
      width: 60
    }
  }, "\u56FE"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'left',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)',
      width: 130
    }
  }, "SKU"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'left',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)'
    }
  }, "\u4EA7\u54C1\u540D"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'left',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)',
      width: 140
    }
  }, "\u4F9B\u5E94\u5546"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)',
      width: 90
    }
  }, "\u5206\u7C7B"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'right',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)',
      width: 100
    }
  }, "\u9ED8\u8BA4\u4EF7"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)',
      width: 80
    }
  }, "\u552E\u540E"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '8px 10px',
      textAlign: 'center',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)',
      width: 90
    }
  }, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(function (p) {
    var cat = PRODUCT_CATEGORIES.find(function (c) {
      return c.id === p.category;
    });
    return /*#__PURE__*/React.createElement("tr", {
      key: p.id,
      style: {
        borderBottom: '1px solid var(--line)',
        transition: 'background .12s'
      },
      onMouseEnter: function onMouseEnter(e) {
        return e.currentTarget.style.background = '#fafafa';
      },
      onMouseLeave: function onMouseLeave(e) {
        return e.currentTarget.style.background = 'white';
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 10px',
        textAlign: 'center'
      }
    }, p.image ? /*#__PURE__*/React.createElement("img", {
      src: p.image,
      style: {
        width: 40,
        height: 40,
        objectFit: 'cover',
        borderRadius: 5,
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return window.open(p.image, '_blank');
      },
      title: "\u70B9\u51FB\u67E5\u770B\u5927\u56FE"
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)',
        fontSize: 14
      }
    }, "\uD83D\uDCF7")), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        fontFamily: 'monospace',
        fontWeight: 600
      }
    }, p.sku || '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600
      }
    }, p.name), p.tags && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)'
      }
    }, p.tags)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        color: 'var(--ink-2)'
      }
    }, p.supplier_name || '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        textAlign: 'center'
      }
    }, cat ? /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 7px',
        background: '#f3e8ff',
        color: '#7c3aed',
        borderRadius: 8,
        fontSize: 10,
        fontWeight: 600
      }
    }, cat.label) : '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        textAlign: 'right',
        fontFamily: 'monospace'
      }
    }, p.default_unit_price ? "".concat(p.default_currency || 'USD', " ").concat(p.default_unit_price) : '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '8px 10px',
        textAlign: 'center'
      }
    }, p.total_aftersales > 0 ? /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 7px',
        background: p.total_aftersales >= 5 ? '#fee2e2' : '#fef3c7',
        color: p.total_aftersales >= 5 ? '#b91c1c' : '#92400e',
        borderRadius: 8,
        fontSize: 10,
        fontWeight: 700
      }
    }, "\uD83D\uDD27 ", p.total_aftersales) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)'
      }
    }, "-")), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 10px',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setEditing(p);
      },
      style: {
        padding: '3px 8px',
        background: '#e0f2fe',
        color: '#0369a1',
        border: '1px solid #7dd3fc',
        borderRadius: 4,
        cursor: 'pointer',
        fontSize: 10,
        fontWeight: 600,
        marginRight: 3
      }
    }, "\u270F\uFE0F"), isAdmin && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return handleDelete(p);
      },
      style: {
        padding: '3px 8px',
        background: '#fef2f2',
        color: '#dc2626',
        border: '1px solid #fca5a5',
        borderRadius: 4,
        cursor: 'pointer',
        fontSize: 10,
        fontWeight: 600
      }
    }, "\uD83D\uDDD1")));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: '10px 12px',
      background: '#f0fdf4',
      border: '1px solid #86efac',
      borderRadius: 8,
      fontSize: 11,
      color: '#15803d',
      lineHeight: 1.6
    }
  }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("strong", null, "\u7528\u9014"), ":\u4EA7\u54C1\u4E3B\u8868\u662F\u516C\u53F8\u7684\"\u4EA7\u54C1\u5B57\u5178\"\u3002\u5C06\u6765\u5728\u7EBF\u4E0B\u5355 / \u552E\u540E / \u9000\u6B3E\u5F55\u5165\u65F6,\u53EF\u8F93\u5165 SKU \u81EA\u52A8\u586B\u5145\u4EA7\u54C1\u540D + \u56FE + \u4F9B\u5E94\u5546,\u5927\u5E45\u51CF\u5C11\u91CD\u590D\u8F93\u5165\u3002", /*#__PURE__*/React.createElement("br", null), "\u552E\u540E\u6B21\u6570\u4F1A\u5728 fix22 \u81EA\u52A8\u7EDF\u8BA1(\u57FA\u4E8E\u552E\u540E\u8BB0\u5F55\u7684 product_name \u5339\u914D),\u76EE\u524D\u4ECD\u53EF\u624B\u52A8\u7EF4\u62A4\u3002"), editing && /*#__PURE__*/React.createElement(ProductEditorModal, {
    product: editing === 'new' ? null : editing,
    suppliers: suppliers,
    user: user,
    categories: PRODUCT_CATEGORIES,
    onClose: function onClose() {
      return setEditing(null);
    },
    onSaved: function onSaved() {
      setEditing(null);
      load();
      toast('✓ 已保存');
    }
  }));
};
var ProductEditorModal = function ProductEditorModal(_ref65) {
  var product = _ref65.product,
    suppliers = _ref65.suppliers,
    user = _ref65.user,
    categories = _ref65.categories,
    onClose = _ref65.onClose,
    onSaved = _ref65.onSaved;
  var _useState129 = useState((product === null || product === void 0 ? void 0 : product.sku) || ''),
    _useState130 = _slicedToArray(_useState129, 2),
    sku = _useState130[0],
    setSku = _useState130[1];
  var _useState131 = useState((product === null || product === void 0 ? void 0 : product.name) || ''),
    _useState132 = _slicedToArray(_useState131, 2),
    name = _useState132[0],
    setName = _useState132[1];
  var _useState133 = useState((product === null || product === void 0 ? void 0 : product.category) || 'lighting'),
    _useState134 = _slicedToArray(_useState133, 2),
    category = _useState134[0],
    setCategory = _useState134[1];
  var _useState135 = useState((product === null || product === void 0 ? void 0 : product.supplier_id) || ''),
    _useState136 = _slicedToArray(_useState135, 2),
    supplierId = _useState136[0],
    setSupplierId = _useState136[1];
  var _useState137 = useState((product === null || product === void 0 ? void 0 : product.default_unit_price) || ''),
    _useState138 = _slicedToArray(_useState137, 2),
    defaultPrice = _useState138[0],
    setDefaultPrice = _useState138[1];
  var _useState139 = useState((product === null || product === void 0 ? void 0 : product.default_currency) || 'USD'),
    _useState140 = _slicedToArray(_useState139, 2),
    defaultCurrency = _useState140[0],
    setDefaultCurrency = _useState140[1];
  var _useState141 = useState((product === null || product === void 0 ? void 0 : product.image) || ''),
    _useState142 = _slicedToArray(_useState141, 2),
    image = _useState142[0],
    setImage = _useState142[1];
  var _useState143 = useState((product === null || product === void 0 ? void 0 : product.url) || ''),
    _useState144 = _slicedToArray(_useState143, 2),
    url = _useState144[0],
    setUrl = _useState144[1];
  var _useState145 = useState((product === null || product === void 0 ? void 0 : product.description) || ''),
    _useState146 = _slicedToArray(_useState145, 2),
    description = _useState146[0],
    setDescription = _useState146[1];
  var _useState147 = useState((product === null || product === void 0 ? void 0 : product.tags) || ''),
    _useState148 = _slicedToArray(_useState147, 2),
    tags = _useState148[0],
    setTags = _useState148[1];
  var _useState149 = useState((product === null || product === void 0 ? void 0 : product.notes) || ''),
    _useState150 = _slicedToArray(_useState149, 2),
    notes = _useState150[0],
    setNotes = _useState150[1];
  var _useState151 = useState(false),
    _useState152 = _slicedToArray(_useState151, 2),
    saving = _useState152[0],
    setSaving = _useState152[1];
  var isEdit = !!product;
  var handleSave = /*#__PURE__*/function () {
    var _ref66 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24() {
      var supplier, userName, id, record, ok, _t23;
      return _regenerator().w(function (_context24) {
        while (1) switch (_context24.p = _context24.n) {
          case 0:
            if (name.trim()) {
              _context24.n = 1;
              break;
            }
            alert('产品名必填');
            return _context24.a(2);
          case 1:
            setSaving(true);
            _context24.p = 2;
            supplier = suppliers.find(function (s) {
              return s.id === supplierId;
            });
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            id = (product === null || product === void 0 ? void 0 : product.id) || (crypto.randomUUID ? crypto.randomUUID() : 'prod_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8));
            record = {
              id: id,
              sku: sku.trim() || null,
              name: name.trim(),
              category: category,
              supplier_id: supplierId || null,
              supplier_name: supplier ? supplier.name : null,
              default_unit_price: defaultPrice ? parseFloat(defaultPrice) : null,
              default_currency: defaultCurrency,
              image: image || null,
              url: url.trim() || null,
              description: description.trim() || null,
              tags: tags.trim() || null,
              notes: notes.trim() || null,
              total_aftersales: (product === null || product === void 0 ? void 0 : product.total_aftersales) || 0,
              created_by: (product === null || product === void 0 ? void 0 : product.created_by) || user.id,
              created_by_name: (product === null || product === void 0 ? void 0 : product.created_by_name) || userName,
              created_at_ms: (product === null || product === void 0 ? void 0 : product.created_at_ms) || Date.now(),
              updated_at: new Date().toISOString()
            };
            _context24.n = 3;
            return CLOUD.upsert('products', record);
          case 3:
            ok = _context24.v;
            if (ok) {
              _context24.n = 4;
              break;
            }
            throw new Error('保存失败');
          case 4:
            onSaved();
            _context24.n = 6;
            break;
          case 5:
            _context24.p = 5;
            _t23 = _context24.v;
            alert('保存失败: ' + (_t23.message || _t23));
          case 6:
            setSaving(false);
          case 7:
            return _context24.a(2);
        }
      }, _callee24, null, [[2, 5]]);
    }));
    return function handleSave() {
      return _ref66.apply(this, arguments);
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
      maxWidth: 720,
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
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "\uD83D\uDCE6 ", isEdit ? '编辑产品' : '新建产品'), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      maxHeight: '70vh',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 3
    }
  }, "\u4EA7\u54C1\u56FE"), /*#__PURE__*/React.createElement(ProductImageSlot, {
    value: image,
    onChange: setImage,
    productName: name
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: 'var(--ink-4)',
      marginTop: 3,
      lineHeight: 1.4
    }
  }, "\u70B9\u51FB \xB7 Ctrl+V \xB7 \u62D6\u5165")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 3
    }
  }, "SKU"), /*#__PURE__*/React.createElement("input", {
    value: sku,
    onChange: function onChange(e) {
      return setSku(e.target.value);
    },
    placeholder: "\u5982 VKL-0042",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'monospace'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 3
    }
  }, "\u4EA7\u54C1\u540D *"), /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    placeholder: "\u5982 8-Light Bohemian Chandelier",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'inherit'
    }
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
      marginBottom: 3
    }
  }, "\u5206\u7C7B"), /*#__PURE__*/React.createElement("select", {
    value: category,
    onChange: function onChange(e) {
      return setCategory(e.target.value);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, categories.map(function (c) {
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
      marginBottom: 3
    }
  }, "\u4F9B\u5E94\u5546"), /*#__PURE__*/React.createElement("select", {
    value: supplierId,
    onChange: function onChange(e) {
      return setSupplierId(e.target.value);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 \u4E0D\u6307\u5B9A \u2014"), suppliers.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, s.name);
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 80px',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 3
    }
  }, "\u9ED8\u8BA4\u5355\u4EF7"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    value: defaultPrice,
    onChange: function onChange(e) {
      return setDefaultPrice(e.target.value);
    },
    placeholder: "0.00",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'monospace'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 3
    }
  }, "\u5E01\u79CD"), /*#__PURE__*/React.createElement("select", {
    value: defaultCurrency,
    onChange: function onChange(e) {
      return setDefaultCurrency(e.target.value);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "USD"
  }, "USD"), /*#__PURE__*/React.createElement("option", {
    value: "CNY"
  }, "CNY"), /*#__PURE__*/React.createElement("option", {
    value: "EUR"
  }, "EUR"), /*#__PURE__*/React.createElement("option", {
    value: "GBP"
  }, "GBP"), /*#__PURE__*/React.createElement("option", {
    value: "AUD"
  }, "AUD")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 3
    }
  }, "\u4EA7\u54C1 URL"), /*#__PURE__*/React.createElement("input", {
    value: url,
    onChange: function onChange(e) {
      return setUrl(e.target.value);
    },
    placeholder: "https://vakkerlight.com/products/...",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'monospace'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 3
    }
  }, "\u6807\u7B7E (\u7528\u9017\u53F7\u6216\u7A7A\u683C\u5206\u9694)"), /*#__PURE__*/React.createElement("input", {
    value: tags,
    onChange: function onChange(e) {
      return setTags(e.target.value);
    },
    placeholder: "\u5982 \u9EC4\u94DC, \u53E4\u5178, \u5BA2\u5385",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 3
    }
  }, "\u4EA7\u54C1\u63CF\u8FF0"), /*#__PURE__*/React.createElement("textarea", {
    value: description,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    },
    rows: 2,
    placeholder: "\u89C4\u683C / \u6750\u8D28 / \u5C3A\u5BF8...",
    style: {
      width: '100%',
      padding: '7px 10px',
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
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 3
    }
  }, "\u5185\u90E8\u5907\u6CE8"), /*#__PURE__*/React.createElement("textarea", {
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
    rows: 2,
    placeholder: "\u6613\u788E\u6CE8\u610F\u4E8B\u9879 / \u7269\u6D41\u8981\u6C42 / \u5386\u53F2\u95EE\u9898...",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px',
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 6,
      background: '#fafafa'
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
    onClick: handleSave,
    disabled: saving,
    style: {
      padding: '7px 18px',
      background: '#1e40af',
      color: 'white',
      border: 'none',
      borderRadius: 7,
      cursor: saving ? 'wait' : 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, saving ? '保存中...' : isEdit ? '💾 保存修改' : '+ 创建')))), document.body);
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix49: 拍摄部对接配置 — WorkTrack-KPI Supabase URL + Anon Key
// 由 Martin 提供;只有 super_admin / admin 能配置
// 配置成功后,客服系统就能写入 WorkTrack-KPI 的 photo_logs 表
// ════════════════════════════════════════════════════════════════════
