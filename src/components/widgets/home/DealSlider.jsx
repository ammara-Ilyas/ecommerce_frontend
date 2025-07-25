"use client";
import { useState, useRef } from "react";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const DealSlider = ({ images = [], height = "" }) => {
  const carouselRef = useRef(null);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // Show 4 items on desktop
      partialVisibilityGutter: 30, // Adjust gutter between cards
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 3, // Show 2 items on tablets
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 2, // Show 1 item on mobile
    },
  };
  return (
    <div className={` mx-8 my-2 sm:my-5 space-x-2  ${height} `}>
      <Carousel
        ref={carouselRef}
        additionalTransfrom={0}
        // arrows
        autoPlay
        autoPlaySpeed={10000}
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
      >
        {images &&
          images.map((image, index) => (
            <div
              key={index}
              className={` relative ${height} hover:scale-105 duration-300 transition-all hover:shadow-md ease-in-out rounded-md mx-[1px]`}
            >
              <Image
                src={image}
                alt={`slider ${index}`}
                fill
                className="rounded-md "
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default DealSlider;
