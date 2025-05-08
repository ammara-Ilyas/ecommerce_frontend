"use client";
import { useState } from "react";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  console.log("product", product);

  const images = [
    "/images/dummy.png", // index 0 image
    "/images/dummy.png", // index 1 image (on hover)
  ];

  return (
    <div
      className="relative w-64 rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={
            hovered
              ? product?.images?.[1] ?? product?.images?.[0] ?? "/fallback.jpg"
              : product?.images?.[0] ?? "/fallback.jpg"
          }
          alt="product"
          fill
          className="w-full h-full object-cover transition-all duration-500"
        />

        {/* Overlay Icons */}
        <div
          className={`absolute top-2 right-2 flex gap-2 p-2 bg-black/40 rounded-md transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <button className="bg-white p-1 rounded-full hover:scale-105 transition">
            <FavoriteBorderIcon className="text-green-600" fontSize="small" />
          </button>
          <button className="bg-white p-1 rounded-full hover:scale-105 transition">
            <VisibilityIcon className="text-green-600" fontSize="small" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-1">
        <p className="text-gray-500 text-sm">Fashion</p>
        <h3 className="font-semibold text-base text-gray-800 truncate">
          Altecia Tie and Dye Joggers
        </h3>
        <div className="flex items-center text-yellow-500 text-sm">
          {Array.from({ length: 4 }).map((_, i) => (
            <StarIcon key={i} fontSize="small" />
          ))}
          <StarIcon fontSize="small" className="text-gray-300" />
        </div>
        <p className="text-sm text-green-600">By Altecia</p>
        <div className="flex items-center gap-2">
          <span className="text-green-600 font-bold">Rs 1500</span>
          <span className="text-gray-400 line-through text-sm">Rs 1800</span>
        </div>
      </div>
    </div>
  );
}
