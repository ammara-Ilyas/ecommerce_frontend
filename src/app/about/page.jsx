import React from "react";
import Hero from "@/components/widgets/about/Hero";
import AboutUs from "@/components/widgets/about/AboutUs";
import ShopWithUs from "@/components/widgets/about/ShopWithUS";
export const metadata = {
  title: "About",
  description: "about page in SHop you & me",
};
const page = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <ShopWithUs />
    </>
  );
};

export default page;
