import React from "react";
import { Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Image from "next/image";

import Link from "next/link";
import "./style.scss";

// logo
import Logo from "@assets/image/Logo-TC-MOTOR.HYUNDAI-final-Copy.png";

const listMenu = [
  { label: "TRANG CHỦ", key: "1", path: "/Home", className: "home-menu-item" },
  { label: "GIỚI THIỆU", key: "2", path: "#" },
  {
    label: (
      <span>
        SẢN PHẨM <DownOutlined />
      </span>
    ),
    key: "3",
    children: [
      { key: "9", label: "Hyundai New Grand I10 Hatchback", path: "#" },
      { key: "10", label: "Hyundai New Grand I10 Sedan", path: "#" },
      { key: "11", label: "Hyundai Accent", path: "#" },
      { key: "12", label: "Hyundai Elantra", path: "#" },
      { key: "13", label: "Hyundai Stargazer", path: "#" },
      { key: "14", label: "Hyundai Creta", path: "#" },
      { key: "15", label: "Hyundai Tucson", path: "#" },
      { key: "16", label: "Hyundai Venue", path: "#" },
      { key: "17", label: "Hyundai Santafe 2025", path: "#" },
      { key: "18", label: "Hyundai Custin", path: "#" },
    ],
  },
  { label: "TRẢ GÓP", key: "4", path: "#" },
  { label: "BẢNG GIÁ", key: "5", path: "#" },
  { label: "TIN TỨC", key: "6", path: "#" },
  { label: "LIÊN HỆ", key: "7", path: "#" },
];

export const HeaderPage = () => {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBlock: 10,
        }}
      >
        <Link href="/">
          <Image width={300} style={{ height: "auto" }} src={Logo} alt="abc" />
        </Link>
        <div style={{ fontSize: 30, fontWeight: "500" }}>Hyundai Phạm Hùng</div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
          fontSize: 18,
          fontWeight: "500",
        }}
      >
        <Menu
          style={{ width: 680 }}
          mode="horizontal"
          items={listMenu}
        />
      </div>
    </div>
  );
};
