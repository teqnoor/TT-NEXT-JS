"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ProductNewPage() {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [wowChowData, setWowChowData] = useState([]);

  useEffect(() => {
    const header = document.getElementById("header"); // Select global header
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }

    // Recalculate on resize (optional)
    const handleResize = () => {
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch(
      `https://backend.tigertigerfoods.com/api/get-new-arrival-and-featured`
    )
      .then((res) => res.json()) // Parse the response as JSON
      .then((response) => {
        setWowChowData(response.data.new_arrival); // Only store the "data" array
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
      });
  }, []);

  const shouldOffset = pathname !== "/";

  return (
    <>
      <section className="py-8 md:py-12">
        {/* Grid Content */}
        <div
          style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
        >
          <div className="max-w-6xl mx-auto text-center">
            {/* Heading */}
            <h2 className="eczar font-semibold text-[64px] text-[#405305]">
              New Products
            </h2>

            <p className="text-sm md:text-base text-[#405305] mt-1 mb-8">
              Latest and hot selling products from Tiger Tiger Foods
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        {/* Grid Content */}

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {wowChowData.map((card, i) => (
              <Link href={`/products/${card.slug}`} key={i}>
                <div className="h-[320px] md:h-[500px] ">
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
