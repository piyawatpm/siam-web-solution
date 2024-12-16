import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
function TextCarousel({ texts }: { texts: string[] }) {
  console.log("re-render slider");
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000, // Increased for smoother animation
    autoplaySpeed: 4000, // Set to 0 for continuous movement
    cssEase: "linear",
    arrows: false,
    variableWidth: true,
    pauseOnHover: false, // Prevent pausing on hover
    waitForAnimate: false, // Don't wait for animation to complete
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full px-5 text-black text-5xl border-t-[1px] border-b-[1px] border-black">
      {/* Add mask containers */}
      <div className="absolute left-0 w-[20%] h-full z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="absolute left-0 w-[20%] h-full z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="absolute left-0 w-[20%] h-full z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="absolute left-0 w-[20%] h-full z-10 bg-gradient-to-r from-white to-transparent" />

      <div className="absolute right-0 w-[20%] h-full z-10 bg-gradient-to-l from-white to-transparent" />
      <div className="absolute right-0 w-[20%] h-full z-10 bg-gradient-to-l from-white to-transparent" />
      <div className="absolute right-0 w-[20%] h-full z-10 bg-gradient-to-l from-white to-transparent" />
      <div className="absolute right-0 w-[20%] h-full z-10 bg-gradient-to-l from-white to-transparent" />

      {/* Slider container */}
      <div className="slider-container">
        <Slider {...settings}>
          {texts.map((text, index) => (
            <div
              style={{ width: text === "/" ? 20 : "10em" }}
              key={index}
              className=""
            >
              <h3 className="text-center py-4">{text}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TextCarousel;
