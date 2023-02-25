"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import miLogo from "../assets/loader.png";
import Image from "next/image";

interface NavItem {
  label: string;
  page: string;
}

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
let productsData = [
  {
    heading: "Explore Products",
    data: [
      { title: "Mirats Insights illustrate", link: "about" },
      {
        title: "Mirats Insights One",
        link: "#",
      },
      {
        title: "Mirats Insights Blaze",
        link: "#",
      },
    ],
  },
  {
    heading: "More from Products",
    data: [
      { title: "illustrate Support", link: "#" },
      {
        title: "MI One Support",
        link: "#",
      },
    ],
  },
];

let solutions = [
  {
    heading: "Quantitative Solutions",
    data: [
      { title: "Online Surveys", link: "#" },
      {
        title: "DIY Surveys",
        link: "#",
      },
      {
        title: "Global Sample",
        link: "#",
      },
      {
        title: "Global Quantitative Fieldwork",
        link: "#",
      },
      {
        title: "End to End Sample Service",
        link: "#",
      },
    ],
  },
  {
    heading: "Qualitative Solutions",
    data: [
      { title: "In-person Qual", link: "#" },
      {
        title: "Digital Qual",
        link: "#",
      },
      {
        title: "Telephonic Qual",
        link: "#",
      },
      {
        title: "Global Qualitative Fieldwork",
        link: "#",
      },
    ],
  },
  {
    heading: "Specialist Solutions",
    data: [
      { title: "Recruitment", link: "#" },
      {
        title: "Digital Qual",
        link: "#",
      },
      {
        title: "Consulting",
        link: "#",
      },
      {
        title: "Hybrid Research",
        link: "#",
      },
      {
        title: "Product Tests",
        link: "#",
      },
      {
        title: "Transcription",
        link: "#",
      },
    ],
  },
];

let industry = [
  {
    heading: "Explore Industries",
    data: [
      { title: "Consumer Packaged Goods", link: "#" },
      {
        title: "Financial Services",
        link: "#",
      },
      {
        title: "Marketing Research",
        link: "#",
      },
      {
        title: "Healthcare",
        link: "#",
      },
      {
        title: "Consulting",
        link: "#",
      },
      {
        title: "Media & Technology",
        link: "#",
      },
    ],
  },
  {
    heading: "More from Products",
    data: [
      { title: "illustrate Support", link: "#" },
      {
        title: "MI One Support",
        link: "#",
      },
    ],
  },
];

interface MenuItem {
  heading: string;
  data: {
    title: string;
    link: string;
  }[];
}
const Navbar = () => {
  let [expandNav, setExpandnav] = useState(false);
  let [selectedMenu, setSelectedMenu] = useState<String>("Products");

  console.log(selectedMenu);
  let getCorrectMenu = (selectedMenu: String) => {
    switch (selectedMenu) {
      case "Products":
        return <Menu props={productsData} />;
        break;
      case "Solutions":
        return <Menu props={solutions} />;
        break;
      case "Industry":
        return <Menu props={industry} />;
        break;
    }
  };
  return (
    <header>
      <div
        onMouseEnter={() => setExpandnav(true)}
        onMouseLeave={() => setExpandnav(false)}
        className={`  ${
          expandNav ? "h-[300px] bg-white " : "bg-[#ECECEC73] h-[60px]"
        } fixed top-0 z-40 w-full duration-500 transition-all overflow-hidden xl:px-[200px]`}
      >
        <div className="  items-center">
          <nav className=" hidden md:flex items-center space-x-6 font-[400] text-[14px] h-[60px] ">
            <div>
              <Link href="/">
                <Image src={miLogo} alt="mirats insights logo" />
              </Link>
            </div>

            {NAV_ITEMS.map((item, idx) => {
              return (
                <p
                  onMouseEnter={() => setSelectedMenu(item.label)}
                  key={idx}
                  className={`${
                    selectedMenu === item.label
                      ? "border-b-2 border-b-blue-500 duration-300"
                      : "border-b-2 border-b-transparent"
                  } cursor-pointer `}
                >
                  {item.label}
                </p>
              );
            })}
            <button className="px-[15px] py-[5px] border border-[#000000] hover:bg-[#000000] hover:text-[#ffff] rounded-[23px] duration-500">
              Contact Sales
            </button>
            <button className="px-[15px] py-[5px] border border-transparent  hover:border-[#000000] rounded-[23px] hover:bg-transparent bg-[#E3E3E3] duration-500">
              Start Free Trial
            </button>
          </nav>
          <div className=" ">
            <div className="onLeaveTransition w-full  ">
              {getCorrectMenu(selectedMenu)}
            </div>
          </div>
        </div>
      </div>
      {expandNav && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          className={` backdrop-blur-sm bg-[#D9D9D933]  blur-md h-screen fixed  top-[60px]  w-full   z-30 `}
        ></motion.div>
      )}
    </header>
  );
};

export default Navbar;

interface MenuProps {
  props: MenuItem[];
}

const Menu = ({ props }: MenuProps) => {
  return (
    <div
      className={`w-full mt-[16px] grid grid-cols-3  place-content-between  overflow-hidden  duration-500  `}
    >
      {props.map((item, idx) => {
        return (
          <div key={idx} className="">
            <p className="text-[15px]"> {item.heading}</p>
            <div className="mt-[10px] flex flex-col">
              {item?.data?.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    href={item.link}
                    className="text-[20px] font-[600] hover:text-[#4365dd] duration-300"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
