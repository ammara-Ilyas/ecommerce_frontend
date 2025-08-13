import React from "react";
import Checkout from "@/components/widgets/checkout/Checkout";

export const metadata = {
  title: "Checkout | Ecommerce",
  description: "Complete your purchase securely on our ecommerce platform.",
  keywords: "checkout, payment, ecommerce, buy online"
};

const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Checkout />
      </div>
    </div>
  );
};

export default page;
