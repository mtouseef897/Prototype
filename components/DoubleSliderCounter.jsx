
import React, { useState } from "react";
import RangeSlider from "./RangeSlider";
import Digits from "./Digits";


const DoubleSliderCounter = () => {
  const [peopleCount, setPeopleCount] = useState({
    min: 100,
    max: 400,
  });
  const [peopleCount1, setPeopleCount1] = useState({
    min: 100,
    max: 400,
  });
  return (
    <>
      <div className="mt-[86px]">

        <Digits digitvalue={peopleCount}/>
        <RangeSlider

        value={{ min: 10, max: 1000 }}
        from={100}
        to={400}
        onChange={(e) => {
          setPeopleCount1({
            min: e.min,
            max: e.max
          });
        }}
        setPeopleCount={setPeopleCount}
        tooltipPosition="under"
        tooltipVisibility="always"
      />
      </div>
     
    </>
  );
};

export default DoubleSliderCounter;
