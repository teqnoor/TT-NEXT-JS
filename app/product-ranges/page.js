"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // 👈 import autoplay
import "swiper/css";

export default function ProductRangesPage() {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const header = document.getElementById("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch("https://tigertigerfoods.com/api/get-product-ranges")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.data);
        }
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const shouldOffset = pathname !== "/";

  return (
    <section className="py-12">
      <div
        style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-0">
          {/* 🔹 Slider above heading */}
          <Swiper
            loop
            grabCursor
            spaceBetween={16}
            autoplay={{
              delay: 3000, // ⏱ 3 seconds
              disableOnInteraction: false, // keep autoplay after user swipes
            }}
            modules={[Autoplay]} // 👈 enable autoplay
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="mb-10"
          >
            {products.map((p, i) => (
              <SwiperSlide key={i}>
                <div className="h-[220px] md:h-[540px] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Heading row */}
          <h2 className="eczar font-semibold text-3xl md:text-[64px] leading-tight text-[#30523E]">
            Discover our range
          </h2>
          <p className="text-sm md:text-base text-[#220016] mt-1 mb-4 md:mb-8">
            From Drinks to Sauces, Tiger Tiger Foods has it all for you
          </p>

          {/* Grid of products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div
                key={i}
                className="relative h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-5 left-0 right-0 px-6">
                  <div className="w-full bg-[#FCE7A2] rounded-xl py-3 text-center shadow-md">
                    <p className="eczar text-[24px] md:text-[28px] font-semibold text-black">
                      {p.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {products.length === 0 && (
              <p className="col-span-full text-center text-gray-500 py-10">
                Loading ranges...
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
