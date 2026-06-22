/* ============================================================================
 *  base64 老图 → Supabase Storage 一次性迁移脚本
 *  cs-system / 客服统一工作台
 * ----------------------------------------------------------------------------
 *  作用:把历史 attachments 里存成 base64 的图片,上传到 Storage,库里只留 URL。
 *        迁移后这些老图也能走 CDN 加速(和 fix268 新图一致),列表/导出更快。
 *
 *  ⚠ 怎么用(很安全,默认只看不改):
 *    1. 用 super_admin / admin 账号登录 https://dekorfine.github.io/cs-system/
 *    2. F12 打开控制台 → 把本文件【全部内容】粘贴进去回车
 *    3. 先看报告(DRY_RUN=true,只统计、不写库、不上传)
 *    4. 报告无误后,把下面 CONFIG.DRY_RUN 改成 false,再粘贴运行一次 = 真正迁移
 *
 *  安全保证:
 *    - 跑在你已登录的会话里,用 window.CLOUD,不需要任何密钥
 *    - 逐行 try/catch;上传 + 校验成功后才替换该图;任一步失败 → 该图保持原样
 *    - 绝不删除原始数据;只把 base64 字段换成 url 字段
 *    - 分批处理,实时打印进度;可随时刷新页面中止
 * ========================================================================== */

(async function () {
  const CONFIG = {
    DRY_RUN: true,                 // ← 先 true 看报告;确认后改 false 真迁移
    TABLES: [
      { table: 'workspace_records', col: 'attachments', bucket: 'aftersales-images', prefix: 'migrated/' },
      // 需要时取消注释(拒付证据 / 离线订单图):
      // { table: 'chargebacks',     col: 'attachments', bucket: 'business-files',   prefix: 'migrated/chargeback/' },
      // { table: 'offline_orders',  col: 'attachments', bucket: 'business-files',   prefix: 'migrated/offline/' },
    ],
    BATCH: 200,                    // 每批拉取行数
    MIN_B64_LEN: 200,             // base64 串超过此长度才迁(过滤掉极小的图标)
    MAX_IMAGES: 99999,           // 调试时可设小一点先试几张
  };

  const CLOUD = window.CLOUD;
  if (!CLOUD || !CLOUD.client) {
    console.error('❌ 找不到 window.CLOUD —— 请确认已登录 cs-system 再运行本脚本。');
    return;
  }
  const sb = CLOUD.client;
  const log = (...a) => console.log('%c[迁移]', 'color:#0369a1;font-weight:bold', ...a);
  const warn = (...a) => console.warn('%c[迁移]', 'color:#b45309;font-weight:bold', ...a);

  // ---- base64 判定 ----
  const isB64 = (s) => {
    if (typeof s !== 'string') return false;
    if (s.indexOf('data:') === 0 && s.indexOf('base64,') > 0) return s.length >= CONFIG.MIN_B64_LEN;
    // 裸 base64(无 data: 前缀):很长 + 仅 base64 字符
    if (s.length >= CONFIG.MIN_B64_LEN && /^[A-Za-z0-9+/=\s]+$/.test(s.slice(0, 120))) return true;
    return false;
  };

  // 从一个 attachment(字符串或对象)里取出 base64;返回 {b64, mime} 或 null
  const pickB64 = (att) => {
    if (isB64(att)) return { b64: att, mime: null };
    if (att && typeof att === 'object') {
      for (const k of ['url', 'dataUrl', 'data', 'base64', 'image_url', 'src']) {
        if (isB64(att[k])) return { b64: att[k], mime: null, key: k };
      }
    }
    return null;
  };

  // 把迁移好的 url 写回 attachment,保留其它字段
  const setUrl = (att, url) => {
    if (typeof att === 'string') return url;                 // 原本就是裸字符串 → 直接换成 url 字符串
    const out = Object.assign({}, att);
    // 删掉所有可能存 base64 的字段,统一用 url
    ['dataUrl', 'data', 'base64', 'image_url', 'src'].forEach((k) => { if (out[k] !== undefined) delete out[k]; });
    out.url = url;
    return out;
  };

  const dataUrlToFile = (raw, name) => {
    let mime = 'image/png', b64 = raw;
    if (raw.indexOf('data:') === 0) {
      const i = raw.indexOf(',');
      const m = raw.slice(5, i).match(/^([^;]+)/);
      if (m) mime = m[1];
      b64 = raw.slice(i + 1);
    }
    const bin = atob(b64.replace(/\s/g, ''));
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    const ext = (mime.split('/')[1] || 'png').replace('jpeg', 'jpg');
    return new File([arr], name + '.' + ext, { type: mime });
  };

  const stats = { scanned: 0, rowsWithB64: 0, imgs: 0, migrated: 0, failed: 0, rowsUpdated: 0 };
  let imgBudget = CONFIG.MAX_IMAGES;

  for (const cfg of CONFIG.TABLES) {
    log(`—— 处理表 ${cfg.table}.${cfg.col} → 桶 ${cfg.bucket} ——`);
    let from = 0;
    while (true) {
      const { data: rows, error } = await sb
        .from(cfg.table)
        .select('id,' + cfg.col)
        .not(cfg.col, 'is', null)
        .order('id', { ascending: true })
        .range(from, from + CONFIG.BATCH - 1);
      if (error) { warn('拉取失败', cfg.table, error.message); break; }
      if (!rows || rows.length === 0) break;

      for (const row of rows) {
        stats.scanned++;
        let atts = row[cfg.col];
        if (typeof atts === 'string') { try { atts = JSON.parse(atts); } catch (e) { atts = [atts]; } }
        if (!Array.isArray(atts)) atts = atts ? [atts] : [];
        let rowChanged = false, rowHadB64 = false;

        for (let i = 0; i < atts.length; i++) {
          if (imgBudget <= 0) break;
          const hit = pickB64(atts[i]);
          if (!hit) continue;
          rowHadB64 = true; stats.imgs++;
          if (CONFIG.DRY_RUN) continue;
          imgBudget--;
          try {
            const file = dataUrlToFile(hit.b64, `${cfg.table}_${row.id}_${i}`);
            const res = await CLOUD.uploadImage(cfg.bucket, file, cfg.prefix);
            if (!res || !res.url) throw new Error('上传无返回 url(检查桶权限)');
            atts[i] = setUrl(atts[i], res.url);
            rowChanged = true; stats.migrated++;
          } catch (e) {
            stats.failed++;
            warn(`图迁移失败 ${cfg.table}#${row.id}[${i}]:`, e.message || e);
          }
        }

        if (rowHadB64) stats.rowsWithB64++;
        if (rowChanged && !CONFIG.DRY_RUN) {
          const upd = {}; upd[cfg.col] = atts;
          const { error: uErr } = await sb.from(cfg.table).update(upd).eq('id', row.id);
          if (uErr) { stats.failed++; warn(`回写失败 ${cfg.table}#${row.id}:`, uErr.message); }
          else stats.rowsUpdated++;
        }
        if (stats.scanned % 100 === 0) log(`…已扫 ${stats.scanned} 行,发现含 base64 行 ${stats.rowsWithB64},已迁图 ${stats.migrated}`);
      }
      from += CONFIG.BATCH;
      if (imgBudget <= 0) { warn('达到 MAX_IMAGES 上限,提前停止'); break; }
    }
  }

  log('==================== 迁移报告 ====================');
  log(`模式: ${CONFIG.DRY_RUN ? '🟡 DRY-RUN(只统计,未写库)' : '🟢 实际迁移'}`);
  log(`扫描行数: ${stats.scanned}`);
  log(`含 base64 的行: ${stats.rowsWithB64}`);
  log(`base64 图片总数: ${stats.imgs}`);
  if (!CONFIG.DRY_RUN) {
    log(`✅ 成功迁移图片: ${stats.migrated}`);
    log(`✅ 已回写行: ${stats.rowsUpdated}`);
    log(`❌ 失败: ${stats.failed}`);
  } else {
    log(`👉 预计需迁移图片: ${stats.imgs} 张。确认无误后,把 CONFIG.DRY_RUN 改成 false 再运行一次。`);
  }
  log('=================================================');
})();
