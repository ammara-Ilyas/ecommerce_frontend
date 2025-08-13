import React from "react";
import { Skeleton } from "@mui/material";

const ProductSkeleton = () => {
  return (
    <div className="w-full grid grid-cols-4">
      {/* Image skeleton */}
     {[1,2,3,4].map((item,i)=>(
    <div key={i*item} className="w-full max-w-xs p-4 bg-white rounded-2xl shadow-md">
      <Skeleton
        variant="rectangular"
        width="100%"
        height={180}
        className="rounded-xl"
      />

      <div className="mt-4 space-y-2">
        {/* Title */}
        <Skeleton variant="text" width="80%" height={24} />

        {/* Rating */}
        <Skeleton variant="text" width="40%" height={20} />

        {/* Price */}
        <Skeleton variant="text" width="30%" height={28} />
      </div></div>
     ))}
    </div>
  );
};

export default ProductSkeleton;
