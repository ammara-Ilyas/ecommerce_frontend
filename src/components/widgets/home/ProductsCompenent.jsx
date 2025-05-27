import React from "react";
import PopularPRoducts from "./PopularProductsSlider";
import NewArrival from "./NewArrival";
import DealSlider from "./DealSlider";
import Image from "next/image";
import { StickyCard } from "../miniWidgets/CategoryCard";

const Products = () => {
  const images = [
    "/images/home/sale_01.jpg",
    "/images/home/sale_02.jpg",
    "/images/home/sale_03.jpg",
    "/images/home/sale_04.jpg",
  ];
  return (
    <div className="relative w-[95%] mx-auto flex ">
      {/* Left Sticky Image Section */}
      <div className="w-[22%] relative">
        <StickyCard />
      </div>
      {/* Right Scrollable Content */}
      <div className="w-[78%]  ">
        <PopularPRoducts />
        <NewArrival />
        <DealSlider images={images} height="h-[200px]" />
      </div>
    </div>
  );
};

export default Products;
