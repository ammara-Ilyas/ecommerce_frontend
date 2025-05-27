import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";

const CategoryCard = ({ cat }) => {
  // console.log(cat);

  return (
    <div className="flex flex-col overflow-visible py-2 sm:py-4 items-center space-y-2">
      {/* Circle container */}
      <div
        className={`shadow-md group hover:shadow-xl hover:-translate-y-2 p-3 w-[100px] sm:w-[132px] h-[100px]  sm:h-[132px] transition-all ease-in-out duration-150 flex items-center justify-center border-2 relative overflow-hidden rounded-full bg-${cat.color}-300`}
      >
        <Image
          src={cat.image}
          alt={cat.name}
          fill
          className="object-cover group-hover:scale-110 transition-all ease-in-out duration-150"
        />
      </div>

      {/* Title below circle */}
      <div className="text-[16px] font-semibold text-gray-700 pl-1 pt-1 sm:pt-2  text-center">
        {cat.name}
      </div>
    </div>
  );
};

export default CategoryCard;

export const StickyCard = () => {
  return (
    <div className="w-full sticky top-[60px] h-[calc(100vh-60px)] flex flex-col">
      {/* Top Image — fixed height */}
      <div className="relative h-[60%] w-full shrink-0">
        <Image
          src="/images/home/laptop_deal.jpg"
          alt="laptop deal"
          fill
          className="object-cover "
        />
      </div>

      {/* Bottom Image — fill remaining space, scrollable */}
      <div className="flex-1 h-[60%]">
        <div className="relative h-full w-full">
          <Image
            src="/images/home/fruit_deal.jpg"
            alt="fruit deal"
            fill
            className="object-cover "
          />
        </div>
      </div>
    </div>
  );
};
