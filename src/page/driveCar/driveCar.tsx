import React from "react";
import { Row, Col, Breadcrumb } from "antd";
import Image from "next/image";
// import contactImg from "@/assets/avatar/avatar.jpg";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";

import "./style.scss";

const DriveCar = () => {
  const driveBenefits = [
    "Được lái thử hoàn toàn miễn phí",
    "Được tư vấn giới thiệu các tính năng trên xe",
    "Được nhận giá ưu đãi khi mua xe",
    "Được tư vấn bán hàng tiếp đón nồng nhiệt và thưởng thức các loại thức uống miễn phí tại Showroom Hyundai Đà Nẵng",
  ];

  const contactNotes = [
    "Chúng tôi luôn cam kết mang lại mức giá ưu đãi nhất cho quý khách với thời gian giao xe nhanh nhất.",
    "Chúng tôi luôn cập nhật sớm nhất các chương trình khuyến mãi của hãng và đại lý.",
    "Hỗ trợ mua xe trả góp lãi suất thấp & tối ưu tài chính.",
  ];

  return (
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
              title: "Đăng ký lái xe thử",
            },
          ]}
        />
      </div>
      <div className="drive-wrapper">
        <Row gutter={[24, 24]}>
          {/* Left Column */}
          <Col xs={24} md={16}>
            <div className="left-container">
              <p className="content-header-drive">
                Lái thử xe là một bước rất quan trọng trong việc quyết định chọn
                mua xe khi bạn tham gia lái thử tại{" "}
                <Link href={"/"}>Hyundai Đà Nẵng</Link> chúng tôi bạn sẽ nhận
                được những ưu đãi như:
              </p>
              <div className="list-content-drive">
                <ol>
                  {driveBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ol>
              </div>
            </div>
          </Col>

          {/* Right Column */}
          <Col xs={24} md={8}>
            <div className="right-container">
              <Image
                src={"/src/assets/avatar/avatar.png"}
                alt="Mr.Quang Trường"
                width={120}
                height={120}
                style={{ borderRadius: "50%" }}
              />
              <p style={{ color: "#0073b7", margin: "10px 0 0" }}>
                Mr.Quang Trường{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  0904 570 323
                </span>
              </p>
              <p style={{ fontWeight: "bold", marginBottom: "15px" }}>
                Phụ trách kinh doanh
              </p>
              <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                {contactNotes.map((note, index) => (
                  <li key={index}>⭐ {note}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DriveCar;
