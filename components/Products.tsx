"use client";
import Image from "next/image";
import React from "react";
import miLogo from "../assets/loader.png";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <motion.section
      whileInView={{ y: 0 }}
      initial={{ y: 200 }}
      transition={{ duration: 0.9 }}
      id="products"
      className=" px-[20px] md:px-[244px] flex flex-col items-center pt-[100px] "
    >
      <div className=" flex flex-col justify-center items-center ">
        <div className="flex flex-col gap-[50px] items-center justify-center">
          <div>
            <div>
              <Image src={miLogo} alt="logo" />
            </div>
            <p> SAMPLING SOLUTIONS</p>
          </div>

          <p className="font-[700] text-[86px] text-center leading-[86px]">
            Now all you need is Mirats Insights.
          </p>
          <p className=" md:w-[900px] text-[48px] text-center leading-[100%]">
            Our software gives you the tools to ask the right questions, listen
            to what customers need, and respond with the right actions, every
            time.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Products;
