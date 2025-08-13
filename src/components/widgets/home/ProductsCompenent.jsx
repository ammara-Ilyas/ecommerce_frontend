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
    <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-4 bg-white text-black">
      {/* Left Sticky Image Section */}
      <div className="w-full md:w-1/4 relative bg-gray-100 rounded-lg mb-4 md:mb-0">
        <StickyCard />
      </div>
      {/* Right Scrollable Content */}
      <div className="w-full md:w-3/4 bg-white">
        <PopularPRoducts />
        <NewArrival />
        <DealSlider images={images} height="h-[200px]" />
      </div>
    </div>
  );
};

export default Products;
