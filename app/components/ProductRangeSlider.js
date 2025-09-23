"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

export default function ProductRangerSlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://tigertigerfoods.com/api/get-product-ranges") // 👈 adjust if full URL needed
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.data);
        }
      })
      .catch((err) => {
        console.error("Failed to load product ranges:", err);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12">
      <Swiper
        loop
        grabCursor
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 }, // 📱 mobile
          640: { slidesPerView: 2 }, // small tablets
          1024: { slidesPerView: 3 }, // desktops
        }}
        className="range-swiper pb-10"
      >
        {products.map((p, i) => (
          <SwiperSlide key={i}>
            <Link href={`/product-ranges/${p.slug}`}>
              <div className="relative h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
                {/* FULL WIDTH LABEL */}
                <div className="absolute bottom-5 left-0 right-0 px-6">
                  <div className="w-full bg-[#FCE7A2] rounded-xl py-3 text-center shadow-md">
                    <p className="eczar text-[24px] md:text-[28px] font-semibold text-black">
                      {p.title}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {products.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            Loading ranges...
          </div>
        )}
      </Swiper>
    </div>
  );
}
