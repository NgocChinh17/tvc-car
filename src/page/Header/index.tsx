"use client";
import React, { useState, useEffect } from "react";
import { Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./style.scss";

import Logo from "@assets/image/Logo-TC-MOTOR.HYUNDAI-final-Copy.png";

const listMenu = [
  { label: "TRANG CHỦ", key: "/", path: "/" },
  { label: "GIỚI THIỆU", key: "/introduce", path: "/introduce" },
  { label: "BẢNG GIÁ", key: "/priceList", path: "/priceList" },
  { label: "ĐĂNG KÝ LÁI XE THỬ", key: "/driveCar", path: "/driveCar" },
];

export const HeaderPage = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <div className="header-page">
      <div className="header">
        <div className="container">
          <div className="menu-box">
            <Link href="/">
              <Image className="image-logo" src={Logo} alt="Hyundai Logo" />
            </Link>

            <div className="title-logo pc">Hyundai Phạm Hùng</div>

            {/* chỉ hiển thị khi mobile */}
            {isMobile && (
              <Button
                className="menu-mobile-button mb"
                type="text"
                icon={<MenuOutlined style={{ fontSize: "24px" }} />}
                onClick={showDrawer}
              />
            )}
          </div>

          <div className="menu-list pc">
            <Menu
              className="render-menu"
              mode="horizontal"
              selectedKeys={[pathname]}
              items={listMenu.map((item) => ({
                key: item.key,
                label: <Link href={item.path}>{item.label}</Link>,
              }))}
            />
          </div>

          {/* Drawer chỉ hiển thị nếu là mobile */}
          {isMobile && (
            <Drawer
              width={250}
              title="Menu"
              placement="right"
              onClose={onClose}
              open={open}
            >
              <Menu
                mode="vertical"
                selectedKeys={[pathname]}
                items={listMenu.map((item) => ({
                  key: item.key,
                  label: <Link href={item.path}>{item.label}</Link>,
                }))}
                onClick={onClose}
              />
            </Drawer>
          )}
        </div>
      </div>
    </div>
  );
};
