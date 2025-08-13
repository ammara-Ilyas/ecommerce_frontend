"use client"
import React, { useEffect, useState } from "react";
import { callPublicApi } from "@/libs/CallApis";
import AddressForm from "./AddressForm";
import OrderSummary from "./Info";

const Checkout = () => {
  const [refundEnabled, setRefundEnabled] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await callPublicApi("/refund-settings", "GET");
        if (mounted) setRefundEnabled(!!data?.refundEnabled);
      } catch {}
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-3">
        <div className="mb-2 rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm text-blue-800">
          {refundEnabled ? (
            <span>Refunds are currently enabled. You can request a refund from the order success page.</span>
          ) : (
            <span>Refunds are currently disabled.</span>
          )}
        </div>
      </div>
      <div className="lg:col-span-2 bg-white rounded-xl border border-blue-100 shadow-sm">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Checkout</h2>
          <AddressForm />
        </div>
      </div>
      <div className="bg-white rounded-xl border border-blue-100 shadow-sm">
        <div className="p-6 sticky top-6">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
