import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./silice/ProductSlice";
import cartReducer from "./silice/CartSlice";
import WishReducers from "./silice/WishListSlice";
import checkoutreducers from "./silice/CheckoutSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    wish: WishReducers,
    checkout: checkoutreducers,
  },
});
