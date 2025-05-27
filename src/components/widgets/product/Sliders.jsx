"use client";
import { useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import ProductCard from "../home/ProductCard";
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
const SaleSlider = () => {
  const products = useSelector((state) => state.product.products);
  console.log("products", products);

  const carouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1536 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    extraLargeDesktop: {
      breakpoint: { max: 1536, min: 1280 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    largeDesktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 4,
    },
    mediumTablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    smallTablet: {
      breakpoint: { max: 768, min: 640 },
      items: 3,
    },
    largeMobile: {
      breakpoint: { max: 640, min: 480 },
      items: 2,
    },
    smallMobile: {
      breakpoint: { max: 480, min: 0 },
      items: 2,
    },
  };

  return (
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
        {products &&
          products.map((product, index) => (
            <div
              key={index + product._id + product.product}
              className="relative card w-full border-2   hover:shadow-xl p-4 transition"
            >
              <div className="absolute z-30 top-4 left-5 bg-red-500 text-white px-2 py-3 rounded-full text-sm ">
                20%
              </div>
              <ProductCard product={product} />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default SaleSlider;

import Image from "next/image";

export const ProductImageSlider = () => {
  const images = [
    "/images/image_01.jpg",
    "/images/image_02.jpg",
    "/images/image_01.jpg",
    "/images/image_02.jpg",
    "/images/image_01.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="w-[90%] xl:w-[60%] flex flex-col border shadow-lg">
      {/* Main Image */}
      <div className="mt-5 md:h-96 overflow-hidden relative">
        <Image
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className="object-cover transition-transform rounded-lg duration-500"
          fill
          quality={100}
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="mt-4 w-full flex gap-2 overflow-x-auto scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`flex-shrink-0 w-28 h-20 border-2 ${
              currentImageIndex === index
                ? "border-blue-500"
                : "border-gray-300"
            } rounded-lg overflow-hidden`}
          >
            <Image
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              width={200}
              height={200}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
