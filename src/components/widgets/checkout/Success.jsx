"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { callPrivateApi } from "@/libs/CallApis";
import { getToken } from "@/libs/Token";

export default function Success() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isVerified, setIsVerified] = useState(null); // null: loading, true: success, false: failed

  useEffect(() => {
    const verifyPayment = async () => {
      const session_id = new URLSearchParams(window.location.search).get(
        "session_id"
      );
      if (session_id) {
        try {
          const res = await fetch(
            `/api/verify-payment?session_id=${session_id}`
          );
          if (res.ok) {
            const data = await res.json();
            // Check your API response to confirm it’s a success
            if (data.success) {
              setIsVerified(true);
            } else {
              setIsVerified(false);
            }
          } else {
            setIsVerified(false);
          }
        } catch (error) {
          console.error("Error verifying payment:", error);
          setIsVerified(false);
        }
      } else {
        setIsVerified(false);
      }
    };

    verifyPayment();
  }, []);

  useEffect(() => {
    const t = getToken();
    setToken(t);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    const deleteCartItems = async () => {
      if (user && token && isVerified) {
        try {
          await callPrivateApi(
            `/cart/delete-all/${user.id}`,
            "DELETE",
            undefined,
            token
          );
          console.log("Cart items deleted after payment verification.");
        } catch (error) {
          console.error("Error deleting cart:", error);
        }
      }
    };

    deleteCartItems();
  }, [user, token, isVerified]);

  if (isVerified === null) {
    return <div className="mt-20 text-center">Verifying your payment...</div>;
  }

  if (isVerified === false) {
    return (
      <div className="mt-20 text-center text-red-600">
        <h1 className="text-2xl font-bold">Payment Verification Failed</h1>
        <p className="mt-2">Please contact support or try again.</p>
      </div>
    );
  }

  return (
    <div className="mt-20 flex flex-col items-center justify-center p-6">
      <h1 className="text-blue-600 text-2xl font-bold">Payment Successful!</h1>
      <p className="text-gray-600 mt-2 mb-6">Thank you for your purchase.</p>
      <Link href="/order">
        <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
          Go to Order page
        </button>
      </Link>
    </div>
  );
}
