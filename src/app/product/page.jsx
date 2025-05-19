import FilteredProduct from "@/components/widgets/product/FilteredProduct";
import FilterPanel from "@/components/widgets/product/FilterPanel";
import React from "react";
export const metadata = {
  title: "Products",
  description: "Product page in Shop You & Me",
};
const page = () => {
  return (
    <div className="flex ">
      hello
      <div className="w-[30%] border-2 border-red-700">
        <FilterPanel />
      </div>
      <div className="w-[70%] border-4 border-green-900">
        <FilteredProduct />
      </div>
    </div>
  );
};

export default page;
