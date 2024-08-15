import React, { useState } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import Heading from "./Heading";
import { IoIosArrowDown } from "react-icons/io";
import AnimatedContainer from "./AnimatedContainer";
import animation from "@/animation";


const font_Plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "400",
});

const RegForm = () => {
  const [open, setOpen] = useState(false)
  const eventslist = [
    "Congresses",
    "Exhibitions and exhibitions",
    "Stages and sporting events",
    "Conferences and work meetings",
    "Gala dinners Weddings",
    "Training courses and seminars",
    "Concerts and theatrical events",
    "Fashion shows",
    "Shows",
    "Corporate lunches and dinners",
    "Film reviews",
  ];
  return (
    <form
      action=""
      className={`w-full max-w-[925px]  ${font_Plus_Jakarta_Sans.className} my-12 capitalize`}
    >
      <div className="flex md:items-center gap-5 flex-col md:flex-row">
        <div className="flex-1">
          <div>
            <label htmlFor="" className="text-[16px] font-medium">
              Richiedente
            </label>
          </div>
          <input
            type="text"
            placeholder="Type Here..."
            className="border border-white rounded-[13px] border-opacity-10 bg-white/10 backdrop-blur-2xl p-6 mt-3 w-full"
          />
        </div>
        <div className="flex-1">
          <div>
            <label htmlFor="" className="text-[16px] font-medium">
              Nome e Cognome
            </label>
          </div>
          <input
            type="text"
            placeholder="Type Here..."
            className="border border-white rounded-[13px] border-opacity-10 bg-white/10 backdrop-blur-2xl p-6 mt-3 w-full"
          />
        </div>
        <div className="flex-1">
          <div>
            <label htmlFor="" className="text-[16px] font-medium">
              telefono
            </label>
          </div>
          <input
            type="text"
            placeholder="Type Here..."
            className="border border-white rounded-[13px] border-opacity-10 bg-white/10 backdrop-blur-2xl p-6 mt-3 w-full"
          />
        </div>
      </div>
      <div className="flex md:items-center gap-5 flex-col md:flex-row">
        <div className="flex-1">
          <div>
            <label htmlFor="" className="text-[16px] font-medium">
              Data inizio evento
            </label>
          </div>
          <input
            type="date"
            placeholder="Type Here..."
            className="border border-white rounded-[13px] border-opacity-10 bg-white/10 backdrop-blur-2xl p-6 mt-3 w-full"
          />
        </div>
        <div className="flex-1">
          <div>
            <label htmlFor="" className="text-[16px] font-medium">
              Data fine evento
            </label>
          </div>
          <input
            type="date"
            placeholder="Type Here..."
            className="border border-white rounded-[13px] border-opacity-10 bg-white/10 backdrop-blur-2xl p-6 mt-3 w-full"
          />
        </div>
      </div>
      <Heading className="!text-[32px] !text-start mt-[44px]">
        IMPOSTA ORA
      </Heading>
      <div className="flex md:items-center gap-5 flex-col md:flex-row mt-6">
        <div className="flex-1">
          <div>
            <label htmlFor="" className="text-[16px] font-medium">
              Ora inizio
            </label>
          </div>
          <input
            type="text"
            placeholder="Type Here..."
            className="border border-white rounded-[13px] border-opacity-10 bg-white/10 backdrop-blur-2xl p-6 mt-3 w-full"
          />
        </div>
        <div className="flex-1">
          <div>
            <label htmlFor="" className="text-[16px] font-medium">
              Ora fine
            </label>
          </div>
          <input
            type="text"
            placeholder="Type Here..."
            className="border border-white rounded-[13px] border-opacity-10 bg-white/10 backdrop-blur-2xl p-6 mt-3 w-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-5 mt-6">
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <label htmlFor="" className="text-[16px] font-medium">
              Tipologia evento
            </label>
            <div onClick={()=>setOpen(~open)} className=" cursor-pointer"><IoIosArrowDown/></div>
          </div>
          <AnimatedContainer trigger={open} animation={animation.OpenClose}><ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 border border-white rounded-[13px] border-opacity-10 bg-white/10 backdrop-blur-2xl p-6 mt-3 w-full">
            {eventslist.map((item, index) => {
              return (
                <li
                  key={"eventtype" + item}
                  className=" opacity-70 font-normal hover:text-[#E69244] cursor-pointer"
                >
                  {item}
                </li>
              );
            })}
          </ul></AnimatedContainer>
   
        </div>
      </div>
    </form>
  );
};

export default RegForm;
