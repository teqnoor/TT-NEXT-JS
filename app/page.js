"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import SmoothSlider from "./components/SmoothSlider";
import CategoryMarquee from "./components/categoryMarquee";
import BrandsSlider from "./components/Brands";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
  const flavours = [
    {
      name: "Coconut",
      image: "/pulp1.png",
      bg: "bg-[#A6CF3C]",
    },
    {
      name: "Mango",
      image: "/pulp2.png",
      bg: "bg-[#FFB511]",
    },
    {
      name: "Lychee",
      image: "/pulp3.png",
      bg: "bg-[#F7328B]",
    },
    {
      name: "Guava",
      image: "/pulp4.png",
      bg: "bg-[#EF4D6C]",
    },
  ];
  return (
    <>
      {/* Hero Desktop Section */}
      <section className="relative w-full hidden md:block overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Hero_Bg.png"
          alt="Hero Background"
          width={1920}
          height={920}
          priority
          className="w-full h-full object-contain"
        />

        {/* Overlay Content */}
        <div className="absolute top-[10%] md:top-[15%] left-1/2 -translate-x-1/2 px-4 text-center text-[#220016] z-10 w-full max-w-[90%] md:max-w-full">
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
           <p className="text-lg font-outfit mt-10">Made with real fruit</p>
            <h1 className="eczar text-[40px] md:text-[64px]">
              Award Winning <span className="text-[#FF9E02]">PULP+</span>
            </h1>

            {/* Subtext */}
            <p className="text-base font-outfit mb-4">
              Thirst <span className="text-[#FF9E02] eczar text-[16px]">quenching</span>  drink
              made just for you.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="border border-[#40023F] px-6 py-2 rounded-full font-medium hover:bg-[#40023F] hover:text-white transition">
                Drink It Up
              </button>
              <button className="bg-[#40023F] text-white px-6 py-2 rounded-full font-medium border-2 border-transparent hover:bg-yellow-200 hover:text-black hover:border-black transition">
  Discover all products
</button>
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
              <button className="border border-[#40023F] px-6 py-2 rounded-full font-medium hover:bg-[#40023F] hover:text-white transition">
                Drink It Up
              </button>
              <button className="bg-[#40023F] text-white px-6 py-2 rounded-full font-medium hover:bg-[#40023F] transition">
                Discover all products
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <BrandsSlider />

      {/* Flavours Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto text-center md:text-left px-6 md:px-0">
          <h2 className="eczar text-2xl md:text-3xl  text-[#220016] mb-2">
            4 Amazing Flavours
          </h2>
          <p className="text-sm text-[#220016] mb-6">
            Pulp+ now available in 4 amazing flavours, Mango, Lychee, Guava and
            Coconut water. Made with real fruit with pulp.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {flavours.map((flavour, index) => (
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
                  cursor: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTEyIDEySDIwVjIwSDE4VjE1LjQxTDEzLjcxIDE5LjcxTDEyLjI5IDE4LjI5TDE2LjU5IDE0SDEyVjEyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+") 16 16, pointer'
                }}
              >
                <div
                  key={index}
                  className={`rounded-md overflow-hidden flex items-center justify-center`}
                >
                  <img
                    src={flavour.image}
                    alt={flavour.name}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Award Section */}
      <section className="py-12 px-6 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center border border-black bg-[#FFF0B4] py-0">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 p-6 space-y-4">
            <h2 className="eczar text-[32px] md:text-[24px]  text-[#220016] ">
              Tiger Tiger’s Pulp+ Mango Awarded 'Best Fruit Juice Drink' at UK
              Soft Drinks Awards 2025
            </h2>
            <p className="text-sm md:text-base text-[#220016] leading-[2]">
              We're absolutely thrilled to share some fantastic news. Our Pulp+
              Mango has just scooped up the 'Best Fruit Juice Drink' award at
              the 2025 UK Soft Drinks Awards by FoodBev Awards! This recognition
              means the world to us, especially coming from such a respected
              industry event that celebrates the very best in innovation and
              quality across the UK's competitive soft drinks scene. The award
              was presented at the UK Soft Drinks Conference, where all the
              industry's top players – from producers and retailers to the
              brilliant minds shaping the future of beverages – come together to
              celebrate what's next. It's incredible validation that our
              commitment to creating drinks people genuinely love is hitting the
              mark. Here's to many more sips of award-winning goodness!
            </p>
            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <button className="border border-[#220016] px-6 py-2 rounded-full font-medium hover:bg-[#220016] hover:text-white transition">
                Read More
              </button>
              <button className="bg-[#40023F] text-white px-6 py-2 rounded-full font-medium hover:bg-[#2c012b] transition">
                Discover Pulp+
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/pulp_award.jpg"
              alt="Pulp+ Award"
              width={700}
              height={700}
              className=" object-contain"
            />
          </div>
        </div>
      </section>

      {/* Range Section */}
      <section className="py-12 px-6 md:px-0">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="eczar font-semibold text-[32px] text-[#220016]">
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
            ].map((card, i) => (
              <motion.div
                key={i}
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
                  cursor: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTEyIDEySDIwVjIwSDE4VjE1LjQxTDEzLjcxIDE5LjcxTDEyLjI5IDE4LjI5TDE2LjU5IDE0SDEyVjEyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+") 16 16, pointer'
                }}
              >
                <div
                  key={i}
                  className="relative h-75 rounded bg-cover bg-center flex items-end justify-center"
                  style={{ backgroundImage: `url('${card.image}')` }}
                >
                  <span className="absolute bottom-[5%] left-5 right-5 px-[5%] bg-white text-[#220016] font-semibold text-[18px] py-2 text-center eczar">
                    {card.title}
                  </span>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <button className="border border-[#220016] px-2 py-2 rounded-full font-medium text-[#220016] hover:bg-[#220016] hover:text-white transition flex items-center gap-2 mx-auto">
            Discover All Ranges
            <span className="w-7 h-7 flex items-center justify-center bg-[#220016] text-white rounded-full">
              <HiOutlineArrowRight size={16} />
            </span>
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-[#FFFCF5] py-12">
        {/* Header Row */}
        <div className="max-w-6xl mx-auto  flex flex-wrap justify-between items-center mb-6 px-6 md:px-0">
          <div>
            <h2 className="eczar  text-[32px] text-[#220016]">
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

      {/* Wow Chow Section */}
      <section className=" py-12 hidden md:block">
        {/* Grid Content */}
        <div className="max-w-6xl mx-auto flex md:flex-row flex-col gap-3">
          {/* Left Images */}
      <div className="flex flex-col justify-end">
        <motion.div
          whileHover={{
            rotate: 5,
            scale: 1.05,
          }}
          transition={{
            type: "spring",
            stiffness: 600,
            damping: 25,
            duration: 0.2
          }}
        >
          <Image
            src="/wowchow/4.png"
            alt="wow1"
            width={300}
            height={350}
            className="rounded-md mb-4 object-cover ml-auto"
          />
        </motion.div>

        <motion.div
          whileHover={{
            rotate: 5,
            scale: 1.05,
          }}
          transition={{
            type: "spring",
            stiffness: 600,
            damping: 25,
            duration: 0.2
          }}
        >
          <Image
            src="/wowchow/5.png"
            alt="wow2"
            width={345}
            height={150}
            className="rounded-md object-cover"
          />
        </motion.div>
      </div>

          {/* Center Image and Text */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-5xl font-extrabold text-[#220016] mb-2 text-[44px] eczar">
              Put WOW in <br /> Your Chow
            </h3>
            <button className="mt-0 mb-6 text-sm underline text-[#220016] mb-3">
              Discover Wow Chow
            </button>
            <motion.div
              whileHover={{
                rotate: 5,
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 25,
                duration: 0.2
              }}
            >
              <Image
                src="/wowchow/1.png"
                alt="wow2"
                width={415}
                height={300}
                className="rounded-md  object-cover"
              />
            </motion.div>
          </div>

          {/* Right Images */}
          <div className="flex flex-col">
            <motion.div
              whileHover={{
                rotate: 5,
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 25,
                duration: 0.2
              }}
            >
              <Image
                src="/wowchow/3.png"
                alt="wow3"
                width={250}
                height={260}
                className="rounded-md mb-4  object-cover"
              />
            </motion.div>

           <motion.div
              whileHover={{
                rotate: 5,
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 600,
                damping: 25,
                duration: 0.2
              }}
            >
              <Image
                src="/wowchow/4.png"
                alt="wow4"
                width={310}
                height={250}
                className="rounded-md object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Japanese Range Section */}
          <section className="py-12 px-6 md:px-0">
            {/* Header */}
            <div className="max-w-6xl mx-auto mb-8">
              <h2 className="eczar  text-[32px] text-[#220016]">
                Discover our Japanese Range
              </h2>

              <p className="text-sm md:text-base text-[#220016] mt-1 mb-8">
                Tiger Tiger Foods own Taste Japan range of authentic Japanese
                products that will take your Japanese dishes to the next level
              </p>
            </div>

            {/* Image Section */}
            <div className="max-w-6xl mx-auto">
              <div 
                className="relative cursor-pointer"
                style={{
                  cursor: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTEyIDEySDIwVjIwSDE4VjE1LjQxTDEzLjcxIDE5LjcxTDEyLjI5IDE4LjI5TDE2LjU5IDE0SDEyVjEyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+") 16 16, pointer'
                }}
                onClick={() => {
                  // Add your click handler here
                  console.log('Navigate to Japanese Range');
                }}
              >
                <img
                  src="/jk_banner.jpg"
                  alt="Japanese Range"
                  className="rounded-lg object-cover w-full h-[550px]"
                />
                {/* Button in Top-Right corner */}
                <button 
                  className="absolute top-4 right-4 bg-[#fff] hover:bg-[#40023F] text-[#000] hover:text-[#fff] px-6 py-2 rounded-full font-medium flex items-center gap-2 cursor-pointer pointer-events-none"
                  style={{
                    cursor: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMwMDAwMDAiLz4KPHBhdGggZD0iTTEyIDEySDIwVjIwSDE4VjE1LjQxTDEzLjcxIDE5LjcxTDEyLjI5IDE4LjI5TDE2LjU5IDE0SDEyVjEyWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+") 16 16, pointer'
                  }}
                >
                  Discover Japanese Range
                  <span className="flex items-center justify-center  text-black rounded-full">
                    <FiArrowUpRight size={20} />
                  </span>
                </button>
              </div>
            </div>
          </section>

      <section className="py-12">
        <SmoothSlider />
      </section>
    </>
  );
}
