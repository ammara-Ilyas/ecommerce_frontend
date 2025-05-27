import React from "react";
import Hero from "@/components/widgets/about/Hero";
import AboutUs from "@/components/widgets/about/AboutUs";
// import ShopWithUs from "@/components/layout/widgets/ShopWithUS";
export const metadata = {
  title: "About",
  description: "about page in Ecommerce",
};
const page = () => {
  return (
    <>
      <Hero
        image="/images/about/bg.jpg"
        haeading="About Us"
        text="Fast, Secure & Easy Shopping"
      />
      <AboutUs />
      {/* <ShopWithUs /> */}
    </>
  );
};

export default page;
