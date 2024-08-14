import React from "react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";


const Page1 = () => {
  return (
    <main className=" flex-1 text-white flex flex-col items-center justify-center ">
      <Heading>SELEZIONA IL NUMERO DI PARTECIPANTI</Heading>
      <Text className="text-[46px] opacity-60 ">
      Scorri con lo slider per scegliere il numero
      di persone che parteciperanno al tuo evento.
      </Text>
      <Button icon={true} next={true}>inizia</Button>

    </main>
  );
};

export default Page1;
