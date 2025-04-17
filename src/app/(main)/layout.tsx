import StyledComponentsRegistry from "@/fixClsUiAntd/antd.registry";
import { FooterPage } from "@/page/Footer";
import { HeaderPage } from "@/page/Header";

import '../../app/globals.css'

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
          <FooterPage />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
