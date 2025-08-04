"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function BlogsPage() {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      <section className="py-12">
        {/* Grid Content */}
        <div
          style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
        >
          <div className="max-w-6xl mx-auto  flex flex-wrap justify-between items-center mb-6 px-6 md:px-0">
            <div>
              <h2 className="font-fields font-extrabold text-[32px] text-[#220016]">
                Latest Blogs
              </h2>
              <p>Read news, blogs and latest articles from Tiger Tiger Foods</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div
              className={`bg-[#FEE600] text-black p-[32px] ${
                hoveredIndex === 0 ? "shadow-[-11px_12px_0px_0px_#000000]" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h2 className="text-xl font-semibold mb-[70px]">
                Japanese Cooking for Beginners: 5 Simple Recipes to Start With
              </h2>
              <p className="mb-[40px]">
                A guide to simple Japanese food recipes for beginners.
              </p>
              <a href="#" className="text-black mt-2 block">
                READ MORE
              </a>
            </div>

            <div
              className={`bg-[#E597FF] text-black p-[32px] ${
                hoveredIndex === 1 ? "shadow-[-11px_12px_0px_0px_#000000]" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h2 className="text-xl font-semibold mb-[70px]">
                How To Make Simple Japanese Dips Using Tiger Tiger Sauces
              </h2>
              <p className="mb-[40px]">
                A simple guide to making delicious Japanese dips with Tiger
                Tiger sauces.
              </p>
              <a href="#" className="text-black mt-2 block">
                READ MORE
              </a>
            </div>

            <div
              className={`bg-[#97E0FF] text-black p-[32px] ${
                hoveredIndex === 2 ? "shadow-[-11px_12px_0px_0px_#000000]" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h2 className="text-xl font-semibold mb-[70px]">
                The Rise of Japanese Cuisine in the UK: What You Need to Know
              </h2>
              <p className="mb-[40px]">
                The growing popularity of Japanese food in the UK.
              </p>
              <a href="#" className="text-black mt-2 block">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
