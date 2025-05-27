import React from "react";
import Address from "@/components/widgets/contact/Address";
import Map from "@/components/widgets/contact/Map";
import MessageForm from "@/components/widgets/contact/MessageForm";
import Hero from "@/components/widgets/about/Hero";
export const metadata = {
  title: "Contact",
  description: "contact page in SHop you & me",
};
const page = () => {
  return (
    <>
      <Hero
        image="/images/about/bg.jpg"
        haeading="Contact Us"
        text="We are Here to Help You"
      />
      <MessageForm />
      <Map />
    </>
  );
};

export default page;
