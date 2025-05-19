import React from "react";

const TopMarqueeBar = () => {
  return (
    <div className="bg-black min-w-full overflow-hidden whitespace-nowrap text-end ">
      <div className="inline-block  text-white text-sm animate-marquee will-change-transform  ">
        📍 Store Location: Lincoln- 344, Illinois, Chicago, USA
      </div>
    </div>
  );
};

export default TopMarqueeBar;
