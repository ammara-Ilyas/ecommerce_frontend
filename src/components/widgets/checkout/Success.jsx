"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { callPrivateApi } from "@/libs/CallApis";
import { getToken, user } from "@/libs/Token";
export default function Success() {
  const router = useRouter();

  useEffect(() => {
    const verify = async () => {
      const { session_id } = router.query;
      if (session_id) {
        const res = await fetch(`/api/verify-payment?session_id=${session_id}`);
        // console.log("res", res);
      }
    };
    verify();
  }, [router.query]);
  const user = JSON.parse(localStorage.getItem("user")) || null;
  const [token, setToken] = useState(null);

  useEffect(() => {
    const t = getToken();
    setToken(t);
  }, []);
  useEffect(() => {
    const deleteCartItems = async () => {
      try {
        const res = await callPrivateApi(
          `/cart/delete-all/${user.id}`,
          "DELETE",
          undefined,
          token
        );
        // console.log("res in sucess", res);
      } catch (error) {
        console.error(error);
      }
    };
    deleteCartItems;
  }, []);

  return (
    <div className="mt-20 flex flex-col items-center justify-center p-6">
      <h1 className="text-green-600 text-2xl font-bold">Payment Successful!</h1>
      <p className="text-gray-600 mt-2 mb-6">Thank you for your purchase.</p>
      <Link href="/">
        <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
