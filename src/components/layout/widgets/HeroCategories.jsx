"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const HeroCategories = () => {
  const categories = useSelector((state) => state.product.categories);
  const [isOpen, setIsOpen] = useState(false);

  const CategoriesList = [
    { name: "Men's Clothing", link: "/" },
    { name: "Women's Clothing", link: "/" },
    { name: "Kid's Clothing", link: "/" },
    { name: "Formal Wear", link: "/" },
    { name: "Casual Wear", link: "/" },
    { name: "Sportswear", link: "/" },
    { name: "Outerwear", link: "/" },
    { name: "Activewear", link: "/" },
    { name: "Denim & Jeans", link: "/" },
    { name: "Accessories", link: "/" },
    { name: "Footwear", link: "/" },
    { name: "Winter Wear", link: "/" },
  ];

  const handleOpenDepartment = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="relative flex flex-col w-full ">
      <div
        className="relative flex items-center gap-3 p-3 text-white bg-blue-500 cursor-pointer"
        onClick={handleOpenDepartment}
      >
        <FaBars className=" text-[10px] sm:text-sm md:text-lg xl:text-xl" />
        <span className=" text-[10px] sm:text-sm md:text-lg">
          All Departments
        </span>
        <FaAngleDown className=" hidden sm:block sm:text-sm md:text-lg" />
      </div>

      {isOpen && (
        <ul className="absolute top-full left-0 z-40 w-full max-h-60 overflow-y-auto bg-white shadow-md border rounded-md p-2 sm:p-3">
          {CategoriesList.map((item, i) => (
            <li
              key={i}
              className="border-b last:border-none py-2 px-1 hover:bg-gray-100 transition"
            >
              <Link href={item.link} className="text-sm sm:text-base block">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeroCategories;
