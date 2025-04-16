import React from "react";
import { Row, Col } from "antd";
import Image from "next/image";
import Link from "next/link";

import seeAll from "@assets/iconButton/seeAll.svg";

interface SectionHeaderProps {
  title: string;
}

export const TitleComponents: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <Row
      className="section-header"
      gutter={[16, 16]}
      justify="space-between"
      align="middle"
    >
      <Col className="section-title" xs={18}>
        <p>{title}</p>
      </Col>
      <Col xs={6} style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link href="#" className="see-all-text">
          SEE ALL
        </Link>
        <Link href="#">
          <Image className="see-all-icon" src={seeAll} alt="seeAll" width={20} height={20} />
        </Link>
      </Col>
    </Row>
  );
};
