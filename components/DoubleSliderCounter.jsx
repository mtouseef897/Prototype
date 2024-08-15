import { Anton } from "next/font/google";
import React, { useState } from "react";
import { RangeSlider } from "react-double-range-slider";
import "react-double-range-slider/dist/cjs/index.css";
import AnimatedNumbers from "react-animated-numbers"
import SlotCounter from 'react-slot-counter';

const font_Anton = Anton({ subsets: ["latin"], weight: "400" });

const DoubleSliderCounter = () => {
  const [peopleCount, setPeopleCount] = useState({
    min: 100,
    max: 400,
  });
  return (
    <>
      <div className="mt-[86px]">
        <div
          className={`mx-auto max-w-[293px] flex items-center justify-center gap-2 border py-[50px] px-[70px] border-white border-opacity-10 rounded-xl bg-white/5 backdrop-blur-2xl text-[48px] ${font_Anton.className} `}
        >
     

          <SlotCounter value={peopleCount.min} />
          <div>-</div>
          <SlotCounter value={peopleCount.max} />


        </div>
        <RangeSlider

        value={{ min: 10, max: 1000 }}
        from={100}
        to={400}
        onChange={(e) => {
          setPeopleCount({
            min: e.min,
            max: e.max
          });
        }}
        tooltipPosition="under"
        tooltipVisibility="always"
      />
      </div>
     
    </>
  );
};

export default DoubleSliderCounter;
