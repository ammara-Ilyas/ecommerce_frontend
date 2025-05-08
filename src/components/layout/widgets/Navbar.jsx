"use client";
import { ExpandMore } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b">
      <Button
        variant="contained"
        className="bg-green-600 hover:bg-green-700 text-white"
      >
        Browse All Categories
      </Button>

      <div className="flex items-center gap-6 text-sm text-gray-700 font-medium">
        <div className="cursor-pointer hover:text-green-600">Home</div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-green-600">
          Fashion <ExpandMore fontSize="small" />
        </div>
        <div className="cursor-pointer hover:text-green-600">Electronics</div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-green-600">
          Bags <ExpandMore fontSize="small" />
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-green-600">
          Footwear <ExpandMore fontSize="small" />
        </div>
        <div className="cursor-pointer hover:text-green-600">Groceries</div>
        <div className="cursor-pointer hover:text-green-600">Beauty</div>
        <div className="flex items-center gap-1 cursor-pointer hover:text-green-600">
          Shop <ExpandMore fontSize="small" />
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className="text-gray-500">🎧</span>
        <span className="text-green-600 font-semibold">1900 - 888</span>
        <span className="text-gray-500">24/7 Support Center</span>
      </div>
    </div>
  );
}
