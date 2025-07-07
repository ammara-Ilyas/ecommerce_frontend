import React from "react";
import Hero from "@/components/widgets/about/Hero";
import AboutUs from "@/components/widgets/about/AboutUs";
// import ShopWithUs from "@/components/layout/widgets/ShopWithUS";
export const metadata = {
  title: "About Us | Ecommerce",
  description: "Learn more about our ecommerce platform, our mission, and our team.",
  keywords: "about ecommerce, company info, our team, mission"
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
