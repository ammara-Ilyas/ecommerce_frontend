import React from "react";
import OtpForm from "@/components/widgets/contact/OtpForm";
export const metadata = {
  title: "OTP Verification | Ecommerce",
  description: "Verify your account with a one-time password (OTP) to continue shopping securely.",
  keywords: "otp, verification, account security, ecommerce login"
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
        <OtpForm />
      </div>
    </>
  );
};

export default Page;
