"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star";
import { BsCart } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "@/redux/silice/CartSlice";
import { AddToWishList } from "@/redux/silice/WishListSlice";
import { callPrivateApi } from "@/libs/CallApis";
import { getToken } from "@/libs/Token";
import Link from "next/link";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [hovered, setHovered] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const t = getToken();
    setToken(t);
  }, []);
let user = null;

if (typeof window !== "undefined") {
  try {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      user = JSON.parse(storedUser);
    }
  } catch (err) {
    console.error("Invalid user data in localStorage:", err);
    user = null;
  }
}  // console.log("product", product);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isInCart = cartItems.some((item) => item._id === product._id);
  const handleAddToCart = async (item) => {
    if (user) {
      if (isInCart) {
        toast.error("Item already in cart");
      } else {
        dispatch(AddToCart(item));
        // Instead of Formpayload, use JSON
        const payload = {
          productId: item._id,
          quantity: "1",
        };

        // console.log("payload product JSON", payload);

        try {
          const res = await callPrivateApi(
            `/cart/${user.id}`,
            "POST",
            payload,
            token
          );
          // console.log("res in wish", res, "status", res.status);
          toast.success(res.message);
        } catch (error) {
          toast.error(error.message || "Failed to add in cart");
        }
      }
    } else {
      toast.error("firstly signed in");
    }
  };

  // ✅ Access cart and wishlist from Redux

  const wishItems = useSelector((state) => state.wish.wishList);

  // ✅ Check if product is in cart or wishlist
  const isInWish = wishItems.some((pro) => pro._id === product._id);
  const handleAddToWish = async (item) => {
    if (user) {
      // Instead of Formpayload, use JSON
      if (isInWish) {
        toast.error("Item already in wish list");
      } else {
        dispatch(AddToWishList(item));

        const payload = {
          productId: item._id,
          quantity: "1",
        };

        // console.log("payload product JSON", payload);

        try {
          const res = await callPrivateApi(
            `/wish/${user.id}`,
            "POST",
            payload,
            token
          );
          // console.log("res in wish", res, "status", res.status);

          toast.success(res.message);
        } catch (error) {
          toast.error(error.message || "Failed to add in Wish List");
        }
      }
    } else {
      toast.error("Firstly sign");
    }
  };

  const cardSpring = {
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: hovered
      ? '0 8px 32px rgba(37,99,235,0.18)'
      : '0 2px 8px rgba(0,0,0,0.08)',
    config: { tension: 300, friction: 18 },
  };

  return (
    <div
      className="bg-white rounded-lg p-4 shadow-md transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
        <div className="absolute z-30 top-2 left-2 bg-blue-600 text-white px-[4px] py-[7px] rounded-full text-[10px] ">
          {product?.discount}%
        </div>
        <div
          className="relative h-[150px] sm:h-[200px] md:h-[260x] "
        >
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
            className="w-full h-full object-cover  border-b transition-all duration-500"
          />

          {/* Overlay Icons */}
          <div
            className={`absolute top-2 right-2 flex gap-2 p-2 flex-col bg-transparent rounded-md transition-all duration-300 ${
              hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            {/* Wishlist Button */}
            <button
              className={`bg-white text-black shadow-md group py-1 px-[6px] rounded-full hover:scale-105 transition hover:bg-blue-600 hover:text-white`}
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
                  <FavoriteIcon fontSize="small" />
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
              <Link
                href={`/product/${product._id}`}
                className="text-black group-hover:text-white transition-colors duration-200"
              >
                <VisibilityIcon fontSize="small" />
              </Link>
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-0 xs:space-y-1">
          <h3 className="font-semibold text-base text-gray-800 truncate">
            {product.product}
          </h3>
          <p className="text-gray-500 text-sm">{product?.category?.name}</p>
          <p className="text-sm text-green-600">In stock</p>

          <div className="flex items-center text-yellow-500 text-sm">
            {Array.from({ length: 4 }).map((_, i) => (
              <StarIcon key={i} fontSize="small" />
            ))}
            <StarIcon fontSize="small" className="text-gray-300" />
          </div>
          <p className="text-sm text-blue-600">By {product?.brand}</p>
          <div className="flex items-center gap-2">
            <span className="text-green-600 font-bold">
              Rs {product.newPrice}
            </span>
            <span className="text-gray-400 line-through text-sm">
              Rs {product.oldPrice}
            </span>
          </div>
        </div>
        <AnimatedAddToCartButton onClick={() => handleAddToCart(product)} isInCart={isInCart} />
    </div>
  );
}

function AnimatedAddToCartButton({ onClick, isInCart }) {
  const [hovered, setHovered] = useState(false);
  const btnSpring = {
    scale: hovered ? 1.08 : 1,
    boxShadow: hovered
      ? '0 4px 16px rgba(37,99,235,0.18)'
      : '0 1px 4px rgba(0,0,0,0.08)',
    config: { tension: 300, friction: 18 },
  };
  return (
      <button
        className={`mt-4 px-6 py-2 rounded bg-blue-600 text-white font-semibold transition-colors duration-200 ${isInCart ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-700'}`}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        disabled={isInCart}
      >
        {isInCart ? 'In Cart' : 'Add to Cart'}
      </button>
  );
}
