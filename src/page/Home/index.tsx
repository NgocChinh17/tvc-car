// 'use client';
import { Button, Card, Col, Divider, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import MenuButton from "../MenuButton";
import ModalRequest from "@/components/ModalRequest";
import { imageList } from "@/components/data/cars";

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  return (
    <div className="container header-page">
      <MenuButton />
      <div>
        <Divider
          orientation="center"
          style={{ borderColor: "#7cb305", fontWeight: "bold" }}
        >
          CÁC DÒNG XE Ô TÔ HYUNDAI
        </Divider>
      </div>

      <div style={{ marginBlock: 20 }}>
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
                      Giá từ: {item.price.toLocaleString("vi-VN")} VNĐ
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
                      style={{ fontSize: 10, fontWeight: 500}}
                      onClick={() => setShowModal(true)}
                    >
                      BÁO GIÁ LĂN BÁNH
                    </Button>
                    <Button
                      type="primary"
                      size="small"
                      style={{ fontSize: 10, fontWeight: 500}}
                      onClick={() => router.push(`/car/${item.id}`)}
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
