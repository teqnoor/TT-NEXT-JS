"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function BrandsSlider() {
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 5,
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

  const brands = [
    { src: "/brands/cococho.png", alt: "Coco Choo" },
    { src: "/brands/wowchow.png", alt: "Wow Chow" },
    { src: "/brands/pulp.png", alt: "PULP+" },
    { src: "/brands/taste_japan.png", alt: "Taste Japan 1" },
    { src: "/brands/taste_japan.png", alt: "Taste Japan 2" },
    { src: "/brands/taste_japan.png", alt: "Taste Japan 3" },
    { src: "/brands/taste_japan.png", alt: "Taste Japan 4" },
  ];

  return (
    <section className="bg-[#40023F] py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={sliderRef} className="keen-slider">
          {brands.map((brand, index) => (
            <div
              className="keen-slider__slide flex justify-center items-center"
              key={index}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={170}
                height={68}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
