"use client";

import Image from "next/image";
import React, { useState } from "react";
import cardBG1 from "../assets/card bg1.png";
import cardBG2 from "../assets/card bg2.png";
import cardBG3 from "../assets/card bg3.png";

const Solutions = () => {
  return (
    <section id="solutions" className="h-screen px-[200px] pt-[100px]">
      <div className=" h-full w-full grid grid-cols-2 gap-[25px]">
        <div className=" rounded-2xl h-[600px] overflow-hidden">
          <Image src={cardBG1} alt="card" />
        </div>
        <div className=" h-[600px] overflow-hidden  rounded-2xl ">
          {" "}
          <Image src={cardBG2} alt="card" />
        </div>
        <div className=" h-[600px] col-span-2 overflow-hidden  rounded-2xl ">
          {" "}
          <Image src={cardBG3} alt="card" />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
