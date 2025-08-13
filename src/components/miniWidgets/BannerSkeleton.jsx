import React from "react";
import { Skeleton } from "@mui/material";

const BannerSkeleton = () => {
  return (
    <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-4">
      <Skeleton variant="rectangular" width="100%" height="100%" className="rounded-2xl" />
    </div>
  );
};

export default BannerSkeleton; 