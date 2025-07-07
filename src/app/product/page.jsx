import FilteredProduct from "@/components/widgets/product/FilteredProduct";
import FilterPanel from "@/components/widgets/product/FilterPanel";
import SaleSlider from "@/components/widgets/product/Sliders";
import React from "react";
export const metadata = {
  title: "Products | Ecommerce",
  description: "Browse our wide range of products including fashion, electronics, and more.",
  keywords: "products, shop, ecommerce, fashion, electronics"
};
const page = () => {
  return (
    <div className="flex w-[98%]  mx-auto ">
      <div className="w-[20%] ml-10 border-2 border-red-700">
        <FilterPanel />
      </div>
      <div className="w-[75%] border-4 border-green-900">
        <FilteredProduct />
      </div>
    </div>
  );
};

export default page;
