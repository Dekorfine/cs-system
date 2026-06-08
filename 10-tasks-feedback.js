// ====== cs-system — 10-tasks-feedback ======
// 版本 2026.06.05-fix190
// 预编译切片
//
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
// ====== cs-system — 10-tasks-feedback ======
// 版本 2026.06.05-fix190
// 预编译切片
//

var TASK_PRIORITIES = [{
  id: 'urgent',
  label: '🚨 紧急',
  desc: '立刻办',
  color: '#dc2626',
  bg: '#fee2e2'
}, {
  id: 'high',
  label: '⚡ 重要',
  desc: '今天搞',
  color: '#d97706',
  bg: '#fef3c7'
}, {
  id: 'normal',
  label: '· 普通',
  desc: '近期完成',
  color: '#86868b',
  bg: '#f5f5f7'
}, {
  id: 'low',
  label: '· 低',
  desc: '有空再办',
  color: '#a8a8a8',
  bg: '#fafafa'
}];
var TASK_STATUSES = [{
  id: 'pending',
  label: '⏳ 待处理',
  color: '#d97706',
  bg: '#fef3c7'
}, {
  id: 'in_progress',
  label: '🔧 处理中',
  color: '#0369a1',
  bg: '#dbeafe'
}, {
  id: 'done',
  label: '✅ 已完成',
  color: '#15803d',
  bg: '#dcfce7'
}, {
  id: 'blocked',
  label: '⛔ 卡住',
  color: '#dc2626',
  bg: '#fee2e2'
}, {
  id: 'cancelled',
  label: '❌ 已取消',
  color: '#86868b',
  bg: '#f5f5f7'
}];
var findTask = function findTask(arr, id) {
  return arr.find(function (x) {
    return x.id === id;
  }) || arr[0];
};
var TasksModule = function TasksModule(_ref) {
  var user = _ref.user,
    employees = _ref.employees,
    toast = _ref.toast;
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    tasks = _useState2[0],
    setTasks = _useState2[1];
  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showCreate = _useState6[0],
    setShowCreate = _useState6[1];
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    openId = _useState8[0],
    setOpenId = _useState8[1];
  var _useState9 = useState('inbox'),
    _useState0 = _slicedToArray(_useState9, 2),
    tab = _useState0[0],
    setTab = _useState0[1]; // inbox / sent / overdue / all
  var _useState1 = useState('active'),
    _useState10 = _slicedToArray(_useState1, 2),
    filterStatus = _useState10[0],
    setFilterStatus = _useState10[1];
  var _useState11 = useState('all'),
    _useState12 = _slicedToArray(_useState11, 2),
    filterPriority = _useState12[0],
    setFilterPriority = _useState12[1];
  var _useState13 = useState('all'),
    _useState14 = _slicedToArray(_useState13, 2),
    filterAssignee = _useState14[0],
    setFilterAssignee = _useState14[1];
  var _useState15 = useState({
      kind: 'all'
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    dateFilter = _useState16[0],
    setDateFilter = _useState16[1];
  var _useState17 = useState(''),
    _useState18 = _slicedToArray(_useState17, 2),
    search = _useState18[0],
    setSearch = _useState18[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var dateRange = useMemo(function () {
    return getDateRange(dateFilter);
  }, [dateFilter]);
  var load = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var list, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            setLoading(true);
            _context.p = 1;
            _context.n = 2;
            return CLOUD.list('tasks', {
              order: {
                col: 'created_at_ms',
                asc: false
              },
              limit: 500
            });
          case 2:
            list = _context.v;
            setTasks((list || []).filter(function (t) {
              return !t.deleted;
            }));
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            toast('❌ 加载任务失败: ' + (_t.message || _t));
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

  // Realtime 订阅 — 新任务派给我 / 我派的任务被更新都实时刷新
  useEffect(function () {
    if (!CLOUD.isOn || !CLOUD.supabase) return;
    var channel = null;
    try {
      channel = CLOUD.supabase.channel('tasks_' + user.id).on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'tasks'
      }, function (payload) {
        // 如果是新建,且派给当前用户 → 浏览器通知
        if (payload.eventType === 'INSERT' && payload["new"] && payload["new"].assigned_to_id === user.id && payload["new"].created_by !== user.id) {
          try {
            if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
              new Notification('📌 新任务派给你', {
                body: payload["new"].title,
                icon: '/favicon.ico'
              });
            }
          } catch (_unused) {}
          toast('📌 新任务: ' + (payload["new"].title || ''));
        }
        load();
      }).subscribe();
    } catch (e) {
      console.warn('tasks realtime 订阅失败:', e);
    }
    return function () {
      try {
        if (channel) CLOUD.supabase.removeChannel(channel);
      } catch (_unused2) {}
    };
  }, [user.id]);

  // 各 tab 分组
  var tabFiltered = useMemo(function () {
    var isOverdue = function isOverdue(t) {
      if (!t.due_date) return false;
      if (t.status === 'done' || t.status === 'cancelled') return false;
      return t.due_date < new Date().toISOString().slice(0, 10);
    };
    if (tab === 'inbox') return tasks.filter(function (t) {
      return t.assigned_to_id === user.id;
    });
    if (tab === 'sent') return tasks.filter(function (t) {
      return t.created_by === user.id;
    });
    if (tab === 'overdue') return tasks.filter(isOverdue);
    return tasks; // all (admin)
  }, [tasks, tab, user.id]);
  var filtered = useMemo(function () {
    var arr = tabFiltered;
    if (filterStatus === 'active') arr = arr.filter(function (t) {
      return t.status !== 'done' && t.status !== 'cancelled';
    });else if (filterStatus !== 'all') arr = arr.filter(function (t) {
      return t.status === filterStatus;
    });
    if (filterPriority !== 'all') arr = arr.filter(function (t) {
      return t.priority === filterPriority;
    });
    if (filterAssignee !== 'all') arr = arr.filter(function (t) {
      return t.assigned_to_id === filterAssignee;
    });
    if (dateRange.start > 0 || dateRange.end < Infinity) {
      arr = arr.filter(function (t) {
        var ts = t.created_at_ms || 0;
        return ts >= dateRange.start && ts < dateRange.end;
      });
    }
    if (search.trim()) {
      var q = search.trim().toLowerCase();
      arr = arr.filter(function (t) {
        return [t.title, t.description, t.assigned_to_name, t.created_by_name, t.tags].filter(Boolean).join(' ').toLowerCase().includes(q);
      });
    }
    // 排序: 卡住/紧急在前 · 截止日近的在前 · 创建新的在前
    return _toConsumableArray(arr).sort(function (a, b) {
      if (a.status === 'blocked' && b.status !== 'blocked') return -1;
      if (b.status === 'blocked' && a.status !== 'blocked') return 1;
      var pri = {
        urgent: 4,
        high: 3,
        normal: 2,
        low: 1
      };
      var pA = pri[a.priority] || 0,
        pB = pri[b.priority] || 0;
      if (pA !== pB) return pB - pA;
      if (a.due_date && b.due_date && a.due_date !== b.due_date) return a.due_date.localeCompare(b.due_date);
      return (b.created_at_ms || 0) - (a.created_at_ms || 0);
    });
  }, [tabFiltered, filterStatus, filterPriority, filterAssignee, dateRange, search]);
  var stats = useMemo(function () {
    var isOverdue = function isOverdue(t) {
      return t.due_date && t.status !== 'done' && t.status !== 'cancelled' && t.due_date < new Date().toISOString().slice(0, 10);
    };
    return {
      total: tasks.length,
      inbox: tasks.filter(function (t) {
        return t.assigned_to_id === user.id && t.status !== 'done' && t.status !== 'cancelled';
      }).length,
      sent: tasks.filter(function (t) {
        return t.created_by === user.id;
      }).length,
      pending: tasks.filter(function (t) {
        return t.status === 'pending';
      }).length,
      inProgress: tasks.filter(function (t) {
        return t.status === 'in_progress';
      }).length,
      done: tasks.filter(function (t) {
        return t.status === 'done';
      }).length,
      blocked: tasks.filter(function (t) {
        return t.status === 'blocked';
      }).length,
      overdue: tasks.filter(isOverdue).length,
      myInboxUrgent: tasks.filter(function (t) {
        return t.assigned_to_id === user.id && t.priority === 'urgent' && t.status !== 'done' && t.status !== 'cancelled';
      }).length
    };
  }, [tasks, user.id]);
  var openTask = openId ? tasks.find(function (t) {
    return t.id === openId;
  }) : null;

  // 🆕 fix85: 点击统计卡 → 跳到对应任务(设对 tab + 状态,并清掉会挡住的其它筛选)
  var jumpToCard = function jumpToCard(_ref3) {
    var t = _ref3.tab,
      status = _ref3.status;
    setTab(t);
    setFilterStatus(status);
    setFilterPriority('all');
    setFilterAssignee('all');
    setSearch('');
    setDateFilter({
      kind: 'all'
    });
  };
  var TABS = [{
    key: 'inbox',
    label: '📥 我的待办',
    count: stats.inbox,
    color: '#dc2626'
  }, {
    key: 'sent',
    label: '📤 我派的',
    count: stats.sent,
    color: '#0071e3'
  }, {
    key: 'overdue',
    label: '⚠ 已超期',
    count: stats.overdue,
    color: '#dc2626'
  }].concat(_toConsumableArray(isAdmin ? [{
    key: 'all',
    label: '🌐 全部任务',
    count: stats.total,
    color: '#7c3aed'
  }] : []));
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-5",
    style: {
      marginBottom: 12,
      background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 60%, #f5f3ff 100%)'
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
      color: '#1e3a8a'
    }
  }, "\uD83D\uDCCC \u4EFB\u52A1\u5206\u6D3E"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#3730a3',
      marginTop: 4
    }
  }, "\u4E34\u65F6\u6027\u5DE5\u4F5C\u6D3E\u7ED9\u540C\u4E8B \u2192 \u5B9E\u65F6\u901A\u77E5 \u2192 \u4E3B\u7BA1\u5168\u5C40\u53EF\u89C1\u5904\u7406\u8FDB\u5EA6", stats.myInboxUrgent > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      padding: '2px 8px',
      background: '#dc2626',
      color: 'white',
      borderRadius: 8,
      fontSize: 11,
      fontWeight: 600,
      animation: 'pulse 2s ease-in-out infinite'
    }
  }, "\uD83D\uDEA8 \u4F60\u6709 ", stats.myInboxUrgent, " \u4E2A\u7D27\u6025\u4EFB\u52A1"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: load,
    disabled: loading,
    className: "btn-sec",
    style: {
      padding: '6px 12px',
      fontSize: 12
    }
  }, loading ? '⏳' : '🔄', " \u5237\u65B0"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowCreate(true);
    },
    style: {
      padding: '6px 16px',
      background: '#1e40af',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "+ \u6D3E\u4EFB\u52A1")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
      gap: 8,
      marginBottom: 12
    }
  }, [{
    label: '⏳ 待处理',
    val: stats.pending,
    color: '#d97706',
    jump: {
      tab: 'all',
      status: 'pending'
    }
  }, {
    label: '🔧 处理中',
    val: stats.inProgress,
    color: '#0369a1',
    jump: {
      tab: 'all',
      status: 'in_progress'
    }
  }, {
    label: '⛔ 卡住',
    val: stats.blocked,
    color: '#dc2626',
    jump: {
      tab: 'all',
      status: 'blocked'
    }
  }, {
    label: '⚠ 已超期',
    val: stats.overdue,
    color: '#dc2626',
    jump: {
      tab: 'overdue',
      status: 'all'
    }
  }, {
    label: '✅ 已完成',
    val: stats.done,
    color: '#15803d',
    jump: {
      tab: 'all',
      status: 'done'
    }
  }, {
    label: '📋 总任务',
    val: stats.total,
    color: '#7c3aed',
    jump: {
      tab: 'all',
      status: 'all'
    }
  }].map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.label,
      onClick: function onClick() {
        return jumpToCard(s.jump);
      },
      title: "\u70B9\u51FB\u67E5\u770B\u8FD9\u4E9B\u4EFB\u52A1 \u2192",
      className: "paper rounded-2xl p-3",
      style: {
        borderLeft: '4px solid ' + s.color,
        cursor: 'pointer',
        transition: 'box-shadow .15s, transform .1s'
      },
      onMouseEnter: function onMouseEnter(e) {
        e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,.08)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.boxShadow = '';
        e.currentTarget.style.transform = '';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        fontWeight: 600
      }
    }, s.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 24,
        fontWeight: 700,
        color: s.color,
        marginTop: 2
      }
    }, s.val));
  })), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4",
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 8,
      flexWrap: 'wrap'
    }
  }, TABS.map(function (t) {
    var sel = tab === t.key;
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return setTab(t.key);
      },
      style: {
        padding: '6px 12px',
        borderRadius: 7,
        border: '1px solid ' + (sel ? t.color : 'var(--line)'),
        background: sel ? t.color : 'white',
        color: sel ? 'white' : 'var(--ink-2)',
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: sel ? 600 : 500,
        fontFamily: 'inherit'
      }
    }, t.label, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 6px',
        background: sel ? 'rgba(255,255,255,.25)' : '#f5f5f7',
        borderRadius: 8,
        marginLeft: 2,
        fontSize: 10,
        fontWeight: 700
      }
    }, t.count));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: 8
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
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: filterStatus,
    onChange: function onChange(e) {
      return setFilterStatus(e.target.value);
    },
    style: {
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "active"
  }, "\u672A\u5B8C\u6210"), /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u6240\u6709\u72B6\u6001"), TASK_STATUSES.map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, s.label);
  })), /*#__PURE__*/React.createElement("select", {
    value: filterPriority,
    onChange: function onChange(e) {
      return setFilterPriority(e.target.value);
    },
    style: {
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u6240\u6709\u4F18\u5148\u7EA7"), TASK_PRIORITIES.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p.id,
      value: p.id
    }, p.label);
  })), (tab === 'all' || tab === 'sent') && /*#__PURE__*/React.createElement("select", {
    value: filterAssignee,
    onChange: function onChange(e) {
      return setFilterAssignee(e.target.value);
    },
    style: {
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u6240\u6709\u627F\u63A5\u4EBA"), employees && employees.map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.name, e.alias ? ' ' + e.alias : '');
  })), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u641C\u7D22\u6807\u9898/\u63CF\u8FF0/\u627F\u63A5\u4EBA...",
    style: {
      flex: 1,
      minWidth: 180,
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      fontFamily: 'inherit'
    }
  }))), loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 14px',
      textAlign: 'center',
      color: 'var(--ink-4)'
    }
  }, "\u52A0\u8F7D\u4E2D...") : filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl",
    style: {
      padding: '40px 14px',
      textAlign: 'center',
      color: 'var(--ink-4)',
      fontSize: 13
    }
  }, tasks.length === 0 ? '还没有任务 · 点右上"+ 派任务"开始' : '当前筛选下没有任务') : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, filtered.map(function (t) {
    return /*#__PURE__*/React.createElement(TaskCard, {
      key: t.id,
      task: t,
      user: user,
      onOpen: function onOpen() {
        return setOpenId(t.id);
      },
      onReload: load,
      toast: toast
    });
  })), showCreate && /*#__PURE__*/React.createElement(TaskCreateModal, {
    user: user,
    employees: employees,
    onClose: function onClose() {
      return setShowCreate(false);
    },
    onCreated: function onCreated() {
      setShowCreate(false);
      load();
      toast('✓ 任务已派发');
    },
    toast: toast
  }), openTask && /*#__PURE__*/React.createElement(TaskDetailModal, {
    task: openTask,
    user: user,
    employees: employees,
    onClose: function onClose() {
      return setOpenId(null);
    },
    onChanged: load,
    toast: toast
  }));
};

// 任务卡片
var TaskCard = function TaskCard(_ref4) {
  var task = _ref4.task,
    user = _ref4.user,
    onOpen = _ref4.onOpen,
    onReload = _ref4.onReload,
    toast = _ref4.toast;
  var pri = findTask(TASK_PRIORITIES, task.priority);
  var st = findTask(TASK_STATUSES, task.status);
  var isMine = task.assigned_to_id === user.id;
  var isCreator = task.created_by === user.id;
  var today = new Date().toISOString().slice(0, 10);
  var isOverdue = task.due_date && task.status !== 'done' && task.status !== 'cancelled' && task.due_date < today;
  var isDueToday = task.due_date === today && task.status !== 'done' && task.status !== 'cancelled';
  var ageDays = Math.floor((Date.now() - (task.created_at_ms || 0)) / 86400000);
  var quickAction = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(newStatus, e) {
      var updates;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            e.stopPropagation();
            if (!(!isMine && task.created_by !== user.id && user.role !== 'admin' && user.role !== 'super_admin')) {
              _context2.n = 1;
              break;
            }
            toast('只有承接人/创建人/主管能操作');
            return _context2.a(2);
          case 1:
            updates = _objectSpread(_objectSpread({}, task), {}, {
              status: newStatus,
              updated_at: new Date().toISOString()
            });
            if (newStatus === 'in_progress' && !task.started_at_ms) updates.started_at_ms = Date.now();
            if (newStatus === 'done') {
              updates.completed_at_ms = Date.now();
              updates.completed_by_id = user.id;
              updates.completed_by_name = user.name + (user.alias ? ' ' + user.alias : '');
            }
            _context2.n = 2;
            return CLOUD.upsert('tasks', updates);
          case 2:
            toast('✓ 已更新');
            onReload && onReload();
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }));
    return function quickAction(_x, _x2) {
      return _ref5.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      padding: '12px 14px',
      background: 'white',
      border: '1px solid ' + (isOverdue ? '#fca5a5' : isDueToday ? '#fbbf24' : 'var(--line)'),
      borderRadius: 10,
      cursor: 'pointer',
      transition: 'transform .12s, box-shadow .12s'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.transform = 'translateY(-1px)';
      e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,.06)';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      flexWrap: 'wrap',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: pri.bg,
      color: pri.color,
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 600
    }
  }, pri.label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: st.bg,
      color: st.color,
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 600
    }
  }, st.label), isMine && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#fee2e2',
      color: '#b91c1c',
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\uD83D\uDCE5 \u6D3E\u7ED9\u6211"), isCreator && !isMine && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#dbeafe',
      color: '#1e40af',
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\uD83D\uDCE4 \u6211\u6D3E\u7684"), isOverdue && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#dc2626',
      color: 'white',
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 700,
      animation: 'pulse 2s ease-in-out infinite'
    }
  }, "\u26A0 \u8D85\u671F"), isDueToday && !isOverdue && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#fef3c7',
      color: '#92400e',
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 700
    }
  }, "\uD83D\uDCC5 \u4ECA\u5929\u622A\u6B62"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 10,
      color: 'var(--ink-4)'
    }
  }, ageDays === 0 ? '刚刚' : ageDays + ' 天前')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink)',
      marginBottom: 4
    }
  }, task.title), task.description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-2)',
      lineHeight: 1.5,
      marginBottom: 5,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical'
    }
  }, task.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 11,
      color: 'var(--ink-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCE4 ", task.created_by_name || '?'), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#86868b'
    }
  }, "\u2192"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#1e40af',
      fontWeight: 600
    }
  }, "\uD83D\uDC64 ", task.assigned_to_name || '未指定'), task.due_date && /*#__PURE__*/React.createElement("span", {
    style: {
      color: isOverdue ? '#dc2626' : isDueToday ? '#d97706' : 'var(--ink-3)',
      fontWeight: isOverdue || isDueToday ? 600 : 400
    }
  }, "\uD83D\uDCC5 ", task.due_date), (task.thread || []).length > 0 && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCAC ", (task.thread || []).length), task.completed_at_ms && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#15803d'
    }
  }, "\u2713 ", task.completed_by_name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 4
    }
  }, isMine && task.status === 'pending' && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      return quickAction('in_progress', e);
    },
    style: {
      padding: '3px 9px',
      background: '#0369a1',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u25B6 \u63A5\u624B"), isMine && task.status === 'in_progress' && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      return quickAction('done', e);
    },
    style: {
      padding: '3px 9px',
      background: '#15803d',
      color: 'white',
      border: 'none',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u2713 \u5B8C\u6210"), isMine && (task.status === 'pending' || task.status === 'in_progress') && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick(e) {
      return quickAction('blocked', e);
    },
    style: {
      padding: '3px 9px',
      background: '#fee2e2',
      color: '#b91c1c',
      border: '1px solid #fca5a5',
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 10,
      fontWeight: 600
    }
  }, "\u26D4 \u5361\u4F4F"))));
};

// 派任务 modal
var TaskCreateModal = function TaskCreateModal(_ref6) {
  var user = _ref6.user,
    employees = _ref6.employees,
    onClose = _ref6.onClose,
    onCreated = _ref6.onCreated,
    toast = _ref6.toast;
  var _useState19 = useState(''),
    _useState20 = _slicedToArray(_useState19, 2),
    title = _useState20[0],
    setTitle = _useState20[1];
  var _useState21 = useState(''),
    _useState22 = _slicedToArray(_useState21, 2),
    description = _useState22[0],
    setDescription = _useState22[1];
  var _useState23 = useState('normal'),
    _useState24 = _slicedToArray(_useState23, 2),
    priority = _useState24[0],
    setPriority = _useState24[1];
  var _useState25 = useState(''),
    _useState26 = _slicedToArray(_useState25, 2),
    assignedId = _useState26[0],
    setAssignedId = _useState26[1];
  var _useState27 = useState(''),
    _useState28 = _slicedToArray(_useState27, 2),
    dueDate = _useState28[0],
    setDueDate = _useState28[1];
  var _useState29 = useState(false),
    _useState30 = _slicedToArray(_useState29, 2),
    sending = _useState30[0],
    setSending = _useState30[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  // 默认派给自己 (个人备忘录) - 但主管派别人是主要场景

  var submit = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var assignedEmp, userName, id, record, ok, _t2;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            if (title.trim()) {
              _context3.n = 1;
              break;
            }
            alert('请填写任务标题');
            return _context3.a(2);
          case 1:
            if (assignedId) {
              _context3.n = 2;
              break;
            }
            alert('请选择承接人');
            return _context3.a(2);
          case 2:
            setSending(true);
            _context3.p = 3;
            assignedEmp = (employees || []).find(function (e) {
              return e.id === assignedId;
            });
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            id = crypto.randomUUID ? crypto.randomUUID() : 'task_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
            record = {
              id: id,
              title: title.trim(),
              description: description.trim() || null,
              priority: priority,
              status: 'pending',
              assigned_to_id: assignedId,
              assigned_to_name: assignedEmp ? assignedEmp.name + (assignedEmp.alias ? ' ' + assignedEmp.alias : '') : '',
              due_date: dueDate || null,
              created_by: user.id,
              created_by_name: userName,
              created_by_role: user.role,
              created_at_ms: Date.now(),
              updated_at: new Date().toISOString(),
              thread: []
            };
            _context3.n = 4;
            return CLOUD.upsert('tasks', record);
          case 4:
            ok = _context3.v;
            if (ok) {
              _context3.n = 5;
              break;
            }
            throw new Error('保存失败');
          case 5:
            onCreated();
            _context3.n = 7;
            break;
          case 6:
            _context3.p = 6;
            _t2 = _context3.v;
            alert('派单失败: ' + (_t2.message || _t2));
          case 7:
            setSending(false);
          case 8:
            return _context3.a(2);
        }
      }, _callee3, null, [[3, 6]]);
    }));
    return function submit() {
      return _ref7.apply(this, arguments);
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
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 14,
      width: '100%',
      maxWidth: 600,
      boxShadow: '0 20px 60px rgba(0,0,0,.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'linear-gradient(90deg, #eff6ff 0%, #e0e7ff 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#1e40af'
    }
  }, "\uD83D\uDCCC \u6D3E\u53D1\u4EFB\u52A1"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#1e3a8a',
      marginTop: 2
    }
  }, "\u4E34\u65F6\u6027\u5DE5\u4F5C \xB7 \u5B9E\u65F6\u63A8\u9001\u7ED9\u627F\u63A5\u4EBA")), /*#__PURE__*/React.createElement("button", {
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
  }, "\u4EFB\u52A1\u6807\u9898 *"), /*#__PURE__*/React.createElement("input", {
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    placeholder: "\u5982:\u6838\u5BF9\u6628\u5929 VK \u7F51\u7AD9 5 \u4E2A\u8BA2\u5355\u7684\u53D1\u8D27\u72B6\u6001",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
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
  }, "\u8BE6\u7EC6\u8BF4\u660E (\u53EF\u9009)"), /*#__PURE__*/React.createElement("textarea", {
    value: description,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    },
    rows: 3,
    placeholder: "\u4E3A\u4EC0\u4E48\u8981\u505A / \u8981\u505A\u5230\u4EC0\u4E48\u7A0B\u5EA6 / \u6CE8\u610F\u4E8B\u9879...",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", {
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
  }, "\u6D3E\u7ED9\u8C01 *"), /*#__PURE__*/React.createElement("select", {
    value: assignedId,
    onChange: function onChange(e) {
      return setAssignedId(e.target.value);
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
  }, "\u2014 \u9009\u62E9\u627F\u63A5\u4EBA \u2014"), (employees || []).filter(function (e) {
    return !e.deleted && !e.deactivated;
  }).map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.name, e.alias ? ' ' + e.alias : '', e.role === 'admin' || e.role === 'super_admin' ? ' (主管)' : '');
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u622A\u6B62\u65E5\u671F (\u53EF\u9009)"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: dueDate,
    onChange: function onChange(e) {
      return setDueDate(e.target.value);
    },
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
      display: 'block',
      marginBottom: 4
    }
  }, "\u4F18\u5148\u7EA7"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 5,
      flexWrap: 'wrap'
    }
  }, TASK_PRIORITIES.map(function (p) {
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
        background: sel ? p.bg : 'white',
        color: sel ? p.color : 'var(--ink-2)',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 11,
        fontWeight: 600,
        fontFamily: 'inherit'
      }
    }, p.label, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 400,
        fontSize: 10,
        color: 'var(--ink-3)'
      }
    }, p.desc));
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
    disabled: sending,
    className: "btn-sec",
    style: {
      padding: '7px 14px',
      fontSize: 12
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: submit,
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
  }, sending ? '派发中...' : '📌 派发任务')))), document.body);
};

// 任务详情 modal
var TaskDetailModal = function TaskDetailModal(_ref8) {
  var task = _ref8.task,
    user = _ref8.user,
    employees = _ref8.employees,
    onClose = _ref8.onClose,
    onChanged = _ref8.onChanged,
    toast = _ref8.toast;
  var _useState31 = useState(''),
    _useState32 = _slicedToArray(_useState31, 2),
    replyText = _useState32[0],
    setReplyText = _useState32[1];
  var _useState33 = useState(false),
    _useState34 = _slicedToArray(_useState33, 2),
    editing = _useState34[0],
    setEditing = _useState34[1];
  var _useState35 = useState(task.priority),
    _useState36 = _slicedToArray(_useState35, 2),
    editPriority = _useState36[0],
    setEditPriority = _useState36[1];
  var _useState37 = useState(task.due_date || ''),
    _useState38 = _slicedToArray(_useState37, 2),
    editDueDate = _useState38[0],
    setEditDueDate = _useState38[1];
  var _useState39 = useState(task.assigned_to_id || ''),
    _useState40 = _slicedToArray(_useState39, 2),
    editAssignedId = _useState40[0],
    setEditAssignedId = _useState40[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var isMine = task.assigned_to_id === user.id;
  var isCreator = task.created_by === user.id;
  var canEdit = isCreator || isAdmin;
  var pri = findTask(TASK_PRIORITIES, task.priority);
  var st = findTask(TASK_STATUSES, task.status);
  var setStatus = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(newStatus) {
      var updates, ok;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            updates = _objectSpread(_objectSpread({}, task), {}, {
              status: newStatus,
              updated_at: new Date().toISOString()
            });
            if (newStatus === 'in_progress' && !task.started_at_ms) updates.started_at_ms = Date.now();
            if (newStatus === 'done') {
              updates.completed_at_ms = Date.now();
              updates.completed_by_id = user.id;
              updates.completed_by_name = user.name + (user.alias ? ' ' + user.alias : '');
            }
            if (newStatus === 'cancelled') {
              updates.cancelled_at_ms = Date.now();
            }
            _context4.n = 1;
            return CLOUD.upsert('tasks', updates);
          case 1:
            ok = _context4.v;
            if (ok) {
              toast('✓ 状态已更新');
              onChanged && onChanged();
            }
          case 2:
            return _context4.a(2);
        }
      }, _callee4);
    }));
    return function setStatus(_x3) {
      return _ref9.apply(this, arguments);
    };
  }();
  var saveEdit = /*#__PURE__*/function () {
    var _ref0 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var assignedEmp, updates, ok;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            assignedEmp = (employees || []).find(function (e) {
              return e.id === editAssignedId;
            });
            updates = _objectSpread(_objectSpread({}, task), {}, {
              priority: editPriority,
              due_date: editDueDate || null,
              assigned_to_id: editAssignedId,
              assigned_to_name: assignedEmp ? assignedEmp.name + (assignedEmp.alias ? ' ' + assignedEmp.alias : '') : task.assigned_to_name,
              updated_at: new Date().toISOString()
            });
            _context5.n = 1;
            return CLOUD.upsert('tasks', updates);
          case 1:
            ok = _context5.v;
            if (ok) {
              toast('✓ 已保存');
              setEditing(false);
              onChanged && onChanged();
            }
          case 2:
            return _context5.a(2);
        }
      }, _callee5);
    }));
    return function saveEdit() {
      return _ref0.apply(this, arguments);
    };
  }();
  var addReply = /*#__PURE__*/function () {
    var _ref1 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var userName, newThread, ok;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            if (replyText.trim()) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2);
          case 1:
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            newThread = [].concat(_toConsumableArray(task.thread || []), [{
              user_id: user.id,
              user_name: userName,
              role: user.role,
              content: replyText.trim(),
              ts: Date.now()
            }]);
            _context6.n = 2;
            return CLOUD.upsert('tasks', _objectSpread(_objectSpread({}, task), {}, {
              thread: newThread,
              updated_at: new Date().toISOString()
            }));
          case 2:
            ok = _context6.v;
            if (ok) {
              setReplyText('');
              toast('✓ 已回复');
              onChanged && onChanged();
            }
          case 3:
            return _context6.a(2);
        }
      }, _callee6);
    }));
    return function addReply() {
      return _ref1.apply(this, arguments);
    };
  }();
  var handleDelete = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var ok;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            _context7.n = 1;
            return wsConfirm('确认删除此任务?');
          case 1:
            if (_context7.v) {
              _context7.n = 2;
              break;
            }
            return _context7.a(2);
          case 2:
            _context7.n = 3;
            return CLOUD.upsert('tasks', _objectSpread(_objectSpread({}, task), {}, {
              deleted: true,
              deleted_at: Date.now(),
              deleted_by: user.id
            }));
          case 3:
            ok = _context7.v;
            if (ok) {
              toast('✓ 已删除');
              onChanged && onChanged();
              onClose();
            }
          case 4:
            return _context7.a(2);
        }
      }, _callee7);
    }));
    return function handleDelete() {
      return _ref10.apply(this, arguments);
    };
  }();
  var formatTs = function formatTs(ms) {
    return ms ? new Date(ms).toLocaleString('zh-CN', {
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
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 14,
      width: '100%',
      maxWidth: 680,
      boxShadow: '0 20px 60px rgba(0,0,0,.25)',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '92vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexShrink: 0,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
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
      background: pri.bg,
      color: pri.color,
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 700
    }
  }, pri.label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: st.bg,
      color: st.color,
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 700
    }
  }, st.label)), /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.3
    }
  }, task.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "\uD83D\uDCE4 ", task.created_by_name || '?', " \xB7 ", formatTs(task.created_at_ms), " \u2192 \uD83D\uDC64 ", /*#__PURE__*/React.createElement("strong", null, task.assigned_to_name || '未指定'), task.due_date && /*#__PURE__*/React.createElement("span", null, " \xB7 \uD83D\uDCC5 \u622A\u6B62 ", task.due_date))), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18,
      padding: 0,
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      overflowY: 'auto',
      flex: 1
    }
  }, task.description && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 4
    }
  }, "\uD83D\uDCDD \u4EFB\u52A1\u8BF4\u660E"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: '#fafaf7',
      borderRadius: 8,
      fontSize: 13,
      color: 'var(--ink-2)',
      lineHeight: 1.6,
      whiteSpace: 'pre-wrap'
    }
  }, task.description)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14,
      padding: '10px 12px',
      background: '#f0f9ff',
      border: '1px solid #bae6fd',
      borderRadius: 8,
      fontSize: 11,
      lineHeight: 1.8
    }
  }, /*#__PURE__*/React.createElement("div", null, "\uD83D\uDCE4 ", /*#__PURE__*/React.createElement("strong", null, task.created_by_name || '?'), " \u6D3E\u53D1\u4E8E ", formatTs(task.created_at_ms)), task.started_at_ms && /*#__PURE__*/React.createElement("div", null, "\u25B6 \u63A5\u624B\u4E8E ", formatTs(task.started_at_ms)), task.completed_at_ms && /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#15803d',
      fontWeight: 600
    }
  }, "\u2713 ", task.completed_by_name || '?', " \u5B8C\u6210\u4E8E ", formatTs(task.completed_at_ms)), task.cancelled_at_ms && /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#86868b'
    }
  }, "\u274C \u53D6\u6D88\u4E8E ", formatTs(task.cancelled_at_ms))), editing && canEdit && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14,
      padding: '12px',
      background: '#fffbeb',
      border: '1px solid #fcd34d',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#92400e',
      marginBottom: 8
    }
  }, "\u270F\uFE0F \u7F16\u8F91\u4EFB\u52A1"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      marginBottom: 3
    }
  }, "\u627F\u63A5\u4EBA"), /*#__PURE__*/React.createElement("select", {
    value: editAssignedId,
    onChange: function onChange(e) {
      return setEditAssignedId(e.target.value);
    },
    style: {
      width: '100%',
      padding: '6px 9px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, (employees || []).filter(function (e) {
    return !e.deleted;
  }).map(function (e) {
    return /*#__PURE__*/React.createElement("option", {
      key: e.id,
      value: e.id
    }, e.name, e.alias ? ' ' + e.alias : '');
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      marginBottom: 3
    }
  }, "\u622A\u6B62\u65E5\u671F"), /*#__PURE__*/React.createElement("input", {
    type: "date",
    value: editDueDate,
    onChange: function onChange(e) {
      return setEditDueDate(e.target.value);
    },
    style: {
      width: '100%',
      padding: '6px 9px',
      border: '1px solid var(--line)',
      borderRadius: 6,
      fontSize: 12,
      fontFamily: 'inherit'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap',
      marginBottom: 8
    }
  }, TASK_PRIORITIES.map(function (p) {
    var sel = editPriority === p.id;
    return /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onClick: function onClick() {
        return setEditPriority(p.id);
      },
      style: {
        padding: '4px 10px',
        border: '1px solid ' + (sel ? p.color : 'var(--line)'),
        background: sel ? p.bg : 'white',
        color: p.color,
        borderRadius: 5,
        cursor: 'pointer',
        fontSize: 11,
        fontWeight: 600,
        fontFamily: 'inherit'
      }
    }, p.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEditing(false);
    },
    className: "btn-sec",
    style: {
      padding: '5px 12px',
      fontSize: 11
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: saveEdit,
    style: {
      padding: '5px 12px',
      background: '#d97706',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDCBE \u4FDD\u5B58"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14,
      padding: '10px',
      background: '#fafaf7',
      border: '1px solid var(--line)',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 6
    }
  }, "\uD83D\uDD04 \u66F4\u6539\u72B6\u6001"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, TASK_STATUSES.map(function (s) {
    var sel = task.status === s.id;
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: function onClick() {
        return setStatus(s.id);
      },
      disabled: sel,
      style: {
        padding: '5px 11px',
        background: sel ? s.color : 'white',
        color: sel ? 'white' : s.color,
        border: '1px solid ' + s.color,
        borderRadius: 6,
        cursor: sel ? 'default' : 'pointer',
        fontSize: 11,
        fontWeight: 600,
        fontFamily: 'inherit',
        opacity: sel ? 0.8 : 1
      }
    }, sel && '✓ ', s.label);
  }))), (task.thread || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 4
    }
  }, "\uD83D\uDCAC \u5BF9\u8BDD (", (task.thread || []).length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, (task.thread || []).map(function (m, i) {
    var isMineMsg = m.user_id === user.id;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        justifyContent: isMineMsg ? 'flex-end' : 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '80%',
        padding: '7px 11px',
        background: isMineMsg ? '#dcfce7' : 'white',
        border: '1px solid ' + (isMineMsg ? '#86efac' : 'var(--line)'),
        borderRadius: 9,
        fontSize: 12,
        color: 'var(--ink-2)',
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)',
        marginBottom: 2,
        fontWeight: 600
      }
    }, m.user_name, " \xB7 ", formatTs(m.ts)), /*#__PURE__*/React.createElement("div", {
      style: {
        whiteSpace: 'pre-wrap'
      }
    }, m.content)));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: replyText,
    onChange: function onChange(e) {
      return setReplyText(e.target.value);
    },
    rows: 2,
    placeholder: "\u8865\u5145\u4FE1\u606F / \u53CD\u9988\u8FDB\u5EA6 / \u8BF7\u793A\u4E3B\u7BA1...",
    onKeyDown: function onKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') addReply();
    },
    style: {
      flex: 1,
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      fontFamily: 'inherit',
      resize: 'vertical'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: addReply,
    disabled: !replyText.trim(),
    style: {
      padding: '7px 14px',
      background: '#0369a1',
      color: 'white',
      border: 'none',
      borderRadius: 7,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit',
      alignSelf: 'flex-start',
      opacity: replyText.trim() ? 1 : 0.4
    }
  }, "\u53D1\u9001")))), canEdit && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px',
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0,
      background: '#fafafa'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleDelete,
    style: {
      padding: '6px 12px',
      background: 'transparent',
      color: '#dc2626',
      border: '1px solid #fca5a5',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDDD1 \u5220\u9664\u4EFB\u52A1"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setEditing(function (v) {
        return !v;
      });
    },
    style: {
      padding: '6px 14px',
      background: editing ? '#86868b' : '#d97706',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, editing ? '取消编辑' : '✏️ 编辑')))), document.body);
};

// ════════════════════════════════════════════════════════════════════
// 🐛 Bug反馈 / 需求模块 (fix14)
// 用户自助提交 → 直接录入 Supabase → 主管确认 → AI 一键导出摘要 → 修复 → 标版本号
// 支持: 截图粘贴 / 文字描述 / 自动收集浏览器+版本信息
// ════════════════════════════════════════════════════════════════════
var BUG_CATEGORIES = [{
  id: 'bug',
  label: '🐛 Bug',
  desc: '功能不正常,出错,报错',
  color: '#dc2626',
  bg: '#fee2e2'
}, {
  id: 'feature',
  label: '✨ 新功能',
  desc: '希望增加什么功能',
  color: '#7c3aed',
  bg: '#f3e8ff'
}, {
  id: 'improvement',
  label: '💡 改进',
  desc: '已有功能想优化',
  color: '#0369a1',
  bg: '#dbeafe'
}, {
  id: 'question',
  label: '❓ 疑问',
  desc: '用法不清楚 / 想确认',
  color: '#86868b',
  bg: '#f5f5f7'
}];
var BUG_PRIORITIES = [{
  id: 'urgent',
  label: '🚨 紧急',
  desc: '影响工作 · 马上修',
  color: '#dc2626',
  bg: '#fee2e2'
}, {
  id: 'high',
  label: '⚡ 重要',
  desc: '尽快修',
  color: '#d97706',
  bg: '#fef3c7'
}, {
  id: 'normal',
  label: '· 普通',
  desc: '有空就修',
  color: '#86868b',
  bg: '#f5f5f7'
}, {
  id: 'low',
  label: '· 低',
  desc: '有空再说',
  color: '#a8a8a8',
  bg: '#fafafa'
}];
var BUG_STATUSES = [{
  id: 'new',
  label: '🆕 待查阅',
  color: '#0369a1',
  bg: '#dbeafe'
}, {
  id: 'reviewed',
  label: '👀 已查阅',
  color: '#7c3aed',
  bg: '#f3e8ff'
}, {
  id: 'planned',
  label: '📅 已排期',
  color: '#d97706',
  bg: '#fef3c7'
}, {
  id: 'in_progress',
  label: '🔧 修复中',
  color: '#0369a1',
  bg: '#dbeafe'
}, {
  id: 'done',
  label: '✅ 已修复',
  color: '#15803d',
  bg: '#dcfce7'
}, {
  id: 'rejected',
  label: '❌ 已拒绝',
  color: '#86868b',
  bg: '#f5f5f7'
}, {
  id: 'duplicate',
  label: '🔁 重复',
  color: '#86868b',
  bg: '#f5f5f7'
}];
var findBug = function findBug(arr, id) {
  return arr.find(function (x) {
    return x.id === id;
  }) || arr[0];
};
// 模块列表 (与 allTabs 一致 — 用于"出问题在哪个模块")
var BUG_MODULES = [{
  id: 'cs',
  label: '📞 客服跟进'
}, {
  id: 'chargebacks',
  label: '🚨 拒付'
}, {
  id: 'offline_orders',
  label: '💳 线下单'
}, {
  id: 'custom_photo',
  label: '🎨 定制&实拍'
}, {
  id: 'events',
  label: '📋 工作主线'
}, {
  id: 'reviews',
  label: '⭐ 产品评价 (含 AI 评价工具)'
}, {
  id: 'suppliers',
  label: '🏭 供应商'
}, {
  id: 'kb',
  label: '📚 知识库'
}, {
  id: 'email_templates',
  label: '📧 邮件模板'
}, {
  id: 'quote',
  label: '📝 报价单'
}, {
  id: 'freight_calc',
  label: '🚚 运费精算器'
}, {
  id: 'express_invoice',
  label: '📦 快递发票'
}, {
  id: 'cross_dept',
  label: '📨 跨部门协作'
}, {
  id: 'briefings',
  label: '📢 会议纪要'
}, {
  id: 'dashboard',
  label: '📈 数据看板'
}, {
  id: 'admin_overview',
  label: '📊 主管汇总'
}, {
  id: 'delete_approvals',
  label: '🛡 删除审批'
}, {
  id: 'trash',
  label: '🗑 回收站'
}, {
  id: 'admin',
  label: '⚙ 设置'
}, {
  id: 'help',
  label: '📖 使用手册'
}, {
  id: 'feedback',
  label: '🐛 反馈中心'
}, {
  id: 'other',
  label: '· 其他 / 跨模块'
}];

// 主模块
var BugReportsModule = function BugReportsModule(_ref11) {
  var user = _ref11.user,
    employees = _ref11.employees,
    toast = _ref11.toast;
  var _useState41 = useState([]),
    _useState42 = _slicedToArray(_useState41, 2),
    reports = _useState42[0],
    setReports = _useState42[1];
  var _useState43 = useState(true),
    _useState44 = _slicedToArray(_useState43, 2),
    loading = _useState44[0],
    setLoading = _useState44[1];
  var _useState45 = useState(false),
    _useState46 = _slicedToArray(_useState45, 2),
    showSubmit = _useState46[0],
    setShowSubmit = _useState46[1];
  var _useState47 = useState(null),
    _useState48 = _slicedToArray(_useState47, 2),
    openId = _useState48[0],
    setOpenId = _useState48[1];
  var _useState49 = useState(false),
    _useState50 = _slicedToArray(_useState49, 2),
    showAiSummary = _useState50[0],
    setShowAiSummary = _useState50[1];
  var _useState51 = useState(false),
    _useState52 = _slicedToArray(_useState51, 2),
    showExport = _useState52[0],
    setShowExport = _useState52[1]; // 🆕 fix14b: 导出模态
  var _useState53 = useState('all'),
    _useState54 = _slicedToArray(_useState53, 2),
    filterStatus = _useState54[0],
    setFilterStatus = _useState54[1];
  var _useState55 = useState('all'),
    _useState56 = _slicedToArray(_useState55, 2),
    filterCategory = _useState56[0],
    setFilterCategory = _useState56[1];
  var _useState57 = useState('all'),
    _useState58 = _slicedToArray(_useState57, 2),
    filterScope = _useState58[0],
    setFilterScope = _useState58[1]; // 'all' | 'mine' (员工 default mine, 主管 default all)
  var _useState59 = useState({
      kind: 'all'
    }),
    _useState60 = _slicedToArray(_useState59, 2),
    dateFilter = _useState60[0],
    setDateFilter = _useState60[1]; // 🆕 fix15
  var _useState61 = useState(''),
    _useState62 = _slicedToArray(_useState61, 2),
    search = _useState62[0],
    setSearch = _useState62[1];
  var _useState63 = useState('list'),
    _useState64 = _slicedToArray(_useState63, 2),
    view = _useState64[0],
    setView = _useState64[1]; // 🆕 fix17: 'list' | 'kpi' (KPI 按提交人月度汇总)

  var isAdmin = user.role === 'admin' || user.role === 'super_admin';

  // 🆕 fix15
  var dateRange = useMemo(function () {
    return getDateRange(dateFilter);
  }, [dateFilter]);

  // 员工只看到自己的反馈 (但能看进度); 主管看全部
  useEffect(function () {
    if (!isAdmin && filterScope === 'all') setFilterScope('mine');
  }, [isAdmin]);
  var load = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
      var list, live, _t3;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.p = _context8.n) {
          case 0:
            setLoading(true);
            _context8.p = 1;
            _context8.n = 2;
            return CLOUD.list('bug_reports', {
              order: {
                col: 'created_at_ms',
                asc: false
              },
              limit: 500
            });
          case 2:
            list = _context8.v;
            live = (list || []).filter(function (r) {
              return !r.deleted;
            });
            setReports(live);
            _context8.n = 4;
            break;
          case 3:
            _context8.p = 3;
            _t3 = _context8.v;
            toast('❌ 加载反馈失败: ' + (_t3.message || _t3));
          case 4:
            setLoading(false);
          case 5:
            return _context8.a(2);
        }
      }, _callee8, null, [[1, 3]]);
    }));
    return function load() {
      return _ref12.apply(this, arguments);
    };
  }();
  useEffect(function () {
    load();
  }, []);

  // Realtime: 任何人提交新反馈 → 所有人(尤其主管)实时刷新
  useEffect(function () {
    if (!CLOUD.isOn || !CLOUD.supabase) return;
    var channel = null;
    try {
      channel = CLOUD.supabase.channel('bug_reports_' + user.id).on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'bug_reports'
      }, function () {
        return load();
      }).subscribe();
    } catch (e) {
      console.warn('bug_reports realtime 订阅失败:', e);
    }
    return function () {
      try {
        if (channel) CLOUD.supabase.removeChannel(channel);
      } catch (_unused3) {}
    };
  }, [user.id]);

  // 过滤
  var filtered = useMemo(function () {
    var arr = reports;
    if (filterScope === 'mine') arr = arr.filter(function (r) {
      return r.created_by === user.id;
    });
    if (filterStatus !== 'all') arr = arr.filter(function (r) {
      return r.status === filterStatus;
    });
    if (filterCategory !== 'all') arr = arr.filter(function (r) {
      return r.category === filterCategory;
    });
    // 🆕 fix15: 日期范围
    if (dateRange.start > 0 || dateRange.end < Infinity) {
      arr = arr.filter(function (r) {
        var t = r.created_at_ms || 0;
        return t >= dateRange.start && t < dateRange.end;
      });
    }
    if (search.trim()) {
      var kws = search.toLowerCase().split(/\s+/).filter(Boolean);
      arr = arr.filter(function (r) {
        var hay = [r.title, r.description, r.reproduce_steps, r.expected_behavior, r.actual_behavior, r.created_by_name, r.module, r.admin_response].filter(Boolean).join(' ').toLowerCase();
        return kws.every(function (kw) {
          return hay.includes(kw);
        });
      });
    }
    return arr;
  }, [reports, filterScope, filterStatus, filterCategory, dateRange, search, user.id]);

  // 统计
  var stats = useMemo(function () {
    var allMine = reports.filter(function (r) {
      return r.created_by === user.id;
    });
    return {
      total: reports.length,
      mine: allMine.length,
      "new": reports.filter(function (r) {
        return r.status === 'new';
      }).length,
      urgent: reports.filter(function (r) {
        return r.priority === 'urgent' && r.status !== 'done' && r.status !== 'rejected' && r.status !== 'duplicate';
      }).length,
      doing: reports.filter(function (r) {
        return r.status === 'in_progress' || r.status === 'planned' || r.status === 'reviewed';
      }).length,
      done: reports.filter(function (r) {
        return r.status === 'done';
      }).length,
      pendingForAi: reports.filter(function (r) {
        return r.status === 'new' || r.status === 'reviewed' || r.status === 'planned';
      }).length
    };
  }, [reports, user.id]);

  // 🆕 fix17: KPI 按提交人月度汇总 - 用于绩效计分
  // 计分规则: bug=3 / feature=2 / improvement=2 / question=1 分
  //          status=done 额外 +50% 加成 · rejected/duplicate × 0.3 折扣
  var kpiData = useMemo(function () {
    var SCORE = {
      bug: 3,
      feature: 2,
      improvement: 2,
      question: 1
    };
    var liveReports = reports.filter(function (r) {
      return !r.deleted;
    });
    // 应用 dateRange 筛选(KPI 也跟着月份选择走)
    var filtered = dateRange.start > 0 || dateRange.end < Infinity ? liveReports.filter(function (r) {
      var t = r.created_at_ms || 0;
      return t >= dateRange.start && t < dateRange.end;
    }) : liveReports;

    // 按 user × month 聚合
    var map = {};
    filtered.forEach(function (r) {
      var uid = r.created_by || 'unknown';
      var uname = r.created_by_name || '匿名';
      var urole = r.created_by_role || '';
      var d = new Date(r.created_at_ms || Date.now());
      var monthKey = "".concat(d.getFullYear(), "-").concat(String(d.getMonth() + 1).padStart(2, '0'));
      var k = "".concat(uid, "__").concat(monthKey);
      if (!map[k]) map[k] = {
        userId: uid,
        userName: uname,
        userRole: urole,
        month: monthKey,
        total: 0,
        byCat: {
          bug: 0,
          feature: 0,
          improvement: 0,
          question: 0
        },
        byStatus: {
          done: 0,
          in_progress: 0,
          planned: 0,
          reviewed: 0,
          "new": 0,
          rejected: 0,
          duplicate: 0
        },
        byPriority: {
          urgent: 0,
          high: 0,
          normal: 0,
          low: 0
        },
        score: 0
      };
      var row = map[k];
      row.total++;
      var cat = r.category || 'question';
      var status = r.status || 'new';
      var pri = r.priority || 'normal';
      row.byCat[cat] = (row.byCat[cat] || 0) + 1;
      row.byStatus[status] = (row.byStatus[status] || 0) + 1;
      row.byPriority[pri] = (row.byPriority[pri] || 0) + 1;
      // 计分
      var pts = SCORE[cat] || 1;
      if (status === 'done') pts *= 1.5;else if (status === 'rejected' || status === 'duplicate') pts *= 0.3;
      // 紧急/重要 +20% / +10%
      if (pri === 'urgent') pts *= 1.2;else if (pri === 'high') pts *= 1.1;
      row.score += pts;
    });
    // 转数组、按 month desc 分组、组内按 score desc
    var rows = Object.values(map).sort(function (a, b) {
      if (a.month !== b.month) return b.month.localeCompare(a.month);
      return b.score - a.score;
    });
    // 按月份分组
    var groupedByMonth = {};
    rows.forEach(function (r) {
      if (!groupedByMonth[r.month]) groupedByMonth[r.month] = [];
      groupedByMonth[r.month].push(r);
    });
    // 月份排序(降序)
    var months = Object.keys(groupedByMonth).sort(function (a, b) {
      return b.localeCompare(a);
    });
    return {
      rows: rows,
      groupedByMonth: groupedByMonth,
      months: months
    };
  }, [reports, dateRange]);
  var openReport = openId ? reports.find(function (r) {
    return r.id === openId;
  }) : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-5",
    style: {
      marginBottom: 12,
      background: 'linear-gradient(135deg, #fef2f2 0%, #fef3c7 60%, #fef9c3 100%)'
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
      color: '#7c2d12'
    }
  }, "\uD83D\uDC1B \u53CD\u9988\u4E2D\u5FC3 / \u9700\u6C42\u6C60"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#92400e',
      marginTop: 4
    }
  }, "\u53D1\u73B0 bug? \u60F3\u8981\u65B0\u529F\u80FD? \u5728\u8FD9\u91CC\u53CD\u9988 \u2192 \u4E3B\u7BA1\u786E\u8BA4 \u2192 AI \u4E0B\u7248\u672C\u81EA\u52A8\u4FEE\u590D \xB7 \u5F53\u524D\u7248\u672C ", /*#__PURE__*/React.createElement("strong", null, APP_VERSION))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, isAdmin && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setView(function (v) {
        return v === 'kpi' ? 'list' : 'kpi';
      });
    },
    style: {
      padding: '6px 14px',
      background: view === 'kpi' ? '#15803d' : '#0369a1',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit'
    },
    title: "\u6309\u63D0\u4EA4\u4EBA \xD7 \u6708\u4EFD\u6C47\u603B \xB7 \u7528\u4E8E\u7EE9\u6548\u8BA1\u5206"
  }, view === 'kpi' ? '📋 返回列表' : '📊 KPI 视图'), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowExport(true);
    },
    style: {
      padding: '6px 14px',
      background: '#d97706',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit'
    },
    title: "\u4E0B\u8F7D\u6240\u6709\u53CD\u9988 \xB7 PDF/Markdown/HTML/CSV \u56DB\u79CD\u683C\u5F0F \xB7 \u4E00\u6B21\u6027\u53D1\u7ED9 AI"
  }, "\uD83D\uDCE5 \u4E0B\u8F7D\u5BFC\u51FA (", reports.length, ")"), stats.pendingForAi > 0 && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowAiSummary(true);
    },
    style: {
      padding: '6px 14px',
      background: '#7c3aed',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit'
    },
    title: "\u751F\u6210 AI \u6458\u8981\u6587\u672C,\u590D\u5236\u7C98\u8D34\u5230 Claude \u5BF9\u8BDD"
  }, "\uD83E\uDD16 \u590D\u5236\u7ED9 AI (", stats.pendingForAi, ")")), /*#__PURE__*/React.createElement("button", {
    onClick: load,
    disabled: loading,
    className: "btn-sec",
    style: {
      padding: '6px 12px',
      fontSize: 12
    }
  }, loading ? '⏳' : '🔄', " \u5237\u65B0"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setShowSubmit(true);
    },
    style: {
      padding: '6px 16px',
      background: '#dc2626',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "+ \u63D0\u4EA4\u53CD\u9988")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3",
    style: {
      borderLeft: '4px solid #0369a1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83D\uDCE5 \u5168\u90E8"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: '#0369a1',
      marginTop: 2
    }
  }, stats.total)), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3",
    style: {
      borderLeft: '4px solid #86868b'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83D\uDC64 \u6211\u63D0\u4EA4\u7684"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: 'var(--ink)',
      marginTop: 2
    }
  }, stats.mine)), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3",
    style: {
      borderLeft: '4px solid ' + (stats["new"] > 0 ? '#dc2626' : '#86868b'),
      cursor: stats["new"] > 0 ? 'pointer' : 'default'
    },
    onClick: function onClick() {
      return stats["new"] > 0 && setFilterStatus('new');
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83C\uDD95 \u5F85\u4E3B\u7BA1\u67E5\u9605"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: stats["new"] > 0 ? '#dc2626' : 'var(--ink-3)',
      marginTop: 2
    }
  }, stats["new"])), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3",
    style: {
      borderLeft: '4px solid ' + (stats.urgent > 0 ? '#dc2626' : '#86868b'),
      animation: stats.urgent > 0 ? 'pulse 2s ease-in-out infinite' : 'none',
      background: stats.urgent > 0 ? 'linear-gradient(180deg, #fef2f2 0%, white 100%)' : 'white'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: stats.urgent > 0 ? '#b91c1c' : 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\uD83D\uDEA8 \u7D27\u6025\u672A\u4FEE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: stats.urgent > 0 ? '#b91c1c' : 'var(--ink-3)',
      marginTop: 2
    }
  }, stats.urgent)), /*#__PURE__*/React.createElement("div", {
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
  }, "\uD83D\uDD27 \u5904\u7406\u4E2D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: '#d97706',
      marginTop: 2
    }
  }, stats.doing)), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3",
    style: {
      borderLeft: '4px solid #15803d'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      fontWeight: 600
    }
  }, "\u2705 \u5DF2\u4FEE\u590D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 700,
      color: '#15803d',
      marginTop: 2
    }
  }, stats.done))), view === 'kpi' ? /*#__PURE__*/React.createElement("div", {
    className: "space-y-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)'
    }
  }, "\u23F1 \u7EDF\u8BA1\u65F6\u95F4:"), /*#__PURE__*/React.createElement(AdvancedDateFilter, {
    value: dateFilter,
    onChange: setDateFilter,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 11,
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDCA1 \u8BA1\u5206: bug=3 \xB7 \u529F\u80FD=2 \xB7 \u6539\u8FDB=2 \xB7 \u7591\u95EE=1 \u5206 \xB7 \u5DF2\u4FEE\u590D \xD71.5 \xB7 \u5DF2\u62D2\u7EDD/\u91CD\u590D \xD70.3 \xB7 \u7D27\u6025 \xD71.2"))), kpiData.rows.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl",
    style: {
      padding: '40px 14px',
      textAlign: 'center',
      color: 'var(--ink-4)',
      fontSize: 13
    }
  }, "\u5F53\u524D\u7B5B\u9009\u4E0B\u6CA1\u6709 KPI \u6570\u636E") : kpiData.months.map(function (month) {
    var monthRows = kpiData.groupedByMonth[month];
    var monthTotal = monthRows.reduce(function (s, r) {
      return s + r.total;
    }, 0);
    var monthScore = monthRows.reduce(function (s, r) {
      return s + r.score;
    }, 0);
    return /*#__PURE__*/React.createElement("div", {
      key: month,
      className: "paper rounded-2xl p-4"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        flexWrap: 'wrap',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-display",
      style: {
        fontSize: 16,
        fontWeight: 600,
        color: '#0369a1'
      }
    }, "\uD83D\uDCC5 ", month.replace('-', ' 年 '), " \u6708"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)'
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--ink)'
      }
    }, monthRows.length), " \u4EBA\u53C2\u4E0E \xB7 \u5171 ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--ink)'
      }
    }, monthTotal), " \u6761 \xB7 \u603B\u5206 ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: '#15803d'
      }
    }, monthScore.toFixed(1)))), /*#__PURE__*/React.createElement("div", {
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
        whiteSpace: 'nowrap'
      }
    }, "\u6392\u540D"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: '8px 10px',
        textAlign: 'left',
        fontWeight: 600,
        borderBottom: '1px solid var(--line)',
        whiteSpace: 'nowrap'
      }
    }, "\u63D0\u4EA4\u4EBA"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: '8px 10px',
        textAlign: 'center',
        fontWeight: 600,
        borderBottom: '1px solid var(--line)',
        whiteSpace: 'nowrap'
      }
    }, "\u603B\u6761\u6570"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: '8px 10px',
        textAlign: 'center',
        fontWeight: 600,
        borderBottom: '1px solid var(--line)',
        whiteSpace: 'nowrap',
        color: '#dc2626'
      }
    }, "\uD83D\uDC1B Bug"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: '8px 10px',
        textAlign: 'center',
        fontWeight: 600,
        borderBottom: '1px solid var(--line)',
        whiteSpace: 'nowrap',
        color: '#7c3aed'
      }
    }, "\u2728 \u529F\u80FD"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: '8px 10px',
        textAlign: 'center',
        fontWeight: 600,
        borderBottom: '1px solid var(--line)',
        whiteSpace: 'nowrap',
        color: '#0369a1'
      }
    }, "\uD83D\uDCA1 \u6539\u8FDB"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: '8px 10px',
        textAlign: 'center',
        fontWeight: 600,
        borderBottom: '1px solid var(--line)',
        whiteSpace: 'nowrap'
      }
    }, "\u2753 \u7591\u95EE"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: '8px 10px',
        textAlign: 'center',
        fontWeight: 600,
        borderBottom: '1px solid var(--line)',
        whiteSpace: 'nowrap',
        color: '#dc2626'
      }
    }, "\uD83D\uDEA8 \u7D27\u6025"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: '8px 10px',
        textAlign: 'center',
        fontWeight: 600,
        borderBottom: '1px solid var(--line)',
        whiteSpace: 'nowrap',
        color: '#15803d'
      }
    }, "\u2705 \u5DF2\u4FEE\u590D"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: '8px 10px',
        textAlign: 'center',
        fontWeight: 600,
        borderBottom: '1px solid var(--line)',
        whiteSpace: 'nowrap',
        color: '#d97706'
      }
    }, "\uD83D\uDD27 \u5904\u7406\u4E2D"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: '8px 10px',
        textAlign: 'center',
        fontWeight: 600,
        borderBottom: '1px solid var(--line)',
        whiteSpace: 'nowrap',
        color: 'var(--ink-3)'
      }
    }, "\u274C \u62D2\u7EDD"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: '8px 10px',
        textAlign: 'center',
        fontWeight: 700,
        borderBottom: '1px solid var(--line)',
        whiteSpace: 'nowrap',
        color: '#15803d',
        background: '#f0fdf4'
      }
    }, "\uD83C\uDFC6 \u7EE9\u6548\u5206"))), /*#__PURE__*/React.createElement("tbody", null, monthRows.map(function (r, idx) {
      return /*#__PURE__*/React.createElement("tr", {
        key: r.userId,
        style: {
          background: idx % 2 ? 'white' : '#fafafa',
          transition: 'background .15s'
        },
        onMouseEnter: function onMouseEnter(e) {
          return e.currentTarget.style.background = '#eff6ff';
        },
        onMouseLeave: function onMouseLeave(e) {
          return e.currentTarget.style.background = idx % 2 ? 'white' : '#fafafa';
        }
      }, /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '8px 10px',
          borderBottom: '1px solid var(--line)'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 22,
          height: 22,
          background: idx < 3 ? '#15803d' : 'var(--ink-3)',
          color: 'white',
          borderRadius: '50%',
          fontSize: 10,
          fontWeight: 700,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      }, idx + 1)), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '8px 10px',
          borderBottom: '1px solid var(--line)'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 600
        }
      }, r.userName), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 10,
          color: 'var(--ink-3)'
        }
      }, r.userRole === 'admin' || r.userRole === 'super_admin' ? '主管' : r.userRole === 'finance' ? '财务' : '客服')), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '8px 10px',
          textAlign: 'center',
          borderBottom: '1px solid var(--line)',
          fontWeight: 600
        }
      }, r.total), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '8px 10px',
          textAlign: 'center',
          borderBottom: '1px solid var(--line)',
          color: r.byCat.bug > 0 ? '#dc2626' : 'var(--ink-4)'
        }
      }, r.byCat.bug || '-'), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '8px 10px',
          textAlign: 'center',
          borderBottom: '1px solid var(--line)',
          color: r.byCat.feature > 0 ? '#7c3aed' : 'var(--ink-4)'
        }
      }, r.byCat.feature || '-'), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '8px 10px',
          textAlign: 'center',
          borderBottom: '1px solid var(--line)',
          color: r.byCat.improvement > 0 ? '#0369a1' : 'var(--ink-4)'
        }
      }, r.byCat.improvement || '-'), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '8px 10px',
          textAlign: 'center',
          borderBottom: '1px solid var(--line)',
          color: r.byCat.question > 0 ? 'var(--ink-2)' : 'var(--ink-4)'
        }
      }, r.byCat.question || '-'), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '8px 10px',
          textAlign: 'center',
          borderBottom: '1px solid var(--line)',
          color: r.byPriority.urgent > 0 ? '#dc2626' : 'var(--ink-4)',
          fontWeight: r.byPriority.urgent > 0 ? 700 : 400
        }
      }, r.byPriority.urgent || '-'), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '8px 10px',
          textAlign: 'center',
          borderBottom: '1px solid var(--line)',
          color: r.byStatus.done > 0 ? '#15803d' : 'var(--ink-4)',
          fontWeight: r.byStatus.done > 0 ? 600 : 400
        }
      }, r.byStatus.done || '-'), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '8px 10px',
          textAlign: 'center',
          borderBottom: '1px solid var(--line)',
          color: 'var(--ink-3)'
        }
      }, (r.byStatus.in_progress || 0) + (r.byStatus.planned || 0) + (r.byStatus.reviewed || 0) || '-'), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '8px 10px',
          textAlign: 'center',
          borderBottom: '1px solid var(--line)',
          color: r.byStatus.rejected + r.byStatus.duplicate > 0 ? 'var(--ink-3)' : 'var(--ink-4)'
        }
      }, r.byStatus.rejected + r.byStatus.duplicate || '-'), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: '8px 10px',
          textAlign: 'center',
          borderBottom: '1px solid var(--line)',
          background: '#f0fdf4',
          fontWeight: 700,
          color: '#15803d',
          fontSize: 14
        }
      }, r.score.toFixed(1)));
    })))));
  }), /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-3",
    style: {
      background: '#eff6ff',
      border: '1px solid #bfdbfe'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#1e40af',
      lineHeight: 1.6
    }
  }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("strong", null, "\u7EE9\u6548\u5206\u8BA1\u7B97\u8BF4\u660E"), /*#__PURE__*/React.createElement("br", null), "\u2022 \u57FA\u7840\u5206: \u63D0 1 \u4E2A Bug = 3 \u5206 \xB7 1 \u4E2A\u65B0\u529F\u80FD = 2 \u5206 \xB7 1 \u4E2A\u6539\u8FDB = 2 \u5206 \xB7 1 \u4E2A\u7591\u95EE = 1 \u5206", /*#__PURE__*/React.createElement("br", null), "\u2022 \u72B6\u6001\u52A0\u6210: \u72B6\u6001\u53D8\u6210\"\u2705 \u5DF2\u4FEE\u590D\"\u65F6,\u8BE5\u6761\u5F97\u5206 \xD71.5(\u9F13\u52B1\u8D28\u91CF) \xB7 \"\u274C \u62D2\u7EDD/\u91CD\u590D\"\u65F6 \xD70.3(\u6263\u5206\u4F46\u4E0D\u5F52\u96F6)", /*#__PURE__*/React.createElement("br", null), "\u2022 \u4F18\u5148\u7EA7\u52A0\u6210: \uD83D\uDEA8 \u7D27\u6025 \xD71.2 \xB7 \u26A1 \u91CD\u8981 \xD71.1 \xB7 \u5176\u4ED6 \xD71.0(\u9F13\u52B1\u5173\u6CE8\u771F\u6B63\u5F71\u54CD\u5DE5\u4F5C\u7684\u95EE\u9898)"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl p-4",
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 8,
      flexWrap: 'wrap'
    }
  }, [{
    key: 'all',
    label: '全部',
    count: reports.length
  }, {
    key: 'mine',
    label: '我提交的',
    count: stats.mine
  }].map(function (t) {
    var sel = filterScope === t.key;
    return /*#__PURE__*/React.createElement("button", {
      key: t.key,
      onClick: function onClick() {
        return setFilterScope(t.key);
      },
      style: {
        padding: '6px 12px',
        borderRadius: 7,
        border: '1px solid ' + (sel ? '#0369a1' : 'var(--line)'),
        background: sel ? '#0369a1' : 'white',
        color: sel ? 'white' : 'var(--ink-2)',
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: sel ? 600 : 500,
        fontFamily: 'inherit'
      }
    }, t.label, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        padding: '1px 6px',
        background: sel ? 'rgba(255,255,255,.25)' : '#f5f5f7',
        borderRadius: 8,
        marginLeft: 2,
        fontSize: 10
      }
    }, t.count));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: 8
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
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: filterStatus,
    onChange: function onChange(e) {
      return setFilterStatus(e.target.value);
    },
    style: {
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u6240\u6709\u72B6\u6001"), BUG_STATUSES.map(function (s) {
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
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u6240\u6709\u7C7B\u522B"), BUG_CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.id,
      value: c.id
    }, c.label);
  })), /*#__PURE__*/React.createElement("input", {
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "\uD83D\uDD0D \u641C\u7D22\u6807\u9898/\u63CF\u8FF0/\u62A5\u544A\u4EBA...",
    style: {
      flex: 1,
      minWidth: 180,
      padding: '5px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      fontFamily: 'inherit'
    }
  }))), loading ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '40px 14px',
      textAlign: 'center',
      color: 'var(--ink-4)'
    }
  }, "\u52A0\u8F7D\u4E2D...") : filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "paper rounded-2xl",
    style: {
      padding: '40px 14px',
      textAlign: 'center',
      color: 'var(--ink-4)',
      fontSize: 13
    }
  }, reports.length === 0 ? '还没有人提交反馈 · 点右上"+ 提交反馈"开始' : '当前筛选下没有反馈') : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, filtered.map(function (r) {
    return /*#__PURE__*/React.createElement(BugReportCard, {
      key: r.id,
      report: r,
      user: user,
      onOpen: function onOpen() {
        return setOpenId(r.id);
      }
    });
  }))), showSubmit && /*#__PURE__*/React.createElement(BugReportSubmitModal, {
    user: user,
    onClose: function onClose() {
      return setShowSubmit(false);
    },
    onSubmitted: function onSubmitted() {
      setShowSubmit(false);
      load();
      toast('✓ 反馈已提交 · 主管会尽快查阅');
    },
    toast: toast
  }), openReport && /*#__PURE__*/React.createElement(BugReportDetailModal, {
    report: openReport,
    user: user,
    employees: employees,
    onClose: function onClose() {
      return setOpenId(null);
    },
    onChanged: load,
    toast: toast
  }), showAiSummary && /*#__PURE__*/React.createElement(BugAiSummaryModal, {
    reports: reports,
    onClose: function onClose() {
      return setShowAiSummary(false);
    },
    toast: toast
  }), showExport && /*#__PURE__*/React.createElement(BugExportModal, {
    reports: reports,
    employees: employees,
    onClose: function onClose() {
      return setShowExport(false);
    },
    toast: toast
  }));
};

// 反馈卡片
var BugReportCard = function BugReportCard(_ref13) {
  var report = _ref13.report,
    user = _ref13.user,
    onOpen = _ref13.onOpen;
  var cat = findBug(BUG_CATEGORIES, report.category);
  var pri = findBug(BUG_PRIORITIES, report.priority);
  var st = findBug(BUG_STATUSES, report.status);
  var mod = BUG_MODULES.find(function (m) {
    return m.id === report.module;
  }) || BUG_MODULES.find(function (m) {
    return m.id === 'other';
  });
  var isMine = report.created_by === user.id;
  var isUrgent = report.priority === 'urgent' && report.status !== 'done' && report.status !== 'rejected';
  var shotsCount = (report.screenshots || []).length;
  var ageDays = Math.floor((Date.now() - (report.created_at_ms || 0)) / 86400000);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onOpen,
    style: {
      padding: '12px 14px',
      background: 'white',
      border: '1px solid ' + (isUrgent ? '#fca5a5' : 'var(--line)'),
      borderRadius: 10,
      cursor: 'pointer',
      transition: 'transform .12s, box-shadow .12s'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.transform = 'translateY(-1px)';
      e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,.06)';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: cat.bg,
      color: cat.color,
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 600
    }
  }, cat.label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: pri.bg,
      color: pri.color,
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 600,
      animation: isUrgent ? 'pulse 2.4s ease-in-out infinite' : 'none'
    }
  }, pri.label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: st.bg,
      color: st.color,
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 600
    }
  }, st.label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#f5f5f7',
      color: 'var(--ink-3)',
      borderRadius: 6,
      fontSize: 10
    }
  }, mod.label), isMine && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#eff6ff',
      color: '#1e40af',
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 600
    }
  }, "\uD83D\uDC64 \u6211\u63D0\u4EA4\u7684"), report.version_fixed && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#dcfce7',
      color: '#15803d',
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 600,
      fontFamily: 'ui-monospace'
    }
  }, "\u4FEE\u590D\u4E8E ", report.version_fixed), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 10,
      color: 'var(--ink-4)'
    }
  }, ageDays === 0 ? '今天' : "".concat(ageDays, " \u5929\u524D"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--ink)',
      marginBottom: 3
    }
  }, report.title), report.description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-2)',
      lineHeight: 1.5,
      marginBottom: 5,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical'
    }
  }, report.description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 10,
      color: 'var(--ink-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCDD ", report.created_by_name || '匿名'), shotsCount > 0 && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCF7 ", shotsCount, " \u5F20\u622A\u56FE"), report.app_version && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'ui-monospace'
    }
  }, "\uD83D\uDCE6 ", report.app_version), report.admin_response && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#7c3aed',
      fontWeight: 600
    }
  }, "\uD83D\uDCAC \u4E3B\u7BA1\u5DF2\u56DE\u590D"), (report.thread || []).length > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#0369a1'
    }
  }, "\uD83D\uDCAC ", (report.thread || []).length, " \u6761\u5BF9\u8BDD")));
};

// 提交反馈表单
var BugReportSubmitModal = function BugReportSubmitModal(_ref14) {
  var user = _ref14.user,
    onClose = _ref14.onClose,
    onSubmitted = _ref14.onSubmitted,
    toast = _ref14.toast;
  var _useState65 = useState('bug'),
    _useState66 = _slicedToArray(_useState65, 2),
    category = _useState66[0],
    setCategory = _useState66[1];
  var _useState67 = useState('normal'),
    _useState68 = _slicedToArray(_useState67, 2),
    priority = _useState68[0],
    setPriority = _useState68[1];
  var _useState69 = useState('cs'),
    _useState70 = _slicedToArray(_useState69, 2),
    module = _useState70[0],
    setModule = _useState70[1];
  var _useState71 = useState(''),
    _useState72 = _slicedToArray(_useState71, 2),
    title = _useState72[0],
    setTitle = _useState72[1];
  var _useState73 = useState(''),
    _useState74 = _slicedToArray(_useState73, 2),
    description = _useState74[0],
    setDescription = _useState74[1];
  var _useState75 = useState(''),
    _useState76 = _slicedToArray(_useState75, 2),
    reproduceSteps = _useState76[0],
    setReproduceSteps = _useState76[1];
  var _useState77 = useState(''),
    _useState78 = _slicedToArray(_useState77, 2),
    expectedBehavior = _useState78[0],
    setExpectedBehavior = _useState78[1];
  var _useState79 = useState(''),
    _useState80 = _slicedToArray(_useState79, 2),
    actualBehavior = _useState80[0],
    setActualBehavior = _useState80[1];
  var _useState81 = useState([]),
    _useState82 = _slicedToArray(_useState81, 2),
    screenshots = _useState82[0],
    setScreenshots = _useState82[1];
  var _useState83 = useState(false),
    _useState84 = _slicedToArray(_useState83, 2),
    sending = _useState84[0],
    setSending = _useState84[1];
  var fileInputRef = useRef(null);

  // 自动收集浏览器信息
  var browserInfo = useMemo(function () {
    var ua = navigator.userAgent || '';
    var browser = 'Unknown';
    if (/Chrome\/(\d+)/.test(ua)) browser = 'Chrome ' + RegExp.$1;else if (/Firefox\/(\d+)/.test(ua)) browser = 'Firefox ' + RegExp.$1;else if (/Safari\/(\d+)/.test(ua) && !/Chrome/.test(ua)) browser = 'Safari ' + (ua.match(/Version\/(\d+)/) ? RegExp.$1 : '');else if (/Edg\/(\d+)/.test(ua)) browser = 'Edge ' + RegExp.$1;
    var os = 'Unknown';
    if (/Windows NT 10/.test(ua)) os = 'Windows 10/11';else if (/Windows/.test(ua)) os = 'Windows';else if (/Mac OS X (\d+[._]\d+)/.test(ua)) os = 'macOS ' + RegExp.$1.replace('_', '.');else if (/Android (\d+)/.test(ua)) os = 'Android ' + RegExp.$1;else if (/iPhone OS (\d+)/.test(ua)) os = 'iOS ' + RegExp.$1;else if (/Linux/.test(ua)) os = 'Linux';
    return "".concat(browser, " \xB7 ").concat(os, " \xB7 ").concat(window.innerWidth, "\xD7").concat(window.innerHeight);
  }, []);
  var readFiles = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(files) {
      var arr, _iterator, _step, _loop, _t4;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.p = _context0.n) {
          case 0:
            if (!(screenshots.length + files.length > 8)) {
              _context0.n = 1;
              break;
            }
            alert('最多 8 张截图,请删除一些');
            return _context0.a(2);
          case 1:
            arr = [];
            _iterator = _createForOfIteratorHelper(files);
            _context0.p = 2;
            _loop = /*#__PURE__*/_regenerator().m(function _loop() {
              var f, dataUrl;
              return _regenerator().w(function (_context9) {
                while (1) switch (_context9.n) {
                  case 0:
                    f = _step.value;
                    if (!(f.size > 3 * 1024 * 1024)) {
                      _context9.n = 1;
                      break;
                    }
                    alert("\u622A\u56FE \"".concat(f.name, "\" \u8D85\u8FC7 3MB,\u8BF7\u538B\u7F29"));
                    return _context9.a(2, 1);
                  case 1:
                    _context9.n = 2;
                    return new Promise(function (res, rej) {
                      var r = new FileReader();
                      r.onload = function () {
                        return res(r.result);
                      };
                      r.onerror = rej;
                      r.readAsDataURL(f);
                    });
                  case 2:
                    dataUrl = _context9.v;
                    arr.push({
                      name: f.name || 'screenshot.png',
                      mime: f.type,
                      dataUrl: dataUrl,
                      size: f.size
                    });
                  case 3:
                    return _context9.a(2);
                }
              }, _loop);
            });
            _iterator.s();
          case 3:
            if ((_step = _iterator.n()).done) {
              _context0.n = 6;
              break;
            }
            return _context0.d(_regeneratorValues(_loop()), 4);
          case 4:
            if (!_context0.v) {
              _context0.n = 5;
              break;
            }
            return _context0.a(3, 5);
          case 5:
            _context0.n = 3;
            break;
          case 6:
            _context0.n = 8;
            break;
          case 7:
            _context0.p = 7;
            _t4 = _context0.v;
            _iterator.e(_t4);
          case 8:
            _context0.p = 8;
            _iterator.f();
            return _context0.f(8);
          case 9:
            if (arr.length) setScreenshots(function (prev) {
              return [].concat(_toConsumableArray(prev), arr);
            });
          case 10:
            return _context0.a(2);
        }
      }, _callee9, null, [[2, 7, 8, 9]]);
    }));
    return function readFiles(_x4) {
      return _ref15.apply(this, arguments);
    };
  }();

  // 全局粘贴(打开模态期间任何位置 Ctrl+V 都可)
  useEffect(function () {
    var onPaste = /*#__PURE__*/function () {
      var _ref16 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(e) {
        var _e$clipboardData;
        var items, files, _iterator2, _step2, it, f;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.n) {
            case 0:
              items = ((_e$clipboardData = e.clipboardData) === null || _e$clipboardData === void 0 ? void 0 : _e$clipboardData.items) || [];
              files = [];
              _iterator2 = _createForOfIteratorHelper(items);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  it = _step2.value;
                  if (it.kind === 'file') {
                    f = it.getAsFile();
                    if (f) files.push(f);
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              if (!files.length) {
                _context1.n = 1;
                break;
              }
              _context1.n = 1;
              return readFiles(files);
            case 1:
              return _context1.a(2);
          }
        }, _callee0);
      }));
      return function onPaste(_x5) {
        return _ref16.apply(this, arguments);
      };
    }();
    window.addEventListener('paste', onPaste);
    return function () {
      return window.removeEventListener('paste', onPaste);
    };
  }, [screenshots.length]);
  var submit = /*#__PURE__*/function () {
    var _ref17 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
      var userName, id, record, ok, _t5;
      return _regenerator().w(function (_context10) {
        while (1) switch (_context10.p = _context10.n) {
          case 0:
            if (title.trim()) {
              _context10.n = 1;
              break;
            }
            alert('请填写"标题"');
            return _context10.a(2);
          case 1:
            if (!(!description.trim() && !reproduceSteps.trim())) {
              _context10.n = 2;
              break;
            }
            alert('请至少填写"描述"或"复现步骤"其中一项');
            return _context10.a(2);
          case 2:
            setSending(true);
            _context10.p = 3;
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            id = crypto.randomUUID ? crypto.randomUUID() : 'bug_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
            record = {
              id: id,
              title: title.trim(),
              description: description.trim() || null,
              category: category,
              priority: priority,
              status: 'new',
              module: module,
              reproduce_steps: reproduceSteps.trim() || null,
              expected_behavior: expectedBehavior.trim() || null,
              actual_behavior: actualBehavior.trim() || null,
              screenshots: screenshots,
              app_version: APP_VERSION,
              browser_info: browserInfo,
              created_by: user.id,
              created_by_name: userName,
              created_by_role: user.role,
              created_at_ms: Date.now(),
              updated_at: new Date().toISOString(),
              thread: []
            };
            _context10.n = 4;
            return CLOUD.upsert('bug_reports', record);
          case 4:
            ok = _context10.v;
            if (ok) {
              _context10.n = 5;
              break;
            }
            throw new Error('保存失败');
          case 5:
            onSubmitted();
            _context10.n = 7;
            break;
          case 6:
            _context10.p = 6;
            _t5 = _context10.v;
            alert('提交失败: ' + (_t5.message || _t5));
          case 7:
            setSending(false);
          case 8:
            return _context10.a(2);
        }
      }, _callee1, null, [[3, 6]]);
    }));
    return function submit() {
      return _ref17.apply(this, arguments);
    };
  }();
  var onDrop = function onDrop(e) {
    e.preventDefault();
    var files = Array.from(e.dataTransfer.files || []);
    if (files.length) readFiles(files);
  };
  var onDragOver = function onDragOver(e) {
    return e.preventDefault();
  };
  var isBug = category === 'bug';
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
      padding: '20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: 'white',
      borderRadius: 14,
      width: '100%',
      maxWidth: 680,
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
  }, "\uD83D\uDC1B \u63D0\u4EA4\u53CD\u9988"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, "\u652F\u6301 Ctrl+V \u7C98\u8D34\u622A\u56FE \xB7 \u81EA\u52A8\u8BB0\u5F55\u7248\u672C+\u6D4F\u89C8\u5668")), /*#__PURE__*/React.createElement("button", {
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
      overflowY: 'auto',
      flex: 1,
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
      marginBottom: 5
    }
  }, "\u7C7B\u522B *"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 6
    }
  }, BUG_CATEGORIES.map(function (c) {
    var sel = category === c.id;
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      type: "button",
      onClick: function onClick() {
        return setCategory(c.id);
      },
      style: {
        padding: '8px 10px',
        background: sel ? c.bg : 'white',
        border: '1px solid ' + (sel ? c.color : 'var(--line)'),
        borderRadius: 7,
        cursor: 'pointer',
        fontFamily: 'inherit',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: sel ? c.color : 'var(--ink)'
      }
    }, c.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: sel ? c.color : 'var(--ink-3)',
        marginTop: 1
      }
    }, c.desc));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u6807\u9898 * ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400
    }
  }, "\xB7 \u4E00\u53E5\u8BDD\u6982\u62EC")), /*#__PURE__*/React.createElement("input", {
    value: title,
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    placeholder: isBug ? '如: 保存客户后列表不刷新' : '如: 希望在评价模块加批量删除',
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      fontFamily: 'inherit'
    }
  })), /*#__PURE__*/React.createElement("div", {
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
  }, "\u54EA\u4E2A\u6A21\u5757 *"), /*#__PURE__*/React.createElement("select", {
    value: module,
    onChange: function onChange(e) {
      return setModule(e.target.value);
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
  }, BUG_MODULES.map(function (m) {
    return /*#__PURE__*/React.createElement("option", {
      key: m.id,
      value: m.id
    }, m.label);
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
  }, BUG_PRIORITIES.map(function (p) {
    return /*#__PURE__*/React.createElement("option", {
      key: p.id,
      value: p.id
    }, p.label, " \xB7 ", p.desc);
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, isBug ? '描述问题' : '描述需求', " *"), /*#__PURE__*/React.createElement("textarea", {
    value: description,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    },
    rows: 3,
    placeholder: isBug ? '简单描述发生了什么 · 任何细节都有用' : '详细描述你希望系统怎么改',
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 13,
      fontFamily: 'inherit',
      resize: 'vertical'
    }
  })), isBug && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u590D\u73B0\u6B65\u9AA4 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400
    }
  }, "\xB7 \u5F3A\u70C8\u5EFA\u8BAE\u586B\u5199,5 \u5206\u949F\u4FEE\u597D vs 5 \u8F6E\u6765\u56DE")), /*#__PURE__*/React.createElement("textarea", {
    value: reproduceSteps,
    onChange: function onChange(e) {
      return setReproduceSteps(e.target.value);
    },
    rows: 3,
    placeholder: "1. \u8FDB\u3010\u5BA2\u670D\u8DDF\u8FDB\u3011tab\n2. \u70B9\u3010+ \u65B0\u589E\u5BA2\u6237\u3011\n3. \u586B\u597D\u5BA2\u6237\u540D / \u90AE\u7BB1\u4FDD\u5B58\n4. ...",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      fontFamily: 'ui-monospace, monospace',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", {
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
  }, "\u671F\u671B\u7ED3\u679C"), /*#__PURE__*/React.createElement("textarea", {
    value: expectedBehavior,
    onChange: function onChange(e) {
      return setExpectedBehavior(e.target.value);
    },
    rows: 2,
    placeholder: "\u5E94\u8BE5\u53D1\u751F\u4EC0\u4E48",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      fontFamily: 'inherit',
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u5B9E\u9645\u7ED3\u679C"), /*#__PURE__*/React.createElement("textarea", {
    value: actualBehavior,
    onChange: function onChange(e) {
      return setActualBehavior(e.target.value);
    },
    rows: 2,
    placeholder: "\u5B9E\u9645\u53D1\u751F\u4E86\u4EC0\u4E48",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      fontFamily: 'inherit',
      resize: 'vertical'
    }
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      display: 'block',
      marginBottom: 4
    }
  }, "\uD83D\uDCF7 \u622A\u56FE (", screenshots.length, "/8) ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-4)',
      fontWeight: 400
    }
  }, "\xB7 Ctrl+V \u7C98\u8D34 / \u62D6\u62FD / \u70B9\u51FB\u4E0A\u4F20")), /*#__PURE__*/React.createElement("div", {
    onDrop: onDrop,
    onDragOver: onDragOver,
    onClick: function onClick() {
      var _fileInputRef$current;
      return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
    },
    style: {
      padding: '14px',
      border: '2px dashed var(--line)',
      borderRadius: 8,
      background: '#fafafa',
      cursor: 'pointer',
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, "\uD83D\uDCCB \u70B9\u8FD9\u91CC\u4E0A\u4F20 / \u62D6\u62FD\u622A\u56FE\u5230\u6B64 / \u4EFB\u610F\u4F4D\u7F6E Ctrl+V \u7C98\u8D34"), /*#__PURE__*/React.createElement("input", {
    ref: fileInputRef,
    type: "file",
    multiple: true,
    accept: "image/*",
    style: {
      display: 'none'
    },
    onChange: function onChange(e) {
      readFiles(Array.from(e.target.files || []));
      e.target.value = '';
    }
  }), screenshots.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
      gap: 6,
      marginTop: 8
    }
  }, screenshots.map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'relative',
        border: '1px solid var(--line)',
        borderRadius: 6,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: s.dataUrl,
      alt: s.name,
      style: {
        width: '100%',
        height: 80,
        objectFit: 'contain',
        display: 'block',
        background: 'var(--bg-elevated)'
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setScreenshots(function (prev) {
          return prev.filter(function (_, j) {
            return j !== i;
          });
        });
      },
      style: {
        position: 'absolute',
        top: 3,
        right: 3,
        width: 20,
        height: 20,
        borderRadius: 10,
        background: 'rgba(0,0,0,.6)',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: 11,
        lineHeight: '18px',
        padding: 0
      }
    }, "\xD7"), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '2px 4px',
        fontSize: 9,
        color: 'var(--ink-3)',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        background: 'white'
      },
      title: s.name
    }, s.name));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px',
      background: '#f0f9ff',
      border: '1px solid #bae6fd',
      borderRadius: 7,
      fontSize: 10,
      color: '#1e40af',
      lineHeight: 1.6
    }
  }, "\uD83D\uDD0D ", /*#__PURE__*/React.createElement("strong", null, "\u81EA\u52A8\u8BB0\u5F55"), "(\u65E0\u9700\u624B\u586B):", /*#__PURE__*/React.createElement("br", null), "\u7248\u672C ", /*#__PURE__*/React.createElement("code", {
    style: {
      padding: '1px 4px',
      background: 'white',
      borderRadius: 3
    }
  }, APP_VERSION), " \xB7 \u6D4F\u89C8\u5668 ", /*#__PURE__*/React.createElement("code", {
    style: {
      padding: '1px 4px',
      background: 'white',
      borderRadius: 3
    }
  }, browserInfo))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 20px',
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)'
    }
  }, "\u63D0\u4EA4\u540E\u4E3B\u7BA1\u4F1A\u770B\u5230\u5E76\u5C3D\u5FEB\u5904\u7406 \xB7 \u4F60\u53EF\u4EE5\u5728\u5217\u8868\u91CC\u8DDF\u8FDB\u8FDB\u5EA6"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
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
    onClick: submit,
    disabled: sending,
    style: {
      padding: '7px 18px',
      background: '#dc2626',
      color: 'white',
      border: 'none',
      borderRadius: 7,
      cursor: sending ? 'wait' : 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, sending ? '提交中...' : '✓ 提交反馈'))))), document.body);
};

// 详情 modal — 主管能改状态/回复, 普通用户只能看
var BugReportDetailModal = function BugReportDetailModal(_ref18) {
  var report = _ref18.report,
    user = _ref18.user,
    employees = _ref18.employees,
    onClose = _ref18.onClose,
    onChanged = _ref18.onChanged,
    toast = _ref18.toast;
  var _useState85 = useState(''),
    _useState86 = _slicedToArray(_useState85, 2),
    replyText = _useState86[0],
    setReplyText = _useState86[1];
  var _useState87 = useState(report.admin_response || ''),
    _useState88 = _slicedToArray(_useState87, 2),
    adminResponse = _useState88[0],
    setAdminResponse = _useState88[1];
  var _useState89 = useState(report.version_fixed || ''),
    _useState90 = _slicedToArray(_useState89, 2),
    versionFixed = _useState90[0],
    setVersionFixed = _useState90[1];
  var _useState91 = useState(null),
    _useState92 = _slicedToArray(_useState91, 2),
    imgPreview = _useState92[0],
    setImgPreview = _useState92[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var isOwner = report.created_by === user.id;
  var cat = findBug(BUG_CATEGORIES, report.category);
  var pri = findBug(BUG_PRIORITIES, report.priority);
  var st = findBug(BUG_STATUSES, report.status);
  var mod = BUG_MODULES.find(function (m) {
    return m.id === report.module;
  }) || BUG_MODULES.find(function (m) {
    return m.id === 'other';
  });
  var setStatus = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(newStatus) {
      var userName, updates, ok, _t6;
      return _regenerator().w(function (_context11) {
        while (1) switch (_context11.p = _context11.n) {
          case 0:
            if (isAdmin) {
              _context11.n = 1;
              break;
            }
            return _context11.a(2);
          case 1:
            _context11.p = 1;
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            updates = _objectSpread(_objectSpread({}, report), {}, {
              status: newStatus,
              updated_at: new Date().toISOString()
            });
            if (newStatus === 'reviewed' && !report.assigned_to_id) {
              updates.assigned_to_id = user.id;
              updates.assigned_to_name = userName;
            }
            if (newStatus === 'done' && !versionFixed.trim()) {
              // 自动填当前版本
              updates.version_fixed = APP_VERSION;
              setVersionFixed(APP_VERSION);
            }
            _context11.n = 2;
            return CLOUD.upsert('bug_reports', updates);
          case 2:
            ok = _context11.v;
            if (ok) {
              toast("\u2713 \u72B6\u6001\u6539\u4E3A ".concat(findBug(BUG_STATUSES, newStatus).label));
              onChanged && onChanged();
            }
            _context11.n = 4;
            break;
          case 3:
            _context11.p = 3;
            _t6 = _context11.v;
            alert('更新失败: ' + (_t6.message || _t6));
          case 4:
            return _context11.a(2);
        }
      }, _callee10, null, [[1, 3]]);
    }));
    return function setStatus(_x6) {
      return _ref19.apply(this, arguments);
    };
  }();
  var saveAdminResponse = /*#__PURE__*/function () {
    var _ref20 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
      var ok, _t7;
      return _regenerator().w(function (_context12) {
        while (1) switch (_context12.p = _context12.n) {
          case 0:
            if (isAdmin) {
              _context12.n = 1;
              break;
            }
            return _context12.a(2);
          case 1:
            _context12.p = 1;
            _context12.n = 2;
            return CLOUD.upsert('bug_reports', _objectSpread(_objectSpread({}, report), {}, {
              admin_response: adminResponse.trim() || null,
              version_fixed: versionFixed.trim() || null,
              updated_at: new Date().toISOString()
            }));
          case 2:
            ok = _context12.v;
            if (ok) {
              toast('✓ 已保存主管回复');
              onChanged && onChanged();
            }
            _context12.n = 4;
            break;
          case 3:
            _context12.p = 3;
            _t7 = _context12.v;
            alert('保存失败: ' + (_t7.message || _t7));
          case 4:
            return _context12.a(2);
        }
      }, _callee11, null, [[1, 3]]);
    }));
    return function saveAdminResponse() {
      return _ref20.apply(this, arguments);
    };
  }();
  var addReply = /*#__PURE__*/function () {
    var _ref21 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
      var userName, newThread, ok, _t8;
      return _regenerator().w(function (_context13) {
        while (1) switch (_context13.p = _context13.n) {
          case 0:
            if (replyText.trim()) {
              _context13.n = 1;
              break;
            }
            return _context13.a(2);
          case 1:
            _context13.p = 1;
            userName = user.name + (user.alias ? ' ' + user.alias : '');
            newThread = [].concat(_toConsumableArray(report.thread || []), [{
              user_id: user.id,
              user_name: userName,
              role: user.role,
              content: replyText.trim(),
              ts: Date.now()
            }]);
            _context13.n = 2;
            return CLOUD.upsert('bug_reports', _objectSpread(_objectSpread({}, report), {}, {
              thread: newThread,
              updated_at: new Date().toISOString()
            }));
          case 2:
            ok = _context13.v;
            if (ok) {
              setReplyText('');
              toast('✓ 已回复');
              onChanged && onChanged();
            }
            _context13.n = 4;
            break;
          case 3:
            _context13.p = 3;
            _t8 = _context13.v;
            alert('回复失败: ' + (_t8.message || _t8));
          case 4:
            return _context13.a(2);
        }
      }, _callee12, null, [[1, 3]]);
    }));
    return function addReply() {
      return _ref21.apply(this, arguments);
    };
  }();
  var formatTs = function formatTs(ms) {
    if (!ms) return '';
    var d = new Date(ms);
    return d.toLocaleString('zh-CN', {
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
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
      padding: '20px'
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
      maxHeight: '92vh'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      borderBottom: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexShrink: 0,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
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
      background: cat.bg,
      color: cat.color,
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 700
    }
  }, cat.label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: pri.bg,
      color: pri.color,
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 700
    }
  }, pri.label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: st.bg,
      color: st.color,
      borderRadius: 6,
      fontSize: 10,
      fontWeight: 700
    }
  }, st.label), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 8px',
      background: '#f5f5f7',
      color: 'var(--ink-3)',
      borderRadius: 6,
      fontSize: 10
    }
  }, mod.label)), /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.3
    }
  }, report.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--ink-3)',
      marginTop: 3
    }
  }, report.created_by_name, " ", report.created_by_role === 'admin' || report.created_by_role === 'super_admin' ? '(主管)' : report.created_by_role === 'finance' ? '(财务)' : '', " \xB7 ", formatTs(report.created_at_ms))), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18,
      padding: 0,
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      overflowY: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      fontSize: 11,
      color: 'var(--ink-3)',
      marginBottom: 14,
      padding: '8px 10px',
      background: '#fafaf7',
      borderRadius: 8
    }
  }, report.app_version && /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCE6 ", /*#__PURE__*/React.createElement("strong", null, "\u7248\u672C"), ": ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'ui-monospace'
    }
  }, report.app_version)), report.browser_info && /*#__PURE__*/React.createElement("span", null, "\xB7 \uD83D\uDDA5 ", /*#__PURE__*/React.createElement("strong", null, "\u73AF\u5883"), ": ", report.browser_info), report.version_fixed && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#15803d',
      fontWeight: 600
    }
  }, "\xB7 \u2705 \u4FEE\u590D\u4E8E ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'ui-monospace'
    }
  }, report.version_fixed))), report.description && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 4
    }
  }, "\uD83D\uDCDD \u63CF\u8FF0"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: '#fafaf7',
      borderRadius: 8,
      fontSize: 13,
      color: 'var(--ink-2)',
      lineHeight: 1.6,
      whiteSpace: 'pre-wrap'
    }
  }, report.description)), report.reproduce_steps && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 4
    }
  }, "\uD83D\uDD01 \u590D\u73B0\u6B65\u9AA4"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: '#fef3c7',
      border: '1px solid #fde047',
      borderRadius: 8,
      fontSize: 12,
      color: '#7c2d12',
      lineHeight: 1.6,
      whiteSpace: 'pre-wrap',
      fontFamily: 'ui-monospace, monospace'
    }
  }, report.reproduce_steps)), (report.expected_behavior || report.actual_behavior) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10,
      marginBottom: 12
    }
  }, report.expected_behavior && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#15803d',
      marginBottom: 4
    }
  }, "\u2713 \u671F\u671B"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px',
      background: '#dcfce7',
      borderRadius: 7,
      fontSize: 12,
      color: '#15803d',
      lineHeight: 1.5,
      whiteSpace: 'pre-wrap'
    }
  }, report.expected_behavior)), report.actual_behavior && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#b91c1c',
      marginBottom: 4
    }
  }, "\u2717 \u5B9E\u9645"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px',
      background: '#fee2e2',
      borderRadius: 7,
      fontSize: 12,
      color: '#b91c1c',
      lineHeight: 1.5,
      whiteSpace: 'pre-wrap'
    }
  }, report.actual_behavior))), (report.screenshots || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 4
    }
  }, "\uD83D\uDCF7 \u622A\u56FE (", (report.screenshots || []).length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
      gap: 6
    }
  }, (report.screenshots || []).map(function (s, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: function onClick() {
        return setImgPreview(s.dataUrl);
      },
      style: {
        position: 'relative',
        border: '1px solid var(--line)',
        borderRadius: 6,
        overflow: 'hidden',
        cursor: 'pointer',
        background: 'white'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: s.dataUrl,
      alt: s.name,
      style: {
        width: '100%',
        height: 90,
        objectFit: 'contain',
        display: 'block',
        background: 'var(--bg-elevated)'
      }
    }));
  }))), (report.admin_response || isAdmin) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12,
      padding: '12px',
      background: '#f0f9ff',
      border: '1px solid #bae6fd',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: '#0369a1',
      marginBottom: 6
    }
  }, "\uD83D\uDCAC \u4E3B\u7BA1\u56DE\u590D"), isAdmin ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("textarea", {
    value: adminResponse,
    onChange: function onChange(e) {
      return setAdminResponse(e.target.value);
    },
    rows: 3,
    placeholder: "\u7ED9\u63D0\u4EA4\u4EBA\u7684\u56DE\u590D(\u5982:\u5DF2\u8BB0\u5165\u8DEF\u7EBF\u56FE,\u4E0B\u7248\u672C\u4FEE\u590D / \u6682\u4E0D\u8BA1\u5212 / \u91CD\u590D #abc,\u89C1\u90A3\u6761..)",
    style: {
      width: '100%',
      padding: '7px 10px',
      border: '1px solid #bae6fd',
      borderRadius: 7,
      fontSize: 12,
      fontFamily: 'inherit',
      resize: 'vertical',
      background: 'white'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      color: '#0369a1',
      fontWeight: 600
    }
  }, "\u4FEE\u590D\u7248\u672C:"), /*#__PURE__*/React.createElement("input", {
    value: versionFixed,
    onChange: function onChange(e) {
      return setVersionFixed(e.target.value);
    },
    placeholder: "\u5982 ".concat(APP_VERSION.replace(/-fix\d+.*$/, '-fix14'), " \u6216\u7559\u7A7A"),
    style: {
      padding: '5px 8px',
      border: '1px solid #bae6fd',
      borderRadius: 6,
      fontSize: 11,
      fontFamily: 'ui-monospace, monospace',
      minWidth: 200
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: saveAdminResponse,
    style: {
      padding: '5px 12px',
      background: '#0369a1',
      color: 'white',
      border: 'none',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDCBE \u4FDD\u5B58\u56DE\u590D"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#1e40af',
      whiteSpace: 'pre-wrap',
      lineHeight: 1.6
    }
  }, report.admin_response || /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--ink-4)'
    }
  }, "\u4E3B\u7BA1\u8FD8\u6CA1\u56DE\u590D"))), isAdmin && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12,
      padding: '12px',
      background: '#fafaf7',
      border: '1px solid var(--line)',
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 6
    }
  }, "\uD83D\uDD04 \u6539\u72B6\u6001"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, BUG_STATUSES.map(function (s) {
    var sel = report.status === s.id;
    return /*#__PURE__*/React.createElement("button", {
      key: s.id,
      onClick: function onClick() {
        return setStatus(s.id);
      },
      disabled: sel,
      style: {
        padding: '5px 10px',
        background: sel ? s.color : 'white',
        color: sel ? 'white' : s.color,
        border: '1px solid ' + s.color,
        borderRadius: 6,
        cursor: sel ? 'default' : 'pointer',
        fontSize: 11,
        fontWeight: 600,
        fontFamily: 'inherit',
        opacity: sel ? 0.8 : 1
      }
    }, sel && '✓ ', s.label);
  }))), (report.thread || []).length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 4
    }
  }, "\uD83D\uDCAC \u5BF9\u8BDD (", (report.thread || []).length, ")"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, (report.thread || []).map(function (m, i) {
    var isMine = m.user_id === user.id;
    var isAdminMsg = m.role === 'admin' || m.role === 'super_admin';
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: 'flex',
        justifyContent: isMine ? 'flex-end' : 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: '80%',
        padding: '7px 11px',
        background: isAdminMsg ? '#dbeafe' : isMine ? '#dcfce7' : 'white',
        border: '1px solid ' + (isAdminMsg ? '#bfdbfe' : isMine ? '#86efac' : 'var(--line)'),
        borderRadius: 9,
        fontSize: 12,
        color: 'var(--ink-2)',
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: isAdminMsg ? '#1e40af' : 'var(--ink-3)',
        marginBottom: 2,
        fontWeight: 600
      }
    }, isAdminMsg && '👑 ', m.user_name, " \xB7 ", formatTs(m.ts)), /*#__PURE__*/React.createElement("div", {
      style: {
        whiteSpace: 'pre-wrap'
      }
    }, m.content)));
  }))), (isOwner || isAdmin) && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    value: replyText,
    onChange: function onChange(e) {
      return setReplyText(e.target.value);
    },
    rows: 2,
    placeholder: isAdmin ? '回复用户...(说说预期修复时间)' : '补充信息 / 跟主管对话...',
    onKeyDown: function onKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') addReply();
    },
    style: {
      flex: 1,
      padding: '7px 10px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      fontFamily: 'inherit',
      resize: 'vertical'
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: addReply,
    disabled: !replyText.trim(),
    style: {
      padding: '7px 14px',
      background: '#0369a1',
      color: 'white',
      border: 'none',
      borderRadius: 7,
      cursor: 'pointer',
      fontSize: 12,
      fontWeight: 600,
      fontFamily: 'inherit',
      alignSelf: 'flex-start',
      opacity: replyText.trim() ? 1 : 0.4
    }
  }, "\u53D1\u9001"))))), imgPreview && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setImgPreview(null);
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.9)',
      zIndex: 100001,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: imgPreview,
    alt: "",
    style: {
      maxWidth: '100%',
      maxHeight: '100%'
    }
  }))), document.body);
};

// ════════════════════════════════════════════════════════════════════
// 📥 导出反馈 modal — 主管/老板下载所有反馈,支持 Markdown / HTML / CSV / PDF 四种格式
// 主要用途:把所有 bug 打包给 AI 一次性修复(替代手动复制粘贴)
// ════════════════════════════════════════════════════════════════════
var BugExportModal = function BugExportModal(_ref22) {
  var reports = _ref22.reports,
    employees = _ref22.employees,
    onClose = _ref22.onClose,
    toast = _ref22.toast;
  var _useState93 = useState('pending'),
    _useState94 = _slicedToArray(_useState93, 2),
    filterStatus = _useState94[0],
    setFilterStatus = _useState94[1]; // 'all' | 'pending' | 'done'
  // 🆕 fix15: 升级为对象格式 (兼容旧 '7'/'30'/'90')
  var _useState95 = useState({
      kind: 'all'
    }),
    _useState96 = _slicedToArray(_useState95, 2),
    dateFilter = _useState96[0],
    setDateFilter = _useState96[1];
  var dateRange = useMemo(function () {
    return getDateRange(dateFilter);
  }, [dateFilter]);
  var _useState97 = useState('all'),
    _useState98 = _slicedToArray(_useState97, 2),
    filterCategory = _useState98[0],
    setFilterCategory = _useState98[1];
  var _useState99 = useState(true),
    _useState100 = _slicedToArray(_useState99, 2),
    includeScreenshots = _useState100[0],
    setIncludeScreenshots = _useState100[1];
  var _useState101 = useState(true),
    _useState102 = _slicedToArray(_useState101, 2),
    includeThread = _useState102[0],
    setIncludeThread = _useState102[1];
  var _useState103 = useState(true),
    _useState104 = _slicedToArray(_useState103, 2),
    includeResponse = _useState104[0],
    setIncludeResponse = _useState104[1];
  var _useState105 = useState(false),
    _useState106 = _slicedToArray(_useState105, 2),
    exporting = _useState106[0],
    setExporting = _useState106[1];

  // 应用筛选
  var filtered = useMemo(function () {
    var arr = reports.filter(function (r) {
      return !r.deleted;
    });
    if (filterStatus === 'pending') arr = arr.filter(function (r) {
      return r.status === 'new' || r.status === 'reviewed' || r.status === 'planned' || r.status === 'in_progress';
    });else if (filterStatus === 'done') arr = arr.filter(function (r) {
      return r.status === 'done';
    });
    // 🆕 fix15: 日期范围筛选
    if (dateRange.start > 0 || dateRange.end < Infinity) {
      arr = arr.filter(function (r) {
        var t = r.created_at_ms || 0;
        return t >= dateRange.start && t < dateRange.end;
      });
    }
    if (filterCategory !== 'all') arr = arr.filter(function (r) {
      return r.category === filterCategory;
    });
    // 排序:紧急 + 新 在前
    arr = _toConsumableArray(arr).sort(function (a, b) {
      var pri = {
        urgent: 4,
        high: 3,
        normal: 2,
        low: 1
      };
      var pA = pri[a.priority] || 0,
        pB = pri[b.priority] || 0;
      if (pA !== pB) return pB - pA;
      return (b.created_at_ms || 0) - (a.created_at_ms || 0);
    });
    return arr;
  }, [reports, filterStatus, dateRange, filterCategory]);

  // 文件名前缀(含时间戳)
  var filenamePrefix = function filenamePrefix() {
    var d = new Date();
    var stamp = "".concat(d.getFullYear()).concat(String(d.getMonth() + 1).padStart(2, '0')).concat(String(d.getDate()).padStart(2, '0'), "_").concat(String(d.getHours()).padStart(2, '0')).concat(String(d.getMinutes()).padStart(2, '0'));
    var scope = filterStatus === 'pending' ? '待修复' : filterStatus === 'done' ? '已修复' : '全部';
    // 🆕 fix15: 文件名也带上时间范围(如 6月第2周)
    var dateLabel = (dateFilter === null || dateFilter === void 0 ? void 0 : dateFilter.kind) === 'all' ? '' : '_' + formatDateFilterLabel(dateFilter).replace(/\s/g, '');
    return "bug\u53CD\u9988_".concat(scope).concat(dateLabel, "_").concat(filtered.length, "\u6761_").concat(stamp);
  };
  var formatTs = function formatTs(ms) {
    if (!ms) return '';
    return new Date(ms).toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  var csvEscape = function csvEscape(v) {
    if (v === null || v === undefined) return '';
    var s = String(v).replace(/"/g, '""');
    return /[",\n\r]/.test(s) ? "\"".concat(s, "\"") : s;
  };
  var fileSave = function fileSave(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  };

  // ──────────────────── Markdown 导出 ────────────────────
  var exportMarkdown = function exportMarkdown() {
    setExporting(true);
    try {
      var lines = [];
      lines.push("# \uD83D\uDC1B \u5BA2\u670D\u7CFB\u7EDF\u53CD\u9988\u6458\u8981");
      lines.push('');
      lines.push("> \u751F\u6210\u65F6\u95F4: ".concat(new Date().toLocaleString('zh-CN'), "  "));
      lines.push("> \u5F53\u524D\u7248\u672C: `".concat(APP_VERSION, "`  "));
      lines.push("> \u7B5B\u9009\u8303\u56F4: ".concat(filterStatus === 'pending' ? '待修复' : filterStatus === 'done' ? '已修复' : '全部', " \xB7 ").concat(filtered.length, " \u6761"));
      lines.push('');
      lines.push('---');
      lines.push('');
      lines.push('## 📋 给 AI 的话');
      lines.push('');
      lines.push('请你 (Claude) 分析以下反馈,对每条:');
      lines.push('1. 简短分析问题原因 (代码层面)');
      lines.push('2. 提出修复方案');
      lines.push('3. 标记下个版本号');
      lines.push('');
      lines.push('我确认后,你直接出新 HTML。');
      lines.push('');
      lines.push('---');
      lines.push('');
      filtered.forEach(function (r, i) {
        var cat = findBug(BUG_CATEGORIES, r.category);
        var pri = findBug(BUG_PRIORITIES, r.priority);
        var st = findBug(BUG_STATUSES, r.status);
        var mod = BUG_MODULES.find(function (m) {
          return m.id === r.module;
        }) || {
          label: r.module || '未指定'
        };
        lines.push("## ".concat(i + 1, ". ").concat(r.title));
        lines.push('');
        lines.push("**ID**: `".concat(r.id.slice(0, 8), "` \xB7 **").concat(cat.label, "** \xB7 **").concat(pri.label, "** \xB7 **").concat(st.label, "** \xB7 ").concat(mod.label));
        lines.push('');
        lines.push("- **\u62A5\u544A\u4EBA**: ".concat(r.created_by_name || '匿名').concat(r.created_by_role === 'admin' || r.created_by_role === 'super_admin' ? ' (主管)' : r.created_by_role === 'finance' ? ' (财务)' : ''));
        lines.push("- **\u65F6\u95F4**: ".concat(formatTs(r.created_at_ms)));
        if (r.app_version) lines.push("- **\u7248\u672C**: `".concat(r.app_version, "`"));
        if (r.browser_info) lines.push("- **\u73AF\u5883**: ".concat(r.browser_info));
        if (r.version_fixed) lines.push("- **\u5DF2\u4FEE\u590D\u4E8E**: `".concat(r.version_fixed, "` \u2705"));
        lines.push('');
        if (r.description) {
          lines.push('### 描述');
          lines.push(r.description);
          lines.push('');
        }
        if (r.reproduce_steps) {
          lines.push('### 复现步骤');
          lines.push('```');
          lines.push(r.reproduce_steps);
          lines.push('```');
          lines.push('');
        }
        if (r.expected_behavior) {
          lines.push('### ✓ 期望结果');
          lines.push(r.expected_behavior);
          lines.push('');
        }
        if (r.actual_behavior) {
          lines.push('### ✗ 实际结果');
          lines.push(r.actual_behavior);
          lines.push('');
        }
        if (includeScreenshots && (r.screenshots || []).length > 0) {
          lines.push("### \uD83D\uDCF7 \u622A\u56FE (".concat((r.screenshots || []).length, " \u5F20)"));
          (r.screenshots || []).forEach(function (s, j) {
            lines.push("![".concat(s.name || "screenshot_".concat(j + 1), "](").concat(s.dataUrl, ")"));
            lines.push('');
          });
        }
        if (includeResponse && r.admin_response) {
          lines.push('### 💬 主管回复');
          lines.push("> ".concat(r.admin_response.split('\n').join('\n> ')));
          lines.push('');
        }
        if (includeThread && (r.thread || []).length > 0) {
          lines.push("### \uD83D\uDCAC \u5BF9\u8BDD\u5386\u53F2 (".concat((r.thread || []).length, " \u6761)"));
          (r.thread || []).forEach(function (m) {
            var tag = m.role === 'admin' || m.role === 'super_admin' ? '**主管**' : '**用户**';
            lines.push("- ".concat(tag, " ").concat(m.user_name, " \xB7 ").concat(formatTs(m.ts), ":"));
            lines.push("  ".concat(m.content.split('\n').join('\n  ')));
          });
          lines.push('');
        }
        lines.push('---');
        lines.push('');
      });
      var blob = new Blob([lines.join('\n')], {
        type: 'text/markdown;charset=utf-8'
      });
      fileSave(blob, "".concat(filenamePrefix(), ".md"));
      toast('✓ Markdown 已下载 · 可直接拖到 Claude 对话');
    } catch (e) {
      alert('导出失败: ' + (e.message || e));
    }
    setExporting(false);
  };

  // ──────────────────── HTML 导出 ────────────────────
  var buildHtml = function buildHtml() {
    var forPrint = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var css = "\n      * { box-sizing: border-box; }\n      body { font-family: -apple-system, \"PingFang SC\", \"Microsoft YaHei\", sans-serif; margin: 0; padding: 30px 40px; color: #1a1a17; background: white; line-height: 1.6; font-size: 13px; }\n      h1 { font-size: 22px; color: #7c2d12; margin: 0 0 6px 0; padding-bottom: 10px; border-bottom: 2px solid #e8e6e0; }\n      h2 { font-size: 17px; color: #1a1a17; margin: 26px 0 10px 0; padding: 6px 10px; background: linear-gradient(90deg, #fef3c7 0%, transparent 100%); border-left: 4px solid #d97706; }\n      h3 { font-size: 13px; color: #3a3a35; margin: 14px 0 6px 0; }\n      .meta { color: #7a7a72; font-size: 11px; margin-bottom: 14px; }\n      .meta strong { color: #1a1a17; }\n      .tags { display: flex; gap: 5px; flex-wrap: wrap; margin: 6px 0 10px 0; }\n      .tag { padding: 2px 8px; border-radius: 6px; font-size: 10px; font-weight: 600; }\n      .tag.cat-bug { background: #fee2e2; color: #b91c1c; }\n      .tag.cat-feature { background: #f3e8ff; color: #7c3aed; }\n      .tag.cat-improvement { background: #dbeafe; color: #0369a1; }\n      .tag.cat-question { background: #f5f5f7; color: #86868b; }\n      .tag.pri-urgent { background: #fee2e2; color: #b91c1c; }\n      .tag.pri-high { background: #fef3c7; color: #d97706; }\n      .tag.pri-normal { background: #f5f5f7; color: #86868b; }\n      .tag.pri-low { background: #fafafa; color: #a8a8a8; }\n      .tag.st-new { background: #dbeafe; color: #0369a1; }\n      .tag.st-reviewed, .tag.st-planned { background: #fef3c7; color: #d97706; }\n      .tag.st-in_progress { background: #dbeafe; color: #0369a1; }\n      .tag.st-done { background: #dcfce7; color: #15803d; }\n      .tag.st-rejected, .tag.st-duplicate { background: #f5f5f7; color: #86868b; }\n      .tag.mod { background: #f5f5f7; color: #3a3a35; }\n      .info-box { padding: 8px 12px; background: #fafaf7; border: 1px solid #e8e6e0; border-radius: 8px; font-size: 11px; color: #7a7a72; margin-bottom: 12px; }\n      .info-box code { font-family: ui-monospace, \"Cascadia Code\", monospace; padding: 1px 6px; background: white; border-radius: 3px; }\n      .repro { padding: 10px 12px; background: #fef3c7; border: 1px solid #fde047; border-radius: 8px; font-family: ui-monospace, monospace; font-size: 11px; white-space: pre-wrap; color: #7c2d12; }\n      .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }\n      .grid2 .col-ok { padding: 8px 10px; background: #dcfce7; border: 1px solid #86efac; border-radius: 7px; color: #15803d; white-space: pre-wrap; }\n      .grid2 .col-bad { padding: 8px 10px; background: #fee2e2; border: 1px solid #fca5a5; border-radius: 7px; color: #b91c1c; white-space: pre-wrap; }\n      .grid2 .col-ok strong, .grid2 .col-bad strong { display: block; font-size: 11px; margin-bottom: 4px; }\n      .desc { padding: 10px 12px; background: #fafaf7; border-radius: 8px; white-space: pre-wrap; color: #3a3a35; }\n      .response { padding: 10px 12px; background: #eff6ff; border: 1px solid #bae6fd; border-radius: 8px; color: #1e40af; white-space: pre-wrap; }\n      .screenshots { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 8px; margin-top: 6px; }\n      .screenshots img { width: 100%; max-height: 240px; object-fit: contain; border: 1px solid #e8e6e0; border-radius: 6px; background: #fafafa; display: block; }\n      .thread { padding: 10px 12px; background: #fafaf7; border-radius: 8px; }\n      .thread-item { padding: 6px 0; border-bottom: 1px dashed #e8e6e0; font-size: 12px; }\n      .thread-item:last-child { border: none; }\n      .thread-who { color: #7a7a72; font-size: 10px; margin-bottom: 2px; }\n      .report-block { padding: 18px 20px; border: 1px solid #e8e6e0; border-radius: 10px; margin-bottom: 16px; background: white; page-break-inside: avoid; }\n      .report-title { font-size: 16px; font-weight: 600; margin: 6px 0; }\n      .footer { margin-top: 30px; padding-top: 16px; border-top: 1px solid #e8e6e0; font-size: 10px; color: #a8a8a8; text-align: center; }\n      @media print {\n        body { padding: 15px 20px; }\n        .report-block { page-break-inside: avoid; box-shadow: none; }\n        .screenshots img { max-height: 200px; }\n        h2 { page-break-after: avoid; }\n        h3 { page-break-after: avoid; }\n      }\n    ";
    var html = [];
    html.push('<!DOCTYPE html>');
    html.push('<html lang="zh"><head><meta charset="UTF-8">');
    html.push("<title>".concat(filenamePrefix(), "</title>"));
    html.push("<style>".concat(css, "</style>"));
    html.push('</head><body>');
    html.push("<h1>\uD83D\uDC1B \u5BA2\u670D\u7CFB\u7EDF\u53CD\u9988\u6458\u8981</h1>");
    html.push("<div class=\"meta\">");
    html.push("<strong>\u751F\u6210\u65F6\u95F4</strong>: ".concat(new Date().toLocaleString('zh-CN'), " \xB7 "));
    html.push("<strong>\u5F53\u524D\u7248\u672C</strong>: <code>".concat(APP_VERSION, "</code> \xB7 "));
    html.push("<strong>\u7B5B\u9009\u8303\u56F4</strong>: ".concat(filterStatus === 'pending' ? '待修复' : filterStatus === 'done' ? '已修复' : '全部', " \xB7 "));
    html.push("<strong>\u5171 ".concat(filtered.length, " \u6761</strong>"));
    html.push("</div>");

    // 统计概要
    var byCategory = {};
    var byPriority = {};
    filtered.forEach(function (r) {
      byCategory[r.category] = (byCategory[r.category] || 0) + 1;
      byPriority[r.priority] = (byPriority[r.priority] || 0) + 1;
    });
    html.push('<div class="info-box">');
    html.push('<strong>按类别</strong>: ');
    html.push(BUG_CATEGORIES.filter(function (c) {
      return byCategory[c.id];
    }).map(function (c) {
      return "".concat(c.label, " ").concat(byCategory[c.id]);
    }).join(' · '));
    html.push(' &nbsp;|&nbsp; <strong>按优先级</strong>: ');
    html.push(BUG_PRIORITIES.filter(function (p) {
      return byPriority[p.id];
    }).map(function (p) {
      return "".concat(p.label, " ").concat(byPriority[p.id]);
    }).join(' · '));
    html.push('</div>');
    filtered.forEach(function (r, i) {
      var cat = findBug(BUG_CATEGORIES, r.category);
      var pri = findBug(BUG_PRIORITIES, r.priority);
      var st = findBug(BUG_STATUSES, r.status);
      var mod = BUG_MODULES.find(function (m) {
        return m.id === r.module;
      }) || {
        label: r.module || '未指定'
      };
      html.push('<div class="report-block">');
      html.push("<h2>#".concat(i + 1, " ").concat(r.title, "</h2>"));
      html.push('<div class="tags">');
      html.push("<span class=\"tag cat-".concat(r.category, "\">").concat(cat.label, "</span>"));
      html.push("<span class=\"tag pri-".concat(r.priority, "\">").concat(pri.label, "</span>"));
      html.push("<span class=\"tag st-".concat(r.status, "\">").concat(st.label, "</span>"));
      html.push("<span class=\"tag mod\">".concat(mod.label, "</span>"));
      if (r.version_fixed) html.push("<span class=\"tag st-done\">\u4FEE\u590D\u4E8E ".concat(r.version_fixed, "</span>"));
      html.push('</div>');
      html.push('<div class="info-box">');
      html.push("<strong>ID</strong>: <code>".concat(r.id.slice(0, 8), "</code> \xB7 "));
      html.push("<strong>\u62A5\u544A\u4EBA</strong>: ".concat(r.created_by_name || '匿名').concat(r.created_by_role === 'admin' || r.created_by_role === 'super_admin' ? ' (主管)' : r.created_by_role === 'finance' ? ' (财务)' : '', " \xB7 "));
      html.push("<strong>\u65F6\u95F4</strong>: ".concat(formatTs(r.created_at_ms)));
      if (r.app_version) html.push(" \xB7 <strong>\u7248\u672C</strong>: <code>".concat(r.app_version, "</code>"));
      if (r.browser_info) html.push(" \xB7 <strong>\u73AF\u5883</strong>: ".concat(r.browser_info));
      html.push('</div>');
      if (r.description) {
        html.push('<h3>📝 描述</h3>');
        html.push("<div class=\"desc\">".concat((r.description || '').replace(/</g, '&lt;'), "</div>"));
      }
      if (r.reproduce_steps) {
        html.push('<h3>🔁 复现步骤</h3>');
        html.push("<div class=\"repro\">".concat((r.reproduce_steps || '').replace(/</g, '&lt;'), "</div>"));
      }
      if (r.expected_behavior || r.actual_behavior) {
        html.push('<div class="grid2" style="margin-top: 10px;">');
        if (r.expected_behavior) html.push("<div class=\"col-ok\"><strong>\u2713 \u671F\u671B</strong>".concat((r.expected_behavior || '').replace(/</g, '&lt;'), "</div>"));
        if (r.actual_behavior) html.push("<div class=\"col-bad\"><strong>\u2717 \u5B9E\u9645</strong>".concat((r.actual_behavior || '').replace(/</g, '&lt;'), "</div>"));
        html.push('</div>');
      }
      if (includeScreenshots && (r.screenshots || []).length > 0) {
        html.push("<h3>\uD83D\uDCF7 \u622A\u56FE (".concat((r.screenshots || []).length, " \u5F20)</h3>"));
        html.push('<div class="screenshots">');
        (r.screenshots || []).forEach(function (s) {
          html.push("<img src=\"".concat(s.dataUrl, "\" alt=\"").concat((s.name || '').replace(/"/g, '&quot;'), "\" />"));
        });
        html.push('</div>');
      }
      if (includeResponse && r.admin_response) {
        html.push('<h3>💬 主管回复</h3>');
        html.push("<div class=\"response\">".concat((r.admin_response || '').replace(/</g, '&lt;'), "</div>"));
      }
      if (includeThread && (r.thread || []).length > 0) {
        html.push("<h3>\uD83D\uDCAC \u5BF9\u8BDD (".concat((r.thread || []).length, ")</h3>"));
        html.push('<div class="thread">');
        (r.thread || []).forEach(function (m) {
          var isAdminMsg = m.role === 'admin' || m.role === 'super_admin';
          html.push('<div class="thread-item">');
          html.push("<div class=\"thread-who\">".concat(isAdminMsg ? '👑 ' : '').concat(m.user_name, " \xB7 ").concat(formatTs(m.ts), "</div>"));
          html.push("<div>".concat((m.content || '').replace(/</g, '&lt;').replace(/\n/g, '<br/>'), "</div>"));
          html.push('</div>');
        });
        html.push('</div>');
      }
      html.push('</div>'); // /report-block
    });
    html.push("<div class=\"footer\">Dekorfine \u5BA2\u670D\u7CFB\u7EDF \xB7 ".concat(APP_VERSION, " \xB7 \u5171 ").concat(filtered.length, " \u6761\u53CD\u9988</div>"));
    if (forPrint) html.push("<script>window.addEventListener('load', () => setTimeout(() => window.print(), 400));</script>");
    html.push('</body></html>');
    return html.join('\n');
  };
  var exportHtml = function exportHtml() {
    setExporting(true);
    try {
      var blob = new Blob([buildHtml(false)], {
        type: 'text/html;charset=utf-8'
      });
      fileSave(blob, "".concat(filenamePrefix(), ".html"));
      toast('✓ HTML 已下载 · 可双击打开或用 Word 打开');
    } catch (e) {
      alert('导出失败: ' + (e.message || e));
    }
    setExporting(false);
  };
  var exportPdf = function exportPdf() {
    setExporting(true);
    try {
      var html = buildHtml(true);
      var w = window.open('', '_blank', 'width=900,height=900');
      if (!w) {
        alert('请允许浏览器弹窗,然后重试');
        setExporting(false);
        return;
      }
      w.document.write(html);
      w.document.close();
      toast('✓ 已打开打印对话框 · 选"另存为 PDF"');
    } catch (e) {
      alert('导出失败: ' + (e.message || e));
    }
    setExporting(false);
  };

  // ──────────────────── CSV 导出 ────────────────────
  var exportCsv = function exportCsv() {
    setExporting(true);
    try {
      var headers = ['ID', '标题', '类别', '优先级', '状态', '模块', '报告人', '报告人角色', '报告时间', '版本', '环境', '描述', '复现步骤', '期望', '实际', '截图数', '主管回复', '修复版本', '对话数'];
      var rows = [headers.map(csvEscape).join(',')];
      filtered.forEach(function (r) {
        var cat = findBug(BUG_CATEGORIES, r.category);
        var pri = findBug(BUG_PRIORITIES, r.priority);
        var st = findBug(BUG_STATUSES, r.status);
        var mod = BUG_MODULES.find(function (m) {
          return m.id === r.module;
        }) || {
          label: r.module || ''
        };
        rows.push([r.id.slice(0, 8), r.title || '', cat.label, pri.label, st.label, mod.label, r.created_by_name || '', r.created_by_role || '', formatTs(r.created_at_ms), r.app_version || '', r.browser_info || '', r.description || '', r.reproduce_steps || '', r.expected_behavior || '', r.actual_behavior || '', (r.screenshots || []).length, r.admin_response || '', r.version_fixed || '', (r.thread || []).length].map(csvEscape).join(','));
      });
      // BOM 让 Excel 正确识别 UTF-8 中文
      var blob = new Blob(["\uFEFF" + rows.join('\n')], {
        type: 'text/csv;charset=utf-8'
      });
      fileSave(blob, "".concat(filenamePrefix(), ".csv"));
      toast('✓ CSV 已下载 · 用 Excel 打开');
    } catch (e) {
      alert('导出失败: ' + (e.message || e));
    }
    setExporting(false);
  };

  // 估算文件大小
  var sizeEstimate = useMemo(function () {
    var shotsBytes = 0;
    if (includeScreenshots) {
      filtered.forEach(function (r) {
        (r.screenshots || []).forEach(function (s) {
          shotsBytes += s.size || 0;
        });
      });
    }
    var textBytes = filtered.length * 500;
    var total = textBytes + shotsBytes;
    if (total < 1024) return "".concat(total, " B");
    if (total < 1024 * 1024) return "".concat((total / 1024).toFixed(0), " KB");
    return "".concat((total / 1024 / 1024).toFixed(1), " MB");
  }, [filtered, includeScreenshots]);
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
      padding: '20px'
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
      flexShrink: 0,
      background: 'linear-gradient(90deg, #fef3c7 0%, #fde047 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#7c2d12'
    }
  }, "\uD83D\uDCE5 \u5BFC\u51FA\u53CD\u9988"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#92400e',
      marginTop: 2
    }
  }, "\u4E0B\u8F7D\u6240\u6709 bug \u53CD\u9988 \xB7 4 \u79CD\u683C\u5F0F \xB7 \u4E00\u6B21\u6027\u53D1\u7ED9 AI \u4FEE\u590D")), /*#__PURE__*/React.createElement("button", {
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
      overflowY: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 6
    }
  }, "\uD83C\uDFAF \u7B5B\u9009\u8303\u56F4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)',
      marginBottom: 3
    }
  }, "\u72B6\u6001"), /*#__PURE__*/React.createElement("select", {
    value: filterStatus,
    onChange: function onChange(e) {
      return setFilterStatus(e.target.value);
    },
    style: {
      width: '100%',
      padding: '6px 9px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "pending"
  }, "\uD83D\uDD27 \u4EC5\u5F85\u4FEE\u590D"), /*#__PURE__*/React.createElement("option", {
    value: "done"
  }, "\u2705 \u4EC5\u5DF2\u4FEE\u590D"), /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\uD83D\uDCE5 \u5168\u90E8"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)',
      marginBottom: 3
    }
  }, "\u7C7B\u522B"), /*#__PURE__*/React.createElement("select", {
    value: filterCategory,
    onChange: function onChange(e) {
      return setFilterCategory(e.target.value);
    },
    style: {
      width: '100%',
      padding: '6px 9px',
      border: '1px solid var(--line)',
      borderRadius: 7,
      fontSize: 12,
      background: 'white',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "all"
  }, "\u5168\u90E8\u7C7B\u522B"), BUG_CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("option", {
      key: c.id,
      value: c.id
    }, c.label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)',
      marginBottom: 5
    }
  }, "\u23F1 \u65F6\u95F4\u8303\u56F4 (\u672C\u5468/\u672C\u6708/\u4EFB\u610F\u6708\u4EFD/\u4EFB\u610F\u6708\u4EFD\u7684\u7B2CN\u5468)"), /*#__PURE__*/React.createElement(AdvancedDateFilter, {
    value: dateFilter,
    onChange: setDateFilter,
    size: "sm"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 6
    }
  }, "\uD83D\uDCCB \u5305\u542B\u5185\u5BB9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, [{
    key: 'shots',
    label: '📷 截图',
    val: includeScreenshots,
    set: setIncludeScreenshots,
    hint: '(关闭可大幅减小文件)'
  }, {
    key: 'resp',
    label: '💬 主管回复',
    val: includeResponse,
    set: setIncludeResponse
  }, {
    key: 'thread',
    label: '💬 对话历史',
    val: includeThread,
    set: setIncludeThread
  }].map(function (o) {
    return /*#__PURE__*/React.createElement("label", {
      key: o.key,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 12,
        color: 'var(--ink-2)',
        cursor: 'pointer'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      checked: o.val,
      onChange: function onChange(e) {
        return o.set(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      }
    }), o.label, " ", o.hint && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: 'var(--ink-4)'
      }
    }, o.hint));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 12px',
      background: '#fafaf7',
      border: '1px solid var(--line)',
      borderRadius: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-2)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCCA \u547D\u4E2D ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--ink)',
      fontSize: 14
    }
  }, filtered.length), " \u6761\u53CD\u9988"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, "\u9884\u4F30\u5927\u5C0F: ~", sizeEstimate)), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 11,
      color: '#b91c1c'
    }
  }, "\u5F53\u524D\u7B5B\u9009\u4E0B\u6CA1\u6709\u6570\u636E \xB7 \u8BD5\u7740\u653E\u5BBD\u6761\u4EF6")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 8
    }
  }, "\uD83D\uDCC1 \u9009\u62E9\u683C\u5F0F\u4E0B\u8F7D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, [{
    key: 'md',
    icon: '📝',
    name: 'Markdown (.md)',
    desc: '最适合直接给 AI · 带截图(data URL)',
    action: exportMarkdown,
    color: '#7c3aed'
  }, {
    key: 'pdf',
    icon: '🖨',
    name: 'PDF (打印对话框)',
    desc: '浏览器打印 → 另存为 PDF · 排版好',
    action: exportPdf,
    color: '#dc2626'
  }, {
    key: 'html',
    icon: '🌐',
    name: '网页 (.html)',
    desc: '双击可看 · Word 也能打开 · 含截图',
    action: exportHtml,
    color: '#0369a1'
  }, {
    key: 'csv',
    icon: '📊',
    name: 'CSV 表格 (.csv)',
    desc: '用 Excel 打开 · 无截图 · 只文字',
    action: exportCsv,
    color: '#15803d'
  }].map(function (f) {
    return /*#__PURE__*/React.createElement("button", {
      key: f.key,
      onClick: f.action,
      disabled: exporting || filtered.length === 0,
      style: {
        padding: '14px',
        background: 'white',
        border: '2px solid ' + (exporting || filtered.length === 0 ? 'var(--line)' : f.color),
        borderRadius: 9,
        cursor: exporting || filtered.length === 0 ? 'not-allowed' : 'pointer',
        fontFamily: 'inherit',
        textAlign: 'left',
        opacity: exporting || filtered.length === 0 ? 0.5 : 1,
        transition: 'all .15s'
      },
      onMouseEnter: function onMouseEnter(e) {
        if (!exporting && filtered.length > 0) e.currentTarget.style.background = '#fafafa';
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.background = 'white';
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, f.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: exporting || filtered.length === 0 ? 'var(--ink-3)' : f.color
      }
    }, f.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-3)',
        lineHeight: 1.4
      }
    }, f.desc));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: '10px 12px',
      background: '#eff6ff',
      border: '1px solid #bfdbfe',
      borderRadius: 8,
      fontSize: 11,
      color: '#1e40af',
      lineHeight: 1.6
    }
  }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("strong", null, "\u63A8\u8350\u5DE5\u4F5C\u6D41"), ":\u52FE\u9009\"\uD83D\uDCF7 \u622A\u56FE\" \u2192 \u9009 ", /*#__PURE__*/React.createElement("strong", null, "Markdown (.md)"), " \u4E0B\u8F7D \u2192 \u628A .md \u6587\u4EF6", /*#__PURE__*/React.createElement("strong", null, "\u62D6\u5230 Claude \u5BF9\u8BDD\u7A97\u53E3"), "\u3002", /*#__PURE__*/React.createElement("br", null), "AI \u80FD\u76F4\u63A5\u8BFB Markdown \u6587\u5B57 + \u770B\u622A\u56FE,\u4E00\u6B21\u6027\u5206\u6790\u6240\u6709\u53CD\u9988\u3001\u7ED9\u51FA\u4FEE\u590D\u65B9\u6848\u3001\u51FA\u65B0 HTML\u3002")))), document.body);
};

// AI 摘要导出 modal — 主管点"导出给 AI",生成结构化文本可复制给 Claude
var BugAiSummaryModal = function BugAiSummaryModal(_ref23) {
  var reports = _ref23.reports,
    onClose = _ref23.onClose,
    toast = _ref23.toast;
  var _useState107 = useState(false),
    _useState108 = _slicedToArray(_useState107, 2),
    copied = _useState108[0],
    setCopied = _useState108[1];
  var summary = useMemo(function () {
    var pending = reports.filter(function (r) {
      return r.status === 'new' || r.status === 'reviewed' || r.status === 'planned';
    }).sort(function (a, b) {
      var pri = {
        urgent: 4,
        high: 3,
        normal: 2,
        low: 1
      };
      var pA = pri[a.priority] || 0,
        pB = pri[b.priority] || 0;
      if (pA !== pB) return pB - pA;
      return (b.created_at_ms || 0) - (a.created_at_ms || 0);
    });
    if (pending.length === 0) return '当前没有待处理的反馈。';
    var lines = [];
    lines.push('═══════════════════════════════════════════════');
    lines.push('🐛 客服系统待修复反馈摘要 (导出给 Claude)');
    lines.push('═══════════════════════════════════════════════');
    lines.push("\u751F\u6210\u65F6\u95F4: ".concat(new Date().toLocaleString('zh-CN')));
    lines.push("\u5F53\u524D\u7248\u672C: ".concat(APP_VERSION));
    lines.push("\u5F85\u5904\u7406\u53CD\u9988: ".concat(pending.length, " \u6761"));
    lines.push('');
    lines.push('请你 (Claude) 分析以下反馈,提出修复方案。');
    lines.push('对每条:');
    lines.push('  1. 简短分析问题原因 (代码层面)');
    lines.push('  2. 提出修复方案');
    lines.push('  3. 标记下个版本号 (如 fix14)');
    lines.push('我确认后,你直接出新 HTML。');
    lines.push('');
    lines.push('═══════════════════════════════════════════════');
    lines.push('');

    // 按类别+优先级分组
    var grouped = {
      urgent_bug: [],
      urgent_other: [],
      high: [],
      normal: [],
      low: []
    };
    pending.forEach(function (r) {
      if (r.priority === 'urgent' && r.category === 'bug') grouped.urgent_bug.push(r);else if (r.priority === 'urgent') grouped.urgent_other.push(r);else if (r.priority === 'high') grouped.high.push(r);else if (r.priority === 'low') grouped.low.push(r);else grouped.normal.push(r);
    });
    var renderGroup = function renderGroup(title, items) {
      if (items.length === 0) return;
      lines.push("\u3010".concat(title, " - \u5171 ").concat(items.length, " \u6761\u3011"));
      lines.push('');
      items.forEach(function (r, i) {
        var cat = findBug(BUG_CATEGORIES, r.category);
        var pri = findBug(BUG_PRIORITIES, r.priority);
        var st = findBug(BUG_STATUSES, r.status);
        var mod = BUG_MODULES.find(function (m) {
          return m.id === r.module;
        }) || {
          label: r.module
        };
        var ageDays = Math.floor((Date.now() - (r.created_at_ms || 0)) / 86400000);
        var shotsCount = (r.screenshots || []).length;
        lines.push("#".concat(i + 1, " [").concat(r.id.slice(0, 8), "] ").concat(cat.label, " ").concat(pri.label, " ").concat(st.label));
        lines.push("\u6807\u9898: ".concat(r.title));
        lines.push("\u6A21\u5757: ".concat(mod.label));
        lines.push("\u62A5\u544A\u4EBA: ".concat(r.created_by_name || '匿名').concat(r.created_by_role === 'admin' ? ' (主管)' : r.created_by_role === 'finance' ? ' (财务)' : '', " \xB7 ").concat(ageDays === 0 ? '今天' : ageDays + ' 天前'));
        lines.push("\u7248\u672C: ".concat(r.app_version || '未记录'));
        if (r.browser_info) lines.push("\u73AF\u5883: ".concat(r.browser_info));
        if (r.description) {
          lines.push('');
          lines.push('描述:');
          lines.push(r.description);
        }
        if (r.reproduce_steps) {
          lines.push('');
          lines.push('复现步骤:');
          lines.push(r.reproduce_steps);
        }
        if (r.expected_behavior) lines.push("\n\u671F\u671B: ".concat(r.expected_behavior));
        if (r.actual_behavior) lines.push("\u5B9E\u9645: ".concat(r.actual_behavior));
        if (shotsCount > 0) lines.push("\n\u622A\u56FE: ".concat(shotsCount, " \u5F20 (\u5728\u5BA2\u670D\u7CFB\u7EDF bug_reports \u8868 id=").concat(r.id, " \u7684 screenshots \u5B57\u6BB5\u4E2D,\u5982\u9700\u6211\u770B\u8BF7\u5355\u72EC\u8D34\u51FA\u6765)"));
        if (r.admin_response) {
          lines.push('');
          lines.push("\u4E3B\u7BA1\u6279\u6CE8: ".concat(r.admin_response));
        }
        if ((r.thread || []).length > 0) {
          lines.push('');
          lines.push('对话历史:');
          (r.thread || []).forEach(function (m) {
            lines.push("  [".concat(m.role === 'admin' || m.role === 'super_admin' ? '主管' : '用户', " ").concat(m.user_name, "]: ").concat(m.content));
          });
        }
        lines.push('');
        lines.push('───────────────────────────');
        lines.push('');
      });
    };
    renderGroup('🚨 紧急 Bug', grouped.urgent_bug);
    renderGroup('🚨 紧急 其他', grouped.urgent_other);
    renderGroup('⚡ 重要', grouped.high);
    renderGroup('· 普通', grouped.normal);
    renderGroup('· 低优先级', grouped.low);
    lines.push('═══════════════════════════════════════════════');
    lines.push('以上为本次迭代的全部待处理反馈。');
    lines.push('请输出: 1) 每条的分析与方案 2) 建议的下版本号 3) 优先做哪些');
    lines.push('═══════════════════════════════════════════════');
    return lines.join('\n');
  }, [reports]);
  var copy = /*#__PURE__*/function () {
    var _ref24 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13() {
      var ta, _t9;
      return _regenerator().w(function (_context14) {
        while (1) switch (_context14.p = _context14.n) {
          case 0:
            _context14.p = 0;
            _context14.n = 1;
            return navigator.clipboard.writeText(summary);
          case 1:
            setCopied(true);
            toast('✓ 已复制 · 粘贴到 Claude 对话窗口');
            setTimeout(function () {
              return setCopied(false);
            }, 3000);
            _context14.n = 3;
            break;
          case 2:
            _context14.p = 2;
            _t9 = _context14.v;
            // 兜底:用旧 API
            try {
              ta = document.createElement('textarea');
              ta.value = summary;
              ta.style.position = 'fixed';
              ta.style.left = '-9999px';
              document.body.appendChild(ta);
              ta.select();
              document.execCommand('copy');
              document.body.removeChild(ta);
              setCopied(true);
              toast('✓ 已复制');
              setTimeout(function () {
                return setCopied(false);
              }, 3000);
            } catch (e2) {
              alert('复制失败,请手动选中文本框 → Ctrl+A → Ctrl+C');
            }
          case 3:
            return _context14.a(2);
        }
      }, _callee13, null, [[0, 2]]);
    }));
    return function copy() {
      return _ref24.apply(this, arguments);
    };
  }();
  var pendingCount = reports.filter(function (r) {
    return r.status === 'new' || r.status === 'reviewed' || r.status === 'planned';
  }).length;
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
      padding: '20px'
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
      flexShrink: 0,
      background: 'linear-gradient(90deg, #f3e8ff 0%, #ede9fe 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: '#5b21b6'
    }
  }, "\uD83E\uDD16 \u5BFC\u51FA\u7ED9 AI \xB7 ", pendingCount, " \u6761\u5F85\u5904\u7406"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#6b21a8',
      marginTop: 2
    }
  }, "\u590D\u5236\u4E0B\u9762\u7684\u6587\u672C \u2192 \u7C98\u8D34\u5230 Claude \u5BF9\u8BDD \u2192 AI \u81EA\u52A8\u5206\u6790\u63D0\u51FA\u65B9\u6848")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: 18
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 20px',
      flex: 1,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    readOnly: true,
    value: summary,
    rows: 20,
    onClick: function onClick(e) {
      return e.target.select();
    },
    style: {
      width: '100%',
      padding: '10px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 11,
      fontFamily: 'ui-monospace, "Cascadia Code", monospace',
      resize: 'vertical',
      background: '#1a1a17',
      color: '#e0e0e0',
      minHeight: 400,
      lineHeight: 1.6
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px',
      borderTop: '1px solid var(--line)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8,
      flexShrink: 0,
      background: '#fafafa'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      lineHeight: 1.5
    }
  }, "\uD83D\uDCA1 \u5DE5\u4F5C\u6D41:\u590D\u5236 \u2192 \u7C98\u8D34\u5230 Claude \u2192 AI \u5206\u6790 \u2192 \u4F60\u786E\u8BA4 \u2192 AI \u51FA\u65B0 HTML \u2192 \u4F60\u5F3A\u5237\u751F\u6548", /*#__PURE__*/React.createElement("br", null), "\uD83D\uDCA1 \u622A\u56FE\u9700\u8981 AI \u770B\u7684\u8BDD:\u5728\u53CD\u9988\u8BE6\u60C5\u91CC\u628A\u622A\u56FE\u590D\u5236\u51FA\u6765,\u7C98\u5230 Claude \u5BF9\u8BDD(\u56FE\u6BD4\u6587\u5B57\u66F4\u76F4\u63A5)"), /*#__PURE__*/React.createElement("button", {
    onClick: copy,
    style: {
      padding: '8px 18px',
      background: copied ? '#15803d' : '#7c3aed',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit',
      whiteSpace: 'nowrap',
      flexShrink: 0,
      transition: 'background .2s'
    }
  }, copied ? '✓ 已复制' : '📋 复制全部')))), document.body);
};

// ════════════════════════════════════════════════════════════════════
// 📖 帮助中心模块 (fix13)
// 包含:入门指南 / 模块详解 / 角色权限 / 快捷操作 / 报告 Bug / 版本日志 / AI 能力 / 路线图 / 设计哲学
// ════════════════════════════════════════════════════════════════════
