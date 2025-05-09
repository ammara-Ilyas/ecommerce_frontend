import React from "react";

import HeroCategories from "./widgets/HeroCategories";
import HeroSearch from "./widgets/HearoSearch";
const Hero = () => {
  return (
    <section className="border-2 h-[65px]">
      <div className="container mx-auto px-4">
        <div className="row flex flex-wrap">
          <div className="col-lg-3 w-full lg:w-1/4">
            <HeroCategories />
          </div>
          <div className="col-lg-9 w-full lg:w-3/4">
            <HeroSearch />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
