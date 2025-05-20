"use client";
import React, { useState } from "react";

//////////icon
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

import Button from "@/components/miniWidgets/Button";
const HeroSearch = () => {
  // console.log("cate", category);
  const [search, setSearch] = useState("");
  return (
    <div className=" flex justify-between items-center pb-10">
      <div className=" flex relative items-center gap-2 w-[70%] border-[1px] ">
        <form className="flex  border-blue-500 w-full ">
          <div className="border-[1px] border-r-gray-400  "></div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="What do you need?"
            className="p-3 border-none outline-none w-[70%] border-gray-300 "
          />

          <Button
            text="Search"
            tailwindClasees="p-3 w-[20%]  active:bg-blue-700"
          />
        </form>
      </div>
      <div className="hero__search__phone flex items-center">
        <div className="p-4 bg-gray-200 rounded-full group hover:bg-blue-500 duration-200">
          <FaPhoneAlt className="text-sm text-blue-500 group-hover:text-white duration-200" />
        </div>
        <div className=" ml-4">
          <h5 className="font-bold">+65 11.188.888</h5>
          <span>support 24/7 time</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
