"use client";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "@/components/miniWidgets/Button";

const HeroSearch = () => {
  const [search, setSearch] = useState("");

  const handleClick = () => {
    console.log("search", search);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 xl:gap-4 w-full">
      {/* Search Bar */}
      <div className="w-full h-[40px] md:w-[90%] lg:w-[70%] mx-0">
        <div className="flex  border border-gray-300 rounded overflow-hidden w-full">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="What do you need?"
            className="flex-grow p-3 outline-none placeholder:text-sm text-sm sm:text-base"
          />
          <Button
            text="Search"
            tailwindClasees="p-3 w-[35%] text-[10px] sm:text-sm md:text-xl border border-blue-600 sm:w-[30%] md:w-[25%] lg:w-[20%] active:bg-blue-700"
            handleClick={handleClick}
          />
        </div>
      </div>

      {/* Phone Section */}
      <div className="hidden lg:flex items-center gap-4">
        <div className="p-3 bg-gray-200 rounded-full group hover:bg-blue-500 duration-200">
          <FaPhoneAlt className="text-blue-500 group-hover:text-white transition" />
        </div>
        <div className="text-sm sm:text-base">
          <h5 className="font-semibold">+65 11.188.888</h5>
          <span className="text-gray-600">Support 24/7 time</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
