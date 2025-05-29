import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import {
  FaApplePay,
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
} from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";

const FooterCopyright = () => (
  <div className="flex justify-between flex-col  mxl:flex-row items-center lg:mx-10 py-1">
    <div className=" ">
      <p className="flex items-center gap-1 text-gray-600">
        Copyright &copy;
        {new Date().getFullYear()} All rights reserved
      </p>
    </div>
    <div className="flex  space-x-4 mt-4 md:mt-0">
      <FaApplePay className="text-black text-xl" />
      <FaCcVisa className="text-black text-xl" />
      <FaCcDiscover className="text-black text-xl" />
      <FaCcMastercard className="text-black text-xl" />
      <RiSecurePaymentLine className="text-black text-xl" />
    </div>
  </div>
);

export default FooterCopyright;
