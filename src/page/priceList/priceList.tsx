"use client";
import React from "react";
import Image from "next/image";
import { Breadcrumb, Button, Space } from "antd";
import { HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import { TitlePriceCar } from "@/components/titlePriceCar";
import { CarPriceTable } from "@/components/TablePriceList";
import type { StaticImageData } from 'next/image';


// Ảnh đại diện tạm thời    
import grandi10 from "@assets/image/car/huyndai-grand-i10-hb-new-1.jpg";
import creta from "@assets/image/car/0006_hyundai-creta-2022.jpg";
import elantra from "@assets/image/car/huyndai-elantra-1022_0005_elantra-2022.png";
import Stargazer from "@assets/image/car/huyndai-Stargazer-1022b-5.png";
import tucson from "@assets/image/car/huyndai-tucson-2022_0008_Tucson-2022-1.jpg";
import accent from "@assets/image/car/hyundai-accent-240530-mx02a.jpg";
import custin from "@assets/image/car/hyundai-custin-c-230915.jpg";
import palisade from "@assets/image/car/hyundai-palisade-c-230916_0014_cb3.jpg";
import santa from "@assets/image/car/hyundai-santa-fe-2025.png";
import venue from "@assets/image/car/venue-xanh-avt.png";

interface DataType {
  key: string;
  name: string;
  price: number;
}

interface CarModel {
  title: string;
  image: StaticImageData;
  tableTitle: string;
  data: DataType[];
  phone: string;
}

const carPriceList: CarModel[] = [
  {
    title: "Bảng giá xe Hyundai i10 tại Phạm Hùng Đà Nẵng",
    image: grandi10,
    tableTitle: "Hyundai Grand i10 2025",
    phone: "0906557408",
    data: [
      { key: "1", name: "Grand I10 1.2AT", price: 435000000 },
      { key: "2", name: "Grand I10 1.2AT STD", price: 405000000 },
      { key: "3", name: "Grand I10 1.2-MT base", price: 360000000 },
      { key: "4", name: "Grand I10 1.2-MT sedan", price: 455000000 },
      { key: "5", name: "Grand I10 1.2 AT STD", price: 425000000 },
      { key: "6", name: "Grand I10 1.2 AT base", price: 380000000 },
    ],
  },
  {
    title: "Bảng giá xe Hyundai Venue tại Phạm Hùng Đà Nẵng",
    image: venue,
    tableTitle: "Hyundai Venue 2025",
    phone: "0906557408",
    data: [
      { key: "1", name: "Venue 1.0 T_GDI - đặt biệt", price: 539000000 },
      { key: "2", name: "Venue 1.0 T-GDI", price: 499000000 },
    ],
  },
  {
    title: "Bảng giá xe Hyundai Accent tại Phạm Hùng Đà Nẵng",
    image: accent,
    tableTitle: "Hyundai Accent 2025",
    phone: "0906557408",
    data: [
      { key: "1", name: "Accent 1.5 AT cao cấp", price: 569000000 },
      { key: "2", name: "Accent 1.5 AT đặt biệt", price: 529000000 },
      { key: "3", name: "Accent 1.5 AT tiêu chuẩn", price: 489000000 },
      { key: "4", name: "Accent 1.5 MT", price: 439000000 },
    ],
  },
  {
    title: "Bảng giá xe Hyundai Elantra tại Phạm Hùng Đà Nẵng",
    image: elantra,
    tableTitle: "Hyundai Elantra 2025",
    phone: "0906557408",
    data: [
      { key: "1", name: "Elantra N Line", price: 769000000 },
      { key: "2", name: "Elantra 2.0 AT", price: 699000000 },
      { key: "3", name: "Elantra 1.6 AT tiêu chuẩn", price: 579000000 },
      { key: "4", name: "Elantra 1.6 AT", price: 639000000 },
    ],
  },
  {
    title: "Bảng giá xe Hyundai Creta tại Phạm Hùng Đà Nẵng",
    image: creta,
    tableTitle: "Hyundai Creta 2025",
    phone: "0906557408",
    data: [
      { key: "1", name: "Creta 1.5 Cao cấp (1 tone)", price: 699000000 },
      { key: "2", name: "Creta 1.5 Đặt biệt", price: 650000000 },
      { key: "3", name: "Creta Tiêu chuẩn", price: 599000000 },
    ],
  },
  {
    title: "Bảng giá xe Hyundai Tucson tại Phạm Hùng Đà Nẵng",
    image: tucson,
    tableTitle: "Hyundai Tucson 2025",
    phone: "0906557408",
    data: [
      { key: "1", name: "New Tucson 1.6 Turbo", price: 979000000 },
      { key: "2", name: "New Tucson 2.0 dầu đặt biệt", price: 989000000 },
      { key: "3", name: "New Tucson 2.0 xăng đặt biệt", price: 859000000 },
      { key: "4", name: "New Tucson 2.0 xăng tiêu chuẩn", price: 769000000 },
    ],
  },
  {
    title: "Bảng giá xe Hyundai Santafe tại Phạm Hùng Đà Nẵng",
    image: santa,
    tableTitle: "Hyundai Santafe 2025",
    phone: "0906557408",
    data: [
      { key: "1", name: "Santafe Exclusive", price: 1069000000 },
      { key: "2", name: "Santafe Prestige", price: 1265000000 },
      { key: "3", name: "Santafe Calligraphy", price: 1315000000 },
      { key: "4", name: "Santafe Turbo Caligraphy", price: 1365000000 },
    ],
  },
  {
    title: "Bảng giá xe Hyundai Custin tại Phạm Hùng Đà Nẵng",
    image: custin,
    tableTitle: "Hyundai Custin 2025",
    phone: "0906557408",
    data: [
      { key: "1", name: "Custin 2.0 Turbo cao cấp", price: 999000000 },
      { key: "2", name: "Custin 1.5 Turbo cao cấp", price: 950000000 },
      { key: "3", name: "Custin đặc biệt", price: 915000000 },
      { key: "4", name: "Custin tiêu chuẩn", price: 820000000 },
    ],
  },
  {
    title: "Bảng giá xe Hyundai Palisade tại Phạm Hùng Đà Nẵng",
    image: palisade,
    tableTitle: "Hyundai Palisade 2025",
    phone: "0906557408",
    data: [
      { key: "1", name: "Palisade Prestige (6 chỗ)", price: 999000000 },
      { key: "2", name: "Palisade Prestige  (7 chỗ)", price: 950000000 },
      { key: "3", name: "Palisade Exclusive  Palisade", price: 915000000 },
      { key: "4", name: "Palisade Exclusive  (7 chỗ)", price: 820000000 },
    ],
  },
  {
    title: "Bảng giá xe Hyundai Stargazer tại Phạm Hùng Đà Nẵng",
    image: Stargazer,
    tableTitle: "Hyundai Stargazer 2025",
    phone: "0906557408",
    data: [
      { key: "1", name: "Stargazer X cao cấp", price: 599000000 },
      { key: "2", name: "Stargazer X", price: 599000000 },
      { key: "3", name: "Stargazer X tiêu chuẩn", price: 489000000 },
    ],
  },
];

const PriceTitle = () => {
  return (
    <div style={{marginBottom: 20}}>
    
    <div className="container">
      <div className="container-header" style={{ marginBlock: 20 }}>
        <Breadcrumb
          items={[
            {
              href: "/",
              title: <HomeOutlined />,
            },
            {
              title: "Bảng Giá",
            },
          ]}
        />
      </div>

      <h3 style={{ textAlign: "center" }}>
        Bảng giá xe Hyundai 2025 tại Hyundai Phạm Hùng
      </h3>

      {carPriceList.map((car, index) => (
        <div key={index}>
          <TitlePriceCar title={car.title} />
          <Space>
            <p style={{ fontSize: 18, fontWeight: 500 }}>
              Anh / Chị gọi để được tư vấn:
            </p>
            <Button type="primary" danger icon={<PhoneOutlined />}
               onClick={() => (window.location.href = `tel:${car.phone}`)}
            >
              {car.phone}
            </Button>
          </Space>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <Image
              src={car.image}
              alt={car.tableTitle}
              layout="responsive"
              width={700}
              height={450}
            />
          </div>
          <CarPriceTable title={car.tableTitle} data={car.data} />
        </div>
      ))}

      <div style={{ fontSize: 18, fontWeight: 500, border: "1px solid #e5e5e5", padding: 20, backgroundColor: "#f5f5f5", lineHeight: 2, borderRadius: 10 }}>
        <p>
          Anh chị muốn được tư vấn thêm về xe Hyundai và khuyến mãi mình mong muốn.
        </p>
        <p>Quý khách vui lòng liên hệ:</p>
        <p>
          Phụ trách bán hàng:
          <span style={{ color: "red", fontWeight: 600 }}>
            Mr. Quang Trường
          </span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default PriceTitle;
