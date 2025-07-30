import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Hero_bg.png"
          alt="Hero Background"
          width={1920}
          height={920} // Set based on Figma or image aspect ratio
          priority
          className="w-full h-auto object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-[#220016] z-10">
          <div className="-mt-60">
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
    </>
  );
}
