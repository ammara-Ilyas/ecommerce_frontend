"use client";
import React, { useState } from "react";

//////////icon
import { FaPhoneAlt } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
/////////////////////import cart reduce
import { useDispatch, useSelector } from "react-redux";
// import { setProducts } from "@/redux/slice/cartSlice";

import Button from "@/components/miniWidgets/Button";
const HeroSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   const productsList: Product[] = useSelector(
  //     (state: { cart: { productList] } }) => state.cart.productList
  //   );
  //   const dispatch = useDispatch();
  // console.log("prodList", productsList);
  const category = [];
  //   [...new Set(productsList.map((item) => item.category))];
  // console.log("cate", category);
  const handleOpenCategories = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };
  ///////////////filterProduct on category
  //   const handleCategories = (cate) => {
  //     const filterdedProducts = productsList.filter((item) => {
  //       return item.category.toUpperCase() == cate.toUpperCase();
  //     });
  //     console.log("filter", filterdedProducts);
  //     dispatch(setProducts(filterdedProducts));
  //   };
  return (
    <div className=" flex justify-between items-center pb-10">
      <div className=" flex relative items-center gap-2 w-[70%] border-[1px] ">
        <form action="#" className="flex  border-blue-500 w-full ">
          <div
            className=" relative  flex items-center justify-center gap-2  w-[35%] p-[6px]"
            onClick={handleOpenCategories}
          >
            All Categories
            <FaAngleDown className="text-gray-500" />
          </div>
          <div className="border-[1px] border-r-gray-400  "></div>
          <input
            type="text"
            placeholder="What do you need?"
            className="p-3 border-none outline-none w-[70%] border-gray-300 "
          />

          <Button text="Search" tailwindClasees="p-3 w-[20%]  " />
        </form>
        {isOpen ? (
          <ul className="absolute flex flex-col gap-4 w-[28%]  bg-transparent z-50 bg-white py-6 border-[1px] pl-2 ml-0 top-12 left-0">
            {category &&
              category.map((item, i) => (
                <li
                  className="capitalize cursor-pointer"
                  key={i}
                  // onClick={() => handleCategories(item)}
                >
                  {item}
                </li>
              ))}
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className="hero__search__phone flex items-center">
        <div className="p-4 bg-gray-200 rounded-full group hover:bg-green-500 duration-200">
          <FaPhoneAlt className="text-sm text-green-500 group-hover:text-white duration-200" />
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
