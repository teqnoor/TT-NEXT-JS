"use client"; // Make this a client-side component

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Correct import for Swiper and SwiperSlide
import SwiperCore, { FreeMode, Pagination, Autoplay } from "swiper/core"; // Import core modules

// Import Swiper styles
import "swiper/swiper-bundle.css"; // Import swiper styles

// Enable the modules
SwiperCore.use([FreeMode, Pagination, Autoplay]);

export default function SmoothSlider() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8 overflow-hidden">
        {" "}
        {/* Add overflow-hidden to prevent excess overflow */}
        <h2 className="font-fields font-extrabold text-[32px] text-[#220016]">
          What's Cooking?
        </h2>
        <p className="mb-5">Discover our social media and connect with us</p>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000, // 3 seconds per slide
          disableOnInteraction: false, // Autoplay doesn't stop after user interaction
        }}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <div className="overflow-visible">
            {" "}
            {/* Allow the image to overflow */}
            <img
              src="/wowchow/1.png"
              alt="Tiger Tiger Logo"
              className="object-cover w-full h-[500px] " // Translate the image left to simulate overflow
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="overflow-visible">
            <img
              src="/wowchow/2.png"
              alt="Tiger Tiger Logo"
              className="object-cover w-full h-[500px] " // Translate the image left to simulate overflow
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="overflow-visible">
            <img
              src="/wowchow/3.png"
              alt="Tiger Tiger Logo"
              className="object-cover w-full h-[500px] " // Translate the image left to simulate overflow
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="overflow-visible">
            <img
              src="/wowchow/4.png"
              alt="Tiger Tiger Logo"
              className="object-cover w-full h-[500px] " // Translate the image left to simulate overflow
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="overflow-visible">
            <img
              src="/wowchow/5.png"
              alt="Tiger Tiger Logo"
              className="object-cover w-full h-[500px] " // Translate the image left to simulate overflow
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <div className="overflow-visible">
            <img
              src="/wowchow/5.png"
              alt="Tiger Tiger Logo"
              className="object-cover w-full h-[500px] " // Translate the image left to simulate overflow
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <div className="overflow-visible">
            <img
              src="/wowchow/5.png"
              alt="Tiger Tiger Logo"
              className="object-cover w-full h-[500px] " // Translate the image left to simulate overflow
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
