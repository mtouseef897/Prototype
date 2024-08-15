import Image from "next/image";
import React from "react";
import ImgPlaceholder from "/public/placeholder.png";
import { Bebas_Neue } from "next/font/google";
import { useEvent } from "@/context/EventContext";

const font_Bebas_Neue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

const RoomSetups = () => {
  const rooms = [
    {
      name: "PLATEA",
      spec: "(675 pax)",
    },
    {
      name: "BANCHI DI SCUALA",
      spec: "(550 pax)",
    },
    {
      name: "BANQUETING",
      spec: "(368 pax)",
    },
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
      className={`flex items-center justify-center flex-wrap gap-8 ${font_Bebas_Neue.className} text-[26px] leading-8 mt-[71px] mb-4`}
    >
      {rooms.map((room, index) => {
        return (
          <div
          onClick={()=>updateRoomSetup(room.name)}
            key={"room" + room.name}
            className={`cursor-pointer flex flex-col items-center justify-center gap-2 ${state.roomsetup===room.name?"text-bgorange":"text-white"}`}
          >
            <div
           
              className={` w-[232px] h-[232px] border  bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-2xl ${state.roomsetup===room.name?"border-bgorange":"border-white border-opacity-10"}`}
            >
              <Image
                src={ImgPlaceholder}
                className="w-[88px] h-[88px] opacity-10"
              />
            </div>
            <div>{room.name}</div>
            <div>{room.spec}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RoomSetups;
