"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductRangeDetail({ slug }) {
  const [range, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch(`https://backend.tigertigerfoods.com/api/get-product-range-detail/${slug}`)
      .then((res) => res.json())
      .then((detailRes) => {
        setProduct(detailRes.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (!range) {
    return <div className="p-6 text-red-500">Product not found</div>;
  }

  return (
    <>
      {/* Background image section */}
      <div
        style={{
          backgroundImage: `url(${range.bg_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      ></div>

      <section className="max-w-6xl mx-auto py-12 px-6 md:px-0">
        <div>
          {/* Heading */}
          <h2 className="text-center text-2xl md:text-3xl font-bold eczar">
            {range.products?.length} Existing Flavours
          </h2>

          {/* Products loop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {range.products?.map((p) => (
              <Link href={`/products/${p.slug}`} key={p.id}>
                <div className="h-[320px] md:h-[500px] ">
                  <div
                    key={p.id}
                    className="h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-[#FCE7A2] rounded-xl py-3 text-center shadow-md">
                      <p className="eczar text-[16px] md:text-[20px] font-semibold text-black">
                        {p.name}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
