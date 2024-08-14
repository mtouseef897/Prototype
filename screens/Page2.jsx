import React from "react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";

const Page2 = () => {
  return (
    <main className=" flex-1 text-white flex flex-col items-center justify-center ">
      <Heading>
        HAI SCELTO LA SALA "ZEUS" - 780MQ SELEZIONA IL TUO ALLESTIMENTO
      </Heading>
      <Text className="text-[46px] opacity-60 ">
      Per questa sala ci sono disponibili 3 tipologie di allestimenti.
      </Text>
      <Button icon={true} next={true}>
        Continua
      </Button>
    </main>
  );
};

export default Page2;
