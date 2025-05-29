"use client";
import React, { useEffect, useState } from "react";
import ProductDetail from "./Productdeatil";
import ProductAdditionalDetail from "./AdditionalDetail";
import { CircularProgress } from "@mui/material";
import { callPublicApi } from "@/libs/CallApis";
import ProductDetailsSkeleton from "./ProductSkeleton";

const SignleProduct = ({ productId }) => {
  console.log("productId", productId);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await callPublicApi(`/product/${productId}`, "GET");
        console.log("res in single product", res);

        setProduct(res.product);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);
  console.log("product", product);
  if (loading) return <ProductDetailsSkeleton />;
  if (!product)
    return (
      <div className="ml-16 my-10 text-2xl font-semibold">
        Product not found.
      </div>
    );

  return (
    <div className="w-[90%] mx-auto ">
      <ProductDetail product={product} />
      <ProductAdditionalDetail product={product} />
    </div>
  );
};

export default SignleProduct;
