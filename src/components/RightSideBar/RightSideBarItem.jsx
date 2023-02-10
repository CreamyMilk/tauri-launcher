import React from "react";

const RightSideBarItem = ({ title, imgPath }) => {
  return (
    <div className="flex items-center w-52 h-16 dark:hover:bg-black pl-1 pb-1 mb-4 cursor-pointer">
      <img src={imgPath} className="h-12 w-12" alt="suggestBanner1" />
      <h4 className="text-sm ml-4">{title}</h4>
    </div>
  );
};

export default RightSideBarItem;
