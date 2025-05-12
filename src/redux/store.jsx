import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./silice/ProductSlice";
import cartReducer from "./silice/CartSlice";
import WishReducers from "./silice/WishListSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    wish: WishReducers,
  },
});
