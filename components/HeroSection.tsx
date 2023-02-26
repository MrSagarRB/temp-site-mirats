"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import bgImage from "../assets/herobg.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="h-screen liner-gradient1  flex relative">
      <div className="hidden md:block w-full h-full absolute z-10">
        <Image
          src={bgImage}
          alt="bg-image"
          className="h-full w-full object-fill "
        />
      </div>
      {/* <div className="bg-[#000] h-full w-full absolute z-20 opacity-20 "> </div> */}
      <div className="mt-[300px] px-[20px] lg:px-0 lg:ml-[100px] relative z-20">
        <p className="text-[3em] sm:text-[80px] font-[700] leading-[100%]">
          Work smarter,
          <br /> go faster,
          <br /> charge less.
        </p>
        <div className="bg-[#1C3899] text-[#FFFFFF] px-[14px] py-[2px] mt-[38px]">
          {" "}
          <p className=" sm:text-[40px] font-[700] italic">
            MIRATS INSIGHTS DOES THAT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
