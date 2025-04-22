import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import React from "react";

import "./style.scss";

const Introduce = () => {
  return (
    <>
      {/* Phần breadcrumb */}
      <div className="container-header">
        <Breadcrumb
          className="breadcrumb"
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
        <div className="introduce-wrapper">
          <h3 className="title-introduce">Đang cập nhật</h3>
        </div>
      </div>
    </>
  );
};

export default Introduce;
