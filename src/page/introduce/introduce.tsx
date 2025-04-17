import { EditOutlined, HomeOutlined, PhoneOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Divider, Row, Space } from "antd";
import React from "react";
import {
  FileTextOutlined,
  SettingOutlined,
  ToolOutlined,
  InboxOutlined,
} from "@ant-design/icons";

// Dữ liệu động cho phần giới thiệu
const supportItems = [
  {
    type: "text",
    title: "HỖ TRỢ MUA XE TRẢ GÓP",
    subtitle: "LÃI SUẤT THẤP - THỦ TỤC NHANH CHÓNG",
  },
  {
    type: "buttons",
    buttons: [
      {
        icon: <PhoneOutlined />,
        text: "0906557408",
      },
      {
        icon: <EditOutlined />,
        text: "Đăng ký",
      },
    ],
  },
];

// Dữ liệu động cho phần "Vì sao chọn Hyundai"
const whyChooseHyundai = [
  {
    icon: <FileTextOutlined style={{ fontSize: 36 }} />,
    subtitle: "Giá xe luôn",
    title: "Tốt nhất",
    description: "Hyundai Đà Nẵng luôn hỗ trợ khách hàng mức giá tối ưu",
  },
  {
    icon: <SettingOutlined style={{ fontSize: 36 }} />,
    subtitle: "Hỗ trợ",
    title: "Trả góp",
    description:
      "Chương trình trả góp linh hoạt với mức lãi suất thấp nhất tại Hyundai Đà Nẵng",
  },
  {
    icon: <ToolOutlined style={{ fontSize: 36 }} />,
    subtitle: "Trải nghiệm",
    title: "Miễn phí",
    description:
      "Chương trình lái thử xe tại nhà của Hyundai Đà Nẵng giúp quý khách cảm nhận giá trị thật",
  },
  {
    icon: <InboxOutlined style={{ fontSize: 36 }} />,
    subtitle: "Thủ tục",
    title: "Nhanh chóng",
    description:
      "Hyundai Đà Nẵng hỗ trợ các thủ tục mua xe, đăng ký, hồ sơ trả góp một cách tiện lợi nhất",
  },
];

const Introduce = () => {
  return (
    <>
      {/* Phần breadcrumb */}
      <div className="container-header">
        <Breadcrumb
          items={[
            {
              href: "/",
              title: <HomeOutlined />,
            },
            {
              title: "Giới Thiệu",
            },
          ]}
        />
        <h3 style={{ paddingBlock: 20 }}>Đang cập nhật</h3>
      </div>

      {/* Hỗ trợ mua xe trả góp */}
      <div
        style={{
          background: "#d53c1c",
          color: "#fff",
          padding: "40px 0",
          marginBottom: 40,
        }}
      >
        <div className="container">
          <Row gutter={[16, 16]} align="middle" justify="center">
            {supportItems.map((item, index) => (
              <Col xs={24} md={8} key={index}>
                <div style={{ textAlign: "center" }}>
                  {item.type === "text" && (
                    <>
                      <h2 style={{ margin: 0, fontWeight: 700 }}>
                        {item.title}
                      </h2>
                      <p style={{ fontStyle: "italic", margin: 0 }}>
                        {item.subtitle}
                      </p>
                    </>
                  )}

                  {item.type === "buttons" && (
                    <Space size="small">
                      {item.buttons?.map((btn, idx) => (
                        <Button
                          key={idx}
                          type="primary"
                          icon={btn.icon}
                          style={{
                            background: "#2b2b2b",
                            border: "none",
                            borderRadius: "6px",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                          }}
                        >
                          {btn.text}
                        </Button>
                      ))}
                    </Space>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Vì sao chọn Hyundai */}
      <div style={{marginBottom: 40}}>
        <div className="container">
          <h3 style={{ textAlign: "center", marginBottom: 20 }}>VÌ SAO CHỌN HYUNDAI</h3>
          <Divider
            style={{
              borderColor: "gray",
              borderWidth: 2,
              maxWidth: 200,
              margin: "0 auto 40px",
            }}
          />

          <Row gutter={[24, 24]} justify="center">
            {whyChooseHyundai.map((item, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <div
                  style={{
                    background: "#fff",
                    padding: 20,
                    borderRadius: 10,
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  <div style={{ marginBottom: 12 }}>{item.icon}</div>
                  <div style={{ color: "#777", fontSize: 14 }}>
                    {item.subtitle}
                  </div>
                  <h4 style={{ margin: "4px 0" }}>{item.title}</h4>
                  <p style={{ fontSize: 13, color: "#555" }}>
                    {item.description}
                  </p>
                  {/* Thanh đỏ phía dưới nếu cần */}
                  {index === 0 || index === 3 ? (
                    <div
                      style={{
                        width: 30,
                        height: 4,
                        backgroundColor: "#c00",
                        margin: "8px auto 0",
                      }}
                    />
                  ) : null}
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Introduce;
