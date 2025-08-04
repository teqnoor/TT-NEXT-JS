"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import CategoryMarquee from "../components/categoryMarquee";

export default function DiscoverPage() {
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
          <div className="max-w-6xl mx-auto flex md:flex-row flex-col gap-3">
            {/* Left Images */}
            <div className="flex flex-col">
              <Image
                src="/wowchow/4.png"
                alt="wow1"
                width={300}
                height={350}
                className="rounded-md mb-4 object-cover"
              />
              <Image
                src="/wowchow/5.png"
                alt="wow2"
                width={345}
                height={150}
                className="rounded-md object-cover"
              />
            </div>

            {/* Center Image and Text */}
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/wowchow/1.png"
                alt="wow2"
                width={415}
                height={300}
                className="rounded-md  object-cover"
              />
            </div>

            {/* Right Images */}
            <div className="flex flex-col">
              <Image
                src="/wowchow/3.png"
                alt="wow3"
                width={250}
                height={260}
                className="rounded-md mb-4  object-cover ml-auto"
              />
              <Image
                src="/wowchow/4.png"
                alt="wow4"
                width={310}
                height={250}
                className="rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Range Section */}
      <section className="py-12 px-6 md:px-0 bg-[#fff0b4]">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="font-fields font-extrabold text-[32px] text-[#220016]">
            Discover our range
          </h2>

          <p className="text-sm md:text-base text-[#220016] mt-1 mb-8">
            From Drinks to Sauces, Tiger Tiger Foods has it all for you
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {/* Card Template */}
            {[
              { title: "Wow Chow Noodles", image: "/wow.jpg" },
              { title: "Bubble Tea", image: "/buble_tea.jpg" },
              { title: "Coco Choo Drink", image: "/cococho.jpg" },
              { title: "Japanese Range", image: "/sauces.jpg" },
              { title: "Japanese Range", image: "/sauces.jpg" },
              { title: "Japanese Range", image: "/sauces.jpg" },
              { title: "Japanese Range", image: "/sauces.jpg" },
              { title: "Japanese Range", image: "/sauces.jpg" },
            ].map((card, i) => (
              <div
                key={i}
                className="relative h-75 rounded bg-cover bg-center flex items-end justify-center"
                style={{ backgroundImage: `url('${card.image}')` }}
              >
                <span className="absolute bottom-[5%] bg-white text-[#220016] font-medium text-sm px-4 py-1 rounded-full">
                  {card.title}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="border border-[#220016] px-6 py-2 rounded-full font-medium hover:bg-[#220016] hover:text-white transition flex items-center gap-2 mx-auto">
            Discover All Ranges
            <span className="w-3 h-3 bg-[#220016] rounded-full"></span>
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-[#fff0b4] py-12 px-6 md:px-0">
        {/* Header Row */}
        <div className="max-w-6xl mx-auto  flex flex-wrap justify-between items-center mb-6 px-6 md:px-0">
          <div>
            <h2 className="font-fields font-extrabold text-[32px] text-[#220016]">
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

      {/* New Arrivals Section */}
      <section className="py-12 px-6 md:px-0 bg-[#fff0b4]">
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <h2 className="font-fields font-semibold text-[32px] text-[#220016]">
                New Products
              </h2>

              <p className="text-sm md:text-base text-[#220016] mt-1 mb-8">
                Latest and hot selling products from Tiger Tiger Foods
              </p>
            </div>
            <a href="#" className="text-lg text-[#220016]">
              View All
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {/* Card Template */}
            {[
              { title: "Wow Chow Noodles", image: "/wow.jpg" },
              { title: "Bubble Tea", image: "/buble_tea.jpg" },
              { title: "Coco Choo Drink", image: "/cococho.jpg" },
              { title: "Japanese Range", image: "/sauces.jpg" },
              { title: "Japanese Range", image: "/sauces.jpg" },
              { title: "Japanese Range", image: "/sauces.jpg" },
              { title: "Japanese Range", image: "/sauces.jpg" },
              { title: "Japanese Range", image: "/sauces.jpg" },
            ].map((card, i) => (
              <div
                key={i}
                className="relative h-75 rounded bg-cover bg-center flex items-end justify-center"
                style={{ backgroundImage: `url('${card.image}')` }}
              ></div>
            ))}
          </div>

          {/* Button */}
          <button className="border border-[#220016] px-6 py-2 rounded-full font-medium hover:bg-[#220016] hover:text-white transition flex items-center gap-2 mx-auto">
            Load More
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-12 px-6 md:px-0 bg-[#fff0b4]">
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <h2 className="font-fields font-semibold text-[32px] text-[#220016]">
                Featured Products
              </h2>

              <p className="text-sm md:text-base text-[#220016] mt-1 mb-8">
                Top selling and featured products from Tiger Tiger Foods
              </p>
            </div>
            <a href="#" className="text-lg text-[#220016]">
              View All
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {/* Card Template */}
            {[
              { title: "Wow Chow Noodles", image: "/wow.jpg" },
              { title: "Bubble Tea", image: "/buble_tea.jpg" },
              { title: "Coco Choo Drink", image: "/cococho.jpg" },
              { title: "Japanese Range", image: "/sauces.jpg" },
              { title: "Japanese Range", image: "/sauces.jpg" },
              { title: "Japanese Range", image: "/sauces.jpg" },
              { title: "Japanese Range", image: "/sauces.jpg" },
              { title: "Japanese Range", image: "/sauces.jpg" },
            ].map((card, i) => (
              <div
                key={i}
                className="relative h-75 rounded bg-cover bg-center flex items-end justify-center"
                style={{ backgroundImage: `url('${card.image}')` }}
              ></div>
            ))}
          </div>

          {/* Button */}
          <button className="border border-[#220016] px-6 py-2 rounded-full font-medium hover:bg-[#220016] hover:text-white transition flex items-center gap-2 mx-auto">
            Load More
          </button>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="py-12 px-6 md:px-0 bg-[#fff0b4]">
        <div className="max-w-6xl mx-auto mb-8">
          <h2 className="font-fields font-semibold text-[32px] text-[#220016]">
            Product Catalogue
          </h2>

          <p className="text-sm md:text-base text-[#220016] mt-1 mb-8">
            Discover over 200 product range from Tiger Tiger Foods
          </p>
        </div>

        {/* Catalog Section */}
        <div className="max-w-6xl mx-auto">
          <iframe
            src="https://jk-foods-uk.paperturn-view.com/?pid=MzM338396&v=6.2"
            width="100%"
            height="800px"
            allowFullScreen
            style={{ margin: "0 auto" }}
          ></iframe>
        </div>
      </section>
    </>
  );
}
