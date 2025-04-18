import React, { useState } from 'react';
import { Modal, Button, Input, Radio, Form, message, RadioChangeEvent } from 'antd';

const ModalRequest = ({ onClose }: {onClose: () => void}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: '',
    contactMethod: 'call',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRadioChange = (e: RadioChangeEvent) => {
    setFormData({
      ...formData,
      contactMethod: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { name, phone, carModel, contactMethod } = formData;

    if (!name || !phone || !carModel) {
      message.error('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    const messageText = `
      Tên: ${name}
      Số điện thoại: ${phone}
      Dòng xe: ${carModel}
      Phương thức liên hệ: ${contactMethod === 'call' ? 'Gọi điện' : 'Nhắn tin Zalo'}
    `;

    // Link Zalo
    const zaloLink = `https://zalo.me/0904570323?text=${encodeURIComponent(messageText)}`;

    // Mở Zalo với thông điệp đã mã hóa
    window.open(zaloLink, '_blank');

    // Đóng modal sau khi gửi
    onClose();
  };

  return (
    <Modal
      title="Gửi yêu cầu tư vấn"
      visible={true}
      onCancel={onClose}
      footer={[
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Gửi yêu cầu
        </Button>,
      ]}
    >
      <Form layout="vertical">
        <Form.Item label="Tên" required>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nhập tên"
          />
        </Form.Item>
        
        <Form.Item label="Số điện thoại" required>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Nhập số điện thoại"
          />
        </Form.Item>

        <Form.Item label="Dòng xe" required>
          <Input
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            placeholder="Nhập dòng xe"
          />
        </Form.Item>

        <Form.Item label="Phương thức liên hệ">
          <Radio.Group
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleRadioChange}
          >
            <Radio value="call">Gọi điện</Radio>
            <Radio value="zalo">Nhắn tin Zalo</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalRequest;
