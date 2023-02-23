"use client";
import React from "react";
import { motion } from "framer-motion";

const AtYourService = () => {
  return (
    <motion.div
      whileInView={{ y: 0 }}
      initial={{ y: 200 }}
      transition={{ duration: 0.7 }}
      className=" px-[200px] py-[100px] bg-[#EDEDED] w-full  "
    >
      <div className=" 2xl:w-[1440px] ml-auto mr-auto ">
        <p className="font-[700] text-[86px] leading-[86px]">
          At your service. <br /> Every step of the way..
        </p>

        <div className=" mt-[100px] grid grid-cols-2 gap-[24px]">
          <div className="h-[485px] col-span-2 w-full rounded-[25px] bg-black p-[30px]">
            <p className="text-[30px] font-[500] leading-[100%] text-[#979797]">
              Quantitative <br />
              Solutions
            </p>

            <div> </div>
          </div>
          <div className="h-[485px] w-full test"> </div>
          <div className="h-[485px] w-full test"> </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AtYourService;
