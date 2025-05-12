import React from "react";
import WishList from "@/components/widgets/cart/WishList";
export const metadata = {
  title: "Wish List",
  description: "Wish list page in Shop you & me",
};
const page = () => {
  return (
    <div>
      <WishList />
    </div>
  );
};

export default page;
