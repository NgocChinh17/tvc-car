// components/SliderComponent.tsx
import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

// slider
import slider1 from "@assets/image/slider1.png";
import slider2 from "@assets/image/slider2.jpg";
import Slide4 from "@assets/image/Slide4.jpg";
import slider5 from "@assets/image/slider5.jpg";
import slider6 from "@assets/image/slide6.jpg";
import slider7 from "@assets/image/slide7.jpg";

const contentStyle: React.CSSProperties = {
  height: "500px",
  width: "100%",
  objectFit: "cover",
  cursor: "pointer",
};

// Danh sách ảnh slide
const slides = [
  { src: slider1, alt: "slider1" },
  { src: slider2, alt: "slider2" },
  { src: Slide4, alt: "slide4" },
  { src: slider5, alt: "slider5" },
  { src: slider6, alt: "slide6" },
  { src: slider7, alt: "slide7" }, 
];

const SliderComponent = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Carousel autoplay draggable>
        {slides.map((slide, index) => (
          <div key={index}>
            <Image style={contentStyle} src={slide.src} alt={slide.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderComponent;
