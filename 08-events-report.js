// ====== cs-system — 08-events-report ======
// 版本 2026.06.05-fix169
// 预编译切片
//
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["payload"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
// ====== cs-system — 08-events-report ======
// 版本 2026.06.05-fix169
// 预编译切片
//

var EventsModule = function EventsModule(_ref) {
  var _window$__canProcessR, _window;
  var user = _ref.user,
    employees = _ref.employees,
    records = _ref.records,
    toast = _ref.toast,
    cloudOn = _ref.cloudOn,
    focusId = _ref.focusId,
    focusSub = _ref.focusSub;
  var _useState = useState('aftersales'),
    _useState2 = _slicedToArray(_useState, 2),
    subTab = _useState2[0],
    setSubTab = _useState2[1]; // aftersales | refills | refunds | summary
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    suppliers = _useState4[0],
    setSuppliers = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    aftersales = _useState6[0],
    setAftersales = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    refills = _useState8[0],
    setRefills = _useState8[1];
  var _useState9 = useState([]),
    _useState0 = _slicedToArray(_useState9, 2),
    refunds = _useState0[0],
    setRefunds = _useState0[1];
  var _useState1 = useState(true),
    _useState10 = _slicedToArray(_useState1, 2),
    loading = _useState10[0],
    setLoading = _useState10[1];
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    editEvent = _useState12[0],
    setEditEvent = _useState12[1]; // { kind, event }
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    exportPanel = _useState14[0],
    setExportPanel = _useState14[1];
  var _useState15 = useState(null),
    _useState16 = _slicedToArray(_useState15, 2),
    refundReview = _useState16[0],
    setRefundReview = _useState16[1]; // 审核 modal
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    eventListModal = _useState18[0],
    setEventListModal = _useState18[1]; // 🆕 fix81: 数字点击弹出列表
  // 🆕 fix145: 从搜索跳来 → 切到对应子表 + 找到该条事件 → 自动打开编辑;useRef 防重复
  var evFocusRef = useRef(null);
  useEffect(function () {
    if (!focusId || focusId === evFocusRef.current) return;
    var byKind = {
      aftersales: [aftersales, 'aftersale'],
      refills: [refills, 'refill'],
      refunds: [refunds, 'refund']
    };
    var candidates = byKind[focusSub] ? [byKind[focusSub]] : [[aftersales, 'aftersale'], [refills, 'refill'], [refunds, 'refund']];
    for (var _i = 0, _candidates = candidates; _i < _candidates.length; _i++) {
      var _candidates$_i = _slicedToArray(_candidates[_i], 2),
        arr = _candidates$_i[0],
        kind = _candidates$_i[1];
      var ev = (arr || []).find(function (x) {
        return x.id === focusId;
      });
      if (ev) {
        evFocusRef.current = focusId;
        if (focusSub) setSubTab(focusSub);
        setEditEvent({
          kind: kind,
          event: ev
        });
        break;
      }
    }
  }, [focusId, focusSub, aftersales, refills, refunds]);
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var isFinance = user.role === 'finance' || isAdmin; // 财务+admin 都能管退款

  // 加载全部数据
  var loadAll = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _yield$Promise$all, _yield$Promise$all2, sup, af, rf, rfd, afLive, rfLive, rfdLive, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (cloudOn) {
              _context.n = 1;
              break;
            }
            setLoading(false);
            return _context.a(2);
          case 1:
            setLoading(true);
            _context.p = 2;
            _context.n = 3;
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
              limit: 2000
            }), CLOUD.list('refills', {
              order: {
                col: 'created_at',
                asc: false
              },
              limit: 2000
            }), CLOUD.list('refunds', {
              order: {
                col: 'created_at',
                asc: false
              },
              limit: 2000
            })]);
          case 3:
            _yield$Promise$all = _context.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 4);
            sup = _yield$Promise$all2[0];
            af = _yield$Promise$all2[1];
            rf = _yield$Promise$all2[2];
            rfd = _yield$Promise$all2[3];
            setSuppliers(sup || []);
            // 🆕 fix9b: 必须过滤软删除的(老板删除后刷新会回弹的根因 — 之前 loadAll 没过滤)
            afLive = (af || []).filter(function (x) {
              return !x.deleted;
            });
            rfLive = (rf || []).filter(function (x) {
              return !x.deleted;
            });
            rfdLive = (rfd || []).filter(function (x) {
              return !x.deleted;
            });
            setAftersales(afLive);
            setRefills(rfLive);
            setRefunds(rfdLive);
            // 🆕 写 cache 给顶部徽章用
            STORE.set('events_cache', {
              aftersales: afLive,
              refunds: rfdLive,
              refills: rfLive
            });
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            toast('❌ 加载失败: ' + _t.message);
          case 5:
            setLoading(false);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[2, 4]]);
    }));
    return function loadAll() {
      return _ref2.apply(this, arguments);
    };
  }();
  useEffect(function () {
    loadAll();
  }, [cloudOn]);

  // 筛选 state - 公用
  var _useState19 = useState(function () {
      return new Date().toISOString().slice(0, 7);
    }),
    _useState20 = _slicedToArray(_useState19, 2),
    filterMonth = _useState20[0],
    setFilterMonth = _useState20[1]; // YYYY-MM
  var _useState21 = useState(''),
    _useState22 = _slicedToArray(_useState21, 2),
    filterSupplier = _useState22[0],
    setFilterSupplier = _useState22[1]; // supplier id
  var _useState23 = useState('all'),
    _useState24 = _slicedToArray(_useState23, 2),
    filterStatus = _useState24[0],
    setFilterStatus = _useState24[1];
  var _useState25 = useState('all'),
    _useState26 = _slicedToArray(_useState25, 2),
    filterIssue = _useState26[0],
    setFilterIssue = _useState26[1];
  var _useState27 = useState('all'),
    _useState28 = _slicedToArray(_useState27, 2),
    filterRefundType = _useState28[0],
    setFilterRefundType = _useState28[1];
  var _useState29 = useState('all'),
    _useState30 = _slicedToArray(_useState29, 2),
    filterOwner = _useState30[0],
    setFilterOwner = _useState30[1];
  var _useState31 = useState(''),
    _useState32 = _slicedToArray(_useState31, 2),
    search = _useState32[0],
    setSearch = _useState32[1];

  // 月份范围
  var monthRange = useMemo(function () {
    if (!filterMonth) return {
      start: null,
      end: null
    };
    var _filterMonth$split$ma = filterMonth.split('-').map(Number),
      _filterMonth$split$ma2 = _slicedToArray(_filterMonth$split$ma, 2),
      y = _filterMonth$split$ma2[0],
      m = _filterMonth$split$ma2[1];
    var start = "".concat(y, "-").concat(String(m).padStart(2, '0'), "-01");
    var lastDay = new Date(y, m, 0).getDate();
    var end = "".concat(y, "-").concat(String(m).padStart(2, '0'), "-").concat(String(lastDay).padStart(2, '0'));
    return {
      start: start,
      end: end
    };
  }, [filterMonth]);

  // 过滤函数（共用）
  var inMonth = function inMonth(e) {
    if (!monthRange.start) return true;
    var created = (e.created_at || '').slice(0, 10);
    return created >= monthRange.start && created <= monthRange.end;
  };
  var matchSupplier = function matchSupplier(e) {
    return !filterSupplier || e.supplier_id === parseInt(filterSupplier);
  };
  var matchOwner = function matchOwner(e) {
    return filterOwner === 'all' || e.created_by === filterOwner;
  };
  var matchSearch = function matchSearch(e) {
    if (!search) return true;
    var q = search.toLowerCase();
    return [e.order_ref, e.customer, e.product_name, e.notes, e.damaged_part, e.refund_reason, e.supplier_name].filter(Boolean).join(' ').toLowerCase().includes(q);
  };
  var filteredAftersales = useMemo(function () {
    return aftersales.filter(function (e) {
      return inMonth(e) && matchSupplier(e) && matchOwner(e) && matchSearch(e) && (filterStatus === 'all' || e.status === filterStatus) && (filterIssue === 'all' || e.issue_type === filterIssue);
    });
  }, [aftersales, filterMonth, filterSupplier, filterStatus, filterIssue, filterOwner, search]);
  var filteredRefills = useMemo(function () {
    return refills.filter(function (e) {
      return inMonth(e) && matchSupplier(e) && matchOwner(e) && matchSearch(e) && (filterStatus === 'all' || e.status === filterStatus);
    });
  }, [refills, filterMonth, filterSupplier, filterStatus, filterOwner, search]);
  var filteredRefunds = useMemo(function () {
    return refunds.filter(function (e) {
      return inMonth(e) && matchSupplier(e) && matchOwner(e) && matchSearch(e) && (filterStatus === 'all' || e.status === filterStatus) && (filterRefundType === 'all' || e.refund_type === filterRefundType);
    });
  }, [refunds, filterMonth, filterSupplier, filterStatus, filterRefundType, filterOwner, search]);

  // 月度统计
  var monthlyStats = useMemo(function () {
    // 售后
    var asInMonth = aftersales.filter(inMonth);
    var asBySupplier = {};
    var asByIssue = {};
    asInMonth.forEach(function (e) {
      var _ISSUE_TYPES$find;
      var s = e.supplier_name || '(未指定)';
      asBySupplier[s] = (asBySupplier[s] || 0) + 1;
      var i = ((_ISSUE_TYPES$find = ISSUE_TYPES.find(function (t) {
        return t.key === e.issue_type;
      })) === null || _ISSUE_TYPES$find === void 0 ? void 0 : _ISSUE_TYPES$find.label) || e.issue_type || '(未指定)';
      asByIssue[i] = (asByIssue[i] || 0) + 1;
    });

    // 退款（已完成的算金额）
    var rdInMonth = refunds.filter(inMonth);
    var rdCompleted = rdInMonth.filter(function (r) {
      return r.status === 'completed' || r.status === 'approved';
    });
    var totalAmount = rdCompleted.reduce(function (s, r) {
      // 简单按 USD 算（实际多币种需汇率，这里展示用）
      return s + parseFloat(r.amount || 0);
    }, 0);
    var rdByType = {};
    var rdByTypeAmount = {};
    rdCompleted.forEach(function (r) {
      var _REFUND_TYPES$find;
      var t = ((_REFUND_TYPES$find = REFUND_TYPES.find(function (x) {
        return x.key === r.refund_type;
      })) === null || _REFUND_TYPES$find === void 0 ? void 0 : _REFUND_TYPES$find.label) || r.refund_type;
      rdByType[t] = (rdByType[t] || 0) + 1;
      rdByTypeAmount[t] = (rdByTypeAmount[t] || 0) + parseFloat(r.amount || 0);
    });

    // 补件
    var rfInMonth = refills.filter(inMonth);
    return {
      aftersales: {
        total: asInMonth.length,
        bySupplier: asBySupplier,
        byIssue: asByIssue
      },
      refunds: {
        total: rdInMonth.length,
        completed: rdCompleted.length,
        totalAmount: totalAmount,
        byType: rdByType,
        byTypeAmount: rdByTypeAmount,
        pending: rdInMonth.filter(function (r) {
          return r.status === 'pending';
        }).length
      },
      refills: {
        total: rfInMonth.length,
        byStatus: rfInMonth.reduce(function (acc, e) {
          acc[e.status] = (acc[e.status] || 0) + 1;
          return acc;
        }, {})
      }
    };
  }, [aftersales, refunds, refills, monthRange]);

  // 售后状态更新
  var updateAftersaleStatus = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id, status) {
      var extraFields,
        item,
        updated,
        res,
        _args2 = arguments;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            extraFields = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
            item = aftersales.find(function (a) {
              return a.id === id;
            });
            if (item) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            updated = _objectSpread(_objectSpread(_objectSpread({}, item), {}, {
              status: status
            }, extraFields), {}, {
              updated_at: new Date().toISOString()
            });
            _context2.n = 2;
            return CLOUD.upsert('aftersales', updated);
          case 2:
            res = _context2.v;
            if (res) {
              _context2.n = 3;
              break;
            }
            alertSaveError('保存售后');
            setSaving(false);
            return _context2.a(2);
          case 3:
            if (res) {
              setAftersales(function (prev) {
                return prev.map(function (a) {
                  return a.id === id ? res[0] || updated : a;
                });
              });
              toast('✓ 状态已更新');
            } else toast('❌ 更新失败');
          case 4:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function updateAftersaleStatus(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  // 补件状态更新
  var updateRefillStatus = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(id, status) {
      var item, updated, res;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            item = refills.find(function (r) {
              return r.id === id;
            });
            if (item) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            updated = _objectSpread(_objectSpread({}, item), {}, {
              status: status,
              updated_at: new Date().toISOString()
            });
            if (status === 'shipped' && !item.actual_ship_date) updated.actual_ship_date = new Date().toISOString().slice(0, 10);
            _context3.n = 2;
            return CLOUD.upsert('refills', updated);
          case 2:
            res = _context3.v;
            if (res) {
              _context3.n = 3;
              break;
            }
            alertSaveError('保存补件');
            setSaving(false);
            return _context3.a(2);
          case 3:
            if (res) {
              setRefills(function (prev) {
                return prev.map(function (r) {
                  return r.id === id ? res[0] || updated : r;
                });
              });
              toast('✓ 状态已更新');
            } else toast('❌ 更新失败');
          case 4:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function updateRefillStatus(_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }();

  // 退款审核 + 完成
  var reviewRefund = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(refund, action) {
      var notes,
        extraFields,
        now,
        payload,
        res,
        _args4 = arguments;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            notes = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : '';
            extraFields = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : {};
            now = new Date().toISOString();
            if (action === 'approve') {
              payload = _objectSpread(_objectSpread({}, refund), {}, {
                status: 'approved',
                approved_by: user.id,
                approved_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
                approved_at: now,
                approval_notes: notes,
                updated_at: now
              });
            } else if (action === 'reject') {
              payload = _objectSpread(_objectSpread({}, refund), {}, {
                status: 'rejected',
                approved_by: user.id,
                approved_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
                approved_at: now,
                approval_notes: notes,
                updated_at: now
              });
            } else if (action === 'complete') {
              payload = _objectSpread(_objectSpread({}, refund), {}, {
                status: 'completed',
                processed_by: user.id,
                processed_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
                processed_at: now,
                processing_notes: notes,
                external_refund_id: extraFields.external_refund_id || null,
                updated_at: now
              });
            }
            _context4.n = 1;
            return CLOUD.upsert('refunds', payload);
          case 1:
            res = _context4.v;
            if (res) {
              _context4.n = 2;
              break;
            }
            alertSaveError('保存退款');
            setSaving(false);
            return _context4.a(2);
          case 2:
            if (res) {
              setRefunds(function (prev) {
                return prev.map(function (r) {
                  return r.id === refund.id ? res[0] || payload : r;
                });
              });
              toast("\u2713 ".concat(action === 'approve' ? '已批准' : action === 'reject' ? '已拒绝' : '已完成', "\u9000\u6B3E"));
              setRefundReview(null);
            } else toast('❌ 操作失败');
          case 3:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function reviewRefund(_x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  }();

  // 删除事件 - 走审批流程
  var deleteEvent = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(kind, id) {
      var table, moduleLabel, list, rec, summary, ok;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            table = kind === 'aftersale' ? 'aftersales' : kind === 'refill' ? 'refills' : 'refunds';
            moduleLabel = kind === 'aftersale' ? '🔧 售后' : kind === 'refill' ? '📦 补件' : '💰 退款';
            list = kind === 'aftersale' ? aftersales : kind === 'refill' ? refills : refunds;
            rec = list.find(function (r) {
              return r.id === id;
            });
            if (rec) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            summary = "".concat(rec.order_ref || '?', " \xB7 ").concat(rec.customer || '?', " \xB7 ").concat(rec.product_name || '');
            _context5.n = 2;
            return requestDelete({
              user: user,
              tableName: table,
              moduleLabel: moduleLabel,
              record: rec,
              recordSummary: summary,
              toast: toast,
              onSuccess: function onSuccess() {
                if (kind === 'aftersale') setAftersales(function (prev) {
                  return prev.filter(function (a) {
                    return a.id !== id;
                  });
                });else if (kind === 'refill') setRefills(function (prev) {
                  return prev.filter(function (r) {
                    return r.id !== id;
                  });
                });else if (kind === 'refund') setRefunds(function (prev) {
                  return prev.filter(function (r) {
                    return r.id !== id;
                  });
                });
              }
            });
          case 2:
            ok = _context5.v;
          case 3:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function deleteEvent(_x7, _x8) {
      return _ref6.apply(this, arguments);
    };
  }();
  if (loading) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 40,
      textAlign: 'center',
      color: 'var(--ink-3)'
    }
  }, "\u23F3 \u52A0\u8F7D\u4E2D...");

  // 当前在哪个 sub-tab 决定渲染哪个表格
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3 fade-in",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      alignItems: 'center'
    }
  }, [{
    key: 'aftersales',
    label: '🔧 售后清单',
    count: filteredAftersales.length,
    color: '#ea580c'
  }, {
    key: 'refills',
    label: '📦 补件追踪',
    count: filteredRefills.length,
    color: '#0369a1'
  }, {
    key: 'refunds',
    label: '💰 退款管理',
    count: filteredRefunds.length,
    color: '#dc2626'
  }, {
    key: 'summary',
    label: '📊 月度汇总',
    count: null,
    color: '#16a34a'
  }].filter(function (t) {
    return !t.restrict;
  }).map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return setSubTab(t.key);
      },
      style: {
        padding: '7px 14px',
        borderRadius: 8,
        border: '1px solid ' + (subTab === t.key ? t.color : 'var(--line)'),
        background: subTab === t.key ? t.color + '15' : 'white',
        color: subTab === t.key ? t.color : 'var(--ink-2)',
        cursor: 'pointer',
        fontSize: 13,
        fontFamily: 'inherit',
        fontWeight: subTab === t.key ? 600 : 500,
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, t.label, t.count !== null && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 6px',
        background: subTab === t.key ? t.color : 'var(--bg)',
        color: subTab === t.key ? 'white' : 'var(--ink-3)',
        borderRadius: 10,
        fontSize: 10,
        fontWeight: 600
      }
    }, t.count));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: loadAll,
    className: "btn-sec",
    style: {
      padding: '5px 12px',
      fontSize: 12
    }
  }, "\uD83D\uDD04 \u5237\u65B0"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setExportPanel(true);
    },
    className: "btn-pri",
    style: {
      padding: '5px 14px',
      fontSize: 12
    }
  }, "\uD83D\uDCE5 \u5BFC\u51FA\u62A5\u8868"))), subTab !== 'summary' && /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3 fade-in",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "month",
    value: filterMonth,
    onChange: function onChange(e) {
      return setFilterMonth(e.target.value);
    },
    style: {
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement(SearchableSupplierSelect, {
    value: filterSupplier,
    onChange: setFilterSupplier,
    suppliers: suppliers,
    placeholder: "\u5168\u90E8\u4F9B\u5E94\u5546"
  }), subTab === 'aftersales' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("select", {
    value: filterStatus,
    onChange: function onChange(e) {
      return setFilterStatus(e.target.value);
    },
    style: {
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u72B6\u6001"), AFTERSALE_STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.key,
      value: s.key
    }, s.label);
  })), /*#__PURE__*/React.createElement("select", {
    value: filterIssue,
    onChange: function onChange(e) {
      return setFilterIssue(e.target.value);
    },
    style: {
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u95EE\u9898\u7C7B\u578B"), ISSUE_TYPES.map(function (i) {
    return /*#__PURE__*/React.createElement("option", {
      key: i.key,
      value: i.key
    }, i.label);
  }))), subTab === 'refills' && /*#__PURE__*/React.createElement("select", {
    value: filterStatus,
    onChange: function onChange(e) {
      return setFilterStatus(e.target.value);
    },
    style: {
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u72B6\u6001"), REFILL_STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.key,
      value: s.key
    }, s.label);
  })), subTab === 'refunds' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("select", {
    value: filterStatus,
    onChange: function onChange(e) {
      return setFilterStatus(e.target.value);
    },
    style: {
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u72B6\u6001"), REFUND_STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.key,
      value: s.key
    }, s.label);
  })), /*#__PURE__*/React.createElement("select", {
    value: filterRefundType,
    onChange: function onChange(e) {
      return setFilterRefundType(e.target.value);
    },
    style: {
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u9000\u6B3E\u7C7B\u578B"), REFUND_TYPES.map(function (t) {
    return /*#__PURE__*/React.createElement("option", {
      key: t.key,
      value: t.key
    }, t.label);
  }))), isAdmin && /*#__PURE__*/React.createElement("select", {
    value: filterOwner,
    onChange: function onChange(e) {
      return setFilterOwner(e.target.value);
    },
    style: {
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u5458\u5DE5"), employees.filter(function (e) {
    return e.role !== 'finance';
  }).map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.name, e.alias ? ' ' + e.alias : '');
  })), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u641C\u7D22\u8BA2\u5355/\u5BA2\u6237/\u4EA7\u54C1/\u5907\u6CE8...",
    style: {
      flex: 1,
      minWidth: 180,
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12
    }
  }), (filterSupplier || filterStatus !== 'all' || filterIssue !== 'all' || filterRefundType !== 'all' || filterOwner !== 'all' || search) && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setFilterSupplier('');
      setFilterStatus('all');
      setFilterIssue('all');
      setFilterRefundType('all');
      setFilterOwner('all');
      setSearch('');
    },
    className: "btn-ghost",
    style: {
      padding: '5px 10px',
      fontSize: 11
    }
  }, "\u6E05\u9664\u7B5B\u9009")), subTab === 'aftersales' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CompletionStatsBanner, {
    items: aftersales,
    title: "\u552E\u540E\u5B8C\u6210\u7EDF\u8BA1",
    icon: "\uD83D\uDD27",
    color: "#ea580c",
    completedStatuses: ['returned', 'customer_refund', 'closed'],
    onClickStats: function onClickStats(_ref7) {
      var records = _ref7.records,
        title = _ref7.title;
      return setEventListModal({
        events: records,
        title: title,
        kind: 'aftersale',
        accent: '#ea580c',
        icon: '🔧'
      });
    }
  }), /*#__PURE__*/React.createElement(AftersalesTable, {
    items: filteredAftersales,
    employees: employees,
    suppliers: suppliers,
    user: user,
    isAdmin: isAdmin,
    onEdit: function onEdit(e) {
      return setEditEvent({
        kind: 'aftersale',
        event: e
      });
    },
    onDelete: function onDelete(id) {
      return deleteEvent('aftersale', id);
    },
    onUpdateStatus: updateAftersaleStatus
  })), subTab === 'refills' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CompletionStatsBanner, {
    items: refills,
    title: "\u8865\u4EF6\u5B8C\u6210\u7EDF\u8BA1",
    icon: "\uD83D\uDCE6",
    color: "#0369a1",
    completedStatuses: ['delivered'],
    onClickStats: function onClickStats(_ref8) {
      var records = _ref8.records,
        title = _ref8.title;
      return setEventListModal({
        events: records,
        title: title,
        kind: 'refill',
        accent: '#0369a1',
        icon: '📦'
      });
    }
  }), /*#__PURE__*/React.createElement(RefillsTable, {
    items: filteredRefills,
    employees: employees,
    suppliers: suppliers,
    user: user,
    isAdmin: isAdmin,
    onEdit: function onEdit(e) {
      return setEditEvent({
        kind: 'refill',
        event: e
      });
    },
    onDelete: function onDelete(id) {
      return deleteEvent('refill', id);
    },
    onUpdateStatus: updateRefillStatus
  })), subTab === 'refunds' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AmountSummaryWidget, {
    title: "\u9000\u6B3E\u91D1\u989D\u6C47\u603B",
    icon: "\uD83D\uDCB0",
    color: "#dc2626",
    items: refunds,
    statusLabels: {
      pending: {
        label: '待审核',
        color: '#ca8a04',
        bg: '#fef9c3'
      },
      approved: {
        label: '已审核·待退',
        color: '#0369a1',
        bg: '#e0f2fe'
      },
      completed: {
        label: '已完成',
        color: '#16a34a',
        bg: '#dcfce7'
      },
      rejected: {
        label: '已拒绝',
        color: '#6b7280',
        bg: '#f3f4f6'
      }
    },
    getSite: function getSite(r) {
      return r.site || r.website || null;
    },
    onClickStats: function onClickStats(_ref9) {
      var records = _ref9.records,
        title = _ref9.title;
      return setEventListModal({
        events: records,
        title: title,
        kind: 'refund',
        accent: '#dc2626',
        icon: '💰'
      });
    }
  }), /*#__PURE__*/React.createElement(RefundsTable, {
    items: filteredRefunds,
    employees: employees,
    suppliers: suppliers,
    user: user,
    isFinance: isFinance,
    canRefundReview: isFinance || typeof window !== 'undefined' && ((_window$__canProcessR = (_window = window).__canProcessRefund) === null || _window$__canProcessR === void 0 ? void 0 : _window$__canProcessR.call(_window, user)),
    onEdit: function onEdit(e) {
      return setEditEvent({
        kind: 'refund',
        event: e
      });
    },
    onDelete: function onDelete(id) {
      return deleteEvent('refund', id);
    },
    onReview: function onReview(refund) {
      return setRefundReview(refund);
    }
  })), subTab === 'summary' && /*#__PURE__*/React.createElement(SummaryPanel, {
    stats: monthlyStats,
    filterMonth: filterMonth,
    setFilterMonth: setFilterMonth,
    aftersales: aftersales,
    refunds: refunds,
    refills: refills,
    suppliers: suppliers,
    employees: employees
  }), editEvent && /*#__PURE__*/React.createElement(EventEditorModal, {
    kind: editEvent.kind,
    record: null,
    existingEvent: editEvent.event,
    suppliers: suppliers,
    user: user,
    onClose: function onClose() {
      return setEditEvent(null);
    },
    onSaved: function onSaved(saved) {
      if (editEvent.kind === 'aftersale') setAftersales(function (prev) {
        return prev.map(function (a) {
          return a.id === saved.id ? saved : a;
        });
      });else if (editEvent.kind === 'refill') setRefills(function (prev) {
        return prev.map(function (r) {
          return r.id === saved.id ? saved : r;
        });
      });else setRefunds(function (prev) {
        return prev.map(function (r) {
          return r.id === saved.id ? saved : r;
        });
      });
      toast('✓ 已更新');
    }
  }), refundReview && /*#__PURE__*/React.createElement(RefundReviewModal, {
    refund: refundReview,
    user: user,
    onClose: function onClose() {
      return setRefundReview(null);
    },
    onSubmit: reviewRefund
  }), exportPanel && /*#__PURE__*/React.createElement(ExportPanel, {
    onClose: function onClose() {
      return setExportPanel(false);
    },
    aftersales: filteredAftersales,
    refills: filteredRefills,
    refunds: filteredRefunds,
    suppliers: suppliers,
    employees: employees,
    subTab: subTab,
    filterMonth: filterMonth,
    toast: toast
  }), eventListModal && /*#__PURE__*/React.createElement(EventListModal, _extends({}, eventListModal, {
    employees: employees,
    suppliers: suppliers,
    onClose: function onClose() {
      return setEventListModal(null);
    },
    onClickEvent: function onClickEvent(ev) {
      var kind = eventListModal.kind;
      setEventListModal(null);
      setEditEvent({
        kind: kind,
        event: ev
      });
    }
  })));
};

// ============================================================
// 售后清单表格
// ============================================================
// 🆕 fix107/116: 按订单号自动拉产品图(点击预览)+ 多产品手动选 + 手动上传/换图 —— 售后/补件/退款/拒付复用
var OrderProductThumb = function OrderProductThumb(_ref0) {
  var orderNo = _ref0.orderNo,
    onPreview = _ref0.onPreview;
  var pickKey = 'ws_prod_pick_' + (orderNo || '');
  var _useState33 = useState({
      loading: false,
      products: null
    }),
    _useState34 = _slicedToArray(_useState33, 2),
    st = _useState34[0],
    setSt = _useState34[1];
  var _useState35 = useState(function () {
      try {
        return orderNo ? JSON.parse(localStorage.getItem(pickKey) || 'null') : null;
      } catch (e) {
        return null;
      }
    }),
    _useState36 = _slicedToArray(_useState35, 2),
    picked = _useState36[0],
    setPicked = _useState36[1];
  var _useState37 = useState(false),
    _useState38 = _slicedToArray(_useState37, 2),
    showPicker = _useState38[0],
    setShowPicker = _useState38[1];
  useEffect(function () {
    var alive = true;
    if (!orderNo) {
      setSt({
        loading: false,
        products: []
      });
      return;
    }
    setSt({
      loading: true,
      products: null
    });
    wsFetchOrderProducts(orderNo).then(function (v) {
      if (alive) setSt({
        loading: false,
        products: v && v.products || []
      });
    })["catch"](function () {
      if (alive) setSt({
        loading: false,
        products: []
      });
    });
    return function () {
      alive = false;
    };
  }, [orderNo]);
  // 🆕 fix120: 弹窗打开时支持 Ctrl+V 粘贴图片
  useEffect(function () {
    if (!showPicker) return;
    var onPaste = function onPaste(ev) {
      var items = ev.clipboardData && ev.clipboardData.items || [];
      for (var i = 0; i < items.length; i++) {
        if (items[i].type && items[i].type.indexOf('image') === 0) {
          var f = items[i].getAsFile();
          if (f) {
            onManualFile(f);
            ev.preventDefault();
            break;
          }
        }
      }
    };
    document.addEventListener('paste', onPaste);
    return function () {
      return document.removeEventListener('paste', onPaste);
    };
  }, [showPicker]);
  if (!orderNo) return null;
  var choose = function choose(p, keepOpen) {
    setPicked(p);
    try {
      localStorage.setItem(pickKey, JSON.stringify(p));
    } catch (e) {}
    if (!keepOpen) setShowPicker(false);
  };
  var clearPick = function clearPick() {
    setPicked(null);
    try {
      localStorage.removeItem(pickKey);
    } catch (e) {}
  };
  var onManualFile = function onManualFile(file) {
    if (!file || !(file.type || '').startsWith('image/')) return;
    var reader = new FileReader();
    reader.onload = function (e) {
      var img = new Image();
      img.onload = function () {
        try {
          var c = document.createElement('canvas');
          var w = img.width,
            h = img.height;
          var M = 480;
          if (w > M || h > M) {
            if (w > h) {
              h = Math.round(h * M / w);
              w = M;
            } else {
              w = Math.round(w * M / h);
              h = M;
            }
          }
          c.width = w;
          c.height = h;
          c.getContext('2d').drawImage(img, 0, 0, w, h);
          choose({
            image_url: c.toDataURL('image/jpeg', 0.82),
            title: '手动添加',
            manual: true
          }, true);
        } catch (err) {
          choose({
            image_url: e.target.result,
            title: '手动添加',
            manual: true
          }, true);
        }
      };
      img.onerror = function () {
        return choose({
          image_url: e.target.result,
          title: '手动添加',
          manual: true
        }, true);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };
  var manualBtnStyle = {
    padding: '5px 10px',
    fontSize: 12,
    border: 'none',
    borderRadius: 6,
    background: '#0071e3',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 600,
    display: 'inline-block'
  };
  var prods = st.products || [];
  var single = prods.length === 1 ? prods[0] : null;
  var show = picked || single;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, st.loading ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)'
    }
  }, "\u62C9\u53D6\u4E2D\u2026") : show ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    src: show.image_url,
    alt: "",
    title: show.title || '',
    onClick: function onClick() {
      return onPreview && onPreview(show.image_url);
    },
    style: {
      width: 40,
      height: 40,
      objectFit: 'cover',
      borderRadius: 5,
      border: '1px solid ' + (show.manual ? '#86efac' : '#c7d2fe'),
      cursor: 'zoom-in'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowPicker(true);
    },
    title: show.manual ? '手动图 · 点此换图/重选' : prods.length > 1 ? '多产品 · 点此重选' : '换图/手动上传',
    style: {
      padding: '2px 5px',
      fontSize: 9,
      border: '1px solid var(--line)',
      borderRadius: 4,
      background: 'white',
      cursor: 'pointer',
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, show.manual ? '换图' : prods.length > 1 ? '重选 ×' + prods.length : '换图')) : prods.length > 1 ? /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowPicker(true);
    },
    title: "\u8BE5\u8BA2\u5355\u6709 ".concat(prods.length, " \u4E2A\u4EA7\u54C1,\u8BF7\u624B\u52A8\u9009\u5339\u914D\u7684"),
    style: {
      padding: '4px 8px',
      fontSize: 10,
      border: '1px dashed #f59e0b',
      borderRadius: 5,
      background: '#fffbeb',
      cursor: 'pointer',
      color: '#b45309',
      fontWeight: 600
    }
  }, "\u9009\u4EA7\u54C1 \xD7", prods.length) : /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowPicker(true);
    },
    title: "\u672A\u81EA\u52A8\u5339\u914D\u5230 \xB7 \u70B9\u6B64\u624B\u52A8\u52A0\u56FE",
    style: {
      padding: '4px 8px',
      fontSize: 10,
      border: '1px dashed var(--line)',
      borderRadius: 5,
      background: 'white',
      cursor: 'pointer',
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83D\uDCCE \u624B\u52A8\u52A0\u56FE"), showPicker && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setShowPicker(false);
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.5)',
      zIndex: 100004,
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
      maxWidth: 520,
      maxHeight: '82vh',
      overflowY: 'auto',
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      marginBottom: 2
    }
  }, "\u9009\u62E9 / \u624B\u52A8\u6DFB\u52A0\u4EA7\u54C1\u56FE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginBottom: 12
    }
  }, orderNo, " \xB7 \u81EA\u52A8\u62C9\u5230 ", prods.length, " \u4E2A\u4EA7\u54C1;\u9009\u4E00\u4E2A,\u6216\u81EA\u52A8\u6709\u8BEF\u65F6\u624B\u52A8\u4E0A\u4F20/\u7C98\u8D34"), picked && picked.image_url && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12,
      padding: 10,
      background: '#f0fdf4',
      border: '1px solid #86efac',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: picked.image_url,
    alt: "",
    onClick: function onClick() {
      return onPreview && onPreview(picked.image_url);
    },
    style: {
      width: 64,
      height: 64,
      objectFit: 'cover',
      borderRadius: 8,
      border: '1px solid #86efac',
      cursor: 'zoom-in'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: '#15803d'
    }
  }, "\u2705 \u5F53\u524D\u5DF2\u9009", picked.manual ? '(手动)' : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, picked.title || ''), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)',
      marginTop: 2
    }
  }, "\u70B9\u56FE\u53EF\u653E\u5927\u9884\u89C8")), /*#__PURE__*/React.createElement("button", {
    onClick: clearPick,
    className: "btn-sec",
    style: {
      padding: '4px 9px',
      fontSize: 11
    }
  }, "\u6E05\u9664")), /*#__PURE__*/React.createElement("label", {
    onDragOver: function onDragOver(e) {
      e.preventDefault();
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      var f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if (f) onManualFile(f);
    },
    style: {
      display: 'block',
      marginBottom: 14,
      padding: '14px 12px',
      border: '2px dashed #93c5fd',
      borderRadius: 10,
      background: '#f0f9ff',
      cursor: 'pointer',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: '#0369a1'
    }
  }, "\uD83D\uDCCE \u70B9\u51FB\u4E0A\u4F20 / \u62D6\u62FD / \uD83D\uDCCB \u7C98\u8D34 (Ctrl+V)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, "\u652F\u6301\u622A\u56FE\u76F4\u63A5 Ctrl+V \u7C98\u8D34 \xB7 \u4E0A\u4F20\u540E\u4E0B\u65B9\u9884\u89C8"), /*#__PURE__*/React.createElement("input", {
    type: "file",
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      onManualFile(e.target.files && e.target.files[0]);
      e.target.value = '';
    }
  })), prods.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(120px,1fr))',
      gap: 10
    }
  }, prods.map(function (p, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        return choose(p);
      },
      style: {
        border: picked && picked.image_url === p.image_url ? '2px solid #0071e3' : '1px solid var(--line)',
        borderRadius: 8,
        padding: 6,
        cursor: 'pointer',
        textAlign: 'center'
      }
    }, p.image_url ? /*#__PURE__*/React.createElement("img", {
      src: p.image_url,
      alt: "",
      style: {
        width: '100%',
        height: 90,
        objectFit: 'cover',
        borderRadius: 5
      }
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        height: 90,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--ink-4)',
        fontSize: 11
      }
    }, "\u65E0\u56FE"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-2)',
        marginTop: 5,
        lineHeight: 1.3,
        maxHeight: 30,
        overflow: 'hidden'
      }
    }, p.title || ''), p.quantity > 1 && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)'
      }
    }, "\xD7", p.quantity));
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-4)',
      textAlign: 'center',
      padding: '8px 0'
    }
  }, "\u672A\u81EA\u52A8\u5339\u914D\u5230\u8BE5\u8BA2\u5355\u7684\u4EA7\u54C1\u56FE,\u8BF7\u7528\u4E0A\u65B9\u4E0A\u4F20 / \u7C98\u8D34\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowPicker(false);
    },
    className: "btn-pri",
    style: {
      padding: '6px 16px',
      fontSize: 13
    }
  }, "\u5B8C\u6210")))));
};
var OrderRefLink = function OrderRefLink(_ref1) {
  var orderNo = _ref1.orderNo,
    style = _ref1.style;
  var _useState39 = useState(''),
    _useState40 = _slicedToArray(_useState39, 2),
    url = _useState40[0],
    setUrl = _useState40[1];
  useEffect(function () {
    var alive = true;
    if (!orderNo) return;
    wsFetchOrderProducts(orderNo).then(function (v) {
      if (alive && v && v.orderUrl) setUrl(v.orderUrl);
    })["catch"](function () {});
    return function () {
      alive = false;
    };
  }, [orderNo]);
  if (!orderNo) return /*#__PURE__*/React.createElement("span", null, "-");
  var href = url || wsOrderAdminUrl(orderNo); // 🆕 fix116: 优先真实订单页(含订单ID,直达),未拉到时退后台搜索
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    title: url ? '打开订单页' : '打开订单后台搜索',
    style: _objectSpread({
      color: 'var(--accent)',
      textDecoration: 'none',
      fontWeight: 600
    }, style)
  }, orderNo, " \u2197") : /*#__PURE__*/React.createElement("span", {
    style: _objectSpread({
      fontWeight: 600
    }, style)
  }, orderNo);
};

// 🆕 fix108: 售后 → 跟单介入桥接 —— 写共享 aftersales_events + 发带 payload.aftersales_event_id 的路由工单(to_system:'po')
function pushAseToOrders(_x9, _x0) {
  return _pushAseToOrders.apply(this, arguments);
}
function _pushAseToOrders() {
  _pushAseToOrders = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee18(event, user) {
    var opts,
      client,
      aseId,
      atts,
      isVid,
      aseRow,
      toUserId,
      toUserName,
      _yield$client$from$se,
      data,
      owner,
      userName,
      msg,
      payload,
      msg2,
      _args18 = arguments,
      _t5,
      _t6,
      _t7,
      _t8;
    return _regenerator().w(function (_context18) {
      while (1) switch (_context18.p = _context18.n) {
        case 0:
          opts = _args18.length > 2 && _args18[2] !== undefined ? _args18[2] : {};
          client = getCdmClient();
          if (client) {
            _context18.n = 1;
            break;
          }
          alert('跨部门库未连接 — 请进 ⚙ 设置中心配置');
          return _context18.a(2, false);
        case 1:
          aseId = event.id;
          atts = event.attachments || [];
          isVid = function isVid(a) {
            return a.kind === 'video' || /\.(mp4|webm|mov|avi|m4v)(\?|$)/i.test(a.url || '');
          };
          aseRow = {
            id: aseId,
            order_no: event.order_ref || '',
            store: event.site || '',
            supplier: event.supplier_name || '',
            category: '售后',
            reason_tag: event.issue_type || '',
            reason_detail: event.issue_detail || '',
            product_name: event.product_name || '',
            damage_part: event.damaged_part || '',
            images: atts.filter(function (a) {
              return !isVid(a);
            }).map(function (a) {
              return a.url;
            }).filter(Boolean),
            videos: atts.filter(function (a) {
              return isVid(a);
            }).map(function (a) {
              return a.url;
            }).filter(Boolean),
            status: event.status || '待回货',
            created_by: event.created_by_name || user && user.name || '',
            created_role: 'cs',
            created_at_ms: event.created_at_ms || Date.now(),
            deleted: false,
            updated_at: new Date().toISOString()
          };
          _context18.p = 2;
          _context18.n = 3;
          return client.from('aftersales_events').upsert(aseRow, {
            onConflict: 'id'
          });
        case 3:
          _context18.n = 5;
          break;
        case 4:
          _context18.p = 4;
          _t5 = _context18.v;
          alert('写入售后共享表失败:' + (_t5.message || _t5) + '\n\n(请先在跨部门库跑 aftersales_events 建表 SQL)');
          return _context18.a(2, false);
        case 5:
          // 路由:① 指定跟单 ② 否则该网站绑定的负责人 ③ 否则留空 → 跟单主管分配
          toUserId = opts.assigneeId || null, toUserName = opts.assigneeName || null;
          if (!(!toUserId && event.site)) {
            _context18.n = 9;
            break;
          }
          _context18.p = 6;
          _context18.n = 7;
          return client.from('shop_owners').select('*').eq('shop_name', event.site);
        case 7:
          _yield$client$from$se = _context18.v;
          data = _yield$client$from$se.data;
          owner = (data || []).find(function (o) {
            return /po|跟单|order/i.test(o.system || o.dept || o.source_system || '');
          }) || null;
          if (owner) {
            toUserId = owner.assigned_to_id || owner.user_id || owner.owner_id || null;
            toUserName = owner.assigned_to_name || owner.owner_name || owner.user_name || null;
          }
          _context18.n = 9;
          break;
        case 8:
          _context18.p = 8;
          _t6 = _context18.v;
        case 9:
          userName = user ? user.name + (user.alias ? ' ' + user.alias : '') : '客服';
          msg = {
            from_system: MY_SYSTEM,
            from_user_id: user && user.id,
            from_user_name: userName,
            to_system: 'po',
            to_user_id: toUserId,
            to_user_name: toUserName,
            related_shop: event.site || null,
            watchers: null,
            category: 'general',
            priority: 'normal',
            title: "[\u552E\u540E\u8F6C\u8DDF\u5355] ".concat(event.order_ref || '').concat(event.site ? ' · ' + event.site : '', " \xB7 ").concat(event.product_name || ''),
            body: ["\u552E\u540E\u539F\u56E0:".concat(event.issue_detail || event.issue_type || ''), event.damaged_part ? "\u635F\u574F\u90E8\u4F4D:".concat(event.damaged_part) : '', "\u4F9B\u5E94\u5546:".concat(event.supplier_name || '-'), '', '👉 请在工单顶部点「📋 查看售后详情」回填:产品改进意见 / 产品改进状态 / 沟通图片,并追加跟进。'].filter(Boolean).join('\n'),
            payload: {
              aftersales_event_id: aseId
            },
            related_type: 'aftersales',
            related_ref: aseId,
            attachments: atts,
            status: 'pending',
            thread: [],
            read_by: [user && user.id].filter(Boolean),
            created_at_ms: Date.now(),
            updated_at: new Date().toISOString()
          };
          _context18.p = 10;
          _context18.n = 11;
          return client.from('cross_dept_messages').insert(msg);
        case 11:
          _context18.n = 18;
          break;
        case 12:
          _context18.p = 12;
          _t7 = _context18.v;
          if (!/payload/i.test(_t7.message || '')) {
            _context18.n = 17;
            break;
          }
          // payload 列不存在 → 去掉重试(related_type/ref 仍可识别)
          payload = msg.payload, msg2 = _objectWithoutProperties(msg, _excluded);
          _context18.p = 13;
          _context18.n = 14;
          return client.from('cross_dept_messages').insert(msg2);
        case 14:
          _context18.n = 16;
          break;
        case 15:
          _context18.p = 15;
          _t8 = _context18.v;
          alert('发工单失败:' + (_t8.message || _t8));
          return _context18.a(2, false);
        case 16:
          _context18.n = 18;
          break;
        case 17:
          alert('发工单失败:' + (_t7.message || _t7));
          return _context18.a(2, false);
        case 18:
          return _context18.a(2, true);
      }
    }, _callee18, null, [[13, 15], [10, 12], [6, 8], [2, 4]]);
  }));
  return _pushAseToOrders.apply(this, arguments);
}
var AseToOrdersModal = function AseToOrdersModal(_ref10) {
  var event = _ref10.event,
    user = _ref10.user,
    onClose = _ref10.onClose,
    onDone = _ref10.onDone,
    toast = _ref10.toast;
  var _useState41 = useState([]),
    _useState42 = _slicedToArray(_useState41, 2),
    poPeople = _useState42[0],
    setPoPeople = _useState42[1];
  var _useState43 = useState(''),
    _useState44 = _slicedToArray(_useState43, 2),
    assignee = _useState44[0],
    setAssignee = _useState44[1];
  var _useState45 = useState(false),
    _useState46 = _slicedToArray(_useState45, 2),
    sending = _useState46[0],
    setSending = _useState46[1];
  var _useState47 = useState(undefined),
    _useState48 = _slicedToArray(_useState47, 2),
    ase = _useState48[0],
    setAse = _useState48[1]; // undefined=加载中, null=未转, obj=已转
  var _useState49 = useState(''),
    _useState50 = _slicedToArray(_useState49, 2),
    note = _useState50[0],
    setNote = _useState50[1];
  var _useState51 = useState(false),
    _useState52 = _slicedToArray(_useState51, 2),
    busy = _useState52[0],
    setBusy = _useState52[1];
  var _useState53 = useState(null),
    _useState54 = _slicedToArray(_useState53, 2),
    preview = _useState54[0],
    setPreview = _useState54[1];
  var loadAse = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var c, _yield$c$from$select$, data, _t2;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            c = getCdmClient();
            if (c) {
              _context6.n = 1;
              break;
            }
            setAse(null);
            return _context6.a(2, null);
          case 1:
            _context6.p = 1;
            _context6.n = 2;
            return c.from('aftersales_events').select('*').eq('id', event.id).maybeSingle();
          case 2:
            _yield$c$from$select$ = _context6.v;
            data = _yield$c$from$select$.data;
            setAse(data || null);
            return _context6.a(2, data || null);
          case 3:
            _context6.p = 3;
            _t2 = _context6.v;
            setAse(null);
            return _context6.a(2, null);
        }
      }, _callee6, null, [[1, 3]]);
    }));
    return function loadAse() {
      return _ref11.apply(this, arguments);
    };
  }();
  useEffect(function () {
    var ch = null;
    var c = getCdmClient();
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var _yield$c$from$select, data, _t3;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            if (c) {
              _context7.n = 1;
              break;
            }
            setAse(null);
            return _context7.a(2);
          case 1:
            _context7.p = 1;
            _context7.n = 2;
            return c.from('org_directory').select('*');
          case 2:
            _yield$c$from$select = _context7.v;
            data = _yield$c$from$select.data;
            setPoPeople((data || []).filter(function (o) {
              return /po|跟单|order/i.test(o.system || o.dept || o.source_system || '');
            }));
            _context7.n = 4;
            break;
          case 3:
            _context7.p = 3;
            _t3 = _context7.v;
          case 4:
            _context7.n = 5;
            return loadAse();
          case 5:
            try {
              ch = c.channel('ase_collab_' + event.id).on('postgres_changes', {
                event: '*',
                schema: 'public',
                table: 'aftersales_events',
                filter: 'id=eq.' + event.id
              }, function () {
                return loadAse();
              }).subscribe();
            } catch (e) {}
          case 6:
            return _context7.a(2);
        }
      }, _callee7, null, [[1, 3]]);
    }))();
    return function () {
      if (ch && c) {
        try {
          c.removeChannel(ch);
        } catch (e) {}
      }
    };
  }, [event.id]);
  var send = /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var pick, ok, row;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            setSending(true);
            pick = poPeople.find(function (p) {
              return (p.user_id || p.id) === assignee;
            });
            _context8.n = 1;
            return pushAseToOrders(event, user, pick ? {
              assigneeId: pick.user_id || pick.id,
              assigneeName: pick.display_name || pick.name
            } : {});
          case 1:
            ok = _context8.v;
            setSending(false);
            if (!ok) {
              _context8.n = 3;
              break;
            }
            toast && toast('✓ 已转跟单 · 工单已发(含售后详情链接)');
            _context8.n = 2;
            return loadAse();
          case 2:
            row = _context8.v;
            if (!row) alert('工单已发给跟单,但共享表里没读回这条售后。\n\n通常是「跨部门库」还没建 aftersales_events 表或读取权限(RLS)未开。请让主管在跨部门库跑 aftersales_events 建表 SQL 后重开本面板,即可看到完整协作流程(跟单回填/时间线/确认完成)。');
          case 3:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    return function send() {
      return _ref13.apply(this, arguments);
    };
  }();
  var fmt = function fmt(ms) {
    return ms ? new Date(ms).toLocaleString('zh-CN', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }) : '';
  };
  var addNote = /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var c, tl, _yield$c$from$update$, error;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            if (note.trim()) {
              _context9.n = 1;
              break;
            }
            return _context9.a(2);
          case 1:
            setBusy(true);
            c = getCdmClient();
            tl = [].concat(_toConsumableArray(ase && ase.timeline || []), [{
              ts: Date.now(),
              by: user.name,
              role: 'cs',
              note: note.trim()
            }]);
            _context9.n = 2;
            return c.from('aftersales_events').update({
              timeline: tl,
              updated_at: new Date().toISOString()
            }).eq('id', event.id);
          case 2:
            _yield$c$from$update$ = _context9.v;
            error = _yield$c$from$update$.error;
            setBusy(false);
            if (!error) {
              _context9.n = 3;
              break;
            }
            alert('追加失败:' + error.message);
            return _context9.a(2);
          case 3:
            setNote('');
            toast && toast('✓ 已追加跟进');
            loadAse();
          case 4:
            return _context9.a(2);
        }
      }, _callee9);
    }));
    return function addNote() {
      return _ref14.apply(this, arguments);
    };
  }();
  var confirmDone = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
      var fr, c, tl, _yield$c$from$update$2, error;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            _context0.n = 1;
            return wsPrompt('确认完成 — 最终处理结果(可留空):', ase && ase.final_resolution || '');
          case 1:
            fr = _context0.v;
            if (!(fr === null)) {
              _context0.n = 2;
              break;
            }
            return _context0.a(2);
          case 2:
            setBusy(true);
            c = getCdmClient();
            tl = [].concat(_toConsumableArray(ase && ase.timeline || []), [{
              ts: Date.now(),
              by: user.name,
              role: 'cs',
              note: '✅ 客服确认完成' + (fr ? ' · ' + fr : '')
            }]);
            _context0.n = 3;
            return c.from('aftersales_events').update({
              completed: true,
              completed_by: user.name,
              completed_at_ms: Date.now(),
              final_resolution: fr || null,
              status: '已完成',
              timeline: tl,
              updated_at: new Date().toISOString()
            }).eq('id', event.id);
          case 3:
            _yield$c$from$update$2 = _context0.v;
            error = _yield$c$from$update$2.error;
            setBusy(false);
            if (!error) {
              _context0.n = 4;
              break;
            }
            alert('确认失败:' + error.message);
            return _context0.a(2);
          case 4:
            toast && toast('✓ 已确认完成');
            loadAse();
            onDone && onDone();
          case 5:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    return function confirmDone() {
      return _ref15.apply(this, arguments);
    };
  }();
  var isVid = function isVid(u) {
    return /\.(mp4|webm|mov|avi|m4v)(\?|$)/i.test(u || '');
  };
  var commImgs = ase && (ase.communication_images || []) || [];
  var timeline = (ase && ase.timeline || []).slice().sort(function (a, b) {
    return (a.ts || 0) - (b.ts || 0);
  });
  var roleLabel = function roleLabel(r) {
    return r === 'po' ? '跟单' : r === 'cs' ? '客服' : r || '';
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.45)',
      zIndex: 100002,
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
      maxWidth: 560,
      maxHeight: '88vh',
      overflowY: 'auto',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      marginBottom: 4
    }
  }, "\uD83D\uDD01 \u8DDF\u5355\u534F\u4F5C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginBottom: 14
    }
  }, event.order_ref, " \xB7 ", event.product_name || event.issue_detail || ''), ase === undefined ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      textAlign: 'center',
      color: 'var(--ink-4)',
      fontSize: 13
    }
  }, "\u52A0\u8F7D\u4E2D\u2026") : ase === null ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 6
    }
  }, "\u6307\u5B9A\u8DDF\u5355\u63A5\u6536\u4EBA"), /*#__PURE__*/React.createElement("select", {
    value: assignee,
    onChange: function onChange(e) {
      return setAssignee(e.target.value);
    },
    style: {
      width: '100%',
      padding: '8px 10px',
      fontSize: 14,
      border: '1px solid var(--line)',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\uD83E\uDD16 \u81EA\u52A8(\u7559\u7A7A \u2192 \u8DDF\u5355\u4E3B\u7BA1\u5206\u914D;\u8BE5\u7F51\u7AD9\u6709\u8D1F\u8D23\u4EBA\u5219\u81EA\u52A8\u6D3E\u7ED9\u4ED6)"), poPeople.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p.user_id || p.id,
      value: p.user_id || p.id
    }, p.display_name || p.name);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 8,
      lineHeight: 1.6
    }
  }, "\u4F1A\u628A\u552E\u540E\u4E8B\u4EF6\u5199\u5165\u5171\u4EAB\u8868,\u5E76\u53D1\u8DE8\u90E8\u95E8\u5DE5\u5355\u7ED9\u8DDF\u5355(\u5E26\u552E\u540E\u8BE6\u60C5\u94FE\u63A5)\u3002\u8DDF\u5355\u70B9\u5F00\u5373\u53EF\u56DE\u586B\u4EA7\u54C1\u6539\u8FDB\u610F\u89C1/\u72B6\u6001/\u6C9F\u901A\u56FE\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn-sec",
    style: {
      padding: '7px 14px'
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    disabled: sending,
    className: "btn-pri",
    style: {
      padding: '7px 16px'
    }
  }, sending ? '发送中…' : '转跟单并发工单'))) : /*#__PURE__*/React.createElement(React.Fragment, null, function () {
    var steps = [{
      label: '已转跟单',
      done: true
    }, {
      label: '跟单处理',
      done: !!(ase.assignee_name || ase.assigned_to || ase.assigned_to_name)
    }, {
      label: '跟单回填意见',
      done: !!(ase.improvement_suggestion || ase.improvement_status)
    }, {
      label: '客服确认完成',
      done: !!ase.completed
    }];
    var curIdx = ase.completed ? 3 : steps[2].done ? 2 : steps[1].done ? 1 : 0;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 14
      }
    }, steps.map(function (s, i) {
      return /*#__PURE__*/React.createElement(React.Fragment, {
        key: i
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          width: 24,
          height: 24,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          fontWeight: 700,
          background: s.done ? '#16a34a' : i === curIdx ? '#0071e3' : '#e5e7eb',
          color: s.done || i === curIdx ? 'white' : 'var(--ink-4)'
        }
      }, s.done ? '✓' : i + 1), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 9,
          marginTop: 3,
          color: s.done ? '#16a34a' : i === curIdx ? '#0071e3' : 'var(--ink-4)',
          fontWeight: 600,
          textAlign: 'center',
          width: 56,
          lineHeight: 1.2
        }
      }, s.label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          height: 2,
          background: steps[i + 1].done ? '#16a34a' : '#e5e7eb',
          marginTop: -14
        }
      }));
    }));
  }(), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginBottom: 10,
      padding: '6px 10px',
      background: '#f8fafc',
      borderRadius: 7
    }
  }, "\uD83D\uDC65 \u63A5\u6536\u8DDF\u5355:", ase.assignee_name || ase.assigned_to_name || '跟单主管分配', " \xB7 \u8DDF\u5355\u4E0E\u6240\u6709\u5BA2\u670D\u90FD\u80FD\u6253\u5F00\u6B64\u9762\u677F\u770B\u8FDB\u5C55\u3001\u56DE\u586B\u3001\u7559\u8A00\u3002"), ase.completed && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '7px 12px',
      background: '#dcfce7',
      color: '#15803d',
      borderRadius: 8,
      fontSize: 12,
      fontWeight: 600,
      marginBottom: 12
    }
  }, "\u2705 \u5DF2\u5B8C\u6210 \xB7 ", ase.completed_by, " \xB7 ", fmt(ase.completed_at_ms), ase.final_resolution ? ' · ' + ase.final_resolution : ''), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff7ed',
      border: '1px solid #fed7aa',
      borderRadius: 10,
      padding: '12px 14px',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: '#9a3412',
      marginBottom: 8
    }
  }, "\uD83C\uDFED \u8DDF\u5355\u56DE\u586B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u4EA7\u54C1\u6539\u8FDB\u72B6\u6001:"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      borderRadius: 8,
      fontSize: 11,
      fontWeight: 600,
      background: ase.improvement_status ? '#dbeafe' : '#f5f5f7',
      color: ase.improvement_status ? '#1e40af' : 'var(--ink-3)'
    }
  }, ase.improvement_status || '待跟单处理')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      marginBottom: commImgs.length ? 8 : 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u4EA7\u54C1\u6539\u8FDB\u610F\u89C1:"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink)'
    }
  }, ase.improvement_suggestion || '(跟单暂未填写)')), commImgs.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, commImgs.map(function (u, i) {
    return isVid(u) ? /*#__PURE__*/React.createElement("video", {
      key: i,
      src: u,
      onClick: function onClick() {
        return setPreview({
          url: u,
          vid: true
        });
      },
      style: {
        width: 48,
        height: 48,
        objectFit: 'cover',
        borderRadius: 6,
        border: '1px solid var(--line)',
        cursor: 'zoom-in',
        background: '#000'
      }
    }) : /*#__PURE__*/React.createElement("img", {
      key: i,
      src: u,
      alt: "",
      onClick: function onClick() {
        return setPreview({
          url: u
        });
      },
      style: {
        width: 48,
        height: 48,
        objectFit: 'cover',
        borderRadius: 6,
        border: '1px solid var(--line)',
        cursor: 'zoom-in'
      }
    });
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      marginBottom: 8
    }
  }, "\uD83D\uDD52 \u65F6\u95F4\u7EBF"), timeline.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-4)'
    }
  }, "\u6682\u65E0\u8DDF\u8FDB\u8BB0\u5F55") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, timeline.map(function (t, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        fontSize: 12,
        padding: '6px 10px',
        background: '#f8fafc',
        borderRadius: 7,
        borderLeft: "3px solid ".concat(t.role === 'po' ? '#f97316' : '#0071e3')
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: t.role === 'po' ? '#9a3412' : '#0369a1'
      }
    }, roleLabel(t.role), " \xB7 ", t.by || '?'), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)',
        marginLeft: 6
      }
    }, fmt(t.ts)), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--ink-2)',
        marginTop: 2
      }
    }, t.note || t.action || ''));
  }))), !ase.completed && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px dashed var(--line)',
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: note,
    onChange: function onChange(e) {
      return setNote(e.target.value);
    },
    placeholder: "\u8FFD\u52A0\u8DDF\u8FDB / \u7ED9\u8DDF\u5355\u7684\u7559\u8A00\u2026",
    rows: 2,
    style: {
      width: '100%',
      padding: '8px 10px',
      fontSize: 13,
      border: '1px solid var(--line)',
      borderRadius: 8,
      resize: 'vertical',
      fontFamily: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 8,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: confirmDone,
    disabled: busy,
    style: {
      padding: '7px 14px',
      background: '#16a34a',
      color: 'white',
      border: 'none',
      borderRadius: 7,
      cursor: 'pointer',
      fontWeight: 600,
      fontSize: 13
    }
  }, "\u2705 \u786E\u8BA4\u5B8C\u6210"), /*#__PURE__*/React.createElement("button", {
    onClick: addNote,
    disabled: busy || !note.trim(),
    className: "btn-pri",
    style: {
      padding: '7px 16px'
    }
  }, "\u8FFD\u52A0\u8DDF\u8FDB"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn-sec",
    style: {
      padding: '7px 14px'
    }
  }, "\u5173\u95ED")))), preview && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setPreview(null);
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.85)',
      zIndex: 100003,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      cursor: 'zoom-out'
    }
  }, preview.vid ? /*#__PURE__*/React.createElement("video", {
    src: preview.url,
    controls: true,
    autoPlay: true,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      maxWidth: '92vw',
      maxHeight: '92vh',
      background: '#000',
      borderRadius: 8
    }
  }) : /*#__PURE__*/React.createElement("img", {
    src: preview.url,
    alt: "",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      maxWidth: '92vw',
      maxHeight: '92vh',
      borderRadius: 8
    }
  })));
};
var AftersalesTable = function AftersalesTable(_ref16) {
  var items = _ref16.items,
    employees = _ref16.employees,
    suppliers = _ref16.suppliers,
    user = _ref16.user,
    isAdmin = _ref16.isAdmin,
    onEdit = _ref16.onEdit,
    onDelete = _ref16.onDelete,
    onUpdateStatus = _ref16.onUpdateStatus;
  var _useState55 = useState(null),
    _useState56 = _slicedToArray(_useState55, 2),
    openImageId = _useState56[0],
    setOpenImageId = _useState56[1];
  var _useState57 = useState(null),
    _useState58 = _slicedToArray(_useState57, 2),
    prodPreview = _useState58[0],
    setProdPreview = _useState58[1];
  var _useState59 = useState(null),
    _useState60 = _slicedToArray(_useState59, 2),
    aseToOrders = _useState60[0],
    setAseToOrders = _useState60[1];
  if (items.length === 0) return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-12 fade-in",
    style: {
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, "\uD83C\uDF89 \u6682\u65E0\u7B26\u5408\u6761\u4EF6\u7684\u552E\u540E\u8BB0\u5F55");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl overflow-hidden fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      minWidth: '1200px'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: '36px'
    }
  }, "#"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '85px'
    }
  }, "\u65E5\u671F"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '120px'
    }
  }, "\u8BA2\u5355\u53F7"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '100px'
    }
  }, "\u4F9B\u5E94\u5546"), /*#__PURE__*/React.createElement("th", null, "\u552E\u540E\u539F\u56E0"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '100px'
    }
  }, "\u56FE\u7247"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '90px'
    }
  }, "\u4EA7\u54C1\u56FE"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '100px'
    }
  }, "\u5DF2\u5904\u7406\u65E5\u671F"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '90px'
    }
  }, "\u521B\u5EFA\u4EBA"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '110px'
    }
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '80px'
    }
  }, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, items.map(function (e, idx) {
    var issue = ISSUE_TYPES.find(function (i) {
      return i.key === e.issue_type;
    });
    var status = AFTERSALE_STATUSES.find(function (s) {
      return s.key === e.status;
    });
    var creator = employees.find(function (emp) {
      return emp.id === e.created_by;
    });
    var dispDate = (e.created_at || '').slice(5, 10).replace('-', '.');
    var remindDate = e.last_remind_date ? "".concat(e.last_remind_date.slice(5).replace('-', '.'), "\u5DF2\u50AC") : '';
    var returnDate = e.return_date ? "".concat(e.return_date.slice(5).replace('-', '.'), "\u5DF2\u56DE") : '';
    return /*#__PURE__*/React.createElement("tr", {
      key: e.id
    }, /*#__PURE__*/React.createElement("td", null, idx + 1), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12
      }
    }, dispDate), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--ink)'
      }
    }, /*#__PURE__*/React.createElement(OrderRefLink, {
      orderNo: e.order_ref
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12
      }
    }, e.supplier_name || '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12,
        lineHeight: 1.4
      }
    }, issue && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 5px',
        background: issue.color + '15',
        color: issue.color,
        borderRadius: 3,
        fontSize: 10,
        fontWeight: 600,
        marginRight: 4
      }
    }, issue.label, e.issue_type === 'other' && e.issue_type_custom ? ": ".concat(e.issue_type_custom) : ''), e.damaged_part && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)',
        marginRight: 4
      }
    }, "\xB7 ", e.damaged_part), e.issue_detail && /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--ink-2)',
        marginTop: 2,
        fontSize: 11,
        maxWidth: '400px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, e.issue_detail)), /*#__PURE__*/React.createElement("td", null, e.attachments && e.attachments.length > 0 ? function () {
      var a0 = e.attachments[0] || {};
      var u0 = a0.url || a0.dataUrl || a0.data || '';
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 4
        }
      }, u0 ? /*#__PURE__*/React.createElement("img", {
        src: u0,
        alt: "",
        style: {
          width: 40,
          height: 40,
          objectFit: 'cover',
          borderRadius: 5,
          border: '1px solid var(--line)',
          cursor: 'zoom-in'
        }
      }) : null, (e.attachments.length > 1 || !u0) && /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setOpenImageId(e.id);
        },
        title: "\u67E5\u770B\u5168\u90E8\u56FE\u7247",
        style: {
          padding: '3px 6px',
          background: '#f0f9ff',
          color: '#0369a1',
          border: '1px solid #7dd3fc',
          borderRadius: 5,
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 11,
          fontWeight: 600
        }
      }, "\uD83D\uDCF7 ", e.attachments.length));
    }() : '-'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(OrderProductThumb, {
      orderNo: e.order_ref,
      onPreview: setProdPreview
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 11,
        color: 'var(--ink-2)'
      }
    }, remindDate && /*#__PURE__*/React.createElement("div", null, remindDate), returnDate && /*#__PURE__*/React.createElement("div", {
      style: {
        color: '#16a34a'
      }
    }, returnDate)), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, (creator === null || creator === void 0 ? void 0 : creator.name) || e.created_by_name || '?'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("select", {
      value: e.status,
      onChange: function onChange(ev) {
        return onUpdateStatus(e.id, ev.target.value, ev.target.value === 'reminded' ? {
          last_remind_date: new Date().toISOString().slice(0, 10)
        } : ev.target.value === 'returned' ? {
          return_date: new Date().toISOString().slice(0, 10)
        } : {});
      },
      style: {
        padding: '3px 6px',
        fontSize: 11,
        border: '1px solid ' + ((status === null || status === void 0 ? void 0 : status.color) || 'var(--line)'),
        borderRadius: 4,
        background: (status === null || status === void 0 ? void 0 : status.bg) || 'white',
        color: (status === null || status === void 0 ? void 0 : status.color) || 'var(--ink-2)',
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, AFTERSALE_STATUSES.map(function (s) {
      return /*#__PURE__*/React.createElement("option", {
        key: s.key,
        value: s.key
      }, s.label);
    }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 2
      }
    }, e.status !== 'closed' && e.status !== 'customer_refund' && /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              _context1.n = 1;
              return wsConfirm("\u5C06\u300C".concat(e.order_ref, "\u300D\u6807\u8BB0\u4E3A\u5DF2\u5B8C\u6210?"));
            case 1:
              if (!_context1.v) {
                _context1.n = 2;
                break;
              }
              onUpdateStatus(e.id, 'closed');
            case 2:
              return _context1.a(2);
          }
        }, _callee1);
      })),
      className: "btn-ghost",
      style: {
        padding: '3px 6px',
        fontSize: 11,
        color: '#16a34a'
      },
      title: "\u6807\u8BB0\u5DF2\u5B8C\u6210"
    }, "\u2713"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setAseToOrders(e);
      },
      className: "btn-ghost",
      style: {
        padding: '3px 6px',
        fontSize: 11,
        color: '#c2410c'
      },
      title: "\u8DDF\u5355\u534F\u4F5C(\u8F6C\u5355 / \u770B\u8DDF\u5355\u8FDB\u5C55 / \u786E\u8BA4\u5B8C\u6210)"
    }, "\uD83D\uDD01"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onEdit(e);
      },
      className: "btn-ghost",
      style: {
        padding: '3px 6px',
        fontSize: 11
      },
      title: "\u7F16\u8F91"
    }, "\u270F\uFE0F"), (isAdmin || e.created_by === user.id) && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDelete(e.id);
      },
      className: "btn-ghost",
      style: {
        padding: '3px 6px',
        fontSize: 11,
        color: 'var(--bad)'
      },
      title: "\u5220\u9664"
    }, "\uD83D\uDDD1"))));
  }))))), openImageId && /*#__PURE__*/React.createElement(ImageGalleryModal, {
    event: items.find(function (e) {
      return e.id === openImageId;
    }),
    onClose: function onClose() {
      return setOpenImageId(null);
    }
  }), prodPreview && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setProdPreview(null);
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
    src: prodPreview,
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
  })), aseToOrders && /*#__PURE__*/React.createElement(AseToOrdersModal, {
    event: aseToOrders,
    user: user,
    onClose: function onClose() {
      return setAseToOrders(null);
    },
    onDone: function onDone() {
      return setAseToOrders(null);
    },
    toast: typeof toast !== 'undefined' ? toast : function (m) {}
  }));
};

// ============================================================
// 补件追踪表格
// ============================================================
var RefillsTable = function RefillsTable(_ref18) {
  var items = _ref18.items,
    employees = _ref18.employees,
    suppliers = _ref18.suppliers,
    user = _ref18.user,
    isAdmin = _ref18.isAdmin,
    onEdit = _ref18.onEdit,
    onDelete = _ref18.onDelete,
    onUpdateStatus = _ref18.onUpdateStatus;
  var _useState61 = useState(null),
    _useState62 = _slicedToArray(_useState61, 2),
    openImageId = _useState62[0],
    setOpenImageId = _useState62[1];
  var _useState63 = useState(null),
    _useState64 = _slicedToArray(_useState63, 2),
    prodPreview = _useState64[0],
    setProdPreview = _useState64[1];
  if (items.length === 0) return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-12 fade-in",
    style: {
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, "\uD83D\uDCE6 \u6682\u65E0\u7B26\u5408\u6761\u4EF6\u7684\u8865\u4EF6\u8BB0\u5F55");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl overflow-hidden fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      minWidth: '1100px'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: '36px'
    }
  }, "#"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '85px'
    }
  }, "\u65E5\u671F"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '120px'
    }
  }, "\u8BA2\u5355\u53F7"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '100px'
    }
  }, "\u4F9B\u5E94\u5546"), /*#__PURE__*/React.createElement("th", null, "\u8865\u4EF6\u6E05\u5355"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '80px'
    }
  }, "\u56FE\u7247"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '90px'
    }
  }, "\u4EA7\u54C1\u56FE"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '95px'
    }
  }, "\u9884\u8BA1\u53D1\u8D27"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '95px'
    }
  }, "\u5B9E\u9645\u53D1\u8D27"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '90px'
    }
  }, "\u521B\u5EFA\u4EBA"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '95px'
    }
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '80px'
    }
  }, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, items.map(function (e, idx) {
    var status = REFILL_STATUSES.find(function (s) {
      return s.key === e.status;
    });
    var creator = employees.find(function (emp) {
      return emp.id === e.created_by;
    });
    var dispDate = (e.created_at || '').slice(5, 10).replace('-', '.');
    var itemsList = (e.items || []).map(function (it) {
      return "".concat(it.item || '?', " \xD7 ").concat(it.qty || 1).concat(it.unit || '');
    }).join('，');
    return /*#__PURE__*/React.createElement("tr", {
      key: e.id
    }, /*#__PURE__*/React.createElement("td", null, idx + 1), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12
      }
    }, dispDate), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(OrderRefLink, {
      orderNo: e.order_ref
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12
      }
    }, e.supplier_name || '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12,
        lineHeight: 1.4
      }
    }, itemsList || '-'), /*#__PURE__*/React.createElement("td", null, e.attachments && e.attachments.length > 0 ? function () {
      var a0 = e.attachments[0] || {};
      var u0 = a0.url || a0.dataUrl || a0.data || '';
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 4
        }
      }, u0 ? /*#__PURE__*/React.createElement("img", {
        src: u0,
        alt: "",
        style: {
          width: 40,
          height: 40,
          objectFit: 'cover',
          borderRadius: 5,
          border: '1px solid var(--line)',
          cursor: 'zoom-in'
        }
      }) : null, (e.attachments.length > 1 || !u0) && /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setOpenImageId(e.id);
        },
        title: "\u67E5\u770B\u5168\u90E8\u56FE\u7247",
        style: {
          padding: '3px 6px',
          background: '#f0f9ff',
          color: '#0369a1',
          border: '1px solid #7dd3fc',
          borderRadius: 5,
          cursor: 'pointer',
          fontSize: 11,
          fontWeight: 600,
          fontFamily: 'inherit'
        }
      }, "\uD83D\uDCF7 ", e.attachments.length));
    }() : '-'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(OrderProductThumb, {
      orderNo: e.order_ref,
      onPreview: setProdPreview
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 11,
        color: 'var(--ink-2)'
      }
    }, e.expected_ship_date || '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 11,
        color: '#16a34a',
        fontWeight: e.actual_ship_date ? 600 : 400
      }
    }, e.actual_ship_date || '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, (creator === null || creator === void 0 ? void 0 : creator.name) || e.created_by_name || '?'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("select", {
      value: e.status,
      onChange: function onChange(ev) {
        return onUpdateStatus(e.id, ev.target.value);
      },
      style: {
        padding: '3px 6px',
        fontSize: 11,
        border: '1px solid ' + ((status === null || status === void 0 ? void 0 : status.color) || 'var(--line)'),
        borderRadius: 4,
        background: ((status === null || status === void 0 ? void 0 : status.color) || 'gray') + '15',
        color: (status === null || status === void 0 ? void 0 : status.color) || 'var(--ink-2)',
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, REFILL_STATUSES.map(function (s) {
      return /*#__PURE__*/React.createElement("option", {
        key: s.key,
        value: s.key
      }, s.label);
    }))), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 2
      }
    }, e.status !== 'delivered' && e.status !== 'cancelled' && /*#__PURE__*/React.createElement("button", {
      onClick: /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              _context10.n = 1;
              return wsConfirm("\u5C06\u300C".concat(e.order_ref, "\u300D\u6807\u8BB0\u4E3A\u5DF2\u7B7E\u6536?"));
            case 1:
              if (!_context10.v) {
                _context10.n = 2;
                break;
              }
              onUpdateStatus(e.id, 'delivered');
            case 2:
              return _context10.a(2);
          }
        }, _callee10);
      })),
      className: "btn-ghost",
      style: {
        padding: '3px 6px',
        fontSize: 11,
        color: '#16a34a'
      },
      title: "\u6807\u8BB0\u5DF2\u7B7E\u6536(\u5B8C\u6210)"
    }, "\u2713"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onEdit(e);
      },
      className: "btn-ghost",
      style: {
        padding: '3px 6px',
        fontSize: 11
      }
    }, "\u270F\uFE0F"), (isAdmin || e.created_by === user.id) && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDelete(e.id);
      },
      className: "btn-ghost",
      style: {
        padding: '3px 6px',
        fontSize: 11,
        color: 'var(--bad)'
      }
    }, "\uD83D\uDDD1"))));
  }))))), openImageId && /*#__PURE__*/React.createElement(ImageGalleryModal, {
    event: items.find(function (e) {
      return e.id === openImageId;
    }),
    onClose: function onClose() {
      return setOpenImageId(null);
    }
  }));
};

// ============================================================
// 退款管理表格 + 两步审核
// ============================================================
var RefundsTable = function RefundsTable(_ref20) {
  var items = _ref20.items,
    employees = _ref20.employees,
    suppliers = _ref20.suppliers,
    user = _ref20.user,
    isFinance = _ref20.isFinance,
    canRefundReview = _ref20.canRefundReview,
    onEdit = _ref20.onEdit,
    onDelete = _ref20.onDelete,
    onReview = _ref20.onReview;
  var _useState65 = useState(null),
    _useState66 = _slicedToArray(_useState65, 2),
    openImageId = _useState66[0],
    setOpenImageId = _useState66[1];
  // 顶部汇总
  var _useState67 = useState(null),
    _useState68 = _slicedToArray(_useState67, 2),
    prodPreview = _useState68[0],
    setProdPreview = _useState68[1];
  var summary = useMemo(function () {
    var byStatus = items.reduce(function (acc, r) {
      acc[r.status] = (acc[r.status] || 0) + 1;
      return acc;
    }, {});
    var totalPending = items.filter(function (r) {
      return r.status === 'pending';
    }).reduce(function (s, r) {
      return s + parseFloat(r.amount || 0);
    }, 0);
    var totalCompleted = items.filter(function (r) {
      return r.status === 'completed';
    }).reduce(function (s, r) {
      return s + parseFloat(r.amount || 0);
    }, 0);
    return {
      byStatus: byStatus,
      totalPending: totalPending,
      totalCompleted: totalCompleted
    };
  }, [items]);
  if (items.length === 0) return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-12 fade-in",
    style: {
      textAlign: 'center',
      color: 'var(--ink-3)',
      fontSize: 13
    }
  }, "\uD83D\uDCB0 \u6682\u65E0\u7B26\u5408\u6761\u4EF6\u7684\u9000\u6B3E\u8BB0\u5F55");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-xl p-3",
    style: {
      background: '#fef9c3',
      border: '1px solid #fde68a'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#854d0e'
    }
  }, "\u5F85\u5BA1\u6838"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: '#a16207'
    }
  }, summary.byStatus.pending || 0), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#854d0e'
    }
  }, "USD ", summary.totalPending.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-xl p-3",
    style: {
      background: '#e0f2fe',
      border: '1px solid #bae6fd'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#075985'
    }
  }, "\u5DF2\u5BA1\u6838\uFF08\u5F85\u9000\uFF09"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: '#0369a1'
    }
  }, summary.byStatus.approved || 0)), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-xl p-3",
    style: {
      background: '#dcfce7',
      border: '1px solid #86efac'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#14532d'
    }
  }, "\u5DF2\u5B8C\u6210"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: '#15803d'
    }
  }, summary.byStatus.completed || 0), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#14532d'
    }
  }, "USD ", summary.totalCompleted.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-xl p-3",
    style: {
      background: '#fef2f2',
      border: '1px solid #fca5a5'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#7f1d1d'
    }
  }, "\u5DF2\u62D2\u7EDD"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: '#991b1b'
    }
  }, summary.byStatus.rejected || 0))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl overflow-hidden fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      minWidth: '1200px'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: '36px'
    }
  }, "#"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '85px'
    }
  }, "\u65E5\u671F"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '110px'
    }
  }, "\u8BA2\u5355\u53F7"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '90px'
    }
  }, "\u521B\u5EFA\u4EBA"), /*#__PURE__*/React.createElement("th", null, "\u9000\u6B3E\u539F\u56E0"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '100px'
    }
  }, "\u7C7B\u578B"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '90px'
    }
  }, "\u91D1\u989D"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '130px'
    }
  }, "\u652F\u4ED8\u65B9\u5F0F"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '70px'
    }
  }, "\u56FE\u7247"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '90px'
    }
  }, "\u4EA7\u54C1\u56FE"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '95px'
    }
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: '110px'
    }
  }, "\u64CD\u4F5C"))), /*#__PURE__*/React.createElement("tbody", null, items.map(function (r, idx) {
    var type = REFUND_TYPES.find(function (t) {
      return t.key === r.refund_type;
    });
    var status = REFUND_STATUSES.find(function (s) {
      return s.key === r.status;
    });
    var pay = REFUND_PAYMENT_METHODS.find(function (p) {
      return p.key === r.payment_method;
    });
    var creator = employees.find(function (emp) {
      return emp.id === r.created_by;
    });
    var dispDate = (r.created_at || '').slice(5, 10).replace('-', '.');
    return /*#__PURE__*/React.createElement("tr", {
      key: r.id
    }, /*#__PURE__*/React.createElement("td", null, idx + 1), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12
      }
    }, dispDate), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(OrderRefLink, {
      orderNo: r.order_ref
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, (creator === null || creator === void 0 ? void 0 : creator.name) || r.created_by_name || '?'), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 12,
        lineHeight: 1.4
      }
    }, r.product_name && /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        color: 'var(--ink-2)'
      }
    }, r.product_name), /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--ink-2)',
        fontSize: 11,
        maxWidth: '400px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, r.refund_reason)), /*#__PURE__*/React.createElement("td", null, type && /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '2px 8px',
        background: type.bg,
        color: type.color,
        borderRadius: 10,
        fontSize: 10,
        fontWeight: 600
      }
    }, type.label, r.refund_type === 'other' && r.refund_type_custom ? ": ".concat(r.refund_type_custom) : '')), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: '#dc2626'
      }
    }, r.currency, " ", parseFloat(r.amount).toFixed(2)), /*#__PURE__*/React.createElement("td", {
      style: {
        fontSize: 11
      }
    }, pay && /*#__PURE__*/React.createElement("span", {
      style: {
        color: pay.color,
        fontWeight: 500
      }
    }, pay.label, r.payment_method === 'other' && r.payment_method_custom ? ": ".concat(r.payment_method_custom) : '')), /*#__PURE__*/React.createElement("td", null, r.attachments && r.attachments.length > 0 ? function () {
      var a0 = r.attachments[0] || {};
      var u0 = a0.url || a0.dataUrl || a0.data || '';
      return /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 4
        }
      }, u0 ? /*#__PURE__*/React.createElement("img", {
        src: u0,
        alt: "",
        style: {
          width: 40,
          height: 40,
          objectFit: 'cover',
          borderRadius: 5,
          border: '1px solid var(--line)',
          cursor: 'zoom-in'
        }
      }) : null, (r.attachments.length > 1 || !u0) && /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return setOpenImageId(r.id);
        },
        title: "\u67E5\u770B\u5168\u90E8\u56FE\u7247",
        style: {
          padding: '3px 6px',
          background: '#f0f9ff',
          color: '#0369a1',
          border: '1px solid #7dd3fc',
          borderRadius: 5,
          cursor: 'pointer',
          fontSize: 11,
          fontWeight: 600,
          fontFamily: 'inherit'
        }
      }, "\uD83D\uDCF7 ", r.attachments.length));
    }() : '-'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(OrderProductThumb, {
      orderNo: r.order_ref,
      onPreview: setProdPreview
    })), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '3px 8px',
        background: status === null || status === void 0 ? void 0 : status.bg,
        color: status === null || status === void 0 ? void 0 : status.color,
        borderRadius: 5,
        fontSize: 11,
        fontWeight: 600
      }
    }, status === null || status === void 0 ? void 0 : status.label)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 2,
        flexWrap: 'wrap'
      }
    }, (canRefundReview !== null && canRefundReview !== void 0 ? canRefundReview : isFinance) && r.status === 'pending' && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onReview(r);
      },
      className: "btn-pri",
      style: {
        padding: '3px 8px',
        fontSize: 11
      },
      title: "\u5BA1\u6838"
    }, "\u5BA1\u6838"), (canRefundReview !== null && canRefundReview !== void 0 ? canRefundReview : isFinance) && r.status === 'approved' && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onReview(r);
      },
      className: "btn-pri",
      style: {
        padding: '3px 8px',
        fontSize: 11,
        background: '#16a34a'
      },
      title: "\u6807\u8BB0\u5DF2\u5B8C\u6210"
    }, "\u2713 \u5B8C\u6210"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onEdit(r);
      },
      className: "btn-ghost",
      style: {
        padding: '3px 6px',
        fontSize: 11
      }
    }, "\u270F\uFE0F"), (isFinance || r.created_by === user.id) && r.status === 'pending' && /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDelete(r.id);
      },
      className: "btn-ghost",
      style: {
        padding: '3px 6px',
        fontSize: 11,
        color: 'var(--bad)'
      }
    }, "\uD83D\uDDD1"))));
  }))))), openImageId && /*#__PURE__*/React.createElement(ImageGalleryModal, {
    event: items.find(function (e) {
      return e.id === openImageId;
    }),
    onClose: function onClose() {
      return setOpenImageId(null);
    }
  }), prodPreview && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setProdPreview(null);
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
    src: prodPreview,
    alt: "",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      maxWidth: '92vw',
      maxHeight: '92vh',
      borderRadius: 8
    }
  })));
};

// ============================================================
// 退款审核 modal (财务审批 + 完成)
// ============================================================
var RefundReviewModal = function RefundReviewModal(_ref21) {
  var refund = _ref21.refund,
    user = _ref21.user,
    onClose = _ref21.onClose,
    onSubmit = _ref21.onSubmit;
  var _useState69 = useState(''),
    _useState70 = _slicedToArray(_useState69, 2),
    notes = _useState70[0],
    setNotes = _useState70[1];
  var _useState71 = useState(''),
    _useState72 = _slicedToArray(_useState71, 2),
    externalRefundId = _useState72[0],
    setExternalRefundId = _useState72[1];
  var isApproveStage = refund.status === 'pending';
  var isCompleteStage = refund.status === 'approved';
  var type = REFUND_TYPES.find(function (t) {
    return t.key === refund.refund_type;
  });
  var pay = REFUND_PAYMENT_METHODS.find(function (p) {
    return p.key === refund.payment_method;
  });
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.55)',
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
      borderRadius: 14,
      maxWidth: 540,
      width: '100%',
      padding: 22,
      maxHeight: '90vh',
      overflowY: 'auto',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: '#dc2626'
    }
  }, "\uD83D\uDCB0 ", isApproveStage ? '审核退款' : '标记退款完成'), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: onClose,
    style: {
      padding: '4px 12px'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      background: '#fef2f2',
      border: '1px solid #fca5a5',
      borderRadius: 8,
      marginBottom: 14,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: '#7f1d1d'
    }
  }, "\u8BA2\u5355\uFF1A", refund.order_ref), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: '#dc2626'
    }
  }, refund.currency, " ", parseFloat(refund.amount).toFixed(2))), refund.product_name && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-2)',
      marginBottom: 4
    }
  }, refund.product_name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginBottom: 6
    }
  }, type && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: type.bg,
      color: type.color,
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, type.label), pay && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: pay.color + '20',
      color: pay.color,
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, pay.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#7f1d1d',
      whiteSpace: 'pre-wrap',
      lineHeight: 1.5
    }
  }, refund.refund_reason), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      marginTop: 6,
      borderTop: '1px dashed #fca5a5',
      paddingTop: 6
    }
  }, "\u521B\u5EFA\u4EBA\uFF1A", refund.created_by_name, " \xB7 ", (refund.created_at || '').slice(0, 10))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 6
    }
  }, isApproveStage ? '审核备注（拒绝时必填原因）' : '完成备注'), /*#__PURE__*/React.createElement("textarea", {
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
    placeholder: isApproveStage ? '可以填写审核意见或拒绝原因...' : '可以填写实际退款日期、备注等...',
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
  })), isCompleteStage && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 6
    }
  }, "\u5916\u90E8\u5E73\u53F0\u9000\u6B3E\u5355\u53F7\uFF08\u5982 Shopify/Stripe \u7684\u9000\u6B3E ID\uFF09"), /*#__PURE__*/React.createElement("input", {
    value: externalRefundId,
    onChange: function onChange(e) {
      return setExternalRefundId(e.target.value);
    },
    placeholder: "re_xxxxxxxxxx",
    style: {
      width: '100%',
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn-sec",
    style: {
      padding: '8px 16px'
    }
  }, "\u53D6\u6D88"), isApproveStage && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onSubmit(refund, 'reject', notes);
    },
    disabled: !notes.trim(),
    style: {
      padding: '8px 16px',
      background: '#fef2f2',
      color: '#dc2626',
      border: '1px solid #fca5a5',
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 13,
      opacity: notes.trim() ? 1 : 0.5
    }
  }, "\u2717 \u62D2\u7EDD"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onSubmit(refund, 'approve', notes);
    },
    style: {
      padding: '8px 16px',
      background: '#0369a1',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 13
    }
  }, "\u2713 \u5BA1\u6838\u901A\u8FC7")), isCompleteStage && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onSubmit(refund, 'complete', notes, {
        external_refund_id: externalRefundId
      });
    },
    style: {
      padding: '8px 16px',
      background: '#16a34a',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 13
    }
  }, "\u2713 \u6807\u8BB0\u9000\u6B3E\u5B8C\u6210")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)',
      marginTop: 12,
      lineHeight: 1.5,
      padding: '8px 10px',
      background: '#f9fafb',
      borderRadius: 6
    }
  }, "\uD83D\uDCA1 ", isApproveStage ? '审核通过后，请到 Shopify/Stripe 后台实际操作退款，完成后回到这里点 "✓ 完成"' : '标记完成后，本笔退款将计入月度统计。请确保 Shopify/Stripe 后台已经实际完成退款。')));
};

// ============================================================
// 图片图廊 modal (点击图片缩略图后弹出大图浏览)
// ============================================================
var ImageGalleryModal = function ImageGalleryModal(_ref22) {
  var event = _ref22.event,
    onClose = _ref22.onClose;
  var _useState73 = useState(0),
    _useState74 = _slicedToArray(_useState73, 2),
    activeIdx = _useState74[0],
    setActiveIdx = _useState74[1];
  if (!event || !event.attachments || event.attachments.length === 0) return null;
  var imgs = event.attachments;
  var current = imgs[activeIdx];
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.85)',
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
      maxWidth: '90vw',
      maxHeight: '90vh',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      minHeight: 0
    }
  }, imgs.length > 1 && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveIdx((activeIdx - 1 + imgs.length) % imgs.length);
    },
    style: {
      position: 'absolute',
      left: -50,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255,255,255,.2)',
      color: 'white',
      border: 'none',
      width: 40,
      height: 40,
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: 20
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("img", {
    src: current.url,
    style: {
      maxWidth: '100%',
      maxHeight: '80vh',
      objectFit: 'contain'
    }
  }), imgs.length > 1 && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setActiveIdx((activeIdx + 1) % imgs.length);
    },
    style: {
      position: 'absolute',
      right: -50,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(255,255,255,.2)',
      color: 'white',
      border: 'none',
      width: 40,
      height: 40,
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: 20
    }
  }, "\u203A")), imgs.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, imgs.map(function (im, i) {
    return /*#__PURE__*/React.createElement("img", {
      key: i,
      src: im.url,
      onClick: function onClick() {
        return setActiveIdx(i);
      },
      style: {
        width: 50,
        height: 50,
        objectFit: 'cover',
        borderRadius: 4,
        cursor: 'pointer',
        border: i === activeIdx ? '2px solid white' : '2px solid transparent',
        opacity: i === activeIdx ? 1 : 0.6
      }
    });
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'rgba(255,255,255,.8)',
      fontSize: 12
    }
  }, activeIdx + 1, " / ", imgs.length, " \xB7 ", current.label || '')));
};

// ============================================================
// 🆕 fix9b: 金额汇总组件 (退款 / 拒付)
// 时间筛选: 3/7/14/30/90 天 + 季度 + 年 + 自定义
// 显示: 总金额, 件数, 按网站分布, 按状态分布
// ============================================================
var AmountSummaryWidget = function AmountSummaryWidget(_ref23) {
  var title = _ref23.title,
    icon = _ref23.icon,
    color = _ref23.color,
    items = _ref23.items,
    statusLabels = _ref23.statusLabels,
    _ref23$statusKey = _ref23.statusKey,
    statusKey = _ref23$statusKey === void 0 ? 'status' : _ref23$statusKey,
    _ref23$amountKey = _ref23.amountKey,
    amountKey = _ref23$amountKey === void 0 ? 'amount' : _ref23$amountKey,
    getSite = _ref23.getSite,
    onClickStats = _ref23.onClickStats;
  var _useState75 = useState('7'),
    _useState76 = _slicedToArray(_useState75, 2),
    range = _useState76[0],
    setRange = _useState76[1]; // 字符串: '3'/'7'/'14'/'30'/'90'/'quarter'/'year'/'all'

  // 计算时间筛选范围
  var cutoffDate = useMemo(function () {
    var now = new Date();
    if (range === 'all') return null;
    if (range === 'year') {
      return new Date(now.getFullYear(), 0, 1); // 本年 1 月 1 日
    }
    if (range === 'quarter') {
      var q = Math.floor(now.getMonth() / 3);
      return new Date(now.getFullYear(), q * 3, 1); // 本季度起始
    }
    var days = parseInt(range, 10);
    var d = new Date(now);
    d.setDate(d.getDate() - days);
    return d;
  }, [range]);
  var filtered = useMemo(function () {
    if (!cutoffDate) return items || [];
    return (items || []).filter(function (it) {
      if (!it.created_at) return false;
      return new Date(it.created_at) >= cutoffDate;
    });
  }, [items, cutoffDate]);

  // 按货币累加(主要 USD,可能有 CNY/EUR 等)
  var totalsByCurrency = useMemo(function () {
    var m = {};
    filtered.forEach(function (it) {
      var cur = (it.currency || 'USD').toUpperCase();
      var amt = parseFloat(it[amountKey] || 0) || 0;
      if (!m[cur]) m[cur] = 0;
      m[cur] += amt;
    });
    return m;
  }, [filtered, amountKey]);

  // 按网站分布
  var byWebsite = useMemo(function () {
    var m = {};
    filtered.forEach(function (it) {
      var site = (getSite ? getSite(it) : it.site) || '(未填)';
      var amt = parseFloat(it[amountKey] || 0) || 0;
      var cur = (it.currency || 'USD').toUpperCase();
      if (!m[site]) m[site] = {
        count: 0,
        totals: {}
      };
      m[site].count++;
      if (!m[site].totals[cur]) m[site].totals[cur] = 0;
      m[site].totals[cur] += amt;
    });
    return Object.entries(m).map(function (_ref24) {
      var _ref25 = _slicedToArray(_ref24, 2),
        site = _ref25[0],
        v = _ref25[1];
      return _objectSpread({
        site: site
      }, v);
    }).sort(function (a, b) {
      return b.count - a.count;
    });
  }, [filtered, amountKey, getSite]);

  // 按状态分布
  var byStatus = useMemo(function () {
    var m = {};
    filtered.forEach(function (it) {
      var s = it[statusKey] || '(未填)';
      if (!m[s]) m[s] = 0;
      m[s]++;
    });
    return Object.entries(m).map(function (_ref26) {
      var _ref27 = _slicedToArray(_ref26, 2),
        k = _ref27[0],
        v = _ref27[1];
      return {
        status: k,
        count: v
      };
    });
  }, [filtered, statusKey]);
  var formatAmount = function formatAmount(cur, amt) {
    var sym = cur === 'USD' ? '$' : cur === 'EUR' ? '€' : cur === 'CNY' ? '¥' : cur === 'GBP' ? '£' : '';
    return "".concat(sym).concat(amt.toFixed(2)).concat(sym ? '' : ' ' + cur);
  };
  var rangeButtons = [{
    key: '3',
    label: '3 天'
  }, {
    key: '7',
    label: '7 天'
  }, {
    key: '14',
    label: '14 天'
  }, {
    key: '30',
    label: '30 天'
  }, {
    key: '90',
    label: '90 天'
  }, {
    key: 'quarter',
    label: '本季度'
  }, {
    key: 'year',
    label: '本年度'
  }, {
    key: 'all',
    label: '全部'
  }];

  // 计算 cutoff 描述文字
  var rangeDesc = function () {
    if (range === 'all') return '全部历史';
    if (range === 'year') return "".concat(new Date().getFullYear(), " \u5E74\u81F3\u4ECA");
    if (range === 'quarter') {
      var q = Math.floor(new Date().getMonth() / 3) + 1;
      return "".concat(new Date().getFullYear(), " \u5E74 Q").concat(q, " \u81F3\u4ECA");
    }
    return "\u6700\u8FD1 ".concat(range, " \u5929");
  }();
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4 fade-in",
    style: {
      borderLeft: "4px solid ".concat(color),
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: color,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, icon), title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, rangeDesc, " \xB7 \u5171 ", filtered.length, " \u7B14")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, rangeButtons.map(function (b) {
    return /*#__PURE__*/React.createElement("button", {
      key: b.key,
      onClick: function onClick() {
        return setRange(b.key);
      },
      style: {
        padding: '4px 10px',
        fontSize: 11,
        fontFamily: 'inherit',
        cursor: 'pointer',
        borderRadius: 6,
        border: '1px solid ' + (range === b.key ? color : 'var(--line)'),
        background: range === b.key ? color : 'white',
        color: range === b.key ? 'white' : 'var(--ink-2)',
        fontWeight: range === b.key ? 600 : 500
      }
    }, b.label);
  }))), filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 10px',
      textAlign: 'center',
      color: 'var(--ink-4)',
      fontSize: 13,
      background: '#fafaf7',
      borderRadius: 8
    }
  }, rangeDesc, "\u5185\u6CA1\u6709\u6570\u636E") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 8,
      marginBottom: 12
    }
  }, Object.entries(totalsByCurrency).map(function (_ref28) {
    var _ref29 = _slicedToArray(_ref28, 2),
      cur = _ref29[0],
      amt = _ref29[1];
    var curItems = filtered.filter(function (f) {
      return (f.currency || 'USD').toUpperCase() === cur;
    });
    var clickable = !!onClickStats && curItems.length > 0;
    return /*#__PURE__*/React.createElement("div", {
      key: cur,
      onClick: function onClick() {
        return clickable && onClickStats({
          records: curItems,
          title: "".concat(title, " \xB7 ").concat(cur, " \u7D2F\u8BA1")
        });
      },
      style: {
        padding: '12px 14px',
        background: "".concat(color, "10"),
        border: "1px solid ".concat(color, "40"),
        borderRadius: 10,
        cursor: clickable ? 'pointer' : 'default',
        transition: 'all .15s'
      },
      onMouseEnter: clickable ? function (e) {
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.boxShadow = "0 4px 10px ".concat(color, "25");
      } : undefined,
      onMouseLeave: clickable ? function (e) {
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = '';
      } : undefined
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        fontWeight: 500,
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("span", null, cur, " \u7D2F\u8BA1"), clickable && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        color: 'var(--ink-4)',
        opacity: .7
      }
    }, "\u67E5\u770B \u2192")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 22,
        fontWeight: 700,
        color: color,
        marginTop: 2,
        letterSpacing: .2
      }
    }, formatAmount(cur, amt)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-4)',
        marginTop: 1
      }
    }, curItems.length, " \u7B14"));
  })), byWebsite.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginBottom: 6
    }
  }, "\uD83D\uDCCD \u6309\u7F51\u7AD9\u5206\u5E03 ", onClickStats && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400
    }
  }, "\xB7 \uD83D\uDCA1 \u70B9\u51FB\u67E5\u770B")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, byWebsite.map(function (w) {
    var siteItems = filtered.filter(function (f) {
      return ((getSite ? getSite(f) : f.site) || '(未填)') === w.site;
    });
    var clickable = !!onClickStats && siteItems.length > 0;
    return /*#__PURE__*/React.createElement("div", {
      key: w.site,
      onClick: function onClick() {
        return clickable && onClickStats({
          records: siteItems,
          title: "".concat(title, " \xB7 ").concat(w.site)
        });
      },
      style: {
        padding: '5px 10px',
        background: 'white',
        border: '1px solid var(--line)',
        borderRadius: 14,
        fontSize: 11,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        cursor: clickable ? 'pointer' : 'default',
        transition: 'all .15s'
      },
      onMouseEnter: clickable ? function (e) {
        e.currentTarget.style.background = color + '10';
        e.currentTarget.style.borderColor = color;
      } : undefined,
      onMouseLeave: clickable ? function (e) {
        e.currentTarget.style.background = 'white';
        e.currentTarget.style.borderColor = 'var(--line)';
      } : undefined
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        color: 'var(--ink)'
      }
    }, w.site), /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 5px',
        background: "".concat(color, "20"),
        color: color,
        borderRadius: 8,
        fontWeight: 600
      }
    }, w.count), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)',
        fontSize: 10
      }
    }, Object.entries(w.totals).map(function (_ref30) {
      var _ref31 = _slicedToArray(_ref30, 2),
        c = _ref31[0],
        a = _ref31[1];
      return formatAmount(c, a);
    }).join(' · ')));
  }))), byStatus.length > 0 && statusLabels && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginBottom: 6
    }
  }, "\uD83C\uDFF7 \u6309\u72B6\u6001\u5206\u5E03 ", onClickStats && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400
    }
  }, "\xB7 \uD83D\uDCA1 \u70B9\u51FB\u67E5\u770B")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, byStatus.map(function (s) {
    var lab = statusLabels[s.status] || {
      label: s.status,
      color: '#6b7280',
      bg: '#f3f4f6'
    };
    var statusItems = filtered.filter(function (f) {
      return (f[statusKey] || '(未填)') === s.status;
    });
    var clickable = !!onClickStats && statusItems.length > 0;
    return /*#__PURE__*/React.createElement("div", {
      key: s.status,
      onClick: function onClick() {
        return clickable && onClickStats({
          records: statusItems,
          title: "".concat(title, " \xB7 ").concat(lab.label)
        });
      },
      style: {
        padding: '5px 10px',
        background: lab.bg || '#f3f4f6',
        border: '1px solid var(--line)',
        borderRadius: 14,
        fontSize: 11,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        cursor: clickable ? 'pointer' : 'default',
        transition: 'all .15s'
      },
      onMouseEnter: clickable ? function (e) {
        return e.currentTarget.style.transform = 'translateY(-1px)';
      } : undefined,
      onMouseLeave: clickable ? function (e) {
        return e.currentTarget.style.transform = '';
      } : undefined
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: lab.color,
        fontWeight: 600
      }
    }, lab.label), /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 5px',
        background: 'white',
        color: lab.color,
        borderRadius: 8,
        fontWeight: 600
      }
    }, s.count));
  })))));
};

// ============================================================
// 🆕 fix81: 通用事件清单弹窗 — 售后/补件/退款/拒付 数字点击后弹出
// ============================================================
var EventListModal = function EventListModal(_ref32) {
  var events = _ref32.events,
    title = _ref32.title,
    accent = _ref32.accent,
    icon = _ref32.icon,
    kind = _ref32.kind,
    employees = _ref32.employees,
    suppliers = _ref32.suppliers,
    onClose = _ref32.onClose,
    onClickEvent = _ref32.onClickEvent;
  var _useState77 = useState(''),
    _useState78 = _slicedToArray(_useState77, 2),
    search = _useState78[0],
    setSearch = _useState78[1];
  var filtered = (events || []).filter(function (e) {
    if (!search.trim()) return true;
    var q = search.trim().toLowerCase();
    return (e.order_ref || e.order_no || '').toLowerCase().includes(q) || (e.customer || e.customer_name || '').toLowerCase().includes(q) || (e.product_name || '').toLowerCase().includes(q) || (e.notes || '').toLowerCase().includes(q) || (e.supplier_name || '').toLowerCase().includes(q) || (e.created_by_name || '').toLowerCase().includes(q);
  });
  var STATUS_LABELS = {
    // 售后
    pending_remind: {
      label: '⏳ 待提醒',
      color: '#92400e'
    },
    reminded: {
      label: '📣 已提醒',
      color: '#1e40af'
    },
    customer_responded: {
      label: '💬 客户回复',
      color: '#7e22ce'
    },
    returning: {
      label: '📦 寄回中',
      color: '#0369a1'
    },
    returned: {
      label: '✅ 已退回',
      color: '#15803d'
    },
    customer_refund: {
      label: '💸 客户退款',
      color: '#15803d'
    },
    closed: {
      label: '✅ 已关闭',
      color: '#15803d'
    },
    // 补件
    pending_order: {
      label: '⏳ 待下单',
      color: '#92400e'
    },
    ordered: {
      label: '📝 已下单',
      color: '#1e40af'
    },
    producing: {
      label: '🔨 生产中',
      color: '#7e22ce'
    },
    shipped: {
      label: '🚚 已发货',
      color: '#0369a1'
    },
    delivered: {
      label: '✅ 已送达',
      color: '#15803d'
    },
    // 退款
    pending_approval: {
      label: '⏳ 待审',
      color: '#92400e'
    },
    approved: {
      label: '✓ 已批准',
      color: '#0369a1'
    },
    refunded: {
      label: '💸 已退款',
      color: '#15803d'
    },
    rejected: {
      label: '✗ 已拒绝',
      color: '#b91c1c'
    },
    // 拒付
    evidence: {
      label: '📁 收集证据',
      color: '#1e40af'
    },
    submitted: {
      label: '📤 已提交',
      color: '#7e22ce'
    },
    won: {
      label: '🏆 已赢',
      color: '#15803d'
    },
    lost: {
      label: '❌ 已输',
      color: '#b91c1c'
    }
  };
  var empName = function empName(id) {
    var e = (employees || []).find(function (x) {
      return x.id === id;
    });
    return e ? e.name + (e.alias ? ' ' + e.alias : '') : '?';
  };

  // 按类型决定列
  var columns = function () {
    if (kind === 'chargeback') {
      return ['客户', '订单号', '金额', '状态', '负责', '截止', '创建'];
    }
    if (kind === 'refund') {
      return ['客户', '订单号', '产品', '金额', '状态', '负责', '创建'];
    }
    return ['客户', '订单号', '产品', '问题/备注', '状态', '负责', '创建'];
  }();
  var today = todayISO();
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
      maxWidth: 1100,
      width: '100%',
      maxHeight: '88vh',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 24px 60px rgba(0,0,0,.25)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 22px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderLeft: "6px solid ".concat(accent),
      flexShrink: 0
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 22
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "font-mono font-bold",
    style: {
      fontSize: 22,
      color: accent
    }
  }, events.length), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u641C\u7D22\u5BA2\u6237 / \u8BA2\u5355\u53F7 / \u4EA7\u54C1 / \u5907\u6CE8 / \u4F9B\u5E94\u5546 / \u521B\u5EFA\u4EBA...",
    style: {
      flex: 1,
      marginLeft: 8,
      padding: '6px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  }), search && filtered.length !== events.length && /*#__PURE__*/React.createElement("span", {
    className: "text-[11px]",
    style: {
      color: 'var(--ink-3)'
    }
  }, filtered.length, " / ", events.length), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn-sec",
    style: {
      padding: '5px 14px'
    }
  }, "\u2715 \u5173\u95ED")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto'
    }
  }, filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 60,
      color: 'var(--ink-4)',
      fontSize: 13
    }
  }, "\u65E0\u5339\u914D\u8BB0\u5F55") : /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(function (c) {
    return /*#__PURE__*/React.createElement("th", {
      key: c
    }, c);
  }))), /*#__PURE__*/React.createElement("tbody", null, filtered.slice(0, 300).map(function (ev) {
    var sl = STATUS_LABELS[ev.status] || {
      label: ev.status || '?',
      color: '#6e6e73'
    };
    var created = (ev.created_at || '').slice(0, 10);
    if (kind === 'chargeback') {
      var isOverdue = ev.deadline && ev.deadline < today;
      return /*#__PURE__*/React.createElement("tr", {
        key: ev.id,
        onClick: function onClick() {
          return onClickEvent && onClickEvent(ev);
        },
        style: {
          cursor: onClickEvent ? 'pointer' : 'default'
        },
        onMouseEnter: function onMouseEnter(e) {
          return onClickEvent && (e.currentTarget.style.background = 'var(--accent-soft)');
        },
        onMouseLeave: function onMouseLeave(e) {
          return onClickEvent && (e.currentTarget.style.background = '');
        }
      }, /*#__PURE__*/React.createElement("td", {
        className: "text-[12px]"
      }, /*#__PURE__*/React.createElement("div", {
        className: "font-bold"
      }, ev.customer_name || '—'), ev.customer_email && /*#__PURE__*/React.createElement("div", {
        className: "text-[10px]",
        style: {
          color: 'var(--ink-4)'
        }
      }, ev.customer_email)), /*#__PURE__*/React.createElement("td", {
        className: "text-[11px] font-mono",
        style: {
          color: 'var(--ink-3)'
        }
      }, ev.order_no || '—'), /*#__PURE__*/React.createElement("td", {
        className: "text-[11px] font-mono font-bold",
        style: {
          color: 'var(--bad)'
        }
      }, "$", ev.amount || '0'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
        className: "text-[10px] font-bold px-1.5 py-0.5 rounded",
        style: {
          background: sl.color + '22',
          color: sl.color
        }
      }, sl.label)), /*#__PURE__*/React.createElement("td", {
        className: "text-[11px]"
      }, empName(ev.created_by)), /*#__PURE__*/React.createElement("td", {
        className: "text-[10px] font-mono",
        style: {
          color: isOverdue ? 'var(--bad)' : 'var(--ink-3)',
          fontWeight: isOverdue ? 600 : 400
        }
      }, isOverdue && '🔴 ', ev.deadline || '—'), /*#__PURE__*/React.createElement("td", {
        className: "text-[10px]",
        style: {
          color: 'var(--ink-4)'
        }
      }, created));
    }
    if (kind === 'refund') {
      return /*#__PURE__*/React.createElement("tr", {
        key: ev.id,
        onClick: function onClick() {
          return onClickEvent && onClickEvent(ev);
        },
        style: {
          cursor: onClickEvent ? 'pointer' : 'default'
        },
        onMouseEnter: function onMouseEnter(e) {
          return onClickEvent && (e.currentTarget.style.background = 'var(--accent-soft)');
        },
        onMouseLeave: function onMouseLeave(e) {
          return onClickEvent && (e.currentTarget.style.background = '');
        }
      }, /*#__PURE__*/React.createElement("td", {
        className: "text-[12px]"
      }, ev.customer || '—'), /*#__PURE__*/React.createElement("td", {
        className: "text-[11px] font-mono"
      }, ev.order_ref || '—'), /*#__PURE__*/React.createElement("td", {
        className: "text-[11px]"
      }, ev.product_name || '—'), /*#__PURE__*/React.createElement("td", {
        className: "text-[11px] font-mono font-bold",
        style: {
          color: 'var(--bad)'
        }
      }, ev.currency === 'USD' ? '$' : ev.currency === 'EUR' ? '€' : ev.currency === 'CNY' ? '¥' : '', ev.amount || '0'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
        className: "text-[10px] font-bold px-1.5 py-0.5 rounded",
        style: {
          background: sl.color + '22',
          color: sl.color
        }
      }, sl.label)), /*#__PURE__*/React.createElement("td", {
        className: "text-[11px]"
      }, ev.created_by_name || empName(ev.created_by)), /*#__PURE__*/React.createElement("td", {
        className: "text-[10px]",
        style: {
          color: 'var(--ink-4)'
        }
      }, created));
    }
    // aftersale / refill
    var subText = ev.issue_detail || ev.notes || ev.items && ev.items.map(function (i) {
      return i.item;
    }).filter(Boolean).join(', ') || '';
    return /*#__PURE__*/React.createElement("tr", {
      key: ev.id,
      onClick: function onClick() {
        return onClickEvent && onClickEvent(ev);
      },
      style: {
        cursor: onClickEvent ? 'pointer' : 'default'
      },
      onMouseEnter: function onMouseEnter(e) {
        return onClickEvent && (e.currentTarget.style.background = 'var(--accent-soft)');
      },
      onMouseLeave: function onMouseLeave(e) {
        return onClickEvent && (e.currentTarget.style.background = '');
      }
    }, /*#__PURE__*/React.createElement("td", {
      className: "text-[12px]"
    }, ev.customer || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px] font-mono"
    }, ev.order_ref || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px]"
    }, ev.product_name || '—'), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px] truncate",
      style: {
        maxWidth: 260,
        color: 'var(--ink-3)'
      }
    }, subText), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-bold px-1.5 py-0.5 rounded",
      style: {
        background: sl.color + '22',
        color: sl.color
      }
    }, sl.label)), /*#__PURE__*/React.createElement("td", {
      className: "text-[11px]"
    }, ev.created_by_name || empName(ev.created_by)), /*#__PURE__*/React.createElement("td", {
      className: "text-[10px]",
      style: {
        color: 'var(--ink-4)'
      }
    }, created));
  }))), filtered.length > 300 && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 10,
      fontSize: 11,
      color: 'var(--ink-4)'
    }
  }, "\u5171 ", filtered.length, " \u6761,\u53EA\u663E\u793A\u524D 300 \xB7 \u8BF7\u7528\u641C\u7D22\u7F29\u5C0F\u8303\u56F4")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 22px',
      borderTop: '1px solid var(--line)',
      background: 'var(--bg-soft)',
      fontSize: 11,
      color: 'var(--ink-3)',
      flexShrink: 0
    }
  }, "\uD83D\uDCA1 ", onClickEvent ? '点击任意行打开编辑详情 · ' : '', "ESC \u5173\u95ED")));
};

// ============================================================
// 🆕 fix9b: 完成率统计 banner (售后 / 补件)
// 展示最近 3/7/14/30/60 天的总数 + 已完成 + 完成率
// 🆕 fix81: 数字全部可点 — 总数 / ✓完成 / ⏳未完成 都能点开列表
// ============================================================
var CompletionStatsBanner = function CompletionStatsBanner(_ref33) {
  var items = _ref33.items,
    title = _ref33.title,
    icon = _ref33.icon,
    color = _ref33.color,
    completedStatuses = _ref33.completedStatuses,
    onQuickComplete = _ref33.onQuickComplete,
    onClickStats = _ref33.onClickStats;
  var ranges = [3, 7, 14, 30, 60];

  // 🆕 fix117: 重做时间逻辑 —— "完成统计"按【完成时间】(≈最后更新)数本窗口真正完成的件数,
  // 而不是按 created_at 数全部事件(那样所有窗口都等于近期新建总数,失去意义)。
  var isDone = function isDone(it) {
    return completedStatuses.includes(it.status);
  };
  var compTime = function compTime(it) {
    return it.completed_at || it.completed_at_ms || it.updated_at || it.created_at;
  };
  var calcStats = function calcStats(days) {
    var cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    var all = items || [];
    var completedItems = all.filter(function (it) {
      return isDone(it) && compTime(it) && new Date(compTime(it)) >= cutoff;
    }); // 本窗口完成
    var createdItems = all.filter(function (it) {
      return it.created_at && new Date(it.created_at) >= cutoff;
    }); // 本窗口新建
    var pendingItems = createdItems.filter(function (it) {
      return !isDone(it);
    }); // 本窗口新建但未完成
    var pct = createdItems.length === 0 ? 0 : Math.round(createdItems.filter(isDone).length / createdItems.length * 100);
    return {
      total: completedItems.length,
      completed: completedItems.length,
      created: createdItems.length,
      pending: pendingItems.length,
      pct: pct,
      allItems: completedItems,
      completedItems: completedItems,
      createdItems: createdItems,
      pendingItems: pendingItems
    };
  };

  // 🆕 fix81: 点击触发
  var handleClick = function handleClick(days, mode, list) {
    if (!onClickStats || list.length === 0) return;
    var suffix = mode === 'completed' ? ' · ✅ 本窗口完成' : mode === 'created' ? ' · 🆕 本窗口新建' : mode === 'pending' ? ' · ⏳ 新建未完成' : '';
    onClickStats({
      records: list,
      title: "".concat(title, " \xB7 \u6700\u8FD1 ").concat(days, " \u5929").concat(suffix)
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl fade-in",
    style: {
      padding: 12,
      borderLeft: "4px solid ".concat(color),
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: color,
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, icon), title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)'
    }
  }, "\u5927\u6570=\u672C\u7A97\u53E3\u5B8C\u6210\u6570(\u6309\u5B8C\u6210\u65F6\u95F4) \xB7 \u5DF2\u5B8C\u6210\u72B6\u6001: ", completedStatuses.join(' / '), " \xB7 \uD83D\uDCA1 \u70B9\u51FB\u6570\u5B57\u67E5\u770B\u660E\u7EC6")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 6
    }
  }, ranges.map(function (d) {
    var s = calcStats(d);
    var pct = s.pct;
    var totalClickable = s.total > 0 && !!onClickStats;
    return /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        padding: '8px 6px',
        background: 'white',
        border: '1px solid var(--line)',
        borderRadius: 8,
        textAlign: 'center',
        transition: 'all .15s'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)',
        fontWeight: 500
      }
    }, "\u6700\u8FD1 ", d, " \u5929"), /*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return handleClick(d, 'completed', s.completedItems);
      },
      style: {
        fontSize: 20,
        fontWeight: 700,
        color: s.total > 0 ? '#16a34a' : 'var(--ink-4)',
        marginTop: 3,
        lineHeight: 1,
        cursor: totalClickable ? 'pointer' : 'default',
        textDecoration: totalClickable ? 'underline' : 'none',
        textDecorationStyle: 'dotted',
        textDecorationColor: '#16a34a60',
        textUnderlineOffset: 3
      },
      title: totalClickable ? "\u70B9\u51FB\u67E5\u770B\u6700\u8FD1 ".concat(d, " \u5929\u5B8C\u6210\u7684 ").concat(s.total, " \u6761") : '本窗口暂无完成',
      onMouseEnter: totalClickable ? function (e) {
        return e.currentTarget.style.opacity = '0.75';
      } : undefined,
      onMouseLeave: totalClickable ? function (e) {
        return e.currentTarget.style.opacity = '1';
      } : undefined
    }, "\u2713", s.total), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        marginTop: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      onClick: function onClick(e) {
        e.stopPropagation();
        if (s.created > 0) handleClick(d, 'created', s.createdItems);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 12,
        padding: '2px 8px',
        borderRadius: 6,
        background: '#eff6ff',
        color: '#1d4ed8',
        fontWeight: 500,
        cursor: s.created > 0 && onClickStats ? 'pointer' : 'default'
      },
      title: s.created > 0 && onClickStats ? "\u70B9\u51FB\u67E5\u770B\u65B0\u5EFA ".concat(s.created, " \u6761") : '本窗口暂无新建'
    }, "\u65B0\u5EFA ", /*#__PURE__*/React.createElement("strong", {
      style: {
        marginLeft: 'auto',
        fontSize: 13,
        fontWeight: 600
      }
    }, s.created)), /*#__PURE__*/React.createElement("span", {
      onClick: function onClick(e) {
        e.stopPropagation();
        if (s.pending > 0) handleClick(d, 'pending', s.pendingItems);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 12,
        padding: '2px 8px',
        borderRadius: 6,
        background: s.pending > 0 ? '#fef3c7' : '#f3f4f6',
        color: s.pending > 0 ? '#b45309' : 'var(--ink-4)',
        fontWeight: 600,
        cursor: s.pending > 0 && onClickStats ? 'pointer' : 'default'
      },
      title: s.pending > 0 && onClickStats ? "\u70B9\u51FB\u67E5\u770B ".concat(s.pending, " \u6761\u65B0\u5EFA\u672A\u5B8C\u6210") : '本窗口无待办'
    }, "\u5F85\u529E ", /*#__PURE__*/React.createElement("strong", {
      style: {
        marginLeft: 'auto',
        fontSize: 13,
        fontWeight: 600
      }
    }, s.pending))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        height: 3,
        background: '#f3f4f6',
        borderRadius: 2,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: "".concat(pct, "%"),
        background: pct >= 80 ? '#16a34a' : pct >= 50 ? '#ca8a04' : '#dc2626',
        transition: 'width .25s'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'var(--ink-4)',
        marginTop: 2
      }
    }, pct, "% \u5B8C\u6210"));
  })));
};

// ============================================================
// 月度汇总面板 + 图表
// ============================================================
var SummaryPanel = function SummaryPanel(_ref34) {
  var stats = _ref34.stats,
    filterMonth = _ref34.filterMonth,
    setFilterMonth = _ref34.setFilterMonth,
    aftersales = _ref34.aftersales,
    refunds = _ref34.refunds,
    refills = _ref34.refills,
    suppliers = _ref34.suppliers,
    _ref34$employees = _ref34.employees,
    employees = _ref34$employees === void 0 ? [] : _ref34$employees;
  // 🆕 fix122: 时间范围(本周/本月/本季度/全部 或 指定月)+ 钻取明细
  var _useState79 = useState('month'),
    _useState80 = _slicedToArray(_useState79, 2),
    range = _useState80[0],
    setRange = _useState80[1];
  var _useState81 = useState(null),
    _useState82 = _slicedToArray(_useState81, 2),
    drill = _useState82[0],
    setDrill = _useState82[1]; // {title, list}
  var _useState83 = useState(null),
    _useState84 = _slicedToArray(_useState83, 2),
    dPrev = _useState84[0],
    setDPrev = _useState84[1]; // 明细里图片预览
  var inRange = function inRange(e) {
    if (range === 'all') return true;
    if (range === 'month') return !filterMonth || (e.created_at || '').slice(0, 7) === filterMonth;
    var ds = (e.created_at || e.date || '').slice(0, 10);
    if (!ds) return false;
    var dt = new Date(ds),
      now = new Date(),
      c = new Date(now);
    if (range === 'week') c.setDate(c.getDate() - 7);else if (range === 'quarter') c.setMonth(c.getMonth() - 3);
    return dt >= c;
  };
  var empName = function empName(id) {
    var e = employees.find(function (x) {
      return x.id === id;
    });
    return e ? e.alias ? "".concat(e.alias, "(").concat(e.name, ")") : e.name : id || '(未知)';
  };
  var fAse = useMemo(function () {
    return (aftersales || []).filter(inRange);
  }, [aftersales, range, filterMonth]);
  var fRefills = useMemo(function () {
    return (refills || []).filter(inRange);
  }, [refills, range, filterMonth]);
  var fRefunds = useMemo(function () {
    return (refunds || []).filter(inRange);
  }, [refunds, range, filterMonth]);
  var rangeLabel = range === 'week' ? '近 7 天' : range === 'quarter' ? '近一季度' : range === 'all' ? '全部' : filterMonth || '本月';
  // 计算供应商问题排行（按售后数 + 退款金额）
  var supplierRanking = useMemo(function () {
    var map = {};
    fAse.forEach(function (e) {
      var k = e.supplier_name || '(未指定)';
      if (!map[k]) map[k] = {
        name: k,
        aftersales: 0,
        refundAmount: 0,
        _list: []
      };
      map[k].aftersales++;
      map[k]._list.push(e);
    });
    fRefunds.forEach(function (e) {
      if (e.status !== 'completed' && e.status !== 'approved') return;
      var k = e.supplier_name || '(未指定)';
      if (!map[k]) map[k] = {
        name: k,
        aftersales: 0,
        refundAmount: 0,
        _list: []
      };
      map[k].refundAmount += parseFloat(e.amount || 0);
    });
    return Object.values(map).sort(function (a, b) {
      return b.aftersales + b.refundAmount / 100 - (a.aftersales + a.refundAmount / 100);
    }).slice(0, 15);
  }, [fAse, fRefunds]);

  // 🆕 fix17: 产品售后排行 - 哪款产品售后次数最多
  var productRanking = useMemo(function () {
    var map = {};
    var touch = function touch(k) {
      if (!map[k]) map[k] = {
        name: k,
        aftersales: 0,
        refills: 0,
        refundAmount: 0,
        refundCount: 0,
        suppliers: new Set(),
        _list: []
      };
      return map[k];
    };
    fAse.forEach(function (e) {
      var k = (e.product_name || '').trim() || '(未填产品)';
      var m = touch(k);
      m.aftersales++;
      m._list.push(e);
      if (e.supplier_name) m.suppliers.add(e.supplier_name);
    });
    fRefills.forEach(function (e) {
      var k = (e.product_name || '').trim() || '(未填产品)';
      var m = touch(k);
      m.refills++;
      m._list.push(e);
      if (e.supplier_name) m.suppliers.add(e.supplier_name);
    });
    fRefunds.forEach(function (e) {
      if (e.status !== 'completed' && e.status !== 'approved') return;
      var k = (e.product_name || '').trim() || '(未填产品)';
      var m = touch(k);
      m.refundAmount += parseFloat(e.amount || 0);
      m.refundCount++;
      if (e.supplier_name) m.suppliers.add(e.supplier_name);
    });
    return Object.values(map).map(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, {
        suppliers: Array.from(p.suppliers),
        total: p.aftersales + p.refills + p.refundCount
      });
    }).sort(function (a, b) {
      return b.total - a.total || b.refundAmount - a.refundAmount;
    }).slice(0, 20);
  }, [fAse, fRefills, fRefunds]);

  // 🆕 fix122: 按客服处理量排行(谁售后最多)+ 每人问题类型占比
  var csRanking = useMemo(function () {
    var map = {};
    fAse.forEach(function (e) {
      var id = e.created_by || '(未知)';
      if (!map[id]) map[id] = {
        id: id,
        name: empName(id),
        count: 0,
        byIssue: {},
        _list: []
      };
      map[id].count++;
      map[id]._list.push(e);
      var it = e.issue_type || e.issue || '其他';
      map[id].byIssue[it] = (map[id].byIssue[it] || 0) + 1;
    });
    return Object.values(map).sort(function (a, b) {
      return b.count - a.count;
    });
  }, [fAse, employees]);

  // 🆕 fix122: 按网站分布(订单号前缀推断 + site 字段)
  var siteRanking = useMemo(function () {
    var map = {};
    fAse.forEach(function (e) {
      var k = e.site || (typeof wsOrderSite === 'function' ? wsOrderSite(e.order_ref) : '') || '(未知)';
      if (!map[k]) map[k] = {
        name: k,
        count: 0,
        _list: []
      };
      map[k].count++;
      map[k]._list.push(e);
    });
    return Object.values(map).sort(function (a, b) {
      return b.count - a.count;
    });
  }, [fAse]);

  // 🆕 fix122: 售后问题类型分布(饼图用)
  var issueDist = useMemo(function () {
    var map = {};
    fAse.forEach(function (e) {
      var k = e.issue_type || e.issue || '其他';
      if (!map[k]) map[k] = {
        name: k,
        count: 0,
        _list: []
      };
      map[k].count++;
      map[k]._list.push(e);
    });
    return Object.values(map).sort(function (a, b) {
      return b.count - a.count;
    });
  }, [fAse]);

  // 简易 SVG 饼图
  var PIE_COLORS = ['#ea580c', '#0369a1', '#16a34a', '#7c3aed', '#dc2626', '#d97706', '#0891b2', '#be185d', '#65a30d', '#9333ea'];
  var Pie = function Pie(_ref35) {
    var data = _ref35.data,
      onSlice = _ref35.onSlice;
    var tot = data.reduce(function (s, d) {
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
    var arc = function arc(frac0, frac1) {
      var a0 = 2 * Math.PI * frac0 - Math.PI / 2,
        a1 = 2 * Math.PI * frac1 - Math.PI / 2;
      var x0 = C + R * Math.cos(a0),
        y0 = C + R * Math.sin(a0),
        x1 = C + R * Math.cos(a1),
        y1 = C + R * Math.sin(a1);
      var large = frac1 - frac0 > 0.5 ? 1 : 0;
      return "M".concat(C, ",").concat(C, " L").concat(x0, ",").concat(y0, " A").concat(R, ",").concat(R, " 0 ").concat(large, " 1 ").concat(x1, ",").concat(y1, " Z");
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "160",
      height: "160",
      viewBox: "0 0 160 160",
      style: {
        flexShrink: 0
      }
    }, data.map(function (d, i) {
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
      }, /*#__PURE__*/React.createElement("title", null, d.name, ": ", d.count, " (", Math.round(d.count / tot * 100), "%)"));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 140
      }
    }, data.map(function (d, i) {
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
          width: 38,
          textAlign: 'right'
        }
      }, Math.round(d.count / tot * 100), "%"));
    })));
  };
  var openDrill = function openDrill(title, list) {
    if (list && list.length) setDrill({
      title: title,
      list: list
    });
  };
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
      fontWeight: 600
    }
  }, "\uD83D\uDCCA \u6708\u5EA6\u6C47\u603B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u65F6\u95F4\u8303\u56F4:"), [['week', '本周'], ['month', '本月'], ['quarter', '本季度'], ['all', '全部']].map(function (_ref36) {
    var _ref37 = _slicedToArray(_ref36, 2),
      k = _ref37[0],
      lb = _ref37[1];
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: function onClick() {
        return setRange(k);
      },
      style: {
        padding: '3px 10px',
        fontSize: 12,
        borderRadius: 6,
        cursor: 'pointer',
        fontWeight: 600,
        border: '1px solid ' + (range === k ? '#0071e3' : 'var(--line)'),
        background: range === k ? '#0071e3' : 'white',
        color: range === k ? 'white' : 'var(--ink-2)'
      }
    }, lb);
  }), range === 'month' && /*#__PURE__*/React.createElement("input", {
    type: "month",
    value: filterMonth,
    onChange: function onChange(e) {
      return setFilterMonth(e.target.value);
    },
    style: {
      padding: '3px 8px',
      border: '1px solid var(--line)',
      borderRadius: 4,
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)'
    }
  }, "\xB7 \u5F53\u524D:", rangeLabel, " \xB7 \uD83D\uDCA1 \u6392\u884C/\u997C\u56FE\u5747\u53EF\u70B9\u51FB\u67E5\u660E\u7EC6"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4 fade-in",
    style: {
      borderTop: '3px solid #ea580c'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83D\uDD27 \u552E\u540E\u603B\u6570"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: '#ea580c',
      marginTop: 4
    }
  }, stats.aftersales.total), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "\u672C\u6708\u65B0\u5EFA\u552E\u540E\u4E8B\u4EF6")), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4 fade-in",
    style: {
      borderTop: '3px solid #0369a1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83D\uDCE6 \u8865\u4EF6\u603B\u6570"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: '#0369a1',
      marginTop: 4
    }
  }, stats.refills.total), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "\u672C\u6708\u65B0\u5EFA\u8865\u4EF6\u4E8B\u4EF6")), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4 fade-in",
    style: {
      borderTop: '3px solid #dc2626'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83D\uDCB0 \u9000\u6B3E\u91D1\u989D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: '#dc2626',
      marginTop: 4
    }
  }, "$", stats.refunds.totalAmount.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, stats.refunds.completed, " \u7B14\u5DF2\u5BA1\u6279 \xB7 ", stats.refunds.pending, " \u7B14\u5F85\u5BA1"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 10
    }
  }, "\uD83D\uDD27 \u552E\u540E\u95EE\u9898\u5206\u5E03"), Object.keys(stats.aftersales.byIssue).length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      textAlign: 'center',
      padding: '20px 0'
    }
  }, "\u672C\u6708\u6682\u65E0\u6570\u636E") : Object.entries(stats.aftersales.byIssue).sort(function (a, b) {
    return b[1] - a[1];
  }).map(function (_ref38) {
    var _ref39 = _slicedToArray(_ref38, 2),
      k = _ref39[0],
      n = _ref39[1];
    var max = Math.max.apply(Math, _toConsumableArray(Object.values(stats.aftersales.byIssue)));
    var pct = n / max * 100;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 12,
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600
      }
    }, n, " \u5355")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: 'var(--bg)',
        borderRadius: 3,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: "".concat(pct, "%"),
        background: '#ea580c',
        borderRadius: 3,
        transition: 'width .3s'
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 10
    }
  }, "\uD83D\uDCB0 \u9000\u6B3E\u7C7B\u578B\u5206\u5E03\uFF08\u6309\u91D1\u989D\uFF09"), Object.keys(stats.refunds.byTypeAmount).length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      textAlign: 'center',
      padding: '20px 0'
    }
  }, "\u672C\u6708\u6682\u65E0\u6570\u636E") : Object.entries(stats.refunds.byTypeAmount).sort(function (a, b) {
    return b[1] - a[1];
  }).map(function (_ref40) {
    var _ref41 = _slicedToArray(_ref40, 2),
      k = _ref41[0],
      amt = _ref41[1];
    var max = Math.max.apply(Math, _toConsumableArray(Object.values(stats.refunds.byTypeAmount)));
    var pct = amt / max * 100;
    var count = stats.refunds.byType[k] || 0;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 12,
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement("span", null, k, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-4)',
        fontSize: 10
      }
    }, "(", count, " \u7B14)")), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: '#dc2626'
      }
    }, "$", amt.toFixed(2))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: 'var(--bg)',
        borderRadius: 3,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: '100%',
        width: "".concat(pct, "%"),
        background: '#dc2626',
        borderRadius: 3,
        transition: 'width .3s'
      }
    })));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 10
    }
  }, "\uD83C\uDFED \u4F9B\u5E94\u5546\u95EE\u9898\u6392\u884C TOP 15"), supplierRanking.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      textAlign: 'center',
      padding: '20px 0'
    }
  }, "\u672C\u6708\u6682\u65E0\u6570\u636E") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 8
    }
  }, supplierRanking.map(function (s, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.name,
      onClick: function onClick() {
        return openDrill("\u4F9B\u5E94\u5546 ".concat(s.name, " \xB7 \u552E\u540E\u660E\u7EC6"), s._list);
      },
      style: {
        padding: 10,
        background: 'var(--bg)',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: s._list && s._list.length ? 'pointer' : 'default'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        background: idx < 3 ? '#dc2626' : 'var(--ink-3)',
        color: 'white',
        borderRadius: '50%',
        fontSize: 11,
        fontWeight: 600,
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
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--ink)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)',
        marginTop: 2
      }
    }, "\uD83D\uDD27 ", s.aftersales, " \u5355", s.refundAmount > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        color: '#dc2626'
      }
    }, "\xB7 \uD83D\uDCB0 $", s.refundAmount.toFixed(0)))));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, "\uD83D\uDECD\uFE0F \u4EA7\u54C1\u95EE\u9898\u6392\u884C TOP 20", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 400,
      color: 'var(--ink-3)'
    }
  }, "\xB7 \u6309 \u552E\u540E+\u8865\u4EF6+\u9000\u6B3E \u603B\u6B21\u6570\u6392\u5E8F"), productRanking.length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 400
    }
  }, "\u5171 ", productRanking.length, " \u6B3E\u4EA7\u54C1\u6D89\u53CA\u95EE\u9898")), productRanking.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      textAlign: 'center',
      padding: '20px 0'
    }
  }, "\u672C\u6708\u6682\u65E0\u4EA7\u54C1\u7EA7\u6570\u636E \xB7 \u5F55\u5165\u552E\u540E/\u8865\u4EF6/\u9000\u6B3E\u65F6\u586B\u5199\"\u4EA7\u54C1\u540D\"\u5373\u53EF\u53C2\u4E0E\u7EDF\u8BA1") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, productRanking.map(function (p, idx) {
    var isTop = idx < 3;
    return /*#__PURE__*/React.createElement("div", {
      key: p.name,
      onClick: function onClick() {
        return openDrill("\u4EA7\u54C1 ".concat(p.name, " \xB7 \u552E\u540E/\u8865\u4EF6/\u9000\u6B3E\u660E\u7EC6"), p._list);
      },
      style: {
        padding: '10px 12px',
        background: isTop ? '#fef2f2' : 'var(--bg)',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        borderLeft: isTop ? '3px solid #dc2626' : '3px solid transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        background: isTop ? '#dc2626' : 'var(--ink-3)',
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
        color: 'var(--ink)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      title: p.name
    }, p.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        marginTop: 3,
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, p.aftersales > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#ea580c'
      }
    }, "\uD83D\uDD27 \u552E\u540E ", p.aftersales), p.refills > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#0369a1'
      }
    }, "\uD83D\uDCE6 \u8865\u4EF6 ", p.refills), p.refundCount > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: '#dc2626'
      }
    }, "\uD83D\uDCB0 \u9000\u6B3E ", p.refundCount, " \u7B14 $", p.refundAmount.toFixed(0)), p.suppliers.length > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)'
      }
    }, "\xB7 \u4F9B\u5E94\u5546: ", p.suppliers.slice(0, 3).join(', '), p.suppliers.length > 3 ? ", +".concat(p.suppliers.length - 3) : '')), function () {
      var issues = _toConsumableArray(new Set((p._list || []).map(function (x) {
        return (x.issue_detail || x.issue_type || x.reason || x.refund_reason || x.note || '').toString().trim();
      }).filter(Boolean)));
      return issues.length ? /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 11,
          color: 'var(--ink-2)',
          marginTop: 4,
          lineHeight: 1.5,
          whiteSpace: 'normal',
          wordBreak: 'break-word'
        },
        title: issues.join(' / ')
      }, "\uD83D\uDCDD ", issues.join(' / ')) : null;
    }()), /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: isTop ? '#dc2626' : 'var(--ink)'
      }
    }, p.total), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'var(--ink-3)'
      }
    }, "\u95EE\u9898\u603B\u6570")));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 10
    }
  }, "\uD83D\uDC64 \u5BA2\u670D\u5904\u7406\u91CF\u6392\u884C ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 400,
      color: 'var(--ink-3)'
    }
  }, "\xB7 ", rangeLabel, " \xB7 \u70B9\u51FB\u770B\u660E\u7EC6")), csRanking.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      textAlign: 'center',
      padding: '20px 0'
    }
  }, "\u6682\u65E0\u6570\u636E") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, csRanking.map(function (c, idx) {
    var topIssues = Object.entries(c.byIssue).sort(function (a, b) {
      return b[1] - a[1];
    }).slice(0, 3);
    var isTop = idx < 3;
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      onClick: function onClick() {
        return openDrill("\u5BA2\u670D ".concat(c.name, " \xB7 \u552E\u540E\u660E\u7EC6"), c._list);
      },
      style: {
        padding: '9px 12px',
        background: isTop ? '#fff7ed' : 'var(--bg)',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        borderLeft: isTop ? '3px solid #ea580c' : '3px solid transparent'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        background: isTop ? '#ea580c' : 'var(--ink-3)',
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
    }, c.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        marginTop: 2,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, topIssues.map(function (_ref42) {
      var _ref43 = _slicedToArray(_ref42, 2),
        k = _ref43[0],
        n = _ref43[1];
      return "".concat(k, " ").concat(n, "(").concat(Math.round(n / c.count * 100), "%)");
    }).join(' · ') || '—')), /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0,
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: isTop ? '#ea580c' : 'var(--ink)'
      }
    }, c.count), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: 'var(--ink-3)'
      }
    }, "\u552E\u540E\u5355")));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 10
    }
  }, "\uD83C\uDF10 \u552E\u540E\u6309\u7F51\u7AD9\u5206\u5E03 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 400,
      color: 'var(--ink-3)'
    }
  }, "\xB7 \u70B9\u51FB\u770B\u660E\u7EC6")), /*#__PURE__*/React.createElement(Pie, {
    data: siteRanking,
    onSlice: function onSlice(d) {
      return openDrill("\u7F51\u7AD9 ".concat(d.name, " \xB7 \u552E\u540E\u660E\u7EC6"), d._list);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 14,
      fontWeight: 600,
      marginBottom: 10
    }
  }, "\uD83E\uDD67 \u552E\u540E\u95EE\u9898\u7C7B\u578B\u5360\u6BD4 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 400,
      color: 'var(--ink-3)'
    }
  }, "\xB7 \u70B9\u51FB\u770B\u660E\u7EC6")), /*#__PURE__*/React.createElement(Pie, {
    data: issueDist,
    onSlice: function onSlice(d) {
      return openDrill("\u95EE\u9898\u7C7B\u578B ".concat(d.name, " \xB7 \u552E\u540E\u660E\u7EC6"), d._list);
    }
  }))), drill && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setDrill(null);
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.5)',
      zIndex: 100002,
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
      maxWidth: 760,
      maxHeight: '86vh',
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
  }, drill.title, " \xB7 ", drill.list.length, " \u6761"), /*#__PURE__*/React.createElement("button", {
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
  }, /*#__PURE__*/React.createElement("table", {
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
  }, "\u4EA7\u54C1\u56FE"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 8px'
    }
  }, "\u4EA7\u54C1/\u95EE\u9898"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 8px'
    }
  }, "\u4F9B\u5E94\u5546"), /*#__PURE__*/React.createElement("th", {
    style: {
      padding: '6px 8px'
    }
  }, "\u5BA2\u670D"))), /*#__PURE__*/React.createElement("tbody", null, drill.list.map(function (e, i) {
    return /*#__PURE__*/React.createElement("tr", {
      key: e.id || i,
      style: {
        borderTop: '1px solid var(--line)'
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 12px',
        whiteSpace: 'nowrap'
      }
    }, ((e.created_at || e.date || '') + '').slice(5, 10)), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 8px',
        fontWeight: 600
      }
    }, e.order_ref ? /*#__PURE__*/React.createElement(OrderRefLink, {
      orderNo: e.order_ref
    }) : '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 8px'
      }
    }, /*#__PURE__*/React.createElement(OrderProductThumb, {
      orderNo: e.order_ref,
      onPreview: function onPreview(u) {
        return setDPrev(u);
      }
    })), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 8px',
        maxWidth: 200
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, e.product_name || '-'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: '#ea580c'
      }
    }, e.issue_type || e.issue || '')), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 8px'
      }
    }, e.supplier_name || '-'), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: '6px 8px'
      }
    }, empName(e.created_by)));
  }))))), dPrev && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(ev) {
      ev.stopPropagation();
      setDPrev(null);
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.9)',
      zIndex: 100010,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      cursor: 'zoom-out'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: dPrev,
    alt: "",
    style: {
      maxWidth: '92vw',
      maxHeight: '92vh',
      borderRadius: 8
    }
  }))));
};
var ExportPanel = function ExportPanel(_ref44) {
  var onClose = _ref44.onClose,
    aftersales = _ref44.aftersales,
    refills = _ref44.refills,
    refunds = _ref44.refunds,
    suppliers = _ref44.suppliers,
    employees = _ref44.employees,
    subTab = _ref44.subTab,
    filterMonth = _ref44.filterMonth,
    toast = _ref44.toast;
  var _useState85 = useState(false),
    _useState86 = _slicedToArray(_useState85, 2),
    exporting = _useState86[0],
    setExporting = _useState86[1];
  var _useState87 = useState(true),
    _useState88 = _slicedToArray(_useState87, 2),
    includeImages = _useState88[0],
    setIncludeImages = _useState88[1];
  var _useState89 = useState(subTab === 'summary' ? 'all' : subTab),
    _useState90 = _slicedToArray(_useState89, 2),
    exportType = _useState90[0],
    setExportType = _useState90[1];
  var _useState91 = useState('excel'),
    _useState92 = _slicedToArray(_useState91, 2),
    format = _useState92[0],
    setFormat = _useState92[1];

  // Excel 导出
  var exportExcel = /*#__PURE__*/function () {
    var _ref45 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
      var XLSX, wb, addSheet, fname, _t4;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            setExporting(true);
            _context11.p = 1;
            if (window.XLSX) {
              _context11.n = 2;
              break;
            }
            _context11.n = 2;
            return new Promise(function (resolve, reject) {
              var script = document.createElement('script');
              script.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js';
              script.onload = resolve;
              script.onerror = reject;
              document.head.appendChild(script);
            });
          case 2:
            XLSX = window.XLSX;
            wb = XLSX.utils.book_new();
            addSheet = function addSheet(data, name) {
              if (data.length === 0) data = [{
                '提示': '当前筛选条件下暂无数据'
              }];
              var ws = XLSX.utils.json_to_sheet(data);
              XLSX.utils.book_append_sheet(wb, ws, name);
            };
            if (exportType === 'aftersales' || exportType === 'all') {
              addSheet(aftersales.map(function (e) {
                var _ISSUE_TYPES$find2, _AFTERSALE_STATUSES$f;
                return {
                  '日期': (e.created_at || '').slice(0, 10),
                  '订单号': e.order_ref || '',
                  '客户': e.customer || '',
                  '产品': e.product_name || '',
                  '问题类型': ((_ISSUE_TYPES$find2 = ISSUE_TYPES.find(function (i) {
                    return i.key === e.issue_type;
                  })) === null || _ISSUE_TYPES$find2 === void 0 ? void 0 : _ISSUE_TYPES$find2.label) || e.issue_type,
                  '损坏部位': e.damaged_part || '',
                  '详细描述': e.issue_detail || '',
                  '供应商': e.supplier_name || '',
                  '状态': ((_AFTERSALE_STATUSES$f = AFTERSALE_STATUSES.find(function (s) {
                    return s.key === e.status;
                  })) === null || _AFTERSALE_STATUSES$f === void 0 ? void 0 : _AFTERSALE_STATUSES$f.label) || e.status,
                  '催货日期': e.last_remind_date || '',
                  '回货日期': e.return_date || '',
                  '打包责任人': e.packer || '',
                  '质检责任人': e.qc || '',
                  '创建人': e.created_by_name || '',
                  '图片数量': (e.attachments || []).length,
                  '图片链接': (e.attachments || []).map(function (a) {
                    return a.url;
                  }).join('\n'),
                  '备注': e.notes || ''
                };
              }), '售后清单');
            }
            if (exportType === 'refills' || exportType === 'all') {
              addSheet(refills.map(function (e) {
                var _REFILL_STATUSES$find;
                return {
                  '日期': (e.created_at || '').slice(0, 10),
                  '订单号': e.order_ref || '',
                  '客户': e.customer || '',
                  '补件清单': (e.items || []).map(function (it) {
                    return "".concat(it.item || '?', " \xD7 ").concat(it.qty || 1).concat(it.unit || '');
                  }).join('，'),
                  '供应商': e.supplier_name || '',
                  '预计发货': e.expected_ship_date || '',
                  '实际发货': e.actual_ship_date || '',
                  '状态': ((_REFILL_STATUSES$find = REFILL_STATUSES.find(function (s) {
                    return s.key === e.status;
                  })) === null || _REFILL_STATUSES$find === void 0 ? void 0 : _REFILL_STATUSES$find.label) || e.status,
                  '物流单号': e.tracking_number || '',
                  '创建人': e.created_by_name || '',
                  '图片数量': (e.attachments || []).length,
                  '图片链接': (e.attachments || []).map(function (a) {
                    return a.url;
                  }).join('\n'),
                  '备注': e.notes || ''
                };
              }), '补件追踪');
            }
            if (exportType === 'refunds' || exportType === 'all') {
              addSheet(refunds.map(function (r) {
                var _REFUND_TYPES$find2, _REFUND_PAYMENT_METHO, _REFUND_STATUSES$find;
                return {
                  '日期': (r.created_at || '').slice(0, 10),
                  '订单号': r.order_ref || '',
                  '客户': r.customer || '',
                  '产品': r.product_name || '',
                  '退款类型': ((_REFUND_TYPES$find2 = REFUND_TYPES.find(function (t) {
                    return t.key === r.refund_type;
                  })) === null || _REFUND_TYPES$find2 === void 0 ? void 0 : _REFUND_TYPES$find2.label) || r.refund_type,
                  '退款原因': r.refund_reason || '',
                  '金额': parseFloat(r.amount).toFixed(2),
                  '货币': r.currency,
                  '支付方式': ((_REFUND_PAYMENT_METHO = REFUND_PAYMENT_METHODS.find(function (p) {
                    return p.key === r.payment_method;
                  })) === null || _REFUND_PAYMENT_METHO === void 0 ? void 0 : _REFUND_PAYMENT_METHO.label) || r.payment_method,
                  '供应商': r.supplier_name || '',
                  '状态': ((_REFUND_STATUSES$find = REFUND_STATUSES.find(function (s) {
                    return s.key === r.status;
                  })) === null || _REFUND_STATUSES$find === void 0 ? void 0 : _REFUND_STATUSES$find.label) || r.status,
                  '创建人': r.created_by_name || '',
                  '审核人': r.approved_by_name || '',
                  '审核时间': (r.approved_at || '').slice(0, 16).replace('T', ' '),
                  '审核备注': r.approval_notes || '',
                  '处理人': r.processed_by_name || '',
                  '处理时间': (r.processed_at || '').slice(0, 16).replace('T', ' '),
                  '外部退款单号': r.external_refund_id || '',
                  '图片数量': (r.attachments || []).length,
                  '图片链接': (r.attachments || []).map(function (a) {
                    return a.url;
                  }).join('\n')
                };
              }), '退款管理');
            }
            fname = "\u5BA2\u670D\u62A5\u8868_".concat(filterMonth || '全部', "_").concat(exportType, "_").concat(new Date().toISOString().slice(0, 10), ".xlsx");
            XLSX.writeFile(wb, fname);
            toast('✓ Excel 已下载');
            setExporting(false);
            setTimeout(onClose, 500);
            _context11.n = 4;
            break;
          case 3:
            _context11.p = 3;
            _t4 = _context11.v;
            toast('❌ 导出失败：' + _t4.message);
            setExporting(false);
          case 4:
            return _context11.a(2);
        }
      }, _callee11, null, [[1, 3]]);
    }));
    return function exportExcel() {
      return _ref45.apply(this, arguments);
    };
  }();

  // PDF 导出 (含图片) - 用 window.print + HTML 模板
  var exportPDF = function exportPDF() {
    setExporting(true);
    var win = window.open('', '_blank', 'width=900,height=700');
    if (!win) {
      toast('❌ 浏览器拦截了弹窗，请允许');
      setExporting(false);
      return;
    }
    var title = "\u5BA2\u670D\u6708\u5EA6\u62A5\u8868 \xB7 ".concat(filterMonth || '全部时段', " \xB7 ").concat(exportType === 'aftersales' ? '售后清单' : exportType === 'refills' ? '补件追踪' : exportType === 'refunds' ? '退款管理' : '完整报表');
    var renderImages = function renderImages(atts) {
      if (!includeImages || !atts || atts.length === 0) return '';
      return "<div style=\"display:flex;flex-wrap:wrap;gap:4px;margin-top:6px;\">".concat(atts.map(function (a) {
        return "<img src=\"".concat(a.url, "\" style=\"max-width:80px;max-height:80px;object-fit:cover;border:1px solid #ccc;border-radius:4px;\" />");
      }).join(''), "</div>");
    };
    var html = "<!DOCTYPE html><html lang=\"zh-CN\"><head><meta charset=\"utf-8\"><title>".concat(title, "</title>\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600;700&display=swap\" rel=\"stylesheet\">\n<style>\n  body { font-family: \"Noto Sans SC\", -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Microsoft JhengHei', 'Source Han Sans CN', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', 'Heiti SC', SimHei, sans-serif; padding:20px; color:#333; font-size:11px; -webkit-print-color-adjust: exact; print-color-adjust: exact; }\n  h1 { color:#0071e3; border-bottom:2px solid #0071e3; padding-bottom:8px; }\n  h2 { color:#333; margin-top:30px; border-bottom:1px solid #ddd; padding-bottom:6px; }\n  table { width:100%; border-collapse:collapse; margin:12px 0; font-size:10px; }\n  th,td { border:1px solid #ddd; padding:6px 8px; text-align:left; vertical-align:top; }\n  th { background:#f5f5f7; font-weight:600; }\n  tr:nth-child(even) { background:#fafafa; }\n  .tag { display:inline-block; padding:2px 6px; border-radius:8px; font-size:9px; font-weight:600; }\n  .amount { font-weight:600; color:#dc2626; }\n  .header-info { color:#666; font-size:11px; margin:8px 0 20px; }\n  @media print { body { padding:8px; } }\n</style></head><body>\n<h1>").concat(title, "</h1>\n<div class=\"header-info\">\u5BFC\u51FA\u65F6\u95F4\uFF1A").concat(new Date().toLocaleString('zh-CN'), " \xB7 \u6570\u636E\u6761\u6570\uFF1A\u552E\u540E ").concat(aftersales.length, " \xB7 \u8865\u4EF6 ").concat(refills.length, " \xB7 \u9000\u6B3E ").concat(refunds.length, "</div>");
    if (exportType === 'aftersales' || exportType === 'all') {
      html += "<h2>\uD83D\uDD27 \u552E\u540E\u6E05\u5355 (".concat(aftersales.length, " \u6761)</h2><table>\n<thead><tr><th>#</th><th>\u65E5\u671F</th><th>\u8BA2\u5355\u53F7</th><th>\u4F9B\u5E94\u5546</th><th>\u95EE\u9898/\u90E8\u4F4D</th><th>\u8BE6\u7EC6</th><th>\u56FE\u7247</th><th>\u72B6\u6001</th></tr></thead><tbody>");
      aftersales.forEach(function (e, idx) {
        var issue = ISSUE_TYPES.find(function (i) {
          return i.key === e.issue_type;
        });
        var status = AFTERSALE_STATUSES.find(function (s) {
          return s.key === e.status;
        });
        html += "<tr>\n<td>".concat(idx + 1, "</td>\n<td>").concat((e.created_at || '').slice(5, 10), "</td>\n<td>").concat(e.order_ref || '-', "</td>\n<td>").concat(e.supplier_name || '-', "</td>\n<td><span class=\"tag\" style=\"background:").concat((issue === null || issue === void 0 ? void 0 : issue.color) || 'gray', "20;color:").concat((issue === null || issue === void 0 ? void 0 : issue.color) || 'gray', ";\">").concat((issue === null || issue === void 0 ? void 0 : issue.label) || '-', "</span>").concat(e.damaged_part ? '<br/>' + e.damaged_part : '', "</td>\n<td>").concat((e.issue_detail || '').substring(0, 100), "</td>\n<td>").concat(renderImages(e.attachments), "</td>\n<td><span class=\"tag\" style=\"background:").concat((status === null || status === void 0 ? void 0 : status.bg) || '#eee', ";color:").concat((status === null || status === void 0 ? void 0 : status.color) || '#333', ";\">").concat((status === null || status === void 0 ? void 0 : status.label) || '-', "</span></td>\n</tr>");
      });
      html += '</tbody></table>';
    }
    if (exportType === 'refills' || exportType === 'all') {
      html += "<h2>\uD83D\uDCE6 \u8865\u4EF6\u8FFD\u8E2A (".concat(refills.length, " \u6761)</h2><table>\n<thead><tr><th>#</th><th>\u65E5\u671F</th><th>\u8BA2\u5355\u53F7</th><th>\u4F9B\u5E94\u5546</th><th>\u8865\u4EF6\u6E05\u5355</th><th>\u56FE\u7247</th><th>\u9884\u8BA1/\u5B9E\u9645</th><th>\u72B6\u6001</th></tr></thead><tbody>");
      refills.forEach(function (e, idx) {
        var status = REFILL_STATUSES.find(function (s) {
          return s.key === e.status;
        });
        var itemsList = (e.items || []).map(function (it) {
          return "".concat(it.item, "\xD7").concat(it.qty).concat(it.unit || '');
        }).join('，');
        html += "<tr>\n<td>".concat(idx + 1, "</td>\n<td>").concat((e.created_at || '').slice(5, 10), "</td>\n<td>").concat(e.order_ref || '-', "</td>\n<td>").concat(e.supplier_name || '-', "</td>\n<td>").concat(itemsList || '-', "</td>\n<td>").concat(renderImages(e.attachments), "</td>\n<td>").concat(e.expected_ship_date || '-', "<br/><span style=\"color:#16a34a;\">").concat(e.actual_ship_date || '-', "</span></td>\n<td><span class=\"tag\" style=\"background:").concat((status === null || status === void 0 ? void 0 : status.color) || 'gray', "20;color:").concat((status === null || status === void 0 ? void 0 : status.color) || 'gray', ";\">").concat((status === null || status === void 0 ? void 0 : status.label) || '-', "</span></td>\n</tr>");
      });
      html += '</tbody></table>';
    }
    if (exportType === 'refunds' || exportType === 'all') {
      var total = refunds.reduce(function (s, r) {
        return s + (r.status === 'completed' || r.status === 'approved' ? parseFloat(r.amount || 0) : 0);
      }, 0);
      html += "<h2>\uD83D\uDCB0 \u9000\u6B3E\u7BA1\u7406 (".concat(refunds.length, " \u6761 \xB7 \u5DF2\u5BA1/\u5DF2\u5B8C\u6210\u5171 $").concat(total.toFixed(2), ")</h2><table>\n<thead><tr><th>#</th><th>\u65E5\u671F</th><th>\u8BA2\u5355\u53F7</th><th>\u9000\u6B3E\u539F\u56E0</th><th>\u7C7B\u578B</th><th>\u91D1\u989D</th><th>\u652F\u4ED8\u65B9\u5F0F</th><th>\u56FE\u7247</th><th>\u72B6\u6001</th></tr></thead><tbody>");
      refunds.forEach(function (r, idx) {
        var type = REFUND_TYPES.find(function (t) {
          return t.key === r.refund_type;
        });
        var status = REFUND_STATUSES.find(function (s) {
          return s.key === r.status;
        });
        var pay = REFUND_PAYMENT_METHODS.find(function (p) {
          return p.key === r.payment_method;
        });
        html += "<tr>\n<td>".concat(idx + 1, "</td>\n<td>").concat((r.created_at || '').slice(5, 10), "</td>\n<td>").concat(r.order_ref || '-', "</td>\n<td>").concat(r.product_name ? '<strong>' + r.product_name + '</strong><br/>' : '').concat((r.refund_reason || '').substring(0, 120), "</td>\n<td><span class=\"tag\" style=\"background:").concat((type === null || type === void 0 ? void 0 : type.bg) || '#eee', ";color:").concat((type === null || type === void 0 ? void 0 : type.color) || '#333', ";\">").concat((type === null || type === void 0 ? void 0 : type.label) || '-', "</span></td>\n<td class=\"amount\">").concat(r.currency, " ").concat(parseFloat(r.amount).toFixed(2), "</td>\n<td>").concat((pay === null || pay === void 0 ? void 0 : pay.label) || '-', "</td>\n<td>").concat(renderImages(r.attachments), "</td>\n<td><span class=\"tag\" style=\"background:").concat((status === null || status === void 0 ? void 0 : status.bg) || '#eee', ";color:").concat((status === null || status === void 0 ? void 0 : status.color) || '#333', ";\">").concat((status === null || status === void 0 ? void 0 : status.label) || '-', "</span></td>\n</tr>");
      });
      html += '</tbody></table>';
    }
    html += "<div style=\"margin-top:30px;text-align:center;color:#999;font-size:10px;\">\u751F\u6210\u81EA\u7EDF\u4E00\u5DE5\u4F5C\u53F0 \xB7 ".concat(new Date().toLocaleString(), "</div>\n</body></html>");
    win.document.write(html);
    win.document.close();
    // 等字体 + 图片加载完才打印
    setTimeout(function () {
      try {
        var fontsReady = win.document.fonts && win.document.fonts.ready ? win.document.fonts.ready : Promise.resolve();
        var imgsReady = Promise.all(Array.from(win.document.images || []).map(function (img) {
          return img.complete ? Promise.resolve() : new Promise(function (res) {
            img.onload = img.onerror = res;
          });
        }));
        Promise.all([fontsReady, imgsReady]).then(function () {
          win.print();
          setExporting(false);
          toast('💡 选择"另存为 PDF"保存到本地');
          setTimeout(onClose, 800);
        });
      } catch (e) {
        win.print();
        setExporting(false);
        setTimeout(onClose, 800);
      }
    }, 800);
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.55)',
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
      borderRadius: 14,
      maxWidth: 480,
      width: '100%',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 17,
      fontWeight: 600
    }
  }, "\uD83D\uDCE5 \u5BFC\u51FA\u6708\u5EA6\u62A5\u8868"), /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: onClose,
    style: {
      padding: '4px 12px'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 6
    }
  }, "\u5BFC\u51FA\u7C7B\u578B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, [{
    k: 'aftersales',
    l: '🔧 售后清单',
    n: aftersales.length
  }, {
    k: 'refills',
    l: '📦 补件追踪',
    n: refills.length
  }, {
    k: 'refunds',
    l: '💰 退款管理',
    n: refunds.length
  }, {
    k: 'all',
    l: '📊 全部',
    n: aftersales.length + refills.length + refunds.length
  }].map(function (o) {
    return /*#__PURE__*/React.createElement("button", {
      key: o.k,
      onClick: function onClick() {
        return setExportType(o.k);
      },
      style: {
        padding: '6px 12px',
        borderRadius: 8,
        border: '1px solid ' + (exportType === o.k ? 'var(--accent)' : 'var(--line)'),
        background: exportType === o.k ? 'var(--accent-soft)' : 'white',
        color: exportType === o.k ? 'var(--accent)' : 'var(--ink-2)',
        cursor: 'pointer',
        fontSize: 12,
        fontFamily: 'inherit',
        fontWeight: exportType === o.k ? 600 : 400
      }
    }, o.l, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        opacity: 0.7
      }
    }, "(", o.n, ")"));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 6
    }
  }, "\u5BFC\u51FA\u683C\u5F0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setFormat('excel');
    },
    style: {
      flex: 1,
      padding: '10px',
      borderRadius: 8,
      border: '1px solid ' + (format === 'excel' ? '#16a34a' : 'var(--line)'),
      background: format === 'excel' ? '#dcfce7' : 'white',
      color: format === 'excel' ? '#14532d' : 'var(--ink-2)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: format === 'excel' ? 600 : 400,
      fontSize: 13
    }
  }, "\uD83D\uDCCA Excel", /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      marginTop: 2,
      fontWeight: 400
    }
  }, "\u542B\u56FE\u7247\u94FE\u63A5")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setFormat('pdf');
    },
    style: {
      flex: 1,
      padding: '10px',
      borderRadius: 8,
      border: '1px solid ' + (format === 'pdf' ? '#dc2626' : 'var(--line)'),
      background: format === 'pdf' ? '#fef2f2' : 'white',
      color: format === 'pdf' ? '#991b1b' : 'var(--ink-2)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: format === 'pdf' ? 600 : 400,
      fontSize: 13
    }
  }, "\uD83D\uDCC4 PDF", /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      marginTop: 2,
      fontWeight: 400
    }
  }, "\u5D4C\u5165\u56FE\u7247")))), format === 'pdf' && /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      padding: 8,
      background: 'var(--bg)',
      borderRadius: 6,
      marginBottom: 14,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: includeImages,
    onChange: function onChange(e) {
      return setIncludeImages(e.target.checked);
    }
  }), /*#__PURE__*/React.createElement("span", null, "\u5305\u542B\u56FE\u7247\u7F29\u7565\u56FE"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontSize: 10,
      marginLeft: 'auto'
    }
  }, "(\u5173\u6389\u53EF\u52A0\u901F)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn-sec",
    style: {
      padding: '8px 16px'
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: format === 'excel' ? exportExcel : exportPDF,
    disabled: exporting,
    style: {
      padding: '8px 20px',
      background: 'var(--accent)',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 13,
      opacity: exporting ? 0.5 : 1
    }
  }, exporting ? '⏳ 生成中...' : '📥 立即导出'))));
};

// ============================================================
// 汇报工单 Module - 员工汇报问题 / 主管处理
// ============================================================
var ReportModule = function ReportModule(_ref46) {
  var user = _ref46.user,
    employees = _ref46.employees,
    toast = _ref46.toast,
    cloudOn = _ref46.cloudOn;
  var _useState93 = useState('inbox'),
    _useState94 = _slicedToArray(_useState93, 2),
    tab = _useState94[0],
    setTab = _useState94[1]; // inbox | mine | new | all (admin)
  var _useState95 = useState([]),
    _useState96 = _slicedToArray(_useState95, 2),
    tickets = _useState96[0],
    setTickets = _useState96[1];
  var _useState97 = useState(null),
    _useState98 = _slicedToArray(_useState97, 2),
    openTicket = _useState98[0],
    setOpenTicket = _useState98[1];
  var _useState99 = useState(null),
    _useState100 = _slicedToArray(_useState99, 2),
    draft = _useState100[0],
    setDraft = _useState100[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';

  // 加载工单（云端优先）
  var loadTickets = /*#__PURE__*/function () {
    var _ref47 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
      var cloud;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.n) {
          case 0:
            if (!(cloudOn && CLOUD.client)) {
              _context12.n = 2;
              break;
            }
            _context12.n = 1;
            return CLOUD.list('workspace_tickets', {
              order: {
                col: 'updated_at',
                asc: false
              },
              limit: 500
            });
          case 1:
            cloud = _context12.v;
            if (!(cloud !== null)) {
              _context12.n = 2;
              break;
            }
            setTickets(cloud);
            return _context12.a(2);
          case 2:
            setTickets(STORE.get('tickets_local', []));
          case 3:
            return _context12.a(2);
        }
      }, _callee12);
    }));
    return function loadTickets() {
      return _ref47.apply(this, arguments);
    };
  }();
  useEffect(function () {
    loadTickets();
  }, [cloudOn]);

  // 保存工单
  var saveTicket = /*#__PURE__*/function () {
    var _ref48 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(ticket) {
      var now, record, saved, local, idx;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.n) {
          case 0:
            now = nowISO();
            record = _objectSpread(_objectSpread({}, ticket), {}, {
              id: ticket.id || uid(),
              updated_at: now,
              created_at: ticket.created_at || now
            });
            if (!(cloudOn && CLOUD.client)) {
              _context13.n = 4;
              break;
            }
            _context13.n = 1;
            return CLOUD.upsert('workspace_tickets', record);
          case 1:
            saved = _context13.v;
            if (!saved) {
              _context13.n = 3;
              break;
            }
            _context13.n = 2;
            return loadTickets();
          case 2:
            return _context13.a(2, record);
          case 3:
            toast('⚠ 云端保存失败，已存至本地');
          case 4:
            local = STORE.get('tickets_local', []);
            idx = local.findIndex(function (t) {
              return t.id === record.id;
            });
            if (idx >= 0) local[idx] = record;else local.unshift(record);
            STORE.set('tickets_local', local);
            setTickets(local);
            return _context13.a(2, record);
        }
      }, _callee13);
    }));
    return function saveTicket(_x1) {
      return _ref48.apply(this, arguments);
    };
  }();

  // 新建工单
  var createTicket = /*#__PURE__*/function () {
    var _ref49 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(t) {
      var record;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.n) {
          case 0:
            record = _objectSpread(_objectSpread({}, t), {}, {
              created_by_id: user.id,
              created_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
              status: 'pending',
              comments: [],
              attachments: t.attachments || []
            });
            _context14.n = 1;
            return saveTicket(record);
          case 1:
            setDraft(null);
            toast('✓ 工单已提交');
            setTab('mine');
          case 2:
            return _context14.a(2);
        }
      }, _callee14);
    }));
    return function createTicket(_x10) {
      return _ref49.apply(this, arguments);
    };
  }();

  // 状态变更
  var updateStatus = /*#__PURE__*/function () {
    var _ref50 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(ticket, newStatus) {
      var _TICKET_STATUS$find;
      var comment, updated, saved;
      return _regenerator().w(function (_context15) {
        while (1) switch (_context15.n) {
          case 0:
            comment = {
              id: uid(),
              by_id: user.id,
              by_name: user.name + (user.alias ? ' ' + user.alias : ''),
              time: nowISO(),
              type: 'status',
              content: "\u72B6\u6001\u53D8\u66F4\u4E3A\u300C".concat((_TICKET_STATUS$find = TICKET_STATUS.find(function (s) {
                return s.key === newStatus;
              })) === null || _TICKET_STATUS$find === void 0 ? void 0 : _TICKET_STATUS$find.label, "\u300D"),
              from: ticket.status,
              to: newStatus
            };
            updated = _objectSpread(_objectSpread({}, ticket), {}, {
              status: newStatus,
              comments: [].concat(_toConsumableArray(ticket.comments || []), [comment])
            });
            if (newStatus === 'resolved' || newStatus === 'rejected') updated.resolved_at = nowISO();
            _context15.n = 1;
            return saveTicket(updated);
          case 1:
            saved = _context15.v;
            setOpenTicket(saved);
            toast("\u2713 ".concat(comment.content));
          case 2:
            return _context15.a(2);
        }
      }, _callee15);
    }));
    return function updateStatus(_x11, _x12) {
      return _ref50.apply(this, arguments);
    };
  }();

  // 添加评论
  var addComment = /*#__PURE__*/function () {
    var _ref51 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee16(ticket, text) {
      var comment, updated, saved;
      return _regenerator().w(function (_context16) {
        while (1) switch (_context16.n) {
          case 0:
            if (text.trim()) {
              _context16.n = 1;
              break;
            }
            return _context16.a(2);
          case 1:
            comment = {
              id: uid(),
              by_id: user.id,
              by_name: user.name + (user.alias ? ' ' + user.alias : ''),
              time: nowISO(),
              type: 'comment',
              content: text.trim()
            };
            updated = _objectSpread(_objectSpread({}, ticket), {}, {
              comments: [].concat(_toConsumableArray(ticket.comments || []), [comment])
            });
            _context16.n = 2;
            return saveTicket(updated);
          case 2:
            saved = _context16.v;
            setOpenTicket(saved);
          case 3:
            return _context16.a(2);
        }
      }, _callee16);
    }));
    return function addComment(_x13, _x14) {
      return _ref51.apply(this, arguments);
    };
  }();

  // 删除（仅创建人或主管）
  var deleteTicket = /*#__PURE__*/function () {
    var _ref52 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee17(id) {
      var ok, local;
      return _regenerator().w(function (_context17) {
        while (1) switch (_context17.n) {
          case 0:
            _context17.n = 1;
            return wsConfirm('永久删除此工单？');
          case 1:
            if (_context17.v) {
              _context17.n = 2;
              break;
            }
            return _context17.a(2);
          case 2:
            if (!(cloudOn && CLOUD.client)) {
              _context17.n = 5;
              break;
            }
            _context17.n = 3;
            return CLOUD.del('workspace_tickets', id);
          case 3:
            ok = _context17.v;
            if (!ok) {
              _context17.n = 4;
              break;
            }
            _context17.n = 4;
            return loadTickets();
          case 4:
            _context17.n = 6;
            break;
          case 5:
            local = STORE.get('tickets_local', []).filter(function (t) {
              return t.id !== id;
            });
            STORE.set('tickets_local', local);
            setTickets(local);
          case 6:
            setOpenTicket(null);
            toast('已删除');
          case 7:
            return _context17.a(2);
        }
      }, _callee17);
    }));
    return function deleteTicket(_x15) {
      return _ref52.apply(this, arguments);
    };
  }();

  // 筛选
  var inbox = tickets.filter(function (t) {
    return isAdmin && t.target_id === user.id || isAdmin && !t.target_id && t.assignee === 'admin' || t.target_id === user.id;
  });
  var mine = tickets.filter(function (t) {
    return t.created_by_id === user.id;
  });
  var all = tickets;
  var list = tab === 'inbox' ? inbox : tab === 'mine' ? mine : tab === 'all' ? all : [];
  var pendingCount = inbox.filter(function (t) {
    return t.status === 'pending' || t.status === 'accepted';
  }).length;
  var myPendingCount = mine.filter(function (t) {
    return t.status === 'pending' || t.status === 'accepted' || t.status === 'processing';
  }).length;
  return /*#__PURE__*/React.createElement("div", {
    className: "space-y-5 fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-3 flex-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 flex-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(tab === 'inbox' ? 'active' : ''),
    onClick: function onClick() {
      return setTab('inbox');
    }
  }, "\uD83D\uDCE5 \u6211\u7684\u6536\u4EF6\u7BB1 ", pendingCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "badge"
  }, pendingCount)), /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(tab === 'mine' ? 'active' : ''),
    onClick: function onClick() {
      return setTab('mine');
    }
  }, "\uD83D\uDCE4 \u6211\u53D1\u8D77\u7684 ", myPendingCount > 0 && /*#__PURE__*/React.createElement("span", {
    className: "badge",
    style: {
      background: 'var(--gold)'
    }
  }, myPendingCount)), isAdmin && /*#__PURE__*/React.createElement("button", {
    className: "tab-btn ".concat(tab === 'all' ? 'active' : ''),
    onClick: function onClick() {
      return setTab('all');
    }
  }, "\uD83D\uDDC2 \u5168\u90E8\u5DE5\u5355 (", tickets.length, ")")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cloud-status ".concat(cloudOn ? 'ok' : 'local')
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), cloudOn ? '云端协同' : '本地'), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: function onClick() {
      var _employees$find;
      return setDraft({
        title: '',
        department: 'merchandiser',
        priority: 'mid',
        related_order: '',
        target_id: isAdmin ? '' : ((_employees$find = employees.find(function (e) {
          return e.role === 'admin' || e.role === 'super_admin';
        })) === null || _employees$find === void 0 ? void 0 : _employees$find.id) || '',
        target_name: '',
        description: '',
        attachments: []
      });
    }
  }, "+ \u65B0\u5EFA\u5DE5\u5355")))), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl overflow-hidden"
  }, /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto scrollbar-thin"
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      minWidth: '900px'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 50
    }
  }, "\u4F18\u5148\u7EA7"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 80
    }
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("th", {
    style: {
      minWidth: 240
    }
  }, "\u6807\u9898"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 90
    }
  }, "\u5BF9\u63A5\u90E8\u95E8"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 100
    }
  }, "\u53D1\u8D77\u4EBA"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 100
    }
  }, "\u63A5\u6536\u4EBA"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 120
    }
  }, "\u66F4\u65B0\u65F6\u95F4"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 50
    }
  }))), /*#__PURE__*/React.createElement("tbody", null, list.length === 0 ? /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: 8,
    style: {
      textAlign: 'center',
      padding: '40px',
      color: 'var(--ink-3)'
    }
  }, tab === 'inbox' ? '收件箱为空 ✨' : tab === 'mine' ? '你还没发起过工单 · 点击右上"+ 新建工单"' : '暂无工单')) : list.map(function (t) {
    var _t$comments;
    var dept = DEPARTMENTS.find(function (d) {
      return d.key === t.department;
    });
    var st = TICKET_STATUS.find(function (s) {
      return s.key === t.status;
    });
    var pri = TICKET_PRIORITY.find(function (p) {
      return p.key === t.priority;
    });
    return /*#__PURE__*/React.createElement("tr", {
      key: t.id,
      style: {
        cursor: 'pointer'
      },
      onClick: function onClick() {
        return setOpenTicket(t);
      }
    }, /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "tag ".concat(pri === null || pri === void 0 ? void 0 : pri.cls),
      style: {
        fontSize: 10
      }
    }, pri === null || pri === void 0 ? void 0 : pri.label)), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "tag ".concat(st === null || st === void 0 ? void 0 : st.cls),
      style: {
        fontSize: 10
      }
    }, st === null || st === void 0 ? void 0 : st.label)), /*#__PURE__*/React.createElement("td", {
      className: "font-bold text-xs"
    }, t.title, t.related_order && /*#__PURE__*/React.createElement("span", {
      className: "font-mono ml-2 text-[10px]",
      style: {
        color: 'var(--ink-4)'
      }
    }, "\xB7 ", t.related_order)), /*#__PURE__*/React.createElement("td", {
      className: "text-xs"
    }, dept === null || dept === void 0 ? void 0 : dept.icon, " ", dept === null || dept === void 0 ? void 0 : dept.label), /*#__PURE__*/React.createElement("td", {
      className: "text-xs",
      style: {
        color: 'var(--ink-3)'
      }
    }, t.created_by_name), /*#__PURE__*/React.createElement("td", {
      className: "text-xs",
      style: {
        color: 'var(--ink-3)'
      }
    }, t.target_name || '主管'), /*#__PURE__*/React.createElement("td", {
      className: "text-[10px] font-mono",
      style: {
        color: 'var(--ink-4)'
      }
    }, new Date(t.updated_at).toLocaleString('zh-CN', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })), /*#__PURE__*/React.createElement("td", null, (((_t$comments = t.comments) === null || _t$comments === void 0 ? void 0 : _t$comments.length) || 0) > 0 && /*#__PURE__*/React.createElement("span", {
      className: "text-[10px]",
      style: {
        color: 'var(--ink-3)'
      }
    }, "\uD83D\uDCAC", t.comments.length)));
  }))))), draft && /*#__PURE__*/React.createElement(TicketDraftModal, {
    draft: draft,
    setDraft: setDraft,
    employees: employees,
    user: user,
    onCancel: function onCancel() {
      return setDraft(null);
    },
    onSubmit: createTicket
  }), openTicket && /*#__PURE__*/React.createElement(TicketDetailModal, {
    ticket: openTicket,
    user: user,
    employees: employees,
    onClose: function onClose() {
      return setOpenTicket(null);
    },
    onUpdateStatus: function onUpdateStatus(s) {
      return updateStatus(openTicket, s);
    },
    onAddComment: function onAddComment(t) {
      return addComment(openTicket, t);
    },
    onDelete: function onDelete() {
      return deleteTicket(openTicket.id);
    }
  }));
};
var TicketDraftModal = function TicketDraftModal(_ref53) {
  var _draft$attachments;
  var draft = _ref53.draft,
    setDraft = _ref53.setDraft,
    employees = _ref53.employees,
    user = _ref53.user,
    onCancel = _ref53.onCancel,
    onSubmit = _ref53.onSubmit;
  var fileInputRef = useRef(null);
  var handleFile = function handleFile(file) {
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert('图片需小于 2MB');
      return;
    }
    var r = new FileReader();
    r.onload = function (e) {
      return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
        attachments: [].concat(_toConsumableArray(draft.attachments || []), [{
          id: uid(),
          data: e.target.result,
          name: file.name,
          time: nowISO()
        }])
      }));
    };
    r.readAsDataURL(file);
  };
  useEffect(function () {
    var onPaste = function onPaste(e) {
      var _e$clipboardData;
      var items = (_e$clipboardData = e.clipboardData) === null || _e$clipboardData === void 0 ? void 0 : _e$clipboardData.items;
      if (!items) return;
      var _iterator = _createForOfIteratorHelper(items),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var it = _step.value;
          if (it.type.startsWith('image')) handleFile(it.getAsFile());
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };
    window.addEventListener('paste', onPaste);
    return function () {
      return window.removeEventListener('paste', onPaste);
    };
  }, [draft]);
  var canSubmit = draft.title.trim() && draft.description.trim() && draft.target_id;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onClick: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-card paper p-6 w-full",
    style: {
      maxWidth: 680
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between mb-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display text-lg font-bold"
  }, "\uD83D\uDCDD \u65B0\u5EFA\u8DE8\u90E8\u95E8\u5DE5\u5355"), /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost",
    onClick: onCancel
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    className: "w-5 h-5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[10px] font-bold uppercase",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u6807\u9898 *"), /*#__PURE__*/React.createElement("input", {
    value: draft.title,
    onChange: function onChange(e) {
      return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
        title: e.target.value
      }));
    },
    placeholder: "\u4F8B\uFF1AVK6080 \u5DE5\u5382\u672A\u6309\u65F6\u51FA\u8D27\uFF0C\u5BA2\u6237\u5728\u7EBF\u8FFD\u95EE"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-3"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[10px] font-bold uppercase",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u5BF9\u63A5\u90E8\u95E8 *"), /*#__PURE__*/React.createElement("select", {
    value: draft.department,
    onChange: function onChange(e) {
      return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
        department: e.target.value
      }));
    }
  }, DEPARTMENTS.map(function (d) {
    return /*#__PURE__*/React.createElement("option", {
      key: d.key,
      value: d.key
    }, d.icon, " ", d.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[10px] font-bold uppercase",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u4F18\u5148\u7EA7"), /*#__PURE__*/React.createElement("select", {
    value: draft.priority,
    onChange: function onChange(e) {
      return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
        priority: e.target.value
      }));
    }
  }, TICKET_PRIORITY.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p.key,
      value: p.key
    }, p.label);
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[10px] font-bold uppercase",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u5173\u8054\u8BA2\u5355\u53F7"), /*#__PURE__*/React.createElement("input", {
    value: draft.related_order,
    onChange: function onChange(e) {
      return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
        related_order: e.target.value
      }));
    },
    placeholder: "\u53EF\u9009"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[10px] font-bold uppercase",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u63A5\u6536\u4EBA * (\u9ED8\u8BA4\u53D1\u7ED9\u4E3B\u7BA1)"), /*#__PURE__*/React.createElement("select", {
    value: draft.target_id,
    onChange: function onChange(e) {
      var emp = employees.find(function (em) {
        return em.id === e.target.value;
      });
      setDraft(_objectSpread(_objectSpread({}, draft), {}, {
        target_id: e.target.value,
        target_name: emp ? emp.name + (emp.alias ? ' ' + emp.alias : '') : ''
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u2014 \u8BF7\u9009\u62E9 \u2014"), employees.filter(function (e) {
    return e.role === 'admin' || e.role === 'super_admin';
  }).map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, "\uD83D\uDC51 ", e.name, e.alias ? " ".concat(e.alias) : '', " (\u4E3B\u7BA1)");
  }), /*#__PURE__*/React.createElement("optgroup", {
    label: "\u5458\u5DE5"
  }, employees.filter(function (e) {
    return e.role !== 'admin' && e.id !== user.id;
  }).map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.name, e.alias ? " ".concat(e.alias) : '');
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[10px] font-bold uppercase",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u8BE6\u7EC6\u63CF\u8FF0 * (\u95EE\u9898\u662F\u4EC0\u4E48\uFF0C\u9700\u8981\u54EA\u4E2A\u90E8\u95E8\u600E\u4E48\u914D\u5408)"), /*#__PURE__*/React.createElement("textarea", {
    rows: "5",
    value: draft.description,
    onChange: function onChange(e) {
      return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
        description: e.target.value
      }));
    },
    placeholder: "\u4F8B\uFF1A\n1. VK6080 \u8FD9\u5355\u8BA2\u5355\u5DF2\u7ECF\u4E0B\u5355 20 \u5929\uFF0C\u5DE5\u5382\u4E00\u76F4\u6CA1\u51FA\u8D27\n2. \u5BA2\u6237\u5DF2\u53D1\u90AE\u4EF6\u4E09\u6B21\u50AC\u95EE\uFF0C\u6001\u5EA6\u8D8A\u6765\u8D8A\u6025\n3. \u9700\u8981\u8DDF\u5355\u90E8\u95E8\u5E2E\u5FD9\u50AC\u5DE5\u5382\uFF0C\u6700\u8FDF\u672C\u5468\u4E94\u51FA\u8D27\n4. \u5982\u6709\u95EE\u9898\uFF0C\u8BF7\u56DE\u590D\u7ED9\u6211\u8F6C\u544A\u5BA2\u6237"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "text-[10px] font-bold uppercase mb-1 block",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u622A\u56FE\u9644\u4EF6\uFF08\u7C98\u8D34 / \u62D6\u62FD / \u70B9\u51FB\uFF09"), /*#__PURE__*/React.createElement("div", {
    className: "dropzone",
    onClick: function onClick() {
      var _fileInputRef$current;
      return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
    },
    onDragOver: function onDragOver(e) {
      e.preventDefault();
    },
    onDrop: function onDrop(e) {
      var _e$dataTransfer$files;
      e.preventDefault();
      var f = (_e$dataTransfer$files = e.dataTransfer.files) === null || _e$dataTransfer$files === void 0 ? void 0 : _e$dataTransfer$files[0];
      if (f) handleFile(f);
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload",
    className: "w-5 h-5 mx-auto mb-1",
    style: {
      color: 'var(--ink-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "text-xs font-bold",
    style: {
      color: 'var(--ink-2)'
    }
  }, "\u6DFB\u52A0\u622A\u56FE\uFF08Ctrl+V \u7C98\u8D34\u6700\u5FEB\uFF09"), /*#__PURE__*/React.createElement("input", {
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
  })), ((_draft$attachments = draft.attachments) === null || _draft$attachments === void 0 ? void 0 : _draft$attachments.length) > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex gap-2 flex-wrap"
  }, draft.attachments.map(function (a) {
    return /*#__PURE__*/React.createElement("div", {
      key: a.id,
      className: "relative group"
    }, /*#__PURE__*/React.createElement("img", {
      src: a.data,
      className: "thumb"
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
          attachments: draft.attachments.filter(function (x) {
            return x.id !== a.id;
          })
        }));
      },
      className: "absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center opacity-0 group-hover:opacity-100",
      style: {
        background: 'var(--bad)',
        border: '1.5px solid white'
      }
    }, "\xD7"));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 pt-3 border-t flex justify-end gap-2",
    style: {
      borderColor: 'var(--line)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost",
    onClick: onCancel
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    disabled: !canSubmit,
    onClick: function onClick() {
      return onSubmit(draft);
    }
  }, "\uD83D\uDCE8 \u63D0\u4EA4\u5DE5\u5355"))));
};
var TicketDetailModal = function TicketDetailModal(_ref54) {
  var _ticket$attachments, _ticket$comments, _ticket$comments2;
  var ticket = _ref54.ticket,
    user = _ref54.user,
    employees = _ref54.employees,
    onClose = _ref54.onClose,
    onUpdateStatus = _ref54.onUpdateStatus,
    onAddComment = _ref54.onAddComment,
    onDelete = _ref54.onDelete;
  var _useState101 = useState(''),
    _useState102 = _slicedToArray(_useState101, 2),
    newComment = _useState102[0],
    setNewComment = _useState102[1];
  var _useState103 = useState(null),
    _useState104 = _slicedToArray(_useState103, 2),
    viewImg = _useState104[0],
    setViewImg = _useState104[1];
  var dept = DEPARTMENTS.find(function (d) {
    return d.key === ticket.department;
  });
  var st = TICKET_STATUS.find(function (s) {
    return s.key === ticket.status;
  });
  var pri = TICKET_PRIORITY.find(function (p) {
    return p.key === ticket.priority;
  });
  var isCreator = ticket.created_by_id === user.id;
  var isTarget = ticket.target_id === user.id;
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var canChangeStatus = isTarget || isAdmin;
  var canDelete = isCreator || isAdmin;
  var allowedTransitions = ticket.status === 'pending' ? ['accepted', 'rejected'] : ticket.status === 'accepted' ? ['processing', 'rejected'] : ticket.status === 'processing' ? ['resolved', 'rejected'] : [];
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-card paper p-6 w-full",
    style: {
      maxWidth: 760
    },
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-start justify-between mb-4 gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 min-w-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2 mb-1 flex-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tag ".concat(pri === null || pri === void 0 ? void 0 : pri.cls)
  }, pri === null || pri === void 0 ? void 0 : pri.label), /*#__PURE__*/React.createElement("span", {
    className: "tag ".concat(st === null || st === void 0 ? void 0 : st.cls)
  }, st === null || st === void 0 ? void 0 : st.label), /*#__PURE__*/React.createElement("span", {
    className: "text-xs",
    style: {
      color: 'var(--ink-3)'
    }
  }, dept === null || dept === void 0 ? void 0 : dept.icon, " ", dept === null || dept === void 0 ? void 0 : dept.label), ticket.related_order && /*#__PURE__*/React.createElement("span", {
    className: "font-mono text-[11px]",
    style: {
      color: 'var(--accent)'
    }
  }, "\uD83D\uDCE6 ", ticket.related_order)), /*#__PURE__*/React.createElement("div", {
    className: "font-display text-lg font-bold"
  }, ticket.title), /*#__PURE__*/React.createElement("div", {
    className: "text-[11px] font-mono mt-1",
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u53D1\u8D77\u4EBA ", ticket.created_by_name, " \u2192 \u63A5\u6536\u4EBA ", ticket.target_name || '主管', " \xB7 ", new Date(ticket.created_at).toLocaleString('zh-CN'))), /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    className: "w-5 h-5"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3 mb-3",
    style: {
      background: 'var(--bg)',
      whiteSpace: 'pre-line',
      fontSize: 13,
      lineHeight: 1.65
    }
  }, ticket.description), ((_ticket$attachments = ticket.attachments) === null || _ticket$attachments === void 0 ? void 0 : _ticket$attachments.length) > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mb-3 flex gap-2 flex-wrap"
  }, ticket.attachments.map(function (a) {
    return /*#__PURE__*/React.createElement("img", {
      key: a.id,
      src: a.data,
      className: "thumb",
      onClick: function onClick() {
        return setViewImg(a.data);
      }
    });
  })), canChangeStatus && allowedTransitions.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3 mb-3 border-2",
    style: {
      borderColor: 'var(--accent-mid)',
      background: 'var(--accent-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-bold uppercase mb-2",
    style: {
      color: 'var(--accent)'
    }
  }, "\u53D8\u66F4\u72B6\u6001 (\u4F5C\u4E3A\u63A5\u6536\u4EBA)"), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-wrap gap-2"
  }, allowedTransitions.map(function (s) {
    var trans = TICKET_STATUS.find(function (x) {
      return x.key === s;
    });
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      className: "tab-btn",
      onClick: function onClick() {
        return onUpdateStatus(s);
      }
    }, "\u2192 ", trans.label);
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "text-[10px] font-bold uppercase mb-2",
    style: {
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDCAC \u6C9F\u901A\u8BB0\u5F55 (", ((_ticket$comments = ticket.comments) === null || _ticket$comments === void 0 ? void 0 : _ticket$comments.length) || 0, ")"), ((_ticket$comments2 = ticket.comments) === null || _ticket$comments2 === void 0 ? void 0 : _ticket$comments2.length) > 0 ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-2 max-h-60 overflow-y-auto scrollbar-thin"
  }, ticket.comments.map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      className: "rounded-lg p-2 border",
      style: {
        borderColor: 'var(--line)',
        background: c.type === 'status' ? 'var(--bg)' : 'white'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-1"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[11px] font-bold",
      style: {
        color: c.type === 'status' ? 'var(--accent)' : 'var(--ink-2)'
      }
    }, c.type === 'status' && '🔄 ', c.by_name), /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] font-mono",
      style: {
        color: 'var(--ink-4)'
      }
    }, new Date(c.time).toLocaleString('zh-CN', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    }))), /*#__PURE__*/React.createElement("div", {
      className: "text-xs",
      style: {
        color: c.type === 'status' ? 'var(--ink-3)' : 'var(--ink)'
      }
    }, c.content));
  })) : /*#__PURE__*/React.createElement("div", {
    className: "text-xs text-center py-3",
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u6682\u65E0\u6C9F\u901A")), /*#__PURE__*/React.createElement("div", {
    className: "rounded-lg p-3 border-2",
    style: {
      borderColor: 'var(--line)',
      background: 'var(--bg)'
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    rows: "2",
    value: newComment,
    onChange: function onChange(e) {
      return setNewComment(e.target.value);
    },
    placeholder: "\u8865\u5145\u8FDB\u5C55\u3001\u63D0\u4F9B\u4FE1\u606F\u3001\u8FFD\u95EE..."
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-2 flex justify-between items-center"
  }, canDelete && /*#__PURE__*/React.createElement("button", {
    className: "btn-ghost text-[11px]",
    onClick: onDelete,
    style: {
      color: 'var(--bad)'
    }
  }, "\uD83D\uDDD1 \u5220\u9664\u5DE5\u5355"), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri text-xs",
    disabled: !newComment.trim(),
    onClick: function onClick() {
      onAddComment(newComment);
      setNewComment('');
    }
  }, "\uD83D\uDCAC \u53D1\u9001"))), viewImg && /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    style: {
      zIndex: 60
    },
    onClick: function onClick() {
      return setViewImg(null);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: viewImg,
    style: {
      maxWidth: '90vw',
      maxHeight: '90vh',
      borderRadius: 8
    }
  }))));
};

// ============================================================
// 知识库模块 - 从 Supabase 拉取双语 Q&A
// ============================================================
// ============================================================
// 知识库模块 - 跳转到独立 kb.html (Supabase + Gemini + 智能搜索 + 编辑同步)
// ============================================================
