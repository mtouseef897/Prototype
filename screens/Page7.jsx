import React from "react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import RegForm from "@/components/RegForm";

const Page7 = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] w-full text-white flex flex-col items-center  ">
      <Heading className="">
      COMPLETA LA TUA RICHIESTA
      </Heading>
      <Text>
      Inserite i vostri dati.
      </Text>

   
      <RegForm/>
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
