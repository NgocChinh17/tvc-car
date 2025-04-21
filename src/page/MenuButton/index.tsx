'use client';
import { Button, Col, Row } from 'antd';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CalculatorOutlined,
  CarOutlined,
  DollarOutlined,
} from '@ant-design/icons';

import './style.scss';
import imageButtonMenu from '@assets/image/imageButtonmenu.jpg';
import ModalRequest from '@/components/ModalRequest';

const MenuButton = () => {
  const [showModal, setShowModal] = useState(false);

  const listButton = [
    {
      id: 1,
      icon: <DollarOutlined />,
      title: 'Mua Xe Trả Góp',
      path: '#',
      type: 'primary' as const,
      danger: true,
      onclick: () => setShowModal(true),
    },
    {
      id: 2,
      icon: <CarOutlined />,
      title: 'Đăng Ký Lái Thử',
      path: '/driveCar',
      type: 'primary' as const,
    },
    {
      id: 3,
      icon: <CalculatorOutlined />,
      title: 'Tính Phí Lăn Bánh',
      path: '#',
      type: 'primary' as const,
      danger: true,
      onclick: () => setShowModal(true),
    },
  ];

  const renderButtons = () =>
    listButton.map((item) => (
      <Col key={item.id} xs={24} sm={12} md={8}>
        {item.onclick ? (
          <Button
            className="menu-button"
            type={item.type}
            danger={item.danger}
            block
            icon={item.icon}
            onClick={item.onclick}
          >
            {item.title}
          </Button>
        ) : (
          <Link href={item.path}>
            <Button
              className="menu-button"
              type={item.type}
              danger={item.danger}
              block
              icon={item.icon}
            >
              {item.title}
            </Button>
          </Link>
        )}
      </Col>
    ));

  return (
    <>
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

      {showModal && <ModalRequest onClose={() => setShowModal(false)} />}
    </>
  );
};

export default MenuButton;
