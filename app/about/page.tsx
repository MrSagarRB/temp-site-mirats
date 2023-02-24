"use client";

import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }}
      animate={{
        x: 0, //translateX
        opacity: 1,
      }}
      transition={{ duration: 2, type: "spring", stiffness: 60 }}
      className="pt-[100px] bg-red-300 h-screen w-full"
    >
      <p className="text-3xl">About </p>
    </motion.div>
  );
};

export default page;
