import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shippingInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    saveAddress: false,
  },
  paymentInfo: {
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    saveCard: false,
  },
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    updateShippingInfo: (state, action) => {
      state.shippingInfo = {
        ...state.shippingInfo,
        ...action.payload,
      };
    },
    updatePaymentInfo: (state, action) => {
      state.paymentInfo = {
        ...state.paymentInfo,
        ...action.payload,
      };
    },
    clearCheckoutData: (state) => {
      state.shippingInfo = initialState.shippingInfo;
      state.paymentInfo = initialState.paymentInfo;
    },
  },
});

export const { updateShippingInfo, updatePaymentInfo, clearCheckoutData } =
  checkoutSlice.actions;

export default checkoutSlice.reducer;
