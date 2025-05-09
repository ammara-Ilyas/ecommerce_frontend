import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./silice/ProductSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
