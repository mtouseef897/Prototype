import Image from "next/image";
import React from "react";
import { Anton } from "next/font/google";

const font_Anton = Anton({ subsets: ["latin"], weight: "400" });

const BarOptions = () => {
  const selectoptions = [
    "welcome coffee",
    "coffee break light",
    "regular coffee break",
    "apertura bar nelle pause con consumazione a pagamento",
  ];
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${font_Anton.className} text-[26px] leading-8 my-8`}
    >
      {selectoptions.map((item,index) => {
        return (

          <div key={"baroption"+index}  className={`group p-[10px] bg-[#222323] mt-[48px] rounded-2xl hover:bg-[#DA7B22]`}>
          <button
            className={`${font_Anton.className} text-[22px] uppercase leading-[33.12px]  py-[15px] px-[32px] bg-[#343434] rounded-2xl -mt-4 flex items-center justify-center w-[328px] h-[95px] group-hover:bg-[#E69244]`}
          >
            {item}
          </button>
        </div>
        );
      })}
    </div>
  );
};

export default BarOptions;
