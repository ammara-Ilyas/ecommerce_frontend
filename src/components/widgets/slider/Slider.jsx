"use client";
import { useState, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryCard from "../miniWidgets/CategoryCard";
import { categories } from "../home/Categories";

const CategoriesSliders = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const centerActiveCard = (index) => {
    if (carouselRef.current) {
      carouselRef.current.goToSlide(index);
    }
    setActiveIndex(index);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8, // Show 4 items on desktop
      partialVisibilityGutter: 30, // Adjust gutter between cards
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 5, // Show 2 items on tablets
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 3, // Show 1 item on mobile
    },
  };
  return (
    <div className="flex flex-col justify-between ">
      <h2 className="text-black mb-6 text-3xl sm:text-4xl text-center font-serif font-bold  letter-wide">
        Our Clients Say!!!
      </h2>

      <div className=" mx-8 ">
        <Carousel
          ref={carouselRef} // Attach the ref here
          additionalTransfrom={0}
          // arrows
          autoPlay
          autoPlaySpeed={3000}
          className="mb-12"
          containerClass="carousel-container"
          draggable
          focusOnSelect={true}
          infinite
          itemClass="carousel-item-padding-40-px"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderDotsOutside
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          sliderClass=""
          slidesToSlide={1}
          swipeable
          afterChange={(nextSlideIndex) => setActiveIndex(nextSlideIndex)} // Track active index
        >
          {categories.map((cat, index) => (
            <div key={index} className="mx-3">
              <CategoryCard cat={cat} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CategoriesSliders;
