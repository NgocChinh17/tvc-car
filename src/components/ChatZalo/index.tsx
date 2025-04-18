'use client';
import React from 'react';
import { Button, Tooltip } from 'antd';
import Image from 'next/image';

import Zalo from '@assets/iconZalo/Zalo.svg.png'
import Facebook_icon from '@assets/iconZalo/Facebook_icon.svg.png'

const ChatFloatingButtons = () => {
  return (
    <>
      {/* Zalo Button */}
      <Tooltip title="Nhắn tin Zalo" placement="left">
        <a
          href="https://zalo.me/0904570323"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            textDecoration: 'none',
          }}
        >
          <Button
            type="primary"
            shape="circle"
            icon={<Image src={Zalo} alt="Zalo" style={{ width: 20, height: 20 }} />}
            size="large"
            style={{
              width: 56,
              height: 56,
              backgroundColor: '#0084ff',
              borderColor: '#0084ff',
              marginBottom: '10px',
            }}
          />
        </a>
      </Tooltip>

      {/* Facebook Messenger Button */}
      <Tooltip title="Nhắn tin Facebook Messenger" placement="left">
        <a
          href="https://www.facebook.com/luu.truong.7773631"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            zIndex: 9999,
            textDecoration: 'none',
          }}
        >
          <Button
            type="default"
            shape="circle"
            icon={<Image src={Facebook_icon} alt='Facebook_icon' style={{ width: 20, height: 20}}/>}
            size="large"
            style={{
              width: 56,
              height: 56,
              backgroundColor: '#3b5998',
              borderColor: '#3b5998',
            }}
          />
        </a>
      </Tooltip>
    </>
  );
};

export default ChatFloatingButtons;
