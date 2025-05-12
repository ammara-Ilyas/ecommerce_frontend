import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  wishList: [],
};

export const WishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishList(state, action) {
      state.wishList = action.payload;
    },
    AddToWishList(state, action) {
      const item = action.payload;
      const existingItem = state.wishList.find(
        (product) => product._id == item._id
      );
      if (existingItem) {
        toast.error("Already exist in Wish List");
      } else {
        state.wishList.push(item);
        toast.success("Added to Wish List");
      }
    },
    RemoveFromWish(state, action) {
      const item = action.payload;
      const filteredWishList = state.wishList.filter(
        (product) => product._id !== item._id
      );
      setWishList(filteredWishList);
      toast.success("Removed from Wish List");
    },
  },
});

export const { setWishList, AddToWishList, RemoveFromWish } =
  WishListSlice.actions;

export default WishListSlice.reducer;
