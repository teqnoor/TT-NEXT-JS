"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function RelatedProductsSlider({ product_id }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Fetch related products
  useEffect(() => {
    fetch(`https://tigertigerfoods.com/api/get-related-product/${product_id}`)
      .then((res) => res.json())
      .then((response) => {
        if (response?.data) setRelatedProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching related products:", error);
      });
  }, [product_id]);

  const count = relatedProducts.length;

  // Keen options based on how many items you actually have
  const options = useMemo(() => {
    const perViewLg = Math.min(4, Math.max(count, 1));
    const perViewMd = Math.min(3, Math.max(count, 1));
    const perViewSm = Math.min(2, Math.max(count, 1));

    return {
      loop: count > 4, // only loop if enough slides
      renderMode: "performance",
      slides: { perView: perViewLg, spacing: 10 },
      breakpoints: {
        "(max-width: 1024px)": {
          slides: { perView: perViewMd, spacing: 12 },
        },
        "(max-width: 768px)": {
          slides: { perView: perViewSm, spacing: 10 },
        },
      },
    };
  }, [count]);

  const [sliderRef] = useKeenSlider(options);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[32px] eczar font-semibold text-[#220016]">
          Related Products
        </h2>
      </div>

      {/* Slider */}
      {/* min-w-0 is crucial if parent is flex; overflow-hidden helps layout */}
      <div ref={sliderRef} className="keen-slider min-w-0 overflow-hidden">
        {relatedProducts.map((product, index) => (
          <div
            key={product?.id ?? index}
            className="keen-slider__slide flex items-center justify-center"
          >
            <Link href={`/products/${product.slug}`} prefetch={false}>
              <Image
                src={product.images}
                alt={product.name ?? `Product ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-full object-cover"
                sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                priority={index < 4}
              />
            </Link>
          </div>
        ))}
      </div>

      {/* If you *must* always see 4 tiles even with <4 products,
          render a simple CSS grid instead of a slider as a fallback. */}
      {count === 0 && (
        <div className="text-sm text-gray-500 mt-4">No related products.</div>
      )}
    </div>
  );
}
