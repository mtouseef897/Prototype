import Image from "next/image";
import React from "react";
import ImgPlaceholder from "/public/placeholder.png";
import { Bebas_Neue } from "next/font/google";
import { useEvent } from "@/context/EventContext";

const font_Bebas_Neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const ExtraEquipment = () => {
  const equipments = [
    "TAVOLI RETTANGOLARI",
    "Tavoli Tondi",
    "TOVAGLIE",
    "LAPTOP",
    "PC STATION",
    "SPAZIO ESTERNO",
    "MONITOR PC",
    "ADDOBBI FLOREALI",
    "TENSO STRUTTURA",
    "REGISTRAZIONE/VIDEO",
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
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 ${font_Bebas_Neue.className} text-[26px] leading-8 my-16`}
    >
      {equipments.map((item, index) => {
        return (
          <div
            onClick={() => updateEquipment(item)}
            key={"equipment" + index}
            className={`cursor-pointer flex flex-col items-center justify-center gap-2 ${
              state.equipment.includes(item) ? "text-bgorange" : "text-white"
            }`}
          >
            <div     className={` w-[232px] h-[232px] border  bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-2xl ${state.equipment.includes(item)?"border-bgorange":"border-white border-opacity-10"}`}>
              <Image
                src={ImgPlaceholder}
                className="w-[88px] h-[88px] opacity-10"
              />
            </div>
            <div>{item}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ExtraEquipment;
