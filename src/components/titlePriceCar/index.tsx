import React from 'react'

interface SectionHeaderProps {
    title: string;
  }

export const TitlePriceCar: React.FC<SectionHeaderProps> = ({title}) => {
  return (
    <>
    <div style={{ display: "flex", alignItems: "center", marginBlock: 16 }}>
        <div
          style={{
            width: "4px",
            height: "20px",
            backgroundColor: "#e5e5e5",
            marginRight: "10px",
          }}
        />
        <h4 style={{ color: "#ff6600", fontWeight: "bold", marginBlock: 0 }}>
          <p>{title}</p>
        </h4>
      </div>
    </>
  )
}
