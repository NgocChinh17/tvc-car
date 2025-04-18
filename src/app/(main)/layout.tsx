import StyledComponentsRegistry from "@/fixClsUiAntd/antd.registry";
import { FooterPage } from "@/page/Footer";
import { HeaderPage } from "@/page/Header";

import '../../app/globals.css'
import ZaloFloatingButton from "@/components/ChatZalo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <title>Hyundai Đà Nẵng</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <HeaderPage />
          {children}
          <ZaloFloatingButton/>
          <FooterPage />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
