// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 1: BÀI 1 ĐẾN BÀI 3
// Chuẩn Đề cương Ôn thi Cao học KHYS 2026 – Môn: Sinh lý bệnh – Miễn dịch
// Giáo trình Miễn Dịch Đại Cương (YDS, Tái bản 2025) – Bài 1: Đại cương Miễn dịch học (tr. 1–10)
// ==========================================================================

window.LESSONS_PART1 = [
  // ========================================================================
  // BÀI 1: ĐỊNH NGHĨA, CHỨC NĂNG HỆ MIỄN DỊCH & BẨM SINH VS THÍCH NGHI
  // ========================================================================
  {
    id: 1,
    group: "I. NỀN TẢNG & HAI TẦNG PHÒNG THỦ",
    title: "Bài 1: Định nghĩa, Chức năng Hệ miễn dịch & Bẩm sinh vs Thích nghi",
    shortTitle: "Khái niệm, Chức năng & 2 Tầng MD",
    textbookRef: "Miễn dịch Đại cương YDS 2025 – Bài 1 (Mục 1–3, tr. 1–4)",
    summary: "Khái niệm miễn dịch, hệ thống miễn dịch, đáp ứng miễn dịch; lịch sử vaccine từ Jenner – Pasteur – Roux – Yersin; chức năng chống nhiễm trùng (Đậu mùa, Cúm 1918, AIDS, COVID-19, miễn dịch cộng đồng), chống u & mặt trái tự miễn/thải ghép; phối hợp miễn dịch bẩm sinh (0–12h) và thích nghi (1–5 ngày).",
    simId: "sim_innate_adaptive",
    simTitle: "Phòng Lab Phối hợp Bẩm sinh – Thích nghi & Ngưỡng Miễn dịch Cộng đồng",
    figureIds: ["H1.1", "M1.1"],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">📖 1. Định nghĩa &amp; Dòng khởi nguồn Khoa học</div>
          <ul class="theory-list">
            <li><strong>Khởi nguồn khoa học cuối thế kỷ XIX:</strong> Dù khái niệm về miễn dịch đã có từ thời cổ đại, nhưng phải đến khi <strong>Edward Jenner</strong> dùng đậu bò chủng ngừa cho người đạt trạng thái đề kháng với <em>bệnh đậu mùa</em>, và tiếp theo là <strong>Pasteur, Roux, Yersin</strong> chế tạo thành công vaccine từ vi khuẩn, virus, độc tố vi khuẩn... thì miễn dịch học mới có cơ sở khoa học thực thụ.</li>
            <li><strong>Miễn dịch (Immunity):</strong> Là khả năng đề kháng của cơ thể chống lại các tác nhân gây bệnh, chủ yếu là vi sinh vật. Tuy nhiên, phản ứng chống lại các chất có hại không phải tác nhân nhiễm như <strong>kháng nguyên khối u, kháng nguyên gây dị ứng, kháng nguyên cơ thể bị biến đổi</strong> cũng được xem là phản ứng miễn dịch.</li>
            <li><strong>Hệ thống miễn dịch:</strong> Bao gồm <strong>các cơ quan, các tế bào và các phân tử</strong> được các tế bào tiết ra.</li>
            <li><strong>Đáp ứng miễn dịch:</strong> Là các phản ứng của hệ thống miễn dịch chống lại các vi sinh vật cũng như những chất có hại khác.</li>
            <li><strong>Miễn dịch học:</strong> Nghiên cứu cấu trúc, chức năng và các rối loạn hoạt động của hệ miễn dịch, cụ thể là các đáp ứng sau khi tiếp xúc vi sinh vật và phân tử lạ.</li>
          </ul>
          <div class="callout pearl">
            <div class="callout-title">⚡ Nhịp điệu huy động 2 bước của cơ thể</div>
            Khi yếu tố gây bệnh xâm nhập, cơ thể huy động <strong>tức thì</strong> một số tế bào và phân tử sẵn có để kịp thời ngăn chặn, sau đó mới hình thành các <strong>cơ chế chống trả đặc hiệu</strong>.
          </div>
        </div>

        <div class="card">
          <div class="card-title">🛡️ 2. Chức năng của Hệ thống Miễn dịch (Lợi ích &amp; Mặt trái)</div>
          <ul class="theory-list">
            <li><strong>Ngăn ngừa và loại trừ bệnh nhiễm trùng (Chức năng sinh lý quan trọng nhất):</strong> Cá nhân có phản ứng miễn dịch khiếm khuyết dễ mắc nhiễm trùng nặng, đe dọa tính mạng.</li>
            <li><strong>Tiêm chủng &amp; Miễn dịch cộng đồng:</strong> Kích thích phản ứng miễn dịch bằng vaccine giúp bảo vệ hiệu quả nhất, đã dẫn đến <strong>xóa sổ bệnh đậu mùa trên toàn thế giới</strong> — <em>căn bệnh duy nhất bị loại bỏ khỏi nền văn minh nhờ can thiệp của con người</em>.</li>
            <li><strong>Bài học từ các đại dịch lớn:</strong> <strong>Đại dịch cúm năm 1918</strong>, <strong>AIDS</strong> (những năm 1980) và <strong>COVID-19</strong> (năm 2019) lan rộng vì dân số chưa từng tiếp xúc nên chưa có miễn dịch; đại dịch lắng xuống khi đạt <strong>miễn dịch cộng đồng</strong> (qua tiêm chủng hoặc nhiễm tự nhiên).</li>
            <li><strong>Ngăn ngừa ung thư &amp; Ứng dụng lâm sàng:</strong> Ngăn phát triển một số khối u; kích thích miễn dịch chống tế bào u là nền tảng <strong>liệu pháp miễn dịch ung thư</strong>; kháng thể được dùng rộng rãi trong xét nghiệm và điều trị bệnh miễn dịch, ung thư, nhiễm trùng.</li>
          </ul>
          <div class="callout trap">
            <div class="callout-title">⚠️ Mặt trái: Đáp ứng miễn dịch bất thường &amp; Thải ghép</div>
            <ul>
              <li><strong>Bệnh lý do viêm:</strong> Đáp ứng miễn dịch bất thường gây tổn thương tế bào, mô, viêm mạn tính với tỷ lệ mắc và tử vong cao (ví dụ: <strong>dị ứng</strong> và <strong>bệnh tự miễn</strong>).</li>
              <li><strong>Rào cản cấy ghép tạng:</strong> Phản ứng miễn dịch của người nhận làm hỏng mô/tạng ghép; việc ghép tạng chỉ khả thi nhờ phát triển các <strong>thuốc ức chế miễn dịch</strong> hiệu quả.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">⚖️ 3. Đối chiếu Hai Tầng Đáp ứng: Miễn dịch Bẩm sinh vs Miễn dịch Thích nghi <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H1.1')">🖼️ Hình 1.1</button> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('M1.1')">🔬 M1.1 Thực bào</button></div>
        <p style="font-size:14px;margin-bottom:10px;">Hai hệ thống không tách rời mà tác động hỗ tương, phối hợp chặt chẽ nhiều tầng nhiều lớp:</p>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Tiêu chí so sánh</th>
                <th>Miễn dịch Bẩm sinh (Tự nhiên / Không đặc hiệu)</th>
                <th>Miễn dịch Thích nghi (Thu được / Đặc hiệu)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Thứ tự tiến hóa &amp; Thời gian</strong></td>
                <td>Có <strong>trước</strong> trong tiến hóa; phản ứng <strong>tức thì (0 → 6 → 12 giờ)</strong>, luôn sẵn có trong cơ thể.</td>
                <td>Xuất hiện <strong>sau</strong> trong tiến hóa; phát triển <strong>chậm hơn (1 → 3 → 5 ngày)</strong> nhưng đặc hiệu hơn.</td>
              </tr>
              <tr>
                <td><strong>Thành phần chính</strong></td>
                <td>
                  • <strong>Hàng rào đầu tiên:</strong> Da và niêm mạc (tế bào + kháng sinh tự nhiên tại chỗ).<br/>
                  • <strong>Tế bào:</strong> Tế bào thực bào (đại thực bào, bạch cầu trung tính), tế bào mast, tế bào tua gai, tế bào dạng lympho bẩm sinh (tế bào giết tự nhiên <strong>NK</strong>).<br/>
                  • <strong>Protein huyết tương:</strong> <strong>Bổ thể</strong>, hệ thống đông máu, hệ thống kinin...
                </td>
                <td>
                  • <strong>Tế bào:</strong> <strong>Lympho B</strong> (→ tương bào) và <strong>Lympho T</strong> (→ T hành sự / thành sự) biểu hiện thụ thể đặc hiệu.<br/>
                  • <strong>Phân tử tiết:</strong> <strong>Kháng thể</strong> (globulin miễn dịch) và cytokine.
                </td>
              </tr>
              <tr>
                <td><strong>Cơ chế nhận diện</strong></td>
                <td>Nhận diện <strong>các cấu trúc chung</strong> của từng lớp vi khuẩn (không cần tiếp xúc trước).</td>
                <td>Nhận diện đặc hiệu từng phân tử riêng biệt trên vi khuẩn gọi là <strong>kháng nguyên</strong>.</td>
              </tr>
              <tr>
                <td><strong>Mối liên hệ hỗ tương</strong></td>
                <td>Tạo đề kháng sớm và <strong>tạo điều kiện khởi phát</strong> đáp ứng miễn dịch thích nghi (qua tế bào tua gai APC).</td>
                <td>Thường <strong>mượn tế bào của miễn dịch bẩm sinh</strong> để loại trừ vi khuẩn (VD: kháng thể bao phủ vi khuẩn giúp tế bào thực bào gắn và phá hủy dễ hơn).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Nhà khoa học nào vào cuối thế kỷ XIX đã dùng đậu bò chủng ngừa cho người để tạo trạng thái đề kháng với bệnh đậu mùa, đánh dấu bước khởi đầu có cơ sở khoa học của miễn dịch học?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 1 (tr. 1)",
        options: [
          "Edward Jenner",
          "Ilya Metchnikoff",
          "Paul Ehrlich",
          "Karl Landsteiner"
        ],
        answer: 0,
        explain: "Trang 1: Vào cuối thế kỷ XIX, khi Edward Jenner dùng đậu bò chủng cho người đạt trạng thái đề kháng với bệnh đậu mùa (tiếp theo là Pasteur, Roux, Yersin chế tạo vaccine từ vi khuẩn, virus, độc tố) thì miễn dịch học mới bắt đầu có cơ sở khoa học."
      },
      {
        q: "Theo giáo trình Miễn dịch Đại cương YDS 2025, căn bệnh truyền nhiễm nào là căn bệnh DUY NHẤT đã được loại bỏ hoàn toàn khỏi nền văn minh nhân loại nhờ tiêm chủng tạo miễn dịch cộng đồng?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 2 (tr. 2)",
        options: [
          "Bệnh đậu mùa",
          "Bệnh bại liệt",
          "Bệnh uốn ván",
          "Bệnh cúm mùa"
        ],
        answer: 0,
        explain: "Trang 2: Cách tiếp cận kích thích phản ứng miễn dịch qua tiêm chủng đã dẫn đến việc xóa sổ bệnh đậu mùa trên toàn thế giới — căn bệnh duy nhất đã được loại bỏ khỏi nền văn minh nhờ sự can thiệp của con người."
      },
      {
        q: "Thành phần nào sau đây thuộc hệ thống protein huyết tương của đáp ứng miễn dịch BẨM SINH được liệt kê ở Mục 3.1?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 3.1 (tr. 3)",
        options: [
          "Hệ thống bổ thể, hệ thống đông máu và hệ thống kinin",
          "Kháng thể đơn dòng và tương bào",
          "Phức hợp thụ thể tế bào T (TCR) và lympho B trí nhớ",
          "Chỉ gồm duy nhất kháng thể IgG qua nhau thai"
        ],
        answer: 0,
        explain: "Trang 3: Ngoài hàng rào da – niêm mạc, các tế bào thực bào và tế bào dạng lympho bẩm sinh (NK), đáp ứng miễn dịch bẩm sinh còn có nhiều loại protein huyết tương như bổ thể, hệ thống đông máu, kinin..."
      },
      {
        q: "Dựa vào Hình 1.1 (tr. 3), động học thời gian hoạt động điển hình của đáp ứng miễn dịch bẩm sinh so với đáp ứng miễn dịch thích nghi là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.1 (tr. 3–4)",
        options: [
          "Miễn dịch bẩm sinh đáp ứng trong 0–12 giờ đầu; miễn dịch thích nghi phát triển từ 1 đến 5 ngày sau nhiễm",
          "Miễn dịch thích nghi hoạt động từ 0–6 giờ; miễn dịch bẩm sinh bắt đầu sau ngày thứ 5",
          "Cả hai hệ thống đều chỉ khởi phát sau ngày thứ 7 kể từ khi tiếp xúc vi khuẩn",
          "Miễn dịch bẩm sinh xuất hiện sau miễn dịch thích nghi trong quá trình tiến hóa"
        ],
        answer: 0,
        explain: "Hình 1.1 (tr. 3): Trục thời gian thể hiện Miễn dịch bẩm sinh bảo vệ tức thì trong khoảng 0 – 6 – 12 giờ (hàng rào niêm mạc, mast, thực bào, bổ thể, tua gai, NK), còn Miễn dịch thích nghi diễn ra chậm hơn ở mốc 1 – 3 – 5 ngày (B → tương bào/kháng thể; T → T thành sự)."
      },
      {
        q: "Ví dụ nào trong Mục 3.2 minh họa rõ nhất cho sự phối hợp giữa miễn dịch thích nghi và các tế bào của miễn dịch bẩm sinh?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 3.2 (tr. 3)",
        options: [
          "Kháng thể đặc hiệu bao phủ vi khuẩn tạo điều kiện thuận lợi cho tế bào thực bào gắn lên và phá hủy vi khuẩn",
          "Hàng rào da tiết acid béo mà không cần bất kỳ bạch cầu nào hỗ trợ",
          "Tế bào NK tự nhân lên thành tương bào tiết kháng thể IgM",
          "Hệ thống đông máu trực tiếp biến đổi thành lympho T CD8+"
        ],
        answer: 0,
        explain: "Trang 3: Đáp ứng miễn dịch thích nghi thường sử dụng các tế bào của miễn dịch bẩm sinh để loại trừ vi khuẩn, điển hình như kháng thể đặc hiệu bao phủ vi khuẩn giúp tế bào thực bào gắn lên và phá hủy vi khuẩn dễ dàng (hiện tượng opson hóa)."
      },
      {
        q: "Theo Mục 1 (tr. 1), thuật ngữ 'Kháng nguyên' trong đáp ứng miễn dịch thích nghi được định nghĩa chính xác là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 3.2 (tr. 3)",
        options: [
          "Các phân tử trên vi sinh vật hoặc chất lạ được nhận diện bởi các thụ thể đặc hiệu trên bề mặt tế bào lympho",
          "Chỉ giới hạn ở các ngoại độc tố protein do vi khuẩn tiết ra",
          "Các protein huyết tương thuộc hệ thống đông máu và bổ thể",
          "Các thụ thể bề mặt gắn sẵn trên tế bào thực bào và tế bào NK"
        ],
        answer: 0,
        explain: "Trang 3: Tế bào của miễn dịch bẩm sinh nhận diện cấu trúc chung của từng lớp vi khuẩn, trong khi các tế bào lympho của miễn dịch thích nghi biểu hiện thụ thể có khả năng nhận diện đặc hiệu các phân tử riêng biệt gọi là kháng nguyên."
      },
      {
        q: "Tại sao các đại dịch như Cúm 1918, AIDS thập niên 1980 và COVID-19 năm 2019 lại bùng phát lan rộng nhanh chóng trong cộng đồng ở giai đoạn đầu?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 2 (tr. 2)",
        options: [
          "Do tác nhân gây bệnh mới xuất hiện nên dân số chưa từng tiếp xúc trước đó và hoàn toàn chưa có miễn dịch",
          "Do toàn bộ dân số bị khiếm khuyết bẩm sinh hàng rào da và niêm mạc",
          "Do kháng thể miễn dịch bẩm sinh tự tấn công phá hủy tế bào T nhớ",
          "Do các vi khuẩn gây đại dịch có kích thước lớn hơn tế bào thực bào"
        ],
        answer: 0,
        explain: "Trang 2: Những tác nhân gây bệnh mới xuất hiện này đã gây ra các bệnh nhiễm trùng lan rộng chủ yếu là do dân số chưa từng tiếp xúc với chúng trước đó và do đó chưa có miễn dịch; dịch chỉ lắng xuống khi đạt miễn dịch cộng đồng."
      },
      {
        q: "Phát biểu nào sau đây ĐÚNG về vai trò mở rộng của phản ứng miễn dịch đối với các tác nhân KHÔNG phải vi sinh vật gây nhiễm?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 1 & 2 (tr. 1–2)",
        options: [
          "Phản ứng chống kháng nguyên khối u, kháng nguyên dị ứng, kháng nguyên cơ thể biến đổi và mô cấy ghép đều là phản ứng miễn dịch",
          "Hệ thống miễn dịch chỉ phản ứng duy nhất với vi khuẩn ngoại bào, không bao giờ phản ứng với mô ghép",
          "Kháng nguyên khối u không bao giờ kích thích được đáp ứng miễn dịch của cơ thể",
          "Dị ứng và tự miễn là hậu quả của sự thiếu hụt hoàn toàn các tế bào mast"
        ],
        answer: 0,
        explain: "Trang 1–2: Ngoài vi sinh vật, phản ứng chống kháng nguyên khối u, chất gây dị ứng, kháng nguyên cơ thể bị biến đổi hay mô cấy ghép đều là phản ứng miễn dịch; bất thường của các phản ứng này gây dị ứng, tự miễn và thải ghép."
      },
      {
        q: "Thành phần hàng rào nào dưới đây được xếp vào tuyến phòng thủ ĐẦU TIÊN của miễn dịch bẩm sinh?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 3.1 (tr. 3)",
        options: [
          "Hàng rào da và niêm mạc gồm các tế bào biểu mô và các kháng sinh tự nhiên tại chỗ",
          "Tế bào tương bào cư trú lâu dài trong tủy xương",
          "Tế bào lympho T điều hòa (Treg) ở hạch bạch huyết",
          "Các phân tử kháng thể IgG nhận qua nhau thai"
        ],
        answer: 0,
        explain: "Trang 3: Hàng rào miễn dịch bẩm sinh đầu tiên chính là hàng rào da và niêm mạc bao gồm các tế bào và các kháng sinh tự nhiên tại chỗ giúp ngăn chặn sự xâm nhập của vi sinh vật."
      },
      {
        q: "Sự khác biệt bản chất trong phương thức nhận diện vi khuẩn giữa tế bào miễn dịch bẩm sinh và tế bào lympho của miễn dịch thích nghi là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 3.2 (tr. 3)",
        options: [
          "Bẩm sinh nhận diện cấu trúc chung của từng lớp vi khuẩn; Thích nghi nhận diện đặc hiệu từng phân tử (kháng nguyên) riêng biệt",
          "Bẩm sinh chỉ nhận diện virus nội bào; Thích nghi chỉ nhận diện tế bào ung thư",
          "Bẩm sinh đòi hỏi tế bào TCD4+ trình diện; Thích nghi không cần bất kỳ thụ thể nào",
          "Bẩm sinh có trí nhớ kéo dài suốt đời; Thích nghi mất tác dụng ngay sau 12 giờ"
        ],
        answer: 0,
        explain: "Trang 3: Tế bào miễn dịch bẩm sinh nhận diện cấu trúc chung của từng lớp vi khuẩn, trong khi tế bào lympho thích nghi biểu hiện thụ thể nhận diện đặc hiệu từng phân tử riêng (kháng nguyên)."
      },
      {
        q: "Nhóm tế bào nào sau đây thuộc đội ngũ tế bào của Đáp ứng Miễn dịch Bẩm sinh (theo Hình 1.1 và Mục 3.1)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.1 & Mục 3.1 (tr. 3)",
        options: [
          "Tế bào thực bào, tế bào mast, tế bào tua gai và tế bào giết tự nhiên (NK)",
          "Tương bào, lympho B trí nhớ và lympho T CD4+",
          "Lympho T gây độc CD8+ và lympho T điều hòa",
          "Chỉ gồm đại thực bào và hồng cầu"
        ],
        answer: 0,
        explain: "Hình 1.1 và Mục 3.1 (tr. 3): Khối Miễn dịch bẩm sinh gồm hàng rào niêm mạc, tế bào mast, thực bào, tế bào tua gai, tế bào dạng lympho bẩm sinh (NK) và bổ thể."
      },
      {
        q: "Tại sao trong y học cấy ghép nội tạng hiện đại, bệnh nhân ghép thận hoặc ghép gan bắt buộc phải sử dụng các loại thuốc ức chế miễn dịch?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 1 & 2 (tr. 2)",
        options: [
          "Vì phản ứng miễn dịch của người nhận xem mô/tạng ghép là yếu tố lạ và tấn công làm hỏng mô ghép (rào cản chính của cấy ghép)",
          "Để kích thích miễn dịch bẩm sinh tiêu hủy các tế bào lympho T nhớ của chính người cho",
          "Để tăng cường sản xuất bổ thể và kinin gây viêm mạn tính tại tạng ghép",
          "Để chuyển đổi miễn dịch thích nghi thành miễn dịch thụ động vĩnh viễn"
        ],
        answer: 0,
        explain: "Trang 2: Phản ứng miễn dịch làm hỏng các mô được cấy ghép và là rào cản chính đối với sự thành công của việc cấy ghép nội tạng; việc áp dụng rộng rãi phương pháp cấy ghép trở nên khả thi nhờ các thuốc hiệu quả ức chế phản ứng miễn dịch này."
      }
    ]
  },

  // ========================================================================
  // BÀI 2: MIỄN DỊCH DỊCH THỂ VS TẾ BÀO & CHỦ ĐỘNG VS THỤ ĐỘNG
  // ========================================================================
  {
    id: 2,
    group: "I. NỀN TẢNG & HAI TẦNG PHÒNG THỦ",
    title: "Bài 2: Miễn dịch Dịch thể vs Tế bào & Chủ động vs Thụ động",
    shortTitle: "Dịch thể vs Tế bào & Chủ/Thụ động",
    textbookRef: "Miễn dịch Đại cương YDS 2025 – Bài 1 (Mục 4 & Mục 5, tr. 4–7)",
    summary: "Phân công miễn dịch dịch thể (kháng thể chống VSV ngoại bào & độc tố, qua nhau thai) vs miễn dịch tế bào (Th hoạt hóa đại thực bào diệt VK trong túi thực bào; Tc giết TB nhiễm virus/u); khác biệt tính đặc hiệu B vs T; miễn dịch chủ động vs thụ động & phác đồ phối hợp HBIG + vaccine HBV.",
    simId: "sim_humoral_passive",
    simTitle: "Phòng Khám Phân công Miễn dịch & Chỉ định Chủ động / Thụ động",
    figureIds: ["H1.2", "M1.2", "M1.3"],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🦠 4. Miễn dịch Thích nghi: Tế bào vs Dịch thể <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H1.2')">🖼️ Hình 1.2</button></div>
          <p style="font-size:14px;margin-bottom:8px;">Có hai loại hình đáp ứng miễn dịch thích nghi chuyên biệt theo <strong>vị trí cư trú của vi sinh vật</strong>:</p>
          <ul class="theory-list">
            <li><strong>4.1. Miễn dịch qua trung gian tế bào (Do Lympho T đảm trách):</strong>
              <br/>• Chống lại các <strong>vi sinh vật nội bào</strong> (sống bên trong túi thực bào hoặc trong bào chất tế bào vật chủ, bao gồm vi khuẩn nội bào, virus nhân lên trong tế bào chất và tế bào khối u).
              <br/>• <strong>Tại sao kháng thể không hiệu quả?</strong> Kháng thể chỉ ngăn chặn vi khuẩn trước khi vào tế bào; một khi vi khuẩn/virus đã chui vào bên trong tế bào vật chủ thì kháng thể <em>không tiếp cận được</em>.
              <br/>• <strong>Hai lớp lympho T chính:</strong>
                <br/>1) <strong>Tế bào T giúp đỡ (Helper T - Th):</strong> Nhận diện peptide trình diện bởi đại thực bào/APC → tiết <strong>cytokine</strong> kích hoạt tế bào thực bào tiêu diệt vi khuẩn đang sống trong túi nội bào, đồng thời chiêu mộ thêm bạch cầu đến ổ nhiễm.
                <br/>2) <strong>Tế bào T gây độc tế bào (Cytotoxic T - Tc):</strong> Tiêu diệt trực tiếp <em>bất kỳ loại tế bào chủ nào</em> (kể cả tế bào không thực bào) chứa vi sinh vật trong bào chất (như virus) hoặc tế bào khối u.</li>
            <li><strong>4.2. Miễn dịch dịch thể (Do Lympho B → Tương bào đảm trách):</strong> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('M1.2')">🔬 M1.2 Ig</button> <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('M1.3')">🔬 M1.3 Tương bào</button>
              <br/>• Thành phần duy nhất là <strong>kháng thể</strong> (bản chất globulin nên gọi là <strong>globulin miễn dịch - Immunoglobulin</strong>).
              <br/>• Đặc hiệu của kháng thể được tạo ra <strong>ngẫu nhiên, độc lập với kháng nguyên và ĐÃ CÓ TRƯỚC khi tiếp xúc kháng nguyên</strong>.
              <br/>• <strong>Hoạt động tại:</strong> Máu, các mô, đường tiêu hóa và đường hô hấp.
              <br/>• <strong>Chức năng:</strong> (1) Gắn kháng nguyên vi sinh vật ngoại bào ngăn xâm nhập; (2) <strong>Trung hòa độc tố</strong> do vi khuẩn tiết ra; (3) Tăng cường bắt giữ vi khuẩn ngoại bào vào tế bào thực bào (opson hóa); (4) <strong>Vận chuyển qua nhau thai</strong> vào tuần hoàn thai nhi giúp bảo vệ thai nhi và trẻ sơ sinh khỏi nhiễm trùng.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🔑 Điểm Khác biệt Cốt lõi về Tính đặc hiệu: Lympho B vs Lympho T</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Đặc điểm</th>
                  <th>Lympho B &amp; Kháng thể</th>
                  <th>Lympho T (Th &amp; Tc)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Vị trí mầm bệnh mục tiêu</strong></td>
                  <td>Vi sinh vật <strong>ngoại bào</strong> và độc tố hòa tan.</td>
                  <td>Vi sinh vật <strong>nội bào</strong> (túi thực bào, bào chất) &amp; tế bào u.</td>
                </tr>
                <tr>
                  <td><strong>Bản chất phân tử nhận diện</strong></td>
                  <td>Rất đa dạng: <strong>Protein, Carbohydrat, Acid nucleic và Lipid</strong>.</td>
                  <td>Hầu hết chỉ nhận diện <strong>đoạn peptide của kháng nguyên protein</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Yêu cầu trình diện</strong></td>
                  <td>Nhận diện trực tiếp không cần MHC (qua thụ thể kháng thể màng BCR).</td>
                  <td>Bắt buộc phải được <strong>trình diện trên bề mặt tế bào cùng phân tử MHC</strong>.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="card-title" style="margin-top:16px;">💉 5. Miễn dịch Chủ động vs Miễn dịch Thụ động</div>
          <ul class="theory-list">
            <li><strong>5.1. Miễn dịch chủ động:</strong> Tạo ra sau khi một người <strong>đã bị nhiễm bệnh</strong> hoặc <strong>đã được tiêm ngừa vaccine</strong>. Chuyển từ trạng thái <em>ngây thơ (naïve)</em> sang có miễn dịch → <strong>bền vững</strong> và có <strong>trí nhớ miễn dịch</strong> (đáp ứng thứ phát hiệu quả &amp; chất lượng cao hơn lần đầu).</li>
            <li><strong>5.2. Miễn dịch thụ động:</strong> Truyền trực tiếp kháng thể đặc hiệu (từ người đã miễn dịch hoặc sản xuất trong phòng thí nghiệm). Tác dụng <strong>nhanh chóng</strong> trước khi tự tạo được miễn dịch chủ động, nhưng <strong>KHÔNG kéo dài suốt đời</strong> (hết hiệu lực khi kháng thể/tế bào truyền mất đi).
              <br/>• <em>Sinh lý:</em> Kháng thể mẹ truyền qua <strong>nhau thai</strong> và trong <strong>sữa mẹ</strong> bảo vệ trẻ sơ sinh.
              <br/>• <em>Lâm sàng:</em> Huyết thanh miễn dịch tập hợp trị suy giảm miễn dịch; điều trị khẩn cấp <strong>SARS-CoV-2, rắn cắn</strong>; <strong>kháng thể đơn dòng</strong> điều trị nhiễm trùng và ung thư.
              <br/>• <em>Giới hạn truyền tế bào:</em> Truyền tế bào T giữa hai người <strong>không giống nhau về di truyền là KHÔNG THỂ</strong> vì tế bào truyền sẽ bị đào thải!</li>
          </ul>
          <div class="callout success">
            <div class="callout-title">🩺 Phối hợp Chủ động + Thụ động Kinh điển (Câu lượng giá 2)</div>
            Trẻ sơ sinh có mẹ nhiễm virus viêm gan B được tiêm đồng thời <strong>vaccine viêm gan B</strong> (tạo miễn dịch chủ động lâu dài) VÀ <strong>kháng thể chống virus viêm gan B (HBIG)</strong> (tạo miễn dịch thụ động bảo vệ tức thì) để tối đa hóa phòng lây nhiễm từ mẹ!
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Trẻ sơ sinh có mẹ nhiễm virus viêm gan B được tiêm HBIG (Hepatitis B Immune Globulin) để dự phòng lây nhiễm. Ứng dụng này liên quan đến khái niệm nào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Câu hỏi lượng giá 2 (tr. 18)",
        options: [
          "Miễn dịch thụ động",
          "Miễn dịch bẩm sinh",
          "Miễn dịch thích nghi",
          "Miễn dịch chủ động"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (tr. 19): 2.D — Miễn dịch thụ động. HBIG là chế phẩm kháng thể đặc hiệu được truyền trực tiếp vào cơ thể trẻ để bảo vệ nhanh tức thì trước khi vaccine kịp kích thích cơ thể trẻ tự tạo miễn dịch chủ động."
      },
      {
        q: "Tương bào tiết ra chất nào sau đây?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Câu hỏi lượng giá 4 (tr. 19)",
        options: [
          "Kháng thể có đặc hiệu giống thụ thể trên tế bào lympho B tương ứng",
          "Kháng thể có hai đặc hiệu kháng nguyên",
          "Nhiều loại kháng thể khác nhau",
          "Kháng nguyên đặc hiệu"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (tr. 19): 4.A. Mỗi dòng lympho B mang một thụ thể đặc hiệu duy nhất; sau khi được hoạt hóa và biệt hóa thành tương bào, tương bào chỉ tiết ra kháng thể mang đúng tính đặc hiệu đó (tr. 13)."
      },
      {
        q: "Yếu tố nào bảo vệ cơ thể chống lại các vi sinh vật nội bào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Câu hỏi lượng giá 5 (tr. 19)",
        options: [
          "Tế bào lympho T",
          "Kháng thể",
          "Bổ thể",
          "Tế bào lympho B"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (tr. 19): 5.B — Tế bào lympho T. Kháng thể chỉ hiệu quả với vi sinh vật ngoại bào; khi vi sinh vật đã vào bên trong tế bào (trong túi thực bào hoặc bào chất), tế bào lympho T (Th và Tc) đảm trách tiêu diệt (tr. 4–6)."
      },
      {
        q: "Về cơ sở di truyền học của tính đa dạng kháng thể, kết luận nào trong Mục 4.2 (tr. 5) là ĐÚNG?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 4.2 (tr. 5)",
        options: [
          "Tính đặc hiệu của globulin miễn dịch được tạo ra ngẫu nhiên, độc lập với kháng nguyên và đã có trước khi tiếp xúc với kháng nguyên",
          "Cơ thể chỉ tổng hợp được gen kháng thể sau khi kháng nguyên xâm nhập và làm khuôn đúc trực tiếp",
          "Mọi phân tử kháng thể của một người đều giống hệt nhau về vùng gắn kháng nguyên",
          "Kháng thể chỉ được sản xuất bởi tế bào T giúp đỡ tại tuyến ức"
        ],
        answer: 0,
        explain: "Trang 5: Nhờ hiểu biết về cơ sở gen học sự hình thành globulin miễn dịch, người ta xác định các đặc hiệu của phân tử này được tạo ra ngẫu nhiên, độc lập với kháng nguyên và đã có trước khi tiếp xúc với kháng nguyên."
      },
      {
        q: "Điểm khác biệt quan trọng về BẢN CHẤT PHÂN TỬ KHÁNG NGUYÊN được nhận diện bởi tế bào T so với tế bào B là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 4.2 (tr. 6)",
        options: [
          "Hầu hết tế bào T chỉ nhận diện đoạn peptide của kháng nguyên protein trình diện cùng MHC, còn tế bào B nhận diện được cả protein, carbohydrat, acid nucleic và lipid",
          "Tế bào T chỉ nhận diện lipid và carbohydrat tự do; tế bào B chỉ nhận diện đoạn peptide gắn MHC",
          "Cả tế bào B và tế bào T đều chỉ nhận diện duy nhất chuỗi acid nucleic của virus",
          "Tế bào B bắt buộc phải qua đại thực bào xử lý thành peptide mới nhận diện được"
        ],
        answer: 0,
        explain: "Trang 6: Hầu hết tế bào T chỉ nhận ra các đoạn peptide của kháng nguyên protein được trình bày trên bề mặt tế bào, trong khi tế bào B và kháng thể có thể nhận ra nhiều loại phân tử khác nhau (protein, carbohydrat, acid nucleic, lipid) của vi khuẩn ngoại bào."
      },
      {
        q: "Trong Hình 1.2 (tr. 5), khi vi khuẩn bị thực bào nhưng vẫn SỐNG SÓT trong các túi thực bào của đại thực bào, cơ chế miễn dịch thích nghi nào sẽ loại trừ chúng?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.2 & Mục 4.1 (tr. 4–5)",
        options: [
          "Tế bào lympho T giúp đỡ (Th) tiết cytokine để hoạt hóa đại thực bào tiêu diệt vi khuẩn nội bào đó",
          "Tế bào lympho B chui vào bên trong đại thực bào để tiết kháng thể",
          "Tế bào mast giải phóng hạt làm vỡ đại thực bào mà không cần cytokine",
          "Kháng thể trong huyết thanh tự khuếch tán qua màng đại thực bào trung hòa vi khuẩn"
        ],
        answer: 0,
        explain: "Hình 1.2 (tr. 5) & Mục 4.1 (tr. 4): Vi khuẩn sống trong túi thực bào của đại thực bào được nhận diện bởi Lymphocyte T giúp đỡ (Th); Th tiết cytokine hoạt hóa đại thực bào để thải trừ vi sinh vật thực bào."
      },
      {
        q: "Vì sao việc truyền tế bào T miễn dịch thụ động giữa hai người KHÔNG giống nhau về mặt di truyền lại KHÔNG khả thi trên lâm sàng?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 5.2 (tr. 7)",
        options: [
          "Vì các tế bào T được truyền sẽ bị hệ miễn dịch người nhận nhận diện là ngoại lai và đào thải",
          "Vì tế bào T mất hoàn toàn nhân tế bào ngay khi rời khỏi tủy xương",
          "Vì tế bào T không thể di chuyển vào máu ngoại biên mà chỉ ở lại tuyến ức",
          "Vì tế bào T chỉ sống được ở nhiệt độ thấp hơn 20°C"
        ],
        answer: 0,
        explain: "Trang 7: Miễn dịch thụ động bằng cách truyền tế bào T giữa những người không giống nhau về mặt di truyền là không thể vì các tế bào được truyền sẽ bị đào thải."
      },
      {
        q: "Hình thức bảo vệ trẻ sơ sinh tự nhiên nào sau đây là ví dụ điển hình của MIỄN DỊCH THỤ ĐỘNG sinh lý?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 4.2 & 5.2 (tr. 5–6)",
        options: [
          "Kháng thể của mẹ được vận chuyển qua nhau thai trong thai kỳ và qua sữa mẹ sau sinh",
          "Trẻ tự nhiễm sởi tự nhiên và tạo trí nhớ miễn dịch lâu dài",
          "Trẻ được tiêm vaccine phòng lao BCG ngay sau sinh",
          "Sự tăng sinh tế bào NK trong gan thai nhi ở tuần thứ 12"
        ],
        answer: 0,
        explain: "Trang 5–6: Tình trạng miễn dịch ở trẻ sơ sinh có được nhờ kháng thể truyền từ mẹ qua nhau thai và trong sữa mẹ là ví dụ điển hình của miễn dịch thụ động (bảo vệ nhanh khi trẻ chưa tự tạo miễn dịch chủ động, nhưng giảm dần khi kháng thể mẹ hết đi)."
      },
      {
        q: "Thuật ngữ 'ngây thơ' (naïve) trong miễn dịch học (Mục 5.1, tr. 6) dùng để chỉ đối tượng nào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 5.1 (tr. 6)",
        options: [
          "Cá thể hoặc tế bào lympho trưởng thành trước đây chưa từng tiếp xúc với một kháng nguyên/vi khuẩn đặc hiệu nào đó",
          "Bệnh nhân vừa tiêm liều nhắc lại vaccine lần thứ ba",
          "Tế bào tương bào đã sống nhiều năm trong tủy xương",
          "Cá thể bị suy giảm miễn dịch bẩm sinh nặng không có tuyến ức"
        ],
        answer: 0,
        explain: "Trang 6 & 9: Cá thể hoặc tế bào lympho chưa từng tiếp xúc với kháng nguyên/vi khuẩn trước đây được gọi là ngây thơ (naïve)."
      },
      {
        q: "Các chức năng nào sau đây thuộc về kháng thể trong miễn dịch dịch thể (chọn tập hợp ĐẦY ĐỦ nhất theo tr. 5)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 4.2 (tr. 5)",
        options: [
          "Ngăn vi sinh vật ngoại bào xâm nhập, trung hòa độc tố vi khuẩn, tăng cường thực bào và qua nhau thai bảo vệ thai nhi",
          "Trực tiếp xâm nhập bào chất tế bào chủ để cắt DNA của virus",
          "Trình diện peptide cho tế bào T gây độc ở vùng tủy tuyến ức",
          "Thay thế hoàn toàn vai trò của đại thực bào trong mô liên kết"
        ],
        answer: 0,
        explain: "Trang 5: Kháng thể đi vào máu, mô, đường tiêu hóa & hô hấp để gắn ngăn xâm nhập, trung hòa độc tố, tăng cường bắt giữ vi khuẩn ngoại bào vào tế bào thực bào, và vận chuyển qua nhau thai bảo vệ thai nhi – trẻ sơ sinh."
      },
      {
        q: "Trong trường hợp bệnh nhân bị rắn hổ mang cắn nặng hoặc nhiễm SARS-CoV-2 cấp cần trung hòa độc tố/virus ngay lập tức, liệu pháp nào được xếp vào nhóm miễn dịch thụ động?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 5.2 (tr. 6)",
        options: [
          "Truyền huyết thanh kháng nọc từ người/nguồn đã miễn dịch hoặc dùng kháng thể tinh khiết / kháng thể đơn dòng",
          "Tiêm giải độc tố để chờ cơ thể tạo đáp ứng nguyên phát sau 1–3 tuần",
          "Kích thích tế bào mast phóng thích histamin tại chỗ vết cắn",
          "Ghép tủy xương từ người hiến không cùng nhóm HLA"
        ],
        answer: 0,
        explain: "Trang 6: Miễn dịch thụ động hữu ích trong điều trị khẩn cấp một số nhiễm trùng virus (như SARS-CoV-2) và rắn cắn bằng huyết thanh từ người đã miễn dịch, kháng thể tinh khiết hoặc kháng thể đơn dòng sản xuất trong phòng thí nghiệm."
      },
      {
        q: "Đặc điểm nào phân biệt rõ nhất miễn dịch CHỦ ĐỘNG với miễn dịch THỤ ĐỘNG theo Mục 5 (tr. 6)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 5.1 & 5.2 (tr. 6)",
        options: [
          "Miễn dịch chủ động có tính bền vững và tạo trí nhớ miễn dịch; miễn dịch thụ động tác dụng nhanh nhưng không kéo dài suốt đời",
          "Miễn dịch chủ động không bao giờ tạo được đáp ứng thứ phát; miễn dịch thụ động tạo trí nhớ suốt đời",
          "Miễn dịch chủ động chỉ dùng trong điều trị rắn cắn; miễn dịch thụ động là cơ sở của tiêm chủng mở rộng",
          "Miễn dịch thụ động đòi hỏi cơ thể phải nhiễm bệnh nặng trước đó"
        ],
        answer: 0,
        explain: "Trang 6: Miễn dịch chủ động (nhiễm bệnh hoặc tiêm vaccine) có tính bền vững và trí nhớ miễn dịch (tái nhiễm cho đáp ứng thứ phát cao hơn); miễn dịch thụ động cho tác dụng nhanh nhưng kết thúc khi kháng thể truyền vào bị thoái giáng hết."
      }
    ]
  },

  // ========================================================================
  // BÀI 3: ĐẶC ĐIỂM ĐÁP ỨNG THÍCH NGHI: CHỌN LỌC CLONE, TRÍ NHỚ & DUNG NẠP
  // ========================================================================
  {
    id: 3,
    group: "II. ĐẶC ĐIỂM MIỄN DỊCH THÍCH NGHI",
    title: "Bài 3: Chọn lọc Clone, Trí nhớ Miễn dịch & Dung nạp Bản thân",
    shortTitle: "Chọn lọc Clone, Trí nhớ & Dung nạp",
    textbookRef: "Miễn dịch Đại cương YDS 2025 – Bài 1 (Mục 6, tr. 7–10)",
    summary: "Tính đặc hiệu và tính đa dạng (0,5–1 × 10¹² lympho B & T, hàng triệu clone, 1.000–10.000 TB đặc hiệu một KN); Giả thuyết chọn lọc clone (thập niên 1950); Trí nhớ miễn dịch (Nguyên phát 1–3 tuần vs Thứ phát 2–7 ngày, thí nghiệm Antigen X & Y); Dung nạp bản thân & bệnh tự miễn.",
    simId: "sim_clonal_memory",
    simTitle: "Phòng Thí nghiệm Chọn lọc Clone & Đồ thị Đáp ứng Nguyên phát – Thứ phát",
    figureIds: ["H1.3", "H1.4"],
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🧬 6.1. Tính Đặc hiệu, Tính Đa dạng &amp; Chọn lọc Clone <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H1.3')">🖼️ Hình 1.3</button></div>
          <ul class="theory-list">
            <li><strong>Số lượng &amp; Quy mô danh mục lympho:</strong> Ở người trưởng thành có khoảng <strong>0,5 đến 1 × 10¹² tế bào lympho B và T</strong>, bao gồm <strong>hàng triệu clones</strong> (tổng số các đặc tính gọi là <em>danh mục tế bào lympho</em>, cực kỳ đa dạng).</li>
            <li><strong>Cấu trúc mỗi clone:</strong> Mỗi clone được tạo ra từ <strong>một tế bào lympho đầu dòng duy nhất</strong>; tất cả tế bào trong cùng một clone mang <strong>thụ thể kháng nguyên giống hệt nhau</strong> và khác với thụ thể của tất cả clone khác.</li>
            <li><strong>Nguyên tắc "Một tế bào – Một thụ thể":</strong> Mỗi tế bào lympho chỉ biểu hiện <strong>một thụ thể kháng nguyên duy nhất</strong> → chỉ nhận biết và phản ứng với một kháng nguyên đặc hiệu, đảm bảo khi nhiễm vi khuẩn nào thì chỉ đánh đúng vi khuẩn đó.</li>
            <li><strong>Tần suất cực thấp trước khi tiếp xúc:</strong> Trước khi gặp kháng nguyên, chỉ có khoảng <strong>1.000 đến 10.000 tế bào lympho</strong> đặc hiệu cho một kháng nguyên nào đó. Nhờ khả năng nhân lên thành clone lớn mạnh → kịp thời tiêu diệt vi khuẩn.</li>
          </ul>
          <div class="callout formula">
            <div class="callout-title">🔬 Giả thuyết Chọn lọc Clone (Thập niên 1950)</div>
            Tiên đoán và giải thích chính xác hai sự thật: (1) Các tế bào lympho mang thụ thể đặc hiệu đã <strong>phát triển và trưởng thành TRƯỚC</strong> khi gặp kháng nguyên; (2) Chính <strong>kháng nguyên đặc hiệu</strong> đóng vai trò <strong>chọn lọc và hoạt hóa</strong> clone lympho tương ứng tăng sinh, biệt hóa thành tương bào/T hành sự.
          </div>
        </div>

        <div class="card">
          <div class="card-title">📈 6.2. Trí nhớ Miễn dịch: Nguyên phát vs Thứ phát <button type="button" class="fig-ref-btn" onclick="App.openFigureModal('H1.4')">🖼️ Hình 1.4</button></div>
          <ul class="theory-list">
            <li><strong>Khái niệm Trí nhớ miễn dịch:</strong> Đáp ứng miễn dịch thích nghi trở nên <strong>nhanh hơn, mạnh hơn và hiệu quả hơn</strong> khi tiếp xúc nhiều lần với cùng một kháng nguyên vì các tế bào miễn dịch ghi nhớ mỗi lần gặp trước đó.</li>
            <li><strong>6.2.1. Đáp ứng miễn dịch nguyên phát:</strong> Xảy ra khi tế bào lympho chưa biệt hóa (<em>naïve lymphocytes</em>) tiếp xúc <strong>lần đầu</strong> với kháng nguyên đặc hiệu → tăng sinh, biệt hóa thành tế bào hành sự và tế bào nhớ. Thời gian sau tiêm chủng: <strong>1 đến 3 tuần</strong>.</li>
            <li><strong>6.2.2. Đáp ứng miễn dịch thứ phát:</strong> Xảy ra khi tiếp xúc <strong>những lần sau</strong> với cùng kháng nguyên đặc hiệu → hoạt hóa trực tiếp <strong>các tế bào trí nhớ</strong> đã tồn tại từ lần đầu. Thời gian đáp ứng: <strong>2 đến 7 ngày</strong> (nhanh và mạnh gấp nhiều lần; mỗi lần tái tiếp xúc lại tạo thêm nhiều tế bào nhớ hơn).</li>
            <li><strong>Ứng dụng trực tiếp:</strong> Trí nhớ miễn dịch là cơ chế giúp <strong>vaccine</strong> bảo vệ cơ thể lâu dài chống lại vi sinh vật và độc tố có hại (Câu lượng giá 1).</li>
          </ul>
          <div class="callout pearl">
            <div class="callout-title">🧪 Thí nghiệm Chứng minh Kép trên Hình 1.4 (Antigen X vs Antigen Y)</div>
            Tiêm mũi 1 bằng <strong>Antigen X</strong> → đáp ứng nguyên phát anti-X (tuần 2–3). Đến tuần 5–6 tiêm chung <strong>Antigen X + Antigen Y</strong>:
            <br/>• <strong>Anti-X vọt lên cực nhanh &amp; cao:</strong> chứng minh <strong>Trí nhớ miễn dịch</strong>.
            <br/>• <strong>Anti-Y lên chậm &amp; thấp:</strong> chỉ là đáp ứng nguyên phát → chứng minh <strong>Tính đặc hiệu</strong> (trí nhớ của X không giúp đáp ứng với Y!).
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🕊️ 6.3. Không Phản ứng với Bản thân (Dung nạp Miễn dịch)</div>
        <div class="grid-2">
          <div>
            <p style="font-size:14.5px;margin-bottom:8px;">Dù hệ thống miễn dịch có thể phản ứng với hàng triệu vi khuẩn và kháng nguyên lạ, nhưng thông thường <strong>không phản ứng chống lại kháng nguyên của chính vật chủ</strong> (gọi là <em>kháng nguyên bản thân</em>).</p>
            <p style="font-size:14.5px;"><strong>Dung nạp miễn dịch (Immune tolerance):</strong> Là khả năng hệ thống miễn dịch cùng tồn tại (dung nạp) hòa bình với các phân tử, tế bào và mô có bản chất là kháng nguyên bản thân.</p>
          </div>
          <div class="callout trap" style="margin:0;">
            <div class="callout-title">⚠️ Hệ quả khi thất bại Dung nạp Bản thân</div>
            Thất bại trong khả năng dung nạp bản thân là bất thường cơ bản dẫn đến <strong>bệnh tự miễn</strong> — một nhóm bệnh lý trong đó hệ miễn dịch tạo ra <strong>tự kháng thể</strong> và <strong>tế bào T tự phản ứng</strong> tấn công phá hủy chính các kháng nguyên mô/tế bào của bản thân cơ thể.
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Trẻ sơ sinh được tiêm ngừa một số bệnh truyền nhiễm trong chương trình tiêm chủng quốc gia. Cơ sở của tiêm chủng dựa trên đặc điểm nào của miễn dịch thích nghi?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Câu hỏi lượng giá 1 (tr. 18)",
        options: [
          "Trí nhớ miễn dịch",
          "Chọn lọc clone",
          "Phóng hạt của tế bào mast",
          "Hoạt hóa bổ thể"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (tr. 19): 1.C — Trí nhớ miễn dịch. Trang 10 khẳng định: Trí nhớ miễn dịch là cơ chế giúp cho vaccine có thể bảo vệ cơ thể lâu dài chống lại các vi sinh vật và độc tố có hại."
      },
      {
        q: "Sự chọn lọc clone (tăng sinh và biệt hóa một dòng tế bào) xảy ra khi tế bào lympho trưởng thành tương tác với yếu tố nào sau đây?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Câu hỏi lượng giá 3 (tr. 19)",
        options: [
          "Kháng nguyên đặc hiệu",
          "Tế bào trình diện kháng nguyên",
          "Yếu tố hóa ứng động",
          "Cytokine"
        ],
        answer: 0,
        explain: "Đáp án chuẩn giáo trình (tr. 19): 3.C — Kháng nguyên đặc hiệu. Trang 7–8 nêu rõ: Chính kháng nguyên đặc hiệu đã chọn lọc và hoạt hóa các tế bào lympho tương ứng phát triển thành một clone tế bào (Hình 1.3)."
      },
      {
        q: "Theo Mục 6.1 (tr. 7), số lượng tế bào lympho B và T ở người trưởng thành và số lượng tế bào đặc hiệu với MỘT kháng nguyên trước khi tiếp xúc lần lượt vào khoảng bao nhiêu?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 6.1 (tr. 7)",
        options: [
          "Tổng cộng 0,5 đến 1 × 10¹² tế bào lympho B & T; chỉ khoảng 1.000 đến 10.000 tế bào nhận diện một kháng nguyên trước tiếp xúc",
          "Tổng cộng 1.000 đến 10.000 tế bào lympho; khoảng 10¹² tế bào đặc hiệu cho một kháng nguyên",
          "Tổng cộng 10⁶ tế bào lympho; chỉ có duy nhất 1 tế bào cho toàn bộ vi khuẩn",
          "Tổng cộng 10¹⁵ tế bào lympho; chia đều thành 5 clone cố định"
        ],
        answer: 0,
        explain: "Trang 7: Ở người lớn có khoảng 0,5 đến 1 × 10¹² tế bào lympho B và T (gồm hàng triệu clones). Trước khi tiếp xúc với kháng nguyên đặc hiệu chỉ có rất ít — khoảng 1.000 đến 10.000 tế bào lympho — nhận diện và phản ứng với một kháng nguyên đó."
      },
      {
        q: "Theo chú giải Hình 1.4 (tr. 9), thời gian xuất hiện đáp ứng kháng thể sau khi tiêm chủng đối với đáp ứng nguyên phát và đáp ứng thứ phát thường là bao lâu?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.4 (tr. 9)",
        options: [
          "1 đến 3 tuần đối với đáp ứng nguyên phát và 2 đến 7 ngày đối với đáp ứng thứ phát",
          "0 đến 12 giờ đối với đáp ứng nguyên phát và 1 đến 3 tuần đối với đáp ứng thứ phát",
          "2 đến 7 ngày đối với đáp ứng nguyên phát và 1 đến 3 tháng đối với đáp ứng thứ phát",
          "6 giờ đối với đáp ứng nguyên phát và 24 giờ đối với đáp ứng thứ phát"
        ],
        answer: 0,
        explain: "Trang 9 (chú thích Hình 1.4): Thời gian sau khi tiêm chủng có thể là 1 đến 3 tuần đối với đáp ứng nguyên phát và 2 đến 7 ngày đối với đáp ứng thứ phát (tùy thuộc bản chất kháng nguyên và quá trình tiêm chủng)."
      },
      {
        q: "Trong thí nghiệm tiêm động vật ở Hình 1.4 (tr. 9): Lần 1 tiêm Antigen X; tuần thứ 5–6 tiêm đồng thời Antigen X + Antigen Y. Đường cong Anti-Y xuất hiện ở tuần 6–8 có đặc điểm như thế nào và chứng minh tính chất gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.4 (tr. 9)",
        options: [
          "Là đáp ứng nguyên phát chậm và thấp hơn nhiều so với Anti-X thứ phát — minh họa cho tính ĐẶC HIỆU của trí nhớ miễn dịch",
          "Vọt lên cao ngang bằng Anti-X thứ phát — chứng minh trí nhớ miễn dịch không đặc hiệu",
          "Không hề xuất hiện vì Antigen X đã ức chế hoàn toàn tế bào B Anti-Y",
          "Chỉ xuất hiện tế bào B trí nhớ mà không tạo tương bào"
        ],
        answer: 0,
        explain: "Trang 9: Đáp ứng thứ phát với kháng nguyên X nhanh và lớn hơn đáp ứng nguyên phát (minh họa trí nhớ) và khác với đáp ứng nguyên phát với kháng nguyên Y (phản ánh tính đặc hiệu)."
      },
      {
        q: "Giả thuyết chọn lọc clone (đưa ra từ những năm 1950) đã khẳng định trình tự thời gian nào sau đây?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 6.1 (tr. 7–8)",
        options: [
          "Các tế bào lympho mang thụ thể đa dạng phát triển và trưởng thành TRƯỚC khi gặp kháng nguyên; kháng nguyên đến sau chọn lọc clone tương ứng",
          "Kháng nguyên xâm nhập trước rồi tự dạy cho tế bào đầu dòng lympho tổng hợp ra thụ thể mới từ đầu",
          "Chỉ sau khi tế bào tương bào chết đi thì thụ thể lympho B mới được tạo ra",
          "Mỗi tế bào lympho trưởng thành mang đồng thời hàng triệu loại thụ thể khác nhau trên cùng một tế bào"
        ],
        answer: 0,
        explain: "Trang 7–8: Giả thuyết chọn lọc clone giải thích chính xác việc các tế bào lympho phát triển và trưởng thành trước khi gặp kháng nguyên đặc hiệu, và chính kháng nguyên đặc hiệu chọn lọc, hoạt hóa clone đã tồn tại sẵn đó."
      },
      {
        q: "Nhờ yếu tố tế bào nào mà đáp ứng miễn dịch thứ phát xảy ra nhanh và hiệu quả vượt trội hơn đáp ứng nguyên phát?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 6.2.2 (tr. 9)",
        options: [
          "Quá trình hoạt hóa nhanh các tế bào trí nhớ (memory cells) đã được tạo ra và tồn tại từ lần tiếp xúc đầu tiên",
          "Tăng số lượng đại thực bào bẩm sinh từ da niêm mạc di chuyển vào máu",
          "Kháng thể của lần đầu tồn tại vĩnh viễn không bao giờ giảm nồng độ",
          "Sự chuyển đổi trực tiếp tế bào mast thành tương bào"
        ],
        answer: 0,
        explain: "Trang 9: Đáp ứng miễn dịch thứ phát là kết quả của quá trình hoạt hóa các tế bào trí nhớ tồn tại sau lần tiếp xúc đầu tiên với kháng nguyên đặc hiệu."
      },
      {
        q: "Bản chất rối loạn cơ bản nhất gây ra nhóm bệnh lý tự miễn (Mục 6.3, tr. 10) là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 6.3 (tr. 10)",
        options: [
          "Thất bại trong khả năng dung nạp bản thân khiến hệ miễn dịch tạo tự kháng thể và tế bào T tự phản ứng chống kháng nguyên bản thân",
          "Sự suy giảm quá mức số lượng tế bào T trí nhớ dưới 50% ở người lớn",
          "Hàng rào da bị mất hoàn toàn các tuyến bã và lông chuyển",
          "Các clone lympho B ngừng biệt hóa thành tương bào khi gặp vi khuẩn ngoại bào"
        ],
        answer: 0,
        explain: "Trang 10: Thất bại trong khả năng dung nạp bản thân là bất thường cơ bản trong các bệnh tự miễn — hệ miễn dịch tạo ra tự kháng thể và tế bào T tự phản ứng chống lại kháng nguyên bản thân."
      },
      {
        q: "Trong Hình 1.3 (tr. 8), tất cả các tế bào thuộc cùng MỘT clone lympho có đặc điểm chung nào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 6.1 & Hình 1.3 (tr. 7–8)",
        options: [
          "Đều bắt nguồn từ một tế bào tiền thân và biểu hiện các thụ thể kháng nguyên giống hệt nhau, khác với thụ thể của clone khác",
          "Mang nhiều loại thụ thể hoàn toàn khác nhau trong cùng một clone để bắt mọi vi khuẩn",
          "Chỉ xuất hiện ở người sau khi được tiêm kháng thể thụ động",
          "Không có khả năng tăng sinh hay biệt hóa khi gặp kháng nguyên"
        ],
        answer: 0,
        explain: "Trang 7–8: Mỗi clone đề cập đến một quần thể tế bào lympho bắt nguồn từ một tế bào tiền thân và có thụ thể kháng nguyên giống hệt nhau, khác với thụ thể của tất cả các clone khác."
      },
      {
        q: "Điều gì xảy ra với nồng độ kháng thể đặc hiệu trong máu theo thời gian sau mỗi lần tiêm chủng nếu không có kích thích nhắc lại?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.4 (tr. 9)",
        options: [
          "Mức độ kháng thể giảm dần theo thời gian sau mỗi lần tiêm chủng, nhưng quần thể tế bào trí nhớ vẫn còn tồn tại",
          "Nồng độ kháng thể duy trì ở mức đỉnh cao nhất suốt đời mà không bao giờ giảm",
          "Nồng độ kháng thể tự động tăng gấp đôi mỗi tuần mà không cần tiêm nhắc",
          "Tất cả tế bào B trí nhớ biến mất hoàn toàn ngay ở tuần thứ 4"
        ],
        answer: 0,
        explain: "Trang 9 (chú thích Hình 1.4): Mức độ kháng thể giảm dần theo thời gian sau mỗi lần tiêm chủng (như đường cong tuần 3–5 và tuần 7–10), nhưng tế bào B trí nhớ vẫn tồn tại sẵn sàng cho lần tái tiếp xúc."
      },
      {
        q: "Vì sao đáp ứng miễn dịch thích nghi đảm bảo khi cơ thể nhiễm một loại vi khuẩn X thì phản ứng chỉ tập trung vào vi khuẩn X mà không tấn công bừa bãi các vi khuẩn vô hại khác?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 6.1 (tr. 7)",
        options: [
          "Mỗi tế bào lympho biểu hiện một thụ thể kháng nguyên duy nhất và chỉ nhân lên chọn lọc khi gặp đúng kháng nguyên đặc hiệu của mình",
          "Tế bào thực bào chỉ nuốt vi khuẩn khi có tia xạ ion hóa kích thích",
          "Kháng thể có khả năng tự thay đổi cấu trúc sau khi gắn vào da niêm mạc",
          "Mọi tế bào lympho đều chỉ nhận diện một kháng nguyên duy nhất chung cho mọi vi khuẩn"
        ],
        answer: 0,
        explain: "Trang 7: Mỗi tế bào lympho biểu hiện một thụ thể kháng nguyên duy nhất và do đó chỉ nhận biết và phản ứng với một kháng nguyên; chính kháng nguyên của vi khuẩn gây nhiễm chọn lọc clone tương ứng."
      },
      {
        q: "Vì sao đáp ứng thứ phát giúp kiểm soát hiệu quả các bệnh nhiễm trùng dai dẳng hoặc tái phát nhiều lần?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 6.2 (tr. 10)",
        options: [
          "Mỗi lần tiếp xúc với vi khuẩn vừa kích hoạt các tế bào nhớ đã tạo trước đó vừa sinh thêm nhiều tế bào nhớ hơn",
          "Vì mỗi lần tái nhiễm đều chuyển hóa miễn dịch thích nghi thành miễn dịch thụ động ngắn hạn",
          "Vì tế bào T naïve hoạt động nhanh hơn tế bào T trí nhớ ở những lần nhiễm sau",
          "Vì vi khuẩn tái nhiễm tự động mất hết kháng nguyên bề mặt"
        ],
        answer: 0,
        explain: "Trang 10: Trí nhớ miễn dịch tối ưu hóa khả năng của hệ miễn dịch chống nhiễm trùng dai dẳng và tái phát vì mỗi lần tiếp xúc tạo ra nhiều tế bào nhớ hơn và kích hoạt các tế bào nhớ được tạo ra trước đó."
      }
    ]
  }
];
