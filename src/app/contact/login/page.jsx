import React from "react";
import Login from "@/components/widgets/contact/Login";
export const metadata = {
  title: "Login",
  description: "login page in Ecommerce ",
};
const Page = () => {
  return (
    <>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `url${"/images/bg_signup.webp"}`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Login />
      </div>
    </>
  );
};

export default Page;
