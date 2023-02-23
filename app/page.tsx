import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import Solutions from "@/components/Solutions";
import Impact from "@/components/Impact";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="2xl:w-[1440px] ml-auto mr-auto ">
        <Products />
        <Solutions />
        <Impact />
        <Carousel />
      </div>
    </main>
  );
}
