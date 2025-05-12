"use client";
import { useState } from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { AddToCart } from "@/redux/silice/CartSlice";
import { AddToWishList } from "@/redux/silice/WishListSlice";
import { callPrivateApi } from "@/libs/CallApis";
import { userId } from "@/libs/Token";
export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  // console.log("product", product);
  const handleAddToCart = async (item) => {
    dispatch(AddToCart(item));
    // Instead of Formpayload, use JSON
    const payload = {
      productId: item._id,
      userId: userId,
      quantity: "1",
    };

    console.log("payload product JSON", payload);

    try {
      const res = await callPrivateApi("/cart", "POST", payload);
      console.log("res in cart", res);
      if (res.status == 200 || res.status == 201) {
        toast.success(res.message || "Item added to cart");
      }
    } catch (error) {
      toast.success(error.message || "Failed to add in cart");
    }
  };
  const images = [
    "/images/dummy.png", // index 0 image
    "/images/dummy.png", // index 1 image (on hover)
  ];
  const handleAddToWish = async (item) => {
    dispatch(AddToWishList(item));
    // Instead of Formpayload, use JSON
    const payload = {
      productId: item._id,
      userId: userId,
      quantity: "1",
    };

    console.log("payload product JSON", payload);

    try {
      const res = await callPrivateApi("/wish", "POST", payload);
      console.log("res in wish", res);
      if (res.status == 200 || res.status == 201) {
        toast.success(res.message || "Item added to Wish List");
      }
    } catch (error) {
      toast.success(error.message || "Failed to add in Wish List");
    }
  };

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
          className={`absolute top-2 right-2 flex gap-2 p-2 flex-col bg-black/10 rounded-md transition-all duration-300 ${
            hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <button className="bg-white group hover:bg-blue-600  py-1 px-[6px]  rounded-full group-hover: hover:scale-105 transition">
            <span className="text-black group-hover:text-white transition-colors duration-200">
              <FavoriteBorderIcon
                fontSize="small"
                onClick={() => handleAddToWish(product)}
              />
            </span>
          </button>
          <button className="bg-white group hover:bg-blue-600   py-1 px-[6px] rounded-full group-hover: hover:scale-105 transition">
            <span className="text-black group-hover:text-white transition-colors duration-200">
              <ShoppingCartIcon
                fontSize="small"
                onClick={() => handleAddToCart(product)}
              />
            </span>
          </button>
          <button className="bg-white group hover:bg-blue-600  py-1 px-[6px] rounded-full hover:scale-105 transition">
            <span className="text-black group-hover:text-white transition-colors duration-200">
              <VisibilityIcon fontSize="small" />
            </span>
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
      <ToastContainer />
    </div>
  );
}
