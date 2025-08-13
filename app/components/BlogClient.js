// components/BlogClient.js
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BlogClient({ slug }) {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);

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

  const shouldOffset = pathname !== "/";

  return (
    <>
      <section className="py-12 ">
        <div
          style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
        >
          <div className="bg-[#97E0FF] max-w-6xl mx-auto flex flex-wrap justify-between items-center mb-6 px-6 md:px-0">
            <div className="p-[20px] mb-[10px] md:mb-[20px] md:p-[50px]">
              <h1 className="eczar font-extrabold text-[54px] text-[#220016] mb-5">
                Blog : {slug}
              </h1>

              <h2 className="eczar font-extrabold text-[16px]">
                Summary
              </h2>

              <p className="text-[14px] font-light">
                Japanese food has become one of the fastest-growing culinary
                trends in the UK, driven by diners' shift towards lighter,
                cleaner meals and increased cultural exposure through media and
                pop culture. Sushi and ramen have moved from special occasions
                to everyday meals, making Japanese products no longer niche for
                retailers and restaurants. The appeal lies in bold flavours
                without heaviness, natural ingredients, and dishes that suit
                various dietary preferences while being quick-service friendly.
                This presents a significant business opportunity for foodservice
                and retail operators to meet growing consumer demand. Retry
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="max-w-6xl mx-auto px-6 md:px-0 md:flex md:gap-8">
          {/* Left Content */}
          <div className="md:w-2/3">
            <p className="mb-4">
              Japanese food has become one of the fastest-growing culinary
              trends in the UK. From high-end restaurants to home kitchens, it’s
              clear that these clean, bold, and balanced flavours have found a
              loyal audience. But what’s behind this rise? And how can
              restaurants, cafés, and food retailers respond?
            </p>
            <h6 className="text-lg font-semibold mb-2">
              1. Simple, Balanced, and Tasty
            </h6>
            <p>
              UK diners are shifting towards lighter, cleaner meals — and
              Japanese food fits the bill. Think grilled fish, rice bowls, miso
              soup, and steamed dumplings. They’re satisfying without feeling
              heavy. Less oil, more flavour. That’s the winning formula.
            </p>
            <h6 className="text-lg font-semibold mb-2">
              2. Everyday Sushi and Ramen
            </h6>
            <p>
              It’s not just special occasions. Sushi and ramen are now everyday
              meals for many. Learn more about Japanese dishes like ramen and
              teriyaki in this easy beginner’s guide from Tiger Tiger Foods.
              Explore sushi rice, soy sauce, wasabi, and more in our Japanese
              category to keep your menu or shelves ready.
            </p>

            <h6 className="text-lg font-semibold mb-2">
              3. Japanese Culture Is Driving Curiosity
            </h6>
            <p>
              Thanks to films, anime, and pop culture, Japanese food feels
              familiar. Young people are especially drawn to trying dishes
              they’ve seen on screen — and social media makes it even easier to
              share and explore.
            </p>

            <h6 className="text-lg font-semibold mb-2">
              What It Means for Foodservice and Retail
            </h6>
            <p>
              Stocking Japanese Products Is No Longer Niche. Retailers and
              supermarkets across the UK now offer Japanese sauces, snacks, and
              ready meals. Even smaller grocers are adding them. Whether you
              manage a chain or a local shop, adding Japanese goods to your
              range makes business sense. Explore Tiger Tiger Foods — the UK’s
              leading brand in authentic Asian food — for top-quality sauces,
              pastes, and noodles perfect for B2B needs.
            </p>
          </div>

          {/* Sidebar / Right Content */}
          <div className="md:w-1/3 mt-8 md:mt-0">
            <Link
              href="/blogs/japanese-cooking-for-beginners"
              className="block bg-[#FEE600] p-8 text-black transition-all duration-200 hover:shadow-[-11px_12px_0px_0px_#000000] mb-4"
            >
              <h2 className="text-xl font-semibold mb-8">
                Japanese Cooking for Beginners: 5 Simple Recipes to Start With
              </h2>
              <p className="mb-6">Why Japanese Food Is a Good Place to Start</p>
              <span className="text-black block">READ MORE</span>
            </Link>

            <Link
              href="/blogs/japanese-cooking-for-beginners"
              className="block bg-[#E597FF] p-8 text-black transition-all duration-200 hover:shadow-[-11px_12px_0px_0px_#000000]"
            >
              <h2 className="text-xl font-semibold mb-8">
                Japanese Cooking for Beginners: 5 Simple Recipes to Start With
              </h2>
              <p className="mb-6">Why Japanese Food Is a Good Place to Start</p>
              <span className="text-black block">READ MORE</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
