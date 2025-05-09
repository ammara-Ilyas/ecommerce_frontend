import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  categories: [],
};

const productSlice = {
  name: "product",
  initialState,
  reducers: {},
};

export default productSlice.reducers;
