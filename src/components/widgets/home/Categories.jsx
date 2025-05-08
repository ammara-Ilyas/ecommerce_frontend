"use client";
import { useState, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryCard from "../miniWidgets/CategoryCard";

export const categories = [
  {
    title: "Fashion",
    icon: "/fashion-icon.png", // Update with correct path
    bgColor: "bg-green-100",
  },
  {
    title: "Electronics",
    icon: "/electronics-icon.png",
    bgColor: "bg-rose-100",
  },
  {
    title: "Fashion",
    icon: "/fashion-icon.png", // Update with correct path
    bgColor: "bg-green-100",
  },
  {
    title: "Fashion",
    icon: "/fashion-icon.png", // Update with correct path
    bgColor: "bg-green-100",
  },
  {
    title: "Fashion",
    icon: "/fashion-icon.png", // Update with correct path
    bgColor: "bg-green-100",
  },
  {
    title: "Fashion",
    icon: "/fashion-icon.png", // Update with correct path
    bgColor: "bg-green-100",
  },
  {
    title: "Fashion",
    icon: "/fashion-icon.png", // Update with correct path
    bgColor: "bg-green-100",
  },
  {
    title: "Bags",
    icon: "/bags-icon.png",
    bgColor: "bg-pink-100",
  },
];
const CategoriesSlider = () => {
  const carouselRef = useRef(null);

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
      <h2 className="text-black ml-16 mb-6 text-xl font-semibold  letter-wide">
        Featured Categories
      </h2>

      <div className=" mx-8 ">
        <Carousel
          ref={carouselRef} // Attach the ref here
          additionalTransfrom={0}
          arrows={false}
          autoPlay
          autoPlaySpeed={5000}
          className="mb-12"
          containerClass="carousel-container"
          draggable
          focusOnSelect={true}
          infinite
          itemClass="carousel-item-padding-40-px"
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          sliderClass=""
          slidesToSlide={1}
          swipeable
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

export default CategoriesSlider;
