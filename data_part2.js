// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 2: BÀI 4 ĐẾN BÀI 6
// Chuẩn Đề cương Ôn thi Cao học KHYS 2026 – Môn: Sinh lý bệnh – Miễn dịch
// Giáo trình Miễn Dịch Đại Cương (YDS, Tái bản 2025) – Bài 1 (Mục 7–12, Tóm tắt & Lượng giá, tr. 10–19)
// ==========================================================================

window.LESSONS_PART2 = [
  // ========================================================================
  // BÀI 4: TRƯỞNG THÀNH LYMPHO, PHÂN LOẠI TẾ BÀO LYMPHO & APC
  // ========================================================================
  {
    id: 4,
    group: "III. TẾ BÀO & CƠ QUAN MIỄN DỊCH",
    title: "Bài 4: Quá trình Trưởng thành, Các dòng Lympho & Tế bào Trình diện (APC)",
    shortTitle: "Trưởng thành, Dòng Lympho & APC",
    textbookRef: "Miễn dịch Đại cương YDS 2025 – Bài 1 (Mục 7 & Mục 8, tr. 10–14)",
    summary: "Quá trình trưởng thành của tế bào lympho ở Tủy xương (B) & Tuyến ức (T); số phận naïve vs hành sự (plasma blast về tủy xương) vs trí nhớ (<5% sơ sinh → >50% người lớn); phân biệt B, Th, Treg, Tc qua phân tử CD; Tế bào tua gai (DC) vs Tế bào tua gai nang bạch huyết (FDC).",
    simId: "sim_cells_apc",
    simTitle: "Phòng Thí nghiệm Định danh Phân tử CD, APC & Tín hiệu Đồng kích thích",
    figureIds: ["H1.5", "H1.6", "M1.4", "M1.5", "M1.6"],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🌱 7. Quá trình Trưởng thành &amp; Số phận Tế bào Lympho <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H1.5')">🖼️ Hình 1.5</button> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('M1.6')">🔬 M1.6 Tuyến ức</button></div>
          <ul class="theory-list">
            <li><strong>Nguồn gốc &amp; Nơi trưởng thành (Cơ quan lympho trung ương):</strong> Tất cả tế bào lympho đều sinh ra từ <strong>tế bào đầu dòng lympho ở tủy xương</strong>; sau đó:
              <br/>• <strong>Tế bào lympho B:</strong> Trưởng thành ngay tại <strong>Tủy xương</strong>.
              <br/>• <strong>Tế bào lympho T:</strong> Được huấn luyện và trưởng thành tại <strong>Tuyến ức (Thymus)</strong>.</li>
            <li><strong>Số phận tế bào chưa tiếp xúc kháng nguyên (Naïve):</strong> Rời cơ quan trung ương → vào máu → di chuyển qua các cơ quan lympho ngoại biên và có thể sống <strong>nhiều tháng</strong> để tìm kiếm kháng nguyên. Nếu <em>không được kích thích bởi kháng nguyên đặc hiệu</em>, chúng sẽ <strong>chết theo chương trình (apoptosis)</strong> và được thay thế bởi tế bào mới từ trung ương.</li>
            <li><strong>Tế bào hành sự (Effector cell) — Loại bỏ kháng nguyên:</strong>
              <br/>• <strong>Dòng B → Tương bào:</strong> Sản xuất kháng thể; một số <strong>tương bào non (plasma blast)</strong> ra máu ngoại biên có thể di chuyển <strong>trở lại tủy xương</strong> phát triển thành tương bào <em>sống nhiều năm</em>, nhanh chóng tiết kháng thể khi tái nhiễm.
              <br/>• <strong>T CD4⁺ hành sự:</strong> Sản xuất <strong>cytokine</strong> hoạt hóa lympho B, đại thực bào.
              <br/>• <strong>T CD8⁺ hành sự:</strong> Tấn công trực tiếp tế bào ký chủ nhiễm vi sinh vật. Các tế bào T hành sự có <strong>đời sống ngắn</strong> và chết đi sau khi hết kháng nguyên.</li>
            <li><strong>Tế bào trí nhớ (Memory cell):</strong> Có thể sống lâu dài <strong>nhiều tháng, nhiều năm</strong> mà <em>không cần sự hiện diện của kháng nguyên</em>. Không hoạt động chức năng hành sự cho đến khi gặp lại kháng nguyên đặc hiệu.</li>
          </ul>
          <div class="callout formula">
            <div class="callout-title">📊 Biến động Tỷ lệ Tế bào Trí nhớ theo Tuổi (tr. 11)</div>
            Số lượng tế bào trí nhớ tăng dần theo thời gian: từ <strong>dưới 5% (&lt; 5%)</strong> tổng số tế bào lympho T ở <strong>trẻ sơ sinh</strong> lên đến <strong>hơn 50% (&gt; 50%)</strong> ở <strong>người trưởng thành</strong>!
          </div>
        </div>

        <div class="card">
          <div class="card-title">🔬 8.1. Phân loại Tế bào Lympho bằng Phân tử CD <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H1.6')">🖼️ Hình 1.6</button> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('M1.5')">🔬 M1.5 T CD8+</button></div>
          <p style="font-size:14px;margin-bottom:8px;">Người trưởng thành có khoảng <strong>10¹² tế bào lympho</strong> — duy nhất có thể nhân lên thành clone đặc hiệu. Dù <strong>giống nhau về hình thái</strong> dưới kính hiển vi nhưng khác hẳn chức năng &amp; nguồn gốc → phân biệt nhờ các protein bề mặt gọi là <strong>phân tử CD (dấu ấn bề mặt)</strong>.</p>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Quần thể</th>
                  <th>Dấu ấn &amp; Thụ thể</th>
                  <th>Cách nhận biết &amp; Chức năng chính</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Lympho B</strong></td>
                  <td>Thụ thể kháng thể gắn màng (BCR)</td>
                  <td><strong>Duy nhất</strong> sản xuất kháng thể; nhận diện trực tiếp kháng nguyên vi khuẩn hoặc hòa tan → biệt hóa thành <strong>tương bào</strong> tiết kháng thể cùng đặc hiệu.</td>
                </tr>
                <tr>
                  <td><strong>T CD4⁺: T giúp đỡ (Th)</strong></td>
                  <td>CD4⁺, TCR nhận peptide trên <strong>MHC lớp II</strong></td>
                  <td>Giữ vai trò quan trọng nhất trong các tế bào T: sản xuất <strong>cytokine</strong> hỗ trợ lympho B sản xuất kháng thể, hoạt hóa đại thực bào diệt vi khuẩn nội bào và chiêu mộ bạch cầu gây viêm.</td>
                </tr>
                <tr>
                  <td><strong>T CD4⁺: T điều hòa (Treg)</strong></td>
                  <td>Một phân nhóm của <strong>T CD4⁺</strong></td>
                  <td>Có tác dụng <strong>ức chế đáp ứng miễn dịch</strong>, hạn chế hoạt động của các lympho khác (đặc biệt là T) nhằm <strong>ngăn ngừa tự miễn</strong>.</td>
                </tr>
                <tr>
                  <td><strong>T CD8⁺: T gây độc (Tc / CTL)</strong></td>
                  <td>CD8⁺, TCR nhận peptide trên <strong>MHC lớp I</strong></td>
                  <td>Giết trực tiếp bất kỳ tế bào ký chủ bị nhiễm vi sinh vật nội bào (như virus) hoặc tế bào khối u.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🛰️ 8.2. Tế bào Trình diện Kháng nguyên (APC) — Cầu nối Bẩm sinh &amp; Thích nghi <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('M1.4')">🔬 M1.4 Tế bào tua gai</button></div>
        <div class="grid-2">
          <div>
            <ul class="theory-list">
              <li><strong>Vị trí &amp; Vai trò:</strong> Thường nằm ở cửa ngõ xâm nhập (da, niêm mạc đường tiêu hóa, hô hấp, niệu sinh dục...), có chức năng <strong>bắt lấy, xử lý và trình diện kháng nguyên</strong> cho tế bào lympho T — đây là giai đoạn đầu tiên hoạt hóa miễn dịch thích nghi.</li>
              <li><strong>Tế bào tua gai (Dendritic cell - DC):</strong> Là APC <strong>quan trọng nhất và mạnh nhất</strong> để hoạt hóa tế bào lympho T:
                <br/>• Bắt lấy kháng nguyên protein xâm nhập qua da/niêm mạc → vận chuyển đến <strong>hạch bạch huyết</strong> để trình diện cho T.
                <br/>• Khi bị vi khuẩn kích thích, tế bào tua gai biểu hiện rất nhiều <strong>yếu tố đồng kích thích</strong> đóng vai trò là <strong>tín hiệu thứ hai</strong> cần thiết để hoạt hóa tế bào T → là tế bào mạnh nhất kích hoạt T.</li>
              <li><strong>Các APC khác:</strong> Ngoài tế bào tua gai, <strong>đại thực bào</strong> và <strong>tế bào lympho B</strong> cũng có chức năng trình diện kháng nguyên cho lympho T. APC chính là <strong>cầu nối giữa miễn dịch bẩm sinh và miễn dịch thích nghi</strong>.</li>
            </ul>
          </div>
          <div class="callout trap" style="margin:0;align-self:start;">
            <div class="callout-title">⚠️ Bẫy Phân biệt: Tế bào Tua gai vs Tế bào Tua gai Nang bạch huyết (tr. 13–14)</div>
            <ul>
              <li><strong>Tế bào B tự nhận diện:</strong> Khác với T, tế bào lympho B có thể nhận diện <em>trực tiếp</em> kháng nguyên đặc hiệu của vi khuẩn mà không cần APC trình diện qua MHC.</li>
              <li><strong>Tế bào tua gai nang bạch huyết (FDC):</strong> Là một loại tế bào tua gai đặc biệt cư trú tại <strong>trung tâm mầm của nang bạch huyết</strong>, có chức năng trình diện kháng nguyên để <strong>hoạt hóa tế bào lympho B</strong> (chứ không phải trình diện để hoạt hóa T như DC cổ điển!).</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Tại cơ thể người trưởng thành, hai cơ quan nào được xếp vào nhóm cơ quan lympho TRUNG ƯƠNG — nơi các tế bào lympho T và B được huấn luyện và trưởng thành?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 7 & 9 (tr. 10, 14)",
        options: [
          "Tuyến ức (huấn luyện lympho T) và Tủy xương (nơi lympho B trưởng thành)",
          "Hạch bạch huyết và Lách",
          "Lách và Tổ chức lympho ở da niêm mạc",
          "Tuyến ức và Hạch bạch huyết vùng cổ"
        ],
        answer: 0,
        explain: "Trang 10 & 14: Tất cả tế bào lympho sinh ra từ tế bào đầu dòng ở tủy xương; T được huấn luyện trưởng thành tại tuyến ức còn B trưởng thành ở tủy xương. Tuyến ức và tủy xương là các cơ quan lympho trung ương."
      },
      {
        q: "Theo Mục 7 (tr. 11), tỷ lệ tế bào T trí nhớ trong tổng số tế bào lympho T thay đổi như thế nào từ trẻ sơ sinh đến người trưởng thành?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 7 (tr. 11)",
        options: [
          "Tăng dần từ dưới 5% ở trẻ sơ sinh lên đến hơn 50% ở người trưởng thành",
          "Giảm dần từ trên 50% ở trẻ sơ sinh xuống dưới 5% ở người trưởng thành",
          "Luôn cố định ở mức 25% suốt cuộc đời",
          "Trẻ sơ sinh hoàn toàn không có tế bào trí nhớ cho tới sau tuổi dậy thì"
        ],
        answer: 0,
        explain: "Trang 11: Số lượng tế bào trí nhớ tăng dần theo thời gian từ dưới 5% số lượng các tế bào lympho T ở trẻ sơ sinh lên đến hơn 50% ở người trưởng thành."
      },
      {
        q: "Loại tế bào nào dưới đây được khẳng định là tế bào trình diện kháng nguyên (APC) mạnh nhất để hoạt hóa tế bào lympho T và vì sao?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 8.2 (tr. 13)",
        options: [
          "Tế bào tua gai — vì khi bị vi khuẩn kích thích nó biểu hiện nhiều yếu tố đồng kích thích đóng vai trò tín hiệu thứ hai hơn các tế bào khác",
          "Tế bào NK — vì phóng thích perforin và granzyme tạo lỗ thủng trên màng T naïve",
          "Tương bào — vì di chuyển từ tủy xương về hạch để tiết bổ thể",
          "Tế bào mast — vì giải phóng histamin làm giãn mạch ngoại biên"
        ],
        answer: 0,
        explain: "Trang 13: Tế bào tua gai khi bị kích thích bởi vi khuẩn sẽ biểu hiện nhiều yếu tố đồng kích thích đóng vai trò tín hiệu thứ hai để hoạt hóa tế bào lympho T — do đó là tế bào mạnh nhất để hoạt hóa T."
      },
      {
        q: "Một loại tế bào tua gai đặc biệt nằm ở trung tâm mầm của nang bạch huyết có chức năng riêng biệt là gì (tr. 13–14)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 8.2 (tr. 13–14)",
        options: [
          "Trình diện kháng nguyên để hoạt hóa tế bào lympho B",
          "Giết trực tiếp các tế bào nhiễm virus bằng cơ chế gây độc",
          "Chuyển hóa các tế bào T naïve quay ngược lại tủy xương",
          "Tổng hợp trực tiếp chuỗi nặng kháng thể IgG"
        ],
        answer: 0,
        explain: "Trang 13–14: Một loại tế bào tua gai đặc biệt là tế bào tua gai ở nang bạch huyết, cụ thể là ở trung tâm mầm của nang bạch huyết, có chức năng trình diện kháng nguyên để hoạt hóa tế bào lympho B."
      },
      {
        q: "Hai quần thể tế bào lympho nào cùng thuộc nhóm T CD4⁺ theo phân loại ở Mục 8.1 (tr. 13)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 8.1 (tr. 13)",
        options: [
          "Tế bào T giúp đỡ (Th) và tế bào T điều hòa (Treg)",
          "Tế bào T giúp đỡ (Th) và tế bào T gây độc tế bào (Tc)",
          "Tế bào T gây độc tế bào (Tc) và tế bào NK",
          "Tế bào lympho B và tương bào"
        ],
        answer: 0,
        explain: "Trang 13: T CD4+ giữ vai trò quan trọng nhất trong số các tế bào lympho T. T CD4+ bao gồm tế bào T giúp đỡ (hỗ trợ B và thực bào) và một số T CD4+ khác gọi là tế bào T điều hòa có tác dụng ức chế đáp ứng miễn dịch."
      },
      {
        q: "Điều gì xảy ra đối với một tế bào lympho trưởng thành nhưng chưa tiếp xúc kháng nguyên (naïve) nếu sau nhiều tháng lưu hành ở ngoại biên mà KHÔNG gặp kháng nguyên đặc hiệu của nó?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 7 (tr. 10)",
        options: [
          "Tế bào sẽ chết theo chương trình (apoptosis) và được thay thế bởi các tế bào mới sinh ra từ cơ quan lympho trung ương",
          "Tế bào tự động chuyển thành tế bào trí nhớ sống nhiều năm",
          "Tế bào tự biến đổi thành tế bào T điều hòa tấn công tuyến ức",
          "Tế bào quay lại tủy xương trở thành tương bào tiết kháng thể"
        ],
        answer: 0,
        explain: "Trang 10: Các tế bào naïve lưu hành ở ngoại biên và có thể sống nhiều tháng tìm kiếm kháng nguyên; nếu không được kích thích bởi kháng nguyên đặc hiệu, chúng sẽ chết theo chương trình và được thay thế bởi các tế bào mới từ cơ quan lympho trung ương."
      },
      {
        q: "Trong dòng tế bào lympho B, bộ phận tương bào non (plasma blast) ra máu ngoại biên có thể di chuyển về đâu để sống nhiều năm và nhanh chóng tạo kháng thể bảo vệ khi tái nhiễm?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 7 (tr. 10)",
        options: [
          "Di chuyển trở lại tủy xương",
          "Di chuyển vào vùng vỏ tuyến ức",
          "Cư trú cố định trong tiểu tĩnh mạch nội mô cao",
          "Bám vĩnh viễn vào lớp sừng biểu bì da"
        ],
        answer: 0,
        explain: "Trang 10: Một số tương bào non (plasma blast) ra máu ngoại biên có thể di chuyển trở lại tủy xương và phát triển thành tương bào sống nhiều năm, nhanh chóng sản xuất kháng thể đặc hiệu khi tái nhiễm."
      },
      {
        q: "Các tế bào lympho trưởng thành dù trông giống hệt nhau về hình thái học nhưng trên thực tế được phân biệt thành B, Th, Tc, Treg dựa trên yếu tố nào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 8.1 (tr. 11–12)",
        options: [
          "Các protein biểu hiện trên bề mặt tế bào gọi là các phân tử CD hay dấu ấn bề mặt",
          "Hình dạng nhân hình bầu dục hay hình cầu dưới kính hiển vi quang học",
          "Kích thước đường kính hồng cầu đi kèm trong phết máu ngoại biên",
          "Loại acid nucleic (DNA hay RNA) mà tế bào đó dự trữ trong nhân"
        ],
        answer: 0,
        explain: "Trang 11–12: Người trưởng thành có khoảng 10¹² tế bào lympho; chúng giống nhau về hình thái nhưng khác nhau về chức năng, khả năng đáp ứng và nguồn gốc, thường được phân biệt dựa trên các protein bề mặt gọi là phân tử CD hay dấu ấn bề mặt."
      },
      {
        q: "Trong các tế bào sau, tế bào nào ĐÓNG VAI TRÒ cầu nối giữa miễn dịch bẩm sinh và miễn dịch thích nghi bằng cách bắt giữ, xử lý và trình diện kháng nguyên cho lympho T?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 8.2 (tr. 13)",
        options: [
          "Các tế bào trình diện kháng nguyên (tế bào tua gai, đại thực bào và lympho B)",
          "Chỉ có tương bào cư trú trong tủy xương",
          "Tế bào biểu mô sừng hóa không có nhân",
          "Tế bào hồng cầu trưởng thành"
        ],
        answer: 0,
        explain: "Trang 13: Ngoài tế bào tua gai (quan trọng nhất), đại thực bào và lympho B cũng có chức năng trình diện kháng nguyên cho tế bào T. Có thể nói tế bào trình diện kháng nguyên là cầu nối giữa miễn dịch bẩm sinh và miễn dịch thích nghi."
      },
      {
        q: "Chức năng hành sự đặc trưng của tế bào lympho T điều hòa (Treg) được mô tả trong Hình 1.6 (tr. 12) là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.6 (tr. 12)",
        options: [
          "Hạn chế và ức chế hoạt động của các tế bào lympho đáp ứng khác, giúp ngăn ngừa tình trạng tự miễn",
          "Hoạt hóa tương bào tiết lượng lớn IgE gây sốc phản vệ",
          "Tiêu diệt trực tiếp tế bào biểu mô nhiễm virus bằng hạt perforin",
          "Vận chuyển kháng thể từ máu mẹ qua bánh nhau"
        ],
        answer: 0,
        explain: "Hình 1.6 (tr. 12): Tế bào T điều hòa hạn chế hoạt động của các tế bào lympho khác, đặc biệt là tế bào T đáp ứng, nhằm ngăn ngừa tình trạng tự miễn."
      },
      {
        q: "Sự khác biệt về đời sống sau khi hoàn thành nhiệm vụ giữa tế bào lympho T hành sự và tế bào trí nhớ là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 7 (tr. 11)",
        options: [
          "Tế bào T hành sự có đời sống ngắn và chết đi khi hết kháng nguyên; tế bào trí nhớ sống nhiều tháng – nhiều năm không cần kháng nguyên",
          "Tế bào T hành sự sống vĩnh viễn suốt đời; tế bào trí nhớ chết ngay sau 24 giờ",
          "Cả hai đều không hoạt động được nữa khi gặp lại kháng nguyên đặc hiệu",
          "Tế bào trí nhớ luôn tiết kháng thể ồ ạt ngay cả khi không có kháng nguyên"
        ],
        answer: 0,
        explain: "Trang 11: Các tế bào lympho T hành sự có đời sống ngắn và sẽ chết đi sau khi hết kháng nguyên đặc hiệu, còn tế bào trí nhớ có thể sống nhiều tháng – nhiều năm mà không cần kháng nguyên và chỉ hoạt hóa hành sự khi tái nhiễm."
      },
      {
        q: "Nhận định nào sau đây ĐÚNG về tế bào lympho B theo Mục 8.1 & 8.2 (tr. 13)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 8.1 & 8.2 (tr. 13)",
        options: [
          "Là tế bào duy nhất sản xuất kháng thể, nhận diện trực tiếp kháng nguyên vi khuẩn không cần APC và bản thân nó cũng có thể trình diện kháng nguyên cho tế bào T",
          "Chỉ có thể nhận diện kháng nguyên khi được tế bào T gây độc CD8+ cắt nhỏ trên bề mặt",
          "Chỉ trưởng thành tại tuyến ức rồi đi về tủy xương tiết cytokine",
          "Không mang thụ thể bề mặt nào trước khi trở thành tương bào"
        ],
        answer: 0,
        explain: "Trang 13: Lympho B là tế bào duy nhất sản xuất kháng thể, dùng kháng thể màng làm thụ thể nhận diện trực tiếp kháng nguyên không cần APC, đồng thời B cũng có chức năng như một APC trình diện kháng nguyên cho lympho T."
      }
    ]
  },

  // ========================================================================
  // BÀI 5: CƠ QUAN MIỄN DỊCH, TUẦN HOÀN LYMPHO & 5 GIAI ĐOẠN ĐÁP ỨNG
  // ========================================================================
  {
    id: 5,
    group: "III. TẾ BÀO & CƠ QUAN MIỄN DỊCH",
    title: "Bài 5: Cơ quan Miễn dịch, Tuần hoàn Lympho & 5 Giai đoạn Đáp ứng Thích nghi",
    shortTitle: "Cơ quan, Tuần hoàn & 5 Pha Đáp ứng",
    textbookRef: "Miễn dịch Đại cương YDS 2025 – Bài 1 (Mục 9–11, tr. 14–15)",
    summary: "Cơ quan lympho trung ương (tuyến ức, tủy xương) vs ngoại biên (hạch bạch huyết, lách, tổ chức lympho dưới da & niêm mạc); lộ trình di chuyển của tế bào T qua tiểu tĩnh mạch nội mô cao (HEV), chemokine, phân tử kết dính, mạch bạch huyết ly tâm; 5 giai đoạn đáp ứng miễn dịch thích nghi (0 → 7 → 14+ ngày).",
    simId: "sim_homing_phases",
    simTitle: "Phòng Mô phỏng Tuần hoàn Lympho qua HEV & Động học 5 Pha Đáp ứng",
    figureIds: ["H1.7", "H1.8", "M1.7", "M1.8", "M1.9", "M1.10"],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🏛️ 9. Cơ quan Miễn dịch: Trung ương vs Ngoại biên <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('M1.7')">🔬 M1.7 Hạch</button> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('M1.8')">🔬 M1.8 Lách</button> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('M1.9')">🔬 M1.9 MALT</button></div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Nhóm cơ quan</th>
                  <th>Cấu trúc cụ thể ở người</th>
                  <th>Chức năng sinh lý cốt lõi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Cơ quan lympho trung ương</strong></td>
                  <td>• <strong>Tuyến ức (Thymus)</strong><br/>• <strong>Tủy xương</strong></td>
                  <td>Nơi các tế bào lympho T và B phát triển, được huấn luyện và <strong>trưởng thành</strong> sẵn sàng ra ngoại biên.</td>
                </tr>
                <tr>
                  <td><strong>Cơ quan lympho ngoại biên</strong></td>
                  <td>• <strong>Các hạch bạch huyết</strong><br/>• <strong>Lách</strong><br/>• <strong>Tổ chức lympho ở dưới da và niêm mạc</strong></td>
                  <td>Nơi các tế bào lympho trưởng thành (naïve) gặp gỡ kháng nguyên, được <strong>hoạt hóa</strong> và trở thành <strong>tế bào hành sự</strong> tạo đáp ứng chống vi sinh vật.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="callout pearl">
            <div class="callout-title">💡 Điểm nhấn hiện đại (tr. 17)</div>
            Hệ thống miễn dịch ngày nay được coi là một <strong>cơ quan rộng lớn</strong> phân bố khắp cơ thể, kết nối qua tế bào bạch cầu lưu thông và chất trung gian hòa tan; các tế bào miễn dịch được <strong>"in dấu" bởi cơ quan cư trú</strong> để điều chỉnh theo nhu cầu từng khu vực và gắn chặt với <strong>hệ vi sinh vật (microbiome)</strong>.
          </div>
        </div>

        <div class="card">
          <div class="card-title">🚦 10. Tuần hoàn &amp; Di trú của Tế bào Lympho T <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H1.7')">🖼️ Hình 1.7</button> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('M1.10')">🔬 M1.10 HEV</button></div>
          <p style="font-size:14px;margin-bottom:8px;">Tế bào lympho trưởng thành thường xuyên di chuyển giữa máu và cơ quan ngoại biên để tầm soát kháng nguyên:</p>
          <ol class="theory-list">
            <li><strong>Vào hạch bạch huyết:</strong> Tế bào lympho T chưa tiếp xúc kháng nguyên (<em>naïve</em>) đi từ động mạch qua các <strong>tiểu tĩnh mạch nội mô cao (HEV)</strong> để vào <strong>vùng tế bào T</strong> của hạch bạch huyết.</li>
            <li><strong>Điều hướng phân tử:</strong> Quá trình gắn kết và xuyên mạch qua tế bào nội mô được kiểm soát bởi các <strong>chemokine</strong> và các <strong>phân tử kết dính</strong>.</li>
            <li><strong>Hoạt hóa tại hạch:</strong> Gặp tế bào trình diện kháng nguyên (APC) → nhân lên và biệt hóa thành <strong>tế bào T hành sự / tế bào nhớ</strong>.</li>
            <li><strong>Thoát hạch ra máu đến ổ nhiễm:</strong> Tế bào T đã hoạt hóa thoát khỏi hạch qua <strong>mạch bạch huyết ly tâm</strong> → đi vào <strong>mạch máu</strong> → qua <strong>mạch máu ngoại biên</strong> di chuyển ưu tiên đến đúng các <strong>mô ngoại biên tại vị trí nhiễm trùng và viêm</strong> để loại trừ mầm bệnh.</li>
          </ol>
        </div>
      </div>

      <div class="card">
        <div class="card-title">📊 11. Năm Giai đoạn Liên tiếp của Đáp ứng Miễn dịch Thích nghi <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H1.8')">🖼️ Hình 1.8</button></div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Giai đoạn</th>
                <th>Mốc động học (Hình 1.8)</th>
                <th>Sự kiện Tế bào &amp; Cơ chế Chính</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Nhận diện kháng nguyên</strong></td>
                <td>Ngày 0 → 2</td>
                <td>Các tế bào lympho trưởng thành chưa tiếp xúc kháng nguyên lần nào (<em>naïve</em>) nhận diện kháng nguyên đặc hiệu (lympho T qua APC, lympho B nhận diện trực tiếp).</td>
              </tr>
              <tr>
                <td><strong>2. Hoạt hóa tế bào lympho</strong></td>
                <td>Ngày 2 → 7 (Đạt đỉnh)</td>
                <td>Gồm 2 quá trình nối tiếp: <strong>nhân lên của một clone tế bào</strong> đặc hiệu và <strong>biệt hóa</strong> thành tế bào hành sự (tương bào tiết kháng thể &amp; lympho T hành sự).</td>
              </tr>
              <tr>
                <td><strong>3. Thải trừ kháng nguyên</strong></td>
                <td>Ngày 7 → 14</td>
                <td>Các tế bào hành sự và kháng thể phối hợp loại bỏ mầm bệnh thông qua cả <strong>miễn dịch dịch thể</strong> (ngoại bào) và <strong>miễn dịch tế bào</strong> (nội bào).</td>
              </tr>
              <tr>
                <td><strong>4. Thu hẹp đáp ứng miễn dịch (Homeostasis)</strong></td>
                <td>Sau ngày 14</td>
                <td>Khi không còn kích thích bởi kháng nguyên đặc hiệu, các tế bào lympho hành sự sẽ <strong>chết theo chương trình (Apoptosis)</strong> để đưa hệ thống về trạng thái cân bằng nội môi.</td>
              </tr>
              <tr>
                <td><strong>5. Trí nhớ miễn dịch</strong></td>
                <td>Duy trì lâu dài</td>
                <td>Các <strong>tế bào trí nhớ còn sống sót</strong> (B nhớ và T nhớ) tồn tại nhiều tháng – nhiều năm để chuẩn bị cho lần tái nhiễm sau.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Cơ quan nào sau đây KHÔNG thuộc nhóm cơ quan lympho ngoại biên?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 9 (tr. 14)",
        options: [
          "Tuyến ức",
          "Hạch bạch huyết",
          "Lách",
          "Tổ chức lympho ở dưới da và niêm mạc"
        ],
        answer: 0,
        explain: "Trang 14: Tuyến ức và tủy xương là cơ quan lympho trung ương; cơ quan lympho ngoại biên gồm các hạch bạch huyết, lách và các tổ chức lympho ở dưới da và niêm mạc."
      },
      {
        q: "Theo Hình 1.7 và Mục 10 (tr. 14), tế bào lympho T naïve rời dòng máu để đi vào vùng tế bào T của hạch bạch huyết qua cấu trúc mạch nào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.7 (tr. 14)",
        options: [
          "Các tiểu tĩnh mạch nội mô cao (HEV)",
          "Mạch bạch huyết ly tâm tại rốn hạch",
          "Động mạch vành tim",
          "Các xoang tủy đỏ lách"
        ],
        answer: 0,
        explain: "Trang 14: Tế bào lympho T chưa tiếp xúc kháng nguyên (naïve) di chuyển từ máu qua các tiểu tĩnh mạch nội mô cao vào vùng tế bào T của hạch bạch huyết nhờ chemokine và phân tử kết dính."
      },
      {
        q: "Sau khi được hoạt hóa bởi kháng nguyên trong hạch bạch huyết, tế bào lympho T hành sự thoát ra khỏi hạch theo con đường nào để đi vào máu và tới mô ngoại biên?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.7 (tr. 14)",
        options: [
          "Theo mạch bạch huyết ly tâm đi vào máu, rồi xuyên mạch máu ngoại biên đến vị trí nhiễm trùng và viêm",
          "Đi ngược trở lại tiểu tĩnh mạch nội mô cao (HEV) để về thẳng tuyến ức",
          "Chui xuyên trực tiếp qua vỏ bao xơ hạch vào khoang màng bụng",
          "Ở yên vĩnh viễn trong nang bạch huyết suốt đời"
        ],
        answer: 0,
        explain: "Hình 1.7 (tr. 14): Tế bào T hoạt hóa thoát khỏi hạch qua mạch bạch huyết ly tâm, đi vào mạch máu và di chuyển ưu tiên đến các mô ngoại vi tại các vị trí nhiễm trùng và viêm."
      },
      {
        q: "Theo Mục 11 và Hình 1.8 (tr. 15), thứ tự đúng 5 giai đoạn liên tiếp của đáp ứng miễn dịch thích nghi là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 11 & Hình 1.8 (tr. 15)",
        options: [
          "Nhận diện kháng nguyên → Hoạt hóa tế bào lympho → Thải trừ kháng nguyên → Thu hẹp đáp ứng miễn dịch → Trí nhớ miễn dịch",
          "Hoạt hóa → Nhận diện → Trí nhớ → Thu hẹp → Thải trừ kháng nguyên",
          "Thu hẹp → Nhận diện → Thải trừ → Hoạt hóa → Trí nhớ miễn dịch",
          "Trí nhớ miễn dịch → Nhận diện → Thu hẹp → Hoạt hóa → Thải trừ kháng nguyên"
        ],
        answer: 0,
        explain: "Trang 15: Một đáp ứng miễn dịch thích nghi xảy ra qua 5 giai đoạn nối tiếp: (1) Nhận diện kháng nguyên → (2) Hoạt hóa tế bào lympho → (3) Thải trừ kháng nguyên → (4) Thu hẹp đáp ứng miễn dịch (homeostasis/apoptosis) → (5) Trí nhớ miễn dịch."
      },
      {
        q: "Trong giai đoạn thu hẹp đáp ứng miễn dịch (Homeostasis, Hình 1.8 tr. 15), cơ chế tế bào nào giúp số lượng tế bào lympho giảm về gần mức nền sau khi hết kháng nguyên?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 11 & Hình 1.8 (tr. 15)",
        options: [
          "Các tế bào lympho hành sự chết theo chương trình (Apoptosis) khi không còn kích thích bởi kháng nguyên đặc hiệu",
          "Tất cả tế bào lympho hành sự bị hoại tử ồ ạt gây viêm mạn toàn thân",
          "Tế bào lympho quay về tuyến ức biến thành tế bào biểu mô",
          "Bổ thể phá hủy đồng thời cả tế bào trí nhớ lẫn tế bào naïve"
        ],
        answer: 0,
        explain: "Trang 15: Ở giai đoạn thu hẹp đáp ứng miễn dịch, các tế bào lympho hành sự sẽ chết theo chương trình (apoptosis) khi không còn kích thích bởi kháng nguyên đặc hiệu, chỉ còn lại các tế bào trí nhớ sống sót."
      },
      {
        q: "Hai nhóm phân tử nào đóng vai trò trực tiếp dẫn đường và gắn kết giúp tế bào T di chuyển xuyên qua nội mô mạch máu vào hạch bạch huyết hoặc tới mô viêm?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.7 (tr. 14)",
        options: [
          "Chemokine và các phân tử kết dính giữa tế bào T với tế bào nội mô",
          "Hormon tuyến giáp và insulin",
          "Hemoglobin và yếu tố đông máu fibrin",
          "Acid nucleic và cholesterol màng"
        ],
        answer: 0,
        explain: "Trang 14 (Hình 1.7): Chemokine và các phân tử kết dính liên quan đến sự gắn kết của tế bào T với tế bào nội mô định hướng tế bào T vào vùng T của hạch (qua HEV) và tới mô viêm ngoại biên."
      },
      {
        q: "Trong Hình 1.8 (tr. 15), giai đoạn 'Hoạt hóa tế bào lympho' đạt đỉnh quanh ngày thứ 7 bao gồm hai quá trình tế bào chủ yếu nào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 11 & Hình 1.8 (tr. 15)",
        options: [
          "Nhân lên của clone tế bào đặc hiệu và biệt hóa thành tế bào hành sự (tương bào tiết kháng thể & T hành sự)",
          "Chết theo chương trình (apoptosis) và thoái hóa mỡ",
          "Di chuyển ngược về tủy xương và teo tuyến ức",
          "Giải phóng histamin từ tế bào mast và đông máu"
        ],
        answer: 0,
        explain: "Trang 15 & Hình 1.8: Ở giai đoạn hoạt hóa tế bào lympho, tế bào sẽ nhân lên thành một clone tế bào (clonal expansion) và biệt hóa thành tế bào hành sự (tế bào sản xuất kháng thể & lympho T hành sự)."
      },
      {
        q: "Trong cơ thể, cơ quan lympho ngoại biên nào có chức năng đặc thù tương tác trực tiếp với kháng nguyên xâm nhập qua cửa ngõ niêm mạc ruột (như mảng Peyer) hoặc da?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 9 (tr. 14)",
        options: [
          "Các tổ chức lympho ở dưới da và niêm mạc",
          "Tủy đỏ của xương đùi",
          "Vùng vỏ và vùng tủy tuyến ức",
          "Cơ vân và mô mỡ dưới da"
        ],
        answer: 0,
        explain: "Trang 14: Các cơ quan lympho ngoại biên bao gồm các hạch bạch huyết, lách và các tổ chức lympho ở dưới da và niêm mạc."
      },
      {
        q: "Vì sao đáp ứng miễn dịch thích nghi cần đến giai đoạn 'Thu hẹp đáp ứng miễn dịch' (homeostasis) sau khi đã thải trừ xong vi sinh vật?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 11 & Hình 1.8 (tr. 15)",
        options: [
          "Để loại bỏ các tế bào hành sự dư thừa không còn cần thiết khi hết kháng nguyên, đưa hệ miễn dịch về trạng thái cân bằng và chừa chỗ cho đáp ứng mới",
          "Để xóa sạch toàn bộ tế bào trí nhớ vừa tạo thành nhằm tránh trí nhớ miễn dịch",
          "Để biến các tế bào B hành sự thành tế bào NK của miễn dịch bẩm sinh",
          "Để ngăn cơ thể không phản ứng được trong lần tái nhiễm sau"
        ],
        answer: 0,
        explain: "Trang 15 & Hình 1.8: Giai đoạn thu hẹp (homeostasis) đưa số lượng tế bào lympho đang tăng sinh khổng lồ trở về trạng thái ổn định thông qua apoptosis khi hết kích thích kháng nguyên, trong khi vẫn giữ lại các tế bào trí nhớ sống sót."
      },
      {
        q: "Quan sát Hình 1.7 (tr. 14), sự khác biệt về hướng di chuyển ưu tiên giữa tế bào T naïve và tế bào T hành sự/nhớ khi lưu thông trong máu là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.7 (tr. 14)",
        options: [
          "T naïve ưu tiên đi qua HEV vào hạch bạch huyết tìm kháng nguyên; T hành sự/nhớ ưu tiên rời mạch máu ngoại biên vào mô đang nhiễm trùng & viêm",
          "T naïve chỉ đi thẳng vào ổ viêm mô da; T hành sự không bao giờ rời khỏi hạch bạch huyết",
          "Cả T naïve và T hành sự đều bị khóa chết trong tủy xương suốt đời",
          "T hành sự di chuyển qua mạch bạch huyết hướng tâm vào tủy xương để phân hủy kháng nguyên"
        ],
        answer: 0,
        explain: "Trang 14 (Hình 1.7): T naïve di chuyển từ máu qua HEV vào vùng T của hạch bạch huyết; sau khi được hoạt hóa, tế bào T hoạt hóa/hành sự thoát khỏi hạch vào máu và di chuyển ưu tiên đến các mô ngoại vi tại vị trí nhiễm trùng và viêm."
      },
      {
        q: "Tại giai đoạn 3 của đáp ứng miễn dịch thích nghi (Hình 1.8, tr. 15), hai cơ chế nào cùng hợp lực để thải trừ kháng nguyên?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.8 (tr. 15)",
        options: [
          "Miễn dịch dịch thể (tương bào tiết kháng thể) và Miễn dịch tế bào (lympho T hành sự)",
          "Chỉ riêng bổ thể và hàng rào sừng hóa",
          "Chỉ có tế bào T điều hòa (Treg) và apoptosis",
          "Hệ thống đông máu và tiểu cầu"
        ],
        answer: 0,
        explain: "Hình 1.8 (tr. 15): Hai mũi tên từ Miễn dịch dịch thể và Miễn dịch tế bào cùng hội tụ vào mục tiêu 'Thải trừ kháng nguyên' ở giai đoạn 3."
      },
      {
        q: "Đặc tính nào của một cơ quan miễn dịch ngoại biên như hạch bạch huyết giúp nó trở thành nơi tối ưu để khởi phát đáp ứng miễn dịch thích nghi?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 8.2, 9 & 10 (tr. 13–14)",
        options: [
          "Tập trung đồng thời APC (mang kháng nguyên từ mô tới), tế bào T naïve (từ máu qua HEV vào) và nang lympho B trong cấu trúc giải phẫu có tổ chức",
          "Là nơi sản sinh tế bào gốc tạo máu hồng cầu và tiểu cầu ở người lớn",
          "Là nơi không có bất kỳ mạch bạch huyết hay mạch máu nào đi qua",
          "Chỉ chứa tế bào NK và bổ thể, hoàn toàn không có tế bào T và B"
        ],
        answer: 0,
        explain: "Trang 13–14: Hạch bạch huyết tập trung tế bào tua gai mang kháng nguyên từ da/niêm mạc tới, đón T naïve qua HEV vào vùng T và có trung tâm mầm nang bạch huyết cho B → tối ưu hóa sự gặp gỡ giữa kháng nguyên và clone lympho đặc hiệu."
      }
    ]
  },

  // ========================================================================
  // BÀI 6: LƯỢC SỬ KHÁM PHÁ, TRIỂN VỌNG HỆ THỐNG & TỔNG ÔN ĐỀ CƯƠNG
  // ========================================================================
  {
    id: 6,
    group: "IV. LỊCH SỬ, TRIỂN VỌNG & TỔNG ÔN",
    title: "Bài 6: Lược sử Khám phá Nobel, Triển vọng Hệ thống & Tổng ôn Đề cương",
    shortTitle: "Lược sử Nobel, Triển vọng & Tổng ôn",
    textbookRef: "Miễn dịch Đại cương YDS 2025 – Bài 1 (Mục 12, Tóm tắt & Lượng giá, tr. 15–19)",
    summary: "Hai trụ cột khai sinh (Thực bào vs Huyết thanh kháng độc tố) và bổ thể/opson hóa; toàn bộ 3 nhánh nhà khoa học trong Hình 1.9 (từ Ehrlich, Burnet, Tonegawa, Steinman đến liệu pháp kiểm soát điểm kiểm soát Allison & Honjo); triển vọng hệ miễn dịch tích hợp mô, microbiome, đa ô-mic (multi-omics) và sinh học hệ thống; tổng hợp 7 điểm tóm tắt & 5 câu lượng giá chính thức.",
    simId: "sim_history_checkpoint",
    simTitle: "Phòng Đối chiếu Lịch sử Nobel & Liệu pháp Miễn dịch Điểm kiểm soát",
    figureIds: ["H1.9"],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🏛️ 12.1. Hai Khám phá Khởi đầu &amp; 3 Nhánh Phát triển <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H1.9')">🖼️ Hình 1.9 A-B-C</button></div>
          <ul class="theory-list">
            <li><strong>Hai khám phá khởi động ngành Miễn dịch học (tr. 15–16):</strong>
              <br/>1) <strong>Hiện tượng thực bào</strong> do tế bào thực hiện (<em>Ilya Metchnikoff</em>) → dẫn đến khái niệm <strong>miễn dịch bẩm sinh</strong> không đặc hiệu kháng nguyên do tế bào đảm trách.
              <br/>2) <strong>Sự trung hòa độc tố vi khuẩn bằng kháng thể</strong> (<em>Emil von Behring &amp; Kitasato</em>) → dẫn đến khái niệm <strong>miễn dịch thu được</strong> đặc hiệu kháng nguyên do yếu tố dịch thể.
              <br/>• Khái niệm phân đôi này cùng việc xác định <strong>bổ thể (Jules Bordet)</strong> và <strong>opson hóa (Almroth Wright)</strong> đã liên kết chặt chẽ miễn dịch bẩm sinh và miễn dịch thu được.</li>
            <li><strong>Giai đoạn trung gian &amp; Hóa miễn dịch (Hình 1.9A–B):</strong> Khám phá các dạng quá mẫn/sốc phản vệ (<em>Charles Richet</em>) cho thấy hệ miễn dịch cũng có thể gây hại; hóa miễn dịch làm sáng tỏ cấu trúc hóa học kháng thể (<em>Rodney Porter &amp; Gerald Edelman</em>), tương bào tiết kháng thể (<em>Astrid Fagraeus</em>), kháng thể đơn dòng (<em>Milstein &amp; Köhler</em>), tái tổ hợp gen kháng thể (<em>Susumu Tonegawa</em>) và tách biệt dòng B – T (<em>Max Cooper</em>).</li>
            <li><strong>Tế bào T, MHC &amp; Bẩm sinh hiện đại (Hình 1.9C):</strong> Tế bào T hoạt động như cơ quan điều hòa trung tâm (<em>Th</em> kiểm soát B, thực bào và T gây độc); lý thuyết chọn lọc clone (<em>Burnet &amp; Talmage</em>); dung nạp mắc phải (<em>Medawar</em>); tái tuần hoàn lympho (<em>Gowans</em>); vai trò tuyến ức (<em>Jacques Miller</em>); MHC &amp; hạn chế MHC (<em>Snell, Dausset, Benacerraf, Doherty, Zinkernagel</em>); thụ thể nhận diện mẫu PRR / TLR (<em>Janeway, Hoffmann, Beutler</em>); tế bào tua gai (<em>Ralph Steinman</em>); và đỉnh cao đương đại là <strong>liệu pháp kiểm soát điểm kiểm soát (checkpoint control) điều trị ung thư</strong> (<em>James Allison &amp; Tasuku Honjo</em>).</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🚀 12.2. Triển vọng Tương lai &amp; 7 Điểm Tóm tắt Chuẩn Sách (tr. 17–18)</div>
          <ul class="theory-list">
            <li><strong>Góc nhìn hiện đại về hệ miễn dịch:</strong> Ngày càng được coi là một <strong>cơ quan rộng lớn</strong> (không chỉ tủy xương, tuyến ức, lách mà cả hạch và nang lympho khắp cơ thể, kết nối qua bạch cầu lưu thông và chất trung gian hòa tan). Các tế bào miễn dịch được <strong>"in dấu" bởi cơ quan cư trú</strong> để điều chỉnh theo nhu cầu từng khu vực mô.</li>
            <li><strong>Vai trò hệ vi sinh vật (Microbiome):</strong> Ngày càng được coi là một cơ quan rất quan trọng với sức khỏe và bệnh tật, gắn chặt với hệ miễn dịch (rối loạn phản ứng miễn dịch khu vực gây nhiều bệnh đặc thù từng cơ quan).</li>
            <li><strong>Công nghệ Đa ô-mic &amp; Sinh học Hệ thống:</strong> Công nghệ đa ô-mic thông lượng cao (<em>high-throughput multi-omics</em>) và tin sinh học giúp xây dựng mạng lưới đa phân tử, mang lại cách tiếp cận sinh học hệ thống toàn diện → đưa giấc mơ về <strong>"viên đạn thần kỳ" của Paul Ehrlich</strong> tiến gần hơn đến hiện thực.</li>
          </ul>

          <div class="callout pearl">
            <div class="callout-title">📌 7 Điểm Tóm tắt Bắt buộc Thuộc lòng (tr. 17–18)</div>
            <ol>
              <li>Chức năng sinh lý chính: bảo vệ cơ thể khỏi <strong>nhiễm trùng và ung thư</strong>.</li>
              <li><strong>Miễn dịch bẩm sinh</strong>: tuyến đầu sẵn có để loại bỏ vi sinh vật ngay.</li>
              <li><strong>Miễn dịch thích nghi</strong>: kích thích lympho tăng sinh/biệt hóa thành tế bào hành sự và tế bào nhớ.</li>
              <li><strong>Tế bào lympho</strong>: tế bào duy nhất có thụ thể phân bố theo dòng đặc hiệu cho từng kháng nguyên.</li>
              <li><strong>Dịch thể (kháng thể)</strong> thải trừ VSV ngoại bào &amp; độc tố; <strong>Trung gian tế bào (T)</strong> thải trừ VSV nội bào.</li>
              <li>Đáp ứng thích nghi qua <strong>5 thì</strong>: nhận diện → nhân lên biệt hóa → thải trừ → giảm dần về bình thường → trí nhớ lâu dài.</li>
              <li><strong>B</strong> nhận diện trực tiếp; <strong>T</strong> nhận diện KN trình diện trên <strong>APC</strong> (<em>Th</em> tiết cytokine hoạt hóa thực bào, chiêu mộ bạch cầu, kích thích B; <em>CTL</em> giết TB nhiễm chứa VSV trong bào chất); <em>naïve</em> ở mô lympho ngoại biên, T hành sự đến ổ nhiễm, tương bào ở mô ngoại biên &amp; tủy xương.</li>
            </ol>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Hai khám phá nền tảng nào đã khởi động ngành miễn dịch học như một ngành khoa học thực nghiệm (Mục 12, tr. 15–16)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 12 (tr. 15–16)",
        options: [
          "Hiện tượng thực bào do tế bào thực hiện và sự trung hòa độc tố vi khuẩn bằng kháng thể",
          "Giải mã trình tự DNA ty thể và cấu trúc ribosome 70S",
          "Phát hiện nhóm máu ABO và ghép tim nhân tạo",
          "Tìm ra vi khuẩn H. pylori và kháng sinh penicillin"
        ],
        answer: 0,
        explain: "Trang 15–16: Miễn dịch học khởi đầu từ hai khám phá quan trọng: hiện tượng thực bào do tế bào thực hiện (miễn dịch bẩm sinh) và sự trung hòa độc tố vi khuẩn bằng kháng thể (miễn dịch thu được)."
      },
      {
        q: "Hai hiện tượng nào trong lịch sử đã đóng vai trò liên kết trực tiếp giữa miễn dịch bẩm sinh (tế bào) và miễn dịch thu được (dịch thể) (tr. 16)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 12 (tr. 16)",
        options: [
          "Việc xác định bổ thể (complement) và hiện tượng opson hóa",
          "Việc phát hiện sốc phản vệ và nhóm máu Rh",
          "Việc phát minh thuốc ức chế miễn dịch cyclosporine và kính hiển vi điện tử",
          "Việc xóa sổ bệnh đậu mùa và phân lập tế bào mast"
        ],
        answer: 0,
        explain: "Trang 16: Khái niệm phân đôi (tế bào vs dịch thể) cùng với việc xác định bổ thể và opson hóa đã liên kết miễn dịch bẩm sinh và miễn dịch thu được."
      },
      {
        q: "Giấc mơ về 'viên đạn thần kỳ' (magic bullet) được nhắc đến ở phần triển vọng tương lai (tr. 17) là của nhà miễn dịch học tiên phong nào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 12 & Hình 1.9A (tr. 16–17)",
        options: [
          "Paul Ehrlich",
          "Charles Richet",
          "James L. Gowans",
          "Ralph Steinman"
        ],
        answer: 0,
        explain: "Trang 17: 'Giấc mơ về \"viên đạn thần kỳ\" của Paul Ehrlich sẽ tiến gần hơn một bước đến hiện thực nhờ miễn dịch học của tương lai' (Paul Ehrlich là tác giả thuyết chuỗi bên ở Hình 1.9A)."
      },
      {
        q: "Theo Hình 1.9C và Mục 12 (tr. 16–17), phương pháp điều trị ung thư hiện đại mang tên 'kiểm soát điểm kiểm soát miễn dịch' (checkpoint control / blockade) gắn liền với tên tuổi của hai nhà khoa học nào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.9C & Mục 12 (tr. 16–17)",
        options: [
          "James Allison và Tasuku Honjo",
          "Rodney Porter và Gerald Edelman",
          "César Milstein và Georges Köhler",
          "Emil von Behring và Jules Bordet"
        ],
        answer: 0,
        explain: "Hình 1.9C (tr. 16): Hai ô cuối nhánh T lymphocytes ghi nhận James Allison (1948– ) và Tasuku Honjo (1942– ) với công trình Checkpoint blockade for cancer therapy."
      },
      {
        q: "Khám phá ra các dạng lâm sàng quá mẫn cảm khác nhau (như sốc phản vệ của Charles Richet) ở giai đoạn trung gian lịch sử miễn dịch học đã nhấn mạnh điều gì (tr. 16)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 12 & Hình 1.9A (tr. 16)",
        options: [
          "Hệ thống miễn dịch bên cạnh bảo vệ cũng có thể thể hiện các chức năng có hại gây tổn thương cho vật chủ",
          "Miễn dịch dịch thể luôn có hại và không có tác dụng bảo vệ",
          "Các phản ứng quá mẫn chỉ xảy ra ở động vật không có tuyến ức",
          "Kháng thể hoàn toàn không liên quan đến phản ứng dị ứng"
        ],
        answer: 0,
        explain: "Trang 16: Giai đoạn trung gian bao gồm việc khám phá các dạng lâm sàng quá mẫn cảm khác nhau nhấn mạnh rằng hệ thống miễn dịch cũng có thể thể hiện các chức năng có hại."
      },
      {
        q: "Trong Hình 1.9C (tr. 16), nhà khoa học nào được vinh danh với công trình khám phá tế bào tua gai (Dendritic cells)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.9C (tr. 16)",
        options: [
          "Ralph Steinman (1943–2011)",
          "Susumu Tonegawa",
          "Karl Landsteiner",
          "Max Cooper"
        ],
        answer: 0,
        explain: "Hình 1.9C (tr. 16): Ralph Steinman (1943–2011), Immunologist, Dendritic cells — người khám phá ra tế bào tua gai, cầu nối giữa miễn dịch bẩm sinh và thích nghi."
      },
      {
        q: "Công nghệ mới nào được nhấn mạnh ở trang 17 sẽ giúp xây dựng các mạng lưới đa phân tử của phản ứng miễn dịch trong điều kiện sinh lý và bệnh lý?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 12 (tr. 17)",
        options: [
          "Công nghệ đa ô-mic thông lượng cao (high-throughput multi-omics), tin sinh học và tiếp cận sinh học hệ thống",
          "Chỉ dùng phương pháp nhuộm Gram đơn giản trên kính hiển vi quang học",
          "Chỉ truyền huyết thanh ngựa thô không qua tinh chế",
          "Phương pháp loại bỏ hoàn toàn hệ vi sinh vật (microbiome) khỏi đường ruột"
        ],
        answer: 0,
        explain: "Trang 17: Tiến bộ trong công nghệ đa ô-mic thông lượng cao (high-throughput multi-omics technologies) và tin sinh học cho phép xây dựng mạng lưới đa phân tử và tiếp cận sinh học hệ thống."
      },
      {
        q: "Trong Hình 1.9B (tr. 16), cặp nhà khoa học nào đã làm sáng tỏ cấu trúc hóa học của kháng thể (chuỗi nặng, chuỗi nhẹ, vùng Fab và Fc)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.9B & Mục 12 (tr. 16)",
        options: [
          "Rodney Porter và Gerald Edelman",
          "Peter Doherty và Rolf Zinkernagel",
          "Jules Hoffmann và Bruce Beutler",
          "George D. Snell và Jean Dausset"
        ],
        answer: 0,
        explain: "Hình 1.9B (tr. 16): Rodney Porter (1917–1985) và Gerald Edelman (1929–2014) với công trình Chemical structure of antibodies."
      },
      {
        q: "Yếu tố sinh học nào gắn chặt với hệ miễn dịch và ngày càng được xem như một 'cơ quan rất quan trọng của con người' quyết định tính đặc thù của phản ứng miễn dịch từng khu vực (tr. 17)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 12 (tr. 17)",
        options: [
          "Hệ vi sinh vật (microbiome) của cơ thể",
          "Lớp mỡ dưới da",
          "Hệ xương khớp trục",
          "Mạng lưới thần kinh ngoại biên"
        ],
        answer: 0,
        explain: "Trang 17: Hệ vi sinh vật (microbiome) ngày càng được coi là một cơ quan của con người rất quan trọng đối với sức khỏe và bệnh tật, gắn chặt với hệ thống miễn dịch; rối loạn miễn dịch khu vực gây ra nhiều bệnh cụ thể từng cơ quan."
      },
      {
        q: "Cặp nhà khoa học nào ở Hình 1.9B (tr. 16) đã phát minh kỹ thuật tạo Kháng thể đơn dòng (Monoclonal antibodies)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.9B (tr. 16)",
        options: [
          "César Milstein và Georges Köhler",
          "Frank Macfarlane Burnet và David Talmage",
          "Jacques Miller và James L. Gowans",
          "Edward Jenner và Louis Pasteur"
        ],
        answer: 0,
        explain: "Hình 1.9B (tr. 16): César Milstein (1927–2002) và Georges Köhler (1946–1995) được ghi nhận công trình Monoclonal antibodies (kháng thể đơn dòng)."
      },
      {
        q: "Trong phần Tóm tắt (tr. 18), nơi lưu trú cuối cùng để sản xuất kháng thể của tương bào so với nơi tác chiến của tế bào T hành sự được phân biệt như thế nào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Tóm tắt (tr. 18)",
        options: [
          "Tế bào lympho T hành sự di chuyển đến vị trí nhiễm khuẩn để tiêu diệt tác nhân; tương bào ở lại cơ quan lympho ngoại biên và tủy xương để sản xuất kháng thể",
          "Tương bào di chuyển vào ổ áp-xe để thực bào vi khuẩn; tế bào T hành sự quay lại tủy xương ngủ đông",
          "Cả T hành sự và tương bào đều phải quay lại tuyến ức mới hoạt động được",
          "Tế bào T naïve ở lại tủy xương suốt đời không bao giờ đi vào hạch"
        ],
        answer: 0,
        explain: "Trang 18 (dòng cuối phần Tóm tắt): Tế bào lympho T hành sự sẽ di chuyển đến vị trí nhiễm khuẩn để tiêu diệt tác nhân gây nhiễm, tương bào ở lại cơ quan lympho ngoại biên và tủy xương để sản xuất kháng thể."
      },
      {
        q: "Ai là hai nhà khoa học tiên phong xác lập Thuyết chọn lọc clone (Clonal selection theory) được liệt kê đầu nhánh Hình 1.9C (tr. 16)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.9C (tr. 16)",
        options: [
          "David Talmage và Frank Macfarlane Burnet",
          "Paul Ehrlich và Ilya Metchnikoff",
          "Karl Landsteiner và Niels Jerne",
          "Charles Janeway và Ralph Steinman"
        ],
        answer: 0,
        explain: "Hình 1.9C (tr. 16): David Talmage (1919–2014) và Frank Macfarlane Burnet (1899–1985) được ghi nhận với Clonal selection theory (thuyết chọn lọc clone)."
      }
    ]
  }
];
