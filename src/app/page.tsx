import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Promotions from "./components/Promotions";
import ProductsSlider from "./components/ProductsSlider";
import Unique from "./components/Unique";
import Subscribe from "./components/Subscribe";
import Myfooter from "./components/Myfooter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Promotions />
      <ProductsSlider />
      <Unique />
      <Subscribe />
    </>
  );
}
