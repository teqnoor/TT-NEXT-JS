"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CategoryMarquee from "../components/categoryMarquee";
import Link from "next/link";

export default function ProductsPage() {
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
      <section className="py-12 bg-[#fff0b4]">
        {/* Grid Content */}
        <div
          style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
        >
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <h2 className="eczar font-semibold text-[32px] text-[#220016]">
              All Products
            </h2>

            <p className="text-sm md:text-base text-[#220016] mt-1 mb-8">
              Discover a wide range of products
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {/* Card Template */}
              {[
                {
                  title: "Wow Chow Noodles",
                  image: "/wow.jpg",
                  slug: "product-detail-test",
                },
                {
                  title: "Bubble Tea",
                  image: "/buble_tea.jpg",
                  slug: "product-detail-test",
                },
                {
                  title: "Coco Choo Drink",
                  image: "/cococho.jpg",
                  slug: "product-detail-test",
                },
                {
                  title: "Japanese Range",
                  image: "/sauces.jpg",
                  slug: "product-detail-test",
                },

                {
                  title: "Coco Choo Drink",
                  image: "/cococho.jpg",
                  slug: "product-detail-test",
                },
                {
                  title: "Japanese Range",
                  image: "/sauces.jpg",
                  slug: "product-detail-test",
                },
                {
                  title: "Japanese Range",
                  image: "/sauces.jpg",
                  slug: "product-detail-test",
                },
                {
                  title: "Japanese Range",
                  image: "/sauces.jpg",
                  slug: "product-detail-test",
                },
                {
                  title: "Wow Chow Noodles",
                  image: "/wow.jpg",
                  slug: "product-detail-test",
                },
                {
                  title: "Japanese Range",
                  image: "/sauces.jpg",
                  slug: "product-detail-test",
                },
                {
                  title: "Bubble Tea",
                  image: "/buble_tea.jpg",
                  slug: "product-detail-test",
                },
              ].map((card, i) => (
                <Link href={`/products/${card.slug}`} key={i}>
                  <div
                    key={i}
                    className="relative h-75 rounded bg-cover bg-center flex items-end justify-center"
                    style={{ backgroundImage: `url('${card.image}')` }}
                  >
                    <span className="absolute bottom-[5%] bg-white text-[#220016] font-medium text-sm px-4 py-1 rounded-full">
                      {card.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-[#fff0b4] py-12 px-6 md:px-0">
        {/* Header Row */}
        <div className="max-w-6xl mx-auto  flex flex-wrap justify-between items-center mb-6 px-6 md:px-0">
          <div>
            <h2 className="eczar font-semibold text-[32px] text-[#220016]">
              Product Categories
            </h2>
            <p>
              We have wide variety of products ranging from drinks to noodles
              and frozen. You name it, we got it.
            </p>
          </div>
          <a href="#" className="text-sm text-[#220016] underline">
            All Categories
          </a>
        </div>

        {/* Marquee Category Row */}
        <CategoryMarquee />
      </section>
    </>
  );
}
