import React from "react";

const Button = ({ text, tailwindClasees = "p-3 uppercase" }) => {
  return (
    <button
      className={`bg-blue-500 ${tailwindClasees} font-bold text-sm  text-white`}
    >
      {text}
    </button>
  );
};

export default Button;
