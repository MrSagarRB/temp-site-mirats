import Image from "next/image";
import React from "react";
import milog from "../assets/card logo.png";

const Carousel = () => {
  let carouselData = [
    {
      title: "Consumer Packaged Goods",
    },
    {
      title: "Financial Services",
    },
    {
      title: "Marketing Research",
    },
    {
      title: "Healthcare",
    },
  ];

  return (
    <div
      id="style-3"
      className="mt-[70px] mb-[100px] grid grid-flow-col overflow-x-scroll scroll-smooth  pb-[50px] gap-[17px] px-[20px]"
    >
      {carouselData.map((item, idx) => {
        return (
          <div
            key={idx}
            className="w-[376px] border border-[#000000] h-[208px] rounded-[30px] p-[30px]"
          >
            <div className="  ">
              <Image
                src={milog}
                alt="logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="px-[20px]">
              <p className="text-[#6A6969] text-[36px] leading-[100%]">
                {item.title}
              </p>{" "}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
