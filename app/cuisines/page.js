"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
export default function CuisinesPage() {
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

  const blogs = [
    {
      slug: "japanese-cooking-for-beginners",
      title: "High Quality",
      description:
        "Tiger Tiger UK stands as a steadfast assurance of top-tier quality for both its ingredients and culinary offerings. We take pride in ensuring the authentic taste of pan-Asian cuisine, meticulously developed and sourced from the Far East. Our commitment extends across borders, bringing genuine and premium products to discerning palates in the UK, Europe, and the Americas. Embrace the essence of true pan-Asian flavours with Tiger Tiger UK, where quality meets authenticity on a global culinary journey.",
      color: "#FFFFFF99",
    },
    {
      slug: "simple-japanese-dips-tiger-sauces",
      title: "Competitive Prices",
      description:
        "At Tiger Tiger UK, we take pride in offering not only exceptional quality but also competitive prices. By strategically sourcing, developing, and efficiently managing our supply chain, we aim to make authentic pan-Asian culinary experiences accessible to a wider audience. Ensuring that Tiger Tiger UK is a winning combination of premium quality and competitive pricing, making your culinary journey both delightful and cost-effective.",
      color: "#97E0FF",
    },
    {
      slug: "rise-of-japanese-cuisine-uk",
      title: "Mesmerising Taste",
      description:
        "Tiger Tiger UK helps create delectable dishes with carefully selected ingredients to bring you the authentic taste of Asia, no matter where you are. From our irresistibly flavourful sauces, pastes, and curries to our tempting range of frozen foods, main products and all the essential ingredients, each item is designed to make every bite an irresistible journey into the heart of Asian cuisine.",
      color: "#E597FF",
    },
  ];

  return (
    <>
      <section className="py-12 bg-[#fff0b4]">
        {/* Grid Content */}
        <div
          style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
        >
          <div className="max-w-5xl mx-auto text-center px-6 md:px-0">
            <h1 className="eczar font-semibold text-[54px] md:text-[64px] text-[#220016]">
              Cuisine
            </h1>
          </div>
        </div>
      </section>

      <section className="pb-12 bg-[#fff0b4] px-6 md:px-0">
        <div className="bg-[#FEE600] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl border-[2px] border-[#220016]  max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            {/* Left Side */}
            <div className="md:w-1/2 border-b-2 md:border-b-0 md:border-r-2 border-black pb-6 md:pb-0 flex flex-col h-full">
              <h2 className="text-[50px] eczar font-bold mb-2">Chinese</h2>
              <p className="text-[20px] text-[#40023F]">
                4000 years of culinary mastery, sourced from across China and
                delivered with authentic passion to your doorstep.
              </p>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 text-[20px] text-[#40023F]">
              <p className="mb-3">
                Chinese cuisine is one of the most renowned and most loved all
                around the world. Chinese cuisine reflects its culture, being
                the main origin of noodles for 4000 years. To help bring one of
                the most exciting and best-loved global cuisines out of the East
                and back to the UK, JK FOODS UK has travelled thousands of miles
                across China sourcing and developing the highest quality and
                most authentic ingredients, supplying its wholesalers,
                retailers, and food services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff0b4] pb-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/chineese.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/chineese2.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/chineese3.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pb-12 bg-[#fff0b4] px-6 md:px-0">
        <div className="bg-[#E597FF] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl border-[2px] border-[#220016]  max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            {/* Left Side */}
            <div className="md:w-1/2 border-b-2 md:border-b-0 md:border-r-2 border-black pb-6 md:pb-0 flex flex-col h-full">
              <h2 className="text-[50px] eczar font-bold mb-2">Vietnamese</h2>
              <p className="text-[20px] text-[#40023F]">
                From Vietnam's rice fields to their famous prawn crackers, we
                bring you the authentic ingredients that make Vietnamese cuisine
                so beautifully balanced and loved.
              </p>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 text-[20px] text-[#40023F]">
              <p className="mb-3">
                Vietnamese cuisine is famous for its fine balance taste of
                sweet, sour, salty, bitter, hot, and many other flavours. Tiger
                Tiger Foods UK travels to Vietnam for its evergreen rice quality
                importing well-known rice paper, rice stick noodles and rice
                vermicelli to the UK. Moreover, Tiger Tiger Foods UK travelled
                and brought the most famous brand of prawn crackers from Vietnam
                to the UK.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff0b4] pb-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/chineese.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/chineese2.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/chineese3.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
