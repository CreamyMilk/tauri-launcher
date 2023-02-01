import React from "react";

const SideBarMenuItem = ({ Icon, title, to }) => {
  return (
    <li className="flex w-57 h-12 justify-start pl-9 dark:text-white items-center hover:bg-black hover:text-white rounded-lg mb-4 cursor-pointer">
      <span className="w-6 h-6 mr-3">
        <Icon />
      </span>
      <a href={to} className="w-12 h-6 text-center ">
        {title}
      </a>
    </li>
  );
};

export default SideBarMenuItem;
