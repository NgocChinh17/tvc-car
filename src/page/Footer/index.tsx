import { WhyHyundai } from "@/components/WhyHyundai";
import React from "react";

import './style.scss'

const footerData = [
  {
    title: "HYUNDAI PHẠM HÙNG ĐÀ NẴNG",
    content: [
      "TRƯỚC KHI ĐẾN SHOWROOM HYUNDAI ĐÀ NẴNG HÃY GỌI HOTLINE KIỂM TRA LẠI VÀ MÀU XE CÓ SẴN TRƯNG BÀY CHƯA ?",
      "Địa Chỉ: 286 Phạm Hùng, Xã Hòa Phước, Huyện Hòa Vang, TP Đà Nẵng",
    ],
    email: "Email: truongluu707@gmail.com",
    hotline: "Số Điện Thoại: 0904570323",
  },
];

export const FooterPage = () => {
  return (
    <>
      <WhyHyundai />
      <div className="footer-wrapper">
        <div className="container">
          <div className="title-footer">
            <h2 style={{ marginBottom: 10 }}>HYUNDAI PHẠM HÙNG</h2>
            <h2>ƯU ĐÃ KHỦNG - QUÀ GIÁ TRỊ</h2>
          </div>

          <div className="content-footer">
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

          <p className="bottom-footer">
            © 2025 Hyundai Phạm Hùng Đà Nẵng
          </p>
        </div>
      </div>
    </>
  );
};
