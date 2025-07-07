import React from "react";
import WishList from "@/components/widgets/cart/WishList";
export const metadata = {
  title: "Your Wishlist | Ecommerce",
  description: "View and manage your wishlist items on our ecommerce platform.",
  keywords: "wishlist, favorite products, save for later, ecommerce"
};
const page = () => {
  return (
    <div>
      <WishList />
    </div>
  );
};

export default page;
