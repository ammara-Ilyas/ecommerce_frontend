import React from "react";
import { Skeleton } from "@mui/material";

const ProductSkeleton = () => {
  return (
    <div className="w-full max-w-xs p-4 bg-white rounded-2xl shadow-md">
      {/* Image skeleton */}
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
      </div>
    </div>
  );
};

export default ProductSkeleton;
