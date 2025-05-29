"use client";
import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../home/ProductCard";
import ProductPagination from "@/components/miniWidgets/Pagination";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { CgMenuGridR } from "react-icons/cg";

const FilteredProduct = () => {
  const filteredProducts = useSelector(
    (state) => state.product.filteredProducts
  );
  const products = useSelector((state) => state.product.products);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortValue, setSortValue] = useState("8");
  const [colValue, setColValue] = useState(4);
  const itemsPerPage = sortValue;
  // Handle Pagination
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Calculate Paginated Items
  const currentItems = useMemo(() => {
    if (!products || products.length === 0) return [];
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  }, [products, currentPage, filteredProducts, itemsPerPage]);
  console.log("current items", currentItems);
  console.log("products in product page", products);

  return (
    <div>
      <div className="w-[94%] mx-auto flex items-center justify-between px-10 my-5 h-[50px] bg-gray-100 rounded-md">
        <div className="flex gap-1 items-center justify-center text-xl text-black">
          <CgMenuGridR onClick={() => setColValue(3)} />
          <TfiLayoutGrid4Alt onClick={() => setColValue(3)} />
        </div>
        <label
          className="inline-flex items-center gap-1 border-2 px-3  py-2 bg-white rounded-md text-sm font-medium"
          htmlFor="sort"
        >
          <select
            id="sort"
            name="sort"
            value={sortValue}
            onChange={(e) => setSortValue(e.target.value)}
            className="bg-white outline-none border-none w-full focus:ring-0"
          >
            <option value="8">Show 8</option>
            <option value="12">Show 12</option>
            <option value="16">Show 16</option>
            <option value="20">Show 20</option>
          </select>
        </label>
      </div>
      <div
        className={`grid grid-cols-2 md:grid-cols-3 ${
          sortValue == 3 ? "xl:grid-cols-3" : "xl:grid-cols-4"
        }  gap-2 md:gap-4 mx-10 space-x-4`}
      >
        {currentItems &&
          currentItems.map((product, index) => (
            <div key={index + product._id} className="">
              <ProductCard product={product} />
            </div>
          ))}
      </div>
      <ProductPagination
        products={products}
        itemsPerPage={itemsPerPage}
        filteredProducts={filteredProducts}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default FilteredProduct;
