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
    <>
      <div className="flex flex-row mt-14">
        <div className="dark:bg-black w-64 min-h-screen flex items-center flex-col justify-start border-r-2 border-grey">
          <div className="logo mb-14">
            <img src="./logon.png" alt="" />
           </div>
          <nav className="sideNav">
            <ul className="">
              <SideBarMenuItem Icon={HomeSvg} title={"Home"} to={"./"} />
              <SideBarMenuItem Icon={StoreSvg} title={"Store"} to={"./"} />
              <SideBarMenuItem Icon={LibrarySvg} title={"Library"} to={"./"} />
              <SideBarMenuItem Icon={PeopleSvg} title={"Friends"} to={"./"} />
              <SideBarMenuItem Icon={LiveSvg} title={"Live"} to={"./"} />
            </ul>
          </nav>
        </div>
        <div className="ml-6 mr-12 w-full">
          <>
            <TopHeader />
            {children}
          </>
        </div>
      </div>
    </>
  );
};
