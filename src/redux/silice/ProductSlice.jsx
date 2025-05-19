import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  categories: [],
  banners: [],
  email: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setFilteredProducts(state, action) {
      state.filteredProducts = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setCategories(state, action) {
      state.categories = action.payload;
    },
    setBanners(state, action) {
      state.banners = action.payload;
    },
  },
});
export const {
  setEmail,
  setFilteredProducts,
  setCategories,
  setProducts,
  setBanners,
} = productSlice.actions;

// You exported this:
export default productSlice.reducer;
