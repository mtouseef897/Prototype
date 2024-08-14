import React from "react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import DoubleSliderCounter from "@/components/DoubleSliderCounter";


const Page1 = () => {

  return (
    <div className=" flex-1 text-white flex flex-col items-center justify-center ">
      <Heading>SELEZIONA IL NUMERO DI PARTECIPANTI</Heading>
      <Text className="max-w-[354px]">
      Scorri con lo slider per scegliere il numero
      di persone che parteciperanno al tuo evento.Touseef
      </Text>
      <DoubleSliderCounter/>
      <Button icon={true} next={true}>inizia</Button>

    </div>
  );
};

export default Page1;
