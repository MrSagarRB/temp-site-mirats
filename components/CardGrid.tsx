import React from "react";

const CardGrid = () => {
  return (
    <div className="mt-[130px] gap-[25px] grid grid-cols-1 lg:grid-cols-2 px-[20px] lg:px-0">
      <div className="bg-[#FFD6D6]  h-[600px]   lg:col-span-2 rounded-[25px] p-[70px]">
        <p className="font-[700] text-[35px] leading-[110%] ">
          $250 USD discount on your first project with Mirats Insights OTC
          Team.*
        </p>
        <div className="bg-[#5C3434] text-[20px] mt-[20px] px-[10px] py-[5px]  text-[#FFFFFF] w-fit italic">
          {" "}
          <p>USE PROMO: MIRINS_BSFY2023</p>
        </div>
        <div className="bg-[#5C3434] text-[20px] mt-[20px] px-[10px] py-[5px] text-[#FFD6D6] w-fit rounded-[34px]">
          <p>Send your first project.</p>{" "}
        </div>
      </div>
      <div className="h-[600px] rounded-[25px] px-[36px] py-[40px] border border-[#000000] relative">
        <div className="font-[700] text-[36px] leading-[110%]">
          {" "}
          <p className="text-[#838383] text-[30px]">Quick TATs</p>
          <p className="text-linerGradient1 mt-[20px]">Hey Sparsh,</p>
          <p> What’s the feasibility you’ve got on this one?</p>
        </div>
        <div className="bg-[#426AF5] mt-[20px] px-[20px] py-[10px] w-fit float-right leading-[150%] rounded-[50px] relative">
          <p className="text-[20px] text-[#fff]">
            Here you go! 750 samples <br /> within 4 days in CA.
          </p>
          <div className="bg-[#426AF5] rounded-full h-[30px] w-[30px] absolute right-[5px] -bottom-[8px]"></div>
          <div className=" font-[400] flex absolute -bottom-[35px] text-[#838383]">
            <p className="italic text-[13px]">Mirats Insights OTC ~ </p>{" "}
            <p className="text-[15px]">Sparsh Jain </p>
          </div>
        </div>
        <div className="text-[#426AF5]  text-[16px] test flex items-center absolute bottom-0 w-fit flex-col left-[100px] ">
          <p className="font-[400]"> Reach out to Sparsh at </p>
          <p className="font-[700]">bids@miratsinsights.com</p>
        </div>
      </div>
      <div className="h-[600px] rounded-[25px] border border-[#000000]"> </div>
    </div>
  );
};

export default CardGrid;
