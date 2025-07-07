"use client";
import React from "react";
import { Card, CardContent, Typography, Divider, Link } from "@mui/material";
import { useSelector } from "react-redux";

export default function OrderSummary() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItem = useSelector((state) => state.cart.cartItems);
  console.log("total price in checkout", totalPrice);

  const subtotal = totalPrice; // Only items' total
  const tax = +(subtotal * 0.02).toFixed(2);
  const shipping = 5.0;
  const total = +(subtotal + tax + shipping).toFixed(2);

  return (
    <Card className="  px-2 h-full ">
      <CardContent>
        <Typography
          variant="h6"
          sx={{ color: "black", fontWeight: "bold", mb: 4 }}
        >
          Order Summary
        </Typography>

        <div className="flex justify-between mb-2">
          <Typography>Subtotal ({cartItem.length} items)</Typography>
          <Typography>${subtotal}</Typography>
        </div>

        <div className="flex justify-between mb-2">
          <Typography>Tax (2%)</Typography>
          <Typography>${tax}</Typography>
        </div>

        <div className="flex justify-between mb-4">
          <Typography>Shipping</Typography>
          <Typography>${shipping.toFixed(2)}</Typography>
        </div>

        <Divider className="mb-4" />

        <div className="flex justify-between mb-4">
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Total
          </Typography>
          <Typography variant="h6" className="text-green-600 font-bold">
            ${total}
          </Typography>
        </div>

        <Typography variant="body2" className="text-xs text-gray-600">
          By placing your order, you agree to our{" "}
          <Link href="/terms-and-conditions" underline="hover">
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" underline="hover">
            Privacy Policy
          </Link>.
        </Typography>
        <Typography variant="body2" className="text-xs text-red-600 mt-2">
          Note: We do not offer refunds. Once you buy, there is no refund facility available.
        </Typography>
      </CardContent>
    </Card>
  );
}
