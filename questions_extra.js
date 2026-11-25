// ==========================================================================
// NGÂN HÀNG BỔ SUNG + CHUẨN HÓA KSA & MỨC 1–2–3 CHO 6 BÀI SINH LÝ BỆNH – MIỄN DỊCH
// Tổng cộng: 6 bài × 24 câu = 144 câu (Mỗi bài: 6 Mức 1 [25%], 9 Mức 2 [37,5%], 9 Mức 3 [37,5%])
// Phủ đủ 3 miền năng lực: Kiến thức (K) – Kỹ năng (S) – Thái độ (A)
// ==========================================================================

window.EXTRA_QUESTIONS = {
  // ========================================================================
  // BÀI 1: ĐỊNH NGHĨA, CHỨC NĂNG HỆ MIỄN DỊCH & BẨM SINH VS THÍCH NGHI
  // Base: 5 L1, 6 L2, 1 L3 -> Extra: 1 L1, 3 L2, 8 L3
  // ========================================================================
  1: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ lịch sử" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ dịch tễ" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ thành phần" },
      { level: 2, ksa: "S", ksaLabel: "S2: Đọc động học Hình 1.1" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu phối hợp" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ định nghĩa" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu dịch tễ" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu phạm vi" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ hàng rào" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân biệt cơ chế" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu Hình 1.1" },
      { level: 3, ksa: "A", ksaLabel: "A3: Thái độ ghép tạng" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ bộ 3 cấu thành",
        q: "Theo định nghĩa ở Mục 1 (tr. 1), 'Hệ thống miễn dịch' bao gồm ba thành phần nào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 1 (tr. 1)",
        options: [
          "Các cơ quan, các tế bào và các phân tử được các tế bào tiết ra",
          "Chỉ gồm các tế bào bạch cầu và kháng thể trong huyết thanh",
          "Hạch bạch huyết, tủy xương và hệ thần kinh tự chủ",
          "Da, niêm mạc và các kháng sinh tổng hợp đưa từ ngoài vào"
        ],
        answer: 0,
        explain: "Trang 1 định nghĩa nguyên văn: 'Hệ thống miễn dịch bao gồm các cơ quan, các tế bào và các phân tử được các tế bào tiết ra'."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu miễn dịch cộng đồng",
        q: "Theo Mục 2 (tr. 2), hai con đường chính giúp phần lớn dân số phát triển khả năng miễn dịch để làm các đại dịch truyền nhiễm lắng xuống là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 2 (tr. 2)",
        options: [
          "Do tiêm chủng hoặc do nhiễm trùng tự nhiên (tạo miễn dịch cộng đồng)",
          "Do sử dụng đồng loạt kháng sinh phổ rộng và thuốc kháng viêm steroid",
          "Do truyền huyết thanh thụ động từ động vật cho toàn bộ dân số suốt đời",
          "Do đột biến làm mất hoàn toàn thụ thể bề mặt tế bào lympho"
        ],
        answer: 0,
        explain: "Trang 2: Các đại dịch thường lắng xuống khi một bộ phận lớn dân số phát triển khả năng miễn dịch (gọi là miễn dịch cộng đồng) do tiêm chủng hoặc do nhiễm trùng tự nhiên."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S2: Phân tích ứng dụng kháng thể",
        q: "Trong y học hiện đại, các phân tử kháng thể do tế bào miễn dịch tạo ra được ứng dụng phổ biến vào hai lĩnh vực thực hành nào (tr. 2)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 2 (tr. 2)",
        options: [
          "Trong xét nghiệm chẩn đoán và trong điều trị các bệnh miễn dịch, ung thư, nhiễm trùng",
          "Chỉ dùng để nhuộm mô học và làm chất bảo quản thực phẩm",
          "Chỉ dùng để gây miễn dịch chủ động thay thế hoàn toàn vaccine",
          "Chỉ dùng để tiêu hủy mô ghép trong phẫu thuật ngoại khoa"
        ],
        answer: 0,
        explain: "Trang 2: Một ví dụ cho thấy lợi ích của việc kích thích miễn dịch là các kháng thể do tế bào miễn dịch tạo ra, ngày nay được sử dụng phổ biến trong xét nghiệm và trong điều trị các bệnh miễn dịch, ung thư và các bệnh nhiễm trùng khác."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu tiến hóa",
        q: "Về phương diện tiến hóa sinh học (Mục 3.1, tr. 3), nhận định nào ĐÚNG về miễn dịch bẩm sinh và miễn dịch thích nghi?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 3.1 (tr. 3)",
        options: [
          "Miễn dịch bẩm sinh xuất hiện trước trong quá trình tiến hóa; miễn dịch thích nghi xuất hiện sau",
          "Miễn dịch thích nghi xuất hiện trước ở sinh vật đơn bào, miễn dịch bẩm sinh chỉ có ở động vật có vú",
          "Cả hai xuất hiện đồng thời và hoàn toàn độc lập không liên quan nhau",
          "Miễn dịch thích nghi thay thế hoàn toàn làm biến mất miễn dịch bẩm sinh ở người"
        ],
        answer: 0,
        explain: "Trang 3: 'Miễn dịch bẩm sinh có trước còn miễn dịch thích nghi xuất hiện sau trong quá trình tiến hóa', và hai hệ thống tác động hỗ tương, liên quan khăng khít không tách rời."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng lâm sàng",
        q: "Một bệnh nhân bỏng nhiệt độ III diện rộng trên 40% diện tích cơ thể nhập viện, sau 48 giờ xuất hiện nhiễm khuẩn nặng dù số lượng tế bào lympho B và T trong máu vẫn bình thường. Tổn thương tuyến phòng ngự nào đã mở đường cho vi sinh vật xâm nhập?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 3.1 (tr. 3)",
        options: [
          "Mất toàn vẹn hàng rào da — tuyến phòng thủ bẩm sinh đầu tiên cùng các kháng sinh tự nhiên tại chỗ",
          "Thiếu hụt bẩm sinh tế bào T điều hòa ở hạch bạch huyết",
          "Rối loạn quá trình tạo tương bào trong tủy xương",
          "Ức chế sự vận chuyển kháng thể qua nhau thai"
        ],
        answer: 0,
        explain: "Trang 3: Hàng rào miễn dịch bẩm sinh đầu tiên là hàng rào da và niêm mạc (tế bào biểu mô và kháng sinh tự nhiên tại chỗ). Bỏng rộng phá hủy hàng rào cơ học – sinh hóa này nên vi khuẩn xâm nhập ồ ạt trước khi miễn dịch thích nghi kịp hoàn tất."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận bệnh học",
        q: "Một bệnh nhân mắc bệnh tự miễn mạn tính (như lupus ban đỏ hệ thống) đang biểu hiện tổn thương mô thận và khớp kéo dài. Cơ chế giải thích đúng bản chất hiện tượng này theo Mục 2 (tr. 2) là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 2 (tr. 2)",
        options: [
          "Đáp ứng miễn dịch trở nên bất thường gây tổn thương cho chính tế bào, mô lành và duy trì tình trạng viêm mạn tính",
          "Hệ thống miễn dịch hoàn toàn ngừng phản ứng với mọi kháng nguyên trong cơ thể",
          "Tế bào NK biến đổi thành tương bào tiết bổ thể phá hủy màng tế bào da",
          "Bệnh nhân mất khả năng đáp ứng với vaccine tiêm chủng"
        ],
        answer: 0,
        explain: "Trang 2: Bên cạnh chức năng có lợi, đáp ứng miễn dịch bất thường có thể gây ra tổn thương tế bào, mô và viêm mạn tính với tỷ lệ mắc bệnh và tử vong nghiêm trọng (điển hình là dị ứng và bệnh tự miễn)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích động học",
        q: "Một người lần đầu tiên bị vi khuẩn ngoại bào xâm nhập qua vết xước niêm mạc vào lúc 0 giờ. Tại thời điểm 6 giờ sau nhiễm (theo Hình 1.1, tr. 3), lực lượng bảo vệ chủ lực đang hoạt động tại ổ nhiễm là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.1 (tr. 3–4)",
        options: [
          "Các tế bào thực bào, tế bào mast, tế bào tua gai, tế bào NK và bổ thể của miễn dịch bẩm sinh (tương bào tiết kháng thể chưa kịp hình thành đỉnh)",
          "Lượng lớn tương bào đã di chuyển về tủy xương tiết kháng thể IgG đặc hiệu",
          "Các tế bào lympho T trí nhớ đã hình thành từ quá trình tái tuần hoàn kéo dài 14 ngày",
          "Kháng thể đơn dòng tự tổng hợp từ hàng rào biểu mô niêm mạc"
        ],
        answer: 0,
        explain: "Hình 1.1 (tr. 3): Mốc 0 – 6 – 12 giờ sau nhiễm là giai đoạn hoạt động của miễn dịch bẩm sinh (hàng rào niêm mạc, mast, thực bào, bổ thể, tua gai, NK), trong khi miễn dịch thích nghi (B → tương bào/kháng thể; T → T thành sự) phát triển ở mốc 1 – 3 – 5 ngày."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích ca miễn dịch",
        q: "Một trẻ mắc hội chứng suy giảm miễn dịch kết hợp nặng (thiếu cả lympho B và T) vẫn có thể kìm hãm nhẹ vi khuẩn trong vài giờ đầu nhưng sau đó rơi vào nhiễm trùng nặng đe dọa tính mạng. Vì sao trẻ không thể thanh toán triệt để ổ nhiễm?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 2 & 3 (tr. 2–4)",
        options: [
          "Vì miễn dịch bẩm sinh chỉ phòng vệ ban đầu trong 0–12 giờ; muốn loại trừ đặc hiệu và dứt điểm cần sự khuếch đại của miễn dịch thích nghi (lympho B & T)",
          "Vì tế bào thực bào chỉ hoạt động sau ngày thứ 14 kể từ khi nhiễm khuẩn",
          "Vì hàng rào da không tồn tại ở bệnh nhân suy giảm miễn dịch",
          "Vì hệ thống đông máu hoàn toàn ngăn cản bạch cầu đi đến mô nhiễm trùng"
        ],
        answer: 0,
        explain: "Trang 2–4: Cá nhân có phản ứng miễn dịch khiếm khuyết có nguy cơ cao mắc nhiễm trùng nghiêm trọng đe dọa tính mạng. Miễn dịch bẩm sinh tạo đề kháng tức thì và khởi phát thích nghi, nhưng thiếu lympho B và T khiến cơ thể mất đáp ứng đặc hiệu mạnh ở ngày 1–5."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ tiêm chủng",
        q: "Trong một chiến dịch phòng chống dịch bệnh truyền nhiễm mới nổi, vì sao chuyên gia y tế công cộng khuyến khích người dân tiêm vaccine đầy đủ dù bản thân từng khỏe mạnh?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 2 (tr. 2)",
        options: [
          "Để vừa bảo vệ cá nhân không mắc bệnh nặng, vừa góp phần đưa tỷ lệ dân số có miễn dịch đạt ngưỡng miễn dịch cộng đồng giúp dập tắt đại dịch",
          "Để thay thế hoàn toàn hàng rào da và niêm mạc bằng kháng thể đơn dòng",
          "Để biến miễn dịch bẩm sinh thành miễn dịch thụ động không có trí nhớ",
          "Để ức chế tế bào T giúp đỡ nhằm ngăn ngừa phản ứng thải ghép"
        ],
        answer: 0,
        explain: "Trang 2: Kích thích miễn dịch qua tiêm chủng vừa bảo vệ cá nhân hiệu quả nhất (giúp xóa sổ bệnh đậu mùa), vừa tạo miễn dịch cộng đồng làm lắng xuống các đại dịch mà không phải trả giá bằng tử vong do nhiễm tự nhiên."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận cơ chế ung thư",
        q: "Tại sao trong Mục 1 & 2 (tr. 1–2), liệu pháp miễn dịch ung thư hiện đại tập trung vào việc kích thích các phản ứng miễn dịch thay vì ức chế toàn bộ hệ miễn dịch?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 1 & 2 (tr. 1–2)",
        options: [
          "Vì hệ miễn dịch vốn có khả năng nhận diện kháng nguyên khối u và ngăn ngừa phát triển khối u; kích thích phản ứng này giúp tế bào miễn dịch tiêu diệt tế bào ung thư",
          "Vì tế bào ung thư chỉ bị tiêu hủy bởi hệ thống kinin và đông máu",
          "Vì ức chế miễn dịch chỉ làm tăng khả năng xóa sổ virus đậu mùa",
          "Vì kháng nguyên khối u giống hệt kháng nguyên vi khuẩn ngoại bào nên chỉ cần bổ thể"
        ],
        answer: 0,
        explain: "Trang 1–2: Phản ứng chống kháng nguyên khối u là phản ứng miễn dịch; hệ thống miễn dịch ngăn ngừa sự phát triển của một số khối u và kích thích miễn dịch chống lại tế bào u là nền tảng liệu pháp miễn dịch ung thư."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Đánh giá phối hợp",
        q: "Nếu một vi khuẩn có vỏ polysaccharid trơn khiến tế bào thực bào khó bắt giữ trực tiếp, cơ chế phối hợp nào giữa miễn dịch thích nghi và bẩm sinh trong Mục 3.2 (tr. 3) sẽ giải quyết bế tắc này?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 3.2 (tr. 3)",
        options: [
          "Kháng thể đặc hiệu của miễn dịch thích nghi gắn bao phủ vi khuẩn tạo thuận lợi cho tế bào thực bào của miễn dịch bẩm sinh gắn lên và phá hủy",
          "Hàng rào niêm mạc tự biến đổi thành tế bào NK để tiêu hủy vỏ vi khuẩn",
          "Tế bào mast tiết cytokine làm vi khuẩn tự chết theo chương trình ngay lập tức",
          "Hệ thống đông máu kết tủa vi khuẩn và đẩy ngược ra ngoài qua tuyến mồ hôi"
        ],
        answer: 0,
        explain: "Trang 3: Đáp ứng miễn dịch thích nghi thường sử dụng các tế bào miễn dịch bẩm sinh để loại trừ vi khuẩn, ví dụ kháng thể đặc hiệu bao phủ vi khuẩn tạo điều kiện thuận lợi cho tế bào thực bào gắn lên và phá hủy vi khuẩn."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ truyền thông y học",
        q: "Một học viên cao học giải thích với bệnh nhân rằng: 'Miễn dịch bẩm sinh chỉ chống vi khuẩn, còn miễn dịch thích nghi mới liên quan đến tế bào tua gai'. Nhận định này sai ở điểm nào theo Mục 3 & Hình 1.1?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.1 & Mục 3 (tr. 3–4)",
        options: [
          "Tế bào tua gai thuộc thành phần miễn dịch bẩm sinh nhưng đóng vai trò cầu nối khởi phát miễn dịch thích nghi; hai hệ thống phối hợp khăng khít chứ không tách rời",
          "Tế bào tua gai là tế bào duy nhất sản xuất kháng thể IgG trong tủy xương",
          "Miễn dịch thích nghi có trước trong tiến hóa và chỉ hoạt động trong 6 giờ đầu",
          "Miễn dịch bẩm sinh hoàn toàn không chứa tế bào thực bào hay tế bào NK"
        ],
        answer: 0,
        explain: "Hình 1.1 (tr. 3) & Mục 3.1 (tr. 3): Tế bào tua gai nằm trong khối Miễn dịch bẩm sinh nhưng đồng thời trình diện kháng nguyên để khởi phát tế bào T của miễn dịch thích nghi; hai hệ thống tác động hỗ tương khăng khít."
      }
    ]
  },

  // ========================================================================
  // BÀI 2: MIỄN DỊCH DỊCH THỂ VS TẾ BÀO & CHỦ ĐỘNG VS THỤ ĐỘNG
  // Base: 4 L1, 7 L2, 1 L3 -> Extra: 2 L1, 2 L2, 8 L3
  // ========================================================================
  2: {
    baseTags: [
      { level: 2, ksa: "A", ksaLabel: "A2: Dự phòng HBIG" },
      { level: 1, ksa: "K", ksaLabel: "K1: Câu lượng giá 4" },
      { level: 2, ksa: "K", ksaLabel: "K2: Câu lượng giá 5" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu di truyền Ig" },
      { level: 2, ksa: "S", ksaLabel: "S2: So sánh B vs T" },
      { level: 2, ksa: "S", ksaLabel: "S2: Đọc Hình 1.2" },
      { level: 2, ksa: "S", ksaLabel: "S2: Lý giải thải ghép T" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ ví dụ thụ động" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ khái niệm naïve" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ chức năng Ig" },
      { level: 3, ksa: "A", ksaLabel: "A3: Xử trí cấp cứu thụ động" },
      { level: 2, ksa: "K", ksaLabel: "K2: Phân biệt chủ/thụ động" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ bản chất kháng thể",
        q: "Về mặt sinh hóa, kháng thể — thành phần duy nhất của đáp ứng miễn dịch thích nghi dịch thể — có bản chất là gì (tr. 4)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 4.2 (tr. 4)",
        options: [
          "Một globulin có đặc điểm cấu trúc riêng gọi là globulin miễn dịch (immunoglobulin)",
          "Một polysaccharid chuỗi dài gắn màng tiểu cầu",
          "Một phospholipid trung tính được tổng hợp từ lưới nội bào trơn",
          "Một đoạn acid nucleic mạch kép do tế bào NK tiết ra"
        ],
        answer: 0,
        explain: "Trang 4: Thành phần duy nhất của đáp ứng miễn dịch thích nghi dịch thể là kháng thể; về bản chất là một globulin với cấu trúc riêng nên được gọi là globulin miễn dịch (immunoglobulin)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ các vị trí tác động",
        q: "Theo Mục 4.2 (tr. 5), sau khi được tế bào lympho B (tương bào) tạo ra, kháng thể đi vào những khu vực nào của cơ thể để ngăn chặn vi sinh vật?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 4.2 (tr. 5)",
        options: [
          "Đi vào trong máu, các mô, đường tiêu hóa và đường hô hấp (và qua nhau thai ở thai kỳ)",
          "Chỉ khu trú bên trong bào chất tế bào biểu mô phổi",
          "Chỉ nằm trong vùng vỏ tuyến ức và không bao giờ vào máu",
          "Chỉ lưu hành trong dịch não tủy và tủy răng"
        ],
        answer: 0,
        explain: "Trang 5: Miễn dịch dịch thể do tế bào lympho B đảm trách sẽ tạo ra các kháng thể đi vào trong máu, các mô và vào trong đường tiêu hóa và hô hấp, ngoài ra còn vận chuyển qua nhau thai."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu miễn dịch thụ động ung thư",
        q: "Ngày nay, một ứng dụng rộng rãi của liệu pháp miễn dịch THỤ ĐỘNG trong điều trị ung thư được đề cập ở Mục 5.2 (tr. 6) là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 5.2 (tr. 6)",
        options: [
          "Sử dụng các kháng thể được thiết kế để nhận diện đặc hiệu tế bào khối u",
          "Truyền tế bào T từ người hiến ngẫu nhiên không trùng khớp di truyền",
          "Tiêm giải độc tố vi khuẩn uốn ván vào mô khối u",
          "Ngừng hoàn toàn mọi hoạt động của lympho B trong tủy xương"
        ],
        answer: 0,
        explain: "Trang 6: Các kháng thể được thiết kế để nhận diện khối u (kháng thể đơn dòng) hiện đang được sử dụng rộng rãi trong liệu pháp miễn dịch thụ động đối với bệnh ung thư."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S2: Phân biệt 2 nhánh tế bào T",
        q: "Theo Mục 4.1 (tr. 4) và Hình 1.2 (tr. 5), tế bào lympho T giúp đỡ (Th) hỗ trợ chống lại cả vi khuẩn NGOẠI BÀO bằng cách nào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 4.1 (tr. 4)",
        options: [
          "Thúc đẩy phòng vệ bằng cách chiêu mộ lượng lớn tế bào thực bào đến vị trí nhiễm trùng (và kích thích tế bào thực bào tiêu thụ, tiêu diệt vi khuẩn)",
          "Trực tiếp tiết ra các phân tử kháng thể IgM vào lòng ruột",
          "Biến đổi thành tế bào hồng cầu để mang oxy tới ổ áp-xe",
          "Ức chế hoàn toàn tế bào lympho B không cho tạo tương bào"
        ],
        answer: 0,
        explain: "Trang 4: Một số tế bào lympho T giúp đỡ cũng thúc đẩy khả năng phòng vệ chống lại vi khuẩn ngoại bào bằng cách chiêu mộ lượng lớn tế bào thực bào đến vị trí nhiễm trùng để tiêu thụ và tiêu diệt vi khuẩn (đồng thời hỗ trợ lympho B)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận bệnh học vi khuẩn",
        q: "Một vi khuẩn gây bệnh (như lao hoặc thương hàn) sau khi bị đại thực bào nuốt vẫn sống sót và sinh sôi ngay bên trong túi thực bào của đại thực bào. Nếu bệnh nhân chỉ tăng sản xuất kháng thể trong huyết thanh thì có diệt được ổ vi khuẩn này không và vì sao?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 4.1 & 4.2 (tr. 4–6)",
        options: [
          "Không hiệu quả — vì kháng thể chỉ diệt vi sinh vật ngoại bào, không tác dụng khi vi khuẩn đã vào trong tế bào; cần Th tiết cytokine hoạt hóa đại thực bào tiêu diệt chúng",
          "Hiệu quả tuyệt đối — vì kháng thể tự do dễ dàng đi qua màng đại thực bào vào túi thực bào",
          "Hiệu quả — vì kháng thể biến đổi trực tiếp thành enzym lysozyme trong máu",
          "Không cần miễn dịch tế bào — chỉ cần tăng nồng độ kinin huyết tương là đủ"
        ],
        answer: 0,
        explain: "Trang 4–6: Mặc dù kháng thể ngăn chặn vi khuẩn trước khi lây nhiễm, chúng KHÔNG có hiệu quả sau khi vi khuẩn đã xâm nhập vào bên trong tế bào (kể cả trong túi thực bào của thực bào). Lúc này phải nhờ T giúp đỡ (Th) tiết cytokine hoạt hóa đại thực bào."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích kháng nguyên không protein",
        q: "Vỏ ngoài của phế cầu khuẩn (Streptococcus pneumoniae) cấu tạo chủ yếu từ các chuỗi polysaccharid (carbohydrat). Quần thể tế bào thích nghi nào có khả năng nhận diện TRỰC TIẾP cấu trúc carbohydrat này?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 4.2 (tr. 6)",
        options: [
          "Tế bào lympho B và kháng thể — vì B nhận diện đa dạng phân tử gồm cả carbohydrat, lipid, acid nucleic và protein",
          "Chỉ có tế bào lympho T gây độc CD8+ — vì T chuyên nhận diện carbohydrat ngoại bào",
          "Chỉ có tiểu cầu và tế bào biểu mô sừng hóa",
          "Cả lympho B và lympho T đều chỉ nhận diện duy nhất lipid"
        ],
        answer: 0,
        explain: "Trang 6: Hầu hết các tế bào T chỉ nhận ra các đoạn peptide của kháng nguyên protein trình bày trên bề mặt tế bào, trong khi các tế bào B và kháng thể có thể nhận ra nhiều loại phân tử khác nhau (protein, carbohydrat, acid nucleic và lipid)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích ca lâm sàng virus",
        q: "Một virus nhân lên nhanh trong bào chất của tế bào biểu mô phế quản (một loại tế bào KHÔNG có chức năng thực bào). Nhánh tế bào nào của miễn dịch thích nghi sẽ loại trừ trực tiếp các tế bào biểu mô bị nhiễm này?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 4.1 & Hình 1.2 (tr. 4–5)",
        options: [
          "Tế bào lympho T gây độc tế bào (Tc / CTL) — vì chúng tiêu diệt bất kỳ loại tế bào chủ nào (kể cả không thực bào) chứa virus trong bào chất",
          "Tế bào lympho T giúp đỡ (Th) trực tiếp nuốt trọn tế bào biểu mô phế quản",
          "Tế bào mast ở mô liên kết tiết histamin làm tế bào phế quản biến thành tương bào",
          "Kháng thể đơn dòng tự chui vào bào chất phân hủy RNA virus"
        ],
        answer: 0,
        explain: "Trang 4 & Hình 1.2 (tr. 5): Tế bào lympho T gây độc tế bào (cytotoxic T lymphocytes) tiêu diệt bất kỳ loại tế bào chủ nào (bao gồm cả các tế bào không thực bào) chứa các vi sinh vật nội bào chẳng hạn như virus trong tế bào chất."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Xử trí dự phòng sản khoa",
        q: "Một thai phụ mang thai đủ tháng có xét nghiệm HBsAg dương tính vừa sinh con. Vì sao bác sĩ nhi sơ sinh chỉ định tiêm cho trẻ ĐỒNG THỜI cả HBIG lẫn mũi vaccine viêm gan B đầu tiên ngay sau sinh thay vì chỉ tiêm một loại?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 5.2 (tr. 7) & Câu 2 (tr. 18)",
        options: [
          "HBIG (thụ động) bảo vệ trẻ tức thì trong những ngày đầu khi hệ miễn dịch trẻ chưa kịp đáp ứng; còn vaccine (chủ động) kích thích trẻ tự tạo miễn dịch lâu dài có trí nhớ",
          "Vì HBIG sẽ phá hủy vaccine nếu không tiêm cùng giờ",
          "Vì vaccine viêm gan B không có tác dụng ở người dưới 18 tuổi",
          "Vì HBIG là tế bào T truyền từ mẹ sang con qua máu ngoại vi"
        ],
        answer: 0,
        explain: "Trang 6–7: Miễn dịch thụ động (HBIG) bảo vệ nhanh chóng trước khi cá thể kịp tạo ra miễn dịch chủ động, nhưng hết hiệu lực khi kháng thể truyền mất đi; phối hợp với vaccine viêm gan B (chủ động) giúp tối đa hóa khả năng chống lây nhiễm từ mẹ sang con."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Đánh giá xét nghiệm mẹ - con",
        q: "Một trẻ sơ sinh 1 tháng tuổi bú mẹ hoàn toàn có nồng độ kháng thể IgG chống sởi khá cao trong máu dù trẻ chưa từng mắc sởi hay tiêm vaccine sởi; nhưng đến 9 tháng tuổi hiệu giá kháng thể này giảm xuống rất thấp. Giải thích đúng bản chất hiện tượng này:",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 4.2 & 5.2 (tr. 5–6)",
        options: [
          "Đây là miễn dịch thụ động từ kháng thể mẹ truyền qua nhau thai và sữa mẹ — bảo vệ trẻ giai đoạn đầu nhưng không kéo dài suốt đời vì kháng thể truyền thụ động mất dần đi",
          "Đây là dấu hiệu trẻ bị suy giảm miễn dịch tế bào T bẩm sinh",
          "Đây là đáp ứng miễn dịch chủ động đã bị xóa sạch do trẻ bú sữa mẹ",
          "Đây là kết quả của quá trình chọn lọc clone tự phát ở tuyến ức trẻ sơ sinh"
        ],
        answer: 0,
        explain: "Trang 5–6: Kháng thể từ mẹ vận chuyển qua nhau thai và sữa mẹ tạo miễn dịch thụ động ở trẻ sơ sinh; miễn dịch thụ động không kéo dài suốt đời và kết thúc khi kháng thể được truyền mất đi (vì vậy trẻ cần lịch tiêm chủng chủ động khi lớn hơn)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích giới hạn miễn dịch",
        q: "Một bác sĩ đề xuất lấy tế bào lympho T đặc hiệu chống virus CMV từ một người hiến khỏe mạnh (không cùng huyết thống/di truyền) truyền cho bệnh nhân suy giảm miễn dịch nặng để điều trị nhiễm virus nội bào. Dựa vào Mục 5.2 (tr. 7), dự đoán kết quả phương án này:",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 5.2 (tr. 7)",
        options: [
          "Không khả thi vì truyền tế bào T giữa những người không giống nhau về mặt di truyền sẽ dẫn đến tế bào truyền bị đào thải",
          "Thành công hoàn hảo vì tế bào T không bao giờ bị hệ miễn dịch người nhận nhận diện",
          "Tế bào T hiến sẽ tự chuyển hóa thành tương bào tiết IgG suốt đời",
          "Tế bào T hiến sẽ di chuyển vào tuyến ức người nhận và thay thế toàn bộ tuyến ức"
        ],
        answer: 0,
        explain: "Trang 7: 'Miễn dịch thụ động bằng cách truyền tế bào T giữa những người không giống nhau về mặt di truyền là không thể vì các tế bào được truyền sẽ bị đào thải'."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ phân biệt liệu pháp",
        q: "Trong đợt dịch COVID-19, một số bệnh nhân nặng được truyền huyết tương chứa kháng thể tinh khiết từ người đã khỏi bệnh hoặc kháng thể đơn dòng sản xuất trong phòng thí nghiệm. Học viên cần giải thích chính xác liệu pháp này tạo ra loại miễn dịch gì cho bệnh nhân?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 5.2 (tr. 6)",
        options: [
          "Miễn dịch thụ động — giúp trung hòa virus nhanh chóng trong giai đoạn khẩn cấp nhưng không tạo ra trí nhớ miễn dịch lâu dài cho bệnh nhân",
          "Miễn dịch chủ động bền vững suốt đời nhờ kích hoạt tế bào B trí nhớ",
          "Miễn dịch bẩm sinh không đặc hiệu thông qua hoạt hóa tế bào NK",
          "Dung nạp miễn dịch bản thân giúp ngăn ngừa bệnh tự miễn"
        ],
        answer: 0,
        explain: "Trang 6: Dùng huyết thanh từ người đã miễn dịch, kháng thể tinh khiết hoặc kháng thể đơn dòng trong điều trị khẩn cấp (SARS-CoV-2, rắn cắn) là ứng dụng của miễn dịch thụ động: tác dụng nhanh nhưng tạm thời."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Tích hợp Hình 1.2 & Cấu trúc",
        q: "Tại sao trong thực nghiệm nghiên cứu bệnh lý miễn dịch, bệnh nhân chỉ khiếm khuyết sản xuất kháng thể (thiếu lympho B) rất dễ nhiễm các vi khuẩn sinh mủ ngoại bào nhưng vẫn kiểm soát tương đối tốt nhiều nhiễm virus nội bào so với người thiếu hẳn tế bào T?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 4 & Hình 1.2 (tr. 4–6)",
        options: [
          "Vì vi khuẩn ngoại bào cần kháng thể (miễn dịch dịch thể) để trung hòa và opson hóa; trong khi virus nhân lên nội bào được kiểm soát chủ yếu bởi tế bào lympho T (miễn dịch tế bào)",
          "Vì vi khuẩn ngoại bào chỉ sống bên trong nhân của đại thực bào",
          "Vì tế bào lympho B cũng trực tiếp giết tế bào nhiễm virus bằng hạt perforin",
          "Vì thiếu lympho B làm tăng gấp 10 lần số lượng bổ thể huyết tương"
        ],
        answer: 0,
        explain: "Trang 4–6 & Hình 1.2: Miễn dịch dịch thể (B/kháng thể) chuyên ngăn chặn và thải trừ vi sinh vật ngoại bào; miễn dịch qua trung gian tế bào (T) chuyên loại bỏ vi sinh vật nội bào (vi khuẩn trong túi thực bào và virus nhân lên trong tế bào)."
      }
    ]
  },

  // ========================================================================
  // BÀI 3: ĐẶC ĐIỂM MIỄN DỊCH THÍCH NGHI: CHỌN LỌC CLONE, TRÍ NHỚ & DUNG NẠP
  // Base: 4 L1, 7 L2, 1 L3 -> Extra: 2 L1, 2 L2, 8 L3
  // ========================================================================
  3: {
    baseTags: [
      { level: 2, ksa: "A", ksaLabel: "A2: Câu lượng giá 1" },
      { level: 2, ksa: "K", ksaLabel: "K2: Câu lượng giá 3" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ số liệu lympho" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ mốc thời gian" },
      { level: 3, ksa: "S", ksaLabel: "S3: Đọc đồ thị Hình 1.4" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu giả thuyết 1950" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ đáp ứng thứ phát" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu bệnh tự miễn" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ cấu trúc clone" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân tích Hình 1.4" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu 1 TB - 1 thụ thể" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu tích lũy nhớ" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ thuật ngữ",
        q: "Tổng số các đặc tính thụ thể khác nhau của toàn bộ các dòng tế bào lympho trong cơ thể đôi khi được gọi là gì (Mục 6.1, tr. 7)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 6.1 (tr. 7)",
        options: [
          "Danh mục tế bào lympho (lymphocyte repertoire)",
          "Hệ thống kinin huyết tương",
          "Khoảng sáng cạnh nhân (Golgi Hof)",
          "Hội chứng thải ghép cấp"
        ],
        answer: 0,
        explain: "Trang 7: 'Bởi vì hệ thống miễn dịch phải có khả năng phản ứng với một số lượng lớn các kháng nguyên từ tất cả các tác nhân gây bệnh truyền nhiễm, nên tổng số các đặc tính của tế bào lympho, đôi khi được gọi là danh mục tế bào lympho, cực kỳ đa dạng.'"
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ định nghĩa dung nạp",
        q: "Theo Mục 6.3 (tr. 10), thuật ngữ 'Dung nạp miễn dịch' (immune tolerance) được định nghĩa như thế nào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 6.3 (tr. 10)",
        options: [
          "Khả năng của hệ thống miễn dịch cùng tồn tại (không phản ứng) với các phân tử, tế bào và mô có bản chất là kháng nguyên bản thân",
          "Khả năng cơ thể sản xuất kháng thể cao gấp 100 lần khi tiêm vaccine nhắc lại",
          "Tình trạng hệ miễn dịch chỉ dùng đại thực bào mà không dùng lympho T",
          "Hiện tượng kháng thể gắn bao phủ vi khuẩn để tăng thực bào"
        ],
        answer: 0,
        explain: "Trang 10: Sự không phản ứng với bản thân được gọi là khả năng dung nạp miễn dịch, ám chỉ khả năng của hệ thống miễn dịch cùng tồn tại (dung nạp) với các phân tử, tế bào và mô có bản chất là kháng nguyên bản thân."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu phạm vi Hình 1.3",
        q: "Chú thích của Hình 1.3 (Chọn lọc clone, tr. 8) lưu ý điều gì về việc áp dụng nguyên tắc này giữa tế bào lympho B và tế bào lympho T?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.3 (tr. 8)",
        options: [
          "Hình minh họa các tế bào lympho B tạo tế bào tiết kháng thể, nhưng nguyên tắc chọn lọc clone tương tự cũng áp dụng cho tế bào lympho T",
          "Chọn lọc clone chỉ xảy ra ở tế bào lympho B, hoàn toàn không xảy ra ở tế bào lympho T",
          "Tế bào lympho T luôn biệt hóa thành tương bào tiết kháng thể Anti-X",
          "Chỉ các tế bào NK mới tuân theo giả thuyết chọn lọc clone"
        ],
        answer: 0,
        explain: "Trang 8 (chú thích Hình 1.3): 'Hình minh họa các tế bào lympho B tạo ra các tế bào tiết kháng thể, nhưng nguyên tắc tương tự cũng áp dụng cho tế bào lympho T'."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu phạm vi Hình 1.4",
        q: "Trong chú thích Hình 1.4 (tr. 9), mặc dù đồ thị chỉ vẽ hiệu giá kháng thể do tế bào B tạo ra, điều gì cũng được quan sát thấy tương tự ở đáp ứng của tế bào lympho T?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.4 (tr. 9)",
        options: [
          "Các đặc điểm tương tự của đáp ứng nguyên phát và thứ phát (nhanh hơn, mạnh hơn, đặc hiệu) cũng được thấy với đáp ứng của tế bào T với kháng nguyên",
          "Tế bào T không bao giờ có trí nhớ miễn dịch ở lần tiếp xúc thứ hai",
          "Tế bào T đáp ứng lần đầu trong 1 giờ và chết hết ngay trong 2 giờ",
          "Tế bào T chỉ phản ứng với Antigen Y chứ không bao giờ phản ứng với Antigen X"
        ],
        answer: 0,
        explain: "Trang 9: 'Chỉ tế bào B được hiển thị, nhưng các đặc điểm tương tự cũng được thấy với đáp ứng của tế bào T với kháng nguyên'."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích động học",
        q: "Dựa vào Hình 1.4 (tr. 9), một động vật thí nghiệm được tiêm Antigen X ở Tuần 0, sau đó ở Tuần 5 chỉ tiêm riêng Antigen Y (KHÔNG tiêm lại Antigen X). Dự đoán chính xác đường cong kháng thể Anti-X và Anti-Y từ Tuần 5 đến Tuần 8:",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.4 (tr. 9)",
        options: [
          "Anti-X tiếp tục giảm ở mức thấp vì không được tái kích thích; Anti-Y xuất hiện như một đáp ứng nguyên phát chậm và đỉnh thấp vì đây là lần đầu gặp Y",
          "Anti-X vọt lên đỉnh thứ phát cực cao nhờ kích thích chéo từ Antigen Y",
          "Anti-Y vọt lên cực cao ngay sau 2 ngày vì cơ thể đã được tiêm X trước đó",
          "Cả Anti-X và Anti-Y đều bằng 0 tuyệt đối ngay sau Tuần 5"
        ],
        answer: 0,
        explain: "Do tính ĐẶC HIỆU của đáp ứng miễn dịch thích nghi (Mục 6.1 & Hình 1.4), tế bào B trí nhớ Anti-X chỉ được hoạt hóa bởi đúng Antigen X; Antigen Y không thể kích hoạt đáp ứng thứ phát Anti-X và tự nó chỉ tạo đáp ứng nguyên phát chậm (1–3 tuần) từ B naïve Anti-Y."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận số lượng tế bào",
        q: "Nếu trước khi tiếp xúc một loại virus mới chỉ có khoảng 2.000 tế bào lympho đặc hiệu trên tổng số gần 10¹² tế bào lympho trong cơ thể người lớn, tại sao 2.000 tế bào ít ỏi đó vẫn đủ sức ngăn chặn một ổ nhiễm lan rộng?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 6.1 (tr. 7)",
        options: [
          "Nhờ khả năng nhân lên cấp số nhân và phát triển thành một clone tế bào đặc hiệu lớn mạnh sau khi được chính kháng nguyên chọn lọc và hoạt hóa",
          "Vì 2.000 tế bào đó không cần phân chia mà tự biến thành hàng rào sừng hóa",
          "Vì chúng chuyển đổi toàn bộ 10¹² tế bào lympho khác sang mang cùng một thụ thể",
          "Vì chúng ngừng hoạt động để nhường chỗ cho bổ thể làm tất cả"
        ],
        answer: 0,
        explain: "Trang 7: 'Mặc dù chỉ có khoảng 1.000 đến 10.000 tế bào lympho nhận diện và phản ứng với một kháng nguyên đặc hiệu nào đó nhưng nhờ khả năng nhân lên và phát triển thành một clone tế bào sẽ giúp cho hệ thống miễn dịch nhanh chóng có khả năng tiêu diệt và loại trừ vi khuẩn'."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích cơ chế chọn lọc",
        q: "Một đột biến giả định ở động vật làm mất toàn bộ tế bào lympho mang thụ thể khớp với Kháng nguyên Z TRƯỚC khi sinh. Khi trưởng thành, động vật này được tiêm Kháng nguyên Z nhiều lần. Theo giả thuyết chọn lọc clone (Hình 1.3), kết quả nào xảy ra?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 6.1 & Hình 1.3 (tr. 7–8)",
        options: [
          "Không tạo được đáp ứng đặc hiệu với Kháng nguyên Z vì không có sẵn clone lympho mang thụ thể tương ứng để kháng nguyên Z chọn lọc",
          "Kháng nguyên Z tự ép các tế bào B Anti-X đổi thụ thể sang Anti-Z ngay lập tức",
          "Các tương bào cũ tự động tổng hợp kháng thể Anti-Z mà không cần qua lympho B",
          "Đáp ứng thứ phát Anti-Z xuất hiện ngay sau 2 ngày ở lần tiêm thứ hai"
        ],
        answer: 0,
        explain: "Theo Giả thuyết chọn lọc clone (tr. 7–8), thụ thể kháng nguyên phát triển TRƯỚC khi gặp kháng nguyên; kháng nguyên chỉ đóng vai trò chọn lọc clone có sẵn. Nếu hoàn toàn không có sẵn clone tương ứng trong danh mục, cơ thể không có mục tiêu để chọn lọc."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ giải thích lịch tiêm",
        q: "Một phụ huynh thắc mắc: 'Tại sao sau tiêm vaccine mũi 1 vài tuần đã có kháng thể rồi mà lịch tiêm chủng vẫn phải tiêm thêm mũi nhắc lại sau một thời gian?' Giải thích nào chuẩn xác nhất theo Hình 1.4?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.4 & Mục 6.2 (tr. 9–10)",
        options: [
          "Mũi 1 chỉ tạo đáp ứng nguyên phát đỉnh thấp, chậm (1–3 tuần) và kháng thể giảm dần theo thời gian; mũi nhắc huy động tế bào trí nhớ tạo đáp ứng thứ phát nhanh (2–7 ngày), cao gấp nhiều lần và sinh thêm nhiều tế bào nhớ bền vững hơn",
          "Mũi 1 không tạo được kháng thể nào mà chỉ tạo miễn dịch thụ động từ dung môi vaccine",
          "Mũi nhắc lại giúp thay đổi bản chất miễn dịch chủ động thành miễn dịch bẩm sinh",
          "Mũi nhắc lại chỉ để xóa bỏ khả năng dung nạp bản thân của hệ miễn dịch"
        ],
        answer: 0,
        explain: "Trang 9–10 & Hình 1.4: Mức độ kháng thể giảm dần theo thời gian sau lần tiêm đầu; mũi tiêm nhắc kích hoạt tế bào trí nhớ tạo đáp ứng thứ phát nhanh (2–7 ngày), hiệu giá và chất lượng kháng thể vượt trội hơn đồng thời gia tăng số lượng tế bào nhớ."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng mốc thời gian",
        q: "Một bệnh nhân đã từng tiêm đủ 2 mũi vaccine phòng bệnh X cách đây 1 năm (đã có tế bào trí nhớ) nay phơi nhiễm lại với tác nhân X. Theo động học ở Hình 1.4, đáp ứng miễn dịch đặc hiệu chống lại X sẽ khởi phát mạnh sau khoảng bao lâu?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.4 (tr. 9)",
        options: [
          "Khoảng 2 đến 7 ngày (đáp ứng miễn dịch thứ phát nhờ tế bào trí nhớ)",
          "Phải chờ đúng 1 đến 3 tuần như người chưa từng tiêm (ngây thơ)",
          "Phải chờ 6 đến 10 tuần mới có tương bào đầu tiên",
          "Không thể đáp ứng lại được nữa vì kháng thể mũi đầu đã giảm"
        ],
        answer: 0,
        explain: "Trang 9: Thời gian sau tiếp xúc có thể là 1–3 tuần với đáp ứng nguyên phát và chỉ 2–7 ngày đối với đáp ứng thứ phát nhờ hoạt hóa nhanh quần thể tế bào trí nhớ."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận bệnh lý tự miễn",
        q: "Xét nghiệm máu của một bệnh nhân viêm khớp dạng thấp hoặc lupus phát hiện các kháng thể IgG chống lại chính phân tử DNA và protein nhân của tế bào bản thân. Hiện tượng này phản ánh sự thất bại ở đặc điểm cốt lõi nào của miễn dịch thích nghi?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 6.3 (tr. 10)",
        options: [
          "Thất bại khả năng dung nạp bản thân (không phản ứng với bản thân) — dẫn đến tạo tự kháng thể và tế bào T tự phản ứng trong bệnh tự miễn",
          "Thất bại quá trình tạo trí nhớ miễn dịch sau tiêm vaccine",
          "Thất bại quá trình thực bào của bạch cầu trung tính ở da",
          "Thất bại quá trình vận chuyển kháng thể qua nhau thai"
        ],
        answer: 0,
        explain: "Trang 10: Thất bại trong khả năng dung nạp bản thân là bất thường cơ bản trong các bệnh tự miễn — một nhóm bệnh lý trong đó hệ miễn dịch tạo ra tự kháng thể và tế bào T tự phản ứng chống lại kháng nguyên bản thân."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: So sánh nguyên lý 1950",
        q: "Trước thập niên 1950, từng có giả thuyết cho rằng kháng nguyên đóng vai trò như 'khuôn mẫu' uốn nắn phân tử kháng thể mới tinh chưa có đặc hiệu. Tại sao Giả thuyết Chọn lọc Clone đã bác bỏ quan điểm 'khuôn mẫu' này?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 4.2 & 6.1 (tr. 5, 7–8)",
        options: [
          "Vì các đặc hiệu kháng thể và thụ thể lympho được tạo ra ngẫu nhiên, độc lập và tồn tại TRƯỚC khi gặp kháng nguyên; kháng nguyên chỉ chọn lọc và nhân lên clone phù hợp sẵn có",
          "Vì cơ thể chỉ có duy nhất một loại kháng thể chung cho mọi kháng nguyên",
          "Vì kháng nguyên chỉ gắn vào bổ thể chứ không bao giờ tiếp xúc tế bào lympho",
          "Vì tất cả kháng thể đều do tế bào gan tổng hợp rồi gắn lên hồng cầu"
        ],
        answer: 0,
        explain: "Trang 5, 7–8: Cơ sở gen học và giả thuyết chọn lọc clone (1950) khẳng định thụ thể/kháng thể đa dạng được tạo ra ngẫu nhiên, độc lập với kháng nguyên và đã trưởng thành TRƯỚC khi gặp kháng nguyên; chính kháng nguyên đến chọn lọc clone tương ứng."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ giải thích sai lầm",
        q: "Một người cho rằng: 'Sau khi tiêm vaccine uốn ván, miễn dịch dịch thể giúp mình chống luôn cả virus cúm mùa mới vì trí nhớ miễn dịch làm tăng sức đề kháng chung cho mọi bệnh'. Dựa vào Hình 1.4, nhận định này sai ở đặc điểm nào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 6.1 & Hình 1.4 (tr. 7–9)",
        options: [
          "Sai ở tính ĐẶC HIỆU của miễn dịch thích nghi và trí nhớ miễn dịch: trí nhớ chống kháng nguyên X (uốn ván) không tạo đáp ứng thứ phát với kháng nguyên Y khác (virus cúm)",
          "Sai vì vaccine uốn ván chỉ kích thích tế bào mast phóng hạt",
          "Sai vì virus cúm thuộc miễn dịch bẩm sinh không bao giờ kích thích lympho B",
          "Sai vì chỉ người trên 60 tuổi mới có tế bào trí nhớ"
        ],
        answer: 0,
        explain: "Trang 7–9 & Hình 1.4: Mỗi clone chỉ nhận diện một kháng nguyên đặc hiệu duy nhất; đáp ứng thứ phát với Antigen X nhanh mạnh (trí nhớ) nhưng cùng lúc với Antigen Y mới vẫn chỉ là đáp ứng nguyên phát (tính đặc hiệu)."
      }
    ]
  },

  // ========================================================================
  // BÀI 4: QUÁ TRÌNH TRƯỞNG THÀNH, CÁC DÒNG LYMPHO & TẾ BÀO TRÌNH DIỆN (APC)
  // Base: 4 L1, 7 L2, 1 L3 -> Extra: 2 L1, 2 L2, 8 L3
  // ========================================================================
  4: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ cơ quan trung ương" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ tỷ lệ T nhớ" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu yếu tố đồng kích" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân biệt DC vs FDC" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ phân loại CD4+" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu số phận naïve" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu plasma blast" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ phân tử CD" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu cầu nối APC" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu vai trò Treg" },
      { level: 2, ksa: "K", ksaLabel: "K2: So sánh đời sống T" },
      { level: 3, ksa: "S", ksaLabel: "S3: Tích hợp đặc tính B" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ nguồn gốc chung",
        q: "Theo Hình 1.5 và Mục 7 (tr. 10–11), cả hai dòng tế bào lympho B và lympho T ban đầu đều được sinh ra từ đâu?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 7 & Hình 1.5 (tr. 10–11)",
        options: [
          "Từ tế bào đầu dòng lympho ở tủy xương",
          "Từ các tiểu thể Hassall ở tuyến ức",
          "Từ trung tâm mầm của hạch bạch huyết cổ",
          "Từ tủy đỏ của lách"
        ],
        answer: 0,
        explain: "Trang 10: 'Tất cả tế bào lympho đều được sinh ra từ tế bào đầu dòng lympho ở tủy xương, sau đó tế bào lympho T sẽ được huấn luyện và trưởng thành tại tuyến ức còn tế bào lympho B sẽ trưởng thành ở tủy xương'."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ số lượng lympho",
        q: "Theo Mục 8.1 (tr. 11), người trưởng thành có tổng cộng khoảng bao nhiêu tế bào lympho và vai trò độc nhất của tế bào lympho là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 8.1 (tr. 11)",
        options: [
          "Khoảng 10¹² tế bào lympho — là tế bào duy nhất có thể nhân lên thành một dòng tế bào (clone) để đáp ứng đặc hiệu với nhiều loại kháng nguyên",
          "Khoảng 10⁶ tế bào lympho — chỉ có chức năng thực bào vi khuẩn ngoại bào",
          "Khoảng 10⁹ tế bào lympho — chỉ tồn tại trong dịch não tủy",
          "Khoảng 10¹⁵ tế bào lympho — đồng nhất hoàn toàn về chức năng và dấu ấn bề mặt"
        ],
        answer: 0,
        explain: "Trang 11: 'Tế bào lympho là tế bào duy nhất có thể nhân lên thành một dòng tế bào để đáp ứng đặc hiệu với nhiều loại kháng nguyên khác nhau. Người trưởng thành có khoảng 10¹² tế bào lympho'."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu cửa ngõ của APC",
        q: "Các tế bào trình diện kháng nguyên (APC) thường phân bố tập trung chủ yếu ở những vị trí giải phẫu nào để đón bắt mầm bệnh sớm nhất (tr. 13)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 8.2 (tr. 13)",
        options: [
          "Ở các cửa ngõ xâm nhập của vi sinh vật gây bệnh như da, niêm mạc đường tiêu hóa, hô hấp và đường niệu sinh dục",
          "Chỉ nằm sâu bên trong buồng tim và mạch vành",
          "Chỉ nằm bên trong bao khớp gối và đĩa đệm cột sống",
          "Chỉ nằm cố định trong các ống góp của thận"
        ],
        answer: 0,
        explain: "Trang 13: Các tế bào trình diện kháng nguyên thường nằm ở cửa ngõ xâm nhập của vi sinh vật gây bệnh như ở da, niêm mạc đường tiêu hóa, hô hấp, đường niệu sinh dục..."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu trạng thái tế bào nhớ",
        q: "Về mặt chức năng hành sự khi chưa gặp lại kháng nguyên đặc hiệu, các tế bào trí nhớ đang ở trạng thái như thế nào (tr. 11)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 7 (tr. 11)",
        options: [
          "Không hoạt động về mặt chức năng hành sự nào cho đến khi gặp lại kháng nguyên đặc hiệu của mình, khi đó mới nhanh chóng được hoạt hóa tạo đáp ứng thứ phát",
          "Liên tục tiết cytokine gây sốt và viêm mạn tính hàng ngày suốt đời",
          "Liên tục giết chết các tế bào biểu mô lành lân cận",
          "Đang phân bào mất kiểm soát tương tự tế bào ung thư"
        ],
        answer: 0,
        explain: "Trang 11: 'Tế bào trí nhớ không hoạt động về mặt chức năng hành sự nào cho đến khi gặp lại kháng nguyên đặc hiệu của mình, khi đó tế bào trí nhớ sẽ nhanh chóng được hoạt hóa tạo ra đáp ứng miễn dịch thứ phát'."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận bệnh học tuyến ức",
        q: "Trẻ sơ sinh mắc hội chứng DiGeorge (bất sản bẩm sinh tuyến ức — không có tuyến ức hoạt động) sẽ bị ảnh hưởng nặng nề trực tiếp nhất ở quá trình trưởng thành của dòng tế bào nào theo Hình 1.5?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 7 & Hình 1.5 (tr. 10–11)",
        options: [
          "Quá trình huấn luyện và trưởng thành của dòng tế bào lympho T (từ tiền thân tủy xương đi lên tuyến ức), làm suy giảm nghiêm trọng miễn dịch tế bào",
          "Quá trình sinh sản tế bào đầu dòng hồng cầu ở tủy xương",
          "Quá trình trưởng thành trực tiếp của tế bào mast tại biểu bì da",
          "Quá trình sản xuất bổ thể trong huyết tương gan"
        ],
        answer: 0,
        explain: "Theo Hình 1.5 & Mục 7 (tr. 10–11): Tế bào đầu dòng lympho T sinh ra ở tủy xương nhưng bắt buộc phải di chuyển đến Tuyến ức (Thymus) để được huấn luyện và trưởng thành. Thiếu tuyến ức làm mất nguồn tế bào T trưởng thành."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích kỹ thuật xét nghiệm CD",
        q: "Trên tiêu bản phết máu ngoại biên nhuộm Giemsa thường quy dưới kính hiển vi quang học, bác sĩ huyết học KHÔNG thể phân biệt được đâu là tế bào B, Th, Tc hay Treg chỉ bằng hình dạng. Kỹ thuật miễn dịch học sử dụng nguyên lý nào để tách biệt chính xác chúng?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 8.1 (tr. 11–13)",
        options: [
          "Nhận diện các protein đặc trưng biểu hiện trên bề mặt tế bào gọi là các phân tử CD hay dấu ấn bề mặt (như CD4, CD8)",
          "Đo độ dài lông chuyển trên bề mặt từng tế bào lympho",
          "So sánh màu sắc bào tương sau khi cắt lạnh nhuộm Oil Red O",
          "Đếm số lượng nhân trong tế bào vì tế bào Tc có 3 nhân còn B có 1 nhân"
        ],
        answer: 0,
        explain: "Trang 11–12: Các tế bào lympho mặc dù giống nhau về hình thái nhưng rất khác nhau về chức năng, khả năng đáp ứng và nguồn gốc; chúng được phân biệt dựa trên các protein biểu hiện trên bề mặt gọi là phân tử CD hay dấu ấn bề mặt (như T CD4+ gồm Th/Treg và T CD8+ là Tc)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng cơ chế đồng kích thích",
        q: "Trong một thí nghiệm, nhà nghiên cứu đưa một đoạn peptide tinh khiết vào môi trường nuôi cấy tế bào T naïve cùng một tế bào nhân tạo chỉ gắn phức hợp MHC-peptide nhưng KHÔNG có phân tử đồng kích thích và KHÔNG có yếu tố vi khuẩn. Kết quả nào được dự đoán dựa trên Mục 8.2?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 8.2 (tr. 13)",
        options: [
          "Tế bào T naïve không được hoạt hóa mạnh như khi gặp tế bào tua gai có vi khuẩn kích thích, vì thiếu 'tín hiệu thứ hai' từ các yếu tố đồng kích thích",
          "Tế bào T naïve lập tức biệt hóa thành tương bào tiết kháng thể IgG",
          "Tế bào T naïve di chuyển ngược vào tủy xương biến thành tế bào tua gai",
          "Cơ thể tạo ngay đáp ứng thứ phát trong vòng 2 giờ"
        ],
        answer: 0,
        explain: "Trang 13: Tế bào tua gai khi bị kích thích bởi vi khuẩn sẽ biểu hiện nhiều yếu tố đồng kích thích đóng vai trò là TÍN HIỆU THỨ HAI để hoạt hóa tế bào lympho T; chính nhờ mật độ yếu tố đồng kích thích cao mà tế bào tua gai là tế bào mạnh nhất kích hoạt T."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân biệt loại tế bào tua gai",
        q: "Một sinh viên đọc bài 1 và cho rằng: 'Mọi tế bào tua gai trong cơ thể đều chỉ trình diện peptide cho tế bào lympho T chứ không tương tác với tế bào B'. Phát biểu này bỏ sót chi tiết nào ở trang 13–14?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 8.2 (tr. 13–14)",
        options: [
          "Bỏ sót 'tế bào tua gai ở nang bạch huyết' (cụ thể ở trung tâm mầm của nang bạch huyết) có chức năng trình diện kháng nguyên để hoạt hóa tế bào lympho B",
          "Bỏ sót tế bào tua gai chính là tiền thân tạo ra hồng cầu và tiểu cầu",
          "Bỏ sót tế bào tua gai sống ở tủy xương để sản xuất trực tiếp kháng thể IgM",
          "Bỏ sót tế bào tua gai chỉ hiện diện ở người lớn trên 50 tuổi"
        ],
        answer: 0,
        explain: "Trang 13–14 (2 dòng cuối trang 13 và đầu trang 14): 'Một loại tế bào tua gai đặc biệt là tế bào tua gai ở nang bạch huyết cụ thể là ở trung tâm mầm của nang bạch huyết có chức năng trình diện kháng nguyên để hoạt hóa tế bào lympho B'."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: So sánh T CD4+ và bệnh học",
        q: "Virus HIV tấn công và làm suy kiệt chọn lọc quần thể tế bào lympho T CD4⁺ theo thời gian. Hậu quả lan tỏa nào xảy ra trên cả hai nhánh miễn dịch dịch thể và thực bào theo Hình 1.6 (tr. 12–13)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.6 & Mục 8.1 (tr. 12–13)",
        options: [
          "Mất tế bào T giúp đỡ (T CD4+) làm suy giảm tiết cytokine → suy yếu đồng thời sự hỗ trợ hoạt hóa lympho B sản xuất kháng thể, hoạt hóa đại thực bào diệt khuẩn và phản ứng viêm",
          "Làm tăng sản ồ ạt các tương bào trong tủy xương để bù trừ cho thiếu T",
          "Chỉ làm mất khả năng nhận diện kháng nguyên của tế bào NK ở da",
          "Làm cho tế bào T điều hòa trở thành tế bào T gây độc phá hủy hồng cầu"
        ],
        answer: 0,
        explain: "Hình 1.6 (tr. 12) & Mục 8.1 (tr. 13): T CD4+ (T giúp đỡ) giữ vai trò quan trọng nhất vì sản xuất cytokine đồng thời (1) hoạt hóa đại thực bào, (2) thúc đẩy viêm/chiêu mộ bạch cầu, và (3) hỗ trợ hoạt hóa lympho B sản xuất kháng thể."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích cơ chế Tương bào",
        q: "Sau khi tiêm vaccine uốn ván thành công nhiều năm, vì sao người được tiêm vẫn duy trì được một nồng độ kháng thể bảo vệ nền kéo dài trong huyết thanh ngay cả khi tế bào T hành sự đã chết hết?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 7 (tr. 10–11)",
        options: [
          "Vì một số tương bào non (plasma blast) từ dòng lympho B di chuyển trở lại tủy xương và phát triển thành tương bào sống nhiều năm liên tục sản xuất kháng thể đặc hiệu",
          "Vì các phân tử kháng thể tồn tại vĩnh viễn không bao giờ bị thoái giáng sinh học",
          "Vì tế bào T hành sự hóa thành tương bào cư trú trong tuyến ức",
          "Vì tế bào tua gai ở da tự tiết kháng thể IgG vào máu"
        ],
        answer: 0,
        explain: "Trang 10: 'Một số tương bào non (plasma blast) ra máu ngoại biên có thể di chuyển trở lại tủy xương và phát triển thành tương bào có thể sống nhiều năm và nhanh chóng sản xuất ra kháng thể đặc hiệu giúp bảo vệ cơ thể trong trường hợp tái nhiễm'."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ đánh giá tuổi miễn dịch",
        q: "Khi so sánh hồ sơ quần thể lympho T máu ngoại vi của một trẻ sơ sinh với một người trưởng thành khỏe mạnh 30 tuổi, nhận xét nào phản ánh đúng quy luật sinh lý trưởng thành miễn dịch ở trang 11?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 7 (tr. 11)",
        options: [
          "Ở trẻ sơ sinh, đa số (>95%) tế bào T là tế bào naïve (T nhớ < 5%); còn ở người trưởng thành, do tích lũy tiếp xúc kháng nguyên suốt đời nên tế bào T nhớ chiếm hơn 50%",
          "Trẻ sơ sinh có hơn 50% tế bào T nhớ nhờ nhận tế bào T từ nhau thai mẹ",
          "Người trưởng thành không còn tế bào T nhớ vì tế bào T chỉ sống dưới 7 ngày",
          "Tỷ lệ tế bào T nhớ ở trẻ sơ sinh và người lớn bằng nhau tuyệt đối"
        ],
        answer: 0,
        explain: "Trang 11: 'Số lượng tế bào trí nhớ tăng dần theo thời gian từ dưới 5% số lượng các tế bào lympho T ở trẻ sơ sinh lên đến hơn 50% ở người trưởng thành'."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Đánh giá vai trò Treg",
        q: "Một bệnh nhi mang đột biến gen hiếm gặp làm mất chức năng của quần thể tế bào lympho T điều hòa (Treg) ngay từ nhỏ. Theo Hình 1.6 và Mục 8.1, bệnh nhi có nguy cơ rất cao phát triển hội chứng bệnh lý gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.6 & Mục 8.1 (tr. 12–13)",
        options: [
          "Bệnh tự miễn nặng đa cơ quan — do thiếu sự ức chế kiềm chế hoạt động của các tế bào lympho T đáp ứng",
          "Mất hoàn toàn khả năng tạo tế bào lympho B trong tủy xương",
          "Tăng sản quá mức tiểu thể Hassall gây tắc mạch máu ngoại biên",
          "Giảm toàn bộ các tế bào thực bào của miễn dịch bẩm sinh trong 6 giờ đầu"
        ],
        answer: 0,
        explain: "Hình 1.6 (tr. 12) & tr. 13: Tế bào T điều hòa (một phân nhóm T CD4+) có tác dụng ức chế đáp ứng miễn dịch, hạn chế hoạt động các lympho khác đặc biệt là T đáp ứng nhằm NGĂN NGỪA TÌNH TRẠNG TỰ MIỄN."
      }
    ]
  },

  // ========================================================================
  // BÀI 5: CƠ QUAN MIỄN DỊCH, TUẦN HOÀN LYMPHO & 5 GIAI ĐOẠN ĐÁP ỨNG THÍCH NGHI
  // Base: 4 L1, 6 L2, 2 L3 -> Extra: 2 L1, 3 L2, 7 L3
  // ========================================================================
  5: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Phân loại cơ quan" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ mạch HEV" },
      { level: 2, ksa: "S", ksaLabel: "S2: Đọc lộ trình Hình 1.7" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ thứ tự 5 pha" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu pha thu hẹp" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ yếu tố kết dính" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu pha hoạt hóa" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu MALT/SALT" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu homeostasis" },
      { level: 3, ksa: "S", ksaLabel: "S3: So sánh di trú Hình 1.7" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu thải trừ KN" },
      { level: 3, ksa: "S", ksaLabel: "S3: Phân tích vai trò hạch" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ chức năng 2 nhóm cơ quan",
        q: "Sự phân chia chức năng chính giữa 'cơ quan lympho trung ương' và 'cơ quan lympho ngoại biên' (Mục 9, tr. 14) là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 9 (tr. 14)",
        options: [
          "Cơ quan trung ương là nơi tế bào lympho T và B trưởng thành; cơ quan ngoại biên là nơi tế bào lympho được hoạt hóa và trở thành tế bào hành sự",
          "Cơ quan ngoại biên là nơi sản sinh tế bào đầu dòng; cơ quan trung ương là nơi xảy ra apoptosis khi hết kháng nguyên",
          "Cơ quan trung ương chỉ nằm ở vùng da; cơ quan ngoại biên chỉ gồm tủy xương",
          "Cả hai đều có chức năng duy nhất là lọc hồng cầu già"
        ],
        answer: 0,
        explain: "Trang 14: Cơ quan lympho trung ương (tuyến ức, tủy xương) là nơi các tế bào lympho T và B trưởng thành sẵn sàng ra ngoại biên; cơ quan lympho ngoại biên (hạch bạch huyết, lách, tổ chức lympho dưới da & niêm mạc) là nơi các tế bào lympho được hoạt hóa và trở thành tế bào hành sự."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Nhớ mốc ngày Hình 1.8",
        q: "Trên đồ thị Hình 1.8 (Các giai đoạn của đáp ứng miễn dịch thích nghi, tr. 15), đỉnh cao số lượng tế bào lympho đặc hiệu và giai đoạn bắt đầu thu hẹp bằng apoptosis lần lượt tương ứng với các mốc thời gian nào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.8 (tr. 15)",
        options: [
          "Đạt đỉnh quanh ngày thứ 7 (giai đoạn hoạt hóa); thu hẹp rõ quanh ngày thứ 14 sau khi tiếp xúc kháng nguyên",
          "Đạt đỉnh ở ngày 0 và thu hẹp ở ngày thứ 2",
          "Đạt đỉnh ở tuần thứ 10 và thu hẹp ở tháng thứ 12",
          "Không thay đổi số lượng trong suốt 14 ngày đầu"
        ],
        answer: 0,
        explain: "Hình 1.8 (tr. 15): Trục hoành đánh dấu rõ mốc 0 → 7 ngày (đỉnh nhân lên của clone & biệt hóa tế bào hành sự) → 14 ngày (giai đoạn thu hẹp homeostasis nhờ apoptosis) → giai đoạn trí nhớ."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu đích đến T hành sự",
        q: "Sau khi tế bào T được hoạt hóa và rời hạch bạch huyết trở lại máu, chúng được định hướng di chuyển đến đâu để thực hiện chức năng loại trừ nhiễm trùng (Mục 10, tr. 14)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 10 & Hình 1.7 (tr. 14)",
        options: [
          "Di chuyển ưu tiên đến các mô ngoại biên tại chính các vị trí đang có nhiễm trùng và viêm",
          "Quay trở lại tuyến ức để được huấn luyện lại từ đầu",
          "Chui vào tiểu tĩnh mạch nội mô cao để quay vòng vô tận trong cùng một hạch",
          "Tập trung hoàn toàn trong dịch mật ở túi mật"
        ],
        answer: 0,
        explain: "Trang 14 (Hình 1.7): Tế bào T hoạt hóa thoát khỏi hạch, đi vào máu và di chuyển ưu tiên đến các mô ngoại vi tại các vị trí nhiễm trùng và viêm (nhờ các phân tử kết dính liên quan đến sự gắn kết của tế bào T với tế bào nội mô)."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S2: Phân tích vùng hạch bạch huyết",
        q: "Theo chú thích Hình 1.7 (tr. 14), sau khi đi xuyên qua tiểu tĩnh mạch nội mô cao (HEV), tế bào lympho T naïve đi vào phân khu nào bên trong hạch bạch huyết?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.7 (tr. 14)",
        options: [
          "Vào vùng tế bào T của hạch bạch huyết để gặp tế bào trình diện kháng nguyên",
          "Đi thẳng ra mạch bạch huyết ly tâm mà không vào nhu mô hạch",
          "Đi vào tủy đỏ của lách qua tĩnh mạch cửa",
          "Nằm bên ngoài vỏ bao xơ của hạch"
        ],
        answer: 0,
        explain: "Trang 14 (Hình 1.7): 'Tế bào lympho T chưa tiếp xúc kháng nguyên (naïve) di chuyển từ máu qua các tiểu tĩnh mạch nội mô cao vào vùng tế bào T của hạch bạch huyết, nơi các tế bào được kích hoạt bởi các kháng nguyên'."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu đặc điểm Tế bào hành sự",
        q: "Theo Mục 10 (tr. 14) và Hình 1.8 (tr. 15), điều kiện nào là bắt buộc để tế bào lympho chuyển từ trạng thái tuần hoàn tìm kiếm (naïve) sang nhân lên và biệt hóa thành tế bào hành sự di trú tới ổ viêm?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 10 & 11 (tr. 14–15)",
        options: [
          "Phải nhận diện được đúng kháng nguyên đặc hiệu và được hoạt hóa tại cơ quan lympho ngoại biên",
          "Phải được tiêm thuốc ức chế miễn dịch liều cao",
          "Phải chờ đến ngày thứ 14 sau khi quá trình apoptosis kết thúc",
          "Phải rời khỏi máu vào hạch bằng mạch bạch huyết ly tâm"
        ],
        answer: 0,
        explain: "Trang 14: 'Tế bào lympho trưởng thành thường xuyên di chuyển giữa máu và các cơ quan lympho ngoại biên để tìm gặp kháng nguyên đặc hiệu. Khi được hoạt hóa bởi kháng nguyên đặc hiệu, các tế bào này sẽ nhân lên và biệt hóa thành tế bào hành sự'."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng sinh học phân tử",
        q: "Một thuốc thử nghiệm ức chế đặc hiệu các chemokine và phân tử kết dính trên bề mặt nội mô của tiểu tĩnh mạch nội mô cao (HEV) trong hạch bạch huyết. Dựa vào Hình 1.7, hậu quả miễn dịch học trực tiếp nhất của thuốc này là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.7 (tr. 14)",
        options: [
          "Ngăn cản tế bào lympho T naïve rời máu đi vào vùng T của hạch bạch huyết, làm T naïve không gặp được APC trình diện kháng nguyên tại hạch",
          "Ức chế tủy xương không tạo ra được tế bào đầu dòng lympho nữa",
          "Làm cho tương bào trong tủy xương tiết ra kháng thể IgE ồ ạt",
          "Ngăn chặn quá trình thực bào của đại thực bào ngay trên bề mặt biểu bì da"
        ],
        answer: 0,
        explain: "Hình 1.7 (tr. 14): Chemokine và các phân tử kết dính liên quan đến sự gắn kết của tế bào T với tế bào nội mô tại HEV giúp T naïve di chuyển từ máu vào vùng T của hạch. Phong bế bước này sẽ cắt đứt đường vào hạch của T naïve."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích lâm sàng hạch sưng",
        q: "Một bệnh nhân bị nhiễm trùng bàn chân nặng nhận thấy các hạch bạch huyết vùng bẹn cùng bên sưng to lên nhanh chóng sau khoảng 5–7 ngày. Dựa vào Hình 1.7 và Hình 1.8 (tr. 14–15), cơ chế nào giải thích hiện tượng tăng kích thước hạch này?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.7 & 1.8 (tr. 14–15)",
        options: [
          "APC mang kháng nguyên từ chân về hạch bẹn, nơi T naïve (vào qua HEV) và lympho B được hoạt hóa và nhân lên mạnh mẽ thành các clone lớn (đạt đỉnh quanh ngày 7)",
          "Do vi khuẩn lấp đầy lòng mạch bạch huyết ly tâm làm tắc hoàn toàn mạch máu động mạch đùi",
          "Do toàn bộ tế bào nhớ ở người lớn chết bằng hoại tử bên trong hạch bẹn",
          "Do tủy xương di chuyển xuống vùng bẹn để thay thế chức năng của hạch"
        ],
        answer: 0,
        explain: "Kết hợp Mục 8.2, Hình 1.7 và Hình 1.8: Tế bào tua gai từ mô ngoại vi mang kháng nguyên về hạch bạch huyết dẫn lưu vùng đó, kích hoạt giai đoạn 2 (Hoạt hóa tế bào lympho — nhân lên của clone và biệt hóa tăng mạnh quanh ngày 7) làm hạch sưng to phản ứng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận pha thu hẹp",
        q: "Sau khi điều trị khỏi hoàn toàn một đợt nhiễm trùng cấp, các hạch bạch huyết sưng to trước đó dần nhỏ trở lại bình thường sau 2–3 tuần. Theo Hình 1.8, quá trình nào trong 5 pha đáp ứng thích nghi chịu trách nhiệm chính cho sự thu nhỏ sinh lý này?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 11 & Hình 1.8 (tr. 15)",
        options: [
          "Giai đoạn thu hẹp đáp ứng miễn dịch (homeostasis): khi không còn kháng nguyên kích thích, đa số tế bào lympho hành sự chết theo chương trình (Apoptosis)",
          "Tất cả tế bào lympho trong hạch bị thực bào sống bởi tế bào NK",
          "Toàn bộ tế bào lympho biến mất hoàn toàn kể cả tế bào trí nhớ",
          "Hạch bạch huyết chuyển hóa thành mô mỡ dưới da"
        ],
        answer: 0,
        explain: "Trang 15 & Hình 1.8: Ở giai đoạn thu hẹp đáp ứng miễn dịch (homeostasis), khi không còn kích thích bởi kháng nguyên đặc hiệu, các tế bào lympho hành sự sẽ chết theo chương trình (apoptosis), giúp số lượng tế bào thu hẹp trở về ổn định và chỉ giữ lại tế bào trí nhớ."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích hệ thống mạch hạch",
        q: "Trong một mô hình giải phẫu bệnh lý, nếu tắc nghẽn hoàn toàn CÁC MẠCH BẠCH HUYẾT LY TÂM rời khỏi một hạch bạch huyết đang đáp ứng viêm cấp, hệ quả trực tiếp đối với sự bảo vệ mô ngoại biên đang nhiễm trùng là gì (dựa trên Hình 1.7)?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.7 (tr. 14)",
        options: [
          "Các tế bào lympho T hành sự vừa được hoạt hóa trong hạch không thể thoát vào mạch máu để di trú đến mô ngoại biên đang nhiễm trùng",
          "Các tế bào T naïve không còn được sinh ra từ tế bào đầu dòng ở tủy xương",
          "Tế bào T hành sự bị đẩy ngược qua tiểu tĩnh mạch nội mô cao để thành T naïve",
          "Kháng thể IgG do tương bào trong tủy xương tiết ra mất ngay chức năng opson hóa"
        ],
        answer: 0,
        explain: "Hình 1.7 (tr. 14): Con đường thoát ra khỏi hạch để vào hệ tuần hoàn máu và đi tới mô ngoại biên bị nhiễm trùng của tế bào T hoạt hóa chính là Mạch bạch huyết ly tâm."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng thực hành ghép/cắt lách",
        q: "Một bệnh nhân bị vỡ lách do tai nạn giao thông buộc phải phẫu thuật cắt bỏ toàn bộ lách. Dựa vào Mục 9 (tr. 14) về phân loại cơ quan miễn dịch, nhận xét nào ĐÚNG về tác động miễn dịch trên bệnh nhân này?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 9 (tr. 14)",
        options: [
          "Bệnh nhân mất một cơ quan lympho ngoại biên quan trọng (nơi hoạt hóa lympho chống kháng nguyên trong máu), nhưng vẫn còn các cơ quan ngoại biên khác (hạch, MALT) và nguyên vẹn cơ quan trung ương (tủy xương, tuyến ức)",
          "Bệnh nhân mất hoàn toàn nơi sản sinh và trưởng thành của toàn bộ tế bào B và tế bào T",
          "Bệnh nhân hoàn toàn mất khả năng tạo tế bào lympho đầu dòng từ tủy xương",
          "Bệnh nhân không còn bất kỳ hàng rào niêm mạc hay thực bào bẩm sinh nào"
        ],
        answer: 0,
        explain: "Trang 14: Lách là một trong các cơ quan lympho ngoại biên (cùng với hạch bạch huyết và tổ chức lympho dưới da & niêm mạc), không phải cơ quan trung ương sinh trưởng ban đầu (tủy xương, tuyến ức)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ phân biệt đường di trú",
        q: "Một học viên mô tả Hình 1.7 như sau: 'Tế bào T naïve từ mô ngoại biên đi vào mạch bạch huyết ly tâm để tới hạch gặp kháng nguyên, còn T hành sự chui qua HEV vào hạch'. Nhận xét nào chỉnh sửa chính xác sai sót này?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.7 (tr. 14)",
        options: [
          "Ngược hoàn toàn: T naïve đi từ động mạch qua HEV vào vùng T của hạch; sau khi hoạt hóa thành T hành sự mới thoát qua mạch bạch huyết ly tâm vào máu để tới mô ngoại biên bị viêm",
          "T naïve và T hành sự đều đi qua tuyến ức sau khi rời hạch",
          "Mạch bạch huyết ly tâm chỉ dẫn tế bào B từ da vào tủy xương",
          "T hành sự không bao giờ rời khỏi mạch máu ngoại biên"
        ],
        answer: 0,
        explain: "Trang 14 (Hình 1.7): Chiều di chuyển chuẩn là: T naïve (từ máu qua HEV) → Hạch bạch huyết (gặp APC) → T hoạt hóa → Mạch bạch huyết ly tâm → Máu → Mạch máu ngoại biên → Mô ngoại biên nhiễm trùng/viêm."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích hệ quả thiếu apoptosis",
        q: "Nếu một đột biến di truyền làm tế bào lympho hành sự kháng lại tín hiệu chết theo chương trình (Apoptosis) trong giai đoạn 4 (Thu hẹp – Hình 1.8) sau khi đã tiêu diệt xong mầm bệnh, nguy cơ sinh lý bệnh nào dễ xảy ra nhất?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 11 & Hình 1.8 (tr. 15)",
        options: [
          "Mất cân bằng nội môi (homeostasis), tích tụ quá mức tế bào lympho hoạt hóa gây phì đại mô lympho, viêm kéo dài hoặc rối loạn tăng sinh/tự miễn",
          "Không thể hoàn thành giai đoạn nhận diện kháng nguyên ở lần nhiễm đầu tiên",
          "Giảm đột ngột số lượng tế bào trí nhớ xuống dưới 0%",
          "Hàng rào da lập tức mất lớp tế bào biểu mô"
        ],
        answer: 0,
        explain: "Hình 1.8 (tr. 15): Giai đoạn thu hẹp qua Apoptosis là cơ chế cân bằng nội môi (homeostasis) thiết yếu để thu dọn tế bào hành sự sau khi hết kháng nguyên; thất bại cơ chế này gây ứ đọng tế bào hoạt hóa và rối loạn miễn dịch."
      }
    ]
  },

  // ========================================================================
  // BÀI 6: LƯỢC SỬ KHÁM PHÁ NOBEL, TRIỂN VỌNG HỆ THỐNG & TỔNG ÔN ĐỀ CƯƠNG
  // Base: 6 L1, 6 L2, 0 L3 -> Extra: 0 L1, 3 L2, 9 L3
  // ========================================================================
  6: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ 2 khám phá đầu" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu cầu nối lịch sử" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ Paul Ehrlich" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ Allison & Honjo" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu ý nghĩa quá mẫn" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ Ralph Steinman" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu Multi-omics" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ Porter & Edelman" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu Microbiome" },
      { level: 1, ksa: "K", ksaLabel: "K1: Nhớ kháng thể đơn dòng" },
      { level: 2, ksa: "S", ksaLabel: "S2: Phân biệt đích đến cuối" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu Burnet & Talmage" }
    ],
    extra: [
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu hạn chế MHC",
        q: "Trong nhánh C của Hình 1.9 (tr. 16), hai cặp nhà khoa học nào được ghi nhận lần lượt với việc khám phá 'Phức hợp hòa hợp mô chính (MHC)' và 'Hạn chế MHC của miễn dịch tế bào'?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.9C (tr. 16)",
        options: [
          "Snell, Dausset & Benacerraf (MHC); Peter Doherty & Rolf Zinkernagel (Hạn chế của miễn dịch tế bào)",
          "Metchnikoff & Behring (MHC); Landsteiner & Fagraeus (Hạn chế MHC)",
          "Milstein & Köhler (MHC); Allison & Honjo (Hạn chế MHC)",
          "Pasteur & Jenner (MHC); Tonegawa & Cooper (Hạn chế MHC)"
        ],
        answer: 0,
        explain: "Hình 1.9C (tr. 16): George D. Snell, Jean Dausset và Baruj Benacerraf với Major histocompatibility complex (MHC); Peter Doherty và Rolf Zinkernagel với Restriction of cellular immunity."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu miễn dịch bẩm sinh phân tử",
        q: "Ba nhà khoa học nào ở Hình 1.9C (tr. 16) đặt nền móng cho thụ thể nhận diện mẫu (PRR) và cơ sở phân tử của miễn dịch bẩm sinh?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.9C (tr. 16)",
        options: [
          "Charles Janeway (Pattern recognition receptors), Jules Hoffmann và Bruce Beutler (Molecular basis of innate immunity)",
          "Paul Ehrlich, Emil von Behring và Shibasaburo Kitasato",
          "Astrid Fagraeus, Rodney Porter và Gerald Edelman",
          "James L. Gowans, Jacques Miller và Peter Medawar"
        ],
        answer: 0,
        explain: "Hình 1.9C (tr. 16): Charles Janeway (Pattern recognition receptors), Jules Hoffmann và Bruce Beutler (Molecular basis of innate immunity) mở ra kỷ nguyên hiểu cơ chế phân tử miễn dịch bẩm sinh."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu đóng góp T & dung nạp",
        q: "Theo Hình 1.9C (tr. 16), công trình của Jacques Miller, James L. Gowans và Peter Brian Medawar gắn liền với những phát hiện cốt lõi nào?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.9C (tr. 16)",
        options: [
          "Medawar: Dung nạp miễn dịch thu được; Gowans: Tái tuần hoàn lympho; Jacques Miller: Tế bào lympho T (và vai trò tuyến ức)",
          "Medawar: Nhóm máu ABO; Gowans: Kháng thể đơn dòng; Miller: Tế bào mast",
          "Medawar: Bổ thể; Gowans: Tế bào tua gai; Miller: Điểm kiểm soát ung thư",
          "Cả ba đều chỉ nghiên cứu cấu trúc chuỗi nhẹ kháng thể Ig"
        ],
        answer: 0,
        explain: "Hình 1.9C (tr. 16): Peter Brian Medawar (Acquired immune tolerance), James L. Gowans (Lymphocyte recirculation), Jacques Miller (T lymphocytes)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích khái niệm in dấu mô",
        q: "Tại sao tài liệu (tr. 17) nhấn mạnh: 'Các tế bào miễn dịch được in dấu bởi cơ quan cư trú của chúng để điều chỉnh theo các nhu cầu đặc biệt của từng khu vực'?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 12 (tr. 17)",
        options: [
          "Vì hệ miễn dịch là một cơ quan phân tán tích hợp toàn thân nhưng thích ứng đặc thù theo từng vi môi trường mô; rối loạn phản ứng miễn dịch khu vực là nguyên nhân gây ra nhiều bệnh cụ thể của từng cơ quan",
          "Vì tế bào miễn dịch chỉ tồn tại duy nhất ở tủy xương chứ không có ở các cơ quan khác",
          "Vì mỗi cơ quan đều tự sản xuất một loại kháng thể không liên quan đến lympho B",
          "Vì các tế bào lympho ở ruột không bao giờ chịu ảnh hưởng của hệ vi sinh vật (microbiome)"
        ],
        answer: 0,
        explain: "Trang 17: Hệ thống miễn dịch ngày càng được xem là cơ quan rộng lớn kết nối khắp cơ thể; tế bào miễn dịch được in dấu bởi cơ quan cư trú và gắn chặt với hệ vi sinh vật, nên rối loạn phản ứng miễn dịch khu vực gây nhiều bệnh đặc thù của từng cơ quan."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Biện luận lịch sử tách B - T",
        q: "Trong Hình 1.9B (tr. 16), những khám phá của Astrid Fagraeus, Max Cooper và Susumu Tonegawa đã hoàn chỉnh bức tranh nào về miễn dịch dịch thể?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.9B (tr. 16)",
        options: [
          "Xác định tương bào là tế bào sản xuất kháng thể (Fagraeus), phân tách rành mạch dòng tế bào B (Cooper) và giải mã cơ chế tái tổ hợp gen tạo ra sự đa dạng khổng lồ của kháng thể (Tonegawa)",
          "Xác định tế bào T là nguồn gốc duy nhất sản xuất bổ thể trong gan",
          "Chứng minh kháng thể chỉ được tổng hợp sau khi vi khuẩn đi vào nhân tế bào chủ",
          "Phát minh ra vaccine đậu bò phòng bệnh đậu mùa"
        ],
        answer: 0,
        explain: "Hình 1.9B (tr. 16): Astrid Fagraeus (Antibody production by plasma cells), Max Cooper (B lymphocytes), Susumu Tonegawa (Recombination — tái tổ hợp gen giải thích cơ sở di truyền cho hàng triệu đặc hiệu kháng thể)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Liên hệ thực hành lâm sàng",
        q: "Một bệnh nhân ung thư hắc tố ác tính giai đoạn tiến xa được điều trị bằng kháng thể đơn dòng ức chế điểm kiểm soát miễn dịch (checkpoint blockade). Liệu pháp này thực chất phối hợp hai thành tựu lớn nào trong Hình 1.9?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Hình 1.9B & 1.9C (tr. 16)",
        options: [
          "Công nghệ tạo kháng thể đơn dòng (Milstein & Köhler, Hình 1.9B) kết hợp với cơ chế phong bế điểm kiểm soát tế bào T điều trị ung thư (James Allison & Tasuku Honjo, Hình 1.9C)",
          "Huyết thanh ngựa chống uốn ván (Kitasato) kết hợp với phản ứng ngưng kết nhóm máu (Landsteiner)",
          "Thuyết sốc phản vệ (Richet) kết hợp với thuốc ức chế miễn dịch chống thải ghép",
          "Tái tổ hợp gen kháng thể (Tonegawa) kết hợp với xóa sổ đậu mùa (Jenner)"
        ],
        answer: 0,
        explain: "Trang 2, 6 & Hình 1.9B–C (tr. 16): Các thuốc điểm kiểm soát ung thư là kháng thể đơn dòng (thành tựu Milstein & Köhler) nhắm vào các chốt kiểm soát điều hòa hoạt động tế bào T (thành tựu James Allison & Tasuku Honjo)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Tổng hợp câu hỏi bẫy",
        q: "Ghép cặp ĐÚNG hoàn toàn tất cả 4 yếu tố: (1) VSV ngoại bào; (2) VSV sống trong túi thực bào của đại thực bào; (3) Virus trong bào chất TB biểu mô; (4) Tương bào:",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Tóm tắt (tr. 18) & Hình 1.2 (tr. 5)",
        options: [
          "(1) Kháng thể trung hòa & thải trừ; (2) Th tiết cytokine hoạt hóa đại thực bào; (3) Tc/CTL giết trực tiếp tế bào nhiễm; (4) Ở lại cơ quan lympho ngoại biên và tủy xương để sản xuất kháng thể",
          "(1) CTL giết trực tiếp; (2) Kháng thể trung hòa; (3) Th tiết cytokine; (4) Di chuyển vào ổ áp-xe ở da để thực bào",
          "(1) Th; (2) Tương bào; (3) Treg; (4) Ở lại tuyến ức suốt đời",
          "(1) Bổ thể đơn độc; (2) Kháng thể; (3) FDC; (4) Chết hết trong 12 giờ đầu"
        ],
        answer: 0,
        explain: "Tổng hợp phần Tóm tắt (tr. 17–18) & Hình 1.2 (tr. 5): Kháng thể thải trừ VSV ngoại bào & độc tố; Th tiết cytokine hoạt hóa thực bào diệt VSV trong túi thực bào; CTL giết tế bào nhiễm có VSV trong bào chất; tương bào ở lại cơ quan lympho ngoại biên & tủy xương để sản xuất kháng thể."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Vận dụng câu tổng hợp APC",
        q: "Tổng hợp so sánh giữa hai phát biểu sau từ phần Tóm tắt (tr. 18): Phát biểu I: 'Tế bào lympho B nhận diện kháng nguyên nhờ receptor bề mặt (không cần APC)'. Phát biểu II: 'Tế bào lympho T chỉ nhận diện kháng nguyên trình diện trên tế bào trình diện kháng nguyên (APC)'. Kết luận đúng:",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Tóm tắt (tr. 18) & tr. 13",
        options: [
          "Cả hai phát biểu I và II đều ĐÚNG hoàn toàn theo giáo trình",
          "Phát biểu I sai, phát biểu II đúng",
          "Phát biểu I đúng, phát biểu II sai",
          "Cả hai phát biểu I và II đều sai"
        ],
        answer: 0,
        explain: "Trang 13 & 18: 'Tế bào lympho B nhận diện kháng nguyên nhờ vào receptor trên bề mặt tế bào (có thể nhận diện trực tiếp kháng nguyên vi khuẩn mà không cần APC), sau khi hoạt hóa chuyển thành tương bào sản xuất kháng thể đặc hiệu. Tế bào lympho T nhận diện kháng nguyên được trình diện trên các tế bào trình diện kháng nguyên (APC)'."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Phân tích tương lai đa ô-mic",
        q: "Theo phần Triển vọng tương lai (tr. 17), đối tượng bệnh nhân nào sẽ được hưởng lợi lớn nhất từ cách tiếp cận sinh học hệ thống và đa ô-mic (multi-omics) để tạo ra các khái niệm phòng ngừa và điều trị mới?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 12 (tr. 17)",
        options: [
          "Những bệnh nhân mắc các bệnh KHÔNG đáp ứng được với các chiến lược can thiệp hiện tại do hệ miễn dịch bị rối loạn hoặc bị suy yếu",
          "Chỉ những bệnh nhân đã tiêm đủ vaccine phòng bệnh đậu mùa",
          "Chỉ những cá nhân không có tế bào hồng cầu và tiểu cầu",
          "Chỉ những trường hợp rắn cắn đã có huyết thanh đặc hiệu truyền thống"
        ],
        answer: 0,
        explain: "Trang 17: 'Phương pháp tiếp cận sinh học hệ thống này sẽ cung cấp một góc nhìn toàn diện hơn nhiều về miễn dịch học, từ đó tạo ra các khái niệm mới để phòng ngừa và điều trị các bệnh không đáp ứng được các chiến lược can thiệp hiện tại do hệ miễn dịch bị rối loạn hoặc bị suy yếu'."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ phân tích tài liệu",
        q: "Khi ôn tập môn Sinh lý bệnh – Miễn dịch theo Đề cương Cao học KHYS YDS 2026, việc kết hợp đọc hai tài liệu tham khảo chính thức cuối bài 1 (Giáo trình Miễn dịch học ĐHY Hà Nội 2022 và Abbas Basic Immunology 7th ed 2024) giúp ích trực tiếp gì cho học viên?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Tài liệu tham khảo (tr. 19)",
        options: [
          "Củng cố hệ thống hình ảnh nguyên lý kinh điển (từ Abbas) và chuẩn thuật ngữ tiếng Việt về miễn dịch bẩm sinh – thích nghi, chọn lọc clone, cấu trúc cơ quan và 5 pha đáp ứng",
          "Thay thế toàn bộ kiến thức miễn dịch học bằng giải phẫu đại thể cơ xương khớp",
          "Chỉ để tìm hiểu về các loài ký sinh trùng đường ruột",
          "Chứng minh rằng đáp ứng miễn dịch thích nghi không liên quan đến miễn dịch bẩm sinh"
        ],
        answer: 0,
        explain: "Trang 19 liệt kê 2 tài liệu tham khảo gốc của Bài 1: Bộ môn Sinh lý bệnh – Miễn dịch ĐHY Hà Nội (2022, Ch. I) và Abbas, Lichtman & Pillai - Basic Immunology 7th ed (2024, Ch. 1, pp. 1–22), nguồn gốc của hệ thống sơ đồ Hình 1.1–1.8."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Tổng hợp câu lượng giá lâm sàng",
        q: "Một trẻ bị nhiễm virus sởi lần đầu và khỏi bệnh; 10 năm sau trẻ tiếp xúc lại với bệnh nhân sởi nhưng không phát bệnh. Phối hợp đầy đủ các cơ chế giải thích theo Bài 1 Đại cương Miễn dịch học là:",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 4, 5, 6 & 11 (tr. 4–15)",
        options: [
          "Lần đầu tạo miễn dịch chủ động (đáp ứng nguyên phát) sinh tương bào (một số về tủy xương) và tế bào B, T trí nhớ sống lâu năm; khi tái tiếp xúc, tế bào trí nhớ tạo đáp ứng thứ phát cực nhanh (2–7 ngày) bằng cả kháng thể trung hòa virus ngoại bào lẫn Tc diệt tế bào nhiễm",
          "Do trẻ nhận miễn dịch thụ động từ huyết thanh mẹ kéo dài suốt 10 năm không suy giảm",
          "Do virus sởi bị loại trừ hoàn toàn khỏi nền văn minh nhân loại giống bệnh đậu mùa",
          "Do tế bào mast và hàng rào da tự biến đổi thành tế bào B trí nhớ"
        ],
        answer: 0,
        explain: "Tổng hợp Bài 1: Nhiễm bệnh lần đầu tạo miễn dịch chủ động và tế bào trí nhớ sống nhiều năm (tăng tỷ lệ T nhớ ở người lớn), giúp lần tái tiếp xúc kích hoạt đáp ứng thứ phát cực nhanh (2–7 ngày) phối hợp dịch thể (trung hòa virus tự do) và tế bào (Tc diệt tế bào nhiễm)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Thái độ tổng ôn đề cương",
        q: "Từ chuỗi lịch sử xuyên suốt Hình 1.9 (từ Jenner, Metchnikoff, Behring, Ehrlich → Burnet, Tonegawa → Janeway, Steinman → Allison, Honjo), bài học phương pháp luận quan trọng nhất cho học viên cao học Khoa học Y sinh là gì?",
        source: "Miễn dịch Đại cương YDS 2025 – Bài 1, Mục 12 & Hình 1.9 (tr. 15–17)",
        options: [
          "Nghiên cứu cơ bản về cơ chế phân tử – tế bào (thực bào, cấu trúc kháng thể, chọn lọc clone, MHC, PRR, điểm kiểm soát) luôn là nền tảng chuyển hóa trực tiếp thành các liệu pháp chẩn đoán và điều trị đột phá (vaccine, kháng thể đơn dòng, miễn dịch ung thư)",
          "Miễn dịch học đã hoàn chỉnh tuyệt đối, không còn thách thức nào trong nghiên cứu cơ bản hay ứng dụng",
          "Miễn dịch bẩm sinh và miễn dịch thích nghi hoạt động tách biệt hoàn toàn nên chỉ cần nghiên cứu một nhánh",
          "Chỉ cần tập trung vào tế bào B mà không cần quan tâm đến tế bào T hay tế bào tua gai"
        ],
        answer: 0,
        explain: "Trang 15–17: Lược sử Hình 1.9 chứng minh mọi liệu pháp lâm sàng hiện đại (vaccine xóa sổ đậu mùa, kháng thể đơn dòng, liệu pháp điểm kiểm soát ung thư) đều bắt nguồn từ nghiên cứu cơ bản; và vẫn còn nhiều thách thức cần tiếp cận đa ô-mic và sinh học hệ thống để làm sáng tỏ thêm."
      }
    ]
  }
};
