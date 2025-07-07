import React from "react";

export const metadata = {
  title: "Refund Policy | Ecommerce",
  description: "Read our refund policy for purchases made on our ecommerce platform.",
  keywords: "refund policy, returns, ecommerce, no refund"
};

export default function RefundPolicy() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><b>No Refunds:</b> All sales are final. We do not offer refunds for any products or services purchased through our website.</li>
        <li><b>Order Confirmation:</b> Please review your order carefully before confirming your purchase. Once an order is placed, it cannot be cancelled or refunded.</li>
        <li><b>Defective or Damaged Products:</b> If you receive a defective or damaged product, please contact our support team within 24 hours of delivery for assistance. Refunds are not provided, but we may offer a replacement at our discretion.</li>
        <li><b>Digital Products:</b> All digital product sales are non-refundable and non-exchangeable.</li>
        <li><b>Contact Support:</b> For any questions or concerns about your order, please contact our support team before making a purchase.</li>
      </ul>
      <p className="text-red-600 font-semibold">
        Note: There is <b>no refund facility</b>. Once you buy, there is no refund.
      </p>
    </div>
  );
} 