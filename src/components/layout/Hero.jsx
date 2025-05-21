import React from "react";

import HeroCategories from "./widgets/HeroCategories";
import HeroSearch from "./widgets/HearoSearch";
const Hero = () => {
  return (
    <section className="border-2 border-red-900 ">
      <div className=" mx-auto sm:px-4">
        <div className="row flex flex-wrap">
          <div className=" mx-auto sm:mx-0 w-3/4  sm:w-1/2 lg:w-[35%] xl:w-1/4">
            <HeroCategories />
          </div>
          <div className="mx-auto sm:mx-0 border-2 w-full lg:w-3/4">
            <HeroSearch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
