import React from "react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import ImgPlaceholder from "/public/placeholder.png";
import Image from "next/image";
import { Anton } from "next/font/google";


const font_Anton = Anton({ subsets: ["latin"], weight: "400" });

const Page9 = () => {
  return (
    <div className=" min-h-[calc(100vh-200px)] w-full text-white flex flex-col items-center ">
      <Heading className="mt-32">VISUALIZZA LA TUA SALA</Heading>
      <Text>
        Ora puoi visualizzare la stanza che hai creato. Clicca sull'icona e
        inserisci il tuo evento.
      </Text>
      <div className="w-[232px] h-[232px] border border-white border-opacity-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-2xl mt-8">
        <Image src={ImgPlaceholder} className="w-[88px] h-[88px] opacity-10" />
      </div>
      <button
        className={`${
          font_Anton.className
        } text-[15px] md:text-[22px] uppercase leading-[33.12px] tracking-wide py-[3px] px-[48px]  md:py-[8px] md:px-[100px] bg-[#E69244] rounded-full flex items-center gap-4 mt-4 `}
      >
       PDF
      </button>
      <Button icon={true} next={true} className="!md:mt-auto">
        INVIA LA TUA RICHIESTA
      </Button>
    </div>
  );
};

export default Page9;
