import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripePayment from "./StripePayment";

const stripePromise = loadStripe(
  "pk_test_51PJrLGP6rkGL2v3sxpWOzxvQKIPui1PergwPy1ujycx5QYdXPXztRmCquh8HPJvJj5F2nDrjBwEFtQoRgIoG239c00SLhL0ssS"
); // Replace with your publishable key

export default function StripeWrapper({
  clientSecret,
  cartItems,
  totalAmount,
  userEmail,
}) {
  if (!clientSecret) return null;

  const options = {
    clientSecret,
    appearance: {
      theme: "stripe",
    },
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <StripePayment
        clientSecret={clientSecret}
        cartItems={cartItems}
        totalAmount={totalAmount}
        userEmail={userEmail}
      />
    </Elements>
  );
}
