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
    return products.slice(indexOfFirstItem, indexOfLastItem);
  }, [products, currentPage]);
  console.log("current items", currentItems);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4 border-2  mx-10 space-x-4">
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
