import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | Ecommerce",
  description: "Read the terms and conditions for using our ecommerce website and services.",
  keywords: "terms and conditions, ecommerce, user agreement, policies"
};

export default function TermsAndConditions() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><b>No Refunds:</b> All sales are final. We do not offer refunds for any products or services. Please read our <Link href="/refund-policy" className="text-blue-600 underline">Refund Policy</Link> for details.</li>
        <li><b>Order Confirmation:</b> Please review your order carefully before confirming. Once placed, orders cannot be cancelled or refunded.</li>
        <li><b>Payment:</b> All payments must be made in full at the time of purchase. We accept the payment methods listed on our website.</li>
        <li><b>Shipping:</b> Shipping times and costs are provided at checkout. We are not responsible for delays caused by shipping carriers.</li>
        <li><b>User Responsibility:</b> You are responsible for providing accurate information and for keeping your account details secure.</li>
        <li><b>Product Availability:</b> We reserve the right to change or discontinue products at any time without notice.</li>
        <li><b>Contact Support:</b> For any questions, please contact our support team before making a purchase.</li>
      </ul>
      <p className="text-red-600 font-semibold mb-4">
        Note: There is <b>no refund facility</b>. Once you buy, there is no refund.
      </p>
      <p>
        Please also read our {" "}
        <Link href="/refund-policy" className="text-blue-600 underline">Refund Policy</Link>.
      </p>
    </div>
  );
} 