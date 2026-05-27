// ════════════════════════════════════════════════════════════════════
// 🧱 核心 + LoginScreen + wtkpi + UI 一致(fix53) · fix28-53
// APP_VERSION: 2026.05.27-fix53
// ════════════════════════════════════════════════════════════════════

const { useState, useMemo, useEffect, useRef, useCallback, useContext, createContext } = React;

// ============================================================
// 工具
// ============================================================
// 🆕 本地时间的"今天"日期(避免 toISOString 的 UTC 时区偏移)
const todayISO = () => {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};
const nowISO = () => new Date().toISOString();
const fmt = n => isFinite(n) ? Math.round(n).toLocaleString() : '-';
const fmt2 = n => isFinite(n) ? n.toFixed(2) : '-';
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,7);
const daysBetween = (a, b) => {
  const da = new Date(a), db = new Date(b);
  return Math.round((db - da) / 86400000);
};
// 🆕 用本地时间计算避免时区偏差(toISOString 会用 UTC,跨时区会差 1 天)
const addDays = (iso, days) => {
  // iso 格式: "2026-05-25"
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(y, m - 1, d);  // 本地时间 0 点
  dt.setDate(dt.getDate() + days);
  // 返回本地日期(不用 toISOString,避免再次转 UTC)
  const yy = dt.getFullYear();
  const mm = String(dt.getMonth() + 1).padStart(2, '0');
  const dd = String(dt.getDate()).padStart(2, '0');
  return `${yy}-${mm}-${dd}`;
};
const minutesBetween = (start, end) => {
  if (!start || !end) return 0;
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  let diff = (eh*60+em) - (sh*60+sm);
  if (diff < 0) diff += 24*60;
  return diff;
};
const fmtDuration = mins => {
  if (!mins) return '0min';
  if (mins < 60) return mins + 'min';
  const h = Math.floor(mins / 60), m = mins % 60;
  return m ? `${h}h${m}m` : `${h}h`;
};

// 是否为过去日期（早于今天）
const isPastDate = (iso) => iso && iso < new Date().toISOString().slice(0,10);

// 综合判定记录是否可编辑：当天 = 可编辑；过去 = 仅主管解锁后可编辑
const canEditRecord = (record, user, adminUnlock) => {
  if (!record) return false;
  if (!isPastDate(record.date)) return true;       // 当天/未来日期始终可编辑
  if ((user.role === 'admin' || user.role === 'super_admin') && adminUnlock) return true;  // 主管解锁
  return false;
};

// CSV 导出工具
const csvEscape = (val) => {
  if (val === null || val === undefined) return '';
  const s = String(val);
  if (s.includes(',') || s.includes('"') || s.includes('\n') || s.includes('\r')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
};
const downloadCSV = (rows, filename) => {
  // 加 BOM 确保 Excel 中文不乱码
  const csv = '\uFEFF' + rows.map(r => r.map(csvEscape).join(',')).join('\r\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 100);
};

// 桌面通知封装（安全调用，浏览器不支持时静默失败）
const sendDesktopNotification = (title, body, tag) => {
  try {
    if (typeof Notification === 'undefined') return false;
    if (Notification.permission !== 'granted') return false;
    new Notification(title, { body, tag, icon: undefined });
    return true;
  } catch (e) { return false; }
};

// ============================================================
// 存储层 (localStorage 命名空间)
// ============================================================
const STORE = {
  k: (s) => 'workspace_v1_' + s,
  get(key, def) {
    try { const v = localStorage.getItem(this.k(key)); return v ? JSON.parse(v) : def; }
    catch(e) { return def; }
  },
  set(key, val) {
    try { localStorage.setItem(this.k(key), JSON.stringify(val)); }
    catch(e) { console.error(e); }
  },
  del(key) { try { localStorage.removeItem(this.k(key)); } catch(e) {} }
};

// ============================================================
// 云同步层 (Supabase)
// ============================================================
// 已预埋默认配置，团队成员打开即用，无需各自填写
const DEFAULT_SB_URL = 'https://kwrajryhwyytkjkkidor.supabase.co';
const DEFAULT_SB_KEY = 'sb_publishable_6j-rSrv1V95FROe-iX6Yew_unE_Y6n9';

const CLOUD = {
  client: null,
  // 🛡 安全获取 from 链(若 client 为 null 返回 null,避免崩溃)
  safeFrom(table) {
    if (!this.client) return null;
    return this.client.from(table);
  },
  enabled: false,
  status: 'local',  // 'local' | 'ok' | 'err'
  lastError: '',

  init(url, key) {
    if (!url || !key) { this.enabled = false; this.status = 'local'; return false; }
    try {
      if (!window.supabase || !window.supabase.createClient) {
        this.status = 'err'; this.lastError = 'Supabase SDK 未加载'; return false;
      }
      this.client = window.supabase.createClient(url, key);
      this.enabled = true;
      this.status = 'ok';
      return true;
    } catch(e) {
      this.enabled = false; this.status = 'err'; this.lastError = e.message;
      return false;
    }
  },

  async ping() {
    if (!this.client) return { ok:false, msg:'未配置' };
    try {
      const { error } = await this.client.from('workspace_records').select('id', { count:'exact', head:true }).limit(1);
      if (error && error.code !== 'PGRST116') {  // table not found is also an error
        this.status = 'err'; this.lastError = error.message;
        return { ok:false, msg: error.message };
      }
      this.status = 'ok';
      return { ok:true, msg:'连接正常' };
    } catch(e) {
      this.status = 'err'; this.lastError = e.message;
      return { ok:false, msg: e.message };
    }
  },

  // 通用 CRUD
  async list(table, opts = {}) {
    if (!this.client) return null;
    try {
      let q = this.client.from(table).select('*');
      if (opts.order) q = q.order(opts.order.col, { ascending: opts.order.asc !== false });
      if (opts.eq) Object.entries(opts.eq).forEach(([k,v]) => q = q.eq(k, v));
      if (opts.limit) q = q.limit(opts.limit);
      const { data, error } = await q;
      if (error) throw error;
      return data || [];
    } catch(e) { console.error('CLOUD.list', table, e); return null; }
  },
  _lastError: null,  // 🆕 保留最后一次操作的错误,供调用方读取
  // 🆕 fix8: 每个表跟踪 schema 缓存里缺失的字段,避免反复重试
  _missingColumns: {},  // { table: Set<column> }
  async upsert(table, row, _retryCount = 0) {
    if (!this.client) { 
      this._lastError = { message: '云同步未配置或离线模式', table }; 
      return null; 
    }
    // 先剥离已知该表缺失的字段
    const known = this._missingColumns[table];
    let cleanRow = row;
    if (known && known.size > 0) {
      cleanRow = { ...row };
      known.forEach(col => { delete cleanRow[col]; });
    }
    try {
      const { data, error } = await this.client.from(table).upsert(cleanRow).select();
      if (error) {
        // 🆕 fix8: 检测 "Could not find the 'X' column of 'TABLE' in the schema cache" (PGRST204)
        // 自动剥离该字段重试 (最多 5 次,避免死循环)
        const colMatch = (error.message || '').match(/Could not find the '([^']+)' column/i);
        if (colMatch && _retryCount < 5) {
          const missing = colMatch[1];
          if (!this._missingColumns[table]) this._missingColumns[table] = new Set();
          this._missingColumns[table].add(missing);
          console.warn(`[fix8 schema-retry] 表 "${table}" 缺少列 "${missing}",自动剥离重试 (第 ${_retryCount + 1}/5 次)`);
          return this.upsert(table, row, _retryCount + 1);
        }
        // 详细错误信息保留
        this._lastError = {
          message: error.message || '未知错误',
          code: error.code,
          details: error.details,
          hint: error.hint,
          table,
          row_keys: Object.keys(row || {}).join(', '),
        };
        console.error('❌ CLOUD.upsert 失败:', { table, error, row });
        throw error;
      }
      this._lastError = null;
      // 🆕 fix8: 成功了但用了剥离 → 在 toast 提示一下,方便主管看到要补 schema
      if (cleanRow !== row) {
        const stripped = [...(this._missingColumns[table] || [])].join(', ');
        console.warn(`[fix8 schema-retry] 已保存到 "${table}",但剥离了云端不识别的字段: ${stripped}。建议主管在 Supabase SQL Editor 补建相应列。`);
      }
      return data;
    } catch(e) {
      if (!this._lastError) {
        this._lastError = { message: e.message || String(e), table };
      }
      console.error('CLOUD.upsert', table, e); 
      return null;
    }
  },
  async del(table, id) {
    if (!this.client) return false;
    try {
      const { error } = await this.client.from(table).delete().eq('id', id);
      if (error) throw error;
      return true;
    } catch(e) { console.error('CLOUD.del', table, e); return false; }
  },
  // 🆕 Storage 上传到 aftersales-images bucket
  async uploadImage(bucket, file, prefix = '') {
    if (!this.client) return null;
    try {
      const ext = (file.name?.split('.').pop() || 'png').toLowerCase();
      const fname = `${prefix}${Date.now()}_${Math.random().toString(36).slice(2,7)}.${ext}`;
      const { data, error } = await this.client.storage.from(bucket).upload(fname, file, { upsert:false, contentType:file.type || 'image/png' });
      if (error) throw error;
      const { data:urlData } = this.client.storage.from(bucket).getPublicUrl(data.path);
      return { path: data.path, url: urlData.publicUrl };
    } catch(e) {
      console.error('CLOUD.uploadImage', e);
      return null;
    }
  },
  async deleteImage(bucket, path) {
    if (!this.client) return false;
    try {
      const { error } = await this.client.storage.from(bucket).remove([path]);
      if (error) throw error;
      return true;
    } catch(e) { console.error('CLOUD.deleteImage', e); return false; }
  },
  // 🆕 通用文件上传 (支持 PDF / PPT / XLSX / DOCX / 图片 / 视频 等)
  async uploadFile(bucket, file, prefix = '') {
    if (!this.client) return null;
    try {
      const safeName = (file.name || 'file').replace(/[^\w\u4e00-\u9fa5.-]/g, '_').slice(0, 80);
      const fname = `${prefix}${Date.now()}_${Math.random().toString(36).slice(2,7)}_${safeName}`;
      const { data, error } = await this.client.storage.from(bucket).upload(fname, file, { 
        upsert:false, 
        contentType: file.type || 'application/octet-stream',
      });
      if (error) throw error;
      const { data:urlData } = this.client.storage.from(bucket).getPublicUrl(data.path);
      return { 
        path: data.path, 
        url: urlData.publicUrl,
        name: file.name,
        size: file.size,
        type: file.type || 'application/octet-stream',
      };
    } catch(e) {
      console.error('CLOUD.uploadFile', e);
      return null;
    }
  },
};

// 🆕 全局保存失败提示 - 所有 editor 共用
// 用法: const res = await CLOUD.upsert(...); if (!res) { alertSaveError('保存'); return; }
const alertSaveError = (action = '保存') => {
  const err = CLOUD._lastError;
  if (!err) {
    alert(`❌ ${action}失败:未知错误\n\n建议:\n1. 检查网络连接\n2. F12 打开控制台查看详细信息\n3. 强刷页面后重试`);
    return;
  }
  
  // 根据错误码给出针对性建议
  const code = err.code || '';
  let hint = '';
  
  if (code === 'PGRST204' || (err.message || '').includes('not find') || (err.message || '').includes('does not exist')) {
    hint = `\n\n🔧 可能原因:数据库表/字段不存在\n建议:让主管在 Supabase SQL Editor 跑相应的 SQL 文件:\n  - 拒付/线下单/定制/实拍 → 13_chargebacks_offline_custom_photos.sql + 15_fix_chargeback_storage.sql\n  - 售后/补件/退款 → 05_aftersales_refills_refunds.sql\n  - 产品评价 → 12_product_reviews.sql\n  - 删除审批 → 14_delete_requests.sql`;
  } else if ((err.message || '').toLowerCase().includes('row-level security') || code === '42501') {
    hint = `\n\n🔧 可能原因:数据库 RLS 策略阻止写入\n建议:让主管跑 15_fix_chargeback_storage.sql 修复策略`;
  } else if ((err.message || '').toLowerCase().includes('network') || (err.message || '').includes('fetch')) {
    hint = `\n\n🔧 可能原因:网络问题\n建议:检查网络连接后重试`;
  } else if ((err.message || '').toLowerCase().includes('duplicate') || code === '23505') {
    hint = `\n\n🔧 可能原因:重复键(订单号已存在等)\n建议:换一个唯一编号`;
  } else if ((err.message || '').toLowerCase().includes('null value') || code === '23502') {
    hint = `\n\n🔧 可能原因:必填字段为空\n建议:检查所有 * 标记的字段是否填写`;
  }
  
  alert(`❌ ${action}失败\n\n` +
    `表: ${err.table || '?'}\n` +
    `错误: ${err.message || '未知'}\n` +
    (err.code ? `代码: ${err.code}\n` : '') +
    (err.details ? `详情: ${err.details}\n` : '') +
    (err.hint ? `提示: ${err.hint}\n` : '') +
    hint +
    `\n\nF12 控制台已记录完整错误日志`);
};

// 🔗 协调员配置 - 接收所有事件的"对接人"
const COORDINATOR_IDS = ['u_liuqiang'];  // 谁是协调员，未来可加更多

// 🔗 自动给协调员发工单通知（事件创建时）
async function notifyCoordinator(kind, eventData, creator) {
  if (!CLOUD.client) return;  // 离线模式跳过
  const kindLabel = kind === 'aftersale' ? '🔧 售后' : kind === 'refill' ? '📦 补件' : '💰 退款';
  const targetId = COORDINATOR_IDS[0];
  
  let summary = '';
  if (kind === 'aftersale') {
    const issue = ISSUE_TYPES.find(i => i.key === eventData.issue_type)?.label || eventData.issue_type;
    summary = `问题：${issue}${eventData.damaged_part ? ' · ' + eventData.damaged_part : ''}\n${eventData.issue_detail || ''}`;
  } else if (kind === 'refill') {
    const itemsList = (eventData.items || []).map(it => `${it.item || '?'} × ${it.qty || 1}${it.unit || ''}`).join('，');
    summary = `补件清单：${itemsList}`;
  } else if (kind === 'refund') {
    const type = REFUND_TYPES.find(t => t.key === eventData.refund_type)?.label || eventData.refund_type;
    summary = `${type} · ${eventData.currency} ${parseFloat(eventData.amount).toFixed(2)}\n${eventData.refund_reason || ''}`;
  }
  
  const ticket = {
    id: 'tk_' + Date.now().toString(36) + Math.random().toString(36).slice(2,7),
    title: `${kindLabel} · ${eventData.order_ref || ''}${eventData.supplier_name ? ' · ' + eventData.supplier_name : ''}`,
    content: `【自动同步】${creator.name}${creator.alias ? ' ' + creator.alias : ''} 创建了一条${kindLabel}事件\n\n订单号：${eventData.order_ref || '-'}\n客户：${eventData.customer || '-'}\n供应商：${eventData.supplier_name || '-'}\n\n${summary}\n\n💡 点击「📋 工作主线」tab 查看完整事件（含图片）`,
    priority: kind === 'refund' ? 'high' : 'normal',
    department: 'coordination',
    from_id: creator.id,
    from_name: creator.name + (creator.alias ? ' ' + creator.alias : ''),
    target_id: targetId,
    target_name: '刘强',
    status: 'pending',
    event_ref: eventData.id ? `${kind}:${eventData.id}` : null,
    auto_synced: true,  // 标记为自动同步，方便筛选
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  
  try {
    if (!CLOUD.client) return;  // 🆕 云未初始化时跳过
    await CLOUD.client.from('workspace_tickets').upsert(ticket);
  } catch(e) {
    console.warn('自动通知协调员失败:', e.message);
    // 不阻塞主流程
  }
}

// ============================================================
// 初始员工数据
// ============================================================
const INITIAL_EMPLOYEES = [
  // 👑 客服部总管 (super_admin) — 管所有客服人员包括 Miya
  { id:'u_nicole', name:'李彬桦', alias:'Nicole', sites:'全部门', role:'super_admin', password:'admin123', title:'客服部主管' },
  // 客服主管
  { id:'u_miya', name:'邱琴方', alias:'Miya', sites:'VK', role:'admin', password:'admin123', title:'客服主管' },
  // 客服员工
  { id:'u_hazelle', name:'杨佳欢', alias:'Hazelle', sites:'DC+海服', role:'staff', password:'123456' },
  { id:'u_tan', name:'谭燕灵', alias:'', sites:'VK', role:'staff', password:'123456' },
  { id:'u_sally', name:'区栩灵', alias:'Sally', sites:'J+DF+LS+RS', role:'staff', password:'123456' },
  { id:'u_aletta', name:'冯恩桐', alias:'Aletta', sites:'处理拒付+VK', role:'staff', password:'123456' },
  { id:'u_tammy', name:'伍家家', alias:'Tammy', sites:'处理拒付+VK', role:'staff', password:'123456' },
  { id:'u_yulia', name:'陶艳巧', alias:'Yulia', sites:'RD, PL, MO', role:'staff', password:'123456' },
  { id:'u_ashley', name:'侯泳珊', alias:'Ashley', sites:'', role:'staff', password:'123456' },
  { id:'u_abby', name:'张宣霞', alias:'Abby', sites:'VK', role:'staff', password:'123456' },
  { id:'u_luna', name:'杨甜', alias:'Luna', sites:'', role:'staff', password:'123456' },
  { id:'u_hannah', name:'聂诗俣', alias:'Hannah', sites:'', role:'staff', password:'123456' },
  // 💰 财务部 — 运费对账岗位
  { id:'u_kuang', name:'邝雅琦', alias:'', sites:'财务·运费对账', role:'finance', password:'finance123', title:'财务·运费对账' },
  { id:'u_jiang', name:'江春芸', alias:'', sites:'财务·运费对账', role:'finance', password:'finance123', title:'财务·运费对账' },
  // 🔗 协调员 — 对接工厂/客服/跟单/供应商，所有功能全开放
  { id:'u_liuqiang', name:'刘强', alias:'', sites:'对接工厂·客服', role:'admin', password:'admin123', title:'对接工厂·客服' },
  
  // 🆕 北简客服团队 (13 人) — 默认 staff,所有基础权限默认打开,主管可后期调整
  { id:'u_bj_vinnie',     name:'孙倩',     alias:'Vinnie',  sites:'北简', role:'staff', password:'123456', team:'北简' },
  { id:'u_bj_lily',       name:'林燕清',   alias:'Lily',    sites:'北简', role:'staff', password:'123456', team:'北简' },
  { id:'u_bj_diana',      name:'吴晓琳',   alias:'Diana',   sites:'北简', role:'staff', password:'123456', team:'北简' },
  { id:'u_bj_jenny',      name:'区嘉怡',   alias:'Jenny',   sites:'北简', role:'staff', password:'123456', team:'北简' },
  { id:'u_bj_sine',       name:'刘惜真',   alias:'Sine',    sites:'北简', role:'staff', password:'123456', team:'北简' },
  { id:'u_bj_lianzi',     name:'罗桓连',   alias:'Lianzi',  sites:'北简', role:'staff', password:'123456', team:'北简' },
  { id:'u_bj_echo',       name:'侯成',     alias:'Echo',    sites:'北简', role:'staff', password:'123456', team:'北简' },
  { id:'u_bj_joyce',      name:'李淑婷',   alias:'Joyce',   sites:'北简', role:'staff', password:'123456', team:'北简' },
  { id:'u_bj_madison',    name:'冯家颖',   alias:'Madison', sites:'北简', role:'staff', password:'123456', team:'北简' },
  { id:'u_bj_vera',       name:'陈慧容',   alias:'Vera',    sites:'北简', role:'staff', password:'123456', team:'北简' },
  { id:'u_bj_selina',     name:'陈美娟',   alias:'Selina',  sites:'北简', role:'staff', password:'123456', team:'北简' },
  { id:'u_bj_jane',       name:'陈洁嫦',   alias:'Jane',    sites:'北简', role:'staff', password:'123456', team:'北简' },
  { id:'u_bj_chenliqiong',name:'陈丽琼',   alias:'BJ_PD',   sites:'北简·产品', role:'staff', password:'123456', team:'北简', title:'北简 BJ_PD · 产品' },
  
  // 🔒 老板 1（不在登录列表显示，需要从右下角"🔐 管理员"入口登录）
  { id:'u_martin', name:'Martin', alias:'', sites:'CEO', role:'super_admin', password:'qq923923', title:'CEO · 创始人', hideFromList:true },
  // 🔒 老板 2（不在登录列表显示，需要从右下角"🔐 管理员"入口登录 · 与 Martin 同权）
  { id:'u_luoyanqiu', name:'罗燕秋', alias:'', sites:'老板', role:'super_admin', password:'qq923923', title:'老板 · 角色管理', hideFromList:true },
];

const CATEGORIES = [
  '咨询','物流','查单','核实','安装说明','改地址','退货','报价','售后','补发',
  '取消订单','定制咨询','实拍','拒付','加急','邮件查询','价格','运费','定金',
  '库存','工厂进度','质量问题','图片提供','样品','促销活动'
];
const SITES = ['MJ','DC','VK','DF','LS','RS','MH','PL','MO','RD','海服'];  // 🆕 fix51: J → MH (Mooiehome 取代 JaneDecor)

// 🆕 fix22 联动 3: 网站 Context — 让自定义网站出现在所有下拉里
// 内置 SITES 永远在前,自定义网站按代码追加
const SitesContext = createContext({ siteCodes: SITES, customSites: [], refresh: () => {} });
const useSiteCodes = () => useContext(SitesContext).siteCodes;
const useCustomSites = () => useContext(SitesContext).customSites;

// 🆕 fix22 联动 1: 产品 Context — 让产品主表全局可访问,用于 SKU 联想
const ProductsContext = createContext({ products: [], refresh: () => {} });
const useProducts = () => useContext(ProductsContext).products;
const STATUSES = [
  { key:'pending',     label:'待处理', cls:'status-pending' },
  { key:'following',   label:'跟进中', cls:'status-following' },
  { key:'waiting',     label:'等客户', cls:'status-waiting' },
  { key:'resolved',    label:'已解决', cls:'status-resolved' },
  { key:'transferred', label:'已转交', cls:'status-resolved' },
];

// 🆕 判断记录是否"有内容"（避免空白行被自动保存/统计）
const isRecordMeaningful = (r) => {
  if (!r) return false;
  return !!(
    (r.customer || '').trim() ||
    (r.orderRef || '').trim() ||
    (r.note || '').trim() ||
    (r.startTime || '').trim() ||
    (r.endTime || '').trim() ||
    (r.category || '').trim() ||
    (r.nextFollowUp || '').trim() ||
    (r.site || '').trim() ||
    (r.screenshots && r.screenshots.length > 0) ||
    (r.followUps && r.followUps.length > 0) ||
    r.escalated ||
    r.transferHistory && r.transferHistory.length > 0
  );
};

// 🆕 售后问题类型
const ISSUE_TYPES = [
  { key:'transport_damage',  label:'运输损坏',  color:'#dc2626' },
  { key:'functional_defect', label:'功能性缺陷', color:'#ea580c' },
  { key:'appearance_flaw',   label:'外观瑕疵',   color:'#ca8a04' },
  { key:'missing_parts',     label:'缺件',       color:'#7c3aed' },
  { key:'wrong_shipment',    label:'错发',       color:'#0369a1' },
  { key:'color_diff',        label:'颜色色差',   color:'#db2777' },
  { key:'size_issue',        label:'尺寸问题',   color:'#0891b2' },
  { key:'other',             label:'其他',       color:'#525252' },
];

// ============================================================
// 📨 跨部门协作 (Cross-Dept Messages) — 共享消息总线
// 美工 / 客服 / 跟单 三系统共用美工的 Supabase 项目 (xyhbwqugbnowfjuhqhsj)
// 客服系统本地 Supabase 不动,仅额外加一个 cdmClient 专门读写 cross_dept_messages
// ============================================================
const MESSAGEBUS_URL = "https://xyhbwqugbnowfjuhqhsj.supabase.co";
const MESSAGEBUS_KEY = "sb_publishable_Z0dXXZivG5QI-FCbwELxEA_JZBNx2Hn";

// 懒加载 — 第一次用的时候才 createClient,避免页面加载时同时建两个 client
let _cdmClient = null;
const getCdmClient = () => {
  if (_cdmClient) return _cdmClient;
  if (typeof window === 'undefined' || !window.supabase) return null;
  try {
    _cdmClient = window.supabase.createClient(MESSAGEBUS_URL, MESSAGEBUS_KEY);
    return _cdmClient;
  } catch (e) { console.error('[CDM] 初始化消息总线 client 失败', e); return null; }
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix49: WorkTrack-KPI 跨系统 client(对接拍摄部 photo_logs 表)
// 默认配置已硬编码 (Martin 提供的 publishable key,安全靠 RLS)
// ⚙ 设置中心可覆盖(若 Martin 换 key)
// ════════════════════════════════════════════════════════════════════
const WTKPI_DEFAULT_URL = 'https://xyhbwqugbnowfjuhqhsj.supabase.co';
const WTKPI_DEFAULT_KEY = 'sb_publishable_Z0dXXZivG5QI-FCbwELxEA_JZBNx2Hn';

let _wtkpiClient = null;
let _wtkpiClientKey = null;  // 用于检测配置变化
const getWtkpiClient = () => {
  // 优先 localStorage 覆盖,否则用默认
  const lsUrl = (typeof localStorage !== 'undefined' && localStorage.getItem('wtkpi_url')) || '';
  const lsKey = (typeof localStorage !== 'undefined' && localStorage.getItem('wtkpi_key')) || '';
  const url = lsUrl || WTKPI_DEFAULT_URL;
  const key = lsKey || WTKPI_DEFAULT_KEY;
  if (!url || !key) return null;
  const cacheKey = url + '|' + key;
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
const isWtkpiConfigured = () => {
  // 有默认值就永远算"已配置"
  return !!(WTKPI_DEFAULT_URL && WTKPI_DEFAULT_KEY);
};

// 🆕 fix49: 上传图片到 WorkTrack-KPI Storage `attachments` bucket,自动压缩 < 1600px
async function uploadAttachmentToWtkpi(file) {
  const client = getWtkpiClient();
  if (!client) throw new Error('拍摄部 Supabase 未配置 — 请进 ⚙ 设置中心配置');
  // 自动压缩到 1600px 宽(节省 storage)
  const compressed = await compressImageForUpload(file, 1600, 0.85);
  const ext = (file.name || 'img.png').split('.').pop() || 'png';
  const path = `cs-requests/${Date.now()}-${crypto.randomUUID().slice(0,8)}.${ext}`;
  const { error } = await client.storage.from('attachments').upload(path, compressed, {
    upsert: false,
    contentType: compressed.type || file.type || 'image/jpeg',
  });
  if (error) throw error;
  const { data:{ publicUrl } } = client.storage.from('attachments').getPublicUrl(path);
  return {
    name: file.name || 'screenshot.png',
    url: publicUrl,
    uploaded_at_ms: Date.now(),
  };
}

// 🆕 fix49: 通用图片压缩(类似 quotation 的 compressImageFile,但通用)
async function compressImageForUpload(file, maxWidth, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let w = img.width, h = img.height;
        if (w > maxWidth) { h = h * maxWidth / w; w = maxWidth; }
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        canvas.toBlob(blob => {
          if (blob) resolve(new File([blob], file.name, { type: 'image/jpeg' }));
          else reject(new Error('压缩失败'));
        }, 'image/jpeg', quality);
      };
      img.onerror = () => reject(new Error('图片加载失败'));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error('文件读取失败'));
    reader.readAsDataURL(file);
  });
}

// 🆕 fix49: 提交一个拍摄需求 — 写入 photo_logs 表
async function submitPhotoRequest({ productName, sku, productImage, applicableShops,
                                     currentUser, reason, urgency, attachments, externalRefId }) {
  const client = getWtkpiClient();
  if (!client) throw new Error('拍摄部 Supabase 未配置');
  const now = Date.now();
  const row = {
    id: crypto.randomUUID(),  // 🚨 关键:必须 UUID,不能用短串
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
      external_ref_id: externalRefId || null,
    },
    // 🚨 关键:NOT NULL 审计字段,不能漏
    created_by_id: currentUser.id,
    created_by_name: currentUser.name + (currentUser.alias ? ' ' + currentUser.alias : ''),
    created_at_ms: now,
    updated_at: new Date().toISOString(),
  };
  const { data, error } = await client.from('photo_logs').insert(row).select().single();
  if (error) throw error;
  return data;
}

// 🆕 fix49: 列出当前用户提的所有需求 / 全部需求(主管视角)
// 🆕 fix53 v3: 列出全部 photo_logs(不过滤 source),客户端按 sub-tab 筛选
async function listPhotoRequests() {
  const client = getWtkpiClient();
  if (!client) return [];
  const { data, error } = await client.from('photo_logs')
    .select('*')
    .order('updated_at', { ascending: false })
    .limit(500);
  if (error) { console.error('[WTKPI] 拉需求列表失败', error); return []; }
  return data || [];
}

// 🆕 fix53 v3: 协作编辑产品基础字段(merge,不覆盖)
async function updatePhotoRequestBasics(logId, basics) {
  const client = getWtkpiClient();
  if (!client) throw new Error('拍摄部 Supabase 未配置');
  const allowed = ['product_name', 'sku', 'product_image', 'applicable_shops', 'product_type', 'product_notes'];
  const clean = {};
  for (const k of allowed) {
    if (basics[k] !== undefined) clean[k] = basics[k];
  }
  clean.updated_at = new Date().toISOString();
  const { error } = await client.from('photo_logs').update(clean).eq('id', logId);
  if (error) throw error;
}

// 🆕 fix53 v3: 追加附件/补充原因(merge external_request,不覆盖)
async function appendToPhotoRequest(logId, additions) {
  const client = getWtkpiClient();
  if (!client) throw new Error('拍摄部 Supabase 未配置');
  const { data: row, error: e1 } = await client.from('photo_logs')
    .select('external_request').eq('id', logId).single();
  if (e1) throw e1;
  const current = row.external_request || {};
  const merged = { ...current };
  if (additions.attachments?.length) {
    merged.attachments = [...(current.attachments || []), ...additions.attachments];
  }
  if (additions.reason_append) {
    merged.reason = (current.reason || '') +
      `\n\n--- ${new Date().toLocaleDateString('zh-CN')} 补充(${additions.editor_name || ''}) ---\n` +
      additions.reason_append;
  }
  if (additions.urgency) merged.urgency = additions.urgency;
  const { error: e2 } = await client.from('photo_logs')
    .update({ external_request: merged, updated_at: new Date().toISOString() })
    .eq('id', logId);
  if (e2) throw e2;
}

// 🆕 fix53 v3: 批量录入 — 客服汇总员一次提交多条
async function batchSubmitPhotoRequests(rows, defaults, currentUser) {
  const client = getWtkpiClient();
  if (!client) throw new Error('拍摄部 Supabase 未配置');
  const now = Date.now();
  const batchId = crypto.randomUUID();
  const inserts = rows.map(r => ({
    id: crypto.randomUUID(),
    product_name: r.productName || '(未填)',
    sku: r.sku || null,
    product_image: null,
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
      attachments: [],
      created_at_ms: now,
      external_ref_id: null,
      batch_id: batchId,
    },
    created_by_id: currentUser.id,
    created_by_name: currentUser.name + (currentUser.alias ? ' ' + currentUser.alias : ''),
    created_at_ms: now,
    updated_at: new Date().toISOString(),
  }));
  const results = await Promise.allSettled(
    inserts.map(row => client.from('photo_logs').insert(row))
  );
  const succeeded = results.filter(r => r.status === 'fulfilled' && !r.value.error).length;
  const failed = results.length - succeeded;
  const errors = results.filter(r => r.status === 'rejected' || r.value?.error)
    .map(r => r.reason?.message || r.value?.error?.message || 'unknown');
  return { succeeded, failed, errors, batchId };
}

// 暴露到 window,方便 React 组件调用
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
const SHOPS_PRESET = [
  { id:'vakkerlight',  label:'Vakkerlight',      category:'独立站' },
  { id:'docos',        label:'Docos.us',         category:'独立站' },
  { id:'mooijane',     label:'Mooijane',         category:'独立站' },
  { id:'mooiehome',    label:'Mooiehome',        category:'独立站' },
  { id:'radilum',      label:'Radilum',          category:'独立站' },
  { id:'mooielight',   label:'Mooielight',       category:'独立站' },
  { id:'dekorfine',    label:'Dekorfine',        category:'独立站' },
  { id:'pinlighting',  label:'Pinlighting',      category:'独立站' },
  { id:'lumioshine',   label:'Lumioshine',       category:'独立站' },
  { id:'rayonshine',   label:'Rayonshine',       category:'独立站' },
  { id:'alibaba',      label:'阿里巴巴国际站',     category:'平台' },
  { id:'radilum-inc',  label:'Radilum INC',      category:'实体公司' },
  { id:'other',        label:'其他(手填备注)',    category:'其他' },
];
// 给主管/admin 用的可选网站(去掉"其他"那行 - "其他"是 sentinel 值)
const SHOPS_SELECTABLE = SHOPS_PRESET.filter(s => s.id !== 'other');

// ════════════════════════════════════════════════════════════════════
// 🆕 v22-CV/CW: 11 类分类 + 默认超时阈值
// 三方系统 (cs/design/po) 共享同一份分类定义,改一处必须同时改三处
// ════════════════════════════════════════════════════════════════════
const CDM_CATEGORIES = [
  { id:'product_fix',    label:'🛠 修改产品',    color:'#92400e', bg:'#fef3c7', desc:'颜色/尺寸/字母/参数/SKU/视频/图片/可控硅调光 等错误',
    defaultTimeout:{ urgent:1, high:2, normal:5, low:14 } },
  { id:'price_fix',      label:'💰 改卖价',      color:'#991b1b', bg:'#fee2e2', desc:'价格错误 · 通常紧急',
    defaultTimeout:{ urgent:1, high:1, normal:3, low:7 } },
  { id:'product_remove', label:'🗑️ 下架删除',    color:'#374151', bg:'#f3f4f6', desc:'产品下架 / 删除',
    defaultTimeout:{ urgent:1, high:2, normal:5, low:14 } },
  { id:'new_product',    label:'🆕 上新品',      color:'#1e40af', bg:'#dbeafe', desc:'新品上架 / 客户定制 / 选网站自动派负责美工',
    defaultTimeout:{ urgent:2, high:5, normal:10, low:21 } },
  { id:'reviews',        label:'⭐ 做评价',      color:'#92400e', bg:'#fde68a', desc:'产品评价生成(美工协助)',
    defaultTimeout:{ urgent:2, high:5, normal:7, low:14 } },
  { id:'design_3d',      label:'🎨 3D 渲染',     color:'#5b21b6', bg:'#ede9fe', desc:'产品 3D 渲染 · 派给绑定网站的设计师',
    defaultTimeout:{ urgent:3, high:7, normal:14, low:21 } },
  { id:'install_manual', label:'📐 安装说明书',  color:'#0e7490', bg:'#cffafe', desc:'安装说明书 / 安装图 · 派给设计师',
    defaultTimeout:{ urgent:3, high:7, normal:14, low:21 } },
  { id:'custom_lamp',    label:'💡 非标定制',    color:'#9d174d', bg:'#fce7f3', desc:'非标定制灯具 · 派给设计师',
    defaultTimeout:{ urgent:5, high:10, normal:21, low:30 } },
  { id:'aftersales',     label:'📞 售后处理',    color:'#166534', bg:'#dcfce7', desc:'售后问题 / 退换货 / 投诉',
    defaultTimeout:{ urgent:1, high:3, normal:7, low:14 } },
  { id:'form_feedback',  label:'📋 表单反馈',    color:'#334155', bg:'#f1f5f9', desc:'订单 / 合箱单 / 报价单等表单数据问题',
    defaultTimeout:{ urgent:2, high:5, normal:7, low:14 } },
  { id:'general',        label:'💬 其他',        color:'#3730a3', bg:'#e0e7ff', desc:'其他需求 / 网站问题 / 一般沟通',
    defaultTimeout:{ urgent:2, high:5, normal:7, low:14 } },
];
// 旧分类 → 新分类映射(老数据自动兼容)
const CDM_LEGACY_CATEGORY_MAP = {
  'website_fix': 'product_fix',
  'price_error': 'price_fix',
  // new_product 同名
  // aftersales 同名
  'review':      'reviews',
  'design':      'design_3d',
  // general 同名
};
const CDM_PRIORITIES = [
  { id:'urgent', label:'🚨 紧急', color:'#dc2626', bg:'#fee2e2' },
  { id:'high',   label:'⚡ 重要', color:'#f59e0b', bg:'#fef3c7' },
  { id:'normal', label:'· 普通', color:'#57534e', bg:'#f5f5f4' },
  { id:'low',    label:'· 一般', color:'#78716c', bg:'#fafaf9' },
];
const CDM_STATUSES = [
  { id:'pending',     label:'⏳ 待处理', color:'#d97706', bg:'#fef3c7' },
  { id:'in_progress', label:'🔄 处理中', color:'#2563eb', bg:'#dbeafe' },
  { id:'done',        label:'✅ 已完成', color:'#16a34a', bg:'#dcfce7' },
  { id:'cancelled',   label:'❌ 已取消', color:'#78716c', bg:'#f5f5f4' },
];
const CDM_SYSTEMS = [
  { id:'design', label:'🎨 美工部', short:'美工' },
  { id:'cs',     label:'📞 客服部', short:'客服' },
  { id:'po',     label:'📋 跟单部', short:'跟单' },
];
const CDM_RELATED_TYPES = [
  { id:'order',    label:'订单' },
  { id:'product',  label:'产品 SKU' },
  { id:'customer', label:'客户' },
  { id:'review',   label:'评价' },
  { id:'url',      label:'网页 URL' },
];

// 当前客服系统的标识 — 三方系统共享 cross_dept_messages 表时区分自己
const MY_SYSTEM = 'cs';

const findCdm = (arr, id) => arr.find(x => x.id === id) || arr[arr.length - 1];

// ════════════════════════════════════════════════════════════════════
// 🆕 v22-CV/CW: 超时判定工具函数
// ════════════════════════════════════════════════════════════════════
function getCategoryDef(catId) {
  // 老分类自动映射到新分类
  const mapped = CDM_LEGACY_CATEGORY_MAP[catId] || catId;
  return CDM_CATEGORIES.find(c => c.id === mapped) || CDM_CATEGORIES[CDM_CATEGORIES.length - 1];
}
function getTimeoutDays(category, priority, system, timeoutOverride) {
  try {
    const o = timeoutOverride?.[system]?.[category]?.[priority];
    if (typeof o === 'number' && o > 0) return o;
  } catch (e) {}
  const cat = getCategoryDef(category);
  return cat.defaultTimeout?.[priority] ?? 7;
}
function isOverdue(message, timeoutOverride) {
  if (!message) return false;
  const status = message.status || 'pending';
  if (status === 'done' || status === 'cancelled') return false;
  const days = getTimeoutDays(message.category, message.priority, message.to_system, timeoutOverride);
  const createdAt = message.created_at_ms || 0;
  return Date.now() > (createdAt + days * 86400000);
}
function getDueAt(message, timeoutOverride) {
  const days = getTimeoutDays(message.category, message.priority, message.to_system, timeoutOverride);
  return (message.created_at_ms || 0) + days * 86400000;
}
// 全局暴露,方便调试
if (typeof window !== 'undefined') {
  window.__cdmHelpers = { getCategoryDef, getTimeoutDays, isOverdue, getDueAt };
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
  const now = new Date(nowMs);
  const today0 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const todayStart = today0.getTime();
  const tomorrowStart = todayStart + 86400000;
  const getMondayMs = (d) => {
    const dt = new Date(d);
    const day = dt.getDay() || 7;  // Sunday = 7
    return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() - (day - 1)).getTime();
  };
  const f = filter || { kind: 'all' };
  switch (f.kind) {
    case 'all':       return { start: 0, end: Infinity };
    case 'today':     return { start: todayStart, end: tomorrowStart };
    case 'yesterday': return { start: todayStart - 86400000, end: todayStart };
    case 'this_week': {
      const mon = getMondayMs(now);
      return { start: mon, end: mon + 7 * 86400000 };
    }
    case 'last_week': {
      const mon = getMondayMs(now);
      return { start: mon - 7 * 86400000, end: mon };
    }
    case 'this_month': {
      const s = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
      const e = new Date(now.getFullYear(), now.getMonth() + 1, 1).getTime();
      return { start: s, end: e };
    }
    case 'last_month': {
      const s = new Date(now.getFullYear(), now.getMonth() - 1, 1).getTime();
      const e = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
      return { start: s, end: e };
    }
    case 'days': {
      const n = Math.max(1, parseInt(f.n, 10) || 7);
      return { start: todayStart - (n - 1) * 86400000, end: tomorrowStart };
    }
    case 'month': {
      const y = f.year, m = f.month;  // month 1-12
      const s = new Date(y, m - 1, 1).getTime();
      const e = new Date(y, m, 1).getTime();
      return { start: s, end: e };
    }
    case 'week_of_month': {
      const y = f.year, m = f.month, w = f.week;  // week 1-5
      const startDay = (w - 1) * 7 + 1;       // 1, 8, 15, 22, 29
      const lastDayOfMonth = new Date(y, m, 0).getDate();
      const endDay = Math.min(w * 7, lastDayOfMonth);  // 7, 14, 21, 28, last
      const s = new Date(y, m - 1, startDay).getTime();
      const e = new Date(y, m - 1, endDay + 1).getTime();
      return { start: s, end: e };
    }
    case 'year': {
      const y = f.year;
      const s = new Date(y, 0, 1).getTime();
      const e = new Date(y + 1, 0, 1).getTime();
      return { start: s, end: e };
    }
    case 'custom':    return { start: f.startMs || 0, end: f.endMs || Infinity };
    default:          return { start: 0, end: Infinity };
  }
}

function formatDateFilterLabel(filter) {
  const f = filter || { kind: 'all' };
  switch (f.kind) {
    case 'all':         return '全部时间';
    case 'today':       return '今天';
    case 'yesterday':   return '昨天';
    case 'this_week':   return '本周';
    case 'last_week':   return '上周';
    case 'this_month':  return '本月';
    case 'last_month':  return '上月';
    case 'days':        return `近 ${f.n} 天`;
    case 'month':       return `${f.year} 年 ${f.month} 月`;
    case 'week_of_month': return `${f.year}年${f.month}月第${f.week}周`;
    case 'year':        return `${f.year} 年`;
    case 'custom': {
      const fmt = (ms) => {
        const d = new Date(ms);
        return `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`;
      };
      return `${f.startMs ? fmt(f.startMs) : '开始'} - ${f.endMs ? fmt(f.endMs - 1) : '结束'}`;
    }
    default: return '全部时间';
  }
}

// 全局暴露
if (typeof window !== 'undefined') {
  window.__dateHelpers = { getDateRange, formatDateFilterLabel };
}

// 📅 增强日期筛选 UI 组件
// 支持:今天/本周/本月/全部 4 个快捷 chip + 更多弹窗(年月周精确选择)
const AdvancedDateFilter = ({ value, onChange, size = 'sm', extraChips = null }) => {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);
  const now = new Date();
  const [pickerYear, setPickerYear] = useState(value?.year || now.getFullYear());
  const [pickerMonth, setPickerMonth] = useState(value?.month || (now.getMonth() + 1));

  // 点击外部关闭
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target) &&
          buttonRef.current && !buttonRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const apply = (newVal) => { onChange(newVal); setOpen(false); };

  const QUICK_CHIPS = [
    { kind:'today',      label:'今天' },
    { kind:'this_week',  label:'本周' },
    { kind:'this_month', label:'本月' },
    { kind:'all',        label:'全部' },
  ];

  const isSelected = (kind) => value?.kind === kind && !value?.year && !value?.month;
  const chipPad = size === 'md' ? '5px 12px' : '3px 10px';
  const chipFontSize = size === 'md' ? 12 : 11;

  const currentLabel = formatDateFilterLabel(value);
  // 是否当前选中的是更复杂选项(不是 4 个快捷之一)
  const isAdvancedSelected = value && !['today','this_week','this_month','all'].includes(value.kind);

  return (
    <div style={{display:'inline-flex', gap:4, alignItems:'center', flexWrap:'wrap', position:'relative'}}>
      {QUICK_CHIPS.map(c => {
        const sel = isSelected(c.kind);
        return (
          <button key={c.kind} onClick={() => apply({ kind: c.kind })} type="button"
            style={{
              padding: chipPad, fontSize: chipFontSize, borderRadius: 6,
              border: '1px solid ' + (sel ? '#0071e3' : 'var(--line)'),
              background: sel ? '#0071e3' : 'white',
              color: sel ? 'white' : 'var(--ink-2)',
              cursor: 'pointer', fontFamily: 'inherit',
              fontWeight: sel ? 600 : 500, whiteSpace: 'nowrap',
            }}>
            {c.label}
          </button>
        );
      })}
      <button ref={buttonRef} onClick={() => setOpen(v => !v)} type="button"
        style={{
          padding: chipPad, fontSize: chipFontSize, borderRadius: 6,
          border: '1px solid ' + (isAdvancedSelected ? '#7c3aed' : 'var(--line)'),
          background: isAdvancedSelected ? '#7c3aed' : 'white',
          color: isAdvancedSelected ? 'white' : 'var(--ink-2)',
          cursor: 'pointer', fontFamily: 'inherit',
          fontWeight: isAdvancedSelected ? 600 : 500, whiteSpace: 'nowrap',
        }}
        title="按周/按月/按年精确筛选">
        📅 {isAdvancedSelected ? currentLabel : '更多'} {open ? '▴' : '▾'}
      </button>
      {extraChips}

      {open && (
        <div ref={popoverRef}
          style={{
            position:'absolute', top:'calc(100% + 6px)', left:0, zIndex:1000,
            background:'white', border:'1px solid var(--line)', borderRadius:10,
            boxShadow:'0 8px 24px rgba(0,0,0,.12)', padding:'12px 14px',
            width:340, maxWidth:'calc(100vw - 40px)',
          }}>
          {/* 快捷 */}
          <div style={{marginBottom:10}}>
            <div style={{fontSize:10, fontWeight:600, color:'var(--ink-3)', marginBottom:5, textTransform:'uppercase'}}>常用</div>
            <div style={{display:'flex', gap:4, flexWrap:'wrap'}}>
              {[
                { kind:'yesterday',  label:'昨天' },
                { kind:'last_week',  label:'上周' },
                { kind:'last_month', label:'上月' },
                { kind:'days', n:3,  label:'近 3 天' },
                { kind:'days', n:7,  label:'近 7 天' },
                { kind:'days', n:14, label:'近 14 天' },
                { kind:'days', n:30, label:'近 30 天' },
                { kind:'days', n:90, label:'近 90 天' },
              ].map(c => {
                const sel = (c.kind === 'days' ? (value?.kind === 'days' && value?.n === c.n) : value?.kind === c.kind);
                const next = c.kind === 'days' ? { kind:'days', n:c.n } : { kind:c.kind };
                return (
                  <button key={c.label} type="button" onClick={() => apply(next)}
                    style={{padding:'4px 10px', fontSize:11, borderRadius:5, border:'1px solid '+(sel?'#0071e3':'var(--line)'), background: sel?'#0071e3':'white', color: sel?'white':'var(--ink-2)', cursor:'pointer', fontFamily:'inherit', fontWeight: sel?600:500}}>
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 按月份/周精确选择 */}
          <div style={{borderTop:'1px solid var(--line)', paddingTop:10}}>
            <div style={{fontSize:10, fontWeight:600, color:'var(--ink-3)', marginBottom:5, textTransform:'uppercase'}}>按月份 / 按周精确选择</div>

            {/* 年份切换 */}
            <div style={{display:'flex', alignItems:'center', gap:6, marginBottom:6}}>
              <button type="button" onClick={() => setPickerYear(y => y - 1)}
                style={{padding:'2px 8px', border:'1px solid var(--line)', borderRadius:5, background:'white', cursor:'pointer', fontSize:11, fontFamily:'inherit'}}>‹</button>
              <span style={{fontSize:13, fontWeight:600, minWidth:50, textAlign:'center'}}>{pickerYear} 年</span>
              <button type="button" onClick={() => setPickerYear(y => y + 1)}
                style={{padding:'2px 8px', border:'1px solid var(--line)', borderRadius:5, background:'white', cursor:'pointer', fontSize:11, fontFamily:'inherit'}}>›</button>
              <button type="button" onClick={() => apply({ kind:'year', year: pickerYear })}
                style={{marginLeft:'auto', padding:'2px 9px', fontSize:11, border:'1px solid '+((value?.kind==='year' && value?.year===pickerYear)?'#0071e3':'var(--line)'), background: (value?.kind==='year' && value?.year===pickerYear)?'#0071e3':'white', color:(value?.kind==='year' && value?.year===pickerYear)?'white':'var(--ink-2)', borderRadius:5, cursor:'pointer', fontFamily:'inherit', fontWeight:600}}>
                整年 {pickerYear}
              </button>
            </div>

            {/* 月份网格 */}
            <div style={{display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:3, marginBottom:8}}>
              {[1,2,3,4,5,6,7,8,9,10,11,12].map(m => {
                const sel = pickerMonth === m;
                const isCurrent = value?.kind === 'month' && value?.year === pickerYear && value?.month === m;
                return (
                  <button key={m} type="button" onClick={() => setPickerMonth(m)}
                    style={{padding:'5px 0', fontSize:11, border:'1px solid '+(isCurrent?'#0071e3':(sel?'#7c3aed':'var(--line)')), background: isCurrent?'#0071e3':(sel?'#f3e8ff':'white'), color: isCurrent?'white':(sel?'#7c3aed':'var(--ink-2)'), borderRadius:5, cursor:'pointer', fontFamily:'inherit', fontWeight: (sel||isCurrent)?600:500}}>
                    {m}月
                  </button>
                );
              })}
            </div>

            {/* 选整月按钮 */}
            <button type="button" onClick={() => apply({ kind:'month', year:pickerYear, month:pickerMonth })}
              style={{width:'100%', padding:'6px 10px', fontSize:11, border:'1px solid #0071e3', background: '#0071e3', color:'white', borderRadius:6, cursor:'pointer', fontFamily:'inherit', fontWeight:600, marginBottom:6}}>
              ✓ 整月: {pickerYear} 年 {pickerMonth} 月
            </button>

            {/* 周选择 */}
            <div style={{fontSize:10, color:'var(--ink-3)', marginBottom:3}}>或选某一周(1-7号 / 8-14号 / 15-21号 / 22-28号 / 29号-月底):</div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:3}}>
              {[1,2,3,4,5].map(w => {
                const sel = value?.kind === 'week_of_month' && value?.year === pickerYear && value?.month === pickerMonth && value?.week === w;
                return (
                  <button key={w} type="button" onClick={() => apply({ kind:'week_of_month', year:pickerYear, month:pickerMonth, week:w })}
                    style={{padding:'5px 0', fontSize:10, border:'1px solid '+(sel?'#0071e3':'var(--line)'), background: sel?'#0071e3':'white', color: sel?'white':'var(--ink-2)', borderRadius:5, cursor:'pointer', fontFamily:'inherit', fontWeight: sel?600:500}}>
                    第 {w} 周
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// 🆕 售后状态
const AFTERSALE_STATUSES = [
  { key:'pending_remind', label:'待催货', color:'#ca8a04', bg:'#fef9c3' },
  { key:'reminded',       label:'已催货', color:'#ea580c', bg:'#fff7ed' },
  { key:'pending_return', label:'待回货', color:'#0369a1', bg:'#e0f2fe' },
  { key:'returned',       label:'已回货', color:'#16a34a', bg:'#dcfce7' },
  { key:'customer_refund',label:'客户退款', color:'#dc2626', bg:'#fef2f2' },
  { key:'closed',         label:'关闭',    color:'#525252', bg:'#f5f5f5' },
];

// 🆕 补件状态
const REFILL_STATUSES = [
  { key:'pending_order', label:'待下单', color:'#ca8a04' },
  { key:'ordered',       label:'已下单', color:'#0369a1' },
  { key:'shipped',       label:'已发货', color:'#7c3aed' },
  { key:'delivered',     label:'已签收', color:'#16a34a' },
  { key:'cancelled',     label:'取消',   color:'#525252' },
];

// 🆕 退款类型
const REFUND_TYPES = [
  { key:'resale',          label:'转售',         color:'#ca8a04', bg:'#fef9c3' },
  { key:'size_mismatch',   label:'尺寸不适合',    color:'#0891b2', bg:'#e0f2fe' },
  { key:'quality_issue',   label:'产品质量问题',  color:'#16a34a', bg:'#dcfce7' },
  { key:'color_mismatch',  label:'颜色不符',      color:'#db2777', bg:'#fce7f3' },
  { key:'customer_cancel', label:'客户主动取消',  color:'#525252', bg:'#f5f5f5' },
  { key:'logistics',       label:'物流问题',      color:'#ea580c', bg:'#fff7ed' },
  { key:'other',           label:'其他',         color:'#7c3aed', bg:'#ede9fe' },
];

// 🆕 退款支付方式
const REFUND_PAYMENT_METHODS = [
  { key:'shopify_payments', label:'Shopify Payments', color:'#5b3aff' },
  { key:'stripe_card',      label:'Stripe Card',      color:'#7c3aed' },
  { key:'paypal',           label:'PayPal',           color:'#0070ba' },
  { key:'wire_transfer',    label:'Wire Transfer',    color:'#16a34a' },
  { key:'other',            label:'其他',             color:'#525252' },
];

// 🆕 退款审核状态
const REFUND_STATUSES = [
  { key:'pending',   label:'待审核', color:'#ca8a04', bg:'#fef9c3' },
  { key:'approved',  label:'已审核', color:'#0369a1', bg:'#e0f2fe' },
  { key:'completed', label:'已完成', color:'#16a34a', bg:'#dcfce7' },
  { key:'rejected',  label:'拒绝',   color:'#dc2626', bg:'#fef2f2' },
];

// ============================================================
// 报价单 - 多公司预设 (基于历史业务配置)
// 🆕 fix51: 公司全称按美工/拍摄部 SHOPS_PRESET 标准统一
// ============================================================
const SELLER_PRESETS = {
  radilum: { name:'Radilum', prefix:'RD', address:'177 Joe Routt Blvd, College Station, TX 77840', phone:'+1 800-761-1037', website:'radilum.com', email:'support@radilum.com', desc:'美国 Radilum (radilum.com) - 网站对客户报价' },
  jiangmen_radilum: { name:'Radilum Inc', prefix:'RDI', address:'Building 5, No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China', phone:'+86 760-2233-1037', website:'radilum.com', email:'export@radilum.com', desc:'江门 Radilum Inc - 内部出口公司' },
  vakkerlight: { name:'Vakkerlight', prefix:'VK', address:'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China', phone:'+86 760-2233-1037', website:'vakkerlight.com', email:'support@vakkerlight.com', desc:'Vakkerlight 主品牌' },
  dekorfine: { name:'Dekorfine', prefix:'DF', address:'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China', phone:'+86 760-2233-1037', website:'dekorfine.com', email:'support@dekorfine.com', desc:'Dekorfine 品牌' },
  mooijane: { name:'Mooijane', prefix:'MJ', address:'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China', phone:'+86 760-2233-1037', website:'mooijane.com', email:'support@mooijane.com', desc:'Mooijane 品牌' },
  docos: { name:'Docos.us', prefix:'DC', address:'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China', phone:'+86 760-2233-1037', website:'docos.us', email:'support@docos.us', desc:'Docos.us 品牌' },
  lumioshine: { name:'Lumioshine', prefix:'LS', address:'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China', phone:'+86 760-2233-1037', website:'lumioshine.com', email:'support@lumioshine.com', desc:'Lumioshine 品牌' },
  rayonshine: { name:'Rayonshine', prefix:'RS', address:'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China', phone:'+86 760-2233-1037', website:'rayonshine.com', email:'support@rayonshine.com', desc:'Rayonshine 品牌' },
  mooiehome: { name:'Mooiehome', prefix:'MH', address:'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China', phone:'+86 760-2233-1037', website:'mooiehome.com', email:'support@mooiehome.com', desc:'Mooiehome 品牌' },
  pinlighting: { name:'Pinlighting', prefix:'PL', address:'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China', phone:'+86 760-2233-1037', website:'pinlighting.com', email:'support@pinlighting.com', desc:'Pinlighting 品牌' },
  mooielight: { name:'Mooielight', prefix:'MO', address:'No.17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong, China', phone:'+86 760-2233-1037', website:'mooielight.com', email:'support@mooielight.com', desc:'Mooielight 品牌' },
};

// 银行/买家自动填充 - 仅 Radilum 系列
const RADILUM_BANK = {
  bank_name: 'China Merchants Bank Co., Ltd., Zhongshan Guzhen Branch',
  bank_address: 'No. 17, Zhongxing Avenue, Guzhen Town, Zhongshan City, Guangdong Province',
  account_name: 'Radilum INC',
  account_number: '76090192D632009',
  swift_code: 'CMBCCNBSXXX',
};
const RADILUM_DEFAULT_BUYER = 'JANEDECOR INC\n424 LINDSEY LN, TYLER, TX 75701-1590\nUnited States';

const DOC_TYPES = [
  { key:'quotation', label:'Quotation 报价单', desc:'对客户出价' },
  { key:'pi', label:'Proforma Invoice (PI) 形式发票', desc:'确认订单 + 收款' },
  { key:'po', label:'Purchase Order (PO) 采购单', desc:'对供应商' },
];

const QUOTE_TERMS_PRESET = `1. Prices are quoted in USD and valid for 30 days from issue date.
2. Payment terms: 50% deposit upon order confirmation, balance before shipment.
3. Lead time: approximately 25-35 working days after deposit received.
4. Shipping: FOB Shenzhen / EXW Zhongshan unless otherwise specified.
5. Warranty: 12 months from delivery date for manufacturing defects.
6. Custom orders are non-refundable once production begins.`;

// ============================================================
// 汇报系统 - 部门 + 优先级
// ============================================================
const DEPARTMENTS = [
  { key:'merchandiser', label:'跟单', icon:'📋' },
  { key:'finance', label:'财务', icon:'💰' },
  { key:'design', label:'设计', icon:'🎨' },
  { key:'art', label:'美工', icon:'🖼️' },
  { key:'factory', label:'工厂', icon:'🏭' },
  { key:'photo', label:'拍摄', icon:'📷' },
  { key:'customer_service', label:'客服', icon:'💬' },
  { key:'logistics', label:'物流', icon:'🚚' },
  { key:'other', label:'其他', icon:'📌' },
];

const TICKET_STATUS = [
  { key:'pending', label:'待处理', cls:'ticket-status-pending' },
  { key:'accepted', label:'已接收', cls:'ticket-status-accepted' },
  { key:'processing', label:'处理中', cls:'ticket-status-processing' },
  { key:'resolved', label:'已解决', cls:'ticket-status-resolved' },
  { key:'rejected', label:'已驳回', cls:'ticket-status-rejected' },
];

const TICKET_PRIORITY = [
  { key:'low', label:'一般', cls:'ticket-pri-low' },
  { key:'mid', label:'重要', cls:'ticket-pri-mid' },
  { key:'high', label:'紧急', cls:'ticket-pri-high' },
];

// ============================================================
// 知识库分类
// ============================================================
const KB_CATEGORIES = [
  { key:'pre-sales', label_cn:'售前问题', label_en:'Pre-sales', color:'#1d4ed8' },
  { key:'product', label_cn:'产品问题', label_en:'Product Questions', color:'#7c2d12' },
  { key:'logistics', label_cn:'物流问题', label_en:'Logistics Issues', color:'#b45309' },
  { key:'after-sales', label_cn:'售后问题', label_en:'After-sales', color:'#b91c1c' },
  { key:'during-sale', label_cn:'售中问题', label_en:'During-sale', color:'#7e22ce' },
];

// 难度自动建议
const suggestDifficulty = (cat, durationMin) => {
  // 时长优先
  if (durationMin > 0) {
    if (durationMin > 10) return 'hard';
    if (durationMin >= 5) return 'mid';
    return 'easy';
  }
  // 类别兜底
  if (['拒付','加急'].includes(cat)) return 'hard';
  if (['退货','报价','售后','补发','取消订单','定制咨询','实拍'].includes(cat)) return 'mid';
  return 'easy';
};

// ============================================================
// 图标 (内联 SVG)
// ============================================================
const Icon = ({ name, className='w-4 h-4', style }) => {
  const paths = {
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
    download: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
  };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={style}>
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[name]||paths.doc}/>
    </svg>
  );
};

// ============================================================
// Toast 通知 hook
// ============================================================
const useToast = () => {
  const [msg, setMsg] = useState(null);
  const show = useCallback((m) => {
    setMsg(m);
    setTimeout(() => setMsg(null), 2200);
  }, []);
  const node = msg ? <div className="toast">{msg}</div> : null;
  return [show, node];
};


// ============================================================
// 登录 / Session
// ============================================================
const LoginScreen = ({ employees, onLogin }) => {
  const [selectedId, setSelectedId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // 🆕 fix46: 密码区改成 Modal,Modal 的 autoFocus 会自动聚焦,不需要 scrollIntoView
  // 留 ref 给 Modal 内部元素引用
  const passwordSectionRef = useRef(null);
  const passwordInputRef = useRef(null);
  // 选中员工后调试输出 + 兜底聚焦
  useEffect(() => {
    if (selectedId) {
      console.log('[fix46] 选中员工:', selectedId, '· 弹出密码 Modal');
      setTimeout(() => passwordInputRef.current?.focus(), 100);
    }
  }, [selectedId]);
  
  // 🔒 老板秘密登录入口
  const [bossLoginOpen, setBossLoginOpen] = useState(false);
  const [bossName, setBossName] = useState('');
  const [bossPwd, setBossPwd] = useState('');
  const [bossError, setBossError] = useState('');
  
  const tryBossLogin = () => {
    const hiddenUsers = employees.filter(e => e.hideFromList);
    const inputName = bossName.trim().toLowerCase();
    const userByName = hiddenUsers.find(u => u.name.toLowerCase() === inputName);
    
    if (!userByName) {
      // 账号不存在 — 可能 localStorage 没同步,告知用户
      const allHidden = hiddenUsers.map(u => u.name).join(' / ') || '(无)';
      setBossError(`账号不存在 · 当前系统中的管理账号:${allHidden}`);
      return;
    }
    if (userByName.password !== bossPwd) {
      setBossError('密码不正确');
      return;
    }
    onLogin(userByName);
  };

  const sel = employees.find(e => e.id === selectedId);

  const tryLogin = () => {
    if (!sel) { setError('请选择账号'); return; }
    if (sel.password !== password) {
      // 🆕 fix40: 详细的密码错误诊断
      console.warn('[登录失败] 用户:', sel.name, '· 输入密码长度:', password.length, '· 期望长度:', (sel.password || '').length);
      setError(`密码不正确 (${sel.name})。如果忘记密码请联系管理员重设。`);
      return;
    }
    console.log('[登录成功] 用户:', sel.name, '· 角色:', sel.role);
    onLogin(sel);
  };

  // 员工头像配色 (Apple system colors)
  const avatarColors = ['#0071e3','#34c759','#ff9500','#ff3b30','#5e5ce6','#af52de','#ff2d55','#5ac8fa','#ffcc00','#a2845e','#8e8e93'];
  const colorOf = (id) => {
    const idx = (employees.findIndex(e => e.id === id) || 0) % avatarColors.length;
    return avatarColors[idx];
  };

  return (
    <div className="login-bg" data-login-screen>
      <div className="login-card fade-in">
        {/* Header */}
        <div style={{padding:'48px 48px 24px', textAlign:'center', borderBottom:'1px solid var(--line)'}}>
          <div className="font-display" style={{fontSize:'40px', fontWeight:600, letterSpacing:'-.022em', marginBottom:'6px'}}>统一工作台</div>
          <div style={{color:'var(--ink-3)', fontSize:'15px', fontWeight:400}}>选择你的账号继续</div>
        </div>

        {/* Employee grid */}
        <div style={{padding:'32px 48px'}}>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3" style={{gap:'14px'}}>
            {employees.filter(e => !e.hideFromList).map(e => {
              const isSelected = selectedId === e.id;
              const initials = (e.name || '?').slice(-1);
              return (
                <div
                  key={e.id}
                  className={`emp-card${isSelected ? ' selected' : ''}`}
                  onClick={() => { setSelectedId(e.id); setError(''); setPassword(''); }}
                >
                  <div className="emp-avatar-lg" style={{background: colorOf(e.id)}}>{initials}</div>
                  <div style={{fontSize:'14px', fontWeight:500, color:'var(--ink)', letterSpacing:'-.003em'}}>
                    {e.name}{e.alias && <span style={{color:'var(--ink-3)', fontWeight:400, marginLeft:4}}>{e.alias}</span>}
                  </div>
                  {e.role === 'super_admin' && <div style={{fontSize:'11px', color:'var(--accent)', marginTop:2, fontWeight:600}}>👑 {e.title || '总管 · Manager'}</div>}
                  {e.role === 'admin' && <div style={{fontSize:'11px', color:'var(--accent)', marginTop:2, fontWeight:500}}>⭐ {e.title || '主管 · Admin'}</div>}
                  {e.role === 'finance' && <div style={{fontSize:'11px', color:'#a85e00', marginTop:2, fontWeight:500}}>💰 {e.title || '财务 · Finance'}</div>}
                  {e.sites && <div style={{fontSize:'11px', color:'var(--ink-4)', marginTop:3}}>{e.sites}</div>}
                </div>
              );
            })}
          </div>
          {/* 🆕 fix40: 列表为空的诊断 + 找不到账号 链接 */}
          {employees.filter(e => !e.hideFromList).length === 0 ? (
            <div style={{textAlign:'center', padding:'32px 20px', background:'#fef3c7', border:'1px solid #fcd34d', borderRadius:12, color:'#78350f', fontSize:13, marginTop:18}}>
              <div style={{fontSize:28, marginBottom:8}}>⚠</div>
              <div style={{fontWeight:600, marginBottom:8}}>员工列表为空</div>
              <div style={{marginBottom:12}}>可能是 localStorage 损坏或还没加载。点下面按钮重置后重试。</div>
              <button onClick={() => { localStorage.clear(); window.location.reload(); }}
                style={{padding:'8px 16px', background:'#0071e3', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontSize:13, fontWeight:600, fontFamily:'inherit'}}>
                🔄 清空缓存并刷新
              </button>
            </div>
          ) : (
            <div style={{textAlign:'center', marginTop:18}}>
              <button onClick={() => {
                const allNames = employees.map(e => '• ' + e.name + (e.alias ? ' (' + e.alias + ')' : '') + (e.hideFromList ? ' — 管理员·走右下秘密入口' : '')).join('\n');
                const visible = employees.filter(e => !e.hideFromList).length;
                const hidden = employees.filter(e => e.hideFromList).length;
                alert(`📋 系统里现有 ${employees.length} 个账号 (显示 ${visible}, 隐藏 ${hidden}):\n\n${allNames}\n\n找不到你?\n• 普通员工 — 联系管理员在 ⚙ 设置中心添加\n• 管理员/老板 — 点右下角 🔐 管理员 走秘密入口`);
              }}
                style={{background:'none', border:'none', color:'var(--ink-3)', fontSize:12, cursor:'pointer', textDecoration:'underline', fontFamily:'inherit'}}>
                🔍 找不到你的账号?
              </button>
            </div>
          )}
        </div>

        {/* 🆕 fix46: 密码改用居中 Modal — 无论员工列表多长都能看到,不需要滚动 */}
        {sel && (
          <div
            className="login-pwd-backdrop"
            onClick={() => { setSelectedId(''); setPassword(''); setError(''); }}
            style={{
              position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:10000,
              display:'flex', alignItems:'center', justifyContent:'center', padding:20,
              animation:'fade-in .2s ease-out',
            }}
          >
            <div
              className="login-pwd-modal"
              onClick={e => e.stopPropagation()}
              ref={passwordSectionRef}
              style={{
                background:'white', borderRadius:18, maxWidth:400, width:'100%',
                padding:'28px 32px', boxShadow:'0 20px 60px rgba(0,0,0,.25)',
                animation:'slide-up .25s ease-out',
              }}
            >
              <div style={{display:'flex', alignItems:'center', gap:14, marginBottom:18}}>
                <div className="emp-avatar-lg" style={{background:colorOf(sel.id), width:54, height:54, fontSize:20, margin:0}}>
                  {(sel.name || '?').slice(-1)}
                </div>
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontSize:18, fontWeight:600, color:'var(--ink)', letterSpacing:'-.022em'}}>
                    欢迎,{sel.name}{sel.alias && ` ${sel.alias}`}
                  </div>
                  <div style={{fontSize:13, color:'var(--ink-3)', marginTop:2}}>
                    {sel.role === 'super_admin' ? `👑 ${sel.title || '客服部总管'}` :
                     sel.role === 'admin' ? `⭐ ${sel.title || '主管账号'}` :
                     sel.role === 'finance' ? `💰 ${sel.title || '财务账号'}` :
                     sel.title || '员工账号'}
                  </div>
                </div>
              </div>

              <label style={{display:'block', fontSize:12, fontWeight:600, color:'var(--ink-2)', marginBottom:6}}>密码</label>
              <input
                ref={passwordInputRef}
                type="password"
                value={password}
                onChange={e => { setPassword(e.target.value); setError(''); }}
                onKeyDown={e => e.key === 'Enter' && tryLogin()}
                placeholder="输入密码"
                autoFocus
                className={error ? 'input-error' : ''}
                style={{fontSize:15, padding:'12px 14px', borderRadius:10, width:'100%', border:'1px solid var(--line)', outline:'none', fontFamily:'inherit'}}
              />

              {error && (
                <div className="fade-in" style={{
                  marginTop:12, padding:'10px 14px', borderRadius:10,
                  background:'#fef2f2', border:'1px solid #fca5a5',
                  fontSize:13, color:'#991b1b', fontWeight:600,
                  display:'flex', alignItems:'center', gap:8,
                }}>
                  <span style={{fontSize:16}}>⚠️</span>
                  <span>{error}</span>
                </div>
              )}

              <div style={{display:'flex', gap:10, marginTop:18}}>
                <button className="btn-sec" onClick={() => { setSelectedId(''); setPassword(''); setError(''); }}
                  style={{padding:'11px 18px', fontSize:14}}>
                  取消
                </button>
                <button className="btn-pri" onClick={tryLogin}
                  style={{flex:1, padding:'11px 24px', fontSize:15, fontWeight:600}}>
                  继续 →
                </button>
              </div>

              <div style={{marginTop:14, fontSize:11, color:'var(--ink-4)', textAlign:'center'}}>
                默认密码:主管 admin123 · 员工 123456
              </div>
            </div>
          </div>
        )}

        {!sel && (
          <div style={{padding:'0 48px 40px', textAlign:'center', color:'var(--ink-4)', fontSize:'13px'}}>
            ↑ 选择一个账号开始
          </div>
        )}
      </div>
      
      {/* 🔒 管理员登录入口 - 不显眼但能找到 */}
      <button 
        onClick={() => { setBossLoginOpen(true); setBossError(''); }} 
        title="管理员登录"
        style={{
          position:'fixed', right:18, bottom:14,
          padding:'5px 12px', border:'1px solid rgba(0,0,0,.08)', background:'rgba(255,255,255,.7)',
          borderRadius:14, cursor:'pointer', fontSize:11, color:'#86868b', fontFamily:'inherit',
          opacity:.7, transition:'opacity .15s, color .15s, border-color .15s',
          backdropFilter:'blur(8px)',
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
        onMouseLeave={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.color = '#86868b'; e.currentTarget.style.borderColor = 'rgba(0,0,0,.08)'; }}
      >
        🔐 管理员
      </button>
      
      {/* 老板登录弹窗 */}
      {bossLoginOpen && (
        <div onClick={() => setBossLoginOpen(false)}
          style={{position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center', padding:20}}>
          <div onClick={e => e.stopPropagation()}
            style={{background:'white', borderRadius:14, maxWidth:400, width:'100%', padding:28}}>
            <div style={{textAlign:'center', marginBottom:20}}>
              <div style={{fontSize:36, marginBottom:8}}>🔒</div>
              <div className="font-display" style={{fontSize:17, fontWeight:600}}>管理入口</div>
              <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>仅限授权人员</div>
            </div>
            <div style={{marginBottom:10}}>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>用户名</label>
              <input value={bossName} onChange={e => { setBossName(e.target.value); setBossError(''); }}
                onKeyDown={e => e.key === 'Enter' && tryBossLogin()}
                placeholder="输入用户名"
                className={bossError ? 'input-error' : ''}
                style={{width:'100%', padding:'10px 12px', border:'1px solid var(--line)', borderRadius:8, fontSize:14, fontFamily:'inherit'}} />
            </div>
            <div style={{marginBottom:14}}>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>密码</label>
              <input type="password" value={bossPwd} onChange={e => { setBossPwd(e.target.value); setBossError(''); }}
                onKeyDown={e => e.key === 'Enter' && tryBossLogin()}
                placeholder="输入密码" autoFocus
                className={bossError ? 'input-error' : ''}
                style={{width:'100%', padding:'10px 12px', border:'1px solid var(--line)', borderRadius:8, fontSize:14, fontFamily:'inherit'}} />
            </div>
            {bossError && (
              <div className="fade-in" style={{
                padding:'10px 14px', background:'#fef2f2', border:'1px solid #fca5a5', borderRadius:8,
                fontSize:13, color:'#991b1b', fontWeight:600, marginBottom:12,
                display:'flex', alignItems:'center', gap:8, justifyContent:'center',
              }}>
                <span style={{fontSize:16}}>⚠️</span>
                <span>{bossError}</span>
              </div>
            )}
            <div style={{display:'flex', gap:8}}>
              <button onClick={() => setBossLoginOpen(false)} className="btn-sec" style={{flex:1, padding:'10px'}}>取消</button>
              <button onClick={tryBossLogin} disabled={!bossName.trim() || !bossPwd}
                style={{flex:2, padding:'10px', background:'var(--accent)', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:14, opacity: (bossName.trim() && bossPwd) ? 1 : 0.5}}>
                进入
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================
// 顶部导航
// ============================================================
const TopNav = ({ user, activeTab, setActiveTab, onLogout, stats, notifPerm, requestNotifPerm, cloudOn, employees, switchAccount, onOpenSearch, cdmUnreadCount = 0, cdmUrgentUnread = 0, topTabs = [], sidebarHiddenCount = 0, onOpenCustomize }) => {
  const [switchModalOpen, setSwitchModalOpen] = useState(false);
  const isAdmin = (user.role === 'admin' || user.role === 'super_admin');
  const isFinanceVisible = (user.role === 'finance' || user.role === 'admin' || user.role === 'super_admin');
  
  // 🆕 fix10: tabs 不再在 TopNav 内部计算了 — 由 App 传入 topTabs(已根据用户布局偏好筛选)

  const bellTotal = (stats.overdue || 0) + (stats.dueToday || 0);
  const bellLabel = notifPerm === 'granted'
    ? `桌面通知已开启${bellTotal > 0 ? ` · ${stats.overdue} 逾期 + ${stats.dueToday} 今日到期` : ' · 暂无到期'}`
    : notifPerm === 'denied'
    ? '通知已被浏览器禁用'
    : '点击开启桌面通知';

  // 头像配色
  const avatarColors = ['#0071e3','#34c759','#ff9500','#ff3b30','#5e5ce6','#af52de','#ff2d55','#5ac8fa','#ffcc00','#a2845e','#8e8e93'];
  const idx = (user.name || '').charCodeAt(0) % avatarColors.length;
  const avatarColor = avatarColors[idx];
  const initials = (user.name || '?').slice(-1);

  return (
    <div style={{
      borderBottom:'1px solid var(--line)',
      background:'rgba(251,251,253,.85)',
      backdropFilter:'saturate(180%) blur(20px)',
      WebkitBackdropFilter:'saturate(180%) blur(20px)',
      position:'sticky', top:0, zIndex:20
    }}>
      {/* Row 1: Logo + User + Actions */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4" style={{height:56}}>
        <div className="flex items-center gap-3">
          <div className="font-display" style={{fontSize:'19px', fontWeight:600, letterSpacing:'-.022em'}}>统一工作台</div>
          <span className={`cloud-status ${cloudOn?'ok':'local'}`}>
            <span className="dot"></span>
            {cloudOn ? '云端' : '本地'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* 🔍 全局搜索 */}
          <button
            onClick={onOpenSearch}
            title="搜索任何内容 (Ctrl+K)"
            style={{
              display:'flex', alignItems:'center', gap:6, padding:'5px 10px 5px 10px',
              background:'var(--bg-elevated)', border:'1px solid var(--line)', borderRadius:'var(--radius-pill)',
              cursor:'pointer', fontFamily:'inherit', fontSize:12, color:'var(--ink-3)', transition:'all .15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.color = 'var(--ink-3)'; }}
          >
            🔍 <span className="hidden sm:inline">搜索</span>
            <kbd style={{padding:'1px 5px', background:'var(--bg)', borderRadius:3, fontSize:10, marginLeft:2, border:'1px solid var(--line)'}}>⌘K</kbd>
          </button>
          
          <button
            onClick={requestNotifPerm}
            title={bellLabel}
            style={{
              position:'relative', background:'transparent', border:'none', cursor:'pointer',
              padding:'6px 8px', borderRadius:'50%', transition:'background .15s',
              fontSize:'17px',
              filter: notifPerm === 'granted' ? 'none' : 'grayscale(70%) opacity(0.55)'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-elevated)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            🔔
            {bellTotal > 0 && (
              <span style={{
                position:'absolute', top:'2px', right:'2px',
                background:'var(--bad)', color:'white', borderRadius:'50%',
                fontSize:'9px', fontWeight:600, minWidth:'15px', height:'15px',
                display:'flex', alignItems:'center', justifyContent:'center',
                border:'1.5px solid rgba(251,251,253,1)', lineHeight:1
              }}>{bellTotal}</span>
            )}
          </button>

          <button onClick={() => setSwitchModalOpen(true)}
            style={{display:'flex', alignItems:'center', gap:8, padding:'4px 12px 4px 4px', borderRadius:'var(--radius-pill)', background:'var(--bg-elevated)', border:'none', cursor:'pointer', fontFamily:'inherit'}}
            title="点击切换账号">
            <div style={{
              width:28, height:28, borderRadius:'50%', background:avatarColor,
              color:'white', fontWeight:600, fontSize:13,
              display:'flex', alignItems:'center', justifyContent:'center'
            }}>{initials}</div>
            <div style={{fontSize:13, fontWeight:500, color:'var(--ink)', lineHeight:1.1, textAlign:'left'}}>
              {user.name}{user.alias && <span style={{color:'var(--ink-3)', fontWeight:400, marginLeft:3}}>{user.alias}</span>}
              <div style={{fontSize:10, color:'var(--ink-4)', fontWeight:400, marginTop:1}}>{
                user.title ? `${user.title} · 点击切换` :
                user.role === 'super_admin' ? '总管 · 点击切换' :
                user.role === 'admin' ? '主管 · 点击切换' :
                user.role === 'finance' ? '财务 · 点击切换' : '员工 · 点击切换'
              }</div>
            </div>
          </button>

          {switchModalOpen && employees && (() => {
            const isAdminViewer = user.role === 'admin' || user.role === 'super_admin';
            return ReactDOM.createPortal(
            <div onClick={() => setSwitchModalOpen(false)}
              style={{
                position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:99999,
                display:'flex', alignItems:'flex-start', justifyContent:'center',
                padding:'4vh 16px',
                overflowY:'auto', overflowX:'hidden',
              }}>
              <div onClick={e => e.stopPropagation()}
                style={{
                  background:'white', borderRadius:'var(--radius-lg)',
                  maxWidth:520, width:'100%',
                  maxHeight:'92vh',
                  display:'flex', flexDirection:'column',
                  overflow:'hidden',  // 让子元素自己处理滚动
                  boxShadow:'0 25px 70px rgba(0,0,0,.3)',
                }}>
                {/* Header - sticky 顶部 */}
                <div style={{padding:'18px 22px', borderBottom:'1px solid var(--line)', flexShrink:0}}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                    <div className="font-display" style={{fontSize:16, fontWeight:600}}>
                      {isAdminViewer ? '👁 切换账号 / 查看员工视角' : '🔄 切换账号'}
                    </div>
                    <button className="btn-sec" onClick={() => setSwitchModalOpen(false)} style={{padding:'4px 12px'}}>×</button>
                  </div>
                  {isAdminViewer && (
                    <div style={{padding:'8px 12px', background:'#fef3c7', border:'1px solid #fbbf24', borderRadius:6, fontSize:11, color:'#854d0e', marginTop:10, lineHeight:1.5}}>
                      💡 <strong>主管/老板权限</strong>:选择员工 → 无需密码直接以查看模式进入<br/>
                      所有操作的"创建人"仍是该员工 · 顶部会有黄色横幅 · 可一键切回
                    </div>
                  )}
                  <div style={{fontSize:11, color:'var(--ink-3)', marginTop:8}}>当前：<strong>{user.name}{user.alias && ' ' + user.alias}</strong> · 选择要切换到的账号：</div>
                </div>
                
                {/* Body - 可滚动区 */}
                <div style={{padding:'14px 22px', overflowY:'auto', overflowX:'hidden', flex:1, minHeight:0}}>
                  <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:8}}>
                    {employees.filter(e => e.id !== user.id && !e.hideFromList).map(emp => (
                      <button key={emp.id}
                        onClick={() => { switchAccount && switchAccount(emp); setSwitchModalOpen(false); }}
                        style={{
                          padding:'10px 12px', borderRadius:'var(--radius)',
                          border:'1px solid var(--line)', background:'white', cursor:'pointer',
                          textAlign:'left', fontFamily:'inherit', display:'flex', flexDirection:'column', gap:2,
                          transition:'all .12s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-elevated)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = 'var(--line)'; }}
                      >
                        <div style={{fontWeight:600, fontSize:13}}>
                          {emp.name}{emp.alias ? ' ' + emp.alias : ''}
                          {emp.role === 'super_admin' && <span style={{color:'var(--accent)', marginLeft:4, fontSize:10}}>👑</span>}
                          {emp.role === 'admin' && <span style={{color:'var(--accent)', marginLeft:4, fontSize:10}}>⭐</span>}
                          {emp.role === 'finance' && <span style={{color:'var(--accent)', marginLeft:4, fontSize:10}}>💰</span>}
                        </div>
                        <div style={{fontSize:10, color:'var(--ink-3)'}}>{emp.sites || emp.title || '—'}</div>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Footer */}
                <div style={{padding:'10px 22px', borderTop:'1px solid var(--line)', flexShrink:0, background:'#fafafa'}}>
                  <div style={{fontSize:10, color:'var(--ink-4)', lineHeight:1.5}}>
                    {isAdminViewer ? '👁 主管/老板模式:无需密码,以查看模式进入' : '💡 切换账号后会要求重新输入密码确认'}
                  </div>
                </div>
              </div>
            </div>,
            document.body
            );
          })()}

          <button
            onClick={onLogout}
            style={{
              background:'transparent', border:'none', color:'var(--ink-3)',
              cursor:'pointer', padding:'6px 10px', borderRadius:'var(--radius-pill)',
              fontSize:13, transition:'all .15s', fontFamily:'inherit'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-elevated)'; e.currentTarget.style.color = 'var(--ink)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink-3)'; }}
          >退出</button>
        </div>
      </div>

      {/* Row 2: Tabs — 🆕 fix10: 只渲染用户钉在顶部的 tabs(其他在左侧栏)
           🆕 fix11: 用 <a href="#tab=..."> 让浏览器支持右键"在新标签页打开"/中键点击/Ctrl+点击 */}
      <div className="max-w-7xl mx-auto px-6" style={{borderTop:'1px solid var(--line)', overflowX:'hidden'}}>
        <div className="tabs-row" style={{display:'flex', alignItems:'center', gap:0, flexWrap:'nowrap', overflowX:'auto'}}>
          {topTabs.map(t => (
            <a key={t.key}
              href={`#tab=${t.key}`}
              className={`nav-tab ${activeTab === t.key ? 'active' : ''}`}
              onClick={(e) => {
                // Ctrl/Cmd/Shift/中键 → 浏览器默认行为(新窗口/新标签)
                if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return;
                e.preventDefault();
                setActiveTab(t.key);
              }}
              style={{whiteSpace:'nowrap', flexShrink:0, textDecoration:'none'}}>
              {t.label}
              {t.badge > 0 && (
                <span style={{
                  display:'inline-flex', alignItems:'center', justifyContent:'center',
                  minWidth:18, height:18, padding:'0 6px',
                  background: t.badgeColor || 'var(--bad)', color:'white', borderRadius:9,
                  fontSize:10, fontWeight:600, marginLeft:4
                }}>{t.badge}</span>
              )}
            </a>
          ))}
          
          {/* 自定义布局按钮 / 左侧栏功能数提示 */}
          <button onClick={onOpenCustomize}
            title="自定义导航布局 — 调整哪些 tab 显示在顶部"
            style={{
              marginLeft:'auto', padding:'5px 12px',
              background:'transparent', color:'var(--ink-3)',
              border:'1px dashed var(--line)', borderRadius:6,
              cursor:'pointer', fontSize:11.5, fontFamily:'inherit',
              display:'inline-flex', alignItems:'center', gap:5,
              whiteSpace:'nowrap', flexShrink:0,
              transition:'all .15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-elevated)'; e.currentTarget.style.borderStyle = 'solid'; e.currentTarget.style.color = 'var(--ink-2)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderStyle = 'dashed'; e.currentTarget.style.color = 'var(--ink-3)'; }}>
            <span>⚙</span>
            <span>布局</span>
            {sidebarHiddenCount > 0 && (
              <span style={{padding:'1px 6px', background:'var(--bg)', color:'var(--ink-3)', borderRadius:8, fontSize:9, fontWeight:600}}>
                +{sidebarHiddenCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// 🆕 fix10: NavGroupDropdown 不再使用 (左侧栏取代),保留空 stub 以防引用残留
const NavGroupDropdown = () => null;

// ============================================================
// 客服跟进表 - 主模块
// ============================================================
// 🆕 事件添加下拉菜单 - 把 6 个按钮折叠成一个,节省横向空间
const EventActionDropdown = ({ record, onAftersale, onRefill, onRefund, onChargeback, onCustom, onPhoto }) => {
  const [open, setOpen] = useState(false);
  const btnRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (btnRef.current?.contains(e.target)) return;
      if (menuRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open]);
  
  // 计算位置(避免被表格遮挡)
  const handleOpen = () => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setMenuPos({
        top: rect.bottom + window.scrollY + 4,
        left: Math.max(8, rect.right + window.scrollX - 200),  // 200 = menu width
      });
    }
    setOpen(v => !v);
  };
  
  const items = [
    { key:'aftersale',  label:'售后',   icon:'🔧', color:'#ea580c', bg:'#fff7ed', onClick: onAftersale },
    { key:'refill',     label:'补件',   icon:'📦', color:'#0369a1', bg:'#e0f2fe', onClick: onRefill },
    { key:'refund',     label:'退款',   icon:'💰', color:'#dc2626', bg:'#fef2f2', onClick: onRefund },
    { key:'chargeback', label:'拒付',   icon:'🚨', color:'#dc2626', bg:'#fef2f2', onClick: onChargeback, highlight: record.category === '拒付' },
    { key:'custom',     label:'定制',   icon:'🎨', color:'#7c3aed', bg:'#f5f3ff', onClick: onCustom, highlight: record.category === '定制咨询' },
    { key:'photo',      label:'实拍',   icon:'📸', color:'#be185d', bg:'#fdf2f8', onClick: onPhoto, highlight: record.category === '实拍' },
  ];
  
  // 高亮的事项类型(根据 category)
  const highlightedItem = items.find(i => i.highlight);
  
  return (
    <>
      <button ref={btnRef} onClick={handleOpen}
        style={{
          width:'100%',
          padding:'4px 8px',
          background: highlightedItem ? highlightedItem.color : 'white',
          color: highlightedItem ? 'white' : 'var(--ink-2)',
          border:'1px solid ' + (highlightedItem ? highlightedItem.color : 'var(--line)'),
          borderRadius:5, cursor:'pointer',
          fontSize:11, fontWeight:600, fontFamily:'inherit',
          display:'flex', alignItems:'center', justifyContent:'center', gap:4,
          whiteSpace:'nowrap',
        }}
        title={highlightedItem ? `${highlightedItem.icon} 跟进事项是${highlightedItem.label},点击添加` : '添加事件'}>
        {highlightedItem 
          ? <>{highlightedItem.icon} {highlightedItem.label} <span style={{opacity:.7, marginLeft:2}}>▾</span></>
          : <>📌 添加事件 ▾</>}
      </button>
      {open && ReactDOM.createPortal(
        <div ref={menuRef}
          style={{
            position:'absolute', top: menuPos.top, left: menuPos.left,
            width:200, background:'white',
            border:'1px solid var(--line)', borderRadius:10,
            boxShadow:'0 8px 24px rgba(0,0,0,.12)', padding:4,
            zIndex:9998,
          }}>
          <div style={{padding:'6px 10px 4px', fontSize:10, color:'var(--ink-3)', fontWeight:600, borderBottom:'1px solid var(--line)', marginBottom:4}}>
            选择事件类型
          </div>
          {items.map(item => (
            <button key={item.key} onClick={() => { item.onClick(); setOpen(false); }}
              style={{
                width:'100%', padding:'8px 10px',
                background: item.highlight ? item.bg : 'transparent',
                color: item.color,
                border:'none', borderRadius:6, cursor:'pointer',
                fontSize:12, fontWeight: item.highlight ? 700 : 500, fontFamily:'inherit',
                display:'flex', alignItems:'center', gap:8,
                textAlign:'left',
                transition:'all .12s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = item.bg; }}
              onMouseLeave={e => { e.currentTarget.style.background = item.highlight ? item.bg : 'transparent'; }}>
              <span style={{fontSize:14}}>{item.icon}</span>
              <span style={{flex:1}}>{item.label}</span>
              {item.highlight && <span style={{fontSize:9, padding:'1px 6px', background:item.color, color:'white', borderRadius:8}}>已选</span>}
            </button>
          ))}
        </div>,
        document.body
      )}
    </>
  );
};
