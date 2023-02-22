import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Products from "@/components/Products";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="2xl:w-[1440px] ml-auto mr-auto">
        <Products />
        <Solutions />
      </div>
    </main>
  );
}
