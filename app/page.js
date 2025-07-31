import Image from "next/image";
import { FaStar } from "react-icons/fa";
import SmoothSlider from "./components/SmoothSlider";

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
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Hero_Bg.png"
          alt="Hero Background"
          width={1920}
          height={920}
          priority
          className="w-full h-auto object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 px-4 text-center text-[#220016] z-10">
          <div>
            {/* Top Feature Row */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium mb-4 text-[#220016]">
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
            <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-2">
              Award Winning <span className="text-[#FF9E02]">PULP+</span>
            </h1>

            {/* Subtext */}
            <p className="text-base font-outfit mb-6">
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
      <section className="bg-[#40023F] py-4">
        <div className="max-w-7xl mx-auto flex justify-center gap-10 flex-wrap items-center px-4">
          {/* Replace these with actual logos or styled text/images */}
          <Image
            src="/brands/cococho.png"
            alt="Coco Choo"
            width={170}
            height={68}
            className="object-contain"
          />
          <Image
            src="/brands/wowchow.png"
            alt="Wow Chow"
            width={170}
            height={68}
            className="object-contain"
          />
          <Image
            src="/brands/pulp.png"
            alt="PULP+"
            width={170}
            height={68}
            className="object-contain"
          />
          <Image
            src="/brands/taste_japan.png"
            alt="Taste Japan"
            width={170}
            height={68}
            className="object-contain"
          />
        </div>
      </section>

      {/* Flavours Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-[#220016] mb-2">
            4 Amazing Flavours
          </h2>
          <p className="text-sm text-[#220016] mb-6">
            Pulp+ now available in 4 amazing flavours, Mango, Lychee, Guava and
            Coconut water. Made with real fruit with pulp.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {flavours.map((flavour, index) => (
              <div
                key={index}
                className={`rounded-md overflow-hidden  flex items-center justify-center`}
              >
                <img
                  src={flavour.image}
                  alt={flavour.name}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Award Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center border border-black bg-[#FFF0B4] px-1 py-0">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 p-6 space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-[#220016]">
              Tiger Tiger’s Pulp+ Mango Awarded 'Best Fruit Juice Drink' at UK
              Soft Drinks Awards 2025
            </h2>
            <p className="text-sm md:text-base text-[#220016] ">
              We're absolutely thrilled to share some fantastic news – our Pulp+
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
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#220016]">
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
      <section className="bg-[#FFFCF5] py-12">
        {/* Header Row */}
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-[#220016] mb-2">
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
        <div className="overflow-hidden bg-[#40023F]">
          <div className="animate-marquee whitespace-nowrap py-3">
            {["Taste Japan", "Canned", "Drinks", "Frozen", "Noodles"].map(
              (item, i) => (
                <span
                  key={i}
                  className="inline-block text-white font-semibold text-[40px] px-8"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Wow Chow Section */}
      <section className=" py-12">
        {/* Grid Content */}
        <div className="max-w-6xl mx-auto px-4 flex md:flex-row flex-col gap-3">
          {/* Left Images */}
          <div className="flex flex-col justify-end">
            <Image
              src="/wowchow/4.png"
              alt="wow1"
              width={300}
              height={350}
              className="rounded-md mb-4 object-cover ml-auto"
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
            <h3 className="text-2xl font-bold text-[#220016] mb-2 text-[40px]">
              Put WOW in <br /> Your Chow
            </h3>
            <button className="mt-2 text-sm underline text-[#220016] mb-3">
              Discover Wow Chow
            </button>
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
              className="rounded-md mb-4  object-cover"
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
      </section>

      {/* Japanese Range Section */}
      <section className="py-12">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <h2 className="text-lg md:text-3xl font-bold text-[#220016]">
            Discover our Japanese Range
          </h2>
          <p className="text-sm md:text-base text-[#220016] mt-1 mb-8">
            Tiger Tiger Foods own Taste Japan range of authentic Japanese
            products that will take your Japanese dishes to the next level
          </p>
        </div>

        {/* Image Section */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            <img
              src="/jk_banner.jpg"
              alt="Japanese Range"
              className="rounded-lg object-cover w-full  h-[550px]"
            />
            {/* Button in Top-Right corner */}
            <button className="absolute top-4 right-4 bg-[#fff] hover:bg-[#40023F] text-[#000] hover:text-[#fff] px-6 py-2 rounded-full font-medium">
              Discover Japanese Range
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
