import React from "react";

const Hero = ({ image, haeading, text }) => {
  return (
    <div
      className="font-bold	flex  items-center pt-5 flex-col gap-2 h-[65vh] justify-center my-7"
      style={{
        backgroundImage: ` linear-gradient(rgba(4, 9, 30, 0.2), rgba(4, 9, 30, 0.2)), url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className=" text-[52px] text-white ">{haeading}</h1>
      <p className="text-white text-xl">{text}</p>
    </div>
  );
};

export default Hero;
