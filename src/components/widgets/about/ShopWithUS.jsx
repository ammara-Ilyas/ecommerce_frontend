import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { PiGlobeStandFill } from "react-icons/pi";

const ShopWithUs = () => {
  const shop = [
    {
      icon: <MdOutlineLocalShipping />,
      title: "Fast Delivery",
      des: "variations of passages of Lorem Ipsum available",
    },
    {
      icon: <AiOutlineDeliveredProcedure />,
      title: "Free Shipping",
      des: "variations of passages of Lorem Ipsum available",
    },
    {
      icon: <PiGlobeStandFill />,
      title: "Best Quality",
      des: "variations of passages of Lorem Ipsum available",
    },
  ];
  return (
    <div>
      <h1 className="text-center font-bold text-4xl py-10 uppercase">
        Why Shop with Us
      </h1>
      <div className="flex flex-wrap w-[85%] gap-10 mx-auto items-center justify-between">
        {shop.map((item, i) => (
          <div
            key={i}
            className="bg-gray-100 rounded-md p-4 w-[30%] flex gap-2 items-center justify-center flex-col"
          >
            <span className=" text-gray-500 text-5xl">{item.icon}</span>
            <h4 className="text-2xl">{item.title}</h4>
            <p className="text-center">{item.des}</p>
          </div>
        ))}
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ShopWithUs;
