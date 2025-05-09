// import BreadCums from "@/components/ClientSide/BreadCums";
import React from "react";
// import notFound from "@/assests/404.png";
import Image from "next/image";
const PageNotFound = () => {
  return (
    <>
      {/* <BreadCums activeTab={"Page Not Found"} /> */}
      <div className="container mx-auto px-[50px] py-20">
        <div className="flex justify-center items-center flex-col">
          {/* <Image
            src={notFound}
            width={582}
            height={"100%"}
            className="object-contain"
            alt="not_found"
          /> */}
          <h1 className="text-[40px] leading-[40px] font-semibold text-gray-900 pt-3">
            Oops! page not found
          </h1>
          <p className="text-[16px] font-medium text-gray-500 max-w-[500px] text-center pt-2">
            Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.
            Maecenas sagittis tortor at metus mollis
          </p>
          <button className="bg-color1 text-white px-8 py-3.5 transition ease-in-out duration-300 hover:bg-white hover:text-color1  rounded-full font-semibold text-[14px] mt-5">
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
