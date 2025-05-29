"use client";
import { callPrivateApi } from "@/libs/CallApis";
import { useState } from "react";

export default function CheckoutPage() {
  const [email, setEmail] = useState("ammarailyas535@gmail.com");
  const [cart] = useState([
    { name: "Product A", price: 8000, quantity: 1 },
    { name: "Product B", price: 5500, quantity: 2 },
  ]);
  const [loading, setLoading] = useState(false);
  const HOSTNAME = "http://127.0.0.1:5000/api";

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const handlePlaceOrder = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    setLoading(true);

    try {
      // const response = await fetch(`${HOSTNAME}/create-checkout-session`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ amount: total, email, items: cart }),
      // });
      const payload = {
        amount: total,
        email,
        items: cart,
      };
      // const data = await response.json();
      const data = await callPrivateApi(
        "/create-checkout-session",
        "POST",
        payload
      );
      // console.log("data", data);
      if (data.url) {
        // Redirect user to Stripe Checkout
        window.location.href = data.url;
      } else {
        alert("Failed to create checkout session");
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      <input
        type="email"
        placeholder="Enter your email"
        className="w-full mb-4 p-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <ul className="mb-4">
        {cart.map((item, idx) => (
          <li key={idx} className="flex justify-between py-1 border-b">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>${((item.price * item.quantity) / 100).toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <div className="text-lg font-semibold mb-6">
        Total: ${(total / 100).toFixed(2)}
      </div>

      <button
        onClick={handlePlaceOrder}
        disabled={loading}
        className={`w-full py-3 rounded text-white ${
          loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Processing..." : "Place Order"}
      </button>
    </div>
  );
}
