import { Button, Card, Col, Divider, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import Image from "next/image";

import car1 from "@assets/image/car/0006_hyundai-creta-2022.jpg";
import car2 from "@assets/image/car/huyndai-elantra-1022_0005_elantra-2022.png";
import car3 from "@assets/image/car/huyndai-grand-i10-hb-new-1.jpg";
import car4 from "@assets/image/car/huyndai-grand-i10-sedan-new-1.jpg";
import car5 from "@assets/image/car/huyndai-Stargazer-1022b-5.png";
import car6 from "@assets/image/car/huyndai-tucson-2022_0008_Tucson-2022-1.jpg";
import car7 from "@assets/image/car/hyundai-accent-240530-mx02a.jpg";
import car8 from "@assets/image/car/hyundai-custin-c-230915.jpg";
import car9 from "@assets/image/car/hyundai-ioniq5-01.jpg";
import car10 from "@assets/image/car/hyundai-palisade-c-230916_0014_cb3.jpg";
import car11 from "@assets/image/car/hyundai-santa-fe-2025.png";
import car12 from "@assets/image/car/venue-xanh-avt.png";
import MenuButton from "../MenuButton";
import ModalRequest from "@/components/ModalRequest";

const imageList = [
  {
    id: 1,
    title: "Hyundai Creta",
    url: car1,
    width: 100,
    height: 200,
    price: <span>Giá từ: 589,000,000 VNĐ</span>,
  },
  {
    id: 2,
    title: "Hyundai Elantra",
    url: car2,
    width: 100,
    height: 200,
    price: <span>Giá từ: 554,000,000 VNĐ</span>,
  },
  {
    id: 3,
    title: "Hyundai New Grand i10 Hatchback",
    url: car3,
    width: 100,
    height: 200,
    price: <span>Giá từ: 339,000,000 VNĐ</span>,  },
  {
    id: 4,
    title: "Hyundai New Grand i10 Sedan",
    url: car4,
    width: 100,
    height: 200,
    price: <span>Giá từ: 358,000,000 VNĐ</span>,  },
  {
    id: 5,
    title: "Hyundai Stargazer",
    url: car5,
    width: 100,
    height: 200,
    price: <span>Giá từ: 575,000,000 VNĐ</span>,
  },
  {
    id: 6,
    title: "Hyundai Tucson",
    url: car6,
    width: 100,
    height: 200,
    price: <span>Giá từ: 769,000,000 VNĐ</span>,
  },
  {
    id: 7,
    title: "Hyundai Accent",
    url: car7,
    width: 100,
    height: 200,
    price: <span>Giá từ: 439,000,000 VNĐ</span>,
  },
  {
    id: 8,
    title: "Hyundai Custin",
    url: car8,
    width: 100,
    height: 200,
    price: <span>Giá từ: 800,000,000 VNĐ</span>,
  },
  {
    id: 9,
    title: "Hyundai IONIQ 5",
    url: car9,
    width: 100,
    height: 200,
    price: <span>Giá từ: 1,275,000,000 VNĐ</span>,
  },
  {
    id: 10,
    title: "Hyundai Palisade",
    url: car10,
    width: 100,
    height: 200,
    price: <span>Giá từ: 1,449,000,000 VNĐ</span>,
  },
  {
    id: 11,
    title: "Hyundai Santafe",
    url: car11,
    width: 100,
    height: 200,
    price: <span>Giá từ: 1,069,000,000 VNĐ</span>,
  },
  {
    id: 12,
    title: "Hyundai Venue",
    url: car12,
    width: 100,
    height: 200,
    price: <span>Giá từ: 529,000,000 VNĐ</span>,
  },
];

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="container">
        <MenuButton/>
      <div>
        <Divider
          orientation="center"
          style={{ borderColor: "#7cb305", fontWeight: "bold" }}
        >
          CÁC DÒNG XE Ô TÔ HYUNDAI
        </Divider>
      </div>

      <div style={{marginBlock: 20}}>
        <Row gutter={[16, 16]}>
          {imageList.map((item) => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  <Image
                    alt={item.title}
                    src={item.url}
                    width={800}
                    height={600}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                    }}
                  />
                }
              >
                <div style={{ textAlign: "center" }}>
                  <Meta title={item.title} />
                  {item.price && (
                    <div
                      style={{
                        marginTop: 8,
                        fontWeight: "bold",
                        color: "#cf1322",
                      }}
                    >
                      {item.price}
                    </div>
                  )}
                  
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 10,
                    }}
                  >
                    <Button
                      type="primary"
                      danger
                      size="small"
                      style={{
                        fontSize: 12,
                        padding: "2px 8px",
                        height: "auto",
                      }}
                      onClick={() => setShowModal(true)}
                    >
                      BÁO GIÁ LĂN BÁNH
                    </Button>
                    <Button
                      type="primary"
                      size="small"
                      style={{
                        fontSize: 12,
                        padding: "2px 8px",
                        height: "auto",
                      }}
                    >
                      XEM CHI TIẾT
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
          {showModal && <ModalRequest onClose={() => setShowModal(false)} />}
        </Row>
      </div>
    </div>
  );
};
