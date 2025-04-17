import React from "react";

const footerData = [
  {
    title: "HYUNDAI PHẠM HÙNG ĐÀ NẴNG",
    content: [
      "TRƯỚC KHI ĐẾN SHOWROOM HYUNDAI ĐÀ NẴNG HÃY GỌI HOTLINE KIỂM TRA LẠI VÀ MÀU XE CÓ SẴN TRƯNG BÀY CHƯA ?",
      "Địa Chỉ: 286 Phạm Hùng, Xã Hòa Phước, Huyện Hòa Vang, TP Đà Nẵng"
    ]
  },
  {
    title: "ĐƯỜNG DÂY NÓNG",
    content: [
      "Kinh doanh/Báo giá: 0932 531 055",
      "Dịch vụ/Bảo dưỡng: 0941.800.545"
    ]
  }
];

export const FooterPage = () => {
  return (
    <div style={{ paddingBlock: 30, backgroundColor: "black", color: "white" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <h2 style={{ marginBottom: 10 }}>HYUNDAI PHẠM HÙNG</h2>
          <h2>ƯU ĐÃ KHỦNG - QUÀ GIÁ TRỊ</h2>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          {footerData.map((section, index) => (
            <div key={index} style={{ flex: "1 1 45%", marginBottom: "20px" }}>
              <p style={{ fontWeight: "bold" }}>{section.title}</p>
              {section.content.map((item, idx) => (
                <p key={idx}>{item}</p>
              ))}
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", marginTop: 40 }}>
          © 2025 Hyundai Phạm Hùng Đà Nẵng. Hotline: 0932 531 055
        </p>
      </div>
    </div>
  );
};
