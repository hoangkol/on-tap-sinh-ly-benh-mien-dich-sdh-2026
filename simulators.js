/**
 * CỔNG ÔN TẬP SINH LÝ BỆNH – MIỄN DỊCH SĐH 2026 - ĐẠI HỌC Y DƯỢC TP.HCM (YDS)
 * Module: 6 Phòng Thí nghiệm Mô phỏng Miễn dịch học Tương tác (Simulators)
 */
(function () {
  'use strict';

  const simState = {
    sim_innate_adaptive: { hours: 36, path: 'bacteria', herdPct: 82 },
    sim_humoral_passive: { scenario: 'hbv_newborn', action: 'combo_hbig_vac' },
    sim_clonal_memory: { prime: 'X', boost: 'XY', week: 7 },
    sim_cells_apc: { cell: 'dc', signal2: 'yes' },
    sim_homing_phases: { day: 7, tState: 'effector' },
    sim_history_checkpoint: { era: 'checkpoint', blockade: 'on' }
  };

  const SIM_CONTAINERS = {};

  function mount(simId, container) {
    if (!container) return;
    SIM_CONTAINERS[simId] = container;
    render(simId, container);
  }

  function render(simId, container) {
    const target = container || SIM_CONTAINERS[simId];
    if (!target) return;
    SIM_CONTAINERS[simId] = target;

    const builders = {
      sim_innate_adaptive: buildInnateAdaptive,
      sim_humoral_passive: buildHumoralPassive,
      sim_clonal_memory: buildClonalMemory,
      sim_cells_apc: buildCellsApc,
      sim_homing_phases: buildHomingPhases,
      sim_history_checkpoint: buildHistoryCheckpoint
    };

    const fn = builders[simId];
    if (fn) {
      target.innerHTML = fn(simState[simId]);
    }
  }

  function setVal(simId, key, val) {
    if (!simState[simId]) return;
    simState[simId][key] = val;
    render(simId);
  }

  /* ------------------------------------------------------------------
     1. SIMULATOR BÀI 1: BẨM SINH (0–12h) vs THÍCH NGHI (1–5d) & MIỄN DỊCH CỘNG ĐỒNG
     ------------------------------------------------------------------ */
  function buildInnateAdaptive(st) {
    const hours = Number(st.hours);
    const herd = Number(st.herdPct);
    const isInnatePhase = hours <= 12;

    const innatePower = hours === 0 ? 40 : (hours <= 12 ? 85 : (hours <= 48 ? 65 : 40));
    const adaptivePower = hours < 24 ? 10 : Math.min(98, Math.round(((hours - 12) / 108) * 95));

    const phaseLabel = hours === 0
      ? '0 Giờ: Hàng rào Da & Niêm mạc chặn cửa ngõ'
      : (isInnatePhase ? `${hours} Giờ: Miễn dịch Bẩm sinh chiếm ưu thế` : `${(hours / 24).toFixed(1)} Ngày: Miễn dịch Thích nghi bùng nổ`);

    const herdStatus = herd >= 80
      ? 'Đạt ngưỡng Miễn dịch Cộng đồng — Dịch bệnh lắng xuống (như xóa sổ Đậu mùa!)'
      : (herd >= 50 ? 'Miễn dịch một phần — Tác nhân mới vẫn có thể lây lan âm ỉ' : 'Chưa có miễn dịch nền (như Cúm 1918 / COVID-19 đầu dịch) — Nguy cơ bùng phát rộng!');

    const pathInfo = {
      bacteria: 'Vi khuẩn ngoại bào: Bẩm sinh (Thực bào, Bổ thể, Mast) → Thích nghi (B → Tương bào tiết Kháng thể opson hóa giúp thực bào nuốt mạnh hơn).',
      virus: 'Virus nội bào: Bẩm sinh (Tế bào NK & Tế bào tua gai) → Thích nghi (Lympho T CD8⁺ tiêu diệt trực tiếp tế bào nhiễm & Kháng thể ngăn lây lan).',
      tumor: 'Kháng nguyên khối u: Tế bào NK & Lympho T nhận diện kháng nguyên biến đổi của tế bào u để ngăn chặn sự phát triển khối u.'
    }[st.path];

    return `
      <div class="sim-box">
        <div class="sim-header">
          <div>
            <h3 style="margin:0;font-size:17px;">🧪 Mô phỏng Hai Tầng Phòng thủ (Hình 1.1) &amp; Miễn dịch Cộng đồng</h3>
            <div style="font-size:13px;color:var(--text-muted);margin-top:2px;">Kéo thanh thời gian sau nhiễm (0 giờ → 5 ngày) và tỷ lệ dân số có miễn dịch để quan sát diễn biến đáp ứng</div>
          </div>
          <span class="sim-badge">${phaseLabel}</span>
        </div>

        <div class="sim-controls">
          <div class="control-group">
            <label>Thời gian sau khi mầm bệnh xâm nhập: <strong>${hours < 24 ? `${hours} Giờ` : `${(hours / 24).toFixed(1)} Ngày (${hours}h)`}</strong></label>
            <input type="range" min="0" max="120" step="6" value="${hours}" oninput="Simulators.setVal('sim_innate_adaptive','hours',this.value)" />
          </div>
          <div class="control-group">
            <label>Tác nhân thách thức</label>
            <select onchange="Simulators.setVal('sim_innate_adaptive','path',this.value)">
              <option value="bacteria" ${st.path === 'bacteria' ? 'selected' : ''}>Vi khuẩn ngoại bào</option>
              <option value="virus" ${st.path === 'virus' ? 'selected' : ''}>Virus xâm nhập tế bào</option>
              <option value="tumor" ${st.path === 'tumor' ? 'selected' : ''}>Kháng nguyên khối u</option>
            </select>
          </div>
          <div class="control-group">
            <label>Tỷ lệ dân số có miễn dịch cộng đồng: <strong>${herd}%</strong></label>
            <input type="range" min="0" max="100" step="5" value="${herd}" oninput="Simulators.setVal('sim_innate_adaptive','herdPct',this.value)" />
          </div>
        </div>

        <div class="svg-stage">
          <svg viewBox="0 0 640 190" style="width:100%;max-width:640px;height:auto;" role="img" aria-label="Biểu đồ lực lượng bẩm sinh và thích nghi">
            <rect x="4" y="4" width="632" height="182" rx="12" fill="var(--bg-main)" stroke="var(--border)" />
            <text x="20" y="30" font-size="12.5" font-weight="800" fill="var(--accent)">MỨC HUY ĐỘNG BẨM SINH (0–12h)</text>
            <rect x="20" y="40" width="280" height="22" rx="6" fill="var(--bg-card)" stroke="var(--border)" />
            <rect x="20" y="40" width="${Math.round(innatePower * 2.8)}" height="22" rx="6" fill="var(--accent)" />
            <text x="310" y="56" font-size="12" font-weight="800" fill="var(--accent)">${innatePower}%</text>

            <text x="20" y="92" font-size="12.5" font-weight="800" fill="var(--primary)">MỨC HUY ĐỘNG THÍCH NGHI (1–5 ngày)</text>
            <rect x="20" y="102" width="280" height="22" rx="6" fill="var(--bg-card)" stroke="var(--border)" />
            <rect x="20" y="102" width="${Math.round(adaptivePower * 2.8)}" height="22" rx="6" fill="var(--primary)" />
            <text x="310" y="118" font-size="12" font-weight="800" fill="var(--primary)">${adaptivePower}%</text>

            <text x="20" y="152" font-size="12" font-weight="700" fill="var(--text-main)">Điểm mốc: ${hours <= 12 ? 'Da/niêm, Thực bào, Mast, NK, Bổ thể đang giữ trận' : 'Tương bào (Ig) & T thành sự đã tăng sinh + Opson hóa thực bào!'}</text>

            <rect x="372" y="20" width="246" height="148" rx="10" fill="var(--bg-card)" stroke="var(--border)" />
            <text x="495" y="46" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">Miễn dịch Cộng đồng: ${herd}%</text>
            <circle cx="495" cy="96" r="36" fill="${herd >= 80 ? 'var(--success-light)' : (herd >= 50 ? 'var(--warning-light)' : 'var(--danger-light)')}" stroke="${herd >= 80 ? 'var(--success)' : (herd >= 50 ? 'var(--warning)' : 'var(--danger)')}" stroke-width="3" />
            <text x="495" y="101" text-anchor="middle" font-size="15" font-weight="800" fill="${herd >= 80 ? 'var(--success)' : (herd >= 50 ? 'var(--warning)' : 'var(--danger)')}">${herd >= 80 ? 'AN TOÀN' : (herd >= 50 ? 'CHƯA ĐỦ' : 'DỊCH LAN')}</text>
            <text x="495" y="154" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">Tiêm chủng hoặc nhiễm tự nhiên</text>
          </svg>
        </div>

        <div class="callout pearl" style="margin-bottom:0;">
          <div class="callout-title">Phân tích Cơ chế &amp; Thực tế Dịch tễ</div>
          <p style="margin:0;"><strong>Tác nhân:</strong> ${pathInfo}<br/><strong>Cộng đồng (${herd}%):</strong> ${herdStatus}</p>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------
     2. SIMULATOR BÀI 2: PHÂN CÔNG DỊCH THỂ VS TẾ BÀO & CHỦ ĐỘNG / THỤ ĐỘNG
     ------------------------------------------------------------------ */
  function buildHumoralPassive(st) {
    const scenarios = {
      extracellular: {
        name: 'Vi khuẩn ngoại bào + Độc tố tiết ra',
        best: 'antibody',
        explain: 'CHÍNH XÁC! Kháng thể (miễn dịch dịch thể từ lympho B → tương bào) gắn lên vi khuẩn ngoại bào, trung hòa độc tố và tăng cường opson hóa thực bào.'
      },
      phagosome_bacteria: {
        name: 'Vi khuẩn nội bào sống dai dẳng trong túi thực bào của Đại thực bào',
        best: 'th_cytokine',
        explain: 'CHÍNH XÁC! Kháng thể không vào được bên trong túi thực bào. Phải cần Tế bào T giúp đỡ (Th) tiết cytokine hoạt hóa đại thực bào tiêu diệt vi khuẩn đã nuốt (Hình 1.2).'
      },
      cytoplasm_virus: {
        name: 'Virus nhân lên trong bào chất tế bào biểu mô (không thực bào)',
        best: 'tc_kill',
        explain: 'CHÍNH XÁC! Tế bào T gây độc (Tc / CD8⁺) nhận diện đoạn peptide virus trình diện cùng MHC trên bề mặt tế bào nhiễm và giết trực tiếp tế bào đó để xóa sổ ổ nhiễm.'
      },
      hbv_newborn: {
        name: 'Trẻ sơ sinh có mẹ nhiễm virus Viêm gan B (HBsAg+)',
        best: 'combo_hbig_vac',
        explain: 'CHÍNH XÁC! Phải phối hợp cả hai: Tiêm HBIG (miễn dịch thụ động bảo vệ ngay lập tức) + Vaccine HBV (miễn dịch chủ động tạo trí nhớ bền vững, tr. 7 & Câu 2 tr. 18).'
      },
      snake_emergency: {
        name: 'Bệnh nhân bị rắn độc cắn hoặc COVID-19 cần trung hòa cấp cứu',
        best: 'passive_serum',
        explain: 'CHÍNH XÁC! Cần hiệu quả tức thì trước khi cơ thể tự tạo miễn dịch chủ động → Dùng miễn dịch thụ động bằng huyết thanh từ người/nguồn đã miễn dịch hoặc kháng thể đơn dòng.'
      },
      tcell_transfer: {
        name: 'Truyền tế bào T giữa hai người KHÔNG giống nhau về mặt di truyền',
        best: 'impossible_reject',
        explain: 'CHÍNH XÁC! Theo tr. 7, truyền tế bào T giữa những người khác di truyền là KHÔNG THỂ vì tế bào được truyền sẽ bị hệ miễn dịch người nhận đào thải.'
      }
    };

    const actions = {
      antibody: 'Miễn dịch dịch thể: Kháng thể (Immunoglobulin)',
      th_cytokine: 'Miễn dịch tế bào: Th tiết Cytokine hoạt hóa Đại thực bào',
      tc_kill: 'Miễn dịch tế bào: Tc (CD8⁺) giết trực tiếp tế bào nhiễm',
      combo_hbig_vac: 'Phối hợp: HBIG (Thụ động) + Vaccine HBV (Chủ động)',
      passive_serum: 'Miễn dịch thụ động cấp cứu (Huyết thanh / Kháng thể đơn dòng)',
      impossible_reject: 'Không khả thi — Tế bào truyền sẽ bị đào thải!'
    };

    const sc = scenarios[st.scenario];
    const isCorrect = sc.best === st.action;

    return `
      <div class="sim-box">
        <div class="sim-header">
          <div>
            <h3 style="margin:0;font-size:17px;">🩺 Phòng Khám Miễn dịch: Chọn Vũ khí Dịch thể/Tế bào &amp; Chủ động/Thụ động</h3>
            <div style="font-size:13px;color:var(--text-muted);margin-top:2px;">Chọn một tình huống lâm sàng – vi sinh và đối chiếu phương án xử trí miễn dịch chuẩn xác</div>
          </div>
          <span class="sim-badge" style="background:${isCorrect ? 'var(--success)' : 'var(--danger)'};">${isCorrect ? '✅ Phù hợp chuẩn sách!' : '⚠️ Chưa tối ưu'}</span>
        </div>

        <div class="sim-controls">
          <div class="control-group">
            <label>1. Tình huống Lâm sàng / Vi sinh vật</label>
            <select onchange="Simulators.setVal('sim_humoral_passive','scenario',this.value)">
              <option value="hbv_newborn" ${st.scenario === 'hbv_newborn' ? 'selected' : ''}>Trẻ sơ sinh có mẹ nhiễm Viêm gan B</option>
              <option value="extracellular" ${st.scenario === 'extracellular' ? 'selected' : ''}>Vi khuẩn ngoại bào &amp; ngoại độc tố</option>
              <option value="phagosome_bacteria" ${st.scenario === 'phagosome_bacteria' ? 'selected' : ''}>Vi khuẩn nội bào sống trong túi thực bào</option>
              <option value="cytoplasm_virus" ${st.scenario === 'cytoplasm_virus' ? 'selected' : ''}>Virus nhân lên trong bào chất tế bào chủ</option>
              <option value="snake_emergency" ${st.scenario === 'snake_emergency' ? 'selected' : ''}>Cấp cứu rắn cắn / SARS-CoV-2 nặng</option>
              <option value="tcell_transfer" ${st.scenario === 'tcell_transfer' ? 'selected' : ''}>Truyền tế bào T giữa 2 người khác di truyền</option>
            </select>
          </div>
          <div class="control-group">
            <label>2. Cơ chế / Biện pháp Miễn dịch Bạn chọn</label>
            <select onchange="Simulators.setVal('sim_humoral_passive','action',this.value)">
              <option value="combo_hbig_vac" ${st.action === 'combo_hbig_vac' ? 'selected' : ''}>Phối hợp HBIG (Thụ động) + Vaccine (Chủ động)</option>
              <option value="antibody" ${st.action === 'antibody' ? 'selected' : ''}>Kháng thể đặc hiệu (Dịch thể)</option>
              <option value="th_cytokine" ${st.action === 'th_cytokine' ? 'selected' : ''}>Lympho T giúp đỡ (Th) tiết Cytokine</option>
              <option value="tc_kill" ${st.action === 'tc_kill' ? 'selected' : ''}>Lympho T gây độc (Tc / CD8⁺)</option>
              <option value="passive_serum" ${st.action === 'passive_serum' ? 'selected' : ''}>Huyết thanh miễn dịch / Kháng thể đơn dòng</option>
              <option value="impossible_reject" ${st.action === 'impossible_reject' ? 'selected' : ''}>Không khả thi vì bị đào thải</option>
            </select>
          </div>
        </div>

        <div class="metric-cards">
          <div class="metric-card">
            <div class="metric-label">Tình huống đang xét</div>
            <div class="metric-val" style="font-size:14px;">${sc.name}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Phương án bạn chọn</div>
            <div class="metric-val" style="font-size:14px;color:${isCorrect ? 'var(--success)' : 'var(--danger)'};">${actions[st.action]}</div>
          </div>
        </div>

        <div class="callout ${isCorrect ? 'success' : 'trap'}" style="margin-bottom:0;">
          <div class="callout-title">${isCorrect ? '✅ Biện luận Chuẩn Giáo trình' : '❌ Hãy kiểm tra lại — Gợi ý đáp án đúng: ' + actions[sc.best]}</div>
          <p style="margin:0;">${sc.explain}</p>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------
     3. SIMULATOR BÀI 3: THÍ NGHIỆM TIÊM CHỦNG ANTIGEN X & Y (HÌNH 1.4)
     ------------------------------------------------------------------ */
  function buildClonalMemory(st) {
    const wk = Number(st.week);
    const hasPrimeX = st.prime === 'X';
    const hasBoostX = st.boost === 'X' || st.boost === 'XY';
    const hasBoostY = st.boost === 'Y' || st.boost === 'XY';

    function titerX(w) {
      let v = 0;
      if (hasPrimeX && w >= 1) {
        if (w <= 2.5) v = Math.max(v, ((w - 1) / 1.5) * 38);
        else if (w <= 5) v = Math.max(v, 38 - ((w - 2.5) / 2.5) * 26);
        else v = 12;
      }
      if (hasBoostX && w >= 5) {
        if (hasPrimeX) {
          if (w <= 6.2) v = Math.max(v, 12 + ((w - 5) / 1.2) * 86);
          else v = Math.max(v, 98 - ((w - 6.2) / 3.8) * 52);
        } else {
          if (w >= 6 && w <= 7.5) v = Math.max(v, ((w - 6) / 1.5) * 38);
          else if (w > 7.5) v = Math.max(v, 38 - ((w - 7.5) / 2.5) * 24);
        }
      }
      return Math.round(Math.max(0, v));
    }

    function titerY(w) {
      if (!hasBoostY || w < 6) return 0;
      if (w <= 7.5) return Math.round(((w - 6) / 1.5) * 38);
      return Math.round(Math.max(8, 38 - ((w - 7.5) / 2.5) * 24));
    }

    const curX = titerX(wk);
    const curY = titerY(wk);
    const curXMode = !hasPrimeX && !hasBoostX
      ? 'Chưa tiếp xúc X'
      : (hasPrimeX && hasBoostX && wk >= 5 ? 'ĐÁP ỨNG THỨ PHÁT (2–7 ngày!)' : 'Đáp ứng nguyên phát (1–3 tuần)');
    const curYMode = hasBoostY && wk >= 6 ? 'Đáp ứng nguyên phát Anti-Y (Đặc hiệu!)' : 'Chưa tiêm / Chưa đáp ứng Y';

    let pathX = 'M 60,175';
    let pathY = 'M 60,178';
    for (let w = 0; w <= 10; w += 0.25) {
      const px = 60 + w * 54;
      pathX += ` L ${px.toFixed(1)},${(175 - titerX(w) * 1.45).toFixed(1)}`;
      pathY += ` L ${px.toFixed(1)},${(178 - titerY(w) * 1.45).toFixed(1)}`;
    }
    const cursorX = 60 + wk * 54;

    return `
      <div class="sim-box">
        <div class="sim-header">
          <div>
            <h3 style="margin:0;font-size:17px;">📈 Thí nghiệm Động học Kháng thể: Chọn lọc Clone &amp; Trí nhớ (Hình 1.4)</h3>
            <div style="font-size:13px;color:var(--text-muted);margin-top:2px;">Thay đổi phác đồ tiêm Tuần 0 và Tuần 5, rồi kéo thanh thời gian để phân biệt Trí nhớ vs Đặc hiệu</div>
          </div>
          <span class="sim-badge">Tuần ${wk} • Anti-X: ${curX} | Anti-Y: ${curY}</span>
        </div>

        <div class="sim-controls">
          <div class="control-group">
            <label>Mũi 1 (Tuần 0)</label>
            <select onchange="Simulators.setVal('sim_clonal_memory','prime',this.value)">
              <option value="X" ${st.prime === 'X' ? 'selected' : ''}>Tiêm Antigen X (Tạo nguyên phát + B nhớ X)</option>
              <option value="none" ${st.prime === 'none' ? 'selected' : ''}>Không tiêm mũi 1 (Chứng naïve)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Mũi 2 (Tuần 5)</label>
            <select onchange="Simulators.setVal('sim_clonal_memory','boost',this.value)">
              <option value="XY" ${st.boost === 'XY' ? 'selected' : ''}>Tiêm đồng thời Antigen X + Antigen Y (Chuẩn Hình 1.4)</option>
              <option value="X" ${st.boost === 'X' ? 'selected' : ''}>Chỉ tiêm nhắc Antigen X</option>
              <option value="Y" ${st.boost === 'Y' ? 'selected' : ''}>Chỉ tiêm mới Antigen Y</option>
            </select>
          </div>
          <div class="control-group">
            <label>Mốc thời gian quan sát: <strong>Tuần ${wk}</strong></label>
            <input type="range" min="0" max="10" step="0.5" value="${wk}" oninput="Simulators.setVal('sim_clonal_memory','week',this.value)" />
          </div>
        </div>

        <div class="svg-stage">
          <svg viewBox="0 0 640 205" style="width:100%;max-width:640px;height:auto;" role="img" aria-label="Đồ thị đáp ứng nguyên phát và thứ phát">
            <rect x="4" y="4" width="632" height="197" rx="12" fill="var(--bg-main)" stroke="var(--border)" />
            <line x1="60" y1="22" x2="60" y2="180" stroke="var(--text-main)" stroke-width="2" />
            <line x1="60" y1="180" x2="610" y2="180" stroke="var(--text-main)" stroke-width="2" />
            <text x="20" y="105" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text-main)" transform="rotate(-90 20 105)">Hiệu giá Kháng thể</text>
            ${[0, 2, 4, 6, 8, 10].map((t) => `
              <line x1="${60 + t * 54}" y1="176" x2="${60 + t * 54}" y2="184" stroke="var(--text-main)" stroke-width="1.5" />
              <text x="${60 + t * 54}" y="195" text-anchor="middle" font-size="11" fill="var(--text-main)">Tuần ${t}</text>
            `).join('')}

            <!-- Cursor tuần hiện tại -->
            <line x1="${cursorX}" y1="22" x2="${cursorX}" y2="180" stroke="var(--danger)" stroke-width="1.8" stroke-dasharray="4,3" />
            <path d="${pathY}" fill="none" stroke="var(--success)" stroke-width="3" />
            <path d="${pathX}" fill="none" stroke="var(--primary)" stroke-width="3.4" />

            <circle cx="${cursorX}" cy="${175 - curX * 1.45}" r="5.5" fill="var(--primary)" />
            <circle cx="${cursorX}" cy="${178 - curY * 1.45}" r="5.5" fill="var(--success)" />

            <rect x="430" y="16" width="190" height="44" rx="8" fill="var(--bg-card)" stroke="var(--border)" />
            <line x1="442" y1="30" x2="465" y2="30" stroke="var(--primary)" stroke-width="3" /><text x="472" y="34" font-size="11" font-weight="700" fill="var(--primary)">Anti-X (${curX} đơn vị)</text>
            <line x1="442" y1="48" x2="465" y2="48" stroke="var(--success)" stroke-width="3" /><text x="472" y="52" font-size="11" font-weight="700" fill="var(--success)">Anti-Y (${curY} đơn vị)</text>
          </svg>
        </div>

        <div class="metric-cards">
          <div class="metric-card">
            <div class="metric-label">Trạng thái Anti-X</div>
            <div class="metric-val" style="font-size:14px;color:var(--primary);">${curXMode}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Trạng thái Anti-Y</div>
            <div class="metric-val" style="font-size:14px;color:var(--success);">${curYMode}</div>
          </div>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------
     4. SIMULATOR BÀI 4: ĐỊNH DANH PHÂN TỬ CD, APC & TÍN HIỆU ĐỒNG KÍCH THÍCH
     ------------------------------------------------------------------ */
  function buildCellsApc(st) {
    const cells = {
      dc: {
        name: 'Tế bào Tua gai (Dendritic cell - DC)',
        surface: 'Peptide-MHC + Mật độ CAO yếu tố đồng kích thích',
        role: 'APC quan trọng nhất và MẠNH NHẤT để hoạt hóa tế bào lympho T naïve (bắt KN ở da/niêm → mang về hạch).',
        withSig2: 'HOẠT HÓA MẠNH T naïve → Biệt hóa T hành sự & T nhớ!',
        noSig2: 'Nếu thiếu tín hiệu thứ 2 (đồng kích thích) → Tế bào T KHÔNG hoạt hóa hiệu quả dù đã nhận diện kháng nguyên!'
      },
      fdc: {
        name: 'Tế bào Tua gai Nang bạch huyết (FDC)',
        surface: 'Kháng nguyên nguyên vẹn tại Trung tâm mầm nang bạch huyết',
        role: 'Loại tế bào tua gai đặc biệt nằm ở trung tâm mầm nang bạch huyết, chuyên trình diện kháng nguyên để HOẠT HÓA TẾ BÀO LYMPHO B.',
        withSig2: 'Hoạt hóa dòng Lympho B trong trung tâm mầm nang bạch huyết!',
        noSig2: 'Khác với DC cổ điển: FDC hoạt hóa B chứ không phải chuyên hoạt hóa T naïve.'
      },
      b_cell: {
        name: 'Tế bào Lympho B',
        surface: 'Thụ thể kháng thể gắn màng (BCR = Ig màng) + Dấu ấn CD đặc trưng',
        role: 'Tế bào DUY NHẤT sản xuất kháng thể; nhận diện trực tiếp kháng nguyên vi khuẩn KHÔNG cần APC, và cũng có thể trình diện kháng nguyên cho T.',
        withSig2: 'Tăng sinh clone → Biệt hóa thành Tương bào tiết kháng thể & một số plasma blast về tủy xương sống nhiều năm.',
        noSig2: 'Chết theo chương trình nếu lưu hành nhiều tháng không gặp kháng nguyên.'
      },
      th_cd4: {
        name: 'Tế bào T giúp đỡ (Th — thuộc nhóm T CD4⁺)',
        surface: 'Phân tử CD4⁺ + Thụ thể TCR nhận peptide trên MHC-II của APC',
        role: 'Giữ vai trò quan trọng nhất trong các tế bào T: tiết cytokine hoạt hóa đại thực bào, chiêu mộ bạch cầu gây viêm và hỗ trợ lympho B tạo kháng thể.',
        withSig2: 'Tiết Cytokine hoạt hóa đồng bộ miễn dịch dịch thể & thực bào!',
        noSig2: 'Không đủ tín hiệu đồng kích thích từ APC → Không biệt hóa thành Th hành sự.'
      },
      treg_cd4: {
        name: 'Tế bào T điều hòa (Treg — một phân nhóm T CD4⁺)',
        surface: 'Phân tử CD4⁺ (nhóm ức chế miễn dịch)',
        role: 'Hạn chế hoạt động của các tế bào lympho khác (đặc biệt là tế bào T đáp ứng) nhằm duy trì dung nạp và NGĂN NGỪA TỰ MIỄN.',
        withSig2: 'Ức chế phản ứng T quá mức, bảo vệ mô khỏi tổn thương tự miễn!',
        noSig2: 'Thiếu hụt Treg → Tăng nguy cơ rối loạn tự miễn và viêm mạn tính.'
      },
      tc_cd8: {
        name: 'Tế bào T gây độc tế bào (Tc / CTL — T CD8⁺)',
        surface: 'Phân tử CD8⁺ + Thụ thể TCR nhận peptide nội bào trên tế bào đích',
        role: 'Tấn công và giết TRỰC TIẾP bất kỳ tế bào ký chủ nào chứa vi sinh vật trong bào chất (như virus) hoặc tế bào khối u.',
        withSig2: 'Giải phóng hạt độc giết tế bào nhiễm/khối u → Xóa sổ ổ nhiễm nội bào!',
        noSig2: 'Cần tín hiệu kích hoạt & hỗ trợ đầy đủ từ APC/Th để biệt hóa thành CTL.'
      }
    };

    const c = cells[st.cell];
    const hasSig2 = st.signal2 === 'yes';

    return `
      <div class="sim-box">
        <div class="sim-header">
          <div>
            <h3 style="margin:0;font-size:17px;">🔬 Phòng Thí nghiệm Định danh Tế bào Miễn dịch &amp; Yếu tố Đồng kích thích</h3>
            <div style="font-size:13px;color:var(--text-muted);margin-top:2px;">Khảo sát dấu ấn CD, chức năng đặc trưng và vai trò của tín hiệu thứ hai</div>
          </div>
          <span class="sim-badge">${c.name.split('(')[0].trim()}</span>
        </div>

        <div class="sim-controls">
          <div class="control-group">
            <label>1. Chọn Tế bào Miễn dịch</label>
            <select onchange="Simulators.setVal('sim_cells_apc','cell',this.value)">
              <option value="dc" ${st.cell === 'dc' ? 'selected' : ''}>Tế bào tua gai (DC — APC mạnh nhất cho T)</option>
              <option value="fdc" ${st.cell === 'fdc' ? 'selected' : ''}>Tế bào tua gai nang bạch huyết (FDC — cho B)</option>
              <option value="b_cell" ${st.cell === 'b_cell' ? 'selected' : ''}>Tế bào Lympho B (Duy nhất tiết Kháng thể)</option>
              <option value="th_cd4" ${st.cell === 'th_cd4' ? 'selected' : ''}>Tế bào T giúp đỡ (Th — CD4⁺)</option>
              <option value="treg_cd4" ${st.cell === 'treg_cd4' ? 'selected' : ''}>Tế bào T điều hòa (Treg — CD4⁺ ức chế)</option>
              <option value="tc_cd8" ${st.cell === 'tc_cd8' ? 'selected' : ''}>Tế bào T gây độc tế bào (Tc — CD8⁺)</option>
            </select>
          </div>
          <div class="control-group">
            <label>2. Yếu tố Đồng kích thích (Tín hiệu thứ 2)</label>
            <select onchange="Simulators.setVal('sim_cells_apc','signal2',this.value)">
              <option value="yes" ${st.signal2 === 'yes' ? 'selected' : ''}>Có mặt đầy đủ (Vi khuẩn kích thích APC)</option>
              <option value="no" ${st.signal2 === 'no' ? 'selected' : ''}>Thiếu vắng tín hiệu đồng kích thích</option>
            </select>
          </div>
        </div>

        <div class="metric-cards">
          <div class="metric-card">
            <div class="metric-label">Dấu ấn / Thụ thể Bề mặt</div>
            <div class="metric-val" style="font-size:13.5px;">${c.surface}</div>
          </div>
          <div class="metric-card">
            <div class="metric-label">Trạng thái Kích thích</div>
            <div class="metric-val" style="font-size:13.5px;color:${hasSig2 ? 'var(--success)' : 'var(--warning)'};">${hasSig2 ? c.withSig2 : c.noSig2}</div>
          </div>
        </div>

        <div class="callout pearl" style="margin-bottom:0;">
          <div class="callout-title">${c.name}</div>
          <p style="margin:0;">${c.role}</p>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------
     5. SIMULATOR BÀI 5: TUẦN HOÀN QUA HEV & 5 PHA ĐÁP ỨNG (HÌNH 1.7 & 1.8)
     ------------------------------------------------------------------ */
  function buildHomingPhases(st) {
    const day = Number(st.day);
    let phase = '';
    let color = 'var(--primary)';
    let desc = '';

    if (day <= 2) {
      phase = '1. Nhận diện Kháng nguyên';
      color = 'var(--primary)';
      desc = 'T naïve đi từ động mạch qua Tiểu tĩnh mạch nội mô cao (HEV) nhờ chemokine và phân tử kết dính vào vùng T của hạch bạch huyết để gặp APC.';
    } else if (day <= 7) {
      phase = '2. Hoạt hóa Lympho (Nhân lên Clone & Biệt hóa)';
      color = 'var(--accent)';
      desc = 'Tế bào tăng sinh clone dữ dội (đỉnh cao quanh ngày 7) và biệt hóa thành tương bào tiết kháng thể cùng tế bào T hành sự.';
    } else if (day <= 12) {
      phase = '3. Thải trừ Kháng nguyên';
      color = 'var(--success)';
      desc = 'T hành sự thoát khỏi hạch qua mạch bạch huyết ly tâm vào máu, xuyên mạch ngoại biên ưu tiên đến mô viêm diệt mầm bệnh cùng kháng thể dịch thể.';
    } else if (day <= 17) {
      phase = '4. Thu hẹp Đáp ứng (Homeostasis qua Apoptosis)';
      color = 'var(--danger)';
      desc = 'Khi không còn kháng nguyên kích thích, đa số tế bào lympho hành sự chết theo chương trình (Apoptosis) để đưa hệ miễn dịch về trạng thái cân bằng.';
    } else {
      phase = '5. Trí nhớ Miễn dịch Dài hạn';
      color = 'var(--purple)';
      desc = 'Các tế bào trí nhớ còn sống sót lưu hành hoặc cư trú lâu dài (nhiều tháng – nhiều năm), sẵn sàng bùng nổ khi tái nhiễm.';
    }

    const homingNote = st.tState === 'naive'
      ? 'Tế bào T naïve: Lưu hành từ động mạch → xuyên Tiểu tĩnh mạch nội mô cao (HEV) vào vùng T hạch bạch huyết (nhờ chemokine & phân tử kết dính).'
      : 'Tế bào T hành sự / T nhớ: Rời hạch qua mạch bạch huyết ly tâm → vào máu → di trú ưu tiên vào mô ngoại biên tại vị trí nhiễm trùng & viêm.';

    const popY = day <= 7 ? 150 - Math.round((day / 7) * 110) : (day <= 16 ? 40 + Math.round(((day - 7) / 9) * 86) : 126);

    return `
      <div class="sim-box">
        <div class="sim-header">
          <div>
            <h3 style="margin:0;font-size:17px;">🚦 Mô phỏng Tuần hoàn Lympho (HEV) &amp; Động học 5 Pha (Hình 1.7 – 1.8)</h3>
            <div style="font-size:13px;color:var(--text-muted);margin-top:2px;">Kéo thanh Ngày sau tiếp xúc kháng nguyên (0 → 21 ngày) và chuyển đổi loại tế bào T</div>
          </div>
          <span class="sim-badge" style="background:${color};">${phase}</span>
        </div>

        <div class="sim-controls">
          <div class="control-group">
            <label>Ngày sau khi tiếp xúc kháng nguyên: <strong>Ngày ${day}</strong></label>
            <input type="range" min="0" max="21" step="1" value="${day}" oninput="Simulators.setVal('sim_homing_phases','day',this.value)" />
          </div>
          <div class="control-group">
            <label>Trạng thái Tế bào Lympho T (Hình 1.7)</label>
            <select onchange="Simulators.setVal('sim_homing_phases','tState',this.value)">
              <option value="naive" ${st.tState === 'naive' ? 'selected' : ''}>Tế bào T naïve (Tìm kháng nguyên vào Hạch)</option>
              <option value="effector" ${st.tState === 'effector' ? 'selected' : ''}>Tế bào T hành sự / T nhớ (Thoát ly tâm ra Ổ viêm)</option>
            </select>
          </div>
        </div>

        <div class="svg-stage">
          <svg viewBox="0 0 640 185" style="width:100%;max-width:640px;height:auto;" role="img" aria-label="Đường cong 5 pha đáp ứng thích nghi">
            <rect x="4" y="4" width="632" height="177" rx="12" fill="var(--bg-main)" stroke="var(--border)" />
            <line x1="56" y1="20" x2="56" y2="160" stroke="var(--text-main)" stroke-width="2" />
            <line x1="56" y1="160" x2="610" y2="160" stroke="var(--text-main)" stroke-width="2" />
            <path d="M 56,152 Q 110,148 156,112 Q 204,40 241,40 Q 290,40 340,95 Q 400,126 480,128 L 605,128" fill="none" stroke="var(--primary)" stroke-width="3.2" />
            <circle cx="${56 + Math.round((day / 21) * 548)}" cy="${popY}" r="7" fill="${color}" stroke="#fff" stroke-width="2" />
            <text x="56" y="174" font-size="10.5" font-weight="700" fill="var(--text-main)">Ngày 0</text>
            <text x="241" y="174" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--accent)">Ngày 7 (Đỉnh)</text>
            <text x="424" y="174" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--danger)">Ngày 14 (Apoptosis)</text>
            <text x="586" y="174" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--purple)">Ngày 21</text>
          </svg>
        </div>

        <div class="callout pearl" style="margin-bottom:0;">
          <div class="callout-title">${phase}</div>
          <p style="margin:0;"><strong>Diễn biến tại Ngày ${day}:</strong> ${desc}<br/><strong>Lộ trình Hình 1.7:</strong> ${homingNote}</p>
        </div>
      </div>
    `;
  }

  /* ------------------------------------------------------------------
     6. SIMULATOR BÀI 6: LỊCH SỬ NOBEL & KIỂM SOÁT ĐIỂM KIỂM SOÁT UNG THƯ
     ------------------------------------------------------------------ */
  function buildHistoryCheckpoint(st) {
    const eras = {
      foundation: {
        title: 'Nền tảng: Thực bào (Metchnikoff) + Kháng độc tố (Behring) + Bổ thể & Opson hóa',
        detail: 'Khởi đầu từ 2 phát hiện: tế bào thực bào (miễn dịch bẩm sinh) và trung hòa độc tố bằng kháng thể (miễn dịch thu được); sau đó Jules Bordet tìm ra bổ thể và Almroth Wright phát hiện opson hóa liên kết chặt hai nhánh.'
      },
      ehrlich: {
        title: 'Paul Ehrlich: Thuyết Chuỗi bên & Giấc mơ "Viên đạn thần kỳ"',
        detail: 'Đặt nền móng lý thuyết thụ thể đặc hiệu và ý tưởng điều trị nhắm trúng đích hoàn toàn vào tác nhân gây bệnh mà không hại tế bào lành — giấc mơ đang được hiện thực hóa bằng kháng thể đơn dòng & đa ô-mic.'
      },
      antibodies_b: {
        title: 'Kháng thể & Lympho B: Porter/Edelman, Tonegawa, Milstein & Köhler',
        detail: 'Giải mã cấu trúc hóa học kháng thể (Porter & Edelman), xác định tương bào tiết Ig (Fagraeus), tái tổ hợp gen tạo đa dạng kháng thể (Tonegawa) và phát minh kháng thể đơn dòng (Milstein & Köhler).'
      },
      t_mhc_dc: {
        title: 'Tế bào T, Chọn lọc Clone, MHC & Tế bào Tua gai (Burnet, Miller, Snell, Steinman)',
        detail: 'Burnet & Talmage với Chọn lọc clone; Medawar với Dung nạp miễn dịch; Miller khám phá vai trò tuyến ức; Snell/Dausset/Benacerraf tìm ra MHC; Doherty/Zinkernagel phát hiện hạn chế MHC; Steinman phát hiện tế bào tua gai.'
      },
      checkpoint: {
        title: 'Đỉnh cao Đương đại: Kiểm soát Điểm kiểm soát (James Allison & Tasuku Honjo)',
        detail: 'Thay vì đánh trực tiếp vào tế bào u, liệu pháp ức chế điểm kiểm soát miễn dịch (CTLA-4 / PD-1) gỡ bỏ "phanh hãm" trên tế bào lympho T, giải phóng T CD8⁺ tiêu diệt tế bào ung thư!'
      },
      future: {
        title: 'Tương lai Hệ thống: In dấu Mô, Hệ Vi sinh vật (Microbiome) & Đa ô-mic (Multi-omics)',
        detail: 'Xem hệ miễn dịch là một cơ quan rộng lớn liên kết đa mô, gắn bó mật thiết với hệ vi sinh vật (microbiome) và sử dụng công nghệ đa ô-mic thông lượng cao + tin sinh học để xây dựng mạng lưới đa phân tử.'
      }
    };

    const er = eras[st.era];
    const blockOn = st.blockade === 'on';

    return `
      <div class="sim-box">
        <div class="sim-header">
          <div>
            <h3 style="margin:0;font-size:17px;">🏆 Phòng Đối chiếu Lược sử Nobel (Hình 1.9) &amp; Cơ chế Điểm kiểm soát Ung thư</h3>
            <div style="font-size:13px;color:var(--text-muted);margin-top:2px;">Khám phá đóng góp các nhà khoa học kinh điển và mô phỏng liệu pháp kiểm soát điểm kiểm soát miễn dịch</div>
          </div>
          <span class="sim-badge">${blockOn ? 'Gỡ phanh → T tấn công U' : 'Điểm kiểm soát khóa T'}</span>
        </div>

        <div class="sim-controls">
          <div class="control-group">
            <label>1. Chọn Nhánh / Mốc Khoa học (Hình 1.9)</label>
            <select onchange="Simulators.setVal('sim_history_checkpoint','era',this.value)">
              <option value="checkpoint" ${st.era === 'checkpoint' ? 'selected' : ''}>Allison &amp; Honjo: Điểm kiểm soát Ung thư</option>
              <option value="foundation" ${st.era === 'foundation' ? 'selected' : ''}>Metchnikoff, Behring, Bordet, Wright (Nền tảng)</option>
              <option value="ehrlich" ${st.era === 'ehrlich' ? 'selected' : ''}>Paul Ehrlich ("Viên đạn thần kỳ")</option>
              <option value="antibodies_b" ${st.era === 'antibodies_b' ? 'selected' : ''}>Porter/Edelman, Tonegawa, Milstein/Köhler (Ig &amp; B)</option>
              <option value="t_mhc_dc" ${st.era === 't_mhc_dc' ? 'selected' : ''}>Burnet, Miller, MHC, PRR/TLR, Steinman (T &amp; DC)</option>
              <option value="future" ${st.era === 'future' ? 'selected' : ''}>Tương lai: Microbiome &amp; Multi-omics</option>
            </select>
          </div>
          <div class="control-group">
            <label>2. Liệu pháp Kiểm soát Điểm kiểm soát (tr. 2 &amp; 17)</label>
            <select onchange="Simulators.setVal('sim_history_checkpoint','blockade',this.value)">
              <option value="on" ${st.blockade === 'on' ? 'selected' : ''}>Dùng Kháng thể phong bế Điểm kiểm soát (Gỡ phanh T)</option>
              <option value="off" ${st.blockade === 'off' ? 'selected' : ''}>Không can thiệp (Khối u lợi dụng phanh ức chế T)</option>
            </select>
          </div>
        </div>

        <div class="svg-stage">
          <svg viewBox="0 0 640 165" style="width:100%;max-width:640px;height:auto;" role="img" aria-label="Minh họa kiểm soát điểm kiểm soát miễn dịch">
            <rect x="4" y="4" width="632" height="157" rx="12" fill="var(--bg-main)" stroke="var(--border)" />
            <circle cx="155" cy="82" r="42" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="2.5" />
            <text x="155" y="78" text-anchor="middle" font-size="13" font-weight="800" fill="var(--primary)">Tế bào T CD8⁺</text>
            <text x="155" y="96" text-anchor="middle" font-size="11" fill="var(--text-muted)">${blockOn ? 'ĐƯỢC KÍCH HOẠT' : 'Bị ức chế (Ngủ yên)'}</text>

            <line x1="205" y1="82" x2="395" y2="82" stroke="${blockOn ? 'var(--success)' : 'var(--danger)'}" stroke-width="3.5" ${blockOn ? '' : 'stroke-dasharray="6,4"'} />
            <rect x="242" y="42" width="116" height="28" rx="7" fill="${blockOn ? 'var(--success-light)' : 'var(--danger-light)'}" stroke="${blockOn ? 'var(--success)' : 'var(--danger)'}" />
            <text x="300" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="${blockOn ? 'var(--success)' : 'var(--danger)'}">${blockOn ? 'Gỡ phanh Checkpoint!' : 'Khối u bấm phanh'}</text>

            <circle cx="465" cy="82" r="44" fill="${blockOn ? 'var(--danger-light)' : 'var(--purple-light)'}" stroke="${blockOn ? 'var(--danger)' : 'var(--purple)'}" stroke-width="2.5" ${blockOn ? 'stroke-dasharray="6,4"' : ''} />
            <text x="465" y="78" text-anchor="middle" font-size="13" font-weight="800" fill="${blockOn ? 'var(--danger)' : 'var(--purple)'}">Tế bào Khối u</text>
            <text x="465" y="96" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text-main)">${blockOn ? 'Bị tiêu diệt!' : 'Thoát miễn dịch'}</text>
          </svg>
        </div>

        <div class="callout pearl" style="margin-bottom:0;">
          <div class="callout-title">${er.title}</div>
          <p style="margin:0;">${er.detail}</p>
        </div>
      </div>
    `;
  }

  window.Simulators = { mount, render, setVal };
})();
