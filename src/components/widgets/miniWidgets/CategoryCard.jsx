import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";

const CategoryCard = ({ cat }) => {
  // console.log(cat);

  return (
    <div className="flex flex-col overflow-visible  py-4 items-center space-y-2">
      {/* Circle container */}
      <div
        className={` shadow-md hover:shadow-xl hover:-translate-y-2 p-3 w-[132px] h-[132px] transition-all ease-in-out duration-150 flex items-center border-2 justify-center bg-${cat.color}-600  rounded-full`}
      >
        <div className="flex flex-col items-center justify-center p-0">
          <div className={`relative w-16 h-16 p-3  bg-transparent`}>
            <Image src={`/${cat.image}`} alt={cat.name} fill />
          </div>
        </div>
      </div>

      {/* Title below circle */}
      <div className="text-[16px] font-semibold text-gray-700 pl-1  pt-2  text-center">
        {cat.name}
      </div>
    </div>
  );
};

export default CategoryCard;
