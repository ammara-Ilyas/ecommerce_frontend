"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
// const products = [
//   {
//     category: "Fashion",
//     title: "Glito Black Solid Dry-Fit...",
//     rating: 5,
//     seller: "V-Mart",
//     currentPrice: 460,
//     originalPrice: 490,
//     images: ["/images/dummy.png", "images/dummy.png"], // Replace with actual image path or URL
//   },
//   {
//     category: "Fashion",
//     title: "Glito Black Solid Dry-Fit...",
//     rating: 5,
//     seller: "V-Mart",
//     currentPrice: 460,
//     originalPrice: 490,
//     imageUrl: ["/images/dummy.png", "images/dummy.png"], // Replace with actual image path or URL
//   },
//   {
//     category: "Fashion",
//     title: "Glito Black Solid Dry-Fit...",
//     rating: 5,
//     seller: "V-Mart",
//     currentPrice: 460,
//     originalPrice: 490,
//     imageUrl: ["/images/dummy.png", "images/dummy.png"], // Replace with actual image path or URL
//   },
//   {
//     category: "Fashion",
//     title: "Glito Black Solid Dry-Fit...",
//     rating: 5,
//     seller: "V-Mart",
//     currentPrice: 460,
//     originalPrice: 490,
//     imageUrl: ["/images/dummy.png", "images/dummy.png"], // Replace with actual image path or URL
//   },
//   {
//     category: "Fashion",
//     title: "Glito Black Solid Dry-Fit...",
//     rating: 5,
//     seller: "V-Mart",
//     currentPrice: 460,
//     originalPrice: 490,
//     imageUrl: ["/images/dummy.png", "images/dummy.png"], // Replace with actual image path or URL
//   },
//   {
//     category: "Fashion",
//     title: "Glito Black Solid Dry-Fit...",
//     rating: 5,
//     seller: "V-Mart",
//     currentPrice: 460,
//     originalPrice: 490,
//     imageUrl: ["/images/dummy.png", "images/dummy.png"], // Replace with actual image path or URL
//   },
//   {
//     category: "Fashion",
//     title: "Glito Black Solid Dry-Fit...",
//     rating: 5,
//     seller: "V-Mart",
//     currentPrice: 460,
//     originalPrice: 490,
//     imageUrl: ["/images/dummy.png", "images/dummy.png"], // Replace with actual image path or URL
//   },
//   {
//     category: "Fashion",
//     title: "Glito Black Solid Dry-Fit...",
//     rating: 5,
//     seller: "V-Mart",
//     currentPrice: 460,
//     originalPrice: 490,
//     imageUrl: ["/images/dummy.png", "images/dummy.png"], // Replace with actual image path or URL
//   },
// ];
const NewArrival = () => {
  const products = useSelector((state) => state.product.products);
  console.log("products", products);
  const [newArrival, setNewArrival] = useState([]);
  useEffect(() => {
    // setNewArrival(products.filter((item) => item.isNewArrival == false));
    setNewArrival(products);
  }, [products]);
  console.log("new arrival", newArrival);

  return (
    <div className="flex flex-col my-8 justify-between ">
      <h2 className="text-black ml-16 mb-6 text-xl font-semibold  letter-wide">
        New Arrivals
      </h2>

      <div className="grid grid-cols-4 gap-4 border-2  mx-10 space-x-4">
        {newArrival &&
          newArrival.map((item, i) => (
            <div className="border-2" key={i}>
              <ProductCard product={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewArrival;
