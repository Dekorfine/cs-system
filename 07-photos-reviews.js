// ====== cs-system — 07-photos-reviews ======
// 版本 2026.06.05-fix174
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
// ====== cs-system — 07-photos-reviews ======
// 版本 2026.06.05-fix174
// 预编译切片
//

var ReviewsModule = function ReviewsModule(_ref) {
  var user = _ref.user,
    employees = _ref.employees,
    toast = _ref.toast;
  var allSites = useSiteCodes(); // 🆕 fix22 联动 3: 合并 内置 SITES + 自定义网站
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    reviews = _useState2[0],
    setReviews = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = useState(null),
    _useState6 = _slicedToArray(_useState5, 2),
    editing = _useState6[0],
    setEditing = _useState6[1]; // 'new' or review object
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    completing = _useState8[0],
    setCompleting = _useState8[1];
  var _useState9 = useState(false),
    _useState0 = _slicedToArray(_useState9, 2),
    exportOpen = _useState0[0],
    setExportOpen = _useState0[1];
  var _useState1 = useState('active'),
    _useState10 = _slicedToArray(_useState1, 2),
    filterStatus = _useState10[0],
    setFilterStatus = _useState10[1]; // 'all' | 'active' | 'pending' | 'in_progress' | 'completed' | 'mine'
  var _useState11 = useState('all'),
    _useState12 = _slicedToArray(_useState11, 2),
    filterSite = _useState12[0],
    setFilterSite = _useState12[1];
  var _useState13 = useState('all'),
    _useState14 = _slicedToArray(_useState13, 2),
    filterPriority = _useState14[0],
    setFilterPriority = _useState14[1];
  var _useState15 = useState(''),
    _useState16 = _slicedToArray(_useState15, 2),
    search = _useState16[0],
    setSearch = _useState16[1];
  // 🆕 fix11: 任务接单后直接在同页面打开 AI 评价生成(传产品信息给美工 iframe)
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    aiPanelReview = _useState18[0],
    setAiPanelReview = _useState18[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var load = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var list, live, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setLoading(true);
            _context.p = 1;
            _context.n = 2;
            return prReviewsList({
              order: {
                col: 'created_at',
                asc: false
              },
              limit: 500
            });
          case 2:
            list = _context.v;
            live = (list || []).filter(function (r) {
              return !r.deleted;
            });
            setReviews(live);
            // 写 cache 给顶部 tab 徽章用
            STORE.set('reviews_cache', live);
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
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(id) {
      var r, res;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return wsConfirm('确定要删除此评价任务？删除后无法恢复。');
          case 1:
            if (_context2.v) {
              _context2.n = 2;
              break;
            }
            return _context2.a(2);
          case 2:
            r = reviews.find(function (x) {
              return x.id === id;
            });
            if (r) {
              _context2.n = 3;
              break;
            }
            return _context2.a(2);
          case 3:
            _context2.n = 4;
            return prReviewUpsert(_objectSpread(_objectSpread({}, r), {}, {
              deleted: true,
              updated_at: new Date().toISOString()
            }));
          case 4:
            res = _context2.v;
            if (res) {
              toast('✓ 已删除');
              load();
            }
          case 5:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function handleDelete(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleClaim = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(review) {
      var userName, now, payload, res;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            now = new Date().toISOString();
            payload = _objectSpread(_objectSpread({}, review), {}, {
              claimed_by: user.id,
              claimed_by_name: userName,
              claimed_at: now,
              status: 'in_progress',
              updated_at: now
            });
            _context3.n = 1;
            return prReviewUpsert(payload);
          case 1:
            res = _context3.v;
            if (res) {
              toast('✓ 已接单！记得完成后点"标记完成"');
              load();
            }
          case 2:
            return _context3.a(2);
        }
      }, _callee3);
    }));
    return function handleClaim(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleUnclaim = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(review) {
      var payload, res;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            _context4.n = 1;
            return wsConfirm('放弃这个任务？其他人将可以接');
          case 1:
            if (_context4.v) {
              _context4.n = 2;
              break;
            }
            return _context4.a(2);
          case 2:
            payload = _objectSpread(_objectSpread({}, review), {}, {
              claimed_by: null,
              claimed_by_name: null,
              claimed_at: null,
              status: 'pending',
              updated_at: new Date().toISOString()
            });
            _context4.n = 3;
            return prReviewUpsert(payload);
          case 3:
            res = _context4.v;
            if (res) {
              toast('✓ 已放弃,可被他人领取');
              load();
            }
          case 4:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function handleUnclaim(_x3) {
      return _ref5.apply(this, arguments);
    };
  }();
  var filtered = useMemo(function () {
    var list = reviews;

    // 状态筛选
    if (filterStatus === 'active') list = list.filter(function (r) {
      return r.status !== 'completed' && r.status !== 'cancelled';
    });else if (filterStatus === 'mine') {
      list = list.filter(function (r) {
        return r.claimed_by === user.id || r.assigned_to === user.id || r.status === 'pending' && (!r.assigned_to || r.assigned_to === user.id);
      });
    } else if (filterStatus !== 'all') list = list.filter(function (r) {
      return r.status === filterStatus;
    });
    if (filterSite !== 'all') list = list.filter(function (r) {
      return r.site === filterSite;
    });
    if (filterPriority !== 'all') list = list.filter(function (r) {
      return r.priority === filterPriority;
    });
    if (search.trim()) {
      var q = search.trim().toLowerCase();
      list = list.filter(function (r) {
        return (r.product_name || '').toLowerCase().includes(q) || (r.product_url || '').toLowerCase().includes(q) || (r.notes || '').toLowerCase().includes(q) || (r.work_notes || '').toLowerCase().includes(q);
      });
    }
    return list;
  }, [reviews, filterStatus, filterSite, filterPriority, search, user.id]);
  var stats = useMemo(function () {
    return {
      total: reviews.length,
      pending: reviews.filter(function (r) {
        return r.status === 'pending';
      }).length,
      inProgress: reviews.filter(function (r) {
        return r.status === 'in_progress';
      }).length,
      completed: reviews.filter(function (r) {
        return r.status === 'completed';
      }).length,
      myTasks: reviews.filter(function (r) {
        return (r.claimed_by === user.id || r.assigned_to === user.id) && r.status !== 'completed';
      }).length
    };
  }, [reviews, user.id]);
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
  }, "\u2B50 \u4EA7\u54C1\u8BC4\u4EF7\u4EFB\u52A1"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "\u5171 ", /*#__PURE__*/React.createElement("strong", null, stats.total), " \u4E2A \xB7", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#854d0e',
      marginLeft: 4
    }
  }, "\u5F85\u9886\u53D6 ", /*#__PURE__*/React.createElement("strong", null, stats.pending)), " \xB7", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#075985',
      marginLeft: 4
    }
  }, "\u8FDB\u884C\u4E2D ", /*#__PURE__*/React.createElement("strong", null, stats.inProgress)), " \xB7", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#15803d',
      marginLeft: 4
    }
  }, "\u5DF2\u5B8C\u6210 ", /*#__PURE__*/React.createElement("strong", null, stats.completed)), stats.myTasks > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#dc2626',
      marginLeft: 8,
      fontWeight: 600
    }
  }, "\xB7 \u6211\u6709 ", stats.myTasks, " \u4E2A\u4EFB\u52A1"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setAiPanelReview({
        id: null,
        product_name: null,
        product_url: null,
        _adhoc: true
      });
    },
    title: "\u4E0D\u7ED1\u5B9A\u7279\u5B9A\u4EFB\u52A1,\u76F4\u63A5\u6253\u5F00 AI \u8BC4\u4EF7\u751F\u6210\u5DE5\u5177(\u7F8E\u5DE5\u7CFB\u7EDF)",
    style: {
      padding: '6px 14px',
      background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit',
      boxShadow: '0 1px 3px rgba(124,58,237,.25)'
    }
  }, "\uD83E\uDD16 AI \u8BC4\u4EF7\u5DE5\u5177"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setExportOpen(true);
    },
    className: "btn-sec",
    style: {
      padding: '6px 12px',
      fontSize: 12
    }
  }, "\uD83D\uDCCA \u5BFC\u51FA"), /*#__PURE__*/React.createElement("button", {
    onClick: load,
    className: "btn-sec",
    style: {
      padding: '6px 12px',
      fontSize: 12
    }
  }, "\uD83D\uDD04 \u5237\u65B0"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEditing('new');
    },
    className: "btn-pri",
    style: {
      padding: '6px 14px',
      fontSize: 12
    }
  }, "+ \u53D1\u5E03\u8BC4\u4EF7\u4EFB\u52A1"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, [{
    key: 'active',
    label: '🔥 进行中',
    count: stats.pending + stats.inProgress
  }, {
    key: 'mine',
    label: '👤 我的任务',
    count: stats.myTasks
  }, {
    key: 'pending',
    label: '⏳ 待领取',
    count: stats.pending
  }, {
    key: 'in_progress',
    label: '🔧 进行中',
    count: stats.inProgress
  }, {
    key: 'completed',
    label: '✅ 已完成',
    count: stats.completed
  }, {
    key: 'all',
    label: '📋 全部',
    count: stats.total
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
    }, t.label, " (", t.count, ")");
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u641C\u7D22\u4EA7\u54C1\u540D / \u94FE\u63A5 / \u5907\u6CE8...",
    style: {
      flex: 1,
      minWidth: 180,
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement("select", {
    value: filterSite,
    onChange: function onChange(e) {
      return setFilterSite(e.target.value);
    },
    style: {
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12,
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u7F51\u7AD9"), allSites.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s,
      value: s
    }, s);
  })), /*#__PURE__*/React.createElement("select", {
    value: filterPriority,
    onChange: function onChange(e) {
      return setFilterPriority(e.target.value);
    },
    style: {
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12,
      background: 'white'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u4F18\u5148\u7EA7"), REVIEW_PRIORITIES.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p.key,
      value: p.key
    }, p.label);
  })))), loading ? /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-10",
    style: {
      textAlign: 'center',
      color: 'var(--ink-3)'
    }
  }, "\u23F3 \u52A0\u8F7D\u4E2D...") : filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-12",
    style: {
      textAlign: 'center',
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDCCB \u6682\u65E0\u8BC4\u4EF7\u4EFB\u52A1 ", filterStatus !== 'all' ? '(当前筛选下)' : '', /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      fontSize: 11
    }
  }, "\u70B9\u4E0A\u65B9\"+ \u53D1\u5E03\u8BC4\u4EF7\u4EFB\u52A1\"\u5F00\u59CB")) : /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, filtered.map(function (r) {
    return /*#__PURE__*/React.createElement(ReviewTaskCard, {
      key: r.id,
      review: r,
      user: user,
      employees: employees,
      isAdmin: isAdmin,
      onEdit: function onEdit() {
        return setEditing(r);
      },
      onDelete: function onDelete() {
        return handleDelete(r.id);
      },
      onClaim: function onClaim() {
        return handleClaim(r);
      },
      onUnclaim: function onUnclaim() {
        return handleUnclaim(r);
      },
      onComplete: function onComplete() {
        return setCompleting(r);
      },
      onOpenAi: function onOpenAi() {
        return setAiPanelReview(r);
      },
      onReload: load
    });
  })), /*#__PURE__*/React.createElement(ReviewAiPanel, {
    visible: !!aiPanelReview,
    review: aiPanelReview,
    user: user,
    onClose: function onClose() {
      return setAiPanelReview(null);
    },
    onComplete: function onComplete() {
      if (aiPanelReview !== null && aiPanelReview !== void 0 && aiPanelReview._adhoc) {
        setAiPanelReview(null);
        return;
      }
      var r = aiPanelReview;
      setAiPanelReview(null);
      setCompleting(r);
    }
  }), editing && /*#__PURE__*/React.createElement(ReviewEditor, {
    review: editing === 'new' ? null : editing,
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
  }), completing && /*#__PURE__*/React.createElement(ReviewCompleteModal, {
    review: completing,
    user: user,
    onClose: function onClose() {
      return setCompleting(null);
    },
    onSaved: function onSaved() {
      setCompleting(null);
      load();
    },
    toast: toast
  }), exportOpen && /*#__PURE__*/React.createElement(ReviewExportModal, {
    reviews: filtered,
    allReviews: reviews,
    user: user,
    employees: employees,
    onClose: function onClose() {
      return setExportOpen(false);
    },
    toast: toast
  }));
};

// 任务卡
var ReviewTaskCard = function ReviewTaskCard(_ref6) {
  var review = _ref6.review,
    user = _ref6.user,
    employees = _ref6.employees,
    isAdmin = _ref6.isAdmin,
    onEdit = _ref6.onEdit,
    onDelete = _ref6.onDelete,
    onClaim = _ref6.onClaim,
    onUnclaim = _ref6.onUnclaim,
    onComplete = _ref6.onComplete,
    onOpenAi = _ref6.onOpenAi,
    onReload = _ref6.onReload;
  var _useState19 = useState(false),
    _useState20 = _slicedToArray(_useState19, 2),
    expanded = _useState20[0],
    setExpanded = _useState20[1];
  var _useState21 = useState(null),
    _useState22 = _slicedToArray(_useState21, 2),
    previewFile = _useState22[0],
    setPreviewFile = _useState22[1];
  var status = REVIEW_STATUSES.find(function (s) {
    return s.key === review.status;
  }) || REVIEW_STATUSES[0];
  var priority = REVIEW_PRIORITIES.find(function (p) {
    return p.key === review.priority;
  }) || REVIEW_PRIORITIES[1];
  var isMine = review.claimed_by === user.id;
  var isCreator = review.created_by === user.id;
  var canClaim = review.status === 'pending' && (!review.assigned_to || review.assigned_to === user.id);
  var canComplete = isMine && review.status === 'in_progress';
  // 🆕 fix11: 我接的任务 → 可直接打开 AI 工具(in_progress 或 pending 等待我接)
  var canUseAi = isMine && review.status === 'in_progress' || canClaim;
  var canEdit = isCreator || isAdmin;
  var canDelete = isCreator || isAdmin;
  var attachments = review.attachments || [];
  return /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl fade-in",
    style: {
      overflow: 'hidden',
      border: '1.5px solid ' + (review.status === 'completed' ? '#86efac' : review.priority === 'high' ? '#fca5a5' : 'var(--line)'),
      background: review.status === 'completed' ? '#f0fdf4' : 'white'
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
  }, review.product_image && /*#__PURE__*/React.createElement("img", {
    src: review.product_image,
    alt: "",
    onClick: function onClick() {
      return wsOpenImg(review.product_image);
    },
    title: "\u70B9\u51FB\u770B\u5927\u56FE",
    style: {
      width: 54,
      height: 54,
      objectFit: 'cover',
      borderRadius: 8,
      border: '1px solid var(--line)',
      cursor: 'zoom-in',
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
      color: status.color,
      border: '1px solid ' + (status.color + '40')
    }
  }, status.label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600,
      background: priority.bg,
      color: priority.color,
      border: '1px solid ' + priority.border
    }
  }, priority.label), review.site && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#f5f5f7',
      color: 'var(--ink-3)',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, review.site), review.platform && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#e0e7ff',
      color: '#4338ca',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, review.platform), isMine && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#fef2f2',
      color: '#dc2626',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\uD83D\uDC64 \u6211\u7684\u4EFB\u52A1")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--ink)',
      marginBottom: 3
    }
  }, review.product_name || '(未命名产品)'), /*#__PURE__*/React.createElement("a", {
    href: review.product_url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      fontSize: 11,
      color: '#0369a1',
      textDecoration: 'none',
      wordBreak: 'break-all'
    },
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.textDecoration = 'underline';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.textDecoration = 'none';
    }
  }, "\uD83D\uDD17 ", review.product_url), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 6,
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCB \u53D1\u5E03:", review.created_by_name, " \xB7 ", (review.created_at || '').slice(5, 16).replace('T', ' ')), review.assigned_to_name && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#7c3aed',
      fontWeight: 500
    }
  }, "\xB7 \uD83C\uDFAF \u6307\u6D3E\u7ED9 ", review.assigned_to_name), review.claimed_by_name && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#0369a1',
      fontWeight: 500
    }
  }, "\xB7 \uD83D\uDC64 \u63A5\u5355 ", review.claimed_by_name), review.completed_by_name && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#15803d',
      fontWeight: 500
    }
  }, "\xB7 \u2705 \u5B8C\u6210 ", review.completed_by_name)), review.notes && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: '6px 10px',
      background: '#fefce8',
      border: '1px solid #fde047',
      borderRadius: 6,
      fontSize: 12,
      color: '#854d0e'
    }
  }, "\uD83D\uDCAC ", review.notes)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    }
  }, canClaim && /*#__PURE__*/React.createElement("button", {
    onClick: onClaim,
    style: {
      padding: '6px 14px',
      background: 'var(--accent)',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDC64 \u63A5\u6B64\u4EFB\u52A1"), isMine && review.status === 'in_progress' && /*#__PURE__*/React.createElement("button", {
    onClick: onOpenAi,
    style: {
      padding: '6px 14px',
      background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit',
      boxShadow: '0 1px 3px rgba(124,58,237,.25)'
    },
    title: "\u5728\u5F53\u524D\u9875\u6253\u5F00 AI \u8BC4\u4EF7\u751F\u6210\u5DE5\u5177,\u4EA7\u54C1\u4FE1\u606F\u5DF2\u81EA\u52A8\u586B\u597D"
  }, "\uD83E\uDD16 AI \u751F\u6210\u8BC4\u4EF7"), canComplete && /*#__PURE__*/React.createElement("button", {
    onClick: onComplete,
    style: {
      padding: '6px 14px',
      background: '#16a34a',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\u2705 \u6807\u8BB0\u5B8C\u6210"), isMine && review.status === 'in_progress' && /*#__PURE__*/React.createElement("button", {
    onClick: onUnclaim,
    className: "btn-sec",
    style: {
      padding: '5px 10px',
      fontSize: 11
    }
  }, "\u653E\u5F03"), (review.status === 'completed' || expanded) && (review.work_notes || attachments.length > 0) && /*#__PURE__*/React.createElement("button", {
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
  }, expanded ? '收起 ▲' : '查看详情 ▼'), !expanded && review.status === 'completed' && (review.work_notes || attachments.length > 0) && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setExpanded(true);
    },
    className: "btn-sec",
    style: {
      padding: '5px 10px',
      fontSize: 11
    }
  }, "\u67E5\u770B\u8BE6\u60C5 \u25BC"), canEdit && /*#__PURE__*/React.createElement("button", {
    onClick: onEdit,
    style: {
      padding: '5px 10px',
      background: '#e0f2fe',
      color: '#0369a1',
      border: '1px solid #7dd3fc',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\u270F\uFE0F"), canDelete && /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    style: {
      padding: '5px 10px',
      background: '#fef2f2',
      color: '#dc2626',
      border: '1px solid #fca5a5',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDDD1"))), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      padding: '10px 12px',
      background: '#f0fdf4',
      border: '1px solid #86efac',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#15803d',
      fontWeight: 600
    }
  }, "\u2705 \u5B8C\u6210\u8BE6\u60C5 \xB7 ", review.completed_at ? new Date(review.completed_at).toLocaleString('zh-CN') : ''), review.rating && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, '⭐'.repeat(review.rating), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)'
    }
  }, '☆'.repeat(5 - review.rating)))), review.reviewer_alias && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\u8BC4\u4EF7\u4EBA\u540D:"), " ", review.reviewer_alias), review.review_date && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("strong", null, "\u8BC4\u4EF7\u65E5\u671F:"), " ", review.review_date), review.review_text && /*#__PURE__*/React.createElement("div", {
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
  }, "\uD83D\uDCDD \u8BC4\u4EF7\u5185\u5BB9:"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      background: 'white',
      borderRadius: 5,
      fontSize: 12,
      whiteSpace: 'pre-wrap',
      lineHeight: 1.5
    }
  }, review.review_text)), review.work_notes && /*#__PURE__*/React.createElement("div", {
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
  }, "\uD83D\uDCCB \u5DE5\u4F5C\u8BE6\u60C5:"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 8,
      background: 'white',
      borderRadius: 5,
      fontSize: 12,
      whiteSpace: 'pre-wrap',
      lineHeight: 1.5,
      color: 'var(--ink-2)'
    }
  }, review.work_notes)), attachments.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600,
      marginBottom: 5
    }
  }, "\uD83D\uDCCE \u622A\u56FE\u9644\u4EF6 (", attachments.length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
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
        height: 80,
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
// 🆕 fix11: 评价任务 + AI 生成 全屏面板 (合二为一)
// 🚀 fix11-hotfix3: 性能优化 — iframe 持久挂载 + 稳定 URL + postMessage 传任务上下文
//    1. iframe 在 ReviewsModule mount 时就开始后台加载
//    2. URL 只含 cs_user_* (不随任务变),首次加载后不再 reload
//    3. 任务信息通过 postMessage 推过去 (美工 v22-CQ+ 可以监听 message 事件自动填表)
//    4. 关闭面板时只 display:none,iframe 状态全保留,再开瞬间显示
// ============================================================
var ReviewAiPanel = function ReviewAiPanel(_ref7) {
  var visible = _ref7.visible,
    review = _ref7.review,
    user = _ref7.user,
    onClose = _ref7.onClose,
    onComplete = _ref7.onComplete;
  var isAdhoc = !!(review !== null && review !== void 0 && review._adhoc);
  var hasTask = !!review && !isAdhoc;
  var iframeRef = useRef(null);
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    iframeLoaded = _useState24[0],
    setIframeLoaded = _useState24[1];

  // 🚀 稳定 URL — 只含用户信息,不带任务参数,所以永不重新加载
  var iframeSrc = useMemo(function () {
    var params = new URLSearchParams();
    params.set('embed', 'cs-reviews');
    params.set('cs_user_id', user.id || 'cs_unknown');
    params.set('cs_user_name', (user.name || '客服') + (user.alias ? ' ' + user.alias : ''));
    params.set('cs_user_alias', user.alias || '');
    return "https://dekorfine.github.io/worktrack-kpi/?".concat(params.toString());
  }, [user.id, user.name, user.alias]);

  // 🚀 任务上下文 → postMessage 推给美工 iframe
  // 美工 v22-CQ+ 可监听 message 事件,type='cs-task-context' 时自动填表
  // 如果美工还没实现监听器也无害 — 用户能从面板头部看到任务信息,手动复制即可
  useEffect(function () {
    if (!visible || !hasTask || !iframeLoaded) return;
    var payload = {
      type: 'cs-task-context',
      task: {
        id: review.id,
        product_url: review.product_url || '',
        product_name: review.product_name || '',
        site: review.site || '',
        platform: review.platform || '',
        priority: review.priority || '',
        target_count: review.target_count || null,
        notes: review.notes || ''
      }
    };
    // 多发几次,iframe 内部可能还在路由 / 初始化
    var attempts = 0;
    var send = function send() {
      try {
        var _iframeRef$current;
        (_iframeRef$current = iframeRef.current) === null || _iframeRef$current === void 0 || (_iframeRef$current = _iframeRef$current.contentWindow) === null || _iframeRef$current === void 0 || _iframeRef$current.postMessage(payload, 'https://dekorfine.github.io');
      } catch (_unused) {}
      attempts++;
    };
    send();
    var intervalId = setInterval(function () {
      send();
      if (attempts >= 5) clearInterval(intervalId);
    }, 500);
    return function () {
      return clearInterval(intervalId);
    };
  }, [visible, hasTask, iframeLoaded, review === null || review === void 0 ? void 0 : review.id]);

  // Esc 关闭 (只在可见时绑定)
  useEffect(function () {
    if (!visible) return;
    var onEsc = function onEsc(e) {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onEsc);
    return function () {
      return window.removeEventListener('keydown', onEsc);
    };
  }, [visible, onClose]);
  var copy = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(text, label) {
      var _t2;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            _context5.n = 1;
            return navigator.clipboard.writeText(text);
          case 1:
            window.dispatchEvent(new CustomEvent('show-toast', {
              detail: "\u2713 \u5DF2\u590D\u5236 ".concat(label || '')
            }));
            _context5.n = 3;
            break;
          case 2:
            _context5.p = 2;
            _t2 = _context5.v;
          case 3:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 2]]);
    }));
    return function copy(_x4, _x5) {
      return _ref8.apply(this, arguments);
    };
  }();
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      background: '#fafaf7',
      zIndex: 99998,
      display: visible ? 'flex' : 'none',
      flexDirection: 'column'
    }
  }, visible && review && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      background: 'white',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap',
      boxShadow: '0 1px 3px rgba(0,0,0,.04)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap',
      marginBottom: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#f3e8ff',
      color: '#7c3aed',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 700
    }
  }, "\uD83E\uDD16 AI \u8BC4\u4EF7\u751F\u6210"), isAdhoc ? /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#f5f5f7',
      color: 'var(--ink-3)',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u2728 \u4E34\u65F6\u4F7F\u7528 \xB7 \u4E0D\u7ED1\u5B9A\u4EFB\u52A1") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#dbeafe',
      color: '#1e40af',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\uD83D\uDC64 \u6211\u63A5\u7684\u4EFB\u52A1"), review.site && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#f5f5f7',
      color: 'var(--ink-3)',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, review.site), review.priority === 'high' && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#fee2e2',
      color: '#dc2626',
      borderRadius: 10,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\uD83D\uDD25 \u9AD8\u4F18\u5148"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink)',
      lineHeight: 1.3,
      marginBottom: 2
    }
  }, isAdhoc ? 'AI 评价生成工具 (临时模式)' : review.product_name || '(未命名产品)'), !isAdhoc && review.product_url && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: review.product_url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: '#0369a1',
      textDecoration: 'none',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      maxWidth: 460
    }
  }, "\uD83D\uDD17 ", review.product_url), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return copy(review.product_url, '链接');
    },
    title: "\u590D\u5236\u94FE\u63A5",
    style: {
      padding: '1px 6px',
      background: '#f5f5f7',
      border: '1px solid var(--line)',
      borderRadius: 4,
      cursor: 'pointer',
      fontSize: 10,
      fontFamily: 'inherit',
      color: 'var(--ink-3)'
    }
  }, "\u590D\u5236")), isAdhoc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)'
    }
  }, "\u76F4\u63A5\u6253\u5F00\u7F8E\u5DE5\u7CFB\u7EDF\u7684\u8BC4\u4EF7\u751F\u6210\u5DE5\u5177,\u4E0D\u4E0E\u4EFB\u4F55\u8BC4\u4EF7\u4EFB\u52A1\u7ED1\u5B9A \u2014 \u5B8C\u6210\u540E\u65E0\u9700\"\u6807\u8BB0\u5B8C\u6210\""), !isAdhoc && review.notes && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#854d0e',
      marginTop: 4,
      padding: '4px 8px',
      background: '#fefce8',
      borderRadius: 4,
      border: '1px solid #fde047',
      maxWidth: 720
    }
  }, "\uD83D\uDCAC \u4EFB\u52A1\u5907\u6CE8: ", review.notes)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexShrink: 0
    }
  }, !iframeLoaded && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 10px',
      background: '#fef3c7',
      color: '#854d0e',
      borderRadius: 6,
      fontSize: 11,
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "spinner",
    style: {
      display: 'inline-block',
      width: 10,
      height: 10,
      border: '1.5px solid #854d0e',
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: 'spin 0.7s linear infinite'
    }
  }), "\u5DE5\u5177\u52A0\u8F7D\u4E2D..."), !isAdhoc && review.target_count && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 10px',
      background: '#f5f5f7',
      borderRadius: 6,
      fontSize: 12,
      color: 'var(--ink-2)',
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "\u76EE\u6807:"), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)'
    }
  }, review.target_count, " \u6761")), !isAdhoc && /*#__PURE__*/React.createElement("button", {
    onClick: onComplete,
    style: {
      padding: '7px 14px',
      background: '#16a34a',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit'
    },
    title: "\u751F\u6210\u5B8C\u6210\u540E\u6807\u8BB0\u4EFB\u52A1\u5B8C\u6210"
  }, "\u2705 \u5DF2\u5B8C\u6210\u8BC4\u4EF7"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      padding: '7px 14px',
      background: 'white',
      color: 'var(--ink-2)',
      border: '1px solid var(--line)',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit'
    },
    title: "\u5173\u95ED,\u8FD4\u56DE\u4EFB\u52A1\u5217\u8868(Esc) \u2014 \u5DE5\u5177\u72B6\u6001\u4F1A\u4FDD\u7559,\u4E0B\u6B21\u6253\u5F00\u77AC\u95F4\u663E\u793A"
  }, "\u2190 \u8FD4\u56DE\u4EFB\u52A1\u5217\u8868"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: visible ? '8px' : 0,
      background: '#fafaf7',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    ref: iframeRef,
    src: iframeSrc,
    onLoad: function onLoad() {
      return setIframeLoaded(true);
    },
    loading: "eager",
    style: {
      width: '100%',
      height: '100%',
      border: 'none',
      borderRadius: visible ? 10 : 0,
      background: 'white',
      boxShadow: visible ? '0 1px 3px rgba(0,0,0,.06)' : 'none',
      display: 'block'
    },
    title: "AI \u8BC4\u4EF7\u751F\u6210\u5DE5\u5177",
    allow: "clipboard-read; clipboard-write",
    sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-downloads allow-modals allow-popups-to-escape-sandbox"
  }))), document.body);
};

// 编辑器（发布 + 编辑）
var ReviewEditor = function ReviewEditor(_ref9) {
  var review = _ref9.review,
    user = _ref9.user,
    employees = _ref9.employees,
    onClose = _ref9.onClose,
    onSaved = _ref9.onSaved,
    toast = _ref9.toast;
  var allSites = useSiteCodes(); // 🆕 fix22 联动 3: 合并 内置 SITES + 自定义网站
  var isEdit = !!review;
  var _useState25 = useState((review === null || review === void 0 ? void 0 : review.product_url) || ''),
    _useState26 = _slicedToArray(_useState25, 2),
    productUrl = _useState26[0],
    setProductUrl = _useState26[1];
  var _useState27 = useState((review === null || review === void 0 ? void 0 : review.product_name) || ''),
    _useState28 = _slicedToArray(_useState27, 2),
    productName = _useState28[0],
    setProductName = _useState28[1];
  var _useState29 = useState((review === null || review === void 0 ? void 0 : review.site) || ''),
    _useState30 = _slicedToArray(_useState29, 2),
    site = _useState30[0],
    setSite = _useState30[1];
  var _useState31 = useState((review === null || review === void 0 ? void 0 : review.platform) || 'Shopify'),
    _useState32 = _slicedToArray(_useState31, 2),
    platform = _useState32[0],
    setPlatform = _useState32[1];
  var _useState33 = useState((review === null || review === void 0 ? void 0 : review.priority) || 'normal'),
    _useState34 = _slicedToArray(_useState33, 2),
    priority = _useState34[0],
    setPriority = _useState34[1];
  var _useState35 = useState((review === null || review === void 0 ? void 0 : review.notes) || ''),
    _useState36 = _slicedToArray(_useState35, 2),
    notes = _useState36[0],
    setNotes = _useState36[1];
  var _useState37 = useState((review === null || review === void 0 ? void 0 : review.assigned_to) || ''),
    _useState38 = _slicedToArray(_useState37, 2),
    assignedTo = _useState38[0],
    setAssignedTo = _useState38[1];
  var _useState39 = useState(10),
    _useState40 = _slicedToArray(_useState39, 2),
    batchCount = _useState40[0],
    setBatchCount = _useState40[1]; // 🆕 默认 10(没特别要求就 10,常用 5/10/15;不要 1)
  var _useState41 = useState(review !== null && review !== void 0 && review.product_image ? [{
      id: 'pi0',
      url: review.product_image,
      name: '产品图',
      kind: 'image',
      mime: 'image/jpeg'
    }] : []),
    _useState42 = _slicedToArray(_useState41, 2),
    images = _useState42[0],
    setImages = _useState42[1]; // 🆕 fix131 产品主图(上传/粘贴/抓取)
  var _useState43 = useState(false),
    _useState44 = _slicedToArray(_useState43, 2),
    fetchingImg = _useState44[0],
    setFetchingImg = _useState44[1];
  var pullProductImg = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var u, handle, r, p, img, _t3;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            if (productUrl.trim()) {
              _context6.n = 1;
              break;
            }
            alert('请先填产品链接');
            return _context6.a(2);
          case 1:
            setFetchingImg(true);
            _context6.p = 2;
            u = new URL(productUrl.trim());
            handle = (u.pathname.split('/products/')[1] || '').split(/[/?#]/)[0];
            if (handle) {
              _context6.n = 3;
              break;
            }
            throw new Error('链接里找不到 /products/ 句柄');
          case 3:
            _context6.n = 4;
            return fetch(u.origin + '/products/' + handle + '.js', {
              headers: {
                'Accept': 'application/json'
              }
            });
          case 4:
            r = _context6.v;
            if (r.ok) {
              _context6.n = 5;
              break;
            }
            throw new Error('HTTP ' + r.status);
          case 5:
            _context6.n = 6;
            return r.json();
          case 6:
            p = _context6.v;
            img = p.featured_image || p.images && p.images[0] || p.media && p.media[0] && p.media[0].src;
            if (img && img.indexOf('//') === 0) img = 'https:' + img;
            if (img) {
              _context6.n = 7;
              break;
            }
            throw new Error('未找到产品图');
          case 7:
            setImages([{
              id: 'pi' + Date.now(),
              url: img,
              name: (p.title || 'product') + '.jpg',
              kind: 'image',
              mime: 'image/jpeg',
              from_url: true
            }]);
            if (!productName && p.title) setProductName(p.title);
            toast('✓ 已抓取产品主图');
            _context6.n = 9;
            break;
          case 8:
            _context6.p = 8;
            _t3 = _context6.v;
            alert('自动抓取失败(可能是跨域限制),请手动上传或粘贴产品图。\n' + (_t3.message || ''));
          case 9:
            setFetchingImg(false);
          case 10:
            return _context6.a(2);
        }
      }, _callee6, null, [[2, 8]]);
    }));
    return function pullProductImg() {
      return _ref0.apply(this, arguments);
    };
  }();
  var _useState45 = useState(false),
    _useState46 = _slicedToArray(_useState45, 2),
    saving = _useState46[0],
    setSaving = _useState46[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';

  // 粘贴 URL 时自动识别产品名 + 网站
  var handleUrlChange = function handleUrlChange(url) {
    setProductUrl(url);
    if (url && !productName) setProductName(extractProductNameFromURL(url));
    if (url && !site) setSite(siteToDomain('', url));
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var now, userName, assignedEmp, payload, res, needCount, rid, row, _t4;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            if (productUrl.trim()) {
              _context7.n = 1;
              break;
            }
            alert('请填写产品链接');
            return _context7.a(2);
          case 1:
            setSaving(true);
            now = new Date().toISOString();
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            assignedEmp = assignedTo ? employees.find(function (e) {
              return e.id === assignedTo;
            }) : null;
            if (!isEdit) {
              _context7.n = 3;
              break;
            }
            // 编辑模式
            payload = _objectSpread(_objectSpread({}, review), {}, {
              product_url: productUrl.trim(),
              product_name: productName.trim() || null,
              product_image: images && images[0] && images[0].url || null,
              site: siteToDomain(site, productUrl.trim()) || null,
              platform: platform || null,
              priority: priority,
              notes: notes.trim() || null,
              updated_at: now
            });
            _context7.n = 2;
            return prReviewUpsert(payload);
          case 2:
            res = _context7.v;
            if (res) {
              toast('✓ 已更新');
              onSaved();
            } else {
              alertSaveError('保存产品评价');
            }
            _context7.n = 7;
            break;
          case 3:
            // 🆕 新建:一条任务 = 一行;need_count = 需要的评价条数。写入【共享库 xyhbwqugbnowfjuhqhsj】product_reviews(worktrack 读这里)
            needCount = Math.max(1, Math.min(50, parseInt(batchCount) || 1));
            rid = 'rv-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
            row = {
              id: rid,
              product_name: productName.trim() || null,
              product_url: productUrl.trim(),
              product_image: images && images[0] && images[0].url || null,
              site: siteToDomain(site, productUrl.trim()) || null,
              platform: platform || null,
              need_count: needCount,
              priority: priority || 'normal',
              notes: notes.trim() || null,
              status: 'open',
              created_by: user.id,
              created_by_name: userName,
              created_at: now,
              updated_at: now
            };
            _context7.p = 4;
            _context7.n = 5;
            return prReviewInsert([row]);
          case 5:
            toast('✓ 已发布评价任务 · 需 ' + needCount + ' 条评价');
            onSaved();
            _context7.n = 7;
            break;
          case 6:
            _context7.p = 6;
            _t4 = _context7.v;
            alert('发布失败(写入共享库 product_reviews): ' + (_t4.message || _t4));
          case 7:
            setSaving(false);
          case 8:
            return _context7.a(2);
        }
      }, _callee7, null, [[4, 6]]);
    }));
    return function handleSubmit() {
      return _ref1.apply(this, arguments);
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
      maxWidth: 600,
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
  }, "\u2B50 ", isEdit ? '编辑' : '发布', "\u8BC4\u4EF7\u4EFB\u52A1"), /*#__PURE__*/React.createElement("button", {
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
  }, "\u4EA7\u54C1\u94FE\u63A5 *"), /*#__PURE__*/React.createElement("input", {
    value: productUrl,
    onChange: function onChange(e) {
      return handleUrlChange(e.target.value);
    },
    autoFocus: true,
    placeholder: "https://vakkerlight.com/products/eleanor-beam-pendant-lamp",
    style: {
      width: '100%',
      padding: '8px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      fontFamily: 'monospace'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, "\uD83D\uDCA1 \u7C98\u8D34\u4EA7\u54C1 URL \u4F1A\u81EA\u52A8\u8BC6\u522B\u4EA7\u54C1\u540D\u548C\u7F51\u7AD9")), /*#__PURE__*/React.createElement("div", {
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
  }, "\u4EA7\u54C1\u540D"), /*#__PURE__*/React.createElement("input", {
    value: productName,
    onChange: function onChange(e) {
      return setProductName(e.target.value);
    },
    placeholder: "\u81EA\u52A8\u8BC6\u522B / \u624B\u52A8\u8F93\u5165",
    style: {
      width: '100%',
      padding: '7px 10px',
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
  }, "\u7F51\u7AD9"), /*#__PURE__*/React.createElement("select", {
    value: site,
    onChange: function onChange(e) {
      return setSite(e.target.value);
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
    value: ""
  }, "(\u9009\u586B)"), REVIEW_DOMAINS.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s,
      value: s
    }, s);
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)'
    }
  }, "\u4EA7\u54C1\u56FE ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--ink-4)'
    }
  }, "(\u6293\u53D6 / \u4E0A\u4F20 / \u7C98\u8D34,\u7F8E\u5DE5\u8BC4\u4EF7\u65F6\u53C2\u8003)")), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: pullProductImg,
    disabled: fetchingImg,
    style: {
      padding: '4px 10px',
      fontSize: 11,
      fontWeight: 600,
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      background: '#0071e3',
      color: 'white'
    }
  }, fetchingImg ? '抓取中…' : '🔄 抓取产品图')), /*#__PURE__*/React.createElement(MultiImageUploader, {
    attachments: images,
    setAttachments: setImages
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
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
  }, "\u8BC4\u4EF7\u5E73\u53F0"), /*#__PURE__*/React.createElement("select", {
    value: platform,
    onChange: function onChange(e) {
      return setPlatform(e.target.value);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }, REVIEW_PLATFORMS.map(function (p) {
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
  }, "\u4F18\u5148\u7EA7"), /*#__PURE__*/React.createElement("select", {
    value: priority,
    onChange: function onChange(e) {
      return setPriority(e.target.value);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13,
      background: 'white'
    }
  }, REVIEW_PRIORITIES.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p.key,
      value: p.key
    }, p.label);
  }))), !isEdit && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u9700\u8981\u51E0\u6761\u8BC4\u4EF7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--ink-4)'
    }
  }, "\xB7 \u6CA1\u7279\u522B\u8981\u6C42\u5C31\u586B 10,\u5E38\u7528 5/10/15")), /*#__PURE__*/React.createElement("input", {
    type: "number",
    min: 1,
    max: 20,
    value: batchCount,
    onChange: function onChange(e) {
      return setBatchCount(e.target.value);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
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
  }, "\u6307\u6D3E\u7ED9\uFF08\u9009\u586B,\u9ED8\u8BA4\u6240\u6709\u4EBA\u53EF\u9886\u53D6\uFF09", isAdmin ? '' : ' · ⭐ 仅主管可指定他人'), /*#__PURE__*/React.createElement("select", {
    value: assignedTo,
    onChange: function onChange(e) {
      return setAssignedTo(e.target.value);
    },
    disabled: !isAdmin && !isEdit,
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
  }, "\u4E0D\u6307\u5B9A\uFF08\u6240\u6709\u4EBA\u53EF\u9886\uFF09"), employees.filter(function (em) {
    return !em.hideFromList || em.id === user.id;
  }).map(function (em) {
    return /*#__PURE__*/React.createElement("option", {
      key: em.id,
      value: em.id
    }, em.name, em.alias ? ' ' + em.alias : '');
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
  }, "\u4EFB\u52A1\u8BF4\u660E / \u8BC4\u4EF7\u65B9\u5411\uFF08\u9009\u586B\uFF09"), /*#__PURE__*/React.createElement("textarea", {
    value: notes,
    onChange: function onChange(e) {
      return setNotes(e.target.value);
    },
    placeholder: "\u4F8B\u5982:\n- \u8BC4\u4EF7\u65B9\u5411:\u8D28\u91CF\u597D\u3001\u5B89\u88C5\u65B9\u4FBF\n- \u8BC4\u4EF7\u65F6\u95F4:5/25 \u4E4B\u524D\u5B8C\u6210\n- \u6CE8\u610F\u4E8B\u9879:\u7528\u4E0D\u540C IP, \u7528\u4E0D\u540C\u8D26\u53F7",
    style: {
      width: '100%',
      minHeight: 80,
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
      padding: '12px 18px',
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)'
    }
  }, !isEdit && batchCount > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, "\uD83D\uDCA1 \u8FD9\u6761\u4EFB\u52A1\u9700\u8981 ", /*#__PURE__*/React.createElement("strong", null, batchCount), " \u6761\u8BC4\u4EF7")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "btn-sec",
    style: {
      padding: '7px 14px'
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: handleSubmit,
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
  }, saving ? '保存中...' : isEdit ? '保存修改' : '📢 发布任务')))));
};

// 完成 modal
var ReviewCompleteModal = function ReviewCompleteModal(_ref10) {
  var review = _ref10.review,
    user = _ref10.user,
    onClose = _ref10.onClose,
    onSaved = _ref10.onSaved,
    toast = _ref10.toast;
  var _useState47 = useState(''),
    _useState48 = _slicedToArray(_useState47, 2),
    reviewText = _useState48[0],
    setReviewText = _useState48[1];
  var _useState49 = useState(5),
    _useState50 = _slicedToArray(_useState49, 2),
    rating = _useState50[0],
    setRating = _useState50[1];
  var _useState51 = useState(''),
    _useState52 = _slicedToArray(_useState51, 2),
    reviewerAlias = _useState52[0],
    setReviewerAlias = _useState52[1];
  var _useState53 = useState(new Date().toISOString().slice(0, 10)),
    _useState54 = _slicedToArray(_useState53, 2),
    reviewDate = _useState54[0],
    setReviewDate = _useState54[1];
  var _useState55 = useState(''),
    _useState56 = _slicedToArray(_useState55, 2),
    workNotes = _useState56[0],
    setWorkNotes = _useState56[1];
  var _useState57 = useState([]),
    _useState58 = _slicedToArray(_useState57, 2),
    attachments = _useState58[0],
    setAttachments = _useState58[1];
  var _useState59 = useState(false),
    _useState60 = _slicedToArray(_useState59, 2),
    saving = _useState60[0],
    setSaving = _useState60[1];
  var handleSubmit = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var now, userName, payload, res;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            if (!(!workNotes.trim() && attachments.length === 0 && !reviewText.trim())) {
              _context8.n = 2;
              break;
            }
            _context8.n = 1;
            return wsConfirm('没填写任何工作详情或上传截图,确定标记完成吗?');
          case 1:
            if (_context8.v) {
              _context8.n = 2;
              break;
            }
            return _context8.a(2);
          case 2:
            setSaving(true);
            now = new Date().toISOString();
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            payload = _objectSpread(_objectSpread({}, review), {}, {
              status: 'completed',
              completed_at: now,
              completed_by: user.id,
              completed_by_name: userName,
              work_notes: workNotes.trim() || null,
              review_text: reviewText.trim() || null,
              rating: rating || null,
              reviewer_alias: reviewerAlias.trim() || null,
              review_date: reviewDate || null,
              attachments: attachments,
              updated_at: now
            });
            _context8.n = 3;
            return prReviewUpsert(payload);
          case 3:
            res = _context8.v;
            if (res) {
              toast('✅ 任务已完成！');
              onSaved();
            } else {
              alertSaveError('完成产品评价');
            }
            setSaving(false);
          case 4:
            return _context8.a(2);
        }
      }, _callee8);
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
      maxWidth: 640,
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
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#16a34a'
    }
  }, "\u2705 \u6807\u8BB0\u5B8C\u6210"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, review.product_name || review.product_url.slice(0, 60))), /*#__PURE__*/React.createElement("button", {
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
      padding: 10,
      background: '#f0fdf4',
      border: '1px solid #86efac',
      borderRadius: 8,
      marginBottom: 14,
      fontSize: 11,
      color: '#15803d'
    }
  }, "\uD83D\uDCA1 \u586B\u5199\u771F\u5B9E\u7684\u5DE5\u4F5C\u7EC6\u8282,\u4E3B\u7BA1\u4F1A\u67E5\u770B \xB7 \u4E0A\u4F20\u622A\u56FE\u8BC1\u660E\u8BC4\u4EF7\u5DF2\u53D1\u51FA"), /*#__PURE__*/React.createElement("div", {
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
  }, "\u8BC4\u4EF7\u7528\u540D / \u8D26\u53F7"), /*#__PURE__*/React.createElement("input", {
    value: reviewerAlias,
    onChange: function onChange(e) {
      return setReviewerAlias(e.target.value);
    },
    placeholder: "\u5982:Sarah K.",
    style: {
      width: '100%',
      padding: '7px 10px',
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
  }, "\u8BC4\u4EF7\u53D1\u5E03\u65E5\u671F"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: reviewDate,
    onChange: function onChange(e) {
      return setReviewDate(e.target.value);
    },
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 13
    }
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
  }, "\u8BC4\u5206"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, [1, 2, 3, 4, 5].map(function (n) {
    return /*#__PURE__*/React.createElement("button", {
      key: n,
      onClick: function onClick() {
        return setRating(n);
      },
      style: {
        padding: '5px 12px',
        background: rating >= n ? '#fef3c7' : 'white',
        border: '1px solid ' + (rating >= n ? '#fbbf24' : 'var(--line)'),
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 16,
        fontFamily: 'inherit'
      }
    }, rating >= n ? '⭐' : '☆');
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '5px 10px',
      fontSize: 12,
      color: 'var(--ink-3)',
      alignSelf: 'center'
    }
  }, rating, " \u661F"))), /*#__PURE__*/React.createElement("div", {
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
  }, "\u8BC4\u4EF7\u5185\u5BB9\uFF08\u53EF\u9009,\u590D\u5236\u7C98\u8D34\u4F60\u5199\u7684\u8BC4\u8BBA\uFF09"), /*#__PURE__*/React.createElement("textarea", {
    value: reviewText,
    onChange: function onChange(e) {
      return setReviewText(e.target.value);
    },
    placeholder: "\u8D34\u4E00\u4E0B\u4F60\u5199\u7684\u8BC4\u8BBA\u5185\u5BB9...",
    style: {
      width: '100%',
      minHeight: 80,
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
  }, "\u5DE5\u4F5C\u8BE6\u60C5 *"), /*#__PURE__*/React.createElement("textarea", {
    value: workNotes,
    onChange: function onChange(e) {
      return setWorkNotes(e.target.value);
    },
    placeholder: "\u8BF4\u660E\u64CD\u4F5C\u7EC6\u8282:\n- \u65F6\u95F4:\u4ECA\u5929 14:30\n- \u7528\u4EC0\u4E48\u8D26\u53F7 / \u90AE\u7BB1\n- \u7528 IP \u5730\u533A / \u8BBE\u5907\n- \u9047\u5230\u7684\u95EE\u9898\u7B49",
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
  }, "\uD83D\uDCF7 \u622A\u56FE\u9644\u4EF6\uFF08\u5F3A\u70C8\u5EFA\u8BAE\u4E0A\u4F20 \xB7 \u652F\u6301\u62D6\u62FD + \u7C98\u8D34\uFF09"), /*#__PURE__*/React.createElement(MultiFileUploader, {
    files: attachments,
    setFiles: setAttachments,
    bucket: "briefing-files",
    maxSize: 20
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
    onClick: handleSubmit,
    disabled: saving,
    style: {
      padding: '7px 18px',
      background: '#16a34a',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 13,
      opacity: saving ? 0.5 : 1
    }
  }, saving ? '保存中...' : '✅ 确认完成'))));
};

// 导出 modal
var ReviewExportModal = function ReviewExportModal(_ref12) {
  var reviews = _ref12.reviews,
    allReviews = _ref12.allReviews,
    user = _ref12.user,
    employees = _ref12.employees,
    onClose = _ref12.onClose,
    toast = _ref12.toast;
  var _useState61 = useState('filtered'),
    _useState62 = _slicedToArray(_useState61, 2),
    scope = _useState62[0],
    setScope = _useState62[1]; // filtered / all / completed
  var _useState63 = useState('pdf'),
    _useState64 = _slicedToArray(_useState63, 2),
    format = _useState64[0],
    setFormat = _useState64[1]; // pdf / csv
  var _useState65 = useState(true),
    _useState66 = _slicedToArray(_useState65, 2),
    includeAttachments = _useState66[0],
    setIncludeAttachments = _useState66[1];
  var dataToExport = useMemo(function () {
    if (scope === 'filtered') return reviews;
    if (scope === 'completed') return allReviews.filter(function (r) {
      return r.status === 'completed';
    });
    return allReviews;
  }, [scope, reviews, allReviews]);
  var exportCSV = function exportCSV() {
    var headers = ['#', '状态', '优先级', '产品名', '产品链接', '网站', '平台', '发布人', '发布时间', '接单人', '完成人', '完成时间', '评分', '评价人名', '评价日期', '评价内容', '工作详情', '附件数', '任务说明'];
    var rows = dataToExport.map(function (r, i) {
      var _REVIEW_STATUSES$find, _REVIEW_PRIORITIES$fi;
      var status = ((_REVIEW_STATUSES$find = REVIEW_STATUSES.find(function (s) {
        return s.key === r.status;
      })) === null || _REVIEW_STATUSES$find === void 0 ? void 0 : _REVIEW_STATUSES$find.label) || r.status;
      var prio = ((_REVIEW_PRIORITIES$fi = REVIEW_PRIORITIES.find(function (p) {
        return p.key === r.priority;
      })) === null || _REVIEW_PRIORITIES$fi === void 0 ? void 0 : _REVIEW_PRIORITIES$fi.label) || '';
      return [i + 1, status, prio, r.product_name || '', r.product_url || '', r.site || '', r.platform || '', r.created_by_name || '', (r.created_at || '').slice(0, 16).replace('T', ' '), r.claimed_by_name || '', r.completed_by_name || '', (r.completed_at || '').slice(0, 16).replace('T', ' '), r.rating || '', r.reviewer_alias || '', r.review_date || '', r.review_text || '', r.work_notes || '', (r.attachments || []).length, r.notes || ''];
    });
    downloadCSV([headers].concat(_toConsumableArray(rows)), "\u4EA7\u54C1\u8BC4\u4EF7_".concat(todayISO(), ".csv"));
    toast('✓ 已导出 ' + dataToExport.length + ' 条');
    onClose();
  };
  var exportPDF = function exportPDF() {
    var esc = function esc(s) {
      return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    };
    var rowsHTML = dataToExport.map(function (r, i) {
      var status = REVIEW_STATUSES.find(function (s) {
        return s.key === r.status;
      });
      var prio = REVIEW_PRIORITIES.find(function (p) {
        return p.key === r.priority;
      });
      var shots = includeAttachments ? (r.attachments || []).filter(function (a) {
        return getFileTypeInfo(a).kind === 'image';
      }).slice(0, 4) : [];
      var shotsHTML = shots.length > 0 ? '<div class="shots">' + shots.map(function (s) {
        return '<img src="' + esc(s.url) + '" />';
      }).join('') + '</div>' : '';
      var fullScreenshots = (r.attachments || []).length;
      return '<tr>' + '<td>' + (i + 1) + '</td>' + '<td><span class="status">' + esc((status === null || status === void 0 ? void 0 : status.label) || '') + '</span></td>' + '<td>' + esc((prio === null || prio === void 0 ? void 0 : prio.label) || '') + '</td>' + '<td><strong>' + esc(r.product_name || '') + '</strong><br><a href="' + esc(r.product_url) + '" style="font-size:9px;color:#0369a1;word-break:break-all;">' + esc(r.product_url) + '</a></td>' + '<td>' + esc(r.site || '') + (r.platform ? '<br><small>' + esc(r.platform) + '</small>' : '') + '</td>' + '<td>' + esc(r.created_by_name || '') + '<br><small>' + esc((r.created_at || '').slice(5, 16).replace('T', ' ')) + '</small></td>' + '<td>' + esc(r.completed_by_name || '-') + (r.completed_at ? '<br><small>' + esc(r.completed_at.slice(5, 16).replace('T', ' ')) + '</small>' : '') + '</td>' + '<td>' + (r.rating ? '⭐'.repeat(r.rating) : '-') + (r.reviewer_alias ? '<br><small>' + esc(r.reviewer_alias) + '</small>' : '') + '</td>' + '<td>' + esc(r.work_notes || '') + (r.review_text ? '<br><em>"' + esc(r.review_text) + '"</em>' : '') + '</td>' + '<td>' + shotsHTML + (fullScreenshots > shots.length ? '<small>+' + (fullScreenshots - shots.length) + ' 张</small>' : '') + '</td>' + '</tr>';
    }).join('');
    var html = '<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><title>产品评价任务报表</title>' + '<link rel="preconnect" href="https://fonts.googleapis.com">' + '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' + '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600;700&display=swap" rel="stylesheet">' + '<style>' + 'body { font-family: "Noto Sans SC", -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif; padding:20px; font-size:11px; -webkit-print-color-adjust: exact; print-color-adjust: exact; }' + 'h1 { font-size:20px; margin:0 0 4px; }' + '.meta { color:#86868b; font-size:11px; margin-bottom:12px; }' + 'table { width:100%; border-collapse: collapse; }' + 'th, td { border:1px solid #d2d2d7; padding:6px 8px; text-align:left; vertical-align:top; font-size:11px; }' + 'th { background:#f5f5f7; font-weight:600; }' + '.status { padding:1px 6px; border-radius:8px; background:#e0f2fe; color:#075985; font-size:10px; font-weight:600; }' + '.shots { display:flex; gap:3px; flex-wrap:wrap; }' + '.shots img { width:60px; height:50px; object-fit:cover; border:1px solid #d2d2d7; border-radius:3px; }' + '.toolbar { position:fixed; top:12px; right:12px; display:flex; gap:8px; z-index:100; }' + '.toolbar button { padding:8px 16px; border-radius:6px; cursor:pointer; font-size:13px; border:none; font-family:inherit; }' + '@page { size: A3 landscape; margin: 8mm; }' + '@media print { .no-print { display:none; } }' + '</style></head><body>' + '<div class="toolbar no-print">' + '<button onclick="window.print()" style="background:#0071e3;color:white;">🖨 保存为 PDF</button>' + '<button onclick="window.close()" style="background:white;border:1px solid #d2d2d7;">✕ 关闭</button>' + '</div>' + '<h1>⭐ 产品评价任务报表</h1>' + '<div class="meta">共 <strong>' + dataToExport.length + '</strong> 条 · 导出时间: ' + new Date().toLocaleString('zh-CN') + ' · 导出人: ' + esc((user.name || '') + (user.alias ? ' ' + user.alias : '')) + '</div>' + '<table><thead><tr>' + '<th>#</th><th>状态</th><th>优先级</th><th>产品</th><th>网站</th>' + '<th>发布</th><th>完成</th><th>评分</th><th>工作详情</th><th>截图</th>' + '</tr></thead><tbody>' + rowsHTML + '</tbody></table>' + '<script>window.addEventListener("load", function() { setTimeout(function() { var imgs = Array.from(document.images); var fr = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve(); Promise.all([fr, Promise.all(imgs.map(function(img) { return img.complete ? Promise.resolve() : new Promise(function(res) { img.onload = img.onerror = res; }); }))]).then(function() { setTimeout(function() { window.print(); }, 300); }); }, 100); });</' + 'script>' + '</body></html>';
    var w = window.open('', '_blank', 'width=1200,height=800');
    if (!w) {
      alert('请允许浏览器弹窗');
      return;
    }
    w.document.write(html);
    w.document.close();
    toast('✓ 已生成 ' + dataToExport.length + ' 条 PDF');
    onClose();
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
      maxWidth: 500,
      width: '100%',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 17,
      fontWeight: 600,
      marginBottom: 14
    }
  }, "\uD83D\uDCCA \u5BFC\u51FA\u4EA7\u54C1\u8BC4\u4EF7\u4EFB\u52A1"), /*#__PURE__*/React.createElement("div", {
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
  }, "\u5BFC\u51FA\u8303\u56F4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: 8,
      border: '1px solid ' + (scope === 'filtered' ? 'var(--accent)' : 'var(--line)'),
      borderRadius: 6,
      cursor: 'pointer',
      background: scope === 'filtered' ? '#f0f9ff' : 'white'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: scope === 'filtered',
    onChange: function onChange() {
      return setScope('filtered');
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "\u5F53\u524D\u7B5B\u9009 (", reviews.length, " \u6761)")), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: 8,
      border: '1px solid ' + (scope === 'completed' ? 'var(--accent)' : 'var(--line)'),
      borderRadius: 6,
      cursor: 'pointer',
      background: scope === 'completed' ? '#f0fdf4' : 'white'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: scope === 'completed',
    onChange: function onChange() {
      return setScope('completed');
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "\u4EC5\u5DF2\u5B8C\u6210\u4EFB\u52A1 (", allReviews.filter(function (r) {
    return r.status === 'completed';
  }).length, " \u6761)")), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: 8,
      border: '1px solid ' + (scope === 'all' ? 'var(--accent)' : 'var(--line)'),
      borderRadius: 6,
      cursor: 'pointer',
      background: scope === 'all' ? '#fafafa' : 'white'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: scope === 'all',
    onChange: function onChange() {
      return setScope('all');
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "\u5168\u90E8\u4EFB\u52A1 (", allReviews.length, " \u6761)")))), /*#__PURE__*/React.createElement("div", {
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
  }, "\u5BFC\u51FA\u683C\u5F0F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setFormat('pdf');
    },
    style: {
      flex: 1,
      padding: '10px',
      background: format === 'pdf' ? '#dc2626' : 'white',
      color: format === 'pdf' ? 'white' : 'var(--ink-2)',
      border: '1px solid ' + (format === 'pdf' ? '#dc2626' : 'var(--line)'),
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 13
    }
  }, "\uD83D\uDCC4 PDF\uFF08\u542B\u622A\u56FE\uFF09"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setFormat('csv');
    },
    style: {
      flex: 1,
      padding: '10px',
      background: format === 'csv' ? '#16a34a' : 'white',
      color: format === 'csv' ? 'white' : 'var(--ink-2)',
      border: '1px solid ' + (format === 'csv' ? '#16a34a' : 'var(--line)'),
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 13
    }
  }, "\uD83D\uDCCA CSV\uFF08Excel\uFF09"))), format === 'pdf' && /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: 8,
      background: '#fef9c3',
      borderRadius: 6,
      fontSize: 12,
      cursor: 'pointer',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: includeAttachments,
    onChange: function onChange(e) {
      return setIncludeAttachments(e.target.checked);
    }
  }), "\u5305\u542B\u622A\u56FE\u7F29\u7565\u56FE\uFF08\u6BCF\u6761\u6700\u591A 4 \u5F20\uFF09"), /*#__PURE__*/React.createElement("div", {
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
    onClick: format === 'pdf' ? exportPDF : exportCSV,
    style: {
      padding: '8px 20px',
      background: 'var(--accent)',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 13
    }
  }, "\u5BFC\u51FA ", dataToExport.length, " \u6761"))));
};
