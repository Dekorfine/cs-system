// ════════════════════════════════════════════════════════════════════
// 📞 客服跟进 + Customer360Modal(fix52) · fix28-52
// APP_VERSION: 2026.05.27-fix52
// ════════════════════════════════════════════════════════════════════



const CSModule = ({ user, employees, records, setRecords, onTrash, toast, cloudOn }) => {
  const allSites = useSiteCodes();  // 🆕 fix22 联动 3: 合并 内置 SITES + 自定义网站
  const [viewDate, setViewDate] = useState(todayISO());
  const [filterStatus, setFilterStatus] = useState('all');
  const [showAll, setShowAll] = useState(() => {
    // 主管/总管默认开启"查看所有员工"
    return user.role === 'admin' || user.role === 'super_admin';
  });

  // 搜索 + 筛选
  const [search, setSearch] = useState('');
  const [filterSite, setFilterSite] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [filterOwner, setFilterOwner] = useState('all'); // 仅 admin 用
  const [showFilters, setShowFilters] = useState(true);  // 默认展开,方便快速查询
  const [dateRange, setDateRange] = useState('day'); // day | 7d | 30d | range | all
  const [rangeStart, setRangeStart] = useState(todayISO());
  const [rangeEnd, setRangeEnd] = useState(todayISO());

  // 主管解锁历史日期编辑（仅当前会话有效，刷新或切日重置）
  const [adminUnlock, setAdminUnlock] = useState(false);
  
  // 🆕 fix52: 客户档案 360° Modal 状态
  const [customer360Email, setCustomer360Email] = useState(null);
  // 🆕 视图模式：'day' 按当日 | 'all' 跨日期所有记录（分页显示）
  const [viewMode, setViewMode] = useState('day');
  
  // 🆕 分页 state（"全部"模式下生效）
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  
  // 🆕 时间范围筛选(全部模式下) - all/3d/7d/14d/30d/custom
  const [timeFilter, setTimeFilter] = useState('all');
  const [customRangeStart, setCustomRangeStart] = useState('');
  const [customRangeEnd, setCustomRangeEnd] = useState('');
  // 🆕 fix15: 日期范围筛选(本周/本月/任意月第N周)
  const [dateFilter, setDateFilter] = useState({ kind:'all' });
  const [showUnresolvedOnly, setShowUnresolvedOnly] = useState(false);
  
  // 🆕 状态下拉菜单当前打开的行 ID（null = 全部关闭）
  const [statusMenuOpen, setStatusMenuOpen] = useState(null);
  const [statusDropdownPos, setStatusDropdownPos] = useState({ top:0, left:0, width:110 });
  
  // 全局点击关闭下拉
  useEffect(() => {
    if (!statusMenuOpen) return;
    const handler = (e) => {
      if (!e.target.closest('.status-dropdown-wrap') && !e.target.closest('.status-dropdown-portal')) setStatusMenuOpen(null);
    };
    const scrollHandler = () => setStatusMenuOpen(null);  // 滚动时关闭
    document.addEventListener('click', handler);
    window.addEventListener('scroll', scrollHandler, true);
    return () => { 
      document.removeEventListener('click', handler);
      window.removeEventListener('scroll', scrollHandler, true);
    };
  }, [statusMenuOpen]);

  const isAdmin = (user.role === 'admin' || user.role === 'super_admin');

  // 个人 vs 团队视图
  const visibleRecords = useMemo(() => {
    let list = records.filter(r => !r.deleted);
    if (!isAdmin || !showAll) {
      list = list.filter(r => r.ownerId === user.id);
    }
    return list;
  }, [records, isAdmin, showAll, user.id]);

  // 切日时自动重置主管解锁
  useEffect(() => {
    if (!isPastDate(viewDate)) setAdminUnlock(false);
  }, [viewDate]);

  // 当日记录
  const dayRecords = useMemo(() => {
    return visibleRecords.filter(r => r.date === viewDate);
  }, [visibleRecords, viewDate]);

  // 🆕 视图源（day = 当日记录,all = 跨日期所有记录）
  const sourceRecords = useMemo(() => {
    if (viewMode === 'all') {
      // 全部模式：所有可见记录（排除空白行）按日期倒序排
      return visibleRecords
        .filter(isRecordMeaningful)
        .slice()
        .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
    }
    return dayRecords;
  }, [viewMode, dayRecords, visibleRecords]);

  // 表格显示用：当日 + 搜索/筛选（已应用筛选,未分页）
  const tableRecords = useMemo(() => {
    let list = sourceRecords;
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(r =>
        (r.customer||'').toLowerCase().includes(q) ||
        (r.orderRef||'').toLowerCase().includes(q) ||
        (r.note||'').toLowerCase().includes(q)
      );
    }
    if (filterStatus !== 'all') list = list.filter(r => r.status === filterStatus);
    if (filterSite !== 'all') list = list.filter(r => r.site === filterSite);
    if (filterCategory !== 'all') list = list.filter(r => r.category === filterCategory);
    if (filterDifficulty !== 'all') list = list.filter(r => r.difficulty === filterDifficulty);
    if (isAdmin && showAll && filterOwner !== 'all') list = list.filter(r => r.ownerId === filterOwner);
    
    // 🆕 时间范围筛选(仅在全部模式生效) - 改用统一函数
    if (viewMode === 'all') {
      list = filterByTimeRange(list, timeFilter, customRangeStart, customRangeEnd, 'date');
      // 🆕 fix15: 日期范围筛选(本周/本月/任意月第N周)
      list = filterByDateRange(list, dateFilter, 'date');
    }
    
    // 🆕 只看未解决
    if (showUnresolvedOnly) {
      list = list.filter(r => r.status !== 'resolved' && r.status !== 'transferred');
    }
    
    return list;
  }, [sourceRecords, search, filterStatus, filterSite, filterCategory, filterDifficulty, filterOwner, isAdmin, showAll, viewMode, timeFilter, customRangeStart, customRangeEnd, dateFilter, showUnresolvedOnly]);
  
  // 🆕 分页后的数据（在全部模式下分页,当日模式直接显示）
  const totalPages = Math.max(1, Math.ceil(tableRecords.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const pagedRecords = useMemo(() => {
    if (viewMode !== 'all') return tableRecords;  // 当日模式不分页
    const start = (safePage - 1) * pageSize;
    return tableRecords.slice(start, start + pageSize);
  }, [tableRecords, viewMode, safePage, pageSize]);
  
  // 切换筛选条件时重置到第 1 页
  useEffect(() => { setPage(1); }, [viewMode, search, filterStatus, filterSite, filterCategory, filterDifficulty, filterOwner, pageSize]);

  // 导出范围：根据 dateRange 决定，跨日期
  const exportRecords = useMemo(() => {
    const today = todayISO();
    let list = visibleRecords.filter(isRecordMeaningful);  // 🆕 排除空白行
    if (dateRange === 'day') {
      list = list.filter(r => r.date === viewDate);
    } else if (dateRange === '7d') {
      const start = addDays(today, -6);
      list = list.filter(r => r.date >= start && r.date <= today);
    } else if (dateRange === '30d') {
      const start = addDays(today, -29);
      list = list.filter(r => r.date >= start && r.date <= today);
    } else if (dateRange === 'range') {
      list = list.filter(r => r.date >= rangeStart && r.date <= rangeEnd);
    }
    // 同样应用搜索 + 筛选
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(r =>
        (r.customer||'').toLowerCase().includes(q) ||
        (r.orderRef||'').toLowerCase().includes(q) ||
        (r.note||'').toLowerCase().includes(q)
      );
    }
    if (filterStatus !== 'all') list = list.filter(r => r.status === filterStatus);
    if (filterSite !== 'all') list = list.filter(r => r.site === filterSite);
    if (filterCategory !== 'all') list = list.filter(r => r.category === filterCategory);
    if (filterDifficulty !== 'all') list = list.filter(r => r.difficulty === filterDifficulty);
    if (isAdmin && showAll && filterOwner !== 'all') list = list.filter(r => r.ownerId === filterOwner);
    return list;
  }, [visibleRecords, dateRange, viewDate, rangeStart, rangeEnd, search, filterStatus, filterSite, filterCategory, filterDifficulty, filterOwner, isAdmin, showAll]);

  // 导出 CSV
  const handleExport = () => {
    if (exportRecords.length === 0) { toast('⚠️ 当前筛选无记录'); return; }
    const header = ['日期','员工','状态','客户','网站','开始时间','结束时间','时长(分钟)','难度','咨询事项','订单号','备注','下次跟进','截图数','跟进次数','创建时间','更新时间'];
    const rows = [header];
    const diffMap = { easy:'简单', mid:'中等', hard:'复杂' };
    const statusMap = Object.fromEntries(STATUSES.map(s => [s.key, s.label]));
    exportRecords.forEach(r => {
      const emp = employees.find(e => e.id === r.ownerId);
      rows.push([
        r.date,
        emp ? (emp.name + (emp.alias ? ' ' + emp.alias : '')) : '—',
        statusMap[r.status] || r.status,
        r.customer || '',
        r.site || '',
        r.startTime || '',
        r.endTime || '',
        r.durationMin || 0,
        diffMap[r.difficulty] || '',
        r.category || '',
        r.orderRef || '',
        r.note || '',
        r.nextFollowUp || '',
        (r.screenshots || []).length,
        (r.followUps || []).length,
        r.createdAt || '',
        r.updatedAt || '',
      ]);
    });
    const tag = dateRange === 'day' ? viewDate : dateRange === '7d' ? '近7天' : dateRange === '30d' ? '近30天' : dateRange === 'range' ? `${rangeStart}_${rangeEnd}` : '全部';
    const filename = `客服跟进_${tag}_${todayISO()}.csv`;
    downloadCSV(rows, filename);
    toast(`✓ 已导出 ${exportRecords.length} 条记录`);
  };
  
  // 🆕 导出 PDF (包含截图) - 用 window.print() 让用户保存为 PDF
  const handleExportPDF = () => {
    if (tableRecords.length === 0) { toast('⚠️ 无可导出的记录'); return; }
    const diffMap = { easy:'简单', mid:'中等', hard:'复杂' };
    const statusMap = Object.fromEntries(STATUSES.map(s => [s.key, s.label]));
    const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    
    const rangeLabel = viewMode === 'day' ? ('日期 ' + viewDate) : '跨日期 · 全部记录';
    const filterTags = [];
    if (search.trim()) filterTags.push('关键词: "' + search + '"');
    if (filterStatus !== 'all') filterTags.push('状态: ' + statusMap[filterStatus]);
    if (filterSite !== 'all') filterTags.push('网站: ' + filterSite);
    if (filterCategory !== 'all') filterTags.push('事项: ' + filterCategory);
    if (filterDifficulty !== 'all') filterTags.push('难度: ' + diffMap[filterDifficulty]);
    if (isAdmin && showAll && filterOwner !== 'all') {
      const emp = employees.find(e => e.id === filterOwner);
      filterTags.push('员工: ' + (emp ? emp.name : '?'));
    }
    
    // 用字符串拼接生成 rowsHTML（避免嵌套 template literal）
    const rowsHTML = tableRecords.map(function(r, i) {
      const emp = employees.find(e => e.id === r.ownerId);
      const empName = emp ? (emp.name + (emp.alias ? ' ' + emp.alias : '')) : '—';
      const shots = (r.screenshots || []).slice(0, 6);
      const moreShots = (r.screenshots || []).length - 6;
      
      let shotsHTML = '';
      if (shots.length > 0) {
        const imgsHTML = shots.map(s => '<img src="' + esc(s.url || s.data || '') + '" alt="截图" />').join('');
        const moreLabel = moreShots > 0 ? '<span class="more">+' + moreShots + ' 张</span>' : '';
        shotsHTML = '<div class="shots">' + imgsHTML + moreLabel + '</div>';
      }
      
      const followups = (r.followUps || []).map(f => 
        '<div class="fu"><span class="fu-time">' + esc((f.time || '').slice(0, 16)) + '</span> ' + esc(f.text || '') + '</div>'
      ).join('');
      const followupsBlock = followups ? '<div class="fu-list">' + followups + '</div>' : '';
      
      return '<tr>' +
        '<td class="num">' + (i + 1) + '</td>' +
        '<td>' + esc(r.date || '') + '</td>' +
        '<td><span class="status status-' + r.status + '">' + esc(statusMap[r.status] || r.status) + '</span></td>' +
        '<td>' + esc(r.customer || '') + '</td>' +
        '<td>' + esc(empName) + '</td>' +
        '<td>' + esc(r.site || '') + '</td>' +
        '<td>' + esc(r.startTime || '') + ' ~ ' + esc(r.endTime || '') + '<br><small>' + (r.durationMin || 0) + ' 分钟</small></td>' +
        '<td>' + esc(diffMap[r.difficulty] || '') + '</td>' +
        '<td>' + esc(r.category || '') + '</td>' +
        '<td>' + esc(r.orderRef || '') + '</td>' +
        '<td>' + esc(r.note || '') + followupsBlock + '</td>' +
        '<td>' + esc(r.nextFollowUp || '') + '</td>' +
        '<td class="img-cell">' + shotsHTML + '</td>' +
      '</tr>';
    }).join('');
    
    const filterBanner = filterTags.length > 0 
      ? '<div class="filters">🔍 <strong>已应用筛选：</strong> ' + filterTags.map(esc).join(' · ') + '</div>'
      : '';
    
    const exporterName = (user.name || '') + (user.alias ? ' ' + user.alias : '');
    
    const html = '<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><title>客服记录 - ' + esc(rangeLabel) + '</title>' +
      '<link rel="preconnect" href="https://fonts.googleapis.com">' +
      '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
      '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;600;700&display=swap" rel="stylesheet">' +
      '<style>' +
        '* { box-sizing: border-box; }' +
        'body { font-family: "Noto Sans SC", -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans CN", "Noto Sans CJK SC", "WenQuanYi Micro Hei", "Heiti SC", SimHei, sans-serif; padding: 20px; color: #1d1d1f; font-size: 11px; line-height: 1.5; -webkit-print-color-adjust: exact; print-color-adjust: exact; }' +
        'h1 { font-size: 20px; margin: 0 0 4px; }' +
        '.meta { color: #86868b; font-size: 11px; margin-bottom: 12px; }' +
        '.filters { padding: 8px 12px; background: #fef3c7; border-radius: 6px; font-size: 11px; color: #854d0e; margin-bottom: 12px; }' +
        '.filters strong { color: #92400e; }' +
        'table { width: 100%; border-collapse: collapse; }' +
        'th, td { border: 1px solid #d2d2d7; padding: 6px 8px; vertical-align: top; text-align: left; font-size: 11px; }' +
        'th { background: #f5f5f7; font-weight: 600; color: #424245; }' +
        '.num { text-align: center; color: #86868b; }' +
        '.status { padding: 1px 6px; border-radius: 10px; font-size: 10px; font-weight: 600; white-space: nowrap; }' +
        '.status-pending { background: #f5f5f7; color: #525252; }' +
        '.status-following { background: #fff7ed; color: #9a3412; }' +
        '.status-waiting { background: #e0f2fe; color: #075985; }' +
        '.status-resolved { background: #dcfce7; color: #14532d; }' +
        '.status-transferred { background: #fef3c7; color: #854d0e; }' +
        '.shots { display: flex; flex-wrap: wrap; gap: 3px; }' +
        '.shots img { width: 80px; height: 60px; object-fit: cover; border-radius: 3px; border: 1px solid #d2d2d7; }' +
        '.img-cell { min-width: 180px; }' +
        '.more { font-size: 10px; color: #86868b; align-self: center; padding: 0 4px; }' +
        '.fu-list { margin-top: 4px; padding-top: 4px; border-top: 1px dashed #e5e5e5; }' +
        '.fu { font-size: 10px; color: #424245; margin-bottom: 2px; }' +
        '.fu-time { color: #86868b; margin-right: 4px; }' +
        'small { color: #86868b; }' +
        '@page { size: A3 landscape; margin: 8mm; }' +
        '@media print { body { padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; } table { page-break-inside: auto; } tr { page-break-inside: avoid; } .no-print { display: none; } }' +
        '.toolbar { position: fixed; top: 12px; right: 12px; display: flex; gap: 8px; z-index: 100; }' +
        '.toolbar button { padding: 8px 16px; border-radius: 6px; cursor: pointer; font-size: 13px; font-family: inherit; border: none; }' +
        '.btn-print { background: #0071e3; color: white; }' +
        '.btn-close { background: white; color: #1d1d1f; border: 1px solid #d2d2d7; }' +
      '</style></head><body>' +
      '<div class="toolbar no-print">' +
        '<button class="btn-print" onclick="window.print()">🖨 保存为 PDF</button>' +
        '<button class="btn-close" onclick="window.close()">✕ 关闭</button>' +
      '</div>' +
      '<h1>📋 客服记录</h1>' +
      '<div class="meta">' +
        esc(rangeLabel) + ' · 共 <strong>' + tableRecords.length + '</strong> 条记录 · 导出时间：' + new Date().toLocaleString('zh-CN') + ' · 导出人：' + esc(exporterName) +
      '</div>' +
      filterBanner +
      '<table><thead><tr>' +
        '<th style="width:32px">#</th>' +
        '<th style="width:78px">日期</th>' +
        '<th style="width:65px">状态</th>' +
        '<th style="min-width:140px">客户</th>' +
        '<th style="width:90px">员工</th>' +
        '<th style="width:55px">网站</th>' +
        '<th style="width:95px">时段</th>' +
        '<th style="width:45px">难度</th>' +
        '<th style="width:75px">事项</th>' +
        '<th style="width:90px">订单号</th>' +
        '<th style="min-width:160px">备注/跟进</th>' +
        '<th style="width:75px">下次跟进</th>' +
        '<th>截图</th>' +
      '</tr></thead><tbody>' + rowsHTML + '</tbody></table>' +
      '<script>' +
        'window.addEventListener("load", function() {' +
          'setTimeout(function() {' +
            'var imgs = Array.from(document.images);' +
            'var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();' +
            'var imgsReady = Promise.all(imgs.map(function(img) {' +
              'return img.complete ? Promise.resolve() : new Promise(function(res) { img.onload = img.onerror = res; });' +
            '}));' +
            'Promise.all([fontsReady, imgsReady]).then(function() {' +
              'setTimeout(function() { window.print(); }, 300);' +
            '});' +
          '}, 100);' +
        '});' +
      '</' + 'script></body></html>';
    
    const w = window.open('', '_blank', 'width=1200,height=800');
    if (!w) { alert('请允许浏览器弹出窗口才能导出 PDF'); return; }
    w.document.open();
    w.document.write(html);
    w.document.close();
    toast('✓ 已生成 ' + tableRecords.length + ' 条记录的 PDF 预览,请在新窗口点"保存为 PDF"');
  };

  // 跟进提醒 - 主管始终看所有员工（不受"查看所有员工"开关影响）
  const today = todayISO();
  const reminders = useMemo(() => {
    const allLive = records.filter(r => !r.deleted && r.status !== 'resolved' && r.nextFollowUp);
    return isAdmin ? allLive : allLive.filter(r => r.ownerId === user.id);
  }, [records, isAdmin, user.id]);

  const overdueCount = reminders.filter(r => r.nextFollowUp < today).length;
  const todayCount = reminders.filter(r => r.nextFollowUp === today).length;
  const futureCount = reminders.filter(r => r.nextFollowUp > today).length;
  const waitingCount = reminders.filter(r => r.status === 'waiting').length;

  // 统计卡片数据 - 仅统计"有内容"的记录（空白行不算）
  const stats = useMemo(() => {
    const meaningful = dayRecords.filter(isRecordMeaningful);
    const totalEmails = meaningful.length;
    const totalMins = meaningful.reduce((s, r) => s + (r.durationMin || 0), 0);
    const easyN = meaningful.filter(r => r.difficulty === 'easy').length;
    const midN = meaningful.filter(r => r.difficulty === 'mid').length;
    const hardN = meaningful.filter(r => r.difficulty === 'hard').length;
    const followingN = meaningful.filter(r => r.status !== 'resolved').length;
    return { totalEmails, totalMins, easyN, midN, hardN, followingN };
  }, [dayRecords]);

  // 添加新行
  const addRow = () => {
    // 🆕 如果当前日期已经有一行完全空白的（用户点过 + 但没填任何东西）
    const emptyRow = dayRecords.find(r => !isRecordMeaningful(r));
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
    const newRec = {
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
      screenshots: [], // [{id, data, name}]
      followUps: [],   // [{id, time, text, status, screenshots}]
      deleted: false,
    };
    setRecords(prev => [...prev, newRec]);
  };
  
  // 🆕 自动清理：切换日期/重启时,清除所有未填内容的空白行
  useEffect(() => {
    // 不要立即清,让用户有 30 秒输入时间
    const t = setTimeout(() => {
      setRecords(prev => {
        // 仅清理"非当前日期"的空白行（避免清掉用户正在编辑的）
        const cleaned = prev.filter(r => 
          r.date === viewDate ||      // 当前日期保留
          isRecordMeaningful(r) ||    // 有内容保留
          r.deleted                    // 已删除标记保留
        );
        if (cleaned.length === prev.length) return prev;  // 没变化
        return cleaned;
      });
    }, 30000);  // 30 秒后才清理
    return () => clearTimeout(t);
  }, [viewDate]);

  // 更新字段
  const updateRow = (id, patch) => {
    setRecords(prev => prev.map(r => {
      if (r.id !== id) return r;
      const updated = { ...r, ...patch, updatedAt: nowISO() };
      // 自动计算时长
      if (patch.startTime !== undefined || patch.endTime !== undefined) {
        updated.durationMin = minutesBetween(updated.startTime, updated.endTime);
        // 时长变动 -> 重新建议难度 (如果还是建议态)
        if (updated.diffSuggested || !updated.difficulty) {
          const sug = suggestDifficulty(updated.category, updated.durationMin);
          updated.difficulty = sug;
          updated.diffSuggested = true;
        }
      }
      // 类别变动 -> 重新建议难度 (如果还是建议态)
      if (patch.category !== undefined && (updated.diffSuggested || !updated.difficulty)) {
        const sug = suggestDifficulty(patch.category, updated.durationMin);
        updated.difficulty = sug;
        updated.diffSuggested = true;
      }
      // 设置了 nextFollowUp 自动切换到 following
      if (patch.nextFollowUp && updated.status === 'pending') {
        updated.status = 'following';
      }
      return updated;
    }));
  };

  // 删除 (软删除到回收站)
  const deleteRow = (id) => {
    if (!confirm('确认放入回收站？主管可恢复。')) return;
    setRecords(prev => prev.map(r => r.id === id ? {
      ...r,
      deleted: true,
      deletedAt: nowISO(),
      deletedBy: user.id,
    } : r));
    toast('✓ 已放入回收站');
  };

  // 计算状态 (含逾期判定)
  const getDisplayStatus = (r) => {
    if (r.status === 'resolved') return 'resolved';
    if (r.nextFollowUp && r.nextFollowUp < today) return 'overdue';
    return r.status;
  };

  // 跟进窗口 modal state
  const [followUpModal, setFollowUpModal] = useState(null); // record id or null
  // 跟进提醒展开/折叠
  const [remindersExpanded, setRemindersExpanded] = useState(false);
  // 转交 modal
  const [transferModal, setTransferModal] = useState(null);  // record id
  // 批量转交 modal
  const [batchTransferModal, setBatchTransferModal] = useState(null);  // {fromUserId: ...} or null
  // 转交通知（首次进入 tab 时检测）
  const [transferNoticeShown, setTransferNoticeShown] = useState(false);
  
  // 计算"转给我但还没看的"工作
  const incomingTransfers = useMemo(() => {
    return records.filter(r => !r.deleted && r.transferUnreadFor === user.id && r.ownerId === user.id);
  }, [records, user.id]);
  
  // 首次进入 tab 时弹通知
  useEffect(() => {
    if (incomingTransfers.length > 0 && !transferNoticeShown) {
      setTransferNoticeShown(true);  // 标记已弹过（同一次会话不重复弹）
    }
  }, [incomingTransfers.length, transferNoticeShown]);

  // 排序 reminders: 逾期 → 今日 → 未来
  const sortedReminders = useMemo(() => {
    return [...reminders].sort((a, b) => {
      const aDate = a.nextFollowUp || '9999-99-99';
      const bDate = b.nextFollowUp || '9999-99-99';
      return aDate.localeCompare(bDate);
    });
  }, [reminders]);
  
  // 🆕 高频投诉客户监控（同邮箱 ≥5 封记录 = 疑似投诉/重要客户）
  const HIGH_FREQ_THRESHOLD = 5;
  const highFreqCustomers = useMemo(() => {
    if (!isAdmin) return [];  // 只主管视角看
    const emailMap = {};
    records.filter(r => !r.deleted && r.customer).forEach(r => {
      const email = r.customer.trim().toLowerCase();
      if (!email) return;
      if (!emailMap[email]) emailMap[email] = [];
      emailMap[email].push(r);
    });
    return Object.entries(emailMap)
      .filter(([, list]) => list.length >= HIGH_FREQ_THRESHOLD)
      .map(([email, list]) => {
        const unresolved = list.filter(r => r.status !== 'resolved').length;
        const owners = [...new Set(list.map(r => r.ownerId))].map(id => employees.find(e => e.id === id)?.name).filter(Boolean);
        const latestDate = list.map(r => r.date).sort().slice(-1)[0];
        return { email, count: list.length, unresolved, owners, latestDate, records: list };
      })
      .sort((a, b) => b.unresolved - a.unresolved || b.count - a.count);
  }, [records, isAdmin, employees]);
  
  // 高频客户面板展开
  const [highFreqExpanded, setHighFreqExpanded] = useState(false);
  
  // 🆕 事件管理 (售后/补件/退款) + 供应商
  const [suppliers, setSuppliers] = useState([]);
  const [aftersales, setAftersales] = useState([]);
  const [refills, setRefills] = useState([]);
  const [refunds, setRefunds] = useState([]);
  const [eventEditor, setEventEditor] = useState(null);  // { kind, record, existingEvent? }
  const [smartEditor, setSmartEditor] = useState(null);  // 🆕 { kind:'chargeback'|'custom'|'photo', record }
  // 🆕 fix9b: 6 大事件按钮(售后/补件/退款/拒付/定制/实拍)默认折叠,避免每条记录都一大坨按钮
  // 大部分跟进只是回复客户邮件,不需要这些事件;有需要再展开
  // 已被打标(category=拒付/定制咨询/实拍)的记录默认展开,方便快速进入
  const [expandedEventActions, setExpandedEventActions] = useState(() => new Set());
  const toggleEventActions = (id) => setExpandedEventActions(prev => {
    const next = new Set(prev);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  });
  
  // 启动时加载这些数据
  useEffect(() => {
    if (!cloudOn) return;
    (async () => {
      try {
        const [sup, af, rf, rfd] = await Promise.all([
          CLOUD.list('suppliers', { order:{col:'name', asc:true}, limit:1000 }),
          CLOUD.list('aftersales', { order:{col:'created_at', asc:false}, limit:500 }),
          CLOUD.list('refills', { order:{col:'created_at', asc:false}, limit:500 }),
          CLOUD.list('refunds', { order:{col:'created_at', asc:false}, limit:500 }),
        ]);
        if (sup) setSuppliers(sup);
        // 🆕 fix9b: 过滤掉软删除的记录(列表不再回弹已删除的) — aftersales/refills/refunds
        if (af)  setAftersales(af.filter(x => !x.deleted));
        if (rf)  setRefills(rf.filter(x => !x.deleted));
        if (rfd) setRefunds(rfd.filter(x => !x.deleted));
      } catch(e) { console.error('加载事件数据失败:', e); }
    })();
  }, [cloudOn]);
  
  // 事件 CRUD
  const handleEventSaved = (savedEvent) => {
    let nextAftersales = aftersales;
    let nextRefills = refills;
    let nextRefunds = refunds;
    if (eventEditor.kind === 'aftersale') {
      nextAftersales = (() => {
        const idx = aftersales.findIndex(e => e.id === savedEvent.id);
        if (idx >= 0) { const next = [...aftersales]; next[idx] = savedEvent; return next; }
        return [savedEvent, ...aftersales];
      })();
      setAftersales(nextAftersales);
    } else if (eventEditor.kind === 'refill') {
      nextRefills = (() => {
        const idx = refills.findIndex(e => e.id === savedEvent.id);
        if (idx >= 0) { const next = [...refills]; next[idx] = savedEvent; return next; }
        return [savedEvent, ...refills];
      })();
      setRefills(nextRefills);
    } else if (eventEditor.kind === 'refund') {
      nextRefunds = (() => {
        const idx = refunds.findIndex(e => e.id === savedEvent.id);
        if (idx >= 0) { const next = [...refunds]; next[idx] = savedEvent; return next; }
        return [savedEvent, ...refunds];
      })();
      setRefunds(nextRefunds);
    }
    // 同步更新 cache 让顶部徽章实时更新
    STORE.set('events_cache', { aftersales: nextAftersales, refunds: nextRefunds, refills: nextRefills });
    toast(`✓ ${eventEditor.kind === 'aftersale' ? '售后' : eventEditor.kind === 'refill' ? '补件' : '退款'}事件已保存`);
  };
  
  // 计算某条 record 关联的事件
  const getRecordEvents = (recordId) => ({
    aftersales: aftersales.filter(e => e.record_id === recordId),
    refills:    refills.filter(e => e.record_id === recordId),
    refunds:    refunds.filter(e => e.record_id === recordId),
  });
  
  // 🆕 生成日报/周报/团队周报
  const generateReport = (mode) => {
    const today = todayISO();
    let startDate, endDate, title;
    if (mode === 'day') {
      startDate = endDate = today;
      title = `📋 客服日报 · ${today}`;
    } else if (mode === 'week') {
      const t = new Date(today);
      const wd = t.getDay() || 7;  // 1=周一 ... 7=周日
      const monday = new Date(t); monday.setDate(t.getDate() - wd + 1);
      startDate = monday.toISOString().slice(0, 10);
      endDate = today;
      title = `📅 客服周报 · ${startDate} ~ ${endDate}`;
    } else {  // team
      const t = new Date(today);
      const wd = t.getDay() || 7;
      const monday = new Date(t); monday.setDate(t.getDate() - wd + 1);
      startDate = monday.toISOString().slice(0, 10);
      endDate = today;
      title = `👥 团队周报 · ${startDate} ~ ${endDate}`;
    }
    // 数据范围
    const scope = mode === 'team' 
      ? records.filter(r => !r.deleted)  // 全员
      : records.filter(r => !r.deleted && r.ownerId === user.id);  // 我的
    const inRange = scope.filter(r => r.date >= startDate && r.date <= endDate);
    
    let report = `${title}\n`;
    report += `生成人：${user.name}${user.alias ? ' ' + user.alias : ''}\n`;
    report += `生成时间：${nowISO().slice(0, 16).replace('T', ' ')}\n`;
    report += `${'═'.repeat(40)}\n\n`;
    
    if (mode === 'team') {
      // 团队周报 - 按员工分组
      const byOwner = {};
      inRange.forEach(r => {
        if (!byOwner[r.ownerId]) byOwner[r.ownerId] = [];
        byOwner[r.ownerId].push(r);
      });
      report += `📊 本周团队整体表现\n`;
      report += `• 总邮件数：${inRange.length} 封\n`;
      report += `• 总时长：${fmtDuration(inRange.reduce((s, r) => s + (r.durationMin || 0), 0))}\n`;
      report += `• 已解决：${inRange.filter(r => r.status === 'resolved').length} 单\n`;
      report += `• 逾期未跟：${inRange.filter(r => r.status !== 'resolved' && r.nextFollowUp && r.nextFollowUp < today).length} 单\n`;
      report += `• 升级到主管：${inRange.filter(r => r.escalated).length} 单\n\n`;
      report += `👥 员工明细\n`;
      Object.entries(byOwner).forEach(([oid, list]) => {
        const emp = employees.find(e => e.id === oid);
        const resolved = list.filter(r => r.status === 'resolved').length;
        const mins = list.reduce((s, r) => s + (r.durationMin || 0), 0);
        report += `\n— ${emp?.name || '?'}${emp?.alias ? ' ' + emp.alias : ''}\n`;
        report += `  邮件 ${list.length} 封 · 总时长 ${fmtDuration(mins)} · 已解决 ${resolved} 单`;
        if (list.filter(r => r.escalated).length > 0) {
          report += ` · 升级 ${list.filter(r => r.escalated).length}`;
        }
      });
    } else {
      // 日报/周报 - 个人
      const easy = inRange.filter(r => r.difficulty === 'easy').length;
      const mid = inRange.filter(r => r.difficulty === 'mid').length;
      const hard = inRange.filter(r => r.difficulty === 'hard').length;
      const resolved = inRange.filter(r => r.status === 'resolved').length;
      const escalated = inRange.filter(r => r.escalated).length;
      
      report += `📊 ${mode === 'day' ? '今日' : '本周'}数据\n`;
      report += `• 邮件总数：${inRange.length} 封\n`;
      report += `• 总时长：${fmtDuration(inRange.reduce((s, r) => s + (r.durationMin || 0), 0))}\n`;
      report += `• 难度分布：简单 ${easy} / 中等 ${mid} / 复杂 ${hard}\n`;
      report += `• 已解决：${resolved} 单（${inRange.length > 0 ? Math.round(resolved / inRange.length * 100) : 0}%）\n`;
      if (escalated > 0) report += `• 已升级主管：${escalated} 单\n`;
      
      // 按网站分类
      const bySite = {};
      inRange.forEach(r => {
        if (!r.site) return;
        bySite[r.site] = (bySite[r.site] || 0) + 1;
      });
      if (Object.keys(bySite).length > 0) {
        report += `\n🌐 网站分布\n`;
        Object.entries(bySite).sort((a, b) => b[1] - a[1]).forEach(([s, n]) => {
          report += `• ${s}：${n} 封\n`;
        });
      }
      
      // 咨询事项分布
      const byCat = {};
      inRange.forEach(r => {
        if (!r.category) return;
        byCat[r.category] = (byCat[r.category] || 0) + 1;
      });
      if (Object.keys(byCat).length > 0) {
        report += `\n📋 咨询事项 TOP 5\n`;
        Object.entries(byCat).sort((a, b) => b[1] - a[1]).slice(0, 5).forEach(([c, n]) => {
          report += `• ${c}：${n} 封\n`;
        });
      }
      
      // 跟进中工作
      const pendingNext = scope.filter(r => r.status !== 'resolved' && r.nextFollowUp);
      const overdue = pendingNext.filter(r => r.nextFollowUp < today);
      const todayDue = pendingNext.filter(r => r.nextFollowUp === today);
      if (overdue.length + todayDue.length > 0) {
        report += `\n⚠ 待跟进\n`;
        if (overdue.length > 0) report += `• 逾期：${overdue.length} 单\n`;
        if (todayDue.length > 0) report += `• 今日到期：${todayDue.length} 单\n`;
      }
    }
    
    report += `\n${'─'.repeat(40)}\n生成自统一工作台`;
    
    // 复制到剪贴板
    const ta = document.createElement('textarea');
    ta.value = report;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      toast('✓ 报告已复制到剪贴板，可粘贴到微信/钉钉/邮件');
    } catch(e) {
      // 失败时弹窗显示
      alert(report);
    }
    document.body.removeChild(ta);
  };

  // 转交工作 - 改 ownerId + 保留历史 + 通知新负责人
  const transferRecord = (recordId, newOwnerId) => {
    const r = records.find(rr => rr.id === recordId);
    if (!r) return;
    const oldOwner = employees.find(e => e.id === r.ownerId);
    const newOwner = employees.find(e => e.id === newOwnerId);
    if (!newOwner) return;
    const historyEntry = {
      from: r.ownerId,
      fromName: oldOwner?.name + (oldOwner?.alias ? ' ' + oldOwner.alias : ''),
      to: newOwnerId,
      toName: newOwner.name + (newOwner.alias ? ' ' + newOwner.alias : ''),
      by: user.id,
      byName: user.name + (user.alias ? ' ' + user.alias : ''),
      at: nowISO(),
    };
    updateRow(recordId, {
      ownerId: newOwnerId,
      transferHistory: [...(r.transferHistory || []), historyEntry],
      transferUnreadFor: newOwnerId,  // 标记新负责人有未读
    });
    toast(`✓ 已将工作从 ${oldOwner?.name || '?'} 转交给 ${newOwner.name}${newOwner.alias ? ' ' + newOwner.alias : ''}`);
    setTransferModal(null);
  };
  
  // 批量转交
  const batchTransferRecords = (recordIds, newOwnerId) => {
    const newOwner = employees.find(e => e.id === newOwnerId);
    if (!newOwner || recordIds.length === 0) return;
    const nowStr = nowISO();
    setRecords(prev => prev.map(r => {
      if (!recordIds.includes(r.id)) return r;
      const oldOwner = employees.find(e => e.id === r.ownerId);
      const historyEntry = {
        from: r.ownerId,
        fromName: oldOwner?.name + (oldOwner?.alias ? ' ' + oldOwner.alias : ''),
        to: newOwnerId,
        toName: newOwner.name + (newOwner.alias ? ' ' + newOwner.alias : ''),
        by: user.id,
        byName: user.name + (user.alias ? ' ' + user.alias : ''),
        at: nowStr,
      };
      return {
        ...r,
        ownerId: newOwnerId,
        transferHistory: [...(r.transferHistory || []), historyEntry],
        transferUnreadFor: newOwnerId,
        updatedAt: nowStr,
      };
    }));
    toast(`✓ 批量转交 ${recordIds.length} 单给 ${newOwner.name}${newOwner.alias ? ' ' + newOwner.alias : ''}`);
    setBatchTransferModal(null);
  };
  
  // 标记转交通知已读
  const markTransferRead = (recordId) => {
    updateRow(recordId, { transferUnreadFor: null });
  };

  return (
    <div className="space-y-5">
      {/* 🌅 每日温暖问候 */}
      <DailyGreeting user={user} />
      
      {/* 📢 本周会议要点（如果有发布的） */}
      <BriefingCard user={user} toast={toast} />
      
      {/* 🆕 进入工作台时显示转交通知（如果有） */}
      {incomingTransfers.length > 0 && (
        <div className="paper rounded-2xl p-4 fade-in" style={{background:'#fef7ec', border:'1.5px solid var(--gold)'}}>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div style={{display:'flex', alignItems:'center', gap:10}}>
              <span style={{fontSize:24}}>📬</span>
              <div>
                <div style={{fontSize:14, fontWeight:600, color:'#854d0e'}}>
                  你接到了 {incomingTransfers.length} 单转交工作
                </div>
                <div style={{fontSize:12, color:'#a16207', marginTop:2}}>
                  以下工作已转给你，请尽快确认接手：
                  {incomingTransfers.slice(0, 3).map(r => {
                    const last = (r.transferHistory || []).slice(-1)[0];
                    return ` ${r.orderRef || r.customer || '?'}（来自 ${last?.fromName || '?'}）`;
                  }).join('；')}
                  {incomingTransfers.length > 3 && ` 等 ${incomingTransfers.length} 单`}
                </div>
              </div>
            </div>
            <button className="btn-pri" style={{padding:'6px 14px', fontSize:12}}
              onClick={() => {
                // 一键标记全部已读
                incomingTransfers.forEach(r => markTransferRead(r.id));
                toast(`✓ 已确认 ${incomingTransfers.length} 单转交`);
              }}>
              ✓ 确认接手全部
            </button>
          </div>
        </div>
      )}
      
      {/* 🆕 高频投诉客户监控 (仅主管视角，邮箱出现 ≥5 次) */}
      {highFreqCustomers.length > 0 && (
        <div className="paper rounded-2xl fade-in" style={{overflow:'hidden', background:'#fef2f2', border:'1.5px solid #f87171'}}>
          <div className="p-4 flex items-center justify-between gap-3 flex-wrap" style={{cursor:'pointer'}}
            onClick={() => setHighFreqExpanded(v => !v)}>
            <div style={{display:'flex', alignItems:'center', gap:10}}>
              <span style={{fontSize:24}}>🆘</span>
              <div>
                <div style={{fontSize:14, fontWeight:600, color:'#991b1b'}}>
                  发现 {highFreqCustomers.length} 个高频投诉/重要客户
                </div>
                <div style={{fontSize:12, color:'#b91c1c', marginTop:2}}>
                  这些邮箱有 ≥5 封历史邮件 · 共 {highFreqCustomers.reduce((s, c) => s + c.unresolved, 0)} 单未解决
                </div>
              </div>
            </div>
            <button className="btn-ghost" style={{padding:'4px 10px', fontSize:11}}>
              {highFreqExpanded ? '▲ 收起' : '▼ 查看详情'}
            </button>
          </div>
          {highFreqExpanded && (
            <div style={{borderTop:'1px solid #fca5a5', maxHeight:380, overflowY:'auto', overflowX:'hidden'}}>
              {highFreqCustomers.map(c => (
                <div key={c.email} style={{padding:'12px 16px', borderBottom:'1px solid #fecaca', display:'flex', alignItems:'center', gap:12, fontSize:13, background:'white'}}>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
                      <span style={{fontWeight:600, color:'#991b1b'}}>{c.email}</span>
                      <span className="tag" style={{background:'#fef2f2', color:'#dc2626', fontSize:10, padding:'1px 6px', border:'1px solid #fca5a5'}}>
                        📧 {c.count} 封历史
                      </span>
                      {c.unresolved > 0 && (
                        <span className="tag" style={{background:'#dc2626', color:'white', fontSize:10, padding:'1px 6px'}}>
                          ⚠ {c.unresolved} 单未解决
                        </span>
                      )}
                    </div>
                    <div style={{fontSize:11, color:'var(--ink-3)', marginTop:2}}>
                      最后联系：{c.latestDate} · 跟进人：{c.owners.join(', ') || '?'}
                    </div>
                  </div>
                  <button className="btn-sec" style={{padding:'4px 10px', fontSize:11}}
                    onClick={() => {
                      setSearch(c.email);
                      setHighFreqExpanded(false);
                      toast(`✓ 已筛选 ${c.email} 的所有记录`);
                    }}>
                    🔍 查看全部
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      {/* 跟进提醒卡（可展开） */}
      <div className="paper rounded-2xl fade-in" style={{overflow:'hidden'}}>
        <div className="p-4 flex items-center justify-between gap-3 flex-wrap" style={{cursor:'pointer'}}
             onClick={() => setRemindersExpanded(v => !v)}>
          <div className="flex items-center gap-2 flex-wrap">
            <Icon name="pin" className="w-5 h-5" style={{color:'var(--accent)'}} />
            <span className="font-display text-base font-bold">跟进提醒</span>
            <span className="tag tag-neutral">共 {reminders.length}</span>
            {isAdmin && (
              <span className="tag" style={{background:'rgba(202,138,4,.08)', color:'var(--gold)', borderColor:'var(--gold)', borderWidth:1, borderStyle:'solid'}}>
                👑 主管视角：所有员工
              </span>
            )}
            {isAdmin && (
              <button className="btn-sec" style={{padding:'3px 10px', fontSize:11}}
                onClick={(e) => { e.stopPropagation(); setBatchTransferModal({ fromUserId: null }); }}>
                🔄 批量转交工作
              </button>
            )}
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs flex items-center gap-1.5" style={{color:'var(--ink-2)'}}>
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{background:'var(--bad)'}}></span>
              逾期 <span className="font-mono font-bold">{overdueCount}</span>
            </span>
            <span className="text-xs flex items-center gap-1.5" style={{color:'var(--ink-2)'}}>
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{background:'var(--gold)'}}></span>
              今日 <span className="font-mono font-bold">{todayCount}</span>
            </span>
            <span className="text-xs flex items-center gap-1.5" style={{color:'var(--ink-2)'}}>
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{background:'var(--info)'}}></span>
              未来 <span className="font-mono font-bold">{futureCount}</span>
            </span>
            <span className="text-xs flex items-center gap-1.5" style={{color:'var(--ink-2)'}}>
              ⌛ 等客户 <span className="font-mono font-bold">{waitingCount}</span>
            </span>
            <button className="btn-ghost" style={{padding:'4px 10px', fontSize:11}} onClick={(e) => { e.stopPropagation(); setRemindersExpanded(v => !v); }}>
              {remindersExpanded ? '▲ 收起' : '▼ 展开详情'}
            </button>
          </div>
        </div>
        
        {/* 展开后的详情列表 */}
        {remindersExpanded && sortedReminders.length > 0 && (
          <div style={{borderTop:'1px solid var(--line)', maxHeight:480, overflowY:'auto', overflowX:'hidden'}}>
            {sortedReminders.map(r => {
              const owner = employees.find(e => e.id === r.ownerId);
              const daysLate = r.nextFollowUp ? Math.floor((new Date(today) - new Date(r.nextFollowUp)) / (1000*60*60*24)) : 0;
              const isOverdue = daysLate > 0;
              const isToday = r.nextFollowUp === today;
              const dot = isOverdue ? 'var(--bad)' : (isToday ? 'var(--gold)' : 'var(--info)');
              const customer = (r.customer || '').trim();
              const orderRef = (r.orderRef || '').trim();
              const note = (r.note || '').trim();
              const title = orderRef || customer || '(无订单号/客户)';
              const subtitle = customer && orderRef ? customer : '';
              const statusLabel = r.status === 'waiting' ? '⌛ 等客户' : (r.status === 'in_progress' ? '🔄 跟进中' : (r.status === 'pending' ? '⏸ 待处理' : r.status));
              const lastTransfer = (r.transferHistory || []).slice(-1)[0];
              return (
                <div key={r.id} className="row-hover" style={{display:'flex', alignItems:'center', gap:12, padding:'10px 16px', borderBottom:'1px solid var(--line)', fontSize:13}}>
                  <span className="inline-block rounded-full" style={{width:9, height:9, background: dot, flexShrink:0}}></span>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
                      <span style={{fontWeight:600, color:'var(--ink)'}}>{title}</span>
                      {subtitle && <span style={{color:'var(--ink-3)', fontSize:12}}>· {subtitle}</span>}
                      {r.site && <span className="tag" style={{fontSize:10, padding:'1px 6px'}}>{r.site}</span>}
                      <span style={{color:'var(--ink-3)', fontSize:11}}>👤 {owner?.name || '?'}{owner?.alias ? ' ' + owner.alias : ''}</span>
                      {lastTransfer && (
                        <span style={{fontSize:10, color:'#0369a1', background:'#e0f2fe', padding:'1px 6px', borderRadius:4, border:'1px solid #7dd3fc'}}
                          title={`${lastTransfer.byName} 在 ${lastTransfer.at.slice(0,10)} 转交`}>
                          🔄 原 {lastTransfer.fromName?.split(' ')[0] || '?'} → {lastTransfer.toName?.split(' ')[0] || '?'}
                        </span>
                      )}
                      {r.transferUnreadFor && (
                        <span style={{fontSize:10, color:'#dc2626', background:'#fee2e2', padding:'1px 6px', borderRadius:4, fontWeight:600}}>
                          NEW
                        </span>
                      )}
                      <span style={{color:'var(--ink-3)', fontSize:11}}>{statusLabel}</span>
                    </div>
                    {note && (
                      <div style={{color:'var(--ink-2)', fontSize:12, marginTop:2, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', maxWidth:'100%'}}>
                        💬 {note}
                      </div>
                    )}
                  </div>
                  <div style={{textAlign:'right', flexShrink:0}}>
                    {isOverdue ? (
                      <span style={{color:'var(--bad)', fontSize:12, fontWeight:600}}>逾期 {daysLate} 天</span>
                    ) : isToday ? (
                      <span style={{color:'var(--gold)', fontSize:12, fontWeight:600}}>今日待跟</span>
                    ) : (
                      <span style={{color:'var(--info)', fontSize:12}}>{r.nextFollowUp}</span>
                    )}
                  </div>
                  <div style={{display:'flex', gap:6, flexShrink:0}}>
                    <button className="btn-pri" style={{padding:'4px 10px', fontSize:11}} onClick={() => setFollowUpModal(r.id)}>
                      处理
                    </button>
                    {isAdmin && (
                      <button className="btn-sec" style={{padding:'4px 10px', fontSize:11}} onClick={() => setTransferModal(r.id)} title="转交给其他员工">
                        🔄 转交
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {remindersExpanded && sortedReminders.length === 0 && (
          <div style={{borderTop:'1px solid var(--line)', padding:'30px', textAlign:'center', color:'var(--ink-3)', fontSize:13}}>
            🎉 暂无待跟进的工作
          </div>
        )}
      </div>

      {/* 日期 / 视图切换 */}
      <div className="paper rounded-2xl p-4 fade-in">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <button className="btn-sec" onClick={() => setViewDate(addDays(viewDate, -1))}>←</button>
            <input type="date" value={viewDate} onChange={e => setViewDate(e.target.value)} style={{width:'160px'}} />
            <button className="btn-sec" onClick={() => setViewDate(addDays(viewDate, 1))}>→</button>
            <span className="font-display text-lg font-bold ml-2">
              {viewDate.slice(5,7)}月{viewDate.slice(8,10)}日
            </span>
            <span className="text-[10px] font-mono" style={{color:'var(--ink-4)'}}>
              {['周日','周一','周二','周三','周四','周五','周六'][new Date(viewDate).getDay()]}
            </span>
            {viewDate !== today && (
              <button className="btn-ghost text-[11px]" onClick={() => setViewDate(today)}>→ 今天</button>
            )}
            {isPastDate(viewDate) && (
              <span className="tag" style={{background:adminUnlock?'rgba(202,138,4,0.12)':'rgba(168,168,160,0.18)', color:adminUnlock?'var(--gold)':'var(--ink-3)', borderColor:adminUnlock?'var(--gold)':'var(--line)', borderWidth:'1px', borderStyle:'solid'}}>
                {adminUnlock ? '🔓 已解锁' : '🔒 历史只读'}
              </span>
            )}
            {isAdmin && isPastDate(viewDate) && (
              <button className="btn-ghost text-[11px]" onClick={() => {
                if (!adminUnlock) {
                  if (confirm('解锁历史日期编辑？\n\n注意：仅主管可执行此操作。修改历史记录将影响绩效统计与审计追溯，请谨慎操作。')) {
                    setAdminUnlock(true);
                    toast('🔓 已临时解锁历史日期，切换日期或刷新后自动恢复锁定');
                  }
                } else {
                  setAdminUnlock(false);
                  toast('🔒 已重新锁定');
                }
              }}>
                {adminUnlock ? '重新锁定' : '主管解锁'}
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {isAdmin && (
              <label className="text-xs flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" checked={showAll} onChange={e => setShowAll(e.target.checked)} />
                查看所有员工
              </label>
            )}
          </div>
        </div>
      </div>

      {/* 搜索 + 筛选 + 导出 工具条 */}
      <div className="paper rounded-2xl p-3 fade-in">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="relative flex-1" style={{minWidth:'200px', maxWidth:'320px'}}>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="🔍 搜索客户 / 订单号 / 备注..."
              style={{padding:'7px 30px 7px 12px', fontSize:'13px', width:'100%'}}
            />
            {search && (
              <button onClick={() => setSearch('')}
                style={{position:'absolute', right:'6px', top:'50%', transform:'translateY(-50%)', background:'none', border:'none', cursor:'pointer', color:'var(--ink-3)', fontSize:'16px', padding:'4px 6px'}}
                title="清空">×</button>
            )}
          </div>
          <button className={`btn-sec text-xs`} onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? '收起筛选' : '展开筛选'}
            {(filterStatus!=='all' || filterSite!=='all' || filterCategory!=='all' || filterDifficulty!=='all' || (filterOwner!=='all' && isAdmin && showAll)) && (
              <span className="ml-1" style={{color:'var(--accent)', fontWeight:'bold'}}>●</span>
            )}
          </button>
          {(search || filterStatus!=='all' || filterSite!=='all' || filterCategory!=='all' || filterDifficulty!=='all' || filterOwner!=='all') && (
            <button className="btn-ghost text-xs" onClick={() => {
              setSearch(''); setFilterStatus('all'); setFilterSite('all');
              setFilterCategory('all'); setFilterDifficulty('all'); setFilterOwner('all');
            }}>清除全部</button>
          )}
          <div className="flex-1"></div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] font-mono" style={{color:'var(--ink-3)'}}>导出范围：</span>
            <select value={dateRange} onChange={e => setDateRange(e.target.value)} style={{padding:'5px 8px', fontSize:'11px'}}>
              <option value="day">当日 ({viewDate.slice(5)})</option>
              <option value="7d">近 7 天</option>
              <option value="30d">近 30 天</option>
              <option value="range">自定义范围</option>
              <option value="all">全部</option>
            </select>
            {dateRange === 'range' && (
              <>
                <input type="date" value={rangeStart} onChange={e => setRangeStart(e.target.value)} style={{padding:'4px 6px', fontSize:'11px', width:'130px'}} />
                <span style={{color:'var(--ink-4)'}}>~</span>
                <input type="date" value={rangeEnd} onChange={e => setRangeEnd(e.target.value)} style={{padding:'4px 6px', fontSize:'11px', width:'130px'}} />
              </>
            )}
            <button className="btn-pri text-xs" onClick={handleExport} title={`导出 ${exportRecords.length} 条到 Excel/CSV`}>
              📥 导出 CSV ({exportRecords.length})
            </button>
            <button onClick={() => handleExportPDF()} title={`导出当前筛选的 ${tableRecords.length} 条为 PDF（含截图）`}
              style={{padding:'4px 12px', fontSize:11, background:'#dc2626', color:'white', border:'none', borderRadius:6, cursor:'pointer', fontFamily:'inherit', fontWeight:600}}>
              📄 导出 PDF ({tableRecords.length})
            </button>
          </div>
        </div>
        {showFilters && (
          <div className="mt-3 pt-3 border-t flex items-center gap-2 flex-wrap" style={{borderColor:'var(--line)'}}>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px]" style={{color:'var(--ink-3)'}}>状态</span>
              <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} style={{padding:'4px 8px', fontSize:'11px'}}>
                <option value="all">全部</option>
                {STATUSES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px]" style={{color:'var(--ink-3)'}}>网站</span>
              <select value={filterSite} onChange={e => setFilterSite(e.target.value)} style={{padding:'4px 8px', fontSize:'11px'}}>
                <option value="all">全部</option>
                {allSites.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px]" style={{color:'var(--ink-3)'}}>类别</span>
              <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} style={{padding:'4px 8px', fontSize:'11px'}}>
                <option value="all">全部</option>
                {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px]" style={{color:'var(--ink-3)'}}>难度</span>
              <select value={filterDifficulty} onChange={e => setFilterDifficulty(e.target.value)} style={{padding:'4px 8px', fontSize:'11px'}}>
                <option value="all">全部</option>
                <option value="easy">简单</option>
                <option value="mid">中等</option>
                <option value="hard">复杂</option>
              </select>
            </div>
            {isAdmin && showAll && (
              <div className="flex items-center gap-1.5">
                <span className="text-[11px]" style={{color:'var(--ink-3)'}}>员工</span>
                <select value={filterOwner} onChange={e => setFilterOwner(e.target.value)} style={{padding:'4px 8px', fontSize:'11px'}}>
                  <option value="all">全部</option>
                  {employees.map(e => <option key={e.id} value={e.id}>{e.name}{e.alias?` (${e.alias})`:''}</option>)}
                </select>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 统计卡片 - 可点击快捷筛选 */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 fade-in">
        <StatCard label="今日邮件数" value={stats.totalEmails} unit="封" color="var(--info)"
          hint={(filterStatus !== 'all' || filterDifficulty !== 'all' || filterSite !== 'all' || filterCategory !== 'all' || search) ? '点击清除所有筛选' : '当日总数'}
          onClick={(filterStatus !== 'all' || filterDifficulty !== 'all' || filterSite !== 'all' || filterCategory !== 'all' || search) ? () => { setFilterStatus('all'); setFilterDifficulty('all'); setFilterSite('all'); setFilterCategory('all'); setSearch(''); toast('已清除筛选'); } : null}
          active={false} />

        <StatCard label="总时长" value={fmtDuration(stats.totalMins)} unit="" color="var(--good)"
          hint={stats.totalEmails > 0 ? `${Math.round(stats.totalMins / Math.max(stats.totalEmails,1))}min / 单` : '尚未填写'} />

        <StatCard label="难度分布" value={`${stats.easyN} / ${stats.midN} / ${stats.hardN}`} unit=""
          hint={filterDifficulty !== 'all' ? `仅看${filterDifficulty==='easy'?'简单':filterDifficulty==='mid'?'中等':'复杂'}` : '简 / 中 / 复'}
          color="var(--gold)"
          onClick={() => {
            const order = ['all','easy','mid','hard'];
            const next = order[(order.indexOf(filterDifficulty)+1) % 4];
            setFilterDifficulty(next);
            toast(next === 'all' ? '已显示全部难度' : `仅看${next==='easy'?'简单':next==='mid'?'中等':'复杂'}`);
          }}
          active={filterDifficulty !== 'all'} />

        <StatCard label="跟进中" value={stats.followingN} unit="单" color="var(--accent)"
          hint={filterStatus !== 'all' ? `仅看${STATUSES.find(s=>s.key===filterStatus)?.label||filterStatus}` : '未关闭工单'}
          onClick={() => {
            const next = filterStatus === 'all' ? 'following' : filterStatus === 'following' ? 'waiting' : filterStatus === 'waiting' ? 'pending' : 'all';
            setFilterStatus(next);
            toast(next === 'all' ? '已显示全部状态' : `仅看${STATUSES.find(s=>s.key===next)?.label||next}`);
          }}
          active={filterStatus !== 'all'} />

        <StatCard label="逾期 / 今日" value={`${overdueCount} / ${todayCount}`} unit=""
          color={overdueCount > 0 ? 'var(--bad)' : 'var(--good)'}
          hint={overdueCount + todayCount === 0 ? '一切正常 ✓' : (overdueCount > 0 ? `${overdueCount} 单已逾期` : `${todayCount} 单今日到期`)}
          onClick={overdueCount + todayCount > 0 ? () => {
            toast(`📋 提醒：逾期 ${overdueCount} 单 · 今日 ${todayCount} 单`);
          } : null} />
      </div>
      
      {/* 🆕 一键生成日报/周报 */}
      <div className="paper rounded-2xl p-3 fade-in" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:8, flexWrap:'wrap'}}>
        <div style={{display:'flex', alignItems:'center', gap:8}}>
          <span style={{fontSize:18}}>📊</span>
          <span style={{fontSize:13, fontWeight:600, color:'var(--ink)'}}>工作汇报</span>
          <span style={{fontSize:11, color:'var(--ink-3)'}}>· 一键生成文字汇报（复制后可粘贴到微信/钉钉）</span>
        </div>
        <div style={{display:'flex', gap:6}}>
          <button className="btn-sec" style={{padding:'5px 12px', fontSize:12}}
            onClick={() => generateReport('day')}>
            📋 今日报告
          </button>
          <button className="btn-sec" style={{padding:'5px 12px', fontSize:12}}
            onClick={() => generateReport('week')}>
            📅 本周汇总
          </button>
          {isAdmin && (
            <button className="btn-sec" style={{padding:'5px 12px', fontSize:12}}
              onClick={() => generateReport('team')}>
              👥 团队周报
            </button>
          )}
        </div>
      </div>

      {/* 🆕 视图模式切换 + 顶部分页 */}
      <div className="paper rounded-2xl p-3 fade-in" style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:10, flexWrap:'wrap'}}>
        <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
          <span style={{fontSize:11, color:'var(--ink-3)', fontWeight:600}}>显示模式：</span>
          <button onClick={() => setViewMode('day')}
            style={{
              padding:'4px 12px', borderRadius:14, fontSize:12, cursor:'pointer', fontFamily:'inherit',
              border:'1px solid ' + (viewMode === 'day' ? 'var(--accent)' : 'var(--line)'),
              background: viewMode === 'day' ? 'var(--accent)' : 'white',
              color: viewMode === 'day' ? 'white' : 'var(--ink-2)',
              fontWeight: viewMode === 'day' ? 600 : 400,
            }}>
            📅 按当日 ({dayRecords.length})
          </button>
          <button onClick={() => setViewMode('all')}
            style={{
              padding:'4px 12px', borderRadius:14, fontSize:12, cursor:'pointer', fontFamily:'inherit',
              border:'1px solid ' + (viewMode === 'all' ? 'var(--accent)' : 'var(--line)'),
              background: viewMode === 'all' ? 'var(--accent)' : 'white',
              color: viewMode === 'all' ? 'white' : 'var(--ink-2)',
              fontWeight: viewMode === 'all' ? 600 : 400,
            }}>
            📋 全部记录 ({visibleRecords.filter(isRecordMeaningful).length})
          </button>
        </div>
        {viewMode === 'all' && tableRecords.length > pageSize && (
          <div style={{fontSize:11, color:'var(--ink-3)'}}>
            筛选后 <strong style={{color:'var(--accent)'}}>{tableRecords.length}</strong> 条 · 当前第 <strong>{safePage}</strong>/{totalPages} 页
          </div>
        )}
      </div>
      
      {/* 🆕 时间筛选(仅全部模式显示) */}
      {viewMode === 'all' && (() => {
        const today = todayISO();
        // 源数据(在 time filter 前)
        const sourceForTime = (() => {
          let l = sourceRecords;
          if (search.trim()) {
            const q = search.trim().toLowerCase();
            l = l.filter(r => (r.customer||'').toLowerCase().includes(q) || (r.orderRef||'').toLowerCase().includes(q) || (r.note||'').toLowerCase().includes(q));
          }
          if (filterStatus !== 'all') l = l.filter(r => r.status === filterStatus);
          if (filterSite !== 'all') l = l.filter(r => r.site === filterSite);
          if (filterCategory !== 'all') l = l.filter(r => r.category === filterCategory);
          if (filterDifficulty !== 'all') l = l.filter(r => r.difficulty === filterDifficulty);
          if (isAdmin && showAll && filterOwner !== 'all') l = l.filter(r => r.ownerId === filterOwner);
          return l;
        })();
        // 计算超期未解决数(>7天)
        const overdueUnresolved = visibleRecords.filter(r => {
          if (r.status === 'resolved' || r.status === 'transferred') return false;
          if (!r.date) return false;
          return r.date < addDays(today, -7);
        });
        
        // 应用了时间筛选后的条数变化
        const beforeFilter = sourceForTime.length;
        const afterFilter = tableRecords.length;
        const isFiltered = timeFilter !== 'all' || showUnresolvedOnly;
        
        return (
          <div className="paper rounded-2xl p-3 fade-in" style={{display:'flex', flexDirection:'column', gap:8}}>
            <div style={{display:'flex', alignItems:'center', gap:10, flexWrap:'wrap'}}>
              <TimeRangeFilter value={timeFilter} onChange={setTimeFilter}
                customStart={customRangeStart} customEnd={customRangeEnd}
                onCustomChange={({start, end}) => { setCustomRangeStart(start); setCustomRangeEnd(end); }}
                records={sourceForTime} dateField="date"
                label="📅 时间范围:" />
              
              <div style={{flex:1}}></div>
              
              {/* 只看未解决开关 */}
              <button onClick={() => setShowUnresolvedOnly(v => !v)}
                style={{
                  padding:'4px 11px', borderRadius:14, fontSize:11, cursor:'pointer', fontFamily:'inherit',
                  border:'1px solid ' + (showUnresolvedOnly ? '#dc2626' : 'var(--line)'),
                  background: showUnresolvedOnly ? '#fee2e2' : 'white',
                  color: showUnresolvedOnly ? '#991b1b' : 'var(--ink-2)',
                  fontWeight: showUnresolvedOnly ? 600 : 400,
                  display:'inline-flex', alignItems:'center', gap:5,
                  whiteSpace:'nowrap',
                }}>
                {showUnresolvedOnly ? '✓' : '☐'} 只看未解决
              </button>
              
              {/* 超期警告徽章 */}
              {overdueUnresolved.length > 0 && (
                <button onClick={() => { setTimeFilter('all'); setShowUnresolvedOnly(true); }}
                  style={{
                    padding:'4px 11px', background:'#fef3c7', color:'#92400e', border:'1px solid #fbbf24',
                    borderRadius:14, fontSize:11, fontWeight:600, fontFamily:'inherit', cursor:'pointer',
                    display:'inline-flex', alignItems:'center', gap:4, whiteSpace:'nowrap',
                  }}
                  title="点击筛选超过 7 天未解决的记录">
                  ⚠ 超 7 天未解决: {overdueUnresolved.length} 条
                </button>
              )}
            </div>
            
            {/* 🆕 fix15: 按月/周精确筛选(本周/本月/任意月第N周) */}
            <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'wrap', paddingTop:6, borderTop:'1px dashed var(--line)'}}>
              <span style={{fontSize:11, color:'var(--ink-3)', fontWeight:600, whiteSpace:'nowrap'}}>📅 按月/周筛选:</span>
              <AdvancedDateFilter value={dateFilter} onChange={setDateFilter} size="sm" />
            </div>
            
            {/* 🆕 筛选反馈条 */}
            {isFiltered && (
              <div style={{padding:'6px 12px', background:'#e0f2fe', borderRadius:8, fontSize:11, color:'#075985', display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
                <span>🔍 当前筛选:</span>
                <strong style={{color:'#0c4a6e'}}>{afterFilter} 条</strong>
                <span style={{color:'#64748b'}}>/ 原 {beforeFilter} 条</span>
                {beforeFilter > 0 && (
                  <span style={{color:'#64748b'}}>· {Math.round(afterFilter / beforeFilter * 100)}%</span>
                )}
                <button onClick={() => { setTimeFilter('all'); setShowUnresolvedOnly(false); }}
                  style={{marginLeft:'auto', padding:'2px 8px', background:'white', border:'1px solid #7dd3fc', borderRadius:6, fontSize:10, color:'#0369a1', cursor:'pointer', fontFamily:'inherit'}}>
                  ✕ 清除筛选
                </button>
              </div>
            )}
          </div>
        );
      })()}

      {/* 顶部分页（全部模式） */}
      {viewMode === 'all' && tableRecords.length > 0 && (
        <Pagination 
          currentPage={safePage}
          totalPages={totalPages}
          pageSize={pageSize}
          totalItems={tableRecords.length}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
          position="top"
        />
      )}

      {/* 🆕 卡片式 UI - 重新设计 */}
      <div className="paper rounded-2xl fade-in" style={{overflow:'hidden', padding:'14px'}}>
        {tableRecords.length === 0 ? (
          <div style={{textAlign:'center', padding:'50px 12px', color:'var(--ink-3)', fontSize:'14px'}}>
            {sourceRecords.length === 0
              ? <>暂无记录 · 点击下方 <strong style={{color:'var(--accent)'}}>+ 添加一行</strong> 开始</>
              : `无匹配记录(共 ${sourceRecords.length} 条,被筛选条件过滤)`}
          </div>
        ) : (
          <div style={{display:'flex', flexDirection:'column', gap:10}}>
            {pagedRecords.map((r, localIdx) => {
              const idx = viewMode === 'all' ? (safePage - 1) * pageSize + localIdx : localIdx;
              const dispStatus = getDisplayStatus(r);
              const statusCls = `status-${dispStatus}`;
              const ownerName = employees.find(e => e.id === r.ownerId)?.name || '—';
              const editable = canEditRecord(r, user, adminUnlock);
              const emailNorm = (r.customer || '').trim().toLowerCase();
              const dupRecords = emailNorm 
                ? visibleRecords.filter(rr => rr.id !== r.id && (rr.customer || '').trim().toLowerCase() === emailNorm)
                : [];
              const isDup = dupRecords.length > 0;
              const cur = STATUSES.find(s => s.key === r.status) || STATUSES[0];
              const statusStyleMap = {
                pending:     { bg:'#f5f5f7', border:'#86868b', color:'#525252', stripe:'#86868b' },
                following:   { bg:'#fff7ed', border:'#ff9500', color:'#9a3412', stripe:'#ff9500' },
                waiting:     { bg:'#e0f2fe', border:'#0071e3', color:'#075985', stripe:'#0071e3' },
                resolved:    { bg:'#dcfce7', border:'#34c759', color:'#14532d', stripe:'#34c759' },
                transferred: { bg:'#fef3c7', border:'#d97706', color:'#854d0e', stripe:'#d97706' },
              };
              const curStyle = statusStyleMap[cur.key] || statusStyleMap.pending;
              const ev = getRecordEvents(r.id);
              const evCount = ev.aftersales.length + ev.refills.length + ev.refunds.length;
              
              return (
                <div key={r.id}
                  style={{
                    background:'white',
                    border:'1px solid ' + (editable ? 'var(--line)' : '#e5e5e7'),
                    borderLeft: '4px solid ' + curStyle.stripe,
                    borderRadius:12,
                    padding:'14px 16px',
                    opacity: editable ? 1 : 0.85,
                    transition:'all .15s',
                    position:'relative',
                  }}>
                  
                  {/* Header: 序号 + 状态 + 客户 + 员工 + 删除 */}
                  <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:12, flexWrap:'wrap'}}>
                    <span style={{fontSize:11, color:'var(--ink-4)', fontFamily:'monospace', fontWeight:600, minWidth:24}}>#{idx+1}</span>
                    
                    {/* 状态选择 - 显眼 */}
                    <button disabled={!editable}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (statusMenuOpen !== r.id) {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setStatusDropdownPos({ top: rect.bottom + 4, left: rect.left, width: Math.max(rect.width, 110) });
                          setStatusMenuOpen(r.id);
                        } else { setStatusMenuOpen(null); }
                      }}
                      style={{
                        padding:'5px 12px', fontSize:12, fontWeight:600,
                        borderRadius:14, cursor: editable ? 'pointer' : 'default',
                        background: curStyle.bg, color: curStyle.color, border:'1px solid ' + curStyle.border,
                        display:'inline-flex', alignItems:'center', gap:4,
                        fontFamily:'inherit', whiteSpace:'nowrap',
                        opacity: editable ? 1 : 0.6,
                      }}>
                      {cur.label}
                      {editable && <span style={{fontSize:8, opacity:0.6}}>▼</span>}
                    </button>
                    
                    {/* 客户邮箱 (输入框) - 主信息 */}
                    <div style={{flex:'1 1 200px', minWidth:0, position:'relative'}}>
                      <input disabled={!editable} value={r.customer} onChange={e => updateRow(r.id, {customer:e.target.value})}
                        placeholder="📧 客户邮箱/联系方式"
                        style={{
                          width:'100%',
                          padding:'7px 12px', fontSize:'13px', fontWeight:500,
                          paddingRight: (r.customer || '').trim() ? (isDup ? '78px' : '36px') : '12px',
                          background: isDup ? '#fef3c7' : '#fafafa',
                          border: '1px solid ' + (isDup ? '#f59e0b' : 'transparent'),
                          borderRadius: 8,
                        }}
                        title={isDup ? `⚠ 重复邮箱:另有 ${dupRecords.length} 条同邮箱记录` : ''}
                      />
                      {/* 🆕 fix52: 360° 查询按钮(只要邮箱不空就显示) */}
                      {(r.customer || '').trim() && (
                        <button
                          onClick={(e) => { e.stopPropagation(); setCustomer360Email(r.customer.trim()); }}
                          title="客户档案 360° — 看跟进/拒付/售后/评价/线下单/定制"
                          style={{
                            position:'absolute',
                            right: isDup ? 42 : 6,
                            top:'50%', transform:'translateY(-50%)',
                            padding:'3px 7px', fontSize:11, fontWeight:600,
                            background:'var(--accent-soft)', color:'var(--accent)',
                            border:'1px solid var(--accent-mid, var(--accent))',
                            borderRadius:6, cursor:'pointer', fontFamily:'inherit',
                            lineHeight:1.2,
                          }}
                        >🔍 360°</button>
                      )}
                      {isDup && (
                        <span
                          onClick={(e) => { e.stopPropagation(); setCustomer360Email(r.customer.trim()); }}
                          title="点击查看所有同邮箱记录(360° 档案)"
                          style={{
                            position:'absolute', right:8, top:'50%', transform:'translateY(-50%)',
                            padding:'2px 7px', fontSize:10, fontWeight:700,
                            background:'#f59e0b', color:'white', borderRadius:8,
                            cursor:'pointer',
                          }}>⚠ x{dupRecords.length + 1}</span>
                      )}
                    </div>
                    
                    {/* 员工 (admin 看团队时) */}
                    {isAdmin && showAll && (
                      <span style={{padding:'3px 10px', background:'#e0e7ff', color:'#4338ca', borderRadius:14, fontSize:11, fontWeight:600, whiteSpace:'nowrap'}}>
                        👤 {ownerName}
                      </span>
                    )}
                    
                    {/* 删除按钮 */}
                    {editable ? (
                      <button onClick={() => deleteRow(r.id)} title="放入回收站"
                        style={{padding:'5px 9px', background:'transparent', border:'1px solid var(--line)', borderRadius:8, cursor:'pointer', color:'var(--bad)', fontSize:14, fontFamily:'inherit'}}>
                        🗑
                      </button>
                    ) : (
                      <span title="历史记录已锁定" style={{fontSize:14, opacity:0.4}}>🔒</span>
                    )}
                  </div>
                  
                  {/* 字段网格 - 响应式 */}
                  <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(140px, 1fr))', gap:10, marginBottom:10}}>
                    {/* 网站 */}
                    <div>
                      <label style={{fontSize:10, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>🌐 网站</label>
                      <select disabled={!editable} value={r.website} onChange={e => updateRow(r.id, {website:e.target.value})}
                        style={{width:'100%', padding:'7px 10px', fontSize:13, border:'1px solid var(--line)', borderRadius:7, background:'white'}}>
                        <option value="">选择网站...</option>
                        {allSites.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    
                    {/* 难度 */}
                    <div>
                      <label style={{fontSize:10, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>📊 难度</label>
                      <div style={{display:'flex', gap:3}}>
                        {['easy','mid','hard'].map(d => {
                          const isActive = r.difficulty === d;
                          const isSuggested = isActive && r.diffSuggested;
                          const cls = isActive ? (d==='easy'?'active-easy':d==='mid'?'active-mid':'active-hard') : '';
                          return (
                            <button key={d} disabled={!editable} className={`diff-btn ${cls} ${isSuggested?'suggested':''}`}
                              onClick={() => updateRow(r.id, {difficulty:d, diffSuggested:false})}
                              title={isSuggested ? '系统建议 · 点击确认或更改' : ''}
                              style={{flex:1, padding:'6px 0', fontSize:12}}>
                              {d==='easy'?'易':d==='mid'?'中':'复'}
                              {isSuggested && ' 🤖'}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    
                    {/* 事项 */}
                    <div>
                      <label style={{fontSize:10, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>📋 咨询事项</label>
                      <select disabled={!editable} value={r.category} onChange={e => updateRow(r.id, {category:e.target.value})}
                        style={{width:'100%', padding:'7px 10px', fontSize:13, border:'1px solid var(--line)', borderRadius:7, background:'white'}}>
                        <option value="">选事项...</option>
                        {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                        {r.category && !CATEGORIES.includes(r.category) && <option value={r.category}>{r.category}</option>}
                      </select>
                    </div>
                    
                    {/* 时段 */}
                    <div style={{gridColumn:'span 2'}}>
                      <label style={{fontSize:10, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>
                        ⏱ 时段 {r.durationMin > 0 && <span style={{marginLeft:6, color: r.durationMin > 10 ? 'var(--bad)' : r.durationMin >= 5 ? 'var(--gold)' : 'var(--ink-3)', fontWeight:700}}>· {fmtDuration(r.durationMin)}</span>}
                      </label>
                      <div style={{display:'flex', gap:6, alignItems:'center'}}>
                        <input disabled={!editable} type="time" value={r.startTime} onChange={e => updateRow(r.id, {startTime:e.target.value})}
                          style={{flex:1, padding:'7px 10px', fontSize:13, border:'1px solid var(--line)', borderRadius:7}} />
                        <span style={{color:'var(--ink-4)', fontSize:13}}>→</span>
                        <input disabled={!editable} type="time" value={r.endTime} onChange={e => updateRow(r.id, {endTime:e.target.value})}
                          style={{flex:1, padding:'7px 10px', fontSize:13, border:'1px solid var(--line)', borderRadius:7}} />
                      </div>
                    </div>
                    
                    {/* 下次跟进 */}
                    <div>
                      <label style={{fontSize:10, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>📅 下次跟进</label>
                      <input disabled={!editable} type="date" value={r.nextFollowUp || ""} onChange={e => updateRow(r.id, {nextFollowUp:e.target.value})}
                        style={{width:'100%', padding:'7px 10px', fontSize:13, border:'1px solid var(--line)', borderRadius:7}} />
                    </div>
                  </div>
                  
                  {/* 订单号/备注 - 整行 */}
                  <div style={{marginBottom:10}}>
                    <label style={{fontSize:10, fontWeight:600, color:'var(--ink-3)', display:'block', marginBottom:3}}>📝 订单号 / 备注</label>
                    <input disabled={!editable} value={r.orderRef || ''}
                      onChange={e => updateRow(r.id, {orderRef:e.target.value})}
                      placeholder="订单号 / 备注 / 沟通要点..."
                      style={{width:'100%', padding:'8px 12px', fontSize:13, border:'1px solid var(--line)', borderRadius:7}} />
                  </div>
                  
                  {/* Footer: 第一行 - 截图/跟进 + 事件徽章 */}
                  <div style={{display:'flex', alignItems:'center', gap:8, paddingTop:10, borderTop:'1px dashed var(--line)', flexWrap:'wrap', marginBottom: editable ? 8 : 0}}>
                    <button className="btn-sec" onClick={() => setFollowUpModal(r.id)}
                      title={editable ? '打开跟进/截图窗口' : '只读查看'}
                      style={{padding:'5px 12px', display:'inline-flex', alignItems:'center', gap:5, fontSize:12}}>
                      <Icon name={r.screenshots?.length > 0 ? 'image' : 'edit'} className="w-3 h-3" />
                      {r.screenshots?.length > 0 ? `截图 ${r.screenshots.length}` : '加截图/跟进'}
                      {r.followUps?.length > 0 && <span style={{padding:'1px 6px', background:'#e0f2fe', color:'#075985', borderRadius:8, fontSize:10, fontWeight:600}}>跟进 {r.followUps.length}</span>}
                    </button>
                    
                    {/* 关联事件徽章 */}
                    {evCount > 0 && (
                      <button onClick={() => setFollowUpModal(r.id)} title="查看关联的售后/补件/退款事件"
                        style={{padding:'4px 9px', background:'#fef9c3', color:'#a16207', border:'1px solid #fcd34d', borderRadius:8, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit', display:'inline-flex', gap:4, whiteSpace:'nowrap'}}>
                        {ev.aftersales.length > 0 && <span title="售后">🔧{ev.aftersales.length}</span>}
                        {ev.refills.length > 0 && <span title="补件">📦{ev.refills.length}</span>}
                        {ev.refunds.length > 0 && <span title="退款">💰{ev.refunds.length}</span>}
                      </button>
                    )}
                  </div>
                  
                  {/* Footer: 第二行 - 6 个事件按钮 (默认折叠 — 大部分跟进不涉及事件,有打标 category 的自动展开) */}
                  {editable && (() => {
                    const hasHighlight = r.category === '拒付' || r.category === '定制咨询' || r.category === '实拍';
                    const userExpanded = expandedEventActions.has(r.id);
                    const isOpen = userExpanded || hasHighlight;
                    if (!isOpen) {
                      return (
                        <button onClick={() => toggleEventActions(r.id)} title="展开事件按钮(售后/补件/退款/拒付/定制/实拍)"
                          style={{marginTop:6, width:'100%', padding:'6px 10px', background:'#fafaf7', color:'var(--ink-3)', border:'1px dashed var(--line)', borderRadius:8, cursor:'pointer', fontSize:11, fontWeight:500, fontFamily:'inherit', display:'flex', alignItems:'center', justifyContent:'center', gap:6, transition:'all .15s'}}
                          onMouseEnter={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderStyle = 'solid'; e.currentTarget.style.color = 'var(--ink-2)'; }}
                          onMouseLeave={e => { e.currentTarget.style.background = '#fafaf7'; e.currentTarget.style.borderStyle = 'dashed'; e.currentTarget.style.color = 'var(--ink-3)'; }}>
                          <span style={{opacity:.7}}>📌 添加事件</span>
                          <span style={{opacity:.5, fontSize:9}}>售后 · 补件 · 退款 · 拒付 · 定制 · 实拍</span>
                          <span style={{opacity:.7}}>▼</span>
                        </button>
                      );
                    }
                    return (
                      <>
                        {userExpanded && !hasHighlight && (
                          <div style={{display:'flex', justifyContent:'flex-end', marginTop:6}}>
                            <button onClick={() => toggleEventActions(r.id)}
                              style={{padding:'2px 8px', background:'transparent', color:'var(--ink-4)', border:'none', cursor:'pointer', fontSize:10, fontFamily:'inherit'}}>
                              ▲ 收起
                            </button>
                          </div>
                        )}
                        <div style={{display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:6, marginTop:hasHighlight ? 6 : 2}}>
                          <button onClick={() => setEventEditor({ kind:'aftersale', record:r })} title="加售后事件"
                            style={{padding:'8px 0', background:'#fff7ed', color:'#ea580c', border:'1px solid #fdba74', borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit', whiteSpace:'nowrap', transition:'all .15s', display:'flex', flexDirection:'column', alignItems:'center', gap:2}}
                            onMouseEnter={e => { e.currentTarget.style.background = '#ea580c'; e.currentTarget.style.color = 'white'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = '#fff7ed'; e.currentTarget.style.color = '#ea580c'; }}>
                            <span style={{fontSize:16}}>🔧</span>
                            <span>售后</span>
                          </button>
                          <button onClick={() => setEventEditor({ kind:'refill', record:r })} title="加补件事件"
                            style={{padding:'8px 0', background:'#e0f2fe', color:'#0369a1', border:'1px solid #7dd3fc', borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit', whiteSpace:'nowrap', transition:'all .15s', display:'flex', flexDirection:'column', alignItems:'center', gap:2}}
                            onMouseEnter={e => { e.currentTarget.style.background = '#0369a1'; e.currentTarget.style.color = 'white'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = '#e0f2fe'; e.currentTarget.style.color = '#0369a1'; }}>
                            <span style={{fontSize:16}}>📦</span>
                            <span>补件</span>
                          </button>
                          <button onClick={() => setEventEditor({ kind:'refund', record:r })} title="加退款事件"
                            style={{padding:'8px 0', background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit', whiteSpace:'nowrap', transition:'all .15s', display:'flex', flexDirection:'column', alignItems:'center', gap:2}}
                            onMouseEnter={e => { e.currentTarget.style.background = '#dc2626'; e.currentTarget.style.color = 'white'; }}
                            onMouseLeave={e => { e.currentTarget.style.background = '#fef2f2'; e.currentTarget.style.color = '#dc2626'; }}>
                            <span style={{fontSize:16}}>💰</span>
                            <span>退款</span>
                          </button>
                          <button onClick={() => setSmartEditor({ kind:'chargeback', record:r })} title="加拒付记录"
                            style={{padding:'8px 0', background: r.category === '拒付' ? '#dc2626' : '#fef2f2', color: r.category === '拒付' ? 'white' : '#dc2626', border:'1px solid ' + (r.category === '拒付' ? '#7f1d1d' : '#fca5a5'), borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:700, fontFamily:'inherit', whiteSpace:'nowrap', transition:'all .15s', display:'flex', flexDirection:'column', alignItems:'center', gap:2, position:'relative'}}>
                            <span style={{fontSize:16}}>🚨</span>
                            <span>拒付</span>
                            {r.category === '拒付' && <span style={{position:'absolute', top:-6, right:-6, padding:'1px 5px', background:'#fbbf24', color:'#78350f', borderRadius:8, fontSize:9, fontWeight:700}}>✓</span>}
                          </button>
                          <button onClick={() => setSmartEditor({ kind:'custom', record:r })} title="加定制咨询"
                            style={{padding:'8px 0', background: r.category === '定制咨询' ? '#7c3aed' : '#f5f3ff', color: r.category === '定制咨询' ? 'white' : '#7c3aed', border:'1px solid ' + (r.category === '定制咨询' ? '#5b21b6' : '#c4b5fd'), borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:700, fontFamily:'inherit', whiteSpace:'nowrap', transition:'all .15s', display:'flex', flexDirection:'column', alignItems:'center', gap:2, position:'relative'}}>
                            <span style={{fontSize:16}}>🎨</span>
                            <span>定制</span>
                            {r.category === '定制咨询' && <span style={{position:'absolute', top:-6, right:-6, padding:'1px 5px', background:'#fbbf24', color:'#78350f', borderRadius:8, fontSize:9, fontWeight:700}}>✓</span>}
                          </button>
                          <button onClick={() => setSmartEditor({ kind:'photo', record:r })} title="加实拍核实"
                            style={{padding:'8px 0', background: r.category === '实拍' ? '#be185d' : '#fdf2f8', color: r.category === '实拍' ? 'white' : '#be185d', border:'1px solid ' + (r.category === '实拍' ? '#831843' : '#fbcfe8'), borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:700, fontFamily:'inherit', whiteSpace:'nowrap', transition:'all .15s', display:'flex', flexDirection:'column', alignItems:'center', gap:2, position:'relative'}}>
                            <span style={{fontSize:16}}>📸</span>
                            <span>实拍</span>
                            {r.category === '实拍' && <span style={{position:'absolute', top:-6, right:-6, padding:'1px 5px', background:'#fbbf24', color:'#78350f', borderRadius:8, fontSize:9, fontWeight:700}}>✓</span>}
                          </button>
                        </div>
                      </>
                    );
                  })()}
                </div>
              );
            })}
          </div>
        )}
        <div className="p-3 border-t" style={{borderColor:'var(--line)', background:'var(--bg)'}}>
          {canEditRecord({date:viewDate}, user, adminUnlock) ? (
            <button onClick={addRow} className="w-full py-2 rounded-lg border-2 border-dashed text-sm font-bold flex items-center justify-center gap-2 transition-colors" style={{borderColor:'var(--line)', color:'var(--accent)', background:'white'}}>
              <Icon name="plus" className="w-4 h-4" />
              添加一行
            </button>
          ) : (
            <div className="w-full py-2 rounded-lg border-2 border-dashed text-sm flex items-center justify-center gap-2" style={{borderColor:'var(--line)', color:'var(--ink-4)', background:'var(--bg)'}}>
              🔒 历史日期不可新增{isAdmin ? '（如需更正，请点击上方"主管解锁"）' : '（如有遗漏，请联系主管处理）'}
            </div>
          )}
        </div>
      </div>

      {/* 🆕 底部分页（全部模式） */}
      {viewMode === 'all' && tableRecords.length > 0 && (
        <Pagination 
          currentPage={safePage}
          totalPages={totalPages}
          pageSize={pageSize}
          totalItems={tableRecords.length}
          onPageChange={(p) => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          onPageSizeChange={setPageSize}
          position="bottom"
        />
      )}

      {/* 操作提示 */}
      <div className="text-[10px] font-mono flex flex-wrap gap-4" style={{color:'var(--ink-4)'}}>
        <span>Tab 切换字段</span>
        <span>🤖 难度自动建议：≤5分简单 · 5-10分中等 · &gt;10分复杂</span>
        <span>📷 点击"截图/跟进"按钮可上传客户截图</span>
        <span>🎨 行左侧色条 = 跟进状态</span>
      </div>

      {/* 跟进/截图 modal */}
      {followUpModal && (() => {
        const r = records.find(rec => rec.id === followUpModal);
        if (!r) return null;
        // 用户点开自己的转交记录 → 标记已读
        if (r.transferUnreadFor === user.id) markTransferRead(r.id);
        const modalEditable = canEditRecord(r, user, adminUnlock);
        const recordEvents = getRecordEvents(r.id);
        return (
          <FollowUpModal
            record={r}
            user={user}
            employees={employees}
            cloudOn={cloudOn}
            readonly={!modalEditable}
            onClose={() => setFollowUpModal(null)}
            onUpdate={(patch) => updateRow(followUpModal, patch)}
            toast={toast}
            recordEvents={recordEvents}
            onAddEvent={(kind) => {
              // 旧 3 种(事件主线表)→ 用 EventEditorModal
              if (['aftersale', 'refill', 'refund'].includes(kind)) {
                setEventEditor({ kind, record: r });
              } else {
                // 新 3 种(拒付/定制/实拍)→ 用 SmartEditor
                setSmartEditor({ kind, record: r });
                setFollowUpModal(null);  // 关闭跟进窗,焦点切到新弹窗
              }
            }}
            onEditEvent={(kind, evt) => setEventEditor({ kind, record: r, existingEvent: evt })}
          />
        );
      })()}
      
      {/* 🆕 事件编辑器 modal (售后/补件/退款) */}
      {eventEditor && (
        <EventEditorModal
          kind={eventEditor.kind}
          record={eventEditor.record}
          existingEvent={eventEditor.existingEvent}
          suppliers={suppliers}
          user={user}
          onClose={() => setEventEditor(null)}
          onSaved={handleEventSaved}
        />
      )}
      
      {/* 🆕 智能联动:拒付 / 定制咨询 / 实拍核实 */}
      {smartEditor?.kind === 'chargeback' && (() => {
        const r = smartEditor.record;
        const prefill = {
          order_no: r.orderRef || '',
          customer_email: r.customerEmail || '',
          customer_name: r.customer || '',
          site: r.website || '',
          source_record_id: r.id,
          reason_detail: r.note || '',
        };
        return <ChargebackEditor cb={prefill} user={user} employees={employees}
          onClose={() => setSmartEditor(null)}
          onSaved={() => { setSmartEditor(null); toast('✓ 已创建拒付记录,可在 🚨拒付 tab 查看'); }} toast={toast} />;
      })()}
      
      {smartEditor?.kind === 'custom' && (() => {
        const r = smartEditor.record;
        const prefill = {
          customer_name: r.customer || '',
          customer_email: r.customerEmail || '',
          site: r.website || '',
          requirement: r.note || '',
          source_record_id: r.id,
        };
        return <CustomInquiryEditor item={prefill} user={user}
          onClose={() => setSmartEditor(null)}
          onSaved={() => { setSmartEditor(null); toast('✓ 已创建定制咨询,可在 🎨定制&实拍 tab 查看'); }} toast={toast} />;
      })()}
      
      {smartEditor?.kind === 'photo' && (() => {
        const r = smartEditor.record;
        const prefill = {
          product_name: r.orderRef || '',
          difference_detail: r.note || '',
          affected_orders: r.orderRef ? [r.orderRef] : [],
          source_record_id: r.id,
        };
        return <PhotoVerificationEditor item={prefill} user={user}
          onClose={() => setSmartEditor(null)}
          onSaved={() => { setSmartEditor(null); toast('✓ 已创建实拍核实,可在 🎨定制&实拍 tab 查看'); }} toast={toast} />;
      })()}
      
      {/* 转交工作 modal */}
      {transferModal && (() => {
        const r = records.find(rec => rec.id === transferModal);
        if (!r) return null;
        const currentOwner = employees.find(e => e.id === r.ownerId);
        return (
          <div onClick={() => setTransferModal(null)}
            style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center', padding:20}}>
            <div onClick={e => e.stopPropagation()}
              style={{background:'white', borderRadius:'var(--radius-lg)', maxWidth:560, width:'100%', maxHeight:'85vh', overflowY:'auto', overflowX:'hidden', padding:24}}>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="font-display" style={{fontSize:18, fontWeight:600, letterSpacing:'-.022em'}}>🔄 转交工作</div>
                  <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>
                    把这条跟进记录转给其他员工（不影响历史记录归属）
                  </div>
                </div>
                <button className="btn-sec" onClick={() => setTransferModal(null)} style={{padding:'4px 12px'}}>×</button>
              </div>
              
              {/* 记录信息 */}
              <div style={{padding:12, background:'var(--bg-soft)', borderRadius:'var(--radius)', marginBottom:14, fontSize:13}}>
                <div style={{fontWeight:600, marginBottom:4}}>
                  {r.orderRef || r.customer || '(无订单号)'}
                </div>
                {r.customer && r.orderRef && <div style={{color:'var(--ink-3)', fontSize:12}}>{r.customer}</div>}
                {r.note && <div style={{color:'var(--ink-2)', fontSize:12, marginTop:4}}>💬 {r.note}</div>}
                <div style={{color:'var(--ink-3)', fontSize:11, marginTop:6}}>
                  当前归属：<strong>{currentOwner?.name || '?'}{currentOwner?.alias ? ' ' + currentOwner.alias : ''}</strong>
                  {r.nextFollowUp && <span style={{marginLeft:8}}>· 下次跟进：{r.nextFollowUp}</span>}
                </div>
              </div>
              
              <div style={{fontSize:12, color:'var(--ink-3)', marginBottom:8, fontWeight:600}}>选择新的负责人：</div>
              
              {/* 员工选择网格 */}
              <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(140px, 1fr))', gap:8}}>
                {employees.filter(e => e.role !== 'finance' && e.id !== r.ownerId).map(emp => {
                  // 统计该员工当前未完成工作数
                  const workload = records.filter(rec => rec.ownerId === emp.id && !rec.deleted && rec.status !== 'resolved').length;
                  return (
                    <button key={emp.id}
                      onClick={() => transferRecord(r.id, emp.id)}
                      style={{
                        padding:'10px 12px', borderRadius:'var(--radius)',
                        border:'1px solid var(--line)', background:'white',
                        cursor:'pointer', textAlign:'left',
                        transition:'all .15s', display:'flex', flexDirection:'column', gap:2,
                        fontFamily:'inherit',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-soft)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.background = 'white'; }}
                    >
                      <div style={{fontWeight:600, fontSize:13, color:'var(--ink)'}}>
                        {emp.name}{emp.alias ? ' ' + emp.alias : ''}
                        {emp.role === 'super_admin' && <span style={{color:'var(--accent)', marginLeft:4, fontSize:10}}>👑</span>}
                        {emp.role === 'admin' && <span style={{color:'var(--accent)', marginLeft:4, fontSize:10}}>⭐</span>}
                      </div>
                      <div style={{fontSize:11, color:'var(--ink-3)'}}>
                        {emp.sites || emp.title || '-'}
                      </div>
                      <div style={{fontSize:10, color: workload > 8 ? 'var(--bad)' : (workload > 4 ? 'var(--gold)' : 'var(--ink-4)'), marginTop:2}}>
                        当前 {workload} 单未完成
                      </div>
                    </button>
                  );
                })}
              </div>
              
              <div style={{fontSize:11, color:'var(--ink-4)', marginTop:12, lineHeight:1.5, padding:'8px 10px', background:'#fef7ec', borderRadius:6}}>
                💡 转交后：新负责人会在自己的列表里看到这条跟进，原负责人不再看到。但历史记录（之前的跟进信息）保留完整。
              </div>
            </div>
          </div>
        );
      })()}
      
      {/* 🆕 状态下拉 Portal - fixed 定位完全脱离表格容器 */}
      {statusMenuOpen && (() => {
        const r = (tableRecords || []).find(x => x.id === statusMenuOpen);
        if (!r) return null;
        const styleMap = {
          pending:     { bg:'#f5f5f7', border:'#86868b', color:'#525252' },
          following:   { bg:'#fff7ed', border:'#ff9500', color:'#9a3412' },
          waiting:     { bg:'#e0f2fe', border:'#0071e3', color:'#075985' },
          resolved:    { bg:'#dcfce7', border:'#34c759', color:'#14532d' },
          transferred: { bg:'#fef3c7', border:'#d97706', color:'#854d0e' },
        };
        return (
          <div className="status-dropdown-portal"
            style={{
              position:'fixed', top: statusDropdownPos.top, left: statusDropdownPos.left,
              minWidth: statusDropdownPos.width, zIndex:9999,
              background:'white', border:'1px solid var(--line)', borderRadius:8,
              boxShadow:'0 12px 32px rgba(0,0,0,.18)', overflow:'hidden',
            }}>
            {STATUSES.map(s => {
              const ss = styleMap[s.key] || styleMap.pending;
              const active = s.key === r.status;
              return (
                <div key={s.key} onClick={() => { updateRow(r.id, {status:s.key}); setStatusMenuOpen(null); }}
                  style={{
                    padding:'8px 14px', fontSize:13, cursor:'pointer',
                    background: active ? ss.bg : 'white',
                    color: active ? ss.color : 'var(--ink-2)',
                    fontWeight: active ? 600 : 400,
                    borderLeft: active ? '3px solid ' + ss.border : '3px solid transparent',
                    whiteSpace:'nowrap', transition:'background .1s',
                  }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.background = '#f5f5f7'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'white'; }}>
                  {s.label}
                </div>
              );
            })}
          </div>
        );
      })()}
      
      {/* 批量转交 modal */}
      {batchTransferModal && (
        <BatchTransferModal
          employees={employees}
          records={records}
          user={user}
          fromUserId={batchTransferModal.fromUserId}
          setFromUserId={(id) => setBatchTransferModal({ fromUserId: id })}
          onClose={() => setBatchTransferModal(null)}
          onTransfer={batchTransferRecords}
        />
      )}
    </div>
  );
};

// ============================================================
// 📄 分页组件 - 首页/上一页/页码/下一页/末页 + 每页条数
// ============================================================
const Pagination = ({ currentPage, totalPages, pageSize, totalItems, onPageChange, onPageSizeChange, position = 'bottom' }) => {
  if (totalItems === 0) return null;
  
  // 生成显示的页码 - 当前页前后各 2 页 + 首尾
  const getPageNumbers = () => {
    const pages = [];
    const showAround = 2;
    
    if (totalPages <= 7) {
      // 总页数少 → 全显示
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > showAround + 2) pages.push('...');
      
      const start = Math.max(2, currentPage - showAround);
      const end = Math.min(totalPages - 1, currentPage + showAround);
      for (let i = start; i <= end; i++) pages.push(i);
      
      if (currentPage < totalPages - showAround - 1) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };
  
  const startIdx = (currentPage - 1) * pageSize + 1;
  const endIdx = Math.min(currentPage * pageSize, totalItems);
  
  return (
    <div style={{
      display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:10,
      padding:'10px 14px', background:'var(--bg-elevated)', borderRadius:10, border:'1px solid var(--line)',
    }}>
      <div style={{display:'flex', alignItems:'center', gap:6, flexWrap:'wrap'}}>
        {/* 首页 */}
        <button onClick={() => onPageChange(1)} disabled={currentPage === 1}
          title="第一页"
          style={{padding:'5px 9px', borderRadius:5, border:'1px solid var(--line)', background:'white', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', fontSize:12, fontFamily:'inherit', color: currentPage === 1 ? '#ccc' : 'var(--ink-2)'}}>
          « 首页
        </button>
        {/* 上一页 */}
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}
          style={{padding:'5px 9px', borderRadius:5, border:'1px solid var(--line)', background:'white', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', fontSize:12, fontFamily:'inherit', color: currentPage === 1 ? '#ccc' : 'var(--ink-2)'}}>
          ‹ 上一页
        </button>
        
        {/* 页码 */}
        {getPageNumbers().map((p, idx) => 
          p === '...' ? (
            <span key={'dot_' + idx} style={{padding:'5px 4px', color:'var(--ink-4)', fontSize:12}}>···</span>
          ) : (
            <button key={p} onClick={() => onPageChange(p)}
              style={{
                padding:'5px 10px', borderRadius:5, 
                border:'1px solid ' + (p === currentPage ? 'var(--accent)' : 'var(--line)'),
                background: p === currentPage ? 'var(--accent)' : 'white',
                color: p === currentPage ? 'white' : 'var(--ink)',
                cursor:'pointer', fontSize:12, fontFamily:'inherit', fontWeight: p === currentPage ? 600 : 400,
                minWidth:32,
              }}>
              {p}
            </button>
          )
        )}
        
        {/* 下一页 */}
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}
          style={{padding:'5px 9px', borderRadius:5, border:'1px solid var(--line)', background:'white', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', fontSize:12, fontFamily:'inherit', color: currentPage === totalPages ? '#ccc' : 'var(--ink-2)'}}>
          下一页 ›
        </button>
        {/* 末页 */}
        <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}
          title="最后一页"
          style={{padding:'5px 9px', borderRadius:5, border:'1px solid var(--line)', background:'white', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', fontSize:12, fontFamily:'inherit', color: currentPage === totalPages ? '#ccc' : 'var(--ink-2)'}}>
          末页 »
        </button>
        
        {/* 直接跳转 */}
        <div style={{display:'flex', alignItems:'center', gap:4, marginLeft:8}}>
          <span style={{fontSize:11, color:'var(--ink-3)'}}>跳转</span>
          <input type="number" min={1} max={totalPages} 
            onKeyDown={e => {
              if (e.key === 'Enter') {
                const p = parseInt(e.target.value);
                if (p >= 1 && p <= totalPages) { onPageChange(p); e.target.value = ''; }
              }
            }}
            placeholder={String(currentPage)}
            style={{width:55, padding:'4px 6px', border:'1px solid var(--line)', borderRadius:5, fontSize:12, textAlign:'center'}} />
          <span style={{fontSize:11, color:'var(--ink-3)'}}>页</span>
        </div>
      </div>
      
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <span style={{fontSize:11, color:'var(--ink-3)'}}>
          第 <strong style={{color:'var(--ink)'}}>{startIdx}-{endIdx}</strong> 条 / 共 <strong style={{color:'var(--ink)'}}>{totalItems}</strong> 条
        </span>
        <select value={pageSize} onChange={e => onPageSizeChange(parseInt(e.target.value))}
          style={{padding:'4px 8px', border:'1px solid var(--line)', borderRadius:5, fontSize:12, background:'white', fontFamily:'inherit'}}>
          <option value={50}>50 条/页</option>
          <option value={100}>100 条/页</option>
          <option value={200}>200 条/页</option>
          <option value={500}>500 条/页</option>
        </select>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, unit, color, hint, onClick, active }) => {
  const clickable = !!onClick;
  const accent = color || 'var(--accent)';
  return (
    <div
      onClick={onClick}
      style={{
        background: active ? 'var(--paper)' : 'var(--bg-elevated)',
        border: active ? `1.5px solid ${accent}` : '1px solid transparent',
        borderRadius: 'var(--radius-lg)',
        padding: '18px 20px',
        cursor: clickable ? 'pointer' : 'default',
        transition: 'background .2s, border-color .2s, box-shadow .2s, transform .15s',
        boxShadow: 'none',
        position: 'relative',
      }}
      onMouseEnter={clickable ? e => {
        if (!active) {
          e.currentTarget.style.background = 'var(--paper)';
          e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
        }
      } : null}
      onMouseLeave={clickable ? e => {
        if (!active) {
          e.currentTarget.style.background = 'var(--bg-elevated)';
          e.currentTarget.style.boxShadow = 'none';
        }
      } : null}
    >
      <div style={{fontSize:'12px', color:'var(--ink-3)', fontWeight:500, marginBottom:'6px', letterSpacing:'-.003em', display:'flex', justifyContent:'space-between', alignItems:'center', minHeight:'14px'}}>
        <span>{label}</span>
        {active && <span style={{fontSize:'10px', color: accent, fontWeight:600, display:'inline-flex', alignItems:'center', gap:'2px'}}>● 已筛选</span>}
        {clickable && !active && <span style={{fontSize:'10px', color:'var(--ink-4)', opacity:.6}}>点击筛选</span>}
      </div>
      <div style={{display:'flex', alignItems:'baseline', gap:'4px'}}>
        <span className="font-display tabular-nums" style={{fontSize:'30px', fontWeight:600, letterSpacing:'-.022em', color: accent, lineHeight:1.1}}>{value}</span>
        {unit && <span style={{fontSize:'13px', color:'var(--ink-3)', fontWeight:400}}>{unit}</span>}
      </div>
      {hint && <div style={{fontSize:'11px', color:'var(--ink-4)', marginTop:'4px', minHeight:'14px'}}>{hint}</div>}
    </div>
  );
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
const getFileTypeInfo = (fileObj) => {
  const name = fileObj.name || '';
  const mime = fileObj.type || '';
  const ext = name.split('.').pop()?.toLowerCase() || '';
  
  if (mime.startsWith('image/') || ['jpg','jpeg','png','gif','webp','svg'].includes(ext)) {
    return { kind:'image', icon:'🖼', color:'#0369a1', label:'图片' };
  }
  if (mime.startsWith('video/') || ['mp4','webm','mov','avi'].includes(ext)) {
    return { kind:'video', icon:'🎬', color:'#7c3aed', label:'视频' };
  }
  if (mime.startsWith('audio/') || ['mp3','wav','ogg'].includes(ext)) {
    return { kind:'audio', icon:'🎵', color:'#0891b2', label:'音频' };
  }
  if (ext === 'pdf' || mime === 'application/pdf') {
    return { kind:'pdf', icon:'📕', color:'#dc2626', label:'PDF' };
  }
  if (['ppt','pptx'].includes(ext) || mime.includes('presentation') || mime.includes('powerpoint')) {
    return { kind:'pptx', icon:'📊', color:'#d97706', label:'PPT' };
  }
  if (['xls','xlsx'].includes(ext) || mime.includes('spreadsheet') || mime.includes('excel')) {
    return { kind:'xlsx', icon:'📈', color:'#16a34a', label:'Excel' };
  }
  if (['doc','docx'].includes(ext) || mime.includes('wordprocessingml') || mime.includes('msword')) {
    return { kind:'docx', icon:'📘', color:'#1d4ed8', label:'Word' };
  }
  if (['txt','csv','md'].includes(ext) || mime.startsWith('text/')) {
    return { kind:'text', icon:'📄', color:'#525252', label:'文本' };
  }
  if (['zip','rar','7z'].includes(ext)) {
    return { kind:'zip', icon:'📦', color:'#737373', label:'压缩包' };
  }
  return { kind:'other', icon:'📎', color:'#737373', label:'文件' };
};

const formatFileSize = (bytes) => {
  if (!bytes && bytes !== 0) return '';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1048576) return (bytes/1024).toFixed(1) + ' KB';
  return (bytes/1048576).toFixed(1) + ' MB';
};

// ============================================================
// 🆕 文件预览 modal - 支持 PDF / Office / 图片 / 视频
// ============================================================
const FilePreviewModal = ({ file, onClose }) => {
  if (!file) return null;
  const typeInfo = getFileTypeInfo(file);
  
  const renderPreview = () => {
    if (typeInfo.kind === 'image') {
      return <img src={file.url} style={{maxWidth:'100%', maxHeight:'80vh', objectFit:'contain'}} />;
    }
    if (typeInfo.kind === 'video') {
      return <video src={file.url} controls autoPlay style={{maxWidth:'100%', maxHeight:'80vh', background:'black'}} />;
    }
    if (typeInfo.kind === 'audio') {
      return (
        <div style={{padding:40, background:'white', borderRadius:12, minWidth:400}}>
          <div style={{fontSize:64, textAlign:'center', marginBottom:14}}>🎵</div>
          <audio src={file.url} controls autoPlay style={{width:'100%'}} />
        </div>
      );
    }
    if (typeInfo.kind === 'pdf') {
      return <iframe src={file.url} style={{width:'90vw', height:'85vh', border:'none', borderRadius:8, background:'white'}} title="PDF 预览" />;
    }
    if (['pptx','xlsx','docx'].includes(typeInfo.kind)) {
      const officeUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(file.url)}`;
      return (
        <div style={{width:'92vw', height:'85vh', background:'white', borderRadius:8, overflow:'hidden'}}>
          <iframe src={officeUrl} style={{width:'100%', height:'100%', border:'none'}} title="Office 预览" allowFullScreen />
        </div>
      );
    }
    return (
      <div style={{padding:40, background:'white', borderRadius:12, textAlign:'center', minWidth:340}}>
        <div style={{fontSize:64, marginBottom:14}}>{typeInfo.icon}</div>
        <div style={{fontSize:16, fontWeight:600, marginBottom:6}}>{file.name || '文件'}</div>
        <div style={{fontSize:12, color:'var(--ink-3)', marginBottom:16}}>
          {typeInfo.label} · {formatFileSize(file.size)}
        </div>
        <div style={{fontSize:11, color:'#854d0e', marginBottom:14, padding:10, background:'#fef3c7', borderRadius:6, border:'1px solid #fcd34d'}}>
          💡 此类型暂不支持在线预览，请下载到本地查看
        </div>
        <a href={file.url} download={file.name} target="_blank" rel="noopener noreferrer"
          style={{display:'inline-block', padding:'10px 24px', background:'var(--accent)', color:'white', borderRadius:8, textDecoration:'none', fontSize:13, fontWeight:600}}>
          📥 下载文件
        </a>
      </div>
    );
  };
  
  return (
    <div onClick={onClose}
      style={{position:'fixed', inset:0, background:'rgba(0,0,0,.85)', zIndex:10000, display:'flex', flexDirection:'column', padding:20, gap:10}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', color:'white', flexShrink:0}}>
        <div style={{display:'flex', alignItems:'center', gap:10, flex:1, minWidth:0}}>
          <span style={{fontSize:24}}>{typeInfo.icon}</span>
          <div style={{flex:1, minWidth:0}}>
            <div style={{fontSize:14, fontWeight:600, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{file.name || '附件'}</div>
            <div style={{fontSize:11, opacity:.7}}>{typeInfo.label} · {formatFileSize(file.size)}</div>
          </div>
        </div>
        <div style={{display:'flex', gap:8, flexShrink:0}}>
          <a href={file.url} download={file.name} target="_blank" rel="noopener noreferrer"
            style={{padding:'6px 14px', background:'rgba(255,255,255,.15)', color:'white', borderRadius:6, textDecoration:'none', fontSize:12, fontWeight:600}}>
            📥 下载
          </a>
          <button onClick={onClose} style={{padding:'6px 14px', background:'rgba(255,255,255,.15)', color:'white', border:'none', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}>
            ✕ 关闭
          </button>
        </div>
      </div>
      <div onClick={e => e.stopPropagation()} style={{flex:1, display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden'}}>
        {renderPreview()}
      </div>
    </div>
  );
};

// ============================================================
// 🆕 通用多文件上传（支持任意类型）
// ============================================================
const MultiFileUploader = ({ files, setFiles, bucket = 'briefing-files', maxSize = 50, accept = '*' }) => {
  const fileInputRef = React.useRef(null);
  const dropRef = React.useRef(null);
  const [uploading, setUploading] = useState(false);
  const [previewFile, setPreviewFile] = useState(null);
  
  const uploadOne = async (file) => {
    if (file.size > maxSize * 1024 * 1024) { 
      alert(`"${file.name}" 超过 ${maxSize}MB 限制，请压缩后再上传`); 
      return; 
    }
    setUploading(true);
    try {
      const res = await CLOUD.uploadFile(bucket, file);
      if (!res) { alert('上传失败：' + file.name); setUploading(false); return; }
      const newFile = {
        id: 'f_' + Date.now().toString(36) + Math.random().toString(36).slice(2,7),
        url: res.url,
        path: res.path,
        name: res.name,
        size: res.size,
        type: res.type,
        uploaded_at: new Date().toISOString(),
      };
      setFiles([...(files || []), newFile]);
    } catch(e) {
      alert('上传失败: ' + e.message);
    }
    setUploading(false);
  };
  
  const handleFiles = async (fileList) => {
    if (!fileList) return;
    for (const f of Array.from(fileList)) {
      await uploadOne(f);
    }
  };
  
  useEffect(() => {
    const handler = (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const it of items) {
        const f = it.getAsFile();
        if (f) { uploadOne(f); e.preventDefault(); break; }
      }
    };
    const el = dropRef.current;
    if (!el) return;
    el.addEventListener('paste', handler);
    return () => el.removeEventListener('paste', handler);
  }, [files]);
  
  const removeFile = async (file) => {
    if (!confirm(`删除 "${file.name}"？`)) return;
    if (file.path) await CLOUD.deleteImage(bucket, file.path);
    setFiles(files.filter(f => f.id !== file.id));
  };
  
  return (
    <div>
      <div 
        ref={dropRef}
        tabIndex={0}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={e => { e.preventDefault(); e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-soft)'; }}
        onDragLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.background = '#fafafa'; }}
        onDrop={e => { 
          e.preventDefault(); 
          e.currentTarget.style.borderColor = 'var(--line)'; 
          e.currentTarget.style.background = '#fafafa';
          handleFiles(e.dataTransfer.files); 
        }}
        style={{
          border:'2px dashed var(--line)', borderRadius:10, padding:'16px',
          textAlign:'center', cursor:'pointer', background:'#fafafa',
          transition:'all .15s', outline:'none',
        }}>
        <div style={{fontSize:13, color:'var(--ink-2)', fontWeight:500}}>
          {uploading ? '⏳ 上传中...' : '📎 拖拽 / 粘贴 / 点击上传文件'}
        </div>
        <div style={{fontSize:10, color:'var(--ink-4)', marginTop:4}}>
          支持图片 / PDF / PPT / Excel / Word / 视频等 · 单文件最大 {maxSize}MB · 可批量
        </div>
        <input ref={fileInputRef} type="file" accept={accept} multiple style={{display:'none'}}
          onChange={e => { handleFiles(e.target.files); e.target.value = ''; }} />
      </div>
      
      {files && files.length > 0 && (
        <div style={{display:'flex', flexDirection:'column', gap:6, marginTop:10}}>
          {files.map(f => {
            const info = getFileTypeInfo(f);
            return (
              <div key={f.id} style={{display:'flex', alignItems:'center', gap:10, padding:8, background:'white', border:'1px solid var(--line)', borderRadius:8}}>
                {info.kind === 'image' ? (
                  <img src={f.url} style={{width:40, height:40, objectFit:'cover', borderRadius:5, flexShrink:0, cursor:'pointer'}} onClick={() => setPreviewFile(f)} />
                ) : (
                  <div style={{width:40, height:40, background: info.color + '15', borderRadius:5, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, flexShrink:0, cursor:'pointer'}} onClick={() => setPreviewFile(f)}>
                    {info.icon}
                  </div>
                )}
                <div style={{flex:1, minWidth:0, cursor:'pointer'}} onClick={() => setPreviewFile(f)}>
                  <div style={{fontSize:13, color:'var(--ink)', fontWeight:500, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{f.name || '未命名'}</div>
                  <div style={{fontSize:10, color:'var(--ink-3)', marginTop:2}}>
                    <span style={{padding:'1px 5px', background: info.color + '15', color: info.color, borderRadius:3, fontWeight:600}}>{info.label}</span>
                    {' · '}{formatFileSize(f.size)}
                  </div>
                </div>
                <button onClick={() => setPreviewFile(f)}
                  style={{padding:'4px 10px', background:'#e0f2fe', color:'#0369a1', border:'1px solid #7dd3fc', borderRadius:5, cursor:'pointer', fontSize:11, fontWeight:600, fontFamily:'inherit', flexShrink:0}}>
                  👁 预览
                </button>
                <button onClick={() => removeFile(f)}
                  style={{padding:'4px 8px', background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:5, cursor:'pointer', fontSize:11, fontFamily:'inherit', flexShrink:0}}>
                  ✕
                </button>
              </div>
            );
          })}
        </div>
      )}
      
      {previewFile && <FilePreviewModal file={previewFile} onClose={() => setPreviewFile(null)} />}
    </div>
  );
};

// ============================================================
// 🆕 文件芯片（列表中紧凑显示一个文件，点击预览）
// ============================================================
const FileChip = ({ file, onClick }) => {
  const info = getFileTypeInfo(file);
  return (
    <div onClick={onClick}
      style={{
        display:'flex', alignItems:'center', gap:8, padding:'6px 10px',
        background:'white', border:'1px solid var(--line)', borderRadius:6,
        cursor:'pointer', fontSize:12, transition:'all .15s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = info.color; e.currentTarget.style.background = info.color + '08'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.background = 'white'; }}>
      <span style={{fontSize:18, flexShrink:0}}>{info.icon}</span>
      <div style={{flex:1, minWidth:0}}>
        <div style={{color:'var(--ink)', fontWeight:500, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{file.name || '附件'}</div>
        <div style={{fontSize:10, color:'var(--ink-3)'}}>{info.label} · {formatFileSize(file.size)}</div>
      </div>
      <span style={{color: info.color, fontSize:11, flexShrink:0, fontWeight:600}}>预览 ›</span>
    </div>
  );
};

// ============================================================
// 🆕 每日温暖问候 - 根据时间和姓名生成个性化的一句话
// ============================================================
const GREETINGS_LIB = {
  // 早晨 5-11 点
  morning: [
    '{name}，早安 ☀️ 今天又是元气满满的一天',
    '早上好 {name}，慢慢来，一切都来得及',
    '哈喽 {name}，听说今天会比昨天更好',
    '{name}，早安！希望今天遇到的客户都很温柔',
    '嘿 {name}，准备好开始今天的小冒险了吗',
    '{name}，新的一天，从一杯水开始吧 💧',
    '早安 {name}，请允许我说一句：你比想象中更厉害',
    '{name}，深呼吸，从容应对，今天我们一起加油 🌿',
    '早上好 {name}，愿今天的邮件都好回复',
    '嗨 {name}，今天的你格外可爱（认真的）',
    '{name}，新的一天开始啦，记得对自己温柔一点',
    '早安 {name}，听到没——你今天会很顺利的 ✨',
    '{name}，请允许我提醒你：你已经做得很好了',
  ],
  // 中午 11-14 点
  noon: [
    '{name}，午饭好好吃，别忘了喝水',
    '嗨 {name}，吃点好的吧，下午的力气全靠它了 🍱',
    '{name}，记得抬头看看外面的阳光哦 🌤',
    '午安 {name}，再坚持一小会儿就可以吃饭啦',
    '{name}，给眼睛放个假，不看屏幕 30 秒',
    '中午好 {name}，给胃一点温柔吧',
    '{name}，工作再忙，也要好好吃饭哦',
  ],
  // 下午 14-18 点
  afternoon: [
    '{name}，下午好，一杯咖啡时间到 ☕',
    '嗨 {name}，最艰难的时候过去了，加油 🌈',
    '{name}，离下班又近了一步，要不要奖励一下自己',
    '下午也要好好的 {name}，你已经做得很棒了',
    '{name}，喝杯水歇一下，不急',
    '嘿 {name}，下午的阳光是不是温柔了一些',
    '{name}，记得伸个懒腰，肩颈不要太累',
  ],
  // 晚上 18-22 点
  evening: [
    '{name}，辛苦了，今天的你很努力 ❤️',
    '嗨 {name}，到点了，回家吧,今天到此为止',
    '{name}，今天的工作交给明天的你处理,OK',
    '累了就早点休息 {name},没什么是睡一觉解决不了的',
    '{name}，今天你帮了很多人，谢谢你',
    '辛苦啦 {name},今晚记得吃顿好的 🍲',
    '{name}，今天又是好好打工的一天,你真棒',
    '{name} 辛苦了 ❤️ 今天的难都已经过去了',
    '辛苦了 {name},今天每一封邮件你都认真回了',
    '{name},一天的疲惫,值得一顿好饭来犒劳',
    '辛苦 {name},今天处理了那么多事情,真的很厉害',
    '{name} 别忙太晚,今天的成果已经够漂亮了',
  ],
  // 深夜 22-5 点
  late: [
    '{name},这么晚还在,注意身体哦 🌙',
    '{name},再不睡就要变身了,赶紧休息',
    '嘿 {name},明天再说吧,今晚先好好睡',
    '{name},世界很大,但你需要先睡个好觉',
    '夜深了 {name},工作可以慢慢做,身体只有一个',
    '{name} 辛苦了,这么晚还在岗,记得早点收工',
    '{name},再坚强的人也需要休息,今天到这里吧',
  ],
  // 周一专属
  monday: [
    '{name}，新的一周，新的开始 ✨',
    '周一的 {name}，慢热没关系，给自己一点时间',
    '{name}，周一好，今天不需要完美，能完成就行',
  ],
  // 周五专属
  friday: [
    '{name}，撑过今天就是周末啦 🎉',
    '周五好 {name}，今天也要把笑容带回家',
    '{name}，今天的你要再坚持一下下',
  ],
  // 周末（在加班）
  weekend: [
    '{name}，周末还在工作，记得多休息一会儿',
    '{name}，是元气满满的一天还是想躺平的一天？都可以',
    '嘿 {name}，工作和生活，今天先选生活吧',
  ],
};

const DailyGreeting = ({ user }) => {
  const now = new Date();
  const today = now.toISOString().slice(0, 10);
  const hour = now.getHours();
  
  // 🆕 早中晚三段 - 每天每段每个用户最多显示一次（一天最多 3 次）
  // 早: 5-11 点 · 中: 11-18 点 · 晚: 18+ / -5 点
  const timeSlot = hour >= 5 && hour < 11 ? 'morning'
                 : hour >= 11 && hour < 18 ? 'noon'
                 : 'evening';
  const storageKey = `greeting_shown_${user.id}_${today}_${timeSlot}`;
  
  const [hidden, setHidden] = useState(() => {
    try {
      return localStorage.getItem(storageKey) === '1';
    } catch { return false; }
  });
  
  // 渲染时立即标记"已显示",避免同一时段刷新页面又出来
  useEffect(() => {
    if (!hidden) {
      try { localStorage.setItem(storageKey, '1'); } catch {}
    }
  }, [storageKey, hidden]);
  
  if (hidden) return null;
  
  // 🆕 亲切称呼算法:
  //   1. 有英文别名(alias) → 用 alias(例如 Jane / Nicole / Aletta)
  //   2. 无 alias → 中文姓名去掉姓,只用名(例如 "罗燕秋" → "燕秋","谭燕灵" → "燕灵")
  //   3. 单字名 / 复姓不好判断时直接用全名
  const getFriendlyName = (u) => {
    if (u.alias && u.alias.trim()) return u.alias.trim();
    const fullName = (u.name || '').trim();
    if (!fullName) return '同事';
    // 复姓列表(常见的)
    const compoundSurnames = ['欧阳','司马','上官','令狐','诸葛','慕容','尉迟','长孙','宇文','皇甫','东方','西门','南宫','夏侯','公孙','轩辕','赫连'];
    for (const cs of compoundSurnames) {
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
  
  const name = getFriendlyName(user);
  const dayOfWeek = now.getDay();  // 0 = 周日
  
  // 选 bucket - 根据当前时段 + 星期挑选语料
  let bucket;
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
  const seed = (parseInt(today.replace(/-/g, '')) + user.id.split('').reduce((s,c) => s + c.charCodeAt(0), 0) + timeSlot.charCodeAt(0)) % bucket.length;
  const greeting = bucket[seed].replace('{name}', name);
  
  // 时段对应的颜色调
  const getColors = () => {
    if (bucket === GREETINGS_LIB.morning || bucket === GREETINGS_LIB.monday) {
      return { bg:'linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)', border:'#fbbf24', text:'#854d0e', accent:'#d97706' };
    }
    if (bucket === GREETINGS_LIB.noon) {
      return { bg:'linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)', border:'#67e8f9', text:'#155e75', accent:'#0891b2' };
    }
    if (bucket === GREETINGS_LIB.afternoon) {
      return { bg:'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', border:'#7dd3fc', text:'#075985', accent:'#0369a1' };
    }
    if (bucket === GREETINGS_LIB.evening || bucket === GREETINGS_LIB.friday) {
      return { bg:'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)', border:'#f9a8d4', text:'#831843', accent:'#be185d' };
    }
    if (bucket === GREETINGS_LIB.late) {
      return { bg:'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)', border:'#9ca3af', text:'#374151', accent:'#4b5563' };
    }
    return { bg:'linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)', border:'#e9d5ff', text:'#581c87', accent:'#7c3aed' };
  };
  const colors = getColors();
  
  const dismiss = () => {
    try { localStorage.setItem(storageKey, '1'); } catch {}
    setHidden(true);
  };
  
  return (
    <div className="fade-in" style={{
      padding:'14px 18px', borderRadius:14, background: colors.bg, border:'1px solid ' + colors.border,
      display:'flex', alignItems:'center', justifyContent:'space-between', gap:10,
    }}>
      <div style={{display:'flex', alignItems:'center', gap:12, flex:1, minWidth:0}}>
        <div style={{
          width:40, height:40, borderRadius:'50%', background: colors.accent, color:'white',
          display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, fontWeight:600,
          flexShrink:0, boxShadow:'0 2px 8px ' + colors.accent + '40',
        }}>
          {(user.name || '?').slice(-1)}
        </div>
        <div style={{flex:1, minWidth:0}}>
          <div style={{fontSize:15, fontWeight:600, color: colors.text, lineHeight:1.4}}>{greeting}</div>
        </div>
      </div>
      <button onClick={dismiss} title="今天不再显示"
        style={{padding:'4px 10px', background:'transparent', color: colors.text, border:'1px solid ' + colors.border, borderRadius:6, cursor:'pointer', fontSize:11, fontFamily:'inherit', flexShrink:0, opacity:.7}}
        onMouseEnter={e => e.currentTarget.style.opacity = '1'}
        onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}>
        ✕
      </button>
    </div>
  );
};

const MultiImageUploader = ({ attachments, setAttachments, defaultLabel = 'product', maxSize = 10 }) => {
  const fileInputRef = React.useRef(null);
  const dropRef = React.useRef(null);
  const [uploading, setUploading] = useState(false);
  const [previewIdx, setPreviewIdx] = useState(null);
  
  // 标签选项
  const LABELS = [
    { key:'product',       label:'📦 产品图',   color:'#0369a1' },
    { key:'damage',        label:'💥 损坏图',   color:'#dc2626' },
    { key:'communication', label:'💬 沟通图',   color:'#7c3aed' },
    { key:'notes',         label:'📝 备注图',   color:'#525252' },
    { key:'receipt',       label:'🧾 凭证',     color:'#16a34a' },
  ];
  
  const uploadFile = async (file, label = defaultLabel) => {
    if (!file.type.startsWith('image/')) { alert('只能上传图片'); return; }
    if (file.size > maxSize * 1024 * 1024) { alert(`图片大小不能超过 ${maxSize}MB`); return; }
    setUploading(true);
    try {
      const res = await CLOUD.uploadImage('aftersales-images', file);
      if (!res) { alert('上传失败'); setUploading(false); return; }
      const newAttach = {
        id: 'a_' + Date.now().toString(36) + Math.random().toString(36).slice(2,7),
        url: res.url,
        path: res.path,
        label: label,
        size: file.size,
        uploaded_at: new Date().toISOString(),
      };
      setAttachments([...(attachments || []), newAttach]);
    } catch(e) {
      alert('上传失败: ' + e.message);
    }
    setUploading(false);
  };
  
  // 粘贴
  useEffect(() => {
    const handler = (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const it of items) {
        if (it.type.startsWith('image/')) {
          const f = it.getAsFile();
          if (f) { uploadFile(f); e.preventDefault(); break; }
        }
      }
    };
    const el = dropRef.current;
    if (!el) return;
    el.addEventListener('paste', handler);
    return () => el.removeEventListener('paste', handler);
  }, [attachments]);
  
  const handleFiles = (files) => {
    if (!files) return;
    Array.from(files).forEach(f => uploadFile(f));
  };
  
  const removeAttach = async (att) => {
    if (!confirm('删除这张图？')) return;
    if (att.path) await CLOUD.deleteImage('aftersales-images', att.path);
    setAttachments(attachments.filter(a => a.id !== att.id));
  };
  
  const changeLabel = (att, newLabel) => {
    setAttachments(attachments.map(a => a.id === att.id ? { ...a, label: newLabel } : a));
  };
  
  return (
    <div>
      <div 
        ref={dropRef}
        tabIndex={0}
        onClick={() => fileInputRef.current?.click()}
        onDragOver={e => { e.preventDefault(); e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-soft)'; }}
        onDragLeave={e => { e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.background = '#fafafa'; }}
        onDrop={e => { 
          e.preventDefault(); 
          e.currentTarget.style.borderColor = 'var(--line)'; 
          e.currentTarget.style.background = '#fafafa';
          handleFiles(e.dataTransfer.files); 
        }}
        style={{
          border:'2px dashed var(--line)', borderRadius:10, padding:'16px',
          textAlign:'center', cursor:'pointer', background:'#fafafa',
          transition:'all .15s', outline:'none',
        }}>
        <div style={{fontSize:13, color:'var(--ink-2)', fontWeight:500}}>
          {uploading ? '⏳ 上传中...' : '📷 拖拽 / 粘贴 (Ctrl+V) / 点击上传图片'}
        </div>
        <div style={{fontSize:10, color:'var(--ink-4)', marginTop:4}}>
          支持多张 · JPG/PNG/WebP · 最大 {maxSize}MB
        </div>
        <input ref={fileInputRef} type="file" accept="image/*" multiple style={{display:'none'}}
          onChange={e => { handleFiles(e.target.files); e.target.value = ''; }} />
      </div>
      
      {/* 已上传图片网格 */}
      {attachments && attachments.length > 0 && (
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(140px, 1fr))', gap:8, marginTop:10}}>
          {attachments.map((att, idx) => {
            const labelInfo = LABELS.find(l => l.key === att.label) || LABELS[0];
            return (
              <div key={att.id} style={{position:'relative', border:'1px solid var(--line)', borderRadius:8, overflow:'hidden', background:'white'}}>
                <div style={{height:100, position:'relative', background:'#f3f4f6', overflow:'hidden', cursor:'pointer'}}
                  onClick={() => setPreviewIdx(idx)}>
                  <img src={att.url} alt="" style={{width:'100%', height:'100%', objectFit:'cover'}} />
                  <button onClick={e => { e.stopPropagation(); removeAttach(att); }}
                    style={{position:'absolute', top:4, right:4, background:'rgba(220,38,38,.9)', color:'white', border:'none', borderRadius:'50%', width:22, height:22, cursor:'pointer', fontSize:12, fontWeight:600, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    ×
                  </button>
                </div>
                <select value={att.label || 'product'} onChange={e => changeLabel(att, e.target.value)}
                  style={{width:'100%', border:'none', borderTop:'1px solid var(--line)', padding:'4px 6px', fontSize:10, background:labelInfo.color + '20', color:labelInfo.color, fontWeight:600, cursor:'pointer'}}>
                  {LABELS.map(l => <option key={l.key} value={l.key}>{l.label}</option>)}
                </select>
              </div>
            );
          })}
        </div>
      )}
      
      {/* 图片放大预览 */}
      {previewIdx !== null && attachments[previewIdx] && (
        <div onClick={() => setPreviewIdx(null)}
          style={{position:'fixed', inset:0, background:'rgba(0,0,0,.85)', zIndex:10000, display:'flex', alignItems:'center', justifyContent:'center', padding:20, cursor:'pointer'}}>
          <img src={attachments[previewIdx].url} style={{maxWidth:'95%', maxHeight:'95%', objectFit:'contain'}} />
        </div>
      )}
    </div>
  );
};

// ============================================================
// 🆕 供应商可搜索下拉选择器 (693 家供应商搜索筛选)
// ============================================================
const SupplierSelect = ({ suppliers, value, onChange, placeholder = '选择供应商...' }) => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const ref = React.useRef(null);
  
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);
  
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return suppliers.slice(0, 50);
    return suppliers.filter(s => 
      (s.name || '').toLowerCase().includes(q) || 
      (s.contact_person || '').toLowerCase().includes(q)
    ).slice(0, 100);
  }, [suppliers, query]);
  
  const selected = suppliers.find(s => s.id === value || s.id === parseInt(value));
  
  return (
    <div ref={ref} style={{position:'relative'}}>
      <input
        type="text"
        placeholder={placeholder}
        value={open ? query : (selected ? selected.name + (selected.contact_person ? ' · ' + selected.contact_person : '') : '')}
        onChange={e => { setQuery(e.target.value); setOpen(true); }}
        onFocus={() => { setQuery(''); setOpen(true); }}
        style={{width:'100%', padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}
      />
      {selected && !open && (
        <button onClick={() => onChange(null)}
          style={{position:'absolute', right:6, top:'50%', transform:'translateY(-50%)', background:'transparent', border:'none', color:'var(--ink-4)', cursor:'pointer', fontSize:14}}>×</button>
      )}
      {open && (
        <div style={{position:'absolute', top:'100%', left:0, right:0, marginTop:2, background:'white', border:'1px solid var(--line)', borderRadius:8, maxHeight:300, overflowY:'auto', overflowX:'hidden', zIndex:100, boxShadow:'0 8px 20px rgba(0,0,0,.1)'}}>
          {filtered.length === 0 ? (
            <div style={{padding:'12px', textAlign:'center', color:'var(--ink-4)', fontSize:12}}>
              {query ? `没找到 "${query}"` : '加载中...'}
            </div>
          ) : (
            filtered.map(s => (
              <div key={s.id}
                onClick={() => { onChange(s.id); setOpen(false); setQuery(''); }}
                style={{padding:'8px 12px', cursor:'pointer', borderBottom:'1px solid var(--bg)', fontSize:12, transition:'background .1s'}}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--bg)'}
                onMouseLeave={e => e.currentTarget.style.background = 'white'}>
                <div style={{fontWeight:600, color:'var(--ink)'}}>{s.name}</div>
                <div style={{fontSize:10, color:'var(--ink-3)', marginTop:1}}>
                  {s.contact_person ? `👤 ${s.contact_person}` : ''}
                  {s.alipay ? ` · 💳 ${s.alipay}` : ''}
                </div>
              </div>
            ))
          )}
          {filtered.length === 50 && !query && (
            <div style={{padding:'6px 12px', fontSize:10, color:'var(--ink-4)', textAlign:'center', borderTop:'1px solid var(--line)'}}>
              显示前 50 家 · 搜索可看更多 (共 {suppliers.length} 家)
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ============================================================
// 🆕 添加事件 Modal - 售后 / 补件 / 退款 统一入口
// ============================================================
const EventEditorModal = ({ kind, record, suppliers, user, onClose, onSaved, existingEvent = null }) => {
  // kind: 'aftersale' | 'refill' | 'refund'
  const isEdit = !!existingEvent;
  const [saving, setSaving] = useState(false);
  
  // 共用字段
  const [orderRef, setOrderRef] = useState(existingEvent?.order_ref || record?.orderRef || '');
  const [customer, setCustomer] = useState(existingEvent?.customer || record?.customer || '');
  const [supplierId, setSupplierId] = useState(existingEvent?.supplier_id || null);
  const [attachments, setAttachments] = useState(existingEvent?.attachments || []);
  const [notes, setNotes] = useState(existingEvent?.notes || '');
  
  // 售后专属
  const [issueType, setIssueType] = useState(existingEvent?.issue_type || 'transport_damage');
  const [issueTypeCustom, setIssueTypeCustom] = useState(existingEvent?.issue_type_custom || '');
  const [damagedPart, setDamagedPart] = useState(existingEvent?.damaged_part || '');
  const [productName, setProductName] = useState(existingEvent?.product_name || '');
  const productsList = useProducts();  // 🆕 fix22 联动 1: 售后/补件/退款 productName 联想
  const [issueDetail, setIssueDetail] = useState(existingEvent?.issue_detail || '');
  const [country, setCountry] = useState(existingEvent?.country || '');
  const [packer, setPacker] = useState(existingEvent?.packer || '');
  const [qc, setQc] = useState(existingEvent?.qc || '');
  const [aftersaleStatus, setAftersaleStatus] = useState(existingEvent?.status || 'pending_remind');
  
  // 补件专属
  const [refillItems, setRefillItems] = useState(existingEvent?.items || [{ item:'', qty:1, unit:'套', attachments:[] }]);
  const [expectedShipDate, setExpectedShipDate] = useState(existingEvent?.expected_ship_date || '');
  const [refillStatus, setRefillStatus] = useState(existingEvent?.status || 'pending_order');
  
  // 退款专属
  const [refundType, setRefundType] = useState(existingEvent?.refund_type || 'quality_issue');
  const [refundTypeCustom, setRefundTypeCustom] = useState(existingEvent?.refund_type_custom || '');
  const [amount, setAmount] = useState(existingEvent?.amount || '');
  const [currency, setCurrency] = useState(existingEvent?.currency || 'USD');
  const [paymentMethod, setPaymentMethod] = useState(existingEvent?.payment_method || 'shopify_payments');
  const [paymentMethodCustom, setPaymentMethodCustom] = useState(existingEvent?.payment_method_custom || '');
  const [refundReason, setRefundReason] = useState(existingEvent?.refund_reason || '');
  
  const supplier = suppliers.find(s => s.id === supplierId);
  
  // 提交
  const handleSubmit = async () => {
    if (!orderRef.trim()) { alert('请填写订单号'); return; }
    setSaving(true);
    const now = new Date().toISOString();
    const base = {
      record_id: record?.id || null,
      order_ref: orderRef.trim(),
      customer: customer.trim() || null,
      supplier_id: supplierId,
      supplier_name: supplier?.name || null,
      attachments: attachments,
      notes: notes.trim() || null,
      created_by: user.id,
      created_by_name: user.name + (user.alias ? ' ' + user.alias : ''),
      updated_at: now,
    };
    
    let table, payload;
    if (kind === 'aftersale') {
      table = 'aftersales';
      // "其他" 类型必须填自定义
      if (issueType === 'other' && !issueTypeCustom.trim()) {
        alert('问题类型选了"其他"，请填写具体类型');
        setSaving(false); return;
      }
      payload = {
        ...base,
        product_name: productName.trim() || null,
        issue_type: issueType,
        issue_type_custom: issueType === 'other' ? issueTypeCustom.trim() : null,
        damaged_part: damagedPart.trim() || null,
        issue_detail: issueDetail.trim() || null,
        country: country.trim() || null,
        packer: packer.trim() || null,
        qc: qc.trim() || null,
        status: aftersaleStatus,
      };
    } else if (kind === 'refill') {
      table = 'refills';
      // 过滤掉空的补件项（保留 attachments 字段）
      const validItems = refillItems.filter(i => (i.item || '').trim());
      if (validItems.length === 0) { alert('请至少填一项补件清单'); setSaving(false); return; }
      payload = {
        ...base,
        items: validItems,
        expected_ship_date: expectedShipDate || null,
        status: refillStatus,
      };
    } else {  // refund
      table = 'refunds';
      const amt = parseFloat(amount);
      if (isNaN(amt) || amt <= 0) { alert('请填写正确的退款金额'); setSaving(false); return; }
      if (!refundReason.trim()) { alert('请填写退款原因详情'); setSaving(false); return; }
      // "其他" 类型必须填自定义
      if (refundType === 'other' && !refundTypeCustom.trim()) {
        alert('退款类型选了"其他"，请填写具体类型');
        setSaving(false); return;
      }
      if (paymentMethod === 'other' && !paymentMethodCustom.trim()) {
        alert('支付方式选了"其他"，请填写具体方式');
        setSaving(false); return;
      }
      payload = {
        ...base,
        product_name: productName.trim() || null,
        refund_type: refundType,
        refund_type_custom: refundType === 'other' ? refundTypeCustom.trim() : null,
        amount: amt,
        currency,
        payment_method: paymentMethod,
        payment_method_custom: paymentMethod === 'other' ? paymentMethodCustom.trim() : null,
        refund_reason: refundReason.trim(),
        status: existingEvent?.status || 'pending',
      };
    }
    
    if (isEdit) payload.id = existingEvent.id;
    else if (!isEdit) payload.created_at = now;
    
    try {
      const res = await CLOUD.upsert(table, payload);
      if (res) {
        // 🔗 自动通知协调员（刘强）— 仅创建时通知，编辑不重复通知
        if (!isEdit) {
          notifyCoordinator(kind, res[0] || payload, user);
        }
        // 🆕 fix22 联动2: 新建售后时,自动累加产品主表的 total_aftersales
        if (!isEdit && kind === 'aftersale' && payload.product_name) {
          try {
            const allProds = await CLOUD.list('products', { limit: 1000 });
            const targetName = (payload.product_name || '').trim().toLowerCase();
            // 优先按 SKU(如有) 匹配,否则按精确产品名匹配
            const match = (allProds || []).filter(p => !p.deleted).find(p => {
              if (payload.product_sku && p.sku && p.sku.toLowerCase() === payload.product_sku.toLowerCase()) return true;
              return (p.name || '').trim().toLowerCase() === targetName;
            });
            if (match) {
              await CLOUD.upsert('products', { ...match, total_aftersales: (match.total_aftersales || 0) + 1, updated_at: new Date().toISOString() });
            }
          } catch (e) { console.warn('[联动2] 累加产品售后次数失败:', e); }
        }
        onSaved && onSaved(res[0] || payload);
        onClose();
      } else {
        // 🆕 fix7: 用 alertSaveError 显示详细诊断信息(表名/错误码/原因),而不是"请检查网络"
        const label = kind === 'aftersale' ? '保存售后' : kind === 'refill' ? '保存补件' : '保存退款';
        alertSaveError(label);
      }
    } catch(e) { alert('保存失败: ' + e.message); }
    setSaving(false);
  };
  
  // UI 标题 + 颜色
  const titleInfo = {
    aftersale: { icon:'🔧', title:'售后事件', color:'#ea580c' },
    refill:    { icon:'📦', title:'补件事件', color:'#0369a1' },
    refund:    { icon:'💰', title:'退款事件', color:'#dc2626' },
  }[kind];
  
  return ReactDOM.createPortal(
    <div onClick={onClose}
      style={{position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:100000, display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'5vh 20px', overflowY:'auto', overflowX:'hidden'}}>
      <div onClick={e => e.stopPropagation()}
        style={{background:'white', borderRadius:14, maxWidth:680, width:'100%', display:'flex', flexDirection:'column', maxHeight:'90vh'}}>
        {/* Header */}
        <div style={{padding:'18px 22px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', flexShrink:0, gap:8}}>
          <div>
            <div className="font-display" style={{fontSize:17, fontWeight:600, color: titleInfo.color, display:'flex', alignItems:'center', gap:8}}>
              <span style={{fontSize:22}}>{titleInfo.icon}</span>
              {isEdit ? '编辑' : '添加'}{titleInfo.title}
            </div>
            {record && (
              <div style={{fontSize:11, color:'var(--ink-3)', marginTop:4}}>
                关联跟进：{record.customer || record.orderRef || '(无主题)'} · {record.date}
              </div>
            )}
          </div>
          <div style={{display:'flex', gap:6, alignItems:'center'}}>
            {/* 🆕 fix7: 申请主管协助 */}
            {user && user.role !== 'super_admin' && (
              <button onClick={() => window.__requestSupervisorAssistance?.({
                entityType: titleInfo.title, entityId: existingEvent?.id, entityTitle: existingEvent?.order_ref || orderRef || '(新事件)'
              })}
                style={{padding:'5px 11px', background:'#fef3c7', color:'#92400e', border:'1px solid #fcd34d', borderRadius:6, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit'}}
                title="把这条事件交给主管/老板处理">
                {user.role === 'admin' ? '👑 申请老板' : '🚨 申请主管'}
              </button>
            )}
            <button className="btn-sec" onClick={onClose} style={{padding:'4px 12px'}}>×</button>
          </div>
        </div>
        
        {/* Body - 可滚动 */}
        <div style={{padding:'18px 22px', overflowY:'auto', overflowX:'hidden', flex:1}}>
          {/* 共用字段：订单号 + 客户 */}
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:14}}>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>订单号 *</label>
              <input value={orderRef} onChange={e => setOrderRef(e.target.value)} placeholder="V99299"
                style={{width:'100%', padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            </div>
            <div>
              <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>客户邮箱/名字</label>
              <input value={customer} onChange={e => setCustomer(e.target.value)} placeholder="user@example.com"
                style={{width:'100%', padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
            </div>
          </div>
          
          {/* 售后专属字段 */}
          {kind === 'aftersale' && (
            <>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:14}}>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>问题类型 *</label>
                  <select value={issueType} onChange={e => setIssueType(e.target.value)}
                    style={{width:'100%', padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
                    {ISSUE_TYPES.map(t => <option key={t.key} value={t.key}>{t.label}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>当前状态</label>
                  <select value={aftersaleStatus} onChange={e => setAftersaleStatus(e.target.value)}
                    style={{width:'100%', padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
                    {AFTERSALE_STATUSES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
                  </select>
                </div>
              </div>
              {/* 🆕 问题类型 = 其他 → 显示自定义输入 */}
              {issueType === 'other' && (
                <div style={{marginBottom:14, padding:10, background:'#fef9c3', border:'1px solid #fde68a', borderRadius:8}}>
                  <label style={{fontSize:11, fontWeight:600, color:'#854d0e', display:'block', marginBottom:4}}>💡 请说明具体是什么类型的问题 *</label>
                  <input value={issueTypeCustom} onChange={e => setIssueTypeCustom(e.target.value)}
                    placeholder="例如：包装漏水、配件氧化、电源线规格不匹配..."
                    style={{width:'100%', padding:'6px 10px', border:'1px solid #fcd34d', borderRadius:6, fontSize:13, background:'white'}} />
                </div>
              )}
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:14}}>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>产品名 <span style={{fontWeight:400, color:'var(--ink-3)'}}>(输入联想产品主表)</span></label>
                  <ProductAutocomplete value={productName} onChange={setProductName}
                    onSelect={prod => setProductName(prod.name || '')}
                    products={productsList} mode="name" placeholder="Modern Lava Pendant Lamp" />
                </div>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>损坏部位</label>
                  <input value={damagedPart} onChange={e => setDamagedPart(e.target.value)} placeholder="灯头电线"
                    style={{width:'100%', padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
                </div>
              </div>
              <div style={{marginBottom:14}}>
                <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>问题详细描述</label>
                <textarea value={issueDetail} onChange={e => setIssueDetail(e.target.value)} 
                  placeholder="灯头电线烧坏，原地址补发一套灯头电线"
                  style={{width:'100%', minHeight:60, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical'}} />
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10, marginBottom:14}}>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>国家</label>
                  <input value={country} onChange={e => setCountry(e.target.value)} placeholder="US"
                    style={{width:'100%', padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
                </div>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>打包责任人</label>
                  <input value={packer} onChange={e => setPacker(e.target.value)} placeholder="杨丽分"
                    style={{width:'100%', padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
                </div>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>质检责任人</label>
                  <input value={qc} onChange={e => setQc(e.target.value)}
                    style={{width:'100%', padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
                </div>
              </div>
            </>
          )}
          
          {/* 补件专属字段 */}
          {kind === 'refill' && (
            <>
              <div style={{marginBottom:14}}>
                <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>补件清单 *  <span style={{color:'var(--ink-4)', fontWeight:400, fontSize:10}}>· 每一项可单独上传图片</span></label>
                {refillItems.map((it, idx) => (
                  <div key={idx} style={{marginBottom:10, padding:10, background:'#f8fafc', border:'1px solid var(--line)', borderRadius:8}}>
                    <div style={{display:'flex', gap:6, marginBottom:8, alignItems:'center'}}>
                      <span style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', width:24}}>#{idx+1}</span>
                      <input value={it.item} onChange={e => {
                        const next = [...refillItems]; next[idx] = { ...next[idx], item: e.target.value };
                        setRefillItems(next);
                      }} placeholder="配件名（如：灯头电线）"
                        style={{flex:2, padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
                      <input type="number" value={it.qty} onChange={e => {
                        const next = [...refillItems]; next[idx] = { ...next[idx], qty: parseInt(e.target.value) || 1 };
                        setRefillItems(next);
                      }} min={1}
                        style={{width:60, padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
                      <input value={it.unit || '套'} onChange={e => {
                        const next = [...refillItems]; next[idx] = { ...next[idx], unit: e.target.value };
                        setRefillItems(next);
                      }} placeholder="单位"
                        style={{width:60, padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
                      {refillItems.length > 1 && (
                        <button onClick={() => setRefillItems(refillItems.filter((_, i) => i !== idx))}
                          style={{padding:'6px 10px', background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:6, cursor:'pointer', fontSize:13}}>×</button>
                      )}
                    </div>
                    {/* 🆕 每个补件项的独立图片上传 */}
                    <div style={{paddingLeft:30}}>
                      <div style={{fontSize:10, color:'var(--ink-3)', marginBottom:4}}>
                        📷 此配件的图片 {it.attachments && it.attachments.length > 0 && <span style={{color:'var(--accent)', fontWeight:600}}>({it.attachments.length})</span>}
                      </div>
                      <MultiImageUploader 
                        attachments={it.attachments || []} 
                        setAttachments={(atts) => {
                          const next = [...refillItems]; next[idx] = { ...next[idx], attachments: atts };
                          setRefillItems(next);
                        }}
                        defaultLabel="product" />
                    </div>
                  </div>
                ))}
                <button onClick={() => setRefillItems([...refillItems, { item:'', qty:1, unit:'套', attachments:[] }])}
                  style={{padding:'8px 10px', background:'var(--bg)', border:'1px dashed var(--line)', borderRadius:6, cursor:'pointer', fontSize:12, color:'var(--ink-2)', fontFamily:'inherit', width:'100%'}}>
                  + 添加一项配件
                </button>
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:14}}>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>预计发货日期</label>
                  <input type="date" value={expectedShipDate} onChange={e => setExpectedShipDate(e.target.value)}
                    style={{width:'100%', padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
                </div>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>状态</label>
                  <select value={refillStatus} onChange={e => setRefillStatus(e.target.value)}
                    style={{width:'100%', padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
                    {REFILL_STATUSES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
                  </select>
                </div>
              </div>
            </>
          )}
          
          {/* 退款专属字段 */}
          {kind === 'refund' && (
            <>
              <div style={{marginBottom:14}}>
                <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:6}}>退款类型 *</label>
                <div style={{display:'flex', flexWrap:'wrap', gap:6}}>
                  {REFUND_TYPES.map(t => (
                    <button key={t.key} onClick={() => setRefundType(t.key)}
                      style={{
                        padding:'5px 12px', borderRadius:14, fontSize:11, cursor:'pointer', fontFamily:'inherit',
                        border: '1px solid ' + (refundType === t.key ? t.color : 'var(--line)'),
                        background: refundType === t.key ? t.bg : 'white',
                        color: refundType === t.key ? t.color : 'var(--ink-3)',
                        fontWeight: refundType === t.key ? 600 : 400,
                      }}>
                      {t.label}
                    </button>
                  ))}
                </div>
                {/* 🆕 退款类型 = 其他 → 自定义输入 */}
                {refundType === 'other' && (
                  <div style={{marginTop:8, padding:10, background:'#fef9c3', border:'1px solid #fde68a', borderRadius:8}}>
                    <label style={{fontSize:11, fontWeight:600, color:'#854d0e', display:'block', marginBottom:4}}>💡 请说明具体退款类型 *</label>
                    <input value={refundTypeCustom} onChange={e => setRefundTypeCustom(e.target.value)}
                      placeholder="例如：账单争议、客户改主意、地址错误..."
                      style={{width:'100%', padding:'6px 10px', border:'1px solid #fcd34d', borderRadius:6, fontSize:13, background:'white'}} />
                  </div>
                )}
              </div>
              <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, marginBottom:14}}>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>退款金额 *</label>
                  <div style={{display:'flex', gap:4}}>
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} 
                      step="0.01" placeholder="88.00"
                      style={{flex:1, padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13}} />
                    <select value={currency} onChange={e => setCurrency(e.target.value)}
                      style={{padding:'6px 8px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white', width:75}}>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="CAD">CAD</option>
                      <option value="AUD">AUD</option>
                      <option value="CNY">CNY</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>支付方式 *</label>
                  <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}
                    style={{width:'100%', padding:'6px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, background:'white'}}>
                    {REFUND_PAYMENT_METHODS.map(p => <option key={p.key} value={p.key}>{p.label}</option>)}
                  </select>
                </div>
              </div>
              {/* 🆕 支付方式 = 其他 → 自定义输入 */}
              {paymentMethod === 'other' && (
                <div style={{marginBottom:14, padding:10, background:'#fef9c3', border:'1px solid #fde68a', borderRadius:8}}>
                  <label style={{fontSize:11, fontWeight:600, color:'#854d0e', display:'block', marginBottom:4}}>💡 请说明具体支付方式 *</label>
                  <input value={paymentMethodCustom} onChange={e => setPaymentMethodCustom(e.target.value)}
                    placeholder="例如：银行转账、Klarna、Affirm、Apple Pay..."
                    style={{width:'100%', padding:'6px 10px', border:'1px solid #fcd34d', borderRadius:6, fontSize:13, background:'white'}} />
                </div>
              )}
              <div style={{marginBottom:14}}>
                <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>产品名 <span style={{fontWeight:400, color:'var(--ink-3)'}}>(输入联想产品主表)</span></label>
                <ProductAutocomplete value={productName} onChange={setProductName}
                  onSelect={prod => setProductName(prod.name || '')}
                  products={productsList} mode="name" placeholder="Marie Petite Surface Ceiling Lamp" />
              </div>
              <div style={{marginBottom:14}}>
                <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>退款原因详情 *</label>
                <textarea value={refundReason} onChange={e => setRefundReason(e.target.value)} 
                  placeholder="Marie Petite Surface Ceiling Lamp颜色太黄了，对质量也不满，退50% 88USD给客户"
                  style={{width:'100%', minHeight:70, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical'}} />
              </div>
              <div style={{padding:10, background:'#fff7ed', border:'1px solid #fdba74', borderRadius:6, fontSize:11, color:'#9a3412', marginBottom:14}}>
                💡 创建后状态为「待审核」 · 财务/admin 角色会在「💰 退款管理」面板看到此单 · 审核通过后操作 Shopify/Stripe 实际退款，再回来标记为「已完成」
              </div>
            </>
          )}
          
          {/* 共用：供应商 */}
          <div style={{marginBottom:14}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>
              供应商 {suppliers.length > 0 && <span style={{color:'var(--ink-4)', fontWeight:400}}>（共 {suppliers.length} 家可选）</span>}
            </label>
            <SupplierSelect suppliers={suppliers} value={supplierId} onChange={setSupplierId} />
          </div>
          
          {/* 共用：图片附件 */}
          <div style={{marginBottom:14}}>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:6}}>
              图片附件 {attachments.length > 0 && <span style={{color:'var(--accent)', fontWeight:600}}>({attachments.length})</span>}
            </label>
            <MultiImageUploader 
              attachments={attachments} 
              setAttachments={setAttachments}
              defaultLabel={kind === 'refund' ? 'damage' : (kind === 'aftersale' ? 'damage' : 'product')} />
          </div>
          
          {/* 共用：备注 */}
          <div>
            <label style={{fontSize:11, fontWeight:600, color:'var(--ink-2)', display:'block', marginBottom:4}}>备注</label>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} 
              placeholder="补充信息..."
              style={{width:'100%', minHeight:50, padding:'8px 10px', border:'1px solid var(--line)', borderRadius:6, fontSize:13, fontFamily:'inherit', resize:'vertical'}} />
          </div>
        </div>
        
        {/* Footer */}
        <div style={{padding:'14px 22px', borderTop:'1px solid var(--line)', display:'flex', justifyContent:'flex-end', gap:8, flexShrink:0}}>
          <button onClick={onClose} className="btn-sec" style={{padding:'8px 18px'}}>取消</button>
          <button onClick={handleSubmit} disabled={saving}
            style={{padding:'8px 22px', background: titleInfo.color, color:'white', border:'none', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13, opacity: saving ? 0.6 : 1}}>
            {saving ? '保存中...' : (isEdit ? '✓ 更新' : '✓ 保存事件')}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};


// ============================================================
// 批量转交工作 Modal — 主管选源员工 + 多选记录 + 选目标员工
// ============================================================
const BatchTransferModal = ({ employees, records, user, fromUserId, setFromUserId, onClose, onTransfer }) => {
  const [selectedIds, setSelectedIds] = useState(new Set());
  const [filterSite, setFilterSite] = useState('');
  const [targetUserId, setTargetUserId] = useState('');
  
  // 候选源员工列表
  const candidateEmployees = employees.filter(e => e.role !== 'finance');
  
  // 当前选中员工的活跃工作
  const sourceRecords = useMemo(() => {
    if (!fromUserId) return [];
    return records.filter(r => 
      r.ownerId === fromUserId && !r.deleted && r.status !== 'resolved'
    ).sort((a, b) => {
      const aDate = a.nextFollowUp || '9999';
      const bDate = b.nextFollowUp || '9999';
      return aDate.localeCompare(bDate);
    });
  }, [records, fromUserId]);
  
  // 按 site 分组
  const sites = useMemo(() => [...new Set(sourceRecords.map(r => r.site).filter(Boolean))].sort(), [sourceRecords]);
  
  const filteredRecords = useMemo(() => {
    if (!filterSite) return sourceRecords;
    return sourceRecords.filter(r => r.site === filterSite);
  }, [sourceRecords, filterSite]);
  
  const toggleSelect = (id) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  
  const toggleAll = () => {
    if (selectedIds.size === filteredRecords.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredRecords.map(r => r.id)));
    }
  };
  
  // 按网站一键全选
  const selectBySite = (site) => {
    const ids = sourceRecords.filter(r => r.site === site).map(r => r.id);
    setSelectedIds(new Set(ids));
  };
  
  const handleSubmit = () => {
    if (!targetUserId) { alert('请选择目标员工'); return; }
    if (selectedIds.size === 0) { alert('请勾选要转交的记录'); return; }
    if (!confirm(`确认将 ${selectedIds.size} 单工作转交给 ${employees.find(e => e.id === targetUserId)?.name}？`)) return;
    onTransfer([...selectedIds], targetUserId);
  };
  
  const today = todayISO();
  
  return (
    <div onClick={onClose}
      style={{position:'fixed', inset:0, background:'rgba(0,0,0,.5)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center', padding:20}}>
      <div onClick={e => e.stopPropagation()}
        style={{background:'white', borderRadius:'var(--radius-lg)', maxWidth:900, width:'100%', maxHeight:'90vh', display:'flex', flexDirection:'column', overflow:'hidden'}}>
        {/* 头部 */}
        <div style={{padding:'18px 24px', borderBottom:'1px solid var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>
            <div className="font-display" style={{fontSize:18, fontWeight:600, letterSpacing:'-.022em'}}>🔄 批量转交工作</div>
            <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>
              选择源员工 → 勾选要转的工作（可按网站筛选）→ 选目标员工 → 一键转交
            </div>
          </div>
          <button className="btn-sec" onClick={onClose} style={{padding:'4px 12px'}}>×</button>
        </div>
        
        {/* Step 1: 选源员工 */}
        <div style={{padding:'14px 24px', borderBottom:'1px solid var(--line)', background:'var(--bg-soft)'}}>
          <div style={{fontSize:12, fontWeight:600, color:'var(--ink-3)', marginBottom:8}}>
            Step 1 · 选择源员工（要转出工作的人）
          </div>
          <div style={{display:'flex', flexWrap:'wrap', gap:6}}>
            {candidateEmployees.map(emp => {
              const workload = records.filter(r => r.ownerId === emp.id && !r.deleted && r.status !== 'resolved').length;
              const isSelected = fromUserId === emp.id;
              return (
                <button key={emp.id}
                  onClick={() => { setFromUserId(emp.id); setSelectedIds(new Set()); setFilterSite(''); }}
                  style={{
                    padding:'6px 12px', borderRadius:8,
                    border: '1px solid ' + (isSelected ? 'var(--accent)' : 'var(--line)'),
                    background: isSelected ? 'var(--accent-soft)' : 'white',
                    color: isSelected ? 'var(--accent)' : 'var(--ink-2)',
                    cursor:'pointer', fontSize:12, fontFamily:'inherit',
                    fontWeight: isSelected ? 600 : 400,
                  }}>
                  {emp.name}{emp.alias ? ' ' + emp.alias : ''}
                  <span style={{marginLeft:6, color: workload > 8 ? 'var(--bad)' : 'var(--ink-4)', fontSize:10}}>
                    {workload}单
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        
        {/* Step 2: 勾选工作（按网站筛选） */}
        {fromUserId && (
          <>
            <div style={{padding:'14px 24px', borderBottom:'1px solid var(--line)'}}>
              <div style={{fontSize:12, fontWeight:600, color:'var(--ink-3)', marginBottom:8}}>
                Step 2 · 勾选要转的工作（共 {sourceRecords.length} 单）
              </div>
              {sites.length > 0 && (
                <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'wrap', marginBottom:8}}>
                  <span style={{fontSize:11, color:'var(--ink-3)'}}>按网站筛选：</span>
                  <button onClick={() => setFilterSite('')}
                    style={{padding:'3px 8px', borderRadius:6, border:'1px solid ' + (filterSite === '' ? 'var(--accent)' : 'var(--line)'), background: filterSite === '' ? 'var(--accent-soft)' : 'white', color:'var(--ink-2)', fontSize:11, cursor:'pointer'}}>
                    全部 ({sourceRecords.length})
                  </button>
                  {sites.map(s => {
                    const n = sourceRecords.filter(r => r.site === s).length;
                    return (
                      <button key={s} onClick={() => setFilterSite(s)}
                        style={{padding:'3px 8px', borderRadius:6, border:'1px solid ' + (filterSite === s ? 'var(--accent)' : 'var(--line)'), background: filterSite === s ? 'var(--accent-soft)' : 'white', color:'var(--ink-2)', fontSize:11, cursor:'pointer'}}>
                        {s} ({n})
                        <span onClick={(e) => { e.stopPropagation(); selectBySite(s); }}
                          style={{marginLeft:6, padding:'1px 5px', borderRadius:4, background:'var(--gold)', color:'white', fontSize:9, fontWeight:600}}
                          title="一键选中这个网站的所有">
                          全选
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
              <div style={{display:'flex', alignItems:'center', gap:8}}>
                <button onClick={toggleAll} style={{padding:'4px 10px', borderRadius:6, border:'1px solid var(--line)', background:'white', color:'var(--ink-2)', fontSize:11, cursor:'pointer'}}>
                  {selectedIds.size === filteredRecords.length && filteredRecords.length > 0 ? '☑ 取消全选' : '☐ 全选当前列表'}
                </button>
                <span style={{fontSize:12, color:'var(--accent)', fontWeight:600}}>
                  已选 {selectedIds.size} 单
                </span>
              </div>
            </div>
            
            {/* 工作列表 */}
            <div style={{flex:1, overflow:'auto', maxHeight:350}}>
              {filteredRecords.length === 0 ? (
                <div style={{textAlign:'center', padding:'40px', color:'var(--ink-4)', fontSize:13}}>
                  {sourceRecords.length === 0 ? '该员工没有未完成的工作' : '该网站下没有工作'}
                </div>
              ) : (
                filteredRecords.map(r => {
                  const checked = selectedIds.has(r.id);
                  const isOverdue = r.nextFollowUp && r.nextFollowUp < today;
                  return (
                    <label key={r.id} onClick={() => toggleSelect(r.id)}
                      style={{display:'flex', alignItems:'center', gap:10, padding:'10px 24px', borderBottom:'1px solid var(--line)', cursor:'pointer', background: checked ? 'var(--accent-soft)' : 'white', fontSize:13}}>
                      <input type="checkbox" checked={checked} readOnly style={{cursor:'pointer', accentColor:'var(--accent)'}} />
                      <div style={{flex:1, minWidth:0}}>
                        <div style={{display:'flex', alignItems:'center', gap:8, flexWrap:'wrap'}}>
                          <span style={{fontWeight:600}}>{r.orderRef || r.customer || '(无订单号)'}</span>
                          {r.customer && r.orderRef && <span style={{color:'var(--ink-3)', fontSize:11}}>· {r.customer}</span>}
                          {r.site && <span className="tag" style={{fontSize:10, padding:'1px 6px'}}>{r.site}</span>}
                          {isOverdue && <span style={{color:'var(--bad)', fontSize:11, fontWeight:600}}>逾期</span>}
                        </div>
                        {r.note && <div style={{color:'var(--ink-3)', fontSize:11, marginTop:2, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>💬 {r.note}</div>}
                      </div>
                      <div style={{fontSize:11, color:'var(--ink-3)', flexShrink:0}}>
                        下次跟进：{r.nextFollowUp || '未设'}
                      </div>
                    </label>
                  );
                })
              )}
            </div>
          </>
        )}
        
        {/* Step 3: 选目标员工 + 提交 */}
        {fromUserId && selectedIds.size > 0 && (
          <div style={{padding:'14px 24px', borderTop:'1px solid var(--line)', background:'var(--bg-soft)'}}>
            <div style={{fontSize:12, fontWeight:600, color:'var(--ink-3)', marginBottom:8}}>
              Step 3 · 选目标员工
            </div>
            <div style={{display:'flex', flexWrap:'wrap', gap:6, marginBottom:12}}>
              {candidateEmployees.filter(e => e.id !== fromUserId).map(emp => {
                const workload = records.filter(r => r.ownerId === emp.id && !r.deleted && r.status !== 'resolved').length;
                const isSelected = targetUserId === emp.id;
                return (
                  <button key={emp.id}
                    onClick={() => setTargetUserId(emp.id)}
                    style={{
                      padding:'6px 12px', borderRadius:8,
                      border: '1px solid ' + (isSelected ? 'var(--accent)' : 'var(--line)'),
                      background: isSelected ? 'var(--accent-soft)' : 'white',
                      color: isSelected ? 'var(--accent)' : 'var(--ink-2)',
                      cursor:'pointer', fontSize:12, fontFamily:'inherit',
                      fontWeight: isSelected ? 600 : 400,
                    }}>
                    {emp.name}{emp.alias ? ' ' + emp.alias : ''}
                    <span style={{marginLeft:6, color: workload > 8 ? 'var(--bad)' : 'var(--ink-4)', fontSize:10}}>
                      {workload}单
                    </span>
                  </button>
                );
              })}
            </div>
            <button className="btn-pri" onClick={handleSubmit} disabled={!targetUserId}
              style={{width:'100%', padding:'10px', fontSize:14, fontWeight:600, opacity: targetUserId ? 1 : 0.5}}>
              ✓ 把 {selectedIds.size} 单从 {employees.find(e => e.id === fromUserId)?.name} 转交给 {targetUserId ? employees.find(e => e.id === targetUserId)?.name : '...'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const FollowUpModal = ({ record, onClose, onUpdate, toast, user, employees, cloudOn, readonly = false, recordEvents = null, onAddEvent, onEditEvent }) => {
  const [escalateModal, setEscalateModal] = useState(false);
  const [escalateReason, setEscalateReason] = useState('');
  const [escalateUrgency, setEscalateUrgency] = useState('high');
  // 🆕 fix7: 升级层级 — 'admin'(给主管) / 'boss'(给老板)
  const [escalateLevel, setEscalateLevel] = useState('admin');
  
  const isAdmin = user && (user.role === 'admin' || user.role === 'super_admin');
  const isSuperAdmin = user && user.role === 'super_admin';
  // 🆕 fix7: 当前用户能升级到的层级 — staff/finance → 主管;admin → 老板;super_admin → 不能升级(已在顶)
  // 已升级到主管的也允许 admin 再升级到老板
  const canEscalateToAdmin = !isAdmin;  // staff / finance
  const canEscalateToBoss = user && user.role === 'admin';  // admin 可升老板
  const canEscalate = canEscalateToAdmin || canEscalateToBoss;
  
  // 一键升级 → 自动建工单到 workspace_tickets
  const submitEscalate = async () => {
    if (!escalateReason.trim()) { alert('请填写需要主管协助的原因'); return; }
    const targetRole = escalateLevel === 'boss' ? 'super_admin' : 'admin';
    const candidates = (employees || []).filter(e => e.role === targetRole && !e.hideFromList);
    // 兜底: 找不到 visible 的就找任意
    const allCandidates = candidates.length > 0 ? candidates : (employees || []).filter(e => e.role === targetRole);
    if (allCandidates.length === 0) { 
      alert(`没有找到${escalateLevel === 'boss' ? '老板(super_admin)' : '主管(admin)'}账号`); 
      return; 
    }
    const targetUser = allCandidates[0];
    const levelLabel = escalateLevel === 'boss' ? '老板' : '主管';
    const ticket = {
      id: uid(),
      title: `🚨 ${escalateLevel === 'boss' ? '主管' : '客服'}升级到${levelLabel} · ${record.customer || record.orderRef || '(无标题)'}`,
      content: `客户：${record.customer || '-'}\n订单：${record.orderRef || '-'}\n网站：${record.site || '-'}\n咨询事项：${record.category || '-'}\n升级层级：${levelLabel}\n\n【需要${levelLabel}协助的原因】\n${escalateReason}\n\n【已跟进备注】\n${record.note || '(无)'}\n\n${record.escalateReason ? `【之前的升级历史】\n${record.escalateReason}\n\n` : ''}点跟进记录 ID：${record.id}`,
      priority: escalateUrgency,
      department: 'service',
      from_id: user.id,
      from_name: user.name + (user.alias ? ' ' + user.alias : ''),
      target_id: targetUser.id,
      target_name: targetUser.name + (targetUser.alias ? ' ' + targetUser.alias : ''),
      status: 'pending',
      record_ref: record.id,
      created_at: nowISO(),
      updated_at: nowISO(),
    };
    try {
      if (cloudOn && CLOUD.client) {
        const { error } = await CLOUD.client.from('workspace_tickets').upsert(ticket);
        if (error) throw error;
      } else {
        const local = STORE.get('tickets_local', []);
        STORE.set('tickets_local', [ticket, ...local]);
      }
      // 同时把记录状态改为 escalated（透过 status 字段不能用，加 escalated 字段）
      // 保留之前的升级历史
      const prevHistory = record.escalateReason ? `${record.escalateReason}\n\n---\n` : '';
      onUpdate({ 
        escalated: true, 
        escalatedAt: nowISO(), 
        escalateReason: `${prevHistory}[升级到${levelLabel} · ${escalateUrgency}] ${escalateReason}`,
        escalateLevel: escalateLevel,  // 'admin' or 'boss'
      });
      toast(`✓ 已升级给${levelLabel} ${targetUser.name}，请等待处理`);
      setEscalateModal(false);
      setEscalateReason('');
    } catch (e) {
      alert(`❌ 升级失败：${e.message}`);
    }
  };
  const [newFollowText, setNewFollowText] = useState('');
  const [newFollowStatus, setNewFollowStatus] = useState(record.status);
  const fileInputRef = useRef(null);
  const dropZoneRef = useRef(null);

  // 粘贴图片（只读模式下禁用）
  useEffect(() => {
    if (readonly) return;
    const handlePaste = (e) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (const it of items) {
        if (it.type.indexOf('image') === 0) {
          const file = it.getAsFile();
          handleFile(file);
          e.preventDefault();
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [record, readonly]);

  const handleFile = (file) => {
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) {
      toast('⚠ 图片过大 (>3MB)，请压缩后再上传');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const screenshots = [...(record.screenshots || []), {
        id: uid(),
        data: e.target.result,
        name: file.name || 'screenshot.png',
        time: nowISO(),
      }];
      onUpdate({ screenshots });
      toast('✓ 截图已添加');
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    dropZoneRef.current?.classList.remove('dragover');
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) handleFile(file);
  };

  const removeScreenshot = (sid) => {
    const screenshots = (record.screenshots || []).filter(s => s.id !== sid);
    onUpdate({ screenshots });
  };

  const addFollowUp = () => {
    if (!newFollowText.trim()) return;
    const followUps = [...(record.followUps || []), {
      id: uid(),
      time: nowISO(),
      text: newFollowText.trim(),
      status: newFollowStatus,
    }];
    onUpdate({ followUps, status: newFollowStatus });
    setNewFollowText('');
    toast('✓ 跟进记录已保存');
  };

  const [viewingImg, setViewingImg] = useState(null);

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card paper p-6 w-full" style={{maxWidth:'780px'}} onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-bold">跟进 & 截图</span>
              {readonly && <span className="tag" style={{background:'rgba(168,168,160,0.18)', color:'var(--ink-3)', fontSize:'10px'}}>🔒 历史只读</span>}
              {record.escalated && <span className="tag" style={{background:'#fef2f2', color:'#dc2626', fontSize:'10px', border:'1px solid #fca5a5'}}>🚨 已升级</span>}
            </div>
            <div className="text-xs font-mono mt-0.5" style={{color:'var(--ink-3)'}}>
              {record.customer || '未填客户'} · {record.category || '未选事项'} · {record.date}
            </div>
          </div>
          <div style={{display:'flex', gap:8, alignItems:'center', flexWrap:'wrap'}}>
            {/* 🆕 fix7: 升级按钮根据角色显示 — staff/finance 升级主管,admin 升级老板,super_admin 不显示 */}
            {!readonly && canEscalateToAdmin && (
              <button onClick={() => { setEscalateLevel('admin'); setEscalateModal(true); }}
                title="把这封棘手邮件交给主管处理"
                style={{padding:'6px 14px', background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:8, cursor:'pointer', fontSize:13, fontWeight:600, fontFamily:'inherit'}}
                onMouseEnter={e => { e.currentTarget.style.background = '#dc2626'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fef2f2'; e.currentTarget.style.color = '#dc2626'; }}>
                🚨 {record.escalated ? '再次升级主管' : '升级主管'}
              </button>
            )}
            {!readonly && canEscalateToBoss && (
              <button onClick={() => { setEscalateLevel('boss'); setEscalateModal(true); }}
                title="主管也搞不定?交给老板"
                style={{padding:'6px 14px', background:'#fef3c7', color:'#92400e', border:'1px solid #fcd34d', borderRadius:8, cursor:'pointer', fontSize:13, fontWeight:600, fontFamily:'inherit'}}
                onMouseEnter={e => { e.currentTarget.style.background = '#92400e'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fef3c7'; e.currentTarget.style.color = '#92400e'; }}>
                👑 {record.escalateLevel === 'boss' ? '再次升级老板' : '升级老板'}
              </button>
            )}
            <button className="btn-ghost" onClick={onClose}>
              <Icon name="x" className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* 升级历史显示 */}
        {record.escalated && record.escalateReason && (
          <div style={{padding:12, background:'#fef2f2', border:'1px solid #fca5a5', borderRadius:8, marginBottom:14}}>
            <div style={{fontSize:12, fontWeight:600, color:'#991b1b', marginBottom:4}}>
              🚨 已在 {record.escalatedAt?.slice(0,16).replace('T',' ')} 升级给主管
            </div>
            <div style={{fontSize:12, color:'#7f1d1d', whiteSpace:'pre-wrap'}}>{record.escalateReason}</div>
          </div>
        )}
        
        {/* 🆕 工作事件区 (售后/补件/退款 + 拒付/定制/实拍) */}
        {recordEvents && onAddEvent && (
          <div style={{padding:14, background:'#f8fafc', border:'1px solid var(--line)', borderRadius:10, marginBottom:14}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10, flexWrap:'wrap', gap:8}}>
              <div style={{fontSize:13, fontWeight:600, color:'var(--ink)'}}>
                📋 关联工作事件 ({recordEvents.aftersales.length + recordEvents.refills.length + recordEvents.refunds.length})
              </div>
              <div style={{fontSize:11, color:'var(--ink-3)'}}>点下方任一按钮快速添加</div>
            </div>
            
            {!readonly && (
              <div style={{display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:6, marginBottom:10}}>
                <button onClick={() => onAddEvent('aftersale')}
                  style={{padding:'10px 0', background:'#fff7ed', color:'#ea580c', border:'1px solid #fdba74', borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit', display:'flex', flexDirection:'column', alignItems:'center', gap:3, transition:'all .15s'}}
                  onMouseEnter={e => { e.currentTarget.style.background = '#ea580c'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#fff7ed'; e.currentTarget.style.color = '#ea580c'; }}>
                  <span style={{fontSize:18}}>🔧</span>
                  <span>售后</span>
                </button>
                <button onClick={() => onAddEvent('refill')}
                  style={{padding:'10px 0', background:'#e0f2fe', color:'#0369a1', border:'1px solid #7dd3fc', borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit', display:'flex', flexDirection:'column', alignItems:'center', gap:3, transition:'all .15s'}}
                  onMouseEnter={e => { e.currentTarget.style.background = '#0369a1'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#e0f2fe'; e.currentTarget.style.color = '#0369a1'; }}>
                  <span style={{fontSize:18}}>📦</span>
                  <span>补件</span>
                </button>
                <button onClick={() => onAddEvent('refund')}
                  style={{padding:'10px 0', background:'#fef2f2', color:'#dc2626', border:'1px solid #fca5a5', borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:600, fontFamily:'inherit', display:'flex', flexDirection:'column', alignItems:'center', gap:3, transition:'all .15s'}}
                  onMouseEnter={e => { e.currentTarget.style.background = '#dc2626'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#fef2f2'; e.currentTarget.style.color = '#dc2626'; }}>
                  <span style={{fontSize:18}}>💰</span>
                  <span>退款</span>
                </button>
                <button onClick={() => onAddEvent('chargeback')}
                  style={{padding:'10px 0', background:'#fee2e2', color:'#991b1b', border:'1px solid #f87171', borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:700, fontFamily:'inherit', display:'flex', flexDirection:'column', alignItems:'center', gap:3, transition:'all .15s'}}
                  onMouseEnter={e => { e.currentTarget.style.background = '#991b1b'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#fee2e2'; e.currentTarget.style.color = '#991b1b'; }}>
                  <span style={{fontSize:18}}>🚨</span>
                  <span>拒付</span>
                </button>
                <button onClick={() => onAddEvent('custom')}
                  style={{padding:'10px 0', background:'#f5f3ff', color:'#7c3aed', border:'1px solid #c4b5fd', borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:700, fontFamily:'inherit', display:'flex', flexDirection:'column', alignItems:'center', gap:3, transition:'all .15s'}}
                  onMouseEnter={e => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#f5f3ff'; e.currentTarget.style.color = '#7c3aed'; }}>
                  <span style={{fontSize:18}}>🎨</span>
                  <span>定制</span>
                </button>
                <button onClick={() => onAddEvent('photo')}
                  style={{padding:'10px 0', background:'#fdf2f8', color:'#be185d', border:'1px solid #fbcfe8', borderRadius:8, cursor:'pointer', fontSize:12, fontWeight:700, fontFamily:'inherit', display:'flex', flexDirection:'column', alignItems:'center', gap:3, transition:'all .15s'}}
                  onMouseEnter={e => { e.currentTarget.style.background = '#be185d'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#fdf2f8'; e.currentTarget.style.color = '#be185d'; }}>
                  <span style={{fontSize:18}}>📸</span>
                  <span>实拍</span>
                </button>
              </div>
            )}
            
            {/* 已关联事件列表 */}
            {recordEvents.aftersales.length === 0 && recordEvents.refills.length === 0 && recordEvents.refunds.length === 0 ? (
              <div style={{fontSize:11, color:'var(--ink-3)', textAlign:'center', padding:'8px 0'}}>
                暂无事件 · 点上方按钮添加售后 / 补件 / 退款
              </div>
            ) : (
              <div style={{display:'flex', flexDirection:'column', gap:6}}>
                {recordEvents.aftersales.map(e => {
                  const issue = ISSUE_TYPES.find(i => i.key === e.issue_type);
                  const status = AFTERSALE_STATUSES.find(s => s.key === e.status);
                  return (
                    <div key={'a'+e.id} onClick={() => onEditEvent && onEditEvent('aftersale', e)}
                      style={{padding:'6px 10px', background:'#fff7ed', border:'1px solid #fdba74', borderRadius:6, fontSize:11, display:'flex', justifyContent:'space-between', alignItems:'center', gap:8, cursor:'pointer'}}>
                      <div style={{flex:1, minWidth:0}}>
                        <span style={{fontWeight:600, color:'#9a3412'}}>🔧 售后</span>
                        {issue && <span style={{marginLeft:6, color:'var(--ink-2)'}}>{issue.label}</span>}
                        {e.damaged_part && <span style={{marginLeft:6, color:'var(--ink-3)'}}>· {e.damaged_part}</span>}
                        {e.attachments && e.attachments.length > 0 && <span style={{marginLeft:6, color:'var(--ink-3)'}}>📷 {e.attachments.length}</span>}
                      </div>
                      {status && (
                        <span style={{padding:'1px 6px', borderRadius:4, fontSize:10, fontWeight:600, color:status.color, background:status.bg}}>
                          {status.label}
                        </span>
                      )}
                    </div>
                  );
                })}
                {recordEvents.refills.map(e => {
                  const status = REFILL_STATUSES.find(s => s.key === e.status);
                  const itemCount = (e.items || []).length;
                  return (
                    <div key={'rf'+e.id} onClick={() => onEditEvent && onEditEvent('refill', e)}
                      style={{padding:'6px 10px', background:'#e0f2fe', border:'1px solid #7dd3fc', borderRadius:6, fontSize:11, display:'flex', justifyContent:'space-between', alignItems:'center', gap:8, cursor:'pointer'}}>
                      <div style={{flex:1, minWidth:0}}>
                        <span style={{fontWeight:600, color:'#075985'}}>📦 补件</span>
                        <span style={{marginLeft:6, color:'var(--ink-2)'}}>{itemCount} 种配件</span>
                        {e.supplier_name && <span style={{marginLeft:6, color:'var(--ink-3)'}}>· {e.supplier_name}</span>}
                        {e.attachments && e.attachments.length > 0 && <span style={{marginLeft:6, color:'var(--ink-3)'}}>📷 {e.attachments.length}</span>}
                      </div>
                      {status && (
                        <span style={{padding:'1px 6px', borderRadius:4, fontSize:10, fontWeight:600, color:status.color, background:status.color + '15'}}>
                          {status.label}
                        </span>
                      )}
                    </div>
                  );
                })}
                {recordEvents.refunds.map(e => {
                  const type = REFUND_TYPES.find(t => t.key === e.refund_type);
                  const status = REFUND_STATUSES.find(s => s.key === e.status);
                  return (
                    <div key={'rd'+e.id} onClick={() => onEditEvent && onEditEvent('refund', e)}
                      style={{padding:'6px 10px', background:'#fef2f2', border:'1px solid #fca5a5', borderRadius:6, fontSize:11, display:'flex', justifyContent:'space-between', alignItems:'center', gap:8, cursor:'pointer'}}>
                      <div style={{flex:1, minWidth:0}}>
                        <span style={{fontWeight:600, color:'#991b1b'}}>💰 退款</span>
                        <span style={{marginLeft:6, color:'#dc2626', fontWeight:600}}>{e.currency} {parseFloat(e.amount).toFixed(2)}</span>
                        {type && <span style={{marginLeft:6, color:'var(--ink-2)'}}>· {type.label}</span>}
                        {e.attachments && e.attachments.length > 0 && <span style={{marginLeft:6, color:'var(--ink-3)'}}>📷 {e.attachments.length}</span>}
                      </div>
                      {status && (
                        <span style={{padding:'1px 6px', borderRadius:4, fontSize:10, fontWeight:600, color:status.color, background:status.bg}}>
                          {status.label}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
        
        {/* 升级弹窗 */}
        {escalateModal && (
          <div onClick={() => setEscalateModal(false)} 
            style={{position:'absolute', inset:0, background:'rgba(0,0,0,.4)', zIndex:10, display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'inherit'}}>
            <div onClick={e => e.stopPropagation()}
              style={{background:'white', borderRadius:12, padding:20, maxWidth:480, width:'90%', boxShadow:'0 12px 32px rgba(0,0,0,.2)'}}>
              <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:12}}>
                <span style={{fontSize:24}}>{escalateLevel === 'boss' ? '👑' : '🚨'}</span>
                <div>
                  <div style={{fontWeight:600, fontSize:16}}>升级给{escalateLevel === 'boss' ? '老板' : '主管'}</div>
                  <div style={{fontSize:11, color:'var(--ink-3)'}}>{escalateLevel === 'boss' ? '主管也无法解决,把问题交给老板' : '把这封棘手邮件交给主管协助处理'}</div>
                </div>
              </div>
              <div style={{fontSize:12, fontWeight:600, color:'var(--ink-2)', marginBottom:6}}>紧急程度</div>
              <div style={{display:'flex', gap:6, marginBottom:12}}>
                {[
                  { key:'normal', label:'一般', color:'#0ea5e9', bg:'#e0f2fe' },
                  { key:'high',   label:'紧急', color:'#ea580c', bg:'#fff7ed' },
                  { key:'urgent', label:'非常紧急', color:'#dc2626', bg:'#fef2f2' },
                ].map(opt => (
                  <button key={opt.key} onClick={() => setEscalateUrgency(opt.key)}
                    style={{
                      flex:1, padding:'8px', borderRadius:8, cursor:'pointer', fontFamily:'inherit',
                      border: '1px solid ' + (escalateUrgency === opt.key ? opt.color : 'var(--line)'),
                      background: escalateUrgency === opt.key ? opt.bg : 'white',
                      color: escalateUrgency === opt.key ? opt.color : 'var(--ink-3)',
                      fontWeight: escalateUrgency === opt.key ? 600 : 400,
                      fontSize: 12,
                    }}>
                    {opt.label}
                  </button>
                ))}
              </div>
              <div style={{fontSize:12, fontWeight:600, color:'var(--ink-2)', marginBottom:6}}>
                需要{escalateLevel === 'boss' ? '老板' : '主管'}协助的原因 <span style={{color:'#dc2626'}}>*</span>
              </div>
              <textarea value={escalateReason} onChange={e => setEscalateReason(e.target.value)}
                placeholder={escalateLevel === 'boss' 
                  ? '比如:客户坚持要求公司层面赔偿、媒体投诉风险、需要法律咨询、需要老板审批超额方案...'
                  : '比如：客户要求 100% 全款退款但订单已发出，超出我授权范围；或客户态度激烈要求投诉到老板...'}
                style={{width:'100%', minHeight:80, padding:8, border:'1px solid var(--line)', borderRadius:8, fontSize:13, fontFamily:'inherit', resize:'vertical', boxSizing:'border-box'}} />
              <div style={{fontSize:10, color:'var(--ink-4)', marginTop:6, marginBottom:12}}>
                💡 {escalateLevel === 'boss' ? '老板' : '主管'}会在「汇报工单」tab 看到这条升级单，附带这条跟进的完整上下文
              </div>
              <div style={{display:'flex', gap:8, justifyContent:'flex-end'}}>
                <button onClick={() => setEscalateModal(false)} className="btn-sec" style={{padding:'8px 16px'}}>取消</button>
                <button onClick={submitEscalate} disabled={!escalateReason.trim()}
                  style={{padding:'8px 20px', background: escalateLevel === 'boss' ? '#d97706' : '#dc2626', color:'white', border:'none', borderRadius:8, cursor:'pointer', fontFamily:'inherit', fontWeight:600, fontSize:13, opacity: escalateReason.trim() ? 1 : 0.5}}>
                  {escalateLevel === 'boss' ? '👑 确认升级老板' : '🚨 确认升级'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 截图区 */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Icon name="image" className="w-4 h-4" style={{color:'var(--accent)'}} />
              <span className="font-display text-sm font-bold">客户反馈截图 ({record.screenshots?.length || 0})</span>
            </div>
            {!readonly && (
              <span className="text-[10px] font-mono" style={{color:'var(--ink-4)'}}>
                支持: 粘贴 / 拖拽 / 点击上传
              </span>
            )}
          </div>
          {!readonly && (
            <div
              ref={dropZoneRef}
              className="dropzone"
              onClick={() => fileInputRef.current?.click()}
              onDragOver={e => { e.preventDefault(); dropZoneRef.current?.classList.add('dragover'); }}
              onDragLeave={() => dropZoneRef.current?.classList.remove('dragover')}
              onDrop={handleDrop}
            >
              <Icon name="upload" className="w-6 h-6 mx-auto mb-1" style={{color:'var(--ink-4)'}} />
              <div className="text-xs font-bold" style={{color:'var(--ink-2)'}}>点击上传 · 拖拽至此 · Ctrl+V 粘贴</div>
              <div className="text-[10px] mt-1" style={{color:'var(--ink-4)'}}>支持 PNG/JPG，单张 ≤3MB</div>
              <input ref={fileInputRef} type="file" accept="image/*" style={{display:'none'}} onChange={e => handleFile(e.target.files?.[0])} />
            </div>
          )}
          {readonly && (!record.screenshots || record.screenshots.length === 0) && (
            <div className="text-xs text-center py-4" style={{color:'var(--ink-4)'}}>无截图</div>
          )}
          {record.screenshots?.length > 0 && (
            <div className="mt-3 flex gap-2 flex-wrap">
              {record.screenshots.map(s => (
                <div key={s.id} className="relative group">
                  <img src={s.data} alt={s.name} className="thumb" onClick={() => setViewingImg(s.data)} />
                  {!readonly && (
                    <button onClick={() => removeScreenshot(s.id)}
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-xs font-bold flex items-center justify-center opacity-0 group-hover:opacity-100"
                      style={{background:'var(--bad)', border:'1.5px solid white'}}>
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 跟进时间线 */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="calendar" className="w-4 h-4" style={{color:'var(--accent)'}} />
            <span className="font-display text-sm font-bold">跟进时间线 ({record.followUps?.length || 0})</span>
          </div>
          {record.followUps?.length > 0 && (
            <div className="space-y-2 mb-3 max-h-60 overflow-y-auto scrollbar-thin">
              {record.followUps.map(f => (
                <div key={f.id} className="rounded-lg p-3 border" style={{borderColor:'var(--line)', background:'var(--bg)'}}>
                  <div className="flex items-center justify-between mb-1">
                    <span className={`tag tag-${f.status === 'resolved' ? 'good' : f.status === 'waiting' ? 'info' : 'warn'}`}>
                      {STATUSES.find(s => s.key === f.status)?.label || f.status}
                    </span>
                    <span className="text-[10px] font-mono" style={{color:'var(--ink-4)'}}>
                      {new Date(f.time).toLocaleString('zh-CN', {month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit'})}
                    </span>
                  </div>
                  <div className="text-xs leading-relaxed">{f.text}</div>
                </div>
              ))}
            </div>
          )}
          {!readonly && (
            <div className="rounded-lg p-3 border-2" style={{borderColor:'var(--accent-mid)', background:'var(--accent-soft)'}}>
              <div className="text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{color:'var(--accent)'}}>+ 添加新跟进</div>
              <textarea
                value={newFollowText}
                onChange={e => setNewFollowText(e.target.value)}
                placeholder="今天联系客户的进展，例: 已联系供应商等回复 / 客户提供了照片..."
                rows="2"
                style={{background:'white'}}
              />
              <div className="mt-2 flex items-center gap-2 flex-wrap">
                <select value={newFollowStatus} onChange={e => setNewFollowStatus(e.target.value)} style={{width:'auto', padding:'4px 8px', fontSize:'11px'}}>
                  {STATUSES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
                </select>
                <button className="btn-pri" onClick={addFollowUp} disabled={!newFollowText.trim()}>保存跟进</button>
              </div>
            </div>
          )}
        </div>

        {/* 下次跟进设置 */}
        <div className="pt-4 border-t flex items-center gap-3" style={{borderColor:'var(--line)'}}>
          <span className="text-xs font-bold" style={{color:'var(--ink-2)'}}>下次跟进日期:</span>
          <input disabled={readonly} type="date" value={record.nextFollowUp || ""} onChange={e => onUpdate({nextFollowUp:e.target.value})} style={{width:'160px'}} />
          {record.nextFollowUp && !readonly && (
            <button className="btn-ghost text-[11px]" onClick={() => onUpdate({nextFollowUp:''})}>清除</button>
          )}
          {readonly && <span className="text-[11px]" style={{color:'var(--ink-4)'}}>(只读)</span>}
        </div>

        {/* 大图预览 */}
        {viewingImg && (
          <div className="modal-backdrop" style={{zIndex:60}} onClick={() => setViewingImg(null)}>
            <img src={viewingImg} alt="" style={{maxWidth:'90vw', maxHeight:'90vh', borderRadius:'8px'}} />
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};


// ════════════════════════════════════════════════════════════════════
// 🆕 fix18: SiteDailyBreakdown — 邮件按 (员工 × 日期 × 网站) 三维统计
// 主管想知道每人每天回复了哪些网站的多少封邮件
// ════════════════════════════════════════════════════════════════════
const SiteDailyBreakdown = ({ scope, selectedEmpId, employees, live, today, last7Start, monthStart }) => {
  const [view, setView] = useState('7d');  // '7d' | 'month'
  const [showAll, setShowAll] = useState(false);
  
  const startDate = view === '7d' ? last7Start : monthStart;
  
  // 选定的员工列表
  const empList = useMemo(() => {
    if (scope === 'one' && selectedEmpId) return employees.filter(e => e.id === selectedEmpId);
    if (scope === 'me') {
      // 'me' 模式 - 只看当前用户; 但要让主管也能用此组件预览自己
      const me = employees.find(e => e.id === selectedEmpId) || employees[0];
      return me ? [me] : [];
    }
    // team — 只列有数据的员工
    return employees.filter(e => live.some(r => r.ownerId === e.id && r.date >= startDate));
  }, [scope, selectedEmpId, employees, live, startDate]);
  
  // 日期范围 - 按天展开
  const days = useMemo(() => {
    const arr = [];
    const start = new Date(startDate);
    const end = new Date(today);
    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      const iso = d.toISOString().slice(0, 10);
      arr.push({
        iso,
        label: view === '7d' ? iso.slice(5).replace('-', '/') : iso.slice(8),  // 月模式只显示日号节省空间
        weekday: ['日','一','二','三','四','五','六'][d.getDay()],
      });
    }
    return arr;
  }, [startDate, today, view]);
  
  // 每员工 × 每天 × 网站 聚合
  const grid = useMemo(() => {
    const m = {};
    empList.forEach(e => {
      m[e.id] = { emp: e, byDay: {}, sitesTotal: {}, total: 0 };
      days.forEach(d => { m[e.id].byDay[d.iso] = { total: 0, bySite: {} }; });
    });
    live.forEach(r => {
      if (!m[r.ownerId]) return;
      if (r.date < startDate || r.date > today) return;
      const cell = m[r.ownerId].byDay[r.date];
      if (!cell) return;
      const site = (r.site || '').trim() || '?';
      cell.total++;
      cell.bySite[site] = (cell.bySite[site] || 0) + 1;
      m[r.ownerId].sitesTotal[site] = (m[r.ownerId].sitesTotal[site] || 0) + 1;
      m[r.ownerId].total++;
    });
    return Object.values(m).sort((a, b) => b.total - a.total);
  }, [empList, days, live, startDate, today]);
  
  if (empList.length === 0) return null;
  
  // 计算热力图色彩 - 单格的颜色深浅取决于本天数量
  const maxPerCell = Math.max(...grid.flatMap(r => days.map(d => r.byDay[d.iso].total)), 1);
  const cellColor = (n) => {
    if (n === 0) return 'transparent';
    const intensity = Math.min(1, 0.15 + (n / maxPerCell) * 0.85);
    return `rgba(14, 165, 233, ${intensity})`;
  };
  
  // 站点 chip 颜色
  const siteColor = (site) => {
    const palette = ['#dbeafe', '#fce7f3', '#fef3c7', '#dcfce7', '#f3e8ff', '#fee2e2', '#e0f2fe', '#f0fdf4'];
    const hash = site.split('').reduce((s, c) => s + c.charCodeAt(0), 0);
    return palette[hash % palette.length];
  };
  
  const shownGrid = showAll ? grid : grid.slice(0, 8);
  
  return (
    <div className="paper rounded-2xl overflow-hidden">
      <div className="p-4 border-b" style={{borderColor:'var(--line)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:8}}>
        <div className="flex items-center gap-2">
          <span className="font-display text-sm font-bold">📊 邮件分布:员工 × 日期 × 网站</span>
          <span className="text-[10px]" style={{color:'var(--ink-3)'}}>颜色深浅=邮件数量 · 悬停看网站分布</span>
        </div>
        <div className="flex gap-1">
          {[
            {k:'7d', label:'近 7 天'},
            {k:'month', label:'本月'},
          ].map(t => {
            const sel = view === t.k;
            return (
              <button key={t.k} onClick={() => setView(t.k)}
                style={{padding:'4px 11px', fontSize:11, borderRadius:6, border:'1px solid '+(sel?'#0071e3':'var(--line)'), background: sel?'#0071e3':'white', color: sel?'white':'var(--ink-2)', cursor:'pointer', fontFamily:'inherit', fontWeight: sel?600:500}}>
                {t.label}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{overflowX:'auto', padding:'12px 14px'}}>
        <table style={{borderCollapse:'collapse', fontSize:11, minWidth:'100%'}}>
          <thead>
            <tr>
              <th style={{padding:'6px 8px', textAlign:'left', position:'sticky', left:0, background:'white', zIndex:2, fontWeight:600, color:'var(--ink-3)', minWidth:120, borderBottom:'1px solid var(--line)'}}>员工</th>
              <th style={{padding:'6px 8px', textAlign:'left', background:'white', fontWeight:600, color:'var(--ink-3)', minWidth:130, borderBottom:'1px solid var(--line)'}}>负责网站</th>
              {days.map(d => (
                <th key={d.iso} style={{padding:'6px 4px', textAlign:'center', fontWeight:600, color:'var(--ink-3)', whiteSpace:'nowrap', minWidth: view === '7d' ? 50 : 30, borderBottom:'1px solid var(--line)'}}>
                  <div>{d.label}</div>
                  <div style={{fontSize:9, color:'var(--ink-4)', fontWeight:400}}>周{d.weekday}</div>
                </th>
              ))}
              <th style={{padding:'6px 8px', textAlign:'right', fontWeight:700, color:'#0071e3', borderBottom:'1px solid var(--line)', minWidth:50}}>合计</th>
            </tr>
          </thead>
          <tbody>
            {shownGrid.map((row, idx) => {
              const sites = Object.entries(row.sitesTotal).sort((a, b) => b[1] - a[1]);
              return (
                <tr key={row.emp.id} style={{background: idx % 2 ? '#fafafa' : 'white'}}>
                  <td style={{padding:'8px 8px', position:'sticky', left:0, background: idx % 2 ? '#fafafa' : 'white', zIndex:1, borderBottom:'1px solid var(--line)'}}>
                    <div style={{fontWeight:600}}>{row.emp.name}</div>
                    {row.emp.alias && <div style={{fontSize:9, color:'var(--ink-3)'}}>{row.emp.alias}</div>}
                  </td>
                  <td style={{padding:'8px 8px', borderBottom:'1px solid var(--line)'}}>
                    <div style={{display:'flex', flexWrap:'wrap', gap:3}}>
                      {sites.slice(0, 4).map(([site, count]) => (
                        <span key={site} style={{padding:'1px 6px', background:siteColor(site), borderRadius:8, fontSize:9, fontWeight:600, color:'#1a1a17'}} title={`${site}: ${count} 封`}>
                          {site} {count}
                        </span>
                      ))}
                      {sites.length > 4 && <span style={{padding:'1px 5px', color:'var(--ink-3)', fontSize:9}}>+{sites.length - 4}</span>}
                    </div>
                  </td>
                  {days.map(d => {
                    const cell = row.byDay[d.iso];
                    const tip = cell.total === 0 ? '0 封' : 
                      Object.entries(cell.bySite).sort((a,b) => b[1]-a[1]).map(([s,c]) => `${s}: ${c}`).join(' · ');
                    return (
                      <td key={d.iso} style={{padding:'4px 4px', textAlign:'center', borderBottom:'1px solid var(--line)'}} title={`${d.iso} 周${d.weekday}\n${tip}`}>
                        <div style={{padding:'4px 0', borderRadius:4, background: cellColor(cell.total), fontWeight: cell.total > 0 ? 600 : 400, color: cell.total > maxPerCell * 0.6 ? 'white' : 'var(--ink)'}}>
                          {cell.total || '-'}
                        </div>
                      </td>
                    );
                  })}
                  <td style={{padding:'8px 8px', textAlign:'right', fontWeight:700, color:'#0071e3', borderBottom:'1px solid var(--line)'}}>{row.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {grid.length > 8 && (
          <div style={{textAlign:'center', marginTop:10}}>
            <button onClick={() => setShowAll(v => !v)} className="btn-sec" style={{padding:'4px 12px', fontSize:11}}>
              {showAll ? `收起 (显示前 8 名)` : `展开剩余 ${grid.length - 8} 人 ▼`}
            </button>
          </div>
        )}
      </div>
      {/* 🆕 fix52: 客户档案 360° Modal */}
      {customer360Email && (
        <Customer360Modal
          email={customer360Email}
          records={records}
          onClose={() => setCustomer360Email(null)}
        />
      )}
    </div>
  );
};

// ════════════════════════════════════════════════════════════════════
// 🆕 fix52: 客户档案 360° Modal
// 输入一个客户邮箱 → 跨模块查询:跟进 / 拒付 / 售后 / 评价 / 线下单
// 帮客服一眼看清这个客户在系统里的完整历史
// ════════════════════════════════════════════════════════════════════
const Customer360Modal = ({ email, records, onClose, onOpenRecord }) => {
  const [loading, setLoading] = useState(true);
  const [chargebacks, setChargebacks] = useState([]);
  const [events, setEvents] = useState([]);  // 售后 / 补发 / 退款
  const [reviews, setReviews] = useState([]);
  const [offlineOrders, setOfflineOrders] = useState([]);
  const [customInq, setCustomInq] = useState([]);
  
  const emailNorm = (email || '').trim().toLowerCase();
  
  // 同邮箱的跟进记录(从 props 取,已经在内存里)
  const myRecords = records.filter(r => (r.customer || '').trim().toLowerCase() === emailNorm);
  
  // 跨模块查询
  useEffect(() => {
    if (!emailNorm) return;
    let canceled = false;
    (async () => {
      setLoading(true);
      try {
        const queries = await Promise.allSettled([
          CLOUD.list('workspace_chargebacks', { limit: 200 }),
          CLOUD.list('workspace_events', { limit: 200 }),
          CLOUD.list('workspace_reviews', { limit: 200 }),
          CLOUD.list('workspace_offline_orders', { limit: 200 }),
          CLOUD.list('custom_inquiries', { limit: 100 }),
        ]);
        if (canceled) return;
        const [cb, ev, rv, oo, ci] = queries.map(q => q.status === 'fulfilled' && q.value ? q.value : []);
        const matchEmail = (x) => ((x.customer_email || x.customerEmail || '').trim().toLowerCase() === emailNorm);
        setChargebacks(cb.filter(matchEmail));
        setEvents(ev.filter(matchEmail));
        setReviews(rv.filter(matchEmail));
        setOfflineOrders(oo.filter(matchEmail));
        setCustomInq(ci.filter(matchEmail));
      } catch (e) {
        console.error('[Customer360] 查询失败', e);
      }
      setLoading(false);
    })();
    return () => { canceled = true; };
  }, [emailNorm]);
  
  const fmtDate = (d) => {
    if (!d) return '';
    const t = typeof d === 'number' ? d : new Date(d).getTime();
    if (!t) return '';
    return new Date(t).toLocaleDateString('zh-CN');
  };
  
  const totalCount = myRecords.length + chargebacks.length + events.length + reviews.length + offlineOrders.length + customInq.length;
  
  return ReactDOM.createPortal(
    <div onClick={e => { if (e.target === e.currentTarget) onClose(); }} style={{
      position:'fixed', inset:0, background:'rgba(0,0,0,.55)', zIndex:10000,
      display:'flex', alignItems:'center', justifyContent:'center', padding:20,
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background:'white', borderRadius:18, maxWidth:760, width:'100%', maxHeight:'90vh', overflow:'auto',
        padding:'24px 28px', boxShadow:'0 20px 60px rgba(0,0,0,.25)',
      }}>
        {/* Header */}
        <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:16}}>
          <div>
            <div style={{fontSize:11, fontWeight:600, color:'var(--ink-3)', letterSpacing:'.5px', textTransform:'uppercase', marginBottom:3}}>客户档案 360°</div>
            <div className="font-display" style={{fontSize:19, fontWeight:600, letterSpacing:'-.022em', wordBreak:'break-all'}}>
              📧 {email || '(未填邮箱)'}
            </div>
            <div style={{fontSize:12, color:'var(--ink-3)', marginTop:4}}>
              {loading ? '⏳ 跨模块查询中…' : `共 ${totalCount} 条历史记录`}
            </div>
          </div>
          <button onClick={onClose} style={{background:'none', border:'none', fontSize:22, cursor:'pointer', color:'var(--ink-3)'}}>✕</button>
        </div>
        
        {/* 5 个分区 */}
        <Section360
          icon="📞" title="客服跟进" count={myRecords.length} 
          items={myRecords.map(r => ({
            id: r.id,
            primary: `${r.site || ''} · ${(STATUSES.find(s => s.key === r.status) || {}).label || r.status}`,
            secondary: r.summary || r.followups?.[0]?.note || '',
            date: r.date || r.created_at,
            onClick: onOpenRecord ? () => { onOpenRecord(r.id); onClose(); } : null,
          }))}
        />
        
        <Section360
          icon="🚨" title="拒付/Dispute" count={chargebacks.length}
          items={chargebacks.map(c => ({
            id: c.id,
            primary: `订单 ${c.order_no} · ${c.currency || 'USD'} ${c.amount || 0}`,
            secondary: `${c.platform || ''} · ${c.status || ''}${c.reason_detail ? ' · ' + c.reason_detail.slice(0, 40) : ''}`,
            date: c.created_at,
          }))}
        />
        
        <Section360
          icon="📋" title="售后/补发/退款" count={events.length}
          items={events.map(e => ({
            id: e.id,
            primary: `${e.type || '事件'} · 订单 ${e.order_no || '?'}`,
            secondary: `${e.status || ''}${e.notes ? ' · ' + e.notes.slice(0, 40) : ''}`,
            date: e.created_at,
          }))}
        />
        
        <Section360
          icon="💳" title="线下单" count={offlineOrders.length}
          items={offlineOrders.map(o => ({
            id: o.id,
            primary: `${o.site || ''} · ${o.payment_method || ''} · ${o.currency || 'USD'} ${o.amount || 0}`,
            secondary: `订单 ${o.order_no || '?'} → ${o.ship_to_country || ''}`,
            date: o.created_at,
          }))}
        />
        
        <Section360
          icon="🎨" title="定制咨询" count={customInq.length}
          items={customInq.map(c => ({
            id: c.id,
            primary: c.requirement?.slice(0, 60) || '(无需求描述)',
            secondary: `${c.designer_name ? '设计:' + c.designer_name : ''} ${c.quote_no ? '· 报价 ' + c.quote_no : ''}`,
            date: c.created_at,
          }))}
        />
        
        <Section360
          icon="⭐" title="产品评价" count={reviews.length}
          items={reviews.map(r => ({
            id: r.id,
            primary: `${r.product_name || '未填产品'} · ${'⭐'.repeat(r.rating || 0)}`,
            secondary: (r.review_text || '').slice(0, 60),
            date: r.created_at,
          }))}
        />
        
        {totalCount === 0 && !loading && (
          <div style={{textAlign:'center', padding:'32px 20px', color:'var(--ink-3)', fontSize:13}}>
            没有找到这个邮箱的其他历史记录 — 是新客户
          </div>
        )}
        
        <div style={{borderTop:'1px solid var(--line)', marginTop:18, paddingTop:14, fontSize:11, color:'var(--ink-4)', lineHeight:1.6}}>
          💡 这个视图只展示**云端**的数据。如果你看到 "0 条" 但实际有历史,可能是云同步未启用或数据未同步。
        </div>
      </div>
    </div>,
    document.body
  );
};

// 一个分区(可折叠卡片样式)
const Section360 = ({ icon, title, count, items }) => {
  const [open, setOpen] = useState(count > 0);  // 有内容默认展开
  if (count === 0) {
    return (
      <div style={{padding:'8px 12px', marginBottom:6, background:'var(--bg-elevated)', borderRadius:8, fontSize:12, color:'var(--ink-4)', display:'flex', alignItems:'center', gap:8}}>
        <span>{icon}</span>
        <span style={{flex:1}}>{title}</span>
        <span>0</span>
      </div>
    );
  }
  return (
    <div style={{marginBottom:10, border:'1px solid var(--line)', borderRadius:10, overflow:'hidden'}}>
      <div onClick={() => setOpen(!open)} style={{
        padding:'10px 14px', background:'var(--bg-soft)', cursor:'pointer',
        display:'flex', alignItems:'center', gap:10, fontSize:13, fontWeight:600,
      }}>
        <span style={{fontSize:16}}>{icon}</span>
        <span style={{flex:1, color:'var(--ink)'}}>{title}</span>
        <span style={{
          padding:'2px 8px', borderRadius:'var(--radius-pill)',
          background:'var(--accent)', color:'white', fontSize:11, fontWeight:700,
        }}>{count}</span>
        <span style={{color:'var(--ink-3)', fontSize:12, transform: open ? 'rotate(180deg)' : 'none', transition:'transform .15s'}}>▼</span>
      </div>
      {open && (
        <div style={{borderTop:'1px solid var(--line)'}}>
          {items.map((it, i) => (
            <div key={it.id || i}
              onClick={it.onClick}
              style={{
                padding:'10px 14px', borderTop: i > 0 ? '1px solid var(--line-soft)' : 'none',
                cursor: it.onClick ? 'pointer' : 'default',
                transition:'background .15s',
              }}
              onMouseEnter={e => { if (it.onClick) e.currentTarget.style.background = 'var(--bg-elevated)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = ''; }}
            >
              <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:2}}>
                <div style={{flex:1, fontSize:13, color:'var(--ink)', fontWeight:500, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>
                  {it.primary}
                </div>
                {it.date && <div style={{fontSize:11, color:'var(--ink-4)', flexShrink:0}}>{new Date(it.date).toLocaleDateString('zh-CN')}</div>}
              </div>
              {it.secondary && (
                <div style={{fontSize:12, color:'var(--ink-3)', lineHeight:1.45, overflow:'hidden', textOverflow:'ellipsis', display:'-webkit-box', WebkitLineClamp:2, WebkitBoxOrient:'vertical'}}>
                  {it.secondary}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
