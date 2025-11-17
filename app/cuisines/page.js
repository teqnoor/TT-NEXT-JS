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

  return (
    <>
      <section className="py-12 ">
        {/* Grid Content */}
        <div
          style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
        >
          <div className="max-w-5xl mx-auto text-center px-6 md:px-0">
            <h1 className="eczar font-semibold text-[54px] md:text-[6 4px] text-[#220016]">
              Cuisine
            </h1>
          </div>
        </div>
      </section>

      {/* Chinese */}
      <section className="pb-12  px-6 md:px-0">
        <div className="bg-[#FEE600] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl   max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            {/* Left Side */}
            <div className="md:w-1/2   flex flex-col h-full">
              <h2 className="text-[50px] eczar font-bold mb-2">Chinese</h2>
              <p className="text-[18px] text-[#40023F]">
                4000 years of culinary mastery, sourced from across China and
                delivered with authentic passion to your doorstep.
              </p>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 border-l-0 md:border-l-2 border-t-2 md:border-t-0 pt-4 md:pt-0 pl-[0rem] md:pl-[3rem]">
              <p className="mb-3 text-justify text-[18px]  text-[#40023F]">
                Cuisines across cultures are loved and preferred, but the
                suppliers play a more important role, sourcing and bringing the
                consistent colours and tastes at different tables. Chinese
                cuisine is one of Asia’s top examples. It originated around 4000
                years ago and is the main consumer of noodles. Tiger Tiger Foods
                also shares a part of preference among its clients as the
                supplier of the most exciting and best-loved global cuisines out
                of the East and back to the UK. We travel thousands of miles,
                crossing bridges and borders, just to delight our business
                partners by developing the highest quality and most authentic
                ingredients. That’s why it has been famous for its consistent
                supply of its wholesalers, retailers, and food services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" pb-8 px-4">
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

      {/* Thai */}
      <section className="pb-12  px-6 md:px-0">
        <div className="bg-[#9CD3D1] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl   max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 items-center">
            {/* Left Side */}
            <div className="md:w-1/2 border-r-0  md:border-r-2 border-t-2 md:border-t-0 pt-4 md:pt-0 pr-[0rem] md:pr-[3rem] text-[18px] text-[#40023F]">
              <p className="mb-3 text-justify">
                Thai food holds other features and tastes, as it is full of
                intense, aromatic, and powerful flavours that delight diners’
                tongues with every spoon. Our provision of delicious foods left
                unforgettable experiences, as we care and balance sweet, salty,
                spicy, and sour to present a perfect cuisine. Tiger Tiger Foods
                provides the essence of Thailand with its premium and authentic
                ingredients. With this balance and innovation, we will keep
                sourcing right from the main hubs of Thailand.
              </p>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2  flex flex-col h-full pl-[0rem] md:pl-[3rem]">
              <h2 className="text-[50px] eczar font-bold mb-2">THAI</h2>
              <p className="text-[16px] text-[#40023F]">
                Thai cuisine is all about that perfect balance of flavours, and
                we bring you the real deal, sourced straight from Thailand's
                culinary heartlands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" pb-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/thai.jpg"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/thai2.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/thai3.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/*  Vietnameese */}
      <section className="pb-12  px-6 md:px-0">
        <div className="bg-[#E597FF] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl   max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            {/* Left Side */}
            <div className="md:w-1/2   flex flex-col h-full">
              <h2 className="text-[50px] eczar font-bold mb-2">Vietnamese</h2>
              <p className="text-[18px] text-[#40023F]">
                From Vietnam's rice fields to their famous prawn crackers, we
                bring you the authentic ingredients that make Vietnamese cuisine
                so beautifully balanced and loved.
              </p>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 border-l-0 md:border-l-2 border-t-2 md:border-t-0 pt-4 md:pt-0 pl-[0rem] md:pl-[3rem]">
              <p className="mb-3 text-justify text-[18px]  text-[#40023F]">
                Vietnamese cuisine is famous for its fine balance of the tastes
                of sweet, sour, salty, bitter, hot, and many other flavours.
                Tiger Tiger Foods travels to Vietnam for its evergreen rice
                quality, importing well-known rice paper, rice stick noodles and
                rice vermicelli to the UK. Moreover, Tiger Tiger Foods travelled
                and brought the most famous brand of prawn crackers from Vietnam
                to the UK.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" pb-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/vetnameese.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/vetnameese2.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/vetnameese3.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Japanese */}
      <section className="pb-12  px-6 md:px-0">
        <div className="bg-[#FEE600] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl   max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 items-center">
            {/* Left Side */}
            <div className="md:w-1/2 border-r-0  md:border-r-2 border-t-2 md:border-t-0 pt-4 md:pt-0 pr-[0rem] md:pr-[3rem] text-[18px] text-[#40023F]">
              <p className="mb-3 text-justify">
                When there is talk of variety, style, and flavours, Japanese
                cuisine is well-known around the world for the artistry of its
                dishes and its focus on healthier eating. Tiger Tiger Foods
                brings Japan’s rich heritage of regional and traditional food to
                the United Kingdom with a vast variety. Whether it’s sushi,
                sashimi, rice, ramen, yakitori, or udon, Tiger Tiger Foods has
                it available. Because we keep focusing on continuous research
                and finding new flavours, this is our best customer-supporting
                approach for growing.
              </p>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2  flex flex-col h-full pl-[0rem] md:pl-[3rem]">
              <h2 className="text-[50px] eczar font-bold mb-2">Japanese</h2>
              <p className="text-[16px] text-[#40023F]">
                From the artistry of sushi to the comfort of ramen, we deliver
                Japan's rich culinary heritage with authentic ingredients for
                every Japanese dish you love.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" pb-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/japanese.jpg"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/japanese2.jpg"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/japanese3.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/*  Korean */}
      <section className="pb-12  px-6 md:px-0">
        <div className="bg-[#9CD3D1] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl   max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            {/* Left Side */}
            <div className="md:w-1/2   flex flex-col h-full">
              <h2 className="text-[50px] eczar font-bold mb-2">Korean</h2>
              <p className="text-[18px] text-[#40023F]">
                Korean cuisine is having its moment worldwide, and we bring you
                the authentic ingredients that make those bold, brilliant
                flavours so addictive.
              </p>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 border-l-0 md:border-l-2 border-t-2 md:border-t-0 pt-4 md:pt-0 pl-[0rem] md:pl-[3rem]">
              <p className="mb-3 text-justify text-[18px]  text-[#40023F]">
                Korean cuisine has taken the world by storm, and it's easy to
                see why. The bold, brilliant flavours are absolutely
                irresistible. We travel directly to Korea to handpick the finest
                ingredients that truly capture what makes this cuisine so
                special. From crispy Korean crackers and premium noodles to
                authentic kimchi with that perfect tangy kick, we bring you
                everything you need to experience Korea's incredible culinary
                magic at home.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" pb-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/korean.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/korean2.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/korean3.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Malaysian */}
      <section className="pb-12  px-6 md:px-0">
        <div className="bg-[#E597FF] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl   max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 items-center">
            {/* Left Side */}
            <div className="md:w-1/2 border-r-0  md:border-r-2 border-t-2 md:border-t-0 pt-4 md:pt-0 pr-[0rem] md:pr-[3rem] text-[18px] text-[#40023F]">
              <p className="mb-3 text-justify">
                Malaysian cuisine is a hotpot of influences linked to China and
                India. Rich heritage aroma fills up the air with Malaysian
                cuisine whenever it is around. There are products in bulk, and
                all with a unique and distinctive culture of Malaysia. Once
                tasting the fill-ups, people yearn for more to have on their
                plates. With this demand and love among the non-native public,
                Tiger Tiger Foods has been very keen on picking up the Malaysian
                products and distributing them all over the UK.
              </p>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2  flex flex-col h-full pl-[0rem] md:pl-[3rem]">
              <h2 className="text-[50px] eczar font-bold mb-2">Malaysian</h2>
              <p className="text-[16px] text-[#40023F]">
                Experience Malaysia's rich cultural melting pot through
                authentic flavors that tell the story of a beautifully diverse
                nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" pb-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/malaysian.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/malaysian2.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/malaysian3.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/*  Singaporean */}
      <section className="pb-12  px-6 md:px-0">
        <div className="bg-[#FFD31E] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl   max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            {/* Left Side */}
            <div className="md:w-1/2   flex flex-col h-full">
              <h2 className="text-[50px] eczar font-bold mb-2">Singaporean</h2>
              <p className="text-[18px] text-[#40023F]">
                From laksa to chili crab, Singaporean cuisine is Asia's greatest
                hits all rolled into one delicious experience.
              </p>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 border-l-0 md:border-l-2 border-t-2 md:border-t-0 pt-4 md:pt-0 pl-[0rem] md:pl-[3rem]">
              <p className="mb-3 text-justify text-[18px]  text-[#40023F]">
                Since every cuisine is a representation of a certain culture and
                its people’s tastes, Singaporean cuisine doesn’t lag behind!
                With a vibrant fusion of flavours from Chinese, Malay, Indian,
                and other cultures, the foods are rich in taste, colour, aroma,
                and quality. Consumers love to have many dishes like Hainanese
                chicken rice, laksa, chilli crab, and roti prata, blending
                savoury, spicy, and aromatic elements. That’s why Tiger Tiger
                elevates its services and our clients’ business by creating a
                culinary adventure that reflects the country’s diverse heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" pb-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/singaporean.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/singaporean2.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/singaporean3.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Thai */}
      <section className="pb-12  px-6 md:px-0">
        <div className="bg-[#9CD3D1] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl   max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 items-center">
            {/* Left Side */}
            <div className="md:w-1/2 border-r-0  md:border-r-2 border-t-2 md:border-t-0 pt-4 md:pt-0 pr-[0rem] md:pr-[3rem] text-[18px] text-[#40023F]">
              <p className="mb-3 text-justify">
                You may have heard of the treasure trove of rich and diverse
                flavours; Indian foods exactly present such a unique experience.
                There is a richness of texture and taste in almost every dish
                due to the famous spices and sauces. Try your simple dietary or
                complex mixtures; these ingredients will adapt easily to every
                recipe, making a masterpiece course. So, Tiger Tiger Foods is
                always ahead and available here to provide the right ingredients
                for it. So, make sure you add a generous spoonful of Tiger Tiger
                Foods experience, quality, and authenticity to your recipes for
                Indian food that is guaranteed to stand out from the crowd.
              </p>
            </div>

            {/* Right Side */}
            <div className="md:w-1/2  flex flex-col h-full pl-[0rem] md:pl-[3rem]">
              <h2 className="text-[50px] eczar font-bold mb-2">Indian</h2>
              <p className="text-[16px] text-[#40023F]">
                Indian cuisine is a spice lover's paradise, and we bring you the
                authentic ingredients to create everything from mild comfort
                food to show-stopping curries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" pb-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/indian.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/indian2.png"
              alt="Chinese"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="h-[300px] w-full">
            <Image
              src="/cuisines/indian3.png"
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
