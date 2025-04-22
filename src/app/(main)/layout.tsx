import StyledComponentsRegistry from "@/fixClsUiAntd/antd.registry";
import { FooterPage } from "@/page/Footer";
import { HeaderPage } from "@/page/Header";
import { Metadata } from "next";

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
        <StyledComponentsRegistry>
          <HeaderPage />
          {children}
          <ZaloFloatingButton />
          <FooterPage />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
