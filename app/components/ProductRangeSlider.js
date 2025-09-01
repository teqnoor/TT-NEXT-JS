"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ProductRangerSlider() {
  const products = [
    { name: "Wow Chow Noodles", image: "/pulp1.png" },
    { name: "Bubble Tea", image: "/buble_tea.jpg" },
    { name: "Coco Choo", image: "/cococho.jpg" },
    { name: "Mango Juice", image: "/pulp2.png" },
  ];

  return (
    <div className="max-w-6xl mx-auto py-12">
      <Swiper
        slidesPerView={3}       // always 3 visible
        spaceBetween={24}       // spacing between cards
        loop={true}             // optional: keeps sliding infinitely
        grabCursor={true}
        className="range-swiper pb-10"
      >
        {products.map((p, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[380px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={p.image}
                alt={p.name}
                className="h-full w-full object-cover"
              />
              {/* FULL WIDTH LABEL */}
              <div className="absolute bottom-5 left-0 right-0 px-6">
                <div className="w-full bg-[#FCE7A2] rounded-xl py-3 text-center shadow-md">
                  <p className="text-base md:text-lg font-semibold text-black">
                    {p.name}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
