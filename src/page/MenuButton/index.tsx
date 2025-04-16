import { Button, Col, Row } from "antd";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CalculatorOutlined,
  CarOutlined,
  DollarOutlined,
} from "@ant-design/icons";

import "./style.scss";

import imageButtonMenu from "@assets/image/imageButtonmenu.jpg";

const listButton = [
  {
    id: 1,
    icon: <DollarOutlined />,
    title: "Mua Xe Trả Góp",
    path: "#",
    type: "primary" as "primary" | "default" | "link" | "text" | "dashed",
  },
  {
    id: 2,
    icon: <CarOutlined />,
    title: "Đăng Ký Lái Thử",
    path: "#",
    type: "primary" as "primary" | "default" | "link" | "text" | "dashed",
    danger: true
  },
  {
    id: 3,
    icon: <CalculatorOutlined />,
    title: "Tính Phí Lăn Bánh",
    path: "#",
    type: "primary" as "primary" | "default" | "link" | "text" | "dashed",
  },
];

export const MenuButton = () => {
  const renderButtons = () =>
    listButton.map((item) => (
      <Col key={item.id} xs={24} sm={12} md={8}>
        <Link href={item.path}>
          <Button className="menu-button" type={item.type} danger={item.danger} block icon={item.icon}>
            {item.title}
          </Button>
        </Link>
      </Col>
    ));

  return (
    <Row gutter={[16, 16]} className="menu-button-wrapper">
      {renderButtons()}

      <Col xs={24} sm={24} md={24} className="image-wrapper">
        <Image
          src={imageButtonMenu}
          alt="imageButtonMenu"
          width={1200}
          height={400}
          style={{ width: '100%', height: 'auto' }}
        />
      </Col>
    </Row>
  );
};
