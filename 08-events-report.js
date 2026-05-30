// ════════════════════════════════════════════════════════════════════
// 📋 售后/补件/退款(fix81 完成统计可点)+ 汇总 + EventListModal · fix28-96
// APP_VERSION: 2026.05.29-fix96
// ════════════════════════════════════════════════════════════════════
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
// ════════════════════════════════════════════════════════════════════
// 📋 售后/补件/退款(fix81 完成统计可点)+ 汇总 + EventListModal · fix28-96
// APP_VERSION: 2026.05.29-fix96
// ════════════════════════════════════════════════════════════════════

var EventsModule = function EventsModule(_ref) {
  var _window$__canProcessR, _window;
  var user = _ref.user,
    employees = _ref.employees,
    records = _ref.records,
    toast = _ref.toast,
    cloudOn = _ref.cloudOn;
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
    suppliers: suppliers
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
var AftersalesTable = function AftersalesTable(_ref0) {
  var items = _ref0.items,
    employees = _ref0.employees,
    suppliers = _ref0.suppliers,
    user = _ref0.user,
    isAdmin = _ref0.isAdmin,
    onEdit = _ref0.onEdit,
    onDelete = _ref0.onDelete,
    onUpdateStatus = _ref0.onUpdateStatus;
  var _useState33 = useState(null),
    _useState34 = _slicedToArray(_useState33, 2),
    openImageId = _useState34[0],
    setOpenImageId = _useState34[1];
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
    }, e.order_ref), /*#__PURE__*/React.createElement("td", {
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
    }() : '-'), /*#__PURE__*/React.createElement("td", {
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
      onClick: function onClick() {
        if (confirm("\u5C06\u300C".concat(e.order_ref, "\u300D\u6807\u8BB0\u4E3A\u5DF2\u5B8C\u6210?"))) onUpdateStatus(e.id, 'closed');
      },
      className: "btn-ghost",
      style: {
        padding: '3px 6px',
        fontSize: 11,
        color: '#16a34a'
      },
      title: "\u6807\u8BB0\u5DF2\u5B8C\u6210"
    }, "\u2713"), /*#__PURE__*/React.createElement("button", {
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
  }));
};

// ============================================================
// 补件追踪表格
// ============================================================
var RefillsTable = function RefillsTable(_ref1) {
  var items = _ref1.items,
    employees = _ref1.employees,
    suppliers = _ref1.suppliers,
    user = _ref1.user,
    isAdmin = _ref1.isAdmin,
    onEdit = _ref1.onEdit,
    onDelete = _ref1.onDelete,
    onUpdateStatus = _ref1.onUpdateStatus;
  var _useState35 = useState(null),
    _useState36 = _slicedToArray(_useState35, 2),
    openImageId = _useState36[0],
    setOpenImageId = _useState36[1];
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
    }, e.order_ref), /*#__PURE__*/React.createElement("td", {
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
    }() : '-'), /*#__PURE__*/React.createElement("td", {
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
      onClick: function onClick() {
        if (confirm("\u5C06\u300C".concat(e.order_ref, "\u300D\u6807\u8BB0\u4E3A\u5DF2\u7B7E\u6536?"))) onUpdateStatus(e.id, 'delivered');
      },
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
var RefundsTable = function RefundsTable(_ref10) {
  var items = _ref10.items,
    employees = _ref10.employees,
    suppliers = _ref10.suppliers,
    user = _ref10.user,
    isFinance = _ref10.isFinance,
    canRefundReview = _ref10.canRefundReview,
    onEdit = _ref10.onEdit,
    onDelete = _ref10.onDelete,
    onReview = _ref10.onReview;
  var _useState37 = useState(null),
    _useState38 = _slicedToArray(_useState37, 2),
    openImageId = _useState38[0],
    setOpenImageId = _useState38[1];
  // 顶部汇总
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
    }, r.order_ref), /*#__PURE__*/React.createElement("td", {
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
    }() : '-'), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
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
  }));
};

// ============================================================
// 退款审核 modal (财务审批 + 完成)
// ============================================================
var RefundReviewModal = function RefundReviewModal(_ref11) {
  var refund = _ref11.refund,
    user = _ref11.user,
    onClose = _ref11.onClose,
    onSubmit = _ref11.onSubmit;
  var _useState39 = useState(''),
    _useState40 = _slicedToArray(_useState39, 2),
    notes = _useState40[0],
    setNotes = _useState40[1];
  var _useState41 = useState(''),
    _useState42 = _slicedToArray(_useState41, 2),
    externalRefundId = _useState42[0],
    setExternalRefundId = _useState42[1];
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
var ImageGalleryModal = function ImageGalleryModal(_ref12) {
  var event = _ref12.event,
    onClose = _ref12.onClose;
  var _useState43 = useState(0),
    _useState44 = _slicedToArray(_useState43, 2),
    activeIdx = _useState44[0],
    setActiveIdx = _useState44[1];
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
var AmountSummaryWidget = function AmountSummaryWidget(_ref13) {
  var title = _ref13.title,
    icon = _ref13.icon,
    color = _ref13.color,
    items = _ref13.items,
    statusLabels = _ref13.statusLabels,
    _ref13$statusKey = _ref13.statusKey,
    statusKey = _ref13$statusKey === void 0 ? 'status' : _ref13$statusKey,
    _ref13$amountKey = _ref13.amountKey,
    amountKey = _ref13$amountKey === void 0 ? 'amount' : _ref13$amountKey,
    getSite = _ref13.getSite,
    onClickStats = _ref13.onClickStats;
  var _useState45 = useState('7'),
    _useState46 = _slicedToArray(_useState45, 2),
    range = _useState46[0],
    setRange = _useState46[1]; // 字符串: '3'/'7'/'14'/'30'/'90'/'quarter'/'year'/'all'

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
    return Object.entries(m).map(function (_ref14) {
      var _ref15 = _slicedToArray(_ref14, 2),
        site = _ref15[0],
        v = _ref15[1];
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
    return Object.entries(m).map(function (_ref16) {
      var _ref17 = _slicedToArray(_ref16, 2),
        k = _ref17[0],
        v = _ref17[1];
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
  }, Object.entries(totalsByCurrency).map(function (_ref18) {
    var _ref19 = _slicedToArray(_ref18, 2),
      cur = _ref19[0],
      amt = _ref19[1];
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
    }, Object.entries(w.totals).map(function (_ref20) {
      var _ref21 = _slicedToArray(_ref20, 2),
        c = _ref21[0],
        a = _ref21[1];
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
var EventListModal = function EventListModal(_ref22) {
  var events = _ref22.events,
    title = _ref22.title,
    accent = _ref22.accent,
    icon = _ref22.icon,
    kind = _ref22.kind,
    employees = _ref22.employees,
    suppliers = _ref22.suppliers,
    onClose = _ref22.onClose,
    onClickEvent = _ref22.onClickEvent;
  var _useState47 = useState(''),
    _useState48 = _slicedToArray(_useState47, 2),
    search = _useState48[0],
    setSearch = _useState48[1];
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
var CompletionStatsBanner = function CompletionStatsBanner(_ref23) {
  var items = _ref23.items,
    title = _ref23.title,
    icon = _ref23.icon,
    color = _ref23.color,
    completedStatuses = _ref23.completedStatuses,
    onQuickComplete = _ref23.onQuickComplete,
    onClickStats = _ref23.onClickStats;
  var ranges = [3, 7, 14, 30, 60];
  var calcStats = function calcStats(days) {
    var cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);
    var inRange = (items || []).filter(function (it) {
      return it.created_at && new Date(it.created_at) >= cutoff;
    });
    var completed = inRange.filter(function (it) {
      return completedStatuses.includes(it.status);
    });
    var pending = inRange.filter(function (it) {
      return !completedStatuses.includes(it.status);
    });
    return {
      total: inRange.length,
      completed: completed.length,
      pending: pending.length,
      allItems: inRange,
      completedItems: completed,
      pendingItems: pending
    };
  };

  // 🆕 fix81: 点击触发
  var handleClick = function handleClick(days, mode, list) {
    if (!onClickStats || list.length === 0) return;
    var suffix = mode === 'completed' ? ' · ✅ 已完成' : mode === 'pending' ? ' · ⏳ 未完成' : '';
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
  }, "\u5DF2\u5B8C\u6210\u72B6\u6001: ", completedStatuses.join(' / '), " \xB7 \uD83D\uDCA1 \u70B9\u51FB\u6570\u5B57\u67E5\u770B\u660E\u7EC6")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 6
    }
  }, ranges.map(function (d) {
    var s = calcStats(d);
    var pct = s.total === 0 ? 0 : Math.round(s.completed / s.total * 100);
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
        return handleClick(d, 'total', s.allItems);
      },
      style: {
        fontSize: 20,
        fontWeight: 700,
        color: color,
        marginTop: 3,
        lineHeight: 1,
        cursor: totalClickable ? 'pointer' : 'default',
        textDecoration: totalClickable ? 'underline' : 'none',
        textDecorationStyle: 'dotted',
        textDecorationColor: color + '60',
        textUnderlineOffset: 3
      },
      title: totalClickable ? "\u70B9\u51FB\u67E5\u770B\u6700\u8FD1 ".concat(d, " \u5929\u7684\u5168\u90E8\u8BB0\u5F55") : '',
      onMouseEnter: totalClickable ? function (e) {
        return e.currentTarget.style.opacity = '0.75';
      } : undefined,
      onMouseLeave: totalClickable ? function (e) {
        return e.currentTarget.style.opacity = '1';
      } : undefined
    }, s.total), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 6,
        marginTop: 4,
        fontSize: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      onClick: function onClick(e) {
        e.stopPropagation();
        handleClick(d, 'completed', s.completedItems);
      },
      style: {
        color: '#16a34a',
        cursor: s.completed > 0 && onClickStats ? 'pointer' : 'default',
        textDecoration: s.completed > 0 && onClickStats ? 'underline dotted' : 'none',
        textUnderlineOffset: 2
      },
      title: s.completed > 0 && onClickStats ? "\u70B9\u51FB\u67E5\u770B ".concat(s.completed, " \u6761\u5DF2\u5B8C\u6210") : ''
    }, "\u2713", s.completed), s.pending > 0 && /*#__PURE__*/React.createElement("span", {
      onClick: function onClick(e) {
        e.stopPropagation();
        handleClick(d, 'pending', s.pendingItems);
      },
      style: {
        color: '#ca8a04',
        cursor: onClickStats ? 'pointer' : 'default',
        textDecoration: onClickStats ? 'underline dotted' : 'none',
        textUnderlineOffset: 2,
        fontWeight: 600
      },
      title: onClickStats ? "\u70B9\u51FB\u67E5\u770B ".concat(s.pending, " \u6761\u672A\u5B8C\u6210") : ''
    }, "\u23F3", s.pending)), /*#__PURE__*/React.createElement("div", {
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
var SummaryPanel = function SummaryPanel(_ref24) {
  var stats = _ref24.stats,
    filterMonth = _ref24.filterMonth,
    setFilterMonth = _ref24.setFilterMonth,
    aftersales = _ref24.aftersales,
    refunds = _ref24.refunds,
    refills = _ref24.refills,
    suppliers = _ref24.suppliers;
  // 计算供应商问题排行（按售后数 + 退款金额）
  var supplierRanking = useMemo(function () {
    var map = {};
    aftersales.filter(function (e) {
      if (!filterMonth) return true;
      return (e.created_at || '').slice(0, 7) === filterMonth;
    }).forEach(function (e) {
      var k = e.supplier_name || '(未指定)';
      if (!map[k]) map[k] = {
        name: k,
        aftersales: 0,
        refundAmount: 0
      };
      map[k].aftersales++;
    });
    refunds.filter(function (e) {
      if (!filterMonth) return true;
      return (e.created_at || '').slice(0, 7) === filterMonth;
    }).forEach(function (e) {
      if (e.status !== 'completed' && e.status !== 'approved') return;
      var k = e.supplier_name || '(未指定)';
      if (!map[k]) map[k] = {
        name: k,
        aftersales: 0,
        refundAmount: 0
      };
      map[k].refundAmount += parseFloat(e.amount || 0);
    });
    return Object.values(map).sort(function (a, b) {
      return b.aftersales + b.refundAmount / 100 - (a.aftersales + a.refundAmount / 100);
    }).slice(0, 15);
  }, [aftersales, refunds, filterMonth]);

  // 🆕 fix17: 产品售后排行 - 哪款产品售后次数最多
  var productRanking = useMemo(function () {
    var map = {};
    var monthFilter = function monthFilter(e) {
      return !filterMonth || (e.created_at || '').slice(0, 7) === filterMonth;
    };
    aftersales.filter(monthFilter).forEach(function (e) {
      var k = (e.product_name || '').trim() || '(未填产品)';
      if (!map[k]) map[k] = {
        name: k,
        aftersales: 0,
        refills: 0,
        refundAmount: 0,
        refundCount: 0,
        suppliers: new Set()
      };
      map[k].aftersales++;
      if (e.supplier_name) map[k].suppliers.add(e.supplier_name);
    });
    refills.filter(monthFilter).forEach(function (e) {
      var k = (e.product_name || '').trim() || '(未填产品)';
      if (!map[k]) map[k] = {
        name: k,
        aftersales: 0,
        refills: 0,
        refundAmount: 0,
        refundCount: 0,
        suppliers: new Set()
      };
      map[k].refills++;
      if (e.supplier_name) map[k].suppliers.add(e.supplier_name);
    });
    refunds.filter(monthFilter).forEach(function (e) {
      if (e.status !== 'completed' && e.status !== 'approved') return;
      var k = (e.product_name || '').trim() || '(未填产品)';
      if (!map[k]) map[k] = {
        name: k,
        aftersales: 0,
        refills: 0,
        refundAmount: 0,
        refundCount: 0,
        suppliers: new Set()
      };
      map[k].refundAmount += parseFloat(e.amount || 0);
      map[k].refundCount++;
      if (e.supplier_name) map[k].suppliers.add(e.supplier_name);
    });
    return Object.values(map).map(function (p) {
      return _objectSpread(_objectSpread({}, p), {}, {
        suppliers: Array.from(p.suppliers),
        total: p.aftersales + p.refills + p.refundCount
      });
    }).sort(function (a, b) {
      return b.total - a.total || b.refundAmount - a.refundAmount;
    }).slice(0, 20);
  }, [aftersales, refills, refunds, filterMonth]);
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
      marginTop: 4
    }
  }, "\u7EDF\u8BA1\u6708\u4EFD\uFF1A", /*#__PURE__*/React.createElement("input", {
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
  }))))), /*#__PURE__*/React.createElement("div", {
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
  }).map(function (_ref25) {
    var _ref26 = _slicedToArray(_ref25, 2),
      k = _ref26[0],
      n = _ref26[1];
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
  }).map(function (_ref27) {
    var _ref28 = _slicedToArray(_ref27, 2),
      k = _ref28[0],
      amt = _ref28[1];
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
      style: {
        padding: 10,
        background: 'var(--bg)',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 10
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
      style: {
        padding: '10px 12px',
        background: isTop ? '#fef2f2' : 'var(--bg)',
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
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
    }, "\xB7 \u4F9B\u5E94\u5546: ", p.suppliers.slice(0, 3).join(', '), p.suppliers.length > 3 ? ", +".concat(p.suppliers.length - 3) : ''))), /*#__PURE__*/React.createElement("div", {
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
  }))));
};

// ============================================================
// 导出报表 modal (Excel + PDF, 含图片)
// ============================================================
var ExportPanel = function ExportPanel(_ref29) {
  var onClose = _ref29.onClose,
    aftersales = _ref29.aftersales,
    refills = _ref29.refills,
    refunds = _ref29.refunds,
    suppliers = _ref29.suppliers,
    employees = _ref29.employees,
    subTab = _ref29.subTab,
    filterMonth = _ref29.filterMonth,
    toast = _ref29.toast;
  var _useState49 = useState(false),
    _useState50 = _slicedToArray(_useState49, 2),
    exporting = _useState50[0],
    setExporting = _useState50[1];
  var _useState51 = useState(true),
    _useState52 = _slicedToArray(_useState51, 2),
    includeImages = _useState52[0],
    setIncludeImages = _useState52[1];
  var _useState53 = useState(subTab === 'summary' ? 'all' : subTab),
    _useState54 = _slicedToArray(_useState53, 2),
    exportType = _useState54[0],
    setExportType = _useState54[1];
  var _useState55 = useState('excel'),
    _useState56 = _slicedToArray(_useState55, 2),
    format = _useState56[0],
    setFormat = _useState56[1];

  // Excel 导出
  var exportExcel = /*#__PURE__*/function () {
    var _ref30 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var XLSX, wb, addSheet, fname, _t2;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            setExporting(true);
            _context6.p = 1;
            if (window.XLSX) {
              _context6.n = 2;
              break;
            }
            _context6.n = 2;
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
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t2 = _context6.v;
            toast('❌ 导出失败：' + _t2.message);
            setExporting(false);
          case 4:
            return _context6.a(2);
        }
      }, _callee6, null, [[1, 3]]);
    }));
    return function exportExcel() {
      return _ref30.apply(this, arguments);
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
var ReportModule = function ReportModule(_ref31) {
  var user = _ref31.user,
    employees = _ref31.employees,
    toast = _ref31.toast,
    cloudOn = _ref31.cloudOn;
  var _useState57 = useState('inbox'),
    _useState58 = _slicedToArray(_useState57, 2),
    tab = _useState58[0],
    setTab = _useState58[1]; // inbox | mine | new | all (admin)
  var _useState59 = useState([]),
    _useState60 = _slicedToArray(_useState59, 2),
    tickets = _useState60[0],
    setTickets = _useState60[1];
  var _useState61 = useState(null),
    _useState62 = _slicedToArray(_useState61, 2),
    openTicket = _useState62[0],
    setOpenTicket = _useState62[1];
  var _useState63 = useState(null),
    _useState64 = _slicedToArray(_useState63, 2),
    draft = _useState64[0],
    setDraft = _useState64[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';

  // 加载工单（云端优先）
  var loadTickets = /*#__PURE__*/function () {
    var _ref32 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var cloud;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            if (!(cloudOn && CLOUD.client)) {
              _context7.n = 2;
              break;
            }
            _context7.n = 1;
            return CLOUD.list('workspace_tickets', {
              order: {
                col: 'updated_at',
                asc: false
              },
              limit: 500
            });
          case 1:
            cloud = _context7.v;
            if (!(cloud !== null)) {
              _context7.n = 2;
              break;
            }
            setTickets(cloud);
            return _context7.a(2);
          case 2:
            setTickets(STORE.get('tickets_local', []));
          case 3:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function loadTickets() {
      return _ref32.apply(this, arguments);
    };
  }();
  useEffect(function () {
    loadTickets();
  }, [cloudOn]);

  // 保存工单
  var saveTicket = /*#__PURE__*/function () {
    var _ref33 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(ticket) {
      var now, record, saved, local, idx;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            now = nowISO();
            record = _objectSpread(_objectSpread({}, ticket), {}, {
              id: ticket.id || uid(),
              updated_at: now,
              created_at: ticket.created_at || now
            });
            if (!(cloudOn && CLOUD.client)) {
              _context8.n = 4;
              break;
            }
            _context8.n = 1;
            return CLOUD.upsert('workspace_tickets', record);
          case 1:
            saved = _context8.v;
            if (!saved) {
              _context8.n = 3;
              break;
            }
            _context8.n = 2;
            return loadTickets();
          case 2:
            return _context8.a(2, record);
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
            return _context8.a(2, record);
        }
      }, _callee8);
    }));
    return function saveTicket(_x9) {
      return _ref33.apply(this, arguments);
    };
  }();

  // 新建工单
  var createTicket = /*#__PURE__*/function () {
    var _ref34 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(t) {
      var record;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            record = _objectSpread(_objectSpread({}, t), {}, {
              created_by_id: user.id,
              created_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
              status: 'pending',
              comments: [],
              attachments: t.attachments || []
            });
            _context9.n = 1;
            return saveTicket(record);
          case 1:
            setDraft(null);
            toast('✓ 工单已提交');
            setTab('mine');
          case 2:
            return _context9.a(2);
        }
      }, _callee9);
    }));
    return function createTicket(_x0) {
      return _ref34.apply(this, arguments);
    };
  }();

  // 状态变更
  var updateStatus = /*#__PURE__*/function () {
    var _ref35 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(ticket, newStatus) {
      var _TICKET_STATUS$find;
      var comment, updated, saved;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
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
            _context0.n = 1;
            return saveTicket(updated);
          case 1:
            saved = _context0.v;
            setOpenTicket(saved);
            toast("\u2713 ".concat(comment.content));
          case 2:
            return _context0.a(2);
        }
      }, _callee0);
    }));
    return function updateStatus(_x1, _x10) {
      return _ref35.apply(this, arguments);
    };
  }();

  // 添加评论
  var addComment = /*#__PURE__*/function () {
    var _ref36 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(ticket, text) {
      var comment, updated, saved;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            if (text.trim()) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2);
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
            _context1.n = 2;
            return saveTicket(updated);
          case 2:
            saved = _context1.v;
            setOpenTicket(saved);
          case 3:
            return _context1.a(2);
        }
      }, _callee1);
    }));
    return function addComment(_x11, _x12) {
      return _ref36.apply(this, arguments);
    };
  }();

  // 删除（仅创建人或主管）
  var deleteTicket = /*#__PURE__*/function () {
    var _ref37 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(id) {
      var ok, local;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.n) {
          case 0:
            if (confirm('永久删除此工单？')) {
              _context10.n = 1;
              break;
            }
            return _context10.a(2);
          case 1:
            if (!(cloudOn && CLOUD.client)) {
              _context10.n = 4;
              break;
            }
            _context10.n = 2;
            return CLOUD.del('workspace_tickets', id);
          case 2:
            ok = _context10.v;
            if (!ok) {
              _context10.n = 3;
              break;
            }
            _context10.n = 3;
            return loadTickets();
          case 3:
            _context10.n = 5;
            break;
          case 4:
            local = STORE.get('tickets_local', []).filter(function (t) {
              return t.id !== id;
            });
            STORE.set('tickets_local', local);
            setTickets(local);
          case 5:
            setOpenTicket(null);
            toast('已删除');
          case 6:
            return _context10.a(2);
        }
      }, _callee10);
    }));
    return function deleteTicket(_x13) {
      return _ref37.apply(this, arguments);
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
var TicketDraftModal = function TicketDraftModal(_ref38) {
  var _draft$attachments;
  var draft = _ref38.draft,
    setDraft = _ref38.setDraft,
    employees = _ref38.employees,
    user = _ref38.user,
    onCancel = _ref38.onCancel,
    onSubmit = _ref38.onSubmit;
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
var TicketDetailModal = function TicketDetailModal(_ref39) {
  var _ticket$attachments, _ticket$comments, _ticket$comments2;
  var ticket = _ref39.ticket,
    user = _ref39.user,
    employees = _ref39.employees,
    onClose = _ref39.onClose,
    onUpdateStatus = _ref39.onUpdateStatus,
    onAddComment = _ref39.onAddComment,
    onDelete = _ref39.onDelete;
  var _useState65 = useState(''),
    _useState66 = _slicedToArray(_useState65, 2),
    newComment = _useState66[0],
    setNewComment = _useState66[1];
  var _useState67 = useState(null),
    _useState68 = _slicedToArray(_useState67, 2),
    viewImg = _useState68[0],
    setViewImg = _useState68[1];
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
