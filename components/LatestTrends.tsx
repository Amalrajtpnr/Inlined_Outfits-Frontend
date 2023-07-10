import React from "react";
import Card from "./Card";
import Personalize from "./Personalize";

function LatestTrends() {
  return (
    <div className="w-full min-h-[140vh] flex flex-col items-center justify-start  ">
      <h1 className="text-[65px]  text-black font-museo tracking-wider">
        Fashion Up Your Looks
      </h1>
      <div className="w-[80%] h-[50%]  flex flex-col items-start justify-start ">
        <h1 className="text-[30px]  text-[#A96500] font-museo">
          Latest Trending
        </h1>
        <div className="w-[100%] h-[70vh] flex flex-row items-center justify-between mt-2">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div className="w-[80%] h-[55%]  flex flex-col items-start justify-start ">
        <h1 className="text-[30px]  text-[#A96500] font-museo">
        Personalize your tees
        </h1>
      <div className="w-full h-[100%] flex flex-row items-center justify-between mt-2">
      <Personalize/>
        <Personalize/>
        <Personalize/>
        <Personalize/>
      </div>

      </div>
    </div>
  );
}

export default LatestTrends;
