// ════════════════════════════════════════════════════════════════════
// 🧱 核心 · fix28-95
// APP_VERSION: 2026.05.29-fix95
// ════════════════════════════════════════════════════════════════════
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
// ════════════════════════════════════════════════════════════════════
// 🧱 核心 · fix28-95
// APP_VERSION: 2026.05.29-fix95
// ════════════════════════════════════════════════════════════════════

var _React = React,
  useState = _React.useState,
  useMemo = _React.useMemo,
  useEffect = _React.useEffect,
  useRef = _React.useRef,
  useCallback = _React.useCallback,
  useContext = _React.useContext,
  createContext = _React.createContext;

// ============================================================
// 工具
// ============================================================
// 🆕 本地时间的"今天"日期(避免 toISOString 的 UTC 时区偏移)
var todayISO = function todayISO() {
  var d = new Date();
  var y = d.getFullYear();
  var m = String(d.getMonth() + 1).padStart(2, '0');
  var day = String(d.getDate()).padStart(2, '0');
  return "".concat(y, "-").concat(m, "-").concat(day);
};
var nowISO = function nowISO() {
  return new Date().toISOString();
};
var fmt = function fmt(n) {
  return isFinite(n) ? Math.round(n).toLocaleString() : '-';
};
var fmt2 = function fmt2(n) {
  return isFinite(n) ? n.toFixed(2) : '-';
};
var uid = function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
};
var daysBetween = function daysBetween(a, b) {
  var da = new Date(a),
    db = new Date(b);
  return Math.round((db - da) / 86400000);
};
// 🆕 用本地时间计算避免时区偏差(toISOString 会用 UTC,跨时区会差 1 天)
var addDays = function addDays(iso, days) {
  // iso 格式: "2026-05-25"
  var _iso$split$map = iso.split('-').map(Number),
    _iso$split$map2 = _slicedToArray(_iso$split$map, 3),
    y = _iso$split$map2[0],
    m = _iso$split$map2[1],
    d = _iso$split$map2[2];
  var dt = new Date(y, m - 1, d); // 本地时间 0 点
  dt.setDate(dt.getDate() + days);
  // 返回本地日期(不用 toISOString,避免再次转 UTC)
  var yy = dt.getFullYear();
  var mm = String(dt.getMonth() + 1).padStart(2, '0');
  var dd = String(dt.getDate()).padStart(2, '0');
  return "".concat(yy, "-").concat(mm, "-").concat(dd);
};
var minutesBetween = function minutesBetween(start, end) {
  if (!start || !end) return 0;
  var _start$split$map = start.split(':').map(Number),
    _start$split$map2 = _slicedToArray(_start$split$map, 2),
    sh = _start$split$map2[0],
    sm = _start$split$map2[1];
  var _end$split$map = end.split(':').map(Number),
    _end$split$map2 = _slicedToArray(_end$split$map, 2),
    eh = _end$split$map2[0],
    em = _end$split$map2[1];
  var diff = eh * 60 + em - (sh * 60 + sm);
  if (diff < 0) diff += 24 * 60;
  return diff;
};
var fmtDuration = function fmtDuration(mins) {
  if (!mins) return '0min';
  if (mins < 60) return mins + 'min';
  var h = Math.floor(mins / 60),
    m = mins % 60;
  return m ? "".concat(h, "h").concat(m, "m") : "".concat(h, "h");
};

// 是否为过去日期（早于今天）
var isPastDate = function isPastDate(iso) {
  return iso && iso < new Date().toISOString().slice(0, 10);
};

// 综合判定记录是否可编辑：当天 = 可编辑；过去 = 仅主管解锁后可编辑
var canEditRecord = function canEditRecord(record, user, adminUnlock) {
  if (!record) return false;
  if (!isPastDate(record.date)) return true; // 当天/未来日期始终可编辑
  if ((user.role === 'admin' || user.role === 'super_admin') && adminUnlock) return true; // 主管解锁
  return false;
};

// CSV 导出工具
var csvEscape = function csvEscape(val) {
  if (val === null || val === undefined) return '';
  var s = String(val);
  if (s.includes(',') || s.includes('"') || s.includes('\n') || s.includes('\r')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
};
var downloadCSV = function downloadCSV(rows, filename) {
  // 加 BOM 确保 Excel 中文不乱码
  var csv = "\uFEFF" + rows.map(function (r) {
    return r.map(csvEscape).join(',');
  }).join('\r\n');
  var blob = new Blob([csv], {
    type: 'text/csv;charset=utf-8;'
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function () {
    return URL.revokeObjectURL(url);
  }, 100);
};

// 桌面通知封装（安全调用，浏览器不支持时静默失败）
var sendDesktopNotification = function sendDesktopNotification(title, body, tag) {
  try {
    if (typeof Notification === 'undefined') return false;
    if (Notification.permission !== 'granted') return false;
    new Notification(title, {
      body: body,
      tag: tag,
      icon: undefined
    });
    return true;
  } catch (e) {
    return false;
  }
};

// ============================================================
// 存储层 (localStorage 命名空间)
// ============================================================
var STORE = {
  k: function k(s) {
    return 'workspace_v1_' + s;
  },
  get: function get(key, def) {
    try {
      var v = localStorage.getItem(this.k(key));
      return v ? JSON.parse(v) : def;
    } catch (e) {
      return def;
    }
  },
  set: function set(key, val) {
    try {
      localStorage.setItem(this.k(key), JSON.stringify(val));
    } catch (e) {
      console.error(e);
    }
  },
  del: function del(key) {
    try {
      localStorage.removeItem(this.k(key));
    } catch (e) {}
  }
};

// ============================================================
// 云同步层 (Supabase)
// ============================================================
// 已预埋默认配置，团队成员打开即用，无需各自填写
var DEFAULT_SB_URL = 'https://kwrajryhwyytkjkkidor.supabase.co';
var DEFAULT_SB_KEY = 'sb_publishable_6j-rSrv1V95FROe-iX6Yew_unE_Y6n9';
var CLOUD = {
  client: null,
  // 🛡 安全获取 from 链(若 client 为 null 返回 null,避免崩溃)
  safeFrom: function safeFrom(table) {
    if (!this.client) return null;
    return this.client.from(table);
  },
  enabled: false,
  status: 'local',
  // 'local' | 'ok' | 'err'
  lastError: '',
  init: function init(url, key) {
    if (!url || !key) {
      this.enabled = false;
      this.status = 'local';
      return false;
    }
    try {
      if (!window.supabase || !window.supabase.createClient) {
        this.status = 'err';
        this.lastError = 'Supabase SDK 未加载';
        return false;
      }
      this.client = window.supabase.createClient(url, key);
      this.enabled = true;
      this.status = 'ok';
      return true;
    } catch (e) {
      this.enabled = false;
      this.status = 'err';
      this.lastError = e.message;
      return false;
    }
  },
  ping: function ping() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _yield$_this$client$f, error, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (_this.client) {
              _context.n = 1;
              break;
            }
            return _context.a(2, {
              ok: false,
              msg: '未配置'
            });
          case 1:
            _context.p = 1;
            _context.n = 2;
            return _this.client.from('workspace_records').select('id', {
              count: 'exact',
              head: true
            }).limit(1);
          case 2:
            _yield$_this$client$f = _context.v;
            error = _yield$_this$client$f.error;
            if (!(error && error.code !== 'PGRST116')) {
              _context.n = 3;
              break;
            }
            // table not found is also an error
            _this.status = 'err';
            _this.lastError = error.message;
            return _context.a(2, {
              ok: false,
              msg: error.message
            });
          case 3:
            _this.status = 'ok';
            return _context.a(2, {
              ok: true,
              msg: '连接正常'
            });
          case 4:
            _context.p = 4;
            _t = _context.v;
            _this.status = 'err';
            _this.lastError = _t.message;
            return _context.a(2, {
              ok: false,
              msg: _t.message
            });
        }
      }, _callee, null, [[1, 4]]);
    }))();
  },
  // 通用 CRUD
  list: function list(table) {
    var _arguments = arguments,
      _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var opts, q, _yield$q, data, error, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            opts = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : {};
            if (_this2.client) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2, null);
          case 1:
            _context2.p = 1;
            q = _this2.client.from(table).select('*');
            if (opts.order) q = q.order(opts.order.col, {
              ascending: opts.order.asc !== false
            });
            if (opts.eq) Object.entries(opts.eq).forEach(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                k = _ref2[0],
                v = _ref2[1];
              return q = q.eq(k, v);
            });
            if (opts.limit) q = q.limit(opts.limit);
            _context2.n = 2;
            return q;
          case 2:
            _yield$q = _context2.v;
            data = _yield$q.data;
            error = _yield$q.error;
            if (!error) {
              _context2.n = 3;
              break;
            }
            throw error;
          case 3:
            return _context2.a(2, data || []);
          case 4:
            _context2.p = 4;
            _t2 = _context2.v;
            console.error('CLOUD.list', table, _t2);
            return _context2.a(2, null);
        }
      }, _callee2, null, [[1, 4]]);
    }))();
  },
  _lastError: null,
  // 🆕 保留最后一次操作的错误,供调用方读取
  // 🆕 fix8: 每个表跟踪 schema 缓存里缺失的字段,避免反复重试
  _missingColumns: {},
  // { table: Set<column> }
  upsert: function upsert(table, row) {
    var _arguments2 = arguments,
      _this3 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
      var _retryCount, known, cleanRow, _yield$_this3$client$, data, error, colMatch, missing, stripped, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _retryCount = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : 0;
            if (_this3.client) {
              _context3.n = 1;
              break;
            }
            _this3._lastError = {
              message: '云同步未配置或离线模式',
              table: table
            };
            return _context3.a(2, null);
          case 1:
            // 先剥离已知该表缺失的字段
            known = _this3._missingColumns[table];
            cleanRow = row;
            if (known && known.size > 0) {
              cleanRow = _objectSpread({}, row);
              known.forEach(function (col) {
                delete cleanRow[col];
              });
            }
            _context3.p = 2;
            _context3.n = 3;
            return _this3.client.from(table).upsert(cleanRow).select();
          case 3:
            _yield$_this3$client$ = _context3.v;
            data = _yield$_this3$client$.data;
            error = _yield$_this3$client$.error;
            if (!error) {
              _context3.n = 5;
              break;
            }
            // 🆕 fix8: 检测 "Could not find the 'X' column of 'TABLE' in the schema cache" (PGRST204)
            // 自动剥离该字段重试 (最多 5 次,避免死循环)
            colMatch = (error.message || '').match(/Could not find the '([^']+)' column/i);
            if (!(colMatch && _retryCount < 5)) {
              _context3.n = 4;
              break;
            }
            missing = colMatch[1];
            if (!_this3._missingColumns[table]) _this3._missingColumns[table] = new Set();
            _this3._missingColumns[table].add(missing);
            console.warn("[fix8 schema-retry] \u8868 \"".concat(table, "\" \u7F3A\u5C11\u5217 \"").concat(missing, "\",\u81EA\u52A8\u5265\u79BB\u91CD\u8BD5 (\u7B2C ").concat(_retryCount + 1, "/5 \u6B21)"));
            return _context3.a(2, _this3.upsert(table, row, _retryCount + 1));
          case 4:
            // 详细错误信息保留
            _this3._lastError = {
              message: error.message || '未知错误',
              code: error.code,
              details: error.details,
              hint: error.hint,
              table: table,
              row_keys: Object.keys(row || {}).join(', ')
            };
            console.error('❌ CLOUD.upsert 失败:', {
              table: table,
              error: error,
              row: row
            });
            throw error;
          case 5:
            _this3._lastError = null;
            // 🆕 fix8: 成功了但用了剥离 → 在 toast 提示一下,方便主管看到要补 schema
            if (cleanRow !== row) {
              stripped = _toConsumableArray(_this3._missingColumns[table] || []).join(', ');
              console.warn("[fix8 schema-retry] \u5DF2\u4FDD\u5B58\u5230 \"".concat(table, "\",\u4F46\u5265\u79BB\u4E86\u4E91\u7AEF\u4E0D\u8BC6\u522B\u7684\u5B57\u6BB5: ").concat(stripped, "\u3002\u5EFA\u8BAE\u4E3B\u7BA1\u5728 Supabase SQL Editor \u8865\u5EFA\u76F8\u5E94\u5217\u3002"));
            }
            return _context3.a(2, data);
          case 6:
            _context3.p = 6;
            _t3 = _context3.v;
            if (!_this3._lastError) {
              _this3._lastError = {
                message: _t3.message || String(_t3),
                table: table
              };
            }
            console.error('CLOUD.upsert', table, _t3);
            return _context3.a(2, null);
        }
      }, _callee3, null, [[2, 6]]);
    }))();
  },
  del: function del(table, id) {
    var _this4 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
      var _yield$_this4$client$, error, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (_this4.client) {
              _context4.n = 1;
              break;
            }
            return _context4.a(2, false);
          case 1:
            _context4.p = 1;
            _context4.n = 2;
            return _this4.client.from(table)["delete"]().eq('id', id);
          case 2:
            _yield$_this4$client$ = _context4.v;
            error = _yield$_this4$client$.error;
            if (!error) {
              _context4.n = 3;
              break;
            }
            throw error;
          case 3:
            return _context4.a(2, true);
          case 4:
            _context4.p = 4;
            _t4 = _context4.v;
            console.error('CLOUD.del', table, _t4);
            return _context4.a(2, false);
        }
      }, _callee4, null, [[1, 4]]);
    }))();
  },
  // 🆕 Storage 上传到 aftersales-images bucket
  uploadImage: function uploadImage(bucket, file) {
    var _arguments3 = arguments,
      _this5 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var prefix, _file$name, ext, fname, _yield$_this5$client$, data, error, _this5$client$storage, urlData, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            prefix = _arguments3.length > 2 && _arguments3[2] !== undefined ? _arguments3[2] : '';
            if (_this5.client) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2, null);
          case 1:
            _context5.p = 1;
            ext = (((_file$name = file.name) === null || _file$name === void 0 ? void 0 : _file$name.split('.').pop()) || 'png').toLowerCase();
            fname = "".concat(prefix).concat(Date.now(), "_").concat(Math.random().toString(36).slice(2, 7), ".").concat(ext);
            _context5.n = 2;
            return _this5.client.storage.from(bucket).upload(fname, file, {
              upsert: false,
              contentType: file.type || 'image/png'
            });
          case 2:
            _yield$_this5$client$ = _context5.v;
            data = _yield$_this5$client$.data;
            error = _yield$_this5$client$.error;
            if (!error) {
              _context5.n = 3;
              break;
            }
            throw error;
          case 3:
            _this5$client$storage = _this5.client.storage.from(bucket).getPublicUrl(data.path), urlData = _this5$client$storage.data;
            return _context5.a(2, {
              path: data.path,
              url: urlData.publicUrl
            });
          case 4:
            _context5.p = 4;
            _t5 = _context5.v;
            console.error('CLOUD.uploadImage', _t5);
            return _context5.a(2, null);
        }
      }, _callee5, null, [[1, 4]]);
    }))();
  },
  deleteImage: function deleteImage(bucket, path) {
    var _this6 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var _yield$_this6$client$, error, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            if (_this6.client) {
              _context6.n = 1;
              break;
            }
            return _context6.a(2, false);
          case 1:
            _context6.p = 1;
            _context6.n = 2;
            return _this6.client.storage.from(bucket).remove([path]);
          case 2:
            _yield$_this6$client$ = _context6.v;
            error = _yield$_this6$client$.error;
            if (!error) {
              _context6.n = 3;
              break;
            }
            throw error;
          case 3:
            return _context6.a(2, true);
          case 4:
            _context6.p = 4;
            _t6 = _context6.v;
            console.error('CLOUD.deleteImage', _t6);
            return _context6.a(2, false);
        }
      }, _callee6, null, [[1, 4]]);
    }))();
  },
  // 🆕 通用文件上传 (支持 PDF / PPT / XLSX / DOCX / 图片 / 视频 等)
  uploadFile: function uploadFile(bucket, file) {
    var _arguments4 = arguments,
      _this7 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
      var prefix, safeName, fname, _yield$_this7$client$, data, error, _this7$client$storage, urlData, _t7;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            prefix = _arguments4.length > 2 && _arguments4[2] !== undefined ? _arguments4[2] : '';
            if (_this7.client) {
              _context7.n = 1;
              break;
            }
            return _context7.a(2, null);
          case 1:
            _context7.p = 1;
            safeName = (file.name || 'file').replace(/[^\w\u4e00-\u9fa5.-]/g, '_').slice(0, 80);
            fname = "".concat(prefix).concat(Date.now(), "_").concat(Math.random().toString(36).slice(2, 7), "_").concat(safeName);
            _context7.n = 2;
            return _this7.client.storage.from(bucket).upload(fname, file, {
              upsert: false,
              contentType: file.type || 'application/octet-stream'
            });
          case 2:
            _yield$_this7$client$ = _context7.v;
            data = _yield$_this7$client$.data;
            error = _yield$_this7$client$.error;
            if (!error) {
              _context7.n = 3;
              break;
            }
            throw error;
          case 3:
            _this7$client$storage = _this7.client.storage.from(bucket).getPublicUrl(data.path), urlData = _this7$client$storage.data;
            return _context7.a(2, {
              path: data.path,
              url: urlData.publicUrl,
              name: file.name,
              size: file.size,
              type: file.type || 'application/octet-stream'
            });
          case 4:
            _context7.p = 4;
            _t7 = _context7.v;
            console.error('CLOUD.uploadFile', _t7);
            return _context7.a(2, null);
        }
      }, _callee7, null, [[1, 4]]);
    }))();
  }
};

// 🆕 全局保存失败提示 - 所有 editor 共用
// 用法: const res = await CLOUD.upsert(...); if (!res) { alertSaveError('保存'); return; }
var alertSaveError = function alertSaveError() {
  var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '保存';
  var err = CLOUD._lastError;
  if (!err) {
    alert("\u274C ".concat(action, "\u5931\u8D25:\u672A\u77E5\u9519\u8BEF\n\n\u5EFA\u8BAE:\n1. \u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\n2. F12 \u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F\n3. \u5F3A\u5237\u9875\u9762\u540E\u91CD\u8BD5"));
    return;
  }

  // 根据错误码给出针对性建议
  var code = err.code || '';
  var hint = '';
  if (code === 'PGRST204' || (err.message || '').includes('not find') || (err.message || '').includes('does not exist')) {
    hint = "\n\n\uD83D\uDD27 \u53EF\u80FD\u539F\u56E0:\u6570\u636E\u5E93\u8868/\u5B57\u6BB5\u4E0D\u5B58\u5728\n\u5EFA\u8BAE:\u8BA9\u4E3B\u7BA1\u5728 Supabase SQL Editor \u8DD1\u76F8\u5E94\u7684 SQL \u6587\u4EF6:\n  - \u62D2\u4ED8/\u7EBF\u4E0B\u5355/\u5B9A\u5236/\u5B9E\u62CD \u2192 13_chargebacks_offline_custom_photos.sql + 15_fix_chargeback_storage.sql\n  - \u552E\u540E/\u8865\u4EF6/\u9000\u6B3E \u2192 05_aftersales_refills_refunds.sql\n  - \u4EA7\u54C1\u8BC4\u4EF7 \u2192 12_product_reviews.sql\n  - \u5220\u9664\u5BA1\u6279 \u2192 14_delete_requests.sql";
  } else if ((err.message || '').toLowerCase().includes('row-level security') || code === '42501') {
    hint = "\n\n\uD83D\uDD27 \u53EF\u80FD\u539F\u56E0:\u6570\u636E\u5E93 RLS \u7B56\u7565\u963B\u6B62\u5199\u5165\n\u5EFA\u8BAE:\u8BA9\u4E3B\u7BA1\u8DD1 15_fix_chargeback_storage.sql \u4FEE\u590D\u7B56\u7565";
  } else if ((err.message || '').toLowerCase().includes('network') || (err.message || '').includes('fetch')) {
    hint = "\n\n\uD83D\uDD27 \u53EF\u80FD\u539F\u56E0:\u7F51\u7EDC\u95EE\u9898\n\u5EFA\u8BAE:\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u540E\u91CD\u8BD5";
  } else if ((err.message || '').toLowerCase().includes('duplicate') || code === '23505') {
    hint = "\n\n\uD83D\uDD27 \u53EF\u80FD\u539F\u56E0:\u91CD\u590D\u952E(\u8BA2\u5355\u53F7\u5DF2\u5B58\u5728\u7B49)\n\u5EFA\u8BAE:\u6362\u4E00\u4E2A\u552F\u4E00\u7F16\u53F7";
  } else if ((err.message || '').toLowerCase().includes('null value') || code === '23502') {
    hint = "\n\n\uD83D\uDD27 \u53EF\u80FD\u539F\u56E0:\u5FC5\u586B\u5B57\u6BB5\u4E3A\u7A7A\n\u5EFA\u8BAE:\u68C0\u67E5\u6240\u6709 * \u6807\u8BB0\u7684\u5B57\u6BB5\u662F\u5426\u586B\u5199";
  }
  alert("\u274C ".concat(action, "\u5931\u8D25\n\n") + "\u8868: ".concat(err.table || '?', "\n") + "\u9519\u8BEF: ".concat(err.message || '未知', "\n") + (err.code ? "\u4EE3\u7801: ".concat(err.code, "\n") : '') + (err.details ? "\u8BE6\u60C5: ".concat(err.details, "\n") : '') + (err.hint ? "\u63D0\u793A: ".concat(err.hint, "\n") : '') + hint + "\n\nF12 \u63A7\u5236\u53F0\u5DF2\u8BB0\u5F55\u5B8C\u6574\u9519\u8BEF\u65E5\u5FD7");
};

// 🔗 协调员配置 - 接收所有事件的"对接人"
var COORDINATOR_IDS = ['u_liuqiang']; // 谁是协调员，未来可加更多

// 🔗 自动给协调员发工单通知（事件创建时）
function notifyCoordinator(_x, _x2, _x3) {
  return _notifyCoordinator.apply(this, arguments);
} // ============================================================
// 初始员工数据
// ============================================================
function _notifyCoordinator() {
  _notifyCoordinator = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(kind, eventData, creator) {
    var kindLabel, targetId, summary, _ISSUE_TYPES$find, issue, itemsList, _REFUND_TYPES$find, type, ticket, _t8;
    return _regenerator().w(function (_context8) {
      while (1) switch (_context8.p = _context8.n) {
        case 0:
          if (CLOUD.client) {
            _context8.n = 1;
            break;
          }
          return _context8.a(2);
        case 1:
          // 离线模式跳过
          kindLabel = kind === 'aftersale' ? '🔧 售后' : kind === 'refill' ? '📦 补件' : '💰 退款';
          targetId = COORDINATOR_IDS[0];
          summary = '';
          if (kind === 'aftersale') {
            issue = ((_ISSUE_TYPES$find = ISSUE_TYPES.find(function (i) {
              return i.key === eventData.issue_type;
            })) === null || _ISSUE_TYPES$find === void 0 ? void 0 : _ISSUE_TYPES$find.label) || eventData.issue_type;
            summary = "\u95EE\u9898\uFF1A".concat(issue).concat(eventData.damaged_part ? ' · ' + eventData.damaged_part : '', "\n").concat(eventData.issue_detail || '');
          } else if (kind === 'refill') {
            itemsList = (eventData.items || []).map(function (it) {
              return "".concat(it.item || '?', " \xD7 ").concat(it.qty || 1).concat(it.unit || '');
            }).join('，');
            summary = "\u8865\u4EF6\u6E05\u5355\uFF1A".concat(itemsList);
          } else if (kind === 'refund') {
            type = ((_REFUND_TYPES$find = REFUND_TYPES.find(function (t) {
              return t.key === eventData.refund_type;
            })) === null || _REFUND_TYPES$find === void 0 ? void 0 : _REFUND_TYPES$find.label) || eventData.refund_type;
            summary = "".concat(type, " \xB7 ").concat(eventData.currency, " ").concat(parseFloat(eventData.amount).toFixed(2), "\n").concat(eventData.refund_reason || '');
          }
          ticket = {
            id: 'tk_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
            title: "".concat(kindLabel, " \xB7 ").concat(eventData.order_ref || '').concat(eventData.supplier_name ? ' · ' + eventData.supplier_name : ''),
            content: "\u3010\u81EA\u52A8\u540C\u6B65\u3011".concat(creator.name).concat(creator.alias ? ' ' + creator.alias : '', " \u521B\u5EFA\u4E86\u4E00\u6761").concat(kindLabel, "\u4E8B\u4EF6\n\n\u8BA2\u5355\u53F7\uFF1A").concat(eventData.order_ref || '-', "\n\u5BA2\u6237\uFF1A").concat(eventData.customer || '-', "\n\u4F9B\u5E94\u5546\uFF1A").concat(eventData.supplier_name || '-', "\n\n").concat(summary, "\n\n\uD83D\uDCA1 \u70B9\u51FB\u300C\uD83D\uDCCB \u5DE5\u4F5C\u4E3B\u7EBF\u300Dtab \u67E5\u770B\u5B8C\u6574\u4E8B\u4EF6\uFF08\u542B\u56FE\u7247\uFF09"),
            priority: kind === 'refund' ? 'high' : 'normal',
            department: 'coordination',
            from_id: creator.id,
            from_name: creator.name + (creator.alias ? ' ' + creator.alias : ''),
            target_id: targetId,
            target_name: '刘强',
            status: 'pending',
            event_ref: eventData.id ? "".concat(kind, ":").concat(eventData.id) : null,
            auto_synced: true,
            // 标记为自动同步，方便筛选
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          };
          _context8.p = 2;
          if (CLOUD.client) {
            _context8.n = 3;
            break;
          }
          return _context8.a(2);
        case 3:
          _context8.n = 4;
          return CLOUD.client.from('workspace_tickets').upsert(ticket);
        case 4:
          _context8.n = 6;
          break;
        case 5:
          _context8.p = 5;
          _t8 = _context8.v;
          console.warn('自动通知协调员失败:', _t8.message);
          // 不阻塞主流程
        case 6:
          return _context8.a(2);
      }
    }, _callee8, null, [[2, 5]]);
  }));
  return _notifyCoordinator.apply(this, arguments);
}
var INITIAL_EMPLOYEES = [
// 👑 客服部总管 (super_admin) — 管所有客服人员包括 Miya
{
  id: 'u_nicole',
  name: '李彬桦',
  alias: 'Nicole',
  sites: '全部门',
  role: 'super_admin',
  password: 'admin123',
  title: '客服部主管'
},
// 客服主管
{
  id: 'u_miya',
  name: '邱琴方',
  alias: 'Miya',
  sites: 'VK',
  role: 'admin',
  password: 'admin123',
  title: '客服主管'
},
// 客服员工
{
  id: 'u_hazelle',
  name: '杨佳欢',
  alias: 'Hazelle',
  sites: 'DC+海服',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_tan',
  name: '谭燕灵',
  alias: '',
  sites: 'VK',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_sally',
  name: '区栩灵',
  alias: 'Sally',
  sites: 'J+DF+LS+RS',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_aletta',
  name: '冯恩桐',
  alias: 'Aletta',
  sites: '处理拒付+VK',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_tammy',
  name: '伍家家',
  alias: 'Tammy',
  sites: '处理拒付+VK',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_yulia',
  name: '陶艳巧',
  alias: 'Yulia',
  sites: 'RD, PL, MO',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_ashley',
  name: '侯泳珊',
  alias: 'Ashley',
  sites: '',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_abby',
  name: '张宣霞',
  alias: 'Abby',
  sites: 'VK',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_luna',
  name: '杨甜',
  alias: 'Luna',
  sites: '',
  role: 'staff',
  password: '123456'
}, {
  id: 'u_hannah',
  name: '聂诗俣',
  alias: 'Hannah',
  sites: '',
  role: 'staff',
  password: '123456'
},
// 💰 财务部 — 运费对账岗位
{
  id: 'u_kuang',
  name: '邝雅琦',
  alias: '',
  sites: '财务·运费对账',
  role: 'finance',
  password: 'finance123',
  title: '财务·运费对账'
}, {
  id: 'u_jiang',
  name: '江春芸',
  alias: '',
  sites: '财务·运费对账',
  role: 'finance',
  password: 'finance123',
  title: '财务·运费对账'
},
// 🔗 协调员 — 对接工厂/客服/跟单/供应商，所有功能全开放
{
  id: 'u_liuqiang',
  name: '刘强',
  alias: '',
  sites: '对接工厂·客服',
  role: 'admin',
  password: 'admin123',
  title: '对接工厂·客服'
},
// 🆕 北简客服团队 (13 人) — 默认 staff,所有基础权限默认打开,主管可后期调整
{
  id: 'u_bj_vinnie',
  name: '孙倩',
  alias: 'Vinnie',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_lily',
  name: '林燕清',
  alias: 'Lily',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_diana',
  name: '吴晓琳',
  alias: 'Diana',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_jenny',
  name: '区嘉怡',
  alias: 'Jenny',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_sine',
  name: '刘惜真',
  alias: 'Sine',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_lianzi',
  name: '罗桓连',
  alias: 'Lianzi',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_echo',
  name: '侯成',
  alias: 'Echo',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_joyce',
  name: '李淑婷',
  alias: 'Joyce',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_madison',
  name: '冯家颖',
  alias: 'Madison',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_vera',
  name: '陈慧容',
  alias: 'Vera',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_selina',
  name: '陈美娟',
  alias: 'Selina',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_jane',
  name: '陈洁嫦',
  alias: 'Jane',
  sites: '北简',
  role: 'staff',
  password: '123456',
  team: '北简'
}, {
  id: 'u_bj_chenliqiong',
  name: '陈丽琼',
  alias: 'BJ_PD',
  sites: '北简·产品',
  role: 'staff',
  password: '123456',
  team: '北简',
  title: '北简 BJ_PD · 产品'
},
// 🔒 老板 1（不在登录列表显示，需要从右下角"🔐 管理员"入口登录）
{
  id: 'u_martin',
  name: 'Martin',
  alias: '',
  sites: 'CEO',
  role: 'super_admin',
  password: 'qq923923',
  title: 'CEO · 创始人',
  hideFromList: true
},
// 🔒 老板 2（不在登录列表显示，需要从右下角"🔐 管理员"入口登录 · 与 Martin 同权）
{
  id: 'u_luoyanqiu',
  name: '罗燕秋',
  alias: '',
  sites: '老板',
  role: 'super_admin',
  password: 'qq923923',
  title: '老板 · 角色管理',
  hideFromList: true
}];
var CATEGORIES = ['咨询', '物流', '查单', '核实', '安装说明', '改地址', '退货', '报价', '售后', '补发', '取消订单', '定制咨询', '实拍', '拒付', '加急', '邮件查询', '价格', '运费', '定金', '库存', '工厂进度', '质量问题', '图片提供', '样品', '促销活动'];
var SITES = ['MJ', 'DC', 'VK', 'DF', 'LS', 'RS', 'MH', 'PL', 'MO', 'RD', '海服']; // 🆕 fix51: J → MH (Mooiehome 取代 JaneDecor)

// 🆕 fix82: 订单号前缀 → 网站 兜底映射
// 客服常只填订单号(如 RD16893 / MJ6099 / V105171)忘了选网站下拉,
// 这张表让看板/统计能从订单号前缀自动推断网站。**前缀含义请核对**(尤其 V)。
// 注意:仅用于显示/统计兜底,不会覆盖已保存的 website 字段。
var ORDER_PREFIX_TO_SITE = {
  RD: 'RD',
  MJ: 'MJ',
  VK: 'VK',
  DC: 'DC',
  DF: 'DF',
  LS: 'LS',
  RS: 'RS',
  MH: 'MH',
  PL: 'PL',
  MO: 'MO',
  V: 'VK',
  K: 'VK' // 🆕 fix92: V / K 前缀 = VK 网站
};
// 从订单号/备注里抽取开头连续字母,优先匹配 2 字母前缀,再退 1 字母
function siteFromOrderRef(ref) {
  if (!ref) return '';
  var m = String(ref).trim().match(/^([A-Za-z]{1,3})/);
  if (!m) return '';
  var letters = m[1].toUpperCase();
  if (ORDER_PREFIX_TO_SITE[letters]) return ORDER_PREFIX_TO_SITE[letters];
  if (letters.length >= 2 && ORDER_PREFIX_TO_SITE[letters.slice(0, 2)]) return ORDER_PREFIX_TO_SITE[letters.slice(0, 2)];
  if (ORDER_PREFIX_TO_SITE[letters[0]]) return ORDER_PREFIX_TO_SITE[letters[0]];
  return '';
}
// 全局 helper(切片后跨 .js 可用)
if (typeof window !== 'undefined') window.__siteFromOrderRef = siteFromOrderRef;

// 🆕 fix22 联动 3: 网站 Context — 让自定义网站出现在所有下拉里
// 内置 SITES 永远在前,自定义网站按代码追加
var SitesContext = createContext({
  siteCodes: SITES,
  customSites: [],
  refresh: function refresh() {}
});
var useSiteCodes = function useSiteCodes() {
  return useContext(SitesContext).siteCodes;
};
var useCustomSites = function useCustomSites() {
  return useContext(SitesContext).customSites;
};

// 🆕 fix22 联动 1: 产品 Context — 让产品主表全局可访问,用于 SKU 联想
var ProductsContext = createContext({
  products: [],
  refresh: function refresh() {}
});
var useProducts = function useProducts() {
  return useContext(ProductsContext).products;
};
var STATUSES = [{
  key: 'pending',
  label: '待处理',
  cls: 'status-pending'
}, {
  key: 'following',
  label: '跟进中',
  cls: 'status-following'
}, {
  key: 'waiting',
  label: '等客户',
  cls: 'status-waiting'
}, {
  key: 'resolved',
  label: '已解决',
  cls: 'status-resolved'
}, {
  key: 'transferred',
  label: '已转交',
  cls: 'status-resolved'
}];

// 🆕 判断记录是否"有内容"（避免空白行被自动保存/统计）
var isRecordMeaningful = function isRecordMeaningful(r) {
  if (!r) return false;
  return !!((r.customer || '').trim() || (r.orderRef || '').trim() || (r.note || '').trim() || (r.startTime || '').trim() || (r.endTime || '').trim() || (r.category || '').trim() || (r.nextFollowUp || '').trim() || (r.site || '').trim() || r.screenshots && r.screenshots.length > 0 || r.followUps && r.followUps.length > 0 || r.escalated || r.transferHistory && r.transferHistory.length > 0);
};

// 🆕 售后问题类型
var ISSUE_TYPES = [{
  key: 'transport_damage',
  label: '运输损坏',
  color: '#dc2626'
}, {
  key: 'functional_defect',
  label: '功能性缺陷',
  color: '#ea580c'
}, {
  key: 'appearance_flaw',
  label: '外观瑕疵',
  color: '#ca8a04'
}, {
  key: 'missing_parts',
  label: '缺件',
  color: '#7c3aed'
}, {
  key: 'wrong_shipment',
  label: '错发',
  color: '#0369a1'
}, {
  key: 'color_diff',
  label: '颜色色差',
  color: '#db2777'
}, {
  key: 'size_issue',
  label: '尺寸问题',
  color: '#0891b2'
}, {
  key: 'other',
  label: '其他',
  color: '#525252'
}];

// ============================================================
// 📨 跨部门协作 (Cross-Dept Messages) — 共享消息总线
// 美工 / 客服 / 跟单 三系统共用美工的 Supabase 项目 (xyhbwqugbnowfjuhqhsj)
// 客服系统本地 Supabase 不动,仅额外加一个 cdmClient 专门读写 cross_dept_messages
// ============================================================
var MESSAGEBUS_URL = "https://xyhbwqugbnowfjuhqhsj.supabase.co";
var MESSAGEBUS_KEY = "sb_publishable_Z0dXXZivG5QI-FCbwELxEA_JZBNx2Hn";

// 懒加载 — 第一次用的时候才 createClient,避免页面加载时同时建两个 client
var _cdmClient = null;
var getCdmClient = function getCdmClient() {
  if (_cdmClient) return _cdmClient;
  if (typeof window === 'undefined' || !window.supabase) return null;
  try {
    _cdmClient = window.supabase.createClient(MESSAGEBUS_URL, MESSAGEBUS_KEY);
    return _cdmClient;
  } catch (e) {
    console.error('[CDM] 初始化消息总线 client 失败', e);
    return null;
  }
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix62 v5: 三系统共享人员目录 org_directory(跟 cross_dept_messages 同库)
// 客服系统 system='cs' · 发布本系统人员 + 读全部门人员做接收人下拉
// ════════════════════════════════════════════════════════════════════
var ORG_SYSTEM = 'cs'; // 客服系统标识(跟单系统改 'po')

// 发布本系统人员到共享目录(upsert,不删人用 active=false)
function publishMyStaff(_x4, _x5) {
  return _publishMyStaff.apply(this, arguments);
} // 读共享目录(全部门所有人)
function _publishMyStaff() {
  _publishMyStaff = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(staffList, updatedBy) {
    var client, rows, _yield$client$from$up, error;
    return _regenerator().w(function (_context9) {
      while (1) switch (_context9.n) {
        case 0:
          client = getCdmClient();
          if (client) {
            _context9.n = 1;
            break;
          }
          throw new Error('消息总线未初始化');
        case 1:
          rows = staffList.map(function (s, i) {
            return {
              id: "".concat(ORG_SYSTEM, "_").concat(s.id),
              staff_id: s.id,
              name: s.name + (s.alias ? ' ' + s.alias : ''),
              system: ORG_SYSTEM,
              role: s.title || (s.role === 'super_admin' ? '客服部主管' : s.role === 'admin' ? '客服主管' : s.role === 'finance' ? '财务' : '客服'),
              department: s.team || s.sites || null,
              active: s.active !== false && !s.disabled,
              sort_order: i,
              updated_at: new Date().toISOString(),
              updated_by: updatedBy || 'system'
            };
          });
          _context9.n = 2;
          return client.from('org_directory').upsert(rows, {
            onConflict: 'id'
          });
        case 2:
          _yield$client$from$up = _context9.v;
          error = _yield$client$from$up.error;
          if (!error) {
            _context9.n = 3;
            break;
          }
          throw error;
        case 3:
          return _context9.a(2, rows.length);
      }
    }, _callee9);
  }));
  return _publishMyStaff.apply(this, arguments);
}
function loadOrgDirectory() {
  return _loadOrgDirectory.apply(this, arguments);
}
function _loadOrgDirectory() {
  _loadOrgDirectory = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
    var client, _yield$client$from$se, data, error;
    return _regenerator().w(function (_context0) {
      while (1) switch (_context0.n) {
        case 0:
          client = getCdmClient();
          if (client) {
            _context0.n = 1;
            break;
          }
          return _context0.a(2, []);
        case 1:
          _context0.n = 2;
          return client.from('org_directory').select('*').order('sort_order', {
            ascending: true
          });
        case 2:
          _yield$client$from$se = _context0.v;
          data = _yield$client$from$se.data;
          error = _yield$client$from$se.error;
          if (!error) {
            _context0.n = 3;
            break;
          }
          console.error('[org_directory] 读取失败', error);
          return _context0.a(2, []);
        case 3:
          return _context0.a(2, (data || []).map(function (r) {
            return {
              id: r.id,
              staffId: r.staff_id,
              name: r.name,
              system: r.system,
              role: r.role,
              department: r.department,
              active: r.active !== false,
              sortOrder: r.sort_order
            };
          }));
      }
    }, _callee0);
  }));
  return _loadOrgDirectory.apply(this, arguments);
}
if (typeof window !== 'undefined') {
  window.publishMyStaff = publishMyStaff;
  window.loadOrgDirectory = loadOrgDirectory;
}

// ════════════════════════════════════════════════════════════════════
// 🆕 fix49: WorkTrack-KPI 跨系统 client(对接拍摄部 photo_logs 表)
// 默认配置已硬编码 (Martin 提供的 publishable key,安全靠 RLS)
// ⚙ 设置中心可覆盖(若 Martin 换 key)
// ════════════════════════════════════════════════════════════════════
var WTKPI_DEFAULT_URL = 'https://xyhbwqugbnowfjuhqhsj.supabase.co';
var WTKPI_DEFAULT_KEY = 'sb_publishable_Z0dXXZivG5QI-FCbwELxEA_JZBNx2Hn';
var _wtkpiClient = null;
var _wtkpiClientKey = null; // 用于检测配置变化
var getWtkpiClient = function getWtkpiClient() {
  // 优先 localStorage 覆盖,否则用默认
  var lsUrl = typeof localStorage !== 'undefined' && localStorage.getItem('wtkpi_url') || '';
  var lsKey = typeof localStorage !== 'undefined' && localStorage.getItem('wtkpi_key') || '';
  var url = lsUrl || WTKPI_DEFAULT_URL;
  var key = lsKey || WTKPI_DEFAULT_KEY;
  if (!url || !key) return null;
  var cacheKey = url + '|' + key;
  if (_wtkpiClient && _wtkpiClientKey === cacheKey) return _wtkpiClient;
  if (typeof window === 'undefined' || !window.supabase) return null;
  try {
    _wtkpiClient = window.supabase.createClient(url, key);
    _wtkpiClientKey = cacheKey;
    return _wtkpiClient;
  } catch (e) {
    console.error('[WTKPI] 初始化拍摄部 client 失败', e);
    return null;
  }
};
var isWtkpiConfigured = function isWtkpiConfigured() {
  // 有默认值就永远算"已配置"
  return !!(WTKPI_DEFAULT_URL && WTKPI_DEFAULT_KEY);
};

// 🆕 fix49: 上传图片到 WorkTrack-KPI Storage `attachments` bucket,自动压缩 < 1600px
function uploadAttachmentToWtkpi(_x6) {
  return _uploadAttachmentToWtkpi.apply(this, arguments);
} // 🆕 fix49: 通用图片压缩(类似 quotation 的 compressImageFile,但通用)
function _uploadAttachmentToWtkpi() {
  _uploadAttachmentToWtkpi = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(file) {
    var client, compressed, ext, path, _yield$client$storage, error, _client$storage$from$, publicUrl;
    return _regenerator().w(function (_context1) {
      while (1) switch (_context1.n) {
        case 0:
          client = getWtkpiClient();
          if (client) {
            _context1.n = 1;
            break;
          }
          throw new Error('拍摄部 Supabase 未配置 — 请进 ⚙ 设置中心配置');
        case 1:
          _context1.n = 2;
          return compressImageForUpload(file, 1600, 0.85);
        case 2:
          compressed = _context1.v;
          ext = (file.name || 'img.png').split('.').pop() || 'png';
          path = "cs-requests/".concat(Date.now(), "-").concat(crypto.randomUUID().slice(0, 8), ".").concat(ext);
          _context1.n = 3;
          return client.storage.from('attachments').upload(path, compressed, {
            upsert: false,
            contentType: compressed.type || file.type || 'image/jpeg'
          });
        case 3:
          _yield$client$storage = _context1.v;
          error = _yield$client$storage.error;
          if (!error) {
            _context1.n = 4;
            break;
          }
          throw error;
        case 4:
          _client$storage$from$ = client.storage.from('attachments').getPublicUrl(path), publicUrl = _client$storage$from$.data.publicUrl;
          return _context1.a(2, {
            name: file.name || 'screenshot.png',
            url: publicUrl,
            mime: compressed.type || file.type || 'image/jpeg',
            // 🆕 fix72: 三方统一附件结构需要 mime
            size: compressed.size || file.size || 0,
            uploaded_at_ms: Date.now()
          });
      }
    }, _callee1);
  }));
  return _uploadAttachmentToWtkpi.apply(this, arguments);
}
function compressImageForUpload(_x7, _x8, _x9) {
  return _compressImageForUpload.apply(this, arguments);
} // 🆕 fix49: 提交一个拍摄需求 — 写入 photo_logs 表
function _compressImageForUpload() {
  _compressImageForUpload = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(file, maxWidth, quality) {
    return _regenerator().w(function (_context10) {
      while (1) switch (_context10.n) {
        case 0:
          return _context10.a(2, new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function (e) {
              var img = new Image();
              img.onload = function () {
                var canvas = document.createElement('canvas');
                var w = img.width,
                  h = img.height;
                if (w > maxWidth) {
                  h = h * maxWidth / w;
                  w = maxWidth;
                }
                canvas.width = w;
                canvas.height = h;
                canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                canvas.toBlob(function (blob) {
                  if (blob) resolve(new File([blob], file.name, {
                    type: 'image/jpeg'
                  }));else reject(new Error('压缩失败'));
                }, 'image/jpeg', quality);
              };
              img.onerror = function () {
                return reject(new Error('图片加载失败'));
              };
              img.src = e.target.result;
            };
            reader.onerror = function () {
              return reject(new Error('文件读取失败'));
            };
            reader.readAsDataURL(file);
          }));
      }
    }, _callee10);
  }));
  return _compressImageForUpload.apply(this, arguments);
}
function submitPhotoRequest(_x0) {
  return _submitPhotoRequest.apply(this, arguments);
} // 🆕 fix49: 列出当前用户提的所有需求 / 全部需求(主管视角)
// 🆕 fix53 v3: 列出全部 photo_logs(不过滤 source),客户端按 sub-tab 筛选
function _submitPhotoRequest() {
  _submitPhotoRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(_ref3) {
    var productName, sku, productImage, applicableShops, currentUser, reason, urgency, attachments, externalRefId, client, now, row, _yield$client$from$in, data, error;
    return _regenerator().w(function (_context11) {
      while (1) switch (_context11.n) {
        case 0:
          productName = _ref3.productName, sku = _ref3.sku, productImage = _ref3.productImage, applicableShops = _ref3.applicableShops, currentUser = _ref3.currentUser, reason = _ref3.reason, urgency = _ref3.urgency, attachments = _ref3.attachments, externalRefId = _ref3.externalRefId;
          client = getWtkpiClient();
          if (client) {
            _context11.n = 1;
            break;
          }
          throw new Error('拍摄部 Supabase 未配置');
        case 1:
          now = Date.now();
          row = {
            id: crypto.randomUUID(),
            // 🚨 关键:必须 UUID,不能用短串
            product_name: productName,
            sku: sku || null,
            product_image: productImage || null,
            applicable_shops: applicableShops || [],
            product_type: '客服需求',
            product_notes: null,
            status: 'draft',
            priority: urgency === 'urgent' ? 'urgent' : 'normal',
            notes: null,
            external_request: {
              source: '客服',
              from_name: currentUser.name + (currentUser.alias ? ' ' + currentUser.alias : ''),
              from_user_id: currentUser.id,
              from_dept: '客服部',
              reason: reason,
              urgency: urgency || 'normal',
              attachments: attachments || [],
              created_at_ms: now,
              external_ref_id: externalRefId || null
            },
            // 🚨 关键:NOT NULL 审计字段,不能漏
            created_by_id: currentUser.id,
            created_by_name: currentUser.name + (currentUser.alias ? ' ' + currentUser.alias : ''),
            created_at_ms: now,
            updated_at: new Date().toISOString()
          };
          _context11.n = 2;
          return client.from('photo_logs').insert(row).select().single();
        case 2:
          _yield$client$from$in = _context11.v;
          data = _yield$client$from$in.data;
          error = _yield$client$from$in.error;
          if (!error) {
            _context11.n = 3;
            break;
          }
          throw error;
        case 3:
          return _context11.a(2, data);
      }
    }, _callee11);
  }));
  return _submitPhotoRequest.apply(this, arguments);
}
function listPhotoRequests() {
  return _listPhotoRequests.apply(this, arguments);
} // 🆕 fix53 v3: 协作编辑产品基础字段(merge,不覆盖)
function _listPhotoRequests() {
  _listPhotoRequests = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
    var client, _yield$client$from$se2, data, error;
    return _regenerator().w(function (_context12) {
      while (1) switch (_context12.n) {
        case 0:
          client = getWtkpiClient();
          if (client) {
            _context12.n = 1;
            break;
          }
          return _context12.a(2, []);
        case 1:
          _context12.n = 2;
          return client.from('photo_logs').select('*').order('updated_at', {
            ascending: false
          }).limit(500);
        case 2:
          _yield$client$from$se2 = _context12.v;
          data = _yield$client$from$se2.data;
          error = _yield$client$from$se2.error;
          if (!error) {
            _context12.n = 3;
            break;
          }
          console.error('[WTKPI] 拉需求列表失败', error);
          return _context12.a(2, []);
        case 3:
          return _context12.a(2, data || []);
      }
    }, _callee12);
  }));
  return _listPhotoRequests.apply(this, arguments);
}
function updatePhotoRequestBasics(_x1, _x10) {
  return _updatePhotoRequestBasics.apply(this, arguments);
} // 🆕 fix53 v3: 追加附件/补充原因(merge external_request,不覆盖)
function _updatePhotoRequestBasics() {
  _updatePhotoRequestBasics = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(logId, basics) {
    var client, allowed, clean, _i, _allowed, k, _yield$client$from$up2, error;
    return _regenerator().w(function (_context13) {
      while (1) switch (_context13.n) {
        case 0:
          client = getWtkpiClient();
          if (client) {
            _context13.n = 1;
            break;
          }
          throw new Error('拍摄部 Supabase 未配置');
        case 1:
          allowed = ['product_name', 'sku', 'product_image', 'applicable_shops', 'product_type', 'product_notes'];
          clean = {};
          for (_i = 0, _allowed = allowed; _i < _allowed.length; _i++) {
            k = _allowed[_i];
            if (basics[k] !== undefined) clean[k] = basics[k];
          }
          clean.updated_at = new Date().toISOString();
          _context13.n = 2;
          return client.from('photo_logs').update(clean).eq('id', logId);
        case 2:
          _yield$client$from$up2 = _context13.v;
          error = _yield$client$from$up2.error;
          if (!error) {
            _context13.n = 3;
            break;
          }
          throw error;
        case 3:
          return _context13.a(2);
      }
    }, _callee13);
  }));
  return _updatePhotoRequestBasics.apply(this, arguments);
}
function appendToPhotoRequest(_x11, _x12) {
  return _appendToPhotoRequest.apply(this, arguments);
} // 🆕 fix53 v3: 批量录入 — 客服汇总员一次提交多条
function _appendToPhotoRequest() {
  _appendToPhotoRequest = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(logId, additions) {
    var _additions$attachment;
    var client, _yield$client$from$se3, row, e1, current, merged, _yield$client$from$up3, e2;
    return _regenerator().w(function (_context14) {
      while (1) switch (_context14.n) {
        case 0:
          client = getWtkpiClient();
          if (client) {
            _context14.n = 1;
            break;
          }
          throw new Error('拍摄部 Supabase 未配置');
        case 1:
          _context14.n = 2;
          return client.from('photo_logs').select('external_request').eq('id', logId).single();
        case 2:
          _yield$client$from$se3 = _context14.v;
          row = _yield$client$from$se3.data;
          e1 = _yield$client$from$se3.error;
          if (!e1) {
            _context14.n = 3;
            break;
          }
          throw e1;
        case 3:
          current = row.external_request || {};
          merged = _objectSpread({}, current);
          if ((_additions$attachment = additions.attachments) !== null && _additions$attachment !== void 0 && _additions$attachment.length) {
            merged.attachments = [].concat(_toConsumableArray(current.attachments || []), _toConsumableArray(additions.attachments));
          }
          if (additions.reason_append) {
            merged.reason = (current.reason || '') + "\n\n--- ".concat(new Date().toLocaleDateString('zh-CN'), " \u8865\u5145(").concat(additions.editor_name || '', ") ---\n") + additions.reason_append;
          }
          if (additions.urgency) merged.urgency = additions.urgency;
          _context14.n = 4;
          return client.from('photo_logs').update({
            external_request: merged,
            updated_at: new Date().toISOString()
          }).eq('id', logId);
        case 4:
          _yield$client$from$up3 = _context14.v;
          e2 = _yield$client$from$up3.error;
          if (!e2) {
            _context14.n = 5;
            break;
          }
          throw e2;
        case 5:
          return _context14.a(2);
      }
    }, _callee14);
  }));
  return _appendToPhotoRequest.apply(this, arguments);
}
function batchSubmitPhotoRequests(_x13, _x14, _x15) {
  return _batchSubmitPhotoRequests.apply(this, arguments);
} // 暴露到 window,方便 React 组件调用
function _batchSubmitPhotoRequests() {
  _batchSubmitPhotoRequests = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(rows, defaults, currentUser) {
    var client, now, batchId, inserts, results, succeeded, failed, errors;
    return _regenerator().w(function (_context15) {
      while (1) switch (_context15.n) {
        case 0:
          client = getWtkpiClient();
          if (client) {
            _context15.n = 1;
            break;
          }
          throw new Error('拍摄部 Supabase 未配置');
        case 1:
          now = Date.now();
          batchId = crypto.randomUUID();
          inserts = rows.map(function (r) {
            var _rowAttachments$;
            var rowAttachments = Array.isArray(r.attachments) ? r.attachments : [];
            return {
              id: crypto.randomUUID(),
              product_name: r.productName || '(未填)',
              sku: r.sku || null,
              // 🆕 fix56: 如果该行有图,第一张作为 product_image 缩略图(便于列表显示)
              product_image: ((_rowAttachments$ = rowAttachments[0]) === null || _rowAttachments$ === void 0 ? void 0 : _rowAttachments$.url) || null,
              applicable_shops: r.applicableShops || defaults.applicableShops || [],
              product_type: '客服需求',
              status: 'draft',
              priority: (r.urgency || defaults.urgency) === 'urgent' ? 'urgent' : 'normal',
              external_request: {
                source: '客服',
                from_name: currentUser.name + (currentUser.alias ? ' ' + currentUser.alias : ''),
                from_user_id: currentUser.id,
                from_dept: '客服部',
                reason: (defaults.reasonPrefix ? defaults.reasonPrefix + ' · ' : '') + (r.reason || ''),
                urgency: r.urgency || defaults.urgency || 'normal',
                // 🆕 fix56: 把该行所有附件传过去
                attachments: rowAttachments,
                created_at_ms: now,
                external_ref_id: null,
                batch_id: batchId
              },
              created_by_id: currentUser.id,
              created_by_name: currentUser.name + (currentUser.alias ? ' ' + currentUser.alias : ''),
              created_at_ms: now,
              updated_at: new Date().toISOString()
            };
          });
          _context15.n = 2;
          return Promise.allSettled(inserts.map(function (row) {
            return client.from('photo_logs').insert(row);
          }));
        case 2:
          results = _context15.v;
          succeeded = results.filter(function (r) {
            return r.status === 'fulfilled' && !r.value.error;
          }).length;
          failed = results.length - succeeded;
          errors = results.filter(function (r) {
            var _r$value;
            return r.status === 'rejected' || ((_r$value = r.value) === null || _r$value === void 0 ? void 0 : _r$value.error);
          }).map(function (r) {
            var _r$reason, _r$value2;
            return ((_r$reason = r.reason) === null || _r$reason === void 0 ? void 0 : _r$reason.message) || ((_r$value2 = r.value) === null || _r$value2 === void 0 || (_r$value2 = _r$value2.error) === null || _r$value2 === void 0 ? void 0 : _r$value2.message) || 'unknown';
          });
          return _context15.a(2, {
            succeeded: succeeded,
            failed: failed,
            errors: errors,
            batchId: batchId
          });
      }
    }, _callee15);
  }));
  return _batchSubmitPhotoRequests.apply(this, arguments);
}
if (typeof window !== 'undefined') {
  window.getWtkpiClient = getWtkpiClient;
  window.isWtkpiConfigured = isWtkpiConfigured;
  window.uploadAttachmentToWtkpi = uploadAttachmentToWtkpi;
  window.submitPhotoRequest = submitPhotoRequest;
  window.listPhotoRequests = listPhotoRequests;
  window.updatePhotoRequestBasics = updatePhotoRequestBasics;
  window.appendToPhotoRequest = appendToPhotoRequest;
  window.batchSubmitPhotoRequests = batchSubmitPhotoRequests;
}

// ════════════════════════════════════════════════════════════════════
// 🆕 v22-CY: 公司预设网站列表 (13 个 + 其他)
// 三方系统共用 — 避免手输导致 "Vakkerlight" / "vakkerlight" / "vakker light" 拼写不一致
// label 是写入数据库的标准名称
// ════════════════════════════════════════════════════════════════════
var SHOPS_PRESET = [{
  id: 'vakkerlight',
  label: 'Vakkerlight',
  category: '独立站'
}, {
  id: 'docos',
  label: 'Docos.us',
  category: '独立站'
}, {
  id: 'mooijane',
  label: 'Mooijane',
  category: '独立站'
}, {
  id: 'mooiehome',
  label: 'Mooiehome',
  category: '独立站'
}, {
  id: 'radilum',
  label: 'Radilum',
  category: '独立站'
}, {
  id: 'mooielight',
  label: 'Mooielight',
  category: '独立站'
}, {
  id: 'dekorfine',
  label: 'Dekorfine',
  category: '独立站'
}, {
  id: 'pinlighting',
  label: 'Pinlighting',
  category: '独立站'
}, {
  id: 'lumioshine',
  label: 'Lumioshine',
  category: '独立站'
}, {
  id: 'rayonshine',
  label: 'Rayonshine',
  category: '独立站'
}, {
  id: 'alibaba',
  label: '阿里巴巴国际站',
  category: '平台'
}, {
  id: 'radilum-inc',
  label: 'Radilum INC',
  category: '实体公司'
}, {
  id: 'other',
  label: '其他(手填备注)',
  category: '其他'
}];
// 给主管/admin 用的可选网站(去掉"其他"那行 - "其他"是 sentinel 值)
var SHOPS_SELECTABLE = SHOPS_PRESET.filter(function (s) {
  return s.id !== 'other';
});

// ════════════════════════════════════════════════════════════════════
// 🆕 fix57: 邮件模板预置库 — 跨境电商灯具客服 15 个高频场景
// 占位符约定:{{customer_name}} {{order_no}} {{tracking_no}} {{product_name}}
//             {{ship_date}} {{est_delivery}} {{refund_amount}} {{store_name}} {{my_name}}
// ════════════════════════════════════════════════════════════════════
var EMAIL_TEMPLATE_CATEGORIES = [{
  id: 'shipping',
  label: '📦 发货 / 物流',
  color: '#0369a1',
  bg: '#dbeafe'
}, {
  id: 'delay',
  label: '⏰ 延迟 / 缺货',
  color: '#d97706',
  bg: '#fef3c7'
}, {
  id: 'return',
  label: '↩️ 退货 / 退款',
  color: '#a855f7',
  bg: '#f3e8ff'
}, {
  id: 'damage',
  label: '📦 损坏 / 丢失',
  color: '#dc2626',
  bg: '#fee2e2'
}, {
  id: 'inquiry',
  label: '💬 咨询 / 售前',
  color: '#0284c7',
  bg: '#e0f2fe'
}, {
  id: 'thanks',
  label: '❤️ 感谢 / 复购',
  color: '#16a34a',
  bg: '#dcfce7'
}, {
  id: 'review',
  label: '⭐ 评价邀请',
  color: '#ca8a04',
  bg: '#fef9c3'
}, {
  id: 'custom',
  label: '🎨 自定义',
  color: '#86868b',
  bg: '#f5f5f7'
}];
var EMAIL_TEMPLATE_PRESETS = [{
  id: 'tpl_order_confirm',
  category: 'shipping',
  title: '订单确认 · Order Confirmation',
  subject: 'Order #{{order_no}} confirmed — Thanks for choosing {{store_name}}!',
  body: "Hi {{customer_name}},\n\nThanks so much for your order from {{store_name}}! We've received your order #{{order_no}} and our team is preparing it for shipment.\n\nOrder details:\n- {{product_name}}\n- Estimated shipping: within 3-5 business days\n\nYou'll get another email with tracking information as soon as your package ships. If you have any questions in the meantime, just reply to this email \u2014 I'm happy to help.\n\nWarm regards,\n{{my_name}}\n{{store_name}} Customer Care"
}, {
  id: 'tpl_shipped',
  category: 'shipping',
  title: '已发货通知 · Shipped Notification',
  subject: 'Good news — Your order #{{order_no}} is on its way 📦',
  body: "Hi {{customer_name}},\n\nGreat news! Your order #{{order_no}} from {{store_name}} has shipped today ({{ship_date}}).\n\nTracking number: {{tracking_no}}\nEstimated delivery: {{est_delivery}}\n\nYou can track your package here:\n[Tracking link]\n\nPlease allow 24-48 hours for the tracking information to update. If you don't see movement after that, just reply to this email and I'll look into it right away.\n\nThanks for choosing {{store_name}}!\n\n{{my_name}}"
}, {
  id: 'tpl_delay_apology',
  category: 'delay',
  title: '物流延迟道歉 · Shipping Delay',
  subject: 'A quick update on your order #{{order_no}}',
  body: "Hi {{customer_name}},\n\nI want to personally apologize \u2014 your order #{{order_no}} is experiencing an unexpected delay in shipping. I know how frustrating this is, especially when you've been looking forward to receiving your {{product_name}}.\n\nHere's what's happening:\n[Briefly explain the cause \u2014 carrier delay / customs / warehouse]\n\nUpdated estimated delivery: {{est_delivery}}\n\nAs a small thank-you for your patience, I'd like to offer you [discount code / partial refund / free upgrade]. Please let me know if there's anything else I can do to make this right.\n\nSincerely,\n{{my_name}}\n{{store_name}} Customer Care"
}, {
  id: 'tpl_out_of_stock',
  category: 'delay',
  title: '缺货通知 · Out of Stock',
  subject: 'Important update on your order #{{order_no}}',
  body: "Hi {{customer_name}},\n\nThanks so much for your order #{{order_no}}. I'm reaching out because the {{product_name}} you ordered is currently out of stock, and our next shipment isn't expected until {{est_delivery}}.\n\nI want to give you a few options:\n1. Wait for restock \u2014 we'll prioritize your order as soon as inventory arrives\n2. Switch to a similar item \u2014 I can recommend a few alternatives\n3. Full refund \u2014 no questions asked, processed within 24 hours\n\nWhatever works best for you, just let me know and I'll handle it right away.\n\nI'm really sorry for the inconvenience.\n\n{{my_name}}"
}, {
  id: 'tpl_return_approved',
  category: 'return',
  title: '退货已批准 · Return Approved',
  subject: 'Your return request for order #{{order_no}} is approved',
  body: "Hi {{customer_name}},\n\nYour return request for order #{{order_no}} has been approved. Here's what to do next:\n\n1. Pack the {{product_name}} in its original packaging (if available)\n2. Use the prepaid return label attached to this email\n3. Drop off at any [carrier] location\n\nOnce we receive and inspect the item (usually 2-3 business days), your refund of {{refund_amount}} will be processed to your original payment method. Refunds typically appear within 5-10 business days.\n\nIf you have any questions, just reply here.\n\nThanks for being patient,\n{{my_name}}"
}, {
  id: 'tpl_refund_processed',
  category: 'return',
  title: '退款已处理 · Refund Processed',
  subject: 'Your refund of {{refund_amount}} has been processed',
  body: "Hi {{customer_name}},\n\nI'm following up to confirm that your refund of {{refund_amount}} for order #{{order_no}} has been processed today.\n\nDepending on your bank, the funds typically appear in 5-10 business days. If you don't see them after 10 days, please let me know \u2014 sometimes a quick check with your bank helps locate the deposit.\n\nWe really appreciate your patience throughout this process, and I'm sorry the {{product_name}} didn't work out. We hope to have another chance to serve you in the future.\n\nBest,\n{{my_name}}\n{{store_name}}"
}, {
  id: 'tpl_damaged',
  category: 'damage',
  title: '包裹损坏处理 · Damaged Package',
  subject: 'So sorry about your damaged package — let me fix this',
  body: "Hi {{customer_name}},\n\nI'm really sorry to hear that your {{product_name}} arrived damaged. That's definitely not the experience we want for you.\n\nTo resolve this quickly, could you please send a few photos showing:\n1. The outer packaging (if you still have it)\n2. The damaged area on the product\n3. The shipping label\n\nOnce I have those, I can offer you either:\n- A free replacement (we'll ship within 24 hours)\n- A full refund of {{refund_amount}}\n\nWhichever you prefer is fine \u2014 just let me know.\n\nAgain, my sincere apologies,\n{{my_name}}"
}, {
  id: 'tpl_lost_package',
  category: 'damage',
  title: '包裹丢失 · Lost Package',
  subject: 'Looking into your missing package — order #{{order_no}}',
  body: "Hi {{customer_name}},\n\nThanks for letting me know that your package (order #{{order_no}}) hasn't arrived. I checked the tracking and I can see it shows {{tracking_no}} stuck at [last scan location] since [date].\n\nI've opened an investigation with the carrier \u2014 they'll typically respond within 5-7 business days. In the meantime, I want to make sure you're not left waiting, so I'm going to:\n\n[Option A \u2014 ship replacement now]\nShip a replacement of your {{product_name}} today. If the original turns up, you can keep it as a thank-you for your patience.\n\n[Option B \u2014 refund]\nProcess a full refund of {{refund_amount}} now while we investigate.\n\nJust reply with which one you'd prefer.\n\nTruly sorry for the trouble,\n{{my_name}}"
}, {
  id: 'tpl_product_inquiry',
  category: 'inquiry',
  title: '产品咨询回复 · Product Inquiry',
  subject: 'Re: Your question about {{product_name}}',
  body: "Hi {{customer_name}},\n\nThanks so much for reaching out about the {{product_name}}! I'd love to help you decide if it's the right fit.\n\nHere are the key specs:\n- Dimensions: [W \xD7 H \xD7 D]\n- Material: [brass / iron / glass / fabric]\n- Bulb: [E26 / E12 / included or not]\n- Voltage: 110V (US/Canada)\n- Dimmable: [yes/no \u2014 works with standard dimmers]\n\nA few customer favorites:\n- [most common use case]\n- [popular pairing or matching item]\n\nIf you have any other questions \u2014 about installation, dimensions, or matching pieces \u2014 I'm here to help. Just hit reply.\n\nWarm regards,\n{{my_name}}"
}, {
  id: 'tpl_shipping_cost',
  category: 'inquiry',
  title: '运费咨询 · Shipping Cost Question',
  subject: 'Re: Shipping to your address',
  body: "Hi {{customer_name}},\n\nThanks for your question! Here's a quick breakdown of shipping for your area:\n\n- Standard shipping (5-8 business days): Free on orders over $99 (or $9.99 below that)\n- Expedited shipping (2-3 business days): $24.99\n- Priority shipping (1-2 business days): $39.99\n\nAll orders ship from our [California / fulfillment center] and include full tracking. We'll send you the tracking number as soon as your order leaves the warehouse.\n\nIf you're shopping for a specific date \u2014 like a housewarming or move-in \u2014 let me know and I can recommend the best option.\n\nBest,\n{{my_name}}"
}, {
  id: 'tpl_customs',
  category: 'inquiry',
  title: '关税说明 · Customs / Duties',
  subject: 'About customs and duties for your order',
  body: "Hi {{customer_name}},\n\nGreat question about customs! Here's what you need to know:\n\nFor shipments to [Canada / EU / UK / Australia]:\n- Most orders under [threshold] are duty-free\n- Above that, the carrier (UPS/FedEx/DHL) collects duties on delivery\n- We unfortunately can't prepay these on your behalf\n\nThe good news: duty amounts are typically small \u2014 usually under [X%] of the order value. The carrier will let you know the exact amount before delivery.\n\nIf you have any other questions about international shipping, I'm happy to help.\n\nCheers,\n{{my_name}}"
}, {
  id: 'tpl_thank_you',
  category: 'thanks',
  title: '购买感谢 · Thank You',
  subject: 'Just wanted to say thank you 💛',
  body: "Hi {{customer_name}},\n\nI just wanted to take a moment to say thanks for choosing {{store_name}}. As a [small / family-owned] business, every order really does mean a lot to us.\n\nYour {{product_name}} should be arriving soon \u2014 and we hope it brings you years of warm light and good memories.\n\nIf you ever need anything \u2014 installation tips, matching pieces, or just have a question \u2014 feel free to reply here directly. I personally read every message.\n\nWarmly,\n{{my_name}}\n{{store_name}}"
}, {
  id: 'tpl_review_request',
  category: 'review',
  title: '邀请评价 · Review Request',
  subject: 'How are you liking your {{product_name}}?',
  body: "Hi {{customer_name}},\n\nIt's been about a week since your {{product_name}} arrived, and I wanted to check in \u2014 how is it working out for you?\n\nIf you're loving it, I'd be so grateful if you could share a quick review \u2014 even one sentence and a photo helps other shoppers a lot. Here's where to leave one:\n\n[Review link]\n\nAnd if there's anything that's not quite right, please let me know and I'll personally make sure we fix it.\n\nThanks so much,\n{{my_name}}\n{{store_name}}"
}, {
  id: 'tpl_repurchase_discount',
  category: 'thanks',
  title: '老客户回购折扣 · Repurchase Discount',
  subject: 'A little thank-you from {{store_name}} 💝',
  body: "Hi {{customer_name}},\n\nI noticed you ordered from us a while back, and I just wanted to reach out personally to say thanks for supporting our shop.\n\nAs a small thank-you, I'd love to offer you 15% off your next order with code: WELCOME15\n\nIt's good on anything in the store \u2014 no minimum, no expiration on items already in your cart.\n\nIf there's something specific you've been eyeing, just hit reply and I can help you with sizing, finishes, or matching pieces.\n\nCheers,\n{{my_name}}"
}, {
  id: 'tpl_dispute_response',
  category: 'return',
  title: 'PayPal Dispute 回复 · Dispute Response',
  subject: 'Re: PayPal case for order #{{order_no}}',
  body: "Hi {{customer_name}},\n\nI noticed you opened a PayPal case for order #{{order_no}}. I want to make sure we resolve this directly \u2014 no need to wait for the PayPal process.\n\nCould you let me know specifically what went wrong? Was it a delivery issue, a product issue, or something else? Once I understand what happened, I can typically resolve it within 24 hours \u2014 usually with a refund, replacement, or partial credit.\n\nIf you can close the PayPal case and just reply to this email, that's the fastest path. Otherwise, I'll respond directly through PayPal \u2014 but the process there usually takes 2-3 weeks longer.\n\nEither way, I'm here to fix this.\n\nBest,\n{{my_name}}\n{{store_name}}"
}];

// ════════════════════════════════════════════════════════════════════
// 🆕 v22-CV/CW: 11 类分类 + 默认超时阈值
// 三方系统 (cs/design/po) 共享同一份分类定义,改一处必须同时改三处
// ════════════════════════════════════════════════════════════════════
var CDM_CATEGORIES = [{
  id: 'product_fix',
  label: '🛠 修改产品',
  color: '#92400e',
  bg: '#fef3c7',
  desc: '颜色/尺寸/字母/参数/SKU/视频/图片/可控硅调光 等错误',
  defaultTimeout: {
    urgent: 1,
    high: 2,
    normal: 5,
    low: 14
  }
}, {
  id: 'price_fix',
  label: '💰 改卖价',
  color: '#991b1b',
  bg: '#fee2e2',
  desc: '价格错误 · 通常紧急',
  defaultTimeout: {
    urgent: 1,
    high: 1,
    normal: 3,
    low: 7
  }
}, {
  id: 'product_remove',
  label: '🗑️ 下架删除',
  color: '#374151',
  bg: '#f3f4f6',
  desc: '产品下架 / 删除',
  defaultTimeout: {
    urgent: 1,
    high: 2,
    normal: 5,
    low: 14
  }
}, {
  id: 'new_product',
  label: '🆕 上新品',
  color: '#1e40af',
  bg: '#dbeafe',
  desc: '新品上架 / 客户定制 / 选网站自动派负责美工',
  defaultTimeout: {
    urgent: 2,
    high: 5,
    normal: 10,
    low: 21
  }
}, {
  id: 'reviews',
  label: '⭐ 做评价',
  color: '#92400e',
  bg: '#fde68a',
  desc: '产品评价生成(美工协助)',
  defaultTimeout: {
    urgent: 2,
    high: 5,
    normal: 7,
    low: 14
  }
}, {
  id: 'design_3d',
  label: '🎨 3D 渲染',
  color: '#5b21b6',
  bg: '#ede9fe',
  desc: '产品 3D 渲染 · 派给绑定网站的设计师',
  defaultTimeout: {
    urgent: 3,
    high: 7,
    normal: 14,
    low: 21
  }
}, {
  id: 'install_manual',
  label: '📐 安装说明书',
  color: '#0e7490',
  bg: '#cffafe',
  desc: '安装说明书 / 安装图 · 派给设计师',
  defaultTimeout: {
    urgent: 3,
    high: 7,
    normal: 14,
    low: 21
  }
}, {
  id: 'custom_lamp',
  label: '💡 非标定制',
  color: '#9d174d',
  bg: '#fce7f3',
  desc: '非标定制灯具 · 派给设计师',
  defaultTimeout: {
    urgent: 5,
    high: 10,
    normal: 21,
    low: 30
  }
}, {
  id: 'aftersales',
  label: '📞 售后处理',
  color: '#166534',
  bg: '#dcfce7',
  desc: '售后问题 / 退换货 / 投诉',
  defaultTimeout: {
    urgent: 1,
    high: 3,
    normal: 7,
    low: 14
  }
}, {
  id: 'form_feedback',
  label: '📋 表单反馈',
  color: '#334155',
  bg: '#f1f5f9',
  desc: '订单 / 合箱单 / 报价单等表单数据问题',
  defaultTimeout: {
    urgent: 2,
    high: 5,
    normal: 7,
    low: 14
  }
}, {
  id: 'general',
  label: '💬 其他',
  color: '#3730a3',
  bg: '#e0e7ff',
  desc: '其他需求 / 网站问题 / 一般沟通',
  defaultTimeout: {
    urgent: 2,
    high: 5,
    normal: 7,
    low: 14
  }
}];
// 旧分类 → 新分类映射(老数据自动兼容)
var CDM_LEGACY_CATEGORY_MAP = {
  'website_fix': 'product_fix',
  'price_error': 'price_fix',
  // new_product 同名
  // aftersales 同名
  'review': 'reviews',
  'design': 'design_3d'
  // general 同名
};
var CDM_PRIORITIES = [{
  id: 'urgent',
  label: '🚨 紧急',
  color: '#dc2626',
  bg: '#fee2e2'
}, {
  id: 'high',
  label: '⚡ 重要',
  color: '#f59e0b',
  bg: '#fef3c7'
}, {
  id: 'normal',
  label: '· 普通',
  color: '#57534e',
  bg: '#f5f5f4'
}, {
  id: 'low',
  label: '· 一般',
  color: '#78716c',
  bg: '#fafaf9'
}];
var CDM_STATUSES = [{
  id: 'pending',
  label: '⏳ 待处理',
  color: '#d97706',
  bg: '#fef3c7'
}, {
  id: 'in_progress',
  label: '🔄 处理中',
  color: '#2563eb',
  bg: '#dbeafe'
}, {
  id: 'done',
  label: '✅ 已完成',
  color: '#16a34a',
  bg: '#dcfce7'
}, {
  id: 'cancelled',
  label: '❌ 已取消',
  color: '#78716c',
  bg: '#f5f5f4'
}];
var CDM_SYSTEMS = [{
  id: 'design',
  label: '🎨 美工部',
  "short": '美工'
}, {
  id: 'cs',
  label: '📞 客服部',
  "short": '客服'
}, {
  id: 'po',
  label: '📋 跟单部',
  "short": '跟单'
}];
var CDM_RELATED_TYPES = [{
  id: 'order',
  label: '订单'
}, {
  id: 'product',
  label: '产品 SKU'
}, {
  id: 'customer',
  label: '客户'
}, {
  id: 'review',
  label: '评价'
}, {
  id: 'url',
  label: '网页 URL'
}];

// 当前客服系统的标识 — 三方系统共享 cross_dept_messages 表时区分自己
var MY_SYSTEM = 'cs';
var findCdm = function findCdm(arr, id) {
  return arr.find(function (x) {
    return x.id === id;
  }) || arr[arr.length - 1];
};

// ════════════════════════════════════════════════════════════════════
// 🆕 v22-CV/CW: 超时判定工具函数
// ════════════════════════════════════════════════════════════════════
function getCategoryDef(catId) {
  // 老分类自动映射到新分类
  var mapped = CDM_LEGACY_CATEGORY_MAP[catId] || catId;
  return CDM_CATEGORIES.find(function (c) {
    return c.id === mapped;
  }) || CDM_CATEGORIES[CDM_CATEGORIES.length - 1];
}
function getTimeoutDays(category, priority, system, timeoutOverride) {
  var _cat$defaultTimeout$p, _cat$defaultTimeout;
  try {
    var _timeoutOverride$syst;
    var o = timeoutOverride === null || timeoutOverride === void 0 || (_timeoutOverride$syst = timeoutOverride[system]) === null || _timeoutOverride$syst === void 0 || (_timeoutOverride$syst = _timeoutOverride$syst[category]) === null || _timeoutOverride$syst === void 0 ? void 0 : _timeoutOverride$syst[priority];
    if (typeof o === 'number' && o > 0) return o;
  } catch (e) {}
  var cat = getCategoryDef(category);
  return (_cat$defaultTimeout$p = (_cat$defaultTimeout = cat.defaultTimeout) === null || _cat$defaultTimeout === void 0 ? void 0 : _cat$defaultTimeout[priority]) !== null && _cat$defaultTimeout$p !== void 0 ? _cat$defaultTimeout$p : 7;
}
function isOverdue(message, timeoutOverride) {
  if (!message) return false;
  var status = message.status || 'pending';
  if (status === 'done' || status === 'cancelled') return false;
  var days = getTimeoutDays(message.category, message.priority, message.to_system, timeoutOverride);
  var createdAt = message.created_at_ms || 0;
  return Date.now() > createdAt + days * 86400000;
}
function getDueAt(message, timeoutOverride) {
  var days = getTimeoutDays(message.category, message.priority, message.to_system, timeoutOverride);
  return (message.created_at_ms || 0) + days * 86400000;
}
// 全局暴露,方便调试
if (typeof window !== 'undefined') {
  window.__cdmHelpers = {
    getCategoryDef: getCategoryDef,
    getTimeoutDays: getTimeoutDays,
    isOverdue: isOverdue,
    getDueAt: getDueAt
  };
}

// ════════════════════════════════════════════════════════════════════
// 📅 增强日期筛选系统 (fix15)
// 统一所有模块的日期筛选:本周/上周/本月/上月/任意月份/任意月份的第N周
// 用法: const [df, setDf] = useState({kind:'days', n:30});
//       const { start, end } = getDateRange(df);
//       arr.filter(x => x.created_at_ms >= start && x.created_at_ms < end);
//       <AdvancedDateFilter value={df} onChange={setDf} />
// ════════════════════════════════════════════════════════════════════

// 周划分按"自然月内的 1-7 / 8-14 / 15-21 / 22-28 / 29-月底"
// 这样老板说"6月第一周"= 6月1-7号 直观
function getDateRange(filter, nowMs) {
  if (typeof nowMs !== 'number') nowMs = Date.now();
  var now = new Date(nowMs);
  var today0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  var todayStart = today0.getTime();
  var tomorrowStart = todayStart + 86400000;
  var getMondayMs = function getMondayMs(d) {
    var dt = new Date(d);
    var day = dt.getDay() || 7; // Sunday = 7
    return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() - (day - 1)).getTime();
  };
  var f = filter || {
    kind: 'all'
  };
  switch (f.kind) {
    case 'all':
      return {
        start: 0,
        end: Infinity
      };
    case 'today':
      return {
        start: todayStart,
        end: tomorrowStart
      };
    case 'yesterday':
      return {
        start: todayStart - 86400000,
        end: todayStart
      };
    case 'this_week':
      {
        var mon = getMondayMs(now);
        return {
          start: mon,
          end: mon + 7 * 86400000
        };
      }
    case 'last_week':
      {
        var _mon = getMondayMs(now);
        return {
          start: _mon - 7 * 86400000,
          end: _mon
        };
      }
    case 'this_month':
      {
        var s = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
        var e = new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime();
        return {
          start: s,
          end: e
        };
      }
    case 'last_month':
      {
        var _s = new Date(now.getFullYear(), now.getMonth() - 1, 1).getTime();
        var _e = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
        return {
          start: _s,
          end: _e
        };
      }
    case 'days':
      {
        var n = Math.max(1, parseInt(f.n, 10) || 7);
        return {
          start: todayStart - (n - 1) * 86400000,
          end: tomorrowStart
        };
      }
    case 'month':
      {
        var y = f.year,
          m = f.month; // month 1-12
        var _s2 = new Date(y, m - 1, 1).getTime();
        var _e2 = new Date(y, m, 1).getTime();
        return {
          start: _s2,
          end: _e2
        };
      }
    case 'week_of_month':
      {
        var _y = f.year,
          _m = f.month,
          w = f.week; // week 1-5
        var startDay = (w - 1) * 7 + 1; // 1, 8, 15, 22, 29
        var lastDayOfMonth = new Date(_y, _m, 0).getDate();
        var endDay = Math.min(w * 7, lastDayOfMonth); // 7, 14, 21, 28, last
        var _s3 = new Date(_y, _m - 1, startDay).getTime();
        var _e3 = new Date(_y, _m - 1, endDay + 1).getTime();
        return {
          start: _s3,
          end: _e3
        };
      }
    case 'year':
      {
        var _y2 = f.year;
        var _s4 = new Date(_y2, 0, 1).getTime();
        var _e4 = new Date(_y2 + 1, 0, 1).getTime();
        return {
          start: _s4,
          end: _e4
        };
      }
    case 'custom':
      return {
        start: f.startMs || 0,
        end: f.endMs || Infinity
      };
    default:
      return {
        start: 0,
        end: Infinity
      };
  }
}
function formatDateFilterLabel(filter) {
  var f = filter || {
    kind: 'all'
  };
  switch (f.kind) {
    case 'all':
      return '全部时间';
    case 'today':
      return '今天';
    case 'yesterday':
      return '昨天';
    case 'this_week':
      return '本周';
    case 'last_week':
      return '上周';
    case 'this_month':
      return '本月';
    case 'last_month':
      return '上月';
    case 'days':
      return "\u8FD1 ".concat(f.n, " \u5929");
    case 'month':
      return "".concat(f.year, " \u5E74 ").concat(f.month, " \u6708");
    case 'week_of_month':
      return "".concat(f.year, "\u5E74").concat(f.month, "\u6708\u7B2C").concat(f.week, "\u5468");
    case 'year':
      return "".concat(f.year, " \u5E74");
    case 'custom':
      {
        var _fmt = function _fmt(ms) {
          var d = new Date(ms);
          return "".concat(d.getFullYear(), "/").concat(d.getMonth() + 1, "/").concat(d.getDate());
        };
        return "".concat(f.startMs ? _fmt(f.startMs) : '开始', " - ").concat(f.endMs ? _fmt(f.endMs - 1) : '结束');
      }
    default:
      return '全部时间';
  }
}

// 全局暴露
if (typeof window !== 'undefined') {
  window.__dateHelpers = {
    getDateRange: getDateRange,
    formatDateFilterLabel: formatDateFilterLabel
  };
}

// 📅 增强日期筛选 UI 组件
// 支持:今天/本周/本月/全部 4 个快捷 chip + 更多弹窗(年月周精确选择)
var AdvancedDateFilter = function AdvancedDateFilter(_ref4) {
  var value = _ref4.value,
    onChange = _ref4.onChange,
    _ref4$size = _ref4.size,
    size = _ref4$size === void 0 ? 'sm' : _ref4$size,
    _ref4$extraChips = _ref4.extraChips,
    extraChips = _ref4$extraChips === void 0 ? null : _ref4$extraChips;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var popoverRef = useRef(null);
  var buttonRef = useRef(null);
  var now = new Date();
  var _useState3 = useState((value === null || value === void 0 ? void 0 : value.year) || now.getFullYear()),
    _useState4 = _slicedToArray(_useState3, 2),
    pickerYear = _useState4[0],
    setPickerYear = _useState4[1];
  var _useState5 = useState((value === null || value === void 0 ? void 0 : value.month) || now.getMonth() + 1),
    _useState6 = _slicedToArray(_useState5, 2),
    pickerMonth = _useState6[0],
    setPickerMonth = _useState6[1];

  // 点击外部关闭
  useEffect(function () {
    if (!open) return;
    var handler = function handler(e) {
      if (popoverRef.current && !popoverRef.current.contains(e.target) && buttonRef.current && !buttonRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return function () {
      return document.removeEventListener('mousedown', handler);
    };
  }, [open]);
  var apply = function apply(newVal) {
    onChange(newVal);
    setOpen(false);
  };
  var QUICK_CHIPS = [{
    kind: 'today',
    label: '今天'
  }, {
    kind: 'this_week',
    label: '本周'
  }, {
    kind: 'this_month',
    label: '本月'
  }, {
    kind: 'all',
    label: '全部'
  }];
  var isSelected = function isSelected(kind) {
    return (value === null || value === void 0 ? void 0 : value.kind) === kind && !(value !== null && value !== void 0 && value.year) && !(value !== null && value !== void 0 && value.month);
  };
  var chipPad = size === 'md' ? '5px 12px' : '3px 10px';
  var chipFontSize = size === 'md' ? 12 : 11;
  var currentLabel = formatDateFilterLabel(value);
  // 是否当前选中的是更复杂选项(不是 4 个快捷之一)
  var isAdvancedSelected = value && !['today', 'this_week', 'this_month', 'all'].includes(value.kind);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 4,
      alignItems: 'center',
      flexWrap: 'wrap',
      position: 'relative'
    }
  }, QUICK_CHIPS.map(function (c) {
    var sel = isSelected(c.kind);
    return /*#__PURE__*/React.createElement("button", {
      key: c.kind,
      onClick: function onClick() {
        return apply({
          kind: c.kind
        });
      },
      type: "button",
      style: {
        padding: chipPad,
        fontSize: chipFontSize,
        borderRadius: 6,
        border: '1px solid ' + (sel ? '#0071e3' : 'var(--line)'),
        background: sel ? '#0071e3' : 'white',
        color: sel ? 'white' : 'var(--ink-2)',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: sel ? 600 : 500,
        whiteSpace: 'nowrap'
      }
    }, c.label);
  }), /*#__PURE__*/React.createElement("button", {
    ref: buttonRef,
    onClick: function onClick() {
      return setOpen(function (v) {
        return !v;
      });
    },
    type: "button",
    style: {
      padding: chipPad,
      fontSize: chipFontSize,
      borderRadius: 6,
      border: '1px solid ' + (isAdvancedSelected ? '#7c3aed' : 'var(--line)'),
      background: isAdvancedSelected ? '#7c3aed' : 'white',
      color: isAdvancedSelected ? 'white' : 'var(--ink-2)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: isAdvancedSelected ? 600 : 500,
      whiteSpace: 'nowrap'
    },
    title: "\u6309\u5468/\u6309\u6708/\u6309\u5E74\u7CBE\u786E\u7B5B\u9009"
  }, "\uD83D\uDCC5 ", isAdvancedSelected ? currentLabel : '更多', " ", open ? '▴' : '▾'), extraChips, open && /*#__PURE__*/React.createElement("div", {
    ref: popoverRef,
    style: {
      position: 'absolute',
      top: 'calc(100% + 6px)',
      left: 0,
      zIndex: 1000,
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 10,
      boxShadow: '0 8px 24px rgba(0,0,0,.12)',
      padding: '12px 14px',
      width: 340,
      maxWidth: 'calc(100vw - 40px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 5,
      textTransform: 'uppercase'
    }
  }, "\u5E38\u7528"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4,
      flexWrap: 'wrap'
    }
  }, [{
    kind: 'yesterday',
    label: '昨天'
  }, {
    kind: 'last_week',
    label: '上周'
  }, {
    kind: 'last_month',
    label: '上月'
  }, {
    kind: 'days',
    n: 3,
    label: '近 3 天'
  }, {
    kind: 'days',
    n: 7,
    label: '近 7 天'
  }, {
    kind: 'days',
    n: 14,
    label: '近 14 天'
  }, {
    kind: 'days',
    n: 30,
    label: '近 30 天'
  }, {
    kind: 'days',
    n: 90,
    label: '近 90 天'
  }].map(function (c) {
    var sel = c.kind === 'days' ? (value === null || value === void 0 ? void 0 : value.kind) === 'days' && (value === null || value === void 0 ? void 0 : value.n) === c.n : (value === null || value === void 0 ? void 0 : value.kind) === c.kind;
    var next = c.kind === 'days' ? {
      kind: 'days',
      n: c.n
    } : {
      kind: c.kind
    };
    return /*#__PURE__*/React.createElement("button", {
      key: c.label,
      type: "button",
      onClick: function onClick() {
        return apply(next);
      },
      style: {
        padding: '4px 10px',
        fontSize: 11,
        borderRadius: 5,
        border: '1px solid ' + (sel ? '#0071e3' : 'var(--line)'),
        background: sel ? '#0071e3' : 'white',
        color: sel ? 'white' : 'var(--ink-2)',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: sel ? 600 : 500
      }
    }, c.label);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line)',
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      color: 'var(--ink-3)',
      marginBottom: 5,
      textTransform: 'uppercase'
    }
  }, "\u6309\u6708\u4EFD / \u6309\u5468\u7CBE\u786E\u9009\u62E9"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setPickerYear(function (y) {
        return y - 1;
      });
    },
    style: {
      padding: '2px 8px',
      border: '1px solid var(--line)',
      borderRadius: 5,
      background: 'white',
      cursor: 'pointer',
      fontSize: 11,
      fontFamily: 'inherit'
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      minWidth: 50,
      textAlign: 'center'
    }
  }, pickerYear, " \u5E74"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setPickerYear(function (y) {
        return y + 1;
      });
    },
    style: {
      padding: '2px 8px',
      border: '1px solid var(--line)',
      borderRadius: 5,
      background: 'white',
      cursor: 'pointer',
      fontSize: 11,
      fontFamily: 'inherit'
    }
  }, "\u203A"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return apply({
        kind: 'year',
        year: pickerYear
      });
    },
    style: {
      marginLeft: 'auto',
      padding: '2px 9px',
      fontSize: 11,
      border: '1px solid ' + ((value === null || value === void 0 ? void 0 : value.kind) === 'year' && (value === null || value === void 0 ? void 0 : value.year) === pickerYear ? '#0071e3' : 'var(--line)'),
      background: (value === null || value === void 0 ? void 0 : value.kind) === 'year' && (value === null || value === void 0 ? void 0 : value.year) === pickerYear ? '#0071e3' : 'white',
      color: (value === null || value === void 0 ? void 0 : value.kind) === 'year' && (value === null || value === void 0 ? void 0 : value.year) === pickerYear ? 'white' : 'var(--ink-2)',
      borderRadius: 5,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600
    }
  }, "\u6574\u5E74 ", pickerYear)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: 3,
      marginBottom: 8
    }
  }, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(function (m) {
    var sel = pickerMonth === m;
    var isCurrent = (value === null || value === void 0 ? void 0 : value.kind) === 'month' && (value === null || value === void 0 ? void 0 : value.year) === pickerYear && (value === null || value === void 0 ? void 0 : value.month) === m;
    return /*#__PURE__*/React.createElement("button", {
      key: m,
      type: "button",
      onClick: function onClick() {
        return setPickerMonth(m);
      },
      style: {
        padding: '5px 0',
        fontSize: 11,
        border: '1px solid ' + (isCurrent ? '#0071e3' : sel ? '#7c3aed' : 'var(--line)'),
        background: isCurrent ? '#0071e3' : sel ? '#f3e8ff' : 'white',
        color: isCurrent ? 'white' : sel ? '#7c3aed' : 'var(--ink-2)',
        borderRadius: 5,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: sel || isCurrent ? 600 : 500
      }
    }, m, "\u6708");
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return apply({
        kind: 'month',
        year: pickerYear,
        month: pickerMonth
      });
    },
    style: {
      width: '100%',
      padding: '6px 10px',
      fontSize: 11,
      border: '1px solid #0071e3',
      background: '#0071e3',
      color: 'white',
      borderRadius: 6,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      marginBottom: 6
    }
  }, "\u2713 \u6574\u6708: ", pickerYear, " \u5E74 ", pickerMonth, " \u6708"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-3)',
      marginBottom: 3
    }
  }, "\u6216\u9009\u67D0\u4E00\u5468(1-7\u53F7 / 8-14\u53F7 / 15-21\u53F7 / 22-28\u53F7 / 29\u53F7-\u6708\u5E95):"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: 3
    }
  }, [1, 2, 3, 4, 5].map(function (w) {
    var sel = (value === null || value === void 0 ? void 0 : value.kind) === 'week_of_month' && (value === null || value === void 0 ? void 0 : value.year) === pickerYear && (value === null || value === void 0 ? void 0 : value.month) === pickerMonth && (value === null || value === void 0 ? void 0 : value.week) === w;
    return /*#__PURE__*/React.createElement("button", {
      key: w,
      type: "button",
      onClick: function onClick() {
        return apply({
          kind: 'week_of_month',
          year: pickerYear,
          month: pickerMonth,
          week: w
        });
      },
      style: {
        padding: '5px 0',
        fontSize: 10,
        border: '1px solid ' + (sel ? '#0071e3' : 'var(--line)'),
        background: sel ? '#0071e3' : 'white',
        color: sel ? 'white' : 'var(--ink-2)',
        borderRadius: 5,
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontWeight: sel ? 600 : 500
      }
    }, "\u7B2C ", w, " \u5468");
  })))));
};

// 🆕 售后状态
var AFTERSALE_STATUSES = [{
  key: 'pending_remind',
  label: '待催货',
  color: '#ca8a04',
  bg: '#fef9c3'
}, {
  key: 'reminded',
  label: '已催货',
  color: '#ea580c',
  bg: '#fff7ed'
}, {
  key: 'pending_return',
  label: '待回货',
  color: '#0369a1',
  bg: '#e0f2fe'
}, {
  key: 'returned',
  label: '已回货',
  color: '#16a34a',
  bg: '#dcfce7'
}, {
  key: 'customer_refund',
  label: '客户退款',
  color: '#dc2626',
  bg: '#fef2f2'
}, {
  key: 'closed',
  label: '关闭',
  color: '#525252',
  bg: '#f5f5f5'
}];

// 🆕 补件状态
var REFILL_STATUSES = [{
  key: 'pending_order',
  label: '待下单',
  color: '#ca8a04'
}, {
  key: 'ordered',
  label: '已下单',
  color: '#0369a1'
}, {
  key: 'shipped',
  label: '已发货',
  color: '#7c3aed'
}, {
  key: 'delivered',
  label: '已签收',
  color: '#16a34a'
}, {
  key: 'cancelled',
  label: '取消',
  color: '#525252'
}];

// 🆕 退款类型
var REFUND_TYPES = [{
  key: 'resale',
  label: '转售',
  color: '#ca8a04',
  bg: '#fef9c3'
}, {
  key: 'size_mismatch',
  label: '尺寸不适合',
  color: '#0891b2',
  bg: '#e0f2fe'
}, {
  key: 'quality_issue',
  label: '产品质量问题',
  color: '#16a34a',
  bg: '#dcfce7'
}, {
  key: 'color_mismatch',
  label: '颜色不符',
  color: '#db2777',
  bg: '#fce7f3'
}, {
  key: 'customer_cancel',
  label: '客户主动取消',
  color: '#525252',
  bg: '#f5f5f5'
}, {
  key: 'logistics',
  label: '物流问题',
  color: '#ea580c',
  bg: '#fff7ed'
}, {
  key: 'other',
  label: '其他',
  color: '#7c3aed',
  bg: '#ede9fe'
}];

// 🆕 退款支付方式
var REFUND_PAYMENT_METHODS = [{
  key: 'shopify_payments',
  label: 'Shopify Payments',
  color: '#5b3aff'
}, {
  key: 'stripe_card',
  label: 'Stripe Card',
  color: '#7c3aed'
}, {
  key: 'paypal',
  label: 'PayPal',
  color: '#0070ba'
}, {
  key: 'wire_transfer',
  label: 'Wire Transfer',
  color: '#16a34a'
}, {
  key: 'other',
  label: '其他',
  color: '#525252'
}];

// 🆕 退款审核状态
var REFUND_STATUSES = [{
  key: 'pending',
  label: '待审核',
  color: '#ca8a04',
  bg: '#fef9c3'
}, {
  key: 'approved',
  label: '已审核',
  color: '#0369a1',
  bg: '#e0f2fe'
}, {
  key: 'completed',
  label: '已完成',
  color: '#16a34a',
  bg: '#dcfce7'
}, {
  key: 'rejected',
  label: '拒绝',
  color: '#dc2626',
  bg: '#fef2f2'
}];

// ============================================================
// 报价单 - 多公司预设 (基于历史业务配置)
// 🆕 fix51: 公司全称按美工/拍摄部 SHOPS_PRESET 标准统一
// ============================================================
var SELLER_PRESETS = {
  radilum: {
    name: 'Radilum',
    prefix: 'RD',
    address: '177 Joe Routt Blvd, College Station, TX 77840',
    phone: '+1 800-761-1037',
    website: 'radilum.com',
    email: 'support@radilum.com',
    desc: '美国 Radilum (radilum.com) - 网站对客户报价'
  },
  jiangmen_radilum: {
    name: 'Radilum Inc',
    prefix: 'RDI',
    address: 'Building 5, No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'radilum.com',
    email: 'export@radilum.com',
    desc: '江门 Radilum Inc - 内部出口公司'
  },
  vakkerlight: {
    name: 'Vakkerlight',
    prefix: 'VK',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'vakkerlight.com',
    email: 'support@vakkerlight.com',
    desc: 'Vakkerlight 主品牌'
  },
  dekorfine: {
    name: 'Dekorfine',
    prefix: 'DF',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'dekorfine.com',
    email: 'support@dekorfine.com',
    desc: 'Dekorfine 品牌'
  },
  mooijane: {
    name: 'Mooijane',
    prefix: 'MJ',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'mooijane.com',
    email: 'support@mooijane.com',
    desc: 'Mooijane 品牌'
  },
  docos: {
    name: 'Docos.us',
    prefix: 'DC',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'docos.us',
    email: 'support@docos.us',
    desc: 'Docos.us 品牌'
  },
  lumioshine: {
    name: 'Lumioshine',
    prefix: 'LS',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'lumioshine.com',
    email: 'support@lumioshine.com',
    desc: 'Lumioshine 品牌'
  },
  rayonshine: {
    name: 'Rayonshine',
    prefix: 'RS',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'rayonshine.com',
    email: 'support@rayonshine.com',
    desc: 'Rayonshine 品牌'
  },
  mooiehome: {
    name: 'Mooiehome',
    prefix: 'MH',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'mooiehome.com',
    email: 'support@mooiehome.com',
    desc: 'Mooiehome 品牌'
  },
  pinlighting: {
    name: 'Pinlighting',
    prefix: 'PL',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'pinlighting.com',
    email: 'support@pinlighting.com',
    desc: 'Pinlighting 品牌'
  },
  mooielight: {
    name: 'Mooielight',
    prefix: 'MO',
    address: 'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China',
    phone: '+86 760-2233-1037',
    website: 'mooielight.com',
    email: 'support@mooielight.com',
    desc: 'Mooielight 品牌'
  }
};

// 银行/买家自动填充 - 仅 Radilum 系列
var RADILUM_BANK = {
  bank_name: 'China Merchants Bank Co., Ltd., Zhongshan Guzhen Branch',
  bank_address: 'No. 17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong Province',
  account_name: 'Radilum INC',
  account_number: '76090192D632009',
  swift_code: 'CMBCCNBSXXX'
};
var RADILUM_DEFAULT_BUYER = 'JANEDECOR INC\n424 LINDSEY LN, TYLER, TX 75701-1590\nUnited States';
var DOC_TYPES = [{
  key: 'quotation',
  label: 'Quotation 报价单',
  desc: '对客户出价'
}, {
  key: 'pi',
  label: 'Proforma Invoice (PI) 形式发票',
  desc: '确认订单 + 收款'
}, {
  key: 'po',
  label: 'Purchase Order (PO) 采购单',
  desc: '对供应商'
}];
var QUOTE_TERMS_PRESET = "1. Prices are quoted in USD and valid for 30 days from issue date.\n2. Payment terms: 50% deposit upon order confirmation, balance before shipment.\n3. Lead time: approximately 25-35 working days after deposit received.\n4. Shipping: FOB Shenzhen / EXW Zhongshan unless otherwise specified.\n5. Warranty: 12 months from delivery date for manufacturing defects.\n6. Custom orders are non-refundable once production begins.";

// ============================================================
// 汇报系统 - 部门 + 优先级
// ============================================================
var DEPARTMENTS = [{
  key: 'merchandiser',
  label: '跟单',
  icon: '📋'
}, {
  key: 'finance',
  label: '财务',
  icon: '💰'
}, {
  key: 'design',
  label: '设计',
  icon: '🎨'
}, {
  key: 'art',
  label: '美工',
  icon: '🖼️'
}, {
  key: 'factory',
  label: '工厂',
  icon: '🏭'
}, {
  key: 'photo',
  label: '拍摄',
  icon: '📷'
}, {
  key: 'customer_service',
  label: '客服',
  icon: '💬'
}, {
  key: 'logistics',
  label: '物流',
  icon: '🚚'
}, {
  key: 'other',
  label: '其他',
  icon: '📌'
}];
var TICKET_STATUS = [{
  key: 'pending',
  label: '待处理',
  cls: 'ticket-status-pending'
}, {
  key: 'accepted',
  label: '已接收',
  cls: 'ticket-status-accepted'
}, {
  key: 'processing',
  label: '处理中',
  cls: 'ticket-status-processing'
}, {
  key: 'resolved',
  label: '已解决',
  cls: 'ticket-status-resolved'
}, {
  key: 'rejected',
  label: '已驳回',
  cls: 'ticket-status-rejected'
}];
var TICKET_PRIORITY = [{
  key: 'low',
  label: '一般',
  cls: 'ticket-pri-low'
}, {
  key: 'mid',
  label: '重要',
  cls: 'ticket-pri-mid'
}, {
  key: 'high',
  label: '紧急',
  cls: 'ticket-pri-high'
}];

// ============================================================
// 知识库分类
// ============================================================
var KB_CATEGORIES = [{
  key: 'pre-sales',
  label_cn: '售前问题',
  label_en: 'Pre-sales',
  color: '#1d4ed8'
}, {
  key: 'product',
  label_cn: '产品问题',
  label_en: 'Product Questions',
  color: '#7c2d12'
}, {
  key: 'logistics',
  label_cn: '物流问题',
  label_en: 'Logistics Issues',
  color: '#b45309'
}, {
  key: 'after-sales',
  label_cn: '售后问题',
  label_en: 'After-sales',
  color: '#b91c1c'
}, {
  key: 'during-sale',
  label_cn: '售中问题',
  label_en: 'During-sale',
  color: '#7e22ce'
}];

// 难度自动建议
var suggestDifficulty = function suggestDifficulty(cat, durationMin) {
  // 时长优先
  if (durationMin > 0) {
    if (durationMin > 10) return 'hard';
    if (durationMin >= 5) return 'mid';
    return 'easy';
  }
  // 类别兜底
  if (['拒付', '加急'].includes(cat)) return 'hard';
  if (['退货', '报价', '售后', '补发', '取消订单', '定制咨询', '实拍'].includes(cat)) return 'mid';
  return 'easy';
};

// ============================================================
// 图标 (内联 SVG)
// ============================================================
var Icon = function Icon(_ref5) {
  var name = _ref5.name,
    _ref5$className = _ref5.className,
    className = _ref5$className === void 0 ? 'w-4 h-4' : _ref5$className,
    style = _ref5.style;
  var paths = {
    cs: 'M7 8h10M7 12h7m-7 4h4m1 5l-4-4H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-5l-4 4z',
    cash: 'M12 8c-1.66 0-3 .67-3 1.5S10.34 11 12 11s3-.67 3-1.5S13.66 8 12 8zm0 0V6m0 6v6m-9-3a9 9 0 1118 0 9 9 0 01-18 0z',
    doc: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    chart: 'M3 3v18h18M9 17V9m4 8V5m4 12v-6',
    trash: 'M6 7h12m-9 4v6m6-6v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M10 7V4a1 1 0 011-1h2a1 1 0 011 1v3',
    users: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    plus: 'M12 4v16m8-8H4',
    check: 'M5 13l4 4L19 7',
    x: 'M6 18L18 6M6 6l12 12',
    logout: 'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1',
    edit: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
    copy: 'M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z',
    eye: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    image: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    upload: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
    restore: 'M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6',
    pin: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z',
    calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    star: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    chevron: 'M19 9l-7 7-7-7',
    arrow: 'M14 5l7 7m0 0l-7 7m7-7H3',
    truck: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0',
    print: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z',
    download: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
  };
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "2",
    style: style
  }, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: paths[name] || paths.doc
  }));
};

// ============================================================
// Toast 通知 hook
// ============================================================
var useToast = function useToast() {
  var _useState7 = useState(null),
    _useState8 = _slicedToArray(_useState7, 2),
    msg = _useState8[0],
    setMsg = _useState8[1];
  var show = useCallback(function (m) {
    setMsg(m);
    setTimeout(function () {
      return setMsg(null);
    }, 2200);
  }, []);
  var node = msg ? /*#__PURE__*/React.createElement("div", {
    className: "toast"
  }, msg) : null;
  return [show, node];
};

// ============================================================
// 登录 / Session
// ============================================================
var LoginScreen = function LoginScreen(_ref6) {
  var employees = _ref6.employees,
    onLogin = _ref6.onLogin;
  var _useState9 = useState(''),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedId = _useState0[0],
    setSelectedId = _useState0[1];
  var _useState1 = useState(''),
    _useState10 = _slicedToArray(_useState1, 2),
    password = _useState10[0],
    setPassword = _useState10[1];
  var _useState11 = useState(''),
    _useState12 = _slicedToArray(_useState11, 2),
    error = _useState12[0],
    setError = _useState12[1];

  // 🆕 fix46: 密码区改成 Modal,Modal 的 autoFocus 会自动聚焦,不需要 scrollIntoView
  // 留 ref 给 Modal 内部元素引用
  var passwordSectionRef = useRef(null);
  var passwordInputRef = useRef(null);
  // 选中员工后调试输出 + 兜底聚焦
  useEffect(function () {
    if (selectedId) {
      console.log('[fix46] 选中员工:', selectedId, '· 弹出密码 Modal');
      setTimeout(function () {
        var _passwordInputRef$cur;
        return (_passwordInputRef$cur = passwordInputRef.current) === null || _passwordInputRef$cur === void 0 ? void 0 : _passwordInputRef$cur.focus();
      }, 100);
    }
  }, [selectedId]);

  // 🔒 老板秘密登录入口
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    bossLoginOpen = _useState14[0],
    setBossLoginOpen = _useState14[1];
  var _useState15 = useState(''),
    _useState16 = _slicedToArray(_useState15, 2),
    bossName = _useState16[0],
    setBossName = _useState16[1];
  var _useState17 = useState(''),
    _useState18 = _slicedToArray(_useState17, 2),
    bossPwd = _useState18[0],
    setBossPwd = _useState18[1];
  var _useState19 = useState(''),
    _useState20 = _slicedToArray(_useState19, 2),
    bossError = _useState20[0],
    setBossError = _useState20[1];
  var tryBossLogin = function tryBossLogin() {
    var hiddenUsers = employees.filter(function (e) {
      return e.hideFromList;
    });
    var inputName = bossName.trim().toLowerCase();
    var userByName = hiddenUsers.find(function (u) {
      return u.name.toLowerCase() === inputName;
    });
    if (!userByName) {
      // 账号不存在 — 可能 localStorage 没同步,告知用户
      var allHidden = hiddenUsers.map(function (u) {
        return u.name;
      }).join(' / ') || '(无)';
      setBossError("\u8D26\u53F7\u4E0D\u5B58\u5728 \xB7 \u5F53\u524D\u7CFB\u7EDF\u4E2D\u7684\u7BA1\u7406\u8D26\u53F7:".concat(allHidden));
      return;
    }
    if (userByName.password !== bossPwd) {
      setBossError('密码不正确');
      return;
    }
    onLogin(userByName);
  };
  var sel = employees.find(function (e) {
    return e.id === selectedId;
  });
  var tryLogin = function tryLogin() {
    if (!sel) {
      setError('请选择账号');
      return;
    }
    if (sel.password !== password) {
      // 🆕 fix40: 详细的密码错误诊断
      console.warn('[登录失败] 用户:', sel.name, '· 输入密码长度:', password.length, '· 期望长度:', (sel.password || '').length);
      setError("\u5BC6\u7801\u4E0D\u6B63\u786E (".concat(sel.name, ")\u3002\u5982\u679C\u5FD8\u8BB0\u5BC6\u7801\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u91CD\u8BBE\u3002"));
      return;
    }
    console.log('[登录成功] 用户:', sel.name, '· 角色:', sel.role);
    onLogin(sel);
  };

  // 员工头像配色 (Apple system colors)
  var avatarColors = ['#0071e3', '#34c759', '#ff9500', '#ff3b30', '#5e5ce6', '#af52de', '#ff2d55', '#5ac8fa', '#ffcc00', '#a2845e', '#8e8e93'];
  var colorOf = function colorOf(id) {
    var idx = (employees.findIndex(function (e) {
      return e.id === id;
    }) || 0) % avatarColors.length;
    return avatarColors[idx];
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "login-bg",
    "data-login-screen": true
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-card fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '48px 48px 24px',
      textAlign: 'center',
      borderBottom: '1px solid var(--line)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: '40px',
      fontWeight: 600,
      letterSpacing: '-.022em',
      marginBottom: '6px'
    }
  }, "\u7EDF\u4E00\u5DE5\u4F5C\u53F0"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--ink-3)',
      fontSize: '15px',
      fontWeight: 400
    }
  }, "\u9009\u62E9\u4F60\u7684\u8D26\u53F7\u7EE7\u7EED")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 md:grid-cols-5 gap-3",
    style: {
      gap: '14px'
    }
  }, employees.filter(function (e) {
    return !e.hideFromList;
  }).map(function (e) {
    var isSelected = selectedId === e.id;
    var initials = (e.name || '?').slice(-1);
    return /*#__PURE__*/React.createElement("div", {
      key: e.id,
      className: "emp-card".concat(isSelected ? ' selected' : ''),
      onClick: function onClick() {
        setSelectedId(e.id);
        setError('');
        setPassword('');
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "emp-avatar-lg",
      style: {
        background: colorOf(e.id)
      }
    }, initials), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--ink)',
        letterSpacing: '-.003em'
      }
    }, e.name, e.alias && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-3)',
        fontWeight: 400,
        marginLeft: 4
      }
    }, e.alias)), e.role === 'super_admin' && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11px',
        color: 'var(--accent)',
        marginTop: 2,
        fontWeight: 600
      }
    }, "\uD83D\uDC51 ", e.title || '总管 · Manager'), e.role === 'admin' && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11px',
        color: 'var(--accent)',
        marginTop: 2,
        fontWeight: 500
      }
    }, "\u2B50 ", e.title || '主管 · Admin'), e.role === 'finance' && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11px',
        color: '#a85e00',
        marginTop: 2,
        fontWeight: 500
      }
    }, "\uD83D\uDCB0 ", e.title || '财务 · Finance'), e.sites && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: '11px',
        color: 'var(--ink-4)',
        marginTop: 3
      }
    }, e.sites));
  })), employees.filter(function (e) {
    return !e.hideFromList;
  }).length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '32px 20px',
      background: '#fef3c7',
      border: '1px solid #fcd34d',
      borderRadius: 12,
      color: '#78350f',
      fontSize: 13,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      marginBottom: 8
    }
  }, "\u26A0"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 8
    }
  }, "\u5458\u5DE5\u5217\u8868\u4E3A\u7A7A"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, "\u53EF\u80FD\u662F localStorage \u635F\u574F\u6216\u8FD8\u6CA1\u52A0\u8F7D\u3002\u70B9\u4E0B\u9762\u6309\u94AE\u91CD\u7F6E\u540E\u91CD\u8BD5\u3002"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      localStorage.clear();
      window.location.reload();
    },
    style: {
      padding: '8px 16px',
      background: '#0071e3',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontSize: 13,
      fontWeight: 600,
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDD04 \u6E05\u7A7A\u7F13\u5B58\u5E76\u5237\u65B0")) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var allNames = employees.map(function (e) {
        return '• ' + e.name + (e.alias ? ' (' + e.alias + ')' : '') + (e.hideFromList ? ' — 管理员·走右下秘密入口' : '');
      }).join('\n');
      var visible = employees.filter(function (e) {
        return !e.hideFromList;
      }).length;
      var hidden = employees.filter(function (e) {
        return e.hideFromList;
      }).length;
      alert("\uD83D\uDCCB \u7CFB\u7EDF\u91CC\u73B0\u6709 ".concat(employees.length, " \u4E2A\u8D26\u53F7 (\u663E\u793A ").concat(visible, ", \u9690\u85CF ").concat(hidden, "):\n\n").concat(allNames, "\n\n\u627E\u4E0D\u5230\u4F60?\n\u2022 \u666E\u901A\u5458\u5DE5 \u2014 \u8054\u7CFB\u7BA1\u7406\u5458\u5728 \u2699 \u8BBE\u7F6E\u4E2D\u5FC3\u6DFB\u52A0\n\u2022 \u7BA1\u7406\u5458/\u8001\u677F \u2014 \u70B9\u53F3\u4E0B\u89D2 \uD83D\uDD10 \u7BA1\u7406\u5458 \u8D70\u79D8\u5BC6\u5165\u53E3"));
    },
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--ink-3)',
      fontSize: 12,
      cursor: 'pointer',
      textDecoration: 'underline',
      fontFamily: 'inherit'
    }
  }, "\uD83D\uDD0D \u627E\u4E0D\u5230\u4F60\u7684\u8D26\u53F7?"))), sel && /*#__PURE__*/React.createElement("div", {
    className: "login-pwd-backdrop",
    onClick: function onClick() {
      setSelectedId('');
      setPassword('');
      setError('');
    },
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,.55)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      animation: 'fade-in .2s ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "login-pwd-modal",
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    ref: passwordSectionRef,
    style: {
      background: 'white',
      borderRadius: 18,
      maxWidth: 400,
      width: '100%',
      padding: '28px 32px',
      boxShadow: '0 20px 60px rgba(0,0,0,.25)',
      animation: 'slide-up .25s ease-out'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "emp-avatar-lg",
    style: {
      background: colorOf(sel.id),
      width: 54,
      height: 54,
      fontSize: 20,
      margin: 0
    }
  }, (sel.name || '?').slice(-1)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      color: 'var(--ink)',
      letterSpacing: '-.022em'
    }
  }, "\u6B22\u8FCE,", sel.name, sel.alias && " ".concat(sel.alias)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)',
      marginTop: 2
    }
  }, sel.role === 'super_admin' ? "\uD83D\uDC51 ".concat(sel.title || '客服部总管') : sel.role === 'admin' ? "\u2B50 ".concat(sel.title || '主管账号') : sel.role === 'finance' ? "\uD83D\uDCB0 ".concat(sel.title || '财务账号') : sel.title || '员工账号'))), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--ink-2)',
      marginBottom: 6
    }
  }, "\u5BC6\u7801"), /*#__PURE__*/React.createElement("input", {
    ref: passwordInputRef,
    type: "password",
    value: password,
    onChange: function onChange(e) {
      setPassword(e.target.value);
      setError('');
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && tryLogin();
    },
    placeholder: "\u8F93\u5165\u5BC6\u7801",
    autoFocus: true,
    className: error ? 'input-error' : '',
    style: {
      fontSize: 15,
      padding: '12px 14px',
      borderRadius: 10,
      width: '100%',
      border: '1px solid var(--line)',
      outline: 'none',
      fontFamily: 'inherit'
    }
  }), error && /*#__PURE__*/React.createElement("div", {
    className: "fade-in",
    style: {
      marginTop: 12,
      padding: '10px 14px',
      borderRadius: 10,
      background: '#fef2f2',
      border: '1px solid #fca5a5',
      fontSize: 13,
      color: '#991b1b',
      fontWeight: 600,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u26A0\uFE0F"), /*#__PURE__*/React.createElement("span", null, error)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn-sec",
    onClick: function onClick() {
      setSelectedId('');
      setPassword('');
      setError('');
    },
    style: {
      padding: '11px 18px',
      fontSize: 14
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    className: "btn-pri",
    onClick: tryLogin,
    style: {
      flex: 1,
      padding: '11px 24px',
      fontSize: 15,
      fontWeight: 600
    }
  }, "\u7EE7\u7EED \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      fontSize: 11,
      color: 'var(--ink-4)',
      textAlign: 'center'
    }
  }, "\u9ED8\u8BA4\u5BC6\u7801:\u4E3B\u7BA1 admin123 \xB7 \u5458\u5DE5 123456"))), !sel && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 48px 40px',
      textAlign: 'center',
      color: 'var(--ink-4)',
      fontSize: '13px'
    }
  }, "\u2191 \u9009\u62E9\u4E00\u4E2A\u8D26\u53F7\u5F00\u59CB")), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setBossLoginOpen(true);
      setBossError('');
    },
    title: "\u7BA1\u7406\u5458\u767B\u5F55",
    style: {
      position: 'fixed',
      right: 18,
      bottom: 14,
      padding: '5px 12px',
      border: '1px solid rgba(0,0,0,.08)',
      background: 'rgba(255,255,255,.7)',
      borderRadius: 14,
      cursor: 'pointer',
      fontSize: 11,
      color: '#86868b',
      fontFamily: 'inherit',
      opacity: .7,
      transition: 'opacity .15s, color .15s, border-color .15s',
      backdropFilter: 'blur(8px)'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.opacity = '1';
      e.currentTarget.style.color = 'var(--accent)';
      e.currentTarget.style.borderColor = 'var(--accent)';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.opacity = '0.7';
      e.currentTarget.style.color = '#86868b';
      e.currentTarget.style.borderColor = 'rgba(0,0,0,.08)';
    }
  }, "\uD83D\uDD10 \u7BA1\u7406\u5458"), bossLoginOpen && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setBossLoginOpen(false);
    },
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
      maxWidth: 400,
      width: '100%',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 36,
      marginBottom: 8
    }
  }, "\uD83D\uDD12"), /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: 17,
      fontWeight: 600
    }
  }, "\u7BA1\u7406\u5165\u53E3"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--ink-3)',
      marginTop: 4
    }
  }, "\u4EC5\u9650\u6388\u6743\u4EBA\u5458")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--ink-2)',
      display: 'block',
      marginBottom: 4
    }
  }, "\u7528\u6237\u540D"), /*#__PURE__*/React.createElement("input", {
    value: bossName,
    onChange: function onChange(e) {
      setBossName(e.target.value);
      setBossError('');
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && tryBossLogin();
    },
    placeholder: "\u8F93\u5165\u7528\u6237\u540D",
    className: bossError ? 'input-error' : '',
    style: {
      width: '100%',
      padding: '10px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 14,
      fontFamily: 'inherit'
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
  }, "\u5BC6\u7801"), /*#__PURE__*/React.createElement("input", {
    type: "password",
    value: bossPwd,
    onChange: function onChange(e) {
      setBossPwd(e.target.value);
      setBossError('');
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Enter' && tryBossLogin();
    },
    placeholder: "\u8F93\u5165\u5BC6\u7801",
    autoFocus: true,
    className: bossError ? 'input-error' : '',
    style: {
      width: '100%',
      padding: '10px 12px',
      border: '1px solid var(--line)',
      borderRadius: 8,
      fontSize: 14,
      fontFamily: 'inherit'
    }
  })), bossError && /*#__PURE__*/React.createElement("div", {
    className: "fade-in",
    style: {
      padding: '10px 14px',
      background: '#fef2f2',
      border: '1px solid #fca5a5',
      borderRadius: 8,
      fontSize: 13,
      color: '#991b1b',
      fontWeight: 600,
      marginBottom: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, "\u26A0\uFE0F"), /*#__PURE__*/React.createElement("span", null, bossError)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setBossLoginOpen(false);
    },
    className: "btn-sec",
    style: {
      flex: 1,
      padding: '10px'
    }
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement("button", {
    onClick: tryBossLogin,
    disabled: !bossName.trim() || !bossPwd,
    style: {
      flex: 2,
      padding: '10px',
      background: 'var(--accent)',
      color: 'white',
      border: 'none',
      borderRadius: 8,
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 600,
      fontSize: 14,
      opacity: bossName.trim() && bossPwd ? 1 : 0.5
    }
  }, "\u8FDB\u5165")))));
};

// ============================================================
// 顶部导航
// ============================================================
var TopNav = function TopNav(_ref7) {
  var user = _ref7.user,
    activeTab = _ref7.activeTab,
    setActiveTab = _ref7.setActiveTab,
    onLogout = _ref7.onLogout,
    stats = _ref7.stats,
    notifPerm = _ref7.notifPerm,
    requestNotifPerm = _ref7.requestNotifPerm,
    cloudOn = _ref7.cloudOn,
    employees = _ref7.employees,
    switchAccount = _ref7.switchAccount,
    onOpenSearch = _ref7.onOpenSearch,
    _ref7$cdmUnreadCount = _ref7.cdmUnreadCount,
    cdmUnreadCount = _ref7$cdmUnreadCount === void 0 ? 0 : _ref7$cdmUnreadCount,
    _ref7$cdmUrgentUnread = _ref7.cdmUrgentUnread,
    cdmUrgentUnread = _ref7$cdmUrgentUnread === void 0 ? 0 : _ref7$cdmUrgentUnread,
    _ref7$topTabs = _ref7.topTabs,
    topTabs = _ref7$topTabs === void 0 ? [] : _ref7$topTabs,
    _ref7$sidebarHiddenCo = _ref7.sidebarHiddenCount,
    sidebarHiddenCount = _ref7$sidebarHiddenCo === void 0 ? 0 : _ref7$sidebarHiddenCo,
    onOpenCustomize = _ref7.onOpenCustomize;
  var _useState21 = useState(false),
    _useState22 = _slicedToArray(_useState21, 2),
    switchModalOpen = _useState22[0],
    setSwitchModalOpen = _useState22[1];
  var isAdmin = user.role === 'admin' || user.role === 'super_admin';
  var isFinanceVisible = user.role === 'finance' || user.role === 'admin' || user.role === 'super_admin';

  // 🆕 fix10: tabs 不再在 TopNav 内部计算了 — 由 App 传入 topTabs(已根据用户布局偏好筛选)

  var bellTotal = (stats.overdue || 0) + (stats.dueToday || 0);
  var bellLabel = notifPerm === 'granted' ? "\u684C\u9762\u901A\u77E5\u5DF2\u5F00\u542F".concat(bellTotal > 0 ? " \xB7 ".concat(stats.overdue, " \u903E\u671F + ").concat(stats.dueToday, " \u4ECA\u65E5\u5230\u671F") : ' · 暂无到期') : notifPerm === 'denied' ? '通知已被浏览器禁用' : '点击开启桌面通知';

  // 头像配色
  var avatarColors = ['#0071e3', '#34c759', '#ff9500', '#ff3b30', '#5e5ce6', '#af52de', '#ff2d55', '#5ac8fa', '#ffcc00', '#a2845e', '#8e8e93'];
  var idx = (user.name || '').charCodeAt(0) % avatarColors.length;
  var avatarColor = avatarColors[idx];
  var initials = (user.name || '?').slice(-1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--line)',
      background: 'rgba(251,251,253,.85)',
      backdropFilter: 'saturate(180%) blur(20px)',
      WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-6 flex items-center justify-between gap-4",
    style: {
      height: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "font-display",
    style: {
      fontSize: '19px',
      fontWeight: 600,
      letterSpacing: '-.022em'
    }
  }, "\u7EDF\u4E00\u5DE5\u4F5C\u53F0"), /*#__PURE__*/React.createElement("span", {
    className: "cloud-status ".concat(cloudOn ? 'ok' : 'local')
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), cloudOn ? '云端' : '本地')), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-3"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onOpenSearch,
    title: "\u641C\u7D22\u4EFB\u4F55\u5185\u5BB9 (Ctrl+K)",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 10px 5px 10px',
      background: 'var(--bg-elevated)',
      border: '1px solid var(--line)',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: 12,
      color: 'var(--ink-3)',
      transition: 'all .15s'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.borderColor = 'var(--accent)';
      e.currentTarget.style.color = 'var(--accent)';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.borderColor = 'var(--line)';
      e.currentTarget.style.color = 'var(--ink-3)';
    }
  }, "\uD83D\uDD0D ", /*#__PURE__*/React.createElement("span", {
    className: "hidden sm:inline"
  }, "\u641C\u7D22"), /*#__PURE__*/React.createElement("kbd", {
    style: {
      padding: '1px 5px',
      background: 'var(--bg)',
      borderRadius: 3,
      fontSize: 10,
      marginLeft: 2,
      border: '1px solid var(--line)'
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
    onClick: requestNotifPerm,
    title: bellLabel,
    style: {
      position: 'relative',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: '50%',
      transition: 'background .15s',
      fontSize: '17px',
      filter: notifPerm === 'granted' ? 'none' : 'grayscale(70%) opacity(0.55)'
    },
    onMouseEnter: function onMouseEnter(e) {
      return e.currentTarget.style.background = 'var(--bg-elevated)';
    },
    onMouseLeave: function onMouseLeave(e) {
      return e.currentTarget.style.background = 'transparent';
    }
  }, "\uD83D\uDD14", bellTotal > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '2px',
      right: '2px',
      background: 'var(--bad)',
      color: 'white',
      borderRadius: '50%',
      fontSize: '9px',
      fontWeight: 600,
      minWidth: '15px',
      height: '15px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1.5px solid rgba(251,251,253,1)',
      lineHeight: 1
    }
  }, bellTotal)), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setSwitchModalOpen(true);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '4px 12px 4px 4px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--bg-elevated)',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit'
    },
    title: "\u70B9\u51FB\u5207\u6362\u8D26\u53F7"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: avatarColor,
      color: 'white',
      fontWeight: 600,
      fontSize: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, initials), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--ink)',
      lineHeight: 1.1,
      textAlign: 'left'
    }
  }, user.name, user.alias && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)',
      fontWeight: 400,
      marginLeft: 3
    }
  }, user.alias), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--ink-4)',
      fontWeight: 400,
      marginTop: 1
    }
  }, user.title ? "".concat(user.title, " \xB7 \u70B9\u51FB\u5207\u6362") : user.role === 'super_admin' ? '总管 · 点击切换' : user.role === 'admin' ? '主管 · 点击切换' : user.role === 'finance' ? '财务 · 点击切换' : '员工 · 点击切换'))), switchModalOpen && employees && function () {
    var isAdminViewer = user.role === 'admin' || user.role === 'super_admin';
    return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
      onClick: function onClick() {
        return setSwitchModalOpen(false);
      },
      style: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,.5)',
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
        borderRadius: 'var(--radius-lg)',
        maxWidth: 520,
        width: '100%',
        maxHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        // 让子元素自己处理滚动
        boxShadow: '0 25px 70px rgba(0,0,0,.3)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '18px 22px',
        borderBottom: '1px solid var(--line)',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "font-display",
      style: {
        fontSize: 16,
        fontWeight: 600
      }
    }, isAdminViewer ? '👁 切换账号 / 查看员工视角' : '🔄 切换账号'), /*#__PURE__*/React.createElement("button", {
      className: "btn-sec",
      onClick: function onClick() {
        return setSwitchModalOpen(false);
      },
      style: {
        padding: '4px 12px'
      }
    }, "\xD7")), isAdminViewer && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 12px',
        background: '#fef3c7',
        border: '1px solid #fbbf24',
        borderRadius: 6,
        fontSize: 11,
        color: '#854d0e',
        marginTop: 10,
        lineHeight: 1.5
      }
    }, "\uD83D\uDCA1 ", /*#__PURE__*/React.createElement("strong", null, "\u4E3B\u7BA1/\u8001\u677F\u6743\u9650"), ":\u9009\u62E9\u5458\u5DE5 \u2192 \u65E0\u9700\u5BC6\u7801\u76F4\u63A5\u4EE5\u67E5\u770B\u6A21\u5F0F\u8FDB\u5165", /*#__PURE__*/React.createElement("br", null), "\u6240\u6709\u64CD\u4F5C\u7684\"\u521B\u5EFA\u4EBA\"\u4ECD\u662F\u8BE5\u5458\u5DE5 \xB7 \u9876\u90E8\u4F1A\u6709\u9EC4\u8272\u6A2A\u5E45 \xB7 \u53EF\u4E00\u952E\u5207\u56DE"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: 'var(--ink-3)',
        marginTop: 8
      }
    }, "\u5F53\u524D\uFF1A", /*#__PURE__*/React.createElement("strong", null, user.name, user.alias && ' ' + user.alias), " \xB7 \u9009\u62E9\u8981\u5207\u6362\u5230\u7684\u8D26\u53F7\uFF1A")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 22px',
        overflowY: 'auto',
        overflowX: 'hidden',
        flex: 1,
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 8
      }
    }, employees.filter(function (e) {
      return e.id !== user.id && !e.hideFromList;
    }).map(function (emp) {
      return /*#__PURE__*/React.createElement("button", {
        key: emp.id,
        onClick: function onClick() {
          switchAccount && switchAccount(emp);
          setSwitchModalOpen(false);
        },
        style: {
          padding: '10px 12px',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--line)',
          background: 'white',
          cursor: 'pointer',
          textAlign: 'left',
          fontFamily: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          transition: 'all .12s'
        },
        onMouseEnter: function onMouseEnter(e) {
          e.currentTarget.style.background = 'var(--bg-elevated)';
          e.currentTarget.style.borderColor = 'var(--accent)';
        },
        onMouseLeave: function onMouseLeave(e) {
          e.currentTarget.style.background = 'white';
          e.currentTarget.style.borderColor = 'var(--line)';
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: 600,
          fontSize: 13
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
      }, "\u2B50"), emp.role === 'finance' && /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--accent)',
          marginLeft: 4,
          fontSize: 10
        }
      }, "\uD83D\uDCB0")), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 10,
          color: 'var(--ink-3)'
        }
      }, emp.sites || emp.title || '—'));
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 22px',
        borderTop: '1px solid var(--line)',
        flexShrink: 0,
        background: '#fafafa'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: 'var(--ink-4)',
        lineHeight: 1.5
      }
    }, isAdminViewer ? '👁 主管/老板模式:无需密码,以查看模式进入' : '💡 切换账号后会要求重新输入密码确认')))), document.body);
  }(), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      background: 'transparent',
      border: 'none',
      color: 'var(--ink-3)',
      cursor: 'pointer',
      padding: '6px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 13,
      transition: 'all .15s',
      fontFamily: 'inherit'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.background = 'var(--bg-elevated)';
      e.currentTarget.style.color = 'var(--ink)';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--ink-3)';
    }
  }, "\u9000\u51FA"))), /*#__PURE__*/React.createElement("div", {
    className: "max-w-7xl mx-auto px-6",
    style: {
      borderTop: '1px solid var(--line)',
      overflowX: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabs-row",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      flexWrap: 'nowrap',
      overflowX: 'auto'
    }
  }, topTabs.map(function (t) {
    return /*#__PURE__*/React.createElement("a", {
      key: t.key,
      href: "#tab=".concat(t.key),
      className: "nav-tab ".concat(activeTab === t.key ? 'active' : ''),
      onClick: function onClick(e) {
        // Ctrl/Cmd/Shift/中键 → 浏览器默认行为(新窗口/新标签)
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        setActiveTab(t.key);
      },
      style: {
        whiteSpace: 'nowrap',
        flexShrink: 0,
        textDecoration: 'none'
      }
    }, t.label, t.badge > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 18,
        height: 18,
        padding: '0 6px',
        background: t.badgeColor || 'var(--bad)',
        color: 'white',
        borderRadius: 9,
        fontSize: 10,
        fontWeight: 600,
        marginLeft: 4
      }
    }, t.badge));
  }), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenCustomize,
    title: "\u81EA\u5B9A\u4E49\u5BFC\u822A\u5E03\u5C40 \u2014 \u8C03\u6574\u54EA\u4E9B tab \u663E\u793A\u5728\u9876\u90E8",
    style: {
      marginLeft: 'auto',
      padding: '5px 12px',
      background: 'transparent',
      color: 'var(--ink-3)',
      border: '1px dashed var(--line)',
      borderRadius: 6,
      cursor: 'pointer',
      fontSize: 11.5,
      fontFamily: 'inherit',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      transition: 'all .15s'
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
  }, /*#__PURE__*/React.createElement("span", null, "\u2699"), /*#__PURE__*/React.createElement("span", null, "\u5E03\u5C40"), sidebarHiddenCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '1px 6px',
      background: 'var(--bg)',
      color: 'var(--ink-3)',
      borderRadius: 8,
      fontSize: 9,
      fontWeight: 600
    }
  }, "+", sidebarHiddenCount)))));
};

// 🆕 fix10: NavGroupDropdown 不再使用 (左侧栏取代),保留空 stub 以防引用残留
var NavGroupDropdown = function NavGroupDropdown() {
  return null;
};

// ============================================================
// 客服跟进表 - 主模块
// ============================================================
// 🆕 事件添加下拉菜单 - 把 6 个按钮折叠成一个,节省横向空间
var EventActionDropdown = function EventActionDropdown(_ref8) {
  var record = _ref8.record,
    onAftersale = _ref8.onAftersale,
    onRefill = _ref8.onRefill,
    onRefund = _ref8.onRefund,
    onChargeback = _ref8.onChargeback,
    onCustom = _ref8.onCustom,
    onPhoto = _ref8.onPhoto;
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    open = _useState24[0],
    setOpen = _useState24[1];
  var btnRef = React.useRef(null);
  var menuRef = React.useRef(null);
  var _useState25 = useState({
      top: 0,
      left: 0
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    menuPos = _useState26[0],
    setMenuPos = _useState26[1];
  useEffect(function () {
    if (!open) return;
    var onDocClick = function onDocClick(e) {
      var _btnRef$current, _menuRef$current;
      if ((_btnRef$current = btnRef.current) !== null && _btnRef$current !== void 0 && _btnRef$current.contains(e.target)) return;
      if ((_menuRef$current = menuRef.current) !== null && _menuRef$current !== void 0 && _menuRef$current.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return function () {
      return document.removeEventListener('mousedown', onDocClick);
    };
  }, [open]);

  // 计算位置(避免被表格遮挡)
  var handleOpen = function handleOpen() {
    if (btnRef.current) {
      var rect = btnRef.current.getBoundingClientRect();
      setMenuPos({
        top: rect.bottom + window.scrollY + 4,
        left: Math.max(8, rect.right + window.scrollX - 200) // 200 = menu width
      });
    }
    setOpen(function (v) {
      return !v;
    });
  };
  var items = [{
    key: 'aftersale',
    label: '售后',
    icon: '🔧',
    color: '#ea580c',
    bg: '#fff7ed',
    onClick: onAftersale
  }, {
    key: 'refill',
    label: '补件',
    icon: '📦',
    color: '#0369a1',
    bg: '#e0f2fe',
    onClick: onRefill
  }, {
    key: 'refund',
    label: '退款',
    icon: '💰',
    color: '#dc2626',
    bg: '#fef2f2',
    onClick: onRefund
  }, {
    key: 'chargeback',
    label: '拒付',
    icon: '🚨',
    color: '#dc2626',
    bg: '#fef2f2',
    onClick: onChargeback,
    highlight: record.category === '拒付'
  }, {
    key: 'custom',
    label: '定制',
    icon: '🎨',
    color: '#7c3aed',
    bg: '#f5f3ff',
    onClick: onCustom,
    highlight: record.category === '定制咨询'
  }, {
    key: 'photo',
    label: '实拍',
    icon: '📸',
    color: '#be185d',
    bg: '#fdf2f8',
    onClick: onPhoto,
    highlight: record.category === '实拍'
  }];

  // 高亮的事项类型(根据 category)
  var highlightedItem = items.find(function (i) {
    return i.highlight;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    ref: btnRef,
    onClick: handleOpen,
    style: {
      width: '100%',
      padding: '4px 8px',
      background: highlightedItem ? highlightedItem.color : 'white',
      color: highlightedItem ? 'white' : 'var(--ink-2)',
      border: '1px solid ' + (highlightedItem ? highlightedItem.color : 'var(--line)'),
      borderRadius: 5,
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 600,
      fontFamily: 'inherit',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      whiteSpace: 'nowrap'
    },
    title: highlightedItem ? "".concat(highlightedItem.icon, " \u8DDF\u8FDB\u4E8B\u9879\u662F").concat(highlightedItem.label, ",\u70B9\u51FB\u6DFB\u52A0") : '添加事件'
  }, highlightedItem ? /*#__PURE__*/React.createElement(React.Fragment, null, highlightedItem.icon, " ", highlightedItem.label, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7,
      marginLeft: 2
    }
  }, "\u25BE")) : /*#__PURE__*/React.createElement(React.Fragment, null, "\uD83D\uDCCC \u6DFB\u52A0\u4E8B\u4EF6 \u25BE")), open && ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'absolute',
      top: menuPos.top,
      left: menuPos.left,
      width: 200,
      background: 'white',
      border: '1px solid var(--line)',
      borderRadius: 10,
      boxShadow: '0 8px 24px rgba(0,0,0,.12)',
      padding: 4,
      zIndex: 9998
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '6px 10px 4px',
      fontSize: 10,
      color: 'var(--ink-3)',
      fontWeight: 600,
      borderBottom: '1px solid var(--line)',
      marginBottom: 4
    }
  }, "\u9009\u62E9\u4E8B\u4EF6\u7C7B\u578B"), items.map(function (item) {
    return /*#__PURE__*/React.createElement("button", {
      key: item.key,
      onClick: function onClick() {
        item.onClick();
        setOpen(false);
      },
      style: {
        width: '100%',
        padding: '8px 10px',
        background: item.highlight ? item.bg : 'transparent',
        color: item.color,
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: item.highlight ? 700 : 500,
        fontFamily: 'inherit',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        textAlign: 'left',
        transition: 'all .12s'
      },
      onMouseEnter: function onMouseEnter(e) {
        e.currentTarget.style.background = item.bg;
      },
      onMouseLeave: function onMouseLeave(e) {
        e.currentTarget.style.background = item.highlight ? item.bg : 'transparent';
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14
      }
    }, item.icon), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, item.label), item.highlight && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        padding: '1px 6px',
        background: item.color,
        color: 'white',
        borderRadius: 8
      }
    }, "\u5DF2\u9009"));
  })), document.body));
};

// 🆕 fix65: 跟进逾期分级(基于 nextFollowUp 距今天数)
// 用于卡片彩色标记 + 逾期筛选。已解决/已转交的不算逾期。
var FOLLOWUP_DUE_LEVELS = [{
  min: 30,
  bg: '#7f1d1d',
  color: '#ffffff',
  tag: '🔴 严重逾期'
}, {
  min: 14,
  bg: '#dc2626',
  color: '#ffffff',
  tag: '🔴 逾期'
}, {
  min: 10,
  bg: '#fecaca',
  color: '#991b1b',
  tag: '⚠ 逾期'
}, {
  min: 7,
  bg: '#ffedd5',
  color: '#c2410c',
  tag: '⚠ 逾期'
}, {
  min: 3,
  bg: '#fef3c7',
  color: '#a16207',
  tag: '⏰ 逾期'
}, {
  min: 1,
  bg: '#fefce8',
  color: '#854d0e',
  tag: '⏰ 逾期'
}];
var getFollowUpInfo = function getFollowUpInfo(r) {
  if (!r || !r.nextFollowUp) return null;
  if (r.status === 'resolved' || r.status === 'transferred') return null;
  var today = todayISO();
  var overdue = Math.round((new Date(today) - new Date(r.nextFollowUp)) / 86400000);
  if (isNaN(overdue)) return null;
  if (overdue < 0) return {
    state: 'upcoming',
    days: -overdue,
    label: "\uD83D\uDCC5 ".concat(-overdue, " \u5929\u540E\u8DDF\u8FDB"),
    bg: '#f0fdf4',
    color: '#15803d'
  };
  if (overdue === 0) return {
    state: 'today',
    days: 0,
    label: '📅 今天跟进',
    bg: '#dbeafe',
    color: '#1e40af'
  };
  var lv = FOLLOWUP_DUE_LEVELS.find(function (l) {
    return overdue >= l.min;
  }) || FOLLOWUP_DUE_LEVELS[FOLLOWUP_DUE_LEVELS.length - 1];
  return {
    state: 'overdue',
    days: overdue,
    label: "".concat(lv.tag, " ").concat(overdue, " \u5929"),
    bg: lv.bg,
    color: lv.color
  };
};

// 🆕 fix61: 客服跟进 — 网格视图卡片(紧凑只读概览)
// 优先展示:邮箱地址 → 订单编号 → 店铺;有图自适应;点卡片切回列表编辑
var CS_DIFFICULTY_META = {
  easy: {
    label: '易',
    bg: '#dcfce7',
    color: '#15803d'
  },
  mid: {
    label: '中',
    bg: '#fef3c7',
    color: '#854d0e'
  },
  hard: {
    label: '复',
    bg: '#fee2e2',
    color: '#b91c1c'
  }
};
