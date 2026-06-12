// ====== cs-system — 06-chargebacks-offline ======
// 版本 2026.06.05-fix219
// 预编译切片
//
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
// ====== cs-system — 06-chargebacks-offline ======
// 版本 2026.06.05-fix219
// 预编译切片
//

var ChargebacksModule = function ChargebacksModule(_ref) {
  var user = _ref.user,
    employees = _ref.employees,
    toast = _ref.toast,
    focusId = _ref.focusId;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    list = _useState2[0],
    setList = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    editing = _useState6[0],
    setEditing = _useState6[1];
  // 🆕 fix145: 从提醒/搜索跳来 → 等数据加载好,找到该条 → 自动打开编辑;useRef 防重复弹开
  var cbFocusRef = useRef(null);
  useEffect(function () {
    if (focusId && focusId !== cbFocusRef.current) {
      var cb = (list || []).find(function (x) {
        return x.id === focusId;
      });
      if (cb) {
        cbFocusRef.current = focusId;
        setEditing(cb);
      }
    }
  }, [focusId, list]);
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    cbListModal = _useState8[0],
    setCbListModal = _useState8[1]; // 🆕 fix81: 数字点击弹列表
  var _useState9 = useState('active'),
    _useState0 = _slicedToArray(_useState9, 2),
    filterStatus = _useState0[0],
    setFilterStatus = _useState0[1];
  var _useState1 = useState(''),
    _useState10 = _slicedToArray(_useState1, 2),
    search = _useState10[0],
    setSearch = _useState10[1];
  var _useState11 = useState('all'),
    _useState12 = _slicedToArray(_useState11, 2),
    filterOwner = _useState12[0],
    setFilterOwner = _useState12[1]; // 🆕 fix75: 客服筛选
  var _useState13 = useState('updated'),
    _useState14 = _slicedToArray(_useState13, 2),
    cbSortBy = _useState14[0],
    setCbSortBy = _useState14[1]; // 🆕 排序
  var _useState15 = useState('desc'),
    _useState16 = _slicedToArray(_useState15, 2),
    cbSortDir = _useState16[0],
    setCbSortDir = _useState16[1];
  // 🆕 fix109: 列表 / 网格视图(默认列表,存本地)
  var _useState17 = useState(function () {
      try {
        return localStorage.getItem('cb_view_mode') || 'list';
      } catch (e) {
        return 'list';
      }
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    cbViewMode = _useState18[0],
    setCbViewMode = _useState18[1];
  var setCbView = function setCbView(m) {
    setCbViewMode(m);
    try {
      localStorage.setItem('cb_view_mode', m);
    } catch (e) {}
  };
  // 🆕 时间筛选
  var _useState19 = useState('all'),
    _useState20 = _slicedToArray(_useState19, 2),
    timeFilter = _useState20[0],
    setTimeFilter = _useState20[1];
  var _useState21 = useState({
      start: '',
      end: ''
    }),
    _useState22 = _slicedToArray(_useState21, 2),
    timeCustom = _useState22[0],
    setTimeCustom = _useState22[1];
  // 🆕 fix15: 日期范围筛选(新:"创建在范围内"语义,支持本周/本月/任意月第N周)
  var _useState23 = useState({
      kind: 'all'
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    dateFilter = _useState24[0],
    setDateFilter = _useState24[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var load = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var data, live, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setLoading(true);
            _context.p = 1;
            _context.n = 2;
            return CLOUD.list('chargebacks', {
              order: {
                col: 'deadline',
                asc: true
              },
              limit: 500
            });
          case 2:
            data = _context.v;
            live = (data || []).filter(function (c) {
              return !c.deleted;
            });
            setList(live);
            STORE.set('chargebacks_cache', live); // 🆕 缓存供 stats 计数用
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            toast('❌ 加载失败: ' + _t.message);
          case 4:
            setLoading(false);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function load() {
      return _ref2.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
  }, []);
  var handleDelete = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(cb) {
      var summary;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            summary = "".concat(cb.order_no, " \xB7 ").concat(cb.currency || 'USD', " ").concat(cb.amount || 0, " \xB7 ").concat(cb.customer_email || cb.customer_name || '?');
            _context2.n = 1;
            return requestDelete({
              user: user,
              tableName: 'chargebacks',
              moduleLabel: '🚨 拒付',
              record: cb,
              recordSummary: summary,
              toast: toast,
              onSuccess: load
            });
          case 1:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function handleDelete(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var filtered = useMemo(function () {
    var l = list;
    if (filterStatus === 'active') l = l.filter(function (c) {
      return !['won', 'lost', 'closed', 'responded', 'awaiting'].includes(c.status);
    });else if (filterStatus === 'mine') l = l.filter(function (c) {
      return (c.assigned_to || []).includes(user.id) || c.created_by === user.id;
    });else if (filterStatus === 'awaiting') l = l.filter(function (c) {
      return c.status === 'awaiting' || c.status === 'responded';
    });else if (filterStatus !== 'all') l = l.filter(function (c) {
      return c.status === filterStatus;
    });
    if (search.trim()) {
      var q = search.trim().toLowerCase();
      l = l.filter(function (c) {
        return (c.order_no || '').toLowerCase().includes(q) || (c.customer_email || '').toLowerCase().includes(q) || (c.customer_name || '').toLowerCase().includes(q) || (c.notes || '').toLowerCase().includes(q);
      });
    }

    // 🆕 时间筛选
    l = filterByTimeRange(l, timeFilter, timeCustom.start, timeCustom.end, 'created_at');
    // 🆕 fix15: 日期范围筛选(创建在范围内)
    l = filterByDateRange(l, dateFilter, 'created_at');

    // 🆕 fix75: 客服筛选(负责人=created_by 或 assigned_to 含该人)
    if (filterOwner !== 'all') l = l.filter(function (c) {
      return c.created_by === filterOwner || (c.assigned_to || []).includes(filterOwner);
    });

    // 🆕 fix75: 排序(模仿电脑文件管理器)
    var CB_STATUS_ORDER = {
      pending: 0,
      responded: 1,
      awaiting: 2,
      won: 3,
      lost: 4,
      closed: 5
    };
    var ckey = function ckey(c) {
      var _CB_STATUS_ORDER$c$st;
      switch (cbSortBy) {
        case 'updated':
          return c.updated_at || c.created_at || '';
        case 'created':
          return c.created_at || '';
        case 'customer':
          return (c.customer_name || c.customer_email || '').toLowerCase();
        case 'order':
          return (c.order_no || '').toLowerCase();
        case 'status':
          return (_CB_STATUS_ORDER$c$st = CB_STATUS_ORDER[c.status]) !== null && _CB_STATUS_ORDER$c$st !== void 0 ? _CB_STATUS_ORDER$c$st : 9;
        case 'amount':
          return parseFloat(c.amount) || 0;
        default:
          return c.updated_at || c.created_at || '';
      }
    };
    l = _toConsumableArray(l).sort(function (a, b) {
      var ka = ckey(a),
        kb = ckey(b);
      var cmp = typeof ka === 'number' && typeof kb === 'number' ? ka - kb : String(ka).localeCompare(String(kb));
      return cbSortDir === 'desc' ? -cmp : cmp;
    });
    return l;
  }, [list, filterStatus, search, user.id, timeFilter, timeCustom, dateFilter, filterOwner, cbSortBy, cbSortDir]);
  var stats = useMemo(function () {
    var active = list.filter(function (c) {
      return !['won', 'lost', 'closed', 'responded', 'awaiting'].includes(c.status);
    });
    return {
      total: list.length,
      active: active.length,
      urgent: active.filter(function (c) {
        var u = getChargebackUrgency(c);
        return u && (u.level === 'overdue' || u.level === 'today' || u.level === 'critical' || u.level === 'urgent');
      }).length,
      won: list.filter(function (c) {
        return c.status === 'won';
      }).length,
      lost: list.filter(function (c) {
        return c.status === 'lost';
      }).length,
      mine: list.filter(function (c) {
        return (c.assigned_to || []).includes(user.id) && c.status !== 'won' && c.status !== 'lost' && c.status !== 'closed';
      }).length
    };
  }, [list, user.id]);
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
  }, "\uD83D\uDEA8 \u62D2\u4ED8\u7BA1\u7406"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "\u5171 ", /*#__PURE__*/React.createElement("strong", null, stats.total), " \xB7 \u8FDB\u884C\u4E2D ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#dc2626'
    }
  }, stats.active), stats.urgent > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#dc2626',
      marginLeft: 8,
      fontWeight: 600
    }
  }, " \xB7 \uD83D\uDD25 ", stats.urgent, " \u6025"), stats.mine > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#7c3aed',
      marginLeft: 8,
      fontWeight: 600
    }
  }, " \xB7 \uD83D\uDC64 \u6211\u8D1F\u8D23 ", stats.mine), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      color: '#15803d'
    }
  }, " \xB7 \u80DC\u8BC9 ", stats.won), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6
    }
  }, "\xB7 \u8D25\u8BC9 ", stats.lost))), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEditing('new');
    },
    className: "btn-pri",
    style: {
      padding: '6px 14px',
      fontSize: 12
    }
  }, "+ \u65B0\u589E\u62D2\u4ED8")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, [{
    key: 'active',
    label: '🔥 进行中',
    cnt: stats.active
  }, {
    key: 'mine',
    label: '👤 我的',
    cnt: stats.mine
  }, {
    key: 'pending',
    label: '⏳ 待证据',
    cnt: list.filter(function (c) {
      return c.status === 'pending';
    }).length
  }, {
    key: 'awaiting',
    label: '🏦 已提交·等裁决',
    cnt: list.filter(function (c) {
      return c.status === 'awaiting' || c.status === 'responded';
    }).length
  }, {
    key: 'won',
    label: '✅ 胜诉',
    cnt: stats.won
  }, {
    key: 'lost',
    label: '❌ 败诉',
    cnt: stats.lost
  }, {
    key: 'all',
    label: '📋 全部',
    cnt: stats.total
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
    }, t.label, " (", t.cnt, ")");
  })), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u641C\u7D22\u8BA2\u5355\u53F7 / \u5BA2\u6237\u90AE\u7BB1 / \u5907\u6CE8...",
    style: {
      width: '100%',
      marginTop: 10,
      padding: '6px 12px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83D\uDC64 \u5BA2\u670D"), /*#__PURE__*/React.createElement("select", {
    value: filterOwner,
    onChange: function onChange(e) {
      return setFilterOwner(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8"), employees.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.name, e.alias ? " (".concat(e.alias, ")") : '');
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\u2195 \u6392\u5E8F"), /*#__PURE__*/React.createElement("select", {
    value: cbSortBy,
    onChange: function onChange(e) {
      return setCbSortBy(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "updated"
  }, "\u4FEE\u6539\u65E5\u671F"), /*#__PURE__*/React.createElement("option", {
    value: "created"
  }, "\u521B\u5EFA\u65E5\u671F"), /*#__PURE__*/React.createElement("option", {
    value: "customer"
  }, "\u5BA2\u6237\u540D"), /*#__PURE__*/React.createElement("option", {
    value: "order"
  }, "\u8BA2\u5355\u53F7"), /*#__PURE__*/React.createElement("option", {
    value: "status"
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("option", {
    value: "amount"
  }, "\u91D1\u989D")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCbSortDir(function (d) {
        return d === 'desc' ? 'asc' : 'desc';
      });
    },
    title: cbSortDir === 'desc' ? '降序' : '升序',
    style: {
      padding: '4px 9px',
      fontSize: 12,
      border: '1px solid var(--line)',
      borderRadius: 6,
      background: 'white',
      cursor: 'pointer',
      fontWeight: 600
    }
  }, cbSortDir === 'desc' ? '↓' : '↑')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      border: '1px solid var(--line)',
      borderRadius: 6,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCbView('list');
    },
    title: "\u5217\u8868\u89C6\u56FE",
    style: {
      padding: '4px 10px',
      fontSize: 11,
      border: 'none',
      cursor: 'pointer',
      fontWeight: 600,
      background: cbViewMode === 'list' ? '#0071e3' : 'white',
      color: cbViewMode === 'list' ? 'white' : 'var(--ink-2)'
    }
  }, "\u2630 \u5217\u8868"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCbView('grid');
    },
    title: "\u7F51\u683C\u89C6\u56FE",
    style: {
      padding: '4px 10px',
      fontSize: 11,
      border: 'none',
      cursor: 'pointer',
      fontWeight: 600,
      background: cbViewMode === 'grid' ? '#0071e3' : 'white',
      color: cbViewMode === 'grid' ? 'white' : 'var(--ink-2)'
    }
  }, "\u25A6 \u7F51\u683C"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      paddingTop: 10,
      borderTop: '1px dashed var(--line)'
    }
  }, /*#__PURE__*/React.createElement(TimeRangeFilter, {
    value: timeFilter,
    onChange: setTimeFilter,
    customStart: timeCustom.start,
    customEnd: timeCustom.end,
    onCustomChange: setTimeCustom,
    label: "\uD83D\uDD53 \u8D85\u671F\u7B5B\u9009:",
    records: list,
    dateField: "created_at"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
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
  }, "\uD83D\uDCC5 \u521B\u5EFA\u65F6\u95F4:"), /*#__PURE__*/React.createElement(AdvancedDateFilter, {
    value: dateFilter,
    onChange: setDateFilter,
    size: "sm"
  }))), /*#__PURE__*/React.createElement(AmountSummaryWidget, {
    title: "\u62D2\u4ED8\u91D1\u989D\u6C47\u603B",
    icon: "\uD83D\uDEA8",
    color: "#dc2626",
    items: list,
    statusLabels: {
      pending: {
        label: '待提交证据',
        color: '#dc2626',
        bg: '#fef2f2'
      },
      responded: {
        label: '已提交证据',
        color: '#854d0e',
        bg: '#fef3c7'
      },
      awaiting: {
        label: '等争议结果·银行处理中',
        color: '#1e40af',
        bg: '#dbeafe'
      },
      won: {
        label: '胜诉',
        color: '#15803d',
        bg: '#dcfce7'
      },
      lost: {
        label: '败诉',
        color: '#525252',
        bg: '#f5f5f7'
      },
      closed: {
        label: '已关闭',
        color: '#737373',
        bg: '#f5f5f7'
      }
    },
    getSite: function getSite(c) {
      return c.site || c.website || wsOrderSite(c.order_no);
    },
    onClickStats: function onClickStats(_ref4) {
      var records = _ref4.records,
        title = _ref4.title;
      return setCbListModal({
        events: records,
        title: title,
        kind: 'chargeback',
        accent: '#dc2626',
        icon: '🚨'
      });
    }
  }), loading ? /*#__PURE__*/React.createElement("div", {
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
  }, "\uD83C\uDF89 \u6682\u65E0\u62D2\u4ED8 ", filterStatus !== 'all' ? '(当前筛选下)' : '') : /*#__PURE__*/React.createElement("div", {
    className: cbViewMode === 'grid' ? '' : 'space-y-2',
    style: cbViewMode === 'grid' ? {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(360px,1fr))',
      gap: 12
    } : undefined
  }, filtered.map(function (cb) {
    return /*#__PURE__*/React.createElement(ChargebackCard, {
      key: cb.id,
      cb: cb,
      employees: employees,
      user: user,
      isAdmin: isAdmin,
      onEdit: function onEdit() {
        return setEditing(cb);
      },
      onDelete: function onDelete() {
        return handleDelete(cb);
      },
      onReload: load,
      toast: toast
    });
  })), editing && /*#__PURE__*/React.createElement(ChargebackEditor, {
    cb: editing === 'new' ? null : editing,
    user: user,
    employees: employees,
    onClose: function onClose() {
      return setEditing(null);
    },
    onSaved: function onSaved() {
      setEditing(null);
      load();
    },
    toast: toast
  }), cbListModal && /*#__PURE__*/React.createElement(EventListModal, _extends({}, cbListModal, {
    employees: employees,
    onClose: function onClose() {
      return setCbListModal(null);
    },
    onClickEvent: function onClickEvent(cb) {
      setCbListModal(null);
      setEditing(cb);
    }
  })));
};
var ChargebackCard = function ChargebackCard(_ref5) {
  var cb = _ref5.cb,
    employees = _ref5.employees,
    user = _ref5.user,
    isAdmin = _ref5.isAdmin,
    onEdit = _ref5.onEdit,
    onDelete = _ref5.onDelete,
    onReload = _ref5.onReload,
    toast = _ref5.toast;
  var _useState25 = useState(false),
    _useState26 = _slicedToArray(_useState25, 2),
    expanded = _useState26[0],
    setExpanded = _useState26[1];
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    previewFile = _useState28[0],
    setPreviewFile = _useState28[1];
  // 🆕 fix139: 证据图按需取(列表不带 evidence_files,展开时才拉)
  var _useState29 = useState(null),
    _useState30 = _slicedToArray(_useState29, 2),
    loadedEvidence = _useState30[0],
    setLoadedEvidence = _useState30[1];
  useEffect(function () {
    if (!expanded || loadedEvidence !== null || Array.isArray(cb.evidence_files)) return;
    var alive = true;
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _yield$CLOUD$client$f, data, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return CLOUD.client.from('chargebacks').select('evidence_files').eq('id', cb.id).maybeSingle();
          case 1:
            _yield$CLOUD$client$f = _context3.v;
            data = _yield$CLOUD$client$f.data;
            if (alive) setLoadedEvidence(data && data.evidence_files || []);
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t2 = _context3.v;
            if (alive) setLoadedEvidence([]);
          case 3:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }))();
    return function () {
      alive = false;
    };
  }, [expanded]);
  var urgency = getChargebackUrgency(cb);
  var status = CHARGEBACK_STATUSES.find(function (s) {
    return s.key === cb.status;
  }) || CHARGEBACK_STATUSES[0];
  var reason = CHARGEBACK_REASONS.find(function (r) {
    return r.key === cb.reason;
  });
  var evidence = Array.isArray(cb.evidence_files) ? cb.evidence_files : loadedEvidence || [];
  var setStatus = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(newStatus) {
      var res;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.n = 1;
            return CLOUD.upsert('chargebacks', _objectSpread(_objectSpread({}, cb), {}, {
              status: newStatus,
              updated_at: new Date().toISOString()
            }));
          case 1:
            res = _context4.v;
            if (res) {
              toast('✓ 已更新状态');
              onReload();
            }
          case 2:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function setStatus(_x2) {
      return _ref7.apply(this, arguments);
    };
  }();
  // 🆕 fix118: 手工标记"客服失误"(计入绩效奖惩 -3/次,按失误人月统计)· 需先在 chargebacks 表加 cs_fault/cs_fault_emp 列
  var toggleFault = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var next, res;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            next = !cb.cs_fault;
            _context5.n = 1;
            return CLOUD.upsert('chargebacks', _objectSpread(_objectSpread({}, cb), {}, {
              cs_fault: next,
              cs_fault_emp: next ? cb.cs_fault_emp || cb.created_by : null,
              updated_at: new Date().toISOString()
            }));
          case 1:
            res = _context5.v;
            if (res) {
              toast(next ? '⚠️ 已标记客服失误 · 绩效 -3' : '已取消客服失误标记');
              onReload && onReload();
            }
          case 2:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function toggleFault() {
      return _ref8.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl fade-in",
    style: {
      overflow: 'hidden',
      border: '1.5px solid ' + (urgency && ['overdue', 'today', 'critical'].includes(urgency.level) ? urgency.color : 'var(--line)'),
      background: urgency && ['overdue', 'today'].includes(urgency.level) ? '#fef2f2' : 'white'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 240px',
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600,
      background: status.bg,
      color: status.color
    }
  }, status.label), urgency && urgency.level !== 'normal' && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 700,
      background: urgency.bg,
      color: urgency.color,
      border: "1px solid ".concat(urgency.color, "40")
    }
  }, "\u23F0 ", urgency.label), cb.platform && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#e0e7ff',
      color: '#4338ca',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, cb.platform), cb.site && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#f5f5f7',
      color: 'var(--ink-3)',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, cb.site)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement(OrderRefLink, {
    orderNo: cb.order_no
  }), " \xB7 \uD83D\uDCB0 ", cb.currency || 'USD', " ", cb.amount || 0), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-2)'
    }
  }, "\uD83D\uDCE7 ", cb.customer_email || '?', cb.customer_name ? " \xB7 ".concat(cb.customer_name) : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 6,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u4EA7\u54C1\u56FE"), /*#__PURE__*/React.createElement(OrderProductThumb, {
    orderNo: cb.order_no,
    onPreview: function onPreview(u) {
      return setPreviewFile({
        url: u,
        name: '产品图',
        mime: 'image/jpeg'
      });
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 8,
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '4px 12px',
      borderRadius: 9,
      background: (urgency === null || urgency === void 0 ? void 0 : urgency.bg) || '#f5f5f7',
      border: "1.5px solid ".concat((urgency === null || urgency === void 0 ? void 0 : urgency.color) || '#d1d1d6')
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\u23F3 \u622A\u6B62"), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: 18,
      fontWeight: 800,
      color: (urgency === null || urgency === void 0 ? void 0 : urgency.color) || 'var(--ink)',
      letterSpacing: '-.01em',
      lineHeight: 1
    }
  }, cb.deadline || '—'), urgency && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: urgency.color
    }
  }, "\xB7 ", urgency.label)), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCC5 \u62D2\u4ED8\u5F00\u59CB ", cb.opened_at), reason && /*#__PURE__*/React.createElement("span", null, "\xB7 ", reason.label), (cb.assigned_to_names || []).length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#7c3aed',
      fontWeight: 600
    }
  }, "\xB7 \uD83D\uDC65 ", cb.assigned_to_names.join(' + ')), /*#__PURE__*/React.createElement("span", null, "\xB7 \u5F55\u5165 ", cb.created_by_name)), cb.reason_detail && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      padding: '5px 10px',
      background: '#fef9c3',
      borderRadius: 5,
      fontSize: 12,
      color: '#713f12'
    }
  }, "\uD83D\uDCAC ", cb.reason_detail)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      flexShrink: 0
    }
  }, cb.status === 'pending' && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStatus('responded');
    },
    style: {
      padding: '5px 12px',
      background: '#0369a1',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\uD83D\uDCE4 \u6807\u8BB0\u5DF2\u63D0\u4EA4\u8BC1\u636E"), cb.status === 'responded' && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStatus('awaiting');
    },
    style: {
      padding: '5px 12px',
      background: '#1e40af',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\u23F3 \u63D0\u4EA4\u540E\xB7\u7B49\u94F6\u884C\u88C1\u51B3(90-120\u5929)"), cb.status === 'awaiting' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '5px 8px',
      background: '#dbeafe',
      color: '#1e40af',
      borderRadius: 5,
      fontSize: 11,
      fontWeight: 600
    }
  }, "\u23F3 \u7B49\u94F6\u884C\u88C1\u51B3\u4E2D"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStatus('won');
    },
    style: {
      padding: '5px 12px',
      background: '#15803d',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\u2705 \u80DC\u8BC9"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStatus('lost');
    },
    style: {
      padding: '5px 12px',
      background: '#737373',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\u274C \u8D25\u8BC9")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setExpanded(function (v) {
        return !v;
      });
    },
    className: "btn-sec",
    style: {
      padding: '5px 10px',
      fontSize: 11
    }
  }, expanded ? '收起 ▲' : '详情 ▼'), /*#__PURE__*/React.createElement("button", {
    onClick: onEdit,
    style: {
      padding: '5px 10px',
      background: '#e0f2fe',
      color: '#0369a1',
      border: '1px solid #7dd3fc',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\u270F\uFE0F"), isAdmin && /*#__PURE__*/React.createElement("button", {
    onClick: toggleFault,
    title: "\u6807\u8BB0/\u53D6\u6D88\u300C\u5BA2\u670D\u5931\u8BEF\u300D\xB7 \u8BA1\u5165\u7EE9\u6548\u5956\u60E9 -3/\u6B21",
    style: {
      padding: '5px 10px',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      background: cb.cs_fault ? '#fef2f2' : 'white',
      color: cb.cs_fault ? '#dc2626' : 'var(--ink-3)',
      border: '1px solid ' + (cb.cs_fault ? '#fca5a5' : 'var(--line)')
    }
  }, cb.cs_fault ? '⚠️客服失误✓' : '标记失误'), (isAdmin || cb.created_by === user.id) && /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    style: {
      padding: '5px 10px',
      background: '#fef2f2',
      color: '#dc2626',
      border: '1px solid #fca5a5',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\uD83D\uDDD1"))), function () {
    var handler = (cb.assigned_to_names || []).join(' / ');
    var steps = [{
      id: 'recv',
      label: '受理',
      icon: '📥',
      who: cb.created_by_name,
      when: fmtStepDate(cb.opened_at || cb.created_at),
      done: !!cb.created_by_name && !!(cb.opened_at || cb.created_at),
      color: '#2563eb'
    }, {
      id: 'proc',
      label: '处理',
      icon: '🔧',
      who: handler,
      when: fmtStepDate(cb.assigned_at),
      done: !!handler && !!cb.assigned_at,
      color: '#9333ea'
    }, {
      id: 'done',
      label: '完成',
      icon: '✅',
      who: handler,
      when: fmtStepDate(cb.resolved_at),
      done: ['won', 'lost', 'closed'].includes(cb.status) && !!cb.resolved_at,
      color: '#16a34a'
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        paddingTop: 10,
        borderTop: '1px dashed var(--line)'
      }
    }, /*#__PURE__*/React.createElement(ProcessStepper, {
      steps: steps
    }));
  }(), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      padding: 10,
      background: '#f5f5f7',
      borderRadius: 8
    }
  }, cb.notes && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginBottom: 3
    }
  }, "\uD83D\uDCDD \u5904\u7406\u8BB0\u5F55:"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      background: 'white',
      borderRadius: 5,
      fontSize: 12,
      whiteSpace: 'pre-wrap'
    }
  }, cb.notes)), cb.resolution && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginBottom: 3
    }
  }, "\u2705 \u6700\u7EC8\u7ED3\u679C:"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      background: 'white',
      borderRadius: 5,
      fontSize: 12,
      whiteSpace: 'pre-wrap'
    }
  }, cb.resolution)), evidence.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginBottom: 5
    }
  }, "\uD83D\uDCCE \u8BC1\u636E\u6750\u6599 (", evidence.length, "):"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gap: 5
    }
  }, evidence.map(function (a) {
    var info = getFileTypeInfo(a);
    return info.kind === 'image' ? /*#__PURE__*/React.createElement("img", {
      key: a.id,
      src: a.url,
      onClick: function onClick() {
        return setPreviewFile(a);
      },
      style: {
        width: '100%',
        height: 75,
        objectFit: 'contain',
        borderRadius: 5,
        cursor: 'pointer',
        border: '1px solid var(--line)',
        background: 'var(--bg-elevated)'
      }
    }) : /*#__PURE__*/React.createElement(FileChip, {
      key: a.id,
      file: a,
      onClick: function onClick() {
        return setPreviewFile(a);
      }
    });
  }))))), previewFile && /*#__PURE__*/React.createElement(FilePreviewModal, {
    file: previewFile,
    onClose: function onClose() {
      return setPreviewFile(null);
    }
  }));
};

// ============================================================
// 🆕 FormGuide - 可复用「新人填写指引」(默认折叠,点开看怎么填 + 怎么标问题反馈)
// 用法: <FormGuide title="拒付登记" steps={[...]} feedbackTip="..." />
// ============================================================
var FormGuide = function FormGuide(_ref9) {
  var title = _ref9.title,
    _ref9$steps = _ref9.steps,
    steps = _ref9$steps === void 0 ? [] : _ref9$steps,
    feedbackTip = _ref9.feedbackTip;
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    open = _useState32[0],
    setOpen = _useState32[1];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: open ? 14 : 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setOpen(function (o) {
        return !o;
      });
    },
    style: {
      padding: '5px 12px',
      fontSize: 12,
      background: open ? '#0071e3' : '#eff6ff',
      color: open ? 'white' : '#0369a1',
      border: '1px solid #93c5fd',
      borderRadius: 7,
      cursor: 'pointer',
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, open ? '收起填写指引 ▲' : '❓ 怎么填(新人必看)'), open && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: '12px 14px',
      background: '#f0f9ff',
      border: '1px solid #bae6fd',
      borderRadius: 10,
      fontSize: 12.5,
      lineHeight: 1.7,
      color: '#0c4a6e'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      marginBottom: 6
    }
  }, "\uD83D\uDCCB ", title, " \xB7 \u586B\u5199\u6B65\u9AA4"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      paddingLeft: 18
    }
  }, steps.map(function (s, i) {
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        marginBottom: 5
      }
    }, s);
  })), feedbackTip && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      padding: '9px 11px',
      background: '#fffbeb',
      border: '1px solid #fcd34d',
      borderRadius: 8,
      color: '#92400e',
      lineHeight: 1.6
    }
  }, "\uD83D\uDCE3 ", /*#__PURE__*/React.createElement("strong", null, "\u9047\u5230\u53CD\u590D\u51FA\u73B0\u7684\u95EE\u9898\u60F3\u53CD\u9988?"), /*#__PURE__*/React.createElement("br", null), feedbackTip)));
};
var ChargebackEditor = function ChargebackEditor(_ref0) {
  var cb = _ref0.cb,
    user = _ref0.user,
    employees = _ref0.employees,
    onClose = _ref0.onClose,
    onSaved = _ref0.onSaved,
    toast = _ref0.toast;
  var isEdit = !!cb;
  var today = todayISO();
  var defaultDeadline = function () {
    var d = new Date();
    d.setDate(d.getDate() + 7);
    return d.toISOString().slice(0, 10);
  }();

  // ✂ 简化版字段:只保留主管要求的最核心字段
  var _useState33 = useState((cb === null || cb === void 0 ? void 0 : cb.order_no) || ''),
    _useState34 = _slicedToArray(_useState33, 2),
    orderNo = _useState34[0],
    setOrderNo = _useState34[1];
  var _useState35 = useState((cb === null || cb === void 0 ? void 0 : cb.customer_email) || ''),
    _useState36 = _slicedToArray(_useState35, 2),
    customerEmail = _useState36[0],
    setCustomerEmail = _useState36[1];
  var _useState37 = useState((cb === null || cb === void 0 ? void 0 : cb.platform) || 'Stripe'),
    _useState38 = _slicedToArray(_useState37, 2),
    platform = _useState38[0],
    setPlatform = _useState38[1];
  var _useState39 = useState((cb === null || cb === void 0 ? void 0 : cb.amount) || ''),
    _useState40 = _slicedToArray(_useState39, 2),
    amount = _useState40[0],
    setAmount = _useState40[1];
  var _useState41 = useState((cb === null || cb === void 0 ? void 0 : cb.currency) || 'USD'),
    _useState42 = _slicedToArray(_useState41, 2),
    currency = _useState42[0],
    setCurrency = _useState42[1];
  var _useState43 = useState((cb === null || cb === void 0 ? void 0 : cb.opened_at) || today),
    _useState44 = _slicedToArray(_useState43, 2),
    openedAt = _useState44[0],
    setOpenedAt = _useState44[1];
  var _useState45 = useState((cb === null || cb === void 0 ? void 0 : cb.deadline) || defaultDeadline),
    _useState46 = _slicedToArray(_useState45, 2),
    deadline = _useState46[0],
    setDeadline = _useState46[1];
  var _useState47 = useState((cb === null || cb === void 0 ? void 0 : cb.reason) || 'product'),
    _useState48 = _slicedToArray(_useState47, 2),
    reason = _useState48[0],
    setReason = _useState48[1]; // 🆕 加回拒付原因
  var _useState49 = useState((cb === null || cb === void 0 ? void 0 : cb.notes) || ''),
    _useState50 = _slicedToArray(_useState49, 2),
    notes = _useState50[0],
    setNotes = _useState50[1];
  var _useState51 = useState(Array.isArray(cb === null || cb === void 0 ? void 0 : cb.evidence_files) ? cb.evidence_files : []),
    _useState52 = _slicedToArray(_useState51, 2),
    evidence = _useState52[0],
    setEvidence = _useState52[1];
  // 🆕 fix139: 编辑已有拒付时,列表未带 evidence_files → 按需补取,避免保存时清空原证据
  useEffect(function () {
    if (!cb || !cb.id || Array.isArray(cb.evidence_files)) return;
    var alive = true;
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var _yield$CLOUD$client$f2, data, _t3;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            _context6.n = 1;
            return CLOUD.client.from('chargebacks').select('evidence_files').eq('id', cb.id).maybeSingle();
          case 1:
            _yield$CLOUD$client$f2 = _context6.v;
            data = _yield$CLOUD$client$f2.data;
            if (alive && data && Array.isArray(data.evidence_files) && data.evidence_files.length) setEvidence(data.evidence_files);
            _context6.n = 3;
            break;
          case 2:
            _context6.p = 2;
            _t3 = _context6.v;
          case 3:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 2]]);
    }))();
    return function () {
      alive = false;
    };
  }, []);
  // 🆕 fix119: 拒付表单一键拉取订单 → 自动填客户邮箱/金额/币种 + 选产品图入证据
  var _useState53 = useState({
      loading: false,
      products: null
    }),
    _useState54 = _slicedToArray(_useState53, 2),
    cbPull = _useState54[0],
    setCbPull = _useState54[1];
  var cbDoPull = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var on, v, _t4;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            on = (orderNo || '').trim();
            if (on) {
              _context7.n = 1;
              break;
            }
            alert('请先填订单编号');
            return _context7.a(2);
          case 1:
            setCbPull({
              loading: true,
              products: null
            });
            _context7.p = 2;
            _context7.n = 3;
            return wsFetchOrderProducts(on);
          case 3:
            v = _context7.v;
            setCbPull({
              loading: false,
              products: v && v.products || []
            });
            if (v) {
              if (!(customerEmail || '').trim() && v.email) setCustomerEmail(v.email);
              if (!(amount || '').toString().trim() && v.total) setAmount(v.total);
              if (v.currency) setCurrency(v.currency);
            }
            _context7.n = 5;
            break;
          case 4:
            _context7.p = 4;
            _t4 = _context7.v;
            setCbPull({
              loading: false,
              products: []
            });
          case 5:
            return _context7.a(2);
        }
      }, _callee7, null, [[2, 4]]);
    }));
    return function cbDoPull() {
      return _ref10.apply(this, arguments);
    };
  }();
  var cbIsImgSaved = function cbIsImgSaved(p) {
    return (evidence || []).some(function (a) {
      return (a.url || a.dataUrl) === p.image_url;
    });
  };
  var cbMakeImg = function cbMakeImg(p) {
    return {
      id: 'a_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      url: p.image_url,
      label: '产品图',
      kind: 'image',
      mime: 'image/jpeg',
      name: (p.title || 'product') + '.jpg',
      from_order: true,
      uploaded_at: new Date().toISOString()
    };
  };
  var cbPickImg = function cbPickImg(p) {
    if (!p.image_url) return;
    if (cbIsImgSaved(p)) setEvidence((evidence || []).filter(function (a) {
      return (a.url || a.dataUrl) !== p.image_url;
    }));else setEvidence([].concat(_toConsumableArray(evidence || []), [cbMakeImg(p)]));
  };
  // 🆕 fix127: 整单拒付 = 一键加入全部灯的图;单品拒付 = 单独点某个灯
  var cbAddAll = function cbAddAll() {
    var add = (cbPull.products || []).filter(function (p) {
      return p.image_url && !cbIsImgSaved(p);
    }).map(cbMakeImg);
    if (add.length) setEvidence([].concat(_toConsumableArray(evidence || []), _toConsumableArray(add)));
  };
  var cbClearOrderImgs = function cbClearOrderImgs() {
    return setEvidence((evidence || []).filter(function (a) {
      return !a.from_order;
    }));
  };
  var _useState55 = useState((cb === null || cb === void 0 ? void 0 : cb.status) || 'pending'),
    _useState56 = _slicedToArray(_useState55, 2),
    status = _useState56[0],
    setStatus = _useState56[1];
  var _useState57 = useState(false),
    _useState58 = _slicedToArray(_useState57, 2),
    saving = _useState58[0],
    setSaving = _useState58[1];
  var _useState59 = useState(''),
    _useState60 = _slicedToArray(_useState59, 2),
    autoAssignInfo = _useState60[0],
    setAutoAssignInfo = _useState60[1];
  var _useState61 = useState((cb === null || cb === void 0 ? void 0 : cb.assigned_to) || []),
    _useState62 = _slicedToArray(_useState61, 2),
    assignedTo = _useState62[0],
    setAssignedTo = _useState62[1];

  // 🔍 从订单编号智能推断网站(例如 VKA-0756 → VK, RD0031 → RD, DF-1234 → DF)
  var inferSiteFromOrderNo = function inferSiteFromOrderNo(orderNoStr) {
    if (!orderNoStr) return '';
    var upper = orderNoStr.trim().toUpperCase();
    // 已知前缀映射
    var prefixMap = {
      'VKA': 'VK',
      'VK': 'VK',
      'RD': 'RD',
      'DF': 'DF',
      'MJ': 'MJ',
      'DC': 'DC',
      'LS': 'LS',
      'MO': 'MO',
      'RS': 'RS',
      'PL': 'PL',
      'J': 'J',
      '海服': '海服'
    };
    // 尝试匹配前缀(从长到短)
    var sortedKeys = Object.keys(prefixMap).sort(function (a, b) {
      return b.length - a.length;
    });
    var _iterator = _createForOfIteratorHelper(sortedKeys),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var key = _step.value;
        if (upper.startsWith(key.toUpperCase())) return prefixMap[key];
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return '';
  };

  // 🆕 智能自动指派 - 周六/周日分别值班 + 工作日按网站
  var autoAssignByConfig = function autoAssignByConfig(siteValue, config) {
    if (!config) return {
      ids: [],
      info: ''
    };
    var now = new Date();
    var day = now.getDay();
    if (day === 0) {
      var sundayUid = config.sunday_owner || config.weekend_owner;
      if (sundayUid) return {
        ids: [sundayUid],
        info: '🌙 周日值班'
      };
    }
    if (day === 6) {
      var saturdayUid = config.saturday_owner || config.weekend_owner;
      if (saturdayUid) return {
        ids: [saturdayUid],
        info: '🌅 周六值班'
      };
    }
    if (siteValue && config.site_owners && config.site_owners[siteValue]) {
      return {
        ids: [config.site_owners[siteValue]],
        info: "\uD83C\uDF10 ".concat(siteValue, " \u7F51\u7AD9\u4E13\u4EBA")
      };
    }
    if (config.default_owner) {
      return {
        ids: [config.default_owner],
        info: '⚙ 默认负责人'
      };
    }
    if ((config.user_ids || []).length > 0) {
      return {
        ids: config.user_ids,
        info: '已配置专人'
      };
    }
    return {
      ids: [],
      info: ''
    };
  };

  // 新建时,根据订单编号 + 时间自动指派
  useEffect(function () {
    if (isEdit) return;
    if (!orderNo) {
      setAutoAssignInfo('');
      return;
    }
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var inferredSite, _yield$CLOUD$client$f3, data, config, _autoAssignByConfig, ids, info, names, _t5;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            _context8.p = 0;
            inferredSite = inferSiteFromOrderNo(orderNo);
            _context8.n = 1;
            return CLOUD.client.from('system_settings').select('*').eq('key', 'chargeback_owners').single();
          case 1:
            _yield$CLOUD$client$f3 = _context8.v;
            data = _yield$CLOUD$client$f3.data;
            config = (data === null || data === void 0 ? void 0 : data.value) || {};
            _autoAssignByConfig = autoAssignByConfig(inferredSite, config), ids = _autoAssignByConfig.ids, info = _autoAssignByConfig.info;
            if (ids.length > 0) {
              setAssignedTo(ids);
              names = ids.map(function (uid) {
                var e = employees.find(function (x) {
                  return x.id === uid;
                });
                return e ? e.name + (e.alias ? ' ' + e.alias : '') : uid;
              }).join(' + ');
              setAutoAssignInfo("".concat(info, " \u2192 ").concat(names).concat(inferredSite ? " (\u63A8\u65AD\u7F51\u7AD9: ".concat(inferredSite, ")") : ''));
            } else {
              setAssignedTo([]);
              setAutoAssignInfo('⚠ 未配置拒付负责人,主管请在 ⚙ 设置 中配置');
            }
            _context8.n = 3;
            break;
          case 2:
            _context8.p = 2;
            _t5 = _context8.v;
            setAutoAssignInfo('');
          case 3:
            return _context8.a(2);
        }
      }, _callee8, null, [[0, 2]]);
    }))();
  }, [orderNo, isEdit]);
  var daysLeft = deadline ? daysUntil(deadline) : null;
  var handleSave = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var userName, now, inferredSite, assignedNames, payload, res, _t6;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            if (orderNo.trim()) {
              _context9.n = 1;
              break;
            }
            alert('请填写订单编号');
            return _context9.a(2);
          case 1:
            if (customerEmail.trim()) {
              _context9.n = 2;
              break;
            }
            alert('请填写客户邮箱');
            return _context9.a(2);
          case 2:
            if (!(!amount || parseFloat(amount) <= 0)) {
              _context9.n = 3;
              break;
            }
            alert('请填写金额');
            return _context9.a(2);
          case 3:
            if (openedAt) {
              _context9.n = 4;
              break;
            }
            alert('请填写拒付日期');
            return _context9.a(2);
          case 4:
            if (deadline) {
              _context9.n = 5;
              break;
            }
            alert('请填写截止处理日期');
            return _context9.a(2);
          case 5:
            setSaving(true);
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            now = new Date().toISOString();
            inferredSite = inferSiteFromOrderNo(orderNo); // 获取自动指派的人员名称
            assignedNames = assignedTo.map(function (uid) {
              var e = employees.find(function (x) {
                return x.id === uid;
              });
              return e ? e.name + (e.alias ? ' ' + e.alias : '') : uid;
            }); // 构建 payload - 简化版
            payload = _objectSpread(_objectSpread({}, cb || {}), {}, {
              // 主要字段
              order_no: orderNo.trim(),
              customer_email: customerEmail.trim(),
              platform: platform || 'Stripe',
              amount: parseFloat(amount),
              currency: currency || 'USD',
              reason: reason || null,
              // 🆕 拒付原因
              opened_at: openedAt,
              deadline: deadline,
              notes: notes.trim() || null,
              evidence_files: evidence || [],
              // 隐藏字段:从订单编号自动推断网站,自动指派负责人
              site: inferredSite || null,
              assigned_to: assignedTo,
              assigned_to_names: assignedNames,
              // 状态
              status: isEdit ? status : 'pending',
              // 元数据
              updated_at: now,
              // 🆕 fix7: created_by 必须非空 — 旧数据可能 created_by 为 null,导致编辑时被 spread 进 payload 触发数据库 not-null 约束
              // 策略:优先用原记录的 created_by(保留审计追踪),为空则用当前用户兜底
              created_by: (cb === null || cb === void 0 ? void 0 : cb.created_by) || user.id,
              created_by_name: (cb === null || cb === void 0 ? void 0 : cb.created_by_name) || userName
            });
            _context9.p = 6;
            _context9.n = 7;
            return CLOUD.upsert('chargebacks', payload);
          case 7:
            res = _context9.v;
            if (res) {
              toast(isEdit ? '✓ 已更新拒付' : '✓ 已创建拒付');
              onSaved();
            } else {
              alertSaveError(isEdit ? '更新拒付' : '创建拒付');
            }
            _context9.n = 9;
            break;
          case 8:
            _context9.p = 8;
            _t6 = _context9.v;
            console.error('保存拒付失败:', _t6);
            alertSaveError(isEdit ? '更新拒付' : '创建拒付');
          case 9:
            setSaving(false);
          case 10:
            return _context9.a(2);
        }
      }, _callee9, null, [[6, 8]]);
    }));
    return function handleSave() {
      return _ref12.apply(this, arguments);
    };
  }();
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.55)',
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
      borderRadius: 14,
      maxWidth: 560,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '92vh',
      overflow: 'hidden',
      boxShadow: '0 25px 70px rgba(0,0,0,.3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#dc2626'
    }
  }, "\uD83D\uDEA8 ", isEdit ? '编辑' : '新增', "\u62D2\u4ED8"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, user && user.role !== 'super_admin' && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _window$__requestSupe, _window;
      return (_window$__requestSupe = (_window = window).__requestSupervisorAssistance) === null || _window$__requestSupe === void 0 ? void 0 : _window$__requestSupe.call(_window, {
        entityType: '拒付',
        entityId: cb === null || cb === void 0 ? void 0 : cb.id,
        entityTitle: (cb === null || cb === void 0 ? void 0 : cb.order_no) || orderNo || '(新拒付)'
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
    title: "\u628A\u8FD9\u6761\u62D2\u4ED8\u4EA4\u7ED9\u4E3B\u7BA1/\u8001\u677F\u5904\u7406"
  }, user.role === 'admin' ? '👑 申请老板' : '🚨 申请主管'), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: onClose,
    style: {
      padding: '4px 12px'
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      overflowY: 'auto',
      overflowX: 'hidden',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(FormGuide, {
    title: "\u62D2\u4ED8\u767B\u8BB0",
    steps: ['订单编号:填客户订单号(如 VKA-0756),点「🔄 拉取订单」自动带出客户邮箱/金额/币种,还能勾产品图当证据。', '客户邮箱:拒付对应客户的邮箱(拉取后通常已自动填好)。', '拒付方式 / 金额 / 币种:走 Stripe / PayPal / Shopify Payments 哪个,金额填争议金额。', '拒付日期 / 截止处理日期:拒付发起日 + 银行要求提交证据的截止日(默认 +7 天,按后台实际改)。', '拒付原因:选客户为何拒付(未收到货 / 产品问题 / 重复扣款…)。', '详细说明:写清经过,例「DHL 显示已签收,5/24 已提交证据」。', '证据材料:传订单截图 / 物流证明 / 邮件 / 发票,或用「拉取订单」选产品图。', '提交银行证据后,记得把状态改成「已提交证据」—— 系统就不再催办这单。'],
    feedbackTip: "\u5982\u679C\u8FD9\u5355\u66B4\u9732\u4E86\u53CD\u590D\u51FA\u73B0\u7684\u95EE\u9898(\u67D0\u4EA7\u54C1\u8001\u88AB\u62D2\u4ED8\u3001\u67D0\u7269\u6D41\u5546\u603B\u6295\u8BC9\u2026),\u56DE\u5230\u8BE5\u5BA2\u6237\u7684\u300C\u8DDF\u8FDB & \u622A\u56FE\u300D\u5F39\u7A97,\u52FE\u9009\u300C\uD83D\uDCE3 \u6807\u8BB0\u4E3A\u95EE\u9898\u53CD\u9988\u300D\u5E76\u5199\u8BF4\u660E\u3002\u4E3B\u7BA1\u4F1A\u5728\u300C\u4ECA\u65E5\u5DE5\u4F5C\u5FEB\u7167\u300D\u4E0A\u7ACB\u523B\u770B\u5230\u63D0\u9192\u3002"
  }), !isEdit && autoAssignInfo && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: '#e0f2fe',
      border: '1px solid #7dd3fc',
      borderRadius: 8,
      fontSize: 12,
      color: '#075985',
      marginBottom: 14,
      lineHeight: 1.5
    }
  }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("strong", null, "\u81EA\u52A8\u6307\u6D3E\u8D1F\u8D23\u4EBA"), ":", autoAssignInfo), /*#__PURE__*/React.createElement("div", {
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
  }, "\u8BA2\u5355\u7F16\u53F7 * ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400
    }
  }, "(\u7CFB\u7EDF\u4F1A\u4ECE\u524D\u7F00\u81EA\u52A8\u8BC6\u522B\u7F51\u7AD9)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: orderNo,
    onChange: function onChange(e) {
      return setOrderNo(e.target.value);
    },
    autoFocus: true,
    placeholder: "\u5982:VKA-0756 / RD0091 / DF-1234",
    style: {
      flex: 1,
      minWidth: 0,
      padding: '8px 12px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      fontFamily: 'monospace'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: cbDoPull,
    disabled: cbPull.loading,
    title: "\u62C9\u53D6\u8BA2\u5355:\u81EA\u52A8\u586B\u5BA2\u6237\u90AE\u7BB1/\u91D1\u989D/\u5E01\u79CD,\u5E76\u53EF\u9009\u4EA7\u54C1\u56FE\u5165\u8BC1\u636E",
    style: {
      whiteSpace: 'nowrap',
      padding: '8px 12px',
      border: 'none',
      borderRadius: 7,
      background: '#0071e3',
      color: 'white',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer',
      flexShrink: 0
    }
  }, cbPull.loading ? '拉取中…' : '🔄 拉取订单')), cbPull.products && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: 8,
      background: '#f8fafc',
      border: '1px solid var(--line)',
      borderRadius: 8
    }
  }, cbPull.products.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-4)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u6CA1\u62C9\u5230\u8BE5\u8BA2\u5355\u7684\u4EA7\u54C1(\u5DF2\u5C3D\u91CF\u586B\u5BA2\u6237/\u91D1\u989D)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setCbPull({
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
      fontSize: 12,
      color: 'var(--ink-2)',
      marginBottom: 8,
      lineHeight: 1.6
    }
  }, "\u62C9\u5230 ", /*#__PURE__*/React.createElement("strong", null, cbPull.products.length), " \u4E2A\u4EA7\u54C1 \xB7 \u9009\u62E9\u8981\u9644\u5230\u62D2\u4ED8\u7684\u706F\u56FE:", /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-4)',
      marginTop: 2
    }
  }, "\uD83D\uDFE2 ", /*#__PURE__*/React.createElement("strong", null, "\u6574\u5355\u62D2\u4ED8"), " \u2192 \u70B9\u300C\u5168\u90E8\u52A0\u5165\u300D\xA0\xA0\uFF5C\xA0\xA0\uD83D\uDD35 ", /*#__PURE__*/React.createElement("strong", null, "\u67D0\u4E2A\u4EA7\u54C1\u62D2\u4ED8"), " \u2192 \u53EA\u70B9\u90A3\u76CF\u706F\u7684\u300C\u52A0\u5165\u300D")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: cbAddAll,
    style: {
      padding: '6px 14px',
      border: 'none',
      borderRadius: 7,
      background: '#16a34a',
      color: 'white',
      fontSize: 12,
      fontWeight: 700,
      cursor: 'pointer'
    }
  }, "\u2795 \u5168\u90E8\u52A0\u5165(\u6574\u5355\u62D2\u4ED8)"), (evidence || []).filter(function (a) {
    return a.from_order;
  }).length > 0 && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: cbClearOrderImgs,
    style: {
      padding: '6px 12px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      background: 'white',
      color: 'var(--ink-3)',
      fontSize: 12,
      cursor: 'pointer'
    }
  }, "\u6E05\u7A7A\u5DF2\u52A0\u5165"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setCbPull({
        loading: false,
        products: null
      });
    },
    style: {
      marginLeft: 'auto',
      border: 'none',
      background: 'none',
      color: 'var(--accent)',
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600
    }
  }, "\u5B8C\u6210 \u2713")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(130px,1fr))',
      gap: 10
    }
  }, cbPull.products.map(function (p, i) {
    var saved = cbIsImgSaved(p);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      title: p.title || '',
      style: {
        position: 'relative',
        border: saved ? '2px solid #16a34a' : '1px solid var(--line)',
        borderRadius: 8,
        overflow: 'hidden',
        textAlign: 'center',
        background: saved ? '#f0fdf4' : 'white'
      }
    }, saved && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 6,
        right: 6,
        width: 22,
        height: 22,
        borderRadius: '50%',
        background: '#16a34a',
        color: 'white',
        fontSize: 13,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        zIndex: 1
      }
    }, "\u2713"), p.image_url ? /*#__PURE__*/React.createElement("img", {
      src: p.image_url,
      alt: "",
      onClick: function onClick() {
        return window.__setPreviewImg ? window.__setPreviewImg(p.image_url) : wsOpenImg(p.image_url);
      },
      title: "\u70B9\u51FB\u770B\u5927\u56FE",
      style: {
        width: '100%',
        height: 110,
        objectFit: 'contain',
        cursor: 'zoom-in',
        background: '#f8fafc'
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        height: 110,
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
        padding: '4px 6px 0',
        lineHeight: 1.2,
        maxHeight: 26,
        overflow: 'hidden'
      }
    }, p.title || ''), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: function onClick() {
        return cbPickImg(p);
      },
      disabled: !p.image_url,
      style: {
        width: '100%',
        marginTop: 4,
        padding: '6px 0',
        border: 'none',
        borderTop: '1px solid var(--line)',
        cursor: p.image_url ? 'pointer' : 'not-allowed',
        fontSize: 11,
        fontWeight: 700,
        background: saved ? '#dcfce7' : '#e0f2fe',
        color: saved ? '#15803d' : '#0369a1'
      }
    }, saved ? '✓ 已加入(点取消)' : '➕ 加入证据'));
  })), (evidence || []).filter(function (a) {
    return a.from_order;
  }).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 12,
      color: '#15803d',
      fontWeight: 700
    }
  }, "\u2705 \u5DF2\u52A0\u5165 ", (evidence || []).filter(function (a) {
    return a.from_order;
  }).length, " \u5F20\u706F\u56FE \u2192 \u663E\u793A\u5728\u4E0B\u65B9\u300C\u8BC1\u636E\u6750\u6599\u300D\xB7 \u70B9\u300C\u521B\u5EFA\u62D2\u4ED8/\u4FDD\u5B58\u4FEE\u6539\u300D\u5373\u5B58\u5165")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 8,
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
  }, "\u5BA2\u6237\u90AE\u7BB1 *"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: customerEmail,
    onChange: function onChange(e) {
      return setCustomerEmail(e.target.value);
    },
    placeholder: "customer@example.com",
    style: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid var(--line)',
      borderRadius: 7,
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
  }, "\u62D2\u4ED8\u539F\u56E0"), /*#__PURE__*/React.createElement("select", {
    value: reason,
    onChange: function onChange(e) {
      return setReason(e.target.value);
    },
    style: {
      width: '100%',
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      background: 'white'
    }
  }, CHARGEBACK_REASONS.map(function (r) {
    return /*#__PURE__*/React.createElement("option", {
      key: r.key,
      value: r.key
    }, r.label);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 80px',
      gap: 8,
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
  }, "\u62D2\u4ED8\u65B9\u5F0F *"), /*#__PURE__*/React.createElement("select", {
    value: platform,
    onChange: function onChange(e) {
      return setPlatform(e.target.value);
    },
    style: {
      width: '100%',
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      background: 'white'
    }
  }, CHARGEBACK_PLATFORMS.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p,
      value: p
    }, p);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u91D1\u989D *"), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    value: amount,
    onChange: function onChange(e) {
      return setAmount(e.target.value);
    },
    placeholder: "0.00",
    style: {
      width: '100%',
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      fontFamily: 'monospace'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u5E01\u79CD"), /*#__PURE__*/React.createElement("select", {
    value: currency,
    onChange: function onChange(e) {
      return setCurrency(e.target.value);
    },
    style: {
      width: '100%',
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      background: 'white'
    }
  }, ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'HKD'].map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c,
      value: c
    }, c);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8,
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
  }, "\u62D2\u4ED8\u65E5\u671F *"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: openedAt,
    onChange: function onChange(e) {
      return setOpenedAt(e.target.value);
    },
    style: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid var(--line)',
      borderRadius: 7,
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
  }, "\u622A\u6B62\u5904\u7406\u65E5\u671F *", daysLeft !== null && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 5,
      color: daysLeft < 0 ? '#dc2626' : daysLeft <= 3 ? '#9a3412' : daysLeft <= 7 ? '#854d0e' : '#15803d',
      fontWeight: 700,
      fontSize: 11
    }
  }, "(", daysLeft < 0 ? "\u5DF2\u903E\u671F ".concat(Math.abs(daysLeft), "\u5929") : "\u5269 ".concat(daysLeft, "\u5929"), ")")), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: deadline,
    onChange: function onChange(e) {
      return setDeadline(e.target.value);
    },
    style: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13
    }
  }))), isEdit && /*#__PURE__*/React.createElement("div", {
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
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("select", {
    value: status,
    onChange: function onChange(e) {
      return setStatus(e.target.value);
    },
    style: {
      width: '100%',
      padding: '8px 12px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      background: 'white'
    }
  }, CHARGEBACK_STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.key,
      value: s.key
    }, s.label);
  }))), /*#__PURE__*/React.createElement("div", {
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
  }, "\u8BE6\u7EC6\u8BF4\u660E / \u5904\u7406\u8BB0\u5F55 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400
    }
  }, "(\u539F\u56E0\u7EC6\u8282 + \u5904\u7406\u8FDB\u5C55)")), /*#__PURE__*/React.createElement("textarea", {
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
    placeholder: "\u4F8B\u5982:\n\u5BA2\u6237\u79F0\u672A\u6536\u5230\u8D27,\u4F46 DHL \u663E\u793A\u5DF2\u7B7E\u6536\n5/24 \u5DF2\u901A\u8FC7 Stripe \u540E\u53F0\u63D0\u4EA4\u8BC1\u636E\n5/25 \u5BA2\u6237\u5DF2\u56DE\u590D\u540C\u610F\u64A4\u56DE",
    style: {
      width: '100%',
      minHeight: 64,
      padding: '8px 12px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\uD83D\uDCCE \u8BC1\u636E\u6750\u6599 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400
    }
  }, "(\u8BA2\u5355\u622A\u56FE / \u7269\u6D41\u8BC1\u660E / \u90AE\u4EF6 / \u53D1\u7968...)")), /*#__PURE__*/React.createElement(MultiFileUploader, {
    files: evidence,
    setFiles: setEvidence,
    bucket: "business-files",
    maxSize: 50
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)',
      marginTop: 4,
      lineHeight: 1.4
    }
  }, "\uD83D\uDCA1 \u63D0\u793A:\u5982\u4E0A\u4F20\u5931\u8D25,\u53EF\u80FD\u662F\u4E91\u5B58\u50A8 bucket \u672A\u521B\u5EFA\u3002\u8BF7\u8054\u7CFB\u4E3B\u7BA1\u5728 Supabase \u8DD1 SQL \u6587\u4EF6 ", /*#__PURE__*/React.createElement("strong", null, "13_chargebacks_offline_custom_photos.sql"), "\u3002"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 18px',
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 6,
      flexShrink: 0,
      background: '#fafafa'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn-sec",
    style: {
      padding: '8px 16px'
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: handleSave,
    disabled: saving,
    style: {
      padding: '8px 20px',
      background: '#dc2626',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 13,
      opacity: saving ? 0.5 : 1
    }
  }, saving ? '保存中...' : isEdit ? '✓ 保存修改' : '🚨 创建拒付')))), document.body);
};

// ============================================================
// 💳 线下单模块
// ============================================================
var OfflineOrdersModule = function OfflineOrdersModule(_ref13) {
  var user = _ref13.user,
    employees = _ref13.employees,
    toast = _ref13.toast;
  var allSites = useSiteCodes(); // 🆕 fix22 联动 3: 合并 内置 SITES + 自定义网站
  var _useState63 = useState([]),
    _useState64 = _slicedToArray(_useState63, 2),
    list = _useState64[0],
    setList = _useState64[1];
  var _useState65 = useState(true),
    _useState66 = _slicedToArray(_useState65, 2),
    loading = _useState66[0],
    setLoading = _useState66[1];
  var _useState67 = useState(null),
    _useState68 = _slicedToArray(_useState67, 2),
    editing = _useState68[0],
    setEditing = _useState68[1];
  var _useState69 = useState('active'),
    _useState70 = _slicedToArray(_useState69, 2),
    filterStatus = _useState70[0],
    setFilterStatus = _useState70[1];
  var _useState71 = useState('all'),
    _useState72 = _slicedToArray(_useState71, 2),
    filterSite = _useState72[0],
    setFilterSite = _useState72[1];
  var _useState73 = useState(''),
    _useState74 = _slicedToArray(_useState73, 2),
    search = _useState74[0],
    setSearch = _useState74[1];
  var _useState75 = useState('all'),
    _useState76 = _slicedToArray(_useState75, 2),
    filterOwner = _useState76[0],
    setFilterOwner = _useState76[1]; // 🆕 fix75: 客服筛选
  var _useState77 = useState('updated'),
    _useState78 = _slicedToArray(_useState77, 2),
    ooSortBy = _useState78[0],
    setOoSortBy = _useState78[1]; // 🆕 排序
  var _useState79 = useState('desc'),
    _useState80 = _slicedToArray(_useState79, 2),
    ooSortDir = _useState80[0],
    setOoSortDir = _useState80[1];
  // 🆕 时间筛选
  var _useState81 = useState('all'),
    _useState82 = _slicedToArray(_useState81, 2),
    timeFilter = _useState82[0],
    setTimeFilter = _useState82[1];
  var _useState83 = useState({
      start: '',
      end: ''
    }),
    _useState84 = _slicedToArray(_useState83, 2),
    timeCustom = _useState84[0],
    setTimeCustom = _useState84[1];
  // 🆕 fix15: 日期范围筛选(本周/本月/任意月第N周)
  var _useState85 = useState({
      kind: 'all'
    }),
    _useState86 = _slicedToArray(_useState85, 2),
    dateFilter = _useState86[0],
    setDateFilter = _useState86[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var load = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
      var data, _t7;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            setLoading(true);
            _context0.p = 1;
            _context0.n = 2;
            return CLOUD.list('offline_orders', {
              order: {
                col: 'created_at',
                asc: false
              },
              limit: 500
            });
          case 2:
            data = _context0.v;
            setList((data || []).filter(function (o) {
              return !o.deleted;
            }));
            _context0.n = 4;
            break;
          case 3:
            _context0.p = 3;
            _t7 = _context0.v;
            toast('❌ ' + _t7.message);
          case 4:
            setLoading(false);
          case 5:
            return _context0.a(2);
        }
      }, _callee0, null, [[1, 3]]);
    }));
    return function load() {
      return _ref14.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
  }, []);
  var handleDelete = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(o) {
      var summary;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            summary = "".concat(o.order_no, " \xB7 ").concat(o.payment_currency || 'USD', " ").concat(o.payment_amount || 0, " \xB7 ").concat(o.customer_email || o.customer_name || '?');
            _context1.n = 1;
            return requestDelete({
              user: user,
              tableName: 'offline_orders',
              moduleLabel: '💳 线下单',
              record: o,
              recordSummary: summary,
              toast: toast,
              onSuccess: load
            });
          case 1:
            return _context1.a(2);
        }
      }, _callee1);
    }));
    return function handleDelete(_x3) {
      return _ref15.apply(this, arguments);
    };
  }();
  var filtered = useMemo(function () {
    var l = list;
    if (filterStatus === 'active') l = l.filter(function (o) {
      return o.status !== 'completed' && o.status !== 'cancelled';
    });else if (filterStatus === 'mine') l = l.filter(function (o) {
      return o.created_by === user.id;
    });else if (filterStatus !== 'all') l = l.filter(function (o) {
      return o.status === filterStatus;
    });
    if (filterSite !== 'all') l = l.filter(function (o) {
      return o.site === filterSite;
    });
    if (search.trim()) {
      var q = search.trim().toLowerCase();
      l = l.filter(function (o) {
        return (o.order_no || '').toLowerCase().includes(q) || (o.customer_email || '').toLowerCase().includes(q) || (o.customer_name || '').toLowerCase().includes(q) || (o.ship_to_name || '').toLowerCase().includes(q);
      });
    }
    // 🆕 时间筛选
    l = filterByTimeRange(l, timeFilter, timeCustom.start, timeCustom.end, 'created_at');
    // 🆕 fix15: 日期范围筛选(创建在范围内)
    l = filterByDateRange(l, dateFilter, 'created_at');
    // 🆕 fix75: 客服筛选
    if (filterOwner !== 'all') l = l.filter(function (o) {
      return o.created_by === filterOwner;
    });
    // 🆕 fix75: 排序
    var OO_STATUS_ORDER = {
      pending_payment: 0,
      paid: 1,
      dispatched: 2,
      completed: 3,
      cancelled: 4
    };
    var okey = function okey(o) {
      var _OO_STATUS_ORDER$o$st;
      switch (ooSortBy) {
        case 'updated':
          return o.updated_at || o.created_at || '';
        case 'created':
          return o.created_at || '';
        case 'customer':
          return (o.customer_name || o.customer_email || '').toLowerCase();
        case 'order':
          return (o.order_no || '').toLowerCase();
        case 'site':
          return (o.site || '').toLowerCase();
        case 'status':
          return (_OO_STATUS_ORDER$o$st = OO_STATUS_ORDER[o.status]) !== null && _OO_STATUS_ORDER$o$st !== void 0 ? _OO_STATUS_ORDER$o$st : 9;
        case 'amount':
          return parseFloat(o.payment_amount) || 0;
        default:
          return o.updated_at || o.created_at || '';
      }
    };
    l = _toConsumableArray(l).sort(function (a, b) {
      var ka = okey(a),
        kb = okey(b);
      var cmp = typeof ka === 'number' && typeof kb === 'number' ? ka - kb : String(ka).localeCompare(String(kb));
      return ooSortDir === 'desc' ? -cmp : cmp;
    });
    return l;
  }, [list, filterStatus, filterSite, search, user.id, timeFilter, timeCustom, dateFilter, filterOwner, ooSortBy, ooSortDir]);
  var stats = useMemo(function () {
    var totalAmount = list.filter(function (o) {
      return ['paid', 'dispatched', 'completed'].includes(o.status);
    }).reduce(function (s, o) {
      return s + (parseFloat(o.payment_amount) || 0);
    }, 0);
    return {
      total: list.length,
      pending: list.filter(function (o) {
        return o.status === 'pending_payment';
      }).length,
      paid: list.filter(function (o) {
        return o.status === 'paid';
      }).length,
      dispatched: list.filter(function (o) {
        return o.status === 'dispatched';
      }).length,
      totalAmount: totalAmount.toFixed(2)
    };
  }, [list]);

  // 🆕 fix178: 各状态标签的订单数量(显示在标签上)
  var tabCounts = useMemo(function () {
    return {
      active: list.filter(function (o) {
        return o.status !== 'completed' && o.status !== 'cancelled';
      }).length,
      mine: list.filter(function (o) {
        return o.created_by === user.id;
      }).length,
      draft: list.filter(function (o) {
        return o.status === 'draft';
      }).length,
      pending_payment: list.filter(function (o) {
        return o.status === 'pending_payment';
      }).length,
      paid: list.filter(function (o) {
        return o.status === 'paid';
      }).length,
      dispatched: list.filter(function (o) {
        return o.status === 'dispatched';
      }).length,
      completed: list.filter(function (o) {
        return o.status === 'completed';
      }).length,
      all: list.length
    };
  }, [list, user.id]);
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
  }, "\uD83D\uDCB3 \u7EBF\u4E0B\u5355\u7BA1\u7406"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "\u5171 ", /*#__PURE__*/React.createElement("strong", null, stats.total), " \xB7 \u5DF2\u6536\u6B3E ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#15803d'
    }
  }, "$", stats.totalAmount), "\xB7 \u5F85\u4ED8\u6B3E ", stats.pending, " \xB7 \u5DF2\u4ED8\u6B3E ", stats.paid, " \xB7 \u5DF2\u4E0B\u5355 ", stats.dispatched)), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEditing('new');
    },
    className: "btn-pri",
    style: {
      padding: '6px 14px',
      fontSize: 12
    }
  }, "+ \u65B0\u5EFA\u7EBF\u4E0B\u5355")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, [{
    key: 'active',
    label: '🔥 进行中'
  }, {
    key: 'mine',
    label: '👤 我的'
  }, {
    key: 'draft',
    label: '📝 草稿'
  }, {
    key: 'pending_payment',
    label: '⏳ 待付款'
  }, {
    key: 'paid',
    label: '💰 已付款'
  }, {
    key: 'dispatched',
    label: '🚚 已下单'
  }, {
    key: 'completed',
    label: '✅ 已完成'
  }, {
    key: 'all',
    label: '📋 全部'
  }].map(function (t) {
    var _tabCounts$t$key;
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
    }, t.label, /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 5,
        padding: '0 5px',
        borderRadius: 8,
        fontSize: 10,
        fontWeight: 700,
        background: filterStatus === t.key ? 'rgba(255,255,255,0.28)' : 'var(--bg-elevated)',
        color: filterStatus === t.key ? 'white' : 'var(--ink-3)'
      }
    }, (_tabCounts$t$key = tabCounts[t.key]) !== null && _tabCounts$t$key !== void 0 ? _tabCounts$t$key : 0));
  }), /*#__PURE__*/React.createElement("select", {
    value: filterSite,
    onChange: function onChange(e) {
      return setFilterSite(e.target.value);
    },
    style: {
      padding: '4px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 11,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u7F51\u7AD9"), allSites.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s,
      value: s
    }, s);
  }))), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u8BA2\u5355\u53F7 / \u5BA2\u6237\u90AE\u7BB1 / \u59D3\u540D...",
    style: {
      width: '100%',
      marginTop: 10,
      padding: '6px 12px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83D\uDC64 \u5BA2\u670D"), /*#__PURE__*/React.createElement("select", {
    value: filterOwner,
    onChange: function onChange(e) {
      return setFilterOwner(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8"), employees.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.name, e.alias ? " (".concat(e.alias, ")") : '');
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\u2195 \u6392\u5E8F"), /*#__PURE__*/React.createElement("select", {
    value: ooSortBy,
    onChange: function onChange(e) {
      return setOoSortBy(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "updated"
  }, "\u4FEE\u6539\u65E5\u671F"), /*#__PURE__*/React.createElement("option", {
    value: "created"
  }, "\u521B\u5EFA\u65E5\u671F"), /*#__PURE__*/React.createElement("option", {
    value: "customer"
  }, "\u5BA2\u6237\u540D"), /*#__PURE__*/React.createElement("option", {
    value: "order"
  }, "\u8BA2\u5355\u53F7"), /*#__PURE__*/React.createElement("option", {
    value: "site"
  }, "\u7F51\u7AD9"), /*#__PURE__*/React.createElement("option", {
    value: "status"
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("option", {
    value: "amount"
  }, "\u91D1\u989D")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOoSortDir(function (d) {
        return d === 'desc' ? 'asc' : 'desc';
      });
    },
    title: ooSortDir === 'desc' ? '降序' : '升序',
    style: {
      padding: '4px 9px',
      fontSize: 12,
      border: '1px solid var(--line)',
      borderRadius: 6,
      background: 'white',
      cursor: 'pointer',
      fontWeight: 600
    }
  }, ooSortDir === 'desc' ? '↓' : '↑'))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      paddingTop: 10,
      borderTop: '1px dashed var(--line)'
    }
  }, /*#__PURE__*/React.createElement(TimeRangeFilter, {
    value: timeFilter,
    onChange: setTimeFilter,
    customStart: timeCustom.start,
    customEnd: timeCustom.end,
    onCustomChange: setTimeCustom,
    label: "\uD83D\uDD53 \u8D85\u671F\u7B5B\u9009:",
    records: list,
    dateField: "created_at"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
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
  }, "\uD83D\uDCC5 \u521B\u5EFA\u65F6\u95F4:"), /*#__PURE__*/React.createElement(AdvancedDateFilter, {
    value: dateFilter,
    onChange: setDateFilter,
    size: "sm"
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
  }, "\uD83D\uDCCB \u6682\u65E0\u7EBF\u4E0B\u5355") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, filtered.map(function (o) {
    return /*#__PURE__*/React.createElement(OfflineOrderCard, {
      key: o.id,
      order: o,
      user: user,
      isAdmin: isAdmin,
      onEdit: function onEdit() {
        return setEditing(o);
      },
      onDelete: function onDelete() {
        return handleDelete(o);
      },
      onReload: load,
      toast: toast
    });
  })), editing && /*#__PURE__*/React.createElement(OfflineOrderEditor, {
    order: editing === 'new' ? null : editing,
    user: user,
    employees: employees,
    onClose: function onClose() {
      return setEditing(null);
    },
    onSaved: function onSaved() {
      setEditing(null);
      load();
    },
    toast: toast
  }));
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix18: 转单给跟单 modal — 一键把已付款的线下单转给跟单同事
// 自动创建 cross_dept_messages,带订单号 / 收货 / 产品 / 付款凭证
// ════════════════════════════════════════════════════════════════════
var TransferToPoModal = function TransferToPoModal(_ref16) {
  var order = _ref16.order,
    user = _ref16.user,
    onClose = _ref16.onClose,
    onTransferred = _ref16.onTransferred,
    toast = _ref16.toast;
  var _useState87 = useState(''),
    _useState88 = _slicedToArray(_useState87, 2),
    poUserId = _useState88[0],
    setPoUserId = _useState88[1];
  var _useState89 = useState(''),
    _useState90 = _slicedToArray(_useState89, 2),
    poUserName = _useState90[0],
    setPoUserName = _useState90[1];
  var _useState91 = useState('normal'),
    _useState92 = _slicedToArray(_useState91, 2),
    priority = _useState92[0],
    setPriority = _useState92[1];
  var _useState93 = useState(''),
    _useState94 = _slicedToArray(_useState93, 2),
    extraNote = _useState94[0],
    setExtraNote = _useState94[1];
  var _useState95 = useState(false),
    _useState96 = _slicedToArray(_useState95, 2),
    sending = _useState96[0],
    setSending = _useState96[1];
  var _useState97 = useState([]),
    _useState98 = _slicedToArray(_useState97, 2),
    poEmployees = _useState98[0],
    setPoEmployees = _useState98[1];
  var _useState99 = useState([]),
    _useState100 = _slicedToArray(_useState99, 2),
    shopOwners = _useState100[0],
    setShopOwners = _useState100[1];

  // 加载跟单员工(从 shop_owners 表里跟单系统的负责人)
  useEffect(function () {
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
      var client, _yield$client$from$se, data, owners, uniqueEmps, list, matched, _t8;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            client = getCdmClient();
            if (client) {
              _context10.n = 1;
              break;
            }
            return _context10.a(2);
          case 1:
            _context10.p = 1;
            _context10.n = 2;
            return client.from('shop_owners').select('*').eq('system', 'po');
          case 2:
            _yield$client$from$se = _context10.v;
            data = _yield$client$from$se.data;
            owners = data || [];
            setShopOwners(owners);
            // 去重员工列表
            uniqueEmps = {};
            owners.forEach(function (o) {
              if (o.user_id && !uniqueEmps[o.user_id]) uniqueEmps[o.user_id] = {
                id: o.user_id,
                name: o.user_name || '未命名'
              };
            });
            list = Object.values(uniqueEmps);
            setPoEmployees(list);
            // 根据 order.site 自动推荐
            if (order.site) {
              matched = owners.find(function (o) {
                return o.shop_name === order.site || (o.shop_name || '').toLowerCase() === order.site.toLowerCase();
              });
              if (matched) {
                setPoUserId(matched.user_id);
                setPoUserName(matched.user_name);
              }
            }
            _context10.n = 4;
            break;
          case 3:
            _context10.p = 3;
            _t8 = _context10.v;
            console.warn('加载跟单员工失败', _t8);
          case 4:
            return _context10.a(2);
        }
      }, _callee10, null, [[1, 3]]);
    }))();
  }, [order.site]);
  var products = order.products || [];
  var dispatchText = order.follow_dispatch_text || generateDispatchText(order, products);
  var transfer = /*#__PURE__*/function () {
    var _ref18 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
      var client, userName, body, attachments, msg, _yield$client$from$in, error, _t9;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            client = getCdmClient();
            if (client) {
              _context11.n = 1;
              break;
            }
            alert('消息总线未连接,无法转单');
            return _context11.a(2);
          case 1:
            if (!(!poUserId && !poUserName.trim())) {
              _context11.n = 3;
              break;
            }
            _context11.n = 2;
            return wsConfirm('未指定跟单负责人,确定全跟单部都能看到吗?');
          case 2:
            if (_context11.v) {
              _context11.n = 3;
              break;
            }
            return _context11.a(2);
          case 3:
            setSending(true);
            _context11.p = 4;
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            body = ['📦 客服已转单 · 此订单客户已付款,请安排下单', '', "\u8BA2\u5355\u53F7: ".concat(order.order_no), "\u7F51\u7AD9: ".concat(order.site || '?'), "\u5BA2\u6237: ".concat(order.customer_name || order.customer_email || '?').concat(order.customer_email ? ' · ' + order.customer_email : ''), "\u4ED8\u6B3E: ".concat(order.payment_method || '?', " \xB7 ").concat(order.payment_currency || 'USD', " ").concat(order.payment_amount || 0).concat(order.received_amount ? ' (实收 ' + order.received_amount + ')' : ''), "\u4ED8\u6B3E\u65F6\u95F4: ".concat(order.paid_at || '未填'), '', '📍 收货地址:', order.ship_to_name || '', order.ship_to_address || '', [order.ship_to_city, order.ship_to_state, order.ship_to_zip].filter(Boolean).join(', '), order.ship_to_country || '', order.ship_to_phone ? '📞 ' + order.ship_to_phone : '', '', "\uD83D\uDECD\uFE0F \u4EA7\u54C1 (".concat(products.length, " \u4EF6):")].concat(_toConsumableArray(products.map(function (p) {
              return "  - ".concat(p.sku || '', " ").concat(p.name || '', " \xD7 ").concat(p.qty || 1).concat(p.unit_price ? ' @ ' + p.unit_price : '');
            })), ['', extraNote.trim() ? '📝 备注: ' + extraNote.trim() : '', '', '─────────────', '📋 下单指令:', dispatchText]).filter(Boolean).join('\n'); // 附件:订单原始附件(付款凭证等)
            attachments = order.attachments || [];
            msg = {
              from_system: MY_SYSTEM,
              from_user_id: user.id,
              from_user_name: userName,
              to_system: 'po',
              to_user_id: poUserId || null,
              to_user_name: poUserName.trim() || null,
              related_shop: order.site || null,
              watchers: null,
              category: 'general',
              priority: priority,
              title: "[\u5DF2\u4ED8\u6B3E\u8F6C\u5355] ".concat(order.order_no).concat(order.site ? ' · ' + order.site : '', " \xB7 ").concat(order.payment_currency || 'USD', " ").concat(order.payment_amount || 0),
              body: body,
              attachments: attachments,
              related_type: 'order',
              related_ref: order.order_no,
              status: 'pending',
              thread: [],
              read_by: [user.id],
              created_at_ms: Date.now(),
              updated_at: new Date().toISOString()
            };
            _context11.n = 5;
            return client.from('cross_dept_messages').insert(msg);
          case 5:
            _yield$client$from$in = _context11.v;
            error = _yield$client$from$in.error;
            if (!error) {
              _context11.n = 6;
              break;
            }
            throw error;
          case 6:
            _context11.n = 7;
            return CLOUD.upsert('offline_orders', _objectSpread(_objectSpread({}, order), {}, {
              transferred_to_po: true,
              transferred_to_id: poUserId || null,
              transferred_to_name: poUserName.trim() || '跟单部',
              transferred_at: new Date().toISOString(),
              status: order.status === 'paid' ? 'dispatched' : order.status,
              // 已付款 → 自动改为已下单
              updated_at: new Date().toISOString()
            }));
          case 7:
            toast('✓ 已转给跟单 · 跨部门消息已发送');
            onTransferred && onTransferred();
            _context11.n = 9;
            break;
          case 8:
            _context11.p = 8;
            _t9 = _context11.v;
            alert('转单失败: ' + (_t9.message || _t9));
          case 9:
            setSending(false);
          case 10:
            return _context11.a(2);
        }
      }, _callee11, null, [[4, 8]]);
    }));
    return function transfer() {
      return _ref18.apply(this, arguments);
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
      maxWidth: 620,
      boxShadow: '0 20px 60px rgba(0,0,0,.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'linear-gradient(90deg, #dbeafe 0%, #e0f2fe 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#1e40af'
    }
  }, "\uD83D\uDCE4 \u8F6C\u7ED9\u8DDF\u5355\u90E8"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#1e3a8a',
      marginTop: 2
    }
  }, "\u8BA2\u5355 ", order.order_no, " \xB7 \u4E00\u952E\u521B\u5EFA\u8DDF\u5355\u5DE5\u5355")), /*#__PURE__*/React.createElement("button", {
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
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\uD83D\uDC64 \u8F6C\u7ED9\u8C01 (\u57FA\u4E8E\u7F51\u7AD9\u81EA\u52A8\u63A8\u8350)"), poEmployees.length > 0 ? /*#__PURE__*/React.createElement("select", {
    value: poUserId,
    onChange: function onChange(e) {
      var id = e.target.value;
      setPoUserId(id);
      var emp = poEmployees.find(function (x) {
        return x.id === id;
      });
      if (emp) setPoUserName(emp.name);
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
  }, "\u2014 \u4E0D\u6307\u5B9A (\u8DDF\u5355\u90E8\u5168\u5458\u53EF\u89C1) \u2014"), poEmployees.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.name);
  })) : /*#__PURE__*/React.createElement("input", {
    value: poUserName,
    onChange: function onChange(e) {
      return setPoUserName(e.target.value);
    },
    placeholder: "\u8DDF\u5355\u540C\u4E8B\u59D3\u540D(\u9009\u586B,\u7559\u7A7A\u5219\u8DDF\u5355\u90E8\u5168\u5458\u53EF\u89C1)",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  }), order.site && poEmployees.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: '#86868b',
      marginTop: 3
    }
  }, "\uD83D\uDCA1 \u4E3B\u7BA1\u5728\u8DE8\u90E8\u95E8\u534F\u4F5C\u91CC\u7EF4\u62A4\u4E86\"\u5E97\u94FA\u8D1F\u8D23\u4EBA\"\u6620\u5C04\u540E,\u8FD9\u91CC\u4F1A\u81EA\u52A8\u63A8\u8350")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u26A1 \u7D27\u6025\u7A0B\u5EA6"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      flexWrap: 'wrap'
    }
  }, [{
    id: 'urgent',
    label: '🚨 紧急',
    color: '#dc2626'
  }, {
    id: 'high',
    label: '⚡ 重要',
    color: '#d97706'
  }, {
    id: 'normal',
    label: '· 普通',
    color: '#86868b'
  }, {
    id: 'low',
    label: '· 低',
    color: '#a8a8a8'
  }].map(function (p) {
    var sel = priority === p.id;
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onClick: function onClick() {
        return setPriority(p.id);
      },
      type: "button",
      style: {
        padding: '5px 12px',
        border: '1px solid ' + (sel ? p.color : 'var(--line)'),
        background: sel ? p.color : 'white',
        color: sel ? 'white' : p.color,
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 11,
        fontWeight: 600,
        fontFamily: 'inherit'
      }
    }, p.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\uD83D\uDCDD \u5907\u6CE8 (\u53EF\u9009)"), /*#__PURE__*/React.createElement("textarea", {
    value: extraNote,
    onChange: function onChange(e) {
      return setExtraNote(e.target.value);
    },
    rows: 2,
    placeholder: "\u5982:\u5BA2\u6237\u8981\u6C42 3 \u5929\u5185\u53D1\u8D27 / \u6613\u788E\u54C1\u9700\u52A0\u56FA\u5305\u88C5...",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      fontFamily: 'inherit',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: '#f0f9ff',
      border: '1px solid #bae6fd',
      borderRadius: 8,
      fontSize: 11,
      color: '#1e40af',
      lineHeight: 1.7
    }
  }, "\u2705 ", /*#__PURE__*/React.createElement("strong", null, "\u81EA\u52A8\u9644\u5E26"), ":\u8BA2\u5355\u53F7 / \u5BA2\u6237\u4FE1\u606F / \u6536\u8D27\u5730\u5740 / \u4EA7\u54C1\u6E05\u5355 / \u4E0B\u5355\u6307\u4EE4 / \u4ED8\u6B3E\u51ED\u8BC1(", (order.attachments || []).length, " \u4E2A)", /*#__PURE__*/React.createElement("br", null), "\uD83D\uDCE8 \u8DDF\u5355\u65B9\u4F1A\u5728\u8DE8\u90E8\u95E8\u534F\u4F5C\u91CC\u6536\u5230 Realtime \u63A8\u9001")), /*#__PURE__*/React.createElement("div", {
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
    disabled: sending,
    className: "btn-sec",
    style: {
      padding: '7px 14px',
      fontSize: 12
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: transfer,
    disabled: sending,
    style: {
      padding: '7px 18px',
      background: '#1e40af',
      color: 'white',
      border: 'none',
      borderRadius: 7,
      cursor: sending ? 'wait' : 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, sending ? '转单中...' : '📤 确认转单')))), document.body);
};
var OfflineOrderCard = function OfflineOrderCard(_ref19) {
  var order = _ref19.order,
    user = _ref19.user,
    isAdmin = _ref19.isAdmin,
    onEdit = _ref19.onEdit,
    onDelete = _ref19.onDelete,
    onReload = _ref19.onReload,
    toast = _ref19.toast;
  var _useState101 = useState(false),
    _useState102 = _slicedToArray(_useState101, 2),
    expanded = _useState102[0],
    setExpanded = _useState102[1];
  var _useState103 = useState(null),
    _useState104 = _slicedToArray(_useState103, 2),
    previewFile = _useState104[0],
    setPreviewFile = _useState104[1];
  var _useState105 = useState(false),
    _useState106 = _slicedToArray(_useState105, 2),
    showTransfer = _useState106[0],
    setShowTransfer = _useState106[1]; // 🆕 fix18
  var status = OFFLINE_ORDER_STATUSES.find(function (s) {
    return s.key === order.status;
  }) || OFFLINE_ORDER_STATUSES[0];
  var products = order.products || [];
  var attachments = order.attachments || [];
  var setStatus = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12(newStatus) {
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
          case 0:
            _context12.n = 1;
            return CLOUD.upsert('offline_orders', _objectSpread(_objectSpread({}, order), {}, {
              status: newStatus,
              updated_at: new Date().toISOString()
            }));
          case 1:
            toast('✓ 已更新');
            onReload();
          case 2:
            return _context12.a(2);
        }
      }, _callee12);
    }));
    return function setStatus(_x4) {
      return _ref20.apply(this, arguments);
    };
  }();
  var copyDispatch = function copyDispatch() {
    var text = order.follow_dispatch_text || generateDispatchText(order, products);
    navigator.clipboard.writeText(text).then(function () {
      return toast('✓ 下单指令已复制');
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl fade-in",
    style: {
      overflow: 'hidden',
      border: '1.5px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
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
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600,
      background: status.bg,
      color: status.color
    }
  }, status.label), order.site && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#f5f5f7',
      color: 'var(--ink-3)',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, order.site), order.payment_method && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#e0e7ff',
      color: '#4338ca',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, order.payment_method)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      marginBottom: 3
    }
  }, order.order_no, " \xB7 \uD83D\uDCB0 ", order.payment_currency || 'USD', " ", order.payment_amount || 0), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-2)'
    }
  }, "\uD83D\uDCE7 ", order.customer_email || '?', order.customer_name ? " \xB7 ".concat(order.customer_name) : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 6,
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCD ", order.ship_to_country || '', " ", order.ship_to_city || ''), order.paid_at && /*#__PURE__*/React.createElement("span", null, "\xB7 \u4ED8\u6B3E ", order.paid_at), products.length > 0 && /*#__PURE__*/React.createElement("span", null, "\xB7 \uD83D\uDECD ", products.length, " \u4EF6\u5546\u54C1"), /*#__PURE__*/React.createElement("span", null, "\xB7 \u5F55\u5165 ", order.created_by_name)), /*#__PURE__*/React.createElement(AttachThumbs, {
    files: attachments,
    size: 48,
    max: 6,
    onPreview: window.__setPreviewImg
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, order.status === 'paid' && !order.transferred_to_po && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowTransfer(true);
    },
    style: {
      padding: '5px 12px',
      background: '#1e40af',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    },
    title: "\u4E00\u952E\u8F6C\u7ED9\u8DDF\u5355\u90E8 \xB7 \u81EA\u52A8\u521B\u5EFA\u8DE8\u90E8\u95E8\u5DE5\u5355"
  }, "\uD83D\uDCE4 \u8F6C\u7ED9\u8DDF\u5355"), order.transferred_to_po && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '5px 10px',
      background: '#dcfce7',
      color: '#15803d',
      border: '1px solid #86efac',
      borderRadius: 5,
      fontSize: 11,
      fontWeight: 600
    },
    title: "\u5DF2\u8F6C\u7ED9 ".concat(order.transferred_to_name || '跟单部', " @ ").concat((order.transferred_at || '').slice(0, 16).replace('T', ' '))
  }, "\u2713 \u5DF2\u8F6C ", order.transferred_to_name || '跟单'), order.status === 'paid' && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStatus('dispatched');
    },
    style: {
      padding: '5px 12px',
      background: '#0369a1',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\uD83D\uDE9A \u6807\u8BB0\u5DF2\u4E0B\u5355"), /*#__PURE__*/React.createElement("button", {
    onClick: copyDispatch,
    style: {
      padding: '5px 10px',
      background: '#fef3c7',
      color: '#854d0e',
      border: '1px solid #fbbf24',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    },
    title: "\u590D\u5236\u53D1\u8DDF\u5355\u7684\u6D88\u606F"
  }, "\uD83D\uDCCB \u590D\u5236\u4E0B\u5355\u6307\u4EE4"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setExpanded(function (v) {
        return !v;
      });
    },
    className: "btn-sec",
    style: {
      padding: '5px 10px',
      fontSize: 11
    }
  }, expanded ? '收起 ▲' : '详情 ▼'), /*#__PURE__*/React.createElement("button", {
    onClick: onEdit,
    style: {
      padding: '5px 10px',
      background: '#e0f2fe',
      color: '#0369a1',
      border: '1px solid #7dd3fc',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\u270F\uFE0F"), (isAdmin || order.created_by === user.id) && /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    style: {
      padding: '5px 10px',
      background: '#fef2f2',
      color: '#dc2626',
      border: '1px solid #fca5a5',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\uD83D\uDDD1"))), function () {
    var steps = [{
      id: 'entry',
      label: '录入',
      icon: '📝',
      who: order.created_by_name,
      when: fmtStepDate(order.created_at),
      done: !!order.created_by_name && !!order.created_at,
      color: '#2563eb'
    }, {
      id: 'paid',
      label: '付款',
      icon: '💰',
      who: null,
      when: fmtStepDate(order.paid_at),
      done: !!order.paid_at || ['paid', 'dispatched'].includes(order.status),
      color: '#d97706'
    }, {
      id: 'po',
      label: '转跟单',
      icon: '📤',
      who: order.transferred_to_name,
      when: fmtStepDate(order.transferred_at),
      done: !!order.transferred_to_name && !!order.transferred_at,
      color: '#16a34a'
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 10,
        paddingTop: 10,
        borderTop: '1px dashed var(--line)'
      }
    }, /*#__PURE__*/React.createElement(ProcessStepper, {
      steps: steps
    }));
  }(), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      padding: 10,
      background: '#f5f5f7',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginBottom: 3
    }
  }, "\uD83D\uDCCD \u6536\u8D27\u5730\u5740:"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      background: 'white',
      borderRadius: 5,
      fontSize: 12,
      lineHeight: 1.5
    }
  }, order.ship_to_name && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, order.ship_to_name)), order.ship_to_address && /*#__PURE__*/React.createElement("div", null, order.ship_to_address), (order.ship_to_city || order.ship_to_state) && /*#__PURE__*/React.createElement("div", null, [order.ship_to_city, order.ship_to_state, order.ship_to_zip].filter(Boolean).join(', ')), order.ship_to_country && /*#__PURE__*/React.createElement("div", null, order.ship_to_country), order.ship_to_phone && /*#__PURE__*/React.createElement("div", null, "\uD83D\uDCDE ", order.ship_to_phone))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginBottom: 3
    }
  }, "\uD83D\uDCB0 \u4ED8\u6B3E\u4FE1\u606F:"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      background: 'white',
      borderRadius: 5,
      fontSize: 12,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("div", null, "\u65B9\u5F0F: ", /*#__PURE__*/React.createElement("strong", null, order.payment_method || '?')), /*#__PURE__*/React.createElement("div", null, "\u5E94\u6536: ", /*#__PURE__*/React.createElement("strong", null, order.payment_currency, " ", order.payment_amount)), order.received_amount && /*#__PURE__*/React.createElement("div", null, "\u5B9E\u6536: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#15803d'
    }
  }, order.payment_currency, " ", order.received_amount)), order.paid_at && /*#__PURE__*/React.createElement("div", null, "\u4ED8\u6B3E\u65E5: ", order.paid_at)))), products.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginBottom: 3
    }
  }, "\uD83D\uDECD \u4EA7\u54C1\u6E05\u5355:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, products.map(function (p, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: 8,
        background: 'white',
        borderRadius: 5,
        fontSize: 12,
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, p.image && /*#__PURE__*/React.createElement("img", {
      src: p.image,
      style: {
        width: 40,
        height: 40,
        objectFit: 'cover',
        borderRadius: 4
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, p.sku && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'monospace',
        color: 'var(--ink-3)',
        marginRight: 6
      }
    }, p.sku), p.name), /*#__PURE__*/React.createElement("span", null, "x ", p.qty || 1), p.unit_price && /*#__PURE__*/React.createElement("strong", null, order.payment_currency, " ", (parseFloat(p.unit_price) * (p.qty || 1)).toFixed(2)));
  }))), (order.quote_no || order.quote_id) && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      background: '#dbeafe',
      borderRadius: 5,
      fontSize: 11,
      color: '#1e3a8a',
      marginBottom: 10
    }
  }, "\uD83D\uDD17 \u5173\u8054\u62A5\u4EF7\u5355: ", /*#__PURE__*/React.createElement("strong", null, order.quote_no || order.quote_id)), order.notes && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginBottom: 3
    }
  }, "\uD83D\uDCDD \u5907\u6CE8:"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      background: 'white',
      borderRadius: 5,
      fontSize: 12,
      whiteSpace: 'pre-wrap'
    }
  }, order.notes)), attachments.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginBottom: 5
    }
  }, "\uD83D\uDCCE \u9644\u4EF6 (", attachments.length, "):"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gap: 5
    }
  }, attachments.map(function (a) {
    var info = getFileTypeInfo(a);
    return info.kind === 'image' ? /*#__PURE__*/React.createElement("img", {
      key: a.id,
      src: a.url,
      onClick: function onClick() {
        return setPreviewFile(a);
      },
      style: {
        width: '100%',
        height: 75,
        objectFit: 'contain',
        borderRadius: 5,
        cursor: 'pointer',
        border: '1px solid var(--line)',
        background: 'var(--bg-elevated)'
      }
    }) : /*#__PURE__*/React.createElement(FileChip, {
      key: a.id,
      file: a,
      onClick: function onClick() {
        return setPreviewFile(a);
      }
    });
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px',
      background: '#fffbeb',
      borderRadius: 5,
      fontSize: 11,
      color: '#854d0e',
      borderLeft: '3px solid #fbbf24'
    }
  }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("strong", null, "\u8DDF\u5355\u7CFB\u7EDF API \u5BF9\u63A5\u5F85\u5F00\u53D1"), " \u2014 \u73B0\u5728\u8BF7\u70B9\u4E0A\u65B9\"\uD83D\uDCCB \u590D\u5236\u4E0B\u5355\u6307\u4EE4\"\u53D1\u5230\u8DDF\u5355\u7FA4"))), previewFile && /*#__PURE__*/React.createElement(FilePreviewModal, {
    file: previewFile,
    onClose: function onClose() {
      return setPreviewFile(null);
    }
  }), showTransfer && /*#__PURE__*/React.createElement(TransferToPoModal, {
    order: order,
    user: user,
    onClose: function onClose() {
      return setShowTransfer(false);
    },
    onTransferred: function onTransferred() {
      setShowTransfer(false);
      onReload && onReload();
    },
    toast: toast
  }));
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix18: ProductImageSlot — 产品行的小图片上传/粘贴/拖拽位
// 支持: 点击上传 / Ctrl+V 粘贴 / 拖入文件 / 自动压缩到 600px / 点击放大预览
// ════════════════════════════════════════════════════════════════════
var ProductImageSlot = function ProductImageSlot(_ref21) {
  var value = _ref21.value,
    onChange = _ref21.onChange,
    productName = _ref21.productName;
  var _useState107 = useState(false),
    _useState108 = _slicedToArray(_useState107, 2),
    zoom = _useState108[0],
    setZoom = _useState108[1];
  var _useState109 = useState(false),
    _useState110 = _slicedToArray(_useState109, 2),
    focused = _useState110[0],
    setFocused = _useState110[1];
  var fileRef = useRef(null);

  // 压缩图片到 600px 宽,质量 0.8 JPEG → data URL
  var compressImage = function compressImage(file) {
    return new Promise(function (resolve, reject) {
      if (!file.type.startsWith('image/')) {
        reject(new Error('不是图片文件'));
        return;
      }
      var reader = new FileReader();
      reader.onload = function (e) {
        var img = new Image();
        img.onload = function () {
          var MAX = 600;
          var width = img.width,
            height = img.height;
          if (width > MAX || height > MAX) {
            if (width > height) {
              height = Math.round(height * MAX / width);
              width = MAX;
            } else {
              width = Math.round(width * MAX / height);
              height = MAX;
            }
          }
          var canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', 0.8));
        };
        img.onerror = reject;
        img.src = e.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };
  var handleFiles = /*#__PURE__*/function () {
    var _ref22 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(files) {
      var file, dataUrl, _t0;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            if (!(!files || files.length === 0)) {
              _context13.n = 1;
              break;
            }
            return _context13.a(2);
          case 1:
            file = files[0];
            _context13.p = 2;
            _context13.n = 3;
            return compressImage(file);
          case 3:
            dataUrl = _context13.v;
            onChange(dataUrl);
            _context13.n = 5;
            break;
          case 4:
            _context13.p = 4;
            _t0 = _context13.v;
            alert('上传失败: ' + (_t0.message || '不支持的格式'));
          case 5:
            return _context13.a(2);
        }
      }, _callee13, null, [[2, 4]]);
    }));
    return function handleFiles(_x5) {
      return _ref22.apply(this, arguments);
    };
  }();
  var onPaste = /*#__PURE__*/function () {
    var _ref23 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(e) {
      var _e$clipboardData;
      var items, _iterator2, _step2, it, f, _t1;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            items = ((_e$clipboardData = e.clipboardData) === null || _e$clipboardData === void 0 ? void 0 : _e$clipboardData.items) || [];
            _iterator2 = _createForOfIteratorHelper(items);
            _context14.p = 1;
            _iterator2.s();
          case 2:
            if ((_step2 = _iterator2.n()).done) {
              _context14.n = 5;
              break;
            }
            it = _step2.value;
            if (!(it.kind === 'file' && it.type.startsWith('image/'))) {
              _context14.n = 4;
              break;
            }
            e.preventDefault();
            f = it.getAsFile();
            if (!f) {
              _context14.n = 3;
              break;
            }
            _context14.n = 3;
            return handleFiles([f]);
          case 3:
            return _context14.a(2);
          case 4:
            _context14.n = 2;
            break;
          case 5:
            _context14.n = 7;
            break;
          case 6:
            _context14.p = 6;
            _t1 = _context14.v;
            _iterator2.e(_t1);
          case 7:
            _context14.p = 7;
            _iterator2.f();
            return _context14.f(7);
          case 8:
            return _context14.a(2);
        }
      }, _callee14, null, [[1, 6, 7, 8]]);
    }));
    return function onPaste(_x6) {
      return _ref23.apply(this, arguments);
    };
  }();
  var onDrop = /*#__PURE__*/function () {
    var _ref24 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(e) {
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.n) {
          case 0:
            e.preventDefault();
            setFocused(false);
            _context15.n = 1;
            return handleFiles(Array.from(e.dataTransfer.files || []));
          case 1:
            return _context15.a(2);
        }
      }, _callee15);
    }));
    return function onDrop(_x7) {
      return _ref24.apply(this, arguments);
    };
  }();
  var onDragOver = function onDragOver(e) {
    e.preventDefault();
    setFocused(true);
  };
  var onDragLeave = function onDragLeave() {
    return setFocused(false);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    tabIndex: 0,
    onClick: function onClick() {
      var _fileRef$current;
      if (value) setZoom(true);else (_fileRef$current = fileRef.current) === null || _fileRef$current === void 0 || _fileRef$current.click();
    },
    onPaste: onPaste,
    onDrop: onDrop,
    onDragOver: onDragOver,
    onDragLeave: onDragLeave,
    onFocus: function onFocus() {
      return setFocused(true);
    },
    onBlur: function onBlur() {
      return setFocused(false);
    },
    title: value ? "\u70B9\u51FB\u653E\u5927 \xB7 \u5F53\u524D: ".concat(productName || '产品图') : '点击上传 / 聚焦后 Ctrl+V 粘贴 / 拖入图片',
    style: {
      width: 48,
      height: 48,
      borderRadius: 6,
      border: focused ? '2px dashed #0071e3' : value ? '1px solid var(--line)' : '1px dashed var(--line)',
      background: value ? "url(".concat(value, ") center/cover no-repeat") : focused ? '#eff6ff' : '#fafafa',
      cursor: 'pointer',
      outline: 'none',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, !value && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--ink-4)'
    }
  }, "\uD83D\uDCF7"), value && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      onChange('');
    },
    style: {
      position: 'absolute',
      top: -6,
      right: -6,
      width: 16,
      height: 16,
      padding: 0,
      background: '#dc2626',
      color: 'white',
      border: '2px solid white',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: 9,
      lineHeight: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: "\u79FB\u9664\u56FE\u7247"
  }, "\xD7"), /*#__PURE__*/React.createElement("input", {
    ref: fileRef,
    type: "file",
    accept: "image/*",
    onChange: function onChange(e) {
      return handleFiles(Array.from(e.target.files || []));
    },
    style: {
      display: 'none'
    }
  })), zoom && value && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setZoom(false);
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.85)',
      zIndex: 100002,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      cursor: 'zoom-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '90%',
      maxHeight: '90%',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: value,
    alt: productName,
    style: {
      maxWidth: '100%',
      maxHeight: '80vh',
      borderRadius: 8
    }
  }), productName && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'white',
      marginTop: 10,
      fontSize: 14
    }
  }, productName))), document.body));
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix22 联动 1: ProductAutocomplete — SKU/产品名联想下拉
// 输入时实时匹配 products 主表的 SKU/名称,点击 → 自动填充产品名/图/供应商/价格
// ════════════════════════════════════════════════════════════════════
var ProductAutocomplete = function ProductAutocomplete(_ref25) {
  var value = _ref25.value,
    _onChange = _ref25.onChange,
    onSelect = _ref25.onSelect,
    products = _ref25.products,
    placeholder = _ref25.placeholder,
    _ref25$mode = _ref25.mode,
    mode = _ref25$mode === void 0 ? 'sku' : _ref25$mode,
    style = _ref25.style;
  // mode: 'sku' = 按 SKU 主要匹配 / 'name' = 按产品名主要匹配
  var _useState111 = useState(false),
    _useState112 = _slicedToArray(_useState111, 2),
    open = _useState112[0],
    setOpen = _useState112[1];
  var _useState113 = useState(0),
    _useState114 = _slicedToArray(_useState113, 2),
    highlighted = _useState114[0],
    setHighlighted = _useState114[1];
  var containerRef = useRef(null);

  // 计算匹配项 (按输入实时过滤)
  var matches = useMemo(function () {
    var q = (value || '').trim().toLowerCase();
    if (!q || !products || products.length === 0) return [];
    return products.filter(function (p) {
      if (mode === 'sku') {
        return (p.sku || '').toLowerCase().includes(q) || (p.name || '').toLowerCase().includes(q);
      }
      return (p.name || '').toLowerCase().includes(q) || (p.sku || '').toLowerCase().includes(q);
    }).slice(0, 8);
  }, [value, products, mode]);

  // 点击外部关闭
  useEffect(function () {
    var onClick = function onClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return function () {
      return document.removeEventListener('mousedown', onClick);
    };
  }, []);
  var handleSelect = function handleSelect(p) {
    onSelect(p);
    setOpen(false);
  };
  var handleKey = function handleKey(e) {
    if (!open || matches.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlighted(function (h) {
        return Math.min(h + 1, matches.length - 1);
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlighted(function (h) {
        return Math.max(h - 1, 0);
      });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      handleSelect(matches[highlighted]);
    } else if (e.key === 'Escape') setOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: containerRef,
    style: _objectSpread({
      position: 'relative',
      flex: 1,
      minWidth: 0
    }, style)
  }, /*#__PURE__*/React.createElement("input", {
    value: value || '',
    onChange: function onChange(e) {
      _onChange(e.target.value);
      setOpen(true);
      setHighlighted(0);
    },
    onFocus: function onFocus() {
      return setOpen(true);
    },
    onKeyDown: handleKey,
    placeholder: placeholder || (mode === 'sku' ? 'SKU (输入联想)' : '产品名 (输入联想)'),
    style: {
      padding: '5px 8px',
      border: '1px solid var(--line)',
      borderRadius: 5,
      fontSize: 12,
      fontFamily: mode === 'sku' ? 'monospace' : 'inherit',
      width: '100%',
      boxSizing: 'border-box'
    }
  }), open && matches.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      marginTop: 2,
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 6,
      boxShadow: '0 8px 24px rgba(0,0,0,.12)',
      zIndex: 9999,
      maxHeight: 280,
      overflowY: 'auto'
    }
  }, matches.map(function (p, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      onMouseEnter: function onMouseEnter() {
        return setHighlighted(idx);
      },
      onClick: function onClick() {
        return handleSelect(p);
      },
      style: {
        padding: '7px 10px',
        cursor: 'pointer',
        background: idx === highlighted ? '#eff6ff' : 'white',
        borderBottom: idx < matches.length - 1 ? '1px solid #f3f4f6' : 'none',
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, p.image ? /*#__PURE__*/React.createElement("img", {
      src: p.image,
      alt: "",
      style: {
        width: 32,
        height: 32,
        objectFit: 'cover',
        borderRadius: 4,
        flexShrink: 0
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32,
        height: 32,
        background: '#fafafa',
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--ink-4)',
        fontSize: 14,
        flexShrink: 0
      }
    }, "\uD83D\uDCF7"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: 'var(--ink)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, p.sku && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'monospace',
        color: '#0369a1',
        marginRight: 6
      }
    }, p.sku), p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'var(--ink-3)',
        marginTop: 1,
        display: 'flex',
        gap: 8
      }
    }, p.supplier_name && /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFED ", p.supplier_name), p.default_unit_price && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'monospace'
      }
    }, p.default_currency || 'USD', " ", p.default_unit_price), p.total_aftersales > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: p.total_aftersales >= 5 ? '#dc2626' : '#d97706'
      }
    }, "\uD83D\uDD27 ", p.total_aftersales))));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '5px 10px',
      fontSize: 9,
      color: 'var(--ink-4)',
      borderTop: '1px solid #f3f4f6',
      background: '#fafafa'
    }
  }, "\u2191\u2193 \u9009\u62E9 \xB7 Enter \u786E\u8BA4 \xB7 Esc \u5173\u95ED")));
};
var OfflineOrderEditor = function OfflineOrderEditor(_ref26) {
  var order = _ref26.order,
    user = _ref26.user,
    employees = _ref26.employees,
    onClose = _ref26.onClose,
    onSaved = _ref26.onSaved,
    toast = _ref26.toast;
  var allSites = useSiteCodes(); // 🆕 fix22 联动 3: 合并 内置 SITES + 自定义网站
  var isEdit = !!order;
  var _useState115 = useState((order === null || order === void 0 ? void 0 : order.order_no) || ''),
    _useState116 = _slicedToArray(_useState115, 2),
    orderNo = _useState116[0],
    setOrderNo = _useState116[1];
  var _useState117 = useState((order === null || order === void 0 ? void 0 : order.site) || ''),
    _useState118 = _slicedToArray(_useState117, 2),
    site = _useState118[0],
    setSite = _useState118[1];
  var _useState119 = useState(false),
    _useState120 = _slicedToArray(_useState119, 2),
    generating = _useState120[0],
    setGenerating = _useState120[1];
  var _useState121 = useState((order === null || order === void 0 ? void 0 : order.customer_name) || ''),
    _useState122 = _slicedToArray(_useState121, 2),
    customerName = _useState122[0],
    setCustomerName = _useState122[1];
  var _useState123 = useState((order === null || order === void 0 ? void 0 : order.customer_email) || ''),
    _useState124 = _slicedToArray(_useState123, 2),
    customerEmail = _useState124[0],
    setCustomerEmail = _useState124[1];
  var _useState125 = useState((order === null || order === void 0 ? void 0 : order.customer_phone) || ''),
    _useState126 = _slicedToArray(_useState125, 2),
    customerPhone = _useState126[0],
    setCustomerPhone = _useState126[1];
  var _useState127 = useState((order === null || order === void 0 ? void 0 : order.ship_to_name) || ''),
    _useState128 = _slicedToArray(_useState127, 2),
    shipToName = _useState128[0],
    setShipToName = _useState128[1];
  var _useState129 = useState((order === null || order === void 0 ? void 0 : order.ship_to_address) || ''),
    _useState130 = _slicedToArray(_useState129, 2),
    shipToAddress = _useState130[0],
    setShipToAddress = _useState130[1];
  var _useState131 = useState((order === null || order === void 0 ? void 0 : order.ship_to_city) || ''),
    _useState132 = _slicedToArray(_useState131, 2),
    shipToCity = _useState132[0],
    setShipToCity = _useState132[1];
  var _useState133 = useState((order === null || order === void 0 ? void 0 : order.ship_to_state) || ''),
    _useState134 = _slicedToArray(_useState133, 2),
    shipToState = _useState134[0],
    setShipToState = _useState134[1];
  var _useState135 = useState((order === null || order === void 0 ? void 0 : order.ship_to_zip) || ''),
    _useState136 = _slicedToArray(_useState135, 2),
    shipToZip = _useState136[0],
    setShipToZip = _useState136[1];
  var _useState137 = useState((order === null || order === void 0 ? void 0 : order.ship_to_country) || ''),
    _useState138 = _slicedToArray(_useState137, 2),
    shipToCountry = _useState138[0],
    setShipToCountry = _useState138[1];
  var _useState139 = useState((order === null || order === void 0 ? void 0 : order.ship_to_phone) || ''),
    _useState140 = _slicedToArray(_useState139, 2),
    shipToPhone = _useState140[0],
    setShipToPhone = _useState140[1];
  // 🆕 fix16: 智能地址粘贴
  var _useState141 = useState(''),
    _useState142 = _slicedToArray(_useState141, 2),
    addressPaste = _useState142[0],
    setAddressPaste = _useState142[1];
  var _useState143 = useState(''),
    _useState144 = _slicedToArray(_useState143, 2),
    parseFeedback = _useState144[0],
    setParseFeedback = _useState144[1];
  var handleParseAddress = function handleParseAddress(text) {
    if (!text || !text.trim()) {
      setParseFeedback('请先粘贴地址');
      return;
    }
    try {
      var parsed = parseAddressText(text);
      var filledFields = [];
      if (parsed.name) {
        setShipToName(parsed.name);
        filledFields.push('姓名');
      }
      if (parsed.phone) {
        setShipToPhone(parsed.phone);
        filledFields.push('电话');
      }
      if (parsed.street) {
        setShipToAddress(parsed.street);
        filledFields.push('街道');
      }
      if (parsed.city) {
        setShipToCity(parsed.city);
        filledFields.push('城市');
      }
      if (parsed.state) {
        setShipToState(parsed.state);
        filledFields.push('州/省');
      }
      if (parsed.zip) {
        setShipToZip(parsed.zip);
        filledFields.push('邮编');
      }
      if (parsed.country) {
        setShipToCountry(parsed.country);
        filledFields.push('国家');
      }
      if (filledFields.length === 0) setParseFeedback('⚠ 无法识别 · 请手动填写');else setParseFeedback("\u2713 \u5DF2\u8BC6\u522B ".concat(filledFields.length, " \u9879: ").concat(filledFields.join('/'), " \xB7 \u8BF7\u68C0\u67E5\u65E0\u8BEF"));
      setTimeout(function () {
        return setParseFeedback('');
      }, 6000);
    } catch (e) {
      setParseFeedback('⚠ 解析出错 · ' + (e.message || e));
    }
  };
  var _useState145 = useState((order === null || order === void 0 ? void 0 : order.payment_method) || '银行转账'),
    _useState146 = _slicedToArray(_useState145, 2),
    paymentMethod = _useState146[0],
    setPaymentMethod = _useState146[1];
  var _useState147 = useState((order === null || order === void 0 ? void 0 : order.payment_amount) || ''),
    _useState148 = _slicedToArray(_useState147, 2),
    paymentAmount = _useState148[0],
    setPaymentAmount = _useState148[1];
  var _useState149 = useState((order === null || order === void 0 ? void 0 : order.payment_currency) || 'USD'),
    _useState150 = _slicedToArray(_useState149, 2),
    paymentCurrency = _useState150[0],
    setPaymentCurrency = _useState150[1];
  var _useState151 = useState((order === null || order === void 0 ? void 0 : order.received_amount) || ''),
    _useState152 = _slicedToArray(_useState151, 2),
    receivedAmount = _useState152[0],
    setReceivedAmount = _useState152[1];
  var _useState153 = useState((order === null || order === void 0 ? void 0 : order.paid_at) || ''),
    _useState154 = _slicedToArray(_useState153, 2),
    paidAt = _useState154[0],
    setPaidAt = _useState154[1];
  var _useState155 = useState((order === null || order === void 0 ? void 0 : order.products) || []),
    _useState156 = _slicedToArray(_useState155, 2),
    products = _useState156[0],
    setProducts = _useState156[1];
  var productsList = useProducts(); // 🆕 fix22 联动 1: 产品主表供 SKU 联想
  var _useState157 = useState((order === null || order === void 0 ? void 0 : order.quote_no) || ''),
    _useState158 = _slicedToArray(_useState157, 2),
    quoteNo = _useState158[0],
    setQuoteNo = _useState158[1];
  var _useState159 = useState((order === null || order === void 0 ? void 0 : order.attachments) || []),
    _useState160 = _slicedToArray(_useState159, 2),
    attachments = _useState160[0],
    setAttachments = _useState160[1];
  var _useState161 = useState((order === null || order === void 0 ? void 0 : order.notes) || ''),
    _useState162 = _slicedToArray(_useState161, 2),
    notes = _useState162[0],
    setNotes = _useState162[1];
  var _useState163 = useState((order === null || order === void 0 ? void 0 : order.status) || 'draft'),
    _useState164 = _slicedToArray(_useState163, 2),
    status = _useState164[0],
    setStatus = _useState164[1];
  var _useState165 = useState(false),
    _useState166 = _slicedToArray(_useState165, 2),
    saving = _useState166[0],
    setSaving = _useState166[1];
  var _useState167 = useState(null),
    _useState168 = _slicedToArray(_useState167, 2),
    previewNextNo = _useState168[0],
    setPreviewNextNo = _useState168[1]; // 🆕 预览下一个编号(扫描历史得出)
  var _useState169 = useState(''),
    _useState170 = _slicedToArray(_useState169, 2),
    autoFilledNo = _useState170[0],
    setAutoFilledNo = _useState170[1]; // 🆕 已自动填充的编号(用于检测用户是否手改)
  var _useState171 = useState(false),
    _useState172 = _slicedToArray(_useState171, 2),
    showQuoteSearch = _useState172[0],
    setShowQuoteSearch = _useState172[1];

  // 🆕 切换网站时,扫描历史 + 显示下一个编号建议
  var handleSiteChange = /*#__PURE__*/function () {
    var _ref27 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(newSite) {
      var result, userHasNotEdited, _t10;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.p = _context16.n) {
          case 0:
            setSite(newSite);
            if (!(!newSite || isEdit)) {
              _context16.n = 1;
              break;
            }
            return _context16.a(2);
          case 1:
            setGenerating(true);
            _context16.p = 2;
            _context16.n = 3;
            return generateOrderNo(newSite, {
              previewOnly: true
            });
          case 3:
            result = _context16.v;
            setPreviewNextNo(result);
            // 只有 orderNo 为空 或 用户没手动改过时,才自动填充
            userHasNotEdited = !orderNo.trim() || orderNo === autoFilledNo;
            if (userHasNotEdited) {
              setOrderNo(result.orderNo);
              setAutoFilledNo(result.orderNo);
              toast("\u2713 \u5DF2\u626B\u63CF\u5386\u53F2\u8BA2\u5355 \xB7 \u4E0B\u4E00\u4E2A\u7F16\u53F7: ".concat(result.orderNo, " (\u5386\u53F2\u6700\u5927 ").concat(result.maxNo, ")"));
            }
            _context16.n = 5;
            break;
          case 4:
            _context16.p = 4;
            _t10 = _context16.v;
            toast('⚠ 扫描历史失败,请手动输入: ' + _t10.message);
          case 5:
            setGenerating(false);
          case 6:
            return _context16.a(2);
        }
      }, _callee16, null, [[2, 4]]);
    }));
    return function handleSiteChange(_x8) {
      return _ref27.apply(this, arguments);
    };
  }();
  var handleManualGenerate = /*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17() {
      var result, _t11;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.p = _context17.n) {
          case 0:
            if (site) {
              _context17.n = 1;
              break;
            }
            alert('请先选择网站');
            return _context17.a(2);
          case 1:
            setGenerating(true);
            _context17.p = 2;
            _context17.n = 3;
            return generateOrderNo(site, {
              previewOnly: true
            });
          case 3:
            result = _context17.v;
            setPreviewNextNo(result);
            setOrderNo(result.orderNo);
            setAutoFilledNo(result.orderNo);
            toast("\u2713 \u5DF2\u751F\u6210 ".concat(result.orderNo, "(\u5386\u53F2\u6700\u5927 ").concat(result.maxNo, ")"));
            _context17.n = 5;
            break;
          case 4:
            _context17.p = 4;
            _t11 = _context17.v;
            toast('⚠ ' + _t11.message);
          case 5:
            setGenerating(false);
          case 6:
            return _context17.a(2);
        }
      }, _callee17, null, [[2, 4]]);
    }));
    return function handleManualGenerate() {
      return _ref28.apply(this, arguments);
    };
  }();
  var handleLinkQuote = function handleLinkQuote(quote) {
    setQuoteNo(quote.pi_no || quote.id || '');
    if (quote.rawData) {
      var d = quote.rawData;
      if (!customerEmail && d.buyer_email) setCustomerEmail(d.buyer_email);
      if (!customerName && d.buyer_info) setCustomerName((d.buyer_info || '').split('\n')[0]);
      if (!shipToAddress && d.shipping_info) setShipToAddress(d.shipping_info);
      if (!shipToPhone && d.shipping_tel) setShipToPhone(d.shipping_tel);
    }
    if (quote.amount && !paymentAmount) setPaymentAmount(quote.amount);
    setShowQuoteSearch(false);
    toast('✓ 已关联报价单 ' + (quote.pi_no || quote.id));
  };
  var addProduct = function addProduct() {
    return setProducts(function (prev) {
      return [].concat(_toConsumableArray(prev), [{
        sku: '',
        name: '',
        qty: 1,
        unit_price: '',
        image: ''
      }]);
    });
  };
  var updateProduct = function updateProduct(i, patch) {
    return setProducts(function (prev) {
      return prev.map(function (p, idx) {
        return idx === i ? _objectSpread(_objectSpread({}, p), patch) : p;
      });
    });
  };
  var removeProduct = function removeProduct(i) {
    return setProducts(function (prev) {
      return prev.filter(function (_, idx) {
        return idx !== i;
      });
    });
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref29 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18() {
      var _yield$CLOUD$client$f4, existing, userName, now, seqConfig, prefix, separator, m, n, dispatchText, payload, res, _t12, _t13;
      return _regenerator().w(function (_context18) {
        while (1) switch (_context18.p = _context18.n) {
          case 0:
            if (orderNo.trim()) {
              _context18.n = 1;
              break;
            }
            alert('请填写订单编号或选择网站自动生成');
            return _context18.a(2);
          case 1:
            if (site) {
              _context18.n = 2;
              break;
            }
            alert('请选择网站');
            return _context18.a(2);
          case 2:
            if (isEdit) {
              _context18.n = 8;
              break;
            }
            _context18.p = 3;
            _context18.n = 4;
            return CLOUD.client.from('offline_orders').select('id, order_no').eq('order_no', orderNo.trim()).limit(1);
          case 4:
            _yield$CLOUD$client$f4 = _context18.v;
            existing = _yield$CLOUD$client$f4.data;
            if (!(existing && existing.length > 0)) {
              _context18.n = 6;
              break;
            }
            _context18.n = 5;
            return wsConfirm("\u26A0 \u8B66\u544A:\u8BA2\u5355\u7F16\u53F7 \"".concat(orderNo, "\" \u5DF2\u5B58\u5728!\n\n\u7EE7\u7EED\u4FDD\u5B58\u5C06\u521B\u5EFA\u91CD\u590D\u7F16\u53F7(\u53EF\u80FD\u5BFC\u81F4\u7BA1\u7406\u6DF7\u4E71)\u3002\n\n\u5EFA\u8BAE:\u70B9\u51FB\"\uD83D\uDD04 \u91CD\u65B0\u626B\u63CF+1\"\u83B7\u53D6\u552F\u4E00\u7F16\u53F7\u3002\n\n\u4ECD\u8981\u7EE7\u7EED\u4FDD\u5B58\u5417?"));
          case 5:
            if (_context18.v) {
              _context18.n = 6;
              break;
            }
            return _context18.a(2);
          case 6:
            _context18.n = 8;
            break;
          case 7:
            _context18.p = 7;
            _t12 = _context18.v;
          case 8:
            setSaving(true);
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            now = new Date().toISOString(); // 🆕 新建保存成功后:把 sequence 更新到比当前编号大的位置
            if (isEdit) {
              _context18.n = 13;
              break;
            }
            _context18.p = 9;
            _context18.n = 10;
            return CLOUD.client.from('site_order_sequences').select('*').eq('site', site).single();
          case 10:
            seqConfig = _context18.v;
            if (!seqConfig.data) {
              _context18.n = 11;
              break;
            }
            prefix = seqConfig.data.prefix || site;
            separator = seqConfig.data.separator || '-';
            m = orderNo.trim().match(new RegExp('^' + prefix + (separator || '') + '?(\\d+)$'));
            if (!m) {
              _context18.n = 11;
              break;
            }
            n = parseInt(m[1], 10);
            if (!(n > (seqConfig.data.current_no || 0))) {
              _context18.n = 11;
              break;
            }
            _context18.n = 11;
            return CLOUD.client.from('site_order_sequences').update({
              current_no: n,
              updated_at: now
            }).eq('site', site);
          case 11:
            _context18.n = 13;
            break;
          case 12:
            _context18.p = 12;
            _t13 = _context18.v;
            console.warn('更新 sequence 失败(不影响订单保存):', _t13);
          case 13:
            dispatchText = generateDispatchText({
              order_no: orderNo,
              ship_to_name: shipToName,
              ship_to_address: shipToAddress,
              ship_to_city: shipToCity,
              ship_to_state: shipToState,
              ship_to_country: shipToCountry,
              ship_to_zip: shipToZip,
              ship_to_phone: shipToPhone
            }, products);
            payload = _objectSpread(_objectSpread({}, order || {}), {}, {
              order_no: orderNo.trim(),
              site: site,
              customer_name: customerName.trim() || null,
              customer_email: customerEmail.trim() || null,
              customer_phone: customerPhone.trim() || null,
              ship_to_name: shipToName.trim() || null,
              ship_to_address: shipToAddress.trim() || null,
              ship_to_city: shipToCity.trim() || null,
              ship_to_state: shipToState.trim() || null,
              ship_to_zip: shipToZip.trim() || null,
              ship_to_country: shipToCountry.trim() || null,
              ship_to_phone: shipToPhone.trim() || null,
              payment_method: paymentMethod,
              payment_amount: parseFloat(paymentAmount) || null,
              payment_currency: paymentCurrency,
              received_amount: parseFloat(receivedAmount) || null,
              paid_at: paidAt || null,
              products: products,
              quote_no: quoteNo.trim() || null,
              attachments: attachments,
              notes: notes.trim() || null,
              status: status,
              follow_dispatch_text: dispatchText,
              updated_at: now,
              // 🆕 fix7: created_by 必须非空(旧记录可能为 null)
              created_by: (order === null || order === void 0 ? void 0 : order.created_by) || user.id,
              created_by_name: (order === null || order === void 0 ? void 0 : order.created_by_name) || userName
            });
            _context18.n = 14;
            return CLOUD.upsert('offline_orders', payload);
          case 14:
            res = _context18.v;
            if (res) {
              toast(isEdit ? '✓ 已更新' : '✓ 已创建线下单');
              onSaved();
            } else {
              alertSaveError('保存线下单');
            }
            setSaving(false);
          case 15:
            return _context18.a(2);
        }
      }, _callee18, null, [[9, 12], [3, 7]]);
    }));
    return function handleSave() {
      return _ref29.apply(this, arguments);
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
      maxWidth: 980,
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
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "\uD83D\uDCB3 ", isEdit ? '编辑' : '新建', "\u7EBF\u4E0B\u5355"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, user && user.role !== 'super_admin' && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _window$__requestSupe2, _window2;
      return (_window$__requestSupe2 = (_window2 = window).__requestSupervisorAssistance) === null || _window$__requestSupe2 === void 0 ? void 0 : _window$__requestSupe2.call(_window2, {
        entityType: '线下单',
        entityId: order === null || order === void 0 ? void 0 : order.id,
        entityTitle: (order === null || order === void 0 ? void 0 : order.order_no) || orderNo || '(新单)'
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
    title: "\u628A\u8FD9\u6761\u7EBF\u4E0B\u5355\u4EA4\u7ED9\u4E3B\u7BA1/\u8001\u677F\u5904\u7406"
  }, user.role === 'admin' ? '👑 申请老板' : '🚨 申请主管'), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: onClose,
    style: {
      padding: '4px 12px'
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      overflow: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(FormGuide, {
    title: "\u7EBF\u4E0B\u5355\u767B\u8BB0",
    steps: ['基本信息:选网站、填客户信息(线下/批发等非常规下单走这里)。', '产品 / 金额:填订单产品与金额、币种。', '付款方式 / 付款状态:怎么收款、是否已收。', '发货:发货方式、物流单号、发货状态。', '备注:特殊要求 / 沟通记录,方便交接。'],
    feedbackTip: "\u5982\u679C\u7EBF\u4E0B\u5355\u6D41\u7A0B\u66B4\u9732\u53CD\u590D\u95EE\u9898(\u67D0\u5BA2\u6237\u8001\u62D6\u6B3E\u3001\u67D0\u6E20\u9053\u603B\u51FA\u9519\u2026),\u56DE\u5230\u8BE5\u5BA2\u6237\u7684\u300C\u8DDF\u8FDB & \u622A\u56FE\u300D\u5F39\u7A97\u52FE\u300C\uD83D\uDCE3 \u6807\u8BB0\u4E3A\u95EE\u9898\u53CD\u9988\u300D\u5E76\u5199\u8BF4\u660E,\u4E3B\u7BA1\u4F1A\u5728\u300C\u4ECA\u65E5\u5DE5\u4F5C\u5FEB\u7167\u300D\u6536\u5230\u63D0\u9192\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      background: '#f0f9ff',
      borderRadius: 8,
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#075985',
      marginBottom: 8
    }
  }, "\uD83D\uDCCB \u57FA\u672C\u4FE1\u606F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '120px 1fr 0.8fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u7F51\u7AD9 *"), /*#__PURE__*/React.createElement("select", {
    value: site,
    onChange: function onChange(e) {
      return handleSiteChange(e.target.value);
    },
    disabled: isEdit,
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u9009\u62E9"), allSites.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s,
      value: s
    }, s);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u8BA2\u5355\u7F16\u53F7 *", !isEdit && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 6,
      color: '#15803d',
      fontWeight: 400
    }
  }, "(\u53EF\u81EA\u52A8\u751F\u6210 / \u4E5F\u53EF\u624B\u52A8\u8F93\u5165)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: orderNo,
    onChange: function onChange(e) {
      return setOrderNo(e.target.value);
    },
    placeholder: site ? "\u4F8B\u5982: ".concat(site, "0001") : '选网站后将扫描历史并自动建议',
    style: {
      flex: 1,
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'monospace',
      fontWeight: 600
    }
  }), !isEdit && /*#__PURE__*/React.createElement("button", {
    onClick: handleManualGenerate,
    disabled: !site || generating,
    type: "button",
    style: {
      padding: '7px 10px',
      background: '#fef3c7',
      color: '#854d0e',
      border: '1px solid #fbbf24',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontFamily: 'inherit',
      whiteSpace: 'nowrap'
    }
  }, generating ? '扫描中...' : '🔄 重新扫描+1')), !isEdit && previewNextNo && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      padding: '5px 9px',
      background: '#f0fdf4',
      border: '1px solid #86efac',
      borderRadius: 5,
      fontSize: 10,
      color: '#14532d',
      lineHeight: 1.4
    }
  }, "\uD83D\uDCCA \u5DF2\u626B\u63CF\u5168\u90E8\u5386\u53F2\u8BA2\u5355(\u7EBF\u4E0B\u5355/\u5BA2\u670D/\u552E\u540E/\u8865\u4EF6/\u9000\u6B3E/\u62D2\u4ED8): \u5386\u53F2\u6700\u5927 ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'monospace'
    }
  }, previewNextNo.maxNo > 0 ? previewNextNo.maxNo : '无'), "\u2192 \u5EFA\u8BAE\u4E0B\u4E00\u4E2A ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'monospace',
      color: '#15803d'
    }
  }, previewNextNo.orderNo)), !isEdit && orderNo && orderNo !== autoFilledNo && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 10,
      color: '#854d0e'
    }
  }, "\u270F \u4F60\u5DF2\u624B\u52A8\u4FEE\u6539\u8BA2\u5355\u7F16\u53F7(\u4FDD\u5B58\u65F6\u5C06\u4F7F\u7528\u6B64\u7F16\u53F7)")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("select", {
    value: status,
    onChange: function onChange(e) {
      return setStatus(e.target.value);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }, OFFLINE_ORDER_STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.key,
      value: s.key
    }, s.label);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-2)',
      fontWeight: 600
    }
  }, "\uD83D\uDD17 \u5173\u8054\u62A5\u4EF7\u5355:"), quoteNo ? /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 10px',
      background: '#dcfce7',
      color: '#15803d',
      borderRadius: 14,
      fontSize: 11,
      fontWeight: 600,
      display: 'flex',
      gap: 4,
      alignItems: 'center'
    }
  }, "\u2713 ", quoteNo, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setQuoteNo('');
    },
    style: {
      background: 'transparent',
      border: 'none',
      color: '#15803d',
      cursor: 'pointer',
      fontSize: 13
    }
  }, "\xD7")) : null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowQuoteSearch(true);
    },
    style: {
      padding: '4px 10px',
      background: '#e0f2fe',
      color: '#0369a1',
      border: '1px solid #7dd3fc',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontFamily: 'inherit',
      fontWeight: 600
    }
  }, "\uD83D\uDD0D \u641C\u7D22\u62A5\u4EF7\u5355"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)'
    }
  }, "(\u8F93\u5165\u7F16\u53F7/\u5BA2\u6237\u540D \xB7 \u81EA\u52A8\u586B\u5BA2\u6237\u4FE1\u606F)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      background: '#fafaf7',
      borderRadius: 8,
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink)',
      marginBottom: 8
    }
  }, "\uD83D\uDC64 \u5BA2\u6237\u4FE1\u606F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 0.8fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: customerName,
    onChange: function onChange(e) {
      return setCustomerName(e.target.value);
    },
    placeholder: "\u5BA2\u6237\u59D3\u540D / \u516C\u53F8",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: customerEmail,
    onChange: function onChange(e) {
      return setCustomerEmail(e.target.value);
    },
    placeholder: "\u90AE\u7BB1",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: customerPhone,
    onChange: function onChange(e) {
      return setCustomerPhone(e.target.value);
    },
    placeholder: "\u7535\u8BDD",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      background: '#fefce8',
      borderRadius: 8,
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#854d0e',
      marginBottom: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCD \u6536\u8D27\u4FE1\u606F(\u81EA\u52A8\u751F\u6210\u8DDF\u5355\u6D88\u606F)"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 500,
      color: '#a16207'
    }
  }, "\uD83D\uDCA1 \u7C98\u8D34\u6574\u6BB5\u5730\u5740 \u2192 \u81EA\u52A8\u8BC6\u522B \xB7 \u652F\u6301\u7F8E\u56FD/\u52A0\u62FF\u5927/\u6B27\u6D32/\u6FB3\u6D32\u7B49")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: addressPaste,
    onChange: function onChange(e) {
      var v = e.target.value;
      setAddressPaste(v);
      // 自动解析:如果用户一次性输入/粘贴超过 20 字符 + 含换行或逗号,自动触发
      if (v.length > 20 && (v.includes('\n') || v.includes(',')) && v.length - addressPaste.length > 15) {
        setTimeout(function () {
          return handleParseAddress(v);
        }, 100);
      }
    },
    placeholder: "\uD83E\uDE84 \u7C98\u8D34\u6574\u6BB5\u5730\u5740,\u81EA\u52A8\u8BC6\u522B\u4E0B\u65B9\u5B57\u6BB5\u3002\n\u4F8B\u5982:\nJohn Smith\n123 Main Street, Apt 4B\nLos Angeles, CA 90001\nUnited States\n+1 555-1234",
    rows: 3,
    style: {
      width: '100%',
      padding: '8px 10px',
      border: '1px dashed #d97706',
      borderRadius: 6,
      fontSize: 12,
      fontFamily: 'inherit',
      resize: 'vertical',
      background: '#fffbeb',
      boxSizing: 'border-box',
      lineHeight: 1.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 6,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return handleParseAddress(addressPaste);
    },
    disabled: !addressPaste.trim(),
    style: {
      padding: '5px 14px',
      background: addressPaste.trim() ? '#d97706' : '#e5e5e5',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: addressPaste.trim() ? 'pointer' : 'not-allowed',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\uD83E\uDE84 \u89E3\u6790\u586B\u5165\u4E0B\u65B9"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      setAddressPaste('');
      setParseFeedback('');
    },
    disabled: !addressPaste.trim(),
    style: {
      padding: '5px 12px',
      background: 'white',
      color: '#854d0e',
      border: '1px solid #fde68a',
      borderRadius: 6,
      cursor: addressPaste.trim() ? 'pointer' : 'not-allowed',
      fontSize: 11,
      fontFamily: 'inherit'
    }
  }, "\u2715 \u6E05\u7A7A"), parseFeedback && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: parseFeedback.startsWith('✓') ? '#15803d' : '#b91c1c',
      fontWeight: 500
    }
  }, parseFeedback))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: shipToName,
    onChange: function onChange(e) {
      return setShipToName(e.target.value);
    },
    placeholder: "\u6536\u4EF6\u4EBA\u59D3\u540D",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: shipToPhone,
    onChange: function onChange(e) {
      return setShipToPhone(e.target.value);
    },
    placeholder: "\u6536\u4EF6\u4EBA\u7535\u8BDD",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  })), /*#__PURE__*/React.createElement("input", {
    value: shipToAddress,
    onChange: function onChange(e) {
      return setShipToAddress(e.target.value);
    },
    placeholder: "\u8857\u9053\u5730\u5740(Juras iela 32)",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 0.7fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: shipToCity,
    onChange: function onChange(e) {
      return setShipToCity(e.target.value);
    },
    placeholder: "\u57CE\u5E02(Jurmala)",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: shipToState,
    onChange: function onChange(e) {
      return setShipToState(e.target.value);
    },
    placeholder: "\u5DDE/\u7701",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: shipToZip,
    onChange: function onChange(e) {
      return setShipToZip(e.target.value);
    },
    placeholder: "\u90AE\u7F16(LV-2015)",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: shipToCountry,
    onChange: function onChange(e) {
      return setShipToCountry(e.target.value);
    },
    placeholder: "\u56FD\u5BB6(Latvia)",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      background: '#f0fdf4',
      borderRadius: 8,
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#15803d',
      marginBottom: 8
    }
  }, "\uD83D\uDCB0 \u4ED8\u6B3E\u4FE1\u606F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 0.7fr 1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: paymentMethod,
    onChange: function onChange(e) {
      return setPaymentMethod(e.target.value);
    },
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }, PAYMENT_METHODS.map(function (m) {
    return /*#__PURE__*/React.createElement("option", {
      key: m,
      value: m
    }, m);
  })), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    value: paymentAmount,
    onChange: function onChange(e) {
      return setPaymentAmount(e.target.value);
    },
    placeholder: "\u5E94\u6536\u91D1\u989D",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'monospace'
    }
  }), /*#__PURE__*/React.createElement("select", {
    value: paymentCurrency,
    onChange: function onChange(e) {
      return setPaymentCurrency(e.target.value);
    },
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }, ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'HKD', 'CNY'].map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c,
      value: c
    }, c);
  })), /*#__PURE__*/React.createElement("input", {
    type: "number",
    step: "0.01",
    value: receivedAmount,
    onChange: function onChange(e) {
      return setReceivedAmount(e.target.value);
    },
    placeholder: "\u5B9E\u6536(\u6263\u624B\u7EED\u8D39)",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'monospace'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: paidAt,
    onChange: function onChange(e) {
      return setPaidAt(e.target.value);
    },
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      background: '#fafafa',
      borderRadius: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600
    }
  }, "\uD83D\uDECD \u4EA7\u54C1\u6E05\u5355 (", products.length, ") ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      fontWeight: 400,
      fontSize: 11
    }
  }, "\xB7 \u70B9\u56FE\u7247\u683C\u4E0A\u4F20/\u7C98\u8D34/\u62D6\u62FD\u4EA7\u54C1\u56FE")), /*#__PURE__*/React.createElement("button", {
    onClick: addProduct,
    className: "btn-sec",
    style: {
      padding: '4px 12px',
      fontSize: 11
    }
  }, "+ \u52A0\u4EA7\u54C1")), products.map(function (p, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'grid',
        gridTemplateColumns: '52px 0.9fr 2fr 0.5fr 0.8fr 30px',
        gap: 6,
        marginBottom: 6,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(ProductImageSlot, {
      value: p.image,
      onChange: function onChange(img) {
        return updateProduct(i, {
          image: img
        });
      },
      productName: p.name
    }), /*#__PURE__*/React.createElement(ProductAutocomplete, {
      value: p.sku || '',
      onChange: function onChange(v) {
        return updateProduct(i, {
          sku: v
        });
      },
      onSelect: function onSelect(prod) {
        return updateProduct(i, {
          sku: prod.sku || '',
          name: prod.name || p.name,
          image: prod.image || p.image,
          unit_price: !p.unit_price && prod.default_unit_price ? String(prod.default_unit_price) : p.unit_price,
          product_id: prod.id
        });
      },
      products: productsList,
      mode: "sku",
      placeholder: "SKU (\u8054\u60F3)"
    }), /*#__PURE__*/React.createElement(ProductAutocomplete, {
      value: p.name || '',
      onChange: function onChange(v) {
        return updateProduct(i, {
          name: v
        });
      },
      onSelect: function onSelect(prod) {
        return updateProduct(i, {
          sku: !p.sku && prod.sku ? prod.sku : p.sku,
          name: prod.name || p.name,
          image: prod.image || p.image,
          unit_price: !p.unit_price && prod.default_unit_price ? String(prod.default_unit_price) : p.unit_price,
          product_id: prod.id
        });
      },
      products: productsList,
      mode: "name",
      placeholder: "\u4EA7\u54C1\u540D (\u8054\u60F3)"
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      value: p.qty || 1,
      onChange: function onChange(e) {
        return updateProduct(i, {
          qty: parseInt(e.target.value) || 1
        });
      },
      placeholder: "\u6570\u91CF",
      style: {
        padding: '5px 8px',
        border: '1px solid var(--line)',
        borderRadius: 5,
        fontSize: 12,
        textAlign: 'center'
      }
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      step: "0.01",
      value: p.unit_price || '',
      onChange: function onChange(e) {
        return updateProduct(i, {
          unit_price: e.target.value
        });
      },
      placeholder: "\u5355\u4EF7",
      style: {
        padding: '5px 8px',
        border: '1px solid var(--line)',
        borderRadius: 5,
        fontSize: 12,
        fontFamily: 'monospace'
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeProduct(i);
      },
      style: {
        padding: 0,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: '#dc2626',
        fontSize: 16
      }
    }, "\xD7"));
  }), products.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontSize: 11
    }
  }, "\u6682\u65E0\u4EA7\u54C1 \xB7 \u70B9\u4E0A\u65B9\"\u52A0\u4EA7\u54C1\"\u5F00\u59CB")), /*#__PURE__*/React.createElement("div", {
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
  }, "\u5907\u6CE8"), /*#__PURE__*/React.createElement("textarea", {
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
    placeholder: "\u7279\u6B8A\u8981\u6C42\u3001\u52A0\u6025\u7B49...",
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
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\uD83D\uDCCE \u4ED8\u6B3E\u51ED\u8BC1 / \u8BA2\u5355 PDF / \u53D1\u7968 / \u4EA7\u54C1\u56FE"), /*#__PURE__*/React.createElement(MultiFileUploader, {
    files: attachments,
    setFiles: setAttachments,
    bucket: "business-files",
    maxSize: 50
  }))), /*#__PURE__*/React.createElement("div", {
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
  }, saving ? '保存中...' : isEdit ? '保存修改' : '💳 创建线下单'))), showQuoteSearch && /*#__PURE__*/React.createElement(QuoteSearchModal, {
    onClose: function onClose() {
      return setShowQuoteSearch(false);
    },
    onSelect: handleLinkQuote,
    toast: toast
  }));
};
var QuoteSearchModal = function QuoteSearchModal(_ref30) {
  var onClose = _ref30.onClose,
    onSelect = _ref30.onSelect,
    toast = _ref30.toast;
  var _useState173 = useState(''),
    _useState174 = _slicedToArray(_useState173, 2),
    query = _useState174[0],
    setQuery = _useState174[1];
  var _useState175 = useState([]),
    _useState176 = _slicedToArray(_useState175, 2),
    list = _useState176[0],
    setList = _useState176[1];
  var _useState177 = useState(true),
    _useState178 = _slicedToArray(_useState177, 2),
    loading = _useState178[0],
    setLoading = _useState178[1];
  var _useState179 = useState(false),
    _useState180 = _slicedToArray(_useState179, 2),
    showOnlyRecent = _useState180[0],
    setShowOnlyRecent = _useState180[1]; // 🆕 只显示最近 30 天

  useEffect(function () {
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee19() {
      var data, _t14;
      return _regenerator().w(function (_context19) {
        while (1) switch (_context19.p = _context19.n) {
          case 0:
            _context19.p = 0;
            _context19.n = 1;
            return CLOUD.list('workspace_quotes', {
              order: {
                col: 'updated_at',
                asc: false
              },
              limit: 1000
            });
          case 1:
            data = _context19.v;
            setList((data || []).filter(function (q) {
              return !q.trashed;
            }));
            _context19.n = 3;
            break;
          case 2:
            _context19.p = 2;
            _t14 = _context19.v;
            toast('加载报价单失败');
          case 3:
            setLoading(false);
          case 4:
            return _context19.a(2);
        }
      }, _callee19, null, [[0, 2]]);
    }))();
  }, []);

  // 🆕 智能模糊匹配 - 分词搜索 + 多字段权重 + 评分排序
  var filtered = useMemo(function () {
    var l = list;

    // 时间过滤
    if (showOnlyRecent) {
      var cutoff = addDays(todayISO(), -30);
      l = l.filter(function (q) {
        var t = (q.updated_at || q.created_at || '').slice(0, 10);
        return !t || t >= cutoff;
      });
    }
    if (!query.trim()) {
      return l.slice(0, 100);
    }

    // 提取搜索关键词(支持多关键词,空格/逗号分隔)
    var keywords = query.trim().toLowerCase().split(/[\s,，;；]+/).filter(function (k) {
      return k.length > 0;
    });
    if (keywords.length === 0) return l.slice(0, 100);

    // 评分函数
    var scoreQuote = function scoreQuote(q) {
      var d = q.data || {};
      // 所有可搜索的字段
      var fields = {
        pi_no: (q.pi_no || '').toLowerCase(),
        order_no: (q.order_no || '').toLowerCase(),
        buyer_name: (q.buyer_name || d.buyer_info || '').toLowerCase(),
        buyer_email: (d.buyer_email || '').toLowerCase(),
        buyer_phone: (d.buyer_phone || '').toLowerCase(),
        ship_country: (d.shipping_country || '').toLowerCase(),
        ship_address: (d.shipping_info || '').toLowerCase(),
        username: (q.username || '').toLowerCase(),
        status: (q.status || '').toLowerCase(),
        notes: (q.notes || d.notes || '').toLowerCase(),
        amount: String(q.amount || ''),
        // 产品列表
        products: (d.products || d.items || []).map(function (p) {
          return [p.sku, p.product_name, p.name, p.description].filter(Boolean).join(' ');
        }).join(' ').toLowerCase()
      };
      var totalScore = 0;
      var matchedAllKeywords = true;
      var _iterator3 = _createForOfIteratorHelper(keywords),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var kw = _step3.value;
          var kwScore = 0;
          // PI 编号精确匹配 - 最高权重
          if (fields.pi_no === kw) kwScore += 1000;else if (fields.pi_no.includes(kw)) kwScore += 100;
          // 邮箱精确 - 高权重
          if (fields.buyer_email === kw) kwScore += 500;else if (fields.buyer_email.includes(kw)) kwScore += 80;
          // 订单号匹配
          if (fields.order_no.includes(kw)) kwScore += 70;
          // 客户名/手机
          if (fields.buyer_name.includes(kw)) kwScore += 60;
          if (fields.buyer_phone.includes(kw)) kwScore += 60;
          // 地址 / 产品
          if (fields.ship_country.includes(kw)) kwScore += 30;
          if (fields.ship_address.includes(kw)) kwScore += 25;
          if (fields.products.includes(kw)) kwScore += 25;
          // 录入人 / 状态
          if (fields.username.includes(kw)) kwScore += 15;
          if (fields.status.includes(kw)) kwScore += 10;
          // 金额
          if (fields.amount.includes(kw)) kwScore += 20;
          // 备注
          if (fields.notes.includes(kw)) kwScore += 10;
          if (kwScore === 0) matchedAllKeywords = false;
          totalScore += kwScore;
        }

        // 必须所有关键词都至少匹配一个字段
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return matchedAllKeywords ? totalScore : 0;
    };
    return l.map(function (q) {
      return {
        q: q,
        score: scoreQuote(q)
      };
    }).filter(function (x) {
      return x.score > 0;
    }).sort(function (a, b) {
      return b.score - a.score;
    }).slice(0, 100).map(function (x) {
      return x.q;
    });
  }, [query, list, showOnlyRecent]);

  // 🆕 高亮匹配关键词
  var highlight = function highlight(text, keywords) {
    if (!text || !keywords || keywords.length === 0) return text;
    var safeText = String(text);
    var result = safeText;
    var _iterator4 = _createForOfIteratorHelper(keywords),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var kw = _step4.value;
        if (!kw) continue;
        var regex = new RegExp("(".concat(kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), ")"), 'gi');
        result = result.replace(regex, '<mark style="background:#fef08a;color:#854d0e;padding:0 2px;border-radius:2px">$1</mark>');
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    return result;
  };
  var keywords = query.trim().toLowerCase().split(/[\s,，;；]+/).filter(function (k) {
    return k;
  });
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.7)',
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
      borderRadius: 14,
      maxWidth: 720,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '90vh',
      overflow: 'hidden',
      boxShadow: '0 25px 70px rgba(0,0,0,.3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px',
      borderBottom: '1px solid var(--line)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "\uD83D\uDD0D \u667A\u80FD\u641C\u7D22\u62A5\u4EF7\u5355"), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: onClose,
    style: {
      padding: '4px 12px'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("input", {
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    autoFocus: true,
    placeholder: "\uD83E\uDDE0 \u667A\u80FD\u641C\u7D22:\u652F\u6301 PI \u53F7 / \u5BA2\u6237\u90AE\u7BB1 / \u5BA2\u6237\u59D3\u540D / \u7535\u8BDD / \u56FD\u5BB6 / \u5730\u5740 / \u4EA7\u54C1 SKU / \u5F55\u5165\u4EBA / \u91D1\u989D...",
    style: {
      width: '100%',
      padding: '10px 14px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap',
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCA1 \u63D0\u793A:"), /*#__PURE__*/React.createElement("span", null, "\u591A\u4E2A\u5173\u952E\u8BCD\u7528\u7A7A\u683C\u5206\u9694(\u5168\u90E8\u5339\u914D\u624D\u663E\u793A)"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, "\u4F8B:", /*#__PURE__*/React.createElement("code", {
    style: {
      padding: '1px 5px',
      background: '#f1f5f9',
      borderRadius: 3
    }
  }, "VKA Aletta US")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowOnlyRecent(function (v) {
        return !v;
      });
    },
    style: {
      padding: '3px 8px',
      borderRadius: 10,
      fontSize: 10,
      cursor: 'pointer',
      fontFamily: 'inherit',
      border: '1px solid ' + (showOnlyRecent ? 'var(--accent)' : 'var(--line)'),
      background: showOnlyRecent ? 'var(--accent)' : 'white',
      color: showOnlyRecent ? 'white' : 'var(--ink-2)',
      fontWeight: showOnlyRecent ? 600 : 400
    }
  }, showOnlyRecent ? '✓' : '☐', " \u4EC5\u6700\u8FD1 30 \u5929")), query.trim() && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 11,
      color: '#0369a1'
    }
  }, "\uD83D\uDD0D \u5339\u914D ", filtered.length, " \u6761 \xB7 \u6309\u76F8\u5173\u5EA6\u6392\u5E8F")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 10,
      overflowY: 'auto',
      overflowX: 'hidden',
      flex: 1,
      minHeight: 0
    }
  }, loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 30,
      color: 'var(--ink-3)'
    }
  }, "\u23F3 \u52A0\u8F7D\u4E2D...") : filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 40,
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, query.trim() ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 30,
      marginBottom: 8
    }
  }, "\uD83D\uDD0D"), "\u6CA1\u6709\u5339\u914D\u7684\u62A5\u4EF7\u5355", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      marginTop: 6,
      display: 'block'
    }
  }, "\u8BD5\u8BD5\u53EA\u8F93\u5165\u4E00\u90E8\u5206\u5173\u952E\u8BCD,\u6216\u8005\u7528\u7A7A\u683C\u5206\u9694\u591A\u4E2A")) : '暂无报价单') : filtered.map(function (q) {
    var d = q.data || {};
    var fields = {
      pi_no: q.pi_no || '(无 PI)',
      buyer: q.buyer_name || (d.buyer_info || '').split('\n')[0] || '(未填客户)',
      email: d.buyer_email,
      phone: d.buyer_phone,
      country: d.shipping_country,
      amount: q.amount
    };
    return /*#__PURE__*/React.createElement("div", {
      key: q.id,
      onClick: function onClick() {
        onSelect(q);
        onClose();
      },
      style: {
        padding: '10px 12px',
        marginBottom: 6,
        border: '1px solid var(--line)',
        borderRadius: 8,
        cursor: 'pointer',
        background: 'white',
        transition: 'all .12s'
      },
      onMouseEnter: function onMouseEnter(e) {
        e.currentTarget.style.background = '#f0f9ff';
        e.currentTarget.style.borderColor = '#7dd3fc';
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.background = 'white';
        e.currentTarget.style.borderColor = 'var(--line)';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        gap: 6,
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: 'var(--ink)'
      },
      dangerouslySetInnerHTML: {
        __html: highlight(fields.pi_no, keywords)
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-2)',
        marginTop: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)'
      }
    }, "\uD83D\uDC64"), ' ', /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: highlight(fields.buyer, keywords)
      }
    }), fields.email && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)'
      }
    }, " \xB7 "), /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#0369a1'
      },
      dangerouslySetInnerHTML: {
        __html: '✉ ' + highlight(fields.email, keywords)
      }
    })), fields.phone && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)'
      }
    }, " \xB7 "), /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: '📞 ' + highlight(fields.phone, keywords)
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)',
        marginTop: 3,
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, fields.country && /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: '🌍 ' + highlight(fields.country, keywords)
      }
    }), q.status && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCB ", q.status), q.username && /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: '✏ ' + highlight(q.username, keywords)
      }
    }), q.updated_at && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCC5 ", q.updated_at.slice(0, 10))), (d.products || d.items || []).length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        fontSize: 10,
        color: 'var(--ink-3)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, "\uD83D\uDCE6 ", /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: highlight((d.products || d.items || []).slice(0, 3).map(function (p) {
          return p.sku || p.product_name || p.name;
        }).filter(Boolean).join(', ') + ((d.products || d.items || []).length > 3 ? '...' : ''), keywords)
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#15803d',
        fontSize: 14,
        fontWeight: 700
      }
    }, "$", (fields.amount || 0).toFixed(2)))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 18px',
      borderTop: '1px solid var(--line)',
      flexShrink: 0,
      background: '#fafafa',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDCDA \u5171\u52A0\u8F7D ", list.length, " \u6761\u62A5\u4EF7\u5355 \xB7 \u663E\u793A\u524D ", filtered.length, " \u6761"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn-sec",
    style: {
      padding: '6px 14px'
    }
  }, "\u53D6\u6D88")))), document.body);
};

// ============================================================
// 🎨 定制 & 实拍合并模块
// ============================================================
var CustomPhotoModule = function CustomPhotoModule(_ref32) {
  var user = _ref32.user,
    employees = _ref32.employees,
    toast = _ref32.toast;
  var _useState181 = useState('custom'),
    _useState182 = _slicedToArray(_useState181, 2),
    subTab = _useState182[0],
    setSubTab = _useState182[1];
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3",
    style: {
      marginBottom: 12,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSubTab('custom');
    },
    style: {
      padding: '6px 16px',
      borderRadius: 8,
      fontSize: 13,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      border: '1px solid ' + (subTab === 'custom' ? 'var(--accent)' : 'var(--line)'),
      background: subTab === 'custom' ? 'var(--accent)' : 'white',
      color: subTab === 'custom' ? 'white' : 'var(--ink-2)'
    }
  }, "\uD83C\uDFA8 \u5B9A\u5236\u54A8\u8BE2"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSubTab('photo');
    },
    style: {
      padding: '6px 16px',
      borderRadius: 8,
      fontSize: 13,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      border: '1px solid ' + (subTab === 'photo' ? 'var(--accent)' : 'var(--line)'),
      background: subTab === 'photo' ? 'var(--accent)' : 'white',
      color: subTab === 'photo' ? 'white' : 'var(--ink-2)'
    }
  }, "\uD83D\uDCF8 \u5B9E\u62CD\u6838\u5B9E")), subTab === 'custom' && /*#__PURE__*/React.createElement(CustomInquiriesSubModule, {
    user: user,
    employees: employees,
    toast: toast
  }), subTab === 'photo' && /*#__PURE__*/React.createElement(PhotoVerificationsSubModule, {
    user: user,
    employees: employees,
    toast: toast
  }));
};
var CustomInquiriesSubModule = function CustomInquiriesSubModule(_ref33) {
  var user = _ref33.user,
    employees = _ref33.employees,
    toast = _ref33.toast;
  var _useState183 = useState([]),
    _useState184 = _slicedToArray(_useState183, 2),
    list = _useState184[0],
    setList = _useState184[1];
  var _useState185 = useState(true),
    _useState186 = _slicedToArray(_useState185, 2),
    loading = _useState186[0],
    setLoading = _useState186[1];
  var _useState187 = useState(null),
    _useState188 = _slicedToArray(_useState187, 2),
    editing = _useState188[0],
    setEditing = _useState188[1];
  var _useState189 = useState('active'),
    _useState190 = _slicedToArray(_useState189, 2),
    filterStage = _useState190[0],
    setFilterStage = _useState190[1];
  var _useState191 = useState(''),
    _useState192 = _slicedToArray(_useState191, 2),
    search = _useState192[0],
    setSearch = _useState192[1];
  var _useState193 = useState('all'),
    _useState194 = _slicedToArray(_useState193, 2),
    filterOwner = _useState194[0],
    setFilterOwner = _useState194[1]; // 🆕 fix76
  var _useState195 = useState('all'),
    _useState196 = _slicedToArray(_useState195, 2),
    filterSite = _useState196[0],
    setFilterSite = _useState196[1];
  var _useState197 = useState('updated'),
    _useState198 = _slicedToArray(_useState197, 2),
    ciSortBy = _useState198[0],
    setCiSortBy = _useState198[1];
  var _useState199 = useState('desc'),
    _useState200 = _slicedToArray(_useState199, 2),
    ciSortDir = _useState200[0],
    setCiSortDir = _useState200[1];
  // 🆕 时间筛选
  var _useState201 = useState('all'),
    _useState202 = _slicedToArray(_useState201, 2),
    timeFilter = _useState202[0],
    setTimeFilter = _useState202[1];
  var _useState203 = useState({
      start: '',
      end: ''
    }),
    _useState204 = _slicedToArray(_useState203, 2),
    timeCustom = _useState204[0],
    setTimeCustom = _useState204[1];
  // 🆕 fix15: 日期范围筛选
  var _useState205 = useState({
      kind: 'all'
    }),
    _useState206 = _slicedToArray(_useState205, 2),
    dateFilter = _useState206[0],
    setDateFilter = _useState206[1];
  var load = /*#__PURE__*/function () {
    var _ref34 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee20() {
      var data, _t15;
      return _regenerator().w(function (_context20) {
        while (1) switch (_context20.p = _context20.n) {
          case 0:
            setLoading(true);
            _context20.p = 1;
            _context20.n = 2;
            return CLOUD.list('custom_inquiries', {
              order: {
                col: 'created_at',
                asc: false
              },
              limit: 300
            });
          case 2:
            data = _context20.v;
            setList((data || []).filter(function (c) {
              return !c.deleted;
            }));
            _context20.n = 4;
            break;
          case 3:
            _context20.p = 3;
            _t15 = _context20.v;
            toast('❌ ' + _t15.message);
          case 4:
            setLoading(false);
          case 5:
            return _context20.a(2);
        }
      }, _callee20, null, [[1, 3]]);
    }));
    return function load() {
      return _ref34.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
  }, []);
  var handleDelete = /*#__PURE__*/function () {
    var _ref35 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee21(c) {
      var summary;
      return _regenerator().w(function (_context21) {
        while (1) switch (_context21.n) {
          case 0:
            summary = "".concat(c.customer_name || c.customer_email || '?', " \xB7 ").concat((c.requirement || '').slice(0, 50));
            _context21.n = 1;
            return requestDelete({
              user: user,
              tableName: 'custom_inquiries',
              moduleLabel: '🎨 定制咨询',
              record: c,
              recordSummary: summary,
              toast: toast,
              onSuccess: load
            });
          case 1:
            return _context21.a(2);
        }
      }, _callee21);
    }));
    return function handleDelete(_x9) {
      return _ref35.apply(this, arguments);
    };
  }();
  var filtered = useMemo(function () {
    var l = list;
    if (filterStage === 'active') l = l.filter(function (c) {
      return c.stage !== 'completed' && c.stage !== 'cancelled';
    });else if (filterStage === 'mine') l = l.filter(function (c) {
      return c.created_by === user.id;
    });else if (filterStage !== 'all') l = l.filter(function (c) {
      return c.stage === filterStage;
    });
    if (search.trim()) {
      var q = search.trim().toLowerCase();
      l = l.filter(function (c) {
        return (c.customer_name || '').toLowerCase().includes(q) || (c.customer_email || '').toLowerCase().includes(q) || (c.order_no || '').toLowerCase().includes(q) || (c.quote_no || '').toLowerCase().includes(q) || (c.requirement || '').toLowerCase().includes(q);
      });
    }
    if (filterOwner !== 'all') l = l.filter(function (c) {
      return c.created_by === filterOwner;
    }); // 🆕 fix76
    if (filterSite !== 'all') l = l.filter(function (c) {
      return c.site === filterSite;
    });
    // 🆕 时间筛选
    l = filterByTimeRange(l, timeFilter, timeCustom.start, timeCustom.end, 'created_at');
    // 🆕 fix15: 日期范围筛选
    l = filterByDateRange(l, dateFilter, 'created_at');
    // 🆕 fix76: 排序
    var CI_STAGE_ORDER = {
      "new": 0,
      quoted: 1,
      confirmed: 2,
      producing: 3,
      completed: 4,
      cancelled: 5
    };
    var ckey = function ckey(c) {
      var _CI_STAGE_ORDER$c$sta;
      switch (ciSortBy) {
        case 'updated':
          return c.updated_at || c.created_at || '';
        case 'created':
          return c.created_at || '';
        case 'customer':
          return (c.customer_name || c.customer_email || '').toLowerCase();
        case 'order':
          return (c.order_no || c.quote_no || '').toLowerCase();
        case 'site':
          return (c.site || '').toLowerCase();
        case 'stage':
          return (_CI_STAGE_ORDER$c$sta = CI_STAGE_ORDER[c.stage]) !== null && _CI_STAGE_ORDER$c$sta !== void 0 ? _CI_STAGE_ORDER$c$sta : 9;
        default:
          return c.updated_at || c.created_at || '';
      }
    };
    l = _toConsumableArray(l).sort(function (a, b) {
      var ka = ckey(a),
        kb = ckey(b);
      var cmp = typeof ka === 'number' && typeof kb === 'number' ? ka - kb : String(ka).localeCompare(String(kb));
      return ciSortDir === 'desc' ? -cmp : cmp;
    });
    return l;
  }, [list, filterStage, search, user.id, timeFilter, timeCustom, dateFilter, filterOwner, filterSite, ciSortBy, ciSortDir]);
  var ciSites = useMemo(function () {
    return _toConsumableArray(new Set(list.map(function (c) {
      return c.site;
    }).filter(Boolean))).sort();
  }, [list]);
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
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
  }, "\uD83C\uDFA8 \u5B9A\u5236\u54A8\u8BE2"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, "\u8BE2\u5355 \u2192 \u51FA\u56FE \u2192 \u62A5\u4EF7 \u2192 \u4ED8\u6B3E \u2192 \u751F\u4EA7 \u2192 \u5B9E\u62CD \u2192 \u5B8C\u6210")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEditing('new');
    },
    className: "btn-pri",
    style: {
      padding: '6px 14px',
      fontSize: 12
    }
  }, "+ \u65B0\u589E\u5B9A\u5236\u54A8\u8BE2")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      gap: 5,
      flexWrap: 'wrap'
    }
  }, [{
    key: 'active',
    label: '🔥 进行中'
  }, {
    key: 'mine',
    label: '👤 我的'
  }].concat(_toConsumableArray(CUSTOM_STAGES.map(function (s) {
    return {
      key: s.key,
      label: s.label
    };
  })), [{
    key: 'all',
    label: '全部'
  }]).map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return setFilterStage(t.key);
      },
      style: {
        padding: '3px 10px',
        borderRadius: 14,
        fontSize: 11,
        cursor: 'pointer',
        fontFamily: 'inherit',
        border: '1px solid ' + (filterStage === t.key ? 'var(--accent)' : 'var(--line)'),
        background: filterStage === t.key ? 'var(--accent)' : 'white',
        color: filterStage === t.key ? 'white' : 'var(--ink-2)'
      }
    }, t.label);
  })), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u5BA2\u6237 / \u8BA2\u5355\u53F7 / \u9700\u6C42...",
    style: {
      width: '100%',
      marginTop: 8,
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 5,
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83D\uDC64 \u5BA2\u670D"), /*#__PURE__*/React.createElement("select", {
    value: filterOwner,
    onChange: function onChange(e) {
      return setFilterOwner(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8"), employees.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.name, e.alias ? " (".concat(e.alias, ")") : '');
  }))), ciSites.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83C\uDF10 \u7F51\u7AD9"), /*#__PURE__*/React.createElement("select", {
    value: filterSite,
    onChange: function onChange(e) {
      return setFilterSite(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8"), ciSites.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s,
      value: s
    }, s);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\u2195 \u6392\u5E8F"), /*#__PURE__*/React.createElement("select", {
    value: ciSortBy,
    onChange: function onChange(e) {
      return setCiSortBy(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "updated"
  }, "\u4FEE\u6539\u65E5\u671F"), /*#__PURE__*/React.createElement("option", {
    value: "created"
  }, "\u521B\u5EFA\u65E5\u671F"), /*#__PURE__*/React.createElement("option", {
    value: "customer"
  }, "\u5BA2\u6237\u540D"), /*#__PURE__*/React.createElement("option", {
    value: "order"
  }, "\u8BA2\u5355/\u62A5\u4EF7\u53F7"), /*#__PURE__*/React.createElement("option", {
    value: "site"
  }, "\u7F51\u7AD9"), /*#__PURE__*/React.createElement("option", {
    value: "stage"
  }, "\u9636\u6BB5")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCiSortDir(function (d) {
        return d === 'desc' ? 'asc' : 'desc';
      });
    },
    title: ciSortDir === 'desc' ? '降序' : '升序',
    style: {
      padding: '4px 9px',
      fontSize: 12,
      border: '1px solid var(--line)',
      borderRadius: 6,
      background: 'white',
      cursor: 'pointer',
      fontWeight: 600
    }
  }, ciSortDir === 'desc' ? '↓' : '↑'))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      paddingTop: 8,
      borderTop: '1px dashed var(--line)'
    }
  }, /*#__PURE__*/React.createElement(TimeRangeFilter, {
    value: timeFilter,
    onChange: setTimeFilter,
    customStart: timeCustom.start,
    customEnd: timeCustom.end,
    onCustomChange: setTimeCustom,
    label: "\uD83D\uDD53 \u8D85\u671F\u7B5B\u9009:",
    records: list,
    dateField: "created_at"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
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
  }, "\uD83D\uDCC5 \u521B\u5EFA\u65F6\u95F4:"), /*#__PURE__*/React.createElement(AdvancedDateFilter, {
    value: dateFilter,
    onChange: setDateFilter,
    size: "sm"
  }))), loading ? /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-8",
    style: {
      textAlign: 'center'
    }
  }, "\u23F3") : filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-10",
    style: {
      textAlign: 'center',
      color: 'var(--ink-3)'
    }
  }, "\u6682\u65E0\u5B9A\u5236\u54A8\u8BE2") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, filtered.map(function (c) {
    return /*#__PURE__*/React.createElement(CustomInquiryCard, {
      key: c.id,
      item: c,
      user: user,
      onEdit: function onEdit() {
        return setEditing(c);
      },
      onDelete: function onDelete() {
        return handleDelete(c);
      },
      onReload: load,
      toast: toast
    });
  })), editing && /*#__PURE__*/React.createElement(CustomInquiryEditor, {
    item: editing === 'new' ? null : editing,
    user: user,
    onClose: function onClose() {
      return setEditing(null);
    },
    onSaved: function onSaved() {
      setEditing(null);
      load();
    },
    toast: toast
  }));
};
var CustomInquiryCard = function CustomInquiryCard(_ref36) {
  var item = _ref36.item,
    user = _ref36.user,
    onEdit = _ref36.onEdit,
    onDelete = _ref36.onDelete,
    onReload = _ref36.onReload,
    toast = _ref36.toast;
  var _useState207 = useState(false),
    _useState208 = _slicedToArray(_useState207, 2),
    expanded = _useState208[0],
    setExpanded = _useState208[1];
  var _useState209 = useState(null),
    _useState210 = _slicedToArray(_useState209, 2),
    previewFile = _useState210[0],
    setPreviewFile = _useState210[1];
  var stage = CUSTOM_STAGES.find(function (s) {
    return s.key === item.stage;
  }) || CUSTOM_STAGES[0];
  var designs = item.design_files || [];
  var photos = item.final_photos || [];
  var refImgs = item.reference_images || [];
  var advanceStage = /*#__PURE__*/function () {
    var _ref37 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee22() {
      var idx, nextStage, now, timeMap, payload;
      return _regenerator().w(function (_context22) {
        while (1) switch (_context22.n) {
          case 0:
            idx = CUSTOM_STAGES.findIndex(function (s) {
              return s.key === item.stage;
            });
            if (!(idx < 0 || idx >= CUSTOM_STAGES.length - 2)) {
              _context22.n = 1;
              break;
            }
            return _context22.a(2);
          case 1:
            nextStage = CUSTOM_STAGES[idx + 1].key;
            now = new Date().toISOString();
            timeMap = {
              sketching: 'sketch_at',
              quoting: 'quoted_at',
              paid: 'paid_at',
              producing: 'produced_at',
              photo: 'photo_at',
              completed: 'completed_at'
            };
            payload = _objectSpread(_objectSpread({}, item), {}, _defineProperty(_defineProperty({
              stage: nextStage
            }, timeMap[nextStage] || 'updated_at', now), "updated_at", now));
            _context22.n = 2;
            return CLOUD.upsert('custom_inquiries', payload);
          case 2:
            toast('✓ 已推进到:' + CUSTOM_STAGES[idx + 1].label);
            onReload();
          case 3:
            return _context22.a(2);
        }
      }, _callee22);
    }));
    return function advanceStage() {
      return _ref37.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl",
    style: {
      overflow: 'hidden',
      border: "1.5px solid ".concat(stage.color, "40")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px'
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
      background: "".concat(stage.color, "15"),
      color: stage.color
    }
  }, stage.icon, " ", stage.label), item.site && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#f5f5f7',
      color: 'var(--ink-3)',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, item.site)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 3
    }
  }, item.customer_name || '(未填客户)'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginBottom: 5
    }
  }, "\uD83D\uDCE7 ", item.customer_email || '?', item.designer_name ? " \xB7 \uD83C\uDFA8 \u8BBE\u8BA1:".concat(item.designer_name) : '', " \xB7 \u5F55\u5165 ", item.created_by_name), item.requirement && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 6,
      background: '#fef9c3',
      borderRadius: 5,
      fontSize: 12,
      color: '#713f12',
      whiteSpace: 'pre-wrap'
    }
  }, "\uD83D\uDCAC ", item.requirement.slice(0, 200), item.requirement.length > 200 ? '...' : ''), /*#__PURE__*/React.createElement(AttachThumbs, {
    files: [].concat(_toConsumableArray(refImgs), _toConsumableArray(photos)),
    size: 48,
    max: 8,
    onPreview: window.__setPreviewImg
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, item.stage !== 'completed' && item.stage !== 'cancelled' && /*#__PURE__*/React.createElement("button", {
    onClick: advanceStage,
    style: {
      padding: '5px 10px',
      background: stage.color,
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\u25B6 \u63A8\u8FDB"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setExpanded(function (v) {
        return !v;
      });
    },
    className: "btn-sec",
    style: {
      padding: '5px 10px',
      fontSize: 11
    }
  }, expanded ? '收起' : '详情'), /*#__PURE__*/React.createElement("button", {
    onClick: onEdit,
    style: {
      padding: '5px 10px',
      background: '#e0f2fe',
      color: '#0369a1',
      border: '1px solid #7dd3fc',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\u270F\uFE0F"), /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    style: {
      padding: '5px 10px',
      background: '#fef2f2',
      color: '#dc2626',
      border: '1px solid #fca5a5',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\uD83D\uDDD1"))), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      padding: 10,
      background: '#fafafa',
      borderRadius: 8
    }
  }, (item.quote_no || item.order_no) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 8,
      flexWrap: 'wrap'
    }
  }, item.quote_no && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 8px',
      background: '#dbeafe',
      color: '#1e3a8a',
      borderRadius: 5,
      fontSize: 11
    }
  }, "\uD83D\uDD17 \u62A5\u4EF7:", item.quote_no), item.order_no && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 8px',
      background: '#dcfce7',
      color: '#15803d',
      borderRadius: 5,
      fontSize: 11
    }
  }, "\uD83D\uDCE6 \u8BA2\u5355:", item.order_no)), refImgs.length > 0 && /*#__PURE__*/React.createElement(FileListSection, {
    title: "\uD83D\uDCF7 \u5BA2\u6237\u53C2\u8003\u56FE",
    files: refImgs,
    onPreview: setPreviewFile
  }), designs.length > 0 && /*#__PURE__*/React.createElement(FileListSection, {
    title: "\u270F\uFE0F \u8BBE\u8BA1\u56FE",
    files: designs,
    onPreview: setPreviewFile
  }), photos.length > 0 && /*#__PURE__*/React.createElement(FileListSection, {
    title: "\uD83D\uDCF8 \u5B9E\u62CD\u56FE",
    files: photos,
    onPreview: setPreviewFile
  }), item.notes && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginBottom: 3
    }
  }, "\uD83D\uDCDD \u5907\u6CE8:"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      background: 'white',
      borderRadius: 5,
      fontSize: 12,
      whiteSpace: 'pre-wrap'
    }
  }, item.notes)))), previewFile && /*#__PURE__*/React.createElement(FilePreviewModal, {
    file: previewFile,
    onClose: function onClose() {
      return setPreviewFile(null);
    }
  }));
};
var FileListSection = function FileListSection(_ref38) {
  var title = _ref38.title,
    files = _ref38.files,
    onPreview = _ref38.onPreview;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginBottom: 3
    }
  }, title, " (", files.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
      gap: 5
    }
  }, files.map(function (a) {
    var info = getFileTypeInfo(a);
    return info.kind === 'image' ? /*#__PURE__*/React.createElement("img", {
      key: a.id,
      src: a.url,
      onClick: function onClick() {
        return onPreview(a);
      },
      style: {
        width: '100%',
        height: 65,
        objectFit: 'contain',
        borderRadius: 5,
        cursor: 'pointer',
        border: '1px solid var(--line)',
        background: 'var(--bg-elevated)'
      }
    }) : /*#__PURE__*/React.createElement(FileChip, {
      key: a.id,
      file: a,
      onClick: function onClick() {
        return onPreview(a);
      }
    });
  })));
};
var CustomInquiryEditor = function CustomInquiryEditor(_ref39) {
  var item = _ref39.item,
    user = _ref39.user,
    onClose = _ref39.onClose,
    onSaved = _ref39.onSaved,
    toast = _ref39.toast;
  var allSites = useSiteCodes(); // 🆕 fix22 联动 3: 合并 内置 SITES + 自定义网站
  var isEdit = !!item;
  var _useState211 = useState((item === null || item === void 0 ? void 0 : item.customer_name) || ''),
    _useState212 = _slicedToArray(_useState211, 2),
    customerName = _useState212[0],
    setCustomerName = _useState212[1];
  var _useState213 = useState((item === null || item === void 0 ? void 0 : item.customer_email) || ''),
    _useState214 = _slicedToArray(_useState213, 2),
    customerEmail = _useState214[0],
    setCustomerEmail = _useState214[1];
  var _useState215 = useState((item === null || item === void 0 ? void 0 : item.customer_phone) || ''),
    _useState216 = _slicedToArray(_useState215, 2),
    customerPhone = _useState216[0],
    setCustomerPhone = _useState216[1];
  var _useState217 = useState((item === null || item === void 0 ? void 0 : item.site) || ''),
    _useState218 = _slicedToArray(_useState217, 2),
    site = _useState218[0],
    setSite = _useState218[1];
  var _useState219 = useState((item === null || item === void 0 ? void 0 : item.requirement) || ''),
    _useState220 = _slicedToArray(_useState219, 2),
    requirement = _useState220[0],
    setRequirement = _useState220[1];
  var _useState221 = useState((item === null || item === void 0 ? void 0 : item.stage) || 'inquiry'),
    _useState222 = _slicedToArray(_useState221, 2),
    stage = _useState222[0],
    setStage = _useState222[1];
  var _useState223 = useState((item === null || item === void 0 ? void 0 : item.designer_name) || ''),
    _useState224 = _slicedToArray(_useState223, 2),
    designerName = _useState224[0],
    setDesignerName = _useState224[1];
  var _useState225 = useState((item === null || item === void 0 ? void 0 : item.quote_no) || ''),
    _useState226 = _slicedToArray(_useState225, 2),
    quoteNo = _useState226[0],
    setQuoteNo = _useState226[1];
  var _useState227 = useState((item === null || item === void 0 ? void 0 : item.order_no) || ''),
    _useState228 = _slicedToArray(_useState227, 2),
    orderNo = _useState228[0],
    setOrderNo = _useState228[1];
  var _useState229 = useState((item === null || item === void 0 ? void 0 : item.reference_images) || []),
    _useState230 = _slicedToArray(_useState229, 2),
    refImages = _useState230[0],
    setRefImages = _useState230[1];
  var _useState231 = useState((item === null || item === void 0 ? void 0 : item.design_files) || []),
    _useState232 = _slicedToArray(_useState231, 2),
    designFiles = _useState232[0],
    setDesignFiles = _useState232[1];
  var _useState233 = useState((item === null || item === void 0 ? void 0 : item.final_photos) || []),
    _useState234 = _slicedToArray(_useState233, 2),
    finalPhotos = _useState234[0],
    setFinalPhotos = _useState234[1];
  var _useState235 = useState((item === null || item === void 0 ? void 0 : item.notes) || ''),
    _useState236 = _slicedToArray(_useState235, 2),
    notes = _useState236[0],
    setNotes = _useState236[1];
  var _useState237 = useState(false),
    _useState238 = _slicedToArray(_useState237, 2),
    saving = _useState238[0],
    setSaving = _useState238[1];
  // 🆕 fix119: 定制咨询一键拉取订单 → 自动填客户 + 选产品图入参考图
  var _useState239 = useState({
      loading: false,
      products: null
    }),
    _useState240 = _slicedToArray(_useState239, 2),
    cuPull = _useState240[0],
    setCuPull = _useState240[1];
  var cuDoPull = /*#__PURE__*/function () {
    var _ref40 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee23() {
      var on, v, _t16;
      return _regenerator().w(function (_context23) {
        while (1) switch (_context23.p = _context23.n) {
          case 0:
            on = (orderNo || '').trim();
            if (on) {
              _context23.n = 1;
              break;
            }
            alert('请先填关联订单编号');
            return _context23.a(2);
          case 1:
            setCuPull({
              loading: true,
              products: null
            });
            _context23.p = 2;
            _context23.n = 3;
            return wsFetchOrderProducts(on);
          case 3:
            v = _context23.v;
            setCuPull({
              loading: false,
              products: v && v.products || []
            });
            if (v) {
              if (!(customerEmail || '').trim() && v.email) setCustomerEmail(v.email);
              if (!(customerName || '').trim() && v.customerName) setCustomerName(v.customerName);
            }
            _context23.n = 5;
            break;
          case 4:
            _context23.p = 4;
            _t16 = _context23.v;
            setCuPull({
              loading: false,
              products: []
            });
          case 5:
            return _context23.a(2);
        }
      }, _callee23, null, [[2, 4]]);
    }));
    return function cuDoPull() {
      return _ref40.apply(this, arguments);
    };
  }();
  var cuIsSaved = function cuIsSaved(p) {
    return (refImages || []).some(function (a) {
      return (a.url || a.dataUrl) === p.image_url;
    });
  };
  var cuPick = function cuPick(p) {
    if (!p.image_url) return;
    if (cuIsSaved(p)) setRefImages((refImages || []).filter(function (a) {
      return (a.url || a.dataUrl) !== p.image_url;
    }));else setRefImages([].concat(_toConsumableArray(refImages || []), [{
      id: 'a_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      url: p.image_url,
      label: '产品图',
      kind: 'image',
      mime: 'image/jpeg',
      name: (p.title || 'product') + '.jpg',
      from_order: true,
      uploaded_at: new Date().toISOString()
    }]));
  };
  var handleSave = /*#__PURE__*/function () {
    var _ref41 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee24() {
      var userName, now, payload, res;
      return _regenerator().w(function (_context24) {
        while (1) switch (_context24.n) {
          case 0:
            if (!(!customerName.trim() && !customerEmail.trim())) {
              _context24.n = 1;
              break;
            }
            alert('请至少填写客户姓名或邮箱');
            return _context24.a(2);
          case 1:
            setSaving(true);
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            now = new Date().toISOString();
            payload = _objectSpread(_objectSpread({}, item || {}), {}, {
              customer_name: customerName.trim() || null,
              customer_email: customerEmail.trim() || null,
              customer_phone: customerPhone.trim() || null,
              site: site || null,
              requirement: requirement.trim() || null,
              stage: stage,
              designer_name: designerName.trim() || null,
              quote_no: quoteNo.trim() || null,
              order_no: orderNo.trim() || null,
              reference_images: refImages,
              design_files: designFiles,
              final_photos: finalPhotos,
              notes: notes.trim() || null,
              updated_at: now,
              // 🆕 fix7: created_by 必须非空(旧记录可能为 null,触发 not-null 约束)
              created_by: (item === null || item === void 0 ? void 0 : item.created_by) || user.id,
              created_by_name: (item === null || item === void 0 ? void 0 : item.created_by_name) || userName,
              inquiry_at: (item === null || item === void 0 ? void 0 : item.inquiry_at) || now
            });
            _context24.n = 2;
            return CLOUD.upsert('custom_inquiries', payload);
          case 2:
            res = _context24.v;
            if (res) {
              toast(isEdit ? '✓ 已更新' : '✓ 已创建');
              onSaved();
            } else alertSaveError('保存定制咨询');
            setSaving(false);
          case 3:
            return _context24.a(2);
        }
      }, _callee24);
    }));
    return function handleSave() {
      return _ref41.apply(this, arguments);
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
      maxWidth: 760,
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
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "\uD83C\uDFA8 ", isEdit ? '编辑' : '新增', "\u5B9A\u5236\u54A8\u8BE2"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, user && user.role !== 'super_admin' && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _window$__requestSupe3, _window3;
      return (_window$__requestSupe3 = (_window3 = window).__requestSupervisorAssistance) === null || _window$__requestSupe3 === void 0 ? void 0 : _window$__requestSupe3.call(_window3, {
        entityType: '定制咨询',
        entityId: item === null || item === void 0 ? void 0 : item.id,
        entityTitle: customerName || customerEmail || '(新咨询)'
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
    title: "\u628A\u8FD9\u6761\u5B9A\u5236\u54A8\u8BE2\u4EA4\u7ED9\u4E3B\u7BA1/\u8001\u677F\u5904\u7406"
  }, user.role === 'admin' ? '👑 申请老板' : '🚨 申请主管'), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: onClose,
    style: {
      padding: '4px 12px'
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      overflow: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(FormGuide, {
    title: "\u5B9A\u5236\u54A8\u8BE2\u767B\u8BB0",
    steps: ['客户姓名 / 邮箱:填客户联系方式。', '订单号 / 产品:关联订单或产品(可「拉取订单」带出产品图)。', '定制需求:客户要怎么改(尺寸 / 颜色 / 材质 / 图案…),写具体,方便工厂评估。', '报价 / 工期:能否做、加价多少、大概多久(与工厂确认后填)。', '状态 / 进展:咨询中 → 报价 → 确认 → 生产 → 完成,随进展更新。', '图片:客户参考图 / 效果图 / 打样照。'],
    feedbackTip: "\u5982\u679C\u67D0\u7C7B\u5B9A\u5236\u9700\u6C42\u53CD\u590D\u505A\u4E0D\u51FA\u3001\u6216\u5DE5\u5382\u8001\u662F\u8BC4\u4F30\u4E0D\u51C6,\u56DE\u5230\u8BE5\u5BA2\u6237\u7684\u300C\u8DDF\u8FDB & \u622A\u56FE\u300D\u5F39\u7A97\u52FE\u300C\uD83D\uDCE3 \u6807\u8BB0\u4E3A\u95EE\u9898\u53CD\u9988\u300D\u5E76\u5199\u8BF4\u660E,\u4E3B\u7BA1\u4F1A\u5728\u300C\u4ECA\u65E5\u5DE5\u4F5C\u5FEB\u7167\u300D\u6536\u5230\u63D0\u9192\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 0.7fr',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: customerName,
    onChange: function onChange(e) {
      return setCustomerName(e.target.value);
    },
    placeholder: "\u5BA2\u6237\u59D3\u540D",
    autoFocus: true,
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: customerEmail,
    onChange: function onChange(e) {
      return setCustomerEmail(e.target.value);
    },
    placeholder: "\u90AE\u7BB1",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("select", {
    value: site,
    onChange: function onChange(e) {
      return setSite(e.target.value);
    },
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u7F51\u7AD9"), allSites.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s,
      value: s
    }, s);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: stage,
    onChange: function onChange(e) {
      return setStage(e.target.value);
    },
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }, CUSTOM_STAGES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.key,
      value: s.key
    }, s.icon, " ", s.label);
  })), /*#__PURE__*/React.createElement("input", {
    value: designerName,
    onChange: function onChange(e) {
      return setDesignerName(e.target.value);
    },
    placeholder: "\u8BBE\u8BA1\u5E08 / \u8DDF\u5355",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: customerPhone,
    onChange: function onChange(e) {
      return setCustomerPhone(e.target.value);
    },
    placeholder: "\u5BA2\u6237\u7535\u8BDD",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: quoteNo,
    onChange: function onChange(e) {
      return setQuoteNo(e.target.value);
    },
    placeholder: "\u5173\u8054\u62A5\u4EF7\u5355\u7F16\u53F7",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'monospace'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: orderNo,
    onChange: function onChange(e) {
      return setOrderNo(e.target.value);
    },
    placeholder: "\u5173\u8054\u8BA2\u5355\u7F16\u53F7",
    style: {
      flex: 1,
      minWidth: 0,
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'monospace'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: cuDoPull,
    disabled: cuPull.loading,
    title: "\u62C9\u53D6\u8BA2\u5355:\u81EA\u52A8\u586B\u5BA2\u6237,\u5E76\u53EF\u9009\u4EA7\u54C1\u56FE\u5165\u53C2\u8003\u56FE",
    style: {
      whiteSpace: 'nowrap',
      padding: '7px 10px',
      border: 'none',
      borderRadius: 6,
      background: '#0071e3',
      color: 'white',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer',
      flexShrink: 0
    }
  }, cuPull.loading ? '拉取中…' : '🔄 拉取'))), cuPull.products && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12,
      padding: 8,
      background: '#f8fafc',
      border: '1px solid var(--line)',
      borderRadius: 8
    }
  }, cuPull.products.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-4)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u6CA1\u62C9\u5230\u8BE5\u8BA2\u5355\u7684\u4EA7\u54C1(\u5DF2\u5C3D\u91CF\u586B\u5BA2\u6237)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setCuPull({
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
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u62C9\u5230 ", cuPull.products.length, " \u4E2A\u4EA7\u54C1 \xB7 \u70B9\u9009\u5B58\u5165\u53C2\u8003\u56FE(\u518D\u70B9\u53D6\u6D88)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setCuPull({
        loading: false,
        products: null
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
      gridTemplateColumns: 'repeat(auto-fill,minmax(90px,1fr))',
      gap: 8
    }
  }, cuPull.products.map(function (p, i) {
    var saved = cuIsSaved(p);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        return cuPick(p);
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
        fontWeight: 700
      }
    }, "\u2713"), p.image_url ? /*#__PURE__*/React.createElement("img", {
      src: p.image_url,
      alt: "",
      style: {
        width: '100%',
        height: 68,
        objectFit: 'contain',
        borderRadius: 5,
        background: '#f8fafc'
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        height: 68,
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
        lineHeight: 1.2,
        maxHeight: 24,
        overflow: 'hidden'
      }
    }, p.title || ''));
  })))), /*#__PURE__*/React.createElement("div", {
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
  }, "\u5BA2\u6237\u9700\u6C42 *"), /*#__PURE__*/React.createElement("textarea", {
    value: requirement,
    onChange: function onChange(e) {
      return setRequirement(e.target.value);
    },
    placeholder: "\u5BA2\u6237\u7684\u5B9A\u5236\u9700\u6C42,\u5982:\u5927\u7406\u77F3\u6750\u8D28 60cm \u76F4\u5F84\u540A\u706F,\u9ED1\u8272...",
    style: {
      width: '100%',
      minHeight: 100,
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical',
      lineHeight: 1.5
    }
  })), /*#__PURE__*/React.createElement("div", {
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
  }, "\uD83D\uDCF7 \u5BA2\u6237\u63D0\u4F9B\u7684\u53C2\u8003\u56FE"), /*#__PURE__*/React.createElement(MultiFileUploader, {
    files: refImages,
    setFiles: setRefImages,
    bucket: "business-files",
    maxSize: 20
  })), /*#__PURE__*/React.createElement("div", {
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
  }, "\u270F\uFE0F \u8BBE\u8BA1\u56FE / CAD \u56FE\u7EB8"), /*#__PURE__*/React.createElement(MultiFileUploader, {
    files: designFiles,
    setFiles: setDesignFiles,
    bucket: "business-files",
    maxSize: 30
  })), /*#__PURE__*/React.createElement("div", {
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
  }, "\uD83D\uDCF8 \u5B9E\u62CD\u56FE(\u751F\u4EA7\u5B8C\u6210\u540E)"), /*#__PURE__*/React.createElement(MultiFileUploader, {
    files: finalPhotos,
    setFiles: setFinalPhotos,
    bucket: "business-files",
    maxSize: 30
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u5907\u6CE8 / \u6C9F\u901A\u8BB0\u5F55"), /*#__PURE__*/React.createElement("textarea", {
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
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
  }, saving ? '保存中...' : '保存'))));
};

// ============================================================
// 📸 实拍核实子模块
// ============================================================
var PhotoVerificationsSubModule = function PhotoVerificationsSubModule(_ref42) {
  var user = _ref42.user,
    employees = _ref42.employees,
    toast = _ref42.toast;
  var _useState241 = useState([]),
    _useState242 = _slicedToArray(_useState241, 2),
    list = _useState242[0],
    setList = _useState242[1];
  var _useState243 = useState(true),
    _useState244 = _slicedToArray(_useState243, 2),
    loading = _useState244[0],
    setLoading = _useState244[1];
  var _useState245 = useState(null),
    _useState246 = _slicedToArray(_useState245, 2),
    editing = _useState246[0],
    setEditing = _useState246[1];
  var _useState247 = useState('active'),
    _useState248 = _slicedToArray(_useState247, 2),
    filterStatus = _useState248[0],
    setFilterStatus = _useState248[1];
  var _useState249 = useState(''),
    _useState250 = _slicedToArray(_useState249, 2),
    search = _useState250[0],
    setSearch = _useState250[1];
  var _useState251 = useState('all'),
    _useState252 = _slicedToArray(_useState251, 2),
    filterOwner = _useState252[0],
    setFilterOwner = _useState252[1]; // 🆕 fix76
  var _useState253 = useState('updated'),
    _useState254 = _slicedToArray(_useState253, 2),
    pvSortBy = _useState254[0],
    setPvSortBy = _useState254[1];
  var _useState255 = useState('desc'),
    _useState256 = _slicedToArray(_useState255, 2),
    pvSortDir = _useState256[0],
    setPvSortDir = _useState256[1];
  // 🆕 时间筛选
  var _useState257 = useState('all'),
    _useState258 = _slicedToArray(_useState257, 2),
    timeFilter = _useState258[0],
    setTimeFilter = _useState258[1];
  var _useState259 = useState({
      start: '',
      end: ''
    }),
    _useState260 = _slicedToArray(_useState259, 2),
    timeCustom = _useState260[0],
    setTimeCustom = _useState260[1];
  // 🆕 fix15: 日期范围筛选
  var _useState261 = useState({
      kind: 'all'
    }),
    _useState262 = _slicedToArray(_useState261, 2),
    dateFilter = _useState262[0],
    setDateFilter = _useState262[1];
  var load = /*#__PURE__*/function () {
    var _ref43 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee25() {
      var data, _t17;
      return _regenerator().w(function (_context25) {
        while (1) switch (_context25.p = _context25.n) {
          case 0:
            setLoading(true);
            _context25.p = 1;
            _context25.n = 2;
            return CLOUD.list('photo_verifications', {
              order: {
                col: 'created_at',
                asc: false
              },
              limit: 300
            });
          case 2:
            data = _context25.v;
            setList((data || []).filter(function (p) {
              return !p.deleted;
            }));
            _context25.n = 4;
            break;
          case 3:
            _context25.p = 3;
            _t17 = _context25.v;
            toast('❌ ' + _t17.message);
          case 4:
            setLoading(false);
          case 5:
            return _context25.a(2);
        }
      }, _callee25, null, [[1, 3]]);
    }));
    return function load() {
      return _ref43.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
  }, []);
  var handleDelete = /*#__PURE__*/function () {
    var _ref44 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee26(p) {
      var summary;
      return _regenerator().w(function (_context26) {
        while (1) switch (_context26.n) {
          case 0:
            summary = "".concat(p.sku || '', " ").concat(p.product_name || '', " \xB7 ").concat(p.supplier_name || '');
            _context26.n = 1;
            return requestDelete({
              user: user,
              tableName: 'photo_verifications',
              moduleLabel: '📸 实拍核实',
              record: p,
              recordSummary: summary,
              toast: toast,
              onSuccess: load
            });
          case 1:
            return _context26.a(2);
        }
      }, _callee26);
    }));
    return function handleDelete(_x0) {
      return _ref44.apply(this, arguments);
    };
  }();
  var filtered = useMemo(function () {
    var l = list;
    if (filterStatus === 'active') l = l.filter(function (p) {
      return !['accepted', 'rejected', 'replaced'].includes(p.status);
    });else if (filterStatus !== 'all') l = l.filter(function (p) {
      return p.status === filterStatus;
    });
    if (search.trim()) {
      var q = search.trim().toLowerCase();
      l = l.filter(function (p) {
        return (p.sku || '').toLowerCase().includes(q) || (p.product_name || '').toLowerCase().includes(q) || (p.supplier_name || '').toLowerCase().includes(q) || (p.difference_detail || '').toLowerCase().includes(q);
      });
    }
    if (filterOwner !== 'all') l = l.filter(function (p) {
      return p.created_by === filterOwner;
    }); // 🆕 fix76
    // 🆕 时间筛选
    l = filterByTimeRange(l, timeFilter, timeCustom.start, timeCustom.end, 'created_at');
    // 🆕 fix15: 日期范围筛选
    l = filterByDateRange(l, dateFilter, 'created_at');
    // 🆕 fix76: 排序
    var PV_STATUS_ORDER = {
      pending: 0,
      sent: 1,
      accepted: 2,
      rejected: 3,
      replaced: 4
    };
    var pkey = function pkey(p) {
      var _PV_STATUS_ORDER$p$st;
      switch (pvSortBy) {
        case 'updated':
          return p.updated_at || p.created_at || '';
        case 'created':
          return p.created_at || '';
        case 'sku':
          return (p.sku || '').toLowerCase();
        case 'product':
          return (p.product_name || '').toLowerCase();
        case 'supplier':
          return (p.supplier_name || '').toLowerCase();
        case 'status':
          return (_PV_STATUS_ORDER$p$st = PV_STATUS_ORDER[p.status]) !== null && _PV_STATUS_ORDER$p$st !== void 0 ? _PV_STATUS_ORDER$p$st : 9;
        default:
          return p.updated_at || p.created_at || '';
      }
    };
    l = _toConsumableArray(l).sort(function (a, b) {
      var ka = pkey(a),
        kb = pkey(b);
      var cmp = typeof ka === 'number' && typeof kb === 'number' ? ka - kb : String(ka).localeCompare(String(kb));
      return pvSortDir === 'desc' ? -cmp : cmp;
    });
    return l;
  }, [list, filterStatus, search, timeFilter, timeCustom, dateFilter, filterOwner, pvSortBy, pvSortDir]);
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
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
  }, "\uD83D\uDCF8 \u5B9E\u62CD\u6838\u5B9E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, "\u8DDF\u5355\u5F55\u5165\u5DEE\u5F02 \u2192 \u5BA2\u670D\u8054\u7CFB\u5BA2\u6237\u6838\u5B9E")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEditing('new');
    },
    className: "btn-pri",
    style: {
      padding: '6px 14px',
      fontSize: 12
    }
  }, "+ \u65B0\u589E\u6838\u5B9E")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      gap: 5,
      flexWrap: 'wrap'
    }
  }, [{
    key: 'active',
    label: '🔥 待处理'
  }].concat(_toConsumableArray(PHOTO_STATUSES.map(function (s) {
    return {
      key: s.key,
      label: s.label
    };
  })), [{
    key: 'all',
    label: '全部'
  }]).map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return setFilterStatus(t.key);
      },
      style: {
        padding: '3px 10px',
        borderRadius: 14,
        fontSize: 11,
        cursor: 'pointer',
        fontFamily: 'inherit',
        border: '1px solid ' + (filterStatus === t.key ? 'var(--accent)' : 'var(--line)'),
        background: filterStatus === t.key ? 'var(--accent)' : 'white',
        color: filterStatus === t.key ? 'white' : 'var(--ink-2)'
      }
    }, t.label);
  })), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D SKU / \u4EA7\u54C1 / \u4F9B\u5E94\u5546...",
    style: {
      width: '100%',
      marginTop: 8,
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 5,
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83D\uDC64 \u5BA2\u670D"), /*#__PURE__*/React.createElement("select", {
    value: filterOwner,
    onChange: function onChange(e) {
      return setFilterOwner(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8"), employees.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.name, e.alias ? " (".concat(e.alias, ")") : '');
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\u2195 \u6392\u5E8F"), /*#__PURE__*/React.createElement("select", {
    value: pvSortBy,
    onChange: function onChange(e) {
      return setPvSortBy(e.target.value);
    },
    style: {
      padding: '4px 8px',
      fontSize: 11,
      border: '1px solid var(--line)',
      borderRadius: 6
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "updated"
  }, "\u4FEE\u6539\u65E5\u671F"), /*#__PURE__*/React.createElement("option", {
    value: "created"
  }, "\u521B\u5EFA\u65E5\u671F"), /*#__PURE__*/React.createElement("option", {
    value: "sku"
  }, "SKU"), /*#__PURE__*/React.createElement("option", {
    value: "product"
  }, "\u4EA7\u54C1\u540D"), /*#__PURE__*/React.createElement("option", {
    value: "supplier"
  }, "\u4F9B\u5E94\u5546"), /*#__PURE__*/React.createElement("option", {
    value: "status"
  }, "\u72B6\u6001")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setPvSortDir(function (d) {
        return d === 'desc' ? 'asc' : 'desc';
      });
    },
    title: pvSortDir === 'desc' ? '降序' : '升序',
    style: {
      padding: '4px 9px',
      fontSize: 12,
      border: '1px solid var(--line)',
      borderRadius: 6,
      background: 'white',
      cursor: 'pointer',
      fontWeight: 600
    }
  }, pvSortDir === 'desc' ? '↓' : '↑'))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      paddingTop: 8,
      borderTop: '1px dashed var(--line)'
    }
  }, /*#__PURE__*/React.createElement(TimeRangeFilter, {
    value: timeFilter,
    onChange: setTimeFilter,
    customStart: timeCustom.start,
    customEnd: timeCustom.end,
    onCustomChange: setTimeCustom,
    label: "\uD83D\uDD53 \u8D85\u671F\u7B5B\u9009:",
    records: list,
    dateField: "created_at"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
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
  }, "\uD83D\uDCC5 \u521B\u5EFA\u65F6\u95F4:"), /*#__PURE__*/React.createElement(AdvancedDateFilter, {
    value: dateFilter,
    onChange: setDateFilter,
    size: "sm"
  }))), loading ? /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-8",
    style: {
      textAlign: 'center'
    }
  }, "\u23F3") : filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-10",
    style: {
      textAlign: 'center',
      color: 'var(--ink-3)'
    }
  }, "\u6682\u65E0\u5B9E\u62CD\u6838\u5B9E") : /*#__PURE__*/React.createElement("div", {
    className: "space-y-2"
  }, filtered.map(function (p) {
    return /*#__PURE__*/React.createElement(PhotoVerificationCard, {
      key: p.id,
      item: p,
      user: user,
      onEdit: function onEdit() {
        return setEditing(p);
      },
      onDelete: function onDelete() {
        return handleDelete(p);
      },
      onReload: load,
      toast: toast
    });
  })), editing && /*#__PURE__*/React.createElement(PhotoVerificationEditor, {
    item: editing === 'new' ? null : editing,
    user: user,
    onClose: function onClose() {
      return setEditing(null);
    },
    onSaved: function onSaved() {
      setEditing(null);
      load();
    },
    toast: toast
  }));
};
var PhotoVerificationCard = function PhotoVerificationCard(_ref45) {
  var item = _ref45.item,
    user = _ref45.user,
    onEdit = _ref45.onEdit,
    onDelete = _ref45.onDelete,
    onReload = _ref45.onReload,
    toast = _ref45.toast;
  var _useState263 = useState(false),
    _useState264 = _slicedToArray(_useState263, 2),
    expanded = _useState264[0],
    setExpanded = _useState264[1];
  var _useState265 = useState(null),
    _useState266 = _slicedToArray(_useState265, 2),
    previewFile = _useState266[0],
    setPreviewFile = _useState266[1];
  var status = PHOTO_STATUSES.find(function (s) {
    return s.key === item.status;
  }) || PHOTO_STATUSES[0];
  var setStatus = /*#__PURE__*/function () {
    var _ref46 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee27(newStatus) {
      return _regenerator().w(function (_context27) {
        while (1) switch (_context27.n) {
          case 0:
            _context27.n = 1;
            return CLOUD.upsert('photo_verifications', _objectSpread(_objectSpread({}, item), {}, {
              status: newStatus,
              updated_at: new Date().toISOString()
            }));
          case 1:
            toast('✓ 已更新');
            onReload();
          case 2:
            return _context27.a(2);
        }
      }, _callee27);
    }));
    return function setStatus(_x1) {
      return _ref46.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl",
    style: {
      overflow: 'hidden',
      border: '1.5px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px'
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
      background: status.bg,
      color: status.color
    }
  }, status.label), item.difference_type && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#fef2f2',
      color: '#dc2626',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u5DEE\u5F02:", item.difference_type), item.type === 'normal' && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#dcfce7',
      color: '#15803d',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u53D1\u8D27\u524D\u5B9E\u62CD")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 3
    }
  }, item.sku && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'monospace',
      color: 'var(--ink-3)',
      marginRight: 6
    }
  }, item.sku), item.product_name || '(未填产品名)'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, item.supplier_name && /*#__PURE__*/React.createElement("span", null, "\uD83C\uDFED ", item.supplier_name), item.reported_by_name && /*#__PURE__*/React.createElement("span", null, " \xB7 \uD83D\uDCDD ", item.reported_by_name), (item.affected_orders || []).length > 0 && /*#__PURE__*/React.createElement("span", null, " \xB7 \uD83D\uDCE6 \u5F71\u54CD ", item.affected_orders.length, " \u5355")), item.difference_detail && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      padding: 6,
      background: '#fef9c3',
      borderRadius: 5,
      fontSize: 12,
      color: '#713f12'
    }
  }, "\uD83D\uDCAC ", item.difference_detail), /*#__PURE__*/React.createElement(AttachThumbs, {
    files: [].concat(_toConsumableArray(item.sales_photos || []), _toConsumableArray(item.actual_photos || [])),
    size: 48,
    max: 8,
    onPreview: window.__setPreviewImg
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, item.status === 'pending' && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStatus('contacted');
    },
    style: {
      padding: '5px 10px',
      background: '#0369a1',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\uD83D\uDCE7 \u5DF2\u53D1\u90AE\u4EF6"), item.status === 'contacted' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStatus('accepted');
    },
    style: {
      padding: '5px 10px',
      background: '#15803d',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\u2705 \u63A5\u53D7"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setStatus('rejected');
    },
    style: {
      padding: '5px 10px',
      background: '#dc2626',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\u274C \u62D2\u7EDD")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setExpanded(function (v) {
        return !v;
      });
    },
    className: "btn-sec",
    style: {
      padding: '5px 10px',
      fontSize: 11
    }
  }, expanded ? '收起' : '详情'), /*#__PURE__*/React.createElement("button", {
    onClick: onEdit,
    style: {
      padding: '5px 10px',
      background: '#e0f2fe',
      color: '#0369a1',
      border: '1px solid #7dd3fc',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\u270F\uFE0F"), /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    style: {
      padding: '5px 10px',
      background: '#fef2f2',
      color: '#dc2626',
      border: '1px solid #fca5a5',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600
    }
  }, "\uD83D\uDDD1"))), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      padding: 10,
      background: '#fafafa',
      borderRadius: 8
    }
  }, (item.sales_photos || []).length > 0 && /*#__PURE__*/React.createElement(FileListSection, {
    title: "\uD83C\uDFA8 \u9500\u552E\u5C55\u793A\u56FE(\u5BF9\u6BD4)",
    files: item.sales_photos,
    onPreview: setPreviewFile
  }), (item.actual_photos || []).length > 0 && /*#__PURE__*/React.createElement(FileListSection, {
    title: "\uD83D\uDCF8 \u5B9E\u62CD\u56FE",
    files: item.actual_photos,
    onPreview: setPreviewFile
  }), (item.affected_orders || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginBottom: 3
    }
  }, "\uD83D\uDCE6 \u5F71\u54CD\u8BA2\u5355:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 5
    }
  }, item.affected_orders.map(function (o) {
    return /*#__PURE__*/React.createElement("span", {
      key: o,
      style: {
        padding: '3px 8px',
        background: '#dbeafe',
        color: '#1e3a8a',
        borderRadius: 5,
        fontSize: 11,
        fontFamily: 'monospace'
      }
    }, o);
  }))), item.customer_response && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      background: 'white',
      borderRadius: 5,
      fontSize: 12,
      whiteSpace: 'pre-wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginBottom: 3
    }
  }, "\uD83D\uDCE9 \u5BA2\u6237\u56DE\u590D:"), item.customer_response))), previewFile && /*#__PURE__*/React.createElement(FilePreviewModal, {
    file: previewFile,
    onClose: function onClose() {
      return setPreviewFile(null);
    }
  }));
};
var PhotoVerificationEditor = function PhotoVerificationEditor(_ref47) {
  var _item$affected_orders;
  var item = _ref47.item,
    user = _ref47.user,
    onClose = _ref47.onClose,
    onSaved = _ref47.onSaved,
    toast = _ref47.toast;
  var isEdit = !!item;
  var userName = user.name + (user.alias ? ' ' + user.alias : '');
  // 🆕 fix7: 表单字段重新设计
  // - 订单编号 (新字段 order_ref) — 主要字段,替代 SKU 作为主要标识
  // - 产品名 / 核实类型 / 差异类型(颜色等) / 差异说明 — 保留
  // - 录入人自动 = 当前客服(不需要手填)
  // - 客户回复改为留言板形式,支持图片粘贴/拖拽
  // - SKU / 供应商 / 影响订单 — 降级为可选高级字段
  var _useState267 = useState((item === null || item === void 0 ? void 0 : item.order_ref) || (item === null || item === void 0 || (_item$affected_orders = item.affected_orders) === null || _item$affected_orders === void 0 ? void 0 : _item$affected_orders[0]) || ''),
    _useState268 = _slicedToArray(_useState267, 2),
    orderRef = _useState268[0],
    setOrderRef = _useState268[1];
  var _useState269 = useState((item === null || item === void 0 ? void 0 : item.product_name) || ''),
    _useState270 = _slicedToArray(_useState269, 2),
    productName = _useState270[0],
    setProductName = _useState270[1];
  var _useState271 = useState((item === null || item === void 0 ? void 0 : item.type) || 'mismatch'),
    _useState272 = _slicedToArray(_useState271, 2),
    type = _useState272[0],
    setType = _useState272[1];
  var _useState273 = useState((item === null || item === void 0 ? void 0 : item.difference_type) || '颜色'),
    _useState274 = _slicedToArray(_useState273, 2),
    differenceType = _useState274[0],
    setDifferenceType = _useState274[1];
  var _useState275 = useState((item === null || item === void 0 ? void 0 : item.difference_detail) || ''),
    _useState276 = _slicedToArray(_useState275, 2),
    differenceDetail = _useState276[0],
    setDifferenceDetail = _useState276[1];
  var _useState277 = useState((item === null || item === void 0 ? void 0 : item.sales_photos) || []),
    _useState278 = _slicedToArray(_useState277, 2),
    salesPhotos = _useState278[0],
    setSalesPhotos = _useState278[1];
  var _useState279 = useState((item === null || item === void 0 ? void 0 : item.actual_photos) || []),
    _useState280 = _slicedToArray(_useState279, 2),
    actualPhotos = _useState280[0],
    setActualPhotos = _useState280[1];
  // 🆕 fix119: 实拍核实一键拉取订单 → 自动填产品名 + 选产品图入"销售图"
  var _useState281 = useState({
      loading: false,
      products: null
    }),
    _useState282 = _slicedToArray(_useState281, 2),
    pvPull = _useState282[0],
    setPvPull = _useState282[1];
  var pvDoPull = /*#__PURE__*/function () {
    var _ref48 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee28() {
      var on, v, _t18;
      return _regenerator().w(function (_context28) {
        while (1) switch (_context28.p = _context28.n) {
          case 0:
            on = (orderRef || '').trim();
            if (on) {
              _context28.n = 1;
              break;
            }
            alert('请先填订单编号');
            return _context28.a(2);
          case 1:
            setPvPull({
              loading: true,
              products: null
            });
            _context28.p = 2;
            _context28.n = 3;
            return wsFetchOrderProducts(on);
          case 3:
            v = _context28.v;
            setPvPull({
              loading: false,
              products: v && v.products || []
            });
            if (v && !(productName || '').trim() && v.products && v.products[0] && v.products[0].title) setProductName(v.products[0].title);
            _context28.n = 5;
            break;
          case 4:
            _context28.p = 4;
            _t18 = _context28.v;
            setPvPull({
              loading: false,
              products: []
            });
          case 5:
            return _context28.a(2);
        }
      }, _callee28, null, [[2, 4]]);
    }));
    return function pvDoPull() {
      return _ref48.apply(this, arguments);
    };
  }();
  var pvIsSaved = function pvIsSaved(p) {
    return (salesPhotos || []).some(function (a) {
      return (a.url || a.dataUrl) === p.image_url;
    });
  };
  var pvPick = function pvPick(p) {
    if (!p.image_url) return;
    if (p.title) setProductName(p.title);
    if (pvIsSaved(p)) setSalesPhotos((salesPhotos || []).filter(function (a) {
      return (a.url || a.dataUrl) !== p.image_url;
    }));else setSalesPhotos([].concat(_toConsumableArray(salesPhotos || []), [{
      id: 'a_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      url: p.image_url,
      label: '销售图(产品)',
      kind: 'image',
      mime: 'image/jpeg',
      name: (p.title || 'product') + '.jpg',
      from_order: true,
      uploaded_at: new Date().toISOString()
    }]));
  };
  // 客户回复留言板 — 数组结构,每条 {id, author_id, author_name, content, images:[{path,url}], created_at}
  // 旧记录里只有 customer_response (text) — 自动转成一条 legacy 留言
  var _useState283 = useState(function () {
      if (Array.isArray(item === null || item === void 0 ? void 0 : item.customer_replies)) return item.customer_replies;
      if (item !== null && item !== void 0 && item.customer_response && item.customer_response.trim()) {
        return [{
          id: 'legacy_' + (item.id || Date.now()),
          author_id: item.created_by || null,
          author_name: item.created_by_name || '(旧数据)',
          content: item.customer_response,
          images: [],
          created_at: item.updated_at || item.created_at || new Date().toISOString()
        }];
      }
      return [];
    }),
    _useState284 = _slicedToArray(_useState283, 2),
    replies = _useState284[0],
    setReplies = _useState284[1];
  var _useState285 = useState(false),
    _useState286 = _slicedToArray(_useState285, 2),
    showAdvanced = _useState286[0],
    setShowAdvanced = _useState286[1];
  var _useState287 = useState((item === null || item === void 0 ? void 0 : item.sku) || ''),
    _useState288 = _slicedToArray(_useState287, 2),
    sku = _useState288[0],
    setSku = _useState288[1];
  var _useState289 = useState((item === null || item === void 0 ? void 0 : item.supplier_name) || ''),
    _useState290 = _slicedToArray(_useState289, 2),
    supplierName = _useState290[0],
    setSupplierName = _useState290[1];
  var _useState291 = useState(((item === null || item === void 0 ? void 0 : item.affected_orders) || []).join(', ')),
    _useState292 = _slicedToArray(_useState291, 2),
    affectedOrders = _useState292[0],
    setAffectedOrders = _useState292[1];
  var _useState293 = useState((item === null || item === void 0 ? void 0 : item.resolution) || ''),
    _useState294 = _slicedToArray(_useState293, 2),
    resolution = _useState294[0],
    setResolution = _useState294[1];
  var _useState295 = useState(false),
    _useState296 = _slicedToArray(_useState295, 2),
    saving = _useState296[0],
    setSaving = _useState296[1];
  var handleSave = /*#__PURE__*/function () {
    var _ref49 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee29() {
      var now, mergedOrders, latestReply, payload, res;
      return _regenerator().w(function (_context29) {
        while (1) switch (_context29.n) {
          case 0:
            if (orderRef.trim()) {
              _context29.n = 1;
              break;
            }
            alert('请填写订单编号');
            return _context29.a(2);
          case 1:
            if (productName.trim()) {
              _context29.n = 2;
              break;
            }
            alert('请填写产品名');
            return _context29.a(2);
          case 2:
            if (differenceDetail.trim()) {
              _context29.n = 3;
              break;
            }
            alert('请填写差异说明');
            return _context29.a(2);
          case 3:
            setSaving(true);
            now = new Date().toISOString(); // 同步把 orderRef 也存进 affected_orders 兼容老查询
            mergedOrders = [orderRef.trim()].concat(_toConsumableArray(affectedOrders.split(',').map(function (s) {
              return s.trim();
            }).filter(Boolean))).filter(function (v, i, a) {
              return v && a.indexOf(v) === i;
            }); // 最新一条留言写入 customer_response 兼容旧字段
            latestReply = replies.length > 0 ? replies[replies.length - 1] : null;
            payload = _objectSpread(_objectSpread({}, item || {}), {}, {
              order_ref: orderRef.trim(),
              sku: sku.trim() || null,
              product_name: productName.trim() || null,
              supplier_name: supplierName.trim() || null,
              type: type,
              difference_type: differenceType,
              difference_detail: differenceDetail.trim(),
              affected_orders: mergedOrders,
              sales_photos: salesPhotos,
              actual_photos: actualPhotos,
              // 自动录入人 = 当前客服(item 原录入人保留,没的话用当前)
              reported_by_name: (item === null || item === void 0 ? void 0 : item.reported_by_name) || userName,
              reported_by_id: (item === null || item === void 0 ? void 0 : item.reported_by_id) || user.id,
              customer_replies: replies,
              customer_response: latestReply ? latestReply.content : (item === null || item === void 0 ? void 0 : item.customer_response) || null,
              resolution: resolution.trim() || null,
              updated_at: now,
              created_by: (item === null || item === void 0 ? void 0 : item.created_by) || user.id,
              created_by_name: (item === null || item === void 0 ? void 0 : item.created_by_name) || userName,
              status: (item === null || item === void 0 ? void 0 : item.status) || 'pending'
            });
            _context29.n = 4;
            return CLOUD.upsert('photo_verifications', payload);
          case 4:
            res = _context29.v;
            if (res) {
              toast(isEdit ? '✓ 已更新' : '✓ 已创建');
              onSaved();
            } else alertSaveError('保存实拍核实');
            setSaving(false);
          case 5:
            return _context29.a(2);
        }
      }, _callee29);
    }));
    return function handleSave() {
      return _ref49.apply(this, arguments);
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
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "\uD83D\uDCF8 ", isEdit ? '编辑' : '新增', "\u5B9E\u62CD\u6838\u5B9E"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, user && user.role !== 'super_admin' && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _window$__requestSupe4, _window4;
      return (_window$__requestSupe4 = (_window4 = window).__requestSupervisorAssistance) === null || _window$__requestSupe4 === void 0 ? void 0 : _window$__requestSupe4.call(_window4, {
        entityType: '实拍核实',
        entityId: item === null || item === void 0 ? void 0 : item.id,
        entityTitle: orderRef || productName || '(新核实)'
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
    title: "\u628A\u8FD9\u6761\u5B9E\u62CD\u6838\u5B9E\u4EA4\u7ED9\u4E3B\u7BA1/\u8001\u677F\u5904\u7406"
  }, user.role === 'admin' ? '👑 申请老板' : '🚨 申请主管'), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: onClose,
    style: {
      padding: '4px 12px'
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      overflow: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(FormGuide, {
    title: "\u5B9E\u62CD\u6838\u5B9E",
    steps: ['订单编号 / 产品名:填客户订单号,点「🔄 拉取订单」选对应产品(自动带产品图)。', '上传实拍图:工厂/仓库拍的真实产品照片(给客户确认用)。', '说明:要客户确认什么(颜色 / 尺寸 / 款式 / 配件…)。', '状态:发出后是「待客户确认」→ 客户接受 / 拒绝 / 要求更换 后更新。', '备注:记录客户反馈。'],
    feedbackTip: "\u5982\u679C\u67D0\u4EA7\u54C1\u5B9E\u62CD\u53CD\u590D\u88AB\u5BA2\u6237\u62D2\u7EDD\u3001\u6216\u5DE5\u5382\u5B9E\u7269\u8001\u662F\u548C\u56FE\u4E0D\u7B26,\u56DE\u5230\u8BE5\u5BA2\u6237\u7684\u300C\u8DDF\u8FDB & \u622A\u56FE\u300D\u5F39\u7A97\u52FE\u300C\uD83D\uDCE3 \u6807\u8BB0\u4E3A\u95EE\u9898\u53CD\u9988\u300D\u5E76\u5199\u8BF4\u660E,\u4E3B\u7BA1\u4F1A\u5728\u300C\u4ECA\u65E5\u5DE5\u4F5C\u5FEB\u7167\u300D\u6536\u5230\u63D0\u9192\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 12px',
      background: '#f0f9ff',
      border: '1px solid #bfdbfe',
      borderRadius: 8,
      marginBottom: 12,
      fontSize: 12,
      color: '#1e40af'
    }
  }, "\uD83D\uDC64 ", /*#__PURE__*/React.createElement("strong", null, "\u5F55\u5165\u4EBA"), ":", (item === null || item === void 0 ? void 0 : item.reported_by_name) || userName, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#64748b',
      fontSize: 11
    }
  }, "(\u81EA\u52A8\u586B\u5199,\u65E0\u9700\u4FEE\u6539)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr',
      gap: 10,
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
  }, "\u8BA2\u5355\u7F16\u53F7 *"), /*#__PURE__*/React.createElement("div", {
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
    autoFocus: true,
    style: {
      flex: 1,
      minWidth: 0,
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'monospace'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: pvDoPull,
    disabled: pvPull.loading,
    title: "\u62C9\u53D6\u8BA2\u5355:\u81EA\u52A8\u586B\u4EA7\u54C1\u540D,\u5E76\u53EF\u9009\u4EA7\u54C1\u56FE\u5165\u9500\u552E\u56FE",
    style: {
      whiteSpace: 'nowrap',
      padding: '7px 10px',
      border: 'none',
      borderRadius: 6,
      background: '#0071e3',
      color: 'white',
      fontSize: 12,
      fontWeight: 600,
      cursor: 'pointer',
      flexShrink: 0
    }
  }, pvPull.loading ? '拉取中…' : '🔄 拉取')), pvPull.products && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: 8,
      background: '#f8fafc',
      border: '1px solid var(--line)',
      borderRadius: 8
    }
  }, pvPull.products.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-4)',
      display: 'flex',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u6CA1\u62C9\u5230\u8BE5\u8BA2\u5355\u7684\u4EA7\u54C1"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setPvPull({
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
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u62C9\u5230 ", pvPull.products.length, " \u4E2A \xB7 \u70B9\u9009\u5B58\u5165\u9500\u552E\u56FE(\u518D\u70B9\u53D6\u6D88)"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setPvPull({
        loading: false,
        products: null
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
      gridTemplateColumns: 'repeat(auto-fill,minmax(90px,1fr))',
      gap: 8
    }
  }, pvPull.products.map(function (p, i) {
    var saved = pvIsSaved(p);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        return pvPick(p);
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
        fontWeight: 700
      }
    }, "\u2713"), p.image_url ? /*#__PURE__*/React.createElement("img", {
      src: p.image_url,
      alt: "",
      style: {
        width: '100%',
        height: 68,
        objectFit: 'contain',
        borderRadius: 5,
        background: '#f8fafc'
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        height: 68,
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
        lineHeight: 1.2,
        maxHeight: 24,
        overflow: 'hidden'
      }
    }, p.title || ''));
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u4EA7\u54C1\u540D *"), /*#__PURE__*/React.createElement("input", {
    value: productName,
    onChange: function onChange(e) {
      return setProductName(e.target.value);
    },
    placeholder: "\u5982:\u6C34\u6676\u540A\u706F-\u7C73\u8272-60cm",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
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
  }, "\u7C7B\u578B"), /*#__PURE__*/React.createElement("select", {
    value: type,
    onChange: function onChange(e) {
      return setType(e.target.value);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "mismatch"
  }, "\u5DEE\u5F02\u6838\u5B9E"), /*#__PURE__*/React.createElement("option", {
    value: "normal"
  }, "\u53D1\u8D27\u524D\u5B9E\u62CD"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u6838\u5B9E\u5DEE\u5F02(\u989C\u8272/\u5C3A\u5BF8/\u6750\u8D28\u7B49)"), /*#__PURE__*/React.createElement("select", {
    value: differenceType,
    onChange: function onChange(e) {
      return setDifferenceType(e.target.value);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }, PHOTO_DIFFERENCE_TYPES.map(function (t) {
    return /*#__PURE__*/React.createElement("option", {
      key: t,
      value: t
    }, t);
  })))), /*#__PURE__*/React.createElement("div", {
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
  }, "\u5DEE\u5F02\u8BF4\u660E *"), /*#__PURE__*/React.createElement("textarea", {
    value: differenceDetail,
    onChange: function onChange(e) {
      return setDifferenceDetail(e.target.value);
    },
    placeholder: "\u4F8B\u5982:\u9500\u552E\u56FE\u4E3A\u6696\u767D\u5149 3000K,\u5B9E\u7269\u662F\u51B7\u767D\u5149 6500K;\u6216\u9500\u552E\u56FE\u91D1\u8272\u8FB9\u6846,\u5B9E\u7269\u662F\u94F6\u8272",
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
  }, "\uD83C\uDFA8 \u9500\u552E\u5C55\u793A\u56FE"), /*#__PURE__*/React.createElement(MultiFileUploader, {
    files: salesPhotos,
    setFiles: setSalesPhotos,
    bucket: "business-files",
    maxSize: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\uD83D\uDCF8 \u5B9E\u62CD\u56FE"), /*#__PURE__*/React.createElement(MultiFileUploader, {
    files: actualPhotos,
    setFiles: setActualPhotos,
    bucket: "business-files",
    maxSize: 20
  }))), /*#__PURE__*/React.createElement(CustomerRepliesBoard, {
    replies: replies,
    setReplies: setReplies,
    user: user
  }), isEdit && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u2705 \u5904\u7406\u7ED3\u679C"), /*#__PURE__*/React.createElement("input", {
    value: resolution,
    onChange: function onChange(e) {
      return setResolution(e.target.value);
    },
    placeholder: "\u5982:\u63A5\u53D7\u53D1\u8D27 / \u9000\u6B3E / \u6362\u6B3E / \u9000\u8D27",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: 10,
      background: '#fafaf7',
      borderRadius: 8,
      border: '1px dashed var(--line)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowAdvanced(function (s) {
        return !s;
      });
    },
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: 12,
      color: 'var(--ink-3)',
      fontFamily: 'inherit',
      padding: 0
    }
  }, showAdvanced ? '▼' : '▶', " \u9AD8\u7EA7\u5B57\u6BB5 (SKU / \u4F9B\u5E94\u5546 / \u5176\u4ED6\u5F71\u54CD\u8BA2\u5355)"), showAdvanced && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: sku,
    onChange: function onChange(e) {
      return setSku(e.target.value);
    },
    placeholder: "SKU (\u53EF\u9009)",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'monospace'
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: supplierName,
    onChange: function onChange(e) {
      return setSupplierName(e.target.value);
    },
    placeholder: "\u4F9B\u5E94\u5546 (\u53EF\u9009)",
    style: {
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: affectedOrders,
    onChange: function onChange(e) {
      return setAffectedOrders(e.target.value);
    },
    placeholder: "\u5176\u4ED6\u5F71\u54CD\u8BA2\u5355(\u9017\u53F7\u5206\u9694)",
    style: {
      gridColumn: '1 / -1',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'monospace'
    }
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
  }, saving ? '保存中...' : '保存'))));
};

// 🆕 fix7: 客户回复留言板组件 — 支持文本 + 图片(粘贴/拖拽/选文件)+ 时间线展示
var CustomerRepliesBoard = function CustomerRepliesBoard(_ref50) {
  var replies = _ref50.replies,
    setReplies = _ref50.setReplies,
    user = _ref50.user;
  var userName = user.name + (user.alias ? ' ' + user.alias : '');
  var _useState297 = useState(''),
    _useState298 = _slicedToArray(_useState297, 2),
    newContent = _useState298[0],
    setNewContent = _useState298[1];
  var _useState299 = useState([]),
    _useState300 = _slicedToArray(_useState299, 2),
    newImages = _useState300[0],
    setNewImages = _useState300[1];
  var _useState301 = useState(false),
    _useState302 = _slicedToArray(_useState301, 2),
    uploading = _useState302[0],
    setUploading = _useState302[1];
  var fileInputRef = useRef(null);
  var dropRef = useRef(null);
  var uploadOneFile = /*#__PURE__*/function () {
    var _ref51 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee30(file) {
      var res, _t19;
      return _regenerator().w(function (_context30) {
        while (1) switch (_context30.p = _context30.n) {
          case 0:
            if (file) {
              _context30.n = 1;
              break;
            }
            return _context30.a(2, null);
          case 1:
            if (!(file.size > 10 * 1024 * 1024)) {
              _context30.n = 2;
              break;
            }
            alert('图片超过 10MB,请压缩');
            return _context30.a(2, null);
          case 2:
            setUploading(true);
            _context30.p = 3;
            _context30.n = 4;
            return CLOUD.uploadImage('business-files', file, 'photoverif/reply/');
          case 4:
            res = _context30.v;
            if (res) {
              _context30.n = 5;
              break;
            }
            throw new Error('上传失败');
          case 5:
            return _context30.a(2, res);
          case 6:
            _context30.p = 6;
            _t19 = _context30.v;
            alert('上传失败: ' + _t19.message);
            return _context30.a(2, null);
          case 7:
            _context30.p = 7;
            setUploading(false);
            return _context30.f(7);
          case 8:
            return _context30.a(2);
        }
      }, _callee30, null, [[3, 6, 7, 8]]);
    }));
    return function uploadOneFile(_x10) {
      return _ref51.apply(this, arguments);
    };
  }();
  var addFiles = /*#__PURE__*/function () {
    var _ref52 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee31(files) {
      var list, uploaded, _iterator5, _step5, f, r, _t20;
      return _regenerator().w(function (_context31) {
        while (1) switch (_context31.p = _context31.n) {
          case 0:
            list = Array.from(files || []).filter(function (f) {
              return f.type.startsWith('image/');
            });
            if (!(list.length === 0)) {
              _context31.n = 1;
              break;
            }
            return _context31.a(2);
          case 1:
            uploaded = [];
            _iterator5 = _createForOfIteratorHelper(list);
            _context31.p = 2;
            _iterator5.s();
          case 3:
            if ((_step5 = _iterator5.n()).done) {
              _context31.n = 6;
              break;
            }
            f = _step5.value;
            _context31.n = 4;
            return uploadOneFile(f);
          case 4:
            r = _context31.v;
            if (r) uploaded.push(r);
          case 5:
            _context31.n = 3;
            break;
          case 6:
            _context31.n = 8;
            break;
          case 7:
            _context31.p = 7;
            _t20 = _context31.v;
            _iterator5.e(_t20);
          case 8:
            _context31.p = 8;
            _iterator5.f();
            return _context31.f(8);
          case 9:
            if (uploaded.length > 0) setNewImages(function (prev) {
              return [].concat(_toConsumableArray(prev), uploaded);
            });
          case 10:
            return _context31.a(2);
        }
      }, _callee31, null, [[2, 7, 8, 9]]);
    }));
    return function addFiles(_x11) {
      return _ref52.apply(this, arguments);
    };
  }();

  // 粘贴图片到留言区
  var onPaste = /*#__PURE__*/function () {
    var _ref53 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee32(e) {
      var _e$clipboardData2;
      var items, files, _iterator6, _step6, it, f;
      return _regenerator().w(function (_context32) {
        while (1) switch (_context32.n) {
          case 0:
            items = (_e$clipboardData2 = e.clipboardData) === null || _e$clipboardData2 === void 0 ? void 0 : _e$clipboardData2.items;
            if (items) {
              _context32.n = 1;
              break;
            }
            return _context32.a(2);
          case 1:
            files = [];
            _iterator6 = _createForOfIteratorHelper(items);
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                it = _step6.value;
                if (it.type && it.type.indexOf('image') === 0) {
                  f = it.getAsFile();
                  if (f) files.push(f);
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
            if (!(files.length > 0)) {
              _context32.n = 2;
              break;
            }
            e.preventDefault();
            _context32.n = 2;
            return addFiles(files);
          case 2:
            return _context32.a(2);
        }
      }, _callee32);
    }));
    return function onPaste(_x12) {
      return _ref53.apply(this, arguments);
    };
  }();
  var onDrop = /*#__PURE__*/function () {
    var _ref54 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee33(e) {
      var _dropRef$current, _e$dataTransfer$files;
      return _regenerator().w(function (_context33) {
        while (1) switch (_context33.n) {
          case 0:
            e.preventDefault();
            (_dropRef$current = dropRef.current) === null || _dropRef$current === void 0 || _dropRef$current.classList.remove('drag-over');
            if (!((_e$dataTransfer$files = e.dataTransfer.files) !== null && _e$dataTransfer$files !== void 0 && _e$dataTransfer$files.length)) {
              _context33.n = 1;
              break;
            }
            _context33.n = 1;
            return addFiles(e.dataTransfer.files);
          case 1:
            return _context33.a(2);
        }
      }, _callee33);
    }));
    return function onDrop(_x13) {
      return _ref54.apply(this, arguments);
    };
  }();
  var send = function send() {
    if (!newContent.trim() && newImages.length === 0) {
      alert('请输入留言内容或粘贴图片');
      return;
    }
    var reply = {
      id: 'r_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
      author_id: user.id,
      author_name: userName,
      content: newContent.trim(),
      images: newImages,
      created_at: new Date().toISOString()
    };
    setReplies(function (prev) {
      return [].concat(_toConsumableArray(prev || []), [reply]);
    });
    setNewContent('');
    setNewImages([]);
  };
  var removeReply = /*#__PURE__*/function () {
    var _ref55 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee34(id) {
      return _regenerator().w(function (_context34) {
        while (1) switch (_context34.n) {
          case 0:
            _context34.n = 1;
            return wsConfirm('确认删除这条留言?');
          case 1:
            if (_context34.v) {
              _context34.n = 2;
              break;
            }
            return _context34.a(2);
          case 2:
            setReplies(function (prev) {
              return (prev || []).filter(function (r) {
                return r.id !== id;
              });
            });
          case 3:
            return _context34.a(2);
        }
      }, _callee34);
    }));
    return function removeReply(_x14) {
      return _ref55.apply(this, arguments);
    };
  }();
  var removeNewImage = function removeNewImage(idx) {
    setNewImages(function (prev) {
      return prev.filter(function (_, i) {
        return i !== idx;
      });
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: 12,
      background: '#fafaf7',
      border: '1px solid var(--line)',
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, "\uD83D\uDCE9 \u5BA2\u6237\u56DE\u590D / \u8DDF\u8FDB\u7559\u8A00\u677F (", (replies === null || replies === void 0 ? void 0 : replies.length) || 0, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)'
    }
  }, "\u6240\u6709\u5BA2\u670D\u90FD\u80FD\u770B\u5230\u5B8C\u6574\u8BB0\u5F55")), replies && replies.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 12,
      maxHeight: 300,
      overflowY: 'auto'
    }
  }, replies.map(function (r, idx) {
    var _r$images, _r$images2;
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      style: {
        padding: '8px 10px',
        background: 'white',
        border: '1px solid var(--line)',
        borderRadius: 8,
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: 'var(--ink-2)'
      }
    }, "\uD83D\uDCAC ", r.author_name || '(未知)', " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)',
        fontWeight: 400,
        marginLeft: 6
      }
    }, (r.created_at || '').slice(0, 16).replace('T', ' '))), r.author_id === user.id && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeReply(r.id);
      },
      style: {
        background: 'transparent',
        border: 'none',
        color: '#dc2626',
        cursor: 'pointer',
        fontSize: 11,
        fontFamily: 'inherit'
      }
    }, "\u5220\u9664")), r.content && /*#__PURE__*/React.createElement("div", {
      style: {
        whiteSpace: 'pre-wrap',
        color: 'var(--ink)',
        lineHeight: 1.5,
        marginBottom: (_r$images = r.images) !== null && _r$images !== void 0 && _r$images.length ? 6 : 0
      }
    }, r.content), ((_r$images2 = r.images) === null || _r$images2 === void 0 ? void 0 : _r$images2.length) > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6
      }
    }, r.images.map(function (img, i) {
      return /*#__PURE__*/React.createElement("a", {
        key: i,
        href: img.url,
        target: "_blank",
        rel: "noopener",
        style: {
          display: 'block',
          width: 80,
          height: 80,
          borderRadius: 6,
          overflow: 'hidden',
          border: '1px solid var(--line)'
        }
      }, /*#__PURE__*/React.createElement("img", {
        src: img.url,
        alt: "",
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }
      }));
    })));
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-4)',
      textAlign: 'center',
      padding: '12px 0',
      marginBottom: 8
    }
  }, "\u6682\u65E0\u7559\u8A00 \u2014 \u6536\u5230\u5BA2\u6237\u56DE\u590D\u540E\u5728\u4E0B\u65B9\u6DFB\u52A0,\u6240\u6709\u5BA2\u670D\u90FD\u80FD\u770B\u5230"), /*#__PURE__*/React.createElement("div", {
    ref: dropRef,
    onPaste: onPaste,
    onDragOver: function onDragOver(e) {
      var _dropRef$current2;
      e.preventDefault();
      (_dropRef$current2 = dropRef.current) === null || _dropRef$current2 === void 0 || _dropRef$current2.classList.add('drag-over');
    },
    onDragLeave: function onDragLeave() {
      var _dropRef$current3;
      return (_dropRef$current3 = dropRef.current) === null || _dropRef$current3 === void 0 ? void 0 : _dropRef$current3.classList.remove('drag-over');
    },
    onDrop: onDrop,
    style: {
      padding: 8,
      background: 'white',
      border: '1px dashed var(--line)',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: newContent,
    onChange: function onChange(e) {
      return setNewContent(e.target.value);
    },
    placeholder: "\u65B0\u7559\u8A00... (\u53EF Ctrl+V \u7C98\u8D34\u56FE\u7247 / \u62D6\u5165\u56FE\u7247)",
    style: {
      width: '100%',
      minHeight: 60,
      padding: 8,
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical',
      boxSizing: 'border-box'
    }
  }), newImages.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 6
    }
  }, newImages.map(function (img, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      style: {
        position: 'relative',
        width: 60,
        height: 60,
        borderRadius: 6,
        overflow: 'hidden',
        border: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: img.url,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return removeNewImage(idx);
      },
      style: {
        position: 'absolute',
        top: 1,
        right: 1,
        background: 'rgba(0,0,0,0.6)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: 18,
        height: 18,
        cursor: 'pointer',
        fontSize: 11,
        lineHeight: 1
      }
    }, "\xD7"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 8,
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _fileInputRef$current;
      return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
    },
    disabled: uploading,
    style: {
      padding: '5px 10px',
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontFamily: 'inherit',
      color: 'var(--ink-2)'
    }
  }, "\uD83D\uDCCE \u9009\u56FE\u7247"), /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    multiple: true,
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      addFiles(e.target.files);
      e.target.value = '';
    }
  }), uploading && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "\u4E0A\u4F20\u4E2D...")), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    disabled: uploading || !newContent.trim() && newImages.length === 0,
    style: {
      padding: '6px 16px',
      background: 'var(--accent)',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit',
      opacity: uploading || !newContent.trim() && newImages.length === 0 ? 0.5 : 1
    }
  }, "\u2713 \u6DFB\u52A0\u7559\u8A00"))));
};
