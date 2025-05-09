"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaAngleDown } from "react-icons/fa";

const HeroCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const CategoriesList = [
    {
      name: "Men's Clothing",
      link: "/",
    },
    {
      name: "Women's Clothing",
      link: "/",
    },
    {
      name: "Kid's Clothing",
      link: "/",
    },
    {
      name: "Formal Wear",
      link: "/",
    },
    {
      name: "Casual Wear",
      link: "/",
    },
    {
      name: "Sportswear",
      link: "/",
    },
    {
      name: "Outerwear",
      link: "/",
    },
    {
      name: "Activewear",
      link: "/",
    },
    {
      name: "Denim & Jeans",
      link: "/",
    },
  ];
  const handleOpenDepartment = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };
  return (
    <div className=" flex flex-col">
      <div
        className=" flex  w-[80%] bg-green-500 p-3 text-white items-center gap-4"
        onClick={handleOpenDepartment}
      >
        <div className="">
          <FaBars className="" />
        </div>{" "}
        <span className="text-xl text-white">All departments</span>
        <FaAngleDown className="" />
      </div>
      {isOpen ? (
        <ul className="  flex flex-col gap-4 w-[80%] p-5 mt-0 bg-transparent bg-opacity-20 border-[1px]">
          {CategoriesList.map((item, i) => (
            <li key={i}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default HeroCategories;
