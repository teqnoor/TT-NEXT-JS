"use client"; // Make this a client-side component

import React from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { useRef } from "react";

import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function SmoothSlider() {
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 6,
      spacing: 5,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(max-width: 1024px)": {
        slides: { perView: 3, spacing: 5 },
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

  const media = [
    { src: "/reels/1.mp4", alt: "Coco Choo" },
    { src: "/reels/2.mp4", alt: "Wow Chow" },
    { src: "/reels/3.mp4", alt: "PULP+" },
    { src: "/reels/4.mp4", alt: "Taste Japan 1" },
    { src: "/reels/2.mp4", alt: "Taste Japan 2" },
    { src: "/reels/4.mp4", alt: "Taste Japan 3" },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div className="px-6 md:px-0">
          <h2 className="eczar font-semibold text-[32px] text-[#556D08]">
            What's Cooking?
          </h2>
          <p className="mb-5">Discover our social media and connect with us</p>
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {media.map((item, index) => (
          <div
            className="keen-slider__slide flex justify-center items-center"
            key={index}
          >
            <video
              src={item.src}
              title={item.alt}
              autoPlay
              muted
              loop
              playsInline
              className="object-cover h-full w-full"
            />
          </div>
        ))}
      </div>

      <SocialLinks />
    </>
  );
}
