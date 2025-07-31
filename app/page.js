import Image from "next/image";
import { FaStar } from "react-icons/fa";

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
      <section className="relative w-full overflow-hidden">
        {/* Background Image */}
        <img
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

      <section className="bg-[#40023F] py-4">
        <div className="max-w-7xl mx-auto flex justify-center gap-10 flex-wrap items-center px-4">
          {/* Replace these with actual logos or styled text/images */}
          <img
            src="/brands/cococho.png"
            alt="Coco Choo"
            width={170}
            height={68}
            className="object-contain"
          />
          <img
            src="/brands/wowchow.png"
            alt="Wow Chow"
            width={170}
            height={68}
            className="object-contain"
          />
          <img
            src="/brands/pulp.png"
            alt="PULP+"
            width={170}
            height={68}
            className="object-contain"
          />
          <img
            src="/brands/taste_japan.png"
            alt="Taste Japan"
            width={170}
            height={68}
            className="object-contain"
          />
        </div>
      </section>

      <section className="py-10 px-4 md:px-12 bg-[#FFFDF4]">
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

      <section className="">
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
            <img
              src="/pulp_award.jpg"
              alt="Pulp+ Award"
              className="w-full h-[700px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FFFBEF] px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#220016]">
            Discover our range
          </h2>
          <p className="text-sm md:text-base text-[#220016] mt-1 mb-8">
            From Drinks to Sauces, Tiger Tiger Foods has it all for you
          </p>

          {/* Product Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {/* Card 1 */}
            <div className="bg-[#6B3D8F] p-4 flex flex-col items-center rounded">
              <img
                src="/wow-chow.png"
                alt="Wow Chow Noodles"
                className="h-48 object-contain mb-4"
              />
              <span className="bg-white text-[#220016] font-medium text-sm px-4 py-1 rounded-full">
                Wow Chow Noodles
              </span>
            </div>

            {/* Card 2 */}
            <div className="bg-[#ABC531] p-4 flex flex-col items-center rounded">
              <img
                src="/bubble-tea.png"
                alt="Bubble Tea"
                className="h-48 object-contain mb-4"
              />
              <span className="bg-white text-[#220016] font-medium text-sm px-4 py-1 rounded-full">
                Bubble Tea
              </span>
            </div>

            {/* Card 3 */}
            <div className="bg-[#F5B4C3] p-4 flex flex-col items-center rounded">
              <img
                src="/coco-choo.png"
                alt="Coco Choo Drink"
                className="h-48 object-contain mb-4"
              />
              <span className="bg-white text-[#220016] font-medium text-sm px-4 py-1 rounded-full">
                Coco Choo Drink
              </span>
            </div>

            {/* Card 4 */}
            <div className="bg-[#00B9C2] p-4 flex flex-col items-center rounded">
              <img
                src="/japanese-range.png"
                alt="Japanese Range"
                className="h-48 object-contain mb-4"
              />
              <span className="bg-white text-[#220016] font-medium text-sm px-4 py-1 rounded-full">
                Japanese Range
              </span>
            </div>
          </div>

          {/* Button */}
          <button className="border border-[#220016] px-6 py-2 rounded-full font-medium hover:bg-[#220016] hover:text-white transition flex items-center gap-2 mx-auto">
            Discover All Ranges
            <span className="w-3 h-3 bg-[#220016] rounded-full"></span>
          </button>
        </div>
      </section>
    </>
  );
}
