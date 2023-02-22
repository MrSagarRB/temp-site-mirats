"use client";
import Image from "next/image";
import React from "react";
import bgImage from "../assets/herobg.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="h-screen mt-[-63px] flex relative">
      <div className=" w-full h-full absolute z-10">
        <Image
          src={bgImage}
          alt="bg-image"
          className="h-full w-full object-fill "
        />
      </div>
      <div className="mt-[300px] ml-[100px] relative z-20">
        <p className="text-[80px] font-[700] leading-[100%]">
          Work smarter,
          <br /> go faster,
          <br /> charge less.
        </p>
        <div className="bg-[#1C3899] text-[#FFFFFF] px-[14px] py-[2px] mt-[38px]">
          {" "}
          <p className="text-[40px] font-[700] italic">
            MIRATS INSIGHTS DOES THAT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
