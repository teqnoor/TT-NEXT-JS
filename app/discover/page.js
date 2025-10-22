"use client";
import { useEffect, useState } from "react";
import CategoryMarquee from "../components/categoryMarquee";
import Link from "next/link";
import ProductRangerSlider from "../components/ProductRangeSlider";

export default function DiscoverPage() {
  const [data, setData] = useState([]);
  const [featureData, setFeatureData] = useState([]);
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    fetch(`https://backend.tigertigerfoods.com/api/get-categories`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((response) => {
        setData(response.data); // Only store the "data" array
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
      });

    fetch(
      `https://backend.tigertigerfoods.com/api/get-new-arrival-and-featured`
    )
      .then((res) => res.json()) // Parse the response as JSON
      .then((response) => {
        setFeatureData(response.data.featured_product);
        setNewData(response.data.new_arrival);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
      });
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/bg_2.jpg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          height: "80vh",
        }}
      ></div>

      {/* Range Section */}
      <section className="py-12 px-6 md:px-0">
        <div className="max-w-7xl mx-auto">
          {/* Heading row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="eczar font-semibold text-3xl md:text-[64px] leading-tight text-[#30523E]">
                Popular Ranges
              </h2>
              <p className="text-sm md:text-base text-[#220016] mt-1 mb-4 md:mb-0">
                Our most popular product line up.
              </p>
            </div>

            <Link
              href="/product-ranges"
              className="self-start md:self-auto bg-[#F1D98F] px-[32px] py-[18px] rounded-[16px] text-sm md:text-[32px] eczar"
            >
              View All
            </Link>
          </div>

          <div className="mt-4 md:mt-0">
            <ProductRangerSlider />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className=" py-12 px-6 md:px-0">
        {/* Header Row */}
        <div className="max-w-7xl mx-auto  flex flex-wrap justify-between items-center mb-6 px-6 md:px-0">
          <div>
            <h2 className="eczar font-semibold text-3xl md:text-[64px] leading-tight text-[#30523E]">
              Product Categories
            </h2>
            <p>
              We have wide variety of products ranging from drinks to noodles
              and frozen. You name it, we got it.
            </p>
          </div>

          <a
            href="/products/categories"
            className="self-start md:self-auto bg-[#F1D98F] px-5 py-3 rounded-sm text-sm md:text-base"
          >
            View All
          </a>
        </div>

        {/* Marquee Category Row */}
        <CategoryMarquee categories={data} />
      </section>

      {/* New Arrivals Section */}
      <section className="py-12 px-6 md:px-0">
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="eczar font-semibold text-3xl md:text-[64px] leading-tight text-[#30523E]">
                New Products
              </h2>
              <p className="text-sm md:text-base text-[#220016] mt-1 mb-4 md:mb-0">
                Latest and hot selling products from Tiger Tiger Foods
              </p>
            </div>

            <Link
              href="/product-ranges"
              className="self-start md:self-auto bg-[#F1D98F] px-[32px] py-[18px] rounded-[16px] text-sm md:text-[32px] eczar"
            >
              View All
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {/* Card Template */}
            {newData.map((card, i) => (
              <Link href={`/products/${card.slug}`} key={i}>
                <div
                  key={i}
                  className="relative h-75 rounded bg-cover bg-center flex items-end justify-center"
                  style={{ backgroundImage: `url('${card.images}')` }}
                ></div>
              </Link>
            ))}
          </div>

          {/* Button */}
          <button className="border border-[#220016] px-6 py-2 rounded-full font-medium hover:bg-[#220016] hover:text-white transition flex items-center gap-2 mx-auto">
            Load More
          </button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-12 px-6 md:px-0">
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="eczar font-semibold text-3xl md:text-[64px] leading-tight text-[#30523E]">
                Featured Products
              </h2>
              <p className="text-sm md:text-base text-[#220016] mt-1 mb-4 md:mb-0">
                Top selling and featured products from Tiger Tiger Foods
              </p>
            </div>

            <Link
              href="/product-ranges"
              className="self-start md:self-auto bg-[#F1D98F] px-[32px] py-[18px] rounded-[16px] text-sm md:text-[32px] eczar"
            >
              View All
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {/* Card Template */}
            {featureData.map((card, i) => (
              <Link href={`/products/${card.slug}`} key={i}>
                <div
                  key={i}
                  className="relative h-75 rounded bg-cover bg-center flex items-end justify-center"
                  style={{ backgroundImage: `url('${card.images}')` }}
                ></div>
              </Link>
            ))}
          </div>

          {/* Button */}
          <button className="border border-[#220016] px-6 py-2 rounded-full font-medium hover:bg-[#220016] hover:text-white transition flex items-center gap-2 mx-auto">
            Load More
          </button>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="py-12 px-6 md:px-0">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="eczar font-semibold text-[32px] md:text-[64px] text-[#30523E]">
            Product Catalogue
          </h2>
          <p className="text-sm md:text-base text-[#220016] mt-1 mb-8">
            Discover over 200 product range from Tiger Tiger Foods
          </p>

          <Link
            href={"/products"}
            className="self-start md:self-auto bg-[#F1D98F] px-[32px] py-[18px] rounded-[16px] text-sm md:text-[32px] eczar text-[#556D08]"
          >
            Browse all products
          </Link>
        </div>
      </section>
      
    </>
  );
}


