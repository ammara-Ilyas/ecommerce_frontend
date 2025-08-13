"use client";
import React from "react";
import { Card, CardContent, Typography, Divider, Link } from "@mui/material";
import { useSelector } from "react-redux";

export default function OrderSummary() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartItem = useSelector((state) => state.cart.cartItems);
  // console.log("total price in checkout", totalPrice);

  return (
    <Card className="h-full" sx={{ backgroundColor: "#ffffff" }}>
      <CardContent>
        <Typography
          variant="h6"
          sx={{ color: "#1d4ed8", fontWeight: 700, mb: 3 }}
        >
          Order Summary
        </Typography>

        <div className="flex justify-between mb-2">
          <Typography>Subtotal ({cartItem.length} items)</Typography>
          <Typography>${totalPrice}</Typography>
        </div>

        <div className="flex justify-between mb-2">
          <Typography>Tax (10%)</Typography>
          <Typography>$3.70</Typography>
        </div>

        <div className="flex justify-between mb-4">
          <Typography>Shipping</Typography>
          <Typography>$5.00</Typography>
        </div>

        <Divider className="mb-4" />

        <div className="flex justify-between mb-4">
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Total
          </Typography>
          <Typography variant="h6" className="text-blue-700 font-bold">
            ${totalPrice + 3.7 + 5}
          </Typography>
        </div>

        <Typography variant="body2" className="text-xs text-gray-600">
          By placing your order, you agree to our{" "}
          <Link href="#" underline="hover">
            Terms and Conditions
          </Link>{" "}
          and{" "}
          <Link href="#" underline="hover">
            Privacy Policy
          </Link>
          .
        </Typography>
      </CardContent>
    </Card>
  );
}
