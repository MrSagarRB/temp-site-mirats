import React from "react";

const Expertise = () => {
  return (
    <section className="h-screen flex flex-col w-full  pt-[100px] ">
      <p className="font-[700] text-[86px] leading-[86px]">
        Expertise where it counts.
      </p>
      <div className=" flex justify-between mt-[100px] ">
        <div className="">
          <p className="text-[26px]"> Up to</p>
          <p className="text-[56px] font-[700]">$1.3M+ </p>
          <p className="text-[26px]">
            incentive distributed amongst <br /> panelists in Q4 2022
          </p>
        </div>
        <div className="">
          <p className="text-[26px]"> Up to</p>
          <p className="text-[56px] font-[700]">26 technology </p>
          <p className="text-[26px]">
            solutions added in our proprietary panel <br /> in last year.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
