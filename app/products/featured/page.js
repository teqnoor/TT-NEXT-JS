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
          height: "100vh",
        }}
      ></div>

      <section className="max-w-7xl mx-auto py-12 ">
        <h2 className="eczar font-semibold text-[64px] text-[#405305]">
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

      <section className="py-12 ">
        {/* Grid Content */}
        <div>
          <div className="max-w-7xl mx-auto text-center">
            {/* Heading */}
            <h2 className="eczar font-semibold text-[64px] text-[#405305]">
              Featured Products Ranges
            </h2>

            <p className="text-sm md:text-base text-[#405305] mt-1 mb-8">
              Top selling and featured products from Tiger Tiger Foods
            </p>
          </div>
        </div>
      </section>

      <section className="py-4">
        {/* Grid Content */}

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {wowChowData.map((p, i) => (
              <div key={i} className="aspect-[3/4] md:aspect-[3/4] h-auto">
                <Link href={`/products/${p.slug}`} key={i}>
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
                      src={p.images}
                      alt={p.name}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
