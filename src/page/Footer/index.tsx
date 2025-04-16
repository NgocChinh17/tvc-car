import { Button, Col, Input, Row } from "antd";
import Image from "next/image";
import React from "react";

//image
import footerImage from "@assets/image/iamgefooter.jpg";

export const FooterPage = () => {
  return (
    <>
      <div
        style={{
          marginTop: 30,
          backgroundColor: "black",
          color: "white",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <Row
            gutter={[36, 36]}
            justify="center"
            style={{ maxWidth: "100%", overflowX: "hidden" }}
          >
            <Col xs={24} sm={24} md={16}>
              <div style={{ marginBottom: 20 }}>
                <h2>HYUNDAI PhẠM HÙNG</h2>
                <h2>ƯU ĐÃ KHỦNG - QUÀ GIÁ TRỊ</h2>
              </div>
              <div style={{ width: "100%", height: "auto" }}>
                <Image
                  src={footerImage}
                  alt="footerImage"
                  layout="responsive"
                  width={1200}
                  height={800}
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div>
                <Row>
                  <Col span={12}>
                    <p style={{ fontWeight: "bold" }}>
                      HYUNDAI PHẠM HÙNG ĐÀ NẴNG
                    </p>
                    <p>
                      TRƯỚC KHI ĐẾN SHOWROOM HYUNDAI ĐÀ NẴNG HÃY GỌI HOTLINE
                      KIỂM TRA LẠI VÀ MÀU XE CÓ SẴN TRƯNG BÀY CHƯA ?
                    </p>
                    <p>
                      Địa Chỉ: 286 Phạm Hùng, Xã Hòa Phước, Huyện Hòa Vang, TP
                      Đà Nẵng
                    </p>
                  </Col>
                  <Col span={12}>
                    <p style={{ fontWeight: "bold" }}>ĐƯỜNG DÂY NÓNG</p>
                    <p>Kinh doanh/Báo giá: 0932 531 055 </p>
                    <p>Dịch vụ/Bảo dưỡng: 0941.800.545</p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={24} sm={24} md={6}>
              <h2 style={{ marginBottom: 20 }}>
                ƯU ĐÃI LÊN ĐẾN 180 TRIỆU. ƯU ĐÃI LỚN NHẤT NĂM. ĐĂNG KÝ TƯ VẤN
                NGAY.
              </h2>
              <div style={{ border: "1px dashed red", padding: 10 }}>
                <Input
                  style={{
                    marginBottom: 16,
                    borderColor: "red",
                    fontSize: "16px",
                  }}
                  placeholder="Nhập từ số điện thoại"
                />
                <Button
                  style={{ fontWeight: 600, fontSize: "16px" }}
                  type="primary"
                >
                  NHẬN ƯU ĐÃI
                </Button>
              </div>
            </Col>
          </Row>
          <p style={{ textAlign: "center", margin: "20px 0 20px 0" }}>
            Copyright 2025 © Hyundai Phạm Hùng Đà Nẵng. Hotline : 0932 531 055
          </p>
        </div>
      </div>
    </>
  );
};
