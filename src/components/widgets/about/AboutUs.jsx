import React from "react";
// import leftImg from "@/image/about/about-left-image.jpg";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import Icon from "../contact/Icon";

const AboutUs = () => {
  return (
    <div className="w-[90%] mx-auto py-20 bg-white">
      <div className="container  px-4 mx-auto">
        <div className=" flex  justify-center ">
          <div className="left-image w-[50%]  overflow-hidden rounded-lg ">
            <Image
              src="/images/about/about-left-image.jpg"
              alt=""
              className=" object-cover"
              width={550}
              height={450}
            />
          </div>
          <div className="   w-[50%]  text-[15px]  flex flex-col gap-4">
            <h4 className="text-4xl font-bold mb-4">About Us & Our Skills</h4>
            <span className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod kon tempor incididunt ut labore.
            </span>
            <div className=" bg-gray-100 p-4 rounded-lg flex">
              <FaQuoteLeft className="text-4xl text-gray-600 mr-5 " />
              <p className="text-[15px] font-bold text-gray-600 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiuski smod kon tempor incididunt ut labore.
              </p>
            </div>
            <p className=" text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <div>
              <Icon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
