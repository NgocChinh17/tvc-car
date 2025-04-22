"use client";
import React from "react";
import Image from "next/image";
import { Breadcrumb, Button, Space } from "antd";
import { HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import { TitlePriceCar } from "@/components/titlePriceCar";
import { CarPriceTable } from "@/components/TablePriceList";
import { carPriceList } from "@/components/data/cars";

import "./style.scss";

const PriceTitle = () => {
  return (
    <div style={{ marginBottom: 20 }}>
      <div className="container">
        <div className="container-header">
          <Breadcrumb
            className="breadcrumb"
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
        <div className="price-wrapper">
          <h3 className="title-header-price">
            Bảng giá xe Hyundai 2025 tại Hyundai Phạm Hùng
          </h3>

          {carPriceList.map((car, index) => (
            <div key={index}>
              <TitlePriceCar title={car.title} />
              <Space>
                <div className="textAndNumber-advise">
                  Anh / Chị gọi để được tư vấn:
                </div>
                <Button
                  className="button-call"
                  size="small"
                  type="primary"
                  danger
                  icon={<PhoneOutlined />}
                  onClick={() => (window.location.href = `tel:${car.phone}`)}
                >
                  {car.phone}
                </Button>
              </Space>
              <div className="car-image">
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

          <div className="advise-bottom-wrapper">
            <p>
              Anh chị muốn được tư vấn thêm về xe Hyundai và khuyến mãi mình
              mong muốn.
            </p>
            <p>Quý khách vui lòng liên hệ:</p>
            <p>
              Phụ trách bán hàng:
              <span className="title-advise-person">
                Mr. Quang Trường
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceTitle;
