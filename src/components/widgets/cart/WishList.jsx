"use client";
import React, { useEffect, useState } from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";

import Image from "next/image";
import { callPrivateApi } from "@/libs/CallApis";
import { setWishList } from "@/redux/silice/WishListSlice";
import { user } from "@/libs/Token";
import CartSkeleton from "@/components/miniWidgets/CartSkeleton";
const WishList = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.cartItems);
  const [wishListItems, setWishListItems] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true);
      try {
        const res = await callPrivateApi(`/wish/${user.id}`, "GET");
        console.log("res in wishlist", res);
        setWishListItems(res.wishlist);
        dispatch(setWishList(res.wishlist));
        // console.log("message", res.message);
      } catch (error) {
        console.log("error", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCartItems();
  }, []);
  console.log("wishlist items", wishListItems);

  const handleDelete = async (id) => {
    console.log("id in del", id);

    setLoading(true);
    try {
      const res = await callPrivateApi(`/wish/${id}`, "DELETE");
      console.log("res in  wishlist item delete ", res);
      const updated = wishListItems.filter((item) => item._id !== id);
      console.log("updated", updated);
      setWishListItems(updated);
      dispatch(setWishList(updated));
      toast.success(res.message || " wishlist item deleted successfully");
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setLoading(false);
      // to call useEffect
    }
  };

  return (
    <div className="mb-16 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-500  scrollbar-track-white w-[95%] md:w-3/4 mx-auto mt-8 bg-base-100 shadow-xl  p-24 transition flex overflow-hidden ">
      {loading ? (
        <CartSkeleton />
      ) : wishListItems.length === 0 ? (
        <div className="text-gray-600 min-h-20 flex text-center text-2xl pt-11 font-bold justify-center items-center">
          <h2>Your wish list is empty.</h2>
        </div>
      ) : (
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Your Wish List
          </h1>

          <div className="scrollbar-thin h-[350px] overflow-y-scroll">
            {wishListItems.map((product, index) => (
              <div
                key={index}
                className="flex items-center flex-col md:flex-row   justify-between border-b border-gray-300 py-4"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={product.product.images[0]}
                    alt={product.product.title}
                    width={50}
                    height={50}
                    className="h-28 w-28 md:h-16 md:w-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-bold">
                      {product.product.product}
                    </h2>
                    <p className="text-gray-600">
                      Price: ${product.product.newPrice}
                    </p>
                  </div>
                </div>
                <div className="flex basis-1/4 justify-between pr-4">
                  <button
                    className="text-red-600 font-semibold"
                    onClick={() => handleDelete(product._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WishList;
