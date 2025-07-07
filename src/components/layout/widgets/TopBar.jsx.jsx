import React from "react";

const TopMarqueeBar = () => {
  return (
    <div className="bg-black min-w-full flex items-center  ">
      <marquee direction="left" className="  text-white  text-sm py-[1px] ">
        📍 Store Location: Lincoln- 344, Illinois, Chicago, USA
      </marquee>
    </div>
  );
};

export default TopMarqueeBar;
