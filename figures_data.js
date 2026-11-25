// ==========================================================================
// ATLAS TOÀN BỘ 19 HÌNH & SƠ ĐỒ MÔN SINH LÝ BỆNH – MIỄN DỊCH (ĐC MIỄN DỊCH HỌC)
// Gồm:
//  • 9 Sơ đồ Nguyên lý Sách Giáo trình Tái tạo Vector Siêu nét (H1.1 -> H1.9)
//  • 10 Hình Đối chiếu Giải phẫu – Mô học – Tế bào – Phân tử (Wikimedia Commons)
//    với 14 ảnh mở gắn ghim tọa độ kiểm chứng trực quan & chú thích chi tiết
// ==========================================================================

window.IMMUNO_FIGURES = [
  // ========================================================================
  // 1. HÌNH 1.1 (BÀI 1, TR. 3): CÁC LOẠI ĐÁP ỨNG MIỄN DỊCH
  // ========================================================================
  {
    id: "H1.1",
    lessonId: 1,
    chapter: "Bài 1: Đại cương Miễn dịch học",
    page: "tr. 3",
    type: "svg",
    title: "Hình 1.1. Các loại đáp ứng miễn dịch (Bẩm sinh vs Thích nghi)",
    caption: "Tái tạo vector sơ đồ động học hai tầng phòng thủ: Miễn dịch bẩm sinh phản ứng tức thì trong 0–12 giờ đầu và Miễn dịch thích nghi kích hoạt chọn lọc sau 1–5 ngày.",
    note: "Bẫy phòng thi: Miễn dịch bẩm sinh (hàng rào niêm mạc, tế bào mast, thực bào, bổ thể, tế bào tua gai, NK) có trước trong tiến hóa, phản ứng tức thì (0–12 giờ) nhưng KHÔNG có trí nhớ bền vững; miễn dịch thích nghi (B → tương bào tiết kháng thể; T → T thành sự) chậm hơn (1–5 ngày) nhưng đặc hiệu từng kháng nguyên và có trí nhớ miễn dịch.",
    svg: `
      <svg viewBox="0 0 760 355" class="fig-svg" role="img" aria-label="Hình 1.1 Các loại đáp ứng miễn dịch">
        <defs>
          <marker id="arr11" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/>
          </marker>
          <marker id="arr11b" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#1d4ed8"/>
          </marker>
        </defs>
        <rect x="2" y="2" width="756" height="351" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

        <!-- Khung phân vùng 2 nhánh -->
        <rect x="14" y="14" width="292" height="278" rx="12" fill="#f0fdfa" stroke="#99f6e4" stroke-width="1.5"/>
        <rect x="316" y="14" width="430" height="278" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>

        <!-- Tiêu đề 2 nhánh -->
        <rect x="64" y="22" width="192" height="26" rx="13" fill="#0f766e"/>
        <text x="160" y="39" text-anchor="middle" font-size="12.5" font-weight="800" fill="#ffffff">Miễn dịch bẩm sinh</text>

        <rect x="430" y="22" width="204" height="26" rx="13" fill="#1d4ed8"/>
        <text x="532" y="39" text-anchor="middle" font-size="12.5" font-weight="800" fill="#ffffff">Miễn dịch thích nghi</text>

        <!-- Vi khuẩn xâm nhập & Hàng rào niêm mạc -->
        <text x="86" y="64" text-anchor="middle" font-size="11.5" font-weight="800" fill="#991b1b">Vi khuẩn</text>
        <g transform="translate(36,68)">
          <circle cx="14" cy="14" r="9" fill="#b45309" stroke="#78350f" stroke-width="1.5"/>
          <circle cx="8" cy="6" r="2.5" fill="#fde047"/><circle cx="22" cy="8" r="2.5" fill="#fde047"/><circle cx="15" cy="24" r="2.5" fill="#fde047"/>
          <circle cx="42" cy="24" r="8" fill="#991b1b" stroke="#450a0a" stroke-width="1.5"/>
          <circle cx="36" cy="18" r="2" fill="#fca5a5"/><circle cx="49" cy="28" r="2" fill="#fca5a5"/>
        </g>

        <!-- Hàng rào biểu mô niêm mạc -->
        <g transform="translate(116,68)">
          <rect x="0" y="10" width="22" height="28" rx="3" fill="#fde68a" stroke="#d97706"/>
          <rect x="24" y="10" width="22" height="28" rx="3" fill="#fde68a" stroke="#d97706"/>
          <rect x="48" y="10" width="22" height="28" rx="3" fill="#fde68a" stroke="#d97706"/>
          <rect x="72" y="10" width="22" height="28" rx="3" fill="#fde68a" stroke="#d97706"/>
          <path d="M5,10 L5,2 M11,10 L11,2 M17,10 L17,2 M29,10 L29,2 M35,10 L35,2 M53,10 L53,2 M77,10 L77,2" stroke="#b45309" stroke-width="1.5"/>
          <text x="47" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Hàng rào niêm mạc</text>
        </g>
        <path d="M 88,92 L 112,92" stroke="#991b1b" stroke-width="2" marker-end="url(#arr11)"/>

        <!-- Các thành phần Bẩm sinh -->
        <!-- Tế bào mast -->
        <g transform="translate(46,142)">
          <circle cx="24" cy="22" r="20" fill="#e9d5ff" stroke="#7e22ce" stroke-width="1.8"/>
          <circle cx="18" cy="17" r="3" fill="#6b21a8"/><circle cx="29" cy="15" r="3" fill="#6b21a8"/>
          <circle cx="22" cy="29" r="3" fill="#6b21a8"/><circle cx="31" cy="27" r="3" fill="#6b21a8"/>
          <circle cx="15" cy="25" r="2.5" fill="#6b21a8"/>
          <text x="24" y="57" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Tế bào mast</text>
        </g>

        <!-- Thực bào -->
        <g transform="translate(120,142)">
          <circle cx="26" cy="22" r="22" fill="#86efac" stroke="#15803d" stroke-width="1.8"/>
          <path d="M20,16 Q26,8 34,16 Q32,26 24,24 Z" fill="#166534"/>
          <circle cx="18" cy="30" r="5" fill="#b45309"/>
          <text x="26" y="57" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Thực bào</text>
        </g>

        <!-- Tế bào tua gai -->
        <g transform="translate(212,130)">
          <path d="M24,6 L30,18 L44,14 L34,26 L46,38 L30,36 L26,48 L18,36 L4,38 L14,26 L6,14 L18,18 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="1.8"/>
          <circle cx="25" cy="26" r="6" fill="#9a3412"/>
          <text x="26" y="65" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Tế bào tua gai</text>
        </g>

        <!-- Bổ thể -->
        <g transform="translate(46,222)">
          <polygon points="8,10 22,4 28,16 14,22" fill="#cbd5e1" stroke="#475569" stroke-width="1.5"/>
          <polygon points="30,6 44,12 38,24 26,18" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>
          <circle cx="18" cy="32" r="5" fill="#64748b"/><circle cx="34" cy="32" r="6" fill="#475569"/>
          <text x="25" y="54" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Bổ thể</text>
        </g>

        <!-- Tế bào NK -->
        <g transform="translate(198,218)">
          <circle cx="26" cy="22" r="20" fill="#bae6fd" stroke="#0369a1" stroke-width="1.8"/>
          <ellipse cx="26" cy="22" rx="9" ry="7" fill="#075985"/>
          <circle cx="15" cy="14" r="2" fill="#0284c7"/><circle cx="37" cy="30" r="2" fill="#0284c7"/>
          <text x="26" y="58" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Tế bào NK</text>
        </g>

        <!-- NHÁNH THÍCH NGHI: B LYMPHOCYTE -->
        <g transform="translate(334,76)">
          <circle cx="18" cy="12" r="8" fill="#b45309" stroke="#78350f"/>
          <circle cx="32" cy="46" r="21" fill="#e0e7ff" stroke="#3730a3" stroke-width="2"/>
          <circle cx="32" cy="46" r="11" fill="#4338ca"/>
          <!-- Y-shaped BCR -->
          <path d="M16,28 L12,20 M12,20 L8,16 M12,20 L16,15" stroke="#1d4ed8" stroke-width="2" fill="none"/>
          <path d="M48,28 L52,20 M52,20 L48,15 M52,20 L56,16" stroke="#1d4ed8" stroke-width="2" fill="none"/>
          <path d="M32,67 L32,76 M32,76 L27,80 M32,76 L37,80" stroke="#1d4ed8" stroke-width="2" fill="none"/>
          <text x="32" y="94" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e3a8a">B lymphocyte</text>
        </g>
        <path d="M 398,120 Q 452,102 496,115" fill="none" stroke="#1d4ed8" stroke-width="2.6" marker-end="url(#arr11b)"/>

        <!-- B tăng sinh & Tương bào -->
        <g transform="translate(502,94)">
          <circle cx="24" cy="24" r="21" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
          <circle cx="24" cy="24" r="10" fill="#2563eb"/>
          <path d="M8,12 L4,4 M40,12 L44,4 M44,32 L52,36" stroke="#1d4ed8" stroke-width="2"/>
        </g>
        <path d="M 554,126 Q 584,136 604,136" fill="none" stroke="#0f172a" stroke-width="2.6" marker-end="url(#arr11)"/>

        <!-- Tương bào & Kháng thể -->
        <g transform="translate(612,72)">
          <text x="58" y="8" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1d4ed8">Kháng thể</text>
          <circle cx="28" cy="26" r="7" fill="#b45309"/>
          <path d="M16,22 L21,26 L16,30 M21,26 L12,26" stroke="#1d4ed8" stroke-width="2" fill="none"/>
          <circle cx="62" cy="26" r="7" fill="#b45309"/>
          <path d="M49,22 L54,26 L49,30 M54,26 L45,26" stroke="#1d4ed8" stroke-width="2" fill="none"/>
          <circle cx="96" cy="26" r="7" fill="#b45309"/>
          <path d="M83,22 L88,26 L83,30 M88,26 L79,26" stroke="#1d4ed8" stroke-width="2" fill="none"/>

          <ellipse cx="42" cy="64" rx="28" ry="20" fill="#93c5fd" stroke="#1e40af" stroke-width="2"/>
          <circle cx="30" cy="64" r="9" fill="#1e3a8a"/>
          <ellipse cx="86" cy="66" rx="26" ry="19" fill="#93c5fd" stroke="#1e40af" stroke-width="2"/>
          <circle cx="96" cy="66" r="9" fill="#1e3a8a"/>
          <text x="64" y="102" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0f172a">Tương bào</text>
        </g>

        <!-- NHÁNH THÍCH NGHI: T LYMPHOCYTE -->
        <g transform="translate(324,200)">
          <path d="M22,6 L28,16 L40,12 L32,24 L42,34 L28,32 L24,44 L16,32 L4,34 L12,24 L6,12 L16,16 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="1.8"/>
          <circle cx="23" cy="24" r="5" fill="#9a3412"/>
          <rect x="42" y="20" width="12" height="8" fill="#15803d"/>
          <text x="26" y="60" text-anchor="middle" font-size="10.5" font-weight="700" fill="#9a3412">APC trình diện</text>
        </g>
        <path d="M 380,224 L 414,224" stroke="#0f172a" stroke-width="2.4" marker-end="url(#arr11)"/>

        <g transform="translate(418,196)">
          <circle cx="24" cy="28" r="20" fill="#d1fae5" stroke="#047857" stroke-width="2"/>
          <circle cx="24" cy="28" r="10" fill="#065f46"/>
          <text x="24" y="66" text-anchor="middle" font-size="11.5" font-weight="800" fill="#065f46">T lymphocyte</text>
        </g>
        <path d="M 466,224 L 510,224" stroke="#0f172a" stroke-width="2.4" marker-end="url(#arr11)"/>

        <g transform="translate(514,196)">
          <circle cx="22" cy="26" r="19" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
          <circle cx="22" cy="26" r="9" fill="#14532d"/>
          <circle cx="52" cy="30" r="19" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
          <circle cx="52" cy="30" r="9" fill="#14532d"/>
        </g>
        <path d="M 588,224 L 622,224" stroke="#0f172a" stroke-width="2.6" marker-end="url(#arr11)"/>

        <g transform="translate(626,196)">
          <circle cx="48" cy="28" r="23" fill="#22c55e" stroke="#14532d" stroke-width="2"/>
          <circle cx="48" cy="28" r="10" fill="#052e16"/>
          <path d="M22,20 L10,20 M22,36 L10,36 M74,20 L86,20 M74,36 L86,36" stroke="#14532d" stroke-width="2.5"/>
          <text x="48" y="68" text-anchor="middle" font-size="11.5" font-weight="800" fill="#14532d">Tế bào T thành sự</text>
        </g>

        <!-- TRỤC THỜI GIAN DƯỚI CÙNG -->
        <line x1="60" y1="312" x2="720" y2="312" stroke="#0f172a" stroke-width="2"/>
        <!-- Dấu ngắt // -->
        <line x1="296" y1="302" x2="306" y2="322" stroke="#0f172a" stroke-width="2.5"/>
        <line x1="306" y1="302" x2="316" y2="322" stroke="#0f172a" stroke-width="2.5"/>

        <line x1="80" y1="306" x2="80" y2="318" stroke="#0f172a" stroke-width="2"/>
        <text x="80" y="334" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">0</text>
        <line x1="170" y1="306" x2="170" y2="318" stroke="#0f172a" stroke-width="2"/>
        <text x="170" y="334" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">6</text>
        <line x1="260" y1="306" x2="260" y2="318" stroke="#0f172a" stroke-width="2"/>
        <text x="260" y="334" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">12 Giờ</text>

        <line x1="370" y1="306" x2="370" y2="318" stroke="#0f172a" stroke-width="2"/>
        <text x="370" y="334" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">1</text>
        <line x1="510" y1="306" x2="510" y2="318" stroke="#0f172a" stroke-width="2"/>
        <text x="510" y="334" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">3</text>
        <line x1="660" y1="306" x2="660" y2="318" stroke="#0f172a" stroke-width="2"/>
        <text x="660" y="334" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">5 Ngày</text>

        <rect x="256" y="336" width="248" height="14" rx="4" fill="#ecfdf5"/>
        <text x="380" y="346" text-anchor="middle" font-size="11" font-weight="800" fill="#0f766e">Thời gian sau nhiễm ⟶</text>

        <!-- Số ghim tương tác -->
        <g class="svg-quiz-hide">
          <circle cx="160" cy="20" r="10" fill="#0f766e" stroke="#fff" stroke-width="1.5"/><text x="160" y="24" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">1</text>
          <circle cx="532" cy="20" r="10" fill="#1d4ed8" stroke="#fff" stroke-width="1.5"/><text x="532" y="24" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">2</text>
          <circle cx="688" cy="140" r="10" fill="#1d4ed8" stroke="#fff" stroke-width="1.5"/><text x="688" y="144" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">3</text>
          <circle cx="674" cy="224" r="10" fill="#15803d" stroke="#fff" stroke-width="1.5"/><text x="674" y="228" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">4</text>
        </g>
      </svg>
    `,
    legends: [
      { n: 1, title: "Miễn dịch bẩm sinh (0–12 giờ)", text: "Tầng phòng thủ sẵn có, gồm hàng rào da–niêm mạc, tế bào mast, thực bào, tế bào tua gai, tế bào NK và bổ thể huyết tương — ngăn chặn nhanh ngay khi vi khuẩn xâm nhập." },
      { n: 2, title: "Miễn dịch thích nghi (1–5 ngày)", text: "Kích hoạt chậm hơn vì cần trình diện kháng nguyên, chọn lọc và nhân lên dòng lympho B và lympho T đặc hiệu; hai hệ thống phối hợp chặt chẽ (ví dụ kháng thể bao phủ vi khuẩn giúp thực bào dễ hơn)." },
      { n: 3, title: "Nhánh Dịch thể (Lympho B → Tương bào → Kháng thể)", text: "B lymphocyte nhận diện trực tiếp kháng nguyên vi khuẩn ngoại bào, biệt hóa thành tương bào tiết kháng thể trung hòa." },
      { n: 4, title: "Nhánh Tế bào (APC → Lympho T → T thành sự)", text: "Tế bào tua gai (APC) trình diện mảnh kháng nguyên cho T lymphocyte biệt hóa thành tế bào T thành sự/hành sự." }
    ]
  },

  // ========================================================================
  // 2. HÌNH 1.2 (BÀI 1, TR. 5): CÁC LOẠI ĐÁP ỨNG MIỄN DỊCH THÍCH NGHI
  // ========================================================================
  {
    id: "H1.2",
    lessonId: 2,
    chapter: "Bài 1: Đại cương Miễn dịch học",
    page: "tr. 5",
    type: "svg",
    title: "Hình 1.2. Các loại đáp ứng miễn dịch thích nghi (Dịch thể vs Trung gian Tế bào)",
    caption: "Ma trận 3 nhánh × 4 tầng đối chiếu vị trí vi sinh vật (Ngoại bào • Trong túi thực bào • Trong bào chất), loại lympho đáp ứng, cơ chế và chức năng cuối cùng.",
    note: "Ghi nhớ cốt lõi (Câu lượng giá 5 tr. 19): Kháng thể do lympho B tiết ra chỉ diệt được vi sinh vật NGOẠI BÀO và trung hòa độc tố. Một khi vi sinh vật đã vào NỘI BÀO (trong túi thực bào của đại thực bào hoặc trong bào chất tế bào nhiễm virus/u), kháng thể không còn tác dụng mà phải do tế bào lympho T (Th hoạt hóa đại thực bào; Tc giết trực tiếp tế bào nhiễm).",
    svg: `
      <svg viewBox="0 0 760 440" class="fig-svg" role="img" aria-label="Hình 1.2 Các loại đáp ứng miễn dịch thích nghi">
        <defs>
          <marker id="arr12" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a"/>
          </marker>
        </defs>
        <rect x="2" y="2" width="756" height="436" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

        <!-- Tiêu đề cột -->
        <rect x="148" y="14" width="184" height="36" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
        <text x="240" y="30" text-anchor="middle" font-size="12" font-weight="800" fill="#1e3a8a">Miễn dịch</text>
        <text x="240" y="44" text-anchor="middle" font-size="12" font-weight="800" fill="#1e3a8a">dịch thể</text>

        <rect x="348" y="14" width="396" height="36" rx="8" fill="#d1fae5" stroke="#0f766e" stroke-width="1.5"/>
        <text x="546" y="36" text-anchor="middle" font-size="12.5" font-weight="800" fill="#065f46">Miễn dịch qua trung gian tế bào</text>

        <!-- Đường phân cách -->
        <line x1="340" y1="54" x2="340" y2="424" stroke="#64748b" stroke-width="2"/>
        <line x1="544" y1="56" x2="544" y2="424" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>

        <!-- Nhãn hàng bên trái -->
        <g transform="translate(14,72)">
          <rect x="0" y="0" width="120" height="42" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
          <text x="60" y="25" text-anchor="middle" font-size="12" font-weight="800" fill="#0f172a">Vi sinh vật</text>
        </g>
        <g transform="translate(14,162)">
          <rect x="0" y="0" width="120" height="48" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
          <text x="60" y="20" text-anchor="middle" font-size="12" font-weight="800" fill="#0f172a">Lymphocyte</text>
          <text x="60" y="36" text-anchor="middle" font-size="12" font-weight="800" fill="#0f172a">đáp ứng</text>
        </g>
        <g transform="translate(14,262)">
          <rect x="0" y="0" width="120" height="42" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
          <text x="60" y="25" text-anchor="middle" font-size="12" font-weight="800" fill="#0f172a">Cơ chế</text>
        </g>
        <g transform="translate(14,352)">
          <rect x="0" y="0" width="120" height="48" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5"/>
          <text x="60" y="29" text-anchor="middle" font-size="12" font-weight="800" fill="#0f172a">Chức năng</text>
        </g>

        <!-- CỘT 1: MIỄN DỊCH DỊCH THỂ -->
        <g transform="translate(168,62)">
          <circle cx="52" cy="18" r="10" fill="#b45309" stroke="#78350f"/>
          <circle cx="94" cy="24" r="9" fill="#991b1b" stroke="#450a0a"/>
          <text x="72" y="50" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Vi sinh vật ngoại bào</text>
        </g>
        <g transform="translate(168,154)">
          <circle cx="72" cy="24" r="21" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
          <circle cx="72" cy="24" r="10" fill="#1e40af"/>
          <path d="M55,14 L48,8 M89,14 L96,8 M72,45 L72,53" stroke="#1d4ed8" stroke-width="2"/>
          <text x="72" y="64" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1d4ed8">Lymphocyte B</text>
        </g>
        <line x1="240" y1="224" x2="240" y2="244" stroke="#0f172a" stroke-width="2" marker-end="url(#arr12)"/>
        <g transform="translate(168,248)">
          <text x="72" y="12" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e3a8a">Kháng thể</text>
          <circle cx="88" cy="40" r="10" fill="#b45309"/>
          <path d="M54,32 L62,38 L54,44 M62,38 L46,38" stroke="#1d4ed8" stroke-width="2.5" fill="none"/>
          <path d="M74,24 L78,31 L84,26" stroke="#1d4ed8" stroke-width="2.5" fill="none"/>
          <path d="M68,52 L76,47" stroke="#1d4ed8" stroke-width="2.5"/>
        </g>
        <line x1="240" y1="316" x2="240" y2="338" stroke="#0f172a" stroke-width="2" marker-end="url(#arr12)"/>
        <rect x="158" y="344" width="164" height="72" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.8"/>
        <text x="240" y="366" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e3a8a">Ngăn chặn nhiễm trùng</text>
        <text x="240" y="384" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e3a8a">và thải trừ vi sinh vật</text>
        <text x="240" y="402" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e3a8a">ngoại bào</text>

        <!-- CỘT 2: TRUNG GIAN TẾ BÀO - NHÁNH TH -->
        <g transform="translate(362,56)">
          <circle cx="80" cy="24" r="24" fill="#86efac" stroke="#15803d" stroke-width="2"/>
          <ellipse cx="70" cy="20" rx="6" ry="3.5" fill="#14532d"/>
          <ellipse cx="89" cy="28" rx="6" ry="3.5" fill="#14532d"/>
          <ellipse cx="78" cy="36" rx="5" ry="3" fill="#14532d"/>
          <text x="80" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Vi khuẩn bị thực bào</text>
          <text x="80" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">sống trong đại thực bào</text>
        </g>
        <g transform="translate(362,154)">
          <circle cx="80" cy="22" r="20" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
          <circle cx="80" cy="22" r="9" fill="#92400e"/>
          <text x="80" y="58" text-anchor="middle" font-size="11.5" font-weight="800" fill="#92400e">Lymphocyte T</text>
          <text x="80" y="72" text-anchor="middle" font-size="11.5" font-weight="800" fill="#92400e">giúp đỡ Th</text>
        </g>
        <line x1="442" y1="229" x2="442" y2="246" stroke="#0f172a" stroke-width="2" marker-end="url(#arr12)"/>
        <g transform="translate(362,250)">
          <circle cx="62" cy="18" r="14" fill="#fde68a" stroke="#b45309" stroke-width="1.5"/>
          <circle cx="96" cy="14" r="3" fill="#d97706"/><circle cx="104" cy="20" r="3" fill="#d97706"/><circle cx="98" cy="26" r="3" fill="#d97706"/>
          <text x="115" y="14" font-size="9.5" font-weight="800" fill="#b45309">Cytokine</text>
          <circle cx="80" cy="54" r="18" fill="#4ade80" stroke="#15803d" stroke-width="2"/>
          <text x="80" y="85" text-anchor="middle" font-size="11" font-weight="800" fill="#15803d">Đại thực bào hoạt hóa</text>
        </g>
        <rect x="358" y="344" width="170" height="72" rx="10" fill="#ecfdf5" stroke="#0f766e" stroke-width="1.8"/>
        <text x="443" y="376" text-anchor="middle" font-size="11.5" font-weight="800" fill="#065f46">Thải trừ vi sinh vật</text>
        <text x="443" y="395" text-anchor="middle" font-size="11.5" font-weight="800" fill="#065f46">thực bào</text>

        <!-- CỘT 3: TRUNG GIAN TẾ BÀO - NHÁNH TC -->
        <g transform="translate(566,56)">
          <circle cx="80" cy="24" r="24" fill="#fef3c7" stroke="#9a3412" stroke-width="2"/>
          <circle cx="70" cy="20" r="6" fill="#7c2d12"/><circle cx="90" cy="28" r="6" fill="#7c2d12"/>
          <text x="80" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Vi sinh vật nội bào</text>
          <text x="80" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">(virus) nhân lên trong TB</text>
        </g>
        <g transform="translate(566,154)">
          <circle cx="80" cy="22" r="20" fill="#bfdbfe" stroke="#0369a1" stroke-width="2"/>
          <circle cx="80" cy="22" r="9" fill="#0c4a6e"/>
          <circle cx="90" cy="18" r="2" fill="#dc2626"/><circle cx="92" cy="26" r="2" fill="#dc2626"/>
          <text x="80" y="58" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0369a1">Lymphocyte</text>
          <text x="80" y="72" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0369a1">độc tế bào Tc</text>
        </g>
        <line x1="646" y1="229" x2="646" y2="246" stroke="#0f172a" stroke-width="2" marker-end="url(#arr12)"/>
        <g transform="translate(566,250)">
          <circle cx="62" cy="24" r="14" fill="#bfdbfe" stroke="#0369a1" stroke-width="1.5"/>
          <circle cx="98" cy="40" r="18" fill="#fee2e2" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
          <line x1="90" y1="32" x2="106" y2="48" stroke="#dc2626" stroke-width="2.5"/>
          <line x1="106" y1="32" x2="90" y2="48" stroke="#dc2626" stroke-width="2.5"/>
          <text x="80" y="85" text-anchor="middle" font-size="11" font-weight="800" fill="#dc2626">Giết tế bào bị nhiễm</text>
        </g>
        <rect x="560" y="344" width="174" height="72" rx="10" fill="#fef2f2" stroke="#dc2626" stroke-width="1.8"/>
        <text x="647" y="376" text-anchor="middle" font-size="11.5" font-weight="800" fill="#991b1b">Giết tế bào bị nhiễm</text>
        <text x="647" y="395" text-anchor="middle" font-size="11.5" font-weight="800" fill="#991b1b">và tiêu diệt ổ nhiễm</text>

        <!-- Số ghim tương tác -->
        <g class="svg-quiz-hide">
          <circle cx="240" cy="14" r="10" fill="#1d4ed8" stroke="#fff" stroke-width="1.5"/><text x="240" y="18" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">1</text>
          <circle cx="442" cy="14" r="10" fill="#0f766e" stroke="#fff" stroke-width="1.5"/><text x="442" y="18" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">2</text>
          <circle cx="646" cy="14" r="10" fill="#dc2626" stroke="#fff" stroke-width="1.5"/><text x="646" y="18" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">3</text>
        </g>
      </svg>
    `,
    legends: [
      { n: 1, title: "Miễn dịch dịch thể (Lympho B → Kháng thể)", text: "Nhắm vào vi sinh vật NGOẠI BÀO và độc tố; nhận diện nhiều loại phân tử (protein, carbohydrat, acid nucleic, lipid); trung hòa, opson hóa và chuyển qua nhau thai." },
      { n: 2, title: "Miễn dịch tế bào – Nhánh T giúp đỡ (Th)", text: "Nhận diện peptide trình diện trên đại thực bào mang vi khuẩn nội bào trong túi thực bào → tiết cytokine hoạt hóa đại thực bào tiêu diệt vi khuẩn đã nuốt." },
      { n: 3, title: "Miễn dịch tế bào – Nhánh T gây độc (Tc / CTL)", text: "Nhận diện peptide trình diện bởi bất kỳ tế bào ký chủ nào mang vi sinh vật nội bào trong bào chất (như virus) hoặc tế bào u → giết trực tiếp tế bào nhiễm để xóa sổ ổ nhiễm." }
    ]
  },

  // ========================================================================
  // 3. HÌNH 1.3 (BÀI 1, TR. 8): CHỌN LỌC CLONE
  // ========================================================================
  {
    id: "H1.3",
    lessonId: 3,
    chapter: "Bài 1: Đại cương Miễn dịch học",
    page: "tr. 8",
    type: "svg",
    title: "Hình 1.3. Giả thuyết Chọn lọc Clone (Clonal Selection)",
    caption: "Tái tạo vector sơ đồ 4 bước: Các clone lympho mang thụ thể đa dạng được tạo ra SẴN ở cơ quan lympho trung ương trước khi gặp kháng nguyên; chính kháng nguyên X và Y chọn lọc clone đặc hiệu để nhân lên.",
    note: "Câu hỏi lượng giá 3 (tr. 19): Sự chọn lọc clone xảy ra khi tế bào lympho trưởng thành tương tác với KHÁNG NGUYÊN ĐẶC HIỆU (C). Chú ý: Thụ thể kháng nguyên phát triển ngẫu nhiên TRƯỚC khi tiếp xúc kháng nguyên.",
    svg: `
      <svg viewBox="0 0 760 440" class="fig-svg" role="img" aria-label="Hình 1.3 Chọn lọc clone">
        <defs>
          <marker id="arr13" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#1e293b"/>
          </marker>
        </defs>
        <rect x="2" y="2" width="756" height="436" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

        <!-- CỘT CHÚ THÍCH TRÁI (4 TẦNG) -->
        <g transform="translate(18,52)">
          <rect x="0" y="0" width="252" height="66" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.6"/>
          <text x="126" y="21" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Clone tế bào lympho với nhiều</text>
          <text x="126" y="38" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">loại receptor tạo ra từ tổ chức</text>
          <text x="126" y="55" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d4ed8">lympho trung ương</text>
        </g>

        <g transform="translate(18,142)">
          <rect x="0" y="0" width="252" height="72" rx="10" fill="#f0fdfa" stroke="#0f766e" stroke-width="1.6"/>
          <text x="126" y="20" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Clone tế bào lympho trưởng thành</text>
          <text x="126" y="37" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">đặc hiệu với nhiều kháng nguyên</text>
          <text x="126" y="54" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f766e">đi vào tổ chức bạch huyết</text>
        </g>

        <g transform="translate(18,238)">
          <rect x="0" y="0" width="252" height="68" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="1.6"/>
          <text x="126" y="22" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">Clone đặc hiệu với kháng nguyên</text>
          <text x="126" y="39" text-anchor="middle" font-size="11.5" font-weight="800" fill="#b45309">được hoạt hóa ("chọn lọc")</text>
          <text x="126" y="56" text-anchor="middle" font-size="11.5" font-weight="700" fill="#0f172a">bởi kháng nguyên</text>
        </g>

        <g transform="translate(18,334)">
          <rect x="0" y="0" width="252" height="68" rx="10" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.6"/>
          <text x="126" y="28" text-anchor="middle" font-size="11.5" font-weight="800" fill="#5b21b6">Đáp ứng miễn dịch đặc hiệu</text>
          <text x="126" y="48" text-anchor="middle" font-size="11.5" font-weight="800" fill="#5b21b6">với kháng nguyên xảy ra</text>
        </g>

        <!-- SƠ ĐỒ BÊN PHẢI -->
        <text x="432" y="24" text-anchor="middle" font-size="12" font-weight="800" fill="#0f172a">Lymphocyte đầu dòng</text>
        <circle cx="510" cy="24" r="16" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
        <circle cx="510" cy="24" r="8" fill="#475569"/>
        <text x="646" y="24" text-anchor="middle" font-size="12" font-weight="800" fill="#0f172a">Lymphocyte trưởng thành</text>

        <path d="M490,34 L388,60" stroke="#0f172a" stroke-width="1.8" marker-end="url(#arr13)"/>
        <path d="M510,42 L510,60" stroke="#0f172a" stroke-width="1.8" marker-end="url(#arr13)"/>
        <path d="M530,34 L636,60" stroke="#0f172a" stroke-width="1.8" marker-end="url(#arr13)"/>

        <!-- Tầng 1: 3 clone mang 3 loại receptor khác nhau -->
        <g transform="translate(360,64)">
          <circle cx="24" cy="22" r="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.8"/>
          <circle cx="24" cy="22" r="8" fill="#1e3a8a"/>
          <path d="M6,22 L0,22 M42,22 L48,22 M24,4 L24,-2" stroke="#1d4ed8" stroke-width="2.2"/>
        </g>
        <g transform="translate(486,64)">
          <circle cx="24" cy="22" r="18" fill="#d1fae5" stroke="#0f766e" stroke-width="1.8"/>
          <circle cx="24" cy="22" r="8" fill="#065f46"/>
          <rect x="-2" y="18" width="6" height="8" fill="#0f766e"/><rect x="44" y="18" width="6" height="8" fill="#0f766e"/>
        </g>
        <g transform="translate(614,64)">
          <circle cx="24" cy="22" r="18" fill="#f3e8ff" stroke="#7c3aed" stroke-width="1.8"/>
          <circle cx="24" cy="22" r="8" fill="#5b21b6"/>
          <path d="M2,16 A6,6 0 0 1 2,28 M46,16 A6,6 0 0 0 46,28" stroke="#7c3aed" stroke-width="2.2" fill="none"/>
        </g>

        <line x1="384" y1="112" x2="384" y2="146" stroke="#0f172a" stroke-width="1.8" marker-end="url(#arr13)"/>
        <line x1="510" y1="112" x2="510" y2="146" stroke="#0f172a" stroke-width="1.8" marker-end="url(#arr13)"/>
        <line x1="638" y1="112" x2="638" y2="146" stroke="#0f172a" stroke-width="1.8" marker-end="url(#arr13)"/>

        <!-- Tầng 2: Kháng nguyên X chọn clone 1; Kháng nguyên Y chọn clone 3 -->
        <g transform="translate(298,150)">
          <circle cx="24" cy="26" r="11" fill="#b45309" stroke="#78350f" stroke-width="1.5"/>
          <text x="24" y="54" text-anchor="middle" font-size="11.5" font-weight="800" fill="#9a3412">Kháng nguyên X</text>
          <line x1="36" y1="26" x2="62" y2="26" stroke="#b45309" stroke-width="2"/>
        </g>
        <g transform="translate(360,150)">
          <circle cx="24" cy="26" r="18" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
          <circle cx="24" cy="26" r="8" fill="#1e3a8a"/>
        </g>
        <g transform="translate(486,150)">
          <circle cx="24" cy="26" r="18" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
          <circle cx="24" cy="26" r="8" fill="#64748b"/>
          <text x="24" y="64" text-anchor="middle" font-size="10" font-weight="700" fill="#64748b">(Không gặp KN)</text>
        </g>
        <g transform="translate(614,150)">
          <circle cx="24" cy="26" r="18" fill="#f3e8ff" stroke="#7c3aed" stroke-width="2"/>
          <circle cx="24" cy="26" r="8" fill="#5b21b6"/>
        </g>
        <g transform="translate(676,150)">
          <polygon points="24,14 34,26 24,38 14,26" fill="#0f766e" stroke="#064e3b" stroke-width="1.5"/>
          <text x="24" y="54" text-anchor="middle" font-size="11.5" font-weight="800" fill="#065f46">Kháng nguyên Y</text>
          <line x1="12" y1="26" x2="-12" y2="26" stroke="#0f766e" stroke-width="2"/>
        </g>

        <line x1="384" y1="198" x2="384" y2="238" stroke="#1d4ed8" stroke-width="2.4" marker-end="url(#arr13)"/>
        <line x1="638" y1="198" x2="638" y2="238" stroke="#7c3aed" stroke-width="2.4" marker-end="url(#arr13)"/>

        <!-- Tầng 3: Clone được chọn tăng sinh -->
        <g transform="translate(342,244)">
          <circle cx="22" cy="26" r="17" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
          <circle cx="62" cy="26" r="17" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
          <circle cx="42" cy="48" r="15" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/>
        </g>
        <g transform="translate(596,244)">
          <circle cx="22" cy="26" r="17" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2"/>
          <circle cx="62" cy="26" r="17" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2"/>
          <circle cx="42" cy="48" r="15" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2"/>
        </g>

        <line x1="384" y1="308" x2="384" y2="338" stroke="#1d4ed8" stroke-width="2.4" marker-end="url(#arr13)"/>
        <line x1="638" y1="308" x2="638" y2="338" stroke="#7c3aed" stroke-width="2.4" marker-end="url(#arr13)"/>

        <!-- Tầng 4: Tương bào tiết Anti-X & Anti-Y -->
        <g transform="translate(328,342)">
          <ellipse cx="32" cy="22" rx="26" ry="17" fill="#60a5fa" stroke="#1e40af" stroke-width="2"/>
          <circle cx="22" cy="22" r="7" fill="#1e3a8a"/>
          <ellipse cx="80" cy="22" rx="26" ry="17" fill="#60a5fa" stroke="#1e40af" stroke-width="2"/>
          <circle cx="90" cy="22" r="7" fill="#1e3a8a"/>
          <circle cx="28" cy="56" r="8" fill="#b45309"/>
          <path d="M40,52 L48,56 L40,60 M48,56 L58,56" stroke="#1d4ed8" stroke-width="2.5" fill="none"/>
          <text x="64" y="84" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e3a8a">Kháng thể Anti-X</text>
        </g>
        <g transform="translate(582,342)">
          <ellipse cx="32" cy="22" rx="26" ry="17" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/>
          <circle cx="22" cy="22" r="7" fill="#4c1d95"/>
          <ellipse cx="80" cy="22" rx="26" ry="17" fill="#c4b5fd" stroke="#5b21b6" stroke-width="2"/>
          <circle cx="90" cy="22" r="7" fill="#4c1d95"/>
          <polygon points="94,48 102,56 94,64 86,56" fill="#0f766e"/>
          <path d="M72,52 L80,56 L72,60 M64,56 L80,56" stroke="#7c3aed" stroke-width="2.5" fill="none"/>
          <text x="58" y="84" text-anchor="middle" font-size="11.5" font-weight="800" fill="#5b21b6">Kháng thể Anti-Y</text>
        </g>

        <g class="svg-quiz-hide">
          <circle cx="270" cy="52" r="10" fill="#1d4ed8" stroke="#fff" stroke-width="1.5"/><text x="270" y="56" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">1</text>
          <circle cx="270" cy="142" r="10" fill="#0f766e" stroke="#fff" stroke-width="1.5"/><text x="270" y="146" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">2</text>
          <circle cx="270" cy="238" r="10" fill="#d97706" stroke="#fff" stroke-width="1.5"/><text x="270" y="242" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">3</text>
          <circle cx="270" cy="334" r="10" fill="#7c3aed" stroke="#fff" stroke-width="1.5"/><text x="270" y="338" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">4</text>
        </g>
      </svg>
    `,
    legends: [
      { n: 1, title: "Hình thành sẵn đa dạng thụ thể (Không phụ thuộc kháng nguyên)", text: "Ở người lớn có ~0,5–1 × 10¹² lympho B và T thuộc hàng triệu clone; mỗi clone phát triển sẵn thụ thể riêng tại cơ quan lympho trung ương trước khi gặp kháng nguyên." },
      { n: 2, title: "Di chuyển vào tổ chức bạch huyết ngoại biên", text: "Trước khi tiếp xúc chỉ có ~1.000–10.000 tế bào lympho đặc hiệu cho một kháng nguyên lưu hành tìm kiếm kháng nguyên." },
      { n: 3, title: "Chọn lọc bởi kháng nguyên đặc hiệu", text: "Kháng nguyên X chỉ chọn và hoạt hóa clone mang thụ thể Anti-X; Kháng nguyên Y chỉ chọn clone mang thụ thể Anti-Y (Giả thuyết chọn lọc clone thập niên 1950)." },
      { n: 4, title: "Tăng sinh & Biệt hóa tạo đáp ứng đặc hiệu", text: "Clone được chọn nhân lên ồ ạt, biệt hóa thành tương bào tiết lượng lớn kháng thể Anti-X hoặc Anti-Y (nguyên tắc tương tự áp dụng cho lympho T)." }
    ]
  },

  // ========================================================================
  // 4. HÌNH 1.4 (BÀI 1, TR. 9): ĐÁP ỨNG MIỄN DỊCH NGUYÊN PHÁT VÀ THỨ PHÁT
  // ========================================================================
  {
    id: "H1.4",
    lessonId: 3,
    chapter: "Bài 1: Đại cương Miễn dịch học",
    page: "tr. 9",
    type: "svg",
    title: "Hình 1.4. Đáp ứng miễn dịch nguyên phát và thứ phát (Chứng minh Trí nhớ & Đặc hiệu)",
    caption: "Tái tạo chính xác đồ thị trang 9 (vốn bị nhòe chữ trong bản scan): Mũi tiêm Antigen X lần 1 tạo đáp ứng nguyên phát (1–3 tuần) và tế bào B trí nhớ; khi tiêm Antigen X + Antigen Y ở tuần 5–6, đáp ứng thứ phát anti-X tăng vọt trong 2–7 ngày trong khi anti-Y chỉ là đáp ứng nguyên phát.",
    note: "Hai con số bắt buộc phải thuộc: Thời gian đáp ứng NGUYÊN PHÁT là 1–3 tuần; thời gian đáp ứng THỨ PHÁT là 2–7 ngày (nhanh hơn, mạnh hơn, chất lượng cao hơn). Thí nghiệm chứng minh đồng thời TRÍ NHỚ (anti-X thứ phát > nguyên phát) và TÍNH ĐẶC HIỆU (anti-Y vẫn là nguyên phát dù tiêm chung lần 2 với X).",
    svg: `
      <svg viewBox="0 0 760 390" class="fig-svg" role="img" aria-label="Hình 1.4 Đáp ứng miễn dịch nguyên phát và thứ phát">
        <defs>
          <marker id="arr14" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#dc2626"/>
          </marker>
        </defs>
        <rect x="2" y="2" width="756" height="386" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

        <!-- Trục tọa độ -->
        <line x1="76" y1="62" x2="76" y2="330" stroke="#0f172a" stroke-width="2.2"/>
        <line x1="76" y1="330" x2="718" y2="330" stroke="#0f172a" stroke-width="2.2"/>
        <text x="32" y="196" text-anchor="middle" font-size="12.5" font-weight="800" fill="#0f172a" transform="rotate(-90 32 196)">Hiệu giá kháng thể</text>

        <!-- Mốc tuần -->
        <line x1="205" y1="324" x2="205" y2="336" stroke="#0f172a" stroke-width="2"/><text x="205" y="354" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">2</text>
        <line x1="335" y1="324" x2="335" y2="336" stroke="#0f172a" stroke-width="2"/><text x="335" y="354" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">4</text>
        <line x1="465" y1="324" x2="465" y2="336" stroke="#0f172a" stroke-width="2"/><text x="465" y="354" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">6</text>
        <line x1="595" y1="324" x2="595" y2="336" stroke="#0f172a" stroke-width="2"/><text x="595" y="354" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">8</text>
        <line x1="705" y1="324" x2="705" y2="336" stroke="#0f172a" stroke-width="2"/><text x="705" y="354" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">10</text>
        <text x="115" y="372" text-anchor="middle" font-size="12.5" font-weight="800" fill="#0f172a">Tuần</text>

        <!-- Đường tiêm Antigen X lần 1 & Antigen X + Y lần 2 -->
        <line x1="142" y1="68" x2="142" y2="330" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
        <path d="M142,20 L142,56" stroke="#dc2626" stroke-width="4" marker-end="url(#arr14)"/>
        <text x="142" y="15" text-anchor="middle" font-size="12" font-weight="800" fill="#dc2626">Antigen X</text>

        <line x1="422" y1="68" x2="422" y2="330" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>
        <path d="M422,20 L422,56" stroke="#dc2626" stroke-width="4" marker-end="url(#arr14)"/>
        <text x="422" y="14" text-anchor="middle" font-size="12" font-weight="800" fill="#dc2626">Antigen X + Antigen Y</text>

        <!-- Đường nền Anti-Y (xanh lá) -->
        <path d="M 76,316 L 460,316 Q 515,316 540,262 Q 570,206 600,206 Q 635,206 668,288 L 718,298" fill="none" stroke="#15803d" stroke-width="3"/>
        <path d="M 460,316 Q 515,316 540,262 Q 570,206 600,206 Q 635,206 668,288 L 718,298 L 718,316 Z" fill="#bbf7d0" opacity="0.45"/>

        <!-- Đường Anti-X (xanh dương) -->
        <path d="M 76,304 L 165,304 Q 195,300 222,248 Q 248,200 272,200 Q 300,200 330,272 Q 348,294 432,294 Q 454,282 478,175 Q 505,82 548,82 Q 595,82 642,202 Q 672,256 718,266" fill="none" stroke="#1d4ed8" stroke-width="3.5"/>
        <path d="M 165,304 Q 195,300 222,248 Q 248,200 272,200 Q 300,200 330,272 Q 348,294 432,294 Q 454,282 478,175 Q 505,82 548,82 Q 595,82 642,202 Q 672,256 718,266 L 718,304 Z" fill="#dbeafe" opacity="0.42"/>

        <!-- Chú thích trong đồ thị -->
        <!-- Tế bào B naïve trước tiêm -->
        <text x="110" y="256" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">Tế bào B</text>
        <text x="110" y="270" text-anchor="middle" font-size="11" font-weight="700" fill="#0f172a">naïve</text>
        <circle cx="110" cy="288" r="11" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>

        <text x="276" y="72" text-anchor="middle" font-size="11.5" font-weight="700" fill="#1d4ed8">Tế bào B Anti-X</text>
        <circle cx="204" cy="68" r="10" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>
        <text x="276" y="98" text-anchor="middle" font-size="11.5" font-weight="700" fill="#15803d">Tế bào B Anti-Y</text>
        <circle cx="204" cy="94" r="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>

        <!-- Tương bào nguyên phát X -->
        <ellipse cx="298" cy="180" rx="18" ry="12" fill="#93c5fd" stroke="#1e40af" stroke-width="1.8"/>
        <text x="255" y="164" font-size="11" font-weight="700" fill="#1e3a8a">Tương bào</text>
        <text x="268" y="266" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e3a8a">Đáp ứng MD</text>
        <text x="268" y="281" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e3a8a">nguyên phát anti-X</text>
        <text x="268" y="295" text-anchor="middle" font-size="10.5" font-weight="700" fill="#475569">(1–3 tuần)</text>

        <!-- Tế bào B trí nhớ -->
        <circle cx="378" cy="264" r="12" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
        <text x="378" y="238" text-anchor="middle" font-size="11" font-weight="800" fill="#1d4ed8">Tế bào B</text>
        <text x="378" y="250" text-anchor="middle" font-size="11" font-weight="800" fill="#1d4ed8">trí nhớ</text>

        <!-- Đáp ứng thứ phát Anti-X -->
        <ellipse cx="628" cy="84" rx="22" ry="14" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2"/>
        <text x="668" y="84" font-size="11.5" font-weight="800" fill="#1e3a8a">Tương bào</text>
        <text x="548" y="144" text-anchor="middle" font-size="12" font-weight="800" fill="#1e3a8a">Đáp ứng MD</text>
        <text x="548" y="160" text-anchor="middle" font-size="12" font-weight="800" fill="#1e3a8a">thứ phát anti-X</text>
        <text x="548" y="176" text-anchor="middle" font-size="11" font-weight="800" fill="#1d4ed8">(2–7 ngày • Cao gấp nhiều lần!)</text>

        <!-- Đáp ứng nguyên phát Anti-Y -->
        <ellipse cx="626" cy="212" rx="16" ry="11" fill="#86efac" stroke="#15803d" stroke-width="1.8"/>
        <text x="664" y="212" font-size="11" font-weight="700" fill="#166534">Tương bào</text>
        <text x="585" y="264" text-anchor="middle" font-size="11.5" font-weight="800" fill="#166534">Đáp ứng MD</text>
        <text x="585" y="279" text-anchor="middle" font-size="11.5" font-weight="800" fill="#166534">nguyên phát anti-Y</text>

        <g class="svg-quiz-hide">
          <circle cx="268" cy="200" r="10" fill="#1d4ed8" stroke="#fff" stroke-width="1.5"/><text x="268" y="204" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">1</text>
          <circle cx="378" cy="284" r="10" fill="#0f766e" stroke="#fff" stroke-width="1.5"/><text x="378" y="288" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">2</text>
          <circle cx="548" cy="82" r="10" fill="#dc2626" stroke="#fff" stroke-width="1.5"/><text x="548" y="86" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">3</text>
          <circle cx="595" cy="206" r="10" fill="#15803d" stroke="#fff" stroke-width="1.5"/><text x="595" y="210" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">4</text>
        </g>
      </svg>
    `,
    legends: [
      { n: 1, title: "Đáp ứng nguyên phát Anti-X (1–3 tuần)", text: "Xảy ra khi tế bào lympho naïve (chưa từng gặp kháng nguyên X) tiếp xúc lần đầu; thời gian trễ dài hơn, đỉnh hiệu giá kháng thể thấp hơn, sinh tương bào và tế bào B trí nhớ." },
      { n: 2, title: "Hình thành Tế bào B trí nhớ", text: "Sau pha nguyên phát, mặc dù hiệu giá kháng thể giảm dần ở tuần 4–5 nhưng quần thể tế bào B trí nhớ đặc hiệu với X vẫn tồn tại lâu dài." },
      { n: 3, title: "Đáp ứng thứ phát Anti-X (2–7 ngày) — Trí nhớ miễn dịch", text: "Khi tái tiếp xúc Antigen X ở tuần 5–6, tế bào B trí nhớ lập tức hoạt hóa tạo đáp ứng nhanh, hiệu giá kháng thể vọt cao vượt trội." },
      { n: 4, title: "Đáp ứng nguyên phát Anti-Y — Tính đặc hiệu", text: "Dù tiêm Antigen Y cùng lúc với X ở lần 2, đáp ứng chống Y vẫn là nguyên phát (chậm, thấp) vì chưa từng có tế bào nhớ với Y trước đó." }
    ]
  },

  // ========================================================================
  // 5. HÌNH 1.5 (BÀI 1, TR. 11): QUÁ TRÌNH TRƯỞNG THÀNH CỦA TẾ BÀO LYMPHO
  // ========================================================================
  {
    id: "H1.5",
    lessonId: 4,
    chapter: "Bài 1: Đại cương Miễn dịch học",
    page: "tr. 11",
    type: "svg",
    title: "Hình 1.5. Quá trình trưởng thành của tế bào lympho",
    caption: "Tái tạo vector lộ trình trưởng thành: Tất cả tế bào lympho đều sinh ra từ tế bào đầu dòng ở tủy xương; dòng B trưởng thành ngay tại Tủy xương, còn dòng T được huấn luyện trưởng thành tại Tuyến ức (Thymus) trước khi tái tuần hoàn qua máu & bạch huyết tới tổ chức lympho ngoại biên.",
    note: "Ghi nhớ số liệu: Tế bào T nhớ tăng dần theo tuổi từ < 5% số lượng tế bào T ở trẻ sơ sinh lên > 50% ở người trưởng thành! Một số tương bào non (plasma blast) dòng B quay về tủy xương thành tương bào sống nhiều năm tiết kháng thể bền vững.",
    svg: `
      <svg viewBox="0 0 760 350" class="fig-svg" role="img" aria-label="Hình 1.5 Quá trình trưởng thành của tế bào lympho">
        <defs>
          <marker id="arr15" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a"/>
          </marker>
        </defs>
        <rect x="2" y="2" width="756" height="346" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

        <!-- Header Boxes -->
        <rect x="160" y="16" width="160" height="40" rx="8" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.6"/>
        <text x="240" y="34" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e3a8a">Tổ chức lympho</text>
        <text x="240" y="49" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1e3a8a">trung ương</text>

        <rect x="348" y="16" width="144" height="40" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.6"/>
        <text x="420" y="34" text-anchor="middle" font-size="11.5" font-weight="800" fill="#991b1b">Máu, bạch huyết</text>
        <text x="420" y="49" text-anchor="middle" font-size="11" font-weight="700" fill="#475569">&amp; Tái tuần hoàn</text>

        <rect x="524" y="16" width="214" height="40" rx="8" fill="#f0fdfa" stroke="#0f766e" stroke-width="1.6"/>
        <text x="631" y="34" text-anchor="middle" font-size="11.5" font-weight="800" fill="#065f46">Tổ chức lympho</text>
        <text x="631" y="49" text-anchor="middle" font-size="11.5" font-weight="800" fill="#065f46">ngoại biên</text>

        <!-- Tế bào đầu dòng -->
        <text x="72" y="114" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0f172a">Tế bào đầu dòng</text>
        <text x="72" y="130" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0f172a">lympho (Tủy xương)</text>
        <circle cx="72" cy="176" r="24" fill="#f1f5f9" stroke="#334155" stroke-width="2"/>
        <circle cx="72" cy="176" r="11" fill="#475569"/>

        <!-- Phân 2 nhánh -->
        <path d="M 102,162 L 170,118" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#arr15)"/>
        <text x="128" y="122" font-size="10.5" font-weight="800" fill="#1d4ed8">Dòng B</text>

        <path d="M 102,190 L 170,242" stroke="#0f766e" stroke-width="2.5" marker-end="url(#arr15)"/>
        <text x="128" y="236" font-size="10.5" font-weight="800" fill="#0f766e">Dòng T</text>

        <!-- Tủy xương (Nhánh B) -->
        <g transform="translate(178,76)">
          <rect x="12" y="18" width="96" height="42" rx="14" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
          <ellipse cx="60" cy="39" rx="34" ry="12" fill="#fca5a5"/>
          <text x="60" y="12" text-anchor="middle" font-size="12" font-weight="800" fill="#1e3a8a">Tủy xương</text>
        </g>

        <!-- Tuyến ức (Nhánh T) -->
        <g transform="translate(178,220)">
          <ellipse cx="44" cy="40" rx="22" ry="30" fill="#fed7aa" stroke="#c2410c" stroke-width="2"/>
          <ellipse cx="74" cy="40" rx="22" ry="30" fill="#fdba74" stroke="#c2410c" stroke-width="2"/>
          <text x="60" y="90" text-anchor="middle" font-size="12" font-weight="800" fill="#9a3412">Tuyến ức (Thymus)</text>
        </g>

        <!-- Mũi tên sang Máu & Bạch huyết -->
        <path d="M 294,114 L 348,114" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#arr15)"/>
        <path d="M 294,258 L 348,258" stroke="#0f766e" stroke-width="2.2" marker-end="url(#arr15)"/>

        <!-- Lympho B & T trưởng thành tái tuần hoàn -->
        <g transform="translate(356,74)">
          <rect x="0" y="12" width="128" height="58" rx="12" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
          <circle cx="38" cy="41" r="16" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
          <circle cx="38" cy="41" r="7" fill="#1e3a8a"/>
          <circle cx="92" cy="41" r="16" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
          <circle cx="92" cy="41" r="7" fill="#1e3a8a"/>
          <text x="64" y="88" text-anchor="middle" font-size="11" font-weight="800" fill="#1e3a8a">Lympho B trưởng thành</text>
        </g>

        <g transform="translate(356,220)">
          <rect x="0" y="12" width="128" height="58" rx="12" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
          <circle cx="38" cy="41" r="16" fill="#d1fae5" stroke="#0f766e" stroke-width="2"/>
          <circle cx="38" cy="41" r="7" fill="#065f46"/>
          <circle cx="92" cy="41" r="16" fill="#d1fae5" stroke="#0f766e" stroke-width="2"/>
          <circle cx="92" cy="41" r="7" fill="#065f46"/>
          <text x="64" y="88" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">Lympho T trưởng thành</text>
        </g>

        <!-- Mũi tên tới Tổ chức lympho ngoại biên -->
        <path d="M 488,114 L 548,100" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#arr15)"/>
        <path d="M 488,124 L 548,180" stroke="#1d4ed8" stroke-width="2.2" marker-end="url(#arr15)"/>
        <path d="M 488,250 L 548,195" stroke="#0f766e" stroke-width="2.2" marker-end="url(#arr15)"/>
        <path d="M 488,266 L 548,274" stroke="#0f766e" stroke-width="2.2" marker-end="url(#arr15)"/>

        <!-- 3 Cơ quan ngoại biên -->
        <g transform="translate(556,74)">
          <ellipse cx="42" cy="28" rx="34" ry="22" fill="#fef3c7" stroke="#b45309" stroke-width="1.8"/>
          <circle cx="32" cy="24" r="6" fill="#fde68a" stroke="#92400e"/>
          <circle cx="54" cy="30" r="6" fill="#fde68a" stroke="#92400e"/>
          <text x="86" y="25" font-size="12" font-weight="800" fill="#0f172a">Hạch bạch</text>
          <text x="86" y="41" font-size="12" font-weight="800" fill="#0f172a">huyết</text>
        </g>

        <g transform="translate(556,158)">
          <ellipse cx="42" cy="28" rx="32" ry="20" fill="#fecaca" stroke="#991b1b" stroke-width="1.8"/>
          <circle cx="36" cy="24" r="5" fill="#7f1d1d"/><circle cx="52" cy="34" r="5" fill="#7f1d1d"/>
          <text x="86" y="32" font-size="12" font-weight="800" fill="#0f172a">Lách</text>
        </g>

        <g transform="translate(556,242)">
          <rect x="8" y="8" width="68" height="40" rx="8" fill="#fef9c3" stroke="#ca8a04" stroke-width="1.8"/>
          <circle cx="28" cy="28" r="6" fill="#1d4ed8"/><circle cx="52" cy="28" r="6" fill="#0f766e"/>
          <text x="86" y="24" font-size="11.5" font-weight="800" fill="#0f172a">Tổ chức lympho</text>
          <text x="86" y="40" font-size="11.5" font-weight="800" fill="#0f172a">ở da và niêm mạc</text>
        </g>

        <g class="svg-quiz-hide">
          <circle cx="240" cy="70" r="10" fill="#1d4ed8" stroke="#fff" stroke-width="1.5"/><text x="240" y="74" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">1</text>
          <circle cx="240" cy="214" r="10" fill="#c2410c" stroke="#fff" stroke-width="1.5"/><text x="240" y="218" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">2</text>
          <circle cx="420" cy="70" r="10" fill="#dc2626" stroke="#fff" stroke-width="1.5"/><text x="420" y="74" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">3</text>
          <circle cx="631" cy="70" r="10" fill="#0f766e" stroke="#fff" stroke-width="1.5"/><text x="631" y="74" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">4</text>
        </g>
      </svg>
    `,
    legends: [
      { n: 1, title: "Tủy xương — Cơ quan lympho trung ương (Dòng B)", text: "Nơi sinh ra tế bào đầu dòng của mọi lympho và là nơi tế bào lympho B hoàn thiện thụ thể BCR trưởng thành trước khi ra máu." },
      { n: 2, title: "Tuyến ức (Thymus) — Cơ quan lympho trung ương (Dòng T)", text: "Tiền thân dòng T di chuyển từ tủy xương đến tuyến ức để được huấn luyện chọn lọc dương tính & âm tính (loại tế bào tự phản ứng) thành T trưởng thành." },
      { n: 3, title: "Lưu hành & Tái tuần hoàn (Máu & Bạch huyết)", text: "Các lympho naïve trưởng thành rời cơ quan trung ương, liên tục đi qua máu và bạch huyết để tìm kiếm kháng nguyên đặc hiệu; nếu không gặp sau nhiều tháng sẽ chết theo chương trình." },
      { n: 4, title: "Cơ quan lympho ngoại biên (Hạch, Lách, MALT/SALT)", text: "Nơi lympho B và T gặp kháng nguyên được trình diện, hoạt hóa, tăng sinh và biệt hóa thành tế bào hành sự và tế bào trí nhớ." }
    ]
  },

  // ========================================================================
  // 6. HÌNH 1.6 (BÀI 1, TR. 12): CÁC LOẠI TẾ BÀO LYMPHO
  // ========================================================================
  {
    id: "H1.6",
    lessonId: 4,
    chapter: "Bài 1: Đại cương Miễn dịch học",
    page: "tr. 12",
    type: "svg",
    title: "Hình 1.6. Các loại tế bào lympho (B, Th, Tc và Treg)",
    caption: "Tái tạo vector 4 quần thể lympho thích nghi theo cặp Nhận biết kháng nguyên → Chức năng hành sự, phân biệt dựa trên các dấu ấn bề mặt (phân tử CD).",
    note: "Phân loại chuẩn tr. 12–13: T CD4+ gồm cả T giúp đỡ (Th) và T điều hòa (Treg); T CD8+ là T gây độc tế bào (Tc / CTL). Lympho B nhận diện trực tiếp kháng nguyên vi khuẩn KHÔNG cần APC, còn T chỉ nhận diện peptide gắn trên MHC.",
    svg: `
      <svg viewBox="0 0 760 440" class="fig-svg" role="img" aria-label="Hình 1.6 Các loại tế bào lympho">
        <defs>
          <marker id="arr16" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a"/>
          </marker>
        </defs>
        <rect x="2" y="2" width="756" height="436" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

        <text x="195" y="26" text-anchor="middle" font-size="13" font-weight="800" fill="#1e3a8a">Nhận biết kháng nguyên</text>
        <text x="540" y="26" text-anchor="middle" font-size="13" font-weight="800" fill="#0f766e">Chức năng hành sự</text>

        <!-- Hàng 1: Lympho B -->
        <rect x="14" y="38" width="732" height="86" rx="10" fill="#eff6ff" stroke="#bfdbfe"/>
        <text x="26" y="76" font-size="12.5" font-weight="800" fill="#1d4ed8">1. Lympho B</text>
        <text x="26" y="94" font-size="10.5" fill="#475569">(Duy nhất tiết Ig)</text>

        <circle cx="152" cy="78" r="20" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
        <circle cx="152" cy="78" r="9" fill="#1e40af"/>
        <circle cx="188" cy="78" r="10" fill="#b45309"/>
        <text x="188" y="106" text-anchor="middle" font-size="10.5" font-weight="700" fill="#9a3412">Vi khuẩn</text>

        <path d="M 224,74 Q 270,56 320,74" fill="none" stroke="#0f172a" stroke-width="2.2" marker-end="url(#arr16)"/>

        <ellipse cx="364" cy="78" rx="28" ry="20" fill="#60a5fa" stroke="#1e40af" stroke-width="2"/>
        <circle cx="354" cy="78" r="8" fill="#1e3a8a"/>
        <text x="415" y="70" font-size="11" font-weight="700" fill="#1d4ed8">Kháng thể</text>
        <path d="M 398,78 L 410,78 M410,78 L416,72 M410,78 L416,84" stroke="#1d4ed8" stroke-width="2.5" fill="none"/>

        <rect x="478" y="50" width="256" height="58" rx="8" fill="#ffffff" stroke="#1d4ed8" stroke-width="1.6"/>
        <text x="606" y="74" text-anchor="middle" font-size="12" font-weight="800" fill="#1e3a8a">Trung hòa vi khuẩn, opson hóa</text>
        <text x="606" y="92" text-anchor="middle" font-size="12" font-weight="800" fill="#1e3a8a">thực bào, hoạt hóa bổ thể</text>

        <!-- Hàng 2: Lympho T giúp đỡ (Th / CD4+) -->
        <rect x="14" y="134" width="732" height="110" rx="10" fill="#fffbeb" stroke="#fde68a"/>
        <text x="26" y="168" font-size="12.5" font-weight="800" fill="#b45309">2. Lympho T</text>
        <text x="26" y="184" font-size="12.5" font-weight="800" fill="#b45309">giúp đỡ (Th)</text>
        <text x="26" y="202" font-size="10.5" font-weight="700" fill="#78350f">(CD4⁺ + MHC-II)</text>

        <circle cx="150" cy="170" r="19" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
        <circle cx="150" cy="170" r="8" fill="#92400e"/>
        <path d="M188,186 L194,196 L208,192 L198,204 L208,216 L194,214 L188,224 L180,214 L168,216 L176,204 L168,192 L180,196 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="1.6"/>
        <line x1="168" y1="176" x2="180" y2="192" stroke="#0f172a" stroke-width="2.5"/>
        <text x="190" y="236" text-anchor="middle" font-size="10" font-weight="700" fill="#9a3412">APC trình diện peptide</text>

        <path d="M 224,180 Q 270,162 320,180" fill="none" stroke="#0f172a" stroke-width="2.2" marker-end="url(#arr16)"/>

        <circle cx="352" cy="184" r="20" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
        <circle cx="352" cy="184" r="8" fill="#78350f"/>
        <!-- Cytokines -->
        <circle cx="390" cy="174" r="4" fill="#d97706"/><circle cx="404" cy="184" r="4" fill="#d97706"/><circle cx="392" cy="196" r="4" fill="#d97706"/>
        <text x="396" y="214" text-anchor="middle" font-size="10" font-weight="800" fill="#b45309">Cytokine</text>

        <path d="M416,174 L472,154" stroke="#0f172a" stroke-width="1.8" marker-end="url(#arr16)"/>
        <path d="M416,186 L472,186" stroke="#0f172a" stroke-width="1.8" marker-end="url(#arr16)"/>
        <path d="M416,198 L472,220" stroke="#0f172a" stroke-width="1.8" marker-end="url(#arr16)"/>

        <rect x="478" y="140" width="256" height="28" rx="7" fill="#ffffff" stroke="#15803d" stroke-width="1.5"/>
        <text x="606" y="159" text-anchor="middle" font-size="11.5" font-weight="800" fill="#15803d">Hoạt hóa đại thực bào</text>
        <rect x="478" y="173" width="256" height="28" rx="7" fill="#ffffff" stroke="#dc2626" stroke-width="1.5"/>
        <text x="606" y="192" text-anchor="middle" font-size="11.5" font-weight="800" fill="#dc2626">Chiêu mộ bạch cầu &amp; Viêm</text>
        <rect x="478" y="206" width="256" height="28" rx="7" fill="#ffffff" stroke="#1d4ed8" stroke-width="1.5"/>
        <text x="606" y="225" text-anchor="middle" font-size="11.5" font-weight="800" fill="#1d4ed8">Hoạt hóa lympho B tiết Ig</text>

        <!-- Hàng 3: Lympho T gây độc (Tc / CD8+) -->
        <rect x="14" y="254" width="732" height="82" rx="10" fill="#f0f9ff" stroke="#bae6fd"/>
        <text x="26" y="286" font-size="12.5" font-weight="800" fill="#0369a1">3. Lympho T</text>
        <text x="26" y="302" font-size="12.5" font-weight="800" fill="#0369a1">gây độc (Tc)</text>
        <text x="26" y="319" font-size="10.5" font-weight="700" fill="#0c4a6e">(CD8⁺ / CTL)</text>

        <circle cx="152" cy="292" r="18" fill="#bae6fd" stroke="#0369a1" stroke-width="2"/>
        <circle cx="152" cy="292" r="7" fill="#0c4a6e"/>
        <circle cx="204" cy="292" r="20" fill="#fef08a" stroke="#a16207" stroke-width="1.8"/>
        <line x1="170" y1="292" x2="184" y2="292" stroke="#dc2626" stroke-width="3"/>
        <text x="198" y="326" text-anchor="middle" font-size="10" font-weight="700" fill="#854d0e">TB nhiễm trình diện KN</text>

        <path d="M 232,292 L 320,292" stroke="#0f172a" stroke-width="2.2" marker-end="url(#arr16)"/>

        <circle cx="350" cy="292" r="18" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
        <circle cx="404" cy="292" r="19" fill="#fee2e2" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/>
        <line x1="395" y1="283" x2="413" y2="301" stroke="#dc2626" stroke-width="2.5"/>
        <line x1="413" y1="283" x2="395" y2="301" stroke="#dc2626" stroke-width="2.5"/>

        <path d="M 432,292 L 472,292" stroke="#0f172a" stroke-width="2.2" marker-end="url(#arr16)"/>
        <rect x="478" y="266" width="256" height="54" rx="8" fill="#ffffff" stroke="#dc2626" stroke-width="1.6"/>
        <text x="606" y="290" text-anchor="middle" font-size="12" font-weight="800" fill="#991b1b">Giết trực tiếp tế bào nhiễm</text>
        <text x="606" y="308" text-anchor="middle" font-size="11" font-weight="700" fill="#475569">(virus nội bào hoặc tế bào u)</text>

        <!-- Hàng 4: Lympho T điều hòa (Treg) -->
        <rect x="14" y="346" width="732" height="80" rx="10" fill="#f0fdf4" stroke="#bbf7d0"/>
        <text x="26" y="378" font-size="12.5" font-weight="800" fill="#15803d">4. Lympho T</text>
        <text x="26" y="394" font-size="12.5" font-weight="800" fill="#15803d">điều hòa (Treg)</text>
        <text x="26" y="411" font-size="10.5" font-weight="700" fill="#166534">(T CD4⁺ ức chế)</text>

        <circle cx="152" cy="386" r="18" fill="#86efac" stroke="#15803d" stroke-width="2"/>
        <circle cx="152" cy="386" r="7" fill="#14532d"/>
        <circle cx="204" cy="386" r="17" fill="#fed7aa" stroke="#c2410c" stroke-width="1.8"/>
        <text x="204" y="418" text-anchor="middle" font-size="10" font-weight="700" fill="#9a3412">T đáp ứng</text>

        <path d="M 232,386 L 320,386" stroke="#0f172a" stroke-width="2.2" marker-end="url(#arr16)"/>

        <circle cx="352" cy="386" r="18" fill="#22c55e" stroke="#14532d" stroke-width="2"/>
        <line x1="372" y1="386" x2="394" y2="386" stroke="#dc2626" stroke-width="2.5"/>
        <line x1="394" y1="378" x2="394" y2="394" stroke="#dc2626" stroke-width="3"/>
        <circle cx="416" cy="386" r="16" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>

        <path d="M 438,386 L 472,386" stroke="#0f172a" stroke-width="2.2" marker-end="url(#arr16)"/>
        <rect x="478" y="358" width="256" height="54" rx="8" fill="#ffffff" stroke="#15803d" stroke-width="1.6"/>
        <text x="606" y="382" text-anchor="middle" font-size="12" font-weight="800" fill="#166534">Ức chế tế bào lympho T</text>
        <text x="606" y="400" text-anchor="middle" font-size="11" font-weight="700" fill="#475569">(Ngăn ngừa bệnh tự miễn)</text>

        <g class="svg-quiz-hide">
          <circle cx="734" cy="52" r="10" fill="#1d4ed8" stroke="#fff" stroke-width="1.5"/><text x="734" y="56" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">1</text>
          <circle cx="734" cy="144" r="10" fill="#d97706" stroke="#fff" stroke-width="1.5"/><text x="734" y="148" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">2</text>
          <circle cx="734" cy="268" r="10" fill="#dc2626" stroke="#fff" stroke-width="1.5"/><text x="734" y="272" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">3</text>
          <circle cx="734" cy="360" r="10" fill="#15803d" stroke="#fff" stroke-width="1.5"/><text x="734" y="364" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">4</text>
        </g>
      </svg>
    `,
    legends: [
      { n: 1, title: "Lympho B (BCR = Kháng thể màng)", text: "Tế bào duy nhất sản xuất kháng thể. Nhận diện trực tiếp kháng nguyên bề mặt vi khuẩn/hòa tan rồi biệt hóa thành tương bào tiết Ig cùng đặc hiệu." },
      { n: 2, title: "Lympho T giúp đỡ (Th — CD4⁺)", text: "Nhận biết peptide trình diện trên đại thực bào hoặc APC; tiết cytokine hoạt hóa đại thực bào, chiêu mộ bạch cầu gây viêm và hỗ trợ lympho B." },
      { n: 3, title: "Lympho T gây độc tế bào (Tc — CD8⁺)", text: "Nhận biết peptide hiển thị bởi bất kỳ tế bào ký chủ nào bị nhiễm vi sinh vật nội bào (virus) hoặc tế bào khối u → giết trực tiếp tế bào nhiễm." },
      { n: 4, title: "Lympho T điều hòa (Treg — một phân nhóm CD4⁺)", text: "Hạn chế hoạt động của các tế bào lympho khác (đặc biệt là tế bào T đáp ứng) nhằm duy trì dung nạp miễn dịch và ngăn ngừa tình trạng tự miễn." }
    ]
  },

  // ========================================================================
  // 7. HÌNH 1.7 (BÀI 1, TR. 14): DI CHUYỂN CỦA TẾ BÀO LYMPHO T
  // ========================================================================
  {
    id: "H1.7",
    lessonId: 5,
    chapter: "Bài 1: Đại cương Miễn dịch học",
    page: "tr. 14",
    type: "svg",
    title: "Hình 1.7. Sự tuần hoàn và di chuyển của tế bào lympho T",
    caption: "Tái tạo vector lộ trình tuần hoàn của T naïve từ động mạch → tiểu tĩnh mạch nội mô cao (HEV) vào vùng T của hạch bạch huyết (nhờ chemokine & phân tử kết dính) → hoạt hóa → thoát qua mạch bạch huyết ly tâm → vào máu → mô ngoại biên bị nhiễm trùng/viêm.",
    note: "Chi tiết quan trọng tr. 14: Tế bào T naïve vào hạch bạch huyết qua TIỂU TĨNH MẠCH NỘI MÔ CAO (HEV), được dẫn đường bởi CHEMOKIN và phân tử kết dính; sau khi được hoạt hóa thì thoát ra qua MẠCH BẠCH HUYẾT LY TÂM vào máu để ưu tiên tới mô ngoại biên đang viêm.",
    svg: `
      <svg viewBox="0 0 760 320" class="fig-svg" role="img" aria-label="Hình 1.7 Di chuyển của tế bào lympho T">
        <defs>
          <marker id="arr17" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a"/>
          </marker>
        </defs>
        <rect x="2" y="2" width="756" height="316" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

        <!-- Hạch bạch huyết ở giữa -->
        <ellipse cx="290" cy="158" rx="110" ry="118" fill="#fefce8" stroke="#ca8a04" stroke-width="2.4"/>
        <text x="290" y="28" text-anchor="middle" font-size="13" font-weight="800" fill="#854d0e">Hạch bạch huyết</text>

        <!-- Động mạch & HEV -->
        <text x="64" y="102" text-anchor="middle" font-size="11.5" font-weight="800" fill="#991b1b">Động mạch</text>
        <rect x="18" y="122" width="118" height="38" rx="6" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>
        <circle cx="48" cy="141" r="10" fill="#fb923c" stroke="#9a3412" stroke-width="1.5"/>
        <circle cx="96" cy="141" r="10" fill="#4ade80" stroke="#15803d" stroke-width="1.5"/>

        <!-- HEV inside lymph node -->
        <text x="150" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#9a3412">Tiểu tĩnh mạch</text>
        <text x="150" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#9a3412">nội mô cao (HEV)</text>
        <path d="M 140,141 L 194,141" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr17)"/>

        <!-- Vùng tế bào T trong hạch -->
        <text x="266" y="64" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">Chemokin &amp;</text>
        <text x="266" y="79" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">Phân tử kết dính</text>

        <!-- T naive vào hạch và gặp APC -->
        <circle cx="222" cy="141" r="12" fill="#fb923c" stroke="#9a3412" stroke-width="1.8"/>
        <path d="M 234,132 L 266,108" stroke="#0f172a" stroke-width="2" marker-end="url(#arr17)"/>
        <!-- APC in lymph node -->
        <path d="M294,88 L300,98 L314,96 L304,108 L314,120 L300,118 L294,128 L286,118 L272,120 L282,108 L272,96 L286,98 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="1.8"/>
        <circle cx="348" cy="112" r="13" fill="#4ade80" stroke="#15803d" stroke-width="1.8"/>
        <path d="M 316,108 L 332,110" stroke="#0f172a" stroke-width="2" marker-end="url(#arr17)"/>

        <!-- T hoạt hóa đi xuống ra mạch bạch huyết ly tâm -->
        <path d="M 346,128 L 318,166" stroke="#15803d" stroke-width="2.2" marker-end="url(#arr17)"/>
        <circle cx="312" cy="186" r="13" fill="#22c55e" stroke="#14532d" stroke-width="2"/>
        <path d="M 326,186 L 396,170" stroke="#15803d" stroke-width="2.4" marker-end="url(#arr17)"/>

        <!-- Mạch bạch huyết ly tâm -> Mạch máu -->
        <rect x="404" y="138" width="110" height="40" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.8"/>
        <circle cx="436" cy="158" r="11" fill="#22c55e" stroke="#14532d" stroke-width="1.8"/>
        <circle cx="484" cy="158" r="11" fill="#22c55e" stroke="#14532d" stroke-width="1.8"/>
        <text x="459" y="124" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0369a1">Mạch máu</text>
        <text x="459" y="210" text-anchor="middle" font-size="11" font-weight="800" fill="#0f766e">Mạch bạch huyết</text>
        <text x="459" y="224" text-anchor="middle" font-size="11" font-weight="800" fill="#0f766e">ly tâm</text>

        <path d="M 518,158 L 566,158" stroke="#0f172a" stroke-width="2.5" marker-end="url(#arr17)"/>

        <!-- Mô ngoại biên & Mạch máu ngoại biên -->
        <rect x="574" y="56" width="168" height="236" rx="12" fill="#f0fdf4" stroke="#15803d" stroke-width="1.8"/>
        <text x="658" y="42" text-anchor="middle" font-size="12.5" font-weight="800" fill="#166534">Mô ngoại biên</text>
        <rect x="584" y="96" width="148" height="44" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="1.6"/>
        <text x="658" y="76" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">Mạch máu ngoại biên</text>
        <circle cx="628" cy="118" r="12" fill="#22c55e" stroke="#14532d" stroke-width="1.8"/>
        <circle cx="688" cy="118" r="12" fill="#22c55e" stroke="#14532d" stroke-width="1.8"/>

        <!-- Xuyên mạch vào ổ viêm -->
        <path d="M 658,136 L 658,194" stroke="#15803d" stroke-width="2.5" marker-end="url(#arr17)"/>
        <circle cx="658" cy="228" r="18" fill="#16a34a" stroke="#14532d" stroke-width="2"/>
        <circle cx="620" cy="212" r="5" fill="#eab308"/><circle cx="696" cy="216" r="5" fill="#eab308"/><circle cx="628" cy="256" r="5" fill="#eab308"/>
        <text x="658" y="276" text-anchor="middle" font-size="11" font-weight="800" fill="#14532d">Vị trí nhiễm trùng &amp; viêm</text>

        <!-- Chú giải cell -->
        <rect x="18" y="220" width="150" height="82" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>
        <circle cx="36" cy="244" r="9" fill="#fb923c" stroke="#9a3412" stroke-width="1.5"/>
        <text x="52" y="248" font-size="11" font-weight="700" fill="#0f172a">Tế bào T naïve</text>
        <circle cx="36" cy="278" r="9" fill="#22c55e" stroke="#14532d" stroke-width="1.5"/>
        <text x="52" y="275" font-size="11" font-weight="700" fill="#0f172a">Tế bào T nhớ</text>
        <text x="52" y="290" font-size="11" font-weight="700" fill="#0f172a">hoặc hành sự</text>

        <g class="svg-quiz-hide">
          <circle cx="150" cy="141" r="10" fill="#dc2626" stroke="#fff" stroke-width="1.5"/><text x="150" y="145" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">1</text>
          <circle cx="294" cy="108" r="10" fill="#d97706" stroke="#fff" stroke-width="1.5"/><text x="294" y="112" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">2</text>
          <circle cx="459" cy="158" r="10" fill="#0284c7" stroke="#fff" stroke-width="1.5"/><text x="459" y="162" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">3</text>
          <circle cx="658" cy="228" r="10" fill="#15803d" stroke="#fff" stroke-width="1.5"/><text x="658" y="232" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">4</text>
        </g>
      </svg>
    `,
    legends: [
      { n: 1, title: "Vào hạch qua Tiểu tĩnh mạch nội mô cao (HEV)", text: "Tế bào T naïve từ động mạch đi qua HEV nhờ chemokine và các phân tử kết dính để vào vùng tế bào T của hạch bạch huyết." },
      { n: 2, title: "Nhận diện kháng nguyên & Hoạt hóa trong hạch", text: "Trong hạch bạch huyết, tế bào T naïve gặp tế bào tua gai (APC) trình diện kháng nguyên đặc hiệu và biệt hóa thành tế bào T hành sự/nhớ." },
      { n: 3, title: "Thoát qua mạch bạch huyết ly tâm vào máu", text: "Tế bào T đã hoạt hóa rời hạch theo mạch bạch huyết ly tâm, đổ trở lại tuần hoàn máu chung." },
      { n: 4, title: "Di trú đến mô ngoại biên đang viêm", text: "Nhờ thay đổi phân tử kết dính bề mặt, tế bào T hành sự xuyên qua mạch máu ngoại biên di trú ưu tiên vào đúng ổ nhiễm trùng để loại trừ tác nhân." }
    ]
  },

  // ========================================================================
  // 8. HÌNH 1.8 (BÀI 1, TR. 15): CÁC GIAI ĐOẠN CỦA ĐÁP ỨNG MIỄN DỊCH THÍCH NGHI
  // ========================================================================
  {
    id: "H1.8",
    lessonId: 5,
    chapter: "Bài 1: Đại cương Miễn dịch học",
    page: "tr. 15",
    type: "svg",
    title: "Hình 1.8. Năm giai đoạn của đáp ứng miễn dịch thích nghi",
    caption: "Tái tạo vector đường cong chuẩn: (1) Nhận diện kháng nguyên → (2) Hoạt hóa (nhân lên clone & biệt hóa) → (3) Thải trừ kháng nguyên → (4) Thu hẹp qua Apoptosis (homeostasis) → (5) Trí nhớ miễn dịch.",
    note: "Ghi nhớ giai đoạn thứ 4 (Thu hẹp đáp ứng miễn dịch / Homeostasis): Khi không còn kích thích của kháng nguyên đặc hiệu, đa số tế bào lympho hành sự chết theo chương trình (Apoptosis) để đưa hệ miễn dịch về trạng thái cân bằng, chỉ giữ lại quần thể tế bào trí nhớ sống sót.",
    svg: `
      <svg viewBox="0 0 760 390" class="fig-svg" role="img" aria-label="Hình 1.8 Các giai đoạn của đáp ứng miễn dịch thích nghi">
        <defs>
          <marker id="arr18" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#0f172a"/>
          </marker>
        </defs>
        <rect x="2" y="2" width="756" height="386" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

        <!-- 5 Khung giai đoạn trên cùng -->
        <g transform="translate(64,14)">
          <rect x="0" y="0" width="120" height="44" rx="8" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.5"/>
          <text x="60" y="19" text-anchor="middle" font-size="11" font-weight="800" fill="#1e3a8a">1. Nhận diện</text>
          <text x="60" y="35" text-anchor="middle" font-size="11" font-weight="800" fill="#1e3a8a">kháng nguyên</text>

          <rect x="130" y="0" width="136" height="44" rx="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5"/>
          <text x="198" y="19" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">2. Hoạt hóa</text>
          <text x="198" y="35" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">tế bào lympho</text>

          <rect x="276" y="0" width="128" height="44" rx="8" fill="#ecfdf5" stroke="#0f766e" stroke-width="1.5"/>
          <text x="340" y="19" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">3. Thải trừ</text>
          <text x="340" y="35" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">kháng nguyên</text>

          <rect x="414" y="0" width="134" height="44" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
          <text x="481" y="19" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">4. Thu hẹp</text>
          <text x="481" y="35" text-anchor="middle" font-size="10.5" font-weight="800" fill="#991b1b">(Homeostasis)</text>

          <rect x="558" y="0" width="112" height="44" rx="8" fill="#ede9fe" stroke="#7c3aed" stroke-width="1.5"/>
          <text x="614" y="27" text-anchor="middle" font-size="11.5" font-weight="800" fill="#5b21b6">5. Trí nhớ</text>
        </g>

        <!-- Trục tọa độ -->
        <line x1="68" y1="68" x2="68" y2="338" stroke="#0284c7" stroke-width="3"/>
        <line x1="68" y1="338" x2="720" y2="338" stroke="#0284c7" stroke-width="3"/>
        <text x="28" y="204" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0369a1" transform="rotate(-90 28 204)">Số lượng tế bào lympho đặc hiệu với kháng nguyên ⟶</text>

        <text x="82" y="356" font-size="12" font-weight="800" fill="#0f172a">0</text>
        <text x="266" y="356" font-size="12" font-weight="800" fill="#0f172a">7</text>
        <text x="492" y="356" font-size="12" font-weight="800" fill="#0f172a">14</text>
        <text x="390" y="376" text-anchor="middle" font-size="12" font-weight="800" fill="#0369a1">Số ngày sau khi tiếp xúc với kháng nguyên ⟶</text>

        <!-- Đường cong chính -->
        <path d="M 80,322 Q 130,318 168,266 Q 214,192 260,118 Q 294,74 334,114 Q 382,162 426,232 Q 464,274 522,282 L 705,286" fill="none" stroke="#1d4ed8" stroke-width="3.6"/>
        <path d="M 80,322 Q 130,318 168,266 Q 214,192 260,118 Q 294,74 334,114 Q 382,162 426,232 Q 464,274 522,282 L 705,286 L 705,336 L 80,336 Z" fill="#dbeafe" opacity="0.32"/>

        <!-- Pha 1: APC + T/B naïve -->
        <path d="M98,214 L104,224 L118,220 L108,232 L118,244 L104,242 L98,252 L90,242 L78,244 L86,232 L78,220 L90,224 Z" fill="#fed7aa" stroke="#ea580c" stroke-width="1.6"/>
        <text x="108" y="198" text-anchor="middle" font-size="10.5" font-weight="700" fill="#9a3412">APC</text>
        <circle cx="142" cy="242" r="13" fill="#d1fae5" stroke="#0f766e" stroke-width="1.8"/>
        <circle cx="140" cy="290" r="13" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.8"/>
        <text x="188" y="294" font-size="10.5" font-weight="700" fill="#0f766e">T &amp; B naïve</text>

        <!-- Pha 2: Nhân lên clone & Biệt hóa -->
        <rect x="190" y="218" width="96" height="24" rx="6" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
        <text x="238" y="234" text-anchor="middle" font-size="11" font-weight="800" fill="#0369a1">Nhân lên clone</text>

        <rect x="218" y="140" width="94" height="24" rx="6" fill="#ffffff" stroke="#1d4ed8" stroke-width="1.5"/>
        <text x="265" y="156" text-anchor="middle" font-size="11" font-weight="800" fill="#1e3a8a">Biệt hóa</text>

        <ellipse cx="298" cy="100" rx="20" ry="14" fill="#60a5fa" stroke="#1e40af" stroke-width="1.8"/>
        <text x="226" y="88" text-anchor="middle" font-size="10.5" font-weight="800" fill="#1e3a8a">TB sản xuất KT</text>
        <circle cx="338" cy="112" r="15" fill="#4ade80" stroke="#15803d" stroke-width="1.8"/>
        <text x="342" y="84" text-anchor="middle" font-size="10.5" font-weight="800" fill="#166534">T hành sự</text>

        <!-- Pha 3: Thải trừ kháng nguyên -->
        <rect x="364" y="96" width="110" height="36" rx="8" fill="#ffffff" stroke="#0f766e" stroke-width="1.6"/>
        <text x="419" y="112" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">Thải trừ</text>
        <text x="419" y="126" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">kháng nguyên</text>
        <path d="M 388,162 L 388,136" stroke="#0f172a" stroke-width="2" marker-end="url(#arr18)"/>
        <path d="M 442,202 L 442,136" stroke="#0f172a" stroke-width="2" marker-end="url(#arr18)"/>
        <text x="388" y="176" text-anchor="middle" font-size="10.5" font-weight="700" fill="#1d4ed8">MD dịch thể</text>
        <text x="442" y="216" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0f766e">MD tế bào</text>

        <!-- Pha 4: Thu hẹp (Apoptosis) -->
        <rect x="492" y="220" width="90" height="24" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
        <text x="537" y="236" text-anchor="middle" font-size="11.5" font-weight="800" fill="#dc2626">Apoptosis</text>
        <circle cx="516" cy="272" r="11" fill="#e2e8f0" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>
        <circle cx="546" cy="284" r="9" fill="#e2e8f0" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>

        <!-- Pha 5: Tế bào trí nhớ còn sống sót -->
        <circle cx="642" cy="276" r="14" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2"/>
        <circle cx="678" cy="290" r="14" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2"/>
        <text x="656" y="238" text-anchor="middle" font-size="11" font-weight="800" fill="#5b21b6">Tế bào trí nhớ</text>
        <text x="656" y="252" text-anchor="middle" font-size="11" font-weight="800" fill="#5b21b6">còn sống sót</text>

        <g class="svg-quiz-hide">
          <circle cx="124" cy="68" r="10" fill="#1d4ed8" stroke="#fff" stroke-width="1.5"/><text x="124" y="72" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">1</text>
          <circle cx="262" cy="68" r="10" fill="#0284c7" stroke="#fff" stroke-width="1.5"/><text x="262" y="72" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">2</text>
          <circle cx="404" cy="68" r="10" fill="#0f766e" stroke="#fff" stroke-width="1.5"/><text x="404" y="72" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">3</text>
          <circle cx="545" cy="68" r="10" fill="#dc2626" stroke="#fff" stroke-width="1.5"/><text x="545" y="72" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">4</text>
          <circle cx="678" cy="68" r="10" fill="#7c3aed" stroke="#fff" stroke-width="1.5"/><text x="678" y="72" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">5</text>
        </g>
      </svg>
    `,
    legends: [
      { n: 1, title: "Giai đoạn nhận diện kháng nguyên", text: "Các tế bào lympho B và T trưởng thành nhưng chưa tiếp xúc kháng nguyên (naïve) nhận diện kháng nguyên đặc hiệu (T cần APC)." },
      { n: 2, title: "Giai đoạn hoạt hóa tế bào lympho", text: "Clone đặc hiệu tăng sinh mạnh mẽ (nhân lên của clone) đạt đỉnh quanh ngày 7 và biệt hóa thành tương bào tiết kháng thể cùng tế bào T hành sự." },
      { n: 3, title: "Giai đoạn thải trừ kháng nguyên", text: "Miễn dịch dịch thể (kháng thể) và miễn dịch tế bào (Th, Tc) phối hợp tiêu diệt mầm bệnh ngoại bào lẫn nội bào." },
      { n: 4, title: "Giai đoạn thu hẹp (Homeostasis)", text: "Khi kháng nguyên bị loại trừ, thiếu kích thích khiến phần lớn tế bào hành sự chết theo chương trình (Apoptosis), đưa hệ thống về trạng thái cân bằng." },
      { n: 5, title: "Giai đoạn trí nhớ miễn dịch", text: "Quần thể nhỏ tế bào trí nhớ sống sót lâu dài (nhiều tháng đến nhiều năm), sẵn sàng kích hoạt đáp ứng thứ phát nhanh và mạnh khi tái nhiễm." }
    ]
  },

  // ========================================================================
  // 9. HÌNH 1.9 (BÀI 1, TR. 16): LƯỢC SỬ MIỄN DỊCH HỌC (3 CÂY A, B, C)
  // ========================================================================
  {
    id: "H1.9",
    lessonId: 6,
    chapter: "Bài 1: Đại cương Miễn dịch học",
    page: "tr. 16",
    type: "svg",
    title: "Hình 1.9. Tóm tắt Lược sử Miễn dịch học: Từ Liệu pháp huyết thanh đến Kiểm soát Điểm kiểm soát",
    caption: "Tái tạo siêu nét toàn bộ 3 nhánh A, B, C (vốn bị vỡ chữ nhỏ trong bản scan trang 16) kèm chú thích đóng góp của từng nhà khoa học đoạt giải Nobel & đặt nền móng miễn dịch học.",
    note: "Ghi nhớ các mốc trọng tâm tr. 15–17: Thực bào (Metchnikoff) + Liệu pháp huyết thanh (Behring) khởi đầu ngành; Ehrlich với thuyết chuỗi bên & giấc mơ \"viên đạn thần kỳ\"; Burnet & Talmage với Chọn lọc clone; Tonegawa với tái tổ hợp gen kháng thể; Steinman với tế bào tua gai; James Allison & Tasuku Honjo với liệu pháp kiểm soát điểm kiểm soát ung thư (CTLA-4 / PD-1).",
    svg: `
      <svg viewBox="0 0 780 510" class="fig-svg" role="img" aria-label="Hình 1.9 Lược sử Miễn dịch học 3 nhánh A, B, C">
        <rect x="2" y="2" width="776" height="506" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>

        <!-- NHÁNH A: FOUNDATION OF IMMUNOLOGY -->
        <rect x="14" y="14" width="244" height="236" rx="10" fill="#fffbeb" stroke="#d97706" stroke-width="1.8"/>
        <rect x="14" y="14" width="244" height="34" rx="10" fill="#d97706"/>
        <text x="128" y="35" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">A. Nền tảng Miễn dịch học</text>

        <line x1="34" y1="54" x2="34" y2="240" stroke="#f59e0b" stroke-width="3"/>
        <g font-size="9.8" fill="#0f172a">
          <circle cx="34" cy="66" r="4.5" fill="#b45309"/>
          <text x="45" y="65" font-weight="800">Ilya Metchnikoff</text><text x="45" y="76" fill="#475569">Thực bào (Miễn dịch bẩm sinh)</text>

          <circle cx="34" cy="94" r="4.5" fill="#b45309"/>
          <text x="45" y="93" font-weight="800">Paul Ehrlich</text><text x="45" y="104" fill="#475569">Chuỗi bên • Viên đạn thần kỳ</text>

          <circle cx="34" cy="122" r="4.5" fill="#b45309"/>
          <text x="45" y="121" font-weight="800">Emil von Behring</text><text x="45" y="132" fill="#475569">Liệu pháp huyết thanh</text>

          <circle cx="34" cy="150" r="4.5" fill="#b45309"/>
          <text x="45" y="149" font-weight="800">Shibasaburo Kitasato</text><text x="45" y="160" fill="#475569">Kháng độc tố uốn ván</text>

          <circle cx="34" cy="178" r="4.5" fill="#b45309"/>
          <text x="45" y="177" font-weight="800">Jules Bordet</text><text x="45" y="188" fill="#475569">Bổ thể (Complement)</text>

          <circle cx="34" cy="206" r="4.5" fill="#b45309"/>
          <text x="45" y="205" font-weight="800">Almroth Wright</text><text x="45" y="216" fill="#475569">Hiện tượng Opson hóa</text>

          <circle cx="34" cy="232" r="4.5" fill="#b45309"/>
          <text x="45" y="231" font-weight="800">Charles Richet</text><text x="45" y="242" fill="#475569">Sốc phản vệ (Quá mẫn)</text>
        </g>

        <!-- NHÁNH B: FROM ANTIBODIES TO B LYMPHOCYTES -->
        <rect x="14" y="260" width="244" height="236" rx="10" fill="#fef2f2" stroke="#e11d48" stroke-width="1.8"/>
        <rect x="14" y="260" width="244" height="34" rx="10" fill="#be123c"/>
        <text x="128" y="281" text-anchor="middle" font-size="11.5" font-weight="800" fill="#ffffff">B. Từ Kháng thể → Lympho B</text>

        <line x1="34" y1="300" x2="34" y2="486" stroke="#fb7185" stroke-width="3"/>
        <g font-size="9.8" fill="#0f172a">
          <circle cx="34" cy="312" r="4.5" fill="#be123c"/>
          <text x="45" y="311" font-weight="800">Karl Landsteiner</text><text x="45" y="322" fill="#475569">Nhóm máu (ABO)</text>

          <circle cx="34" cy="340" r="4.5" fill="#be123c"/>
          <text x="45" y="339" font-weight="800">Niels Jerne</text><text x="45" y="350" fill="#475569">Mạng lưới idiotyp</text>

          <circle cx="34" cy="368" r="4.5" fill="#be123c"/>
          <text x="45" y="367" font-weight="800">Astrid Fagraeus</text><text x="45" y="378" fill="#475569">Tương bào tiết kháng thể</text>

          <circle cx="34" cy="396" r="4.5" fill="#be123c"/>
          <text x="45" y="395" font-weight="800">Max Cooper</text><text x="45" y="406" fill="#475569">Phân tách dòng B &amp; T</text>

          <circle cx="34" cy="424" r="4.5" fill="#be123c"/>
          <text x="45" y="423" font-weight="800">Rodney Porter &amp; G. Edelman</text><text x="45" y="434" fill="#475569">Cấu trúc hóa học kháng thể</text>

          <circle cx="34" cy="452" r="4.5" fill="#be123c"/>
          <text x="45" y="451" font-weight="800">Susumu Tonegawa</text><text x="45" y="462" fill="#475569">Tái tổ hợp gen kháng thể</text>

          <circle cx="34" cy="478" r="4.5" fill="#be123c"/>
          <text x="45" y="477" font-weight="800">Milstein &amp; Köhler</text><text x="45" y="488" fill="#475569">Kháng thể đơn dòng</text>
        </g>

        <!-- NHÁNH C: T LYMPHOCYTES: FROM FUNCTION TO INSTRUCTION -->
        <rect x="270" y="14" width="496" height="482" rx="10" fill="#eff6ff" stroke="#1d4ed8" stroke-width="1.8"/>
        <rect x="270" y="14" width="496" height="34" rx="10" fill="#1d4ed8"/>
        <text x="518" y="35" text-anchor="middle" font-size="12" font-weight="800" fill="#ffffff">C. Tế bào Lympho T: Từ Chức năng đến Kiểm soát Điểm kiểm soát</text>

        <line x1="518" y1="58" x2="518" y2="480" stroke="#60a5fa" stroke-width="3.2"/>

        <g font-size="9.8" fill="#0f172a">
          <circle cx="518" cy="76" r="5.5" fill="#1e40af"/>
          <text x="506" y="73" text-anchor="end" font-weight="800">David Talmage (1919–2014)</text>
          <text x="506" y="86" text-anchor="end" fill="#475569">Lý thuyết chọn lọc clone</text>

          <text x="530" y="73" font-weight="800">Frank Macfarlane Burnet (1899–1985)</text>
          <text x="530" y="86" fill="#475569">Chọn lọc clone &amp; Dung nạp miễn dịch</text>

          <circle cx="518" cy="116" r="5.5" fill="#1e40af"/>
          <text x="530" y="113" font-weight="800">Peter Brian Medawar (1915–1987)</text>
          <text x="530" y="126" fill="#475569">Dung nạp miễn dịch thu được (ghép mô)</text>

          <circle cx="518" cy="156" r="5.5" fill="#1e40af"/>
          <text x="506" y="153" text-anchor="end" font-weight="800">Snell, Dausset &amp; Benacerraf</text>
          <text x="506" y="166" text-anchor="end" fill="#475569">Phức hợp hòa hợp mô chính (MHC / HLA)</text>

          <text x="530" y="153" font-weight="800">James L. Gowans (1924–2020)</text>
          <text x="530" y="166" fill="#475569">Tái tuần hoàn tế bào lympho</text>

          <circle cx="518" cy="200" r="5.5" fill="#1e40af"/>
          <text x="530" y="197" font-weight="800">Jacques Miller (1931– )</text>
          <text x="530" y="210" fill="#475569">Vai trò tuyến ức &amp; Tế bào lympho T</text>

          <circle cx="518" cy="244" r="5.5" fill="#1e40af"/>
          <text x="530" y="241" font-weight="800">Peter Doherty &amp; Rolf Zinkernagel</text>
          <text x="530" y="254" fill="#475569">Hạn chế MHC trong miễn dịch tế bào</text>

          <circle cx="518" cy="290" r="5.5" fill="#0f766e"/>
          <text x="506" y="287" text-anchor="end" font-weight="800">Charles Janeway (1943–2003)</text>
          <text x="506" y="300" text-anchor="end" fill="#475569">Thụ thể nhận diện mẫu (PRR)</text>

          <circle cx="518" cy="336" r="5.5" fill="#0f766e"/>
          <text x="506" y="333" text-anchor="end" font-weight="800">Jules Hoffmann &amp; Bruce Beutler</text>
          <text x="506" y="346" text-anchor="end" fill="#475569">Cơ sở phân tử miễn dịch bẩm sinh (TLR)</text>

          <circle cx="518" cy="382" r="5.5" fill="#0f766e"/>
          <text x="506" y="379" text-anchor="end" font-weight="800">Ralph Steinman (1943–2011)</text>
          <text x="506" y="392" text-anchor="end" fill="#475569">Khám phá Tế bào tua gai (DC)</text>

          <circle cx="518" cy="436" r="6.5" fill="#dc2626"/>
          <rect x="530" y="414" width="224" height="44" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
          <text x="642" y="432" text-anchor="middle" font-weight="800" fill="#991b1b">James Allison &amp; Tasuku Honjo</text>
          <text x="642" y="447" text-anchor="middle" font-weight="700" fill="#dc2626">Kiểm soát điểm kiểm soát (CTLA-4 / PD-1)</text>
        </g>

        <g class="svg-quiz-hide">
          <circle cx="242" cy="31" r="10" fill="#9a3412" stroke="#fff" stroke-width="1.5"/><text x="242" y="35" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">1</text>
          <circle cx="242" cy="277" r="10" fill="#9f1239" stroke="#fff" stroke-width="1.5"/><text x="242" y="281" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">2</text>
          <circle cx="752" cy="31" r="10" fill="#1e3a8a" stroke="#fff" stroke-width="1.5"/><text x="752" y="35" text-anchor="middle" font-size="10.5" font-weight="800" fill="#fff">3</text>
        </g>
      </svg>
    `,
    legends: [
      { n: 1, title: "Nhánh A: Nền tảng Miễn dịch học (Thực bào & Dịch thể sơ khai)", text: "Khởi đầu từ tranh luận tế bào vs dịch thể: Metchnikoff (thực bào), Behring & Kitasato (liệu pháp huyết thanh kháng độc tố), Ehrlich (chuỗi bên & viên đạn thần kỳ), Bordet (bổ thể), Wright (opson hóa nối kết hai nhánh) và Richet (quá mẫn)." },
      { n: 2, title: "Nhánh B: Từ Kháng thể đến Tế bào Lympho B", text: "Landsteiner (nhóm máu), Fagraeus (tương bào tiết kháng thể), Porter & Edelman (cấu trúc hóa học Ig), Cooper (tách biệt B và T), Tonegawa (tái tổ hợp gen tạo đa dạng Ig), Milstein & Köhler (kháng thể đơn dòng)." },
      { n: 3, title: "Nhánh C: Tế bào Lympho T & Liệu pháp Điểm kiểm soát", text: "Talmage & Burnet (chọn lọc clone), Medawar (dung nạp thu được), Snell/Dausset/Benacerraf (MHC), Gowans (tái tuần hoàn), Miller (tuyến ức), Doherty & Zinkernagel (hạn chế MHC), Janeway/Hoffmann/Beutler (PRR/TLR), Steinman (tế bào tua gai), Allison & Honjo (checkpoint CTLA-4/PD-1 trị ung thư)." }
    ]
  },

  // ========================================================================
  // 10-19. HÌNH ĐỐI CHIẾU GIẢI PHẪU – MÔ HỌC – TẾ BÀO – PHÂN TỬ (WIKIMEDIA COMMONS)
  // ========================================================================
  {
    id: "M1.1",
    lessonId: 1,
    chapter: "Bổ trợ Giải phẫu – Tế bào • Mục 3 & 12",
    page: "tr. 3, 15",
    type: "photo",
    title: "Hình M1.1. Quá trình Thực bào (Phagocytosis) trong Miễn dịch Bẩm sinh",
    caption: "Hình minh họa quá trình tế bào thực bào vươn chân giả bao bọc vi sinh vật ngoại lai vào túi thực bào (phagosome) — tuyến phòng thủ bẩm sinh nhanh chóng trong 0–12 giờ đầu.",
    note: "Liên kết giáo trình: Khám phá hiện tượng thực bào của Ilya Metchnikoff là một trong hai trụ cột khai sinh ngành miễn dịch học; hoạt động hiệu quả hơn nhiều khi vi khuẩn được kháng thể bao phủ (opson hóa - Almroth Wright) hoặc được Th kích thích qua cytokine.",
    panels: [
      {
        label: "Quá trình tế bào thực bào bắt giữ vi khuẩn tạo thể thực bào (Phagosome)",
        src: "assets/images/img_phagocytosis_servier.png",
        credit: "Laboratoires Servier / Wikimedia Commons (CC BY-SA 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Cell_eating_-_Phagocytosis_1_--_Smart-Servier.png",
        pins: [
          { n: 1, x: 32, y: 44, label: "Vi khuẩn bị chân giả bao vây", desc: "Tế bào thực bào nhận diện cấu trúc chung trên bề mặt vi khuẩn (hoặc nhận diện đuôi Fc của kháng thể opson hóa) và vươn màng tế bào ôm lấy mầm bệnh." },
          { n: 2, x: 18, y: 39, label: "Màng bào tương khép kín hốc thực bào", desc: "Hai đầu màng bào tương hòa nhập với nhau để đưa trọn khối vi sinh vật vào bên trong bào tương." },
          { n: 3, x: 73, y: 41, label: "Thể thực bào (Phagosome) nội bào", desc: "Túi chứa vi khuẩn sẽ hợp nhất với tiêu thể (lysosome) để diệt khuẩn; nếu vi khuẩn sống sót được trong túi này (vi khuẩn nội bào), cơ thể cần tế bào T giúp đỡ (Th) tiết cytokine hoạt hóa đại thực bào." }
        ]
      }
    ]
  },

  {
    id: "M1.2",
    lessonId: 2,
    chapter: "Bổ trợ Phân tử • Mục 4.2 & 8.1",
    page: "tr. 4–6, 13",
    type: "photo",
    title: "Hình M1.2. Cấu trúc Phân tử Kháng thể (Ig) & Tín hiệu Hoạt hóa B phụ thuộc T",
    caption: "Đối chiếu cấu trúc chữ Y của phân tử Immunoglobulin (Porter & Edelman) và cơ chế tế bào T giúp đỡ hỗ trợ tế bào B sản xuất kháng thể.",
    note: "Bản chất kháng thể là globulin miễn dịch (Ig). Vùng biến đổi VH/VL ở hai nhánh Fab nhận diện đặc hiệu kháng nguyên ngoại bào (protein, carbohydrat, acid nucleic, lipid); vùng Fc kích hoạt bổ thể, gắn thực bào và vận chuyển qua nhau thai bảo vệ thai nhi – trẻ sơ sinh.",
    panels: [
      {
        label: "A. Cấu trúc phân tử Kháng thể cơ bản (Vùng Fab gắn KN vs Vùng Fc chức năng)",
        src: "assets/images/img_antibody_unit.png",
        credit: "Tokenzero / Wikimedia Commons (CC BY-SA 4.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Antibody_basic_unit.svg",
        pins: [
          { n: 1, x: 22, y: 24, label: "Vùng biến đổi V_H & V_L (Paratope)", desc: "Tạo vị trí gắn đặc hiệu từng kháng nguyên nhờ tái tổ hợp gen ngẫu nhiên (Susumu Tonegawa) có từ TRƯỚC khi gặp kháng nguyên." },
          { n: 2, x: 76, y: 24, label: "Đoạn Fab (Fragment antigen-binding)", desc: "Gồm một chuỗi nhẹ hoàn chỉnh (VL + CL) và phần trên chuỗi nặng (VH + CH1); đóng vai trò gắn trung hòa độc tố và ngăn vi khuẩn xâm nhập." },
          { n: 3, x: 48, y: 74, label: "Đoạn Fc (CH2 – CH3)", desc: "Phần hằng định quyết định lớp kháng thể và chức năng sinh học: opson hóa giúp thực bào bắt giữ, hoạt hóa bổ thể và vận chuyển qua nhau thai." },
          { n: 4, x: 46, y: 49, label: "Cầu nối Disulfid (-S-S-) & Vùng bản lề", desc: "Liên kết 2 chuỗi nặng và 2 chuỗi nhẹ thành khối bền vững, cấu trúc do Rodney Porter và Gerald Edelman giải mã." }
        ]
      },
      {
        label: "B. Hoạt hóa Lympho B nhờ Tế bào T giúp đỡ (Th CD4⁺)",
        src: "assets/images/img_t_dependent_b.png",
        credit: "Altaileopard / Wikimedia Commons (Public Domain)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:T-dependent_B_cell_activation.png",
        pins: [
          { n: 1, x: 79, y: 16, label: "BCR (Kháng thể màng) bắt kháng nguyên", desc: "Lympho B nhận diện trực tiếp kháng nguyên, nội hóa và xử lý thành mảnh peptide." },
          { n: 2, x: 50, y: 50, label: "Trình diện MHC-II ↔ TCR + CD4", desc: "Lympho B đóng vai trò APC trình diện peptide trên MHC-II cho tế bào T giúp đỡ (Th CD4⁺)." },
          { n: 3, x: 46, y: 34, label: "Đồng kích thích CD40–CD40L & Cytokine", desc: "Tế bào Th tiết cytokine (IL-2, IL-4, IL-5) kích thích lympho B tăng sinh và biệt hóa thành tương bào tiết kháng thể." }
        ]
      }
    ]
  },

  {
    id: "M1.3",
    lessonId: 2,
    chapter: "Bổ trợ Mô học • Mục 4.2 & 7",
    page: "tr. 5, 10, 13",
    type: "photo",
    title: "Hình M1.3. Vi thể Tương bào (Plasma cell) — Nhà máy Sản xuất Kháng thể",
    caption: "Tiêu bản nhuộm H&E mô đệm giàu tương bào: Tế bào hành sự của dòng lympho B với nhân lệch tâm hình bánh xe và quầng sáng bộ máy Golgi cạnh nhân.",
    note: "Liên hệ Câu lượng giá 4 (tr. 19): Tương bào tiết ra KHÁNG THỂ CÓ ĐẶC HIỆU GIỐNG THỤ THỂ TRÊN TẾ BÀO LYMPHO B TƯƠNG ỨNG. Một số tương bào non (plasma blast) quay trở lại tủy xương thành tương bào sống nhiều năm.",
    panels: [
      {
        label: "Tương bào trong mô đệm (H&E 20x)",
        src: "assets/images/img_plasma_cells.jpg",
        credit: "Tissuepathology / Wikimedia Commons (CC BY-SA 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Endometrium_PlasmaCells_20x1.JPG",
        pins: [
          { n: 1, x: 64, y: 52, label: "Tương bào với nhân lệch tâm", desc: "Nhân tròn nằm lệch hẳn về một cực tế bào, chất nhiễm sắc kết tụ thành các khối đều quanh màng nhân giống hình mặt đồng hồ / nan hoa bánh xe." },
          { n: 2, x: 35, y: 66, label: "Quầng sáng cạnh nhân (Golgi Hof)", desc: "Vùng sáng nằm sát nhân trên nền bào tương ưa kiềm xanh tím đậm — nơi bộ máy Golgi tổng hợp và xuất bào lượng lớn phân tử kháng thể." },
          { n: 3, x: 46, y: 49, label: "Tuyến biểu mô lân cận", desc: "Ống tuyến biểu mô cắt ngang nằm xen kẽ trong mô đệm viêm mạn tính giàu tương bào." }
        ]
      }
    ]
  },

  {
    id: "M1.4",
    lessonId: 4,
    chapter: "Bổ trợ Tế bào • Mục 8.2",
    page: "tr. 13–14",
    type: "photo",
    title: "Hình M1.4. Tế bào Tua gai (Dendritic cell / Langerhans) — APC Mạnh nhất",
    caption: "Hình thái học và nhuộm hóa mô miễn dịch tế bào tua gai ở cửa ngõ da: Các nhánh tua dài vươn giữa tế bào biểu bì để bắt giữ kháng nguyên và di chuyển về hạch hoạt hóa T naïve.",
    note: "Chi tiết đề thi (tr. 13–14): Tế bào tua gai là APC quan trọng và mạnh nhất để hoạt hóa T naïve vì nó biểu hiện RẤT NHIỀU YẾU TỐ ĐỒNG KÍCH THÍCH (tín hiệu thứ hai). Phân biệt với tế bào tua gai nang bạch huyết (FDC) ở trung tâm mầm giúp hoạt hóa tế bào lympho B!",
    panels: [
      {
        label: "A. Mô hình 3D Tế bào tua gai Langerhans với mạng nhánh tua dài",
        src: "assets/images/img_langerhans_bioart.png",
        credit: "Ryan Kissinger / NIH NIAID BioArt / Wikimedia Commons (Public Domain)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Langerhans_Cell_(NIH_BioArt_285).png",
        pins: [
          { n: 1, x: 63, y: 71, label: "Thân tế bào và nhân", desc: "Chứa bộ máy xử lý kháng nguyên protein nội bào thành mảnh peptide gắn lên phân tử MHC." },
          { n: 2, x: 32, y: 36, label: "Hệ nhánh tua bào tương (Dendrites)", desc: "Giúp tế bào tua gai vươn rộng mạng lưới giám sát tại cửa ngõ xâm nhập (da, niêm mạc hô hấp, tiêu hóa, niệu sinh dục)." }
        ]
      },
      {
        label: "B. Hóa mô miễn dịch tế bào tua gai trong biểu bì da (Bắt màu nâu)",
        src: "assets/images/img_dendritic_micro.jpg",
        credit: "Haymanj / Wikimedia Commons (Public Domain)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Dendritic_cells.jpg",
        pins: [
          { n: 1, x: 56, y: 48, label: "Tế bào tua gai bắt kháng nguyên tại biểu bì", desc: "Nhuộm hóa mô miễn dịch đặc hiệu cho thấy thân và các tua nhánh màu nâu len lỏi giữa hàng tế bào gai để tóm bắt vi sinh vật vượt rào biểu mô." },
          { n: 2, x: 16, y: 54, label: "Mô liên kết lớp bì bên dưới", desc: "Đường rút lui qua mạch bạch huyết hướng tâm đưa tế bào tua gai mang kháng nguyên tới vùng T của hạch bạch huyết." },
          { n: 3, x: 84, y: 36, label: "Lớp sừng bề mặt biểu bì", desc: "Tuyến phòng thủ vật lý đầu tiên thuộc hệ miễn dịch bẩm sinh." }
        ]
      }
    ]
  },

  {
    id: "M1.5",
    lessonId: 4,
    chapter: "Bổ trợ Tế bào • Mục 4.1 & 8.1",
    page: "tr. 4, 12–13",
    type: "photo",
    title: "Hình M1.5. Tế bào Lympho T & Tế bào T Gây độc (CD8⁺) Bao vây Tiêu diệt Tế bào Ung thư",
    caption: "Hình thái học 3D tế bào lympho T và ảnh kính hiển vi huỳnh quang đồng tiêu (NIH) ghi lại khoảnh khắc nhiều tế bào T gây độc đang phóng hạt độc tiêu diệt trực tiếp tế bào đích.",
    note: "Liên hệ bài: Tế bào T CD8+ (Tc / CTL) nhận diện peptide trình diện bởi BẤT KỲ tế bào ký chủ nào bị nhiễm vi sinh vật nội bào (như virus) hoặc tế bào u và giết trực tiếp tế bào đó, giúp xóa ổ nhiễm hoặc ức chế khối u (nền tảng liệu pháp miễn dịch ung thư).",
    panels: [
      {
        label: "A. Mô hình bề mặt Tế bào Lympho T",
        src: "assets/images/img_t_cell_blausen.png",
        credit: "Blausen Medical Communications / Wikimedia Commons (CC BY 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Blausen_0625_Lymphocyte_T_cell.png",
        pins: [
          { n: 1, x: 50, y: 42, label: "Nhân lớn chiếm gần hết tế bào", desc: "Đặc trưng hình thái của lympho bào trưởng thành; tuy B, Th, Tc, Treg giống nhau về hình thái quang học nhưng khác hẳn phân tử dấu ấn CD bề mặt." },
          { n: 2, x: 24, y: 52, label: "Màng tế bào mang thụ thể TCR & CD", desc: "Thụ thể TCR kết hợp đồng thụ thể CD4 hoặc CD8 chỉ nhận diện đoạn peptide protein trình diện trên MHC." }
        ]
      },
      {
        label: "B. Kính hiển vi huỳnh quang: Tế bào T gây độc (màng lục, hạt đỏ) tiêu diệt tế bào u (xanh lam)",
        src: "assets/images/img_killer_t_cell.png",
        credit: "National Institutes of Health (NIH) / Wikimedia Commons (Public Domain)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Killer_T_cells_surround_a_cancer_cell.png",
        darkBg: true,
        pins: [
          { n: 1, x: 51, y: 50, label: "Tế bào khối u (Tế bào đích)", desc: "Tế bào mang kháng nguyên lạ/biến đổi bị bao vây toàn diện bởi các tế bào T CD8+ đặc hiệu." },
          { n: 2, x: 28, y: 74, label: "Tế bào T gây độc (Tc / CTL)", desc: "Màng tế bào (nhuộm xanh lục) áp sát tạo khớp nối miễn dịch và dồn các hạt độc tế bào (màu đỏ) hướng về phía tế bào đích." },
          { n: 3, x: 74, y: 43, label: "Phóng thích hạt độc tế bào", desc: "Giải phóng enzym làm tế bào nhiễm virus hoặc tế bào ung thư chết theo chương trình, loại trừ hoàn toàn ổ bệnh nội bào." }
        ]
      }
    ]
  },

  {
    id: "M1.6",
    lessonId: 4,
    chapter: "Bổ trợ Cơ quan Trung ương • Mục 7 & 9",
    page: "tr. 10–11, 14",
    type: "photo",
    title: "Hình M1.6. Cơ quan Lympho Trung ương: Cấu trúc & Vi thể Tuyến ức (Thymus)",
    caption: "Cấu tạo vùng vỏ – vùng tủy tuyến ức (nơi huấn luyện tế bào T) và tiêu bản H&E thật cho thấy Tiểu thể Hassall đặc trưng ở vùng tủy.",
    note: "Liên hệ Hình 1.5 & Mục 9 (tr. 14): Tuyến ức và Tủy xương là 2 CƠ QUAN LYMPHO TRUNG ƯƠNG của người — nơi tế bào T và B trưởng thành sẵn sàng ra ngoại biên (lưu ý không nhầm với hạch bạch huyết hay lách là cơ quan ngoại biên!).",
    panels: [
      {
        label: "A. Sơ đồ phân vùng Vỏ – Tủy tiểu thùy tuyến ức",
        src: "assets/images/img_thymus_openstax.png",
        credit: "OpenStax College / Wikimedia Commons (CC BY 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:2206_The_Location_Structure_and_Histology_of_the_Thymus._Cropped.png",
        pins: [
          { n: 1, x: 50, y: 20, label: "Vùng vỏ (Cortex) giàu Thymocytes", desc: "Nơi các tiền thân dòng T từ tủy xương đi tới, sắp xếp thụ thể TCR và trải qua bước chọn lọc ban đầu với tế bào biểu mô vỏ." },
          { n: 2, x: 52, y: 59, label: "Vùng tủy (Medulla) có Tế bào tua gai & Đại thực bào", desc: "Hoàn tất huấn luyện dung nạp bản thân: loại bỏ những tế bào T tự phản ứng quá mạnh với kháng nguyên bản thân." },
          { n: 3, x: 68, y: 21, label: "Vách xơ (Trabecula) & Mạch máu", desc: "Tế bào T trưởng thành theo mạch máu rời tuyến ức ra hạch bạch huyết, lách và niêm mạc." }
        ]
      },
      {
        label: "B. Tiêu bản H&E Tuyến ức — Tiểu thể Hassall",
        src: "assets/images/img_thymus_hassall.jpg",
        credit: "Drvasilerus / Wikimedia Commons (CC BY-SA 4.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Hassall_corpuscle.jpg",
        pins: [
          { n: 1, x: 48, y: 53, label: "Tiểu thể Hassall (Thymic corpuscle)", desc: "Cấu trúc tế bào biểu mô xếp lớp đồng tâm bắt màu hồng đậm đặc trưng giúp nhận diện mô học vùng tủy tuyến ức." },
          { n: 2, x: 25, y: 38, label: "Đám tế bào lympho T đang trưởng thành", desc: "Mật độ dày đặc các nhân tế bào lympho T tròn sẫm màu nằm kín nền tuyến ức." }
        ]
      }
    ]
  },

  {
    id: "M1.7",
    lessonId: 5,
    chapter: "Bổ trợ Cơ quan Ngoại biên • Mục 9 & 10",
    page: "tr. 13–14",
    type: "photo",
    title: "Hình M1.7. Cơ quan Lympho Ngoại biên: Cấu trúc & Nang Hạch bạch huyết",
    caption: "Đối chiếu giải phẫu – mô học Hạch bạch huyết (nơi tế bào T gặp APC và tế bào B tăng sinh ở trung tâm mầm) cùng tiêu bản hiển vi nang bạch huyết thật.",
    note: "Liên hệ Mục 8.2 (tr. 14): Bên cạnh tế bào tua gai cổ điển (hoạt hóa T), một loại tế bào tua gai đặc biệt nằm ở TRUNG TÂM MẦM của nang bạch huyết (FDC) có chức năng trình diện kháng nguyên để hoạt hóa tế bào LYMPHO B!",
    panels: [
      {
        label: "A. Giải phẫu & Mô học cắt ngang Hạch bạch huyết",
        src: "assets/images/img_lymph_node_openstax.jpg",
        credit: "OpenStax College / Wikimedia Commons (CC BY 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:2207_Structure_and_Histology_of_a_Lymph_Node.jpg",
        pins: [
          { n: 1, x: 79, y: 82, label: "Mạch bạch huyết hướng tâm (Afferent)", desc: "Mang dịch bạch huyết chứa kháng nguyên và tế bào tua gai từ mô ngoại vi đổ vào xoang dưới vỏ hạch." },
          { n: 2, x: 39, y: 37, label: "Trung tâm mầm (Germinal centers)", desc: "Khu vực vùng vỏ chứa các nang lympho B hoạt động mạnh (có FDC trình diện kháng nguyên hoạt hóa B)." },
          { n: 3, x: 79, y: 22, label: "Mạch bạch huyết ly tâm (Efferent)", desc: "Cửa ra tại rốn hạch cho các tế bào lympho T và B đã hoạt hóa thoát vào tuần hoàn máu (xem Hình 1.7)." }
        ]
      },
      {
        label: "B. Vi thể Nang bạch huyết với Trung tâm mầm sáng màu (H&E)",
        src: "assets/images/img_lymph_follicle.jpg",
        credit: "Sameem Arif / Wikimedia Commons (CC BY-SA 4.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Lymph_node_follicle.jpg",
        darkBg: true,
        pins: [
          { n: 1, x: 48, y: 57, label: "Trung tâm mầm sáng màu", desc: "Chứa các tế bào B đang tăng sinh biệt hóa kích thước lớn hơn nên nhạt màu hơn, tương tác với FDC và T giúp đỡ." },
          { n: 2, x: 34, y: 36, label: "Vùng áo (Mantle zone) tối màu", desc: "Vành đai dày đặc các tế bào lympho B naïve nhỏ, nhân sẫm màu bao quanh trung tâm mầm." }
        ]
      }
    ]
  },

  {
    id: "M1.8",
    lessonId: 5,
    chapter: "Bổ trợ Cơ quan Ngoại biên • Mục 9",
    page: "tr. 11, 14",
    type: "photo",
    title: "Hình M1.8. Cơ quan Lympho Ngoại biên: Lách (Tủy trắng & Tủy đỏ)",
    caption: "Cấu tạo giải phẫu và vi thể Lách — cơ quan lympho ngoại biên lọc các kháng nguyên lưu hành trực tiếp trong dòng máu.",
    note: "Phân biệt vai trò cơ quan ngoại biên: Hạch bạch huyết lọc kháng nguyên từ MÔ qua đường BẠCH HUYẾT, còn LÁCH lọc kháng nguyên từ MÁU qua động mạch lách (tủy trắng chứa lympho B & T quanh tiểu động mạch trung tâm; tủy đỏ giàu đại thực bào dọn hồng cầu già và mầm bệnh đã opson hóa).",
    panels: [
      {
        label: "Giải phẫu và Mô học Lách (OpenStax)",
        src: "assets/images/img_spleen_openstax.jpg",
        credit: "OpenStax College / Wikimedia Commons (CC BY 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:2208_Spleen.jpg",
        pins: [
          { n: 1, x: 67, y: 34, label: "Tủy trắng (White pulp)", desc: "Bao quanh tiểu động mạch trung tâm lách, tập trung vùng T (bao lympho quanh tiểu động mạch) và nang B tạo đáp ứng miễn dịch chống mầm bệnh đường máu." },
          { n: 2, x: 62, y: 18, label: "Tủy đỏ (Red pulp)", desc: "Mạng xoang tĩnh mạch và dây tủy giàu đại thực bào thanh lọc máu và thực bào vi khuẩn đã được kháng thể opson hóa." },
          { n: 3, x: 49, y: 69, label: "Trung tâm mầm & Tiểu động mạch trung tâm trên vi thể", desc: "Vòng nang lympho tròn nổi bật bên cạnh tiểu động mạch trung tâm cắt ngang." }
        ]
      }
    ]
  },

  {
    id: "M1.9",
    lessonId: 5,
    chapter: "Bổ trợ Cơ quan Ngoại biên • Mục 9",
    page: "tr. 11, 14",
    type: "photo",
    title: "Hình M1.9. Tổ chức Lympho Niêm mạc (MALT — Mảng Peyer Hồi tràng)",
    caption: "Tiêu bản H&E thành ruột non cho thấy các nang bạch huyết xếp thành mảng (Mảng Peyer) nằm ngay dưới lớp biểu mô niêm mạc cửa ngõ tiêu hóa.",
    note: "Liên hệ bài (tr. 14 & tr. 17): Tổ chức lympho ở da và niêm mạc là một phần của hệ cơ quan lympho ngoại biên và ngày càng được xem là hệ miễn dịch khu vực gắn bó mật thiết với hệ vi sinh vật (microbiome) cư trú tại niêm mạc.",
    panels: [
      {
        label: "Mảng Peyer dưới niêm mạc hồi tràng (H&E)",
        src: "assets/images/img_peyers_patch.jpg",
        credit: "Plainpaper / Wikimedia Commons (CC BY-SA 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:Peyer%27s_patch_(improved_color).jpg",
        pins: [
          { n: 1, x: 73, y: 59, label: "Mảng Peyer (Nang bạch huyết MALT)", desc: "Cụm nang lympho giàu tế bào B, tế bào T và APC đóng chốt ngay dưới niêm mạc để đáp ứng nhanh với kháng nguyên xâm nhập đường tiêu hóa." },
          { n: 2, x: 44, y: 45, label: "Nhung mao biểu mô niêm mạc", desc: "Hàng rào biểu mô niêm mạc cùng dịch nhầy và kháng sinh tự nhiên tại chỗ — tuyến phòng ngự bẩm sinh đầu tiên." },
          { n: 3, x: 84, y: 52, label: "Lớp cơ trơn thành ruột", desc: "Giới hạn phía ngoài của thành hồi tràng, ngăn cách ổ lympho niêm mạc với thanh mạc." }
        ]
      }
    ]
  },

  {
    id: "M1.10",
    lessonId: 5,
    chapter: "Bổ trợ Tuần hoàn Lympho • Mục 10",
    page: "tr. 14",
    type: "photo",
    title: "Hình M1.10. Mạng lưới Tiểu tĩnh mạch Nội mô cao (HEV) trong Hạch bạch huyết",
    caption: "Hình ảnh nhuộm mạng mạch máu trong nhu mô hạch bạch huyết minh họa hệ thống tiểu tĩnh mạch nội mô cao (HEV) — cửa ngõ chuyên biệt giúp T naïve xuyên mạch vào hạch.",
    note: "Đối chiếu trực tiếp Hình 1.7 (tr. 14): Tế bào T naïve lưu thông trong máu chỉ rời mạch đi vào vùng T của hạch tại các Tiểu tĩnh mạch nội mô cao (HEV) dưới sự hướng dẫn của chemokine và phân tử kết dính giữa T với tế bào nội mô.",
    panels: [
      {
        label: "Mạng mạch máu & Tiểu tĩnh mạch nội mô cao (HEV) trong hạch bạch huyết",
        src: "assets/images/img_hev_lymphnode.jpg",
        credit: "Art Anderson / Wikimedia Commons (CC BY-SA 3.0)",
        creditUrl: "https://commons.wikimedia.org/wiki/File:High_Endothelial_Venules_in_a_Lymph_Node._My_work_was_done_at_Johns_Hopkins_-_panoramio.jpg",
        pins: [
          { n: 1, x: 62, y: 42, label: "Tiểu tĩnh mạch nội mô cao (HEV)", desc: "Các nhánh tĩnh mạch thành dày đặc trưng trong vùng cận vỏ hạch bạch huyết, biểu hiện phân tử kết dính và chemokine kéo tế bào T naïve từ máu vào hạch." },
          { n: 2, x: 35, y: 35, label: "Nhánh vi mạch phân bố trong nhu mô hạch", desc: "Kết nối tuần hoàn động mạch – mao mạch – HEV giúp hàng tỷ tế bào lympho tái tuần hoàn liên tục để tầm soát kháng nguyên." }
        ]
      }
    ]
  }
];
