"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function TtAppPage() {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // run only in browser
    const header = document.getElementById("header");
    if (header) setHeaderHeight(header.offsetHeight);

    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
      if (header) setHeaderHeight(header.offsetHeight);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const shouldOffset = pathname !== "/";
  return (
    <>
      <section className="hidden md:block">
        <div
          className="h-[80vh] w-full bg-center bg-cover flex items-center justify-center relative px-6 md:px-0"
          style={{
            backgroundImage: "url('/bg_2.jpg')",
          }}
        >
          {/* Centered container with text */}
          <div className="max-w-5xl  w-full bg-white/70 backdrop-blur-md shadow-lg py-12 px-12 flex flex-col md:flex-row items-center justify-between rounded-xl relative z-10 translate-y-10">
            {/* Left text section */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="eczar text-[32px] font-semibold mb-3">
                Find what you need. <br />
                Send one inquiry. Get quotes.
              </h2>
              <p className="text-gray-700 mb-6 max-w-xl">
                Source smarter. Pick products, add them to your inquiry list,
                and request quotes in a couple of clicks.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <button className="flex items-center bg-green-600 text-white px-5 py-3 rounded-lg shadow hover:bg-green-700">
                  <img
                    src="/andriod.png"
                    alt="Google Play"
                    className="h-4 w-6 mr-2"
                  />
                  Download
                </button>
                <button className="flex items-center border px-5 py-3 rounded-lg shadow hover:bg-gray-100">
                  <img src="/apple.png" alt="Apple" className="h-6 w-6 mr-2" />
                  Download
                </button>
              </div>
            </div>
          </div>

          <div className="absolute right-[22%] -bottom-[13%] z-40">
            <img
              src="/app1.jpg"
              alt="Tiger Tiger Foods App"
              className="h-[500px] w-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section
        style={{
          marginTop: shouldOffset && isMobile ? `${headerHeight}px` : undefined,
        }}
        className="md:hidden"
      >
        <div className="max-w-6xl mx-auto px-6">
          <Image src="/app1.jpg" width={1980} height={1980} alt="" />
        </div>
      </section>

      <section className="pt-12 px-6 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center">
            {/* Right Side */}
            <div className="md:w-1/2 text-[20px] text-[#40023F] pb-6 md:pb-0 h-full">
              <Image src="/app2.jpg" width={1980} height={1980} alt="" />
            </div>

            {/* Left Side */}
            <div className="md:w-1/2">
              {/* Product cards row */}
              <div className="flex items-center space-x-4 mb-8">
                {/* Product cards */}
                <div className=" bg-white shadow-md rounded-xl flex items-center justify-center">
                  <Image
                    src="/pulpCan.png"
                    width={200}
                    height={200}
                    alt="Coconut Drink"
                  />
                </div>
                <div className=" bg-white shadow-md rounded-xl flex items-center justify-center">
                  <Image
                    src="/pulpCan2.png"
                    width={200}
                    height={200}
                    alt="Mango Drink"
                  />
                </div>
                <div className="bg-white shadow-md rounded-xl flex items-center justify-center">
                  <Image
                    src="/pulpCan3.png"
                    width={200}
                    height={200}
                    alt="Lychee Drink"
                  />
                </div>

                {/* Add button */}
                <button className="w-10 h-10 rounded-full bg-[#556B2F] flex items-center justify-center text-white text-xl shadow-md">
                  +
                </button>
              </div>

              {/* Heading & text */}
              <h2 className="eczar text-[32px] font-bold leading-snug mb-2">
                Search for your <br /> favourite product
              </h2>
              <p className="text-gray-600 text-sm">
                180+ products to search from, right under your finger tips
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E5E5E5] py-12 px-6 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center font-semibold text-[#3B3B3B]">
            {/* Card 1 */}
            <div className="bg-[#C8E000] rounded-lg py-10 px-6 shadow-md flex items-center justify-center">
              Register Your Trade
            </div>

            {/* Card 2 */}
            <div className="bg-[#8CF0F0] rounded-lg py-10 px-6 shadow-md flex items-center justify-center">
              Browse Through 180+ Products
            </div>

            {/* Card 3 */}
            <div className="bg-[#FF5C73] rounded-lg py-10 px-6 shadow-md flex items-center justify-center">
              Add To Inquiry Cart
            </div>

            {/* Card 4 */}
            <div className="bg-[#FFE600] rounded-lg py-10 px-6 shadow-md flex items-center justify-center">
              Get a Quote
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center font-semibold text-[#3B3B3B]">
            {/* Card 1 */}
            <div className="flex justify-center">
              <img
                src="/app3.png"
                alt="Tiger Tiger Foods App"
                className="h-[500px] w-auto drop-shadow-2xl"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="/app4.png"
                alt="Tiger Tiger Foods App"
                className="h-[550px] w-auto drop-shadow-2xl"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="/app5.png"
                alt="Tiger Tiger Foods App"
                className="h-[500px] w-auto drop-shadow-2xl"
              />
            </div>

            <div className="flex justify-center">
              <img
                src="/app6.png"
                alt="Tiger Tiger Foods App"
                className="h-[500px] w-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ECECEC] py-12">
        <div className=" flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left: phone in hand */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <Image
              src="/app_last.png" // replace with your actual image
              alt="App in hand"
              width={600}
              height={600}
              className="max-h-full w-auto object-contain"
            />
          </div>

          {/* Right: download buttons */}
          <div className="md:w-1/2 flex items-center justify-center md:justify-start gap-4">
            {/* Android button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-[#486403] text-white px-6 py-3 shadow-sm hover:opacity-95"
            >
              <Image
                src="/andriod.png"
                alt="Android"
                width={24}
                height={24}
                className="h-4 w-6"
              />
              <span className="font-medium">Download</span>
            </a>

            {/* Apple button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-6 py-3 border border-black/40 shadow-sm hover:bg-gray-50"
            >
              <Image
                src="/apple.png"
                alt="Apple"
                width={24}
                height={24}
                className="h-5 w-5"
              />
              <span className="font-medium">Download</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
