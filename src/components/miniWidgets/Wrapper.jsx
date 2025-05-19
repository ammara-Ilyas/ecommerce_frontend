"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Hero from "../layout/Hero";

const Wrapper = ({ children }) => {
  const pathname = usePathname();

  // Pages where Hero should NOT appear
  const hideHeroPaths = ["/contact/login", "/contact/register", "/otp"];
  const showHero = !hideHeroPaths.includes(pathname);

  return (
    <div>
      {showHero && <Hero />}
      <main>{children}</main>
    </div>
  );
};

export default Wrapper;
