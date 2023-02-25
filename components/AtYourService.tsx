"use client";
import React from "react";
import manImg from "../assets/man.png";
import { motion } from "framer-motion";
import Image from "next/image";
import protoGrid from "../assets/grid.png";

const AtYourService = () => {
  return (
    <motion.div className=" px-[200px] py-[100px] bg-[#EDEDED] w-full   ">
      <div className=" 2xl:w-[1240px] ml-auto mr-auto ">
        <p className="font-[700] text-[86px] leading-[86px]">
          At your service. <br /> Every step of the way..
        </p>

        <div className=" mt-[100px] grid grid-cols-1 md:grid-cols-2 gap-[24px]">
          <div className="h-[485px] col-span-2 w-full rounded-[25px] bg-black p-[30px] relative">
            <p className="text-[30px] font-[500] leading-[100%] text-[#979797]">
              Quantitative <br />
              Solutions
            </p>

            <div className="  w-[400px] absolute right-[50px] top-[50px] text-[#ECECEC] text-[30px] leading-[120%] font-[600]">
              <p>Online Surveys. </p>
              <p> DIY Surveys.</p>
              <p> Global Sample. </p>
              <p> Global Quantitative Fieldwork. </p>
              <p> End to End Sample Service. </p>

              <p className="text-[#ECECEC] text-[30px] mt-[16px]">
                That’s Mirats Insights.
              </p>
              <button className="bg-[#AFC7C7] hover:bg-[#000] border border-transparent hover:border-[#ffff] hover:text-[#fff] duration-500 px-[30px] text-[20px] text-[#000000] py-[5px] rounded-[23px] mt-[16px] font-[500]">
                Know more.
              </button>
            </div>
          </div>
          <div className="h-[685px] w-full bg-[#fff]  rounded-[25px] p-[30px] overflow-hidden relative">
            <p className="text-[30px] font-[500] leading-[100%] text-[#979797]">
              Qualitative
              <br /> Solutions
            </p>
            <div className="font-[600] text-[35px] leading-[110%] mt-[16px] ">
              <p>In-Person Qual.</p>
              <p> Digital Qual.</p>
              <p> Telephonic Qual.</p>
              <p> Global Qual Solutions.</p>
              <button className="bg-[#000] hover:bg-transparent border border-transparent hover:border-[#000]  text-[#fff] duration-500 px-[30px] text-[20px] hover:text-[#000000] py-[5px] rounded-[23px] mt-[16px] font-[500]">
                Learn more.
              </button>
            </div>
            <div className=" h-[450px] w-[400px] overflow-hidden absolute bottom-0 right-0 ">
              <Image
                src={manImg}
                alt="man"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="h-[685px] w-full bg-[#fff] p-[30px] overflow-hidden  rounded-[25px] relative ">
            <p className="text-[30px] text-center  font-[500] leading-[100%] text-[#979797]">
              Qualitative Solutions
            </p>
            <div className="flex flex-col items-center text-[24px] mt-[20px] leading-[110%] font-[600]">
              <p> Recruitment Solutions. </p>
              <p>Consulting Solution. </p>
              <p> Hybrid Research Solutions.</p>
              <p> Product Tests. </p>
              <p> Transcription Services. </p>
            </div>
            <div className="flex items-center justify-center ">
              <button className="bg-[#000] hover:bg-transparent border border-transparent hover:border-[#000]  text-[#fff] duration-500 px-[30px] text-[20px] hover:text-[#000000] py-[5px] rounded-[23px] mt-[16px] font-[500] ">
                Learn more.
              </button>
            </div>
            <div className="absolute overflow-hidden  bottom-0 w-full  left-0  ">
              <Image
                src={protoGrid}
                alt="photo-grid"
                className="w-full object-cover h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AtYourService;
