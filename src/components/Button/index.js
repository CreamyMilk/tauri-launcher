import React from "react";

const Button = ({ children, className }) => {
  return (
    <a
      className={
        "dark:text-white w-max text-black mr-10 bg-none hover:text-teal-600 cursor-pointer text-xl border-none " +
        className
      }
    >
      {children}
    </a>
  );
};

export default Button;
