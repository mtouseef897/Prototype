import React from "react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import BarOptions from "@/components/BarOptions";

const Page6 = () => {
  return (
    <div className=" flex-1 text-white flex flex-col items-center ">
      <Heading className="mt-32">bar</Heading>
      <Text>Scegliete l'opzione più adatta alle vostre esigenze.</Text>
      <BarOptions/>

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

export default Page6;
