import React from "react";
import Checkout from "@/components/widgets/checkout/Checkout";

export const metadata = {
  title: "Checkout | Ecommerce",
  description: "Complete your purchase securely on our ecommerce platform.",
  keywords: "checkout, payment, ecommerce, buy online"
};

const page = () => {
  return (
    <div className="border-2 border-pink-700 ">
      <Checkout />
      {/* <CheckoutPage /> */}
    </div>
  );
};

export default page;
