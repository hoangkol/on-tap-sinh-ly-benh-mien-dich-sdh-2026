/**
 * CỔNG ÔN TẬP SINH LÝ BỆNH – MIỄN DỊCH SĐH 2026 - ĐẠI HỌC Y DƯỢC TP.HCM (YDS)
 * Controller chính: 6 Bài (ĐC Miễn dịch học) • Atlas 19 Hình & Sơ đồ • 144 Câu KSA • Thi thử Có giờ
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'yds_slb_md_2026_progress';
  const THEME_KEY = 'yds_slb_md_theme';

  let ALL_LESSONS = [];
  let ALL_FIGURES = [];
  let FIGURES_BY_ID = {};

  const state = {
    view: 'overview',       // 'overview' | 'lesson' | 'atlas' | 'mock'
    currentLessonId: 1,
    activeTab: 'all',       // 'all' | 'theory' | 'atlas' | 'anim' | 'sim' | 'quiz'
    searchQuery: '',
    quizFilterLevel: 'ALL', // 'ALL' | '1' | '2' | '3'
    quizFilterKsa: 'ALL',   // 'ALL' | 'K' | 'S' | 'A'
    quizWrongOnly: false,
    atlasFilter: 'all',     // 'all' | 'svg' | 'photo' | 'b12' | 'b34' | 'b56'
    atlasSearch: '',
    theme: 'light',
    progress: {
      answers: {},          // { [lessonId]: { [qIdx]: selectedOptIdx } }
      completedLessons: {}  // { [lessonId]: { bestScore, total } }
    },
    mock: {
      phase: 'setup',       // 'setup' | 'running' | 'review'
      count: 40,
      scope: 'ALL',
      mode: 'real',         // 'real' | 'practice'
      questions: [],
      answers: {},          // { [idx]: optIdx }
      flagged: {},          // { [idx]: true }
      wrongOnly: false,
      secondsLeft: 0,
      paused: false,
      timerId: null
    }
  };

  /* ================= STORAGE & SHUFFLE HELPERS ================= */

  function loadStorage() {
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme === 'dark' || savedTheme === 'light') {
        state.theme = savedTheme;
      }
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          state.progress.answers = parsed.answers || {};
          state.progress.completedLessons = parsed.completedLessons || {};
        }
      }
    } catch (e) {
      updateStorageNote('⚠️ Trình duyệt chặn localStorage — kết quả chỉ giữ trong phiên hiện tại.');
    }
  }

  function saveStorage() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    } catch (e) {
      updateStorageNote('⚠️ Không thể ghi localStorage — tiến độ chỉ lưu tạm trên RAM.');
    }
  }

  function updateStorageNote(text) {
    const el = document.getElementById('storageStatusNote');
    if (el) el.textContent = text;
  }

  function applyTheme(theme) {
    state.theme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    try {
      localStorage.setItem(THEME_KEY, state.theme);
    } catch (e) {}
    const btn = document.getElementById('btnThemeToggle');
    if (btn) {
      btn.innerHTML = state.theme === 'dark'
        ? '☀️ <span class="hide-sm">Giao diện sáng</span>'
        : '🌙 <span class="hide-sm">Giao diện tối</span>';
    }
  }

  function toggleTheme() {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
  }

  // Hoán vị tất cả phương án một cách tất định (deterministic) để A/B/C/D chia đều ~25% mà không lệch đáp án đã lưu
  function permuteQuestionOptions(qObj, seed) {
    const opts = (qObj.options || []).map((text, idx) => ({
      text,
      isCorrect: idx === Number(qObj.answer || 0)
    }));
    const n = opts.length;
    if (n <= 1) return { ...qObj };
    let x = ((seed + 137) * 2654435761) >>> 0;
    for (let i = n - 1; i > 0; i--) {
      x = (x + 0x9e3779b9) >>> 0;
      let z = x;
      z = Math.imul(z ^ (z >>> 16), 0x85ebca6b) >>> 0;
      z = Math.imul(z ^ (z >>> 13), 0xc2b2ae35) >>> 0;
      z = (z ^ (z >>> 16)) >>> 0;
      const j = z % (i + 1);
      const tmp = opts[i];
      opts[i] = opts[j];
      opts[j] = tmp;
    }
    return {
      ...qObj,
      options: opts.map((o) => o.text),
      answer: opts.findIndex((o) => o.isCorrect)
    };
  }

  function buildData() {
    const rawLessons = [
      ...(window.LESSONS_PART1 || []),
      ...(window.LESSONS_PART2 || [])
    ];
    const extraMap = window.EXTRA_QUESTIONS || {};

    ALL_LESSONS = rawLessons.map((lesson) => {
      const ext = extraMap[lesson.id] || { baseTags: [], extra: [] };
      const taggedBase = (lesson.questions || []).map((q, idx) => {
        const tag = ext.baseTags[idx] || { level: 2, ksa: 'K', ksaLabel: 'K2: Hiểu' };
        return { ...q, level: tag.level, ksa: tag.ksa, ksaLabel: tag.ksaLabel };
      });
      const combined = [...taggedBase, ...(ext.extra || [])].map((q, qIdx) =>
        permuteQuestionOptions(q, lesson.id * 97 + qIdx * 13)
      );
      return {
        ...lesson,
        questions: combined
      };
    });

    ALL_FIGURES = window.IMMUNO_FIGURES || [];
    FIGURES_BY_ID = {};
    ALL_FIGURES.forEach((f) => {
      FIGURES_BY_ID[f.id] = f;
    });
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ================= DRAWER & NAVIGATION ================= */

  function openDrawer() {
    const sb = document.getElementById('sidebar');
    const bd = document.getElementById('sidebarBackdrop');
    if (sb) sb.classList.add('open');
    if (bd) bd.classList.add('visible');
    document.body.classList.add('drawer-open');
  }

  function closeDrawer() {
    const sb = document.getElementById('sidebar');
    const bd = document.getElementById('sidebarBackdrop');
    if (sb) sb.classList.remove('open');
    if (bd) bd.classList.remove('visible');
    document.body.classList.remove('drawer-open');
  }

  function updateMobileBarActive(view) {
    const ids = { overview: 'mbbOverview', atlas: 'mbbAtlas', mock: 'mbbMock' };
    Object.values(ids).forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.classList.remove('active');
    });
    if (ids[view]) {
      const target = document.getElementById(ids[view]);
      if (target) target.classList.add('active');
    }
  }

  function updateOverallProgress() {
    const total = ALL_LESSONS.length || 6;
    const done = Object.keys(state.progress.completedLessons).filter(
      (id) => state.progress.completedLessons[id] && state.progress.completedLessons[id].bestScore >= 18
    ).length;
    const pct = Math.round((done / total) * 100);
    const txt = document.getElementById('overallProgressText');
    const fill = document.getElementById('overallProgressFill');
    if (txt) txt.textContent = `${done} / ${total} bài (${pct}%)`;
    if (fill) fill.style.width = `${pct}%`;
  }

  function renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    if (!nav) return;
    const q = state.searchQuery.trim().toLowerCase();

    const groups = [];
    const groupMap = {};
    ALL_LESSONS.forEach((l) => {
      const matchText = `${l.title} ${l.shortTitle} ${l.summary} ${l.textbookRef}`.toLowerCase();
      if (q && !matchText.includes(q)) return;
      if (!groupMap[l.group]) {
        groupMap[l.group] = { name: l.group, items: [] };
        groups.push(groupMap[l.group]);
      }
      groupMap[l.group].items.push(l);
    });

    if (groups.length === 0) {
      nav.innerHTML = `<div style="padding:18px;font-size:13px;color:rgba(255,255,255,0.65);text-align:center;">Không tìm thấy bài học phù hợp "${escapeHtml(state.searchQuery)}".</div>`;
      return;
    }

    nav.innerHTML = groups.map((g) => `
      <div class="nav-group-title">${escapeHtml(g.name)}</div>
      ${g.items.map((l) => {
        const comp = state.progress.completedLessons[l.id];
        const ansCount = Object.keys(state.progress.answers[l.id] || {}).length;
        const isCompleted = comp && comp.bestScore >= 18;
        const isActive = state.view === 'lesson' && state.currentLessonId === l.id;
        const scoreBadge = comp
          ? `<span class="nav-score-badge">${comp.bestScore}/${l.questions.length}</span>`
          : (ansCount > 0 ? `<span class="nav-score-badge">${ansCount}/${l.questions.length}</span>` : '');
        return `
          <div class="nav-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" onclick="App.showLesson(${l.id}, 'all')">
            <span class="nav-num">${isCompleted ? '✓' : l.id}</span>
            <span class="nav-text">${escapeHtml(l.shortTitle)}</span>
            ${scoreBadge}
          </div>
        `;
      }).join('')}
    `).join('');
  }

  /* ================= ATLAS RENDERING & INTERACTION ================= */

  function renderFigureCard(fig, opts) {
    if (!fig) return '<div class="callout warning">Không tìm thấy dữ liệu hình ảnh.</div>';
    const isModal = Boolean(opts && opts.isModal);
    const uidBase = `${fig.id.replace(/[^a-zA-Z0-9]/g, '_')}_${isModal ? 'm' : 'c'}`;

    const headerActions = isModal ? '' : `
      <button type="button" class="btn btn-outline" style="padding:5px 10px;font-size:12px;" onclick="App.openFigureModal('${fig.id}')">
        🔍 Phóng to
      </button>`;

    let mediaHtml = '';

    if (fig.type === 'svg') {
      const svgUid = `${uidBase}_svg`;
      const legendsHtml = (fig.legends || []).map((lg) => `
        <div class="fig-legend-item"
          data-leg-uid="${svgUid}"
          data-leg-n="${lg.n}"
          onclick="App.focusPin('${svgUid}', ${lg.n})"
          onmouseenter="App.focusPin('${svgUid}', ${lg.n})">
          <span class="fig-legend-num">${lg.n}</span>
          <div><strong>${escapeHtml(lg.title)}:</strong> ${escapeHtml(lg.text)}</div>
        </div>
      `).join('');

      mediaHtml = `
        <div class="fig-toolbar">
          <strong style="font-size:12.5px;color:var(--accent);">Sơ đồ tái tạo theo sách giáo trình YDS</strong>
          <button type="button" class="btn btn-outline" id="pinbtn-${svgUid}" style="padding:4px 10px;font-size:11.5px;" onclick="App.toggleFigurePins('${svgUid}')">
            🙈 Ẩn ghim số
          </button>
        </div>
        <div class="fig-stage">
          <div class="fig-stage-inner" id="inner-${svgUid}">${fig.svg}</div>
        </div>
        ${legendsHtml ? `<div class="fig-legend-list">${legendsHtml}</div>` : ''}
      `;
    } else {
      mediaHtml = (fig.panels || []).map((panel, pIdx) => {
        const panelUid = `${uidBase}_p${pIdx}`;
        const pinsHtml = (panel.pins || []).map((pin) => `
          <button type="button"
            class="fig-pin"
            data-pin-uid="${panelUid}"
            data-pin-n="${pin.n}"
            style="left:${pin.x}%;top:${pin.y}%;"
            title="${escapeHtml(pin.label)}"
            onclick="App.focusPin('${panelUid}', ${pin.n})"
            onmouseenter="App.focusPin('${panelUid}', ${pin.n})">${pin.n}</button>
        `).join('');

        const legendList = (panel.pins || []).map((pin) => `
          <div class="fig-legend-item"
            data-leg-uid="${panelUid}"
            data-leg-n="${pin.n}"
            onclick="App.focusPin('${panelUid}', ${pin.n})"
            onmouseenter="App.focusPin('${panelUid}', ${pin.n})">
            <span class="fig-legend-num">${pin.n}</span>
            <div><strong>${escapeHtml(pin.label)}:</strong> ${escapeHtml(pin.desc)}</div>
          </div>
        `).join('');

        return `
          <div style="display:flex;flex-direction:column;gap:8px;padding-top:${pIdx > 0 ? '10px;border-top:1px dashed var(--border)' : '0'};">
            <div class="fig-toolbar">
              <strong style="font-size:13px;color:var(--accent);">${escapeHtml(panel.label)}</strong>
              <button type="button" class="btn btn-outline" id="pinbtn-${panelUid}" style="padding:4px 10px;font-size:11.5px;" onclick="App.toggleFigurePins('${panelUid}')">
                🙈 Ẩn ghim số
              </button>
            </div>
            <div class="fig-photo-wrap ${panel.darkBg ? 'dark-bg' : ''}" style="display:flex;justify-content:center;align-items:center;">
              <div class="fig-photo-inner" id="inner-${panelUid}" style="width:auto;max-width:100%;display:inline-block;position:relative;">
                <img src="${panel.src}" alt="${escapeHtml(panel.label)}" loading="lazy" style="width:auto;max-width:100%;height:auto;max-height:${isModal ? 500 : 370}px;display:block;margin:0;" />
                ${pinsHtml}
              </div>
            </div>
            <div class="fig-legend-list">${legendList}</div>
            <div class="fig-credit">
              <span>Nguồn đối chiếu: ${escapeHtml(panel.credit)}</span>
              ${panel.creditUrl ? `<a href="${panel.creditUrl}" target="_blank" rel="noopener noreferrer">Xem hồ sơ Wikimedia ↗</a>` : ''}
            </div>
          </div>
        `;
      }).join('');
    }

    return `
      <article class="fig-card" id="fig-${fig.id}">
        <div class="fig-card-head">
          <div>
            <div class="fig-badge-row" style="margin-bottom:6px;">
              <span class="fig-num-badge">${escapeHtml(fig.id)}</span>
              <span class="fig-type-badge ${fig.type}">${fig.type === 'svg' ? '📐 Sơ đồ Sách Tái tạo' : '🔬 Ảnh & Mô học Đối chiếu'}</span>
              <span class="tag-pill" style="background:var(--bg-main);color:var(--text-muted);border:1px solid var(--border);">${escapeHtml(fig.page)}</span>
            </div>
            <h3 class="fig-title">${escapeHtml(fig.title)}</h3>
          </div>
          ${headerActions}
        </div>
        <p style="font-size:13.2px;color:var(--text-muted);margin:0;">${escapeHtml(fig.caption)}</p>
        ${mediaHtml}
        ${fig.note ? `<div class="fig-note-box"><strong>💡 Ghi nhớ phòng thi:</strong> ${escapeHtml(fig.note)}</div>` : ''}
      </article>
    `;
  }

  function focusPin(panelUid, pinN) {
    document.querySelectorAll(`[data-pin-uid="${panelUid}"]`).forEach((el) => {
      el.classList.toggle('active', Number(el.getAttribute('data-pin-n')) === Number(pinN));
    });
    document.querySelectorAll(`[data-leg-uid="${panelUid}"]`).forEach((el) => {
      el.classList.toggle('active', Number(el.getAttribute('data-leg-n')) === Number(pinN));
    });
  }

  function toggleFigurePins(panelUid) {
    const inner = document.getElementById(`inner-${panelUid}`);
    const btn = document.getElementById(`pinbtn-${panelUid}`);
    if (!inner) return;
    const hidden = inner.classList.toggle('fig-pins-hidden');
    if (btn) {
      btn.innerHTML = hidden ? '👁️ Hiện ghim số' : '🙈 Ẩn ghim số';
    }
  }

  function openFigureModal(figId) {
    const fig = FIGURES_BY_ID[figId];
    const modal = document.getElementById('atlasModal');
    const titleEl = document.getElementById('atlasModalTitle');
    const bodyEl = document.getElementById('atlasModalBody');
    if (!fig || !modal || !bodyEl) return;
    if (titleEl) titleEl.textContent = `${fig.id} (${fig.page}) — ${fig.chapter}`;
    bodyEl.innerHTML = renderFigureCard(fig, { isModal: true });
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('drawer-open');
  }

  function closeAtlasModal() {
    const modal = document.getElementById('atlasModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    if (!document.getElementById('sidebar')?.classList.contains('open')) {
      document.body.classList.remove('drawer-open');
    }
  }

  /* ================= VIEW 1: OVERVIEW ================= */

  function stopBackgroundTimers() {
    if (window.ProcessAnimations) window.ProcessAnimations.stopAllTimers();
    if (state.mock.timerId) {
      clearInterval(state.mock.timerId);
      state.mock.timerId = null;
    }
  }

  function showOverview() {
    stopBackgroundTimers();
    state.view = 'overview';
    closeDrawer();
    updateMobileBarActive('overview');
    renderSidebar();

    const bc = document.getElementById('breadcrumb');
    if (bc) bc.textContent = 'Tổng quan Đề cương Sinh lý bệnh – Miễn dịch Sau đại học 2026 (KHYS – YDS)';

    const svgCount = ALL_FIGURES.filter((f) => f.type === 'svg').length;
    const photoPanelCount = ALL_FIGURES.reduce((acc, f) => acc + (f.panels ? f.panels.length : 0), 0);
    const totalQuestions = ALL_LESSONS.reduce((acc, l) => acc + l.questions.length, 0);

    const cardsHtml = ALL_LESSONS.map((l) => {
      const comp = state.progress.completedLessons[l.id];
      const figCount = (l.figureIds || []).length;
      const ansCount = Object.keys(state.progress.answers[l.id] || {}).length;
      return `
        <div class="topic-card">
          <div class="topic-card-top">
            <span class="tag-pill" style="background:var(--primary-light);color:var(--primary);">${escapeHtml(l.group)}</span>
            <span class="tag-pill" style="background:${comp ? 'var(--success-light)' : 'var(--bg-main)'};color:${comp ? 'var(--success)' : 'var(--text-muted)'};border:1px solid var(--border);">
              ${comp ? `✓ ${comp.bestScore}/${l.questions.length}` : `${ansCount}/${l.questions.length} câu`}
            </span>
          </div>
          <h3>${escapeHtml(l.title)}</h3>
          <p>${escapeHtml(l.summary)}</p>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px;font-size:12px;color:var(--text-light);">
            <span>📘 ${escapeHtml(l.textbookRef)}</span>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
            <button type="button" class="btn btn-primary" style="padding:8px 12px;font-size:12.8px;" onclick="App.showLesson(${l.id}, 'all')">📖 Học bài</button>
            <button type="button" class="btn btn-outline" style="padding:8px 12px;font-size:12.8px;" onclick="App.showLesson(${l.id}, 'atlas')">🖼️ Hình (${figCount})</button>
            <button type="button" class="btn btn-outline" style="padding:8px 12px;font-size:12.8px;" onclick="App.showLesson(${l.id}, 'quiz')">📝 ${l.questions.length} Câu</button>
          </div>
        </div>
      `;
    }).join('');

    document.getElementById('mainContent').innerHTML = `
      <div class="lesson-hero">
        <div class="lesson-hero-meta">
          <span class="tag-pill">ĐH Y Dược TP.HCM (YDS) • Tuyển sinh SĐH 2026</span>
          <span class="tag-pill">Cao học Khoa học Y sinh</span>
          <span class="tag-pill">6 Bài Chuyên sâu • ${ALL_FIGURES.length} Hình &amp; Sơ đồ • ${totalQuestions} Câu KSA</span>
        </div>
        <h1>Cổng Ôn Tập Tương Tác Môn Sinh Lý Bệnh – Miễn Dịch</h1>
        <p>Biên soạn bám sát 100% Đề cương Ôn thi Cao học KHYS 2026 (<em>Đại cương Miễn dịch học</em> — Giáo trình <em>Miễn Dịch Đại Cương</em> YDS 2025, tr. 1–19): tái tạo vector siêu nét toàn bộ <strong>${svgCount} hình trong giáo trình (Hình 1.1 → 1.9)</strong> kèm <strong>${photoPanelCount} hình ảnh mô học – giải phẫu – tế bào đối chiếu</strong> gắn ghim chú thích tương tác, 6 hoạt cảnh cơ chế động và 6 phòng Lab mô phỏng.</p>
        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:16px;">
          <button type="button" class="btn" style="background:#fff;color:var(--primary-dark);" onclick="App.showLesson(1, 'all')">▶ Bắt đầu từ Bài 1</button>
          <button type="button" class="btn" style="background:rgba(255,255,255,0.16);color:#fff;border:1px solid rgba(255,255,255,0.4);" onclick="App.showAtlas()">🖼️ Mở Atlas ${ALL_FIGURES.length} Hình chú thích</button>
          <button type="button" class="btn" style="background:rgba(15,23,42,0.38);color:#fff;border:1px solid rgba(255,255,255,0.3);" onclick="App.showMockExam()">🎯 Thi thử Tổng hợp Có giờ</button>
        </div>
      </div>

      <div class="card">
        <div class="card-title">📋 Bản đồ Đối chiếu Đề cương KHYS 2026 ↔ Giáo trình Miễn Dịch Đại Cương (tr. 1–19)</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Mục Giáo trình (Bài 1 • ThS.BS. Quách Thanh Lâm)</th>
                <th>Trang Sách</th>
                <th>Bài học trên Web</th>
                <th>Hình sách &amp; Hình đối chiếu</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Mục 1–3:</strong> Định nghĩa, Chức năng Hệ miễn dịch, Miễn dịch Bẩm sinh vs Thích nghi</td>
                <td>tr. 1–4</td>
                <td>Bài 1 (24 câu)</td>
                <td><code>Hình 1.1</code> + M1.1 Thực bào</td>
              </tr>
              <tr>
                <td><strong>Mục 4–5:</strong> Miễn dịch Tế bào vs Dịch thể; Chủ động vs Thụ động &amp; HBIG</td>
                <td>tr. 4–7</td>
                <td>Bài 2 (24 câu)</td>
                <td><code>Hình 1.2</code> + M1.2 Cấu trúc Ig &amp; M1.3 Tương bào</td>
              </tr>
              <tr>
                <td><strong>Mục 6:</strong> Đặc điểm Miễn dịch Thích nghi (Chọn lọc Clone, Trí nhớ, Dung nạp)</td>
                <td>tr. 7–10</td>
                <td>Bài 3 (24 câu)</td>
                <td><code>Hình 1.3</code>, <code>Hình 1.4</code></td>
              </tr>
              <tr>
                <td><strong>Mục 7–8:</strong> Quá trình Trưởng thành, Các dòng Lympho (CD) &amp; APC (DC / FDC)</td>
                <td>tr. 10–14</td>
                <td>Bài 4 (24 câu)</td>
                <td><code>Hình 1.5</code>, <code>Hình 1.6</code> + M1.4 DC, M1.5 T CD8+, M1.6 Tuyến ức</td>
              </tr>
              <tr>
                <td><strong>Mục 9–11:</strong> Cơ quan Miễn dịch, Tuần hoàn qua HEV &amp; 5 Pha Đáp ứng Thích nghi</td>
                <td>tr. 14–15</td>
                <td>Bài 5 (24 câu)</td>
                <td><code>Hình 1.7</code>, <code>Hình 1.8</code> + M1.7 Hạch, M1.8 Lách, M1.9 MALT, M1.10 HEV</td>
              </tr>
              <tr>
                <td><strong>Mục 12, Tóm tắt &amp; Lượng giá:</strong> Lược sử Nobel, Điểm kiểm soát, Đa ô-mic &amp; 5 Câu gốc</td>
                <td>tr. 15–19</td>
                <td>Bài 6 (24 câu)</td>
                <td><code>Hình 1.9 (A, B, C)</code> tái tạo toàn bộ cây lịch sử</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="overview-grid">${cardsHtml}</div>
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ================= VIEW 2: DEDICATED ATLAS (19 FIGURES) ================= */

  function showAtlas() {
    stopBackgroundTimers();
    state.view = 'atlas';
    closeDrawer();
    updateMobileBarActive('atlas');
    renderSidebar();

    const bc = document.getElementById('breadcrumb');
    if (bc) bc.textContent = `Atlas ${ALL_FIGURES.length} Hình & Sơ đồ Sinh lý bệnh – Miễn dịch Chú thích Tương tác`;

    const svgCount = ALL_FIGURES.filter((f) => f.type === 'svg').length;
    const photoCount = ALL_FIGURES.filter((f) => f.type === 'photo').length;
    const panelCount = ALL_FIGURES.reduce((acc, f) => acc + (f.panels ? f.panels.length : 0), 0);

    const filtered = ALL_FIGURES.filter((f) => {
      if (state.atlasFilter === 'svg' && f.type !== 'svg') return false;
      if (state.atlasFilter === 'photo' && f.type !== 'photo') return false;
      if (state.atlasFilter === 'b12' && ![1, 2].includes(f.lessonId)) return false;
      if (state.atlasFilter === 'b34' && ![3, 4].includes(f.lessonId)) return false;
      if (state.atlasFilter === 'b56' && ![5, 6].includes(f.lessonId)) return false;
      const q = state.atlasSearch.trim().toLowerCase();
      if (q) {
        const hay = `${f.id} ${f.title} ${f.caption} ${f.note || ''} ${JSON.stringify(f.legends || '')} ${JSON.stringify(f.panels || '')}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    const filters = [
      { id: 'all', label: `Tất cả (${ALL_FIGURES.length})` },
      { id: 'svg', label: `📐 9 Hình Sách Tái tạo (H1.1–H1.9)` },
      { id: 'photo', label: `🔬 ${photoCount} Hình Đối chiếu (${panelCount} ảnh)` },
      { id: 'b12', label: 'Bài 1–2 (Bẩm sinh, Dịch thể)' },
      { id: 'b34', label: 'Bài 3–4 (Clone, Trí nhớ, CD, APC)' },
      { id: 'b56', label: 'Bài 5–6 (HEV, 5 Pha, Lược sử)' }
    ];

    document.getElementById('mainContent').innerHTML = `
      <div class="atlas-section-header">
        <div>
          <h1 style="font-size:22px;margin:0 0 4px 0;">🖼️ Atlas Toàn Tập ${ALL_FIGURES.length} Hình &amp; Sơ Đồ Chú Thích</h1>
          <p style="margin:0;font-size:13.5px;color:var(--text-muted);">
            Tái tạo đủ toàn bộ <strong>${svgCount} hình sách giáo trình</strong> và <strong>${panelCount} hình đối chiếu mô học – giải phẫu</strong>. Chạm vào ghim số hoặc danh sách chú giải để đối chiếu; dùng <strong>🙈 Ẩn ghim số</strong> để tự kiểm tra trí nhớ!
          </p>
        </div>
        <div class="control-group" style="min-width:240px;">
          <input type="search" id="atlasSearchInput" value="${escapeHtml(state.atlasSearch)}" placeholder="🔍 Tìm hình (vd: H1.4, clone, HEV, tương bào...)"
            oninput="App.setAtlasSearch(this.value)"
            style="padding:9px 12px;border-radius:8px;border:1px solid var(--border);background:var(--bg-main);color:var(--text-main);font-size:13.5px;" />
        </div>
      </div>

      <div class="quiz-filter-bar">
        <div class="pill-btn-group" style="margin:0;">
          ${filters.map((ft) => `
            <button type="button" class="pill-btn ${state.atlasFilter === ft.id ? 'active' : ''}" onclick="App.setAtlasFilter('${ft.id}')">${ft.label}</button>
          `).join('')}
        </div>
      </div>

      ${filtered.length === 0
        ? `<div class="callout warning"><div class="callout-title">Không tìm thấy hình khớp điều kiện lọc</div><p style="margin:0;">Thử xóa ô tìm kiếm hoặc chọn bộ lọc "Tất cả".</p></div>`
        : `<div class="atlas-grid">${filtered.map((f) => renderFigureCard(f)).join('')}</div>`
      }
    `;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setAtlasFilter(filter) {
    state.atlasFilter = filter;
    showAtlas();
  }

  function setAtlasSearch(val) {
    state.atlasSearch = val;
    showAtlas();
    const inp = document.getElementById('atlasSearchInput');
    if (inp) {
      inp.focus();
      const len = inp.value.length;
      inp.setSelectionRange(len, len);
    }
  }

  /* ================= VIEW 3: LESSON VIEW ================= */

  function getLesson(id) {
    return ALL_LESSONS.find((l) => l.id === Number(id)) || ALL_LESSONS[0];
  }

  function showLesson(lessonId, tab) {
    stopBackgroundTimers();
    state.view = 'lesson';
    state.currentLessonId = Number(lessonId);
    state.activeTab = tab || 'all';
    closeDrawer();
    updateMobileBarActive('none');
    renderSidebar();

    const lesson = getLesson(state.currentLessonId);
    const bc = document.getElementById('breadcrumb');
    if (bc) bc.textContent = `${lesson.group} → ${lesson.title}`;

    const figs = (lesson.figureIds || []).map((id) => FIGURES_BY_ID[id]).filter(Boolean);
    const tabs = [
      { id: 'all', label: '📑 Học Toàn diện' },
      { id: 'theory', label: '📖 Lý thuyết Chi tiết' },
      { id: 'atlas', label: `🖼️ Hình & Sơ đồ (${figs.length})` },
      { id: 'anim', label: '🎬 Cơ chế Động' },
      { id: 'sim', label: '🧪 Lab Mô phỏng' },
      { id: 'quiz', label: `📝 Trắc nghiệm KSA (${lesson.questions.length})` }
    ];

    const prevLesson = ALL_LESSONS.find((l) => l.id === lesson.id - 1);
    const nextLesson = ALL_LESSONS.find((l) => l.id === lesson.id + 1);

    const atlasSection = `
      <div class="atlas-section-header">
        <div>
          <h2 style="font-size:17.5px;margin:0 0 3px 0;">🖼️ Atlas ${figs.length} Hình &amp; Sơ đồ trong ${escapeHtml(lesson.shortTitle)}</h2>
          <p style="margin:0;font-size:13px;color:var(--text-muted);">Đầy đủ sơ đồ sách giáo trình tái tạo nét cao và hình đối chiếu kèm chú thích tương tác.</p>
        </div>
        <button type="button" class="btn btn-outline" style="padding:7px 12px;font-size:12.5px;" onclick="App.showAtlas()">Xem toàn bộ ${ALL_FIGURES.length} hình ↗</button>
      </div>
      <div class="atlas-grid">${figs.map((f) => renderFigureCard(f)).join('')}</div>
    `;

    const showTheory = state.activeTab === 'all' || state.activeTab === 'theory';
    const showAtlasPane = state.activeTab === 'all' || state.activeTab === 'atlas';
    const showAnim = state.activeTab === 'all' || state.activeTab === 'anim';
    const showSim = state.activeTab === 'all' || state.activeTab === 'sim';
    const showQuiz = state.activeTab === 'all' || state.activeTab === 'quiz';

    document.getElementById('mainContent').innerHTML = `
      <div class="lesson-hero">
        <div class="lesson-hero-meta">
          <span class="tag-pill">${escapeHtml(lesson.group)}</span>
          <span class="tag-pill">📘 ${escapeHtml(lesson.textbookRef)}</span>
          <span class="tag-pill">🖼️ ${figs.length} Hình &amp; Sơ đồ • 📝 ${lesson.questions.length} Câu KSA</span>
        </div>
        <h1>${escapeHtml(lesson.title)}</h1>
        <p>${escapeHtml(lesson.summary)}</p>
      </div>

      <div class="lesson-tabs" role="tablist">
        ${tabs.map((t) => `
          <button type="button" class="tab-btn ${state.activeTab === t.id ? 'active' : ''}" onclick="App.switchTab('${t.id}')">${t.label}</button>
        `).join('')}
      </div>

      ${showTheory ? `<section id="sec-theory">${lesson.theoryHtml}</section>` : ''}
      ${showAtlasPane ? `<section id="sec-atlas" style="margin-top:${showTheory ? '20px' : '0'};">${atlasSection}</section>` : ''}
      ${showAnim ? `<section id="sec-anim" style="margin-top:20px;"><div id="animContainer"></div></section>` : ''}
      ${showSim ? `<section id="sec-sim" style="margin-top:20px;"><div id="simContainer"></div></section>` : ''}
      ${showQuiz ? `<section id="sec-quiz" style="margin-top:20px;"><div id="quizContainer"></div></section>` : ''}

      <div class="lesson-nav-footer">
        <div>
          ${prevLesson
            ? `<button type="button" class="btn btn-outline" onclick="App.showLesson(${prevLesson.id}, 'all')">◀ Bài trước: ${escapeHtml(prevLesson.shortTitle)}</button>`
            : `<button type="button" class="btn btn-outline" onclick="App.showOverview()">◀ Về Tổng quan 6 bài</button>`}
        </div>
        <div>
          ${nextLesson
            ? `<button type="button" class="btn btn-primary" onclick="App.showLesson(${nextLesson.id}, 'all')">Bài tiếp: ${escapeHtml(nextLesson.shortTitle)} ▶</button>`
            : `<button type="button" class="btn btn-accent" onclick="App.showMockExam()">🎯 Hoàn tất! Vào Thi thử Tổng hợp ▶</button>`}
        </div>
      </div>
    `;

    if (showAnim && window.ProcessAnimations) {
      window.ProcessAnimations.render(lesson.id, document.getElementById('animContainer'));
    }
    if (showSim && window.Simulators && lesson.simId) {
      window.Simulators.mount(lesson.simId, document.getElementById('simContainer'));
    }
    if (showQuiz) {
      renderQuizSection(lesson);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function switchTab(tabId) {
    showLesson(state.currentLessonId, tabId);
  }

  /* ================= LESSON QUIZ RENDERER ================= */

  function ksaClass(ksa) {
    if (ksa === 'S') return 'ksa-badge ksa-S';
    if (ksa === 'A') return 'ksa-badge ksa-A';
    return 'ksa-badge';
  }

  function levelLabel(lvl) {
    if (Number(lvl) === 1) return 'Mức 1: Thuộc';
    if (Number(lvl) === 2) return 'Mức 2: Hiểu';
    return 'Mức 3: Vận dụng';
  }

  function renderQuizSection(lesson) {
    const container = document.getElementById('quizContainer');
    if (!container) return;

    const lessonAns = state.progress.answers[lesson.id] || {};
    let answeredCount = 0;
    let correctCount = 0;
    lesson.questions.forEach((q, idx) => {
      if (lessonAns[idx] !== undefined) {
        answeredCount++;
        if (lessonAns[idx] === q.answer) correctCount++;
      }
    });
    const scorePct = answeredCount > 0 ? Math.round((correctCount / lesson.questions.length) * 100) : 0;
    const c1 = lesson.questions.filter((q) => Number(q.level) === 1).length;
    const c2 = lesson.questions.filter((q) => Number(q.level) === 2).length;
    const c3 = lesson.questions.filter((q) => Number(q.level) === 3).length;
    const cK = lesson.questions.filter((q) => q.ksa === 'K').length;
    const cS = lesson.questions.filter((q) => q.ksa === 'S').length;
    const cA = lesson.questions.filter((q) => q.ksa === 'A').length;

    const filteredPairs = lesson.questions
      .map((q, idx) => ({ q, idx }))
      .filter(({ q, idx }) => {
        if (state.quizFilterLevel !== 'ALL' && String(q.level) !== String(state.quizFilterLevel)) return false;
        if (state.quizFilterKsa !== 'ALL' && q.ksa !== state.quizFilterKsa) return false;
        if (state.quizWrongOnly) {
          const picked = lessonAns[idx];
          if (picked === undefined || picked === q.answer) return false;
        }
        return true;
      });

    const letters = ['A', 'B', 'C', 'D'];

    container.innerHTML = `
      <div class="quiz-header-bar">
        <div>
          <h2 style="margin:0 0 4px 0;font-size:18px;">📝 Ngân hàng ${lesson.questions.length} Câu hỏi Chuẩn KSA — ${escapeHtml(lesson.shortTitle)}</h2>
          <div style="font-size:13px;color:var(--text-muted);">Gồm câu hỏi lượng giá chính thức của Giáo trình Miễn dịch Đại cương YDS và câu vận dụng lâm sàng / thí nghiệm</div>
        </div>
        <div class="quiz-score-board">
          <div class="score-circle">${correctCount}/${lesson.questions.length}</div>
          <div style="font-size:13px;">
            <div>Đã làm: <strong>${answeredCount}/${lesson.questions.length}</strong></div>
            <div>Tỷ lệ đạt: <strong>${scorePct}%</strong></div>
          </div>
          <button type="button" class="btn btn-outline" style="padding:7px 11px;font-size:12.5px;" onclick="App.resetLessonQuiz(${lesson.id})">↻ Làm lại</button>
        </div>
      </div>

      <div class="quiz-filter-bar">
        <div class="pill-btn-group" style="margin:0;">
          <button type="button" class="pill-btn ${state.quizFilterLevel === 'ALL' ? 'active' : ''}" onclick="App.setQuizFilter('level','ALL')">Tất cả (${lesson.questions.length})</button>
          <button type="button" class="pill-btn ${state.quizFilterLevel === '1' ? 'active' : ''}" onclick="App.setQuizFilter('level','1')">Mức 1: Thuộc (${c1})</button>
          <button type="button" class="pill-btn ${state.quizFilterLevel === '2' ? 'active' : ''}" onclick="App.setQuizFilter('level','2')">Mức 2: Hiểu (${c2})</button>
          <button type="button" class="pill-btn ${state.quizFilterLevel === '3' ? 'active' : ''}" onclick="App.setQuizFilter('level','3')">Mức 3: Vận dụng (${c3})</button>
        </div>
        <div class="pill-btn-group" style="margin:0;">
          <button type="button" class="pill-btn ${state.quizFilterKsa === 'ALL' ? 'active' : ''}" onclick="App.setQuizFilter('ksa','ALL')">K + S + A</button>
          <button type="button" class="pill-btn ${state.quizFilterKsa === 'K' ? 'active' : ''}" onclick="App.setQuizFilter('ksa','K')">K (${cK})</button>
          <button type="button" class="pill-btn ${state.quizFilterKsa === 'S' ? 'active' : ''}" onclick="App.setQuizFilter('ksa','S')">S (${cS})</button>
          <button type="button" class="pill-btn ${state.quizFilterKsa === 'A' ? 'active' : ''}" onclick="App.setQuizFilter('ksa','A')">A (${cA})</button>
          <button type="button" class="pill-btn ${state.quizWrongOnly ? 'active' : ''}" onclick="App.toggleQuizWrongOnly()">⚠️ Chỉ câu sai</button>
        </div>
      </div>

      ${filteredPairs.length === 0
        ? `<div class="callout pearl"><div class="callout-title">Không có câu hỏi nào trong bộ lọc này</div><p style="margin:0;">Chọn "Tất cả mức" hoặc tắt bộ lọc "Chỉ câu sai" để xem lại toàn bộ 24 câu.</p></div>`
        : filteredPairs.map(({ q, idx }) => {
          const picked = lessonAns[idx];
          const isAnswered = picked !== undefined;
          return `
            <div class="q-card" id="lq-${lesson.id}-${idx}">
              <div class="q-meta">
                <div class="badge-row">
                  <span class="q-num">Câu ${idx + 1}</span>
                  <span class="lvl-badge lvl-${q.level}">${levelLabel(q.level)}</span>
                  <span class="${ksaClass(q.ksa)}">${escapeHtml(q.ksaLabel || q.ksa)}</span>
                </div>
                <span class="q-source">${escapeHtml(q.source || '')}</span>
              </div>
              <div class="q-text">${escapeHtml(q.q)}</div>
              <div class="q-options">
                ${q.options.map((opt, oIdx) => {
                  let cls = 'q-opt';
                  if (isAnswered) {
                    cls += ' disabled';
                    if (oIdx === q.answer) cls += ' correct';
                    else if (oIdx === picked) cls += ' wrong';
                  }
                  return `
                    <button type="button" class="${cls}" ${isAnswered ? 'disabled' : ''} onclick="App.answerLessonQuiz(${lesson.id}, ${idx}, ${oIdx})">
                      <span class="q-opt-letter">${letters[oIdx]}</span>
                      <span>${escapeHtml(opt)}</span>
                    </button>
                  `;
                }).join('')}
              </div>
              <div class="q-explain ${isAnswered ? 'visible' : ''}">
                <strong>${picked === q.answer ? '✅ Chính xác!' : '❌ Chưa chính xác — Đáp án đúng là ' + letters[q.answer] + ':'}</strong>
                ${escapeHtml(q.explain || '')}
              </div>
            </div>
          `;
        }).join('')
      }
    `;
  }

  function answerLessonQuiz(lessonId, qIdx, optIdx) {
    const lesson = getLesson(lessonId);
    if (!state.progress.answers[lessonId]) state.progress.answers[lessonId] = {};
    if (state.progress.answers[lessonId][qIdx] !== undefined) return;
    state.progress.answers[lessonId][qIdx] = optIdx;

    let correct = 0;
    lesson.questions.forEach((q, i) => {
      if (state.progress.answers[lessonId][i] === q.answer) correct++;
    });
    const prevBest = state.progress.completedLessons[lessonId]?.bestScore || 0;
    state.progress.completedLessons[lessonId] = {
      bestScore: Math.max(prevBest, correct),
      total: lesson.questions.length
    };
    saveStorage();
    updateOverallProgress();
    renderSidebar();
    renderQuizSection(lesson);
  }

  function resetLessonQuiz(lessonId) {
    state.progress.answers[lessonId] = {};
    saveStorage();
    renderSidebar();
    renderQuizSection(getLesson(lessonId));
  }

  function setQuizFilter(kind, val) {
    if (kind === 'level') state.quizFilterLevel = val;
    if (kind === 'ksa') state.quizFilterKsa = val;
    renderQuizSection(getLesson(state.currentLessonId));
  }

  function toggleQuizWrongOnly() {
    state.quizWrongOnly = !state.quizWrongOnly;
    renderQuizSection(getLesson(state.currentLessonId));
  }

  /* ================= VIEW 4: MOCK EXAM (WITH TIMER & KSA BREAKDOWN) ================= */

  function showMockExam() {
    stopBackgroundTimers();
    state.view = 'mock';
    state.mock.phase = 'setup';
    closeDrawer();
    updateMobileBarActive('mock');
    renderSidebar();

    const bc = document.getElementById('breadcrumb');
    if (bc) bc.textContent = 'Phòng Thi Thử Tổng Hợp – Đề cương Sinh lý bệnh – Miễn dịch 2026';

    renderMockSetup();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderMockSetup() {
    const m = state.mock;
    const totalAvail = ALL_LESSONS.reduce((s, l) => s + l.questions.length, 0);
    document.getElementById('mainContent').innerHTML = `
      <div class="lesson-hero">
        <div class="lesson-hero-meta">
          <span class="tag-pill">Ngân hàng ${totalAvail} Câu KSA</span>
          <span class="tag-pill">Phân tầng 25% Thuộc • 37,5% Hiểu • 37,5% Vận dụng</span>
        </div>
        <h1>🎯 Phòng Thi Thử Tổng Hợp Môn Sinh Lý Bệnh – Miễn Dịch</h1>
        <p>Tự động rút đề ngẫu nhiên cân đối tỷ lệ mức độ nhận thức theo chuẩn Cao học ĐH Y Dược TP.HCM. Có chế độ <strong>Thi thật tính giờ (45 giây/câu)</strong> kèm Bảng điều phối câu hỏi &amp; Gắn cờ xem lại.</p>
      </div>

      <div class="sim-box">
        <div class="sim-header">
          <div>
            <h2 style="margin:0;font-size:18px;">⚙️ Thiết lập Đề Thi Thử</h2>
            <div style="font-size:13px;color:var(--text-muted);">Chọn quy mô câu hỏi, phạm vi bài học và chế độ chấm điểm</div>
          </div>
        </div>

        <div class="sim-controls">
          <div class="control-group">
            <label>Số lượng câu hỏi</label>
            <select onchange="App.setMockOpt('count', Number(this.value))">
              <option value="20" ${m.count === 20 ? 'selected' : ''}>20 câu (Nhanh – 15 phút)</option>
              <option value="40" ${m.count === 40 ? 'selected' : ''}>40 câu (Chuẩn 1 Đề – 30 phút)</option>
              <option value="60" ${m.count === 60 ? 'selected' : ''}>60 câu (Thi chính thức – 45 phút)</option>
              <option value="100" ${m.count === 100 ? 'selected' : ''}>100 câu (Tổng duyệt – 75 phút)</option>
              <option value="${totalAvail}" ${m.count === totalAvail ? 'selected' : ''}>Toàn bộ ${totalAvail} câu (Full Marathon)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Phạm vi Ôn tập</label>
            <select onchange="App.setMockOpt('scope', this.value)">
              <option value="ALL" ${m.scope === 'ALL' ? 'selected' : ''}>Tất cả 6 Bài học (${totalAvail} câu)</option>
              <option value="I. NỀN TẢNG & HAI TẦNG PHÒNG THỦ" ${m.scope === 'I. NỀN TẢNG & HAI TẦNG PHÒNG THỦ' ? 'selected' : ''}>Phần I: Bài 1–2 (Nền tảng, Bẩm sinh, Dịch thể/TB – 48 câu)</option>
              <option value="II. ĐẶC ĐIỂM MIỄN DỊCH THÍCH NGHI" ${m.scope === 'II. ĐẶC ĐIỂM MIỄN DỊCH THÍCH NGHI' ? 'selected' : ''}>Phần II: Bài 3 (Chọn lọc Clone, Trí nhớ, Dung nạp – 24 câu)</option>
              <option value="III. TẾ BÀO & CƠ QUAN MIỄN DỊCH" ${m.scope === 'III. TẾ BÀO & CƠ QUAN MIỄN DỊCH' ? 'selected' : ''}>Phần III: Bài 4–5 (Trưởng thành, CD, APC, HEV, 5 Pha – 48 câu)</option>
              <option value="IV. LỊCH SỬ, TRIỂN VỌNG & TỔNG ÔN" ${m.scope === 'IV. LỊCH SỬ, TRIỂN VỌNG & TỔNG ÔN' ? 'selected' : ''}>Phần IV: Bài 6 (Lược sử Nobel, Triển vọng, Tổng ôn – 24 câu)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Chế độ làm bài</label>
            <select onchange="App.setMockOpt('mode', this.value)">
              <option value="real" ${m.mode === 'real' ? 'selected' : ''}>⏱️ Thi thật (Đồng hồ đếm ngược, nộp bài mới chấm)</option>
              <option value="practice" ${m.mode === 'practice' ? 'selected' : ''}>💡 Luyện tập (Chọn là hiện đáp án &amp; giải thích ngay)</option>
            </select>
          </div>
        </div>

        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:8px;">
          <button type="button" class="btn btn-primary" onclick="App.startMockExam()">🚀 Bắt đầu Làm Đề Thi Ngay</button>
          <button type="button" class="btn btn-outline" onclick="App.showOverview()">◀ Quay lại 6 Bài</button>
        </div>
      </div>
    `;
  }

  function setMockOpt(k, v) {
    state.mock[k] = v;
  }

  function shuffleArr(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = copy[i];
      copy[i] = copy[j];
      copy[j] = t;
    }
    return copy;
  }

  function startMockExam() {
    stopBackgroundTimers();
    const m = state.mock;
    const pool = [];
    ALL_LESSONS.forEach((l) => {
      if (m.scope !== 'ALL' && l.group !== m.scope) return;
      l.questions.forEach((q, idx) => {
        pool.push({ ...q, lessonTitle: l.shortTitle, origNum: idx + 1 });
      });
    });

    const targetN = Math.min(m.count, pool.length);
    let selected = [];
    if (targetN >= pool.length) {
      selected = shuffleArr(pool);
    } else {
      const l1 = shuffleArr(pool.filter((x) => x.level === 1));
      const l2 = shuffleArr(pool.filter((x) => x.level === 2));
      const l3 = shuffleArr(pool.filter((x) => x.level === 3));
      const n1 = Math.round(targetN * 0.25);
      const n2 = Math.round(targetN * 0.375);
      const n3 = Math.max(0, targetN - n1 - n2);
      selected = [...l1.slice(0, n1), ...l2.slice(0, n2), ...l3.slice(0, n3)];
      const used = new Set(selected);
      const rem = shuffleArr(pool.filter((x) => !used.has(x)));
      while (selected.length < targetN && rem.length) selected.push(rem.pop());
      selected = shuffleArr(selected);
    }

    m.questions = selected;
    m.answers = {};
    m.flagged = {};
    m.wrongOnly = false;
    m.phase = 'running';
    m.paused = false;
    m.secondsLeft = selected.length * 45;

    if (m.mode === 'real') {
      m.timerId = setInterval(() => {
        if (m.phase !== 'running' || m.paused) return;
        m.secondsLeft--;
        updateTimerDom();
        if (m.secondsLeft <= 0) {
          submitMockExam();
        }
      }, 1000);
    }

    renderMockRunning();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function formatSeconds(sec) {
    const s = Math.max(0, Number(sec) || 0);
    const mm = String(Math.floor(s / 60)).padStart(2, '0');
    const ss = String(s % 60).padStart(2, '0');
    return `${mm}:${ss}`;
  }

  function updateTimerDom() {
    const m = state.mock;
    const bar = document.getElementById('examTimerBar');
    const clock = document.getElementById('examClockText');
    if (clock) clock.textContent = formatSeconds(m.secondsLeft);
    if (bar) {
      bar.classList.remove('warn', 'critical');
      if (m.secondsLeft <= 60) bar.classList.add('critical');
      else if (m.secondsLeft <= 180) bar.classList.add('warn');
    }
  }

  function toggleMockPause() {
    state.mock.paused = !state.mock.paused;
    renderMockRunning();
  }

  function selectMockAnswer(idx, optIdx) {
    const m = state.mock;
    if (m.phase !== 'running' || m.paused) return;
    if (m.mode === 'practice' && m.answers[idx] !== undefined) return;
    m.answers[idx] = optIdx;
    renderMockRunning();
  }

  function toggleMockFlag(idx) {
    const m = state.mock;
    if (m.flagged[idx]) delete m.flagged[idx];
    else m.flagged[idx] = true;
    renderMockRunning();
  }

  function scrollToExamQ(idx) {
    const el = document.getElementById(`exam-q-${idx}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function submitMockExam() {
    stopBackgroundTimers();
    state.mock.phase = 'review';
    state.mock.paused = false;
    renderMockReview();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderMockRunning() {
    const m = state.mock;
    const letters = ['A', 'B', 'C', 'D'];
    const answeredCount = Object.keys(m.answers).length;

    const paletteHtml = m.questions.map((q, idx) => {
      const hasAns = m.answers[idx] !== undefined;
      const isFlag = Boolean(m.flagged[idx]);
      let cls = 'pal-dot';
      if (m.mode === 'practice' && hasAns) {
        cls += m.answers[idx] === q.answer ? ' correct' : ' wrong';
      } else if (hasAns) {
        cls += ' answered';
      }
      if (isFlag) cls += ' flagged';
      return `<button type="button" class="${cls}" onclick="App.scrollToExamQ(${idx})" title="Câu ${idx + 1}">${idx + 1}</button>`;
    }).join('');

    const cardsHtml = m.paused
      ? `<div class="callout warning"><div class="callout-title">⏸ Đề thi đang tạm dừng</div><p style="margin:0;">Nhấn nút <strong>▶ Tiếp tục</strong> ở thanh trên để mở khóa đề thi và cho đồng hồ chạy tiếp.</p></div>`
      : m.questions.map((q, idx) => {
        const picked = m.answers[idx];
        const hasAns = picked !== undefined;
        const showExplainNow = m.mode === 'practice' && hasAns;
        return `
          <div class="q-card" id="exam-q-${idx}">
            <div class="q-meta">
              <div class="badge-row">
                <span class="q-num">Câu ${idx + 1}/${m.questions.length}</span>
                <span class="lvl-badge lvl-${q.level}">${levelLabel(q.level)}</span>
                <span class="${ksaClass(q.ksa)}">${escapeHtml(q.ksaLabel || q.ksa)}</span>
                <span class="tag-pill" style="background:var(--bg-main);color:var(--text-muted);border:1px solid var(--border);">${escapeHtml(q.lessonTitle)}</span>
              </div>
              <button type="button" class="flag-btn ${m.flagged[idx] ? 'flagged' : ''}" onclick="App.toggleMockFlag(${idx})">
                ${m.flagged[idx] ? '🚩 Đã cắm cờ' : '🏳️ Cắm cờ'}
              </button>
            </div>
            <div class="q-text">${escapeHtml(q.q)}</div>
            <div class="q-options">
              ${q.options.map((opt, oIdx) => {
                let cls = 'q-opt';
                if (m.mode === 'practice' && hasAns) {
                  cls += ' disabled';
                  if (oIdx === q.answer) cls += ' correct';
                  else if (oIdx === picked) cls += ' wrong';
                } else if (picked === oIdx) {
                  cls += ' selected-pending';
                }
                return `
                  <button type="button" class="${cls}" ${m.mode === 'practice' && hasAns ? 'disabled' : ''} onclick="App.selectMockAnswer(${idx}, ${oIdx})">
                    <span class="q-opt-letter">${letters[oIdx]}</span>
                    <span>${escapeHtml(opt)}</span>
                  </button>
                `;
              }).join('')}
            </div>
            ${showExplainNow ? `
              <div class="q-explain visible">
                <strong>${picked === q.answer ? '✅ Chính xác!' : '❌ Chưa chính xác — Đáp án đúng là ' + letters[q.answer] + ':'}</strong>
                ${escapeHtml(q.explain || '')} <em style="color:var(--text-light);">(${escapeHtml(q.source || '')})</em>
              </div>
            ` : ''}
          </div>
        `;
      }).join('');

    document.getElementById('mainContent').innerHTML = `
      <div class="exam-timer-bar ${m.mode === 'real' && m.secondsLeft <= 60 ? 'critical' : (m.mode === 'real' && m.secondsLeft <= 180 ? 'warn' : '')}" id="examTimerBar">
        <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;">
          ${m.mode === 'real'
            ? `<div class="timer-clock">⏱ <span id="examClockText">${formatSeconds(m.secondsLeft)}</span></div>`
            : `<div class="timer-clock" style="font-size:18px;">💡 Chế độ Luyện tập</div>`}
          <span style="font-size:13.5px;font-weight:700;">Đã chọn: ${answeredCount}/${m.questions.length} câu</span>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${m.mode === 'real' ? `<button type="button" class="btn btn-outline" style="padding:7px 12px;font-size:13px;" onclick="App.toggleMockPause()">${m.paused ? '▶ Tiếp tục' : '⏸ Tạm dừng'}</button>` : ''}
          <button type="button" class="btn btn-primary" style="padding:7px 14px;font-size:13px;" onclick="App.submitMockExam()">✓ Nộp bài &amp; Chấm điểm</button>
          <button type="button" class="btn btn-outline" style="padding:7px 12px;font-size:13px;" onclick="App.showMockExam()">✕ Đổi cấu hình</button>
        </div>
      </div>

      <div class="exam-palette">${paletteHtml}</div>
      ${cardsHtml}
    `;
  }

  function renderMockReview() {
    const m = state.mock;
    const letters = ['A', 'B', 'C', 'D'];
    let totalCorrect = 0;
    const byLevel = { 1: [0, 0], 2: [0, 0], 3: [0, 0] };
    const byKsa = { K: [0, 0], S: [0, 0], A: [0, 0] };

    m.questions.forEach((q, idx) => {
      const ok = m.answers[idx] === q.answer;
      if (ok) totalCorrect++;
      if (byLevel[q.level]) {
        byLevel[q.level][1]++;
        if (ok) byLevel[q.level][0]++;
      }
      if (byKsa[q.ksa]) {
        byKsa[q.ksa][1]++;
        if (ok) byKsa[q.ksa][0]++;
      }
    });

    const pct = m.questions.length ? Math.round((totalCorrect / m.questions.length) * 100) : 0;
    const scale10 = m.questions.length ? ((totalCorrect / m.questions.length) * 10).toFixed(1) : '0.0';

    const paletteHtml = m.questions.map((q, idx) => {
      const ok = m.answers[idx] === q.answer;
      return `<button type="button" class="pal-dot ${ok ? 'correct' : 'wrong'} ${m.flagged[idx] ? 'flagged' : ''}" onclick="App.scrollToExamQ(${idx})">${idx + 1}</button>`;
    }).join('');

    const visibleItems = m.questions
      .map((q, idx) => ({ q, idx }))
      .filter(({ q, idx }) => !m.wrongOnly || m.answers[idx] !== q.answer);

    document.getElementById('mainContent').innerHTML = `
      <div class="quiz-header-bar" style="border:2px solid ${pct >= 70 ? 'var(--success)' : 'var(--danger)'};">
        <div>
          <h1 style="font-size:21px;margin:0 0 4px 0;">📊 Kết quả Thi thử: ${totalCorrect}/${m.questions.length} câu đúng (${scale10}/10 điểm • ${pct}%)</h1>
          <p style="margin:0;font-size:13.5px;color:var(--text-muted);">${pct >= 75 ? 'Xuất sắc! Bạn đã nắm vững chuẩn Sinh lý bệnh – Miễn dịch SĐH.' : 'Hãy lọc "Chỉ xem câu sai" để ôn kỹ các cơ chế miễn dịch học và chú thích hình sách.'}</p>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button type="button" class="btn ${m.wrongOnly ? 'btn-accent' : 'btn-outline'}" onclick="App.toggleMockWrongOnly()">${m.wrongOnly ? '👁️ Hiện tất cả' : '⚠️ Chỉ xem câu sai'}</button>
          <button type="button" class="btn btn-primary" onclick="App.startMockExam()">↻ Rút đề mới</button>
          <button type="button" class="btn btn-outline" onclick="App.showMockExam()">⚙️ Đổi cấu hình</button>
        </div>
      </div>

      <div class="metric-cards">
        <div class="metric-card">
          <div class="metric-label">Phân tích theo Mức độ Nhận thức</div>
          <div class="metric-val" style="font-size:14px;">
            M1 Thuộc: ${byLevel[1][0]}/${byLevel[1][1]} • M2 Hiểu: ${byLevel[2][0]}/${byLevel[2][1]} • M3 Vận dụng: ${byLevel[3][0]}/${byLevel[3][1]}
          </div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Phân tích theo Năng lực KSA</div>
          <div class="metric-val" style="font-size:14px;">
            K (Kiến thức): ${byKsa.K[0]}/${byKsa.K[1]} • S (Kỹ năng): ${byKsa.S[0]}/${byKsa.S[1]} • A (Thái độ): ${byKsa.A[0]}/${byKsa.A[1]}
          </div>
        </div>
      </div>

      <div class="exam-palette">${paletteHtml}</div>

      ${visibleItems.length === 0
        ? `<div class="callout success"><div class="callout-title">Tuyệt đối 100%!</div><p style="margin:0;">Không có câu nào trả lời sai trong lượt thi này.</p></div>`
        : visibleItems.map(({ q, idx }) => {
          const picked = m.answers[idx];
          const ok = picked === q.answer;
          return `
            <div class="q-card" id="exam-q-${idx}">
              <div class="q-meta">
                <div class="badge-row">
                  <span class="q-num">Câu ${idx + 1}</span>
                  <span class="lvl-badge lvl-${q.level}">${levelLabel(q.level)}</span>
                  <span class="${ksaClass(q.ksa)}">${escapeHtml(q.ksaLabel || q.ksa)}</span>
                  <span class="tag-pill" style="background:${ok ? 'var(--success-light)' : 'var(--danger-light)'};color:${ok ? 'var(--success)' : 'var(--danger)'};">${ok ? '✓ Đúng' : '✕ Sai / Bỏ trống'}</span>
                </div>
                <span class="q-source">${escapeHtml(q.lessonTitle)} • ${escapeHtml(q.source || '')}</span>
              </div>
              <div class="q-text">${escapeHtml(q.q)}</div>
              <div class="q-options">
                ${q.options.map((opt, oIdx) => {
                  let cls = 'q-opt disabled';
                  if (oIdx === q.answer) cls += ' correct';
                  else if (oIdx === picked) cls += ' wrong';
                  return `
                    <div class="${cls}">
                      <span class="q-opt-letter">${letters[oIdx]}</span>
                      <span>${escapeHtml(opt)}</span>
                    </div>
                  `;
                }).join('')}
              </div>
              <div class="q-explain visible">
                <strong>${ok ? '✅ Chính xác!' : `❌ Đáp án đúng là ${letters[q.answer]}:`}</strong>
                ${escapeHtml(q.explain || '')}
              </div>
            </div>
          `;
        }).join('')
      }
    `;
  }

  function toggleMockWrongOnly() {
    state.mock.wrongOnly = !state.mock.wrongOnly;
    renderMockReview();
  }

  /* ================= BOOTSTRAP & EVENTS ================= */

  function init() {
    buildData();
    loadStorage();
    applyTheme(state.theme);
    updateOverallProgress();
    renderSidebar();

    const searchEl = document.getElementById('lessonSearchInput');
    if (searchEl) {
      searchEl.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderSidebar();
      });
    }

    const menuBtn = document.getElementById('menuToggleBtn');
    const closeBtn = document.getElementById('sidebarCloseBtn');
    const backdrop = document.getElementById('sidebarBackdrop');
    if (menuBtn) menuBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    if (backdrop) backdrop.addEventListener('click', closeDrawer);

    const atlasModal = document.getElementById('atlasModal');
    if (atlasModal) {
      atlasModal.addEventListener('click', (e) => {
        if (e.target === atlasModal) closeAtlasModal();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAtlasModal();
        closeDrawer();
      }
    });

    showOverview();
  }

  window.App = {
    init,
    showOverview,
    showAtlas,
    setAtlasFilter,
    setAtlasSearch,
    showLesson,
    switchTab,
    showMockExam,
    setMockOpt,
    startMockExam,
    toggleMockPause,
    selectMockAnswer,
    toggleMockFlag,
    scrollToExamQ,
    submitMockExam,
    toggleMockWrongOnly,
    answerLessonQuiz,
    resetLessonQuiz,
    setQuizFilter,
    toggleQuizWrongOnly,
    focusPin,
    toggleFigurePins,
    openFigureModal,
    closeAtlasModal,
    openDrawer,
    closeDrawer,
    toggleTheme
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
