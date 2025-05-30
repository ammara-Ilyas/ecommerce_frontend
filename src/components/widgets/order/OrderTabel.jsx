"use client";

import { Heading } from "@/components/miniWidgets/Button";
import { useEffect, useState } from "react";

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cancelOrderState, setCancelOrderState] = useState(null);

  const fetchAllOrders = async () => {
    setLoading(true);
    try {
      const res = await callPublicApi("/orders", "GET");
      console.log("res order", res);
      setOrders(res.orders);
    } catch (error) {
      console.error(error.message || "Internal Server Error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAllOrders();
  }, []);
  const handleCancel = (order) => {
    if (order.status === "PENDING") {
      setCancelOrderState(order);
    }
  };

  const confirmCancel = () => {
    dispatch(cancelOrder(cancelOrderState.id));
    setCancelOrderState(null);
  };
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <Heading text="Total Orders" />
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-300 text-sm sm:text-base">
          <thead>
            <tr className="bg-blue-600 text-white text-left">
              <th className="p-2 sm:p-3">Order ID</th>
              <th className="p-2 sm:p-3">Venue</th>
              <th className="p-2 sm:p-3 hidden md:table-cell">Address</th>
              <th className="p-2 sm:p-3">Date</th>
              <th className="p-2 sm:p-3">Price</th>
              <th className="p-2 sm:p-3">Status</th>
              <th className="p-2 sm:p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length == 0 ? (
              <div className="flex items-center justify-center min-h-56">
                No Order found
              </div>
            ) : (
              orders.map((order) => (
                <tr key={order?.id} className="border-t border-gray-300">
                  <td className="p-2 sm:p-3 w-[150px] overflow-hidden whitespace-nowrap text-ellipsis ">
                    {order?._id}
                  </td>
                  <td className="p-2 sm:p-3"></td>
                  <td className="p-2 sm:p-3 hidden md:table-cell">
                    {order?.address}
                  </td>
                  <td className="p-2 sm:p-3">
                    {" "}
                    {order?.createdAt
                      ? format(new Date(order.createdAt), "dd MMM yyyy")
                      : "N/A"}
                  </td>
                  <td className="p-2 sm:p-3">${order?.amount.toFixed(2)}</td>
                  <td className="p-2 sm:p-3 text-blue-500 font-bold">
                    {order?.status}
                  </td>
                  <td className="p-2 sm:p-3">
                    <button
                      onClick={() => handleCancel(order)}
                      className={`px-3 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm ${
                        order?.status !== "pending"
                          ? "bg-gray-400 opacity-50 cursor-not-allowed"
                          : "bg-blue-600 text-white"
                      }`}
                      disabled={order?.status !== "PENDING"}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {cancelOrderState && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 p-4">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md">
            <h2 className="text-lg font-semibold mb-2 sm:mb-4">Cancel Order</h2>
            <p className="mb-2 sm:mb-4 text-sm sm:text-base">
              If you cancel this order, 50% of the total price will be deducted.
            </p>
            <p className="font-bold text-sm sm:text-base">
              Refund Amount: ${(cancelOrderState.price * 0.5).toFixed(2)}
            </p>
            <div className="mt-3 sm:mt-4 flex justify-end space-x-2 sm:space-x-3">
              <button
                onClick={() => setCancelOrderState(null)}
                className="bg-gray-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm"
              >
                Keep Order
              </button>
              <button
                onClick={confirmCancel}
                className="bg-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-xs sm:text-sm"
              >
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTable;
