"use client";
import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../home/ProductCard";
import ProductPagination from "@/components/miniWidgets/Pagination";

const FilteredProduct = () => {
  const filteredProducts = useSelector(
    (state) => state.product.filteredProducts
  );
  const products = useSelector((state) => state.product.products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
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
  }, [products, currentPage, filteredProducts]);
  console.log("current items", currentItems);
  console.log("products in product page", products);

  return (
    <div>
      <div className="w-[94%] mx-auto my-5 h-[50px] bg-gray-100 rounded-md">
        h
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 mx-10 space-x-4">
        {products &&
          products.map((product, index) => (
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
