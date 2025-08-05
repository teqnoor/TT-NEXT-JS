"use client"; // Make this a client-side component

import React from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { useRef } from "react";
import Image from "next/image";

export default function SmoothSlider() {
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 6,
      spacing: 10,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 12 },
      },
    },
    created: () => {
      timer.current = setInterval(() => {
        slider.current?.next();
      }, 2000); // Change slide every 2 seconds
    },
    destroyed: () => {
      clearInterval(timer.current);
    },
  });

  const images = [
    { src: "/wowchow/1.png", alt: "Coco Choo" },
    { src: "/wowchow/2.png", alt: "Wow Chow" },
    { src: "/wowchow/3.png", alt: "PULP+" },
    { src: "/wowchow/4.png", alt: "Taste Japan 1" },
    { src: "/wowchow/5.png", alt: "Taste Japan 2" },
    { src: "/wowchow/1.png", alt: "Taste Japan 3" },
    { src: "/wowchow/2.png", alt: "Taste Japan 4" },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto  overflow-hidden">
        <h2 className="eczar font-semibold text-[32px] text-[#220016]">
          What's Cooking?
        </h2>
        <p className="mb-5">Discover our social media and connect with us</p>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {images.map((brand, index) => (
          <div
            className="keen-slider__slide flex justify-center items-center"
            key={index}
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={270}
              height={550}
              className="object-cover h-[550px]"
            />
          </div>
        ))}
      </div>
    </>
  );
}
