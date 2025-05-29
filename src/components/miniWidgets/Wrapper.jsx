"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Hero from "../layout/Hero";
import { ToastContainer } from "react-toastify";

const Wrapper = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const is404Page =
    typeof window !== "undefined" && document.title.includes("404");
  const hideHeroPaths = ["/contact/login", "/contact/register", "/otp"];
  const protectedPaths = ["/cart", "/wishlist"];

  const showHero = !hideHeroPaths.includes(pathname) && !is404Page;
  const isProtected = protectedPaths.includes(pathname);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("token") || null; // check login status

    if (isProtected && !isLoggedIn) {
      router.replace("/contact/login"); // redirect to login if unauthenticated
    }
  }, [pathname]);

  return (
    <div>
      {showHero && <Hero />}
      <main>{children}</main>
      <div className="">
        <ToastContainer
          position="top-right"
          autoClose={500} // 1 second
          newestOnTop
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          toastClassName="!w-[200px] !text-sm"
        />
      </div>
    </div>
  );
};

export default Wrapper;
