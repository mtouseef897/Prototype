import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Text from "@/components/Text";
import React from "react";



const WelcomeScreen = () => {
  return (
    <div className=" flex-1 text-white flex flex-col items-center justify-center ">
      <Heading>Benvenuto nel tuo evento interattivo</Heading>
      <Text>
        ArtemideCongressi...il tuo spazio interattivo! Simula l'ambiente del tuo
        evento, personalizza la tua scelta in base alle persone previste ed
        invia il modulo di richiesta. Segui le istruzioni e divertiti a
        prenotare il tuo spazio per un evento di successo.
      </Text>
      <Button icon={true}>VISUALIZZA LA TUA SALA</Button>
    </div>
  );
};

export default WelcomeScreen;
