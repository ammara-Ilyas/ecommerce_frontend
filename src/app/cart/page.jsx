import React from "react";
import Cart from "@/components/widgets/cart/Cart";
export const metadata = {
  title: "Your Cart | Ecommerce",
  description: "Review your cart items and proceed to checkout on our ecommerce platform.",
  keywords: "cart, checkout, shopping cart, ecommerce"
};
const page = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default page;
