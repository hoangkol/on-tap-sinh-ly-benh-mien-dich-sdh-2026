/**
 * CỔNG ÔN TẬP SINH LÝ BỆNH – MIỄN DỊCH SĐH 2026 - ĐẠI HỌC Y DƯỢC TP.HCM (YDS)
 * Module: Mô phỏng Quy trình & Cơ chế Động SVG (ProcessAnimations)
 * Bao phủ đầy đủ toàn bộ các quá trình miễn dịch học được đề cập trong tài liệu học (tr. 1–19).
 */
(function () {
  'use strict';

  function svgHeader(stepBadge) {
    return `
      <defs>
        <marker id="paArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--primary)" />
        </marker>
        <marker id="paArrowTeal" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--accent)" />
        </marker>
        <marker id="paArrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--danger)" />
        </marker>
      </defs>
      <style>
        .pa-node { transition: opacity 0.25s ease, transform 0.25s ease; }
        .pa-dim { opacity: 0.44; }
        .pa-active-ring { stroke-dasharray: 5 3; animation: paDash 1.4s linear infinite; }
        .pa-flow { stroke-dasharray: 6 4; animation: paDash 1.1s linear infinite; }
        @keyframes paDash { to { stroke-dashoffset: -20; } }
      </style>
      <rect x="2" y="2" width="736" height="276" rx="14" fill="var(--bg-main)" stroke="var(--border)" stroke-width="1.5" />
      <rect x="14" y="12" width="320" height="24" rx="12" fill="var(--primary-light)" stroke="var(--primary)" stroke-width="1" />
      <text x="174" y="28" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">${stepBadge}</text>
    `;
  }

  function boxNode(x, y, w, h, title, line1, line2, state, tone) {
    const palette = {
      primary: { fill: 'var(--primary-light)', stroke: 'var(--primary)' },
      accent:  { fill: 'var(--accent-light)',  stroke: 'var(--accent)' },
      danger:  { fill: 'var(--danger-light)',  stroke: 'var(--danger)' },
      warning: { fill: 'var(--warning-light)', stroke: 'var(--warning)' },
      success: { fill: 'var(--success-light)', stroke: 'var(--success)' },
      purple:  { fill: 'var(--purple-light)',  stroke: 'var(--purple)' },
      neutral: { fill: 'var(--bg-card)',       stroke: 'var(--border)' }
    };
    const p = palette[tone] || palette.neutral;
    const isActive = state === 'active';
    const isDone = state === 'done';
    const cls = state === 'pending' ? 'pa-node pa-dim' : 'pa-node';
    const strokeW = isActive ? 2.6 : 1.5;
    const ring = isActive
      ? `<rect x="${x - 4}" y="${y - 4}" width="${w + 8}" height="${h + 8}" rx="13" fill="none" stroke="${p.stroke}" stroke-width="2" class="pa-active-ring" />`
      : '';
    const check = isDone
      ? `<circle cx="${x + w - 12}" cy="${y + 12}" r="8" fill="var(--success)" /><text x="${x + w - 12}" y="${y + 15.5}" text-anchor="middle" font-size="10" font-weight="800" fill="#fff">✓</text>`
      : '';
    return `
      <g class="${cls}">
        ${ring}
        <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${isActive || isDone ? p.fill : 'var(--bg-card)'}" stroke="${p.stroke}" stroke-width="${strokeW}" />
        ${check}
        <text x="${x + w / 2}" y="${y + 23}" text-anchor="middle" font-size="12" font-weight="800" fill="${p.stroke === 'var(--border)' ? 'var(--text-main)' : p.stroke}">${title}</text>
        <text x="${x + w / 2}" y="${y + 42}" text-anchor="middle" font-size="11" font-weight="600" fill="var(--text-main)">${line1}</text>
        ${line2 ? `<text x="${x + w / 2}" y="${y + 58}" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">${line2}</text>` : ''}
      </g>
    `;
  }

  function arrowLine(x1, y1, x2, y2, active, red) {
    const marker = red ? 'url(#paArrowRed)' : 'url(#paArrow)';
    const color = red ? 'var(--danger)' : (active ? 'var(--primary)' : 'var(--border)');
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${active ? 2.4 : 1.6}" ${active ? 'class="pa-flow"' : ''} marker-end="${marker}" />`;
  }

  function stepState(idx, targetIdx) {
    if (idx === targetIdx) return 'active';
    if (idx > targetIdx) return 'done';
    return 'pending';
  }

  const specs = {
    1: {
      title: 'Quá trình Huy động Hai Tầng Đáp ứng: Bẩm sinh (0–12h) → Thích nghi (1–5 ngày)',
      badge: '4 Giai đoạn • Bài 1 Mục 1–3 (Hình 1.1)',
      steps: [
        {
          label: 'Bước 1: Hàng rào Da & Niêm mạc (0h)',
          title: 'Tuyến phòng ngự đầu tiên: Biểu mô & Kháng sinh tự nhiên tại chỗ',
          explain: 'Hàng rào da và niêm mạc (kèm tế bào biểu mô, chất nhầy, lông chuyển và kháng sinh tự nhiên tại chỗ) ngăn chặn ngay vi sinh vật xâm nhập từ cửa ngõ hô hấp, tiêu hóa, da.',
          renderSvg: (s) => `
            <svg viewBox="0 0 740 280" class="proc-svg" role="img" aria-label="Tiến trình phối hợp miễn dịch bẩm sinh và thích nghi">
              ${svgHeader(`Bước ${s + 1} / 4 • Cuộc đua 2 Tầng Phòng thủ`)}
              ${boxNode(18, 54, 155, 74, '1. HÀNG RÀO DA/NIÊM', 'Ngăn xâm nhập tức thì', 'Kháng sinh tự nhiên tại chỗ', stepState(s, 0), 'accent')}
              ${arrowLine(175, 91, 198, 91, s >= 0)}
              ${boxNode(200, 54, 160, 74, '2. BẨM SINH (0–12h)', 'Thực bào, NK, Mast, DC', 'Bổ thể, Đông máu, Kinin', stepState(s, 1), 'warning')}
              ${arrowLine(362, 91, 386, 91, s >= 1)}
              ${boxNode(388, 54, 160, 74, '3. THÍCH NGHI (1–5d)', 'B → Tương bào (Ig)', 'T → T thành sự (CD4/CD8)', stepState(s, 2), 'primary')}
              ${arrowLine(550, 91, 574, 91, s >= 2)}
              ${boxNode(576, 54, 146, 74, '4. PHỐI HỢP HỖ TƯƠNG', 'Kháng thể Opson hóa', 'Giúp Thực bào diệt gọn', stepState(s, 3), 'success')}

              <rect x="18" y="148" width="342" height="110" rx="11" fill="${s <= 1 ? 'var(--accent-light)' : 'var(--bg-card)'}" stroke="var(--accent)" stroke-width="${s <= 1 ? 2.2 : 1.2}" />
              <text x="189" y="172" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--accent)">MIỄN DỊCH BẨM SINH (0 → 6 → 12 Giờ)</text>
              <text x="189" y="194" text-anchor="middle" font-size="11" fill="var(--text-main)">• Có trước trong tiến hóa, luôn sẵn có ngay lập tức</text>
              <text x="189" y="214" text-anchor="middle" font-size="11" fill="var(--text-main)">• Nhận diện CẤU TRÚC CHUNG của từng lớp vi khuẩn</text>
              <text x="189" y="234" text-anchor="middle" font-size="11" fill="var(--text-muted)">• Tạo điều kiện khởi phát miễn dịch thích nghi (qua APC)</text>

              <rect x="380" y="148" width="342" height="110" rx="11" fill="${s >= 2 ? 'var(--primary-light)' : 'var(--bg-card)'}" stroke="var(--primary)" stroke-width="${s >= 2 ? 2.2 : 1.2}" />
              <text x="551" y="172" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--primary)">MIỄN DỊCH THÍCH NGHI (1 → 3 → 5 Ngày)</text>
              <text x="551" y="194" text-anchor="middle" font-size="11" fill="var(--text-main)">• Xuất hiện sau, đòi hỏi hoạt hóa lympho đặc hiệu</text>
              <text x="551" y="214" text-anchor="middle" font-size="11" fill="var(--text-main)">• Nhận diện từng KHÁNG NGUYÊN riêng biệt &amp; có TRÍ NHỚ</text>
              <text x="551" y="234" text-anchor="middle" font-size="11" fill="var(--text-muted)">• Ví dụ: Kháng thể phủ vi khuẩn → tăng thực bào (Opson hóa)</text>
            </svg>`
        },
        {
          label: 'Bước 2: Tế bào & Protein Bẩm sinh (0–12h)',
          title: 'Thực bào, NK, Mast, Tế bào tua gai & Bổ thể kìm hãm ổ nhiễm sớm',
          explain: 'Nếu mầm bệnh vượt qua biểu mô, tế bào thực bào, NK, mast và protein huyết tương (bổ thể, hệ đông máu, kinin) phản ứng ngay trong 0–12 giờ để cô lập vi khuẩn và chuẩn bị kích hoạt thích nghi.',
          renderSvg: (s) => specs[1].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 3: Kích hoạt Lympho B & T (1–5 ngày)',
          title: 'Đáp ứng đặc hiệu: Tương bào tiết Kháng thể & T thành sự diệt mầm bệnh',
          explain: 'Sau 1–5 ngày, lympho B nhận diện kháng nguyên biệt hóa thành tương bào tiết kháng thể; tế bào tua gai (APC) hoạt hóa lympho T trở thành T thành sự (hành sự) tiêu diệt tác nhân đặc hiệu.',
          renderSvg: (s) => specs[1].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 4: Phối hợp Chặt chẽ Bẩm sinh – Thích nghi',
          title: 'Kháng thể + Thực bào + Bổ thể hợp lực thanh toán hoàn toàn vi khuẩn',
          explain: 'Hai hệ thống không tách rời: miễn dịch bẩm sinh tạo cầu nối khởi phát miễn dịch thích nghi, còn kháng thể của miễn dịch thích nghi lại gắn lên vi khuẩn (opson hóa) để đại thực bào/bạch cầu trung tính của miễn dịch bẩm sinh nuốt và phá hủy nhanh gấp bội.',
          renderSvg: (s) => specs[1].steps[0].renderSvg(s)
        }
      ]
    },

    2: {
      title: 'Phân công Nhiệm vụ Dịch thể vs Tế bào & Cơ chế Bảo vệ Chủ động / Thụ động',
      badge: '4 Cơ chế • Bài 2 Mục 4–5 (Hình 1.2)',
      steps: [
        {
          label: 'Bước 1: Vi sinh vật Ngoại bào → Dịch thể (B)',
          title: 'Kháng thể (Ig) ngăn xâm nhập, trung hòa độc tố & opson hóa thực bào',
          explain: 'Vi khuẩn ngoại bào và độc tố bị kháng thể do tương bào tiết ra tóm bắt ở máu, mô, đường tiêu hóa và hô hấp. Kháng thể còn vận chuyển qua nhau thai bảo vệ thai nhi. Chú ý: B nhận diện protein, carbohydrat, acid nucleic và lipid.',
          renderSvg: (s) => `
            <svg viewBox="0 0 740 280" class="proc-svg" role="img" aria-label="Phân công Dịch thể và Tế bào">
              ${svgHeader(`Bước ${s + 1} / 4 • Vị trí VSV quyết định Vũ khí`)}
              ${boxNode(18, 54, 162, 74, '1. VSV NGOẠI BÀO', 'Lympho B → Tương bào', 'Tiết Kháng thể (Ig)', stepState(s, 0), 'primary')}
              ${boxNode(198, 54, 166, 74, '2. VK TRONG TÚI TB', 'Th (CD4⁺) tiết Cytokine', 'Hoạt hóa Đại thực bào', stepState(s, 1), 'warning')}
              ${boxNode(382, 54, 166, 74, '3. VIRUS / BÀO CHẤT', 'Tc (CD8⁺ / CTL)', 'Giết trực tiếp TB nhiễm', stepState(s, 2), 'danger')}
              ${boxNode(566, 54, 156, 74, '4. CHỦ ĐỘNG / THỤ', 'Vaccine → Trí nhớ', 'HBIG + Vaccine HBV', stepState(s, 3), 'success')}

              <rect x="18" y="148" width="346" height="110" rx="11" fill="${s <= 2 ? 'var(--primary-light)' : 'var(--bg-card)'}" stroke="var(--primary)" stroke-width="${s <= 2 ? 2 : 1.2}" />
              <text x="191" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">QUY TẮC PHÂN BIỆT B vs T (Tr. 4–6)</text>
              <text x="191" y="194" text-anchor="middle" font-size="11" fill="var(--text-main)">• Kháng thể KHÔNG vào được trong tế bào → Vô hiệu với nội bào</text>
              <text x="191" y="214" text-anchor="middle" font-size="11" fill="var(--text-main)">• Lympho B: Nhận biết Protein, Carbohydrat, Lipid, Acid nucleic</text>
              <text x="191" y="234" text-anchor="middle" font-size="11" fill="var(--text-muted)">• Lympho T: Chỉ nhận biết Peptide protein trình diện cùng MHC</text>

              <rect x="382" y="148" width="340" height="110" rx="11" fill="${s === 3 ? 'var(--success-light)' : 'var(--bg-card)'}" stroke="var(--success)" stroke-width="${s === 3 ? 2 : 1.2}" />
              <text x="552" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="var(--success)">ỨNG DỤNG LÂM SÀNG (Tr. 6–7)</text>
              <text x="552" y="194" text-anchor="middle" font-size="11" fill="var(--text-main)">• Thụ động nhanh nhưng tạm thời (nhau thai, sữa mẹ, rắn cắn, SARS-CoV-2)</text>
              <text x="552" y="214" text-anchor="middle" font-size="11" fill="var(--text-main)">• Truyền tế bào T khác di truyền → Bị đào thải (KHÔNG khả thi)</text>
              <text x="552" y="234" text-anchor="middle" font-size="11" fill="var(--text-muted)">• Sơ sinh mẹ HBsAg(+): Phối hợp HBIG (thụ động) + Vaccine HBV (chủ động)</text>
            </svg>`
        },
        {
          label: 'Bước 2: Vi khuẩn trong túi thực bào → Th giúp đỡ',
          title: 'Th tiết Cytokine hoạt hóa Đại thực bào tiêu diệt mầm bệnh cố thủ',
          explain: 'Một số vi khuẩn nội bào tiến hóa để sống sót ngay trong túi thực bào của đại thực bào. Tế bào T giúp đỡ (Th) nhận diện peptide của chúng trên bề mặt đại thực bào và tiết cytokine kích thích đại thực bào tiêu hủy vi khuẩn bên trong.',
          renderSvg: (s) => specs[2].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 3: Virus / U trong bào chất → Tc gây độc',
          title: 'Tc (CD8+) giết trực tiếp bất kỳ tế bào nhiễm nào mang mầm bệnh bào chất',
          explain: 'Đối với virus nhân lên trong bào chất (kể cả ở các tế bào không thực bào) hoặc tế bào ung thư, tế bào T gây độc (Tc) nhận diện peptide trên bề mặt tế bào đó và giết trực tiếp tế bào bị nhiễm để xóa sổ ổ nhiễm.',
          renderSvg: (s) => specs[2].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 4: Chủ động vs Thụ động & Phối hợp HBIG',
          title: 'Tiêm vaccine tạo trí nhớ lâu dài; HBIG bảo vệ cấp thì khi vừa sinh',
          explain: 'Miễn dịch chủ động (nhiễm tự nhiên / vaccine) bền vững và có trí nhớ; miễn dịch thụ động (huyết thanh, kháng thể đơn dòng, kháng thể mẹ) bảo vệ tức thì nhưng ngắn hạn. Trẻ sơ sinh có mẹ nhiễm HBV cần phối hợp cả HBIG và vaccine HBV.',
          renderSvg: (s) => specs[2].steps[0].renderSvg(s)
        }
      ]
    },

    3: {
      title: 'Quá trình Chọn lọc Clone & Động học Đáp ứng Nguyên phát vs Thứ phát',
      badge: '4 Giai đoạn • Bài 3 Mục 6 (Hình 1.3 & 1.4)',
      steps: [
        {
          label: 'Bước 1: Tạo sẵn Hàng triệu Clone (Trước KN)',
          title: '0,5–1 × 10¹² lympho B & T mang thụ thể đa dạng hình thành TRƯỚC khi gặp KN',
          explain: 'Theo Giả thuyết chọn lọc clone (1950), danh mục thụ thể đa dạng được tạo sẵn trong cơ quan trung ương từ trước khi cơ thể tiếp xúc kháng nguyên; mỗi tế bào chỉ mang một thụ thể duy nhất (~1.000–10.000 tế bào đặc hiệu cho mỗi kháng nguyên).',
          renderSvg: (s) => `
            <svg viewBox="0 0 740 280" class="proc-svg" role="img" aria-label="Chọn lọc clone và trí nhớ miễn dịch">
              ${svgHeader(`Bước ${s + 1} / 4 • Chọn lọc Clone & Trí nhớ`)}
              ${boxNode(18, 54, 158, 74, '1. TẠO SẴN CLONE', 'Hàng triệu clone đa dạng', 'Có TRƯỚC khi gặp KN', stepState(s, 0), 'accent')}
              ${arrowLine(178, 91, 200, 91, s >= 0)}
              ${boxNode(202, 54, 162, 74, '2. CHỌN LỌC BỞI KN', 'Antigen X chọn clone X', 'Nguyên phát: 1–3 tuần', stepState(s, 1), 'primary')}
              ${arrowLine(366, 91, 388, 91, s >= 1)}
              ${boxNode(390, 54, 162, 74, '3. TẾ BÀO TRÍ NHỚ', 'Tái gặp X → Thứ phát', 'Chỉ 2–7 ngày (Rất cao!)', stepState(s, 2), 'success')}
              ${arrowLine(554, 91, 576, 91, s >= 2)}
              ${boxNode(578, 54, 144, 74, '4. DUNG NẠP BẢN THÂN', 'Không đánh kháng nguyên', 'Thất bại → Bệnh TỰ MIỄN', stepState(s, 3), 'danger')}

              <rect x="18" y="148" width="346" height="110" rx="11" fill="${s === 1 ? 'var(--primary-light)' : 'var(--bg-card)'}" stroke="var(--primary)" stroke-width="${s === 1 ? 2 : 1.2}" />
              <text x="191" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">ĐÁP ỨNG NGUYÊN PHÁT (Antigen X lần 1 hoặc Y mới)</text>
              <text x="191" y="194" text-anchor="middle" font-size="11" fill="var(--text-main)">• Xuất phát từ Tế bào Naïve → Thời gian trễ 1–3 tuần</text>
              <text x="191" y="214" text-anchor="middle" font-size="11" fill="var(--text-main)">• Nồng độ kháng thể thấp hơn và giảm dần theo thời gian</text>
              <text x="191" y="234" text-anchor="middle" font-size="11" fill="var(--text-muted)">• Để lại Tế bào trí nhớ (cơ sở khoa học của Tiêm chủng)</text>

              <rect x="382" y="148" width="340" height="110" rx="11" fill="${s === 2 ? 'var(--success-light)' : 'var(--bg-card)'}" stroke="var(--success)" stroke-width="${s === 2 ? 2 : 1.2}" />
              <text x="552" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="var(--success)">ĐÁP ỨNG THỨ PHÁT (Tái tiếp xúc Antigen X)</text>
              <text x="552" y="194" text-anchor="middle" font-size="11" fill="var(--text-main)">• Hoạt hóa Tế bào Trí nhớ sẵn có → Chỉ mất 2–7 ngày</text>
              <text x="552" y="214" text-anchor="middle" font-size="11" fill="var(--text-main)">• Hiệu giá kháng thể tăng vọt mạnh mẽ, chất lượng cao hơn</text>
              <text x="552" y="234" text-anchor="middle" font-size="11" fill="var(--text-muted)">• Tiêm X + Y lần 2: X là thứ phát, Y vẫn là nguyên phát (Đặc hiệu)</text>
            </svg>`
        },
        {
          label: 'Bước 2: Chọn lọc bởi Kháng nguyên X (1–3 tuần)',
          title: 'Kháng nguyên X chọn lọc clone X từ tế bào naïve → Đáp ứng nguyên phát',
          explain: 'Khi Antigen X xâm nhập lần đầu, chỉ ~1.000–10.000 tế bào lympho mang thụ thể khớp X được hoạt hóa nhân lên thành clone lớn, biệt hóa thành tương bào tiết Anti-X (1–3 tuần) và tạo quần thể tế bào B trí nhớ.',
          renderSvg: (s) => specs[3].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 3: Tái kích thích X + Y (2–7 ngày vs Nguyên phát)',
          title: 'Trí nhớ miễn dịch phản ứng cực nhanh với X nhưng hoàn toàn đặc hiệu với Y mới',
          explain: 'Khi tiêm lại Antigen X kèm Antigen Y mới hoàn toàn ở tuần 5–6: tế bào trí nhớ Anti-X bùng nổ đáp ứng thứ phát trong 2–7 ngày với hiệu giá cực đại, còn Anti-Y chỉ đi từ tế bào naïve chậm và thấp — chứng minh đồng thời Trí nhớ và Tính đặc hiệu.',
          renderSvg: (s) => specs[3].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 4: Dung nạp bản thân & Bệnh tự miễn',
          title: 'Hệ miễn dịch cùng tồn tại với kháng nguyên bản thân; thất bại → Tự miễn',
          explain: 'Khả năng không phản ứng với kháng nguyên của chính vật chủ gọi là dung nạp miễn dịch. Nếu dung nạp bản thân bị phá vỡ, cơ thể tạo tự kháng thể và tế bào T tự phản ứng gây bệnh lý tự miễn.',
          renderSvg: (s) => specs[3].steps[0].renderSvg(s)
        }
      ]
    },

    4: {
      title: 'Quá trình Trưởng thành Lympho (Tủy xương / Tuyến ức) & Trình diện Kháng nguyên',
      badge: '4 Chặng • Bài 4 Mục 7–8 (Hình 1.5 & 1.6)',
      steps: [
        {
          label: 'Bước 1: Sinh trưởng tại Trung ương (B ở Tủy, T ở Tuyến ức)',
          title: 'Nguồn gốc chung từ tế bào đầu dòng tủy xương → Phân nhánh trưởng thành',
          explain: 'Tất cả lympho đều xuất phát từ tủy xương: dòng B trưởng thành ngay tại Tủy xương, còn dòng T đi lên Tuyến ức (Thymus) để được huấn luyện chọn lọc trở thành T trưởng thành.',
          renderSvg: (s) => `
            <svg viewBox="0 0 740 280" class="proc-svg" role="img" aria-label="Quá trình trưởng thành lympho và APC">
              ${svgHeader(`Bước ${s + 1} / 4 • Trưởng thành & APC`)}
              ${boxNode(18, 54, 158, 74, '1. TRUNG ƯƠNG', 'B trưởng thành: Tủy xương', 'T trưởng thành: Tuyến ức', stepState(s, 0), 'accent')}
              ${arrowLine(178, 91, 200, 91, s >= 0)}
              ${boxNode(202, 54, 162, 74, '2. TẾ BÀO NAÏVE', 'Lưu hành ngoại biên', 'Không gặp KN → Apoptosis', stepState(s, 1), 'warning')}
              ${arrowLine(366, 91, 388, 91, s >= 1)}
              ${boxNode(390, 54, 162, 74, '3. APC & ĐỒNG KÍCH', 'DC mạnh nhất (Tín hiệu 2)', 'FDC hoạt hóa B tại mầm', stepState(s, 2), 'primary')}
              ${arrowLine(554, 91, 576, 91, s >= 2)}
              ${boxNode(578, 54, 144, 74, '4. BIỆT HÓA CD', 'Tương bào về tủy xương', 'T nhớ <5% → >50% (Lớn)', stepState(s, 3), 'success')}

              <rect x="18" y="148" width="346" height="110" rx="11" fill="${s === 2 ? 'var(--primary-light)' : 'var(--bg-card)'}" stroke="var(--primary)" stroke-width="${s === 2 ? 2 : 1.2}" />
              <text x="191" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">CẦU NỐI BẨM SINH – THÍCH NGHI (Tr. 13–14)</text>
              <text x="191" y="194" text-anchor="middle" font-size="11" fill="var(--text-main)">• Tế bào tua gai (DC): Bắt KN da/niêm → Hạch trình diện T</text>
              <text x="191" y="214" text-anchor="middle" font-size="11" fill="var(--text-main)">• Biểu hiện nhiều yếu tố đồng kích thích (Tín hiệu 2) → Mạnh nhất!</text>
              <text x="191" y="234" text-anchor="middle" font-size="11" fill="var(--text-muted)">• Chú ý FDC ở trung tâm mầm nang hạch trình diện KN cho LYMPHO B</text>

              <rect x="382" y="148" width="340" height="110" rx="11" fill="${s === 3 ? 'var(--success-light)' : 'var(--bg-card)'}" stroke="var(--success)" stroke-width="${s === 3 ? 2 : 1.2}" />
              <text x="552" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="var(--success)">ĐỊNH DANH PHÂN TỬ CD &amp; SỐ PHẬN (Tr. 10–13)</text>
              <text x="552" y="194" text-anchor="middle" font-size="11" fill="var(--text-main)">• T CD4⁺: T giúp đỡ (Th) + T điều hòa (Treg ức chế tự miễn)</text>
              <text x="552" y="214" text-anchor="middle" font-size="11" fill="var(--text-main)">• T CD8⁺: T gây độc (Tc) • Tương bào non về tủy sống nhiều năm</text>
              <text x="552" y="234" text-anchor="middle" font-size="11" fill="var(--text-muted)">• T nhớ tăng theo tuổi: &lt;5% ở sơ sinh → &gt;50% ở người lớn</text>
            </svg>`
        },
        {
          label: 'Bước 2: Lưu hành Naïve & Thay mới bằng Apoptosis',
          title: 'Tế bào naïve tuần hoàn nhiều tháng; nếu không gặp KN sẽ tự chết theo chương trình',
          explain: 'Tế bào naïve đã mang thụ thể đặc hiệu nhưng chưa hoạt động hành sự; chúng di chuyển giữa các cơ quan lympho ngoại biên nhiều tháng. Nếu không gặp đúng kháng nguyên đặc hiệu, chúng apoptosis để nhường chỗ cho tế bào mới từ trung ương.',
          renderSvg: (s) => specs[4].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 3: Trình diện Kháng nguyên qua Tế bào Tua gai (APC)',
          title: 'Tế bào tua gai cung cấp đồng thời Peptide-MHC & Yếu tố đồng kích thích (Tín hiệu 2)',
          explain: 'Nằm ở cửa ngõ da–niêm, tế bào tua gai bắt protein lạ, di chuyển về hạch bạch huyết trình diện cho T kèm mật độ cao yếu tố đồng kích thích. Trong khi đó, FDC ở trung tâm mầm nang bạch huyết trình diện kháng nguyên để hoạt hóa B.',
          renderSvg: (s) => specs[4].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 4: Phân chia Hành sự vs Trí nhớ lâu dài',
          title: 'T hành sự đời sống ngắn; Plasma blast về tủy sống nhiều năm; T nhớ >50% ở người lớn',
          explain: 'Sau khi biệt hóa, T hành sự đến ổ nhiễm và chết khi hết kháng nguyên; một số plasma blast dòng B trở về tủy xương thành tương bào trường tồn; tế bào trí nhớ tồn tại nhiều năm giúp tỷ lệ T nhớ từ <5% lúc sơ sinh lên >50% khi trưởng thành.',
          renderSvg: (s) => specs[4].steps[0].renderSvg(s)
        }
      ]
    },

    5: {
      title: 'Tuần hoàn Lympho qua HEV & Năm Giai đoạn Đáp ứng Miễn dịch Thích nghi',
      badge: '5 Giai đoạn • Bài 5 Mục 9–11 (Hình 1.7 & 1.8)',
      steps: [
        {
          label: 'Bước 1: Tuần hoàn vào Hạch qua HEV & Nhận diện KN',
          title: 'T naïve xuyên Tiểu tĩnh mạch nội mô cao (HEV) nhờ Chemokine & Kết dính',
          explain: 'Từ động mạch, tế bào T naïve gắn với tế bào nội mô tại tiểu tĩnh mạch nội mô cao (HEV) dưới tác động của chemokine và phân tử kết dính để vào vùng T của hạch bạch huyết và thực hiện giai đoạn 1: Nhận diện kháng nguyên (Ngày 0–2).',
          renderSvg: (s) => `
            <svg viewBox="0 0 740 280" class="proc-svg" role="img" aria-label="Di chuyển qua HEV và 5 giai đoạn đáp ứng thích nghi">
              ${svgHeader(`Bước ${s + 1} / 5 • Tuần hoàn HEV & 5 Pha`)}
              ${boxNode(16, 54, 132, 74, '1. NHẬN DIỆN KN', 'T naïve qua HEV', 'Vào vùng T hạch (0–2d)', stepState(s, 0), 'primary')}
              ${arrowLine(150, 91, 164, 91, s >= 0)}
              ${boxNode(166, 54, 132, 74, '2. HOẠT HÓA (7d)', 'Nhân lên clone', 'Biệt hóa Tương bào/T', stepState(s, 1), 'accent')}
              ${arrowLine(300, 91, 314, 91, s >= 1)}
              ${boxNode(316, 54, 132, 74, '3. THẢI TRỪ KN', 'Thoát hạch ly tâm', 'Tới mô viêm + Ig dịch thể', stepState(s, 2), 'success')}
              ${arrowLine(450, 91, 464, 91, s >= 2)}
              ${boxNode(466, 54, 132, 74, '4. THU HẸP (14d)', 'Hết KN kích thích', 'Apoptosis (Homeostasis)', stepState(s, 3), 'danger')}
              ${arrowLine(600, 91, 614, 91, s >= 3)}
              ${boxNode(616, 54, 108, 74, '5. TRÍ NHỚ', 'TB nhớ sống sót', 'Sẵn sàng tái nhiễm', stepState(s, 4), 'purple')}

              <rect x="16" y="148" width="708" height="110" rx="11" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1.4" />
              <text x="370" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">LỘ TRÌNH TUẦN HOÀN TẾ BÀO LYMPHO T (Hình 1.7) &amp; ĐỘNG HỌC (Hình 1.8)</text>
              <text x="370" y="196" text-anchor="middle" font-size="11.2" fill="var(--text-main)">• Vào hạch: Động mạch → Tiểu tĩnh mạch nội mô cao (HEV) → Chemokin &amp; Phân tử kết dính → Vùng T hạch</text>
              <text x="370" y="218" text-anchor="middle" font-size="11.2" fill="var(--text-main)">• Ra mô bệnh: T hoạt hóa → Mạch bạch huyết ly tâm → Mạch máu → Mạch máu ngoại biên → Mô nhiễm trùng/viêm</text>
              <text x="370" y="240" text-anchor="middle" font-size="11.2" fill="var(--danger)">• Kết thúc đáp ứng: Hết kháng nguyên → Đa số tế bào hành sự chết theo chương trình (Apoptosis), giữ lại tế bào trí nhớ</text>
            </svg>`
        },
        {
          label: 'Bước 2: Hoạt hóa — Nhân lên Clone & Biệt hóa (~Ngày 7)',
          title: 'Clone đặc hiệu tăng sinh mạnh mẽ và biệt hóa thành tế bào hành sự',
          explain: 'Trong hạch (cùng lách và MALT), lympho được hoạt hóa tăng sinh cấp số nhân tạo đỉnh số lượng quanh ngày thứ 7 (Hình 1.8), biệt hóa thành tương bào sản xuất kháng thể và lympho T hành sự.',
          renderSvg: (s) => specs[5].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 3: Thoát Hạch Ly tâm → Máu → Thải trừ Kháng nguyên',
          title: 'T hành sự thoát mạch bạch huyết ly tâm tới mô viêm diệt ổ nhiễm',
          explain: 'Tế bào T hoạt hóa thoát khỏi hạch qua mạch bạch huyết ly tâm vào máu, xuyên mạch ngoại biên ưu tiên vào đúng mô nhiễm trùng; kết hợp miễn dịch dịch thể (kháng thể) và tế bào để loại trừ hoàn toàn kháng nguyên (Ngày 7–14).',
          renderSvg: (s) => specs[5].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 4: Thu hẹp (Homeostasis) qua Apoptosis (~Ngày 14)',
          title: 'Hết kích thích kháng nguyên → Tế bào hành sự chết theo chương trình',
          explain: 'Để tránh tổn thương mô kéo dài và duy trì cân bằng nội môi (homeostasis), khi kháng nguyên được dọn sạch, các tế bào lympho hành sự đồng loạt trải qua apoptosis khiến đường cong tế bào hạ nhanh xuống.',
          renderSvg: (s) => specs[5].steps[0].renderSvg(s)
        },
        {
          label: 'Bước 5: Quần thể Tế bào Trí nhớ Còn sống sót',
          title: 'Duy trì trí nhớ miễn dịch lâu dài cho những lần tái nhiễm sau',
          explain: 'Một phần nhỏ tế bào B và T sau chọn lọc tồn tại lâu dài ở trạng thái tế bào trí nhớ (mức nền cao hơn trước nhiễm), bảo đảm đáp ứng thứ phát cực nhanh khi gặp lại cùng vi sinh vật.',
          renderSvg: (s) => specs[5].steps[0].renderSvg(s)
        }
      ]
    },

    6: {
      title: 'Dòng chảy Lịch sử Khám phá & Tương lai Miễn dịch học Hệ thống',
      badge: '4 Kỷ nguyên • Bài 6 Mục 12 (Hình 1.9)',
      steps: [
        {
          label: 'Kỷ nguyên 1: Thực bào vs Huyết thanh & Cầu nối Bổ thể',
          title: 'Metchnikoff (Thực bào) + Behring (Kháng độc tố) + Bordet/Wright (Bổ thể & Opson hóa)',
          explain: 'Khởi đầu phân đôi tế bào vs dịch thể được nối lại nhờ phát hiện bổ thể và hiện tượng opson hóa; Ehrlich đề xuất thuyết chuỗi bên và ước mơ "viên đạn thần kỳ"; Richet cảnh báo mặt trái qua sốc phản vệ.',
          renderSvg: (s) => `
            <svg viewBox="0 0 740 280" class="proc-svg" role="img" aria-label="Dòng chảy lịch sử và triển vọng miễn dịch học">
              ${svgHeader(`Bước ${s + 1} / 4 • Từ Thực bào đến Sinh học Hệ thống`)}
              ${boxNode(18, 54, 158, 74, '1. NỀN TẢNG (1880–1910)', 'Metchnikoff (Thực bào)', 'Behring • Ehrlich • Bordet', stepState(s, 0), 'warning')}
              ${arrowLine(178, 91, 200, 91, s >= 0)}
              ${boxNode(202, 54, 162, 74, '2. KHÁNG THỂ & B', 'Porter/Edelman (Cấu trúc)', 'Tonegawa (Gen) • Milstein', stepState(s, 1), 'danger')}
              ${arrowLine(366, 91, 388, 91, s >= 1)}
              ${boxNode(390, 54, 162, 74, '3. T, MHC & CHECKPOINT', 'Burnet • MHC • Steinman', 'Allison & Honjo (Ung thư)', stepState(s, 2), 'primary')}
              ${arrowLine(554, 91, 576, 91, s >= 2)}
              ${boxNode(578, 54, 144, 74, '4. TƯƠNG LAI HỆ THỐNG', 'In dấu mô & Microbiome', 'Multi-omics → Magic bullet', stepState(s, 3), 'accent')}

              <rect x="18" y="148" width="346" height="110" rx="11" fill="${s === 2 ? 'var(--primary-light)' : 'var(--bg-card)'}" stroke="var(--primary)" stroke-width="${s === 2 ? 2 : 1.2}" />
              <text x="191" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">ĐỈNH CAO MIỄN DỊCH ĐƯƠNG ĐẠI (Tr. 16–17)</text>
              <text x="191" y="194" text-anchor="middle" font-size="11" fill="var(--text-main)">• Hạn chế MHC (Doherty &amp; Zinkernagel); PRR/TLR (Janeway, Hoffmann, Beutler)</text>
              <text x="191" y="214" text-anchor="middle" font-size="11" fill="var(--text-main)">• Tế bào tua gai (Steinman) nối bẩm sinh và thích nghi</text>
              <text x="191" y="234" text-anchor="middle" font-size="11" fill="var(--text-muted)">• Liệu pháp kiểm soát điểm kiểm soát ung thư (Allison &amp; Honjo)</text>

              <rect x="382" y="148" width="340" height="110" rx="11" fill="${s === 3 ? 'var(--accent-light)' : 'var(--bg-card)'}" stroke="var(--accent)" stroke-width="${s === 3 ? 2 : 1.2}" />
              <text x="552" y="172" text-anchor="middle" font-size="12" font-weight="800" fill="var(--accent)">TRIỂN VỌNG TƯƠNG LAI (Tr. 17)</text>
              <text x="552" y="194" text-anchor="middle" font-size="11" fill="var(--text-main)">• Cơ quan miễn dịch tích hợp, in dấu theo mô &amp; gắn với Microbiome</text>
              <text x="552" y="214" text-anchor="middle" font-size="11" fill="var(--text-main)">• Đa ô-mic thông lượng cao (Multi-omics) + Tin sinh học</text>
              <text x="552" y="234" text-anchor="middle" font-size="11" fill="var(--text-muted)">• Hiện thực hóa giấc mơ "Viên đạn thần kỳ" của Paul Ehrlich</text>
            </svg>`
        },
        {
          label: 'Kỷ nguyên 2: Hóa miễn dịch Kháng thể & Tế bào Lympho B',
          title: 'Cấu trúc Ig (Porter/Edelman), Tương bào (Fagraeus), Tái tổ hợp gen (Tonegawa) & Đơn dòng',
          explain: 'Hóa miễn dịch giải mã chính xác cấu trúc chuỗi nặng/nhẹ của kháng thể, cơ chế tái tổ hợp gen V(D)J tạo hàng triệu đặc hiệu (Tonegawa) và công nghệ hybridoma tạo kháng thể đơn dòng (Milstein & Köhler).',
          renderSvg: (s) => specs[6].steps[0].renderSvg(s)
        },
        {
          label: 'Kỷ nguyên 3: Tế bào T điều hòa trung tâm & Điểm kiểm soát Ung thư',
          title: 'Từ Chọn lọc clone (Burnet), MHC & Tế bào tua gai (Steinman) đến Allison & Honjo',
          explain: 'Lympho T được chứng minh là điều phối viên trung tâm (Th điều khiển B, thực bào, CTL), hiểu rõ cơ chế MHC, thụ thể bẩm sinh PRR/TLR và mở khóa liệu pháp ức chế điểm kiểm soát miễn dịch (CTLA-4/PD-1) chữa ung thư.',
          renderSvg: (s) => specs[6].steps[0].renderSvg(s)
        },
        {
          label: 'Kỷ nguyên 4: Hệ miễn dịch Khu vực, Microbiome & Đa ô-mic',
          title: 'Sinh học hệ thống hiện thực hóa "Viên đạn thần kỳ" của Paul Ehrlich',
          explain: 'Miễn dịch học tương lai kết hợp giải mã dấu ấn miễn dịch theo từng mô, tương tác với hệ vi sinh vật (microbiome) và công nghệ multi-omics thông lượng cao để phòng ngừa và trị liệu chính xác các bệnh miễn dịch rối loạn/suy yếu.',
          renderSvg: (s) => specs[6].steps[0].renderSvg(s)
        }
      ]
    }
  };

  const state = { lessonId: 1, step: 0, timer: null, playing: false };

  function stopAllTimers() {
    if (state.timer) {
      clearInterval(state.timer);
      state.timer = null;
    }
    state.playing = false;
  }

  function render(lessonId, container) {
    stopAllTimers();
    state.lessonId = Number(lessonId);
    state.step = 0;
    mountHtml(container);
  }

  function mountHtml(container) {
    const target = container || document.getElementById('animContainer');
    const sp = specs[state.lessonId];
    if (!target || !sp) return;
    const cur = sp.steps[state.step] || sp.steps[0];

    target.innerHTML = `
      <div class="proc-box">
        <div class="proc-header">
          <div>
            <span class="tag-pill" style="background:var(--accent-light);color:var(--accent);margin-bottom:4px;display:inline-block;">🎬 Cơ chế Động • ${sp.badge}</span>
            <h2 style="font-size:17.5px;margin:0;">${sp.title}</h2>
          </div>
          <div class="proc-controls">
            <button type="button" class="btn btn-outline" style="padding:6px 11px;font-size:12.5px;" onclick="ProcessAnimations.prev()">◀ Trước</button>
            <button type="button" class="btn ${state.playing ? 'btn-accent' : 'btn-primary'}" style="padding:6px 12px;font-size:12.5px;" onclick="ProcessAnimations.togglePlay()">
              ${state.playing ? '⏸ Tạm dừng' : '▶ Chạy tự động'}
            </button>
            <button type="button" class="btn btn-outline" style="padding:6px 11px;font-size:12.5px;" onclick="ProcessAnimations.next()">Tiếp ▶</button>
          </div>
        </div>

        <div class="pill-btn-group">
          ${sp.steps.map((st, idx) => `
            <button type="button" class="pill-btn ${idx === state.step ? 'active' : ''}" onclick="ProcessAnimations.go(${idx})">${st.label}</button>
          `).join('')}
        </div>

        <div class="svg-stage" style="margin:10px 0;">
          ${cur.renderSvg(state.step)}
        </div>

        <div class="callout pearl" style="margin-bottom:0;">
          <div class="callout-title">${cur.title}</div>
          <p style="margin:0;">${cur.explain}</p>
        </div>
      </div>
    `;
  }

  function go(idx) {
    const sp = specs[state.lessonId];
    if (!sp) return;
    state.step = ((idx % sp.steps.length) + sp.steps.length) % sp.steps.length;
    mountHtml();
  }

  function next() {
    go(state.step + 1);
  }

  function prev() {
    go(state.step - 1);
  }

  function togglePlay() {
    if (state.playing) {
      stopAllTimers();
      mountHtml();
    } else {
      state.playing = true;
      mountHtml();
      state.timer = setInterval(() => {
        const sp = specs[state.lessonId];
        if (!sp) return;
        state.step = (state.step + 1) % sp.steps.length;
        mountHtml();
      }, 2800);
    }
  }

  window.ProcessAnimations = { render, go, next, prev, togglePlay, stopAllTimers };
})();
