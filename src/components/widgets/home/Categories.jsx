"use client";
import { useState, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategoryCard from "../miniWidgets/CategoryCard";
import { useSelector } from "react-redux";
import { Heading } from "@/components/miniWidgets/Button";
// export const categories = [
//   {
//     title: "Fashion",
//     icon: "/fashion-icon.png", // Update with correct path
//     bgColor: "bg-green-100",
//   },
//   {
//     title: "Electronics",
//     icon: "/electronics-icon.png",
//     bgColor: "bg-rose-100",
//   },
//   {
//     title: "Fashion",
//     icon: "/fashion-icon.png", // Update with correct path
//     bgColor: "bg-green-100",
//   },
//   {
//     title: "Fashion",
//     icon: "/fashion-icon.png", // Update with correct path
//     bgColor: "bg-green-100",
//   },
//   {
//     title: "Fashion",
//     icon: "/fashion-icon.png", // Update with correct path
//     bgColor: "bg-green-100",
//   },
//   {
//     title: "Fashion",
//     icon: "/fashion-icon.png", // Update with correct path
//     bgColor: "bg-green-100",
//   },
//   {
//     title: "Fashion",
//     icon: "/fashion-icon.png", // Update with correct path
//     bgColor: "bg-green-100",
//   },
//   {
//     title: "Bags",
//     icon: "/bags-icon.png",
//     bgColor: "bg-pink-100",
//   },
// ];
const CategoriesSlider = () => {
  const categories = useSelector((state) => state.product.categories);
  console.log("catego", categories);

  const carouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1536 },
      items: 9,
      partialVisibilityGutter: 40,
    },
    extraLargeDesktop: {
      breakpoint: { max: 1536, min: 1280 },
      items: 8,
      partialVisibilityGutter: 30,
    },
    largeDesktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 6,
    },
    mediumTablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 5,
    },
    smallTablet: {
      breakpoint: { max: 768, min: 640 },
      items: 5,
    },
    largeMobile: {
      breakpoint: { max: 640, min: 480 },
      items: 4,
    },
    smallMobile: {
      breakpoint: { max: 480, min: 300 },
      items: 3,
    },
    smallMobile: {
      breakpoint: { max: 300, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="flex flex-col justify-between mt-0">
      <Heading text="Featured Categories" />

      <div className="mx-4 sm:mx-8 ">
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
          {categories &&
            categories.map((cat, index) => (
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
