import { WhyHyundai } from "@/components/WhyHyundai";
import React from "react";

const footerData = [
  {
    title: "HYUNDAI PHẠM HÙNG ĐÀ NẴNG",
    content: [
      "TRƯỚC KHI ĐẾN SHOWROOM HYUNDAI ĐÀ NẴNG HÃY GỌI HOTLINE KIỂM TRA LẠI VÀ MÀU XE CÓ SẴN TRƯNG BÀY CHƯA ?",
      "Địa Chỉ: 286 Phạm Hùng, Xã Hòa Phước, Huyện Hòa Vang, TP Đà Nẵng",
    ],
    email: "Email: truongluu707@gmail.com",
    hotline: "Số Điện Thoại: 0906557408",
  },
];

export const FooterPage = () => {
  return (
    <>
      <WhyHyundai />

      <div
        style={{ paddingBlock: 30, backgroundColor: "#202020", color: "white" }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <h2 style={{ marginBottom: 10 }}>HYUNDAI PHẠM HÙNG</h2>
            <h2>ƯU ĐÃ KHỦNG - QUÀ GIÁ TRỊ</h2>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              lineHeight: 2,
            }}
          >
            {footerData.map((section, index) => (
              <div key={index} style={{ flex: "1 1 45%" }}>
                <p style={{ fontWeight: 400 }}>{section.title}</p>
                {section.content.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
                <p>{section.email}</p>
                <p>{section.hotline}</p>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: 40 }}>
            © 2025 Hyundai Phạm Hùng Đà Nẵng. Hotline: 0906 557 408
          </p>
        </div>
      </div>
    </>
  );
};
