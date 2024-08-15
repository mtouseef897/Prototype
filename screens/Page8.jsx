import React from "react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";

const Page8 = () => {
  return (
    <div className=" flex-1 text-white flex flex-col items-center  ">
      <Heading className="mt-32">
      COME DESIDERI ESSERE CONTATTATO
      </Heading>
      <Text>
      Scegli una delle opzioni presenti e ti contatteremo al più presto.
      </Text>
      <div className="flex items-center justify-center gap-8 mt-auto">
        <Button icon={true} next={true}>
          email
        </Button>
        <Button icon={true} next={true}>
          telefono
        </Button>
      </div>
    </div>
  );
};

export default Page8;
