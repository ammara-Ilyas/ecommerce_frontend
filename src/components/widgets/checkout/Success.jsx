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

  useEffect(() => {
    const session_id = new URLSearchParams(window.location.search).get(
      "session_id"
    );
    if (session_id) {
      fetch(`/api/verify-payment?session_id=${session_id}`);
    }
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
      if (user && token) {
        try {
          await callPrivateApi(
            `/cart/delete-all/${user.id}`,
            "DELETE",
            undefined,
            token
          );
        } catch (error) {
          console.error("Error deleting cart:", error);
        }
      }
    };
    deleteCartItems();
  }, [user, token]);

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
