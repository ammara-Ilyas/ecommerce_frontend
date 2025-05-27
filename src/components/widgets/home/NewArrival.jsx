"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { Heading, SeeAllButton } from "@/components/miniWidgets/Button";
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
  const router = useRouter();
  const products = useSelector((state) => state.product.products);
  console.log("products", products);
  const [newArrival, setNewArrival] = useState([]);
  useEffect(() => {
    // setNewArrival(products.filter((item) => item.isNewArrival == false));
    setNewArrival(products);
  }, [products]);
  console.log("new arrival", newArrival);
  const handleNavigate = () => {
    router.push("product");
  };
  return (
    <div className="flex flex-col mt-10 justify-between ">
      <div className="flex mr-16  mb-2 justify-between items-center">
        {" "}
        <Heading text="New Arrivals" />
        <SeeAllButton text="See All" handleNavigate={handleNavigate} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4   mx-10 ">
        {newArrival &&
          newArrival.map((item, i) => (
            <div className="" key={i}>
              <ProductCard product={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewArrival;
