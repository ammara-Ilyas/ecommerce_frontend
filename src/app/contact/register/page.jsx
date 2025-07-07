import React from "react";
import Signup from "@/components/widgets/contact/Signup";
export const metadata = {
  title: "Register",
  description: "register page in Ecommerce",
};
const Page = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('@l/assets/image/bg_signup.webp')'",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Signup />
    </div>
  );
};

export default Page;
