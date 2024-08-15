import React from "react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";

const Page7 = () => {
  return (
    <div className=" flex-1 text-white flex flex-col items-center  ">
      <Heading className="mt-32">
      COMPLETA LA TUA RICHIESTA
      </Heading>
      <Text>
      Inserite i vostri dati.
      </Text>
      <div className="flex items-center justify-center gap-8 mt-auto">
        <Button icon={true} next={false}>
          indietro
        </Button>
        <Button icon={true} next={true}>
          Continua
        </Button>
      </div>
    </div>
  );
};

export default Page7;
