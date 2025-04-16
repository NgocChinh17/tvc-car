import SliderComponent from "@/components/SliderComponents";
import { FooterPage } from "@/page/Footer";
import { HeaderPage } from "@/page/Header";
import { HomePage } from "@/page/Home";

export default function Home() {
  return (
    <>
      <HeaderPage />
      <SliderComponent />
      <HomePage />
      <FooterPage />
    </>
  );
}
