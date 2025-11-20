"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

export default function ProductRangerSlider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://backend.tigertigerfoods.com/api/get-product-ranges")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setProducts(data.data);
      })
      .catch((err) => console.error("Failed to load product ranges:", err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-12">
      <Swiper
        loop
        grabCursor
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="range-swiper pb-10 overflow-visible md:overflow-hidden"
      >
        {products.map((p, i) => (
          <SwiperSlide key={i} className="!overflow-visible px-2">
            <Link href={`/product-ranges/${p.slug}`}>
              <motion.div
                whileHover={{
                  scale: 1.06,
                  y: -6,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="cursor-pointer relative h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl"
                style={{
                  cursor:
                    'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTEyIDEySDIwVjIwSDE4VjE1LjQxTDEzLjcxIDE5LjcxTDEyLjI5IDE4LjI5TDE2LjU5IDE0SDEyVjEyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+") 16 16, pointer',
                }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute bottom-5 left-0 right-0 px-6">
                  <div className="w-full bg-[#FCE7A2] rounded-xl py-3 text-center shadow-md">
                    <p className="eczar text-[24px] md:text-[28px] font-semibold text-black">
                      {p.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </SwiperSlide>
        ))}

        {products.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            Loading ranges...
          </div>
        )}
      </Swiper>

      <style jsx global>{`
        .range-swiper {
          overflow: visible !important;
        }
        .swiper-slide {
          overflow: visible !important;
        }
      `}</style>
    </div>
  );
}
