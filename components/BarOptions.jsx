import Image from "next/image";
import React from "react";
import { Anton } from "next/font/google";
import { useEvent } from "@/context/EventContext";

const font_Anton = Anton({ subsets: ["latin"], weight: "400" });

const BarOptions = () => {
  const selectoptions = [
    "welcome coffee",
    "coffee break light",
    "regular coffee break",
    "apertura bar nelle pause con consumazione a pagamento",
  ];
  const {
    state,
    updateParticipantCount,
    updateRoomSetup,
    updateEquipment,
    updateNightStay,
    updateBanquetOption,
    updateBarOption,
  } = useEvent();
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${font_Anton.className} text-[26px] leading-8 my-8`}
    >
      {selectoptions.map((item, index) => {
        return (
          <div
            key={"baroption" + index}
            onClick={() => updateBarOption(item)}
            className={` p-[10px] bg-[#222323] mt-[48px] rounded-2xl ${
              state.baroption === item && "bg-bgorange duration-200 ease-in-out"
            }`}
          >
            <button
              className={`${font_Anton.className} text-[15px] md:text-[22px] uppercase leading-[33.12px]  py-[8px] px-[12px]  md:py-[15px] md:px-[32px] bg-[#343434] rounded-2xl -mt-4 flex items-center justify-center w-[328px] h-[95px] group-hover:bg-[#E69244] ${
                state.baroption === item && "bg-fgorange duration-200 ease-in-out"
              }`}
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
