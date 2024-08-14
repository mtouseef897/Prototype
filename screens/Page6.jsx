import React from "react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";

const Page6 = () => {
  return (
    <div className=" flex-1 text-white flex flex-col items-center justify-center ">
      <Heading>
        HAI SCELTO LA SALA "ZEUS" - 780MQ SELEZIONA IL TUO ALLESTIMENTO
      </Heading>
      <Text>
      Per questa sala ci sono disponibili 3 tipologie di allestimenti.
      </Text>
      <Button icon={true} next={true}>
        Continua
      </Button>
    </div>
  );
};

export default Page6;
