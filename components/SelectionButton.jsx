import React from "react";
import { Anton } from "next/font/google";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


const font_Anton = Anton({ subsets: ["latin"], weight: "400" });

const SelectionButton = ({ children,next=false }) => {

  return (
    <div className={`p-[10px] ${next?"bg-[#DA7B22]":"bg-[#222323]"} mt-[48px] rounded-2xl max-w-[328px]`}>
      <button
        className={`${font_Anton.className} text-[22px] uppercase leading-[33.12px]  py-[15px] px-[32px] ${next?"bg-[#E69244]":"bg-[#343434]"} rounded-2xl -mt-4 flex items-center gap-4`}
      >
        {children}
      </button>
    </div>
  );
};

export default SelectionButton;
