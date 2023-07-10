import Link from "next/link";
import React from "react";

const SideBarMenuItem = ({ Icon, title, to }) => {
  return (
    <li className="flex justify-start -ml-3 dark:text-white text-black items-center my-6 cursor-pointer">
      <span className="w-8 mr-3 text-xl">{Icon}</span>
      <Link href={to} className="w-12 hover:text-teal-600 text-xl text-center">
        {title}
      </Link>
    </li>
  );
};

export default SideBarMenuItem;
