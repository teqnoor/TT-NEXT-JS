"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CategoryMarquee from "../../components/categoryMarquee";
import Image from "next/image";

export default function ProductsPage() {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://tigertigerfoods.com/api/get-categories`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((response) => {
        setData(response.data); // Only store the "data" array
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle errors
      });

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
      <section className="py-12">
        {/* Grid Content */}
        <div
          style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
        >
          <div className="max-w-6xl mx-auto  flex flex-wrap justify-between items-center mb-6 px-6 md:px-0">
            <div>
              <h2 className="eczar font-semibold text-[32px] text-[#220016]">
                Product Categories
              </h2>
              <p>
                We have wide variety of products ranging from drinks to noodles
                and frozen. You name it, we got it.
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto eczar py-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {data?.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center"
                >
                  {/* Circular Image */}
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md ring-2 ring-white">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Label */}
                  <p className="mt-3 text-center text-[15px] md:text-base font-semibold text-[#2F5D27]">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
