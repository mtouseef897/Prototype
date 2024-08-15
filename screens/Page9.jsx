import React from "react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import ImgPlaceholder from '/public/placeholder.png'
import Image from "next/image";

const Page9 = () => {
  return (
    <div className=" flex-1 text-white flex flex-col items-center ">
      <Heading className="mt-32">
      VISUALIZZA LA TUA SALA
      </Heading>
      <Text>
      Ora puoi visualizzare la stanza che hai creato. Clicca sull'icona e inserisci il tuo evento.
      </Text>
      <div className='w-[232px] h-[232px] border border-white border-opacity-10 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-2xl mt-8'>
                <Image 
                src={ImgPlaceholder}
                className='w-[88px] h-[88px] opacity-10'
                />
            </div>
      <Button icon={true} next={true} className="mt-auto">
      INVIA LA TUA RICHIESTA
      </Button>
    </div>
  );
};

export default Page9;
