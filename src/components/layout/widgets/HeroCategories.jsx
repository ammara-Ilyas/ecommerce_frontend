"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const HeroCategories = () => {
  const categories = useSelector((state) => state.product.categories);
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
    {
      name: "Denim & Jeans",
      link: "/",
    },
    {
      name: "Denim & Jeans",
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
    <div className=" relative flex flex-col">
      <div
        className="relative flex w-[80%] bg-blue-500 focus:bg-blue-600 p-3 text-white items-center gap-4"
        onClick={handleOpenDepartment}
      >
        <div className="">
          <FaBars className="" />
        </div>{" "}
        <span className="text-xl text-white">All departments</span>
        <FaAngleDown className="" />
      </div>
      {isOpen ? (
        <ul className=" absolute z-40 bg-white py-3 pl-2 ml-0 top-[53px] left-0 flex flex-col gap-4 w-[80%] p-5 mt-0 bg-transparent  border-[1px]">
          {CategoriesList.map((item, i) => (
            <li key={i} className="border-b">
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
