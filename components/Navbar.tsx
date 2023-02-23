"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import miLogo from "../assets/loader.png";

interface NavItem {
  label: string;
  page: string;
}
const Navbar = () => {
  let [showNav, setShowNav] = useState(false);
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: "Products",
      page: "#products",
    },
    {
      label: "Solutions",
      page: "#solutions",
    },
    {
      label: "Industry",
      page: "#industry",
    },
    {
      label: "Resources",
      page: "#resources",
    },
    {
      label: "Company",
      page: "#company",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setShowNav(true);
    }, 1000);
  }, []);

  return (
    <header
      className={`bg-[#ECECEC73] h-[63px] w-full flex items-center justify-center sticky top-0 z-40  opacity-0 duration-500 ${
        showNav && "opacity-100"
      }`}
    >
      <div className="flex items-center gap-[45px]">
        <div>
          <a href="#">
            <Image src={miLogo} alt="mirats insights logo" />
          </a>
        </div>
        <nav className="flex space-x-6 font-[400] text-[14px]">
          {NAV_ITEMS.map((item, idx) => {
            return (
              <a key={idx} href={item.page} className={""}>
                {item.label}
              </a>
            );
          })}
        </nav>
        <button className="px-[15px] py-[5px] border border-[#000000] hover:bg-[#000000] hover:text-[#ffff] rounded-[23px] duration-500">
          Contact Sales
        </button>
        <button className="px-[15px] py-[5px] border border-transparent  hover:border-[#000000] rounded-[23px] hover:bg-transparent bg-[#E3E3E3] duration-500">
          Start Free Trial
        </button>
      </div>
    </header>
  );
};

export default Navbar;
