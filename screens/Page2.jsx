import React from "react";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import RoomSetups from "@/components/RoomSetups";

const Page2 = () => {
  return (
    <div className=" flex-1 text-white flex flex-col items-center ">

      <Heading className="max-w-[520px]">
        HAI SCELTO LA SALA{" "}
        <span style={{ color: "#DA7B22" }}>&ldquo;ZEUS&rdquo;</span> - 780MQ
        SELEZIONA IL TUO ALLESTIMENTO
      </Heading>

      <Text className="mt-7">
        Per questa sala ci sono disponibili 3 tipologie di allestimenti.
      </Text>
      <RoomSetups />
      <Button icon={true} next={true} className="!md:mt-auto">
        Continua
      </Button>
    </div>
  );
};

export default Page2;
