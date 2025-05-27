import React from "react";
import MessageForm from "./MessageForm";
import Icon from "./Icon";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";

import Link from "next/link";
const Address = () => {
  return (
    <div className="bg-slate-50 w-full mx-auto border-2 flex gap-4 justify-center ">
      <div className="flex bg-slate-50 flex-col gap-10 p-10 py-28 ">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Contact Us
        </h2>
        <p className="mt-6 text-lg w-[80%] text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem,
          voluptates.
        </p>
        <div className="flex gap-9  text-gray-600">
          <span>
            <MdOutlineMailOutline className="text-3xl" />
          </span>
          <span className="text-xl">contact@hr.com</span>
        </div>
        <div className="flex gap-9  text-gray-600">
          <span>
            <FaAddressCard className="text-2xl" />
          </span>
          <span className="text-xl">123 Main Street </span>
        </div>
        <div>
          <Icon />
        </div>
      </div>
      <div>
        <MessageForm />
      </div>
    </div>
  );
};

export default Address;
