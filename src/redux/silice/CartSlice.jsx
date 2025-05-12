import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
    AddToCart(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (product) => product._id == item._id
      );
      if (existingItem) {
        toast.error("Already exist in cart");
      } else {
        const defaultQuantity = 1;
        state.cartItems.push({ ...item, quantity: defaultQuantity });
      }
      console.log("cart item in slice", state.cartItems);
    },
    RemoveFromCart(state, action) {
      const item = action.payload;
      const filteredCartItem = state.cartItems.filter(
        (product) => product._id !== item._id
      );
      setCartItems(filteredCartItem);
    },
    IncreaseQuantity(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (product) => product._id == item._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    DecreaseQuantity(state, action) {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (product) => product._id == item._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
  },
});

export const {
  setCartItems,
  IncreaseQuantity,
  DecreaseQuantity,
  RemoveFromCart,
  AddToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
