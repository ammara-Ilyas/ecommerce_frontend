import React from "react";
import { IoMdArrowRoundForward } from "react-icons/io";

const Button = ({
  text,
  tailwindClasees = "p-3 uppercase",
  handleClick = {},
}) => {
  return (
    <button
      onClick={handleClick}
      className={`bg-blue-500 ${tailwindClasees} font-bold text-sm  text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
export const SeeAllButton = ({ text, handleNavigate }) => {
  return (
    <button
      className=" bg-gray-100 flex gap-1 items-center justify-center shadow-md border rounded-md hover:bg-gray-200 px-3 py-2 duration-150 transition-all ease-in-out "
      onClick={handleNavigate}
    >
      {text}
      <span className="text-sm">
        <IoMdArrowRoundForward className="text-sm" />
      </span>
    </button>
  );
};

export const CartButton = ({
  children,
  className = "",
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export const Heading = ({ text }) => {
  return (
    <h2 className="text-black ml-16   text-sm xs:text-xl font-semibold  letter-wide">
      {text}
    </h2>
  );
};
