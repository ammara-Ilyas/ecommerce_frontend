import SignleProduct from "@/components/widgets/product/SignleProduct";
import React from "react";
export const metadata = {
  title: "Single Product",
  description: "Otp page of ecommerce dashboard",
};
const page = async ({ params }) => {
  const { id } = await params;
  console.log("id", id);

  return (
    <div>
      <SignleProduct productId={id} />
    </div>
  );
};

export default page;
