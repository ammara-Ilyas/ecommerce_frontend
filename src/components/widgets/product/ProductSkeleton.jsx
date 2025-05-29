"use client";

import { Skeleton } from "@mui/material";

export default function ProductDetailsSkeleton() {
  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Image Section */}
        <div>
          <div className="border rounded-xl overflow-hidden">
            <Skeleton variant="rectangular" width="100%" height={400} />
          </div>
          <div className="flex gap-2 mt-4">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  width={80}
                  height={80}
                  className="rounded-md"
                />
              ))}
          </div>
        </div>

        {/* Right Info Section */}
        <div>
          <Skeleton variant="text" width="60%" height={30} className="mb-2" />
          <Skeleton variant="text" width="40%" height={20} className="mb-2" />
          <Skeleton variant="text" width="30%" height={25} className="mb-2" />
          <Skeleton variant="text" width="25%" height={20} className="mb-2" />
          <Skeleton
            variant="rectangular"
            width={120}
            height={20}
            className="mb-4"
          />
          <div className="flex gap-4 mb-6">
            <Skeleton variant="rectangular" width={120} height={40} />
            <Skeleton variant="rectangular" width={120} height={40} />
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-4">
            <Skeleton variant="text" width={100} height={30} />
            <Skeleton variant="text" width={140} height={30} />
            <Skeleton variant="text" width={100} height={30} />
          </div>
          <Skeleton variant="rectangular" height={100} />
        </div>
      </div>
    </div>
  );
}
