"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductFeaturedPage() {
  const [wowChowData, setWowChowData] = useState([]);

  useEffect(() => {
    fetch(
      `https://backend.tigertigerfoods.com/api/get-new-arrival-and-featured`
    )
      .then((res) => res.json()) // Parse the response as JSON
      .then((response) => {
        setWowChowData(response.data.featured_product); // Only store the "data" array
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
      });
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/feature_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat", // prevent repeating
          height: "30vh",
        }}
      ></div>

      <section className="max-w-7xl mx-auto py-8 md:py-12 px-6 md:px-0">
        <h2 className="text-center md:text-left eczar font-semibold text-[32px] md:text-[64px] text-[#405305]">
          Cramm’d Chickpeas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {["/crammd_1.jpg", "/crammd_2.jpg", "/crammd_3.jpg"].map(
            (src, index) => (
              <div key={index} className="aspect-[3/4] md:aspect-[3/4] h-auto">
                <div className="w-full h-full overflow-hidden rounded-3xl">
                  <img
                    src={src}
                    alt={`Pulp Range ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </section>

      <section className="py-8 md:py-12">
        {/* Grid Content */}
        <div>
          <div className="max-w-7xl mx-auto text-center">
            {/* Heading */}
            <h2 className="text-center md:text-left eczar font-semibold text-[32px] md:text-[64px] text-[#405305]">
              Featured Products
            </h2>

            <p className="text-center md:text-left text-sm md:text-base text-[#405305] mt-1 mb-8">
              Top selling and featured products from Tiger Tiger Foods
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        {/* Grid Content */}

        <div className="max-w-7xl mx-auto px-6 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {wowChowData.map((card, i) => (
              <Link
                href={`/products/${card.slug}`}
                key={i}
                className="h-[420px] md:h-[500px] "
              >
                <div>
                  <div
                    key={i}
                    className="h-[320px] md:h-[420px] rounded-3xl overflow-hidden"
                  >
                    <img
                      src={card.images}
                      alt={card.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-[#FCE7A2] rounded-xl py-3 text-center shadow-md">
                      <p className="eczar text-[14px] md:text-[16px] font-semibold text-black">
                        {card.name}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
