"use client"; // Make this a client-side component

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Correct import for Swiper and SwiperSlide
import SwiperCore, { FreeMode, Pagination } from "swiper/core"; // Import core modules

// Import Swiper styles
import "swiper/swiper-bundle.css"; // Import swiper styles
import Image from "next/image";

// Enable the modules
SwiperCore.use([FreeMode, Pagination]);

export default function SmoothSlider() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 overflow-hidden">
      {" "}
      {/* Add overflow-hidden to prevent excess overflow */}
      <h2 className="text-3xl font-bold mb-6">What's Cooking?</h2>
      <p className="mb-5">Discover our social media and connect with us</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
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
              className="object-cover w-full h-[520px] transform translate-x-[-40px]" // Translate the image left to simulate overflow
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="overflow-visible">
            <img
              src="/wowchow/2.png"
              alt="Tiger Tiger Logo"
              className="object-cover w-full h-[520px] transform translate-x-[-40px]" // Translate the image left to simulate overflow
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="overflow-visible">
            <img
              src="/wowchow/3.png"
              alt="Tiger Tiger Logo"
              className="object-cover w-full h-[520px] transform translate-x-[-40px]" // Translate the image left to simulate overflow
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="overflow-visible">
            <img
              src="/wowchow/4.png"
              alt="Tiger Tiger Logo"
              className="object-cover w-full h-[520px] transform translate-x-[-40px]" // Translate the image left to simulate overflow
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="overflow-visible">
            <img
              src="/wowchow/5.png"
              alt="Tiger Tiger Logo"
              className="object-cover w-full h-[520px] transform translate-x-[-40px]" // Translate the image left to simulate overflow
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
