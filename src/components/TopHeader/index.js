import React from "react";
import { NotificationSvg, SearchSvg } from "../../svgs/SideBarIcon";
import Button from "../Button";

export const TopHeader = () => {
  return (
    <div className="flex justify-between items-center my-5">
      <div className="flex items-center">
        <Button>Discover</Button>
        <Button>Browse</Button>
        <Button>Wishlist</Button>
      </div>
      <div className="flex items-center">
        <i class="fa-solid fa-bell text-xl"></i>
        <div className="flex ml-8 items-center dark:bg-black rounded-full gap-2 py-2">
          <i class="fa-solid fa-magnifying-glass text-xl"></i>
          <input
            className="dark:bg-black pl-2 rounded-full focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};
