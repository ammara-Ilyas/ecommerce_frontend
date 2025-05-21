"use client";
import { useState } from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { FaHeart } from "react-icons/fa6";

import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star";
import { BsCart } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "@/redux/silice/CartSlice";
import { AddToWishList } from "@/redux/silice/WishListSlice";
import { callPrivateApi } from "@/libs/CallApis";
import { user } from "@/libs/Token";
export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  // console.log("product", product);
  const handleAddToCart = async (item) => {
    if (user) {
      dispatch(AddToCart(item));
      // Instead of Formpayload, use JSON
      const payload = {
        productId: item._id,
        userId: user.id,
        quantity: "1",
      };

      console.log("payload product JSON", payload);

      try {
        const res = await callPrivateApi(`/cart`, "POST", payload);
        console.log("res in wish", res, "status", res.status);
        if (res.status == 200 || res.status == 201) {
          toast.success(res.message || "Item added to cart");
        }
      } catch (error) {
        toast.error(error.message || "Failed to add in cart");
      }
    } else {
      toast.error("firstly signed in");
    }
  };

  // ✅ Access cart and wishlist from Redux
  const cartItems = useSelector((state) => state.cart.cartItems);
  const wishItems = useSelector((state) => state.wish.wishList);

  // ✅ Check if product is in cart or wishlist
  const isInCart = cartItems.some((item) => item._id === product._id);
  const isInWish = wishItems.some((item) => item._id === product._id);
  const handleAddToWish = async (item) => {
    if (user) {
      dispatch(AddToWishList(item));
      // Instead of Formpayload, use JSON
      const payload = {
        productId: item._id,
        userId: user.id,
        quantity: "1",
      };

      console.log("payload product JSON", payload);

      try {
        const res = await callPrivateApi("/wish", "POST", payload);
        console.log("res in wish", res, "status", res.status);

        if (res.status == 200 || res.status == 201) {
          toast.success(res.message || "Item added to Wish List");
        }
      } catch (error) {
        toast.error(error.message || "Failed to add in Wish List");
      }
    } else {
      toast.error("Firstly sign");
    }
  };

  return (
    <div
      className="relative w-full  rounded-xl overflow-hidden shadow-lg bg-white transition-all duration-300 hover:shadow-xl cursor-pointer"
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
          className="w-full h-full object-cover border-b transition-all duration-500"
        />

        {/* Overlay Icons */}
        <div
          className={`absolute top-2 right-2 flex gap-2 p-2 flex-col bg-transparent rounded-md transition-all duration-300 ${
            hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          {/* Wishlist Button */}
          <button
            className={`bg-white shadow-md group py-1 px-[6px] rounded-full hover:scale-105 transition ${
              isInWish ? "text-red-500" : " hover:bg-blue-600"
            }`}
          >
            <span
              className={`group-hover:text-white transition-colors text-sm duration-200 ${
                isInWish ? "text-red-500" : "text-black"
              }`}
              onClick={() => handleAddToWish(product)}
            >
              {!isInWish ? (
                <FavoriteBorderIcon fontSize="small" />
              ) : (
                <FaHeart />
              )}
            </span>
          </button>

          {/* Cart Button */}
          <button
            className={`shadow-md bg-white group py-2 px-[6px] rounded-full hover:scale-105 transition 
               hover:bg-blue-600
            `}
          >
            <span
              className={`group-hover:text-white transition-colors duration-200 ${
                isInCart ? "text-red-500" : "text-black"
              }`}
              onClick={() => handleAddToCart(product)}
            >
              {!isInCart ? <BsCart /> : <FaShoppingCart />}
            </span>
          </button>
          <button className="bg-white shadow-md group hover:bg-blue-600  py-1 px-[6px] rounded-full hover:scale-105 transition">
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
      <ToastContainer
        position="top-right"
        autoClose={500} // 1 second
        newestOnTop
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        toastClassName="!w-[200px] !text-sm"
      />
    </div>
  );
}
