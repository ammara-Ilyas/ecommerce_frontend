import OrderTable from "@/components/widgets/order/OrderTabel";
import React from "react";

export const metadata = {
  title: "Your Orders | Ecommerce",
  description: "View your order history and track your orders on our ecommerce platform.",
  keywords: "orders, order history, track order, ecommerce"
};

const page = () => {
  return (
    <div>
      <OrderTable />
    </div>
  );
};

export default page;
