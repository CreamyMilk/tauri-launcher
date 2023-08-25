import React from "react";

const Button = ({ children, className }) => {
  return (
    <a
      className={
        "w-max text-black mr-10 bg-none hover:text-teal-600 cursor-pointer text-xl border-none " +
        className
      }
    >
      {children}
    </a>
  );
};

export default Button;
