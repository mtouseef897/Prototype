import Image from "next/image";
import React from "react";
import ImgPlaceholder from "/public/placeholder.png";
import { Bebas_Neue } from "next/font/google";

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
  return (
    <div
      className={`grid grid-cols-5 gap-8 ${font_Bebas_Neue.className} text-[26px] leading-8`}
    >
      {equipments.map((item,index) => {
        return (
          <div key={"equipment"+index} className="flex flex-col items-center justify-center gap-2">
            <div className="w-[232px] h-[232px] border border-white border-opacity-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-2xl">
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
