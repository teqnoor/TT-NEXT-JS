"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function ProductFeaturedPage() {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);

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

  const shouldOffset = pathname !== "/";

  return (
    <>
      <section className="py-12 ">
        {/* Grid Content */}
        <div
          style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
        >
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

      <section className="py-4 ">
        {/* Grid Content */}

        <div className="max-w-7xl mx-auto">
          

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {["/pulpRange2.png","/pulpRange3.png", "/pulpRange1.jpg"].map(
              (src, index) => (
                <div
                  key={index}
                  className="aspect-[3/4] md:aspect-[3/4] h-auto"
                >
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
        </div>
      </section>
            
    </>
  );
}
