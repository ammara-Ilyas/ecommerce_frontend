import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
