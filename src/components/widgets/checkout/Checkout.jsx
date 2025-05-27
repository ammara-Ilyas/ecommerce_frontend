import React from "react";
import AddressForm from "./AddressForm";
import OrderSummary from "./Info";

const Checkout = () => {
  return (
    <div className="w-[80%] mx-auto shadow-lg rounded-md mt-5 border-2 flex justify-center gap-4  ">
      <div className="border-2 w-[28%] py-10 border-blue-500 ">
        <OrderSummary />
      </div>
      <div className="border-2 w-[60%] p-6 pt-14 pb-10 border-yellow-500 ">
        <AddressForm />
      </div>
    </div>
  );
};

export default Checkout;
