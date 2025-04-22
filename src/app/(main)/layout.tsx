import { FooterPage } from "@/page/Footer";
import { HeaderPage } from "@/page/Header";
import { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';

import ZaloFloatingButton from "@/components/ChatZalo";

import "../../app/globals.css";

export const metadata: Metadata = {
  title: "Hyundai Đà Nẵng",
  icons: {
    icon: "../favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <HeaderPage />
          {children}
          <ZaloFloatingButton />
          <FooterPage />
        </AntdRegistry>
      </body>
    </html>
  );
}
