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
  <div className="flex justify-between  items-center mx-10 py-1">
    <div className="">
      <p className="flex items-center gap-1 text-gray-600">
        Copyright &copy;
        {new Date().getFullYear()} All rights reserved | This template is made
        with <FaHeart className="text-gray-700 text-xl" />
        by
        <Link
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500"
        >
          ecommerce
        </Link>
      </p>
    </div>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <FaApplePay className="text-white text-xl" />
      <FaCcVisa className="text-white text-xl" />
      <FaCcDiscover className="text-white text-xl" />
      <FaCcMastercard className="text-white text-xl" />
      <RiSecurePaymentLine className="text-white text-xl" />
    </div>
  </div>
);

export default FooterCopyright;
