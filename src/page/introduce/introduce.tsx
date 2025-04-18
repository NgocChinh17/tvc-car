import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb} from "antd";
import React from "react";

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
    </>
  );
};

export default Introduce;
