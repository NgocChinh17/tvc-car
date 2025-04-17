import React from "react";
import { Table, TableProps } from "antd";

import "./style.scss";

interface DataType {
  key: string;
  name: string;
  price: number;
}

interface CarPriceTableProps {
  title: string;
  data: DataType[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Phiên bản",
    dataIndex: "name",
    key: "name",
    render: (text) => <p>{text}</p>,
  },
  {
    title: "Giá xe",
    dataIndex: "price",
    render: (price: number) => (
      <strong style={{ color: "#333" }}>
        {new Intl.NumberFormat("vi-VN").format(price)} VNĐ
      </strong>
    ),
  },
];

export const CarPriceTable: React.FC<CarPriceTableProps> = ({ title, data }) => {
  return (
    <div style={{ maxWidth: "700px", margin: "40px auto" }}>
      <h4 style={{ textAlign: "center", marginBottom: 20 }}>{title}</h4>
      <Table<DataType>
        className="custom-car-price-table"
        columns={columns}
        dataSource={data}
        pagination={false}
        size="large"
      />
    </div>
  );
};
