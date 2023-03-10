import React from "react";
import { RightArrowSvg } from "../../svgs/SideBarIcon";
import Button from "../Button";

const Banner = () => {
  return (
    <div
      className="w-4/5 h-112 pl-7 pt-5 flex-col justify-between rounded-l-xl cursor-pointer"
      style={{ backgroundImage: 'url("./images/mainBanner.png")' }}
    >
      <div className="w-full h-3/6">
        <h1 className="font-mont font-extrabold text-2xl">Fortnite</h1>
      </div>
      <div className="h-16 w-112">
        <h4 className="text-white">Update</h4>
        <h2 className="font-mont font-extrabold text-white text-2xl mt-1">
          The hunt is on in Fortnite Chapter 2 - Season 5: Zero Point.
        </h2>
        <Button className="bg-blue-600 text-white hover:text-inherit rounded-xl mt-7 flex gap-2 p-4 items-center">
          <span>Play for free</span>
          <RightArrowSvg />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
