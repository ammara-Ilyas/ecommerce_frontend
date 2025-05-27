"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredProducts } from "@/redux/silice/ProductSlice";
import { StickyCard } from "../miniWidgets/CategoryCard";

// const categories = ["Category A", "Category B", "Category C", "Category D"];
const tags = ["New", "Popular", "Trending", "Featured"];

const FilterPanel = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const categories = useSelector((state) => state.product.categories);
  const [priceRange, setPriceRange] = useState([100, 4544]);

  const handleCategoryClick = (category) => {
    const filtered = products.filter((p) => p.category === category);
    dispatch(setFilteredProducts(filtered));
  };

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value) || 0;
    setPriceRange(newRange);
    const filtered = products.filter(
      (p) => p.price >= newRange[0] && p.price <= newRange[1]
    );
    dispatch(setFilteredProducts(filtered));
  };

  const handleRatingClick = (rating) => {
    const filtered = products.filter((p) => Math.floor(p.rating) >= rating);
    dispatch(setFilteredProducts(filtered));
  };

  return (
    <div className="w-full  space-y-6 border-r border-gray-200">
      {/* Categories */}
      <div className="border-b pb-3 m-4 ">
        <h3 className="text-lg font-semibold mb-2 border-b">All Categories</h3>
        <div className="h-40 overflow-y-auto pr-2 space-y-2">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => handleCategoryClick(cat.name)}
              className="text-sm cursor-pointer hover:text-blue-600"
            >
              {cat.name}
            </div>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="border-b pb-3 m-4 ">
        <h3 className="text-lg font-semibold mb-2 border-b">Price</h3>
        <div className="flex items-center gap-2 mb-2">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="w-16 px-2 py-1 border text-sm rounded"
          />
          <span>to</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="w-16 px-2 py-1 border text-sm rounded"
          />
        </div>
        <p className="text-xs text-gray-600">
          Price: ${priceRange[0]} - ${priceRange[1]}
        </p>
      </div>

      {/* Ratings */}
      <div className="border-b pb-3 m-4 ">
        <h3 className="text-lg font-semibold mb-2 border-b">Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2].map((star) => (
            <div
              key={star}
              className="flex items-center gap-1 cursor-pointer hover:text-yellow-500"
              onClick={() => handleRatingClick(star)}
            >
              {[...Array(5)].map((_, idx) => (
                <span
                  key={idx}
                  className={idx < star ? "text-yellow-400" : "text-gray-300"}
                >
                  ★
                </span>
              ))}
              <span className="text-sm ml-1">{star}.0 & up</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="border-b pb-3 m-4 ">
        <h3 className="text-lg font-semibold mb-2 border-b">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-200 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="relative">
        <StickyCard />
      </div>
    </div>
  );
};

export default FilterPanel;
