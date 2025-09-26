  "use client";
  import { useEffect, useState } from "react";
  import { usePathname } from "next/navigation";
  import CategoryMarquee from "../components/categoryMarquee";
  import Link from "next/link";
import Image from "next/image";

  export default function ProductsPage() {
    const pathname = usePathname();
    const [headerHeight, setHeaderHeight] = useState(0);
  const [data, setData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
    useEffect(() => {

      fetch(`https://backend.tigertigerfoods.com/api/get-products`)
        .then((res) => res.json()) // Parse the response as JSON
        .then((response) => {
          setData(response.data); // Only store the "data" array
        })
        .catch((error) => {
          console.error("Error fetching data:", error); // Handle errors
        });

        fetch(`https://backend.tigertigerfoods.com/api/get-categories`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((response) => {
        setCategoryData(response.data); // Only store the "data" array
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
        <section className="py-12 ">
          {/* Grid Content */}
          <div
            style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
          >
            <div className="max-w-6xl mx-auto px-6 md:px-0">
              {/* Heading */}
              <h2 className="eczar font-semibold text-[32px] text-[#220016]">
                All Products
              </h2>

              <p className="text-sm md:text-base text-[#220016] mt-1 mb-8">
                Discover a wide range of products
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                {data.map((card, i) => (
                  <Link href={`/products/${card.slug}`} key={i}>
                    <div className="bg-white rounded flex flex-col items-center justify-between h-[350px]">
                      <Image
                        src={card.images}
                        alt={card.title || "Product image"}
                        width={300}
                        height={350}
                        className="object-contain h-[300px] w-full"
                      />
                      <span className="text-[#220016] font-medium text-sm px-4 text-center py-4">
                        {card.title}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className=" py-12">
          {/* Header Row */}
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
            <Link href="/products/categories" className="text-sm text-[#220016] underline">
              All Categories
            </Link>
          </div>

          {/* Marquee Category Row */}
          <CategoryMarquee categories={categoryData}/>
        </section>
      </>
    );
  }
