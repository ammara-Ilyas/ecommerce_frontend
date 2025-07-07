"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Hero from "../layout/Hero";
import { ToastContainer } from "react-toastify";
import NewsletterSection from "@/components/layout/footer/widgets/NewsLetter";
import ShopWithUs from "@/components/layout/widgets/ShopWithUS";

const hideLayoutPaths = [
  "/contact/login",
  "/contact/otp",
  "/contact/register",
  "/refund-policy",
  "/terms-and-conditions",
  "/not-found"
];

const Wrapper = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();

  const is404Page = typeof window !== "undefined" && document.title.includes("404");
  const hideHeroPaths = ["/contact/login", "/contact/register", "/otp"];
  const protectedPaths = ["/cart", "/wishlist", "/contact/account","/checkout"];

  const shouldHideLayout = hideLayoutPaths.some((path) => pathname.startsWith(path));
  const showHero = !hideHeroPaths.includes(pathname) && !is404Page && !shouldHideLayout;
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
      {!shouldHideLayout && <NewsletterSection />}
      {!shouldHideLayout && <ShopWithUs />}
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
