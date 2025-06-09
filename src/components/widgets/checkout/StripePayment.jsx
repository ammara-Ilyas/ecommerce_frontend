"use client";
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function StripePayment({
  clientSecret,
  cartItems,
  totalAmount,
  userEmail,
}) {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!agree) {
      toast.error("You must agree to the refund policy and terms.");
      return;
    }
    if (!stripe || !elements) return;

    setLoading(true);

    try {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: userEmail,
          },
        },
      });

      if (result.error) {
        toast.error(result.error.message || "Payment failed");
      } else if (result.paymentIntent.status === "succeeded") {
        router.push("/success");
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "0 auto" }}>
      <Typography variant="h6" gutterBottom>
        Payment Details
      </Typography>
      php-template Copy Edit
      <div
        style={{
          border: "1px solid #ccc",
          padding: "12px",
          borderRadius: "6px",
        }}
      >
        <CardElement />
      </div>
      <FormControlLabel
        control={
          <Checkbox
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
        }
        label={
          <span>
            I agree to the{" "}
            <a href="/refund" target="_blank" rel="noopener noreferrer">
              refund policy and terms
            </a>
          </span>
        }
        style={{ marginTop: "16px" }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handlePayment}
        disabled={!stripe || loading}
        style={{ marginTop: "16px" }}
      >
        {loading ? "Processing..." : `Pay $${totalAmount}`}
      </Button>
    </div>
  );
}
