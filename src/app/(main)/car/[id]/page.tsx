"use client";
import { imageList } from "@/components/data/cars";
import { CheckCircleTwoTone, HomeOutlined } from "@ant-design/icons";
import { Breadcrumb, Col, Image, Row } from "antd";
import { notFound } from "next/navigation";

import "./style.scss";

import bannerwebfb7 from "@assets/imageDetail/bannerwebfb7.jpg";
import { CarPriceTable } from "@/components/TablePriceList";

export default function CarDetailPage({ params }: { params: { id: string } }) {
  const car = imageList.find((item) => item.id === parseInt(params.id));

  if (!car) return notFound();
  return (
    <div className="container">
      <Breadcrumb
        className="breadcrumb"
        items={[
          {
            href: "/",
            title: <HomeOutlined />,
          },
          {
            title: <div>{car.title}</div>,
          },
        ]}
      />

      <Row gutter={[24, 24]}>
        <Col xs={24} md={10}>
          <div>
            <Image
              src={car.url.src}
              alt={car.title}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Col>

        <Col xs={24} md={14}>
          <div className="title-detail-header">{car.title}</div>
          <div className="box-detail-header">
            <div className="content-detail-header">
              <div className="title-header-box-detail">
                Giá xe Hyundai I10 Đà Nẵng tháng{" "}
                <span className="year-box-detail">04/2025</span>
              </div>
              <div>Giá xe Hyundai I10 Đà Nẵng tốt nhất từ trước</div>
              <div>
                <div>
                  <span style={{ marginRight: 10 }}>
                    <CheckCircleTwoTone />
                  </span>
                  {car.description.oneDescription}
                </div>
                <div>
                  <span style={{ marginRight: 10 }}>
                    <CheckCircleTwoTone />
                  </span>
                  {car.description.towDescription}
                </div>
                <div>
                  <span style={{ marginRight: 10 }}>
                    <CheckCircleTwoTone />
                  </span>
                  {car.description.threeDescription}
                </div>
                <div>
                  <span style={{ marginRight: 10 }}>
                    <CheckCircleTwoTone />
                  </span>
                  {car.description.fourDescription}
                </div>
              </div>
              <div className="advise-detail">
                {car.advise}:{" "}
                <span className="phoneNumber-detail">{car.phoneNumber}</span>
              </div>
              <div className="" style={{ textAlign: "center" }}>
                <div className="price-detail">{car.titleRollingPrice}</div>
                <span className="price-detail">Giá: </span>{" "}
                <span className="color-price-detail">
                  {car.price?.toLocaleString("vi-VN")} VNĐ
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: 32 }}>
        <Col xs={24} md={20} lg={16}>
          <div className="box-tow-detail">
            <div className="content-box-detail">
              <div className="title-box-tow-detail-2">Hyundai Đà Nẵng</div>
              <div className="title-box-tow-detail-3">
                Giá xe Hyundai Đà Nẵng
              </div>
              <div className="content-box-tow-detail-4">
                Giá xe lăn bánh mới nhất tại Đà Nẵng sau khi đã áp dụng tối đa
                các chương trình Khuyến mãi, Quý khách vui lòng gọi Số điện
                thoại/Zalo: {car.phoneNumber} là Tư vấn bán hàng tại Hyundai Đà
                Nẵng.
              </div>

              <div className="content-box-tow-detail-4">
                Ngoài ra, em mời anh chị lái thử xe tại nhà để cảm nhận thực tế
                hơn về ưu nhược điểm của xe Hyundai
              </div>
              <div className="image-box-tow-detail-5">
                <Image
                  src={bannerwebfb7.src}
                  alt="bannerwebfb7"
                  preview={false}
                />
              </div>

              <div className="content-box-tow-detail-4">
                Dưới đây là bảng giá niêm yết đang áp dụng. Giá lăn bánh sẽ bao
                gồm các loại thuế, phí và trừ đi các chương trình khuyến mãi cụ
                thể.
              </div>

              <div className="content-box-tow-detail-4">
                Note: Ngoài chương trình ưu đãi lớn từ đại lý trong tháng
                04/2025, còn có thêm một số ưu đãi đặc quyền giá trị cho các anh
                chị, em xin phép báo qua số điện thoại {car.phoneNumber}.
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <div style={{ marginTop: 32 }}>
        <CarPriceTable title={car.title} data={car?.data ?? []} />
      </div>
      {car.carFront || car.bodyCar || car.carInterior || car.amenitiesCar || car.carEngine ? (
        <div style={{ lineHeight: 2 }}>
        <h3>Chi tiết sản phẩm: </h3>
        <h4>Thông tin về xe {car.title}:</h4>
        <div>
          <div style={{ textIndent: 20 }}>
            {car?.carFront?.introduceCarFont}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBlock: 16,
            }}
          >
            {car?.carFront?.imageCarFront && (
              <Image
                src={car?.carFront?.imageCarFront.src}
                alt="carFront"
                preview={false}
              />
            )}
          </div>

          <h4>Thân xe:</h4>
          <div style={{ textIndent: 20 }}>{car?.bodyCar?.imageCarLights}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBlock: 16,
            }}
          >
            {car?.bodyCar?.heatSinkCar && (
              <Image
                src={car?.bodyCar?.heatSinkCar.src}
                alt="carFront"
                preview={false}
              />
            )}
          </div>

          <h4>Bên hông xe:</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBlock: 16,
            }}
          >
            {car?.carInterior?.imageCarInterior && (
              <Image
                src={car?.carInterior?.imageCarInterior.src}
                alt="carInterior"
                preview={false}
              />
            )}
          </div>

          <h4>Sau xe:</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginBlock: 16,
              }}
            >
              {car?.amenitiesCar?.imageAmenitiesCar && (
                <Image
                  src={car?.amenitiesCar?.imageAmenitiesCar.src}
                  alt="amenitiesCar"
                  preview={false}
                />
              )}
            </div>

            <div>
              <h4>Bên trong xe:</h4>
              <div style={{ display: "flex", justifyContent: "center", marginBlock: 16 }}>
                {car?.carEngine?.imageCarEngine && (
                  <Image
                    src={car?.carEngine?.imageCarEngine.src}
                    alt="carEngine"
                    preview={false}
                  />
                )}
              </div>
            </div>
        </div>
      </div>
      ): " "}

      {/* Modal nằm ngoài mọi layout khác */}
    </div>
  );
}
