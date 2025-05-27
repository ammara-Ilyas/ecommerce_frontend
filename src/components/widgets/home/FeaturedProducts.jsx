"use client";
import { useState, useRef, useEffect } from "react";

import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Heading, SeeAllButton } from "@/components/miniWidgets/Button";

const FeaturedProducts = () => {
  const carouselRef = useRef(null);

  const router = useRouter();
  const products = useSelector((state) => state.product.products);
  console.log("products", products);
  const [popularProducts, setPopularProducts] = useState([]);
  useEffect(() => {
    // setPopularProducts(products.filter((item) => item.ispopularProducts == false));
    setPopularProducts(products);
  }, [products]);
  console.log("new arrival", popularProducts);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4, // Show 4 items on desktop
      partialVisibilityGutter: 30, // Adjust gutter between cards
    },
    tablet: {
      breakpoint: { max: 786, min: 650 },
      items: 3, // Show 2 items on tablets
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 2, // Show 1 item on mobile
    },
  };
  const handleNavigate = () => {
    router.push("product");
  };
  return (
    <div className=" mx-8 pt-14  space-x-2  ">
      <div className="flex mr-16  mb-5 justify-between items-center">
        {" "}
        <Heading text="Featured Products" />
        <SeeAllButton text="See All" handleNavigate={handleNavigate} />
      </div>{" "}
      <Carousel
        ref={carouselRef}
        additionalTransfrom={0}
        // arrows
        autoPlay
        autoPlaySpeed={7000}
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
        slidesToSlide={2}
        swipeable
      >
        {products.map((product, index) => (
          <div key={index + product._id} className="mx-3  h-auto ">
            <ProductCard product={product} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
