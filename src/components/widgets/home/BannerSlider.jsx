"use client";
import { useState, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";

const BannerSlider = () => {
  const carouselRef = useRef(null);
  const banners = useSelector((state) => state.product.banners);
  console.log("bannerssss", banners);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1, // Show 4 items on desktop
      partialVisibilityGutter: 30, // Adjust gutter between cards
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 1, // Show 2 items on tablets
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1, // Show 1 item on mobile
    },
  };
  return (
    <div className=" ">
      <Carousel
        ref={carouselRef} // Attach the ref here
        additionalTransfrom={0}
        arrows
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
      >
        {banners &&
          banners.map((banner, index) => (
            <div
              className="w-full h-[150px] sm:h-[250px] md:h-[350px] lg:h-[400px]"
              key={banner._id}
            >
              {" "}
              <Image src={banner.image} alt={banner.name} fill />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default BannerSlider;
