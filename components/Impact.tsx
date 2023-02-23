"use client";
import React from "react";
import { motion } from "framer-motion";

const Impact = () => {
  return (
    <motion.section
      whileInView={{ y: 0 }}
      initial={{ y: 200 }}
      transition={{ duration: 0.7 }}
      id="solutions"
      className=" px-[200px] pt-[100px] "
    >
      <p className="font-[700] text-[86px] leading-[86px]">
        The impact of Mirats Insights. Across industries.
      </p>
      <p className="w-[900px] text-[48px] mt-[70px] leading-[100%]">
        Our software gives you the tools to ask the right questions, listen to
        what customers need, and respond with the right actions, every time.
      </p>
    </motion.section>
  );
};

export default Impact;
