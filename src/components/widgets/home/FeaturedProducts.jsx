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
const FeaturedProducts = () => {
  const products = useSelector((state) => state.product.products);
  console.log("products", products);
  const [featuredProduct, setFeaturedProducts] = useState([]);
  useEffect(() => {
    // setFeaturedProducts(products.filter((item) => item.isFeatured == false));
    setFeaturedProducts(products);
  }, [products]);
  console.log("featured", featuredProduct);

  return (
    <div className="flex flex-col my-8 justify-between ">
      <h2 className="text-black ml-16 mb-6 text-xl font-semibold  letter-wide">
        Popular Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4   mx-10 space-x-4">
        {featuredProduct &&
          featuredProduct.map((item, i) => (
            <div className="border-2" key={i}>
              <ProductCard product={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
