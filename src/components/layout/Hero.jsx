import React from "react";

import HeroCategories from "./widgets/HeroCategories";
import HeroSearch from "./widgets/HearoSearch";
const Hero = () => {
  return (
    <section className="mb-5 ">
      <div className=" mx-auto ">
        <div className="row w-[95%] xl:w-[90%] mx-auto flex flex-wrap gap-2 sm:gap-6">
          <div className=" mx-0 w-[37%] sm:w-[33%] lg:w-[25%] xl:w-[20%] ">
            <HeroCategories />
          </div>
          <div className="mx-0  w-[60%] lg:w-[70%] xl:w-[75%] ">
            <HeroSearch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
