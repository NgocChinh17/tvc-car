import React from "react";

import './style.scss'

interface SectionHeaderProps {
  title: string;
}

export const TitlePriceCar: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBlock: 16 }}>
      <div className="line-header" />
      <h4 className="title-line-header">{title}</h4>
    </div>
  );
};
