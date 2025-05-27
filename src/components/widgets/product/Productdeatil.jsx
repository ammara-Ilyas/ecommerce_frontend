"use client";
import Image from "next/image";
import { useState } from "react";
import { CartButton } from "@/components/miniWidgets/Button";
import { Rating } from "@mui/material";
import { AiOutlineHeart } from "react-icons/ai";
import { ProductImageSlider } from "./Sliders";

const ProductDetail = ({ product }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Left side images */}
      <ProductImageSlider images={product.images} />

      {/* Right side details */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-semibold">{product.product}</h2>
        <div className="text-sm text-gray-500">
          Brand: <span className="text-black font-medium">{product.brand}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-gray-500 line-through">
            Rs: {product.oldPrice}
          </div>
          <div className="text-red-600 font-semibold">
            Rs: {product.newPrice}
          </div>
        </div>

        <div className="text-green-600 font-medium">IN STOCK</div>

        <p className="text-sm text-gray-600 max-w-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>

        {/* Rating */}
        <Rating name="read-only" value={product.rating} readOnly size="small" />

        <div>
          {" "}
          <CartButton className="bg-red-600 hover:bg-red-700 text-white px-6">
            Add To Cart
          </CartButton>
          <CartButton className="bg-blue-600 hover:bg-blue-700 text-white px-6">
            <AiOutlineHeart />
          </CartButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
