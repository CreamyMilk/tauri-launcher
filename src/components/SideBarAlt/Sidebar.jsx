import React from "react";
import {
  HomeSvg,
  LibrarySvg,
  LiveSvg,
  LogoSvg,
  PeopleSvg,
  StoreSvg,
} from "../../svgs/SideBarIcon";
import SideBarMenuItem from "./SideBarMenuItem";
import { TopHeader } from "../TopHeader";

export const Sidebar = ({ children }) => {
  return (
    <div className="flex min-h-screen  dark:bg-black flex-row">
      <div className="border-r-2 w-64 flex flex-col items-center border-gray-500">
        <img src="./logon1.png" alt="" className="w-32 h-28 logo" />
        <SideBarMenuItem
          Icon={<i className="fa-solid fa-house"></i>}
          title={"Home"}
          to="./"
        />
        <SideBarMenuItem
          Icon={<i className="fa-solid fa-fire-flame-curved"></i>}
          title={"Store"}
          to="./"
        />
         <SideBarMenuItem
          Icon={<i className="fa-solid fa-play"></i>}
          title={"Watch"}
          to="./streams"
        />
        <SideBarMenuItem
          Icon={<i className="fa-solid fa-user"></i>}
          title={"Profile"}
          to="./"
        />
      </div>
      <div className="ml-6 mr-12 w-full">
        <>
          <TopHeader />
          {children}
        </>
      </div>
    </div>
  );
};
