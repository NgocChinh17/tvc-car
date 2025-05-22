'use client';
import React, { useState, useEffect } from 'react';
import { Modal, Button, Input, Radio, Form, message } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { usePathname } from 'next/navigation';

const ModalRequest = ({ onClose }: { onClose: () => void }) => {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    contactMethod: 'call',
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || pathname !== '/') return null;

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

  const handleSubmit = async () => {
    const { name, phone, contactMethod } = formData;

    if (!name || !phone) {
      message.error('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, contactMethod }),
      });

      const data = await res.json();

      if (data.success) {
        message.success('Đã gửi thông tin thành công!');
        onClose();
      } else {
        message.error('Gửi thông tin thất bại!');
      }
    } catch (err) {
      console.error(err);
      message.error('Có lỗi xảy ra khi gửi!');
    }
  };

  return (
    <Modal
      title="Gửi yêu cầu tư vấn"
      open={true}
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
            style={{ fontSize: '16px' }}
          />
        </Form.Item>

        <Form.Item label="Số điện thoại" required>
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Nhập số điện thoại"
            style={{ fontSize: '16px' }}
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
