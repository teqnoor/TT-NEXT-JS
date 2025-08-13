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
      <section className="py-12 bg-[#FFF7D8]">
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
      <section className="pb-12 bg-[#FFF7D8] px-6 md:px-0">
        <div className="bg-[#FEE600] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl border-[2px] border-[#220016]  max-w-6xl mx-auto">
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

      <section className="bg-[#FFF7D8] pb-8 px-4">
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
      <section className="pb-12 bg-[#FFF7D8] px-6 md:px-0">
        <div className="bg-[#9CD3D1] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl border-[2px] border-[#220016]  max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 items-center">
            {/* Left Side */}
            <div className="md:w-1/2 border-r-0  md:border-r-2 border-t-2 md:border-t-0 pt-4 md:pt-0 pr-[0rem] md:pr-[3rem] text-[18px] text-[#40023F]">
              <p className="mb-3 text-justify">
                Thai cuisine is a blend of intense, aromatic, and powerful
                flavours bringing unforgettable and delicious experiences. The
                careful balance of sweet, salty, spicy, and sour reflects the
                cuisine perfectly. Tiger Tiger Foods provides the essence of
                Thailand with its premium and authentic ingredients, sourced
                right from the main hubs of Thailand.
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

      <section className="bg-[#FFF7D8] pb-8 px-4">
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
      <section className="pb-12 bg-[#FFF7D8] px-6 md:px-0">
        <div className="bg-[#E597FF] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl border-[2px] border-[#220016]  max-w-6xl mx-auto">
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

      <section className="bg-[#FFF7D8] pb-8 px-4">
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
      <section className="pb-12 bg-[#FFF7D8] px-6 md:px-0">
        <div className="bg-[#FEE600] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl border-[2px] border-[#220016]  max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 items-center">
            {/* Left Side */}
            <div className="md:w-1/2 border-r-0  md:border-r-2 border-t-2 md:border-t-0 pt-4 md:pt-0 pr-[0rem] md:pr-[3rem] text-[18px] text-[#40023F]">
              <p className="mb-3 text-justify">
                Japanese cuisine has captured hearts worldwide with its
                beautiful presentation, incredible flavours, and focus on fresh,
                healthy ingredients. At Tiger Tiger Foods UK, we're excited to
                bring Japan's amazing culinary traditions right to your doorstep
                with an extensive range of authentic products. Whether you're
                craving fresh sushi, comforting ramen, perfectly seasoned rice,
                or hearty udon noodles, we've got everything you need to create
                authentic Japanese dishes at home.
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

      <section className="bg-[#FFF7D8] pb-8 px-4">
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
      <section className="pb-12 bg-[#FFF7D8] px-6 md:px-0">
        <div className="bg-[#9CD3D1] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl border-[2px] border-[#220016]  max-w-6xl mx-auto">
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

      <section className="bg-[#FFF7D8] pb-8 px-4">
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
      <section className="pb-12 bg-[#FFF7D8] px-6 md:px-0">
        <div className="bg-[#E597FF] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl border-[2px] border-[#220016]  max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 items-center">
            {/* Left Side */}
            <div className="md:w-1/2 border-r-0  md:border-r-2 border-t-2 md:border-t-0 pt-4 md:pt-0 pr-[0rem] md:pr-[3rem] text-[18px] text-[#40023F]">
              <p className="mb-3 text-justify">
                Malaysian cuisine is a beautiful fusion of Chinese and Indian
                influences, creating flavours that are truly one-of-a-kind. The
                moment you smell those rich, aromatic spices, you know you're
                experiencing something special, it's Malaysia's diverse culture
                served on a plate. That's exactly why we at Tiger Tiger Foods UK
                are so passionate about bringing these distinctive Malaysian
                products to tables across the UK.
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

      <section className="bg-[#FFF7D8] pb-8 px-4">
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
      <section className="pb-12 bg-[#FFF7D8] px-6 md:px-0">
        <div className="bg-[#FFD31E] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl border-[2px] border-[#220016]  max-w-6xl mx-auto">
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
                Singaporean cuisine is like taking a delicious journey around
                Asia without leaving your table. It brings together the best of
                Chinese, Malay, Indian, and other cultures to create incredible
                dishes like creamy laksa, tender Hainanese chicken rice, spicy
                chili crab, and flaky roti prata. Every bite is an adventure
                that tells the story of Singapore's wonderfully diverse food
                scene.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF7D8] pb-8 px-4">
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
      <section className="pb-12 bg-[#FFF7D8] px-6 md:px-0">
        <div className="bg-[#9CD3D1] px-[40px] py-[64px] md:py-[80px] md:px-[80px]  rounded-xl border-[2px] border-[#220016]  max-w-6xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6 items-center">
            {/* Left Side */}
            <div className="md:w-1/2 border-r-0  md:border-r-2 border-t-2 md:border-t-0 pt-4 md:pt-0 pr-[0rem] md:pr-[3rem] text-[18px] text-[#40023F]">
              <p className="mb-3 text-justify">
                Indian cuisine is an incredible journey through rich, diverse
                flavours that have made it beloved worldwide. From fiery hot
                curries to mild, creamy dishes, Indian food offers something for
                everyone—whether you're looking for simple comfort food or an
                elaborate feast. At Tiger Tiger Foods UK, we provide all the
                authentic spices and ingredients you need to create
                restaurant-quality Indian dishes at home that will truly impress
                your family and friends.
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

      <section className="bg-[#FFF7D8] pb-8 px-4">
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
