import { Anton } from "next/font/google";
import React, { useState } from "react";
import { RangeSlider } from "react-double-range-slider";
import "react-double-range-slider/dist/cjs/index.css";

const font_Anton = Anton({ subsets: ["latin"], weight: "400" });

const DoubleSliderCounter = () => {
  const [peopleCount, setPeopleCount] = useState({
    min: 100,
    max: 200,
  });
  return (
    <>
      <div className="mt-[86px]">
        <div
          className={`flex items-center justify-center gap-2 border py-[50px] px-[70px] border-white border-opacity-10 rounded-xl bg-white/5 backdrop-blur-2xl text-[48px] ${font_Anton.className} `}
        >
          <div>{peopleCount.min}</div>
          <div>-</div>
          <div>{peopleCount.max}</div>
        </div>
        <RangeSlider
        value={{ min: 10, max: 1000 }}
        
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
