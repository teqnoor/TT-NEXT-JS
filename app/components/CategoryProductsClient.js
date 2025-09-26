"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function CategoryProductsClient({ slug }) {
  const pathname = usePathname();
  const [headerHeight, setHeaderHeight] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const header = document.getElementById("header");
    if (header) setHeaderHeight(header.offsetHeight);

    const handleResize = () => {
      if (header) setHeaderHeight(header.offsetHeight);
    };
    window.addEventListener("resize", handleResize);

    async function fetchProducts() {
      try {
        const res = await fetch(
          `https://backend.tigertigerfoods.com/api/get-product-by-category?category=${slug}`
        );
        const data = await res.json();
        if (data.success) {
          setProducts(data.data);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
    return () => window.removeEventListener("resize", handleResize);
  }, [slug]);

  const shouldOffset = pathname !== "/";

  return (
    <section
      style={{ marginTop: shouldOffset ? `${headerHeight}px` : undefined }}
      className="max-w-6xl mx-auto py-10"
    >
      <h1 className="text-2xl font-bold mb-6">Products in {slug}</h1>

      {loading ? (
        <p className="text-center py-10">Loading...</p>
      ) : products.length === 0 ? (
        <p className="text-center py-10">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((card, i) => (
            <Link href={`/products/${card.slug}`} key={i}>
              <div className="rounded flex flex-col items-center justify-between">
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
      )}
    </section>
  );
}
