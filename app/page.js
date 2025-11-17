"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import SmoothSlider from "./components/SmoothSlider";
import CategoryMarquee from "./components/categoryMarquee";
import BrandsSlider from "./components/Brands";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProductRangerSlider from "./components/ProductRangeSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Award from "./components/Award";

export default function Home() {
  const [data, setData] = useState([]);
  const [pulpData, setPulpData] = useState([]);
  const [crammidData, setCrammidData] = useState([]);
  const [wowChowData, setWowChowData] = useState([]);

  useEffect(() => {
    fetch(`https://backend.tigertigerfoods.com/api/get-categories`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((response) => {
        setData(response.data); // Only store the "data" array
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
      });

    fetch(`https://backend.tigertigerfoods.com/api/get-pulp`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((response) => {
        setPulpData(response.data); // Only store the "data" array
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
      });

    fetch(`https://backend.tigertigerfoods.com/api/get-crammid`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((response) => {
        setCrammidData(response.data); // Only store the "data" array
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
      });

    fetch(`https://backend.tigertigerfoods.com/api/get-wow-chow`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((response) => {
        setWowChowData(response.data); // Only store the "data" array
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
      });
  }, []);

  return (
    <>
      {/* Hero Desktop Section */}
      <section className="relative w-full hidden md:block overflow-hidden">
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Free drag without restriction
          animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }} // Loop movement
          transition={{
            repeat: Infinity,
            duration: 3, // Slower animation
            ease: "easeInOut",
          }}
          className="absolute bottom-[15%] left-[15%]"
        >
          <Image src="/yello.png" alt="about" width={100} height={100} />
        </motion.div>

        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Free drag without restriction
          animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }} // Loop movement
          transition={{
            repeat: Infinity,
            duration: 3, // Slower animation
            ease: "easeInOut",
          }}
          className="absolute top-[40px] left-[150px]"
        >
          <Image src="/red.png" alt="about" width={100} height={100} />
        </motion.div>

        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Free drag without restriction
          animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }} // Loop movement
          transition={{
            repeat: Infinity,
            duration: 3, // Slower animation
            ease: "easeInOut",
          }}
          className="absolute top-[25%] right-[20%]"
        >
          <Image src="/yello.png" alt="about" width={100} height={100} />
        </motion.div>

        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Free drag without restriction
          animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }} // Loop movement
          transition={{
            repeat: Infinity,
            duration: 3, // Slower animation
            ease: "easeInOut",
          }}
          className="absolute top-[3%] right-[5%]"
        >
          <Image src="/white.png" alt="about" width={100} height={100} />
        </motion.div>

        {/* Background Image */}
        <div className="relative w-full h-[120vh]">
          {" "}
          {/* parent defines height */}
          <Image
            src="/Hero_Bg.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover" // or object-contain if you prefer no cropping
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute top-[10%] md:top-[15%] left-1/2 -translate-x-1/2 px-4 text-center text-[#405305] z-10 w-full max-w-[90%] md:max-w-full">
          <div>
            {/* Top Feature Row */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium mb-2 text-[#405305]">
              {[
                "High Quality",
                "Competitive Prices",
                "1000+ UK F&B Businesses Served",
                "Bulk Orders",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaStar className="text-[#556D08] text-sm" />
                  <span className="text-[#556D08]">{text}</span>
                </div>
              ))}
            </div>

            {/* Heading */}
            <p className="text-lg font-outfit mt-10">Made with real fruit</p>
            <h1 className="eczar text-[40px] md:text-[64px]">
              Award Winning <span className="text-[#405305]">PULP+</span>
            </h1>

            {/* Subtext */}
            <p className="text-base font-outfit mb-4">
              Thirst{" "}
              <span className="text-[#405305] eczar text-[16px]">
                quenching
              </span>{" "}
              drink made just for you.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/tt-app"
                className="border border-[#556D08] px-6 py-2 rounded-full font-medium hover:bg-[#556D08] hover:text-white transition"
              >
                View Our App
              </Link>
              <Link
                href="/products"
                className="bg-[#556D08] text-white px-6 py-2 rounded-full font-medium border-2 border-transparent hover:bg-[#fff] hover:text-black hover:border-[#556D08] transition"
              >
                Discover all products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Mobile Section */}
      <section className="relative w-full h-screen  md:hidden overflow-hidden bg-[#fff0b4]">
        {/* Overlay Content */}
        <div className="absolute top-[20%]  left-1/2 -translate-x-1/2 px-4 text-center text-[#220016] z-10 w-full max-w-[90%] md:max-w-full">
          <div>
            {/* Top Feature Row */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium mb-2 text-[#220016]">
              {[
                "High Quality",
                "Competitive Prices",
                "1000+ UK F&B Businesses Served",
                "Bulk Orders",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <FaStar className="text-orange-400 text-sm" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Heading */}
            <p className="text-lg font-outfit mb-2">Made with real fruit</p>
            <h1 className="eczar text-[40px] md:text-[64px] font-bold">
              Award Winning <span className="text-[#FF9E02]">PULP+</span>
            </h1>

            {/* Subtext */}
            <p className="text-base font-outfit mb-4">
              Thirst <span className="text-[#FF9E02]">quenching</span> drink
              made just for you.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href='/tt-app' className="border border-[#40023F] px-6 py-2 rounded-full font-medium hover:bg-[#40023F] hover:text-white transition">
                View App
              </Link>
              <Link
                href="/products"
                className="bg-[#40023F] text-white px-6 py-2 rounded-full font-medium hover:bg-[#40023F] transition"
              >
                Discover all products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <BrandsSlider />

      {/* Flavours Section */}
      <section
        className="relative py-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/flavour_bg.jpg')" }}
      >
        <div className="relative max-w-7xl mx-auto px-6 md:px-0">
          {/* Title */}
          <h2 className="eczar text-2xl md:text-3xl text-white mb-2">
            4 Amazing Flavours
          </h2>
          <p className="text-sm text-white mb-10">
            Pulp+ now available in 4 amazing flavours, Mango, Lychee, Guava and
            Coconut water. Made with real fruit with pulp.
          </p>

          {/* Flavours Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {pulpData.map((flavour, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: [null, 1.05],
                  transition: {
                    duration: 0.2,
                    times: [0, 0.6],
                    ease: ["easeInOut", "easeOut"],
                  },
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="cursor-pointer"
                style={{
                  cursor:
                    'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTEyIDEySDIwVjIwSDE4VjE1LjQxTDEzLjcxIDE5LjcxTDEyLjI5IDE4LjI5TDE2LjU5IDE0SDEyVjEyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+") 16 16, pointer',
                }}
              >
                <div
                  key={index}
                  className={`rounded-md overflow-hidden flex items-center justify-center`}
                >
                  <Link href={`/products/${flavour.slug}/${flavour.SKU}`} key={index}>
                    <img
                      src={
                        flavour.featured_image
                          ? flavour.featured_image
                          : flavour.images
                      }
                      alt={flavour.name}
                      className="object-contain"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="my-12"></div>

          {/* Bottom Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white text-center">
            <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/40 pb-4 md:pb-0">
              <p className="font-bold eczar text-[24px] md:text-[40px] leading-tight">
                100% Real Fruit
              </p>
            </div>

            <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/40 pb-4 md:pb-0">
              <p className="font-bold eczar text-[24px] md:text-[40px] leading-tight">
                No Added Sugar
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="font-bold eczar text-[24px] md:text-[40px] leading-tight">
                Never From Concentrate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range  */}
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

      {/* Crammid Section */}

      <section className="py-12">
        {/* Large banner only on desktop to avoid huge mobile scroll */}
        <Image
          src="/cramid.jpg"
          alt="Crammid"
          width={1600}
          height={600}
          className="w-full h-auto"
        />
        <Image
          src="/cramid-footer.png"
          alt="Crammid footer"
          width={1600}
          height={200}
          className="w-full h-auto"
        />

        <div className="max-w-7xl mx-auto px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={2}
            breakpoints={{
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 2000, // time between slides (ms)
              disableOnInteraction: false, // keep autoplay after user interaction
            }}
            loop={true}
            className="!overflow-hidden"
          >
            {crammidData.map((p, i) => (
              <SwiperSlide key={p.name}>
                <div className="w-full flex flex-col items-center">
                  <div className="w-[280px] h-[280px] flex items-end justify-center">
                    <Link href={`/products/${p.slug}/${p.SKU}`} key={i}>
                      <img
                        src={p.images}
                        alt={p.name}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </Link>
                  </div>

                  <p className=" mt-3 text-center text-[16px] md:text-[16px] eczar font-semibold text-[#405305] w-[180px]  line-clamp-3">
                    {p.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Wow Chow Section */}
      <section className="py-12">
        {/* Overlay */}
        <Image
          src="/wow_chow_bg.png"
          alt="about"
          width={100}
          height={100}
          className="w-full h-full"
        />

        <div className="max-w-7xl mx-auto px-4">
          <ul
            className="
        grid place-items-center
        grid-cols-2 md:grid-cols-3 lg:grid-cols-4
        gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12
      "
          >
            {wowChowData.map((p, i) => (
              <li key={p.name} className="w-full flex flex-col items-center">
                <div
                  className="
              w-[180px] h-[180px] md:w-[280px] md:h-[280px]
              flex items-end justify-center
            "
                >
                  <Link href={`/products/${p.slug}/${p.SKU}`} key={i}>
                    <img
                      src={p.images}
                      alt={p.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </Link>
                </div>

                <p className=" mt-3 text-center text-[16px] md:text-[16px] eczar font-semibold text-[#405305] w-[180px]  line-clamp-3">
                  {p.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* We Offer Alot Section  */}
      <section className="py-12 px-6 md:px-0">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="eczar font-semibold text-[32px] md:text-[64px] text-[#30523E]">
            We have a lot more to offer
          </h2>
          <p className="text-sm md:text-base text-[#220016] mt-1 mb-8">
            Tiger Tiger Food has more than 200 products from wide variety of
            ranges.
          </p>

          <Link
            href={"/products"}
            className="self-start md:self-auto bg-[#F1D98F] px-[32px] py-[18px] rounded-[16px] text-sm md:text-[32px] eczar text-[#556D08]"
          >
            Browse all products
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        {/* Header Row */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6 px-6 md:px-0">
          <div>
            <h2 className="eczar text-2xl md:text-[32px] text-[#556D08]">
              Product Categories
            </h2>
            <p className="text-sm md:text-base">
              We have wide variety of products ranging from drinks to noodles
              and frozen. You name it, we got it.
            </p>
          </div>
          <Link
            href="/categories"
            className="self-start md:self-auto bg-[#F1D98F] px-[32px] py-[18px] rounded-[16px] text-sm md:text-[32px] eczar text-[#556D08]"
          >
            All Categories
          </Link>
        </div>

        {/* Marquee Category Row */}
        <CategoryMarquee categories={data} />
      </section>

      {/* We Offer Alot Section  */}
      <section className="py-12 px-6 md:px-0">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <Image
            src="/logo.png"
            alt="Tiger Tiger Logo"
            width={250}
            height={40}
            className="mx-auto" // 👈 centers the logo
          />
          <p className="text-sm md:text-base text-[#220016] mt-8 mb-8">
            We're obsessed with bringing you the real deal, authentic Asian
            flavours that actually slap. From Japanese classics to spicy Thai
            hits, plus all your Chinese and Indian favourites, we've curated a
            line-up that's basically your passport to flavour town. Every single
            ingredient we use? Premium quality, no compromises. We're not just
            making food, we're crafting experiences that'll have you coming back
            for more. Think restaurant-level taste without the restaurant
            prices, because good food shouldn't break the bank. Tiger Tiger
            Foods is where authenticity meets accessibility. We're on a mission
            to deliver those bold, crave-worthy flavours straight to your
            kitchen, because life's too short for boring meals. Ready to level
            up your taste game?
          </p>

          {/* Bottom Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
            <div className="flex flex-col items-center  pb-4 md:pb-0">
              <p className="font-bold text-[30px] text-[#405305]">
                200+ <br /> Products
              </p>
            </div>
            <div className="flex flex-col items-center  pb-4 md:pb-0">
              <p className="font-bold text-[20px] md:text-[30px] text-[#405305]">
                Competitive <br /> Prices
              </p>
            </div>
            <div className="flex flex-col items-center pb-4 md:pb-0">
              <p className="font-bold text-[20px] md:text-[30px] text-[#405305]">
                1000+ <br /> UK F&B Businesses <br /> Served
              </p>
            </div>
            <div className="flex flex-col items-center pb-4 md:pb-0">
              <p className="font-bold text-[20px] md:text-[30px] text-[#405305]">
                Bulk <br /> Orders
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <SmoothSlider />
      </section>

    </>
  );
}
