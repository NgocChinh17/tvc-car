'use client';
import SliderComponent from "@/components/SliderComponents";
import { HomePage } from "@/page/Home";

import { useState, useEffect } from 'react';
import 'antd/dist/reset.css';
import ModalRequest from "@/components/ModalRequest";

export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <SliderComponent />
      <HomePage />
      {isModalVisible && <ModalRequest onClose={handleCloseModal} />}
    </>
  );
}
