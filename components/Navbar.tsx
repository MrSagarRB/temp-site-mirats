"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import miLogo from "../assets/loader.png";
import { motion } from "framer-motion";
interface NavItem {
  label: string;
  page: string;
}

interface MenuItem {
  heading: string;
  data: {
    title: string;
    link: string;
  }[];
}
const Navbar = () => {
  let [showNav, setShowNav] = useState(false);
  let [selectedMenu, setSelectedMenu] = useState<String>(" ");

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

  let handleOnLeave = () => {
    setTimeout(() => {
      setSelectedMenu("");
    }, 1000);
  };

  useEffect(() => {
    // setTimeout(() => {
    //   setShowNav(true);
    // }, 1000);
  }, []);

  let productsData = [
    {
      heading: "Explore Products",
      data: [
        { title: "Mirats Insights illustrate", link: "#" },
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
    <div
      onMouseEnter={() => setShowNav(true)}
      onMouseLeave={() => handleOnLeave()}
      className={`${
        selectedMenu === "" ? "bg-[#ECECEC73]" : "bg-[#fff]"
      }   min-h-[63px]  w-full flex items-center justify-center fixed top-0 z-40  duration-500 py-[20px]  `}
    >
      <div className="flex flex-col  items-center  ">
        <div className="flex items-center gap-[45px] ">
          <div>
            <Link href="#">
              <Image src={miLogo} alt="mirats insights logo" />
            </Link>
          </div>
          <nav className="flex space-x-6 font-[400] text-[14px]">
            {NAV_ITEMS.map((item, idx) => {
              return (
                <p
                  onMouseEnter={() => setSelectedMenu(item.label)}
                  key={idx}
                  className="cursor-pointer"
                >
                  {item.label}
                </p>
              );
            })}
          </nav>
          <button
            onMouseEnter={() => setShowNav(!showNav)}
            className="px-[15px] py-[5px] border border-[#000000] hover:bg-[#000000] hover:text-[#ffff] rounded-[23px] duration-500"
          >
            Contact Sales
          </button>
          <button className="px-[15px] py-[5px] border border-transparent  hover:border-[#000000] rounded-[23px] hover:bg-transparent bg-[#E3E3E3] duration-500">
            Start Free Trial
          </button>
        </div>
        <div className="onLeaveTransition w-full  ">
          {getCorrectMenu(selectedMenu)}
        </div>
      </div>
    </div>
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
