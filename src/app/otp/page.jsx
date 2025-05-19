import React from "react";
import OtpForm from "@/components/widgets/contact/OtpForm";
export const metadata = {
  title: "Otp",
  description: "Otp page of ecommerce dashboard",
};
const Page = () => {
  return (
    <>
      <div
        className=" -mt-24 h-[]100vh"
        style={{
          backgroundImage: `url${"/images/bg_signup.webp"}`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <OtpForm />
      </div>
    </>
  );
};

export default Page;
