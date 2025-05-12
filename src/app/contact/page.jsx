import React from "react";
import Address from "@/components/widgets/contact/Address";
import Map from "@/components/widgets/contact/Map";
export const metadata = {
  title: "Contact",
  description: "contact page in SHop you & me",
};
const page = () => {
  return (
    <>
      <Address />
      <Map />
    </>
  );
};

export default page;
