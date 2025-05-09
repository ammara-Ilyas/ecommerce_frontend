"use client";
import { useState } from "react";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star";

export default function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  // console.log("product", product);

  const images = [
    "/images/dummy.png", // index 0 image
    "/images/dummy.png", // index 1 image (on hover)
  ];

  return (
    <div
      className="relative w-full border-2 border-black rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={
            hovered
              ? product?.images?.[1] ??
                product?.images?.[0] ??
                "/images/dummy.png"
              : product?.images?.[0] ?? "/images/about/service-03.jpg"
          }
          alt="product"
          fill
          className="w-full h-full object-cover transition-all duration-500"
        />

        {/* Overlay Icons */}
        <div
          className={`absolute top-2 right-2 flex gap-2 p-2 bg-black/10 rounded-md transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <button className="bg-white p-1 rounded-full group-hover: hover:scale-105 transition">
            <FavoriteBorderIcon
              className="hover:text-green-600 text-black group"
              fontSize="small"
            />
          </button>
          <button className="bg-white p-1 rounded-full hover:scale-105 transition">
            <VisibilityIcon
              className="hover:text-green-600 text-black"
              fontSize="small"
            />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-1">
        <p className="text-gray-500 text-sm">Fashion</p>
        <h3 className="font-semibold text-base text-gray-800 truncate">
          {product.title}
        </h3>
        <div className="flex items-center text-yellow-500 text-sm">
          {Array.from({ length: 4 }).map((_, i) => (
            <StarIcon key={i} fontSize="small" />
          ))}
          <StarIcon fontSize="small" className="text-gray-300" />
        </div>
        <p className="text-sm text-green-600">By Altecia</p>
        <div className="flex items-center gap-2">
          <span className="text-green-600 font-bold">
            Rs {product.newPrice}
          </span>
          <span className="text-gray-400 line-through text-sm">
            Rs {product.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
}
