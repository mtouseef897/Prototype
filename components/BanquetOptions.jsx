import Image from "next/image";
import React from "react";
import { Anton } from "next/font/google";

const font_Anton = Anton({ subsets: ["latin"], weight: "400" });

const BanquetOptions = () => {
  const selectoptions = [
    "colazione di lavoro a buffet con tavoli d'appogio",
    "colazione di lavoro a buffet con sedute",
    "colazione di lavoro servita",
    "cena a buffet in piedi",
    "cena a buffet servita",
    "cena di gala",
  ];
  return (
    <div
      className={`grid grid-cols-3 gap-8 ${font_Anton.className} text-[26px] leading-8 mt-8`}
    >
      {selectoptions.map((item,index) => {
        return (

          <div key={"banquetoption"+index}  className={`p-[10px] bg-[#222323] mt-[48px] rounded-2xl `}>
          <button
            className={`${font_Anton.className} text-[22px] uppercase leading-[33.12px]  py-[15px] px-[32px] bg-[#343434] rounded-2xl -mt-4 flex items-center justify-center w-[328px] h-[95px]`}
          >
            {item}
          </button>
        </div>
        );
      })}
    </div>
  );
};

export default BanquetOptions;
