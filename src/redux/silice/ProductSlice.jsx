import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  banners: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setBanners(state, action) {
      state.banners = action.payload;
    },
  },
});
export const { setCategories, setProducts, setBanners } = productSlice.actions;

// You exported this:
export default productSlice.reducer;
