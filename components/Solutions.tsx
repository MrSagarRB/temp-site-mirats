"use client";

import Image from "next/image";
import React, { useState } from "react";
import cardBG1 from "../assets/card bg1.png";
import cardBG2 from "../assets/card bg2.png";
import cardBG3 from "../assets/card bg3.png";
import { motion } from "framer-motion";

const Solutions = () => {
  return (
    <motion.section
      whileInView={{ y: 0 }}
      initial={{ y: 200 }}
      transition={{ duration: 0.7 }}
      id="solutions"
      className=" lg:px-[200px] pt-[100px] "
    >
      <div className=" h-full w-full grid grid-cols-1 sm:grid-cols-2 lg:gap-[25px] space-y-6 sm:gap-[20px]  sm:space-y-0">
        <div className=" rounded-2xl h-[600px] overflow-hidden relative">
          <div className="h-full w-full absolute z-20">
            <Image
              src={cardBG1}
              alt="card"
              className="h-full w-full object-cover "
            />
          </div>
          <div className="h-[169px] w-[169px] bg-[#DD7373] absolute z-20 rounded-full top-[200px] -right-[85px]">
            {" "}
          </div>
          <div className="h-[169px] w-[169px] bg-[#E5A682AB] absolute z-20 rounded-full bottom-[100px] -left-[85px]">
            {" "}
          </div>
          <div className="absolute z-20 mt-[50px] left-[50px]">
            <p className="text-[60px] leading-[86%] font-[500]">
              Audiences <br /> at scale.
            </p>
            <button className="px-[35px] bg-[#272727] border border-transparent hover:border-[#272727] py-[10px] hover:bg-transparent hover:text-[#272727] text-[#FFFFFF] rounded-[24px] mt-[26px] duration-500">
              Read more
            </button>
          </div>
        </div>
        <div className=" h-[600px] overflow-hidden relative rounded-2xl ">
          <div className="h-full w-full absolute z-20">
            <Image
              src={cardBG2}
              alt="card"
              className="h-full w-full object-cover "
            />
          </div>

          <div className="h-[169px] w-[169px] bg-[#9B99FBC9] absolute z-20 rounded-full -top-[50px] -left-[80px]">
            {" "}
          </div>
          <div className="h-[169px] w-[169px] bg-[#D5FB99B8] absolute z-20 rounded-full bottom-[100px] -right-[85px]">
            {" "}
          </div>
          <div className="absolute z-20 mt-[50px] right-[50px] flex flex-col items-end">
            <p className="text-[60px] leading-[86%] font-[500] text-right text-[#FFFFFF]">
              Automated <br /> simplicity.
            </p>
            <button className="px-[35px] bg-[#FFCBCB] border border-transparent hover:border-[#FFCBCB] py-[10px] hover:bg-transparent hover:text-[#FFCBCB] text-[#000] rounded-[24px] mt-[26px] duration-500">
              Read more
            </button>
          </div>
        </div>
        <div className=" h-[600px] col-span-2 overflow-hidden relative  rounded-2xl ">
          <div className="h-full w-full absolute z-20">
            <Image
              src={cardBG3}
              alt="card"
              className="h-full w-full object-cover "
            />
          </div>
          <div className="h-[169px] w-[169px] bg-[#9B99FBC9] absolute z-20 rounded-full -top-[50px] -right-[80px]">
            {" "}
          </div>
          <div className="h-[169px] w-[169px] bg-[#DD7373A6] absolute z-20 rounded-full -bottom-[100px] left-[50px]">
            {" "}
          </div>

          <div className="absolute z-20 mt-[50px] left-[50px]  ">
            <p className="text-[60px] leading-[86%] font-[500]  text-[#000000]">
              Relentless <br /> innovation.
            </p>
            <p className="w-[300px] font-[400] leading-[100%] text-[20px] mt-[20px]">
              Benefit from cutting-edge technology trusted by the world’s
              largest and fastest-growing insights companies.
            </p>
            <button className="px-[35px] bg-[#01224C] border border-transparent hover:border-[#01224C] py-[10px] hover:bg-transparent hover:text-[#01224C] text-[#FFFFFF] rounded-[24px] mt-[26px] duration-500">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Solutions;
