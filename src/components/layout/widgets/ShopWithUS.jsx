import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { PiGlobeStandFill } from "react-icons/pi";
import {
  FaTags,
  FaShippingFast,
  FaFileInvoiceDollar,
  FaBoxes,
  FaUndoAlt,
} from "react-icons/fa";
const ShopWithUs = () => {
  // features.js

  const shop = [
    {
      icon: <FaTags size={28} />,
      title: "Best prices & offers",
      subtitle: "Orders $50 or more",
    },
    {
      icon: <FaShippingFast size={28} />,
      title: "Free delivery",
      subtitle: "Orders $50 or more",
    },
    {
      icon: <FaFileInvoiceDollar size={28} />,
      title: "Great daily deal",
      subtitle: "Orders $50 or more",
    },
    {
      icon: <FaBoxes size={28} />,
      title: "Wide assortment",
      subtitle: "Orders $50 or more",
    },
    {
      icon: <FaUndoAlt size={28} />,
      title: "Easy returns",
      subtitle: "Orders $50 or more",
    },
  ];

  return (
    <div className="flex flex-wrap w-[95%] py-5 mt-5  gap-2 xl:gap-4 mx-auto items-center justify-center">
      {shop &&
        shop.map((item, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-md p-4 justify-center   flex gap-3 items-center flex-row"
          >
            <span className=" text-gray-500 hover:text-blue-500 hover:animate-bounce transition-all duration-150 text-5xl">
              {item?.icon}
            </span>
            <div>
              {" "}
              <h4 className="text-xl">{item?.title}</h4>
              <p className="text-gray-500 ">{item?.subtitle}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShopWithUs;
