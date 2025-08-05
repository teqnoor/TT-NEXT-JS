"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useRef } from "react";

const products = [
  {
    image: "/pulp1.png",
  },
  {
    image: "/pulp2.png",
  },
  {
    image: "/pulp3.png",
  },
  {
    image: "/pulp4.png",
  },
];

export default function RelatedProductsSlider() {
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
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

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[32px] eczar font-semibold text-[#220016]">
          Related Products
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => slider.current?.prev()}
            className="border border-[#220016] px-2 py-1 text-[#220016] text-lg rounded hover:bg-[#f5f5f5]"
          >
            &lt;
          </button>
          <button
            onClick={() => slider.current?.next()}
            className="border border-[#220016] px-2 py-1 text-[#220016] text-lg rounded hover:bg-[#f5f5f5]"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Slider */}
      <div ref={sliderRef} className="keen-slider">
        {products.map((product, index) => (
          <div
            key={index}
            className="keen-slider__slide flex justify-center items-center"
          >
            <Image
              src={product.image}
              alt={`Product ${index}`}
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
