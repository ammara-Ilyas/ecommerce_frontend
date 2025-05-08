"use client";
import { Button, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RoomIcon from "@mui/icons-material/Room";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function TopNavbar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b shadow-sm bg-white">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Shopstic" className="w-32 h-auto" />
        <div className="flex items-center bg-gray-100 rounded-md px-2">
          <InputBase placeholder="Search for items..." className="w-72" />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <RoomIcon fontSize="small" />
          <span>All</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <IconButton>
          <FavoriteBorderIcon />
          <span className="text-sm ml-1">Wishlist</span>
        </IconButton>
        <IconButton>
          <ShoppingCartIcon />
          <span className="text-sm ml-1">Cart</span>
        </IconButton>
        <Button variant="contained" className="bg-green-600 hover:bg-green-700">
          Sign In
        </Button>
      </div>
    </div>
  );
}
