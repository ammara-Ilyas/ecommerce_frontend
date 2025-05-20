"use client";
import React, { useEffect, useState } from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";

import Image from "next/image";
import { callPrivateApi } from "@/libs/CallApis";
import { setCartItems } from "@/redux/silice/CartSlice";
import { user } from "@/libs/Token";
import CartSkeleton from "@/components/miniWidgets/CartSkeleton";
import Button from "@/components/miniWidgets/Button";
import { increCartItems, decreCartItems } from "@/redux/silice/CartSlice";
import Link from "next/link";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.cartItems);
  // const [cartItem, setCartItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log("user and user id", user, user.id);

  useEffect(() => {
    const fetchCartItems = async () => {
      setLoading(true);
      try {
        const res = await callPrivateApi(`/cart/${user.id}`, "GET");
        console.log("res in cart", res);
        dispatch(setCartItems(res.cartItems));
        console.log("message", res.message);
        if (res.status == 200 || res.status == 201) {
        }
      } catch (error) {
        console.log("error", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCartItems();
  }, []);
  console.log("cart items", cartItem);

  // console.log("cart", cartItems);
  useEffect(() => {
    const totalPriceAllProducts = cartItem.reduce((acc, priceItem) => {
      return acc + priceItem.quantity * priceItem.product.newPrice;
    }, 0);
    console.log("item", totalPriceAllProducts);
    setTotalPrice(totalPriceAllProducts);
  }, [cartItem]);
  const handleProductItemInc = async (id) => {
    console.log(id);
    dispatch(increCartItems(id));
    try {
      const res = await callPrivateApi(`/cart/increase/${id}`, "PATCH");
      console.log("res in cart increment", res);

      console.log("message", res.message);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  const handleProductItemDec = async (id) => {
    dispatch(decreCartItems(id));
    console.log(id);
    try {
      const res = await callPrivateApi(`/cart/decrease/${id}`, "PATCH");
      console.log("res in cart decrement", res);
    } catch (error) {
      console.log("error", error.message);
    } finally {
    }
  };

  const handleDelete = async (id) => {
    console.log("id in del", id);

    setLoading(true);
    try {
      const res = await callPrivateApi(`/cart/${id}`, "DELETE");
      console.log("res in  cart item delete ", res);
      const updated = cartItem.filter((item) => item._id !== id);
      console.log("updated", updated);
      // setCartItem(updated);
      dispatch(setCartItems(updated));
      toast.success(res.message || " cart item deleted successfully");
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
      ) : cartItem.length === 0 ? (
        <div className="text-gray-600 min-h-20 flex text-center text-2xl flex-col gap-10 font-bold  ">
          <h2>Your cart is empty.</h2>
          <Link href="/">
            {" "}
            <Button
              text="Continue shopping"
              tailwindClasees="p-3 rounded-md active:bg-blue-700"
            />
          </Link>
        </div>
      ) : (
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-4 text-center">Your Cart</h1>

          <div className="scrollbar-thin h-[350px] overflow-y-scroll">
            {cartItem &&
              cartItem.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center flex-col md:flex-row   justify-between border-b border-gray-300 py-4"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={product.product.images[0]}
                      alt={product.product.product}
                      width={50}
                      height={50}
                      className="h-28 w-28 md:h-16 md:w-16 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-lg font-bold">
                        {product.product.product}
                      </h2>
                      <p className="text-gray-600 font-semibold">
                        Price: ${product.product.newPrice}
                      </p>
                    </div>
                  </div>
                  <div className="flex basis-1/4 justify-between pr-4">
                    <div className="flex items-center  gap-2 font-bold text-xl">
                      <CiSquarePlus
                        onClick={() => handleProductItemInc(product._id)}
                      />
                      {product.quantity}
                      <CiSquareMinus
                        onClick={() => handleProductItemDec(product._id)}
                      />
                    </div>
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
          <div className="mt-8 flex justify-end flex-col">
            <p className="text-center font-bold text-2xl mb-3">
              Total Price : {totalPrice}$
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
