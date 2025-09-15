"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function ProductFeaturedPage() {
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
          <div className="max-w-6xl mx-auto text-center">
            {/* Heading */}
            <h2 className="eczar font-semibold text-[64px] text-[#405305]">
              Featured Products
            </h2>

            <p className="text-sm md:text-base text-[#405305] mt-1 mb-8">
              Top selling and featured products from Tiger Tiger Foods
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 ">
        {/* Grid Content */}

        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h3 className="eczar font-semibold text-[32px] text-[#405305]">
            Pulp+
          </h3>

          <p className="text-sm md:text-base text-[#405305] mt-1 mb-8">
            Discover our award winning Pulp+ juice, made with real fruit with
            pulp. Now in 4 amazing flavours.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-4 md:grid-cols-4 gap-3">
            {/* First Column */}
            <div className="flex flex-col h-full">
              <div className="flex-1 mb-4">
                <Image
                  src="/pulp1.png" // Change to the correct path for your image
                  alt="Tiger Tiger Coconut Juice"
                  width={250}
                  height={400} // Adjust the height according to the image size
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 mb-4">
                <Image
                  src="/pulp2.png" // Change to the correct path for your image
                  alt="Tiger Tiger Mango Juice"
                  width={250}
                  height={400} // Adjust the height according to the image size
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col h-full">
              <div className="flex-1 mb-4">
                <Image
                  src="/pulp3.png" // Change to the correct path for your image
                  alt="Tiger Tiger Lychee Juice"
                  width={250}
                  height={400} // Adjust the height according to the image size
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 mb-4">
                <Image
                  src="/pulp4.png" // Change to the correct path for your image
                  alt="Tiger Tiger Guava Juice"
                  width={250}
                  height={400} // Adjust the height according to the image size
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Third Column */}
            <div className="col-span-2 h-full flex flex-col">
              <div className="flex-1 mb-4">
                <Image
                  src="/pulp3.png" // Change to the correct path for your image
                  alt="Tiger Tiger Lychee Juice"
                  width={500}
                  height={500} // Adjust the height according to the image size
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4 ">
        {/* Grid Content */}

        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h3 className="eczar font-semibold text-[32px] text-[#405305]">
            Wow Chow
          </h3>

          <p className="text-sm md:text-base text-[#405305] mt-1 mb-8">
            Bold Asian flavours meet convenience. Just add hot water and enjoy
            authentic stir-fry style noodles in minutes.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-4 md:grid-cols-4 gap-3">
            <div className="col-span-2 h-full flex flex-col">
              <div className="flex-1 mb-4">
                <Image
                  src="/wow_chow_bg.jpg" // Change to the correct path for your image
                  alt="Tiger Tiger Lychee Juice"
                  width={500}
                  height={500} // Adjust the height according to the image size
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* First Column */}
            <div className="flex flex-col h-full">
              <div className="flex-1 mb-4">
                <Image
                  src="/pulp1.png" // Change to the correct path for your image
                  alt="Tiger Tiger Coconut Juice"
                  width={250}
                  height={400} // Adjust the height according to the image size
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 mb-4">
                <Image
                  src="/pulp2.png" // Change to the correct path for your image
                  alt="Tiger Tiger Mango Juice"
                  width={250}
                  height={400} // Adjust the height according to the image size
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Second Column */}
            <div className="flex flex-col h-full">
              <div className="flex-1 mb-4">
                <Image
                  src="/pulp3.png" // Change to the correct path for your image
                  alt="Tiger Tiger Lychee Juice"
                  width={250}
                  height={400} // Adjust the height according to the image size
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 mb-4">
                <Image
                  src="/pulp4.png" // Change to the correct path for your image
                  alt="Tiger Tiger Guava Juice"
                  width={250}
                  height={400} // Adjust the height according to the image size
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Third Column */}
          </div>
        </div>
      </section>
    </>
  );
}
