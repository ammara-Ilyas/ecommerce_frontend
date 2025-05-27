import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
      console.log("total price", totalPrice);
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
    increCartItems(state, action) {
      const id = action.payload;
      const updatedItems = state.cartItems.map((data) => {
        if (data._id === id) {
          return {
            ...data,
            quantity: data.quantity + 1,
            totalPrice: data.price * (data.quantity + 1),
          };
        }
        return data;
      });
      state.cartItems = updatedItems;
    },
    decreCartItems(state, action) {
      const id = action.payload;
      const item = state.cartItems.find((item) => item._id == id);

      if (item.quantity > 1) {
        const updatedItems = state.cartItems.map((data, i) => {
          if (data._id === id) {
            return {
              ...data,
              quantity: data.quantity - 1,
              totalPrice: data.price * (data.quantity - 1),
            };
          }
          return data;
        });
        state.cartItems = updatedItems;
      } else {
        toast.warning("Minimum quantity is 1. Cannot decrease further.");
      }
    },
  },
});

export const {
  setCartItems,
  IncreaseQuantity,
  DecreaseQuantity,
  RemoveFromCart,
  increCartItems,
  decreCartItems,
  AddToCart,
  setTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
